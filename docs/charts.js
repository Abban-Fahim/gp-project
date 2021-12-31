const obesityData = {
  type: "line",
  data: {
    labels: ["1990", "1995", "2000", "2005", "2010", "2015"],
    datasets: [
      {
        label: "Rise in obesity in children ages 5-18",
        backgroundColor: "#6db8c5",
        borderColor: "#6db8c5",
        data: [15.738, 17.233, 18.677, 19.979, 21.388, 23.421],
      },
      {
        label: "Rise in obesity in adults",
        backgroundColor: " #e74c3c",
        borderColor: " #e74c3c",
        data: [10.311, 11.819, 13.469, 15.241, 17.211, 19.347],
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          text: "Year",
          display: true,
          font: {
            size: 18,
          },
        },
        ticks: {
          color: "#eee",
        },
      },
      y: {
        title: {
          text: "% of world population obese",
          display: true,
          font: {
            size: 18,
          },
        },
        ticks: {
          color: "#eee",
        },
      },
    },
  },
};

const obesityInUAEData = {
  type: "bar",
  data: {
    labels: ["7 - 10", "11 - 14", "15 - 18"],
    datasets: [
      {
        label: "Obesity in Boys",
        backgroundColor: "#6db8c5",
        borderColor: "#6db8c5",
        data: [12.1, 6.4, 8.1],
      },
      {
        label: "Obesity in Girls",
        backgroundColor: "#f12c67",
        borderColor: "#f12c67",
        data: [12.7, 17.3, 17.2],
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          text: "Year Groups",
          display: true,
          font: {
            size: 18,
          },
        },
        ticks: {
          color: "#eee",
        },
      },
      y: {
        title: {
          text: "% of UAE population obese",
          display: true,
          font: {
            size: 18,
          },
        },
        ticks: {
          color: "#eee",
        },
      },
    },
  },
};

const obesityGraph = document.getElementById("obesity-graph");
const obesityUAEGraph = document.getElementById("obesityUAE");

const chart = new Chart(obesityGraph, obesityData);
const UAEchart = new Chart(obesityUAE, obesityInUAEData);
chart.defaultFontColor = "#636262";
