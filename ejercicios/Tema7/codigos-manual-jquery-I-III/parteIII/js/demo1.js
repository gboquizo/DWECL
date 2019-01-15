/**
 * Demo 1, parte III
 * @author Guillermo Boquizo Sánchez
 */
function init() {
    $("#boton").click(function () {
        let selectorEscrito = $("#camposelector").val();
        let $mensaje = $("#mensaje")
        if (selectorEscrito == "") {
            $mensaje.text("Escribe algo en el campo de texto");
            $mensaje.css("color", "red");
        } else {
            $mensaje.text("");
            elementosSeleccionados = $(selectorEscrito);
            elementosSeleccionados.fadeOut("slow", function () {
                elementosSeleccionados.fadeIn("slow");
            });
        }
    });
}
$(init);