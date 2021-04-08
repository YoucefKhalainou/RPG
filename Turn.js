class Turn {

    constructor(turnLeft, players) {
        this.turnLeft = turnLeft
        this.players = players
    }

    startTurn(turnLeft, players, currentPlayer) {

        this.players.forEach(element => {

            this.currentPlayer = element
            this.display_status(players);

            if (!this.isWinner(players)) {
                console.log("La partie est en cours....")
            }

            if (this.isWinner(players).length != 1) {
                console.log(`It's a turn of ${this.currentPlayer.name}(left ${turnLeft} turns)`)
                this.players.map((player) => {
                    if (player.name != this.currentPlayer.name) {
                        game.menu(player)
                        this.currentPlayer.dealDamage(player)
                    }
                })
            }

        });
    }


    display_status(players) {
        players.map((player) => {
            console.log(`${player.name}: ${player.status}`)
        })
    }

    isWinner(players) {
        const winners = players.filter((player) => player.status == "winner")
        return winners
    }

};