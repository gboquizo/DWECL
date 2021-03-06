/**
 * Demo 3, parte I
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        //$("a").click(() => alert("Has pulsado el enlace...\nAhora serás enviado a DesarrolloWeb.com"));

        // para prevenir acción por defecto

        $("a").click((ev) => {
            alert("Has pulsado el enlace, pero vamos a cancelar el evento...\nPor tanto, no vamos a llevarte a DesarrolloWeb.com");
            ev.preventDefault();
        });
    }

    //código a ejecutar cuando el DOM está listo para recibir instrucciones. 
    $(init)
}