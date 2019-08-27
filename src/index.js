import GameOfLife from './GameOfLife'
import { play } from './instrument'

const width = 16;
const height = 16;

const gol = new GameOfLife(width, height);

const tds = [];

const table = document.createElement('tbody');

for (let h = 0; h < height; h++) {
    const tr = document.createElement('tr');

    for (let w = 0; w < width; w++) {
        const td = document.createElement('td');
        td.dataset.row = h;
        td.dataset.col = w;
        tds.push(td);
        tr.append(td);
    }
    table.append(tr);
}

const paint = () => {
    for (let i = 0; i < gol.board.length; i++) {
        const currentRow = document.getElementsByTagName('tr')[i];
        for (let j = 0; j < gol.board[i].length; j++) {
            const currentElement = currentRow.getElementsByTagName('td')[j]
            if (gol.getCell(i, j) === 1) {
                currentElement.className = 'alive';
            } else {
                currentElement.clasName = '';
            }
        }
    }
}
document.getElementById('board').append(table);

document.getElementById('board').addEventListener('click', event => {
    console.log(event.target)
    gol.toggleCell(event.target.dataset.row, event.target.dataset.col);
    paint();
    let cellNum = event.target.dataset.col + event.target.dataset.row;
    console.log(event.target.dataset.row)
    play(event.target.dataset.row, event.target.dataset.col);
})
