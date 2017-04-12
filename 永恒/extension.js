game.import("extension",{name:"永恒",content:function (config){
	lib.group.push('shen');
			lib.translate.shen='神';
			lib.translate.shenColor="#FFFF00",		
        	lib.skill._choince={
				trigger:{global:['gameDrawAfter','phaseBegin']},
				forced:true,
				unique:true,
				popup:false,
				silent:true,
				filter:function(event,player){
					return (player.group&&player.group=='shen');
				},			
				content:function(){
					"step 0"				
					var controls=[];
					for(var i in lib.character){ 
						if(!controls.contains(lib.character[i][1])&&lib.character[i][1]!='shen'){
							controls.push(lib.character[i][1]);  
						}
					}							
   				    var str='请选择一个势力';
					player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
						return Math.floor(Math.random()*controls.length);
					};
					"step 1"
					if(result.control){
						player.group=result.control;
						if(get.mode()=='guozhan'){
							player.identity=result.control;
							player._group=result.control;
							player.node.identity.firstChild.innerHTML=get.translation(result.control);
							player.node.identity.dataset.color=player.identity;		
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;				
						}
						else{
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;			
						}
					}
					"step 2"
					switch(player.group){
						case 'wei':player.node.name.dataset.nature='watermm';break;
						case 'shu':player.node.name.dataset.nature='soilmm';break;
						case 'wu':player.node.name.dataset.nature='woodmm';break;
						case 'qun':player.node.name.dataset.nature='metalmm';break;
						default:player.node.name.dataset.nature='fire';break;
					}	
				}			
			}
			lib.element.player.xdying=function(){
				"step 0"
				_status.dying=player;
				event.trigger('dying');
				game.log(player,'濒死')
				"step 1"
				if(_status.dying==player) delete _status.dying;
				var num=player.hp-player.storage.diy_xuelu;
				if(num<=0) player.die(event.reason);
			}    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            程序脑洞小儿:["none","shen",10,["牛角尖的愤怒","叛夫小儿","群之管理"],["forbidai"]],
            辅助典狱长:["none","shen",10,["魂锁","典狱长","信仰荣光","联盟之傲"],["forbidai"]],
            联机者饥荒:["none","shen",10,["荒芜","灾难饥荒","联机骁将"],["forbidai"]],
            管理员你过来:["none","shen",10,["皮鞭·狗链","锁链·麻绳","无视管理权威"],["forbidai"]],
            万恶的研究者组织:["none","shen",Infinity,["代码研究者"],["zhu","boss","bossallowed"]],
            数据考试墨懿:["none","shen",10,["RPG模式","商人拓展","墨考"],["forbidai"]],
            旁观星尘埃凌:["none","shen",10,["旁观","凌云","信仰星尘"],["forbidai"]],
            研究所毒瘤所长:["none","shen",10,["所长的红包","毒瘤","所长的办公室"],["forbidai"]],
            无良群主孤城:["none","shen",10,["脑洞BUG","游戏信仰","数据bug"],["forbidai"]],
            月之魔术师ZERO:["none","shen",10,["机关手法","不可能完成的魔术","滑翔翼"],["forbidai"]],
        },
        translate:{
            程序脑洞小儿:"程序脑洞小儿",
            辅助典狱长:"辅助典狱长",
            联机者饥荒:"联机者饥荒",
            管理员你过来:"管理员你过来",
            万恶的研究者组织:"万恶的研究者组织",
            数据考试墨懿:"数据考试墨懿",
            旁观星尘埃凌:"旁观星尘埃凌",
            研究所毒瘤所长:"研究所毒瘤所长",
            无良群主孤城:"无良群主孤城",
            月之魔术师ZERO:"月之魔术师ZERO",
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
            代码研究者:{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['无良群主孤城'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            脑洞BUG:{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
         return player!=target;
},
                content:function (){
        player.addSkill(target.skills);
        target.clearSkills();   
    },
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.num('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            游戏信仰:{
                group:["youxixinyang2","youxixinyang3","youxixinyang4","youxixinyang5","youxixinyang6","youxixinyang8"],
                trigger:{
                    player:"loseHpBefore",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
return Math.random()<=1;
},
                content:function (){
player.logSkill('游戏信仰')
trigger.untrigger();
trigger.finish();  
},
            },
            youxixinyang2:{
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.type(card)=='delay'){
                return false;
            }
        },
                },
            },
            youxixinyang3:{
                trigger:{
                    player:"phaseDiscardBefore",
                },
                forced:true,
                content:function (){
    trigger.untrigger();
    trigger.finish();
},
            },
            youxixinyang4:{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-999;
        },
                },
            },
            youxixinyang5:{
                trigger:{
                    player:"useCard",
                },
                forced:true,
                priority:10,
                filter:function (event){
        return event.card.name=='sha';
    },
                content:function (){
        player.addTempSkill('unequip','useCardAfter');
    },
            },
            youxixinyang6:{
                trigger:{
                    player:"gainEnd",
                },
                forced:true,
                filter:function (event,player){
return Math.random()<=0.2;
},
                content:function (){
       player.draw();
},
            },
            youxixinyang7:{
                trigger:{
                    source:"damageBefore",
                },
                forced:true,
                priority:16,
                check:function (){return false;},
                content:function (){
        trigger.untrigger();
        trigger.finish();
        var ex=0;
        if(trigger.card&&trigger.card.name=='sha'){
            if(player.hasSkill('jiu')) ex++;
            if(player.hasSkill('luoyi2')) ex++;
            if(player.hasSkill('reluoyi2')) ex++;
        }
        trigger.player.loseMaxHp(trigger.num+ex);
    },
            },
            youxixinyang8:{
                trigger:{
                    player:"equipBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.num('e',{type:'equip'})&&get.type(event.card)== 'equip';
    },
                content:function (){
        "step 0"
        trigger.untrigger();
        trigger.finish();
        player.$equip(trigger.card);
        game.addVideo('equip',player,get.cardInfo(trigger.card));
        game.log(player,'装备了',trigger.card);
        "step 1"
        var info=get.info(trigger.card);
        if(info.onEquip&&(!info.filterEquip||info.filterEquip(trigger.card,player))){
            var next=game.createEvent('equip_'+trigger.card.name);
            next.setContent(info.onEquip);
            next.player=player;
            next.trigger.card=trigger.card;
            game.delayx();
        }
        delete player.equiping;
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(get.type(card)=='equip') return[1,10];
            },
                    },
                },
            },
            数据bug:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','研究所毒瘤所长','程序脑洞小儿','月之魔术师ZERO','联机者饥荒','旁观者尘埃凌','辅助典狱长','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            所长的红包:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function (){
var n=[1,2,4].randomGet();
if(n==1) trigger.source.damage(10);
if(n==2) trigger.source.die();
if(n==4) trigger.source.turnOver();
},
            },
            毒瘤:{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
     return Math.random()<=0.5;
},
                content:function (){
     trigger.player.damege();
     player.recover();
},
            },
            所长的办公室:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','无良群主孤城','程序脑洞小儿','月之魔术师ZERO','联机者饥荒','旁观者尘埃凌','辅助典狱长','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
                group:"bangongshi2",
            },
            牛角尖的愤怒:{
                enable:"phaseUse",
                position:"he",
                filterCard:true,
                selectCard:[1,Infinity],
                prompt:"弃置任意张牌并摸等量的牌",
                check:function (card){
        return 6-ai.get.value(card)
    },
                content:function (){
        player.draw(cards.length);
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
                group:["fennuniujiao2","fennuniujiao3"],
            },
            fennuniujiao2:{
                trigger:{
                    player:"turnOverBefore",
                },
                forced:true,
                content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                ai:{
                    noturnOver:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'turnOver')) return [0,0];
            },
                    },
                },
            },
            fennuniujiao3:{
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.type(card)=='delay'){
                return false;
            }
        },
                },
            },
            叛夫小儿:{
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                filter:function (event,player){
return get.type(event.card)=='basic';
},
                content:function (){
player.useCard(trigger.card,trigger.targets,false)._triggered=null;
player.useCard(trigger.card,trigger.targets,false)._triggered=null;
player.useCard(trigger.card,trigger.targets,false)._triggered=null;
},
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
            },
            群之管理:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','无良群主孤城','研究所毒瘤所长','月之魔术师ZERO','联机者饥荒','旁观者尘埃凌','辅助典狱长','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            bangongshi2:{
                trigger:{
                    player:"loseHpBefore",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
return Math.random()<=1;
},
                content:function (){
player.logSkill('bangongshi2')
trigger.untrigger();
trigger.finish();
    },
            },
            魂锁:{
                trigger:{
                    player:"drawEnd",
                },
                forced:true,
                content:function (){
        player.changeHujia(5);
    },
            },
            典狱长:{
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                selectTarget:[1,2],
                content:function (){
      "step 0"
      target.turnOver();
      target.loseMaxHp();
      "step 1"  
      player.draw(1);
    },
            },
            信仰荣光:{
                group:"xinyangrongguang2",
                trigger:{
                    player:"turnOverBefore",
                },
                forced:true,
                content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                ai:{
                    noturnOver:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'turnOver')) return [0,0];
            },
                    },
                },
            },
            xinyangrongguang2:{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-500,
                content:function (){
if(trigger.num>1) trigger.num=1
},
            },
            联盟之傲:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','无良群主孤城','研究所毒瘤所长','月之魔术师ZERO','联机者饥荒','旁观者尘埃凌','程序脑洞小儿','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            旁观:{
                enable:"phaseUse",
                usable:1,
                changeSeat:true,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.gain(target.get('h'));
        target.$give(target.num('h'),player);
    },
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.num('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            凌云:{
                trigger:{
                    player:"phaseUseBefore",
                },
                content:function (){
    for(var i=0;i<game.players.length;i++){
        if(game.players[i]!=player){
            game.players[i].loseMaxHp(1);
        };
    };
},
            },
            信仰星尘:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','无良群主孤城','研究所毒瘤所长','月之魔术师ZERO','联机者饥荒','辅助典狱长','程序脑洞小儿','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            RPG模式:{
                trigger:{
                    global:"recoverBefore",
                },
                forced:true,
                filter:function (event,player){
    return player!=event.player;
},
                content:function (){
     trigger.untrigger();
     trigger.finish();
     player.recover();
},
            },
            商人拓展:{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
var n=[1,2,3,4].randomGet();
if(n==1) trigger.player.die();
if(n==2) trigger.player.loseMaxHp();
if(n==3) trigger.player.skip('phase');
if(n==4) player.addTempSkill(trigger.player.skills.randomGet());
},
            },
            墨考:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['旁观者尘埃凌','无良群主孤城','研究所毒瘤所长','月之魔术师ZERO','联机者饥荒','辅助典狱长','程序脑洞小儿','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            机关手法:{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
         return player!=target;
},
                content:function (){
       if(event.target){
            var es=event.target.get('e');
            if(es.length){
                event.target.discard(es);
            }
        }  
    },
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.num('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            不可能完成的魔术:{
                group:"bukenengwanchengdemoshu2",
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event){
        return event.source&&event.nature=='thunder';
    },
                prompt:function (event){
        return get.translation(event.source)+'即将对'+get.translation(event.player)+'造成伤害，'+get.prompt('不可能完成的魔术');
    },
                content:function (){
     trigger.num+=9;
    },
            },
            bukenengwanchengdemoshu2:{
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event){
        return event.source&&event.nature=='fire';
    },
                prompt:function (event){
        return get.translation(event.source)+'即将对'+get.translation(event.player)+'造成伤害，'+get.prompt('不可能完成的魔术');
    },
                content:function (){
     trigger.num+=5;
     player.recover(9);
    },
            },
            滑翔翼:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','无良群主孤城','研究所毒瘤所长','程序脑洞小儿','联机者饥荒','旁观者尘埃凌','辅助典狱长','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            皮鞭·狗链:{
                trigger:{
                    player:"phaseUseBefore",
                },
                content:function (){
    for(var i=0;i<game.players.length;i++){
        if(game.players[i]!=player){
        game.players[i].turnOver();    
        };
    };
},
                mod:{
                    targetEnabled:function (card,player,target){
            if(card.name=='sha'){
                return false;
            }
        },
                },
            },
            锁链·麻绳:{
                trigger:{
                    global:"drawBefore",
                },
                forced:true,
                filter:function (event,player){
   return player!=event.player&&Math.random()<=0.9;
},
                content:function (){
trigger.untrigger();
trigger.finish();
     player.recover();
     player.draw();
},
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.type(card)=='delay'){
                return false;
            }
        },
                },
            },
            无视管理权威:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','无良群主孤城','研究所毒瘤所长','月之魔术师ZERO','联机者饥荒','旁观者尘埃凌','辅助典狱长','程序脑洞小儿'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
            荒芜:{
                trigger:{
                    player:["useCard","respondAfter"],
                },
                direct:true,
                unique:true,
                content:function (){
        "step 0"
        game.delay(0.5);
        player.chooseTarget(get.prompt('荒芜'),function(card,player,target){
            return player!=target;
        }).ai=function(target){
            if(target.isTurnedOver()) return -1;
            return 1;
        }
        "step 1"
        if(result.bool){
            player.logSkill('荒芜',result.targets,'thunder');
            result.targets[0].loseHp();
        }
    },
                ai:{
                    effect:{
                        player:function (card){
                if(get.color(card)=='black'){
                    return [1,2];
                }
            },
                    },
                },
            },
            灾难饥荒:{
                trigger:{
                    global:"loseHpBefore",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
    return Math.random()<=0.7;
},
                content:function (){
      trigger.num++;
},
            },
            联机骁将:{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                forced:true,
                popup:false,
                content:function (){
        player.init(['数据考试墨懿','无良群主孤城','研究所毒瘤所长','月之魔术师ZERO','程序脑洞小儿','旁观者尘埃凌','辅助典狱长','管理员你过来'].randomGet());
        game.addVideo('reinit2',player,player.name);
    },
            },
        },
        translate:{
            代码研究者:"代码研究者",
            代码研究者_info:"游戏开始时，你化身为伟大的万恶组织头领",
            脑洞BUG:"脑洞BUG",
            脑洞BUG_info:"出牌阶段，指定一名角色获得其全部技能，然后令其失去所有非锁定技能",
            游戏信仰:"游戏信仰",
            游戏信仰_info:"你免疫体力流失伤害，你不能成为延迟类锦囊的目标，你永远跳过弃牌阶段，你与其他角色计算距离始终为1，你无视其防具，你获得牌后20%在此获得1张牌，当你使用杀造成伤害后取消伤害让其失去1点体力上限，你可以装备任意数量的装备牌",
            youxixinyang2:"游戏信仰",
            youxixinyang2_info:"锁定技，你不能成为延时类锦囊的目标",
            youxixinyang3:"游戏信仰",
            youxixinyang3_info:"你始终跳过弃牌阶段",
            youxixinyang4:"游戏信仰",
            youxixinyang4_info:"当计算你与其它角色的距离时，始终-4",
            youxixinyang5:"游戏信仰",
            youxixinyang5_info:"",
            youxixinyang6:"游戏信仰",
            youxixinyang6_info:"获得牌后，50%概率摸一张牌<br>回复体力后，50%概率增加一点体力上限并回复一点体力<br>失去牌后，50%概率将手牌补至体力上限<br>受到伤害后，50%概率回复一点体力<br>结束阶段，50%概率进行额外一个回合",
            youxixinyang7:"游戏信仰",
            youxixinyang7_info:"锁定技，你即将造成的伤害均视为失去体力。",
            youxixinyang8:"游戏信仰",
            youxixinyang8_info:"你可以额外装备任意数量的装备",
            数据bug:"数据bug",
            数据bug_info:"当你受到伤害或体力流失后，你随机变身研究者组织中的一员",
            所长的红包:"所长的红包",
            所长的红包_info:"每当你受到伤害后，可以令对你造成伤害的角色随机进行下列一项，1.受到10点伤害  2.死亡  3.翻面",
            毒瘤:"毒瘤",
            毒瘤_info:"当你造成伤害后，50%对其再次造成伤害，然后你回复1点体力",
            所长的办公室:"所长的办公室",
            所长的办公室_info:"当你受到伤害后，你随机化身一名办公室领导，你免疫体力流失伤害",
            牛角尖的愤怒:"牛角尖的愤怒",
            牛角尖的愤怒_info:"出牌阶段，你可以弃置任意张牌并摸等量的牌，不限次数，你不能成为延迟类锦囊的目标，当你被翻面时取消之",
            fennuniujiao2:"牛角尖的愤怒",
            fennuniujiao2_info:"你拥有邪神面具的效果",
            fennuniujiao3:"牛角尖的愤怒",
            fennuniujiao3_info:"锁定技，你不能成为延时类锦囊的目标",
            叛夫小儿:"叛夫小儿",
            叛夫小儿_info:"你使用的基本牌均结算4次，你使用或打出杀无次数限制",
            群之管理:"群之管理",
            群之管理_info:"当你收到伤害或体力流失后，你随机化身一名研究者组织核心成员",
            bangongshi2:"所长的办公室",
            bangongshi2_info:"你免疫体力流失伤害",
            魂锁:"魂锁",
            魂锁_info:"回合开始阶段，你获得5点护甲",
            典狱长:"典狱长",
            典狱长_info:"出牌阶段你可以并指定1,2名角色，其翻面并减少1点体力上限，然后你摸一张牌",
            信仰荣光:"信仰荣光",
            信仰荣光_info:"当你被翻面时取消之，你收到的伤害最多为1",
            xinyangrongguang2:"信仰荣光",
            xinyangrongguang2_info:"你受到的伤害至多为1<br>你始终跳过弃牌阶段",
            联盟之傲:"联盟之傲",
            联盟之傲_info:"当你收到伤害或体力流失后，你随机化身一名研究者组织核心成员",
            旁观:"旁观",
            旁观_info:"出牌阶段，你可获得一名角色角色的全部手牌",
            凌云:"凌云",
            凌云_info:"你的回合开始阶段，让所有角色失去1点体力上限",
            信仰星尘:"信仰星尘",
            信仰星尘_info:"当你收到伤害或体力流失后，你随机化身一名研究者组织核心成员",
            RPG模式:"RPG模式",
            RPG模式_info:"当一名其他角色回复体力时，终止其回复，然后你摸2张牌",
            商人拓展:"商人拓展",
            商人拓展_info:"你造成伤害后，受伤角色随机执行一项，1.死亡 2.失去1点体力上限.3.失去下一个回合.4.你随机获得其一项技能",
            墨考:"墨考",
            墨考_info:"当你收到伤害或体力流失后，你随机化身一名研究者组织核心成员",
            机关手法:"机关手法",
            机关手法_info:"出牌阶段，指定一名角色让其失去装备区里的所有牌",
            不可能完成的魔术:"不可能完成的魔术",
            不可能完成的魔术_info:"当一名角色造成雷电伤害时，你可以令该伤害加9，每当有其他角色受到火焰伤害时，你可以令该伤害+5，然后你回复9点体力",
            bukenengwanchengdemoshu2:"不可能完成的魔术",
            bukenengwanchengdemoshu2_info:"",
            滑翔翼:"滑翔翼",
            滑翔翼_info:"当你收到伤害或体力流失后，你随机化身一名研究者组织核心成员",
            皮鞭·狗链:"皮鞭·狗链",
            皮鞭·狗链_info:"你摸完牌之后你可以让全场翻面，你不能成为杀的目标",
            锁链·麻绳:"锁链·麻绳",
            锁链·麻绳_info:"当一名其他角色摸牌时，90%概率终止结算，然后你回复一点体力摸一张牌，延迟类锦囊不能选你为目标",
            无视管理权威:"无视管理权威",
            无视管理权威_info:"当你收到伤害或体力流失后，你随机化身一名研究者组织核心成员",
            荒芜:"荒芜",
            荒芜_info:"每当你使用或打出1张牌时，你可以对一名角色造成1点体力流失伤害",
            灾难饥荒:"灾难饥荒",
            灾难饥荒_info:"每当一名角色受到体力流失伤害时，70%令其在此伤害+1",
            联机骁将:"联机骁将",
            联机骁将_info:"当你收到伤害或体力流失后，你随机化身一名研究者组织核心成员",
        },
    },
},files:{"character":[],"card":[],"skill":[]}})