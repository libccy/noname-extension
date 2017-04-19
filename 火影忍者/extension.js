game.import("extension",{name:"火影忍者",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "宇智波鼬":["male","qun",3,["月读","天照","须佐能乎"],["forbidai","des:木叶背后的守护忍者，为了保护村子和弟弟不惜背负恶名，牺牲了自己。"]],
            "波风水门":["male","qun",4,["螺旋丸","飞雷神"],["forbidai","des:四代目火影，速度冠绝忍界，被誉为“黄色闪光”"]],
            "旗木卡卡西":["male","qun",3,["雷切","神威","亲热天堂"],["forbidai","des:因使用写轮眼复制了上千种忍术而被称为“拷贝忍者”"]],
            "宇智波佐助":["male","qun",3,["千鸟","天照","轮回眼","须佐能乎"],["des:火之国木叶隐村宇智波一族的天才忍者，六道仙人长子因陀罗的转世"]],
            "六道鸣人":["male","qun",3,["螺旋手里剑","地爆天星（六道）","影分身","求道玉"],["forbidai","des:六道仙人模式"]],
            "春野樱":["female","qun",3,["樱花冲","百印","医疗术"],["forbidai","des:春野樱"]],
            "千手纲手":["female","qun",3,["百印","蛞蝓","skill"],["forbidai","des:火之国木叶隐村的第五代火影"]],
            "日向雏田":["female","qun",3,["白眼","八卦六十四掌"],["forbidai","des:日向雏田"]],
            "自来也":["male","qun",4,["螺旋丸（超大玉）","蛤蟆油弹"],["forbidai","des:火之国木叶隐村的“三忍”之一，好色仙人"]],
            "我爱罗":["male","qun",3,["砂缚柩","砂瀑送葬"],["forbidai","des:风之国·砂隐村的第五代风影"]],
        },
        translate:{
            "宇智波鼬":"宇智波鼬",
            "波风水门":"波风水门",
            "旗木卡卡西":"旗木卡卡西",
            "宇智波佐助":"宇智波佐助",
            "六道鸣人":"六道鸣人",
            "春野樱":"春野樱",
            "千手纲手":"千手纲手",
            "日向雏田":"日向雏田",
            "自来也":"自来也",
            "我爱罗":"我爱罗",
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
            "天照":{
                unique:true,
                mod:{
                    selectTarget:function (card,player,range){
if(range[1]==-1) return;
if(card.name=='sha') 
range[1]=2;
},
                },
                prompt:"发动天照，杀可额外选取一个目标",
            },
            "轮回眼":{
                audio:"ext:火影忍者:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
        player.draw(2);
    },
            },
            "月读":{
                audio:"yuedu1",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){
            target.turnOver();
        }
    },
            },
            "螺旋丸":{
                audio:"ext:火影忍者:2",
                trigger:{
                    player:"shaMiss",
                },
                priority:-1,
                filter:function (event){
        return event.target.countCards('he')>0;
    },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                content:function (){
        player.discardPlayerCard('he',trigger.target,true);
    },
            },
            "飞雷神":{
                audio:"feileishen",
                enable:"phaseUse",
                usable:2,
                filterCard:function (card){
        return get.type(card)=='equip';
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return true;
    },
                content:function (){
        target.damage();
    },
                check:function (card){
        return 9-get.value(card);
    },
                position:"he",
                threaten:1.3,
                prompt:"将一张装备牌视作飞雷神手里剑",
            },
            "须佐能乎":{
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function (event,player){
(event.card.name=='sha'&&get.color(event.card)=='black')
    },
                content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
            },
            "雷切":{
                audio:"leiqie",
                enable:["chooseToUse"],
                filterCard:function (card){
return get.color(card)=='red';
},
                viewAs:{
                    name:"juedou",
                    suit:"diamond",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"uncheck":[]},"suit":"diamond","number":6,"name":"shan","cardid":"890916978","_transform":"translateX(0px)","_mouseentercreated":false,"clone":{"name":"shan","suit":"diamond","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1922},"timeout":1867,"original":"h"}],
                },
                prompt:"将一张红牌视作决斗打出",
                ai:{
                    basic:{
                        order:5,
                        useful:1,
                        value:4.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "神威":{
                audio:"shenwei",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&get.color(event.card)=='black'&&event.notLink();
    },
                forced:true,
                content:function (){
        trigger.num++;
    },
            },
            "亲热天堂":{
                audio:"qinretiantang",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
        return (get.cardCount({name:'juedou'},player)==0);
    },
                content:function (){
        trigger.untrigger();
        trigger.finish();
    },
            },
            "螺旋手里剑":{
                audio:"luoxuanshouli1",
                enable:["chooseToUse"],
                usable:1,
                filterCard:{
                    name:"shan",
                },
                viewAs:{
                    name:"wanjian",
                },
                prompt:"将一张【闪】视作【万箭齐发】打出",
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "影分身":{
                audio:"duochongyinfen",
                inherit:"bagua_skill",
                filter:function (event,player){
        if(!lib.skill.bagua_skill.filter(event,player)) return false;
        if(player.getEquip(2)) return false;
        return true;
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player==target&&get.subtype(card)=='equip2'){
                    if(get.equipValue(card)<=7.5) return 0;
                }
                if(target.getEquip(2)) return;
                return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
            },
                    },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                check:function (event,player){
        if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                content:function (){
        "step 0"
        player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:{name:'shan'}}
        }
    },
            },
            "千鸟":{
                audio:"qianniao1",
                enable:["chooseToUse"],
                filterCard:function (card){
return get.color(card)=='black';
},
                viewAs:{
                    name:"juedou",
                    suit:"spade",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"uncheck":[]},"suit":"spade","number":3,"name":"du","cardid":"2907287239","clone":{"name":"du","suit":"spade","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1837},"timeout":1789,"original":"h"}],
                },
                prompt:"将一张黑牌视作决斗打出",
                ai:{
                    basic:{
                        order:5,
                        useful:1,
                        value:4.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "求道玉":{
                mod:{
                    targetEnabled:function (card){
            if((get.type(card)=='trick'||get.type(card)=='delay')) return false;
        },
                },
            },
            "地爆天星（六道）":{
                audio:"dibaotianxing1",
                enable:["chooseToUse"],
                usable:1,
                filterCard:{
                    name:"tao",
                },
                viewAs:{
                    name:"nanman",
                    suit:"heart",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"uncheck":[]},"suit":"heart","number":3,"name":"tao","cardid":"1928530215","_transform":"translateX(560px)","_mouseentercreated":false,"clone":{"name":"tao","suit":"heart","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":684},"timeout":495,"original":"h"}],
                },
                prompt:"将一张【桃】视作【南蛮入侵】打出",
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "樱花冲":{
                audio:"yinghuachong",
                enable:["chooseToUse"],
                usable:1,
                filterCard:{
                    name:"shan",
                },
                viewAs:{
                    name:"sha",
                    suit:"diamond",
                    number:11,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"uncheck":[]},"suit":"diamond","number":11,"name":"shan","cardid":"7541509247","_transform":"translateX(0px)","_mouseentercreated":false,"clone":{"name":"shan","suit":"diamond","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":432},"timeout":408,"original":"h"}],
                },
                prompt:"将一张【闪】视作【杀】打出",
                ai:{
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "医疗术":{
                audio:"yiliaorenshu1",
                enable:["chooseToUse"],
                usable:1,
                filterCard:{
                    color:"red",
                },
                filterTarget:function (card,player,target){
        if(target.hp>=target.maxHp) return false;
        return true;
    },
                prompt:"用红色手牌为目标回复1点体力",
                content:function (){
        target.recover();
    },
            },
            "蛞蝓":{
                audio:"kuoyu",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                selectCard:1,
                check:function (card){
        var player=get.owner(card);
        if(player.countCards('h')>player.hp)
            return 8-get.value(card)
        if(player.hp<player.maxHp)
            return 6-get.value(card)
        return 4-get.value(card)

    },
                filterTarget:function (card,player,target){
        if(target==player) return false;
        return true;
    },
                content:function (){
        player.recover();
        target.recover();
    },
                ai:{
                    order:5.5,
                    result:{
                        player:function (player){
                if(player.hp<player.maxHp) return 4;
                if(player.countCards('h')>player.hp) return 0
                return -1;
            },
                        target:4,
                    },
                    threaten:2,
                },
            },
            "百印":{
                audio:"baihaozhiyin1",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
    },
                forced:true,
                content:function (){
        trigger.num++;
    },
            },
            skill:{
                audio:"baihaozhishu1",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationStr:"百术",
                animationColor:"fire",
                init:function (player){
        player.storage.niepan=false;
    },
                filter:function (event,player){
        if(player.storage.niepan) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        else if(event.parent.name=='phaseUse'){
            return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        player.hp=Math.min(3,player.maxHp);
        player.discard(player.getCards('hej'));
        player.draw(3);
        player.storage.niepan=true;
        'step 1'
        player.link(false);
        'step 2'
        player.turnOver(false);
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.storage.niepan) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                if(player.hp==0) return 10;
                if(player.hp<=2&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.niepan) return 0.6;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            "白眼":{
                audio:"baiyan1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                content:function (){
        "step 0"
        if(!player.storage.zhibi){
            player.storage.zhibi=[];
        }
        player.storage.zhibi.add(target);
        var controls=[];
        if(target.countCards('h')) controls.push('手牌');
        if(controls.length>1){
            player.chooseControl(controls);
        }
        if(controls.length==0) event.finish();
        "step 1"
        var content;
        var str=get.translation(target)+'的';
        if(result.control){
            if(result.control=='手牌'){
                content=[str+'手牌',target.getCards('h')];
                game.log(player,'观看了',target,'的手牌');
            }
        }
        else if(target.countCards('h')){
            content=[str+'手牌',target.getCards('h')];
            game.log(player,'观看了',target,'的手牌');
        }
        player.chooseControl('ok').set('dialog',content);
    },
                selectTarget:1,
            },
            "八卦六十四掌":{
                audio:"baguialiushi1",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original&&event.cards[i].original!='j') return true;
        }
        return false;
    },
                content:function (){
        player.draw();
    },
            },
            "螺旋丸（超大玉）":{
                audio:"dayuluoxuanwan1",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.zhu(_status.event.player,'shouyue')){
                if(get.suit(card)!='spade') return 2;
            }
            else{
                if(get.color(card)=='red') return 2;
            }
            return -0.5;
        });
        "step 1"
        if(result.bool){
            trigger.directHit=true;
        }
    },
            },
            "蛤蟆油弹":{
                audio:"hamayoudan",
                enable:"phaseUse",
                usable:1,
                filterCard:{
                    name:"shan",
                },
                viewAs:{
                    name:"jiu",
                },
                prompt:"将一张【闪】视作【酒】打出",
                ai:{
                    basic:{
                        useful:function (card,i){
                            if(_status.event.player.hp>1){
                                if(i==0) return 5;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                        value:function (card,player,i){
                            if(player.hp>1){
                                if(i==0) return 5;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                    },
                    order:function (){
                        return get.order({name:'sha'})+0.2;
                    },
                    result:{
                        target:function (player,target){
                            if(target&&target.isDying()) return 2;
                            if(lib.config.mode=='stone'&&!player.isMin()){
                                if(player.getActCount()+1>=player.actcount) return 0;
                            }
                            var shas=player.getCards('h','sha');
                            if(shas.length>1&&player.getCardUsable('sha')>1){
                                return 0;
                            }
                            var card;
                            if(shas.length){
                                for(var i=0;i<shas.length;i++){
                                    if(lib.filter.filterCard(shas[i],target)){
                                        card=shas[i];break;
                                    }
                                }
                            }
                            else if(player.hasSha()&&player.needsToDiscard()){
                                if(player.countCards('h','hufu')!=1){
                                    card={name:'sha'};
                                }
                            }
                            if(card){
                                if(game.hasPlayer(function(current){
                                    return (get.attitude(target,current)<0&&
                                        target.canUse(card,current,true,true)&&
                                        !current.getEquip('baiyin')&&
                                        get.effect(current,card,target)>0);
                                })){
                                    return 1;
                                }
                            }
                            return 0;
                        },
                    },
                    tag:{
                        save:1,
                    },
                },
            },
            "砂缚柩":{
                audio:"shafujiu",
                usable:1,
                enable:["chooseToUse"],
                filterCard:function (card){
return get.color(card)=='black';
},
                viewAs:{
                    name:"guohe",
                    suit:"spade",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"uncheck":[]},"suit":"spade","number":3,"name":"jiu","cardid":"9536933293","_transform":"translateX(112px)","_mouseentercreated":false,"clone":{"name":"jiu","suit":"spade","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3881},"timeout":3853,"original":"h"}],
                },
                prompt:"将一张黑色手牌视作【过河拆桥】打出",
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                            var es=target.getCards('e');
                            var nh=target.countCards('h');
                            var noe=(es.length==0||target.hasSkillTag('noe'));
                            var noe2=(es.length==1&&es[0].name=='baiyin'&&target.hp<target.maxHp);
                            var noh=(nh==0||target.hasSkillTag('noh'));
                            if(noh&&noe) return 0;
                            if(noh&&noe2) return 0.01;
                            if(get.attitude(player,target)<=0) return (target.countCards('he'))?-1.5:1.5;
                            var js=target.getCards('j');
                            if(js.length){
                                var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                                if(jj.name=='guohe') return 3;
                                if(js.length==1&&get.effect(target,jj,target,player)>=0){
                                    return -1.5;
                                }
                                return 2;
                            }
                            return -1.5;
                        },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            "砂瀑送葬":{
                audio:"shabaosongzang",
                enable:["chooseToUse"],
                usable:1,
                selectCard:2,
                filterCard:{
                    name:"sha",
                },
                viewAs:{
                    name:"nanman",
                },
                prompt:"将两张【杀】视作【南蛮入侵】打出",
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "守鹤":{
                mod:{
                    targetEnabled:function (card){
            if((card.nature)&&
                get.name(card)=='sha') return false;
        },
                },
            },
        },
        translate:{
            "天照":"天照",
            "天照_info":"杀可以额外选一个目标。",
            "轮回眼":"轮回眼",
            "轮回眼_info":"轮回眼，回合结束摸2张卡",
            "月读":"月读",
            "月读_info":"月读：选择一名角色拼点获胜，使该角色翻面.",
            "螺旋丸":"螺旋丸",
            "螺旋丸_info":"发动螺旋丸【杀】被【闪】抵消时，可以弃掉对方的一张牌。",
            "飞雷神":"飞雷神",
            "飞雷神_info":"用任意一张装备牌，发动飞雷神手里剑，目标移除一点生命，每轮只能发动2次。",
            "须佐能乎":"须佐能乎",
            "须佐能乎_info":"须佐能乎，黑杀对你无效，手牌上限+1",
            "雷切":"雷切",
            "雷切_info":"斩断闪电的雷切，你的红色手牌视作决斗。",
            "神威":"神威",
            "神威_info":"移植自带土的万花筒写轮眼，你的黑色杀造成的伤害+1",
            "亲热天堂":"亲热天堂",
            "亲热天堂_info":"阅读自来也老师的《亲热天堂》系列书籍，如果此回合没有出过决斗，则跳过弃牌阶段。",
            "螺旋手里剑":"螺旋手里剑",
            "螺旋手里剑_info":"风遁螺旋手里剑，将一张【闪】视作【万箭齐发】打出。",
            "影分身":"影分身",
            "影分身_info":"多重影分身之术，当没装备防具时，视为装备着八卦阵。",
            "千鸟":"千鸟",
            "千鸟_info":"黑色卡牌视作决斗。",
            "求道玉":"求道玉",
            "求道玉_info":"六道之求道玉,无视一切以你为目标的锦囊牌。",
            "地爆天星（六道）":"地爆天星（六道）",
            "地爆天星（六道）_info":"六道·地爆天星，将一张【桃】视作【南蛮入侵】打出。",
            "樱花冲":"樱花冲",
            "樱花冲_info":"纲手开发怪力体术，出牌阶段可将【闪】视作【杀】打出。",
            "医疗术":"医疗术",
            "医疗术_info":"医疗忍术·再生，出牌阶段可用红色手牌为目标回复1点体力，每回合限用一次。",
            "蛞蝓":"蛞蝓",
            "蛞蝓_info":"蛞蝓治疗，出牌阶段可以弃一张手牌并选择任意目标：你和目标角色各回复1点体力。每回合限用一次。",
            "百印":"百印",
            "百印_info":"百豪之印凝聚查克拉，使红色【杀】造成的伤害+1。",
            skill:"百术",
            "skill_info":"百豪之术·再生，出牌阶段或濒死状态，丢弃所有的牌，然后摸三张牌且体力回复至3点。【限定技】",
            "白眼":"白眼",
            "白眼_info":"日向一族的血继限界，出牌阶段可以观看一名玩家手牌，每回合限一次。",
            "八卦六十四掌":"八卦六十四掌",
            "八卦六十四掌_info":"八卦六十四掌，你的回合外，每当你失去一张牌时，立即摸一张牌。",
            "螺旋丸（超大玉）":"螺旋丸（超大玉）",
            "螺旋丸（超大玉）_info":"超大玉螺旋丸,当你使用一张【杀】时，可进行一次判定，若为红色则此【杀】不可闪避。",
            "蛤蟆油弹":"蛤蟆油弹",
            "蛤蟆油弹_info":"蛤蟆油弹：出牌阶段，将一张【闪】视作【酒】打出，每回合限使用一次。",
            "砂缚柩":"砂缚柩",
            "砂缚柩_info":"将一张黑色手牌视作【过河拆桥】，每回合限使用一次。",
            "砂瀑送葬":"砂瀑送葬",
            "砂瀑送葬_info":"：将两张【杀】视作【南蛮入侵】打出，每回合限使用一次。",
            "守鹤":"守鹤",
            "守鹤_info":"砂之守鹤，普通杀对你无效。",
        },
    },
},files:{"character":["旗木卡卡西.jpg","宇智波鼬.jpg","六道鸣人.jpg","我爱罗.jpg","千手纲手.jpg","宇智波佐助.jpg","春野樱.jpg","日向雏田.jpg","自来也.jpg","波风水门.jpg"],"card":[],"skill":[]}})