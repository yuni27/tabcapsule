//Fungsi
function focusNextField(target, nextField) {
	target.refs[nextField]._root.focus();
}

function capitalize_Words(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export default {
	focusNextField,
	capitalize_Words
};
