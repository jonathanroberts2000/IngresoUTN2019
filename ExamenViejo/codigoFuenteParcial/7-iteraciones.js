//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota;
    var sexo;
    var promedio;
    var notaBaja;
    var acumuladorNotas = 0;
    var contadorVaronMax6 = 0;
    var flag = 0;

    for(var i = 1; i <= 6; i++){
        nota = parseInt(prompt("Ingrese una nota"));
        while(isNaN(nota) || nota < 0 || nota > 10){
            nota = parseInt(prompt("Error! Reingrese un numero valido"));
        }
        sexo = prompt("Ingrese f ó m");
        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Error! Reingrese un sexo valido");
        }
        acumuladorNotas = acumuladorNotas + nota;
        if(nota < notaBaja || flag == 0){
            notaBaja = nota;
            flag = 1;
        }
        if(sexo == "m" && nota >= 6){
            contadorVaronMax6++;
        } 
    }
    promedio = acumuladorNotas / 6;
    document.write("A) El promedio de las notas es: " + promedio.toFixed(2) + "<br>");
    document.write("B) La nota mas baja es: " + notaBaja + "<br>");
    document.write("C) La cantidad de varones que su nota haya sido mayor ó igual a 6 son: " + contadorVaronMax6 + "<br>");
}

