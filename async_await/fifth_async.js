const url = 'http://localhost:8080'
const url2 = 'http://localhost:8080/text'
const fetch = require('node-fetch')

async function fetchRandomNumberAndRadomText() {
  const response = await fetch(url)
  const foo = await response.json()
  console.log(foo.data.foo)
  const response2 = await fetch(url2)
  const foo2 = await response2.json()
  console.log(foo2.data.foo)
}

fetchRandomNumberAndRadomText()
