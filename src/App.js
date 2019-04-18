// React Core
import React, { Component } from 'react';

// Custom Components
import Calculator from '../src/components/Calculator';

// Styling
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2 id="title">React Calculator</h2>
				<div id="container">
					<Calculator />
				</div>
			</div>
		);
	}
}

export default App;
