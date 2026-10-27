/**
 * Interactive BHL Aaranya master plan.
 *
 * Plot outlines are traced from the layout drawing.
 * They follow that sheet and are not survey coordinates.
 * Facts (area, survey, status) come only from plot-inventory.js.
 */
(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";
  var STATUS_LABEL = { available: "Available", hold: "Hold", sold: "Sold" };
  var TEMPLATE = /^I would like to enquire about Plot \d+/;

  var SHEET = { x: 16, y: 139.37, w: 1028.0, h: 981.27 };

  function buildGeometry() {
    return [
      { id: "01", points: [[493.1, 476.3], [502.9, 523.0], [467.3, 543.9], [424.2, 550.1], [412.0, 494.7], [491.9, 477.5]] },
      { id: "02", points: [[625.9, 444.3], [649.3, 500.9], [579.2, 519.3], [546.0, 504.6], [536.1, 464.0], [624.7, 445.6]] },
      { id: "03", points: [[728.0, 422.2], [746.4, 467.7], [718.1, 489.8], [654.2, 499.7], [634.5, 443.1], [726.7, 423.4]] },
      { id: "04", points: [[698.5, 366.9], [725.5, 418.5], [632.1, 438.2], [613.6, 385.3], [697.2, 368.1]] },
      { id: "05", points: [[651.7, 299.2], [677.6, 304.1], [702.2, 361.9], [611.2, 380.4], [590.3, 322.6], [650.5, 300.5]] },
      { id: "06", points: [[582.9, 323.8], [606.2, 382.8], [520.2, 398.8], [514.0, 348.4], [581.6, 325.0]] },
      { id: "07", points: [[602.6, 387.8], [627.1, 439.4], [534.9, 459.1], [522.6, 405.0], [601.3, 389.0]] },
      { id: "08", points: [[473.4, 418.5], [491.9, 471.4], [409.5, 488.6], [399.7, 435.7], [472.2, 419.7]] },
      { id: "09", points: [[451.3, 365.6], [473.4, 382.8], [477.1, 413.6], [396.0, 430.8], [382.4, 370.5], [403.3, 371.8], [407.0, 371.8], [450.1, 366.9]] },
      { id: "10", points: [[185.7, 259.9], [230.0, 261.1], [252.1, 269.7], [261.9, 325.0], [204.1, 337.3], [185.7, 261.1]] },
      { id: "11", points: [[255.8, 263.6], [336.9, 267.3], [343.1, 314.0], [266.9, 325.0], [255.8, 264.8]] },
      { id: "12", points: [[341.9, 267.3], [424.2, 270.9], [423.0, 326.3], [393.5, 328.7], [348.0, 322.6], [341.9, 268.5]] },
      { id: "13", points: [[498.0, 237.7], [516.5, 296.8], [427.9, 326.3], [429.2, 272.2], [468.5, 261.1], [496.8, 239.0]] },
      { id: "14", points: [[553.4, 194.7], [574.3, 279.6], [521.4, 296.8], [504.2, 242.7], [552.1, 195.9]] },
      { id: "15", points: [[590.3, 166.4], [603.8, 170.1], [612.4, 207.0], [617.3, 227.9], [625.9, 263.6], [578.0, 275.9], [558.3, 191.0], [589.0, 167.7]] },
      { id: "16", points: [[608.7, 171.3], [676.3, 192.2], [683.7, 237.7], [630.8, 261.1], [608.7, 172.6]] },
      { id: "17", points: [[684.9, 195.9], [780.9, 225.4], [787.0, 239.0], [757.5, 251.3], [744.0, 257.4], [709.5, 272.2], [688.6, 243.9], [684.9, 197.2]] },
      { id: "18", points: [[791.9, 241.4], [814.1, 290.6], [736.6, 325.0], [723.1, 305.4], [714.4, 275.9], [790.7, 242.7]] },
      { id: "19", points: [[814.1, 295.5], [825.1, 315.2], [828.8, 322.6], [837.4, 344.7], [762.4, 377.9], [748.9, 365.6], [737.8, 330.0], [812.8, 296.8]] },
      { id: "20", points: [[839.9, 348.4], [860.8, 398.8], [783.3, 433.3], [772.2, 419.7], [759.9, 384.1], [838.6, 349.6]] },
      { id: "21", points: [[859.6, 403.7], [884.1, 451.7], [807.9, 486.1], [795.6, 472.6], [784.5, 436.9], [858.3, 405.0]] },
      { id: "22", points: [[885.4, 456.6], [906.3, 505.8], [828.8, 540.2], [819.0, 526.7], [807.9, 491.1], [884.1, 457.9]] },
      { id: "23", points: [[908.7, 509.5], [929.6, 558.7], [852.2, 594.3], [839.9, 574.7], [831.3, 543.9], [907.5, 510.7]] },
      { id: "24", points: [[929.6, 564.8], [951.8, 614.0], [934.6, 621.4], [875.5, 648.5], [863.2, 628.8], [854.6, 598.0], [928.4, 566.1]] },
      { id: "25", points: [[954.2, 617.7], [975.1, 666.9], [900.1, 701.3], [886.6, 682.9], [876.8, 652.1], [953.0, 618.9]] },
      { id: "26", points: [[976.4, 671.8], [998.5, 721.0], [922.3, 755.4], [910.0, 737.0], [900.1, 706.2], [975.1, 673.0]] },
      { id: "27", points: [[999.7, 725.9], [1030.5, 796.0], [940.7, 798.5], [928.4, 780.0], [924.7, 759.1], [998.5, 727.1]] },
      { id: "28", points: [[826.3, 714.9], [858.3, 723.5], [890.3, 798.5], [817.7, 799.7], [800.5, 723.5], [825.1, 716.1]] },
      { id: "29", points: [[793.1, 724.7], [812.8, 799.7], [746.4, 793.6], [734.1, 738.2], [791.9, 725.9]] },
      { id: "30", points: [[724.3, 739.4], [742.7, 802.2], [673.9, 816.9], [660.3, 754.2], [723.1, 740.7]] },
      { id: "31", points: [[635.8, 755.4], [655.4, 755.4], [670.2, 824.3], [624.7, 846.4], [595.2, 776.3], [634.5, 756.7]] },
      { id: "32", points: [[640.7, 646.0], [662.8, 707.5], [600.1, 721.0], [575.5, 707.5], [565.7, 663.2], [639.4, 647.2]] },
      { id: "33", points: [[720.6, 628.8], [742.7, 690.3], [667.7, 705.0], [649.3, 644.8], [719.4, 630.0]] },
      { id: "34", points: [[805.4, 610.3], [830.0, 655.8], [825.1, 670.6], [746.4, 685.3], [729.2, 627.5], [773.5, 617.7], [804.2, 611.6]] },
      { id: "35", points: [[756.3, 536.6], [780.9, 545.2], [807.9, 605.4], [774.7, 611.6], [745.2, 618.9], [726.7, 621.4], [704.6, 548.8], [755.0, 537.8]] },
      { id: "36", points: [[693.5, 550.1], [723.1, 623.9], [648.0, 638.6], [640.7, 615.3], [625.9, 564.8], [692.3, 551.3]] },
      { id: "37", points: [[614.8, 567.3], [635.8, 615.3], [625.9, 644.8], [564.4, 658.3], [552.1, 622.6], [560.7, 579.6], [613.6, 568.5]] },
      { id: "38", points: [[484.5, 595.6], [504.2, 604.2], [518.9, 662.0], [445.2, 678.0], [427.9, 607.9], [483.3, 596.8]] },
      { id: "39", points: [[515.2, 666.9], [533.7, 722.2], [458.7, 735.8], [446.4, 682.9], [514.0, 668.1]] },
      { id: "40", points: [[534.9, 727.1], [544.8, 809.5], [475.9, 807.1], [461.1, 745.6], [533.7, 728.4]] },
      { id: "41", points: [[490.7, 853.8], [499.3, 901.8], [425.5, 922.7], [345.6, 921.4], [336.9, 887.0], [489.4, 855.0]] },
      { id: "42", points: [[496.8, 853.8], [576.7, 857.5], [586.6, 884.5], [584.1, 920.2], [537.4, 919.0], [507.9, 917.7], [496.8, 855.0]] },
      { id: "43", points: [[507.9, 922.7], [584.1, 925.1], [586.6, 944.8], [584.1, 986.6], [512.8, 984.1], [507.9, 923.9]] },
      { id: "44", points: [[511.6, 989.1], [584.1, 991.5], [587.8, 1011.2], [585.3, 1051.8], [509.1, 1049.3], [511.6, 990.3]] },
      { id: "45", points: [[509.1, 1054.2], [564.4, 1056.7], [584.1, 1056.7], [585.3, 1119.4], [505.4, 1108.3], [507.9, 1055.5]] }
    ];
  }

  function el(name, attrs, parent) {
    var node = document.createElementNS(SVG_NS, name);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (attrs[key] != null) node.setAttribute(key, attrs[key]);
      });
    }
    if (parent) parent.appendChild(node);
    return node;
  }

  function pointsAttr(points) {
    return points.map(function (p) { return p[0] + "," + p[1]; }).join(" ");
  }

  function centroid(points) {
    var x = 0;
    var y = 0;
    points.forEach(function (p) {
      x += p[0];
      y += p[1];
    });
    return [x / points.length, y / points.length];
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function formatArea(plot) {
    return plot.areaSqM + " sq. m / " + plot.areaSqYd + " sq. yd";
  }

  function readInventory() {
    var source = window.BHL_AARANYA_PLOTS || [];
    return source.map(function (plot) {
      return {
        id: String(plot.id).padStart(2, "0"),
        plotNumber: Number(plot.plotNumber),
        surveyNumber: String(plot.surveyNumber),
        hissaNumber: String(plot.hissaNumber),
        areaSqM: Number(plot.areaSqM),
        areaSqYd: Number(plot.areaSqYd),
        status: plot.status
      };
    });
  }

  function BHLMasterPlan() {
    var root = document.getElementById("aaranyaMasterPlan");
    if (!root || root.dataset.ready === "true") return;

    var inventory = readInventory();
    var byId = {};
    inventory.forEach(function (plot) { byId[plot.id] = plot; });

    var geometry = buildGeometry();
    var mount = document.getElementById("mpMount");
    var stage = document.getElementById("mpStage");
    var tooltip = document.getElementById("mpTooltip");
    var cursorPin = document.getElementById("mpCursor");
    var anchorPin = document.getElementById("mpAnchor");
    var panelBody = document.getElementById("mpPanelBody");
    var panel = document.getElementById("mpPanel");
    var backdrop = document.getElementById("mpBackdrop");
    var empty = document.getElementById("mpEmpty");
    var result = document.getElementById("mpResult");
    var search = document.getElementById("mpSearch");
    var form = document.getElementById("aaranya-enquire");

    var state = {
      status: "all",
      query: "",
      selected: null,
      zoom: 1,
      finePointer: window.matchMedia("(hover: hover) and (pointer: fine)").matches
    };
    var hideTimer = 0;
    var originalSource = form ? (form.dataset.source || "Sindhudurg Contact") : "";

    var svg = el("svg", {
      viewBox: "0 0 1060 1260",
      role: "img",
      "aria-labelledby": "mpSvgTitle mpSvgDesc"
    });
    el("title", { id: "mpSvgTitle" }, svg).textContent = "BHL Aaranya illustrative master plan";
    el("desc", { id: "mpSvgDesc" }, svg).textContent = "Forty-five residential plots, internal roads, amenities, and the river. Outlines follow the layout drawing and are not a survey plan.";

    drawSheet(svg);
    var plotLayer = el("g", { id: "mpPlots" }, svg);
    geometry.forEach(function (shape) {
      var plot = byId[shape.id];
      if (!plot) return;
      plotLayer.appendChild(renderPlot(shape, plot));
    });
    drawLabels(svg);
    mount.replaceChildren(svg);
    root.dataset.ready = "true";

    bindPlots();
    bindPinCursor();
    bindToolbar();
    bindZoom();
    bindPanel();
    bindFormReset();
    renderPanel(null);
    applyFilter();

    function renderPlot(shape, plot) {
      var g = el("g", {
        class: "mp-plot",
        "data-id": plot.id,
        "data-status": plot.status,
        role: "button",
        tabindex: "0",
        "aria-label": "Plot " + pad(plot.plotNumber) + ", " + STATUS_LABEL[plot.status] + ", " + plot.areaSqM + " square metres"
      });
      el("polygon", { class: "mp-plot__base", points: pointsAttr(shape.points) }, g);
      el("polygon", { class: "mp-plot__shape", points: pointsAttr(shape.points) }, g);
      var c = centroid(shape.points);
      var label = el("text", {
        class: "mp-plot__no",
        x: c[0],
        y: c[1],
        "text-anchor": "middle",
        "dominant-baseline": "middle"
      }, g);
      label.textContent = String(plot.plotNumber);
      return g;
    }

    function drawSheet(parent) {
      el("rect", { width: "1060", height: "1260", fill: "#e7f0e4" }, parent);
      var image = el("image", {
        href: "assets/aaranya-sheet.jpg",
        x: SHEET.x,
        y: SHEET.y,
        width: SHEET.w,
        height: SHEET.h,
        preserveAspectRatio: "none"
      }, parent);
      image.setAttributeNS("http://www.w3.org/1999/xlink", "href", "assets/aaranya-sheet.jpg");
    }

    function drawLabels(parent) {
      var plot = geometry.filter(function (shape) { return shape.id === "27"; })[0];
      if (!plot) return;
      var corner = plot.points[0];
      plot.points.forEach(function (point) {
        if (point[0] + point[1] > corner[0] + corner[1]) corner = point;
      });
      var center = centroid(plot.points);
      el("circle", {
        cx: (center[0] * 0.42 + corner[0] * 0.58).toFixed(1),
        cy: (center[1] * 0.42 + corner[1] * 0.58).toFixed(1),
        r: "7",
        fill: "#2f6fbf",
        stroke: "#f7f4ee",
        "stroke-width": "2"
      }, parent);
    }

    function bindPlots() {
      plotLayer.querySelectorAll(".mp-plot").forEach(function (node) {
        node.addEventListener("mouseenter", function () {
          if (!state.finePointer || node.classList.contains("is-dim")) return;
          showTooltip(node);
        });
        node.addEventListener("mouseleave", queueHideTooltip);
        node.addEventListener("focus", function () {
          showTooltip(node);
        });
        node.addEventListener("blur", queueHideTooltip);
        node.addEventListener("click", function () {
          if (node.classList.contains("is-dim")) return;
          openPlot(node.getAttribute("data-id"));
        });
        node.addEventListener("keydown", function (event) {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          if (node.classList.contains("is-dim")) return;
          openPlot(node.getAttribute("data-id"));
        });
      });

      tooltip.addEventListener("mouseenter", function () { window.clearTimeout(hideTimer); });
      tooltip.addEventListener("mouseleave", queueHideTooltip);
      tooltip.querySelector("[data-mp-open]").addEventListener("click", function () {
        var id = tooltip.getAttribute("data-id");
        if (id) openPlot(id);
      });
    }

    function bindPinCursor() {
      if (!cursorPin || !state.finePointer) return;
      stage.addEventListener("pointermove", function (event) {
        if (event.pointerType !== "mouse") return;
        cursorPin.hidden = false;
        cursorPin.style.left = event.clientX + "px";
        cursorPin.style.top = event.clientY + "px";
        var hot = event.target.closest && event.target.closest(".mp-plot:not(.is-dim)");
        cursorPin.classList.toggle("is-hot", Boolean(hot));
      });
      stage.addEventListener("pointerleave", function () {
        cursorPin.hidden = true;
        cursorPin.classList.remove("is-hot");
      });
    }

    function showTooltip(node) {
      var plot = byId[node.getAttribute("data-id")];
      if (!plot) return;
      window.clearTimeout(hideTimer);
      tooltip.hidden = false;
      tooltip.setAttribute("data-id", plot.id);
      tooltip.querySelector("[data-mp-num]").textContent = "Plot " + pad(plot.plotNumber);
      var badge = tooltip.querySelector("[data-mp-status]");
      badge.textContent = STATUS_LABEL[plot.status];
      badge.className = "mp-badge mp-badge--" + plot.status;
      tooltip.querySelector("[data-mp-sqm]").textContent = plot.areaSqM + " sq. m";
      tooltip.querySelector("[data-mp-sqyd]").textContent = plot.areaSqYd + " sq. yd";
      tooltip.querySelector("[data-mp-survey]").textContent = plot.surveyNumber;
      tooltip.querySelector("[data-mp-hissa]").textContent = plot.hissaNumber;
      tooltip.setAttribute("aria-hidden", "false");
      revealFromPlot(node);
    }

    function revealFromPlot(node) {
      var box = node.getBoundingClientRect();
      var cx = box.left + box.width / 2;
      var cy = box.top + box.height / 2;
      var gap = 16;
      tooltip.style.transition = "none";
      tooltip.classList.remove("is-on");
      tooltip.style.left = "0px";
      tooltip.style.top = "0px";
      var width = tooltip.offsetWidth;
      var height = tooltip.offsetHeight;
      var left = cx - width / 2;
      var top = cy - height - gap;
      var above = true;
      if (top < 12) {
        top = cy + gap;
        above = false;
      }
      left = Math.max(12, Math.min(left, window.innerWidth - width - 12));
      top = Math.max(12, Math.min(top, window.innerHeight - height - 12));
      var tail = Math.max(18, Math.min(width - 18, cx - left));
      tooltip.style.left = left + "px";
      tooltip.style.top = top + "px";
      tooltip.style.setProperty("--mp-origin-x", tail + "px");
      tooltip.style.setProperty("--mp-origin-y", above ? "100%" : "0%");
      tooltip.style.setProperty("--mp-tail", tail + "px");
      tooltip.classList.toggle("is-above", above);
      tooltip.classList.toggle("is-below", !above);
      if (anchorPin) {
        anchorPin.hidden = false;
        anchorPin.style.transition = "none";
        anchorPin.classList.remove("is-on");
        anchorPin.style.left = cx + "px";
        anchorPin.style.top = cy + "px";
      }
      void tooltip.offsetWidth;
      tooltip.style.transition = "";
      if (anchorPin) anchorPin.style.transition = "";
      window.requestAnimationFrame(function () {
        tooltip.classList.add("is-on");
        if (anchorPin) anchorPin.classList.add("is-on");
      });
    }

    function queueHideTooltip() {
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(hideTooltip, 140);
    }

    function hideTooltip() {
      tooltip.classList.remove("is-on");
      if (anchorPin) anchorPin.classList.remove("is-on");
      tooltip.setAttribute("aria-hidden", "true");
      window.setTimeout(function () {
        if (!tooltip.classList.contains("is-on")) {
          tooltip.hidden = true;
          if (anchorPin) anchorPin.hidden = true;
        }
      }, 280);
    }

    function openPlot(id) {
      var plot = byId[id];
      if (!plot || !isMatch(plot)) return;
      state.selected = id;
      plotLayer.querySelectorAll(".mp-plot").forEach(function (node) {
        node.classList.toggle("is-selected", node.getAttribute("data-id") === id);
      });
      renderPanel(plot);
      hideTooltip();
      if (window.matchMedia("(max-width: 991.98px)").matches) {
        panel.classList.add("is-open");
        backdrop.hidden = false;
      }
    }

    function closePanel() {
      panel.classList.remove("is-open");
      backdrop.hidden = true;
    }

    function renderPanel(plot) {
      if (!plot) {
        panelBody.innerHTML = '<p class="mp-kicker">Plot details</p><h3 class="mp-panel__title">Select a plot</h3><p class="mp-panel__copy">Hover a plot for a quick summary, or select one to see the area, survey details, and enquiry option.</p>';
        return;
      }
      panelBody.innerHTML =
        '<p class="mp-kicker">BHL Aaranya</p>' +
        '<h3 class="mp-panel__title">Plot ' + pad(plot.plotNumber) + '</h3>' +
        '<p><span class="mp-badge mp-badge--' + plot.status + '">' + STATUS_LABEL[plot.status] + '</span></p>' +
        '<dl class="mp-facts">' +
          '<div><dt>Area</dt><dd>' + plot.areaSqM + ' sq. m</dd></div>' +
          '<div><dt>Area</dt><dd>' + plot.areaSqYd + ' sq. yd</dd></div>' +
          '<div><dt>Survey No.</dt><dd>' + plot.surveyNumber + '</dd></div>' +
          '<div><dt>Hissa No.</dt><dd>' + plot.hissaNumber + '</dd></div>' +
        '</dl>' +
        '<p class="mp-panel__note">Status shown here is sample data until the sales inventory is updated.</p>' +
        '<button class="btn-gold w-100" type="button" id="mpEnquire">Enquire About This Plot</button>';
      document.getElementById("mpEnquire").addEventListener("click", function () {
        enquire(plot);
      });
    }

    function enquire(plot) {
      if (!form) {
        document.getElementById("aaranya-contact").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      var note = document.getElementById("plotEnquiry");
      var number = form.querySelector("[name='plotNumber']");
      var area = form.querySelector("[name='plotArea']");
      var subject = form.querySelector("[name='subject']");
      var message = form.querySelector("[name='message']");
      var label = "Plot " + pad(plot.plotNumber);
      if (number) number.value = label;
      if (area) area.value = formatArea(plot);
      if (subject) subject.value = "BHL Aaranya — " + label;
      form.dataset.source = "BHL Aaranya Master Plan — " + label;
      if (message && (!message.value.trim() || TEMPLATE.test(message.value.trim()))) {
        message.value = "I would like to enquire about " + label + " at BHL Aaranya (" + formatArea(plot) + "). Survey No. " + plot.surveyNumber + ", Hissa No. " + plot.hissaNumber + ".";
      }
      if (note) {
        note.hidden = false;
        document.getElementById("plotEnquiryTitle").textContent = label;
        document.getElementById("plotEnquiryMeta").textContent = formatArea(plot) + " · Survey " + plot.surveyNumber + " · Hissa " + plot.hissaNumber;
      }
      closePanel();
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      var name = form.querySelector("[name='name']");
      if (name) window.setTimeout(function () { name.focus(); }, 400);
    }

    function clearEnquiry() {
      if (!form) return;
      var note = document.getElementById("plotEnquiry");
      var number = form.querySelector("[name='plotNumber']");
      var area = form.querySelector("[name='plotArea']");
      var subject = form.querySelector("[name='subject']");
      var message = form.querySelector("[name='message']");
      if (number) number.value = "";
      if (area) area.value = "";
      if (subject) subject.value = "";
      form.dataset.source = originalSource;
      if (message && TEMPLATE.test(message.value.trim())) message.value = "";
      if (note) note.hidden = true;
    }

    function bindFormReset() {
      if (!form) return;
      form.addEventListener("reset", function () {
        window.setTimeout(clearEnquiry, 0);
      });
      var clear = document.getElementById("plotEnquiryClear");
      if (clear) clear.addEventListener("click", clearEnquiry);
    }

    function bindToolbar() {
      root.querySelectorAll("[data-filter]").forEach(function (button) {
        button.addEventListener("click", function () {
          state.status = button.getAttribute("data-filter");
          root.querySelectorAll("[data-filter]").forEach(function (chip) {
            var on = chip === button;
            chip.classList.toggle("is-active", on);
            chip.setAttribute("aria-pressed", on ? "true" : "false");
          });
          applyFilter();
        });
      });
      search.addEventListener("input", function () {
        state.query = search.value;
        applyFilter();
      });
      document.getElementById("mpClear").addEventListener("click", clearFilters);
      document.getElementById("mpEmptyClear").addEventListener("click", clearFilters);
    }

    function clearFilters() {
      state.status = "all";
      state.query = "";
      search.value = "";
      root.querySelectorAll("[data-filter]").forEach(function (chip) {
        var on = chip.getAttribute("data-filter") === "all";
        chip.classList.toggle("is-active", on);
        chip.setAttribute("aria-pressed", on ? "true" : "false");
      });
      applyFilter();
      search.focus();
    }

    function isMatch(plot) {
      var statusOk = state.status === "all" || plot.status === state.status;
      return statusOk && matchesQuery(plot, state.query);
    }

    function matchesQuery(plot, query) {
      var q = String(query || "").replace(/\D/g, "");
      if (!q) return true;
      var raw = String(plot.plotNumber);
      var padded = pad(plot.plotNumber);
      if (q.length >= 2) return padded === q.padStart(2, "0") || raw === String(Number(q));
      return raw.indexOf(q) === 0;
    }

    function applyFilter() {
      var matches = [];
      inventory.forEach(function (plot) {
        var node = plotLayer.querySelector('[data-id="' + plot.id + '"]');
        if (!node) return;
        var on = isMatch(plot);
        node.classList.toggle("is-dim", !on);
        node.classList.toggle("is-match", on && (state.status !== "all" || state.query !== ""));
        node.tabIndex = on ? 0 : -1;
        node.setAttribute("aria-disabled", on ? "false" : "true");
        if (on) matches.push(plot);
      });

      var counts = { available: 0, hold: 0, sold: 0 };
      inventory.forEach(function (plot) { counts[plot.status] += 1; });
      document.getElementById("mpCountAll").textContent = String(inventory.length);
      document.getElementById("mpCountAvailable").textContent = String(counts.available);
      document.getElementById("mpCountHold").textContent = String(counts.hold);
      document.getElementById("mpCountSold").textContent = String(counts.sold);

      var filtering = state.status !== "all" || state.query !== "";
      if (!filtering) {
        result.textContent = inventory.length + " plots on this illustrative plan.";
      } else if (matches.length) {
        result.textContent = "Showing " + matches.length + " of " + inventory.length + " plots.";
      } else {
        result.textContent = "No plots match your search.";
      }
      empty.hidden = matches.length !== 0;

      if (state.selected && !isMatch(byId[state.selected])) {
        state.selected = null;
        plotLayer.querySelectorAll(".is-selected").forEach(function (node) {
          node.classList.remove("is-selected");
        });
        renderPanel(null);
        closePanel();
      }

      if (matches.length === 1 && state.query) scrollPlotIntoStage(matches[0].id);
    }

    function scrollPlotIntoStage(id) {
      var node = plotLayer.querySelector('[data-id="' + id + '"]');
      if (!node) return;
      var nb = node.getBoundingClientRect();
      var sb = stage.getBoundingClientRect();
      stage.scrollLeft += nb.left - sb.left - (sb.width - nb.width) / 2;
      stage.scrollTop += nb.top - sb.top - (sb.height - nb.height) / 2;
    }

    function bindZoom() {
      document.getElementById("mpZoomIn").addEventListener("click", function () { setZoom(state.zoom + 0.25); });
      document.getElementById("mpZoomOut").addEventListener("click", function () { setZoom(state.zoom - 0.25); });
      document.getElementById("mpZoomReset").addEventListener("click", function () { setZoom(1); });

      var pinch = 0;
      stage.addEventListener("touchstart", function (event) {
        if (event.touches.length === 2) pinch = touchDistance(event.touches);
      }, { passive: true });
      stage.addEventListener("touchmove", function (event) {
        if (event.touches.length !== 2 || !pinch) return;
        event.preventDefault();
        var next = touchDistance(event.touches);
        setZoom(state.zoom * (next / pinch));
        pinch = next;
      }, { passive: false });
      stage.addEventListener("touchend", function () { pinch = 0; });

      stage.addEventListener("keydown", function (event) {
        if (event.target !== stage) return;
        var step = 48;
        if (event.key === "ArrowRight") stage.scrollLeft += step;
        else if (event.key === "ArrowLeft") stage.scrollLeft -= step;
        else if (event.key === "ArrowDown") stage.scrollTop += step;
        else if (event.key === "ArrowUp") stage.scrollTop -= step;
        else return;
        event.preventDefault();
      });

      window.addEventListener("resize", function () { applyZoom(false); });
      applyZoom(false);
    }

    function touchDistance(touches) {
      var dx = touches[0].clientX - touches[1].clientX;
      var dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    }

    function setZoom(value) {
      state.zoom = Math.min(2.6, Math.max(1, value));
      applyZoom(true);
    }

    function applyZoom() {
      var base = Math.max(stage.clientWidth, 760);
      svg.style.width = (base * state.zoom) + "px";
      svg.style.height = "auto";
    }

    function bindPanel() {
      document.getElementById("mpPanelClose").addEventListener("click", closePanel);
      backdrop.addEventListener("click", closePanel);
      document.addEventListener("keydown", function (event) {
        if (event.key !== "Escape") return;
        hideTooltip();
        closePanel();
      });
    }

    window.BHLMasterPlan = {
      refresh: function () {
        var next = readInventory();
        inventory.length = 0;
        next.forEach(function (plot) {
          inventory.push(plot);
          byId[plot.id] = plot;
          var node = plotLayer.querySelector('[data-id="' + plot.id + '"]');
          if (!node) return;
          node.setAttribute("data-status", plot.status);
          node.setAttribute("aria-label", "Plot " + pad(plot.plotNumber) + ", " + (STATUS_LABEL[plot.status] || plot.status) + ", " + plot.areaSqM + " square metres");
        });
        applyFilter();
        renderPanel(state.selected ? byId[state.selected] : null);
      }
    };
  }

  document.addEventListener("DOMContentLoaded", BHLMasterPlan);
})();
