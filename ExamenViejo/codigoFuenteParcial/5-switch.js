//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
    mes = prompt("Ingrese un mes del año").toLowerCase();
    switch (mes){
        case "enero":
        case "febrero":
        {
            alert("Veranitooo!!!");
            break;
        }
        default:
        {
            alert("Extraño enero y febrero");
            break;
        }
    }
	
	
}

