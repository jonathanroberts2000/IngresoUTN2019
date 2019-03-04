//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*var ancho;
    var largo;
    var perimetro;
    var vueltas;

    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);
    perimetro = (ancho * 2) + (largo * 2);
    vueltas = perimetro * 6;
    alert("Se necesitan" + " " + vueltas + " " + "metros de alambre"); */
    

    var ancho;
    var largo;
    var perimetro;
    var cantidadMetros;
    
    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);
    perimetro = (ancho * 2) + (largo * 2);
    cantidadMetros = perimetro * 6;
    alert("Se necesitan: " + cantidadMetros + " metros de alambre");
}

