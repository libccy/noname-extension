game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"剧情战役",content:function (config){
    if(!lib.storage.stage) lib.storage.stage={};
if(!lib.storage.stage["剧情战役"]){
lib.storage.stage["剧情战役"]={
    name:"剧情战役",
    intro:"<span style=\"font-size:19px;font-weight:550;color: yellow;font-style: oblique\">使用前需开启“诸神降临”（路径：扩展→诸神降临）</span>",
    scenes:[{"name":"黄巾之乱","intro":"","players":[{"name":"sp_zhangjiao","name2":"none","identity":"fan","position":1,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["shandian","random","random"]],"equips":[],"judges":[]},{"name":"zhangbao","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhangliang","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"zhu","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"zhangfei","name2":"none","identity":"zhong","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"guanyu","name2":"none","identity":"zhong","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"讨伐董卓","intro":"","players":[{"name":"old_yuanshu","name2":"jiling","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"caocao","name2":"sp_caoren","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"guanyu","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"Battle_yuanshao","name2":"guotufengji","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"mateng","name2":"madai","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"sunjian","name2":"zumao","identity":"fan","position":2,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"Battle_lvbu","name2":"xin_liru","identity":"zhong","position":3,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Battle_dongzhuo","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"温酒斩华雄","intro":"","players":[{"name":"guanyu","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[["qinglong","random","random"]],"judges":[]},{"name":"huaxiong","name2":"none","identity":"fan","position":0,"hp":9,"maxHp":9,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["guanshi","random","random"]],"equips":[["dawan","random","random"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"三英战吕布","intro":"","players":[{"name":"boss_lvbu3","name2":"none","identity":"zhu","position":0,"hp":9,"maxHp":9,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[["cixiong","random","random"]],"judges":[]},{"name":"guanyu","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[["qinglong","random","random"]],"judges":[]},{"name":"zhangfei","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[["zhangba","random","random"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"群雄逐鹿","intro":"","players":[{"name":"liuxie","name2":"none","identity":"zhu","position":0,"hp":3,"maxHp":3,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caocao","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"re_gongsunzan","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"sunjian","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"liubiao","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_yuanshao","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"yuanshu","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"挟天子令诸侯","intro":"","players":[{"name":"liuxie","name2":"none","identity":"zhu","position":1,"hp":3,"maxHp":3,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_caocao","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"fuwan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"fuhuanghou","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"yuanshu","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"mateng","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_yuanshao","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{name:"奉旨讨贼",
    intro:"",
    players:[{"name":"shen_caocao","name2":"re_xuzhu","identity":"nei","position":8,"hp":20,"maxHp":20,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"liuxie","name2":"none","identity":"zhu","position":0,"hp":3,"maxHp":3,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"fuhuanghou","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"fuwan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"mateng","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"sunce","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"liubiao","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}],
    cardPileTop:[],
    cardPileBottom:[],
    discardPile:[],
    gameDraw:true,
},{"name":"徐州之战（一）","intro":"","players":[{"name":"caocao","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"xiahoudun","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"xunyu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanyu","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangfei","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"taoqian","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"dianwei","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"徐州之战（二）","intro":"","players":[{"name":"chengong","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caocao","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"xiahoudun","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"lvbu","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xunyu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"diaochan","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"徐州之战（三）","intro":"","players":[{"name":"caocao","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"xiahoudun","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"xunyu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanyu","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangfei","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"mizhu","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"征讨袁术","intro":"","players":[{"name":"caocao","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xiahoudun","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"]],"equips":[],"judges":[]},{"name":"re_yuanshu","name2":"none","identity":"fan","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"jiling","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_lvbu","name2":"chengong","identity":"nei","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caohong","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"]],"equips":[],"judges":[]},{"name":"liubei","name2":"guanyu","identity":"fan","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xunyu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"斩颜良诛文丑","intro":"","players":[{"name":"yanwen","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanyu","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[["qinglong","random","random"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"官渡之战","intro":"","players":[{"name":"caocao","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"guojia","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"jsp_guanyu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_yuanshao","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"yj_jushou","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"yanwen","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"千里走单骑","intro":"","players":[{"name":"jsp_guanyu","name2":"none","identity":"zhu","position":1,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[["qinglong","random","random"],["chitu","random","random"]],"judges":[]},{"name":"mifuren","name2":"none","identity":"zhong","position":5,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"ganfuren","name2":"none","identity":"zhong","position":3,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caoxiu","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caozhang","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xuhuang","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xuzhu","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"博望坡之战","intro":"","players":[{"name":"caocao","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xuhuang","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xunyu","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"liubei","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sp_zhugeliang","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhaoyun","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"mizhu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"长坂坡之战","intro":"","players":[{"name":"xuhuang","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"yuejin","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xiahouyuan","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"wenpin","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_xuzhu","name2":"none","identity":"fan","position":8,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["sha","random","random"],["leisha","random","random"],["leisha","random","random"],["leisha","random","random"],["leisha","random","random"],["leisha","random","random"],["leisha","random","random"],["leisha","random","random"],["zhuge","random","random"]],"equips":[],"judges":[]},{"name":"boss_zhaoyun","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":1,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"re_caocao","name2":"none","identity":"fan","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["tao","random","random"],["tao","random","random"],["tao","random","random"],["tao","random","random"],["tao","random","random"],["tao","random","random"],["tao","random","random"],["tao","random","random"]],"equips":[],"judges":[]},{"name":"re_xiahoudun","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"舌战群儒","intro":"","players":[{"name":"sunquan","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"guyong","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"yufan","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhugejin","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhouyu","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_lusu","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhangzhang","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"sp_zhugeliang","name2":"none","identity":"nei","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"草船借箭","intro":"","players":[{"name":"caocao","name2":"re_xuzhu","identity":"zhu","position":1,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"],["wanjian","random","random"]],"equips":[],"judges":[]},{"name":"sp_zhugeliang","name2":"re_lusu","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"赤壁之战","intro":"","players":[{"name":"sunquan","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_zhouyu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sp_zhugeliang","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_huanggai","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"]],"equips":[],"judges":[]},{"name":"caocao","name2":"none","identity":"fan","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"chengyu","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xuhuang","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{name:"火烧连环船",
    intro:"",
    players:[{"name":"re_caocao","name2":"xunyou","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"xiahoudun","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhanghe","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"xuhuang","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_zhangliao","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"yuejin","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_xuzhu","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"huanggai","name2":"none","identity":"zhu","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["tiesuo","random","random"],["tiesuo","random","random"],["tiesuo","random","random"],["tiesuo","random","random"],["tiesuo","random","random"],["tiesuo","random","random"],["tiesuo","random","random"],["tiesuo","random","random"],["huogong","random","random"],["huogong","random","random"],["huogong","random","random"],["huogong","random","random"],["huogong","random","random"],["huogong","random","random"],["huogong","random","random"],["huogong","random","random"],["shan","random","random"],["shan","random","random"],["shan","random","random"],["shan","random","random"]],"equips":[],"judges":[]}],
    cardPileTop:[],
    cardPileBottom:[],
    discardPile:[],
    gameDraw:true,
},{"name":"三气周瑜","intro":"","players":[{"name":"sp_zhugeliang","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sp_zhugeliang","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhouyu","name2":"none","identity":"fan","position":5,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhouyu","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhouyu","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sp_zhugeliang","name2":"none","identity":"zhu","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"合肥之战（一）","intro":"","players":[{"name":"caocao","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"yuejin","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_lidian","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"ganning","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"lingtong","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sunquan","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangzhang","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"合肥之战（二）","intro":"","players":[{"name":"sunquan","name2":"none","identity":"fan","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhoutai","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"]],"equips":[],"judges":[]},{"name":"ganning","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangliao","name2":"none","identity":"zhu","position":0,"hp":12,"maxHp":12,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[["dawan","random","random"],["zhuahuang","random","random"]],"judges":[]},{"name":"zhangzhang","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"]],"equips":[],"judges":[]},{"name":"manchong","name2":"none","identity":"zhong","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_lidian","name2":"none","identity":"zhong","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"yuejin","name2":"none","identity":"zhong","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"征讨西凉","intro":"","players":[{"name":"mateng","name2":"none","identity":"fan","position":5,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_machao","name2":"none","identity":"fan","position":4,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"pangde","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"madai","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caocao","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"jiaxu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caohong","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_xuzhu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"割须弃袍","intro":"","players":[{"name":"sp_machao","name2":"none","identity":"zhu","position":1,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_caocao","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"赤膊上阵","intro":"","players":[{"name":"re_xuzhu","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_machao","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[["renwang","random","random"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"定军山之战","intro":"","players":[{"name":"liubei","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xin_fazheng","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"huangzhong","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhanghe","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xiahouyuan","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_caocao","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["tao","random","random"],["tao","random","random"],["tao","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"单刀赴会","intro":"","players":[{"name":"re_lusu","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanyu","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[["qinglong","random","random"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"樊城之战","intro":"","players":[{"name":"re_guanyu","name2":"none","identity":"zhu","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"manchong","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanping","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhoucang","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sp_pangde","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xin_yujin","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caoren","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[["zhuahuang","random","random"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"白衣渡江","intro":"","players":[{"name":"panzhangmazhong","name2":"none","identity":"zhong","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhoucang","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"maliang","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanping","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_ganning","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"luxun","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"re_lvmeng","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_guanyu","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[["qinglong","random","random"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"荆州之战","intro":"","players":[{"name":"re_guanyu","name2":"none","identity":"fan","position":1,"hp":9,"maxHp":9,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanping","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhoucang","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"maliang","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_lvmeng","name2":"none","identity":"zhu","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"luxun","name2":"none","identity":"zhong","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"handang","name2":"none","identity":"zhong","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caoren","name2":"manchong","identity":"nei","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"败走麦城","intro":"","players":[{"name":"guanping","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"luxun","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_lvmeng","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"re_guanyu","name2":"none","identity":"fan","position":2,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"panzhangmazhong","name2":"none","identity":"zhong","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"争权夺位","intro":"","players":[{"name":"caopi","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"ns_caocao","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caohong","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caoxiu","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caochong","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caozhang","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caozhi","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caozhen","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"夷陵之战","intro":"","players":[{"name":"re_luxun","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"dingfeng","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sunquan","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"sp_liubei","name2":"none","identity":"zhu","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guanzhang","name2":"none","identity":"zhong","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"huangzhong","name2":"none","identity":"zhong","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"re_zhaoyun","name2":"none","identity":"zhong","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"handang","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"平定南中","intro":"","players":[{"name":"sp_zhugeliang","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"guansuo","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"mazhong","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xin_masu","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"weiyan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"menghuo","name2":"none","identity":"fan","position":0,"hp":20,"maxHp":20,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"wutugu","name2":"none","identity":"fan","position":0,"hp":30,"maxHp":30,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhurong","name2":"none","identity":"fan","position":0,"hp":10,"maxHp":10,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"一出祁山","intro":"","players":[{"name":"zhugeliang","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"masu","name2":"none","identity":"zhong","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"weiyan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"madai","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_simayi","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caozhen","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhanghe","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"武乡侯骂死王朗","intro":"",players:[{"name":"zhugeliang","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"wanglang","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],
    cardPileTop:[],
    cardPileBottom:[],
    discardPile:[],
    gameDraw:true},{"name":"二出祁山","intro":"","players":[{"name":"zhugeliang","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"jiangwei","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"weiyan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_simayi","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caozhen","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"madai","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"zhanghe","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"三出祁山","intro":"","players":[{"name":"zhugeliang","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"jiangwei","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"weiyan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_simayi","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"madai","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caozhen","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caorui","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"空城绝唱","intro":"","players":[{"name":"zhugeliang","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"re_simayi","name2":"none","identity":"fan","position":0,"hp":4,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"四出祁山","intro":"","players":[{"name":"zhugeliang","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"jiangwei","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"weiyan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"re_simayi","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"madai","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caorui","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caozhen","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"五出祁山","intro":"","players":[{"name":"zhugeliang","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"weiyan","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"fan","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"madai","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caozhen","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"shen_simayi","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangyi","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"caorui","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"六出祁山","intro":"","players":[{"name":"zhugeliang","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"weiyan","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangyi","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"jiangwei","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caorui","name2":"none","identity":"zhu","position":0,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caozhen","name2":"none","identity":"zhong","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"zhong","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"shen_simayi","name2":"none","identity":"zhong","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"北伐中原","intro":"","players":[{"name":"jiangwei","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"caorui","name2":"none","identity":"fan","position":0,"hp":9,"maxHp":9,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"dengai","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"madai","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"liaohua","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"xiahouba","name2":"none","identity":"fan","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangyi","name2":"none","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"后魏伐蜀","intro":"","players":[{"name":"jiangwei","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"liushan","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"liuchen","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"liaohua","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhangyi","name2":"none","identity":"fan","position":0,"hp":7,"maxHp":7,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"dengai","name2":"none","identity":"zhong","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"zhonghui","name2":"none","identity":"zhu","position":0,"hp":6,"maxHp":6,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"guohuai","name2":"none","identity":"zhong","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"天下无双","intro":"","players":[{"name":"random","name2":"random","identity":"fan","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"boss_lvbu3","identity":"zhu","position":0,"hp":5,"maxHp":5,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"万军取首","intro":"","players":[{"name":"boss_lvbu2","name2":"boss_lvbu3","identity":"fan","position":5,"hp":8,"maxHp":8,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"zhong","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]},{"name":"random","name2":"random","identity":"zhu","position":1,"hp":20,"maxHp":20,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[["tao","random","random"],["tao","random","random"],["tao","random","random"],["tao","random","random"],["random","random","random"],["random","random","random"],["random","random","random"],["random","random","random"]],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"浑身是胆","intro":"","players":[{"name":"boss_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu2","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"游刃有余","intro":"","players":[{"name":"boss_zhaoyun","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu3","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu3","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu3","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu3","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu3","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu3","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"boss_lvbu3","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true}],
    mode:"normal",
    level:0,
};
_status.extensionstage=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("剧情战役");
    if(config.Insane&&(Math.random()<=0.15||get.mode()!='boss')){
      game.addCharacterPack({
    character:{
     //Insane_yuanshao:['male','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_luxun:['male','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_lingtong:['male','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_sunshangxiang:['female','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_jiangwei:['male','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_wangyi:['female','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_lvbu:['male','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_daqiao:['female','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_caiwenji:['female','shen',Infinity,['Insane_weichu'],['forbidai']],
     //Insane_caopi:['male','shen',Infinity,['Insane_weichu'],['forbidai']],
     Insane_huaxiong:['male','shen',8,['Insane_yingzhan','Insane_zhansha'],['zhu']],
     //Insane_sunluban:['female','shen',Infinity,['Insane_weichu'],['forbidai']],
     Insane_zhenji:['female','shen',Infinity,['Insane_luoshen','Insane_fangze','Insane_shengchen'],['zhu']],
     Insane_zhouyu:["male","shen",3,["Insane_weilue","fanjian","Insane_huoji","lnsane_yingnian"],["zhu"]],
     Insane_simayi:["male","shen",3,["Insane_yexin","Insane_tumou","reguicai","Insane_zhuangbing"],["zhu"]],
     Insane_dianchan:["female","shen",3,["Insane_meihuo","lijian","Insane_lianmin"],["zhu"]],
     Insane_zhugeliang:["male","shen",3,["lnsane_liaoyuan","lnsane_mingshu"],["zhu"]],
     Insane_jiaxu:["male","shen",3,["lnsane_mouji","lnsane_sunji","wansha","weimu"],["zhu"]],
     Insane_sunce:["male","shen",3,[],["zhu"]],
    },
    skill:{
     Insane_zhansha:{
      group:['Insane_zhansha1','Insane_zhansha2'],
      locked:true,
      unique:true,      
 				},
      Insane_zhansha1:{
				audio:2,
				trigger:{player:'shaBegin'},
				forced:true,
				filter:function(event,player){
					return !event.directHit;
				},
				priority:-1,
				popup:false,
				content:function(){
					if(typeof trigger.shanRequired=='number'){
						trigger.shanRequired++;
					}
					else{
						trigger.shanRequired=2;
					}
				},
				ai:{
		 			threaten:3.5,
     effect:{
     player:function(card,player,target,current){		
     if(player.countCards('h','tao')&&player.hp<player.maxHp&&card.name=='sha')
					return [0,2*(player.hp-player.maxHp)];
					},
					target:function(card,player,target,current){		
					if(target.hp>0){
					if(card.name=='jiu')
					return [0,0];
					}
					if(card.name=='tao')
					return [1,3];					
					     }
        }
      }
 			},
     Insane_zhansha2:{
			audio:2,
			trigger:{source:'damageBegin'},		
     filter:function(event,player){
     if(player.name!='Insane_huaxiong'&&player.name2!='Insane_huaxiong') return false;   
					return event.card&&event.card.name=='sha'&&event.notLink();
				},
				unique:true,
				forced:true,
			content:function(){
			 trigger.num=player.hp;
			 }
			 },
     Insane_yingzhan:{
      group:'Insane_yingzhan2',
      locked:true,
      unique:true,
      }, 
     Insane_yingzhan2:{
		   audio:2,
			trigger:{target:'useCardToEnd'},
     filter:function(event,player){
     if(player.name!='Insane_huaxiong'&&player.name2!='Insane_huaxiong') return false;   
					return _status.currentPhase!=player&&event.card.name!='wuxie'&&event.card.name!='Timereflux'&&event.player!=player;
				},
				unique:true,
				direct:true,
			content:function(){
							"step 0"
							player.draw(1);
							"step 1"
						player.logSkill('Insane_yingzhan2');
						player.chooseToUse({name:'sha'},trigger.player,-1,'迎战：是否对'+get.translation(trigger.player)+'使用一张【杀】？').set('targetRequired',true);
					 }
					},
     Insane_shengchen:{
     audio:'qingguo',
      group:['Insane_shengchen1','Insane_shengchen2'],
      locked:true,
      unique:true,       
      },
     Insane_shengchen1:{
				audio:'qingguo',
				trigger:{player:'phaseUseBegin'},
				direct:true,
				unique:true,
				filter:function(event,player){
				if(player.name!='Insane_zhenji'&&player.name2!='Insane_zhenji') return false;   
				var num=game.countPlayer(function(current){
						return current.countCards('he');
					});
					return num>0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('Insane_shengchen'),[1,Infinity],function(card,player,target){
						return player!=target
					}).ai=function(target){
					var num=game.countPlayer(function(current){
						return current.countCards('he');
					});
					if(num%2==1){
						if(target.hasSkillTag('noturn')) return 0;
						var player=_status.event.player;
						if(get.attitude(player,target)<=0&&!target.classList.contains('turnedover')) return 1;
						if(get.attitude(player,target)>0&&target.classList.contains('turnedover')) return 1;
						return 0;
						}
						if(num%2==0){
						return -get.attitude(_status.event.player,target);
						}
					}
					"step 1"
					if(result.bool){		
		 			player.logSkill('Insane_shengchen',result.targets);
						for(var i=0;i<result.targets.length;i++){
									//result.targets.push(result.targets[i]);
					//	result.targets[0].draw(player.maxHp-player.hp);				 	
				 	var num2=game.countPlayer(function(current){
						return current.countCards('he');
					});
					if(num2%2==1){
						result.targets[i].turnOver();
						}else{
						if(result.targets[i].countCards('he')==0){
						result.targets[i].loseHp();
						result.targets[i].link(true);
						}else{
						player.discardPlayerCard(true,'he',2,result.targets[i]);
			        			}
		      				}
				    		}
		   			}
		 			},
		 			ai:{
		 			threaten:4,
     effect:{
					target:function(card,player,target,current){		
					if(get.color(card)=='black')
					return 0;
						if(get.tag(card,'damage')&&!player.hasSkillTag('jueqing')) return [1,-3];
          }
        }
      }
				},
				 Insane_shengchen2:{
			audio:true,
			trigger:{player:'damageAfter'},
     filter:function(event,player){
     if(player.name!='Insane_zhenji'&&player.name2!='Insane_zhenji') return false;   
					return event.num>0;
				},
				unique:true,
				forced:true,
				init:function(player){
		  player.storage.Insane_shengchen2=0;
		 	},
				intro:{
content:function (storage){
return ''+storage/0.1+'%'
      }
    },
			content:function(){
			 'step 0'
			  player.syncStorage('Insane_shengchen2');
    player.markSkill('Insane_shengchen2');
				player.storage.Insane_shengchen2+=trigger.num;
		  game.addVideo('storage',player,['Insane_shengchen2',player.storage.Insane_shengchen2]);
		  'step 1'
		  if(player.storage.Insane_shengchen2>9){
		  player.maxHp=3;
		  player.hp=player.maxHp;
		  player.update();
		  player.removeSkill(['Insane_shengchen2','Insane_shengchen1','Insane_shengchen']);
		       }
	      }
	    },
     Insane_fangze:{
      group:'Insane_fangze2',
      locked:true,
      unique:true,
      }, 
     Insane_fangze2:{
			audio:true,
			trigger:{target:'useCardToBefore'},
			priority:20,			
     filter:function(event,player){
     if(player.name!='Insane_zhenji'&&player.name2!='Insane_zhenji') return false;   
					return event.card.name!='wuxie'&&event.card.name!='Timereflux'&&get.type(event.card)!='equip';
				},
				unique:true,
				forced:true,
			content:function(){
			 if(get.color(trigger.card)=='black'){
			  trigger.cancel();
			  player.line(trigger.player);
     trigger.player.damage();
     }else{
     if(get.color(trigger.card)=='red')
     player.draw(2);
         }
       }
			  },
			   Insane_luoshen:{
			   audio:'luoshen',
			   group:['Insane_luoshen1','Insane_luoshen2'],
      locked:true,
      unique:true,
      }, 
     Insane_luoshen1:{
				audio:'luoshen',
				trigger:{player:'phaseBefore'},
				frequent:true,
				filter:function(event,player){
     if(player.name!='Insane_zhenji'&&player.name2!='Insane_zhenji') return false;   
					return true;
				},
				content:function(){
					"step 0"
					if(event.cards==undefined) event.cards=[];
					player.judge(function(card){
						if(get.color(card)=='black') return 1.5;
						return -1.5;
					},ui.special);
					"step 1"
					if(result.judge>0){
						event.cards.push(result.card);
						if(lib.config.autoskilllist.contains('luoshen')){
							player.chooseBool('是否再次发动【洛神】？');
						}
						else{
							event._result={bool:true};
						}
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i])!='s'){
								event.cards.splice(i,1);i--;
							}
						}
						player.gain(event.cards);
						if(event.cards.length){
							player.$draw(event.cards);
						}
						event.finish();
					}
					"step 2"
					if(result.bool){
					player.logSkill('luoshen');
						event.goto(0);
					}
					else{
						player.gain(event.cards);
						if(event.cards.length){
							player.$draw(event.cards);
						}
					}
				}
			},
			  Insane_luoshen2:{
				audio:'luoshen',
				trigger:{player:'phaseEnd'},
				frequent:true,
				filter:function(event,player){
     if(player.name!='Insane_zhenji'&&player.name2!='Insane_zhenji') return false;   
					return true;
				},
				content:function(){
					"step 0"
					if(event.cards==undefined) event.cards=[];
					player.judge(function(card){
						if(get.color(card)=='red') return 1.5;
						return -1.5;
					},ui.special);
					"step 1"
					if(result.judge>0){
						event.cards.push(result.card);
						if(lib.config.autoskilllist.contains('luoshen')){
							player.chooseBool('是否再次发动【洛神】？');
						}
						else{
							event._result={bool:true};
						}
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i])!='s'){
								event.cards.splice(i,1);i--;
							}
						}
						player.gain(event.cards);
						if(event.cards.length){
							player.$draw(event.cards);
						}
						event.finish();
					}
					"step 2"
					if(result.bool){
					player.logSkill('luoshen');
						event.goto(0);
					}
					else{
						player.gain(event.cards);
						if(event.cards.length){
							player.$draw(event.cards);
						}
					}
				}
			},
     Insane_weichu:{
      locked:true,
      unique:true,
      }, 
     Insane_huoji:{
     audio:['yeyan',3],
				inherit:'huoji',
			},
     lnsane_yingnian:{
      group:['lnsane_yingnian1','lnsane_yingnian2'],
      locked:true,
      unique:true,       
      },
     lnsane_yingnian1:{
      audio:['reyingzi',2],
        trigger:{player:['dieBefore','dying']},
			 unique:true,
      filter:function(event,player){
      if(player.name!='Insane_zhouyu'&&player.name2!='Insane_zhouyu') return false;                        
      return game.roundNumber<35;         
      },
      priority:20,
      forced:true,        
			content:function(){
      if(trigger.name=='die'){
      trigger.cancel();
      }
      player.recover(player.maxHp-player.hp);
        }
      },
     lnsane_yingnian2:{     
     trigger:{player:'phaseEnd'},
       forced:true,
       unique:true,
       filter:function(event,player){
       if(player.name!='Insane_zhouyu'&&player.name2!='Insane_zhouyu') return false;
					return game.roundNumber>=35;
				},
				content:function(){
       player.die();
       }
      },
     Insane_weilue:{
     mod:{
      maxHandcard:function (player,num){
      return num+game.roundNumber;
      }
        },
     trigger:{player:'phaseDrawBegin'},
       frequent:true,
       audio:3,
       filter:function(event,player){
       if(player.name!='Insane_zhouyu'&&player.name2!='Insane_zhouyu') return false;
					return true;
				},
       unique:true,
				content:function(){
       trigger.num+=game.roundNumber;
       }
      },
     Insane_zhuangbing:{
			trigger:{player:'damageBefore'},
			forced:true,
     unique:true,
     filter:function (event,player){
   if(player.name!='Insane_simayi'&&player.name2!='Insane_simayi') return false;                 
     return _status.currentPhase!=player;
     },
			content:function(){    
     trigger.cancel();
     },
     ai:{
     effect:{
					target:function(card,player,target){			if(get.tag(card,'damage')&&_status.currentPhase!=target&&!player.hasSkillTag('jueqing')) return [0,0];
          }
        }
      }
    },    
     Insane_tumou:{
      group:['Insane_tumou2'],
      locked:true,
      unique:true,
      },
     Insane_yexin:{
			trigger:{global:['gainAfter']},			
     unique:true,
     direct:true,
     audio:2,     
     filter:function (event,player){
   if(player.name!='Insane_simayi'&&player.name2!='Insane_simayi') return false;                 
     return event.player!=player&&_status.currentPhase==event.player;
     },
    	content:function(){
      player.gainPlayerCard(get.prompt('Insane_yexin',trigger.player),trigger.player,get.buttonValue,'hej').set('logSkill',['Insane_yexin',trigger.player]);            
      }
    },
     Insane_tumou2:{
			trigger:{global:['recoverAfter','damageAfter','loseHpAfter']},
			forced:true,
     unique:true,
     audio:['renjie',2],     
     filter:function (event,player){
   if(player.name!='Insane_simayi'&&player.name2!='Insane_simayi') return false;                 
     return _status.currentPhase!=player;
     },
			content:function(){
      player.draw(Math.min(3,trigger.num));       
      }
    },
     Insane_lianmin:{
      group:'Insane_lianmin2',
      locked:true,
      unique:true,
      },
     Insane_lianmin2:{
			trigger:{player:['damageBegin','loseHpBegin']},
			forced:true,
     unique:true,
     audio:['biyue',2],
     priority:-9999999,
     filter:function (event,player){
   if(player.name!='Insane_dianchan'&&player.name2!='Insane_dianchan') return false;                 
     return event.num>0&&player.maxHp>player.hp||event.num>3;
     },
			content:function(){
      'step 0'
     if(trigger.num>3){
     trigger.cancel();
     }
      'step 1'
     trigger.num=Math.max(0,trigger.num-Math.min(2,player.maxHp-player.hp));    
       },
     ai:{
     effect:{
					target:function(card,player,target){			if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&target==player) return [0,0];
          }
        }
      }
    },
     Insane_meihuo:{
      group:'Insane_meihuo2',
      locked:true,
      unique:true,
      },
     Insane_meihuo2:{
      audio:4,
        trigger:{player:'phaseBegin'},
			 unique:true,
      filter:function(event,player){
      if(player.name!='Insane_dianchan'&&player.name2!='Insane_dianchan') return false;                        
      return game.hasPlayer(function(current){
						return current!=player&&current.countCards('hej');
					});   
      },
     skillAnimation:true,
      animationColor:'metal',                 
			content:function(){
       'step 0'     
				event.players=get.players(player);
      event.players.remove(player);   
      player.line(event.players,'green');
		  	'step 1'
				if(event.players.length){
					var current=event.players.shift();
        current.addTempSkill('fengyin');                     
        player.gain(current.get('hej'));
        current.$give(current.get('hej').length,player);       
				event.redo();
           }       
			   },
      ai:{
					threaten:3.5,
        }
      },
     lnsane_sunji:{
      group:'lnsane_sunji2',
      locked:true,
      unique:true,
      },
     lnsane_sunji2:{
				audio:true,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current!=player&&(player.maxHp<=current.maxHp||current.hasSkill('benghuai'));
					})>0;
				},
				check:function(card){return 15-get.value(card)},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					if(player==target) return false;					
						return target.hasSkill('benghuai')||player.maxHp<=target.maxHp;		
				},				
				selectTarget:[1,Infinity],				
				content:function(){
		    if(target.hasSkill('benghuai')){	player.useCard({name:['huogong','shunshou','guohe','wanjian','nanman','juedou'].randomGet()},target,false);
       }
       else{
       target.addSkill('benghuai');
        }
					game.delay(0.15);    
				},
				ai:{
					order:10,
        expose:0.4,
					result:{
						target:function(player,target){						
								return -2;
							}					
						}				
			  	}
		  	},
     lnsane_mouji:{
      group:['lnsane_mouji1','lnsane_mouji2','lnsane_mouji3'],
      locked:true,
      unique:true,
      },
      lnsane_mouji1:{      
        trigger:{global:['useCardEnd']},
			 unique:true,
      filter:function(event,player){
      if(player.name!='Insane_jiaxu'&&player.name2!='Insane_jiaxu') return false;                        
      return event.player!=player&&get.color(event.card)=='red';         
      },
      priority:20,
      forced:true,        
			content:function(){
     player.gain(trigger.card,'gain');
        }
      },
      lnsane_mouji2:{
      derivation:['niepan','luanwu','xinfencheng'],
        trigger:{player:['loseHpEnd','damageEnd']},
			 unique:true,
      filter:function(event,player){
      if(player.name!='Insane_jiaxu'&&player.name2!='Insane_jiaxu') return false;                        
      return true;         
      },
      priority:20,
      forced:true,        
			content:function(){
     var list=[];
                for(var i=0;i<game.players.length;i++){
                    if(player.canUse('nanman',game.players[i])){
                        list.push(game.players[i]);
                    }
                }
                list.sort(lib.sort.seat);					 player.useSkill(['luanwu','xinfencheng'].randomGet(),list);
       }
     },
     lnsane_mouji3:{
      audio:true,
        trigger:{player:'dying'},
			 unique:true,
      filter:function(event,player){
      if(player.name!='Insane_jiaxu'&&player.name2!='Insane_jiaxu') return false;                        
      return player.countCards('hej');         
      },
      priority:20,
      forced:true,        
			content:function(){
      player.useSkill('niepan');
        }
      },
     lnsane_mingshu:{
      group:'lnsane_mingshu2',
      locked:true,
      unique:true,
      mod:{
      maxHandcard:function (player){
      return game.players.length;
        }}
      },
      lnsane_mingshu2:{
      audio:true,
        trigger:{player:'dying'},
			 unique:true,
      filter:function(event,player){
      if(player.name!='Insane_zhugeliang'&&player.name2!='Insane_zhugeliang') return false;                        
      return true;         
      },
      priority:20,
      forced:true,        
			content:function(){
       'step 0'
      player.draw(12);
       'step 1'
      player.discard(player.get('j'));
      player.link(false);
      'step 2'
    	player.turnOver(false);
      },
     ai:{
     effect:{
					target:function(card,player,target){    
					if(get.tag(card,'recover')&&player.hp>0&&target==player) return [1,-target.hp];
          }
        }
      }
    },
    lnsane_liaoyuan:{
      group:'lnsane_liaoyuan2',
      locked:true,
      unique:true,
      },
      lnsane_liaoyuan2:{
      audio:2,
        trigger:{player:'phaseUseBegin'},
			 unique:true,
      filter:function(event,player){
      if(player.name!='Insane_zhugeliang'&&player.name2!='Insane_zhugeliang') return false;                        
      return true;         
      },
      skillAnimation:true,
      animationColor:'fire',                 
			content:function(){
          'step 0'
      game.delay();
     player.judge(function(card){
     if(get.color(card)=='red')
     return 1.5*get.number(card);
     if(get.color(card)=='black')
     return 1;
      });      
       'step 1'     
				event.players=get.players(player);
       event.players.remove(player);
      if(get.color(result.card)=='red'){
      player.line(event.players,'fire');}
      else{
      player.line(event.players,'green');}
			 'step 2'
				if(event.players.length){
					var current=event.players.shift();
         if(get.color(result.card)=='red'){         
current.damage('fire',get.number(result.card));
         }
        else{               
        player.gain(current.get('hej',{color:'red'}));
        current.$give(current.get('hej',{color:'red'}).length,player);
       	}         
				event.redo();
           }       
			   },
      ai:{
					threaten:4,
        }
      },
    lnsane_shuaiwang:{
     group:['lnsane_shuaiwang1','lnsane_shuaiwang2','lnsane_shuaiwang3','lnsane_shuaiwang4','lnsane_shuaiwang5','lnsane_shuaiwang6'],
			trigger:{player:'phaseEnd'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;
     return true;
     },
			content:function(){
     player.recover();     
     //trigger.cancel();
       }
     },
    lnsane_shuaiwang1:{
			trigger:{player:['damageBefore']},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;
     return true;
     },
			content:function(){
     trigger.cancel();
     player.loseHp(trigger.num);     
       }
     },
    lnsane_shuaiwang2:{
			trigger:{player:'recoverAfter'},
			forced:true,
     unique:true,
     popup:false,     
    filter:function (event,player){
  if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;
    return player.hp==player.maxHp;
    },
			content:function(){
     player.die();     
       }
    },
    lnsane_shuaiwang3:{
			trigger:{target:'useCardToAfter'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false; 
     return event.card.name!='wuxie'&&event.card.name!='Timereflux'&&(player.hp>0||event.player!=player);
     },
			content:function(){
    eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[02-9a-d]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.cancel();2.loseHp();3(0.2!=2){3(7.8(0.9)==\'spade\'){2.4({5:\'sha\'},0.2,6)}3((0.c.d<1||0.c.d>1)&&0.2.a(\'b\')){2.4({5:\'guohe\'},0.2,6)}3(7.8(0.9)==\'club\'&&0.2.a(\'b\')){2.4({5:\'shunshou\'},0.2,6)}3(7.8(0.9)==\'diamond\'){2.4({5:\'juedou\'},0.2,6)}3(7.8(0.9)==\'heart\'&&0.2.a(\'b\')){2.4({5:\'huogong\'},0.2,6)}}',[],14,'trigger||player|if|useCard|name|false|get|suit|card|countCards|hej|cards|length'.split('|'),0,{}))
       },
     ai:{
     effect:{
					target:function(card,player,target){
        if(target.hp>0) return [1,3];
        if(card.name=='jiu'&&target.hp<=0&&target==player) return [0,-3];
					if(get.tag(card,'recover')) return [1,-10];
          }
        }
      }
		 },
    lnsane_shuaiwang4:{
			trigger:{player:['turnOverBefore','dying','linkBefore','dieBefore']},
			forced:true,
     unique:true,
     popup:false,
     priority:1000,
     filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;  
     if((event.name=='die'||event.name=='dying')&&player.maxHp==player.hp) 
     return false;                   
     return true;
     },
			content:function(){
     trigger.cancel();
     player.loseHp();     
       }
     },
    lnsane_shuaiwang5:{
			trigger:{player:['loseHpBegin']},
			forced:true,
     unique:true,
     popup:false,
     priority:-9999999,
     filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;
     return event.num>player.hp;
     },
			content:function(){
     trigger.cancel();
       }
     },
     lnsane_shuaiwang6:{
     audio:2,
				enable:['chooseToUse'],
				filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;
     return player.countCards('he',{type:['basic','equip']})>0;
     },
				filterCard:function(card,player){			
					return get.type(card)=='equip'||get.type(card)=='basic';
				},
				position:'he',
				viewAs:{name:'juedou'},
				viewAsFilter:function(player){		
						if(!player.countCards('he',{type:'basic'})&&!player.countCards('he',{type:'equip'})) return false;				
				},
				prompt:'将一张基本牌或装备牌当【决斗】使用',
				check:function(card){
      return 20-get.value(card)},
     ai:{
     order:11,
      }
    },
    lnsane_zixin:{
     group:['lnsane_zixin1','lnsane_zixin2'],
     unique:true,
     mod:{
      maxHandcard:function (player){
      return (player.maxHp-player.hp)*(player.maxHp-player.hp);
        },
      cardUsable:function(card,player,num){
			if(card.name=='sha'||card.name=='jiu') return num+player.hp;
					 },
      globalFrom:function(from,to,distance){
						return distance-from.hp;
					  }
        }
      },
     _lnsane_addSkills:{
			trigger:{global:'gameStart'},
			  forced:true,
     unique:true,
     popup:false,
     silent:true,
     priority:99999,
     filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;    
     return true;
     },
			content:function(){
			 player.addSkill(["lnsane_zixin","lnsane_shuaiwang"]);
			 }
			 },
     lnsane_zixin1:{
			trigger:{global:'gameDrawBegin'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;    
     return true;
     },
			content:function(){
      'step 0'
     player.hp=0;
     player.update();
      'step 1' 
player.gain(get.cards(Math.min(49,player.maxHp*player.maxHp-4)))._triggered=null;
       }
     },
    lnsane_zixin2:{
			trigger:{player:'phaseBegin'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
 if(player.name!='Insane_sunce'&&player.name2!='Insane_sunce') return false;     
     return player.countCards('h')<player.maxHp;
     },
			content:function(){
     player.draw(Math.min(49,player.maxHp*player.maxHp));
       }
     },
    },
    translate:{
     Insane_huaxiong:'跋扈魔将',
     Insane_zhenji:'惊鸿洛神',
     Insane_zhouyu:'英才周郎',
     Insane_simayi:'狼相仲达',
     Insane_dianchan:'月下仙子',
     Insane_jiaxu:'乱世毒士',
     Insane_sunce:'江东小霸王',
     Insane_zhugeliang:'驭火卧龙',
     lnsane_shuaiwang6:'决斗',
     lnsane_liaoyuan:'燎原',
     lnsane_liaoyuan2:'燎原',
     lnsane_mingshu:'命数',
     lnsane_mingshu2:'命数',
     lnsane_mouji:'谋己',
     lnsane_mouji1:'谋己',
     lnsane_mouji2:'谋己',
     lnsane_mouji3:'谋己',
     lnsane_sunji:'损计',
     lnsane_sunji2:'损计',
     Insane_meihuo:'媚惑',
     Insane_meihuo2:'媚惑',
     Insane_lianmin:'怜悯',
     Insane_lianmin2:'怜悯',
     Insane_tumou:'图谋',
     Insane_tumou2:'图谋',
     Insane_yexin:'野心',
     Insane_yexin2:'野心',
     Insane_zhuangbing:'装病',
     Insane_weilue:'伟略',
     lnsane_yingnian:'英年',
     lnsane_yingnian1:'英年',
     lnsane_yingnian2:'早逝',
     Insane_weichu:'待更',
     Insane_luoshen:'洛神',
     Insane_luoshen1:'洛神',
     Insane_luoshen2:'洛神',
     Insane_fangze:'芳泽',
     Insane_fangze2:'芳泽',
     Insane_shengchen:'生尘',
     Insane_shengchen1:'生尘',
     Insane_shengchen2:'生尘',
     Insane_shengchen2_bg:'尘',
     Insane_yingzhan:'迎战',
     Insane_yingzhan2:'迎战',
     Insane_zhansha:'斩杀',
     Insane_zhansha2:'斩杀',
     Insane_yingzhan_info:'当你于回合外成为其他角色使用牌的目标后，你摸一张牌，然后你可以对该角色使用一张【杀】',
     Insane_zhansha_info:'锁定技，你使用【杀】对目标角色造成的伤害始终为X，X为你当前体力；锁定技，当你使用【杀】指定一个目标后，该角色需依次使用两张【闪】才能抵消此【杀】',
     Insane_shengchen_info:'出牌阶段开始时，若场上角色的总牌数为奇数，你可以将任意名其他角色翻面；若场上角色的总牌数为偶数，你可以弃置任意名其他角色的两张牌，若目标角色没有牌，则其失去1点体力并横置武将牌；锁定技，当你受到累计10点或更多伤害后，你的体力和体力上限变为3，然后你失去此技能直到游戏结束',
     Insane_fangze_info:'锁定技，每当你成为♠♣非装备牌的目标时，取消之，然后你对该牌使用者造成1点伤害；锁定技，每当你成为♥♦非装备牌的目标时，你摸两张牌',
     Insane_luoshen_info:'准备阶段开始时，你可以进行判定，若结果为♠♣，你获得生效后的判定牌且你可以重复此流程；结束阶段开始时，你可以进行判定，若结果为♥♦，你获得生效后的判定牌且你可以重复此流程',
     Insane_weichu_info:'该武将暂时未更新，敬请期待！',
     lnsane_yingnian_info:'锁定技，当你处于濒死状态时，若当前游戏轮数小于35，你回复体力至体力上限；回合结束阶段开始时，若当前游戏轮数不小于35，你立即死亡',
     Insane_weilue_info:'摸牌阶段，你可以额外摸X张牌；你的手牌上限+X（X为当前游戏轮数）',
     Insane_tumou_info:'锁定技，当一名角色于你的回合外受到1点伤害、失去1点体力或回复1点体力后，你摸一张牌（每次最多3张）',
     Insane_yexin_info:'其他角色于其回合内获得牌后，你可以获得其一张牌',
     Insane_zhuangbing_info:'锁定技，你于回合外防止受到伤害',
     Insane_lianmin_info:'锁定技，你受到的伤害和流失的体力-X（X为你已损失的体力值，且至多为2）；你防止受到多于3点的伤害和体力流失',
     Insane_meihuo_info:'回合阶段开始时，你可以令所有其他角色的非锁定技失效，直到回合结束，然后获得这些其他角色区域里所有的牌',
     lnsane_sunji_info:'出牌阶段限一次，你可以弃置一张牌，然后指定已拥有技能“崩坏”或体力上限不小于你的任意名其他角色，若该角色未拥有技能“崩坏”，你令其获得技能“崩坏”；否则视为你对其使用一张〖“决斗”、“火攻”、“南蛮入侵”、“万箭齐发”、“顺手牵羊”、“过河拆桥”〗随机选择其中之一',
     lnsane_mouji_info:'锁定技，其他角色使用的♥♦牌结算后，你获得之；当你处于濒死状态时，若你区域里有牌，你发动技能“涅槃”；每当你受到伤害或失去体力时，你随机发动技能“乱武”或“焚城”（不受限定技影响）',
     lnsane_liaoyuan_info:'出牌阶段开始时，你可以进行判定，若结果为♥♦，你对所有其他角色造成等同于此牌点数的火焰伤害，若为♣♠，你获得所有其他角色区域内所有的♥♦牌',
     lnsane_mingshu_info:'锁定技，当你处于濒死状态时，你摸12张牌，然后弃置判定区里所有的牌并重置武将牌；你的手牌上限等同于场上存活角色个数',
    },
     },'Insane')
     };
    if(config.Judgetianze){ 
    if(lib.config.mode!='brawl'&&lib.config.mode!='boss')
    lib.arenaReady.push(function(){
    lib.skill.Judgetz={
            audio:'ext:剧情战役:true',
            };
            lib.translate.Judgetz='天择';
            lib.skill._Judgetz={   
                audio:false,
                forced:true,
                popup:false,
                silent:true,
                priority:200,
                trigger:{player:"phaseBegin"},                           
                content:function(){
                player.logSkill('Judgetz');
                if(Math.random()<=0.5){
                game.log(player,'幸运');        
                player.draw(2);
                }
                else{
                game.log(player,'倒霉');
                player.damage('nosource');
                }            
              }  
            }
          })
        };
    if(config.shapozhan){ 
    if(lib.config.mode!='brawl'&&lib.config.mode!='boss')
    lib.arenaReady.push(function(){
    lib.skill.shapz={
            audio:'ext:Dubbing:false',
            }
            lib.translate.shapz='破绽'
            lib.skill._shapz={   
                audio:false,
                forced:true,
                popup:false,
                silent:true,
                priority:20,
                trigger:{player:"shaBegin"},
                filter:function(event,player){							

								   return Math.random()<=0.35;

						    	 },                           
                content:function(){
                player.logSkill('shapz');             
                trigger.directHit=true;            
              }  
            }
          })
        };
    if(config.recoverjuejing){ 
    if(lib.config.mode!='brawl'&&lib.config.mode!='boss')
    lib.arenaReady.push(function(){
    lib.skill.recoverjj={
            audio:'ext:Dubbing:false',
            }
            lib.translate.recoverjj='绝境'
            lib.skill._recoverjj={   
                audio:false,
                forced:true,
                popup:false,
                silent:true,               
                trigger:{player:"recoverBefore"},
                filter:function(event,player){							

				    			return player.hp>0;

				      		},                      
                content:function(){
                player.logSkill('recoverjj');
                trigger.cancel();         
               },
                ai:{					
					effect:{
						target:function(card,player,target){
          if(_status.dying!=player&&get.tag(card,'recover')&&target==player){
          return [0,0]	;
                }
              }
            }}
            }
          })
        };
    if(config.skillhunluan){ 
    if(lib.config.mode!='brawl'&&lib.config.mode!='boss')
    lib.arenaReady.push(function(){
    lib.skill.skillhl={
            audio:'ext:Dubbing:false',
            }
            lib.translate.skillhl='混乱'
            lib.skill._skillhl={   
                audio:false,
                forced:true,
                popup:false,
                silent:true,
                priority:990,
                trigger:{global:'gameDrawAfter',player:"phaseBefore"},                                               priority:9999,
                content:function(){
                 'step 0'
                 if(player.identity=='zhu'){
                 event.num=Math.max(1,6-player.maxHp);
                 }else{
                event.num=Math.max(1,5-player.maxHp);
                }
                player.logSkill('skillhl');
                player.clearSkills();                
                 'step 1'                     
                    var skills=[]; 
                    for(var i in lib.character){ 
                        if(lib.character[i][4].contains('boss')) continue;
                    if(lib.character[i][4].contains('bossallowed')) continue;
                    if(lib.character[i][4].contains('hiddenboss')) continue;
                        for(var j=0;j<lib.character[i][3].length;j++){
       var info=lib.skill[lib.character[i][3][j]];
                            if(info&&(info.gainable||!info.unique&&!info.locked&&!info.mark&&!info.zhuSkill&&!info.nobracket&&!info.fixed)){
                                skills.add(lib.character[i][3][j]); 
                            }
                        } 
                    }
                    var link=skills.randomGet();                    
                    player.addSkill(link);                                                         
                    game.log(player,'获得了技能','【'+get.translation(link)+'】');
                'step 2'
             event.num--;
					if(event.num>0){
             event.goto(1);
                }        
              }              
            }
          })
        };
    if(config.linkbamen){ 
    if(lib.config.mode!='brawl'&&lib.config.mode!='boss')
    lib.arenaReady.push(function(){
    lib.skill.linkbm={
            audio:'ext:Dubbing:false',
            }
            lib.translate.linkbm='八门'
            lib.skill._linkbm={   
                audio:false,
                forced:true,
                popup:false,
                silent:true,
                trigger:{global:["phaseBegin","gameDrawAfter"]},
                filter:function(event,player){

						      if(event.name=='phase'){

								  if(player.isLinked()) return false;

							    }
                return true;
                },                         
                content:function(){
                player.logSkill('linkbm');
                if(!player.isLinked()){
                player.link();}            
              }  
            }
          })
        };
    if(config.shashunpi){ 
    if(lib.config.mode!='brawl'&&lib.config.mode!='boss')
    lib.arenaReady.push(function(){
    lib.skill.shasp={
            audio:'ext:Dubbing:false',
            }
            lib.translate.shasp='顺劈'
            lib.skill._shasp={   
                audio:false,
                forced:true,
                popup:false,
                silent:true,
                trigger:{source:"damageEnd"},
                filter:function(event,player){							

								   return event.card&&event.card.name=='sha'&&event.notLink();

						    	 },                       
                content:function(){
                player.logSkill('shasp');
                player.getStat().card.sha--;            
              }  
            }
          })
        };
    if(config.juedousidou){ 
    if(lib.config.mode!='brawl'&&lib.config.mode!='boss')
    lib.arenaReady.push(function(){
    lib.skill.juedousd={
            audio:'ext:Dubbing:false',
            }
            lib.translate.juedousd='死斗'
            lib.skill._juedousd={   
                audio:false,
                forced:true,
                popup:false,
                silent:true,                
                trigger:{source:"damageBegin"},
                filter:function(event,player){							

								   return event.card&&event.card.name=='juedou';

						    	 },                          
                content:function(){
                player.logSkill('juedousd'); trigger.num=Math.max(1,trigger.player.hp);            
              }  
            }
          })
        };
    if(config.enhancement){ 
    if(lib.config.mode!='boss'&&lib.config.mode!='brawl'&&lib.config.mode!='guozhan')
    lib.arenaReady.push(function(){
    //————————————SP————————————//
    lib.translate.daxiaoqiao='大乔小乔';
       lib.translate.xingwu_info='弃牌阶段开始时，你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上。若此时你武将牌上的牌达到三张，则弃置这些牌，然后对一名男性角色造成3点伤害并弃置其装备区中所有的牌。',   
       lib.skill.xingwu={
    			audio:2,
    			group:['xingwu_color','xingwu_color2'],
    			subSkill:{
    				color:{
    					trigger:{player:'phaseBegin'},
    					silent:true,
    					content:function(){
    						player.storage.xingwu_color=['black','red'];
    					}
    				},
    				color2:{
    					trigger:{player:'useCard'},
    					silent:true,
    					filter:function(event,player){
    						return Array.isArray(player.storage.xingwu_color)&&_status.currentPhase==player;
    					},
    					content:function(){
    						player.storage.xingwu_color.remove(get.color(trigger.card));
    					}
    				}
    			},
    			trigger:{player:'phaseDiscardBegin'},
    			direct:true,
    			filter:function(event,player){
    				if(!player.storage.xingwu_color) return false;
    				var length=player.storage.xingwu_color.length;
    				if(length==0) return false;
    				var hs=player.getCards('h');
    				if(hs.length==0) return false;
    				if(length==2) return true;
    				var color=player.storage.xingwu_color[0];
    				for(var i=0;i<hs.length;i++){
    					if(get.color(hs[i])==color) return true;
    				}
    				return false;
    			},
    			intro:{
    				content:'cards'
    			},
    			init:function(player){
    				player.storage.xingwu=[];
    			},
    			content:function(){
    				'step 0'
    				player.chooseCard(get.prompt('xingwu'),function(card){
    					return _status.event.player.storage.xingwu_color.contains(get.color(card));
    				}).set('ai',function(card){
    					var player=_status.event.player;
    					if(player.storage.xingwu.length==2){
    						if(!game.hasPlayer(function(current){
    							return (current!=player&&current.sex=='male'&&
    								get.damageEffect(current,player,player)>0&&
    								get.attitude(player,current)<0)
    						})) return 0;
    					}
    					return 7-get.value(card);
    				});
    				'step 1'
    				if(result.bool){
    					player.logSkill('xingwu');
    					if(player.storage.xingwu.length<2){
    						player.$give(result.cards,player);
    					}
    					player.lose(result.cards,ui.special);
    					player.storage.xingwu=player.storage.xingwu.concat(result.cards);
    					player.markSkill('xingwu');
    					player.syncStorage('xingwu');
    				}
    				else{
    					event.finish();
    				}
    				'step 2'
    				if(player.storage.xingwu.length==3){
    					player.$throw(player.storage.xingwu);
    					while(player.storage.xingwu.length){
    						ui.discardPile.appendChild(player.storage.xingwu.shift());
    					}
    					player.unmarkSkill('xingwu');
    					player.chooseTarget(function(card,player,target){
    						return target!=player&&target.sex=='male';
    					},'对一名男性角色造成3点伤害并弃置其装备区内所有的牌').set('ai',function(target){
    						var player=_status.event.player;
    						if(get.attitude(player,target)>0) return -1;
    						return get.damageEffect(target,player,player)+target.countCards('e')/2;
    					});
    				}
    				else{
    					event.finish();
    				}
    				'step 3'
    				if(result.bool){
    					var target=result.targets[0];
    					target.damage(3);
    					event.target=target;
    					player.line(target,'green');
    				}
    				else{
    					event.finish();
    				}
    				'step 4'
    				if(event.target&&event.target.isAlive()){
    					var es=event.target.getCards('e');
    					if(es.length){
    						event.target.discard(es);
    					}
    				}
    			},
    			ai:{
    				threaten:1.5
    			}
    		},
    		lib.translate.reyicong_info='锁定技，你计算与其他角色的距离-X（X你当前体力值），其他角色计算与你的距离+X（X改为你已损失的体力值）。',
    		lib.skill.reyicong={
    trigger:{
        player:['damageEnd','loseHpEnd','recoverEnd'],
    },
      audio:['yicong',2],
    forced:true,
    content:function (){},
    mod:{
        globalFrom:function (from,to,current){
            return current-from.hp;
        },
        globalTo:function (from,to,current){
            return current+(to.maxHp-to.hp);
        },
    },
    ai:{
        threaten:0.8,
      }
    };
   //————————————神话再临————————————//
   lib.translate.anjian_info='当你使用的【杀】对目标角色造成伤害时，若你不在其攻击范围内，则此【杀】伤害+X（X你与该角色的手牌数间的差值）。',
   lib.skill.anjian={
				audio:2,
				trigger:{source:'damageBegin'},
				check:function(event,player){
					return get.attitude(player,event.player)<=0;
				},
				frequent:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&get.distance(event.player,player,'attack')>1&&
						event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
				},
				content:function(){
				var sh=Math.abs(player.countCards('h')-trigger.player.countCards('h'));
					trigger.num+=sh;
				}
			},
   lib.skill.shuangxiong={
				audio:2,
				trigger:{player:'phaseUseBegin'},
				check:function(event,player){
					return true;
				},
				content:function(){
					"step 0"
					player.judge(ui.special);
					"step 1"
					player.gain(result.card);
					player.$gain2(result.card);
					player.addTempSkill('shuangxiong2');
					player.storage.shuangxiong=get.color(result.card);
				}
			};
			lib.skill.shuangxiong2.audio='shuangxiong';
			lib.translate.shuangxiong_info='出牌阶段开始时，你可以进行一次判定，你获得此判定牌，且此回合你的每张与该判定牌不同颜色的手牌均可当【决斗】使用。',
			lib.skill.bazhen={
				audio:2,
				inherit:'bagua_skill',
				locked:true,
				filter:function(event,player){
					if(!lib.skill.bagua_skill.filter(event,player)) return false;
					return true;
					}
				},
			lib.translate.bazhen_info='锁定技，始终视为你装备着【八卦阵】。 ',
			lib.translate.huoji_info='你可以将一张红色手牌当【火攻】使用；锁定技，每当你造成1点火属性伤害时，你摸一张牌。',
			lib.translate.huoji2='火计',
			lib.skill.huoji.group='huoji2';
			lib.skill.huoji2={
				audio:'huoji',
				trigger:{source:'damageEnd'},
				filter:function(event,player){
					return event.num>0&&event.nature=='fire';
				},
				forced:true,
				content:function(){
					player.draw(trigger.num);
					}
				},
   lib.translate.buqu_info='锁定技，当你处于濒死状态时，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌的花色或点数与你武将牌上已有的牌花色或点数均不同，则你回复至1体力；只要你的武将牌上有牌，你的手牌上限便与这些牌数量相等。',
    lib.skill.buqu={
    			audio:2,
    			trigger:{player:'dying'},
    			forced:true,
    			priority:11,
    			filter:function(event,player){return player.maxHp>0&&player.hp<=0},
    			content:function(){
    				"step 0"
    				event.card=get.cards()[0];
    				if(player.storage.buqu==undefined) player.storage.buqu=[];
    				player.storage.buqu.push(event.card);
    				player.syncStorage('buqu');
    				player.showCards(player.storage.buqu,'不屈')
    				player.markSkill('buqu');
    				"step 1"
    				for(var i=0;i<player.storage.buqu.length-1;i++){
    					if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.buqu[i])&&get.suit(event.card)&&get.suit(event.card)==get.suit(player.storage.buqu[i])) return;
    				}
    					player.hp=1;
    					player.update();
    			},
    			mod:{
    				maxHandcard:function(player,num){
    					if(player.storage.buqu&&player.storage.buqu.length) return num-player.hp+player.storage.buqu.length;
    				}
    			},
    			intro:{
    				content:'cards',
    				onunmark:function(storage,player){
    					if(storage&&storage.length){
    						player.$throw(storage);
    						for(var i=0;i<storage.length;i++){
    							storage[i].discard();
    						}
    						delete player.storage.buqu;
    					}
    				}
    			}
    		},
    lib.translate.reluanji_info='出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用；若如此做，你进行一次判定，若结果为红色，你摸一张牌。'
    lib.skill.reluanji={
         group:'luanji',
    		trigger:{player:'useCard'},
       forced:true,
       popup:false,
       filter:function(event,player){
    				return event.skill=='luanji';
    			},
				content:function(){
					"step 0"
					player.judge(function(card){
							if(get.color(card)=='red') return 1;			
						return 0;
					});
					"step 1"
					if(result.judge>0){
         player.draw();
        }
    		}
     };
    if(lib.character['sp_ganning']){
    lib.character.sp_ganning[1]='qun';}
        if(lib.character['dongzhuo']){lib.character.dongzhuo[2]=12;	}
        lib.skill.niepan.animationStr='涅槃',
        lib.skill.oldniepan.animationStr='涅槃',
        lib.skill.lianhuan3={
    			enable:'phaseUse',
         audio:['lianhuan',2],
    			filter:function(event,player){
    				return player.countCards('h',{color:'black'})>0;
    			},
    			filterCard:{color:'black'},
    			viewAs:{name:'tiesuo'},
    			prompt:'将一张♠♣牌当【铁索连环】使用',
    			check:function(card){return 6-get.value(card)},
    			ai:{
    				order:7.5,
    				result:{
    					target:function(player,target){    						
    						if(target.isLinked()) return 1;
    						return -1;
    					}
    				}
    			}
    		},
    		lib.skill.lianhuan4={
    			trigger:{player:'useCard'},
    			filter:function(event){
    				return event.card.name=='tiesuo';
    			},
    			forced:true,
    			popup:false,
        unique:true,
    			content:function(){
    				player.draw();
    			}
    		}, lib.skill.xinlianhuan.group=['lianhuan3','lianhuan4']       
        lib.translate.xinlianhuan_info=' 你可以将一张♠♣手牌当【铁索连环】使用；锁定技，每当你使用一张【铁索连环】，你摸一张牌。',
   //————————————标准————————————//
    lib.skill.jianxiong={
				audio:2,
				trigger:{global:'recoverEnd',player:'damageEnd'},
				filter:function(event,player){
       if(event.name=='recover'&&(event.source==player||event.player==player)) return false;
					return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
				},
				content:function(){
					player.gain(trigger.cards);
					player.$gain2(trigger.cards);
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')) return [1,0.5];
						}
					}
				}
			},
			lib.skill.fankui={
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return (event.source&&event.source.countCards('he')&&event.source!=player);
				},
				content:function(){
					player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,get.buttonValue,Math.max(1,player.maxHp-player.hp),'he').set('logSkill',['fankui',trigger.source]);
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.countCards('he')>1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,Math.max(1,target.maxHp-target.hp)];
							}
						}
					}
				}
			},
			lib.skill.guicai={
				audio:2,
				trigger:{global:'judge'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+get.prompt('guicai')).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result-get.value(card)/2;
						}
						else{
							return -result-get.value(card)/2;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.logSkill('guicai');
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card){
								if(card.clone){
									card.clone.classList.remove('thrownhighlight');
								}
							},trigger.player.judging[0]);
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						ui.discardPile.appendChild(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						if(!get.owner(result.cards[0],'judge')){
							trigger.position.appendChild(result.cards[0]);
						}
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
						game.delay(2);
					}
				},
				ai:{
					tag:{
						rejudge:1,
					}
				}
			},
			lib.skill.ganglie={
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return (event.source!=undefined);
				},
				check:function(event,player){
					return (get.attitude(player,event.source)<=0);
				},
				content:function(){
					"step 0"
					player.judge(function(card){
						if(get.suit(card)=='heart') return -3.5;
						return 3.5;
					})
					"step 1"
					if(result.judge<2){
						event.finish();return;
					}
					trigger.source.chooseToDiscard(3).set('ai',function(card){
						if(card.name=='tao') return -10;
						if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
						return get.unuseful(card)+2.5*(5-get.owner(card).hp);
					});
					"step 2"
					if(result.bool==false){
          if(trigger.source.countCards('he',{type:'equip'})){
          trigger.source.chooseToDiscard(true,'he',{type:'equip'});
						trigger.source.damage();
          }
          else{
          trigger.source.damage(2);
          }
					}
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							return 0.8;
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-2];
						}
					}
				}
			},
			lib.skill.tuxi={
				audio:2,
				trigger:{player:'drawBefore'},
				direct:true,
				content:function(){
					"step 0"
					var check;
					var i,num=game.countPlayer(function(current){
						return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
					});
					check=(num>=1);
					player.chooseTarget(get.prompt('tuxi'),[1,2],function(card,player,target){
						return target.countCards('h')>0&&player!=target;
					},function(target){
						if(!_status.event.aicheck) return 0;
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					}).set('aicheck',check);
					"step 1"
					if(result.bool){
						player.logSkill('tuxi',result.targets);
						player.gainMultiple(result.targets);
						trigger.num--;
					}
					else{
						event.finish();
					}
					"step 2"
					game.delay();
				},
				ai:{
					threaten:2,
					expose:0.3
				}
			},
			lib.skill.luoyi={
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				check:function(event,player){
					if(player.countCards('h')<3) return false;
					if(!player.hasSha()) return false;
					return game.hasPlayer(function(current){
						return get.attitude(player,current)<0&&player.canUse('sha',current);
					});
				},
				content:function(){
					player.addTempSkill('luoyi2','phaseEnd');
					trigger.num--;
				}
			},
			lib.skill.luoyi2={
       group:'luoyi3',

				trigger:{source:'damageBegin'},
				filter:function(event){
					return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
				},
				forced:true,
				content:function(){
					trigger.num++;
				}
			},
     lib.skill.luoyi3={
				trigger:{source:'damageEnd'},
				filter:function(event){
					return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
				},
				forced:true,
       popup:false,
				content:function(){
					player.draw(player.maxHp-player.countCards('h'));
				}
			},
			lib.skill.tiandu={
				audio:2,
				trigger:{player:'judgeEnd'},
				frequent:function(event){
					if(event.result.card.name=='du') return false;
					if(get.mode()=='guozhan') return false;
					return true;
				},
				check:function(event){
					if(event.result.card.name=='du') return false;
					return true;
				},
				filter:function(event,player){
					if(get.owner(event.result.card)){
						return false;
					}
					if(event.nogain&&event.nogain(event.result.card)){
						return false;
					}
					return true;
				},
				content:function(){
					player.gain(trigger.result.card);
					player.$gain2(trigger.result.card);
				}
			},
    lib.skill.yiji={
       group:'yiji2',
				audio:2,
				trigger:{player:['recoverEnd','loseHpEnd','damageEnd']},
				frequent:true,
				filter:function(event){
					return (event.num>0)
				},
				content:function(){
					"step 0"
					event.cards=get.cards(2*trigger.num);
					"step 1"
					if(event.cards.length>1){
						player.chooseCardButton('将“遗计”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
						});
					}
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
						}).set('enemy',get.value(event.togive[0])<0);
					}
					"step 3"
					if(result.targets.length){
						result.targets[0].gain(event.togive,'draw');
						player.line(result.targets[0],'green');
                        game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
          if(get.tag(card,'recover')){
          return [1,2]	;
           }
							if(get.tag(card,'damage')){								
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()){
										num=0.7;
									}
									else{
										num=0.5;
									}
								}
								if(target.hp>=4) return [1,num*2];
								if(target.hp==3) return [1,num*1.5];
								if(target.hp==2) return [1,num*0.5];
							}
						}
					}
				}
			},
     lib.skill.yiji2={   
         audio:2,
    trigger:{
        player:"dieBegin",
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('yiji'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var num=ai.get.attitude(_status.event.player,target);
            if(num>0){
                if(target.hp==1){
                    num+=2;
                }
                if(target.maxHp<=2||target.hasSkill('yiji')){
                num-=10;
                }
                if(target.hp<target.maxHp){
                    num+=2;
                }
            }
            return num;
        }).set('source',trigger.source);
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('reyiji',target);            
            target.loseMaxHp();
            target.addSkill('yiji');         
        }
    },
    ai:{
        expose:0.5,
    },
     },
			lib.skill.luoshen={
				audio:2,
				trigger:{player:'phaseBegin'},
				frequent:true,
				content:function(){
					"step 0"
					if(event.cards==undefined) event.cards=[];
					player.judge(function(card){
						if(get.type(card)=='basic'||get.type(card)=='trick') return 1.5;
						return -1.5;
					},ui.special);
					"step 1"
					if(result.judge>0){
						event.cards.push(result.card);
						if(lib.config.autoskilllist.contains('luoshen')){
							player.chooseBool('是否再次发动【洛神】？');
						}
						else{
							event._result={bool:true};
						}
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i])!='s'){
								event.cards.splice(i,1);i--;
							}
						}
						player.gain(event.cards);
						if(event.cards.length){
							player.$draw(event.cards);
						}
						event.finish();
					}
					"step 2"
					if(result.bool){
          player.logSkill('luoshen');
						event.goto(0);
					}
					else{

						player.gain(event.cards);
						if(event.cards.length){
							player.$draw(event.cards);
						}
					}
				},
       ai:{
         threaten:1.8,
        }
			},
			lib.skill.qingguo={
				audio:2,
				enable:['chooseToRespond'],
				filterCard:function(card){
					return get.type(card)=='trick'||get.type(card)=='basic';
				},
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{color:'black'})) return false;
				},
				prompt:'将一张基本牌或非延时锦囊手牌当【闪】打出',
				check:function(){return 1},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('h',{type:'trick'})&&!player.countCards('h',{type:'basic'})) return false;
					},
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0) return 0.6
						}
					}
				}
			},
			lib.skill.rende={
				audio:2,
				group:['rende1'],
				enable:'phaseUse',
				filterCard:true,
				selectCard:[1,Infinity],
				discard:false,
				prepare:'give',
				filterTarget:function(card,player,target){
					return player!=target;
				},
				check:function(card){
					if(ui.selected.cards.length>1) return 0;
					if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
					if(!ui.selected.cards.length&&card.name=='du') return 20;
					var player=get.owner(card);
					if(player.hp==player.maxHp||player.storage.rende<0||player.countCards('h')<=1){
						if(ui.selected.cards.length){
							return -1;
						}
      var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].hasSkill('haoshi')&&
								!players[i].isTurnedOver()&&
								!players[i].hasJudge('lebu')&&
								get.attitude(player,players[i])>=3&&
								get.attitude(players[i],player)>=3){
								return 15-get.value(card);
							}
						}
						if(player.countCards('h')>player.hp) return 10-get.value(card);
						if(player.countCards('h')>2) return 6-get.value(card);
						return -1;
					}
					return 10-get.value(card);
				},
				content:function(){
					target.gain(cards,player);
					if(typeof player.storage.rende!='number'){
						player.storage.rende=0;
					}
					if(player.storage.rende>=0){
						player.storage.rende+=cards.length;
						if(player.storage.rende>=2){
							player.recover();
            player.draw(2);
							player.storage.rende=-1;
						}
					}
				},
				ai:{
					order:function(skill,player){
						if(player.hp<=player.maxHp&&player.storage.rende<2&&player.countCards('h')>1){
							return 10;
						}
						return 1;
					},
					result:{
						target:function(player,target){
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return -10;
							}
							if(target.hasJudge('lebu')) return 0;
							var nh=target.countCards('h');
							var np=player.countCards('h');
							if(player.hp==player.maxHp||player.storage.rende<0||player.countCards('h')<=1){
								if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
							}
							return Math.max(1,5-nh);
						}
					},
					effect:{
						target:function(card,player,target){
							if(player==target&&get.type(card)=='equip'){
								if(player.countCards('e',{subtype:get.subtype(card)})){
									var players=game.filterPlayer();
									for(var i=0;i<players.length;i++){
										if(players[i]!=player&&get.attitude(player,players[i])>0){
											return 0;
										}
									}
								}
							}
						}
					},
					threaten:2
				}
			},
			lib.skill.rende1={
				trigger:{player:'phaseUseBegin'},
				silent:true,
				content:function(){
					player.storage.rende=0;
				}
			},			
			lib.skill.wusheng={
       group:'wusheng2',
				audio:3,
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card,player){
					if(get.zhu(player,'shouyue')) return true;
					return get.color(card)=='red';
				},
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('he')) return false;
					}
					else{
						if(!player.countCards('he',{color:'red'})) return false;
					}
				},
				prompt:'将一张红色牌当【杀】使用或打出',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						if(get.zhu(player,'shouyue')){
							if(!player.countCards('he')) return false;
						}
						else{
							if(!player.countCards('he',{color:'red'})) return false;
						}
					},
					respondSha:true,
				}
			},
     lib.skill.wusheng2={
				trigger:{source:'damageBegin'},
				filter:function(event){
					return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
				},
				forced:true,
				content:function(){
        if(trigger.player.countCards('h')>player.countCards('h')){
       player.draw(trigger.player.countCards('h')-player.countCards('h'));
       }
       else{
       trigger.num++;
        }
				}
			},
			lib.skill.paoxiao={
       group:'paoxiao2',
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					}
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(!get.zhu(player,'shouyue')) return false;
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				}
			},
     lib.skill.paoxiao2={
				trigger:{player:'useCardToBefore'},
				filter:function(event){
					return event.card.name=='sha';
				},
				forced:true,
       priority:10,
				content:function(){
        if(get.color(trigger.card)=='black'){
       trigger.target.chooseToDiscard(true,'he');
       }
       else{
       player.draw(2);
        }
				}
			},
     lib.skill.guanxing={
				audio:2,
				audioname:['jiangwei'],
				trigger:{player:'phaseBegin'},
				frequent:true,
				content:function(){
					"step 0"
					if(player.isUnderControl()){
						game.modeSwapPlayer(player);
					}
					var num=4;
					if(player.hasSkill('yizhi')&&player.hasSkill('guanxing')){
						num=4;
					}
					var cards=get.cards(num);
					event.cards=cards;
					var switchToAuto=function(){
						_status.imchoosing=false;
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
						var top=[];
						var judges=player.node.judges.childNodes;
						var stopped=false;
						if(!player.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return judge(b)-judge(a);
								});
								if(judge(cards[0])<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return get.value(b,player)-get.value(a,player);
							});
							while(cards.length){
								if(get.value(cards[0],player)<=5) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						for(var i=0;i<top.length;i++){
							ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
						}
						for(i=0;i<bottom.length;i++){
							ui.cardPile.appendChild(bottom[i]);
						}
						player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
						game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
						game.delay(2);
					};
					var chooseButton=function(online,player,cards){
						var event=_status.event;
						player=player||event.player;
						cards=cards||event.cards;
						event.top=[];
						event.bottom=[];
						event.status=true;
						event.dialog=ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）',cards);
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('pointerdiv');
						}
						event.switchToAuto=function(){
							event._result='ai';
							event.dialog.close();
							event.control.close();
							_status.imchoosing=false;
						},
						event.control=ui.create.control('ok','pileTop','pileBottom',function(link){
							var event=_status.event;
							if(link=='ok'){
								if(online){
									event._result={
										top:[],
										bottom:[]
									}
									for(var i=0;i<event.top.length;i++){
										event._result.top.push(event.top[i].link);
									}
									for(var i=0;i<event.bottom.length;i++){
										event._result.bottom.push(event.bottom[i].link);
									}
								}
								else{
									var i;
									for(i=0;i<event.top.length;i++){
										ui.cardPile.insertBefore(event.top[i].link,ui.cardPile.firstChild);
									}
									for(i=0;i<event.bottom.length;i++){
										ui.cardPile.appendChild(event.bottom[i].link);
									}
									for(i=0;i<event.dialog.buttons.length;i++){
										if(event.dialog.buttons[i].classList.contains('glow')==false&&
											event.dialog.buttons[i].classList.contains('target')==false)
										ui.cardPile.appendChild(event.dialog.buttons[i].link);
									}
									player.popup(get.cnNumber(event.top.length)+'上'+get.cnNumber(event.cards.length-event.top.length)+'下');
									game.log(player,'将'+get.cnNumber(event.top.length)+'张牌置于牌堆顶');
								}
								event.dialog.close();
								event.control.close();
								game.resume();
								_status.imchoosing=false;
							}
							else if(link=='pileTop'){
								event.status=true;
								event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆顶的牌';
							}
							else{
								event.status=false;
								event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆底的牌';
							}
						})
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('selectable');
						}
						event.custom.replace.button=function(link){
							var event=_status.event;
							if(link.classList.contains('target')){
								link.classList.remove('target');
								event.top.remove(link);
							}
							else if(link.classList.contains('glow')){
								link.classList.remove('glow');
								event.bottom.remove(link);
							}
							else if(event.status){
								link.classList.add('target');
								event.top.unshift(link);
							}
							else{
								link.classList.add('glow');
								event.bottom.push(link);
							}
						}
						event.custom.replace.window=function(){
							for(var i=0;i<_status.event.dialog.buttons.length;i++){
								_status.event.dialog.buttons[i].classList.remove('target');
								_status.event.dialog.buttons[i].classList.remove('glow');
								_status.event.top.length=0;
								_status.event.bottom.length=0;
							}
						}
						game.pause();
						game.countChoose();
					};
					event.switchToAuto=switchToAuto;

					if(event.isMine()){
						chooseButton();
						event.finish();
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,true,event.player,event.cards);
						event.player.wait();
						game.pause();
					}
					else{
						event.switchToAuto();
						event.finish();
					}
					"step 1"
					if(event.result=='ai'||!event.result){
						event.switchToAuto();
					}
					else{
						var top=event.result.top||[];
						var bottom=event.result.bottom||[];
						for(var i=0;i<top.length;i++){
							ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
						}
						for(i=0;i<bottom.length;i++){
							ui.cardPile.appendChild(bottom[i]);
						}
						for(i=0;i<event.cards.length;i++){
							if(!top.contains(event.cards[i])&&!bottom.contains(event.cards[i])){
								ui.cardPile.appendChild(event.cards[i]);
							}
						}
						player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(event.cards.length-top.length)+'下');
						game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
						game.delay(2);
					}
				},
				ai:{
					threaten:1.4
				}
			},
			lib.skill.kongcheng={
				mod:{
					targetEnabled:function(card,player,target,now){
						if(target.countCards('h')==0){
							if(card.name=='sha'||card.name=='juedou'||card.name=='wanjian'||card.name=='nanman'||card.name=='huoshaolianying') return false;
						}
					}
				},
				group:'kongcheng1',
				ai:{
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}},
          player:function(card,player,target){
        if(player.countCards('h')<=2)
        return [1,3];      
        }
				}
			},
			lib.skill.kongcheng1={
				audio:2,
				trigger:{player:'loseEnd'},
				forced:true,
       unique:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
       player.recover();
       }
			},
			lib.skill.longdan={
				group:['longdan_gain','longdan_gain2','longdan_sha','longdan_shan','longdan_draw'],
				subSkill:{
        gain:{
			audio:['longdan',2],
			trigger:{target:'shaMiss'},
			priority:-1,
			forced:true,
     check:function(event,player){
				return get.attitude(player,event.player)<0;
			},
			filter:function(event,player){
					return !player.hasSkill('chongzhen');
					},
			content:function(){
     if(trigger.player.countCards('he')>0){
     player.line(trigger.player,'green');	player.gainPlayerCard('he',trigger.player,true);
       }
      },
      ai:{
							effect:{
								player:function(card,player,target){
							if(card.name=='sha')	
            return [1,2,0,-1];
          }
        }
      }
		 },
     gain2:{
			audio:['longdan',2],
			trigger:{player:'useCardToBefore'},
			priority:10,			
     filter:function(event,player){
					return !player.hasSkill('chongzhen')&&event.card.name=='sha';
				},
     check:function(event,player){
				return get.attitude(player,event.target)<0;
			},
			content:function(){
     if(trigger.target.countCards('he')>0){
     player.line(trigger.target,'green');
	player.gainPlayerCard('he',trigger.target,true);
           }
         }
			  },
					draw:{
						trigger:{player:['useCard','respond']},
						forced:true,
						popup:false,
						filter:function(event,player){
							if(!get.zhu(player,'shouyue')) return false;
							return event.skill=='longdan_sha'||event.skill=='longdan_shan';
						},
						content:function(){
							player.draw();
							player.storage.fanghun2++;
						}
					},
					sha:{
						audio:2,
						enable:['chooseToUse','chooseToRespond'],
						filterCard:{name:'shan'},
						viewAs:{name:'sha'},
						viewAsFilter:function(player){
							if(!player.countCards('h','shan')) return false;
						},
						prompt:'将一张【闪】当【杀】使用或打出',
						check:function(){return 1},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondSha')&&current<0) return 0.6
								}
							},
							respondSha:true,
							skillTagFilter:function(player){
								if(!player.countCards('h','shan')) return false;
							},
							order:function(){
			                    return get.order({name:'sha'})+0.1;
			                },
							useful:-1,
							value:-1
						}
					},
					shan:{
						audio:2,
						enable:['chooseToRespond'],
						filterCard:{name:'sha'},
						viewAs:{name:'shan'},
						prompt:'将一张【杀】当【闪】使用或打出',
						check:function(){return 1},
						viewAsFilter:function(player){
							if(!player.countCards('h','sha')) return false;
						},       
						ai:{
							respondShan:true,
							skillTagFilter:function(player){
								if(!player.countCards('h','sha')) return false;
							},
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondShan')&&current<0) return 0.6
								}
							},
							order:4,
							useful:-1,
							value:-1
						}
					}
				},
			},			
    lib.skill.tieji={
				audio:2,
				trigger:{player:'useCardToBefore'},
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				logTarget:'target',
       priority:15,
       filter:function(event,player){
					return event.card.name=='sha';
				},
				content:function(){
					"step 0"
					player.judge(function(card){
						if(get.zhu(_status.event.player,'shouyue')){
							if(get.suit(card)!='spade') return 2;
						}
						else{
							if(get.color(card)=='red') return 2;
						}
						return 1;
					});
					"step 1"
					if(result.judge>1){
        if(trigger.target.countCards('he',{color:'red'})){
						trigger.target.chooseToDiscard('he',{color:'red'},trigger.target.countCards('he',{color:'red'}),true);
        }
        else{
        trigger.target.damage();
         }
					}
         else{
        player.draw();
        }
				},
       ai:{
            threaten:1.4,
							effect:{
								player:function(card,player,target){
							if(card.name=='sha')	
            return [1,1,0,-3];
          }
        }
      }
		 },
			lib.skill.jizhi={
				audio:2,
				audioname:['jianyong'],
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event){
					return ((get.type(event.card)=='trick'||get.type(event.card)=='delay')&&event.cards[0]&&event.cards[0]==event.card);
				},
				content:function(){
       if(get.color(trigger.card)=='red'){
				player.draw(2);
       }
       else{
       player.draw();
        }
				},
				ai:{
					threaten:1.5,
					noautowuxie:true,
        result:{
        player:1,
        },
        effect:{
        player:function(card,player,target){
        if(get.type(card)=='red')
        return [1,3];
          }
        }
				}
			},
			lib.skill.qicai={
				mod:{
					targetInRange:function(card,player,target,now){
						var type=get.type(card);
						if(type=='trick'||type=='delay') return true;
					}
				},
			},
			lib.skill.zhiheng={
				audio:2,
				enable:'phaseUse',
				usable:1,
				position:'h',
				filterCard:{name:'sha'},
				selectCard:[1,Infinity],
				prompt:'弃置任意张【杀】，然后摸等量两倍的牌',
				check:function(card){
					return 6-get.value(card)
				},
       filter:function(event,player){
       return player.countCards('h','sha');
       },
				content:function(){
					player.draw(2*cards.length);
				},
				ai:{
					order:6,
					result:{
						player:1
					},
					threaten:1.5
				},
			},			
			lib.skill.qixi={
       group:'qixi_discard',
				audio:4,
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='black';
				},
				position:'he',
				viewAs:{name:'guohe'},
				viewAsFilter:function(player){
					if(!player.countCards('he',{color:'black'})) return false;
				},
				prompt:'将一张黑色牌当【过河拆桥】使用',
				check:function(card){return 5-get.value(card)
			},
    subSkill:{
    discard:{
    audio:false,
    trigger:{
        global:"discardEnd",
    },
    filter:function (event,player){
        if(_status.currentPhase!=player||event.player==player) return false;        
        for(var i=0;i<event.cards.length;i++){
            if(get.position(event.cards[i])=='d'&&(get.type(event.cards[i])=='trick'||get.type(event.cards[i])=='delay')){
                return true;
            }
        }
        return false;
    },
    forced:true,
    unique:true,
    gainable:true,
    popup:false,
    content:function (){    
     player.gain(trigger.cards,'gain2','log');     
    },
    ai:{
        threaten:1.4,
        }
       }
      }
     },
			lib.skill.keji={
				audio:4,
				trigger:{player:'phaseDiscardBefore'},
				frequent:function(event,player){
					return !player.needsToDiscard();
				},
				filter:function(event,player){
					return player.countUsed('sha')==0;
				},
				content:function(){
					trigger.cancel();
        player.draw();
				},
       ai:{
       threaten:1.3,
       }
			},
			lib.skill.kurou={
      group:['kurou_draw'],
				audio:false,       
				enable:'phaseUse',
       popup:false,	
       filter:function(event,player){
					return player.hp>0;
				},       
				content:function(){			
					player.loseHp();
				},
				ai:{
					basic:{
						order:8
					},
					result:{
						player:function(player){
							if(player.countCards('h')>=player.hp-1) return -1;
							if(player.hp<3) return -1;
							return 1;
						}
					}
				},
      subSkill:{
      draw:{
				audio:['kurou',4],
				trigger:{player:'loseHpEnd'},
				forced:true,
				content:function(){
					player.draw(trigger.num*3);
				 }
       }}
			},
			lib.skill.yingzi={
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				frequent:true,
				content:function(){
					trigger.num+=Math.max(0,Math.min(3,player.hp));        
				},
				ai:{                    
				threaten:function(player,target){
       if(target.hp<=0)
       return 1.1;
					return Math.max(1.3,Math.min(3,target.hp)*0.8);					
				}
			}
		},
    lib.skill.fanjian={
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					"step 0"
					target.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
						switch(Math.floor(Math.random()*6)){
							case 0:return 'heart2';
							case 1:case 4:case 5:return 'diamond2';
							case 2:return 'club2';
							case 3:return 'spade2';
						}
					});
					"step 1"
					game.log(target,'选择了'+get.translation(result.control));
					event.choice=result.control;
					target.popup(event.choice);
					event.card=player.getCards('h').randomGet();
					target.gain(event.card,player);
					player.$give(event.card,target);
					game.delay();
					"step 2"
					if(get.suit(event.card)+'2'!=event.choice) target.damage('nocard',1+target.countCards('j'));
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							var eff=get.damageEffect(target,player);
							if(eff>=0) return 1+eff;
							var value=0,i;
							var cards=player.getCards('h');
							for(i=0;i<cards.length;i++){
								value+=get.value(cards[i]);
							}
							value/=player.countCards('h');
							if(target.hp==1) return Math.min(0,value-7);
							return Math.min(0,value-5-target.countCards('j'));
						}
					}
				}
			},
			lib.skill.guose={
       group:'guose_draw',
				audio:1,
				filter:function(event,player){
					return player.countCards('he',{suit:'diamond'})>0;
				},
				enable:'chooseToUse',
				filterCard:function(card){
					return get.suit(card)=='diamond';
				},
				position:'he',
				viewAs:{name:'lebu'},
				prompt:'将一张方片牌当【乐不思蜀】使用',
				check:function(card){return 6-get.value(card)},
				ai:{
					threaten:1.5
				},
       subSkill:{
       draw:{
						trigger:{player:['useCardToBefore']},
						forced:true,
						popup:false,
          priority:11,
						filter:function(event,player){
          if(event.card.name=='wuxie')
          return false;
							return event.target.countCards('j');
						},
						content:function(){
						player.draw(trigger.target.countCards('j'));							
					}
				}},
			},
			lib.skill.liuli={
				audio:2,
				trigger:{target:['lebuBefore','bingliangBefore','shaBefore']},
				direct:true,
				priority:5,
				filter:function(event,player){
					if(player.countCards('he')==0) return false;
					return game.hasPlayer(function(current){
						return get.distance(player,current,'attack')<=1&&current!=event.player&&
							current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
					});
				},
				content:function(){
					"step 0"
					var next=player.chooseCardTarget({
						position:'he',
						filterCard:lib.filter.cardDiscardable,
						filterTarget:function(card,player,target){
							var trigger=_status.event.getTrigger();
							if(get.distance(player,target,'attack')<=1&&
								target!=trigger.player&&target!=player){
								if(player.canUse(trigger.card,target)) return true;
							}
							return false;
						},
						ai1:function(card){
							return get.unuseful(card)+9;
						},
						ai2:function(target){
							if(_status.event.player.countCards('h','shan')){
								return -get.attitude(_status.event.player,target);
							}
							if(get.attitude(_status.event.player,target)<5){
								return 6-get.attitude(_status.event.player,target);
							}
							if(_status.event.player.hp==1&&player.countCards('h','shan')==0){
								return 10-get.attitude(_status.event.player,target);
							}
							if(_status.event.player.hp==2&&player.countCards('h','shan')==0){
								return 8-get.attitude(_status.event.player,target);
							}
							return -1;
						},
						prompt:get.prompt('liuli')
					});
					"step 1"
					if(result.bool){
						player.discard(result.cards);
						player.logSkill(event.name,result.targets);
						trigger.target=result.targets[0];
						trigger.targets.remove(player);
						trigger.targets.push(result.targets[0]);
					}
					else{
						event.finish();
					}
					"step 2"
					trigger.untrigger();
					trigger.trigger('useCardToBefore');
					trigger.trigger('shaBefore');
        trigger.trigger('lebuBefore');
        trigger.trigger('bingliangBefore');
					game.delay();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target.countCards('he')==0) return;
							if(card.name!='sha') return;
							var min=1;
							var friend=get.attitude(player,target)>0;
							var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(player!=players[i]&&
									get.attitude(target,players[i])<0&&
									target.canUse(card,players[i])){
									if(!friend) return 0;
									if(get.effect(players[i],vcard,player,player)>0){
										if(!player.canUse(card,players[0])){
											return [0,0.1];
										}
										min=0;
									}
								}
							}
							return min;
						}
					}
				}
			},
			lib.skill.qianxun={
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='shunshou'||card.name=='lebu'||card.name=='tiesuo'||card.name=='huogong') return false;
					}
				},
			},
			lib.skill.lianying={
				audio:2,
				trigger:{player:['loseAfter']},
				frequent:true,
				filter:function(event,player){
    	if(player.countCards('e')<=player.countCards('h'))  return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
           "step 0"
        player.chooseTarget(get.prompt('lianying'),function(card,player,target){
    					if(player==target) return false;
    					return !target.isLinked();
    				}).set('ai',function(target){
    					return -get.attitude(_status.event.player,target);
    				});
    				"step 1"
    				if(result.bool){
    					player.logSkill('lianying',result.targets);
    					event.targets=result.targets
    					if(result.targets.length>=1){
    				  event.targets[0].link();
            }
           }
    				"step 2"
					player.draw(player.countCards('e')-player.countCards('h'));
				},
     ai:{
        result:{
        player:1,
        },
					threaten:1.6,        
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip') return [1,3];
						},
          player:function(card,player,target){
          if(get.type(card)!='basic'&&card.name!='jiu'&&card.name!='tiesuo'&&player.num('e')) return [1,3];
     }
					}
				}
			},
			lib.skill.xiaoji={
				audio:4,
				trigger:{player:'loseEnd'},
				frequent:true,
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(get.type(event.cards[i])=='equip'||event.cards[i].original=='e') return true;
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(get.type(trigger.cards[i])=='equip'||trigger.cards[i].original=='e') num+=2;
					}
					player.draw(num);
				},
				ai:{
					noe:true,
        threaten:1.7,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip') return [1,4];
						}
					}
				}
			},
			lib.skill.jieyin={
				audio:2,
				enable:'phaseUse',
				filterCard:true,
				usable:1,
				selectCard:2,
				check:function(card){
					var player=get.owner(card);
					if(player.countCards('h')>player.hp)
						return 8-get.value(card)
					if(player.hp<player.maxHp)
						return 6-get.value(card)
					return 4-get.value(card)

				},
				filterTarget:function(card,player,target){
					if(target.sex!='male') return false;					
					if(target==player) return false;
					return true;
				},
				content:function(){
        if(player.isDamaged()){
					player.recover();
        }
        else{
        player.draw(2);
        }
        if(target.isDamaged()){
					target.recover();
        }
        else{
        target.draw(2);
        }
				},
				ai:{
					order:5.5,
					result:{
						player:function(player){
							return 1;
							if(player.countCards('h')>player.hp) return 0
							return -1;
						},
						target:2
					},
					threaten:2,
				}
			},
			lib.skill.qingnang={
				audio:2,
				enable:'phaseUse',
				filterCard:true,
				usable:1,
				check:function(card){
					return 9-get.value(card)
				},
				filterTarget:function(card,player,target){
					return true;
				},
				content:function(){
        if(target.isDamaged()){
					target.recover();
        }
        else{
        target.draw(2);
        }
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(target.hp==1) return 5;
							if(player==target&&player.countCards('h')>player.hp) return 5;
							return 2;
						}
					},
					threaten:2
				}
			},
			lib.skill.jijiu={
    			audio:2,
    			trigger:{global:'dying'},
    			check:function(event,player){
    				return get.attitude(player,event.player)>0;
    			},
        priority:10,
    			content:function(){
    				"step 0"
    				event.cards=get.cards(2);
    				player.showCards(event.cards);
    				"step 1"
    				var num=0;
    				for(var i=0;i<event.cards.length;i++){
    					if(get.color(event.cards[i])=='red'){
    						num++;
    						event.cards[i].discard();
    						event.cards.splice(i--,1);
    					}
    				}
    				if(num){
    					trigger.player.recover(num);
    				}
    			 "step 2"
    				if(event.cards.length){
    					player.gain(event.cards,'gain2');    					
    					game.delay();
    				}
    			},
       ai:{
       threaten:2,
       }
    	},				
			lib.skill.wushuang={
				forced:true,
				locked:true,
				group:['wushuang1','wushuang2','wushuang3']       
			},
			lib.skill.wushuang1={
				audio:2,
				trigger:{player:'shaBegin'},
				forced:true,
				filter:function(event,player){
					return !event.directHit;
				},
				priority:-1,
				content:function(){
					if(typeof trigger.shanRequired=='number'){
						trigger.shanRequired++;
					}
					else{
						trigger.shanRequired=2;
					}
				}
			},
			lib.skill.wushuang2={
				audio:2,
				trigger:{player:'juedou',target:'juedou'},
				forced:true,
				filter:function(event,player){
					return event.turn!=player;
				},
				priority:-1,
				content:function(){
					"step 0"
					var next=trigger.turn.chooseToRespond({name:'sha'},'请打出一张杀响应决斗');
					next.set('prompt2','（共需打出2张杀）');
					next.autochoose=lib.filter.autoRespondSha;
					next.set('ai',function(card){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(get.attitude(trigger.turn,player)<0&&trigger.turn.countCards('h','sha')>1){
							return get.unuseful2(card);
						}
						return -1;
					});
					"step 1"
					if(result.bool==false){
						trigger.directHit=true;
					}
				},
				ai:{
					result:{
						target:function(card,player,target){
							if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
						}
					}
				}
			},
    lib.skill.wushuang3={
    mod:{
                    attackFrom:function (from,to,num){
            return num-1; 
        },
            },
       audio:false,
				trigger:{source:'damageEnd'},
				forced:true,
       popup:false,
       usable:2,
				filter:function(event,player){
					return player.isDamaged()&&event.player!=player&&event.notLink()&&event.card&&(event.card.name=='sha'||event.card.name=='juedou');
				},
				content:function(){					
        player.draw(Math.min(3,player.maxHp-player.hp));
				},
       ai:{
       threaten:1.6,
    				effect:{
    					target:function(card,player,target){    					    						if(get.tag(card,'recover')&&player.hp>=player.countCards('h')&&player==target) return [0,0];
    					}
    				}
    			}
    		},
    lib.skill.lijian={
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current!=player&&current.sex=='male';
					})>1;
				},
				check:function(card){return 10-get.value(card)},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(target.sex!='male') return false;
					if(ui.selected.targets.length==1){
						return target.canUse({name:'juedou'},ui.selected.targets[0]);
					}
					return true;
				},
				targetprompt:['先出杀','后出杀'],
				selectTarget:2,
				multitarget:true,
				content:function(){
				 'step 0'
       targets[1].addSkill('lijian2');    	targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
					game.delay(0.5);
       'step 1'
      targets[1].removeSkill('lijian2');
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length==0){
								return -3;
							}
							else{
								return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
							}
						}
					},
					expose:0.4,
					threaten:3,
				}
			},
     lib.skill.lijian2={
        ai:{
         playernowuxie:true,
       }
     },
			lib.skill.biyue={
				audio:2,
				trigger:{player:'phaseEnd'},
				frequent:true,
				content:function(){
        if(player.isDamaged()){
					player.draw();
        }
        else{
        player.draw(2);
        }
				}
			},
     lib.translate.hujia_info='主公技，当你需要使用(或打出)一张【闪】时，你可以发动护驾。所有魏势力角色按行动顺序依次选择是否打出一张【闪】"提供"给你(视为由你使用或打出)，直到有一名角色或没有任何角色决定如此做时为止。',
    lib.translate.jianxiong_info='你可以立即获得对你造成伤害或其他角色使用令除你外的角色回复体力的牌。',
			lib.translate.fankui_info='每当你受到伤害后，你可以获得来源的X张牌（X为你已损失的体力值，且至少为1）。',
			lib.translate.guicai_info='在任意角色的判定牌生效前，你可以打出一张手牌代替之。',
			lib.translate.ganglie_info='当你受到伤害后，你可以判定，若结果不为♥，来源选择一项：1、弃置三张手牌；2、弃置一张装备牌并受到你造成的1点伤害或受到你造成的2点伤害。',
			lib.translate.tuxi_info='从牌堆摸取牌时，你可以少摸一张牌并选择至多两名有手牌的其他角色。若如此做，你获得这些角色的各一张手牌。',
			lib.translate.luoyi_info='摸牌阶段，你可以少摸一张牌。若如此做，直到回合结束，当你使用【杀】或【决斗】对目标角色造成伤害时，此伤害+1，并摸X张牌（X为你最大体力值减你手牌数的差值）。',
			lib.translate.tiandu_info='每当你的判定牌生效后，你可以获得此牌。',
     lib.translate.yiji2='遗计',
			lib.translate.yiji_info='每当你回复1点体力、流失1点体力或受到1点伤害后，你可以观看牌堆顶的两张牌，然后将其中一张牌交给一名角色，再将另一张牌交给一名角色；当你死亡时，可以令一名其他角色失去1点体力上限，然后获得此技能。',
			lib.translate.luoshen_info='准备阶段开始时，你可以进行判定，若结果为基本牌或非延时锦囊牌，你获得生效后的判定牌且你可以重复此流程。',
			lib.translate.qingguo_info='你可以将一张基本牌或非延时锦囊手牌当【闪】使用或打出。',
			lib.translate.rende_info='出牌阶段，你可以将至少一张手牌交给一名其他角色，若你于此阶段内给出的牌首次达到两张，你回复1点体力并摸两张牌。 ',
			lib.translate.jijiang_info='主公技，每当你需要使用或打出一张【杀】时，你可以令其他蜀势力角色选择是否打出一张【杀】（视为由你使用或打出）。',
     lib.translate.wusheng2='武圣',
			lib.translate.wusheng_info='你可以将一张红色牌当【杀】使用；锁定技，每当你使用红色的【杀】造成伤害时，若受伤害角色的手牌数大于你，则你摸X张牌（X为其手牌数与你的差值），否则此【杀】伤害+1。',
			lib.translate.paoxiao_info='锁定技，你使用【杀】无次数限制；你使用黑色的【杀】指定一名其他角色为目标后，该角色须弃置一张牌；你使用红色的【杀】指定一名其他角色为目标后，你摸两张牌。',
			lib.translate.guanxing_info='准备阶段开始时，你可以观看牌堆顶的四张牌，并改变其中任意数量的牌的顺序置于牌堆顶并将其余牌置于牌堆底。',
			lib.translate.kongcheng_info='锁定技，若你没有手牌，你不是【杀】、【决斗】、【万箭齐发】、【南蛮入侵】和【火烧连营】的合法目标；每当你失去最后一张手牌时，你回复1点体力。',
     lib.translate.longdan_gain='龙胆',
     lib.translate.longdan_gain2='龙胆',
			lib.translate.longdan_info='你可以将【杀】当【闪】，【闪】当【杀】使用或打出；每当你使用【杀】或打出【闪】响应【杀】时，若你未拥有技能【冲阵】，可以获得对方的一张牌。',
			lib.translate.mashu_info='锁定技，你计算与其他角色的距离-1。',
			lib.translate.feiying_info='锁定技，其他角色计算与你的距离+1。',
			lib.translate.tieji_info='当你使用【杀】指定一个目标后，你可以判定，若结果为红色，该角色须弃置所有的红色牌，若其牌里没有红色牌，则受到你造成的1点伤害，若结果为黑色，你摸一张牌。',
			lib.translate.jizhi_info='每当你使用一张未转化的锦囊牌，若此牌为红色，你可以摸两张牌，否则你可以摸一张牌。',
			lib.translate.qicai_info='锁定技，你使用的锦囊牌无距离限制。',
			lib.translate.zhiheng_info='出牌阶段限一次，你可以弃置任意张【杀】，然后摸等量两倍的牌。',
			lib.translate.jiuyuan_info='主公技，锁定技，其他吴势力角色对处于濒死状态的你使用【桃】回复的体力+1。',
			lib.translate.qixi_info='你可以将一张黑色牌当【过河拆桥】使用；锁定技，在你的回合，其他角色因弃置或被弃置的锦囊牌，你获得之。',
			lib.translate.keji_info='若你在出牌阶段没有使用【杀】，则可跳过弃牌阶段并摸一张牌。',
     lib.translate.kurou_draw='苦肉',
			lib.translate.kurou_info='出牌阶段，你可以失去1点体力；锁定技，每当你失去1点体力时，你摸三张牌。',
			lib.translate.yingzi_info='摸牌阶段，你可以额外摸X张牌（X为你体力值，不少于0，且至多为3）。',
			lib.translate.fanjian_info='出牌阶段，你可以令一名其他角色选择一种花色后获得你的一张手牌并展示之，若此牌的花色与其所选的不同，你对其造成X+1点伤害（X为其判定区里牌数）。每阶段限一次。',
			lib.translate.guose_info='你可以将一张方片花色的手牌当【乐不思蜀】使用；锁定技，当你使用牌指定判定区里有牌的目标角色时，你摸X张牌（X为该角色判定区里牌数）。',
			lib.translate.liuli_info='当你成为【杀】、【兵粮寸断】或【乐不思蜀】的目标时，可以弃置一张牌将其转移给攻击范围内的一名其他角色，此角色不能是此牌的使用者。',
			lib.translate.qianxun_info='锁定技，你不能成为【顺手牵羊】、【铁索连环】、【火攻】和【乐不思蜀】的目标。',
			lib.translate.lianying_info='每当你失去手牌后，若你手牌数小于装备区里牌数，你可以将一名其他角色的武将牌横置，然后你将手牌补至你装备区里牌数。',
			lib.translate.xiaoji_info='每当你失去一张装备牌，你可以摸两张牌。',
			lib.translate.jieyin_info='出牌阶段限一次，你可以弃置两张手牌并选择一名男性角色，若你或其已受伤，则回复1点体力，否则摸两张牌。',
			lib.translate.qingnang_info='出牌阶段限一次，你可以弃置一张手牌选择一名角色，若该角色已受伤，则其回复1点体力，否则其摸两张牌。',
			lib.translate.jijiu_info='当一名角色处于濒死状态时，你可以亮出牌堆顶的两张牌，该角色回复等同于其中红色牌数量的体力，然后将这些红色牌置入弃牌堆，最后你获得其余的牌。',
			lib.translate.wushuang_info='锁定技，你的攻击范围+1；当你使用【杀】指定一个目标后，该角色需依次使用两张【闪】才能抵消此【杀】；当你使用【决斗】指定一个目标后，或成为一名角色使用【决斗】的目标后，该角色每次响应此【决斗】需依次打出两张【杀】；每当你为伤害来源的【杀】或【决斗】对其他目标角色造成伤害时，你摸X张牌（X为你已损失的体力值，且至多为3）每回合限两次。',
			lib.translate.lijian_info='出牌阶段，你可以弃一张牌并选择两名男性角色。若如此做，视为其中一名男性角色对另一名男性角色使用一张【决斗】。（此【决斗】不能被【无懈可击】响应）。每回合限用一次。',
			lib.translate.biyue_info='回合结束阶段，若你未受伤你可以摸两张牌，否则你可以摸一张牌。'
    })};
if(lib.config.mode=="brawl"){
      lib.arenaReady.push(function(){
      lib.translate.old_yuanshu='袁术',
      lib.translate.re_simayi='司马懿',
      lib.translate.sp_caoren='曹仁',
      lib.translate.shen_caocao='曹操',
      lib.translate.re_xuzhu='许褚',
      lib.character.shen_caocao=['male','qun',3,['rejianxiong','reguicai','guixin','xingshang','feiying'],['wei']],     
      lib.character.machao=['male','shu',4,['mashu_machao','tieji'],[]],
      lib.character.re_machao=['male','shu',4,['mashu_re_machao','retieji'],[]],
      lib.character.madai=['male','shu',4,['mashu_madai','qianxi'],[]],
      lib.character.pangde=['male','qun',4,['mashu_pangde','jianchu'],[]],
      lib.character.sp_pangde=['male','qun',4,['mashu_sppangde','juesi'],[]],
      lib.character.mateng=['male','qun',4,['xiongyi','mashu_mateng'],[]],
      lib.character.mayunlu=['female','shu',4,['fengpo','mashu_mayunlu'],[]],
      lib.translate.guixin_info='当你受到1点伤害后，你可以随机获得每名其他角色区域里的一张牌，然后你翻面。',     
     lib.skill.guixin={
				audio:2,
				trigger:{player:'damageAfter'},
				check:function(event,player){
					if(player.isTurnedOver()) return true;
					var num=game.countPlayer(function(current){
						if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
							return true;
						}
						if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
							return true;
						}
					});
					return num>=2;
				},
				filter:function (event,player){
     return game.hasPlayer(function(current){
			return current!=player&&current.countCards('hej');
	    	});    
     },     
				content:function(){
					"step 0"
					event.num2=Math.round(trigger.num/30000);
					"step 1"
					var targets=game.filterPlayer();
					targets.remove(player);
					targets.sort(lib.sort.seat);
					event.targets=targets;
					event.num=0;
					player.line(targets,'green');
					"step 2"
					if(num<event.targets.length){
						var hej=event.targets[num].getCards('hej')
						if(hej.length){
							var card=hej.randomGet();
							player.gain(card,event.targets[num]);
							if(get.position(card)=='h'){
								event.targets[num].$giveAuto(card,player);
							}
							else{
								event.targets[num].$give(card,player);
							}
						}
						event.num++;
						event.redo();
					}
					"step 3"
					player.turnOver();
					"step 4"
					event.num2--;
					if(event.num2>0){								
			player.chooseBool('是否发动【归心】？');		}
					else{
						event.finish();
					}
					"step 5"
					if(result.bool){
					player.logSkill('guixin');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:function(player,target){
						if(target.hp==1) return 2.5;
						return 1;
					},
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(target.hp==1) return 0.8;
								if(target.isTurnedOver()) return [0,3];
								var num=game.countPlayer(function(current){
									if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
										return true;
									}
									if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
										return true;
									}
								});
								if(num>2) return [0,1];
								if(num==2) return [0.5,1];
							}
						}
					}
				}
			};  
      lib.translate.mashu_info='锁定技，你计算与其他角色的距离-1。',      
      lib.translate.feiying_info='锁定技，其他角色计算与你的距离+1。',
     lib.translate.mashu_machao='马术',
      lib.translate.mashu_machao_info='锁定技，你计算与其他角色的距离-1。',
      lib.translate.mashu_mateng='马术',
      lib.translate.mashu_mateng_info='锁定技，你计算与其他角色的距离-1。',
      lib.translate.mashu_madai='马术',
      lib.translate.mashu_madai_info='锁定技，你计算与其他角色的距离-1。',
      lib.translate.mashu_re_machao='马术',
      lib.translate.mashu_re_machao_info='锁定技，你计算与其他角色的距离-1。',
      lib.translate.mashu_pangde='马术',
      lib.translate.mashu_pangde_info='锁定技，你计算与其他角色的距离-1。',
      lib.translate.mashu_sppangde='马术',
      lib.translate.mashu_sppangde_info='锁定技，你计算与其他角色的距离-1。',
      lib.translate.mashu_mayunlu='马术',
      lib.translate.mashu_mayunlu_info='锁定技，你计算与其他角色的距离-1。',   
      lib.config.mode_config.identity.change_card='disabled',    
      lib.skill.mashu_machao={
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
     lib.skill.mashu_mateng={
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
      lib.skill.mashu_mayunlu={
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
     lib.skill.mashu_madai={
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
     lib.skill.mashu_pangde={
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
     lib.skill.mashu_sppangde={
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
     lib.skill.mashu_re_machao={
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},     
      lib.skill._node={
 						trigger:{global:['gameStart','gameDrawAfter','phaseBefore']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,    
          filter:function(event,player){
          return game.me.name!='gods_zhaoyun'&&game.zhu.name!='gods_zhaoyun';
          },      
 						content:function(){
        console.log(player);
        eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[6-9d]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('eval(6(p,a,c,k,e,r){e=String;8(\'0\'.9(0,e)==0){d(c--)r[e(c)]=k[c];k=[6(e){7 r[e]||e}];e=6(){7\'[0-4]\'};c=1};d(c--)8(k[c])p=p.9(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);7 p}(\'0.swapPlayer=1(2){0.3(4)};player.revive=1(2){0.3(4)};\',[],5,\'game|6|all|over|false\'.split(\'|\'),0,{}))',[],14,'||||||function|return|if|replace||||while'.split('|'),0,{}));
      }
     },      
         lib.skill._nodedamage={
 						trigger:{player:['recoverBefore','damageBefore']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,
          filter:function(event,player){
          if(game.me.name=='gods_zhaoyun'||game.zhu.name=='gods_zhaoyun')
          return false;
          if(event.name=='damage'){
if(event.card&&(event.card.name=='shandian'||event.card.name=='fulei'))
          return false;
          return !event.source;
          }
          else{         
          return !event.source;
          }
          return false;
          },
 						content:function(){
            game.over(false);        
             }
        }
   });
      if(config.Scenario){
      game.addCharacterPack({
      character:{
      Battle_yuanshao:['male','qun',5,['Battle_mengzhu','Battle_gongshang'],['forbidai']],
      Battle_lvbu:['male','qun',5,['mashu','wushuang','Battle_yongguan','Battle_kuangnu'],['forbidai']],
			 Battle_dongzhuo:['male','qun',20,['jiuchi','Battle_qiangzheng','Battle_baolin','Battle_zengyuan','baonue'],['forbidai']],
      qun_shibing:['male','qun',2,['Battle_wuju'],['forbidai']],
      wei_shibing:['male','wei',2,['Battle_huben'],['forbidai']],
      wu_shibing:['male','wu',2,['Battle_shanzhan'],['forbidai']],
      shu_shibing:['male','shu',2,['Battle_yingyong'],['forbidai']],
      },
      skill:{
     Battle_yongguan:{
     group:'Battle_yongguan2',
     locked:true,
     unique:true,
     },
     Battle_yongguan2:{
     audio:2,
     trigger:{player:'phaseBegin'},
				forced:true,
       filter:function(event,player){
					return true;
				},
				content:function(){     
       var num=0;
       for(var i=0;i<game.players.length;i++){
       if(game.players[i]==player) continue;
			  if(game.players[i].identity=='fan'&&get.distance(player,game.players[i],'attack')<=1) num++;
        }
       player.draw(num);
       },
      mod:{
					maxHandcard:function(player,num){
         var num2=0;
       for(var i=0;i<game.players.length;i++){
       if(game.players[i]==player) continue;			if(game.players[i].identity=='fan'&&get.distance(player,game.players[i],'attack')<=1) num2++;
        }
        return num+num2;
  //+Math.ceil(player.countCards('e')/2);
					}
				}
			},
     Battle_kuangnu:{
     group:'Battle_kuangnu_discard', 
     trigger:{source:'damageEnd'},
				check:function(event,player){
					return get.attitude(player,event.player)<0;
				},
				logTarget:'player',
       audio:true,       
       filter:function(event,player){
					return event.player.identity!=player.identity&&event.player.identity!='zhu'&&event.num>0&&event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink()&&event.player.countCards('he');
				},
				content:function(){
       player.discardPlayerCard(true,'he',trigger.num,trigger.player);
       },       
       subSkill:{
       discard:{
     trigger:{source:'damageBegin'},
				forced:true,       
       filter:function(event,player){
					return event.player.identity!=player.identity&&event.player.identity!='zhu'&&player.hp<=4&&event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
				},
				content:function(){
       trigger.num++;
       }}}
      },
     Battle_mengzhu:{
     trigger:{global:'drawAfter'},
				forced:true,
       audio:true,
       usable:1,
       filter:function(event,player){
					return event.player!=player&&event.player.identity==player.identity&&event.player.countCards('h')>player.countCards('h');
				},
				content:function(){      
       player.draw();
       },
       ai:{
      threaten:2.5,
      }
      },
     Battle_gongshang:{
     trigger:{global:'damageEnd'},
				check:function(event,player){
					return get.attitude(player,event.source)>0;
				},
				logTarget:'source',
       audio:true,
       frequent:true,
       filter:function(event,player){
					return event.source&&event.source!=player&&event.source.identity==player.identity&&event.num>0;
				},
				content:function(){
       trigger.source.draw(trigger.num);
       }
      },
     Battle_zengyuan2:{
				unique:true,
				mod:{
					judge:function(player,result){
						if((game.roundNumber>=8||player.hp<10)&&_status.event.type=='phase'){
							if(result.bool==false){
								result.bool=null;
							}
							else{
								result.bool=false;
							}
						}
					}
				},			
				ai:{
					effect:{
						target:function(card,player,target){
           if((game.roundNumber>=6||target.hp<11)&&card.name=='shandian'||card.name=='fulei') return [1,-10];
							if(get.type(card)=='delay') return 0.5;
						}
					}
				}
			},
     Battle_zengyuan:{
     group:'Battle_zengyuan2',
     trigger:{player:'phaseDrawBegin'},
       forced:true,
       audio:true,
       filter:function(event,player){
					return game.roundNumber>=8||player.hp<10;
				},
				content:function(){
       var num=0;
       for(var i=0;i<game.players.length;i++){
       if(game.players[i]==player) continue;
			  if(game.players[i].identity=='fan') num++;
        }    
       trigger.num+=num;		     
       }
      },
     Battle_baolin:{
				audio:'boss_baolin',
				inherit:'juece',
			},     
			Battle_qiangzheng:{
				audio:['boss_qiangzheng',2],
				trigger:{player:'phaseEnd'},
	            forced:true,
				unique:true,
	            filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.identity=='fan'&&current.countCards('h');
					});
	            },
	            content:function(){
	                "step 0"
					var players=get.players(player);         
					players.remove(player);        
					event.players=players;	
					"step 1"
					if(event.players.length){
						var current=event.players.shift();          
						var hs=current.getCards('h')
						if(hs.length&&current.identity=='fan'){
           player.line(current,'green');  
							var card=hs.randomGet();
							player.gain(card,current);
							current.$giveAuto(card,player);
						}
						event.redo();
					}
	     }
			},
      _brawl_fadong:{
			trigger:{global:'gameStart'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player.identity!='zhu'||player.name!='Battle_dongzhuo') return false;                      
     return true;
     },
			content:function(){
     player.gain(get.cards(4))._triggered=null;
       }
     },
     _brawl_fadong1:{
			trigger:{global:'gameStart'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player.identity!='fan'||player.name!='Battle_yuanshao') return false;                      
     return true;
     },
			content:function(){
     player.gain(get.cards(2))._triggered=null;
       }
     },
     _brawl_fadong2:{
			trigger:{global:'gameStart'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player.identity!='zhong'||player.name!='Battle_lvbu'&&player.name!='xin_liru') return false;                      
     return true;
     },
			content:function(){
     player.addSkill('brawl_cf');
     player.gain(get.cards(4))._triggered=null;
       }
     },
     brawl_cf:{
      ai:{
      threaten:2,
      }
     },
      Battle_wuju:{
        group:['Battle_wuju_juedou'],       
    			audio:2,
    			trigger:{source:'damageEnd'},
         forced:true,
         unique:true,
         filter:function(event,player){
         return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
         },         
    			content:function(){
         player.draw();
         }
       },
       Battle_wuju_juedou:{
      audio:true,
				enable:'chooseToUse',
				filter:function(event,player){
					return player.countCards('h','shan');
				},
				filterCard:function(card){
					return card.name=='shan';
				},
				position:'h',
				viewAs:{name:'juedou'},
				prompt:'将一张【闪】当【决斗】使用',
				check:function(card){return 15-get.value(card)},
				ai:{
        order:6,
					skillTagFilter:function(player){
						return player.countCards('h','shan')>0;
					},
					threaten:1.3,
				}
			},
      Battle_shanzhan:{
      mod:{
      maxHandcard:function (player,num){
      return num+1;
        }
      },
      audio:2,
				enable:'chooseToUse',
				filter:function(event,player){
					return player.countCards('h',{suit:'heart'});
				},
				filterCard:function(card){
					return get.suit(card)=='heart';
				},
				position:'h',
				viewAs:{name:'tao'},
				prompt:'将一张红桃手牌当【桃】使用',
				check:function(card){return 15-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('h',{suit:'heart'})>0;
					},
					threaten:1.5,
					save:true,
					respondTao:true,
				}
			},
      Battle_huben:{
      group:'Battle_huben_shan', 
				audio:true,
				enable:'chooseToUse',
			  	filterCard:function(card){			
					return get.color(card)=='black';
				},      
       selectCard:2,
       viewAs:{name:'nanman'},
				filter:function(event,player){
				if(player.countCards('h',{color:'black'})<2) return false;
       return true;
				},
				prompt:'将两张黑色手牌当【南蛮入侵】使用',
				check:function(card){
       if(card.name=='nanman')
      return -0.5;
      return 15-get.value(card)},
       ai:{
       order:10,
       skillTagFilter:function(player){
							if(!player.countCards('h',{color:'black'})) return false;
						}
					},
    		},
      Battle_huben_shan:{
				mod:{
					cardEnabled:function(card,player){
						if(_status.event.skill!='Battle_huben'&&card.name!='nanman'&&card.name!='shan'&&get.color(card)=='black') return false;
					},
					cardUsable:function(card,player){
						if(_status.event.skill!='Battle_huben'&&card.name!='shan'&&get.color(card)=='black') return false;
					},
					cardRespondable:function(card,player){
						if(_status.event.skill!='Battle_huben_shan'&&card.name!='shan'&&get.color(card)=='black') return false;
					},
					cardSavable:function(card,player){
						if(_status.event.skill!='Battle_huben'&&card.name!='shan'&&get.color(card)=='black') return false;
					},
				},
				audio:true,
				enable:['chooseToRespond'],
				filterCard:function(card){
					return get.color(card)=='black';
				},
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{color:'black'})) return false;
				},
				prompt:'将一张黑色手牌当【闪】打出',
				check:function(){return 1},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('h',{color:'black'})) return false;
					},
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0) return 0.6
						}
					}
				}
			},
      Battle_yingyong:{
        group:['Battle_yingyong_sha'],       
    			audio:2,
    			trigger:{source:['damageBegin']},
         forced:true,
         unique:true,
         filter:function(event,player){
         return event.card&&event.card.name=='sha'&&event.notLink();
         },         
    			content:function(){
         trigger.num++;
         },
        subSkill:{
       sha:{
				audio:3,
				enable:['chooseToUse'],
				filterCard:function(card,player){			
					return get.suit(card)=='club';
				},
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
						if(!player.countCards('he',{suit:'club'})) return false;
				},
				prompt:'将一张梅花牌当【杀】使用',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){						
							if(!player.countCards('he',{suit:'club'})) return false;						
					},
					respondSha:true,
				}
			}}
       },
      },
      translate:{
      Battle_lvbu:'吕布',
      Battle_yuanshao:'袁绍',
      Battle_dongzhuo:'董卓',
      wei_shibing:'魏国士兵',
      shu_shibing:'蜀国士兵',
      wu_shibing:'吴国士兵',
      qun_shibing:'群雄士兵',
          
      Battle_yingyong:'英勇',
      Battle_huben:'虎贲',
      Battle_shanzhan:'善战',
      Battle_huben_shan:'虎贲',
      Battle_wuju:'无惧',
      Battle_wuju_juedou:'无惧',
      Battle_qiangzheng:'强征',
      Battle_mengzhu:'盟主',
      Battle_gongshang:'功赏',
      Battle_kuangnu:'狂怒',
      Battle_yongguan:'勇猛',
      Battle_yongguan2:'勇猛',
      Battle_zengyuan:'增援',
      Battle_zengyuan2:'增援',
      Battle_zengyuan_info:'锁定技，若你体力值小于10或当前游戏轮数不小于8，你获得以下技能：你的判定区内的牌效果反转；摸牌阶段，你额外摸X张牌（X为场上存活敌方角色个数）',
      Battle_yongguan_info:'锁定技，回合开始阶段，你摸X张牌；你的手牌上限+X（X为你攻击范围内的敌方角色个数）。',
      Battle_kuangnu_info:'当你为伤害来源的【杀】或【决斗】对敌方角色造成伤害时，你可以弃置其等量的牌；锁定技，若你的体力值不大于4，你为伤害来源的【杀】和【决斗】对敌方角色造成的伤害+1',
      Battle_mengzhu_info:'锁定技，每名角色的回合限一次，每当友方角色从牌堆摸取牌后，若其手牌数大于你，你摸一张牌',
      Battle_gongshang_info:'当一名友方角色造成伤害时，你可以令其摸等量的牌',
			 Battle_qiangzheng_info:'锁定技，结束阶段，你获得每个敌方角色的一张手牌',
			 Battle_baolin:'暴凌',
      Battle_wuju_info:'每当你使用【杀】或【决斗】对目标角色造成伤害时，你摸一张牌；你可以将【闪】当【决斗】使用。',
      Battle_shanzhan_info:'你的手牌上限始终+1，你的任意红桃手牌均可以当【桃】使用。',
      Battle_huben_info:'你的黑色手牌除【南蛮入侵】外均视为【闪】，你可以将两张任意黑色的手牌当【南蛮入侵】使用。',
      Battle_yingyong_info:'你使用【杀】造成的伤害+1，你的任何梅花手牌均可以当【杀】使用。',
      },
      });
}}},config:{"Judgetianze":{"name":"天择","intro":"天择：每名角色回合阶段开始时，50%的几率摸两张牌/受到1点伤害","init":true},"shashunpi":{"name":"顺劈","intro":"顺劈：使用【杀】对目标造成伤害的角色，可以额外使用一张【杀】","init":true},"shapozhan":{"name":"破绽","intro":"破绽：当一名角色使用【杀】指定一个目标后，该角色35%的几率不能使用【闪】响应此【杀】","init":false},"recoverjuejing":{"name":"绝境","intro":"绝境：只有处于濒死状态的角色，才能回复体力","init":false},"linkbamen":{"name":"八门","intro":"八门：一名角色的回合阶段开始时或游戏开始时，将场上所有角色的武将牌横置","init":false},"juedousidou":{"name":"死斗","intro":"死斗：决斗失败的一方进入濒死状态","init":false},"skillhunluan":{"name":"混乱","intro":"混乱：游戏开始时，重置所有角色的技能；一名角色的准备阶段开始时，该角色失去所有技能，然后随机获得X个技能（限定技/觉醒技/主公技除外）（X为5-其体力上限，若该角色身份为主公，X改为6-其体力上限；且至少为1）【建议禁用防止失去技能的武将】","init":true},"Insane":{"name":"Insane","intro":"Insane武将","init":true},"enhancement":{"name":"标准武将增强","intro":"增强标准武将","init":true},"Scenario":{"name":"剧情战役","intro":"在乱斗模式进行游戏","init":true}},help:{剧情战役:'<li>2018年3月22日更新内容：优化<li>——————————————<li>新增Buff：天择/绝境/八门/死斗/顺劈/破绽/混乱：【长按按钮查看详情介绍】（乱斗/挑战无效）<li>降低关卡难度（old）<li>Insane：目前内含6个武将（待更）<li>标准增强：增强标准武将（挑战/乱斗/国战无效）<li>剧情战役：三国剧情战役，需开启“诸神降临”在乱斗模式进行游戏（路径：扩展→诸神降临），否则会卡死；若已有旧版“剧情战役”扩展，须先删除/关闭该扩展重启游戏，然后删除该关卡，再重新导入此扩展关卡新数据才会生效<li>更新时间：2018-1-12-21:29',},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"<div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5TVOR1Z')><span style=\"color: green;text-decoration: underline;font-style: oblique\">点击这里</span></div><span style=\"font-style: oblique\">加入qq群【無名殺玩家交流群】</span>",
    diskURL:"",
    forumURL:"",
    version:"",
},files:{"character":[],"card":[],"skill":[]},editable:false}})
