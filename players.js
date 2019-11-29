const players = [{
    name:"赵云",
    attr:{
        life: 3366,
        spells: 430,
        attackPhysical: 173,
        attackMagic: 0,
        defensePhysical: 84,
        attackSpeed: 17,
        recoverLife: 50
    }
},{
    name:"钟无艳",
    attr:{
        life: 3338,
        spells: 430,
        attackPhysical: 175,
        attackMagic: 0,
        defensePhysical: 100,
        attackSpeed: 17,
        recoverLife: 48
    }
},{
    name:"吕布",
    attr:{
        life: 3564,
        spells: 0,
        attackPhysical: 181,
        attackMagic: 0,
        defensePhysical: 99,
        attackSpeed: 17,
        recoverLife: 54
    }
},{
    name:"曹操",
    attr:{
        life: 3467,
        spells: 0,
        attackPhysical: 174,
        attackMagic: 0,
        defensePhysical: 104,
        attackSpeed: 17,
        recoverLife: 54
    }
},{
    name:"典韦",
    attr:{
        life: 3434,
        spells: 430,
        attackPhysical: 168,
        attackMagic: 0,
        defensePhysical: 89,
        attackSpeed: 16,
        recoverLife: 52
    }
},{
    name:"宫本武藏",
    attr:{
        life: 2902,
        spells: 0,
        attackPhysical: 157,
        attackMagic: 0,
        defensePhysical: 106,
        attackSpeed: 16,
        recoverLife: 47
    }
},{
    name:"达摩",
    attr:{
        life: 3213,
        spells: 420,
        attackPhysical: 171,
        attackMagic: 0,
        defensePhysical: 95,
        attackSpeed: 16,
        recoverLife: 51
    }
},{
    name:"老夫子",
    attr:{
        life: 3370,
        spells: 5,
        attackPhysical: 178,
        attackMagic: 0,
        defensePhysical: 100,
        attackSpeed: 14,
        recoverLife: 51
    }
},{
    name:"关羽",
    attr:{
        life: 3451,
        spells: 10,
        attackPhysical: 170,
        attackMagic: 0,
        defensePhysical: 101,
        attackSpeed: 18,
        recoverLife: 53
    }
},{
    name:"露娜",
    attr:{
        life: 3021,
        spells: 450,
        attackPhysical: 163,
        attackMagic: 0,
        defensePhysical: 102,
        attackSpeed: 14,
        recoverLife: 52
    }
},{
    name:"花木兰",
    attr:{
        life: 2886,
        spells: 100,
        attackPhysical: 155,
        attackMagic: 0,
        defensePhysical: 86,
        attackSpeed: 14,
        recoverLife: 44
    }
},{
    name:"亚瑟",
    attr:{
        life: 3622,
        spells: 0,
        attackPhysical: 164,
        attackMagic: 0,
        defensePhysical: 98,
        attackSpeed: 17,
        recoverLife: 55
    }
},{
    name:"孙悟空",
    attr:{
        life: 3923,
        spells: 430,
        attackPhysical: 167,
        attackMagic: 0,
        defensePhysical: 98,
        attackSpeed: 17,
        recoverLife: 50
    }
},{
    name:"刘备",
    attr:{
        life: 3225,
        spells: 440,
        attackPhysical: 163,
        attackMagic: 0,
        defensePhysical: 113,
        attackSpeed: 16,
        recoverLife: 40
    }
},{
    name:"杨戬",
    attr:{
        life: 3339,
        spells: 420,
        attackPhysical: 166,
        attackMagic: 0,
        defensePhysical: 98,
        attackSpeed: 17,
        recoverLife: 51
    }
},{
    name:"雅典娜",
    attr:{
        life: 2862,
        spells: 430,
        attackPhysical: 162,
        attackMagic: 0,
        defensePhysical: 106,
        attackSpeed: 17,
        recoverLife: 44
    }
},{
    name:"哪吒",
    attr:{
        life: 3483,
        spells: 450,
        attackPhysical: 159,
        attackMagic: 0,
        defensePhysical: 99,
        attackSpeed: 17,
        recoverLife: 53
    }
},{
    name:"铠",
    attr:{
        life: 3387,
        spells: 440,
        attackPhysical: 176,
        attackMagic: 0,
        defensePhysical: 107,
        attackSpeed: 17,
        recoverLife: 44
    }
},{
    name:"狂铁",
    attr:{
        life: 3263,
        spells: 90,
        attackPhysical: 166,
        attackMagic: 0,
        defensePhysical: 95,
        attackSpeed: 17,
        recoverLife: 50
    }
},{
    name:"李信",
    attr:{
        life: 3418,
        spells: 0,
        attackPhysical: 176,
        attackMagic: 0,
        defensePhysical: 106,
        attackSpeed: 16,
        recoverLife: 52
    }
},{
    name:"小乔",
    attr:{
        life: 3088,
        spells: 490,
        attackPhysical: 153,
        attackMagic: 0,
        defensePhysical: 95,
        attackSpeed: 17,
        recoverLife: 44
    }
},{
    name:"墨子",
    attr:{
        life: 3078,
        spells: 420,
        attackPhysical: 191,
        attackMagic: 0,
        defensePhysical: 102,
        attackSpeed: 14,
        recoverLife: 76
    }
},{
    name:"妲己",
    attr:{
        life: 3229,
        spells: 490,
        attackPhysical: 170,
        attackMagic: 0,
        defensePhysical: 86,
        attackSpeed: 17,
        recoverLife: 46
    }
},{
    name:"嬴政",
    attr:{
        life: 3125,
        spells: 490,
        attackPhysical: 157,
        attackMagic: 0,
        defensePhysical: 91,
        attackSpeed: 18,
        recoverLife: 44
    }
},{
    name:"高渐离",
    attr:{
        life: 3122,
        spells: 490,
        attackPhysical: 163,
        attackMagic: 0,
        defensePhysical: 98,
        attackSpeed: 17,
        recoverLife: 44
    }
},{
    name:"扁鹊",
    attr:{
        life: 3036,
        spells: 490,
        attackPhysical: 168,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 17,
        recoverLife: 43
    }
},{
    name:"芈月",
    attr:{
        life: 3105,
        spells: 0,
        attackPhysical: 152,
        attackMagic: 0,
        defensePhysical: 88,
        attackSpeed: 18,
        recoverLife: 44
    }
},{
    name:"周瑜",
    attr:{
        life: 3093,
        spells: 490,
        attackPhysical: 160,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 17,
        recoverLife: 44
    }
},{
    name:"甄姬",
    attr:{
        life: 3041,
        spells: 490,
        attackPhysical: 165,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 17,
        recoverLife: 43
    }
},{
    name:"武则天",
    attr:{
        life: 2860,
        spells: 490,
        attackPhysical: 173,
        attackMagic: 0,
        defensePhysical: 95,
        attackSpeed: 17,
        recoverLife: 40
    }
},{
    name:"貂蝉",
    attr:{
        life: 3019,
        spells: 490,
        attackPhysical: 167,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 17,
        recoverLife: 43
    }
},{
    name:"安琪拉",
    attr:{
        life: 3323,
        spells: 490,
        attackPhysical: 170,
        attackMagic: 0,
        defensePhysical: 83,
        attackSpeed: 17,
        recoverLife: 47
    }
},{
    name:"姜子牙",
    attr:{
        life: 2958,
        spells: 490,
        attackPhysical: 168,
        attackMagic: 0,
        defensePhysical: 106,
        attackSpeed: 17,
        recoverLife: 42
    }
},{
    name:"王昭君",
    attr:{
        life: 3083,
        spells: 490,
        attackPhysical: 165,
        attackMagic: 0,
        defensePhysical: 91,
        attackSpeed: 17,
        recoverLife: 44
    }
},{
    name:"张良",
    attr:{
        life: 3027,
        spells: 490,
        attackPhysical: 170,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 25,
        recoverLife: 43
    }
},{
    name:"不知火舞",
    attr:{
        life: 3253,
        spells: 200,
        attackPhysical: 170,
        attackMagic: 0,
        defensePhysical: 89,
        attackSpeed: 17,
        recoverLife: 46
    }
},{
    name:"钟馗",
    attr:{
        life: 3420,
        spells: 490,
        attackPhysical: 180,
        attackMagic: 0,
        defensePhysical: 99,
        attackSpeed: 17,
        recoverLife: 57
    }
},{
    name:"诸葛亮",
    attr:{
        life: 3135,
        spells: 490,
        attackPhysical: 156,
        attackMagic: 10,
        defensePhysical: 87,
        attackSpeed: 17,
        recoverLife: 44
    }
},{
    name:"干将莫邪",
    attr:{
        life: 3189,
        spells: 490,
        attackPhysical: 159,
        attackMagic: 0,
        defensePhysical: 92,
        attackSpeed: 17,
        recoverLife: 45
    }
},{
    name:"女娲",
    attr:{
        life: 3157,
        spells: 500,
        attackPhysical: 155,
        attackMagic: 0,
        defensePhysical: 89,
        attackSpeed: 17,
        recoverLife: 45
    }
},{
    name:"杨玉环",
    attr:{
        life: 2966,
        spells: 470,
        attackPhysical: 162,
        attackMagic: 0,
        defensePhysical: 80,
        attackSpeed: 17,
        recoverLife: 42
    }
},{
    name:"奕星",
    attr:{
        life: 3176,
        spells: 490,
        attackPhysical: 171,
        attackMagic: 0,
        defensePhysical: 90,
        attackSpeed: 17,
        recoverLife: 45
    }
},{
    name:"米莱狄",
    attr:{
        life: 3166,
        spells: 490,
        attackPhysical: 165,
        attackMagic: 0,
        defensePhysical: 91,
        attackSpeed: 16,
        recoverLife: 45
    }
},{
    name:"沈梦溪",
    attr:{
        life: 3238,
        spells: 440,
        attackPhysical: 171,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 14,
        recoverLife: 46
    }
},{
    name:"上官婉儿",
    attr:{
        life: 3389,
        spells: 490,
        attackPhysical: 156,
        attackMagic: 0,
        defensePhysical: 93,
        attackSpeed: 16,
        recoverLife: 48
    }
},{
    name:"廉颇",
    attr:{
        life: 3543,
        spells: 420,
        attackPhysical: 163,
        attackMagic: 0,
        defensePhysical: 132,
        attackSpeed: 17,
        recoverLife: 88
    }
},{
    name:"刘禅",
    attr:{
        life: 3364,
        spells: 420,
        attackPhysical: 178,
        attackMagic: 0,
        defensePhysical: 139,
        attackSpeed: 17,
        recoverLife: 84
    }
},{
    name:"白起",
    attr:{
        life: 3084,
        spells: 420,
        attackPhysical: 158,
        attackMagic: 0,
        defensePhysical: 98,
        attackSpeed: 17,
        recoverLife: 77
    }
},{
    name:"夏侯惇",
    attr:{
        life: 3307,
        spells: 430,
        attackPhysical: 159,
        attackMagic: 0,
        defensePhysical: 89,
        attackSpeed: 25,
        recoverLife: 82
    }
},{
    name:"项羽",
    attr:{
        life: 3535,
        spells: 420,
        attackPhysical: 157,
        attackMagic: 0,
        defensePhysical: 123,
        attackSpeed: 17,
        recoverLife: 58
    }
},{
    name:"程咬金",
    attr:{
        life: 3437,
        spells: 0,
        attackPhysical: 161,
        attackMagic: 0,
        defensePhysical: 107,
        attackSpeed: 17,
        recoverLife: 85
    }
},{
    name:"刘邦",
    attr:{
        life: 3369,
        spells: 470,
        attackPhysical: 158,
        attackMagic: 0,
        defensePhysical: 121,
        attackSpeed: 17,
        recoverLife: 88
    }
},{
    name:"牛魔",
    attr:{
        life: 3537,
        spells: 470,
        attackPhysical: 156,
        attackMagic: 0,
        defensePhysical: 109,
        attackSpeed: 17,
        recoverLife: 88
    }
},{
    name:"张飞",
    attr:{
        life: 3450,
        spells: 100,
        attackPhysical: 153,
        attackMagic: 0,
        defensePhysical: 125,
        attackSpeed: 17,
        recoverLife: 57
    }
},{
    name:"东皇太一",
    attr:{
        life: 3201,
        spells: 470,
        attackPhysical: 163,
        attackMagic: 0,
        defensePhysical: 99,
        attackSpeed: 17,
        recoverLife: 80
    }
},{
    name:"苏烈",
    attr:{
        life: 3469,
        spells: 470,
        attackPhysical: 171,
        attackMagic: 0,
        defensePhysical: 91,
        attackSpeed: 16,
        recoverLife: 86
    }
},{
    name:"梦奇",
    attr:{
        life: 3041,
        spells: 100,
        attackPhysical: 171,
        attackMagic: 0,
        defensePhysical: 79,
        attackSpeed: 16,
        recoverLife: 76
    }
},{
    name:"孙策",
    attr:{
        life: 3237,
        spells: 420,
        attackPhysical: 151,
        attackMagic: 0,
        defensePhysical: 97,
        attackSpeed: 16,
        recoverLife: 80
    }
},{
    name:"阿轲",
    attr:{
        life: 3269,
        spells: 0,
        attackPhysical: 177,
        attackMagic: 0,
        defensePhysical: 89,
        attackSpeed: 17,
        recoverLife: 50
    }
},{
    name:"李白",
    attr:{
        life: 2968,
        spells: 450,
        attackPhysical: 169,
        attackMagic: 0,
        defensePhysical: 98,
        attackSpeed: 14,
        recoverLife: 49
    }
},{
    name:"韩信",
    attr:{
        life: 2988,
        spells: 430,
        attackPhysical: 172,
        attackMagic: 0,
        defensePhysical: 92,
        attackSpeed: 14,
        recoverLife: 45
    }
},{
    name:"兰陵王",
    attr:{
        life: 3292,
        spells: 450,
        attackPhysical: 171,
        attackMagic: 0,
        defensePhysical: 85,
        attackSpeed: 17,
        recoverLife: 52
    }
},{
    name:"娜可露露",
    attr:{
        life: 3239,
        spells: 450,
        attackPhysical: 173,
        attackMagic: 0,
        defensePhysical: 86,
        attackSpeed: 17,
        recoverLife: 47
    }
},{
    name:"橘右京",
    attr:{
        life: 3150,
        spells: 0,
        attackPhysical: 165,
        attackMagic: 0,
        defensePhysical: 96,
        attackSpeed: 14,
        recoverLife: 48
    }
},{
    name:"百里玄策",
    attr:{
        life: 3359,
        spells: 450,
        attackPhysical: 188,
        attackMagic: 0,
        defensePhysical: 88,
        attackSpeed: 16,
        recoverLife: 51
    }
},{
    name:"元歌",
    attr:{
        life: 2637,
        spells: 490,
        attackPhysical: 152,
        attackMagic: 0,
        defensePhysical: 86,
        attackSpeed: 17,
        recoverLife: 40
    }
},{
    name:"裴擒虎",
    attr:{
        life: 3178,
        spells: 200,
        attackPhysical: 151,
        attackMagic: 0,
        defensePhysical: 86,
        attackSpeed: 16,
        recoverLife: 45
    }
},{
    name:"司马懿",
    attr:{
        life: 3196,
        spells: 80,
        attackPhysical: 179,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 17,
        recoverLife: 45
    }
},{
    name:"孙尚香",
    attr:{
        life: 3235,
        spells: 440,
        attackPhysical: 172,
        attackMagic: 0,
        defensePhysical: 89,
        attackSpeed: 16,
        recoverLife: 40
    }
},{
    name:"鲁班七号",
    attr:{
        life: 3401,
        spells: 440,
        attackPhysical: 174,
        attackMagic: 0,
        defensePhysical: 88,
        attackSpeed: 14,
        recoverLife: 42
    }
},{
    name:"马可波罗",
    attr:{
        life: 3041,
        spells: 200,
        attackPhysical: 175,
        attackMagic: 0,
        defensePhysical: 91,
        attackSpeed: 17,
        recoverLife: 46
    }
},{
    name:"狄仁杰",
    attr:{
        life: 3242,
        spells: 440,
        attackPhysical: 169,
        attackMagic: 0,
        defensePhysical: 95,
        attackSpeed: 14,
        recoverLife: 40
    }
},{
    name:"后羿",
    attr:{
        life: 3182,
        spells: 440,
        attackPhysical: 180,
        attackMagic: 0,
        defensePhysical: 86,
        attackSpeed: 16,
        recoverLife: 45,
        recoverLife: 41
    }
},{
    name:"李元芳",
    attr:{
        life: 3007,
        spells: 440,
        attackPhysical: 161,
        attackMagic: 0,
        defensePhysical: 87,
        attackSpeed: 17,
        recoverLife: 45,
        recoverLife: 37
    }
},{
    name:"虞姬",
    attr:{
        life: 2977,
        spells: 440,
        attackPhysical: 165,
        attackMagic: 0,
        defensePhysical: 84,
        attackSpeed: 17,
        recoverLife: 36
    }
},{
    name:"成吉思汗",
    attr:{
        life: 3027,
        spells: 440,
        attackPhysical: 184,
        attackMagic: 0,
        defensePhysical: 94,
        attackSpeed: 16,
        recoverLife: 37
    }
},{
    name:"黄忠",
    attr:{
        life: 3226,
        spells: 440,
        attackPhysical: 187,
        attackMagic: 0,
        defensePhysical: 91,
        attackSpeed: 16,
        recoverLife: 39
    }
},{
    name:"百里守约",
    attr:{
        life: 3019,
        spells: 440,
        attackPhysical: 188,
        attackMagic: 0,
        defensePhysical: 94,
        attackSpeed: 25,
        recoverLife: 39
    }
},{
    name:"公孙离",
    attr:{
        life: 3050,
        spells: 440,
        attackPhysical: 173,
        attackMagic: 0,
        defensePhysical: 95,
        attackSpeed: 17,
        recoverLife: 38
    }
},{
    name:"伽罗",
    attr:{
        life: 3173,
        spells: 490,
        attackPhysical: 184,
        attackMagic: 0,
        defensePhysical: 84,
        attackSpeed: 16,
        recoverLife: 39
    }
},{
    name:"蔡文姬",
    attr:{
        life: 3238,
        spells: 470,
        attackPhysical: 159,
        attackMagic: 0,
        defensePhysical: 96,
        attackSpeed: 17,
        recoverLife: 38
    }
},{
    name:"孙膑",
    attr:{
        life: 3208,
        spells: 470,
        attackPhysical: 176,
        attackMagic: 0,
        defensePhysical: 98,
        attackSpeed: 17,
        recoverLife: 45
    }
},{
    name:"太乙真人",
    attr:{
        life: 3443,
        spells: 420,
        attackPhysical: 154,
        attackMagic: 0,
        defensePhysical: 94,
        attackSpeed: 17,
        recoverLife: 49
    }
},{
    name:"庄周",
    attr:{
        life: 3311,
        spells: 420,
        attackPhysical: 170,
        attackMagic: 0,
        defensePhysical: 150,
        attackSpeed: 17,
        recoverLife: 55
    }
},{
    name:"大乔",
    attr:{
        life: 3051,
        spells: 470,
        attackPhysical: 170,
        attackMagic: 0,
        defensePhysical: 150,
        attackSpeed: 17,
        recoverLife: 42
    }
},{
    name:"鬼谷子",
    attr:{
        life: 3322,
        spells: 450,
        attackPhysical: 162,
        attackMagic: 0,
        defensePhysical: 92,
        attackSpeed: 17,
        recoverLife: 47
    }
},{
    name:"明世隐",
    attr:{
        life: 3255,
        spells: 440,
        attackPhysical: 162,
        attackMagic: 0,
        defensePhysical: 99,
        attackSpeed: 17,
        recoverLife: 46
    }
},{
    name:"盾山",
    attr:{
        life: 3361,
        spells: 420,
        attackPhysical: 207,
        attackMagic: 0,
        defensePhysical: 126,
        attackSpeed: 17,
        recoverLife: 48
    }
}]