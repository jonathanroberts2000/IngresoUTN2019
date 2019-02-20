function Mostrar()
{
//tomo el mes 
    var mes = document.getElementById('mes').value;
    switch(mes){
        case "Febrero":
        {
            alert("Este mes no tiene más de 29 dias");
            break;
        }
        default:
        {
            alert("Este mes tiene 30 o más dias");
        }
    }
	
	


}//FIN DE LA FUNCIÓN