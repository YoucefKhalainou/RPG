class Game {

    players = [first_player, second_player, third_player];
    turnLeft = 10
    currentPlayer = ""


    newTurn() {
        while (this.turnLeft != 0) {
            if (this.players[0].status != "winner" && this.players[1].status != "winner") {
                const turn = new Turn(this.turnLeft, this.players)
                turn.startTurn(this.turnLeft, this.players, this.currentPlayer)
            }
            this.turnLeft -= 1
        }
    }

    menu(player) {
        confirm(`Type OK to attack 🥊🥊🥊 ${player.name}`)
    }

}


