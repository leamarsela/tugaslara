// DOM Selection
// getElementById()

// const querry = document.querySelector('section#b ul li:nth-child(2)');
// document.querySelector('section#b ul li:nth-child(2)').style.color = 'lightblue'
// querry.style.color = 'red';
// querry.style.fontSize = '50px';

// function listp() {
//     var color = ['red', 'yellow', 'lightgreen'];

//     for(i = 0; i <= 2; i++) {
//         document.querySelector('section#b ul li:nth-child' + '(' + (i + 1) + ')').style.color = color[i];
//         document.querySelector('section#b ul li:nth-child' + '(' + (i + 1) + ')').innerHTML = color[i];
//     }
// }

// listp();

// const p = document.querySelectorAll('p');
// const q = document.querySelector('p');
// const r = document.getElementById('b');
// r.style.display = 'none';


// const p4 = document.getElementsByTagName('p')[3];

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// p4.style.color = 'red';

// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll

const a = document.getElementById('judul');
const b = document.getElementsByTagName('h1');
const c = document.getElementsByClassName('p1');
const d = document.querySelector('section');
const e = document.querySelectorAll('section');

const f = document.querySelector('#judul');

// 1.manipulasi Element
// innerHTML
// style
// setAttribute
// removeAttribute
// classList
// toggle = menambahkan / menghapus

// 2.manipulasi node
// createelement
// createtextnode
// appendchild
// insertbefore
// removechild
// replacechild

// const pBaru = document.createElement('p');
// const textBaru = document.createTextNode('paragraf baru');
// pBaru.appendChild(textBaru);

// const sectionA = document.getElementById('a');

// sectionA.appendChild(pBaru);




// const liBaru = document.createElement('li');
// const textLiBaru = document.createTextNode('Ini text Li Baru');
// liBaru.appendChild(textLiBaru);

// const parentLi = document.querySelector('section#b ul');
// const existingLi = document.querySelectorAll('section#b li')[1];

// parentLi.insertBefore(liBaru, existingLi);



const p1 = document.querySelector('.p1');

p1.addEventListener('click', function() {
    p1.style.backgroundColor = 'green';
    // p1.style.color = 'red';
});


var valText = 0;
const inputText = document.getElementById('nilai')

p1.addEventListener('click', function() {
    p1.style.color = 'red';
    
    valText++;
    inputText.value = valText;
})


const p2 = document.querySelector('.p2');

p2.addEventListener('click', function() {

    valText = 0
    inputText.value = valText;
})









