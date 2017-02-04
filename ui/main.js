console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = "Changed value here..";
//move the image 
var img = document.getElementById('jca');
img.onClick = function(){
  img.style.paddingLeft = "100px"
};