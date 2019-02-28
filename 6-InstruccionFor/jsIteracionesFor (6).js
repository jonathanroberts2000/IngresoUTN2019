function Mostrar()
{
    var numero = parseInt(prompt("Ingrese un numero positivo"));
    var contador = 0;
    while(numero <= 0 || isNaN(numero)){
        numero = parseInt(prompt("Error! Ingrese numero positivo"));
    }
    for(var i = 1; i <= numero; i++){
        if(i % 2 == 0){
            //contar los pares y mostrarlos
            contador++;
            console.log(i);
        }
    }
    console.log("Cantidad de pares:" + " " + contador);
}//FIN DE LA FUNCIÓN