$(document).ready(function () {
    var resultadoEscrito = $('#resultadoImpulsao'), resultadoNumero = $("#distanciaAlcançada"), resultadoPotencia = $("#potenciaImpulsao")
    resultadoEscrito.addClass('resultGray')
    resultadoEscrito.attr('placeholder','...')
    resultadoNumero.attr('placeholder', 'Distância Alcançada')
    resultadoNumero.addClass('resultGray')
    resultadoPotencia.attr('placeholder', '...')
    resultadoPotencia.addClass('resultGray')

    

    $(".testeDeImpulsao").bind("change keyup", function () {
        

        $(document).ready(function (){
            resultadoEscrito.removeClass('resultGray')
            resultadoNumero.removeClass('resultGray')

            var alturaInicial = $("#alturaInicial").val(), alturaSalto = $("#alturaSalto").val()
            var alturaIndividuo = $("#altura").val(), sexo = $("#sexo").val(), peso =$("#peso").val(), formulaPotencia, d
            
            
            formulaDistancia = Number(alturaSalto) - Number(alturaInicial)
            d = Number(alturaIndividuo) - Number(formulaDistancia)
            formulaPotencia = 2.21 * (Number(peso)) * (Math.sqrt(d))
            if (alturaInicial ==""){
                resultadoEscrito.attr('placeholder',"Campo 'Altura Inicial' não preenchido")
                resultadoEscrito.val("")
                resultadoEscrito.removeClass('resultGray')
                resultadoEscrito.removeClass('resultMedio')
                resultadoEscrito.removeClass('resultBom')
                resultadoEscrito.removeClass('resultRuim')
                resultadoEscrito.addClass("faltaCampo")
            }
            else if (alturaSalto ==""){
                resultadoEscrito.attr('placeholder',"'Altura Alcançada' não preenchido")
                resultadoEscrito.val("")
                resultadoEscrito.removeClass('resultGray')
                resultadoEscrito.removeClass('resultMedio')
                resultadoEscrito.removeClass('resultBom')
                    resultadoEscrito.removeClass('resultRuim')
                resultadoEscrito.addClass("faltaCampo")
            }
            
            else{
                
                
                if (sexo == "MASCULINO"){
                        if (formulaDistancia>61){
                            resultadoEscrito.val('Excelente')
                            resultadoEscrito.addClass('resultBom')
                            resultadoEscrito.removeClass('faltaCampo')
                            resultadoEscrito.removeClass('resultMedio')
                            resultadoEscrito.removeClass('resultRuim')
                            resultadoNumero.val(formulaDistancia.toFixed(2))
                        }
                        else if(formulaDistancia>=49 && formulaDistancia<=61){
                            resultadoEscrito.val('Acima da Média')
                            resultadoEscrito.addClass('resultBom')
                            resultadoEscrito.removeClass('faltaCampo')
                            resultadoEscrito.removeClass('resultMedio')
                            resultadoEscrito.removeClass('resultRuim')
                            resultadoNumero.val(formulaDistancia.toFixed(2))
                        }
                        else if(formulaDistancia>=34 && formulaDistancia<49){
                            resultadoEscrito.val('Média')
                            resultadoEscrito.addClass('resultMedio')
                            resultadoEscrito.removeClass('resultBom')
                            resultadoEscrito.removeClass('faltaCampo')
                            resultadoEscrito.removeClass('resultRuim')
                            resultadoNumero.val(formulaDistancia.toFixed(2))
                        }

                        else if(formulaDistancia>=21 && formulaDistancia<34){
                            resultadoEscrito.val('Abaixo da Média')
                            resultadoEscrito.addClass('resultRuim')
                            resultadoEscrito.removeClass('faltaCampo')
                            resultadoEscrito.removeClass('resultBom')
                            resultadoEscrito.removeClass('resultMedio')
                            resultadoNumero.val(formulaDistancia.toFixed(2))
                        }

                        else if(formulaDistancia<21){
                            resultadoEscrito.val('Fraco')
                            resultadoEscrito.addClass('resultRuim')
                            resultadoEscrito.removeClass('faltaCampo')
                            resultadoEscrito.removeClass('resultBom')
                            resultadoEscrito.removeClass('resultMedio')
                            resultadoNumero.val(formulaDistancia.toFixed(2))
                        }
                }/*fim do if de sexo masculino */

                else{
                    if (formulaDistancia>33){
                        resultadoEscrito.val('Excelente')
                        resultadoEscrito.addClass('resultBom')
                        resultadoEscrito.removeClass('faltaCampo')
                        resultadoEscrito.removeClass('resultMedio')
                        resultadoEscrito.removeClass('resultRuim')
                        resultadoNumero.val(formulaDistancia.toFixed(2))
                    }
                    else if(formulaDistancia>=26 && formulaDistancia<=33){
                        resultadoEscrito.val('Acima da Média')
                        resultadoEscrito.addClass('resultBom')
                        resultadoEscrito.removeClass('faltaCampo')
                        resultadoEscrito.removeClass('resultMedio')
                        resultadoEscrito.removeClass('resultRuim')
                        resultadoNumero.val(formulaDistancia.toFixed(2))
                    }
                    else if(formulaDistancia>=16 && formulaDistancia<26){
                        resultadoEscrito.val('Média')
                        resultadoEscrito.addClass('resultMedio')
                        resultadoEscrito.removeClass('resultBom')
                        resultadoEscrito.removeClass('faltaCampo')
                        resultadoEscrito.removeClass('resultRuim')
                        resultadoNumero.val(formulaDistancia.toFixed(2))
                    }

                    else if(formulaDistancia>=06 && formulaDistancia<16){
                        resultadoEscrito.val('Abaixo da Média')
                        resultadoEscrito.addClass('resultRuim')
                        resultadoEscrito.removeClass('faltaCampo')
                        resultadoEscrito.removeClass('resultBom')
                        resultadoEscrito.removeClass('resultMedio')
                        resultadoNumero.val(formulaDistancia.toFixed(2))
                    }

                    else if(formulaDistancia<06){
                        resultadoEscrito.val('Fraco')
                        resultadoEscrito.addClass('resultRuim')
                        resultadoEscrito.removeClass('faltaCampo')
                        resultadoEscrito.removeClass('resultBom')
                        resultadoEscrito.removeClass('resultMedio')
                        resultadoNumero.val(formulaDistancia.toFixed(2))
                    }
                }

               
               
                
            }
            





        })

        $(document).ready(function(){
            var alturaInicial = $("#alturaInicial").val(), alturaSalto = $("#alturaSalto").val()

            var alturaIndividuo = $("#altura").val(), sexo = $("#sexo").val(), peso =$("#peso").val(), formulaPotencia, d
            formulaDistancia = Number(alturaSalto) - Number(alturaInicial)
            d = Number(alturaIndividuo) - Number(formulaDistancia)
            resultadoPotencia.removeClass('resultGray')
            formulaPotencia = 2.21 * (Number(peso)) * (Math.sqrt(d))


            if (peso == ""){
                resultadoPotencia.attr('placeholder',"Campo 'Peso' não preenchido")
                resultadoPotencia.val("")
                resultadoPotencia.removeClass('resultGray')
                resultadoPotencia.addClass("faltaCampo")
                }

            else{
                resultadoPotencia.val(formulaPotencia.toFixed(2))
                    resultadoPotencia.removeClass('resultGray')
                    resultadoPotencia.removeClass("faltaCampo")
            }


            
        })


    })



})