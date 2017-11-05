const url = 'http://localhost:8080'
const fetch = require('node-fetch')

function* createFooFetcher() {
  const response = yield fetch(url)
  const foo = yield response.json()
  return `${foo.data.foo}`
}

const fooFetcher = createFooFetcher()
fooFetcher.next().value
  .then(res => fooFetcher.next(res).value)
  .then(res => fooFetcher.next(res).value)
  .then(foo => console.log(foo))
  .catch(err => console.log(err))
