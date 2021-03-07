import React from 'react';
import HomePage from '../HomePage';

class MyHeader extends React.Component {
    render() {
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      return (
        <HomePage style={mystyle} input type="text">Hello Style! </HomePage>
      );
    }
  }

  export default MyHeader;