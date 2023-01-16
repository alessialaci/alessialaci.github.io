var progetti = [];
var griglia;

window.addEventListener('DOMContentLoaded', init());

function init() {
    griglia = document.getElementById('griglia');
    printData();
}

function printData() {
    griglia.innerHTML = '';
    
    fetch("assets/data/data.json").then((response) => {
        return response.json()
    }).then((data) => {
        progetti = data.progetti;
        if (progetti.length > 0) {
            progetti.reverse().map(function(element) {
                griglia.innerHTML += `
                <div class="col-12 col-sm-6 col-lg-4 g-4">
                    <div class="card text-light h-100 border-0">
                        <h5 class="card-title text-center fw-bold my-3" style="font-family: Arial, Helvetica, sans-serif;">${element.nome}</h5>
                        <img src="${element.srcImg}" class="card-img-top rounded-0 border border-start-0 border-end-0" alt="${element.altImg}">
                        <div class="card-body text-center">
                            <p class="card-text">${element.descrizione}</p>
                            <div class="btn-group p-3">
                                <a href="${element.linkGithub}" target="_blank" class="btn btn-outline-success">Guarda il codice</a>
                                <a href="${element.linkSito}" target="_blank" class="btn btn-outline-success sitoBtn">Guarda il sito</a>
                            </div>
                        </div>
                    </div>
                </div>
                `

                document.querySelectorAll('.sitoBtn').forEach(button => {
                    if(button.getAttribute('href') == '') {
                        button.classList.add('d-none');
                    }
                });
            })
        } else {
            griglia.innerHTML += `<p class="text-danger">Non sono presenti progetti</p>`
        }
    });
}

let filtro = document.getElementById('filtro');

function filterByCategories() {
    switch (filtro.value) {
        case 'Tutti':
            printData();
            break;
        case 'HTML':
            printCategory('HTML');
            break;
        case 'CSS':
            printCategory('CSS');
            break;
        case 'JavaScript':
            printCategory('JavaScript');
            break;
        case 'Sass':
            printCategory('Sass');
            break;
        case 'Bootstrap':
            printCategory('Bootstrap');
            break;
        case 'TypeScript':
            printCategory('TypeScript');
            break;
        case 'Angular':
            printCategory('Angular');
            break;
        default:
            console.log('Tutti');
    }
}

function printCategory(categoria) {
    fetch(`assets/data/data.json`).then((response) => {
        return response.json()
    }).then((data) => {
        let progettiFiltrati = data.progetti.filter(progetto => progetto.categoria.includes(`${categoria}`));
        
        griglia.innerHTML = progettiFiltrati.reverse().map(function (element) {
            return `
            <div class="col-12 col-sm-6 col-lg-4 g-4">
                <div class="card text-light h-100 border-0">
                    <h5 class="card-title text-center fw-bold my-3" style="font-family: Arial, Helvetica, sans-serif;">${element.nome}</h5>
                    <img src="${element.srcImg}" class="card-img-top rounded-0 border border-start-0 border-end-0" alt="${element.altImg}">
                    <div class="card-body text-center">
                        <p class="card-text">${element.descrizione}</p>
                        <div class="btn-group p-3">
                            <a href="${element.linkGithub}" target="_blank" class="btn btn-outline-success">Guarda il codice</a>
                            <a href="${element.linkSito}" target="_blank" class="btn btn-outline-success sitoBtn">Guarda il sito</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        }).join('');
        
        document.querySelectorAll('.sitoBtn').forEach(button => {
            if(button.getAttribute('href') == '') {
                button.classList.add('d-none');
            }
        });
    });
}