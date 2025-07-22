document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-box form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fecha_ingreso = document.getElementById('fecha_ingreso').value;
        const fecha_salida = document.getElementById('fecha_salida').value;

        const datos = {
            id,
            nombre,
            apellido,
            fecha_ingreso,
            fecha_salida
        };

        // Enviar los datos a Flask usando fetch
        fetch('/reservar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            // Manejar respuesta
            alert(data.mensaje);
        })
        .catch(error => {
            alert('Error al enviar datos');
        });

        // Mostrar los datos capturados en el mostrador
        console.log('Datos capturados:', datos);
        const mostrador = document.getElementById('mostrador');
        mostrador.innerHTML = `
            <h3>Datos capturados:</h3>
            <ul>
                <li><strong>ID:</strong> ${id}</li>
                <li><strong>Nombres:</strong> ${nombre}</li>
                <li><strong>Apellidos:</strong> ${apellido}</li>
                <li><strong>Fecha de Ingreso:</strong> ${fecha_ingreso}</li>
                <li><strong>Fecha de Salida:</strong> ${fecha_salida}</li>
            </ul>
        `;
    });
});
