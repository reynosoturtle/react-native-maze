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

        this.generateBoard()
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
    }

    moveCharacter(direction) {
        if (direction === 'up') {
            // up
            this.moveUp()
        } else if (direction === 'down') {
            // down
            this.moveDown()
        } else if (direction === 'left') {
            // left
            this.moveLeft()
        } else if (direction === 'right') {
            // right
            this.moveRight()
        }

        console.log('x:', this.characterX)
        console.log('y:', this.characterY)
        this.generateBoard()
    }

    moveUp() {
        if (!this.isValidPosition(this.characterX, this.characterY - 1)) {
            return
        }
        this.characterY--
    }

    moveDown() {
        if (!this.isValidPosition(this.characterX, this.characterY + 1)) {
            return
        }
        this.characterY++
    }

    moveLeft() {
        if (!this.isValidPosition(this.characterX - 1, this.characterY)) {
            return
        }
        this.characterX--
    }

    moveRight() {
        if (!this.isValidPosition(this.characterX + 1, this.characterY)) {
            return
        }
        this.characterX++
    }

    isValidPosition(x, y) {
        return x < this.cols && x >= 0 && y < this.rows && y >= 0 && !(this.board[x][y] instanceof Wall)
    }
}