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
                    're_caocao','re_simayi','re_guojia','re_zhangliao',
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
            },
            
        }
    }
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
        },
        translate:{
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
        },
        translate:{
            "fal_feiyang":"飞扬",
            "fal_feiyang_info":"<font color=#f00>地主技</font> 判定阶段开始时，若你的判定区有牌，你可以弃两张手牌并弃掉自己判定区的一张牌。每回合限一次。",
            "fal_bahu":"跋扈",
            "fal_bahu_info":"<font color=#f00>地主技</font> <font color=#0f0>锁定技</font> 准备阶段开始时，你摸一张牌；出牌阶段，你使用杀的次数上限+1。",
            "fal_die":"死亡",
            "fal_die_info":"",
        },
    },
},files:{"character":[],"card":[],"skill":[]}}})