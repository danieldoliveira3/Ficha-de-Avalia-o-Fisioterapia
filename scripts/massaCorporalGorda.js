$(document).ready(function(){
    var resultadoNumero = $("#resultadoMassaCorporalGorda"), resultadoEscrito = $("#taxaMassaCorporalGorda")
    resultadoNumero.val('RESULTADO')
    resultadoEscrito.val("...")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })
    
    
    
        $(".massaCorporalGorda").change(function (){
    
    
            $(document).ready(function(){
                var peso = Number($("#peso").val())
                var percentualGordura = Number($("#resultadodobraNumero").val())
                var formula = (peso * percentualGordura)/100 
                console.log(formula)
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada', 'font-size': '18px' })
    
    
                /*aguardando os ifs*/
    
    
                resultadoEscrito.val("FUNCIONOU")
                resultadoNumero.val(formula.toFixed(2))
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })