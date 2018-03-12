import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from './my-redux';


export class Provider extends React.Component{
  static childContextTypes = {
    store:PropTypes.object
  }
  constructor(props,context){
    super(props,context)
    this.store = props.store
  }
   getChildContext(){
    return {store:this.store}
  }
  render(){
    return this.props.children
  }
}

export const connect=(mapStateToProps=state=>state,mapDispatchToProps={})=>(Com)=>{
  return class newCom extends React.Component{
    static contextTypes = {
      store:PropTypes.object
    }
    constructor(props,context){
      super(props,context)
      this.state = {
        props:{}
    }
  }
    componentDidMount(){
      const {store} = this.context
      store.subscribe(()=>this.update())
      this.update()
    }

    update(){
      const {store} = this.context
      const stateProps = mapStateToProps(store.getState())
      const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
      this.setState({
        props:{
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }

    render(){
      return <Com {...this.state.props}/>
    }
 }
}