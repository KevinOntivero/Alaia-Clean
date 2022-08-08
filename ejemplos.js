/* DOM */

    /* ejemplo */

    let variable = document.getElementById("id"); /* selector de id, debemos incluir el nombre de la etiqueta*/
    variableId.style.textDecoration = "none"; /* modificamos el estilo de esta etiqueta */

    let variable2 = document.getElementsByClassName("variable2")/* selector de clases  */
    for(let i = 0 ; i < variable2.length; i++ ){
        variable2[i].style.textDecoration = "underline"; /* recorremos y modificamos todas las clases llamadas de la misma forma*/
    }

    let variable3 = document.getElementsByName("")/* selector de */

    let variable4 = document.getElementsByTagName("p");/* seleccionamos etiquetas por tipo, ejemplo parrafo*/
    for(let i = 0 ; i < variable4.length; i++ ){
        variable4[i].style.color = "#fff"; /* todos las etiquetas p, se modificaran de la base 0 hasta el ultimo */
    }

    /* innerHTML */
    variableId.innerHTML = "Hola";  /* Modificar la etiqueta seleccionada, en este caso el ID */

    /* para modificar varias etiquetas por ejemplo una lista */
    let paises = document.getElementsByClassName("paises");
    console.log(paises[0].innerHTML); /* nos paramos en la posicion 0 y la modificamos */
    console.log(paises[1].innerHTML); /* lo mismo */


    /* creando opciones con arrays */

    /* nodo donde agregamos nuevos elementos */
    let ejemploId = getElementById("title");

    let title = ["Productos","Limpieza","Aromas"];
    
