
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
    var resultadoEscrito = $('#escoreFinalY')
    resultadoEscrito.val("...")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })

    $(".ytest").change("change check", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
        resultadoEscrito.css({'opacity': '1' })

  
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
  
  
  
  