'mode strict'

const links = {
    "nome": "Emerson Silva",
    "img": "avatar.png",
    "links": [
        {
            "titulo": "site pessoal",
            "url": "http://www.fernandoleonid.com.br/"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/fernandoleonid"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/fernandoleonid/"
        },
        {
            "titulo": "twitter",
            "url": "https://twitter.com/fernandoleonid"
        }
    ]
}

const avatar = document.getElementById('avatar');
avatar.src = links.img;

const titulo = document.getElementById('titulo'); 
titulo.textContent = links.nome;


    const div = document.getElementById('linkTree');

for (let index = 0; index < links["links"].length; index++) {
    
    const link = document.createElement('a');
    link.href = links["links"][index]["url"];
    link.innerText =  links["links"][index]["titulo"];
    div.appendChild(link);
}

/*
const div = document.getElementById('linkTree');
const link = document.createElement('a');
link.href = links["links"][index]["url"];
link.innerText =  links["links"][index]["titulo"];
div.appendChild(link);
*/
