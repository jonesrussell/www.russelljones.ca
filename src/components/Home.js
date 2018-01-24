import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component { 
	render() { 
		import('./Home.scss');

		return (
			<div id="page-home" style={{ textAlign: 'center' }}>
				<div className="portrait">
					<img src="images/russell-jones.png" alt="Russell Jones" />
				</div>
				<h1>Hi, my name is <strong>Russell Jones</strong>.</h1>
				<h2>I'm a web developer / i.t. manager.</h2>
				<p>
					<Button outline color="secondary" tag="a" href="/about">More about me</Button>
				</p>
			</div>
		)
	}	
}

export default Home
