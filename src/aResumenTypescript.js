//Arrays, arreglos
//const + nombre_array: type[] = [ elementos del array separados por coma]
var namesArray = ['Panchita', 'Juanito'];
console.log("Arrays:");
console.log(namesArray);
//arrays Readonly, si agregas read only al array no podra ser modificado
var arrayReadonly = ['Nepomuseno', 'Rosalina'];
console.log("Arrays readonly:");
console.log(arrayReadonly);
//No puedes hacer arrayReadonly.push['nuevo_elemento'], daria error
//Tuples (typed arrays), son arreglos tipados, cada elemento tiene tipo
//Define tuple
//Una buena practica es hacer tu tuple readonly
var ourFirstTuple;
//Asignar valores a cada elemento
//El orden de los elementos es importante
ourFirstTuple = [5, false, "Coding"];
console.log('Tuple:');
console.log(ourFirstTuple);
//Named tuples
//nos permite darle contexto a cada elemento
var graph = [55.2, 41.3];
console.log('named tuple: ');
console.log(graph);
//Destructuring tuples
var a = graph[0], b = graph[1];
console.log("destructure tuples: ");
console.log("this is the value of a: " + a);
console.log("this is the value of a: " + b);
//Object Types
var carro = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log("Este es el objeto carro: ");
+console.log(carro);
//Object types(optional properties)
var carroOptProps = {
    type: "Toyota"
};
carroOptProps.mileage = 2000; //Esto es opcional, puede correr sin esta linea
console.log("Este es el objeto carro con propiedades opcionales: ");
console.log(carroOptProps);
//Index Signatures, pueden ser usados para objetos sin una lista definida de propiedades
var nameAgeMap = {};
nameAgeMap.Jack = 25;
console.log("Objeto sin lista definida: ");
console.log(nameAgeMap);
//Enums
//Representa un grupo de constantes(variables incambiables)
// hay dos tipos string y numeric
//Numeric enums
//Puedes inicializar solo el primer elemento del objeto
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West"; //4
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
console.log("Enums wil initialize with zero, then noth: ");
console.log(currentDirection);
//Numeric enums - fully initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
console.log("logs 404: ");
console.log(StatusCodes.NotFound);
console.log("logs 200");
console.log(StatusCodes.Success);
//String enums
//Los enums pueden contener strings
(function (CardinalDirections) {
    CardinalDirections["NorthEnum"] = "North";
    CardinalDirections["EastEnum"] = "East";
    CardinalDirections["SouthEnum"] = "South";
    CardinalDirections["WestEnum"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
console.log("logs North:");
console.log(CardinalDirections.NorthEnum);
console.log("logs West:");
console.log(CardinalDirections.WestEnum);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
//Object with alias
console.log(car);
;
var rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
var coloredTriangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log("Extending interfaces: ");
console.log(coloredTriangle);
//Union types
//Cuando un valor puede ser de mas de un tipo
console.log("Union types: ");
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
