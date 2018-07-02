import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

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
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}
export default App;
