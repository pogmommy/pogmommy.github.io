$(function () {
	//$("#footer-placeholder").hide();
	$("#footer-placeholder").load("/inject/footer.html");
	//$("#footer-placeholder").fadeIn("fast");
	$("#overlay").fadeOut(2000);
});

var testing = true

var domain = ""
if (testing == true){
	domain = "http://localhost:8888/";
    console.log("localhost")
} else {
	domain = "http://pogmom.me/";
    console.log("pogmom.me")
}
console.log(domain)

function pRdr(a){
	console.log("PenRedirect!");
	console.log(arguments[0]);
	var newurl = domain + arguments[0];
	console.log(newurl);
	//parent.location.src = newurl;
	window.top.location.href = newurl;
}

function pExt(a){
	console.log("PenExternal!");
	console.log(arguments[0]);
	window.open(arguments[0]);
}

function pDL(a){
	console.log("PenDownload!");
	console.log(arguments[0]);
	window.top.location.href = arguments[0];
}
