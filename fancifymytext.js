function biggerFunc() {
    document.getElementById("Textinput").style.fontSize = "24pt";
    alert("Text Enlarged!");
}
function fancyFunc() {
    document.getElementById("Textinput").style.fontWeight = "bold";
    document.getElementById("Textinput").style.color = "blue";
    document.getElementById("Textinput").style.textDecoration = "underline";
    alert("Font Fancified!");
}
function boringFunc() {
    document.getElementById("Textinput").style.fontWeight = "lighter";
    document.getElementById("Textinput").style.color = "black";
    document.getElementById("Textinput").style.textDecoration = "";
    alert("Boring...");
}
function mooFunc() {
    let str = document.getElementById("Textinput").value;
    let cap = str.toUpperCase();
    document.getElementById("Textinput").value = cap.split(".").join("-MOO");
    alert("Moo!!");
}
