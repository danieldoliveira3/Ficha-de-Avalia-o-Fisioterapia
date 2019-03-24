/*script para calcular o imc*/
$(document).ready(function () {
  
  
  var resultadoEscrito = $("#imc"), resultadoNumero = $("#imcNumero")
  resultadoEscrito.attr('placeholder',"...")
  resultadoNumero.attr('placeholder',"Resultado")
  resultadoEscrito.addClass('resultGray')
  resultadoNumero.addClass('resultGray')
    

  $(".imc").bind('keyup change mouseover', function () {//fica observando pra ver se ocorre o evento
      
        var peso = $("#peso").val(), altura =  ($("#altura").val())/100
      console.log('altura',altura)
      console.log('peso', peso)
      var alturaAoQuadrado = Math.pow(altura, 2)
      console.log('altura Ao Quadrado', alturaAoQuadrado)

        formula = peso/alturaAoQuadrado
        console.log('formula', formula)

        if (peso == ""){
          resultadoEscrito.attr('placeholder',"Campo 'Peso' não preenchido")
          resultadoEscrito.val("")
          resultadoEscrito.removeClass("resultGray")
          resultadoEscrito.addClass("faltaCampo")
        }

        else if (altura == ""){ 
          resultadoEscrito.attr('placeholder',"Campo 'Altura' não preenchido")
          resultadoEscrito.val("");
          resultadoEscrito.removeClass("resultGray")
          resultadoEscrito.addClass("faltaCampo");
        }

        else{
          resultadoEscrito.removeClass("resultGray")
          resultadoNumero.removeClass("resultGray")
          resultadoEscrito.removeClass("faltaCampo")
          
          
          
          if (formula<17){
            resultadoNumero.val(formula.toFixed(2))
            resultadoEscrito.val('Muito abaixo do peso')
            resultadoEscrito.removeClass('resultBom')
            resultadoEscrito.removeClass('resultMedio')
            resultadoEscrito.addClass('resultRuim')
          }
          else if (formula>=17 && formula<=18.49){
            resultadoNumero.val(formula.toFixed(2))
            resultadoEscrito.val('Abaixo do peso')
            resultadoEscrito.removeClass('resultBom')
            resultadoEscrito.removeClass('resultRuim')
            resultadoEscrito.addClass('resultMedio')
          }

          else if (formula>18.49 && formula<=24.99){
            resultadoNumero.val(formula.toFixed(2))
            resultadoEscrito.val('Peso Normal')
            resultadoEscrito.removeClass('resultMedio')
            resultadoEscrito.removeClass('resultRuim')
            resultadoEscrito.addClass('resultBom')
          }
          else if (formula>24.99 && formula<= 29.99){
            resultadoNumero.val(formula.toFixed(2))
            resultadoEscrito.val('Acima do Peso')
            resultadoEscrito.removeClass('resultBom')
            resultadoEscrito.removeClass('resultRuim')
            resultadoEscrito.addClass('resultMedio')
          }

          else if (formula>29.99 && formula<= 34.99){
            resultadoNumero.val(formula.toFixed(2))
            resultadoEscrito.val('Obesidade I')
            resultadoEscrito.removeClass('resultBom')
            resultadoEscrito.removeClass('resultMedio')
            resultadoEscrito.addClass('resultRuim')
          }

          else if (formula>34.99 && formula<= 39.99){
            resultadoNumero.val(formula.toFixed(2))
            resultadoEscrito.val('Obesidade II')
            resultadoEscrito.removeClass('resultBom')
            resultadoEscrito.removeClass('resultMedio')
            resultadoEscrito.addClass('resultRuim')
          }

          else if (formula>39.99){
            resultadoNumero.val(formula.toFixed(2))
            resultadoEscrito.val('Obesidade III')
            resultadoEscrito.removeClass('resultBom')
            resultadoEscrito.removeClass('resultMedio')
            resultadoEscrito.addClass('resultRuim')
          }

          


          
          
        }



    });
  
  
  
  
  }
  )
  /*fim do script para calcular o imc*/