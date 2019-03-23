
  
  /*pra manter funcionando quando o usuario interagir*/
  $(document).ready(function () {
  
    var resultadoEscrito = $('#resultadodobra'), resultadoNumero = $("#resultadodobraNumero")
    resultadoEscrito.val("...")
    resultadoNumero.val("Resultado")
    resultadoEscrito.css({ 'color': 'gray', 'opacity': '0.5','border-bottom': '5px solid gray', 'font-size': '18px' })





    $(".gordura").change("change check", function () {//fica observando pra ver se ocorre o evento
  
  
      $(document).ready(function () {
        resultadoEscrito.css({'opacity': '1' })

  
        var sexo = $("#sexo").val(), idade = $("#idade").val()
        var tri = $("#tricipital").val(), sup = $("#supra").val(), sub = $("#subescapular").val()
        var am = $("#axilar").val(), pei = $("#peitoral").val(), abd = $("#abdomen").val(), coxa = $("#coxadobra").val()
       

        var operacao1 = Number(tri)+Number(sup)+Number(am)+Number(pei)+Number(sub)+Number(abd)+Number(coxa)
        
        var operacao2macho = (Number(tri)+Number(sup)+Number(am)+Number(pei)+Number(sub)+Number(abd))*(Number(tri)+Number(sup)+Number(am)+Number(pei)+Number(sub)+Number(abd))
        var operacao2femea = (Number(tri)+Number(sup)+Number(am)+Number(pei)+Number(sub)+Number(abd)+Number(coxa))*(Number(tri)+Number(sup)+Number(am)+Number(pei)+Number(sub)+Number(abd)+Number(coxa))
        var dcMacho = 1.112 - ((0.00043499*(operacao1)) + 0.00000055*(operacao2macho) - ((0.0002882*idade)))
        var dcFemea = 1.097 - ((0.00046971*(operacao1)) + 0.00000056*(operacao2femea) - ((0.00012828*idade)))
        var pgMacho = ((4.95/dcMacho) - 4.50)*100
        var pgFemea = ((4.95/dcFemea) - 4.50)*100


         
        if (sexo == "MASCULINO"){
            console.log('entrou no if masculino')

            //18-25
            if (idade >= 18 && idade <=25){
                console.log('entrou no if idade 18')
                if (pgMacho >= 4 && pgMacho <=6){
                    console.log('entrou no if excelente')
                    $("#resultadodobra").val('EXCELENTE')
                    resultadoNumero.val(pgMacho.toFixed(2))
                    $('#resultadodobra').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })

                }
                else if(pgMacho > 6 && pgMacho <=10){
                    $("#resultadodobra").val("BOM")
                    resultadoNumero.val(pgMacho.toFixed(2))
                    $('#resultadodobra').css({ 'color': '#3CB371', 'border-bottom': '5px solid #3CB371', 'font-size': '18px' })

                }
                else if(pgMacho > 10 && pgMacho <=13){
                    resultadoNumero.val(pgMacho.toFixed(2))
                    $("#resultadodobra").val("ACIMA DA MÉDIA")
                    $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

                }
                else if(pgMacho > 13 && pgMacho <=16){
                    resultadoNumero.val(pgMacho.toFixed(2))
                    $("#resultadodobra").val("MÉDIA")
                    $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

                }
                else if(pgMacho > 16 && pgMacho <=20){
                    resultadoNumero.val(pgMacho.toFixed(2))
                    $("#resultadodobra").val("ABAIXO DA MÉDIA")
                    $('#resultadodobra').css({ 'color': '#FFD700', 'border-bottom': '5px solid #FFD700', 'font-size': '18px' })

                }
                else if(pgMacho > 20 && pgMacho <=24){
                    resultadoNumero.val(pgMacho.toFixed(2))
                    $("#resultadodobra").val("RUIM")
                    $('#resultadodobra').css({ 'color': '#B22222', 'border-bottom': '5px solid #B22222', 'font-size': '18px' })

                }
                else if(pgMacho > 24 && pgMacho <=36){
                    resultadoNumero.val(pgMacho.toFixed(2))
                    $("#resultadodobra").val("MUITO RUIM")
                    $('#resultadodobra').css({ 'color': '#8B0000', 'border-bottom': '5px solid #8B0000', 'font-size': '18px' })

                }
                


            }
            
            // 26-35
            else if (idade >= 26 && idade <=35){
                console.log('entrou no if idade 35')
                
                if (pgMacho >= 8 && pgMacho <=11){
                    resultadoNumero.val(pgMacho.toFixed(2))
                    console.log('entrou no if excelente')
                    $("#resultadodobra").val('EXCELENTE')
                    $('#resultadodobra').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })

                }
                else if(pgMacho > 11 && pgMacho <=15){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("BOM")
                    $('#resultadodobra').css({ 'color': '#3CB371', 'border-bottom': '5px solid #3CB371', 'font-size': '18px' })

                }
                else if(pgMacho > 15 && pgMacho <=18){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("ACIMA DA MÉDIA")
                    $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

                }
                else if(pgMacho > 18 && pgMacho <=20){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("MÉDIA")
                    $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

                }
                else if(pgMacho > 20 && pgMacho <=24){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("ABAIXO DA MÉDIA")
                    $('#resultadodobra').css({ 'color': '#FFD700', 'border-bottom': '5px solid #FFD700', 'font-size': '18px' })

                }
                else if(pgMacho > 20 && pgMacho <=24){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("RUIM")
                    $('#resultadodobra').css({ 'color': '#B22222', 'border-bottom': '5px solid #B22222', 'font-size': '18px' })

                }
                else if(pgMacho > 24 && pgMacho <=36){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("MUITO RUIM")
                    $('#resultadodobra').css({ 'color': '#8B0000', 'border-bottom': '5px solid #8B0000', 'font-size': '18px' })

                }
                


            }

            // 36-45
            else if (idade >= 36 && idade <=45){
                console.log('entrou no if idade 35')
                
                if (pgMacho >= 10 && pgMacho <=14){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    console.log('entrou no if excelente')
                    $("#resultadodobra").val('EXCELENTE')
                    $('#resultadodobra').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })

                }
                else if(pgMacho > 14 && pgMacho <=18){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("BOM")
                    $('#resultadodobra').css({ 'color': '#3CB371', 'border-bottom': '5px solid #3CB371', 'font-size': '18px' })

                }
                else if(pgMacho > 18 && pgMacho <=21){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("ACIMA DA MÉDIA")
                    $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

                }
                else if(pgMacho > 21 && pgMacho <=23){
                    $("#resultadodobra").val("MÉDIA")
                    $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

                }
                else if(pgMacho > 23 && pgMacho <=25){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("ABAIXO DA MÉDIA")
                    $('#resultadodobra').css({ 'color': '#FFD700', 'border-bottom': '5px solid #FFD700', 'font-size': '18px' })

                }
                else if(pgMacho > 26 && pgMacho <=29){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("RUIM")
                    $('#resultadodobra').css({ 'color': '#B22222', 'border-bottom': '5px solid #B22222', 'font-size': '18px' })

                }
                else if(pgMacho > 29 && pgMacho <=39){
                    resultadoNumero.val(pgMacho.toFixed(2))

                    $("#resultadodobra").val("MUITO RUIM")
                    $('#resultadodobra').css({ 'color': '#8B0000', 'border-bottom': '5px solid #8B0000', 'font-size': '18px' })

                }
                


            }

        

            

        }




        else{

           //18-25
           if (idade >= 18 && idade <=25){
            console.log('entrou no if idade 18')
            if (pgFemea >= 13 && pgFemea <=16){
                resultadoNumero.val(pgFemea.toFixed(2))

                console.log('entrou no if excelente')
                $("#resultadodobra").val('EXCELENTE')
                $('#resultadodobra').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })

            }
            else if(pgFemea > 16 && pgFemea <=19){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("BOM")
                $('#resultadodobra').css({ 'color': '#3CB371', 'border-bottom': '5px solid #3CB371', 'font-size': '18px' })

            }
            else if(pgFemea > 19 && pgFemea <=22){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("ACIMA DA MÉDIA")
                $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

            }
            else if(pgFemea > 22 && pgFemea <=25){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("MÉDIA")
                $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

            }
            else if(pgFemea > 25 && pgFemea <=28){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("ABAIXO DA MÉDIA")
                $('#resultadodobra').css({ 'color': '#FFD700', 'border-bottom': '5px solid #FFD700', 'font-size': '18px' })

            }
            else if(pgFemea > 28 && pgFemea <=31){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("RUIM")
                $('#resultadodobra').css({ 'color': '#B22222', 'border-bottom': '5px solid #B22222', 'font-size': '18px' })

            }
            else if(pgFemea > 31 && pgFemea <=43){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("MUITO RUIM")
                $('#resultadodobra').css({ 'color': '#8B0000', 'border-bottom': '5px solid #8B0000', 'font-size': '18px' })

            }
            


        }

          //26-35
          else if (idade >= 26 && idade <=35){
            resultadoNumero.val(pgFemea.toFixed(2))

            console.log('entrou no if idade 35')
            if (pgFemea >= 14 && pgFemea <=16){
                console.log('entrou no if excelente')
                $("#resultadodobra").val('EXCELENTE')
                $('#resultadodobra').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })

            }
            else if(pgFemea > 16 && pgFemea <=20){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("BOM")
                $('#resultadodobra').css({ 'color': '#3CB371', 'border-bottom': '5px solid #3CB371', 'font-size': '18px' })

            }
            else if(pgFemea > 20 && pgFemea <=23){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("ACIMA DA MÉDIA")
                $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

            }
            else if(pgFemea > 23 && pgFemea <=25){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("MÉDIA")
                $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

            }
            else if(pgFemea > 25 && pgFemea <=29){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("ABAIXO DA MÉDIA")
                $('#resultadodobra').css({ 'color': '#FFD700', 'border-bottom': '5px solid #FFD700', 'font-size': '18px' })

            }
            else if(pgFemea > 29 && pgFemea <=33){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("RUIM")
                $('#resultadodobra').css({ 'color': '#B22222', 'border-bottom': '5px solid #B22222', 'font-size': '18px' })

            }
            else if(pgFemea > 33 && pgFemea <=49){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("MUITO RUIM")
                $('#resultadodobra').css({ 'color': '#8B0000', 'border-bottom': '5px solid #8B0000', 'font-size': '18px' })

            }
            


        }


        //36-45
        else if (idade >= 36 && idade <=45){
            resultadoNumero.val(pgFemea.toFixed(2))

            console.log('entrou no if idade 35')
            if (pgFemea >= 16 && pgFemea <=19){
                resultadoNumero.val(pgFemea.toFixed(2))

                console.log('entrou no if excelente')
                $("#resultadodobra").val('EXCELENTE')
                $('#resultadodobra').css({ 'color': 'green', 'border-bottom': '5px solid green', 'font-size': '18px' })

            }
            else if(pgFemea > 19  && pgFemea <=23){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("BOM")
                $('#resultadodobra').css({ 'color': '#3CB371', 'border-bottom': '5px solid #3CB371', 'font-size': '18px' })

            }
            else if(pgFemea > 23 && pgFemea <=26){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("ACIMA DA MÉDIA")
                $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

            }
            else if(pgFemea > 26 && pgFemea <=29){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("MÉDIA")
                $('#resultadodobra').css({ 'color': '#8FBC8F', 'border-bottom': '5px solid #8FBC8F', 'font-size': '18px' })

            }
            else if(pgFemea > 29 && pgFemea <=32){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("ABAIXO DA MÉDIA")
                $('#resultadodobra').css({ 'color': '#FFD700', 'border-bottom': '5px solid #FFD700', 'font-size': '18px' })

            }
            else if(pgFemea > 32 && pgFemea <=36){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("RUIM")
                $('#resultadodobra').css({ 'color': '#B22222', 'border-bottom': '5px solid #B22222', 'font-size': '18px' })

            }
            else if(pgFemea > 36 && pgFemea <=46){
                resultadoNumero.val(pgFemea.toFixed(2))

                $("#resultadodobra").val("MUITO RUIM")
                $('#resultadodobra').css({ 'color': '#8B0000', 'border-bottom': '5px solid #8B0000', 'font-size': '18px' })

            }
        }
        }
        

        
        
   
      })
    });
  
  
  
  
  }
  )
  
  
  
  /*fim do script para RELACAO CINTURA QUADRIL*/
  
  
  
  