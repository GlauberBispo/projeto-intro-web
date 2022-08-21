// alert('testar link html');

// SEMANA 1:
// A LISTA SERÁ SOBRE CIDADES, PONTOS DE INTERESSE E DEMAND FINACEIRA DE CADA UMA DELAS;

// const nomeSerie1 = 'Stranger Things';
// const temporadas1 = 4;
// const serieCancelada1 = false;
// const serieConcluida1 = false;


// const nomeSerie2 = 'Game of Thrones';
// const temporadas2 = 8;
// const serieCancelada2 = false;
// const serieConcluida2 = true;

// const nomeSerie3 = 'Dirk Gently\'s';
// const temporadas3 = 2;
// const serieCancelada3 = true;
// const serieConcluida3 = false;

// const mediaTemporadas = (temporadas1 + temporadas2 + temporadas3) / 3;
// console.log('A média da soma de todas as temporadas é:',mediaTemporadas.toFixed(1));

// const compararBoleanos = serieCancelada1 && serieCancelada2 && serieCancelada3 && serieConcluida1 && serieConcluida2 && serieConcluida3;
// console.log('Quando se compara todos os boleanos com o operador lógico && o resultado é:',compararBoleanos);


// SEMANA 2:
// INCLUIR UM ARRAY EM CADA ITEM DA LISTA.

// const nomeSerie1 = 'Stranger Things';
// const temporadas1 = 4;
const genero1 = ['Aventura', 'Terror', 'Mistério', 'Suspense', 'Sobrenatural'];
// const serieCancelada1 = false;
// const serieConcluida1 = false;

// const nomeSerie2 = 'Game of Thrones';
// const temporadas2 = 8;
// const genero2 = ['Fantasia medieval', 'Drama', 'Tragédia', 'Aventura','Ação'] ;
// const serieCancelada2 = false;
// const serieConcluida2 = true;

// const nomeSerie3 = 'Dirk Gently\'s';
// const temporadas3 = 2;
// const genero3 = ['Ficção científica', 'Comédia', 'Aventura', 'investigação'];
// const serieCancelada3 = true;
// const serieConcluida3 = false;

// // Exibir relatório de cada item 

// console.log(`Relatório item 1:
// Nome da serie: ${nomeSerie1.toUpperCase()};
// Quantidades de temporadas: ${temporadas1};
// Genero: ${genero1};
// Serie Cancelada: ${serieCancelada1};
// Serie Conluída: ${serieConcluida1}.`);

// console.log(`Relatório item 2:
// Nome da serie: ${nomeSerie2.toUpperCase()};
// Quantidades de temporadas: ${temporadas2};
// Genero: ${genero2};
// Serie Cancelada: ${serieCancelada2};
// Serie Conluída: ${serieConcluida2}.`);

// console.log(`Relatório item 3:
// Nome da serie: ${nomeSerie3.toUpperCase()};
// Quantidades de temporadas: ${temporadas3};
// Genero: ${genero3};
// Serie Cancelada: ${serieCancelada3};
// Serie Conluída: ${serieConcluida3}.`);

// SEMANA 3:
// TRANSFORMAR OS ITENS EM OBJETOS.


const serie1 = {nomeSerie:'Stranger Things',
 temporadas: 4,
 genero: ['Aventura', 'Terror', 'Mistério', 'Suspense', 'Sobrenatural'],
 serieCancelada: false,
 serieConcluida: false
};

 const serie2 = {nomeSerie: 'Game of Thrones',
 temporadas: 8,
 genero: ['Fantasia medieval', 'Drama', 'Tragédia', 'Aventura','Ação'] ,
 serieCancelada: false,
 serieConcluida: true,
};

 const serie3 = {nomeSerie: 'Dirk Gently\'s',
 temporadas: 2,
 genero: ['Ficção científica', 'Comédia', 'Aventura', 'investigação'],
 serieCancelada: true,
 serieConcluida: false
};

const listaSeries = [];


// Adicionando os objetos na array com o push

// listaSeries.push(serie1,serie2,serie3);

// Criando condição para inserir o push

if (serie1.serieCancelada === true || serie1.serieConcluida === false) {
    listaSeries.push(serie1)
} else {
    alert('Serie ' +serie1.nomeSerie+ ' não foi adicionada');
};

if (serie2.serieCancelada === true || serie2.serieConcluida === false) {
    listaSeries.push(serie2)
} else {
    alert('Serie ' +serie2.nomeSerie+ ' não foi adicionada');
};

if (serie3.serieCancelada === true || serie3.serieConcluida === false) {
    listaSeries.push(serie3)
} else {
    alert('Serie ' +serie3+ 'não foi adicionada');
};

console.log(listaSeries);

// SEMANA 5 PARTE 1 - REFATORAR ARRAY DA SEMANA 2

let string = 'Gêneros do item 1: '
for (let i of genero1) {
    string += `${i},`;
};
console.log(string)