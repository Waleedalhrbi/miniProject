let user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "login.html";
}

document.getElementById("userName").textContent = user.name;
document.getElementById("userEmail").textContent = user.email;

document.getElementById("logoutBtn").onclick = function () {
    localStorage.removeItem("user");
    window.location.href = "login.html";
};

function loadUserArticles() {
    fetch("https://66e80571b17821a9d9db0043.mockapi.io/Articles")
        .then(function (response) {
            return response.json();
        })
        .then(function (articles) {
            const articlesList = document.getElementById("articlesList");
            articles.filter(article => article.userId === user.id).forEach(article => {
                const articleDiv = document.createElement("div");
                articleDiv.classList.add("card", "my-3");
                articleDiv.innerHTML = `
                    <img src="${article.imageUrl}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.content}</p>
                    </div>
                `;
                articlesList.appendChild(articleDiv);
            });
        });
}

loadUserArticles();
