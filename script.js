/*const container = document.getElementById('grid-container')
const GRID_SIZE = 16;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;

function createGrid() {
    for (let i = 0; i < TOTAL_CELLS; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
    }
}*/


const container = document.querySelector('.container');
const gridSize = 16;
const totalSquares = gridSize * gridSize;

function createGrid() {
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}


createGrid();

