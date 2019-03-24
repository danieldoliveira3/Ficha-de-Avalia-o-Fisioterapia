
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
    var resultadoEscritoDireita = $("#escoreFinalYDireita"), resultadoNumeroDireita = $("#resultadoYDireita")
    resultadoEscritoDireita.addClass('resultGray'),resultadoEscritoDireita.addClass('aumentarLetraInput')
    resultadoNumeroDireita.addClass('resultGray'),resultadoNumeroDireita.addClass('aumentarLetraInput')
    var resultadoEscritoEsquerda = $("#escoreFinalYEsquerda"), resultadoNumeroEsquerda =$("#resultadoYEsquerda")
    resultadoEscritoEsquerda.addClass('resultGray'),resultadoEscritoEsquerda.addClass('aumentarLetraInput')
    resultadoNumeroEsquerda.addClass('resultGray'),resultadoNumeroEsquerda.addClass('aumentarLetraInput')


    $(".ytest").bind("change keyup", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
        resultadoEscritoDireita.removeClass('resultGray')
        resultadoNumeroDireita.removeClass('resultGray')
        resultadoEscritoEsquerda.removeClass('resultGray')
        resultadoNumeroEsquerda.removeClass('resultGray')
        
  
        var paRight = Number($("#paytestright").val()), pmRight = Number($("#pmytestright").val()), plRight = Number($("#plytestright").val())
        var cmRight = Number($("#cmytestright").val()), somaDireita, somaEsquerda
        somaDireita = ((paRight+pmRight+plRight)/(cmRight*3))*100
        texto = String(somaDireita.toFixed(3))
        console.log(texto)
        resultadoNumeroDireita.val(texto) 
        if (somaDireita>90){
          resultadoEscritoDireita.val('Bom')
          resultadoEscritoDireita.removeClass('resultGray')
          resultadoEscritoDireita.addClass('resultBom')


        }     
        else{
          resultadoEscritoDireita.val('')
          resultadoEscritoDireita.removeClass('resultBom')
          resultadoEscritoDireita.addClass('resultGray')

        }

        var paLeft = Number($("#paytestleft").val()), pmLeft = Number($("#pmytestleft").val()), plLeft = Number($("#plytesteleft").val())
        var cmLeft = Number($("#cmytestleft").val())

        somaEsquerda = ((paLeft+pmLeft+plLeft)/(cmLeft*3))*100
        texto = String(somaEsquerda.toFixed(3))
        console.log(texto)
        resultadoNumeroEsquerda.val(texto) 
        if (somaEsquerda>90){
          resultadoEscritoEsquerda.val('Bom')
          resultadoEscritoEsquerda.removeClass('resultGray')
          resultadoEscritoEsquerda.addClass('resultBom')

        }     
        else{
          resultadoEscritoEsquerda.val('')
          resultadoEscritoEsquerda.removeClass('resultBom')
          resultadoEscritoEsquerda.addClass('resultGray')
        }
   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  