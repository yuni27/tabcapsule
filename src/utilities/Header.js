import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Image, View } from 'react-native';
import { Text } from 'native-base';
import ModalWrapper from 'react-native-modal-wrapper';

import colors from '../config/colors';
import styles from '../config/styles';
import image from '../config/images';

export default class Header1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleMenu: false
		};
	}

	render() {
		var { height, width } = Dimensions.get('window');
		return (
			<View style={styles.headerContainer}>
				<Text style={[ styles.Bold_24, { color: colors.white } ]}>{this.props.title}</Text>
				<TouchableOpacity onPress={() => this.setState({ visibleMenu: true })} style={{ width: 20 }}>
					<Image source={image.icon_points} style={{ width: 20, height: 20 }} />
				</TouchableOpacity>
				<ModalWrapper
					style={styles.modal}
					onRequestClose={() => this.setState({ visibleMenu: false })}
					visible={this.state.visibleMenu}
					position="right"
				>
					<TouchableOpacity
						last
						style={styles.rowModal}
						// onPress={() => this.onOpenShare()}
					>
						<Text allowFontScaling={false} style={[ styles.Reg_18 ]}>
							Benefit as Member
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						last
						style={styles.rowModal}
						// onPress={() => this.onOpenShare()}
					>
						<Text allowFontScaling={false} style={[ styles.Reg_18 ]}>
							Share
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						last
						style={styles.rowModal}
						// onPress={() => this._AboutUs()}
					>
						<Text allowFontScaling={false} style={[ styles.Reg_18 ]}>
							About Us
						</Text>
					</TouchableOpacity>
				</ModalWrapper>
			</View>
		);
	}
}
