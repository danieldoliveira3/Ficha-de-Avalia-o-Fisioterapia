$(document).ready(function(){
    var resultadoNumero = $("#resultadoMassaOssea"), resultadoEscrito = $("#resultadoMassaOsseaEscrito")
    resultadoNumero.val('RESULTADO')
    resultadoEscrito.val("...")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })
    
    
    
        $(".massaOssea").change(function (){
    
    
            $(document).ready(function(){
                var be = Number($("#be").val()), bu = Number($("#bu").val())
                var bf = Number($("#bf").val()), bm = Number($("#bm").val())
                var altura = Number($("#altura").val())/100
                var formula = Math.pow((((be+bu+bf+bm))/4),2) * altura * 0.00092 
                console.log(formula)
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada', 'font-size': '18px' })
    
    
                /*aguardando os ifs*/
    
    
                resultadoEscrito.val("FUNCIONOU")
                resultadoNumero.val(formula.toFixed(2))
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })