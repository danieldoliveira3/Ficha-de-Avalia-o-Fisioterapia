$(document).ready(function(){
    var resultadoNumero = $("#resultadoTesteCooper"), resultadoEscrito = $("#taxaTesteCooper")
    resultadoNumero.attr('placeholder','V02máx.')
    resultadoEscrito.attr('placeholder',"CAPACIDADE AERÓBICA")
    resultadoEscrito.addClass('resultGray')
    resultadoNumero.addClass('resultGray')
    
    
    
        $(".cooper").bind('change keyup mouseover',function (){
    
    
            $(document).ready(function(){
                resultadoEscrito.removeClass('resultGray')
                resultadoNumero.removeClass('resultGray')
                var idade = $("#idade").val()
                var sexo = $("#sexo").val()
                var distancia = $("#distanciaCooper").val()
                var formula = (((Number(distancia)-504))/45).toFixed(3)
                console.log(formula)
                resultadoEscrito.css({ 'color': 'black', 'opacity': '1','border-bottom': '1px solid #dadada', 'font-size': '18px' })
    
                resultadoNumero.removeClass('resultGray')
                /*aguardando os ifs*/
                if (idade == ""){/*if pra checar se o campo idade ta vazia*/
                    resultadoEscrito.attr('placeholder',"Digite a idade")
            resultadoEscrito.val("")
                    resultadoEscrito.addClass("faltaCampo")
    
                }
    
                else if (sexo == ""){/*if pra checar se o campo sexo ta vazia*/
                    resultadoEscrito.attr('placeholder',"Preencha o sexo")
                    resultadoEscrito.val("")

                    resultadoEscrito.addClass("faltaCampo")
    
                }

                else{
                    if (sexo == "MASCULINO"){
                        if (idade >= 13 && idade<=19){
                            if (distancia<2090){
                                resultadoEscrito.val("Muito Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultBom")
                                resultadoEscrito.removeClass("resultMedio")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                            else if (distancia>=2090 && distancia<=2200){
                                resultadoEscrito.val("Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                    
                            else if (distancia>2200 && distancia<=2510){
                                resultadoEscrito.val("Média")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultMedio')
                            }
                    
                            else if (distancia>2510 && distancia<=2770){
                                resultadoEscrito.val("Boa")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2770 && distancia<=3000){
                                resultadoEscrito.val("Excelente")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>3000){
                                resultadoEscrito.val("Superior")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim", "resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                    
                        }
                        /*fim do if 13 a 19*/
                    
                        
                        else if (idade > 19 && idade<=29){
                            if (distancia<1960){
                                resultadoEscrito.val("Muito Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultBom")
                                resultadoEscrito.removeClass("resultMedio")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                            else if (distancia>=1960 && distancia<=2110){
                                resultadoEscrito.val("Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                    
                            else if (distancia>2110 && distancia<=2400){
                                resultadoEscrito.val("Média")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultMedio')
                            }
                    
                            else if (distancia>2400 && distancia<=2640){
                                resultadoEscrito.val("Boa")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2640 && distancia<=2830){
                                resultadoEscrito.val("Excelente")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2830){
                                resultadoEscrito.val("Superior")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim", "resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                        }/*fim do if de 20 a 29*/
                        else if (idade > 30 && idade<=39){
                            if (distancia<1900){
                                resultadoEscrito.val("Muito Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultBom")
                                resultadoEscrito.removeClass("resultMedio")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                            else if (distancia>=1900 && distancia<=2090){
                                resultadoEscrito.val("Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                    
                            else if (distancia>2090 && distancia<=2400){
                                resultadoEscrito.val("Média")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultMedio')
                            }
                    
                            else if (distancia>2400 && distancia<=2510){
                                resultadoEscrito.val("Boa")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2510 && distancia<=2720){
                                resultadoEscrito.val("Excelente")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2720){
                                resultadoEscrito.val("Superior")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim", "resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                        }/*fim do if de 30 a 39*/
                
                    }/*fim do if MASCULINO*/

                    else{/*if FEMININO*/
                        if (idade >= 13 && idade<=19){
                            if (distancia<1610){
                                resultadoEscrito.val("Muito Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultBom")
                                resultadoEscrito.removeClass("resultMedio")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                            else if (distancia>=1610 && distancia<=1900){
                                resultadoEscrito.val("Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                    
                            else if (distancia>1900 && distancia<=2080){
                                resultadoEscrito.val("Média")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultMedio')
                            }
                    
                            else if (distancia>2080 && distancia<=2300){
                                resultadoEscrito.val("Boa")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2300 && distancia<=2430){
                                resultadoEscrito.val("Excelente")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2430){
                                resultadoEscrito.val("Superior")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim", "resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                    
                        }
                        /*fim do if 13 a 19*/
                    
                        
                        else if (idade > 19 && idade<=29){
                            if (distancia<1550){
                                resultadoEscrito.val("Muito Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultBom")
                                resultadoEscrito.removeClass("resultMedio")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                            else if (distancia>=1550 && distancia<=1790){
                                resultadoEscrito.val("Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                    
                            else if (distancia>1790 && distancia<=1970){
                                resultadoEscrito.val("Média")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultMedio')
                            }
                    
                            else if (distancia>1970 && distancia<=2160){
                                resultadoEscrito.val("Boa")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2160 && distancia<=2330){
                                resultadoEscrito.val("Excelente")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2330){
                                resultadoEscrito.val("Superior")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim", "resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                        }/*fim do if de 20 a 29*/
                        else if (idade > 30 && idade<=39){
                            if (distancia<1510){
                                resultadoEscrito.val("Muito Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultBom")
                                resultadoEscrito.removeClass("resultMedio")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                            else if (distancia>=1510 && distancia<=1690){
                                resultadoEscrito.val("Fraca")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultRuim')
                            }
                    
                            else if (distancia>1690 && distancia<=1960){
                                resultadoEscrito.val("Média")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultBom")
                    
                                resultadoEscrito.addClass('resultMedio')
                            }
                    
                            else if (distancia>1960 && distancia<=2080){
                                resultadoEscrito.val("Boa")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2080 && distancia<=2240){
                                resultadoEscrito.val("Excelente")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultMedio")
                                resultadoEscrito.removeClass("resultRuim")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                            else if (distancia>2240){
                                resultadoEscrito.val("Superior")
                                resultadoNumero.val(formula)
                                resultadoEscrito.removeClass("faltaCampo")
                                resultadoEscrito.removeClass("resultRuim", "resultMedio")
                                resultadoEscrito.addClass('resultBom')
                            }
                    
                        }/*fim do if de 30 a 39*/
                    }



                }
    
               
    
    
    
    
    
    
    
    
    
            })
            
    
    
    
    
        })
    
    
    
    })


/*ifs para ajeitar e utilizar dps
    
    */