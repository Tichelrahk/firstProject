const fs = require('fs');
const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fs.readFile('homepageview.html', function(err, data) {
	  res.setHeader('Content-Type', 'text/plain');
	  res.write(data);
	  res.end();
	});
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});