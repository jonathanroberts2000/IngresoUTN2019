function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;
	}while(confirm("Desea ingresar otro numero?") == true);
	
	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN