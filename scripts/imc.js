/*script para calcular o imc*/
$(document).ready(function () {

    $(".imc").on("blur change check", function () {//fica observando pra ver se ocorre o evento
      total = 0;
  
  
      $(".imc").each(function () {//pra cada elemento marcado com a class soma ele faz isso 
  
  
        if ($(this).attr('type') == 'text' || $(this).is('select') || $(this).attr('type') == 'number') { //se tiver um tipo texto ou um tipo select ele faz isso ai
          var peso = $('#peso').val()
          var altura = $('#altura').val() / 100
          total = (peso / (altura * altura));//transforma string em float e soma
        }//fim do if
  
      });//escopo da funcao e parentese do each
  
      $("#imc").val(total.toFixed(2));
  
  
  
      $(document).ready(function () {
        if ($("#imc").val() >= 40) {
          $("#imcresult").val('OBESIDADE III');
          $('#imcresult').css({ 'color': 'white' })
          $('#imcresult').css({ 'background': 'RED' })
          $('#imcresult').css({ 'font-size': '18px' })
        }
        else if ($("#imc").val() < 40 && $("#imc").val() >= 35) {
          $("#imcresult").val('OBESIDADE II');
          $('#imcresult').css({ 'color': 'white' })
          $('#imcresult').css({ 'background': '#ff3a3a' })
          $('#imcresult').css({ 'font-size': '18px' })
        }
  
        else if ($("#imc").val() < 35 && $("#imc").val() >= 30) {
          $("#imcresult").val('OBESIDADE I');
          $('#imcresult').css({ 'color': 'white' })
          $('#imcresult').css({ 'background': '#ff6868' })
          $('#imcresult').css({ 'font-size': '18px' })
        }
  
        else if ($("#imc").val() < 30 && $("#imc").val() >= 25) {
          $("#imcresult").val('ACIMA DO PESO');
          $('#imcresult').css({ 'color': 'black' })
          $('#imcresult').css({ 'background': '#ff8e8e' })
          $('#imcresult').css({ 'font-size': '18px' })
        }
  
        else if ($("#imc").val() < 25 && $("#imc").val() >= 18.5) {
          $("#imcresult").val('PESO NORMAL');
          $('#imcresult').css({ 'color': 'white' })
          $('#imcresult').css({ 'background': '#2b9527' })
          $('#imcresult').css({ 'font-size': '18px' })
        }
        
        else if ($("#imc").val() < 18.5 && $("#imc").val() >= 17) {
          $("#imcresult").val('ABAIXO DO PESO');
          $('#imcresult').css({ 'color': 'black' })
          $('#imcresult').css({ 'background': '#ff8e8e' })
          $('#imcresult').css({ 'font-size': '18px' })
        }
  
        else if ($("#imc").val() < 17 && $("#imc").val() >= 0) {
          $("#imcresult").val('MUITO ABAIXO DO PESO');
          $('#imcresult').css({ 'color': 'white' })
          $('#imcresult').css({ 'background': '#ff3a3a' })
          $('#imcresult').css({ 'font-size': '18px' })
        }
  
      })
    });
  
  
  
  
  }
  )
  /*fim do script para calcular o imc*/