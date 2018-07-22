import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';

var config = {
 apiKey: "AIzaSyCD-UBqHzBZ6vMs4DEcGjLcPG1xY7gjBfA",
 authDomain: "bloc-chat-react-3fd65.firebaseapp.com",
 databaseURL: "https://bloc-chat-react-3fd65.firebaseio.com",
 projectId: "bloc-chat-react-3fd65",
 storageBucket: "bloc-chat-react-3fd65.appspot.com",
 messagingSenderId: "818611008638"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      activeRoom:'',
      activeUser:''
    }
    this.setActiveRoom=this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

setUser(user){
  this.setState({activeUser:user})
}

  setActiveRoom(room){
    this.setState({activeRoom:room})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <section id = "sidebar">
        <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          setActiveRoom={this.setActiveRoom}/>
          </section>
          <section id = "main">
          <User
            firebase ={firebase}
            setUser={this.setUser}
            user={this.state.activeUser}
            />
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}/>
          </section>
          </main>
      </div>
    );
  }
}
export default App;
