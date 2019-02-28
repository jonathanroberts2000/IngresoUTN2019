//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero;
    var contadorNumerosPares = 0;
    var contadorNumeros =  0;
    var acumuladorNumeros = 0;
    var promedio;
    var suma;
    var maximo;
    var minimo;
    var flag = 0;
    var seguir;
	
    do{
        numero = parseInt(prompt("Ingrese un numero positivo"));
        while(isNaN(numero) || numero < 0){
            numero = parseInt(prompt("Error! Reingrese un valor positivo"));
        }
        acumuladorNumeros = acumuladorNumeros + numero;
        contadorNumeros++;

        if(numero % 2 == 0){
            contadorNumerosPares++;
        }
        if(numero > maximo || flag == 0){
            maximo = numero;
        }
        if(numero < minimo || flag == 0){
            minimo = numero;
            flag = 1;
        }

        seguir = confirm("Desea ingresar mas numeros?");
    }while(seguir);
    promedio = acumuladorNumeros / contadorNumeros;
    suma = acumuladorNumeros;
    document.write("La cantidad de numeros pares es: " + contadorNumerosPares + "<br>");
    document.write("El promedio de todos los numeros ingresados es: " + promedio + "<br>");
    document.write("La suma de todos los números es: " + suma + "<br>");
    document.write("El numero maximo es: " + maximo + "<br>" + "El numero minimo es: " + minimo);    
}

