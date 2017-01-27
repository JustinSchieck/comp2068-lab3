/**
* @Author: Justin Schieck
* @Date:   2017-01-26T22:16:30-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-01-26T22:47:13-05:00
*/

let http = require('http');

var connect = require('connect');
var url = require('url');

//creates a new connect object
var app = connect();

var fail = function(req, res, next){
  res.end('Failed to connect');
}


//get the whole querystring (parameter list) ?amount=100
var calculator = function(req, res, next) {
  var qs = url.parse(req.url, true).query;

  //variables for url equations using x,y and method
  var method = qs.method;
  var number1 = qs.x;
  var number2 = qs.y;

//methods to process the math involved
  if(method == 'add'){
    res.end(number1 + ' + ' + number2 + ' = ' + (parseInt(number1)+parseInt(number2)));

  }else if(method =='subtract'){
    res.end(number1 + ' - ' + number2 + ' = ' + (parseInt(number1)-parseInt(number2)));

  }else if(method == 'multiply'){
    res.end(number1 + ' * ' + number2 + ' = ' + (parseInt(number1)*parseInt(number2)));

  }else if(method == 'divide'){
    res.end(number1 + ' / ' + number2 + ' = ' + (parseInt(number1)/parseInt(number2)));

  }else{
    res.end('Error: Please use a valid string');//if the string input fails
  };
};

  //route the urls to the correct function
  app.use('/lab3', calculator);
  app.use(fail);

  //start the server on port 3000
  app.listen(3000);
  console.log('connect running on port 3000');
