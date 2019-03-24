$(document).ready(function(){
    var resultadoEscrito = $("#taxaMassaOssea")
    
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray' })
    
    
    
        $(".massaOssea").bind('keyup change mouseover', function (){
    
    
            $(document).ready(function(){
                var be = Number($("#be").val()), bu = Number($("#bu").val())
                var bf = Number($("#bf").val()), bm = Number($("#bm").val())
                var altura = Number($("#altura").val())/100
                var formula = Math.pow((((be+bu+bf+bm))/4),2) * altura * 0.00092 
                console.log(formula)
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada' })
    
    
                /*aguardando os ifs*/
    
                if (altura == ""){
                    resultadoEscrito.attr('placeholder',"Campo 'Altura' não preenchido")
                        resultadoEscrito.val("")
                        resultadoEscrito.addClass("faltaCampo")
                    
                }

                else{
                    resultadoEscrito.removeClass('resultGray')
                    resultadoEscrito.removeClass("faltaCampo")
                    resultadoEscrito.val(formula.toFixed(2))
                }
                
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })