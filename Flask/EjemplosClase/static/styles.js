const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; // O usa Utils.months si lo defines

const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgba(162, 106, 28, 1)',
        tension: 0.9
    }]
};

const config = {
    type: 'line',
    data: data,
};

// Este código renderiza el gráfico
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
