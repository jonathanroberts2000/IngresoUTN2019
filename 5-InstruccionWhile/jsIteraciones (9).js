function Mostrar()
{
/*
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	
	}*/
	var numero;
	var maximo = 0;
	var minimo = 0;
	var flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		//validacion de si es un numero o no;
		if(numero > maximo || flag == 0){
			maximo = numero;
		}
		if(numero < minimo || flag == 0){
			minimo = numero;
			flag = 1;
		}
			
			
		}while(confirm("Desea ingresar otro numero?") == true);
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN