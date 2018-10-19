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
      selectedMail: [
        { 1: { selected: false, showbody: false } }
      ],
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

  markStarred = async (event) => {
    var patch = {
      messageIds: [event.target.id],
      command: 'star',
      star: true,
    }
    const response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(patch),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const posted = await response.json()
    this.setState({
      messages: posted
    })
  }

  addLabel = async (event) => {
    var patch = {
      messageIds: [6],
      command: 'addLabel',
      label: event.target.value
    }
    const response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(patch),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const posted = await response.json()
    this.setState({
      messages: posted
    })
  }

  removeLabel = async (event) => {
    var patch = {
      messageIds: [6],
      command: 'removeLabel',
      label: event.target.value
    }
    const response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(patch),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const posted = await response.json()
    this.setState({
      messages: posted
    })
  }
  deleteMail = async () => {
    var patch = {
      messageIds: [5],
      command: 'delete',
    }
    const response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(patch),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const posted = await response.json()
    this.setState({
      messages: posted
    })
  }
  render() {
    return (
      <>
        <Toolbar deleteMail={this.deleteMail} unreadCount={this.state.unreadCount} messages={this.state.messages} toggleMessage={this.toggleMessage} composeMessage={this.state.composeMessage}
          addLabel={this.addLabel} removeLabel={this.removeLabel} />
        <Message composeMessage={this.state.composeMessage} />
        <MessageList messages={this.state.messages} markStarred={this.markStarred} />
      </>

    );
  }
}

export default App;
