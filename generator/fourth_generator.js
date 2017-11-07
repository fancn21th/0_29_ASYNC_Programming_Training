function* createHello() {
  const word = yield
  console.log(`Hello ${word}`)
}

const hello = createHello()
console.log(hello.next())
console.log(hello.next('Alex')) // send messages to generator
