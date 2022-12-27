function saluto() {
 alert('Ciao!');
}

var progetti = [];
var griglia;

window.addEventListener('DOMContentLoaded', init());

function init() {
    griglia = document.getElementById('griglia');
    printData();
}


function printData() {
    fetch("assets/data/data.json").then((response) => {
        return response.json()
    }).then((data) => {
        progetti = data.progetti;
        if(progetti.length > 0) {
            progetti.reverse().map(function(element) {
                griglia.innerHTML += `
                <div class="col-12 col-sm-6 col-lg-4 g-4">
                    <div class="card shadow h-100">
                        <h5 class="card-title text-center my-3">${element.nome}</h5>
                        <img src="${element.srcImg}" class="card-img-top rounded-0 border border-start-0 border-end-0" alt="${element.altImg}">
                        <div class="card-body">
                            <p class="card-text">${element.descrizione}</p>
                        </div>
                        <div class="card-footer btn-group border-0">
                            <a href="${element.linkGithub}" target="_blank" class="btn btn-outline-primary">Guarda il codice</a>
                            <a href="${element.linkSito}" target="_blank" class="btn btn-outline-primary">Guarda il sito</a>
                        </div>
                    </div>
                </div>`
            })
        }
    });
}



