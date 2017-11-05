function* create3to4Counter() {
  yield 3
  return 4
}

function* createCounter() {
  yield 1
  yield 2
  const four = yield* create3to4Counter()
  console.log(four)
  yield 5
}

const counter = createCounter()
for (let i of counter) {
  console.log(i)
}
