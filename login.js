document.getElementById("loginButton").onclick = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    fetch("https://66e80571b17821a9d9db0043.mockapi.io/Login")
    .then(function(response) {
        return response.json();
    })
    .then(function(users) {
       
        var user = users.find(function(user) {
            return user.email === email && user.password === password;
        });

        if (user) {
            
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "welcome.html";  
        } else {
            alert("The email or password you entered is incorrect");
        }
    });
};