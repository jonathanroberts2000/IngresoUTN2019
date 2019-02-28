//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var maximo;
    var minimo;
    var diaMax;
    var diaMin;
    var flag = 0;

    for(var i = 1; i <= 7; i++){
        importe = parseInt(prompt("Ingrese un importe"));
        while(importe <= 0 || isNaN(importe)){
            importe = parseInt(prompt("Error, Reingrese un importe"));
        }
        if(maximo < importe || flag == 0){
            maximo = importe;
            diaMax = i;
        }
        if(minimo > importe || flag == 0){
            minimo = importe;
            diaMin = i;
            flag = 1;
        }
    }
    alert("El mayor importe es $ " + maximo + " del dia " + diaMax + " el menor importe es $ " + minimo + " del dia " + diaMin);
}

