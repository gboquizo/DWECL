/**
 * Demo1, parte I
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("#botonA").click(() => $('#capa').html('Has hecho clic en el botón<b> A</b>'));
        $("#botonB").click(() => $('#capa').html('Recibido un clic en el botón<b> B</b>'));
    }

    $(init)
}