/* Get the text field */
var text = document.getElementById("myInput");
// var string = text.value;
var newtext = document.getElementById("myOutput");
var arr = newtext.value.split("");

function copyText() {
  /* Select the text field */
  newtext.select();
  newtext.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + newtext.value;
//   alert("Copied the text: " + newtext.value);
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function spacing() {
    let t_space = text.value;
    t_space = t_space.split('').join(' ');
    newtext.value = t_space;
    //var i=0; i<text.length; i++
    // for (var i in unicodearray){        //newtext.value.charAt(i) = text.value.charAt(i)+" ";
    //     arr[i] = newtext.value.charCodeAt(i);
    //     console.log(arr[i]);
    //     console.log(newtext.value.charCodeAt(i));       //document.write(text.charCodeAt(i)+"\u00a0");
    //     newtext.value += newtext.value.fromCharCode(unicodearray[i]);//+"\u00a0"; //&nbsp;
    //     arr.push(newtext);
    // }
    // newtext.value = text.value;
    // newtext.style.letterSpacing = ".5em";

    //var ch[] = text.split("");
    //text.charAt[0];
    //console.log(text.charAt[0]);
    //var char = text.split(/(\w+)/);
    //text.replace(/(\w)/g, '$1 ').replace(/(^\xa0+$)/,'');
    // for (int i=0; i<ch.length; i++) {
    //     // text.replace(text.charAt(i+1), `&nbsp;+${text.charAt(i + 1)}`);
    //     // var char[i] = text[i]
    //     // text.charAt(i+1);
    //     if(ch[i] != " ") {
    //         console.log(char[i]+" ");
    //     }
    //     //text.charAt[i];
    // }
}
function lowercase() {
    newtext.value = text.value;
    newtext.style.textTransform = "lowercase";
}
function uppercase() {
    newtext.value = text.value;
    newtext.style.textTransform = "uppercase";
}
function bold() {
    newtext.value = text.value;
    //Change the font weight style to 700
    newtext.style.fontWeight = 'bold';
}
function impact() {
    newtext.value = text.value;
    newtext.style.fontFamily = "Impact,Charcoal,sans-serif";
}
function courier() {
    newtext.value = text.value;
    newtext.style.fontFamily = "Courier New, Courier, monospace";
}
function allura() {
    newtext.value = text.value;
    newtext.style.fontFamily = "Allura";
}
function amatic() {
    newtext.value = text.value;
    newtext.style.fontFamily = "Amatic SC";
}
function barrio() {
    newtext.value = text.value;
    newtext.style.fontFamily = "Barrio";
}
