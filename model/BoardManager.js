import Floor from './Floor'
import Character from './Character'
import Wall from './Wall'

export default class BoardManager {
    constructor(rows, cols) {
        this.cols = cols
        this.rows = rows
        this.characterX = 0
        // this.characterX = Math.floor(this.cols / 2)
        this.characterY = this.rows - 1
        this.board = []
    }

    generateBoard() {
        this.board = []

        for (let i = 0; i < this.rows; i++) {
            let row = []

            for (let j = 0; j < this.cols; j++) {
                row = [...row, new Floor]
            }

            this.board = [...this.board, row]
        }

        this.board[0][this.rows - 2] = new Wall
        this.board[1][this.rows - 2] = new Wall
        this.board[2][this.rows - 2] = new Wall
        this.board[3][this.rows - 2] = new Wall

        this.board[this.characterX][this.characterY] = new Character

        console.log('new board')
        console.log(this.board[0])
        console.log(this.board[1])
        console.log(this.board[2])
        console.log(this.board[3])
        console.log(this.board[4])
        console.log(this.board[5])
        console.log(this.board[6])
        console.log(this.board[7])
        console.log(this.board[8])
        console.log(this.board[9])

        return this.board
    }

    moveCharacter(direction) {
        if (direction === 'up') {
            // up
            this.characterY--
        } else if (direction === 'down') {
            // down
            this.characterY++
        } else if (direction === 'left') {
            // left
            this.characterX--
        } else if (direction === 'right') {
            // right
            this.characterX++
        }

        console.log('x:', this.characterX)
        console.log('y:', this.characterY)
        this.generateBoard()

        return this.board
    }
}