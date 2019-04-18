import React, { Component } from 'react';

class Button extends Component {
    render(){
        return(
            <div id={this.props.buttonID} className={"calc-button"} onClick={this.props.calcButtonClick}>
                <h4 className="calc-button-value">{this.props.buttonValue}</h4>
            </div>
        )
    }
}

export default Button;