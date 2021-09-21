let obesityData = {
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

const obesityGraph = document.getElementById("obesity-graph");

const chart = new Chart(obesityGraph, obesityData);
chart.defaultFontColor = "#636262";
