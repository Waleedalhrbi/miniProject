let user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "login.html";
}

document.getElementById("articleForm").onsubmit = function (event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let imageUrl = document.getElementById("image").value;

    let article = {
        title: title,
        content: content,
        imageUrl: imageUrl,
        userId: user.id,
    };

    fetch("https://66e80571b17821a9d9db0043.mockapi.io/Articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    }).then(() => {
        window.location.href = "welcome.html";
    });
};
