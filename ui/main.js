//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    //capture the variable and store it on variable
    request.onreadystatechanged = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take action
          //200 means request is successfully completed
          if (request === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //Not done yet
    };
};