import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class App extends Component {

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Hello");
  }

  render (){
    return (
    <div className="App">
      <Widget 
        handleNewUserMessage={this.handleNewUserMessage}
      />
    </div>)
  }
}

export default App;
