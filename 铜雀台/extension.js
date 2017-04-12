game.import("extension",{name:"铜雀台",content:function (config,pack){
    
},precontent:function (){
    
},config:{},help:{},package:{
    character:{
        character:{
            "fhhtqt":["female","qun",3,['mixinfhh','cangnifhh'],[]],
            "fwtqt":["male","qun",3,['fengyinfw','chizhongfw'],[]],
            "jbtqt":["male","qun",3,['duyijb','duanzhijb'],[]],
        },
        translate:{
            fhhtqt:"伏皇后·铜雀",
            fwtqt:"伏完·铜雀",
            jbtqt:"吉本·铜雀",
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
     
        duyijb:{
               
        	audio:true,
			enable:'phaseUse',
						usable:1,
			content:function(){
			"step 0"
					event.card=get.cards();
							player.showCards(event.card);
									player.chooseTarget(true,'选择一名角色送出'+get.translation(event.card));
		    
				"step 1"
				player.line(result.targets,'green');
				result.targets[0].$gain2(event.card);
				for(var i=0;i<cards.length-1;i++){
					ui.discardPile.appendChild(cards[i]);
				}
				game.delay(0,1000);
				"step 2"
				result.targets[0].gain(event.card,'log');
				"step 3"
				if(get.color(card)=='black'){
		          result.targets[0].addTempSkill('duyi2','phaseAfter');
			}
							}
        },
      
        	duyi2:{
			mark:true,
			mod:{
				cardEnabled:function(){
					return false;
				},
				cardUsable:function(){
					return false;
				},
				cardRespondable:function(){
					return false;
				},
				cardSavable:function(){
					return false;
				}
			},
			intro:{
				content:'不能使用或打出卡牌'
			}
		},
        duanzhijb:{
			audio:true,
			filter:function(event,player){
				return event.player!=player&&event.card&&(event.card.name=='sha'||get.type(event.card)=='trick'||get.type(event.card)=='delay');
			},
			logTarget:'player',
			check:function(event,player){
				if(ai.get.attitude(player,event.player)>0){
					return false;
				}
				if(get.tag(event.card,'respondSha')){
					if(player.countCards('h',{name:'sha'})==0){
						return true;
					}
				}
				else if(get.tag(event.card,'respondShan')){
					if(player.countCards('h',{name:'shan'})==0){
						return true;
					}
				}
				else if(get.tag(event.card,'damage')){
					if(player.countCards('h')<3) return true;
				}
				else if(event.card.name=='shunshou'&&player.hp>2){
					return true;
				}
				return false;
			},
			priority:10,
			trigger:{target:'useCardToBefore'},
			content:function(){
							"step 0"
				if(trigger.player.countCards('he')){
					player.discardPlayerCard(trigger.player,'he',[1,2],true);
				}
				"step 1"
				player.loseHp();

			},
        },
        mixinfhh:{
        			enable:'phaseUse',
			usable:1,
			audio:2,
			position:'h',
			filterCard:true,
			

			check:function(card){return 8-ai.get.value(card)},
			selectTarget:2,
			multitarget:true,
			discard:false,
			targetprompt:['得到牌','出杀目标'],
			prepare:'give',
			filterTarget:function(card,player,target){
				if(ui.selected.targets.length>=0){
					return player!=target;
				}
				else{
					return lib.filter.filterTarget({name:'sha'},ui.selected.targets[0],target);
				}
			},
			content:function(){
				"step 0"
				targets[0].gain(cards,player);
				"step 1"
				targets[0].chooseControl('被其观看手牌并被获得其中一张','出杀',function(){
					var player=_status.event.player;
					var target=_status.event.target;
										if(targets[0].countCards('h','sha')>0) return 1;
										else{
												return 0
										}
					if(ai.get.effect(_status.event.target,{name:'sha'},player,player)>0){
						return 1;
					}
					return 0;
				}).set('target',targets[1]).set('prompt','对'+get.translation(targets[1])+'使用一张杀，或摸一张牌');
				"step 2"
				if(result.control=='被其观看手牌并被获得其中一张'){
			targets[1].gainPlayerCard(target,'h').set('filterButton',function(button){
						return get.position(button.link)=='h';
					}).set('visible',true);
				}
				else{
				
					targets[0].chooseToUse({name:'sha'},targets[1]);
				}
			},

        },

  
        cangnifhh:{
       			group:['cangnifhh1','cangnifhh2','cangnifhh3'],
		},
		cangnifhh1:{
		audio:2,
			trigger:{player:'phaseDiscardBegin'},
     content:function(){
     'step 0'
     		player.chooseControl('摸牌并翻面','回复体力并翻面',function(){
					var player=_status.event.player;
					var target=_status.event.target;
      });
				"step 1"
							if(result.control=='摸牌并翻面'){
									player.draw(2);
				player.turnOver();
				}
						else{
			
				player.recover();
				player.turnOver();
			}
			}
        },
        cangnifhh2:{
    audio:2,
        	usable:1,
        		filter:function(event,player){
				if(player.classList.contains('turnedover')) return true;
				},
        trigger:{player:'gainAfter'},
        content:function (){
         _status.currentPhase.draw();
     
         }
        },
        cangnifhh3:{
        audio:2,
        filterCard:true,
        position:'he',
          			filter:function(event,player){
          			player!=_status.currentPhase;
          			},
        			filter:function(event,player){
				if(_status.currentPhase.countCards('he')==0) return false;
				},
         		filter:function(event,player){
				if(player.classList.contains('turnedover')) return true;
				},
           trigger:{player:'loseEnd'},
        content:function (){
         _status.currentPhase.chooseToDiscard(true,'he');
         }

         
        },
        fengyinfw:{
        audio:true,
			trigger:{global:'phaseBegin'},
		  	logTarget:"player",
                filter:function (event,player){
         return event.player.hp>=player.hp&& event.player.isAlive()&&event.player!=player||
         event.player.isAlive()&&event.player!=player&&player.storage.fengyinfw;
    },
                content:function (){
        "step 0"
				player.chooseCard('交出一张杀或放弃发动奉印',function(card){
							return card.name=='sha';
				}).set('ai',function(card){
					if(ai.get.attitude(_status.event.player,_status.event.getParent().player)>0){
						return 11-ai.get.value(card);
					}
					else{
						return 7-ai.get.value(card);
					}
				});
				"step 1"
					trigger.player.gain(result.cards,player);
				if(player==game.me||trigger.player==game.me)
				player.$give(result.cards,trigger.player);
				else
				player.$give(1,trigger.player);
        "step 2"
        if(result.bool){
            trigger.player.skip('phaseUse');
       					trigger.player.skip('phaseDiscard');
        }
        },
        },

        		chizhongfw:{
        		audio:true,
			trigger:{global:'dieAfter'},
			forced:true,
			unique:true,
			content:function(){
				player.gainMaxHp();
			},
				mod:{
				maxHandcard:function(player,num){
					if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
				}
			}
		},
        },
        translate:{
        //技能
        mixinfhh:'密信',
        cangnifhh1:'藏匿',
        cangnifhh2:'藏匿',
        cangnifhh3:'藏匿',
        cangnifhh:'藏匿',
        fengyinfw:'奉印',
        chizhongfw:'持重',
        duyijb:'毒医',
        duyi2:'毒医',
        duanzhijb:'断指',
        //技能描述
        duanzhijb_info:'当你成为其他角色使用的牌的目标后，你可以弃置其至多两张牌（也可以不弃置），然后失去1点体力。',
        duyijb_info:'出牌阶段限一次,你可以亮出牌堆顶的一张牌并交给一名角色，若此牌为黑色，该角色不能使用或打出其手牌，直到回合结束。',
        cangnifhh_info:'弃牌阶段开始时，你可以回复1点体力或摸两张牌，然后将你的武将牌翻面；其他角色的回合内，若你武将牌背面向上,你获得（每名角色回合限一次）一次牌时，你可以令该角色摸一张牌，你失去一次牌时可以令该角色弃置一张牌。',
        mixinfhh_info:'出牌阶段限一次，你可以将一张手牌交给一名其他角色，该角色须对你选择的另一名角色使用一张【杀】（无距离限制），否则你选择的角色观看其手牌并获得其中任意一张。',
        fengyinfw_info:'其他角色准备阶段，若其体力不小于你，你可以交给其一张杀并且该角色跳过出牌阶段和弃牌阶段',
        chizhongfw_info:'你的手牌上限等于体力上限；每当一名角色死亡时，你增加一点体力上限',
        },
    },
},files:{"character":[""],"card":[],"skill":[]}})
