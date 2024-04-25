/////////////////
function click(){
    console.log("Clicked");
}
////////////////////
let divEl = document.querySelector('#div');
divEl.onclick = function(){
    console.log("Div Element");
};
//////////////////////
let span = document.querySelector("#span")

span.addEventListener("click",() =>{
    console.log("Span element");
})
//////////////////

const div = document.querySelector("#divEl")
function studentRender(){
    const info = [
        'Robiyaxon',
        'Isroilova',
        'N54',

    ]
    info.forEach(el =>{
        let h1El = document.createElement('h1');
        h1El.textContent = el;
        divEl.appendChild(h1El)

    })
}
///////////////

function oninputChange(){
    console.log('started');
}

///////////////////

function onSelect(selectOption){
    console.log(selectOption.value);
}

////////////

function mouseOver (divElement){
    console.log(divElement);
    divElement.style.background = "red";
}
function mouseOut (divElement){
    console.log("out =>" , divElement);
    divElement.style.background = "green";
};

//////////

function mouseDown(imgEl){
    console.log(imgEl);
    imgEl.src = "./onn.gif"
}
function mouseUp(imgEl){
    imgEl.src = "./off.gif"
    console.log(imgEl);
}
////////

