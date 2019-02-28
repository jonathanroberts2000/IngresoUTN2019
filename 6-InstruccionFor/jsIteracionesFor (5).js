function Mostrar()
{
    var numero = parseInt(prompt("Ingrese un numero"));
    for(var i = 0; i != 9; numero = parseInt(prompt("Ingrese un numero"))){
        if(numero == 9){
            console.log(numero);
            break;
        }
    }
}//FIN DE LA FUNCIÓN


/*      arreglarlo porque quedo re mal
    for(    ;     ;     ){
        numero = parseInt(prompt("Ingrese un numero: "));
        while(isNaN(numero)){
            numero = parseInt(prompt("No es un numero, ingrese un numero"));
        }
        if(numero == 9){
            break;
        }
    }
*/