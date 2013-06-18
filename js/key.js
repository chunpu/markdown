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

function genMD(a) {
	var text = editor.getValue();	
	if (navigator.platform.match('Win')) {
		console.log(11);
		text = text.replace(/\n/g, '\r\n');
	}	
	text = Base64.encode(text);	
	a.href = 'data:application/octet-stream;charset=utf-8;base64,' + text;
	var name = document.getElementById('filename').value;
	a.download = name + '.md';
}

function genHTML(a) {
	var text = document.querySelector('.preview').innerHTML;
	var template = document.getElementById('template').innerHTML;
	var name = document.getElementById('filename').value;
	var html = template.replace(/mytitle/, name).replace(/mybody/, text);;
	html = Base64.encode(html);
	a.href = 'data:application/octet-stream;charset=utf-8;base64,' + html;	
	a.download = name + '.html';
}
