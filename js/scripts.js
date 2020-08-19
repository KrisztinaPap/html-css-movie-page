
/* Citation:
 * https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
 * The below block of code is a function that targets the html element "mainMenu". It toggles between the display settings 'show' and 'hide' for that entire nav block.
 * Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myMenu() {
    var x = document.getElementById("mainMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 