var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var views = path.join(__dirname,'views');
var app = express();
var urlString = 'mongodb://127.0.0.1:27017/speeddb';
var mongoHelper = require('./public/js/mongoHelper');
app.use(bodyParser.json());
app.use(express.static(__dirname));
var mongoh = new mongoHelper(urlString);


//  app.use(function(req, res) {
//      res.sendFile(__dirname + '/views/index.html');
//  });

app.get('/',function(req,res){
    res.sendFile(path.join(views , "index.html"));
});

app.post('/candidate_login/candlogin',function(req,res){    
      console.log('cadidate data: ' + req.body);
      let data = mongoh.validCandidate(req.body);
      data.then(function(result){
        if (result = null)
          console.log('No matched candidate found! : ' + result);

          res.send(result);     
      });
});

app.post('/candidate_login/candregister',function(req,res){    
  console.log('cadidate data: ' + req.body.email);
  let result = mongoh.insertStudent(req.body);
    if (result = 1)
      alert('Candidate registered!');
    else
      alert('Registration failed!'); 
      res.send(req.body);    
});

app.listen(3000,function(){
  console.log(__dirname + " : Listening on port 3000");
})

module.exports = app;
