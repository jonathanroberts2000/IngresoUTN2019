function Mostrar(){

	var positivo = 0;
	var negativo = 1;
	var numero;
	var flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		if(numero >= 0){
			positivo = positivo + numero;
		}
		else{
			negativo = negativo * numero;
			flag == 1;
		}
	}while(confirm("Desea ingresar mas numeros?") == true);


	document.getElementById("suma").value = positivo;
	if(flag != 0){
		negativo = 0;
	}
	document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN

//puede ir un while dentro de un do, por ejemplo un while validando si es num o no;