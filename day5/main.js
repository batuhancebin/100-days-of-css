const SVG = "http://www.w3.org/2000/svg";
const paddings = 20;
const chartHeight = 80;
const chartWidth = 280;

const chart = document.getElementById("chart");

function createGraph(data, color, scaleMultiplier) {
  let prevPoint = null;

  data.forEach((item, i) => {
    const point = document.createElementNS(SVG, "circle");
    point.setAttribute("r", 3);
    point.classList.add(color);
    const x = paddings + (i * chartWidth) / data.length;
    point.setAttribute("cx", x);
    const y = chartHeight - item * scaleMultiplier;
    point.setAttribute("cy", y);
    point.setAttribute("data-value", item);
    chart.appendChild(point);

    if (prevPoint) {
      const line = document.createElementNS(SVG, "path");
      line.classList.add(color);
      line.setAttribute("d", `M ${prevPoint[0]} ${prevPoint[1]} L ${x} ${y}`);
      line.style.strokeWidth = "2";
      chart.appendChild(line);
    }

    prevPoint = [x, y];
  });
}

const views = [458, 812, 746, 877, 517, 434, 458];
createGraph(views, "views-color", 0.08);

const purchases = [26, 41, 22, 36, 25, 13, 20];
createGraph(purchases, "purchases-color", 0.65);
