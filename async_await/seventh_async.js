const url = 'http://localhost:8080'
const url2 = 'http://localhost:8080/text'
const fetch = require('node-fetch')

async function fetchRandomNumberAndRandomText() {
  const results = await Promise.all([
    fetch(url),
    fetch(url2)
  ])

  const numberVal = await results[0].json()
  console.log(numberVal.data.foo)

  const textVal = await results[1].json()
  console.log(textVal.data.foo)
}

fetchRandomNumberAndRandomText()
