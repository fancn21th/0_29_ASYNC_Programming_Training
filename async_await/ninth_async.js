// the code below can not run without JavaScript Transpiler
Symbol.asyncIterator = Symbol.asyncIterator || Symbol('asyncIterator')

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function* foo() {
  await delay(1000)
  console.log('1')
  await delay(1000)
  console.log('2')
  await delay(1000)
  console.log('2')
}

async function main() {
  for await (const value of foo()) {
    console.log(value)
  }
}

main()
