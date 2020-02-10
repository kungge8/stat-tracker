import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCoin } from '../Actions/villagerActions.js';

import '../Styling/general.css';

class FightScene extends Component {
	componentDidMount () {
	    setInterval(()=> {
	    	this.props.addCoin();
	    }, 1000 / (this.props.state.game.speed * this.props.state.game.speedMult));
	}

	componenDidUpdate (){
		clearInterval();
	    setInterval(()=> {
	    	this.props.addCoin();
	    }, 1000 / (this.props.state.game.speed * this.props.state.game.speedMult));
	}

	componentWillUnmount () {
		clearInterval();
	}


	render() {
		const c = this.props.state.currency;
		return (
			<div className = 'fightScene'>
				{Object.entries(c).map((n) => {
					const y = n[1];
					return (
						<text key = {y.name}>
							{y.name}: {y.quant}
						</text>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	state
});

export default connect (mapStateToProps, { addCoin })(FightScene);