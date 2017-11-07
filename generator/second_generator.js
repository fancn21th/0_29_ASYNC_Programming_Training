function* createLogger() {
  console.log('start')
  yield                   // tell generator to stop here
  console.log('end')
}

const logger = createLogger()
logger.next()
