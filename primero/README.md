#ANALISIS DE CODIGO FUENTE

#primero:

(() => {
const devolverPrimerElemento = (array) => {
if(array.length === 0) return {"message": "El arreglo no puede estar vacio"}
if(!Array.isArray(array)) return {"message": "El parámetro debe ser un arreglo"}
return array[0];
}
console.log(devolverPrimerElemento([1,2,3,4,5]));
console.log(devolverPrimerElemento([1]));
console.log(devolverPrimerElemento([]));
console.log(devolverPrimerElemento("Hola mundo"));
console.log(devolverPrimerElemento(5));
console.log(devolverPrimerElemento({}));
})();
 
#explicacion:
segun lo explicado en clase lo de arriba es una funcion de flecha donde como argumento recibe un array si el array esta vacio me arroja el primer mensaje y el segundo if verifica si el array es efectivamente lo que dice ser y me arroja el segundo mensaje  y cuando termina me retorna el primer elemento del array

#segundo:

function devolverUltimoElemento(array) {
if(array.length === 0) {
return "No hay elementos en el array";
}
if(!Array.isArray(array)) {
return "El parámetro no es un array";
}
return array.at(-1);
}
console.log(devolverUltimoElemento([1,2,3,4,5]));
console.log(devolverUltimoElemento(["Hola", "mundo"]));
console.log(devolverUltimoElemento([1]));
console.log(devolverUltimoElemento([]));
console.log(devolverUltimoElemento("Hola mundo"));
console.log(devolverUltimoElemento(5));
console.log(devolverUltimoElemento({}));
 
#explicacion: 
practicamente la primera parte de la funcion es igual a la primera la diferiencia radica en que esta funcin me arroja el ultimo digito del array


#tercero:

function obtenerLargoDelArray(array) {
return (!Array.isArray(array) ? "El parámetro no es un arreglo." : array.length);
}

console.log(obtenerLargoDelArray([1,2,3,4,5,6,7,8,9,10]));
console.log(obtenerLargoDelArray([]));
console.log(obtenerLargoDelArray({}));
console.log(obtenerLargoDelArray(1));
console.log(obtenerLargoDelArray("Hola"));
 
#explicacion:
segun lo que investige es una forma de if y else en una sola linea donde su sintaxis es: condicion ? expresion1 : expresion2. donde basicamente esta funcion dice que si el parametro no es un array le arroje el mesoje pero que si si es un array muestre el largo o el numero de array que hay

#cuarto:

function arrayContiene(array, elemento) {
if(!Array.isArray(array)){
return "El primer argumento debe ser un arreglo"
}
return array.includes(elemento);
}
console.log(arrayContiene([1, 2, 3], 1)); // true
console.log(arrayContiene([1, 2, 3], 4)); // false*/
console.log(arrayContiene(3, 4));
console.log(arrayContiene(["Pedro", "Juan", "Maria"], "Juan")); // true
 
#explicacion:
esta funcion usa dos parametros que son array y elemento donde la primera parate de la funcio me dice que si no es un array mande el mensaje de "El primer argumento debe ser un arreglo" y si es un array retorne true o false si el elemento se encuentra en el array


#quinto:

function numeroMasGrande(arrayOfNums) {
if(!Array.isArray(arrayOfNums)) return "El parametro debe ser un arreglo"
if(arrayOfNums.some((item) => typeof item !== "number")) return "Los elementos deben ser numeros"
return arrayOfNums.reduce((acc, curr) => acc + curr, 0)
}
console.log(numeroMasGrande([1,2,3,4,5]));
console.log(numeroMasGrande([]));
console.log(numeroMasGrande([1,2,3,4,"5"]))
console.log(numeroMasGrande(6))
console.log(numeroMasGrande({}))
console.log(numeroMasGrande(false))
 
#explicacion:
el primer me define si el arrayOfNums es un array en el caso de no serlo me muestra el mensaje de "El parametro debe ser un arreglo" y el segundo if es sotra funcion de flecha donde some verifica si al menos un elemento del arreglo cumple con cierta condición, luego esta mi parametro items que le digo que si el tipo de variable es distinto a number retorne "Los elementos deben ser numeros". luego cuando todo ocurra tenemos el return que Es una función de flecha que toma dos parámetros: acc y curr. acc es el acumulador, que es el valor acumulado hasta el momento, y curr es el elemento actual que está siendo procesado. En cada iteración, esta función suma el elemento actual (curr) al acumulador (acc) y devuelve el resultado.

#sexto:

function empiezaConNueve(num) {
if(typeof num !== "number") return "El parametro debe ser un numero";
const numeroAString = String(num)
const primerDigito = Number(numeroAString[0]);
return primerDigito === 9
}
console.log(empiezaConNueve(965))
console.log(empiezaConNueve(65))
console.log(empiezaConNueve(999))
console.log(empiezaConNueve(0))
console.log(empiezaConNueve(9))
console.log(empiezaConNueve(true))
 
#explicacion:
tengo mi primer if que le digo que si el tipo de variable es distinto a number retorne "El parametro debe ser un numero" y creo variables donde les digo que el numero sea vuelva un string y en la siguiente linea accedo al primer digito del strign donde si es igual a 9 me retorne dicho valor 