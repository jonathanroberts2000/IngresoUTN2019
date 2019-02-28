//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ventas;
    var acumulador = 0;
    var mayor;
    var menor;
    for(ventas = 0; ventas <7; ventas++){
        acumulador = parseInt(prompt("Ingrese un importe"));
        while(isNaN(acumulador) || acumulador <= 0){
            acumulador = parseInt(prompt("Error! Ingrese un importe valido"));
        }
    }
    
    alert("El mayor importe fue " + mayor + " y el menor importe fue " + menor);
}

