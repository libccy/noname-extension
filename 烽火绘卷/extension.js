game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"烽火绘卷",content:function (config,pack){
lib.characterTitle.ex_guojia='#b十胜十败论';
lib.characterTitle.ex_jiangwei='#r炎祚昏覆';    
lib.characterTitle.ex_zhouyu='#g虎帐谈兵';
lib.characterTitle.ex_lvbu='#y修罗';
lib.characterTitle.ex_zhangyue='#r克从大业';
lib.characterTitle.ex_majunjian='#r燎发摧枯';
lib.characterTitle.ex_sunhuan='#g克堪厥任';
lib.characterTitle.ex_zhujun='#y举烈摧坚';
lib.characterTitle.ex_panhuanghou='#g霓虹一时';
lib.characterTitle.ex_qijin='#y鸾凤和鸣';
lib.characterTitle.sk_zuoci='#y幻化众生';
lib.characterTitle.ex_xiahouen='#b可堪大任';
},precontent:function (fenghuo){
       if(fenghuo.enable){		
            game.import('character',function(){
                var fenghuo = {
                    name: 'fenghuo',
                    connect:true,
        character:{
            "ex_guojia":["male","wei",3,["ex_tiandu","ex_yiji"],[]],
            "ex_jiangwei":["male","shu",3,["ex_guanxing","ex_yanzuo"],[]],
            "ex_zhouyu":["male","wu",3,["ex_xiongzi","ex_lietu"],[]],
            "ex_lvbu":["male","qun",4,["ex_niwu","ex_sheji"],[]],
            "ex_sunhuan":["male","wu",4,["ex_renxian"],[]],
            "ex_zhujun":["male","qun",4,["ex_julie","ex_shenduan"],[]],
            "ex_zhangyue":["male","shu",4,["ex_rongshou"],[]],
            "ex_xiahouen":["male","wei",4,["ex_xiefen","ex_shifu"],[]],
            "ex_panhuanghou":["female","wu",3,["ex_jinjiu","ex_liuhuan"],[]],
            "ex_majunjian":["male","shu",3,["ex_hezong","ex_shanmou","ex_liepo"],[]],
            "ex_qijin":["male","qun",3,["ex_liangqin","ex_jiuyi"],[]],
            "ex_dongzhao":["male","wei",3,["ex_jinshou","ex_weixun","ex_quanbian"],[]],
            "sk_zuoci":["male","qun",3,["ex_qianhuan"],[]],           
        },
        characterIntro:{
	       "ex_zhujun":"朱儁出身寒门，赡养母亲，以好义轻财闻名，受乡里敬重。后被太守徐珪举为孝廉，任兰陵令，颇有治绩。再升任交州刺史，以家兵五千大破叛军，平定交州。战后以功封都亭侯，入朝为谏议大夫。光和七年（184年），黄巾起义爆发，朱儁以右中郎将、持节平定三郡之地，以功进封西乡侯，迁镇贼中郎将。又率军讨平南阳黄巾。中平二年（185年），进拜右车骑将军，更封钱塘侯。后为河内太守，击退进逼的张燕。董卓秉政时，想任朱儁为副手，遭其婉拒。其后出逃荆州，更屯军中牟，徐州刺史陶谦等欲推举他为太师，并传檄各州牧伯，相邀讨伐李傕、奉迎天子。但朱儁却奉诏入京任太仆。初平三年（192年），升任太尉、录尚书事。兴平元年（194年），行骠骑将军事，持节镇关东，因故未成行。兴平二年（195年），李傕与郭汜相互攻杀，郭汜扣留朱儁作为人质。朱儁性格刚烈，即日发病而死。",
       	"ex_majunjian":"汉中有奇人，其名曰:俊坚。俊坚好游，一日，其玩三国杀，择张宝，披藤甲而连己身，欲焚己而破敌也，岂料，敌未破，己身亡！悔之晚矣！",
       	"ex_qijin":"郎骑竹马来，绕床弄青梅。同居长干里，两小无嫌猜。",
       	"ex_panhuanghou":"潘皇后，会稽句章（今浙江省宁波市）人，吴大帝孙权的皇后，吴少帝孙亮的母亲。潘淑少时与姐俱没入织室，后蒙帝宠为妃，生下儿子孙亮。赤乌十三年（250年）孙权废太子孙和，立孙亮为皇太子。翌年（251年）立潘淑为皇后。神凤元年（252年）去世，帝后合葬蒋陵。",
       	"ex_sunhuan":"孙桓（198年-223年），字叔武，吴郡富春（今浙江杭州富阳区）人。三国时期吴国建武将军，孙河第三子。仪容端正，器怀聪明，博学强记，能论议应对，孙权常称为“宗室颜渊”，擢为武卫都尉。建安二十四年（219年），参与由吕蒙指挥的袭击荆州行动，从讨关羽于华容，招揽关羽余众，得五千人以及大量牛马器械。黄武元年（222年），孙桓二十五岁，拜安东中郎将，跟随陆逊抗击进攻东吴的刘备。当时刘备率领众多兵众进攻，满山都是蜀军，孙桓奋战，与陆逊等协力击破蜀军。刘备兵败逃走，孙桓截击，“斩上夔道，扼要径”，差点生擒刘备。战后孙桓因功拜建武将军，封丹徒侯，督牛渚，修筑横江坞，期间逝世。",
        "ex_xiahouen":"夏侯恩是古典小说《三国演义》中的人物，正史中其真名叫夏侯廉。为曹操随身之背剑心腹。曹操有宝剑二口：一名“倚天剑”，一名“青釭剑”。倚天剑镇威，青釭剑杀人。倚天剑曹操自佩之，青釭剑令夏侯恩佩之。那青釭剑削铁如泥，锋利无比。《三国演义》第四十一回《刘玄德携民渡江 赵子龙单骑救主》中描写：当时夏侯恩自恃勇力，背着曹操，只顾引人抢夺掳掠。不想撞着赵云，被他一枪刺死。青釭剑自此归赵云所有。",
	       "ex_zhangyue":"虚构人物，出自【大谋小计五十年：诸葛亮传】，南蛮人士，原名龙佑那，诸葛亮七擒孟获后感召归降诸葛亮，后改名张钺，随诸葛亮北伐。",
	       	             },
        skill:{
					ex_quanbian:{
						audio:"ext:烽火绘卷:2",
				trigger:{global:'damageAfter'},
				 filter:function(event,player){
					 return _status.currentPhase!=event.source;
				  },
     check:function(event,player){
      return get.attitude(player,event.source)<0;
      },						
						content:function(){
							'step 0'
							player.chooseToCompare(trigger.source);
							'step 1'
							if(result.bool){
								player.draw(2);
							}
							else{
								trigger.source.draw(2);
							}
						},	
						ai:{
							expose:0.2
						}
					},        
			ex_jinshou:{
			  audio:"ext:烽火绘卷:2",
    enable:'phaseUse',
    usable:1,
						filterTarget:1,						
						content:function(){
							"step 0"
							player.addSkill('ex_jinshou1');
							target.damage();
							"step 1"
     target.draw(2);
					 "step 2"
					if(!player.hasSkill('ex_jinshou1')){
						player.loseHp();
					}
					else{
						player.removeSkill('ex_jinshou1');
					}     
						},
				ai:{
					order:8,
					threaten:1.8,
					result:{
						target:-1
					}
				},
			},		        
			ex_jinshou1:{
				trigger:{global:'dieAfter'},
				priority:32,
				silent:true,
				filter:function(event,player){
					return event.reason&&event.reason.getParent().name=='ex_jinshou';
				},
				content:function(){
					player.removeSkill('ex_jinshou1');
				}
			},  
			ex_weixun:{
			 audio:"ext:烽火绘卷:2",
				trigger:{source:'damageBefore'},
				direct:true,
				content:function(){
    'step 0'
   player.chooseTarget('魏勋</br></br><div class="center text">选择一名其他角色，成为伤害的来源</div>',function(card,player,target){return target!=player}).set('ai',function(target){
					return -get.attitude(_status.event.player,target);
					});
    'step 1'
   if(result.bool){
    trigger.source=result.targets[0];
    }
				}
			},			      
            "ex_liangqin":{
                audio:"ext:烽火绘卷:2",
                enable:"phaseUse",
                usable:1,
                selectCard:2,
                complexCard:true,
                filterCard:function (card) {
        if(ui.selected.cards.length) {
          return get.color(card) !== get.color(ui.selected.cards[0]);
        }
        return true;
      },
                position:"he",
                selectTarget:-1,
                filterTarget:true,
                check:function (card) {
        return 5 - get.value(card);
      },
                contentBefore:function () {
        'step 0'
        player.storage.ex_liangqin = false;
        player.chooseControl('失去体力', '回复体力', function (event, player) {
          var mehp = game.players.reduce(function (hps, current) {
            if(get.attitude(player, current) > 0) return hps + current.hp;
            return hps;
          }, 0), emhp = game.players.reduce(function (hps, current) {
            if(get.attitude(player, current) < 0) return hps + current.hp;
            return hps;
          }, 0);
          game.log(emhp, mehp, mehp < emhp ? '回复体力' : '失去体力');
          return mehp < emhp ? '回复体力' : '失去体力';
        });
        'step 1'
        player.storage.ex_liangqin = (result.control === '回复体力');
      },
                content:function () {
        if(player.storage.ex_liangqin) {
          target.recover();
        } else {
          target.loseHp();
        }
      },
                ai:{
                    order:2,
                    result:{
                        player:1,
                    },
                },
            },       
        "ex_qianhuan":{
				audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"phaseBegin",
                    global:"gameDrawBegin",
                },
                forced:true,
                unique:true,
                priority:-333,
                init:function (player){
        player.storage.SE_fenpei=[];
        player.storage.fenpei={
            list:[],
            owned:{},
            player:player,
        }
    },
                content:function (){
        "step 0"                            
        if(get.config('double_character')||lib.config.mode=='guozhan'){
            event.num=4;
        }
        else{
            event.num=2;
        }
        var players=[];                            
        var slist=player.storage.fenpei.owned;
        for(var i in lib.character){
            players.push(i);
        }            
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;
            players.remove([game.players[i].name]);
            players.remove([game.players[i].name1]);
            players.remove([game.players[i].name2]);
        }                                            
        players.remove(player.name);
        var list=players.randomGets(3);
        event.list=list;
        var list=[];
        for(var i=0;i<player.storage.SE_fenpei.length;i++){
            list.push(player.storage.SE_fenpei[i]);
        }
        if(list.length){
            for(var i=0;i<list.length;i++){    
                player.removeSkill(list[i]);
            }
            event.list.push(player.name);
        }    
        player.storage.SE_fenpei=[];
        "step 1"
        for(var i=0;i<event.list.length;i++){    
            var skills=lib.character[event.list[i]][3].slice(0);
            for(var j=0;j<skills.length;j++){
                if(!lib.translate[skills[j]+'_info']){
                    skills.splice(j--,1);
                }
                var info=lib.skill[skills[j]];
                if(info&&info.unique){
                    skills.splice(j--,1);
                }    
                if(player.skills.contains(skills[j])) skills.splice(j--,1);
            }
            player.storage.fenpei.owned[event.list[i]]=skills;
        }                                
        var list=[];
        for(var i=0;i<event.list.length;i++){
            var skills=lib.character[event.list[i]][3];
            for(var j=0;j<skills.length;j++){
                var info=lib.skill[skills[j]];
                if(!lib.translate[skills[j]+'_info']) continue;    
                if(info&&info.unique) continue;        
                if(player.skills.contains(skills[j])) continue;
                list.push(skills[j]);
            }
        }                            
        if(!list.length){
            var list=[];
            for(var i=0;i<player.storage.SE_fenpei.length;i++){
                list.push(player.storage.SE_fenpei[i]);
            }
            if(list.length){
                lib.character[player.name][3]=list;
            }    
            event.finish();
        }
        else{
            if(event.isMine()){
                var slist=player.storage.fenpei.owned;
                event.dialog=ui.create.dialog('选择获得技能',[event.list,'character'],true);
                event.control=ui.create.control();
                event.clickControl=function(link){
                    if(!player.skills.contains(link)){
                        var currentname=event.dialog.querySelector('.selected.button').link;
                        event.num--;
                        player.addSkill(link);
                        player.popup(link);
                        player.storage.SE_fenpei=player.storage.SE_fenpei.concat(link);                                
                    }
                    ui.auto.show();
                    event.dialog.close();
                    event.control.close();
                    game.resume();                                        
                };
                event.control.custom=event.clickControl;
                ui.auto.hide();
                game.pause();
                for(var i=0;i<event.dialog.buttons.length;i++){
                    event.dialog.buttons[i].classList.add('selectable');
                }
                event.custom.replace.button=function(button){
                    if(button.classList.contains('selected')){
                        button.classList.remove('selected');
                        event.control.style.opacity=0;
                    }
                    else{
                        for(var i=0;i<event.dialog.buttons.length;i++){
                            event.dialog.buttons[i].classList.remove('selected');
                        }
                        button.classList.add('selected');
                        event.control.replace(slist[button.link]);
                        if(getComputedStyle(event.control).opacity==0){
                            event.control.style.transition='opacity 0.5s';
                            ui.refresh(event.control);
                            event.control.style.opacity=1;
                            event.control.style.transition='';
                            ui.refresh(event.control);
                        }
                        else{
                            event.control.style.opacity=1;
                        }                                            
                    }
                    event.control.custom=event.clickControl;
                }
                event.custom.replace.window=function(){
                    for(var i=0;i<event.dialog.buttons.length;i++){
                        if(event.dialog.buttons[i].classList.contains('selected')){
                            event.control.style.opacity=0;    
                            event.dialog.buttons[i].classList.remove('selected');
                            event.control.custom=event.clickControl;
                            return;
                        }
                    }
                }
            }
            else{
                var skills=[];
                for(var i in lib.character){ 
                    for(var j=0;j<lib.character[i][3].length;j++){ 
                        if(player.skills.contains(lib.character[i][3][j])) continue;
                        var info=lib.skill[lib.character[i][3][j]];        
                        if(info&&!info.unique&&!info.forbid){
                            skills.add(lib.character[i][3][j]); 
                        }    
                    } 
                }
                for(var i=0;i<game.players.length;i++){
                    if(!game.players[i].name||!lib.character[game.players[i].name]) continue;
                    var skills2=lib.character[game.players[i].name][3];
                    for(var j=0;j<skills2.length;j++){
                        if(skills.contains(skills2[j])){
                            skills.remove(skills2[j]);
                        }
                    }
                }                                    
                var skills3=skills.randomGets(event.num);
                event.num=0;
                for(var i=0;i<skills3.length;i++){ 
                    player.addSkill(skills3[i]);
                    player.storage.SE_fenpei=player.storage.SE_fenpei.concat(skills3[i]);
                }
            }
        }
        "step 2"                        
        if(event.num) event.goto(1);
        "step 3"
        var list=[];
        for(var i=0;i<player.storage.SE_fenpei.length;i++){
            list.push(player.storage.SE_fenpei[i]);
        }
        if(list.length){
            lib.character[player.name][3]=list;
        }                                
    },
                ai:{
                    threaten:4,
                },
                group:["ex_qianhuan2"],
            },
            "ex_qianhuan2":{
				audio:"ext:烽火绘卷:2",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                priority:100,
                unique:true,
                popup:false,
                silent:true,
                filter:function (event,player){
            return get.config('double_character')||lib.config.mode=='guozhan';
    },
                content:function (){
        "step 0"
        if(lib.config.mode=='guozhan'&&get.config('guozhan_mode')!='mingjiang') player.showCharacter(2);
        player.uninit();
        player.style.transform='';
        player.node.avatar.style.transform='';
        player.node.avatar2.style.transform='';
        player.classList.remove('fullskin2');
        player.node.avatar2.setBackground='';
        player.node.avatar2.hide();
        "step 1"
        player.init('sk_zuoci');
    },
            },
		 "ex_jiuyi": {
		    audio:"ext:烽火绘卷:2",
      trigger: {
        global: 'discardAfter'
      },
      filter: function (event, player) {
        if(player === event.player) return false;
        event.$cards = event.cards.filter(function (card){
          return get.position(card) === 'd';
        });
        return event.$cards.filter(function (card) {
          return player.countCards('h', function (c) {
            return get.suit(c) === get.suit(card);
          }) === 0;
        }).length;
      },
      direct: true,
      content: function () {
        'step 0'
        var dialog = ui.create.dialog('是否发动久意？', trigger.$cards);
        player.chooseButton([1, Infinity], dialog).set('filterButton', function(button){
          var suit = get.suit(button.link);
          if(player.countCards('h', { suit: suit })) return false;
          if(ui.selected.buttons.filter(function (b) {
            return get.suit(b.link) === suit;
          }).length) return false;
          return true;
        }).set('ai', function (button) {
          return get.value(button.link);
        });
        'step 1'
        if(result.bool) {
          player.logSkill('ex_jiuyi');
          player.gain(result.links);
          player.$gain2(result.links);
        }
      }
    },
  
			ex_jinjiu:{
				audio:"ext:烽火绘卷:2",
				trigger:{player:'useCardToBegin'},
				filter:function(event,player){
					return event.targets.length==1&&event.target.countCards('h')>0;
				},
				usable:3,
				content:function(){
					var cards=trigger.target.getCards('h');
					trigger.target.discard(cards);
					trigger.target.draw(cards.length);
				}
			},
			ex_liuhuan:{
				audio:"ext:烽火绘卷:2",
				trigger:{global:'discardAfter'},
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					for(var i=0;i<event.cards.length;i++){
						if(get.suit(event.cards[i])=='heart'){
							return true;
						}
					}
					return false;
				},
				frequent:true,
				content:function(){
					"step 0"
					if(trigger.delay==false) game.delay();
					"step 1"
					player.draw();
				},
				ai:{
					threaten:1.5
				}
			},
            "ex_tiandu":{
                group:["ex_tiandu1","ex_tiandu2"],
            },
            "ex_tiandu1":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"judgeEnd",
                },
                frequent:function(event){
        if(event.result.card.name=='du') return false;
        if(get.mode()=='guozhan') return false;
        return true;
    },
                check:function(event){
        if(event.result.card.name=='du') return false;
        return true;
    },
                filter:function(event,player){
        if(get.owner(event.result.card)){
            return false;
        }
        if(event.nogain&&event.nogain(event.result.card)){
            return false;
        }
        return true;
    },
                content:function(){
        player.gain(trigger.result.card);
        player.$gain2(trigger.result.card);
    },
            },
            "ex_tiandu2":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function(){
        "step 0"
        player.judge();
        "step 1"
        if(result.suit=='spade'&&result.number>1&&result.number<10){
            player.damage('thunder');
        }
    },
            },
            "ex_guanxing":{
                group:["ex_guanxing1","ex_guanxing2"],
            },
            "ex_guanxing1":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function(){
        'step 0'
        event.num=game.countGroup();
        event.cards=get.cards(event.num);
        event.chosen=[];
        event.num1=0;
        event.num2=0;
        'step 1'
        var js=player.getCards('j');
        var pos;
        var choice=-1;
        var getval=function(card,pos){
            if(js[pos]){
                return (get.judge(js[pos]))(card);
            }
            else{
                return get.value(card);
            }
        };
        for(pos=0;pos<Math.min(event.cards.length,js.length+2);pos++){
            var max=getval(event.cards[pos],pos);
            for(var j=pos+1;j<event.cards.length;j++){
                var current=getval(event.cards[j],pos);
                if(current>max){
                    choice=j;
                    max=current;
                }
            }
            if(choice!=-1){
                break;
            }
        }
        player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
            return !_status.event.chosen.contains(button.link);
        }).set('chosen',event.chosen).set('ai',function(button){
            return button.link==_status.event.choice?1:0;
        }).set('choice',event.cards[choice]);
        event.pos=pos;
        'step 2'
        if(result.bool){
            var card=result.links[0];
            var index=event.cards.indexOf(card);
            event.card=card;
            event.chosen.push(card);
            event.cards.remove(event.card);
            var buttons=event.cards.slice(0);
            player.chooseControl(function(){
                return _status.event.controlai;
            }).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
        }
        else{
            event.goto(4);
        }
        'step 3'
        if(typeof result.index=='number'){
            if(result.index>event.cards.length){
                ui.cardPile.appendChild(event.card);
                event.num2++;
            }
            else{
                event.cards.splice(result.index,0,event.card);
            }
            event.num--;
            if(event.num>0){
                event.goto(1);
            }
        }
        'step 4'
        while(event.cards.length){
            ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
            event.num1++;
        }
        var js=player.getCards('j');
        if(js.length==1){
            if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
                player.addTempSkill('ex_guanxing_fail');
            }
        }
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
    },
                ai:{
                    "ex_guanxing":true,
                },
            },
            "ex_guanxing_fail":{
            },
            "ex_guanxing2":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function(){
        'step 0'
        event.num=game.countGroup();
        event.cards=get.cards(event.num);
        event.chosen=[];
        event.num1=0;
        event.num2=0;
        'step 1'
        var js=player.getCards('j');
        var pos;
        var choice=-1;
        var getval=function(card,pos){
            if(js[pos]){
                return (get.judge(js[pos]))(card);
            }
            else{
                return get.value(card);
            }
        };
        for(pos=0;pos<Math.min(event.cards.length,js.length+2);pos++){
            var max=getval(event.cards[pos],pos);
            for(var j=pos+1;j<event.cards.length;j++){
                var current=getval(event.cards[j],pos);
                if(current>max){
                    choice=j;
                    max=current;
                }
            }
            if(choice!=-1){
                break;
            }
        }
        player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
            return !_status.event.chosen.contains(button.link);
        }).set('chosen',event.chosen).set('ai',function(button){
            return button.link==_status.event.choice?1:0;
        }).set('choice',event.cards[choice]);
        event.pos=pos;
        'step 2'
        if(result.bool){
            var card=result.links[0];
            var index=event.cards.indexOf(card);
            event.card=card;
            event.chosen.push(card);
            event.cards.remove(event.card);
            var buttons=event.cards.slice(0);
            player.chooseControl(function(){
                return _status.event.controlai;
            }).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
        }
        else{
            event.goto(4);
        }
        'step 3'
        if(typeof result.index=='number'){
            if(result.index>event.cards.length){
                ui.cardPile.appendChild(event.card);
                event.num2++;
            }
            else{
                event.cards.splice(result.index,0,event.card);
            }
            event.num--;
            if(event.num>0){
                event.goto(1);
            }
        }
        'step 4'
        while(event.cards.length){
            ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
            event.num1++;
        }
        var js=player.getCards('j');
        if(js.length==1){
            if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
                player.addTempSkill('ex_guanxing_fail');
            }
        }
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
    },
                ai:{
                    "ex_guanxing":true,
                },
            },
            "ex_yiji":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function(event){
        return (event.num>0)
    },
                content:function(){
        "step 0"
        event.cards=get.cards(2*trigger.num);
        "step 1"
        if(event.cards.length>1){
            player.chooseCardButton('将“遗计”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                if(ui.selected.buttons.length==0) return 1;
                return 0;
            });
        }
        else if(event.cards.length==1){
            event._result={links:event.cards.slice(0),bool:true};
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            for(var i=0;i<result.links.length;i++){
                event.cards.remove(result.links[i]);
            }
            event.togive=result.links.slice(0);
            player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                var att=get.attitude(_status.event.player,target);
                if(_status.event.enemy){
                    return -att;
                }
                else if(att>0){
                    return att/(1+target.countCards('h'));
                }
                else{
                    return att/100;
                }
            }).set('enemy',get.value(event.togive[0])<0);
        }
        "step 3"
        if(result.targets.length){
            result.targets[0].gain(event.togive,'draw');
            player.line(result.targets[0],'green');
            game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
            event.goto(1);
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num=1;
                    if(get.attitude(player,target)>0){
                        if(player.needsToDiscard()){
                            num=0.7;
                        }
                        else{
                            num=0.5;
                        }
                    }
                    if(target.hp>=4) return [1,num*2];
                    if(target.hp==3) return [1,num*1.5];
                    if(target.hp==2) return [1,num*0.5];
                }
            },
                    },
                },
            },
            "ex_yanzuo":{
                audio:"ext:烽火绘卷:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){return player.countCards()},
                content:function(){
        'step 0'
           player.showHandcards();
        'step 1'
        player.discard(player.getCards('h',{color:'black'}));
        'step 2'
        player.chooseTarget('炎祚</br></br><div class="center text">令一名其他角色将手牌数调整至与你相同</div>',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return (player.countCards('h')-target.countCards('h'))*Math.sign(get.attitude(player,target));
        });
        'step 3'
        if(result.targets.length){
            var target=result.targets[0];
            player.line(target,'green');
            var dnum=player.countCards('h')-target.countCards('h');
            if(dnum<0) target.chooseToDiscard('h',-dnum,true);
            else if(dnum>0) result.targets[0].draw(dnum);
        }
    },
                ai:{
                    threaten:1.2,
                    order:2,
                    result:{
                        player:1,
                    },
                },
            },
            "ex_xiongzi":{
                global:"ex_xiongzi1",
            },
            "ex_xiongzi1":{
                audio:"ext:烽火绘卷:2",
                forceaudio:true,
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:1,
                discard:false,
                prepare:"give",
                filter:function(event,player){
                    if(player.hasSkill('ex_xiongzi')) return false;
                    return player.countCards('h')&&game.hasPlayer(function(current){
                        return current.hasSkill('ex_xiongzi');
                    });
                },
                filterTarget:function(card,player,target){
                    return target!=player&&target.hasSkill('ex_xiongzi');
                },
                check:function(card){
                return 8-get.value(card);
                },
                content:function(){
                target.gain(cards,player);
                },
                ai:{
                    threaten:1.2,
                    order:2,
                    result:{
                        target:1,
                    },
                },
            },
            "ex_lietu1":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
        return player.countUsed()==3;
    },
                content:function(){
        'step 0'
        player.chooseTarget('烈图</br></br><div class="center text">对一名其他角色造成一点火焰伤害</div>',function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            return get.damageEffect(target,_status.event.player,_status.event.player);
        });
         'step 1'
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].damage('fire');
        }
    },
            },
            "ex_lietu":{
                group:["ex_lietu1","ex_lietu2"],
                init:function(player){
        player.storage.ex_lietu=0;
    },
                marktext:"烈",
                intro:{
                    content:function(storage){
            return '当前有'+storage+'个“烈图”标记';
        },
                },
                mark:true,
                trigger:{
                    player:"gainEnd",
                },
                forced:true,
                content:function(){
        player.storage.ex_lietu++;
        player.syncStorage('ex_lietu');
        game.log(player,'获得一个“烈图”标记');
    },
            },
            "ex_lietu2":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"gainEnd",
                },
                direct:true,
                filter:function(event,player){
                    return player.storage.ex_lietu>2
                },
                content:function(){
                    'step 0'
                    player.storage.ex_lietu=0;
                    'step 1'
                    player.chooseTarget(get.prompt('ex_lietu2'),function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        return get.attitude(player,target);
                    });
                    'step 2'
                    if(result.bool){
                        player.logSkill('ex_lietu2',result.targets);
                        result.targets[0].draw();
                    }
                },
            },
            "ex_niwu":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                direct:true,
                filter:function(event,player){
                    return event.card&&event.card.name=='sha';
                },
                priority:-1,
                content:function(){
                    'step 0'
                    var list=[];
                    if(!player.hasSkill('zhuge_skill')) list.push('zhuge_skill');
                    if(!player.hasSkill('qinggang_skill')) list.push('qinggang_skill');
                    if(!player.hasSkill('guanshi_skill')) list.push('guanshi_skill');
                    if(!player.hasSkill('fangtian_skill')) list.push('fangtian_skill');
                    if(!player.hasSkill('qilin_skill')) list.push('qilin_skill');
                    if(!player.hasSkill('cixiong_skill')) list.push('cixiong_skill');
                    if(!player.hasSkill('qinglong_skill')) list.push('qinglong_skill');
                    if(!player.hasSkill('hanbing_skill')) list.push('hanbing_skill');
                    if(list.length==1){
                        player.addTempSkill(list[0]);
                        event.finish();
                    }
                    else{
                        player.chooseControl(list,function(){
                            if(list.contains('zhuge_skill')) return 'zhuge_skill';
                            if(list.contains('guanshi_skill')) return 'guanshi_skill';
                            if(list.contains('qinggang_skill')) return 'qinggang_skill';
                            return 'qilin_skill';
                        }).set('prompt','选择获得一项技能直到回合结束');
                    }
                    'step 1'
                    player.addTempSkill(result.control);
                    player.popup(get.translation(result.control));
                },
            },
            "ex_jiaoge":{
                audio:"ext:烽火绘卷:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                filterTarget:function(card,player,target){
                return target!=player;
                },
                content:function(){
                    "step 0"
                    player.chooseCard('he',true).set('ai',function(card){
                    return 5-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        player.$give(result.cards.length,target);
                        target.gain(result.cards);
                        target.storage.ex_jiaoge1=result.cards[0];
                        target.storage.ex_jiaoge2=player;
                        target.addSkill('ex_jiaoge1');
                    };
                },
            },
            "ex_jiaoge1":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
                return event.player.hasSkill('ex_jiaoge1')&&player.storage.ex_jiaoge1!=undefined&&player.storage.ex_jiaoge2!=undefined;
                },
                content:function(){
                    var pl=player.storage.ex_jiaoge2;
                    var card=player.storage.ex_jiaoge1;
                    if(player.get('hej').contains(card)){
                    pl.draw();
                    }    
                    else{
                    pl.useCard({name:'sha'},player);
                    };
                    player.removeSkill('ex_jiaoge1');
                    delete player.storage.ex_jiaoge1;
                    delete player.storage.ex_jiaoge2;
                },
            },
            "ex_sheji":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    global:"useCard",
                },
                check:function(event,player){
                    return get.attitude(player,event.player)<0;
                },
                filter:function(event,player){
                    return event.player!=player&&event.card&&get.type(event.card)=='equip';
                },
                content:function(){
            'step 0'
                 player.logSkill('ex_sheji',trigger.player);
                    trigger.player.chooseControlList([
                    '1本阶段不能使用能造成伤害的手牌',
                    '2视为其对你使用一张【杀】'],true,function(){
                    return _status.event.choice;
                });
            'step 1'
                if(result.index==0){
                    trigger.player.addTempSkill('ex_sheji1','phaseEnd');
                }
                else{
                    player.useCard({name:'sha'},trigger.player);
                }
                },
            },
            "ex_sheji1":{
                mod:{
                    cardEnabled:function(card,player){
                        if(card.name=='sha'||card.name=='juedou'||card.name=='nanman'||card.name=='wanjian'||card.name=='huogong'){
                            return false;
                        }
                    },
                    cardUsable:function(card,player){
                        if(card.name=='sha'||card.name=='juedou'||card.name=='nanman'||card.name=='wanjian'||card.name=='huogong'){
                            return false;
                        }
                    },
                },
            },
"ex_renxian":{		
   audio:"ext:烽火绘卷:2",
   enable:"phaseUse",
   usable:1,
   filterTarget:function(card,player,target){
					return target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					targets[0].chooseCard('将至多两张牌置于牌堆顶（先选择的在上）',[1,2],'he',true);
					'step 1'
					if(result.bool){
						targets[0].lose(result.cards,ui.special);
						event.cards=result.cards;
					}
					else{
						event.finish();
					}
					'step 2'
					game.delay();
					var nodes=[];
					for(var i=0;i<event.cards.length;i++){
						var cardx=ui.create.card();
						cardx.classList.add('infohidden');
						cardx.classList.add('infoflip');
						nodes.push(cardx);
					}
					targets[0].$throw(nodes,700,'nobroadcast');
					game.log(targets[0],'将'+get.cnNumber(event.cards.length)+'张牌置于牌堆顶');
					'step 3'
					for(var i=event.cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
					}
					'step 4'
					if(event.cards.length>=2){
					player.logSkill('ex_renxian',targets[0]);
    targets[0].chooseControlList([
    '1视为使用一张无视距离的杀',
    '2回复一点体力'],true,function(){
    return _status.event.choice;
    });
    }
   'step 5'
   if(result.index==0){
    targets[0].chooseTarget(get.prompt('ex_renxian'),function(card,player,target){
						return lib.filter.targetEnabled({name:'sha'},player,target);
					}).set('ai',function(target){
						return get.effect(target,{name:'sha'},_status.event.player);
					});
    }
					else{
					event.goto(7);
					}
    'step 6'
    if(result.bool){
						targets[0].logSkill('ex_renxian');
						targets[0].useCard({name:'sha'},result.targets,false);
					}
						else{
						event.finish();
					}
					'step 7'
   if(result.index==1){
					targets[0].recover();
					}
   },
    	ai:{
					order:8,
					threaten:1.8,
					result:{
						target:-1
					}
				},
  },
					ex_shanmou:{
						audio:"ext:烽火绘卷:2",
						srlose:true,
						enable:['chooseToUse','chooseToRespond'],
						filterCard:function(){return false;},
						selectCard:-1,
						viewAs:{name:'sha',nature:'fire'},
						viewAsFilter:function(player){
							return !player.isLinked();
						},
						prompt:'横置你的武将牌，视为打出一张火杀',
						check:function(){return 1},
						onuse:function(result,player){
							player.link();
						},
						onrespond:function(result,player){
							if(!player.isLinked()) player.link()
						},
						ai:{
							skillTagFilter:function(player){
								return !player.isLinked();
							},
							respondSha:true,
						},
						group:['ex_shanmou2']
					},
					ex_shanmou2:{
						audio:"ext:烽火绘卷:2",
						enable:'chooseToRespond',
						filterCard:function(){return false;},
						selectCard:-1,
						viewAs:{name:'shan'},
						viewAsFilter:function(player){
							return player.isLinked();
						},
						prompt:'重置你的武将牌，视为打出一张闪',
						check:function(){return 1},
						onrespond:function(result,player){
							if(player.isLinked()) player.link()
						},
						ai:{
							skillTagFilter:function(player){
								return player.isLinked();
							},
							respondShan:true,
						}
					},
			ex_hezong:{
			audio:"ext:烽火绘卷:2",
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return !current.isLinked();
					});
				},
				content:function(){
					"step 0"
					var num=game.countPlayer(function(current){
						return !current.isLinked();
					});
					player.chooseTarget(get.prompt('ex_hezong'),[1,2],function(card,player,target){
						return !target.isLinked();
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						player.logSkill('ex_hezong',result.targets);
						event.targets=result.targets;
						event.num=0;
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.num<event.targets.length){
						event.targets[event.num].link();
						event.num++;
						event.redo();
					}
				},
				ai:{
					expose:0.3
				}
			},
					ex_liepo:{
						audio:"ext:烽火绘卷:2",
							skillAnimation:true,
				  unique:true,
				  mark:true,
				init:function(player){
					player.storage.ex_liepo=false;
				 },
						trigger:{player:'damageBegin'},
							intro:{
					content:'limited'
				},
						filter:function(event){
							if(event.nature=='fire') return true;
						},
						content:function(){
							trigger.untrigger();
							trigger.finish();
							player.recover(trigger.num);
							player.storage.ex_liepo=true;
				  player.awakenSkill('ex_liepo');
						},
						ai:{
							nofire:true,
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'fireDamage')) return [0,2];
								}
							}
						}
					},
			ex_julie:{
				audio:"ext:烽火绘卷:2",
				trigger:{player:'shaBegin'},
				filter:function(event,player){
					return event.target.countCards('h')>0;
				},
				content:function(){
				player.useCard({name:'huogong'},trigger.target);
			}
			},
            "ex_shenduan":{
                audio:"ext:烽火绘卷:2",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                direct:true,
                filter:function(event,player){
                    return event.card&&event.card.name=='huogong';
                },
                priority:-1,
                content:function(){
                player.draw();
                }
                },
			ex_rongshou:{
				audio:"ext:烽火绘卷:2",
				trigger:{player:['useCard','respond']},
				frequent:true,
				usable:3,
				filter:function(event,player){
					var cards=player.getCards('h');
					if(cards.length<1) return false;
					var type=get.type(cards[0]);
					for(var i=1;i<cards.length;i++){
						if(get.type(cards[i])!=type) return false;
					}
					return true;
				},
				content:function(){
					"step 0"
					player.showHandcards();
					"step 1"
					player.draw();
				}
			},
			ex_anxiang2:{
				audio:"ext:烽火绘卷:2",
				trigger:{player:'phaseDrawBegin'},
				frequent:true,
				content:function(){
					trigger.num+=player.getHandcardLimit()-player.countCards('h');
				},
				ai:{
					threaten:1.3
				}
			},
			ex_xiefen:{
			audio:"ext:烽火绘卷:2",
   trigger:{player:'phaseBegin'},
   frequent:true,
   filter:function(event,player){
   	if(player.getEquip(1)) return false;
					return true;
   },
				content:function(){
					event.equip=get.cardPile(function(card){
						return get.subtype(card)=='equip1';
					});
						player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
						event.e=true;
				},
				ai:{
					order:8,
					threaten:1.2,
					result:{
						player:1
					}
				},
			},
			ex_shifu:{
				 trigger:{player:'damageEnd'},
				 frequent:true,
				 filter:function(event){
					 return event.source!=undefined;
				 },
						prompt:function(event,player){
							var str='';
							str+='发动【持负】将武器牌交给'+get.translation(event.source)+'并摸两张牌';
							return str;
						},	
						check:function(event,player){
							return 1;
						},						
						content:function(){
							var card=player.get('e','1');
								if(card){	
									trigger.source.gain(card,player);
									player.$give(card,trigger.source);	
									player.draw(2);
								}	
						},						
					},			
        },
        translate:{
            "ex_guojia":"SP郭嘉",
            "ex_jiangwei":"SP姜维",
            "ex_zhouyu":"SP周瑜",
            "ex_lvbu":"SP吕布",
            "ex_sunhuan":"孙桓",
            "ex_zhujun":"朱儁",
            "ex_zhangyue":"张钺",
            "ex_lvchang":"吕常",
            "ex_xiahouen":"夏侯恩",
            "ex_panhuanghou":"潘皇后",
            "ex_majunjian":"马俊坚",
            "ex_qijin":"阿七今儿",
            "sk_zuoci":"左慈",
            "ex_dongzhao":"董昭",
            "ex_qianhuan":"千幻",
            "ex_qianhuan_info":"锁定技,游戏开始和你的每个回合开始时,随机展示三张未上场的武将牌,你声明并获得其中的两个技能直到下个回合开始(你不能声明主公技,限定技,boss技).你的每个回合开始时,先展示三张未上场的武将牌,然后再展示你上回合所选择过的至多两个技能.你从里面获得共计两个技能.若该局游戏为双将模式(国战模式下须先亮出武将牌),则你移除另一名武将,将描述中的【两个】改为【四个】",
            "ex_qianhuan2":"千幻",
            "ex_qianhuan2_info":"",
            "ex_tiandu":"天妒",
            "ex_tiandu1":"天妒",
            "ex_tiandu2":"天妒",
            "ex_tiandu_info":"每当你的判定牌生效后，你可以获得此牌。锁定技，准备阶段，你进行一次判定， 若判定结果为♠️2-9，你受到一点雷属性伤害。",
            "ex_guanxing":"观星",
            "ex_guanxing1":"观星",
            "ex_guanxing2":"观星",
            "ex_guanxing_info":"准备阶段和结束阶段，你可以观看牌准顶的X张牌(X为场上势力数)，并任意调换其顺序或置入牌堆底。",
            "ex_guanxing2_info":"undefined",
            "ex_guanxing1_info":"undefined",
            "ex_tiandu2_info":"undefined",
            "ex_tiandu1_info":"undefined",
            "ex_yiji":"遗计",
            "ex_yiji_info":"每当你受到一点伤害，可以观看牌堆顶的两张牌，并将其交给任意1~2名角色。",
            "ex_yanzuo":"炎祚",
            "ex_yanzuo_info":"出牌阶段限一次，若你有手牌，你可以展示所有手牌，并弃置其中所有黑色手牌（没有则不弃），然后你令一名其他角色将手牌调整至与你相同。",
            "ex_xiongzi":"雄姿",
            "ex_xiongzi1":"雄姿",
            "ex_xiongzi_info":"其他角色出牌阶段限一次，其可以交给你一张手牌。",
            "ex_lietu":"烈图",
            "ex_lietu1":"烈图",
            "ex_lietu2":"烈图",
            "ex_lietu_info":"每当你于一轮第三次使用手牌时，你可以对一名其他角色造成一点火焰伤害；每当你累计第三次获得牌时，你可以令一名其他角色摸一张牌。",
            "ex_niwu":"逆武",
            "ex_niwu_info":"锁定技，当你使用【杀】时，你可以获得一项未获得过的武器技能效果，下一名玩家回合开始时，你失去以此法获得的武器技能效果。",
            "ex_sheji":"射戟",
            "ex_sheji1":"射戟",
            "ex_sheji_info":"每当一名其他角色使用装备牌时，你可以令其选择一项:①本阶段不能使用能造成伤害的手牌，②视为其对你使用一张【杀】。",
            "ex_renxian":"任险",
            "ex_renxian_info":"出牌阶段限一次，你可以令一名角色将至多两张牌置于牌堆顶，若其依此法放置了两张牌，该角色可以选择以下一项：1，视为使用一张【杀】。2，回复一点体力。",
            "ex_julie":"举烈",
            "ex_julie_info":"当你使用【杀】指定目标角色后，你可以视为对目标角色使用一张【火攻】。",
            "ex_shenduan":"慎断",
            "ex_shenduan_info":"锁定技，当你使用【火攻】指定目标时，你摸一张牌。",
            "ex_rongshou":"戎守",
            "ex_rongshou_info":"锁定技，当你使用或打出一张手牌后，你可以展示所有手牌，若你的所有手牌均为同一类别，你摸一张牌，每轮限三次。",
            "ex_zhige":"执戈",
            "ex_zhige_info":"锁定技，出牌阶段，你每使用一张手牌，本轮你的攻击范围+1。",
            "ex_xiefen":"携锋",
            "ex_xiefen_info":"锁定技，出牌阶段开始时，若你装备区没有武器牌，你随机装备一张武器牌。",
            "ex_shifu":"恃负",
            "ex_shifu_info":"锁定技，当你受到伤害后，伤害来源获得你的武器牌，然后你摸两张牌。",
            "ex_jinjiu":"锦就",
            "ex_jinjiu_info":"当你使用手牌仅指定一名角色为目标时，你可以令其弃置所有手牌，然后其摸等量的手牌，每回合限三次。",
            "ex_liuhuan":"瑠还",
            "ex_liuhuan_info":"锁定技，出牌阶段，每当一名角色因弃置而失去红桃手牌时，你摸一张牌 。",
            "ex_liangqin":"梁音",
            "ex_liangqin_info":"出牌阶段限一次，你可以弃置两张颜色不同的牌，然后令所有角色各失去或回复一点体力。",
            "ex_jiuyi":"久意",
            "ex_jiuyi_info":"当其他角色的牌因弃置而进入弃牌堆时，你可以获得其中与你所有手牌花色均不相同的牌（每种花色各一张）。",
            "ex_lietu1_info":"undefined",
            "ex_hezong":"合纵",
            "ex_hezong_info":"锁定技，结束阶段，你横置/重置至多两名角色。",
            "ex_shanmou":"善谋",
            "ex_shanmou2":"善谋",
            "ex_shanmou_info":"你可以重置你的武将牌视为使用一张【闪】；你可以横置你的武将牌视为使用一张【火杀】。",
            "ex_liepo":"烈魄",
            "ex_liepo_info":"限定技，当你即将受到火焰伤害时，你可以改为回复等量体力值。",
            "ex_jinshou":"进绶",
            "ex_jinshou_info":"出牌阶段限一次，你可以对一名角色造成一点伤害，然后其摸两张牌，若你依此法杀死了一名角色，你失去一点体力。",
            "ex_weixun":"魏勋",
            "ex_weixun_info":"当你对一名角色造成伤害时，你可以重新指定一名角色为此伤害的来源。",
            "ex_quanbian":"权变",
            "ex_quanbian_info":"当一名其他角色于回合外造成伤害时，你可以于其拼点，若你赢，你摸两张牌，若你输，该角色摸两张牌。",            
        },
                };				
                if(lib.device||lib.node){
                    for(var i in fenghuo.character){fenghuo.character[i][4].push('ext:烽火绘卷/'+i+'.jpg');}
                }else{
                    for(var i in fenghuo.character){fenghuo.character[i][4].push('db:extensio-烽火绘卷:'+i+'.jpg');}
                }
                return fenghuo;
            });	
              lib.config.all.characters.push('fenghuo');
            if(!lib.config.characters.contains('fenghuo')){
                lib.config.characters.push('fenghuo');
            }
            lib.translate['fenghuo_character_config'] = '烽火绘卷';
		game.import('card',function(){
			var fenghuo={
			name:'fenghuo',
			connect:true,			
card:{
            "fh_yuxi":{
            image:'ext:烽火绘卷/fh_yuxi.png',
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                skills:["ex_yuxi"],
                ai:{
                    basic:{
                        equipValue:7.5,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player){
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
                        target:function(player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        target.equip(card);
    },
                toself:true,
                fullimage:true,
            },
},
skill:{
			ex_yuxi:{
			group:["ex_yuxi1"],
				trigger:{target:'shaBegin'},
				check:function(event,player){
					var cards=player.getCards('h');
					if(cards.length<=2){
						for(var i=0;i<cards.length;i++){
							if(cards[i].name=='shan'||cards[i].name=='tao') return false;
						}
					}
					return true;
				},
				content:function(){
					"step 0"
					player.chooseToDiscard(2,true,'he');
					player.draw(2);
					var players=game.filterPlayer();
					players.sort(function(a,b){
						return b.hp-a.hp;
					});
					if(players[0].hp>players[1].hp&&players[0]!=player){
						players[0].chooseBool(get.prompt('tianming'));
						event.player=players[0];
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool){
						player.chooseToDiscard(2,true,'he');
						player.draw(2);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha') return [1,0.5];
						}
					}
				}
			},    
			ex_yuxi1:{
				 trigger:{player:'dying'},
				 filter:function(event){
					 return event.source!=undefined;
				 },
						prompt:function(event,player){
							var str='';
							str+='是否发动【玉玺】将玉玺交给'+get.translation(event.source)+'并回复一点体力？';
							return str;
						},	
						check:function(event,player){
							return 1;
						},						
						content:function(){
							var card=player.get('e','5');
							if(card){
								var name=card.name;	
								if(name&&name.indexOf('fh_yuxi')!=-1&&card){	
									trigger.source.gain(card,player);
									player.$give(card,trigger.source);	
									player.recover();
								}	
							}
						},						
					},
},
translate:{
 "fh_yuxi":"玉玺",
 "fh_yuxi_info":"你视为拥有技能【天命】，当你进入濒死阶段时，你可以将【玉玺】交给伤害来源，然后你回复一点体力。",
 "ex_yuxi":"玉玺",
 "ex_yuxi1":"玉玺",
 "ex_yuxi_info":"你视为拥有技能【天命】，当你进入濒死阶段时，你可以将【玉玺】交给伤害来源，然后你回复一点体力。",
},
				list:[["heart","13","fh_yuxi"]],
			};
		return fenghuo;
		});
		lib.translate['fenghuo_card_config']='烽火绘卷';
		lib.config.all.cards.push('fenghuo');
		if(!lib.config.cards.contains('fenghuo')) lib.config.cards.push('fenghuo');
        };
    
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
        },
        translate:{
        },
    },
    intro:"",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["测试.jpg"],"card":[],"skill":[]}}})