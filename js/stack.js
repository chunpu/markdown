var lastTime = +new Date();
var needRefresh = false;

var shortest = 300;


function refresh() {
	var now = +new Date();
	//console.log(now, lastTime);
	if (now - lastTime < shortest) {
		needRefresh = true;
		return;
	}
	var text = editor.getValue();
	text = text.replace(/\s+$/, '');
	preview.innerHTML = marked(text);
	lastTime = +new Date();
}

setInterval(function(){
	var now = +new Date();
	if (now - lastTime < shortest) {
		return;
	} 
	if (needRefresh) {
		refresh();
	}
}, shortest);
