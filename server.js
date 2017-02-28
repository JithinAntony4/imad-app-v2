var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var config = {
    user : 'jithinantony4',
    database : 'jithinantony4',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

function hash(input, salt){
    var hashed = crypto.pbkdf25sync(input, salt, 10000, 512, 'sha512');
    return hashed;
}

app.get('hash/:input', function(req, res){
    var hashString = hash(req.params.input, 'this-is-some-random-string');
    res.send(hashString);
});

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport cotent=" width="device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date.toDateString()}
        </div>
        <div>
            ${content}
        </div>
        <hr/>
        <div class='footer'>
            <input type="text" id="comment_input" placeholder="Enter your comment here.." />
            <input type="submit" value="Comment" id="comment_btn" />
            <ul id="comment_list">
            </ul>
        </div>
        </div>
        <script type="text/javascript" src="/ui/comment.js">
        </script>
    </body>
</html>`
;
 return htmlTemplate;  
}

var counter = 0;
app.get('/counter', function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

var comments = [];
app.get('/submit-comment', function (req, res) { //URL : ../submit-comment?comment=xxxx
    //get the name from request
    var comment = req.query.comment;
    comments.push(comment);
    //JSON JavaScript Object Notation
    res.send(JSON.stringify(comments)); 
});

var names = [];
app.get('/submit-name', function (req, res) { //URL : ../submit-name?name=xxxx
    //get the name from request
    var name = req.query.name;
    names.push(name);
    //JSON JavaScript Object Notation
    res.send(JSON.stringify(names)); 
});

app.get('/article/:articleName', function(req,res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    pool.query("SELECT * FROM article WHERE title = $1" , [req.params.articleName] , function(err, result){
        if(err){
            res.status(500).send(err.toString());
        } else {
            if(result.rows.length === 0){
                 res.status(404).send('Article not found');
            } else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test-db', function (req, res){
    //make a select request
    pool.query('SELECT * FROM test', function(err, result){
        if(err){
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
        }
    });
    //return a response with results
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/comment.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comment.js'));
});

app.get('/ui/jithin.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jithin.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});