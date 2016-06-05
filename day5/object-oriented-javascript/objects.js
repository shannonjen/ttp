//object literal
var my_car = {
	brand: "Prius",
	wheels: 4
}

console.log(my_car.brand);

//constructor function
function Car(brand, wheels) {
	this.brand = brand;
	this.wheels = wheels;
}

//creates an instance of Car: my_car 
var my_car = new Car("toyota", 4);

//another instance
var some_other_car = new Car("maserati", 4);

//Reading attributes
//bracket notation
console.log(my_car[brand]);
console.log(some_other_car[brand]);
//dot notation
console.log(my_car.brand);
console.log(some_other_car.brand);

//Methods
//Functions can be stored on attributes of an object
var my_car = {
	brand: "Prius",
	friendly_brand: function(){
		return "Your car's brand is " + this.brand;
	}
};

console.log(my_car.friendly_brand());

//Prototypes
//You can extend a JS object (add functionality through 
//object attributes AFTER the object and its instance 
//after they have been defined) using its prototype

function Car(brand, wheels){
	this.brand = brand;
	this.wheels = wheels;
}

my_car = new Car("toyota", 4);

//Add method to the parent object using its prototype
Car.prototype.friendly_brand = function(){
	return "This car’s brand is " + this.brand; 
};

//Prototypical Objects
function User(fname, lname, email){
  this.fname = fname;
  this.lname = lname;
  this.email = email;
  this.name = function(){return this.fname + " " + this.lname;} }

function Admin(){
  this.admin = true; 
  User.apply(this, arguments); // Call parent constructor with admin prototype context.
}

Admin.prototype = new User();
//Admin now has all of the traits of a User as well as its 
//own admin boolean flag