function semInternet() {
    var semInternet = document.getElementById("semInternet");
    var desaparecer1 = document.getElementById("none1");
    var desaparecer2 = document.getElementById("none2");
    var desaparecer3 = document.getElementById("none3");
    var fakeButton = document.getElementById("fake-button");
    semInternet.style.display = "block"
    semInternet.innerHTML ="<b>Você está sem internet.</b><br>Durante as <b>próximas 24 horas</b> nós cuidaremos direitinho do que você preencheu, não se preocupe.<br>Mas <b>não esquece de voltar aqui quando tiver internet, ok?</b><br>Até daqui a pouco 😘<br><span onclick='location.reload()' style='text-decoration: underline; cursor:pointer;'>Clique para recarregar a página.</span>"
    desaparecer1.style.display = "none";
    desaparecer2.style.display = "none";
    desaparecer3.style.display = "none";
    fakeButton.style.opacity = "0"
  
  }