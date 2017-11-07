var http = require("http");

function process_request(req, res) {
  try {
    const numberFromZeroToTen = Math.floor(Math.random() * 11);
    res.writeHead(200, { 'Content-Type' : 'application/json' });
    res.end(JSON.stringify({ error: null, data: { foo: `there is ${numberFromZeroToTen}`} }) + '\n');
  } catch (err) {
    res.writeHead(500, { 'Content-Type' : 'application/json' });
    res.end(JSON.stringify({ code: 'server_unhandled_error', message: err.message }))
  }
}

var s = http.createServer(process_request);
s.listen(8080);
