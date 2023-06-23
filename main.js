// --- 1. LET Y CONST: -----
console.log('--- 1. LET Y CONST: -----');

console.log(x);
var x = 10;

console.log(x);
x = 10;

console.log(x);
//const x = 100;

const a = "Variable Global";

if (true) {
    const a = "Variable de Bloque";
    console.log(a);
}

console.log(a);

if (true) {
    var global = "Me salgo del bloque";
    const local = "Me salgo dentro del bloque";
}

console.log(global);
//console.log(local);

var iOS = "Apple";
var iOS = "Android :)";
console.log(iOS);

//let iOS = "Apple";
//let iOS = "Android";
console.log(iOS);

let puedoCambiar = "¡Puedo Cambiar!";
puedoCambiar = ":)";
console.log(puedoCambiar);

const noPuedoCambiar = "No puedo cambiar";
//noPuedoCambiar = "nooo";
console.log(noPuedoCambiar);

const numeros = [1, 2, 3, 4, 5];
numeros[0] = 1000;
console.log(numeros);

// --- 2. ARROW FUNCTIONS: -----
console.log('--- 2. ARROW FUNCTIONS: -----');

const cuadrado = function(numero) {
    return numero * numero;
}

console.log(cuadrado(2));

const cuadrado2 = (numero) => {
    return numero * numero;
}

console.log(cuadrado2(3));

const cuadrado3 = numero => numero * numero;

console.log(cuadrado3(4));

// --- 3. TEMPLATE LITERALS: -----
console.log('--- 3. TEMPLATE LITERALS: -----');

const nombre = "Kasper";
const animal2 = "Perro";
const edad = 10;
const templateLiteral = `${nombre} es un ${animal2}
y tiene
${edad} años.
`;

console.log(templateLiteral);

// --- 4. CLASES: -----
console.log('--- 4. CLASES: -----');

class Animal {
    constructor(patas, tamaño) {
        this.patas = patas;
        this.tamaño = tamaño;
    }
}

const animal = new Animal(4, "mediano");
console.log(animal);

class Perro extends Animal {
    constructor(patas, tamaño, pelo) {
        super(patas, tamaño);
        this.pelo = pelo;
    }
}

const perro1 = new Perro(4, 'grande', 'marron');
console.log(perro1);

// --- 5. SPREAD OPERATOR: -----
console.log('--- 5. SPREAD OPERATOR: -----');

const frutas = ['manzana', 'naranja', 'platano'];
const dulces = ['galleta', 'pastel', 'nieve'];

const postres = [...frutas, ...dulces];
console.log(postres);

frutas.push(...dulces);
console.log(frutas);

// --- 6. SPREAD OPERATOR: -----
console.log('--- 6. SPREAD OPERATOR: -----');

const animales = ['perro', 'gato', 'caballo', 'conejo'];
const [perro, gato, caballo, conejo] = animales;

console.log(perro, gato, caballo, conejo);

const perroInfo = {
    nombre2: 'Yaki',
    edad2: 10,
    raza: 'Schnauzer & Nizu',
    caracteristicas: {
        color: 'Negro y gris',
        hobbies: ['correr', 'Ladrar', 'Jugar']
    }
}

const {edad2, raza, nombre2, ...rest} = perroInfo;
console.log(nombre2, edad2, raza);
console.log(rest);

// --- 7. PROMESAS: -----
console.log('--- 7. PROMESAS: -----');

const miPromesa = new Promise((resolve, reject) => {
    if (Math.random() * 10 < 9) resolve('Dato recibido!');
    else reject('Rechazado :(');
})

miPromesa
    .then(
        respuesta => console.log(respuesta))
    .catch(
        error => alert(error));

miPromesa.then(
    respuesta => console.log(respuesta),
    error => alert(error)
);