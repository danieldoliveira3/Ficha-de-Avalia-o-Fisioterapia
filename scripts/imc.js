/*script para calcular o imc*/
$(document).ready(function () {
  
  $("#imc").attr("type","text")
  $("#imcNumero").val('Resultado')
  $("#imc").val('...');
  $('#imc').css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })
    
  var peso = Number($("#peso").val()), altura = Number($("#altura").val())/100
  var imc = peso/(altura*altura)

  $(".imc").change("change", function () {//fica observando pra ver se ocorre o evento
      
    
    
    peso = Number($("#peso").val()), altura = Number($("#altura").val())/100
    imc = peso/(altura*altura)
    
  
  
      $('#imc').css({ 'color': 'black','border-bottom': '5px solid transparent', 'opacity': '1', 'font-size': '18px' })

      $(document).ready(function () {
        
        imc = peso/(altura*altura)
        console.log(imc)
        if (imc >= 40) {
          $("#imcNumero").val(imc.toFixed(2))

          $('#imc').css({ 'color': 'red', 'border-bottom': '5px solid red', 'font-size': '18px' })
          $("#imc").val('OBESIDADE III');
          
          
          $('#imc').css({ 'font-size': '18px' })
        }
        else if (imc < 40 && imc >= 35) {
          $("#imcNumero").val(imc.toFixed(2))

          $("#imc").val('OBESIDADE II');
          $('#imc').css({ 'color': 'red', 'border-bottom': '5px solid red', 'font-size': '18px' })
          
        }
  
        else if (imc < 35 && imc >= 30) {
          $("#imcNumero").val(imc.toFixed(2))

          $("#imc").val('OBESIDADE I');
          $('#imc').css({ 'color': 'red', 'border-bottom': '5px solid red', 'font-size': '18px' })

        }
  
        else if (imc < 30 && imc >= 25) {

          $("#imc").val('ACIMA DO PESO');
          $('#imc').css({ 'color': '#ff8e8e', 'border-bottom': '5px solid #ff8e8e', 'font-size': '18px' })

        }
  
        else if (imc < 25 && imc >= 18.5) {

          $("#imc").val('PESO NORMAL');
          $('#imc').css({ 'color': '#2b9527', 'border-bottom': '5px solid #2b9527', 'font-size': '18px' })

        }
        
        else if (imc < 18.5 && imc >= 17) {
          $("#imcNumero").val(imc.toFixed(2))

          $("#imc").val('ABAIXO DO PESO');
          $('#imc').css({ 'color': '#ff8e8e', 'border-bottom': '5px solid #ff8e8e', 'font-size': '18px' })

        }
  
        else if (imc < 17 && imc >= 0) {
          $("#imcNumero").val(imc.toFixed(2))

          $("#imc").val('MUITO ABAIXO DO PESO');
          $('#imc').css({ 'color': '#ff3a3a', 'border-bottom': '5px solid #ff3a3a', 'font-size': '18px' })

        }
  
      })
    });
  
  
  
  
  }
  )
  /*fim do script para calcular o imc*/