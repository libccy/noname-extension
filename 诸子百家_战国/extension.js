game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"诸子百家_战国",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "法家·卫鞅":["male","qun",3,["图强","变法"],["des:法家代表人物之一。辅佐秦孝公，使得秦国空前强盛，并且为统一六国奠定了重大基础。"]],
            "墨家·墨翟":["male","qun",3,["义驰","墨守"],["des:墨家创始人，主张兼爱平等，非攻自强、非命非乐等等一系列思想，是中国哲学史上一颗耀眼的星。"]],
            "道家·庄周":["male","qun",3,["梦蝶"],["des:道家创始人之一，楚国贵族，但是不问世事，追求精神上的绝对自由，将为官之人称为“牲畜”。"]],
            "法家·韩非":["male","qun",3,["法学","大成"],["des:法家集大成者，著有《韩非子》一书，对后世法学的影响极大。"]],
            "纵横·鬼谷子":["male","qun",3,["裨阖","反应"],["des:纵横家，战国时期人物，充满神秘色彩，教有诸多学生，其中孙膑、庞涓、张仪、苏秦等为最，著有纵横书之最《鬼谷子》。"]],
            "儒家·孟轲":["male","qun",4,["王霸","三迁"],["des:儒家亚圣，继孔子之后又一儒家大圣人，孟轲主张“民贵君轻”等思想，周游列国，传颂儒道，著有《孟子》。"]],
            "阴阳·徐福":["male","qun",5,["炼丹","噬魂"],["des:阴阳家人物，方士，相传为秦始皇寻找长生药而跑去日本，成了日本人的祖先，"]],
            "儒家·荀况":["male","qun",3,["胜天","舟水"],["des:儒家代表人物之一，主张“人定胜天”、“人性本恶”等思想，并有著名论断“水能载舟，亦能覆舟”，警告为政者关爱百姓，著有《荀子》。"]],
            "兵家·孙膑":["male","qun",3,["诱敌","伏袭"],["des:兵家代表人物之一，孙武之后，著有《孙膑兵法》，在兵家中享有极高地位，曾经几度击败魏国，功勋卓著，特别是“马陵之战”，“围魏救赵”等成语皆出自于孙膑。"]],
            "兵家·吴起":["male","qun",4,["無敵","先機"],["des:兵家亚圣，地位仅次于孙武，吴起著有《吴起兵法》，且吴起儒法兼修，在军事上，吴起一生大小七十多战，胜利六十多场，其余近十场也并未败绩，有战神之称。"]],
            "兵家·白起":["male","qun",3,["佯敌","诈利"],["des:四名将之首，兵家代表人物之一，出身行伍，为秦国征战天下，所向披靡，因杀人无数而号称“人屠”，“长平之战”、“郢都之战”等为其戎马一生的代表，六国之军，无不畏惧白起，但后来白起为秦昭王赐死。"]],
            "兵家·乐毅":["male","qun",3,["元帅"],["des:兵家代表人物之一，曾在赵国为官，后来感激燕昭王之恩，遂辅佐燕昭王，使燕国强大起来，带领五国联军击败齐军之后，乐毅独自带领燕国军队乘胜追击，一举攻破齐国七十二座城池，几近灭亡齐国。"]],
        },
        translate:{
            "法家·卫鞅":"法家·卫鞅",
            "墨家·墨翟":"墨家·墨翟",
            "道家·庄周":"道家·庄周",
            "法家·韩非":"法家·韩非",
            "纵横·鬼谷子":"纵横·鬼谷子",
            "儒家·孟轲":"儒家·孟轲",
            "阴阳·徐福":"阴阳·徐福",
            "儒家·荀况":"儒家·荀况",
            "兵家·孙膑":"兵家·孙膑",
            "兵家·吴起":"兵家·吴起",
            "兵家·白起":"兵家·白起",
            "兵家·乐毅":"兵家·乐毅",
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
            "图强":{
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
player.draw(2)
player.turnOver();
var chat=['圣王不贵义，而贵法！_《商君书》'].randomGet()
      player.say(chat);},
            },
            "变法":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.isTurnedOver();
    },
                content:function (){
        player.chooseToDiscard(1,'h');
    player.draw(3);
     player.turnOver()
     var chat=['治世不一道，便国不法古！_《商君书》'].randomGet()
                  player.say(chat); },
            },
            "义驰":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (player,target){
return player!=target&&target.hp>=0},
                content:function (){
player.loseHp(1);
target.draw(2)
var chat=['兼相爱，交相利！_《墨子》','吾为义驱驰！'].randomGet()
                  player.say(chat);
},
            },
            "墨守":{
                mark:true,
                intro:{
                    content:"兼爱非攻",
                },
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                content:function (){
    player.chooseToDiscard('hej',player.hp,true)
    player.recover()
    player.addSkill('kongcheng')
    player.addSkill('qianxun')
    var chat=['非攻自强，墨守成规！'].randomGet()
                  player.say(chat);                                              
},
            },
            "梦蝶":{
                group:["梦蝶_1","梦蝶_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
  player.turnOver();
                player.recover();
                player.draw(2);
                var chat=['周为蝶乎？蝶为周乎？'].randomGet()
                  player.say(chat);
},
                    },
                    "2":{
                        mod:{
                            targetEnabled:function (card,player,target,now){
                    if(target.isTurnedOver()){
                if(card.name=='sha'||card.name=='juedou'||card.name=='guohe'||card.name=='shunshou'||card.name=='lebu'||card.name=='bingliang'||card.name=='shandian'||card.name=='nanman'||card.name=='wanjian'||card.name=='liuxinghuoyu'||card.name=='tiesuo'||card.name=='jiedao'||card.name=='fudi'||card.name=='huogong'||card.name=='touliang') return false;
            }},
                        },
                    },
                },
            },
            "法学":{
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:1,
                filterTarget:true,
                selectTarget:1,
                content:function (){        
        target.damage();
        target.draw();
        var chat=['弱乱难为计，治强常有功！_《韩非子》'].randomGet()
                  player.say(chat);
        if(target.hp<=player.hp){
            player.draw();
        }
    },
                check:function (card){
        return 6-ai.get.value(card);
    },
            },
            "大成":{
                trigger:{
                    player:"gainEnd",
                },
                forced:true,
                filter:function (event,player){
        return player.num('h')>player.hp;
    },
                content:function (){
    player.recover();
        var chat=['集前圣之智，为吾所用！'].randomGet()
                  player.say(chat);
},
            },
            "裨阖":{
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                content:function (){
    player.draw(player.maxHp-player.hp);
    player.chooseToDiscard('裨阖:请弃置一张牌','he',true);
     var chat=['圣人之在天地间也！_《鬼谷子》','反以观彼,复以知己！_《鬼谷子》','知己反可知彼！'].randomGet()
                  player.say(chat);
        
        
    
     
            
        
        
            
        
},
            },
            "反应":{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
trigger.player.chooseToDiscard(true)
var chat=['象者象其事，比者比其辞！_《鬼谷子》','重之袭之，反之复之！_《鬼谷子》'].randomGet()
      player.say(chat);},
            },
            "王霸":{
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
        return _status.currentPhase!=player&&(player.num('h')<player.maxHp);
    },
                content:function (){
     player.draw(player.maxHp-player.num('h'));
        var chat=['王霸之道，在乎民生！'].randomGet()
                  player.say(chat);
    },
                ai:{
                    threaten:1.8,
                },
            },
            "三迁":{
                trigger:{
                    player:["damageAfter","loseHpAfter"],
                },
                forced:true,
                content:function (){
        player.draw()._triggered=null;
        player.chooseToDiscard(1,'he',true);
        var chat=['母之三迁，使吾完人也！'].randomGet()
                  player.say(chat);
    },
            },
            "炼丹":{
                enable:"phaseUse",
                filterCard:true,
                position:"h",
                viewAs:{
                    name:"wuzhong",
                    suit:"club",
                    number:13,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"uncheck":[],"vanishtag":[]},"suit":"club","number":13,"name":"jinchan","cardid":"7807738247","_transform":"translateX(437.14285714285717px)","clone":{"name":"jinchan","suit":"club","number":13,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":529},"timeout":429,"original":"h"}],
                },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "噬魂":{
                trigger:{
                    player:"gainEnd",
                },
                forced:true,
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        return event.cards&&event.cards.length>1;
    },
                content:function (){
player.loseHp();
    player.draw();
},
            },
            "胜天":{
                audio:"ext:诸子百家_战国:2",
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('胜天')).set('ai',function(card){
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
            player.logSkill('胜天');
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
                    },
                },
            },
            "舟水":{
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                content:function (){
trigger.player.chooseToDiscard('he',true);
player.draw();
var chat=['水能载舟，亦能覆舟！_《荀子》'].randomGet()
      player.say(chat);},
            },
            "诱敌":{
                audio:"ext:诸子百家_战国:4",
                enable:"phaseUse",
                usable:2,
                filterTarget:function (card,player,target){
        return target.canUse({name:'sha'},player)&&target.countCards('he');
    },
                content:function (){
        "step 0"
        target.chooseToUse({name:'sha'},player,-1,'诱敌：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
        "step 1"
        if(result.bool==false&&target.countCards('he')>0){
            player.discardPlayerCard(target,2,'he',true);
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
            },
            "伏袭":{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        return event.card.name=='sha';
    },
                content:function (){
trigger.player.damage();
        trigger.player.chooseToDiscard(true);
        player.draw();
        var chat=['兵者！以诈利，以利动！_《孙武兵法》','以利动之，以卒待之！_《孙武兵法》','明年的今天，我会祭祀你的！'].randomGet()
                  player.say(chat);
    },
            },
            "無敵":{
                mod:{
                    maxHandcard:function (player,num){
            return num+=player.hp;
        },
                },
            },
            "先機":{
                group:["先机_1","先机_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        frequent:true,
                        content:function (){
    player.draw();},
                    },
                    "2":{
                        trigger:{
                            global:"gameStart",
                        },
                        frequent:true,
                        content:function (){
        player.draw(3)
    player.addSkill('shensu')
    player.addSkill('tieji');},
                    },
                },
            },
            "诈利":{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        return event.card.name=='sha';
    },
                content:function (){
trigger.player.turnOver();
        trigger.player.chooseToDiscard(true);
        var chat=['你中计了！','到此为止了！'].randomGet()
                  player.say(chat);
        
},
            },
            "佯敌":{
                audio:"ext:诸子百家_战国:4",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.canUse({name:'sha'},player)&&target.countCards('he');
    },
                content:function (){
        "step 0"
        target.chooseToUse({name:'sha'},player,-1,'佯敌：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
        "step 1"
        if(result.bool==false&&target.countCards('he')>0){
            player.discardPlayerCard(target,target.hp,'he',true);
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
            },
            "元帅":{
                trigger:{
                    global:"drawAfter",
                },
                forced:true,
                logTarget:"player",
                filter:function (event,player){
        return event.result&&event.result.length>=2&&event.player!=player;
    },
                content:function (){
        'step 0'
        trigger.player.chooseCard(function(card){
            return trigger.result.contains(card);
        },'元帅：交给'+get.translation(player)+'一张牌',true);
        'step 1'
        if(result.bool){
            player.gain(result.cards,trigger.player);
            trigger.player.$give(1,player);
            var chat=['这是我的命令！'].randomGet()
                  player.say(chat);
        }
    },
            },
        },
        translate:{
            "图强":"图强",
            "图强_info":"锁定技：你的回合结束时，可以将武将牌翻面，然后摸取2张牌。",
            "变法":"变法",
            "变法_info":"锁定技：在你打出牌响应之前，若你的武将牌反面向上，你弃置一张手牌，然后将武将牌翻面以及摸取三张牌。",
            "义驰":"义驰",
            "义驰_info":"锁定技：出牌阶段限一次，你可以失去一点体力，然后令一名角色摸取两张牌。",
            "墨守":"墨守",
            "墨守_info":"锁定技：当你回合结束时，若你已受伤，你需要弃置等同于你当前体力值的牌并回血一点，第一次发动时永久获得【谦逊】、【空城】。",
            "梦蝶":"梦蝶",
            "梦蝶_info":"锁定技：当你回合结束时，你将武将牌翻面然后摸牌两张以及恢复一点体力，在你武将牌反面向上时，你无视诸多卡牌。",
            "法学":"法学",
            "法学_info":"出牌阶段限一次，你弃置一张牌并选择一名其他角色，对之造成一点伤害，然后其摸取一张牌，此时，若你的体力值大于等于目标的体力值，你可以摸取一张牌。",
            "大成":"大成",
            "大成_info":"锁定技：每当你获得手牌后，若此时你的手牌数大于你的体力值，你可以恢复一点体力。",
            "裨阖":"裨阖",
            "裨阖_info":"每当一名角色回合开始时，若你已受伤，你可以摸取等同于已损失体力值的牌，然后弃置一张牌。",
            "反应":"反应",
            "反应_info":"锁定技：当你被杀指定时，使用者需要弃置一张牌。",
            "王霸":"王霸",
            "王霸_info":"锁定技：当你于回合外失去手牌时，若你的手牌数不等于体力上限，你可以补充至体力上限。",
            "三迁":"三迁",
            "三迁_info":"锁定技，每当你体力减少时，你须摸一张牌并弃一张牌",
            "炼丹":"炼丹",
            "炼丹_info":"锁定技：出牌阶段，你可以将一张手牌当成无中生有使用。",
            "噬魂":"噬魂",
            "噬魂_info":"锁定技：在你的回合内，当你获得至少2张牌后，你需要失去一点体力然后摸取一张牌。",
            "胜天":"胜天",
            "胜天_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之",
            "舟水":"舟水",
            "舟水_info":"锁定技：每当一名角色判定阶段开始时，若你的已受伤，其需要弃置一张牌，然后你摸取一张牌。",
            "诱敌":"诱敌",
            "诱敌_info":"出牌阶段至多两次，你指定一名其他角色，令其对你使用一张杀，若其不对你使用，其弃置两张牌。",
            "伏袭":"伏袭",
            "伏袭_info":"锁定技：当你于你的回合内被杀指定为目标后，你可以对目标造成一点伤害然后其弃置一张牌，并且由你摸牌一张。",
            "無敵":"無敵",
            "無敵_info":"锁定技：你的手牌上限增加x点（x为你的体力值）。",
            "先機":"先機",
            "先機_info":"限定技：游戏开始时，你摸取三张牌。然后获得技能【神速】、【铁骑】。锁定技：你的回合开始时，摸取一张牌。",
            "诈利":"诈利",
            "诈利_info":"锁定技：当你于回合内被杀指定时，你令使用者弃置一张牌然后将武将牌翻面。",
            "佯敌":"佯敌",
            "佯敌_info":"出牌阶段一次，你指定一名其他角色，令其对你使用一张杀，若其不对你使用，其弃置x张牌（x为其当前体力值）。",
            "元帅":"元帅",
            "元帅_info":"锁定技，其他角色摸牌时，若摸牌数不少于2，须将摸到的牌中的一张交给你",
        },
    },
},files:{"character":["兵家·乐毅.jpg","儒家·孟轲.jpg","纵横·鬼谷子.jpg","法家·韩非.jpg","道家·庄周.jpg","墨家·墨翟.jpg","法家·卫鞅.jpg","阴阳·徐福.jpg","儒家·荀况.jpg","兵家·孙膑.jpg","兵家·白起.jpg","兵家·吴起.jpg"],"card":[],"skill":[]}}})