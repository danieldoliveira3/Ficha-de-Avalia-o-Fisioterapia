$(document).ready(function(){
    var resultadoNumero = $("#resultadoMassaResidual"), resultadoEscrito = $("#taxaMassaResidual")
    resultadoNumero.val('RESULTADO')
    resultadoEscrito.val("...")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })
    
    
    
        $(".massaResidual").change(function (){
    
    
            $(document).ready(function(){
                var sexo = $("#sexo").val()
                var peso = Number($("#peso").val())
                var formulaMulher = peso * 0.209
                var formulaHomem = peso * 0.241 
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada', 'font-size': '18px' })
    
    
                /*aguardando os ifs*/
    
                if (sexo == "FEMININO"){
                    resultadoEscrito.val("MULHER")
                    resultadoNumero.val(formulaMulher.toFixed(2))
                }
                else{
                    resultadoEscrito.val("homem")
                    resultadoNumero.val(formulaHomem.toFixed(2))
                }
                
                
                
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })