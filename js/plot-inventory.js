/**
 * BHL Aaranya plot inventory.
 *
 * This file is the only place plot facts and availability should be edited.
 * Geometry and page layout read from window.BHL_AARANYA_PLOTS.
 *
 * HOW TO UPDATE AVAILABILITY
 * 1. Find the plot in the table below.
 * 2. Change the last column to one of: "available", "hold", "sold".
 * 3. Save and refresh the BHL Aaranya page.
 * Colours, legend counts, and filters update from this list. Do not set
 * status with CSS classes.
 *
 * DEMO DATA
 * Statuses below are sample values for the master plan.
 * Sold: plots 22 and 41. Hold: plots 3 and 4. Every other plot is available.
 * They are not a confirmed sales inventory. Replace them before using this
 * page to tell buyers which plots are free.
 *
 * Areas and survey details follow the layout sheet
 * "PLOT AREA TABLE. S. NO.135/1". Plot 01 is survey 133; plots 02–45 are
 * survey 135. Hissa number on every row is 1/1B.
 *
 * LATER CRM / API
 * Replace the assignment to window.BHL_AARANYA_PLOTS with data from your
 * API, keeping the same field names, then call BHLMasterPlan.refresh()
 * if the plan is already on screen.
 *
 * Columns: id, plotNumber, surveyNumber, hissaNumber, areaSqM, areaSqYd, status
 */
(function () {
  var rows = [
    ["01", 1, "133", "1/1B", 324, 387, "available"],
    ["02", 2, "135", "1/1B", 392, 468, "available"],
    ["03", 3, "135", "1/1B", 393, 470, "hold"],
    ["04", 4, "135", "1/1B", 350, 418, "hold"],
    ["05", 5, "135", "1/1B", 399, 477, "available"],
    ["06", 6, "135", "1/1B", 330, 394, "available"],
    ["07", 7, "135", "1/1B", 339, 405, "available"],
    ["08", 8, "135", "1/1B", 317, 379, "available"],
    ["09", 9, "135", "1/1B", 315, 376, "available"],
    ["10", 10, "135", "1/1B", 306, 365, "available"],
    ["11", 11, "135", "1/1B", 312, 373, "available"],
    ["12", 12, "135", "1/1B", 300, 358, "available"],
    ["13", 13, "135", "1/1B", 304, 363, "available"],
    ["14", 14, "135", "1/1B", 301, 359, "available"],
    ["15", 15, "135", "1/1B", 324, 387, "available"],
    ["16", 16, "135", "1/1B", 303, 362, "available"],
    ["17", 17, "135", "1/1B", 302, 361, "available"],
    ["18", 18, "135", "1/1B", 318, 380, "available"],
    ["19", 19, "135", "1/1B", 317, 379, "available"],
    ["20", 20, "135", "1/1B", 317, 379, "available"],
    ["21", 21, "135", "1/1B", 316, 377, "available"],
    ["22", 22, "135", "1/1B", 315, 376, "sold"],
    ["23", 23, "135", "1/1B", 315, 376, "available"],
    ["24", 24, "135", "1/1B", 313, 374, "available"],
    ["25", 25, "135", "1/1B", 313, 374, "available"],
    ["26", 26, "135", "1/1B", 312, 373, "available"],
    ["27", 27, "135", "1/1B", 350, 418, "available"],
    ["28", 28, "135", "1/1B", 367, 438, "available"],
    ["29", 29, "135", "1/1B", 310, 370, "available"],
    ["30", 30, "135", "1/1B", 306, 365, "available"],
    ["31", 31, "135", "1/1B", 318, 380, "available"],
    ["32", 32, "135", "1/1B", 355, 424, "available"],
    ["33", 33, "135", "1/1B", 326, 389, "available"],
    ["34", 34, "135", "1/1B", 365, 436, "available"],
    ["35", 35, "135", "1/1B", 395, 472, "available"],
    ["36", 36, "135", "1/1B", 390, 466, "available"],
    ["37", 37, "135", "1/1B", 402, 480, "available"],
    ["38", 38, "135", "1/1B", 363, 434, "available"],
    ["39", 39, "135", "1/1B", 300, 358, "available"],
    ["40", 40, "135", "1/1B", 388, 464, "available"],
    ["41", 41, "135", "1/1B", 513, 613, "sold"],
    ["42", 42, "135", "1/1B", 353, 422, "available"],
    ["43", 43, "135", "1/1B", 307, 367, "available"],
    ["44", 44, "135", "1/1B", 308, 368, "available"],
    ["45", 45, "135", "1/1B", 315, 376, "available"]
  ];

  window.BHL_AARANYA_PLOTS = rows.map(function (row) {
    return {
      id: row[0],
      plotNumber: row[1],
      surveyNumber: row[2],
      hissaNumber: row[3],
      areaSqM: row[4],
      areaSqYd: row[5],
      status: row[6]
    };
  });
})();
