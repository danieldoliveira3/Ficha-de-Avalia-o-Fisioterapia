//script para somar valores das select
$(document).ready(function () {

    $(".soma").load("load change check", function () {//fica observando pra ver se ocorre o evento
    
        $(document).ready(function () {
        $("#resultado").val('EXCELENTE');
          $('#resultado').css({ 'color': 'white' })
          $('#resultado').css({ 'background': '00da00', 'font-weight' : 'bold' })
          $('#resultado').css({ 'font-size': '18px' })
        })
    
    
    })

})

    
      









  //script para somar o teste de tegner
  $(document).ready(function () {

    $(".soma").load("load change check", function () {//fica observando pra ver se ocorre o evento
      total = 0;


      $(".soma").each(function () {//pra cada elemento marcado com a class soma ele faz isso 


        if ($(this).attr('type') == 'text' || $(this).is('select')) { //se tiver um tipo texto ou um tipo select ele faz isso ai
          total += parseFloat($(this).val());//transforma string em float e soma
        }//fim do if

      });//escopo da funcao e parentese do each

      $("#input_resultado").val(total.toFixed(2));

      $(document).ready(function () {
        if ($('#input_resultado').val() >= 95) {
          $("#resultado").val('EXCELENTE');
          $('#resultado').css({ 'color': 'white' })
          $('#resultado').css({ 'background': 'green' })
          $('#resultado').css({ 'font-size': '18px' })
        }
        else if ($('#input_resultado').val() < 95 && $('#input_resultado').val() >= 84) {
          $("#resultado").val('BOM');
          $('#resultado').css({ 'color': 'white' })
          $('#resultado').css({ 'background': '#2b9527' })
          $('#resultado').css({ 'font-size': '18px' })

        }

        else if ($('#input_resultado').val() < 84 && $('#input_resultado').val() >= 65) {
          $("#resultado").val('REGULAR');
          $('#resultado').css({ 'color': 'white' })
          $('#resultado').css({ 'background': '#5db1ff' })
          $('#resultado').css({ 'font-size': '18px' })

        }

        else if ($('#input_resultado').val() < 65 && $('#input_resultado').val() >= 0) {
          $("#resultado").val('RUIM');
          $('#resultado').css({ 'color': 'white' })
          $('#resultado').css({ 'background': '#ff3e3e' })
          $('#resultado').css({ 'font-size': '18px' })

        }

      })
    });




  }
  )

  $(document).ready(function () {

$(".soma").on("load change check", function () {//fica observando pra ver se ocorre o evento
total = 0;


$(".soma").each(function () {//pra cada elemento marcado com a class soma ele faz isso 


  if ($(this).attr('type') == 'text' || $(this).is('select')) { //se tiver um tipo texto ou um tipo select ele faz isso ai
    total += parseFloat($(this).val());//transforma string em float e soma
  }//fim do if

});//escopo da funcao e parentese do each

$("#input_resultado").val(total.toFixed(2));

$(document).ready(function () {
  if ($('#input_resultado').val() >= 95) {
    $("#resultado").val('EXCELENTE');
    $('#resultado').css({ 'color': 'white' })
    $('#resultado').css({ 'background': 'green' })
    $('#resultado').css({ 'font-size': '18px' })
  }
  else if ($('#input_resultado').val() < 95 && $('#input_resultado').val() >= 84) {
    $("#resultado").val('BOM');
    $('#resultado').css({ 'color': 'white' })
    $('#resultado').css({ 'background': '#2b9527' })
    $('#resultado').css({ 'font-size': '18px' })

  }

  else if ($('#input_resultado').val() < 84 && $('#input_resultado').val() >= 65) {
    $("#resultado").val('REGULAR');
    $('#resultado').css({ 'color': 'white' })
    $('#resultado').css({ 'background': '#5db1ff' })
    $('#resultado').css({ 'font-size': '18px' })

  }

  else if ($('#input_resultado').val() < 65 && $('#input_resultado').val() >= 0) {
    $("#resultado").val('RUIM');
    $('#resultado').css({ 'color': 'white' })
    $('#resultado').css({ 'background': '#ff3e3e' })
    $('#resultado').css({ 'font-size': '18px' })

  }

})
});




}
)
/*fimmmmmmmmmmmmmmmmmm*/




