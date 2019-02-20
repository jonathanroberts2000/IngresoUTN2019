/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);
    precioFinal = precioUno + precioDos+ precioTres;
    alert("El precio final es de $" + " " + precioFinal);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);
    promedio = (precioUno + precioDos + precioTres) / 3;
    alert("El promedio es de $" + " " + promedio);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var calculo;
    var precioFinal;
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);
    calculo = (precioUno + precioDos + precioTres) * 21 / 100;
    precioFinal = calculo + precioUno + precioDos + precioTres;
    alert("El precio final es de $" + " " + precioFinal);
}