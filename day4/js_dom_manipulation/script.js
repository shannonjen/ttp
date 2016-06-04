function validateForm() {
    var username = document.getElementById('username').value;
    if (username.length < 6) {
        alert("Your username must be more than 6 characters");
    } else {
    		document.getElementById('main-content').innerHTML= "<h1>Welcome "+username+"!</h1>";	
    }
    
}

