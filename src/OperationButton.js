import React, { Component } from 'react';
import './App.css';

class OperationButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onOperationKeyClick(e.target.innerHTML);
    }

    render() {
        return (
            (<button onClick={this.handleClick}>{this.props.value}</button>)
        );
    }
}

export default OperationButton;
