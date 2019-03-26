
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
  
    var resultadoEscrito = $('#scorestepdown')
    var resultadoNumero = $('#resultadoStepDown')

    resultadoEscrito.attr('placeholder', '...')
    
    resultadoNumero.addClass('resultGray')
    resultadoEscrito.addClass('resultGray')


    $(".stepdown").bind("keyup change", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
  
        resultadoEscrito.removeClass('resultGray')

        resultadoNumero.removeClass('resultGray')
        var manutencaoUnipodal = $("#manutencaoEmApoioUnipodal").val(), valgo2Dedo = $("#valgo2Dedo").val(), posJoelho = $("#posJoelho").val()
        var planoPelve = $("#planoPelve").val(), movtronco = $("#movtronco").val(), estrategiademms = $("#estrategiademms").val()
    
        

        soma = Number(manutencaoUnipodal)+ Number(valgo2Dedo)+ Number(posJoelho) + Number(planoPelve) + Number(movtronco) + Number(estrategiademms)
        
        
console.log('soma', soma)

         if (soma >= 0 && soma<=1){
            var texto = "Qual. de Mov Boa" 
            $("#scorestepdown").val(texto)
            $("#resultadoStepDown").val(soma)
            $('#scorestepdown').css({ 'color': 'green', 'border-bottom': '5px solid green' })

         }

         else if (soma > 1 && soma<=3){
             var texto = "Qual. de Mov Média"
             $("#resultadoStepDown").val(soma)
            $("#scorestepdown").val(texto)
            $('#scorestepdown').css({ 'color': 'rgb(255, 196, 0)', 'border-bottom': '5px solid rgb(255, 196, 0)' })

         }

         else{
            var texto = "Qual. de Mov Pobre"
            $("#resultadoStepDown").val(soma)

            $("#scorestepdown").val(texto)
            $('#scorestepdown').css({ 'color': 'red', 'border-bottom': '5px solid red' })


         }
        
        

            

        




        
        

   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  