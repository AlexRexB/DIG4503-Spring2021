import React from 'react';
import MarketItem from '../MarketItem';

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }
    render() {
        return (
            <button onClick={() => {

            }}>Click me!</button>
        );
    }

}

export default Market;