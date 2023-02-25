const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");

    for (j = 0; j < accordion.length; j++) {
      
      if (accordion[j] !== this && accordion[j].classList.contains("active")) {
        accordion[j].classList.remove("active");
      }
    }
  });
}

function showDiv(divId) {
  const div1 = document.getElementById("Div1");
  const div2 = document.getElementById("Div2");
  const div3 = document.getElementById("Div3");
  var div = document.getElementById(divId);

  if (divId == "Div1") {
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
} else {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div.style.display = "block";
}
}



