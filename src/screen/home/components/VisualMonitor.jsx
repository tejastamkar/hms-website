import { Bar } from "react-chartjs-2";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
export default function VisualMonitor() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const data = {
    labels: days?.map((item) => item),
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "#FF6384",
          "#FFC57D",
          "#FFE57F",
          "#4BC0C0",
          "#36A2EB",
          "#9966FF",
          "#C9CACA",
        ],
        borderColor: [
          "#FF6384",
          "#FFC57D",
          "#FFE57F",
          "#4BC0C0",
          "#36A2EB",
          "#9966FF",
          "#C9CACA",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "none",
        labels: {
          font: {
            size: 0,
            family: "Arial, sans-serif",
            weight: "bold",
          },
          color: "",
        },
      },
      title: {
        display: true,
        text: "Monitoring Data",
        font: {
          size: 18,
          family: "Arial, sans-serif",
          weight: "bold",
        },
        color: "#333",
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
          },
          color: "#333",
        },

        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,

        ticks: {
          font: {
            size: 14,
          },
          color: "#333",
        },
        grid: {
          color: "#ccc",
        },
      },
    },
  };
  return (
    <div className="p-10 mt-10 w-full">
      <h2 className="font-bold text-2xl my-5">Visual Monitor</h2>
      <div>
        <Bar data={data} options={barOptions} />
      </div>
    </div>
  );
}
