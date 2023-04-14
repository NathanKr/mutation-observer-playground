let index = 0;
const parent = document.querySelector('#playground');

function addDivHandler(){
    parent.innerHTML += `<div>new div ${++index}</div>`;
}

