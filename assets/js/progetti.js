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
                    <div class="card text-light h-100">
                        <h5 class="card-title text-center fw-bold my-3" style="font-family: Arial, Helvetica, sans-serif;">${element.nome}</h5>
                        <img src="${element.srcImg}" class="card-img-top rounded-0 border border-start-0 border-end-0" alt="${element.altImg}">
                        <div class="card-body text-center">
                            <p class="card-text">${element.descrizione}</p>
                            <div class="btn-group p-3">
                                <a href="${element.linkGithub}" target="_blank" class="btn btn-outline-success">Guarda il codice</a>
                                <a href="${element.linkSito}" target="_blank" class="btn btn-outline-success">Guarda il sito</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
        } else {
            griglia.innerHTML += `<p class="text-danger">Non sono presenti progetti</p>`
        }
    });
}