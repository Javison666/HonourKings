const gameFn = require('./util/gameFn')
const frameFn = require("./util/frameFn")
const LUBAN = require("./Player/Luban")
const DAJI = require("./Player/Daji")

let Frame = 0;
const FRAME_MAX = 10000;

const startGame = (players) => {
    // Initialize before the game
    Frame = 0;
    gameFn.initGame(players)
    // Each frame running
    const runFrame = () => {
        if (Frame > FRAME_MAX) {
            return;
        }
        // Attack
        gameFn.runAttackAll(players, Frame);
        // Judge the end of the game
        const result = gameFn.isGameOver(players, Frame)
        if(result){
            return;
        }else{
            Frame++;
            runFrame();
        }
    }
    runFrame()
}
startGame([LUBAN,DAJI])
