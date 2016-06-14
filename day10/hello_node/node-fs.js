var fs = require("fs");

fs.readFile("ignition.txt", "utf8", function(err,data){
	if(err){
		throw err;
	}
	console.log(data);

});