const http = require("http");
const url = require('url');

const numberTextList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

function process_request(req, res) {
  req.parsed_url = url.parse(req.url, true);
  var core_url = req.parsed_url.pathname;
  var time = new Date(Date.now()).toUTCString()
  console.log(`[${time}] INCOMING REQUEST : ${req.method} ${core_url}`);

  if(core_url == '/'){
    setTimeout(function () {
      handle_random_number(req, res)
    }, 2000)
  } else if(core_url == '/text') {
    setTimeout(function () {
      handle_random_text(req, res)
    }, 2000)
  } else {
    res.writeHead(404, { 'Content-Type' : 'application/json' });
    res.end(JSON.stringify({ code: 'no_such_page', message: 'No such page' }))
  }
}

function handle_random_text(req, res) {
  const numberFromZeroToTen = Math.floor(Math.random() * 11);
  res.writeHead(200, { 'Content-Type' : 'application/json' });
  res.end(
    JSON.stringify(
      {
        error: null,
        data:
          {
            number: numberFromZeroToTen,
            foo: `Random number text is ${numberTextList[numberFromZeroToTen]} (from zero to ten)`
          }
      }) + "\n"
  );
}

function handle_random_number(req, res) {
  const numberFromZeroToTen = Math.floor(Math.random() * 11);
  res.writeHead(200, { 'Content-Type' : 'application/json' });
  res.end(
    JSON.stringify(
      {
        error: null,
        data:
          {
            number: numberFromZeroToTen,
            foo: `Random number is ${numberFromZeroToTen} (from 0 to 10)`
          }
      }) + "\n"
  );
}

var s = http.createServer(process_request);
s.listen(8080);
