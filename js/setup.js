$(function () {
	//$("#footer-placeholder").hide();
	$("#footer-placeholder").load("/inject/footer.html");
	//$("#footer-placeholder").fadeIn("fast");
	$("#overlay").fadeOut(2000);
	$("#toppings").hide();
});

var testing = false

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

function hamburger(){
	var toppings = $("#toppings");
	if (window.innerWidth < 960) {
		$("#toppings").animate({height:'toggle'},300);
	} else {
		$("#toppings").animate({width:'toggle'},300);
	}
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

async function pSuiteInfo(s,d,l){
	var newText = "";
	var x = document.getElementById("suite-placeholder");
  	if (!(window.getComputedStyle(x).display === "none")) {
    	$("#suite-placeholder").slideUp(200);
	}
	if ((($("#suite-placeholder").attr("lastSender") == s) && ($("#suite-placeholder").attr("lastSubject") == d)) && (!(window.getComputedStyle(x).display === "none"))){
		$("#suite-placeholder").slideUp(200);
	} else {
		$("#suite-placeholder").promise().done(function(){
			jQuery.get("/inject/suitedetails/" + d + ".txt", function(data) {
				newText = data;
				console.log(l);
				if (l == true){
					console.log("hello");
					jQuery.get("/inject/suitedetails/legal.txt", function(legaldata) {
						console.log(legaldata);
						newText = newText + "<br>" + legaldata;
						console.log(newText);
						document.getElementById("serviceInformation").innerHTML = newText ;
					});
				}
				console.log(newText);
				document.getElementById("serviceInformation").innerHTML = newText ;
			});
			$("#suite-placeholder").attr("lastSender", s);
			$("#suite-placeholder").attr("lastSubject", d);
			$("#suite-placeholder").slideDown(200);
		});
	}
}