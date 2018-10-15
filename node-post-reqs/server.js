
//Fill in vars here
var fs = require('fs');/* Missing require statment */
var http = require('http');/* Missing require statment */
var url = require('url');/* Missing require statment */

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  if (request.method === 'POST') {
    if(path === "/lowfive"){
      fs.readFile(__dirname+'/assets/lowfive.jpg', 'utf8', function(error, file) { 
        response.writeHead(200, {'Content-Type': 'image/jpg'});;
        response.end(__dirname+'/assets/lowfive.jpg'); 
      });
    }
    if(path === "/hifive"){
      // fs.readFile(__dirname+'/assets/hifive.jpg', 'utf8', function(error, file) { 
        response.writeHead(201, {'Content-Type': 'image/jpg'});
        console.log("this is the name", __dirname + '/assets/hifive.jpg')
        response.end(__dirname + '/assets/hifive.jpg'); 
      // });
    }
    /*========YOUR CODE HERE=========*/
  } else if (request.method === 'GET') {
    if (path === '/') {
      response.writeHead(200, {'Content-Type': 'text/html'});
      console.log(__dirname);
      fs.readFile(__dirname+'/index.html', function(err, data) {
        if (err) { console.log(err); }
        response.end(data);
      });
    }
  } else {
    response.statusCode = 404;
    response.end();
  }

}).listen(8080, '127.0.0.1');

console.log('Listening...');
