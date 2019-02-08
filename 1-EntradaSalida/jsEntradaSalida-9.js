/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var resultado;
    var aumento;
    sueldo = toFixed(2);
    resultado = toFixed(2);
    aumento = toFixed(2);
    sueldo = parseFloat(document.getElementById("sueldo").value);
    resultado = (sueldo * 10)/100 + sueldo;
    aumento = (sueldo * 10)/100;
    document.getElementById("resultado").value = resultado;
    alert("El aumento es de" + " " + aumento);
}
