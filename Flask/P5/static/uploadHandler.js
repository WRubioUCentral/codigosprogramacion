document.getElementById('csvForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '';
    messageDiv.style.color = '';

    try {
        // Validación de archivo
        const fileInput = document.querySelector('input[type="file"]');
        if (!fileInput.files[0]) {
            throw new Error('Selecciona un archivo CSV');
        }

        // Envía el CSV al servidor
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Error al procesar el CSV');
        }

        // Éxito: actualiza gráfico
        messageDiv.textContent = '✅ CSV cargado correctamente';
        messageDiv.style.color = 'green';
        messageDiv.style.fontSize = 'large';
        messageDiv.style.alignContent = 'center';

        const chartType = document.getElementById('chartType').value;
        const chartData = chartType === 'pie' ? result.data.y : result.data;
        window.chartLib.makeChart(chartData, chartType);

    } catch (error) {
        messageDiv.textContent = `❌ Error: ${error.message}`;
        messageDiv.style.color = 'red';
        console.error('Error:', error);
    }
});