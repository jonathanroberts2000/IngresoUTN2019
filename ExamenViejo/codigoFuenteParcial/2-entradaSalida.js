//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    /*var valor;
    var calculo;
    var precioFinal;

    valor = parseInt(prompt("Ingrese el importe"));
    calculo = valor * 21 / 100;
    precioFinal = valor + calculo;
    document.getElementById("importe").value = precioFinal.toFixed(2);*/

    var precio;
    var precioFinal;
    var calculo;
    precio = parseInt(prompt("Ingrese un importe:"));
    calculo = precio * 21 / 100;
    precioFinal = precio + calculo;
    document.getElementById("importe").value = precioFinal;
}

