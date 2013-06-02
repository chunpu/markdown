document.onkeydown = function(e) {
	//console.log(e);
	if (e.keyCode === 83 && e.ctrlKey === true) {
		console && console.log('save');
		e.preventDefault();
		if ('localStorage' in window) {
			var name = document.getElementById('filename').value;
			localStorage.setItem('last', name);			
			localStorage.setItem(name, editor.getValue());			
		}
	}
}