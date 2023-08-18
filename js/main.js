function getinput(inputId){
    const input = document.getElementById(inputId);
    const inputStr = input.value;
    const inputNum = parseFloat(inputStr);
    input.value = "";
    return inputNum;
}

function newText(texEl, newEl){
    document.getElementById(texEl).innerText = newEl;

}

function grtTryangal(){
    const triangalBase = getinput('triangal-base')
    const triangalHight = getinput('triangal-hight')
    const area = 0.5 * triangalBase * triangalHight;
    const fixtArea = area.toFixed(2)
    newText('trArea', fixtArea)
    createList('Tryngal', fixtArea)
}
function getRectangle(){
    const rectangleWidth = getinput('rectangle-width')
    const rectangleLength = getinput('rectangle-length')
    const area = rectangleWidth * rectangleLength;
    
    newText('recArea', area)
    createList('Rectangle', area)
}
function getParallelogram(){
    const parallelogramBase = getinput('parallelogram-base')
    const parallelogramHight = getinput('parallelogram-hight')
    const area = parallelogramBase * parallelogramHight;
    
    newText('paraArea', area)
    createList('Parallelogram', fixt)
}
function getRhombus(){
    const parallelogramBase = getinput('rhombus-base')
    const parallelogramHight = getinput('rhombus-hight')
    const area =.5 * parallelogramBase * parallelogramHight;
    const fixt  = area.toFixed(2)
    newText('romArea', fixt)
    createList('Rhombus', fixt)
}
function getPentagon(){
    const PentagonBase = getinput('pentagon-base')
    const PentagonPos = getinput('pentagon-pos')
    const area =.5 * PentagonBase * PentagonPos;
    const fixt  = area.toFixed(2)
    newText('panArea', fixt)
    createList('Pentagoan', fixt)
}
function getEllipse(){
    const EllipseBase = getinput('ellipse-base')
    const EllipsePos = getinput('ellipse-hight')
    const area =Math.PI * EllipseBase * EllipsePos;
    const fixt  = area.toFixed(2)
    newText('ellArea', fixt)
    createList('Ellipse', fixt)
}

function createList(el, el1){
    const newSection = document.getElementById('newSec');
    const list = document.createElement('p');
    const count = newSection.childElementCount;
    list.innerHTML = `${count} ${el} area = ${el1} cm<sup>2</sup>  <button class="btn btn-primary">Convert m<sup>2</sup></button`
    newSection.appendChild(list);
}
