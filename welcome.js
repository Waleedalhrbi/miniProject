let user = JSON.parse(localStorage.getItem("user"));

if (user) {
    document.getElementById("username").textContent = "Welcome Mr " + user.name;
} else {
    window.location.href = "login.html";
}

document.getElementById("logoutBtn").onclick = function () {
    localStorage.removeItem("user");
    window.location.href = "login.html";
};

function loadArticles() {
    fetch("https://66e80571b17821a9d9db0043.mockapi.io/Articles")
        .then(response => response.json())
        .then(articles => {
            if (articles.length > 0) {
             
                const latestArticle = articles[articles.length - 1]; 
                document.getElementById("latest-article-title").textContent = latestArticle.title;
                document.getElementById("latest-article-excerpt").textContent = latestArticle.excerpt;
                document.getElementById("latest-article-image").src = latestArticle.imageUrl;
                document.getElementById("latest-article-link").href = `article.html?id=${latestArticle.id}`;

               
                const otherArticlesList = document.getElementById("other-articles-list");
                articles.slice(0, articles.length - 1).forEach(article => {
                    const otherArticleDiv = document.createElement("div");
                    otherArticleDiv.classList.add("other-article", "d-flex");
                    otherArticleDiv.innerHTML = `
                        <img src="${article.imageUrl}" alt="${article.title}">
                        <h6><a href="article.html?id=${article.id}">${article.title}</a></h6>
                    `;
                    otherArticlesList.appendChild(otherArticleDiv);
                });

                
                const articlesCardsContainer = document.getElementById("articles-cards");
                articles.forEach(article => {
                    const articleCard = document.createElement("div");
                    articleCard.classList.add("col-md-4");
                    articleCard.innerHTML = `
                        <div class="card">
                            <img src="${article.imageUrl}" class="card-img-top" alt="${article.title}">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.excerpt}</p>
                                <a href="article.html?id=${article.id}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    `;
                    articlesCardsContainer.appendChild(articleCard);
                });
            }
        });
}

loadArticles();
