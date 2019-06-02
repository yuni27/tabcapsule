import React, { Component } from 'react';
import ReactNative, {
	Image,
	Text,
	Alert,
	View,
	Dimensions,
	TouchableOpacity,
	AsyncStorage,
	SafeAreaView,
	Linking,
	Easing
} from 'react-native';
import { Container, StyleProvider, Content, Input, Textarea } from 'native-base';
import colors from '../../config/colors';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import styles from '../../config/styles';
import Header from '../../utilities/Header';
import images from '../../config/images';

class QRCode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titlePage: 'Scan Me'
		};
	}

	render() {
		const { height, width } = Dimensions.get('window');
		return (
			<StyleProvider style={getTheme(material)}>
				<Container style={{ backgroundColor: 'white' }}>
					<SafeAreaView style={{ flex: 1, overflow: 'hidden' }}>
						<Header navigation={this.props.navigation} title={this.state.titlePage} />
						<View style={{ width: width, height: height }}>{this.renderHeader()}</View>
					</SafeAreaView>
				</Container>
			</StyleProvider>
		);
	}

	renderHeader() {
		return (
			<View style={styles.logoHome}>
				<Image
					source={images.images_logo}
					style={[
						styles.sizeLogo,
						{
							marginBottom: 20
						}
					]}
				/>
			</View>
		);
	}
}

export default QRCode;
