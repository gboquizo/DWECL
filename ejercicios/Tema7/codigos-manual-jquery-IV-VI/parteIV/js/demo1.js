/**
 * Demo 1, parte IV
 * @author Guillermo Boquizo Sánchez
 */
function init() {
    let mensaje = "";
    $("a").each(function (i) {
        mensaje +=
            "<span>Atributo title del enlace " +
            (i + 1) +
            ": " +
            $(this).attr("title") +
            "</span><br/>";
        $("#mensaje").html(mensaje);
    });
}
$(init);