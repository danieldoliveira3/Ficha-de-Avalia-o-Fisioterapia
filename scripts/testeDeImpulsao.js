$(document).ready(function () {
    var resultadoEscrito = $('#taxaImpulsaoVertical'), resultadoNumero = $("#resultadoImpulsaoVertical")
    resultadoNumero.val("RESULTADO")
    resultadoEscrito.val("...")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })

    

    $(".testeDeImpulsao").change("change check", function () {

        $(document).ready(function (){
            var altura = $("#altura").val(), distanciaPulo = Number($("#distanciaPulo").val())
        
            var peso = $("#peso").val(), d =  Number(altura) - (distanciaPulo/100)
           console.log('altura', altura, 'distancia pulo', distanciaPulo)
            var raizD = Math.sqrt(d)
            
            formula = 2.21 * Number(peso) * (raizD)
            
            resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '5px solid transparent', 'font-size': '18px' })

            if (peso == ""){
                console.log('peso vazio')
                resultadoEscrito.val("Preencha o peso")


                
            }



            resultadoNumero.val(String(formula))

            
            





        })


    })



})