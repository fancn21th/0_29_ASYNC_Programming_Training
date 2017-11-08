const url = 'http://localhost:8080'
const fetch = require('node-fetch')

async function fetchFoo() {
  const response = await fetch(url)
  const foo = await response.json()
  if(foo.data.number >= 5)
    throw Error(`${foo.data.number} is out of range`)
  return foo.data.foo
}

async function getFoo() {
  try {
    const foo = await fetchFoo()
    console.log(foo)
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }
}

getFoo()
