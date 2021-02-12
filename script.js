const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener('mouseover', 
        e => e.target.classList.add('grid-item-filled')
    )
    };
};


function newGrid(){
    makeRows(0,0);
    let userRowsCols =prompt("How many rows and columns? Max 100");
    makeRows(userRowsCols, userRowsCols);
};


makeRows(16,16);
