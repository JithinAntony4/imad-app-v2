//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //make request counter end point
    var request = new XMLHttpRequest();
    //capture the variable and store it on variable
    request.onreadystatechanged = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take action
      }
      //Not done yet
    };
    //Render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};