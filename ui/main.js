function loadLoginForm () {
    var loginHtml = `
        <h3>Login/Register to unlock awesome features</h3>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" />
        <br/><br/>
        <input type="submit" id="login_btn" value="Login" />
        <input type="submit" id="register_btn" value="Register" />
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          // Not done yet
        };
                
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
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
