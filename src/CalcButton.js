import React, { Component } from 'react';
import './App.css';

class CalcButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onCalcButtonClick();
    }

    render() {
        return (
            (<button onClick={this.handleClick}>{this.props.value}</button>)
        );
    }
}

export default CalcButton;
