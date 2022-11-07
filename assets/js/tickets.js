function resumen()
{
    let descuento = parseFloat(document.getElementById("categoria").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let formula = 200 * descuento * cantidad;
    let total= 200*cantidad - formula;
    document.getElementById("totalPagar").innerHTML = total;
}

function borrar() 
{
    document.getElementById("formulario").reset();
    document.getElementById("totalPagar").innerHTML = '';
}