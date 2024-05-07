//Any desactiva la verificacion de tipo de dato  (intentar no usarlo)

let u : any = true;
u = 25;

//Unknown es similar a any pero mas segura.

let d : unknown = 25;
d = "Hi"

//Never siempre da error
//let x: never = true; 

//Undefined and null
//Corresponden al mismo tipo de datos primitivos que javascript

let y: undefined = undefined;
let z: null = null;

console.log(typeof y); //Undefined
console.log(typeof z);//object



