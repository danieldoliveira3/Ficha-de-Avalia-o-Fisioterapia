$(document).ready(function(){
    var resultadoEscrito = $("#taxaMassaCorporalGorda")
    resultadoEscrito.addClass('resultGray')
    
    
    
        $(".massaCorporalGorda").bind('change keyup mouseover',function (){
    
    
            $(document).ready(function(){
                resultadoEscrito.removeClass('resultGray')

                var peso = Number($("#peso").val())
                var percentualGordura = Number($("#resultadodobraNumero").val())
                var formula = (peso * percentualGordura)/100 
                console.log(formula)
    
                if (percentualGordura == "" && peso == ""){
                    resultadoEscrito.attr('placeholder', "Campos 'Peso' e '% de Gordura' vazios")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }
                else if (percentualGordura == ""){
                    resultadoEscrito.attr('placeholder',"Campo '% de Gordura' não calculado")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }

                else if (peso ==""){
                    resultadoEscrito.attr('placeholder',"Campo 'Peso' não preenchido")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }
                else{
                    resultadoEscrito.val(formula)
                    resultadoEscrito.removeClass('resultGray')
                    resultadoEscrito.removeClass("faltaCampo")
                }

                
    
                /*aguardando os ifs*/
    
    
                
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })