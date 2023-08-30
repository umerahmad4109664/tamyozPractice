import React, { useRef, useEffect } from "react";
// import Chart from "chart.js";
import { Chart as Chart} from 'chart.js';


const LineChartWithShadow = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Extend the Line chart type with shadow effect
    Chart.controllers.LineAlt = Chart.controllers.line.extend({
      draw: function () {
        Chart.controllers.line.prototype.draw.call(this, arguments);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          const activePoint = this.chart.tooltip._active[0];
          const ctx = this.chart.ctx;
          const x = activePoint.tooltipPosition().x;
          const topY = this.chart.scales["y-axis-0"].top;
          const bottomY = this.chart.scales["y-axis-0"].bottom;

          // Draw the shadow line
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.strokeStyle = "#E56590";
          ctx.shadowColor = "#E56590";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 14;
          ctx.stroke();
          ctx.restore();
        }
      },
    });

    // Create the chart
    new Chart(ctx, {
      type: "LineAlt",
      data: data,
      options: {
        datasetFill: false,
        responsive: true,
      },
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChartWithShadow;
