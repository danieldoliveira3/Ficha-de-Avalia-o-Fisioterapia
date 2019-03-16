
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
  
    $(".rcq").change("change check", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
  
  
        var sexo = $("#sexo").val()
        var idade = $("#idade").val()
        var cintura = $("#cintura").val()
        var quadril = $("#quadril").val()
        var rcq = cintura/quadril
  
        console.log('sexo', sexo, 'idade', idade, 'cintura', cintura, 'quadril', quadril, 'rcq', rcq)
        if (sexo == "MASCULINO"){
          /*20 - 29*/
          if (idade >=20 && idade <=29 && rcq<0.83){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=20 && idade <=29 && rcq>=0.83 && rcq<=0.88){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=20 && idade <=29 && rcq>0.88 && rcq<=0.94){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=20 && idade <=29 && rcq>0.94){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*30 - 39*/ 
          
          else if (idade >=30 && idade <=39 && rcq<0.84){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=30 && idade <=39 && rcq>=0.84 && rcq<=0.91){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=30 && idade <=39 && rcq>0.91 && rcq<=0.96){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=30 && idade <=39 && rcq> 0.96){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*40 - 49*/  
          else if (idade >=40 && idade <=49 && rcq<0.88){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=40 && idade <=49 && rcq>=0.88 && rcq<=0.95){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=40 && idade <=49 && rcq>0.95 && rcq<=1){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=40 && idade <=49 && rcq>1){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*50 - 59*/  
          else if (idade >=50 && idade <=59 && rcq<0.90){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=50 && idade <=59 && rcq>=0.90 && rcq<=0.96){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=50 && idade <=59 && rcq>0.96 && rcq<=1.02){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=50 && idade <=59 && rcq>1.02){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*60 - 69*/  
          else if (idade >=40 && idade <=49 && rcq<0.91){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=60 && idade <=69 && rcq>=0.91 && rcq<=0.98){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=60 && idade <=69 && rcq>0.98 && rcq<=1.03){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=60 && idade <=69 && rcq>1.03){
            $("#rcq").val('MUITO ALTO')
            
            }
          
      
        }
      
        else if (sexo == "FEMININO"){
          /*20 - 29*/
          if (idade >=20 && idade <=29 && rcq<0.71){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=20 && idade <=29 && rcq>=0.71 && rcq<=0.77){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=20 && idade <=29 && rcq>0.77 && rcq<=0.82){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=20 && idade <=29 && rcq>0.82){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*30 - 39*/ 
          
          else if (idade >=30 && idade <=39 && rcq<0.72){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=30 && idade <=39 && rcq>=0.72 && rcq<=0.78){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=30 && idade <=39 && rcq>0.78 && rcq<=0.84){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=30 && idade <=39 && rcq> 0.84){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*40 - 49*/  
          else if (idade >=40 && idade <=49 && rcq<0.73){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=40 && idade <=49 && rcq>=0.73 && rcq<=0.79){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=40 && idade <=49 && rcq>0.79 && rcq<=0.87){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=40 && idade <=49 && rcq>0.87){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*50 - 59*/  
          else if (idade >=50 && idade <=59 && rcq<0.74){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=50 && idade <=59 && rcq>=0.74 && rcq<=0.81){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=50 && idade <=59 && rcq>0.81 && rcq<=0.88){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=50 && idade <=59 && rcq>0.88){
            $("#rcq").val('MUITO ALTO')
            
            }
      
          /*60 - 69*/  
          else if (idade >=40 && idade <=49 && rcq<0.76){
            $("#rcq").val('BAIXO')
           
          }
      
          else if (idade >=60 && idade <=69 && rcq>=0.76 && rcq<=0.83){
            $("#rcq").val('MODERADO')
            
          }
          else if (idade >=60 && idade <=69 && rcq>0.83 && rcq<=0.9){
            $("#rcq").val('ALTO')
            
          }
      
          else if (idade >=60 && idade <=69 && rcq>0.9){
            $("#rcq").val('MUITO ALTO')
            
            }
        }
   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  