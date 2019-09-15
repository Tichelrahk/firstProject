const http = require('http'); //import library for requests

const hostname = '127.0.0.1'; //the ip address

const port = 3000; //this is the port

const server = http.createServer((req, res) => { //set up the server
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => { //listen at above constants
  console.log(`Server running at http://${hostname}:${port}/`); //print so I know it's working. The curly cues and $ allow us to pass the variables into the string
});