$(document).ready(function(){
    var resultadoEscrito = $("#taxaMassaResidual")
    resultadoEscrito.attr('placeholder', "...")
    resultadoEscrito.addClass('resultGray')
    
    
    
        $(".massaResidual").bind('keyup change mouseover',function (){
    
    
            $(document).ready(function(){
                var sexo = $("#sexo").val()
                var peso = Number($("#peso").val())
                var formulaMulher = peso * 0.209
                var formulaHomem = peso * 0.241 
    
    
                /*aguardando os ifs*/
    
                if (sexo == "FEMININO"){
                    if (peso ==""){

                        resultadoEscrito.attr('placeholder',"Campo 'Peso' não preenchido")
                        resultadoEscrito.val("")
                        resultadoEscrito.removeClass('resultGray')
                resultadoEscrito.removeClass('resultMedio')
                resultadoEscrito.removeClass('resultBom')
                        resultadoEscrito.removeClass('resultGray')
                        resultadoEscrito.addClass("faltaCampo")
                    }
                    else{                        
                        resultadoEscrito.removeClass('resultGray')
                        resultadoEscrito.removeClass("faltaCampo")
                        resultadoEscrito.val(formulaMulher.toFixed(2))}
                   
                }
                else{

                    if (peso == ""){
                        resultadoEscrito.attr('placeholder',"Campo 'Peso' não preenchido")
                        resultadoEscrito.val("")
                        resultadoEscrito.removeClass('resultGray')
                resultadoEscrito.removeClass('resultMedio')
                resultadoEscrito.removeClass('resultBom')
                        resultadoEscrito.removeClass('resultGray')
                        resultadoEscrito.addClass("faltaCampo")
                    }
                    else{
                        resultadoEscrito.removeClass('resultGray')
                        resultadoEscrito.removeClass("faltaCampo")
                        resultadoEscrito.val(formulaHomem.toFixed(2))
                    }
                    
                }
                
                
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })