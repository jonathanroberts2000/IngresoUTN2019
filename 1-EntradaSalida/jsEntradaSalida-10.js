/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var importe;
    var descuento;
    var resultado;
    importe = toFixed(2);
    descuento = toFixed(2);
    resultado  = toFixed(2);
    importe = parseFloat(document.getElementById("importe").value);
    descuento = (importe*25)/100;
    resultado = importe - descuento; 
    document.getElementById("resultado").value = resultado;
    alert("El descuento es de" + " " + descuento);
}
