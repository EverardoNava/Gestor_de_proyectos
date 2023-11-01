'use strict'
var btnTareas, btnProyectos, btnCalendario, contenedorIndex;

btnTareas = $("#btn-tareas");
btnProyectos = $("#btn-proyectos");
btnCalendario = $('#btn-calendario');
btnNuevaTarea = $('#btn-agregar-tarea');
contenedorIndex = $('#contenedor-index');

btnTareas.on("click", function (event) {
    contenedorIndex.load('tareas.html');
});

btnProyectos.on("click", function (event) {
    contenedorIndex.load('proyectos.html');
});

btnCalendario.click(function () {

    // Si el contenedor está visible, lo ocultamos; de lo contrario, lo mostramos

    // Si mostramos el calendario, inicialízalo
    if (contenedorIndex.is(':visible')) {
        contenedorIndex.empty();
        var calendarEl = document.getElementById('contenedor-index');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'es',
            events: [
                {
                    title: 'Mi evento',
                    start: '2023-10-25',
                    end: '2023-10-26'
                }
            ]
        });
        calendar.render();
    }
});

