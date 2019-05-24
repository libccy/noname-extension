game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"逐鹿中原",content:function (config,pack){
    lib.translate.gifts_tag='赠';
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
            "xinfu_nvzhuang":{
                type:"equip",
                subtype:"equip2",
                ai:{
                    basic:{
                        equipValue:1,
                        order:8,
                        useful:2,
                        value:1,
                    },
                    result:{
                        player:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(2);
                if(att>0) return 0;
                if(target.sex!='male') return 0;
                if(eq) num+=get.value(eq);
                return num+1;
            },
                        target:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(2);
                if(att>0) return 0;
                if(target.sex!='male') return 0;
                if(eq) num-=get.value(eq);
                return num-1;
            },
                    },
                },
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                filterLose:function (card,player){
        return player.sex=='male';
    },
                onLose:function (){
        player.chooseToDiscard('he',true);
    },
                onEquip:function (){
        if(player.sex=='male'){
            player.chooseToDiscard('he',true,function(card){
                return card!=player.getEquip(2);
            });
        }
    },
                content:function (){
        'step 0'
        game.log(player,'将',card,'赠给了',target);
        target.equip(card);
    },
                fullskin:true,
                modTarget:false,
                allowMultiple:false,
                toself:false,
            },
            "xinfu_zheji":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:1,
                },
                ai:{
                    basic:{
                        equipValue:1,
                        order:8,
                        useful:2,
                        value:1,
                    },
                    result:{
                        player:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(1);
                if(att>0) return 0;
                if(eq) num+=get.value(eq);
                return num+1;
            },
                        target:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(1);
                if(att>0) return 0;
                if(eq) num-=get.value(eq);
                return num-1;
            },
                    },
                },
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        game.log(player,'将',card,'赠给了',target);
        target.equip(card);
    },
                fullskin:true,
                modTarget:false,
                allowMultiple:false,
                toself:false,
            },
            "xinfu_wufengjian":{
                skills:["wufengjian_skill"],
                type:"equip",
                subtype:"equip1",
                ai:{
                    basic:{
                        equipValue:1,
                        order:8,
                        useful:2,
                        value:1,
                    },
                    result:{
                        player:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(1);
                if(att>0) return 0;
                if(eq) num+=get.value(eq);
                return num;
            },
                        target:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(1);
                if(att>0) return 0;
                if(eq) num-=get.value(eq);
                return num;
            },
                    },
                },
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        game.log(player,'将',card,'赠给了',target);
        target.equip(card);
    },
                modTarget:false,
                allowMultiple:false,
                toself:false,
                fullskin:true,
            },
            "xinfu_numa":{
                type:"equip",
                subtype:"equip4",
                distance:{
                    globalFrom:-1,
                },
                ai:{
                    basic:{
                        equipValue:1,
                        order:8,
                        useful:2,
                        value:1,
                    },
                    result:{
                        player:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.countCards('e',function(card){
                    return get.subtype(card)!='equip4';
                });
                if(att>0) return 0;
                return eq;
            },
                        target:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.countCards('e',function(card){
                    return get.subtype(card)!='equip4';
                });
                if(att>0) return 0;
                return -eq;
            },
                    },
                },
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                onEquip:function (){
        player.discard(player.getCards('e',function(cardx){
            return cardx!=player.getEquip(4);
        }));
    },
                content:function (){
        'step 0'
        game.log(player,'将',card,'赠给了',target);
        target.equip(card);
    },
                modTarget:false,
                allowMultiple:false,
                toself:false,
                fullskin:true,
            },
            "xinfu_yinfengjia":{
                type:"equip",
                subtype:"equip2",
                skills:["yinfengjia_skill"],
                ai:{
                    basic:{
                        equipValue:1,
                        order:8,
                        useful:2,
                        value:1,
                    },
                    result:{
                        player:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(2);
                if(att>0) return 0;
                if(eq) num+=get.value(eq);
                return num+1;
            },
                        target:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.getEquip(2);
                if(att>0) return 0;
                if(eq) num-=get.value(eq);
                return num-1;
            },
                    },
                },
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        game.log(player,'将',card,'赠给了',target);
        target.equip(card);
    },
                modTarget:false,
                allowMultiple:false,
                toself:false,
                fullskin:true,
            },
            "xinfu_yexingyi":{
                type:"equip",
                subtype:"equip2",
                ai:{
                    basic:{
                        equipValue:7.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["yexingyi_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                fullskin:true,
            },
            "xinfu_caochuanjiejian":{
                type:"trick",
                notarget:true,
                global:["caochuan_skill","caochuan_skill2"],
                content:function (){
        var evt=event.getParent(3)._trigger;
        if(evt.caochuan){
            evt.cancel();
        }
        evt.getParent('useCard').caochuan_gainer=player;
    },
                ai:{
                    useful:6,
                    result:{
                        player:1,
                    },
                    value:5,
                },
                fullskin:true,
            },
            "xinfu_xiejiaguitian":{
                type:"trick",
                filterTarget:function (card,player,target){
        return target.countCards('e')>0;
    },
                enable:true,
                content:function (){
        target.gain(target.getCards('e'),'gain2');
    },
                ai:{
                    order:7,
                    value:4,
                    useful:2,
                    result:{
                        target:function (player,target){
                return 0;
            },
                    },
                },
                selectTarget:1,
                fullskin:true,
            },
            "xinfu_shushangkaihua":{
                audio:true,
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        return player==target;
    },
                selectTarget:-1,
                content:function (){
        'step 0'
        target.chooseToDiscard([1,2],'he',true).ai=get.disvalue;
        'step 1'
        if(result.bool&&result.cards.length){
            var num=result.cards.length;
            var bool=false;
            for(var i=0;i<result.cards.length;i++){
                if(get.type(result.cards[i])=='equip') bool=true;
            }
            if(bool) num++;
            player.draw(num);
        }
    },
                ai:{
                    wuxie:function (){
            return 0;
        },
                    basic:{
                        useful:3,
                        value:3,
                        order:5,
                    },
                    result:{
                        target:function (player,target){
                var hs=target.getCards('h');
                if(hs.length<=1){
                    if(target==player&&hs[0].name=='xinfu_shushangkaihua'){
                        return 0;
                    }
                    return 0.3;
                }
                return Math.sqrt(target.countCards('he'));
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                        norepeat:1,
                    },
                },
                fullskin:true,
            },
            "xinfu_zhuluzhongyuan":{
                audio:true,
                type:"trick",
                enable:true,
                cardcolor:"red",
                selectTarget:-1,
                filterTarget:true,
                contentBefore:function (){
        "step 0"
        game.delay();
        event.toequip=[];
        if(event.getParent().stocktargets){
            event.num=event.getParent().stocktargets.length;
        }
        else{
            event.num=game.countPlayer();
        }
        "step 1"
        var equip=get.cardPile(function(card){
            return (get.type(card)=='equip'&&!event.toequip.contains(card));
        });
        if(equip){
            event.toequip.push(equip);
            event.num--;
        }
        else event.num=0;
        "step 2"
        if(event.num>0) event.goto(1);
        "step 3"
        ui.clear();
        var cards=event.toequip;
        var dialog=ui.create.dialog('逐鹿天下',cards,true);
        _status.dieClose.push(dialog);
        dialog.videoId=lib.status.videoId++;
        game.addVideo('cardDialog',null,['逐鹿天下',get.cardsInfo(cards),dialog.videoId]);
        event.getParent().preResult=dialog.videoId;
        game.broadcast(function(cards,id){
            var dialog=ui.create.dialog('逐鹿天下',cards,true);
            _status.dieClose.push(dialog);
            dialog.videoId=id;
        },cards,dialog.videoId);
        game.log(event.card,'亮出了',cards);
    },
                content:function (){
        "step 0"
        for(var i=0;i<ui.dialogs.length;i++){
            if(ui.dialogs[i].videoId==event.preResult){
                event.dialog=ui.dialogs[i];break;
            }
        }
        if(!event.dialog){
            event.finish();
            return;
        }
        if(event.dialog.buttons.length>1){
            var next=target.chooseButton(true,function(button){
                return get.value(button.link,_status.event.player);
            });
            next.set('dialog',event.preResult);
            next.set('closeDialog',false);
            next.set('dialogdisplay',true);
        }
        else if(event.dialog.buttons.length==1){
            event.directButton=event.dialog.buttons[0];
        }
        else event.finish();
        "step 1"
        var dialog=event.dialog;
        var card;
        if(event.directButton){
            card=event.directButton.link;
        }
        else{
            card=result.links[0];
        }

        var button;
        for(var i=0;i<dialog.buttons.length;i++){
            if(dialog.buttons[i].link==card){
                button=dialog.buttons[i];
                button.querySelector('.info').innerHTML=get.translation(target.name);
                dialog.buttons.remove(button);
                break;
            }
        }
        var capt=get.translation(target)+'选择了'+get.translation(button.link);
        if(card){
            target.$gain2(card);
            target.equip(card);
            game.broadcast(function(card,id,name,capt){
                var dialog=get.idDialog(id);
                if(dialog){
                    dialog.content.firstChild.innerHTML=capt;
                    for(var i=0;i<dialog.buttons.length;i++){
                        if(dialog.buttons[i].link==card){
                            dialog.buttons[i].querySelector('.info').innerHTML=name;
                            dialog.buttons.splice(i--,1);
                            break;
                        }
                    }
                }
            },card,dialog.videoId,get.translation(target.name),capt);
        }
        dialog.content.firstChild.innerHTML=capt;
        game.addVideo('dialogCapt',null,[dialog.videoId,dialog.content.firstChild.innerHTML]);
        game.delay();
    },
                contentAfter:function (){
        for(var i=0;i<ui.dialogs.length;i++){
            if(ui.dialogs[i].videoId==event.preResult){
                var dialog=ui.dialogs[i];
                dialog.close();
                _status.dieClose.remove(dialog);
                if(dialog.buttons.length){
                    event.remained=[];
                    for(var i=0;i<dialog.buttons.length;i++){
                        event.remained.push(dialog.buttons[i].link);
                        dialog.buttons[i].link.discard();
                    }
                    event.trigger('zlzyRemained');
                }
                break;
            }
        }
        game.broadcast(function(id){
            var dialog=get.idDialog(id);
            if(dialog){
                dialog.close();
                _status.dieClose.remove(dialog);
            }
        },event.preResult);
        game.addVideo('cardDialog',null,event.preResult);
    },
                ai:{
                    wuxie:function (){
            if(Math.random()<0.5) return 0;
        },
                    basic:{
                        order:3,
                        useful:1,
                    },
                    result:{
                        target:function (player,target){
                if(get.is.versus()){
                    if(target==player) return 1.5;
                    return 1;
                }
                if(player.hasUnknown(2)){
                    return 0;
                }
                return 2-2*get.distance(player,target,'absolute')/game.countPlayer();
            },
                    },
                    tag:{
                        draw:1,
                        multitarget:1,
                    },
                },
                fullskin:true,
            },
            "xinfu_yajiaoqiang":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                ai:{
                    equipValue:function (card,player){
            var num=2.5+player.countCards('h')/3;
            return Math.min(num,4);
        },
                    basic:{
                        equipValue:3.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["yajiaoqiang_skill1"],
                global:["yajiaoqiang_skill2"],
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "xinfu_jinhe":{
                type:"equip",
                subtype:"equip5",
                skills:["jinhe_skill"],
                ai:{
                    equipValue:1,
                    basic:{
                        order:8,
                        useful:2,
                        equipValue:1,
                        value:1,
                    },
                    result:{
                        player:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.countCards('h');
                if(att>0) return 0;
                return eq;
            },
                        target:function (player,target){
                var num=0;
                var att=get.attitude(player,target);
                var eq=target.countCards('h');
                if(att>0) return 0;
                return -eq;
            },
                    },
                },
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                filterLose:function (card,player){
        return true;
    },
                onLose:function (){
                'step 0'
        var func=function(){
            return true;
        };
        if(player.hasSkill('jinhe_skill_1')&&player.storage.jinhe_skill!=undefined){
            func=function(cardx){
              return  get.suit(cardx)==get.suit(player.storage.jinhe_skill[0]);
            }
        }
        var todis=player.getCards('h',func);
        if(todis.length) player.discard(todis);
        'step 1'
        player.storage.jinhe_skill[0].discard();
        player.$throw(player.storage.jinhe_skill[0]);
        delete player.storage.jinhe_skill;
        player.unmarkSkill('jinhe_skill');
    },
                content:function (){
        "step 0"
        game.log(player,'将',card,'赠给了',target);
        target.equip(card);
        "step 1"
        event.cards=get.cards(2);
        player.chooseCardButton(event.cards,'将一张牌置于锦盒中',true);
        "step 2"
        event.cards.remove(result.links[0]);
        target.storage.jinhe_skill=[result.links[0]];
        target.markSkill('jinhe_skill');
        player.$give(1,target);
        player.$throw(event.cards[0]);
        event.cards[0].discard();
        game.log(player,'将',result.links[0],'放在了',card,'下，丢弃了',event.cards[0]);
    },
                modTarget:false,
                allowMultiple:false,
                toself:false,
                fullskin:true,
            },
        },
        translate:{
            "xinfu_nvzhuang":"女装",
            "xinfu_nvzhuang_info":"锁定技。当【女装】进入或离开你的装备区时，你弃置一张不为【女装】的牌。",
            "xinfu_zheji":"折戟",
            "xinfu_zheji_info":"这是一把坏掉的武器...",
            "xinfu_wufengjian":"无锋剑",
            "xinfu_wufengjian_info":"锁定技，当你使用【杀】时，你弃置一张牌。",
            "xinfu_numa":"驽马",
            "xinfu_numa_info":"锁定技，你的进攻距离+1。当【驽马】进入你的装备区时，你弃置装备区内的所有其他牌。",
            "xinfu_yinfengjia":"引蜂甲",
            "xinfu_yinfengjia_info":"锁定技，当你受到锦囊牌造成的伤害时，此伤害+1。",
            "xinfu_yexingyi":"夜行衣",
            "xinfu_yexingyi_info":"锁定技，你不能成为黑色锦囊牌的目标。",
            "xinfu_caochuanjiejian":"草船借箭",
            "xinfu_caochuanjiejian_info":"当【杀】或伤害性锦囊牌对你生效时，对此牌使用。你令此牌对你无效，然后你于此牌结算完成后获得之。",
            "xinfu_xiejiaguitian":"解甲归田",
            "xinfu_xiejiaguitian_info":"出牌阶段，对一名装备区里有牌的角色使用。该角色收回装备区内的所有牌。",
            "xinfu_shushangkaihua":"树上开花",
            "xinfu_shushangkaihua_info":"出牌阶段，对你自己使用。你弃置至多两张牌，然后摸等量的牌。若你弃置了装备牌，则你可以多摸一张牌。",
            "xinfu_zhuluzhongyuan":"逐鹿天下",
            "xinfu_zhuluzhongyuan_info":"出牌阶段，对所有角色使用。你从牌堆和弃牌堆中亮出等同于目标数量的装备牌，然后从你开始，所有目标角色依次将这些牌中的一张置入自己的装备区。",
            "xinfu_yajiaoqiang":"涯角枪",
            "xinfu_yajiaoqiang_info":"你的回合外，当你于此回合内第一次使用黑色牌或打出黑色【闪】时，你可以在此牌结算完成后获得之。",
            "xinfu_jinhe":"锦盒",
            "xinfu_jinhe_info":"<li>锁定技。当【锦盒】进入你的装备区时，你观看牌堆顶的两张牌，并将其中的一张置于【锦盒】上，称之为「礼」。<br><li>出牌阶段，你可以弃置【锦盒】和「礼」。若如此做，你弃置所有与「礼」花色相同的手牌。当【锦盒】因其他原因离开你的装备区时，你弃置所有手牌。",
            sha:"sha",
            "sha_info":"",
            shan:"shan",
            "shan_info":"",
            tao:"tao",
            "tao_info":"",
            jiu:"jiu",
            "jiu_info":"",
        },
        list:[["spade","5","xinfu_wufengjian",null,["gifts"]],["heart","5","xinfu_numa",null,["gifts"]],["heart","10","xinfu_nvzhuang",null,["gifts"]],["diamond","10","xinfu_yinfengjia",null,["gifts"]],["club","10","xinfu_jinhe",null,["gifts"]],["diamond","5","xinfu_yajiaoqiang"],["spade","10","xinfu_yexingyi"],["club","10","xinfu_zheji",null,["gifts"]],["spade","3","xinfu_caochuanjiejian"],["spade","6","xinfu_caochuanjiejian"],["club","9","xinfu_zhuluzhongyuan"],["diamond","3","xinfu_xiejiaguitian"],["club","3","xinfu_xiejiaguitian"],["heart","9","xinfu_shushangkaihua"],["diamond","9","xinfu_shushangkaihua"],["heart","11","xinfu_shushangkaihua"]],
    },
    skill:{
        skill:{
            "wufengjian_skill":{
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
        player.chooseToDiscard('he',true);
    },
            },
            "yinfengjia_skill":{
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
        return get.type(event.card,'trick')=='trick';
    },
                content:function (){
        trigger.num++;
    },
            },
            "yexingyi_skill":{
                mod:{
                    targetEnabled:function (card){
            if((get.type(card)=='trick'||get.type(card)=='delay')&&
                get.color(card)=='black') return false;
        },
                },
            },
            "caochuan_skill":{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        if(event.player==player) return false;
        if(player.countCards('h','xinfu_caochuanjiejian')<1) return false;
        if(!['basic','trick'].contains(get.type(event.card))) return false;
        if(get.tag(event.card,'damage')) return true;
        return false;
    },
                content:function (){
        'step 0'
        player.chooseToUse({name:'xinfu_caochuanjiejian'},'是否对'+get.translation(trigger.card)+'使用【草船借箭】？').set('ai1',function(card){
            return _status.event.bool;
        }).set('bool',-get.effect(player,trigger.card,trigger.player,player)).set('respondTo',[trigger.player,trigger.card]);
        trigger.caochuan=true;
        'step 1'
        delete trigger.caochuan;
    },
            },
            "caochuan_skill2":{
                trigger:{
                    global:"useCardAfter",
                },
                forced:true,
                filter:function (event,player){
        if(!event.caochuan_gainer) return false;
        var bool=false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].isInPile()) bool=true;
        }
        return bool&&event.caochuan_gainer==player;
    },
                content:function (){
            var list=[];
            for(var i=0;i<trigger.cards.length;i++){
                if(trigger.cards[i].isInPile()){
                    list.push(trigger.cards[i]);
                }
            }
            player.gain(list,'gain2');
    },
            },
            "yajiaoqiang_skill1":{
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        if(event.name=='respond'&&event.card.name!='shan') return false;
        return get.color(event.cards)=='black';
    },
                usable:1,
                direct:true,
                content:function (){
        'step 0'
        player.chooseBool(get.prompt('yajiaoqiang_skill1')).set('prompt2',get.translation('yajiaoqiang_skill1_info')).set('ai',function(){return true;});
        'step 1'
        if(result.bool){
        player.logSkill('yajiaoqiang_skill1');
        trigger.xinfu_yajiaoqiang=true;
        }
    },
            },
            "yajiaoqiang_skill2":{
                trigger:{
                    player:["useCardAfter","respondAfter"],
                },
                filter:function (event,player){
        return event.xinfu_yajiaoqiang==true;
    },
                silent:true,
                popup:false,
                content:function (){
        var list=[];
            for(var i=0;i<trigger.cards.length;i++){
                if(trigger.cards[i].isInPile()){
                    list.push(trigger.cards[i]);
                }
            }
            player.gain(list,'gain2');
    },
                forced:true,
            },
            "jinhe_skill":{
                filter:function (event,player){
        return player.storage.jinhe_skill!=undefined;
    },
                intro:{
                    content:"共有一张牌",
                },
                subSkill:{
                    "1":{
                        sub:true,
                    },
                },
                enable:"phaseUse",
                content:function (){
        'step 0'
        player.addTempSkill('jinhe_skill_1');
        player.discard(player.getEquip(5));
        'step 1'
        player.removeSkill('jinhe_skill_1');
    },
            },
        },
        translate:{
            "wufengjian_skill":"无锋剑",
            "wufengjian_skill_info":"",
            "yinfengjia_skill":"引蜂甲",
            "yinfengjia_skill_info":"",
            "yexingyi_skill":"夜行衣",
            "yexingyi_skill_info":"",
            "caochuan_skill":"草船借箭",
            "caochuan_skill_info":"",
            "caochuan_skill2":"草船借箭",
            "caochuan_skill2_info":"",
            "yajiaoqiang_skill1":"涯角枪",
            "yajiaoqiang_skill1_info":"你的回合外你的回合外，当你于此回合内第一次使用黑色牌或打出黑色【闪】时，你可以在此牌结算完成后获得之。",
            "yajiaoqiang_skill2":"涯角枪",
            "yajiaoqiang_skill2_info":"",
            "jinhe_skill":"锦盒",
            "jinhe_skill_info":"",
        },
    },
    intro:"逐鹿中原活动场的卡牌包",
    author:"苏婆玛丽奥",
    diskURL:"",
    forumURL:"",
    version:"1.1",
},files:{"character":[],"card":["xinfu_jinhe.png"],"skill":[]}}})