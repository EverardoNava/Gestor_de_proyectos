'use strict'
var btnIngresar = $('#ingresar');

$("#login").on("submit", function (event) {
    event.preventDefault();
    btnIngresar.on("click",function(){
        window.location.href = "index.html";
    });
    // btnIngresar.prop("disabled", true).html('<i class="fas fa-spinner fa-spin"></i> Verificando...');
    
    // $.ajax({
    //     url: "",
    //     data: $(this).serialize(),
    //     success: function (respuesta) {
    //         if (respuesta.status == "success")
    //             window.location.reload();
    //         else
    //             toastr.error(respuesta.message);
    //     },
    //     error:
    //     function (respuesta) {
    //             toastr.error(respuesta.message);
    //     },
    //     complete: function(){
    //         btnIngresar.prop("disable", false).html("Ingresar");
    //     }
    // });
});