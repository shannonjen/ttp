
function Multiplier(){
	this.n = 1;
	this.multiply = function(number){
		return this.n = this.n * number;
	};
	this.getCurrentValue = function(){
		return this.n;
	};
}

var myMultiplier = new Multiplier();
console.log(myMultiplier.multiply(2));
myMultiplier.getCurrentValue();
myMultiplier.multiply(4);
myMultiplier.getCurrentValue();





