$(document).ready(function(){
var resultadoNumero = $("#resultadoYoYo"), resultadoEscrito = $("#taxaYoYo")

resultadoNumero.val('RESULTADO')
resultadoEscrito.val("...")
resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })



    $(".yoyo").change(function (){


        $(document).ready(function(){
            var distancia = $("#distanciaYoYo").val()
            var formula = Number(distancia) * 0.0084 + 36.4
            console.log(formula)
            resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada', 'font-size': '18px' })


            /*aguardando os ifs*/


            resultadoEscrito.val('FUNCIONOU')
            resultadoNumero.val(formula.toFixed(2))
            









        })
        




    })



})