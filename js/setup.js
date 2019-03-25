
if	(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
	console.log('Device is mobile');
	$(function(){
		$("#header-placeholder").load("/inject/mobileheader.html");
	});
	console.log("Changing style")
	document.getElementById("pagestyle").setAttribute("href", "/css/mobilestyle.css");
}
else{
	console.log('Device is not mobile');
	$(function(){
		$("#header-placeholder").load("/inject/header.html");
	});
}

$(function(){
  $("#footer-placeholder").load("/inject/footer.html");
});