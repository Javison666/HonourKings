const frameFn = require("./frameFn")
const gameFn = {
    // Initialize player properties
    initGame: (players) => {
        Frame = 0;
        players.forEach(item => {
            // Cache attack speed for time slice calculation
            item.attr.cacheAttackSpeed = item.attr.attackSpeed;
        })
    },
    // Attack method: player1 attack player2
    runAttackPlayer: (player1, player2, Frame) => {
        if (player1.attr.life <= 0) {
            return false;
        }
        if (player1.attr.cacheAttackSpeed === 0) {
            // 实际伤害=攻击方输出*602/（防御方实际物防+602）
            player2.attr.life = Math.round(player2.attr.life - player1.attr.attackPhysical * 602 / (player2.attr.defensePhysical + 602));
            player1.attr.cacheAttackSpeed = player1.attr.attackSpeed;
            console.log(`${frameFn.showTime(Frame)}:${player1.name}发起攻击，${player2.name}剩余血量${player2.attr.life}`)
        } else {
            player1.attr.cacheAttackSpeed = player1.attr.cacheAttackSpeed - 1;
        }
        return true
    },
    runAttackAll: (players, Frame) => {
        gameFn.runAttackPlayer(players[0], players[1], Frame)
        gameFn.runAttackPlayer(players[1], players[0], Frame)
    },
    // Judge the end of the game
    isGameOver: (players, Frame) => {
        if (players[0].attr.life <= 0 && players[1].attr.life <= 0) {
            console.log(`${result.name}在${frameFn.showTime(Frame)}失败`)
            return true
        }
        for (const player of players) {
            if (player.attr.life <= 0) {
                console.log(`${player.name}在${frameFn.showTime(Frame)}失败`)
                return true
            }
        }
        return false;
    }
}
module.exports = gameFn;