from flask import Flask, render_template

app = Flask(__name__)

@app.route('/inicio')
def home():
    data_enviada = {
        'nombre': 'Consuelo',
        'apellido': 'Rubio',
        'ciudad': 'Villavicencio',
        'depto': 'Meta',
        'edad': 'qli'
    }
    return render_template('index.html', data = data_enviada)

@app.route('/contactos')
def contactos():
    return '<h1>Contactanos...</h1>' 

if __name__ == '__main__':
    app.run(debug=True)