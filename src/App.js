import React, { Component } from 'react';
import './App.css';
import Message from './component/Message'
import MessageList from './component/MessageList'
import Toolbar from './component/Toolbar'


class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      selectedCount: 0,
    }
  }


  async componentDidMount() {
    let result = await fetch('http://localhost:8082/api/messages')
    let data = await result.json();
    this.setState({
      messages: data,
    })
  }



  render() {
    return (
      <>
        <Toolbar />
        <Message />
        <MessageList messages={this.state.messages} />
      </>

    );
  }
}

export default App;
