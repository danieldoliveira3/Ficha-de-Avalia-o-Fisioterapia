$(document).ready(function(){
    var resultadoNumero = $("#resultadoTesteCooper"), resultadoEscrito = $("#taxaTesteCooper")
    resultadoNumero.val('RESULTADO')
    resultadoEscrito.val("...")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })
    
    
    
        $(".cooper").change(function (){
    
    
            $(document).ready(function(){
                var distancia = $("#distanciaCooper").val()
                var formula = (Number(distancia)-504)/45
                console.log(formula)
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada', 'font-size': '18px' })
    
    
                /*aguardando os ifs*/
    
    
                resultadoEscrito.val("FUNCIONOU")
                resultadoNumero.val(formula.toFixed(2))
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })