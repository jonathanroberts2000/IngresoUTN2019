//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var lado;
    var perimetro;
    lado = parseInt(document.getElementById("lado").value);
    perimetro = lado * 3;
	alert("El perimetro del triangulo es:" + " " + perimetro);
}
//puede ir validacion con if porque leemos el dato de un document.getelementbyid;
