function Mostrar()
{

    var clave = prompt("ingrese el número clave.");
    //while(!(clave == "utn750")){} es la otra forma de pensarlo
    while(clave != "utn750"){
        clave = prompt("Contraseña incorrecta. Reingrese:");
    }
    alert("Contraseña correcta");
}//FIN DE LA FUNCIÓN
