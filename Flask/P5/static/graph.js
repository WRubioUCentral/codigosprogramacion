window.chartLib = {
    chartInstance: null,

    makeChart: function(data, chartType = 'line') {
        // Validación básica de datos
        if (!data || (chartType !== 'pie' && (!data.x || !data.y))) {
            console.error('Datos no válidos para el gráfico');
            return;
        }

        const ctx = document.getElementById('grafico1').getContext('2d');
        
        // Destruye gráfico anterior
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        // Configuración base común
        const commonConfig = {
            responsive: true,
            maintainAspectRatio: false
        };

        // Configuración específica por tipo
        let config;
        if (chartType === 'pie') {
            config = {
                type: 'pie',
                data: {
                    labels: Object.keys(data),
                    datasets: [{
                        data: Object.values(data),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)'
                        ]
                    }]
                },
                options: commonConfig
            };
        } else {
            config = {
                type: chartType,
                data: {
                    labels: data.x,
                    datasets: [{
                        label: 'Datos',
                        data: data.y,
                        backgroundColor: chartType === 'bar' ? 'rgba(54, 162, 235, 0.7)' : 'transparent',
                        borderColor: 'rgba(162, 106, 28, 0.7)',
                        borderWidth: 2,
                        tension: chartType === 'line' ? 0.3 : 0,

                    }]
                },
                options: {
                        responsive: true,
                        maintainAspectRatio: false, // Permite control manual de altura
                        scales: {
                            y: { 
                                beginAtZero: true,
                                // Limita ejes si es necesario:
                                max: 100, // Ejemplo: valor máximo del eje Y
                            }
                        }
                    }
            };
        }

        // Crea el gráfico
        try {
            this.chartInstance = new Chart(ctx, config);
        } catch (error) {
            console.error('Error al crear el gráfico:', error);
        }
    }
};

// Gráfico inicial (si hay datos)
if (initialData) {
    window.chartLib.makeChart(initialData);
}

