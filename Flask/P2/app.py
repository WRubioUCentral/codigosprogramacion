from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    cursos = ['Análisis de datos', 'Programación', 'IA', 'Cyber seguridad']
    data = {
        'pestana': 'Mi página',
        'titulo': 'Tema de página',
        'cursos': cursos,
        'n_cursos': len(cursos)
    }
    return render_template('index.html', data = data)

if __name__ == '__main__':
    app.run(debug = True)