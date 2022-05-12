$(function () {
	//$("#footer-placeholder").hide();
	$("#footer-placeholder").load("/inject/footer.html");
	//$("#footer-placeholder").fadeIn("fast");
	$("#overlay").fadeOut(2000);
});

var domain = ""
if (window !== window.parent){
	domain = "http://pogmom.me/";
} else {
	domain = "http://micahpgomez.com/";
}
console.log(domain)

function mRdr(a){
	console.log("MicahRedirect!");
	console.log(arguments[0]);
	var newurl = domain + arguments[0];
	console.log(newurl);
	//parent.location.src = newurl;
	window.top.location.href = newurl;
}

function mExt(a){
	console.log("MicahExternal!");
	console.log(arguments[0]);
	window.open(arguments[0]);
}

function mDL(a){
	console.log("MicahDownload!");
	console.log(arguments[0]);
	window.top.location.href = arguments[0];
}