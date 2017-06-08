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
						cardPile:function(list){
							var List = [
								["diamond","1","zhuque","fire"],["diamond","2","tao"],["diamond","3","shan"],["diamond","4","shan"],
								["diamond","5","guanshi"],["diamond","6","shan"],["diamond","7","fal_qixingdao"],["diamond","8","fal_piao"],
								["diamond","9","sha"],["diamond","10","sha","fire"],["diamond","11","sha","fire"],["diamond","12","fangtian"],
								["diamond","13","fal_guo"],["diamond","1","fal_guo"],["diamond","2","shan"],["diamond","3","shunshou"],
								["diamond","4","shan"],["diamond","5","huogong"],["diamond","6","shan"],["diamond","7","sha"],
								["diamond","8","fal_piao"],["diamond","9","jiu"],["diamond","10","shan"],["diamond","11","shan"],
								["diamond","12","tao"],["diamond","13","wuxie"],
								["heart","1","taoyuan"],["heart","2","tao"],["heart","3","tao"],["heart","4","huogong"],
								["heart","5","chitu"],["heart","6","lebu"],["heart","7","shan"],["heart","8","wuzhong"],
								["heart","9","shan"],["heart","10","sha",'fire'],["heart","11","sha","fire"],["heart","12","guohe"],
								["heart","13","qilin"],["heart","1","wanjian"],["heart","2","tao"],["heart","3","tao"],
								["heart","4","yiyi"],["heart","5","wugu"],["heart","6","yiyi"],["heart","7","shan"],
								["heart","8","wuzhong"],["heart","9","shan"],["heart","10","sha"],["heart","11","sha"],
								["heart","12","wuxie"],["heart","13","fal_szbf"],
								["club","1","baiyin"],["club","2","renwang"],["club","3","fal_xlcd"],["club","4","sha",'thunder'],
								["club","5","dilu"],["club","6","sha"],["club","7","fal_syqj"],["club","8","fal_piao"],
								["club","9","sha"],["club","10","sha"],["club","11","sha"],["club","12","tiesuo"],
								["club","13","wuxie"],["club","1","juedou"],["club","2","tengjia","fire"],["club","3","guohe"],
								["club","4","shunshou"],["club","5","sha"],["club","7","sha","thunder"],["club","6","sha"],
								["club","8","fal_piao"],["club","9","sha","thunder"],["club","10","bingliang"],["club","11","shunshou"],
								["club","12","guohe"],["club","13","nanman"],
								["spade","1","shandian","thunder"],["spade","2","bagua"],["spade","3","fal_xlcd"],["spade","4","sha",'thunder'],
								["spade","5","jueying"],["spade","6","qinggang"],["spade","7","sha"],["spade","8","fal_piao"],
								["spade","9","sha",'thunder'],["spade","10","sha"],["spade","11","shunshou"],["spade","12","zhangba"],
								["spade","1","juedou"],["spade","2","hanbing"],["spade","3","shunshou"],["spade","4","guohe"],
								["spade","5","qinglong"],["spade","7","sha"],["spade","8","sha"],["spade","6","sha",'thunder'],
								["spade","9","jiu"],["spade","10","tiesuo"],["spade","11","sha"],["spade","12","wuxie"],
								["spade","13","nanman"],["spade","13","fal_mdxs"],
							];
							return lib.config['extension_勇斗地主_CardPile']?List:list;
						},
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
                            for(var i=0;i<game.players.length;i++)
                            	game.players[i].addSkill('fal_suo');
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
    
		},help:{},config:{"CardPile":{"name":"专属牌堆","init":true,"intro":"使用勇斗地主模式专用牌堆，牌堆结构可在帮助内容中查看"}},package:{
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
            "fal_guo":{
                type:"basic",
                fullimage:true,
                enable:true,
                usable:1,
                selectTarget:-1,
                filterTarget:function (card,player,target){
                    return target==player;
                },
                content:function (){
                    target.addSkill('falguo');
                },
                ai:{
                    basic:{
                        order:0.8,
                        useful:1,
                        value:1,
                    },
                    result:{
                        target:function (player,target){
                            var Limit = target.getHandcardLimit();
                            if(target.countCards('h')>Limit)
                                return Math.min(target.countCards('h')-Limit,target.maxHp-Limit);
                            else
                                return -1;
                        },
                    },
                },
            },
            "fal_szbf":{
                fullimage:true,
                type:"equip",
                subtype:"equip5",
                ai:{
                    basic:{
                        equipValue:8,
                    },
                },
                skills:["falszbf"],
            },
            "fal_mdxs":{
                type:"equip",
                subtype:"equip5",
                onLose:function (player){
                    if(player.storage.Skill!=false){
                        player.removeSkill(player.storage.Skill);
                        player.storage.Skill=false;
                        player.popup('fal_mdxs');
                    }
                },
                ai:{
                    basic:{
                        equipValue:7,
                    },
                },
                fullimage:true,
                skills:["falmdxs"],
            },
            "fal_qixingdao":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                ai:{
                    basic:{
                        equipValue:4,
                    },
                },
                skills:["falqxd"],
                fullimage:true,
            },
            "fal_syqj":{
                fullskin:true,
                type:"trick",
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target.identity!=player.identity;
    },
                enable:true,
                content:function (){
        'step 0'
        var list=['弃置装备','流失体力'];
        if(target.countCards('e')==0)
            list.remove('弃置装备');
        target.chooseControl(list,function(event,player){
            if(player.countCards('e')==0)
                return '流失体力';
            var value = 0,recover=0;
            var carde = player.getCards('e');
            var cardh = player.getCards('h');
            for(var i=0;i<carde.length;i++){
                switch(get.subtype(carde[i])){
                    case 'equip1':
                        value+=2;
                        break;
                    case 'equip2':
                        if(carde[i].name='tengjia')
                            value+=2;
                        else
                            value+=6;
                        break;
                    case 'equip 3':
                    case 'equip4':
                        value+=4;
                    case 'equip5':
                        value+=7;
                        break;
                }
            }
            for(var i=0;i<cardh.length;i++){
                if(cardh[i].name=='tao'||cardh[i].name=='jiu')
                    recover++;
            }
            if(value<6)return '弃置装备';
            if(player.hp>=3||recover>1)return '流失体力';
            return '弃置装备';
        }).set('prompt','水淹七军<p>选择弃置装备区的牌或流失一点体力？</p>');
        'step 1'
        if(result.control=='弃置装备'){
            target.discard(target.getCards('e'));
        }
        else {
            target.loseHp();
        }
    },
                ai:{
                    order:7,
                    value:4,
                    useful:2,
                    result:{
                        target:function (player,target){
                return -target.countCards('e');
            },
                    },
                },
            },
            "fal_xlcd":{
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('e')>0;
    },
                content:function (){
        'step 0'
        event.cards=get.cards(1);
        target.gain(event.cards);
        target.$gain2(event.cards);
        target.showCards(event.cards);
        'step 1'
        if(get.color(event.cards[0])=='red'){
            player.gainPlayerCard(target,'e',true);
        }
        else if(get.color(event.cards[0])=='black'){
            target.damage(player);
        }
        else 
            event.finish();
    },
                ai:{
                    order:5,
                    useful:4,
                    value:2,
                    tag:{
                        damage:1,
                    },
                    result:{
                        target:-1,
                    },
                },
                fullimage:true,
            },
            "fal_piao":{
                fullimage:true,
                type:"basic",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                content:function (){
        'step 0'
        var list=['摸牌'];
        if(target.storage.fal_suo.e1)list.push('开启武器栏');
        if(target.storage.fal_suo.e2)list.push('开启防具栏');
        if(target.storage.fal_suo.e3)list.push('开启坐骑栏');
        if(target.storage.fal_suo.e4)list.push('开启宝物栏');
        player.chooseControl(list,function(event,player){
            if(list.contains('开启防具栏')&&player.countCards('h',{subtype:'equip2'}))
                return '开启防具栏';
            if(list.contains('开启宝物栏')&&player.countCards('h',{subtype:'equip5'}))
                return '开启宝物栏';
            if(list.contains('开启坐骑栏')&&player.countCards('h',{subtype:'equip3'}))
                return '开启坐骑栏';
            if(list.contains('开启武器栏')&&player.countCards('h',{subtype:'equip1'}))
                return '开启武器栏';
            if(list.contains('开启坐骑栏')&&player.countCards('h',{subtype:'equip4'}))
                return '开启坐骑栏';
            if(list.contains('开启防具栏'))return '开启防具栏';
            if(list.contains('开启宝物栏'))return '开启宝物栏';
            if(list.contains('开启坐骑栏'))return '开启坐骑栏';
            if(list.contains('开启武器栏'))return '开启武器栏';
            return '摸牌';
        }).set('prompt','票<p>选择开启一项装备区栏位或摸一张牌</p>');
        'step 1'
        event.target.popup(result.control);
        switch(result.control){
            case '开启武器栏':
                target.storage.fal_suo.e1=false;
                break;
            case '开启防具栏':
                target.storage.fal_suo.e2=false;
                break;
            case '开启坐骑栏':
                target.storage.fal_suo.e3=false;
                break;
            case '开启宝物栏':
                target.storage.fal_suo.e4=false;
                break;
            default:
                target.draw();
                break;
        }
    },
                ai:{
                    basic:{
                        order:10,
                        value:function (card,player,i){
                var value=1;
                if(player.storage.fal_suo.e1)value+=2;
                if(player.storage.fal_suo.e2)value+=2;
                if(player.storage.fal_suo.e3)value+=2;
                if(player.storage.fal_suo.e4)value+=2;
                return value;
            },
                        useful:3,
                    },
                    result:{
                        target:2,
                    },
                },
            },
        },
        translate:{
            "fal_guo":"裹",
            "fal_guo_info":"出牌阶段对自己使用，本回合你的手牌上限等于你的体力上限。每回合限使用一张。",
            "fal_szbf":"孙子兵法",
            "fal_szbf_info":"<font color=#fc0>宝物</font>•当你成为锦囊牌的目标时，你可以进行一次判定，若判定牌的花色与此牌相同，则你令此牌无效。",
            "fal_mdxs":"孟德新书",
            "fal_mdxs_info":"<font color=#fc0>宝物</font>•回合结束时，你可以弃置一张手牌，依据此牌的花色获得一个你没有的技能直至你的下个回合开始：方片-奸雄，红心-反馈，梅花-刚烈，黑桃-放逐。",
            "fal_qixingdao":"七星宝刀",
            "fal_qixingdao_info":"<font color=#fc0>武器</font>•当你使用杀指定目标后，你可以令目标角色选择弃置一张牌或令你摸一张牌。",
            "fal_syqj":"水淹七军",
            "fal_syqj_info":"<font color=#fc0>锦囊</font>•出牌阶段，对与你势力不同的角色使用，这些角色选择弃置装备区的所有牌或失去一点体力。",
            "fal_xlcd":"笑里藏刀",
            "fal_xlcd_info":"<font color=#fc0>锦囊</font>•出牌阶段，对一名装备区有牌的其他角色使用，该角色摸一张牌并展示之，若展示牌的颜色为红色，你获得其装备区里的一张牌，若为黑色，你对其造成一点伤害。",
            "fal_piao":"票",
            "fal_piao_info":"出牌阶段对自己使用，摸一张牌或选择开启一项装备栏。",
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
                        player.choosePlayerCard(player,'j',true).set('prompt','选择要弃置的牌');
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
                    return event.player.countCards('he')>0&&event.card.name=='sha';
                },
                content:function (){
                    'step 0'
                    player.chooseControl('确定','取消',function(event,player){
                        var Eff = ai.get.damageEffect(trigger.player,player,player);
                        return Eff<=0?'确定':'取消';
                    }).set('prompt','是否对'+get.translation(trigger.player)+'发动【寒冰剑】,防止此伤害，改为弃置其两张牌？');
                    'step 1'
                    if(result.control=='确定'||player.storage.han==1){
                        if(player.storage.han==1)
                            player.line(trigger.player,'green');
                        else
                            player.logSkill('fal_hanbing',trigger.player);
                        player.discardPlayerCard(trigger.player,'he',true);
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
                usable:2,
                content:function (){
        var list=[];
        var names=['fal_piao'];
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
            falguo:{
                direct:true,
                temp:true,
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
                    player.removeSkill('falguo');
                },
                group:"falguo_Remove",
                subSkill:{
                    Remove:{
                        mod:{
                            maxHandcard:function (player,num){
                                return player.maxHp;
                            },
                        },
                    },
                },
            },
            falszbf:{
                priority:6,
                trigger:{
                    target:"useCardToBefore",
                },
                filter:function (event,player){
                    return get.type(event.card)=='trick'||get.type(event.card)=='delay';
                },
                check:function (event,player){
                    if(get.attitude(player,event.player)>0){
                        return false;
                    }
                    return true;
                },
                content:function (){
                    'step 0'
                    player.judge('fal_szbf',function(card){
                        return get.suit(card)==get.suit(trigger.card)?1.5:-0.5;
                    });
                    'step 1'
                    if(result.judge>0){
                        trigger.result={bool:true};
                        game.log('<font color=#0ee>'+get.translation(trigger.player)+'</font>使用的<font color=#ee0>'+get.translation(trigger.card)+'</font>失效');
                        trigger.untrigger();
                        trigger.finish();
                    }
                },
                ai:{
                    effect:{
                        target:1.5,
                    },
                },
            },
            falmdxs:{
                init:function (player){
                    player.storage.Skill=false;
                },
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (evnet,player){
                    if(player.countCards('h',{suit:'diamond'})&&!player.hasSkill('rejianxiong'))
                        return true;
                    if(player.countCards('h',{suit:'heart'})&&!player.hasSkill('fal_fankui'));
                        return true;
                    if(player.countCards('h',{suit:'club'})&&!player.hasSkill('reganglie'))
                        return true;
                    if(player.countCards('h',{suit:'spade'})&&!player.hasSkill('fangzhu'))
                        return true;
                    return false;
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseToDiscard('孟德新书<p>弃置一张手牌，获得一项技能直至下个回合开始</p>',1,'h',function(card){
                        var suit = get.suit(card);
                        switch(suit){
                            case 'diamond':
                                return !player.hasSkill('rejianxiong');
                                break;
                            case 'heart':
                                return !player.hasSkill('fal_fankui');
                                break;
                            case 'club':
                                return !player.hasSkill('reganglie');
                                break;
                            case 'spade':
                                return !player.hasSkill('fangzhu');
                                break;
                            default:
                                return false;
                                break;
                        }
                    }).ai=function(card){
                        return 8-ai.get.value(card);
                    };
                    'step 1'
                    if(result.bool){
                        player.logSkill('falmdxs');
                        switch(get.suit(result.cards[0])){
                            case 'diamond':
                                player.storage.Skill='rejianxiong';
                                break;
                            case 'heart':
                                player.storage.Skill='fal_fankui';
                                break;
                            case 'club':
                                player.storage.Skill='reganglie';
                                break;
                            case 'spade':
                                player.storage.Skill='fangzhu';
                                break;
                        }
                        player.addSkill(player.storage.Skill);
                        player.popup(player.storage.Skill);
                    }
                    else 
                        event.finish();
                },
                group:"falmdxs_Init",
                subSkill:{
                    Init:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                            return player.storage.Skill!=false;
                        },
                        content:function (){
                            player.removeSkill(player.storage.Skill);
                            player.storage.Skill=false;
                        },
                    },
                },
            },
            falqxd:{
                trigger:{
                    player:"shaBegin",
                },
                priority:6.5,
                logTarget:"target",
                content:function (){
                    "step 0"
                    trigger.target.chooseToDiscard('弃置一张手牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
                        var trigger=_status.event.getTrigger();
                        return -get.attitude(trigger.target,trigger.player)-get.value(card);
                    });
                    "step 1"
                    if(result.bool==false) player.draw();
                },
            },
            "fal_suo":{
                init:function (player){
        player.storage.fal_suo={
            e1:true,
            e2:true,
            e3:true,
            e4:true,
        };
    },
                mark:true,
                marktext:"锁",
                intro:{
                    content:function (storage,player){
            var str='<center>';
            str+=(player.storage.fal_suo.e1?'武器栏：锁<br/>':'武器栏：启<br/>');
            str+=(player.storage.fal_suo.e2?'防具栏：锁<br/>':'防具栏：启<br/>');
            str+=(player.storage.fal_suo.e3?'坐骑栏：锁<br/>':'坐骑栏：启<br/>');
            str+=(player.storage.fal_suo.e4?'宝物栏：锁<br/>':'宝物栏：启<br/>');
            str+='</center>';
            return str;
        },
                },
                mod:{
                    targetEnabled:function (card,player){
            var subtype = get.subtype(card);
            if(player.storage.fal_suo.e1&&subtype=='equip1')return false;
            if(player.storage.fal_suo.e2&&subtype=='equip2')return false;
            if(player.storage.fal_suo.e3&&(subtype=='equip1'||subtype=='equip4'))return false;
            if(player.storage.fal_suo.e4&&subtype=='equip5')return false;
        },
                    cardEnabled:function (card,player){
            var subtype = get.subtype(card);
            if(player.storage.fal_suo.e1&&subtype=='equip1')return false;
            if(player.storage.fal_suo.e2&&subtype=='equip2')return false;
            if(player.storage.fal_suo.e3&&(subtype=='equip3'||subtype=='equip4'))return false;
            if(player.storage.fal_suo.e4&&subtype=='equip5')return false;
        },
                },
            },
        },
        translate:{
            zhu:"地主",
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
            falguo:"裹",
            "falguo_info":"出牌阶段对自己使用，本回合你的手牌上限等于你的体力上限。每回合限使用一张。",
            falszbf:"孙子兵法",
            "falszbf_info":"",
            falmdxs:"孟德新书",
            "falmdxs_info":"",
            falqxd:"七星宝刀",
            "falqxd_info":"",
            "fal_suo":"装备区开启情况",
            "fal_suo_info":"",
        },
    },
},files:{"character":["fal_simayi.jpg"],"card":["fal_mdxs.jpg","fal_szbf.jpg","fal_piao.jpg","fal_qixingdao.jpg","fal_xlcd.jpg","fal_syqj.png","fal_guo.jpg"],"skill":[]}}})