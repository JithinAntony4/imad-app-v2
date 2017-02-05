//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    //capture the variable and store it on variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take action
          //200 means request is successfully completed
          if (request.status === 200) {
              console.log('in request.status');
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //Not done yet
    };
    //Make a request
    request.open('GET', 'http://jithinantony4.imad.hasura-app.io/counter', true);
    request.send(null);
};
//Submit name
var nameInput = document.getElementById('name_input');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
      
    //Create a request object
    var request = new XMLHttpRequest();
    //capture the variable and store it on variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take action
          //200 means request is successfully completed
          if (request.status === 200) {
            //Capture a list of names and render it as list
            var names = ['name', 'name2', 'name3', 'name4'];
            var list = '';
            for (var i = 0; i < names.length; i++) {
                list += '<li>' + names[i] + '</li>';
            }
    var ul = document.getElementById('name_list');
    ul.innerHTML = list;
          }
      }
      //Not done yet
    };
    //Make a request
    request.open('GET', 'http://jithinantony4.imad.hasura-app.io/counter', true);
    request.send(null);
};