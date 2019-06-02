import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';
// import { StackNavigator, createStackNavigator, NavigationActions } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FooterTab from './FooterTabMenu';
import Home from '../screens/01_home/Home';
import ListPromo from '../screens/02_promo/ListPromo';
import PromoDetail from '../screens/02_promo/PromoDetail';
import ListHotel from '../screens/03_hotel/ListHotel';
import HotelDetail from '../screens/03_hotel/HotelDetail';
import QRCode from '../screens/04_qrcode/QRCode';
import Help from '../screens/05_help/Help';
import colors from '../config/colors';
import styles from '../config/styles';

const animatedView = [ new Animated.Value(0), new Animated.Value(0) ];

// class MainNavigation extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isLoaded: false
// 		};
// 		setTimeout(() => this.setState({ isLoaded: true }), 1500);
// 		this.opacity(0);
// 	}

// 	render() {
// 		return <View style={{ flex: 1 }}>{this.render_main()}</View>;
// 	}

// 	opacity(value) {
// 		if (value < animatedView.length) {
// 			Animated.timing(animatedView[value], {
// 				toValue: 1,
// 				easing: Easing.linear,
// 				duration: 1000
// 			}).start(() => {
// 				if (value < animatedView.length) {
// 					this.opacityUp(value);
// 				}
// 			});
// 		}
// 	}

// 	opacityUp(value) {
// 		if (value < animatedView.length) {
// 			Animated.timing(animatedView[value], {
// 				toValue: 0,
// 				easing: Easing.linear,
// 				duration: 500
// 			}).start(() => {
// 				if (value < animatedView.length) {
// 					this.opacity(value + 1);
// 				}
// 			});
// 		}
// 	}

// 	render_main() {
// 		if (this.state.isLoaded == true) {
// 			return <Root />;
// 		} else {
// 			return (
// 				<View style={styles.containerAnimation}>
// 					<Animated.View
// 						style={{
// 							position: 'absolute',
// 							opacity: animatedView[0],
// 							transform: [
// 								{
// 									translateY: animatedView[0].interpolate({
// 										inputRange: [ 0, 0.5, 1 ],
// 										outputRange: [ 0, 1, 0 ]
// 									})
// 								}
// 							]
// 						}}
// 					/>
// 				</View>
// 			);
// 		}
// 	}
// }

const Root = createStackNavigator(
	{
		FooterTab: FooterTab,
		Home: Home,
		ListPromo: ListPromo,
		PromoDetail: PromoDetail,
		ListHotel: ListHotel,
		HotelDetail: HotelDetail,
		QRCode: QRCode,
		Help: Help
	},
	{
		initialRouteName: 'FooterTab',
		headerMode: 'none'
	}
);
const MainNavigation = createAppContainer(Root);
export default MainNavigation;
