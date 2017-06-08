game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"虚空虫翼",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            Abathur:["male","wu",3,["AbathurSkill1","AbathurSkill2","AbathurSkill0","AbathurSkill3"],["des:进化坑死宅"]],
            Fenix:["male","shu",4,["FenixSkill0"],["zhu","des:净化者执行官"]],
            Swan:["male","wei",4,["SwanSkill0","SwanSKill1","SwanSkill2"],["des:首席工程师"]],
            Stukov:["male","qun",4,["StukovSkill0","StukovSkill1","StukovSkill2","StukovSkill3","StukovSkill4","StukovSkill5"],["zhu","des:被感染的中将"]],
            Nova:["female","wei",3,["NovaSkill0"],["des:帝国幽灵特工"]],
        },
        translate:{
            Abathur:"阿巴瑟",
            Fenix:"菲尼克斯",
            Swan:"斯旺",
            Stukov:"斯托科夫",
            Nova:"诺娃",
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
            "AbathurSkill1":{
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                content:function (){
        player.shengwuzhi=player.shengwuzhi+1;
        player.say("当前生物质数量："+player.shengwuzhi);
    },
            },
            "AbathurSkill2":{
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                content:function (){
        if(player.shengwuzhi>=3){
            var list=get.gainableSkills()
            list.remove(target.getSkills())
            skill=list.randomGets(1)
            player.addSkill(skill)
            target.addSkill(skill)
            player.shengwuzhi=player.shengwuzhi-3
        }
    },
            },
            "AbathurSkill0":{
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                content:function (){
        player.shengwuzhi=0
        player.removeSkill("AbathurSkill0")
    },
            },
            "FenixSkill0":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        "step 0"
        player.chooseControl("执政官","龙骑士","仲裁者");
        "step 1"
        if(result.control=="执政官"){
            player.addSkill("Fenix1Skill0");
            player.addSkill("Fenix1Skill2");
            
        }
        else if(result.control=="龙骑士"){
            player.addSkill("Fenix2Skill0");
            player.addSkill("Fenix2Skill2");
        }
        else if(result.control=="仲裁者"){
            player.addSkill("Fenix3Skill0");
            player.addSkill("Fenix3Skill2");
        }
    },
            },
            "Fenix1Skill0":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        player.removeSkill("Fenix1Skill2");
        player.removeSkill("Fenix1Skill0");
    },
            },
            "Fenix1Skill2":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        player.loseHp();
        player.discard();
        player.previous.damage(2);
        player.next.damage(2);
    },
            },
            "Fenix2Skill0":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        player.removeSkill("Fenix2Skill2");
        player.removeSkill("Fenix2Skill0")
    },
            },
            "Fenix2Skill2":{
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                content:function (){
        target.damage(2);
        player.draw();
        player.addSkill("Fenix2Skill2x1");
    },
            },
            "Fenix3Skill0":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        player.removeSkill(Fenix3Skill2);
        player.removeSkill(Fenix3Skill0);
    },
            },
            "Fenix3Skill2":{
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                content:function (){
        target.turnOver();
        target.gainMaxHp();
    },
            },
            "Fenix2Skill2x1":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        player.chooseToDiscard("he",true,2);
        player.removeSkill("Fenix2Skill2x1")
    },
            },
            "AbathurSkill3":{
                enable:"phaseUse",
                content:function (){
        player.say("生物质数量："+player.shengwuzhi)
    },
            },
            "SwanSkill0":{
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                content:function (){
        player.machPowered=1
        player.machTarget=null
        player.removeSkill("SwanSkill0")
    },
            },
            "SwanSKill1":{
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                content:function (){
        if(player.machPowered=0){
            player.machTarget.machNum=0
        }
        player.machTarget=target;
        target.machNum=1
        player.machPowered=1
    },
            },
            "SwanSkill2":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        target=player.machTarget
        if(target.machNum==1){
            target.chooseToDiscard("he",true,1)
            target.machNum++
        }
        else if(target.machNum==2){
            target.damage()
            target.machNum++
        }
        else if(target.machNum==3){
            list=target.getSkills()
            target.removeSkill(list.randomGets(1))
            target.machNum++
        }
        else if(target.machNum==4){
            target.damage(2);
            target.machNum=0
        }
    },
            },
            "StukovSkill0":{
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                content:function (){
        player.laucherTarget=null
        player.infectedHuman=0
        player.infectedMarine=0
        player.removeSkill("StukovSkill0")
    },
            },
            "StukovSkill1":{
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                content:function (){
        player.laucherTarget=target
    },
            },
            "StukovSkill2":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        player.infectedHuman++
    },
            },
            "StukovSkill3":{
                enable:"phaseUse",
                usable:5,
                content:function (){
        if(player.infectedHuman>0){
            player.chooseToDiscard("he",true,1)
            player.infectedHuman=player.infectedHuman-1
            player.infectedMarine=player.infectedMarine+1
        }
        else{
            player.say("缺少被感染的人类，无法训练")
        }
    },
            },
            "StukovSkill4":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        marine=player.infectedMarine
        target=player.laucherTarget
        if(marine!=0&&target!=null){
            target.damage(marine)
            marine=marine-1
        }
    },
            },
            "StukovSkill5":{
                enable:"phaseUse",
                content:function (){
        player.say("被感染的人类："+player.infectedHuman+"\n"+"被感染的陆战队员："+player.infectedMarine)
    },
            },
            "NovaSkill0":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        player.chooseToDiscard("he",true,3);
        player.gain(game.createCard("sha"));
        player.gain(game.createCard("shan"));
        player.gain(game.createCard("tao"));
    },
            },
        },
        translate:{
            "AbathurSkill1":"采集生物质",
            "AbathurSkill1_info":"每当有角色受到伤害时，令你获得一个生物质",
            "AbathurSkill2":"整合基因序列",
            "AbathurSkill2_info":"失去三点生物质，令你与一名角色同时获得一项相同的随机技能",
            "AbathurSkill0":"进化大师",
            "AbathurSkill0_info":"阿巴瑟在进化坑内囤积生物质，可用于进化",
            "FenixSkill0":"装甲初始化 ",
            "FenixSkill0_info":"回合开始时，选择一种装甲：1.净化者执政官（旋风斩，失去一点体力，对两侧目标造成两点伤害） 2.日炎龙骑士（空爆弹，对一名角色造成一点伤害并抽一张牌，回合结束时弃两张牌） 3.赛布罗斯仲裁者（静滞，令一名角色翻面并获得一个随机技能）；",
            "Fenix1Skill0":"净化者执政官",
            "Fenix1Skill0_info":"净化者执政官装甲 已激活",
            "Fenix1Skill2":"旋风斩",
            "Fenix1Skill2_info":"失去一点体力对两侧角色造成两点伤害",
            "Fenix2Skill0":"日炎龙骑士",
            "Fenix2Skill0_info":"日炎龙骑士装甲 已激活",
            "Fenix2Skill2":"空爆弹",
            "Fenix2Skill2_info":"对一名角色造成两点伤害，摸一张牌，回合结束时弃两张牌",
            "Fenix3Skill0":"赛布罗斯仲裁者",
            "Fenix3Skill0_info":"赛布罗斯仲裁者装甲 已激活",
            "Fenix3Skill2":"静滞",
            "Fenix3Skill2_info":"令一名角色翻面并增加一点体力上限",
            "Fenix2Skill2x1":"过热",
            "Fenix2Skill2x1_info":"过热！",
            "AbathurSkill3":"清算成果",
            "AbathurSkill3_info":"显示当前生物质数量",
            "SwanSkill0":"激活激光钻机",
            "SwanSkill0_info":"游戏开始时，你激活你的德拉肯激光钻机",
            "SwanSKill1":"钻机重定向",
            "SwanSKill1_info":"重定向你的钻机",
            "SwanSkill2":"钻机启动！",
            "SwanSkill2_info":"若钻机的目标已被瞄准x回合，则对其执行：x=1时，选择弃一张牌；x=2时，受到一点伤害；x=3时，随机失去一个技能；x=4时，受到两点伤害，钻机不再瞄准当前目标",
            "StukovSkill0":"感染蔓延",
            "StukovSkill0_info":"为斯托科夫的技能进行初始化",
            "StukovSkill1":"部署灵能发射器",
            "StukovSkill1_info":"向目标部署一个灵能发射器，使你的“被感染的陆战队员”可以向其开火",
            "StukovSkill2":"被感染的移民营",
            "StukovSkill2_info":"回合结束时，生成一个被感染的人类",
            "StukovSkill3":"混合训练",
            "StukovSkill3_info":"每回合五次，弃一张牌，将一个被感染的人类训练为被感染的陆战队员",
            "StukovSkill4":"目标...已确定...",
            "StukovSkill4_info":"回合开始时，被感染的陆战队员向灵能发射器的目标开火，一名“被感染的陆战队员”阵亡",
            "StukovSkill5":"人口普查",
            "StukovSkill5_info":"清点你的“被感染的人类”和“被感染的陆战队员”的数量",
            "NovaSkill0":"轨道空投",
            "NovaSkill0_info":"出牌阶段限一次，你可以弃置三张手牌，然后获得三种标准基本牌各一张（杀，闪，桃）",
        },
    },
},files:{"character":["Fenix.jpg","Stukov.jpg","Swan.jpg","Nova.jpg","Abathur.jpg"],"card":[],"skill":[]}}})