function Mostrar()
{
//tomo la edad  
    var edad;
    edad = parseInt(document.getElementById("edad").value);
    if(edad >= 18){
        alert("Usted es mayor de edad");
    }
    else if(edad >=13 && edad <=17){
        alert("Usted es un adolescente");
    }
    else{
        alert("Usted es un niño");
    }




}//FIN DE LA FUNCIÓN
