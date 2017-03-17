function maPosition(position) {
  var infopos = "Position déterminée :\n";
  infopos += "Latitude : "+position.coords.latitude +"\n";
  infopos += "Longitude: "+position.coords.longitude+"\n";
  infopos += "Altitude : "+position.coords.altitude +"\n";
  document.getElementById("infoposition").innerHTML = infopos;
}

if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(maPosition);

$(document).ready(function() {

var test=true;
$('#menuphone img').click(function() { 
	
	if(test===true){
  		$('#menuphone ul').css("display","block"); 
  		$(this).css("-ms-transform","rotate(90deg)");
		$(this).css("-webkit-transform","rotate(90deg)");
		$(this).css("transform","rotate(90deg)");
		test=false;
	} 
	else if(test===false){
		$('#menuphone ul').css("display","none"); 
  		$(this).css("-ms-transform","none");
		$(this).css("-webkit-transform","none");
		$(this).css("transform","none");
		test=true;
	}
});
});

