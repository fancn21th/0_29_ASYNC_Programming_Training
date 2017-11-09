const url = 'http://localhost:8080'
const url2 = 'http://localhost:8080/text'
const fetch = require('node-fetch')

async function fetchRandomNumberAndRandomText() {
  const numberPromise = fetch(url)
  const textPromise = fetch(url2)
  const number = await numberPromise
  const text = await textPromise
  const numberVal = await number.json()
  const textVal = await text.json()
  console.log(numberVal.data.foo)
  console.log(textVal.data.foo)
}

fetchRandomNumberAndRandomText()
