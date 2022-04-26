const pushB = document.querySelector('#pushB') as HTMLButtonElement;
const popB = document.querySelector('#popB') as HTMLButtonElement;
const item = document.querySelector('#item') as HTMLInputElement;
const list = document.querySelector('#list') as HTMLUListElement;
const children = list.children;


/* No necesita el import por que en el html esta importado antes que el index.js */
const stack = new Stack();

pushB!.addEventListener('click', e => {
    if(item!.value != ''){
        stack.stack(item!.value as String)
    }
    let node = document.createElement('li');
    node.innerHTML = item!.value;
    
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

popB!.addEventListener('click', e => {
    if(stack.length()>0){
        stack.unstack()
        list.removeChild(list.lastChild!);
    }
    

    /* render(); */
})