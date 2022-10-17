const serie1 = {
  nome: `stranger things`,
  temporadas: 4,
  genero: ["Aventura", "Terror", "Mistério", "Suspense", "Sobrenatural"],
  imagem:
    "https://br.web.img3.acsta.net/c_310_420/pictures/19/07/10/20/01/2331295.jpg",
  serieCancelada: false,
  serieConcluida: false,
  link: "https://www.adorocinema.com/series/serie-19156/",
};

const serie2 = {
  nome: `game of thrones`,
  temporadas: 8,
  genero: ['Fantasia medieval', 'Drama', 'Tragédia', 'Aventura','Ação'],
  imagem:
    "https://br.web.img2.acsta.net/c_310_420/pictures/19/03/21/16/15/4239577.jpg",
  serieCancelada: false,
  serieConcluida: true,
  link: "https://www.adorocinema.com/series/serie-7157/",
};

const serie3 = {
  nome: `dirk gently's`,
  temporadas: 4,
  genero: ["Aventura", "Terror", "Mistério", "Suspense", "Sobrenatural"],
  imagem:
    "https://br.web.img3.acsta.net/c_310_420/pictures/16/10/10/17/04/121946.jpg",
  serieCancelada: false,
  serieConcluida: false,
  link: "https://www.adorocinema.com/series/serie-20395/",
};

const serie4 = {
    nome: `house of the dragon`,
    temporadas: 1   ,
    genero: ['Fantasia medieval', 'Drama', 'Tragédia', 'Aventura','Ação'],
    imagem:
      "https://br.web.img3.acsta.net/c_310_420/pictures/22/05/30/15/56/1469166.jpg",
    serieCancelada: false,
    serieConcluida: false,
    link: "https://www.adorocinema.com/series/serie-25633/",
  };

  const serie5 = {
    nome: `o senhor dos aneis: os aneis do poder`,
    temporadas: 1   ,
    genero: ['Fantasia medieval', 'Drama', 'Tragédia', 'Aventura','Ação'],
    imagem:
      "https://br.web.img3.acsta.net/c_310_420/pictures/22/10/05/09/42/3385930.jpg",
    serieCancelada: false,
    serieConcluida: false,
    link: "https://www.adorocinema.com/series/serie-22940/",
  };

  const serie6 = {
    nome: `breaking bad`,
    temporadas: 1   ,
    genero: ['Suspense', 'Drama', 'Tragédia', 'Aventura','Ação'],
    imagem:
      "https://br.web.img3.acsta.net/c_310_420/pictures/14/03/31/19/28/462555.jpg",
    serieCancelada: false,
    serieConcluida: false,
    link: "https://www.adorocinema.com/series/serie-3517/",
  };

let arrayObjetos = [];

function pushArray(objeto) {
  if (
    objeto.serieCancelada === true ||
    objeto.serieConcluida === false ||
    objeto.serieConcluida === true
  ) {
    arrayObjetos.push(objeto);
  } else {
    alert("Serie " + objeto.nome + " não foi adicionada");
  }
}

pushArray(serie1);
pushArray(serie2);
pushArray(serie3);
pushArray(serie4);
pushArray(serie5);
pushArray(serie6);

const funcaoBusca = (array, input) => {
  for (i in array) {
    for (j in array[i]) {
      if (array[i][j] === input) {
        console.log(array[i]);
        let main = document.getElementById("main");
        let div = document.createElement("div");
        let section = document.createElement("section");
        let imagem = document.createElement("img");
        let ul = document.createElement("ul");
        let ul1 = document.createElement("ul");
        let li = document.createElement("li");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let a = document.createElement("a");

        div.setAttribute('id', 'div-sections')
        section.setAttribute("id", "section1");
        imagem.src = arrayObjetos[i].imagem;
        a.setAttribute("href", arrayObjetos[i].link);
        a.setAttribute("target", "_blank");
        ul.setAttribute("id", "box");
        ul1.setAttribute('id','text-content' )
        a.innerHTML = arrayObjetos[i].nome.toUpperCase();
        li1.innerHTML = "Nome: ";
        li2.innerHTML = "Temporadas: " + arrayObjetos[i].temporadas;
        li3.innerHTML = "Genero: " + arrayObjetos[i].genero;
        
        main.appendChild(div)
        div.appendChild(section);
        section.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(imagem);
        section.appendChild(ul1);
        ul1.appendChild(li1);
        li1.appendChild(a);
        ul1.appendChild(li2);
        ul1.appendChild(li3);
      }
    }
  }
};

for (i in arrayObjetos) {
  let div = document.getElementById("div-sections");
  let section = document.createElement("section");
  let imagem = document.createElement("img");
  let ul = document.createElement("ul");
  let ul1 = document.createElement("ul");
  let li = document.createElement("li");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let a = document.createElement("a");

  section.setAttribute("id", "section1");
  imagem.src = arrayObjetos[i].imagem;
  a.setAttribute("href", arrayObjetos[i].link);
  a.setAttribute("target", "_blank");
  ul.setAttribute("id", "box");
  ul1.setAttribute('id','text-content' )
  a.innerHTML = arrayObjetos[i].nome.toUpperCase();
  li1.innerHTML = "Nome: ";
  li2.innerHTML = "Temporadas: " + arrayObjetos[i].temporadas;
  li3.innerHTML = "Genero: " + arrayObjetos[i].genero;

  div.appendChild(section);
  section.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(imagem);
  section.appendChild(ul1);
  ul1.appendChild(li1);
  li1.appendChild(a);
  ul1.appendChild(li2);
  ul1.appendChild(li3);
}

function busca(event) {
  event.preventDefault();
  let input = document.getElementById("input").value.toLowerCase();
  if (input === "") {
    alert("Insira um valor na busca.");
  }else {
    document.getElementById("div-sections").remove();
    funcaoBusca(arrayObjetos, input);
  }
}
