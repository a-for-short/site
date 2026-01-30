const table = document.getElementById("tea-table");
const thead = table.querySelector("thead");
const tbody = table.querySelector("tbody");
const radarCanvas = document.getElementById("radarChart");

let chart;
let tableData = [];
let fields = [];

// ----------------------------
// LOAD CSV
// ----------------------------
Papa.parse("scripts/mixes_en.csv", {
  download: true,
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: (result) => {
    tableData = result.data;
    fields = result.meta.fields;

    if (!tableData.length) return;
    buildTable();
  }
});

// ----------------------------
// BUILD TABLE
// ----------------------------
function buildTable() {
  // HEADER
  thead.innerHTML = `
    <tr>
      ${fields.map((f, i) =>
        `<th data-col="${i}">${f}</th>`
      ).join("")}
    </tr>
  `;

  // HEADER CLICK (tea → distribution across mixes)
  thead.querySelectorAll("th").forEach((th, colIndex) => {
    if (colIndex === 0) return; // название микса — игнор

    th.addEventListener("click", () => {
      drawTeaAcrossMixes(fields[colIndex]);
      clearActive();
    });
  });

  // BODY
  tbody.innerHTML = "";

  tableData.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");

    fields.forEach((f, colIndex) => {
      const td = document.createElement("td");
      td.textContent = row[f];

      // CLICK ONLY IF FIRST COLUMN
      if (colIndex === 0) {
        td.classList.add("clickable");
        td.addEventListener("click", () => {
          setActiveRow(tr);
          drawMixComposition(row);
        });
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

// ----------------------------
// STATE HELPERS
// ----------------------------
function clearActive() {
  tbody.querySelectorAll("tr").forEach(tr =>
    tr.classList.remove("active")
  );
}

function setActiveRow(active) {
  clearActive();
  active.classList.add("active");
}

// ----------------------------
// RADAR: MIX → TEAS
// ----------------------------
function drawMixComposition(row) {
  const labelKey = fields[0];
  const teaKeys = fields.slice(1);
  const values = teaKeys.map(k => row[k]);

  renderRadar({
    title: `Микс ${row[labelKey]}`,
    labels: teaKeys,
    data: values
  });
}

// ----------------------------
// RADAR: TEA → MIXES
// ----------------------------
function drawTeaAcrossMixes(teaName) {
  const mixNames = tableData.map(r => r[fields[0]]);
  const values = tableData.map(r => r[teaName]);

  renderRadar({
    title: `Распределение чая: ${teaName}`,
    labels: mixNames,
    data: values
  });
}

// ----------------------------
// RADAR CORE
// ----------------------------
function renderRadar({ title, labels, data }) {
  if (chart) chart.destroy();

  chart = new Chart(radarCanvas, {
    type: "radar",
    data: {
      labels,
      datasets: [{
        label: title,
        data,
        fill: true,
        backgroundColor: "rgba(255, 159, 159, 0.18)",
        borderColor: "rgba(255, 159, 159, 0.9)",
        pointBackgroundColor: "rgba(255, 159, 159, 1)",
        pointRadius: 3,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#eaeaea",
            font: {
              family: "Courier New",
              size: 12
            }
          }
        }
      },
      scales: {
        r: {
          min: 0,
          suggestedMax: Math.max(...data) * 1.1,
          ticks: {
            backdropColor: "transparent",
            color: "#aaaaaa"
          },
          grid: {
            color: "rgba(255,255,255,0.08)"
          },
          angleLines: {
            color: "rgba(255,255,255,0.12)"
          },
          pointLabels: {
            color: "#ffffff",
            font: { size: 11 }
          }
        }
      }
    }
  });
}
