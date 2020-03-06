import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	Button,
	Box, 
	Container,
	Card,
} from '@material-ui/core';

import {
	buildingSelector,
} from '../Reducers/laborReducer.js'

class UpgradeBlock extends Component {

	render () {
		return (
			<Card className = 'upgradeBlockMainBody'>
				{this.props.upgrade.name}
				<hr />
				{this.props.upgrade.description}
				<hr />
				<Button>BUY</Button>
			</Card>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	upgrade: buildingSelector(state, ownProps.class),
});

export default connect(mapStateToProps)(UpgradeBlock);