
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
    var resultadoEscrito = $('#rcq'), resultadoNumero = $("#rcqNumero")
    resultadoEscrito.attr('placeholder',"...")
    resultadoNumero.attr('placeholder',"Resultado")
    resultadoEscrito.addClass('resultGray')
    resultadoNumero.addClass('resultGray')


    $(".rcq").bind('keyup change mouseover',  function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
  

        var sexo = $("#sexo").val()
        var idade = $("#idade").val()
        var cintura = $("#cintura").val()
        var quadril = $("#quadril").val()
        var rcq = cintura/quadril
  
        console.log('sexo', sexo, 'idade', idade, 'cintura', cintura, 'quadril', quadril, 'rcq', rcq)
        
        
        if (sexo == ""){
          resultadoEscrito.attr('placeholder',"Campo 'Sexo' não preenchido")
          resultadoEscrito.val("")
          resultadoEscrito.removeClass("resultGray")
          resultadoEscrito.addClass("faltaCampo")
        }
        else if(idade ==""){
          resultadoEscrito.attr('placeholder',"Campo 'Idade' não preenchido")
          resultadoEscrito.val("")
          resultadoEscrito.removeClass("resultGray")
          resultadoEscrito.addClass("faltaCampo")
        }

        
        else{
          resultadoEscrito.removeClass("resultGray")
          resultadoEscrito.removeClass("faltaCampo")
            if (sexo == "MASCULINO"){
            /*20 - 29*/
            if (idade >=20 && idade <=29 && rcq<0.83){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); 
              resultadoNumero.val(rcq.toFixed(2))
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })

            
            }
        
            else if (idade >=20 && idade <=29 && rcq>=0.83 && rcq<=0.88){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); 
              resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=20 && idade <=29 && rcq>0.88 && rcq<=0.94){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })
              $("#rcq").val(texto); 
              resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=20 && idade <=29 && rcq>0.94){
              var texto = 'MUITO ALTO'
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })
          
              $("#rcq").val(texto); 
              resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*30 - 39*/ 
            
            else if (idade >=30 && idade <=39 && rcq<0.84){
              var texto = texto + ' ' + String(rcq)
              $("#rcq").val(texto); 
              resultadoNumero.val(rcq.toFixed(2))
            
            }
        
            else if (idade >=30 && idade <=39 && rcq>=0.84 && rcq<=0.91){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); 
              resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=30 && idade <=39 && rcq>0.91 && rcq<=0.96){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=30 && idade <=39 && rcq> 0.96){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*40 - 49*/  
            else if (idade >=40 && idade <=49 && rcq<0.88){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
              
            
            }
        
            else if (idade >=40 && idade <=49 && rcq>=0.88 && rcq<=0.95){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=40 && idade <=49 && rcq>0.95 && rcq<=1){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=40 && idade <=49 && rcq>1){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*50 - 59*/  
            else if (idade >=50 && idade <=59 && rcq<0.90){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
              
            
            }
        
            else if (idade >=50 && idade <=59 && rcq>=0.90 && rcq<=0.96){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=50 && idade <=59 && rcq>0.96 && rcq<=1.02){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=50 && idade <=59 && rcq>1.02){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*60 - 69*/  
            else if (idade >=40 && idade <=49 && rcq<0.91){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
            
            }
        
            else if (idade >=60 && idade <=69 && rcq>=0.91 && rcq<=0.98){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=60 && idade <=69 && rcq>0.98 && rcq<=1.03){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=60 && idade <=69 && rcq>1.03){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
            
        
          }
        
          else if (sexo == "FEMININO"){
            /*20 - 29*/
            if (idade >=20 && idade <=29 && rcq<0.71){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
            
            
            }
        
            else if (idade >=20 && idade <=29 && rcq>=0.71 && rcq<=0.77){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=20 && idade <=29 && rcq>0.77 && rcq<=0.82){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=20 && idade <=29 && rcq>0.82){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*30 - 39*/ 
            
            else if (idade >=30 && idade <=39 && rcq<0.72){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
              
            
            }
        
            else if (idade >=30 && idade <=39 && rcq>=0.72 && rcq<=0.78){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=30 && idade <=39 && rcq>0.78 && rcq<=0.84){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=30 && idade <=39 && rcq> 0.84){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*40 - 49*/  
            else if (idade >=40 && idade <=49 && rcq<0.73){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
              
            
            }
        
            else if (idade >=40 && idade <=49 && rcq>=0.73 && rcq<=0.79){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=40 && idade <=49 && rcq>0.79 && rcq<=0.87){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=40 && idade <=49 && rcq>0.87){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*50 - 59*/  
            else if (idade >=50 && idade <=59 && rcq<0.74){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
              
            
            }
        
            else if (idade >=50 && idade <=59 && rcq>=0.74 && rcq<=0.81){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=50 && idade <=59 && rcq>0.81 && rcq<=0.88){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=50 && idade <=59 && rcq>0.88){
              var texto = 'MUITO ALTO'        
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
              }
        
            /*60 - 69*/  
            else if (idade >=40 && idade <=49 && rcq<0.76){
              var texto = 'BAIXO'            
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))             
              $('#rcq').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })
              
            
            }
        
            else if (idade >=60 && idade <=69 && rcq>=0.76 && rcq<=0.83){
              var texto = 'MODERADO'            
              $('#rcq').css({ 'color': '#5db1ff', 'border-bottom': '5px solid #5db1ff', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
            else if (idade >=60 && idade <=69 && rcq>0.83 && rcq<=0.9){
              var texto = 'ALTO'            
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })             
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              
            }
        
            else if (idade >=60 && idade <=69 && rcq>0.9){
              var texto = 'MUITO ALTO'
              $("#rcq").val(texto); resultadoNumero.val(rcq.toFixed(2))
              $('#rcq').css({ 'color': '#ff4f4f', 'border-bottom': '5px solid #ff4f4f', 'font-size': '18px' })

              
              }
        }}
   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  