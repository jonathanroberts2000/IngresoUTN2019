/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1, num2, resultado;
    num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);
    resultado = num1 + num2;
    alert("La suma es" + " " + resultado);
}

function restar()
{
	num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);
    resultado = num1 - num2;
    alert("La resta es" + " " + resultado);
}

function multiplicar()
{ 
	num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);
    resultado = num1 * num2;
    alert("La multiplicacion es" + " " + resultado);
}

function dividir()
{
	num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);
    resultado = num1 / num2;
    alert("La division es" + " " + resultado);
}

