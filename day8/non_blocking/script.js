(function countClicks(){
	var numClicks = 0;
	document.addEventListener("click", function(){
		alert(++numClicks);
	});
})();