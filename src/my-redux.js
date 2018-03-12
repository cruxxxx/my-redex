
export function createStore(reducer, enhancer){
  if(enhancer){
    return enhancer(createStore)(reducer)
  }
  let currentStore = {}
  let currentListener = []

  function getState(){
    return currentStore
  }
  function subscribe(listener){
    currentListener.push(listener)
  }
  function dispatch(action){
    currentStore = reducer(currentStore,action)
    currentListener.forEach(v=>v())
    return action
  }
  dispatch({type:'@@xiaoxiannv'})
  return {getState,subscribe,dispatch}
}
function bindActionCreator(creator,dispatch){
  return (...args) => dispatch(creator(...args))
}

export function applyMiddleware(...middlewares){
  return createStore=>(...args)=>{
    const store = createStore(...args)
    let dispatch = store.dispatch
    const midApi = {
      getState:store.getState,
      dispatch:(...args)=>dispatch(...args)
    }
    const middlewareChain = middlewares.map(middleware=>middleware(midApi))
    dispatch = compose(...middlewareChain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

export function compose(...funcs){
  if(funcs.length===0){
    return arg=>arg
  }
  if(funcs.length===1){
    return funcs[0]
  }
  return funcs.reduce((ret,item)=>(...args)=>ret(item(...args)))

}



export function bindActionCreators(creators,dispatch){
  let bound = {}
  Object.keys(creators).forEach(v=>{
    console.log(v)
    let creator = creators[v]
    bound[v] = bindActionCreator(creator,dispatch)
  })
  return bound
}