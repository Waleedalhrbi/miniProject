


const params = new URLSearchParams(window.location.search);
const articleId = params.get('id');


fetch(`https://66e80571b17821a9d9db0043.mockapi.io/Articles/${articleId}`)
    .then(response => response.json())
    .then(article => {
        document.getElementById("article-title").textContent = article.title;
        document.getElementById("article-content").textContent = article.content;
        document.getElementById("article-image").src = article.imageUrl;
    });
