$(document).ready(function(){
var login = $("#login"), senha = $("#senha"), header = $("#header"), fakelogin = $("#fakelogin")
var aux = $("#aux"), wrapLoginESenha = $("#wrapLoginESenha")
header.css({'position': 'fixed'})



    $(".loginDeNovo").bind('mouseover',function (){

        $(document).ready(function(){
            if (((login.val()=="adm") && (senha.val() == "adm")) ){
                fakelogin.css({'display': 'none'})
                aux.val('True')
                header.css({'position': 'relative'})}

        })
    })


    $(".login").bind('click',function (){
        aux.val('True')
        $(document).ready(function(){
            if (((login.val()=="adm") && (senha.val() == "adm")) ){
                fakelogin.css({'display': 'none'})
                aux.val('True')
                header.css({'position': 'relative'})}
        else{
            aux.val("False")
            wrapLoginESenha.addClass('faltaCampo')
        }
            
            
            
            
            









        })
        




    })



})