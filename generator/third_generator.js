function* createHello() {
  yield 'first'
  return 'second'
}

const hello = createHello()
console.log(hello.next())  // receive messages from generator
console.log(hello.next())
