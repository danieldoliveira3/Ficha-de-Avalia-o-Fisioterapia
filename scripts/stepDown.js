
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
  
    $(".stepdown").change("change check", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
  
  
        var manutencaoUnipodal = $("#manutencaoEmApoioUnipodal").val(), valgo2Dedo = $("#valgo2Dedo").val(), posJoelho = $("#posJoelho").val()
        var planoPelve = $("#planoPelve").val(), movtronco = $("#movtronco").val(), estrategiademms = $("#estrategiademms").val()
    
        

        soma = Number(manutencaoUnipodal)+ Number(valgo2Dedo)+ Number(posJoelho) + Number(planoPelve) + Number(movtronco) + Number(estrategiademms)
        
        
console.log('soma', soma)

         if (soma >= 0 && soma<=1){
            var texto = "Qual. de Mov Boa:" + ' ' + String(soma)
            $("#scorestepdown").val(texto)
            $('#scorestepdown').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '16px' })

         }

         else if (soma > 1 && soma<=3){
             var texto = "Qual. de Mov Média:" + ' ' + String(soma)
            $("#scorestepdown").val(texto)
            $('#scorestepdown').css({ 'color': 'rgb(255, 196, 0)', 'border-bottom': '5px solid rgb(255, 196, 0)', 'font-size': '16px' })

         }

         else{
            var texto = "Qual. de Mov Pobre:" + ' ' + String(soma)
            $("#scorestepdown").val(texto)
            $('#scorestepdown').css({ 'color': 'red', 'border-bottom': '5px solid red', 'font-size': '16px' })


         }
        
        

            

        




        
        

        console.log(dcMacho)
        console.log('pg:', pgMacho)
        
   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  