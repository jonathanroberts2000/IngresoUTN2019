function Mostrar()
{
    //alert("hacer en casa");
    var numero = parseInt(prompt("Ingrese un numero positivo"));
    var contador = 0;
    while(numero <= 0 || isNaN(numero)){
        numero = parseInt(prompt("Error! Ingrese numero positivo"));
    }
    for(var i = 1; i <= numero; i++){
        if(!(numero % i == 0)){
            console.log("Es un numero primo");
        }
    }



}//FIN DE LA FUNCIÓN