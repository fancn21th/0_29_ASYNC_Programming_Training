const fetch = require('node-fetch')

async function fetchRandomContent(endpoint) {
  const url = `http://localhost:8080${endpoint}`
  const response = await fetch(url)
  return await response.json()
}

async function fetchRandomNumberAndRandomText() {
  const [number, numberText] = await Promise.all([
    fetchRandomContent(''),
    fetchRandomContent('/text'),
  ])
  console.log(number.data.foo)
  console.log(numberText.data.foo)
}

fetchRandomNumberAndRandomText()
