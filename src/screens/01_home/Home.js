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
import Swiper from 'react-native-swiper';
import ModalWrapper from 'react-native-modal-wrapper';
import screen from '../../navigation/ChooseScreen';
import colors from '../../config/colors';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import styles from '../../config/styles';
import Header from '../../components/Header/Header';
import images from '../../config/images';

const { height, width } = Dimensions.get('window');

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titlePage: 'My Tab Capsule Hotel',
			banner: [
				{ image: images.images_promo1 },
				{ image: images.images_promo2 },
				{ image: images.images_promo3 }
			],
			visibleLogin: false,
			cardnumber: ''
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
							{this.renderSwiper()}
							{this.renderGift()}
						</View>
					</SafeAreaView>
					<ModalWrapper
						style={{
							width: width - 100,
							height: 250
						}}
						onRequestClose={() => this.setState({ visibleLogin: false })}
						visible={this.state.visibleLogin}
						position="top"
					>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Text style={[ styles.Reg_24, { marginBottom: 20 } ]}>Connect to your member card</Text>
							<View
								style={[
									styles.buttonSquare,
									{ width: width - 140, alignItems: 'flex-start', backgroundColor: colors.darkGrey }
								]}
							>
								<Input
									placeholderTextColor={colors.white}
									placeholder="Card number"
									style={[ styles.Reg_18, { color: colors.white } ]}
									autoCorrect={false}
									autoCapitalize="none"
									returnKeyType={'next'}
									underlineColorAndroid="transparent"
									keyboardType={'numeric'}
									onChangeText={(cardnumber) => this.setState({ cardnumber })}
									value={this.state.cardnumber}
								/>
							</View>
							<TouchableOpacity
								style={[ styles.buttonSquare, { width: width - 140, marginTop: 20 } ]}
								onPress={() => this.setState({ visibleLogin: false })}
							>
								<Text allowFontScaling={false} style={[ styles.Reg_18, { color: colors.white } ]}>
									Connect Now
								</Text>
							</TouchableOpacity>
						</View>
					</ModalWrapper>
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
				<TouchableOpacity
					style={[
						styles.buttonSquare,
						{
							width: 1182 / 5
						}
					]}
					onPress={() => this.setState({ visibleLogin: true })}
				>
					<Text style={[ styles.Bold_18, { color: colors.white } ]}>CONNECT YOUR MEMBER CARD</Text>
				</TouchableOpacity>
			</View>
		);
	}

	renderSwiper() {
		var listImages = [];
		if (this.state.banner != null) {
			this.state.banner.map((data, i) => {
				listImages.push(
					<TouchableOpacity
						key={i}
						style={styles.slide}
						onPress={() => screen.PromoDetail(this.props.navigation)}
					>
						<Image
							source={data.image}
							// source={images.voucher}
							style={{
								height: 250 / 500 * width,
								width: width,
								backgroundColor: colors.primary
							}}
						/>
					</TouchableOpacity>
				);
			});
			return (
				<View style={{ flexDirection: 'row', height: 250 / 500 * width }}>
					<Swiper
						style={styles.wrapper}
						showsButtons={false}
						showsPagination={false}
						renderPagination={this.renderPagination}
						loop={true}
					>
						{listImages}
					</Swiper>
				</View>
			);
		}
	}

	renderGift() {
		return (
			<TouchableOpacity
				style={[
					styles.buttonSquare,
					{
						backgroundColor: colors.secondary,
						height: 80,
						flexDirection: 'row',
						margin: 20
					}
				]}
				onPress={() => this.showAlert()}
			>
				<Image source={images.icon_gift} style={{ width: 50, height: 50, marginRight: 20 }} />
				<Text style={[ styles.Bold_24, { color: colors.white } ]}>MEMBER'S GIFT</Text>
			</TouchableOpacity>
		);
	}

	showAlert() {
		Alert.alert('Maaf', 'Gift dapat diakses setelah login dengan kartu member', [ { text: 'Ok' } ]);
	}
}

export default Home;
