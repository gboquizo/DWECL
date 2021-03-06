/**
 * 5. Responde con respecto a Set:
 * Un conjunto de elementos de tipo:
 * Constructor admite como parámetros:
 * Métodos para añadir:
 * Métodos para eliminar:
 * Métodos para buscar:
 * Número de elementos:
 * Si dos elementos son iguales:
 * Se recorren mediante:
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    let newline = '<br/>';
    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
    }

    /**
     * Función que crea el layout de la página desde js.
     */
    let createPage = function () {
        /**
         * Sección header
         */

        //Crea el header y se le asigna una clase.
        let header = document.createElement('header');
        header.className = 'header';

        //Crea el título y se le asigna un texto.
        let h1 = document.createElement('h1');
        h1.textContent = 'Desarrollo Web en Entorno Cliente';

        //Crea el subtítulo y se le asigna un texto.
        let h2 = document.createElement('h2');
        h2.innerHTML = 'Listado collections en JS.<br/>Ejercicio 5 ';

        //Se añade el elemento h1 al header.
        header.appendChild(h1);

        //Se añade el elemento h2 al header.
        header.appendChild(h2);

        /**
         * Sección main
         */

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement('main');
        main.className = 'main';

        //Crea un contenedor para el ejercicio y se le asigna una clase.
        let container = document.createElement('container');
        container.className = 'container';

        //Crea un contenedor para el div y se le asigna una clase
        let exercise = document.createElement('ejercicio');
        exercise.className = 'ejercicio';

        //Crea un fragment donde insertar la información del ejercicio.
        let fragment = document.createDocumentFragment();

        //Llamada a la function que crea el enunciado. Se le pasa el fragment por argumento.
        createDefinans(fragment);

        //Se añade el fragment al div del ejercicio.
        exercise.appendChild(fragment);

        //Se añade el contenedor del botón al container principal.
        container.appendChild(exercise);

        //Se añade el elemento container al main.
        main.appendChild(container);

        /**
         * Sección footer
         */

        //Crea un footer y se le asigna una clase.
        let footer = document.createElement('footer');
        footer.className = 'footer';

        //Crea un elemento p para el copyright y se le asigna un texto.
        let p = document.createElement('p');
        p.className = 'footer-copyright';
        p.textContent = 'Guillermo Boquizo Sánchez - DWECL 2 º DAW IES Gran Capitán';

        //Se añade el elemento p al footer.
        footer.appendChild(p);

        /**
         * Sección document
         */

        //Se añade el header al body.
        document.body.appendChild(header);

        //Se añade el main al body.
        document.body.appendChild(main);

        //Se añade el footer al body
        document.body.appendChild(footer);
    };

    let createDefinans = function (fragment) {
        let firstParagraph = document.createElement('article');
        firstParagraph.className = 'definans';
        firstParagraph.innerHTML =
            ` <h4>5. Responde con respecto a Set:</h4>
            <ol class="info">
                <li class="info">Un conjunto de elementos de tipo:<br>
                Valores únicos de cualquier tipo, inclusive referencias a objetos y valores primitivos.
                </li><br> 
                <li class="info">Constructor admite como parámetro:<br>
                    Iterable: Si un objeto iterable se para como parámetro, todos sus elementos se añadirán al nuevo Set.
                    Si no se especifica dicho parámetro o es null, el Set estará vacío. 
                </li><br>
                <li class="info">Métodos para añadir:<br>
                    add(value): Agrega un nuevo elemento con el valor dado al objeto Set. Devuelve el objeto Set.
                </li><br>  
                <li class="info">Métodos para eliminar:<br>
                    delete(value): Elimina cualquier valor asociado a la llave y devuelve el valor que Set.prototype.has(key) tenía previamente.<br>
                    Después Set.prototype.has devolverá false.
                </li><br>  
                <li class="info">Métodos para buscar:<br>
                    has(value): Devuelve un boolean que indica si un valor se ha asociado a la key en el objeto Set o no se ha asociado.
                </li><br>  
                <li class="info">Número de elementos:<br>
                    size: Devuelve el número de valores en el objeto Set.
                </li><br>     
                <li class="info">Si dos elementos son iguales:<br>
                    Los Set de manera inherente no permiten valores duplicados cuando se les pasa un objeto lineal iterable como una matriz, 
                    pero cuando se les pasa una matriz de objetos sí permiten objetos duplicados.
                </li><br>  
                <li class="info">Se recorren mediante:<br>
                    <ul class="info">
                    <li class="info2">forEach(callbackFn[, thisArg]): Llama a la callbackFn una vez por cada conjunto clave/valor presentes en cada objeto Map, en orden de inserción.<br>
                    Si se le proporciona un parámetro thisArg al forEach, se usará como valor "this" para cada callback.</li><br>
                    <li class="info2">for...of: La sentencia for...of crea un bucle que itera a través de los elementos de objetos iterables 
                    (incluyendo Array, Map, Set, el objeto arguments, etc.), ejecutando las sentencias de cada iteración 
                    con el valor del elemento que corresponda.</li>
                </li><br>  
            </ol>
        `;

        fragment.appendChild(firstParagraph);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}