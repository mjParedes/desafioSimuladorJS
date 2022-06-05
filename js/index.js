/*El simulador ejecutara las siguientes tareas*/

// - Validar mayoria de edad 
// - Pedir nombre y apellido de usuario
// - Pedir DNI de usuario
// - Elegir productos (opciones)
// - Seleccionar cantidad de productos comprados
// - Calcular y mostrar importe total de la compra
// - Consultar y calcular monto en cuotas s/interes
// - Mostrar lista de redes sociales donde contactarse


let edad;
let nombreCompleto;
let dni;
let producto;
let total = 0;
let cuotas; 


function validarEdad() {
    edad = parseInt(prompt("Ingrese su edad"));

    while (edad <18) {
        alert("Eres menor de edad no puedes ingresar al sitio")
        edad = parseInt(prompt("Ingrese su edad"))
    }
}

function nombreUser() {
    nombreCompleto = prompt("Ingrese su nombre completo")
    while (nombreCompleto === "" || !isNaN(nombreCompleto)) {
        nombre = prompt("Ingrese su nombre nuevamente")
    }
}

function pedirDNI() {
    dni = prompt("ingrese su DNI");
    while (isNaN(parseInt(dni)) || dni.length < 7 || dni.length > 8) {
        dni = prompt("ingrese su DNI. Recuerde que debe ser un número de 7 u 8 caracteres");
    }
    return dni
}


const elegirProducto = () => {
    producto = prompt("Que producto desea adquirir: collar, correa, alimento balanceado, juguete")

    let precio;
    switch (producto) {
      case "collar":
          precio = 650;
        break;
      case "correa":
          precio = 540;
        break;
      case "alimento balanceado":
          precio = 1000;
        break;
      case "juguete":
          precio = 320;
        break;
      default:
          alert("Ingrese un producto de la lista")
          producto = prompt("Que producto desea adquirir: collar, correa, alimento balanceado, juguete")
        break;
    }
    return precio;
}

const elegirCantidad = () => {
    let cantidad = parseInt(prompt("Ingrese cantidad deseada"));
    while (isNaN(cantidad) || cantidad === "") {
        cantidad = parseInt(prompt("Ingrese cantidad deseada"))
    }
    return cantidad
}

const calculoTotal = (precioProducto, cantidadProducto) => {
    total += precioProducto * cantidadProducto;
}

const pagarCuotas = () => {
    let formaDePago = prompt("Abonaras en cuotas: SI/NO");

    if ((formaDePago === "si") || (formaDePago === "SI")) {
        cuotas = parseInt(prompt("Ingresa cantidad de cuotas: 3/6/12"))
        switch (cuotas) {
            case 3:
                montoCuotas = console.log("Abonaras 3 cuotas de " + total / 3 + " pesos");
                break;
            case 6:
                montoCuotas = console.log("Abonaras 6 cuotas de " + total / 6 + " pesos");
                break;
            case 12:
                montoCuotas = console.log("Abonaras 12 cuotas de " + total / 12 + " pesos");
                break;
            default:
                montoCuotas = parseInt(prompt("Ingresa cantidad de cuotas : 3/6/12"))
                break;
        }
        return montoCuotas

    }else if((formaDePago === "no") || (formaDePago === "NO")) {
        console.log("Gracias por su compra")
    }
}


const mostrarRedes = () => {
    let arrayR = ["facebook", "instagram", "tweeter","telegram"];
    alert("por consola podras conocer nuestras redes sociales")
    for (let i = 0; i < arrayR.length; i++) {
        console.log("Seguinos por " + arrayR[i]);
    }
}


function inicio() {
    validarEdad();
    console.log("Tienes " + edad + " años")

    nombreUser();
    console.log("Tu nombre es: " + nombreCompleto)

    pedirDNI();
    console.log("Tu numero de documento es " + dni)

    calculoTotal(elegirProducto() , elegirCantidad());
    console.log("Tu importe total es de  "+ total+ " pesos")

    pagarCuotas();
    
    mostrarRedes();
}


inicio();

