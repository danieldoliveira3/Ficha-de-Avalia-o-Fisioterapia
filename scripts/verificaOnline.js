


//script para verificar se ta online


function start() {
  setTimeout('start()', 1000)
  if (navigator.onLine) {
      
     /* var fakeButton = document.getElementById("fake-button");
      var trueButton = document.getElementById("true-button");
      var semInternet = document.getElementById("semInternet");
      trueButton.style.zIndex = "0"
      fakeButton.style.display = "none";
      trueButton.style.display = "block";*/
      
      
  }
  else {
    console.log('n temos internet aaaaaa :(')
      var fakeButton = document.getElementById("fake-button");
      var trueButton = document.getElementById("true-button");
      
      fakeButton.style.display = "block";
      trueButton.style.display = "none";
      
      
  
  };

}















