// pie.js
// Muestra un diagrama de pie con 100 datos aleatorios agrupados en categorías

// Parámetros configurables
let numCategories = 5; // Número de categorías en el pie
let pieColors = [
    '#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6',
    '#1abc9c', '#e67e22', '#34495e', '#95a5a6', '#d35400'
];

// Genera 100 datos aleatorios y los agrupa en categorías
function generatePieData(n = 100, categories = numCategories) {
    const data = [];
    for (let i = 0; i < n; i++) {
        // Asigna cada dato a una categoría aleatoria
        data.push(Math.floor(Math.random() * categories));
    }
    // Cuenta la frecuencia por categoría
    const counts = Array(categories).fill(0);
    data.forEach(idx => counts[idx]++);
    const labels = counts.map((_, i) => `Categoría ${i + 1}`);
    return { labels, counts };
}

// Dibuja el diagrama de pie en el canvas con id 'pieChart'
function drawPieChart(categories, colors) {
    const ctx = document.getElementById('pieChart').getContext('2d');
    const { labels, counts } = generatePieData(100, categories);
    if (window.pieInstance) {
        window.pieInstance.destroy();
    }
    window.pieInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: counts,
                backgroundColor: colors.slice(0, categories),
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Diagrama de Pie (100 datos aleatorios)'
                }
            }
        }
    });
}

// Inicializa el pie chart y controles
function setupPieChart() {
    drawPieChart(numCategories, pieColors);
    // Control de cantidad de categorías
    const catInput = document.getElementById('pieCategories');
    if (catInput) {
        catInput.value = numCategories;
        catInput.addEventListener('input', function() {
            numCategories = parseInt(this.value);
            drawPieChart(numCategories, pieColors);
        });
    }
}

window.addEventListener('DOMContentLoaded', setupPieChart);
