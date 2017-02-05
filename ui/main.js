//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    //make request counter end point
    
    //capture the variable and store it on variable
    
    //Render the variable in correct span
    var counter = 0;
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};