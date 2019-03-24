$(document).ready(function(){
    var resultadoEscrito = $("#taxaMassaCorporalMagra")
    resultadoEscrito.addClass('resultGray')

    
    
        $(".massaCorporalMagra").bind('change keyup mouseover',function (){
    
    
            $(document).ready(function(){
                resultadoEscrito.removeClass('resultGray')

                var massaGorda = $("#taxaMassaCorporalGorda").val() , massaOssea = $("#resultadoMassaOssea")
                var massaResidual = $("#resultadoMassaResidual").val(), peso = $("#peso").val()
                
                var formula = (Number(peso) - (Number(massaGorda)))

                if (massaGorda == "" && peso ==""){
                    resultadoEscrito.attr('placeholder',"Campos 'Peso' e 'Massa Corporal Gorda' vazios")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }
                else if (peso == ""){/*if pra checar se o campo peso ta vazio*/
                    resultadoEscrito.attr('placeholder',"Campo 'Peso' não preenchido")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
    
                }
                else if (massaGorda == ""){
                    resultadoEscrito.attr('placeholder',"Campo 'Massa Gorda' não preenchido")
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