var nombre = document.getElementById('nombre')
var despacho = document.getElementById('despacho')
var puesto = document.getElementById('puesto')
var edad = document.getElementById('edad')
var sueldo = document.getElementById('sueldo')
var error = document.getElementById('error')
var formulario = document.getElementById('formulario')

function enviarFormulario(){
    console.log('Enviando formulario...');
    var mensajesError = []

//Nombre
    if(nombre.value === null || nombre.value === '' || /^[a-zA-Z]/.test(nombre.value)){
        
        if ((nombre.value).length < 4 || (nombre.value).length > 255){
            console.log("Nombre inválido");
            
        }else{
            console.log("Nombre recibido");
            alert(`El nombre "${nombre.value}" es válido\nSu nombre ha sido recibido`);
        }
    } 
    else {
        alert("El nombre solo puede incluir letras")
    }
    
//Despacho    
    if(despacho.value === null || despacho.value === '' || (despacho.value).length < 4 || (despacho.value).length > 4){
        mensajesError.push('Ingresa tu despacho')
        alert("Los despachos deben tener un nombre de 4 caracteres");
    }else if ((despacho.value).charAt(0) == ("A") || (despacho.value).charAt(0) == ("B")){
        console.log(`Despacho inválido, Razón: 'Iniciado con ${(despacho.value).charAt(0)}'`);
        alert(`Los despachos no pueden empezar con ${(despacho.value).charAt(0)}. Ingresa un despacho que sea válido`);
    } else if (/\d/.test((despacho.value).charAt(1))|| /\d/.test((despacho.value).charAt(2)) || /\d/.test((despacho.value).charAt(3))){
        console.log(`Despacho inválido, Razón: 'Los ultimos 3 carácteres no pueden ser números`);
        alert(`Los ultimos 3 carácteres del despacho no pueden ser números. Ingresa un despacho que sea válido`);
    } else {
        console.log("Despacho recibido");
        alert("Despacho recibido");
    }

    if(puesto.value === null || puesto.value === '' || /^[a-zA-Z]/.test(puesto.value)){
        mensajesError.push('Ingresa tu puesto')
    }

//Edad
    if(/^\d+$/.test(edad.value)){
        if (parseInt(edad.value) < 18 ){
            console.log(`Edad inválida. Razón "'${edad.value}' es menor a la edad mínima requerida"`);
            alert("Debes tener al menos 18 años");
        } else if (parseInt(edad.value) > 67){
            console.log(`Edad inválida. Razón "${edad.value} excede la edad máxima requerida"`);
            alert(`${edad.value} excede la edad mínima requerida`);
        } else {
            console.log("Edad recibida");
            alert("Edad recibida");
        }
    } else {alert("Ingresa un valor numérico")}

//Sueldo
    if(sueldo.value === null || sueldo.value === ''|| parseInt(sueldo.value) < 1000 || (sueldo.value).length < 3){
        console.log(`Edad inválida. Razón "${sueldo.value} es menor a la sueldo mínimo permitido"`);
        alert(`El sueldo ingresado es menor a la sueldo mínimo permitido`);
    } else if (parseInt(sueldo.value) > 6000){
        console.log(`Edad inválida. Razón "${sueldo.value} excede el sueldo máximo permitido"`);
        alert(`${sueldo.value} excede el sueldo máximo permitido`);
    } else {
        console.log("Sueldo válido")
        alert(`${sueldo.value} es válido. Sueldo recibido`);
    }
        mensajesError.push('Ingresa tu sueldo')
    error.innerHTML = mensajesError.join(', ')
    
    return false;
}
