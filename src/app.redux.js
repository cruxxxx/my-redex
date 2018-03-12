const ADD = 'ADD'
const MINUS = 'MINUS'
const ASYNC = 'ASYNC'

export function counter(state=0,action){
  switch(action.type){
    case ADD: 
      return state + 1
    case MINUS: 
      return state - 1
    case ASYNC:
      return state + 2
    default: 
      return 0
  }
}

export function add(){
  return {"type":ADD}
}

export function minus(){
  return {"type":MINUS}
}

export function async(){
  return dispatch=>{
    setTimeout(function(){
    dispatch(add())
  },2000)
 }
}