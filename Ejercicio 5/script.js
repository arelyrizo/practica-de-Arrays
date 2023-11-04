//comando que imprime el nombbre de todas las personas 
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

//comando para eliminar a dani de la matriz
let indexToRemove = people.indexOf("Dani");
if (indexToRemove !== -1) {
  people.splice(indexToRemove, 1);
}
console.log(people);


//comando para eliminar a juan de la matriz 
let indexToDelete = people.indexOf("Juan");
if (indexToDelete !== -1) {
  people.splice(indexToDelete, 1);
}
console.log(people);

let indexToMove = people.indexOf("Luis");
if (indexToMove !== -1) {
  people.splice(indexToMove, 1);
  people.unshift("Luis");
}
console.log(people);

people.push(" Arely" );
console.log(people);

let mariaIndex = people.indexOf("Maria");
for(let i = 0; i <= mariaIndex; i++){
    console.log(people[i]);
}

people.indexOf("Maria");

console.log(people);