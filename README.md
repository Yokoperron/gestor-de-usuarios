function cargarSelects() {

    let inferior = document.getElementById("cotaInferior");
    let superior = document.getElementById("cotaSuperior");

    // primeros 50 cuadrados perfectos
    for(let i = 1; i <= 50; i++) {
        let opcion = document.createElement("option");
        opcion.value = i * i;
        opcion.text = i * i;
        inferior.appendChild(opcion);
    }

    // primeros 50 múltiplos de 100
    for(let i = 1; i <= 50; i++) {
        let opcion = document.createElement("option");
        opcion.value = i * 100;
        opcion.text = i * 100;
        superior.appendChild(opcion);
    }
}

function mostrarDatos() {

    let inicio = parseInt(document.getElementById("cotaInferior").value);
    let fin = parseInt(document.getElementById("cotaSuperior").value);

    let serie = [];

    for(let i = inicio; i <= fin; i++) {
        serie.push(i);
    }

    let mensaje = "";

    // cantidad
    if(document.getElementById("cantidad").checked) {
        mensaje += "Cantidad: " + serie.length + "\n";
    }

    // promedio
    if(document.getElementById("promedio").checked) {

        let suma = 0;

        for(let i = 0; i < serie.length; i++) {
            suma += serie[i];
        }

        mensaje += "Promedio: " + (suma / serie.length) + "\n";
    }

    // pares
    if(document.getElementById("pares").checked) {

        let pares = [];

        for(let i = 0; i < serie.length; i++) {

            if(serie[i] % 2 == 0) {
                pares.push(serie[i]);
            }
        }

        mensaje += "Pares: " + pares.join(", ");
    }

    alert(mensaje);
}
