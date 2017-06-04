game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"勇斗地主",content:function (config,pack){
    if(lib.brawl){
        lib.brawl.happyfal = {
            name:'勇斗地主',
            mode:'identity',
            intro:[
                '1.游戏开始后，玩家随机获得一个势力（地主或农民）；农民的胜利条件是击败地主，地主的胜利条件则是消灭所有农民',
                '2.游戏开始时，地主增加一点体力上限，并获得<font color=#0f0>地主专属</font>技能<font color=#fc0>【飞扬】</font>和<font color=#fc0>【跋扈】</font>',
                '3.农民死亡时，若游戏未结束，另一位农民可以立即选择摸两张牌或回复一点体力',
                '<font color=#fc0>【飞扬】</font>判定阶段开始时，你可以弃置两张手牌并弃置你判定区里的一张牌。每回合限一次。',
                '<font color=#fc0>【跋扈】</font>锁定技，准备阶段，你立即摸一张牌；出牌阶段，你使用杀的次数上限+1。'
            ],
            showcase:function(init){
                var node = this;
                var func=function(id,a,b,c){
                	var card=ui.create.player(null,true);
                	card.init(id);
                	card.node.hp.remove();
                	card.node.count.remove();
                	card.style.position='absolute';
                	card.style.zIndex=2;
                	card.style.transition='all 2s';
                	var rand1=a;
                	var rand2=b;
                	var rand3=c;
                	card.style.left='calc('+rand1+'% - '+(rand1*1.5)+'px)';
                	card.style.top='calc('+rand2+'% - '+(rand2*1.8)+'px)';
                	card.style.transform='scale(0.8) rotate('+rand3+'deg)';
                	node.appendChild(card);
                	ui.refresh(card);
                }
                if(init){
                    node.nodes=[];
                }
                else {
                    while(node.nodes.length){
                        node.nodes.shift().remove();
                    }
                }
                func('re_daqiao',25,0,5);
                func('wangyi',20,60,-2);
                func('zhangchunhua',30,70,10);
                func('caoang',75,0,5);
                func('zhangsong',70,60,-10);
                func('zhongyao',80,70,2);
            },
            content:{
                list:[
                    're_caocao','fal_simayi','re_guojia','re_zhangliao',
                    're_xuchu','re_xiahoudun','re_lidian','zhenji',
                    're_liubei','re_guanyu','re_zhangfei','re_zhaoyun',
                    're_machao','re_xushu','huangyueying','zhugeliang',
                    'sunquan','re_zhouyu','re_lvmeng','re_ganning',
                    're_huanggai','re_daqiao','sunshangxiang','re_lvbu',
                    're_huatuo','sp_diaochan','sp_zhangjiao','xiahouyuan',
                    'huangzhong','weiyan','sp_zhugeliang','pangtong',
                    'xunyu','dianwei','taishici','yanwen','pangde',
                    'zhurong','xuhuang','sunjian','dongzhuo','jiaxu',
                    'jiangwei','liushan','zhanghe','dengai','zhangzhang',
                    'sp_caiwenji','sunce','caozhang','guohuai','zhangchunhua',
                    'caozhi','caochong','xunyou','xin_masu','zhuran','xusheng',
                    'wuguotai','lingtong','liubiao','wangyi','yufan','chengong',
                    'bulianshi','handang','fuhuanghou','zhonghui','jianyong',
                    'madai','liufeng','guanzhang','guyong','caifuren','zhangsong',
                    'xiahoushi','panzhangmazhong','zhoucang','guanping','liaohua',
                    'chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu',
                    'zhongyao','liuchen','zhangyi','quancong','zhuzhi','gongsunyuan',
                    'guotufengji','xin_yujin','xin_liru','chenlin','caohong','liuxie',
                    'zhugejin','zhugeke','simalang','fuwan','caoang','sp_caoren','wutugu',
                    'lingcao','sunru','wenpin','wangji','chengyu','caochun','zhuling',
                    'miheng',
                ],
                /*cardPile:function(list){
                    var List = [
                        ["diamond","1","zhuque"],["diamond","2","tao"],["diamond","3","shunshou"],
                        ["diamond","4","huogong"],["diamond","5","sha","fire"],["diamond","6","sha"],
                        ["diamond","7","sha",'fire'],["diamond","8","shan"],["diamond","9","jiu"],
                        ["diamond","10","sha"],["diamond","11","shan"],["diamond","12","fangtian"],
                        ["diamond","13","zhuahuang"],["diamond","12","shan"],
                        ["heart","1","wanjian"],["heart","1","shan"],["heart","2","tao"],
                        ["heart","3","wugu"],["heart","3","huogong"],["heart","4","sha",'fire'],
                        ["heart","4","tao"],["heart","5","jueying"],["heart","5","qilin"],
                        ["heart","6","wuzhong"],["heart","6","lebu"],["heart","7","sha",'fire'],
                        ["heart","8","sha",'fire'],["heart","8","wuzhong"],["heart","9","sha"],
                        ["heart","9","tao"],["heart","10","tao"],["heart","10","shan"],
                        ["heart","11","shan"],["heart","11","shan"],["heart","12","guohe"],
                        ["heart","12","tao"],["heart","13","wuxie"],["heart","13","sha"],
                        ["heart","12","shan"],["heart","7","shan"],
                        ["club","1","juedou"],["club","2","renwang"],["club","3","sha",'thunder'],
                        ["club","4","sha",'thunder'],["club","5","sha",'thunder'],["club","6","sha"],
                        ["club","8","sha"],["club","9","jiu"],["club","10","tiesuo"],
                        ["club","11","wuxie"],["club","12","bingliang"],["club","13","nanman"],
                        ["spade","1","juedou"],["spade","2","bagua"],["spade","2","tengjia"],
                        ["spade","3","guohe"],["spade","3","guohe"],["spade","4","shunshou"],
                        ["spade","5","qinglong"],["spade","4","sha"],["spade","5","shunshou"],
                        ["spade","6","sha"],["spade","6","qinggang"],["spade","8","sha",'thunder'],
                        ["spade","8","sha"],["spade","7","nanman"],["spade","7","sha",'thunder'],
                        ["spade","9","jiu"],["spade","9","hanbing"],["spade","10","wuxie"],
                        ["spade","10","sha"],["spade","11","sha"],["spade","11","sha"],
                        ["spade","12","guohe"],["spade","12","zhangba"],["spade","13","tiesuo"],
                        ["spade","13","dawan"],["spade","1","shandian"],["club","7","shuiyanqijunx"],
                    ];
                    return List;
                },*/
                chooseCharacterFixed:true,
                chooseCharacterAi:function(player){
                    if(game.me.name)
                        _status.brawl.list.remove(game.me.name);
                    _status.brawl.list.randomSort();
                    player.init(_status.brawl.list.randomRemove());
                },
                chooseCharacter:function(){
                    _status.brawl.list.randomSort();
                    if(game.me==game.zhu){
                        var List1 = ['re_daqiao','wangyi','zhonghui','zhangchunhua','lingcao'];
                        var List2 = ['chenlin','chengyu','caochun','sunce','zhangsong'];
                        var List = _status.brawl.list.randomGets(3);
                        for(var i=0;i<List.length;i++){
                            for(var k=0;k<List1.length;k++){
                                if(List[i]==List1[k]){
                                    List1.remove(List1[k]);
                                    break;
                                }
                            }
                            for(var k=0;k<List1.length;k++){
                                if(List[i]==List2[k]){
                                    List2.remove(List2[k]);
                                    break;
                                }
                            }
                        }
                        List.push(List1.randomGets(1));
                        List.push(List2.randomGets(1));
                        List.randomSort();
                        return List;
                    }
                    return _status.brawl.list.randomGets(3);
                },
                gameStart:function(){
                    lib.translate.zhu = '地主';
                    lib.translate.fan = '农民';
                    if(game.me.identity!='fan'&&game.me.identity!='zhu')
                        game.me.identity = 'fan';
                    game.showIdentity();
                    game.zhu.addSkill('fal_feiyang');
                    game.zhu.addSkill('fal_bahu');
                    game.zhu.addSkill('fal_die');
                    game.zhu.maxHp++;
                    game.zhu.hp++;
                    game.zhu.update();
                }
            },
            init:function(){
                lib.configOL.number = 3;
              	lib.config.mode_config.identity.identity[1].remove('nei');
                lib.config.mode_config.identity.identity[1].push('fan');
                lib.skill.hanbing_skill=lib.skill.fal_hanbing;
                lib.skill.qilin_skill.filter=function(event,player){
                    if(player.hasSkillTag('jueqing'))return false;
                    return event.target.getCards('e',{subtype:['equip3','equip4']}).length>0;
                }
            },
        }
    }
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "fal_simayi":["male","wei",3,["fal_fankui","reguicai"],["des:斗地主模式专属武将"]],
        },
        translate:{
            "fal_simayi":"界司马懿",
        },
    },
    card:{
        card:{
            "fal_ql":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                ai:{
                    equipValue:function (card,player){
            return Math.min(2.5+player.countCards('h','sha'),4);
        },
                    basic:{
                        equipValue:3.5,
                    },
                },
                skills:["fal_ql_skill"],
                fullskin:true,
            },
        },
        translate:{
            "fal_ql":"青龙偃月刀",
            "fal_ql_info":"<font color=#0f0>锁定技</font> 出牌阶段，当你使用的杀被闪抵消时，此阶段你使用杀的次数上限+1。",
        },
        list:[],
    },
    skill:{
        skill:{
            "fal_feiyang":{
                trigger:{
                    player:"phaseJudgeBegin",
                },
                filter:function (event,player){
        return player.countCards('j')>0&&player.countCards('h')>=2;
    },
                content:function (){
        'step 0'
        player.chooseToDiscard('飞扬：你可以弃置两张手牌，然后弃置你判定区里的一张牌','h',2,true).ai = function(card){
            return 6-ai.get.value(card);
        };
        'step 1'
        if(result.bool){
            player.choosePlayerCard('j',player).set('prompt','选择要弃置的牌');
        }
        else 
            event.finish();
        'step 2'
        if(result.bool&&result.links.length){
            var link = result.links[0];
            player.discard(link);
        }
    },
            },
            "fal_bahu":{
                forced:true,
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
        player.draw();
    },
                group:"fal_bahu_bahu00",
                subSkill:{
                    "bahu00":{
                        mod:{
                            cardUsable:function (card,player,num){
                    if(card.name=='sha')return num+1;
                },
                        },
                    },
                },
            },
            "fal_die":{
                trigger:{
                    global:"dieBegin",
                },
                forced:true,
                direct:true,
                filter:function (event,player){
        return event.source;
    },
                content:function (){
        if(trigger.source.stat[trigger.source.stat.length-1].kill==undefined)
            trigger.source.stat[trigger.source.stat.length-1].kill = 1;
        else
            trigger.source.stat[trigger.source.stat.length-1].kill++;
        trigger.source = false;
    },
                group:"fal_die_die00",
                subSkill:{
                    "die00":{
                        trigger:{
                            global:"dieAfter",
                        },
                        forced:true,
                        direct:true,
                        content:function (){
                'step 0'
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].identity=='fan'){
                        player.storage.fan = game.players[i];
                        break;
                    }
                }
                if(player.storage.fan.identity=='fan'){
                    if(player.storage.fan.isDamaged()){
                        player.storage.fan.chooseControl('摸牌','回血','取消',function(event,player){
                            var cards = player.getCards('j');
                            var judge = false;
                            for(var i=0;i<cards.length;i++){
                                if(cards[i].name=='lebu'){
                                    judge = true;
                                    break;
                                }
                            }
                            if(_status.currentPhase!=player&&judge)return '回血';
                            if(player.hp==1)return '回血';
                            if(player.hasSkillTag('maixie'))return '回血';
                            return '摸牌';
                        });
                    }
                    else {
                        player.storage.fan.chooseControl('摸牌','取消',function(event,player){
                            return '摸牌';
                        });
                    }
                }
                else 
                    event.finish();
                'step 1'
                if(result.control=='摸牌')
                    player.storage.fan.draw(2);
                else if(result.control=='回血')
                    player.storage.fan.recover();
                else 
                    event.finish();
            },
                    },
                },
            },
            "fal_fankui":{
                audio:"refankui2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source.countCards('he')&&event.num>0);
    },
                content:function (){
        'step 0'
        player.chooseControl('确定','取消',function(event,player){
            if(get.attitude(trigger.source,player)>=6)return '取消';
            return '确定';
        }).set('prompt','是否对'+get.translation(trigger.source)+'发动【反馈】,获得其一张牌？');
        'step 1'
        if(result.control=='确定'){
            player.logSkill('fal_fankui',trigger.source);
            player.gainPlayerCard(trigger.source,'he',true);
        }
        else 
            event.finish();
        'step 2'
        trigger.num--;
        if(trigger.num>0)
            event.goto(0);
        else 
            event.finish();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player.countCards('he')>1&&get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(get.attitude(target,player)<0) return [1,1];
                }
            },
                    },
                },
            },
            "fal_hanbing":{
                init:function (player){
        player.storage.han = 2;
    },
                trigger:{
                    source:"damageBefore",
                },
                direct:true,
                filter:function (event,player){
        if(player.hasSkillTag('jueqing'))
            return false;
        return event.player.countCards('he')>0;
    },
                content:function (){
        'step 0'
        player.chooseControl('确定','取消',function(event,player){
            return '取消';
        }).set('prompt','是否对'+get.translation(trigger.player)+'发动【寒冰剑】,防止此伤害，改为弃置其两张牌？');
        'step 1'
        if(result.control=='确定'||player.storage.han==1){
            if(player.storage.han==1)
                player.line(trigger.player,'green');
            else
                player.logSkill('fal_hanbing',trigger.player);
            player.discardPlayerCard('he',trigger.player,1);
        }
        else 
            event.finish();
        'step 2'
        player.storage.han--;
        if(player.storage.han>0){
            event.goto(1);
        }
        else{
            player.storage.han = 2;
            trigger.untrigger();
            trigger.finish();
        }
    },
            },
            ceshi:{
                enable:"phaseUse",
                usable:1,
                content:function (){
        var list=[];
        var names=['qilin'];
        for(var i=0;i<ui.cardPile.childElementCount;i++){
            if(names.contains(ui.cardPile.childNodes[i].name)){
                list.push(ui.cardPile.childNodes[i]);
            }
        }
        if(list.length){
            player.gain(list.randomGet(),'draw');
        }
    },
            },
        },
        translate:{
            "fal_feiyang":"飞扬",
            "fal_feiyang_info":"<font color=#f00>地主技</font> 判定阶段开始时，若你的判定区有牌，你可以弃两张手牌并弃掉自己判定区的一张牌。每回合限一次。",
            "fal_bahu":"跋扈",
            "fal_bahu_info":"<font color=#f00>地主技</font> <font color=#0f0>锁定技</font> 准备阶段开始时，你摸一张牌；出牌阶段，你使用杀的次数上限+1。",
            "fal_die":"死亡",
            "fal_die_info":"",
            "fal_fankui":"反馈",
            "fal_fankui_info":"每当你受到1点伤害后，你可以获得伤害来源的一张牌。",
            "fal_hanbing":"寒冰剑",
            "fal_hanbing_info":"",
            ceshi:"测试",
            "ceshi_info":"每名角色的回合限一次，当你成为一名角色使用牌的目标后，若其的体力值大于你的体力值，你可以随机获得牌堆里一张你没有的基本牌",
        },
    },
},files:{"character":["fal_simayi.jpg"],"card":["fal_ql.png"],"skill":[]}}})