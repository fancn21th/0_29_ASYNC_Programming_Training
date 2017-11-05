var http = require("http");

function process_request(req, res) {
  res.writeHead(200, { 'Content-Type' : 'application/json' });
  res.end(JSON.stringify({ error: null, data: { foo: 'foo is foo'} }) + '\n');
}

var s = http.createServer(process_request);
s.listen(8080);
