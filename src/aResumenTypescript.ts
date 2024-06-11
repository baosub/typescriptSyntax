//Arrays, arreglos
//const + nombre_array: type[] = [ elementos del array separados por coma]
const namesArray: string[] = ['Panchita', 'Juanito'];
console.log("Arrays:");
console.log(namesArray);

//arrays Readonly, si agregas read only al array no podra ser modificado
const arrayReadonly: readonly string[] = ['Nepomuseno', 'Rosalina'];
console.log("Arrays readonly:");
console.log(arrayReadonly);
//No puedes hacer arrayReadonly.push['nuevo_elemento'], daria error

//Tuples (typed arrays), son arreglos tipados, cada elemento tiene tipo
//Define tuple
//Una buena practica es hacer tu tuple readonly
let ourFirstTuple: readonly [number, boolean, string];
//Asignar valores a cada elemento
//El orden de los elementos es importante
ourFirstTuple = [5, false, "Coding"]
console.log('Tuple:');
console.log(ourFirstTuple);

//Named tuples
//nos permite darle contexto a cada elemento
const graph: [x: number, y: number] = [55.2, 41.3]
console.log('named tuple: ');
console.log(graph);
//Destructuring tuples
const [a, b] = graph;
console.log("destructure tuples: ");
console.log("this is the value of a: " + a);
console.log("this is the value of a: " + b);

//Object Types

const carro: {
    type: string;
    model: string;
    year: number
} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}
console.log("Este es el objeto carro: "); +
    console.log(carro);

//Object types(optional properties)

const carroOptProps: {
    type: string,
    mileage?: number
} = {
    type: "Toyota"
}
carroOptProps.mileage = 2000; //Esto es opcional, puede correr sin esta linea
console.log("Este es el objeto carro con propiedades opcionales: ");
console.log(carroOptProps);

//Index Signatures, pueden ser usados para objetos sin una lista definida de propiedades

const nameAgeMap: {
    [index: string]: number
} = {};
nameAgeMap.Jack = 25;
console.log("Objeto sin lista definida: ");
console.log(nameAgeMap);

//Enums
//Representa un grupo de constantes(variables incambiables)
// hay dos tipos string y numeric

//Numeric enums
//Puedes inicializar solo el primer elemento del objeto

enum CardinalDirections {
    North,// North = 1, puede inicializar con 1,
    East,//entonces este es dos
    South,//3
    West//4
};

let currentDirection = CardinalDirections.North;
console.log("Enums wil initialize with zero, then noth: ");
console.log(currentDirection);

//Numeric enums - fully initialized

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};
console.log("logs 404: ");
console.log(StatusCodes.NotFound);
console.log("logs 200");
console.log(StatusCodes.Success);

//String enums
//Los enums pueden contener strings
enum CardinalDirections {
    NorthEnum = 'North',
    EastEnum = "East",
    SouthEnum = "South",
    WestEnum = "West"
};
console.log("logs North:");
console.log(CardinalDirections.NorthEnum);
console.log("logs West:");
console.log(CardinalDirections.WestEnum);

//Aliases and interfaces, alias e interfaces

//Alias
//type Se aprega la palabra type
//Se creal el alias del tipo
//Se asigna el tipo de dato para el alias
type CarYear = number;
type CarType = string;
type CarModel = string;
//Se cra objeto
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
//Object with alias
console.log(car);

//Interfaces, solo aplica a object types
//Define la interfaz, el nombre va en mayusculas
interface Rectangle {
    height: number,
    width: number
  }; 
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  }; 
  console.log(rectangle);

  //Extending interfaces

  interface Triangle {
    height: number,
    width: number
  }
  interface ColoredTriangle extends Triangle {
    color: string
  }
  const coloredTriangle: ColoredTriangle = {
    height: 20,
    width: 10,
    color: "red"
  };
console.log("Extending interfaces: ");
console.log(coloredTriangle);

//Union types
//Cuando un valor puede ser de mas de un tipo
 

console.log("Union types: ");

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

  //Continue with functions when having a chance






















