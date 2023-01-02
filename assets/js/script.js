var ultimiProgetti = [];
var griglia;

window.addEventListener('DOMContentLoaded', init());

function init() {
    griglia = document.getElementById('griglia');
    printLastData();
}

function printLastData() {
    fetch("assets/data/data.json").then((response) => {
        return response.json()
    }).then((data) => {
        progetti = data.progetti;
        if(progetti.length > 0) {
            progetti.slice(-4).reverse().map(function(element) {
                griglia.innerHTML += `
                <div class="col-12 col-md-5 g-5">
                    <div class="card text-light h-100 border-0">
                        <h5 class="card-title text-center fw-bold my-3" style="font-family: Arial, Helvetica, sans-serif;">${element.nome}</h5>
                        <div id="rettangolo"></div>
                        <img src="${element.srcImg}" class="card-img-top rounded-0" alt="${element.altImg}">
                        <div class="btn-group p-3">
                            <a href="${element.linkGithub}" target="_blank" class="btn btn-outline-success">Guarda il codice</a>
                            <a href="${element.linkSito}" target="_blank" class="btn btn-outline-success sitoBtn">Guarda il sito</a>
                        </div>
                    </div>
                </div>
                `
            })
            
            document.querySelectorAll('.sitoBtn').forEach(button => {
                if(button.getAttribute('href') == '') {
                    button.classList.add('disabled');
                }
            });

        } else {
            griglia.innerHTML += `<p class="text-danger">Non sono presenti progetti</p>`
        }
    });
}