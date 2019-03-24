$(document).ready(function(){
    var resultadoEscrito = $("#taxaMassaMuscular")
    resultadoEscrito.addClass('resultGray')
    
    
    
        $(".massaMuscular").bind('keyup change mouseover', function (){
    
    
            $(document).ready(function(){
                resultadoEscrito.removeClass('resultGray')

                var massaGorda = $("#taxaMassaCorporalGorda").val() , massaOssea = $("#taxaMassaOssea").val()
                var massaResidual = $("#taxaMassaResidual").val(), peso = $("#peso").val()
                console.log(massaGorda, massaOssea, massaResidual, peso)
                var formula = Number(peso) - (Number(massaGorda) + Number(massaOssea) + Number(massaResidual))
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada' })
    
    
                /*aguardando os ifs*/
                if (massaGorda == ""){
                    resultadoEscrito.attr('placeholder',"Campo 'Massa Corporal Gorda' não calculado")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }

                else if (massaOssea == ""){
                    resultadoEscrito.attr('placeholder',"Campo 'Massa Óssea' não calculado")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }

                else if (massaResidual == ""){
                    resultadoEscrito.attr('placeholder',"Campo 'Massa Residual' não calculado")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }
                else if (peso == ""){
                    resultadoEscrito.attr('placeholder',"Campo 'Peso' não preenchido")
                    resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
                }
                 
                else{
                    resultadoEscrito.val(formula)
                    resultadoEscrito.removeClass("faltaCampo")
                }
    
               
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })