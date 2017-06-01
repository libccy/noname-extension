game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"星际战甲",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "圣剑":["male","qun",3,["NL","ZM","BD"],[]],
            "圣装伏特":["male","qun",3,["NL","PZ","CD","LM"],[]],
            "圣装磁力":["female","qun",3,["NL","LC"],[]],
            "狂野犀牛":["male","qun",4,["NL","GG","JT"],[]],
            "冰雪霜寒":["male","qun",3,["NL","BiDu","JD"],[]],
            "洛基":["male","qun",2,["NL","NJ","YE","JX"],["zhu"]],
        },
        translate:{
            "圣剑":"圣剑",
            "圣装伏特":"圣装伏特",
            "圣装磁力":"圣装磁力",
            "狂野犀牛":"狂野犀牛",
            "冰雪霜寒":"冰雪霜寒",
            "洛基":"洛基",
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
            NL:{
                mark:true,
                init:function (player){
        player.storage.NL=35;
        game.addVideo('storage',player,['NL',player.storage.NL]);
    },
                intro:{
                    content:function (storage){
            return '当前能量：'+storage+'/100';
        },
                },
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        if(typeof player.storage.BD=='boolean'&&player.storage.BD==true)
            return false;
        if(player.storage.NL>=100)
            return false;
        return true;
    },
                content:function (){
        player.$damagepop(10,'unknownx');
        player.storage.NL+=10;
        if(player.storage.NL>100)
            player.storage.NL=100;
        game.addVideo('storage',player,['NL',player.storage.NL]);
    },
                group:"NL_NL1",
                subSkill:{
                    "NL1":{
                        trigger:{
                            global:"useCardToBefore",
                        },
                        forced:true,
                        filter:function (event,player){
                if(typeof player.storage.BD=='boolean'&&player.storage.BD==true)
                    return false;
                if(event.target==player&&player.storage.NL<100)
                    return true;
                return false;
            },
                        content:function (){
                player.$damagepop(5,'unknownx');
                player.storage.NL+=5;
                if(player.storage.NL>100)
                    player.storage.NL=100;
                game.addVideo('storage',player,['NL',player.storage.NL]);
            },
                    },
                },
            },
            ZM:{
                init:function (event,player){
        for(var i=0;i<game.players.length;i++)
            game.players[i].storage.ZM = false;
    },
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        for(var i=0;i<game.players.length;i++)
            if(game.players[i]!=player&&game.players[i].storage.ZM==false&&player.storage.NL>=25&&get.distance(player,game.players[i],'attack')<=1)
                return true;
        return false;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseControl('确定','取消').set('prompt','是否发动【致盲】？<br/>出牌阶段，消耗25点能量，致盲你的攻击范围内所有目标，被致盲者造成伤害时有50%的几率丢失目标(即取消即将造成的伤害)，效果持续至被致盲者回合结束阶段。');
        'step 1'
        if(result.control=='确定'){
            var list=[];
            for(var i=0;i<game.players.length;i++){
                if(game.players[i]!=player&&game.players[i].storage.ZM==false&&get.distance(player,game.players[i],'attack')<=1)
                    list.push(game.players[i]);
            }
            player.logSkill('ZM',list);
            for(var i=0;i<list.length;i++){
                list[i].addSkill('ZM2');
            }
            player.$damagepop(-25,'unknownx');
            player.storage.NL-=25;
            game.addVideo('storage',player,['NL',player.storage.NL]);
        }
        else {
            event.finish();
        }
    },
            },
            "ZM2":{
                trigger:{
                    source:"damageBefore",
                },
                forced:true,
                mark:true,
                intro:{
                    content:"50%的概率防止你即将造成的伤害",
                },
                content:function (){
        var list=[1,2];
        var a = list.randomGet();
        switch(a){
            case 2:
                trigger.finish();
                trigger.untrigger();
                break;
            default:
                event.finish();
        }
    },
                group:"ZM2_ZM01",
                subSkill:{
                    "ZM01":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
                player.storage.ZM=false;
                player.removeSkill('ZM2');
            },
                    },
                },
            },
            "BD2":{
                init:function (player){
        player.storage.BD=true;
    },
                mark:true,
                intro:{
                    content:"处于拔刀状态",
                },
                enable:"phaseUse",
                filter:function (event,player){
        return player.hp>0;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget([1,Infinity],'选择一名角色，你失去一点体力，视为对其使用【杀】',function(card,player,target){
            return target!=player&&get.distance(player,target,'attack')<=1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('BD2',result.targets);
            player.loseHp();
            player.useCard({name:'sha'},result.targets,false);
        }
        else {
            event.finish();
        }
    },
                mod:{
                    selectTarget:function (card,player,range){
            if(card.name=='sha')
                range[1]=Infinity;
        },
                },
                group:["BD2_BD01","BD2_BD02"],
                subSkill:{
                    "BD01":{
                        trigger:{
                            player:"shaBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                if(event.target.getEquip(1)==false||event.target.getEquip(2)==false)
                    return true;
                return false;
            },
                        content:function (){
                trigger.directHit=true;
            },
                    },
                    "BD02":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
                player.storage.BD=false;
                player.removeSkill('BD2');
            },
                    },
                },
            },
            "ZM2_bg":{
            },
            BD:{
                unique:true,
                skillAnimation:true,
                animationColor:"thunder",
                init:function (player){
        player.storage.BD1=false;
    },
                intro:{
                    content:"limit",
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(player.storage.BD1)
            return false;
        if(player.storage.NL>=50)
            return true;
        return false;
    },
                content:function (){
        player.$damagepop(-player.storage.NL,'unknownx');
        player.storage.NL=0;
        game.addVideo('storage',player,['NL',player.storage.NL]);
        player.addSkill('BD2');
        player.unmarkSkill('BD');
        player.storage.BD1=true;
        player.awakenSkill('BD');
    },
            },
            PZ:{
                init:function (player){
        player.storage.PZ=false;
    },
                trigger:{
                    player:"phaseDrawAfter",
                },
                filter:function (event,player){
        if(player.storage.PZ)
            return false;
        return player.storage.NL>=25;
    },
                content:function (){
        player.$damagepop(-25,'unknownx');
        player.storage.NL-=25;
        game.addVideo('storage',player,['NL',player.storage.NL]);
        player.storage.PZ=true;
        player.addSkill('PZ2');
        game.createTrigger('phaseDrawAfter','PZ2',player,trigger);
    },
            },
            "PZ2":{
                mark:true,
                intro:{
                    content:"效果一：防止你受到的所有伤害<br/>效果二：跳过你的出牌阶段",
                },
                trigger:{
                    player:"phaseDrawAfter",
                },
                forced:true,
                content:function (){
        player.skip('phaseUse');
    },
                group:["PZ2_PZ01","PZ2_PZ02"],
                subSkill:{
                    "PZ01":{
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        content:function (){
                trigger.finish();
                trigger.untrigger();
            },
                    },
                    "PZ02":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
                if(player.storage.PZ==2){
                    player.storage.PZ=false;
                    player.removeSkill('PZ2');
                }
                else if(player.storage.PZ==true){
                    player.storage.PZ=1;
                    player.storage.PZ++;
                }
                else {
                    event.finish();
                }
            },
                    },
                },
            },
            CD:{
                init:function (player){
        player.storage.use=0;
    },
                forced:true,
                direct:true,
                trigger:{
                    player:["useCard","useCardToRespond"],
                },
                filter:function (event,player){
        return _status.currentPhase==player;
    },
                content:function (){
        player.storage.use++;
    },
                group:["CD_CD01","CD_CD02"],
                subSkill:{
                    "CD01":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        direct:true,
                        content:function (){
                player.storage.use=0;
            },
                    },
                    "CD02":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                return player.storage.NL>=10&&player.storage.use<=0;
            },
                        content:function (){
                'step 0'
                player.$damagepop(-10,'unknownx');
                player.storage.NL-=10;
                game.addVideo('storage',player,['NL',player.storage.NL]);
                player.phaseUse();
                'step 1'
                player.getStat().card={};
            },
                    },
                },
            },
            LM:{
                init:function (player){
        player.storage.LM=false;
    },
                intro:{
                    content:"limit",
                },
                skillAnimation:true,
                animationColor:"thunder",
                mark:true,
                enable:"phaseUse",
                filter:function (event,player){
        if(player.storage.LM)
            return false;
        return player.storage.NL>=50;
    },
                content:function (){
        player.$damagepop(-player.storage.NL,'unknownx');
        player.storage.NL=0;
        game.addVideo('storage',player,['NL',player.storage.NL]);
        var list=[];
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player){
                list.push(game.players[i]);
                game.players[i].addSkill('LM2');
            }
        }
        player.logSkill('LM',list);
        player.addSkill('LM3');
        player.storage.LM=true;
        player.awakenSkill('LM');
    },
            },
            "LM2":{
                init:function (player){
        player.storage.LM2=3;
    },
                mark:true,
                intro:{
                    content:function (storage){
            return '效果：受到的所有伤害+1<br/>剩余回合：'+storage;
        },
                },
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                content:function (){
        trigger.num++;
    },
                group:"LM2_LM01",
                subSkill:{
                    "LM01":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        direct:true,
                        forced:true,
                        content:function (){
                player.storage.LM2--;
                player.syncStorage('LM2');
                if(player.storage.LM2==0){
                    player.removeSkill('LM2');
                }
            },
                    },
                },
            },
            "LM2_bg":{
            },
            "LM3":{
                mod:{
                    cardRespondable:function (card,player){
            if(card.name=='shan')
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].storage.LM2>0)
                        return false;
                }
        },
                },
            },
            LC:{
                skillAnimation:true,
                animationColor:"fire",
                mark:true,
                unique:true,
                init:function (player){
        player.storage.LC=false;
    },
                intro:{
                    content:"limit",
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(player.storage.LC)
            return false;
        return player.storage.NL>=100;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget('选择一名角色对其发动【立场】<br/><font color=#f0f>限定技</font> 出牌阶段，如你有100能量或更高，可消耗所有能量，对一名角色使用“扭曲立场”，持续至你或其阵亡(扭曲立场:所有向释放扭曲立场的角色使用的杀和决斗将转移至被释放扭曲立场的角色进行结算)。',function(card,player,target){
            return target!=player;
        });
        'step 1'
        if(result.bool){
            player.logSkill('LC',result.targets);
            result.targets[0].storage.LC = player;
            player.$damagepop(-player.storage.NL,'unknownx');
            player.storage.NL=0;
            game.addVideo('storage',player,['NL',player.storage.NL]);
            result.targets[0].addSkill('LC2');
            player.storage.LC=true;
            player.awakenSkill('LC');
        }
    },
            },
            "LC2":{
                mark:true,
                trigger:{
                    global:"shaBefore",
                },
                intro:{
                    content:"立场状态",
                },
                forced:true,
                filter:function (event,player){
        return event.target==player.storage.LC;
    },
                content:function (){
        player.line(trigger.target,'green');
        trigger.player.useCard({name:'sha'},player,false);
        trigger.finish();
        trigger.untrigger();
    },
                group:["LC2_LC01","LC2_LC02"],
                subSkill:{
                    "LC01":{
                        trigger:{
                            global:"juedouBefore",
                        },
                        forced:true,
                        filter:function (event,player){
                return event.target==player.storage.LC;
            },
                        content:function (){
                player.line(trigger.target,'green');
                trigger.player.useCard({name:'juedou'},player);
                trigger.finish();
                trigger.untrigger();
            },
                    },
                    "LC02":{
                        trigger:{
                            global:"dieAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                return event.player==player.storage.LC;
            },
                        content:function (){
                player.removeSkill('LC2');
            },
                    },
                },
            },
            GG:{
                init:function (player){
        player.storage.GG=0;
    },
                intro:{
                    content:function (storage){
            return '效果：1点护甲可以抵消你即将受到的1点伤害<br/>当前拥有护甲：'+storage;
        },
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(player.storage.GG>=25)
            return false;
        return player.storage.NL>=25;
    },
                content:function (){
        player.$damagepop(-25,'unknownx');
        player.storage.NL-=25;
        game.addVideo('storage',player,['NL',player.storage.NL]);
        player.$damagepop(2,'unknownx');
        player.storage.GG+=2;
        player.markSkill('GG');
        game.addVideo('storage',player,['GG',player.storage.GG]);        
    },
                group:"GG_GG01",
                subSkill:{
                    "GG01":{
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.storage.GG>0;
            },
                        content:function (){
                var Sh = trigger.num;
                trigger.num = trigger.num>=player.storage.GG? trigger.num-player.storage.GG:0;
                player.$damagepop(trigger.num-Sh,'unknownx');
                player.storage.GG-=(Sh-trigger.num);
                player.syncStorage('GG');
                if(player.storage.GG==0){
                    player.unmarkSkill('GG');
                }
                else {
                    player.markSkill('GG');
                }
            },
                    },
                },
            },
            "GG_bg":{
            },
            JT:{
                unique:true,
                skillAnimation:true,
                animationColor:"fire",
                mark:true,
                init:function (player){
        player.storage.JT=false;
    },
                intro:{
                    content:"limit",
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(player.storage.JT)
            return false;
        return player.storage.NL>=100;
    },
                content:function (){
        player.$damagepop(-player.storage.NL,'unknownx');
        player.storage.NL = 0;
        player.syncStorage('NL');
        player.storage.JT=true;
        player.awakenSkill('JT');
        var list=[];
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player)
                list.push(game.players[i]);
        }
        player.line(list);
        for(var i=0;i<list.length;i++){
            ui.clear();
            var cards = list[i].getCards('he');
            list[i].lose(cards).triggered=null;
            list[i].$throw(cards);
        }
        ui.clear();
        player.skip('phaseDiscard');
    },
                contentAfter:function (){
        var evt = _status.event.getParent('phaseUse');
        evt.skipped=true;
    },
            },
            BiDu:{
                enable:"phaseUse",
                init:function (player){
        for(var i=0;i<game.players.length;i++){
            game.players[i].storage.choose=true;
            game.players[i].storage.BiDu2=0;
        }
        player.storage.Tg = [];
        player.storage.Nm = [];
        player.storage.HJ = 3;
    },
                filter:function (event,player){
        return player.storage.NL>=25;
    },
                direct:true,
                content:function (){
       'step 0'
        if(player.storage.HJ>0){
            player.chooseTarget(function(card,player,target){
                return target.storage.choose;
            }).set('prompt','选择一名角色分配给其护甲');
        }
        else {
            if(player.storage.HJ=3)
                event.finish();
            else 
                event.goto(4);
        }
        'step 1'
        if(result.bool){
            result.targets[0].storage.choose=false;
            player.storage.Tg.push(result.targets);
            switch(player.storage.HJ){
                case 1:
                    player.chooseControl('一点').set('prompt','选择分配给'+get.translation(result.targets[0])+'的护甲点数');
                    break;
                case 2:
                    player.chooseControl('一点','两点').set('prompt','选择分配给'+get.translation(result.targets[0])+'的护甲点数');
                    break;
                case 3:
                    player.chooseControl('一点','两点','三点').set('prompt','选择分配给'+get.translation(result.targets[0])+'的护甲点数');
                    break;
            }
        }
        else {
            if(player.storage.HJ=3)
                event.finish();
            else 
                event.goto(4);
        }
        'step 2'
        switch(result.control){
            case '一点':
                player.storage.HJ -= 1;
                player.storage.Nm.push(1);
                break;
            case '两点':
                player.storage.HJ -= 2;
                player.storage.Nm.push(2);
                break;
            case '三点':
                player.storage.HJ -= 3;
                player.storage.Nm.push(3);
                break;
        }
        if(player.storage.HJ>0){
            player.chooseControl('确定','取消').set('prompt','还可分配'+player.storage.HJ+'点护甲，是否继续分配？');
        }
        else 
            event.goto(4);
        'step 3'
        if(result.control=='确定')
            event.goto(0);
        else 
            event.goto(4);
        'step 4'
        player.storage.NL-=25;
        player.$damagepop(-25,'unknownx');
        player.syncStorage('NL');
        var list = [];
        for(var i=0;i<game.players.length;i++)
            if(!game.players[i].storage.choose)
                list.push(game.players[i]);
        player.logSkill('BiDu',list);
        var bo = false;
        for(var i=0;i<player.storage.Nm.length;i++){
            if(player.storage.Nm[i]>=2){
                bo=true;
                break;
            }
        }
        if(bo){
            var cards = player.getCards('h');
            player.lose(cards)._triggered=null;
            player.$throw(cards);
            player.storage.NL=0;
            player.syncStorage('NL');
            player.storage.BiDu2=0;
            player.syncStorage('BiDu2');
        }
        
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].storage.choose==false){
                var num=0;
                for(var j=0;j<player.storage.Tg.length;j++){
                    if(get.translation(player.storage.Tg[j])==get.translation(game.players[i].name))
                        num = player.storage.Nm[j];
                }
                game.players[i].storage.BiDu2+=num;
                game.players[i].$damage(num,'unknownx');
                game.players[i].syncStorage('BiDu2');
                game.players[i].markSkill('BiDu2');
            }
        }
    },
                contentAfter:function (){
        player.storage.Tg = [];
        player.storage.Nm = [];
        player.storage.HJ = 3;
        for(var i=0;i<game.players.length;i++){
            game.players[i].storage.choose=true;
        }
    },
                group:"BiDu_BiDu01",
                subSkill:{
                    "BiDu01":{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        forced:true,
                        direct:true,
                        content:function (){
                for(var i=0;i<game.players.length;i++)
                    game.players[i].addSkill('BiDu2');
            },
                    },
                },
            },
            "BiDu2":{
                trigger:{
                    player:"damageBefore",
                },
                intro:{
                    content:function (storage){
            return '效果：1点护甲可以抵消你即将受到的1点伤害<br/>当前拥有护甲：'+storage;
        },
                },
                forced:true,
                filter:function (event,player){
        return player.storage.BiDu2>0;
    },
                content:function (){
        var Sh = trigger.num;
        trigger.num = trigger.num>=player.storage.BiDu2? trigger.num-player.storage.BiDu2:0;
        player.$damagepop(trigger.num-Sh,'unknownx');
        player.storage.BiDu2-=(Sh-trigger.num);
        player.syncStorage('BiDu2');
        if(player.storage.BiDu2==0){
            player.unmarkSkill('BiDu2');
        }
        else {
               player.markSkill('BiDu2');
        }
    },
            },
            "BiDu2_bg":{
            },
            JD:{
                unique:true,
                skillAnimation:true,
                animationColor:"thunder",
                mark:true,
                enable:"phaseUse",
                intro:{
                    content:"limit",
                },
                init:function (player){
        player.storage.JD=false;
    },
                filter:function (event,player){
        return true;
        if(player.storage.JD)
            return false;
        return player.storage.NL>=100;
    },
                content:function (){
        player.$damagepop(-player.storage.NL,'unknownx');
        player.storage.NL=0;
        player.syncStorage('NL');
        var list=[];
        for(var i=0;i<game.players.length;i++){
            game.players[i].damage();
            if(game.players[i]!=player){
                game.players[i].addSkill('JD2');
                list.push(game.players[i]);
               }
        }
        player.line(list);
        player.storage.JD=true;
        player.awakenSkill('JD');
    },
            },
            "JD2":{
                init:function (player){
        player.storage.use=0;
    },
                mark:true,
                intro:{
                    content:function (){
            return '摸牌阶段摸牌数目减半，向下取整；出牌阶段出牌数目改为体力值减半，向下取整；弃牌阶段弃牌数＋1，不足则全弃。';
        },
                },
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        player.storage.use=0;
        player.removeSkill('JD2');
    },
                group:["JD2_JD01","JD2_JD02","JD2_JD03"],
                subSkill:{
                    "JD01":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        content:function (){
                trigger.num=trigger.num%2==0? trigger.num/2:(trigger.num-1)/2;
            },
                    },
                    "JD02":{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        filter:function (event,player){
                return _status.currentPhase==player;
            },
                        content:function (){
                player.storage.use--;
                if(player.storage.use<=0){
                    var evt=_status.event.getParent('phaseUse');
                    if(evt&&evt.name=='phaseUse'){
                        evt.skipped=true;
                    }
                    event.finish();
                }
            },
                    },
                    "JD03":{
                        trigger:{
                            player:"phaseDiscardAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.countCards('he')>0;
            },
                        content:function (){
                player.chooseToDiscard(true,1,'he');
            },
                    },
                    "JD04":{
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        forced:true,
                        content:function (){
                player.storage.use=player.hp%2==0? player.hp/2:(player.hp-1)/2;
                if(player.storage.use==0){
                    trigger.finish();
                    terigger.untrigger();
                };
            },
                    },
                },
            },
            "JD2_bg":{
            },
            NJ:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.storage.NL>=25;
    },
                content:function (){
        player.$damagepop(-25,'unknownx');
        player.storage.NL -= 25;
        player.syncStorage('NL');
        player.addSkill('NJ_NJ01');
    },
                subSkill:{
                    "NJ01":{
                        mark:true,
                        intro:{
                            content:"当你成为牌的目标时，若此牌指定的目标数小于当前游戏人数，则取消之。",
                        },
                        forced:true,
                        trigger:{
                            target:"useCardToBefore",
                        },
                        filter:function (event,player){
                return event.targets.length<game.players.length;
            },
                        content:function (){
                trigger.untrigger();
                trigger.finish();
            },
                        group:"NJ_NJ02",
                    },
                    "NJ02":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
                player.removeSkill('NJ_NJ01');
            },
                    },
                },
            },
            YE:{
                init:function (player){
        player.storage.YE = false;
    },
                filter:function (event,player){
        if(player.storage.YE)
            return false;
        return player.storage.NL>=25;
    },
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        player.$damagepop(-25,'unknownx');
        player.storage.NL-=25;
        player.syncStorage('NL');
        player.addSkill('YE_YE01');
    },
                subSkill:{
                    "YE01":{
                        mark:true,
                        intro:{
                            content:"效果一：你使用的基本牌和非延时类锦囊牌结算两次<br/>效果二：当你受到伤害时，你移除诱饵，然后防止此伤害",
                        },
                        init:function (player){
                player.storage.canuse = false;
                player.storage.CardName = 0;
                player.storage.CardTarget = [];
            },
                        trigger:{
                            player:"useCardAfter",
                        },
                        filter:function (event,player){
                if(player.storage.canuse){
                    player.storage.canuse=false;
                    return false;
                }
                if(get.type(event.card)=='basic'&&event.card.name!='shan'){
                    player.storage.CardName = event.card.name;
                    for(var i=0;i<event.targets.length;i++){
                        player.storage.CardTarget.push(event.targets[i]);
                    }
                    return true;
                }
                if(get.type(event.card)=='trick'&&event.card.name!='wuxie'){
                    player.storage.CardName = event.card.name;
                    for(var i=0;i<event.targets.length;i++){
                        player.storage.CardTarget.push(event.targets[i]);
                    }
                    return true;
                }
                return false;
            },
                        forced:true,
                        content:function (){
                player.storage.canuse = true;
                player.useCard({name:player.storage.CardName},player.storage.CardTarget);
                player.storage.CardName = 0;
                player.storage.CardTarget = [];
                game.delay(0.5);
            },
                        group:"YE_YE02",
                    },
                    "YE02":{
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        content:function (){
                player.removeSkill('YE_YE01');
                trigger.untrigger();
                trigger.finish();
            },
                        group:"YE_YE03",
                    },
                    "YE03":{
                        trigger:{
                            source:"damageBefore",
                        },
                        forced:true,
                        direct:true,
                        filter:function (event,player){
                return player.storage.canuse;
            },
                        content:function (){
                trigger.untrigger();
                trigger.finish();
            },
                    },
                },
            },
            JX:{
                unique:true,
                zhuSkill:true,
                skillAnimation:true,
                animationColor:"thunder",
                intro:{
                    content:"未发动",
                },
                init:function (player){
        if(player.hasZhuSkill('JX')){
            player.markSkill('JX');
            player.storage.Can = false;
            player.storage.JX = false;
        }
    },
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        if(player.storage.JX)
            return false;
        if(!player.hasZhuSkill('JX')) 
            return false;
        return player.storage.Can||player.countCards('h')==0;
    },
                content:function (){
        player.storage.JX = true;
        player.$damagepop(-player.storage.NL,'unknoenx');
        player.storage.NL = 0;
        player.syncStorage('NL');
        player.line(game.players);
        for(var i=0;i<game.players.length;i++){
            ui.clear();
            var cards = game.players[i].getCards('he');
            game.players[i].lose(cards)._triggered=null;
            game.players[i].$throw(cards);
            game.players[i].addSkill('JX_JX01');
            game.delay(0.7);
        }
        ui.clear();
        player.awakenSkill('JX');
    },
                group:"JX_JX03",
                subSkill:{
                    "JX01":{
                        mark:true,
                        init:function (player){
                player.storage.JX_JX01 = 2;
            },
                        intro:{
                            content:function (storage){
                    return '当你死亡时，视为对你的上家和下家使用一张【杀】<br/>剩余回合：'+storage;
                },
                        },
                        trigger:{
                            player:"dieBegin",
                        },
                        filter:function (event,player){
                var temp=0;
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i]!=player)
                        temp++;
                }
                return temp>1;
            },
                        forced:true,
                        content:function (){
                var Targets = [];
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i]==player){
                        Targets.push(game.players[i+1>=game.players.length? 0:i+1]);
                        Targets.push(game.players[i-1<0? game.players.length-1:i-1]);
                        break;
                    }
                }
                player.useCard({name:'sha'},Targets);
            },
                        group:"JX_JX02",
                    },
                    "JX02":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
                player.storage.JX_JX01--;
                if(player.storage.JX_JX01==0)
                    player.removeSkill('JX_JX01');
            },
                    },
                    "JX03":{
                        trigger:{
                            global:"dieAfter",
                        },
                        forced:true,
                        direct:true,
                        filter:function (event,player){
                return get.attitude(player,event.player)>=6;
            },
                        content:function (){
                player.storage.Can=true;
            },
                    },
                },
            },
        },
        translate:{
            NL:"能量",
            "NL_info":"每使用一张卡牌，获得10点能量，每被选做卡牌目标，获得5点能量。初始拥有25点能量。能量上限为100点。",
            ZM:"致盲",
            "ZM_info":"出牌阶段，消耗25点能量，致盲你的攻击范围内所有目标，被致盲者造成伤害时有50%的几率丢失目标(即取消即将造成的伤害)，效果持续至被致盲者回合结束阶段。",
            "ZM2":"致盲",
            "ZM2_info":"",
            "BD2":"拔刀",
            "BD2_info":"",
            "ZM2_bg":"盲",
            "ZM2_bg_info":"",
            BD:"拔刀",
            "BD_info":"<font color=#F0F>限定技</font> 出牌阶段，当能量为50点或更高，可消耗所有能量，进入“拔刀”状态，持续至回合结束。(拔刀状态:你可以自掉一点体力视为使用一张杀，你的杀可对攻击范围内任意名角色使用，如果目标没有装备武器牌或防具牌，此杀必中。拔刀状态无法回复能量。)",
            PZ:"屏障",
            "PZ_info":"摸牌阶段后出牌阶段前，可选择消耗25点能量，建立一个防护屏障。该屏障可免疫你受到的所有非体力流失伤害。屏障持续至下一回合结束阶段。拥有屏障时，你跳过出牌阶段。",
            "PZ2":"屏障",
            "PZ2_info":"",
            CD:"持盾",
            "CD_info":"回合结束阶段，如本回合你没有使用或打出卡牌，你可以消耗10点能量，使自己额外进行一个出牌阶段。",
            LM:"雷鸣",
            "LM_info":"<font color=#f0f>限定技</font> 当伏特能量为50点或更高时，可消耗所有能量，令所有其余角色进入“感电”状态，持续3回合。感电状态下，受到的所有伤害数值＋1。如场上有角色处于“感电状态”，伏特将不能打出“闪”。",
            "LM2":"感电",
            "LM2_info":"",
            "LM2_bg":"感",
            "LM2_bg_info":"",
            "LM3":"雷鸣",
            "LM3_info":"",
            LC:"立场",
            "LC_info":"<font color=#f0f>限定技</font> 出牌阶段，如你有100能量或更高，可消耗所有能量，对一名角色使用“扭曲立场”，持续至你或其阵亡(扭曲立场:所有向释放扭曲立场的角色使用的杀和决斗将转移至被释放扭曲立场的角色进行结算)。",
            "LC2":"立场",
            "LC2_info":"",
            GG:"钢骨",
            "GG_info":"出牌阶段，消耗25点能量，为自己增加2点护甲，护甲值大于或等于2时，无法使用。",
            "GG_bg":"甲",
            "GG_bg_info":"",
            JT:"践踏",
            "JT_info":"<font color=#f0f>限定技</font> 当你拥有100点或更高能量时，可消耗所有能量及护甲，效果为除你之外所有角色弃掉所有装备牌及手牌，然后对这些角色造成一点伤害。该技能使用完毕后立即结束你的回合。",
            BiDu:"冰盾",
            "BiDu_info":"出牌阶段，消耗25点能量，创造3点护甲。自行分配至场上所有玩家(若为同一玩家分配2点或以上护甲值，则冰雪霜寒需先弃掉所有手牌，再将能量清零，然后抹除冰雪霜寒的护甲值，最后才能结算分配的护甲值)。",
            "BiDu2":"冰盾",
            "BiDu2_info":"",
            "BiDu2_bg":"盾",
            "BiDu2_bg_info":"",
            JD:"急冻",
            "JD_info":"<font color=#f0f>限定技</font> 当你有100点能量或更高时，消耗所有能量，对所有角色造成一点伤害，且使其余所有角色进入“急冻”状态，持续1回合。(急冻:摸牌阶段摸牌数目减半，向下取整；出牌阶段出牌数目改为体力值减半，向下取整；弃牌阶段弃牌数＋1，不足则全弃。)",
            "JD2":"急冻",
            "JD2_info":"",
            "JD2_bg":"冻",
            "JD2_bg_info":"",
            NJ:"匿迹",
            "NJ_info":"出牌阶段，消耗25点能量，进入“匿迹”状态，持续至下回合回合开始阶段。",
            YE:"诱饵",
            "YE_info":"出牌阶段前限1次，消耗25点能量，创造一个1体力的欺诈诱饵，诱饵存在时，你的所有卡牌将结算两次，但第二次结算时不会造成伤害。当你受到伤害时，诱饵会替你承担伤害(体力流失除外)。",
            JX:"缴械",
            "JX_info":"<font color=#fc0>主公技</font> <font color=#f0f>限定技</font> 回合开始阶段，当忠臣阵亡数为1或更多，或洛基无手牌时，消耗所有能量，令场上所有角色包括洛基本身，弃掉所有装备牌及手牌，并进入辐射状态，持续2回合。(辐射状态:该角色即将阵亡时，该角色上家和下家将受到一张无伤害来源的杀。",
        },
    },
},files:{"character":["圣装磁力.jpg","圣装伏特.jpg","狂野犀牛.jpg","洛基.jpg","冰雪霜寒.jpg","圣剑.jpg"],"card":[],"skill":[]}}})