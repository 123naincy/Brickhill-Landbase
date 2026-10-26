/**
 * Interactive BHL Aaranya master plan.
 *
 * Plot outlines are a visual reading of the photographed layout drawing.
 * They are easy to nudge in buildGeometry() and are not survey coordinates.
 * Facts (area, survey, status) come only from plot-inventory.js.
 */
(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";
  var STATUS_LABEL = { available: "Available", hold: "Hold", sold: "Sold" };
  var TEMPLATE = /^I would like to enquire about Plot \d+/;

  /**
   * Layout constants, in SVG units. Roads are the gaps between these edges.
   * North is at the top, the river is on the east, entry is on the west.
   */
  var L = {
    northBottom: 240,
    blockTop: 284,
    blockBottom: 521,
    twelveTop: 521,
    twelveBottom: 582,
    midTop: 582,
    midBottom: 792,
    lowTop: 792,
    lowBottom: 836,
    northLeft: 150,
    plotW: 84,
    spineLeft: 420,
    spineRight: 468,
    islandRight: 774,
    sideRight: 822,
    courtLeft: 36,
    westLeft: 214
  };

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

  function roundedRect(x, y, w, h, r, corners) {
    var has = function (c) { return corners.indexOf(c) !== -1; };
    var pts = [];
    pts.push(has("tl") ? [x + r, y] : [x, y]);
    pts.push(has("tr") ? [x + w - r, y] : [x + w, y]);
    if (has("tr")) pts.push([x + w, y + r]);
    if (has("br")) {
      pts.push([x + w, y + h - r]);
      pts.push([x + w - r, y + h]);
    } else {
      pts.push([x + w, y + h]);
    }
    if (has("bl")) {
      pts.push([x + r, y + h]);
      pts.push([x, y + h - r]);
    } else {
      pts.push([x, y + h]);
    }
    if (has("tl")) pts.push([x, y + r]);
    return pts;
  }

  function cell(x, y, w, h, corners) {
    if (!corners || !corners.length) return [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
    return roundedRect(x, y, w, h, 16, corners);
  }

  /**
   * Plot positions follow the layout photograph:
   * north row, courts column, two internal blocks, river frontage,
   * southern row, and the tail along the southbound 9 m road.
   * Swap an id here if a number needs to move; do not edit inventory for that.
   */
  function buildGeometry() {
    var plots = [];
    var tops = [196, 168, 138, 106, 78, 56, 48, 86, 138];
    var northIds = ["01", "02", "03", "04", "05", "06", "10", "11"];
    northIds.forEach(function (id, i) {
      var x = L.northLeft + i * L.plotW;
      plots.push({
        id: id,
        points: [[x, tops[i]], [x + L.plotW, tops[i + 1]], [x + L.plotW, L.northBottom], [x, L.northBottom]]
      });
    });

    // Northeast corner plot, above the river frontage.
    plots.push({
      id: "32",
      points: [[822, 138], [948, 176], [930, L.northBottom], [822, L.northBottom]]
    });

    // Between the sports courts and the central 9 m road. Top to bottom: 8, 9, 7.
    var westH = (L.blockBottom - L.blockTop) / 3;
    ["08", "09", "07"].forEach(function (id, i) {
      var corners = i === 0 ? ["tr"] : i === 2 ? ["br"] : [];
      plots.push({
        id: id,
        points: cell(L.westLeft, L.blockTop + i * westH, L.spineLeft - L.westLeft, westH, corners)
      });
    });

    // Upper internal block, three by three, left to right, top to bottom.
    var colW = (L.islandRight - L.spineRight) / 3;
    var rowH = (L.blockBottom - L.blockTop) / 3;
    var upper = ["12", "13", "14", "15", "16", "17", "18", "19", "20"];
    upper.forEach(function (id, i) {
      var col = i % 3;
      var row = Math.floor(i / 3);
      var corners = [];
      if (row === 0 && col === 0) corners.push("tl");
      if (row === 0 && col === 2) corners.push("tr");
      if (row === 2 && col === 0) corners.push("bl");
      if (row === 2 && col === 2) corners.push("br");
      plots.push({
        id: id,
        points: cell(L.spineRight + col * colW, L.blockTop + row * rowH, colW, rowH, corners)
      });
    });

    // East frontage, top to bottom. 27 sits on the southeast marker.
    var riverIds = ["33", "34", "35", "36", "37", "27"];
    var riverY = [284, 394, 508, 622, 736, 850, 1016];
    var riverX = [936, 956, 972, 978, 966, 946, 918];
    riverIds.forEach(function (id, i) {
      plots.push({
        id: id,
        points: [
          [L.sideRight, riverY[i]],
          [riverX[i], riverY[i]],
          [riverX[i + 1], riverY[i + 1]],
          [L.sideRight, riverY[i + 1]]
        ]
      });
    });

    // Between the pool garden and the central road. Top to bottom: 38, 39, 40.
    var midH = (L.midBottom - L.midTop) / 3;
    ["38", "39", "40"].forEach(function (id, i) {
      var corners = i === 0 ? ["tr"] : i === 2 ? ["br"] : [];
      plots.push({
        id: id,
        points: cell(L.westLeft, L.midTop + i * midH, L.spineLeft - L.westLeft, midH, corners)
      });
    });

    // Lower internal block, three by two.
    var lowH = (L.midBottom - L.midTop) / 2;
    var lower = ["21", "22", "23", "24", "25", "26"];
    lower.forEach(function (id, i) {
      var col = i % 3;
      var row = Math.floor(i / 3);
      var corners = [];
      if (row === 0 && col === 0) corners.push("tl");
      if (row === 0 && col === 2) corners.push("tr");
      if (row === 1 && col === 0) corners.push("bl");
      if (row === 1 && col === 2) corners.push("br");
      plots.push({
        id: id,
        points: cell(L.spineRight + col * colW, L.midTop + row * lowH, colW, lowH, corners)
      });
    });

    // South of the lower 9 m road, left to right: 31, 30, 29, 28.
    var southIds = ["31", "30", "29", "28"];
    var southW = (L.islandRight - L.spineRight) / 4;
    var southBottom = [1004, 984, 960, 934, 906];
    southIds.forEach(function (id, i) {
      var x = L.spineRight + i * southW;
      plots.push({
        id: id,
        points: [
          [x, L.lowBottom],
          [x + southW, L.lowBottom],
          [x + southW, southBottom[i + 1]],
          [x, southBottom[i]]
        ]
      });
    });

    // Tail west of the southbound 9 m road. 41 is the large corner plot.
    var tail = [
      { id: "41", y0: 792, y1: 910, x0: 158, x1: 178 },
      { id: "42", y0: 910, y1: 990, x0: 178, x1: 198 },
      { id: "43", y0: 990, y1: 1062, x0: 198, x1: 218 },
      { id: "44", y0: 1062, y1: 1134, x0: 218, x1: 240 },
      { id: "45", y0: 1134, y1: 1210, x0: 240, x1: 264 }
    ];
    tail.forEach(function (item) {
      plots.push({
        id: item.id,
        points: [
          [item.x0, item.y0],
          [L.spineLeft, item.y0],
          [L.spineLeft, item.y1],
          [item.x1, item.y1]
        ]
      });
    });

    return plots;
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
    el("desc", { id: "mpSvgDesc" }, svg).textContent = "Forty-five residential plots, internal roads, amenities, and the river. Outlines are a visual interpretation of the layout drawing, not a survey plan.";

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
      drawTrees(parent, outsideTrees());
      el("path", {
        d: "M930,20 C1040,160 1052,420 1030,700 C1010,940 960,1100 900,1220 L1060,1220 L1060,20 Z",
        fill: "#8eb7dc"
      }, parent);
      el("path", {
        d: "M948,70 C1030,200 1040,460 1018,720 C998,960 952,1100 912,1200",
        fill: "none",
        stroke: "#6ea2cb",
        "stroke-width": "10",
        "stroke-linecap": "round"
      }, parent);
      el("text", {
        class: "mp-water-label",
        x: "990",
        y: "560",
        transform: "rotate(78 990 560)"
      }, parent).textContent = "RIVER";

      // Circulation. Gaps between plots read as these roads.
      rectRoad(parent, 0, L.twelveTop, L.spineRight, L.twelveBottom - L.twelveTop);
      rectRoad(parent, L.northLeft, L.northBottom, L.sideRight - L.northLeft, L.blockTop - L.northBottom);
      rectRoad(parent, L.spineLeft, L.northBottom, L.spineRight - L.spineLeft, 1224 - L.northBottom);
      rectRoad(parent, L.islandRight, L.northBottom, L.sideRight - L.islandRight, 1016 - L.northBottom);
      rectRoad(parent, L.sideRight, L.northBottom, 130, L.blockTop - L.northBottom);
      rectRoad(parent, L.spineRight, L.midBottom, L.sideRight - L.spineRight, L.lowBottom - L.midBottom);

      drawCourts(parent);
      drawGarden(parent);
      drawTrees(parent, gardenTrees());
    }

    function rectRoad(parent, x, y, w, h) {
      el("rect", { x: x, y: y, width: w, height: h, fill: "#c9c4d6" }, parent);
    }

    function drawCourts(parent) {
      var x = L.courtLeft;
      var y = L.blockTop + 8;
      var w = L.westLeft - L.courtLeft - 8;
      var h = L.blockBottom - L.blockTop - 16;
      el("rect", { x: x, y: y, width: w, height: h, rx: "18", fill: "#d7e4c6" }, parent);
      el("rect", {
        x: x + 10, y: y + 10, width: w - 20, height: h - 20, rx: "14",
        fill: "none", stroke: "#c45b4e", "stroke-width": "7"
      }, parent);
      var caption = el("text", {
        class: "mp-amenity-label",
        x: x + w / 2,
        y: y + 26,
        "text-anchor": "middle"
      }, parent);
      caption.textContent = "SPORTS COURTS";
      court(parent, x + 24, y + 36, w - 48, (h - 86) / 2);
      court(parent, x + 24, y + 48 + (h - 86) / 2, w - 48, (h - 86) / 2);
    }

    function court(parent, x, y, w, h) {
      el("rect", { x: x, y: y, width: w, height: h, fill: "#f4efe4", stroke: "#c9bfae", "stroke-width": "1" }, parent);
      el("line", { x1: x + w / 2, y1: y, x2: x + w / 2, y2: y + h, stroke: "#ddd4c6", "stroke-width": "1" }, parent);
    }

    function drawGarden(parent) {
      var x = L.courtLeft;
      var y = L.midTop + 6;
      var w = L.westLeft - L.courtLeft - 8;
      var h = L.midBottom - L.midTop - 12;
      el("rect", { x: x, y: y, width: w, height: h, rx: "16", fill: "#cfe0b4" }, parent);
      el("rect", { x: x + 16, y: y + 36, width: 52, height: 40, fill: "#f7f4ee", stroke: "#bfb7a8", "stroke-width": "1" }, parent);
      el("ellipse", { cx: x + w * 0.48, cy: y + h * 0.42, rx: 28, ry: 18, fill: "#3c86c2" }, parent);
      el("polygon", {
        points: pointsAttr(octagon(x + w * 0.72, y + h * 0.72, 12)),
        fill: "#f3ecdf",
        stroke: "#c4b8a4",
        "stroke-width": "1"
      }, parent);
      el("text", {
        class: "mp-amenity-label",
        x: x + w / 2,
        y: y + 18,
        "text-anchor": "middle"
      }, parent).textContent = "POOL & CLUBHOUSE";
    }

    function octagon(cx, cy, r) {
      var pts = [];
      for (var i = 0; i < 8; i += 1) {
        var a = (Math.PI / 8) + i * (Math.PI / 4);
        pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
      }
      return pts;
    }

    function drawTrees(parent, spots) {
      var g = el("g", { "aria-hidden": "true" }, parent);
      spots.forEach(function (spot) {
        el("circle", { cx: spot[0], cy: spot[1], r: spot[2], fill: "#b7c98f" }, g);
        el("circle", { cx: spot[0] - 1, cy: spot[1] - 1, r: Math.max(1.5, spot[2] * 0.45), fill: "#d5e4b8" }, g);
      });
    }

    function outsideTrees() {
      return [
        [70, 80, 11], [110, 120, 8], [48, 160, 13], [90, 210, 7],
        [42, 340, 12], [24, 430, 8], [58, 640, 11], [30, 860, 14],
        [70, 980, 9], [40, 1100, 12], [96, 1180, 8],
        [520, 1090, 14], [600, 1140, 10], [700, 1080, 16], [640, 1200, 11],
        [860, 1100, 13], [940, 1140, 9], [800, 1180, 12],
        [990, 180, 8], [1010, 260, 11], [1000, 360, 7]
      ];
    }

    function gardenTrees() {
      return [
        [58, 620, 6], [150, 700, 5], [70, 750, 6], [160, 640, 5], [120, 760, 5]
      ];
    }

    function drawLabels(parent) {
      var g = el("g", { "aria-hidden": "true", class: "mp-roads" }, parent);
      roadText(g, "9 M WIDE ROAD", 560, 266);
      roadText(g, "12 M WIDE ROAD", 250, 556);
      roadText(g, "ENTRY  >>", 18, 556, "start");
      roadText(g, "9 M WIDE ROAD", 620, 818);
      verticalText(g, "9 M WIDE ROAD", 444, 430);
      verticalText(g, "9 M WIDE ROAD", 444, 1040);
      verticalText(g, "9 M WIDE ROAD", 798, 560);
      // Marker drawn on the southeast plot in the layout sheet.
      el("circle", { cx: "878", cy: "940", r: "7", fill: "#2f6fbf", stroke: "#f7f4ee", "stroke-width": "2" }, g);
    }

    function roadText(parent, value, x, y, anchor) {
      el("text", {
        class: "mp-road-label",
        x: x,
        y: y,
        "text-anchor": anchor || "middle"
      }, parent).textContent = value;
    }

    function verticalText(parent, value, x, y) {
      el("text", {
        class: "mp-road-label",
        x: x,
        y: y,
        "text-anchor": "middle",
        transform: "rotate(-90 " + x + " " + y + ")"
      }, parent).textContent = value;
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
