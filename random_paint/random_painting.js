function random_color(id){
	var colors = [];
	for(var i=0; i<3; i++){
		var temp = Math.floor(Math.random() * 256);	
		colors.push(temp);
	}
	var thisObj = document.getElementById(id);
	thisObj.style.backgroundColor = "#"+(colors[0]).toString(16)+(colors[1]).toString(16)+(colors[2]).toString(16);
}