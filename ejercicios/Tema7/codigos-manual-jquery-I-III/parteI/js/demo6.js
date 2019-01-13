/**
 * Demo 6, parte I
 * @author Guillermo Boquizo Sánchez
 */

function init() {

    $("#enlaceajax").click(function (evento) {
        evento.preventDefault();
        $("#destino").load("recibe-parametros.php", {
            nombre: "Pepe",
            edad: 45
        }, () => alert("recibidos los datos por ajax"));
    });
}

$(init)