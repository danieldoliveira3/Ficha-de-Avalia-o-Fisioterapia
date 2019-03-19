
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
  
    $(".ytest").change("change check", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
  
  
        var pa = Number($("#paytest").val()), pm = Number($("#pmytest").val()), pl = Number($("#plytest").val())
        var cm = Number($("#cmytest").val())
        

        soma = ((pa+pm+pl)/(cm*3))*100
        texto = String(soma)
        console.log(texto)
        $("#escoreFinalY").val(texto)      
   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  