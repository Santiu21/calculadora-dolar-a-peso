
let dolarOficial = 0;
const impuesto = 0.21; // 21% de impuesto como valor decimal

async function obtenerDolar() {
    try {
        let respuesta = await fetch("https://dolarapi.com/v1/dolares/oficial");
        let datos = await respuesta.json();
        dolarOficial = datos.venta;
        document.getElementById("cotizacion").innerText = "$ " + dolarOficial;
    } catch (error) {
        document.getElementById("cotizacion").innerText = "Error al obtener datos";
        console.error("Error al obtener la cotización del dólar:", error);
    }
}

function calcular() {
    let montoUSD = parseFloat(document.getElementById("monto").value);
    if (!isNaN(montoUSD) && montoUSD > 0 && dolarOficial > 0) {
        let totalPesos = montoUSD * dolarOficial * (1 + impuesto);
        document.getElementById("resultado").innerText = "$ " + totalPesos.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "$ 0.00";
    }
}

obtenerDolar();
