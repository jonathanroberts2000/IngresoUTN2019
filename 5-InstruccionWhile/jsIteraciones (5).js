function Mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while(!(sexo == "f" || sexo == "m")){
        sexo = prompt("Error. Reingrese f ó m.")
    }
    document.getElementById("Sexo").value = sexo;

    /*
    var sexo = prompt(Ingrese f ó m.").toLowerCase();
    while (sexo != "f" && sexo != "m"){
        sexo = prompt("Error. Reingrese f ó m").toLowerCase();
    }
    */
}