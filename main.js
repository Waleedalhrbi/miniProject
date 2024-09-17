document.getElementById("registerButton").onclick = function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.length < 5) {
        alert("The length of user name must be greter than 5 leters");
        return;
    }

   
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Your email is incorrect");
        return;
    }

    
    if (password.length < 8) {
        alert("The length of password must be greter than 8 leters");
        return;
    }

   
    let userData = {
        name: name,
        email: email,
        password: password
    };

    
    fetch("https://66e80571b17821a9d9db0043.mockapi.io/Login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
       
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "welcome.html";
    });
};