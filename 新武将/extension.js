game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新武将",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "宇智波鼬":["male","shen",3,["yuedu","retianzhao","xuzuo"],["des:木叶村宇智波一族的天才忍者，7岁忍校毕业，13岁当上暗部队长，忍术高超，擅长手里剑。宇智波一族少数开了万花筒写轮眼的人，左眼月读，能瞬间让对手陷入鼬控制的幻术之中，包括时间、空间、质量，让其受到极重的精神攻击，属精神攻击类幻术。右眼天照，聚焦即发出能烧毁一切的黑色火焰，烧毁目标前永不熄灭。双眼须佐能乎，拥有极强的攻击与防御力。少年鼬是名双重间谍，为了村子，在宇智波一族叛变木叶前选择灭族，后逃离加入并暗中调查晓组织。后与其弟佐助决战而死，佐助因此开了万花筒写轮眼。第4次忍界大战被兜用秽土转生术复活，然后与鸣人相遇发动最强幻术“别天神”，摆脱控制，与兜一战，发动禁术“伊邪那美”，让兜陷入循环的幻术中。"]],
            "漩涡长门":["male","shen",3,["tianzheng","tianyin","baoxing","lunhui"],["des:漩涡一族后裔，忍界大战时的孤儿，后被自来也收为徒弟，早期与弥彦等人创立晓组织，六道佩恩的实际操控者，实力恐怖。先后杀了自来也、卡卡西等人，以一己之力毁了木叶，与鸣人一战，终被鸣人说服，发动轮回天生之术令死去的木叶忍者复活后死去。后来又被兜用秽土转生之术复活，最终被宇智波鼬的十拳剑封印"]],
            "南蛮王":["male","qun",1,["xiongqi","xiangfu","蛮王"],["des:七擒七纵之孟获"]],
            "姜伯约":["male","shu",4,["tiaoxin_jiangwei","guanxing_jiangwei"],["des:诸葛亮弟子"]],
            new:["male","qun",4,["liangji","jugong","chengmou"],["des:貂蝉的义父，详看百度百科"]],
        },
        translate:{
            "宇智波鼬":"宇智波鼬",
            "漩涡长门":"漩涡长门",
            "南蛮王":"南蛮王",
            "姜伯约":"姜伯约",
            new:"王允",
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
            "蛮王":{
                mod:{
                    maxHandcard:function (player,num){
            return num+=3-player.hp;
            
        },
                },
                init:function (player){
        if(lib.config.mode=='identity'&&player.isZhu){
            player.maxHp--;
            player.update();
        }
    },
            },
            baoxing:{
                audio:"ext:新武将:2",
                usable:1,
                skillAnimation:"epic",
                animationStr:"地爆天星",
                animationColor:"fire",
                enable:"phaseUse",
                viewAs:{
                    name:"nanman",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":3,"name":"jiu","cardid":"2192073390","_transform":"translateX(0px)","clone":{"name":"jiu","suit":"club","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3456},"timeout":3419,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":4,"name":"guohe","cardid":"1656623391","_transform":"translateX(112px)","clone":{"name":"guohe","suit":"club","number":4,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3457},"timeout":3420,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":1,"name":"baiyin","cardid":"8424539330","clone":{"name":"baiyin","suit":"club","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3458},"original":"h","_transform":"translateX(224px)","timeout":3421}],
                },
                filterCard:function (card,player){
        if(ui.selected.cards.length){
            return get.suit(card)==get.suit(ui.selected.cards[0]);
        }
        var cards=player.get('h');
        for(var i=0;i<cards.length;i++){
            if(card!=cards[i]){
                if(get.suit(card)==get.suit(cards[i])) return true;
            }
        }
        return false;
    },
                selectCard:3,
                check:function (card){
        return 6-ai.get.value(card);
    },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5,
                    },
                    wuxie:function (target,card,player,viewer){
            if(ai.get.attitude(viewer,target)>0&&target.num('h','shan')){
                if(!target.num('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    result:{
                        target:function (player,target){
                var num=0;
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].ai.shown==0) num++;
                }
                if(num>1) return 0;
                var nh=target.num('h');
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
                        respondSha:1,
                    },
                },
            },
            xiangfu:{
                skillAnimation:true,
                audio:"ext:新武将:1",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.maxHp>=7;
    },
                forced:true,
                priority:3,
                content:function (){
        player.die();
        
        game.createTrigger('phaseBegin','yinghun',player,trigger);
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            return 0.5;
        },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                var hasfriend=false;
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i]!=target&&ai.get.attitude(game.players[i],target)>=0){
                        hasfriend=true;break;
                    }
                }
                if(!hasfriend) return;
                if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
            },
                    },
                },
            },
            xiongqi:{
                audio:"ext:新武将:2",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationStr:"雄起",
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
        return false;
    },
                content:function (){
        'step 0'
        player.gainMaxHp(1)
        player.discard(player.get('j'));
        player.hp=Math.min(9,player.maxHp);  
        player.draw(1);
        'step 1'
        
        if(player.isLinked()) player.link();
        'step 2'
        if(player.isTurnedOver()) player.turnOver();
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
                if(player.hp<=2&&player.num('he')<=1) return 10;
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
            "guanxing_jiangwei":{
                audio:"ext:新武将:2",
                audioname:["jiangwei"],
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                content:function (){
        "step 0"
        if(player.isUnderControl()){
            game.modeSwapPlayer(player);
        }
        var num=Math.min(4,game.countPlayer());
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
            if(!player.countCards('h','wuxie')){
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
      
        
          player.draw();         
        
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
                    threaten:1.2,
                },
            },
            "tiaoxin_jiangwei":{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.canUse({name:'sha'},player)&&target.countCards('he');
    },
                content:function (){
        "step 0"
        target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
        "step 1"
        if(result.bool==false&&target.countCards('he')>0){
            player.discardPlayerCard(target,'he',true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1,
                        player:function (player,target){
                if(target.countCards('h')==0) return 0;
                if(target.countCards('h')==1) return -0.1;
                if(player.hp<=2) return -2;
                if(player.countCards('h','shan')==0) return -1;
                return -0.5;
            },
                    },
                    threaten:1.1,
                },
                audioname:["jiangwei","sp_jiangwei","xiahouba"],
            },
            retianzhao:{
                enable:"phaseUse",
                audio:"ext:新武将:2",
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"fire",
                    suit:"spade",
                    number:7,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"sha","cardid":"4496120349","_transform":"translateX(112px)","clone":{"name":"sha","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3695},"timeout":3678,"original":"h"}],
                },
                prompt:"发动天照，你使用的杀可视为火杀",
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
            lunhui:{
                audio:"ext:新武将:2",
                unique:true,
                enable:"phaseUse",
                mark:true,
                skillAnimation:"epic",
                animationStr:"轮回天生",
                animationColor:"fire",
                init:function (player){
        player.storage.lunhui=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
           return game.dead.length>0;
    },
                content:function (){                
        "step 0" 
        player.storage.lunhui=true; 
        event.current=player.next;                
                 var list=[];
                 for(var i=0;i<game.dead.length;i++){
                     list.push(game.dead[i].name);
                 }                 player.chooseButton(ui.create.dialog('选择1名角色复活',[list,'character']),function(button){
                 for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                     return ai.get.attitude(_status.event.player,game.dead[i]);
                 }); 
                "step 1"
                 player.unmarkSkill('lunhui')               
                 if(result.bool){
                     for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                     var dead=game.dead[i];
                     player.logSkill('lunhui',dead);
                     dead.revive(dead.maxHp);
                     dead.draw(dead.maxHp);
                     player.turnOver(); 
                     player.removeSkill('lunhui')
                         
     }
     },
                direct:true,
                notarget:true,
                selectCard:2,
                filterCard:function (card) {
        if (card.name == 'tao' ) return true;
        return false;
    },
                position:"h",
                discard:false,
                prompt:"选择两张桃",
            },
            tianyin:{
                audio:"ext:新武将:2",
                skillAnimation:"epic",
                animationStr:"万象天引",
                animationColor:"fire",
                trigger:{
                    player:"damageEnd",
                },
                check:function (event,player){
        if(player.isTurnedOver()) return true;
        var num=0;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].num('he')&&game.players[i]!=player&&
                ai.get.attitude(player,game.players[i])<=0){
                num++;
            }
            if(game.players[i].num('j')&&game.players[i]!=player&&
                ai.get.attitude(player,game.players[i])>0){
                num++;
            }
            if(num>=2) return true;
        }
        return false;
    },
                content:function (){
    "step 0"
    var targets=game.players.slice(0);
    targets.remove(player);
    targets.sort(lib.sort.seat);
    event.targets=targets;
    event.num=0;
    "step 1"
    if(num<event.targets.length){
        var hej=event.targets[num].get('hej')
        if(hej.length){
            var card=hej.randomGet();
            player.gain(card,event.targets[num]);
            if(get.position(card)=='h'){
                event.targets[num].$give(1,player);
            }
            else{
                event.targets[num].$give(card,player);
            }
        }
        event.num++;
        event.redo();
    }
    "step 2"
    player.turnOver();
      },
                ai:{
                    maixie:true,
                    threaten:function (player,target){
            if(target.hp==1) return 2.5;
            return 1;
        },
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkill('jueqing')) return [1,-2];
                    if(target.hp==1) return;
                    if(target.isTurnedOver()) return [0,3];
                    var num=0;
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].num('he')&&game.players[i]!=player&&
                            ai.get.attitude(player,game.players[i])<=0){
                            num++;
                        }
                        if(game.players[i].num('j')&&game.players[i]!=player&&
                            ai.get.attitude(player,game.players[i])>0){
                            num++;
                        }
                        if(num>2) return [0,1];
                        if(num==2) return [0.5,1];
                    }
                }
            },
                    },
                },
            },
            yuedu:{
                audio:"ext:新武将:3",
                usable:1,
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
            player.storage.fenxun2=target;
            player.addTempSkill('fenxun2','phaseAfter');         
            target.addTempSkill('fengyin','phaseAfter');      
            target.addTempSkill('yijue2','phaseAfter');
            event.finish();
        }
    },
            },
            xuzuo:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.nature&&player.countCards('h')) return true;
        if(!event.nature&&!player.countCards('h')) return true;
        return false;
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
                srlose:true,
                mark:true,
                ai:{
                    nofire:function (player){
            return player.countCards('h')>0;
        },
                    nothunder:function (player){
            return player.countCards('h')>0;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
                intro:{
                    content:function (storage,player){
            var str='';
            if(player.countCards('h')){
                str+='防止属性伤害';
            }
            else{
                str+='防止非属性伤害';
            }
            return str;
        },
                },
            },
            jugong:{
                audio:"ext:新武将:2",
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                frequent:true,
                locked:false,
                notemp:true,
                init:function (player){
        player.storage.jugong=[];
    },
                filter:function (event,player){
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink()                
 &&_status.currentPhase!=player;
   
    },
                content:function (){
        "step 0"
        player.draw();
        "step 1"
        if(player.countCards('h')){
            player.chooseCard('将'+get.cnNumber(1)+'张手牌置于武将牌上作为“功”',1,true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special);
            player.storage.jugong=player.storage.jugong.concat(result.cards);
            player.syncStorage('jugong');
            player.markSkill('jugong');
            game.log(player,'将',result.cards,'置于武将牌上作为“功”');
        }
    },
                intro:{
                    content:"cards",
                },
                group:"jugong_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){        
                            return player.storage.jugong.length>1;
    },
                        content:function (){
    'step 0'  
      player.chooseCardButton('移去两张“功”',2,player.storage.jugong,true);
                'step 1'
                 if(event.directresult||result.bool){
            player.logSkill('jugong');
            var links=event.directresult||result.links;
            for(var i=0;i<links.length;i++){
                player.storage.jugong.remove(links[i]);
            }
            player.syncStorage('jugong');
            if(!player.storage.jugong.length){
                player.unmarkSkill('jugong');
            }
            else{
               player.markSkill('jugong');
            }
            player.$throw(links);
            game.log(player,'被移去了',links);
            for(var i=0;i<links.length;i++){
                ui.discardPile.appendChild(links[i]);}
            }
    'step 2'
    trigger.untrigger();
      trigger.finish();
       
    
},
                        sub:true,
                    },
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
                    if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
                    if(target.hp==3) return [0.5,get.tag(card,'damage')*1.5];
                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                }
            },
                    },
                },
            },
            liangji:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        'step 0'
        player.chooseCard('h','连计：将1张牌置于'+get.translation(target)+'的武将牌上',true).set('ai',function(card){
            if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
                return 7-get.value(card);
            }
            return -get.value(card);
        });
        'step 1'
        if(result.bool){
            player.$give(result.cards,target);
            player.lose(result.cards,ui.special);
            target.storage.liangji_1=result.cards;
            target.storage.liangji_1_source=target;
            target.syncStorage('liangji_1');
            target.addSkill('liangji_1');
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(get.attitude(player,target)>0){
                    return Math.sqrt(target.countCards('he'));
                }
                return 0;
            },
                        player:1,
                    },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        mark:true,
                        intro:{
                            content:"cards",
                        },
                        content:function (){
                'step 0'
                var cards=player.storage.liangji_1;
                if(cards){
                    player.gain(cards,'gain2');
                   }                  
                  player.storage.liangji_1=0;                                            
             
                'step 1'            
            if(player.sex=='male')player.addTempSkill('wushuang');                                  
            if(player.sex=='female')player.addTempSkill('lijian');
                player.removeSkill('liangji_1');
              
            
            
            },
                        sub:true,
                    },
                },
            },
            chengmou:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                filter:function (event,player){        
                            return player.storage.jugong.length>0;
    },
                content:function (){
       'step 0'
       if(player.storage.jugong.length>2)player.loseHp();
           'step 1'
       var cards=player.storage.jugong;
       
       if(cards){                    
       player.gain(cards,'gain2');                    
             }                             
       player.storage.jugong=[];
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      
    },
            },
            tianzheng:{
                audio:"ext:新武将:2",
                group:["tianzheng_more","tianzheng_less"],
                subSkill:{
                    more:{
                        audio:["tianzheng",2],
                        trigger:{
                            source:"damageBegin",
                        },
                        direct:true,
                        filter:function (event,player){
                if(!player.num('h',{color:'red'})) return false;
                return event.player.hp>=player.hp&&player!=event.player;
            },
                        content:function (){
                'step 0'
                var goon=(ai.get.attitude(player,trigger.player)<0);
                var next=player.chooseToDiscard(get.prompt('天征：是否弃置一张红色手牌令伤害＋1？',trigger.player),{color:'red'});
                next.set('ai',function(card){
                    if(_status.event.goon){
                        return 8-ai.get.value(card);
                    }
                    return 0;
                });
                next.set('goon',goon);
                next.logSkill=['tianzheng',trigger.player];
                'step 1'
                if(result.bool){
                    trigger.num++;
                }
            },
                        sub:true,
                    },
                    less:{
                        audio:["tianzheng",2],
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
                if(!player.num('h',{color:'black'})) return false;
                return event.source&&event.source.hp>=player.hp&&player!=event.source;
            },
                        direct:true,
                        content:function (){
                "step 0"
                var next=player.chooseToDiscard('天征：是否弃置一张黑色手牌令伤害-1？',{color:'black'});
                next.set('ai',function(card){
                    var player=_status.event.player;
                    if(player.hp==1||_status.event.getTrigger().num>1){
                        return 9-ai.get.value(card);
                    }
                    if(player.hp==2){
                        return 8-ai.get.value(card);
                    }
                    return 7-ai.get.value(card);
                });
                next.logSkill='tianzheng';
                "step 1"
                if(result.bool){
                    game.delay();
                    trigger.num--;
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    expose:0.2,
                    threaten:1.5,
                },
            },
        },
        translate:{
            "蛮王":"蛮王",
            "蛮王_info":"锁定技，你的手牌上限为3，你当主公时不增加体力上限。",
            baoxing:"爆星",
            "baoxing_info":"出牌阶段限一次，你可将三张相同花色的手牌当[南蛮入侵]使用",
            xiangfu:"降服",
            "xiangfu_info":"觉醒技，回合开始阶段，若你的体力上限为7，你立即死亡。",
            xiongqi:"雄起",
            "xiongqi_info":"非限定技，当你处于濒死状态时，你可以丢弃你判定区里的牌，并重置你的武将牌，然后摸1张牌且体力回至体力上限，然后加一体力上限。",
            "guanxing_jiangwei":"继志",
            "guanxing_jiangwei_info":"每当你受到一次伤害后，你可以观看牌堆顶的4张牌，并将其以任意顺序置于牌堆项或牌堆底，然后你摸一张牌。",
            "tiaoxin_jiangwei":"挑衅",
            "tiaoxin_jiangwei_info":"出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。",
            retianzhao:"天照",
            "retianzhao_info":"出牌阶段你可将普通杀当火杀使用",
            lunhui:"轮回",
            "lunhui_info":"限定技，出牌阶段你可弃置两张[桃]并选择一名已阵亡角色，令其复活，其体力回复至X，并摸X张的牌（X为该角色的体力上限），然后你将你的武将牌翻面",
            tianyin:"天引",
            "tianyin_info":"当你受到伤害，你可随机获得每名角色区域内的一张牌，然后你翻面",
            yuedu:"月读",
            "yuedu_info":"出牌阶段限一次，你可选择一名角色进行拼点，若你赢，则该角色翻面，并且直到回合结束，你与该角色距离为1，其非锁定技失效，不能使用或打出牌。",
            xuzuo:"须佐",
            "xuzuo_info":"锁定技，你的手牌上限+1，当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害。",
            jugong:"居功",
            "jugong_info":"回合外每名角色的回合限一次，每当场上有角色因受到【杀】或【决斗】造成的伤害，你可以摸一张牌并且将一张手牌置于你的武将牌上，称之为“功”。在你即将受到伤害时，你可以弃置两张“功”，防止此伤害。",
            liangji:"环计",
            "liangji_info":"出牌阶段限一次，你可以选择一名其他角色并将一张手牌置于其武将牌上。目标角色于摸牌阶段开始时，获得此牌。若其为男性角色，则获得技能【无双】，若其为女性角色，则获得技能【离间】，直到回合结束。",
            chengmou:"逞谋",
            "chengmou_info":"摸牌阶段开始时，若你有“功”牌，你获得之，若你所获得的“功”牌多于两张，你须失去一点体力。",
            tianzheng:"天征",
            "tianzheng_info":"当你即将受到伤害，若伤害来源体力比你高，你可弃置一张黑色手牌令伤害-1，当你即将造成伤害，若对方体力值比你高，你可弃置一张红色手牌令此伤害+1",
        },
    },
},files:{"character":["new.jpg","漩涡长门.jpg"],"card":[],"skill":[]}}})