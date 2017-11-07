const url = 'http://localhost:8080'
const fetch = require('node-fetch')

function* createFooFetcher() {
  const response = yield fetch(url)
  const foo = yield response.json()
  return `${foo.data.foo}`
}

const coroutine = (gen) => {
  const generator = gen()

  const handle = (result) => {
    if(result.done)
      return Promise.resolve(result.value)
    else
      return Promise.resolve(result.value).then(res => handle(generator.next(res)))
  }

  return handle(generator.next())
}

const fooFetcher = coroutine(createFooFetcher)
fooFetcher.then(foo => console.log(foo))
