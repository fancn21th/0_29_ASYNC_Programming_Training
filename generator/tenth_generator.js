const url = 'http://localhost:8080'
const fetch = require('node-fetch')
const co = require('co')

function* createFooFetcher() {
  const response = yield fetch(url)
  const foo = yield response.json()
  return `${foo.data.foo}`
}

const fooFetcher = co(createFooFetcher)
fooFetcher.then(foo => console.log(foo))
