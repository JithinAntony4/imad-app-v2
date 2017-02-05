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
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
      
    //Create a request object
    var request = new XMLHttpRequest();
    //capture the variable and store it on variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take action
          //200 means request is successfully completed
          if (request.status === 200) {
            //Capture a list of names and render it as list
            var names = request.responseText;
            names = JSON.parse(names);
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
    var nameInput = document.getElementById('name_input');
    var name = nameInput.value;
    request.open('GET', 'http://jithinantony4.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};

//Submit comment
var commentbtn = document.getElementById('submit_comment_btn');
commentbtn.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    //capture the variable and store it on variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take action
          //200 means request is successfully completed
          if (request.status === 200) {
            //Capture a list of comment and render it as list
            var comments = request.responseText;
            comments = JSON.parse(comments);
            var list = '';
            for (var i = 0; i < comments.length; i++) {
                list += '<li>' + comments[i] + '</li>';
            }
            var ul = document.getElementById('comment_list');
            ul.innerHTML = list;
          }
      }
      //Not done yet
    };
    //Make a request
    var commentInput = document.getElementById('comment_input');
    var comment = commentInput.value;
    request.open('GET', 'http://jithinantony4.imad.hasura-app.io/submit-comment?comment=' + comment, true);
    request.send(null);
};
