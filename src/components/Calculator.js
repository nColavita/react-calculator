import React, { Component } from 'react';
import Button from '../components/Button';

class Calculator extends Component{
	state = {
		evaluation: "",
		currentnum: "0",
		result: "",
		expression_click_count: 0,
		isEqual: false
	}

	onCalcButtonClick = (e) => {
		const input = e.target.id;
		console.log(input);

		if( !parseInt(input) ){
			// input is an expression
			this.setState({
				currentnum: ""
			})
			if( input === "=" ){
				// evaluate current evaluation string
				this.setState({
					result: eval(this.state.evaluation),
					isEqual: true
				})
			}
			if( input === "C" ){
				// reset to default state values
				this.setState({
					result: "",
					evaluation: "",
					currentnum: "0",
					isEqual: false,
					expression_click_count: 0
				})
			}
			if(this.state.expression_click_count < 1 && input !== "C" && input !== "="){
				// if an expression other than equals or clear are hit
				this.setState({
					expression_click_count: this.state.expression_click_count + 1,
					evaluation: this.state.evaluation + input
				})
			}else{
				this.setState({
					result: eval(this.state.evaluation),
					expression_click_count: 0,
				})
			}
		}

		if( parseInt(input) ){
			// input is a number
			this.setState({
				currentnum: this.state.currentnum + input,
				evaluation: this.state.evaluation + input
			})
		}		
	}

	displayCalcInput = () => {
		if(this.state.isEqual){
			return(
				this.state.result
			)
		}else{
			return(
				this.state.currentnum
			)
		}
	}

	createCalcButtons() {
		const calculator_buttons = ["C","+/-","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="];
		let num = 0;
		
		return(
			calculator_buttons.map(calculator_button => (
				<Button 
					key={num+=1}
					buttonID={calculator_button}
					buttonValue={calculator_button}
					calcButtonClick={this.onCalcButtonClick}
				/>
			))
		)
	}

	render() {
		return (
			<div id="container-calc">
				<div className="result">
					<p>{this.displayCalcInput()}</p>
				</div>
				<div className="calculator">
					{this.createCalcButtons()}
				</div>
				<div id="panel">
					<h2>Current Num: {this.state.currentnum}</h2>
					<h2>Evaluation: {this.state.evaluation}</h2>
					<h2>Result: {this.state.result}</h2>
				</div>
			</div>
		);
	}
}

export default Calculator;