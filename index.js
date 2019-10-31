const http = require('http');
const PORT = process.env.PORT || 5000;
var fs = require('fs');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fs.readFile('homepageview.html', function(err, data) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(data);
	  res.end();
	});
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});