// histograma.js
// Muestra un histograma con 100 datos aleatorios y permite cambiar color y cantidad de barras

// Parámetros configurables
let barColor = '#3498db'; // Color inicial de las barras
let numBins = 10;         // Cantidad inicial de barras

// Genera 100 datos aleatorios (distribución normal)
function generateRandomData(n = 100) {
    const data = [];
    for (let i = 0; i < n; i++) {
        // Distribución normal aproximada
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        data.push(num);
    }
    return data;
}

// Calcula los bins para el histograma
function getHistogramBins(data, bins) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const binWidth = (max - min) / bins;
    const counts = Array(bins).fill(0);
    data.forEach(val => {
        let idx = Math.floor((val - min) / binWidth);
        if (idx === bins) idx--;
        counts[idx]++;
    });
    const labels = counts.map((_, i) => `${(min + i * binWidth).toFixed(2)}-${(min + (i + 1) * binWidth).toFixed(2)}`);
    return { labels, counts };
}

// Dibuja el histograma en el canvas con id 'histogramChart'
function drawHistogram(data, bins, color) {
    const ctx = document.getElementById('histogramChart').getContext('2d');
    const { labels, counts } = getHistogramBins(data, bins);
    if (window.histogramInstance) {
        window.histogramInstance.destroy();
    }
    window.histogramInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Frecuencia',
                data: counts,
                backgroundColor: color,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: 'Rango' } },
                y: { title: { display: true, text: 'Frecuencia' }, beginAtZero: true }
            }
        }
    });
}

// Inicializa el histograma y controles
function setupHistogram() {
    const data = generateRandomData(100);
    drawHistogram(data, numBins, barColor);

    // Control de color
    const colorInput = document.getElementById('histogramColor');
    if (colorInput) {
        colorInput.value = barColor;
        colorInput.addEventListener('input', function() {
            barColor = this.value;
            drawHistogram(data, numBins, barColor);
        });
    }
    // Control de cantidad de barras
    const binsInput = document.getElementById('histogramBins');
    if (binsInput) {
        binsInput.value = numBins;
        binsInput.addEventListener('input', function() {
            numBins = parseInt(this.value);
            drawHistogram(data, numBins, barColor);
        });
    }
}

// Espera a que el DOM esté listo
window.addEventListener('DOMContentLoaded', setupHistogram);
