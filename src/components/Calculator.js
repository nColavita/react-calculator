import React, { Component } from 'react';
import Button from '../components/Button';

class Calculator extends Component{
	state = {
		evaluation: "",
		result: null,
		screen: null
	}

	onCalcButtonClick = (e) => {
		console.log(e.target.id);
		if(e.target.id !== "=" && e.target.id !== "C" && e.target.id !== "+/-"){
			this.setState({
				evaluation: this.state.evaluation + e.target.id
			});
		}else if(e.target.id === "="){
			this.setState({
				result: eval(this.state.evaluation)
			})
		}else if(e.target.id === "C"){
			this.setState({
				evaluation: "",
				result: null
			})
		}
	}

	showResultArea = () => {
		return(
			this.state.evaluation
		)
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
					<p>{this.showResultArea()}</p>
				</div>
				<div className="calculator">
					{this.createCalcButtons()}
				</div>
				<div id="panel">
					<h2>Evaluation: {this.state.evaluation}</h2>
					<h2>Result: {this.state.result}</h2>
				</div>
			</div>
		);
	}
}

export default Calculator;