import React, { Component } from 'react';
import './App.css';

class DecimalButton extends Component {

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        document.getElementById("display").innerHTML += document.getElementById("display").innerHTML.indexOf(".") === -1 ? ".":"";
    }

    render() {
        return (
            (<a onClick={this.handleClick}>{this.props.value}</a>)
        );
    }
}

export default DecimalButton;
