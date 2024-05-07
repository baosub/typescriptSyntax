let ourTupleRo: readonly [number, boolean, string];

// initialize correctly
ourTupleRo = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
//Dara error al descomentar la siguiente linea
//ourTupleRo.push('Something new and wrong');

console.log(ourTupleRo);