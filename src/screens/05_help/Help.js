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

const { height, width } = Dimensions.get('window');
class Help extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titlePage: 'Help'
		};
	}

	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Container style={{ backgroundColor: 'white' }}>
					<SafeAreaView style={{ flex: 1, overflow: 'hidden' }}>
						<Header navigation={this.props.navigation} title={this.state.titlePage} />
						<View style={{ width: width, height: height }}>
							{this.renderHeader()}
							{this.renderInfo()}
						</View>
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

	renderInfo() {
		return (
			<View style={{ margin: 20, marginTop: 0 }}>
				<TouchableOpacity
					onPress={() => this._callPressed()}
					style={[ styles.headerContainer, { justifyContent: 'flex-start', marginBottom: 20 } ]}
				>
					<Image source={images.icon_phone} style={{ width: 20, height: 20 }} />
					<Text style={[ styles.Bold_24, { color: colors.white, width: width - 120, textAlign: 'center' } ]}>
						CALL
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => this._emailPressed()}
					style={[ styles.headerContainer, { justifyContent: 'flex-start' } ]}
				>
					<Image source={images.icon_email} style={{ width: 20, height: 20, tintColor: colors.white }} />
					<Text style={[ styles.Bold_24, { color: colors.white, width: width - 120, textAlign: 'center' } ]}>
						EMAIL
					</Text>
				</TouchableOpacity>
			</View>
		);
	}

	_callPressed() {
		var url = 'tel:+62812345678';
		Linking.canOpenURL(url)
			.then((supported) => {
				if (!supported) {
				} else {
					return Linking.openURL(url);
				}
			})
			.catch((err) => console.error('An error occurred', err));
	}

	_emailPressed() {
		var url = 'mailto:admin@tabcapsule.com';
		Linking.canOpenURL(url)
			.then((supported) => {
				if (!supported) {
				} else {
					return Linking.openURL(url);
				}
			})
			.catch((err) => console.error('An error occurred', err));
	}
}

export default Help;
