import Floor from './Floor'
import Character from './Character'
import Wall from './Wall'

class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

Position.prototype.equals = function(o) {
    return this.x == o.x && this.y == o.y
}

export default class BoardManager {
    constructor(rows, cols) {
        this.cols = cols
        this.rows = rows
        this.characterX = 0
        this.characterY = this.rows - 1
        this.board = []

        this.generateBoard()
        this.board[this.characterX][this.characterY] = new Character
    }

    generateBoard() {
        this.board = []
        for (let i = 0; i < this.rows; i++) {
            let row = []

            for (let j = 0; j < this.cols; j++) {
                row = [...row, new Wall]
            }

            this.board = [...this.board, row]
        }

        var path = [new Position(this.characterX, this.characterY)]
        var floors = []

        while (path.length > 0) {
            let randomPosition = path[this.getRandomInt(0, path.length - 1)]
            floors.push(randomPosition)

            let neighbors = []
            if (this.isValidPosition(randomPosition.x - 2, randomPosition.y)) 
                neighbors.push(new Position(randomPosition.x - 2, randomPosition.y))
            if (this.isValidPosition(randomPosition.x + 2, randomPosition.y)) 
                neighbors.push(new Position(randomPosition.x + 2, randomPosition.y))
            if (this.isValidPosition(randomPosition.x, randomPosition.y - 2)) 
                neighbors.push(new Position(randomPosition.x, randomPosition.y - 2))
            if (this.isValidPosition(randomPosition.x, randomPosition.y + 2)) 
                neighbors.push(new Position(randomPosition.x, randomPosition.y + 2))

            let visitedNeighbors = neighbors.filter(position => this.includes(floors, position))
            if (visitedNeighbors.length > 0) {
                let connectedNeighbor = visitedNeighbors[this.getRandomInt(0, visitedNeighbors.length - 1)]
                floors.push(new Position((randomPosition.x + connectedNeighbor.x) / 2, (randomPosition.y + connectedNeighbor.y) / 2))
            }

            neighbors.forEach((neighbor) => {
                    path.push(neighbor)
            })
            path = path.filter(position => !this.includes(floors, position))
        }

        floors.forEach(position => {
            this.board[position.x][position.y] = new Floor
        })
    }

    includes(array, position) {
        for (let i = 0; i < array.length; ++i) {
            let p = array[i]
            if (position.x == p.x && position.y == p.y) {
                return true
            }
        }
        return false
    }

    moveCharacter(direction) {
        this.board[this.characterX][this.characterY] = new Floor

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

        this.board[this.characterX][this.characterY] = new Character
    }

    moveUp() {
        if (!this.canMove(this.characterX, this.characterY - 1)) {
            return
        }
        this.characterY--
    }

    moveDown() {
        if (!this.canMove(this.characterX, this.characterY + 1)) {
            return
        }
        this.characterY++
    }

    moveLeft() {
        if (!this.canMove(this.characterX - 1, this.characterY)) {
            return
        }
        this.characterX--
    }

    moveRight() {
        if (!this.canMove(this.characterX + 1, this.characterY)) {
            return
        }
        this.characterX++
    }

    canMove(x, y) {
        return this.isValidPosition(x, y) && !this.isWall(x, y)
    }

    isValidPosition(x, y) {
        return x < this.cols && x >= 0 && y < this.rows && y >= 0
    }

    isWall(x, y) {
        return this.board[x][y] instanceof Wall
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}