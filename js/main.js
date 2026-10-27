const SCRIPTS = {
  lead: "https://script.google.com/macros/s/AKfycbz8HH6OgO-9iyrycG6DgIxMdMIiDO_l-gDK5SpGf_RWxo2jskAOHQ06YYeaBIJ1dz4fWQ/exec",
  visit: "https://script.google.com/macros/s/AKfycbxmiuTW58T1tmQqHYkK9D9n67AHOflAP5T2j18YwpA_1-B5ClBDGRGVrsZkjZt9Ye1eGg/exec",
  project: "https://script.google.com/macros/s/AKfycbwzzPV_sWoqRgg_OXfwQ415TyirXyY1LDybJ3NwomErofBYWdVFvxbY8h4Z7qp8yrTOyQ/exec"
};

const VISIT_LABELS = {
  this_week: "Yes, this week",
  next_week: "Yes, next week",
  details: "Need more details first"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  initNav();
  initLeadGate();
  initForms();
  initCounters();
  initEvents();
  initVideo();
});

function initNav() {
  const nav = document.querySelector(".site-nav");
  if (!nav || !document.body.classList.contains("page-home")) return;

  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initLeadGate() {
  const overlay = document.querySelector("[data-lead-gate]");
  if (!overlay) return;

  const close = () => {
    sessionStorage.setItem("bhlLeadClosed", "1");
    overlay.hidden = true;
  };

  overlay.querySelector("[data-lead-close]")?.addEventListener("click", close);

  if (sessionStorage.getItem("bhlLeadClosed") === "1") {
    overlay.hidden = true;
    return;
  }

  let opened = false;
  const show = () => {
    if (opened || sessionStorage.getItem("bhlLeadClosed") === "1") return;
    opened = true;
    overlay.hidden = false;
    window.removeEventListener("scroll", onScroll);
  };

  const onScroll = () => {
    const depth = document.documentElement.scrollHeight || 1;
    const seen = window.scrollY + window.innerHeight;
    if (seen / depth > 0.45) show();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.setTimeout(show, 20000);
}

function initForms() {
  const visitModal = document.getElementById("visitModal");
  visitModal?.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    const form = event.target.querySelector("form");
    if (!form) return;
    if (trigger) {
      form.dataset.source = trigger.dataset.source || "Website";
      form.dataset.success = trigger.dataset.success || "Submitted successfully.";
      form.dataset.unlockVideo = trigger.dataset.unlockVideo || "false";
      const title = event.target.querySelector("[data-modal-title]");
      if (title) title.textContent = trigger.dataset.modalTitle || "Book Site Visit";
    }
    form.reset();
    form.querySelectorAll(".is-invalid").forEach((field) => field.classList.remove("is-invalid"));
    setAlert(form.querySelector("[data-form-alert]"), "", "");
  });

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => submitForm(event, form));
    form.querySelectorAll("input, textarea, select").forEach((field) => {
      field.addEventListener("blur", () => validateField(field, form));
      if (field.type === "checkbox") {
        field.addEventListener("change", () => validateField(field, form));
      }
      if (field.name === "phone") {
        field.addEventListener("input", () => {
          field.value = field.value.replace(/\D/g, "").slice(0, 10);
        });
      }
    });
  });
}

async function submitForm(event, form) {
  event.preventDefault();
  const type = form.dataset.form;
  const alertBox = form.querySelector("[data-form-alert]");
  const button = form.querySelector("[type='submit']");
  const fields = [...form.querySelectorAll("input, textarea, select")].filter((field) => field.name);

  let valid = true;
  fields.forEach((field) => {
    if (!validateField(field, form)) valid = false;
  });

  if (!valid) {
    setAlert(alertBox, "Please correct the highlighted fields.", "error");
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  button.disabled = true;
  const originalLabel = button.textContent;
  button.textContent = "Submitting...";
  setAlert(alertBox, "", "");

  try {
    if (type === "lead") {
      const body = new FormData();
      body.append("fullName", data.name.trim());
      body.append("email", (data.email || "").trim());
      body.append("phone", data.phone.trim());
      body.append("visit", "Website Access");
      const result = await postForm(SCRIPTS.lead, body);
      if (result.result !== "success") throw new Error("Submission failed");
      sessionStorage.setItem("bhlLeadClosed", "1");
      form.closest("[data-lead-gate]").hidden = true;
      return;
    }

    if (type === "project") {
      const body = new FormData();
      body.append("fullName", data.fullName.trim());
      body.append("email", (data.email || "").trim());
      body.append("phone", data.phone.trim());
      body.append("visit", VISIT_LABELS[data.visit] || data.visit);
      await postForm(SCRIPTS.project, body);
      form.reset();
      setAlert(alertBox, "Submitted successfully.", "success");
      return;
    }

    const plotNumber = (data.plotNumber || "").trim();
    const plotArea = (data.plotArea || "").trim();
    const project = (data.project || "").trim();
    let message = (data.message || "").trim();
    if (plotNumber && !message.includes(plotNumber)) {
      message = `${message}${message ? "\n\n" : ""}Interested plot: ${plotNumber}${project ? ` at ${project}` : ""}${plotArea ? ` (${plotArea})` : ""}.`;
    }
    const body = new URLSearchParams({
      name: (data.name || "").trim(),
      email: (data.email || "").trim(),
      phone: (data.phone || "").trim(),
      message,
      subject: (data.subject || "").trim(),
      source: form.dataset.source || "Website"
    });
    if (project) body.append("project", project);
    if (plotNumber) body.append("plotNumber", plotNumber);
    if (plotArea) body.append("plotArea", plotArea);
    const result = await postJson(SCRIPTS.visit, body);
    if (result.result !== "success") throw new Error("Submission failed");

    form.reset();
    setAlert(alertBox, form.dataset.success || "Submitted successfully.", "success");

    if (form.dataset.unlockVideo === "true") {
      const visitModal = bootstrap.Modal.getInstance(document.getElementById("visitModal"));
      visitModal?.hide();
      const frame = document.querySelector("#videoModal iframe");
      if (frame) frame.src = "https://www.youtube.com/embed/H1oGY-7wI-4?autoplay=1";
      bootstrap.Modal.getOrCreateInstance(document.getElementById("videoModal")).show();
    } else if (form.closest(".modal")) {
      setTimeout(() => {
        bootstrap.Modal.getInstance(form.closest(".modal"))?.hide();
      }, 700);
    }
  } catch (error) {
    setAlert(alertBox, "Something went wrong. Please try again.", "error");
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
}

function validateField(field, form) {
  const value = field.value.trim();
  let message = "";

  if (field.type === "checkbox") {
    message = field.required && !field.checked ? "Please confirm consent" : "";
    field.classList.toggle("is-invalid", Boolean(message));
    const feedback = field.parentElement.querySelector(".invalid-feedback");
    if (feedback) feedback.textContent = message;
    return !message;
  }

  if (field.type === "radio") {
    const chosen = form.querySelector(`input[name="${field.name}"]:checked`);
    message = chosen ? "" : "Please select an option";
    const box = form.querySelector(`[data-error-for="${field.name}"]`);
    if (box) box.textContent = message;
    return !message;
  }

  if (field.required && !value) {
    message = "This field is required";
  } else if (field.name === "name" || field.name === "fullName") {
    if (value && !/^[A-Za-z\s]+$/.test(value)) message = "Only letters are allowed";
    else if (value && value.length < 3) message = "Enter at least 3 characters";
  } else if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = "Enter a valid email";
  } else if (field.name === "phone" && value && !/^[6-9]\d{9}$/.test(value)) {
    message = "Enter a valid 10-digit mobile number";
  } else if (field.name === "message" && value && value.length < 10) {
    message = "Message must be at least 10 characters";
  }

  field.classList.toggle("is-invalid", Boolean(message));
  const feedback = field.parentElement.querySelector(".invalid-feedback");
  if (feedback) feedback.textContent = message;
  return !message;
}

async function postForm(url, body) {
  const response = await fetch(url, { method: "POST", body });
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return { result: response.ok ? "success" : "error" };
  }
}

async function postJson(url, body) {
  const response = await fetch(url, { method: "POST", body });
  const text = await response.text();
  return JSON.parse(text);
}

function setAlert(node, message, type) {
  if (!node) return;
  node.textContent = message;
  node.className = `form-alert ${type || ""}`.trim();
}

function initCounters() {
  const nodes = document.querySelectorAll("[data-count]");
  if (!nodes.length) return;

  const start = (node) => {
    const end = Number(node.dataset.count);
    const suffix = node.dataset.suffix || "";
    const decimals = Number(node.dataset.decimals || 0);
    const factor = 10 ** decimals;
    const duration = 1200;
    const begun = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - begun) / duration, 1);
      const value = Math.round(end * progress * factor) / factor;
      node.textContent = `${decimals ? value.toFixed(decimals) : Math.round(value)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      start(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  nodes.forEach((node) => observer.observe(node));
}

function initEvents() {
  const modal = document.getElementById("eventModal");
  if (!modal) return;

  const dialog = bootstrap.Modal.getOrCreateInstance(modal);
  document.querySelectorAll("[data-event]").forEach((card) => {
    const open = () => {
      const event = JSON.parse(card.dataset.event);
      modal.querySelector("[data-event-title]").textContent = event.title;
      modal.querySelector("[data-event-meta]").innerHTML = `
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p>${event.description}</p>
      `;
      modal.querySelector("[data-event-gallery]").innerHTML = event.images
        .map((src) => `<div class="col-6 col-md-4"><img src="${src}" alt="" class="w-100 rounded"></div>`)
        .join("");
      dialog.show();
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function initVideo() {
  const modal = document.getElementById("videoModal");
  if (!modal) return;
  modal.addEventListener("hidden.bs.modal", () => {
    const frame = modal.querySelector("iframe");
    if (frame) frame.src = "";
  });
}
