

        var x = localStorage.getItem("score");
    document.getElementById('score1').innerHTML = x ;
    

function Playagain() {
  
    window.location.replace("index.html");
    
  
  }
  document.getElementById('playagain').onclick = Playagain ;