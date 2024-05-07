//Puede inferir el tipo si tiene valores

const numbers = [1, 2, 3]; //Infiere que es de tipo number
numbers.push(4); // no error
//numbers.push('2') Si descomentas esta linea da error

let head: number = numbers[0]; // no error

console.log(head);
