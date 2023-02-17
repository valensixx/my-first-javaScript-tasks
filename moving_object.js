
function moveUp(){
    const img = document.getElementById('i1');
    img.style.top= `${img.offsetTop -20}px`;
}

function moveDown(){
    const img = document.getElementById('i1');
    img.style.top = `${img.offsetTop + 20}px`;
}

function moveLeft(){
    const img = document.getElementById('i1');
    img.style.left = `${img.offsetLeft -20}px`;
}

function moveRight(){
    const img = document.getElementById('i1');
    img.style.left = `${img.offsetLeft + 20}px`;
}
