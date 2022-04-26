"use strict";
const pushB = document.querySelector('#pushB');
const popB = document.querySelector('#popB');
const item = document.querySelector('#item');
const list = document.querySelector('#list');
const children = list.children;
/* No necesita el import por que en el html esta importado antes que el index.js */
const stack = new Stack();
pushB.addEventListener('click', e => {
    if (item.value != '') {
        stack.stack(item.value);
    }
    let node = document.createElement('li');
    node.innerHTML = item.value;
    list.appendChild(node);
    /* render(); */
});
/* function render(){
    let html:string = '';
    html += `Lista de elementos`
    stack.getElements().forEach(item => {
        console.log(item);
        html += `<li>${item}</li>`;
    });

    list.replaceChildren(html);
} */
popB.addEventListener('click', e => {
    if (stack.length() > 0) {
        stack.unstack();
        list.removeChild(list.lastChild);
    }
    /* render(); */
});
