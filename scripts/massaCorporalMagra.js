$(document).ready(function(){
    var resultadoNumero = $("#resultadoMassaCorporalMagra"), resultadoEscrito = $("#taxaMassaCorporalMagra")
    resultadoNumero.val('RESULTADO')
    resultadoEscrito.val("...")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })
    
    
    
        $(".massaCorporalMagra").change(function (){
    
    
            $(document).ready(function(){

                var massaGorda = $("#resultadoMassaCorporalGorda").val() , massaOssea = $("#resultadoMassaOssea")
                var massaResidual = $("#resultadoMassaResidual").val(), peso = $("#peso").val()
                
                var formula = (Number(peso) - (Number(massaGorda)))
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada', 'font-size': '18px' })
    
    
                /*aguardando os ifs*/
    
    
                resultadoEscrito.val("FUNCIONOU")
                resultadoNumero.val(formula.toFixed(2)*100, '%')
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })