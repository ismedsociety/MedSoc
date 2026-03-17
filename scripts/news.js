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
        "title": "Suturing Event",
        "id": "suture",
        "sections": [
            {
                "type": "text",
                "text": "Come to Medical Society's suturing event, happening on March 10th from 5-6 P.M. "
            }
        ]
    },
    {
        "title": "February Newsletter",
        "id": "feb",
        "sections": [
            {
                "type": "news",
                "imgtype": "jpg"
            }
        ]
    },
    {
        "title": "December Newsletter",
        "id": "dec",
        "sections": [
            {
                "type": "news",
                "imgtype": "jpg"
            }
        ]
    },
    {
        "title": "November Newsletter",
        "id": "nov",
        "sections": [
            {
                "type": "news",
                "imgtype": "jpg"
            }
        ]
    },
    {
        "title": "October Newsletter",
        "id": "oct",
        "sections": [
            {
                "type": "news",
                "imgtype": "jpg"
            }
        ]
    }
];

for (let i = 0; i < news.length; i++) {
    newslist.innerHTML += `<li><a href=\"news/${news[i].id}.pdf\">${news[i].name}</a></li>`;
}

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    newscontainer.innerHTML += `<div><h3>${post.title}</h3>`;

    for (let j = 0; j < post.sections.length; j++) {
        const section = post.sections[j];

        switch (section.type) {
            case "news":
                newscontainer.innerHTML += `
                    <div class=\"two-imgs\">
                        <img src=\"images/news/${post.id}/1.${section.imgtype}\">
                        <img src=\"images/news/${post.id}/2.${section.imgtype}\">
                    </div>`;
                break;
            case "text":
                newscontainer.innerHTML += `
                    <p>${section.text}</p>
                `;
                break;
        }

        newscontainer.innerHTML += "<br>";
    }
    
    newscontainer.innerHTML += `
    <div class=\"postcontrols\">
        <button onclick=\"likePost(\'${post.id}\')\"><svg id=\"${post.id}svg\"><use href="images/heart.svg#icon"></use></svg></button>
        <span  id=\"${post.id}likes\">Loading...</span>
    </div>`;
    newscontainer.innerHTML += `<hr></div><br>`;

    setupData(post.id);
}
