'mode strict'

const links = {
    "nome": "Emerson Silva",
    "img": "pikachu.gif",
    "links": [
        {
            "titulo": "Site pessoal",
            "url": "https://emerson916.github.io/linkTree/index.html"
        },
        {
            "titulo": "GitHub",
            "url": "https://github.com/Emerson916"
        },
        {
            "titulo": "Linkedin",
            "url": "https://www.linkedin.com/in/emerson-silva-32441717a/"
        },
        {
            "titulo": "Currículo",
            "url": "https://emerson916.github.io/Curriculo_EmersonSilva/"
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
