import React, { Component } from 'react';

import HeroBlock from './HeroBlock.js';
import {
	Box,
	Card
} from '@material-ui/core';



export default class HeroesContainer extends Component {
	render() {
		return (
			<Card className = "heroContainer">
				<HeroBlock class = 'Scientist' quant = {1} />
				<hr />
				<HeroBlock class = 'Lumberjack' quant = {1} />
				<hr />
				<HeroBlock class = 'Miner' quant = {1} />
				<hr />
				<HeroBlock class = 'Farmer' quant = {1} />
				<hr />
				<HeroBlock class = 'Hunter' quant = {1} />
				<hr />
				<HeroBlock class = 'Priest' quant = {1} />
			</Card>
		);
	}
}
