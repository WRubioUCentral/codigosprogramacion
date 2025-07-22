from flask import Flask, jsonify, render_template, redirect, url_for, request
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'test'

conexion = MySQL(app)

@app.route('/api')
def listar_datos():
    data = {}
    try:
        cursor = conexion.connection.cursor()
        sql = "SELECT COUNT(*) FROM datos"
        cursor.execute(sql)
        datos = cursor.fetchall()
        data['datos'] = datos
        cursor.close()
        data['mensaje'] = 'Exito al consultar la base de datos'
    except Exception as e:
        data['mensaje'] = 'Error al conectar con la base de datos'
    return jsonify(data)


@app.route('/inicio')
def home():
    return render_template('index.html')

@app.route('/reservas')
def reservas():
    try:
        cursor = conexion.connection.cursor()
        sql = "SELECT id, nombre, apellido, fecha_ingreso, fecha_salida FROM datos"
        cursor.execute(sql)
        reservas = cursor.fetchall()
        cursor.close()
    except Exception as e:
        reservas = []
    return render_template('reservas.html', reservas=reservas)

@app.route('/reservar', methods=['POST'])
def reservar():
    datos = request.get_json()
    id = datos.get('id')
    nombre = datos.get('nombre')
    apellido = datos.get('apellido')
    fecha_ingreso = datos.get('fecha_ingreso')
    fecha_salida = datos.get('fecha_salida')
    try:
        cursor = conexion.connection.cursor()
        sql = "INSERT INTO datos (id, nombre, apellido, fecha_ingreso, fecha_salida) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(sql, (id, nombre, apellido, fecha_ingreso, fecha_salida))
        conexion.connection.commit()
        cursor.close()
        mensaje = 'Datos guardados correctamente en la base de datos.'
    except Exception as e:
        mensaje = f'Error al guardar los datos: {str(e)}'
    return jsonify({'mensaje': mensaje,
                    'id': id,
                    'nombre': nombre,
                    'apellido': apellido,
                    'fecha_ingreso': fecha_ingreso,
                    'fecha_salida': fecha_salida})

def pagina_no_encontrada(e):
    # return jsonify('404.html'), 404
    return redirect('/inicio')

if __name__ == '__main__':
    app.register_error_handler(404, pagina_no_encontrada)
    app.run(debug=True)