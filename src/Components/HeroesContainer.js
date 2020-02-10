import React, { Component } from 'react';
import HeroBlock from './HeroBlock.js';

export default class HeroesContainer extends Component {
	render() {
		return (
			<div className = "heroContainer">
				<HeroBlock class = 'Worker' quant = {1} />
				<HeroBlock class = 'Scientist' quant = {1} />
				<HeroBlock class = 'Lumberjack' quant = {1} />
				<HeroBlock class = 'Miner' quant = {1} />
				<HeroBlock class = 'Farmer' quant = {1} />
				<HeroBlock class = 'Hunter' quant = {1} />
				<HeroBlock class = 'Priest' quant = {1} />
			</div>
		);
	}
}
