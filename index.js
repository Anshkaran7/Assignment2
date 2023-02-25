const accordion = document.getElementsByClassName('contentBx');

for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}


  function showDiv(divId) {
    // Hide all div elements
    // var divs = document.getElementsById("div");
    // for (var i = 0; i < divs.length; i++) {
    //   divs[i].style.display = "none";
    // }
    
    // Show the selected div element
    var div = document.getElementById(divId);
    div.style.display = "block";
    
  }
  