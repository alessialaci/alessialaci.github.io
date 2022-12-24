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
                    <div class="card h-100">
                        <img src="${element.srcImg}" class="card-img-top" alt="${element.altImg}">
                        <div class="card-body">
                            <h5 class="card-title">${element.nome}</h5>
                            <p class="card-text">${element.descrizione}</p>
                            <div class="btn-group">
                                <a href="${element.linkGithub}" target="_blank" class="btn btn-outline-primary">Guarda il codice</a>
                                <a href="${element.linkSito}" target="_blank" class="btn btn-outline-primary">Guarda il sito</a>
                            </div>
                        </div>
                    </div>
                </div>`
            })
        }
    });
}



