import { setupData } from "./postdata.js";

const newscontainer = document.getElementById("news-container");
const newslist = document.getElementById("news-list");

const news = [
    {"name": "February", "id": "feb"},
    {"name": "December", "id": "dec"},
    {"name": "November", "id": "nov"},
    {"name": "October", "id": "oct"}
];

// id must be unique
const posts = [
    {
        "title": "February",
        "type": "news",
        "id": "feb",
        "imgtype": "jpg"
    },
    {
        "title": "December",
        "type": "news",
        "id": "dec",
        "imgtype": "jpg"
    },
    {
        "title": "November",
        "type": "news",
        "id": "nov",
        "imgtype": "jpg"
    },
    {
        "title": "October",
        "type": "news",
        "id": "oct",
        "imgtype": "jpg"
    }
];

for (let i = 0; i < news.length; i++) {
    newslist.innerHTML += `<li><a href=\"news/${news[i].id}.pdf\">${news[i].name}</a></li>`;
}

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    newscontainer.innerHTML += `<div>`;
    switch (post.type) {
        case "news":
            newscontainer.innerHTML += `
                <h3>${post.title} Newsletter</h3>
                <div class=\"two-imgs\">
                    <img src=\"images/news/${post.id}/1.${post.imgtype}\">
                    <img src=\"images/news/${post.id}/2.${post.imgtype}\">
                </div>`;
            break;
        case "text":
            newscontainer.innerHTML += `
                <h3>${post.title}</h3>
                <p>${post.text}</p>
            `;
            break;
    }
    newscontainer.innerHTML += `
    <div class=\"postcontrols\">
        <button onclick=\"likePost(\'${post.id}\')\"><svg id=\"${post.id}svg\"><use href="images/heart.svg#icon"></use></svg></button>
        <span  id=\"${post.id}likes\">Loading...</span>
    </div>`;
    newscontainer.innerHTML += `<hr></div><br>`;

    setupData(post.id);
}
