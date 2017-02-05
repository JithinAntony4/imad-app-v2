//Submit comment
var commentbtn = document.getElementById('comment_btn');
commentbtn.onclick = function () {
    console.log('clicked comment btn');
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
