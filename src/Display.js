import React, { Component } from 'react';
import './App.css';

class Display extends Component {

    render() {
        const displayText = this.props.displayText;
        return (
            (<div className="Display" id="display">
                {displayText}
            </div>)
        );
    }
}

export default Display;
