import { createStore } from './my-redux'

function counter(state=0,action){
  console.log(state,action)
  switch(action.type){
    case 'add':
      return state + 1 
    case 'minus':
      return state - 1
    default:
      return 0
  }
}

const store = createStore(counter)
const init = store.getState()
console.log(init)

function listener(){
  const current = store.getState()
  console.log('current',current)
}

store.subscribe(listener)

store.dispatch({'type':'add'})
store.dispatch({'type':'add'})
store.dispatch({'type':'add'})
store.dispatch({'type':'minus'})
