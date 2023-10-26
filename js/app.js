'use strict'
var btnIngresar, btntareas,contenedorIndex, btnNuevaTarea, btnproyectos;

btnIngresar = $("#ingresar");
btntareas = $("#btn-tareas");
contenedorIndex = $('#contenedor-index');
btnNuevaTarea = $('#btn-agregar-tarea');
btnproyectos = $("#btn-proyectos");
//Login
btnIngresar.on("click", function (event) {
    event.preventDefault();
    btnIngresar.prop('disabled', true);
});

//Index
btntareas.on("click", function (event) {
    contenedorIndex.load('tareas.html');
});

btnproyectos.on("click", function (event) {
    contenedorIndex.load('proyectos.html');
});

$('#btn-calendario').click(function() {
   
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

// Tareas

btnNuevaTarea.on("click", function (event) {
    $('#modal-tarea').modal({ backdrop: 'static', keyboard: false });
});

$('#guardar').on("click", function (event) {
    alert("guardar");
});

$('#modal-tarea-archivos').on("click", function (event) {
    $('#archivo').click();
});


$('#modal-tarea-fecha_limite').on("click", function (event) {
    $('#modal-tarea-fecha_limite-modal').modal({ backdrop: 'static', keyboard: false });

});

//Proyecto
$("#btn-crear-proyecto").on("click", function (event) {
    $('#contenedor-index').load('nuevoProyecto.html');
});

// Nuevo Proyecto
$("#btn-detalles").on("click", function (event) {
    $('#modal-nuevoproyecto-detalles').modal({ backdrop: 'static', keyboard: false });
});

$("#btn-miembros").on("click", function (event) {
    $('#modal-nuevoProyeto-miembros').modal({ backdrop: 'static', keyboard: false });
});
$("#btn-actividades").on("click", function (event) {
    window.location.href = 'actividades.html';
});
$("#btn-documentos").on("click", function (event) {
    window.location.href = 'documentos.html';
});
$("#direct-chat").on("click", function (event) {
    window.location.href = 'directchat.html';
});
$("#btn-calendario-proyecto").on("click", function (event) {
    window.location.href = 'calendario.html';
});

// Documentos
$("#btn-agrgar-documento").on("click", function (event) {
    window.location.href = '.html';
});

//Actividad
$('#btn-agregar-actividad').on("click", function (event) {
    $('#modal-tarea').modal({ backdrop: 'static', keyboard: false });
});

//Miembros
$("#busqueda").click(function () {
    searchTable();
});

function searchTable() {
        var searchText = $("#search-input").val().toLowerCase();
        $("#modal-nuevoProyeto-miembros table tbody tr").each(function () {
            var text = $(this).text().toLowerCase();
            if (text.indexOf(searchText) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }
    
    $('#search-input').on('input', function() {
        var searchText = $(this).val().toLowerCase();
        
        // Tu lógica de filtrado existente
    
        // Verificar la longitud del texto en la barra de búsqueda
        if (searchText.length === 0) {
            // Si no hay texto, restaura la tabla a su estado original
            $('#modal-nuevoProyeto-miembros table tbody tr').show();
        }
    });
    