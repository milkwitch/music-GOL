export default class GameOfLife {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = this.makeBoard();
    }

    makeBoard() {
        let board = [];
        for (let i = 0; i < this.height; i++) {
            let row = new Array(this.width).fill(0);
            board.push(row)
        }
        console.log('BOARD::', board)
        return board;
    }

    getCell(row, col) {
        if (row > -1 && row < this.height) {
            if (col > -1 && col < this.width) {
                return this.board[row][col]
            }
            else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    setCell(value, row, col) {
        if (row > -1 && row < this.height) {
            if (col > -1 && col < this.width) {
                this.board[row][col] = value;
            } else {
                this.board[row][col] = 0;
            }
        } else {
            this.board[row][col] = 0;
        }
    }

    toggleCell (row, col) {
        if (this.getCell(row, col) === 0) {
            this.setCell(1, row, col);
        } else if (this.getCell(row, col) === 1) {
            this.setCell(0, row, col);
        }
        console.log(this.board)
    }

    // livingNeighbors(row, col) {

    // }
}
