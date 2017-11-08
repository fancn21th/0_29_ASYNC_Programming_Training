const url = 'http://localhost:8080'
const fetch = require('node-fetch')

class fooClient {
  async fetchFoo(handle) {
    const response = await fetch(url)
    return await response.json()
  }
}

(async () => {
  const client = new fooClient()
  const foo = await client.fetchFoo()
  console.log(foo.data.foo)
})()
