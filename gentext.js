/* Get the text field */
var text = document.getElementById("myInput");

function copyText() {
  /* Select the text field */
  text.select();
  text.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */         document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + text.value);
}


function spacing() {
    text.style.letterSpacing = ".5em";
}
function lowercase() {
    text.style.textTransform = "lowercase";
}
function uppercase() {
    text.style.textTransform = "uppercase";
}
function bold() {
    //Change the font weight style to 700
    text.style.fontWeight = 'bold';
}
function impact() {
    text.style.fontFamily = "Impact,Charcoal,sans-serif";
}
function courier() {
    text.style.fontFamily = "Courier New, Courier, monospace";
}
function allura() {
    text.style.fontFamily = "Allura";
}
function amatic() {
    text.style.fontFamily = "Amatic SC";
}
function barrio() {
    text.style.fontFamily = "Barrio";
}
