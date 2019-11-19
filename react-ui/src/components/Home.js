import React, { Component } from 'react';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			title: '',
			body: ''
		}
	}

	componentDidMount() {
		fetch(process.env.REACT_APP_API_URL + '/node/2?_format=json')
			.then(results => {
				return results.json();
			})
			.then(data => {
				// Add host to portrait image src, hacky
				let body = data.body[0].value.replace(/\/sites\//, process.env.REACT_APP_API_URL + '/sites/');
				this.setState({
					title: data.title[0].value,
					body: body
				});
			});
	}

	render() {
		import('./Home.scss');

		return (
			<div id="page-home" style={{ textAlign: 'center' }}>
				<div></div>
				<div dangerouslySetInnerHTML={{__html: this.state.body}} />
				<div></div>
			</div>
		)
	}
}

export default Home

