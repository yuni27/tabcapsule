import React, { Component } from 'react';
import {
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Dimensions,
	Image,
	SafeAreaView,
	StatusBar
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import colors from '../config/colors';
import Home from '../screens/01_home/Home';
import ListPromo from '../screens/02_promo/ListPromo';
import ListHotel from '../screens/03_hotel/ListHotel';
import QRCode from '../screens/04_qrcode/QRCode';
import Help from '../screens/05_help/Help';
import images from '../config/images';

export default class FooterTabMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'home'
		};
	}

	render() {
		var { height, width } = Dimensions.get('window');
		return (
			<Container style={{ backgroundColor: colors.primary, overflow: 'hidden' }}>
				<StatusBar backgroundColor={colors.primary} barStyle="light-content" />
				<SafeAreaView style={{ flex: 1, overflow: 'hidden' }}>
					<View
						style={{ flex: 1, backgroundColor: 'white', overflow: 'hidden', width: width, height: height }}
					>
						{this.renderSelectedTab()}
					</View>
					<View style={{ height: 60 }}>
						<View style={{ flex: 1, flexDirection: 'row', backgroundColor: colors.primary }}>
							<TouchableWithoutFeedback
								style={{ flex: 1 }}
								onPress={() => this.setState({ selectedTab: 'home' })}
							>
								<View
									style={{
										flex: 1,
										alignItems: 'center',
										justifyContent: 'center',
										borderBottomWidth: 2,
										borderColor: this.state.selectedTab == 'home' ? 'white' : colors.primary
									}}
								>
									<Image
										resizeMode="contain"
										source={images.icon_home}
										style={{ width: 25, height: 25 }}
									/>
									<Text style={{ fontSize: 12, marginTop: 4, color: 'white' }}>Home</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								style={{ flex: 1 }}
								onPress={() => this.setState({ selectedTab: 'promo' })}
							>
								<View
									style={{
										flex: 1,
										alignItems: 'center',
										justifyContent: 'center',
										borderBottomWidth: 2,
										borderColor: this.state.selectedTab == 'promo' ? 'white' : colors.primary
									}}
								>
									<Image
										resizeMode="contain"
										source={images.icon_promo}
										style={{ width: 25, height: 25 }}
									/>
									<Text style={{ fontSize: 12, marginTop: 4, color: 'white' }}>Promo</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								style={{ flex: 1 }}
								onPress={() => this.setState({ selectedTab: 'hotel' })}
							>
								<View
									style={{
										flex: 1,
										alignItems: 'center',
										justifyContent: 'center',
										borderBottomWidth: 2,
										borderColor: this.state.selectedTab == 'hotel' ? 'white' : colors.primary
									}}
								>
									<Image
										resizeMode="contain"
										source={images.icon_hotel}
										style={{ width: 25, height: 25 }}
									/>
									<Text style={{ fontSize: 12, marginTop: 4, color: 'white' }}>Hotel</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								style={{ flex: 1 }}
								onPress={() => this.setState({ selectedTab: 'code' })}
							>
								<View
									style={{
										flex: 1,
										alignItems: 'center',
										justifyContent: 'center',
										borderBottomWidth: 2,
										borderColor: this.state.selectedTab == 'code' ? 'white' : colors.primary
									}}
								>
									<Image
										resizeMode="contain"
										source={images.icon_qrcode}
										style={{ width: 25, height: 25 }}
									/>
									<Text style={{ fontSize: 12, marginTop: 4, color: 'white' }}>Scan</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								style={{ flex: 1 }}
								onPress={() => this.setState({ selectedTab: 'help' })}
							>
								<View
									style={{
										flex: 1,
										alignItems: 'center',
										justifyContent: 'center',
										borderBottomWidth: 2,
										borderColor: this.state.selectedTab == 'help' ? 'white' : colors.primary
									}}
								>
									<Image
										resizeMode="contain"
										source={images.icon_help}
										style={{ width: 25, height: 25 }}
									/>
									<Text style={{ fontSize: 12, marginTop: 4, color: 'white' }}>Help</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</SafeAreaView>
			</Container>
		);
	}

	_onLayout = (event) => {
		let layout = event.nativeEvent.layout;

		this.setState({
			saveWidth: layout.width,
			saveHeight: layout.height
		});
	};

	_close() {
		this.setState({ visibleRaffle: false });
	}

	renderSelectedTab() {
		switch (this.state.selectedTab) {
			case 'home':
				return <Home navigation={this.props.navigation} />;
				break;
			case 'promo':
				return <ListPromo navigation={this.props.navigation} />;
				break;
			case 'hotel':
				return <ListHotel navigation={this.props.navigation} />;
				break;
			case 'code':
				return <QRCode navigation={this.props.navigation} />;
				break;
			case 'help':
				return <Help navigation={this.props.navigation} />;
				break;
			default:
		}
	}
}
