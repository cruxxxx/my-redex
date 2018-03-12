import React, { Component } from 'react';
import { connect } from './my-react-redux'
import {minus,add,async} from './app.redux'


class App extends Component {
  render() {
    return (
      <div >
        <p>
          Num:{this.props.num}
        </p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>  
        <button onClick={this.props.async}>++</button>                      
      </div>
    );
  }
}

App = connect(
  state=>({num:state}),
  { add,minus,async }
)(App)

export default App;
