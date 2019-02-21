function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(!(numero >0 && numero <=10)){
		numero = parseInt(prompt("Error, ingrese un numero entre 0 y 10."));
	}
	document.getElementById("Numero").value = numero;
	}
	//while(numero <0 || numero >10 || isNaN(numero))  otra forma de verlo