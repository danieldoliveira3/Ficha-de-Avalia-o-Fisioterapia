/*funcao para desativar a opção caso ela n seja desejada*/
function DesabilitarOpcao() {
    var valor1a = $("#valor1a").val()
    var valorFumante = $("#fumante").val();
    var valorExercicio = $("#exercicio-fisico").val();
    var valorNatureza = $("#natureza-da-lesao").val();
    var valorFisio = $("#faz-fisio").val();
    console.log(valorFumante)
    if (valorFumante == "NÃO") {
      $('#desaparecer-fumante').prop('style', 'display: none')
    }
    else {
      $('#desaparecer-fumante').prop('style', 'display: block')
    }
  
    if (valorExercicio == "NÃO") {
  
      $('#desaparecer-exercicio').prop('style', 'display: none')
  
    }
  
    else {
      $('#desaparecer-exercicio').prop('style', 'display: block')
    }
  
    if (valorNatureza == "OUTRA") {
  
      $('#desaparecer-natureza').prop('style', 'display: block')
  
    }
  
    else {
  
      $('#desaparecer-natureza').prop('style', 'display: none')
    }
  
  
    if (valorFisio == "NÃO") {
  
      $('#desaparecer-faz-fisio').prop('style', 'display: none')
  
    }
  
    else {
      $('#desaparecer-faz-fisio').prop('style', 'display: block')
    }
    
    
    
  
  
  }
  
  
  function desaparecer1a(){
  
    if (document.getElementById("1b").style.display == "none") {
  
      document.getElementById("1b").style.display = "block";
      document.getElementById("1a").style.opacity = "1";
      document.getElementById("valor1a").setAttribute('value', '1');
      $("#1a-q").val("0")
      $("#1b-q").val("0")
      document.getElementById("1a-q").removeAttribute('disabled', 'disabled'); 
      
      
  
      
    }
  
    else{
      document.getElementById("1b").style.display = "none"
      document.getElementById("1a").style.opacity = "0.6";
      document.getElementById("1a-q").setAttribute('value', '0');
      document.getElementById("valor1a").setAttribute('value', '0');
      $("#1a-q").val("0")
      $("#1b-q").val("0")
      document.getElementById("1a-q").setAttribute('disabled', 'disabled');
  
    }
  
    
  
  }
  
  function desaparecer2a(){
  
    if (document.getElementById("2b").style.display == "none") {
  
      document.getElementById("2b").style.display = "block";
      document.getElementById("2a").style.opacity = "1";
      document.getElementById("2a-q").removeAttribute('disabled', 'disabled');
      $("#2a-q").val("0")
      $("#2b-q").val("0")
      document.getElementById("valor2a").setAttribute('value', '1');
      document.getElementById("3a-q").setAttribute('value', '0');
       
      
  
      
    }
  
    else{
      document.getElementById("2b").style.display = "none"
      document.getElementById("2a").style.opacity = "0.6";
      document.getElementById("valor2a").setAttribute('value', '0');
      document.getElementById("2a-q").setAttribute('value', '0');
      $("#2a-q").val("0")
      $("#2b-q").val("0")
      document.getElementById("2a-q").setAttribute('disabled', 'disabled');
      
  
    }
  
  
  }
  
  function desaparecer3a(){
  
    if (document.getElementById("3b").style.display == "none") {
      document.getElementById("3a-q").removeAttribute('disabled', 'disabled');
      document.getElementById("3b").style.display = "block";
      document.getElementById("3a").style.opacity = "1";
      
      $("#3a-q").val("0")
      $("#3b-q").val("0")
      document.getElementById("3a-q").removeAttribute('value', 'value');
      document.getElementById("valor3a").setAttribute('value', '1');
      
      
    
      
  
      
    }
  
    else{
      document.getElementById("3b").style.display = "none"
      document.getElementById("3a").style.opacity = "0.6";
      document.getElementById("valor3a").setAttribute('value', '0');
      $("#3a-q").val("0")
      $("#3b-q").val("0")
      document.getElementById("3a-q").removeAttribute('value', 'value');
      
      
      document.getElementById("3a-q").setAttribute('disabled', 'disabled');
  
    }
  
    
  }
  