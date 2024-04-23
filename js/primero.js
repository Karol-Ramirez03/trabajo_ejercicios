

function contrasenavalida(contrasena) {
    let contrasena1 = "2Fj(jjbFsuj";
    let contrasena2 = "eoZiugBf&g9";
    if (contrasena === contrasena1) {
        return true
    }
    else if (contrasena === contrasena2) {
        return true
    }
    else {
        return false
    }
}

function calcularimpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        let valor = ingresos*0.4;
        return valor
    }
    else {
        return 0
    }
}

function imc(peso,altura){
    let bmi = peso/altura**2
    switch(true){
        case (bmi<18.5):
            estado='bajo peso';
            break
        case ((bmi>=18.5) && (bmi<=24.5)):
            estado='normal';
            break
        case ((bmi>=25) && (bmi<=29.9)):
            estado='sobre peso';
            break
        case (bmi>=30):
            estado='obeso';
            break
    }
    return estado
}
function imprimirarreglo(...param){
    console.log(param.join('\n'));
}

function contarrango(num1,num2) {
    let contador = 0;
    for (let i = num1 + 1;i < num2; i++) {
        contador++;
    }
    return contador;
}

function likes(num){
    if (num < 1000) {
        return num + "";
    } else if (num < 1000000) {
        let total= Math.trunc(num/1000)+'k';
        return total;
    } else if (num < 100000000) {
        let total= Math.trunc(num/1000000)+'M';
        return total;
    }
}

function sumarrango(numeroinicial, numerofinal) {
    if (numeroinicial === numerofinal) {
        return 0;
    }
    let suma = 0;
    for (let i = numeroinicial; i <= numerofinal; i++) {
        suma += i;
    }
    return suma;
}

function numerodeaes(palabra) {
    let contador = 0;
    for (let i=0; i < palabra.length; i++) {
        if (palabra[i] === 'A'|| palabra[i] === 'a'){
            contador++;
        }
    }
    return contador;
}
function numerodecaracteres(palabra,caracter) {
    let contador = 0;
    for (let i=0; i < palabra.length; i++) {
        if (palabra[i] === caracter){
            contador++
        }
    }
    return contador;
}

function sumararreglo(arreglo) {
    if (arreglo.length===0) {
        return 0;
    } else {
        return arreglo[0] + sumararreglo(arreglo.slice(1));
    }
}
function multiplicararreglo(arreglo) {
    if (arreglo.length===0) {
        return 1;
    } else {
        return arreglo[0] * multiplicararreglo(arreglo.slice(1));
    }
}

function removerceros(arreglo){
    let numeroremover = 0;
    let i = arreglo.indexOf(numeroremover)
    while (i!== -1) {
        arreglo.splice(i,1);
        i = arreglo.indexOf(numeroremover);
    }
    return arreglo;
}

function transcribir(cadena) {
    let cadenaARN = ''
    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i];
        if (letra === 'G') {
            cadenaARN += 'C';
        } else if (letra === 'C') {
            cadenaARN += 'G';
        } else if (letra === 'T') {
            cadenaARN += 'A';
        } else if (letra === 'A') {
            cadenaARN += 'U';
        }
    }
    return cadenaARN;
}
function capitalizar(palabra) {
    if (palabra.length === 0) {
        return "";
    } else {
        resultado= palabra[0].toUpperCase()+palabra.slice(1);
        return resultado;
    }
}
function max(array) {
    let number = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] >= number) {
            number = array[i];
        }
    }
    return number;
}
function numerospares(array) {
    let pares = [];
    for (let i=0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
             pares.push(array[i]);
        }
    }
    return pares;
}
function password(str) {
    let cambios = '';
    for (let i = 0; i < str.length; i++) {
        let letras = str[i].toLowerCase();
        if (letras !== ' ') {
            if (letras === 'a') {
                letras = '4';
            } else if (letras === 'e') {
                letras = '3';
            } else if (letras === 'i') {
                letras = '1';
            } else if (letras === 'o') {
                letras = '0';
            }
            cambios += char;
        }
    }
    return cambios;
}
function posiciones(array) {
    let posicionesPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            posicionesPares.push(i);
        }
    }
    return posicionesPares;
}

function empiezancona(array) {
    let palabrascona = [];
    for (let i = 0; i < array.length; i++) {
        let palabra = array[i];
        if (palabra[0].toLowerCase() === 'a') {
            palabrascona.push(palabra);
        }
    }
    return palabrascona;
}