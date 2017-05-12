game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"★改版武将",content:function (config,pack){       
      if(config.Nie_name=='hide'){
			get.slimName=function(str){
				var str2=lib.translate[str];
				if(!str2) return '';
				if(str2.indexOf('★')==0){
					str2=str2.slice(1);				
				}
				return get.verticalStr(str2,true);
			}
		}
      lib.group.push('wang');    
			lib.group.push('xian');			
			lib.translate.wang='王';
			lib.translate.xian='仙';			
			lib.translate.wangColor="#0080ff"					
			lib.translate.xianColor="#FF6633"				
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
     // ---------------------------------------古典武侠------------------------------------------//
		if(config.gdwx){
			game.addCharacterPack({	        
        character:{
               new_xiaolongnv:['female',['qun','shu','wei','wu'].randomGet(),3,['new_ynjf','new_lx']],
               new_yangguo:['male',['qun','shu','wei','wu'].randomGet(),4,['new_arxhz']],
       },
        skill:{
        new_arxhz:{
    			audio:2,
    			trigger:{player:['damageBegin']},
         priority:-100,
         unique:true,
         filter:function(event,player){
         return (event.source!=undefined)&&event.num>=player.hp;
         },
         check:function (event,player){
                return ai.get.attitude(player,event.source)<=0;
            },   			
    			content:function(){
          'step 0'
        player.line(trigger.source,'fire');
        game.delay(3.5);
        trigger.source.damage(trigger.source.hp);
        trigger.source.update();
          'step 1'
         if(!trigger.source.isAlive()){
         trigger.finish();
         trigger.untrigger();    
         player.recover();         
        }        
       else{
trigger.source.recover(trigger.source.maxHp-trigger.source.hp);
      }
     },
     ai:{       
				result:{
					target:function(card,player,target,current){        
               if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing')) return [1,-2];				      
     if(player.countCards('h','tao')<1&&target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
              }
				  	 }
          }
        }
      },
     new_ynjf:{
                audio:true,
                trigger:{
                    player:"shaBegin",
                },                
                unique:true,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
              },
                content:function(){
                if(trigger.target.sex=='male'){
                trigger.target.addSkill('new_ynjf1');
                 }
                 else{
                 trigger.target.loseHp();
               }             
           },
         ai:{
                threaten:1.7,
             }
          },   
          new_ynjf1:{
     trigger:{player:'phaseAfter'},			
      forced:true,
      mark:true,            
      unique:true,            
			content:function(){
      player.removeSkill('new_ynjf1');          
     },
     marktext:"素",
                intro:{
                    content:"该角色不能使用♣和♠牌",               
         },
			   mod:{
				cardEnabled:function(card){if(get.color(card)=='black') return false
       }
			}
		},  
        new_lx:{
        group:'xlnbgm',
     trigger:{player:'damageBefore'},			
      forced:true,                
      unique:true,
      filter:function(event,player){
      return (event.source!=undefined)&&player.hp<player.maxHp&&event.source.sex=='male'&&Math.random()<=0.5;      
     }, 
			content:function(){      
     trigger.finish();
     trigger.untrigger();
          }         
         },
         xlnbgm:{
                mode:['identity'],                
                audio:1,
                trigger:{
                    global:"gameDrawAfter",
                },
                filter:function (event,player){
                return player.name=='new_xiaolongnv';
            },
                forced:true,
                unique:true,               
                content:function (){
                player.addSkill('xlnbgm1');
               }
              },
             xlnbgm1:{
                audio:1,
                trigger:{
                    player:"dieBegin",
                },
                filter:function (event,player){
                return player.name=='new_xiaolongnv';
            },
                forced:true,
                unique:true,
                content:function (){
             player.removeSkill('xlnbgm');
             player.removeSkill('xlnbgm1');
              }
            },
        },
        perfectPair:{
        new_yangguo:['new_xiaolongnv'],
        },
        characterIntro:{
        new_yangguo:'杨过，名过，字改之，金庸武侠小说《神雕侠侣》中的主人公，前作《射雕英雄传》的杨康与穆念慈之子，西毒欧阳锋的义子。名字为郭靖、黄蓉所取，取“有过则改之”之意。杨过叛逆机智、情绪激烈、风流英俊，所学武功博杂，涉猎古墓派武功、蛤蟆功、打狗棒法、弹指神通及一些九阴真经，最终合成创作为黯然销魂掌。幼时流落嘉兴，14岁时获郭靖接到桃花岛居住，后被送至全真教，又被古墓派小龙女收养，同习玉女心经。后相助郭家，大战金轮法王。又因“师生恋”惊世骇俗，多番寻找出走的姑姑。杨过在绝情谷身中情花毒，又遭郭芙斩下右臂，后受神雕指导学得独孤求败海潮练剑的秘诀。然后大战全真教，当场和师傅结为夫妇。又因郭芙之故，妻子小龙女剧毒难治投崖。十六年后与亦师亦友的神雕闯荡江湖，行侠仗义，人称“神雕侠”。后重见绝情谷底的小龙女，相助郭家保卫襄阳，打败金轮法王和蒙古大汗，又获封新五绝“西狂”，结识郭襄、张三丰等人，最终归隐古墓。',
        new_xiaolongnv:'小龙女，金庸武侠小说《神雕侠侣》中的女主人公，出生时被遗弃在终南山下，被古墓派林朝英的丫环收为弟子，十八年来始终与孙婆婆为伴。十八岁那年破戒收了古墓派第一位男弟子杨过为徒，几经波折与杨过互生情愫，感情之路上劫难重重、几度生死，与杨过在多番生死浩劫中更是深深相爱，其间跨越一十六年。十六年后与杨过义助郭靖、黄蓉守卫襄阳，成为扬名天下的“神雕侠侣”。第三次华山论剑后，与杨过归隐古墓。',
         },
        translate:{
        new_xiaolongnv:'小龙女',
        new_yangguo:'杨过',
         
        new_ynjf:'玉女剑法',
        new_lx:'怜惜',
        new_ynjf1:'素心',
        new_arxhz:'黯然销魂掌',
        new_arxhz_info:'当你即将受到致命伤害时，你可以对来源目标造成致命伤害，若其死亡，则你防止受到该伤害并回复一点体力，否则其回复至最大体力值。',
           new_ynjf_info:'当你使用【杀】指定一名角色为目标后，若目标为男性，你可以令该角色不能使用♣和♠牌，直到其回合结束；若为女性，你可以令其失去一点体力。',
           new_lx_info:'锁定技，当你即将受到伤害时，若此时你已受伤，且造成伤害的来源为男性角色，你有50%的几率防止之。',
        },
       },'古典武侠')
      }
     // ---------------------------------------神将&民间------------------------------------------//
		if(config.news_){
			game.addCharacterPack({	        
        character:{
                new_sluxun:["male","shen",3,["slianying","sqianxun"]],
                yao_simayi:["male",['qun','shu','wei','wu'].randomGet(),3,["new_zhabing","new_guimou"],[]],
               yao_lingtong:["male",['qun','shu','wei','wu'].randomGet(),4,["new_zhongyi"],[]],
               gui_lvbu:["male",['qun','shu','wei','wu'].randomGet(),4,["new_sheji","new_juelu"],[]],
               yao_zhoutai:["male",['qun','shu','wei','wu'].randomGet(),4,["new_buhui"],[]],               
               news_huanggai:['male','shen',5,['new_bianchi']],
               new_szhugeliang:['male','qun',3,['new_shenji','new_miaosuan','kanpo']],
               new_szhaoyun:['male','shen',1,['new_juejing','longhun']],
               news_sunquan:['male','shen',3,['new_yingwu','new_xionglue']],
               news_lvbu:['male','shen',4,['new_yongwu']],
               sheng_zhenji:["female",['qun','shu','wei','wu'].randomGet(),3,["new_liufeng","new_huixue"],[]],
         },
               characterIntro:{
              new_szhugeliang:"字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",
              new_szhaoyun:'字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”',
          },
          skill:{
          new_yingwu:{
                audio:2,
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
                trigger.num+=1+Math.floor(Math.random()*2);
            },
         mod:{
                    maxHandcard:function (player,num){
                    return num+2;
             }
               },
            ai:{
                    threaten:1.5            
                },
          },
       new_xionglue:{
				group:['new_xionglue1','new_xionglue2','new_xionglue3','new_xionglue4'],

         ai:{
                    threaten:2
              },       
          },
       new_xionglue1:{
				audio:true,
				enable:'chooseToUse',
				prompt:'将一张张红桃牌当【五谷丰登】使用',				
				position:'he',
				check:function(card,event){
         var player=get.owner(card);
    if(player.hp>=player.maxHp)
     return 8-ai.get.value(card)      					
					return 6-get.value(card);
				},				
				viewAs:{name:'wugu'},
				filter:function(event,player){
					return player.countCards('he',{suit:'heart'})>=1;
				},
				filterCard:function(card){
					return get.suit(card)=='heart';				
			 },
      ai:{
					order:3,
        }
       },
			new_xionglue2:{
				audio:true,
				enable:'chooseToUse',
				prompt:'将一张方片当作【桃园结义】使用',				
				position:'he',
				check:function(card,event){				
					return 10-get.value(card);
				},				
				viewAs:{name:'taoyuan'},
				filter:function(event,player){
					return player.countCards('he',{suit:'diamond'})>=1;
				},
				filterCard:function(card){
					return get.suit(card)=='diamond';				
			},
      ai:{
					order:8,
        }
       },
			new_xionglue3:{
				audio:true,
				enable:'chooseToUse',
				prompt:'将一张黑桃牌当【万箭齐发】使用',				
				position:'he',				
				viewAs:{name:'wanjian'},
       filter:function(event,player){
					return player.countCards('he',{suit:'spade'})>=1;
				},			
				filterCard:function(card){
					return get.suit(card)=='spade';				
		  	},
       ai:{

					order:8,
        }
       },

        new_xionglue4:{
				audio:true,
				enable:'chooseToUse',
				prompt:'将一张梅花牌当【南蛮入侵】使用',				
				position:'he',
				check:function(card,event){					
					return 10-get.value(card);
				},				
				viewAs:{name:'nanman'},
       filter:function(event,player){
					return player.countCards('he',{suit:'club'})>=1;
				},
				filterCard:function(card){
					return get.suit(card)=='club';				
			 },
      ai:{
					order:8,
        }
       },			
       new_yongwu:{
       group:'new_yongwu2',
                audio:2,
                forced:true,
                trigger:{
                    player:"phaseDrawBegin",
                },                
                content:function (){
                trigger.num+=2;
                },
            mod:{
         selectTarget:function(card,player,range){      
				if(card.name=='sha'&&range[1]!=-1) range[1]+=Math.ceil(player.num('e')/2);         
		   		},
        cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+Math.ceil(player.num('e')/2);
                },
        attackFrom:function (from,to,num){            
            return num-Math.ceil(from.num('e')/2);                  
                }              
            },
         ai:{
                threaten:2.2,
             }
          },
         new_yongwu2:{
                audio:1,
                forced:true,
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
                return event.card&&event.card.name=='sha'&&event.targets.length>1&&player.num('e')>0;
                },               
                content:function (){}},
       new_liufeng:{
                audio:2,
                trigger:{
                    player:"loseEnd"},
                frequent:true,                
                unique:true,
                filter:function (event,player){
             for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='he') return true;
                    if(_status.currentPhase!=player) return true;
                }
                return false;
            },
                content:function (){                   
          player.draw(trigger.num);         
        },
        ai:{
                    threaten:1.4,                   
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){
                        if(player.num('h')<=2||player.num('h')<player.hp) return false;
                  }

                },
              },
            },
       new_huixue:{
                audio:2,
                enable:"phaseUse",
                filterCard:false,
                position:"he",
                usable:1,                
                check:function (card){                
               return 15-ai.get.value(card);                             

             },
                filterTarget:function (card,player,target){
                if(target.sex!='male') return false;
                if(target.hp>=target.maxHp) return false;
                if(target==player) return false;
                return true;
            },
                content:function (){
               player.chooseToDiscard(true,'h');                
                player.recover();
                target.chooseToDiscard(true,'h');
                target.recover();
            },
                ai:{
					order:5.5,
					result:{
						player:function(player){
							if(player.hp<player.maxHp) return 4;
							if(player.countCards('h')>player.hp) return 0
							return -1;
						},
						target:4
					},
					threaten:2.1,
				}
			},
       new_zhabing:{
                audio:1,
                trigger:{
                    player:"phaseEnd",
                },
                check:function(event,player){
					return player.countCards('h','tao')||player.countCards('h','jiu')||player.hp>1;
               },           
                content:function (){
                  'step 0'
                player.loseHp(1);
                  'step 1'
                player.addTempSkill('new_zhabing2',{player:'phaseBegin'});             
       }     
     },
      new_zhabing2:{     
     trigger:{player:'damageBefore'},			
      forced:true,
      mark:true,            
      unique:true,      
			content:function(){
     trigger.finish();
     trigger.untrigger();          
     },
     marktext:"诈",
                intro:{
                    content:"该角色防止受到任何伤害",               
         },
       ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'damage')){
							return [0,0];
						}
					}
				}
			},
		},
       new_guimou:{
                audio:1,
                forced:true,
                trigger:{
                    player:"phaseDrawBegin",
                },                
                content:function (){
                trigger.num=2+player.maxHp-player.hp;
                },
         ai:{
                threaten:1.4,
             }
          },
          new_zhongyi:{
                audio:1,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                if(player.num('h')>=1) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(player.hp-player.num('h'));
            },
                ai:{
                    threaten:1.4,
                    effect:{
                        target:function (card){
                        if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                    },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){

                        if(player.num('h')!=1) return false;
                  }
                },
              },
            }, 
       new_sheji:{
				audio:2,
        forced:true,
				trigger:{player:'shaBegin'},
				filter:function(event,player){
       return get.distance(event.target,player,'attack')<=1;
        },
				content:function(){			
						trigger.directHit=true;			
			},
      ai:{
            threaten:1.4,
        }
      },
      new_juelu:{
        mod:{
         selectTarget:function(card,player,range){
              if(player.countCards('h')!=1) return;
				if(card.name=='sha'&&range[1]!=-1) range[1]++;         
		   		},
        attackFrom:function (from,to,num){
            if(from.countCards('h')!=1) return;
            return num-Infinity;                  
                }
              }
            },
          new_buhui:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='sha') return false;
                },
              },
            },
         new_bianchi:{
      audio:2,
      trigger:{
        player:"phaseBegin",
    },
    forced:true,
    content:function(){
    "step 0" 
    game.delay();
    player.loseHp(1);
    "step 1"
    player.draw(2+player.maxHp-player.hp);
    },
    mod:{
                cardUsable:function (card,player,num){
                if(card.name=='sha') return num+1;
          },              
        },
     ai:{
                    noe:true,                    
                    effect:{
                        player:function (card,player){
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,3];
                  },                  
               },          
				threaten:function(player,target){
         if(target.hp<=target.maxHp) return (target.maxHp-target.hp)*0.3+1.5;        					
				},
			}
		},
        new_shenji:{
			audio:2,
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.num('he')>0;
			},
			content:function(){
				"step 0"
				player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
				get.translation(trigger.player.judging[0])+'，是否发动【神机】？','he').ai=function(card){
					var trigger=_status.event.parent._trigger;
					var player=_status.event.player;
					var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
					var attitude=ai.get.attitude(player,trigger.player);
					if(attitude==0||result==0) return 0;
					if(attitude>0){
						return result;
					}
					else{
						return -result;
					}
				};
				"step 1"
				if(result.bool){
					player.respond(result.cards,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.logSkill('new_shenji');
					player.$gain2(trigger.player.judging[0]);
					player.gain(trigger.player.judging[0]);
					trigger.player.judging[0]=result.cards[0];
					trigger.position.appendChild(result.cards[0]);
					game.log(trigger.player,'的判定牌改为',result.cards[0]);
				}
				"step 3"
				game.delay(2);
			},
			ai:{
				tag:{
					rejudge:1
				},
				threaten:2.2
			}
		},
     new_miaosuan:{
                audio:2,               
                trigger:{
                    global:"useCard",
                },
                forced:true,
                priority:-1,
                filter:function (event,player){
        if(event.player==player)
        return false;
        return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
      content:function (){
     game.delay(0.5);
     player.draw();  
  }
    },
         new_juejing:{        
			trigger:{global:['phaseBegin','changeHp']},
			forced:true,
      audio:1,
      priority:-1,
			filter:function(event,player){
				return _status.currentPhase!=player;
      },
			content:function(){
       game.delay(0.2);
				player.draw();
		},
    mod:{       
		        		maxHandcard:function(player,num){
					return num+(3*player.num('e'));
				}
		 },
     ai:{
    threaten:2.4,
     },
		},
            sqianxun:{
                audio:4,
                trigger:{
                    target:["lebuBefore","tiesuoBefore"],                 
                },
                frequent:true,
                content:function (){
                game.delay(0.5);
                trigger.untrigger();
                trigger.finish();
              },
            ai:{                                   
                    effect:{
                        target:function (card,player,target,current){
                        if(card.name=='lebu'||card.name=='tiesuo') return [0,0];
                 }
               }
             }               
           },         
            slianying:{
                group:["slianying1","slianying2","slianying3"],
            },
            "slianying1":{
               audio:2,
                trigger:{
                    source:"damageAfter",
                },          
                filter:function (event,player){
                 return !event.player.isLinked();               
               },
                check:function (event,player){
                return ai.get.attitude(player,event.player)<=0;
            },            
              priority:-200,
              content:function (){                                 
                "step 0"
                game.delay();                   
                trigger.player.link();                              
                },
            },
            "slianying3":{
                trigger:{
                    source:"damageBefore",
                },
                priority:8,
                forced:true,
                content:function (){                                 
                "step 0"                                 
                trigger.nature='fire';                              
                },
            },
            "slianying2":{
                audio:3,
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function(event,player){
				return _status.currentPhase==player;
			},               
                content:function (){                
                player.draw();
        },
                ai:{
                    threaten:2.3,
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
         },
         translate:{
            new_szhaoyun:"★神赵云",
            news_sunquan:'★神孙权',
            news_lvbu:'★神吕布',
            sheng_zhenji:'圣甄姬',
            yao_simayi:'妖司马懿',
            yao_lingtong:'妖凌统',
            gui_lvbu:'鬼吕布',
            yao_zhoutai:'妖周泰',
            new_szhugeliang:"★妖诸葛亮",
            new_sluxun:"★神陆逊",            
            news_huanggai:"★神黄盖",
         
           new_bianchi:"鞭笞",
           new_buhui:'不悔',
           new_sheji:'射戟',
           new_juelu:'绝戮',
           new_zhongyi:'重义',
           new_zhabing:'诈病',
           new_zhabing2:'诈病',
           new_guimou:'鬼谋',
           new_liufeng:'流风',
           new_huixue:'回雪',
           new_yongwu:'勇武',
           new_yongwu2:'勇武',
           new_yingwu:'英武',
           new_xionglue:'雄略',
           new_xionglue1:'雄略♥',
           new_xionglue2:'雄略♦',
           new_xionglue3:'雄略♠',
           new_xionglue4:'雄略♣',
           new_shenji:'神机',
           new_miaosuan:"妙算",
           slianying:"以逸",
            "slianying1":"以逸",
            "slianying2":"以逸",
            "slianying3":"以逸",
            sqianxun:"待劳",
            new_juejing_info:'锁定技，你的回合外，一名角色回合开始阶段或体力发生变化时，你摸一张牌；你的手牌上限+X，X为3*你装备区里的牌数。',
            new_bianchi_info:"锁定技，回合开始阶段，你失去一点体力，然后摸2+X张牌，X为你已损失的体力值；出牌阶段，你使用【杀】的次数上限+1。",
            "sqianxun_info":"锁定技，当你成为【铁索连环】或【乐不思蜀】的目标时，取消之。",            
            new_miaosuan_info:"锁定技，每当一名其他角色使用或打出一张非转化的非延时锦囊牌时，你摸一张牌。",
	        	new_shenji_info:'任意一名角色的判定生效前，你可以打出一张牌替换之',
           new_yingwu_info:'锁定技，摸牌阶段，你可以额外摸1~2张牌，你的手牌上限+2。',
           new_xionglue_info:'你可以将牌按下列规则使用：♥当【五谷丰登】，♦当【桃园结义】，♣当【南蛮入侵】，♠当【万箭齐发】。',
           new_yongwu_info:'锁定技，摸牌阶段，你额外摸两张牌；出牌阶段，你可以额外使用一张【杀】；你的攻击范围+X；你使用【杀】指定的目标数上限+X，次数上限+X，X为你装备区里牌数的一半且向上取整。',
           new_liufeng_info:'你的回合外，每失去一张牌张牌，可以立即摸一张牌。',
           new_huixue_info:'出牌阶段开始时，你可以选择一名已受伤的男性角色，你与他先后弃置一张手牌，然后各回复一点体力。',
           new_zhabing_info:'回合结束阶段，你可以自减一点体力，若如此做，直到你下一回合开始前不受任何伤害。',
           new_guimou_info:'摸牌阶段，摸X+2张牌，X为当前损失的体力值。',
           new_zhongyi_info:'当你失去最后一张手牌时，你可以摸取与当前体力值相同的牌数。',
           new_sheji_info:'锁定技，出牌阶段，若你在目标角色的攻击范围内，则你对该角色使用的【杀】不可被闪避。',
           new_juelu_info:'当打出的【杀】为最后一张手牌，攻击范围无限，你可以为这张【杀】指定至多两名目标角色。',
           new_buhui_info:'锁定技，你不能成为【杀】的目标。',
            "slianying_info":"1、在你的回合，每当你使用一张牌，你摸一张牌；2、你对目标造成伤害时，可将其武将牌横置；3、锁定技，你即将造成的伤害均视为火属性伤害。",
         },
       },'神将&民间')
      }  
    // ---------------------------------------新版武将------------------------------------------//
		if(config.new_){
			game.addCharacterPack({	        
        character:{
               newsp_machao:['male','qun',4,['zhuiji','new_shichou']],
               dl:["female","qun",3,["biyue","wushuang"]],                              
               new_menghuo:['male','shu',4,['huoshou','new_zaiqi']],
               new_wangyun:['male','qun',3,['new_lianji','new_jiedao']],
               new_pangde:['male','qun',4,['mashu','new_mengjin']],
              qibing:['male','qun',4,['mashu','new_chongfeng','guding_skill']],
              dunpaibing:['male','wu',4,['renwang_skill','new_chongfeng']],
              futoubing:['male','wei',4,['guanshi_skill','new_chongfeng']],              
              new_zhangchunhua:['female','wei',3,['new_jueqing','shangshi']],
              new_lukang:['male','wu',4,['new_shenshi']],
              huangjin:['male','qun',3,['fuji','leiji','guidao']],
              new_guanping:['male','shu',4,['new_longyin']],
              new_guanyinping:['female','shu',3,['huxiao','xueji','new_wuji']],
              new_wangyi:['female','wei',3,['new_zhenlie','miji']],               
              new_daqiaoxiaoqiao:['female','wu',3,['new_xingwu','luoyan']],              
              tengjiabing:['male','qun',3,['new_tengjia','xionghan']],              
              new_mateng:['male','qun',4,['mashu','new_xiongyi']],
             new_zhangjiao:['male','qun',3,['leishen','xinguidaox','leidian','new_huangtian'],['zhu']],
             new_yuanshu:['male','qun',4,['xin_yongsi','weidi']],

            new_dianwei:['male','wei',4,['xinqiangxix']],
		         new_taishici:['male','wu',4,['new_tianyi']],
             new_gongsunzan:['male','qun',4,['yicong','mubing']],
             new_zhurong:['female','shu',4,['juxiang','manbing']],
             new_wutugu:['male','qun',5,['new_tengjia']],
             new_yuanshao:['male','qun',4,['xin_luanji','xueyi'],['zhu']],
            	new_xuhuang:['male','wei',4,['xinduanliangx']],
		         new_lusu:['male','wu',3,['xinhaoshi','dimeng']],
		         new_sunjian:['male','wu',4,['new_yinghun']],
             new_xiahouyuan:['male','wei',4,['new_shensu']],		
	          	new_huangzhong:['male','shu',4,['new_liegong']],
	          	new_weiyan:['male','shu',4,['xinkuanggux']],
		         new_xiaoqiao:['female','wu',3,['new_tianxiang','new_hongyan']],
            new_zhoutai:["male","wu",4,["xinbuqu","xinfenji"]],
            new_zuoci:["male","qun",3,["qimen","dunjia"]],            
            new_sunxiu:["male","wu",3,["xinyanzhu","xinxingxue","xinzhaofu"],["zhu"]],
            new_zhangxingcai:["female","shu",3,["xinshenxian","qiangwu"]],
            new_dongzhuo:["male","qun",8,["xinjiuchi","roulin","xinbenghuai","new_baonue"],["zhu"]],
            new_jiangwei:["male","shu",4,["xintiaoxin","kanpo"]],
            new_liushan:["male","shu",3,["xinxiangle","fangquan","ruoyu"],["zhu"]],
            new_dengai:["male","wei",4,["xintuntian","xinzaoxian"]],
            new_sunce:["male","wu",4,["new_jiang","new_hunzi","new_zhiba"],["zhu"]],
            zhangzhao:["male","wu",3,["new_zhijian","new_guzheng"]],
            new_caiwenji:["female","qun",3,["new_beige","xinduanchang"]],
            new_lingtong:["male","wu",4,["xinxuanfeng"]],
            shenjianshou:["male",['qun','shu','wei','wu'].randomGet(),3,["shenshe"]],            
            liuguanzhang:["male","qun",3,["rende","jieyi"]],
            new_caocao:["male","wei",3,["xinhujia","xinjianxiong"],["zhu"]],
            new_simayi:["male","wei",3,["xinfankui","xinguicai"]],
            new_caopi:["male","wei",3,["xinxingshang","xinfangzhu","xinsongwei"],["zhu"]],
            new_caoren:["male","wei",4,["xinjushou"]],
            xhdxhy:["male","wei",4,["ganglie","shensu"]],
            new_xiahoudun:["male","wei",4,["xinganglie"]],
            new_zhangliao:["male","wei",4,["xintuxi"]],
            new_xuchu:['male','wei',4,['new_luoyi']],
            new_guojia:["male","wei",3,["tiandu","xinyiji"]],
            new_zhenji:["female","wei",3,["xinluoshen","xinqingguo"]],
            new_liubei:["male","shu",4,["xinrende","xinjijiang"],["zhu"]],
            new_guanyu:["male","shu",4,["xinwusheng"]],
            new_zhangfei:['male','shu',4,['new_paoxiao']],
            new_zhugeliang:["male","shu",3,["xinguanxing","xinkongcheng"]],
            new_zhaoyun:["male","shu",4,["xinlongdan","qinggang_skill"]],
            new_machao:['male','shu',4,['mashu','new_tieji']],
            new_huangyueying:["female","shu",3,["xinjizhi","qicai"]],
            new_sunquan:["male","wu",4,["xinzhiheng","xinjiuyuan"],["zhu"]],
            new_ganning:['male','wu',4,['new_qixi']],
            new_lvmeng:["male","wu",4,["xinkeji"]],
            new_huanggai:["male","wu",4,["xinkurou"]],
            new_zhouyu:["male","wu",3,["xinyingzi","fanjian"]],
            new_daqiao:["female","wu",3,["new_guose","new_liuli"]],
            new_luxun:["male","wu",3,["xinqianxun","xinlianying"]],
            new_sunshangxiang:["female","wu",3,["xinxiaoji","xinjieyin"]],
            new_huatuo:["male","qun",3,["xinqingnang","xinjijiu"]],
            new_lvbu:["male","qun",4,["mashu","wushuang","feijiang"],["zhu"]],
            new_diaochan:["female","qun",3,["lijian","xinbiyue"]],             
            xiongnu:["male","wei",8,["new_jingqi","new_jielue"],["zhu","boss"],'wei'],
        },
       perfectPair:{       
		new_xiahoudun:['new_houyuan','new_xiahouyuan'],
		new_zhenji:['new_caopi'],
		new_caocao:['xuzhu','new_xuchu','new_dianwei'],
		new_huangzhong:['weiyan','new_weiyan'],
		new_zhugeliang:['huangyueying','new_huangyueying'],
		new_liubei:['guanyu','zhangfei','new_guanyu','new_zhangfei','ganfuren'],
		new_zhaoyun:['liushan','new_liushan'],
		new_daqiao:['xiaoqiao','new_xiaoqiao'],
		new_zhouyu:['new_huanggai','new_xiaoqiao','xiaoqiao','new_huanggai'],
		new_sunquan:['new_zhoutai','zhoutai'],
		new_lvbu:['new_diaochan','diaochan'],
		new_machao:['madai','mayunlu'],
		new_zhangliao:['zangba']
	},
        characterIntro:{                                     
                new_menghuo:'中国三国时期南中少数族首领。系东汉末益州建宁郡( 今云南晋宁东 )大姓，身材肥硕。生卒年不详。官至御史中丞。曾被诸葛亮七擒七纵，传为佳话。',
                new_pangde:"庞德（？－219年），字令明，南安郡狟道县（今甘肃天水市武山县四门镇）人，约在初平年间，投奔马腾帐下，在平定羌民的征伐中屡立战功。建安年间，庞德跟随马超征战平阳，抵御袁将郭援、高干，在马上亲斩郭援首级。张白骑在弘农反叛时，庞德也参与战斗。每次出征常冲锋陷阵，勇冠凉州三军。后几经辗转，随张鲁归降于曹操麾下，被授官立义将军，封关内亭侯，食邑三百户。219年，庞德协助曹仁抵御关羽。两军对垒期间，常骑白马驰骋奔杀，曾一箭射中关羽前额，被关羽军称作“白马将军”。时值汉水暴溢，他率诸将与关羽殊死搏斗，箭镞射尽，又短兵相接。而他格斗益怒，胆气愈壮，力战多时后因小舟被洪水打翻为关羽军所擒。关羽敬重他的刚毅威武，以封将劝降，但他却怒目不跪，怒斥关羽，最终殒身殉节。",
                new_wangyun:"王允（137年－192年），字子师，太原祁（今山西祁县）人（据《后汉书》）。东汉末年大臣。王允出身官宦世家。他十九岁就开始任公职，壮年时任豫州刺史。因为在和中常侍张让的斗争中失败，王允被迫去官隐居，在中平六年，何进掌权之后重新出仕，历任从事中郎和河南尹。在何进被宦官诛杀，董卓掌权时，他已经代替杨彪成为了司徒兼尚书令。身为地方官勤政爱民，由于朝廷腐败而被迫在此为官，从而密谋刺杀董卓。董卓死后，王允与吕布共执朝政，但是董卓余党李傕、郭汜、樊稠等率军攻破长安，吕布出逃，王允被处死，时年56岁。",
             		new_zhangchunhua:'西晋宣穆皇后张春华（189－247），河内平皋（今河南温县）人。她是晋宣帝司马懿之妻，晋景帝司马师、晋文帝司马昭的母亲。后被追尊为皇后。',
             new_lukang:'陆抗（226年－274年），字幼节，吴郡吴县（今江苏苏州）人。三国时期吴国名将，丞相陆逊次子。陆抗袭父爵为江陵侯，为建武校尉，领其父众五千人。后迁立节中郎将、镇军将军等。孙皓为帝，任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事，驻乐乡（今湖北江陵西南）。凤凰元年（272年），击退晋将羊祜进攻，并攻杀叛将西陵督步阐。后拜大司马、荆州牧，卒于官，终年49岁。与陆逊皆是吴国的中流砥柱，并称“逊抗”，被誉为吴国最后的名将。',
             new_guanping:'关平是关羽在战乱中所收之义子。关羽脱离曹军后，与刘备于关定家中重逢，关定欲使年仅十八岁的关平随关羽同行，刘备便主张让关羽与关平结为义父子。自此后关平随侍在关羽身边，一生东征西讨。他武勇过人，不逊乃父，曾跟随刘备出征西川，立下战功，后来又与曹魏猛将庞德大战三十回合，不分胜负。',
             new_guanyinping:'河东解县（今山西运城）人，美髯公关羽之女。因在关羽的四个子女中排行第三，故又被称作“关三小姐”、“关氏三姐”或“关羽三小姐”。传说她是赵云的弟子、并随同诸葛亮平定南蛮。',
             new_wangyi:'益州刺史赵昂之妻，赵英、赵月之母。马超作乱凉州时，王异协助丈夫守城，多有功勋，自马超攻冀城至祁山坚守，赵昂曾出奇计九条，王异皆有参与。',             
             new_daqiaoxiaoqiao:'大乔、小乔为汉太尉乔玄之女，实为误传）的两个女儿大乔与小乔，名不详。二乔容貌美丽，以美貌出名。大乔为孙策妾，小乔为周瑜妻。',             
             tengjiabing:'身着藤甲的士兵；藤甲是以西南荒蛮之地所生野藤为原料，经能工巧匠加工制作藤甲，又以桐油浸泡，七七四十九天后才制成。此甲又轻又坚，善能防箭，刀砍枪刺不入，遇水不沉，战场之上所向无敌。',
             new_yuanshu:'字公路，汝南汝阳人，袁绍之弟。初为虎贲中郎将。董卓进京后以袁术为后将军，袁术因畏祸而出奔南阳。初平元年与袁绍、曹操等同时起兵，共讨董卓。后与袁绍对立，被袁绍、曹操击败，率馀众奔九江，割据扬州。建安二年称帝，建号仲氏。',
		        new_zhangjiao:'乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。',
            shenjianshou:'射箭出神入化，百发百中被称为神箭手',
            new_gongsunzan:'字伯珪，汉族，号“白马义从”。辽西令支人。东汉末年献帝年间占据幽州一带的军阀，汉末群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑氏山中读书，粗通经传。',
        		new_wutugu:'南蛮乌戈国主，身长丈二（约合现在2.77米），不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒。',
            zhangzhao:'张昭（156年－236年），字子布。徐州彭城（今江苏徐州）人。三国时期孙吴重臣。',
            new_sunxiu:'孙权第六子，孙綝发动政变罢黜孙亮后，迎立孙休为帝。后孙綝专权，孙休遣使丁奉等人将其诛杀。孙休在位期间，颁布良制，嘉惠百姓，促进了东吴的繁荣。',
          new_zhangxingcai:"蜀名将张飞与夏侯氏所生之女，刘禅的妻子，史上称为“敬哀皇后”。",            
            dl:"吕布与貂蝉都是三国的人物，他们有一段奇妙的时事佳缘。",
           new_lingtong:"字公绩，吴郡馀杭人，三国时期吴国名将。凌操之子，官至偏将军。",
            new_huangzhong:"字汉升，今河南南阳人。汉末三国时期蜀汉名将。本为刘表部下中郎将，后归刘备，并助刘备攻益州刘璋，在定军山一战中阵斩曹操部下名将夏侯渊。备称汉中王后改封后将军，赐关内侯。",
            new_weiyan:"字文长，义阳人。三国时期蜀汉名将，诸葛亮死后，魏延因被陷害谋反而遭杨仪一党所杀。",
            new_xiahouyuan:"字妙才，沛国谯人。东汉末年曹操部下名将，夏侯惇之族弟，八虎骑之一。群雄征讨董卓时随曹操一同起兵，后征战四方，屡立功勋。在平定马超叛乱后负责西北防线的镇守。公元219年刘备攻打汉中，被刘备部将黄忠所杀。",
            new_caoren:"字子孝，沛国谯人，曹操的从弟。三国时期曹魏名将，官至大司马。谥曰忠侯。",
            new_xiaoqiao:"庐江皖县人也。父桥国老德尊于时。小乔国色流离，资貌绝伦。建安三年，周瑜协策攻皖，拔之。娶小乔为妻。后人谓英雄美女，天作之合。",
            new_zhoutai:"字幼平，九江下蔡人，三国时期吴国武将。早年与蒋钦随孙策左右，立过数次战功。孙策讨伐六县山贼时，周泰胆气绝伦，保卫孙权，勇战退敌，身受十二处伤。有诗云：三番救主出重围，忠勇如公世所稀。遍体疮痍犹痛饮，血痕残酒满征衣。",
            new_yuji:"自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。",
            new_zhangjiao:"乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。",
             new_dianwei:"己吾城村人。东汉末年曹魏猛将。擅使大双戟，为人壮猛任侠，曾为乡人刘氏报仇，杀人出市，人莫敢近。相貌魁梧，膂力过人。建安二年（197），张绣背叛曹操，典韦为保护曹操而独挡叛军，击杀多人，但最终因寡不敌众而战死。",
            new_xunyu:"荀彧，字文若，颍川颍阴（今河南许昌）人。东汉末年曹操帐下首席谋臣，杰出的战略家。自小被世人称作“王佐之才”。",

            new_pangtong:"庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。",
            "xinsp_zhugeliang":"字孔明，号卧龙居士，琅琊阳都人。刘备曾“三顾茅庐”得见卧龙。卧龙以一篇《隆中对》分析天下形势，提出先取荆州，再取益州成鼎足之势的说法。《三国演义》中的诸葛亮善用“火攻”，曾用火攻战术赢得多场战役，如“火烧赤壁”、“火烧博望坡”、“火烧藤甲兵”等。",
            new_taishici:"太史慈，字子义，东莱黄县（今山东龙口东黄城集）人。东汉末年武将，守言应诺，恪遵信义，始终如一，弭息诽论。官至建昌都尉。弓马熟练，箭法精良。原为刘繇部下，后被孙策收降，于赤壁之战前病逝，死时才四十一岁。",
            new_pangde:"字令明，东汉末年雍州南安郡狟道县（今甘肃天水市武山县四门镇）人。曹操部下重要将领。官至立义将军，拜关门亭侯。谥曰壮侯。有一子庞会。",
            new_yanwen:"东汉末年河北袁绍部下武将，素有威名。颜良与文丑一起作为袁绍军队的勇将而闻名。建安四年（199），袁绍以颜良、文丑为将，率精卒十万，准备攻许都；次年，兵进黎阳，遣颜良攻白马。终均亡于关羽刀下。",
            new_yuanshao:"字本初，汉族，汝南汝阳人，出身名门望族，自曾祖父起四代有五人位居三公，自己也居三公之上，其家族也因此有“四世三公”之称。曾于初平元年被推举为反董卓联合军的盟主，联军瓦解后，在汉末群雄割据的过程中，袁绍先占据冀州，又先后夺青、并二州，并于建安四年击败了割据幽州的军阀公孙瓒，势力达到顶点；但在建安五年的官渡之战中败于曹操。在平定冀州叛乱之后，于建安七年病死。",
            new_xuhuang:"字公明，河东杨人。三国时期曹魏名将，本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。",
            new_caopi:"字子桓，三国时期著名的政治家、文学家，曹魏的开国皇帝，公元220－226年在位。沛国谯人，魏武帝曹操与武宣卞皇后的长子。去世后庙号高祖，谥为文皇帝，葬于首阳陵。",
            new_sunjian:"字文台，汉族，吴郡富春人。东汉末期地方军阀，著名将领。史书说他“容貌不凡，性阔达，好奇节”，是大军事家孙武的后裔。汉末群雄之一，三国中吴国的奠基人。孙权建国后，追谥孙坚为武烈皇帝。",
            new_dongzhuo:"字仲颖，陇西临洮人。东汉末年少帝、献帝时权臣，西凉军阀。官至太师、郿侯。其为人残忍嗜杀，倒行逆施，招致群雄联合讨伐，但联合军在董卓迁都长安不久后瓦解。后被其亲信吕布所杀。",
            new_zhurong:"据传为火神祝融氏后裔，南蛮王孟获之妻。武艺超群，善使飞刀，是《三国演义》中写到的唯一真正上过战场的女性。曾与孟获一起抵抗蜀军，在诸葛亮七擒七纵孟获之后，随孟获投降蜀汉。",
            new_menghuo:"中国三国时期南中少数族首领。系东汉末益州建宁郡( 今云南晋宁东 )大姓，身材肥硕。生卒年不详。官至御史中丞。曾被诸葛亮七擒七纵，传为佳话。",
            new_jiaxu:"字文和，武威姑臧人。三国时期魏国著名谋士。曾先后担任三国军阀李傕、张绣、曹操的谋士。官至魏国太尉，谥曰肃侯。",
            new_lusu:"字子敬，汉族，临淮东城人，中国东汉末年东吴的著名军事统帅。他曾为孙权提出鼎足江东的战略规划，因此得到孙权的赏识，于周瑜死后代替周瑜领兵，守陆口。曾单刀赴会关羽于荆州。",

           new_zhanghe:"字儁乂，河间鄚人。三国时期魏国名将。官渡之战时，本为袁绍部将的张郃投降了曹操，并在曹操帐下多立功勋，于曹魏建立后加封为征西车骑将军。诸葛亮六出祁山之间，张郃多次抵御蜀军的进攻，于公元231年在木门道被诸葛亮设伏射死。后谥曰壮侯。为曹魏“五子良将”之一。",
            new_dengai:"字士载，义阳棘阳人。三国时期魏国杰出的军事家、将领。公元263年他与钟会分别率军攻打蜀汉，最后他率先进入成都，使得蜀汉灭亡。后因遭到钟会的污蔑和陷害，被司马昭猜忌而被收押，最后与其子邓忠一起被卫瓘派遣的武将田续所杀害。",
            new_jiangwei:"字伯约，天水冀人。三国时期蜀汉著名将领、军事统帅。原为曹魏天水郡的中郎将，后降蜀汉，官至凉州刺史、大将军。诸葛亮去世后继承诸葛亮的遗志，继续率领蜀汉军队北伐曹魏，与曹魏名将陈泰、郭淮、邓艾等多次交手。",
            new_liushan:"蜀汉后主，字公嗣。小名阿斗。刘备之子，母亲是昭烈皇后甘氏。三国时期蜀汉第二位皇帝，公元223－263年在位。公元263年蜀汉被曹魏所灭，刘禅投降曹魏，被封为安乐公。",

            new_sunce:"字伯符，吴郡富春人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期吴国的奠基者。三国演义中绰号“小霸王”，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。",
            new_zhangzhang:"张昭，字子布，彭城人，三国时期吴国重臣，善丹青。拜辅吴将军，班亚三司，改封娄侯。年八十一卒，谥曰文侯。张纮，字子纲，广陵人。东吴谋士，和张昭一起合称“二张”。孙策平定江东时亲自登门邀请，张纮遂出仕为官。张纮后来建议孙权迁都秣陵，孙权正在准备时张纮病逝，其年六十岁。孙权为之流涕。",
            new_zuoci:"左慈，字元放，东汉末方士，汉族，庐江（今安徽庐江西南）人。在道教历史上，东汉时期的丹鼎派道术是从他一脉相传。",
            new_caiwenji:"名琰，原字昭姬，晋时避司马昭讳，改字文姬，东汉末年陈留圉（今河南开封杞县）人，东汉大文学家蔡邕的女儿，是中国历史上著名的才女和文学家，精于天文数理，既博学能文，又善诗赋，兼长辩才与音律。代表作有《胡笳十八拍》、《悲愤诗》等 。",
            xhdxhy:"夏侯惇（？－220年），字元让，沛国谯（今安徽亳州）人。东汉末年名将，曹魏开国元勋，西汉开国元勋夏侯婴的后代。少年时以勇气闻名于乡里。曹操起兵，夏侯惇是其最早的将领之一。多次为曹操镇守后方，曾率军民阻断太寿河水，筑陂塘灌溉农田，使百姓受益，功勋卓著。历任折冲校尉、济阴太守、建武将军，官至大将军，封高安乡侯，追谥忠侯。青龙元年（233年），得以配享太祖（曹操）庙庭。夏侯惇一生虽多在军旅，但仍不忘治学。他常亲自迎师，虚心求教。他为人俭朴，所得赏赐全部分给将士。一生不置产业，至死家无余财。夏侯渊（？－219年），字妙才，沛国谯（今安徽亳州）人，东汉末年名将，擅长千里奔袭作战，官至征西将军，封博昌亭侯。初期随曹操征伐，官渡之战为曹操督运粮草，又督诸将先后平定昌豨、徐和、雷绪、商曜等叛乱。后率军驻凉州，逐马超、破韩遂、灭宋建、横扫羌、氐，虎步关右。张鲁降曹操后夏侯渊留守汉中，与刘备相拒逾年，于定军山被刘备部将黄忠所袭，战死，谥曰愍侯。",            
            xiongnu:"【常规BOSS，请勿用DIY虐之！】匈奴是个历史悠久的北方民族集团，祖居在欧亚大陆的西伯利亚的寒温带森林和草原的交界地带，他们披发左衽。",
            new_liubei:"先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。",
           new_guanyu:"字云长，本字长生，并州河东解州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。",
            new_zhangfei:"字翼德，涿郡人，燕颔虎须，豹头环眼。有诗云：“长坂坡头杀气生，横枪立马眼圆睁。一声好似轰雷震，独退曹家百万兵”。",
            new_zhugeliang:"字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",            
            new_zhaoyun:"字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”",
            new_machao:"字孟起，扶风茂陵人。面如冠玉，目如流星，虎体猿臂，彪腹狼腰，声雄力猛。因衣着讲究，举止非凡，故人称“锦马超”。麾铁骑，捻金枪。",
            new_huangyueying:"荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。",
            new_sunquan:"吴大帝，字仲谋，吴郡富春县人。统领吴与蜀魏三足鼎立，制衡天下。",
            new_ganning:"字兴霸，巴郡临江人，祖籍荆州南阳郡。为人勇猛刚强，忠心耿耿，勇往无前。曾带兵百人于二更奇袭曹营，大挫其锐气。",
            new_lvmeng:"字子明，汝南富陂人。陈寿评曰：“吕蒙勇而有谋断，识军计，谲郝普，擒关羽，最其妙者。初虽轻果妄杀，终于克己，有国士之量，岂徒武将而已乎！”",
            new_huanggai:"字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。",
            new_zhouyu:"字公瑾，庐江舒县人，任东吴三军大都督，雄姿英发，人称“美周郎”。赤壁之战前，巧用反间计杀了精通水战的叛将蔡瑁、张允。",
            new_daqiao:"庐江皖县人，为乔公长女，孙策之妻，小乔之姊。与小乔并称为“江东二乔”，容貌国色流离。",
            new_luxun:"本名陆议，字伯言，吴郡吴县人。历任东吴大都督、丞相。吴大帝孙权兄孙策之婿，世代为江东大族。以谦逊之书麻痹关羽，夺取荆州，又有火烧连营大破蜀军。",
            new_sunshangxiang:"孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭姬庙”。",
            new_caocao:"魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。",
            new_simayi:"晋宣帝，字仲达，河内温人。曾任职过曹魏的大都督，太尉，太傅。少有奇节，聪明多大略，博学洽闻，伏膺儒教，世之鬼才也。",
            new_xiahoudun:"字元让，沛国谯人。有拔矢啖睛之勇，性格勇猛刚烈。",
            new_zhangliao:"字文远，魏雁门马邑人。官至前将军、征东将军、晋阳侯。武功高强，又谋略过人，多次建立奇功，以800人突袭孙权十万大军，皆望风披靡。",
            new_xuchu:"字仲康，谯国谯县人。和典韦一同统率着曹操的亲卫队“虎卫军”。因为他十分勇猛，所以有“虎痴”的绰号。曾有裸衣斗马超之举。",
            new_guojia:"字奉孝，颍川阳翟人，官至军师祭酒。惜天妒英才，英年早逝。有诗云：“良计环环不遗策，每临制变满座惊”。",
            new_zhenji:"中山无极人，别称甄洛或甄宓，庙号文昭甄皇后。魏文帝曹丕的正室。懂诗文，有倾国倾城之貌，《洛神赋》即是曹植为她所作。",
            new_huatuo:"字元化，一名旉，沛国谯人，“建安三神医”之一。集平生之所得著《青囊经》，现已失传。",
            new_lvbu:"字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”",
            new_diaochan:"中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。",             
       },
        skill:{
     new_shichou:{
     trigger:{
        player:"useCard",
    },
    forced:true,
    unique:true,
    audio:2,
    filter:function(event,player){
    return event.card&&event.card.name=='sha'&&player.hp<player.maxHp;
    },
    content:function (){
    },
    mod:{
     selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]+=(player.maxHp-player.hp);
         }
       }
			},
     new_chongfeng:{
    trigger:{
        player:"phaseBegin",
    },
    forced:true,
    unique:true,
    audio:true,
    content:function (){
    'step 0'
    player.phaseUse();
    'step 1'
    player.getStat().card={};
    player.getStat().skill={};
       }    
     },             
        new_tianxiang:{
    			audio:['tianxiang',2],
    			trigger:{player:'damageBefore'},
    			direct:true,
    			filter:function(event,player){
    				return player.countCards('h',{suit:'heart'})>0&&event.num>0;
    			},
    			content:function(){
    				"step 0"
    				player.chooseCardTarget({
    					filterCard:function(card,player){
    						return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
    					},
    					filterTarget:function(card,player,target){
    						return player!=target;
    					},
    					ai1:function(card){
    						return 10-get.value(card);
    					},
    					ai2:function(target){
    						var att=get.attitude(_status.event.player,target);
    						var trigger=_status.event.getTrigger();
    						var da=0;
    						if(_status.event.player.hp==1){
    							da=10;
    						}
    						if(trigger.num>1){
    							if(target.maxHp>5&&target.hp>1) return -att/10+da;
    							return -att+da;
    						}
    						var eff=get.damageEffect(target,trigger.source,target,trigger.nature);
    						if(att==0) return 0.1+da;
    						if(eff>=0&&trigger.num==1){
    							return att+da;
    						}
    						if(target.hp==target.maxHp) return -att+da;
    						if(target.hp==1){
    							if(target.maxHp<=4&&!target.hasSkillTag('maixie')){
    								if(target.maxHp<=3){
    									return -att+da;
    								}
    								return -att/2+da;
    							}
    							return da;
    						}
    						if(target.hp==target.maxHp-1){
    							if(target.hp>2||target.hasSkillTag('maixie')) return att/5+da;
    							if(att>0) return 0.02+da;
    							return 0.05+da;
    						}
    						return att/2+da;
    					},
    					prompt:get.prompt('tianxiang')
    				});
    				"step 1"
    				if(result.bool){
    					player.logSkill(event.name,result.targets);
    					trigger.untrigger();
    					trigger.player=result.targets[0];                                     trigger.player.addSkill('tianxiang2');                       
    					player.discard(result.cards[0]);
         game.delay();
             player.draw();
    				}

    				else{
    					event.finish();
    				}
    				"step 2"
    				trigger.trigger('damageBefore');
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target){
    						if(player.hasSkillTag('jueqing')) return;
    						if(get.tag(card,'damage')&&target.countCards('h')>1) return 0.7;

    					}
    				},
    				threaten:function(player,target){
    					if(target.countCards('h')==0) return 2;
    				}
    			}
    		},
     	new_hongyan:{
    			mod:{
    				suit:function(card,suit){
    					if(suit=='spade'||suit=='diamond') return 'heart';
    				}
    			}
    		},     
     new_zaiqi:{
			audio:2,
			trigger:{player:'phaseDrawBefore'},
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
			check:function(event,player){
				if(player.maxHp-player.hp<2){
					return false;
				}
				else if(player.maxHp-player.hp==2){
					return player.countCards('h')>=2;
				}
				return true;
			},
			content:function(){
				"step 0"
				trigger.untrigger();
				trigger.finish();
				event.cards=get.cards(player.maxHp-player.hp+Math.ceil(player.num('e')/2));
				player.showCards(event.cards);
				"step 1"
				var num=0;
				for(var i=0;i<event.cards.length;i++){
					if(get.suit(event.cards[i])=='heart'){
						num++;
						ui.discardPile.appendChild(event.cards[i]);
						event.cards.splice(i--,1);
					}
				}
				if(num){
					player.recover(num);
				}
				"step 2"
				if(event.cards.length){
					player.gain(event.cards);
					player.$gain2(event.cards);
					game.delay();
				}
			},
			ai:{
                    noe:true,                    
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                  },                  
               },          
				threaten:function(player,target){
					if(target.hp==1) return 2;
					if(target.hp==2) return 1.5;         
					return 1;
				},
			}
		},
      new_lianji:{
			audio:1,
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return target.num('h')>0;
			},
			selectTarget:2,
			multitarget:true,
			multiline:true,
			filter:function(event,player){
				return player.num('h')>0;
			},
			prepare:function(cards,player,targets){
				player.$throw(cards);
				player.line(targets);
			},
			discard:false,
			filterCard:true,
			check:function(card){
				return 6-ai.get.value(card);
			},
			content:function(){
				"step 0"
				if(!player.storage.lianji){
					player.storage.lianji=[];
				}
				if(targets[0].num('h')&&targets[1].num('h')){
					targets[0].chooseToCompare(targets[1]);
					player.storage.new_lianji.add(targets[0]);
					player.storage.new_lianji.add(targets[1]);
				}
				else{
					event.finish();
				}
				"step 1"
				if(result.bool){
					targets[0].gain(cards);
					targets[0].$gain2(cards);
					targets[1].damage(targets[0]);
				}
				else{
					targets[1].gain(cards);
        	targets[1].$gain2(cards);
					targets[0].damage(targets[1]);
				}
				if(!player.skills.contains('yinmo')){
					event.finish();
				}
				"step 2"
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]!=player&&!player.storage.new_lianji.contains(game.players[i])){
						event.finish();
						return;
					}}			
			},
			ai:{      
				expose:0.3,
				threaten:2,
				order:9,
       playernowuxie:true,
				result:{
					target:-1
				}
			},
		},
     new_jiedao:{
			audio:1,
			filter:function(event,player){
				return player.countCards('he',{suit:'club'})>0;
			},
			enable:'chooseToUse',
			filterCard:function(card){
				return get.suit(card)=='club';
			},
			position:'he',
			viewAs:{name:'jiedao'},
			prompt:'将一张♣牌当【借刀杀人】使用',
			check:function(card){return 6-get.value(card)},
			ai:{
      order:8,     
				threaten:1.3
			}
		},
     new_mengjin:{
			audio:2,
			trigger:{player:'shaMiss'},
			priority:-1,
			filter:function(event){
				return event.target.countCards('he')>0;
			},
			check:function(event,player){
				return get.attitude(player,event.target)<0;
			},
			content:function(){			player.gainPlayerCard('he',trigger.target,Math.max(1,player.maxHp-player.hp),true);
			},
    mod:{
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='lebu') return false;
                },
                },
     ai:{
                    noe:true,
                    threaten:1.4,
                    effect:{
                        target:function (card,player){
                        if(card.name=='guashi') return -Infinity;
                    },
                    },
                },
            },            
		new_shangshi:{
			audio:2,
			trigger:{player:['loseEnd','changeHp']},
			forced:true,
			filter:function(event,player){
				return (player.countCards('h')<Math.min(3,player.maxHp-player.hp));
			},
			content:function(){
				player.draw(Math.min(3,player.maxHp-player.hp)-player.countCards('h'));
			},
			ai:{                  
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
    new_jueqing:{
     group:['new_jueqing2','new_jueqing3'],
			trigger:{source:'damageBefore'},
			forced:true,
			audio:2,
			priority:16,
			check:function(){return false;},
			content:function(){
				trigger.untrigger();
				trigger.finish();
				var ex=0;
				if(trigger.card&&trigger.card.name=='sha'){
					if(player.hasSkill('jiu')) ex++;
					if(player.hasSkill('luoyi2')) ex++;
					if(player.hasSkill('reluoyi2')) ex++;
       }
				trigger.player.loseHp(trigger.num+ex);
			},
			ai:{
				jueqing:true
			}
		},
    new_jueqing2:{   
  global:["new_jueqing4"],
    trigger:{
        global:"dying",
    },
    audio:2, 
    forced:true,
    priority:Infinity,
    filter:function (event,player){
        return player==_status.currentPhase;
    },
    content:function (){}},
     new_jueqing3:{
			locked:true,
			global:'new_jueqing4'
		},
		new_jueqing4:{
			mod:{
				cardSavable:function(card,player){
					if(!_status.currentPhase) return;
					if(_status.currentPhase.hasSkill('new_jueqing2')&&_status.currentPhase!=player){
						if(card.name=='tao'&&_status.event.dying!=player) return false;
					}
				}
			}
		},
      new_shenshi:{
      audio:2,
      trigger:{
        player:"phaseEnd",
    },
    forced:true,
    content:function(){
    "step 0" 
  game.delay();
  player.discard(true,player.get('h'));
    "step 1"
   player.draw(Math.min(4,player.hp));
   player.update();
   },   
          ai:{                    
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){                
                if(card.name!='tao') return [1,3];

            },
                        threaten:function(player,target){
         if(target.hp!=0) return target.hp*0.1+1.1;
            }
           },
          },
         },
   new_longyin:{
      trigger:{
        global:"shaBegin",
    },
    direct:true,
    filter:function (event,player){
        return event.target==event.targets[0]&&player.countCards('he')>0&&event.card.name=='sha'&&
        _status.currentPhase==event.player&&event.parent.parent.parent.name=='phaseUse';
    },
    content:function (){
        'step 0'
        var go=false;
        if(get.attitude(player,trigger.player)>0){
            if(get.color(trigger.card)=='red'){
                go=true;
            }
            else if(!trigger.player.hasSkill('paoxiao')&&

                !trigger.player.hasSkill('tanlin3')&&
                !trigger.player.hasSkill('zhaxiang2')&&
                !trigger.player.hasSkill('fengnu')&&
                !trigger.player.getEquip('zhuge')){
                var nh=trigger.player.countCards('h');
                if(player==trigger.player){
                    go=(player.countCards('h','sha')>0);
                }
                else if(nh>=4){
                    go=true;
                }
                else if(player.countCards('h','sha')){
                    if(nh==3){
                        go=Math.random()<0.8;
                    }
                    else if(nh==2){
                        go=Math.random()<0.5;
                    }
                }
                else if(nh>=3){ if(nh==3){
        go=Math.random()<0.5;
                    }

                    else if(nh==2){
                        go=Math.random()<0.2;
                    }
                }
            }
        }
        var next=player.chooseToDiscard(get.prompt('longyin'),'he');
        next.logSkill=['longyin',trigger.player];
        next.set('ai',function(card){
            if(_status.event.go){
                return 7-get.value(card);
            }
            return 0;
        });
        next.set('go',go);
        'step 1'
        if(result.bool){
            trigger.player.getStat().card.sha--;
            if(get.color(trigger.card)=='red'){
                player.draw(1+Math.floor(Math.random()*2));
            }
            // player.logSkill('longyin',trigger.player);
        }
    },
    ai:{
        expose:0.2,
        threaten:1.4,
    },
},
    new_wuji:{
			skillAnimation:true,
			audio:3,
			trigger:{player:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return player.getStat('damage')>=3;
			},
			content:function(){
				"step 0"				
				player.gainMaxHp();
				"step 1"
				player.recover();				
				var card=get.cardPile('qinglong','field');
				if(card){
					player.gain(card,'gain2','log');
				}

	  	},  
     ai:{
				threaten:1.7
			}
		},
		new_zhenlie:{
			audio:3,
			filter:function(event,player){
				return event.player!=player&&event.card&&(event.card.name=='sha'||get.type(event.card)=='trick');
			},
			logTarget:'player',
			check:function(event,player){
				if(get.attitude(player,event.player)>0){
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
					if(player.countCards('h')<2) return true;
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
				player.loseHp();
				"step 1"
				trigger.untrigger();
				trigger.finish();
				"step 2"
				if(trigger.player.countCards('he')){				player.gainPlayerCard(trigger.player,'he',true);
				}
			},
			ai:{
				expose:0.3
			}
		},
         		new_xingwu:{
			audio:2,
			group:['new_xingwu_color','new_xingwu_color2'],
			subSkill:{
				color:{
					trigger:{player:'phaseBegin'},
					forced:true,

					popup:false,
					silent:true,


					content:function(){
						player.storage.new_xingwu_color=['black','red'];
					}
				},
      color2:{
					trigger:{player:'useCard'},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player){
						return Array.isArray(player.storage.new_xingwu_color)&&_status.currentPhase==player;
					},
					content:function(){
						player.storage.new_xingwu_color.remove(get.color(trigger.card));
					}
				}
			},
			trigger:{player:'phaseDiscardBegin'},
			direct:true,
			filter:function(event,player){
				if(!player.storage.new_xingwu_color) return false;
				var length=player.storage.new_xingwu_color.length;
				if(length==0) return false;
				var hs=player.getCards('h');
				if(hs.length==0) return false;
				if(length==2) return true;
				var color=player.storage.new_xingwu_color[0];
				for(var i=0;i<hs.length;i++){
					if(get.color(hs[i])==color) return true;
				}
				return false;
			},
			intro:{
				content:'cards'
			},
			init:function(player){
				player.storage.new_xingwu=[];
			},
			content:function(){
				'step 0'
				player.chooseCard(get.prompt('new_xingwu'),function(card){
					return _status.event.player.storage.new_xingwu_color.contains(get.color(card));
				}).set('ai',function(card){
					var player=_status.event.player;
					if(player.storage.new_xingwu.length==2){
						if(!game.hasPlayer(function(current){
							return (current!=player&&
								get.damageEffect(current,player,player)>0&&
								get.attitude(player,current)<0)
						})) return 0;
					}
					return 7-get.value(card);
				});
				'step 1'
				if(result.bool){
					player.logSkill('new_xingwu');
					if(player.storage.new_xingwu.length<2){
						player.$give(result.cards,player);
					}
					player.lose(result.cards,ui.special);
					player.storage.new_xingwu=player.storage.new_xingwu.concat(result.cards);
					player.markSkill('new_xingwu');
					player.syncStorage('new_xingwu');
				}
				else{
					event.finish();
				}
				'step 2'

				if(player.storage.new_xingwu.length==3){
					player.$throw(player.storage.new_xingwu);
					while(player.storage.new_xingwu.length){
						ui.discardPile.appendChild(player.storage.new_xingwu.shift());
					}
					player.unmarkSkill('new_xingwu');
					player.chooseTarget(function(card,player,target){
						return target!=player;
					},'对一名其他角色造成3点伤害并弃置其所有牌；若其武将牌正面朝上则将武将牌翻面').set('ai',function(target){
						var player=_status.event.player;


						if(get.attitude(player,target)>0) return -1;
						return get.damageEffect(target,player,player)+target.countCards('e')/2;
					});
				}
				else{
					event.finish();
				}
				'step 3'
				if(result.bool){       
					var target=result.targets[0];
					target.damage(3);        
         if(!target.isTurnedOver()){
         target.turnOver();}           
					event.target=target;        
					player.line(target,'green');         
				}
				else{
       event.finish();
				}
				'step 4'     
				if(event.target&&event.target.isAlive()){
					var es=event.target.getCards('he');
					if(es.length){
						event.target.discard(es);
					}
				}
			},
			ai:{
				threaten:1.7
			}
		},         
     xionghan:{
     audio:1,
			trigger:{source:'damageBegin'},
			filter:function(event){
				return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
			forced:true,
			content:function(){
				trigger.num++;			
	  	},
     ai:{
				threaten:1.4
			}
		},    
     new_huangtian:{
			unique:true,
			global:'new_huangtian2',
			zhuSkill:true,
		},
		new_huangtian2:{
			audio:2,
			enable:'phaseUse',
			discard:false,
			line:true,
			prepare:'give',
			filter:function(event,player){
				if(player.group!='qun') return false;
				if(player.countCards('h')+player.countCards('h')==0) return 0;
				return game.hasPlayer(function(target){
					return target!=player&&target.hasZhuSkill('new_huangtian',player);
				});
			},
			filterCard:function(card){
				return (get.suit(card)=='spade'||card.name=='shandian')

			},
			filterTarget:function(card,player,target){
				return target!=player&&target.hasZhuSkill('new_huangtian',player);
			},
			usable:1,
			forceaudio:true,
			content:function(){
				target.gain(cards,player);
			},
			ai:{
				expose:0.3,
				order:10,
				result:{
					target:5
				}
			}
	},
     	new_xiongyi:{
			skillAnimation:true,
			unique:true,
			enable:'phaseUse',
			audio:2,
			mark:true,
			filter:function(event,player){
				return !player.storage.new_xiongyi;
			},
			init:function(player){
				player.storage.new_xiongyi=false;
			},
			filterTarget:function(card,player,target){
				if(get.mode()=='guozhan'){
					if(player==target) return true;
					if(player.identity=='ye') return false;
					if(player.identity=='unknown'){
						if(_status.yeidentity.contains(player._group)){
							return false;
						}
						else if(get.zhu(player)||get.population(player._group)+1<=get.population()/2){
							return player._group==target.identity;
						}
						else{
							return false;
						}
					}
					return player.identity==target.identity;
				}
				else{
					return true;
				}
			},
			multitarget:true,
			multiline:true,
			selectTarget:function(){
				if(get.mode()=='guozhan') return -1;
				return [1,3];
			},
			content:function(){
				"step 0"      
				player.storage.new_xiongyi=true;
				player.awakenSkill('new_xiongyi');
       player.gainMaxHp();      
       player.addSkill('mengjin');
				game.asyncDraw(targets,3);
				"step 1"
				if(player.isDamaged()){
					if(get.mode()=='guozhan'){

						if(player.isMinor()){
							player.recover();
						}
					}
					else if(targets.length<=2){
						player.recover();
					}
				}
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:10,
				result:{
					target:function(player){
						var num=player.countCards('h');
       if(player.hp==1) return 1;
						if(player.hp==2&&num<=2) return 1.5;
						if(player.hp==3&&num<=1) return 1.5;
						if(game.phaseNumber<game.players.length*2) return 0;
						if(player.hasUnknown()) return 0;
						return 1;
					},
				}
			}
		},  
     new_tianyi:{
			audio:3,
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player!=target&&target.countCards('h')>0;
			},
			filter:function(event,player){
				return player.countCards('h')>0;
			},
			content:function(){
				"step 0"
				player.chooseToCompare(target);
				"step 1"
				if(result.bool){
					player.addTempSkill('new_tianyi2','phaseAfter');
				}
				else{
				player.draw();	player.addTempSkill('new_tianyi3','phaseAfter');
				}
			},
			ai:{
				order:function(name,player){
					var cards=player.getCards('h');
					if(player.countCards('h','sha')==0){
						return 1;
					}
					for(var i=0;i<cards.length;i++){
						if(cards[i].name!='sha'&&cards[i].number>11&&ai.get.value(cards[i])<7){
							return 9;
						}

					}
					return ai.get.order({name:'sha'})-1;
				},
				result:{
					player:function(player){
						if(player.countCards('h','sha')>0) return 0.6;
						var num=player.countCards('h');
						if(num>player.hp) return 0;
						if(num==1) return -2;
						if(num==2) return -1;
						return -0.7;
					},
					target:function(player,target){
						var num=target.countCards('h');
						if(num==1) return -1;
						if(num==2) return -0.7;
						return -0.5
					},
				},
				threaten:1.3
			}
		},
		new_tianyi2:{
			mod:{
				targetInRange:function(card,player,target,now){
					if(card.name=='sha') return true;
				},
				selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]+=2;
				},
				cardUsable:function(card,player,num){
					if(card.name=='sha') return num+1;
				}
			},
		},
		new_tianyi3:{
			mod:{
				cardEnabled:function(card){if(card.name=='sha') return false}
			}
		},
      xinqiangxix:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filterCard:function(card){
				return get.subtype(card)=='equip1';
			},
			selectCard:[0,1],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){
				"step 0"
				if(player.hp>1&&cards.length==0){
					player.loseHp();
				}
				"step 1"
       if(target.hp<=player.hp){
       player.discardPlayerCard(true,target,'e');
				target.damage();
       }
      else{
       target.damage(2);
       }
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:15,
				result:{
       player:function(player,target){
						if(player.getEquip(1)) return 0;
						if(player.hp>=target.hp) return -0.9;
						if(player.hp==2) return -10;
           if(player.hp==1) return 10;
						return -2;
					},
					target:function(player,target){
						if(!player.getEquip(1)){
							if(player.hp<target.hp) return 2;
							if(player.hp==2&&target.hp>=2) return 0;
							if(target.hp>player.hp) return 0;
						}
						return ai.get.damageEffect(target,player);
					}
				}
			},
			threaten:1.5
		},
     new_liegong:{group:["new_liegong1","new_liegong2"]},
     new_liegong1:{
			audio:2,
			trigger:{player:'shaBegin'},
			check:function(event,player){
				return ai.get.attitude(player,event.target)<=0;
			},
			logTarget:'target',
			filter:function(event,player){
				var length=event.target.countCards('h');
				return (length>player.hp||event.target.hp<2);
			},
			content:function(){
				trigger.directHit=true;
			},
			mod:{       
   targetInRange:function(card,player,target,now){
					if(card.name=='sha') return player.num('h')<=target.num('h')||get.distance(player,target,'attack')<=1;          
				}
			}
		},
     new_liegong2:{
			audio:2,
			trigger:{source:'damageBegin'},    
     priority:-99,       
			filter:function(event,player){
     if(event.card.name!='sha')
     return false;
     return event.player.num('e')>player.num('e')&& event.card&&(event.card.name=='sha')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';         
			},     
     check:function (event,player){
     return ai.get.attitude(player,event.target)<=0;
            },
     content:function(){
     trigger.num=trigger.num*2;
     },
     ai:{
     threaten:1.6,     
       },
     },
      xin_yongsi:{
			group:['xin_yongsi1','xin_yongsi2'],
			ai:{
				threaten:2.1
			}
		},
		xin_yongsi1:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				trigger.num+=num;
			}
		},
		xin_yongsi2:{
			audio:2,
			trigger:{player:'phaseDiscardBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				player.chooseToDiscard(num,'h',true);
			}
		},
      leidian:{
			audio:2,
			enable:'phaseUse',
			viewAs:{name:'shandian'},
			filterCard:function(card,player){
			return get.suit(card)=='spade';			
			},
     filter:function(event,player){
		 return player.countCards('he',{suit:'spade'})>0;
      },
			selectCard:true,
			position:'he',
      prompt:'将一张♠花色的牌当【闪电】置于武将牌上',
			check:function(card){
      if(card.name=='shandian') return 0;        
				return 6-ai.get.value(card);
			},
			ai:{
				basic:{
					order:4.1
				}
			}
		},
      leishen:{
      group:'leishen1',
      audio:1,
			trigger:{player:'damageBefore'},
			forced:true,
			unique:true,
			filter:function(event){
				return event.nature=='thunder';
			},
			content:function(){
				trigger.untrigger();
				trigger.finish();
			},
			ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'thunderDamage')){
							return [0,0,0,0];
						}
					}
				}
			},
		},
      leishen1:{
      audio:1,
			trigger:{global:'damageBefore'},
			forced:true,
			unique:true,
			filter:function(event){      
				return event.nature=='thunder';
			},
			content:function(){
     trigger.source=player;
      }
     },
      xinguidaox:{
			audio:true,
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.num('he')>0;
			},
			content:function(){
				"step 0"
				player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
				get.translation(trigger.player.judging[0])+'，是否发动【鬼道】？','he').ai=function(card){
					var trigger=_status.event.parent._trigger;
					var player=_status.event.player;
					var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
					var attitude=ai.get.attitude(player,trigger.player);
					if(attitude==0||result==0) return 0;
					if(attitude>0){
						return result;
					}
					else{
						return -result;
					}
				};
				"step 1"
				if(result.bool){
					player.respond(result.cards,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.logSkill('guidao');
					player.$gain2(trigger.player.judging[0]);
					player.gain(trigger.player.judging[0]);
					trigger.player.judging[0]=result.cards[0];
					trigger.position.appendChild(result.cards[0]);
					game.log(trigger.player,'的判定牌改为',result.cards[0]);
				}
				"step 3"
				game.delay(2);
			},
			ai:{
				tag:{
					rejudge:1

				},
				threaten:1.5
			}
		},
      mubing:{						
						audio:1,
						trigger:{global:'loseAfter'},
						forced:true,
						filter:function(event,player){
							if(event.player==player) return false;
							
if(_status.currentPhase==player) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='e'&&get.position(event.cards[i])=='d') 
									return !player.get('e',get.subtype(event.cards[i])[5])&&(get.type(event.cards[i])=='equip');
							}
							return false;
						},
						content:function(){
             game.delay(); 

							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].original=='e'&&!player.get('e',get.subtype(trigger.cards[i])[5])&&(get.type(trigger.cards[i])=='equip'))
              
									player.gain(trigger.cards[i],'gain');
							}
							
						},
					},
      new_tengjia:{
      group:["new_tengjia1","new_tengjia2"],
       locked:true,
       unique:true,
       },
      new_tengjia1:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:6,
				audio:'tengjia1',
       unique:true,
				filter:function(event,player){			
					if(event.card.name=='nanman') return true;
					if(event.card.name=='wanjian') return true;
					if(event.card.name=='sha'&&!event.card.nature) return true;
         return false;
				},
				content:function(){
					trigger.untrigger();
					trigger.finish();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
          if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
							if(card.name=='sha'){
	    						var equip1=player.getEquip(1);
	    						if(equip1&&equip1.name=='zhuque') return 2;	    						
								if(!card.nature) return 'zerotarget';
							}
						}
					}
				}
			},
			new_tengjia2:{
				trigger:{player:'damageBegin'},
				filter:function(event){
					if(event.nature=='fire') return true;
				},
				audio:'tengjia2',
				forced:true,
       unique:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'){
								if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
							}
							if(get.tag(card,'fireDamage')&&current<0) return 2;
						}
					}
				}
			},
      manbing:{
			audio:2,
			enable:'phaseUse',
			viewAs:{name:'nanman'},
			filterCard:function(card,player){
			return get.type(card)=='equip';				
			},
     filter:function(event,player){
				return player.countCards('he',{type:'equip'})>0;
			},
			selectCard:true,
      position:'he',			
      prompt:'将一张装备牌当【南蛮入侵】使用',
			check:function(card){
      if(card.name=='nanman') return 0;
        if(card.name=='wanjian') return 0;
				return 15-ai.get.value(card);
			},
			ai:{
				basic:{
					order:10,
         threaten:1.7,
				}
			}
		},
      xin_luanji:{group:['xin_luanji1','xin_luanji2']},
                xin_luanji1:{  
                        trigger:{
                            source:["damageEnd"],
                        },
                        forced:true,
                        popup:false, 
                        filter:function (event,player){
                     return player.name=='new_yuanshao'&&(event.card.name=='wanjian'&&event.cards[0]&&event.cards[0]!=event.card);
              },
              content:function (){   
                 		"step 0"
				trigger.player.judge(function(card){
					if(get.zhu(_status.event.player,'shouyue')){
						if(get.suit(card)!='spade') return 2;
					}
					else{
						if(get.color(card)=='black') return 2;
					}
					return -0.5;
				});
				"step 1"
				if(result.bool){
       trigger.player.draw();					
				}  
       else{
        player.draw();
       } 
      }
       },   
     xin_luanji2:{
			audio:4,
			enable:'phaseUse',
			viewAs:{name:'wanjian'},
			filterCard:function(card,player){
				if(ui.selected.cards.length){
					return get.suit(card)==get.suit(ui.selected.cards[0]);
				}
				var cards=player.getCards('h');
				for(var i=0;i<cards.length;i++){
					if(card!=cards[i]){
						if(get.suit(card)==get.suit(cards[i])) return true;
					}
				}
				return false;
			},
			selectCard:2,
      usable:3,
      prompt:'将两张相同花色的手牌当【万箭齐发】使用',
			complexCard:true,
			check:function(card){
      if(card.name=='nanman') return 0;
        if(card.name=='wanjian') return 0;
				return 9-ai.get.value(card);
			},
			ai:{
				basic:{
					order:9,
         threaten:1.6,
				}
			}
		},
      new_shensu:{
     audio:2,
			trigger:{player:'shaAfter'},
			forced:true,
      priority:-10,
      filter:function (event,player){
        return (event.card.name=='sha'&&event.cards[0]&&event.cards[0]==event.card);
    },
			content:function(){
      game.delay(1.5);
 player.useCard({name:'sha'},trigger.target,false);   
 },
    ai:{
     threaten:1.4,
     }  
    },
      xinhaoshi:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			threaten:1.7,
			check:function(event,player){
				if(6-(player.countCards('h')+Math.floor(player.countCards('e')/2))>=4) return true;
				var min=[];
				var temp=player.next.countCards('h');
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i]!=player&&players[i].countCards('h')<temp){
						temp=players[i].countCards('h');
					}
				}
				for(var i=0;i<players.length;i++){
					if(players[i]!=player&&players[i].countCards('h')==temp){
						min.push(players[i]);
					}
				}
				for(var i=0;i<min.length;i++){
					if(ai.get.attitude(player,min[i])>0) return true;
				}
				return false;
			},
      content:function(){
				trigger.num+=2+Math.floor(player.num('e')/2);
				player.addSkill('xinhaoshi2');
			},
			ai:{
				threaten:2,
					noh:true,
         effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=3) return false;
						}


					}
			}
		},
		xinhaoshi2:{
			trigger:{player:'phaseDrawEnd'},
			forced:true,
			popup:false,
			audio:false,
			content:function(){
				"step 0"
				player.removeSkill('xinhaoshi2');
				if(player.countCards('h')<=6){
					event.finish();
					return;
				}
				player.chooseCardTarget({

					selectCard:Math.floor(player.countCards('h')/2),
					filterTarget:function(card,player,target){
						return target.isFewestHandcard();
					},
					forced:true,
					ai2:function(target){
						return ai.get.attitude(_status.event.player,target);
					}
				});
				"step 1"
				if(result.targets&&result.targets[0]){
					result.targets[0].gain(result.cards,player);
					player.$give(result.cards.length,result.targets[0]);
				}
			}
		},
		
		new_yinghun:{
			audio:4,
			trigger:{player:'phaseBefore'},
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
			direct:true,
     priority:10,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('new_yinghun'),function(card,player,target){
					return player!=target;
				}).set('ai',function(target){
					var player=_status.event.player;
					if(player.maxHp-player.hp==1&&target.countCards('he')==0){
						return 0;
					}
					if(ai.get.attitude(_status.event.player,target)>0){
						return 10+ai.get.attitude(_status.event.player,target);
					}
					if(player.maxHp-player.hp==1&&player.num('e')==0){
						return -1;
					}
      
	    	return 1;
				});
				"step 1"
				if(result.bool){
					event.num=player.maxHp-player.hp+Math.ceil(player.num('e')/2);
        
if(player.countCards('e')>=player.hp){
						event.num=player.maxHp;
					}
					player.logSkill('new_yinghun',result.targets);
					event.target=result.targets[0];
					if(event.num==1){
						event.directcontrol=true;
					}
					else{
						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
						var str2='摸一弃'+get.cnNumber(event.num,true);
						player.chooseControl(str1,str2,function(event,player){
							return _status.event.choice;
						}).set('choice',ai.get.attitude(player,event.target)>0?str1:str2);
						event.str=str1;
					}
				}
				else{
					event.finish();
				}
				"step 2"
      if(event.directcontrol||result.control==event.str){
					event.target.draw(event.num);
					event.target.chooseToDiscard(true,'he');
				}
				else{
					event.target.draw();
					event.target.chooseToDiscard(event.num,true,'he');
				}
			},
			ai:{
				threaten:function(player,target){
					if(target.hp==1||target.countCards('e')>=target.hp) return 2;
					if(target.hp==target.maxHp) return 0.5;
					if(target.hp==2) return 1.5;
					return 0.5;
				},
				maixie:true,
				effect:{
					target:function(card,player,target){
						if(target.maxHp<=3) return;
						if(get.tag(card,'damage')){
           if(!target.hasFriend()) return;
							if(target.hp==target.maxHp) return [0,1];
						}
						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
					}
				}
			}
		},
       xinkuanggux:{
			audio:2,
			trigger:{source:'damageEnd'},
			forced:true,
			content:function(){
				player.recover(trigger.num);
       player.draw(trigger.num-(player.maxHp-player.hp));
			},     
mod:{
    cardUsable:function (card,player,num){
      if(card.name=='sha') return num+(player.maxHp-player.hp);
     },
    globalFrom:function(from,to,distance){
      if(from.hp<from.maxHp)
     return distance-(from.maxHp-from.hp);
				},
      },
		},
            xinduanliangx:{
			     audio:2,
            priority:-10,
            trigger:{global:'drawBegin'},
            filter:function(event,player){
				if(event.player.isFriendOf(player)){
					return false;
				}
           return event.num>1&&event.player!=player;
            },
			prompt:function(event,player){
				return '是否对'+get.translation(event.player)+'发动【断粮】？'
			},
          check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
            content:function(){          
				    player.line(trigger.player,'white');

           trigger.num--;         
            },
            ai:{
                expose:0.3,
                threaten:1.6
            }
        },
            xinbuqu:{
                audio:2,
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
                "step 0"
                event.card=get.cards()[0];
                if(player.storage.xinbuqu==undefined) player.storage.xinbuqu=[];
                player.storage.xinbuqu.push(event.card);
                player.syncStorage('xinbuqu');
                player.showCards(player.storage.xinbuqu,'不屈')
                player.markSkill('xinbuqu');
      "step 1"
                for(var i=0;i<player.storage.xinbuqu.length;i++){
                    if(get.suit(event.card)=='club'&&get.number(event.card)>7) return;
                }
                trigger.untrigger();
                trigger.finish();
                if(player.hp<=0){
                    player.hp=1;
                    player.update();
                }
            },
                mod:{
                    maxHandcard:function (player,num){
                    if(player.storage.xinbuqu&&player.storage.xinbuqu.length) return num-player.hp+player.storage.xinbuqu.length;
                },
                },
                marktext:"创",
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                    if(storage&&storage.length){
                        player.$throw(storage);
                        for(var i=0;i<storage.length;i++){
                            ui.discardPile.appendChild(storage[i]);
                        }
                        delete player.storage.xinbuqu;
                    }
                },
                },
            },
            xinfenji:{
                audio:2,
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event){
                if(_status.currentPhase!=event.player){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='he') return true;
                    }
                }
                return false;
            },
                check:function (event,player){
                return ai.get.attitude(player,event.player)>2;
            },
                content:function (){
                "step 0"
                player.line(trigger.player,'green');
                player.damage('nosource');
                "step 1"
                trigger.player.draw(2);
            },
            },      
            dunjia:{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-999999,
                unique:true,
                filter:function (event){
                    return event.num>1;
                },
                content:function (){
          trigger.num=1;
         },
            },
            qimen:{
                audio:3,
                trigger:{
player:['damageBegin','loseHpBegin']
                },
                forced:true,
                priority:20,
                unique:true,           
                content:function (){
               player.sex=['male','female'].randomGet();
               "step 0"              
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
                    player.addSkill(link);                    
                    player.mark(link,{
                        name:get.translation(link),
                        content:lib.translate[link+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(link)+'】');        
                },
                ai:{
                    threaten:1.8,
                },
            },            
            xinzhaofu:{              
                audio:1,
                unique:true,
                trigger:{
                    global:"dieAfter",
                },
                zhuSkill:true,
                forced:true,
                filter:function (event,player){
                if(event.source==player) return false;
                if(!player.hasZhuSkill('xinzhaofu')) 
                return false;
            
                if(event.source==undefined)
                return false;
                if(event.source.group!='wu') return false;
                return true;
            },
                content:function (){
                player.gainMaxHp();
            },
            },
            xinxingxue:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                'step 0'
            player.chooseTarget([1,3],get.prompt('xinxingxue')).set('ai',function(target){
                    var att=ai.get.attitude(_status.event.player,target);
                    if(target.num('he')) return att;
                    return att/10;
                });
                'step 1'
                if(result.bool){
                    player.logSkill('xinxingxue',result.targets);
                    event.targets=result.targets;
                    event.targets.sort(lib.sort.seat);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(event.targets.length){
                    var target=event.targets.shift();
                    target.draw(2);
                    event.current=target;
                }
                else{
                    event.finish();
                }
                'step 3'
                if(event.current&&event.current.num('he')){
                    event.current.chooseCard('选择两张牌置于牌堆顶','he',2,true);
                }
                else{
                    event.goto(2);
                }
                'step 4'
                if(result&&result.cards){

                    event.card=result.cards[0];
                    event.current.lose(result.cards,ui.special);
                    game.broadcastAll(function(player){
                        var cardx=ui.create.card();
                        cardx.classList.add('infohidden');
                        cardx.classList.add('infoflip');
                        player.$throw(cardx,1000,'nobroadcast');
                    },event.current);
                }
                else{
                    event.card=null;
                }
       'step 5'
                if(event.current==game.me) game.delay(0.5);
                'step 6'
                if(event.card){
                    event.card.fix();
                    ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                }
                event.goto(2);
            },
            },
            xinyanzhu:{
                audio:2,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                return target.num('he')>0&&target!=player;
            },
                content:function (){        
        target.chooseToDiscard(true,'he');
            },
                ai:{
                    order:15,
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                        var ne=target.num('he');
                        if(!ne) return -2;
                        if(ne>=1) return -ne;
                        return 0;
                    },
                    },
                },
            },
            xinshenxian:{
                audio:4,
                trigger:{
                    global:"discardAfter",
                },
                filter:function (event,player){
                if(event.player==player||_status.currentPhase==player) return false;            
           if(player.hasSkill('xinshenxian2')) return false;    
                for(var i=0;i<event.cards.length;i++){
                    if(get.type(event.cards[i])=='basic'){
                        return true;
                    }
                }
                return false;
            },
                frequent:true,
                content:function (){
                "step 0" 
                game.delay();
                "step 1"       
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
                    if(get.type(trigger.cards[i])=='basic')
      num+=1;
       }
                player.draw(num);    
     player.addTempSkill('xinshenxian2','phaseAfter');
            },
                ai:{
                    threaten:1.6,
                },
            },
            "xinshenxian2":{
            },            
            xinjiuchi:{
                audio:2,
                enable:"chooseToUse",
                filterCard:function (card){
                return get.color(card)=='black';
            },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'black'})) return false;
            },
                prompt:"将一张♠或♣牌当【酒】使用",
                check:function (card){
                if(_status.event.type=='dying') return 1;
                return 6-ai.get.value(card);
            },           
                ai:{
                    skillTagFilter:function (player){
                    return player.num('he',{color:'black'})>0&&player.hp<=0;
                },
                    threaten:1.4,
                    save:true,
                    basic:{
       useful:function (card,i){
                        if(_status.event.player.hp>1){
                            if(i==0) return 5;
                            return 1;
                        }
                        if(i==0) return 7.3;
                        return 3;
                    },
                        value:function (card,player){
                        if(player.hp>1){
                            if(i==0) return 5;
                            return 1;
                        }
                        if(i==0) return 7.3;
                        return 3;
                    },
                    },
                    order:function (){
                    return ai.get.order({name:'sha'})+0.2;
                },
                    result:{
                        target:function (player,target){
                        if(target&&target.isDying()) return 2;
                        if(lib.config.mode=='stone'&&!player.isMin()){
                            if(player.getActCount()+1>=player.actcount) return 0;
                        }
                        var shas=player.getCards('h','sha');
                        if(shas.length>1&&player.getCardUsable('sha')>1){
                            return 0;
                        }
                        var card;
                        if(shas.length){
                            for(var i=0;i<shas.length;i++){
                                if(lib.filter.filterCard(shas[i],target)){
                                    card=shas[i];break;
                                }
                            }
                        }
                        else if(player.hasSha()&&player.needsToDiscard()){
                            if(player.countCards('h','hufu')!=1){
                                card={name:'sha'};
                            }
                        }
                        if(card){
                            if(game.hasPlayer(function(current){
                                return (ai.get.attitude(target,current)<0&&
                                    target.canUse(card,current,true,true)&&
                                    !current.getEquip('baiyin')&&
                                    ai.get.effect(current,card,target)>0);
                            })){
                                return 1;
                            }
                        }
                        return 0;
                    },
                    },
                    tag:{
                        save:1,
                    },
                },
            },            
            xinbenghuai:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                check:function (){
                return false;
       },
                filter:function (event,player){
                return !player.isLowestHp();
            },
                content:function (){        
                    player.loseHp();
            },
                ai:{
                    threaten:1,
                },
            },
            new_baonue:{
                unique:true,
                global:"new_baonue2",
                zhuSkill:true,
            },
            "new_baonue2":{
                audio:2,
                forceaudio:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                if(player.group!='qun') return false;
                return game.hasPlayer(function(target){
                    return player!=target&&target.hp<target.maxHp&&target.hasZhuSkill('new_baonue',player);
                });
            },
                direct:true,
                content:function (){
                'step 0'
                var list=game.filterPlayer(function(target){
                    return player!=target&&target.hp<target.maxHp&&target.hasZhuSkill('new_baonue',player);
                });
                event.list=list;
                'step 1'
                if(event.list.length){
                    var current=event.list.shift();
                    event.current=current;
                    player.chooseBool(get.prompt('new_baonue',current)).set('choice',ai.get.attitude(player,current)>0);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(result.bool){
                    player.logSkill('new_baonue2',event.current);
                    player.judge(function(card){
                        if(get.color(card)=='black') return 4;
                        return 0;
                    });
                }
                else{
                    event.goto(1);
                }
                'step 3'
                if(result.color=='black'){
                    event.current.recover();
                }
                event.goto(1);
            },
            },
            xintiaoxin:{
                audio:4,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                return target.canUse({name:'sha'},player)&&target.num('he');
            },
                content:function (){
                "step 0"
                target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的'+get.cnNumber(Math.max(1,target.num('e'),true))+'张牌').set('targetRequired',true);
                "step 1"
                if(result.bool==false&&target.num('he')>0){
      player.discardPlayerCard(target,Math.max(1,target.num('e')),'he',true);
                }
                else{
                    event.finish();
                }
            },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1.5,
                        player:function (player,target){
                        if(target.num('h')==0) return 0;
                        if(target.num('h')==1) return 0.5;
                        if(target.num('h')<=2&&target.num('e')>1) return 0.7;
                        if(player.hp<=2) return -2;
                        if(player.num('h','shan')==0) return -1;
                        return -0.5;
                    },
                    },
                    threaten:1.3,
                },
            },
            xinxiangle:{
                audio:2,
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
                return event.card.name=='sha'||event.card.name=='juedou'||event.card.name=='shunshou'||event.card.name=='guohe';
            },
                content:function (){
                "step 0"
                var eff=ai.get.effect(player,trigger.card,trigger.player,trigger.player);
                trigger.player.chooseToDiscard(function(card){
                    return get.type(card)=='basic';
                }).set('ai',function(card){
                    if(_status.event.eff>0){
                        return 10-ai.get.value(card);
                    }
                    return 0;
                }).set('eff',eff);
                "step 1"
                if(result.bool==false){
                    trigger.finish();
                    trigger.untrigger();
                }
            },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                        if(card.name=='sha'||card.name=='juedou'||card.name=='shunshou'||card.name=='guohe'){
                            if(_status.event.name=='xinxiangle') return;
                            var bs=player.get('h',{type:'basic'});
                            if(bs.length<2) return 0;

                            if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                            if(bs.length<=3&&player.num('h','sha')<=1){
                                for(var i=0;i<bs.length;i++){
                                    if(bs[i].name!='sha'&&ai.get.value(bs[i])<7){
                                        return [1,0,1,-0.5];
                                    }
                                }
                                return 0;
                            }
                            return [1,0,1,-0.5];
                        }
                    },
                    },
                },
            },                       
            xintuntian:{
                audio:3,
                trigger:{
                    player:["loseEnd","damageEnd"],
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
                "step 0"
                player.judge(function(card){
                    if(get.suit(card)=='heart') return -1;
                    return 1;
                },ui.special).nogain=function(card){
                    return get.suit(card)!='heart';
                };
                "step 1"
                if(result.bool){
                    result.card.goto(ui.special);
                    player.storage.xintuntian.push(result.card);
                    result.node.moveDelete(player);
                    game.broadcast(function(cardid,player){
                        var node=lib.cardOL[cardid];
                        if(node){
                            node.moveDelete(player);
                        }
                    },result.node.cardid,player);
                    game.addVideo('gain2',player,get.cardsInfo([result.node]));
                    player.markSkill('xintuntian');
                    game.addVideo('storage',player,['xintuntian',get.cardsInfo(player.storage.xintuntian),'cards']);
                }
       else{
       player.gain(result.card);
       player.$gain2(result.card);
      }
            },
                init:function (player){
                player.storage.xintuntian=[];
            },
                marktext:"田",
                intro:{
                    content:"cards",
                },
                group:"xintuntian_dist",
                subSkill:{
                    dist:{
                        mod:{
                            globalFrom:function (from,to,distance){
                            if(from.storage.xintuntian) return distance-from.storage.xintuntian.length;
                        },
                        },
                    },
                },
                locked:false,
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                        if(!target.hasFriend()&&!player.hasUnknown()) return;
                        if(_status.currentPhase==target) return;
                        if(get.tag(card,'loseCard')&&target.num('he')){
                            if(target.hasSkill('ziliang')) return 0.7;
                            return [0.5,Math.max(2,target.num('h'))];
                        }
                        if(target.isUnderControl(true,player)){
                            if((get.tag(card,'respondSha')&&target.num('h','sha'))||
                                (get.tag(card,'respondShan')&&target.num('h','shan'))){
                                if(target.hasSkill('ziliang')) return 0.7;
                                return [0.5,1];
                            }
                        }
                        else if(get.tag(card,'respondSha')||get.tag(card,'respondShan')){
                            if(ai.get.attitude(player,target)>0&&card.name=='juedou') return;
                            if(get.tag(card,'damage')&&target.hasSkillTag('maixie')) return;
                            if(target.num('h')==0) return 2;
                            if(target.hasSkill('ziliang')) return 0.7;
                            if(get.mode()=='guozhan') return 0.5;
                            return [0.5,Math.max(target.num('h')/4,target.num('h','sha')+target.num('h','shan'))];
                        }
                    },
                    },
                    threaten:function (player,target){
                    if(target.num('h')==0) return 2;
                    return 0.5;
                },
                },
            },
            xinzaoxian:{
                skillAnimation:true,
                audio:2,
                unique:true,
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
       if(_status.currentPhase!=player)
       return false;
                if(player.storage.xintuntian) return player.storage.xintuntian.length>=3&&!player.storage.xinzaoxian;
            },
                derivation:"xinjixi",
                content:function (){
                player.loseMaxHp();
                player.addSkill('xinjixi');
                player.storage.xinzaoxian=true;
                player.awakenSkill('xinzaoxian');
            },
            },
            xinjixi:{
                audio:2,
                enable:"phaseUse",
                filter:function (event,player){
                return player.storage.xintuntian.length>0;
            },
                chooseButton:{
                    dialog:function (event,player){
                    return ui.create.dialog('急袭',player.storage.xintuntian,'hidden');
                },
                    backup:function (links,player){
                    return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:{name:'shunshou'},
                        cards:links,
                        onuse:function(result,player){
                            result.cards=lib.skill[result.skill].cards;
                            var card=result.cards[0];
                            player.storage.xintuntian.remove(card);
                            player.syncStorage('xintuntian');
                            if(!player.storage.xintuntian.length){
                                player.unmarkSkill('xintuntian');
                            }
                            else{
                                player.markSkill('xintuntian');
                            }
                            player.logSkill('xinjixi',result.targets);
                        }
                    }
                },
                    prompt:function (links,player){
                    return '选择急袭的目标';
                },
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                        return player.storage.xintuntian.length-1;
                    },
                    },
                },
            },
        new_yingzi:{
                audio:2,
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
                trigger.num++;
            },
                ai:{
                    threaten:1.3,
                },
                mod:{
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='lebu') return false;
                },
                },
            },
        new_yinghuns:{
    			audio:2,    	
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			direct:true,
    			content:function(){
    				"step 0"
    				player.chooseTarget(get.prompt('new_yinghuns'),function(card,player,target){
    					return player!=target;
    				}).set('ai',function(target){
    					var player=_status.event.player;
    					if(player.maxHp-player.hp==1&&target.countCards('he')==0){
    						return 0;
    					}
    					if(get.attitude(_status.event.player,target)>0){
    						return 10+get.attitude(_status.event.player,target);
    					}
    					if(player.maxHp-player.hp==1){
    						return -1;
    					}
    					return 1;
    				});
    				"step 1"
    				if(result.bool){
    					event.num=player.maxHp-player.hp;
    					if(player.countCards('e')>=player.hp){
    						event.num=player.maxHp;
    					}
    					player.logSkill('new_yinghuns',result.targets);
    					event.target=result.targets[0];
    					if(event.num==1){
    						event.directcontrol=true;
    					}
    					else{
    						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
    						var str2='摸一弃'+get.cnNumber(event.num,true);
    						player.chooseControl(str1,str2,function(event,player){
    							return _status.event.choice;
    						}).set('choice',get.attitude(player,event.target)>0?str1:str2);
    						event.str=str1;
    					}
    				}
    				else{
    					event.finish();
    				}
    				"step 2"
    				if(event.directcontrol||result.control==event.str){
    					event.target.draw(event.num);
    					event.target.chooseToDiscard(true,'he');
    				}
    				else{
    					event.target.draw();
    					event.target.chooseToDiscard(event.num,true,'he');
    				}
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==1||target.countCards('e')>=target.hp) return 2;
    					if(target.hp==target.maxHp) return 0.5;
    					if(target.hp==2) return 1.5;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(target.maxHp<=3) return;
    						if(get.tag(card,'damage')){
               if(!target.hasFriend()) return;
    							if(target.hp==target.maxHp) return [0,1];
    						}
    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
    					}
    				}
    			}
    		},
        new_jiang:{       
         group:'new_jiang2',
    			audio:2,
    			trigger:{player:'useCard',target:'useCardToBefore'},
    			filter:function(event,player){
    				if(event.card.name=='juedou') return true;
    				return event.card.name=='sha'&&get.color(event.card)=='red';
    			},
    			forced:true,
    			content:function(){
           game.delay(0.55);
    				player.draw();
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target){
    						if(card.name=='sha'&&get.color(card)=='red') return [1,1];
    					},
    					player:function(card,player,target){
    						if(card.name=='juedou'||card.name=='sha'&&get.color(card)=='red') return [1,2];
    					}
    				}
    			}
    		},
      new_jiang2:{
    			audio:2,
    			trigger:{player:'damageBegin',source:'damageBegin'},
    			filter:function(event,player){
    				if(event.card.name=='juedou') return true;
    				return event.card&&(event.card.name=='sha'&&get.color(event.card)=='red')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';         
			},    			
    			forced:true,
    			content:function(){
    				trigger.num++;
         }
    		}, 
    		new_hunzi:{
    			skillAnimation:true,
    			audio:2,
    			derivation:['new_yingzi','new_yinghun'],
    			unique:true,
    			trigger:{player:'dying'},
    			filter:function(event,player){
    				return !player.storage.new_hunzi;
    			},
    			forced:true,
    			priority:300,
    			content:function(){
           player.addTempSkill('new_hunzi2',{player:'phaseBefore'});
    				player.loseMaxHp();
           player.hp=1;
           player.update();
    				player.addSkill('new_yingzi');
    				player.addSkill('new_yinghuns');
    				player.awakenSkill('new_hunzi');
    				player.storage.new_hunzi=true; 
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==1) return 2;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(!target.hasFriend()) return;
    						if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                            _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
    					}
    				}
    			}
    		},
       new_hunzi2:{
          audio:1,
                trigger:{player:'damageBefore'},
			unique:true,
      forced:true,
     filter:function(event){  
     return !event.nature;				
			},   
			content:function(){     
     trigger.untrigger();
      trigger.finish();
     },
     ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'damage')&&!card.nature){
							return [0,0];
						}
					}
				}
			},
		},
    		new_zhiba:{
    			unique:true,
    			global:'new_zhiba2',
    			zhuSkill:true,
    		},
    		new_zhiba2:{
    			audio:2,
    			forceaudio:true,
    			enable:'phaseUse',
    			filter:function(event,player){
    				if(player.group!='wu'||player.countCards('h')==0) return false;
    				return game.hasPlayer(function(target){
    					return target!=player&&target.hasZhuSkill('new_zhiba',player)&&target.countCards('h')>0;
    				});
    			},
    			filterTarget:function(card,player,target){
    				return target!=player&&target.hasZhuSkill('new_zhiba',player)&&target.countCards('h')>0;
    			},
    			usable:1,
      content:function(){
    				"step 0"
    				if(target.storage.new_hunzi){
    					target.chooseControl('拒绝','不拒绝').set('prompt','是否拒绝制霸拼点？').set('choice',get.attitude(target,player)<=0);
    				}
    				else{
    					event.forced=true;
    				}
    				"step 1"
    				if(!event.forced&&result.control=='拒绝'){
    					game.log(target,'拒绝了拼点');
    					target.chat('拒绝');
    					event.finish();
    					return;
    				}
    				player.chooseToCompare(target,function(card){
    					if(card.name=='du') return 20;
    					var player=get.owner(card);
    					var target=_status.event.getParent().target;
    					if(player!=target&&get.attitude(player,target)>0){
    						return -get.number(card);
    					}
    					return get.number(card);
    				}).set('preserve','lose');
    				"step 2"
    				if(result.bool==false){
    					target.gain([result.player,result.target]);
    					target.$gain2([result.player,result.target]);
    				}
    			},
    			ai:{
    				basic:{
    					order:1
    				},
    				expose:0.2,
    				result:{
    					target:function(player,target){
    						if(player.countCards('h','du')&&get.attitude(player,target)<0) return -1;
    						if(player.countCards('h')<=player.hp) return 0;
    						var maxnum=0;
    						var cards2=target.getCards('h');
    						for(var i=0;i<cards2.length;i++){
    							if(cards2[i].number>maxnum){
    								maxnum=cards2[i].number;
    							}
    						}
    						if(maxnum>10) maxnum=10;
    						if(maxnum<5&&cards2.length>1) maxnum=5;
    						var cards=player.getCards('h');
    						for(var i=0;i<cards.length;i++){
    							if(cards[i].number<maxnum) return 1;
    						}
    						return 0;
    					}
    				}
    			}
    		},           
            new_zhijian:{
            audio:1,
                enable:"phaseUse",
                filter:function (event,player){
                return player.num('h',{type:'equip'})>0;

            },
                filterCard:function (card){
                return get.type(card)=='equip';
            },
                check:function (card){
                var player=_status.currentPhase;
                if(player.num('he',{subtype:get.subtype(card)})>1){
                    return 11-ai.get.equipValue(card);
                }
                return 6-ai.get.value(card);

            },
                filterTarget:function (card,player,target){
                if(target.isMin()) return false;
                return player!=target&&!target.get('e',get.subtype(card)[5]);
            },
                content:function (){
                target.equip(cards[0]);
                player.draw(1+Math.floor(Math.random()*2));
            },
                discard:false,
       prepare:function (cards,player,targets){
                player.$give(cards,targets[0],false);
            },
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        target:3,
                    },
                    threaten:1.4,
                },
            },
            new_guzheng:{
			audio:1,
			unique:true,
			gainable:true,
			trigger:{global:'discardAfter'},
			filter:function(event,player){
				if(event.player!=player&&event.player.classList.contains('dead')==false&&
				event.cards&&event.cards.length&&event.getParent(2).name=='phaseDiscard'){
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				}
			},
			checkx:function(event,player){
				var du=false;
				var num=0;
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])=='d'){
						num++;
						if(event.cards[i].name=='du'){
							du=true;
						}
					}
				}
				if(get.attitude(player,event.player)>0){
					if(du&&num<=3){
						return false;
					}
					return true;
				}
				if(du) return true;
				return num>2;
			},
			direct:true,
			content:function(){
				"step 0"
				event.cards=trigger.cards.slice(0);
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])!='d'){
						event.cards.splice(i,1);i--;
					}
				}
				if(event.cards.length==0){
					event.finish();
					return;
				}
				var check=lib.skill.guzheng.checkx(trigger,player);
				player.chooseCardButton(event.cards,'固政：选择令'+get.translation(trigger.player)+'收回的牌').set('ai',function(button){
					if(_status.event.check){
						return 20-get.value(button.link);
					}
					return 0;
				}).set('check',check);
				"step 1"
				if(result.bool){
					game.delay(0.5);
					player.logSkill('new_guzheng',trigger.player);
					trigger.player.gain(result.links[0]);
					trigger.player.$gain2(result.links[0]);
					game.log(trigger.player,'收回了',result.links[0]);
					event.cards.remove(result.links[0]);
					if(event.cards.length){
						player.gain(event.cards);
						player.$gain2(event.cards);
						game.log(player,'收回了',event.cards);
					}
					game.delay();
				}
			},
                mod:{
                    maxHandcard:function(player,num){
            return num+1;          
        }
                },
                ai:{
                    threaten:1.4,
                    expose:0.2,
                },
            },
            new_beige:{
                audio:4,
                trigger:{global:'damageEnd'},
			filter:function(event,player){
				return (event.card&&event.card.name=='sha'&&event.source&&
					event.player.classList.contains('dead')==false&&player.countCards('he'));
			},
			direct:true,
			checkx:function(event,player){
				var att1=get.attitude(player,event.player);
				var att2=get.attitude(player,event.source);
				return att1>0&&att2<=0;
			},
			content:function(){
				"step 0"
				var next=player.chooseToDiscard('he',get.prompt('beige'));
				var check=lib.skill.beige.checkx(trigger,player);
				next.set('ai',function(card){
					if(_status.event.goon) return 8-get.value(card);
					return 0;
				});
				next.set('logSkill','new_beige');
				next.set('goon',check);
				"step 1"
				if(result.bool){
					trigger.player.judge();
				}
				else{
					event.finish();
				}
                "step 2"
                switch(get.suit(result.card)){
                    case 'heart':trigger.player.recover(trigger.num);break;
                    case 'diamond':trigger.player.draw(trigger.num*2);break;
                    case 'club':trigger.source.chooseToDiscard('he',trigger.num*2,true);break;
                    case 'spade':if(!trigger.source.isTurnedOver()){trigger.source.turnOver();}player.draw(trigger.num);break;
                }
            },
                ai:{
                    expose:0.3,
                },
            },
            xinduanchang:{
                audio:2, 
                forbid:["boss"],            
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
                return event.source&&event.source.isIn();
            },
                content:function (){
   trigger.source.discard(true,trigger.source.get('he'));
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
            xinxuanfeng:{
                audio:2,
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
                    player.logSkill('xinxuanfeng',result.targets);        
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
                    threaten:1.5,
                    effect:{

                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },
            xinxingshang:{
                audio:4,
                unique:true,
                gainable:true,
                forced:true,
                trigger:{
                    global:"dieEnd",
                },
                priority:5,
                filter:function (event){
                return event.playerCards&&event.playerCards.length>0
            },
                content:function (){
           'step 0'
                            var cards=[];
                            for(var i=0;i<ui.discardPile.childNodes.length;i++){
                                if(get.suit(ui.discardPile.childNodes[i])=='heart'){
                                    cards=cards.concat(ui.discardPile.childNodes[i]);
                                }
                            }
                            if(cards.length){
                                var card=cards.randomGet();
                                player.gain(card,'gain2');
                                game.log(player,'从弃牌堆获得了',card);
             }

       "step 1"
                player.gain(trigger.playerCards);
                player.$draw(trigger.playerCards);      
                game.delay();
                "step 2"
                for(var i=0;i<trigger.playerCards.length;i++){
                    trigger.cards.remove(trigger.playerCards[i]);
                }
                trigger.playerCards.length=0;
            },
            },
            xinfangzhu:{
                audio:2,
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){      
           "step 0"    
      event.num=trigger.num;  
          "step 1"    
        player.chooseTarget(get.prompt('xinfangzhu'),function(card,player,target){
                    return player!=target
                }).ai=function(target){
                    var player=_status.event.player;
                    if(ai.get.attitude(_status.event.player,target)==0) return 0;
                    if(ai.get.attitude(_status.event.player,target)>0){
                        if(target.classList.contains('turnedover')) return 1000-target.num('h');
                        if(player.maxHp-player.hp<3) return -1;
                        return 100-target.num('h');
                    }
                    else{
                        if(target.classList.contains('turnedover')) return -1;
                        if(player.maxHp-player.hp>=3) return -1;
                        return 1+target.num('h');
                    }
                }
                "step 2"
                if(result.bool){
         game.delay();
                    player.logSkill('xinfangzhu',result.targets);
                    result.targets[0].draw(player.maxHp-player.hp);
                    result.targets[0].turnOver();
         }                       
        event.num--;
                if(event.num>0){
                    event.goto(1);
                }                
            },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-2];
                            if(target.hp<=1) return;
                            if(!target.hasFriend()) return;
                            var hastarget=false;
                            var turnfriend=false;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(ai.get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                                    hastarget=true;
                                }
                                if(ai.get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                                    hastarget=true;
                                    turnfriend=true;
                                }
                            }
                            if(ai.get.attitude(player,target)>0&&!hastarget) return;
                            if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                            if(target.hp>1) return [1,0.5];
                        }
                    },
                    },
                },
            },
            xinsongwei:{
                unique:true,
                global:"xinsongwei2",
                zhuSkill:true,
            },
            "xinsongwei2":{
                audio:3,
                forceaudio:true,
                trigger:{
                    player:"judgeEnd",
                },
                filter:function (event,player){            
      if(player.group!='wei') return false;    
                if(get.suit(event.result.card)=='diamond') return false;
                return game.hasPlayer(function(target){
                    return player!=target&&target.hasZhuSkill('xinsongwei',player);
                });
            },
                direct:true,
                content:function (){
                'step 0'
                var list=game.filterPlayer(function(current){
                    return current!=player&&current.hasZhuSkill('xinsongwei',player);
                });
                event.list=list;
                'step 1'
                if(event.list.length){
                    var current=event.list.shift();
                    event.current=current;
                    player.chooseBool(get.prompt('xinsongwei',current)).set('choice',ai.get.attitude(player,current)>0);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(result.bool){
                    player.logSkill('xinsongwei2',event.current);
                    event.current.draw();
                }
                event.goto(1);
            },
            },
            shenshe:{
                group:["qilin_skill","zhuge_skill"],
                mod:{
                    targetInRange:function (card,player,target,now){
                    if(card.name=='sha') return true;
        },
                },
            },
            xinjushou:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
                if(player.isTurnedOver()) return true;
          var num=game.players.length;      
                return num>=1;
            },
                content:function (){
                "step 0"
                player.turnOver();
                "step 1"
                var num=game.players.length;
                player.draw(Math.min(9,player.maxHp-player.hp+2+num));                      
            },
                ai:{                    
                    effect:{
                        threaten:function(player,target){
         if(game.players.length>1) return game.players.length*0.12+1.4;        					
			         	},
             },
            },
          },            
            feijiang:{
                unique:true,
                global:"feijiang2",
                zhuSkill:true,
            },
            "feijiang2":{
                audio:1,
                enable:"phaseUse",
                discard:false,
                line:true,
                prepare:"give",
                filter:function (event,player){
                if(player.group!='qun') return false;
                if(player.num('h','sha')+player.num('h','juedou')+player.num('h','jiu')==0) return 0;
                return game.hasPlayer(function(target){
                    return target!=player&&target.hasZhuSkill('feijiang',player);
                });
            },
                filterCard:function (card){
                return (card.name=='sha'||card.name=='juedou'||card.name=='jiu')
            },
                filterTarget:function (card,player,target){
                return target!=player&&target.hasZhuSkill('feijiang',player);
            },
                usable:1,
                forceaudio:true,
                content:function (){
                target.gain(cards,player);
            },
                ai:{
                    expose:0.3,
                    order:10,
                    result:{
                        target:5,
                    },
                },
            },            
                jieyi:{
                audio:1,
                enable:"phaseUse",               
                usable:1,
                selectTarget:2,
                check:function (event,player){
                if(ai.get.attitude(player,event.target)>1)
                return 2;                      
                if(ai.get.attitude(player,event.target)<1)
                return 0;
                return 1;
                },
       filterTarget:function (card,player,target){
                if(target.sex!='male') return false;               
                if(target==player) return false;
                return true;
                },
                content:function (){                     
                   "step 0"
             player.addTempSkill('wusheng','phaseAfter');            player.addTempSkill('paoxiao','phaseAfter');      
                   "step 1"
        if(target.hp<target.maxHp){
        target.recover();
         }
        else{
        target.draw();
        }          
       },
                ai:{
                    order:15,
                    result:{
                        player:1,
                        target:1,
                    },
                    threaten:2.1,
                },
            },                
            xinyiji:{group:["xinyiji1","xinyiji2"]},
                xinyiji1:{
                audio:["yiji",2],
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
                return (event.num>0)
            },
                content:function (){
                "step 0"
                player.draw(Math.floor(player.num('e')/2)+2*trigger.num);
                "step 1"
                event.cards=result;
                "step 2"
                player.chooseCardTarget({
                    filterCard:function(card){
                        return _status.event.getParent().cards.contains(card);
                    },
                    selectCard:[1,event.cards.length],
                    filterTarget:function(card,player,target){
                        return player!=target;
                    },
                    ai1:function(card){
                        if(ui.selected.cards.length>0) return -1;
                        if(card.name=='du') return 20;
                        return (_status.event.player.num('h')-_status.event.player.hp);
                    },
                    ai2:function(target){
                        var att=ai.get.attitude(_status.event.player,target);
                        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                            return 1-att;
                        }
                        return att-4;
                    },
                    prompt:'请选择要送人的卡牌'
                });
                "step 3"
                if(result.bool){
                    player.line(result.targets,'green');
                    result.targets[0].gain(result.cards,player);
                    player.$give(result.cards.length,result.targets[0]);
                    for(var i=0;i<result.cards.length;i++){
                        event.cards.remove(result.cards[i]);
                    }
                    if(event.cards.length) event.goto(2);
                }
            },
                ai:{
                    maixie:true,
                    effect:{   
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                 
                        target:function (card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-2];
                            if(!target.hasFriend()) return;
                            if(target.hp>=4) return [1,get.tag(card,'damage')*2];
                            if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
                            if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                        }
      },
                    },
                },
            },
       xinyiji2:{   
         audio:2,
    trigger:{
        player:"dieBegin",
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('zhuiyi'),function(card,player,target){
            return player!=target&&_status.event.source!=target;
        }).set('ai',function(target){
            var num=ai.get.attitude(_status.event.player,target);
            if(num>0){
                if(target.hp==1){
                    num+=2;
                }
                if(target.hp<target.maxHp){
                    num+=2;
                }
            }
            return num;
        }).set('source',trigger.source);
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('reyiji',target);
            target.gainMaxHp();
            target.recover();          
        }
    },
    ai:{
        expose:0.5,
    },
     },
            xinluoshen:{
                audio:["luoshen",2],
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                "step 0"
                if(event.cards==undefined) event.cards=[];
                player.judge(function(card){
                    if(get.suit(card)=='diamond') return -2;
                    return 2;
                },ui.special);
                "step 1"
                if(result.judge>0){
                    event.cards.push(result.card);
                    if(lib.config.autoskilllist.contains('luoshen')){
                        player.chooseBool('是否再次发动？');
                    }
                    else{
                        event._result={bool:true};
                    }
                }
                else{
                    for(var i=0;i<event.cards.length;i++){
                        if(get.position(event.cards[i])!='s'){
                            event.cards.splice(i,1);i--;
                        }
                    }
                    player.gain(event.cards);
                    if(event.cards.length){
                        player.$draw(event.cards);
                    }
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    event.goto(0);
                }
                else{
                    player.gain(event.cards);
                    if(event.cards.length){
                        player.$draw(event.cards);
                    }
                }
            },
            ai:{
                    threaten:1.8,
                },
            },
            xinqingguo:{
                audio:["qingguo",2],
                enable:["chooseToRespond"],
       filterCard:function (card){
                return get.suit(card)=='spade';
            },
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
                if(!player.num('h',{suit:'spade'})) return false;
            },
                prompt:"将一张♠花色的手牌当闪打出",
                check:function (){return 1},
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
                    if(!player.num('h',{suit:'spade'})) return false;
                },
                    effect:{
                        target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                    },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },                   
                },
            },
            xinrende:{
                audio:["rende",2],
                group:["rende1","new_rende2"],
                enable:"phaseUse",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give",
                filterTarget:function (card,player,target){
                return player!=target;
            },
                check:function (card){
                if(ui.selected.cards.length>1) return 0;
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
                if(!ui.selected.cards.length&&card.name=='du') return 20;
                var player=get.owner(card);
                if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
                    if(ui.selected.cards.length){
                        return -1;
                    }
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].get('s').contains('haoshi')&&
                            !players[i].isTurnedOver()&&
                            !players[i].num('j','lebu')&&
                            ai.get.attitude(player,players[i])>=3&&
                            ai.get.attitude(players[i],player)>=3){
                            return 11-ai.get.value(card);
                        }
                    }
                    if(player.num('h')>player.hp) return 10-ai.get.value(card);
                    if(player.num('h')>2) return 6-ai.get.value(card);
                    return -1;
                }
                return 10-ai.get.value(card);
            },
                content:function (){
                target.gain(cards,player);
                if(typeof player.storage.rende!='number'){
       player.storage.rende=0;
                }
                if(player.storage.rende>=0){
                    player.storage.rende+=cards.length;
                    if(player.storage.rende>=2){
                        player.recover(1+Math.floor(Math.random()*(2)));
                        player.storage.rende=-1;
                    }
                }
            },
                ai:{
                    order:function (skill,player){
                    if(player.hp<player.maxHp&&player.storage.rende<2&&player.num('h')>1){
                        return 20;
                    }
                    return 1;
                },
                    result:{
                        target:function (player,target){
                        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                            return -10;
                        }
                        if(target.num('j','lebu')) return 0;
                        var nh=target.num('h');
                        var np=player.num('h');
                        if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
                            if(nh>=np-1&&np<=player.hp&&!target.get('s').contains('haoshi')) return 0;
                        }
                        return Math.max(1,5-nh);
                    },
                    },
                    effect:{
                        target:function (card,player,target){
                        if(player==target&&get.type(card)=='equip'){
                            if(player.num('e',{subtype:get.subtype(card)})){
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(players[i]!=player&&ai.get.attitude(player,players[i])>0){
                                        return 0;
                                    }
                                }
                            }
                        }
                    },
                    },
                    threaten:0.8,
                },
            },
            new_rende2:{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                popup:false,
                silent:true,
                filter:function (event,player){
                return game.players.length<=3;
                },
                content:function (){
                player.removeSkill('xinrende');
                player.addSkill('new_renwang');
            },
            },
            new_renwang:{
                audio:2,
                trigger:{
                    player:'phaseEnd',
                },
                direct:true,
                filter:function (event,player){  
                return player.hp<player.maxHp;
                },
                content:function (){        
                "step 0" 
player.chooseTarget(get.prompt('new_renwang'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('h')>0;
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);

                });
                "step 1"
                if(result.bool){
            game.delay(0.5);                   
player.logSkill('new_renwang');              event.targets=result.targets
         if(result.targets.length>=1){

        player.line('result.targets','green');
player.gainPlayerCard(event.targets[0],'h',true);                 }                 
                else{
                    event.finish();         
                }           
        }       
            },
                ai:{         
                    threaten:1.6,
                    effect:{
                        target:function (card,player,target){
                       if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
                    },
                  },                    
                },
            },
            xinjijiang:{
                unique:true,
                group:["xinjijiang1","xinjijiang2"],
                zhuSkill:true,
            },
            "xinjijiang1":{
                audio:2,
                audioname:["xinliushan"],
                trigger:{
                    player:"chooseToRespondBegin",
                },
       filter:function (event,player){
                if(event.responded) return false;
                if(player.storage.xinjijianging) return false;
                if(!player.hasZhuSkill('xinjijiang')) return false;
                if(event.filterCard({name:'sha'},player,event)==false) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='shu';
                });
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    event.finish();
                }
                else if(event.current.group=='shu'){
                    player.storage.xinjijianging=true;
                    var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张杀？',{name:'sha'});
                    next.set('ai',function(){
                        var event=_status.event;
                        return (ai.get.attitude(event.player,event.source)-2);
                    });
                    next.set('source',player);
                    next.autochoose=lib.filter.autoRespondSha;
                }
                else{
                    event.current=event.current.next;
                    event.redo();
                }
                "step 1"
                player.storage.xinjijianging=false;
                if(result.bool){
                    event.finish();     
                    player.draw();              
                    trigger.result=result;
                    trigger.responded=true;                    
                    trigger.animate=false;
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
            },
            "xinjijiang2":{
                audio:2,
                audioname:["xinliushan"],
                enable:"chooseToUse",
                filter:function (event,player){
                if(event.filterCard&&!event.filterCard({name:'sha'},player,event)) return false;
                if(!player.hasZhuSkill('xinjijiang')) return false;
                if(player.hasSkill('xinjijiang3')) return false;
                if(!lib.filter.cardUsable({name:'sha'},player)) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='shu';
                });
            },
      filterTarget:function (card,player,target){
                if(_status.event._backup&&
                    typeof _status.event._backup.filterTarget=='function'&&
                    !_status.event._backup.filterTarget({name:'sha'},player,target)){
                    return false;
                }
                return player.canUse({name:'sha'},target);
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    player.addSkill('xinjijiang3');
                    event.getParent(2).step=0;
                    event.finish();
                }
                else if(event.current.group=='shu'){
                    var next=event.current.chooseToRespond('是否替'+get.translation(player)+'对'+get.translation(target)+'使用一张【杀】',
                    function(card,player,event){
                        event=event||_status.event;
                        return card.name=='sha'&&event.source.canUse(card,event.target);
                    });
                    next.set('ai',function(card){
                        var event=_status.event;
                        return ai.get.effect(event.target,card,event.source,event.player);
                    });
                    next.set('source',player);
                    next.set('target',target);
                    next.autochoose=lib.filter.autoRespondSha;
                }
                else{
                    event.current=event.current.next;
                    event.redo();
                }
                "step 1"
                if(result.bool){
                    event.finish();      if(result.cards&&result.cards.length==1&&result.cards[0].name=='sha'){
player.draw();                 player.useCard(result.cards[0],target).animate=false;
                    }
                    else{
              player.useCard({name:'sha'},target).animate=false;          
                    }
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
                ai:{
                    result:{
                        target:function (player,target){
                        if(player.hasSkill('xinjijiang3')) return 0;
                        return ai.get.effect(target,{name:'sha'},player,target);
                    },
                    },
       order:function (){
                    return ai.get.order({name:'sha'})+5;
                },
                },
            },
            "xinjijiang3":{
                trigger:{
                    global:["useCardAfter","useSkillAfter","phaseAfter"],
                },
                forced:true,
                popup:false,
                silent:true,
                filter:function (event){
                return event.skill!='xinjijiang2'&&event.skill!='xinqinwang2';
            },
                content:function (){
                player.removeSkill('xinjijiang3');
            },
            },
           xinwusheng:{
                group:["xinwusheng1","xinwusheng2"] 
},                           
                    xinwusheng1:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                        return event.skill=='xinwusheng2';
                    },
              content:function (){   
                 game.delay();            
                 player.draw();
                 player.addTempSkill('qinglong_skill',{player:'phaseBefore'});                
                    },
                    },           
xinwusheng2:{
			audio:3,
     filter:function(event,player){
				return player.countCards('he',{color:'red'})>0;
			},
			enable:['chooseToRespond','chooseToUse'],
			filterCard:function(card,player){
				if(get.zhu(player,'shouyue')) return true;
				return get.color(card)=='red';
			},
			position:'he',
			viewAs:{name:'sha'},
			viewAsFilter:function(player){
				if(get.zhu(player,'shouyue')){
					if(!player.countCards('he')) return false;
				}
				else{
					if(!player.countCards('he',{color:'red'})) return false;
				}
			},
			prompt:'将一张♥或♦牌当【杀】使用或打出',
			check:function(card){
    var player=get.owner(card);
    if(player.hp>player.maxHp-1)
     return 15-ai.get.value(card)
      return 8-ai.get.value(card)},
			ai:{
       order:5.2,
       threaten:1.4,
				skillTagFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('he')) return false;
					}
					else{
						if(!player.countCards('he',{color:'red'})) return false;
					}
				},
				respondSha:true,
			}

		},                  
            new_paoxiao:{
                audio:2,                
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event){
                return event.card.name=='sha';
                },
                content:function (){
                game.delay(0.55);
                player.draw();
                },
                mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return Infinity;
                  },
                },
                ai:{
                    threaten:1.4,
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
                    if(!get.zhu(player,'shouyue')) return false;
                    if(arg&&arg.name=='sha') return true;
                    return false;
                },
                },
            },
            xinguanxing:{
                audio:4,
                audioname:["xinjiangwei"],
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                "step 0"
                if(player.isUnderControl()){
                    game.modeSwapPlayer(player);
                }
                var num=Math.max(3,game.countPlayer());
                if(player.hasSkill('xinzhiji')&&player.hasSkill('xinguanxing')){
                    num=6;
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
                    if(!player.num('h','wuxie')){
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
                            return ai.get.value(b,player)-ai.get.value(a,player);
       });
                        while(cards.length){
                            if(ai.get.value(cards[0],player)<=5) break;
                            top.unshift(cards.shift());
                        }
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
                    threaten:1.4,
                },
            },
            xinkongcheng:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                    if(target.num('h')==0){
                        if(card.name!='taoyuan')
return false;
                    }
                },
                },
                group:"kongcheng1",
                ai:{                   
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){
                if(player.num('h')==1) return [1,3];
            },
                    },
                },
            },                     
       xinlongdan:{
                group:["xinlongdan_sha","xinlongdan_shan","xinlongdan_draw"],
                subSkill:{
                    draw:{
                        audio:1,
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){                        
                        return event.skill=='xinlongdan_sha'||event.skill=='xinlongdan_shan';
                    },
                        content:function (){
                    "step 0"
            event.cards=get.cards(Math.min(2,1+Math.floor((player.maxHp-player.hp)/2)));
            player.showCards(event.cards);
            "step 1"
            for(var i=0;i<cards.length;i++){
                if(get.type(cards[i])!='basic'){
                    ui.discardPile.appendChild(cards[i]);
                    cards.splice(i--,1);
                }
            }
            player.gain(cards,'gain2');
            game.log(player,'获得了',cards);
                },
                    },
                    sha:{
                        audio:2,
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function (player){
                        if(!player.num('h','shan')) return false;
                    },
                        prompt:"将一张【闪】当【杀】使用或打出",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                                if(get.tag(card,'respondSha')&&current<0) return 0.6
                            },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                            if(!player.num('h','shan')) return false;
                        },
                            order:function (){
                            return ai.get.order({name:'sha'})+1;
                        },
                            useful:2,
                            value:15,
                            basic:{
                                useful:[5,1],
                                value:[15,2],
                            },
                            result:{
                                target:function (player,target){
                        if(player.hasSkill('jiu')&&!target.num('e','baiyin')){
                            if(ai.get.attitude(player,target)>0){
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
                    shan:{
                        audio:2,
                        enable:["chooseToRespond"],
                        filterCard:{
                            name:"sha",
                        },
                        viewAs:{
                            name:"shan",
                        },
                        prompt:"将一张【杀】当【闪】打出",
                        check:function (){return 1},
                        viewAsFilter:function (player){
                        if(!player.num('h','sha')) return false;
                    },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function (player){
                            if(!player.num('h','sha')) return false;
                        },
                            effect:{
                                target:function (card,player,target,current){
                                if(get.tag(card,'respondShan')&&current<0) return 0.6
                            },
                            },
                            order:8,
                            useful:15,
                            value:2,
                            basic:{
                                useful:[15,2],
                                value:[7,2],
                            },
                        },
                    },
                },
            },            
            new_tieji:{
                audio:2,
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
            },
                logTarget:"target",
                content:function (){
      player.discardPlayerCard(trigger.target,2,'he',true);
            },
                ai:{
                    threaten:1.5,
                },
            },
            xinjizhi:{
                audio:4,
                audioname:["jianyong"],
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='trick'||get.type(event.card)=='delay'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
   "step 0"
            event.cards=get.cards(2);
            player.showCards(event.cards,'集智');
            "step 1"
            for(var i=0;i<cards.length;i++){
                if(get.type(cards[i])!='trick'&&get.type(cards[i])!='delay'){
                    ui.discardPile.appendChild(cards[i]);
                    cards.splice(i--,1);
                }
            }
            player.gain(cards,'gain2');
            game.log(player,'获得了',cards);
    },
                ai:{
                    threaten:1.6,

                    order:15,
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){
                if(get.type(card)=='trick') return [1,3];
            },
                    },
                },
            },            
            xinzhiheng:{
                audio:["zhiheng",2],
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:function (card){
                return get.color(card)=='red';
            },
                selectCard:[1,3],
                prompt:"弃置1~3张♥或♦牌并摸等同弃置牌数两倍的牌",
                check:function (card){
                var player=get.owner(card);
                if(player.hp>=3)
                return 15-ai.get.value(card)
                return 8-ai.get.value(card)
            },
                content:function (){
                player.draw(2*cards.length);
            },
                ai:{
                    order:7.2,
                    result:{
                        player:1.5,
                    },
                    threaten:1.6,
                },
            },
            xinjiuyuan:{
                audio:"ext:★新版武将:2",
                unique:true,
                trigger:{
                    target:"taoBegin",
                },
                zhuSkill:true,
                forced:true,
                filter:function (event,player){
                if(event.player==player) return false;
                if(!player.hasZhuSkill('xinjiuyuan')) return false;
                if(player.hp>0) return false;
                if(event.player.group!='wu') return false;
                return true;
            },
                content:function (){
                player.recover(2);
            },
            },
            new_qixi:{
                group:['new_qixi1','new_qixi2'],
            },
           new_qixi1:{
                audio:["qixi",4],
                enable:"chooseToUse",
                usable:2,
                filterCard:function (card){
                return get.color(card)=='red';
            },
                position:"he",
                viewAs:{
                    name:"shunshou",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'red'})) return false;
            },
                prompt:"将一张♥或♦牌当【顺手牵羊】使用",
                check:function (card){return 8-ai.get.value(card)},
                ai:{
                    wuxie:function (target,card,player,viewer){
                    if(ai.get.attitude(viewer,player)>0&&ai.get.attitude(viewer,target)>0){
                        return 0;
                    }
                },
                    basic:{
                        order:10,
                        threaten:1.6,
                        useful:4,
                        value:9,
                    },
                    result:{
                        target:function (player,target){
                        if(ai.get.attitude(player,target)<=0) return (target.num('he')>0)?-1.5:1.5;
                        var js=target.get('j');
                        if(js.length){
                            var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                            if(jj.name=='shunshou') return 3;
                            if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                return -1.5;
                            }
                            return 3;
                        }
                        return -1.5;
                    },
                        player:function (player,target){
                        if(ai.get.attitude(player,target)<0&&!target.num('he')){
                            return 0;
                        }
                        if(ai.get.attitude(player,target)>1){
                            var js=target.get('j');
                            if(js.length){
                                var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                                if(jj.name=='shunshou') return 1;
                                if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                    return 0;
                                }
                                return 1;
                            }
                            return 0;
                        }
                        return 1;
                    },
                    },
                    tag:{
                        loseCard:1,
                        gain:1,
                    },
                },
            },
            new_qixi2:{
                audio:["qixi",4],
                enable:"chooseToUse",
                usable:2,
                filterCard:function (card){
                return get.color(card)=='black';
            },
                position:"he",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'black'})) return false;
            },
                prompt:"将一张♠或♣牌当【过河拆桥】使用",
                check:function (card){return 5-ai.get.value(card)},
                ai:{
                    basic:{
                        order:9,
                        threaten:1.4,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                        var es=target.get('e');
                        var nh=target.num('h');
                        var noe=(es.length==0||target.hasSkillTag('noe'));
                        var noe2=(es.length==1&&es[0].name=='baiyin'&&target.hp<target.maxHp);
                        var noh=(nh==0||target.hasSkillTag('noh'));
                        if(noh&&noe) return 0;
                        if(noh&&noe2) return 0.01;
                        if(ai.get.attitude(player,target)<=0) return (target.num('he'))?-1.5:1.5;
                        var js=target.get('j');
                        if(js.length){
                            var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                            if(jj.name=='guohe') return 3;
                            if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                return -1.5;
                            }
                            return 2;
                        }
                        return -1.5;
                    },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            xinkeji:{
                audio:["keji",4],
                forced:true,
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
                return (get.cardCount({name:'sha'},player)==0);
            },
                content:function (){                      
                trigger.untrigger();
                trigger.finish();
                player.draw();
            },       
   ai:{
                    noe:true,
                    threaten:1.4,
                    effect:{
                        player:function (card,player){  
 if(player.num('e',{name:'zhuge'})<1&&(get.type(card)=='basic'&&card.name!='tao')||card.name=='jidou'||card.name=='wanjian'||card.name=='nanman') return [1,-3];
if(player.countCards('h','sha')<=6&&card.name=='zhuge') return [1,-3]; 
if(player.countCards('h','sha')>6&&card.name=='zhuge') return [1,3];
                    },
                    },
                },
            },
            xinkurou:{
                audio:["kurou",4],
                enable:"phaseUse",
                prompt:"失去一点体力并摸三张牌",
                content:function (){              
                "step 0"
                player.loseHp(1);
                "step 1"
                player.draw(3);
            },
                ai:{
                    order:9,
                    noe:true,
                    result:{
      player:function (card,player){
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,3];
     },
      player:function (player){
            if(player.hp>3)
return 2.5;
           if(player.num('h')>=player.hp) return 0;
           if(player.hp>1&&player.num('he',{name:'zhuge'})) return 1.5;         
           if(player.hp>1&&player.num('h',{name:'tao'})) return 5;
                        if(player.hp<3) return 0;
                        return 0.5;
                    },
                    },
                },
            },
            xinyingzi:{
                audio:["yingzi",2],
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
                trigger.num++;
            },
                ai:{
                    threaten:1.3,
                },
                mod:{
                    maxHandcard:function (player,num){
                    return num+2+Math.ceil(player.num('e')/2);
                },
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='bingliang') return false;
                },
                },
            },            
            new_liuli:{
                audio:["liuli",2],
                trigger:{
                    target:["shaBefore","juedouBefore"],
                },
                direct:true,
                priority:7,
                filter:function (event,player){
                if(player.num('he')==0) return false;
                return game.hasPlayer(function(current){
                    return get.distance(player,current,'attack')<=1&&current!=event.player&&
                        current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
                });
            },
                content:function (){
                "step 0"
                var next=player.chooseCardTarget({
                    position:'he',
                    filterCard:lib.filter.cardDiscardable,
                    filterTarget:function(card,player,target){
                        var trigger=_status.event.getTrigger();
                        if(get.distance(player,target,'attack')<=1&&
                            target!=trigger.player&&target!=player){
                            if(player.canUse(trigger.card,target)) return true;
                        }
                        return false;
                    },
                    ai1:function(card){
                        return ai.get.unuseful(card)+9;
                    },
                    ai2:function(target){
                        if(_status.event.player.num('h','shan')){
                            return -ai.get.attitude(_status.event.player,target);
                        }
                        if(ai.get.attitude(_status.event.player,target)<5){
                            return 6-ai.get.attitude(_status.event.player,target);
                        }
                        if(_status.event.player.hp==1&&player.num('h','shan')==0){
                            return 10-ai.get.attitude(_status.event.player,target);
                        }
                        if(_status.event.player.hp==2&&player.num('h','shan')==0){
                            return 8-ai.get.attitude(_status.event.player,target);
                        }
                        return -1;
                    },
                    prompt:get.prompt('liuli')
                });
                "step 1"
                if(result.bool){
                    player.discard(result.cards);
                    player.logSkill(event.name,result.targets);
                    trigger.target=result.targets[0];
                    trigger.targets.remove(player);
                    trigger.targets.push(result.targets[0]);
                }
                else{
                    event.finish();
                }
                "step 2"
                trigger.untrigger();
                trigger.trigger('useCardToBefore');
                trigger.trigger('shaBefore');
                trigger.trigger('juedouBefore');                
                game.delay();
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
                        if(target.num('he')==0) return;
                        if(card.name!='sha'||card.name!='juedou') return;
                        var min=1;
                        var friend=ai.get.attitude(player,target)>0;
                        var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(player!=players[i]&&
                                ai.get.attitude(target,players[i])<0&&
                                target.canUse(card,players[i])){
                                if(!friend) return 0;
                                if(ai.get.effect(players[i],vcard,player,player)>0){
                                    if(!player.canUse(card,players[0])){
                                        return [0,0.1];
                                    }
                                    min=0;
                                }
                            }
                        }
                        return min;
                    },
                    },
                },
            },
            xinqianxun:{
                mod:{
                    targetEnabled:function(card,player,target,now){
                    if(card.name=='huogong'||card.name=='shunshou'||card.name=='lebu') return false;
                },
                },
            },
            xinlianying:{
                audio:4,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                if(player.num('h')>=1+Math.floor(player.num('e')/2)) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(1+Math.floor(player.num('e')/2)-player.num('h'));
            },
                ai:{
                    threaten:1.4,
                    effect:{
                        target:function (card){
                        if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                    },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){
                        if(player.num('h')!=1) return false;
                    }
                },
                },
            },
            xinxiaoji:{
                audio:["xiaoji",4],
                trigger:{
                    player:["loseEnd"],
                },
                forced:true,
                filter:function (event,player){
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='e') return true;
                }
                return false;
            },
                content:function (){
                var num=0;
                for(var i=0;i<trigger.cards.length;i++){
                    if(trigger.cards[i].original=='e') num+=2+Math.ceil(player.num('e')/2);
                }
                player.draw(num);
            },
                ai:{
                    noe:true,
                    threaten:1.5,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                },
            },
            xinjieyin:{
                audio:["jieyin",2],
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                usable:1,
                selectCard:2,
                check:function (card){
                var player=get.owner(card);
                if(player.num('h')>player.hp)
                    return 8-ai.get.value(card)
                if(player.hp<player.maxHp)
                    return 6-ai.get.value(card)
                return 4-ai.get.value(card)

            },
                filterTarget:function (card,player,target){
                if(target.sex!='male') return false;
                if(target.hp>=target.maxHp) return false;
                if(target==player) return false;
                return true;
            },
                content:function (){
                player.draw(1-(player.maxHp-player.hp));
                player.recover();
                target.recover();
            },
                ai:{
                    order:5.5,

                    result:{
                        player:function (player){
                        if(player.hp<player.maxHp) return 4;
                        if(player.num('h')>player.hp) return 0
                        return -1;
                    },
                        target:4,
                    },
                    threaten:2,
                },
            },
            xinqingnang:{
                audio:["qingnang",2],
                enable:"phaseUse",                
                usable:1,               
                check:function (card){
                return 9-ai.get.value(card)
            },
                filterTarget:function (card,player,target){
                if(target.hp>=target.maxHp) return false;
                return target.num('he')>0;
            },
                content:function (){
                target.chooseToDiscard(true,'he');
                target.recover();
            },
                ai:{
                    order:6,
                    result:{
                        target:function (player,target){
                        if(target.hp==1) return 5;
                       if(target.num('he')>2) return 2;
 if(player==target&&player.num('h')>1&&player.hp<player.maxHp) return 5;
                        return 2;
                    },
                    },
                    threaten:1.9,
                },
            },
            xinjijiu:{group:["xinjijiu1","xinjijiu2"]},
            xinjijiu1:{
                audio:2,
                enable:"chooseToUse",                
                filterCard:function (card){
                return get.suit(card)=='heart';
            },
                filter:function(event,player){
				return player.countCards('he',{suit:'heart'})>0;
             },
                position:"he",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张♥牌当桃使用",
                check:function (card){return 15-ai.get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                    return player.num('he',{suit:'heart'})>0;
                },
                    threaten:1.5,
                    save:true,
                },
            },
           xinjijiu2:{
        trigger:{
        global:"dying",
    },
    audio:["jijiu",2],
    priority:10,
    unique:true,
    filter:function (event,player){
        return player!=_status.currentPhase;
    },
    check:function (event,player){
                return ai.get.attitude(player,event.player)>1;
            },   
    content:function (){
      player.line(trigger.player,'green');
				if(Math.random()<=0.5){
					trigger.player.recover(1-trigger.player.hp);
				}  
       else{
        player.draw();
       }            
      },
     ai:{
           order:9,
           threaten:1.6,          
                },
            },            
            xinbiyue:{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
                player.draw(1+Math.floor(player.num("e")/2));
            },
            ai:{
                    threaten:1.3,
                },
            },
            xinhujia:{
                audio:3,
                unique:true,
                zhuSkill:true,
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                if(event.responded) return false;
                if(player.storage.xinhujiaing) return false;
                if(!player.hasZhuSkill('xinhujia')) return false;
                if(event.filterCard({name:'shan'})==false) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='wei';
                });
            },
                check:function (event,player){
                if(ai.get.damageEffect(player,event.player,player)>=0) return false;
                return true;
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    event.finish();
                }
                else if(event.current.group=='wei'){
                    if((event.current==game.me&&!_status.auto)||(
                        ai.get.attitude(event.current,player)>2)||
                        event.current.isOnline()){
                        player.storage.xinhujiaing=true;
                        var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张【闪】？',{name:'shan'});
                        next.set('ai',function(){
                            var event=_status.event;
                            return (ai.get.attitude(event.player,event.source)-2);
                        });
                        next.autochoose=lib.filter.autoRespondShan;
                        next.set('source',player);
                    }
                }
                "step 1"
                player.storage.xinhujiaing=false;
                if(result.bool){
                    event.finish();
                    event.current.draw();
                    trigger.result=result;
                    trigger.responded=true;
                    trigger.animate=false;
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
            },
            xinjianxiong:{
                audio:["jianxiong",2],
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
                if(event.source==player)
                return false;
                return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
            },
                content:function (){
                player.gain(trigger.cards);
                player.$gain2(trigger.cards);
            },
                mod:{
                    maxHandcard:function (player,num){
                var hs=player.get('h');
            for(var i=0;i<hs.length;i++){
                if(hs[i].name=='sha'||hs[i].name=='nanman'||hs[i].name=='wanjian'){
                    num++;
                }
            }
            return num;
        },
                    ai:{
                        maixie:true,
                        effect:{
                            target:function (card,player){
                        if(player.hasSkill('jueqing')) return [1,-1];
       if(player.hasSkill('jingu')) return [1,-1];
                        if(player.hasSkill('jiu')) return [1,-1];
                        if(get.tag(card,'damage')) return [1,0.5];
                    },
                        },
                        threaten:1.4,
                    },
                },
            },
            xinfankui:{
                group:["xinfankui1","xinfankui2"],
            },
            "xinfankui1":{
                audio:2,
                direct:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                return (event.player&&event.player.num('he')&&event.player!=player);
            },
                content:function (){
       "step 0"     
 event.num=trigger.num;    
        "step 1"
        var check;
                var i,num=game.countPlayer(function(current){
                    return current!=player&&current.num('he')&&ai.get.attitude(player,current)<=0;
                });
                check=(num>=1);    player.gainPlayerCard(get.prompt('xinfankui1',trigger.player),trigger.player,ai.get.buttonValue,'he').set('logSkill',['xinfankui1',trigger.player]);
     game.delay();
          "step 2"
                event.num--;
                if(event.num>0){
                    event.goto(1);
                }               
            },
                ai:{
                    expose:0.4,
                },
            },
            "xinfankui2":{
                audio:2,
                direct:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                return (event.source&&event.source.num('he')&&event.source!=player);
            },
                content:function (){
       "step 0"     
 event.num=trigger.num;    
        "step 1"
        var check;
                var i,num=game.countPlayer(function(current){
                    return current!=player&&current.num('he')&&ai.get.attitude(player,current)<=0;
                });
                check=(num>=1);    player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,ai.get.buttonValue,'he').set('logSkill',['fankui',trigger.source]);
     game.delay();
          "step 2"
    event.num--;
                if(event.num>0){
                    player.chooseBool('是否继续发动？');
                }
                else{
                    event.finish();
                }
                "step 3"
                if(result.bool){
                    event.goto(1);
                }
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
                        if(player.num('he')>1&&get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-1.5];
                            if(ai.get.attitude(target,player)<0) return [1,1];
                        }
                    },
                    },
                },
            },
            xinguicai:{
                audio:3,
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                return player.num('h')>0;
            },
                content:function (){
                "step 0"
                player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                get.translation(trigger.player.judging[0])+'，'+get.prompt('guicai')).set('ai',function(card){
                    var trigger=_status.event.getTrigger();
                    var player=_status.event.player;
                    var judging=_status.event.judging;
                    var result=trigger.judge(card)-trigger.judge(judging);
                    var attitude=ai.get.attitude(player,trigger.player);
                    if(attitude==0||result==0) return 0;
                    if(attitude>0){
                        return result-ai.get.value(card)/2;
                    }
                    else{
                        return -result-ai.get.value(card)/2;
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
                    player.logSkill('xinguicai');
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
            xinganglie:{
                audio:["ganglie",2],
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                return (event.source!=undefined);
            },
                check:function (event,player){
                return (ai.get.attitude(player,event.source)<=0);
            },
                content:function (){
                "step 0"
               event.num=trigger.num;
                "step 1"
                player.judge(function(card){
                    if(get.suit(card)=='heart') return -0.1;
                    return 2;
                })
                "step 2"
                if(result.judge<2){
       player.draw(trigger.num);
       event.finish();       
       return;   
                }   
trigger.source.chooseToDiscard(2*trigger.num).set('ai',function(card){
                    if(card.name=='tao') return -10;
                    if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                    return ai.get.unuseful(card)+2.5*(5-get.owner(card).hp);
                });
                "step 3"
                if(result.bool==false){
                    trigger.source.damage(trigger.num);
                }                               
            },
                ai:{
                    result:{
                        target:function (card,player,target){
                        if(player.hasSkill('jueqing')) return [1,-1];
                        if(get.tag(card,'damage')&&ai.get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                    },
                    },
                },
            },
            xintuxi:{
                audio:5,
                trigger:{
                    player:"phaseDrawBefore",
                },
                direct:true,
                content:function (){                             
                "step 0"
                event.num=2+Math.floor(player.num('e')/2);           
                "step 1"
                var check;
                var i,num=game.countPlayer(function(current){
                    return current!=player&&current.num('he')&&ai.get.attitude(player,current)<=0;
                });
                check=(num>=1&&player.num('he')>0);
                player.chooseTarget(get.prompt('xintuxi'),[1],function(card,player,target){
                    return target.num('he')>0&&player!=target;
                },function(target){
                    if(!_status.event.aicheck) return 0;
                    var att=ai.get.attitude(_status.event.player,target);
                    if(target.hasSkill('tuntian')) return att/10;
                    return 1-att;
                }).set('aicheck',check);
                "step 2"
                if(result.bool){
                    player.logSkill('xintuxi',result.targets);    
                    trigger.finish();
                               trigger.untrigger();                
                    for(var i=0;i<result.targets.length;i++){
                        var card=result.targets[i].get('he').randomGet();
                        player.gain(card,result.targets[i]).set('delay',false);
                        result.targets[i].$giveAuto(card,player);
                    }
                 game.delay(0.75);                                   
                }
                else{
                    event.finish();
                }
                "step 3"
                game.delay(0.5);
                event.num--;
                if(event.num>0){
                     event.goto(1);
                }
                else{
                    event.finish();
                }       
            },
                ai:{
                    threaten:1.9,
                    expose:0.3,
                    noe:true,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                },
            },
            new_luoyi:{
                audio:["luoyi",2],
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
                if(player.num('h')<2) return false;
                if(!player.hasSha()) return false;
                return game.hasPlayer(function(current){
                    return ai.get.attitude(player,current)<0&&player.canUse('sha',current);
                });
            },
                content:function (){        
   player.addTempSkill('new_luoyi2',{player:'phaseBefore'});
                trigger.num--;
               },
            },
            new_luoyi2:{
            group:'new_luoyi3',
                audio:1,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
            },
                forced:true,
                content:function (){
                trigger.num++;                
            },
            ai:{
                    threaten:1.4,
                },
            },
            new_luoyi3:{
                audio:1,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
            },
                forced:true,
                content:function (){                        
                player.draw(trigger.num);
              }
            },           
            new_guose:{						
			audio:["guose",2],
			enable:'phaseUse',	
			discard:false,
			filter:function(event,player){
				return player.countCards('he',{color:'red'})>0;
			},
			prepare:'throw',
			position:'he',    
			filterCard:{color:'red'},
			filterTarget:function(card,player,target){
				if(player==target) return false;
				if(target.hasJudge('lebu')) return false;
				return lib.filter.targetEnabled({name:'lebu'},player,target);
			},
			check:function(card){
				return 9-ai.get.value(card);
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
				player.gainPlayerCard(true,target,'h');
			},
			ai:{
       threaten:1.6,
				result:{
					target:function(player,target){        
						if(target.hasJudge('lebu')) return -ai.get.effect(target,{name:'lebu'},player,target);
						return ai.get.effect(target,{name:'lebu'},player,target);
					}
				},
				order:6.9,
			}
		},    
            new_jingqi:{
                audio:2,
                trigger:{
                    source:'damageBegin',player:'recoverBegin'
                },
                 forced:true,
                 unique:true,
                content:function (){
                trigger.num++;               
                },
            mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
              }
           }
        },            
       new_jielue:{
                audio:"tieji1",
                trigger:{                    
                    player:['phaseBegin','phaseEnd']
                },
                forced:true,
                unique:true,
                filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&game.players[i].num('he')) return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        var players=get.players(player);
        players.remove(player);
        event.players=players;
        "step 1"
        if(event.players.length){
            var current=event.players.shift();
            var hs=current.get('he')
            if(hs.length){
            game.delay(0.6);
                player.gain(hs.randomGet());
                current.$give(1,player);
            }
            event.redo();
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },                
            },
     ai:{   
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha') return [1,Infinity];
                if(card.name=='juedou') return [1,Infinity]; 
             }              
                 },
               },
             },
       },       
      translate:{
            newsp_machao:'★SP马超',           
            new_menghuo:"★孟获",
            new_pangde:"★庞德",
            new_wangyun:"★王允",
            qibing:"骑兵",
            dunpaibing:"盾牌兵",
            futoubing:"斧头兵",            
            new_zhangchunhua:"★张春华",            
            huangjin:"黄巾首领",
            new_lukang:"★陆抗",
            new_guanping:"★关平",
            new_guanyinping:"★关银屏",
            new_wangyi:"★王异",
            new_daqiaoxiaoqiao:"★大乔小乔",           
            tengjiabing:"藤甲兵",            
            new_mateng:"★马腾",
            new_taishici:"★太史慈",
            new_dianwei:"★典韦",
            new_zhangjiao:"★张角",
            new_yuanshu:"★袁术",
            new_gongsunzan:"★公孙瓒",
            new_zhurong:"★祝融",
            new_wutugu:"★兀突骨",
            new_yuanshao:"★袁绍",
            new_sunce:"★孙策",
            new_sunjian:"★孙坚",
            new_lusu:"★鲁肃",
            new_huangzhong:"★黄忠",
            new_xiahouyuan:"★夏侯渊",
            new_xiaoqiao:"★小乔",
            new_weiyan:"★魏延",
            new_xuhuang:"★徐晃",
            new_zhoutai:"★周泰",
            new_zuoci:"★左慈",            
            new_sunxiu:"★孙休",
            new_zhangxingcai:"★张星彩",
            new_dongzhuo:"★董卓",
            new_jiangwei:"★姜维",
            new_liushan:"★刘禅",
            new_zhanghe:"★张郃",
            new_dengai:"★邓艾",
            new_sunce:"★孙策",
            zhangzhao:"★张昭",
            new_caiwenji:"★蔡文姬",
            new_lingtong:"★凌统",
            shenjianshou:"神箭手",
            new_caoren:"★曹仁",
            new_caopi:"★曹丕",
            xhdxhy:"夏侯惇夏侯渊",            
            liuguanzhang:"桃园三英",
            dl:"貂蝉吕布",
            new_caocao:"★曹操",
            new_simayi:"★司马懿",
            new_xiahoudun:"★夏侯惇",
            new_zhangliao:"★张辽",
            new_xuchu:"★许褚",
            new_guojia:"★郭嘉",
            new_zhenji:"★甄姬",
            new_liubei:"★刘备",
            new_guanyu:"★关羽",
            new_zhangfei:"★张飞",
            new_zhugeliang:"★诸葛亮",
            new_zhaoyun:"★赵云",
            new_machao:"★马超",
            new_huangyueying:"★黄月英",
            new_sunquan:"★孙权",
            new_ganning:"★甘宁",
            new_lvmeng:"★吕蒙",
            new_huanggai:"★黄盖",
            new_zhouyu:"★周瑜",
            new_daqiao:"★大乔",
            new_luxun:"★陆逊",
            new_sunshangxiang:"★孙尚香",
            new_huatuo:"★华佗",
            new_lvbu:"★吕布",
            new_diaochan:"★貂蝉",            
            xiongnu:"匈奴",        
             
            manbing:"蛮兵",
            new_shensu:"神速",
            xinjiuchi:"酒池",
            xinroulin:"肉林",
            xinbenghuai:"崩坏",
            new_baonue:"暴虐",
            new_baonue2:"暴虐",
            feijiang:"武威",
            "feijiang2":"武威",
            xintiaoxin:"挑衅",            
            xinxiangle:"享乐",
            xinfangquan:"放权",
            xinruoyu:"若愚",
            xinqiaobian:"巧变",
            "xinqiaobian1":"巧变·判定",
            "xinqiaobian2":"巧变·摸牌",
            "xinqiaobian3":"巧变·出牌",
            "xinqiaobian4":"巧变·弃牌",
            xintuntian:"屯田",
            "xintuntian_bg":"田",
            xinzaoxian:"凿险",
            xinjixi:"急袭",
            new_yingzi:'英姿',
            new_yinghuns:'英魂',
            new_jiang:'激昂',
            new_hunzi:'魂姿',
            new_hunzi2:'魂姿',
          	 new_zhiba:'制霸',
          	 new_zhiba2:'制霸',
            new_zhijian:"直谏",
            new_guzheng:"固政",
            new_beige:"悲歌",
            xinduanchang:"断肠",
            xinsongwei:"颂威",
            xinxingshang:"行殇",
            shenshe:"神射",
            xinjushou:"坚守",
            jieyi:"结义",
            xinhujia:"护驾",
            xinjianxiong:"奸雄",
            xinfankui:"反馈",
            "xinfankui1":"反馈",
            "xinfankui2":"反馈",
            xinguicai:"鬼才",
            xinganglie:"刚烈",
            xintuxi:"突袭",
            new_luoyi:'裸衣',
            new_luoyi2:'裸衣',
            xintiandu:"天妒",
            xinyiji:"遗计",
            xinluoshen:"洛神",
            xinqingguo:"倾国",
            xinrende:"仁德",
            new_renwang:'仁望',
            xinjijiang:"激将",
            "xinjijiang1":"激将",
            "xinjijiang2":"激将",
            xinwusheng:"武圣",
            xinwusheng2:"武圣",
            "xinwusheng_sha":"武圣",
            "xinwusheng_draw":"武圣",
            new_paoxiao:'咆哮',
            xinguanxing:"观星",
            xinkongcheng:"空城",
            "xinkongcheng1":"空城",
            xinlongdan:"龙胆",
            "xinlongdan_draw":"龙胆",
            "xinlongdan2":"龙胆",
            new_mashu:'马术',
            xinfeiying:"飞影",
            new_tieji:'铁骑',
            xinjizhi:"集智",
            xinqicai:"奇才",
            xinzhiheng:"制衡",
            xinjiuyuan:"救援",
            new_qixi:'奇袭',
            new_qixi1:'奇袭【顺】',
            new_qixi2:'奇袭【拆】',

            xinkeji:"克己",
            xinkurou:"苦肉",
            xinyingzi:"英姿",
            fanjian:"反间",
            new_guose:'国色',
            new_liuli:'流离',
            xinqianxun:"谦逊",
            xinlianying:"连营",
            xinxiaoji:"枭姬",
            xinjieyin:"结姻",
            xinqingnang:"青囊",
            xinjijiu:"急救",
            xinjijiu1:"急救",
            xinjijiu2:"急救",            
            xinlijian:"离间",
            xinbiyue:"闭月",
            pileTop:"牌堆顶",
            pileBottom:"牌堆底",
            canshix:"残蚀",
            "canshix_info":"摸牌",
            xinduanliangx:"断粮",
            xinkuanggux:"狂骨",
            xinhaoshi:"好施",
            xin_luanji:"乱击",
            xin_luanji1:"乱击",
            xin_luanji2:"乱击",
            new_tengjia:'藤甲',
            new_tengjia1:'藤甲',
            new_tengjia2:'藤甲',
            mubing:"募兵",
            leishen:"雷神",
            xinguidaox:"鬼道",
            leidian:"雷电",       
           new_yinghun:'英魂',
           xin_yongsi:"庸肆",
           xin_yongsi1:"庸肆",
           xin_yongsi2:"庸肆",
           xinqiangxix:"强袭",
           new_tianyi:"天义",
           new_liegong:"烈弓",
           new_liegong1:"烈弓",
           new_liegong2:"烈弓",
           new_xiongyi:"雄异",
           new_huangtian:"黄天",
           new_huangtian2:'黄天',
           new_juejing:"绝境",
           xionghan:"凶悍",           
           new_xingwu:'星舞',
           new_zhenlie:"贞烈", 
           new_wuji:"武继",
           new_longyin:"龙吟",
           new_shenshi:"审势",
           new_jueqing:"绝情",         
           new_jueqing1:"绝情",
           new_jueqing2:"绝情",
           new_jueqing3:"绝情",
           new_jueqing4:"绝情",
           new_shangshi:"伤逝",           
           new_mengjin:"猛进",
           new_jiedao:"借刀",
           new_lianji:'连计',
           new_zaiqi:"再起",                      
           new_tianxiang:"天香",
           new_hongyan:"红颜",
           new_jingqi:'精骑',
           new_jielue:'劫掠',
           new_chongfeng:'冲锋',
           new_shichou:'誓仇',
           new_shichou_info:'你使用【杀】可以多选择至多X名角色为目标（X为你已经损失的体力值)。',
           new_chongfeng_info:'锁定技，准备阶段，你执行一个额外的出牌阶段。',                             
           xionghan_info:"你使用【杀】或【决斗】造成的伤害+1。",                      
           new_tianxiang_info:'当你即将受到伤害时，你可以弃置一张红桃牌将伤害转移给任意一名其他角色，然后你摸一张牌，并令该角色摸X张牌，X为其已损失体力值',
    		    new_hongyan_info:'锁定技，你的♠和♦牌均视为♥',           
           new_zaiqi_info:'摸牌阶段，若你已受伤，你可以改为展示牌堆顶的X张牌，X为你已损失的体力值+你装备区牌数的一半且向上取整，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。',
		       new_lianji_info:'出牌阶段限一次，你可以选择一张手牌并指定两名角色进行拼点，拼点赢的角色获得此牌，并对没赢的角色造成一点伤害；锁定技，你使用的非延时类锦囊牌不能被【无懈可击】响应。',
           new_jiedao_info:'你可以将一张♣牌当[借刀杀人]使用。',
           new_mengjin_info:'当你使用的【杀】被【闪】抵消时，你获得对方X张牌，X为你已损失的体力值，且至少为1；锁定技，你不能成为【乐不思蜀】的目标。',
           new_shangshi_info:'锁定技，当你的手牌数小于X时，你立即将手牌补至X张（X为你已损失的体力值且最多为3）',
           new_jueqing_info:'锁定技，你即将造成的伤害均视为失去体力；在你的回合，除你以外，只有处于濒死状态的角色才能使用【桃】。',
           new_shenshi_info:'锁定技，回合结束时，你须弃置所有手牌，然后将手牌数补至当前体力值，且不超过4。',
           new_longyin_info:'每当一名角色在其出牌阶段使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸1~2张牌',
           new_wuji_info:'结束阶段，若你于此回合内造成过3点或更多伤害，你加1点体力上限并回复1点体力，然后从场上、牌堆或弃牌堆中获得【青龙偃月刀】',          
		       new_zhenlie_info:'每当你成为其他角色的卡牌的目标时，你可以流失一点体力取消之，然后获得对方一张牌',         
        		new_xingwu_info:'弃牌阶段开始时，你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上：若你有至少三张“星舞”牌，你移去“星舞”牌并选择一名其他角色，该角色受到3点伤害并弃置其所有牌，若其武将牌正面朝上则将其武将牌翻面。',           
           new_huangtian_info:'主公技，群雄角色可在他们各自的回合里给你一张♠或【闪电】。',
           new_xiongyi_info:'限定技，出牌阶段，你可以指定至多三名角色与你各摸三张牌，然后你增加一点体力上限并获得技能【猛进】；若你指定的角色数不超过2，你回复1点体力。',
             xinqiangxix_info:'出牌阶段，你可以自减一点体力或弃一张武器牌(若此时你体力值为1，则无需自减体力)，然后你对你攻击范围内的一名角色，若其体力值不大于你，你弃置其装备区一张牌，并对其造成一点伤害；若其体力值大于你，你对其造成两点伤害，每回合限一次。',
	          	new_tianyi_info:'出牌阶段，你可以与一名其他角色拼点，若你赢，你获得以下技能直到回合结束：你使用【杀】时无距离限制；可额外使用一张【杀】；使用【杀】时可额外指定两个目标，若你没赢，你摸一张牌，你不能使用【杀】直到回合结束。每阶段限一次。',
		        new_liegong_info:'你的【杀】可选择手牌数不小于你的角色为目标，当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果，1、若目标的手牌数大于你的体力值，或其体力值低于2，此【杀】不可被【闪】响应，2、其装备区里的牌数大于你，此【杀】伤害*2。',
           xin_yongsi_info:'锁定技，摸牌阶段，你额外摸X张牌，X为场上现存势力数。弃牌阶段，你至少须弃置等同于场上现存势力数的手牌（不足则全弃）。',
          leidian_info:"出牌阶段，你可以将一张♠花色的牌当【闪电】置于武将牌上。",
	         	xinguidaox_info:'任意一名角色的判定生效前，你可以打出一张牌替换之。',
            leishen:'雷神',
		        leishen_info:'锁定技，雷属性伤害对你无效，你是任何雷属性伤害造成的来源。',
            mubing_info:"锁定技，你的回合外，其他角色的装备牌从装备区失去时，若你装备区没有该类别装备牌，则你可以获得之。",
	          	new_tengjia_info:'锁定技，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。你每次受到火焰伤害时，该伤害+1。',
            manbing_info:"出牌阶段，你可以将一张装备牌当【南蛮入侵】使用。",
            xin_luanji_info:'出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用，每阶段限三次；锁定技，当你发动此技能对一名角色造成伤害时，你可令其进行一次判定，若判定结果为♥或♦，你摸一张牌，否则该角色摸一张牌。',
            new_shensu_info:"锁定技，当你使用一张非转化的【杀】指定目标且结算后，视为你对其再使用一张【杀】。",
            xinhaoshi_info:'摸牌阶段，你可以额外摸2+X张牌，X为等于你装备区牌数量的一半且向下取整，若此时你的手牌数多于6张，你必须将一半(向下取整)的手牌交给场上除你外手牌数最少的一名角色。',           
		       new_yinghun_info:'准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值+装备区牌数量的一半(向上取整)，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限)。',
            xinkuanggux_info:'锁定技，当你对一名角色造成1点伤害后，若你已受伤，则你回复1点体力，否则你摸1张牌；你使用【杀】的次数上限+X，当你计算与其他角色的距离时，始终-X，X为你已损失的体力值。',
            xinduanliangx_info:'其他角色从牌堆摸牌不少于两张时，你可以令其少摸一张牌。',
            xinbuqu:"不屈",
            "xinbuqu_info":"锁定技，当你处于濒死状态时，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌不为点数大于7的♣，则你回复至1体力。否则将此牌置入弃牌堆；只要你的武将牌上有牌，你的手牌上限便与这些牌数量相等。",
            xinfenji:"奋击",
            "xinfenji_info":"每当一名角色的牌于回合外被弃置时，你可以受到一点伤害，然后该角色摸两张牌。",
            qimen:"修行",
            "qimen_info":"锁定技，每当受到伤害或流失体力时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外）。",
             dunjia:"六甲",
            "dunjia_info":"锁定技，你每次受到伤害时，最多承受1点伤害（防止多余的伤害)",            
            xinyanzhu:"宴诛",
            "xinyanzhu_info":"出牌阶段限一次，你可以令一名有牌的其他角色弃置一张牌。",
            xinxingxue:"兴学",
            xinxingxue_info:"结束阶段开始时，你可以令1~3名角色依次摸两张牌并将两张牌置于牌堆顶。",
            xinzhaofu:"诏缚",
            xinzhaofu_info:"主公技，锁定技，其他吴国势力角色杀死目标后，你增加一点体力上限。",
            xinshenxian:"甚贤",
            "xinshenxian_info":"每名其他角色的回合限一次，当有其他角色因弃置而失去牌时，其中每有一张基本牌，你可以摸一张牌。",             
            "xinjiuchi_info":"你可将你的任意一张♠或♣牌当【酒】使用。",
            "xinroulin_info":"你对女性角色、女性角色对你使用【杀】时，都需连续使用两张【闪】才能抵消。",
            "xinbenghuai_info":"结束阶段，若你的体力不是全场最少的(或之一)，你失去一点体力。",
            new_baonue_info:"主公技，其他群雄角色每造成一次伤害，可进行一次判定，若为♠或♣，你回复1点体力。",
            "xintiaoxin_info":"出牌阶段限一次，你可以指定一名你在其攻击范围内的其他角色，该角色需对你使用一张【杀】，否则你弃置其X张牌，X为其装备区牌的数量，且至少为1。",
            "xinxiangle_info":"锁定技，当其他玩家使用【杀】、【决斗】、【顺手牵羊】或【过河拆桥】指定你为目标时，需额外弃掉一张基本牌，否则此牌对你无效。",
            "xinfangquan_info":"你可跳过你的出牌阶段，若如此做，在回合结束时可弃一张手牌令一名其他角色进行一个额外的回合。",
            "xinruoyu_info":"主公技，觉醒技，准备阶段，若你的体力是全场最少的(或之一)，你须增加1点体力上限，回复1点体力，并永久获得技能“激将”。",
            "xinqiaobian_info":"你可以弃一张手牌来跳过自己的一个阶段(回合开始和结束阶段除外);若以此法跳过摸牌阶段,你可以从其他至多两名角色手里各抽取一张牌;若以此法跳过出牌阶段,你可以将场上的一张牌移动到另一个合理的位置。",
            "xintuntian_info":"每次当你于回合外失去牌或受到伤害时，可以进行一次判定，若结果为♥你获得之，将非♥结果的判定牌置于你的武将牌上，称为“田”，每有一张田，你的进攻距离+1。",
            "xinzaoxian_info":"觉醒技，准备阶段，若田的数量达到3张或更多，你须减1点体力上限，并永久获得技能“急袭”。",
            "xinjixi_info":"出牌阶段，你可以把任意一张田当【顺手牵羊】使用。",       
              new_jiang_info:'锁定技，你使用【决斗】或红色【杀】时，或当你成为【决斗】或红色【杀】的目标时，你摸一张牌；你的【决斗】或红色【杀】造成伤害，或当你受到【决斗】或红色【杀】的伤害时，此伤害+1。',
    		      new_hunzi_info:'觉醒技，当你进入濒死状态时，你减1点体力上限，回复体力至1点，且直到你的下回合开始，防止你受到的所有非属性伤害，然后获得技能“英姿”和 “英魂”。',        
    		      new_zhiba_info:'主公技，其他吴势力角色的出牌阶段，可与你进行一次拼点，若该角色没赢，你可以获得双方拼点的牌；你的觉醒技发动后，你可以拒绝此拼点。每回合限一次。',
    		      new_yinghuns_info:'准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限）',
             new_yingzi_info:"摸牌阶段，你可以额外摸一张牌，你不能成为【乐不思蜀】的目标。",
            "new_zhijian_info":"出牌阶段，你可以将你手牌中的一张装备牌置于一名其他角色装备区里（不得替换原装备），然后摸1~2张牌。",
            "new_guzheng_info":"其他角色的弃牌阶段结束时，你可将其弃置的一张牌返回其手牌，然后获得其弃置的其它牌，锁定技，你的手牌上限+1。",
            new_beige_info:"一名角色每受到【杀】造成的一次伤害，你可以弃一张牌，并令其进行一次判定，判定结果为：♥该角色回复X点体力；♦︎该角色摸2×X张牌；♣伤害来源弃2×X张牌；♠若伤害来源武将牌正面朝上，则令其武将牌翻面，然后你摸X张牌，X为该角色受到伤害值。",
            "xinduanchang_info":"锁定技，杀死你的角色失去所有手牌、装备区和当前的所有技能直到游戏结束。",
            xinxuanfeng:"旋风",
            "xinxuanfeng_info":"当你失去装备区里的牌时，或于弃牌阶段弃置了一张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
            xinfangzhu:"放逐",
            "xinfangzhu_info":"你每受到一点伤害，可令除你以外的任一角色补X张牌，X为你已损失的体力值，然后该角色将其武将牌翻面。",
            "xinxingshang_info":"锁定技，一名其他角色死亡时，你可以从弃牌堆随机获得一张♥牌，然后立即获得死亡角色的所有牌。",
            "xinsongwei_info":"主公技，其他魏国势力角色的判定牌结果不为♦且生效后，可以让你摸一张牌。",
            "shenshe_info":"锁定技，你攻击范围无限，你视为拥有[麒麟弓]和[诸葛连弩]的技能。",
            "xinjushou_info":"结束阶段开始时，你可以摸2+X张牌，X为场上存活角色数与你已损失的体力值之和，且不超过9；然后将你的武将牌翻面。",            
            "feijiang_info":"主公技，群雄角色可在他们各自的回合里给你一张【杀】、【决斗】和【酒】。",
            "jieyi_info":"出牌阶段，你可以选择两名男性角色，令若其已受伤，则回复一点体力，否则摸一张牌，然后你获得技能“武圣”和“咆哮”直到回合结束，每阶段限一次。",
            "xinhujia_info":"主公技，当你需要使用(或打出)一张【闪】时，你可以发动护驾。所有魏势力角色按行动顺序依次选择是否打出一张【闪】“提供”给你(视为由你使用或打出)，直到有一名角色或没有任何角色决定如此做时为止，为你打出【闪】的该角色可以摸一张牌。",
            "xinjianxiong_info":"你可以立即获得其他角色造成伤害的牌；弃牌阶段内，你的【杀】、【南蛮入侵】和【万箭齐发】不计入手牌数。",
            "xinfankui_info":"每当你造成或受到一点伤害后，可以获得对方的一张牌。",
            "xinguicai_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之。",
            "xinganglie_info":"每当你受到一次伤害，可进行一次判定，若结果为♥，你摸X张牌，否则伤害来源须弃置X×2张手牌或受到来自你的X点伤害(X为你受到的伤害数值)。",
            "xintuxi_info":"摸牌阶段，你可以放弃摸牌，然后抽取一名其他角色一张牌，你至多可以发动2+X次，X等于你装备区牌的数量的一半且向下取整。",
            new_luoyi_info:'摸牌阶段，你可以少摸一张牌，若如此做，直到你的下一回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1，每当你为伤害来源的【杀】或【决斗】造成一点伤害，你摸一张牌。',
            "xinyiji_info":"每当你受到一点伤害，可以观看牌堆顶的2+X张牌(X为你装备区牌的数量的一半(向下取整))，可将其任意交给1~(2+X)名其他角色；你死亡时，可以令一名其他角色（杀死你的角色除外）体力上限+1，并令其回复1点体力。",
            "xinluoshen_info":"准备阶段，你可以进行一次判定，若不为♦则可以继续判定，直到出现红色。然后你获得所有不为♦的判定牌。",
            "xinqingguo_info":"你可以将一张♠花色的手牌当【闪】使用或打出。",
            "xinrende_info":"出牌阶段，你可以将任意手牌送给其他角色，若送出的手牌不少于两张，你回复1~2点体力；锁定技，回合准备阶段，若场上存活角色数不大于3，你失去技能【仁德】，然后获得技能【仁望】。",
            new_renwang_info:'回合结束阶段，若你已受伤，你可以获得任意一名其他角色的一张手牌。',
            "xinjijiang_info":"主公技，每当你需要使用或打出一张杀时，你可以令其他蜀势力角色选择是否打出一张杀（视为由你使用或打出），若有角色为你打出杀，你可以摸一张牌。",
            "xinwusheng_info":"你可以将一张♥或♦牌当【杀】使用，若如此做，你摸一张牌，然后获得【青龙偃月刀】的技能，直到你的下一回合开始。",
            new_paoxiao_info:'锁定技，出牌阶段，每当你使用一张【杀】时，你摸一张牌；出牌阶段，你可以使用任意数量的【杀】。',
            "xinguanxing_info":"准备阶段，你可以观看牌堆顶的x张牌，并将其以任意顺序置于牌堆项或牌堆底，x为存活角色个数，至少为3且不超过6。",
            "xinkongcheng_info":"锁定技，当你没有手牌时，不能成为任何不为【桃园结义】卡牌的目标。",
            "xinlongdan_info":"你可以将[杀]当[闪]，或[闪]当[杀]使用或打出，每当你发动技能“龙胆”时，可亮出牌堆顶的X张牌，X等于1加上你已损失的体力值的一半向下取整，且不超过2，然后你获得其中的基本牌并展示之。",
     
            new_tieji_info:'当你使用【杀】指定一名角色为目标后，你可以弃置该角色两张牌。',
            "xinjizhi_info":"每当你使用一张非转化的锦囊时，你可亮出牌堆顶的两张牌，然后获得其中的锦囊牌并展示之。",
           
            "xinzhiheng_info":"出牌阶段，你可以弃置1~3张♥或♦牌并摸等同于你弃置牌数两倍的牌，每阶段限一次。",
            "xinjiuyuan_info":"主公技，锁定技，其他吴势力角色对处于濒死状态的你使用【桃】回复的体力+2。",
            new_qixi_info:'你可以将一张♥或♦牌当【顺手牵羊】使用；♠或♣牌当【过河拆桥】使用；每阶段各限两次。',
            "xinkeji_info":"锁定技，若你在出牌阶段未使用过任何一张【杀】，则你摸一张牌并跳过弃牌阶段。",
            "xinkurou_info":"出牌阶段，你可以流失一点体力并摸3张牌。",
            "xinyingzi_info":"摸牌阶段，你可以额外摸一张牌，你的手牌上限+2+X，X等于你装备区牌的数量的一半且向上取整；你不能成为【兵粮寸断】的目标。",
            
            new_guose_info:'你可以将一张♥或♦牌当【乐不思蜀】使用，选定目标后，你获得该角色一张手牌。',
            new_liuli_info:'当你成为【杀】或【决斗】的目标时，可以弃置一张牌将其转移给你攻击范围内的一名其他角色，此角色不能是使用者。',
            "xinqianxun_info":"锁定技，你不能成为【火攻】、【顺手牵羊】和【乐不思蜀】的目标。",
            "xinlianying_info":"每当你手牌数量少于X张，可将手牌补至1+X张，X为你装备区里牌数的一半且向下取整。",
            "xinxiaoji_info":"每当你失去一张装备牌，可以摸2+X张牌，X为你装备区里牌数的一半且向上取整。",
            "xinjieyin_info":"出牌阶段，你可以弃置两张牌并选择1名已经受伤的男性角色，你与其各回复一点体力，若你未受伤，你可以摸一张牌，每阶段限一次。",
            "xinqingnang_info":"出牌阶段，你可以选择一名已受伤角色令其弃置一张牌，然后回复一点体力，每阶段限一次。",
            xinjijiu_info:"你可以将一张♥牌当【桃】使用；你的回合外，一名角色进入濒死时，你可以令该角色有50%几率回复至1点体力值，否则你摸一张牌。",          
            "xinbiyue_info":"结束阶段，你可以摸1+X张牌，X为你装备区牌的数量的一半且向下取整。", 
             new_jingqi_info:'锁定技，你造成的伤害+1，回复的体力+1；当你计算与其他角色的距离时，始终-1。',             
             new_jielue_info:'锁定技，回合开始和结束阶段，你抽取每名其他角色的一张牌；你的手牌上限不会因体力值的减少而减少。',         
       },
            },'新版武将')
        }
    // ---------------------------------------英雄联盟------------------------------------------//
		if(config.yxlm){
			game.addCharacterPack({
				character:{
               smss:["male",['qun','shu','wei','wu'].randomGet(),4,['smts',"smjh"]],
               ltpx:["male",['qun','shu','wei','wu'].randomGet(),4,['ltfb',"ltgg"]],
               xhsgz:["male",['qun','shu','wei','wu'].randomGet(),4,['xhqy',"xhxx"]],
               wsjj:["female",['qun','shu','wei','wu'].randomGet(),4,['wspk','wslc']],
               xexfs:["male",['qun','shu','wei','wu'].randomGet(),3,['xecf',"xejs","xebl"]],
               ghnl:["female",['qun','shu','wei','wu'].randomGet(),3,["sf","sg"]],
               ayls:["female",['qun','shu','wei','wu'].randomGet(),3,["lieshou","sn"]],
               zxzz:["female",['qun','shu','wei','wu'].randomGet(),3,["hf","js","gz"]],
               ylzz:["male",['qun','shu','wei','wu'].randomGet(),4,["mh","ys"]],



               mrsz:["male",['qun','shu','wei','wu'].randomGet(),3,["kj","jq"]],
               nksszs:["male",['qun','shu','wei','wu'].randomGet(),4,["xuenu","duantou"]],
               ryjs:["male",['qun','shu','wei','wu'].randomGet(),4,["hgyhd","ymdj"]],
               daofengyizhi:["female",['qun','shu','wei','wu'].randomGet(),4,["ftzt","jhdj"]],
               fangzhuzhiren:["female",['qun','shu','wei','wu'].randomGet(),4,["zhewu","zhufeng"]],
            mengduoyisheng:["male",['qun','shu','wei','wu'].randomGet(),4,["new_jisu","new_bingdu","new_beishui"],[]],
              katelinna:['female',['qun','shu','wei','wu'].randomGet(),3,['new_tanlan','new_buxiang','new_lianhua']],
              pichengnvjing:['female',['qun','shu','wei','wu'].randomGet(),3,['chuchang','baotou','heping','new_juji']],
            shangjinlieren:["female",['qun','shu','wei','wu'].randomGet(),3,["liuxing","shangjin","shuangdiao"]],
            debangzongguan:["male",['qun','shu','wei','wu'].randomGet(),4,["kuangzhan","wuwei"]],
            duoluotianshi:["female",['qun','shu','wei','wu'].randomGet(),4,["jingu","jiqu"]],
            hanbingsheshou:["female",['qun','shu','wei','wu'].randomGet(),3,["zhuanzhu","bingjianx"]],            
            jiansheng:["male",['qun','shu','wei','wu'].randomGet(),4,["zhiming"],[]],
            emolieshou:["male",['qun','shu','wei','wu'].randomGet(),4,["shanbi"],[]],
            dema:["male",['qun','shu','wei','wu'].randomGet(),4,["chenmox","zhengyi"],[]],
            jifengjianhao:["male",['qun','shu','wei','wu'].randomGet(),4,["jifengx","fengqiang","fengzhan"],[]],
            wujijiansheng:["male",['qun','shu','wei','wu'].randomGet(),3,["jiandao","lianpo"],[]],
            manzuzhiwang:["male",['qun','shu','wei','wu'].randomGet(),4,["baonu","baoji","nuqi"],[]],
            xunjiechihou:["male",['qun','shu','wei','wu'].randomGet(),3,["zhimang","xunjie"],[]],
     },   
       perfectPair:{
       fangzhuzhiren:['jifengjianhao','daofengyizhi'],
       jiansheng:['emolieshou'],
       jifengjianhao:['ylzz'],
       zxzz:['hanbingsheshou','shangjinlieren'],
       wujijiansheng:['manzuzhiiwang'],
       hanbingsheshou:['manzuzhiiwang'],
       dema:['fangzhuzhiren','ghnl','katelinna'],
       duoluotianshi:['shangjinlieren'],
       manzuzhiiwang:['dema','wujijiansheng','debangzonghuan'],
       xunjiechihou:['dema'],
      },
       characterIntro:{
        smss:'内瑟斯是一位庄严威武的犬首人身飞升者，在古代恕瑞玛帝国时期，是被沙漠子民敬仰为半神的英雄人物。他的睿智中透着凶狠，作为知识的守护者和无双的战术家，用智慧引导着古代恕瑞玛帝国连续数百年走向繁荣伟大。帝国陨落以后，他开始了自我放逐，成为了人们口中缥缈的传说。现在，恕瑞玛古城已经再一次崛起，他也随之回归，并决心绝不让它再度陨落。',
        ltpx:'弗雷卓德的无情北壁是熊人族的家园，这个凶猛好战的种族在这块冻土之上已经经历了上千年的洗礼。他们的首领是一位暴怒的敌手，他可以召唤闪电的力量击打敌人，以使其畏惧：他就是沃利贝尔，他既是个战士也是个谜团，致力于守护上古传统和部族里的战士精神。为了寻求智慧，沃利贝尔涉险攀登熊人族的神圣之峰，那是一座永远笼罩着闪电漩涡的山峰。传说风暴之眼将揭示预言，暴风雨则会标记部族中下一位伟大的领袖。在沃利贝尔登上山顶后，他被一道不寻常的闪电击中。当这位萨满苏醒时，他预见了一个可怕的景象：弗雷尔卓德被绝对的黑暗吞噬殆尽。沃利贝尔看见了触不及防而自鸣得意的熊人族被一个可怕的寒冰生物所屠杀。片刻间，他意识到如果不为战争做好准备，他们将被灭族。',
        wsjj:'菲奥娜是瓦洛兰的决斗家中最为可怕的一个，她的名声来自她唐突的举止和精明的头脑，以及与这些相称的对蓝钢刺剑的挥舞速度。她出生在德玛西亚王国里的劳伦特家族，并在一次几乎要毁掉家族的丑闻后，从她父亲那里夺过了家族的控制权。劳伦特家族的声望已经一落千丈，但菲奥娜在竭尽全力地恢复家族的荣耀，并让家族重新回到德玛西亚的名门望族之列。',
        mengduoyisheng:'黎明时分，救济院里的所有人都被“治愈”了，除了蒙多自己。他从自己刀下鬼的身上扒下一件白大褂套在自己身上，壮硕的肌肉将白大褂撑破。蒙多终于实现了自己的梦想。他成为了一名医生！作为一个源远流长的职业的新成员，他决定把自己的医学技术分享给全世界。他的使命现在刚刚开始。', 
       daofengyizhi:'艾欧尼亚发展出了符文之地最致命的强大武术——这不过是他们追求启迪的之一。刀刃的卓越风格实际上是引入外力后的稀有附属。里托大师是一名剑客，他几乎受邀担任过附近所有城邦的剑术教练。他的技艺是一门得到高度保护的秘密，但人们说他手上的剑会呼吸。但一种令符文之地最高超的医生也束手无策的神秘疾病突发而至，夺走了大师的生命。里托大师死后留下一双儿女，泽洛斯和艾瑞莉娅，此外还有一把真正的独门武器。泽洛斯成为了艾欧尼亚军队的一名队长，在诺克萨斯入侵前奉命调查来自德玛西亚的刺杀事件。艾瑞莉娅则一直守护着他们的家园，等待泽洛斯归来，一直到诺克萨斯发动入侵。',
       zxzz:'索拉卡，艾欧尼亚的众星之子，是同族的第一人。当人们蜂涌着去开发瓦洛兰丰富的魔法能量时，她却首开先河来探索宇宙自身的魔法能量——宇宙仿佛一个自成体系的天体汪洋，符文之地就遨游于其他相似天体之中。虽然符文之地的魔法师大多局限于符文的有限力量（尽管这些力量异常巨大）中，但总有一些人会另辟蹊径，探索魔法的更深处。索拉卡的探索超越了符文之地的天空，令她能召唤宇宙星辰的力量，而她的进化也远在她的族人之上。这股力量令她发生了不可思议的改变——她也因此以"众星之子"闻名于世。',
       mrsz:'20多年来，费德提克独自站在战争学院最东边的召唤室。只有他双眼中发出的燃烧般的绿色火焰才能刺穿他那黑暗、布满尘埃的家。末日使者就是在这里无声地守者。联盟中所有的召唤师都知道他滥用权力，胡作非为的警世故事。几十年前，有个来自祖安的强大符文魔法师，他的名字叫艾斯特凡。第五次符文战争后，他成为联盟第一召唤师。受到旧魔法的毒害太深，艾斯特凡越来越偏离联盟的法则。在最后的比赛中，他终于无法自我控制，将自己封闭在最东边的召唤室，并开始念仪式最禁止的咒语——超二维的召唤。',
       ghnl:'拉克丝出生于享有声望的冕卫家族，在德玛西亚军队模范家庭的氛围里，她注定是不平凡的。她是家里唯一的女孩，接受了高等教育，参加只有名门望族才能参加的奢华宴会。伴随着拉克丝的成长，她独特的天赋渐渐崭露头角。她喜欢恶作剧，让人家对实际上并不存在的东西信以为真，她还能隐藏在显眼的地方。不知为何，再神秘的魔法技能，她只要看过一次，就能够依葫芦画瓢反转施放。拉克丝被誉为天才，她的一举一动都牵动着德玛西亚政府、军队和人民的心。',
       ayls:'这个世界并不总像人们想象的那么美好。符��陆上依旧有许多人通过最黑暗的方式修习魔法，被那些暗流涌动的黑暗力量腐蚀。肖娜-薇恩深知这一点。身为德玛西亚核心精英家庭的掌上明珠，她的父亲一直让她相信，她一直处于警卫队的护卫下。年轻且天真的她，以为她生活在一个安全的世界。直到那一夜，一个扭曲的女巫盯上了她的父亲。这个毒妇打倒了她父亲的贴身守卫，在杀死她的家人之前毫无人性地折磨了他们。年轻的薇恩躲了起来直到女巫离去才逃过一劫，她亲人们的惨叫充斥着她的脑海，久久难平。从此复仇的怒火在她心中燃烧，从未熄灭。',
       xhsgz:'在诺克萨斯和暴风平原间的群山中有座寺庙，寺庙里藏着许多骇人听闻的巫术秘密。寺庙附近尸横遍野，这些尸体都属于那些误闯寺庙而被吸干血的人。无血干尸勾起了年轻的弗拉基米尔的好奇心。从诺克萨斯逃跑期间，他艰苦跋涉，穿过一座又一座的大山。一天前，十几岁的弗拉基米尔残暴地杀死了两个和他年纪相仿的男孩，纯粹因为他很享受观看鲜血喷涌而出的快感。弗拉基米尔很快就意识到自己杀戮的欲望再也无法抑制，如果继续留在诺克萨斯，他早晚会因此而受到处罚，因此，他毫不犹豫地离开了城邦，前往南方。',
       nksszs:'提到诺克萨斯力量的象征，没有人能比德莱厄斯这名城邦中最让人畏惧和久经沙场的战士更加适合了。自幼失去双亲的德莱厄斯，为了让他自己和弟弟活下去，不得不进行战斗。到他加入军队的时候，他已经练就出了如同身经百战的老练士兵一般的力气和纪律性。德莱厄斯决心的首次真正考验，出现在一次对抗德玛西亚的决定性战斗中。那里的诺克萨斯军队疲惫不堪，且数量处于劣势。德莱厄斯的长官下令，让他的部队撤退，但德莱厄斯拒绝接受如此怯懦的行为。德莱厄斯脱离编队，大步迈向长官，并用手中的巨斧削掉了这个胆小鬼的脑袋。既惶恐不已又备受鼓舞的士兵们跟着德莱厄斯冲进了战斗，并用难以置信的力气与热情进行战斗。在一场艰苦漫长的战斗之后，他们终于迎来了胜利的曙光。',
       ryjs:'有一个十分和谐的地方，那里万物归一。熔岩是所有创造物的精华，这里的居民都是特别的组成部分。这个地方对称、完全稳定，因此极其美丽。在这里居住的熔岩生物都清楚自己的身份，并全力履行自己的责任。他们像群居生物或蜂巢那样工作和生活。墨菲特总是努力付出自己的全部潜能，作为整体的一部分。他是一个杰出的生物，履行着维持族人完美秩序构想的任务。',
       ylzz:'劫是200年以来第一个冲破古老、禁忌之路的忍者。他违抗了他的宗族和导师，抛弃了束缚他一生的均衡与信条。劫现在为那些拥抱影之奥义的人提供力量，并屠杀那些墨守成规的人。',
       shangjinlieren:"“风险越大，赏金越多。”无论是美貌颜值还是危险指数，鲜有人能在任何一方面与厄运小姐媲美。作为比尔吉沃特最负盛名的赏金猎人，她的传奇故事建立在无数密布着弹孔的尸体和被捕获的混混们之上。只要比尔吉沃特那臭烘烘的码头和拾荒者棚屋中回响起她标志性的双枪，赏金告示板上的悬赏令就又少了一张。",
            manzuzhiwang:"拜他的桀骜不羁和怒气所赐，泰达米尔在冰原上披荆斩棘，与弗雷尔卓德上杰出的战士较量以精通战斗的艺术。这个暴怒的野蛮人想向那个摧毁他部族的人复仇以及击败所有阻挡他和他进行最后复仇的人们。为了生存他与苦难争斗，不惜在弗雷尔卓德被冻伤，年轻的泰达米尔和他的子民为了这片土地稀有的资源与其他部族交战。一场这样的战斗永远的改变了他的生活。",
            xunjiechihou:"在班德尔城，提莫是流传于兄弟姐妹中的一则传奇。就约德尔人而言，提莫有点与众不同。虽然他喜欢与其他约德尔人结伴，但他也常常坚持要单枪匹马地执行保卫班德尔城的任务。他为人真诚，性情温和，然而一旦进入战斗，提莫就像变了个人似的，在巡逻时会果断了结那些敌人的性命。",
            debangzongguan:"每当德玛西亚的国王嘉文三世在皇宫顶部那熠熠生辉的大理石阳台上发表他那激情澎湃的演讲之时，赵信都会侍立于他的身旁。人称“德邦总管”的赵信是光盾王朝的私人管家。他那高深莫测且不苟言谈的守夜值勤，使得关于他的“隐秘生活”与出身来源的推测层出不穷。",
            xexfs:"大多数人不会将约德尔人与令人惧怕的形象联想在一起。约德尔人这个平易近人的迷你民族，虽说勇猛，但通常人们或多或少会认为他们是快乐的种族。他们那高八度的声音，以及天生的可爱外形，会激发出体型较大的民族内心深处的某种保护本能，或者至少会让他们的脑海中浮现出小孩扮大人的画面。然而，约德尔人时不时会变得很邪恶，即使个子不高，也能让其他人心底生出不寒而栗的感觉。维迦便是这样一位扭曲的约德尔人。",
            wujijiansheng:"通过远古的无极之道，易大师调节身体并磨练心智，直至身心合一。尽管他将暴力作为不得已的选择手段，他优雅迅速的舞剑速度却能让他快速解决问题。作为无极之道最后的门徒，易大师将生命奉献于找寻可以继承这份财富的弟子。事实上在易精通无极之道前，他便已被视为这个神秘之道最具天赋的继承者之一。",
            hanbingsheshou:"伴随着每一发弓箭从她的上古寒冰弓上发射，艾希证明了她是一位神射手。她小心的选择每一个目标，等待正确的时机，射出精准有力的箭矢。她抱着同样的愿景和专注于她的目标，为了寻求弗雷尔卓德部族的统一并将他们打造成一个强大的国家。还是孩子的时候，艾希便是一个梦想家。她对祖先们巨大且被废弃的城堡感到惊讶，她会花许多时间在篝火旁聆听弗雷尔卓德虚构的英雄故事。她最喜欢阿瓦罗萨的传说，声名显赫的女王曾经创下统一弗雷尔卓德的壮举。",
            dema:"在瓦洛兰大陆，虽然人们对德玛西亚的军纪存在争议，但是相同点是所有人都尊敬它。平民和士兵都严格遵守着“零容忍”的准则。这意味着在战斗中徳玛西亚军队永远不会找借口托辞、逃跑、或者投降。至高的军队领袖们强力地执行着这些原则。盖伦——拥有“德玛西亚之力”头衔的英勇勇士，就是军队的模范。成千上万的英雄在德玛西亚和诺克萨斯(德玛西亚的敌对阵营）战场上浴血奋战，战死沙场。",
            emolieshou:"恶魔猎手是被暗夜精灵族社会排斥的黑暗战士。他们在很久以前就和黑暗力量立下契约，要用自己可怕的力量与混乱的力量对抗到底。他们弄瞎了自己的双眼，从而获得了可以迅速发现恶魔的能力。他们手持魔力强大的武器，并以此猎杀恶魔。虽然恶魔猎手可以算得上是暗夜精灵族中最强大的战士，但他无私的牺牲却不被自己的同胞理解。",
       jifengjianhao:"亚索是一个百折不屈的男人，还是一名身手敏捷的剑客，能够运用风的力量来斩杀敌人。这位曾经春风得意的战士因为诬告而身败名裂，并且被迫卷入了一场令人绝望的生存之战。即使整个世界都已与他为敌，他也要竭尽所能地去将罪恶绳之以法，并恢复自身的名誉。",
            katelinna:'卡特琳娜生于诺克萨斯的权贵之家，从小就接受匕首的训练。那位火爆任性的小姑娘已经长大，美丽而致命。对家族的责任和忠诚缓和了火爆的性格。事实早已证明，在自我与责任之间出现分歧时，卡特琳娜火爆的激情就会变成一把双刃剑，伤人伤己。作为诺克萨斯将军的女儿，卡特琳娜生性自由奔放，年幼的卡特琳娜在各方面都得到了最好的照顾。在战斗中，她发现自己被刀刃所吸引，而她的天赋也展现出来。卡特琳娜在诺克萨斯军队里接受成为最致命刺客的训练，让整个家族都为之骄傲。很快，导师就认为卡特琳娜已经可以接受试炼，前去刺杀一名出色的德玛西亚士兵。',
             pichengnvjing:'凯特琳在14岁的时候就表现出其侦查追踪的天赋。那一次，凯特琳的父亲在回家的路上遭到袭击并被抢劫，她当天晚上就带着父亲的步枪偷偷溜出家门，根据犯罪现场的蛛丝马迹追踪到抢劫者。一开始，她的父母极力反对其如此危险的爱好，但凯特琳已深陷其中，无法自拔。为了尽全力保护女儿，凯特琳的妈妈利用自己的专长，开始为她的侦查量身打造出高科技装备。',
            fangzhuzhiren:"诺克萨斯，每一位居民都可以平步青云，而无论其种族、男女、贵贱——实力，就是一切。锐雯曾怀着对此理想的坚定信仰，不懈地追求着远大的前程。她曾是一位初露锋芒的士兵，那时的她能够挥动一把与自己差不多重的长剑。她曾是一位无情高效的勇士，但是她真正的实力潜藏在她的信念之中。她总是毫不迟疑地投入战斗：不因道德而犹豫，不因死亡而恐惧。锐雯逐渐成为了同辈之中的领头人物，诺克萨斯精神的典型代表。",
            duoluotianshi:"莫甘娜就是那个与专制统治者抗战的人，因此她被称为“堕落”。莫甘娜不是无辜的，她探究秘法来获得禁忌力量，最终成为黑暗魔法强大的主人。这都是为了打败敌方将军——她的姐姐凯尔。",
        jiansheng:"虽然他们数量稀少，但剑圣一直都是兽族部落中的精英战士。这些拥有精湛剑术的剑圣曾经是火刃氏族的成员，后来火刃氏族被自身邪恶的力量摧毁了。在火刃氏族四分五裂之后，剑圣身背氏族的图腾，为了拯救他们自己和氏族的兄弟们奋斗。在萨尔的领导下，这些剑圣又一次加入兽族部落，担任他们年轻领导人的贴身侍卫。虽然剑圣是潜行和欺诈的高手，但他们看重个人的荣誉胜过一切。",
       },
       skill:{
        smts:{
        group:'smts1',       
				trigger:{source:'damageBegin'},
       forced:true,			
				audio:false,
       unique:true,
				filter:function(event){
					return !event.nature&&event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
				content:function(){
       trigger.num+=Math.ceil(player.storage.smjh/2);        
      },
      ai:{
					effect:{
						player:function(card,player,target){
							if(card.name=='sha'&&!card.nature) return [1,2];
						}
					}
				}
			},
        smts1:{        
				trigger:{source:'damageEnd'},
       forced:true,	
				audio:5,
       unique:true,
       priority:-12,
				filter:function(event,player){
					return player.hp<player.maxHp&&!event.nature&&event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
				content:function(){
       player.recover(trigger.num);
       }        
      },           
      smjh:{
				trigger:{source:'damageEnd'},
				forced:true,
				mark:true,
				audio:6,
       unique:true,
				filter:function(event){
					return !event.nature&&event.num>0&&event.card&&event.card.name=='sha';
				},
				init:function(player){
					player.storage.smjh=0;
					game.addVideo('storage',player,['smjh',player.storage.smjh]);
				},
				content:function(){
					player.storage.smjh++;
					game.addVideo('storage',player,['smjh',player.storage.smjh]);
				},
       marktext:"魂",
				intro:{
					content:'每一枚标记永久增加非属性【杀】的一点伤害'
				
			},
      ai:{                    
                    effect:{
                        threaten:function(player,target){
         if(player.storage.smjh) return player.storage.smjh*0.55+1;        					
			         	},
             },
            },
          },
      ltgg:{
                mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
              }
           }
        },
      ltfb:{      
      audio:6,
			trigger:{player:'dying'},     
     forced:true,
     unique:true,
     priority:17,        
			content:function(){             
       player.recover();
        }
      },
      xhqy:{      
      audio:8,
			trigger:{source:'damageEnd'},     
     forced:true,
     unique:true,
     filter:function(event,player){
     return event.nature;
      },        
			content:function(){             
       player.recover();
      var rp=trigger.player.get('he',{color:'red'})
            if(rp.length){
            game.delay(0.5);
                player.gain(rp.randomGet());
                trigger.player.$give(1,player);          
            }        
         }      
      },
      xhxx:{      
    	trigger:{source:'damageBefore'},
			forced:true,
			audio:8,
     priority:16,
     filter:function(event,player){
     return !event.nature;
      },		
			content:function(){
trigger.nature=['fire','thunder','poison'].randomGet();
			},
		},
       wspk:{
     audio:11,
			trigger:{player:'shaAfter'},
			forced:true,
      priority:-10,
      unique:true,
      filter:function (event,player){
        return Math.random()<=0.35;
    },
			content:function(){
        'step 0'
      player.addSkill('wspk2');
      game.delay(1.5);
 player.useCard({name:'juedou'},trigger.target,false);   
       'step 1'
     player.recover();   
     player.removeSkill('wspk2');     
 },
    ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				},
       threaten:1.6
			}
		}, 
      wspk2:{
      ai:{
      playernowuxie:true,
        },
       },  
      wslc:{
      audio:8,
      trigger:{player:'shaBefore'},
				filter:function(event,player){
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
				content:function(){	}, 
      mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+1;
                },
              },
           },
       xebl:{
				trigger:{source:'damageBegin'},				
				audio:5,
       unique:true,
       priority:-2,
				filter:function(event,player){
					return event.player.hp<=event.maxHp*0.33&&event.card&&(event.card.name=='sha'&&event.nature)&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';   
				},
        check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;

            },
        logTarget:"target",		
				content:function(){
       trigger.num=trigger.num*2;
        }
      },
      xejs:{
				trigger:{source:'damageBegin'},
				forced:true,				
				audio:7,
       unique:true,
				filter:function(event){
					return event.nature&&event.card&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
				content:function(){
       trigger.num+=player.storage.xecf;        
      },
      ai:{
					effect:{
						player:function(card,player,target){
							if(get.tag(card,'fireDamage')||get.tag(card,'thunderDamage')) return [1,2];
						}
					}
				}
			},
      xecf:{
				trigger:{source:'damageEnd'},
				forced:true,
				mark:true,
				audio:5,
       unique:true,
				filter:function(event){
					return event.nature&&event.num>0;
				},
				init:function(player){
					player.storage.xecf=0;
					game.addVideo('storage',player,['xecf',player.storage.xecf]);
				},
				content:function(){
					player.storage.xecf++;
					game.addVideo('storage',player,['xecf',player.storage.xecf]);
				},
       marktext:"邪",
				intro:{
					content:'每一枚标记永久增加一点属性伤害'
				
			},
      ai:{                    
                    effect:{
                        threaten:function(player,target){
         if(player.storage.xecf) return player.storage.xecf*0.7+1;        					
			         	},
             },
            },
          },
      sg:{
      group:'sg1',
                audio:5,    
                trigger:{player:'phaseEnd'},
			unique:true,
      skillAnimation:true,
				animationColor:'metal',
				mark:true,       	
       animationStr:"终极闪光",    
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){


					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,['fire','white','green','thunder'].randomGet());          if(current.hasSkill('sfx')){
         current.damage(['fire','thunder'].randomGet());       
         }
         else{
         player.line(current,['fire','white','green','thunder'].randomGet());
         if(Math.random()<=0.4){
         current.damage(['fire','thunder'].randomGet());
          }         
        }
     }       		
					event.redo();                  
			  	}
		  	},
			ai:{
       threaten:2,


       }
      },
      sg1:{
                audio:2,    
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,
      filter:function(event){
      return Math.random()<=0.3;
      },   
			content:function(){}},    
        sf:{
			audio:7,
			enable:'phaseUse',
			usable:1,
			filterCard:function(card){
				return get.type(card)=='trick'||get.type(card)=='delay';
      },
			selectCard:1,

     selectTarget:[1,2],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=2;
			},
			content:function(){
      player.line(target,'thunder');       
       if(!target.hasSkill('sfx')&&Math.random()<=0.45){   
       target.addSkill('sfx');
       }
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'h',
			ai:{
				order:9.1,
       threaten:1.6,
				result:{

					player:function(player,target){						
						if(get.attitude(target,player)<0) return 2;
						return 0;
           }
					}				
				}      
			},
        sfx:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){  
                "step 0"
               player.skip('phaseUse');      
                "step 1"              
                player.removeSkill('sfx');
            },
                marktext:"缚",
                intro:{
                    content:"该角色跳过其下一回合的出牌阶段",
                },
            },
         hf:{
				audio:2,
				enable:'chooseToUse',
				filter:function(event,player){
					return _status.currentPhase==player;
				},
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'h',
				viewAs:{name:'tao'},
				prompt:'将一张♥或♦手牌当桃使用',
				check:function(card){return 15-get.value(card)},
				ai:{
         order:9,
					skillTagFilter:function(player){
						return player.countCards('h',{color:'red'})>0&&_status.currentPhase==player;
					},
					threaten:1.5,					
				}
			},      
      js:{
                mod:{
                    globalFrom:function (from,to){
                 if(to.maxHp*0.5>to.hp) return -Infinity;
           }
         }
       },
        gz:{

      group:'gz1',
			audio:4,
			enable:'phaseUse',
			filterCard:false,
			filterTarget:function(event,player,target){
				if(player.hp<=1||player==target||target.hp>=target.maxHp) return false;
				return get.distance(player,target,'attack')<=1;
			},     
			content:function(){
       'step 0'
      player.line(target,'green');
      player.loseHp();   
       'step 1'
      target.recover();         
			},
			check:function(event,player,target){  
				return player.hp>1||player.countCards('h',{color:'red'}>0);
			},    
			ai:{
				order:15,     
       threaten:2.2,
				result:{
					player:function(player,target){						if(get.attitude(target,player)>1&&player.countCards('h',{color:'red'}>=0)) return 2;
						return 0;
           }
					}      			
				}      
			},
       gz1:{      
				trigger:{source:'recoverBegin'},
			  	forced:true,
         audio:1,         
         filter:function(event,player){         
					return event.player.hp<event.player.maxHp*0.5;        
			},	
				content:function(){					
			  trigger.num++;					
				}
			},
      mh:{      
				trigger:{source:'damageBegin'},
			  	forced:true,
         audio:2,         
         filter:function(event,player){         
					return event.player.hp<event.player.maxHp*0.5&&(event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2');         
			},	
				content:function(){					
			  trigger.num++;					
				}
			},
      ys:{
      group:'ys1',
			audio:3,
			enable:'phaseUse',
			usable:1,			
			filterCard:function(card){
				return get.type(card)=='basic';
			},
      selectCard:1,
			filterTarget:function(card,player,target){
				if(player==target&&!target.hasSkill('ysx'))      
      return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){
      player.line(target,'white');
       target.addSkill('ysx');       
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:3.9,
       threaten:1.5,
				result:{
					player:function(player,target){						
						if(target.maxHp-target.hp>=1&&get.attitude(target,player)<0) return target.maxHp-target.hp;
						return 0;
           }
					}				
				}      
			},
      ys1:{
       audio:2,				
				trigger:{global:'phaseBegin'},
			  	forced:true,            
                popup:false,
                unique:true,
       filter:function(event,player){
					return event.player.hasSkill('ysx');
       },           
				content:function(){
     trigger.player.damage(Math.round((trigger.player.maxHp-trigger.player.hp)/2));
      }
     },      
      ysx:{
       audio:2,				
				trigger:{player:'phaseBegin'},
			  	forced:true,
         priority:-15,
                mark:true,
                popup:false,
                unique:true,           
				content:function(){	       
       player.removeSkill('ysx');	 
    },
     marktext:"杀",
                intro:{
                    content:"该角色回合开始时，受到劫的X点伤害，X为其已损失的体力值的一半(四舍五入取整)",
           },
         },
      jq:{
			audio:3,
			enable:'phaseUse',
			usable:1,
			filterCard:true,
			selectCard:1,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){
      player.line(target,'fire');
       target.damage();		
       if(player.hp<=player.hp){   
       player.recover();
       }
       else{
      player.draw();
       }      
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:9,
       threaten:1.5,
				result:{
					player:function(player,target){						
						if(get.attitude(target,player)<0) return 4;
						return 0;
           }
					}				
				}      
			},
       kj:{
     audio:3,
			enable:'phaseUse',			
     selectTarget:1,
      usable:1,      
			filterTarget:function(event,player,target){				
				return player!=target;
			},
     unique:true,
			content:function(){		
       player.line(target,'green');
       if(!target.isMad()){
       target.goMad({player:'phaseUseBegin'});
         }
       },
     ai:{
				order:15,
       threaten:1.6,
				result:{
					player:function(player,target){						
						if(get.attitude(target,player)<0) return 3;
						return 0;
           }
					}				
				}      
			},       
       hgyhd:{
       audio:2,				
				trigger:{player:'phaseEnd'},
			  	forced:true,
       
filter:function(event,player){
					return !player.hasSkill('hgyhdx');
       },         
				content:function(){					
			  player.addSkill('hgyhdx');				
			 },
       ai:{
                    noe:true,
                    threaten:1.3,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                },
            },
      hgyhdx:{
                audio:2,           
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                priority:-1,
                content:function (){                              
                trigger.num--;
                player.removeSkill('hgyhdx');
            },
                marktext:"盾",
                intro:{
                    content:"可抵消一点伤害",
                },      
          },       
       ymdj:{
       group:['ymdj1','ymdj2'],		
				trigger:{source:'damageBegin'},
			  	forced:true,
         audio:5,         
         filter:function(event,player){         
					return player.get('e')&& (event.card&&(event.card.name=='sha')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2');         
			},	
				content:function(){					
			  trigger.num+=Math.floor(player.num('e')/2);					
				}
			},
       ymdj1:{				
				trigger:{player:'damageBegin'},
			  	forced:true,
         audio:2,      
         filter:function(event,player){         
					return player.get('e')&&!event.nature;
				},				
				content:function(){					
			  trigger.num-=player.num('e')*0.15;					
				}
			},
      ymdj2:{				
				trigger:{player:'phaseBegin'},
			  	forced:true,
         audio:1,      
         filter:function(event,player){         
					return Math.random()<=0.3;
				},				
				content:function(){			  			
				}},
        ftzt:{
       group:'ftzt1',
				audio:4,
				trigger:{player:['shaBefore','juedouBegin']},
				forced:true,
         filter:function(event,player){
        if(event.card.name=='juedou') return true;       
					return get.color(event.card)=='red';
				},
				content:function(){	
           'step 0'
       player.addSkill('ftzt2');
           'step 1'		
				trigger.directHit=true;
           'step 2'
       player.removeSkill('ftzt2')	;			
			 },
      ai:{
    				effect:{
             sha:function(card,player){
             if(get.color(card)=='red') return 3;                                                  
             },
             juedou:function(card,player){
             if(card.name=='juedou') return 3;                                                  
             },					
    					player:function(card,player,target){
    						if(card.name=='juedou'||card.name=='sha'&&get.color(card)=='red') return [1,2];
    					}
    				}
    			}
    		},
      ftzt1:{				
				trigger:{source:'damageBegin'},
			  	forced:true,
         popup:false,
         filter:function(event,player){
         if(event.card.name=='juedou') return true;
					return event.card.name=='sha'&&get.color(event.card)=='red';
				},				
				content:function(){					
			 player.recover();
       player.draw();					
				}
			},
      ftzt2:{
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
          jhdj:{     
				audio:3,
				trigger:{source:'damageEnd'},
			  	forced:true,
         filter:function(event,player){
        return event.player.hp>=player.hp&&!event.player.hasSkill('jhdjx')&&event.card.name=='sha';
				},				
				content:function(){					
			 trigger.player.addTempSkill('jhdjx',{player:'phaseBegin'});					
				}
			},
        jhdjx:{           
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.skip('phaseUse');
            },
                marktext:"衡",
                intro:{
                    content:"该角色下一回合跳过出牌阶段",
              },
          },
        new_beishui:{   			
    			audio:2,
    			unique:true,
    			priority:110,
         forced:true,		
    			trigger:{player:'changeHp'},   			
    			filter:function(event,player){
    				if(player.storage.new_beishui) return false;
    				return player.hp<=1;
    			},
       init:function(player){
					player.storage.new_beishui=false;
				},
				skillAnimation:true,
				animationColor:'fire',
				mark:true,       	
       animationStr:"背水一战", 	
    			content:function(){
    				"step 0"
           game.delay();
    				player.awakenSkill('new_beishui');
           player.storage.new_beishui=true;  
    				player.recover(3-player.hp);    			        
    		},
       intro:{
					content:'limited'
         }
				},  			
           new_bingdu:{
                audio:3,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
             if(event.player==player||event.player.hasSkill('bingdu2'))
           return false;         
     return event.card&&(event.card.name=='sha')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
                check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
                content:function (){                   
 trigger.player.addSkill('bingdu2');               
            },
                ai:{
                    threaten:1.3,
                },
            },
            bingdu2:{
                audio:3,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('bingdu2');
            },
                marktext:"病",
                intro:{
                    content:"该角色计算与其他角色距离+1，其他角色与其该角色计算距离-1，直到造成伤害",
                },
                mod:{
                    globalTo:function (from,to,current){
                  return current-1;
        },
                    globalFrom:function (from,to,current){
                   return current+1;
        },
                },
            },
        new_jisu:{
    			audio:5,
    			trigger:{player:'phaseBegin'},
    			forced:true,
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			content:function(){
         game.delay();
        player.recover(0.5);
       },
       ai:{				
				effect:{
					target:function(card,player,target){
if(get.tag(card,'recover')&&player.hp>=player.maxHp-0.5) return [0,0];
           }
          }     
        }
       },
       chuchang:{ 
                        audio:3, 
                        trigger:{
                            player:["phaseBegin","phaseEnd"],
                        },
                        forced:true,
                        content:function (){}},
         baotou:{ 
                        audio:3, 
                        trigger:{
                            source:["damageBegin"],
                        },
                        forced:true,
                        filter:function (event,player){ 
                     if(Math.random()>0.25)
                     return false;
                       return event.card&&(event.card.name=='sha'&&event.cards[0]&&event.cards[0]==event.card)&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
              },
              content:function (){                		
					trigger.num+=2;				  
      }
       },   
        heping:{
         mod:{
         attackFrom:function (from,to,num){
            return num-2; 
        },
         selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]+=1;
				},      
       },
       },
         new_juji:{
                audio:3,
                enable:"phaseUse",
                usable:1,               
                filterTarget:function (event,player,target){
                if(target.hp>1) return false;
                if(target==player) return false;
                return true;
               },
                content:function (){
                game.delay(3.5);
                player.line(target,'fire');
                target.damage(2);
           },
      ai:{
                    order:5.5,
                    result:{
                        player:function (player,target){
                        if(ai.get.attitude(player,target)<=0) return 0;
                    
    if(ai.get.attitude(player,target)<0) return 1;
                    },
                        target:-2,
                    },
                    threaten:1.6,
                },
            },
     new_tanlan:{
			trigger:{global:'dieBegin'},
			unique:true,
      forced:true,
     audio:3,
     filter:function(event,player){
				return event.player.hasSkill('buxiang1');
			},
			content:function(){    
     "step 0"    
      player.recover();
      player.draw(3);
     "step 1"
      if(!player.hasSkill('new_lianhua')){      
      player.addSkill('new_lianhua');
      game.log(player,'刷新了技能','【莲华】');      
      player.update();
      }          
      }},
      new_buxiang:{
     audio:3,
			trigger:{player:'phaseBegin'},
			unique:true,
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
						player.line(current,'white');
						current.addSkill('buxiang1');
					}
					event.redo();
				}
			},
		},
     buxiang1:{           
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('buxiang1');
            },
                marktext:"刃",
                intro:{
                    content:"该角色手牌上限-1，直到回合结束",
                },
      mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
         },
          },
     new_lianhua:{
			audio:5,
			enable:'phaseUse',			
     selectTarget:[1,3],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=2;
			},
     unique:true,
			content:function(){     			
				"step 0"     
     player.removeSkill('new_lianhua');
     player.update();       
      if(!target.hasSkill('buxiang1')){
       target.addSkill('buxiang1');
       }
        "step 1"
       player.line(target,'fire');            
				target.damage('poison');           
			},			
			ai:{
				order:15,
       result:{
					player:function(player,target){
				    if(target.hp>2) return 0;
           if(target.hp==2) return 1;	
						if(target.hp<2) return 3;						
						return 0;
					},
					target:function(player,target){
						if(!player.getEquip(1)){
             if(target.hp>2) return 0;
							if(player.hp<2) return 0.5;
							if(player.hp==2&&target.hp>=2) return 0.1;
							if(target.hp>player.hp) return 0;
             if(target.hp==2) return 1;
             if(target.hp<2) return 3;
						}
						return ai.get.damageEffect(target,player);
					}
				}
			},
			threaten:1.6
	   	},
       fengzhan:{
                skillAnimation:true,
                animationStr:"狂风绝息斩！！",
                audio:3,
                trigger:{
                    source:"damageBegin",
                },
                unique:true,
                filter:function (event,player){
      if(player.storage.jifengx<3)
      return false;
     return event.card&&(event.card.name=='sha'||event.card.name=='juedou');
            },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
            },
               priority:15,
                content:function (){
        "step 0"
        player.draw(player.storage.jifengx-3);
         "step 1"
        game.delay();
        player.line(trigger.player,'thunder');
                trigger.num++;
         "step 2"
       if(!trigger.player.isTurnedOver()){;
       trigger.player.turnOver();
       }
         "step 3"
       player.storage.jifengx-=  player.storage.jifengx;
player.update();
            },
                ai:{
                    threaten:1.5,
                },
            },
            fengqiang:{
                audio:2,
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
                if(event.card.name=='sha'||event.card.name=='juedou')
                return false;
                return player.storage.jifengx>=2;
            },
                content:function (){ 
               "step 0"
               player.storage.jifengx-=2;
               "step 1"
                trigger.untrigger();
                trigger.finish();
                player.update();
            },
            },
            jifengx:{
                trigger:{
                    player:["phaseBegin","phaseEnd"],
                },
                forced:true,
                mark:true,
                audio:4,
                filter:function (event,player){
                return player.storage.jifengx<5;
            },
                init:function (player){
                player.storage.jifengx=0;
                game.addVideo('storage',player,['jifengx',player.storage.jifengx]);
            },
                content:function (){
                player.storage.jifengx+=1;
                game.addVideo('storage',player,['jifengx',player.storage.jifengx]);
            },
                marktext:"风",
                intro:{
                    content:"mark",
                },
            },
        zhewu:{
                audio:3,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                priority:120,
                filter:function (event,player){                        
    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                content:function (){    
    player.draw();
    },
      mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+2;
                },

                },
            },
            zhufeng:{
                skillAnimation:true,
                animationStr:"放逐之锋！斩杀！",
                audio:3,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
    if(player.hasSkill('zhufeng2'))
    return false;                      
     if(Math.floor(event.player.maxHp/3)<event.player.hp)
     return false;
    return event.card&&(event.card.name=='sha')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<1;
            },
                content:function (){
    trigger.num+=Math.floor(trigger.player.maxHp/3); 
    player.addTempSkill('zhufeng2','phaseEnd');   
    },
                ai:{
                    threaten:1.6,
                },
            },
            "zhufeng2":{
            },
            shangjin:{
                audio:3,
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){    
      trigger.num++;
      },
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                ai:{
                    threaten:1.6,
                },
            },
            shuangdiao:{
                audio:3,
                trigger:{
                    source:"damageAfter",
                },
                direct:true,
                filter:function (event,player){    
       if(player.num('h')==0) return false;
                if(!event.card) return false;
                if(event.card.name!='sha') return false;
                return game.hasPlayer(function(current){
                    return current!=event.player&&get.distance(event.player,current)<=1;
                });
            },
                content:function (){
                "step 0"
                var damaged=trigger.player;
                player.chooseCardTarget({
                    filterCard:lib.filter.cardDiscardable,
                    filterTarget:function(card,player,target){
                        var damaged=_status.event.damaged;
                        return target!=player&&get.distance(damaged,target)<=1&&target!=damaged;
                    },
                    ai1:function(card){
                        return 9-ai.get.value(card);
       },
                    ai2:function(target){
                        var player=_status.event.player;
                        return ai.get.damageEffect(target,player,player);
                    },
                    prompt:get.prompt('shuangdiao')
                }).set('damaged',damaged);
                "step 1"
                if(result.bool){
                    player.logSkill('shuangdiao',result.targets);    
         player.discard(result.cards);                            result.targets[0].damage('fire',2);
                }
            },
            },
            liuxing:{
                mod:{
                    attackFrom:function (from,to,num){
                    if(to.hp>=2) return num-1;
                },
                    globalTo:function (from,to,current){
                    if(to.hp<=2) return current+1;
                },
                },
                ai:{
                    threaten:1,
                },
            },
            kuangzhan:{
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                forced:true,
                mark:true,
                audio:3,
                unique:true,
                filter:function (event){
                return event.num>0;
            },
                init:function (player){
                player.storage.kuangzhan=1;
                game.addVideo('storage',player,['kuangzhan',player.storage.kuangzhan]);
            },
                content:function (){
                player.storage.kuangzhan+=trigger.num;
                game.addVideo('storage',player,['kuangzhan',player.storage.kuangzhan]);
            },
                marktext:"战",
                intro:{
                    content:"mark",
                },
            },
            wuwei:{
                audio:4,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){                    
           return player.storage.kuangzhan>=3;
            },
                content:function (){                  
             player.recover();
             player.draw(2);
             player.storage.kuangzhan-=3;
             },
                ai:{
                    threaten:1.4,
                },
            },
            zhuanzhu:{
                audio:3,
                trigger:{
                    source:"damageBegin",
                },
                priority:-9,
                filter:function (event){
           return event.card&&(event.card.name=='sha')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<1;
            },
                content:function (){          
 trigger.num=trigger.num*1+Math.floor(Math.random()*(2));
             },
                mod:{
                    maxHandcard:function (player,num){
            return num+2;          
        },
                    attackFrom:function (from,to,num){
            return num-2; 
        },
                },
            },
            jiqu:{
                audio:2,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                priority:6,
                content:function (){ 
                player.recover(trigger.num);                player.gainPlayerCard(trigger.player);                                           
            },
            },
            jingu:{
                audio:2,
                trigger:{
                    source:"damageAfter",
                },
                filter:function (event){         
           return         event.card&&(event.nature=='fire'||event.nature=='thunder')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<1;
            },
                content:function (){
trigger.player.addSkill('jingu2');
            },
           ai:{
                    threaten:1.5,
                },
            },
            "jingu2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){  
                "step 0"
               player.skip('phaseUse');      
                "step 1"              
                player.removeSkill('jingu2');
            },
                marktext:"锢",
                intro:{
                    content:"该角色跳过其下一回合的出牌阶段",
                },
            },
            bingjianx:{
                audio:3,
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){         
           return !event.target.hasSkill('bingjianx2'); 
                },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<0;
       },
                content:function (){                   
player.discardPlayerCard(trigger.target,'e',true);             
                   trigger.target.addSkill('bingjianx2');               
            },
                ai:{
                    threaten:1.5,
                },
            },
            "bingjianx2":{
                audio:3,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('bingjianx2');
            },
                marktext:"冰",
                intro:{
                    content:"该角色计算与其他角色距离+2，其他角色与其该角色计算距离-2，直到造成伤害",
                },
                mod:{
                    globalTo:function (from,to,current){
                  return current-2;
        },
                    globalFrom:function (from,to,current){
                   return current+2;
        },
                },
            },
        zhimang:{
                audio:5,
               filter:function(event,player){
				return player.countCards('h',{color:'black'})>0;
			},
                enable:"phaseUse",
                usable:1,
                filterCard:{
                    color:"black",
                },
                filterTarget:function (card,player,target){
                if(target==player)
                return false;
                return !target.skills.contains('zhimang2');
            },
                check:function (card){
                return 15-ai.get.value(card);
            },
                discard:false,
                prepare:function (cards,player,targets){
                player.$give(cards,targets[0]);
                player.line(targets[0],'green');
            },
                content:function (){
                "step 0"
                game.delay();
                player.draw();
                "step 1"
                target.storage.zhimang2=cards[0];
                target.addSkill('zhimang2');
                game.addVideo('storage',target,['zhimang2',get.cardInfo(target.storage.zhimang2),'card']);
            },
                ai:{
                    expose:0.2,
                    result:{
                        target:function (player,target){
                        return -target.hp;
                    },
                    },
                    order:9.2,
                    threaten:1.8,
                },
            },
            "zhimang2":{
                trigger:{
                    player:["shaBegin","juedouBegin"]
                },
                forced:true,
                mark:true,
                audio:3,
               priority:15,
                unique:true,              
                content:function (){     
                trigger.finish();
                trigger.untrigger();
player.chooseToDiscard(true,Math.max(1,Math.ceil(player.num('he')/2)),'he');
                player.addSkill('zhimang3');

                player.removeSkill('zhimang2');
            },
       marktext:"盲",
                intro:{
                    content:"该角色下一次使用【杀】或【决斗】时无效，然后弃置X张牌，X为该角色牌数的一半且向上取整，且至少为1",
                },
            },
            "zhimang3":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                popup:false,
                content:function (){                
                player.removeSkill('zhimang3');
                delete player.storage.zhimang2;
            },
            },
           chenmox:{
                audio:4,               
                trigger:{
                    player:"shaBegin",
                },
                priority:8,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<0;
            },       
                content:function (){
            trigger.target.addTempSkill('fengyin',{player:'phaseAfter'});
           }
        },
            chenmo:{
                audio:3,
                forbid:["boss"],       
                trigger:{
                    player:"shaBegin",
                },
                priority:9,
                unique:true,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<0;
            },
                content:function (){
                "step 0"    
                var target=trigger.target;
                if(target.hasSkill('chenmo2')==false){
                    var list=[];
                    for(var i=0;i<target.skills.length;i++){                        
                            list.push(target.skills[i]);
                    }
                    target.disableSkill('chenmo',list);
                    target.addSkill('chenmo2');
                }            
            },
                ai:{
                    threaten:1.4,
                },
            },
            "chenmo2":{
                audio:"ext:新版武将:false",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                unique:true,
                content:function (){
                player.enableSkill('chenmo');
                player.removeSkill('chenmo2');
            },
                mark:true,
                unique:true,
                popup:false,
        marktext:"默",
                intro:{
                    content:function (st,player){
                    var storage=player.disabledSkills.chenmo;
                    if(storage&&storage.length){
                        var str='失效技能：';
                        for(var i=0;i<storage.length;i++){
                            if(lib.translate[storage[i]+'_info']){
                                str+=get.translation(storage[i])+'、';
                            }
                        }
                        return str.slice(0,str.length-1);
                    }
       },
                },
            },
        zhiming:{
                audio:2,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                forced:true,                
                content:function (){
        trigger.num=trigger.num*(1+Math.floor(Math.random()*4));
             },
                ai:{
                    threaten:1.6,
                },
            },
            shanbi:{
                audio:1,
                trigger:{
                    target:"shaBegin"
                },
                forced:true,
                priority:99,
            filter:function (event){
            return Math.random()<=0.6;
            },
                content:function (){            
            trigger.untrigger();
            trigger.finish();            player.discardPlayerCard(trigger.player,true);
    },
            },
            zhengyi:{
                skillAnimation:true,
                animationStr:"德玛西亚！！！",
                audio:2,
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event){
        if(event.target.hp>1)
            return false;
            return true;
        },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;

            },
                logTarget:"target",
                content:function (){        
      player.addSkill('zhengyi2');
                    trigger.directHit=true;
            },
                ai:{
                    threaten:1.2,
                },
            },
            "zhengyi2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        if(event.player.hp>1)
            return false;
        return event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                forced:true,
                popup:false,
                unique:true,
                content:function (){
                "step 0"
        trigger.num++;      
                "step 1"
        player.removeSkill('zhengyi2'); 
    },
            },
       jiandao:{        
      audio:3,
      trigger:{player:'shaBefore'},
				filter:function(event,player){
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
        unique:true,
				content:function(){	},                
       mod:{                
             cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+1;
                },          
                    selectTarget:function (card,player,range){
            if(range[1]==-1) return;
            if(card.name=='sha'||card.name=='guohe') range[1]=4;
        },
                },
                ai:{
                    threaten:1.4,
                },
            },    
           baoji:{
                audio:2,
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                unique:true,
                priority:-9,
                filter:function (event){        
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                content:function (){
           if(Math.random()<=0.3+(player.storage.baonu*0.03)){
           trigger.num=trigger.num*2;
        }    
    },
                ai:{
                    threaten:1.3,
                },
            },
            nuqi:{
                audio:1,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
        if(player.hp==player.maxHp)
            return false;
        return player.storage.baonu>=3;
    },
                content:function (){
 player.storage.baonu-=3;       
              player.recover();               
    },
                ai:{
                    threaten:1.3,
                },
            },
            xunjie:{
                mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
        },
                    globalTo:function (from,to,current){
            if(to.hp<=2) return current+1;
        },
                },
                ai:{
                    threaten:1.2,
                },
            },
        lieshou:{
                mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
        },
                    globalTo:function (from,to,current){
            if(to.hp<to.maxHp) return current+Math.min(2,to.maxHp-to.hp);
        },
                },
                ai:{
                    threaten:1.2,
                },
            },
       sn:{
						audio:4,
						trigger:{player:'shaBegin'},
						filter:function(event,player){
							return event.target&&event.target!=player;
						},
						forced:true,
           unique:true,
						init:function(player){
							for(var i=0;i<game.players.length;i++){
								game.players[i].storage.sn_mark=0;
							}
						},
						content:function(){
							trigger.target.storage.sn_mark++;
							trigger.target.syncStorage('sn_mark');
							trigger.target.markSkill('sn_mark');
						},
						global:['sn_mark'],
						subSkill:{
							mark:{
								marktext:'箭',
								intro:{
									content:'mark'
								}
							}
						},
						group:['sn2'],
					},
					sn2:{
						skillAnimation:true,
						audio:8,
						trigger:{player:'shaBegin'},			
						forced:true,
           unique:true,
           priority:1,        
						filter:function(event,player){
							return event.target.storage.sn_mark>=2;
						},
						content:function(){
             player.line(trigger.target,'fire');
							trigger.directHit=true;             
             player.addSkill('sn3');
            },
          ai:{
							threaten:1.7,
           }							
					},
        sn3:{					
						audio:false,
						trigger:{source:'damageBegin'},
						forced:true,
           unique:true,
						filter:function(event,player){
							return event.card&&(event.card.name=='sha')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
						},
						content:function(){           
							trigger.num+=Math.max(1,Math.floor(trigger.player.maxHp*0.5));
             trigger.player.storage.sn_mark=0;
             trigger.player.removeSkill('sn_mark');
             player.update();
             player.removeSkill('sn3');
            },											
					},
       xuenu:{
						audio:12,
						trigger:{source:'damageEnd'},
						filter:function(event,player){
							return (event.card.name=='juedou'||event.card.name=='sha')&&!event.nature&&event.player!=player;
						},
						forced:true,
           unique:true,
						init:function(player){
							for(var i=0;i<game.players.length;i++){

								game.players[i].storage.xuenu_mark=0;
							}
						},
						content:function(){
							trigger.player.storage.xuenu_mark+=trigger.num;
							trigger.player.syncStorage('xuenu_mark');
							trigger.player.markSkill('xuenu_mark');
             trigger.player.addTempSkill('xuenux',{player:'recoverEnd'});
						},
						global:['xuenu_mark'],
						subSkill:{
							mark:{
								marktext:'血',
								intro:{
									content:'mark'
								}
							}
						},
          ai:{
							threaten:1.8,
           }					
					},
          xuenux:{
          group:'xuenux1',
						audio:4,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.storage.xuenu_mark>0;
						},
						forced:true,
           unique:true,						
						content:function(){
          if(player.countCards('he',{color:'red'})>=player.storage.xuenu_mark){
 player.chooseToDiscard(true,player.storage.xuenu_mark,'he',{color:'red'})
           }
           else{
           player.loseHp(player.storage.xuenu_mark);
              }
            }
          },
          xuenux1:{
						audio:4,
						trigger:{player:'recoverBegin'},
						filter:function(event,player){
							return player.storage.xuenu_mark>0;
						},
						forced:true,
           unique:true,						
						content:function(){
           player.storage.xuenu_mark=0;
           player.removeSkill('xuenu_mark');
           player.update();
            }
           },
					duantou:{
						skillAnimation:true,
           animationStr:"诺克萨斯断头台",
						audio:10,
						trigger:{player:'shaBegin'},			
				    unique:true,
           priority:1,           
						filter:function(event,player){
							return event.target!=player&&event.target.storage.xuenu_mark>=3&&!event.nature;
						},
           check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
              },
						content:function(){
							trigger.directHit=true;
             player.addSkill('duantou1');                        
            },							
					},
        duantou1:{					
						audio:false,
						trigger:{source:'damageBegin'},
           forced:true,					
           unique:true,
						filter:function(event,player){
							return event.card&&(event.card.name=='sha'&&!event.nature)&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
						},
						content:function(){
							trigger.num+=2;
             trigger.player.storage.xuenu_mark=0;
             trigger.player.removeSkill('xuenu_mark');
             player.removeSkill('duantou1');
             player.update();          
            }								
					 },       
         },   
       translate:{
            ltpx:'沃利贝尔',
            wsjj:'菲奥娜',      
            xexfs:'维迦',      
            pichengnvjing:"凯特琳",
            katelinna:"卡特琳娜",
            mrsz:'费德提克',
            ryjs:'墨菲特',
            smss:'内瑟斯',
            xhsgz:'弗拉基米尔',
            ghnl:'拉克丝',
            ayls:'薇恩',
            zxzz:'索拉卡',
            ylzz:'劫',
            nksszs:'德莱厄斯',
            daofengyizhi:'艾瑞莉娅',
            jifengjianhao:"亚索",
            fangzhuzhiren:"锐雯",
            shangjinlieren:"厄运小姐",
            debangzongguan:"赵信",
            duoluotianshi:"莫甘娜",
            hanbingsheshou:"艾希",
            jiansheng:"剑圣",
            emolieshou:"恶魔猎手",
            dema:"盖伦",
            wujijiansheng:"易",
            manzuzhiwang:"泰达米尔",
            xunjiechihou:"提莫",
            mengduoyisheng:'蒙多医生',
            
            new_beishui:'背水',
            new_bingdu:'病毒',
            new_jisu:'激素',
            new_juji:"狙击",
           heping:"和平",
           baotou:"爆头",           
           new_tanlan:"贪婪",
           new_lianhua:"莲华",
           new_buxiang:"不详",          
           new_buxiang1:"不详",
           jhdj:'均衡',
           jhdjx:'均衡',
           ftzt:'姿态',
           ftzt1:'姿态',
           hgyhd:'护盾',
           ymdj:'野蛮',
           kj:'恐惧',
           jq:'汲取',
           mh:'灭魂',
           ys:'影杀',
           js:'救赎',
           gz:'灌注',
           gz1:'灌注',
           hf:'回复',
           sf:'束缚',
           sg:'闪光',
           xecf:'邪力',
           xejs:'祭祀',
           xebl:'爆裂',
           lieshou:'猎手',
           sn:'圣弩',
           sn2:'圣弩',
           xuenu:'流血',          
           duantou:'断头',
           wspk:'破空',
           wslc:'连刺',
           xhxx:'转换',
           xhqy:'契约',
           ltfb:'风暴',
           ltgg:'滚滚',
           smjh:'汲魂',
           smts:'吞噬',
           smjh_info:'锁定技，你使用【杀】对目标造成伤害时，此伤害+X，X为你拥有汲魂标记数量的一半且向上取整；每当你使用【杀】造成伤害，你获得一枚汲魂标记。',
           smts_info:'锁定技，每当你使用非属性【杀】造成一点伤害，若你已受伤，则你回复一点体力。',
           ltfb_info:'锁定技，当你进入濒死状态时，你回复一点体力。',
           ltgg_info:'锁定技，当你计算与其他角色的距离时，始终-1。',
           xhqy_info:'锁定技，每当你对目标造成属性伤害时，你回复一点体力，然后获得对方一张♥或♦牌。',
           xhxx_info:'锁定技，你即将造成的非属性伤害均视为属性伤害。',
           wspk_info:'锁定技，你使用【杀】指定一名角色为目标并结算后，你有35%的几率视为对该角色使用一张【决斗】，且该【决斗】不能被【无懈可击】响应，若你已受伤，则你回复一点体力；你的【杀】无视目标防具。',
           wslc_info:'锁定技，出牌阶段，你使用【杀】的次数上限+1。',                  
           xuenu_info:'锁定技，你使用【决斗】或非属性【杀】对目标造成伤害时，该角色获得一枚流血标记，称为“血”，该角色回合开始阶段，须弃置与拥有流血标记数等量的♦或♥牌，若不能如此做，则失去等量的体力，当其回复体力时，弃置所有流血标记。',
           duantou_info:'你使用非属性【杀】指定目标时，若该角色拥有三枚流血标记，则此【杀】不可被闪避，且伤害+2。',    
           lieshou_info:'锁定技，你与其他角色计算距离时，始终-1；若你已受伤，其他角色与你计算距离时，始终+X，X为你已损失的体力值，且不超过2。',
           sn_info:'锁定技，每当你使用【杀】指定一名角色为目标时，该角色获得一枚圣弩标记，称为“箭”，若该角色已拥有两枚圣弩标记，则此【杀】不可被闪避，且此伤害+X，X为其最大体力值的一半向下取整，且至少为1，然后其弃置所有圣弩标记。',
           xecf_info:'游戏开始时，你获得邪力标记，称为“邪”，每当你造成带属性的伤害时，你获得一枚标记。',
           xejs_info:'锁定技，你对目标造成带属性的伤害时，此伤害+X，X为你武将牌上邪力标记的数量。',
           xebl_info:'当你使用属性【杀】对目标造成伤害时，若该角色的体力值不大于其最大体力值的33%，你可以令此伤害翻倍。',
           sf_info:'出牌阶段，你可以弃置一张锦囊牌，然后选择1~2名其他角色，45%的几率令其跳过其下一回合的出牌阶段，每回合限用一次。',
           sg_info:'回合结束阶段，你可以对被束缚的角色造成一点伤害，对其余所有其他角色各有40%的几率造成一点伤害。',
           hf_info:'在你的回合，你可以将一张♥或♦手牌当【桃】使用。',
           js_info:'锁定技，你计算与体力值低于体力上限一半的角色的距离为1',
          gz_info:'出牌阶段，你可以选择你攻击范围内的一名已受伤的其他角色，然后你失去一点体力，该角色回复一点体力；锁定技，你令一名体力值低于体力上限一半的角色回复体力时，此回复量+1。',
           ys_info:'出牌阶段，你可以弃置一张基本牌，然后选择一名你攻击范围内的其他角色，该角色下一回合开始时受到你的X点伤害，X为其已损失的体力值的一半四舍五入取整，每回合限用一次。',    
           mh_info:'锁定技，你对体力值低于体力上限的一半的目标造成伤害时，此伤害+1。',
           kj_info:'出牌阶段，你可以选择一名其他角色，令其进入混乱状态，直到其下一回合出牌阶段开始，每回合限用一次。',
           jq_info:'出牌阶段，你可以弃置一张牌，然后对你攻击范围内的一名其他角色造成一点伤害，若你已受伤，则你回复一点体力，否则你摸一张牌，每回合限用一次。',
           hgyhd_info:'锁定技，回合结束时，你获得一层护盾，可抵消一点伤害。',
           ymdj_info:'锁定技，若你装备区里有牌，你使用【杀】造成的伤害+X，X为你装备区牌数的一半且向下取整；你受到的非属性伤害-X，X改为你装备区里的牌数的15%。',
           jhdj_info:'锁定技，你使用【杀】对目标造成伤害时，若目标体力值不小于你，则其下一回合跳过出牌阶段。',
           ftzt_info:'锁定技，你的【决斗】或红色【杀】，不可被【杀】或【闪】响应，且无视目标防具；你的【决斗】或红色【杀】造成伤害时，你回复一点体力和摸一张牌。',
          new_bingdu_info:'当你使用【杀】对一名其他角色造成伤害时，你可以令其进攻距离和防御距离-1，直到其下一回合结束。',
           new_beishui_info:'限定技，当你体力值等于1或更低时，你可以将体力回复至3点。',         
           new_buxiang_info:"回合开始时，你可以将一枚不详标记置于所有敌方角色的武将牌上，称为“刃”，令其手牌上限-1，直到其下一回合结束。",
           new_lianhua_info:"限定技，出牌阶段，你可以将一枚“刃”标记置于你攻击范围2以内的1~3名其他角色的武将牌上并对其造成1点伤害，然后你不能再使用此技能，直到技能【贪婪】被触发。",
           new_tanlan_info:"锁定技，每当一名武将牌上有不详标记的角色死亡时，你回复一点体力，摸三张牌，并刷新技能:【莲华】。",
           baotou_info:"当你使用非转化的【杀】造成伤害时，你有25%的几率令此【杀】伤害+2。",
           heping_info:"你的攻击范围+2，使用【杀】时可额外指定一个目标。",
           new_juji_info:"出牌阶段，你可以对体力值低于2的一名其他角色造成2点伤害，每阶段限一次。",           
            fengzhan:"风斩",
            "fengzhan_info":"你使用【杀】或【决斗】对目标造成伤害时，若你的疾风标记不少于3，你可以弃置3枚疾风标记令伤害+1，并弃置剩余疾风标记摸等量的牌，然后将受到此伤害的目标武将牌翻面(若目标武将牌背面朝上，则不会响应此次翻面)。",

            fengqiang:"风墙",
            "fengqiang_info":"锁定技，当你即将受到不为【杀】或【决斗】的伤害时，若你的疾风标记的数量不少于2，你弃置2枚疾风标记，防止该伤害。",
            jifengx:"疾风",

            "jifengx_info":"锁定技，你回合开始和结束时，都可获得1枚疾风标记，称为“风”，疾风标记的上限为5。",
            zhewu:"折舞",
            "zhewu_info":"锁定技，你使用[杀]的次数上限+2；你的[杀]或[决斗]对目标造成伤害时，你可以摸一张牌。",
            zhufeng:"逐锋",
            "zhufeng_info":"你使用[杀]对目标造成伤害时，若对方当前体力值等于X或更低，此[杀]伤害+X，X为其最大体力值的1/3且向下取整，每阶段限一次。",
            kuangzhan:"狂战",
            "kuangzhan_info":"锁定技，游戏开始时，你获得一枚狂战标记，每当你造成或受到一点伤害时，获得一枚狂战标记。",
            wuwei:"无畏",
            "wuwei_info":"锁定技，回合开始时，若你的狂战标记超过三枚，你弃置三枚狂战标记，然后回复一点体力并摸两张牌。",
            jiqu:"汲取",
            "jiqu_info":"锁定技，任何时候，每当你对任意角色造成一点伤害，若你已受伤，你回复一点体力值，获得对方一张牌，一次无论造成多少点伤害，只能获得一张牌。",
             jingu:"禁锢",
            "jingu2":"禁锢",
            "jingu_info":"你对目标造成带属性的伤害时可令其跳过出牌阶段一个回合。",
            zhuanzhu:"专注",
            "zhuanzhu_info":"你使用【杀】对目标造成伤害时，你可以令此【杀】有几率造成两倍伤害，锁定技，你手牌上限+2，攻击范围+2。",
            bingjianx:"冰箭",
            "bingjianx2":"寒冰",
            "bingjianx_info":"当你使用【杀】指定一名角色为目标后，若其装备区有牌，你可以弃置其一张装备牌，将“寒冰”标记置于其武将牌上，(寒冰：你计算与其他角色距离+2，其他角色与你计算距离-2，造成伤害后失去该标记)，若其武将牌上有“寒冰”标记，你不能触发此技能。",
       new_jisu_info:'锁定技，回合开始时，若你已受伤，你回复0.5点体力。',
            zhiming:"致命",
            "zhiming_info":"锁定技，你的【杀】可以造成1~4倍伤害。",
            shanbi:"闪避",
            "shanbi_info":"每当你成为【杀】的目标时，你有60%的几率取消之，并弃置对方一张牌。",
            jiandao:"剑道",
            "jiandao_info":"你使用【杀】和【过河拆桥】指定目标数上限+3，次数上限+1。",
            baoji:"暴击",
            "baoji_info":"锁定技，每当你使用[杀]或[决斗]即将对目标造成伤害时，你有(30+(暴怒标记数量×0.03))%的几率令此伤害翻倍。",
            nuqi:"嗜血",
            "nuqi_info":"锁定技，结束阶段，若你已受伤且\"暴怒\"标记不少于3枚，你弃置3枚\"暴怒\"标记，回复一点体力。",
            chenmo:"沉默",
            "chenmo2":"沉默",
            chenmox:"沉默",
            "chenmo_info":"当你使用【杀】指定一名角色为目标后，你可以令该角色的所有技能失效直到其下一回合开始。",
            chenmox_info:"当你使用【杀】指定一名角色为目标后，你可以令该角色的非锁定技能失效直到其下一回合结束。",
            zhengyi:"正义",
            "zhengyi_info":"锁定技，你的【杀】指定体力值不大于1的目标时，此【杀】不可被闪避，且此伤害+1。",            
            xunjie:"迅捷",
            "xunjie_info":"锁定技，当你计算与其他角色的距离时，始终-1；只要你的体力值为2点或更低，其他角色计算与你的距离时，始终+1。",            
            zhimang:"致盲",
            "zhimang2":"致盲",
            "zhimang_info":"出牌阶段限一次，你可以将一张♠或♣花色手牌置于一名角色的武将牌上，然后你摸一张牌，该角色下一次使用【杀】或【决斗】时无效，并弃置X张牌，X为该角色牌数的一半且向上取整，且至少为1",
            liuxing:"流星",
            "liuxing_info":"锁定技，只要你的体力值大于等于2点，你的攻击范围+1；只要你的体力值为2点或更低，其他角色计算与你的距离时，始终+1。",
            shuangdiao:"双雕",
            "shuangdiao_info":"当你使用杀造成伤害后，可以弃置1张手牌对一名距离受伤害角色1以内的其他角色造成2点火焰伤害。",
            shangjin:"赏金",
            "shangjin_info":"锁定技，摸牌阶段，你可以额外摸一张牌，你的手牌上限+1。",
       },       
      },'英雄联盟')
     } 
    // ---------------------------------------lol装备------------------------------------------//                 
        if(config.lolzb){				
        	game.addCardPack({  
        card:{
       yinxue:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
        skills:['yinxue_skill'],
				ai:{
					basic:{
						equipValue:function(card,player){
							var num=5+player.maxHp-player.hp+(player.countCards('h','juedou'));
							return Math.min(num,5);
						}
					}
				},				
			   },
         wujin:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				ai:{
					basic:{
						equipValue:9,
						}					
				},
				skills:['wujin_skill'],
			   },        
        zhenfen:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',				
				ai:{
					basic:{
						equipValue:function(event,player){
							var num=5+(player.countCards('h','tao'))+(player.maxHp-player.hp);
							return Math.min(num,5);
					  	}
						}					
				},
				skills:['zhenfen_skill']
			   },
        kuangtu:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',				
				skills:['kuangtu_skill'],							
				ai:{
					basic:{
						equipValue:function(event,player){
							var num=7+(player.maxHp-player.hp);
							return Math.min(num,7);
						}
						},						
				},				
			   },
        jingji:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',				
				ai:{
					basic:{
						equipValue:function(event,player){
							var num=5+player.hp+(player.countCards('h','tao'));
							return Math.min(num,5);
						}
						}					
				},
				skills:['jingji_skill']
			   },
        fachuan:{
				fullskin:true,
				type:'equip',
				subtype:'equip4',
        distance:{globalFrom:-1},				
				ai:{
					basic:{
						equipValue:7,
						}					
				},
				skills:['fachuan_skill']
			   },
        },  
       skill:{
        fachuan_skill:{
          audio:true,
          trigger:{source:'damageBegin'},
          forced:true,
          priority:-8,        
           filter:function(event,player){
           if(event.player==player)
           return false;
           return event.nature&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
						},
          content:function(){
          trigger.num++;      
         }       
        },
        jingji_skill:{
          audio:true,
          trigger:{player:'damageBegin'},
          forced:true,                 
           filter:function(event,player){
           if(event.source&&event.source.hasSkillTag('unequip',false,event.card)) return false;
         return (event.source!=undefined)&&!event.nature;
          },
          priority:-15,
          content:function(){
          trigger.source.damage(['thunder','fire'].randomGet());
         },
         ai:{         
          effect:{
    					target:function(card,player,target,current){    						if(get.tag(card,'damage')&&!card.nature&&player.hp<2) return 0;          
							if(card.name=='sha'){
	    						var equip1=player.getEquip(1);
	    						if(equip1&&equip1.name=='zhuque') return 2;
	    						if(equip1&&equip1.name=='qinggang') return 1;
               }
    					}
    				}
    			}
    		},
        zhenfen_skill:{
           group:'zhenfen2_skill',					
						audio:true,
						trigger:{player:'recoverBegin'},
           forced:true,           			
						content:function(){
           trigger.num++;
           }
          },
        zhenfen2_skill:{
     		   audio:true,
						trigger:{player:'damageBegin'},
           forced:true,           
           priority:-99999,
           filter:function(event,player){
           if(event.source&&event.source.hasSkillTag('unequip',false,event.card)) return false;
							return event.num>1&&event.nature;
           },					
						content:function(){
           trigger.num=1;
           }
          },
        kuangtu_skill:{					
						audio:true,
						trigger:{player:'phaseEnd'},
           forced:true,	
           priority:2,
						filter:function(event,player){       
           return player.hp<player.maxHp;                     
           },
						content:function(){
           player.recover(Math.max(1,Math.round(player.maxHp*0.25)));
           }, 
        ai:{         
          effect:{
    					target:function(card,player,target){    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
    					}
    				}
    			}
    		},         
        wujin_skill:{						
						trigger:{source:'damageBegin'},          
						filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&event.card.name=='sha'){
						if(!event.nature&&Math.random()<=0.35) return true;
					}
					return false;
				},
		    		forced:true,
           audio:true,              
           priority:-9,
						content:function(){
           trigger.num=trigger.num*3;
           }
          },
        yinxue_skill:{	
        	group:'yinxue2_skill',		
						audio:true,
						trigger:{source:'damageBegin'},          
						filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&(event.card.name=='sha'||event.card.name=='juedou')){
						if(!event.nature) return true;
					}
					return false;
				},
			     	forced:true,
            priority:10,
						content:function(){}},         
        yinxue2_skill:{					
						audio:true,
						trigger:{source:'damageEnd'},          
						filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&(event.card.name=='sha'||event.card.name=='juedou')){
						if(!event.nature) return true;
					}
					return false;
				},
			     	forced:true,
						content:function(){
             'step 0'
            player.draw(trigger.num);
             'step 1'
           if(player.hp<player.maxHp){
           player.recover(trigger.num);           
            }
           else{
           player.addSkill('yinxue2');
            }
           }
          },
        yinxue2:{
        group:'yinxue3',					
						audio:true,
						trigger:{player:'damageBegin'},
           forced:true,	
           mark:true,
           filter:function(event){
           return event.num>0;
            },		
						content:function(){
           trigger.num--;
           player.removeSkill('yinxue2');          
            },           						
								intro:{
									content:'可抵消一点伤害'							
							}
          },
        yinxue3:{					
						audio:true,
						trigger:{player:'phaseBegin'},
           forced:true,	        
						content:function(){
           player.removeSkill('yinxue2');
           player.removeSkill('yinxue3');
           }
         },
       },   
       translate:{
         fachuan:'法师之靴',
         jingji:'荆棘之甲',
         kuangtu:'狂徒铠甲',
         zhenfen:'振奋铠甲',
         wujin:'无尽之刃',
         fachuan_skill:'法师之靴',
         fachuan_skill_info:'锁定技，当你计算与其他角色的距离时，始终-1；你对其他角色造成属性伤害时，此伤害+1。',
         fachuan_info:'锁定技，当你计算与其他角色的距离时，始终-1；你对其他角色造成属性伤害时，此伤害+1。',
         kuangtu_skill:'狂徒铠甲',
         kuangtu_skill_info:'锁定技，回合结束阶段，若你已受伤，你回复X点体力，X为你最大体力值的25%，且至少为1。',
         kuangtu_info:'锁定技，回合结束阶段，若你已受伤，你回复X点体力，X为你最大体力值的25%，且至少为1。',
         jingji_skill:'荆棘之甲',
         jingji_skill_info:'锁定技，每当你受到伤害时，造成伤害来源受到你的一点属性伤害。',
         jingji_info:'锁定技，每当你受到伤害时，造成伤害来源受到你的一点属性伤害。',
         zhenfen_skill:'振奋铠甲',
         zhenfen2_skill:'振奋铠甲',
         zhenfen2_skill_info:'锁定技，当你回复体力时，额外回复一点体力；当你即将受到多于一点属性伤害时，你最多承受一点属性伤害，防止多余的属性伤害。',
         zhenfen_skill_info:'锁定技，当你回复体力时，额外回复一点体力；当你即将受到多于一点属性伤害时，你最多承受一点属性伤害，防止多余的属性伤害。',
         zhenfen_info:'锁定技，当你回复体力时，额外回复一点体力；当你即将受到多于一点属性伤害时，你最多承受一点属性伤害，防止多余的属性伤害。',
         wujin_skill:'无尽之刃',
         wujin_skill_info:'锁定技，你的非属性【杀】有35%的几率造成3倍伤害。',
         wujin_info:'锁定技，你的非属性【杀】有30%的几率造成3倍伤害。',
         yinxue:'饮血剑',       
         yinxue2:'饮血剑',
         yinxue_skill:'饮血剑',
         yinxue_skill_info:'锁定技，每当你使用【决斗】或【杀】对一名角色造成1点非属性伤害，你摸1张牌；若你已受伤，则你回复1点体力，否则你获得可抵挡1点伤害的护盾，除非你受到不少于1点伤害，否则护盾持续到下一回合开始。',
     
        yinxue_info:'锁定技，每当你使用【决斗】或【杀】对一名角色造成1点非属性伤害，你摸1张牌；若你已受伤，则你回复1点体力，否则你获得可抵挡1点伤害的护盾，除非你受到不少于1点伤害，否则护盾持续到下一回合开始。',
        },
     list:
     [['heart','1','yinxue'],
     ['spade','2','wujin'],
     ['club','12','jingji'],
     ['spade','7','kuangtu'], 
     ['diamond','13','zhenfen'],
     ['club','6','fachuan'],
     ['spade','7','sha'],   
     ['spade','9','sha'],
     ['club','8','sha'],
     ['heart','6','sha'],
     ['club','11','sha'],
     ['spade','10','sha'],
     ['heart','5','sha'],
     ['club','7','shunshou'],
     ['spade','9','shunshou'],
     ['diamond','3','sha'],
     ['club','8','sha'], 
     ['heart','4','sha','fire'],
     ['spade','11','wuxie'],   
     ['spade','11','sha','thunder'],  
     ['club','3','sha','thunder'],
     ['heart','13','shan'],
     ['diamond','6','shan'],
     ['heart','12','shan'],   
     ['club','1','juedou'],
     ['diamond','1','juedou'],
     ['diamond','10','tao'],
     ['club','2','jiu'],
     ['spade','9','jiu'],  
     ['club','11','jiedao'],
     ['heart','13','tao'],
     ['diamond','12','wuxie'],
     ['spade','6','lebu'],
     ['club','8','bingliang'],
     ['spade','13','tiesuo'],
     ['heart','10','wuzhong'],
     ['club','3','guohe'],
     ['diamond','1','wanjian'],
     ['club','12','nanman'],
     ['club','1','shandian'],
     ['heart','5','wugu'],
     ['heart','1','taoyuan']],
      },'lol装备')
     }
     //---------------------------------------极端锦囊------------------------------------------//             
         if(config.jiduan){				
       	game.addCardPack({      
     list:    
     [['diamond','1','fulei'],
     ['heart','13','fulei'],
     ['spade','12','fulei'],
     ['spade','1','fulei'],
     ['heart','12','fulei'],
     ['spade','13','fulei'],
     ['club','1','fulei'],
     ['heart','1','fulei'],
     ['diamond','1','shandian'],
     ['heart','13','shandian'],
     ['spade','12','shandian'],
     ['spade','1','shandian'],
     ['heart','2','shandian'],
     ['diamond','12','shandian'],
     ['club','13','shandian'],
     ['heart','1','shandian'],
     ['club','6','lebu'],
     ['spade','6','lebu'],
     ['diamond','6','lebu'],
     ['spade','6','lebu'],
     ['heart','6','lebu'],
     ['club','6','lebu'],
     ['spade','6','lebu'],
     ['diamond','6','lebu'],
     ['club','4','bingliang'],
     ['spade','10','bingliang'],
     ['club','11','bingliang'],
     ['spade','12','bingliang'],
     ['club','8','bingliang'],
     ['spade','4','bingliang'],
     ['club','10','bingliang'],
     ['spade','11','bingliang'],
     ['spade','7','tiesuo'],
     ['club','7','tiesuo'],
     ['club','8','tiesuo'],
     ['spade','9','tiesuo'],
     ['club','10','tiesuo'],
     ['spade','12','tiesuo'],
     ['club','13','tiesuo'],
     ['spade','11','tiesuo']],  
     },'极端锦囊')
    }
    // ---------------------------------------挑战BOSS------------------------------------------//
		if(config.boss_){
			game.addCharacterPack({
				character:{
        boss_nashinanjue:['male','shen',20,['boss_dcmy','boss_winsong','boss_dengchang','boss_moqu','boss_kangxing','boss_ningshi','boss_xukong','boss_jixing','boss_penshe','boss_suanye','boss_jianci'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★★。它是一头十分恐怖的怪兽，他以前不叫纳什男爵。它曾经以全身的姿态出现在英雄联盟，他在英雄联盟无恶不作，于是嘉文三世，以及均衡教派的前任守护者，和无极剑圣的师傅也是无极剑道的前任守护者，一起结合将纳什男爵封印在召唤师峡谷的地底，它在召唤师峡谷的地底称王称霸，所以全部野怪都尊称他为纳什男爵，并帮他把捆住头的锁链勉强的破开，让他可以重见天日，于是便有了纳什男爵这个野怪。"],['qun','shu','wei','wu'].randomGet()],
        boss_taishici:['male','shen',6,['battle_song','boss_immune','boss_shenyou','boss_yingyi'],[['qun','shu','wei','wu'].randomGet(),'boss','bossallowed',"des:强度：★★★★。北海侠士。"],['qun','shu','wei','wu'].randomGet()],
         boss_jiaxu:['male','shen',7,['battle_song','boss_immune','boss_shenyou','boss_weimu','boss_wansha','boss_duce'],[['qun','shu','wei','wu'].randomGet(),'zhu','boss','bossallowed',"des:强度：★★★★。乱世之毒士。"],['qun','shu','wei','wu'].randomGet()],
         boss_liru:['male','wang',6,['boss_yuanjun','boss_qidun','boss_shipo','boss_tianwei','boss_zhengjiao','boss_suoshi','boss_yudan'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★☆。未得明主。"],['qun','shu','wei','wu'].randomGet()],         
         bossx_diaochan:['female','wang',7,['boss_yuanjun','boss_qidun','boss_lipan','boss_tianwei','boss_lianxiang','boss_xiyu','boss_xiuhua','boss_huitian'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★☆。闭月羞花。"],['qun','shu','wei','wu'].randomGet()],
         bossx_machao:['male','xian',8,['boss_yuanjun','boss_qidun','boss_tianwei','boss_tiedan','boss_poji','boss_yuling','boss_langzhao','boss_huitian'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★☆。西凉锦马超。"],['qun','shu','wei','wu'].randomGet()],
         boss_slvbu:['male','wang',9,['boss_liangguang','boss_qidun','wushuang','boss_tianwei','boss_fanfu','boss_shashen','boss_huitian'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★☆。武藝天下第一。"],['qun','shu','wei','wu'].randomGet()],
         boss_huaxiong:['male','wang',8,['boss_yuanjun','boss_qidun','boss_shanshi','boss_tianwei','boss_xiaoshous','boss_shuangren','boss_fubing','boss_huitian'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★☆。中国东汉末年董卓部下的武将，为董卓帐下都督。公元191年，关东军阀联合讨伐董卓，时任长沙太守的孙坚大破董卓军，华雄在此战中被孙坚一军所杀。"],['qun','shu','wei','wu'].randomGet()],
         boss_zuhe:['male','shen',12,['battle_song','boss_zh'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★。常规武将的各种技能组合"],['qun','shu','wei','wu'].randomGet()],
         boss_sunce:['male','shen',7,['battle_song','boss_dianji','boss_angyang'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★。孙策（175年—200年），字伯符，吴郡富春（今浙江富阳）人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期孙吴的奠基者之一。《三国演义》中绰号“小霸王”。为继承父亲孙坚的遗业而屈事袁术，后脱离袁术，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。"],'shu'],
        boss_simayi:['male','shen',9,['battle_song','boss_shenmou','boss_yuanlv','guicai'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★★☆。司马懿（179年—251年9月7日[1]），字仲达，河内郡温县孝敬里（今河南省焦作市温县）人。三国时期魏国杰出的政治家、军事家、战略家，西晋王朝的奠基人。曾任职过曹魏的大都督、大将军、太尉、太傅。是辅佐了魏国三代的托孤辅政之重臣，后期成为掌控魏国朝政的权臣。善谋奇策，多次征伐有功，其中最显著的功绩是两次率大军成功抵御诸葛亮北伐和远征平定辽东。对屯田、水利等农耕经济发展有重要贡献。73岁去世，辞郡公和殊礼，葬于首阳山。谥号宣文；次子司马昭封晋王后，追封司马懿为宣王；司马炎称帝后，追尊司马懿为宣皇帝，庙号高祖[2]。"],'wu'],
        boss_daqiao:['female','shen',15,['battle_song','boss_lizhi','boss_hongzhuang'],[['qun','shu','wei','wu'].randomGet(),'boss','bossallowed',"des:强度：★★★★☆。大乔（乔字古作“桥”），（180年代－？），庐江郡皖县（今安徽安庆潜山），中国汉末三国时期的女性，系乔公之女、孙策之妾、小乔之姊。"],'wei'],
        boss_zhoutai:['male','shen',6,['battle_song','boss_yuxue','boss_fenzhan'],[['qun','shu','wei','wu'].randomGet(),'boss',"des:强度：★★★★☆。字幼平，九江下蔡人，三国时期吴国武将。早年与蒋钦随孙策左右，立过数次战功。孙策讨伐六县山贼时，周泰胆气绝伦，保卫孙权，勇战退敌，身受十二处伤。有诗云：三番救主出重围，忠勇如公世所稀。遍体疮痍犹痛饮，血痕残酒满征衣。"],'wu'],
         boss_machao:["male","shen",12,['battle_song',"boss_pimi","boss_xionglie"],[['qun','shu','wei','wu'].randomGet(),'boss','bossallowed',"des:强度：★★★★。马超（176年－223年1月），字孟起，司隶部扶风郡茂陵（今陕西杨凌五泉镇）人，东汉卫尉马腾之子，汉末群雄之一，蜀汉开国名将。早年随父征战，平阳之战大破并州刺史高干和南匈奴呼厨泉的联军。后马腾入京，马超拜将封侯割据雍州，潼关之战被曹操击败，退守凉州。失败后依附张鲁，又转投刘备。带头上表刘协扶刘备称王，又辅佐刘备称帝。于章武二年十二月病逝（223年1月），终年47岁，追谥威侯。有阵中剑术“出手法”流传后世。"],'shu'],
         boss_tiaozhan:["male",'shen',7,["boss_hudui","tiaozhan_bianshen"],['boss',"des:强度：★★★"],'wu'],

         boss_kelian:["female","shu",8,["boss_qingxu","kelian","tiaozhan_bianshen2"],['hiddenboss',"des:强度：★★★☆"]],
         boss_tiaopi:["male","wu",9,["boss_qingxu","tiaopi","tiaozhan_bianshen3"],['hiddenboss',"des:强度：★★★☆☆"]],
         boss_yinxian:["male","qun",10,["boss_qingxu","yinxian","tiaozhan_bianshen4"],['hiddenboss',"des:强度：★★★☆☆☆"]],
         boss_huaji:["male","wei",11,["boss_qingxu","huaji","tiaozhan_bianshen5"],['hiddenboss',"des:强度：★★★★"]],        
        boss_fennu:["female","wu",12,["boss_qingxu","fennu","fennu1","tiaozhan_bianshen6"],['hiddenboss',"des:强度：★★★★☆☆"]],
        boss_yishunjianyiwang:["female","shen",3,["the_mass","boss_shunjian","boss_yiwang","boss_shuitie","boss_wanzun"],[['qun','shu','wei','wu'].randomGet(),'hiddenboss',"des:强度：☆☆☆☆。水的清澈，并非因为它不含杂质，而是在于懂得沉淀；心的通透，不是因为没有杂念，而是在于明白取舍。"]],
         boss_cwj:["female","shen",2,['battle_song',"boss_beifen","boss_bieli"],[['qun','shu','wei','wu'].randomGet(),"boss","bossallowed","des:强度：★★★★☆。蔡琰，字文姬，又字昭姬[1]。生卒年不详。东汉陈留郡圉县（今河南开封杞县）人，东汉大文学家蔡邕的女儿。初嫁于卫仲道，丈夫死去而回到自己家里，后值因匈奴入侵，蔡琰被匈奴左贤王掳走，嫁给匈奴人，并生育了两个儿子。十二年后，曹操统一北方，用重金将蔡琰赎回，并将其嫁给董祀。[2]蔡琰同时擅长文学、音乐、书法。《隋书·经籍志》著录有《蔡文姬集》一卷，但已经失传。现在能看到的蔡文姬作品只有《悲愤诗》二首和《胡笳十八拍》。"],'wei'],
         boss_simayan:["male","shen",3,['battle_song',"boss_tongyi","boss_shemian"],[['qun','shu','wei','wu'].randomGet(),"boss","bossallowed","des:强度：★★★★★。司马炎（236年－290年5月16日），字安世，河内温县（今河南省温县）人，晋朝开国皇帝（265年－290年在位）。晋宣帝司马懿之孙、晋文帝司马昭嫡长子、晋元帝司马睿从父。"],'zhu'],
         boss_jianwu:["male","shen",100,["victory","boss_xiushen","boss_pojia","boss_jianqi","boss_jianyu"],[['qun','shu','wei','wu'].randomGet(),"boss","des:强度：★★★☆。無敵是我，我就是無敵！劍術天下無雙！"],'wu'],
        BOSS_diaochan:["female","shen",7,['battle_song',"boss_biyue","boss_guose","boss_meihuo"],[['qun','shu','wei','wu'].randomGet(),"boss","des:强度：★★★★。中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。"],'qun'],
        BOSS_xuhuang:["male","shen",12,['battle_song',"boss_jieliang"],[['qun','shu','wei','wu'].randomGet(),"boss","des:强度：★★★☆☆。徐晃（？－227年），字公明，河东杨（今山西洪洞东南）人。三国时期曹魏名将。本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。樊城之战中徐晃作为曹仁的援军击败关羽，因于此役中治军严整而被曹操称赞“有周亚夫之风”。曹丕称帝后，徐晃被加为右将军，于公元227年病逝，谥曰壮侯。"],'wei'],
        BOSS_yuji:["male","shen",5,['battle_song',"boss_yaohuo"],[['qun','shu','wei','wu'].randomGet(),"boss","bossallowed","des:强度：★★★★。于吉（？-200年，一作干吉、干室）东汉末年黄老道代表人物之一，史书有两种说法：（1）认为其即《太平经》作者。《后汉书·襄楷传》：“顺帝时，琅邪宫崇诣阙，上其师干吉于曲阳泉水上所得神书百七十卷，皆缥白素朱介青首朱目，号《太平青领书》。”（2）认为其乃三国时道士，《三国志·孙策传》注引《江表传》：“时有道士琅邪于吉，先寓居东方，往来吴会，立精舍，烧香读道书，制作符水以治病，吴会人多事之。”后为孙策所杀。"],'wu'],
        BOSS_zuoci:["male","shen",20,['battle_song',"boss_piaomiao","boss_qimen","boss_dunjia"],[['qun','shu','wei','wu'].randomGet(),"boss","des:强度：★★★★★。左慈（156？--289？），字元放，汉族，安徽庐江郡人，东汉末年方士。少明五经，兼通星纬，学道术，明六甲，传说能役使鬼神，坐致行厨。见汉祚将尽，天下向乱，叹曰：“值此衰运，官高者危，财多者死。当世荣华，不足贪矣。”在安徽天柱山中得石室而精思。左慈授予葛玄道家真经数部。"],'qun'],
        BOSS_zhangfei:["male","shen",7,['battle_song',"boss_shemao","boss_nuxiao"],[['qun','shu','wei','wu'].randomGet(),"boss","des:强度：★★★★。张飞（？－221年），字益德[1]，幽州涿郡（今河北省保定市涿州市）人氏，三国时期蜀汉名将。刘备长坂坡败退，张飞仅率二十骑断后，据水断桥，曹军没人敢逼近；与诸葛亮、赵云扫荡西川时，于江州义释严颜；汉中之战时又于宕渠击败张郃，对蜀汉贡献极大，官至车骑将军、领司隶校尉，封西乡侯，后被范强、张达刺杀。后主时代追谥为“桓侯”。在中国传统文化中，张飞以其勇猛、鲁莽、嫉恶如仇而著称，虽然此形象主要来源于小说和戏剧等民间艺术，但已深入人心。"],'shu'],
         BOSS_zhanshen:["male","shen",8,['battle_song',"boss_chitu","shenwu","zhanshen"],[['qun','shu','wei','wu'].randomGet(),"boss","bossallowed","des:强度：★★★☆。吕布（？－199年2月7日[1]），字奉先，五原郡九原县人（今内蒙古包头九原区），东汉末年名将，汉末群雄之一。先后为丁原、董卓的部将，后与司徒王允合力诛杀董卓，旋即被董卓旧部李傕等击败，依附袁绍。与曹操争夺兖州失败后，吕布袭取徐州，割据一方。建安三年十二月（199年2月）吕布于下邳被曹操击败并处死。"],'qun'],
            BOSS_shenhua:["male","shen",0,['battle_song',"baonu","wushuang","feijiangx","shenshi","shensha","shenmie"],[['qun','shu','wei','wu'].randomGet(),"boss","des:强度：★★★☆☆。吕布（？－199年2月7日[1]），字奉先，五原郡九原县人（今内蒙古包头九原区），东汉末年名将，汉末群雄之一。先后为丁原、董卓的部将，后与司徒王允合力诛杀董卓，旋即被董卓旧部李傕等击败，依附袁绍。与曹操争夺兖州失败后，吕布袭取徐州，割据一方。建安三年十二月（199年2月）吕布于下邳被曹操击败并处死。"],'qun'],
       },
       skill:{
      boss_yingyi:{
      group:['boss_yingyi1','boss_yingyi2','boss_yingyi3','boss_yingyi4','boss_yingyi5','boss_yingyi6'],
      locked:true,
      unique:true,
      },
      boss_yingyi1:{
      audio:2,       
				trigger:{source:'damageBegin'},			
        forced:true,
        unique:true,
        filter:function(event,player){
        if(event.player==player)
        return false;
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        return event.card&&event.card.name=='sha';
       },
				content:function(){	
        trigger.num+=game.players.length-1;       
       }   
		  },
       boss_yingyi2:{
      audio:false,       
				trigger:{player:'shaBegin'},			
        forced:true,
        unique:true,
        popup:false,   
        filter:function(event,player){
        return player.name=='boss_taishici';
       },
				content:function(){	
        if(get.number(trigger.card)>trigger.target.hp){
        trigger.directHit=true;
        }        
       else{      
     trigger.target.loseMaxHp(Math.max(1,trigger.target.maxHp-get.number(trigger.card)))._triggered=null;
         }   
       },     		
			mod:{
				selectTarget:function(card,player,range){
					if(range[1]==-1) return;
         if(game.players.length>2){
					if(card.name=='sha') range[1]++;
         }
				},
       maxHandcard:function (player,num){
         return num+(2*(game.players.length-1));
        },
				cardUsable:function(card,player,num){
					if(card.name=='sha') return num+(game.players.length-1);
				},
      globalFrom:function(from,to,num){
					if(game.players.length>1) return num-(game.players.length-1);
			  },
			},		  	
		ai:{
                   noe:true,
                   threaten:8,                
                    effect:{
                    player:function (card,player,target){
                    if(card.name=='sha') return [1,Infinity];
                    if(card.name=='juedou') return [-10,-10];
          }
        }
      }
    },
     boss_yingyi3:{
      audio:3,       
				trigger:{player:['loseHpBefore','damageBefore']},			
        forced:true,
        unique:true,
        priority:30,
        filter:function(event,player){
        if(event.name=='damage'){        
        return !event.card||event.nature;
         }
        else{
        if(event.name=='loseHp'){
        return true;
          }
         }
         return false;         
       },
				content:function(){	
        trigger.finish();
      trigger.untrigger();       
       },
       ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'fireDamage')||get.tag(card,'poisonDamage')||get.tag(card,'thunderDamage')||get.tag(!card,'damage')){
							return [0,0];
						}
					}
				}
			},
		},
      boss_yingyi4:{
       skillAnimation:true,
				trigger:{player:'dying'},
				forced:true,				
				unique:true,
       audio:true,
       priority:100,
				content:function(){
						"step 0"
					player.judge(function(card){				
							if(card.name=='taoyuan'||card.name=='juedou') return -player.maxHp;					
						return 2;
					});
					"step 1"
					if(result.bool){        
        player.recover(2-player.hp);
          }
         }
				},
      boss_yingyi5:{
       	trigger:{global:'useCardToBefore'},
				forced:true,				
				unique:true,
        priority:100,
       filter:function (event,player){
      if(player==_status.currentPhase)
      return false;
      return event.target==player&&(get.type(event.card)=='trick'||get.type(event.card)=='delay');
        },
       content:function(){	
        trigger.finish();
      trigger.untrigger();       
      },
       ai:{                      
           	effect:{
					target:function(card,player,target,current){
         if(card.name!='wuzhong'&&card.name!='zengbin'&&(get.type(card)=='trick'||get.type(card)=='delay')) return [0,0];              
            }         
          }
        }
      },
      boss_yingyi6:{  
                audio:true,
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,
      priority:70,
      filter:function(event,player){
      return player.name=='boss_taishici';
      },                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
        if(!current.hasSkill('fengyin')){
        current.addTempSkill('fengyin',{player:'phaseBefore'});
           }					 
         }
					event.redo();
          }
        }
			 }, 
      boss_dengchang:{
      audio:true,       
				trigger:{player:'phaseDrawBegin'},			
        forced:true,
        unique:true,
        priority:-3,        
				content:function(){	
        trigger.num+=4;
        }
       },
      boss_penshe:{
       group:'boss_penshe1',
       locked:true,
       unique:true,
       },
       boss_penshe1:{
      audio:true,       
				trigger:{player:'shaBegin'},
				filter:function(event,player){
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
        unique:true,
        priority:-3,
				content:function(){	},
      mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return Infinity;
                },
             },
        ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					return true;					
				},       
			},
		},
      boss_suanye:{
       group:'boss_suanye1',
       locked:true,
       unique:true,
       },
       boss_suanye1:{  
                audio:2,

                trigger:{player:'loseEnd'},
			unique:true,
      forced:true,
      filter:function(event,player){
      return Math.random()>0.9;
      },                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'green');
        if(!current.hasSkill('fengyin')){
        current.addTempSkill('fengyin',{player:'phaseUseBegin'});
           }					 
         }
					event.redo();
          }
        }
			 },
       boss_jixing:{
       group:'boss_jixing1',
       locked:true,
       unique:true,
       },
       boss_jixing1:{   
      trigger:{player:['damageBegin','loseHpBegin']},			
      forced:true,
      unique:true,
      priority:-9998,
      filter:function(event,player){
      return event.num>player.maxHp*0.15;
      },    
			content:function(){
      trigger.num=Math.min(player.maxHp*0.15);

       }
     }, 
       boss_jianci:{
       group:'boss_jianci1',
       locked:true,
       unique:true,
       },
      boss_jianci1:{    
                audio:2,
                trigger:{source:'damageBegin'},
			unique:true,
      forced:true,
      filter:function(event,player){
      return Math.random()<=0.1;
      },                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
         if(!current.isTurnedOver()){         
         current.turnOver();
           }					 
         }
					event.redo();
        }
			 },      
     },
       boss_xukong:{       
       group:'boss_xukong1',
       locked:true,
       unique:true,
       },
       boss_xukong1:{   
                audio:2,
                trigger:{player:['useCard','respond']},
			unique:true,
      forced:true,
      filter:function(event,player){
      return Math.random()<=0.12;
      },                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'green');       current.damage(Math.max(1,Math.round(current.maxHp*0.25)),'poison');					 
         }
					event.redo();
        }
			 },
      ai:{
                   noe:true,
                   threaten:8,
                    player:1,
                    effect:{
          player:function (card,player){                  
          if(card.name!='tao') return [1,Infinity];          
           },
         },  
       },
     },
       boss_moqu:{
      group:['boss_moqu1','boss_moqu2'],
      locked:true,
      unique:true,
      },
      boss_moqu1:{
			skillAnimation:true,
			audio:3,
			trigger:{global:'phaseAfter'},
			forced:true,
     unique:true,
			filter:function(event,player){
				return player.hasSkill('boss_moqux');
			},
			content:function(){
				"step 0"				
				player.gainMaxHp();
				"step 1"
				player.recover();
       player.draw(3);
       player.removeSkill('boss_moqux');		
				var card=get.cardPile('sha','field');
				if(card){
					player.gain(card,'gain2','log');
				}
	  	},  
     ai:{
				effect:{
				target:function(card){
						if(get.tag(card,'damage')){
							return [0,-2];
           }
					}
				}
			},
		},
     boss_moqu2:{
			audio:3,
      unique:true,
			trigger:{global:'phaseBegin'},
			forced:true,
			filter:function(event,player){
      if(event.player==player)
      return false;
				return !player.hasSkill('boss_moqux');
			},
			content:function(){			 player.addTempSkill('boss_moqux',{player:'damageAfter'})
	  	},  
     ai:{
				threaten:2.2
			}
		},
      boss_moqux:{},
       boss_ningshi:{     
      trigger:{player:['damageBegin','loseHpBegin']},			
      forced:true,
      unique:true,
      audio:2,
      priority:-9999,      
			content:function(){
      trigger.num-=trigger.num*0.5;
       }      
      },
       boss_kangxing:{     
      trigger:{player:['linkBefore','turnOverBefore']},			
      forced:true,
      unique:true,
      audio:2,      
			content:function(){
      trigger.finish();
      trigger.untrigger();
     },   
    			mod:{
    				targetEnabled:function(card){
    					if(get.type(card)=='delay') return false;
    				}    		
    		 },               
       ai:{
              nodu:true,             
           	effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'turnOver')||get.tag(card,'link')) return [0,0,0,0];
           if(card.name=='tiesuo') [0,0];
               			}
               		}
               	},
               },
       _wang_name:{
				trigger:{global:['gameDrawAfter','phaseBegin','phaseBegin','triggerHidden','useCardToEnd']},
	    			forced:true,
	    			unique:true,
	    			popup:false,
    				silent:true,
    				filter:function(event,player){
	  				return (player.group=='wang'&&player.node.name.dataset.nature!='wang');
		    		},			
		    		content:function(){
            player.node.name.dataset.nature='wang';
             player.node.name.style.color="#EEEE00";
            }
            },
      _xian_name:{
				trigger:{global:['gameDrawAfter','phaseBegin','phaseBegin','triggerHidden','useCardToEnd']},
	    			forced:true,

	    			unique:true,
	    			popup:false,
    				silent:true,
    				filter:function(event,player){
	  				return (player.group=='xian'&&player.node.name.dataset.nature!='xian');
		    		},			
		    		content:function(){
            player.node.name.dataset.nature='xian';                           player.node.name.style.color=["#97FFFF"];            
            }
            },     
      wangzhan4:{
    mode:["identity"],
    trigger:{
        global:"phaseBegin",
    },
    init:function (player){
        player.storage.wz=false;
    },
    intro:{
        content:"limited",
    },
    skillAnimation:"epic",
    audio:2,
    mark:true,
    filter:function (event,player){
        if(player.storage.wz) return false;
        return event.player.identity=='zhu';
    },
    check:function (event,player){
        if(player.identity==event.player.identity) return Math.random()<0.5;
        var stat=get.situation();
        switch(player.identity){
            case 'fan':
                if(stat<0) return false;
                if(stat==0) return Math.random()<0.6;
                return true;
            case 'zhong':
                if(stat>0) return false;
                if(stat==0) return Math.random()<0.6;
                return true;
            case 'nei':
                if(event.player.identity=='fan'&&stat<0) return true;
                if(event.player.identity=='zhong'&&stat>0) return true;
                if(stat==0) return Math.random()<0.7;
                return false;
        }
    },
    prompt:function (event,player){
        return '焚心：是否与'+get.translation(event.player)+'交换身份？';
    },
    content:function (){
        game.broadcastAll(function(player,target,shown){
            var identity=player.identity;
            player.identity=target.identity;
            if(shown||player==game.me){
                player.setIdentity();
            }
            target.identity=identity;
            target.die()._triggered=null;
        },player,trigger.player,trigger.player.identityShown);
        player.line(trigger.player,'green');
        player.storage.wz=true;
        player.awakenSkill('wangzhan4');
    },
   },  
      boss_shenyou:{
                group:['boss_shenyou1','boss_shenyou2','boss_shenyou3','boss_shenyou4'],
       locked:true,
       unique:true,
       },
     boss_shenyou1:{  
                mode:['identity'],
                trigger:{global:'gameStart'},
			unique:true,
      forced:true,
      priority:70000,
      filter:function (event,player){
      return player.identity=='zhu';
      },  
			content:function(){      
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){					
         current.identity='fan';
				  current.setIdentity('fan');
				  current.identityShown=true;										        
					}
					event.redo();
				}
			},
			ai:{
				threaten:8.1

			}
		},
      boss_shenyou2:{
   trigger:{player:'turnOverBefore'},			
      forced:true,
      unique:true,      
			content:function(){     
					trigger.finish();
         trigger.untrigger();
				}
			},    
      boss_shenyou3:{				
				trigger:{global:'gameStart'},
				forced:true,
       popup:false,
       silent:true,
       unique:true,				
				content:function(){
					player.gain(get.cards(6))._trggered=null;
				}
			},    
      boss_shenyou4:{				
				trigger:{player:'phaseDrawBegin'},
				forced:true,       
       silent:true,
       unique:true,				
				content:function(){
       trigger.num+=5+player.maxHp-player.hp;
       }
      },
       boss_duce:{
       group:['boss_duce1','boss_duce2','boss_duce3','boss_duce4'],locked:true,unique:true,},      
      boss_duce1:{                 
                audio:3,
                trigger:{player:['phaseEnd','damageBegin']},
			unique:true,
      forced:true,                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
         if(current.countCards('he',{color:'red'})>0){
         var num=current.get('he',{color:'red'}).length;
         current.damage(num);
         current.chooseToDiscard(true,num,'he',{color:'red'});         
         }                    
					}
					event.redo();
				}
			},
       ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                    target:function (card,player,target,current){                  
                     if(card.name!='huogong'&&(card.name=='du'||get.type(card)=='trick')) return [1,Infinity];    
                 if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];     
                    },                
               },
           },
     },
     boss_duce2:{      
      audio:2,
			trigger:{source:'damageBefore'},     
     forced:true,
     unique:true,
     popup:false,
			content:function(){
      trigger.finish();
      trigger.untrigger();
      var ap=0;
				if(trigger.card&&trigger.card.name=='sha'){
					if(player.hasSkill('jiu')) ap++;
					if(player.hasSkill('luoyi2')) ap++;
					if(player.hasSkill('reluoyi2')) ap++;
         if(player.hasSkill('xinluoyi2')) ap++;
         if(player.hasSkill('boss_pimi')) ap+=Math.floor(Math.random()*999);  
if(player.hasSkill('wujin_skill')&&Math.random()<=0.35) ap+=2;
       }
      var ad=0;
				if(trigger.card&&trigger.card.name=='juedou'){
       if(player.hasSkill('boss_pimi')) ad+=Math.floor(Math.random()*999);
       }
      trigger.player.damage(trigger.num+ap+ad,'poison');
       }
      },
     boss_duce3:{
     skillAnimation:true,  
      audio:2,
			trigger:{global:'phaseBefore'},     
     forced:true,
     priority:-1,
     unique:true,
     filter:function (event,player){
      return event.player!=player;
    },   
			content:function(){
       'step 0'
     game.delay();
     trigger.player.judge(function(card){
     if(get.suit(card)=='heart') return -trigger.player.maxHp*0.5;
					return 0;
				});
				'step 1'
					if(result.bool==false){						       
        trigger.player.damage(Math.max(1,Math.ceil(trigger.player.maxHp*0.5)),'poison');
					}                
        }
       },
    boss_duce4:{   
      audio:3,
			trigger:{player:'useCardToBegin'},     
     forced:true,
     priority:-1,
     unique:true,
     filter:function (event,player){
      return event.card&&(event.card.name!='wuxie'&&(get.type(event.card)=='trick'||get.type(event.card)=='delay'))&&event.target!=player;
    },   
			content:function(){
     trigger.target.damage('poison');			               
        }
       },
    boss_wansha:{
    global:'boss_wansha2',   
    trigger:{
        global:"dying",
    },
    audio:2,    
    forced:true,
    priority:9999,
    unique:true,
     filter:function (event,player){
     return player==_status.currentPhase;
    },    
    content:function (){}},     
    		boss_wansha2:{
    			mod:{
    				cardSavable:function(card,player){
    					if(!_status.currentPhase) return;    					if(_status.currentPhase.hasSkill('boss_wansha')&&_status.currentPhase!=player){
    						if(card.name=='tao'||card.name=='jiu') return false;
    					}
    				}
    			}
    		},
      boss_weimu:{     
   trigger:{global:'useCard'},			
      forced:true,
      unique:true,
      audio:2,     
      filter:function (event,player,card){
      return event.player!=player&&(event.card.name=='nanman'||event.card.name=='wanjian'||event.card.name=='wugu'||event.card.name=='taoyuan')&&get.color(event.card)=='black';
     },     
			content:function(){
     },   
    			mod:{
    				targetEnabled:function(card){
    					if((card.name=='sha'||get.type(card)=='trick'||get.type(card)=='delay')&&
    						get.color(card)=='black') return false;
    				}    		
    		 },
       ai:{
           nodu:true,   
           playernowuxie:true,           
         }
      },
     boss_shipo:{
   trigger:{global:'useCardToBefore'},			
      forced:true,
      unique:true,     
      filter:function (event,player){
      return event.target==player&&get.type(event.card)=='trick'&&get.color(event.card)=='black'||event.target==player&&get.type(event.card)=='delay'&&get.color(event.card)=='black';
     },     
			content:function(){
     "step 0"
					player.judge(function(card){
						if(get.zhu(_status.event.player,'shouyue')){
							if(get.suit(card)!='spade') return 2;
						}
						else{
							if(get.color(card)=='black') return 2;
						}
						return -0.5;
					});
      "step 1"
					if(result.bool){
					trigger.finish();
         trigger.untrigger();
					}
				}
			},
     boss_zhengjiao:{
                audio:1,
                trigger:{
                    player:'phaseEnd',

                },
                direct:true,              
                content:function (){        
                "step 0" 
player.chooseTarget(get.prompt('boss_zhengjiao'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('h')>=2;
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);
                });
                "step 1"
                if(result.bool){

            game.delay();                   
player.logSkill('boss_zhengjiao',result.targets);              event.targets=result.targets

         if(result.targets.length>=1){    

   player.gainPlayerCard(event.targets[0],'h',Math.floor(event.targets[0].num('h')/2),true);               
       }                 
                else{
                    event.finish();         
                }           
             }                 
          },
      ai:{				
				result:{

					target:function(player,target){		
             if(target.countCards('h')>=2) 
            return player.countCards('h')*2;							
					}
				}
			},
			threaten:1.6
		},
     boss_suoshi:{
     audio:2,
			enable:'phaseUse',			
     selectTarget:1,
      usable:1,
      filter:function (event,player){      	
      return player.hp<=3;
      },
			filterTarget:function(event,player,target){
				if(player==target) return false;

				return true;
			},
     unique:true,
			content:function(){		
       player.line(target,'fire');
       if(!target.hasSkill('boss_suoshi2')){

       target.addSkill('boss_suoshi2');
         }
       },
     ai:{
				order:15,
				result:{
					player:function(player,target){						
						if(get.attitude(target,player)<0) return 10;
						return 0;
					},
					target:function(card,player){
						if(card.name=='wugu') return [1,4];
						}     				
				}      
			},
			threaten:1.4
		},
     boss_suoshi2:{
     group:'boss_suoshi3',
     trigger:{global:'damageBegin'},			
      forced:true,
      mark:true,
      popup:false,      
      unique:true,     
      filter:function (event,player){
      return event.source!=player;
			},      
			content:function(){
     trigger.source=player;          
     },
     marktext:"唆",
                intro:{
                    content:"该角色成为所有伤害的来源",
                }
              },
     boss_suoshi3:{
     trigger:{global:'phaseBefore'},			
      forced:true,
      mark:true,
      popup:false,      
      unique:true,     

      filter:function (event,player){
      return event.player.name=='boss_liru';
			},      
			content:function(){
     player.removeSkill('boss_suoshi2');
     player.removeSkill('boss_suoshi3');
     }
    },
     boss_yudan:{
				audio:2,
				enable:'chooseToUse',
				filter:function(event,player){        
					return player.hp<=3&&player.countCards('h',{color:'red'})>0;
				},
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'h',
				viewAs:{name:'tao'},
				prompt:'将一张♥♦手牌当桃使用',
				check:function(card){return 15-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('h',{color:'red'})>0;
					},
					threaten:2.5,

					save:true,
				}
			},
       boss_lipan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current!=player;
					})>1;
				},
				check:function(card){return 10-get.value(card)},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					if(player==target) return false;					
					if(ui.selected.targets.length==1){
						return target.canUse({name:'juedou'},ui.selected.targets[0]);
					}
					return true;
				},
				targetprompt:['先出杀','后出杀'],
				selectTarget:2,
				multitarget:true,
				content:function(){
targets[1].addSkill('boss_lipan2');			targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
					game.delay(0.5);
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length==0){
								return -3;
							}
							else{
								return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
							}
						}
					},
					expose:0.4,
					threaten:3,
				}
			},     
     boss_lipan2:{
     trigger:{

                    player:"juedouAfter",
                },
                forced:true,
                mark:false,
                popup:false,
                unique:true,

                content:function (){                      
                player.removeSkill('boss_lipan2');             
            },
         ai:{
       playernowuxie:true,
       }
      },              
     boss_lianxiang:{
    			audio:2,
    			enable:'phaseUse',
         filterCard:true,
         position:"he",
         usable:1,
         selectCard:1,
    			filterTarget:function(card,player,target){
    				return target!=player&&target.countCards('he')&&target.sex=='male';
    			},
    			check:function(card){
    				return  7-get.value(card);
    			},
    			content:function(){
    				"step 0" 
   				player.chooseCardButton(target,target.getCards('he')).set('filterButton',function(button){
    					return get.color(button.link)=='black','red';
    				});
    				"step 1"
    				if(result.bool){
    					player.gain(result.links[0]);
             target.$give(1,player);
    				}
    			},
    			ai:{
    				order:11,
    				result:{
    					target:function(player,target){
    						return -target.countCards('he');
    					}
    				},
    				threaten:1.7
    			},
    		},
      boss_xiyu:{
      mod:{
				targetEnabled:function(card,player,target){
if(player.hp>3) return;				if(card.name=='sha'&&get.color(card)=='black'||get.type(card)=='trick'&&get.color(card)=='black'||get.type(card)=='delay'&&get.color(card)=='black'){
						return false;           
					}
				}
			}
		},
      boss_xiuhua:{
      audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
       filter:function(event,player){
       return player.hp<=3;
       },

				content:function(){
					"step 0"
					var check;
					var i,num=game.countPlayer(function(current){
						return current!=player&&current.sex=='male'&&current.countCards('h')&&get.attitude(player,current)<=0;
					});
          check=(num>=1);     	player.chooseTarget(get.prompt('boss_xiuhua'),function(card,player,target){
						return target.countCards('h')>0&&player!=target&&target.sex=='male';
					},
         function(target){
						if(!_status.event.aicheck) return 0;
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					}).set('aicheck',check);
					"step 1"
					if(result.bool){
						player.logSkill('boss_xiuhua',result.targets);
           player.gainMultiple(result.targets);											
					}
					else{
						event.finish();
					}
					"step 2"
					game.delay();
				},
				ai:{
					threaten:2,
					expose:0.3
				}
			},
      boss_tiedan:{
				trigger:{player:'shaMiss'},
				direct:true,
				filter:function(event,player){
					return player.canUse('sha',event.target)&&player.hasSha();
				},
				content:function(){
					"step 0"
					if(player.hasSkill('jiu')){
						game.broadcastAll(function(player){
							player.removeSkill('jiu');
						},player);
						event.jiu=true;
					}					player.chooseToUse(get.prompt('boss_tiedan'),{name:'sha'},trigger.target,-1).logSkill='boss_tiedan';

					"step 1"
					if(result.bool);
					else if(event.jiu){
						player.addSkill('jiu');
					}
				}
			},
      boss_poji:{
    group:'boss_poji1',

   trigger:{player:'shaBegin'},			
      forced:true,
      unique:true,     
      filter:function (event){
      return get.color(event.card)=='red';
      },
			content:function(){
    trigger.directHit=true;
     },
     ai:{
                    noe:true,
                    threaten:3,                   
                    effect:{
            player:function (card,player,target){
         if(card.name=='sha'&&get.color(card)=='red') return 2;        if(card.name=='sha'&&get.suit(card)=='spade') return 1.5;
         },
           target:function(card,player,target,current){
      if(card.name=='tiesuo') return [0,0];
             },
        },
      },
    },
     boss_poji1:{
   trigger:{source:'damageBegin'},			
      forced:true,
      unique:true,     
      filter:function (event){
      return event.card&&(event.card.name=='sha'&&get.suit(event.card)=='spade')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},      
			content:function(){
     trigger.num++;
      }
     },
      boss_yuling:{
   		trigger:{player:'damageEnd'},
     direct:true,
     filter:function(event,player){
					return (event.source&&event.source.countCards('h')&&event.source!=player);
				},     
			content:function(){
player.logSkill('boss_yuling',trigger.source);
     	player.gainPlayerCard(true,trigger.source,trigger.num,'h')	;
   },
    ai:{
					effect:{
						target:function(card,player,target){							if(player.countCards('h')>1&&get.tag(card,'damage')){							
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
     boss_langzhao:{
                mod:{
                    globalFrom:function (from,to,current){
                   if(from.hp<5) return current-1;
        },
                    globalTo:function (from,to,current){
                  if(to.hp<5) return current+1;
        },
                },
                ai:{
                    threaten:1.5,
                },
            },
      boss_liangguang:{
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			content:function(){
				trigger.num+=4;
			}
		},
     boss_fanfu:{
				audio:2,
				trigger:{player:'damageBegin'},

				forced:true,
				filter:function(event,player){
					return (event.source!=undefined)&&event.source!=player;
				},
				priority:-1,
				content:function(){
       "step 0"
				trigger.source.judge(function(card){
					if(get.zhu(_status.event.player,'shouyue')){

						if(get.suit(card)!='spade') return 2;
					}
					else{
						if(get.color(card)=='red') return 2;
					}
					return -0.5;
				});
				"step 1"
				if(result.bool==false){					
		 player.addTempSkill('boss_pojia','shaEnd');
      game.delay(1.25);   player.useCard({name:'sha'},trigger.source,false);
           }                 
			  	}
	  		},
     boss_shashen:{
			unique:true,
			mod:{
				selectTarget:function(card,player,range){
					if(player.hp>5||range[1]==-1) return;
					if(card.name=='sha') range[1]+=3;
				},
			}
		},
      boss_yuanjun:{
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			content:function(){
				trigger.num+=2;
			}
		},
    boss_qidun:{
     group:'boss_qidun1',
			trigger:{target:'tiesuoBefore'},
			forced:true,
     unique:true,
			content:function(){
		 trigger.finish();
     trigger.untrigger();
		},
    mod:{
				targetEnabled:function(card,player,target){
					if(get.type(card)=='delay'){
						return false;
					}
				}
			}
		},
    boss_qidun1:{			
			trigger:{player:'phaseBefore'},
            forced:true,
            priority:1000,
            popup:false,
       filter:function(event ,player){
                return player.num('j')>0;
            },
            content:function(){
            player.discard(player.get('j'));
            player.skip('phaseJudge');                
            }
          },    
    boss_shanshi:{
     group:['boss_shanshi1','zhuque_skill','guding_skill','qinggang_skill','guanshi_skill','qilin_skill','fangtian_skill','zhangba_skill'],
			trigger:{player:'turnOverBefore'},
			forced:true,
     unique:true,
			content:function(){}},
    boss_shanshi1:{
   		trigger:{source:'damageBegin'},
     forced:true,
     filter:function(event){     
     return event.card&&(event.card.name=='sha')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},     
			content:function(){
     trigger.num+=player.num('e');
    },
    ai:{
                    noe:true,
                    threaten:3,
                    effect:{
                       target:function(card,player,target){
if(get.tag(card,'recover')&&player.hp==4) return [0,0];
           }
          }     
        }
       },
    boss_tianwei:{
     group:'boss_tianwei1',
			trigger:{player:'turnOverBefore'},
			forced:true,
     unique:true,
			content:function(){
		 trigger.finish();
     trigger.untrigger();
     }
		},
    boss_tianwei1:{
			trigger:{global:'gamDrawBegin'},
			forced:true,
     unique:true,
     filter:function(event,player){
     return player.name=='boss_huaxiong'||player.name=='boss_slvbu';
},
content:function (){
console.log(player);
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#930000">天威'+'</span>');
};
   }},
    boss_xiaoshous:{
   		trigger:{player:'damageEnd'},
     direct:true,
     filter:function(event,player){
					return (event.source&&event.source.countCards('e')&&event.source!=player);
				},     
			content:function(){
player.logSkill('boss_xiaoshous',trigger.source);
     	player.gainPlayerCard(true,trigger.source,'e')	;
    },
    ai:{
					effect:{
						target:function(card,player,target){							if(player.countCards('e')>1&&get.tag(card,'damage')){							
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
		boss_fubing:{
			trigger:{player:'phaseEnd'},
			forced:true,
     filter:function(event,player){
     return player.hp<=4;
     },
			content:function(){
				player.draw(2);
			}
		},
   boss_shuangren:{
    mod:{
           cardUsable:function (card,player,num){
           if(card.name=='sha') return num+1;
       }
      }
     },
    boss_huitian:{
			trigger:{player:'phaseBegin'},
			forced:true,
     filter:function(event,player){
     return player.name=='boss_slvbu'&&player.hp<=5||player.hp<=4||player.name=='bossx_diaochan'&&player.hp<=3;
     },
			content:function(){
				player.recover();
			}
		},
      boss_angyang:{
      group:'boss_angyang1',
      audio:4,  
                trigger:{source:'damageBegin'},
			unique:true,
      forced:true,
      priority:-25,
     filter:function(event,player){
     if(event.player==player)
     return false;

     return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},     
			content:function(){
         'step 0'
     trigger.num+=trigger.player.maxHp-trigger.player.hp;
         'step 1'			
         if(trigger.player.num('e')<1&&trigger.player.isAlive()&&!trigger.player.isMad()){
   player.line(trigger.player,'fire');
   trigger.player.goMad({player:'phaseAfter'});               					}
    else{
    player.line(trigger.player,'green');       
player.gain(true,trigger.player.get('e'));
         }					
				}
			},
      boss_angyang1:{
      audio:2,    
                trigger:{player:['shaBegin','juedouBegin']},
			unique:true,
      forced:true,   
			     filter:function (event,player){
      if(event.target==player)
      return false;
      return event.target.num('e')<=player.num('e');
      },
			content:function(){
    trigger.directHit=true;
      },
      mod:{
              globalFrom:function(from,to,num){
					return num-Infinity;
				 },
              cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+player.num('e');
       }},
     ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,

                    effect:{
                    player:function (card,player,target){
if(get.subtype(card)=='equip1'&&player.countCards('e','zhuge')>0&&player.countCards('h','sha')>0) return [0,-1];
     if(get.type(card)=='equip') return [1,3];    
     if(get.type(card)=='trick'&&card.name!='tiesuo') return [1,3];
     if(get.type(card)=='delay') return [1,3];                  
     if(card.name=='sha') return [1,Infinity];                                           
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
     target:function (card,player,target){     
     if(card.name=='tiesuo') return [0,0,0,-0.5];
           },
     target:function (card,player,target,current){
     if(get.subtype(card)=='equip1'&&target.countCards('e','zhuge')>0&&target.countCards('h','sha')>0) return [0,-1];
           }
         },
       },
     },      
       boss_dianji:{
      group:['boss_dianji1','boss_dianji2','boss_dianji3','boss_immune'],       
       audio:2,
			trigger:{
                    player:"loseEnd",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
                if(player.num('h')>=7)
                return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(7-player.num('h'));
              }
            },
      boss_dianji1:{    
       audio:1,
			trigger:{player:['phaseDrawBegin','turnOverBegin']},
       forced:true,
       unique:true,     
			content:function(){
      trigger.finish();
     trigger.untrigger();
     }},      
     boss_dianji2:{    
       audio:1,
			trigger:{global:'gameDrawAfter'},
       forced:true,
       unique:true,
       silent:true,
       priority:10,     
			content:function(){
      player.gain(get.cards(7-player.num('h')))._triggered=null;
      }},
      boss_dianji3:{    
       audio:1,
			trigger:{target:'lebuBegin'},
       forced:true,
       unique:true,     
			content:function(){
      trigger.finish();
     trigger.untrigger();
     },
      ai:{
                effect:{
                    target:function(card,player,target,current){
                        if(card.name=='lebu'||card.name=='bingliang') return [0,0,0,0];
                    }
                }
            }
        },
      boss_zh:{      
      group:['boss_zh1','boss_zh2','boss_immune'],
      locked:true,
      unique:true,
      },  
     boss_zh1:{
     audio:1,
			trigger:{global:'gameStart'},     
     forced:true,
     popup:false,      
     unique:true,
     silent:true,	     
			content:function(){       
player.addSkill(['wushuang','wusheng','paoxiao','beige','qixi','boss_juejing','jijiu','duanliang','liuli','luanji','jizhi','zhiheng','xiaoji','xuanfeng','yiji','reganglie','guose','wansha','qianxi','tiandao','boss_shemao','qinggang_skill','refankui','jiang'])._trggered=null;
     }
   },
     boss_zh2:{
     audio:1,
			trigger:{global:'phaseBegin'},     
     forced:true,
     popup:false,      
     unique:true,
     silent:true,    
			content:function(){
     player.sex=['male','female'].randomGet();
     player.update();
     },
     ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{    
    target:function(card,player,target,current){
                      if(get.type(card)=='equip')
                      return [1000,Infinity];
           },
                        player:function (card,player){  
            if(card.name=='sha') return [1,Infinity];
           if(card.name=='guanshi') return [1,3];                   
           },                 
         },
       },
     },
     boss_lizhi:{
     group:['boss_immune','boss_lizhi1'],
       audio:1,
			trigger:{player:['drawBegin','recoverBegin']},     
     forced:true,
     unique:true,    
			content:function(){
     trigger.num=trigger.num*3;     
     },
     mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        }},
      ai:{
      playernowuxie:true,
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                 player:function (card,player){
                if(card.name=='tiesuo') return [0,-9];
if(get.color(card)=='red'&&card.name!='tao') return [1,3];
     if(card.name=='guanshi') return [1,3];                    
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];      
           },
              target:function(card,player,target,current){
      if(card.name=='tiesuo') return [0,0];                 
           },
         },
       },
     },
      boss_lizhi1:{        
      audio:2,
			trigger:{player:'turnOverBefore',target:['shaBefore','juedouBefore','lebuBefore','bingliangBefore','tiesuoBefore']},     
     forced:true,    
     unique:true,     
			content:function(){
     trigger.finish();
     trigger.untrigger();
     },
     ai:{
     threaten:8,
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return [0,0];      
      if(card.name=='sha') return [0,0];
      if(card.name=='juedou') return [0,0];
      if(card.name=='lebu') return [0,0];
     if(card.name=='tiesuo') return [0,0,0,-1];
             }
            }
          },
       },
       boss_hongzhuang:{
                audio:1,
                trigger:{
                    player:['loseEnd','useCard','respond'],
                },
                direct:true,
                filter:function (event,player){  
                if(event.name=='useCard'||event.name=='respond'){
                    return get.color(event.card)=='red';
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
player.chooseTarget(get.prompt('boss_hongzhuang1'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('he')>=0;
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);

                });
                "step 1"
                if(result.bool){
            game.delay();                   
player.logSkill('boss_hongzhuang1',result.targets);              event.targets=result.targets
         if(result.targets.length>=1){    
   player.gainPlayerCard(event.targets[0],'he',2,true);     
event.targets[0].damage(Math.max(1,Math.round(event.targets[0].maxHp*0.3)));                    
       }                 
                else{
                    event.finish();         
                }           
        }       
            },
                ai:{         
                    threaten:6,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },
      boss_hongzhuang1:{
                audio:1,
                },        
      boss_yuanlv:{
      group:['boss_immune','boss_yuanlv1','boss_yuanlv2'],
      audio:2,
			trigger:{player:['phaseBegin','phaseEnd']},     
     forced:true,	     
			content:function(){
   var list=game.filterPlayer(function(target){
					return target!=player;
				});
				if(list.length){
					var target=list.randomGet();
					player.line(target,'green');
          if(target.num('he')<2){        
         player.draw(4);
         target.goMad({player:'phaseAfter'});        target.damage(Math.round(target.maxHp*0.5));
     }	player.gainPlayerCard(true,target,target.num('he'));}}},
    boss_yuanlv1:{
     audio:1,
			trigger:{player:['loseHpBegin','loseMaxHp','turnOverBegin']},
      forced:true,
      unique:true,   
			content:function(){
     trigger.untrigger();
      trigger.finish();
      }},
    boss_yuanlv2:{        
                audio:1,
                trigger:{player:'damageBefore'},
			unique:true,
      forced:true,
     filter:function(event){  
     return get.type(event.card)!='trick'||get.type(event.card)=='delay';				
			},   
			content:function(){     
     trigger.untrigger();
      trigger.finish();
     },
     ai:{
				effect:{
					target:function(card,damage){
						if(get.type(card)!='trick'||get.type(card)!='delay'){
							return [0,0];
						}
					}
				}
			}},
    boss_shenmou:{
    group:['boss_shenmou1','boss_shenmou2'],      
      audio:1,
			trigger:{player:['phaseDrawBegin']},     
     forced:true,
     unique:true,	     
			content:function(){
       'step 0'
     player.judge(function(card){
     if(get.number(card)<2)
return -1;
     if(get.number(card)==2)
return 0;
     if(get.number(card)==3)
return 0.5;
     if(get.number(card)==4)
return 1;
     if(get.number(card)==5)
return 2;
     if(get.number(card)==6)
return 3;
     if(get.number(card)==7)
return 4;
     if(get.number(card)==8)
return 5;
     if(get.number(card)==9)
return 7;
     if(get.number(card)==10)
return 9;
     if(get.number(card)==11)
return 11;
     if(get.number(card)==12)
return 12;
     if(get.number(card)==13)
return 13;

return 0; });
       'step 1'
     trigger.num=get.number(result.card);
   },
    ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
          player:function (card,player){                  
                     if(card.name=='sha') return [1,Infinity];
        if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
         },
       },
     },     
     boss_shenmou1:{        
      audio:1,
			trigger:{player:['phaseBefore']},     
     forced:true,
     priority:100,
     unique:true,    
			content:function(){
player.addSkill([['duanliang','jizhi'],['zhiheng','lianhuan'],['luanji','wansha']].randomGet(),{player:'phaseAfter'});
    }},
     boss_shenmou2:{        
      audio:2,
			trigger:{player:['phaseEnd']},
     forced:true,
     unique:true,    
			content:function(){
player.removeSkill(['duanliang','lianhuan','zhiheng','jizhi','luanji','wansha']);
    }},
     boss_MaxHp:{        
                audio:['fankui',2],
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'fire');
         player.recover(2)._triggered=null;          
         current.die();
         current.update();              
					}
					event.redo();
				}
			},
			},    
     boss_mp:{
    group:'boss_mp1',    
                audio:['liuli',2],
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
         player.gain(true,current.get('he'));         current.loseMaxHp(Math.floor(current.maxHp/2));         
         current.damage(current.maxHp);              
					}
					event.redo();
				}
			},
			},
    boss_mp1:{
     audio:['guose',2],
      trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,   
			content:function(){
player.draw(4+Math.floor(Math.random()*17));
     player.maxHp=Infinity;
     player.hp=Infinity;
     player.update();
    }},         
    boss_yuxue:{
     trigger:{player:['changeHp']},
			forced:true,
			mark:true,
			audio:4,
     unique:true,     
			init:function(player){   
				player.storage.boss_yuxue=0;
				game.addVideo('storage',player,['boss_yuxue',player.storage.boss_yuxue]);
			},
			content:function(){
				player.storage.boss_yuxue=player.maxHp-player.hp;
				game.addVideo('storage',player,['boss_yuxue',player.storage.boss_yuxue]);
      player.update();
			},
     marktext:"血",
			intro:{
				content:'mark'
		},
    mod:{
    maxHandcard:function (player,num){
   return num=player.storage.boss_yuxue;
         },
        },
    ai:{
           noe:true,
           player:1,
           effect:{         
          player:function (card,player){          
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           if(card.name=='du') return 1;                  
           if(card.name=='sha') return Infinity;
           if(card.name=='tao') return 0;
    }}}},
    boss_fenzhan:{
    group:['boss_fenzhan1','boss_fenzhan2','boss_immune'], 
                audio:2,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,      
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');
         current.goMad({player:'phaseBefore'});         
         current.damage(player.maxHp-player.hp);     
					}
					event.redo();
				}
			},			
    ai:{
         maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){								
								if(!target.hasFriend()) return;
								if(target.hp>=target.maxHp) return [1,get.tag(card,'damage')*3];
								if(target.hp>=target.maxHp-2) return [1,get.tag(card,'damage')*3];
								if(target.hp>=target.maxHp-3) return [1,get.tag(card,'damage')*3];
              if(target.hp>=target.maxHp-4) return [1,get.tag(card,'damage')*3];
              if(target.hp>=2) return [1,get.tag(card,'damage')*3.2];
              if(target.num('h')==0) return [1,get.tag(card,'damage')*99];                    
               }
            }
         }    
      }
   },
    boss_fenzhan1:{
			trigger:{player:'dieBefore'},
      forced:true,
     audio:['buqu',2],
      unique:true,     
			content:function(){     
       "step 0"
                event.cards=get.cards(1);
				player.showCards(event.cards,'奋战');
       "step 1"
         for(var i=0;i<cards.length;i++){					if(get.number(cards[i])==player.num('h')) return;
         }
         player.gain(cards,'gain2');  
         game.log(player,'获得了',cards);
         player.draw(Math.min(7,player.maxHp-player.hp));       
                trigger.untrigger();
                trigger.finish();    
}},
    boss_fenzhan2:{
			trigger:{player:'turnOverBegin'},
      forced:true,
      unique:true,    
			content:function(){
     trigger.untrigger();

      trigger.finish();
      }},
    yinxian:{
group:['wansha','yinxian1','yinxian2'],
			trigger:{global:['useCard','respond']},
      forced:true,
      unique:true,
     filter:function(event,player){
     if(event.player==player)
     return false;
				return Math.random()<=0.4;
			},
			content:function(){
      'step 0'
      game.delay();
      'step 1'
      trigger.player.line(player,'white');
				var list=[];
				for(var i=0;i<game.players.length;i++){
					if(player.canUse('nanman',game.players[i])){
						list.push(game.players[i]);
					}
				}
				list.sort(lib.sort.seat);

       if(Math.random()<=0.5){
				player.useCard({name:'wanjian'},list)._triggered=null;
       }
       else{
       player.useCard({name:'nanman'},list)._triggered=null;}
			}
		},
    yinxian1:{
			ai:{
        unique:true,
				unequip:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='wanjian'||arg&&arg.name=='nanman') return true;
					return false;
				}
			}
		},   
     yinxian2:{
			trigger:{global:['useCard','respond']},
      forced:true,
     unique:true,
     filter:function(event,player){
     if(event.player==player)
     return false;
				return Math.random()<=0.8;
			},
			content:function(){
     player.line(trigger.player,'fire');
     game.delay();
     var kp=trigger.player.get('he')
      if(kp.length){            
      player.gain(kp.randomGet());
      trigger.player.$give(1,player);     
     }}},
     fennu1:{
     trigger:{source:'damageEnd',player:'damageEnd'},
			forced:true,
			mark:true,		
      audio:2,
      unique:true,
			filter:function(event){
				return event.num>0;
			},
			init:function(player){   
				player.storage.fennu1=1;
				game.addVideo('storage',player,['fennu1',player.storage.fennu1]);

			},
			content:function(){
				player.storage.fennu1+=trigger.num;
				game.addVideo('storage',player,['fennu1',player.storage.fennu1]);
			},
     marktext:"怒",
			intro:{
				content:'mark'
			}
		},
     fennu:{
     group:['fennu2','fennu3','fennu4'],          
      trigger:{player:'phaseBegin'},			
      forced:true,
      unique:true,
			content:function(){
player.maxHp=Math.floor(player.maxHp*1.15);      
player.hp+=Math.max(1,Math.floor(player.maxHp*0.15));
      player.update();
      }},			
     fennu2:{
			trigger:{source:'damageBegin'},		
      forced:true,
     unique:true,
			content:function(){
     trigger.num+=player.storage.fennu1;
     }},
     fennu3:{
						audio:1,
						trigger:{player:['damageBegin','loseHpBegin']},
						forced:true,
						unique:true,
						priority:100,
           filter:function(event,player){    			 
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
					},
        fennu4:{
			trigger:{player:['damageBegin','loseHpBegin']},		
      forced:true,
      unique:true,      
      filter:function(event){
      return event.num>2;
      },
     priority:-100,
			content:function(){
     trigger.num=2;
     }},     
     huaji:{
    group:['huaji1','huaji2','huaji3'],
			audio:2,
		trigger:{player:['shaBegin','juedouBegin','shunshouBegin','guoheBegin','huogongBegin','wanjianBegin','nanmangBegin','tiesuoBegin','lebuBegin','bingliangBegin','jiedaoBegin','shengdongBegin','caomuBegin','qijiaBegin']},
			forced:true,	
     priority:Infinity,
     unique:true,
      filter:function(event,player){
      if(event.target==player)
      return false;    
      return Math.random()<=0.4;
      },		
			content:function(){
   trigger.target.damage(Math.max(1,Math.floor(trigger.target.maxHp*0.3)),['thunder','fire'].randomGet());
       }
		},
   huaji1:{
			audio:2,
		trigger:{target:['shaBegin','juedouBegin','wanjianBegin','nanmanBegin','lebuBegin','bingliangBegin','shunshouBegin','guoheBegin','huogongBegin','jiedaoBegin','tiesuoBegin','shengdongBegin','caomuBegin','qijiaBegin']},			forced:true,	
      priority:100,
      unique:true,
      filter:function(event){   
      return Math.random()<=0.4;
      },		
			content:function(){
trigger.player.loseHp(Math.max(1,trigger.player.maxHp-trigger.player.hp));
       }
		},
    huaji2:{
			audio:2,
		trigger:{global:['wuzhongBegin','jiuBegin','recoverBegin','wuxieBegin','jinchanBegin','zengbinBegin','wuguBegin']},
			forced:true,	
      priority:100,
      unique:true,
      filter:function(event,player){  
      if(event.player==player)  
      return false;
      return Math.random()<=0.75;
      },		
			content:function(){
      player.line(trigger.player,'green');
     trigger.finish();
      trigger.untrigger();
      player.recover()._triggered=null;
      player.draw(3);
       }
		}, 
  huaji3:{
			audio:2,
		trigger:{global:['damageBegin']},
			forced:true,	
      priority:99,
      unique:true,      
      filter:function(event,player){  
      if(event.player==player)  
      return false;
      return true;      
      },		
			content:function(){
     trigger.source=trigger.player;
     }},    
    diyjianxiong:{
			mode:['identity'],
			trigger:{global:'dieBefore'},
			forced:true,
      filter:function(event,player){
				return event.player!=game.zhu&&_status.currentPhase==player;
			},
			content:function(){
				trigger.player.identity='fan';
				trigger.player.setIdentity('fan');
				trigger.player.identityShown=true;
			}
		},
    the_mass:{
    audio:4,
    trigger:{player:'phaseBegin'},
			forced:true,	     
     unique:true,
     popup:false,          
      filter:function(event,player){            
      return !player.hasSkill('the_masslose')||Math.random()<=0.02;  
     },     	
			content:function(){
     player.addSkill('the_masslose');
      }},
    the_masslose:{},
    boss_shunjian:{     
trigger:{player:['phaseEnd']},			
      forced:true,
     priority:500,
     unique:true,
     animationStr:"瞬间",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
			content:function(){     
if(Math.random()<=0.3){     
  player.hp=player.maxHp;
  player.update();
        }
 else{
  player.draw(3)._triggered=null;
       }  
      }
     },
    boss_yiwang:{  
   group:['boss_yiwang0','boss_yiwang1','boss_yiwang2','boss_yiwang3'],
   locked:true,
   unique:true,
    },
   boss_yiwang0:{
   trigger:{player:['dieBefore']},			
      forced:true, 
      priority:Infinity,
      unique:true,
     animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
    audio:4,
     filter:function (event){
      return Math.random()<=0.989;
     },     
			content:function(){
        "step 0"
      trigger.finish();
      trigger.untrigger();
      game.delay(0.35);
        "step 1"           
        player.hp=2;
        player.update();
	     	},
    ai:{
                   noe:true,
                   threaten:8.2,
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
   boss_yiwang1:{   
   trigger:{player:'damageBefore'},			
      forced:true, 
      priority:100,
     unique:true,
     animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
     filter:function (event,player){  
      return (event.source==undefined)||event.source.num('he')>=player.num('he');    
     },     
			content:function(){
      trigger.finish();
      trigger.untrigger(); 
      player.draw(3)._triggered=null;
      if((trigger.source!=undefined)){
trigger.source.chooseToDiscard(true,'he',Math.max(1,Math.ceil(trigger.source.num('he')/2)))._triggered=null;
     }      
     }
   },  
   boss_yiwang2:{   
   trigger:{player:['loseMaxHpBefore','loseHpBefore']},			
      forced:true, 
      priority:Infinity,
      unique:true,
      animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),    
			content:function(){
      trigger.finish();
      trigger.untrigger(); 
      player.draw(3)._triggered=null;      
     }
   },
  boss_yiwang3:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
filter:function (event,player){
return player.name=='boss_yishunjianyiwang';
},
content:function (){
console.log(player);
player.init = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.addTempSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.clearSkills = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
}},
   boss_wanzun:{   
   trigger:{global:['phaseUseBegin']},
     forced:true,
     priority:9999,
     unique:true,
     animationStr:"挽尊",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),  
     filter:function (event,player){     
     return event.player!=player;
     },      
			content:function(){
      "step 0"
      player.line(trigger.player,['thunder','poison','fire'].randomGet());
      if(Math.random()<=0.25){
      trigger.player.loseHp(Math.round(trigger.player.maxHp*0.35)+player.maxHp);
      }    
    else{
player.draw(3)._triggered=null;
trigger.player.chooseToDiscard(true,'he',Math.max(2,Math.ceil(trigger.player.num('he')/2)))._triggered=null;   
trigger.player.damage(Math.max(1,Math.round(trigger.player.maxHp*0.35)+Math.ceil((player.maxHp-player.hp)/2)),['fire','thunder','poison'].randomGet())._triggered=null;    
      }  
     }
   },
   boss_shuitie:{   
   trigger:{global:['recoverBegin']},			
      forced:true, 
      priority:-100,
      unique:true,
      animationStr:"水帖",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
     filter:function (event,player){
     if(event.source==player)
     return false;
     return event.player!=player;
     },      
			content:function(){
     trigger.player.line(player,'green');         player.gainMaxHp(trigger.num)._triggered=null;
     player.draw(3*trigger.num)._triggered=null;
     player.update();
     },   
     },
    tiaopi:{
   group:['tiaopi1','tiaopi2'],
   trigger:{source:'damageBegin'},			
      forced:true, 
      priority:-12,
      unique:true,  
      filter:function (event,player){
      if(event.nature=='fire'||event.nature=='thunder')
      return false;
      return event.player!=player;
      },   
			content:function(){
trigger.num=trigger.num+Math.round(trigger.player.maxHp*0.5);     
      },
     },
     tiaopi1:{
   trigger:{player:'shaBegin'},			
      forced:true,
      unique:true,     
      filter:function (event){
      return event.card.nature=='fire'||event.card.nature=='thunder';
      },
			content:function(){
    trigger.directHit=true;
    },
    mod:{
    cardUsable:function(card,player){					if(_status.currentPhase==player&&card.name=='sha'&&card.nature=='thunder'||card.nature=='fire') return Infinity;
				}
			},
     },
    tiaopix:{
    trigger:{
                    source:"damageAfter",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('tiaopix');
            },
                marktext:"调",
                intro:{
                    content:"该角色的进攻距离和防御距离-3，手牌上限为1，直到造成伤害",
                },  
    mod:{		
				globalFrom:function(from,to,current){


					return current+3;
				},
       globalTo:function(from,to,current){
					return current-3;
				},
        maxHandcard:function (player){
            return 1;
       },
       },
       },
    tiaopi2:{  
                audio:1,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');	
        if(current.hasSkill('tiaopix')){
         current.loseHp();
         }
if(!current.isTurnedOver()&&Math.random()<=0.38){
         current.turnOver();         
         }										             
         current.addSkill('tiaopix');      
					}
					event.redo();
				}
			},
			},
    kelian:{
   group:['kelian1','kelian2'],  
                audio:1,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,      
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');
					current.chooseToDiscard(true,2,'he');
current.loseHp(Math.max(1,current.maxHp-current.hp));
					}
					event.redo();
				}
			},
			ai:{
				threaten:8.1
			}
		},
    kelian1:{    
			audio:2,
		trigger:{player:'damageBegin'},
			forced:true,	
      priority:-100,
     unique:true,
     filter:function(event){    
      return event.num>0;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();     
      player.loseHp();
       }
		},
    kelian2:{    
			audio:2,
		trigger:{source:'damageBegin'},
			forced:true,	
     priority:-Infinity,
     unique:true,
     filter:function(event){    
      return event.num>0;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();     
      trigger.player.loseHp(trigger.num+Math.floor(trigger.player.maxHp*0.5));
       }
		},
     boss_qingxu:{
    group:['boss_qingxu1','boss_qingxu2','boss_qingxu3'],
			audio:2,
		trigger:{target:['shaBegin','juedouBegin','huogongBegin','lebuBegin','bingliangBegin','guoheBegin','caomuBegin','shengdongBegin','qijiaBegin'],player:['loseHpBefore','damageBefore'],},
			forced:true,	
      unique:true,
      filter:function(event){    
      return Math.random()<=0.45;
      },		
			content:function(){     
      trigger.finish();
      trigger.untrigger();
      player.sex=['male','female'].randomGet();
      player.draw(3);
      player.update();
		 },
    ai:{
                   noe:true,
                   threaten:8.1,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return [1,Infinity];
                       if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
         },
       },
     },
    boss_qingxu1:{    
			audio:2,
		trigger:{player:'loseBegin'},
			forced:true,	
     unique:true,
     filter:function(event,player){                 
      return _status.currentPhase!=player&&Math.random()<=0.5;
    for(var i=0;i<event.cards.length;i++){
    if(event.cards[i].original=='h') return true;
     }
      return false;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();
      player.sex=['male','female'].randomGet();
      player.update();

       }
		},

   boss_qingxu2:{    
			audio:2,
		trigger:{player:'turnOverBegin'},
			forced:true,	
     unique:true,
     filter:function(event,player){
     if(player.isTurnedOver())
     return false;    
      return Math.random()<=0.45;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();
      player.draw(3);
       }
		},
   boss_qingxu3:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
filter:function (event,player){
return player.name=='boss_kelian'||player.name=='boss_huaji'||player.name=='boss_tiaopi'||player.name=='boss_yinxian'||player.name=='boss_fennu'||player.name=='boss_tiaozhan';
},
content:function (){
       console.log(player);
player.skip = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
}},
   boss_hudui:{ 
   group:['boss_hudui1','boss_hudui2','boss_hudui3','boss_qingxu3'],  
			audio:2,
		trigger:{player:['damageBefore','damageBegin','damageEnd','damageAfter']},
			forced:true,	 
     filter:function (event,player){  
  if(event.source!=player&&(event.source!=undefined)&&event.source.hp<=0)
      return false;
      return event.source!=player&&(event.source!=undefined);  
     },  

			content:function(){
      "step 0"
 player.addTempSkill('boss_pojia','shaEnd');
      "step 1"
      game.delay(1.35);         
player.useCard({name:'sha'},trigger.source,false);      		},
    ai:{
                   noe:true,                 
                    player:1,
                    effect:{
                   player:function (card,player){
       if(card.name=='du') return [1,Infinity];
     }}}},
   boss_hudui1:{    
			audio:2,
		trigger:{player:'loseHpBegin'},
			forced:true,
     unique:true,   
   	content:function(){
    trigger.finish();
    trigger.untrigger();
      player.draw();
       }
		},  
   boss_hudui2:{    
			audio:2,
		trigger:{source:'damageBegin'},
			forced:true,
     unique:true, 
   filter:function (event,player){   
   return _status.currentPhase!=player;
    },                          
   	content:function(){    
      "step 0"
     player.draw(player.maxHp-player.hp);
      "step 1"
    if(Math.random()<=0.35){
    player.recover(2);
     }   
       }
		},
    boss_hudui3:{    
			audio:2,
		trigger:{player:'damageBegin'},
			forced:true,
     unique:true,
   filter:function (event,player){   
   return event.source==player;
    },                          
   	content:function(){
     trigger.finish();
    trigger.untrigger(); 
       }
		},     
    tiaozhan_bianshen:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,     
      animationStr:"恭喜过关！",
			skillAnimation:true,	
			content:function(){
       "step 0"      
      game.delay(3);
       "step 1"
				player.init('boss_kelian');			
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   

      }	
		},
    tiaozhan_bianshen2:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,
animationStr:"恭喜过关！",
			skillAnimation:true,	
			content:function(){
      "step 0"
      game.delay(3.2);
      "step 1"
				player.init('boss_tiaopi');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},
    tiaozhan_bianshen3:{		
			unique:true,
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1, 
    animationStr:"恭喜过关！",
			skillAnimation:true,    	
			content:function(){
      "step 0"
      game.delay(3.4);
      "step 1"
				player.init('boss_yinxian');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,
      }	

		},
   tiaozhan_bianshen4:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,  
     animationStr:"恭喜过关！",
			skillAnimation:true,   	
			content:function(){
      "step 0"
      game.delay(3.6);
      "step 1"
				player.init('boss_huaji');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){

					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},
    tiaozhan_bianshen5:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,  
     animationStr:"恭喜过关！",
			skillAnimation:true,   	
			content:function(){
      "step 0"
      game.delay(3.8);
      "step 1"
				player.init('boss_fennu');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;

				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=2;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},
    tiaozhan_bianshen6:{		
			unique:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,     
     animationStr:"恭喜过关！",
			skillAnimation:true,	
			content:function(){
      "step 0"
      game.delay(4);
      "step 1"
				player.init('boss_yishunjianyiwang');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:8.1,   
      }	
		},    			   
		boss_pimi:{
			audio:2,
		trigger:{source:'damageBegin'},
			forced:true,	
     unique:true,
     priority:-99,
      filter:function(event,player){
      if(player.num('e')<event.player.num('e'))
      return false;
      return event.card.name=='sha'||event.card.name=='juedou';
      },		
			content:function(){
     trigger.num=trigger.num+Math.floor(Math.random()*999);
		},
    mod:{
    				globalFrom:function(from,to){
    					if(from.hp>to.hp||from.num('h')>to.num('h')||from.num('e')>to.num('e')) return -Infinity;
    				}
    		},     
    ai:{
                    noe:true,
                    threaten:8.3,                   
                    effect:{
            player:function (card,player,target){
         if(card.name=='du') return [1,Infinity];       
        if(card.name=='sha') return [1,Infinity];
        if(card.name=='shandian') return Infinity; 
        if(get.type(card)=='equip') return [1,3];        
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,Infinity];
         if(player.countCards('h',{name:'sha',nature:'fire'})) return 1.2;
        if(player.countCards('h',{name:'sha',nature:'thunder'})) return 1;
               },
          target:function (card,player,target){     
           if(card.name=='jiedao') return [1,3];       
           if(card.name=='wuxie') return -Infinity;          
           if(card.name=='bingliang') return -100;
           if(card.name=='lebu') return -100;
           if(card.name=='shunshou') return -100;
           if(card.name=='guohe') return -100;
           if(card.name=='huogong') return -100;
           if(card.name=='caomu') return -100;
           if(card.name=='shengdong') return -100;
        if(card.name=='qijia') return -100;                        
                },                  
                    },
                },
            },  
     boss_xionglie:{
     group:['boss_xionglie1','boss_xionglie2','boss_xionglie3','boss_xionglie4','boss_xionglie5','boss_xionglie6','boss_immune'],
     locked:true,
     unique:true,
     },
     boss_xionglie1:{
trigger:{player:['turnOverBegin','loseHpBegin','loseMaxHpBegin'], target:['bingliangBefore','shunshouBefore','guoheBefore','lebuBefore','huogongBefore','caomuBefore','qijiaBefore','shengdongBefore'],},
			forced:true,	
     priority:100,
     unique:true,
			content:function(){
     trigger.finish();
      trigger.untrigger();
      player.gainMaxHp();
       }
      },
      boss_xionglie2:{
			trigger:{player:'phaseDrawBegin'},
			forced:true,
     	priority:10,      
      unique:true,		
			content:function(){
     trigger.num=player.maxHp-player.num('h');
       }
      },
     boss_xionglie3:{
			trigger:{player:'recoverBegin'},
			forced:true,
     unique:true,
			content:function(){
      trigger.num=trigger.num+Math.floor((player.maxHp-player.hp)/2);
       }
      },
      boss_xionglie4:{
			trigger:{player:'damageBegin'},
			forced:true,
     priority:-75,
     unique:true,
     filter:function(event,player){
     return _status.currentPhase==player;
     },
			content:function(){
     trigger.finish();
      trigger.untrigger();
      player.gainMaxHp();
       }
      },
       boss_xionglie5:{
			trigger:{global:'recoverEnd'},
			forced:true,
     priority:15,
     unique:true,
     filter:function(event,player){
     if(player.hp==player.maxHp)
     return false;
     return _status.currentPhase!=player&&event.player!=player;		
     },
			content:function(){
     trigger.player.line(player,'green');
     player.recover();
       }
      },
      boss_xionglie6:{
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},            		
            boss_bieli:{
            group:'boss_immune',
                audio:2,
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                unique:true,
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
                "step 0"
                event.cards=get.cards(1);
				player.showCards(event.cards,'别离');
                "step 1"
         for(var i=0;i<cards.length;i++){					if(get.suit(cards[i])=='club'&&get.number(cards[i])==7) return;
         }
         player.gain(cards,'gain2');  
         game.log(player,'获得了',cards);
        trigger.untrigger();
                trigger.finish();
                if(player.hp<=0){
                    player.hp=0;
                    player.update();
                }                

            },                
                },
           boss_beifen:{
                audio:2,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
                return event.player!=player;
            },           	           
                 forced:true,
                priority:175,
                unique:true,           
                content:function (){               
                player.line(trigger.player,'white');                
                trigger.player.addTempSkill('fengyin',{player:'phaseAfter'});
                "step 0"
                trigger.player.judge();                
                "step 1"
                switch(get.suit(result.card)){

                    case 'heart':trigger.player.damage(get.number(result.card));break;
                    case 'diamond':player.gainPlayerCard(true,trigger.player,trigger.player.num('he'),'he');break;
                    case 'club':trigger.player.chooseToDiscard(true,trigger.player.num('he'),'he');break;
                    case 'spade':player.draw(3);if(!trigger.player.isTurnedOver()){trigger.player.turnOver();}break;
                  }
              },
            mod:{
                    maxHandcard:function (player,num){
                    return num+2*player.num('e');
                },
                },
         ai:{
                   noe:true,
                   threaten:8.2,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return [1,Infinity];
                       if(card.name=='guanshi') return [1,3];

                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
                    },
                    },
                },
     },               
        damageboss:{
        group:'damageboss1',
                        trigger:{
                            source:["damageBegin"],
                        },
                        forced:true,
                        popup:false,
                        priority:Infinity,
                        unique:true,
                  filter:function(event,player){
             if(player.hp==player.maxHp)
             return false;
             if(!player.hasSkill('boss_tongyi'))
             return false;
			      	return !event.card;
             },
              content:function (){             
player.recover(Math.max(1,trigger.num))._triggered=null;                    
            }},
      damageboss1:{
                        trigger:{
                            source:["damageAfter"],
                        },
                        forced:true,
                        popup:false,
                        priority:Infinity,
                        unique:true,
                  filter:function(event,player){           
             if(!player.hasSkill('boss_tongyi'))
             return false;

			      	return !event.card;
             },
              content:function (){
             "step 0"
if(trigger.player.maxHp==Infinity){
trigger.player.maxHp=8;
trigger.player.hp=8;
trigger.player.update();
}}},
      boss_shemian:{
      group:'boss_immune',
                audio:1,
                trigger:{
                    player:["damageBefore",
"loseHpBefore"],
                },
                forced:true,
                priority:-3000,
                unique:true,
                filter:function (event){
                    return event.num>1;
                },
                content:function (){
                trigger.finish();
                trigger.untrigger();              
                player.draw(trigger.num);
         },
            },
      boss_tongyi:{
                audio:1,
                trigger:{player:['phaseBegin','phaseEnd','damageEnd','loseHpEnd','turnOverEnd']},
			unique:true,
      forced:true,     
     priority:300,
			content:function(){
     player.addSkill('damageboss');
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');											player.gainPlayerCard(true,current,Math.max(1,Math.floor(current.num('he')/2)),'he');
current.damage(Math.max(1,Math.floor(current.maxHp/3)));        
					}
					event.redo();
				}
			},
			ai:{
				threaten:6
			}
		}, 
      boss_jianqi:{
     group:'boss_immune',    
			trigger:{source:'damageBegin'},
     forced:true,
     unique:true,
     audio:3,
     priority:-999,  
     skillAnimation:true,
     animationStr:"你们的技术太烂了！",
     animationColor:'metal',
     filter:function(event){
     return event.card&&(event.card.name=='sha')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
			content:function(){		
     trigger.num=trigger.num*(1+Math.floor(Math.random()*2));
     },
     ai:{
                   noe:true,
                    player:1,
                    effect:{
                        player:function (card,player){                  
                     if(card.name=='sha') return [1,Infinity];
                       if(card.name=='guanshi') return [1,3];

                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
                    },
                    },
                },
     },    
     boss_xiushen:{
     group:['boss_xiushen0','boss_xiushen1','boss_xiushen2','boss_xiushen3','boss_xiushen4'],
      locked:true,
      unique:true,
      },
     boss_xiushen0:{   
			trigger:{player:'phaseBegin'},
     forced:true, 
     audio:3,
     unique:true,    
			content:function(){		
     player.skip('phaseDraw');    	player.draw(4+Math.floor(Math.random()*4))._triggered=null;
    },
    mod:{
       maxHandcard:function (player){
         return 15;
        },       
		},
  ai:{
     threaten:8,
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return [0,0,0,0];
      if(card.name=='lebu') return 0.25;      
             }
            }
          },
       },
      boss_xiushen1:{
			trigger:{player:'turnOverBegin'},
			forced:true,
     unique:true,
     filter:function (event,player){     
     if(player.isTurnedOver())
      return false;  
       return Math.random()<=0.75;
      },   
			content:function(){
     trigger.finish();
     trigger.untrigger();
     player.draw(2)._triggered=null;
      }
      },
     boss_xiushen2:{
			trigger:{target:'lebuBegin'},
			forced:true,
      unique:true,
     filter:function (event,player){  
       return Math.random()<=0.75;
      },   
			content:function(){
     trigger.finish();
     trigger.untrigger();
      player.draw(2)._triggered=null;
      }
      },
      boss_xiushen3:{
      trigger:{player:['damageBegin','loseHpBegin']},
			forced:true,
     unique:true,
     priority:-99999,
     filter:function(event,player){
      return event.num>player.maxHp*0.05;
      },     
			content:function(){
     trigger.num=player.maxHp*0.05;
     }},
      boss_xiushen4:{
			trigger:{player:'loseMaxHpBegin'},
			forced:true,
      unique:true,

    	content:function(){
     trigger.finish();
     trigger.untrigger();      
      }
      },
       boss_jianyu:{                
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
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;

				}
			}
		},
    boss_liaoshang:{  		
			trigger:{player:'recoverBegin',},
			forced:true,
     priority:-1,
     unique:true,      
			content:function(){				trigger.num=Math.max(2,Math.floor((player.maxHp-player.hp)*0.12));
			},
		},
     victory:{   
      audio:5,  		
			trigger:{global:'gameDrawAfter',},
			forced:true,
     priority:-1,
     unique:true,      
			content:function(){   
				player.draw(2+Math.floor(Math.random()*3));
     player.addSkill('victory2');
			},
		},
     victory2:{   		
			trigger:{player:'changeHp',},
			forced:true,
     priority:Infinity,
     unique:true, 
     filter:function(event,player){
     return player.hp<5;
     },   
			content:function(){
        'step 0'
      player.logSkill('victory');         player.hp=(player.maxHp*0.25+Math.floor(Math.random()*player.maxHp*0.26));
      player.addSkill('boss_liaoshang');  
		 	player.draw(Math.ceil(player.hp)-player.num('h'));
        'step 1'     
      player.removeSkill('victory'); 
      player.removeSkill('victory2');
			},
		},
         boss_biyue:{
     group:'boss_dcmy',
			audio:['biyue',2],
      unique:true,
			trigger:{player:'phaseEnd'},
		forced:true,
			content:function(){
      "step 0"
      player.gainMaxHp()._triggered=null;
      "step 1"
      player.draw(Math.max(1,player.maxHp-player.hp))._triggered=null;     
      "step 2"
      game.delay();    
				player.recover(Math.ceil((player.maxHp-player.hp)/2))._triggered=null;  
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
							player.line(target,'thunder');			
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
             threaten:8.2,
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
           unique:true,	
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
     unique:true,
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
				player.draw(1+Math.floor(Math.random()*2))._triggered=null;
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
    boss_immune:{
    group:['boss_immune1','boss_immune2'],
    locked:true,
    unique:true,
     },
    boss_immune1:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
filter:function(event,player){
return player.name=='boss_simayan'||player.name=='boss_simayi'||player.name=='boss_machao'||player.name=='boss_cwj'||player.name=='BOSS_zuoci'||player.name=='BOSS_zhangfei'||player.name=='BOSS_zhanshen'||player.name=='boss_zhoutai'||player.name=='BOSS_xuhuang'||player.name=='boss_jianwu'||player.name=='boss_daqiao'||player.name=='BOSS_yuji'||player.name=='BOSS_diaochan'||player.name=='BOSS_shenhua'||player.name=='boss_jiaxu'||player.name=='boss_taishici';
},
content:function (){
console.log(player);
player.init = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.addTempSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.clearSkills = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
}},
    boss_immune2:{
    unique:true,
    forced:true,
		trigger:{player:'dieBefore'},
    filter:function(event,player){
    return player.hp>0;
    },    
    content:function(){
    trigger.finish();
     trigger.untrigger();
      }
    },
     boss_dcmy:{
    group:['boss_dcmy1','boss_dcmy2'],
     locked:true,
     unique:true,
     },
     boss_dcmy1:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
filter:function(event,player){
return player.name=='BOSS_diaochan'||player.name=='boss_nashinanjue';
},
content:function (){
console.log(player);
player.init = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.skip = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
player.clearSkills = function (all) {
player.popup('<span class="bluetext" style="color:	#B3EE3A">免疫'+'</span>');
};
}},
    boss_dcmy2:{
    unique:true,
    forced:true,
		trigger:{player:'dieBefore'},
    filter:function(event,player){
    return player.hp>0;
    },    
    content:function(){
    trigger.finish();
     trigger.untrigger();
      }
    },   
     shenshi:{
     group:'boss_immune',
     audio:1,
     unique:true,
			trigger:{global:['recoverBefore']},		
			filter:function(event,player){
      if(event.player==player)
      return false;
      if(player.storage.baonu<1)
      return false;
      if(event.player.hp<1)
      return false;     
      return _status.currentPhase!=player;
			},
     check:function (event,player){            
                return        ai.get.attitude(player,event.player)<1;
            },
			content:function(){
     player.line(trigger.player,'white');
     trigger.finish();
     trigger.untrigger();       
     player.draw(2+Math.floor(Math.random()*2));
     player.storage.baonu-=1;
     },    
		},
     feijiangx:{     
 group:'feijiangx2',     
			audio:1,
			trigger:{global:'gameDrawAfter'},
			forced:true,
			unique:true,   
     	priority:-100,  
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
        maxHandcard:function (player){
            return Infinity;
       },
       },
       },
     shensha:{
     audio:1,
     unique:true,
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
player.line(trigger.player,'fire');
player.gainPlayerCard(trigger.player,true,trigger.player.num('he'),'he');
        "step 1"
       game.delay();  
				trigger.player.die()._triggered=null;
		},
     ai:{
                    threaten:8.2,
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
				return player.storage.baonu>=7;
			},     
			skillAnimation:true,
			animationColor:'fire',
			mark:false,
     unique:true,
      usable:1,
			content:function(){     
				"step 0"							
				player.storage.baonu-=7;
				event.targets=game.filterPlayer();
				event.targets.remove(player);
				event.targets.sort(lib.sort.seat);
				event.targets2=event.targets.slice(0);
				player.line(event.targets,'fire');
				"step 1"
          if(event.targets.length){
         var            tl=event.targets.shift();                                     
        tl.damage(1+Math.floor(Math.random()*3));	
					event.redo(); 
        }     
				"step 2"
		 if(event.targets2.length){
			var cur=event.targets2.shift();
     if(!cur.isTurnedOver()){		
	            	cur.turnOver();
         }          
     if(cur&&cur.countCards('he')){
player.gainPlayerCard(cur,'he',true,cur.num('he'));         
        			}
       event.redo();
      }
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
      boss_jieliang:{
      group:'boss_immune',
			     audio:2,
            priority:-10,
            unique:true,
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
        player.line(trigger.player,'white');
         trigger.player.addTempSkill('fengyin',{player:'phaseAfter'});             
         if(trigger.player.maxHp>1){
trigger.player.loseMaxHp(Math.max(1,Math.floor(trigger.player.maxHp/3)))._triggered=null; 
}
           "step 1" 
 player.gainPlayerCard(true,trigger.player,trigger.player.num('he')-1);               
       },        
      ai:{      
                    noe:true,
                   threaten:8.1,
                    effect:{
                        player:function (card,player,target){
if(card.name=='sha') return [1,Infinity];     
if(card.name=='guanshi') return [1,3];     
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];       
                    },
                    },
                },
            },
      boss_yaohuo:{
      group:'boss_immune',
      audio:2,
			trigger:{player:'loseEnd'},
			forced:true,
      unique:true,
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
					player.line(target,'white');
					target.goMad({player:'phaseAfter'});
				}
       else{
       player.draw(1+Math.floor(Math.random()*2))._triggered=null;
      }
			},
    ai:{
                    threaten:9,
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
     priority:99999,
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
				current.chooseToDiscard(true,[Math.max(1,Math.ceil(current.num('he')/2))].randomGet());
current.damage('thunder',Math.max(1,Math.round(current.maxHp/4)));
					}
					event.redo();
				}
			},
			ai:{
				threaten:10
			}
		},
    boss_dunjia:{  
      group:["boss_dunjia2","boss_dunjia3","boss_immune"],    
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-1200000,
                unique:true,
                filter:function (event){
                    return event.num>1;
                },               
                content:function (){                
                trigger.num=1;                
         },
            },   
     boss_dunjia2:{
                trigger:{
                    player:["loseHpBefore","loseMaxHpBefore"]},
                forced:true,
                unique:true,
                priority:1000,             
                content:function (){         
                trigger.finish();
                trigger.untrigger();
                player.gainMaxHp()._triggered=null;
                player.recover()._triggered=null;  
         },
            },
       boss_dunjia3:{
                trigger:{
                    player:"loseEnd"},
                forced:true,
                priority:250,
                unique:true,
                filter:function (event,player){
             return _status.currentPhase!=player;
                },
                content:function (){                   
          player.draw(2*trigger.num)._triggered=null;          
         },
            },
            boss_qimen:{
                audio:2,
                trigger:{
player:"damageBegin",source:"damageEnd",},
                forced:true,                
                unique:true,
                filter:function (event,player){                
                    return event.num>0;
                },
                content:function (){       
                "step 0"
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
                    player.addSkill(link);
                
                    player.mark(link,{
                        name:get.translation(link),
                        content:lib.translate[link+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(link)+'】');  
               "step 1"
              player.draw(3)._triggered=null;
             if(trigger.source!=undefined&&trigger.source!=player){
player.gainPlayerCard(true,trigger.source,[Math.ceil(trigger.source.num('he')/2)].randomGet());
  }     
                },
                ai:{
                    noe:true,
                    effect:{
                        target:function (card,player){
if(card.name=='du') return [1,Infinity];
if(card.name=='tao') return [1,Infinity];                           if(card.name=='sha') return [1,Infinity];     
if(card.name=='guanshi') return [1,3];     
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];       
                    },
                    },
                },
            },
     	boss_shemao:{
      unique:true,
			enable:['chooseToUse','chooseToRespond'],
			filterCard:true,
			selectCard:2,
			position:'h',
			viewAs:{name:'sha'},
			filter:function(event,player){
				return player.countCards('h')>=2;
			},
			audio:1,
			prompt:'将两张手牌当【杀】使用或打出',
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
          group:['boss_nuxiao1','boss_immune'],
                audio:"ext:挑战BOSS:4",                
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                priority:100,
                unique:true,
                content:function (){
                "step 0"
              trigger.target.addTempSkill('fengyin',{player:'phaseAfter'});
                "step 1"               
               trigger.target.chooseToDiscard(true,2,'he');   
                "step 2"
                event.cards=get.cards(5);
                player.showCards(event.cards,'怒哮');
                "step 3"
                for(var i=0;i<cards.length;i++){
                    if(get.type(cards[i])!='equip'&&get.type(cards[i])!='basic'){
                        ui.discardPile.appendChild(cards[i]);
                        cards.splice(i--,1);
                    }
                }
                player.gain(cards,'gain2');
                game.log(player,'获得了',cards);
          },
                mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return Infinity;
                },
                },
                ai:{
                    threaten:8,
                    order:15,
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player,target){
          if(card.name=='zhangba') return -Infinity;  
         if(card.name=='guanshi') return -Infinity;  
        if(card.name=='sha') return [1,Infinity];
       if(card.name=='guding') return [1,Infinity];
        if(card.name=='huogong') return [-9,-9];
                 if(card.name=='zhuge') return -Infinity;
                if(card.name=='juedou') return [-9,-9];                
            },                  },
                },

            },
        boss_nuxiao1:{
			ai:{
				unequip:true,
       unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
        shenwu:{
            group:['boss_immune','wushuang','boss_qiangxi','boss_xuanfeng','boss_shenji'],             
                trigger:{
                  source:"damageEnd",
                },
                forced:true,
                priority:-20,
                popup:false,
                content:function (){},
              ai:{
                    threaten:8.1,
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
      filter:function(event,player){
				return player.get('e','1');
			},
			filterCard:function(card){    
				return get.subtype(card)=='equip1';
			},
			selectCard:1,
     unique:true,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){	
				target.damage()._triggered=null;

			},
			check:function(card){
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:8,
				result:{
					player:function(player,target){          
						if(player.getEquip(1)) return 9;
						if(player.hp>=target.hp) return 9;
						if(player.hp<=2) return 10;
						return 5;
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
		},
    boss_xuanfeng:{
                audio:1,
                trigger:{
                    player:["loseEnd","phaseDiscardEnd"],
                },
                direct:true,
                unique:true,
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
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },
   boss_shenji:{     
     trigger:{
        player:"useCard",
    },
    forced:true,
    unique:true,
    audio:2,
    filter:function(event,player){
    if(player.getEquip(1))
    return false;
    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&player.hasSkill('boss_shenji')&&event.targets.length>1;
    },
    content:function (){},			
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
     group:['zhanshen1','zhanshen2','zhanshen3','zhanshen4','zhanshen5'],locked:true,unique:true,},  
     zhanshen1:{
			trigger:{source:'damageEnd'},
			forced:true,
     audio:false,
     unique:true, 
			content:function(){
				player.recover(trigger.num);
       player.draw(trigger.num-(player.maxHp-player.hp));    
       }
        },
    zhanshen2:{
     audio:"ext:挑战Boss:2",
			trigger:{global:['phaseBegin']},
			forced:true,
     priority:20,
     unique:true,
			filter:function(event,player){
				return player.num('h')<=player.maxHp;
			},
			content:function(){
				player.draw(2);     
    }
    },    
    zhanshen3:{
               audio:"ext:挑战Boss:1",
                trigger:{
                    target:"lebuBegin",
                },
                forced:true,
                unique:true,
                content:function (){
                game.delay(0.5);
                trigger.untrigger();
                trigger.finish();           
            },
        ai:{     
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return 0.1;
      if(card.name=='lebu') return [0,0];      
             }
            }
          },
       },
       zhanshen4:{
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
    zhanshen5:{
						audio:1,
						trigger:{player:['damageEnd','loseHpEnd']},
						forced:true,
						unique:true,
						priority:120,
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
					},						
     boss_chitu:{
     unique:true,
			mod:{		
				globalFrom:function(from,to,num){
					return num-Infinity;
				      }
           }
	    	 	},
       },
       translate:{
            boss_nashinanjue:'纳什男爵',         
            boss_taishici:'神太史慈',          
            boss_jiaxu:'神贾诩',
            boss_liru:'王李儒',
            bossx_diaochan:'王貂蝉',
            bossx_machao:'仙马超',
            boss_slvbu:'王吕布',
            boss_huaxiong:'王华雄',
            boss_zuhe:'常规技能组合',
            boss_sunce:'神孙策',
            boss_simayi:'神司马懿',           
            boss_daqiao:"神大乔",
            boss_zhoutai:'神周泰',
            boss_yishunjianyiwang:"一瞬间丶遗忘",
            boss_tiaozhan:"你来打我呀",
            boss_huaji:"小稽",
            boss_fennu:"小怒",
            boss_kelian:"小怜",
            boss_tiaopi:"小皮",
            boss_yinxian:"小险",
            boss_machao:"神马超",
            boss_cwj:"神蔡文姬",
            boss_simayan:"神司马炎",
            boss_jianwu:"无双剑舞",
            BOSS_diaochan:"神貂蝉",           
            BOSS_xuhuang:"神徐晃",
            BOSS_yuji:"神于吉",
            BOSS_zuoci:"神左慈",
            BOSS_zhangfei:"神张飞",
            BOSS_zhanshen:"无双战神",
            BOSS_shenhua:"不败神话",
            xian:'仙',
            xianColor:'#0080ff',
            wang:'王',
            wangColor:'#FF8247',
      
        shenshi:"神弑",
        feijiangx:'飞将',
        feijiangx1:'飞将',       
        feijiangx2:'飞将',        
        shensha:"神杀",
        shenmie:"神灭",
        shenwu:"神武",
        boss_shenji:'神戟',
        zhanshen:'战神',
        zhanshen1:'战神', 
        zhanshen2:"战神",  
        zhanshen3:"战神",  
        zhanshen4:"战神",  
        zhanshen5:"战神",        
        boss_chitu:'赤兔',
       boss_qiangxi:"强袭",
       boss_xuanfeng:"旋风",
       boss_shemao:"蛇矛",
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
       boss_xiushen0:"修身",
       boss_xiushen1:"修身",
       boss_xiushen2:"修身",
       boss_xiushen3:"修身",
       boss_xiushen4:"修身",
       boss_jianyu:"剑雨",
       boss_pojia:"破甲", 
       boss_tongyi:"统一",
       boss_shemian:"赦免",
       boss_bieli:"别离",
       boss_beifen:"悲愤",
       boss_2bianshen:'变身',
       boss_xionglie:"雄烈",
       boss_xionglie1:"雄烈",
       boss_xionglie2:"雄烈",
       boss_xionglie3:"雄烈",
       boss_xionglie4:"雄烈",
       boss_xionglie5:"雄烈",
       boss_pimi:"披靡",
       boss_hudui:"互怼",
       boss_hudui1:"互怼",
       boss_hudui2:"互怼",
       boss_qingxu:"表情",
       boss_qingxu1:"表情",
       boss_qingxu2:"表情",
       tiaozhan_bianshen:"变身",
       tiaozhan_bianshen1:"变身",
       tiaozhan_bianshen2:"变身",
       tiaozhan_bianshen3:"变身",
       tiaozhan_bianshen4:"变身",
       tiaozhan_bianshen5:"变身",
       tiaozhan_bianshen6:"变身",
       kelian:"可怜",
       kelian1:"可怜",
       kelian2:"可怜",
       tiaopi:"调皮",
       tiaopix:"调皮",
       tiaopi1:"调皮",
       tiaopi2:"调皮",
       yinxian:"阴险",
       yinxian1:"阴险",
       yinxian2:"阴险",
       huaji:"滑稽",
       huaji1:"滑稽",
       huaji2:"滑稽",
       huaji3:"滑稽",
       fennu:"愤怒",
       fennu1:"愤怒",
       fennu2:"愤怒",
       fennu3:"愤怒",
       fennu4:"愤怒",

       boss_liaoshang:"疗伤",
       boss_yiwang:"遗忘",
       boss_yiwang1:'<span class="bluetext" style="color:	#6B8E23">遗忘'+'</span>',
       boss_yiwang2:'<span class="bluetext" style="color:	#53868B">遗忘'+'</span>',      
       boss_shuitie:"水帖",
       boss_wanzun:"挽尊",
       boss_shunjian:"瞬间",
       boss_yuxue:'浴血',
       boss_fenzhan:'奋战',
       boss_fenzhan1:'奋战',
       boss_fenzhan2:'奋战',
       boss_mp:'未出',
       boss_mp1:'占位',
       boss_shenmou:'深谋',
       boss_shenmou1:'深谋',       
       boss_yuanlv:'远虑',
       boss_yuanlv1:'远虑',
       boss_yuanlv2:'远虑',
       boss_lizhi:'丽质',
       boss_angyang:'昂扬',
       boss_angyang1:'<span class="bluetext" style="color:	#ff0000">昂扬'+'</span>',
       boss_hongzhuang:'红妆',       
       boss_dianji:'奠基',
       boss_dianji2:'<span class="bluetext" style="color:	#8c8c00">奠基'+'</span>',
       boss_lizhi1:'<span class="bluetext" style="color:	#B3EE3A">丽质'+'</span>',
       boss_hongzhuang:'红妆',
       boss_yuanjun:'援军',
       boss_qidun:'奇遁',
       boss_shanshi:'擅使',
       boss_shanshi1:'擅使', 
       boss_xiaoshous:'枭首',
       boss_tianwei:'天威',
       boss_shuangren:'双刃',
       boss_fubing:'伏兵',
       boss_huitian:'回天',
       boss_liangguang:'粮广',
       boss_fanfu:'翻覆',
       boss_shashen:'杀神',
       boss_tiedan:'铁胆',
       boss_poji:'破击',
       boss_yuling:'玉灵',
       boss_langzhao:'狼召',
       boss_lipan:'离叛',
       boss_lianxiang:'怜香',
       boss_xiyu:'惜玉',
       boss_xiuhua:'羞花',
       boss_shipo:'识破',
       boss_zhengjiao:'征缴',
       boss_suoshi:'唆使',      
       boss_suoshi2:'唆使',
       boss_yudan:'御丹',       
       boss_moqu:'魔化躯体',       
       boss_moqu1:'魔化躯体',
       boss_kangxing:'抗性皮肤',
       boss_ningshi:'男爵凝视',
       boss_xukong:'虚空腐败',
       boss_xukong1:'虚空腐败',
       boss_jianci:'尖刺打击',
       boss_jianci1:'尖刺打击',
       boss_penshe:'酸液喷射',
       boss_penshe1:'酸液喷射',
       boss_suanye:'酸液之池',
       boss_suanye1:'酸液之池',
       boss_jixing:'畸形强韧',
       boss_jixing1:'畸形强韧',
       boss_dengchang:'增益效果',
       boss_shenyou:'神佑',
       boss_shenyou1:'神佑',
       boss_shenyou2:'神佑',
       boss_shenyou3:'神佑',
       boss_shenyou4:'神佑',
       boss_wansha:'完杀',
       boss_weimu:'帷幕',
       boss_duce:'毒策',
       boss_duce1:'<span class="bluetext" style="color:	#8B8B00">毒策'+'</span>',
       boss_duce2:'<span class="bluetext" style="color:	#A9A9A9">毒策'+'</span>',
       boss_duce3:'<span class="bluetext" style="color:	#CD8500">毒策'+'</span>',
       boss_duce4:'<span class="bluetext" style="color:	#CDAD00">毒策'+'</span>',
       boss_yingyi:'英义',
       boss_yingyi1:'<span class="bluetext" style="color:	#00B2EE">英义'+'</span>',
       boss_yingyi2:'英义',
       boss_yingyi3:'英义',
       boss_yingyi4:'英义',      
       boss_yingyi5:'英义',
       boss_yingyi6:'<span class="bluetext" style="color:	#EE7942">英义'+'</span>',
       boss_yingyi_info:'<span class="greentext">锁定技'+'</span>，1、回合开始阶段，你令所有敌方角色的非锁定技失效，直到其回合阶段开始；2、当你使用【杀】指定一名角色为目标后，若该角色当前体力值小于此【杀】的点数，则此【杀】不可被闪避，否则该角色的体力上限扣减至此【杀】的点数，且至少扣减一点体力上限；3、你使用【杀】时可以额外指定一个目标；4、当你使用【杀】对其他角色造成伤害时，此【杀】伤害+X；出牌阶段，你使用【杀】的次数上限+X；当你计算与其他角色的距离时，始终-X；你的手牌上限+2*X，X为场上其他存活角色个数；5、当你受到附带属性、非来源于卡牌的伤害或体力流失时，防止之；6、你的回合外，任何锦囊均对你无效；7、当你进入濒死状态时，你进行判定，除非判定结果为【桃园结义】或【决斗】，否则你将体力值回复至2点',
       boss_shenyou_info:'<span class="greentext">锁定技'+'</span>，1、你的初始手牌数+6；2、当你的身份为“主公”时，你将所有其他角色的身份设为“反贼”(仅限于身份模式生效)；3、摸牌阶段，你额外摸5+X张牌，X为你已损失的体力值；4、你防止武将牌被翻面',
       boss_duce_info:'<span class="greentext">锁定技'+'</span>，1、其他角色的准备阶段，须先进行一次判定，若结果为♥，该角色受到你的X点毒属性伤害，X为其最大体力值的一半向上取整，且至少为1；2、你即将造成的伤害均视为毒属性伤害；3、当你使用一张锦囊牌指定其他角色为目标时，该角色受到你的一点毒属性伤害；4、回合结束阶段，你对所有牌里有♥或♦的敌方角色造成X点伤害，X为该角色牌里♥和♦牌的数量，然后其须弃置所有♥和♦牌；5、你的非延时锦囊不能被【无懈可击】响应',
       boss_weimu_info:'<span class="greentext">锁定技'+'</span>，你不能成为黑色【杀】和锦囊的目标；你不会受到【毒】的影响',     
       boss_wansha_info:'<span class="greentext">锁定技'+'</span>，在你的回合，其他角色不能使用【桃】或【酒】',
       boss_dengchang_info:'<span class="greentext">锁定技'+'</span>，摸牌阶段，你额外摸四张牌。',
       boss_jixing_info:'<span class="greentext">锁定技'+'</span>，当你即将受到多于X点伤害或体力流失时，你最多受到X点伤害或体力流失，X为你最大体力值的15%，你防止受到多余的伤害或体力流失。',
       boss_penshe_info:'<span class="greentext">锁定技'+'</span>，出牌阶段，你使用【杀】的次数无限制；你无视目标防具。',
       boss_suanye_info:'<span class="greentext">锁定技'+'</span>，锁定技，当你失去牌时，10%的几率令所有敌方角色的非锁定技失效，直到其下一回合出牌阶段开始。',
       boss_jianci_info:'<span class="greentext">锁定技'+'</span>，你造成伤害时，10%的几率将所有敌方角色正面朝上的武将牌翻面。',
       boss_xukong_info:'<span class="greentext">锁定技'+'</span>，当你使用或打出牌时，12%的几率对所有敌方角色造成X点毒属性伤害，X为该即将受到伤害角色最大体力值的25%，且至少为1。',
       boss_moqu_info:'<span class="greentext">锁定技'+'</span>，其他角色的回合，你没受到伤害，则在其回合阶段结束时，你增加一点体力上限，回复一点体力，然后摸三张牌，最后你从牌堆或弃牌堆中获得一张【杀】。',  
      boss_ningshi_info:'<span class="greentext">锁定技'+'</span>，你所受到的伤害或体力的流失减半。',
       boss_kangxing_info:'<span class="greentext">锁定技'+'</span>，你不受翻面、横置和【毒】效果的影响；你不能成为延时锦囊的目标。',           
       boss_shipo_info:'除你以外任意角色使用的锦囊对你生效以前，你可以进行判定，若为♣♠则该锦囊牌对你无效',      
       boss_zhengjiao_info:'回合结束阶段，你可以指定除你以外的任意一名角色，你立即获得该角色的一半手牌。（若目标角色的手牌数为单数，则向下取整数)——<span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于3时发动'+'</span>',
       boss_suoshi_info:'<span class="bluetext"style="color:	#FF8C00">出牌阶段，可指定除自己以外任意一名角色，至你的下一个回合开始前，该角色成为所有伤害的来源'+'</span>',
       boss_yudan_info:'<span class="bluetext"style="color:	#FF8C00">你可以将你的任意♥♦手牌当【桃】使用'+'</span>',
       boss_lipan_info:'出牌阶段，你可以弃一张牌并选择任意两名角色，若如此做，视为其中一名角色对另一名角色使用一张【决斗】，且此【决斗】不能被【无懈可击】响应，每回合限一次',
       boss_lianxiang_info:'出牌阶段，你可以弃掉一张牌，若如此做，你可以观看一次任意一名男性角色的手牌，并可以获得其中的一张——<span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于3时发动'+'</span>',
       boss_xiyu_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，你不能成为黑色【杀】和锦囊的目标'+'</span>',
       boss_xiuhua_info:'<span class="bluetext"style="color:	#FF8C00">回合结束阶段，你可以获得任意一名男性角色的一张手牌'+'</span>',
       boss_tiedan_info:'当你使用的【杀】被抵消时，你可以立即对相同的目标再使用一张【杀】',
       boss_poji_info:'<span class="greentext">锁定技'+'</span>，你使用红色的【杀】无法被闪避；你使用♠【杀】造成的伤害+1',
       boss_yuling_info:'你每受到1点伤害，可获得伤害来源一张手牌——<span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于4时发动'+'</span>',
       boss_langzhao_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，其他角色与你计算距离时始终+1；你与其他角色计算距离时始终-1'+'</span>',      
       boss_liangguang_info:'摸牌阶段，你可以额外摸四张牌',
       boss_fanfu_info:'对你造成伤害的来源立即判定，若为♣♠，则视为你对该目标使用一张无视防具的【杀】——<span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于5时发动'+'</span>',
       boss_shashen_info:'<span class="bluetext"style="color:	#FF8C00">你使用的【杀】可以额外指定一至三名目标'+'</span>',
       boss_yuanjun_info:'摸牌阶段，你可以额外摸两张牌',
       boss_qidun_info:'<span class="greentext">锁定技'+'</span>，你不受延时锦囊和【铁索连环】影响',
       boss_shanshi_info:'你视为拥有以下装备的技能【青釭剑】、【古锭刀】、【朱雀羽扇】、【方天画戟】、【贯石斧】、【丈八蛇矛】和【麒麟弓】；你使用【杀】造成的伤害为1+X，X为你装备区里牌的数量',
       boss_tianwei_info:'<span class="greentext">锁定技'+'</span>，武将牌不能被翻面或移出游戏',
       boss_xiaoshous_info:'你可以立即从对你造成伤害的来源处的装备区内获得一张牌',

       boss_shuangren_info:'出牌阶段，你可以额外使用一张【杀】——<span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于4时发动'+'</span>',
       boss_fubing_info:'<span class="bluetext"style="color:	#FF8C00">回合结束阶段，你可以摸两张牌'+'</span>',
       boss_huitian_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，回合开始阶段，回复1点体力'+'</span>',
       boss_hongzhuang1:'<span class="bluetext"style="color:	#ff2d2d">红妆'+'</span>',
       boss_angyang_info:'<span class="greentext">锁定技'+'</span>，1、你使用【杀】或【决斗】指定其他角色为目标时，若其装备区牌数不大于你，则其不可使用【闪】或【杀】响应此【杀】或【决斗】；2、当你使用【杀】或【决斗】对其他角色造成伤害时，伤害+X，X为其已损失的体力值，然后你获得其装备区里所有的牌，若其装备区里没有牌，你令其进入混乱状态，直到其下一回合结束；3、出牌阶段，你使用【杀】的次数上限+X，X改为你装备区里牌的数量；你的进攻距离无限', 
       boss_dianji_info:'<span class="greentext">锁定技'+'</span>，1、游戏开始时，你将手牌设为7张；2、摸牌阶段开始时，你不摸牌；若你的手牌数小于7，你将手牌补至7张；3、当你成为【乐不思蜀】或被翻面的目标时，你取消之',
       boss_hongzhuang_info:'每当你失去装备区里的牌或使用、打出一张红色牌时，你可以获得一名其他角色的两张牌，然后对其造成X点伤害，X为其最大体力值的30%(四舍五入取整)，且至少为1',

       boss_lizhi_info:'<span class="greentext">锁定技'+'</span>，1、你的摸牌数量和回复体力值为基础的三倍；2、你的手牌上限不会因体力值的减少而减少；3、当你成为【杀】、【决斗】、【乐不思蜀】、【兵粮寸断】、【铁索连环】或翻面的目标时，你取消之；4、你使用的非延时类锦囊牌不能被【无懈可击】响应',
       boss_yuanlv_info:'<span class="greentext">锁定技'+'</span>，回合开始和结束时，你随机获得一名其他角色的所有手牌和装备区，若该角色牌数小于2，你摸4张牌，并令其进入混乱状态，直到其下一回合结束，然后对其造成X点伤害，X为其最大体力值的一半四舍五入取整；2、你防止体力流失、失去体力上限、翻面或非锦囊牌的伤害',

       boss_shenmou_info:'<span class="greentext">锁定技'+'</span>，1、回合开始时，你随机获得以下其中两项技能:【<span class="bluetext" style="color:	#5F9EA0">断粮'+'</span>、<span class="bluetext" style="color:	#5F9EA0">集智'+'</span>】、【<span class="bluetext" style="color:	#5F9EA0">制衡'+'</span>、<span class="bluetext" style="color:	#5F9EA0">连环'+'</span>】或【<span class="bluetext" style="color:	#5F9EA0">乱击'+'</span>、<span class="bluetext" style="color:	#5F9EA0">完杀'+'</span>】直到回合结束；2、摸牌阶段，你进行一次判定，你的摸牌数改为判定牌的点数',      
       boss_mp_info:'该武将尚未推出，敬请期待！',
       boss_yuxue_info:'游戏开始时，你获得浴血标记，称为“血”，浴血标记数量等同于你已损失的体力值，标记数量随着你已损失体力值变化而变化；你的手牌上限等同于浴血标记的数量',
       boss_fenzhan_info:'<span class="greentext">锁定技'+'</span>，每当你处于濒死状态时，你亮出牌堆的一张牌，若此牌的点数不等于你的手牌数，则你不会死亡，并获得此牌，然后摸等同于浴血标记数量的牌，且不超过7；回合结束时，你令所有敌方角色进入混乱状态直到其回合开始，并对其造成等同于浴血标记数量的伤害；你武将牌被翻面时，你取消之', 
       tiaozhan_bianshen_info:'你死亡后，召唤小怜并立即进入其回合阶段',
       tiaozhan_bianshen2_info:'你死亡后，召唤小皮并立即进入其回合阶段',
       tiaozhan_bianshen3_info:'你死亡后，召唤小险并立即进入其回合阶段',
       tiaozhan_bianshen4_info:'你死亡后，召唤小稽并立即进入其回合阶段',
       tiaozhan_bianshen5_info:'你死亡后，召唤小怒并立即进入其回合阶段(其他角色阶段结束后，执行额外一个回合)',
       tiaozhan_bianshen6_info:'你死亡后，召唤一瞬间丶遗忘并立即进入其回合阶段',
       yinxian_info:'<span class="greentext">锁定技'+'</span>，1、其他角色使用或打出牌时，你有几率抽取其一张牌，并有40%几率视为对其他角色使用一张[万箭齐发]或[南蛮入侵]；2、你使用[万箭齐发]或[南蛮入侵]指定目标后，你无视其防具', 
    		fennu_info:'<span class="greentext">锁定技'+'</span>，1、游戏开始时，你获得1枚愤怒标记，每当你造成或受到一点伤害，你获得一枚愤怒标记；2、你造成伤害时，伤害+等同于愤怒标记的数量；3、每当你回合开始时，你的体力上限增加15%向下取整，体力值回复X，X为你最大体力值的15%向下取整，且至少为1；4、每当你在回合外受到伤害或流失体力时，当前回合结束，你执行一个额外回合；5、你每次受到伤害或流失体力时，最多承受2点伤害和最多流失2点体力（防止多余的伤害和体力流失)',
       huaji_info:'<span class="greentext">锁定技'+'</span>，1、每当其他角色使用以下牌指定你为目标时，你有几率令该角色流失X点体力，X为其已损失的体力值，且至少为1，(【杀】、【决斗】、【火攻】、【南蛮入侵】、【万箭齐发】、【铁索连环】、【借刀杀人】、【顺手牵羊】、【过河拆桥】、【乐不思蜀】、【兵粮寸断】、【草木皆兵】、【弃甲曳兵】、【声东击西】)，你使用这些牌指定其他角色为目标时，有几率令其受到X点属性伤害，X为其最大体力值的30%，且至少为1；2、当其他角色回复体力或使用【酒】、【无中生有】、【无懈可击】、【五谷丰登】、【增兵减灶】、【金蝉脱壳】时，你有75%几率取消之，然后你回复一点体力，并摸三张牌',
       boss_shunjian_info:'<span class="greentext">锁定技'+'</span>，回合结束时，你有30%的几率将体力回复至最大体力值；否则你摸三张牌',
       boss_yiwang_info:'<span class="greentext">锁定技'+'</span>，1、当你即将流失体力或失去体力上限时，你取消之，并摸三张牌；2、每当你即将受到伤害时，若来源目标牌的数量不小于你，你防止之，然后你摸三张牌并令其弃置一半的牌向上取整，且至少为1；3、当你处于濒死状态时，你有几率脱离濒死状态，并将体力值回复至2',
       boss_shuitie_info:'<span class="greentext">锁定技'+'</span>，每当其他角色回复一点体力(来源不为你)时，你增加一点体力上限，并摸三张牌',
       boss_wanzun_info:'<span class="greentext">锁定技'+'</span>，其他角色出牌阶段开始时，你有25%的几率令其失去X点体力，X为你最大体力值+其最大体力值的35%四舍五入取整；否则你摸三张牌，并令其弃置一半的牌向上取整，且至少为2，然后你对其造成X点属性伤害，X改为其最大体力值的35%四舍五入取整+你已损失的体力值的一半向上取整，且至少为1',
       tiaopi_info:'1、你对其他角色造成非属性伤害时，伤害+X，X为该角色最大体力值的一半(四舍五入取整)；2、出牌阶段，你属性【杀】的使用次数无限制，且不能被闪避；3、回合结束时，你将一枚调皮标记置于场上所有敌方角色的武将牌上，称为“调”，令其进攻距离和防御距离-3，手牌上限为1，直到其造成伤害；并有38%的几率将其武将牌翻面(不会响应背面朝上的角色)；若其武将牌上已有调皮标记，则令其失去一点体力',
       kelian_info:'<span class="greentext">锁定技'+'</span>，1、你受到不小于1点伤害时，均视为流失1点体力；2、你对目标造成不小于1点伤害时，均视为其失去X点体力，X为此伤害值+其最大体力值的一半(向下取整)；3、回合结束时，你令所有敌方角色弃置两张牌并失去X点体力，X为其已损失的体力值，且至少为1',
       boss_qingxu_info:'<span class="greentext">锁定技'+'</span>，1、当你成为【杀】、【决斗】、【火攻】、【兵粮寸断】、【乐不思蜀】、【过河拆桥】、【草木皆兵】、【声东击西】、【弃甲曳兵】的目标或(武将牌正面朝上)被翻面、即将受到伤害、流失体力时，你有45%几率防止之，然后你摸三张牌；2、当你回合外失去手牌时，你有50%的几率取消之',
       boss_hudui_info:'<span class="greentext">锁定技'+'</span>，1、其他角色对你造成伤害时，你可对来源目标连续使用四张无消耗的【杀】，此【杀】无视目标防具；2、当你即将流失体力时，你防止之，然后摸一张牌；3、当你在回合外造成伤害时，你摸X张牌，X为你已损失的体力值；若你已受伤，你有35%的几率回复两点体力；4、你不会受到来源为你的伤害',
       boss_xionglie_info:'<span class="greentext">锁定技'+'</span>，1、每当你成为【乐不思蜀】、【兵粮寸断】、【顺手牵羊】、【过河拆桥】、【火攻】、【草木皆兵】、【声东击西】、【弃甲曳兵】武将牌被翻面、流失体力、失去体力上限的目标或在回合内受到伤害时，你取消之，然后你增加一点体力上限；2、摸牌阶段，你改为摸X张牌，X为你最大体力值-当前手牌数；3、你回复体力时，回复额外+X，X为你已损失体力值的一半且向下取整；4、你的回合外，其他角色回复体力时，若你已受伤，你回复一点体力(此回复会受到条件3的影响)；5、你使用【杀】指定目标时，无视其防具',
       boss_pimi_info:'<span class="greentext">锁定技'+'</span>，1、你使用【杀】或【决斗】指定一名目标时，若该角色装备区牌数不大于你，则此【杀】或【决斗】伤害+X，X为0~999的随机值；若此为属性【杀】时，与该角色横置的其他角色传导此伤害时，伤害按X叠加；2、你计算与体力值、手牌数或装备区牌数小于你的角色距离始终为1',
       boss_bieli_info:'<span class="greentext">锁定技'+'</span>，每当你扣减体力后，若你体力值为0，你从牌堆亮出一张牌，若此牌不为♣7，你不会死亡，并获得此牌；若为♣7，你进入濒死状态',
       boss_beifen_info:'<span class="greentext">锁定技'+'</span>，1、其他角色出牌阶段时，你令其进行一次判定并令其的非锁定技失效直到其回合结束，若判定结果为：♥你对其造成X点伤害，X为判定牌的点数；♦你获得其所有装备区和手牌，♣你令其弃置所有装备区和手牌；♠你摸三张牌并令其武将牌翻面(若其武将牌背面朝上则不会响应此翻面)；2、你的手牌上限+你装备区牌数×2',
       boss_shemian_info:'<span class="greentext">锁定技'+'</span>，每当你即将受到多于1点伤害或流失多于1点体力时，你防止之，然后你摸等量的牌',
       boss_tongyi_info:'<span class="greentext">锁定技'+'</span>，回合开始阶段、结束阶段、受到伤害、流失体力或武将牌翻面时，你获得所有敌方角色的一半牌(向下取整)，且至少为1，并对其造成等同于其最大体力值1/3的伤害(向下取整)且至少为1，然后你回复X点体力，X为此伤害值，若其体力值和体力上限为无限，你将其体力值和体力上限设为8',
       boss_liaoshang_info:'<span class="greentext">锁定技'+'</span>，你回复体力时，改为回复X点体力，X为你已损失的体力值的12%(向下取整)，且至少为2',
       boss_pojia_info:'每当你使用【杀】指定一名目标角色后，你无视其防具',
       boss_jianyu_info:'<span class="greentext">锁定技'+'</span>，你的攻击范围无限，你的【杀】可以指定任意名角色为目标',
       boss_xiushen_info:'<span class="greentext">锁定技'+'</span>，1、摸牌阶段你不摸牌；2、回合开始时，你摸4~7张牌；3、当你武将牌正面朝上被翻面或成为【乐不思蜀】的目标时，你有75%的几率取消之，然后摸2张牌；4、你每次受到的伤害和流失的体力数值不会超过你最大体力值的5%；5、你防止失去体力上限；6、你的手牌上限始终为15',
       boss_jianqi_info:'<span class="greentext">锁定技'+'</span>，你的【杀】有几率造成两倍的伤害',

       victory_info:'<span class="bluetext" style="color:	#cd7f32">限定技'+'</span>，1、游戏开始时，你摸2~5张牌，然后随机播放一首战歌；2、当体力值低于5时，你将体力回复至最大体力值的25%~50%，然后获得技能<span class="bluetext" style="color:	#5F9EA0">【疗伤】'+'</span>；并将手牌数补至你当前体力值，再随机播放一首战歌，然后你失去技能<span class="bluetext" style="color:	#5F9EA0">【战歌】'+'</span>',
       boss_biyue_info:'<span class="greentext">锁定技'+'</span>，回合结束时，你体力上限+1并摸X张牌，X为你已损失的体力值，且至少为1，然后回复一半已损失的体力值且向上取整',
       boss_guose_info:'出牌阶段限3次，你可以选择一项：将一张♥或♦花色牌当做【乐不思蜀】使用；。选择完成后，你摸1~2张牌',
       boss_meihuo_info:'出牌阶段限1次，你可以指定1~2名其他角色获得其所有牌，并令其失去所有技能直到你回合结束，然后你获得之(你不能获得主公技，限定技，觉醒技)直到你下一回合开始',
       feijiangx_info:'1、游戏开始时，你的体力上限变为其他角色体力上限之和；2、其他角色回合阶段结束时，你额外执行一个回合；3、你的进攻距离和手牌上限为无限',
       shenshi_info:'你的回合外，其他角色回复体力时，若该角色体力值不低于1，你可以弃置一枚暴怒标记取消之，然后你摸2~3张牌',
       shensha_info:'其他角色在其回合内武将牌被翻面，你可以获得其所有手牌和装备区，然后令其立即死亡',
	    	shenmie_info:'出牌阶段，你可以弃置7枚暴怒标记，令场上所有其他角色受到1~3点伤害，然后你将其武将牌翻面并获得其所有手牌和装备区(不会响应背面朝上的角色)，每阶段限一次',
       boss_jieliang_info:'其他角色从牌堆获得牌时，你可以令其失去非锁定技直到其回合结束；若该角色体力上限大于1，你令其失去其最大体力值1/3的体力上限且向下取整；并获得其X张牌，X为其所有手牌和�备区牌的数量-1',
		boss_yaohuo_info:'<span class="greentext">锁定技'+'</span>，每当你失去一张手牌时，你可以令一名随机的其他角色进入混乱状态直到其下一回合结束，若没有可以选定的角色，你摸1~2张牌',
       boss_piaomiao_info:'<span class="greentext">锁定技'+'</span>，回合开始时，你令所有敌方角色弃置一半牌(向上取整)，且至少为1，并对其造成X点雷电伤害，X为其最大体力值的1/4(四舍五入取整)，且至少为1',
            boss_qimen_info:'<span class="greentext">锁定技'+'</span>，每当你造成或受到一次伤害时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外)；然后你摸三张牌，并获得对你造成伤害的其他角色的一半牌且向上取整',
            boss_dunjia_info:'<span class="greentext">锁定技'+'</span>，1、你每次受到伤害时，最多承受1点伤害（防止多余的伤害)；2、流失体力或体力上限时，你取消之，改为增加一点体力上限并回复一点体力；3、每当你在回合外失去一张牌，你摸两张牌',
       boss_shemao_info:'你可以将两张手牌当【杀】使用或打出',
       boss_nuxiao_info:'<span class="greentext">锁定技'+'</span>，出牌阶段，你使用【杀】无数量限制，每当你使用【杀】指定目标时，无视其防具，可令其非锁定技失效直到其下一回合阶段结束，并令其弃置2张牌，然后你亮出牌堆顶的5张牌，你获得其中的基本牌和装备牌并展示之',
       shenwu_info:'<span class="greentext">锁定技'+'</span>，你视为拥有技能<span class="bluetext" style="color:	#5F9EA0">【无双】'+'</span>、<span class="bluetext" style="color:	#5F9EA0">【强袭】'+'</span>、<span class="bluetext" style="color:	#5F9EA0">【旋风】'+'</span>和<span class="bluetext" style="color:	#5F9EA0">【神戟】'+'</span>；<span class="bluetext" style="color:	#5F9EA0">【无双】'+'</span>：你使用的[杀]或[决斗]需要两张[闪]或[杀]响应；<span class="bluetext" style="color:	#5F9EA0">【强袭】'+'</span>：出牌阶段，你可以弃一张装备区内的武器牌，然后你对你攻击范围内的一名角色造成一点伤害；<span class="bluetext" style="color:	#5F9EA0">【旋风】'+'</span>：当你失去装备区里的牌时，或于弃牌阶段弃置了一张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌；<span class="bluetext" style="color:	#5F9EA0">【神戟】'+'</span>：若你未装备武器，你使用【杀】或【决斗】指定的目标数上限+2，次数上限+1',
       boss_chitu_info:'<span class="greentext">锁定技'+'</span>，你的进攻距离无限',       
       zhanshen_info:'<span class="greentext">锁定技'+'</span>，1、当你对一名角色造成1点伤害后，若你已受伤，则你回复1点体力，否则你摸1张牌；2、一名角色回合开始时，若你的手牌数不大于体力上限，你可以摸两张牌；3、当你成为【乐不思蜀】的目标时，取消之；4、当你的武将牌背面朝上时，你可在体力值发生变化后将之翻回正面；5、每当你于回合外受到伤害或流失体力时，若你的体力值等于4或更低时，当前回合结束，你执行1个额外回合',
       },
        },'挑战BOSS')      
        }
      if(config.zbms){
			game.addCharacterPack({ 
    skill:{
     boss_winsong:{
    group:['The_Dawn','battle_name'],
     locked:true,
     unique:true,
     },
   The_Dawn:{
    audio:12,
    mode:['boss'],
    trigger:{player:'phaseBegin'},
			forced:true,	     
     unique:true,          
      filter:function(event,player){            
      return player.name=='boss_nashinanjue'&&(!player.hasSkill('The_Dawnlose')||Math.random()<=0.012);  
     },     	
			content:function(){
     player.addSkill('The_Dawnlose');
      }
     },
    The_Dawnlose:{},    
   battle_song:{
    group:['battle_sing','battle_name'],
     locked:true,
     unique:true,
     },
   battle_sing:{
    audio:5,
    mode:['boss'],
    trigger:{player:'phaseBegin'},
			forced:true,	     
     unique:true,          
      filter:function(event,player){            
      return !player.hasSkill('battle_singlose')||Math.random()<=0.015;  
     },     	
			content:function(){
     player.addSkill('battle_singlose');
      }
     },
    battle_singlose:{},
    battle_name:{
                trigger:{global:['loseEnd','gainEnd','phaseJudgeBegin','changeHp','phaseEnd','phaseBegin']},
			unique:true,
      forced:true,     
      popup:false,
      silent:true,      
			content:function(){       
       player.node.name.style.color=["#ea7500"
,"#0080ff","#009393","#ff7575","#ffd2d2","#949449","#b15bff","#02c874","#8cea00","#b766ad",":#c0c0c0","#9999cc","#ff9797","#01814a","#F5FFFA","#E9967A","#EEDC82","#BFEFFF","#98F5FF","#8B8B00","#FF83FA","#C6E2FF","#C0FF3E","#7EC0EE","#79CDCD","#00FF00","#00E5EE","#CDCD00","#DDA0DD","#EEEE00","#F08080","#D1EEEE"].randomGet();                  
         player.update();        
     }
		},
         },
        },'装逼模式')
      }
      if(config.zengqiang){   
   lib.arenaReady.push(function(){  
    //——————神趙雲——————//
        lib.translate.juejing_info='锁定技，你始终跳过你的摸牌阶段；准备阶段开始时，你摸X张牌，X为你已损失的体力值+3；你的手牌上限+3。',             
      lib.skill.juejing={
				mod:{
					maxHandcard:function(player,num){
						return 3+num;
					}
				},
				audio:true,
				trigger:{player:'phaseBefore'},				
				forced:true,
				content:function(){
        player.skip('phaseDraw');
				player.draw(3+player.maxHp-player.hp);				
			},
      ai:{
     threaten:1.7,
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return [0,0,0,0];
      if(card.name=='lebu') return 0.4;      
             }
            }
          },
       },
       //——————大喬小喬——————//
       lib.skill.luoyan.audio=4
       lib.skill.gushe.audio=2
       lib.skill.tianxiang.audio=2
       lib.skill.liuli.audio=2             
       lib.skill.tianxiang.audioname=['daxiaoqiao']
       lib.skill.liuli.audioname=['daxiaoqiao']
       lib.skill.luoyan={
         group:'luoyan1',
    			audio:false,
         popup:false,
    			trigger:{player:'phaseAfter'},
    			filter:function(event,player){    				
    				return player.name=='daxiaoqiao'&&(player.storage.xingwu||player.storage.xingwu.length);
    			},
    			forced:true,
         priority:-5,
    			content:function(){         
         player.addSkill(['liuli','tianxiang']);            
           }
         },
          lib.skill.luoyan1={      
    			audio:false,
    			trigger:{player:'phaseAfter'},
    			filter:function(event,player){    				
    				return player.name=='daxiaoqiao'&&(!player.storage.xingwu||!player.storage.xingwu.length);
    			},
    			forced:true,
         popup:false,
         priority:-10,
    			content:function(){               
         player.removeSkill(['liuli','tianxiang']);             
           }
         },
     //——————孫策——————//
     lib.skill.jiang={
    			audio:2,
    			trigger:{player:'useCard',target:['shaBefore','juedouBefore']},
    			filter:function(event,player){
    				if(event.card.name=='juedou') return true;
    				return event.card.name=='sha'&&get.color(event.card)=='red';
    			},
    			frequent:true,
    			content:function(){
           game.delay(0.7);
    				player.draw();
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target){
    						if(card.name=='sha'&&get.color(card)=='red') return [1,0.6];
    					},
    					player:function(card,player,target){
    						if(card.name=='sha'&&get.color(card)=='red') return [1,1];
    					}
    				}
    			},
    		},              
    		lib.skill.hunzi={
    			skillAnimation:true,
    			audio:2,
    			derivation:['yingzi','yinghun'],
    			unique:true,
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp==1&&!player.storage.hunzi;
    			},
    			forced:true,
    			priority:3,
    			content:function(){
    				player.loseMaxHp();
    				player.addSkill('yingzi');
    				player.addSkill('yinghun');
    				player.awakenSkill('hunzi');
    				player.storage.hunzi=true;
    				game.createTrigger('phaseBegin','yinghun',player,trigger);
    			},
    			ai:{
    				threaten:function(player,target){

    					if(target.hp==1) return 2;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(!target.hasFriend()) return;
    						if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                            _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
    					}
    				}
    			},
    		},
       //——————張飛——————//       
       lib.skill.paoxiao={
				audio:2,
       audioname:['re_zhangfei','guanzhang','xiahouba'],
				trigger:{player:'shaBefore'},
				filter:function(event,player){
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
				content:function(){	},
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					}
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(!get.zhu(player,'shouyue')) return false;
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				}
			},
     //——————諸葛連弩——————//
       lib.skill.zhuge_skill={
				audio:true,       
				trigger:{player:'useCard'},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&(get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
        priority:-3,
				content:function(){	},
       mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'){
							if(get.is.versus()){
								return num+3;
							}
							return Infinity;
						}
					}
				},
			},
     //——————方天畫戟——————//
     lib.skill.fangtian_skill={      
     trigger:{
        player:"useCard",
    },
    forced:true,
    unique:true,
    audio:true,
    filter:function(event,player){
    return event.card&&event.card.name=='sha'&&player.hasSkill('fangtian_skill')&&player.countCards('h')<1&&event.targets.length>1;
    },
    content:function (){},
				mod:{
					selectTarget:function(card,player,range){
						if(card.name!='sha') return;
						if(range[1]==-1) return;
						var cards=player.getCards('h');
						for(var i=0;i<cards.length;i++){
							if(cards[i].classList.contains('selected')==false)
								return;
						}
						range[1]+=2;
					}
				}
			},
     //——————青釭劍——————//
     lib.skill.qinggang_skill={     
     trigger:{
        player:"shaBefore",
    },
    forced:true,
    unique:true,
    audio:true,
    priority:1000,
    filter:function(event,player){
    var equip2=event.target.getEquip(2)
    return player.hasSkill('qinggang_skill')&&equip2&&equip2.name=='tengjia'||equip2&&equip2.name=='renwang'||equip2&&equip2.name=='bagua'||equip2&&equip2.name=='baiyin'||equip2&&equip2.name=='jingji'||(event.card.nature&&equip2&&equip2.name=='zhenfen')||equip2&&equip2.name=='huxinjing';
    },
    content:function (){
    },				
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				}
			},
     //——————神呂布——————//
      lib.character.shen_lvbu=['male','shen',5,['baonu','wumou','wuqian','shenfen'],['qun']],
			lib.translate.shenfen_info='出牌阶段，你可以弃置7枚暴怒标记，对场上所有其他角色造成1点伤害，然后你获得场上每名其他角色2张牌，最后你将你的武将牌翻面。每阶段限一次。',
      lib.translate.baonu_info='锁定技，游戏开始时，你获得2枚暴怒标记，每当你造成或受到1点伤害，你获得1枚暴怒标记。',			
			lib.translate.wuqian_info='出牌阶段，你可以弃置1枚暴怒标记，获得技能【无双】并无视所有防具，直到回合结束。',
     lib.translate.wumou_info='锁定技，每当你使用非延时类锦囊牌选择目标后，你选择一项：1.弃1枚“暴怒”标记；2.失去1点体力。',      
     lib.translate.baonu='狂暴',
     lib.skill.baonu.marktext='暴',
     lib.translate.wumou='无谋',     
     lib.skill.wumou={
						audio:2,
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event){
							return event.card.name!='wuxie'&&get.type(event.card)=='trick';
						},
						content:function(){
							'step 0'
							if(player.storage.baonu>0){
								player.chooseControl('选项一','选项二').set('prompt','无谋<br><br><div class="text">1:弃1枚“暴怒”标记</div><br><div class="text">2:失去1点体力</div></br>').ai=function(){
									if(player.storage.baonu>6) return '选项一';
									if(player.hp+player.countCards('h','tao')>3) return '选项二';
									return '选项一';
								};
							}
							else{
								player.loseHp();
								event.finish();
							}
							'step 1'
							if(result.control=='选项一'){
								player.storage.baonu--;
								player.syncStorage('baonu');
							}
							else{
								player.loseHp();
							}
						},
					},     
     lib.skill.shenfen={
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.storage.baonu>=7;
				},				
				skillAnimation:true,
				animationColor:['fire','thunder','metal'].randomGet(),
       usable:1,
				content:function(){
					"step 0"				
					player.storage.baonu-=7;
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.sort(lib.sort.seat);
					event.targets2=event.targets.slice(0);
					player.line(event.targets,['fire','thunder'].randomGet());
					"step 1"
					if(event.targets.length){
						event.targets.shift().damage();


						event.redo();

					}
					"step 2"
					if(event.targets2.length){
						var cur=event.targets2.shift();
						if(cur&&cur.countCards('he')){
						player.gainPlayerCard('he',cur,true,2);
						}
						event.redo();
					}         
       "step 3"
        player.turnOver();
				},       
				ai:{
					order:10,
					result:{
						player:function(player){
           if(player.isTurnedOver()){
return 10;
            }
							return game.countPlayer(function(current){
								if(current!=player){
									return get.sgn(get.damageEffect(current,player,player));
								}
							});
						}
					}
				}
			},
      lib.skill.wuqian2={
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name!='tao') return true;
					return false;
				}
			}
		},     
			lib.skill.wuqian={
				audio:2,
				enable:'phaseUse',
				derivation:'wushuang',
				filter:function(event,player){
					return player.storage.baonu>=1&&!player.hasSkill('wushuang')&&!player.hasSkill('wuqian2');
				},
				content:function(){
					player.storage.baonu-=1;

         player.addTempSkill('wuqian2','phaseAfter');                     player.addTempSkill('wushuang','phaseAfter');
        player.update();
				},
				ai:{
					order:5,
					result:{
						player:function(player){
							if(!player.storage.shenfen) return 0;
							var cards=player.getCards('h','sha');
							if(cards.length){
								if(game.hasPlayer(function(current){
									return (player.canUse('sha',current)&&
									get.effect(current,cards[0],player,player)>0&&current.hasShan());
								})){
									return 1;
								}
							}
							return 0;
						}
					}
				}
			},
      //——————神關羽——————//
      lib.character.shen_guanyu=['male','shen',6,['wushen','wuhun'],['shu']],
      lib.skill.wushen.group='wushen2',
      lib.translate.wushen_info='锁定技，你的每一张♥手牌都视为【杀】；你使用♥的【杀】时无距离限制，且无视目标防具。',			
			lib.translate.wuhun_info='锁定技，杀死你的角色进行一次判定，若结果不为【桃】或【桃园结义】，则该角色死亡。',
      lib.skill.wushen.filter=function(event,player){
      return player.countCards('h',{suit:'heart'})>0;
      }
      lib.skill.wuhun={
				trigger:{player:'dieBegin'},
				forced:true,
				popup:false,
				filter:function(event){
					return event.source!=undefined;
				},
				content:function(){
					trigger.source.addSkill('wuhun2');
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 0.5;
					},
					effect:{
						target:function(card,player,target,current){
							if(target.hp<=1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing')) return [1,-5];
								if(!target.hasFriend()) return;
								if(player.hp>2&&get.attitude(player,target)<=0) return [0,2];
								return [1,0,0,-player.hp];
							}
						}
					}
				}
			},
			lib.skill.wuhun2={
				audio:2,
				trigger:{global:'dieAfter'},
				forced:true,
				content:function(){
					"step 0"
					player.judge(function(card){				
							if(card.name=='tao'||card.name=='taoyuan') return -player.maxHp;					
						return 0.5;
					});
					"step 1"
					if(result.bool){
						player.die()._triggered=null;           
					}
         "step 2"         
         player.removeSkill('wuhun2');
				}				
			},
       lib.skill.wushen2={
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha'&&get.suit(arg&&arg)=='heart') return true;
					return false;
				}
			}
		},
    //——————神周瑜——————//
      lib.translate.yeyan_info='限定技，出牌阶段，你可以对一至三名角色造成2点火焰伤害，若你将对一名角色分配3点或更多的火焰伤害(最多4点)，你须弃置四张不同花色的手牌再失去3点体力。',
      lib.skill.yeyan={
				unique:true,
				enable:'phaseUse',
				audio:3,
				animationColor:'fire',
				skillAnimation:'legend',
				filter:function(event,player){
					return !player.storage.yeyan;
				},
				init:function(player){
					player.storage.yeyan=false;
				},
				filterTarget:function(card,player,target){
					var length=ui.selected.cards.length;
					return (length==0||length==4);
				},
				filterCard:function(card){
					var suit=get.suit(card);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.suit(ui.selected.cards[i])==suit) return false;
					}
					return true;
				},
				complexCard:true,
				mark:true,
				selectCard:[0,4],
				line:'fire',
				check:function(){return -1},
				selectTarget:function(){
					if(ui.selected.cards.length==4) return 1;
					if(ui.selected.cards.length==0) return [1,3];
					game.uncheck('target');
					return [1,3];
				},
				content:function(){
					player.awakenSkill('yeyan');
					player.storage.yeyan=true;
					if(cards.length==4){
           target.damage('fire',4);
						player.loseHp(3);						
					}
					else{
						target.damage(2,'fire');
					}
				},
				intro:{
					content:'limited'
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nofire')) return 0;
							if(lib.config.mode=='versus') return -1;
							if(player.hasUnknown()) return 0;
							return get.damageEffect(target,player);
						}
					}
				}
			}
      })    
    }
     lib.arenaReady.push(function(){				
				if(get.mode()!='boss'&&lib.config['extension_'+'★改版武将'+'_disableboss']){
					for(var i in lib.character){
						if(i.indexOf('boss_')==0){
							for(var j=0;j<lib.character[i][3].length;j++){ 
								lib.character[i][3][j]={};
								delete lib.character[i][3][j];
							}
							lib.character[i]=[];
							delete lib.character[i];	
						}
					}
				}
			});
      lib.arenaReady.push(function(){				
				if(get.mode()!='boss'&&lib.config['extension_'+'★改版武将'+'_disableboss']){
					for(var i in lib.character){
						if(i.indexOf('BOSS_')==0){
							for(var j=0;j<lib.character[i][3].length;j++){ 
								lib.character[i][3][j]={};
								delete lib.character[i][3][j];
							}
							lib.character[i]=[];
							delete lib.character[i];	
						}
					}
				}
			});
     lib.arenaReady.push(function(){				
				if(get.mode()!='boss'&&lib.config['extension_'+'★改版武将'+'_disableboss']){
					for(var i in lib.character){
						if(i.indexOf('bossx_')==0){
							for(var j=0;j<lib.character[i][3].length;j++){ 
								lib.character[i][3][j]={};
								delete lib.character[i][3][j];
							}
							lib.character[i]=[];
							delete lib.character[i];	
						}
					}
				}
			});     
},precontent:function (){    
},help:{"★改版武将":"<li>本次更新修复已知BUG。合并了★新版武将和挑战BOSS扩展，进行了武将分类。削弱了过强的武将/(想了解/极端锦囊/请长按查看卡牌详情)<li>对原有的神将包部分武将和孙笨进行了一些调整，其他详情自行探究<li>新增了LOL装备、对原部分哑巴技能和装备进行修改，例如【咆哮】|【诸葛连弩】、【青釭剑】、【方天画戟】目前已有声音，但你首先要有配音素材，可点击【伪增强】关闭<li>数据量略大，可能有BUG的存在。有任何问题BUG或有有趣的DIY武将想投稿请到贴吧作者的帖子里留言只要合口味了就有机会进入此扩展【动漫ecy勿扰】"},
    config:{
                  new_:{
                  name:'新版武将',
                  init:true
                  },
                  yxlm:{
                  name:'英雄联盟',
                  init:true
                 },
                 boss_:{
                 name:'挑战BOSS',
                 init:true
                 },
                 gdwx:{
                 name:'古典武侠',
                 init:false
                 },
                 news_:{
                 name:'神将&民间',
                 init:false
                 },
                 Nie_name:{
                 name:'武将前缀',
                 intro:'选择是否显示★武将前缀',
                 init:'hide',
                 item:{
                 hide:'隐藏','show':'显示'
                 }
                 },
                 disableboss:{
                 name:'非挑战模式禁用BOSS武将',
                 init:true
                 },
                 zengqiang:{
                 name:'伪增强',
                 init:true
                 },
                 lolzb:{
                 name:'lol装备',
                 init:false
                 },
                 jiduan:{
                 name:'极端锦囊',
                 intro:'包含卡牌：【闪电】*8、【浮雷】*8、【乐不思蜀】*8、【兵粮寸断】*8、【铁索连环】*8',
                 init:false
                 },
                 zbms:{
                 name:'装逼模式(仅限于BOSS模式)',
                 init:false
                 }
                },
   package:{
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
},files:{"character":[],"card":[],"skill":[]},editable:false}})