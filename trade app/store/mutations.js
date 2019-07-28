export const incrementMutation = (state, payload) => {
  debugger
  state.counter+= +payload;
}

export const decrementMutation = (state, payload) => {
  debugger
  state.counter-= payload;
}

export const testMutation = (state, payload) => {
  debugger
  state.testCounter+= payload;
}
        