var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

/* Set the width of the sidenav to 250px and the left margin of the page content to 250px */

function openNav() {
document.getElementById("sidenav").style.width = "450px";
document.getElementById("main").style.marginLeft = "450px";
}

/* Set the width of the sidenav to 0 and the left margin of the page content to 0 */

function closeNav() {
document.getElementById("sidenav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}