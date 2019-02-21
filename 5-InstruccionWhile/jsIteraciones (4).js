function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	while(numero <=9){
		document.getElementById("Numero").value = numero;
		numero = document.getElementById("Numero").value;
	}
}