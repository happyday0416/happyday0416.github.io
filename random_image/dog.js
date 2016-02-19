var temp = 0;

$(document).ready(function(){
    $("#click").click(function(){
    	chooseImage();	
      $("img").fadeIn(1000);
      $("#frame").slideDown("slow");
    });
  });

function chooseImage(){
	temp = Math.floor(Math.random()*5)+1;
	var obj = document.getElementById("img_index");
	obj.src = "dog" + temp + ".jpg";
}