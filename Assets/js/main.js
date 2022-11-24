/*Player Class*/

class Player {

    constructor(type) {
        this.type = type;
    }

    turn(place) {
        console.log("Player: " + this.type + " turn");
        drawForm(this.type, place);

    }

}

/*Game Class*/
class Game {

    constructor() {
        this.player1 = new Player("circle");
        this.player2 = new Player("square");
        this.playerturn = this.player1;
        this.gamematrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.finished = false;
        this.gameturns =0;
    }

    start() {
        console.log("Game Started");

    }

    //checa se a posição está ocupada
    check_position(x, y) {
        if (this.gamematrix[x][y] != 0) {
            return true;
        }
        return false;
    }

    playerPlay(place) {

        //set on matrix
        let x = place[0];
        switch (x) {
            case "a":
                x = 0;

                break;
            case "b":
                x = 1;

                break;
            case "c":
                x = 2;

                break;

        }

        let y = place[1] - 1;

        if (!this.check_position(x, y) && (this.finished==false)) {
            this.gameturns++;
            if(this.gameturns== (this.gamematrix.length*this.gamematrix.length)){
                this.gameover();
                document.getElementById("winner").innerHTML = "O Jogo Empatou!";
            }
            this.playerturn.turn(place);




            switch (this.playerturn.type) {
                case this.player1.type:
                    this.gamematrix[x][y] = 1;
                    break;
                case this.player2.type:
                    this.gamematrix[x][y] = 2;
                    break;
            }

            //new next turn
            if (this.playerturn == this.player1) {
                this.playerturn = this.player2;
            } else {
                this.playerturn = this.player1;
            }

            console.log(this.gamematrix);

            if(this.check_win(1)){
                console.log("Player 1 Win");
                this.gameover();
                document.getElementById("winner").innerHTML = "Player 2 Win";
            }
            if(this.check_win(2)){
                console.log("Player 2 Win");
                this.gameover();
                document.getElementById("winner").innerHTML = "Player 2 Win";
            }

        }
    }


    check_win(Player){

        //check horizontal
        for (let i = 0; i < 3; i++) {
            if (this.gamematrix[i][0] == Player && this.gamematrix[i][1] == Player && this.gamematrix[i][2] == Player) {
                return true;
            }
        }

        //check vertical
        for (let i = 0; i < 3; i++) {
            if (this.gamematrix[0][i] == Player && this.gamematrix[1][i] == Player && this.gamematrix[2][i] == Player) {
                return true;
            }
        }

        //check diagonal
        if (this.gamematrix[0][0] == Player && this.gamematrix[1][1] == Player && this.gamematrix[2][2] == Player) {
            return true;
        }
        if (this.gamematrix[0][2] == Player && this.gamematrix[1][1] == Player && this.gamematrix[2][0] == Player) {
            return true;
        }

        return false;

    }

    gameover() {
        this.finished = true;
    
    }

}

/*Game Instance*/
let game = new Game();
game.start();


