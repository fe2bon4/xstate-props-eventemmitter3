export const config = {
  initial: 'initializing',

  states: {
    initializing: {
      entry: ['emitToParent'],
      after: {
        1000: {
          actions: ['logEvent'],
          target: 'initializing'
        }
      }
    }
  },
}