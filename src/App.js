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
      composeMessage: true,
      subject: '',
      body: '',
      allSelected: false,
      someSelected: false,
    }
  }

  async componentDidMount() {
    let result = await fetch('http://localhost:8082/api/messages')
    let firstData = await result.json();
    let data = firstData.map(item => {
      if (item.selected === true) {
        item.selected = true
      } else {
        item.selected = false
      }
      return item
    })
    this.setState({
      messages: [...data],
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
      starred: true,
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
    let data = posted.map(item => {
      if (item.selected === true) {
        item.selected = true
      } else {
        item.selected = false
      }
      return item
    })
    this.setState({
      messages: [...data],
    })

  }

  addLabel = async (event) => {
    let selecters = []
    this.state.messages.map(item => {
      if (item.selected === true) {
        selecters.push(item.id)
      }
    })
    var patch = {
      messageIds: selecters,
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
    let data = posted.map(item => {
      if (item.selected === true) {
        item.selected = true
      } else {
        item.selected = false
      }
      return item
    })
    this.setState({
      messages: [...data],
    })
  }

  removeLabel = async (event) => {
    let selecters = []
    this.state.messages.map(item => {
      if (item.selected === true) {
        selecters.push(item.id)
      }
    })
    var patch = {
      messageIds: selecters,
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
    let data = posted.map(item => {
      if (item.selected === true) {
        item.selected = true
      } else {
        item.selected = false
      }
      return item
    })
    this.setState({
      messages: [...data],
    })
  }
  deleteMail = async () => {
    let selecters = []
    this.state.messages.map(item => {
      if (item.selected === true) {
        selecters.push(item.id)
      }
    })
    var patch = {
      messageIds: selecters,
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
    let data = posted.map(item => {
      if (item.selected === true) {
        item.selected = true
      } else {
        item.selected = false
      }
      return item
    })
    this.setState({
      messages: [...data],
    })
    this.setState({
      allSelected: false,
      someSelected: false,
    })
  }
  subject = (event) => {
    this.setState({
      subject: event.target.value
    })
  }
  body = (event) => {
    this.setState({
      body: event.target.value
    })
  }
  sendMessage = async (event) => {
    var newMessage = {
      subject: this.state.subject,
      read: false,
      selected: false,
      starred: false,
      labels: [],
      body: this.state.body,
      id: (this.state.messages.length)
    }
    await fetch('http://localhost:8082/api/messages', {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(response => response.json())
      .then((response) => {
        this.setState({
          messages: [...this.state.messages, response]
        })
      })
  }
  selectMail = async (event) => {
    var patch = {
      messageIds: [event.target.id],
      command: 'select',
      selected: true,
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
    let selectCount = 0
    let data = posted.map(item => {
      if (item.selected === true) {
        item.selected = true
        selectCount++
      } else {
        item.selected = false
      }
      return item
    })
    if (selectCount === this.state.messages.length) {
      this.setState({
        allSelected: true,
        someSelected: true,
      })
    } else if (selectCount > 0 && selectCount < this.state.messages.length) {
      this.setState({
        allSelected: false,
        someSelected: true,
      })
    } else {
      this.setState({
        allSelected: false,
        someSelected: false
      })
    }
    this.setState({
      messages: [...data],
    })
  }
  markRead = async () => {
    let selecters = []
    this.state.messages.map(item => {
      if (item.selected === true) {
        selecters.push(item.id)
      }
    })
    var patch = {
      messageIds: selecters,
      command: 'read',
      read: true,
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
    let data = posted.map(item => {
      if (item.selected === true) {
        item.selected = true
      } else {
        item.selected = false
      }
      return item
    })
    this.setState({
      messages: [...data],
    })
  }
  markUnread = async () => {
    let selecters = []
    this.state.messages.map(item => {
      if (item.selected === true) {
        selecters.push(item.id)
      }
    })
    var patch = {
      messageIds: selecters,
      command: 'read',
      read: false,

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
    let data = posted.map(item => {
      if (item.selected === true) {
        item.selected = true
      } else {
        item.selected = false
      }
      return item
    })
    this.setState({
      messages: [...data],
    })
  }
  selectAll = async () => {
    let selectedCount = 0
    this.state.messages.map(item => {
      if (item.selected === true) {
        selectedCount++
      }
    })
    if (selectedCount === this.state.messages.length) {
      let selecters = []
      this.state.messages.map(item => {
        selecters.push(item.id)
      })
      var patch = {
        messageIds: selecters,
        command: 'falseAll',
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
      let data = posted.map(item => {
        item.selected = false
        return item
      })
      this.setState({
        messages: [...data],
      })
      this.setState({
        allSelected: false,
        someSelected: false,
      })
    }
    else if (selectedCount >= 0
      && selectedCount < this.state.messages.length
    ) {
      let selecters = []
      this.state.messages.map(item => {
        selecters.push(item.id)
      })
      var patch = {
        messageIds: selecters,
        command: 'trueAll',
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
      let data = posted.map(item => {
        item.selected = true
        return item
      })
      this.setState({
        messages: [...data],
      })
      this.setState({
        allSelected: true,
        someSelected: true,
      })
    }

  }
  render() {
    return (
      <>
        <Toolbar plural={this.state.plural} allSelected={this.state.allSelected}
          someSelected={this.state.someSelected}
          selectAll={this.selectAll} markUnread={this.markUnread} markRead={this.markRead} deleteMail={this.deleteMail} unreadCount={this.state.unreadCount} messages={this.state.messages} toggleMessage={this.toggleMessage} composeMessage={this.state.composeMessage}
          addLabel={this.addLabel} removeLabel={this.removeLabel} />
        <Message sendMessage={this.sendMessage} body={this.body} subject={this.subject} composeMessage={this.state.composeMessage} />
        <MessageList selectedMail={this.state.selectedMail} selectMail={this.selectMail} messages={this.state.messages} markStarred={this.markStarred} />
      </>

    );
  }
}

export default App;
