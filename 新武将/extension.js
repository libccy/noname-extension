game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新武将",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "漩涡长门":["male","shen",3,["tianzheng","tianyin","baoxing","lunhui"],["des:漩涡一族后裔，忍界大战时的孤儿，后被自来也收为徒弟，早期与弥彦等人创立晓组织，六道佩恩的实际操控者，实力恐怖。先后杀了自来也、卡卡西等人，以一己之力毁了木叶，与鸣人一战，终被鸣人说服，发动轮回天生之术令死去的木叶忍者复活后死去。后来又被兜用秽土转生之术复活，最终被宇智波鼬的十拳剑封印"]],
            "南蛮王":["male","qun",1,["xiongqi","xiangfu","蛮王"],["des:七擒七纵之孟获"]],
            "姜伯约":["male","shu",4,["tiaoxin_jiangwei","guanxing_jiangwei"],["des:诸葛亮弟子"]],
            new:["male","qun",4,["liangji","jugong","chengmou"],["des:貂蝉的义父，详看百度百科"]],
            itachi:["male","shen",3,["yuedu","retianzhao","xuzuo"],["des:木叶村宇智波一族的天才忍者，7岁忍校毕业，13岁当上暗部队长，忍术高超，擅长手里剑。宇智波一族少数开了万花筒写轮眼的人，左眼月读，能瞬间让对手陷入鼬控制的幻术之中，包括时间、空间、质量，让其受到极重的精神攻击，属精神攻击类幻术。右眼天照，聚焦即发出能烧毁一切的黑色火焰，烧毁目标前永不熄灭。双眼须佐能乎，拥有极强的攻击与防御力。少年鼬是名双重间谍，为了村子，在宇智波一族叛变木叶前选择灭族，后逃离加入并暗中调查晓组织。后与其弟佐助决战而死，佐助因此开了万花筒写轮眼。第4次忍界大战被兜用秽土转生术复活，然后与鸣人相遇发动最强幻术“别天神”，摆脱控制，与兜一战，发动禁术“伊邪那美”，让兜陷入循环的幻术中。"]],
            "雏田":["female","shen",3,["baiyan","zhangshu"],["des:日向一族宗家女忍者，鸣人的妻子，拥有一双远距离无死角透视之眼，能看穿人体经络穴位并施以攻击，取人芳心于千里之外，易如反掌。同时习得八卦掌，集攻击防御于一身。"]],
            "波风水门":["male","shen",3,["luoxuan","shanjie","xinfengyin"],["des:四代目火影，鸣人的父亲，木叶村的英雄，天才忍者，外号“黄色闪光”，年纪轻轻便当上火影。自创忍术螺旋丸，凝聚查克拉无需结印即可发动。改良二代火影的“飞雷神”之术，只需在目标地留下术式，便能在术式之间瞬间移动或转移物体，速度极快，千里之外取人首级只在须臾之间，瞬间又遁迹千里之外，来无影去无踪，敌皆闻风丧胆，遇见可放弃任务，只管逃跑，曾在忍界大战以一己之力秒杀对方五十名上忍，名声由此大震。鸣人出生当晚，被宇智波带土掳走妻子，放出九尾狐，后发动禁术“尸鬼封尽”、“八卦封印”将九尾封印进鸣人体内后死去。"]],
            "漩涡鸣人":["male","shen",3,["fensheng","xianshu"],[]],
            "我爱罗":["male","shen",3,["shazang","juefang"],[]],
            "佐助":["male","shen",3,["yandun","qianniao","rexuzuo"],[]],
            "带土":["male","shen",4,["xishou","reshenwei"],[]],
        },
        translate:{
            "漩涡长门":"漩涡长门",
            "南蛮王":"南蛮王",
            "姜伯约":"姜伯约",
            new:"王允",
            itachi:"宇智波鼬",
            "雏田":"雏田",
            "波风水门":"波风水门",
            "漩涡鸣人":"漩涡鸣人",
            "我爱罗":"我爱罗",
            "佐助":"佐助",
            "带土":"带土",
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
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":2,"name":"hanbing","cardid":"5342616346","original":"h","clone":{"name":"hanbing","suit":"spade","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1934},"timeout":1760},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"sha","nature":"thunder","cardid":"9764014369","clone":{"name":"sha","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1935},"timeout":1761,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"nanman","cardid":"8364627298","original":"h","clone":{"name":"nanman","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1936},"timeout":1762}],
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
                    suit:"club",
                    number:4,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":4,"name":"sha","cardid":"5258356269","_transform":"translateX(224px)","clone":{"name":"sha","suit":"club","number":4,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1213},"timeout":1191,"original":"h"}],
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
                usable:1,
                trigger:{
                    player:"phaseEnd",
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
                    threaten:function (player,target){
            if(target.hp==1) return 2.5;
            return 1;
        },
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkill('jueqing')) return [1,-2];
                    if(target.hp==1) return;
                    if(target.isTurnedOver()) return [0,-2];
                    var num=0;
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].num('he')&&game.players[i]!=player&&
                            ai.get.attitude(player,game.players[i])>0){
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
                ai:{
                    result:{
                        target:function (player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return 0;              
                if(player.canUse('sha',target)&&(player.countCards('h','sha')||player.countCards('he',{color:'red'}))){
                    return -2;
                }
                return -0.5;
            },
                    },
                    order:9,
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
                    if(target.hp==3) return [0.5,get.tag(card,'damage')*1];
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
            baiyan:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                content:function (){
        "step 0"
        
         player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
            return get.suit(button.link)=='heart';
        });                                                                   
        "step 1"                   
        if(result.bool){                           
        event.card=result.links[0];                       
        player.gain(event.card,target);
        target.$give(event.card,player);               
        }                                                
                                 
    },
                selectTarget:1,
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            zhangshu:{
                audio:"ext:新武将:1",
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
            refengyin:{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                audio:"ext:新武将:2",
                mark:true,
                skillAnimation:"epic",
                animationStr:"尸鬼封尽",
                animationColor:"fire",
                filter:function (event){
        return event.target&&event.target.isIn();
    },
                init:function (player){
        player.storage.refengyin=false;
    },
                intro:{
                    content:"limited",
                },
                content:function (){
         "step 0" 
        player.storage.refengyin=true;   
        
        trigger.target.clearSkills();
        "step 1"              
        player.lossHp(hp);
        mark:false;
    },
                logTarget:"target",
                ai:{
                    threaten:0.3,
                },
            },
            shanjie:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseUse",
                },
                logTarget:"target",
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                    targetInRange:function (card,player,target){
            if(card.number){
                if(get.distance(player,target)<=card.number) return true;
            }
        },
                },
            },
            luoxuan:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:新武将:2",
                filter:function (event,player){
        return player.countCards('he',{type:'equip'})>0  
    },
                chooseButton:{
                    dialog:function (){
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }                       
    return ui.create.dialog([list,'vcard']);                                        
        },
                    check:function (button){
            var player=_status.event.player;
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isOut()){
                    if(players[i].hp<players[i].maxHp){
                        if(get.attitude(player,players[i])>0){
                            if(players[i].hp<2){
                                lose--;
                                recover+=0.5;
                            }
                            lose--;
                            recover++;
                        }
                        else if(get.attitude(player,players[i])<0){
                            if(players[i].hp<2){
                                lose++;
                                recover-=0.5;
                            }
                            lose++;
                            recover--;
                        }
                    }
                    else{
                        if(get.attitude(player,players[i])>0){
                            lose--;
                        }
                        else if(get.attitude(player,players[i])<0){
                            lose++;
                        }
                    }
                }
            }
            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
            return (button.link[2]=='wuzhong')?1:-1;
        },
                    backup:function (links,player){                   
        return {
                filterCard:true,   
                filterCard:{
                  type:"equip",
                },           
                selectCard:1,                   
                position:'he',               
                popname:true,
                viewAs:{name:links[0][2]},
            }                                                                    
        },
                    prompt:function (links,player){           
           
            return '选择任意一张装备牌当作'+get.translation(links[0][2])+'使用';                 
        },
                },
                ai:{
                    order:1,
                    expose:0.5,
                    result:{
                        player:function (player){
                var num=0;
                var cards=player.getCards('he');                                  
                if(card.name=='bagua'&&card.name=='renwang') return 0         
                for(var i=0;i<cards.length;i++){
                    num+=Math.max(0,get.value(cards[i],player,'raw'));
                }
                num/=cards.length;
                num*=Math.min(cards.length,player.hp);
                return 12-num;
            },
                    },
                    threaten:1.6,
                },
            },
            fensheng:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                selectTarget:[1,3],
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                multitarget:true,
                multiline:true,
                content:function (){
        player.chooseToCompare(targets).callback=lib.skill.fensheng.callback;
    },
                init:function (player){
        player.storage.fensheng=0;
    },
                intro:{
                    name:"分身",
                    content:"mark",
                },
                chat:["万年吊车尾","木叶的灾星","别浪费查克拉了","黄头小儿","分身烂术","九尾狐狸","口遁对我没用","你是不可能当上火影的","我从未见过有如此厚顔无耻之人！"],
                callback:function (){
'step 0'
event.num1=event.card1.number;
event.num2=event.card2.number;

'step 1'
                
if(result.bool){
    if(event.num1<player.storage.fensheng){
        event.num1+=player.storage.fensheng;
    }
    else{
        player.getStat().skill.fensheng--;
    }
}
'step 2'
if(event.num1>event.num2){
    target.chooseToDiscard('he','弃置一张牌并受到一点火焰伤害，或令'+get.translation(player)+'摸两张牌并失去一点体力').set('ai',function(card){
   if(ai.get.attitude(target,player)>0) return -ai.get.value(card);
        return 6-ai.get.value(card);
    });
}
else{   
    target.chat(lib.skill.fensheng.chat[player.storage.fensheng]);
    game.delay();
    player.storage.fensheng++;
    player.markSkill('fensheng');
    if(player.storage.fensheng>=9){
        player.die();
    }
    else{
        player.chooseToDiscard('he','弃置一张牌令目标角色受到一点火焰伤害，或摸两张牌并失去一点体力').set('ai',function(){return -1;});
        }
      }
 'step 3'
 if(!result.bool){   
     player.draw(2);  
     player.loseHp();
}
        else{       
         event.target.damage(); 
        }
    },
                ai:{
                    order:7,
                    result:{
                        target:function (player,target){
                var num=game.countPlayer(function(current){
                    return get.attitude(player,current)<0&&current!=player&&current.countCards('h');
                });
                if(num>3) num=3;
                
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    if(get.value(hs[i])<=6){
                        switch(hs[i].number){
                            case 13:return -1;
                            case 12:if(player.storage.fensheng+num<=8) return -1;break;
                            case 11:if(player.storage.fensheng+num<=7) return -1;break;
                            default:if(hs[i].number>5&&player.storage.fensheng+num<=8) return -1;
                        }
                    }
                }
                return 0;
            },
                    },
                },
            },
            yandun:{
                audio:"ext:新武将:3",
                enable:"phaseUse",
                usable:1,
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
           player.viewHandcards(target);                  
           event.target.damage("fire");      
        }
        else{
            player.draw();
        }
    },
                ai:{
                    order:function (name,player){
            var cards=player.getCards('h');
            if(player.countCards('h','sha')==0){
                return 1;
            }
            for(var i=0;i<cards.length;i++){
                if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                    return 9;
                }
            }
            return get.order({name:'sha'})-1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h','sha')>0) return 0;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
            },
                        target:function (player,target){
                var num=target.countCards('h');
                if(num==1) return -1;
                if(num==2) return -0.7;
                return -0.5
            },
                    },
                    threaten:1.3,
                },
            },
            rexuzuo:{
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
            qianniao:{
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
                    nature:"thunder",
                    suit:"club",
                    number:9,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":9,"name":"sha","cardid":"502041124","clone":{"name":"sha","suit":"club","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":6919},"original":"h","_transform":"translateX(0px)","timeout":6898}],
                },
                prompt:"发动千鸟，你使用的杀可附带雷属性",
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
            xianshu:{
                audio:"ext:新武将:2",
                srlose:true,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){       
        player.draw(player.hp);
        player.recover();
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
                if(target.isTurnedOver()&&target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -5;
            },
                    },
                    noh:true,
                },
            },
            shazang:{
                trigger:{
                    player:"phaseUse",
                },
                mod:{
                    position:"h",
                    selectTarget:function (card,player,range){

      if(player.countCards('h')!=1) return;

        if(card.name=='sha'||card.name=='juedou'||card.name=='guohe'||card.name=='shunshou'&&range[1]!=-1) range[1]+=7;                                                     
           },
                    globalFrom:function (from,to,num){

    if(from.countCards('h')!=1) return;

    return num-Infinity;             
                        
     
        },
                },
            },
            juefang:{
                audio:"ext:新武将:2",
                group:["juefang_less","juefang_more"],
                subSkill:{
                    less:{
                        trigger:{
                            target:"useCardToBefore",
                        },
                        forced:true,
                        filter:function (event,player){
        return event.card.name=='sha';
    },
                        content:function (){
        "step 0"
        var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
        trigger.player.chooseToDiscard('绝防：弃置一张基本牌，否则此牌对'+get.translation(player)+'无效',function(card){
            return get.type(card)=='basic';
        }).set('ai',function(card){
            if(_status.event.eff>0){
                return 10-get.value(card);
            }
            return 0;
        }).set('eff',eff);
        "step 1"
        if(result.bool==false){
            trigger.finish();
            trigger.untrigger();
        }
    },
                        sub:true,
                    },
                    more:{
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        priority:15,
                        check:function (event,player){
        if(player==event.player) return true;
        return false;
    },
                        filter:function (event,player){
        return get.type(event.card,'trick')=='trick';
    },
                        content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                        sub:true,
                    },
                    ai:{
                        notrick:true,
                        effect:{
                            target:function (card,player,target,current){
                if(card.name=='sha'&&get.attitude(player,target)<0){
                    if(_status.event.name=='juefang_less') return;
                    
                    
                    
                    
                    var bs=player.getCards('h',{type:'basic'});
                    if(bs.length<2) return 0;
                    if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                    if(bs.length<=3&&player.countCards('h','sha')<=1){
                        for(var i=0;i<bs.length;i++){
                            if(bs[i].name!='sha'&&get.value(bs[i])<7){
                                return [1,0,1,-0.5];
                            }
                        }
                        return 0;
                    }
                    return [1,0,1,-0.5];
                }
            },
                        },
                        sub:true,
                    },
                },
            },
            reshenwei:{
                audio:"ext:新武将:2",
                enable:"chooseToUse",
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"wuxie",
                    suit:"spade",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":5,"name":"jueying","cardid":"1314934297","clone":{"name":"jueying","suit":"spade","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":7255},"original":"e","timeout":7236}],
                },
                filter:function (event,player){
        return player.countCards('e')>0;
    },
                viewAsFilter:function (player){
        return player.countCards('e')>0;
    },
                prompt:"将一张装备区内的牌当无懈可击使用（神威右眼转移自身虚化）",
                check:function (card){return 8-get.equipValue(card)},
                threaten:1.2,
                group:"reshenwei_move",
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,
                        audio:2,
                        filter:function (event,player){
                return !player.isTurnedOver()&&player.canMoveCard();
            },
                        content:function (){
                "step 0"
                player.chooseToDiscard('he',get.prompt('reshenwei'),'弃置一张牌并移动场上的一张牌（神威左眼远距扭曲空间）',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',player.canMoveCard(true)).set('logSkill','reshenwei');
                "step 1"
                if(result.bool){
                    player.moveCard(true);
                }
                else{
                    event.finish();
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            xishou:{
                audio:"ext:新武将:2",
                usable:1,
                delect:true,
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('he')>0  
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filterCard:true,
                position:"he",
                content:function (){       
        player.gain(target.getCards('he'),target);
        target.$give(target.countCards('he'),player);
        player.turnOver();
        player.addSkill('xishou2');
        player.storage.xishou=target;
    },
                check:function (card){return 8-get.value(card)},
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                if(player.classList.contains('turnedover')) return 10;
                return 0;
            },
                        target:function (player,target){
                if(target.countCards('h')>target.hp) return target.hp-target.countCards('h');
                return 0
            },
                    },
                    threaten:1.5,
                    effect:{
                        target:function (card){
                if(card.name=='guiyoujie') return [0,2];
            },
                    },
                },
            },
            xinfengyin:{
                audio:"ext:新武将:2",
                forbid:["boss"],
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
        return event.source&&event.source.isIn();
    },
                content:function (){
        trigger.source.clearSkills();
    },
                logTarget:"source",
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 0.2;
            return 1.5;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(!target.hasFriend()) return;
                if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
            },
                    },
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
            "tianyin_info":"回合结束阶段限一次，你可以随机获得每名角色区域内的一张牌，然后你将你的武将牌翻面",
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
            baiyan:"白眼",
            "baiyan_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张红桃手牌",
            zhangshu:"掌术",
            "zhangshu_info":"你的回合外，每当你使用、打出、失去或被弃置一张牌时，你立即摸一张牌。",
            refengyin:"封印",
            "refengyin_info":"限定技，回合结束阶段，你可令一名角色失去当前的所有技能直到游戏结束，然后你失去所有体力",
            shanjie:"闪捷",
            "shanjie_info":"锁定技，你的防御距离始终+1。回合内你使用的牌可选择距离不大于此牌点数的目标",
            luoxuan:"螺旋",
            "luoxuan_info":"出牌阶段，你可以将任意一张装备牌当做任意一张普通锦囊牌使用，每阶段限一次。",
            fensheng:"分身",
            "fensheng_info":"出牌阶段限一次，你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，没赢的角色选择一项：1.弃置一张牌并受到你造成的一点伤害；2.令你摸两张牌，然后你失去一点体力。若拼点没赢的角色是你，你可选择摸两张牌并失去一点体力或弃置一张牌并对目标造成一点伤害，并且你获得一个“影分身”标记（表示你发动的影分身已阵亡，若你有9个或以上的影分身标记时，你因耗尽九尾的查克拉而立即死亡）",
            yandun:"炎遁",
            "yandun_info":"出牌阶段限一次，你可与一名有手牌的角色进行拼点，若你赢，你观看其手牌并对目标角色造成一点火焰伤害。若你没赢，你可以摸一张牌 ",
            rexuzuo:"须佐",
            "rexuzuo_info":"锁定技，你的手牌上限+1，当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害。",
            qianniao:"千鸟",
            "qianniao_info":"出牌阶段，你使用的普通杀可附带雷属性",
            xianshu:"仙术",
            "xianshu_info":"当你失去最后的手牌时，你可以摸牌补至你当前体力的张数，然后回复一点体力。",
            shazang:"沙葬",
            "shazang_info":"当你使用的【杀】【决斗】【过河拆桥】【顺手牵羊】为最后一张手牌(或你的体力为1)时，你使用的这几类牌可无视距离，你可以为这张牌指定至多七名目标角色。",
            juefang:"绝防",
            "juefang_info":"锁定技，当其他玩家使用【杀】指定你为目标时，需额外弃掉一张基本牌，否则该牌对你无效。你防止受到锦囊牌造成的伤害",
            reshenwei:"神威",
            "reshenwei_info":"你可以将装备区里的牌当【无懈可击】使用；当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌",
            xishou:"吸收",
            "xishou_info":"出牌阶段限一次，你可以弃置一张牌并将你的武将牌翻面，若如此做，你指定一名角色，获得其所有牌。",
            xinfengyin:"封印",
            "xinfengyin_info":"锁定技，杀死你的角色失去当前的所有技能直到游戏结束。",
        },
    },
},files:{"character":["带土.jpg"],"card":[],"skill":[]}}})