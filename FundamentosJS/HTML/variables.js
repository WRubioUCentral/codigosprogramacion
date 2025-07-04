// File: HTML/variables.js
/*
document.writeln("<b>Hola, buenos días</b>");
document.writeln("<br>Hola, buenos días");
*/

/*
prompt("Hola, buenos días")
alert("Hola, buenos días");
console.log("Hola, buenos días")
document.writeln("Hola, buenos días")
document.writeln("Hola, <br>buenos días")
*/

// Variables
/*
const a = 5; // Constante
let b = 10;
var c = 15; // Variable (no recomendado en ES6+)

let nombre = "Ana" // String
let edad = 30 // Number
let esEstudiante = true // Boolean
let calificaciones = [10, 9, 8] // Array
let persona = {
    nombre: "Ana",
    edad: 30,
    esEstudiante: true
}; // Object
let fecha = new Date(); // Date
let nulo = null; // Null
let indefinido; // Undefined
indefinido = True;
let simbolo = Symbol("simbolo"); // Symbol
*/

//funciones
function saludar(nombre) {
    document.writeln("Hola, " + nombre);
}

function sumar(a, b) {
    return a + b;
}   
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b != 0) {
        return a / b;
    }
}
function raiz(a){
    return Math.sqrt(a);
}

function potencia(base, exponente) {
    return base ** exponente;
}

let a = prompt("a:");
let b = prompt("b:");
let c = prompt("c:");

let m = multiplicar(a,c);
m = multiplicar(m,4);
let p = potencia(b,2);
let z = restar(p,m);
z = raiz(z);
b = multiplicar(b,(-1));
let x1 = dividir(restar(b,z),multiplicar(a,2));
let x2 = dividir(sumar(b,z),multiplicar(a,2));

document.writeln("Las soluciones de " + a + "x² + " + b + "x + " + c + " son:<br>");
document.writeln("x1 = " + x1 + "<br>");
document.writeln("x2 = " + x2 + "<br>");

alert("Las soluciones de " + a + "x² + " + b + "x + " + c + " son:<br>");
alert("x1 = " + x1 + "<br>");
alert("x2 = " + x2 + "<br>");

/*


function saludar(nombre) {
    document.writeln("Hola, " + nombre);
}
function sumar(a, b) {
    return a + b;
}   
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}   
function potencia(base, exponente) {
    return Math.pow(base, exponente);
}
function raizCuadrada(numero) {
    if (numero < 0) {
        return "Error: Raíz cuadrada de un número negativo";
    }
    return Math.sqrt(numero);
}
function calcularAreaCirculo(radio) {
    if (radio < 0) {
        return "Error: Radio negativo";
    }
    return Math.PI * Math.pow(radio, 2);
}
*/

// Condicionales
/*
let edad = 18;
if (edad >= 18) {
    document.writeln("Eres mayor de edad");
}   else {
    document.writeln("Eres menor de edad");
}

// Switch
switch (edad) {
    case 18:    
        document.writeln("Tienes 18 años");
        break;
    case 21:
        document.writeln("Tienes 21 años");
        break;
    default:
        document.writeln("Tienes " + edad + " años");
        break;
}
*/

//Captura de datos
/*let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
document.writeln("Hola, " + nombre + ". Tienes " + edad + " años.");
// Validación de datos
if (isNaN(edad) || edad < 0) {
    document.writeln("Edad no válida");
}

// Conversión de tipos
edad = Number(edad);    
document.writeln("Tu edad es " + edad + " años.");
// Ejemplo de uso de variables
let nombre = "Ana"; 
document.writeln("Hola, " + nombre + ". ¿Cómo estás?");

*/

//Funciones string
/*
let texto = "Hola, buenos días";
document.writeln("Texto original: " + texto);
document.writeln("Texto en mayúsculas: " + texto.toUpperCase());
document.writeln("Texto en minúsculas: " + texto.toLowerCase());    
document.writeln("Longitud del texto: " + texto.length);
document.writeln("Texto sin espacios: " + texto.trim());
document.writeln("Texto con 'días' reemplazado por 'tardes': " + texto.replace("días", "tardes"));
document.writeln("Texto dividido en palabras: " + texto.split(" "));    
document.writeln("Texto con 'Hola' eliminado: " + texto.replace("Hola", ""));
document.writeln("Texto con 'buenos' eliminado: " + texto.replace("buenos", ""));
document.writeln("Texto con 'días' eliminado: " + texto.replace("días", ""));
document.writeln("Texto con 'Hola, ' eliminado: " + texto.replace("Hola, ", ""));
document.writeln("Texto con 'buenos días' eliminado: " + texto.replace("buenos días", ""));
document.writeln("Texto con 'Hola, buenos días' eliminado: " + texto.replace("Hola, buenos días", ""));
document.writeln("Texto con 'Hola, buenos días' eliminado: " + texto.replace("Hola, buenos días", ""));
*/

//While
/*
La diferencia entre while y do-while en JavaScript está relacionada con el momento en que se evalúa la condición para continuar con el bucle.

while (Bucle mientras)
Evalúa la condición antes de ejecutar el código dentro del bucle.
Si la condición es falsa desde el principio, no se ejecutará ni una sola vez.

let contador = 0;
while (contador < 5) {
    document.writeln("Contador: " + contador);
    contador++;
}
    
// Do While
do-while (Bucle haga-mientras)
Ejecuta el código al menos una vez antes de evaluar la condición.
La condición se evalúa después de la ejecución del bloque de código, lo que garantiza que el código se ejecute al menos una vez, incluso si la condición es falsa.

let contador = 0; 
do {
    document.writeln("Contador: " + contador);
    contador++;
} while (contador < 5);

// For
for (Bucle tradicional)
Es el bucle más general en JavaScript y se utiliza cuando sabes de antemano cuántas veces quieres repetir un bloque de código.
Se puede usar con cualquier tipo de iterable (como arrays, objetos, o incluso rangos de números).
Requiere tres partes: inicialización, condición y actualización.

for (let i = 0; i < 5; i++) {
    document.writeln("Contador: " + i);
}

// For In
for-in (Bucle sobre propiedades de un objeto)
Se utiliza para iterar sobre las propiedades enumerables de un objeto.
Devuelve las claves (nombre de las propiedades) de un objeto, no los valores.

let persona = {   
    nombre: "Ana",
    edad: 30,
    esEstudiante: true
};

for (let clave in persona) {
    document.writeln(clave + ": " + persona[clave]);
}

// For Of
for-of (Bucle sobre valores de un iterable)
Itera sobre los valores de un iterable (como un array, string, Map, Set, etc.).
Es más sencillo y legible que for-in cuando quieres acceder a los valores de un iterable en lugar de las claves o índices.

let numeros = [1, 2, 3, 4, 5];    
for (let numero of numeros) {
    document.writeln("Número: " + numero);
}

// For Each
forEach (Método de Array)
Es un método de arrays que itera sobre cada elemento de un array y ejecuta una función callback en cada uno de ellos.
No devuelve valor y no puedes usar break ni continue (es decir, no puedes salir del bucle o saltar una iteración).
Solo funciona con arrays o estructuras similares

let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    document.writeln("Número: " + numero);
});

// Funciones de flecha
let sumar = (a, b) => a + b;  
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;

let dividir = (a, b) => {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
};

let potencia = (base, exponente) => Math.pow(base, exponente);
let raizCuadrada = (numero) => {    
    if (numero < 0) {
        return "Error: Raíz cuadrada de un número negativo";
    }
    return Math.sqrt(numero);
}

let calcularAreaCirculo = (radio) => {
    if (radio < 0) {
        return "Error: Radio negativo";
    }
    return Math.PI * Math.pow(radio, 2);
};

// Funciones anónimas
let saludar = function(nombre) {
    document.writeln("Hola, " + nombre);
};
let sumar = function(a, b) {
    return a + b;
};
let restar = function(a, b) {
    return a - b;
};
let multiplicar = function(a, b) {
    return a * b;
};

// Funciones autoejecutables
let saludar = (function(nombre) {
    document.writeln("Hola, " + nombre);
})("Ana");

// Funciones recursivas
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Funciones flecha con parámetros por defecto
let saludar = (nombre = "Invitado") => {    
    document.writeln("Hola, " + nombre);
}

// Funciones flecha sin argumentos
function miFuncion() {
console.log(arguments);
}
miFuncion(1, 2, 3);  // [1, 2, 3]

const miFuncionFlecha = (...args) => {
  console.log(args);  // [1, 2, 3]
};
miFuncionFlecha(1, 2, 3);


// Clases
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        document.writeln("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
}
let ana = new Persona("Ana", 30);
ana.saludar();
*/