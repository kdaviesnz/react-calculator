import React, { Component } from 'react';
import './App.css';

class NumberButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onNumericKeyClick(e.target.innerHTML);
    }

    render() {
        return (
            (<a onClick={this.handleClick}>{this.props.value}</a>)
        );
    }
}

export default NumberButton;
