var getText = document.getElementById("get-text");

getText.addEventListener("click", function(e){

e.preventDefault();

 var textBoxReplace = document.getElementById("text-box-replace");
textBoxReplace.innerHTML = "world";

});


var textColorChange = document.getElementById("get-color");
textColorChange.addEventListener("click", function(e){
    e.preventDefault();
    var textBoxColor = document.getElementById("text-box-color");
    textBoxColor.style.backgroundColor = "red";
    var textColor = document.getElementById("color-text");
    textColor.innerHTML="This is the color red.";

});


var melonBox = document.getElementById("get-melon");
melonBox.addEventListener("click", function(e){
    e.preventDefault();
    var melonPic = document.getElementById("melon-pic");
    melonPic.setAttribute('src', 'http://hostedmedia.reimanpub.com/TOH/Images/Photos/37/300x300/exps30204_CB50843D55.jpg');

});


var beAwesome = document.getElementById("be-awesome");
beAwesome.addEventListener("click", function(e){
    e.preventDefault();
    var awesomeBox = document.getElementById("awesome-box");
    awesomeBox.classList.toggle("hidden");

});



