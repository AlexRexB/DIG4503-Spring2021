import React from 'react';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1 style={mystyle}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
      <HomePage firstName='Alex'/>
    );
  }
}

export default App;

