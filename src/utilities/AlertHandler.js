import React, { Component } from 'react';
import { Alert } from 'react-native';

function showAlert(title, message) {
	Alert.alert(title, message, [ { text: 'OK' } ]);
}

function showErrorAlert(message) {
	Alert.alert('Error', message, [ { text: 'OK' } ]);
}

function showFailedAlert(message) {
	Alert.alert('Failed', message, [ { text: 'OK' } ]);
}

function showSuccessAlert(message) {
	Alert.alert('Success', message, [ { text: 'OK' } ]);
}

function capitalize_Words(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export default {
	showAlert,
	showErrorAlert,
	showFailedAlert,
	showSuccessAlert,
	capitalize_Words
};
