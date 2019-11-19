// 攻速
// https://baijiahao.baidu.com/s?id=1634512632263783063&wfr=spider&for=pc
// 初始属性
// https://wenku.baidu.com/view/4f2f4c9903d276a20029bd64783e0912a2167c65.html
// 全英雄
// https://www.gamersky.com/showimage/id_gamersky.shtml?http://img1.gamersky.com/image2019/05/20190509_zh1_440_9/image001.jpg

// 确定帧数
let Frame = 1;
const FRAME_MAX = 10000;

const LUBAN = {
    life: 3401,
    spells: 440,
    attackPhysical: 174,
    attackMagic: 0,
    defensePhysical: 88,
    attackSpeed: 14
};

const DAJI = {
    life: 3229,
    spells: 490,
    attackPhysical: 170,
    attackMagic: 0,
    defensePhysical: 86,
    attackSpeed: 17
};

LUBAN.cacheAttackSpeed = LUBAN.attackSpeed;
DAJI.cacheAttackSpeed = DAJI.attackSpeed;

const runFrame = () => {
    // Control limit frames to prevent a confrontation from failing
    let isChange = false;
    if (Frame > FRAME_MAX) {
        return;
    }
    if (LUBAN.cacheAttackSpeed === 0) {
        DAJI.life = DAJI.life - LUBAN.attackPhysical;
        LUBAN.cacheAttackSpeed = LUBAN.attackSpeed;
        isChange = true;
    } else {
        LUBAN.cacheAttackSpeed = LUBAN.cacheAttackSpeed - 1;
    }
    if (DAJI.cacheAttackSpeed === 0) {
        LUBAN.life = LUBAN.life - DAJI.attackPhysical;
        DAJI.cacheAttackSpeed = DAJI.attackSpeed;
        isChange = true;
    } else {
        DAJI.cacheAttackSpeed = DAJI.cacheAttackSpeed - 1;
    }
    if (DAJI.life <= 0 || DAJI.life <= 0) {
        console.log(
            `第${Frame}帧:鲁班生命值${LUBAN.life},妲己生命值${DAJI.life}`
        );
        return;
    }
    if (isChange) {
        console.log(
            `第${Frame}帧:鲁班生命值${LUBAN.life},妲己生命值${DAJI.life}`
        );
    }
    Frame++;
    runFrame();
};

runFrame();
