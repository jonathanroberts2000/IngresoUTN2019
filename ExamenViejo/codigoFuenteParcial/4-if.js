//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*var num1;
    var num2;
    var multiplicacion;
    var resta;
    var suma;

    num1 = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));

    if(num1 == num2){
        multiplicacion = num1 * num2;
        document.write("El resultado de la multiplicacion es" + " " + multiplicacion);
    }else if(num1 > num2){
        resta = num1 - num2;
        document.write("El resultado de la resta es" + " " + resta);
    }else{
        suma = num1 + num2;
        document.write("El resultado de la suma es" + " " + suma);
    }*/


    var num1;
    var num2;
    var multiplicacion;
    var resta;
    var suma;
    num1 = parseInt(prompt("Ingrese el primer número"));
    num2 = parseInt(prompt("Ingrese el segundo número"));

    if(num1 == num2){
        multiplicacion = num1 * num2;
        document.write("La multiplicacion de los números es: " + multiplicacion);
    }
    else if(num1 > num2){
        resta = num1 - num2;
        document.write("La resta de los números es: " + resta);
    }
    else{
        suma = num1 + num2;
        document.write("La suma de los números es: " + suma);
    }
}

