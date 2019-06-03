import { StyleSheet, Platform, Dimensions } from 'react-native';
import colors from './colors';
import fonts from './fonts';

var { height, width } = Dimensions.get('window');
export default StyleSheet.create({
	//fonts
	Bold_14: {
		fontFamily: fonts.custom.narrowBold,
		fontSize: 14
	},
	Bold_18: {
		fontFamily: fonts.custom.narrowBold,
		fontSize: 18
	},
	Bold_24: {
		fontFamily: fonts.custom.narrowBold,
		fontSize: 24
	},
	Reg_14: {
		fontFamily: fonts.custom.narrowReg,
		fontSize: 14
	},
	Reg_18: {
		fontFamily: fonts.custom.narrowReg,
		fontSize: 18
	},
	Reg_24: {
		fontFamily: fonts.custom.narrowReg,
		fontSize: 24
	},

	//Component
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 50,
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: Platform.OS === 'android' ? 0 : 20,
		backgroundColor: colors.primary,
		alignItems: 'center'
	},
	logoHome: {
		height: 225,
		borderWidth: 5,
		borderColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		width: width - 40,
		margin: 20
	},
	buttonSquare: {
		height: 50,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	slide: {
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},
	wrapper: {
		backgroundColor: colors.primary
	},
	list: {
		height: 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		alignItems: 'center',
		borderBottomColor: colors.primary,
		borderBottomWidth: 1
	},
	grid: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap'
		// flex: 1,
	},
	listContainer: {
		width: '100%'
	},
	modal: {
		width: width / 2,
		marginLeft: width / 2,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: -height * 2 / 3,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	},
	rowModal: {
		backgroundColor: 'transparent',
		borderTopWidth: 1,
		borderTopColor: colors.primary,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		width: width / 2
	},
	tableVoucher: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.primary1,
		borderWidth: 1,
		padding: 16
	},
	modalShare: {
		width: width,
		justifyContent: 'flex-end',
		marginBottom: 80
	},
	containerQrcodeScan: {
		height: height,
		backgroundColor: colors.black,
		paddingTop: (height - 100 - height / 2) / 2
	},
	contentQrcode: {
		height: height / 2,
		width: width
	},
	iconHelp: {
		width: 50,
		height: 50,
		borderColor: colors.primary,
		borderWidth: 3,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	//size
	sizeLogo: {
		width: 1182 / 5,
		height: 553 / 5
	},
	sizeIcon: {
		width: 30,
		height: 30,
		tintColor: colors.primary
	}
});
