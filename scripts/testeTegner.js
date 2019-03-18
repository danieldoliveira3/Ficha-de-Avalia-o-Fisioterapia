//script para somar valores das select
$(document).ready(function () {

    $(".soma").load("load change check", function () {//fica observando pra ver se ocorre o evento
    
        $(document).ready(function () {
        $("#resultado").val('TA PEGANDO');
          $('#resultado').css({ 'color': 'white', 'border': '1px 1px 1px 1px solid', 'font-weight' : 'bold', 'font-size': '18px'  })
          
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
          $('#resultado').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
         
        }
        else if ($('#input_resultado').val() < 95 && $('#input_resultado').val() >= 84) {
          $("#resultado").val('BOM');
          $('#resultado').css({ 'color': '#2b9527' })
          $('#resultado').css({ 'border-bottom': '5px solid #2b9527' })
          $('#resultado').css({ 'font-size': '18px' })

        }

        else if ($('#input_resultado').val() < 84 && $('#input_resultado').val() >= 65) {
          $("#resultado").val('REGULAR');
          $('#resultado').css({ 'color': '#5db1ff' })
          $('#resultado').css({ 'border-bottom': '5px solid #5db1ff' })
          $('#resultado').css({ 'font-size': '18px' })

        }

        else if ($('#input_resultado').val() < 65 && $('#input_resultado').val() >= 0) {
          $("#resultado").val('RUIM');
          $('#resultado').css({ 'color': '#ff3e3e' })
          $('#resultado').css({ 'border-bottom': '5px solid #ff3e3e' })
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
    $('#resultado').css({ 'color': 'green' })
    $('#resultado').css({ 'border-bottom': '5px solid green' })
    $('#resultado').css({ 'font-size': '18px' })
  }
  else if ($('#input_resultado').val() < 95 && $('#input_resultado').val() >= 84) {
    $("#resultado").val('BOM');
    $('#resultado').css({ 'color': '#2b9527' })
    $('#resultado').css({ 'border-bottom': '5px solid #2b9527' })
    $('#resultado').css({ 'font-size': '18px' })

  }

  else if ($('#input_resultado').val() < 84 && $('#input_resultado').val() >= 65) {
    $("#resultado").val('REGULAR');
    $('#resultado').css({ 'color': '#5db1ff' })
    $('#resultado').css({ 'border-bottom': '5px solid #5db1ff' })
    $('#resultado').css({ 'font-size': '18px' })

  }

  else if ($('#input_resultado').val() < 65 && $('#input_resultado').val() >= 0) {
    $("#resultado").val('RUIM');
    $('#resultado').css({ 'color': '#ff3e3e' })
    $('#resultado').css({ 'border-bottom': '5px solid #ff3e3e' })
    $('#resultado').css({ 'font-size': '18px' })

  }

})
});




}
)
/*fimmmmmmmmmmmmmmmmmm*/




