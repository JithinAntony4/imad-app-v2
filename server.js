var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One | Jithin Antony',
        heading: 'Article One',
        date: 'Jan 4, 2017',
        content: `
            <p>
                This is the content for my first aricle 
            </p>`
    },
    'article-two': {
         title: 'Article Two | Jithin Antony',
        heading: 'Article Two',
        date: 'Jan 5, 2017',
        content: `
            <p>
                This is the content for my second aricle 
            </p>`
    },
    'article-three': {
         title: 'Article Three | Jithin Antony',
        heading: 'Article Three',
        date: 'Jan 6, 2017',
        content: `
            <p>
                This is the content for my third aricle 
            </p>`
    }
};

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
            ${date}
        </div>
        <div>
            ${content}
        </div>
        <hr/>
        <div class='footer'>
            <input type="text" id="comment_input" placeholder="Enter your comment here.." />
            <input href="/submit-comment" type="submit" value="Submit" id="submit_comment_btn" />
            <ul id="comment_list">
                
            </ul>
        </div>
        </div>
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

var names = [];
app.get('/submit-name', function (req, res) { //URL : ../submit-name?name=xxxx
    //get the name from request
    var name = req.query.name;
    names.push(name);
    //JSON JavaScript Object Notation
    res.send(JSON.stringify(names)); 
});

var comments = [];
app.get('/submit-comment', function (req, res) { //URL : ../submit-comment?comment=xxxx
    //get the name from request
    var comment = req.query.comment;
    comments.push(comment);
    //JSON JavaScript Object Notation
    res.send(JSON.stringify(comments)); 
});

app.get('/:articleName', function(req,res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/jithin.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jithin.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});