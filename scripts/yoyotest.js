$(document).ready(function(){
var resultadoNumero = $("#resultadoYoYo"), resultadoEscrito = $("#taxaYoYo")

resultadoNumero.attr('placeholder','VO2máx')
resultadoEscrito.attr('placeholder',"...")
resultadoEscrito.addClass('resultGray')
resultadoNumero.addClass('resultGray')




    $(".yoyo").bind('keyup change',function (){


        $(document).ready(function(){
            resultadoEscrito.removeClass('resultGray')
            resultadoNumero.removeClass('resultGray')
            var idade = $("#idade").val()
            var sexo = $("#sexo").val()
            var distancia = $("#distanciaYoYo").val()
            var formula = ((Number(distancia) * 0.0084) + 36.4).toFixed(3)
            console.log(formula)
            resultadoEscrito.css({'opacity': '1' })
            resultadoNumero.removeClass('resultGray')
            
            if (idade == ""){/*if pra checar se o campo idade ta vazia*/
                resultadoEscrito.attr('placeholder',"Digite a idade")
                resultadoEscrito.addClass("faltaCampo")
                resultadoEscrito.removeClass('resultGray')
                resultadoEscrito.removeClass('resultMedio')
                resultadoEscrito.removeClass('resultBom')

            }

            else if (sexo == ""){/*if pra checar se o campo sexo ta vazia*/
                resultadoEscrito.attr('placeholder',"Preencha o sexo")
                resultadoEscrito.removeClass('resultGray')
                resultadoEscrito.removeClass('resultMedio')
                resultadoEscrito.removeClass('resultBom')
                resultadoEscrito.addClass("faltaCampo")

            }

            else{

                if (sexo == "MASCULINO"){

                    if (idade >= 18 && idade<=25){
                        if (formula>60){
                            resultadoEscrito.val("Excelente")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>51 && formula<=60){
                            resultadoEscrito.val("Boa")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>46 && formula<=51){
                            resultadoEscrito.val("Acima da Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>41 && formula<=46){
                            resultadoEscrito.val("Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultBom")

                            resultadoEscrito.addClass('resultMedio')
                        }
                        else if (formula>36 && formula<=41){
                            resultadoEscrito.val("Abaixo da Média")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula>=30 && formula<=36){
                            resultadoEscrito.val("Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula<30){
                            resultadoEscrito.val("Muito Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }
                    


                    }
                    /*fim do if 18 a 25*/

                    else if (idade >= 26 && idade<=35){
                        if (formula>56){
                            resultadoEscrito.val("Excelente")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=49 && formula<=56){
                            resultadoEscrito.val("Boa")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=43 && formula<49){
                            resultadoEscrito.val("Acima da Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=40 && formula<43){
                            resultadoEscrito.val("Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultBom")

                            resultadoEscrito.addClass('resultMedio')
                        }
                        else if (formula>35 && formula<40){
                            resultadoEscrito.val("Abaixo da Média")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula>=30 && formula<=35){
                            resultadoEscrito.val("Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula<30){
                            resultadoEscrito.val("Muito Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }
                    


                    }
                    /*fim do if 26 a 35*/
                    else if (idade >= 36 && idade<=45){
                        if (formula>51){
                            resultadoEscrito.val("Excelente")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=43 && formula<=51){
                            resultadoEscrito.val("Boa")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=39 && formula<43){
                            resultadoEscrito.val("Acima da Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=35 && formula<39){
                            resultadoEscrito.val("Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultBom")

                            resultadoEscrito.addClass('resultMedio')
                        }
                        else if (formula>=31 && formula<35){
                            resultadoEscrito.val("Abaixo da Média")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula>=26 && formula<31){
                            resultadoEscrito.val("Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula<26){
                            resultadoEscrito.val("Muito Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }
                    


                    }
                    /*fim do if 36 a 45*/
                }/*fim do if do sexo*/

                else{/*sexo feminino************************/
                    
                    if (idade >= 18 && idade<=25){
                        if (formula>56){
                            resultadoEscrito.val("Excelente")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>46 && formula<=56){
                            resultadoEscrito.val("Boa")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>41 && formula<=46){
                            resultadoEscrito.val("Acima da Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>37 && formula<=41){
                            resultadoEscrito.val("Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultBom")

                            resultadoEscrito.addClass('resultMedio')
                        }
                        else if (formula>32 && formula<=37){
                            resultadoEscrito.val("Abaixo da Média")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula>=28 && formula<=32){
                            resultadoEscrito.val("Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula<28){
                            resultadoEscrito.val("Muito Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }
                    


                    }
                    /*fim do if 18 a 25*/

                    else if (idade >= 26 && idade<=35){
                        if (formula>52){
                            resultadoEscrito.val("Excelente")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=45 && formula<=52){
                            resultadoEscrito.val("Boa")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=39 && formula<45){
                            resultadoEscrito.val("Acima da Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=35 && formula<39){
                            resultadoEscrito.val("Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultBom")

                            resultadoEscrito.addClass('resultMedio')
                        }
                        else if (formula>=31 && formula<35){
                            resultadoEscrito.val("Abaixo da Média")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula>=26 && formula<31){
                            resultadoEscrito.val("Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula<26){
                            resultadoEscrito.val("Muito Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }
                    


                    }
                    /*fim do if 26 a 35*/
                    else if (idade >= 36 && idade<=45){
                        if (formula>45){
                            resultadoEscrito.val("Excelente")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=38 && formula<=45){
                            resultadoEscrito.val("Boa")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=34 && formula<38){
                            resultadoEscrito.val("Acima da Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultMedio")
                            resultadoEscrito.addClass('resultBom')
                        }

                        else if (formula>=31 && formula<34){
                            resultadoEscrito.val("Média")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultRuim")
                            resultadoEscrito.removeClass("resultBom")

                            resultadoEscrito.addClass('resultMedio')
                        }
                        else if (formula>=27 && formula<31){
                            resultadoEscrito.val("Abaixo da Média")
                            resultadoNumero.val(formula)
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula>=22 && formula<27){
                            resultadoEscrito.val("Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }

                        else if (formula<22){
                            resultadoEscrito.val("Muito Ruim")
                            resultadoNumero.val(formula)
                            resultadoEscrito.removeClass("faltaCampo")
                            resultadoEscrito.removeClass("resultBom")
                            resultadoEscrito.removeClass("resultMedio")

                            resultadoEscrito.addClass('resultRuim')
                        }
                    


                    }
                    /*fim do if 36 a 45*/
                }
                
            }
            /*aguardando os ifs*/


            
            









        })
        




    })



})