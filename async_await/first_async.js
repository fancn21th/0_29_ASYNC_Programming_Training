// CAUTION: in order to run async/await
// you must be sure your node version is 8 or above.

const url = 'http://localhost:8080'
const fetch = require('node-fetch')

async function fooFetcher() {
  const response = await fetch(url)
  const foo = await response.json()
  console.log(foo.data.foo)
}

fooFetcher()
