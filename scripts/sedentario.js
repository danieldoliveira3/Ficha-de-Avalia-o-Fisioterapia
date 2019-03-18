/*----------------------------------------------------------------------------------------*/

/*script para calcular o NIVEL DE SEDENTARIO*/
$(document).ready(function () {

    $(".ipac").load("blur change check", function () {//fica observando pra ver se ocorre o evento
      total = 0;
  
  
      $(".ipac").each(function () {//pra cada elemento marcado com a class soma ele faz isso 
  
  
        if ($(this).attr('type') == 'text' || $(this).is('select') || $(this).attr('type') == 'number') { //se tiver um tipo texto ou um tipo select ele faz isso ai
          var questao1a = $('#1a-q').val()
          var questao1b = $('#1b-q').val()
        }//fim do if
  
      });//escopo da funcao e parentese do each
  
      $("#imc").val(total.toFixed(2));
  
  
  
      $(document).ready(function () {
  
        var caminhada1a = $('#1a-q').val()
          var caminhada1b = $('#1b-q').val()
          var moderada2a = $('#2a-q').val()
          var moderada2b = $('#2b-q').val()
          var vigorosa3a = $('#3a-q').val()
          var vigorosa3b = $('#3b-q').val()
          var somaFrequencia = vigorosa3a + moderada2a + caminhada1a
          var somaMinutos = vigorosa3b*vigorosa3a + moderada2b*moderada2a + caminhada1b*caminhada1a
  
  
        
        if ((somaFrequencia == 0 && somaMinutos == 0))   {
          $("#resultadoipac").val('SEDENTÁRIO');
          $('#resultadoipac').css({ 'color': '#ec0000', 'border-bottom': '5px solid #ec0000', 'font-size': '18px', 'font-weight' : 'bold' })
  
        }
  
        
  
      })
    });
  
  
  
  
  }
  )
  
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
  
    $(".ipac").on("blur change check", function () {//fica observando pra ver se ocorre o evento
      total = 0;
  
  
      $(".ipac").each(function () {//pra cada elemento marcado com a class soma ele faz isso 
  
  
        if ($(this).attr('type') == 'text' || $(this).is('select') || $(this).attr('type') == 'number') { //se tiver um tipo texto ou um tipo select ele faz isso ai
          var questao1a = $('#1a-q').val()
          var questao1b = $('#1b-q').val()
        }//fim do if
  
      });//escopo da funcao e parentese do each
  
      $("#imc").val(total.toFixed(2));
  
  
  
      $(document).ready(function () {
  
  
  
  
        
        var caminhada1a = $('#1a-q').val()
          var caminhada1b = $('#1b-q').val()
          var moderada2a = $('#2a-q').val()
          var moderada2b = $('#2b-q').val()
          var vigorosa3a = $('#3a-q').val()
          var vigorosa3b = $('#3b-q').val()
          var somaFrequencia = vigorosa3a + moderada2a + caminhada1a
          var somaMinutos = vigorosa3b*vigorosa3a + moderada2b*moderada2a + caminhada1b*caminhada1a
  
  
        if ((vigorosa3a >= 5 && vigorosa3b >= 30) || ((vigorosa3a >= 3 && vigorosa3b >= 20) && ((moderada2a >= 5 && moderada2b >= 30) || (caminhada1a >= 5 && caminhada1b >= 30))) || (vigorosa3a >= 3 && somaFrequencia >= 8 && somaMinutos >= 240) )   {
          $("#resultadoipac").val('MUITO ATIVO');
          $('#resultadoipac').css({ 'color': '#00da00', 'border-bottom': '5px solid #00da00', 'font-size': '18px', 'font-weight' : 'bold' })
  
        }
  
      
      
        else if ((vigorosa3a >= 3 && vigorosa3b >= 20) || (moderada2a >= 5 && moderada2b >= 30 || (caminhada1a >= 5 && caminhada1b >= 30))
        || (somaFrequencia >= 5 && somaMinutos >= 150) )  {
          console.log(somaFrequencia, somaMinutos)
          $("#resultadoipac").val('ATIVO');
          $('#resultadoipac').css({ 'color': 'WHITE', 'border-bottom': '5px solid GREEN', 'font-size': '18px', 'font-weight' : 'bold' })
  
        }
        else if ((somaFrequencia >= 5 || somaMinutos >= 150) )  {
          console.log(somaFrequencia, somaMinutos)
          $("#resultadoipac").val('IRREGULARMENTE ATIVO A');
          $('#resultadoipac').css({ 'color': 'black', 'border-bottom': '5px solid yellow', 'font-size': '18px', 'font-weight' : 'bold' })
  
        }
        else if ((somaFrequencia < 5 && somaFrequencia >=1) && (somaMinutos < 150 && somaMinutos >=1) )  {
          console.log(somaFrequencia, somaMinutos)
          $("#resultadoipac").val('IRREGULARMENTE ATIVO B');
          $('#resultadoipac').css({ 'color': 'black', 'border-bottom': '5px solid #e7d000', 'font-size': '18px', 'font-weight' : 'bold' })
  
        }
        if ((somaFrequencia == 0 && somaMinutos == 0) || (($("#valor1a").val() + $("#valor2a").val() + $("#valor3a").val() == "000")))   {
          $("#resultadoipac").val('SEDENTÁRIO');
          $('#resultadoipac').css({ 'color': 'WHITE', 'border-bottom': '5px solid #ec0000', 'font-size': '18px', 'font-weight' : 'bold' })
  
        }
  
      
    
  
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para calcular o INDICE DE SEDENTARIO*/
  
  
  