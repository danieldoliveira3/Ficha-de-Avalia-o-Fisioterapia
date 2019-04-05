
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
  
    var resultadoEscrito = $('#scorestepdownDireito')
    var resultadoNumero = $('#resultadoStepDownDireito')

    resultadoEscrito.attr('placeholder', '...')
    
    resultadoNumero.addClass('resultGray')
    resultadoEscrito.addClass('resultGray')


    $(".stepdownDireito").bind("keyup change", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
  
        resultadoEscrito.removeClass('resultGray')

        resultadoNumero.removeClass('resultGray')
        var manutencaoUnipodal = $("#manutencaoEmApoioUnipodaldireito").val(), valgo2Dedo = $("#valgo2Dedodireito").val(), posJoelho = $("#posJoelhodireito").val()
        var planoPelve = $("#planoPelvedireito").val(), movtronco = $("#movtroncodireito").val(), estrategiademms = $("#estrategiademmsDireito").val()
    
        

        soma = Number(manutencaoUnipodal)+ Number(valgo2Dedo)+ Number(posJoelho) + Number(planoPelve) + Number(movtronco) + Number(estrategiademms)
        
        
console.log('soma', soma)

         if (soma >= 0 && soma<=1){
            var texto = "Qual. de Mov Boa" 
            $("#scorestepdownDireito").val(texto)
            $("#resultadoStepDownDireito").val(soma)
            $('#scorestepdownDireito').css({ 'color': 'green', 'border-bottom': '5px solid green' })

         }

         else if (soma > 1 && soma<=3){
             var texto = "Qual. de Mov Média"
             $("#resultadoStepDownDireito").val(soma)
            $("#scorestepdownDireito").val(texto)
            $('#scorestepdownDireito').css({ 'color': 'rgb(255, 196, 0)', 'border-bottom': '5px solid rgb(255, 196, 0)' })

         }

         else{
            var texto = "Qual. de Mov Pobre"
            $("#resultadoStepDownDireito").val(soma)

            $("#scorestepdownDireito").val(texto)
            $('#scorestepdownDireito').css({ 'color': 'red', 'border-bottom': '5px solid red' })


         }
        
        

            

        




        
        

   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  