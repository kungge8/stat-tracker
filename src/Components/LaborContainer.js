import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	Box,
	Card
} from '@material-ui/core';

class LaborContainer extends Component {
	render() {
		return (
			<Box>
				<Card className = "bodyContainer">
					LABORRRRRRR
				</Card>
			</Box>
		);
	}
}

export default connect( null )(LaborContainer);
