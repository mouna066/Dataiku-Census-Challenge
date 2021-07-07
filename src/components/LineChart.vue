<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["charts"],
  data() {
    return {
      chartdata: {
        type: Object,
        default: null,
      },
      options: {
        scales: {
          yAxes: [
            {
              id: "A",
              type: "linear",
              position: "left",
            },
            {
              id: "B",
              type: "linear",
              position: "right",
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  watch: {
    charts: function () {
      const newData = {
        labels: this.charts.id,
        datasets: [
          {
            label: "Count",
            yAxisID: "A",
            borderWidth: 1,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#2554FF",
            data: this.charts.count,
          },
          {
            label: "Average",
            yAxisID: "B",
            borderWidth: 1,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#2554FF",
            data: this.charts.average,
          },
        ],
      };
      this.chartdata = newData;
      this.renderChart(this.chartdata, this.options);
    },
  },
};
</script>