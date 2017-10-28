import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            operation:"+",
            total:0,
            displayText: "0",
            lastKeyValue:'0'
        }
    }

    render() {

        const NumberButton = (props) => <a onClick={props.onNumericKeyClick}>{props.value}</a>
        const OperationButton = (props) => <button onClick={props.onOperationKeyClick}>{props.value}</button>
        const CalcButton = (props) => <button onClick={props.onCalcButtonClick}>=</button>
        const ResetButton = (props) => <button onClick={props.onResetButtonClick}>C</button>
        const PercButton = (props) => <button onClick={props.onPercButtonClick}>%</button>
        const SignButton = (props) => <button onClick={props.onSignButtonClick}>+/-</button>
        const Display = (props) => <div className="Display" id="display">{props.displayText}</div>

        const handlePercButtonClick = (e) => {
            this.setState({
                displayText:  displayText/100 + ""
            });
        }

        const handleSignButtonClick = (e) => {
            this.setState({
                displayText:  displayText * -1
            });
        }

        const handleResetButtonClick = (e) => {
            this.setState({
                operation: "+",
                total: 0,
                displayText: "0",
                lastKeyValue:""
            });
        }

        const handleCalcButtonClick = (e) => {
            let operation = this.state.operation;
            let displayText = this.state.displayText;
            let total = this.state.total;
            switch (operation) {
                case "/":
                    displayText = total / displayText;
                    break;
                case "+":
                    displayText = total + displayText;
                    break;
                case "X":
                    displayText = total * displayText;
                    break;
                case "-":
                    displayText = total - displayText;
                    break;
                default:
                // do nothing
            }
            this.setState({
                operation: "+",
                total: 0,
                displayText,
                lastKeyValue:""
            });
        }

        const handleNumericKeyClick = (e) => {
            let keyValue = e.target.innerHTML;
            let currentDisplay =  ["+","-", "/","X"].indexOf(this.state.lastKeyValue)===-1?this.state.displayText:"";
            let displayText = "";
            if (currentDisplay==="0") {
                displayText = keyValue;
            } else {
                keyValue = keyValue ==="." && this.state.displayText.indexOf(".")!==-1?"":keyValue;
                displayText = currentDisplay + keyValue;
            }
            this.setState({
                operation: this.state.operation,
                total: this.state.total,
                displayText,
                lastKeyValue:keyValue
            });
        }

        const handleOperationKeyClick = (e) => {
            let keyValue = e.target.innerHTML;
            let displayText = this.state.displayText;
            let operation = this.state.operation;
            let total = this.state.total;
            switch(keyValue) {
                case "/":
                    total = displayText/1;
                    break;
                case "+":
                    total += displayText;
                    break;
                case "X":
                    total = displayText;
                    break;
                case "-":
                    total = displayText - total;
                    break;
                default:
                // do nothing
            }
            displayText = total;
            operation = keyValue;
            this.setState({
                operation: operation,
                total: total,
                displayText,
                lastKeyValue:keyValue
            });
        }

        const displayText = this.state.displayText;

        return (
            (<table className="App">
                <tbody>
                <tr>
                    <td colSpan="4" align="right"><Display displayText={displayText}/></td>
                </tr>
                <tr>
                    <td><ResetButton value="C" onResetButtonClick={handleResetButtonClick}/></td>
                    <td><SignButton value="+/-" onSignButtonClick={handleSignButtonClick}/></td>
                    <td><PercButton value="%" onPercButtonClick={handlePercButtonClick}/></td>
                    <td><OperationButton value="/" onOperationKeyClick={handleOperationKeyClick}/></td>
                </tr>
                <tr>
                    {[7,8,9].map((n,i) =>
                        <td><NumberButton value={n} onNumericKeyClick={handleNumericKeyClick}/></td>
                    )}
                    <td><OperationButton value="X" onOperationKeyClick={handleOperationKeyClick}/></td>
                </tr>
                <tr>
                    {[4,5,6].map((n,i) =>
                        <td><NumberButton value={n} onNumericKeyClick={handleNumericKeyClick}/></td>
                    )}
                    <td><OperationButton value="-" onOperationKeyClick={handleOperationKeyClick}/></td>
                </tr>
                <tr>
                    {[1,2,3].map((n,i) =>
                        <td><NumberButton value={n} onNumericKeyClick={handleNumericKeyClick}/></td>
                    )}
                    <td><OperationButton value="+" onOperationKeyClick={handleOperationKeyClick}/></td>
                </tr>
                <tr>
                    <td><NumberButton value="0" onNumericKeyClick={handleNumericKeyClick}/></td>
                    <td>&nbsp;</td>
                    <td><NumberButton value="." onNumericKeyClick={handleNumericKeyClick}/></td>
                    <td><CalcButton value="=" onCalcButtonClick={handleCalcButtonClick}/></td>
                </tr>
                </tbody>
            </table>)
        );
    }
}

// Define property types
App.propTypes = {
    operation:  PropTypes.string,
    total: PropTypes.number,
    displayText: PropTypes.string,
    lastKeyValue: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error("Last key must be a string") :
            (props[propName].length > 1) ?
                new Error("Key value must be one character.") :
                null
}

export default App;
