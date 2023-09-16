
const circuference = 180;

const data = {
  labels: ["Juntos por el Cambio", "Unión por la Patria", "La Libertad Avanza", "Hacemos por Nuestro País", "Izquierda", "Otros"],
  datasets: [
    {
      label: "Diputados",
      data: [107, 94, 40, 7, 5, 4],
      backgroundColor: [
        "rgb(222, 179, 0)",
        "rgb(41, 102, 169)",
        "rgb(104, 77, 142)",
        "rgb(76, 150, 97)",
        "rgb(184, 33, 34)",
        "rgb(170, 170, 170)"]
    }]
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    reponsive: true,
    maintainAspectRatio: false,
    rotation: circuference / 2 * -1,
    circumference: circuference,
    cutout: "35%",
    plugins: {
      title: false,
      subtitle: false,
      legend: false
    }
  }
};

const hemicicloDiputados = new Chart("hemicycle", config);