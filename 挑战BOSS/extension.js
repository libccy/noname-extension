game.import("extension",{name:"挑战BOSS",content:function (config,pack){   
	lib.group.push('shen');
			lib.translate.shen='神';
			lib.translate.shenColor="#408080",		
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
			lib.element.player.dyingx=function(reason){
				var next=game.createEvent('dying');
				next.player=this;
				next.reason=reason;
				next.source=reason.source;
				var content=lib.element.player.dyingx2;			
				next.setContent(content);	
				return next;
			}						
			lib.element.player.dyingx2=function(reason){
				"step 0"
				event.filter=lib.skill._save.filter;
				lib.skill._save.filter=function(event,player){
					if(event.player.hp>0&&!player.hasSkill('diy_xuelu')) return false;
					if(event.source&&event.source!=player) return false;
					return true;
				},
				_status.dying=player;
				event.trigger('dying');
				game.log(player,'濒死')
				"step 1"
				if(_status.dying==player) delete _status.dying;
				var num=player.hp-player.storage.diy_xuelu;
				if(num<=0) player.die(event.reason);
				"step 2"
				lib.skill._save.filter=event.filter;
			}
},precontent:function (){    
},config:{},help:{"挑战BOSS":"<li>不建议在其他模式使用此扩展武将，然而你根本选不到<li>本次更新大大削弱了强度过高的BOSS<li>配置低的设备不建议使用此扩展<li>作者贴吧id：一瞬间丶遗忘，自制BOSS，神将强度稍高，欢迎用diy武将挑战，要是用那种开场就令目标失去技能那种diy就没意思了，不如直接失去所有体力值上限岂不美哉？用常规武将挑战成功的，那恭喜你即将走上人生巅峰<li>有任何问题BUG、意见或建议请到贴吧反馈，不定期更新，如果你喜欢的话可以催更哦<li>附带武将技能配音哦，你确定不来吗？<li>非二次元武将，导入后直接在挑战模式使用",},                       
         package:{
        character:{		
        character:{
         boss_simayan:["male","shen",3,["boss_tongyi","boss_shemian"],["zhu","boss","des:晋開國皇帝，统一三国"]],
         boss_jianwu:["male","shen",100,["victory","boss_xiushen","boss_pojia","boss_jianqi","boss_jianyu"],["zhu","boss","des:無敵是我，我就是無敵！劍術天下無雙！"]],
        BOSS_diaochan:["female","shen",6,["boss_biyue","boss_guose","boss_meihuo"],["zhu","boss","des:天姿国色，羞花闭月，倾国倾城!"]],
        BOSS_xuhuang:["male","shen",12,["boss_jieliang"],["zhu","boss","des:断其粮道，犹如杀其父母"]],
        BOSS_yuji:["male","shen",5,["boss_yaohuo"],["zhu","boss","des:变化无穷，法力高强，妖惑人心"]],
        BOSS_zuoci:["male","shen",20,["boss_piaomiao","boss_qimen","boss_dunjia"],["zhu","boss","des:腾云驾雾飞升太虚"]],
        BOSS_zhangfei:["male","shen",7,["shemao","boss_nuxiao"],["zhu","boss","des:燕人张飞在此！看我杀的你们人仰马翻！"]],
         BOSS_zhanshen:["male","shen",8,["chitu","wushuang","shenwu","zhanshen"],["zhu","boss","des:這天下還有誰能阻擋我"]],
            BOSS_shenhua:["male","shen",0,["baonu","wushuang","feijiangx","shenshi","shensha","shenmie"],["zhu","boss","des:天下無雙，武藝超群，獨一無二"]],
        },
        translate:{
            boss_simayan:"神司马炎",
            boss_jianwu:"无双剑舞",
            BOSS_diaochan:"神貂蝉",           
            BOSS_xuhuang:"神徐晃",
            BOSS_yuji:"妖于吉",
            BOSS_zuoci:"神左慈",
            BOSS_zhangfei:"神张飞",
            BOSS_zhanshen:"无双战神",
            BOSS_shenhua:"不败神话",
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
        damageboss:{
                        trigger:{
                            source:["damageBegin"],
                        },
                        forced:true,
                        popup:false,
                        priority:Infinity,
                  filter:function(event,player){
             if(!player.hasSkill('boss_tongyi'))
             return false;
			      	return !event.card;
             },
              content:function (){   
                 player.recover(trigger.num);                
            },                    
            },
      boss_shemian:{
                audio:1,
                trigger:{
                    player:["damageBegin",
"loseHpBefore"],
                },
                forced:true,
                priority:-Infinity,
                filter:function (event){
                    return event.num>1;
                },
                content:function (){
                trigger.finish();
                trigger.untrigger();              
                player.draw();
         },
            },
      boss_tongyi:{
                audio:1,
                trigger:{player:['phaseBegin','phaseEnd','damageEnd','loseHpEnd','turnOverEnd']},
			unique:true,
      forced:true,
     priority:Infinity,
			content:function(){
     player.addSkill('damageboss');
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){											player.gainPlayerCard(true,current,Math.max(1,Math.floor(current.num('he')/2)),'he');
current.damage(Math.max(1,Math.floor(current.maxHp/3)));        
					}
					event.redo();
				}
			},
			ai:{
				threaten:2
			}
		}, 
      boss_jianqi:{    
			trigger:{source:'damageBegin'},
     forced:true, 
     audio:3,
     priority:-Infinity,  
     skillAnimation:true,
     animationStr:"你们的技术太烂了！",
     filter:function(event,player){
     return event.card.name=='sha';
     }, 
			content:function(){		
     trigger.num=trigger.num*(1+Math.floor(Math.random()*2));
     },
     ai:{
                   noe:true,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return Infinity;
                       if(card.name=='guanshi') return [1,3];

                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
                    },
                    },
                },
     },    
     boss_xiushen:{
     
			trigger:{player:'phaseBegin'},
     forced:true, 
     audio:3, 
     unequip:true,
			content:function(){		
     player.skip('phaseDraw');
    	player.draw(3+Math.floor(Math.random()*5));
    },
    mod:{
       maxHandcard:function (player,num){
         return num=20;
        },
        targetEnabled:function (card,player,target,now){
        if(card.name=='lebu') return false;
        
      },
		},
  ai:{
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return 0;
       }
       }
       },
},
       boss_jianyu:{
                unequip:true,     
                unique:true,
                mod:{
                    selectTarget:function (card,player,range){
            if(range[1]==-1) return;
            if(card.name=='sha') range[1]=Infinity;
        },
         attackFrom:function (from,to){
            return -Infinity; 
                },
               },
               
            },
     boss_pojia:{
			ai:{		
        unequip:true,     	
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		}, 
     victory:{   
      audio:5,  		
			trigger:{player:'gameDrawAfter',},
			forced:true,
     priority:-1,      
			content:function(){   
				player.draw(3);
     player.addSkill('victory2');
			},
		},
     victory2:{   		
			trigger:{player:'changeHp',},
			forced:true,
     priority:Infinity,  
     filter:function(event,player){
     return player.hp<10;
     },   
			content:function(){
     player.logSkill('victory');  
       player.awakenSkill('victory'); 
       player.awakenSkill('victory2'); 
				player.draw(7);
			},
		},
         boss_biyue:{
			audio:['biyue',2],
			trigger:{player:'phaseEnd'},
		forced:true,
			content:function(){
      "step 0"
      player.gainMaxHp();
      "step 1"
      player.recover(Math.round((player.maxHp-player.hp)/2));  
      "step 2"
      game.delay();    
				player.draw(Math.max(1,player.maxHp-player.hp));
			},
		},
          boss_meihuo:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						direct:true,					
						unique:true,
         selectTarget:[1,2],
         filterTarget:function(card,player,target){
							return player!=target&&target.num('h')>=0;
						},
						content:function(){
													'step 0'     
							player.logSkill('boss_meihuo',target);    
            						
								player.gain(target.get('he'),target);
								target.$give(target.get('he'),player);							
							player.line(target,'green');			
                       'step 1'			
								if(target.name&&!target.classList.contains('unseen')){
									var skills=lib.character[target.name][3];
								}
								if(target.name1&&!target.classList.contains('unseen')){
									var skills2=lib.character[target.name1][3];
								}	
								if(target.name2&&!target.classList.contains('unseen2')){
									var skills3=lib.character[target.name2][3];
								}	
								if(skills){
									for(var j=0;j<skills.length;j++){
										target.removeSkill(skills[j]);
										var info=lib.skill[skills[j]];
										if(!lib.translate[skills[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills[j],{player:'phaseBefore'});	
									
								}
								if(skills2){
									for(var j=0;j<skills2.length;j++){
										target.removeSkill(skills2[j]);
										var info=lib.skill[skills2[j]];
										if(!lib.translate[skills2[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills2[j],{player:'phaseBefore'});		
									}
								}
								if(skills3){
									for(var j=0;j<skills3.length;j++){
										target.removeSkill(skills3[j]);
										var info=lib.skill[skills3[j]];
										if(!lib.translate[skills3[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills3[j],{player:'phaseBefore'});		
									}
								}														
								target.storage.boss_meihuo=true;
							}
						},
						group:['boss_meihuo2'],
						ai:{
							order:20,
							result:{
								player:function(player,target){
									if(target.num('h')>=0) return Infinity;

									return ai.get.attitude(player,target);
								}
							},
							expose:0.3
						},			
					},
					boss_meihuo2:{
						trigger:{global:'phaseAfter'},
						forced:true,
						popup:false,	
						filter:function(event,player){
							var targets=[];
							var players=game.players.concat(game.dead);
							for(var j=0;j<players.length;j++){
								if(!players[j].storage.boss_meihuo) continue;
								targets.push(players[j]);
							} 
							if(targets.length) return true;
							return false;
						},						
						content:function(){
							var players=game.players.concat(game.dead);
							for(var i=0;i<players.length;i++){
								if(players[i]==player) continue;	
								if(players[i].classList.contains('unseen')) continue;
								if(players[i].classList.contains('unseen2')) continue;
								if(!players[i].storage.boss_meihuo) continue;
								if(players[i].name&&!players[i].classList.contains('unseen')){
									var skills=lib.character[players[i].name][3];
								}
								if(players[i].name1&&!players[i].classList.contains('unseen')){
									var skills2=lib.character[players[i].name1][3];
								}	
								if(players[i].name2&&!players[i].classList.contains('unseen2')){
									var skills3=lib.character[players[i].name2][3];
								}	
								if(skills){
									for(var j=0;j<skills.length;j++){
										players[i].addSkill(skills[j]);		
									}
								}
								if(skills2){
									for(var j=0;j<skills2.length;j++){
										players[i].addSkill(skills2[j]);		
									}
								}
								if(skills3){
									for(var j=0;j<skills3.length;j++){
										players[i].addSkill(skills3[j]);		
									}
								}								
							}
							for(var j=0;j<players.length;j++){
								if(!players[j].storage.boss_meihuo) continue;
								players[j].storage.boss_meihuo=false;
							}
						}			
					},
     boss_guose:{						
			audio:2,
			enable:'phaseUse',	
			discard:false,
			filter:function(event,player){
				return player.countCards('he',{color:'red'})>0;
			},
			prepare:'throw',
			position:'he',
     usable:3,
			filterCard:{color:'red'},
			filterTarget:function(card,player,target){
				if(player==target) return false;
				if(target.hasJudge('lebu')) return false;
				return lib.filter.targetEnabled({name:'lebu'},player,target);
			},
			check:function(card){
				return 10-ai.get.value(card);
			},
			content:function(){
				if(target.hasJudge('lebu')){
					target.discard(target.getJudge('lebu'));
				}
				else{
					var next=player.useCard({name:'lebu'},target,cards);
					next.animate=false;
					next.audio=false;
				}
				player.draw(1+Math.floor(Math.random()*2));
			},
			ai:{
				result:{
					target:function(player,target){        
						if(target.hasJudge('lebu')) return -ai.get.effect(target,{name:'lebu'},player,target);
						return ai.get.effect(target,{name:'lebu'},player,target);
					}
				},
				order:6.9,
			}
		},
     shenshi:{
     audio:1,
			trigger:{global:['recoverBegin']},		
			filter:function(event,player){
      if(event.player==player)
      return false;
			return player.storage.baonu>0;
			},
     check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
			content:function(){
     trigger.finish();
     trigger.untrigger();       
     player.draw();
     player.storage.baonu-=1;
     },  
    ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'recover')){
							return [1,1,-0.5,-1];
						}
					}
				}
			},   
		},
     feijiangx:{group:['feijiangx1','feijiangx2']},
     feijiangx1:{
			audio:1,
			trigger:{global:'gameDrawAfter'},
			forced:true,
			unique:true,   
			content:function(){
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]==player) continue;
					player.maxHp+=game.players[i].maxHp;		
				}
				player.hp=player.maxHp;
				player.update();
      }
			},
    feijiangx2:{
     audio:1,
     trigger:{global:'phaseAfter'},
						forced:true,
						unique:true,	
       	priority:Infinity,       
         filter:function(event,player){
      if(event.player==player)
      return false;
			return true;
			},	
						content:function(){
							"step 0"
							player.phase();
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}
							_status.event.finish();
							_status.event.untrigger(true);						
					},					
     mod:{		
				globalFrom:function(from,to,current){
					return current-Infinity;
				},
        maxHandcard:function (player,num){
            return num+Infinity;
       },
       },
       },
     shensha:{
     audio:1,
			trigger:{global:['turnOverBegin']},		
			filter:function(event,player){
      if(event.player==player)
      return false;
				return _status.currentPhase==event.player;
			},
     check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
			content:function(){
        "step 0" 

player.gainPlayerCard(trigger.player,true,trigger.player.num('he'),'he');
        "step 1"
       game.delay();  
				trigger.player.die();
		},
     ai:{
                    threaten:1.5,
                    order:15,
                    result:{
                        player:Infinity,
                    },
                    effect:{
                        player:function (card,player){
                if(card.name=='sha') return [1,Infinity];
                if(card.name=='juedou') return [1,Infinity];               
            },
                    },
                },
            },
      shenmie:{
			audio:3,
			enable:'phaseUse',
			filter:function(event,player){
     if(player.hasSkill('shenmie2'))
     return false;
				return !player.storage.shenmie&&player.storage.baonu>=5;
			},		
     animationStr:"杂鱼们都去死吧！！",
			skillAnimation:true,
			animationColor:'metal',
			mark:false,
			content:function(){
				"step 0"							
				player.storage.baonu-=5;
				event.targets=game.filterPlayer();
				event.targets.remove(player);
				event.targets.sort(lib.sort.seat);
				event.targets2=event.targets.slice(0);
				player.line(event.targets,'green');
				"step 1"
				if(event.targets.length){            
					event.targets.shift().damage();                         
					event.redo();
       }
				"step 2"
				if(event.targets2.length){
					var cur=event.targets2.shift();
					if(cur&&cur.countCards('he')){
						player.gainPlayerCard(cur,'he',true,cur.num('he'));
         if(!cur.isTurnedOver()){		
	            	cur.turnOver();
player.addTempSkill('shenmie2','phaseAfter');
    }
					}
					event.redo();
				}      
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:10,
				result:{
					player:function(player){
						return game.countPlayer(function(current){
							if(current!=player){
								return get.sgn(ai.get.damageEffect(current,player,player));
							}
						});
					}
				}
			}
		},
    shenmie2:{},
      boss_jieliang:{
			     audio:2,
            priority:-10,
            trigger:{global:'drawAfter'},
            filter:function(event,player){
				if(event.player.isFriendOf(player)){
					return false;
				}
                return event.num>0&&event.player!=player;
            },
			prompt:function(event,player){
				return '是否对'+get.translation(event.player)+'发动【劫粮】？'
			},
          check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
            content:function(){
            "step 0"
 	
trigger.player.addTempSkill('fengyin',{player:'phaseAfter'});	 player.gainPlayerCard(trigger.player,true,Math.ceil(trigger.player.num('he')/2),'he');  
            "step 1"
if(trigger.player.maxHp>2){
trigger.player.loseMaxHp(Math.max(1,Math.floor(trigger.player.maxHp/4)));
         }
            },
          
        },
      boss_yaohuo:{
      audio:2,
			trigger:{player:'loseEnd'},
			forced:true,
     filter:function (event){               
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
			content:function(){
				var list=game.filterPlayer(function(target){
					return target!=player&&!target.isMad();
				});
				if(list.length){
					var target=list.randomGet();
					player.line(target,'green');
					target.goMad({player:'phaseAfter'});
				}
       else{
       player.draw();
      }
			},
    ai:{
                    threaten:1.5,
                    order:15,
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){
                if(get.type(card)!='basic') return [1,3];
            },
                    },
                },
    },
      boss_piaomiao:{
                audio:"huanhua2",
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,
     priority:Infinity,
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){											current.chooseToDiscard(true,Math.max(1,Math.floor(current.num('he')/2)),'he');
current.damage('thunder',Math.max(1,Math.ceil(current.maxHp/4)));
					}
					event.redo();
				}
			},
			ai:{
				threaten:2
			}
		},
      boss_dunjia:{group:["boss_dunjia1","boss_dunjia2","boss_dunjia3"]},
      boss_dunjia1:{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-15,
                filter:function (event){
                    return event.num>1;
                },
                content:function (){         
          trigger.num=1;
         },
            },
     boss_dunjia2:{
                trigger:{
                    player:["loseHpBegin"],
                },
                forced:true,
                priority:Infinity,
                
                content:function (){         
                trigger.finish();
                trigger.untrigger();
                player.gainMaxHp();
                player.recover();  
         },
            },
       boss_dunjia3:{
                trigger:{
                    player:["loseEnd"],
                },
                forced:true,
                priority:Infinity,
                filter:function (event,player){
             return _status.currentPhase!=player;
                },
                content:function (){                   
          player.draw(trigger.num);
         },
            },
            boss_qimen:{
                audio:2,
                trigger:{
                    player:"damageAfter",source:"damageAfter",
                   
                },
                forced:true,
                priority:Infinity,
                filter:function (event,player){
                
                    return event.num>0;
                },
                content:function (){
      "step 0"
  if(trigger.source!=undefined&&trigger.source!=player){ trigger.source.chooseToDiscard(true,Math.ceil(trigger.source.num('he')/2),'he');
  }
   player.draw();
            "step 1"
                    var skills=[]; 
                    for(var i in lib.character){ 
                        for(var j=0;j<lib.character[i][3].length;j++){ 
                            var info=lib.skill[lib.character[i][3][j]];
                            if(info&&(info.gainable||!info.unique)){
                                skills.add(lib.character[i][3][j]); 
                            }
                        } 
                    }
                    var link=skills.randomGet();
                    player.line(player,'green');
                    player.addSkill(link);
                
                    player.mark(link,{
                        name:get.translation(link),
                        content:lib.translate[link+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(link)+'】');        
                },
                ai:{
                    noe:true,
                    threaten:99,
                    effect:{
                        target:function (card,player,target,current){
                        if(card.name=='tao') return [1,9];                 
                    },
                    },
                },
            },
        	shemao:{
			enable:['chooseToUse','chooseToRespond'],
			filterCard:true,
			selectCard:2,
			position:'h',
			viewAs:{name:'sha'},
			filter:function(event,player){
				return player.countCards('h')>=2;
			},
			audio:1,
			prompt:'将两张手牌当杀使用或打出',
			check:function(card){
				if(card.name=='sha') return 0;
				return 15-ai.get.useful(card)
			},
			ai:{
				respondSha:true,
				skillTagFilter:function(player){
					return player.countCards('h')>=2;
				},
			}
		},
        boss_nuxiao:{
                audio:"ext:挑战BOSS:4",                
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                priority:Infinity,
                content:function (){
                "step 0"
              trigger.target.addTempSkill('fengyin',{player:'phaseAfter'});
                "step 1"               
               trigger.target.chooseToDiscard(true,2,'he');
                "step 2"
                event.cards=get.cards(4);
                player.showCards(event.cards,'怒哮');
                "step 3"
                for(var i=0;i<cards.length;i++){
                    if(get.type(cards[i])!='equip'&&get.type(cards[i])!='basic'){
                        ui.discardPile.appendChild(cards[i]);
                        cards.splice(i--,1);
                    }
                }
                player.gain(cards,'gain2');
        },
                mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return Infinity;
                },
                },
                ai:{
                    threaten:1.5,
                    order:15,
                    result:{
                        player:Infinity,
                    },
                    effect:{
                        player:function (card,player,target){
                  if(card.name=='zhangba') return -Infinity;  
                  if(card.name=='guding') return Infinity;
                 if(card.name=='zhuge') return -Infinity;
                if(card.name=='juedou') return -Infinity;
                if(get.type(card)=='basic') return [Infinity,Infinity];
            },                  },
                },
            },
        shenwu:{
            group:['chupaiyinxiao','boss_qiangxi','boss_xuanfeng','boss_shenji'],
         },
          chupaiyinxiao:{
                audio:2,
                trigger:{
                  player:"damageEnd",
                },
                forced:true,
                priority:-20,
                content:function (){
               },
              ai:{
                    threaten:9999,
                    order:15,                    
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha') return [1,Infinity];
                if(card.name=='juedou') return [1,Infinity];               
            },
                    },
                },
            },        
            boss_qiangxi:{
			audio:1,
			enable:'phaseUse',
			usable:1,
			filterCard:function(card){    
				return get.subtype(card)=='equip1';
			},
			selectCard:1,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){	
				target.damage();
			},
			check:function(card){
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:8,
				result:{
					player:function(player,target){
						if(player.getEquip(1)) return 0;
						if(player.hp>=target.hp) return -0.9;
						if(player.hp<=2) return -10;
						return -2;
					},
					target:function(player,target){
						if(!player.getEquip(1)){
							if(player.hp<2) return 0;
							if(player.hp==2&&target.hp>=2) return 0;
							if(target.hp>player.hp) return 0;
						}
						return ai.get.damageEffect(target,player);
					}
				}
			},
			threaten:3
		},
    boss_xuanfeng:{
                audio:1,
                trigger:{
                    player:["loseEnd","phaseDiscardEnd"],
                },
                direct:true,
                filter:function (event,player){  
                if(event.name=='phaseDiscard'){
                    return event.cards&&event.cards.length>0;
                }
                else{
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }      
                }                
                return false;
            },
                content:function (){        
                "step 0"
            event.num=2;  
           "step 1"        
    player.chooseTarget(get.prompt('xinxuanfeng'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('he');
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);
                });
                "step 2"
                if(result.bool){
         game.delay();
                    player.logSkill('boss_xuanfeng',result.targets);        
         event.targets=result.targets
         if(result.targets.length>=1){                        player.discardPlayerCard(event.targets[0],'he',true);                    
       }                 
                else{
                    event.finish();         
                }           
        }
       event.num--;            
       if(event.num>0){
                    event.goto(1);
                }                
            },
                ai:{
                    threaten:1.4,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },  
   boss_shenji:{
			unique:true,
			mod:{
				selectTarget:function(card,player,range){
					if(range[1]==-1) return;
					if(player.getEquip(1)) return;
					if(card.name=='sha'||card.name=='juedou') range[1]+=2;
				},
				cardUsable:function(card,player,num){
					if(player.getEquip(1)) return;
					if(card.name=='sha') return num+1;
				}
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(get.subtype(card)=='equip1') return -1;
					}
				}
			}
		},   
   zhanshen:{
  group:['zhanshen_1','zhanshen_2','zhanshen_3','zhanshen_4','zhanshen_5'],
			subSkill:{     
     1:{
      audio:"ext:挑战Boss:1",
			trigger:{source:'damageEnd'},
			forced:true,			
			content:function(){
				player.recover(trigger.num);
       player.draw(trigger.num-(player.maxHp-player.hp));
       }
        },
    2:{
     audio:"ext:挑战Boss:2",
			trigger:{global:['phaseBegin']},
			forced:true,
     priority:20,
			filter:function(event,player){
				return player.num('h')<=player.maxHp;
			},
			content:function(){
				player.draw(2);     
    }
    },    
    3:{
               audio:"ext:挑战Boss:1",
                trigger:{
                    target:"lebuBegin",
                },
                frequent:true,
                content:function (){
                game.delay();
                trigger.untrigger();
                          trigger.finish();
              }
            },
        4:{
			trigger:{player:'changeHp'},
			forced:true,
			unique:true,
     priority:200,
			filter:function(event,player){
			return player.isTurnedOver();
			},
			content:function(){
	  	player.turnOver();
     }
     },
    5:{
						audio:"ext:挑战Boss:1",
						trigger:{player:['damageEnd','loseHpEnd']},
						forced:true,
						unique:true,
						priority:Infinity,
           filter:function(event,player){      
    			 if(player.hp>4)
           return false;
           return _status.currentPhase!=player;
	       		},
						content:function(){          
							"step 0"
							player.phase();
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}
							_status.event.finish();
							_status.event.untrigger(true);				
						}			
					},	
					_cards_lose:{
						trigger:{player:'loseEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].originaler=player;
							}						
						}	
					},	
					_cards_gain:{
						trigger:{player:'gainEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].owner=player;
							}	
						}	
         }
         
        }
					},						
     chitu:{
			mod:{		
				globalFrom:function(from,to,current){
					return current-Infinity;
				},
}
			}, 
        },
        translate:{      
        shenshi:"神弑",
        feijiangx:'飞将',    
        feijiangx1:'飞将',       
        feijiangx2:'飞将',        
        shensha:"神杀",
        shenmie:"神灭",
        shenwu:"神武",
        zhanshen:"战神",        
        chitu:'赤兔',
       boss_qiangxi:"强袭",
       boss_xuanfeng:"旋风",
       shemao:"蛇矛",
       boss_nuxiao:"怒哮",
       boss_dunjia:"遁甲",
       boss_dunjia1:"遁甲",
       boss_dunjia2:'遁甲',
       boss_qimen:"奇门",          
       boss_piaomiao:"飘渺",
       boss_yaohuo:'妖惑', 
       boss_jieliang:"劫粮",
       boss_meihuo:"魅惑",
       boss_guose:"国色",
       boss_biyue:"闭月",
       victory:"战歌",       
       boss_jianqi:"剑气",
       boss_xiushen:"修身",
       boss_jianyu:"剑雨",
       boss_pojia:"破甲", 
       boss_tongyi:"统一",
       boss_shemian:"赦免",
       boss_shemian_info:"每当你即将受到多于1点伤害或流失多于1点体力时，你免疫之，改为你摸一张牌",
       boss_tongyi_info:"每当你回合开始、回合结束、受到伤害、流失体力或武将牌翻面时，你获得场上每名其他角色一半牌(向下取整)，且至少为1，并对其造成等同于其最大体力值1/3的伤害(向下取整)且至少为1，然后你回复X点体力，X为此伤害值(伤害被免疫时自然能发动此技能)",
       boss_pojia_info:"锁定技，每当你使用【杀】指定一名目标角色后，你无视其防具",
       boss_jianyu_info:"锁定技，你的攻击范围无限，你的【杀】可以指定任意名角色为目标",
       boss_xiushen_info:"锁定技，1、摸牌阶段你不能摸牌；2、回合开始时，你摸3~7张牌；3、你不能成为[乐不思蜀]的目标；4、你的手牌上限始终为20",
       boss_jianqi_info:"锁定技，你的【杀】有几率造成双倍伤害",
       victory_info:"限定技，游戏开始时，你摸3张牌，然后随机播放一首战歌，当你体力值低于10时，改为摸7张牌，随机播放一首战歌，然后失去此技能",
       boss_biyue_info:"回合结束时，你体力上限+1并回复一半已失去体力值(四舍五入取整)，然后摸X张牌，X为你失去体力值，且至少为1",
       boss_guose_info:'出牌阶段限3次，你可以选择一项：将一张♥或♦花色牌当做【乐不思蜀】使用；。选择完成后，你摸1~2张牌',
       boss_meihuo_info:'出牌阶段限1次，你可以指定1~2名其他角色获得其所有牌，并令其失去所有技能直到你回合结束，然后你获得之(你不能获得主公技，限定技，觉醒技)直到你下一回合开始',
       feijiangx_info:'锁定技，1、游戏开始时，你的体力上限变为其他角色体力上限之和；2、其他角色回合结束时，你额外执行一个回合；3、你的进攻距离和手牌上限为无限',
       shenshi_info:'当其他角色回复体力时，你可以弃置一枚“暴怒”标记，令其取消之，改为你摸一张牌',
       shensha_info:'其他角色在其回合内进行武将牌翻面，你可以获得其所有牌，并令其立即死亡',
	    	shenmie_info:'出牌阶段，你可以弃置5枚暴怒标记，令场上所有其他角色受到一点伤害，然后你获得其所有牌并将其武将牌翻面(发动时没有牌或背面朝上的角色不能被翻面)，每阶段限一次',
       boss_jieliang_info:'其他角色从牌堆摸牌之后，你可以获得其一半牌向上取整，然后令其失去非锁定技和限定技直至其回合结束，若该角色体力上限大于2，你令其失去其最大体力值1/4的体力上限(向下取整)，且至少为1',
		boss_yaohuo_info:'锁定技，每当你失去一张手牌时，你可以令一名随机的其他角色进入混乱状态直到其下一回合结束，若没有角色“妖惑”，则你摸一张牌',
       boss_piaomiao_info:"锁定技，回合开始时，你令场上所有其他角色弃置一半牌且向下取整，且至少为1，并对其造成X点雷电伤害，X等于其最大体力值的1/4(四舍五入取整)，且至少为1",
            boss_qimen_info:"锁定技，每当你造成或受到一次伤害时，你摸一张牌，并令对你造成伤害(不为你)的角色弃置一半牌向上取整；然后你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外）",
            boss_dunjia_info:"锁定技，1、你每次受到伤害时，最多承受1点伤害（防止多余的伤害)；2、体力流失时，你防止之，改为增加一点体力上限并回复一点体力；3、你于回合外失去牌时，你摸等量的牌",
       shemao_info:'你可以将两张手牌当【杀】使用或打出',
       boss_nuxiao_info:"锁定技，出牌阶段，你使用【杀】无数量限制，每当你使用【杀】指定目标时，可令其非锁定技和限定技失效至其下一回合阶段结束，并令其弃置2张牌，然后你亮出牌堆顶的4张牌，你获得其中的基本牌和装备牌并展示之",
       shenwu_info:'游戏开始时，你获得以下技能：【强袭】、【旋风】和【神戟】；强袭：出牌阶段，你可以弃一张武器牌，然后你对你攻击范围内的一名角色造成一点伤害，每回合限一次；旋风：当你失去装备区里的牌时，或于弃牌阶段弃置了一张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌；神戟：若你未装备武器，你使用【杀】或【决斗】指定的目标数上限+2，次数上限+1',
       chitu_info:'锁定技，你的进攻距离为无限',       
   zhanshen_info:'1、当你对一名角色造成1点伤害后，若你已受伤，则你回复1点体力，否则你摸1张牌；2、一名角色回合开始时，若你的手牌数不大于体力上限，你可以摸两张牌；3、当你你成为[乐不思蜀]的目标时，你取消之；4、当你的武将牌背面朝上时你体力值发生变化，你可在体力值发生变化后将之翻回正面；5、每当你于回合外受到伤害或流失体力时，若你的体力值等于4或更低，当前回合结束，你执行1个额外回合',
        },  
      },   
},files:{"character":["BOSS_shenhua.jpg","BOSS_zhanshen.jpg"],"card":[],"skill":[]},editable:false,
})