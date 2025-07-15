from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

# Variable global para almacenar los datos del CSV
global_df = None

@app.route('/upload', methods=['POST'])
def upload_file():
    global global_df  # Accedemos a la variable global
    
    if 'csv_file' not in request.files:
        return jsonify({"error": "No se subió ningún archivo"}), 400
    
    file = request.files['csv_file']
    if file.filename == '':
        return jsonify({"error": "Archivo no seleccionado"}), 400
    
    if file and file.filename.endswith('.csv'):
        global_df = pd.read_csv(file)
        # Convertimos a diccionario manteniendo la estructura que necesita el JS
        return jsonify({
            "status": "success",
            "columns": list(global_df.columns),
            "data": global_df.to_dict(orient='list')  # {x: [val1, val2], y: [val1, val2]}
        })
    else:
        return jsonify({"error": "Formato no válido"}), 400

@app.route('/')
def inicio():
    global global_df

    
    # Pasamos None si no hay datos cargados aún
    df_data = global_df.to_dict(orient='list') if global_df is not None else None
    
    return render_template('index.html', df=df_data)

if __name__ == '__main__':
    app.run(debug=True)