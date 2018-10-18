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
      composeMessage: true,
    }
  }

  async componentDidMount() {
    let result = await fetch('http://localhost:8082/api/messages')
    let data = await result.json();
    this.setState({
      messages: data,
    })
  }

  toggleMessage = () => {
    if (this.state.composeMessage === true) {
      this.setState({
        composeMessage: false
      })
    } else {
      this.setState({
        composeMessage: true
      })
    }
  }

  // markAsRead = async (unreadSelected) => {
  //   var patch = {
  //     messageIds: unreadSelected,
  //     command: 'read',
  //     read: true
  //   }

  //   const response = await fetch('http://localhost:8082/api/messages', {
  //     method: 'PATCH',
  //     body: JSON.stringify(patch),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   const posted = await response.json()
  //   this.setState({
  //     initialMessages: posted
  //   })
  // }

  render() {
    return (
      <>
        <Toolbar messages={this.state.messages} toggleMessage={this.toggleMessage} composeMessage={this.state.composeMessage} />
        <Message composeMessage={this.state.composeMessage} />
        <MessageList messages={this.state.messages} />
      </>

    );
  }
}

export default App;
