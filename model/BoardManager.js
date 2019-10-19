import Floor from './Floor'
import Character from './Character'
import Wall from './Wall'

export default class BoardManager {
    constructor(cols, rows) {
        this.cols = cols
        this.rows = rows
    }

    generateBoard() {
        let board = []

        for (let i = 0; i < this.rows; i++) {
            let row = []

            for (let j = 0; j < this.cols; j++) {
                row = [...row, new Floor]
            }

            board = [...board, row]
        }

        board[0][1] = new Wall
        board[1][1] = new Wall
        board[2][1] = new Wall
        board[3][1] = new Wall

        board[0][2] = new Character

        return board
    }


}