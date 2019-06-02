import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

//Fungsi
function focusNextField(target, nextField) {
	target.refs[nextField]._root.focus();
}

function capitalize_Words(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

//Navigate
async function PromoDetail(target) {
	await target.navigate('PromoDetail', {});
}

async function HotelDetail(target) {
	await target.navigate('HotelDetail', {});
}

export default {
	focusNextField,
	capitalize_Words,
	PromoDetail,
	HotelDetail
};
