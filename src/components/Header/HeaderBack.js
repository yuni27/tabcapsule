import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { Text } from 'native-base';

import colors from '../../config/colors';
import styles from '../../config/styles';
import image from '../../config/images';
import Helper from '../../utilities/Helper';

export default class HeaderBack extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.headerContainer}>
				<TouchableOpacity
					onPress={() => this.props.navigation.goBack()}
					style={[ styles.back, { backgroundColor: 'transparent' } ]}
				>
					<Image source={image.icon_back} style={[ styles.sizeIcon, { tintColor: colors.white } ]} />
				</TouchableOpacity>
				<Text style={[ styles.Bold_24, { color: colors.white } ]}>{this.props.title}</Text>
			</View>
		);
	}
}
