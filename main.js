let apikey = "87bbbb72ead5407c851957c6a0d33751";
let apiurl = "https://newsapi.org/v2/everything?q=";
let cardcont = document.querySelector(".card-cont");
let fnav = document.getElementById("f")
let bnav = document.getElementById("b")
let nav = document.querySelectorAll("li")

window.addEventListener("DOMContentLoaded", () => {
  fetchnews("european football");
});

async function fetchnews(query) {
  let response = await fetch(`${apiurl}${encodeURIComponent(query)}&apikey=${apikey}`);
  let data = await response.json();
  console.log(data);
  displaynews(data.articles);
}

function displaynews(articles) {
  articles.forEach((article) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <img src="${article.urlToImage}">
        <h1 class="news-title">${article.title}</h1> 
        <p class="news-head">${article.description}</p>
        <h3 class="news-date">${article.publishedAt.slice(0, 10)}</h3>
        `;
    cardcont.appendChild(div);
    div.addEventListener("click", () => {
        window.open(article.url, "_blank")
    })
  });
}

function navItem(id) {
    cardcont.innerHTML = ""
    fetchnews(id)
}