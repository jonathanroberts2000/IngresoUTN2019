/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var resultado;
    var calculo;
    sueldo = parseInt (document.getElementById("sueldo").value);
    calculo = sueldo*10/100 + sueldo;
    document.getElementById("resultado").value = resultado;
    
}
