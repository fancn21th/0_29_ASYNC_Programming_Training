const fetch = require('node-fetch')
const async = require('async')
const url = 'http://localhost:8080'
const url2 = 'http://localhost:8080/text'

async.waterfall([
    function (cb) {
      fetch(url).then(res => cb(null, res.json()))
    },
    function (rs, cb) {
      rs.then(data => cb(null, data.data.foo))
    },
    function (randomNumber, cb) {
      fetch(url2).then(res => cb(null, randomNumber, res.json()))
    },
    function (randomNumber, rs, cb) {
      rs.then(data => cb(null, {
        randomNumber,
        randomText: data.data.foo
      }))
    }
  ],
  function (err, results) {
    console.log(results)
  }
)
