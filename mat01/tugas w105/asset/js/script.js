// database
var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpeg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpeg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpeg'],
]

// add div class card columns
const addDiv = document.createElement('div');
addDiv.className = 'card-columns';

const listBarang = document.getElementById('listBarang');
listBarang.append(addDiv);


// add function format number
function rate(num) {
    var formatter = new Intl.NumberFormat(['ban', 'id']).format(num);
    return formatter;
}


// add div class card from database
var card = '';
items.forEach(el => {
    card +=  '<div class="card" style="width: 18rem;">\n'
            +'<img src="asset/img/' + el[4] + '" class="card-img-top" alt="..."></img>\n'
            +   '<div class="card-body">\n'
            +       '<h5 class="card-title" id="'+ el[1] + '">' + el[1] + '</h5>\n'
            +       '<p class="card-text" id="' + el[3] + '">' + el[3] + '</p>\n'
            +       '<p class="card-text">Rp ' + rate(el[2]) + '</p>\n'
            +       '<a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>\n'
            +   '</div>\n'
            + '</div>\n'
})

// insert after card-columns
const classCardColumns = document.getElementsByClassName('card-columns')[0];
classCardColumns.innerHTML = card;


// DOM Selector
const search = document.getElementById('keyword');
const row = document.getElementById('listBarang');


// listener
search.addEventListener('focusout', function() {
    row.style.display = 'initial';
});

// listener
search.addEventListener('keyup', function() {
    let inputSearch = search.value.toLowerCase();

    var cardItem = '';
    for(let i = 0; i < items.length; i++) {
        if(items[i][1].toLowerCase().includes(inputSearch)) {
            cardItem += `
                        <div class="card" style="width: 18rem;">
                        <img src="asset/img/${items[i][4]}" class="card-img-top" alt="..."></img>
                           <div class="card-body">
                               <h5 class="card-title" id="${items[i][1]}"> ${items[i][1]} </h5>
                               <p class="card-text" id=" ${items[i][3]}"> ${items[i][3]} </p>
                               <p class="card-text">Rp ${rate(items[i][2])} </p>
                               <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                           </div>
                        </div>`
            classCardColumns.innerHTML = cardItem;
        }
    }
})


// sum cart by click
const addCart = document.querySelectorAll('#addCart');
var cart = document.getElementsByTagName('button')[1];

var numCart = 0;
for(var i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', function() {
        numCart++;
        var numCartNode = document.createTextNode('(' + numCart + ')');
        cart.lastChild.replaceWith(numCartNode);
    });
} 
