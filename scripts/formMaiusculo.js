/*funcao para deixar formulario maiusculo*/
$(document).ready(function maiuscula() {

    $(".maiuscula").keyup(function(){
        $(this).val($(this).val().toUpperCase());
      });
      });