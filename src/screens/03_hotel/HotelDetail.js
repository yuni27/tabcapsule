import React, { Component } from 'react';
import {
	Dimensions,
	TouchableOpacity,
	Image,
	View,
	AsyncStorage,
	SafeAreaView,
	RefreshControl,
	Clipboard,
	Alert,
	Linking
} from 'react-native';
import { Text, Container, List, StyleProvider, Content } from 'native-base';
// import moment from 'moment';
import screen from '../../navigation/ChooseScreen';
import Header from '../../utilities/HeaderBack';
import colors from '../../config/colors';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import styles from '../../config/styles';
import images from '../../config/images';

const { height, width } = Dimensions.get('window');
class HotelDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// data: props.navigation.state.params != null ? props.navigation.state.params.data : '',
			titlePage: 'Detail Hotel',
			data: {
				end_date: '27 Juni 2019',
				description: 'Hanya Rp 99.000 per malam',
				term_condition: '- Berlaku sebelum 27 Juni 2019',
				min_amount: 100000,
				max_value: 10000,
				code: 'tab99',
				value: 10
			}
		};
	}

	findAndReplace(text, target, replacement) {
		var i = 0,
			length = text.length;

		for (i; i < length; i++) {
			text = text.replace(target, replacement);
		}

		return text;
	}

	render() {
		// var date = moment(this.state.data.end_date).format('DD MMMM YYYY');
		var description = `${this.findAndReplace(this.state.data.description, '\r\n', '')}`;
		var term_condition = `${this.findAndReplace(this.state.data.term_condition, '\r\n', '')}`;
		return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<SafeAreaView style={{ flex: 1, overflow: 'hidden' }}>
						<Header navigation={this.props.navigation} title={this.state.titlePage} />
						<Content>
							<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
								<Image source={images.images_map} style={{ width: width, height: 250 / 500 * width }} />
								<View style={{ width: width - 40, marginLeft: 20 }}>
									<Text
										style={[
											styles.Bold_24,
											{
												color: colors.darkGrey,
												marginTop: 20
											}
										]}
									>
										tab capsule hotel Kayoon
									</Text>
									<Text
										style={[
											styles.Reg_18,
											{
												color: colors.darkGrey,
												marginTop: 20
											}
										]}
									>
										Kayoon Street No.11 D, Embong Kaliasin{'\n'}Genteng, Surabaya City{'\n'}East
										Java{'\n'}60271
									</Text>
									<TouchableOpacity
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center'
										}}
										onPress={() => this._callPressed()}
									>
										<Text
											style={[
												styles.Reg_18,
												{
													color: colors.darkGrey,
													marginTop: 20
												}
											]}
										>
											Contact :{'\n'}
											(031)12345678
										</Text>
										<View style={styles.iconHelp}>
											<Image source={images.icon_phone} style={[ styles.sizeIcon ]} />
										</View>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
											marginTop: 20
										}}
										onPress={() => this._emailPressed()}
									>
										<Text
											style={[
												styles.Reg_18,
												{
													color: colors.darkGrey,
													marginTop: 20
												}
											]}
										>
											E-mail :{'\n'}
											tabcapsule@gmail.com
										</Text>
										<View style={styles.iconHelp}>
											<Image source={images.icon_email} style={[ styles.sizeIcon ]} />
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</Content>
						<TouchableOpacity onPress={() => screen.PromoDetail(this.props.navigation)}>
							<View
								style={{
									backgroundColor: colors.primary,
									justifyContent: 'center',
									alignItems: 'center',
									height: 50
								}}
							>
								<Text style={[ styles.Bold_18, { color: colors.white } ]}>Lihat Promo Detail</Text>
							</View>
						</TouchableOpacity>
					</SafeAreaView>
				</Container>
			</StyleProvider>
		);
	}

	_callPressed() {
		var url = 'tel:+3112345678';
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
		var url = 'mailto:tabcapsule@gmail.com';
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

export default HotelDetail;
