game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"文武英杰",editable:false,content:function (config,pack){ 

// ---------------------------------------Update------------------------------------------//   
    /*
    wwyj_update=[      	   
	   //'武将资料卡可点播武将阵亡配音的功能',
	   '新增武将【花落】、【大司马】、【藏海】、【瞬】',
	   //'',
	   //'计划更新：升麻、极彩色、灰太狠',
       'players://["wwyj_hualuo","wwyj_dasima","wwyj_rcanghai","wwyj_rshun"]',
    ];
    wwyj_version='更新日期：2024年01月19日';
    
    game.wwyj_update=function(){
       var wwyj=document.createElement('wwyj');
       wwyj.style.textAlign='left';
       var players=null,cards=null;
       for(var i=0;i<wwyj_update.length;i++){
       if(wwyj_update[i].indexOf('players://')==0){
       try{
         players=JSON.parse(wwyj_update[i].slice(10));
       }
       catch(e){
       players=null;
       }
       }
       else if(wwyj_update[i].indexOf('cards://')==0){
       try{
       cards=JSON.parse(wwyj_update[i].slice(8));
       }
       catch(e){
       cards=null;
       }
       }
       else{
       var li=document.createElement('li');
       li.innerHTML=wwyj_update[i];
       wwyj.appendChild(li);
       };
       };
       var dialog=ui.create.dialog('【文武英杰】的更新内容<br>'+wwyj_version,'hidden');
       dialog.content.appendChild(wwyj);
       if(players){
       dialog.addSmall([players,'character']);
       };
       if(cards){
       for(var i=0;i<cards.length;i++){
       cards[i]=[get.translation(get.type(cards[i])),'',cards[i]]
       };
       dialog.addSmall([cards,'vcard']);
       };
       dialog.open();
       var hidden=false;
       if(!ui.auto.classList.contains('hidden')){
       ui.auto.hide();
       hidden=true;
       };
       game.pause();
       var control=ui.create.control('确定',function(){
       dialog.close();
       control.close();
       if(hidden) ui.auto.show();
       game.resume();
       });
       };
       lib.skill._wwyj_update={
       trigger:{
          global:"gameStart"
       },
       priority:Infinity,
       forced:true,
       content:function(){              
			  if(lib.config.wwyj_version!=wwyj_version){
              game.wwyj_update();  
              alert('温馨提示：首次安装使用【文武英杰】时若发现本扩展的武将没图片或无法对本扩展的武将进行自由点将，请先开启【文武英杰】武将菜单右上角的总开关，再重启游戏');            
              game.saveConfig('wwyj_version',wwyj_version); 			  			  
       }
       },
       }      
       */
       game.wwyj_showChangeLog=function(){
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(100%)';
			dialog.style.width='calc(100%)';
			dialog.style.left='0px';
			dialog.style.top='0px';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			var list_changelog=[];
			for(var i in window.wwyjchangelog){
				list_changelog.push({
					data:i,
					info:window.wwyjchangelog[i],
				});
			};
			var interval=setInterval(function(){
				var num=20;
				if(num>list_changelog.length) num=list_changelog.length;
				for(var i=0;i<num;i++){
					var data=list_changelog[0].data;
					var info=list_changelog[0].info;
					var list=[];
					var list1=[];
					dialog.addText(data+'   ('+info.version+')'+'<br>',false);
					dialog.addText('<li>'+info.info,false);
					if(info.players.length>0){
						for(var j=0;j<info.players.length;j++){
							if(lib.character[info.players[j]]!=undefined) list.push(info.players[j]);
						};
					};
					if(list.length>0) dialog.addSmall([list,'character']);
					if(info.cards.length>0){
						for(var j=0;j<info.cards.length;j++){
							if(lib.card[info.cards[j]]!=undefined) list1.push(info.cards[j]);
						};
					};
					if(list1.length>0) dialog.addSmall([list1,'vcard']);
					list_changelog.remove(list_changelog[0]);
					if(list_changelog.length==0){
						clearInterval(interval);
					};
				};
			},100);
			ui.window.appendChild(dialog);
			var div=ui.create.div('.menubutton.round','×',function(){
				clearInterval(interval);
				dialog.delete();
				ui.window.removeChild(this);
				game.playwwyj('wwyj_show');
			});
			div.style.top='5px';
			div.style.left='calc(100% - 55px)';
			div.style['zIndex']=1000;
			ui.window.appendChild(div);
		};
		
		if(config.wwyj_updateicon){
        lib.skill._wwyj_updateicon={
        trigger:{global:'gameStart'},
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        priority:2020,        
    content:function (){   		
			if(event.isMine()){
		game.broadcastAll(function(player){    		  	
       	 var Animation = ui.create.div();
         Animation.setBackgroundImage('extension/文武英杰/wwyj_updateicon.png'); 	   									     	    
     	 Animation.style.left = '70%';   	    	 
         Animation.style.top = 'calc(80% - 90px)';       
         Animation.style.width = '80px';//120
         Animation.style.height = '80px';//150            
         Animation.style.backgroundSize = 'cover';       
         Animation.style['z-index']='2';
         ui.window.appendChild(Animation);
         ui.refresh(Animation);                          
         Animation.onclick=function(){
              game.playwwyj('wwyj_dansha');
			  //ui.click.configMenu();
		  	  game.wwyj_showChangeLog();		  			     		     
         }
         });     
			}		
         },     
     }	
     } 
 // ---------------------------------------group------------------------------------------//
        /*
	    //css：
	    lib.group.push('wwyjsha');
        lib.translate.wwyjsha='杀';   
        get.groupnature = function(group,method){
	    var nature;
			switch(group){
				case 'shen':nature='thunder';break;
				case 'wei':nature='water';break;
				case 'shu':nature='soil';break;
				case 'wu':nature='wood';break;
				case 'qun':nature='metal';break;
				case 'wwyjsha':nature='fire';break;
				default:nature = group;break;
			}
			if(method=='raw'){
				return nature;
			}
				return nature+'mm';
		}
		*/
	
       var style1=document.createElement('style');
        style1.innerHTML=".player .identity[data-color='wwyjsha'],";
        style1.innerHTML+="div[data-nature='wwyjsha'],";
        style1.innerHTML+="span[data-nature='wwyjsha'] {text-shadow: black 0 0 1px,rgba(255, 0, 204,1) 0 0 2px,rgba(255, 0, 204,1) 0 0 5px,rgba(255, 0, 204,1) 0 0 10px,rgba(255, 0, 204,1) 0 0 10px}";
        style1.innerHTML+="div[data-nature='wwyjsham'],";
        style1.innerHTML+="span[data-nature='wwyjsham'] {text-shadow: black 0 0 1px,rgba(255,128,0,1) 0 0 2px,rgba(255,128,0,1) 0 0 5px,rgba(255,128,0,1) 0 0 5px,rgba(255,128,0,1) 0 0 5px,black 0 0 1px;}";
        style1.innerHTML+="div[data-nature='wwyjshamm'],";
        style1.innerHTML+="span[data-nature='wwyjshamm'] {text-shadow: black 0 0 1px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px;}";
        document.head.appendChild(style1);
        
        lib.group.add('wwyjsha');
        lib.translate.wwyjsha='杀';
        lib.translate.wwyjsha2='杀';
        lib.groupnature.wwyjsha='wwyjsha';
	    /*十周年UI武将名背景*/
        var tenUi=document.createElement('style');
        tenUi.innerHTML=".player>.camp-zone[data-camp='wwyjsha']>.camp-back {background: linear-gradient(to bottom, rgb(204,0,204), rgb(136,0,204), rgb(102,0,204));}";        
        /*十周年UI势力*/       
        tenUi.innerHTML+=".player>.camp-zone[data-camp='wwyjsha']>.camp-name {text-shadow: 0 0 5px rgb(255, 0, 204), 0 0 10px rgb(255, 0, 204), 0 0 15px rgb(255, 0, 204);}";        
        document.head.appendChild(tenUi);
		
		if(config.wwyj_changeGroup){
			lib.arenaReady.push(function(){				
				for(i in lib.characterPack['wenwuyingjie']){
					if(lib.characterPack['wenwuyingjie'][i][1]=="wwyjsha"){
					    lib.characterPack['wenwuyingjie'][i][1]=["wei","shu","wu","qun","jin"].randomGet();					    
					}
				}
			});
		}
       
// ---------------------------------------Newtujian------------------------------------------// 		
	game.wwyj_showNewtujian=function(){
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(70%)';
			dialog.style.width='calc(70%)';
			dialog.style.left='155px';
			dialog.style.top='60px';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			var list_newtujian=[];
			for(var i in window.newtujian){
				list_newtujian.push({
					data:i,
					info:window.newtujian[i],
				});
			};
			var interval=setInterval(function(){
				var num=20;
				if(num>list_newtujian.length) num=list_newtujian.length;
				for(var i=0;i<num;i++){
					var data=list_newtujian[0].data;
					var info=list_newtujian[0].info;
					var list=[];
					var list1=[];
					if(info.players.length>0){
						for(var j=0;j<info.players.length;j++){
							if(lib.character[info.players[j]]!=undefined) list.push(info.players[j]);
						};
					};
					if(list.length>0) dialog.addSmall([list,'character']);
					
					dialog.addText(data+'   ('+info.version+')'+'<br>',false);
					dialog.addText('<li>'+info.info,false);
					
					if(info.cards.length>0){
						for(var j=0;j<info.cards.length;j++){
							if(lib.card[info.cards[j]]!=undefined) list1.push(info.cards[j]);
						};
					};
					if(list1.length>0) dialog.addSmall([list1,'vcard']);
					list_newtujian.remove(list_newtujian[0]);
					if(list_newtujian.length==0){
						clearInterval(interval);
					};
				};
			},100);
			ui.window.appendChild(dialog);
			var div=ui.create.div('.menubutton.round','×',function(){
				clearInterval(interval);
				dialog.delete();
				ui.window.removeChild(this);
				//game.playwwyj('wwyj_show');
				game.playAudio('..','extension','文武英杰','wwyj_show');	
			});
			div.style.top='60px';
			div.style.left='calc(100% - 155px)';
			div.style['zIndex']=1000;
			ui.window.appendChild(div);
		};	
        
    if(config.wwyj_newtujianicon){
        lib.skill._wwyj_newtujianicon={
        trigger:{global:'gameStart'},
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        priority:2020,        
    content:function (){   		
			if(event.isMine()){
		game.broadcastAll(function(player){       	
       	 var Animation = ui.create.div();
         Animation.setBackgroundImage('extension/文武英杰/wwyj_newtujianicon.png'); 	   									     	    
     	 Animation.style.left = '62%';   	    	 
         Animation.style.top = 'calc(80% - 90px)';       
         Animation.style.width = '80px';//120
         Animation.style.height = '80px';//150            
         Animation.style.backgroundSize = 'cover';       
         Animation.style['z-index']='2';
         ui.window.appendChild(Animation);
         ui.refresh(Animation);                  
         Animation.onclick=function(){
              game.playwwyj('wwyj_dansha');
			  //ui.click.configMenu();
		  	  game.wwyj_showNewtujian();
		  	  //game.wwyj_openCharacterPack();			     		     
         }
         });     
			}		
         },     
     }	
     } 	
	// ---------------------------------------background------------------------------------------//	 
	game.wwyj_background=function(){
        var Animation = ui.create.div();
            Animation.setBackgroundImage('extension/文武英杰/wwyj_diaochan.png'); 	   									     	    
     	    Animation.style.left = '54%';   	    	 
            Animation.style.top = 'calc(45% - 90px)';       
            Animation.style.width = '401px';
            Animation.style.height = '450px';           
            Animation.style.backgroundSize = 'cover';       
            Animation.style['z-index']='1';
            ui.window.appendChild(Animation);
            ui.refresh(Animation);
	} 
// ---------------------------------------tiesuolianhuan------------------------------------------//        
        if(config.wwyj_tiesuolianhuan){
		 lib.skill._tiesuoafter={
		trigger:{
			player:['judgeAfter','linkAfter','turnOverAfter'],
		},							
		priority:-2020,
		forced:true,							
		content:function(){	
		    if(player.isLinked()){
				game.broadcastAll(function(player){
					ui.arena.classList.add('nolink');
					ui.updatem();
					img = document.createElement('div');
					img.setBackgroundImage('extension/文武英杰/wwyj_tiesuolianhuan.png'); 						
					img.style.width='100%';
					img.style.height='100%';
					img.style['z-index']='30';
					img.style.backgroundSize='cover';
					//img.style.transform='translateY(-200px)';
					player.node.avatar.appendChild(img);
					ui.refresh(img);
					img.style.transform='';
				},player);
			}				
			else{
			   player.node.avatar.setBackground(player.name,'character');
			   game.broadcastAll(function(player){
				imgs=player.node.avatar.querySelectorAll("div");
				for (var i=0;i<imgs.length;i++) {
					var img = imgs[i];
					//img.style.transform='translateY(-200px)';
					img.delete();
				}
			},player);	
			}			
 		},
	}	
    }
// ---------------------------------------lebusishu------------------------------------------//        		
		 if(config.wwyj_lebusishu){
		 lib.skill._lebusishu={
		trigger:{
			target:'useCardToBegin',
		},														
		forced:true,
		filter:function (event,player){
            return event.card&&event.card.name=='lebu';
        },                 
		content:function(){			 						  
			game.broadcastAll(function(player){
 			img = document.createElement('div');
				img.setBackgroundImage('extension/文武英杰/wwyj_lebusishu.png'); 						
		 	img.style.backgroundSize='cover';
				img.style.width='100%';
				img.style.height='100%';
				img.style['z-index']='20';			
				//img.style.transform='translateY(-200px)';
				player.node.avatar.appendChild(img);
				ui.refresh(img);
				img.style.transform='';
			},player);
 		}, 		
    }	

 	lib.skill._lebusishujudgeafter={
		trigger:{
			player:['linkAfter','judgeAfter','turnOverAfter'],
		},							
		priority:-2020,
		forced:true,							
		content:function(){	
		    if(player.countCards('j',{name:'lebu'})){
				game.broadcastAll(function(player){
					img = document.createElement('div');
					img.setBackgroundImage('extension/文武英杰/wwyj_lebusishu.png'); 						
					img.style.width='100%';
					img.style.height='100%';
					img.style.backgroundSize='cover';
					img.style['z-index']='20';
					//img.style.transform='translateY(-200px)';
					player.node.avatar.appendChild(img);
					ui.refresh(img);
					img.style.transform='';
				},player);
			}				
			else{
			   player.node.avatar.setBackground(player.name,'character');	
			}			
 		},
	}
	lib.skill._lebusishudie={
		trigger:{
			player:'die',
		},							
		priority:2,
		forced:true,			
		forceDie:true,				
		content:function(){			
			game.broadcastAll(function(player){
				imgs=player.node.avatar.querySelectorAll("div");
				for (var i=0;i<imgs.length;i++) {
					var img = imgs[i];
					//img.style.transform='translateY(-200px)';
					img.delete();
				}
			},player)
 		},
	}
	lib.skill._lebusishulose={
		trigger:{
			player:'loseEnd',
		},							
		filter:function(event,player){
			for(var i=0;i<event.cards.length;i++){
				if(event.cards[i].original=='j') return true;
			}
			return false;
		},
		forced:true,							
		content:function(){						    
			if(player.countCards('j',{name:'lebu'})){
				game.broadcastAll(function(player){
					img = document.createElement('div');
					img.setBackgroundImage('extension/文武英杰/wwyj_lebusishu.png'); 						
					img.style.width='100%';
					img.style.height='100%';
					img.style.backgroundSize='cover';
					img.style['z-index']='20';
					//img.style.transform='translateY(-200px)';
					player.node.avatar.appendChild(img);
					ui.refresh(img);
					img.style.transform='';
				},player);
			}				
			else{
				game.broadcastAll(function(player){
					imgs=player.node.avatar.querySelectorAll("div")
					for (var i=0;i<imgs.length;i++) {
						var img = imgs[i];
						//img.style.transform='translateY(-200px)';
						img.delete();
					}
				},player);
			}									
 		},
	}						
	}	  
// ---------------------------------------New Function------------------------------------------//	
			lib.element.player.replaceFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				this.clearSkills();
				this.init(this.name1,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			}
			lib.element.player.addFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				var name=this.name;
				this.uninit();
				this.init(name,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			} 			
// ---------------------------------------chat------------------------------------------//				
	if(config.wwyj_chat){
	lib.skill._recoverchat={
		trigger:{player:'recoverEnd'},							
        forced:true, 
		filter:function (event,player){							
            return player.hp>2&&Math.random()<=0.7;                          
		},
        content:function (){					
			player.say(['好舒服啊！','早睡早起，方能养生，2333～','有乳扶捉，肾好'].randomGet());		   	    							         					        
 	  	},	
	}	
	lib.skill._dyingchat={
		trigger:{player:'dying'},							
        forced:true,  
		filter:function (event,player){							
            return event.source&&event.source.isAlive()&&Math.random()<=0.8;                          
		}, 
        content:function (){								
			trigger.source.say('明年的今日，就是你的忌日');
			player.say(['小内再不跳，后面还怎么玩呀？','你们忍心就这么让我酱油啦？','小几把，还挺会玩','姑娘，你真是条汉子'].randomGet());		   	    							         					        
 	  	},	
	}
	lib.skill._dyingafterchat={
		trigger:{player:'dyingAfter'},							
        forced:true,  
		filter:function (event,player){							
            return Math.random()<=0.7;                          
		}, 
        content:function (){					
			player.say(['昏君，昏君啊','差点领了便当，吓死老子了','好死不如赖活啊'].randomGet());		   	    							         					        
 	  	},	
	}
	lib.skill._shachat={
		trigger:{player:'shaBegin'},							
        forced:true,  
		filter:function (event,player){							
            return Math.random()<=0.5;                          
		}, 
        content:function (){					
			player.say(['你TM真欠揍','杀到你妈都认不出你','点解？点解係都要逼我出手？'].randomGet());		
			trigger.target.say(['主公，别开枪，自己人！','小内呀，你老悠着点','我，我惹你们了吗？','谁敢杀我？','你小子有种就放学后在校门口别走'].randomGet());
 	  	},	
	}
	lib.skill._drawchat={
		trigger:{player:'drawEnd'},							
        forced:true,      
        filter:function (event,player){							
            return event.num>2&&Math.random()<=0.5;                          
		},  
        content:function (){					
			player.say(['卧槽～好牌啊！','你们猜猜我摸了什么牌？嘻嘻...','哥们，给力点行吗？'].randomGet());		   	    							         					        
 	  	},	
	}	
	lib.skill._turnoverchat={
		trigger:{player:'turnOverEnd'},							
        forced:true,     
        filter:function (event,player){							
            return Math.random()<=0.6&&player.isTurnedOver();                          
		},   
        content:function (){					
			player.say(['众将听令，摆好阵势……我先休息一会','世风日下，道德沦丧，真的是没脸看你们了'].randomGet());		   	    							         					        
 	  	},	
	}
	lib.skill._linkchat={
		trigger:{player:'linkEnd'},							
        forced:true,  
        filter:function (event,player){							
            return Math.random()<=0.5;                          
		},              
        content:function (){				
        if(player.isLinked()){	
		        player.say(['能不能快一点呀？兵贵神速啊！','捆绑SM？我喜欢','你绑得住我的身，却绑不了我的心'].randomGet());		   	   
			} 							    
	    	else{     					   
			    player.say(['原谅我这一生不羁放纵爱自由','区区铁链，如何困得住我？'].randomGet());		   	   
			}     
 	  	},	
	}
	
	lib.skill._damagechat={
		trigger:{player:'damageAfter'},		
        forced:true,  
        filter:function (event,player){
            return event.source&&Math.random()<=0.5;
        },      
        content:function (){					
			player.say(['你可以打得再烂一点吗？','不好意思，刚才卡了','忍一时越忍越气，退一步退无可退','……','君子报仇，十年未晚，咱们走着瞧'].randomGet());
			trigger.source.say(['风吹鸡蛋壳，牌去人安乐','被打了吧？早就叫你不要装逼了','出来混，记住不要太嚣张','看我怎么收拾你'].randomGet());
			},
			}
			}

// ---------------------------------------Audio------------------------------------------//
		game.playwwyj = function (fn, dir, sex) {			
			if (dir && sex){
				game.playAudio(dir, sex, fn);
			}	
			else if (dir){
				game.playAudio(dir, fn);
			}	
			else{
				game.playAudio('..', 'extension', '文武英杰', fn);
			}	
		}	
		
		if(config.wwyj_huanleyinxiao){	     	
	     	
	     	lib.arenaReady.push(function() {			            			
			for (i in lib.characterPack['wenwuyingjie']) {
				if(lib.character[i][3].indexOf("wwyj_zhwpy")<0) lib.character[i][3].push("wwyj_zhwpy");			
			}							       
		});
	     	
	     	lib.skill._wwyjyourturn={
			    trigger:{player:'phaseUseBegin'},													
				forced:true,         
				filter:function (event,player){
                    return player==game.me;
                },                 
			    content:function (){					
					 game.playwwyj('wwyj_yourturn'); 
 			    },			   
 		 	}
 		 lib.skill._wwyjfail={
			    trigger:{player:'dieBegin'},													
				forced:true,         
				filter:function (event,player){
                    return player==game.me;
                },                 
			    content:function (){					
					 game.playwwyj('wwyj_fail'); 
 			    },			   
 		 	}			
 		 lib.skill._diechat={
	 	 trigger:{player:'dieBegin'},
         forced:true,     
         filter:function (event,player){
             return event.source&&player!=game.me;
         },                
         content:function (){		
          // game.playwwyj('wwyj_zhenwang'); 
            // game.playAudio('..','extension','文武英杰','wwyj_zhenwang');			
		     trigger.source.say('一首《凉凉》送给你');
	 		 player.say(['戎马一生，竟败于……你手','我在修罗地狱等着你，哈哈……'].randomGet());
 	  	},	
	}
	
		}
		
		lib.skill._wwyj_zhwpy={
			trigger:{player:'dieBegin'},									
			forced:true,
            unique:true,    
			content:function (){					
				if(get.mode()=="guozhan"){
				    game.playAudio('..','extension','文武英杰',player.name1);
				}
				else game.playAudio('..','extension','文武英杰',player.name);
				 setTimeout(function(){
        game.playAudio('..','extension','文武英杰',player.name2);
    },3600)      		
			},
		}
						
				
	//以下部分代码借鉴《玄武江湖》扩展
	
	var windowsCharacters = pack.character;	
    if(windowsCharacters){
        windowsCharacters = windowsCharacters.character;
    }
    var characters = pack.character;                 
    if(characters){
        characters = characters.character;
    }else{
        return;
    }      
	game.wwyjIntroduce = function(name){};
		var originCharacterIntro = get.characterIntro;
    get.characterIntro = function(name){
        _status.wwyjCurrentViewIntro = name;
        return originCharacterIntro(name);
    };
		
	game.originPlayAudio_wwyj = game.playAudio;

    game.playAudio = function(){
        var str1 = arguments[0];
        var str2 = arguments[1];
        var str3 = arguments[2];
        var str4 = arguments[3];
        if(str1 == '..' && str2 == 'extension' && str3 == '文武英杰'){
            if(str4 == 'wwyj_zhwpy'){
                if(_status.wwyjCurrentViewIntro){                    
                    game.playwwyjAudio(_status.wwyjCurrentViewIntro);
                    return;
                }
            }           
        }        
        game.originPlayAudio_wwyj.apply(this,arguments);
    };
	
	game.playwwyjAudio = function(name,num,repeat){
        if(!repeat){
            if(num === undefined || num === null){
                game.playAudio('..','extension','文武英杰',name);
            }else{
                game.playAudio('..','extension','文武英杰',name + Math.ceil(Math.random() * num));	
            }
        }else{
            if(num === undefined || num === null){
                game.wwyjPlayAudioRepeatable('..','extension','文武英杰',name);
            }else{
                game.wwyjPlayAudioRepeatable('..','extension','文武英杰',name + Math.ceil(Math.random() * num));	
            }
        }
    }; 
		
	game.wwyjPlayAudioRepeatable = function(){
        if(_status.video&&arguments[1]!='video') return;
        var str='';
        var onerror=null;
        for(var i=0;i<arguments.length;i++){
            if(typeof arguments[i]==='string'||typeof arguments[i]=='number'){
                str+='/'+arguments[i];
            }
            else if(typeof arguments[i]=='function'){
                onerror=arguments[i]
            }
            if(_status.video) break;
        }
        //if(!lib.config.repeat_audio&&_status.skillaudio.contains(str)) return;        
        _status.skillaudio.add(str);
        game.addVideo('playAudio',null,str);
        setTimeout(function(){
            _status.skillaudio.remove(str);
        },1000);
        var audio=document.createElement('audio');
        audio.autoplay=true;
        audio.volume=lib.config.volumn_audio/8;
        if(str.indexOf('.mp3')!=-1||str.indexOf('.ogg')!=-1){
            audio.src=lib.assetURL+'audio'+str;
        }
        else{
            audio.src=lib.assetURL+'audio'+str+'.mp3';
        }
        audio.addEventListener('ended',function(){
            this.remove();
        });
        audio.onerror=function(){
            if(this._changed){
                this.remove();
                if(onerror){
                    onerror();
                }
            }
            else{
                this.src=lib.assetURL+'audio'+str+'.ogg';
                this._changed=true;
            }
        };
        ui.window.appendChild(audio);
        return audio;
    };
    
	//以上部分代码借鉴《玄武江湖》扩展
		        
// ---------------------------------------wwyj_hezizhashi------------------------------------------//  
	if(config.wwyj_hezizhashi){		
		lib.skill._wwyj_hezizhashi={
           trigger:{
                player:"die",
           },               
           forced:true,
           forceDie:true,
           filter:function(event,player){  
              var wwyj_hezifengyun=game.findPlayer(function(current){
                  return current.name=='wwyj_hezifengyun';
           });
              return !wwyj_hezifengyun;
           },                      
           content:function (){ 
            'step 0'
            player.$fullscreenpop('何子诈尸','fire');	
            player.revive();            
            player.init('wwyj_hezifengyun'); 
            player.recover(Infinity);   
            game.playwwyj('wwyj_fengyun1');                   
            player.update();
            'step 1'	 
          game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;     					     	    
         Animation.style.left = '42%';  
         Animation.style.top = 'calc(45% - 50px)';     
         Animation.style.width = '180px';
         Animation.style.height = '240px';
         Animation.style['z-index']='40';
         Animation.style.opacity ='0';
         Animation.style.transform = 'scale(10)';
         Animation.style.transition = 'all 0.5s';              
         Animation.style.backgroundSize = 'cover';
         ui.window.appendChild(Animation);
         ui.refresh(Animation);
         setTimeout(function(){
	  	   	Animation.style.opacity ='1';
	  	   	Animation.style.transform = 'scale(1)';
	  	   	Animation.style.transition = 'all 0.5s';
	  	   	Animation.style.width = '180px';
            Animation.style.height = '240px';
            Animation.style.left = '42%';  
            Animation.style.top = 'calc(45% - 50px)'; 
            //Animation.style['z-index']='40';
            game.playwwyj('wwyj_dansha');        	
       },50);	  		                                				     
         setTimeout(function(){
	  	   	ui.window.removeChild(Animation);
            Animation.delete();			
       },2000);	  							         						
	     	},player);						 			               										         						
        'step 2'	  	  
        game.countPlayer(function(current){
			if(current!=player){
				player.line(current,'fire');
				current.damage();
			}
		});               	                              
        player.insertPhase();     				                         		                     	                         		                     
        },
        }
        } 
        
  // ---------------------------------------wwyj_kaichangtexiao------------------------------------------//  
	if(config.wwyj_kaichangtexiao){		
		lib.skill._wwyj_kaichangtexiao={
           trigger:{
                global:"roundStart",
           },               
           forced:true,           
           filter:function(event,player){                
              return game.roundNumber==1;
           },                           				                       
           content:function (){              
            if(player==game.me){           	
            //game.broadcastAll(function(player){       	
          	var Animation = ui.create.div();         
            Animation.setBackgroundImage('extension/文武英杰/wwyj_kaichangtexiao.png'); 	   									
   			Animation.style.backgroundSize='cover';
   			Animation.style.top = "36%";
   			Animation.style.left = "40%";   			
			Animation.style["z-index"] = '80';
			Animation.style.opacity ='0.2';
			Animation.style.width = '240px';
            Animation.style.height = '240px';
            Animation.style.transform='scale(10)';	
            Animation.style.transition = 'all 0.5s';					
			ui.window.appendChild(Animation);
            ui.refresh(Animation);
            setTimeout(function(){
	  	   	Animation.style.opacity ='1';
	  	   	//Animation.style["z-index"] = '80';	  	   	
	  	   	Animation.style.transform = 'scale(1)';
	  	   	Animation.style.transition = 'all 0.5s';
	  	   	Animation.style.width = '240px';
            Animation.style.height = '240px';
            Animation.style.top = "36%";
   			Animation.style.left = "40%";    
   			game.playwwyj('wwyj_gamestart');   	
       },50);	  		
            //game.delay(0.5);            
            //player.$fullscreenpop('开始游戏','fire');	            			  					         
			    setTimeout(function(){
					ui.window.removeChild(Animation);
                  //Animation.delete();
                },1350);
			//},player);
			} 						                         		                     	                         		                     
        },
        }
        } 
                     			          		                	       			          		                	
// ---------------------------------------wwyj_jishatexiao------------------------------------------//				   
		  game.wwyjjishatexiaotext=function(){
			     text1 = document.createElement('div');
 			     text1.innerHTML='击';						 		
		 	     text1.style.backgroundSize='cover';		 	    
			  	 text1.style.width='100%';
				 text1.style.height='100%';
				 //text1.style.left = '-150px';
                 text1.style.top = 'calc(50% - 90px)';
				 text1.style.left='62%';				 					
				 text1.style.transform='scale(-100)';//缩放变化				 	
				 text1.style['font-size']='75px';
			     // text1.style['text-align']='center';
		     	 text1.style['font-family']='xingkai';
		     	 text1.style['z-index']='60';//顶层		     	 
		     	 text1.style['text-shadow']='rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';						 				 
				 ui.window.appendChild(text1);				
				 ui.refresh(text1);
				 text1.style.transform='';
			game.playwwyj('wwyj_jishatexiao'); 
				 text2 = document.createElement('div');
 			     text2.innerHTML='杀';						 		
		 	     text2.style.backgroundSize='cover';		 	    
			  	 text2.style.width='100%';
				 text2.style.height='100%';
				 //text2.style.left = '-150px';
                 text2.style.top = 'calc(58% - 90px)'; 
				 text2.style.left='68%';						 		
				 text2.style.transform='scale(100)';//缩放变化				 				 
				 text2.style['font-size']='75px';
			     //text2.style['text-align']='center';
		     	 text2.style['font-family']='xingkai';
		     	 text2.style['z-index']='60';//顶层
		     	 text2.style['text-shadow']='rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';						 				 
				 ui.window.appendChild(text2);
				 ui.refresh(text2);
				 text2.style.transform='';			
			//计时关闭:
			setTimeout(function(){
	  	   	    text1.delete();
                text2.delete(); 						
            },1800);			
		    };
		  
		  if(config.wwyj_jishatexiao){		
		    lib.skill._wwyj_jishatexiao={
                trigger:{
                    source:"dieBegin",
                },   
                //forceDie:true,  
                forced:true,
                priority:20,                
                content:function (){ 
                'step 0'
            game.playwwyj('wwyj_jisha');                   
                'step 1'	  	       
            setTimeout(function(){	  	   		  	   	
	  	   	    game.wwyjjishatexiaotext();	
            },500);		    
                'step 2'
                game.broadcastAll(function(player){       	
       	 var Animation = ui.create.div();
         Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;     					     	    
     	 Animation.style.left = '10%';   	    	 
         Animation.style.top = 'calc(33.5% - 90px)';    //50%    
         Animation.style.width = '270px';//120
         Animation.style.height = '360px';//150   
         Animation.style.transition = 'all 2s';
         //Animation.style.position='relative';
         Animation.style.transform='translateX(50px)';
         Animation.style.transform='translateX(30px)';
         Animation.style.transform='translateX(20px)';//减速
         Animation.style.backgroundSize = 'cover';       
         Animation.style['z-index']='50';//顶层
         ui.window.appendChild(Animation);
         ui.refresh(Animation);  
         
        /* var wwyj_kuang = ui.create.div();
         wwyj_kuang.setBackgroundImage('extension/文武英杰/wwyj_kuang.png');    					     	    
     	 wwyj_kuang.style.left = '2.5%';   	    	 
         wwyj_kuang.style.top = 'calc(18% - 90px)';    //50%    
         wwyj_kuang.style.width = '390px';//120
         wwyj_kuang.style.height = '520px';//150   
         //wwyj_kuang.style.transition = 'all 2s';
         //wwyj_kuang.style.position='relative';
         //wwyj_kuang.style.transform='translateX(50px)';
         //wwyj_kuang.style.transform='translateX(30px)';
         //wwyj_kuang.style.transform='translateX(20px)';//减速
         wwyj_kuang.style.backgroundSize = 'cover';       
         wwyj_kuang.style['z-index']='54';//顶层
         ui.window.appendChild(wwyj_kuang);
         ui.refresh(wwyj_kuang);             
         */
         name0 = document.createElement('div');
 			     name0.innerHTML=player.node.name.innerHTML;						 		
		 	     name0.style.backgroundSize='cover';		 	    
			  	 name0.style.width='100%';
				 name0.style.height='100%';				 
                 name0.style.top = 'calc(36% - 90px)';
				 name0.style.left='12%';					 		 									 			 	
				 name0.style['font-size']='36px';			   
		     	 name0.style['font-family']='xingkai';
		     	 //name0.style['text-align']='center';
		     	 name0.style['z-index']='55';//顶层		     	 
		     	 name0.style['text-shadow']='rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';						 				 
				 ui.window.appendChild(name0);				
				 ui.refresh(name0);
				 setTimeout(function(){
	  	   	//ui.window.removeChild(name0);
            name0.delete();	                      
       },2400);	  		
       
        /* var jisha = ui.create.div();        
		jisha.setBackgroundImage('extension/文武英杰/wwyj_jisha.png');             					     	    
		jisha.style.left = '5%';   	    	 
		jisha.style.top = 'calc(48% - 90px)';       
		jisha.style.width = '208px';
		jisha.style.height = '112px';            		
		jisha.style.position ='absolute';
		jisha.style.transition = 'all 0.5s';
		jisha.style.transform ='translateX(10px)';
		 jisha.style.transform ='translateX(55px)';
		// jisha.style.transform ='translateX(50px)';
		jisha.style.backgroundSize = 'cover';      
		jisha.style["z-index"]='65';//顶层
		ui.window.appendChild(jisha);
		ui.refresh(jisha); 		
		    jisha.style.left = '70%';   	    	 
		    jisha.style.top = 'calc(48% - 90px)';       		    
		    jisha.style["z-index"]='65';
		    jisha.style.transform ='translateX(100px)'; 
	    	jisha.style.transition = 'all 0.5s';		       	           	  
		setTimeout(function(){
			ui.window.removeChild(jisha);            
			jisha.delete();			            
		},1000);
		*/
		
         var Animation1 = ui.create.div();
       	 Animation1.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;      						     	
     	 Animation1.style.right = '18%';       	      	
         Animation1.style.top = 'calc(36% - 90px)'; //40%       
         Animation1.style.width = '240px';
         Animation1.style.height = '320px';
         //Animation1.style.position='relative';         
         Animation1.style.transition = 'all 2s';
         Animation1.style.transform='translateX(-50px)';
         Animation1.style.transform='translateX(-30px)';
         Animation1.style.transform='translateX(-20px)';        
         Animation1.style.backgroundSize = 'cover';
         Animation1.style['z-index']='50';//顶层
         //Animation1.style.webkitFilter="grayscale(100%)";//去色
         //Animation1.style.filter="grayscale(100%)";
         
         ui.window.appendChild(Animation1);
         ui.refresh(Animation1); 
         
         setTimeout(function(){
	  	   	Animation1.style.webkitFilter="grayscale(100%)";//去色
            Animation1.style.filter="grayscale(100%)";	  	   		  	   
         },300);	
                           
         name1 = document.createElement('div');
 			     name1.innerHTML=trigger.player.node.name.innerHTML;
 			     name1.style.backgroundSize='cover';						 				 	 	 	    
			  	 name1.style.width='100%';
				 name1.style.height='100%';				 
                 name1.style.top = 'calc(38.5% - 90px)';
				 name1.style.left='60%';					 		 									 			 	
				 name1.style['font-size']='36px';			   
		     	 name1.style['font-family']='xingkai';
		     	 //name1.style['text-align']='center';
		     	 name1.style['z-index']='55';//顶层		     	 
		     	 name1.style['text-shadow']='rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';						 				 
				 ui.window.appendChild(name1);				
				 ui.refresh(name1);
				 
         setTimeout(function(){	  	   	
	  	    name1.delete();	
	  	   	ui.window.removeChild(Animation1);            
            Animation1.delete();              	   
         },800);	
         
         var Animation2 = ui.create.div();
       	 Animation2.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;      						     	
     	 Animation2.style.right = '16%';       	      	
         Animation2.style.top = 'calc(32% - 90px)'; //40%       
         Animation2.style.width = '240px';
         Animation2.style.height = '320px';         
         //Animation2.style.position='relative';         
        // Animation2.style.transform='translate(3px)';	 
	  	// Animation2.style.transition = 'all 0.5s';
         Animation2.style.backgroundSize = 'cover';
         Animation2.style['z-index']='50';//顶层         
         Animation2.style.webkitFilter="grayscale(100%)";//去色
         Animation2.style.filter="grayscale(100%)";	//去色
         //Animation2.style.clip='rect(0px,202010px,170px,0px)';//平衡裁剪（上右下左）
         Animation2.style.clipPath='polygon(0 0, 100% 0, 100% 70%, 0 30%)';//斜面裁切from十周年UI
		 Animation2.style.WebkitClipPath= 'polygon(0 0, 100% 0, 100% 70%, 0 30%)';
	           
         //ui.window.appendChild(Animation2);
         //ui.refresh(Animation2);               
       /*  name2 = document.createElement('div');
 			     name2.innerHTML=trigger.player.node.name.innerHTML;	
 			     name2.style.backgroundSize='cover';
 			     name2.style.width = '240px';
                 name2.style.height = '320px';  					 				 	     		 	    
			  	 //name2.style.width='100%';
				 //name2.style.height='100%';				 
                 name2.style.top = 'calc(34.5% - 90px)';
				 name2.style.left='62%';					 		 									 			 	
				 name2.style['font-size']='36px';			   
		     	 name2.style['font-family']='xingkai';
		     	 //name2.style['text-align']='center';
		     	 name2.style['z-index']='55';//顶层		     	 
		     	// name2.style['text-shadow']='rgba(255,0,0,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 2px';	
		     	 //name2.style.webkitFilter="grayscale(100%)";//去色
                 //name2.style.filter="grayscale(100%)";	
                 name2.style.clipPath='polygon(0 0, 100% 0, 100% 65.5%, 0 25.5%)';//斜面裁切from十周年UI
		         name2.style.WebkitClipPath= 'polygon(0 0, 100% 0, 100% 65.5%, 0 25.5%)';
	           		 				 				 
				 setTimeout(function(){
	  	   //	ui.window.removeChild(name2);
            name2.delete();	            
       },2400);	  	
       */
         var Animation3 = ui.create.div();
       	 Animation3.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;      						     	
     	 Animation3.style.right = '20%';       	      	
         Animation3.style.top = 'calc(40% - 90px)'; //40%       
         Animation3.style.width = '240px';
         Animation3.style.height = '320px';        
         //Animation3.style.position='relative';         
         //Animation3.style.transform='translate(-3px)';	 
	  	 //Animation3.style.transition = 'all 0.5s'
         Animation3.style.backgroundSize = 'cover';
         Animation3.style['z-index']='50';//顶层
         Animation3.style.webkitFilter="grayscale(100%)";//去色
         Animation3.style.filter="grayscale(100%)";	//去色
         //Animation3.style.clip='rect(170px,202010px,202010px,0px)';//平行分割		 
		 Animation3.style.clipPath= 'polygon(0 30%, 100% 70%, 100% 100%, 0 100%)';//斜面裁切from十周年UI
	     Animation3.style.WebkitClipPath= 'polygon(0 30%, 100% 70%, 100% 100%, 0 100%)';
        
         //ui.window.appendChild(Animation3);
         //ui.refresh(Animation3);        
        /* name3 = document.createElement('div');
 			     name3.innerHTML=trigger.player.node.name.innerHTML;	
 			     name3.style.backgroundSize='cover';
 			     name3.style.width = '240px';
                 name3.style.height = '320px';  					 				 	     	 	    
			  	 //name3.style.width='100%';
				 //name3.style.height='100%';				 
                 name3.style.top = 'calc(42.5% - 90px)';
				 name3.style.left='58%';					 		 									 			 	
				 name3.style['font-size']='36px';			   
		     	 name3.style['font-family']='xingkai';
		     	 //name3.style['text-align']='center';
		     	 name3.style['z-index']='55';//顶层		     	 		     	
		     	 //name3.style.webkitFilter="grayscale(100%)";//去色
                 //name3.style.filter="grayscale(100%)";
                 name3.style.clipPath= 'polygon(0 26%, 100% 61%, 0 100%, 0 100%)';//斜面裁切from十周年UI
	             name3.style.WebkitClipPath= 'polygon(0 26%, 100% 61%, 0 100%, 0 100%)';
        						 				 				 
				 setTimeout(function(){
	  	   	//ui.window.removeChild(name3);
            name3.delete();	            
       },2400);	  	
       */
         setTimeout(function(){	  	   		 
			//ui.window.appendChild(name2);				
			//ui.refresh(name2);
			ui.window.appendChild(Animation2);
            ui.refresh(Animation2);             			
           // ui.window.appendChild(name3);				
			//ui.refresh(name3);
            ui.window.appendChild(Animation3);
            ui.refresh(Animation3);              
       },800);	
         			
         setTimeout(function(){
	  	   	Animation2.style.transform='translate(8px)';	 
	  	   	Animation2.style.transition = 'all 0.8s';
	  	   //	name2.style.transform='translate(8px)';	 
	  	   //	name2.style.transition = 'all 0.8s';
	  	   	Animation3.style.transform='translate(-8px)';	 
	  	   	Animation3.style.transition = 'all 0.8s';	  	   		  	   	
	  	   //	name3.style.transform='translate(-8px)';	 
	  	   //	name3.style.transition = 'all 0.8s';
	  	   
	  	   /*	setInterval(
                function () {                                              
                    Animation2.style.left = Animation2.offsetLeft + 25 + "px";
					Animation2.style.top = Animation2.offsetTop - 10 + "px";
					Animation3.style.left = Animation3.offsetLeft - 25 + "px";
					Animation3.style.top = Animation3.offsetTop + 10 + "px";
                },
                50);*/
       },1200);	  			
       				     				     				     				     				     				     				     				     
         setTimeout(function(){	  	   	
	  	   	ui.window.removeChild(Animation);
            Animation.delete();	
            //ui.window.removeChild(wwyj_kuang);
            //wwyj_kuang.delete();	            
            ui.window.removeChild(Animation2);
            Animation2.delete();		
            ui.window.removeChild(Animation3);
            Animation3.delete();	
       },2500);	  							         						
	     	},player);					               										         						
          				                         		                     	                         		                     
                },
                }
      } 
       
 // ---------------------------------------wwyj_yanjinfandu------------------------------------------//	           
      if(config.wwyj_yanjinfandu){
      lib.arenaReady.push(function(){
		lib.skill.g_du_give={ 		                    
            
            } 
            lib.translate.du_info='当此牌正面向上离开你的手牌区，或作为你的拼点牌而亮出时，你失去1点体力';
        });    
      }
 // ---------------------------------------wwyj_jiexiantupo------------------------------------------//	     
   if(config.wwyj_jiexiantupo){
		
		lib.arenaReady.push(function(){
		lib.skill.wwyj_yongji={ 		                    
            trigger:{                   
                global:"dying",
            },	                   				
            usable:1,
            check:function (event,player){                    
                return get.attitude(player,event.player)>0;
            },      
            audio:["songwei",2],
            filter:function (event,player){
        return player.countCards('e');
    },
                content:function (){                                      
            player.discardPlayerCard(player,'e',true);            
            player.chat('拿去拿去，莫跟哥哥客气');
            trigger.player.recover();  				                     
    },
            } 
            lib.translate.wwyj_yongji_info='每回合限一次，当一名角色进入频死状态时，你可以选择弃置你的一张装备区的牌，令回复一点体力 <font color=#F0F>已突破</font>';
        });    
        
		lib.arenaReady.push(function(){
		    lib.skill.wwyj_qianzhan={ 				
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(name=='wuxie') return false;
					if(lib.inpile.contains(name)) return true;
				},	
				audio:["guicai",2],
				filter:function(event,player){
					if(event.responded||event.wwyj_qianzhan||event.type=='wuxie') return false;					
					if(player.getStat().skill.wwyj_qianzhan>=player.hp) return false; 					
					for(var i of lib.inpile){						
						if(i=='wuxie') return false;
						if(event.filterCard({name:i},player,event)) return true;
					}
					return false;
				},
				delay:false,
				mod:{        		
		            targetInRange:function(card,player,target,now){						
			            if(_status.event.skill=='wwyj_qianzhan_backup') return true;
		            },
		            selectTarget:function(card,player,range){						
			            if(_status.event.skill=='wwyj_qianzhan_backup'&&card.name=='sha'&&range[1]!=-1) range[1]+=Infinity;				
		            },			
                },
				content:function(){
					'step 0'
					var evt=event.getParent(2);
					evt.set('wwyj_qianzhan',true);
					var cards=get.cards();
					for(var i=cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cards[i].fix(),ui.cardPile.firstChild);
					}
					var aozhan=player.hasSkill('aozhan');
					player.chooseButton(['前瞻：选择要'+(evt.name=='chooseToUse'?'使用':'打出')+'的牌',cards]).set('filterButton',function(button){
						return _status.event.cards.contains(button.link);
					}).set('cards',cards.filter(function(card){
						if(aozhan&&card.name=='tao'){
							return evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)||evt.filterCard({
								name:'shan',isCard:true,cards:[card],
							},evt.player,evt);
						}
						return evt.filterCard(card,evt.player,evt);
					})).set('ai',function(button){
						var evt=_status.event.getParent(3);
						if(evt&&evt.ai){
							var tmp=_status.event;
							_status.event=evt;
							var result=(evt.ai||event.ai1)(button.link,_status.event.player,evt);
							_status.event=tmp;
							return result;
						}
						return 1;
					});
					'step 1'
					var evt=event.getParent(2);
					if(result.bool&&result.links&&result.links.length){
						var name=result.links[0].name,aozhan=(player.hasSkill('aozhan')&&name=='tao');
						if(aozhan){
							name=evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)?'sha':'shan';
						}
						if(evt.name=='chooseToUse'){
							game.broadcastAll(function(result,name){
								lib.skill.wwyj_qianzhan_backup.viewAs={name:name,cards:[result],isCard:true};
								lib.skill.wwyj_qianzhan_backup.prompt='选择'+get.translation(result)+'的目标';
							},result.links[0],name);
							evt.set('_backupevent','wwyj_qianzhan_backup');
							evt.backup('wwyj_qianzhan_backup');
							if(event.isMine()){
							    game.wwyjlooktopcard();
							}
						}
						else{
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card=get.autoViewAs(result.links[0]);
							if(aozhan) evt.result.card.name=name;
							evt.result.cards=[result.links[0]];
							if(event.isMine()){
							    game.wwyjlooktopcard();
							}
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai:{
					effect:{
						target:function(card,player,target,effect){
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						}
					},
					order:11,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
			            if(tag=='respondSha'||tag=='respondShan') return true;
				             return false;			            
		            },
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					}
				}
			}
			lib.translate.wwyj_qianzhan_info='牌堆顶的牌对你可见。每回合限X次（X为你的体力值），你可以使用或打出牌堆顶的牌（无懈可击除外），你以此法使用的牌无距离限制，若为【杀】则可额外指定任意名目标 <font color=#F0F>已突破</font>';
        }); 
			
		lib.arenaReady.push(function(){
		lib.skill.wwyj_gainian={ 		
		audio:"ext:文武英杰:2",
		trigger:{
			player:"phaseEnd",
		},
		frequent:true,
        filter:function (event,player){
            return true;
        },
        init:function (player){
			player.storage.wwyj_gainian=[];		
		},                        
        content:function (){
        "step 0"              	
		var list1=[],list2=[];
		for(var i=0;i<lib.inpile.length;i++){
		var type=get.type(lib.inpile[i]);
		    if(type=='basic'){
			list1.push(['基本','',lib.inpile[i]]);
			}
			else if(type=='trick'){
				list2.push(['锦囊','',lib.inpile[i]]);
			}					
			}
		player.chooseButton([get.prompt('wwyj_gainian'),[list1.concat(list2),'vcard']]).set('filterButton',function(button){											
			return true;
		}).set('ai',function(button){		  					
			switch(button.link[2]){
				 	case 'du':return 0;
					case 'sha':return 3+9*Math.random();
					case 'tao':return 5.5+9*Math.random();
					case 'jiu':return 3+9*Math.random();
					case 'shan':return 4+9*Math.random();
					case 'wuzhong':return 4.5+9*Math.random();
					case 'shunshou':return 4.5+9*Math.random();
					case 'nanman':return 3+9*Math.random();
					case 'wanjian':return 3+9*Math.random();
					default:return 9*Math.random();
				}							
			}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
		"step 1"       
			if(result.bool){					
				player.storage.wwyj_gainian=result.links[0][2];		
				if(player.hasSkill('wwyj_heimao')){
		    		player.loseHp();
			    	player.turnOver();
				}
				//player.logSkill('wwyj_gainian');			
			}else{
				event.finish();
			}	
		"step 2"
	    event.num=0;       
        event.targets=game.filterPlayer(function(current){
            return current!=player;
        }); 
		event.targets.remove(player);
        event.targets.sort(lib.sort.seat);
        "step 3"
        if(event.num<event.targets.length){
			player.line(event.targets[event.num],'green');
            event.targets[event.num].chooseCard('弃置一张牌名与'+get.translation(player.storage.wwyj_gainian)+'相同的手牌，否则'+get.translation(player)+'摸一张牌','h',function(card){
               return card.name==player.storage.wwyj_gainian;
            }).ai=function(card){
			   if(get.attitude(player,event.targets[event.num])>0) return false;
               return 8-get.value(card);
            };                                 
        }
         else{
			 player.storage.wwyj_gainian=[];
			 event.finish();
		 }
		"step 4"     
		if(result.bool){            		   
           event.targets[event.num].discard(result.cards);          	     
           game.log(event.targets[event.num],'弃置了一张',result.cards);  
		   event.num++;
		   event.goto(3);		  
		}
		else{
		   player.draw();
		   event.num++;
		   event.goto(3);		   
		}
    },
                ai:{
                    order:2,
                    threaten:1.5,                    
                },
            }
			lib.translate.wwyj_gainian_info='回合结束时，你可声明一张基本牌或普通锦囊牌，若如此做，若你未发动技能【黑猫】，你须失去一点体力并翻面，然后令场上所有其他角色弃置一张与你所声明的牌名字相同的手牌，否则你摸一张牌 <font color=#F0F>已突破</font>';
        }); 
		
		lib.arenaReady.push(function(){
		lib.skill.wwyj_chuangshi={ 			
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                audio:"ext:文武英杰:1",
                unique:true,
                forced:true,
                juexingji:true,
                priority:Infinity,
                init:function (player){
				             	player.storage.wwyj_chuangshi=false;
		           		},
                content:function (){               
       "step 0" 
       player.$fullscreenpop('水乎创世','fire'); 
       	game.wwyj_background();	
       	game.broadcastAll(function(player){
       	
       	var Animation = ui.create.div();
       	//Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;  
        Animation.setBackgroundImage('extension/文武英杰/wwyj_chuangshi.gif'); 	   									
   				Animation.style.backgroundSize='cover';
   				Animation.style.backgroundPosition='center';
						Animation.style["z-index"] = 7;
						
						Animation.style.width = (360/715)*document.body.clientHeight + "px";
						Animation.style.height= (360/715)*document.body.clientHeight + "px";
						
						if(player==game.me){						
							Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
						}
						else {
						Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
							/*Animation.style.left= "8%";
							Animation.style.top = "25%";
							player.appendChild(Animation);*/
						}
												         
						setTimeout(function(){
						ui.window.removeChild(Animation);
               //Animation.delete();
                },3500);

			},player);
					 player.storage.wwyj_chuangshi=true;			
       player.awakenSkill("wwyj_chuangshi");
       game.delay(2);
       event.current=player.next;          
        event.list=[];
        for(var i in lib.characterPack['standard']){
                event.list.push(i);                    
        }
        "step 1"         
        event.current.chooseButton(ui.create.dialog('请您选择一名武将牌替换你的武将牌',[event.list,'character'],true),function(button){                 
                     return Math.random();
                       // return get.rank(button.link,true);
                 });                  
                "step 2"                    
                 if(result.bool){
                 event.current.init(result.links[0]);  
                 event.list.remove(result.links[0]);                                                    
                  }      
                 "step 3"      
                 if(event.current!=player.previous){
                     event.current=event.current.next;
                     event.goto(1);
                 }
                 else{
                     event.finish();
                 }
    },
                ai:{
                    order:9,
                },
            } 
            lib.translate.wwyj_chuangshi_info='<span class=greentext>觉醒技</span> 游戏开始所有角色摸牌后或你进入游戏时（对决模式），你令其他角色从标准包中挑选一名角色并变身成为之 <font color=#F0F>已突破</font>';
        });    
            
		lib.arenaReady.push(function(){
		lib.skill.wwyj_chaoyue={ 		                    
            trigger:{                   
                source:"damageBegin",
            },	                   				
            forced:true, 
            audio:["refenyin",2], 
            filter:function (event,player){
        return event.card.name=='sha'&&!event.player.isTurnedOver();
    },
                content:function (){                  
            trigger.num++;  
            trigger.player.turnOver();
           // game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet());                                                                
    },
            } 
            lib.translate.wwyj_chaoyue_info='</font><font color=#f00>锁定技</font> 当你使用【杀】造成伤害时，若该目标角色未翻面，你令其翻面且此伤害+1 <font color=#F0F>已突破</font>';
        });    
        		
		lib.arenaReady.push(function(){
        lib.skill.wwyj_jieyuan={ 	
				enable:'phaseUse',
				usable:1,	
				group:['wwyj_jieyuan2','wwyj_jieyuan3'],
				global:'wwyj_jieyuan4',
				audio:"ext:文武英杰:1", 			
				filter:function (event,player){
				    return player.countCards('he',{color:'black'})&&game.hasPlayer(function(current){
				return player!=current&&!current.hasSkill('wwyj_jieyuan1');
			});					
				},
				filterCard:function (card){                    
                    return get.color(card)=='black';
                },
                selectCard:function (){
                var num1=_status.currentPhase.countCards('he',{color:'black'});
                var num2=game.countPlayer(function(current){
            return _status.currentPhase!=current&&!current.hasSkill('wwyj_jieyuan1');
         });          
                    return [1,Math.min(num1,num2)];
                },              
                position:'he',      
				filterTarget:function (card,player,target){
					return player!=target&&!target.hasSkill('wwyj_jieyuan1');
				},	
				multitarget:true,
                multiline:true,
                prepare:function (cards,player,targets){
                    player.line(targets);
                },
				selectTarget:function (card){
        if(ui.selected.targets.length>ui.selected.cards.length){
            game.uncheck('target');
        }
        return ui.selected.cards.length;
    },     							
				content:function(){
				"step 0"                                  
        event.targets=targets.slice(0);        
        event.targets.sort(lib.sort.seat);    
                "step 1"
        if(event.targets.length){
            var target=event.targets.shift();                               
            target.addSkill('wwyj_jieyuan1');           
            event.redo();
        }
        else event.finish();
				},
		ai:{
         result:{
            target:function (player,target){
               if(player.hp>2) return Math.random();             
                  return -target.countCards('h');
            },            
            player:function (player){
              if(player.countCards('h')<3) return 0;
                return 1;
            },                   
        },
            order:5,
            threaten:0.5,
        },  
		    }
        lib.translate.wwyj_jieyuan_info='出牌阶段限一次，你可以弃置任意张黑色牌并选择等量的没有『结缘』状态的角色，令其处于『结缘』状态。你防止受到『结缘』状态的角色造成的伤害，其受到伤害后，你摸一张牌。其可在其出牌阶段主动交给你一张红色牌解除『结缘』状态 <font color=#F0F>已突破</font>';
        });    
		
		lib.arenaReady.push(function(){
        lib.skill.wwyj_bohe2={ 		
		mark:true,	
		marktext:'糖',	       
		intro:{	
            content:function (storage,player,skill){
         		return '你选择的类别是'+get.translation(player.storage.wwyj_bohe)+'牌';
          	}, 
		},	
		trigger:{
            global:["useCard"],
        },							      
        priority:10,
        direct:true, 
        usable:1,
        popup:false,
        //audio:"ext:文武英杰:1", 
        filter:function (event,player){            			
			return event.card&&event.card.isCard&&get.type(event.card)==player.storage.wwyj_bohe;			    			  
        },       
        content:function (){ 
		    'step 0'		    
            trigger.player.chooseBool('是否令'+get.translation(player)+'摸一张牌？').set('ai',function(){               
              if(get.attitude(trigger.player,player)>0) return true; 
                  return false;                            
            });                    
            'step 1'
        if(result.bool){
            trigger.player.line(player,'green'); 
            game.playwwyj('wwyj_bohe21');
            player.draw();            
        }else{ 
            event.finish();
        }        			        			
        },
        ai:{
            order:9,
        },			
    }
    lib.translate.wwyj_bohe_info='出牌阶段限一次，你可声明一种类别的牌，然后直到你的下回合开始，每名角色的回合限一次，每当一名角色使用一张类别与该类别相同的非转化的牌时（不包括延时性锦囊牌），其可令你摸一张牌 <font color=#F0F>已突破</font>';
        });     
        
		lib.arenaReady.push(function(){
        lib.skill.wwyj_lunpo={ 		                                            
        trigger:{
          global:"phaseDiscardAfter",
        },   
        audio:"ext:文武英杰:1",  
        forced:true,                                              
        filter:function(event,player){
        if(!event.player.hasSkill('wwyj_wan')) return false;
        if(event.cards){
            var suits=[];
            for(var i=0;i<event.cards.length;i++){
                var suit=get.suit(event.cards[i]);
                if(suits.contains(suit)){
                    return false;
                }
                else{
                    suits.push(suit);
                }
            }
            return true;
        }
        return false;
    },
          content:function(){               
           player.line(trigger.player,'green'); 
           player.recover();
           player.draw();                        
		   trigger.player.damage(player);
		   trigger.player.removeSkill('wwyj_wan');		  		
		},   
    }
        lib.translate.wwyj_lunpo_info='</font><font color=#f00>锁定技</font> 任意有“丸”标记的角色弃牌阶段弃牌时，若其弃置的牌均为不同花色的牌时，你回复一点体力，摸一张牌并令该角色受到你造成的一点伤害，然后其弃置“丸”标记';
        });     
       
		lib.arenaReady.push(function(){
        lib.skill.wwyj_kazhan={ 		             
		    audio:["yuhua",2],
                trigger:{
                    global:"changeHp",
                },
                prompt:function (event,player){					
					return '是否从牌堆或弃牌堆中选择一张装备牌并令'+get.translation(event.player)+'使用？';
				},
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },             
                filter:function (event,player){
          return event.player.isAlive()&&event.player.hp==1;
      },
                content:function (){                   			   
							"step 0" 					
			        var list1=[],list2=[];
					for(var i=0;i<ui.cardPile.childNodes.length;i++){
						var type=get.type(ui.cardPile.childNodes[i]);
						if(type=='equip'){
							//list1.push(['装备','',ui.cardPile.childNodes[i]]);//能用但只显示文字
							//list1.push(['装备','',ui.cardPile.childNodes[i].name]);//能显示牌但不能用
							list1.push(ui.cardPile.childNodes[i]);
						}
					}	
					for(var i=0;i<ui.discardPile.childNodes.length;i++){
						var type=get.type(ui.discardPile.childNodes[i]);
						if(type=='equip'){
							//list2.push(['装备','',ui.discardPile.childNodes[i]]);//能用但只显示文字
							//list1.push(['装备','',ui.discardPile.childNodes[i].name]);//能显示牌但不能用
							list2.push(ui.discardPile.childNodes[i]);
						}
					}											
					player.chooseCardButton(get.prompt('wwyj_kazhan'),list1.concat(list2)).set('filterButton',function(button){	
					//player.chooseButton([get.prompt('wwyj_kazhan'),[list1.concat(list2),'vcard']]).set('filterButton',function(button){//旧失败写法											
						return true;
					}).set('ai',function(button){		  						
				        //if(button.link[2].name=='tengjia') return 0;
				        //return Math.random();
				switch(button.link.name){
				 		    case 'tengjia':return 0;
							case 'bagua':return 9+23*Math.random();
							case 'renwang':return 10+23*Math.random();
							case 'dilu':return 6+23*Math.random();
							case 'dawan':return 4+23*Math.random();
							case 'cixiong':return 4.5+23*Math.random();
							case 'qinggang':return 5+23*Math.random();
							case 'qinglong':return 5+23*Math.random();
							case 'guding':return 5+23*Math.random();
							case 'baiyin':return 6+23*Math.random();
							case 'chitu':return 4+23*Math.random();
							case 'fangtian':return 4+23*Math.random();
							case 'guanshi':return 6+23*Math.random();
							case 'hanbing':return 3.5+23*Math.random();
							case 'hualiu':return 5.5+23*Math.random();
							case 'jueying':return 6+23*Math.random();
							case 'muniu':return 5+23*Math.random();
							case 'qilin':return 5+23*Math.random();
							case 'zhangba':return 5.5+23*Math.random();
							case 'zhuge':return 4+23*Math.random();
							case 'zhuahuang':return 6+23*Math.random();
							case 'zhuque':return 5+23*Math.random();
							case 'zixin':return 4+23*Math.random();
							default:return 23*Math.random();
						}
						//}).set('rand',[Math.random()],Math.random());							
						}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());				
				  "step 1"       
					if(result.bool){					    						
						trigger.player.useCard(result.links[0],trigger.player);	
						//trigger.player.chooseUseTarget(result.links[0][2],'noanimate','nopopup',true);	//list push name时用这个和chooseButton那句															
					}
					else{
						event.finish();
					} 					      
        },
            }
        lib.translate.wwyj_kazhan_info='当一名角色的体力发生变化后，若其体力值为1，你可从牌堆或弃牌堆中选择一张装备牌令其使用之 <font color=#F0F>已突破</font>';
        });     
           
		lib.arenaReady.push(function(){
        lib.skill.wwyj_xuanxia={  		                                        
        trigger:{
            player:["dying"],
        },				
        audio:"ext:文武英杰:1",		       
        priority:10,
        round:2,       
        filter:function (event,player){
			return game.hasPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
	 		}); 
				},				
        content:function (){         
        		"step 0"
    	player.storage.wwyj_xuanxia=true;
    	player.$fullscreenpop('寰宇星城','fire');
    	game.wwyj_background();		
    	var num=game.countPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
	 		}); 
	 		//player.recover(num);
	 		"step 1"
				event.players=game.filterPlayer(function(current){
                return current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
      }).sortBySeat();
       "step 2"
        if(event.players.length){
            event.current=event.players.shift();           
            player.line(event.current,'green'); 
            player.useCard({name:'sha'},event.current,false); 
            /*var cards=event.current.storage.wwyj_xingcheng1;    
            player.gain(cards,'fromStorage');                                                          
            event.current.storage.wwyj_xingcheng1.remove(cards);
            */
            var cards=event.current.getExpansions('wwyj_xingcheng1');
            event.current.give(cards,player,'give');					
            //event.current.getExpansions('wwyj_xingcheng1').remove(cards);  
            //event.current.loseToDiscardpile(cards);          
            event.current.syncStorage('wwyj_xingcheng1');               
            player.recover(); 
            event.current.removeSkill('wwyj_xingcheng1');
            event.current.unmarkSkill('wwyj_xingcheng1');
            event.current.update();
			event.redo();
          }
          else{
                //player.awakenSkill('wwyj_xuanxia');
                event.finish();            
          }    	
       },
       }
       lib.translate.wwyj_xuanxia_info='每两轮限一次，当你进入濒死状态时，你可回复体力至场上“星”的数量，然后获得场上所有的“星”，并分别视为对这些角色使用一张【杀】 <font color=#F0F>已突破</font>';
        }); 
		
		lib.arenaReady.push(function(){
        lib.skill.wwyj_tuikeng={  		                    
     trigger:{
          player:"changeHp",
     },
     forced:true,
     content:function (){  
        player.draw(player.getDamagedHp());
        game.playwwyj('wwyj_qianfu1'); 
     },
     mod:{
        globalTo:function (from,to,distance){
            return distance+to.getDamagedHp();
        },                    
     },            
       }		        
       lib.translate.wwyj_tuikeng_info='</font><font color=#f00>锁定技</font> 你的体力值发生变化时，你摸X张牌；你的防御距离加X（X为你已损失的体力值） <font color=#F0F>已突破</font>';
        }); 
            
		lib.arenaReady.push(function(){          
		    //lib.character['wwyj_duanges'][2]='3';
            lib.skill.wwyj_meihua2={  		 
				trigger:{
                    global:"gameStart",  
                    player:"enterGame",                          
                },  
                forced:true,
                priority:Infinity,
                popup:false,
                content:function (){
                    player.loseMaxHp(true);
                    player.update();
                },
                },
            lib.skill.wwyj_meihua={  		 
				trigger:{
                    global:"useCardToPlayer",                            
                },  
                group:"wwyj_meihua2",                
                audio:"ext:文武英杰:1",                                               
                filter:function (event,player){               
                    if(event.player==player) return false;
                    if(get.type(event.card)=='equip') return false;                    
                    if(get.type(event.card)=='delay') return false;
                    if(event.card.name=='wuxie') return false;
                    if(!event.targets||event.targets.length!=1) return false;
                       return !player.hasSkill("wwyj_meihua1");
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<=0;
                },
                prompt:function (event,player){					
					return '是否美化'+get.translation(event.player)+'对'+get.translation(event.target)+'使用的'+get.translation(event.card);
				},
                content:function (){
                  'step 0'	                		
			event.cards=get.cards(4);
			game.cardsGotoOrdering(event.cards);                          
             'step 1'              
              player.chooseCardButton(event.cards,1,'选择使用一张牌代替'+get.translation(trigger.player)+'所使用的牌').set('filterButton',function(button){           
                 return trigger.player.canUse(button.link,trigger.target);             
         }).set('ai',function(button){
             return 6-get.value(button.link);
         });
           'step 2'
          if(result.bool){ 
             player.addTempSkill("wwyj_meihua1");
             trigger.getParent().excluded.add(trigger.target);                                       
             trigger.player.useCard(result.links[0],trigger.target);                                                               
          }
          else{
             for(i=3;i>=0;i--){
               ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);       
             } 
             game.log(player,'#y观看牌堆顶四张牌');
             event.finish();
          }              
		},
		ai:{
          order:8,
          },
		}		        
        lib.translate.wwyj_meihua_info='每名角色的回合限一次，当一名角色使用一张单一目标的非装备牌、非延时锦囊牌的牌时，你可展示牌堆顶的四张牌，选择改用其中合理的一张牌 <font color=#F0F>已突破</font>';
        });
        
        lib.arenaReady.push(function(){
            lib.skill.wwyj_duange={     			
        	trigger:{player:'phaseDrawBegin1'},
				filter:function (event,player){
					return !event.numFixed;
				},
				frequent:true,
				audio:"ext:文武英杰:1",
				content:function(){
			 'step 0'
			trigger.changeToZero();
			event.cards=get.cards(9);
			game.cardsGotoOrdering(event.cards);     
             'step 1' 
              player.chooseCardButton('短歌：选择获得一组点数连续的牌',event.cards,[1,9]).set("filterButton",function(button){
              //player.chooseButton('短歌',[event.cards],[1,9]).set("filterButton",function(button){
	var bs=ui.selected.buttons;
	if(!bs.length)return true;
	var ns=bs.map(function(i){return i.link.number});
	return [Math.min.apply(Math,ns)-1,Math.max.apply(Math,ns)+1].contains(button.link.number);
     }); 
           'step 2'
          if(result.bool){                             
             event.cards.remove(result.links);
             player.gain(result.links,'gain2');            
             game.log(player,'获得了',result.links);            
          }
          else{
             event.goto(3);
          }
           'step 3'                       
        player.chooseCardButton('短歌：请选择牌堆顶的牌,先选择的在上',event.cards.length,event.cards,true); 
        'step 4' 
        for(var i=event.cards.length-1;i>=0;i--){ 
            event.cards.remove(result.buttons[i].link); 
            ui.cardPile.insertBefore(result.buttons[i].link,ui.cardPile.firstChild); 
        }                
            
    },             
    }
        lib.translate.wwyj_duange_info='摸牌阶段开始时，你可以放弃摸牌，改为观看牌堆顶的九张牌，然后获得其中任意一组点数为连续数的牌，并将其余的牌按任意顺序置于牌堆顶 <font color=#F0F>已突破</font>';
        });
    
		lib.arenaReady.push(function(){
            lib.skill.wwyj_qunying={     			
        	audio:"ext:文武英杰:1",
        	direct:true,				
			trigger:{player:'phaseEnd'},			
				content:function(){
					"step 0"										
				player.chooseTarget(get.prompt2('wwyj_qunying'),1,function(card,player,target){
            return player!=target;
        },function(target){
            if(player.countCards('h')<target.countCards('h')) return -get.attitude(player,target);
            return get.attitude(player,target);
        });        
           "step 1"
        if(result.bool){ 
             player.logSkill("wwyj_qunying",result.targets[0]);                
             player.swapHandcards(result.targets[0]); 
             if(player.countCards('h')==result.targets[0].countCards('h')){
               game.asyncDraw([player,result.targets[0]]); 
             }                        
        }
        else{
            event.finish();
        }    
				},			
        }
        lib.translate.wwyj_qunying_info='结束阶段，你可以和一名其他角色交换手牌，若你们手牌数相同，你可以与其各摸一张牌 <font color=#F0F>已突破</font>';
        });
        
        }  
  // ---------------------------------------Niya------------------------------------------//          
     //我的写法：
     /*lib.skill._Niya={
        trigger:{global:'gameStart',player:['enterGame']},
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        priority:2,
        filter:function (event,player){
   return game.hasPlayer(function(current){
			return current.name=='wwyj_niya';
		});
    },    
    content:function (){   
		if(player.name=='wwyj_niya'){
			if(event.isMine()){
		game.broadcastAll(function(player){       	
       	 var Animation = ui.create.div();
         Animation.setBackgroundImage('extension/文武英杰/wwyj_niyaicon.png'); 	   									     	    
     	 Animation.style.left = '70%';   	    	 
         Animation.style.top = 'calc(75% - 90px)';       
         Animation.style.width = '80px';//120
         Animation.style.height = '80px';//150            
         Animation.style.backgroundSize = 'cover';       
         Animation.style['z-index']='10';
         ui.window.appendChild(Animation);
         ui.refresh(Animation);                  
         Animation.onclick=function(){
            var player=game.findPlayer(function(current){
			    return current.name=='wwyj_niya';
		    });		    		    				
		    if(player.countCards('h')<4){
		        player.draw();
		        player.update();
		        game.playwwyj('wwyj_xugeng1');

		        game.playAudio('..','extension','文武英杰','wwyj_dansha');		        
		    }		  				    		        
		    //game.me.draw();		   		     		     
         }
         });     
			}
		}
     },     
     }	 
     */
     //niya的写法:
      lib.skill._Niya={
        trigger:{
            global:['gameStart','phaseBegin'],
            player:['enterGame'],
        },
        forced:true,
        unique:true,
        locked:true,
        //round:1,
        charlotte:true,
        priority:2020,
        filter:function(event,player){
			return game.hasPlayer(function(current){
				return current.name=='wwyj_niya';
			});
		},
		content:function(){
			if(player.name=='wwyj_niya'){
				var AnimationClick=function(){
					if(player.countCards('h')<3){
						var card=get.cards(0);
						card.position='h';
						var evt=_status.event.getParent('chooseToUse'),ok=false;
						if(_status.event.isMine()&&_status.event.name=='chooseToUse'&&_status.event.parent.name=='phaseUse'&&!_status.event.skill) evt=_status.event;
						if(evt&&evt.filterCard&&evt.filterCard(card,player)) ok=true;
						if(!lib.filter.cardAiIncluded(card)){
							ok=false;
						}else if(player.isOut()||!lib.filter.cardRespondable(card,player)||
								card.classList.contains('uncheck')||!(evt&&evt.filterCard&&evt.filterCard(card,player))) ok=false;
						
						if(ok) if(_status.event._cardChoice) _status.event._cardChoice.push(card);
						player.node.handcards1.appendChild(card);
						game.playwwyj('wwyj_xugeng1');
						game.playAudio('..','extension','文武英杰','wwyj_dansha');																												
						ui.updatehl();
						player.update();						
						if(player==game.me) ui.updatehl();
					};
				};
				if(event.isMine()){
					game.broadcastAll(function(player){
						var Animation = ui.create.div();
						Animation.setBackgroundImage('extension/文武英杰/wwyj_niyaicon.png'); 	   									     	    
						Animation.style.left = '70%';   	    	 
						Animation.style.top = 'calc(64% - 90px)';       
						Animation.style.width = '80px';//120
						Animation.style.height = '80px';//150            
						Animation.style.backgroundSize = 'cover';       
						Animation.style['z-index']='5';
						ui.window.appendChild(Animation);
						ui.refresh(Animation);
						Animation.onclick=AnimationClick;
					},player);     
				}else{
					player.node.handcards1.addEventListener('DOMSubtreeModified',function(){
						if(player.countCards('h')<3)
							setTimeout(function(){
								AnimationClick();								
							},Math.floor(Math.random()*3000));
					},true);
					player.node.handcards2.addEventListener('DOMSubtreeModified',function(){
						if(player.countCards('h')<3)
							setTimeout(function(){
								AnimationClick();								
							},Math.floor(Math.random()*3000));
					},true);
				}
			}
		},
     }	

 // ---------------------------------------AutomaticallyShowCards------------------------------------------// 
    
		game.wwyjchakaidingpai=function(){
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(27%)';
			dialog.style.width='calc(12%)';			
			dialog.style.left='65%';
			dialog.style.top='42%';
			dialog.classList.add('popped');
			dialog.classList.add('static');			
			//dialog.addSmall(game.createCard(_status.pileTop));
			dialog.add([_status.pileTop]);
			ui.window.appendChild(dialog);
			
			//计时关闭:
			setTimeout(function(){
	  	   	    dialog.delete();						
            },2022);
				 			
			//手动关闭：
			/*
			var div=ui.create.div('.menubutton.round','×',function(){				
				dialog.delete();
				ui.window.removeChild(this);				
			});
			div.style.top='50%';
			div.style.left='calc(90% - 155px)';
			div.style['zIndex']=100;
			ui.window.appendChild(div);	
            */			
		    };
		    
	if(config.wwyj_chakaidingpai){	
	    lib.skill._wwyj_showCards={
        trigger:{
            global:'gameStart',  
			player:'enterGame',
        },        
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        priority:Infinity,        
    content:function (){   		
			if(event.isMine()&&ui.cardPile.childNodes.length>=1){
		game.broadcastAll(function(player){       	
       	 var Animation = ui.create.div();		 
		 Animation.innerHTML='点击查看牌堆顶首张牌';						 				 	     
     	 Animation.style.left = '70%';   	    	 
         Animation.style.top = 'calc(85% - 90px)';       
         Animation.style.width = '80px';//120
         Animation.style.height = '50px';//150            
         Animation.style.backgroundSize = 'cover';       
         Animation.style['z-index']='20';
         ui.window.appendChild(Animation);			 
         ui.refresh(Animation);                  
         Animation.onclick=function(){             		    						  		  
		     game.wwyjchakaidingpai();
         }		 
         });     
			}
     },		  
     }
	}
//======== 
	game.wwyjlooktopcard=function(){
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(27%)';
			dialog.style.width='calc(12%)';			
			dialog.style.left='65%';
			dialog.style.top='42%';
			dialog.classList.add('popped');
			dialog.classList.add('static');			
			//dialog.addSmall(game.createCard(_status.pileTop));
		    dialog.add([_status.pileTop]);
			ui.window.appendChild(dialog);
			
			//计时关闭:
			setTimeout(function(){
	  	   	     ui.window.removeChild(dialog);
	  	   	     //dialog.delete();						
            },18000);
				 
			/*
			//手动关闭：
			var div=ui.create.div('.menubutton.round','×',function(){				
				dialog.delete();
				ui.window.removeChild(this);				
			});
			div.style.top='50%';
			div.style.left='calc(90% - 155px)';
			div.style['zIndex']=100;
			ui.window.appendChild(div);
			*/
		    };
	
	 lib.skill._wwyj_AutomaticallyShowCards={
        trigger:{
            global:['gameDrawEnd','drawEnd','judgeEnd','wuguAfter'],  			
        },        
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        priority:Infinity,
        filter:function (event,player){
   return game.hasPlayer(function(current){
			return current.hasSkill('wwyj_qianzhan');
		});
    },    
    content:function (){   		
			if(player.hasSkill('wwyj_qianzhan')&&event.isMine()&&ui.cardPile.childNodes.length>=1){		
		//delete game.wwyjlooktopcard();		
		game.wwyjlooktopcard();			
			}
     },		  
     }		 
	 
  // ---------------------------------------☆------------------------------------------//				       
      lib.skill._lc_texiao={
        trigger:{global:'gameStart',player:['enterGame']},
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        priority:Infinity,
        filter:function (event,player){
   return game.hasPlayer(function(current){
			return current.name=='wwyj_liangchax';
		});
    },    
    content:function (){   			
		if(player.name=='wwyj_liangchax'){
		game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;     					     	             
         Animation.style['z-index']='80';
         Animation.style.opacity ='0';
         Animation.style.transform = 'scale(10)';
         Animation.style.transition = 'all 0.5s';
         Animation.style.backgroundSize = 'cover';
         Animation.style.width = '240px';
         Animation.style.height = '320px';
         Animation.style.left = '42%';  
         Animation.style.top = 'calc(35% - 50px)';         
         ui.window.appendChild(Animation);
         ui.refresh(Animation);                       				     
         setTimeout(function(){
	  	   	Animation.style.opacity ='1';
	  	   	Animation.style.transform = 'scale(1)';
	  	   	Animation.style.transition = 'all 0.5s';
	  	   	Animation.style.width = '240px';
            Animation.style.height = '320px';
            Animation.style.left = '42%';  
            Animation.style.top = 'calc(35% - 50px)'; 
            game.playwwyj('wwyj_dansha');        	
       },50);         		
         setTimeout(function(){
	  	   	ui.window.removeChild(Animation);
            Animation.delete();			
       },2000);	  							         						
	     	},player);	
	   }  		   				  
     },
     }     
     
     lib.skill._lc_shiji={
        trigger:{global:'gameStart',player:['enterGame','phaseBegin','phaseEnd']},
        forced:true,
        unique:true,
        locked:true,
        charlotte:true,
        firstDo:true,
        priority:Infinity,
        filter:function (event,player){
   return game.hasPlayer(function(current){
			return current.name=='wwyj_liangchax';
		});
    },    
    content:function (){   		
		if(player.name!='wwyj_liangchax'){		    
			if(player.maxHp>16) player.maxHp=2;      
            player.update();
            player.removeSkill('wwyj_likedead');  
			player.addSkill('baiban');
			player.clearSkills();				
			game.playwwyj(['wwyj_heimao1','wwyj_heimao2'].randomGet()); 			
			player.turnOver(true);
		}
     },
     }	 
	 	 	
	lib.skill._lc_shanghai={
        trigger:{player:'damageBegin'},
        forced:true,
        unique:true,     
        charlotte:true,
        priority:2019,
        firstDo:true,
		filter:function (event,player){
		   return event.source&&event.source.name=='wwyj_liangchax';
    },
     content:function (){     
        //game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet());  
   		game.playwwyjAudio('wwyj_gainian',2);
		player.addSkill('wwyj_likedead');		
		player.loseMaxHp(trigger.num);	
		trigger.num=2*trigger.num;
		if(player.hp<=0||player.hp>20){
		  player.die()._triggered=null;
		}
     },
     }
	 
	 lib.skill._lc_mopai={
        trigger:{player:'phaseDrawBegin'},
        forced:true,
        unique:true,
        charlotte:true,
        locked:true,
        firstDo:true,
        priority:2019,       
		filter:function (event,player){
		   return player.name=='wwyj_liangchax';
    },
     content:function (){     
		var num=game.countPlayer(function(current){
			return current.isDamaged();
		});
		trigger.num+=num;		
		//game.playwwyj(['wwyj_heimao1','wwyj_heimao2'].randomGet()); 
     },
     }
	 
	 lib.skill._lc_siwang={
        trigger:{player:['damageEnd','dieBegin','phaseDiscardEnd']},
        forced:true,
        unique:true,
        charlotte:true,
        locked:true,
        firstDo:true,
        priority:Infinity,     
		filter:function (event,player){
		   return player.name=='wwyj_liangchax';
    },
     content:function (){  
     'step 0' 	  		
		trigger.cancel();
		'step 1'
		if(player.maxHp<16||player.hp<16){
		player.maxHp=Infinity;
		player.hp=Infinity;
		player.update();
		}
     },
     }
     
	 lib.skill._lc_juli={
	    trigger:{player:'useCard'},
				forced:true,
				charlotte:true,
				unique:true,
				filter:function (event,player){
					return player.name=='wwyj_liangchax'&&get.type(event.card)=='trick';
				},
				content:function(){
				//game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet()); 
					trigger.nowuxie=true;
				},
        mod:{
        globalTo:function (from,to,distance){
            if(to.name=='wwyj_liangchax') return distance+Infinity;
        },
		globalFrom:function(from,to,distance){
			if(from.name=='wwyj_liangchax') return distance-Infinity;
		},
		cardUsable:function(card,player,num){
			if(player.name=='wwyj_liangchax') return Infinity;
		},
		targetEnabled:function(card,player,target,now){						
				if(target.name=='wwyj_liangchax'&&player!=target) return false;						
					},
		selectTarget:function(card,player,range){
			var type=get.type(card);
                if(type!='delay'){
			if(card.name!='jiedao'&&card.name!='wuzhong'&&card.name!='wuxie'&&player.name=='wwyj_liangchax'&&range[1]!=-1) range[1]+=Infinity;
				}
		},			
        },
     }  
   // ---------------------------------------open boss------------------------------------------//				 
      if (config.wwyj_normalize) {
			lib.arenaReady.push(function() {			            
			var wwyj_boss = lib.characterPack['wenwuyingjie'];
				for (i in wwyj_boss) {
					var wwyj_xu = wwyj_boss[i][4];
					if (wwyj_xu.indexOf("boss") >= 0) {
						wwyj_xu[wwyj_xu.indexOf("boss")] = '';
						wwyj_xu[wwyj_xu.indexOf("bossallowed")] = '';
					}						
				}							       
			});
		}
		
		if (config.wwyj_renormalize) {
			lib.arenaReady.push(function() {			            				
		        for(var i in lib.character){		    		   
		           lib.character[i][3]='""';			
	   	        }  		    
			});
		}
	 	 
	 // ---------------------------------------wwyj_yinglingfuhun------------------------------------------//		
		   if(config.wwyj_yinglingfuhun){		
          lib.skill._wwyj_yinglingfuhun={              
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                priority:100,
                fixed:true,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
           "step 0"                  
        var list;
        if(_status.connectMode){
           list=get.charactersOL(function(i){
               return lib.character[i][1]!='shen';
           });
        }
        else{        
        list=get.gainableCharacters(function(info){
                return info[1]==['shen','shu','wei','wu','qun','jin','wwyjsha'].randomGet();
            });
        }
			player.chooseButton(true).set('ai',function(button){
						return get.rank(button.link,true)-lib.character[button.link][2];
			}).set('createDialog',['请选择一名武将当你的附灵武将',[list.randomGets(5),'character']]);			
                "step 1"                    
                 if(result.bool){
                 player.flashAvatar('_wwyj_yinglingfuhun',result.links[0]);
                 var name=result.links[0];
        var list=[];
        var skills=lib.character[result.links[0]][3];
            for(var j=0;j<skills.length;j++){
                if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                    !player.hasSkill(skills[j]
                      &&!lib.skill[skills[j]].zhuSkill)){
                    list.push(skills[j]);
                }
            }
        player.flashAvatar('_wwyj_yinglingfuhun',list);            
        player.addAdditionalSkill('_wwyj_yinglingfuhun',list);
        player.markCharacter(name,null,true,true);
                  }      
    },
                ai:{
                    order:8,
                },
            }
            }
    // ---------------------------------------wwyj_sjwjp------------------------------------------//				               
      if(config.wwyj_sjwjp){		
    lib.skill._wwyj_sjwjp={
     trigger:{
                    global:"roundStart",
                },
          forced:true,          
                content:function (){
                    "step 0"                
                    var targets=game.filterPlayer();                   
                    targets.sort(lib.sort.seat);
                    event.targets=targets;                
                    "step 1"
                    event.num=0;          
                    "step 2"
                    if(event.num<event.targets.length){
                          var list;
        if(_status.connectMode){
           list=get.charactersOL(function(i){
               return lib.character[i][1]!='shen';
           });
        }
        else{        
        list=get.gainableCharacters(function(info){
                return info[1]==['shen','shu','wei','wu','qun','jin','wwyjsha'].randomGet();
            });
        }
        var name=list.randomGet();        
        var a=event.targets[event.num].hp;
        var b=event.targets[event.num].maxHp;
        event.targets[event.num].init(name);
        event.targets[event.num].hp=a; 
        event.targets[event.num].maxHp=b;
        event.targets[event.num].update();        
        event.num++;
        event.redo();
        }
        else event.finish();     
                },
    }
    }
    // ---------------------------------------★------------------------------------------//				 
    if(config.wwyj_xinname=='hide'){
			get.slimName=function(str){
				var str2=lib.translate[str];
				if(!str2) return '';
				if(str2.indexOf('★')==0){
					str2=str2.slice(1);				
				}
				return get.verticalStr(str2,true);
			}
		}
    // ---------------------------------------gengminggaixing------------------------------------------//			
	if(config.wwyj_gengminggaixing) {
		lib.translate['wwyj_liangchas']='玉蝴蝶';		
		lib.translate['wwyj_taishangdaniu']='落影逝尘';
		lib.translate['wwyj_guihua']='黑猫';
		lib.translate['wwyj_duanges']='短鸽';
		lib.translate['wwyj_zhaonies']='冰雪雨柔';
		
	}
	else {
		lib.translate['wwyj_liangchas']='凉茶';		
		lib.translate['wwyj_taishangdaniu']='太上大牛';
		lib.translate['wwyj_guihua']='松岛枫桂花';
		lib.translate['wwyj_duanges']='短歌';
		lib.translate['wwyj_zhaonies']='造孽';
				
	}	
	
	lib.skill._changename={     
        trigger:{
           player:"enterGame",
           global:"gameStart",
        }, 
        filter:function (event,player){
            return player.name=='wwyj_Sukincen'||player.name=='wwyj_fux2'||player.name=='wwyj_Show-K'||player.name=='wwyj_lei';
        },      
        //forced:true,
        //popup:false,  
        priority:Infinity,             
		forbid:['guozhan'],          
        content:function (){                               
            if(player.name=='wwyj_Sukincen'){
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='Sukincen';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';
				 //text.style.left='25%';			
				 text.style.transform='translateY(-200px)';//Y轴向负移动
				 text.style['font-size']='12px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
            }  
            if(player.name=='wwyj_fux2'){                 
                 //player.node.name.innerHTML='fux2';
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='fux2';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';				 			
				 text.style.transform='translateY(-200px)';
				 text.style['font-size']='20px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
            }  
            if(player.name=='wwyj_Show-K'){
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='Show-K';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';
				 //text.style.left='25%';			
				 text.style.transform='translateY(-200px)';//Y轴向负移动
				 text.style['font-size']='12px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
            }  
            if(player.name=='wwyj_lei'){
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='Thunder';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';
				 //text.style.left='25%';			
				 text.style.transform='translateY(-200px)';//Y轴向负移动
				 text.style['font-size']='17px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,150,1) 0 0 2px,rgba(255,128,150,1) 0 0 2px,rgba(255,128,150,1) 0 0 2px,rgba(255,128,150,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
            }     
        }
        }      		
	// ---------------------------------------wujiangpingji------------------------------------------//
	//if(config.wwyj_wujiangpingji) {	
	    //game.saveConfig('show_rarity');
		//普通
	    lib.rank.rarity.junk.addArray(['wwyj_dasima','wwyj_Show-K','wwyj_ziyage','wwyj_kanpoyiqie','wwyj_danwuyunxi','wwyj_xingyunnvshen','wwyj_feicheng','wwyj_xuebi','wwyj_lengyus','wwyj_liushas','wwyj_wzszhaoyun','wwyj_anshas','wwyj_ranqis']);	
		//史诗
		lib.rank.rarity.rare.addArray(['wwyj_rshun','wwyj_rcanghai','wwyj_hualuo','wwyj_lunhuizhong','wwyj_lei','wwyj_daxiongxiaimao','wwyj_huijin','wwyj_taishangdaniu','wwyj_wali','wwyj_yanyumoran','wwyj_shijian','wwyj_shenzuo','wwyj_zhaonies','wwyj_qianshangs','wwyj_limuzi','wwyj_fux2','wwyj_shenwangquanjian','wwyj_wuqinggezi','wwyj_qingzhongs','wwyj_zhulinqixian','wwyj_jianyaleishao','wwyj_zhongchengpantu','wwyj_zhuxiaoer','wwyj_rongyaotaoge']);	
		//传说
		lib.rank.rarity.epic.addArray(['wwyj_qingyao','wwyj_pipi','wwyj_liangchas','wwyj_mengxinzhuanxing','wwyj_chengxuyuan','wwyj_chenwus','wwyj_yangguangweiliang','wwyj_Sukincen','wwyj_kelejiabing','wwyj_remaliao','wwyj_zhugejun','wwyj_yitiaoxianyu','wwyj_shennais','wwyj_yiwangs','wwyj_tilongjianiao','wwyj_huanyuxingcheng','wwyj_xuedaoshaozhu','wwyj_duanges','wwyj_guchengs','wwyj_bohetang','wwyj_yuhudie','wwyj_tianqikui','wwyj_zhichitianya','wwyj_chansuideshengming','wwyj_fanxings']);	
		//神话
		lib.rank.rarity.legend.addArray(['wwyj_shuihu','wwyj_liangchax','wwyj_jiguangs','wwyj_guihua','wwyj_hezifengyun','wwyj_niya']);	
		//,'xxxx','xxx','xxx','xxxx','xxx','xxx','xxx','xxx'
	//}	
					
	// ---------------------------------------wwyjwjl------------------------------------------//
	game.wwyjwjl_createButton=function(name,bool){
		var div=ui.create.button(name,'character');
		div.style.cursor='pointer';
		div.style.borderRadius='5px';
		//技能皮肤:
		/*if(lib.config.extension_文武英杰_wwyjwjl_showSS==true&&lib.skillSkin_character!=undefined&&lib.skillSkin_character.contains(name)){
			div.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(75,255,0,0.4) 0 0 5px, rgba(75,255,0,0.4) 0 0 12px, rgba(75,255,0,0.8) 0 0 15px';
		};*/
		//能否联机：
		if(bool==true&&lib.config.extension_文武英杰_wwyjwjl_showLJ==true){
			div.node.hp.style['zIndex']=1;
			div.node.name.style['zIndex']=1;
			var div1=ui.create.div('');
			div1.style.height='20px';
			div1.style.width='48px';
			div1.style.bottom='0px';
			div1.style.left='0px';
			div1.style['font-size']='15px';
			div1.style['text-align']='center';
			div1.style['font-family']='shousha';
			div1.style['line-height']='20px';
			div1.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			div1.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			div1.style['white-space']='nowrap';
			div1.style.borderRadius='5px';
			div1.innerHTML='可联机';
			if(div.node.occupation){
				div1.style.left='20px';
				div.node.hp.style.right='0px';
				div.node.hp.style.bottom='2px';
			};
			div.appendChild(div1);
		};
		
		var banned=lib.config.banned||[];
		if(banned.contains(name)){
			div.classList.add('banned');
		};
		return div;
	};
	//介绍：	
	var characterPackInfo={
		'wenwuyingjie':{
			info:'·设计者：凉茶<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp 本扩展的武将均为无名杀的众多作者与玩家，除至尊荣耀系列外，强度相对平衡。可联机，包含多种特效与模式',
		},				
	};
	//open：					
		game.wwyj_openCharacterPack=function(name,node){
		//ui.click.configMenu();
		//game.pause2();
		ui.system.style.display='none';
		ui.menuContainer.style.display='none';
		var dialog1={};
		var divs={};
		
		var background=ui.create.dialog('hidden');
		background.style.height='calc(100%)';
		background.style.width='calc(100%)';
		background.style.left='0px';
		background.style.top='0px';
		ui.window.appendChild(background);
		dialog1.background=background;
		
		var dialog=ui.create.dialog('hidden');
		dialog.classList.add('popped');
		dialog.classList.add('static');
		dialog.style.animation='faderightIn .4s';
		dialog.style['-webkit-animation']='faderightIn .4s';
		dialog.style.height='500px';
		dialog.style.width='739px';
		dialog.style.left='calc(50% - 369.5px)';
		dialog.style.top='calc(50% - 250px)';
		dialog.style.transform='scale('+lib.config['extension_文武英杰_wwyjwjl_sf']+','+lib.config['extension_文武英杰_wwyjwjl_sf']+')';
		ui.window.appendChild(dialog);
		dialog1.dialog=dialog;
		
		var packName=ui.create.div('.menu');
		packName.style.height='38px';
		packName.style.width='calc(100% - 25px)';
		packName.style.left='12.4px';
		packName.style.top='12.5px';
		packName.style['font-size']='38px';
		packName.style['text-align']='center';
		packName.style['font-family']='shousha';
		packName.style['line-height']='40px';
		packName.style['font-weight']=600;	
		//大标题：
			packName.innerHTML='文武英杰';		
		//if(lib.translate[name+'_character_config']=='<span style=\"font-size:17px;font-weight:600\">文武英杰-BOSS</span>') packName.innerHTML='文武英杰-BOSS';
		if(lib.translate[name+'_character_config']=='<span style="font-size:15px;font-weight:600">文武英杰</span>') packName.innerHTML='文武英杰';
		dialog.appendChild(packName);
		
		var packInfo=ui.create.div('.menu');
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packInfo.style.height='87.5px';
			packInfo.style.width='calc(100% - 25px)';
			packInfo.style.left='12.5px';
			packInfo.style.top='65px';
		}else{
			packInfo.style.height='160px';
			packInfo.style.width='calc(40% - 2.5px)';
			packInfo.style.left='12.5px';
			packInfo.style.top='65px';
		};
		//packInfo.style.cursor='pointer';
		packInfo.style['font-size']='17px';
		packInfo.style['text-align']='justify';
		packInfo.style['font-family']='shousha';
		packInfo.style['line-height']='17px';
		packInfo.style['font-weight']=600;
		packInfo.style['overflow-x']='hidden';
		packInfo.style['overflow-y']='scroll';
		var str='';
		if(characterPackInfo['wenwuyingjie']!=undefined){
			str+=characterPackInfo['wenwuyingjie'].info;
		};
		packInfo.innerHTML=str;
		dialog.appendChild(packInfo);		
		if(lib.config.extension_文武英杰_wwyjwjl_fddh!=true) packInfo.style.transition='opacity 0s';
		
		packInfo.ondblclick=function(e){
			e.preventDefault();
			if(this.link_wwyjs_clicked==true){
				delete this.link_wwyjs_clicked;
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packInfo.style.height='87.5px';
				}else{
					packInfo.style.height='160px';
				};
				packInfo.style.top='65px';
				packInfo.style['zIndex']=0;
			}else{
				this.link_wwyjs_clicked=true;
				packInfo.style.height='calc(100% - 25px)';
				packInfo.style.top='12.5px';
				packInfo.style['zIndex']=5;
			};
		};
		
		var packSwith=ui.create.div('.menu');
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packSwith.style.height='60px';
			packSwith.style.width='calc(100% - 25px)';
			packSwith.style.left='12.5px';
			packSwith.style.top='165px';
			packSwith.style['text-align']='left';
			packSwith.style['overflow-x']='scroll';
			packSwith.style['overflow-y']='hidden';
			packSwith.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
		}else{
			packSwith.style.height='250px';
			packSwith.style.width='calc(40% - 2.5px)';
			packSwith.style.left='12.5px';
			packSwith.style.top='237.5px';
			packSwith.style['text-align']='center';
			packSwith.style['overflow-x']='hidden';
			packSwith.style['overflow-y']='scroll';
		};
		lib.setScroll(packSwith);
		packSwith.link_switch='all';
		packSwith.link_switch1='all';
		dialog.appendChild(packSwith);		
		if(lib.config.extension_文武英杰_wwyjwjl_fddh!=true) packSwith.style.transition='opacity 0s';
		//全部:
		var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">全部</span>');
		packSwith1.style['font-size']='27px';
		packSwith1.style['line-height']='45px';
		packSwith1.style['font-family']='shousha';
		packSwith1.style['font-weight']=600;
		packSwith1.style['white-space']='nowrap';
		packSwith1.style.top='5px';
		packSwith1.style.height='40px';
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packSwith1.style.left='5px';
			packSwith1.style.width='110px';
		}else{
			packSwith1.style.margin='5px';
			packSwith1.style.position='relative';
			packSwith1.style.width='126px';
		};
		packSwith1.style.borderRadius='5px';
		packSwith1.onclick=function(){
			if(packSwith.link_onTwo==undefined){
				packSwith.link_switch='all';
			}else{
				packSwith.link_switch1='all';
			};
			var div=divs.packCharacter;
			for(var i=0;i<div.childNodes.length;i++){
				if(packSwith.link_switch=='all'){
					div.childNodes[i].style.display='';
				}else{
					if(packSwith.link_switch.contains(div.childNodes[i].link)){
						div.childNodes[i].style.display='';
					};
				};
			};
		};
		
		packSwith1.style.transition='opacity 0.5s';
		
		if(lib.config.button_press){
			packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
		};
		
		packSwith.appendChild(packSwith1);
		//势力：
		var groups={};
		for(var i in lib.characterPack['wenwuyingjie']){
			var character=lib.characterPack['wenwuyingjie'][i];
			if(groups[character[1]]==undefined) groups[character[1]]=[];
			groups[character[1]].push(i);
		};
		var list=[];
		var groups_name=[];
		for(var i in groups){
			list.push(groups[i]);
			groups_name.push(i);
		};
		//分类 ：
		if(lib.characterSort!=undefined&&lib.characterSort['wenwuyingjie']!=undefined){
			var num=0;
			var characters=[];
			for(var i in lib.characterPack['wenwuyingjie']){
				characters.push(i);
			};
			for(var i in lib.characterSort['wenwuyingjie']){
				for(var j=0;j<lib.characterSort['wenwuyingjie'][i].length;j++){
					characters.remove(lib.characterSort['wenwuyingjie'][i][j]);
				};
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">'+get.translation(i)+'</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packSwith1.style.left=(5+125*(num+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=lib.characterSort['wenwuyingjie'][i];
				
				packSwith1.onclick=function(){
					packSwith.link_switch=this.link;
					if(list.length>=2){
						packSwith.link_onTwo=true;
						for(var i=0;i<packSwith.childNodes.length;i++){
							if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
							if(packSwith.childNodes[i].link_name!=undefined) packSwith.childNodes[i].style.display='';
						};
					};
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				num++;
			};
			
			if(characters.length>0){
				for(var j=0;j<lib.characterSort['wenwuyingjie'][i].length;j++){
					characters.remove(lib.characterSort['wenwuyingjie'][i][j]);
				};
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">其他</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packSwith1.style.left=(5+125*(num+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=characters;
				packSwith1.onclick=function(){
					packSwith.link_switch=this.link;
					packSwith.link_onTwo=true;
					for(var i=0;i<packSwith.childNodes.length;i++){
						if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
						if(packSwith.childNodes[i].link_name!=undefined) packSwith.childNodes[i].style.display='';
					};
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				num++;
			};
		};
		
		if(list.length>=2){
			for(var i=0;i<list.length;i++){
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">'+get.translation(groups_name[i])+'</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
					packSwith1.style.left=(5+125*(i+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=list[i];
				packSwith1.link_name=name;
				
				packSwith1.onclick=function(){
					packSwith.link_switch1=this.link;
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				if(lib.characterSort!=undefined&&lib.characterSort['wenwuyingjie']!=undefined) packSwith1.style.display='none';
			};
		};
		
		var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>');
		packSwith1.style['font-size']='27px';
		packSwith1.style['line-height']='45px';
		packSwith1.style['font-family']='shousha';
		packSwith1.style['font-weight']=600;
		packSwith1.style['white-space']='nowrap';
		packSwith1.style.top='5px';
		packSwith1.style.height='40px';
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packSwith1.style.left=(5+125*(list.length+1))+'px';
			packSwith1.style.width='110px';
		}else{
			packSwith1.style.margin='5px';
			packSwith1.style.position='relative';
			packSwith1.style.width='126px';
		};
		packSwith1.style.borderRadius='5px';
		packSwith1.style.display='none';
		packSwith1.link_name='返回';
		
		packSwith1.onclick=function(){
			packSwith.link_switch1='all';
			delete packSwith.link_onTwo;
			for(var i=0;i<packSwith.childNodes.length;i++){
				if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
				if(packSwith.childNodes[i].link_name!=undefined){
					packSwith.childNodes[i].style.display='none';
				}else{
					packSwith.childNodes[i].style.display='';
				};
			};
			var div=divs.packCharacter;
			for(var i=0;i<div.childNodes.length;i++){
				if(packSwith.link_switch=='all'){
					if(packSwith.link_switch1=='all'){
						div.childNodes[i].style.display='';
					}else{
						if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
					};
				}else{
					if(packSwith.link_switch.contains(div.childNodes[i].link)){
						if(packSwith.link_switch1=='all'){
							div.childNodes[i].style.display='';
						}else{
							if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
						};
					};
				};
			};
		};
		
		packSwith1.style.transition='opacity 0.5s';
		if(lib.config.button_press){
			packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
		};
		packSwith.appendChild(packSwith1);
		
		var packCharacter=ui.create.div('.menu');
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packCharacter.style.height='250px';
			packCharacter.style.width='calc(100% - 25px)';
			packCharacter.style.left='12.5px';
			packCharacter.style.top='237.5px';
		}else{
			packCharacter.style.height='422.5px';
			packCharacter.style.width='calc(60% - 35px)';
			packCharacter.style.right='12.5px';
			packCharacter.style.top='65px';
		};
		packCharacter.style['text-align']='left';
		packCharacter.style['overflow-x']='hidden';
		packCharacter.style['overflow-y']='scroll';
		lib.setScroll(packCharacter);
		dialog.appendChild(packCharacter);
		if(lib.config.extension_文武英杰_wwyjwjl_fddh!=true) packCharacter.style.transition='opacity 0s';
		if(lib.config.extension_文武英杰_wwyjwjl_layout=='ud'){
			packCharacter.ondblclick=function(e){
				e.preventDefault();
				if(this.link_wwyjs_clicked==true){
					delete this.link_wwyjs_clicked;
					packSwith.style.top='165px';
					packCharacter.style['zIndex']=0;
					packCharacter.style.height='250px';
					packCharacter.style.top='237.5px';
				}else{
					this.link_wwyjs_clicked=true;
					packSwith.style.top=(packCharacter.offsetTop+packCharacter.offsetHeight+15)+'px';
					packCharacter.style.height='calc(100% - 25px)';
					packCharacter.style.top='12.5px';
					packCharacter.style['zIndex']=5;
				};
			};
		};
		divs.packCharacter=packCharacter;
		var characterButtons=[];
		for(var i in lib.characterPack['wenwuyingjie']){
			characterButtons.push(i);
		};
		if(characterButtons.length>0){
			var interval;
			setTimeout(function(){
				interval=setInterval(function(){
					var num=50;
					if(num>characterButtons.length) num=characterButtons.length;
					for(var i=0;i<num;i++){
						var character=lib.characterPack['wenwuyingjie'][characterButtons[0]];
						var bool=false;
						if(!lib.connectBanned.contains(characterButtons[0])&&lib.characterPack['wenwuyingjie']!=undefined&&name!='wenwuyingjie') bool=true;
						var characterButton=game.wwyjwjl_createButton(characterButtons[0],bool);
						characterButton.link=characterButtons[0];
						/*characterButton.onclick=function(){
							if(lib.wwyjs_jswj_character[this.link]==undefined||
							(lib.wwyjs_jswj_character[this.link]!=undefined&&lib.config.wwyjs_jswj[this.link]==true)) ui.click.charactercard(this.link,this);
						};*/
						if(name=='mode_extension_凉茶') characterButton.style.display='none';
						packCharacter.appendChild(characterButton);
						characterButtons.remove(characterButtons[0]);
					};
					if(characterButtons.length==0) clearInterval(interval);
				},100);
			},lib.config.extension_文武英杰_wwyjwjl_load==true?10:300);
		};
		var style1={
			'zIndex':5,
			'white-space':'nowrap',
			'text-align':'center',
			'font-size':'20px',
			'line-height':'19px',
			'font-family':"'STXinwei','xinwei'",
			'cursor':'pointer',
			'borderRadius':'5px',
			'height':'40px',
			'width':'130px',
			'bottom':'3px',
			'animation':'fadelogIn .4s',
			'-webkit-animation':'fadelogIn .4s',
		};
		//帖子连接：
		/*if(characterPackInfo['wenwuyingjie']!=undefined&&characterPackInfo['wenwuyingjie'].url!=undefined){
			var urls=characterPackInfo['wenwuyingjie'].url;
			var num1=0;
			for(var i in urls){
				var button1=ui.create.div('.menu');
				for(var j in style1){
					button1.style[j]=style1[j];
				};
				button1.style.right=(3+135*num1)+'px';
				button1.style.transition='opacity 0.5s';
				ui.window.appendChild(button1);
				if(lib.config.button_press){
					button1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					button1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				if(i.indexOf('官网')!=-1){
					button1.style['font-size']='25px';
					button1.style['line-height']='40px';
					button1.innerHTML=i;
				}else{
					button1.innerHTML='设计贴<br>'+i;
				};
				button1.link=urls[i];
				button1.onclick=function(){
					if(this.link=='已删贴'){
						game.say1('设计贴已被删除');
					}else{
						game.open(this.link);
					};
				};
				dialog1[num1]=button1;
				num1++;
			};
		};
		*/
		/*if(name=='mode_extension_凉茶'){
			game.say1('需加载卡牌较多，默认隐藏所有卡牌，稍等后点击选择条件即可显示');
		};*/
		
		var div=ui.create.div('');
		div.style.height='calc(100%)';
		div.style.width='calc(100%)';
		div.style.left='0px';
		div.style.top='0px';

			//禁用：
		/*if(lib.wwyjprogram&&lib.wwyjprogram.character&&lib.characterPack['wenwuyingjie']){
			var forbid=ui.create.div();
			forbid.classList.add('popped');
			forbid.classList.add('static');
			forbid.style.height='34px';
			forbid.style.width='85px';
			forbid.style.bottom='2px';
			forbid.style.right='5px';
			forbid.style.borderRadius='5px';
			forbid.style['text-align']='center';
			forbid.style['font-size']='25px';
			forbid.style['line-height']='34px';
			forbid.style['font-family']="'STXinwei','xinwei'";
			forbid.style['background-image']='linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))';
			forbid.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			forbid.style['cursor']='pointer';
			forbid.style['background-image']='linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4))';
			//forbid.style['z-index']=22;
			
			if(lib.config['extension_文武英杰_'+name]==true){
				forbid.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>';
				forbid.style.backgroundColor="rgb(255, 0, 0)";
			}else{
				forbid.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">启用中</span>';
				forbid.style.backgroundColor="rgb(0, 255, 0)";
			};
			forbid.link=name;
			forbid.link1=node;
			forbid.onclick=function(){
				var name=this.link;
				var node=this.link1;
				if(this.innerHTML=='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>'){
					game.saveConfig('extension_文武英杰_'+name,false);
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">启用中</span>';
					forbid.style.backgroundColor="rgb(0, 255, 0)";
					node.classList.remove('off');
					//game.say1('启用'+lib.characterPack['wenwuyingjie']+'包成功');
				}else{
					game.saveConfig('extension_文武英杰_'+name,true);
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>';
					forbid.style.backgroundColor="rgb(255, 0, 0)";
					node.classList.add('off');
					//game.say1('禁用'+lib.characterPack['wenwuyingjie']+'包成功');
				};
			};
			packName.appendChild(forbid); 
		};
		*/		
		var func1=function(){
			ui.system.style.display='';
			//ui.menuContainer.style.display='';
			setTimeout(function(){
				//ui.click.configMenu();
				ui.menuContainer.style.display='';
			},500);
			for(var i in dialog1){
				dialog1[i].delete();
			};
		};
		setTimeout(function(){
			div.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
				func1();
				if(interval!=undefined) clearInterval(interval);
			});
		},750);
		background.appendChild(div);
	};
   																																																																																																																																																																																																																																																																																																																																																																																																																																																																												
    // ---------------------------------------wujianglang------------------------------------------//		
	
	if(config.wenwuyingjie){
		for(var i in lib.characterPack['wenwuyingjie']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	
},precontent:function (wwyj){     		    
    window.wwyj_import=function(func){
        func(lib,game,ui,get,ai,_status);
    };
   // lib.init.js(lib.assetURL +'extension/文武英杰/skin.js');  //202312
    /*
    lib.init.js(lib.assetURL +'extension/文武英杰/skin.js',null,function(){
            
    },function(){

    });*/
    
	/*//css：
	var link = document.createElement("link");
	link.href = lib.assetURL + "extension/文武英杰/wwyj_waiguan.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link); */
	lib.extensionMenu.extension_文武英杰.newtujian={
		"name":"全新图鉴<div>&gt;</div>",
		"clear":true,
		"onclick":function(){			
			game.playwwyj('wwyj_dansha');
			//ui.click.configMenu();
			game.wwyj_showNewtujian();				
		},
	};
	lib.init.js(lib.assetURL+'extension/文武英杰','newtujian',function(){});
	lib.init.js(lib.assetURL+'extension/文武英杰','update',function(){});
	delete lib.extensionMenu.extension_文武英杰.delete;	
	lib.extensionMenu.extension_文武英杰.changelog={
		//"name":"<span style='text-decoration: underline'>查看更新日志</span>",
		"name":"更新日志<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			//game.playwwyj('wwyj_show');
			game.playwwyj('wwyj_dansha');
			//ui.click.configMenu();
			game.wwyj_showChangeLog();
			//alert('网络链接失败');
		},
	};	
	
	lib.extensionMenu.extension_文武英杰.wwyj_yugao={	
        name:'<div class="wwyj_menu">更新预告<font size="3px">⇨</font></div>',
        clear:true,
        onclick:function(){
			if(this.wwyj_yugao==undefined){
				game.playwwyj('wwyj_dansha'); 
				var more=ui.create.div('.wwyj_yugao','<li>扩展作者：升麻、极彩色、灰太狠<li>粉丝玩家：待定');
				this.parentNode.insertBefore(more,this.nextSibling);
				this.wwyj_yugao=more;
				this.innerHTML='<div class="wwyj_menu">更新预告<font size="3px">⇩</font></div>';
			}else{
				game.playwwyj('wwyj_show');
				this.parentNode.removeChild(this.wwyj_yugao);
				delete this.wwyj_yugao;
				this.innerHTML='<div class="wwyj_menu">更新预告<font size="3px">⇨</font></div>';
			}
		},
    };
    
    lib.extensionMenu.extension_文武英杰.wwyj_最佳拍档={	
        name:'<div class="wwyj_menu">最佳拍档<font size="3px">⇨</font></div>',
        clear:true,
        onclick:function(){
			if(this.wwyj_zuijiapaidang==undefined){
				game.playwwyj('wwyj_dansha'); 
				var more=ui.create.div('.wwyj_zuijiapaidang','<li>装备流：极光+烟雨墨染+血刀少主+Niya/造孽/薄荷糖<li>翻面系：小溪（Show-K）+诸葛均+咸鱼+孤城<li>辅助爆发组：太上大牛+大熊小猫+神奈+Niya<li>属性爆发：雷+萌新转型+剑牙雷少+李木子/神奈');
				this.parentNode.insertBefore(more,this.nextSibling);
				this.wwyj_zuijiapaidang=more;
				this.innerHTML='<div class="wwyj_menu">最佳拍档<font size="3px">⇩</font></div>';
			}else{
				game.playwwyj('wwyj_show');
				this.parentNode.removeChild(this.wwyj_zuijiapaidang);
				delete this.wwyj_zuijiapaidang;
				this.innerHTML='<div class="wwyj_menu">最佳拍档<font size="3px">⇨</font></div>';
			}
		},
    };
    
	lib.extensionMenu.extension_文武英杰.BUG={
		//"name":"<span style='text-decoration: underline'>反馈BUG及投稿、提建议</span>",
		"name":"反馈BUG<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			//game.playwwyj('wwyj_show');
			game.playwwyj('wwyj_dansha');
			game.open('https://tieba.baidu.com/p/6657464280');
		},
	};			
	
	lib.extensionMenu.extension_文武英杰.wwyjwjl_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----浏览武将-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_文武英杰.wwyjwjl_info={
		"name":"点击下方的“浏览武将<div>&gt;</div>”即可弹出浏览界面",
		"clear":true,
		"nopointer":true,
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl={
		"name":"浏览武将<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			//game.playwwyj('wwyj_show');
			game.playwwyj('wwyj_dansha');
			//ui.click.configMenu();
			game.wwyj_openCharacterPack();				
		},
	};
	lib.extensionMenu.extension_文武英杰.wwyjwjl_fddh={
		"name":"放大动画",
		"init":true
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_load={
		"name":"边打开边加载",
		//"init":lib.device?false:true,
		"init":false,
		"intro":"开启后，打开武将包界面时立即加载武将"
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_showLJ={
		"name":"显示是否可以联机",
		"init":false,
		"intro":"开启后可以在文武英杰武将包界面显示武将是否可以联机"
    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_layout={
		name:'浏览武将界面布局',
		init:'lr',
		item:{
			'ud':'上下',
			'lr':'左右',
		},
	visualMenu:function(node,link){
			if(!node.created){
				node.created=true;
				node.className='menu';
				node.setBackgroundImage('theme/style/card/image/ol.png');
				node.firstChild.style.display='none';
				var packName=ui.create.div('.menu');
				packName.style.height='9px';
				packName.style.width='calc(100% - 6px)';
				packName.style.left='3px';
				packName.style.top='2.5px';
				packName.style['border-radius']='3px';
				node.appendChild(packName);
				var packInfo=ui.create.div('.menu');
				if(link=='ud'){
					packInfo.style.height='21.5px';
					packInfo.style.width='calc(100% - 6px)';
					packInfo.style.left='3px';
					packInfo.style.top='15px';
				}else{
					packInfo.style.height='31.5px';
					packInfo.style.width='calc(40% - 7px)';
					packInfo.style.left='3px';
					packInfo.style.top='15px';
				};
				packInfo.style['border-radius']='3px';
				node.appendChild(packInfo);
				var packSwith=ui.create.div('.menu');
				if(link=='ud'){
					packSwith.style.height='10px';
					packSwith.style.width='calc(100% - 6px)';
					packSwith.style.left='3px';
					packSwith.style.top='40px';
				}else{
					packSwith.style.height='36px';
					packSwith.style.width='calc(40% - 7px)';
					packSwith.style.left='3px';
					packSwith.style.top='50px';
				};
				packSwith.style['border-radius']='3px';
				node.appendChild(packSwith);
				var packCharacter=ui.create.div('.menu');
				if(link=='ud'){
					packCharacter.style.height='33px';
					packCharacter.style.width='calc(100% - 6px)';
					packCharacter.style.left='3px';
					packCharacter.style.top='52.5px';
				}else{
					packCharacter.style.height='70.5px';
					packCharacter.style.width='calc(60% - 2.4px)';
					packCharacter.style.left='calc(40% - 1px)';
					packCharacter.style.top='15px';
				};
				packCharacter.style['border-radius']='3px';
				node.appendChild(packCharacter);
			};
		},	
	    };
	lib.extensionMenu.extension_文武英杰.wwyjwjl_sf={
		name:'浏览武将界面缩放',
		init:1,
		item:{
			0.6:'60%',
			0.7:'70%',
			0.8:'80%',
			0.9:'90%',
			0.95:'95%',
			1:'100%',
			1.05:'105%',
			1.1:'110%',
			1.2:'120%',
		},
	};
	
   if(wwyj.enable){			
     game.import('character',function(){			
			 var wenwuyingjie={
				name:'wenwuyingjie',
				connect:true,
				characterSort:{
	 		wenwuyingjie:{
	 		    "wwyj_zhizun":["wwyj_shuihu","wwyj_liangchax"],
				
				"wwyj_zuozhe":["wwyj_liangchas","wwyj_chengxuyuan","wwyj_pipi","wwyj_Sukincen",
				"wwyj_qianshangs","wwyj_zhaonies","wwyj_lengyus","wwyj_shenzuo","wwyj_guihua",
				"wwyj_yitiaoxianyu","wwyj_xuebi","wwyj_yanyumoran","wwyj_wali","wwyj_kelejiabing",
				"wwyj_danwuyunxi","wwyj_jiguangs","wwyj_taishangdaniu","wwyj_Show-K","wwyj_shijian",
				"wwyj_huijin","wwyj_kanpoyiqie","wwyj_yiwangs","wwyj_shennais","wwyj_huanyuxingcheng",
				"wwyj_duanges","wwyj_wuqinggezi","wwyj_shenwangquanjian","wwyj_ziyage","wwyj_guchengs",
				"wwyj_yuhudie","wwyj_hezifengyun","wwyj_fux2","wwyj_qingzhongs","wwyj_remaliao",
				"wwyj_bohetang","wwyj_niya","wwyj_zhongchengpantu","wwyj_tianqikui","wwyj_zhichitianya",
				"wwyj_jianyaleishao","wwyj_anshas","wwyj_zhuxiaoer","wwyj_ranqis","wwyj_chansuideshengming",
				"wwyj_fanxings","wwyj_yangguangweiliang","wwyj_rongyaotaoge","wwyj_chenwus","wwyj_lei",
				"wwyj_mengxinzhuanxing","wwyj_dasima","wwyj_rcanghai","wwyj_qingyao"
				
				
				],
				
				"wwyj_fensi":["wwyj_xuedaoshaozhu","wwyj_limuzi","wwyj_tilongjianiao","wwyj_liushas","wwyj_zhugejun",
				"wwyj_feicheng","wwyj_xingyunnvshen","wwyj_lunhuizhong","wwyj_daxiongxiaimao","wwyj_wzszhaoyun",
				"wwyj_zhulinqixian","wwyj_hualuo","wwyj_rshun"
				
				],
								
			},
		},				
		character:{
           	"wwyj_shuihu":["male","shen",3,["wwyj_chuangshi","wwyj_qianfu","wwyj_ancha","wwyj_huikeng"],[]],
          	"wwyj_liangchax":["female","shen",Infinity,["wwyj_liangcha","wwyj_fanghua","wwyj_meiying"],["boss"]],
            "wwyj_liangchas":["female","wwyjsha",3,["wwyj_caizhi","wwyj_daixue"],[]],  
            "wwyj_zhichitianya":["female","wwyjsha",3,["wwyj_zhichi","wwyj_tianya"],[]],             
            "wwyj_chengxuyuan":["male","wwyjsha",4,["wwyj_jiedan"],[]],
            "wwyj_pipi":["female","wwyjsha",3,["wwyj_xipi","wwyj_baozao"],[]],
            "wwyj_Sukincen":["male","wwyjsha",3,["wwyj_fengliu","wwyj_qunying"],[]],
            "wwyj_wzszhaoyun":["male","wwyjsha",5,["wwyj_jiaoxiao","wwyj_zuikui"],[]],
            "wwyj_lunhuizhong":["male","wwyjsha",3,["wwyj_qiandao","wwyj_yingguai","wwyj_qianzhui"],[]],
            "wwyj_ziyage":["male","wwyjsha",3,["wwyj_ciya","wwyj_jinxiu"],[]],
            "wwyj_kanpoyiqie":["male","wwyjsha",3,["wwyj_lilun","wwyj_yanguan"],[]],
            "wwyj_daxiongxiaimao":["male","wwyjsha",4,["wwyj_chengpiao","wwyj_jipin"],[]],
            "wwyj_kelejiabing":["male","wwyjsha",3,["wwyj_jilve","wwyj_tuikeng"],[]],
            "wwyj_huijin":["male","wwyjsha",4,["wwyj_chehuo","wwyj_jinzhu","wwyj_kangfu"],[]],            
            "wwyj_Show-K":["male","wwyjsha",3,["wwyj_daigeng","wwyj_liuxi"],[]],
			"wwyj_remaliao":["male","wwyjsha",3,["wwyj_jianghun","wwyj_chengzhi"],[]],
            "wwyj_taishangdaniu":["male","wwyjsha",4,["wwyj_yixue","wwyj_qianxu"],[]],
            "wwyj_jiguangs":["female","wwyjsha",3,["wwyj_jiguang","wwyj_kazhan"],[]],
            "wwyj_danwuyunxi":["male","wwyjsha",3,["wwyj_kaiche","wwyj_shengshen"],[]],
            "wwyj_xingyunnvshen":["female","wwyjsha",3,["wwyj_guanli","wwyj_nvshen"],[]],
            "wwyj_feicheng":["male","wwyjsha",3,["wwyj_juedi"],[]],
            "wwyj_wali":["male","wwyjsha",4,["wwyj_toushi","wwyj_qiuxue"],[]],
            "wwyj_yanyumoran":["female","wwyjsha",4,["wwyj_yanyu","wwyj_bingmou"],[]],
            "wwyj_shenzuo":["male","wwyjsha",3,["wwyj_jisi","wwyj_qiangkang"],[]],
			"wwyj_xuebi":["male","wwyjsha",3,["wwyj_qiaoji","wwyj_fansha"],[]],
			"wwyj_shijian":["female","wwyjsha",3,["wwyj_touliang","wwyj_kangxing"],[]],
			"wwyj_lengyus":["female","wwyjsha",4,["wwyj_lengyu","wwyj_junshen"],[]],
			"wwyj_zhugejun":["male","wwyjsha",3,["wwyj_qisi","wwyj_miaoji"],[]],
			"wwyj_zhaonies":["male","wwyjsha",4,["wwyj_zhaonie","wwyj_peiyin","wwyj_mingka"],[]],
				"wwyj_qianshangs":["male","wwyjsha",3,["wwyj_qianshang","wwyj_tuikeng"],[]],
				"wwyj_yitiaoxianyu":["male","wwyjsha",3,["wwyj_xianyu","wwyj_weixin"],[]],
				"wwyj_shennais":["female","wwyjsha",3,["wwyj_shennai","wwyj_keai"],[]],
				"wwyj_yiwangs":["female","wwyjsha",3,["wwyj_fenghua","wwyj_yiwang"],[]],
				"wwyj_liushas":["male","wwyjsha",4,["wwyj_liusha"],[]],
				"wwyj_guihua":["female","wwyjsha",3,["wwyj_gainian","wwyj_heimao"],[]],
				"wwyj_tilongjianiao":["male","wwyjsha",3,["wwyj_gonggao","wwyj_jinyan"],[]],
				"wwyj_huanyuxingcheng":["male","wwyjsha",3,["wwyj_huanyu","wwyj_xingcheng","wwyj_xuanxia"],[]],
				"wwyj_limuzi":["male","wwyjsha",3,["wwyj_shiyuan","wwyj_qinyan"],[]],
				"wwyj_fux2":["male","wwyjsha",4,["wwyj_dansha","wwyj_lunpo"],[]],
				"wwyj_xuedaoshaozhu":["male","wwyjsha",3,["wwyj_xuedao","wwyj_shaozhu"],[]],				
				"wwyj_shenwangquanjian":["male","wwyjsha",3,["wwyj_jieguan","wwyj_sepi"],[]],
				"wwyj_wuqinggezi":["male","wwyjsha",3,["wwyj_wuqing","wwyj_gezi"],[]],
				"wwyj_duanges":["male","wwyjsha",4,["wwyj_duange","wwyj_meihua"],[]],
				"wwyj_guchengs":["male","wwyjsha",3,["wwyj_gucheng","wwyj_zangyue","wwyj_feixue"],[]],
				"wwyj_hezifengyun":["male","wwyjsha",3,["wwyj_fengyun"],[]], 
				"wwyj_qingzhongs":["male","wwyjsha",3,["wwyj_qingzhong","wwyj_jiegeng"],[]],
				"wwyj_bohetang":["female","wwyjsha",3,["wwyj_bohe","wwyj_zhushan"],[]],
				"wwyj_niya":["female","wwyjsha",3,["wwyj_xugeng","wwyj_liuli"],[]],
				"wwyj_zhulinqixian":["male","wwyjsha",4,["wwyj_jieyuan","wwyj_yangshan"],[]],
				"wwyj_zhongchengpantu":["male","wwyjsha",3,["wwyj_pantu","wwyj_weiman"],[]],
				"wwyj_tianqikui":["male","wwyjsha",3,["wwyj_duiyi","wwyj_jitui"],[]],				
				"wwyj_jianyaleishao":["male","wwyjsha",3,["wwyj_jianya","wwyj_leishao"],[]],
				"wwyj_anshas":["male","wwyjsha",3,["wwyj_ansha","wwyj_chaoyue"],[]],
				"wwyj_zhuxiaoer":["male","wwyjsha",4,["wwyj_fuji","wwyj_guozhan"],["hiddenSkill"]],
				"wwyj_ranqis":["female","wwyjsha",4,["wwyj_ranqi","wwyj_langsha"],[]],
				"wwyj_chansuideshengming":['male','wwyjsha',3,['wwyj_shengming','wwyj_chansui'],[]],
				"wwyj_fanxings":['male','wwyjsha',3,['wwyj_huayue','wwyj_fanxing'],[]],    
				"wwyj_yangguangweiliang":["male","wwyjsha",3,["wwyj_zhiguo","wwyj_pingfang"],[]],
				"wwyj_rongyaotaoge":["male","wwyjsha",4,["wwyj_rongyao","wwyj_taoge"],[]],
				"wwyj_chenwus":["male","wwyjsha",3,["wwyj_shengbei","wwyj_chenwu"],[]], 
				"wwyj_lei":["male","wwyjsha",3,["wwyj_tongyu","wwyj_leilao"],[]],
				"wwyj_mengxinzhuanxing":["male","wwyjsha",3,["wwyj_qianzhan","wwyj_zhuanxing"],[]],
				"wwyj_hualuo":["male","wwyjsha",3,["wwyj_luohua","wwyj_yongji"],[]],
				"wwyj_dasima":["male","wwyjsha",4,["wwyj_qibing"],[]],
				"wwyj_rcanghai":["male","wwyjsha",3,["wwyj_canghai","wwyj_yigeng"],[]],
				"wwyj_rshun":["male","wwyjsha",3,["wwyj_fuhui","wwyj_doupo"],[]],
				"wwyj_qingyao":["male","wwyjsha",3,["wwyj_cuangai","wwyj_chaoxi","wwyj_dujiao"],[]],
				//"wwyj_rshengma":["male","wwyjsha",3,["wwyj_shengma"],[]],
				
			 
			 "wwyj_yuhudie":["female","wwyjsha",3,["wwyj_recaizhi","wwyj_redaixue"],["unseen"]],     
           },
      characterIntro:{
                	"wwyj_shuihu":"水乎，无名杀的创作者，圈内习惯称他为：老大、村长，传闻是北大的硕士研究生，于2013年底开始，以一己之力制作了一款叫无名杀的游戏，为三国杀爱好者开创了一片广阔的天地。同时还DIY了《炉石传说》、《昆特牌》、《万智牌》、《古剑奇潭》、《仙剑奇侠传》等多个扩展作品",
                 	"wwyj_chengxuyuan":"橙续缘（程序猿），一位专业的付费代写的远古代扩展大神，代表扩展有《代码搜索器》、《特效扩展》、《势力边框》、《吧友列传》（第一代作者包）、《官渡之战》、《诸侯伐董》、《欢乐斗地主》、《狗年乱斗》、《圣者为王》以及仿手杀UI的《界面美化》等等，其中前三个扩展曾流传甚广，尤其是《代码搜索器》，圈内皆称之为“神器”，为制作扩展者必备。橙续缘为人非常低调，本人曾邀请他加群却遭到拒绝，另外开创了“无名杀DIY定制”微信公众号，公开收费代写扩展",
					"wwyj_pipi":"皮皮……一位远古代扩展大神，擅长制作挑战boss类扩展，写过不少花里胡哨、强度高、搞怪、不按常理出牌的扩展，代表扩展有《神话》、《传说》、《暴躁AI》、《闯关模式》、《武林绝学》、《德玛西亚》等等。曾因制作了一个boss，玩家若挑战输了就会被惩罚——随机删除游戏中的扩展，虽然其本人也再三强调不要尝试挑战，但仍有人去玩，结果引起了不少争议，自此，皮皮隐退了",		
					"wwyj_Sukincen":"小苏，一位远古代扩展大神，原ID叫Sukincen，圈内习惯称呼他为“小苏”，无名杀扩展交流群②(现名：无名杀官方扩展群)的首任群主，同时负责游戏内获取扩展(github端)的管理。代表扩展有《群英会》，该扩展高度还原了《火影忍者》等作品的人物，收集了各种类型的技能，人物技能新颖独特，契合度极高，同时配音齐全，还有击杀特效、新增卡牌等。技能强度方面，个别武将怼常规BOSS都不虚。同时小苏出过不少教程，后因工作繁忙逐渐隐退了。本作中的设计参照了《群英会》中其对本人的角色设计",	
					"wwyj_liangchas":"凉茶，本扩展作者，现名：玉蝴蝶，小号：咫尺天涯。曾任无名杀扩展交流②群(现名：无名杀官方扩展群)的群主，主要的扩展作品有《文武英杰》以及代写的《三国遗卷》、《墨灵三国》、《将灵武将》等。玩过几年三国杀，接触无名杀后，在Sukincen的指点下，自学一个多月的扩展制作的代码教程，研究了不少扩展的代码，为实践而收费（均价5元／技能）帮人写技能代码。因技能DIY设计水平较低，所以一直没啥自创的扩展，但代写过上百个小型扩展，后期由于忙碌和懒惰，导致较少接单代写了。因在群里经常看到玩家们讨论一些已退玩的扩展作者，遂心血来潮，重新设计一个平衡的《作者包》，并征集意见起名为《无名风云录》，即为本扩展的前生，后来改名《文武英杰》，寓意本扩展的武将含有：文臣（辅助）、武将（爆发、攻击）、英明（骚操作）、俊杰（卖血）。另外早期的扩展作品还有《耀世三国》，后来因为懒直接“咕”了",	
					"wwyj_yuhudie":"玉蝴蝶，本扩展作者，现名：玉蝴蝶，小号：咫尺天涯。曾任无名杀扩展交流②群(现名：无名杀官方扩展群)的群主，主要的扩展作品有《文武英杰》以及代写的《三国遗卷》、《墨灵三国》、《将灵武将》等。玩过几年三国杀，接触无名杀后，在Sukincen的指点下，自学一个多月的扩展制作的代码教程，研究了不少扩展的代码，为实践而收费（均价5元／技能）帮人写技能代码。因技能DIY设计水平较低，所以一直没啥自创的扩展，但代写过上百个小型扩展，后期由于忙碌和懒惰，导致较少接单代写了。因在群里经常看到玩家们讨论一些已退玩的扩展作者，遂心血来潮，重新设计一个平衡的《作者包》，并征集意见起名为《无名风云录》，即为本扩展的前生，后来改名《文武英杰》，寓意本扩展的武将含有：文臣（辅助）、武将（爆发、攻击）、英明（骚操作）、俊杰（卖血）。另外早期的扩展作品还有《耀世三国》，后来因为懒直接“咕”了",	
					"wwyj_wzszhaoyun":"我只是赵云，简称：赵云。以下摘自本人的调查和一位老玩家的回忆：其为一代嚣张跋扈、自带嘲讽的传奇玩家，代更过《极略三国》（虽然只是说说而已），曾是水乎钦点的代更者，并被立为小吧主，而其却叫嚣要废除扩展功能，贴吧上到处胡乱禁言删帖……引起大家的不满与怨言。同时其恶语攻击一瞬间遗忘，却遭对方反击，双方阵营激烈互撕，引爆无名杀舆论，终日互相对骂，甚至将水乎老大也牵扯进来，最终导致水乎老大被气走，新版无名杀被放弃开发……可以说此人是间接导致水乎放弃写新版无名杀的罪魁祸首。后来又因针对呲牙哥，引起众怒，最终被撤销小吧主之职，并被逼退出贴吧群，自此，一代混世魔王才终于销声匿迹了。最近（2020年7月）又活跃了，一改以前的嚣张，变得随和了许多，有自我洗白的趋势",	
					"wwyj_lunhuizhong":"轮回中的消逝者，呲牙哥的首席忠实粉丝，曾对呲牙哥和签到有迷之执着，平时潜水于各大群暗中观察追随呲牙哥的行踪。一直关注着无名杀的发展和各个扩展作者的动态，对大部分无名杀的扩展及其作者很了解。虽然经常在群发“( •̥́ ㉨ •̀ू )嘤嘤嘤~”，但大家都忍着不会跟他计较。会写一些代码并接替维护呲牙哥的扩展",	
					"wwyj_ziyage":"呲牙哥，《秦时明月》、《沧海横流》、《天行九歌》等扩展的作者，无名杀扩展交流群①的群主，曾对无名杀素材收集总结、游戏推广作出过不少贡献，在圈内有不小的声望，曾被“我只是赵云”针对，几乎所有人都支持呲牙哥，终以“我只是赵云”被剥夺小吧主的地位并被踢出贴吧群告终。呲牙哥后来因进修学习而渐渐消失在玩家的视野中",	
					"wwyj_kanpoyiqie":"看破一切，一位拥有专业编程技术的远古代扩展作者，同时对三国杀DIY有专业的见解，通常以各种专业理论刷屏唬住众人。曾任无名杀扩展交流群②(现名：无名杀官方扩展群)的群主，对群管理甚严，其扩展特点多为巧妙清奇，代表扩展有《无心之举》、《格林笔记》、《艾克斯》等。转让群主后因常在无名杀扩展交流群②(现名：无名杀官方扩展群)里发色 图，被管理禁言，因而转向活跃于无名杀扩展交流群①群，并重制仙剑奇侠传扩展，最后因各种原因渐渐销声匿迹了",	
					"wwyj_daxiongxiaimao":"大熊小猫，习称之为“大熊猫”，一位三国杀DIY爱好者，设计了《金庸群侠传》扩展近两百个人物，并由太上大牛（落影逝尘）等人写代码制作完成，这个大型扩展系列虽然诞生时间不长，但凭借着精炼、系统的技能设计，迅速传播开来，获得众多玩家一致的好评。该扩展对金庸武侠的人物进行了大总结，并将其能力、事迹翻译成技能，让他们在无名杀里快意恩仇。大熊小猫有专业的摄影技术，目前在开展精准扶贫工作",	
					"wwyj_kelejiabing":"可乐加冰，一位元老级别的扩展大神，主要的扩展作品为《极略三国》、《女孩不哭》，同时出过不少教程，为后来摸索者指引了方向，为无名杀扩展代码作出了巨大的贡献。极略三国复刻了三国kill（后改名为极略三国）的武将，相当于将别人的游戏整个搬进了无名杀来！技能新颖，且与人物的历史事迹高度契合，武将总体强度相对平衡且约等于SP将水平。同时作为早期扩展，可玩性极高。可乐后因考研而隐退了。更新动态：可乐加冰并没完全退坑，参加工作后，制作了无名杀（破晓版），该版本整合了不少功能，敬请期待",	
					"wwyj_huijin":"辉烬贺流年，一位新生代扩展作者，喜欢制作扩展并为此付出了不少努力，技术也日益精湛。2019年底不幸遭遇车祸，手术成功后一直卧床，期间仍坚持制作扩展。代表扩展作品有《辉烬贺流年》等",		
					"wwyj_shijian":"诗笺，一位中生代扩展作者，曾化名过雪碧、透心凉、冰波水微、独者自饮酒、小鸽子，常年活跃于多个无名杀群，传闻是《作者包》的作者神座的徒弟。其爱好钻研艰涩的非常规代码，尤其是创造抗性与破解抗性的代码，最近又迷上特效。代表扩展有《龙族》、《十万个冷笑话》、《军争加强版》、《曹操传》、《小试炼》、《蜀汉中兴》以及第三代作者包《群英荟萃》等",
					"wwyj_xuebi":"雪碧，一位中生代扩展作者，后化名过诗笺、透心凉、冰波水微、独者自饮酒、小鸽子，常年活跃于多个无名杀群，传闻是《作者包》的作者神座的徒弟。其爱好钻研艰涩的非常规代码，尤其是创造抗性与破解抗性的代码，最近又迷上特效。代表扩展有《龙族》、《十万个冷笑话》、《军争加强版》、《曹操传》、《小试炼》、《蜀汉中兴》以及第三代作者包《群英荟萃》等",
			        "wwyj_Show-K":"小溪，QQ原名为“无忧无虑的小溪”，圈内名为：Show-K，新生代扩展作者，主要的扩展作品有《大乱桌斗》。短歌“失踪”后，Show-K逐渐接更《十周年UI》，似乎还喜欢玩《我的世界》",		
			        "wwyj_remaliao":"苏婆玛丽奥，一位热爱键社的中生代扩展大神，曾写过《新服杂碎》、《键杀》、《文和乱武》等扩展。水乎短暂回坑时，将无名杀的代更任务交给了他，其对无名杀的后续新发展作出了巨大的贡献，圈内声望颇高",								
					"wwyj_taishangdaniu":"太上大牛，一位中生代扩展大神，化名过“落影逝尘”、“休闲玩家”，喜欢在群里交流代码技术，曾写过《三国时代》扩展，后来义写《金庸群侠传》扩展中的大部分角色，这个大型扩展系列虽然诞生时间不长，但凭借着精炼、系统的技能设计，迅速传播开来，获得众多玩家一致的好评。该扩展对金庸武侠的人物进行了大总结，并将其能力、事迹翻译成技能，让他们在无名杀里快意恩仇。太上大牛为人较为谦虚低调，深为大家赞颂",		
					"wwyj_jiguangs":"极光，原ID：Aurora，一位元老级的超级大神，掌握着非常专业、精湛的编程技术，极光写过非常多的扩展，包括多种多样的模式、武将、功能，同时开发出全新联机框架等，主要作品有《无双杀》、《雷金阴洪石乐》、《阴雷》、《阴阳杀》、《奥拉星S》、《奈何花落》、《万世神兽》、《乱世佳人》等，其大部分的作品已收录在《扩展ol》一个扩展里，其中最具创意的是卡战模式，全新的玩法，完全可成为独立的游戏",
					"wwyj_danwuyunxi":"淡雾云曦，群名：一心强化老神将，老神将也能1穿7，中生代扩展作者，长驻无名杀扩展交流群①，其作品也主要在此群发布更新，圈内习惯称呼他为“老神将”，因其代表作品《混沌界》（原名《圣神包》），以将普通将重新设计加强成神将为主，总体强度颇高，粉丝也不少。据闻其曾在群里冒死擦边“开车”，又因为：老神将=lsj=老司机，得外号“老司机”，个性有点洒脱不羁，但对制作扩展又非常认真，虽然经常因为更新得慢被人说为鸽子，每次更新都会书写一段颇具文采的更新说明",		
					"wwyj_xingyunnvshen":"幸运女神，原ID：骑着二乔上貂蝉，资深老玩家，无名杀贴吧群管理员。本扩展中该武将的技能为其本人设计并由凉茶制作",	
					"wwyj_feicheng":"废城，无名杀元老级别的资深老玩家，也是最早玩无名杀的玩家之一，贴吧群的群主，热爱无名杀，经常出面维护无名杀的声誉，并且对游戏的发展历程很熟悉，最近自发收集整理皮肤素材。本扩展中废城的技能皆为其本人设计并由凉茶制作",	
			        "wwyj_wali":"瓦力（Wall•E），是集技能设计、历史文学、优秀的编写代码技术等于一身的新生代扩展作者，短期内便学会制作扩展，并写了大量的武将。旷世巨作《血色衣冠》，设计的人物贯穿中华上下五千年，技能构思新颖、巧妙，环环相扣的联动让人玩得爱不释手。后来又另起炉灶，创作了新扩展《侠客风云传》。本扩展中的瓦力的技能为其亲自设计，由凉茶稍作调整后制作而成",			
					"wwyj_yanyumoran":"烟雨墨染，一名中生代扩展作者，有很强的技能设计与编写代码的能力，曾为编写扩展废寝忘食、通宵达旦，非常努力，其代表作品为《权倾三国》、《乱世天下》和《上兵伐谋》，特别是《上兵伐谋》，将三国杀人物的技能再升华，融合了三国杀各种各样的技能类型，该作是一个优秀的大型扩展",					
				    "wwyj_shenzuo":"神座，曾也化名军师祭酒、◎sagiri，圈内习惯称他为神座，远古代扩展作者，拥有超强的编程技术，尤其是在抗性代码方面造诣颇深，但对有段时间流行研究抗性代码感到深恶痛绝并为此担忧，为此决定制作一个最强的扩展，让研究扩展代码者望峰而知难而退。这个扩展就是强得令人窒息的《作者包》（第二代），虽然体验感不高，但的确树立了一个标杆，《弹丸杀》的神座出流、《风华绝代》的BOSS等一系列变态将纷纷被挑下马、俯首称臣。《作者包》同时还开发了很多技术，如扩展皮肤、动画特效、商店、植入《植物大战僵尸》等。另外神座还有一个与孤城等人合作写的扩展作品——《游戏王》，因该作太庞大，后来应该已断更弃坑了",
				    "wwyj_lengyus":"冷雨，也叫冷雨磅礴、夜雨斟酒，一名中生代扩展作者，喜欢以萌新自居，但深谙技能代码，代表扩展作品有《冷雨》、《军神包》（后改名《兵者诡道》），军神包涵盖了三国杀民间DIY武将和极略三国的一些神兽将，强度相对比较高",
				    "wwyj_zhugejun":"诸葛均，也叫“吾名影觞伤”、“文彧”，一位三国杀DIY爱好者，无名杀扩展交流群③的群主，无名杀资深玩家，也玩极略三国，曾与冷雨合作制作军神包的部分系列武将。本作中诸葛均的技能均来自其本人设计投稿，原设计由于过强，凉茶稍作平衡后写代码制作而成",
 				    "wwyj_zhaonies":"造孽，全名叫：前世造多了孽，现名：冰雪雨柔，一位远古代的扩展作者，喜欢玩《崩坏3》，性情直爽，敢怒敢言，对不喜欢的东西会直接开启吐槽模式。代表作品有《配音扩展》、《民间卡牌》。2016-2018年间的无名杀，很多武将是缺配音的，配音扩展弥补了配音上的不足，在那个时代几乎人人都安装此扩展，风靡一时。另外，民间卡牌扩展是那时候专属禁传的扩展，很少人真正玩过，该扩展收集了不少DIY卡牌，有兴趣的可以搜索体验一下",					
	 		    	"wwyj_qianshangs":"浅觞，习惯称其为“浅”，贴吧ID后来先后名为：tanyuanjkl、夜风，一位传说中的元老级别的扩展作者，与可乐加冰并列，曾发表过AI教程、game.js里的黑科技等多篇教程，扩展作品有《聊天拓展》、《武将AI》，尤其是《武将AI》，其大幅度提升了AI的智能，曾在圈内轰动一时，追者甚众，但其也开了付费扩展的先河，引发了大争议，甚至为此，浅受到了“我只是赵云”的疯狂诋毁与攻击，“我只是赵云”恬不知耻地扬言叫嚣“你（浅）出一个扩展，我就抄一个”……另外，水乎老大为了避免无名杀扩展付费获利的法律风险，对无名杀进行大刀阔斧的修改，该扩展被迫下架……浅因此事再加上毕业工作而离坑隐退了",			
					"wwyj_yitiaoxianyu":"咸鱼，也曾名为“永远的萌新”、“→_→”，一位新生代扩展作者，拥有比较扎实、全面的代码技术。其真实身份比较可疑，应为某位大神的小号，因为其突然空降来到无名杀这个圈子，自称是名“萌新”，但出道即巅峰，写了一堆教程，众所周知，能出教程的都是大佬，尔后其又接写《耀世三国》等扩展，种种事实证明其是一名伪萌新。代表作品还有《西沉的胡思乱想》、《灵枢包》、《特效测试》、《高速决斗》、《犬夜叉之战》、《炉石普通》等",
					"wwyj_shennais":"神奈，又名“东平车幻玲”，圈内习惯称呼她为“学妹”，是一位远古代的扩展作者，对扩展有独特的写法，其代表作为《朔包》，以高体力上限与高伤害著称。另外，神奈给人印象较深刻的是其随和、可爱的一面，这也是技能“可爱”的创作思路来源，而技能“神奈”略显得无厘头（本来是想设计一个骚操作类的技能的），实则是在凉茶在创作完“可爱”后灵感枯竭时无意中测试了一局发现，当触发“可爱”时，友方给了几张杀，正好挂连弩，然后又杀一波，紧接着杀完再触发又来了几张杀……始料未及的契合令凉茶感到非常意外与兴奋，故设计了一个可提升杀的使用次数的技能，这正是技能“神奈”的来由",
					"wwyj_yiwangs":"一瞬间遗忘，一位远古代的扩展大神，拥有非常精湛的扩展代码技术，开发了第一个大型扩展——《风华绝代》，尽管它曾饱受过争议，但仍无法掩盖它身上那耀眼的光芒！该扩展武将众多，在改版武将方面，它将官方三国杀大部分的武将重新设计成全新的星武将，涅槃重生后的武将令人眼前一亮，啧啧称奇。另外风华绝代还有英雄联盟系列和挑战BOSS，尤其是BOSS远近闻名，简直成了BOSS的标杆，它的强大引来众多玩家挑战。”一瞬间遗忘“曾与”我只是赵云“之间有私人恩怨，在“我只是赵云”的再三挑衅下，在2018年夏时集中爆发，引爆了整个无名杀圈子的舆论，双方阵营闹得不可交加，甚至连水乎老大都被牵扯进来，最终导致无名杀的停更，该事件可谓是无名杀史上产生影响最大的事件之一。本作者中对该作者的技能设计也是跟“我只是赵云”相互克制、纠缠的。另外一瞬间遗忘的扩展作品还有【剧情三英】、【剧情战役】、【浑身是胆】、【超强台风】、【孙策81难】、【镜花水月】等",
					"wwyj_liushas":"流沙，一位元老级的资深老玩家，为早期无名杀的素材收集作出了不少贡献，热爱无名杀这个游戏，并且经常出面维护无名杀的声誉",					
					"wwyj_liangchax":"这个是boss，可进挑战模式中挑战她！也可在扩展界面开启“天神降临”再重启游戏，然后就可在非挑战模式中选用或被ai选用（注：本武将及本扩展不含任何赋空等抗性代码）",	
					"wwyj_guihua":"松岛枫桂花，一位元老级的扩展大神，贴吧ID也叫”大小姐-夜子“，另外，“琉璃殿下de骑士“据情报透露是其贴吧小号，圈内习惯称她为“黑猫”、“猫猫”、“桂花大神”，桂花曾与可乐、浅觞、极光、遗忘、fux2并称“六大天王”，其代码技术在早期便独领风骚，制作过多个匪夷所思的扩展。主要的扩展代表作分别有：小扩展《玲》；《红尘乱途》，其前身是三国KILL武将，貌似后来成了《极略三国》的前身；多年站在精品扩展巅峰的《概念武将》也是主要出自其手，该扩展从设计到代码，都达到了令人望尘莫及的地步。还有早已失传的传说中的《动漫包》的也是她写的，该扩展当时引起过巨大的轰动，求之者众，但能真正接触过的人却寥寥无几，以至该扩展失传后，仍有多个扩展作者尝试复盘这个扩展，比如最忠诚的叛徒的《动漫包（伪）》，此外还有其他人写的《动漫杂包》、《动漫包（真）》、《动漫》等，但都没有原作的神韵(最新消息：非最终版的原版动漫包已通过“最忠实的叛徒”的分享已找到，另据Niya说，极光的扩展ol也已整合该动漫包扩展)。目前该大神已退坑许久",
					"wwyj_tilongjianiao":"提笼架鸟，新生代玩家，多个群的管理员，热爱无名杀，为帮助新人解决游戏的各种问题，专程总结了一个PDF的FAQ问题集，有关无名杀的大小问题几乎都可找到相应的解决方法，非常有行动力，为无名杀的BUG收集、解决方法付出了不少努力。只是为人雷厉风行，说话粗暴直接，会以踢人禁言为手段，再加上其使用一张似乎在注视群员一举一动一言一行的动漫头像，给萌新留下了恐惧的心理阴影。后来因某个管理冒名“最忠实的叛徒”随便踢人，提笼架鸟一气之下退出了无名杀圈子",
					"wwyj_huanyuxingcheng":"寰宇星城，新生代扩展作者，其自称为职业的程序员，喜欢玄幻武侠，曾从一名粉丝玩家迅速成长为一名扩展作者，后另起炉灶，与群员血刀少主合作开创全新的架空的背景故事的扩展——《玄武江湖》，部分角色为圈内玩家的客串，目前仍在制作更新中。另外还制作了UI美化类扩展《千幻聆音》，能令扩展的武将也有皮肤、皮肤配音，同时令游戏界面变得精美绝伦，与《十周年UI》并肩为最杰出的美化类扩展",
					"wwyj_limuzi":"李木子，自称为多个群的资深龙王（最高记录曾连任80天），经常积极在内测群向苏婆玛丽奥反馈其发现的无名杀的bug。本作中李木子的技能均来自其本人设计投稿，凉茶写代码制作而成",
					"wwyj_fux2":"fux2，也叫fux2-king，一位元老级扩展大神，《弹丸杀》扩展的作者，拥有超强的扩展代码编写技术，已退坑多年，目前似乎在专注于玩《终极刺客》。据考究，其最早开创了抗性代码的先河，听说甚至连孤城、神座两位大神都是他的粉丝。《弹丸杀》这个扩展包虽然精致小巧，但内有大乾坤！每个武将的技能都剑走偏峰的奇特，不按常规设计。其中有个旷世boss——神座出流，开创了抗性先河，以其无敌的防御与无解的即死攻击，长年蝉联顶尖boss之列，令人闻风丧胆。不少人为了打败他而费尽心思，虽然后来也出了很多BT强将战胜过他，但绝不敢因此而否定他的实力。谈及为何fux2会创造出这种超强boss，Niya回忆道：当时写的神座出流已比较强，有个玩家击败他后拿战绩嘲讽作者，fux2一怒之下将神座出流直接封神。据悉◎sagiri曾破解过神座出流的抗性代码发现其重设的函数多达超过80个，其因仰慕此武将甚至自称为“神座”……",	
					"wwyj_xuedaoshaozhu":"血刀少主，无名杀新晋玩家，喜欢武侠小说与diy，后与寰宇星城一起合作，创作大型武侠、玄侠风格的扩展——《玄武江湖》，血刀少主担任背景故事的主编之一，重点参与撰写故事和部分人物的技能设计",					
					"wwyj_shenwangquanjian":"神王权笺，无名杀新晋扩展作者，早期便入坑无名杀，精通解决无名杀的各种疑难杂症，爱好兴趣为DIY武将，最近学会制作简单的扩展，主要扩展作品为《神王包》。后加入无名杀官方群，人送外号【色批魏延】，后成为提笼架鸟的忠实粉丝并辅助其管理各大群，提笼架鸟离开之后由他接管多个群",
					"wwyj_wuqinggezi":"无情鸽子，中生代扩展作者，为人比较低调，以致于我现在没什么关于他的资料，只能简单地介绍一下。其代表作为移植自“雾雨家的魔理沙”的《东方流星夜》而改造成无名杀扩展的扩展——《东方project》，该扩展新颖有趣，尤其是其图鉴教程模式（乱斗）功能在众多扩展中独树一帜，界面华丽整洁，让人啧啧称奇！值得一提的是，我（凉茶）与瓦力（血色衣冠的作者）几乎同时发现该扩展的图鉴并产生了移植其图鉴模式的想法，后来瓦力钻研改造成功并无偿分享之，后来演变成本扩展的凉茶模式，也就是本扩展的图鉴模式",
					"wwyj_duanges":"短歌，新生代扩展大神，拥有非常专业的编程技术，因其用“兔子”头像得外号“大兔子”，另又因扩展更新曾濒临断更且“歌”谐音“鸽”又得外号“短鸽”，其是大型美化类扩展【十周年UI】的作者，该扩展最大限度地将无名杀的界面、特效进行了全新的设计，让游戏界面跟官方十周年三国杀的界面非常接近，尤其是其击杀特效做得让人震撼不已，该扩展同时比橙续缘的【势力边框】更稳定更美观。与此同时，该扩展从社交网络上问世即迅速传播，获誉无数，粗略统计，该扩展是实装量最高的扩展",
					"wwyj_guchengs":"孤城，元老级扩展作者，又名“孤城葬月落飞雪”，代表作品有《千秋万载》、《一统江山》，这两个扩展将大部分三国杀武将翻新加强，几乎达到BOSS级别，这两扩展曾流行一时。此外作品还有Fate系列，具体是哪些扩展，有待调查。目前，孤城已退坑",	
					"wwyj_hezifengyun":"何子风云，一位远古代扩展作者，主要的扩展作品有《战国七雄》，一个在早期曾让人眼前一亮的优秀扩展作品。何子风云已退坑多时，不过会时不时地在群里冒泡，以至于被人调侃为“诈尸”，故有作者包的“何子诈尸”的经典模式，另外本扩展也收录了这个模式",
					"wwyj_qingzhongs":"青冢，中生代扩展作者，主要扩展作品有《千载风云》和《极略全扩》，前者主要角色为晋势力角色，对三国后期及晋朝早期的人物进行补充，技能精炼，是个不可多得的优秀扩展；后者是青冢补写了可乐加冰的《极略三国》中仍欠缺的角色，将之归为“极略补全”系列，并对旧《极略三国》的bug进行了大幅度的修复，一起接入全新的联机框架内，由此诞生了《极略全扩》这一精品，深受玩家的喜爱",
					"wwyj_bohetang":"薄荷糖，元老级扩展作者，曾任无名杀吧小吧主，原名为“薄荷糖的0味道”，后改名为“矮子剑薄荷糖氵”，为人比较豪爽直接，敢怒敢言。其代表作为《唐》，虽为微型扩展，但在扩展匮乏的早期，能独立制作扩展的人屈指可数，也算难能可贵了。同时其也出过一些简单的教程帖。原已隐退多时，在呲牙哥曾被“我只是赵云”无端针对时，薄荷糖发现后重出江湖，义愤填膺，联合流沙、青冢等多人对“我只是赵云”进行反制，为呲牙哥抱打不平，该事件最终以“我只是赵云”被撤去小吧主职务而告终",
					"wwyj_niya":"夜洛樱琉璃，原名为：Niya。中生代扩展作者甚至可能更古老，为人谦和，拥有与“诗笺”类似的风格与代码技术，主要的成就是续更了著名的扩展《概念武将》，不但对该扩展进行了修复、维护，还大幅度开拓了新功能，对无名杀的界面进行了部分美化，最显著的成就是首次开发了“换肤换音”功能！",	
					"wwyj_zhulinqixian":"竹林七贤(×)，竹林七闲(√)，新生代玩家，无名杀官方群Ⅶ（萌新群）群的群主，数个群的管理员，喜欢玩《时空枢纽》、《玄武江湖》扩展。本设计由寰宇星城提供，本人略作修改再编写代码制作而成",	
					"wwyj_zhongchengpantu":"忠诚的叛徒，中生代扩展作者，原叫“最忠诚的叛徒”，因有个群的管理员冒充他胡乱踢人，而改名为“路过的指挥使”。曾在《动漫包》的基础上写了一个名为《伪动漫》的扩展，该扩展以古灵精怪著称，技能大部分花里胡哨不走常规路，而且技能的描述也为一些莫名其妙的口号。其比较得意的为“莫比波斯环”，无穷的无中生有必摸无中生有。后因该扩展的技能、人物不注意写id，积弊已久，导致与同样如此做的《冷雨》包互相冲突、吞并，然后其将各群的《伪动漫》全删除了并停更了。后来另写扩展《异闻带》",		
					"wwyj_tianqikui":"天气亏，元老级扩展作者，现名：无念小仙，曾多次自我吐槽在贴吧注册时胡乱起了“天气亏”这个莫名其妙的名字。其在早期便拥有爆炸式的技能设计灵感和扎实的技能代码写作技巧，曾在极短的时间内设计并创作出多个扩展作品，如《三国杀标准包》、《武庙》、《烈女传》等，这些作品以简朴的设计和浓厚的历史底韵迅速传播，风靡一时。就在巅峰时期，天气亏急流勇退，突然消失得无影无踪，后来才从其在贴吧中留言中得知，原来是他已深深地迷上了围棋，无法自拔，转战棋坛，一直沉浸于对弈中了。据小苏回忆说，天气亏是引导小苏入门的师傅，而天气亏常自称其为极光的徒弟，他在极光的指点下学会制作扩展的。后来极光在《扩展ol》中收录了天气亏的作品",
					"wwyj_zhichitianya":"咫尺天涯，中生代扩展作者，在2018年底曾写过一个由“丫奶”设计技能的扩展——《耀世三国》，终因制作经验不足、懒、天气冷等原因而弃坑。后来因违规传播《风华绝代》等禁止分享类的扩展而被逐出某些群。沉寂约一年后（期间当过官方扩展群的群主）用主号凉茶回归，之后以圈内最低价收费前后帮人代写了一百多个扩展。后决定写扩展《文武英杰》作为个人代表作……",
					"wwyj_jianyaleishao":"剑牙雷少，中生代扩展作者，在活跃时期脑洞大开，迅速制作了两个大型扩展——《王朝更替_策》、《王朝更替_权》，并在打算制作《王朝更替_骑》时，突然销声匿迹了。这两个扩展的武将取自古今中外，相对比较杂",
					"wwyj_anshas":"俺杀，新生代扩展作者，主要作品扩展有《超越人类》、《SCP基金会》、《拔刀剑》等。其中《超越人类》有个能破全局技的功能（此段代码已加密）",	
					"wwyj_zhuxiaoer":"竹小二，原名：我叫竹小二，中生代扩展作者，主要的扩展作品为《国战补充》，该扩展不但对国战模式进行了扩展，而且也新增了一些新功能，增加一些无名杀玩家作客串角色",
					"wwyj_ranqis":"染柒，原名：染柒行骗，新生代扩展作者，代表作有《月圆之夜》的同名同人扩展，曾因学业原因经常断更。更喜欢设计虚构世界人物，接二连三地写了多个扩展，比如：《美女如云》、《染柒的世界》、《柒论三国》、《星穹防线》等",	
					"wwyj_chansuideshengming":"残碎的生命，中生代扩展作者，该作者比较低调，很少发言。扩展作品有《次元格斗》、《次元世界》、《SH武将》等",	
					"wwyj_fanxings":"繁星，新生代扩展作者，代表扩展作品有《花好月圆》",
					"wwyj_yangguangweiliang":"阳光微凉，新生代扩展作者，代表作为《阳光包》，同时是无名杀全教程的编者之一。本设计、代码均来自其《阳光包》中个人设计的投稿，已稍作平衡",
					"wwyj_rongyaotaoge":"荣耀套鸽，印象中好像又曾叫“老玄德”，中生代扩展作者，为人较为低调，扩展作品有《趣味三国》、《玄德》等",	
					"wwyj_chenwus":"辰午，中生代扩展作者，代表作主要是《圣杯战争》，为人较为低调，默默地创作扩展",
					"wwyj_lei":"雷，又名“Thunder”，圈内称其为“老雷”或“雷佬”，新生代扩展作者，发展神速的无名杀新兴扩展大神，在入坑一年内，先后制作《Thunder扩展》、无名杀没出的十周年武将、《谋攻篇》等。过了几个月后，他因为工作原因，腾不出太多时间写武将，遂把十周年前瞻任务交给其他的扩展作者（哖_秒才轻狂☆），其与“萌新转型”关系不错（故本扩展关于这两人的设计有联动性，两互相配合能让“雷”爆发），其本人开始在《千幻聆音》的基础上续更《千幻雷音》，进一步进行无名杀的美化工作，展现了统驭其他扩展的能力",	
					"wwyj_mengxinzhuanxing":"萌新转型，原名：萌新（转型中），又名：哖_秒才轻狂☆，圈内又称其为“驴佬”，新生代扩展作者，主要的扩展作品为《活动武将》，涵盖三国杀OL和三国杀十周年部分活动场、欢乐三国杀、微信三国杀的武将，还有无名杀没上的所有的官方已经有的武将。其与雷关系不错（故本扩展关于这两人的设计有联动性，两互相配合能让“雷”爆发），后来十周年武将部分交给了“雷”来写，再后来“雷”因工作原因，又将这部分交回他来写。另外，还在游戏层面改了整肃和仁库的显示，添加了不同属性和护甲受击的音效和对局的语音播报，移植了“橙续缘”的特效扩展以及添加了几个三国杀的模式",
					"wwyj_hualuo":"花落，无名杀忠实玩家，喜欢设计技能，技能设计灵感如泉涌，常年活跃在无名杀官方扩展群（852740627）并发表技能设计描述",
					"wwyj_dasima":"大司马，介乎于中生代与新生代的扩展作者，全名为“平西镇北征南破东定中大司马”，扩展代表作为《士兵扩展包》，该扩展囊括了三国时代各种奇兵等。大司马更新扩展极为勤奋，每天或隔三五天一更新，坚持数百期更新而不辍，每次更新必有“魔界老铁高呼口号”的小文章，小文章幽默风趣，令人捧腹",
					"wwyj_rcanghai":"藏海，新生代扩展作者，代表作品暂时不详，但义更过英雄杀、金庸群侠传和高速决斗等扩展",
					"wwyj_rshun":"瞬，又名：[QQ红包] 恭喜发财，无名杀粉丝玩家，具体事迹不详，本武将为其投稿，凉茶略作修改、制作代码而成",
					"wwyj_qingyao":"清瑶，被人称为无名杀的“毒瘤”，我对其不甚了解，据说他召集了一群拥趸，意欲另起炉灶，他篡改了无名杀的GPL-3.0协议，改为MIT协议，抄袭别人的成果，打上原创标签弄了个“清瑶杀”，然后以此谋利。无名杀清瑶版的盗版行为：清瑶版在未经原作者水乎允许的情况下，直接复制、修改了无名杀的原作，并进行了发布。无名杀开发团队已经对清瑶版的盗版行为采取了法律手段进行处理。在水乎的授权之下，向GitHub发出了DMCA版权警告，GitHub依法封禁了托管在平台上的“清瑶版”项目仓库。在清瑶及其同伙看来美化大于一切，武将代码在模式出问题，就禁止这个模式使用，刚搞事那会儿，还做武将进行人身攻击……",
					//"wwyj_moban":"简介模板",
						
					},
					
      characterTitle:{
					"wwyj_Sukincen":"Sukincen",
					"wwyj_shijian":"雪碧",
					"wwyj_taishangdaniu":"落影逝尘",
					"wwyj_jiguangs":"Aurora",
					"wwyj_danwuyunxi":"老神将",
					"wwyj_wali":"Wall•E",					
					"wwyj_shenzuo":"◎sagiri",
					"wwyj_shennais":"学妹",
					"wwyj_guihua":"大小姐-夜子",
					"wwyj_tilongjianiao":"萌新杀手",					
					"wwyj_shuihu":"村长",
					"wwyj_chengxuyuan":"程序猿",
					"wwyj_zhaonies":"前世造多了孽",
					"wwyj_lunhuizhong":"呲牙弟",
					"wwyj_kanpoyiqie":"看破",
					"wwyj_daxiongxiaimao":"大熊猫",
					"wwyj_zhugejun":"文彧",
					"wwyj_yitiaoxianyu":"永远的萌新",
					"wwyj_guchengs":"孤城葬月落飞雪",
					"wwyj_bohetang":"矮子剑薄荷糖",					
					"wwyj_duanges":"大兔子",
					"wwyj_niya":"Niya",
					"wwyj_zhongchengpantu":"路过的指挥使",
					
			 		},
			 		
			 		perfectPair:{
			"wwyj_pipi":['wwyj_yiwangs'],
			"wwyj_ziyage":['wwyj_lunhuizhong'],
			"wwyj_taishangdaniu":['wwyj_daxiongxiaimao'],
			"wwyj_huanyuxingcheng":['wwyj_xuedaoshaozhu'],
			"wwyj_shenzuo":['wwyj_guchengs'],
			"wwyj_kelejiabing":['wwyj_qingzhongs'],
			"wwyj_xuebi":['wwyj_shijian'],			
			"wwyj_yitiaoxianyu":['wwyj_lengyus'],
			"wwyj_zhugejun":['wwyj_limuzi'],
			"wwyj_lei":['wwyj_mengxinzhuanxing'],
			
			},
			
            skill:{       
            "wwyj_dujiao":{
				unique:true,
				audio:["huangtian2",2],					
				global:'wwyj_dujiao2',
				zhuSkill:true,
				ai:{
			        usedu:true,
				},
			},
			"wwyj_dujiao2":{
				audio:["huangtian2",2],	
				enable:'phaseUse',
				discard:false,
				lose:false,
				delay:false,
				line:true,
				prepare:function(cards,player,targets){
					targets[0].logSkill('wwyj_dujiao');
				},
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(target){
						return target!=player&&target.hasZhuSkill('wwyj_dujiao',player);
					});
					var str='将一张【毒】交给'+get.translation(list);
					if(list.length>1) str+='中的一人';
					return str;
				},
				filter:function(event,player){
					if(player.group!='wwyjsha') return false;
					if(player.countCards('h','du')==0) return 0;
					return game.hasPlayer(function(target){
						return target!=player&&target.hasZhuSkill('wwyj_dujiao',player)&&!target.hasSkill('wwyj_dujiao3');
					});
				},
				filterCard:function(card){
					return (card.name=='du');
				},
				log:false,
				visible:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.hasZhuSkill('wwyj_dujiao',player)&&!target.hasSkill('wwyj_dujiao3');
				},
				//usable:1,
				//forceaudio:true,
				content:function(){
					player.give(cards,target);
					target.addTempSkill('wwyj_dujiao3','phaseUseEnd');
				},
				ai:{
					expose:0.3,
					order:10,
					result:{
						target:5
					}
				}
			},
			"wwyj_dujiao3":{},
                "wwyj_chaoxi":{
						audio:["guidao",2],	
						trigger:{global:'loseEnd'},
						filter:function(event,player){
							if(event.type!='discard'||event.getlx===false) return false;
							var cards=event.cards.slice(0);
							var evt=event.getl(player);
							if(evt&&evt.cards) cards.removeArray(evt.cards);
							for(var i=0;i<cards.length;i++){
								if(cards[i].original!='j'&&cards[i].name=='du'&&get.position(cards[i],true)=='d'){
									return true;
								}
							}
							return false;
						},
						forced:true,
						mod: {
		                    cardname(card, player, name) {
			                	if (card.name=="du"&& get.suit(card) == "spade") return "sha";
			                	if (card.name=="du"&& get.suit(card) == "heart") return "tao";
			                	if (card.name=="du"&& get.suit(card) == "club") return "jiu";
			                	if (card.name=="du"&& get.suit(card) == "diamond") return "shan";
		                    },						
		                },
						content:function(){
							"step 0"
							if(trigger.delay==false) game.delay();
							"step 1"
							var cards=[],cards2=trigger.cards.slice(0),evt=trigger.getl(player);
							if(evt&&evt.cards) cards2.removeArray(evt.cards);
							for(var i=0;i<cards2.length;i++){
								if(cards2[i].original!='j'&&cards2[i].name=='du'&&get.position(cards2[i],true)=='d'){
									cards.push(cards2[i]);
								}
							}
							if(cards.length){
								player.gain(cards,'gain2','log');
								player.say('这些代码都是我的了');
							}							
						},
						ai:{
					        usedu:true,
				        },
					},
					"wwyj_cuangai3":{
					    init:function (player){
                            player.storage.wwyj_cuangai3=[];
                        },  
                        trigger:{
                            player:["useCardEnd","respondEnd"],
                            global:"phaseEnd",
                        },
                        forced:true,                        
						content:function(){														
							for(var i=0;i<ui.discardPile.childNodes.length;i++){
						var name=ui.discardPile.childNodes[i].name;
						if(name=='du'){
						    for(var j=0;j<player.storage.wwyj_cuangai2.length;j++){										
								if(get.suit(ui.discardPile.childNodes[i])==get.suit(player.storage.wwyj_cuangai2[j])&&ui.discardPile.childNodes[i].number==player.storage.wwyj_cuangai2[j].number){
									ui.discardPile.childNodes[i].init([ui.discardPile.childNodes[i].suit,ui.discardPile.childNodes[i].number,player.storage.wwyj_cuangai[j],player.storage.wwyj_cuangai3[j]]);
									player.storage.wwyj_cuangai.remove(player.storage.wwyj_cuangai[j]);
									player.storage.wwyj_cuangai2.remove(player.storage.wwyj_cuangai2[j]);
									player.storage.wwyj_cuangai3.remove(player.storage.wwyj_cuangai3[j]);
									player.update();
								}																			
								}													
						}
					}													
						},											
					},   
					"wwyj_cuangai2":{						
						trigger:{global:'loseAfter'},
						filter:function(event,player){
							if(event.type!='discard'||event.getlx===false) return false;
							var cards=event.cards.slice(0);
							for(var i=0;i<cards.length;i++){
								if(cards[i].original!='j'&&cards[i].name=='du'&&get.position(cards[i],true)=='d'){
									return true;
								}
							}
							return false;
						},
						init:function (player){
                            player.storage.wwyj_cuangai2=[];
                        },  
						forced:true,						
						content:function(){
							"step 0"
							if(trigger.delay==false) game.delay();
							"step 1"
							var cards=[],cards2=trigger.cards.slice(0);							
							for(var i=0;i<cards2.length;i++){
								if(cards2[i].original!='j'&&cards2[i].name=='du'&&get.position(cards2[i],true)=='d'){
									cards.push(cards2[i]);
								}
							}
							if(cards.length){
								for(var i=0;i<cards.length;i++){
									for(var j=0;j<player.storage.wwyj_cuangai2.length;j++){										
								if(get.suit(cards[i])==get.suit(player.storage.wwyj_cuangai2[j])&&cards[i].number==player.storage.wwyj_cuangai2[j].number){
									cards[i].init([cards[i].suit,cards[i].number,player.storage.wwyj_cuangai[j],player.storage.wwyj_cuangai3[j]]);
									player.storage.wwyj_cuangai.remove(player.storage.wwyj_cuangai[j]);
									player.storage.wwyj_cuangai2.remove(player.storage.wwyj_cuangai2[j]);
									player.storage.wwyj_cuangai3.remove(player.storage.wwyj_cuangai3[j]);
								}										
									}
								}
							}							
						},						
					},
      "wwyj_cuangai":{   
          audio:["reguhuo",2],  
          trigger:{
				    global:'damageEnd',						
				},
				usable:1,
				group:["wwyj_cuangai2","wwyj_cuangai3"],				
                init:function (player){
                    player.storage.wwyj_cuangai=[];
                },               
				filter:function (event,player){					     
                    return event.source&&event.source.isAlive()&&event.source.countCards('h')>0;	 		
				},	
				check:function (event,player){                    
                    if(player==event.source) return 1;
                    if(player!=event.source&&event.source.countCards('h')>event.source.hp&&event.source.group=='wwyjsha'&&get.attitude(player,event.source)>0&&player.hasZhuSkill('wwyj_dujiao')&&!event.source.hasSkill('wwyj_cuangai1')) return 1;
                    return get.attitude(player,event.source)<0;
                }, 
                prompt:function (event,player){					
					return '是否对'+get.translation(event.source)+'发动【篡改】，令其一张手牌转变为【毒】？';
				},                                
				content:function(){			                			                       
            'step 0'  
            if (player==trigger.source){
           /* var card=player.getCards('h',function(card){
                return card.name!='du';
            }).randomGet();*/ 
            event.cards=[];
            var cards=player.getCards('h');  
            for(var i=0;i<cards.length;i++){
                if(cards[i].name!='du'){
                    event.cards.push(cards[i]);
                }
            }         
            var card=event.cards.randomGet();             
            player.showCards(card);                                     
            if(card){
                player.storage.wwyj_cuangai.push(card.name);//卡名
				player.storage.wwyj_cuangai2.push(card);//卡牌
				player.storage.wwyj_cuangai3.push(get.nature(card));//属性
                //game.addVideo('storage',player,['player.storage.wwyj_cuangai',player.storage.wwyj_cuangai]);
				game.delay();
				card.init([card.suit,card.number,'du']);
            }  
            game.log(player,'的一张手牌被转化为',{name:'du'});  
            event.finish();                        
            }else{                   
            player.chooseCardButton(trigger.source.getCards('h'),1,'选择'+get.translation(trigger.source)+'的一张手牌变为【毒】').set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                if(button.link.name=='tao'||get.color(button.link)=='red') return 10;
                return get.value(button.link);
            }); 
            }     				            
           'step 1'
          if(result.bool){               
              trigger.source.showCards(result.links[0]); 
			  player.storage.wwyj_cuangai.push(result.links[0].name);
			  player.storage.wwyj_cuangai2.push(result.links[0]);
			  player.storage.wwyj_cuangai3.push(get.nature(result.links[0]));
			  //game.addVideo('storage',player,['player.storage.wwyj_cuangai',player.storage.wwyj_cuangai]);
			  game.delay();
              trigger.source.addTempSkill('wwyj_cuangai1','phaseUseEnd');             
              result.links[0].init([result.links[0].suit,result.links[0].number,'du']);             
              game.log(trigger.source,'的一张手牌被转化为',{name:'du'});                                                                           
          }                      
				},	
			ai:{
               order:5,
               expose:0.2,          
            },	
      },
      "wwyj_cuangai1":{},      
   "wwyj_doupo":{                     
   trigger:{                   
        global:"damageEnd",
   },  
   global:"wwyj_doupo2",      	
   forced:true,  
   priority:2024,              
   audio:["yinbing",2],	                                     
   filter:function (event,player){
        return event.source&&event.source.storage.wwyj_doupo2&&event.nature&&event.nature==event.source.storage.wwyj_doupo2;
   },
   content:function (){        
        if(player.countCards('h')){
            player.chooseToUse('是否使用一张牌？');
        }
        if(trigger.source.stat[trigger.source.stat.length-1].card.sha>0){
                      trigger.source.stat[trigger.source.stat.length-1].card.sha--;                        
               }                                           
    },
            },                    
    "wwyj_doupo2":{                     
    trigger:{                   
        source:"damageAfter",
    }, 
    priority:-2024,   
    init2:function(player){
		player.markSkill('wwyj_doupo2');
	},
    intro:{
		content:function (storage,player,skill){
			return '你上次造成的伤害的属性为：<span class="bluetext"> '+get.translation(storage)+' </span>';
		},
	},	
    mark:true,
    marktext:'破',				
    forced:true,            
    //audio:["qingnang",2],                                        
    filter:function (event,player){
        return event.nature;
    },
    content:function (){                              
               player.storage.wwyj_doupo2=trigger.nature;
        player.markSkill('wwyj_doupo2');   
        player.update();                                         
    },
            },       
    "wwyj_fuhui":{
    trigger:{
        player:["useCardEnd","respondEnd"],
    },
    audio:["juedi",2],  
    init:function (player){
        player.storage.wwyj_fuhui=0;
        //player.markSkill('wwyj_fuhui');	
        //player.syncStorage('wwyj_fuhui');
    },
    init2:function(player){
		player.markSkill('wwyj_fuhui');
	},
    intro:{
		content:'已发动#次【浮慧】'
	},
    mark:true,
    marktext:'慧',
    frequent:true,
    filter:function(event,player){
        if(!event.cards) return false;
        if(event.cards.length!=1) return false;        
        return true;
    },
    content:function(){
        "step 0"
        if(trigger.card.number%2==player.storage.wwyj_fuhui%2){
            player.draw();
            player.markSkill('wwyj_fuhui');
            player.storage.wwyj_fuhui++;
            player.update();
            event.finish();
        }else{
            if(player.countCards('he')>0){
                player.discardPlayerCard(player,'he',true).set('ai',function(button){
                    return Math.random();
                });
            }else{
                event.finish();	
            }
        }
           "step 1"     
        if(result.bool) {
            player.markSkill('wwyj_fuhui');
            player.storage.wwyj_fuhui++;
            player.update();
            if(!player.countCards('h')&&result.cards[0].original=='h') {
                player.chooseControl().set('choiceList',['令一名其他角色受到一点伤害','回复一点体力并翻面，然后重置'+get.translation(player.storage.wwyj_fuhui)+'为0']).set('ai',function(){
                    if(player.hp<2) return 1;             
                    return 0;
                });        
            }else{
                event.finish();	
            }
        }                
        "step 2"
       if(result.index==0){           
           	player.chooseTarget(get.prompt('wwyj_fuhui'),1,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });        
        }
        else{           
		   	player.recover();
		   	player.turnOver();
		   	player.storage.wwyj_fuhui=0;
		   	player.update();
		   	event.finish();	
		}         
        "step 3"        
        if(result.bool){            
            result.targets[0].damage();
            player.$fullscreenpop('恭喜发财','fire');	
            event.finish();
        }
    },    
    },
            "wwyj_canghai":{							
				trigger:{
					global:['phaseBefore','dying'],
					player:'enterGame',
				},
				forced:true,
				locked:false,				
				intro:{
					content:'expansion',
					markcount:'expansion',					
				},				
                marktext:"海",  
                audio:["huangtian2",2],											
				filter:function(event,player){
					return player.getExpansions('wwyj_canghai').length<5&&(event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){					
					"step 0"
					player.draw();
					"step 1"
					var list=[];
					for(var i=0;i<ui.cardPile.childNodes.length;i++){						
						if(list.length+player.getExpansions('wwyj_canghai').length<5){
							list.push(ui.cardPile.childNodes[i]);
						}
					}
					//player.showCards(list);						
					player.addToExpansion(list,'draw').gaintag.add('wwyj_canghai');
					player.syncStorage('wwyj_canghai');				
				},				
			},
			"wwyj_yigeng":{
				trigger:{global:'useCardToPlayered'},
				//direct:true,
				frequent:true,
				usable:1,												
				audio:["leiji",2],
				check:function (event,player){                    
                    return get.attitude(player,event.player)<0;
                },  
                prompt:function (event,player){					
					return '是否发动【义更】令'+get.translation(event.player)+'受到一点雷属性伤害？';
				},
				filter:function(event,player){
					if(player==event.player) return false;
					if(player.getExpansions('wwyj_canghai').length==0) return false;
					var cards=player.getExpansions('wwyj_canghai');
					for(var i=0;i<cards.length;i++){
					    if(event.card&&event.card.isCard&&(get.suit(event.card)==get.suit(cards[i]))) return true;
					}
					return false;
				},
				content:function(){
					"step 0"					
					player.chooseCardButton(player.getExpansions('wwyj_canghai'),1,'【五雷轰顶】：令'+get.translation(trigger.player)+'受到一点雷属性伤害').set('filterButton',function(button){                                                                           										
					    if(get.suit(trigger.cards[0])==get.suit(button.link)) return true;					
					return false;
            }).set('ai',function(button){
                return get.value(button.link);
            });      										
			"step 1"   
			if(result.bool){			                    
                //game.cardsDiscard(result.links[0]);  
                player.loseToDiscardpile(result.links[0]);              
                player.syncStorage('wwyj_canghai'); 
                player.logSkill('wwyj_yigeng');   
                player.update();
                player.chat('尝尝五雷轰顶的滋味吧');
                trigger.player.damage("thunder");
            }
            else event.finish(); 	
				},				
			},
			"wwyj_qibing":{
                trigger:{
                    source:"damageBegin",
                },                                
				audio:["pojun",2],
				direct:true,
                filter:function (event,player){
                    return event.card&&event.card.name=='sha';
                },               
                content:function (){                
				'step 0' 
				player.logSkill('wwyj_qibing');
				player.say(['hello，来了，老铁们','今天的口号：魔界开启，魔将来袭……'].randomGet());
				'step 1'       
              player.chooseControl().set('choiceList',['平西：令一名其他角色也受到一点伤害','镇北：令此伤害+1','征南：获得'+get.translation(trigger.player)+'一张牌','破东：令'+get.translation(trigger.player)+'摸'+get.translation(Math.max(1,trigger.player.getDamagedHp()))+'张牌（至少1张），然后翻面','定中：你回复一点体力或摸一张牌']).set('ai',function(){
                   if(trigger.player.hp<2||(trigger.player.hp<3&&trigger.player.countCards('h')<3)) return 1;				  
				   if(trigger.player.countCards('h')<3||trigger.player.countCards('e')>0) return 2;  
                   if((trigger.player.hp<2&&trigger.player.countCards('h')>2)||trigger.player.isHealthy()||trigger.player.hp==trigger.player.maxHp-1) return 3;				   
				   if(player.hp<2||player.countCards('h')<1) return 4;				          
                   return 0;
                }); 		     		 
        'step 2'
        if(result.index==0){           
           event.goto(3);           	
        }
        else if(result.index==1){          
		   trigger.num++;
           event.finish();		   
		}
		else if(result.index==2){          
		   player.gainPlayerCard(trigger.player,'he',true);		
		   event.finish();
		}
        else if(result.index==3){          
		   trigger.player.draw(Math.max(1,trigger.player.getDamagedHp()));
		   trigger.player.turnOver();
           event.finish();		   
		}	
		else if(result.index==4){          
		  
		   player.chooseDrawRecover(1,true,function(event,player){
		       if(player.hp==1&&player.isDamaged()) return 'recover_hp';
			       return 'draw_card';
		   });
		  
		   //player.chooseDrawRecover(1,true);
           event.finish();		   
		}
		'step 3'
		player.chooseTarget(get.prompt('wwyj_qibing'),1,true,function(card,player,target){
            return target!=trigger.player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        'step 4'
        if(result.bool){            
            result.targets[0].damage();
            event.finish();
        }
        else{
            event.finish();
        }        
                },
			},
            "wwyj_yongji":{ 
                global:"wwyj_yongji2",
                audio:["songwei",2],
            },
			"wwyj_yongji2":{                     
                trigger:{                   
                    player:"dying",
                },			
                usable:1,	
                direct:true,			                                				
                filter:function (event,player){            
			    return game.hasPlayer(function(current){
            return current.hasSkill('wwyj_yongji')&&current.countCards('e')>0;
        });
        },        		
                content:function (){        
             'step 0'
        player.chooseTarget(get.prompt2('wwyj_yongji2'),1,true,function(card,player,target){            
            return target.hasSkill('wwyj_yongji')&&target.countCards('e')>0; 
        },function(target){                        
            return true;
        });        
           'step 1' 
        if(result.bool){   
            player.discardPlayerCard(result.targets[0],'e',true);
            player.logSkill('wwyj_yongji2');
            result.targets[0].chat('拿去拿去，莫跟哥哥客气');
            player.recover();  
		}else{
            event.finish();
        }								                                                                              
    },
            },
			"wwyj_luohua":{                              
        trigger:{
           player:["phaseZhunbei"],
       },
       forced:true,
       audio:["xingshang",2], 			
		filter:function (event,player){            
			    return game.hasPlayer(function(current){
            return current!=player&&current.countCards('e')>0;
        });
        },        		
        content:function (){                    
            for(var i=1;i<6;i++){
            var num=game.countPlayer(function(current){
                 return current!=player&&!current.isEmpty(i);            
            }); 
            if(num>0){
            var targets=game.filterPlayer(function(current){
                return current!=player&&!current.isEmpty(i);             
      }).sortBySeat();                                                                                                                          
        var target=targets.randomGet();
        var card=target.getEquips(i); 
        target.line(player,'green');  
        game.cardsDiscard(card);                                              
        player.useCard(card,player);
        player.chat('缓缓飘落的花像思念');  
        game.delay();       
        } 
        }
        },                                       
    },	
			//前瞻参考诸葛恪的傲才
			"wwyj_qianzhan":{				
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(name=='wuxie') return false;
					if(lib.inpile.contains(name)) return true;
				},	
				audio:["guicai",2],
				filter:function(event,player){
					if(event.responded||event.wwyj_qianzhan||event.type=='wuxie') return false;
					if(player.getStat().skill.wwyj_qianzhan>=player.hp) return false; 
					
					for(var i of lib.inpile){						
						if(i=='wuxie') return false;
						if(event.filterCard({name:i},player,event)) return true;
					}
					return false;
				},
				delay:false,
				mod:{        		
		            targetInRange:function(card,player,target,now){						
			            if(_status.event.skill=='wwyj_qianzhan_backup') return true;
		            },
		            selectTarget:function(card,player,range){						
			            if(_status.event.skill=='wwyj_qianzhan_backup'&&card.name=='sha'&&range[1]!=-1) range[1]++;				
		            },			
                },
				content:function(){
					'step 0'
					var evt=event.getParent(2);
					evt.set('wwyj_qianzhan',true);
					var cards=get.cards();
					for(var i=cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cards[i].fix(),ui.cardPile.firstChild);
					}
					var aozhan=player.hasSkill('aozhan');
					player.chooseButton(['前瞻：选择要'+(evt.name=='chooseToUse'?'使用':'打出')+'的牌',cards]).set('filterButton',function(button){
						return _status.event.cards.contains(button.link);
					}).set('cards',cards.filter(function(card){
						if(aozhan&&card.name=='tao'){
							return evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)||evt.filterCard({
								name:'shan',isCard:true,cards:[card],
							},evt.player,evt);
						}
						return evt.filterCard(card,evt.player,evt);
					})).set('ai',function(button){
						var evt=_status.event.getParent(3);
						if(evt&&evt.ai){
							var tmp=_status.event;
							_status.event=evt;
							var result=(evt.ai||event.ai1)(button.link,_status.event.player,evt);
							_status.event=tmp;
							return result;
						}
						return 1;
					});
					'step 1'
					var evt=event.getParent(2);
					if(result.bool&&result.links&&result.links.length){
						var name=result.links[0].name,aozhan=(player.hasSkill('aozhan')&&name=='tao');
						if(aozhan){
							name=evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)?'sha':'shan';
						}
						if(evt.name=='chooseToUse'){
							game.broadcastAll(function(result,name){
								lib.skill.wwyj_qianzhan_backup.viewAs={name:name,cards:[result],isCard:true};
								lib.skill.wwyj_qianzhan_backup.prompt='选择'+get.translation(result)+'的目标';
							},result.links[0],name);
							evt.set('_backupevent','wwyj_qianzhan_backup');
							evt.backup('wwyj_qianzhan_backup');
							if(event.isMine()&&ui.cardPile.childNodes.length>=1){
							    game.wwyjlooktopcard();
							}
						}
						else{
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card=get.autoViewAs(result.links[0]);
							if(aozhan) evt.result.card.name=name;
							evt.result.cards=[result.links[0]];
							if(event.isMine()&&ui.cardPile.childNodes.length>=1){
							    game.wwyjlooktopcard();
							}
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai:{
					effect:{
						target:function(card,player,target,effect){
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						}
					},
					order:11,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
			            if(tag=='respondSha'||tag=='respondShan') return true;
				             return false;			            
		            },
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					}
				}
			},
			"wwyj_qianzhan_backup":{
				sourceSkill:'wwyj_qianzhan',
				precontent:function(){
					delete event.result.skill;
					var name=event.result.card.name;
					event.result.cards=event.result.card.cards;
					event.result.card=get.autoViewAs(event.result.cards[0]);
					event.result.card.name=name;
				},
				filterCard:function(){return false},
				selectCard:-1,
			},
			
			"wwyj_zhuanxing":{
                trigger:{
                    global:"damageBefore",
                }, 
				audio:["fankui",2],
				prompt:function (event,player){					
					return '是否对'+get.translation(event.player)+'发动【转型】？';
				},
                check:function (event,player){                    
                    if(get.attitude(player,event.player)>0&&(event.player.hasSkill('wwyj_leilao')||event.player.hasSkill('wwyj_leishao')||event.player.hasSkill('wwyj_qiangkang'))) return true;
                    if(get.attitude(player,event.player)<=0&&!event.player.isLinked()) return true; 
                    var num=game.countPlayer(function(current){
                        return current.isLinked()&&get.attitude(player,current)<=0;
                    }); 
                    var num2=game.countPlayer(function(current){
                        return current.hp<2&&(!current.hasSkill('wwyj_leilao')||!current.hasSkill('wwyj_leishao')||!current.hasSkill('wwyj_qiangkang'))&&current.isLinked()&&get.attitude(player,current)>0;
                    }); 
                    if((!event.player.hasSkill('wwyj_leilao')||!event.player.hasSkill('wwyj_leishao')||!event.player.hasSkill('wwyj_qiangkang'))&&get.attitude(player,event.player)>0&&num==0) return false;    
                    if(get.attitude(player,event.player)<=0&&num2>0) return false;                                                    
					if(num>0&&event.player.isLinked()&&num2<1) return true;
					return get.attitude(player,event.player)<=0;
                }, 
                filter:function (event,player){
                    return !event.nature&&event.card&&event.card.name=='sha';
                },               
                content:function (){
                    trigger.nature='thunder';	
                    player.draw();			
                },
			},
		    "wwyj_leilao2":{
                trigger:{
                    global:"damageEnd",
                },                
                forced:true,
				audio:["leiji",2],
                filter:function (event,player){
                    return player!=event.player&&event.nature&&event.nature=='thunder';
                },               
                content:function (){                
				'step 0'        
            if(trigger.player.isAlive()&&trigger.player.countCards('he')>0){
			    player.chooseControl().set('choiceList',['回复一点体力','摸一张牌','获得'+get.translation(trigger.player)+'一张牌']).set('ai',function(){
                   if(player.hp<2) return 0;
                   if(player.hp<3&&player.countCards('h')>1) return 0;
				   if(player.countCards('h')<2) return 1;
				   if(get.attitude(player,trigger.player)<=0) return 2;             
                   return 1;
                }); 
		    }else{
			    player.chooseControl().set('choiceList',['回复一点体力','摸一张牌']).set('ai',function(){
                   if(player.hp<2) return 0;
                   if(player.isDamaged()&&player.countCards('h')>1) return 0;
				   if(player.hp>1&&player.countCards('h')<2) return 1;				            
                   return 1;
                }); 
		    }		    		   
        'step 1'
        if(result.index==0){           
           player.recover();           	
        }
        else if(result.index==1){          
		   player.draw();			
		}
		else if(result.index==2){          
		   player.gainPlayerCard(trigger.player,'he',true);			
		}		
                },
			},
			"wwyj_leilao":{
                trigger:{
                    player:"damageBegin",
                },
                audio:["leiji",2],
                forced:true,
                filter:function (event,player){
                    return event.nature&&event.nature=='thunder';
                },
                group:"wwyj_leilao2",
                content:function (){
                    trigger.cancel();					
                },
                ai:{	
                nothunder:function (player){
            return player.isAlive();
        },
         effect:{
                target:function (card,player,target,current){
                    if(get.tag(card,'thunderDamage')) return 0;                       
                    var num=game.countPlayer(function(current){
						return get.attitude(current,target)>0&&current.hasSkill('wwyj_zhuanxing');
					});								
					if(!get.tag(card,'fireDamage')&&num>0&&card.name=='sha') return 0;									                                                                                                                       
                },
         },
         },
			},
		    "wwyj_tongyu2":{
                audio:["guidao",2],
                trigger:{
                    player:"phaseBegin",
                },	
                preHidden:true,			               
                forced:true,               
            content:function (){   
                'step 0'   
                event.skills=[];
				event.players=[];				
				for(var i=0;i<game.players.length;i++){
				    if(player!=game.players[i]){
						event.players.push(game.players[i]);
					}
				}
				var playerx=event.players.randomGet();
				player.line(playerx,'green'); 
                var skills=playerx.skills.slice(0);
                for(var i=0;i<skills.length;i++){
                    var info=get.info(skills[i]);
                    if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)) event.skills.push(skills[i]);
                };   
		        event.skills.removeArray(['wwyj_zhwpy','jstx_jisha','xjstx_jisha','xwj_jisha','xin_jisha']);
                'step 1'   
                var skill=event.skills.randomGet();
				player.addTempSkill(skill); 				
                player.popup(skill,'thunder');              
                player.flashAvatar('wwyj_tongyu',skill);  				
                game.log(player,'获得了技能','#g【'+get.translation(skill)+'】');                   
            },
       ai:{				
			order:5,
		}, 
            },
		    "wwyj_tongyu":{
                audio:["guidao",2],
                trigger:{
                    global:"phaseBegin",
                },				
                filter:function (event,player){
                    return player!=event.player;   
                },
                preHidden:true,
                forced:true, 
				group:"wwyj_tongyu2",				
                content:function (){   
                'step 0'   
                event.skills=[];
				player.line(trigger.player,'green');   
                var skills=trigger.player.skills.slice(0);
                for(var i=0;i<skills.length;i++){
                    var info=get.info(skills[i]);
                    if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)) event.skills.push(skills[i]);
                };   
		        event.skills.removeArray(['wwyj_zhwpy','jstx_jisha','xjstx_jisha','xwj_jisha','xin_jisha']);
                'step 1'   
                var skill=event.skills.randomGet();
				player.addTempSkill(skill); 				
                player.popup(skill,'thunder');              
                player.flashAvatar('wwyj_tongyu',skill);  
				/*
				player.mark(skill,{
                    name:get.translation(skill),
                    content:lib.translate[skill+'_info']
                });
				*/
                game.log(player,'获得了技能','#g【'+get.translation(skill)+'】');                   
    },
       ai:{				
			order:5,
		}, 
            },
		    "wwyj_chenwu":{                     
                trigger:{
          global:"phaseDiscardBefore",
     },
	direct:true,
	check:function (event,player){
		if(get.attitude(player,event.player)>0&&event.player.countCards('h')<=event.player.hp) return 0;
			return 1;
	},
	audio:"ext:文武英杰:1",
    filter:function (event,player){               
        return player!=event.player&&event.player.countCards('h')>player.countCards('h');                             
    },     
     content:function (){  
            'step 0'
		player.choosePlayerCard(trigger.player,'h',1,'选择'+get.translation(trigger.player)+'的一张手牌').ai=function(card){                          
			return Math.random();							
        };                										
			'step 1'
		if(result.bool){
			player.logSkill('wwyj_chenwu',trigger.player);
			event.card=result.cards[0];	
			player.showCards(event.card);
			//if(player.canUse(event.card,player)&&(get.type(event.card)=='basic'||get.type(event.card)=='trick')){
			if(get.type(event.card)=='basic'||get.type(event.card)=='trick'){	
				trigger.player.$give(event.card,player);
			    player.gain(event.card,trigger.player);			    
				if(get.color(event.card)=='black'){
				    //player.useCard(event.card,player);				
				    player.chooseUseTarget('选择使用【'+get.translation(event.card)+'】?',event.card,false,false); 	
				}				
			}
		}
		else event.finish();
     },
            },
		 "wwyj_shengbei":{				
			    audio:"ext:文武英杰:1",
				group:["wwyj_shengbei_sha","wwyj_shengbei_rsha","wwyj_shengbei_shan","wwyj_shengbei_rshan"],
				//group:["wwyj_shengbei_sha","wwyj_shengbei_rsha","wwyj_shengbei_shan","wwyj_shengbei_shan2","wwyj_shengbei_rshan"],					
				//group:["wwyj_shengbei_use","wwyj_shengbei_rsha","wwyj_shengbei_rshan"],	
			},			
			//因逻辑BUG过多而作废的wwyj_shengbei_use：
			"wwyj_shengbei_use":{		          		 
                enable:"phaseUse",
				//enable:'chooseToUse',
                usable:1,                                                 
          filter:function (event,player){                                                   
				return player.countCards('h')&&game.hasPlayer(function(current){
                    return player!=current&&current.countCards('h');
         });                                                   
				},
                content:function (){
            'step 0'		        
        player.chooseCard('展示一张牌','h',function(card){
            return (get.type(card)=='basic'||get.type(card)=='trick')&&game.hasPlayer(function(current){
                return player.canUse(card,current);
        });                         
            }).ai=function(card){			   
               if(card.name=='wanjian'||card.name=='taoyuan'||card.name=='wugu'||card.name=='jiedao') return 0;			   
			   return get.value(card);
            }; 
        'step 1' 
	    if(result.bool){
			event.num=0;       
            event.targets=game.filterPlayer(function(current){
                return player!=current&&current.countCards('h');
            }); 
			event.card=result.cards[0];
			player.showCards(event.card);
			player.say('圣杯在此，尔等速速俯首称臣');
			game.playwwyj('wwyj_shengbei1');
			event.goto(2);
		}else{
			event.finish();
		}
		'step 2' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('展示一张与'+get.translation(event.card)+'相同名称的手牌','h',function(card){
               return card.name==event.card.name;
            }).ai=function(card){			   
               if(get.attitude(event.targets[event.num],player)<=0) return 0;
			   return get.value(card);
            };   
         }
         else{
			 event.finish();
		 }
		 'step 3'      
		if(result.bool){           
           event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].showCards(result.cards[0]);           	     
           game.log(event.targets[event.num],'展示了一张',result.cards[0]);
		   player.chooseUseTarget('选择视为使用'+get.translation(event.card)+'的目标',{name:event.card.name,isCard:true},false,false);                        
		   event.finish();
		}
		else{
		   event.num++;
           event.goto(2);
		}                              				
    },
       ai:{
        result:{
            player:1,
        },
        order:6,
        threaten:0.5,
        },  
            },
			
			"wwyj_shengbei_sha":{		          		 
                enable:"phaseUse",				
                usable:1,                                                 
          filter:function (event,player){                   
              var num=game.countPlayer(function(current){
                    return player.canUse('sha',current)&&player.inRange(current);
         });                         
				return player.countCards('h','sha')&&num>0&&game.hasPlayer(function(current){
                    return player!=current&&current.countCards('h');
         });                                                   
				},
                content:function (){
            'step 0'		        
        player.chooseCard('展示一张【杀】','h',function(card){
               return card.name=='sha';
            }).ai=function(card){			   
               return get.value(card);
            }; 
        'step 1' 
	    if(result.bool){
			event.num=0;       
            event.targets=game.filterPlayer(function(current){
                return player!=current&&current.countCards('h');
            }); 
			player.showCards(result.cards[0]);	
			player.say('圣杯在此，尔等速速俯首称臣');
			game.playwwyj('wwyj_shengbei1');
			event.goto(2);
		}else{
			event.finish();
		}
		'step 2' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('展示一张【杀】','h',function(card){
               return card.name=='sha';
            }).ai=function(card){			   
               if(get.attitude(event.targets[event.num],player)<=0) return 0;
			   return get.value(card);
            };   
         }
         else{
			 event.finish();
		 }
		 'step 3'      
		if(result.bool){           
           event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].showCards(result.cards[0]);           	     
           game.log(event.targets[event.num],'展示了一张',result.cards[0]);
		   player.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha',isCard:true},false,false);             
           //player.getStat().card.sha++;
		   event.finish();
		}
		else{
		   event.num++;
           event.goto(2);
		}                              				
    },
       ai:{
        result:{
            player:1,
        },
        order:6,
        threaten:0.5,
        },  
            },
			"wwyj_shengbei_rsha":{           
                trigger:{
                    player:"chooseToRespondBegin",
                },       
                direct:true,
				usable:1,
                filter:function (event,player){             
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
            return player.countCards('h','sha')&&game.hasPlayer(function(current){
                return player!=current&&current.countCards('h');
         });                                                        
    },
                content:function (){     
          'step 0'		
        event.num=0;       
        event.targets=game.filterPlayer(function(current){
            return player!=current&&current.countCards('h');
        }); 
        player.chooseCard('展示一张【杀】','h',1,function(card){
               return card.name=='sha';
            }).ai=function(card){			   
               return get.value(card);
            };  
        'step 1' 
	    if(result.bool){
			player.showCards(result.cards);
			player.say('圣杯在此，尔等速速俯首称臣');
			game.playwwyj('wwyj_shengbei1');
			player.logSkill('wwyj_shengbei');
			event.goto(2);
		}else{
			event.finish();
		}
		'step 2' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('展示一张【杀】','h',1,function(card){
               return card.name=='sha';
            }).ai=function(card){			   
               if(get.attitude(event.targets[event.num],player)<=0) return 0;
			   return get.value(card);
            };   
         }
         else{
			 event.finish();
		 }
		 'step 3'      
		if(result.bool){           
            trigger.untrigger();
		   event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].showCards(result.cards[0]);           	     
           game.log(event.targets[event.num],'展示了一张',result.cards[0]);
		   trigger.responded=true;
           //trigger.result={bool:true,card:{name:'sha'}};   
           trigger.result={bool:true,card:{name:'sha',isCard:true}};  
		   event.finish();
		}
		else{
		   event.num++;
           event.goto(2);
		}                      		                            
    },
            },			
			
			"wwyj_shengbei_shan":{		          		 
                trigger:{
                    target:"shaBegin",
                }, 				
                usable:1,  
				direct:true,
          filter:function (event,player){                                              
				return player.countCards('h','shan')&&game.hasPlayer(function(current){
                    return player!=current&&current.countCards('h');
         });                                                   
				},
                content:function (){
            'step 0'		        
        player.chooseCard('展示一张【闪】','h',function(card){
               return card.name=='shan';
            }).ai=function(card){			   
               return get.value(card);
            }; 
        'step 1' 
	    if(result.bool){
			event.num=0;       
            event.targets=game.filterPlayer(function(current){
                return player!=current&&current.countCards('h');
            }); 
			player.showCards(result.cards[0]);	
			player.say('圣杯在此，尔等速速俯首称臣');
			game.playwwyj('wwyj_shengbei1');
			event.goto(2);
		}else{
			event.finish();
		}
		'step 2' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('展示一张【闪】','h',function(card){
               return card.name=='shan';
            }).ai=function(card){			   
               if(get.attitude(event.targets[event.num],player)<=0) return 0;
			   return get.value(card);
            };   
         }
         else{
			 event.finish();
		 }
		 'step 3'      
		if(result.bool){           
           event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].showCards(result.cards[0]);           	     
           game.log(event.targets[event.num],'展示了一张',result.cards[0]);		   
		   player.useCard({name:"shan"},player);
		   trigger.cancel();//无奈之举		   
		   event.finish();
		}
		else{
		   event.num++;
           event.goto(2);
		}                              				
    },
       ai:{        
        order:6,
        threaten:0.5,
        },  
            },
			
			/*	
			//以下写法的BUG在于不论有没人展示闪都能使用闪，故不得不换写法
			"wwyj_shengbei_shan":{				
				prompt:'当你需要使用【闪】时，你可以展示一张【闪】，然后若其他男性角色展示一张【闪】，视为你使用之',
				enable:'chooseToUse',
				usable:1,
				filter:function (event,player){					
					return player.countCards('h','shan')&&game.hasPlayer(function(current){
            return player!=current&&current.countCards('h');
        }); 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     onuse:function (result,player){
         
     },
     viewAsFilter:function (player){
     return player.countCards('h','shan')&&game.hasPlayer(function(current){
            return current.countCards('h');
        });               
     },	
				viewAs:{name:'shan'},				
				ai:{
				    order:5,
					threaten:1.5,
					respondShan:true,
				}
			},	
			
			"wwyj_shengbei_shan2":{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				filter:function (event,player){
					return player.countCards('h','shan')&&event.skill=='wwyj_shengbei_shan'&&game.hasPlayer(function(current){
            return player!=current&&current.countCards('h');
        });                                          
				},
				content:function (){					
        'step 0'		
        event.num=0;       
        event.targets=game.filterPlayer(function(current){
            return player!=current&&current.countCards('h');
        }); 
        player.chooseCard('展示一张【闪】','h',1,function(card){
               return card.name=='shan';
            }).ai=function(card){			   
               return get.value(card);
            };  
        'step 1' 
	    if(result.bool){
			player.showCards(result.cards);
			player.say('圣杯在此，尔等速速俯首称臣');
			game.playwwyj('wwyj_shengbei1');
			player.logSkill('wwyj_shengbei');
			event.goto(2);
		}else{
			event.finish();
		}
		'step 2' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('展示一张【闪】','h',1,function(card){
               return card.name=='shan';
            }).ai=function(card){			   
               if(get.attitude(event.targets[event.num],player)<=0) return 0;
			   return 12-get.value(card);
            };   
         }
         else{
			 event.finish();
		 }
		 'step 3'      
		if(result.bool){           
           event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].showCards(result.cards[0]);           	     
           game.log(event.targets[event.num],'展示了一张',result.cards[0]);
		   event.finish();
		}
		else{
		   event.num++;
           event.goto(2);
		}                              
				},
			},
			*/
			"wwyj_shengbei_rshan":{          
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true, 
				usable:1,
                filter:function (event,player){               
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return player.countCards('h','shan')&&game.hasPlayer(function(current){
            return player!=current&&current.countCards('h');
        });                                    
    },
                content:function (){
            'step 0'		
        event.num=0;       
        event.targets=game.filterPlayer(function(current){
            return player!=current&&current.countCards('h');
        }); 
        player.chooseCard('展示一张【闪】','h',1,function(card){
               return card.name=='shan';
            }).ai=function(card){			   
               return get.value(card);
            };  
        'step 1' 
	    if(result.bool){
			player.showCards(result.cards);
			player.say('圣杯在此，尔等速速俯首称臣');
			game.playwwyj('wwyj_shengbei1');
			player.logSkill('wwyj_shengbei');
			event.goto(2);
		}else{
			event.finish();
		}
		'step 2' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('展示一张【闪】','h',1,function(card){
               return card.name=='shan';
            }).ai=function(card){			   
               if(get.attitude(event.targets[event.num],player)<=0) return 0;
			   return get.value(card);
            };   
         }
         else{
			 event.finish();
		 }
		 'step 3'      
		if(result.bool){           
           trigger.untrigger();
		   event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].showCards(result.cards[0]);           	     
           game.log(event.targets[event.num],'展示了一张',result.cards[0]);
		   trigger.responded=true;
          // trigger.result={bool:true,card:{name:'shan'}};  
           trigger.result={bool:true,card:{name:'shan',isCard:true}};  
		   event.finish();
		}
		else{
		   event.num++;
           event.goto(2);
		}                           
			                                                         
    },
            },
			
         "wwyj_rongyao":{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                audio:["xinfu_guanchao",2],
                onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',					
				},				
                /* init:function (player){
                    player.storage.wwyj_rongyao=[];
                },*/
               /* filter:function (event,player){
        return player.countCards('h');
    }, */
                marktext:"耀",
                content:function (){        
            var cards=get.cards(player.getDamagedHp());                                    
            player.showCards(cards);
            player.addToExpansion(cards,player,'give').gaintag.add('wwyj_rongyao');
            /*
            player.$give(cards,player,false);            
            player.lose(cards,ui.special,'toStorage');          
            player.storage.wwyj_rongyao=player.storage.wwyj_rongyao.concat(cards);
            player.syncStorage('wwyj_rongyao');
            */
            //player.markSkill('wwyj_rongyao');
            player.update();
            player.logSkill('wwyj_rongyao');  
            game.log(player,'将',cards,'置于武将牌上');
    },
               /* 
               intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                player.$throw(storage);
                delete player.storage.wwyj_rongyao;
            }
        },
                },
                */
                mod:{
                targetEnabled:function (card,player,target,now){
        if(target.getExpansions('wwyj_rongyao').length>0){        
            if(get.color(card)=='black') return false;               
        }
        },
    },
                ai:{
                    threaten:function (player,target){
            if(target.getExpansions('wwyj_rongyao').length>0) return 2;
            return 1;
        },
                },
            },
            "wwyj_taoge2":{                                         
            trigger:{player:'phaseAfter'},
			priority:-7,
			silent:true,
			forced:true,
			popup:false,			
			content:function(){				   
				for(var i=0;i<game.players.length;i++){
				    if(game.players[i].hasSkill('wwyj_taoge1')){
				        game.players[i].storage.wwyj_taoge1=[];
				        game.players[i].removeSkill('wwyj_taoge1');
				    } 
				}    
			},
           },                   
           "wwyj_taoge1":{
               init:function (player){
            player.storage.wwyj_taoge1=[];
        }, 
           },
            "wwyj_taoge":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,               
                group:"wwyj_taoge2",
                filter:function (event,player){      
            if(player.getExpansions('wwyj_rongyao').length<1) return false;       
        return true;
    },
                content:function (){
        "step 0"
        player.logSkill('wwyj_taoge');
        event.cards=[];
        player.chooseCardButton(get.translation('wwyj_taoge'),player.getExpansions('wwyj_rongyao'),[1,Math.min(game.players.length,player.getExpansions('wwyj_rongyao').length)]);
		"step 1"
		if(result.bool){			
			for(var i=0;i<result.links.length;i++){
			   event.cards.push(result.links[i]);
			}
			//player.give(result.links[0],trigger.source,'give');					
                //player.getExpansions('wwyj_rongyao').remove(event.cards);
               // player.loseToDiscardpile(event.cards); 
                //game.cardsDiscard(event.cards);
			/*
			player.$throw(event.cards);
			player.storage.wwyj_rongyao.remove(result.links);			
			player.syncStorage('wwyj_rongyao');
			if(!player.storage.wwyj_rongyao.length){
            player.unmarkSkill('wwyj_rongyao');
        }
        else{
            player.markSkill('wwyj_rongyao');
        }		*/				
		}
		else event.finish();
        "step 2"                
        player.chooseControl().set('choiceList',['弃置这些“耀”并令'+get.cnNumber(event.cards.length)+'名其他角色各摸一张牌，然后你回复一点体力','交给'+get.cnNumber(event.cards.length)+'名其他角色各一张“耀”，然后其须弃置一张与之不同类别的手牌，否则失去一点体力']).set('ai',function(){
        var num=game.countPlayer(function(current){
			return get.attitude(player,current)<=0;
		});
        if(num>=2) return 1;          
            return 0;
        });
        "step 3"
        if(result.index==0){
            event.goto(4);
        }
        else{
            event.num=0;           
            event.goto(6);
		}		
        "step 4"
        player.chooseTarget(get.prompt('wwyj_taoge'),event.cards.length,true,function(card,player,target){
            return true;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        });
        "step 5"
        if(result.bool){
            player.logSkill('wwyj_taoge');
            //game.cardsDiscard(event.cards);
            player.loseToDiscardpile(event.cards); 
            game.asyncDraw(result.targets);
            player.recover();
            event.finish();
        }
        else{
            event.finish();
        }        
         "step 6"
         player.chooseTarget(get.prompt('wwyj_taoge'),event.cards.length,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 7" 
       if(result.bool){   
            player.logSkill('wwyj_taoge');                          
            event.targets=result.targets;                                                
        }
        else{
            event.finish();
        }
        "step 8"  
        if(event.num<event.targets.length){                                             
            player.chooseCardButton('选择交给'+get.translation(event.targets[event.num])+'一张“耀”',event.cards,true);               
         }
         else{            
            event.goto(10); 
         }   
          "step 9"       
		if(result.bool){                    
           player.line(event.targets[event.num],'green');          
           event.targets[event.num].addSkill('wwyj_taoge1');            
           event.targets[event.num].storage.wwyj_taoge1=get.type(result.links[0]);                                  		              
           player.$give(result.links[0],event.targets[event.num]);
           event.targets[event.num].gain(result.links[0],player);		               
           event.cards.remove(result.links[0]);                
           event.num++;
           event.goto(8);
         }             
        "step 10"        
        event.num=0;
        event.targets=game.filterPlayer(function(current){
             return current!=player&&current.hasSkill('wwyj_taoge1');
         });                                     
        event.targets.sort(lib.sort.seat);
         "step 11"           
         if(event.num<event.targets.length){		        	
            event.targets[event.num].chooseCard('弃置一张与'+get.translation(event.targets[event.num].storage.wwyj_taoge1)+'牌类型不同的手牌，否则失去一点体力','h',function(card){
               return get.type(card)!=event.targets[event.num].storage.wwyj_taoge1;
            }).ai=function(card){            		   
               return 7-get.value(card);
            }; 
          } 
          else{
              event.finish();
          } 
         "step 12"      
		if(result.bool){           
           //event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].discard(result.cards);           
           event.num++;
           event.goto(11);         
        } 
        else{
           event.targets[event.num].loseHp();
           event.num++;
           event.goto(11); 
        }          
    },
                ai:{
                    maixie:true,
                    order:7,
                },
            },
         "wwyj_zhiguo":{
                global:"wwyj_zhiguo2",
                trigger:{
                    global:"phaseDrawEnd",
                },
                forced:true,
                audio:"ext:文武英杰:2",
                logTarget:"player",
                filter:function(event,player){
       return event.player.sex=="female"&&event.player!=player;
    },
                content:function(){
       "step 0"
       trigger.player.chooseCard("he","〖掷果〗：交给"+get.translation(player)+"一张牌",true);
       "step 1"
       if(result.bool){
            player.gain(result.cards,trigger.player);
            trigger.player.$give(1,player);
            trigger.player.recover();
            var chat=["傅粉何郎，荀令留香。","有匪君子，如切如磋，如琢如磨。","且盼与君相知。"].randomGet();
            trigger.player.chat(chat);
       }       
       //player.recover();
      /* "step 2"
                    var list=[];
                    list.push('失去体力');
                    if(trigger.player.isDamaged()) list.push('回复体力');
                    list.push('cancel2')
                    player.chooseControl(list).set('prompt','你要令'+get.translation(trigger.player)+'做什么呢？').set('ai',function(){
                        var player=_status.event.player,target=_status.event.getTrigger().player;
						var att=get.attitude(player,target),eff=get.recoverEffect(target,player,player);
						if(target.isDamaged()&&att>2&&eff>0) return '回复体力';
						if(att<-2&&eff<=0) return '失去体力';
						return 'cancel2';
                    });
                    "step 3"
                    if(result.control=='回复体力'){
                        var target=trigger.player;
                        var chat=["姑娘谬赞。","桃之夭夭，灼灼其华。","所谓伊人，在水一方。"].randomGet();
                        target.recover();
                        player.chat(chat);
                    }
                    if(result.control=='失去体力'){
                        var target=trigger.player;
                        var chat=["卿本佳人，奈何助贼。","与姑娘道不同，难相知。","如此言语，徒增姑娘烦恼。"].randomGet();
                        target.loseHp();
                        player.chat(chat);
                    }*/
               },
            },
            "wwyj_zhiguo2":{
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,				
                popup:false,
                filter:function(event,player){
                    return !event.numFixed&&player.sex=="female"&&
                    game.countPlayer(function(current){return current.hasSkill('wwyj_zhiguo')})>0;
                },
                content:function(){
                    trigger.num++;
					game.playwwyjAudio('wwyj_zhiguo',2);
                },
            },
            "wwyj_pingfang":{
                   audio:"ext:文武英杰:2",
                        trigger:{
                            player:["phaseZhunbei"],
                        },
                        check:function (event,player){
                            if(game.countPlayer(function(current){
						       return current!=player&&current.sex=='male';
					         })==0)  return false;
                            return true;
                        },
                        content:function(){
                   "step 0"
                   var chat=["北方有佳人，绝世而独立。","一顾倾人城，再顾倾人国。","有美一人，清扬婉兮。"].randomGet();
                   player.chat(chat);
                    var list;
                    if(_status.characterlist){
                        list=[];
                        for(var i=0;i<_status.characterlist.length;i++){
                            var name=_status.characterlist[i];
                            if(lib.character[name][0]=='female') list.push(name);
                        }
                    }
                    else if(_status.connectMode){
                        list=get.charactersOL(function(i){
                            return lib.character[i][0]!='female';
                        });
                    }
                    else{
                        list=get.gainableCharacters(function(info){
                            return info[0]=='female';
                        });
                    }
                    var players=game.players.concat(game.dead);
                    for(var i=0;i<players.length;i++){
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }        
                    player.chooseButton(true).set('ai',function(button){
                        return Math.random();
                    }).set('createDialog',['请选择一张武将牌',[list.randomGets(6),'character']]);
                    "step 1"
                    var link=result.links[0];
                    event.link=link;
                    "step 2"                                                   
                    player.chooseTarget('请选择要变更武将牌的角色',function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        if(get.attitude(player,target)>0)  return 10;
                        if(get.rank(link)>6)  return 1;
						return Math.random();
                    });
                    "step 3"
                    if(result.bool){
                        var target=result.targets[0];
                        player.line(target);                       
                        target.reinit(target.name1,event.link,false);
                         if(_status.characterlist){
                        _status.characterlist.add(target.name1);
                        _status.characterlist.remove(event.link);
                        }  
                    }                          
               },
            },
            
           /* wwyj_qingyan:{
                enable:"phaseUse",
                audio:"ext:阳光包/audio:2",
                filterCard:function (card){
                    return get.name(card)=='jiu';
                },
                selectCard:function (){
                    return [0,1];
                },
                filterTarget:function (card,player,target){
                    if(target.hasSkill('wwyj_qingyan_off')) return false;
                    return target==player||target.sex=="female";
                },
                content:function (){
                    "step 0"
                    var chat=["品拟飞仙，情殊流俗。","才逾苏小，貌并王嫱。","韵中生韵，香外生香。"].randomGet();
                    player.chat(chat);
                    if(cards.length==0){
                        player.loseHp();
                    }
                    "step 1"
                    target.addTempSkill('wwyj_qingyan_off');
                    target.draw(3);
                },
                check:function (card){
                    return 10-get.value(card);
                },
                ai:{
                    order:8.5,
                    result:{
                        target:function (player,target){
                            if(!ui.selected.cards.length){
                                if(player.hp<3) return 0;
                            }
                            return 1;
                        },
                    },
                },
                subSkill:{
                   off:{
                       sub:true,
                   }
                }
            },*/
                        
           "wwyj_fanxing":{                
                enable:"phaseUse",	
                usable:1,
                audio:"ext:文武英杰:1",	
                filter:function (event,player){
          return player.getExpansions('wwyj_huayue').length>0;
      },
                content:function (){
           'step 0'  
           player.$fullscreenpop('箭雨流星','fire');                
           event.num=Math.min(5,player.getExpansions('wwyj_huayue').length);        
         /* 
         //手动式：
           'step 1'                  
			player.chooseCardButton(player.storage.wwyj_huayue,1,'选择获得其中的一张“星”牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return get.value(button.link);
            });      										
			'step 2'    
			if(result.bool){
                event.num--;
                player.$throw(result.links[0]);						
                player.storage.wwyj_huayue.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                if(player.storage.wwyj_huayue.length<=0){
                    player.unmarkSkill('wwyj_huayue');
                }
                player.syncStorage('wwyj_huayue');
                var list=game.filterPlayer(function(current){ 
                    return player.canUse('wanjian',current); 
                });                 
                list.sortBySeat(); 
                player.useCard({name:'wanjian'},list); 		          			
            }       
            else event.finish();                
          'step 3'                            
        if(event.num>0){                                                                                                                                                   
            event.goto(1);
        }
        else{
            event.finish();      
        } 
        */        
        'step 1'         
        /*
        var list=[];
        var cards=player.getStorage("wwyj_huayue");
        for(var i=0;i<cards.length;i++){
            list.push(cards[i]);
            //player.storage.wwyj_huayue.remove(cards[i]);
        }
        player.storage.wwyj_huayue.remove(list);
        */
        var cards=player.getExpansions('wwyj_huayue');						
		player.loseToDiscardpile(cards); 						
        if(player.getExpansions('wwyj_huayue').length<=0){
             player.unmarkSkill('wwyj_huayue');
        }
        player.syncStorage('wwyj_huayue');                
        'step 2'                            
        if(event.num>0){                                                                                                                                                                 
            var list=game.filterPlayer(function(current){ 
                return player.canUse('wanjian',current); 
            });                 
            list.sortBySeat(); 
            player.useCard({name:'wanjian'},list);
            event.num--;
            event.redo();
        }
        else{            
            event.finish();      
        } 
    },
                ai:{
					result:{
						player:function(player){							
							if(player.getExpansions('wwyj_huayue').length<2) return 0;
							return 1;
						},						
					},
					order:5,
					expose:0.2
				},  
            },
           "wwyj_huayue2":{                
                trigger:{
                    player:"damageEnd",
                }, 
                audio:"ext:文武英杰:1",               
                forced:true,       								
                filter:function (event,player){
          return event.source&&event.source.isAlive()&&player.getExpansions('wwyj_huayue').length>0;
      },
                content:function (){
           'step 0'        
			trigger.source.chooseCardButton(player.getExpansions('wwyj_huayue'),1,true,'选择获得其中的一张“星”牌').set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                if(get.color(button.link)=="red"&&get.attitude(player,trigger.source)>0) return 1;
                return get.value(button.link);
            });      										
			'step 1'    
			if(result.bool){
                //player.$throw(result.links);	
                player.give(result.links[0],trigger.source,'give');					
               // player.getExpansions('wwyj_huayue').remove(result.links[0]);
               // game.cardsDiscard(result.links[0]);
              // player.loseToDiscardpile(result.links[0]);
                player.syncStorage('wwyj_huayue');
                //trigger.source.gain(result.links[0],'fromStorage');                                						
                if(get.color(result.links[0])=="red"){                    
                    player.recover();
                }else{
                    trigger.source.damage();
                }		          					          					          					          			
            }       
            else event.finish();                                    	                          	          	          	                         
    },
            },
           
           "wwyj_huayue":{                
                trigger:{
                    player:"useCard",
                },  
                audio:"ext:文武英杰:1",   				
				forced:true,								
				priority:20,
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',					
				},				
				/*
				init:function (player){
				    player.storage.wwyj_huayue=[];
				},
				*/
				filter:function (event,player){
					return event.card&&event.card.isCard&&get.type(event.card)=='basic';
				},				
				group:["wwyj_huayue2"],				
                marktext:"星",               
                content:function (){                  								        
					//player.lose(trigger.cards,ui.special,'toStorage');						
					//player.storage.wwyj_huayue=player.storage.wwyj_huayue.concat(trigger.cards);					
					player.addToExpansion(trigger.cards,player,'give').gaintag.add('wwyj_huayue');
					//player.syncStorage('wwyj_huayue');
					player.draw();
				   // player.markSkill('wwyj_huayue');
				    player.update();															
                },
            },	
           "wwyj_chansui":{                
                trigger:{
                    player:"damageEnd",
                },   
                audio:"ext:文武英杰:1",             
                forced:true,    
                group:"wwyj_chansui2",   								
                filter:function (event,player){
          return player!=event.source&&player.getExpansions('wwyj_shengming').length>0;
      },
                content:function (){
           'step 0'        
			trigger.source.chooseCardButton(player.getExpansions('wwyj_shengming'),1,'选择获得其中的一张武器牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return get.value(button.link);
            });      										
			'step 1'    
			if(result.bool){
                //player.loseToDiscardpile(result.links[0]);
                player.give(result.links[0],trigger.source,'give');					
                //player.getExpansions('wwyj_shengming').remove(result.links[0]);
                //game.cardsDiscard(result.links[0]);
                
                player.syncStorage('wwyj_shengming');  
                player.update(); 
                /*                          						
                if(player.getExpansions('wwyj_shengming').length<1){
                    //player.unmarkSkill('wwyj_shengming');
					game.playwwyj('wwyj_chansuideshengming');
                    //player.loseHp(player.hp);
                    var num=player.getHp();
                    if(num>0) player.loseHp(num);
                }	
                */	          		 
                var num=1;
                var info=get.info(result.links[0]);
                if(info&&info.distance&&info.distance.attackFrom){
                    num-=info.distance.attackFrom;
                }
                player.draw(num);                 			          			
            }       
            else event.finish();                                    	                          	          	          	                         
    },
            },
           "wwyj_chansui2":{                
                trigger:{
                    player:"phaseBegin",
                },                 
                forced:true,  
                audio:"ext:文武英杰:1",     								
                filter:function (event,player){
          return player.getExpansions('wwyj_shengming').length>0;
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('wwyj_chansui2'),1,true,function(card,player,target){
            //return target.canEquip('equip1')&&!target.isDisabled('equip1');
            return !target.isDisabled('equip1');
        },function(target){            
            if(!target.isEmpty(1)&&get.attitude(player,target)>0) return 0;
            return get.attitude(player,target)>0;
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('wwyj_chansui2'); 
			event.target=result.targets[0];	
			player.chooseCardButton(player.getExpansions('wwyj_shengming'),1,'选择令'+get.translation(event.target)+'装备其中的一张武器牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return get.value(button.link);
            });      						
		}else{
            event.finish();
        }				
			'step 2'    
			if(result.bool){			               
                //player.getExpansions('wwyj_shengming').remove(result.links[0]);
               // game.cardsDiscard(result.links[0]);
                event.target.equip(result.links[0]);
                player.syncStorage('wwyj_shengming'); 
                player.update();  
                /*
                if(player.getExpansions('wwyj_shengming').length<1){
                   // player.unmarkSkill('wwyj_shengming');
					game.playwwyj('wwyj_chansuideshengming');
                    //player.loseHp(player.hp);
                    var num=player.getHp();
                    if(num>0) player.loseHp(num);
                }
                */		    
                var num=1;
                var info=get.info(result.links[0]);
                if(info&&info.distance&&info.distance.attackFrom){
                    num-=info.distance.attackFrom;
                }
                player.draw(num);						                           					          			
            }       
            else event.finish();                                    	                          	          	          	                         
    },
            },
           "wwyj_shengming":{                
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },  
                audio:"ext:文武英杰:1", 				
				forced:true,
				//frequent:true,
				priority:Infinity,
				
				init:function (player){
				    player.storage.wwyj_shengming=[];
				},
				
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',					
				},				
                marktext:"命",  
                mod:{
					maxHandcard:function (player,num){
					    return num+player.getExpansions('wwyj_shengming').length;
					},
				},             
                content:function (){                  								        			        
			        var list=[];			        
				    //for(var i=0;i<ui.cardPile.childElementCount;i++){
				    for(var i=0;i<ui.cardPile.childNodes.length;i++){
						var type=get.subtype(ui.cardPile.childNodes[i]);
						if(type=='equip1'){
							game.cardsDiscard(ui.cardPile.childNodes[i]);			
							list.push(ui.cardPile.childNodes[i]);							
						}
					}
					//for(var i=0;i<ui.discardPile.childElementCount;i++){
					for(var i=0;i<ui.discardPile.childNodes.length;i++){										
						var type=get.subtype(ui.discardPile.childNodes[i]);
						if(type=='equip1'){
							game.cardsDiscard(ui.discardPile.childNodes[i]);			
							list.push(ui.discardPile.childNodes[i]);							
						}
					}
					player.showCards(list);
					player.addToExpansion(list,player,'give').gaintag.add('wwyj_shengming');         
					//player.gain(list,"gain2");
					//player.$throw(list);
					/*
					player.lose(list,ui.special,'toStorage');						
					player.storage.wwyj_shengming=player.storage.wwyj_shengming.concat(list);
					player.syncStorage('wwyj_shengming');
				    player.markSkill('wwyj_shengming');
				    */
				    player.update();	
				    game.log(player,'将',list,'置于武将牌上作为“命”');														
                },
            },
           "wwyj_ranqi":{
		audio:["zhuikong",2],
        trigger:{
			player:'damageEnd',
		},
		forced:true,		
		filter:function (event,player){
            return event.source&&event.source.isAlive();
        },                    
        content:function (){
			'step 0'
			var list=['零种','一种','两种','三种','四种'];
			var cards=player.getCards('h'); 
            var suits=[];   
            for(i=0;i<cards.length;i++){
                if(!suits.contains(get.suit(cards[i]))){
                    suits.push(get.suit(cards[i])); 
                }
            }        
			event.suitnum=suits.length;			
			if(list){
				trigger.source.chooseControl(list).set('ai',function(){
					//if(get.attitude(trigger.source,player)>0&&!player.countCards('h')) return '零种';
					//if(get.attitude(trigger.source,player)>0&&player.countCards('h')==1) return '一种';					   
					var list1=['一种','两种','三种','四种'];
					if(!player.countCards('h')) return '零种';
					if(player.countCards('h')==1) return '一种';
					if(player.countCards('h')==2) return ['一种','两种'].randomGet();
					if(player.countCards('h')==3) return ['一种','两种','三种'].randomGet();
					    return list1.randomGet();
			    }
			).set('prompt',get.prompt('wwyj_ranqi')).set('prompt2',get.translation('wwyj_ranqi_info'));
			}
			else event.finish();		
			'step 1'
			if(result.control){			  			    
			    game.log(trigger.source,'选择了'+get.translation(result.control));
			    trigger.source.popup(result.control);
			    event.choice=result.control;
			}
			else{
				event.finish();
			}
			'step 2'
			if(event.choice=='零种'&&event.suitnum==0){
			    player.recover();
			}
			else if(event.choice=='零种'&&event.suitnum!=0){
			    trigger.source.turnOver();
			}
			else if(event.choice=='一种'&&event.suitnum==1){
			    player.recover();
			}
			else if(event.choice=='一种'&&event.suitnum!=1){
			    trigger.source.turnOver();
			}
			else if(event.choice=='两种'&&event.suitnum==2){
			    player.recover();
			}
			else if(event.choice=='两种'&&event.suitnum!=2){
			    trigger.source.turnOver();
			}
			else if(event.choice=='三种'&&event.suitnum==3){
			    player.recover();
			}
			else if(event.choice=='三种'&&event.suitnum!=3){
			    trigger.source.turnOver();
			}
			else if(event.choice=='四种'&&event.suitnum==4){
			    player.recover();
			}
			else if(event.choice=='四种'&&event.suitnum!=4){
			    trigger.source.turnOver();
			}			
		},
		ai:{
           order:5,               
        },
	},
            "wwyj_langsha":{             
            trigger:{
                player:"shaBegin",
            },
            forced:true, 
			audio:"ext:文武英杰:2",
            content:function (){
                game.playwwyj(['wwyj_langsha1','wwyj_langsha2'].randomGet());                    
            },       
            mod:{
                cardUsable:function (card,player,num){
					var number=game.countPlayer(function(current){
                        return current.isTurnedOver(); 
                    });     
					if(card.name=='sha') return num+number;
				},
                globalFrom:function (from,to){
                    if(to.isTurnedOver()){
                        return -Infinity;
                    }
                },
            },
            },     
            "wwyj_guozhandraw":{                                
                audio:["yiji",2],                    
                trigger:{
                    global:["damageBegin","recoverBegin"],
                },                                
                frequent:true,         
                filter:function (event,player){       
            return event.player.group==player.storage.wwyj_guozhan;       
    },
                content:function (){
                    player.draw();
                },
           },     
           "wwyj_guozhanrespond":{                                
                audio:["lanjiang",2],                    
                trigger:{
                    player:"chooseToRespondBegin",
                },                                
                direct:true,         
                filter:function (event,player){
       // if(event.responded) return false;          
        return game.hasPlayer(function(current){
            return current!=player&&current.group==player.storage.wwyj_guozhan&&current.countCards('h')>0;
        });
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('wwyj_guozhanrespond'),function (card,player,target){
            if(target==player) return false;            
            if(!target.countCards('h')) return false; 
            if(target.group!=player.storage.wwyj_guozhan) return false; 
           // if(!player.storage.wwyj_guozhan.contains(target.group)) return false;                             
            return true;
        }).ai=function(target){
            return 1-get.attitude(player,target);
        };
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('wwyj_guozhanrespond',target);
            event.target=target;
            var cards=target.getCards('h');
            player.chooseCardButton('选择'+get.translation(target)+'的一张卡手牌打出',cards).filterButton=function(button){
                return trigger.filterCard(button.link);
            }
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){            
            game.log(player,'打出了',event.target,'的手牌');
            event.target.$throw(result.links);
            event.target.lose(result.links);
            trigger.untrigger();
            trigger.animate=false;
            trigger.responded=true;
            result.buttons[0].link.remove();
            trigger.result={bool:true,card:result.buttons[0].link}
        }
        else{
            event.finish();
        }
        
    },
                ai:{
                    order:8, 
                    effect:{
                        target:function (card){
                if(get.tag(card,'respondShan')) return 0.4;
                if(get.tag(card,'respondSha')) return 0.4;
            },
                    },
                },
            },
          "wwyj_guozhan":{               
                trigger:{                    
                    global:"dieAfter",
                    player:"phaseEnd",
                }, 
                audio:["lanjiang",2],              
                mark:true,
                marktext:'国',
                intro:{	
                    content:function (storage,player,skill){
         		        return '你选择的势力是'+get.translation(player.storage.wwyj_guozhan);
          	        }, 
		        }, 
		        filter:function (event,player){		            
			        return player.isAlive();
			    },        		                                                       		                                           
                direct:true,  
                init:function (player){
                    player.storage.wwyj_guozhan=[];
                },           	                
                group:["wwyj_guozhanrespond","wwyj_guozhandraw"],                                                  
                content:function (){
             'step 0'
            event.groups=[];
            delete player.storage.wwyj_guozhan;
            player.storage.wwyj_guozhan=[];
			for(var i=0;i<game.players.length;i++){		    		
                if(player!=game.players[i]){
                    event.groups.add(game.players[i].group); //用push会将重复的都列出来
                }  			 
		    }	    	                							
			/*player.chooseControl(event.groups).set('ai',function(){
					return event.groups.randomGet();
			    }
			).set('prompt',get.prompt('wwyj_guozhan')).set('prompt2',get.translation('wwyj_guozhan_info'));	*/
			player.chooseButton(true,[[event.groups,'vcard']]).set('filterButton',function(button){            
                return true;
        }).set('ai',function(button){
            var rand=_status.event.rand*2;
            switch(button.link[2]){
                case 'wei':return 5+rand[5];
                case 'shu':return 5+rand[5];
                case 'wu':return 5+rand[5];
                case 'qun':return 5+rand[5];
                case 'wwyjsha':return 5+rand[5];
                default:return rand[5];
            }
        }).set('rand',[Math.random(),Math.random(),Math.random(),Math.random()],Math.random());                       						
			'step 1'
			if(result.bool){	
			//if(result.control){		  			    			    		
			    player.logSkill('wwyj_guozhan');
			    //player.markSkill('wwyj_guozhan');			    			    
			    /*player.storage.wwyj_guozhan=result.control;
			    //player.storage.wwyj_guozhan.push(result.control);
			    player.popup(result.control);
			    game.log(player,'选择了'+get.translation(result.control));	*/
			    player.storage.wwyj_guozhan.add(result.links[0][2]);
			    //player.storage.wwyj_guozhan=result.links[0][2];
			    player.popup(result.links[0][2]);
			    game.log(player,'选择了'+get.translation(result.links[0][2]));			    
			}
			else{
				event.finish();
			}			
     },
                ai:{                   
                    order:6,                   
                },
            },
            "wwyj_fuji":{  
				audio:["reanjian",2],
				trigger:{player:'showCharacterAfter'},
				logTarget:function (){
					return _status.currentPhase;
				},
				filter:function (event,player){					
					return _status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.isAlive();
				},
				check:function (event,player){
					if(player.countCards('e')>_status.currentPhase.countCards('e')) return false;
					return get.attitude(player,_status.currentPhase)<=0;
				},
				content:function(){
					game.wwyj_background();
					game.playAudio('..','extension','文武英杰','wwyj_dansha');
					player.swapEquip(_status.currentPhase);
					_status.currentPhase.turnOver();	
				},
				ai:{
					expose:0.2,
				},
			},
           "wwyj_chaoyue":{                     
                trigger:{                   
                    source:"damageBegin",
                },	                   				
                forced:true, 
                audio:["refenyin",2],                          
                filter:function (event,player){
        return event.card.name=='sha'&&(event.player.isTurnedOver()||event.player.isLinked()||event.player.isHealthy());
    },
                content:function (){                  
            trigger.num++;  
           // game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet());                                                                
    },
            },  
          "wwyj_ansha":{
         trigger:{
          player:"shaBegin",
     },
     forced:true,
     audio:["fenyin",2], 
     content:function (){  
        //game.playwwyj('wwyj_ansha1'); 
     },
				mod:{			
					globalFrom:function (from,to,distance){
                        return distance-game.roundNumber;
                    },
					cardUsable:function (card,player,num){
						if(card.name=='sha') return num+game.roundNumber;
					},
				},
			},
          "wwyj_jianya":{               
                trigger:{
                    source:"die",
                    player:"damageEnd",
                },  
                audio:["jinjiu",2],     
                forceDie:true, 
                frequent:true,                                   
                filter:function (event,player){    
        return player.isAlive();
    },
                content:function (){
             'step 0'
            event.cards=[];
			event.cardpile=[];
			var list=['basic','trick','equip'];						
			player.chooseControl(list).set('ai',function(){
				if(player.hp<2) return 'basic';	
					return list.randomGet();					
			    }
			).set('prompt',get.prompt('wwyj_jianya')).set('prompt2',get.translation('wwyj_jianya_info'));								
			'step 1'
			if(result.control){			  			    			    
			    event.type=result.control;
			    //player.logSkill('wwyj_jianya');
			    player.popup(result.control);
			    game.log(player,'选择了'+get.translation(result.control));			    
			}
			else{
				event.finish();
			}
			'step 2'
			for(var i=0;i<ui.cardPile.childNodes.length;i++){
				var type=get.type(ui.cardPile.childNodes[i]);
				if(type==event.type){
					event.cardpile.push(ui.cardPile.childNodes[i]);
				}
			}
			event.cards=event.cardpile.randomGets(2);	
			'step 3'
			player.chooseCardButton(event.cards,[1,2],'选择获得任意张黑色的牌').set('filterButton',function(button){           
             return get.color(button.link)=='black';
         }).set('ai',function(button){
             return true;
         });
            'step 4'
        if(result.bool){
             player.gain(result.links,'gain2');             
        }       
        else event.finish();        	
     },
                ai:{                   
                    order:6,                   
                },
            },
          "wwyj_leishao":{
                trigger:{
                    player:"damageBegin",
                },
                audio:["xianzhen",2],
                forced:true,
                filter:function (event,player){
               return event.nature&&event.nature=='thunder';
    },
                group:"wwyj_leishao_1",
                content:function (){
       trigger.num--;
    },
                subSkill:{
                    "1":{
                        prompt:"</font><font color=#f00>锁定技</font> 你的草花非装备牌均视为雷杀且无距离和次数限制",
                        mod:{
                            targetInRange:function (card){
                        if(get.suit(card)=='club'||_status.event.skill=='wwyj_leishao_1') return true;    
                        if(card.name=='sha'&&card.nature=='thunder') return true;
                },
                            cardEnabled:function (card,player){
                        if(_status.event.skill==undefined&&get.type(card)!='equip'&&get.suit(card)=='club') return false;
                },
                            cardUsable:function (card,player){
                        if(_status.event.skill==undefined&&get.type(card)!='equip'&&get.suit(card)=='club') return false;       
                        if(card.name=='sha'&&card.nature=='thunder') return Infinity;
                },
                            cardRespondable:function (card,player){
                        if(_status.event.skill==undefined&&get.type(card)!='equip'&&get.suit(card)=='club') return false;
                },
                            cardSavable:function (card,player){
                        if(_status.event.skill==undefined&&get.type(card)!='equip'&&get.suit(card)=='club') return false;                           
                },
                        },
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:function (card){
                return get.type(card)!='equip'&&get.suit(card)=='club';
            },
            filter:function (event,player){
               return player.countCards('h',{suit:'club'});
    },
                        position:"hs",
                        viewAs:{
                            name:"sha",
                            nature:"thunder",
                        },
                        check:function (){return 1},
                        sub:true,
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
                },
                 ai:{                   
                    nothunder:function (player){
            return player.isAlive();
        },
         effect:{
                target:function (card,player,target,current){
                    if(get.tag(card,'thunderDamage')) return 0;    
                    var num=game.countPlayer(function(current){
						return get.attitude(current,target)>0&&current.hasSkill('wwyj_zhuanxing');
					});								
					if(!get.tag(card,'fireDamage')&&num>0&&card.name=='sha') return 0;                             
                },
         },
                },          
            },
          "wwyj_zhichi":{                     
                trigger:{                   
                    source:"damageBegin",
                },	
				audio:"ext:文武英杰:1",	
                mod:{
                    globalFrom:function (from,to){
            if(to.hp!=to.countCards('h')){
                return -Infinity;
            }
        },
                },		       				
                forced:true,                           
                filter:function (event,player){
        return event.card.name=='sha'&&get.distance(player,event.player)<=1;
    },
                content:function (){                  
            trigger.num++;                
			//game.playwwyjAudio('wwyj_gainian',2);
    },
            },
          "wwyj_tianya":{
		audio:"ext:文武英杰:1",				
		unique:true,		
		trigger:{                   
            player:"dying",
        },
		mark:true,
		juexingji:true,		
		forced:true,			
		init:function(player){
			player.storage.wwyj_tianya=false;
		},
		intro:{
			content:'limited'
		},
		marktext:"天",
		filter:function (event,player){						
			return player.hp<=0;
		},
		content:function(){
		    'step 0'		    		    	    										        					    				 		    	
		player.chooseTarget('【天涯】',[1,Infinity],lib.translate.wwyj_tianya_info,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return Math.random();            
        });
        'step 1'
        if(result.bool){                   
            player.$fullscreenpop('文武英杰','fire');
            game.wwyj_background();
            player.init(["wwyj_yuhudie","wwyj_liangchas"].randomGet());
            player.storage.wwyj_tianya=true;
		    player.awakenSkill('wwyj_tianya');				    
		    //game.playwwyj(['wwyj_heimao1','wwyj_heimao2'].randomGet()); 
            ui.background.setBackgroundImage('extension/文武英杰/wwyj_yuhudiebz.jpg');
            event.num=0; 
            event.list=[];
           // event.list1=[]; //另一种写法
            event.targets=result.targets;               
            //player.recover(event.targets.length);
		    player.draw(event.targets.length);	
		    for(var i in lib.characterPack['wenwuyingjie']){
                event.list.push(i);                    
            }
            event.list.removeArray(['wwyj_zhichitianya','wwyj_liangchax','wwyj_shuihu','wwyj_yuhudie','wwyj_liangchas']);				
            event.list1=event.list.randomGets(event.targets.length);
            //var list=event.list.randomGets(event.targets.length);
           // for (var i=0;i<list.length;i++){
                //event.list1.push(list[i]);
           // }           		                   
        }   
        else{
            event.finish();
        }   
          'step 2' 
          if(event.num<event.targets.length){
              event.dialog=ui.create.dialog('请您选择一张武将牌替换'+get.translation(event.targets[event.num])+'的武将牌','hidden');
              event.dialog.add([event.list1,'character']);   
              if(event.list1.length==1){
                  event.targets[event.num].init(event.dialog.buttons[0].link); 
                  event.finish();
              }else{
                 /* player.chooseButton(ui.create.dialog('请您选择一张武将牌替换'+get.translation(event.targets[event.num])+'的武将牌',[event.list1,'character'],true),function(button){                 
                      return Math.random();
                       // return get.rank(button.link,true);
                  });  */  //另一种写法
                   player.chooseButton(event.dialog,true).ai=function(button){
                   if(get.attitude(player,event.targets[event.num])>0){
                       return get.rank(button.link,true);
                   }
                   else{
                       return -get.rank(button.link,true);
                   }
                   };    
              }            
          }
        else{            
            event.finish();      
        } 		
		'step 3'				       
        if(result.bool){
            var a=event.targets[event.num].hp;
            var b=event.targets[event.num].maxHp;
            event.targets[event.num].init(result.buttons[0].link);  
            event.targets[event.num].maxHp=b;
            event.targets[event.num].hp=a;                 
            event.targets[event.num].update();              
            event.list1.remove(result.buttons[0].link);   
            event.num++;  
            event.goto(2);                                              
        }     		                                                                                                                                                                                   
				},								
			},
          "wwyj_jitui":{
			trigger:{
				target:'shaBegin',					
			},
			audio:"ext:文武英杰:2", 
			direct:true,
				filter:function(event,player){
					return player.countCards('he');
				},
				content:function(){
					"step 0"					
					event.cards=get.cards(5);					
					"step 1"					
					player.chooseCardButton(event.cards,1,'选择其中一张牌').set('filterButton',function(button){                        
                 return true;            
         }).set('ai',function(button){
             if(button.link.name=='shan') return true;
             return get.value(button.link);        
         });
            	"step 2"
				if(result.bool){														
						player.logSkill('wwyj_jitui');
						event.suit=get.suit(result.links[0]);
						event.type=get.type(result.links[0]);						
						event.number=result.links[0].number;
						event.card=result.links[0];
						event.cards.remove(result.links);
						player.gain(result.links);
					}
					else{
					    event.finish();
					}															
					"step 3"			
					player.chooseCard('请补回一张与'+get.translation(event.card)+'的花色或类型或点数相同的牌给牌堆顶','he',true,function(card){	
			      		return get.suit(card)==event.suit||get.type(card)==event.type||card.number==event.number;                       				
        }).ai=function(card){
            return 6-get.value(card);
        };    																			     											    																	
					"step 4"
					if(result.bool){											
			    		player.lose(result.cards[0],ui.special);	
			    		event.cards.push(result.cards[0]);	
			    		while(event.cards.length){
						    ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);					
					    }				    		  					       			    		
					}			
					else{					 		  
					    event.finish();			
					}									
				},
				ai:{
                    order:7,
                },    
		},
          "wwyj_duiyi":{
			    enable:"phaseUse",
                usable:1,  
                audio:"ext:文武英杰:2",             								
				filterTarget:function (card,player,target){
            return player!=target;
        },
				content:function(){
				"step 0"
				event.cards1=[];
				event.suits=[];					
				event.cards=get.cards(7);															
				//player.showCards(event.cards).set('hiddencards',event.cards);	//显示卡背
				//event.dialog=ui.create.dialog();
				ui.create.dialog().add([event.cards,'blank']);							
				"step 1"					
				player.chooseButton(ui.create.dialog,true).ai=function(button){                        
                      return Math.random();                        
                   };  
                /*player.chooseButton(ui.create.dialog).set("ai",function(button){
                     return !event.cards1.contains(button.link[2]);    
                }).set('filterButton',function(button){
                     return Math.random();
                });*/
                   "step 2"                          
             if(result.bool){                                                    
                 //player.showCards(result.buttons[0].link);
                 player.showCards(get.translation(player)+'亮出了'+get.translation(result.buttons[0].link),event.cards).set('hiddencards',event.cards);						
                 event.cards1.push(result.buttons[0].link);
                 event.cards.remove(result.buttons[0].link);               
                 ui.create.dialog().add([event.cards,'blank']);	
                 target.chooseButton(ui.create.dialog,true).ai=function(button){                        
                      return Math.random();                        
                   };            
             }    
            "step 3"                          
             if(result.bool){                                                    
                 target.showCards(result.buttons[0].link);
                 //target.showCards(get.translation(target)+'亮出了'+get.translation(result.buttons[0].link),event.cards).set('hiddencards',event.cards);		
                 event.cards1.push(result.buttons[0].link);
                 event.cards.remove(result.buttons[0].link);  
                 ui.create.dialog().add([event.cards,'blank']);	               
                 if(event.cards1.length<4){                     
                     event.goto(1);
                 }else{                   
                   ui.create.dialog().remove([event.cards,'blank']);
                   //game.cardsDiscard(event.cards);
                   while(event.cards.length){
						ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);					
					}				  
                   event.goto(4);
                 }
             }
             "step 4"           
           for(var i=0;i<event.cards1.length;i++){              
			   event.suits.add(get.suit(event.cards1[i]));
		   }
		   if(event.suits.length==1||event.suits.length==4){
			   player.recover();			   
			   player.gain(event.cards1,'gain2');
			   event.finish();
		   }else{
		       target.damage(["fire","thunder"].randomGet());
		       event.finish();
		   }								                  			    			
				},
				ai:{
                    order:5,
                    result:{
                        player:1,  
                        target:function (player,target){
               if(!target.isLinked()) return -1;             
                  return -target.countCards('h')-1;
            },                        
                    },
                },
	    	},
					                          
           "wwyj_weiman":{   	
			trigger:{
				player:'changeHp',					
			},
			audio:["daoshu",2],			
			filter:function (event,player){				    
				return player.canMoveCard()&&player.isAlive();
			},
			content:function(){
			    player.moveCard();
			},		
			},	
           "wwyj_zhongcheng":{
				enable:'phaseUse',						
				usable:1,				
				filter:function (event,player){
				    return player.countCards('he')&&!player.hasSkill('wwyj_pantu')&&game.hasPlayer(function(current){
				          return player!=current&&current.hasSkill('wwyj_pantu');
			        });												
				},				                   
				filterTarget:function (card,player,target){
					return player!=target&&target.hasSkill('wwyj_pantu');
				},					
				selectTarget:1,
				content:function(){
				    "step 0"
				    target.chooseDrawRecover(1,true);
                    "step 1"
                    game.playwwyj(['wwyj_zhongcheng1','wwyj_zhongcheng2'].randomGet());
                    target.discardPlayerCard(player,'he',true);	
				},
				ai:{
         result:{
            target:function (player,target){                           
                if(get.attitude(player,target)<=0) return 0;
                if(player.countCards('h')<3) return 0;
                if(target.hp<2) return 1;
                return 1;
            },                                
        },
            order:5,
            expose:0.3,
        },  
			},
			"wwyj_pantu":{
			    audio:["weicheng",2],	
			    global:"wwyj_zhongcheng",
			},		
            "wwyj_yangshan":{
                  audio:["nzry_zhenglun",2],
                  trigger:{
                     player:"damageEnd",
                  },                                           
                  logTarget:"player", 
                  check:function (event,player){ 
                      return game.hasPlayer(function(current){
				          return player!=current&&current.isDamaged()&&get.attitude(player,current)>0;
			          });					                                        
                  },     	                 
                  filter:function (event,player){
                      return player.isAlive()&&player.countCards('he',{color:'red'})&&game.hasPlayer(function(current){
                            return player!=current&&event.source!=current&&player.canUse({name:'taoyuan'},current);
                        });
                  },
                  content:function (){
                     "step 0" 
                     player.draw(2);  
                     "step 1"                             
                     player.chooseCard('扬善：将一张牌当“桃园结义”使用且你不能成为目标','he',{color:'red'},true).set('ai',function(card){
                        var taoyuan={name:'taoyuan',cards:ui.selected.cards.concat([card])}
                            return _status.event.player.getUseValue(taoyuan);
                     });
                     "step 2"
                     if(result.bool){
                        if(game.hasPlayer(function(current){
                            return player!=current&&trigger.source!=current&&player.canUse({name:'taoyuan',cards:result.cards},current);
                        })){
                        player.chooseUseTarget({name:'taoyuan'},result.cards,true,false).set('targets',game.filterPlayer(function(current){
                            return player!=current&&trigger.source!=current&&player.canUse({name:'taoyuan',cards:result.cards},current);
                        }));  //from jinyongqunxiazhuan's qtpz_quanzhen                                      
                     }                                    
                  }    
              },
           },
           "wwyj_jieyuan4":{
				enable:'phaseUse',						
				//audio:"ext:文武英杰:2", 			
				filter:function (event,player){
				    return player.countCards('he',{color:'red'})&&player.hasSkill('wwyj_jieyuan1')&&game.hasPlayer(function(current){
				        return player!=current&&current.hasSkill('wwyj_jieyuan');
			        });											
				},
				filterCard:function (card){                    
                    return get.color(card)=='red';
                },
                selectCard:1,
                position:'he',      
				filterTarget:function (card,player,target){
					return player!=target&&target.hasSkill('wwyj_jieyuan');
				},					
				selectTarget:1,
				content:function(){
				    player.$give(cards,target);
                    target.gain(cards,player);
                    game.playwwyj(['wwyj_jieyuan41','wwyj_jieyuan41'].randomGet());
                    target.say('给你的，十倍奉还于我');
                    player.removeSkill('wwyj_jieyuan1');	
				},
				ai:{
         result:{
            target:function (player,target){                           
                if(get.attitude(player,target)>0) return 0;
                return -target.hp;
            },                                
        },
            order:7,
            threaten:0.5,
            expose:0.4,
        },  
			},	
           "wwyj_jieyuan3":{   			
			trigger:{
				player:'damageBegin',					
			},
			forced:true,
			filter:function (event,player){				    
				return event.source&&event.source.hasSkill('wwyj_jieyuan1');						
			},
			content:function(){
			    trigger.cancel();
			    game.playwwyj('wwyj_jieyuan21');
			},		
			},	
           "wwyj_jieyuan2":{   	
			trigger:{
				global:'damageEnd',					
			},
			audio:"ext:文武英杰:1",
			forced:true,
			filter:function (event,player){				    
				return event.player.hasSkill('wwyj_jieyuan1');						
			},
			content:function(){
			    player.draw();
			},		
			},	
           "wwyj_jieyuan1":{  
             intro:{
                    name:"结缘",
                    content:"",
                },
                marktext:"缘",
				mark:true,
		    },		
	
     "wwyj_jieyuan":{
				enable:'phaseUse',
				usable:1,	
				group:['wwyj_jieyuan2','wwyj_jieyuan3'],
				global:'wwyj_jieyuan4',
				audio:"ext:文武英杰:1", 			
				filter:function (event,player){
				    return player.countCards('he',{color:'black'})&&game.hasPlayer(function(current){
				return player!=current&&!current.hasSkill('wwyj_jieyuan1');
			});					
				},
				filterCard:function (card){                    
                    return get.color(card)=='black';
                },
                selectCard:function (){
                var num1=_status.currentPhase.countCards('he',{color:'black'});
                var num2=game.countPlayer(function(current){
            return _status.currentPhase!=current&&!current.hasSkill('wwyj_jieyuan1');
         });          
                    return [1,Math.min(num1,num2)];
                },              
                position:'he',      
				filterTarget:function (card,player,target){
					return player!=target&&!target.hasSkill('wwyj_jieyuan1');
				},	
				multitarget:true,
                multiline:true,
                prepare:function (cards,player,targets){
                    player.line(targets);
                },
				selectTarget:function (card){
        if(ui.selected.targets.length>ui.selected.cards.length){
            game.uncheck('target');
        }
        return ui.selected.cards.length;
    },     							
				content:function(){
				"step 0"                  
        event.num=0;        
        event.targets=targets.slice(0);        
        event.targets.sort(lib.sort.seat);    
        "step 1"
        if(event.num<event.targets.length){
            //var target=event.targets.shift();            
            event.targets[event.num].gain(cards[event.num],'gain2');         
            event.targets[event.num].addSkill('wwyj_jieyuan1');
            event.num++;
            event.redo();
        }
        else event.finish();
				},
		ai:{
         result:{
            target:function (player,target){
               if(player.hp>2) return Math.random();             
                  return -target.countCards('h');
            },            
            player:function (player){
              if(player.countCards('h')<3) return 0;
                return 1;
            },                   
        },
            order:5,
            threaten:0.5,
        },  
			}, 
     "wwyj_liuli":{   
			audio:"ext:文武英杰:1",
			trigger:{
				global:'loseAfter',					
			},		
			check:function (event,player){                    
                return get.attitude(player,event.player)>0;
            },  
            prompt:function (event,player){					
				return '是否对'+get.translation(event.player)+'发动琉璃，交给其任意张不同花色的牌？';
			},    		
			filter:function (event,player){
				if(event.player.countCards('h')) return false;
				var evt=event.getl(event.player);
				return evt&&player.countCards('h')&&evt.player.isAlive()&&evt.player!=player&&evt.hs&&evt.hs.length>0;
			},
			content:function(){
			'step 0'
			event.suits=[];
			event.cards=[];
			'step 1'			
		player.chooseCard('你可交给'+get.translation(trigger.player)+'一张与本次已以此法选择的不同花色的手牌','h',1,function(card){                
            var suit=get.suit(card);
            return !event.suits.contains(suit); 
        }).ai=function(card){            
			return 8-get.value(card);
        };              					
			'step 2'
			if(result.bool){								
				event.suits.add(get.suit(result.cards[0]));
				event.cards.push(result.cards[0]);	
				//game.cardsGotoOrdering(result.cards); 			
				if(event.suits.length<4){
					event.goto(1);
				}else{
				    event.goto(3);
				}
			}else{
			    event.goto(3);
			}
			'step 3'
			if(event.cards.length==0){
			    event.finish();
			}else{
			    player.$give(event.cards,trigger.player);
                trigger.player.gain(event.cards,player);									
		     	if(event.suits.length==4){
				    player.recover();
			    }
			}          
		},				
	},
     "wwyj_xugeng":{       
        trigger:{
           player:"enterGame",
           global:"gameStart",
        }, 
        forbid:['guozhan'],        
        audio:"ext:文武英杰:1",       
        prompt:function (event,player){					
				return '是否将“夜洛樱琉璃”的武将名改为“Niya”？';
		},		
        //group:["wwyj_xugeng_lose"],
		priority:Infinity, 
		/*subSkill:{
				lose:{
					trigger:{player:['loseEnd','gainEnd']},
					forced:true,
					filter:function(event,player){
						return !player.isUnderControl(true)&&player.countCards('h')<4;
					},
					content:function(){
						window.setTimeout(current=>{
							if(player.countCards('h')<4){
								player.popup("wwyj_xugeng"),player.nodeNiyaClick();
							}	
						},Math.floor(Math.random()*7000));
					},
				},
			}, */  //Niya的
        filter:function (event,player){           
            return game.hasPlayer(function(current){
               return current.name=='wwyj_niya';
         });                             
    },                
        content:function (){                               
           'step 0'
             if(player.name=='wwyj_niya'){
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='Niya';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';
				 //text.style.left='25%';			
				 text.style.transform='translateY(-200px)';
				 text.style['font-size']='17px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
            }
            },
            },
    
    "wwyj_zhushan":{                     
                shaRelated:true,
				trigger:{
				    global:'useCardToPlayered'
				},				
				filter:function(event,player){
					return event.card.name=='sha'&&event.player.countCards('h')<=event.target.countCards('h');
				},
				prompt:function (event,player){					
				    return '是否令此杀对'+get.translation(event.target)+'直接造成伤害？';
		        },
				logTarget:'target',
                check:function (event,player){                
        return get.attitude(player,event.target)<=0;
    },
                audio:"ext:文武英杰:1", 				                
                content:function (){        
           // trigger.directHit=true;     
              trigger.getParent().directHit.add(trigger.target);
              },
          },
    "wwyj_bohe2":{
		mark:true,	
		//audio:"ext:文武英杰:1", 
		marktext:'糖',	       
		intro:{	
            content:function (storage,player,skill){
         		return '你选择的类别是'+get.translation(player.storage.wwyj_bohe)+'牌';
          	}, 
		},	
		trigger:{
            global:["useCard"],
        },							      
        priority:10,        
        usable:1,
        popup:false,
        check:function (event,player){                    
            return get.attitude(player,event.player)>0;
        },         
        filter:function (event,player){            			
			return event.card&&event.card.isCard&&get.type(event.card)==player.storage.wwyj_bohe;			    			  
        },
        prompt:function (event,player){					
				return '是否令'+get.translation(event.player)+'摸一张牌';
	    },       
        content:function (){ 		   
            player.line(trigger.player,'green'); 
            player.say('我来派糖啦');
            game.playwwyj('wwyj_bohe21');
            trigger.player.draw();                			        			
        },
        ai:{
            order:9,
        },			
    },
    "wwyj_bohe1":{                
        trigger:{
            player:["phaseBegin"],
        },					
		popup:false,
        forced:true,
        priority:10,        
        content:function (){ 
		    player.storage.wwyj_bohe=[];		         			
        },
        ai:{
            order:9,
        },
    },
    "wwyj_bohe":{                              
        enable:"phaseUse",
		usable:1,
		audio:"ext:文武英杰:1", 	
		filter:function (event,player){            
			return !player.hasSkill('wwyj_bohe2');
        },
        group:['wwyj_bohe1'],
		init:function (player){
		    player.storage.wwyj_bohe=[];

		},
        content:function (){        
            'step 0'                                      
            var list=['basic','trick','equip'];
            for(var i=0;i<list.length;i++){
                list[i]=[get.translation(list[i]),'',list[i]];
            }
        player.chooseButton(true,[[list,'vcard']]).set('filterButton',function(button){
            if(player.storage.wwyj_bohe&&player.storage.wwyj_bohe.contains(button.link[2])) return false;
                return true;
        }).set('ai',function(button){
            var rand=_status.event.rand*2;
            switch(button.link[2]){
                case 'basic':return 4+rand[3];
                case 'trick':return 3+rand[3];
                case 'equip':return 2+rand[3];                
                default:return rand[3];
            }
        }).set('rand',[Math.random(),Math.random()],Math.random());                                
            'step 1'
            if(result.bool){			                 
                player.addTempSkill('wwyj_bohe2',{player:'phaseBegin'});               
                player.storage.wwyj_bohe.add(result.links[0][2]);
            }
			else event.finish();
        },
             ai:{
                    order:8,
                    result:{
                       player:function (player){          
                return 1;
            },                  
                    },
                },        
    },	
      "wwyj_jiegeng":{
          trigger:{
              global:"useCardToPlayered",
          }, 
          usable:1,
		  audio:"ext:文武英杰:1", 
          priority:-20,
          check:function (event,player){  
          if((event.card.name=='sha'||event.card.name=='guohe'||event.card.name=='shunshou')&&get.attitude(player,event.target)>0) return 0;
              return get.attitude(player,event.player)>0;
          },
          prompt:function (event,player){					
		      return '是否视为对'+get.translation(event.target)+'使用'+get.translation(event.card);
		  },
          filter:function (event,player){
              if(event.card.name=='jiedao'||event.card.name=='wuxie') return false;
              if(get.type(event.card)=='equip'||get.type(event.card)=='delay') return false;                         
              if(event.targets.length>1) return false;                                      
                 return player!=event.player;
         },
         content:function (){     
              player.useCard(trigger.card,trigger.target,false);
         },
         },
       "wwyj_qingzhong":{
				enable:'phaseUse',
				usable:1,	
				audio:"ext:文武英杰:1", 			
				filter:function (event,player){
				    return player.countCards('h',{type:'basic'})&&game.hasPlayer(function(current){
				return player!=current&&player.inRange(current);
			});					
				},
				filterCard:function (card){                    
                    return get.type(card)=='basic';
                },
                selectCard:function (){
                var num=game.countPlayer(function(current){
            return _status.currentPhase!=current&&_status.event.player.inRange(current);
         });          
                    return [1,num];
                },              
                position:'h',      

				filterTarget:function (card,player,target){
					return player!=target&&player.inRange(target);
				},	
				multitarget:true,
                multiline:true,
                prepare:function (cards,player,targets){
                    player.line(targets);
                },
				selectTarget:function (card){
        if(ui.selected.targets.length>ui.selected.cards.length){
            game.uncheck('target');
        }
        return ui.selected.cards.length;
    },     							
				content:function(){
				"step 0"                  
        event.targets=targets.slice(0);
        event.num=event.targets.length;
        event.targets.sort(lib.sort.seat);    
        "step 1"
        if(event.targets.length){
            var target=event.targets.shift();
            player.useCard({name:'sha',isCard:true},target,false);
            event.redo();
        }
				},
		ai:{
         result:{
            target:function (player,target){
              if(target.hp>3) return -1;   
                  return -target.countCards('h')-2;
              },            
            player:function (player){
              if(player.countCards('h')<3) return 0;
                return 1;
            },                   
        },
            order:2,
            threaten:0.5,
        },  

			}, 
       "wwyj_fengyun":{
        trigger:{          
           player:"damageEnd",
        },    
        forced:true, 
		audio:"ext:文武英杰:2", 
        charlotte:true,		
        priority:2020,               
    content:function (){   
        'step 0'			    		
        event.skills=[]; 
		event.list=[];		
		'step 1'				       
        for(var i in lib.characterPack['wenwuyingjie']){
        for(var j=0;j<lib.character[i][3].length;j++){
           var info=lib.skill[lib.character[i][3][j]];
               if(info&&(info.gainable||!info.unique)){
                   event.skills.add(lib.character[i][3][j]); 
               }
           } 
        }
        event.skills.removeArray(['wwyj_fengyun','wwyj_zhwpy','jstx_jisha','xjstx_jisha','xwj_jisha','xin_jisha']);		
        var skills=player.skills.slice(0);
        for(var i=0;i<skills.length;i++){		
            event.skills.remove(skills[i]);
        }
        if(event.skills.length>2){
        var list=event.skills.randomGets(3);	
        }
        else event.finish();	
		if(event.isMine()){
		var dialog=ui.create.dialog('forcebutton');
			dialog.add('选择获得一项技能');						
			for(i=0;i<list.length;i++){
				if(lib.translate[list[i]+'_info']){
				var translation=get.translation(list[i]);
				if(translation[0]=='新'&&translation.length==3){
			    	translation=translation.slice(1,3);
				}
				else{
					translation=translation.slice(0,2);
				}
				var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');								
					item.firstChild.link=list[i];
				}
			}						
		}						
		player.chooseControl(list).set('prompt','请选择一个你的要获得的技能').set('ai',function(){
            return list.randomGet();
        }).dialog=dialog;
		'step 2'				
		player.popup(result.control,'thunder'); 
		//player.addTempSkill(result.control,{player:'phaseBegin'});
		player.addSkill(result.control);		                 
        player.mark(result.control,{
            name:get.translation(result.control),
            content:lib.translate[result.control+'_info']
        });                            
		player.flashAvatar('wwyj_fengyun',result.control);   
		game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');                                                         
     },
     },
     "wwyj_feixue":{
          trigger:{
            player:"useCard",
          }, 
		  audio:"ext:文武英杰:1", 
          priority:2020,
          filter:function (event,player){
              if(event.card.name!='sha') return false;                         
              if(event.targets.length>1) return false;                                      
                 return game.hasPlayer(function(current){
                       return current.isTurnedOver()&&!event.targets.contains(current);
                 });
              },
         content:function (){     
           'step 0'         
        event.targets=game.filterPlayer(function(current){
            return current.isTurnedOver()&&current!=player;
        });
        event.targets.sort(lib.sort.seat);
            'step 1'        
           trigger.targets.addArray(event.targets);   
           player.line(trigger.targets,'green'); 
           'step 2'  
           if(event.targets.length){
          event.current=event.targets.shift();
          trigger.targets.addArray(event.current);           
          player.line(event.current,'green');                                              
          event.current.turnOver();
		  event.redo();
        }
        else{
           event.finish();
        }    				                    
         },
         ai:{
            order:8,
         },
      },
      "wwyj_zangyue2":{		
			trigger:{
			    player:"useCardAfter",
			},
			forced:true,
			popup:"wwyj_zangyue",
			//audio:"ext:文武英杰:1",
			init:function (player){
			    player.storage.wwyj_zangyue2=[];
			},
			filter:function (event,player){
				return player==_status.currentPhase&&event.card&&event.card.isCard&&get.suit(event.card)==player.storage.wwyj_zangyue2;
			},						
			content:function(){
			"step 0"
		 event.players=game.filterPlayer(function(current){
      return current.hasSkill('wwyj_zangyue');
      }).sortBySeat();
           "step 1"
      if(event.players.length){
        event.current=event.players.shift(); 
        event.current.say("你，中了老夫的计了");          
        event.current.line(player,'green');                                                                                               			
        event.redo();
        }
        else{
           event.goto(2);
         }    			
		"step 2"
		game.playwwyj("wwyj_zangyue21");
        player.turnOver();  	    
			},
			},
        "wwyj_zangyue":{		
			trigger:{player:'phaseEnd'},
			forced:true,
			audio:"ext:文武英杰:1", 
			//mark:true,
			init:function (player){
			    player.storage.wwyj_zangyue=[];
			    player.unmarkSkill('wwyj_zangyue');	
			},
			/*intro:{
                content:function (suit){
                    return get.translation(suit);
                },
            }, */
			intro:{	
                content:function (storage,player,skill){
         			return '选择了'+get.translation(player.storage.wwyj_zangyue);
          	 	}, 
			},									
			content:function(){		
				"step 0"
				player.storage.wwyj_zangyue=[];
				"step 1"
			player.chooseControl('spade','heart','club','diamond').set('ai',function(event){
                switch(Math.floor(Math.random()*4)){
                  case 0:return 'spade';
                  case 1:return 'heart';
                  case 2:return 'club';
                  case 3:return 'diamond';
                }
            });
			"step 2"		
			  game.log(player,'选择了'+get.translation(result.control));
			  player.popup(result.control);
			  event.choice=result.control;	
			  player.storage.wwyj_zangyue=event.choice;				  	
			  //player.syncStorage('wwyj_zangyue');
			  //game.addVideo('storage',player,['wwyj_zangyue',player.storage.wwyj_zangyue]);
			  player.markSkill('wwyj_zangyue');	  					
			"step 3"							
			for(var i=0;i<game.players.length;i++){
			  if(player!=game.players[i]){
			    player.line(game.players[i],'green');				
			    game.players[i].addTempSkill('wwyj_zangyue2',{player:'phaseEnd'});
		        game.players[i].storage.wwyj_zangyue2=[];
		        game.players[i].storage.wwyj_zangyue2.add(event.choice);				
		      }
		    }
		},
		ai:{
          order:8,
        },
	},           
         "wwyj_gucheng":{
				mod:{
					targetEnabled:function (card,player,target,now){
					  //if(_status.currentPhase!=target){
						if(game.roundNumber%2==0){
							if(card.number%2==0&&card.name=="sha") return false;
						}else{
						    if(card.number%2==1&&card.name=="sha") return false;
						}
					 // }
					},
				},
				},
         "wwyj_meihua1":{
             unique:true,
			charlotte:true,
         },
         "wwyj_meihua":{  
				trigger:{
                    global:"useCardToPlayer",                            
                },                  
                audio:"ext:文武英杰:1",                                               
                filter:function (event,player){               
                    if(event.player==player) return false;
                    if(get.type(event.card)=='equip') return false;                    
                    if(get.type(event.card)=='delay') return false;
                    if(event.card.name=='wuxie') return false;
                    if(!event.targets||event.targets.length!=1) return false;
                       return !player.hasSkill("wwyj_meihua1");
                },
                check:function (event,player){
                    return get.attitude(player,event.player)<=0;
                },
                prompt:function (event,player){					
					return '是否美化'+get.translation(event.player)+'对'+get.translation(event.target)+'使用的'+get.translation(event.card);
				},
                content:function (){
                  'step 0'	                		
			event.cards=get.cards(2);
			game.cardsGotoOrdering(event.cards);                          
             'step 1'              
              player.chooseCardButton(event.cards,1,'选择使用一张牌代替'+get.translation(trigger.player)+'所使用的牌').set('filterButton',function(button){           
                 return trigger.player.canUse(button.link,trigger.target);             
         }).set('ai',function(button){
             return 6-get.value(button.link);
         });
           'step 2'
          if(result.bool){ 
             player.addTempSkill("wwyj_meihua1");
             trigger.getParent().excluded.add(trigger.target);                                       
             trigger.player.useCard(result.links[0],trigger.target);                                                               
          }
          else{
             ui.cardPile.insertBefore(event.cards[1],ui.cardPile.firstChild);
             ui.cardPile.insertBefore(event.cards[0],ui.cardPile.firstChild);   
             game.log(player,'#y观看牌堆顶两张牌');
             event.finish();
          }              
		},
		ai:{
          order:8,
          },
		},
        "wwyj_duange":{               
                trigger:{player:'phaseDrawBegin1'},
				filter:function (event,player){
					return !event.numFixed;
				},
				frequent:true,
				audio:"ext:文武英杰:1",
				content:function(){
			 'step 0'
			trigger.changeToZero();
			event.cards=get.cards(5);
			game.cardsGotoOrdering(event.cards);                          
             'step 1'              
              player.chooseCardButton('短歌:选择获得任意张点数同为奇数或同为偶数的牌',event.cards,[1,5]).set("filterButton",function(button){
              //player.chooseButton('短歌',[event.cards],[1,5]).set("filterButton",function(button){	           
            	if(!ui.selected.buttons.length) return true;
	            for(var i=0;i<ui.selected.buttons.length;i++){
	              if(get.number(ui.selected.buttons[i].link)%2==0){
	                return get.number(button.link)%2==0;
	              }else{
					return get.number(button.link)%2==1;
				  }
				}
	            //点数连续的一组数：
	            /*var bs=ui.selected.buttons;
            	if(!bs.length)return true;
	            var ns=bs.map(function(i){return i.link.number});
	            return [Math.min.apply(Math,ns)-1,Math.max.apply(Math,ns)+1].contains(button.link.number);
	            */
          }); 
           'step 2'
          if(result.bool){                             
             event.cards.remove(result.links);
             player.gain(result.links,'gain2');            
             game.log(player,'获得了',result.links);            
          }
          else{
             event.goto(3);
          }
           'step 3'
           if(event.cards.length>0){                       
        player.chooseCardButton('短歌:请选择放在牌堆顶的牌，先选择的在上',event.cards.length,event.cards,true); 
        }else{
           event.finish();
        }
        'step 4' 
        for(var i=event.cards.length-1;i>=0;i--){ 
            event.cards.remove(result.buttons[i].link); 
            ui.cardPile.insertBefore(result.buttons[i].link,ui.cardPile.firstChild); 
        }           
        },
        ai:{
            order:8,
          },
        },    
            "wwyj_wuqing":{
				trigger:{
                    global:"damageEnd",
                }, 
				audio:"ext:文武英杰:1",
                forced:true,      
                filter:function (event,player){
        return event.nature;
    },
                content:function(){                      
              player.draw();
    }, 
			},
			"wwyj_geziyin1":{
				intro:{
                    name:"鸽子",
                    content:"该角色被选择了",
                },
                marktext:"选",
				mark:true,
			},						
			"wwyj_geziyin":{		       
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){                    
                      return get.color(card)=='black';
                },
                selectCard:1,
                position:'h',      
                discard:false,
                prepare:'give',                
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){    
        return !player.hasSkill('wwyj_gezi1')&&player.storage.wwyj_gezi!=true&&player.countCards('h',function(card){
				  return get.color(card)=='black';
				});      
    },                              
                content:function (){
        "step 0"
        game.playwwyj('wwyj_gezi1');
        target.gain(cards,player);   
        player.addTempSkill('wwyj_gezi1'); 
        player.storage.wwyj_gezi=true;            
        "step 1"            
        target.chooseTarget('选择发动至少一名目标',[1,Infinity],lib.translate.wwyj_geziyin_info,true,function(card,player,target){
            return true;
        }).set('ai',function(target){
			if(get.attitude(_status.event.player,target)>0&&target.isLinked()) return get.attitude(_status.event.player,target); 
            return -get.attitude(_status.event.player,target);            
        });				 
      "step 2"
    	if(result.bool){       
            event.num=0; 			
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
		"step 3"
		if(event.num<event.targets.length){ 
		    player.line(event.targets[event.num],'green');               
            event.targets[event.num].addSkill('wwyj_geziyin1');                                               
            event.num++;			
            event.redo();
        }
        else{
            event.goto(4);      
        } 
		"step 4"
		player.chooseControl().set('choiceList',['你横置/重置'+get.translation(target)+'所选择的角色','你横置/重置'+get.translation(target)+'未选择的角色']).set('ai',function(){
        if(player.countCards('h')>2) return 1;          
            return 0;
        });
        "step 5"
        if(result.index==0){
            event.goto(6);
        }
        else{
            event.goto(8);
		}
		"step 6"
		event.players=game.filterPlayer(function(current){
             return current.hasSkill('wwyj_geziyin1');
        }).sortBySeat();
        "step 7"
        if(event.players.length){
          event.current=event.players.shift();           
          player.line(event.current,'green');                                              
          event.current.link();                                     
          event.current.update();
		  event.redo();
        }
        else{
           event.goto(10);
        }    				
		"step 8"
		event.players=game.filterPlayer(function(current){
             return !current.hasSkill('wwyj_geziyin1');
        }).sortBySeat();
        "step 9"
         if(event.players.length){
            event.current=event.players.shift();           
            player.line(event.current,'green');                                              
            event.current.link(); 
	        event.redo();
          }
          else{
            event.goto(10);
          }   
              "step 10"
              var num1=game.countPlayer(function(current){
                    return current.isLinked(); 
         });     
          var num2=game.countPlayer(function(current){
                    return !current.isLinked(); 
         });     
         if(num1>num2){
             player.draw();
         }    
          "step 11"
         for(var i=0;i<game.players.length;i++){
		    if(game.players[i].hasSkill('wwyj_geziyin1')){			
              game.players[i].removeSkill('wwyj_geziyin1');   
			 }
		}	    	                    
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')<3) return 0;   
                  return target.countCards('h');
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
			"wwyj_gezired":{
				intro:{
                    name:"鸽子",
                    content:"该角色展示了红色手牌",
                },
                marktext:"红",
				mark:true,
			},
			"wwyj_geziblack":{
				intro:{
                    name:"鸽子",
                    content:"该角色展示了黑色手牌",
                },
                marktext:"黑",
				mark:true,
			},
			"wwyj_geziyang":{      
      enable:"phaseUse",
      usable:1,
      filterCard:function (card){                    
         return get.color(card)=='red';
      },
      selectCard:1,
      position:'h',      
      multiline:true,                           
      filter:function (event,player){
         return !player.hasSkill('wwyj_gezi1')&&player.storage.wwyj_gezi==true&&player.countCards('h',function(card){
				return get.color(card)=='red';
		});      
      },
      filterTarget:function (card,player,target){
         return target.countCards('h')>0;
       },                           
       selectTarget:[1,Infinity],
       multitarget:true,                            
      content:function (){
          "step 0"
	event.num=0;  
	game.playwwyj('wwyj_gezi1');
	player.addTempSkill('wwyj_gezi1'); 
    player.storage.wwyj_gezi=false;                          
      "step 1"
        if(event.num<targets.length){
     targets[event.num].chooseCard('h',1,'请展示一张手牌',true).set('ai',function(card){
      return -get.value(card);
          });
         }
            "step 2"
        if(result.bool){
       targets[event.num].showCards(result.cards);                                                                                                         
      if(get.color(result.cards[0])=='red'){                                        
	targets[event.num].addSkill('wwyj_gezired');									
     }
       else{                                        
		targets[event.num].addSkill('wwyj_geziblack');									
      }
          event.num++;
     if(event.num<targets.length){
	event.goto(1);
	}
	else{
	    event.goto(3);
	    }
       }								
    "step 3"
       player.chooseCard('h','请展示一张手牌').ai=function(card){                         
         return 7-get.value(card);              
       };  
       "step 4"
       if(result.bool){		
    var color=get.color(result.cards[0]);       
      //player.discard(result.cards[0]);
      player.showCards(result.cards[0]);
     if(color=='red'){
	event.goto(5);
	}
	else{
		event.goto(7);
		}
	}
		else{
			event.goto(10);
      }
         "step 5"                                                                                               
      event.players=game.filterPlayer(function(current){
      return current.hasSkill('wwyj_gezired');
      }).sortBySeat();
           "step 6"
      if(event.players.length){
        event.current=event.players.shift();           
        player.line(event.current,'green');                                              
        event.current.link();                                           			
           event.redo();
        }
        else{
           event.goto(9);
         }    																
            "step 7"
        event.players=game.filterPlayer(function(current){
           return current.hasSkill('wwyj_geziblack');
        }).sortBySeat();
            "step 8"
        if(event.players.length){
          event.current=event.players.shift();           
          player.line(event.current,'green');                                              
          event.current.link();                         
          event.redo();
          }
          else{
             event.goto(9);
          } 
            "step 9"
         var num1=game.countPlayer(function(current){
              return current.isLinked(); 
         });     
         var num2=game.countPlayer(function(current){
              return !current.isLinked(); 
         });     
         if(num1>num2){
             player.draw();
         }      
         "step 10"
         for(var i=0;i<game.players.length;i++){
	        if(game.players[i].hasSkill('wwyj_geziblack')){								  
            game.players[i].removeSkill('wwyj_geziblack');   
			 }
		 else if(game.players[i].hasSkill('wwyj_gezired')){								
              game.players[i].removeSkill('wwyj_gezired');   
		  }
		}	    	                  
         },
         ai:{
            order:9,
            result:{
               player:1,
               target:-0.5,
            },
         },
      },
	 "wwyj_gezi1":{
	    unique:true,
		charlotte:true,
	 },		
		"wwyj_gezi":{				
	    mark:true,
		locked:false,
		zhuanhuanji:true,
		marktext:'鸽',
		intro:{
		    content:function(storage,player,skill){
			if(player.storage.wwyj_gezi==true) return '出牌阶段限一次：你可弃置一张红色手牌并令任意名有手牌的角色各展示一张手牌，然后你可展示一张手牌横置／重置展示牌与该牌颜色相同的角色，然后若已横置的角色比未模置的多，你摸一张牌';
				return '出牌阶段限一次，你可交给一名其他角色一张黑色手牌，令其选择至少一名角色，然后你选择横置／重置其所选择的或未选择的角色，然后若已横置的角色比未模置的多，你摸一张牌';
			},
		},
		audio:"ext:文武英杰:1",  
		group:["wwyj_geziyang","wwyj_geziyin"],
		},
						
     "wwyj_jieguan2":{               
                trigger:{
                    player:"phaseUseEnd",
                },  
                //audio:"ext:文武英杰:1", 				
                forced:true,
                popup:false,
                filter:function (event,player){
                    return game.hasPlayer(function(current){
					    return current.hasSkill('wwyj_jieguan');
					});
                },
                content:function(){
                'step 0' 
				game.playwwyj('wwyj_jieguan1');
               event.targets=game.filterPlayer(function(current){
						return current.hasSkill('wwyj_jieguan');
					}).sortBySeat();

       'step 1' 
        if(event.targets.length){

            event.current=event.targets.shift();           
            game.playwwyj('wwyj_jieguan1');
            if(player.getStat().damage>0){
              player.useCard({name:'sha',isCard:true},event.current,false);
            }
            else{
              event.current.useCard({name:'sha',isCard:true},player,false);
            }  
        } 
        else event.finish();   
    },                
            },
          "wwyj_jieguan":{               
                trigger:{
                    global:"phaseUseBegin",
                }, 
				audio:"ext:文武英杰:1",
                prompt:function (event,player){					
					return '是否对'+get.translation(event.player)+'进行管理？';
				}, 
				check:function (event,player){                
                    if(player.hp<2&&!player.countCards('h','shan')) return 0;
                    return get.attitude(player,event.player)<=0;
                },            
                filter:function (event,player){
        return player!=event.player&&event.player.countCards('h')>0&&player.countCards('h')<=event.player.countCards('h');
    },
                content:function(){                      
              player.gainPlayerCard(trigger.player,'h');
              trigger.player.addTempSkill('wwyj_jieguan2');
    }, 
       ai:{
          order:5,
          threaten:2,
       },               
            },
      "wwyj_sepi":{
		global:'wwyj_sepi2',	
		audio:"ext:文武英杰:2",          		
		},
			"wwyj_sepi2":{				
				enable:'phaseUse',
				audio:"ext:文武英杰:1",
				filter:function (event,player){		
					if(player.hasSkill('wwyj_sepi3')) return false;
					return player.sex=="female"&&player.countCards('h')&&game.hasPlayer(function(current){
						return current.countCards('h')&&current.hasSkill('wwyj_sepi');
					});
				},
				direct:true,
				delay:false,
				filterCard:true,				
				position:'h',
				selectCard:1,
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(current){
						return current.countCards('h')&&current.hasSkill('wwyj_sepi');
					});
					var str='选择'+get.translation(list);
					if(list.length>1) str+='中的一人';
					return str;
				},
				check:function (card){					
					return 9-get.value(card);
				},
				content:function (){
					"step 0"
					var targets=game.filterPlayer(function(current){
						return current.countCards('h')&&current.hasSkill('wwyj_sepi');
					});
					if(targets.length==1){
						event.target=targets[0];
						event.goto(2);
					}
					else if(targets.length>0){
						player.chooseTarget(true,'选择一个色批',function(card,player,target){
							return _status.event.list.contains(target);
						}).set('list',targets).set('ai',function(target){
							var player=_status.event.player;
							return get.attitude(player,target);
						});
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool&&result.targets.length){
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
			  "step 2"
			if(event.target){
			  player.line(event.target,"green");
			  game.playwwyj(['wwyj_sepi1','wwyj_sepi2'].randomGet()); 
			  player.addTempSkill('wwyj_sepi3','phaseUseEnd');					  
              player.discardPlayerCard(event.target,'h',get.prompt('wwyj_sepi')).set('ai',function(button){                           
                return Math.random();            			            
              }).set('logSkill',['wwyj_sepi',event.target]).set('att',get.attitude(player,event.target)>0);        			           													
			}
			"step 3"
			if(result.bool&&result.links&&result.links.length){		
              if(get.color(result.links[0])==get.color(cards[0])){	
			    if(player.isDamaged()){
			      //player.recover();
			      player.chooseDrawRecover(1,true,function(event,player){
		       if(player.hp==1&&player.isDamaged()) return 'recover_hp';
			       return 'draw_card';
		   });
		  
		   //player.chooseDrawRecover(1,true);
			    }else{
			      player.draw();
			    }
			    if(event.target.isDamaged()){
			      //event.target.recover();
			      event.target.chooseDrawRecover(1,true);
			    }else{
			      event.target.draw();
			    }			    
			  }
			  else{
			      game.asyncDraw([player,event.target]); 
			  }
			}
			else event.finish();														
				},
				ai:{
					order:6,
					threaten:1.5,
					result:{
						player:function(player,target){
							var target=game.findPlayer(function(current){
								return current.hasSkill('wwyj_sepi');
							});
							if(target){
								return get.attitude(player,target);
							}
						},
					},
				},
			},
	"wwyj_sepi3":{
        unique:true,
        charlotte:true,
	},
     "wwyj_xuedao":{
                audio:"ext:文武英杰:1",
				trigger:{
				    global:['useCardAfter'],
				},
				//equipSkill:true,
				filter:function (event,player){
					return event.card&&event.card.isCard&&get.type(event.card)=='equip'&&get.subtype(event.card)=='equip1'&&game.hasPlayer(function(current){
                  //return event.player.canUse('sha',current)&&get.distance(event.player,current,'attack')<=1;
              //return get.distance(event.player,current,'attack')<=1;
              return event.player.inRange(current);
         });
				},				
				direct:true,							    								    
				content:function (){
				 "step 0"
				player.chooseTarget(get.prompt2('wwyj_xuedao'),function(card,player,target){
            //return target!=trigger.player&&target.countCards('h')&&get.distance(trigger.player,target,'attack')<=1;
            return target!=trigger.player&&target.countCards('h')&&trigger.player.inRange(target);
        },function(target){
            return -get.attitude(player,target);
        });        
        "step 1"
        if(result.bool){
            //player.logSkill('wwyj_xuedao',result.targets[0]);																																						
            event.target=result.targets[0];
            player.discardPlayerCard(result.targets[0],'h',get.prompt('wwyj_xuedao')).set('ai',function(button){                           
                return Math.random();            			            
        }).set('logSkill',['wwyj_xuedao',result.targets[0]]).set('att',get.attitude(player,result.targets[0])<=0);
	    }
			else{
                event.finish(); 
            } 
        "step 2"
        if(result.bool&&result.links&&result.links.length){		
            if(get.color(result.links[0])=='red'){								  
			    trigger.player.useCard({name:'sha',isCard:true},event.target,false);				
			}
			else{
                event.finish(); 
            } 
		}   
            else{
               event.finish();
            }							
				},
				ai:{				
					order:5,
				}
			},        
     "wwyj_shaozhu":{ 
        audio:"ext:文武英杰:1",
        trigger:{
            target:"useCardToTargeted",
        }, 
        check:function (event,player){				
        return get.attitude(player,event.player)<=0;
    },                      
        filter:function (event,player){    
          if(event.player.isDead()) return false;
            return event.card&&event.card.isCard&&event.card.name=='sha'&&game.hasPlayer(function(current){
              return player!=current&&event.player!=current&&current.inRange(event.player);
         });                                 
    },
         content:function (){
           'step 0'                     
             event.num=0;
             event.targets=game.filterPlayer(function(current){
              return player!=current&&trigger.player!=current&&current.inRange(trigger.player);
         });                                     
         event.targets.sort(lib.sort.seat);             
           'step 1' 
        if(event.num<event.targets.length){            
			event.targets[event.num].chooseToUse({name:'sha'},trigger.player,'对'+get.translation(trigger.player)+'使用一张【杀】（无距离限制），否则'+get.translation(player)+'将获得你的一张牌').logSkill='wwyj_shaozhu';		                      
         }
         else event.finish(); 
           'step 2'
           if(result.bool){              
             event.num++;
             event.goto(1);        
           }
           else{
             if(event.targets[event.num].countCards('he')){
               player.gainPlayerCard(event.targets[event.num],'he',true);
             }
             event.num++;
             event.goto(1);
           }           
    },
                ai:{
                    order:2,                    
                },     
            }, 
       "wwyj_lunpo":{                                             
        trigger:{
          global:"phaseDiscardAfter",
        },   
        audio:"ext:文武英杰:1",  
        direct:true,                                              
        filter:function(event,player){
        if(!event.player.hasSkill('wwyj_wan')) return false;
        if(event.cards){
            var suits=[];
            for(var i=0;i<event.cards.length;i++){
                var suit=get.suit(event.cards[i]);
                if(suits.contains(suit)){
                    return false;
                }
                else{
                    suits.push(suit);
                }
            }
            return true;
        }
        return false;
    },
          content:function(){
        'step 0'        
           player.chooseControl().set('choiceList',['回复一点体力并摸一张牌','令'+get.translation(trigger.player)+'受到你造成的一点伤害并弃置“丸”标记']).set('ai',function(){
           if(get.attitude(player,trigger.player)<=0) return 1;             
             return 0;
           });        
        'step 1'
        if(result.index==0){           
           player.recover();
           player.draw();
           player.logSkill("wwyj_lunpo");
           //trigger.player.addSkill('wwyj_wan');	
        }
        else{           
		   trigger.player.damage(player);
		   trigger.player.removeSkill('wwyj_wan');
		   player.logSkill("wwyj_lunpo");			
		}
    }, 
    }, 
   /* "_wwyj_fux2":{       
        trigger:{
           player:"enterGame",
           global:"gameStart",
        },
        forced:true,
        forbid:['guozhan'],
        priority:Infinity,
        filter:function (event,player){           
            return game.hasPlayer(function(current){
               return current.name=='wwyj_fux2';
         });                             
    },                
                content:function (){                
               if(player.name=='wwyj_fux2'){                 
                 //player.node.name.innerHTML='fux2';
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='fux2';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';				 			
				 text.style.transform='translateY(-200px)';
				 text.style['font-size']='20px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
               }  
               },
               },   
               */                        
     "wwyj_wan":{
		marktext:"丸",
		mark:true,
        intro:{
            name:"弹丸",
            content:"弹丸：这位仁兄现在的的处境相当危险",
        },		
     },
    "wwyj_dansha":{
        audio:"ext:文武英杰:1",
        trigger:{
           player:"damage",
        },
        forced:true,
        priority:2020,
        filter:function (event,player){           
            return game.hasPlayer(function(current){
               return current!=player&&!current.hasSkill('wwyj_wan');
         });                             
    },                
                content:function (){
          "step 0"
		 player.chooseTarget(get.prompt2('wwyj_dansha'),function(card,player,target){
            return target!=player&&!target.hasSkill('wwyj_wan');
        },function(target){
            return get.attitude(player,target)<0;
        });        
        "step 1"
        if(result.bool){
            //player.logSkill("wwyj_dansha");
            player.say('弹你的小鸡鸡');
            //result.targets[0].storage.wwyj_wan=player;
            result.targets[0].addSkill('wwyj_wan');            
        }
        else event.goto(2);             
        "step 2"                                                            
        var targets=game.filterPlayer(function(current){
              return current!=player&&current.hasSkill('wwyj_wan');
         });                                     
        targets.sort(lib.sort.seat);
        event.target=targets.randomGet();
        player.line(event.target,'green');
        game.playAudio('..','extension','文武英杰','wwyj_dansha');              
        event.target.damage(player,trigger.num); 
        event.target.discard(event.target.getCards('he').randomGet());                                                  
    },
            },
    "wwyj_qinyan2":{		
        onremove:true,
        //unique:true,                
        mark:true,
        marktext:"勤",
        intro:{
            name:"勤言",
            content:"你对本回合发动“释援”的角色使用的牌没距离和次数限制",
        },       			
		mod:{
			cardUsable:function(card,player,num){
				if(typeof num=='number') return num+100;
			},
			targetInRange:function(card,player,target){
				if(player.storage.wwyj_shiyuan.contains(target)) return true;
			},
			playerEnabled:function(card,player,target){
				var bool=false;
				if(player.storage.wwyj_shiyuan&&ui.selected.targets.length){
					for(var i=0;i<player.storage.wwyj_shiyuan.length;i++){
						if(ui.selected.targets.contains(player.storage.wwyj_shiyuan[i])){bool=true;break}
					}
				}
				if(!bool&&(!player.storage.wwyj_shiyuan||!player.storage.wwyj_shiyuan.contains(target))){
					var num=player.getCardUsable(card)-100;
						if(num<=0) return false;
					}
				},
			},
		/*
		mod:{
			cardUsable:function(card){								
				return Infinity;
			},
			targetInRange:function(){
				return true;
			},
		},
		*/
     },
     
    "wwyj_qinyan":{
    audio:"ext:文武英杰:2",
    trigger:{player:'loseAfter'},
	filter:function (event,player){
	    if(player.countCards('h')) return false;					
		return _status.currentPhase==player&&event.hs&&event.hs.length>0;
	},
	group:"wwyj_qinyan2",
    forced:true,  
    popup:false,       
	content:function(){						
		player.$fullscreenpop('龙王戏水','thunder');
		//player.addTempSkill("wwyj_qinyan2");	
	    player.draw(player.hp);		
	},
	ai:{
	    noh:true,
	    presha:true,
		skillTagFilter:function(player,tag){
			if(tag=='noh'){
				if(!player.hasSkill('wwyj_qinyan2')) return false;
			}
		},
	},
        },  
        
   "wwyj_shiyuan3":{
			//audio:["xiaoji",2],
			trigger:{			   
         global:["useCardEnd","changeHp","gameDrawAfter","gainAfter","drawAfter","loseAfter","dieBegin"],
    },
			mark:true,
			marktext:"个",
			forced:true,
			popup:false,
			filter:function (event,player){    
            var num1=game.countPlayer(function(current){
				return current.countCards('h')<current.maxHp;
			 });
            return num1>0&&player.countCards('h')&&game.hasPlayer(function(current){
				return player!=current&&current.countCards('h');
				});
        },
			init:function (player){
        player.storage.wwyj_shiyuan3=0;
    },			
			intro:{
          		content:function (storage){
         			return '你发动释援的人数上限为'+storage+'个';
          	 	},
            },
			content:function (){ 
            player.storage.wwyj_shiyuan3=0;
            var num=game.countPlayer(function(current){
				return current.countCards('h')<current.maxHp;
			 });	
			 player.markSkill("wwyj_shiyuan3");
			 player.storage.wwyj_shiyuan3+=num;
			 player.update();
				},
			},         
    "wwyj_shiyuan2":{                                         
          trigger:{player:'phaseAfter'},
			priority:-7,
			silent:true,
			forced:true,
			popup:"wwyj_shiyuan",			
			content:function(){	
			    'step 0'			
				player.storage.wwyj_shiyuan=[];
				'step 1'
				for(var i=0;i<game.players.length;i++){
				    if(game.players[i].hasSkill('wwyj_shiyuan1')){
				        game.players[i].removeSkill('wwyj_shiyuan1');
				    } 
				}    
			},
     },                          		 
    "wwyj_shiyuan1":{ 
        intro:{
            name:"释援",
            content:"你为“释援”的角色",
        },       
        marktext:"释",
		mark:true,                                      
        init:function (player){
            player.storage.wwyj_shiyuan1=[];
        }, 
        },           
        "wwyj_shiyuan":{                
        audio:"ext:文武英杰:2",
        enable:"phaseUse",
        usable:1,    
        group:["wwyj_shiyuan2","wwyj_shiyuan3"],
        init:function (player){
		    player.storage.wwyj_shiyuan=[];
      	},                                   
        filter:function (event,player){    
            var num1=game.countPlayer(function(current){
				return current.countCards('h')<current.maxHp;
			 });
            return num1>0&&player.countCards('h')&&game.hasPlayer(function(current){
				return player!=current&&current.countCards('h');
				});
        },
        content:function (){
           'step 0'                     
        event.num=0;             
             var num1=game.countPlayer(function(current){
				return current.countCards('h')<current.maxHp;
			 });			
			 //var num2=game.countPlayer(function(current){
				//return current.countCards('h')&&current.countCards('h')<current.maxHp;
			 //});			 
        //player.chooseTarget('请选择至多'+get.cnNumber(Math.min(player.countCards('h'),Math.min(num1,num2)))+'名其他角色，各交给一张手牌，然后这些角色各交回给你一张其他手牌',[1,Math.min(player.countCards('h'),Math.min(num1,num2))],function(card,player,target){
        player.chooseTarget('请选择一至'+get.cnNumber(Math.min(player.countCards('h'),num1))+'名其他角色，各交给一张手牌，然后这些角色各交回给你一张其他手牌',[1,Math.min(player.countCards('h'),num1)],true,function(card,player,target){                
            return target!=player&&target.countCards('h');
        },function(target){
            if(player.countCards('h')<3) return get.attitude(player,target)<=0;	
            return Math.random();
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('wwyj_shiyuan');                          
            event.targets=result.targets;                                                
        }
        else{
            event.finish();
        }
           'step 2' 
        if(event.num<event.targets.length){                                             
            player.chooseCard('h','交给'+get.translation(event.targets[event.num])+'一张手牌',true).ai=function(card){           
                   return 8-get.value(card);                                      
            };                                
         }
         else{            
            event.goto(4); 
         }   
          'step 3'      
		if(result.bool){         
           player.line(event.targets[event.num],'green');
           player.storage.wwyj_shiyuan.add(event.targets[event.num]);	
           event.targets[event.num].addSkill('wwyj_shiyuan1'); 
           event.targets[event.num].storage.wwyj_shiyuan1.add(result.cards[0]);		              
           player.$give(result.cards[0],event.targets[event.num]);
           event.targets[event.num].gain(result.cards[0],player);		     
           game.log(event.targets[event.num],'获得了'+get.translation(player)+'的一张',result.cards[0]);          
           event.num++;
           event.goto(2);
         }             
        'step 4'         
        event.num=0;
        event.targets=game.filterPlayer(function(current){
             return current!=player&&current.hasSkill('wwyj_shiyuan1');
         });                                     
        event.targets.sort(lib.sort.seat);
         'step 5'          
         if(event.num<event.targets.length){		        	
            event.targets[event.num].chooseCard('交给'+get.translation(player)+'一张手牌','h',true,function(card){
               return !event.targets[event.num].storage.wwyj_shiyuan1.contains(card);
            }).ai=function(card){
            if(card.name=='sha'&&get.attitude(player,event.targets[event.num])>0) return 1;			   
               return 6-get.value(card);
            }; 
          } 
          else{
              event.finish();
          } 
         'step 6'      
		if(result.bool){           
           event.targets[event.num].line(player,'green'); 		        
           event.targets[event.num].$give(result.cards[0],player);
           player.gain(result.cards[0],event.targets[event.num]);		     
           game.log(player,'获得了'+get.translation(event.targets[event.num])+'的一张',result.cards[0]); 
           event.targets[event.num].storage.wwyj_shiyuan1=[];
           //event.targets[event.num].removeSkill('wwyj_shiyuan1'); 
           event.num++;
           event.goto(5);         
        }                          
    },
                ai:{
                    order:5,
                    noh:true,
	                presha:true,
                    result:{
                        player:function (player){
                    if(player.countCards('h')<3) return 2;
                return 1.8;
            },                   
                    },
                },        
            },
    "wwyj_xuanxia":{                
        trigger:{
            player:["dying"],
        },				
        audio:"ext:文武英杰:1",		       
        priority:10,
        limited:true,
        mark:true,
			   	init:function (player){
				          player.storage.wwyj_xuanxia=false;
		      },
        filter:function (event,player){
				    return game.hasPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
	 		}); 
				},				
        content:function (){         
        	"step 0"
    	player.storage.wwyj_xuanxia=true;
    	player.$fullscreenpop('寰宇星城','fire');
    	game.wwyj_background();		
    	var num=game.countPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
	 		}); 
	 		//player.recover(num);
	 		"step 1"
				event.players=game.filterPlayer(function(current){
                return current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
      }).sortBySeat();
       "step 2"
        if(event.players.length){
            event.current=event.players.shift();           
            player.line(event.current,'green'); 
            player.useCard({name:'sha'},event.current,false); 
            /*var cards=event.current.storage.wwyj_xingcheng1;    
            player.gain(cards,'fromStorage');                                                          
            event.current.storage.wwyj_xingcheng1.remove(cards);
            */
            var cards=event.current.getExpansions('wwyj_xingcheng1');
            event.current.give(cards,player,'give');					
            event.current.getExpansions('wwyj_xingcheng1').remove(cards);            
            event.current.syncStorage('wwyj_xingcheng1');               
            player.recover(); 
            event.current.removeSkill('wwyj_xingcheng1');
            event.current.unmarkSkill('wwyj_xingcheng1');
            event.current.update();
			event.redo();
          }
          else{
                player.awakenSkill('wwyj_xuanxia');
                event.finish();            
          }    									 			
        },
        ai:{
            order:9,
        },
    },
    "wwyj_huanyu":{
				enable:"phaseUse",
				usable:1,
				audio:"ext:文武英杰:1",
				filter:function (event,player){
				    return game.hasPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
	 		}); 
				},				
			content:function (){
			"step 0"
			event.players=game.filterPlayer(function(current){
                return current.hasSkill('wwyj_xingcheng1')&&current.getExpansions('wwyj_xingcheng1').length>0;
         }).sortBySeat();
             "step 1"
        if(event.players.length){
            event.current=event.players.shift();           
            event.current.line(player,'green'); 
            var cards=event.current.getExpansions('wwyj_xingcheng1');   
            				
            //event.current.getExpansions('wwyj_xingcheng1').remove(cards);          
            //event.current.loseToDiscardpile(cards);
            event.current.give(cards,player,'give');	
            event.current.syncStorage('wwyj_xingcheng1');                                          
            //player.gain(cards,'fromStorage');
            //event.current.storage.wwyj_xingcheng1.remove(cards);
            event.current.update();
			event.redo();
          }
          else{
                event.goto(2);            
          }    									
			 "step 2"
		    event.num=0;
		    event.targets=game.filterPlayer(function(current){
            return current!=player&&current.hasSkill('wwyj_xingcheng1');
        }); 
        event.targets.sort(lib.sort.seat);
			"step 3"					
			if(event.num<event.targets.length){		        	
            player.chooseCard('交给'+get.translation(event.targets[event.num])+'一张手牌当作“星”','h',function(card){
               return true;
            }).ai=function(card){			   
               return 6-get.value(card);
            };                                 
        }
         else{		 
			 event.finish();
		 }
		"step 4"  
		if(result.cards&&result.cards.length){
		     player.line(event.targets[event.num],'green');
             player.lose(result.cards);  
             event.targets[event.num].addToExpansion(result.cards,player,'give').gaintag.add('wwyj_xingcheng1');      		     				
			// event.targets[event.num].storage.wwyj_xingcheng1=result.cards.slice(0);
					     
		     //event.targets[event.num].storage.wwyj_xingcheng1=event.targets[event.num].storage.wwyj_xingcheng1.concat(result.cards);
		     //event.targets[event.num].storage.wwyj_xingcheng1.push(result.cards);
		     event.targets[event.num].syncStorage('wwyj_xingcheng1'); 
			 event.targets[event.num].update();
	  	     event.num++;
		     event.goto(3);		  
		}																					
				},
				ai:{
          order:5,
          result:{
                player:1,
                target:-2,
           },
    },
			},
		"wwyj_xingcheng2":{				
				trigger:{
				    source:'damageEnd',	
					global:'dieBegin',
				},								
				filter:function (event,player){					
                    return event.player.hasSkill('wwyj_xingcheng1')&&event.player.getExpansions('wwyj_xingcheng1').length>0;	 		
				},	
				check:function (event,player){
				if(event.name=="damage"&&(player.hp<2||player.countCards('h')>2)) return 0;	
        return 1;
    },							
				content:function(){			                
			game.playwwyj('wwyj_xingcheng1');            
            trigger.player.line(player,'green'); 
            var cards=trigger.player.getExpansions('wwyj_xingcheng1');    
            trigger.player.give(cards,player,'give');	
            //trigger.player.loseToDiscardpile(cards);				
            //trigger.player.getExpansions('wwyj_xingcheng1').remove(cards);
            //game.cardsDiscard(cards);
            //player.syncStorage('wwyj_xingcheng1);                                           
            //player.gain(cards,'fromStorage');
            //trigger.player.storage.wwyj_xingcheng1.remove(cards);
            trigger.player.removeSkill('wwyj_xingcheng1');
            trigger.player.update();             					
				},	
			ai:{
               order:5,          
            },	
			},	
        "wwyj_xingcheng1":{
        /*
                init:function (player){
					if(!player.storage.wwyj_xingcheng1) player.storage.wwyj_xingcheng1=[];
				},
				marktext:"星",
				intro:{
					  content:'cards',					
				},*/
		onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',					
				},						
        },
	   "wwyj_xingcheng":{
				audio:"ext:文武英杰:1",
				trigger:{
				    player:'damageEnd',				    
				},
				direct:true,
				group:"wwyj_xingcheng2",
				filter:function (event,player){
					return game.hasPlayer(function(current){
                return current!=player&&!current.hasSkill('wwyj_xingcheng1');
	 		});
				},								
				content:function(){
				"step 0"
			    player.chooseTarget(get.prompt2('wwyj_xingcheng'),function(card,player,target){
            return target!=player&&!target.hasSkill('wwyj_xingcheng1');
        },function(target){
            if(target.hp<3&&get.attitude(player,target)>0) return 0;
            if(player.hp<2) return Math.random();
            return get.attitude(player,target)<=0;
        });        
        "step 1"
        if(result.bool){
            player.logSkill("wwyj_xingcheng");
            result.targets[0].addSkill('wwyj_xingcheng1');
            var card=game.cardsGotoSpecial(get.cards()).cards[0];
			result.targets[0].$draw(card);
			game.delay();
      		//result.targets[0].storage.wwyj_xingcheng1.push(card);
      		result.targets[0].addToExpansion(card,result.targets[0],'give').gaintag.add('wwyj_xingcheng1');
			result.targets[0].markSkill('wwyj_xingcheng1');
        }
        else event.finish();        					
				},				
			},
			
    "wwyj_jinyan1":{                
        trigger:{
            player:["useCardAfter"],
        },					
		     popup:false,
        forced:true,
        priority:10,
        filter:function (event,player){                                                            
            return player.hasSkill('wwyj_jinyan2')&&event.card&&event.card.isCard&&get.suit(event.card)==player.storage.wwyj_jinyan;
        },
        content:function (){ 
		    player.storage.wwyj_jinyan=[];
		    player.removeSkill('wwyj_jinyan1');		
            player.removeSkill('wwyj_jinyan2'); 			
        },
        ai:{
            order:9,
        },
    },
    "wwyj_jinyan2":{
		mark:true,
        mod:{
                    cardEnabled:function(card,player,event){
            if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                    cardUsable:function(card,player,event){
            //if(!player.storage.wwyj_jinyan.contains(card.name)) return false;
			if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                    cardRespondable:function(card,player,event){
            if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                    cardSavable:function (card,player,event){
            if(get.suit(card)!=player.storage.wwyj_jinyan) return false;
        },
                },  
			intro:{	
                content:function (storage,player,skill){
         			return '你不能使用或打出不是'+get.translation(player.storage.wwyj_jinyan)+'的牌';
          	 	}, 
			},				
    },
    "wwyj_jinyan":{                              
        enable:"phaseUse",
		usable:1,
		audio:"ext:文武英杰:1",		
		filter:function (event,player){
            var num=game.countPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_jinyan2');
			});
			if(num>0) return false;
			return true;
        },
		filterTarget:function (card,player,target){
            return player!=target&&!target.hasSkill('wwyj_jinyan2');
        },
        content:function (){        
            'step 0'  
            target.addSkill('wwyj_jinyan1');
            target.addSkill('wwyj_jinyan2'); 			
            if(!target.storage.wwyj_jinyan){
                target.storage.wwyj_jinyan=[];
            }
            var list=['spade','heart','club','diamond'];
            for(var i=0;i<list.length;i++){
                list[i]=[get.translation(list[i]),'',list[i]];
            }
        player.chooseButton(true,[[list,'vcard']]).set('filterButton',function(button){
            if(target.storage.wwyj_jinyan&&target.storage.wwyj_jinyan.contains(button.link[2])) return false;
                return true;
        }).set('ai',function(button){
            var rand=_status.event.rand*2;
            switch(button.link[2]){
                case 'spade':return 4+rand[4];
                case 'heart':return 4+rand[4];
                case 'club':return 4+rand[4];
                case 'diamond':return 4+rand[4];
                default:return rand[4];
            }
        }).set('rand',[Math.random(),Math.random(),Math.random()],Math.random());                                
            'step 1'
            if(result.bool){
				player.say('不看公告和教程就问问题的，祖安问候');
                player.logSkill('wwyj_jinyan');
                target.storage.wwyj_jinyan.push(result.links[0][2]);
                target.syncStorage('wwyj_jinyan2');
                target.markSkill('wwyj_jinyan2');	
            }
			else event.finish();
        },
             ai:{
                    order:5,
                    result:{
                        target:function (player,target){
                if(target.countCards('h')>=3) return -3.5;
                return -2;
            },
                    },
                },        
    },	
    "wwyj_gonggao2":{
		trigger:{
			player:'damageEnd',
		},
		audio:['quanji',2],
		popup:false,
		forced:true,
		filter:function (event,player){
			return event.source.isAlive()&&player!=_status.currentPhase;
		},
		content:function (){			
			trigger.source.addSkill('wwyj_gonggao1');
		},
	},
	"wwyj_gonggao1":{
		intro:{
            name:"警告",
            content:"你已被警告",
        },
		mark:true,
        marktext:"警",
	},   
	"wwyj_gonggao":{
		audio:"ext:文武英杰:1",
        trigger:{
			player:'damageAfter',
		},
		frequent:true,
		group:'wwyj_gonggao2',
		filter:function (event,player){
            return game.hasPlayer(function(current){
                return current!=player&&current.hasSkill('wwyj_gonggao1');
			});
        },
        init:function (player){
			player.storage.wwyj_gonggao=[];		
		},                        
        content:function (){
			'step 0'
			var list=['basic','trick','equip'];
			for(var i=0;i<player.storage.wwyj_gonggao.length;i++){
				list.remove(player.storage.wwyj_gonggao[i]);
			}
			if(list.length>0){
				player.chooseControl(list).set('ai',function(){
					return list.randomGet();
			    }
			).set('prompt',get.prompt('wwyj_gonggao')).set('prompt2',get.translation('wwyj_gonggao_info'));
			}
			else event.finish();		
			'step 1'
			if(result.control){			  
			    player.storage.wwyj_gonggao=result.control;
			    //player.logSkill('wwyj_gonggao');
			    game.log(player,'选择了'+get.translation(result.control));
			    player.popup(result.control);
			}
			else{
				event.finish();
			}
			'step 2'
			event.num=0;
			event.targets=game.filterPlayer(function(current){
            return current!=player&&current.hasSkill('wwyj_gonggao1');
        }); 
		event.targets.remove(player);
        event.targets.sort(lib.sort.seat);
		    'step 3'
			if(event.num<event.targets.length){
			player.line(event.targets[event.num],'green');
            event.targets[event.num].chooseCard('交给'+get.translation(player)+'一张与'+get.translation(player.storage.wwyj_gonggao)+'牌类型相同的牌，否则'+get.translation(player)+'视为对你使用一张【杀】','he',function(card){
               return true;
            }).ai=function(card){			   
               return 10-get.value(card);
            };                                 
        }
         else{		 
			 event.finish();
		 }
		'step 4'    
		if(result.bool){ 
		   //event.targets[event.num].removeSkill("wwyj_gonggao1");
           event.targets[event.num].$give(result.cards,player); 
		   player.gain(result.cards,event.targets[event.num]);
		   var card=result.cards[0];		   
           //game.log(player,'获得了'+get.translation(event.targets[event.num])+'一张',result.cards); 
		   if(get.type(card,'trick')==player.storage.wwyj_gonggao){
			  event.targets[event.num].draw();			
		   }
		   event.num++;
		   event.goto(3);		  
		}
		else{
		   player.logSkill('wwyj_gonggao');
		   //event.targets[event.num].removeSkill("wwyj_gonggao1");
		   player.discardPlayerCard('h',event.targets[event.num]);
		   player.useCard({name:'sha'},event.targets[event.num],false);	
		   player.say('叫你不看教程？也不看看我是何人？');
		   event.num++;
		   event.goto(3);
		}		
		},
		ai:{
           order:5,               
        },
	},
/*	"_wwyj_gonggao":{		
        trigger:{
			global:"roundStart",
		},
		forced:true,
		popup:true,
		filter:function (event,player){           
            return player.hasSkill('wwyj_gonggao1');			
        },                               
        content:function (){
			player.removeSkill("wwyj_gonggao1");
		},
	},*/
    "wwyj_gainian":{
		audio:"ext:文武英杰:2",
        enable:"phaseUse",
		usable:1,
        filter:function (event,player){
            return true;
        },
        init:function (player){
			player.storage.wwyj_gainian=[];		
		},                        
        content:function (){
        "step 0"              	
		var list1=[],list2=[];
		for(var i=0;i<lib.inpile.length;i++){
		var type=get.type(lib.inpile[i]);
		    if(type=='basic'){
			list1.push(['基本','',lib.inpile[i]]);
			}
			else if(type=='trick'){
				list2.push(['锦囊','',lib.inpile[i]]);
			}					
			}
		player.chooseButton([get.prompt('wwyj_gainian'),[list1.concat(list2),'vcard']]).set('filterButton',function(button){											
			return true;
		}).set('ai',function(button){		  					
			switch(button.link[2]){
				 	case 'du':return 1+9*Math.random();
					case 'sha':return 3+9*Math.random();
					case 'tao':return 5.5+9*Math.random();
					case 'jiu':return 3+9*Math.random();
					case 'shan':return 4+9*Math.random();
					case 'wuzhong':return 4.5+9*Math.random();
					case 'shunshou':return 4.5+9*Math.random();
					case 'nanman':return 3+9*Math.random();
					case 'wanjian':return 3+9*Math.random();
					default:return 9*Math.random();
				}							
			}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
		"step 1"       
			if(result.bool){					
				player.storage.wwyj_gainian=result.links[0][2];		
				if(player.hasSkill('wwyj_heimao')){
		    		player.loseHp();
			    	player.turnOver();
				}
				//player.logSkill('wwyj_gainian');			
			}else{
				event.finish();
			}	
		"step 2"
	    event.num=0;       
        event.targets=game.filterPlayer(function(current){
            return current!=player;
        }); 
		event.targets.remove(player);
        event.targets.sort(lib.sort.seat);
        "step 3"
        if(event.num<event.targets.length){
			player.line(event.targets[event.num],'green');
            event.targets[event.num].chooseCard('弃置一张牌名与'+get.translation(player.storage.wwyj_gainian)+'相同的手牌，否则'+get.translation(player)+'摸一张牌','h',function(card){
               return card.name==player.storage.wwyj_gainian;
            }).ai=function(card){
			   if(get.attitude(player,event.targets[event.num])>0) return false;
               return 8-get.value(card);
            };                                 
        }
         else{
			 player.storage.wwyj_gainian=[];
			 event.finish();
		 }
		"step 4"     
		if(result.bool){            		   
           event.targets[event.num].discard(result.cards);          	     
           game.log(event.targets[event.num],'弃置了一张',result.cards);  
		   event.num++;
		   event.goto(3);		  
		}
		else{
		   player.draw();
		   event.num++;
		   event.goto(3);		   
		}
    },
                ai:{
                    order:2,
                    threaten:1.5,
                    result:{
                        player:function (player){
                if(player.hp<2&&player.hasSkill('wwyj_heimao')) return 0;
                return 1.8;
            },                   
                    },
                },
            },
    "wwyj_heimao":{
		audio:"ext:文武英杰:2",				
		unique:true,
		forced:true,
		trigger:{                   
            player:"dying",
        },
		mark:true,
		juexingji:true,
		//skillAnimation:true,				
		init:function(player){
			player.storage.wwyj_heimao=false;
		},
		intro:{
			content:'limited'
		},
		marktext:"猫",
		filter:function (event,player){						
			return player.hp<=0;
		},
		content:function(){
		    'step 0'
		    //trigger.cancel();
		    player.$fullscreenpop('松岛枫桂花','fire');
		    game.wwyj_background();	
		    player.storage.wwyj_heimao=true;
		    player.awakenSkill('wwyj_heimao');		    									
	        'step 1'
			player.discard(player.getCards('hej')); 
		    player.link(false);
		    player.turnOver(false);
			player.recover(player.maxHp-player.hp);
		    player.draw(player.maxHp);		 
		    ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');
			'step 2'
			if(game.dead.length>0){
			    var list=[];
                 for(var i=0;i<game.dead.length;i++){
                     list.push(game.dead[i].name);
                 }      
                 player.chooseButton(ui.create.dialog('选择一名已阵亡的角色令其复活并交换身份牌',[list,'character']),function(button){
                 for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                     return ai.get.attitude(_status.event.player,game.dead[i]);
                 });
				 /*随机复活：
				 var list=[];
			var list2;
			for(var i=0;i<game.dead.length;i++){
			list.push(game.dead[i]);			
			}																
		    list2=list.randomGet();			
 		    player.line(list2,'green');
			list2.revive(list2.maxHp);				
			list2.draw(list2.maxHp);
			*/
			}	
			'step 3'
			if(result.bool){
				for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                    var dead=game.dead[i];				
				player.line(dead,'green');
				dead.revive(dead.maxHp);		
			    dead.draw(dead.maxHp);				
			if(get.mode()=='identity'){     
            game.broadcastAll(function(player,target,shown){
				var identity=player.identity;
				player.identity=target.identity;
				game.log(player,'的身份改为'+get.translation(player.identity));
				if(shown||player==game.me){
					player.setIdentity();
					player.update();
				}
				target.identity=identity;
				game.log(target,'的身份改为'+get.translation(target.identity));
				target.setIdentity();
				target.update();
			},player,dead,dead.identityShown);					
			} 
			}
            			
			/*全场大涅涅槃：
            event.num=0;      
            event.targets=game.filterPlayer(function(current){
                return current.isAlive();
            }); 
			event.targets.sort(lib.sort.seat);
            'step 2' 
        if(event.num<event.targets.length){  
		   player.line(event.targets[event.num],'green');
           event.targets[event.num].discard(event.targets[event.num].getCards('hej')); 
		   event.targets[event.num].link(false);
		   event.targets[event.num].turnOver(false);
		   event.targets[event.num].draw(4);
		   event.targets[event.num].recover(event.targets[event.num].maxHp-event.targets[event.num].hp);
		   event.num++;
		   event.redo();
         }
         else{
			 event.goto(3);
		 }
		 'step 3' 
		game.broadcastAll(function(player){
			var list=[];
			for(var i=0;i<game.dead.length;i++){
			list.push(game.dead[i]);			
			}																
		for(var i=0;i<list.length;i++){
 		player.line(list[i],'green');
			list[i].revive(list[i].maxHp);				
			list[i].draw(4);
			player.draw();
			}
			}, player);	
			*/
				},								
			},

        "wwyj_liusha":{                     
                trigger:{                   
                    player:"loseAfter",
                },					               
                audio:["qixi",2], 
				direct:true,
                filter:function (event,player){
         return player!=_status.currentPhase;		
    },
                content:function (){        
            'step 0'
		player.chooseTarget('流沙',1,lib.translate.wwyj_liusha_info,function(card,player,target){
            return target.countCards('hej');
        }).set('ai',function(target){
			if(target.countCards('j')) return get.attitude(_status.event.player,target);
            return -get.attitude(_status.event.player,target);            
        });
		    'step 1'
		if(result.bool){ 
            player.discardPlayerCard(result.targets[0],'hej',get.prompt('wwyj_liusha')).set('ai',function(button){            
            if(get.position(button.link)=='h'){               
                return Math.random();
            }
			if(get.position(button.link)=='e'){
                if(get.subtype(button.link)=='equip2')  return 2*get.value(button.link);
                return get.value(button.link);
            }
            return 1;
        }).set('logSkill',['wwyj_liusha',result.targets[0]]).set('att',get.attitude(player,result.targets[0])<=0);
	    }
			else{
                event.finish(); 
            } 
        'step 2'
        if(result.bool&&result.links&&result.links.length){
			player.logSkill('wwyj_liusha');
            if(get.tag(result.links[0],'damage')){								  
			    player.draw();				
			}
			else{
                event.finish(); 
            } 
		}   
            else{
               event.finish();
            }									
    },
            },
         "wwyj_yiwang":{                     
                trigger:{                   
                    player:"shaMiss",
                },			               				
                check:function (event,player){
				if(event.target.isTurnedOver()) return get.attitude(player,event.target)>0;	
        return get.attitude(player,event.target)<0;
    },
                audio:["miji",2], 
				prompt:function (event,player){					
					return '是否令'+get.translation(event.target)+'翻面？';
				},
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){                  
            trigger.target.turnOver();                        
    },
            },
			"wwyj_fenghua3":{
		        unique:true,
				charlotte:true,
			},
			"wwyj_fenghua2":{
                mark:'character',
				onremove:true,
				intro:{
					content:'到$的距离视为1'
				},
                mod:{
                    globalFrom:function (from,to){
            if(to==from.storage.wwyj_fenghua2){
                return -Infinity;
            }
        },
                },
            },
        /*"wwyj_fenghua1":{                     
                shaRelated:true,
				trigger:{player:'useCardToPlayered'},				
				filter:function(event,player){
					return event.card.name=='sha';
				},
				logTarget:'target',
                check:function (event,player){
                if(get.attitude(player,event.target)<0&&event.target.isTurnedOver()) return 1;
        return get.attitude(player,event.target)<0;
    },
                audio:["jueqing",2], 				                
                content:function (){        
           // trigger.directHit=true;     
              trigger.getParent().directHit.add(trigger.target);
    },
            },*/
			"wwyj_fenghua":{
                audio:["lieren",2],
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
            //target.addTempSkill('wwyj_fenghua3'); 
            target.turnOver();           
            //player.addTempSkill('wwyj_fenghua1'); 
		    player.storage.wwyj_fenghua2=target;
            player.addTempSkill('wwyj_fenghua2');  			
        }
		else{
			player.recover();
		}
    },
              ai:{
                 result:{
                    target:function (player,target){
                        if(target.isTurnedOver()&&get.attitude(player,target)<=0) return 0; 
                        if(target.isTurnedOver()&&get.attitude(player,target)>0) return 1; 
                        if(player.countCards('h')<2) return 0;                     
                return -target.countCards('h')-2;
            },
                    },
                    order:9,
                },
            },
        "wwyj_shennai":{
			//audio:["xiaoji",2],
			trigger:{
			    	global:"gameDrawAfter",
         player:["gainAfter","drawAfter","loseAfter"],
    },
			mark:true,
			marktext:"次",
			forced:true,
			popup:false,
			init:function (player){
        player.storage.wwyj_shennai=0;
    },			
			intro:{
          		content:function (storage){
         			return '你使用【杀】的次数上限为'+storage+'次';
          	 	},
            },
			content:function (){ 
     var cards1=[];
				var cards2=[];
				var hcards=player.getCards('h'); 
        for(var i=0;i<hcards.length;i++) { 
            if(get.tag(hcards[i],'damage')){
				cards1.push(hcards[i]);
			}
			else{
				cards2.push(hcards[i]);
			}
		}
		player.storage.wwyj_shennai=0;
		player.storage.wwyj_shennai+=cards2.length+1;
		player.update();
			},			
			mod:{					
				cardUsable:function(card,player,num){
					var cards1=[];
					var cards2=[];
					var hcards=player.getCards('h'); 
        for(var i=0;i<hcards.length;i++) { 
            if(get.tag(hcards[i],'damage')){
				cards1.push(hcards[i]);
			}
			else{
				cards2.push(hcards[i]);
			}
		}
				if(card.name=='sha') return num+=cards2.length;
					}
				},
			},
        "wwyj_keai":{                
                trigger:{
                    player:["damageEnd","loseAfter"],
                },	
				audio:"ext:文武英杰:1",
				frequent:true,               
                priority:10,
                filter:function (event,player,name){   
				if(name=='loseAfter') return !player.countCards('h')&&event.hs&&event.hs.length>0;
      return game.hasPlayer(function(current){
      return current.sex=='male';
  });
    },
                content:function (){  
		'step 0'		
        event.num=0;
        //game.playwwyj('wwyj_xipi1');
        event.targets=game.filterPlayer(function(current){
            return current.sex=='male'&&current.countCards('h');
        }); 
        //event.targets.sort(lib.sort.seat);
    'step 1' 
        if(event.num<event.targets.length){               
            event.targets[event.num].chooseCard('h','是否交给'+get.translation(trigger.player)+'一张手牌？').ai=function(card){
           if(get.attitude(player,event.targets[event.num])>0){
           if(event.targets[event.num].isDamaged()||event.targets[event.num].countCards('h')==1) return 1;
	    		   if(card.name=='sha'&&_status.currentPhase==trigger.player) return 1;
               if(event.targets[event.num].countCards('h')>1) return 8-get.value(card);
                   return 10-get.value(card);
                    }
           return 0;         
       };                                 
         }
         else{
			 event.finish();
		 }
		 'step 2'      
		if(result.bool){
           //player.logSkill("wwyj_keai");
           event.targets[event.num].line(player,'green'); 
		        //event.targets[event.num].lose(result.cards);       
           event.targets[event.num].$give(result.cards,player);
           player.gain(result.cards,event.targets[event.num]);		     
          game.log(player,'获得了'+get.translation(event.targets[event.num])+'的一张',result.cards[0]);          
		}
		else{
		   event.num++;
           event.goto(1);
		}					
		 'step 3'   
		 if(!event.targets[event.num].countCards('h')||event.targets[event.num].getDamagedHp()){
	  	 event.targets[event.num].draw();          
		   event.num++;
      event.goto(1);
		}
		else{
		   event.num++;
      event.goto(1);
		}					
    },
                ai:{
                    order:9,
                    noh:true,
                    effect:{
		                				player:function(card,player,target){							
		              						if(!player.hasFriend()) return;								
					          			},
			        					},
                },
            },
        "wwyj_weixin":{                     
                trigger:{                   
                    global:"dying",
                },			
                usable:1,				
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                audio:["jijiu",2], 
				prompt:function (event,player){					
					return '是否摸一张牌并翻面，令'+get.translation(event.player)+'回复一点体力？';
				},
                filter:function (event,player){
        return event.player.hp<=0;
    },
                content:function (){        
            'step 0'   
            player.draw();
            player.turnOver();                                  
            'step 1'
            trigger.player.recover();                        
    },
            },
		"wwyj_xianyu":{                     
                trigger:{                   
                    source:"damageBegin",
                },
			           	usable:1,				
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                audio:["qingnang",2],                                        
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){        
          'step 0'   
          player.turnOver();   
          trigger.player.link(true);
           'step 1'  
            trigger.num++;                                                                 
    },
            },
          "wwyj_qianshang":{                     
                trigger:{                   
                    global:"phaseDiscardEnd",
                },     
                audio:"ext:文武英杰:1",                
                direct:true,                                                    
                filter:function (event,player){					
                if(!event.cards) return false;
                if(player==event.player) return false;
                for(var i=0;i<event.cards.length;i++){
        return game.hasPlayer(function(current){
                 return player.canUse(event.cards[i],current);
             });
             }
    },
                content:function (){        
          'step 0'        
          player.chooseCardButton(trigger.cards,1,'选择使用'+get.translation(trigger.player)+'所弃置的其中一张牌').set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 //return get.type(button.link)!='equip'&&player.canUse(button.link,current);
				 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
        'step 1'        
        if(result.bool){         
            player.logSkill('wwyj_qianshang');
			if(get.type(result.links[0])=='equip'){
				player.useCard(result.links[0],player);
			}else{
                player.chooseUseTarget(result.links[0]); 
			}			
        }       
        else event.finish();                       
    },
            },
         "wwyj_peiyin":{
				audio:"ext:文武英杰:1",    
				trigger:{player:'loseAfter'},
				forced:true,
				filter:function(event,player){
					return event.es&&event.es.length>0;
				},				
				content:function(){
				    player.recover();
				    player.draw();
				},
				ai:{
					noe:true,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					}
				}
			},
         "wwyj_nie":{
            init:function (player){
                    player.storage.wwyj_nie=0;
                },
                intro:{
                    name:"造孽",
                    content:"已造了#个孽",
                },
                marktext:"孽",
            },
         "wwyj_zhaonie2":{                     
                trigger:{                   
                    player:"phaseBegin",
                },
                audio:"ext:文武英杰:1",                     
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.storage.wwyj_nie>0;
    },
                content:function (){                        
                    var num=player.storage.wwyj_nie;
                    player.chooseToDiscard('he',Math.min(num,player.countCards('he')),true);                    
                },
                },
         "wwyj_zhaonie":{                     
                trigger:{                   
                    source:"dieBegin",
                },
                audio:"ext:文武英杰:1",                     
                forced:true,     
                //group:"wwyj_zhaonie2",                   
                init:function (player){
                    player.storage.wwyj_nie=0;
                    player.unmarkSkill("wwyj_nie");
                },            
                content:function (){  
                    player.addTempSkill('wwyj_zhaonie2',{player:'phaseZhunbeiBegin'});                    
                    player.storage.wwyj_nie++;
                    player.markSkill("wwyj_nie");
                    player.update();
                },
                },
        "wwyj_mingka":{                     
                trigger:{                   
                    source:"damageBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                audio:["xianzhen",2],                                        
                filter:function (event,player){
        return event.card.name=='sha'&&player.countCards('he',{type:'equip'});
    },
                content:function (){        
          'step 0'        
           player.chooseCardButton('选择要弃置的装备牌',player.getCards('he',{type:'equip'}),[1,Math.min(2,player.countCards('he',{type:'equip'}))]).set('ai',function(button){                    
                 return get.type(button.link)=='equip';
            });                        
            'step 1'
          if(result.bool){                             
              player.discard(result.links);
              trigger.num+=result.links.length;            
          }
          else event.finish();                            
    },
            },
            "wwyj_miaoji2":{
                trigger:{
                    global:"roundStart",
                },
                popup:false,
                forced:true,
                content:function (){  
                    player.removeSkill("wwyj_miaoji2");
                },
                },
        "wwyj_miaoji":{
                enable:"chooseToUse",
				round:1,
				//audio:["kanpo",2],
				audio:"ext:文武英杰:2",  				
                filterCard:function (){return false},
                selectCard:-1,                
                viewAsFilter:function (player){
					return _status.currentPhase!=player&&player.isTurnedOver()&&!player.hasSkill("wwyj_miaoji2");
				},
                viewAs:{name:"wuxie"},
                onuse:function (result,player){
					player.turnOver();
					player.addSkill("wwyj_miaoji2");
				},
                prompt:"你可翻面视为使用一张【无懈可击】",
                check:function (){return 1},
                ai:{
                    threaten:0.2,
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
            "wwyj_qisi":{
				audio:"ext:文武英杰:2", 
			    group:["wwyj_qisi_use","wwyj_qisi_sha","wwyj_qisi_shan"],	
			},
			"wwyj_qisi_use":{
				//audio:["qice",2],
                enable:"chooseToUse",
                filter:function (event,player){                                                
        if((event.filterCard({name:'sha'},player,event))||
            (event.filterCard({name:'jiu'},player,event))||
            (event.filterCard({name:'shan'},player,event))||
            (event.filterCard({name:'tao'},player,event))){
   return !player.isTurnedOver();    
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','ice']);
                list.push(['基本','','sha','fire']);
                list.push(['基本','','sha','thunder']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
             if(event.filterCard({name:'shan'},player,event)){
                list.push(['基本','','shan']);
            }
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('奇思',[list,'vcard'],'hidden');
        },
                    check:function(button){
						var player=_status.event.player;						
						//var effect=player.getUseValue(button.link[2]);
						//if(effect>0) return effect;
						//return 0;						
						var card={name:button.link[2],nature:button.link[3]};
						if(game.hasPlayer(function(current){
							return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
						})){
							switch(button.link[2]){
								case 'tao':return 3.02;
								case 'jiu':return 3.01;
								case 'shan':return 3.01;
								case 'sha':
									if(button.link[3]=='fire') return 2.95;
									else if(button.link[3]=='thunder') return 2.92;
									else return 2.9;
							}
						}
						return 1;
					},
                    backup:function (links,player){
            return {
                filterCard:function (){return false},
                selectCard:-1,
                viewAsFilter:function (player){return !player.isTurnedOver()},
              // viewAs:{name:links[0][2],nature:links[0][3]},   
                viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null,isCard:true},                                    
                popname:true,
                ignoreMod:true,
                precontent:function(){
                    //player.draw(player.maxHp-player.countCards('h'));		
                    game.playwwyj(['wwyj_qisi1','wwyj_qisi2'].randomGet()); 
                    player.turnOver();					
                    player.logSkill('wwyj_qisi');                        
                },
            }
        },
                    prompt:function (links,player){
            return '视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
        },
                },
                ai:{                
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                return 3.1;
            }
            return 2.9;
        },
                    save:true,
                    respondSha:true,
                    fireAttack:true,
                    respondShan:true,
                    skillTagFilter:function(player,tag,arg){
						if(tag=='fireAttack') return true;						
					},
					result:{
						//player:1,
						player:function(player,target){
                            var target=game.findPlayer(function(current){
                                return current.hp<=0;
                            });
                            if((target&&get.attitude(player,target)<=0)||(!target&&player.hasSkill("wwyj_miaoji2"))) return 0;   
                            if(target&&get.attitude(player,target)>0&&player.hasSkill("wwyj_miaoji2")) return 1;                                                                        
                                return 1;
                        },
					},
                },
            },
                                    
            "wwyj_qisi_sha":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                check:function (event,player){   
	    	       if(player.countCards('h','sha')>0) return 0;     
	    	       if(player.hp<2&&player.countCards('h','sha')<=0) return 1;            
              return Math.random();
         },           
                filter:function (event,player){         
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
     //  if(event.parent.name!='sha') return false;
        return !player.isTurnedOver();
    },
                content:function (){ 
           //player.draw(player.maxHp-player.countCards('h'));	
            //game.playwwyj(['wwyj_qisi1','wwyj_qisi2'].randomGet()); 
			game.playwwyjAudio('wwyj_qisi',2);
            player.turnOver();		   
            trigger.untrigger();
            trigger.responded=true;         
            trigger.result={bool:true,card:{name:'sha',isCard:true}};    
            player.logSkill('wwyj_qisi');
    },
            },
			"wwyj_qisi_shan":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                check:function (event,player){   
	    	       if(player.countCards('h','shan')>0) return 0;     
	    	       if(player.hp<2&&player.countCards('h','shan')<=0) return 1;            
              return Math.random();
         },           
                filter:function (event,player){        
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return !player.isTurnedOver();                                  
    },
                content:function (){           
	        	game.playwwyj(['wwyj_qisi1','wwyj_qisi2'].randomGet()); 	
	        player.turnOver();
            trigger.untrigger();
            trigger.responded=true;        
            trigger.result={bool:true,card:{name:'shan',isCard:true}};                              
            player.logSkill('wwyj_qisi'); 
    },
                
            },
            
        "wwyj_lengyu2":{
         trigger:{
             source:"damageEnd",
     },  
	 forced:true,
	 filter:function (event,player){
          return event.player.isAlive()&&event.card.name=='sha'&&event.notLink();
      },
     content:function (){  
	 "step 0"
     player.chooseCard('h','交给'+get.translation(trigger.player)+'一张手牌',true).ai=function(card){                         
         return 6-get.value(card);              
       };                					
					"step 1"
					if(result.bool){		
				    		//player.lose(result.cards);       
            player.$give(result.cards,trigger.player);
            trigger.player.gain(result.cards,player);			     
					}
					else{
				    		event.finish();
					} 			
     },
		},
        "wwyj_lengyu":{
			audio:"ext:文武英杰:1",
         trigger:{
             player:"shaBegin",
     },       
   	 filter:function (event,player){
          return event.target.countCards('h')&&event.card.name=='sha';
      },
      frequent:true,	  
     content:function (){  
            player.gainPlayerCard(trigger.target,'h'); 		            
            player.addTempSkill('wwyj_lengyu2','shaAfter');	
     },
		},
		"wwyj_junshen2":{			
				mod:{					
					selectTarget:function(card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]+=Infinity;
					},					
				},
			},
		"wwyj_junshen1":{				
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'&&get.color(card)=='red') return Infinity;
					},
					targetInRange:function(card,player,target,now){
						if(card.name=='sha'&&get.color(card)=='black') return true;
					},
				},
				ai:{					
					skillTagFilter:function(player,tag,arg){
						if(!get.zhu(player,'shouyue')) return false;
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				},
			},
			"wwyj_junshen":{
			audio:"ext:文武英杰:1",
				trigger:{
             player:"phaseUseBegin",
     },       
   	 filter:function (event,player){
          return true;
      },
      direct:true,	  
     content:function (){  
            'step 0'
        player.chooseControl().set('choiceList',['使用黑【杀】无距离限制，使用红【杀】没次数限制','使用的【杀】可指定任意名目标且无视目标的防具']).set('ai',function(){
        if(player.getAttackRange()>2) return 1;          
            return 0;
        });
        'step 1'
        if(result.index==0){
            player.logSkill('wwyj_junshen');
            player.addTempSkill('wwyj_junshen1');
        }
        else{
            player.logSkill('wwyj_junshen');
			player.addTempSkill('wwyj_junshen2');
			player.addTempSkill('unequip');
		}
     },
			},
         "wwyj_jisi":{
                audio:["wansha",2],
                trigger:{
                    player:"phaseBegin",
                },                
               // forced:true,
               check:function (event,player){ 
               for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player&&game.players[i].hp<2){
								    if(get.attitude(player,game.players[i])>0) return 0;
								    return 1;     
								    }
								}	    	                    
         },
                filter:function (event,player){				
					return game.hasPlayer(function(current){
            return current!=player&&current.hp==1;
         });                  
				},			
                content:function (){
                'step 0'                        
             event.num=0;
        event.targets=game.filterPlayer(function(current){
            return current!=player&&current.hp==1;
        });  
		//event.targets.sort(lib.sort.seat);
        //player.line(event.targets,'green');    
    'step 1' 
        if(event.num<event.targets.length){
            player.line(event.targets[event.num],'green');    
            event.targets[event.num].loseHp();         
            game.log(event.targets[event.num],'失去了一点体力');
            event.num++;
            event.redo();
         }
         else event.finish();
                },                 
            },
         "wwyj_qiangkang2":{              
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
          return event.source&&!event.nature;
      },
                content:function (){
        player.draw();       
        if(trigger.source.countCards('he')){
        game.playwwyj('wwyj_yingguai1'); 
        player.discardPlayerCard(trigger.source,'he',true);
        }
    },
            },
            "wwyj_qiangkang":{
               audio:["weimu",2],
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                group:"wwyj_qiangkang2",
                filter:function (event,player){
          return event.nature;
      },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    nofire:function (player){
            return player.isAlive();
        },
                    nothunder:function (player){
            return player.isAlive();
        },
         effect:{                
                target:function (card,player,target,current){
                    if(get.tag(card,'natureDamage')) return 0;
                    var num=game.countPlayer(function(current){
						return get.attitude(current,target)>0&&current.hasSkill('wwyj_zhuanxing');
					});								
					if(num>0&&card.name=='sha') return 0;								
                    if(card.name=='tiesuo') return [0,0];                
                },
         },
                },                                
            },
			"wwyj_fansha":{
        audio:["fanjian",2],
         trigger:{
          target:"shaBegin",
     },          
	         filter:function (event,player){
               return player.countCards('h','sha')&&event.card.name=='sha';
      },
	  check:function (event,player){ 	          
            return get.attitude(player,event.player)<=0;
         },
     content:function (){
		 player.discard(player.getCards('h',{name:'sha'}));
		 player.useCard({name:'sha'},trigger.player,false);
     },				
			},	
		"_wwyj_qiaoji":{                
                trigger:{
                    player:"useCard",
                },	
				audio:["fanjian",2],
				popup:false,
                forced:true,
                priority:10,
                filter:function (event,player){                                                            
      return event.card.name=='sha'&&game.hasPlayer(function(current){
      return current.hasSkill('wwyj_qiaoji2')&&player!=current;
  });
    },
                content:function (){            
        'step 0'                      
     event.targets=game.filterPlayer(function(current){
        return current.hasSkill('wwyj_qiaoji2')&&player!=current;
     });
     event.targets.sort(lib.sort.seat);
       'step 1'   
     trigger.targets.addArray(event.targets);   
     player.line(trigger.targets,'green');      
     },
                ai:{
                    order:9,
                },
            },	
            "wwyj_qiaoji2":{
                unique:true,
				charlotte:true,
            },
      /*  "wwyj_qiaoji2":{
        audio:"ext:文武英杰:1",
         trigger:{
          player:"damageEnd",
     },
          forced:true,
		  popup:false,
	         filter:function (event,player){
               return player.countCards('h')&&event.card.name=='sha';
      },
     content:function (){
		 trigger.source.say('吃了我的给我吐出来');
		 player.chooseToDiscard('h',true);		
     },				
			},			*/
          "wwyj_qiaoji":{
          audio:["yingzi",2],
         trigger:{
          global:"phaseDrawEnd",
     },      
	 filter:function (event,player){
               return event.num>0&&player!=event.player;
      },
      check:function (event,player){ 
	         if(get.attitude(player,event.player)>0) return false;
             if(!player.countCards('h','shan')&&event.player.countCards('h')>4) return false;
	    	       if(player.countCards('h')<2&&player.hp<2) return false;     
	    	       if(!player.isEmpty(2)) return true;       
	    	       if(player.countCards('h','shan')) return true;     
              return false;
         },             
     content:function (){
		 'step 0' 
		 player.chooseCardButton('选择获得其中一张基本牌',trigger.cards,1).set('filterButton',function(button){           
             return get.type(button.link)=='basic';
         }).set('ai',function(button){
             return get.value(button.link);
         });                                     
            'step 1'
          if(result.bool){                             
               trigger.player.$give(result.links,player);
               player.gain(result.links,trigger.player); 
		       player.addTempSkill('wwyj_qiaoji2');
          }
          else{
			player.draw(); 
			player.addTempSkill('wwyj_qiaoji2');
		  }		     
     },				           
            },
        "wwyj_yanyu":{
			audio:"ext:文武英杰:1",
			trigger:{global:'loseAfter'},		
			//direct:true,
			//usable:1,
	check:function (event,player){
		var es=player.getCards('e');
		for(var i=0;i<event.cards.length;i++){ 				
		    for(j=0;j<es.length;j++){			  
			   if(get.subtype(event.cards[i])==get.subtype(es[j])){
				 return game.hasPlayer(function(current){
                    return current.hasSkill('wwyj_xuedao');
                 }); 
               }  
               return Math.random();       			 
			}
		}
        return 1;
    },
    //check:function (card){					
		//return get.value(card);
	//},
	filter:function (event,player){      
        if(player==event.player) return false;
        for(var i=0;i<event.cards.length;i++){           
            if(get.position(event.cards[i],true)=='d'&&get.type(event.cards[i])=='equip') return true; 
           // if(get.position(event.cards[i],true)=='d'&&event.cards[i].original=='e'&&get.subtype(event.cards[i])=='equip1') return true; 
        } 
        return false; 
    },
	content:function (){								 			
           'step 0'    
          player.chooseCardButton('选择其中一张装备牌',trigger.cards,1).set('filterButton',function(button){           
             return !player.isDisabled(get.subtype(button.link))&&get.type(button.link)=='equip';
         }).set('ai',function(button){
             if(button.link.name=='tengjia'||button.link.name=='zheji'||button.link.name=='nvzhuang'||button.link.name=='wufengjian'||button.link.name=='yinfengjia'||button.link.name=='numa') return 0;
                 return get.value(button.link);
         });               
            'step 1'
          if(result.bool){   
                player.logSkill('wwyj_yanyu',player); 
                player.useCard(result.links[0],player);	                               
                //player.equip(result.links[0]);	
          }
          else event.finish();	                  					    							    
				},
				ai:{		
					reverseEquip:true,
					order:5,
				},
			},
         "wwyj_bingmou":{
         trigger:{
          player:"shaBegin",
     },
     forced:true,
     content:function (){  
        game.playwwyj('wwyj_bingmou'); 
     },
				mod:{			
						globalTo:function (from,to,distance){
            return distance+=to.getAttackRange()-1;
        },
					selectTarget:function (card,player,range){
				   		if(card.name=='sha'&&range[1]!=-1) range[1]+=player.getAttackRange()-1;
					},					
				},
			},
         "wwyj_gaochang":{
				audio:["yingzi",2],
		     	trigger:{player:'phaseDrawBegin'},
	    	   check:function (event,player){   
	    	       if(player.countCards('h')>2||player.storage.wwyj_toushi<2) return 0;     
	    	       if(player.hp<2) return 1;            
              return 1;
         },           
	    			filter:function (event,player){
              return player.storage.wwyj_toushi>0;
         },
			    	content:function (){				           
			    		   trigger.num+=player.storage.wwyj_toushi;
			    		   player.storage.wwyj_toushi=0;
		    		},
		    		ai:{
			       		threaten:2.3,
		    		},
		   	},         
            "wwyj_qiuxue":{              
			            audio:["zili",2],
                trigger:{
                    player:"wwyj_toushiAfter",
                },
                forced:true,
		        juexingji:true,	
		        skillAnimation:true,  		
                derivation:"wwyj_gaochang",
                init:function (player){
                    player.storage.wwyj_qiuxue=false;               
                },    
                filter:function (event,player){
          return player.storage.wwyj_toushi>=3;
      },
                content:function (){
                'step 0'
                //player.$fullscreenpop('瓦力','fire');
                game.wwyj_background();	
                ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');               
	            'step 1'
			    player.loseMaxHp();
                player.recover();
                player.update();
                player.addSkill('wwyj_gaochang');
                player.storage.wwyj_qiuxue=true;
                player.awakenSkill('wwyj_qiuxue');
    },
            },
            "wwyj_toushi":{
		        audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:1,
                position:'he',      
                discard:false,
                prepare:'give',
                init:function (player){
                    player.storage.wwyj_toushi=0;
                    player.unmarkSkill('wwyj_toushi');
                },    
                marktext:"师",
                intro:{
                    name:"偷师",
                    content:"已有#个偷师标记",
                },                       
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){    
        return player.countCards('he');
    },                              
                content:function (){
        "step 0"
            target.gain(cards,player);                 
        "step 1"            
            player.chooseSkill(target,function(info,skill){
		    	 	 return true;
				});     					 
      "step 2"
    		if(result.bool){
			    var skill=result.skill;		    		
		     	player.addTempSkill(skill,{player:'phaseUseBegin'});
		    	player.popup(skill);
		    	player.flashAvatar('wwyj_toushi',skill);   		 
				player.markSkill('wwyj_toushi');
		   		player.storage.wwyj_toushi++;  
		   		player.draw();
		   	 //player.addMark('wwyj_toushi');               
           player.update(); 				 
		     	player.markSkillCharacter('wwyj_toushi',target.name,get.skillTranslation(skill,player),get.skillInfoTranslation(skill));
			}        
			else event.finish();                                        				
    },
       ai:{
         result:{
            target:function (player,target){
              if(player.storage.wwyj_toushi<=2) return Math.random();
              if(target.hasSkill('wwyj_yanyu')) return 0;  
              if(target.countCards('h')>2) return 1; 
                  return target.countCards('h');
              },
            },            
            order:8,
            threaten:0.5,
        },  
            },
           	
           "wwyj_qiusheng":{              
			    audio:["zaiqi",2],
                trigger:{                   
                    player:"dying",
                },                
                forced:true,                
                filter:function (event,player){
          return player.hp<=0&&player.storage.wwyj_juedi2>0;
      },
                content:function (){                        
                player.storage.wwyj_juedi2--;
                player.recover(2-player.hp);                
                if(player.storage.wwyj_juedi2<=0){                    
                    player.unmarkSkill('wwyj_juedi2');    
                    player.removeSkill('wwyj_juedi2');                              
                }
                player.update();
    },
            },
            "wwyj_juedi2":{              			                         
                marktext:"废",
                intro:{
                    name:"绝地",
                    content:"已有#个废标记",
                },                      
                forced:true,
                popup:false,
                init:function (player){
                    player.storage.wwyj_juedi2=0;
                    player.unmarkSkill('wwyj_juedi2');
                },
                },
          	"wwyj_juedi":{              
			            audio:["baonu",2],
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },                
                forced:true,            
                derivation:"wwyj_qiusheng", 
                filter:function (event,player){
          return event.num>0;
      },
                content:function (){
                'step 0'
                event.num=0;
                'step 1'
                if(!player.hasSkill('wwyj_juedi2')){
                    player.addSkill('wwyj_juedi2');
                }
               // player.storage.wwyj_juedi2++;               
               // player.markSkill('wwyj_juedi2');
               player.addMark('wwyj_juedi2');
                event.num++;
                player.update();
                if(player.storage.wwyj_juedi2>=5){
                    player.addSkill('wwyj_qiusheng');
                    player.awakenSkill('wwyj_juedi');
                    player.$fullscreenpop('绝地求生','fire');
                    event.finish();
                }
                'step 2'
                if(event.num<trigger.num){                   
                    event.goto(1);
                }
                else{
                    event.finish();
                }
    },
            },
			"wwyj_nvshen":{              
			    audio:["jieyin",2],
                trigger:{
                    global:"damageEnd",                    
                },                
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                filter:function (event,player){
          return player!=event.player&&event.player.sex=='male'&&player.countCards('h')>0;
      },
                content:function (){
                'step 0'                
				trigger.player.viewHandcards(player);
				player.say(['快到我怀里来','看看我的内心，与君心心相印'].randomGet());
				if(!trigger.player.countCards('h')){
					trigger.player.draw();
					event.finish();
				}else{
					player.viewHandcards(trigger.player);
				}
                'step 1'
                var cards=player.getCards('he');
					var suits=[];
					for(var i=0;i<cards.length;i++){
					    if(!suits.contains(get.suit(cards[i]))){
							suits.push(get.suit(cards[i]));
						}
					}
				var tcards=trigger.player.getCards('he');
					var tsuits=[];
					for(var i=0;i<tcards.length;i++){
					    if(!tsuits.contains(get.suit(tcards[i]))){
							tsuits.push(get.suit(tcards[i]));
						}
					}                
                if(suits.length==tsuits.length){                   
                    trigger.player.recover();
                }
                else{
                    game.asyncDraw([player,trigger.player]);
					event.finish();
                }
    },
            },
           "wwyj_guanli":{
		          		 audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,                           
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
          filter:function (event,player){
					      return true;              
				},
                content:function (){
        "step 0"             
        event.card=target.getCards('h').randomGet();
        "step 1"
         target.discard(event.card);
       "step 2"
        if(get.type(event.card)=='basic'){
            player.useCard({name:'sha',isCard:true},target,false);
        }
        else if(get.type(event.card,'trick')=='trick'){
            player.useCard({name:'juedou',isCard:true},'nowuxie',target,'noai').animate=false;
        }
        else{
            //player.gain(event.card,'draw');
            player.useCard(event.card,player);
        }
    },
       ai:{
         result:{
            target:function (player,target){         
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
             "wwyj_shengshen":{
                audio:["jijiu",2],
                trigger:{
                    global:"dying",
                },
                round:1,
                filter:function (event,player){
        return true;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){
                'step 0'
                event.cards=get.cards(2);
                player.showCards(event.cards);
                'step 1'           
           if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])=='red'){             
               event.goto(2);
           }
           if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])!='red'){
               event.cards.remove(event.cards[1]);
               event.goto(2);
           }
           if(get.color(event.cards[0])!='red'&&get.color(event.cards[1])=='red'){
               event.cards.remove(event.cards[0]);
               event.goto(2);
           }
           if(get.color(event.cards[0])!='red'&&get.color(event.cards[1])!='red'){
               event.cards.remove(event.cards[0]);
               event.cards.remove(event.cards[1]);
               if(player.countCards('h',{color:'red'})){
                   event.goto(4);
               }
               else event.finish();
           }                        
          'step 2'        
           player.chooseCardButton('选择其中一张红色牌',event.cards,1,true).set('ai',function(button){
                    //    if(get.color(button.link=='black')) return false;
                                return 10-get.value(button.link);
                        });                        
            'step 3'
          if(result.bool){                
                            event.cards.remove(result.links[0]);
                            game.log(player,'弃置了',result.links[0]);
                            player.useCard({name:"tao",isCard:true},trigger.player,false);
                            event.finish();
                        }
                        else event.finish();
          'step 4'
          player.chooseBool('是否弃置你的所有红色手牌，视为对'+get.translation(trigger.player)+'使用一张【桃】').set('ai',function(){               
               if(player.countCards('h',{color:'red'})<4&&get.attitude(_status.event.player,trigger.player)>0) return true;       
                   return false;
          });
       'step 5'
        if(result.bool){
            player.discard(player.getCards('h',{color:'red'}));
            player.useCard({name:"tao",isCard:true},trigger.player,false);
        }
    },
                ai:{
                    order:3,
                },
            },
        		"wwyj_kaiche":{
								audio:"ext:文武英杰:1",
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				filter:function (event,player){				
					/*return game.hasPlayer(function(current){
            return current.sex=='female';
         });  */
         return player.isAlive();             
				},			
				mod:{
					maxHandcard:function (player,num){
					return num+game.countPlayer(function(current){
                return current.sex=='female';
            });
					},
				},
				content:function (){
				var num=game.countPlayer(function(current){
            return current.sex=='female';
         });                 
					trigger.num+=Math.max(1,num);
				},
				ai:{
					threaten:1.3,
				},
			},         
			"wwyj_kazhan":{              
			         audio:["yuhua",2],
                trigger:{
                    global:"changeHp",
                },
                prompt:function (event,player){					
					return '是否令'+get.translation(event.player)+'随机使用一张装备牌？';
				},
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },             
                filter:function (event,player){
          return event.player.isAlive()&&event.player.hp==1;
      },
                content:function (){
       event.card=get.cardPile(function(card){
							return get.type(card)=='equip'&&!trigger.player.isDisabled(get.subtype(card));
						});
						if(event.card){
							trigger.player.chooseUseTarget(event.card,'noanimate','nopopup',true);					
						}
						else{
							event.finish();
						}    
    },
            },
            
            "wwyj_jiguang":{
		          	audio:"ext:文武英杰:2",         
                    group:["wwyj_jiguang_sha","wwyj_jiguang_rsha","wwyj_jiguang_rshan","wwyj_jiguang_shan","wwyj_jiguang_shan2"],               
            },
                
             "wwyj_jiguang_shan2":{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				filter:function (event,player){
					return event.skill=='wwyj_jiguang_shan'&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                                          
				},
				content:function (){					
         "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_shan2_info,true,function(card,player,target){
            return target.countCards('e',{subtype:['equip2','equip3','equip5']});
        }).set('ai',function(target){
            if(player.hp<=2&&!player.countCards('h','shan')) return Math.random();
            return -get.attitude(_status.event.player,target);            
        });
         "step 1"
        if(result.bool){         
           event.target=result.targets[0];     
           player.line(event.target,'green');                
           event.cards=event.target.getCards('e',{subtype:['equip2','equip3','equip5']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'的一张装备区的防具牌或防御马或宝物牌',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){
            //result.links[0].discard();         
             event.target.discard(result.links[0]);              
        }       
        else event.finish();
                                              
				},
			},
			
			"wwyj_jiguang_shan":{				
				prompt:'当你需要使用【闪】时，可弃置一名角色的一张防具牌或防御马或宝物牌，视为使用之',
				enable:'chooseToUse',
				filter:function (event,player){
					//return !_status.dying.length;
					return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     onuse:function (result,player){
         game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet()); 
     },
     viewAsFilter:function (player){
     return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                 
     },	
				viewAs:{name:'shan'},				
				ai:{
				    order:5,
					threaten:1.5,
					respondShan:true,
				}
			},		
						
           "wwyj_jiguang_sha":{		          		 
                enable:"phaseUse",
                usable:1,                                 
                filterTarget:function (card,player,target){
        return target.countCards('e',{subtype:['equip1','equip4']});
    },
          filter:function (event,player){                   
              var num=game.countPlayer(function(current){
                    //return player.canUse('sha',current)&&get.distance(player,current,'attack')<=1;
					return player.canUse('sha',current)&&player.inRange(current);
         });                         
				//return player.countUsed('sha')==0&&num>0&&game.hasPlayer(function(current){
				return num>0&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']});
         });                                                   
				},
                content:function (){
        "step 0"             
        event.cards=target.getCards('e',{subtype:['equip1','equip4']});
        "step 1"        
         player.chooseCardButton(event.cards,1,'弃置'+get.translation(target)+'装备区的武器牌或进攻马，视为使用一张【杀】',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 2"
        if(result.bool){
            game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet()); 
            //result.links[0].discard();           
            target.discard(result.links[0]);  
            player.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha',isCard:true},false,false);             
            //player.getStat().card.sha++;
        }       
        else event.finish();
    },
       ai:{
         result:{
            target:function (player,target){
              var num=game.countPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']})&&get.attitude(player,current)<=0;
              }); 
              var num2=game.countPlayer(function(current){
                    return player.canUse({name:'sha'},current)&&get.attitude(player,current)<=0;
              });         
              if(num<1&&num2>0&&!player.countCards('h','sha')&&target.countCards('h')>2) return Math.random();   
                return -target.countCards('h')-3;
            },
                    },
                    order:6,
                    threaten:0.5,
        },  
            },
                    
                "wwyj_jiguang_rshan":{          
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,           
                filter:function (event,player){            
   // if(event.parent.name!='sha') return false;
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                                          
    },
                content:function (){
              "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_rshan_info,function(card,player,target){
            return target.countCards('e',{subtype:['equip2','equip3','equip5']});
        }).set('ai',function(target){
            var num=game.countPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']})&&get.attitude(player,current)<=0;
            });     
            if(num<1&&!player.countCards('h','shan')) return Math.random();
            return -get.attitude(_status.event.player,target);            
        });
              "step 1"
         if(result.bool){         
           event.target=result.targets[0];      
           player.line(event.target,'green');                   
           event.cards=event.target.getCards('e',{subtype:['equip2','equip3','equip5']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'装备区的一张防具牌或防御马或宝物牌',true).set('filterButton',function(button){           
             /*return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });*/
             return true;
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){               
           trigger.untrigger();
          // result.links[0].discard();         
           event.target.discard(result.links[0]);
           trigger.responded=true;
          // trigger.result={bool:true,card:{name:'shan'}};  
           trigger.result={bool:true,card:{name:'shan',isCard:true}};                                           
           player.logSkill('wwyj_jiguang');     
           game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet());                                
        }       
        else event.finish();                                                               
    },
            },
            "wwyj_jiguang_rsha":{           
                trigger:{
                    player:"chooseToRespondBegin",
                },       
                direct:true,      
                filter:function (event,player){             
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
         return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']});
         });            
    },
                content:function (){     
          "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_rsha_info,function(card,player,target){
            return target.countCards('e',{subtype:['equip1','equip4']});
        }).set('ai',function(target){
            var num=game.countPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']})&&get.attitude(player,current)<=0;
              });     
            if(num<1&&!player.countCards('h','sha')) return Math.random();
            return -get.attitude(_status.event.player,target);            
        });
         "step 1"
         if(result.bool){         
           event.target=result.targets[0];       
           player.line(event.target,'green');               
           event.cards=event.target.getCards('e',{subtype:['equip1','equip4']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'装备区的一张武器牌或进攻马',true).set('filterButton',function(button){           
             /*return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });*/
             return true;
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){               
           trigger.untrigger();
         //  result.links[0].discard();        
           event.target.discard(result.links[0]);
           trigger.responded=true;
           //trigger.result={bool:true,card:{name:'sha'}};   
           trigger.result={bool:true,card:{name:'sha',isCard:true}};                                            
           player.logSkill('wwyj_jiguang');     
           game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet());                 
        }       
        else event.finish();                                 
    },
            },
 
      "wwyj_jianghun":{
                trigger:{
                    global:"roundStart",
                },
                audio:["huashen",2],
                forced:true,
                filter:function (event,player){
                    if(!lib.characterSort.diy||!lib.characterSort.diy.diy_key) return false;
                    return player.storage.wwyj_jianghun.length<(lib.characterSort.diy.diy_key.length-1);
                },
                init:function (player,skill){
                    if(!player.storage[skill]) player.storage[skill]=[];
                    if(!player.storage['zhuSkill_'+skill]) player.storage['zhuSkill_'+skill]=[];
                },
                intro:{
                    content:"characters",
                },
                content:function (){
                    "step 0"
                    var list=lib.characterSort.diy.diy_key.slice(0);
                    list.remove('key_umi2');
                    list.randomSort();
                    list.remove('key_yuri');
                    list.unshift('key_yuri');
                    list.removeArray(player.storage.wwyj_jianghun);
                    var name=list[0];
                    player.storage.wwyj_jianghun.push(name);
                    var skills=lib.character[name][3];
                    skills.removeArray(['yusa_misa','misa_yusa','sunohara_chengshuang','yuri_wangxi']);
                    var skill=skills.randomGet();
                    player.addSkill(skill);
                    player.flashAvatar('wwyj_jianghun',skill);   
                    if(lib.skill[skill].zhuSkill) player.storage.zhuSkill_wwyj_jianghun.push(skill);
                    player.markSkill('wwyj_jianghun');
                    player.mark(skill,{
                        name:get.translation(skill),
                        content:lib.translate[skill+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(skill)+'】');
                    event.dialog=ui.create.dialog('<div class="text center">你获得了'+get.translation(name)+'的一个随机技能【'+get.translation(skill)+'】',[[name],'character']);
                    game.delay(3);
                    "step 1"
                    event.dialog.close();
                },
                ai:{
                    order:9,
                },
            },
        "wwyj_chengzhi":{
          audio:["xinsheng",2],
          trigger:{global:'dieBegin'},
          filter:function (event,player){
              return event.player.group!='key';
          },
          content:function (){
              var cards=[];
              var hs=trigger.player.getCards('hej');
           for(var i=0;i<hs.length;i++){
              cards.push(game.createCard(hs[i]))
           }
           if(cards.length) player.gain(cards,'gain2','log');
         	  	var listm=[];
	           	var listv=[];
         		if(trigger.player.name1!=undefined&&lib.character[trigger.player.name1]) listm=lib.character[trigger.player.name1][3];
	         	else if(lib.character[trigger.player.name]) listm=lib.character[trigger.player.name][3];
         		if(trigger.player.name2!=undefined&&lib.character[trigger.player.name2]) listv=lib.character[trigger.player.name2][3];
         		listm=listm.concat(listv);
         		for(var i=0;i<listm.length;i++){
		        	player.addSkill(listm[i]);
	        		var info=get.info(listm[i]);
        			if(info&&info.zhuSkill){
           			 if(!player.storage.zhuSkill_wwyj_chengzhi) player.storage.zhuSkill_wwyj_chengzhi=[];
	           		 player.storage.zhuSkill_wwyj_chengzhi.add(listm[i])
	         		}
          		}
            },
             ai:{
                    order:9,
                },
         },
         "wwyj_qianxu":{
         trigger:{
          player:"shaBegin",
     },
     forced:true,
     content:function (){  
        game.playwwyj(['wwyj_qianxu1','wwyj_qianxu2'].randomGet()); 
     },
				mod:{
					targetInRange:function (card,player,target,now){
				 	  if(card.name=='sha'&&get.distance(player,target)<=1) return false;
							if(card.name=='sha') return true;
					},
					targetEnabled:function (card,player,target,now){
						 if(card.name=='sha'&&get.distance(player,target)<=1) return false;
					},
					selectTarget:function (card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]++;
					},					
				},
			},
         "wwyj_yixue":{
              audio:"ext:文武英杰:1",
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,                  
                filter:function (event,player){
          return player.countCards('h')&&event.player!=player&&event.player.isDamaged();
      },
                content:function (){
                "step 0"		
					player.chooseCard('h','是否交给'+get.translation(trigger.player)+'一张手牌？').ai=function(card){
           if(get.attitude(player,trigger.player)>0){
               if(player.countCards('h')>3) return 8-get.value(card);
                   return 6-get.value(card);
                    }
           return 0;         
       };                					
					"step 1"
					if(result.bool){
			     		player.logSkill("wwyj_yixue",trigger.player);
				     	//	player.lose(result.cards);       
            player.$give(result.cards,trigger.player);
            trigger.player.gain(result.cards,player);         
					}
					else{
				    		event.finish();
					}
					"step 2"
					if(trigger.player.countCards('h')>player.countCards('h')){
              player.draw();
          }
          else{
            event.finish();   
          } 
    },
    	ai:{
					expose:0.2,
					order:6,
       threaten:0.3,
				}
            },
         "wwyj_liuxi1":{              
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
          return event.card.name=='sha';
      },
                content:function (){
        //game.playwwyj('wwyj_liuxi');
        player.draw();
        player.turnOver(true);        
    },
            },
         "wwyj_liuxi":{
              audio:"ext:文武英杰:1",
                trigger:{
                    target:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
          return !event.player.isTurnedOver();
      },
                content:function (){
                if(player.countCards('h')<player.maxHp){
        player.draw(player.maxHp-player.countCards('h'));
        }
        trigger.player.addTempSkill('wwyj_liuxi1',{player:'shaAfter'});
    },
    ai:{					
					effect:{
						target:function (card,player,target){
							if(get.tag(card,'damage')){
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)<0){
									if(player.needsToDiscard()){
										num=0.3;
									}
									else{
										num=0.1;
									}
								}
								if(target.hp>=4) return [1,num*-0.5];
								if(target.hp==3) return [1,num*-1.5];
								if(target.hp<=2) return [1,num*-2.5];
							}
						}
					}
				},
            },
          "wwyj_daigeng":{
              audio:"ext:文武英杰:1",
              round:1,
                trigger:{
                    global:"turnOverEnd",
                },              
                filter:function (event,player){
          return event.player.isTurnedOver();
      },
                content:function (){
        player.insertPhase();
    },
            },
      "wwyj_jipin":{
              audio:"ext:文武英杰:1",
                trigger:{
                    global:"drawBegin",
                },       
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },     
                prompt:function (event,player){					
					return '是否令'+get.translation(event.player)+'额外摸一张牌？';
				},
                filter:function (event,player){
          return event.player.countCards('h')<event.player.hp;
      },
                content:function (){
        trigger.num++;
    },
            },
			"wwyj_chengpiao":{
		          		 audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                //filterCard:true,
                //selectCard:1,
               // position:'he',                
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filter:function (event,player){    
        return player.isAlive();
    },              
               /* check:function (card){
        return 6-get.value(card);
    },*/
                content:function (){
        "step 0"
       // target.gain(cards,player);         
        event.cards=target.getCards('h');
        "step 1"
         player.chooseCardButton(event.cards,1,'选择使用'+get.translation(target)+'的一张手牌').set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 2"
        if(result.bool){
           // target.lose(result.links[0]);       
            target.$give(result.links[0],player);
            player.chooseUseTarget(result.links[0],true);            
        }       
        else event.finish();
    },
       ai:{
         result:{
            target:function (player,target){
             // if(target.countCards('h')<3) return 1;   
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
        
      "wwyj_touliang1":{
    	mark:true,
    	marktext:"凉",
				mod:{
					cardEnabled2:function (card){
						if(get.type(card)=='basic') return false;
					},
				},
				intro:{
					content:"不能使用或打出基本牌",
				},
				},
                "wwyj_touliang":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseEnd",
                },                                       
                direct:true,
                filter:function (event,player){            
        return true;
    },
                content:function (){
                'step 0'      
      var cards=player.getCards('h'); 
      var suits=[];   
      for(i=0;i<cards.length;i++){
          if(!suits.contains(get.suit(cards[i]))){
          suits.push(get.suit(cards[i])); 
          }
      }
      event.num=suits.length;   
       'step 1'
       player.chooseTarget('选择发动【透凉】的目标',[1,event.num],lib.translate.wwyj_touliang_info,function(card,player,target){
            return target!=player&&player.inRange(target);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 2'
        if(result.bool){       
            event.num1=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
          'step 3'                            
        if(event.num1<event.targets.length){  
            //event.targets[event.num1].damage();                                           
            game.asyncDraw([event.targets[event.num1],player]);     
            event.targets[event.num1].addTempSkill('wwyj_touliang1',{player:'phaseEnd'});     
            player.logSkill("wwyj_touliang");                              
            event.num1++;
            event.redo();
        }
        else{
            event.finish();      
        } 
    },
            },
              "wwyj_kangxing":{
                audio:"ext:文武英杰:1",
                trigger:{
                    target:"useCardToBefore",
                },
                direct:true,
                priority:8,
                filter:function (event,player){
                if(event.targets.length>1) return false;
           return player!=event.player&&player.countCards('h');   
    },
                content:function (){
    "step 0"               
      player.chooseCard('弃置一张类型相同的手牌，使此牌目标对调','h',function(card){
            return get.type(card)==get.type(trigger.cards[0]);
        }).ai=function(card){
            return 12-get.value(card);
        };                
    "step 1"
    if(result.bool){
        player.logSkill('wwyj_kangxing');
        player.discard(result.cards);
        player.line(trigger.player);
        trigger.target=trigger.player;
        trigger.player=player;
        trigger.untrigger();
        trigger.trigger('useCardToBefore');
       }       
       else event.finish();            
    },
            },            
           
         "wwyj_kangfu":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"dyingAfter",
                    source:"dieBegin",
                },
                forced:true,
                 mod:{
                ignoredHandcard:function (card,player){
            if(get.type(card)=='equip'){
                return true;
            }
        },
                    attackFrom:function (from,to,distance){ 
            return distance-1; 
        },
                },               
                filter:function (event,player){
        return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length>0;
    },
                content:function (){ 
				player.removeSkill('wwyj_likedead');
                player.recover();                            
                player.chooseToEnable();          
    },
            },
        "wwyj_chehuo":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                priority:1,
                forced:true,                               
                content:function (){
                    player.disableEquip(1); 
                    player.disableEquip(2);   
                    player.disableEquip(3);     
                    player.disableEquip(4);     
                    player.disableEquip(5);  
                    player.addSkill('wwyj_likedead');  
                    player.say('等等！别退出，别重启，这个是技能效果，我还没死！');    
               },
          },
        "wwyj_jinzhu_shan":{
           audio:["pyzhuren",2],
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,           
                filter:function (event,player){ 
                if(!player.countCards('he',{type:'equip'})) return false;    
    //if(event.parent.name!='sha') return false;
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return true;                                  
    },
                content:function (){
              "step 0"
        player.chooseCard(get.prompt2('wwyj_jinzhu'),'he',function(card){
                        return get.type(card)=='equip';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('he',{type:'equip'})){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
               if(result.bool){                    
                        trigger.untrigger();
                        trigger.responded=true;
                       // trigger.result={bool:true,card:{name:'shan'}};
                        trigger.result={bool:true,card:{name:'shan',isCard:true}};
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);                        
                        player.logSkill('wwyj_jinzhu');   
                       // game.playwwyj('wwyj_jinzhu');                      
                    }                    
        else event.finish();   
    },
            },
            "wwyj_jinzhu_sha":{
            audio:["pyzhuren",2],
                trigger:{
                    player:"chooseToRespondBegin",
                },       
                direct:true,      
                filter:function (event,player){    
               if(!player.countCards('he',{type:'equip'})) return false;   
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
         return true;
    },
                content:function (){     
                    "step 0"
        player.chooseCard(get.prompt2('wwyj_jinzhu'),'he',function(card){
                        return get.type(card)=='equip';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('he',{type:'equip'})){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        trigger.untrigger();
                        trigger.responded=true;
                      //  trigger.result={bool:true,card:{name:'sha'}};
                        trigger.result={bool:true,card:{name:'sha',isCard:true}}; 
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);            
                        player.logSkill('wwyj_jinzhu');    
                      //  game.playwwyj('wwyj_jinzhu');                     
                    }                    
        else event.finish();                
    },
            },
            "wwyj_jinzhu":{
                audio:["pyzhuren",2],
                enable:"chooseToUse",             
                group:["wwyj_jinzhu_sha","wwyj_jinzhu_shan"],                
                filter:function (event,player){    
                if(!player.countCards('he',{type:'equip'})) return false;                                            
        if((event.filterCard({name:'sha'},player,event))||
            (event.filterCard({name:'shan'},player,event))||
            (event.filterCard({name:'jiu'},player,event))||
            (event.filterCard({name:'tao'},player,event))){
   return player.isAlive();    
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','ice']);
                list.push(['基本','','sha','fire']);
                list.push(['基本','','sha','thunder']);
            }
                    if(event.filterCard({name:'shan'},player,event)){
                list.push(['基本','','shan']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('烬铸',[list,'vcard'],'hidden');
        },
                    check:function (button){
            var player=_status.event.player;
            var card={name:button.link[2],nature:button.link[3]};
            if(game.hasPlayer(function(current){
                return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
            })){
                switch(button.link[2]){
                    case 'tao':return 5;
                    case 'jiu':return 3.01;
                    case 'shan':return 3.01;
                    case 'sha':
                        if(button.link[3]=='fire') return 2.95;
                        else if(button.link[3]=='fire') return 2.92;
                        else return 2.9;
                }
            }
            return 0;
        },
                    backup:function (links,player){
            return {
                  filterCard:function (card,player){                    
                      return get.type(card)=='equip';
                },
                selectCard:1,
                position:'hes',
                viewAsFilter:function (player){return player.isAlive()},
                viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null,isCard:true},                                    
                popname:true,
                ignoreMod:true,
                precontent:function (){                            
                    player.logSkill('wwyj_jinzhu'); 
                },
            }
        },
                    prompt:function (links,player){
            return '视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
        },
                },
                ai:{
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                return 3.1;
            }
            return 2.9;
        },
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    result:{
                        player:1,
                    },
                },
            },
            	"wwyj_likedead":{
	    init:function(player){
            player.classList.add('likedead');
        },
		onremove:function(player){
            player.classList.remove('likedead');
        },
    },		
             "wwyj_tuikeng":{                     
                trigger:{
          player:"changeHp",
     },
     forced:true,
     content:function (){  
        game.playwwyj('wwyj_qianfu1'); 
     },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+to.getDamagedHp();
        },                    
                },
            },
            "wwyj_jilve_delete":{
     forced:true,
     trigger:{
     player:"phaseEnd",
     },
     popup:false,
     filter:function (event,player){
					return true;
				},
     content:function (){
     player.storage.wwyj_jilve=[];
     },
     },
  
			"wwyj_jilve":{
			audio:"ext:文武英杰:1",
				enable:'phaseUse',
				filter:function (event,player){				  
				  if(player.getStat().skill.wwyj_jilve>=player.hp) return false; 
					return  player.countCards('h')&&player==_status.currentPhase&&event.type!='wuxie';
				},
				group:["wwyj_jilve_delete"],
				init:function (player){
					if(!player.storage.wwyj_jilve) player.storage.wwyj_jilve=[];
				},
				chooseButton:{
					dialog:function (event,player){
					var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(player.storage.wwyj_jilve.contains(name)) continue;
							if(name=='sha'){
								list.push(['基本','','sha']);
								list.push(['基本','','sha','ice']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','thunder']);
							}
							else if(get.type(name)=='trick') list.push(['锦囊','',name]);
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}
						if(list.length==0){
							return ui.create.dialog('极略已无可用牌');
						}
						return ui.create.dialog('极略',[list,'vcard']);
					},
					filter:function (button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function (button){
						var player=_status.event.player;
						var players=game.filterPlayer();
						if(player.countCards('h',button.link)) return 0;
						if(button.link[2]=='wuzhong'){
							if(player.countCards('h')<player.hp){
								return 3+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='tao'){
							return 3+Math.random();
						}
						if(button.link[2]=='sha'){
							return 2+Math.random();
						}
						if(button.link[2]=='juedou'){
							return 2+Math.random();
						}
						if(button.link[2]=='guohe'){
							return 2+Math.random();
						}
						if(button.link[2]=='shunshou'){
							for(var i=0;i<players.length;i++){
								if(player.canUse('shunshou',players[i])&&get.attitude(player,players[i])<0){
									return 2+Math.random();
								}
							}
							return 0;
						}
						if(button.link[2]=='tiesuo'){
							return 1+Math.random();
						}
						if(button.link[2]=='jiu'){
							if(get.effect(player,{name:'jiu'})>0){
								return 1+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='nanman'||button.link[2]=='wanjian'||button.link[2]=='taoyuan'||button.link[2]=='wugu'){
							var eff=0;
							for(var i=0;i<players.length;i++){
								if(players[i]!=player){
									eff+=get.effect(players[i],{name:button.link[2]},player,player);
								}
							}
							if(eff>0){
								return 1+Math.random();
							}
							return 0;
						}
						return Math.random();

					},
					backup:function (links,player){
						return {
						  filterCard:true,
         selectCard:1,
         position:'hs',
         viewAsFilter:function (player){return player.countCards('h')},   
							popname:true,
							check:function (card){
								return 6-get.value(card);
							},			
						//	viewAs:{name:links[0][2],nature:links[0][3]},
						viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null,isCard:true},    
							onuse:function (result,player){
		   			 game.playwwyj('wwyj_jilve1'); 
								player.storage.wwyj_jilve.add(result.card.name);
							},
						}
					},
					prompt:function (links,player){
						return '视为使用'+(get.translation(links[0][3])||'')+get.translation(links[0][2]);
					}
				},
				ai:{
					order:4,
					result:{
						player:function (player){
							var allshown=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].ai.shown==0){
									allshown=false;
								}
								if(get.attitude(player,players[i])>0){
									return 1;
								}
							}
							if(allshown) return 1;
							return 0.8;
						}
					},
					threaten:1.9,
				},
            },
                   
         "wwyj_yanguan":{
                audio:"ext:文武英杰:1",
                trigger:{
                    //global:"useCardToTarget",
                    global:"useCardToPlayer",
                },
                usable:1,     
                direct:true,                   
                filter:function (event,player){
          return event.player!=player&&player.countCards('h')&&event.card&&event.card.isCard&&get.type(event.card)=='trick';
      },                
                content:function (){              
                  'step 0'   
                 player.chooseToDiscard("是否弃置一张手牌对"+get.translation(trigger.player)+"发动严管？").ai=function (card){
                    if(get.attitude(player,trigger.player)<=0){
                        if(player.countCards('h')>3) return 10-get.value(card);
                        return 6-get.value(card);
                    }
                    return 0;
                };                
             'step 1'   
        if(result.bool){               
            //player.discard(event.cards);     
            player.gain(trigger.cards,'gain2');
            //var targets=game.filterPlayer();
            //trigger.targets.remove(targets);  
            trigger.targets.length=0;                                                                  
            trigger.cancel(); 
            //trigger.getParent().excluded.add(trigger.targets);      
            player.logSkill('wwyj_yanguan');       
        }       
        else{
            player.getStat().skill.wwyj_yanguan--;
            event.finish();   
        }                         
        },
            },
             "wwyj_lilun":{
             audio:"ext:文武英杰:1",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
          return event.card&&event.card.isCard&&get.type(event.card)=='trick';
      },
                content:function (){
        'step 0'      
        event.cards=get.cards(3);     
        event.num=2;
          'step 1'        
           player.chooseCardButton('选择获得其中一张牌',event.cards,1).set('ai',function (button){                    
                return 15-get.value(button.link);
           });                        
            'step 2'
          if(result.bool){                
             event.cards.remove(result.links[0]);
             player.gain(result.links[0],'gain2');
             game.log(player,'获得了',result.links[0]);                            
             event.goto(3);
          }
          else event.finish();
            'step 3'            
       /* player.chooseCardButton('理论:选择放在牌堆顶的牌，先选择的在上',2,event.cards,true); 
            'step 4' 
        for(var i=1;i>=0;i--){ 
            event.cards.remove(result.buttons[i].link); 
            ui.cardPile.insertBefore(result.buttons[i].link,ui.cardPile.firstChild); 
        } */   
          player.chooseCardButton('将这'+get.cnNumber(event.num)+'张牌置于牌堆顶',event.cards,true).set('ai',function (button){                    
              return 10-get.value(button.link);
           });                                                
           'step 4'
            if(result.bool){
                event.cards.remove(result.links[0]);                        
                ui.cardPile.insertBefore(result.links[0],ui.cardPile.firstChild);
                game.updateRoundNumber();
             }
             'step 5'                
                event.num--;
                if(event.num>0){
                    event.goto(3);
                }                    
                else event.finish();
        },
            },
                "wwyj_jinxiudraw":{                
                trigger:{
                    player:"phaseEnd",
                },                
                forced:true,
                content:function (){
                game.playwwyj('wwyj_jinxiu1'); 
                player.draw(player.storage.wwyj_jinxiu);
                player.storage.wwyj_jinxiu=0;
                player.unmarkSkill('wwyj_jinxiu');
                player.update();
               },
               },           
                 "wwyj_jinxiu":{
              //  audio:"ext:文武英杰:1",
                trigger:{
                    source:"damageEnd",
                },    
                marktext:"修",
                intro:{
                    name:"进修",
                    content:"已有#个修标记",
                },
                group:"wwyj_jinxiudraw",            
                forced:true,
                init:function (player){
                    player.storage.wwyj_jinxiu=0;
                    player.unmarkSkill('wwyj_jinxiu');
                },
                content:function (){
                player.storage.wwyj_jinxiu++;
                player.markSkill('wwyj_jinxiu');
                player.update();
               },
               },   
          
            "wwyj_ciya":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseDrawBegin",
                },   
                direct:true,             
                filter:function (event,player){				
					return game.hasPlayer(function(current){
            return current!=player&&current.inRange(player);
         });                  
				},			
                content:function (){
               'step 0'                     
             event.num=0;
             player.chooseTarget(get.prompt2('wwyj_ciya'),[1,Infinity],function(card,player,target){
            return target!=player&&target.inRange(player);
        },function(target){
            return -get.attitude(player,target);
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('wwyj_ciya');     
            trigger.num--;           
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
    'step 2' 
        if(event.num<event.targets.length){
            player.useCard({name:'sha',isCard:true},event.targets[event.num],false);         
            event.num++;
            event.redo();
         }
         else event.finish();     
                },
                 ai:{			
              					order:5,
             			},
            },
                
            "wwyj_qianzhui":{
                audio:["xingshang",2],
                trigger:{
                    global:"dieBegin",
                },
                filter:function (event,player){
                    return player!=event.player;   
                },
                //forced:true,
                //juexingji:true,	
                limited:true,		
                mark:true,
                init:function (player){
				    player.storage.wwyj_qianzhui=false;
		        },
		        check:function (event,player){
                if(event.player.skills.length<=0) return 0;
                    return Math.random();
                },         
                content:function (){   
                'step 0'   
                player.line(trigger.player,'green');   
                player.$fullscreenpop('( •̥́ ㉨ •̀ू )','fire');  
                game.wwyj_background(); 
                ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');                
                player.storage.wwyj_qianzhui=true;                
                player.awakenSkill('wwyj_qianzhui'); 
                'step 1'   
                event.skills=['wwyj_qiandao','wwyj_yingguai'];
               /*  event.skills=[];
        var skills=player.skills.slice(0);
        for(var i=0;i<skills.length;i++){
            var info=get.info(skills[i]);
            if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)){
                event.skills.push(skills[i]);
                if(event.skills.contains('wwyj_qianzhui')){
                    event.skills.remove('wwyj_qianzhui');
                }
                    event.skills.removeArray(['wwyj_zhwpy','jstx_jisha','xjstx_jisha','xwj_jisha','xin_jisha']);
                   // if(event.skills.contains('jstx_jisha')) event.skills.remove('jstx_jisha');
                 //   if(event.skills.contains('xjstx_jisha')) event.skills.remove('xjstx_jisha');
                   // if(event.skills.contains('xwj_jisha')) event.skills.remove('xwj_jisha');
                 //   if(event.skills.contains('xin_jisha')) event.skills.remove('xin_jisha');
                  
            }
        };  */    
          'step 2'   
        if(event.skills.length>0){
            player.chooseControl(event.skills).set('prompt','请选择你的要失去的技能').set('ai',function(){
            return event.skills.randomGet();
            });
        }
        else{
             event.goto(4);
        }
          'step 3'                       
        player.removeSkill(result.control);
        player.popup(result.control,'fire');       
        game.log(player,'失去了技能','#g【'+get.translation(result.control)+'】');
         'step 4'   
                 event.skills=[];
        var skills=trigger.player.skills.slice(0);
        for(var i=0;i<skills.length;i++){
            var info=get.info(skills[i]);
            if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)) event.skills.push(skills[i]);
        };      
          'step 5'   
        if(event.skills.length>0){
            player.chooseControl(event.skills).set('prompt','请选择你的要获得的技能').set('ai',function(){
            return event.skills.randomGet();
            });
        }
        else{
             event.finish();
        }
          'step 6'               
        player.addSkill(result.control);       
        player.popup(result.control,'fire');       
        var name=trigger.player.name;   
        player.markCharacter(name,null,true,true);  
        player.mark(result.control,{
            name:get.translation(result.control),
            content:lib.translate[result.control+'_info']
        });
        player.flashAvatar('wwyj_qianzhui',result.control);   
        game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
                                  
              /* 
              //  原技能：                   
                'step 0'
                player.line(trigger.player,'green');   
                player.$fullscreenpop('( •̥́ ㉨ •̀ू )','fire');    
                player.removeSkill('wwyj_qiandao');
                player.removeSkill('wwyj_yingguai');
                'step 1'    
        var name=trigger.player.name;                      
       //方法一：
    //   var list=[];
         //var skills=lib.character[name][3];
         //for(var j=0;j<skills.length;j++){
        // if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique){
       //if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]){
      //  list.push(skills[j]);
       //  }
         //}
       // player.addSkill(list);
       //方法二：
       var skills=lib.character[name][3].slice(0);
       player.addSkill(skills);
       player.markCharacter(name,null,true,true);      
       player.storage.wwyj_qianzhui=true;
       player.awakenSkill('wwyj_qianzhui');        */     
    },
       ai:{				
			order:5,
		}, 
            },
            "wwyj_yingguai":{
                audio:"ext:文武英杰:1",
				trigger:{player:'damageEnd'},
				filter:function (event,player){
					return player.isAlive();
				},				
				direct:true,
				content:function (){
				 "step 0"
				player.chooseTarget(get.prompt2('wwyj_yingguai'),function(card,player,target){
            return target!=player;
        },function(target){
            return -get.attitude(player,target);
        });        
        "step 1"
        if(result.bool){
            player.logSkill('wwyj_yingguai',result.targets[0]);
            var card=game.createCard(['lebu','bingliang','shandian'].randomGet());
			      		result.targets[0].addJudge(card);
			      		result.targets[0].$draw(card);
			      		game.delay();
        }
        else{
            event.finish();
        }        					
				},
				ai:{
					maixie_defend:true,
					order:5,
				},
			},        
         "wwyj_qiandao":{
                audio:["tuxi",2],
                trigger:{
                    global:"judgeEnd",
                },     
                frequent:true,
                check:function (event,player){
                   // if(get.attitude(player,event.player)>0&&event.card.name=='lebu'&&result.suit!='heart') return true;
                    return get.attitude(player,event.player)<=0;
                },
                filter:function (event,player){
        return player!=event.player&&event.player.countCards('he');
    },
                content:function (){            
                    player.logSkill('wwyj_qiandao',trigger.player);
                    player.gainPlayerCard(trigger.player,'he',true);                                                           
                },
                ai:{			
              					order:5,
             			},
                },
        "wwyj_zuikui":{
                audio:["huoshou1",2],
                trigger:{
                    global:["dieBegin","turnOverAfter"],
                },   
                //forceDie:true,
                forced:true,
                filter:function (event,player,name){                
                if(name=='turnOverAfter') return event.player.isTurnedOver();
        return game.hasPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                   
    },
                content:function (){                
                    'step 0' 
       player.say('我能令老大断更，我开心'); 
       event.num=0;                       
      event.targets=game.filterPlayer(function(current){
           return current!=player&&current.countCards('he');
         });                             
        event.targets.remove(player);
        event.targets.sort(lib.sort.seat);             
            'step 1'   
        if(num<event.targets.length){
        player.line(event.targets[num],'green');
        event.targets[num].chooseToDiscard('he',true);   
        //event.targets[num].discardPlayerCard(event.targets[num],'he',true);      
        event.num++;
        event.redo();           
        }
        else{
            event.finish();
        }                             
                },
                ai:{			
              					threaten:2.5,
             			},
                },
            "wwyj_jiaoxiao":{
                audio:"ext:文武英杰:2",
                trigger:{
                    player:"damageBegin",
                },     
                forced:true,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){ 
                     if(trigger.source.countCards('he')){
                         player.gainPlayerCard(trigger.source,'he',true); 
                     }
                     trigger.num++;
                     player.say(['我要将无名杀的扩展功能删了，改成龙魂杀','你们等着，等我回来，绝对给你们一波制裁'].randomGet());
                     trigger.source.say('拜托你了，没啥事就别到处BB啦，现在知道错了吧？');
                },
                ai:{			
              					threaten:2.5,
             			},
                },
                "wwyj_daixue":{
                audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                if(player.hasSkill('wwyj_caizhi1')&&target.hasSkill('wwyj_caizhi1')) return false;
                if(player.hasSkill('wwyj_caizhi2')&&target.hasSkill('wwyj_caizhi2')) return false;
                if(player.hasSkill('wwyj_caizhi3')&&target.hasSkill('wwyj_caizhi3')) return false;
                if(player.hasSkill('wwyj_caizhi4')&&target.hasSkill('wwyj_caizhi4')) return false;
        return player!=target;
    },
                filter:function (event,player){
        return player.hasSkill('wwyj_caizhi1')||player.hasSkill('wwyj_caizhi2')||player.hasSkill('wwyj_caizhi3')||player.hasSkill('wwyj_caizhi4');
    },
                content:function (){               
                        'step 0'
                       var list=[];
                if(player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
                if(player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
                if(player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
                if(player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');
                player.chooseControl(list,function(){                                       
                    return Math.floor(Math.random()*list.length);
                }).set('prompt','选择一项需要移动的技能');       
                 'step 1'   
                player.popup(get.translation(result.control));        
                player.removeSkill(result.control);       
                player.unmarkSkill(result.control);
                target.addSkill(result.control);       
                target.markSkill(result.control);
                player.update();
                target.update();
    },
                ai:{
                    threaten:0.3,
                    result:{
                        target:function (player,target){
                        if(player.hp<3) return 0;
                return get.recoverEffect(target,player,target);
            },
                    },
                    order:9,
                },
            },
            "wwyj_caizhidamage":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,                
                filter:function (event,player){                            
        return player.hasSkill('wwyj_caizhi1')||player.hasSkill('wwyj_caizhi2')||player.hasSkill('wwyj_caizhi3')||player.hasSkill('wwyj_caizhi4');
    },
                content:function (){
         "step 0"                    
        var list=[];
        if(player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
        if(player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
        if(player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
        if(player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');        
        var list2=list.randomGet();
        player.popup(get.translation(list2));        
        player.removeSkill(list2);       
        player.unmarkSkill(list2);
        player.update();
        if(list2=='wwyj_caizhi1'){
            game.playwwyj('wwyj_qingxian1'); 
        }       
        if(list2=='wwyj_caizhi2'){
            game.playwwyj(['wwyj_duiyi1','wwyj_duiyi2'].randomGet());     
        }             
        if(list2=='wwyj_caizhi3'){
            game.playwwyj('wwyj_jilve1'); 
        }     
        if(list2=='wwyj_caizhi4'){
            game.playwwyj('wwyj_lilun1'); 
        }                                        
       "step 1"   
        trigger.num--;
    },
            }, 
            "wwyj_caizhigaiming":{       
        trigger:{
           player:"enterGame",
           global:"gameStart",
        },
        forced:true,
        priority:2020,
        filter:function (event,player){           
            return player.name=='wwyj_liangchas';                                   
    },                
            content:function (){
             "step 0"                
             player.chooseBool('是否改名换姓为【玉蝴蝶】？').set('ai',function(){
                   return true;                            
               
                 });                  
             "step 1"
             if(result.bool){ 
               //lib.translate['wwyj_liangchas']='玉蝴蝶';
               ui.background.setBackgroundImage('extension/文武英杰/wwyj_yuhudiebz.jpg');                
               player.init("wwyj_yuhudie");               
               //player.node.name.innerHTML='玉<br>蝴<br>蝶';
               //game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/文武英杰/wwyj_yuhudie.jpg'); 	     
             }                          
             else event.finish();   
               },
               },                                          
            "wwyj_caizhi":{
                trigger:{                   
                    player:"phaseBegin",
                },
                group:["wwyj_caizhidamage","wwyj_caizhigaiming"],
			    derivation:["wwyj_kazhan","wwyj_duiyi","wwyj_jilve","wwyj_lilun"],
                forced:true,
                priority:2020,
                filter:function (event,player){
        return !player.hasSkill('wwyj_caizhi1')||!player.hasSkill('wwyj_caizhi2')||!player.hasSkill('wwyj_caizhi3')||!player.hasSkill('wwyj_caizhi4');
    },
                content:function (){                                 
                var list=[];
                if(!player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
                if(!player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
                if(!player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
                if(!player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');
                var list2=list.randomGet();
                player.popup(get.translation(list2));        
                player.addSkill(list2);
                //player.flashAvatar('wwyj_caizhi',list2);        
                player.markSkill(list2);
                player.update();      
                if(list2=='wwyj_caizhi1'){
                    game.playwwyj('wwyj_qingxian1'); 
                }       
                if(list2=='wwyj_caizhi2'){
                    game.playwwyj(['wwyj_duiyi1','wwyj_duiyi2'].randomGet());     
                }             
                if(list2=='wwyj_caizhi3'){
                    game.playwwyj('wwyj_jilve1'); 
                }     
                if(list2=='wwyj_caizhi4'){
                    game.playwwyj('wwyj_lilun1'); 
                }                                                             
    },
            },           
            "wwyj_caizhi4":{
                marktext:"画",
                forced:true,
                locked:true,
                intro:{
                    name:"画",
                    content:"视为拥有【理论】",
                },
                group:["wwyj_lilun"],
            },
            "wwyj_caizhi3":{
                marktext:"书",
                forced:true,
                locked:true,
                intro:{
                    name:"书",
                    content:"视为拥有【极略】",
                },
                group:["wwyj_jilve","wwyj_jilve_delete"],
            },
            "wwyj_caizhi2":{
                forced:true,
                locked:true,
                marktext:"棋",
                intro:{
                    name:"棋",
                    content:"视为拥有【对弈】",
                },
                group:["wwyj_duiyi"],
            },
            "wwyj_caizhi1":{
                forced:true,
                locked:true,
                marktext:"琴",
                intro:{
                    name:"琴",
                    content:"视为拥有【卡战】",
                },
                group:['wwyj_kazhan'],
            }, 
            
        "wwyj_redaixue":{                
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                if(player.hasSkill('wwyj_recaizhi1')&&target.hasSkill('wwyj_recaizhi1')) return false;
                if(player.hasSkill('wwyj_recaizhi2')&&target.hasSkill('wwyj_recaizhi2')) return false;
                if(player.hasSkill('wwyj_recaizhi3')&&target.hasSkill('wwyj_recaizhi3')) return false;
                if(player.hasSkill('wwyj_recaizhi4')&&target.hasSkill('wwyj_recaizhi4')) return false;
        return player!=target;
    },
                filter:function (event,player){
        return player.hasSkill('wwyj_recaizhi1')||player.hasSkill('wwyj_recaizhi2')||player.hasSkill('wwyj_recaizhi3')||player.hasSkill('wwyj_recaizhi4');
    },
                content:function (){               
                 'step 0'
                var list=[];
                if(player.hasSkill('wwyj_recaizhi1')) list.push('wwyj_recaizhi1');
                if(player.hasSkill('wwyj_recaizhi2')) list.push('wwyj_recaizhi2');
                if(player.hasSkill('wwyj_recaizhi3')) list.push('wwyj_recaizhi3');
                if(player.hasSkill('wwyj_recaizhi4')) list.push('wwyj_recaizhi4');
                player.chooseControl(list,function(){                                       
                    return Math.floor(Math.random()*list.length);
                }).set('prompt','选择一项需要移动的技能');       
                 'step 1'   
                player.popup(get.translation(result.control));        
                player.removeSkill(result.control);       
                player.unmarkSkill(result.control);
                game.playwwyj('wwyj_daixue1');
                target.addSkill(result.control);       
                target.markSkill(result.control);
                player.update();
                target.update();
    },
                ai:{
                    threaten:0.3,
                    result:{
                        target:function (player,target){
                        if(player.hp<3) return 0;
                return get.recoverEffect(target,player,target);
            },
                    },
                    order:9,
                },
            },
            "wwyj_recaizhidamage":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,                
                filter:function (event,player){                            
        return player.hasSkill('wwyj_recaizhi1')||player.hasSkill('wwyj_recaizhi2')||player.hasSkill('wwyj_recaizhi3')||player.hasSkill('wwyj_recaizhi4');
    },
                content:function (){
         "step 0"                    
        var list=[];
        if(player.hasSkill('wwyj_recaizhi1')) list.push('wwyj_recaizhi1');
        if(player.hasSkill('wwyj_recaizhi2')) list.push('wwyj_recaizhi2');
        if(player.hasSkill('wwyj_recaizhi3')) list.push('wwyj_recaizhi3');
        if(player.hasSkill('wwyj_recaizhi4')) list.push('wwyj_recaizhi4');        
        var list2=list.randomGet();
        player.popup(get.translation(list2));        
        player.removeSkill(list2);       
        player.unmarkSkill(list2);
        player.update();
        if(list2=='wwyj_recaizhi1'){
            game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet()); 
        }       
        if(list2=='wwyj_recaizhi2'){
            game.playwwyj(['wwyj_heimao1','wwyj_heimao2'].randomGet());     
        }             
        if(list2=='wwyj_recaizhi3'){
            game.playwwyj('wwyj_jinyan1'); 
        }     
        if(list2=='wwyj_recaizhi4'){
            game.playwwyj('wwyj_shaozhu1'); 
        }                                
       "step 1"   
        trigger.num--;
    },
            }, 
                                   
            "wwyj_recaizhi":{
                trigger:{                   
                    player:"phaseBegin",
                },
                group:["wwyj_recaizhidamage"],
			    derivation:["wwyj_kazhan","wwyj_duiyi","wwyj_jilve","wwyj_lilun"],
                forced:true,
                priority:2020,
                filter:function (event,player){
        return !player.hasSkill('wwyj_recaizhi1')||!player.hasSkill('wwyj_recaizhi2')||!player.hasSkill('wwyj_recaizhi3')||!player.hasSkill('wwyj_recaizhi4');
    },
                content:function (){                                 
                var list=[];
                if(!player.hasSkill('wwyj_recaizhi1')) list.push('wwyj_recaizhi1');
                if(!player.hasSkill('wwyj_recaizhi2')) list.push('wwyj_recaizhi2');
                if(!player.hasSkill('wwyj_recaizhi3')) list.push('wwyj_recaizhi3');
                if(!player.hasSkill('wwyj_recaizhi4')) list.push('wwyj_recaizhi4');
                var list2=list.randomGet();
                player.popup(get.translation(list2));        
                player.addSkill(list2);
                //player.flashAvatar('wwyj_recaizhi',list2);        
                player.markSkill(list2);
                player.update();      
                if(list2=='wwyj_recaizhi1'){
                    game.playwwyj(['wwyj_gainian1','wwyj_gainian2'].randomGet()); 
                }       
                if(list2=='wwyj_recaizhi2'){
                    game.playwwyj(['wwyj_heimao1','wwyj_heimao2'].randomGet());     
                }             
                if(list2=='wwyj_recaizhi3'){
                    game.playwwyj('wwyj_jinyan1'); 
                }     
                if(list2=='wwyj_recaizhi4'){
                    game.playwwyj('wwyj_shaozhu1'); 
                }                                                             
    },
            },           
            "wwyj_recaizhi4":{
                marktext:"杰",
                forced:true,
                locked:true,
                intro:{
                    name:"杰",
                    content:"视为拥有【少主】",
                },
                group:["wwyj_shaozhu"],
            },
            "wwyj_recaizhi3":{
                marktext:"英",
                forced:true,
                locked:true,
                intro:{
                    name:"英",
                    content:"视为拥有【禁言】",
                },
                group:["wwyj_jinyan"],
            },
            "wwyj_recaizhi2":{
                forced:true,
                locked:true,
                marktext:"武",
                intro:{
                    name:"武",
                    content:"视为拥有【咫尺】",
                },
                group:["wwyj_zhichi"],
            },
            "wwyj_recaizhi1":{
                forced:true,
                locked:true,
                marktext:"文",
                intro:{
                    name:"文",
                    content:"视为拥有【概念】",
                },
                group:['wwyj_gainian'],
            },     
        "wwyj_qunying":{
        	audio:"ext:文武英杰:1",
        	direct:true,				
			trigger:{player:'phaseEnd'},
			filter:function (event,player){
				    return game.hasPlayer(function(current){
				return player!=current&&Math.abs(player.countCards('h')-current.countCards('h'))<=Math.abs(player.hp-current.hp);
			});					
				},
				content:function(){
					"step 0"										
				player.chooseTarget(get.prompt2('wwyj_qunying'),1,function(card,player,target){
            return player!=target&&Math.abs(player.countCards('h')-target.countCards('h'))<=Math.abs(player.hp-target.hp);
        },function(target){
            if(player.countCards('h')<target.countCards('h')) return -get.attitude(player,target);
            return get.attitude(player,target);
        });        
           "step 1"
        if(result.bool){ 
             player.logSkill("wwyj_qunying",result.targets[0]);                
             player.swapHandcards(result.targets[0]); 
             if(player.countCards('h')==result.targets[0].countCards('h')){
               game.asyncDraw([player,result.targets[0]]); 
             }                        
        }
        else{
            event.finish();
        }    
				},
			},
		 "wwyj_fengliu2":{       
        trigger:{
           player:"enterGame",
           global:"gameStart",
        },        
        prompt:function (event,player){					
				return '是否将“小苏”的武将名改为“Sukincen”？';
	    },
		forbid:['guozhan'],  
        filter:function (event,player){           
            return game.hasPlayer(function(current){
               return current.name=='wwyj_Sukincen';
         });                             
    },                
        content:function (){                               
            if(player.name=='wwyj_Sukincen'){
                 game.playAudio('..','extension','文武英杰','wwyj_dansha');
                 player.node.name.innerHTML='';
                 game.broadcastAll(function(player){
 			     text = document.createElement('div');
 			     text.innerHTML='Sukincen';						 		
		 	     text.style.backgroundSize='cover';		 	    
			  	 text.style.width='100%';
				 text.style.height='100%';
				 //text.style.left='25%';			
				 text.style.transform='translateY(-200px)';//Y轴向负移动
				 text.style['font-size']='12px';
			     text.style['text-align']='center';
		     	 text.style['font-family']='shousha';
		     	 text.style['text-shadow']='rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px';						 				 
				 player.node.avatar.appendChild(text);
				 ui.refresh(text);
				 text.style.transform='';
			     },player);
            }  
        },
        },                		
        "wwyj_fengliu":{
            audio:"ext:文武英杰:1",
                 trigger:{
                    global:"gameStart",
                    player:["enterGame","phaseBegin","phaseEnd"],
                },    
                frequent:true,
                //group:"wwyj_fengliu2",
                init:function (player){
                    player.storage.wwyj_fengliu=[];
                },    
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){               
         		'step 0'				         	        		
					var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][0]=='female') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][0]!='female';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[0]=='female';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}					
					player.chooseButton(true).set('ai',function(button){
						return get.rank(button.link,true)-lib.character[button.link][2];
					}).set('createDialog',['选美：请选择一名佳丽当你的伴侣',[list.randomGets(5),'character']]);			
					'step 1'	
			
        if(result.bool){
           /* if(lib.config.mode=='guozhan'){
                  player.replaceFujiang(result.links[0]);                  
            }
            else{                  
                  player.addFujiang(result.links[0]);                         
            } 
            */
            player.flashAvatar('wwyj_fengliu',result.links[0]);
            player.unmark(player.storage.wwyj_fengliu+'_charactermark');
            var name=result.links[0];
            var list=[];
            var skills=lib.character[result.links[0]][3];
            for(var j=0;j<skills.length;j++){             
                list.push(skills[j]);               
            }     
            player.addAdditionalSkill('wwyj_fengliu',list);
            player.markCharacter(name,null,true,true);            
            player.storage.wwyj_fengliu=name;       
        }         								
    },
                ai:{                   
                    order:9,
                },
            },
               "wwyj_baozaorecover":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"damageEnd",
                },     
                forced:true,
                content:function (){ 
                     if(player.isDamaged()){
                         player.recover();
                     }
                     else player.draw();
                },
                },
               "wwyj_baozao":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"dyingBegin",
                },     
                priority:2020,
                mark:true,
                limited:true,
			           	init:function (player){
				             	player.storage.wwyj_baozao=false;
		           		},
                check:function (event,player){
                if(!event.source.isEmpty(2)) return 0;
				if(!player.countCards('h','tao')&&player.countCards('h')<2&&get.attitude(player,event.source)<=0) return 1;
                    return get.attitude(player,event.source)<=0;
                },         
                filter:function (event,player){
                return event.source&&event.source.isAlive();
    },                
                content:function (){   
         "step 0" 
         //ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');  
         player.$fullscreenpop('暴躁AI','thunder');	
         game.wwyj_background();	              
         event.current = player.next;
         player.addTempSkill('wwyj_baozaorecover');
         player.storage.wwyj_baozao=true;
         player.awakenSkill('wwyj_baozao');
         "step 1"
        if (trigger.source.isDead()||event.current==player) {
            player.removeSkill('wwyj_baozaorecover');
            event.finish();
        } else {
            event.current.useCard({name: 'sha',isCard:true},trigger.source, false);
        }
         "step 2"     
            event.current=event.current.next;                             
            event.goto(1);
    },
            },
              "wwyj_xipi":{
                audio:"ext:文武英杰:1",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:2020,
                filter:function (event,player){
                if(event.targets.length>1) return false;
                if(event.player==player) return false;
               return game.hasPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                             
    },                
                content:function (){         
        var targets=game.filterPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                             
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.target=targets.randomGet();
        player.line(event.target,'green');       
        player.gainPlayerCard(event.target,'he',true,'嘻皮');                                              
    },
            },
            "wwyj_jiedan":{
                popup:false,
                audio:"ext:文武英杰:2",
                global:"wwyj_xiadan",
               	ai:{			
              					threaten:1,
             			},
            },
            "wwyj_xiadan":{
                enable:"phaseUse",
                filter:function (event,player){
        if(player.hasSkill('wwyj_xiadan1')) return false;
        return player.countCards('he')&&game.hasPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
    },
                direct:true,
                delay:0,
                popup:false,
                filterCard:true,
                discard:false,
                lose:false,
                position:"he",
                prompt:function (){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
        var str='将一张牌交给'+get.translation(list);
        if(list.length>1) str+='中的一人';
        return str;
    },
                check:function (card){
        if(card.name=='sha') return 5;
        return 8-get.value(card);
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>1){
            player.chooseTarget(true,'选择【下单】的目标',function(card,player,target){
                return _status.event.list.contains(target);
            }).set('list',targets).set('ai',function(target){
                var player=_status.event.player;
                return get.attitude(player,target);
            });
        }
        else{
            event.finish();
        }
        "step 1"
        if(result.bool&&result.targets.length){
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.target){
            player.logSkill('wwyj_xiadan',event.target);
            player.addTempSkill('wwyj_xiadan1','phaseUseEnd');
            //event.card=cards[0];
           // if(event.target!=player){
                player.give(cards,event.target);
                event.target.recover();
                event.target.chooseToUse({name:'sha'},'是否使用一张【杀】？').logSkill='wwyj_jiedan';
              //  event.target.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha'},false,false);
                event.target.say(['君子爱财，取之有道','受人钱财，替人消灾'].randomGet());
            //}
        }
        else{
            event.finish();
        }
        "step 3"        	
					var list1=[],list2=[];
					for(var i=0;i<lib.inpile.length;i++){
						var type=get.type(lib.inpile[i]);
						if(type=='basic'){
							list1.push(['基本','',lib.inpile[i]]);
						}
						else if(type=='trick'){
							list2.push(['锦囊','',lib.inpile[i]]);
						}					
					}
					player.chooseButton([get.prompt('wwyj_xiadan'),[list1.concat(list2),'vcard']]).set('filterButton',function(button){											
						return true;
					}).set('ai',function(button){
		  			//return Math.random();				
				switch(button.link[2]){
				 		case 'du':return 0;
							case 'sha':return 3+9*Math.random();
							case 'tao':return 5.5+9*Math.random();
							case 'jiu':return 3+9*Math.random();
							case 'shan':return 4+9*Math.random();
							case 'wuzhong':return 4.5+9*Math.random();
							case 'shunshou':return 4.5+9*Math.random();
							case 'nanman':return 3.5+9*Math.random();
							case 'wanjian':return 3+9*Math.random();
							default:return 9*Math.random();
						}							
					}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
				 "step 4"       
					if(result.bool){
					player.gain(get.cardPile(function(card){
						return card.name==result.links[0][2];
					}),'gain2');						
						player.logSkill('wwyj_xiadan');			
						}							
					else{
						event.finish();
					}						
    },
                ai:{
                    order:8,
                    threaten:1.5,
                    result:{
                        player:function (player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('wwyj_jiedan');
                });
                if(target){
                    return get.attitude(player,target);
                }
            },
                    },
                },
            },
            "wwyj_xiadan1":{
                unique:true,
				charlotte:true,
            },
            "wwyj_huikeng":{
                audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                selectTarget:-1,
                multitarget:true,
                multiline:true,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){               
       "step 0"         
       event.current=player.next;  
       //player.removeSkill('wwyj_huikeng');  
      /* 	game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	//Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;
       	Animation.setBackgroundImage('extension/文武英杰/wwyj_huikeng.gif'); 						
   				Animation.style.backgroundSize='cover';
   				Animation.style.backgroundPosition='center';
						Animation.style["z-index"] = 7;						
						Animation.style.width = (120/715)*document.body.clientHeight + "px";
						Animation.style.height= (120/715)*document.body.clientHeight + "px";						
						if(player==game.me){						
							Animation.style.left= (document.body.clientWidth-120)/2+"px";
							Animation.style.top = "50%";
							ui.window.appendChild(Animation);
						}
						else {
						Animation.style.left= (document.body.clientWidth-120)/2+"px";
							Animation.style.top = "50%";
							ui.window.appendChild(Animation);
							
						}												         
						setTimeout(function(){
    Animation.delete();
},4500);
			},player);
			*/
       "step 1"                                
        event.list=get.gainableCharacters(function(info){
            return info[2]>=0;
        });
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            event.list.remove(players[i].name);
            event.list.remove(players[i].name1);
            event.list.remove(players[i].name2);
        }
        event.list=event.list.randomGets(game.players.length-1);           
         "step 2"    
          event.dialog=ui.create.dialog('选择一张武将牌替换'+get.translation(event.current)+'的武将牌','hidden');
          event.dialog.add([event.list,'character']);   
          if(event.dialog.buttons.length==1){
              player.draw();
              event.current.init(event.dialog.buttons[0].link);
              event.finish();
              }
           else{   
          player.chooseButton(event.dialog,true).ai=function(button){
                   if(get.attitude(player,event.current)>0){
                            return get.rank(button.link,true);
                        }
                        else{
                            return -get.rank(button.link,true);
                        }
        };    
        }
        "step 3"                          
             if(result.bool){
                 player.draw();
                 var a=event.current.hp;
                 var b=event.current.maxHp;
                 event.current.init(result.buttons[0].link); 
                 event.current.maxHp=b;
                 event.current.hp=a;                 
                 event.current.update();                 
                 event.list.remove(result.buttons[0].link);
              /*   var button;  
                 for(var i=0;i<event.dialog.buttons.length;i++){  
                     if(event.dialog.buttons[i].link==result.buttons[0].link){  
                         button=event.dialog.buttons[i];                           
                     }  
                 }   
                 if(button) event.dialog.buttons.remove(button);    */                                       
              }   
              else{
                  event.finish();
              }   
                 "step 4"      
                 if(event.current!=player.previous){
                     event.current=event.current.next;
                     event.goto(2);
                 }
                 else{ 
                     //player.removeSkill('wwyj_huikeng');                      
                     event.finish();
                 }
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                    },
                },
            },
           /*  "wwyj_ancha2":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"changeHp",
                },                  
                frequent:true,         
                priority:2020,            
                filter:function (event,player){
        return !player.hasSkill('wwyj_huikeng')&&player.hp<2;
    },
                content:function (){                        
                    player.addSkill('wwyj_huikeng');                           
                },
                },*/
            "wwyj_ancha":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"damageEnd",
                },
                //group:"wwyj_ancha2",
                derivation:"wwyj_huikeng",
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                filter:function (event,player){
        return event.source&&player!=event.source&&event.player.isAlive();
    },
                content:function (){    
                "step 0"
                if(trigger.source.countCards('h')){
                    player.viewHandcards(trigger.source);
                }
                "step 1"
                if(player!=trigger.player){
                    trigger.player.draw();
                }
                else{     
                    player.draw();                    
                    player.turnOver(false);                       
                    player.insertPhase();
                }                                 
    },
            },
            "wwyj_qianfu":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        return !player.isTurnedOver();
    },
                mod:{
                    globalTo:function (from,to,distance){
            if(to.isTurnedOver()) return distance+Infinity;
        },
                },
                content:function (){          
       player.turnOver();    
       player.say(['我先休息一会儿，没什么事就别来烦我','有事启奏，没事退朝'].randomGet()); 
    },
            },
            "wwyj_chuangshi":{
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                audio:"ext:文武英杰:1",
                unique:true,
                forced:true,
                juexingji:true,
                priority:Infinity,
                init:function (player){
				             	player.storage.wwyj_chuangshi=false;
		           		},
                content:function (){               
       "step 0" 
       player.$fullscreenpop('水乎创世','fire'); 
       	game.wwyj_background();	
       	game.broadcastAll(function(player){
       	
       	var Animation = ui.create.div();
       	//Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;  
        Animation.setBackgroundImage('extension/文武英杰/wwyj_chuangshi.gif'); 	   									
   				Animation.style.backgroundSize='cover';
   				Animation.style.backgroundPosition='center';
						Animation.style["z-index"] = 7;
						
						Animation.style.width = (360/715)*document.body.clientHeight + "px";
						Animation.style.height= (360/715)*document.body.clientHeight + "px";
						
						if(player==game.me){						
							Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
						}
						else {
						Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
							/*Animation.style.left= "8%";
							Animation.style.top = "25%";
							player.appendChild(Animation);*/
						}
												         
						setTimeout(function(){
						ui.window.removeChild(Animation);
               //Animation.delete();
                },3500);

			},player);
					 player.storage.wwyj_chuangshi=true;			
       player.awakenSkill("wwyj_chuangshi");
       game.delay(2);
       event.current=player.next;          
        event.list=[];
        event.list=['guanyu','zhangfei','zhaoyun','machao','mazhong','gongsunzan','huanggai','lvmeng','yujin','xuzhu'];
        "step 1"         
        event.current.chooseButton(ui.create.dialog('请您选择一名武将牌替换你的武将牌',[event.list,'character'],true),function(button){                 
                     return Math.random();
                       // return get.rank(button.link,true);
                 });                  
                "step 2"                    
                 if(result.bool){
                 event.current.init(result.links[0]);  
                 event.list.remove(result.links[0]);                                                    
                  }      
                 "step 3"      
                 if(event.current!=player.previous){
                     event.current=event.current.next;
                     event.goto(1);
                 }
                 else{
                     event.finish();
                 }
    },
                ai:{
                    order:9,
                },
            },
            "wwyj_zhwpy":{
				audio:"ext:文武英杰:true",
                popup:false,         
            },
			"wwyj_liangcha":{
		    	trigger:{global:'gameStart'},
        forced:true,
        unique:true,
        priority:2019,		
     content:function (){     
      //此技能的代码已被加密隐藏    				
     },               
            },
			"wwyj_fanghua":{
        trigger:{player:'phaseBegin'},
        forced:true,
        unique:true,
        priority:2019,		
     content:function (){    
      //此技能的代码已被加密隐藏    				
     },               
            },
            "wwyj_meiying":{
        trigger:{player:'phaseUseBegin'},
        forced:true,
        unique:true,
        priority:2019,		
     content:function (){       
      //此技能的代码已被加密隐藏  		
     },                            
            },			
            
    },
    characterReplace:{
		"wwyj_liangchas":["wwyj_liangchas","wwyj_liangchax","wwyj_yuhudie","wwyj_zhichitianya"],		
		"wwyj_shijian":["wwyj_shijian","wwyj_xuebi"],
		"wwyj_guihua":["wwyj_guihua","wwyj_niya"],
		"wwyj_zhichitianya":["wwyj_liangchas","wwyj_liangchax","wwyj_yuhudie","wwyj_zhichitianya"],		
		"wwyj_xuebi":["wwyj_shijian","wwyj_xuebi"],
		"wwyj_niya":["wwyj_guihua","wwyj_niya"],						
	},
    translate:{
        
"wwyj_shuihu":"水乎",
            "wwyj_jiguangs":"极光", 
            "wwyj_chengxuyuan":"橙续缘",
            "wwyj_bohetang":"薄荷糖",
            "wwyj_pipi":"皮皮",
            "wwyj_limuzi":"李木子",
			"wwyj_guihua":"松岛枫桂花",
			"wwyj_yiwangs":"一瞬间遗忘",            
            "wwyj_fux2":"fux2",
			"wwyj_shenzuo":"神座",
			"wwyj_guchengs":"孤城",
			"wwyj_hezifengyun":"何子风云",
			"wwyj_qingzhongs":"青冢",
			"wwyj_liushas":"流沙",
			"wwyj_chansuideshengming":"残碎的生命",
			"wwyj_duanges":"短歌",
			"wwyj_shennais":"神奈",
			"wwyj_tianqikui":"天气亏",
            "wwyj_Sukincen":"小苏",
            "wwyj_liangchas":"凉茶",
			"wwyj_liangchax":"★凉茶",
			"wwyj_yuhudie":"玉蝴蝶",
			"wwyj_zhichitianya":"咫尺天涯",
            "wwyj_shijian":"诗笺",     
			"wwyj_xuebi":"雪碧",
			"wwyj_niya":"夜洛樱琉璃",
			"wwyj_taishangdaniu":"太上大牛",
			"wwyj_xingyunnvshen":"幸运女神",
			"wwyj_feicheng":"废城",
			"wwyj_zhugejun":"诸葛均",
			"wwyj_lengyus":"冷雨",
			"wwyj_yanyumoran":"烟雨墨染",
			"wwyj_wali":"瓦力",
			"wwyj_chenwus":"辰午",
			"wwyj_rongyaotaoge":"荣耀套鸽",
			"wwyj_yangguangweiliang":"阳光微凉",
			"wwyj_anshas":"俺杀",
			"wwyj_fanxings":"繁星",
			"wwyj_zhuxiaoer":"竹小二",
			"wwyj_ranqis":"染柒",
			"wwyj_shenwangquanjian":"神王权笺",
			"wwyj_zhongchengpantu":"忠诚的叛徒",
			"wwyj_wuqinggezi":"无情鸽子",
			"wwyj_huanyuxingcheng":"寰宇星城",
			"wwyj_xuedaoshaozhu":"血刀少主",
			"wwyj_yitiaoxianyu":"咸鱼",
			"wwyj_zhulinqixian":"竹林七贤",
            "wwyj_Show-K":"小溪",
			"wwyj_lei":"雷",
			"wwyj_mengxinzhuanxing":"萌新转型",
			"wwyj_dasima":"大司马",
			"wwyj_rcanghai":"藏海",
            "wwyj_remaliao":"苏婆玛丽奥",                              
            "wwyj_lunhuizhong":"轮回消逝者",
            "wwyj_ziyage":"呲牙哥",
            "wwyj_kanpoyiqie":"看破一切",
            "wwyj_daxiongxiaimao":"大熊小猫",
            "wwyj_kelejiabing":"可乐加冰",
            "wwyj_qianshangs":"浅觞",
            "wwyj_qingyao":"清瑶",
            "wwyj_rshun":"瞬",
			"wwyj_tilongjianiao":"提笼架鸟",
            "wwyj_huijin":"辉烬贺流年",       
            "wwyj_danwuyunxi":"淡雾云曦",
            "wwyj_jianyaleishao":"剑牙雷少",
            "wwyj_hualuo":"花落",
			"wwyj_wzszhaoyun":"我只是赵云",	
			
			
    //"wwyj_moban":"模板",
    //  "wwyj_moban_info":"模板",
    "wwyj_dujiao2":"毒教",
    "wwyj_dujiao":"毒教",
    "wwyj_dujiao_info":"<span class=yellowtext>主公技</span> 每回合限一次，其他【杀】势力的角色可以在其回合内将一张【毒】交给你",
    "wwyj_chaoxi":"抄袭",
    "wwyj_chaoxi_info":"</font><font color=#f00>锁定技</font> 其他角色的【毒】因弃置进入弃牌堆时，你获得之。你的【毒】按此规则分别视为：<li>黑桃→【杀】<li>红桃→【桃】<li>梅花→【酒】<li>方片→【闪】",
    "wwyj_cuangai2":"篡改",
	"wwyj_cuangai":"篡改",
    "wwyj_cuangai_info":"每回合限一次，当一名角色受到伤害后，你可选择令伤害来源的一张手牌转变为【毒】，若此伤害来源为你，则可令你的随机一张不为【毒】的手牌转变为【毒】",
    "wwyj_doupo2":"斗破",   
    "wwyj_doupo":"斗破",
    "wwyj_doupo_info":" </font><font color=#f00>锁定技</font> 当一名角色造成属性伤害后，若此伤害与其上次所造成的伤害属性相同，则你可使用一张牌（不计入次数限制）并重置其本回合内使用杀的次数",
    "wwyj_fuhui":"浮慧",
    "wwyj_fuhui_info":"每当你使用或打出一张点数的奇偶性与X的奇偶性相同的牌后，你摸一张牌，否则你弃置一张牌，当你因此失去最后一张手牌时，你可选择一项：①对一名其他角色造成1点伤害；②恢复一点体力，将武将牌翻面并令X重置。（X为你发动此技能的次数）",
    "wwyj_yigeng":"义更",
    "wwyj_yigeng_info":"每回合限一次，当一名其他角色使用牌时，你可弃置一张你藏在武将牌上的其中一张与此牌花色相同的“海”，令此角色受到一点雷属性伤害",
    "wwyj_canghai":"藏海",
    "wwyj_canghai_info":"锁定技，当游戏开始时、你进入游戏时、一名角色进入濒死状态时，若你武将牌上的“海”不足五张，你摸一张牌并将牌堆顶的牌当“海”置于你的武将牌上，直至五张",
	"wwyj_qibing":"奇兵",
    "wwyj_qibing_info":"当你使用【杀】即将造成伤害时，你可选择一项：<li>平西：令一名其他角色也受到一点伤害<li>镇北：令此伤害+1<li>征南：获得该角色的一张牌<li>破东：令该角色摸等同其当前已损失的体力值张牌（至少1张），然后翻面<li>定中：你回复一点体力或摸一张牌",
	"wwyj_yongji2":"涌技",
    "wwyj_yongji2_info":"你此时可以选择弃置【花落】的一张装备区的牌，然后回复一点体力",    
	"wwyj_yongji":"涌技",
    "wwyj_yongji_info":"每名角色每回合限一次，当一名角色进入频死状态时，其可以选择弃置你的一张装备区的牌，然后回复一点体力 <font color=#F0F>可突破</font>",
    "wwyj_luohua":"落花",
    "wwyj_luohua_info":"</font><font color=#f00>锁定技</font> 准备阶段，你随机将场上其他角色的装备区的牌逐一装备到你的装备区（可替换，每个装备栏只触发一次）",
	"wwyj_qianzhan_backup":"前瞻",
	"wwyj_qianzhan":"前瞻",
    "wwyj_qianzhan_info":"牌堆顶的牌对你可见。每回合限X次（X为你的体力值），你可以使用或打出牌堆顶的牌（无懈可击除外），你以此法使用的牌无距离限制，若为【杀】则可额外指定一名目标 <font color=#F0F>可突破</font>",
	"wwyj_zhuanxing":"转型",	
    "wwyj_zhuanxing_info":"当一名角色即将受到【杀】造成的非属性伤害时，你可令该伤害改为雷属性伤害，然后你摸一张牌",
	"wwyj_leilao2":"雷佬",
	"wwyj_leilao2_info":"场上其他角色受到雷属性伤害后，你选择一项：回复一点体力；摸一张牌；获得伤害来源一张牌",
	"wwyj_leilao":"雷佬",
    "wwyj_leilao_info":"</font><font color=#f00>锁定技</font> 雷属性伤害对你无效。场上其他角色受到雷属性伤害后，你选择一项：回复一点体力；摸一张牌；获得该角色一张牌",
	"wwyj_tongyu2":"统驭",
	"wwyj_tongyu":"统驭",
    "wwyj_tongyu_info":"一名角色的回合开始时，你随机获得其一个技能，若为你的回合，你随机获得场上一名其他角色的一个技能，均直到回合结束",	
	"wwyj_chenwu":"辰午",
    "wwyj_chenwu_info":"其他角色的弃牌阶段开始时，若其手牌数大于你的手牌数，你可选择展示其一张手牌，若此牌为基本牌或普通锦囊牌，你获得之，然后若为黑色牌，你可立即使用之",			
	"wwyj_shengbei_rshan":"圣杯",
	"wwyj_shengbei_shan2":"圣杯",
	"wwyj_shengbei_shan":"圣杯",
	"wwyj_shengbei_rsha":"圣杯",
	"wwyj_shengbei_sha":"圣杯",
	"wwyj_shengbei_use":"圣杯",
	"wwyj_shengbei":"圣杯",
    "wwyj_shengbei_info":"每回合每种情况限一次，当你需要使用或打出一张【杀】/【闪】时，你可以展示你手牌中的一张，然后若其他角色展示一张同名的手牌，视为你使用或打出之。若为使用【杀】则不计入次数",			
    "wwyj_rongyao":"荣耀",
    "wwyj_rongyao_info":"当你受到伤害后，你可将牌堆顶X（你已损失的体力值）张牌置于武将牌上，称为“耀”。若你有“耀”，你不能成为黑色牌的目标",
    "wwyj_taoge2":"套鸽",
    "wwyj_taoge":"套鸽",
    "wwyj_taoge_info":"回合结束时，你可选择一项：1、弃置任意张“耀”并令等量的其他角色各摸一张牌，然后你回复一点体力；2、将任意张“耀”交给等量的其他角色，然后该角色须弃置一张与之不同类别的手牌，否则其失去一点体力",
    "wwyj_zhiguo":"掷果",
    "wwyj_zhiguo_info":"</font><font color=#f00>锁定技</font> 场上女性角色摸牌阶段多摸一张牌并交给你一张牌，然后其回复1点体力",
    "wwyj_zhiguo2":"掷果",
    "wwyj_zhiguo2_info":"",
    "wwyj_pingfang":"评芳",
    "wwyj_pingfang_info":"准备阶段开始时，你可观看随机六张未登场的女性武将牌并选择一张，然后你可用这张牌替换一名其他角色的武将牌",
    "wwyj_qingyan":"倾颜",
    "wwyj_qingyan_info":"出牌阶段每名角色限一次，你可失去1点体力或弃置一张【酒】，然后令你或一名女性角色摸三张牌",            
    "wwyj_fanxing":"繁星",
    "wwyj_fanxing_info":"出牌阶段限一次，若你有“星”，你可以弃置所有的“星”，视为你使用了X张【万箭齐发】（X为你弃置的“星”的数量且至多为5）",
    "wwyj_huayue2":"花月",
    "wwyj_huayue1":"花月",
    "wwyj_huayue":"花月",
    "wwyj_huayue_info":"</font><font color=#f00>锁定技</font> 当你使用一张基本牌后，你将其置于武将牌上，称为“星”，然后摸一张牌；当你受到伤害后，若你有“星”，伤害来源获得你武将牌上的一张“星”牌，若该牌为红色，你回复1点体力，若为黑色，你对伤害来源造成1点伤害",           
    "wwyj_chansui":"残碎",
    "wwyj_chansui_info":"</font><font color=#f00>锁定技</font> ①准备阶段，若你的武将牌上有“命”武器牌，你将其中一张置于一名角色的装备区（可替换原装备）；②一名其他角色对你造成伤害后，其获得你武将上的一张“命”牌。结算①或②后你摸等同与这张武器攻击范围数量的牌",
    "wwyj_chansui2":"残碎",
    "wwyj_chansui2_info":"</font><font color=#f00>锁定技</font> 准备阶段，若你的武将牌上有“命”武器牌，你将其中一张置于一名角色的装备区（可替换原装备），并摸等同与这张武器攻击范围数量的牌",//当你武将牌上没有“命”牌时，你进入濒死状态
    "wwyj_shengming":"生命",
    "wwyj_shengming_info":"</font><font color=#f00>锁定技</font> 游戏开始或你进入游戏时，将牌堆和弃牌堆的所有武器牌置于你的武将牌上，称为“命”，你的手牌上限+X（X为“命”数）",            
    "wwyj_ranqi":"染柒",
    "wwyj_ranqi_info":"</font><font color=#f00>锁定技</font> 当你受到伤害后，伤害来源须猜你手牌中的花色数，若其猜对，你回复一点体力，若其猜错，其翻面",
    "wwyj_langsha":"狼杀",
    "wwyj_langsha_info":"</font><font color=#f00>锁定技</font> 你与已翻面的角色的距离为1，你使用【杀】的次数上限+X（X为场上已翻面的角色数）",
    "wwyj_fuji":"伏击",
    "wwyj_fuji_info":"<font color=#F0F>隐匿技</font> 当你于其他角色的回合登场后，你可与该角色交换装备牌，然后其翻面",
    "wwyj_guozhandraw":"国战",
    "wwyj_guozhandraw_info":"当你所选的势力的角色受到伤害或回复体力时，你摸一张牌",    
    "wwyj_guozhanrespond":"国战",
    "wwyj_guozhanrespond_info":"当你需要打出杀或闪时，你可观看你所选择的势力的一名其他角色的手牌，选择打出一张符合情况的手牌",    
    "wwyj_guozhan":"国战",
    "wwyj_guozhan_info":"回合结束时或一名角色阵亡后，你可以从场上除你之外的势力中选择其中一个，直到下次发动【国战】前，该势力的角色受到伤害或回复体力时，你摸一张牌，且当你需要打出杀或闪时，你可观看此势力的一名其他角色的手牌，选择打出一张符合情况的手牌",
    "wwyj_chaoyue":"超越",
    "wwyj_chaoyue_info":"</font><font color=#f00>锁定技</font> 你使用杀造成伤害时，若该角色未受伤或已翻面或已横置，则此伤害+1 <font color=#F0F>可突破</font>",
    "wwyj_ansha":"俺杀",
    "wwyj_ansha_info":"</font><font color=#f00>锁定技</font> 你的进攻距离-X，回合内使用【杀】的次数上限+X（X为游戏轮数）",
    "wwyj_leishao_1":"雷少",
    "wwyj_leishao":"雷少",
    "wwyj_leishao_info":"</font><font color=#f00>锁定技</font> 你受到雷属性伤害时，伤害减一；你的草花非装备牌均视为雷杀且无距离和次数限制",
    "wwyj_jianya":"剑牙",
    "wwyj_jianya_info":"当你受到伤害或杀死一名角色后，你可以选择一种牌的类型，然后随机观看牌堆中该类型的两张牌，然后选择获得其中任意张颜色为黑色的牌",
    "wwyj_zhichi":"咫尺",
    "wwyj_zhichi_info":"</font><font color=#f00>锁定技</font> 你计算与体力值不等于其手牌数的角色的距离为1，你对距离为1的角色使用【杀】造成伤害时，此伤害+1",
    "wwyj_tianya":"天涯",
    "wwyj_tianya_info":"<span class=greentext>觉醒技</span> 当你进入濒死状态时，你选择X名其他角色，摸X张牌，并随机展示X名文武英杰扩展的角色（X为至少为1的任意整数），你回复体力至体力上限并随机变身为【凉茶】或【玉蝴蝶】并选择令这些角色逐一将武将牌替换为其中一张（体力上限、体力不变）",
    "wwyj_jitui":"急退",
    "wwyj_jitui_info":"当你成为杀的目标时，你可观看牌堆顶的5张牌并选择其中一张，然后你须补回一张花色或类型或点数与此牌相同的牌（置于最后），再将这些牌置回牌堆顶",
    "wwyj_duiyi":"对弈",
    "wwyj_duiyi_info":"出牌阶段限一次，你可以与一名其他角色进行“对弈”：将牌堆顶的七张牌背面朝上展开，你与其轮流翻开展示其中的4张牌，然后未被翻开的牌置回牌堆顶，若翻开的牌中只有一种花色或花色各不相同，你获得这些牌并回复一点体力，否则其受到一点火／雷属性伤害",       
    "wwyj_weiman":"伪漫",
    "wwyj_weiman_info":"当你的体力值发生变化时，你可移动场上的一张牌",
    "wwyj_zhongcheng":"忠诚",
    "wwyj_zhongcheng_info":"出牌阶段限一次，若你有牌，你可发动“忠诚”令“叛徒”回复一点体力或令其摸一张牌，若如此做，其须弃置你的一张牌",
    "wwyj_pantu":"叛徒",
    "wwyj_pantu_info":"其他角色的出牌阶段限一次，若其有牌，其可发动“忠诚”令你回复一点体力或令你摸一张牌，若如此做，你须弃置其一张牌",
    "wwyj_yangshan":"扬善",
    "wwyj_yangshan_info":"当你受到伤害后，若你有红色牌，你可摸两张牌，然后将一张红色牌当不以你和伤害来源为目标的【桃园结义】使用",
    "wwyj_jieyuan4":"解缘",
    "wwyj_jieyuan4_info":"你可在出牌阶段主动交出一张红色牌解除『结缘』状态",    
    "wwyj_jieyuan3":"结缘",
    "wwyj_jieyuan2":"结缘",
    "wwyj_jieyuan1":"结缘",
    "wwyj_jieyuan":"结缘",
    "wwyj_jieyuan_info":"出牌阶段限一次，你可以将任意张黑色牌交给等量的没有『结缘』状态的角色各一张，令其处于『结缘』状态。你防止受到『结缘』状态的角色造成的伤害，其受到伤害后，你摸一张牌。其可在其出牌阶段主动交给你一张红色牌解除『结缘』状态 <font color=#F0F>可突破</font>",
    "wwyj_liuli":"琉璃",
    "wwyj_liuli_info":"当一名其他角色失去最后一张手牌后，你可将不同花色的手牌各一张交给其，若你交出的手牌中包含4种花色，你回复一点体力",
    "wwyj_xugeng2":"续更",
    "wwyj_xugeng":"续更",
    "wwyj_xugeng_info":"当你的手牌数少于3张时，你可及时点击屏幕上牌桌区的小头像以摸一张牌",   
    "wwyj_zhushan":"助善",
    "wwyj_zhushan_info":"当一名角色使用杀时，若其手牌数不大于目标角色的手牌数，你可令此杀不可闪避",
    "wwyj_bohe2":"薄荷",
    "wwyj_1":"薄荷",
    "wwyj_bohe":"薄荷",
    "wwyj_bohe_info":"出牌阶段限一次，你可声明一种类别的牌，然后直到你的下回合开始，每名角色的回合限一次，每当一名角色使用一张类别与该类别相同的非转化的牌时（不包括延时性锦囊牌），你可令其摸一张牌 <font color=#F0F>可突破</font>",
    "wwyj_jiegeng":"接更",
    "wwyj_jiegeng_info":"每名角色的回合限一次，当一名其他角色使用一张单目标的基本牌或非延时性锦囊牌时（借刀杀人、无懈可击除外），你可视为你对目标角色也使用此牌",
	"wwyj_qingzhong":"青冢",
    "wwyj_qingzhong_info":"出牌阶段限一次，你可以弃置任意张基本牌，并指定你攻击范围内等量名其他角色，分别视为对这些角色使用了一张无次数限制的【杀】",            
    "wwyj_fengyun":"风云",
    "wwyj_fengyun_info":"</font><font color=#f00>锁定技</font> 当你受到伤害后，你从随机展示的三个【文武英杰】扩展的技能中选择一个获得(本技能除外)",      
    "wwyj_feixue":"飞雪",
    "wwyj_feixue_info":"当你使用【杀】时，你可令此【杀】额外指定所有武将牌背面朝上的角色，然后令这些角色翻面",
	"wwyj_zangyue":"葬月",
    "wwyj_zangyue_info":"</font><font color=#f00>锁定技</font> 回合结束阶段，你可选择一种花色，然后令所有其他角色在其下个结束阶段前，其回合内使用该花色的牌后将武将牌翻面",
	"wwyj_gucheng":"孤城",
    "wwyj_gucheng_info":"</font><font color=#f00>锁定技</font> 游戏轮数为奇数/偶数的回合，你不能成为点数为奇数/偶数的【杀】的目标",            
    "wwyj_meihua":"美化",
    "wwyj_meihua_info":"每名角色的回合限一次，当一名角色使用一张单一目标的非装备牌、非延时锦囊牌的牌时，你可展示牌堆顶的两张牌，选择改用其中合理的一张牌 <font color=#F0F>可突破</font>",     
    "wwyj_duange":"短歌",
    "wwyj_duange_info":"摸牌阶段摸牌时，你可放弃摸牌，改为展示牌堆顶的五张牌，然后选择获得其中任意张点数同为奇数或同为偶数的牌，再将剩下的牌按先后顺序置于牌堆顶",
    "wwyj_geziyin":"放鸽",
    "wwyj_geziyang":"放鸽",
    "wwyj_gezi":"鸽子",
    "wwyj_gezi_info":"<font color=#F0F>转换技</font> 出牌阶段限一次效果：<li>阳：你可弃置一张红色手牌并令任意名有手牌的角色各展示一张手牌，然后你可展示一张手牌，横置/重置展示牌与该牌颜色相同的角色，然后若已横置的角色比未模置的多，你摸一张牌<li>阴：你交给一名其他角色一张黑色手牌，令其选择至少一名角色，然后你选择横置/重置其所选择的或未选择的角色，然后若已横置的角色比未模置的多，你摸一张牌",
	"wwyj_wuqing":"无情",
    "wwyj_wuqing_info":"</font><font color=#f00>锁定技</font> 当一名角色受到属性伤害后，你摸一张牌",			
    "wwyj_jieguan":"接管",
    "wwyj_jieguan_info":"一名其他角色出牌阶段开始时，若其有手牌且手牌数不小于你的，你可以获得其一张手牌。若如此做，此阶段结束时，若其造成过伤害，则视为其对你使用一张【杀】，否则你视为对其使用一张【杀】",            
    "wwyj_sepi2":"献媚",    
    "wwyj_sepi":"色批",
    "wwyj_sepi_info":"每名女性角色的出牌阶段限一次，其可弃置一张手牌，然后其弃置你的一张手牌，若这两张手牌颜色相同，其与你各选择摸一张牌或回复一点体力(若任一方没受伤则改为摸一张牌)，否则各摸一张牌",
    "wwyj_shaozhu":"少主",           
    "wwyj_shaozhu_info":"当你成为【杀】的目标时，你可令攻击范围包含该角色的除了你与其的所有其他角色依次对该角色选择使用一张不计入次数限制的【杀】，否则你获得该应使用【杀】的角色一张牌",            
    "wwyj_xuedao":"血刀",
    "wwyj_xuedao_info":"当一名角色使用一张武器牌后，你可弃置其攻击范围内的一名其他角色的一张手牌，若这张手牌的颜色为红色，则使用武器牌的角色视为对被弃置手牌的角色使用一张不计入次数限制的【杀】",
    "wwyj_lunpo":"论破",
    "wwyj_lunpo_info":"任意有“丸”标记的角色弃牌阶段弃牌时，若其弃置的牌均为不同花色的牌时，你可选择一项：①回复一点体力并摸一张牌；②令该角色受到你造成的一点伤害，然后其弃置“丸”标记 <font color=#F0F>可突破</font>",
    "wwyj_dansha":"弹杀",
    "wwyj_dansha_info":"当你受到伤害时，你可先选择是否令一名没“丸”标记的其他角色获得“丸”标记，然后你再对场上随机一名有“丸”标记的角色造成等量点伤害并令其随机弃置一张牌",
    "wwyj_qinyan":"勤言",
    "wwyj_qinyan_info":"</font><font color=#f00>锁定技</font> 回合内，当你失去所有手牌后，你将手牌补至当前体力值。你本回合对本回合发动“释援”的目标使用牌时，无视距离和次数限制",
    "wwyj_shiyuan3":"释援",
    "wwyj_shiyuan2":"释援",
    "wwyj_shiyuan":"释援",
    "wwyj_shiyuan_info":"出牌阶段限一次，你可以选择交给一至X名有手牌的其他角色各一张手牌，然后令这些角色分别交给你一张其他的手牌(X为场上手牌数小于其体力上限的角色数)",
    "wwyj_xuanxia":"玄侠",
    "wwyj_xuanxia_info":"<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可回复体力至场上“星”的数量，然后获得场上所有的“星”，并分别视为对这些角色使用一张【杀】 <font color=#F0F>可突破</font>",  
    "wwyj_huanyu":"寰宇",
    "wwyj_huanyu_info":"出牌阶段限一次，你可将场上所有有“星”的角色的“星”收为手牌，然后再逐一将一张手牌当“星”放置于这些角色的武将牌上",    
    "wwyj_xingcheng2":"星城",
	"wwyj_xingcheng1":"星",
    "wwyj_xingcheng":"星城",
    "wwyj_xingcheng_info":"当你受到伤害后，你可将牌堆顶的一张牌置于一名没有“星”的其他角色的武将牌上，称为“星”；当一名角色阵亡或受到你造成的伤害时，若其有“星”，你可以获得该角色的“星”",
		  "wwyj_gonggao2":"公告",
		  "wwyj_gonggao1":"公告",
		  "wwyj_gonggao":"公告",
          "wwyj_gonggao_info":"当你受到伤害后，你可声明一种牌的类型，然后令回合外曾对你造成过伤害的所有其他角色交给你一张手牌，否则你弃置其一张手牌并视为对其使用一张【杀】。若其交给你的牌与你声明的类型相同，其摸一张牌",
		  "wwyj_jinyan2":"禁言",
		  "wwyj_jinyan1":"禁言",
		  "wwyj_jinyan":"禁言",
          "wwyj_jinyan_info":"出牌阶段限一次，若场上没角色被禁言，你可以选择一名其他角色并声明一种花色，其因被禁言只能使用该花色的牌，直到其使用这花色的牌才解除禁言状态",
		  "wwyj_gainian":"概念",
          "wwyj_gainian_info":"出牌阶段限一次，你可声明一张基本牌或普通锦囊牌，若如此做，若你未发动技能【黑猫】，你须失去一点体力并翻面，然后令场上所有其他角色弃置一张与你所声明的牌名字相同的手牌，否则你摸一张牌",
		  "wwyj_heimao":"黑猫",
          "wwyj_heimao_info":"<span class=greentext>觉醒技</span> 当你进入濒死状态时，你弃置你区域内的所有牌并重置武将牌，回复体力至体力上限并将手牌补至体力上限，然后选择一名已阵亡的角色令其复活，体力回复至体力上限并补手牌至体力上限。若为身份局，你与其交换身份牌",
		  "wwyj_liusha":"流沙",
          "wwyj_liusha_info":"回合外，当你失去牌时，你可弃置一名角色区域内的一张牌，若此牌具有攻击伤害性，你摸一张牌",
		  "wwyj_yiwang":"遗忘",
          "wwyj_yiwang_info":"当你使用的【杀】被闪避时，你可令目标角色翻面",
		  "wwyj_fenghua3":"风华",
		  "wwyj_fenghua2":"风华",
		  "wwyj_fenghua1":"风华",
		  "wwyj_fenghua":"风华",
          "wwyj_fenghua_info":"出牌阶段限一次，你可与一名其他角色拼点，若你赢，该角色翻面，本回合内，你与该角色的距离为1。若你没赢，你回复一点体力",
		  "wwyj_shennai":"神奈",
          "wwyj_shennai_info":"</font><font color=#f00>锁定技</font> 你使用【杀】的次数上限额外加X（你手牌中没带“伤害性”标签的牌的实时数量）",
          "wwyj_keai":"可爱",
          "wwyj_keai_info":"当你受到伤害后或失去最后一张手牌后，你可令场上的所有男性角色依次选择是否交给你一张手牌，若其交给了你一张手牌，且其没有手牌或已受伤，其摸一张牌",
		  "wwyj_weixin":"伪新",
            "wwyj_weixin_info":"每名角色的回合限一次，当一名角色进入濒死状态时，你可以摸一张牌并翻面，令其回复一点体力",
		  "wwyj_xianyu":"咸鱼",
            "wwyj_xianyu_info":"每回合限一次，当你使用非转化的【杀】造成伤害时，你可以翻面，令该角色横置且此伤害+1",
          "wwyj_qianshang":"浅觞",
           "wwyj_qianshang_info":"当一名其他角色弃牌阶段弃牌结束时，你可选择其所弃置的牌中合理的一张立即使用之（若为装备牌则对你使用）",
          "wwyj_peiyin":"配音",
           "wwyj_peiyin_info":"</font><font color=#f00>锁定技</font> 当你失去装备区的牌后，你回复一点体力且摸一张牌",
          "wwyj_mingka":"民卡",
          "wwyj_mingka_info":"你使用【杀】对其他角色造成伤害时，你可以弃置至多两张装备牌令增加等量点的伤害 ",
          "wwyj_zhaonies":"造孽",
           "wwyj_nie":"孽",
            "wwyj_zhaonie2":"造孽",
            "wwyj_zhaonie2_info":"</font><font color=#f00>锁定技</font> 你须弃置X张牌（X为你本局游戏中所击杀的角色总数）",            		  
            "wwyj_zhaonie":"造孽",
            "wwyj_zhaonie_info":"</font><font color=#f00>锁定技</font> 若你本回合击杀过角色，则下个回合的准备阶段，你须弃置X张牌（X为你本局游戏中所击杀的角色总数）",            		    
		    "wwyj_miaoji":"妙计",
            "wwyj_miaoji_info":"回合外每轮限一次，当你需要使用【无懈可击】时，若你的武将牌背面朝上，你可以将武将牌翻面视为使用之",
		    "wwyj_qisi_shan":"奇思",
            "wwyj_qisi_shan_info":"当你需要打出一张【闪】时，若你的武将牌为正面朝上，你可以将武将牌翻面，视为打出之",
		    "wwyj_qisi_sha":"奇思",
            "wwyj_qisi_sha_info":"当你需要打出一张【杀】时，若你的武将牌为正面朝上，你可以将武将牌翻面，视为打出之",
		    "wwyj_qisi_use":"奇思",
            "wwyj_qisi_use_info":"当你需要使用一张基本牌时，若你的武将牌为正面朝上，你可以将武将牌翻面，则视为使用了该基本牌",
		    "wwyj_qisi":"奇思",
            "wwyj_qisi_info":"当你需要使用或打出一张基本牌时，若你的武将牌为正面朝上，你可以将武将牌翻面，视为使用或打出了该基本牌",		    
			"wwyj_lengyu":"冷雨",
			"wwyj_lengyu_info":"当你使用【杀】时，你可获得目标角色的一张手牌，若如此做，此【杀】造成伤害后，你须交给该角色一张手牌",
			"wwyj_lengyu2":"冷雨",
			"wwyj_lengyu2_info":"你须交给该角色一张手牌",
			"wwyj_junshen2":"军神",
			"wwyj_junshen2_info":"你使用的【杀】可指定任意名目标且无视目标的防具",
			"wwyj_junshen1":"军神",
			"wwyj_junshen1_info":"你使用的红色【杀】无次数限制，你使用的黑色【杀】无距离限制",
			"wwyj_junshen":"军神",
            "wwyj_junshen_info":"出牌阶段开始时，你可选择获得以下其中一项直到回合结束：1.你使用的红色【杀】无次数限制，你使用的黑色【杀】无距离限制；2.你使用的【杀】可指定任意名目标且无视目标的防具",
		    "wwyj_jisi":"即死",
            "wwyj_jisi_info":"你的回合开始时，你可令所有体力值为1的其他角色依次失去一点体力",
		    "wwyj_fansha":"反杀",
            "wwyj_fansha_info":"当你成为【杀】的目标时，你可弃置所有手牌中的【杀】，视为对来源使用一张【杀】",
		    "_wwyj_qiaoji":"巧技",
			"wwyj_qiaoji2":"巧技",
			"wwyj_qiaoji":"巧技",
            "wwyj_qiaoji_info":"当一名其他角色摸牌阶段结束时，你可以观看其摸到的手牌并选择获得其中的一张基本牌，或摸一张牌，若如此做，本回合内有角色使用【杀】时，你成为额外的目标",
            "wwyj_jianghun":"键魂",
            "wwyj_jianghun_info":"</font><font color=#f00>锁定技</font> 每轮游戏开始时，你随机获得一名未获得过的论外包角色的一个随机的技能（本技能须开启DIY的论外包，否则游戏会弹窗警告）",
            "wwyj_chengzhi":"承志",
            "wwyj_chengzhi_info":"非论外包的角色死亡时，你可以复制其所有技能和卡牌并获得之",            
            "wwyj_yanyu":"烟雨",
            "wwyj_yanyu_info":"当一名其他角色失去装备牌后，你可选择其中的一张立即使用之",
            "wwyj_bingmou":"兵谋",
            "wwyj_bingmou_info":"</font><font color=#f00>锁定技</font> 你的防御距离与你使用的【杀】的目标上限均等于你的攻击范围",           
            "wwyj_gaochang":"高产",
            "wwyj_gaochang_info":"你的摸牌阶段摸牌时，你可令摸牌数+X（X为偷师标记数），然后偷师标记清零",
            "wwyj_qiuxue":"求学",
            "wwyj_qiuxue_info":"<span class=greentext>觉醒技</span> 若你已发动至少3次【偷师】，你失去一点体力上限，回复1点体力并获得技能【高产】",
            "wwyj_toushi":"偷师",
            "wwyj_toushi_info":"出牌阶段限一次，你可以交给一名其他角色一张牌，若如此做，你获得一枚偷师标记并摸一张牌，且可选择获得该角色的一项技能（主公技、觉醒技、限定技除外）直到下个出牌阶段开始",         
            "wwyj_juedi":"绝地",
            "wwyj_juedi_info":"</font><font color=#f00>锁定技</font> 每当你造成或受到一点伤害获得一个“废”标记，标记达到五个“废”获得技能【求生】并失去此技能 ",
            "wwyj_qiusheng":"求生",
            "wwyj_qiusheng_info":"</font><font color=#f00>锁定技</font> 每当你进入濒死状态时，弃置一枚“废”标记，回复体力至两点",
            "wwyj_kazhan":"卡战",
            "wwyj_kazhan_info":"当一名角色的体力发生变化后，若其体力值为1，你可令其随机使用一张装备牌 <font color=#F0F>可突破</font>",
            "wwyj_nvshen":"女神",
            "wwyj_nvshen_info":"当一名其他男性角色受到伤害后，你可令其观看你的手牌，若其没有手牌，其摸一张牌，若其有手牌，你观看其手牌，若其手牌与你的手牌花色数相同，其回复一点体力，否则其与你各摸一张牌",
			"wwyj_guanli":"管理",
            "wwyj_guanli_info":"出牌阶段限一次，你可令一名其他角色随机弃置一张手牌，若这张手牌为：基本牌，你视为对其使用一张不计次数限制的【杀】；锦囊牌，你视为对其使用一张不能被无懈可击的决斗；装备牌，你使用之",           
            "wwyj_shengshen":"圣神",
            "wwyj_shengshen_info":"每轮限一次，当一名角色进入濒死状态时，你可以观看牌堆顶的两张牌，然后弃置其中一张红色牌视为对其使用一张【桃】。若其中没有红色牌且你有红色的手牌，你可以弃置你的所有红色手牌，视为对其使用一张【桃】",            
            "wwyj_kaiche":"开车",
            "wwyj_kaiche_info":"</font><font color=#f00>锁定技</font> 摸牌阶段摸牌时，你额外摸X张牌，你的手牌上限加X（X为场上女性角色数且至少为1）",
            "wwyj_jiguang_rsha":"极光",
            "wwyj_jiguang_rsha_info":"当你需要打出【杀】时，你可选择一名角色的装备区的武器牌或进攻马并令其弃置之，视为打出一张【杀】",
            "wwyj_jiguang_rshan":"极光",
            "wwyj_jiguang_rshan_info":"当你需要打出【闪】时，你可选择一名角色的装备区的防具牌或防御马或宝物牌并令其弃置之，视为打出一张【闪】",
            "wwyj_jiguang_shan":"极光",
            "wwyj_jiguang_shan_info":"当你需要使用【闪】时，你可选择一名角色的装备区的防具牌或防御马或宝物牌并令其弃置之，视为使用一张【闪】",
            "wwyj_jiguang_shan2":"极光",
            "wwyj_jiguang_shan2_info":"当你需要使用【闪】时，你可选择一名角色的装备区的防具牌或防御马或宝物牌并令其弃置之，视为使用一张【闪】",
            "wwyj_jiguang_sha":"极光",   
            "wwyj_jiguang_sha_info":"出牌阶段，你可选择一名角色的装备区的武器牌或进攻马并令其弃置之，视为使用一张【杀】",                        
            "wwyj_jiguang":"极光",
            "wwyj_jiguang_info":"你可在合适的时机选择一名角色的装备区的一张牌并令其弃置之，若此牌为：<li>武器牌或进攻马，视为使用或打出一张【杀】，若为使用【杀】则不计入使用杀的次数上限且每回合限一次<li>防具牌或防御马或宝物牌，视为使用或打出一张【闪】",            
            "wwyj_qianxu":"谦虚",
            "wwyj_qianxu_info":"（隔山打牛）</font><font color=#f00>锁定技</font> 你不能成为与你距离为1的角色使用的【杀】的目标，你使用的【杀】只能指定与你距离大于1的角色为目标，且你使用【杀】时至多额外指定一名目标",
            "wwyj_yixue":"义写",
            "wwyj_yixue_info":"当一名其他角色的回合结束时，若其已受伤，你可交给其一张手牌，若此时其手牌数比你的多，你摸一张牌",           
            "wwyj_liuxi1":"流溪",
            "wwyj_liuxi1_info":"</font><font color=#f00>锁定技</font> 当你成为【杀】的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此【杀】造成伤害，该角色摸一张牌然后翻面",
            "wwyj_liuxi":"流溪",
            "wwyj_liuxi_info":"</font><font color=#f00>锁定技</font> 当你成为【杀】的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此【杀】造成伤害，该角色摸一张牌然后翻面",
            "wwyj_daigeng":"代更",
            "wwyj_daigeng_info":"每轮限一次，当一名角色翻面至武将牌背面朝上时，当前回合结束后，你可以执行一个额外的回合",
            "wwyj_touliang1":"凉",
            "wwyj_touliang":"透凉",
            "wwyj_touliang_info":"结束阶段，你可选择攻击范围内的1至X（你的手牌中的花色数）名其他角色，你与其各摸一张牌，令其直到其回合结束时，不能使用或打出基本牌",
            "wwyj_kangxing":"抗性",
            "wwyj_kangxing_info":"当你成为其他角色的牌的唯一目标时，你可弃置一张与该牌同类别的手牌，令该牌的目标对调",
            "wwyj_qiangkang2":"强抗",
            "wwyj_qiangkang2_info":"</font><font color=#f00>锁定技</font> 你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌",
            "wwyj_qiangkang":"强抗",
            "wwyj_qiangkang_info":"</font><font color=#f00>锁定技</font> 你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌",
            "wwyj_tuikeng":"退坑",
            "wwyj_tuikeng_info":"</font><font color=#f00>锁定技</font> 你的防御距离加X（X为你已损失的体力值） <font color=#F0F>可突破</font>",                          
            "wwyj_chehuo":"车祸",
            "wwyj_chehuo_info":"</font><font color=#f00>锁定技</font> 游戏开始所有角色摸牌后或你进入游戏时，你废除所有的装备栏",
            "wwyj_kangfu":"康复",
            "wwyj_kangfu_info":"</font><font color=#f00>锁定技</font> 你的进攻距离+1；你的装备牌不计入手牌上限；当你脱离濒死状态或你击杀一名角色后，你回复一点体力并选择恢复一个装备栏",       
            "wwyj_jinzhu_shan":"烬铸",
            "wwyj_jinzhu_shan_info":"你可以把你的装备牌当做任意基本牌使用或打出",
            "wwyj_jinzhu_sha":"烬铸",
            "wwyj_jinzhu_sha_info":"你可以把你的装备牌当做任意基本牌使用或打出",
            "wwyj_jinzhu":"烬铸",
            "wwyj_jinzhu_info":"你可以把你的装备牌当做任意基本牌使用或打出",                       
            "wwyj_jilve":"极略",
            "wwyj_jilve_info":"​出牌阶段限X次（X为你的体力值），你可以将一张手牌当一张于本回合内未使用过的基本牌或非延时类锦囊牌（除无懈可击外）使用。",
            "wwyj_jipin":"济贫",
            "wwyj_jipin_info":"当一名角色摸牌时，若其手牌数小于其体力值，你可令其额外摸一张牌",
            "wwyj_chengpiao":"诚剽",
            "wwyj_chengpiao_info":"出牌阶段限一次，你可观看一名其他角色的手牌并选择使用其中一张",
            "wwyj_lilun":"理论",
            "wwyj_lilun_info":"每当你使用一张非延时性锦囊牌时，你可以观看牌堆顶的三张牌，获得其中的一张牌，然后将其余两张牌先后置于牌堆顶",
            "wwyj_yanguan":"严管",
            "wwyj_yanguan_info":"每名角色的回合限一次，每当一名其他角色使用非延时性锦囊牌时，你可以弃置一张手牌令其失效，然后你获得此牌",            
            "wwyj_jinxiu":"进修",
            "wwyj_jinxiu_info":"</font><font color=#f00>锁定技</font> 结束阶段你摸X张牌（X为你本回合造成的伤害次数）",
            "wwyj_ciya":"呲牙",
            "wwyj_ciya_info":"摸牌阶段开始时，你可少摸一张牌，然后视为对攻击范围内包含有你的任意名其他角色各使用一张【杀】",
            "wwyj_qianzhui":"潜追",
            "wwyj_qianzhui_info":"<span class=yellowtext>限定技</span> 当一名其他角色阵亡时，你选择失去技能【签到】或【嘤怪】，然后选择获得该角色的一个的技能",          
            "wwyj_yingguai":"嘤怪",
            "wwyj_yingguai_info":"当你受到伤害后，你可令一名其他角色随机使用一张延时性锦囊牌（闪电、乐不思蜀、兵粮寸断）",
            "wwyj_qiandao":"签到",
            "wwyj_qiandao_info":"当一名其他角色判定牌生效后，你可获得其一张牌",
            "wwyj_zuikui":"罪魁",
            "wwyj_zuikui_info":"</font><font color=#f00>锁定技</font> 当一名角色翻面至武将牌背面朝上或死亡时，所有其他的角色依次弃置一张牌",
            "wwyj_jiaoxiao":"叫嚣",
            "wwyj_jiaoxiao_info":"</font><font color=#f00>锁定技</font> 当你受到【杀】造成的伤害时，你获得伤害来源的一张牌，并且此伤害加一",
            "wwyj_daixue":"代写",
            "wwyj_daixue_info":"出牌阶段限一次，若你已获得的【琴棋书画】中的至少一项技能，你可选择其中一项交给一名没有【琴棋书画】中任意一项与你相同的其他角色",
            "wwyj_redaixue":"代写",
            "wwyj_redaixue_info":"出牌阶段限一次，若你已获得的【文武英杰】中的至少一项技能，你可选择其中一项交给一名没有【文武英杰】中任意一项与你相同的其他角色",            
            "wwyj_recaizhi1":"文",
            "wwyj_recaizhi2":"武",
            "wwyj_recaizhi3":"英",
            "wwyj_recaizhi4":"杰",
            "wwyj_caizhi1":"琴",
            "wwyj_caizhi2":"棋",
            "wwyj_caizhi3":"书",
            "wwyj_caizhi4":"画",
            "wwyj_caizhi":"才智",
            "wwyj_caizhi_info":"</font><font color=#f00>锁定技</font> 你的回合开始时，你随机从【琴棋书画】中获得一项你未获得的技能。当你受到伤害时，若你已获得的【琴棋书画】中的至少一项，随机移除其中一项，然后伤害减一<li>注：【琴棋书画】分别对应：卡战、对弈、极略、理论",
            "wwyj_recaizhi":"才智",
            "wwyj_recaizhi_info":"</font><font color=#f00>锁定技</font> 你的回合开始时，你随机从【文武英杰】中获得一项你未获得的技能。当你受到伤害时，若你已获得的【文武英杰】中的至少一项，随机移除其中一项，然后伤害减一<li>注：【文武英杰】分别对应：概念、咫尺、禁言、少主",            
            "wwyj_qunying":"群英",
            "wwyj_qunying_info":"结束阶段，你可以和一名其他角色交换手牌，若你们手牌数相同，你可以与其各摸一张牌。你与其交换的手牌差不得大于你与其的体力值之差 <font color=#F0F>可突破</font>",                        
            "wwyj_fengliu":"风流",
            "wwyj_fengliu_info":"游戏开始时、你进入游戏（对决）、你的回合开始、结束时，你可从五名随机的女性中选择一位并获得其所有的技能，直至重新发动此技能",
            "wwyj_baozao":"暴躁",
            "wwyj_baozao_info":"<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可令除你外的所有角色依次对伤害来源视为使用一张【杀】（直至其阵亡且限杀一轮），此时直到技能效果结束，每有一名角色受到伤害后，若你已受伤，你回复一点体力，否则你摸一张牌",
            "wwyj_xipi":"嘻皮",
            "wwyj_xipi_info":"</font><font color=#f00>锁定技</font> 当你成为其他角色使用的牌的唯一目标时，你获得场上随机一名其他角色的一张牌",
            "wwyj_qianfu":"潜伏",
            "wwyj_qianfu_info":"</font><font color=#f00>锁定技</font> 回合结束时，若你的武将牌正面朝上，你翻面。当你的武将牌背面朝上，你的防御距离为无限",
            "wwyj_ancha":"暗察",
            "wwyj_ancha2":"暗察",
            "wwyj_ancha_info":"当一名角色受到来源不为你的伤害后，你可观看伤害来源的手牌，然后该受到伤害的角色摸一张牌。若为你受到伤害，你将你的武将牌正面朝上，当前回合结束后，你进行一个额外的回合",
            "wwyj_huikeng":"回坑",
            "wwyj_huikeng_info":"出牌阶段限一次，你可随机展示X（其他角色数）张武将牌，然后逐一选择其中一张，然后按次序替换其他角色的武将牌（体力上限与体力不变），每替换一名角色你就摸一张牌",            
	        "wwyj_liangcha":"凉茶",
            "wwyj_liangcha_info":"</font><font color=#f00>锁定技</font> 游戏开始或你进入游戏或其他角色回合开始与结束时，处于此时机的其他角色失去所有的技能，并且翻面至武将牌背面朝上，若有角色的体力上限大于16，则其体力上限改为2",
	        "wwyj_fanghua":"芳华",
            "wwyj_fanghua_info":"</font><font color=#f00>锁定技</font> 你造成的伤害时，改为先失去等量的体力上限，再受到等同两倍此伤害值的伤害。摸牌阶段时（每回合限一次）额外摸X张牌（X为场上已受伤的角色数）",
            "wwyj_meiying":"魅影",
            "wwyj_meiying_info":"</font><font color=#f00>锁定技</font> 你的进攻与防御距离无限、你使用的牌无次数限制、部分合理的牌可指定任意名目标且不能成为其他角色的牌的目标；你使用的普通锦囊牌不能被无懈响应",           
            "wwyj_chuangshi":"创世",
            "wwyj_chuangshi_info":"<span class=greentext>觉醒技</span> 游戏开始所有角色摸牌后或你进入游戏时（对决模式），你令其他角色从十名备选角色（关羽、张飞、赵云、马超、马忠、公孙瓒、黄盖、吕蒙、仁王禁、许禇）中挑选一名并变身成为之 <font color=#F0F>可突破</font>",
            "wwyj_xiadan":"下单",
            "wwyj_xiadan_info":"出牌阶段限一次，你可“下单”交给“接单者”一张牌，其回复一点体力且其可使用一张【杀】，然后你选择获得一张基本牌或非延时锦囊牌",
            "wwyj_xiadan1":"单",
            "wwyj_xiadan1_info":"",
            "wwyj_jiedan":"接单",
            "wwyj_jiedan_info":"每名角色的出牌阶段限一次，其可以“下单”交给你一张牌，你回复一点体力且你此时可使用一张【杀】，然后其选择获得一张基本牌或非延时锦囊牌",
            
		    //"wwyjsha":"<font color=#f00>杀</font>",
            "wwyjsha":"杀",
            "_changename":"更名改姓",
            "wwyj_zhwpy":"阵亡",
            "wwyj_zhwpy_info":"该功能为试听本扩展的武将的阵亡配音",
            "_wwyj_yinglingfuhun":"英灵附魂",
            "wwyj_zhizun":"<font color=#f00>至尊荣耀</font>",	
        	"wwyj_zuozhe":"<span class=yellowtext>扩展作者</span>",	
	        "wwyj_fensi":"<span class=bluetext>粉丝玩家</span>",
	       		
	        		
            },
			};
       if(lib.device||lib.node){
				for(var i in wenwuyingjie.character){wenwuyingjie.character[i][4].push('ext:文武英杰/'+i+'.jpg');}
			}else{
				for(var i in wenwuyingjie.character){wenwuyingjie.character[i][4].push('db:extension-文武英杰:'+i+'.jpg');}
			}
			return wenwuyingjie;
		});		
		lib.config.all.characters.push('wenwuyingjie');		
		if(!lib.config.characters.contains('wenwuyingjie')) lib.config.characters.push('wenwuyingjie');
		lib.translate['wenwuyingjie_character_config']='<span style=\"color:#ff00cc\">文武英杰</span>';		     
      
	 game.addMode('wenwuyingjiepicture', {
            game: {
                syncMenu: true,
				createview: function(node,charalist,liblist){
					var player = ui.create.player(null, true);
					player.init(charalist[0]);
					player.node.avatar.setBackgroundImage('extension/文武英杰/'+charalist[0]+'.jpg');
					player.style.left = '3px';
					player.style.top = '15px';
					player.style.zIndex = '10';
					player.style.cursor = 'pointer';
					player.node.count.remove();
					player.node.hp.remove();
					player.style.transition = 'all 0.5s';
					node.appendChild(player);
					node.playernode = player;
			
					var dialog = ui.create.dialog('hidden');
					dialog.style.left = "0px";
					dialog.style.top = "0px";
					dialog.style.width = "100%";
					dialog.style.height = "205px";
					dialog.classList.add('fixed');
					dialog.noopen = true;
					node.appendChild(dialog);
					dialog.addText('<div><div id="Cdetail" style="width:72%;display:block;left:150px;text-align:left;font-size:16px"><span class="bluetext">角色介绍</span>：' +get.characterIntro(charalist[0])+'<br>' +liblist[0].join('<br>'));
					var dialog1 = ui.create.dialog('hidden');
					dialog1.style.left = "0px";
					dialog1.style.top = "220px";
					dialog1.style.width = "100%";
					dialog1.style.height = "100%";
					dialog1.classList.add('fixed');
					dialog1.noopen = true;
					node.appendChild(dialog1);
					dialog1.add([charalist, 'character'], false);
					for (var i = 0; i < dialog1.buttons.length; i++) {
						//dialog1.buttons[i].classList.add('show');//旧代码出现弹窗
						dialog1.buttons[i].classList.add('noclick');
						dialog1.buttons[i].value = i;
						dialog1.buttons[i].onclick = function () {
							player.init(charalist[this.value]);
							document.getElementById("Cdetail").innerHTML='<span class="bluetext">角色介绍</span>：' +get.characterIntro(charalist[this.value])+'<br>' +liblist[this.value];
							player.node.avatar.setBackgroundImage('extension/文武英杰/'+charalist[this.value]+'.jpg');								
						};
					}
				},
            },
            start: function () {
                ui.auto.hide();
                if (!lib.storage.scene) {
                    lib.storage.scene = {};
                }
                if (!lib.storage.stage) {
                    lib.storage.stage = {};
                }
                if (!_status.extensionmade) {
                    _status.extensionmade = [];
                }
                if (_status.extensionscene) {
                    game.save('scene', lib.storage.scene);
                }
                if (_status.extensionstage) {
                    game.save('stage', lib.storage.stage);
                }
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('fixed');
                dialog.classList.add('scroll1');
                dialog.classList.add('scroll2');
                dialog.classList.add('fullwidth');
                dialog.classList.add('fullheight');
                dialog.classList.add('noupdate');
                dialog.classList.add('character');
                dialog.contentContainer.style.overflow = 'visible';
                dialog.style.overflow = 'scroll';
                dialog.content.style.height = '100%';
                dialog.contentContainer.style.transition = 'all 0s';
                if (!lib.storage.directStage) dialog.open();
                var packnode = ui.create.div('.packnode', dialog);
                lib.setScroll(packnode);
                ui.background.setBackgroundImage('extension/文武英杰/wwyj_picture.jpg');
                //上一行为背景
                var clickCapt = function () {
                    var active = this.parentNode.querySelector('.active');
                    if (this.link == 'stage') {
                        if (get.is.empty(lib.storage.scene)) {
                            alert('请创建至少1个场景');
                            return;
                        }
                    }
                    if (active) {
                        if (active == this) return;
                        for (var i = 0; i < active.nodes.length; i++) {
                            active.nodes[i].remove();
                            if (active.nodes[i].showcaseinterval) {
                                clearInterval(active.nodes[i].showcaseinterval);
                                delete active.nodes[i].showcaseinterval;
                            }
                        }
                        active.classList.remove('active');
                    }
                    this.classList.add('active');
                    for (var i = 0; i < this.nodes.length; i++) {
                        dialog.content.appendChild(this.nodes[i]);
                    }
                    var showcase = this.nodes[this.nodes.length - 1];
                    showcase.style.height = (dialog.content.offsetHeight - showcase.offsetTop) + 'px';
                    if (typeof showcase.action == 'function') {
                        if (showcase.action(showcase._showcased ? false : true) !== false) {
                            showcase._showcased = true;
                        }
                    }
                    if (this._nostart) start.style.display = 'none';
                    else start.style.display = '';
                    game.save('currentBrawl', 'help');
                }
                // 应该是这里是制作列表的地方
                var createNode = function (name) {
                    var info = lib.brawl[name];
                    var node = ui.create.div('.dialogbutton.menubutton.large', info.name, packnode, clickCapt);
                    node.style.transition = 'all 0s';
                    var caption = info.name;
                    var modeinfo = '';
                    if (info.mode) {
                        modeinfo = get.translation(info.mode) + '模式';	// 这个是标注哪个模式下使用的
                    }
                    if (info.submode) {
                        if (modeinfo) {
                            modeinfo += ' - ';
                        }
                        modeinfo += info.submode;
                    }
                    var intro;
                    if (Array.isArray(info.intro)) {
                        intro = '<ul style="text-align:left;margin-top:10">';
                        if (modeinfo) {
                            intro += '<li>' + modeinfo;
                        }
                        for (var i = 0; i < info.intro.length; i++) {
                            intro += '<br>' + info.intro[i];
                        }
                    }
                    else {
                        intro = '';
                        if (modeinfo) {
                            intro += '（' + modeinfo + '）';
                        }
                        intro += info.intro;
                    }
                    var today = new Date();
                    var i = ui.create.div('.text center', intro);
                    i.style.overflow = 'scroll';
                    i.style.margin = '0px';
                    i.style.padding = '0px';
                    var showcase = ui.create.div();
                    showcase.style.margin = '0px';
                    showcase.style.padding = '0px';
                    showcase.style.width = '100%';
                    showcase.style.display = 'block'
                    showcase.style.overflow = 'scroll';
                    showcase.action = info.showcase;
                    showcase.link = name;
                    if (info.fullshow) {
                        node.nodes = [showcase];
                        showcase.style.height = '100%';
                    }
                    else {
                        node.nodes = [
                            i,
                            showcase,
                        ];
                    }
                    node.link = name;
                    node._nostart = info.nostart;
                    if (lib.storage.currentBrawl == name) {
                        clickCapt.call(node);
                    }
                    return node;
                }
                // 点那个巨大的“斗”之后
                var clickStart = function () {
                    dialog.delete();
                    ui.auto.show();
                    game.switchMode('identity');
                };
                // 制作那个“斗”的键的。去掉会出bug
                var start = ui.create.div('.menubutton.round.highlight', '←', dialog.content, clickStart);
                start.style.position = 'absolute';
                start.style.left = '-100px';
                start.style.right = 'auto';
                start.style.top = 'auto';
                start.style.bottom = '10px';
                start.style.width = '80px';
                start.style.height = '80px';
                start.style.lineHeight = '80px';
                start.style.margin = '0';
                start.style.padding = '5px';
                start.style.fontSize = '72px';
                start.style.zIndex = 3;
                start.style.transition = 'all 0s';
                start.hide();
                game.addScene = function (name, clear) {
                    var scene = lib.storage.scene[name];
                    var brawl = {
                        name: name,
                        intro: scene.intro,
                    };
                    for (var i in lib.brawl.scene.template) {
                        brawl[i] = get.copy(lib.brawl.scene.template[i]);
                    }
                    if (!scene.gameDraw) {
                        brawl.content.noGameDraw = true;
                    }
                    brawl.content.scene = scene;
                    lib.brawl['scene_' + name] = brawl;
                    var node = createNode('scene_' + name);
                    if (clear) {
                        game.addSceneClear();
                        clickCapt.call(node);
                        _status.sceneChanged = true;
                    }
                };
                game.addStage = function (name, clear) {
                    var stage = lib.storage.stage[name];
                    var brawl = {
                        name: name,
                        intro: stage.intro,
                        content: {}
                    };
                    for (var i in lib.brawl.stage.template) {
                        brawl[i] = get.copy(lib.brawl.stage.template[i]);
                    }
                    brawl.content.stage = stage;
                    lib.brawl['stage_' + name] = brawl;
                    var node = createNode('stage_' + name);
                    if (clear) {
                        game.addStageClear();
                        clickCapt.call(node);
                    }
                }
                game.removeScene = function (name) {
                    delete lib.storage.scene[name];
                    game.save('scene', lib.storage.scene);
                    _status.sceneChanged = true;
                    for (var i = 0; i < packnode.childElementCount; i++) {
                        if (packnode.childNodes[i].link == 'scene_' + name) {
                            if (packnode.childNodes[i].classList.contains('active')) {
                                for (var j = 0; j < packnode.childElementCount; j++) {
                                    if (packnode.childNodes[j].link == 'scene') {
                                        clickCapt.call(packnode.childNodes[j]);
                                    }
                                }
                            }
                            packnode.childNodes[i].remove();
                            break;
                        }
                    }
                }
                game.removeStage = function (name) {
                    delete lib.storage.stage[name];
                    game.save('stage', lib.storage.stage);
                    for (var i = 0; i < packnode.childElementCount; i++) {
                        if (packnode.childNodes[i].link == 'stage_' + name) {
                            if (packnode.childNodes[i].classList.contains('active')) {
                                for (var j = 0; j < packnode.childElementCount; j++) {
                                    if (get.is.empty(lib.storage.scene)) {
                                        if (packnode.childNodes[j].link == 'scene') {
                                            clickCapt.call(packnode.childNodes[j]);
                                        }
                                    }
                                    else {
                                        if (packnode.childNodes[j].link == 'stage') {
                                            clickCapt.call(packnode.childNodes[j]);
                                        }
                                    }
                                }
                            }
                            packnode.childNodes[i].remove();
                            break;
                        }
                    }
                }
                var sceneNode;
                for (var i in lib.brawl) {
                    if (get.config(i) === false) continue;
                    if (i == 'scene') {
                        sceneNode = createNode(i);
                    }
                    else {
                        if (i == 'updatelog' && location.hostname && !lib.device) continue;
                        if (i == 'downloadlog' && (!location.hostname || lib.device)) continue;
                        createNode(i);
                    }
                }
                if (sceneNode) {
                    game.switchScene = function () {
                        clickCapt.call(sceneNode);
                    }
                }
                for (var i in lib.storage.scene) {
                    game.addScene(i);
                }
                for (var i in lib.storage.stage) {
                    game.addStage(i);
                }
                if (!lib.storage.currentBrawl) {
                    clickCapt.call(packnode.firstChild);
                }
                game.save('lastStage');
                if (lib.storage.directStage) {
                    var directStage = lib.storage.directStage;
                    game.save('directStage');
                    clickStart(directStage);
                }
                if (lib.config.background_music != 'music_off' && get.config('wwyj_openmusic')) {
			        ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/wwyj_music.mp3";
                    setInterval(function(){						
	              	ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/wwyj_music.mp3";
	                   },85000);
                }
                lib.init.onfree();
            },
            brawl: {
                                
				wenwuview: {
                    name: '文武英杰',
                    mode: 'wenwuyingjiepicture',
                    intro: [lib.config.connect_nickname+'！'+'欢迎您来到《文武英杰》扩展的图鉴模式！' ],
                    showcase: function (init) {
						var node = this;
                        if (init) {	
var charalist = [];
for (var i in lib.characterPack['wenwuyingjie']) {
	var wenwu=[
	            "wwyj_shuihu","wwyj_remaliao","wwyj_liangchax","wwyj_shennais","wwyj_guihua","wwyj_duanges","wwyj_guchengs","wwyj_hezifengyun","wwyj_qingzhongs",
	            "wwyj_bohetang","wwyj_zhulinqixian","wwyj_niya","wwyj_zhongchengpantu","wwyj_huanyuxingcheng","wwyj_xuedaoshaozhu","wwyj_fux2","wwyj_shenwangquanjian",
	            "wwyj_wuqinggezi","wwyj_yiwangs","wwyj_liushas","wwyj_tilongjianiao","wwyj_qianshangs","wwyj_limuzi","wwyj_zhaonies","wwyj_yitiaoxianyu","wwyj_lengyus",
	            "wwyj_yanyumoran","wwyj_wali","wwyj_danwuyunxi","wwyj_jiguangs","wwyj_zhugejun","wwyj_taishangdaniu","wwyj_Show-K",'wwyj_shenzuo',"wwyj_shijian","wwyj_xuebi",
	            "wwyj_huijin","wwyj_chengxuyuan","wwyj_pipi","wwyj_Sukincen","wwyj_liangchas","wwyj_ziyage","wwyj_kanpoyiqie","wwyj_kelejiabing","wwyj_feicheng","wwyj_tianqikui",
	            "wwyj_zhichitianya","wwyj_jianyaleishao","wwyj_anshas","wwyj_zhuxiaoer","wwyj_ranqis","wwyj_chansuideshengming","wwyj_fanxings","wwyj_xingyunnvshen",
	            "wwyj_lunhuizhong","wwyj_daxiongxiaimao","wwyj_wzszhaoyun","wwyj_yangguangweiliang","wwyj_rongyaotaoge","wwyj_chenwus","wwyj_lei","wwyj_mengxinzhuanxing",
	            "wwyj_hualuo","wwyj_dasima","wwyj_rcanghai","wwyj_qingyao"
	            ];
	if(wenwu.contains(i)) charalist.push(i);
}
var liblist = [
               ['<span class="bluetext">创世</span>：<span class=greentext>觉醒技</span> 游戏开始所有角色摸牌后或你进入游戏时（对决模式），你令其他角色从十名备选角色（关羽、张飞、赵云、马超、马忠、公孙瓒、黄盖、吕蒙、仁王禁、许禇）中挑选一名并变身成为之 <font color=#F0F>可突破</font><br><span class="bluetext">潜伏</span>：</font><font color=#f00>锁定技</font> 回合结束时，若你的武将牌正面朝上，你翻面。当你的武将牌背面朝上，你的防御距离为无限<br><span class="bluetext">暗察</span>：当一名角色受到来源不为你的伤害后，你可观看伤害来源的手牌，然后该受到伤害的角色摸一张牌。若为你受到伤害，你将你的武将牌正面朝上，当前回合结束后，你进行一个额外的回合<br><span class="bluetext">回坑</span>：出牌阶段限一次，你可随机展示X（其他角色数）张武将牌，然后逐一选择其中一张，然后按次序替换其他角色的武将牌（体力上限与体力不变），每替换一名角色你就摸一张牌'],
			   ['<span class="bluetext">凉茶</span>：</font><font color=#f00>锁定技</font> 游戏开始或你进入游戏或其他角色回合开始与结束时，处于此时机的其他角色失去所有的技能，并且翻面至武将牌背面朝上，若有角色的体力上限大于16，则其体力上限改为2<br><span class="bluetext">芳华</span>：</font><font color=#f00>锁定技</font> 你造成的伤害时，改为先失去等量的体力上限，再受到等同两倍此伤害值的伤害。摸牌阶段时（每回合限一次）额外摸X张牌（X为场上已受伤的角色数）<br><span class="bluetext">魅影</span>：</font><font color=#f00>锁定技</font> 你的进攻与防御距离无限、你使用的牌无次数限制、部分合理的牌可指定任意名目标且不能成为其他角色的牌的目标；你使用的普通锦囊牌不能被无懈响应'],			 
	  		   ['<span class="bluetext">才智</span>：</font><font color=#f00>锁定技</font> 你的回合开始时，你随机从【琴棋书画】中获得一项你未获得的技能。当你受到伤害时，若你已获得的【琴棋书画】中的至少一项，随机移除其中一项，然后伤害减一<li>注：【琴棋书画】分别对应：卡战、对弈、极略、理论<br><span class="bluetext">代写</span>：出牌阶段限一次，若你已获得的【琴棋书画】中的至少一项技能，你可选择其中一项交给一名没有【琴棋书画】中任意一项与你相同的其他角色'],			 
			   ['<span class="bluetext">咫尺</span>：</font><font color=#f00>锁定技</font> 你计算与体力值不等于其手牌数的角色的距离为1，你对距离为1的角色使用【杀】造成伤害时，此伤害+1 <br><span class="bluetext">天涯</span>：<span class=greentext>觉醒技</span> 当你进入濒死状态时，你选择X名其他角色，摸X张牌，并随机展示X名文武英杰扩展的角色（X为至少为1的任意整数），你回复体力至体力上限并随机变身为【凉茶】或【玉蝴蝶】并选择令这些角色逐一将武将牌替换为其中一张（体力上限、体力不变）'],	           
			   ['<span class="bluetext">接单</span>：每名角色的出牌阶段限一次，其可以“下单”交给你一张牌，你回复一点体力且你此时可使用一张【杀】，然后其选择获得一张基本牌或非延时锦囊牌'],
			   ['<span class="bluetext">嘻皮</span>：</font><font color=#f00>锁定技</font> 当你成为其他角色使用的牌的唯一目标时，你获得场上随机一名其他角色的一张牌<br><span class="bluetext">暴躁</span>：<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可令除你外的所有角色依次对伤害来源视为使用一张【杀】（直至其阵亡且限杀一轮），此时直到技能效果结束，每有一名角色受到伤害后，若你已受伤，你回复一点体力，否则你摸一张牌'],
			   ['<span class="bluetext">风流</span>：</font><font color=#f00>锁定技</font> 游戏开始时、你的回合开始、结束时，你可从五名随机的女性中选择一位并获得其所有的技能，直至重新发动此技能<br><span class="bluetext">群英</span>：结束阶段，你可以和一名其他角色交换手牌，若你们手牌数相同，你可以与其各摸一张牌。你与其交换的手牌差不得大于你与其的体力值之差 <font color=#F0F>可突破</font>'],			   			   
	           ['<span class="bluetext">叫嚣</span>：</font><font color=#f00>锁定技</font> 当你受到【杀】造成的伤害时，你获得伤害来源的一张牌，并且此伤害加一<br><span class="bluetext">罪魁</span>：</font><font color=#f00>锁定技</font> 当一名角色翻面至武将牌背面朝上或死亡时，所有其他的角色依次弃置一张牌'],
			   ['<span class="bluetext">签到</span>：当一名其他角色判定牌生效后，你可获得其一张牌<br><span class="bluetext">嘤怪</span>：当你受到伤害后，你可令一名其他角色随机使用一张延时性锦囊牌（闪电、乐不思蜀、兵粮寸断）<br><span class="bluetext">潜追</span>：<span class=yellowtext>限定技</span> 当一名其他角色阵亡时，你选择失去技能【签到】或【嘤怪】，然后选择获得该角色的一个的技能'],
			   ['<span class="bluetext">呲牙</span>：摸牌阶段开始时，你可少摸一张牌，然后视为对攻击范围内包含有你的任意名其他角色各使用一张【杀】<br><span class="bluetext">进修</span>：</font><font color=#f00>锁定技</font> 结束阶段你摸X张牌（X为你本回合造成的伤害次数）'],
			   ['<span class="bluetext">理论</span>：每当你使用一张非延时性锦囊牌时，你可以观看牌堆顶的三张牌，获得其中的一张牌，然后将其余两张牌先后置于牌堆顶<br><span class="bluetext">严管</span>：每名角色的回合限一次，每当一名其他角色使用非延时性锦囊牌时，你可以弃置一张手牌令其失效，然后你获得此牌'],
			   ['<span class="bluetext">诚剽</span>：出牌阶段限一次，你可观看一名其他角色的手牌并选择使用其中一张<br><span class="bluetext">济贫</span>：当一名角色摸牌时，若其手牌数小于其体力值，你可令其额外摸一张牌'],
			   ['<span class="bluetext">极略</span>：出牌阶段限X次（X为你的体力值），你可以将一张手牌当一张于本回合内未使用过的基本牌或非延时类锦囊牌（除无懈可击外）使用<br><span class="bluetext">退坑</span>：</font><font color=#f00>锁定技</font> 你的防御距离加X（X为你已损失的体力值） <font color=#F0F>可突破</font>'],
			   ['<span class="bluetext">车祸</span>：</font><font color=#f00>锁定技</font> 游戏开始所有角色摸牌后或你进入游戏时，你废除所有的装备栏<br><span class="bluetext">康复</span>：</font><font color=#f00>锁定技</font> 你的进攻距离+1；你的装备牌不计入手牌上限；当你脱离濒死状态或你击杀一名角色后，你回复一点体力并选择恢复一个装备栏<br><span class="bluetext">烬铸</span>：你可以把你的装备牌当做任意基本牌使用或打出'],			   
			   ['<span class="bluetext">代更</span>：每轮限一次，当一名角色翻面至武将牌背面朝上时，当前回合结束后，你可以执行一个额外的回合<br><span class="bluetext">流溪</span>：</font><font color=#f00>锁定技</font> 当你成为【杀】的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此【杀】造成伤害，该角色摸一张牌然后翻面'],
			   ['<span class="bluetext">键魂</span>：</font><font color=#f00>锁定技</font> 每轮游戏开始时，你随机获得一名未获得过的论外包角色的一个随机的技能（本技能须开启DIY的论外包，否则游戏会弹窗警告）<br><span class="bluetext">承志</span>：非论外包的角色死亡时，你可以复制其所有技能和卡牌并获得之'],
			   ['<span class="bluetext">义写</span>：当一名其他角色的回合结束时，若其已受伤，你可交给其一张手牌，若此时其手牌数比你的多，你摸一张牌<br><span class="bluetext">谦虚</span>：</font><font color=#f00>锁定技</font> 你不能成为与你距离为1的角色使用的【杀】的目标，你使用的【杀】只能指定与你距离大于1的角色为目标，且你使用【杀】时至多额外指定一名目标'],
			   ['<span class="bluetext">极光</span>：你可在合适的时机选择一名角色的装备区的一张牌并令其弃置之，若此牌为：<li>武器牌或进攻马，视为使用或打出一张【杀】，若为使用【杀】则不计入使用杀的次数上限且每回合限一次<li>防具牌或防御马或宝物牌，视为使用或打出一张【闪】<br><span class="bluetext">卡战</span>：当一名角色的体力发生变化后，若其体力值为1，你可令其随机使用一张装备牌 <font color=#F0F>可突破</font>'],			   
			   ['<span class="bluetext">开车</span>：</font><font color=#f00>锁定技</font> 摸牌阶段摸牌时，你额外摸X张牌，你的手牌上限加X（X为场上女性角色数且至少为1）<br><span class="bluetext">圣神</span>：每轮限一次，当一名角色进入濒死状态时，你可以观看牌堆顶的两张牌，然后弃置其中一张红色牌视为对其使用一张【桃】。若其中没有红色牌且你有红色的手牌，你可以弃置你的所有红色手牌，视为对其使用一张【桃】'],
			   ['<span class="bluetext">管理</span>：出牌阶段限一次，你可令一名其他角色随机弃置一张手牌，若这张手牌为：基本牌，你视为对其使用一张不计次数限制的【杀】；锦囊牌，你视为对其使用一张不能被无懈可击的决斗；装备牌，你使用之<br><span class="bluetext">女神</span>：当一名其他男性角色受到伤害后，你可令其观看你的手牌，若其没有手牌，其摸一张牌，若其有手牌，你观看其手牌，若其手牌与你的手牌花色数相同，其回复一点体力，否则其与你各摸一张牌'],
			   ['<span class="bluetext">绝地</span>：</font><font color=#f00>锁定技</font> 每当你造成或受到一点伤害获得一个“废”标记，标记达到五个“废”获得技能【求生】并失去此技能<br><span class="bluetext">求生</span>：</font><font color=#f00>锁定技</font> 每当你进入濒死状态时，弃置一枚“废”标记，回复体力至两点'],
			   ['<span class="bluetext">偷师</span>：出牌阶段限一次，你可以交给一名其他角色一张牌，若如此做，你获得一枚偷师标记并摸一张牌，且可选择获得该角色的一项技能（主公技、觉醒技、限定技除外）直到下个出牌阶段开始<br><span class="bluetext">求学</span>：<span class=greentext>觉醒技</span> 若你已发动至少3次【偷师】，你失去一点体力上限，回复1点体力并获得技能【高产】<br><span class="bluetext">高产</span>：你的摸牌阶段摸牌时，你可令摸牌数+X（X为偷师标记数），然后偷师标记清零'],
			   ['<span class="bluetext">烟雨</span>：当一名其他角色失去装备牌后，你可选择其中的一张立即使用之<br><span class="bluetext">兵谋</span>：</font><font color=#f00>锁定技</font> 你的防御距离与你使用的【杀】的目标上限均等于你的攻击范围'],			   			   
			   ['<span class="bluetext">即死</span>：你的回合开始时，你可令所有体力值为1的其他角色依次失去一点体力<br><span class="bluetext">强抗</span>：</font><font color=#f00>锁定技</font> 你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌'],
			   ['<span class="bluetext">巧技</span>：当一名其他角色摸牌阶段结束时，你可以观看其摸到的手牌并选择获得其中的一张基本牌，或摸一张牌，若如此做，本回合内有角色使用【杀】时，你成为额外的目标<br><span class="bluetext">反杀</span>：当你成为【杀】的目标时，你可弃置所有手牌中的【杀】，视为对来源使用一张【杀】'],
			   ['<span class="bluetext">透凉</span>：结束阶段，你可选择攻击范围内的1至X（你的手牌中的花色数）名其他角色，你与其各摸一张牌，令其直到其回合结束时，不能使用或打出基本牌<br><span class="bluetext">抗性</span>：当你成为其他角色的牌的唯一目标时，你可弃置一张与该牌同类别的手牌，令该牌的目标对调'],
			   ['<span class="bluetext">冷雨</span>：当你使用【杀】时，你可获得目标角色的一张手牌，若如此做，此【杀】造成伤害后，你须交给该角色一张手牌<br><span class="bluetext">军神</span>：出牌阶段开始时，你可选择获得以下其中一项直到回合结束：1.你使用的红色【杀】无次数限制，你使用的黑色【杀】无距离限制；2.你使用的【杀】可指定任意名目标且无视目标的防具'],
			   ['<span class="bluetext">奇思</span>：当你需要使用或打出一张基本牌时，若你的武将牌为正面朝上，你可以将武将牌翻面，视为使用或打出了该基本牌<br><span class="bluetext">妙计</span>：回合外每轮限一次，当你需要使用【无懈可击】时，若你的武将牌背面朝上，你可以将武将牌翻面视为使用之'],
		       ['<span class="bluetext">造孽</span>：</font><font color=#f00>锁定技</font> 若你本回合击杀过角色，下个回合的准备阶段，你须弃置X张牌（X为你本局游戏中所击杀的角色总数）<br><span class="bluetext">配音</span>：</font><font color=#f00>锁定技</font> 当你失去装备区的牌后，你回复一点体力且摸一张牌<br><span class="bluetext">民卡</span>：你使用【杀】对其他角色造成伤害时，你可以弃置至多两张装备牌令增加等量点的伤害'],
			   ['<span class="bluetext">浅觞</span>：当一名其他角色弃牌阶段弃牌结束时，你可选择其所弃置的牌中合理的一张立即使用之（若为装备牌则对你使用）<br><span class="bluetext">退坑</span>：</font><font color=#f00>锁定技</font> 你的防御距离加X（X为你已损失的体力值） <font color=#F0F>可突破</font>'],
			   ['<span class="bluetext">咸鱼</span>：每回合限一次，当你使用非转化的【杀】造成伤害时，你可以翻面，令该角色横置且此伤害+1<br><span class="bluetext">伪新</span>：每回合限一次，当一名角色进入濒死状态时，你可以摸一张牌并翻面，令其回复一点体力'],
			   ['<span class="bluetext">神奈</span>：</font><font color=#f00>锁定技</font> 你使用【杀】的次数上限额外加X（你手牌中没带“伤害性”标签的牌的实时数量）<br><span class="bluetext">可爱</span>：当你受到伤害后或失去最后一张手牌后，你可令场上的所有男性角色依次选择是否交给你一张手牌，若其交给了你一张手牌，且其没有手牌或已受伤，其摸一张牌'],
			   ['<span class="bluetext">风华</span>：出牌阶段限一次，你可与一名其他角色拼点，若你赢，该角色翻面，本回合内，你与该角色的距离为1。若你没赢，你回复一点体力<br><span class="bluetext">遗忘</span>：当你使用的【杀】被闪避时，你可令目标角色翻面'],
			   ['<span class="bluetext">流沙</span>：回合外，当你失去牌时，你可弃置一名角色区域内的一张牌，若此牌具有攻击伤害性，你摸一张牌'],
			   ['<span class="bluetext">概念</span>：出牌阶段限一次，你可声明一张基本牌或普通锦囊牌，若如此做，若你未发动技能【黑猫】，你须失去一点体力并翻面，然后令场上所有其他角色弃置一张与你所声明的牌名字相同的手牌，否则你摸一张牌 <font color=#F0F>可突破</font><br><span class="bluetext">黑猫</span>：<span class=greentext>觉醒技</span> 当你进入濒死状态时，你弃置你区域内的所有牌并重置武将牌，回复体力至体力上限并将手牌补至体力上限，然后选择一名已阵亡的角色令其复活，体力回复至体力上限并补手牌至体力上限。若为身份局，你与其交换身份牌'],
			   ['<span class="bluetext">公告</span>：当你受到伤害后，你可声明一种牌的类型，然后令回合外曾对你造成过伤害的所有其他角色交给你一张手牌，否则你弃置其一张手牌并视为对其使用一张【杀】。若其交给你的牌与你声明的类型相同，其摸一张牌<br><span class="bluetext">禁言</span>出牌阶段限一次，若场上没角色被禁言，你可以选择一名其他角色并声明一种花色，其因被禁言只能使用该花色的牌，直到其使用这花色的牌才解除禁言状态'],
			   ['<span class="bluetext">星城</span>：当你受到伤害后，你可将牌堆顶的一张牌置于一名没有“星”的其他角色的武将牌上，称为“星”；当一名角色阵亡或受到你造成的伤害时，若其有“星”，你可以获得该角色的“星”<br><span class="bluetext">寰宇</span>：出牌阶段限一次，你可将场上所有有“星”的角色的“星”收为手牌，然后再逐一将一张手牌当“星”放置于这些角色的武将牌上<br><span class="bluetext">玄侠</span>：<span class=yellowtext>限定技</span> 当你进入濒死状态时，你可回复体力至场上“星”的数量，然后获得场上所有的“星”，并分别视为对这些角色使用一张【杀】 <font color=#F0F>可突破</font>'],
			   ['<span class="bluetext">释援</span>：出牌阶段限一次，你可以选择交给一至X名有手牌的其他角色各一张手牌，然后令这些角色分别交给你一张其他的手牌(X为场上手牌数小于其体力上限的角色数)<br><span class="bluetext">勤言</span>：</font><font color=#f00>锁定技</font> 回合内，当你失去所有手牌后，你将手牌补至当前体力值。你本回合对本回合发动“释援”的目标使用牌时，无视距离和次数限制'],
			   ['<span class="bluetext">弹杀</span>：当你受到伤害时，你可先选择是否令一名没“丸”标记的其他角色获得“丸”标记，然后你再对场上随机一名有“丸”标记的角色造成等量点伤害并令其随机弃置一张牌<br><span class="bluetext">论破</span>：任意有“丸”标记的角色弃牌阶段弃牌时，若其弃置的牌均为不同花色的牌时，你可选择一项：①回复一点体力并摸一张牌；②令该角色受到你造成的一点伤害，然后其弃置“丸”标记 <font color=#F0F>可突破</font>'],
			   ['<span class="bluetext">血刀</span>：当一名角色使用一张武器牌后，你可弃置其攻击范围内的一名其他角色的一张手牌，若这张手牌的颜色为红色，则使用武器牌的角色视为对被弃置手牌的角色使用一张不计入次数限制的【杀】<br><span class="bluetext">少主</span>：当你成为【杀】的目标时，你可令攻击范围包含该角色的除了你与其的所有其他角色依次对该角色选择使用一张【杀】，否则你获得该应使用【杀】的角色一张牌'],
			   ['<span class="bluetext">接管</span>：一名其他角色出牌阶段开始时，若其有手牌且手牌数不小于你的，你可以获得其一张手牌。若如此做，此阶段结束时，若其造成过伤害，则视为其对你使用一张【杀】，否则你视为对其使用一张【杀】<br><span class="bluetext">色批</span>：每名女性角色的出牌阶段限一次，其可弃置一张手牌，然后其弃置你的一张手牌，若这两张手牌颜色相同，其与你各选择摸一张牌或回复一点体力(若任一方没受伤则改为摸一张牌)，否则各摸一张牌'],
			   ['<span class="bluetext">鸽子</span>：转换技，出牌阶段限一次效果：<li>阳：你可弃置一张红色手牌并令任意名有手牌的角色各展示一张手牌，然后你可展示一张手牌，横置/重置展示牌与该牌颜色相同的角色，然后若已横置的角色比未模置的多，你摸一张牌<li>阴：你交给一名其他角色一张黑色手牌，令其选择至少一名角色，然后你选择横置/重置其所选择的或未选择的角色，然后若已横置的角色比未模置的多，你摸一张牌<br><span class="bluetext">无情</span>：</font><font color=#f00>锁定技</font> 当一名角色受到属性伤害后，你摸一张牌'],
               ['<span class="bluetext">短歌</span>：摸牌阶段摸牌时，你可放弃摸牌，改为展示牌堆顶的五张牌，然后选择获得其中任意张点数同为奇数或同为偶数的牌，再将剩下的牌按先后顺序置于牌堆顶<br><span class="bluetext">美化</span>：每名角色的回合限一次，当一名角色使用一张单一目标的非装备牌、非延时锦囊牌的牌时，你可展示牌堆顶的两张牌，选择改用其中合理的一张牌 <font color=#F0F>可突破</font>'],
               ['<span class="bluetext">孤城</span>：</font><font color=#f00>锁定技</font> 游戏轮数为奇数/偶数的回合，你不能成为点数为奇数/偶数的【杀】的目标 <br><span class="bluetext">葬月</span>：</font><font color=#f00>锁定技</font> 回合结束阶段，你可选择一种花色，然后令所有其他角色在其下个结束阶段前，其回合内使用该花色的牌后将武将牌翻面<br><span class="bluetext">飞雪</span>：当你使用【杀】时，你可令此【杀】额外指定所有武将牌背面朝上的角色，然后令这些角色翻面'],
               ['<span class="bluetext">风云</span>：</font><font color=#f00>锁定技</font> 当你受到伤害后，你从随机展示的三个【文武英杰】扩展的技能中选择一个获得(本技能除外)'],
               ['<span class="bluetext">青冢</span>：出牌阶段限一次，你可以弃置任意张基本牌，并指定你攻击范围内等量名其他角色，分别视为对这些角色使用了一张无次数限制的【杀】<br><span class="bluetext">接更</span>：每名角色的回合限一次，当一名其他角色使用一张单目标的基本牌或非延时性锦囊牌时（借刀杀人、无懈可击除外），你可视为你对目标角色也使用此牌'],
	           ['<span class="bluetext">薄荷</span>：出牌阶段限一次，你可声明一种类别的牌，然后直到你的下回合开始，每名角色的回合限一次，每当一名角色使用一张类别与该类别相同的非转化的牌时（不包括延时性锦囊牌），你可令其摸一张牌 <font color=#F0F>可突破</font><br><span class="bluetext">助善</span>：当一名角色使用杀时，若其手牌数不大于目标角色的手牌数，你可令此杀不可闪避'],
	           ['<span class="bluetext">续更</span>：当你的手牌数少于3张时，你可及时点击屏幕上牌桌区的小头像以摸一张牌 <br><span class="bluetext">琉璃</span>：当一名其他角色失去最后一张手牌后，你可将不同花色的手牌各一张交给其，若你交出的手牌中包含4种花色，你回复一点体力'],
	           ['<span class="bluetext">结缘</span>：出牌阶段限一次，你可以将任意张黑色牌交给没有『结缘』状态的角色，令其处于『结缘』状态。你防止受到『结缘』状态的角色造成的伤害，其受到伤害后，你摸一张牌。其可在其出牌阶段主动交给你一张红色牌解除『结缘』状态 <font color=#F0F>可突破</font> <br><span class="bluetext">扬善</span>：当你受到伤害后，若你有红色牌，你可摸两张牌，然后将一张红色牌当不以你和伤害来源为目标的【桃园结义】使用'],
	           ['<span class="bluetext">叛徒</span>：其他角色的出牌阶段限一次，若其有牌，其可发动“忠诚”令你回复一点体力或令你摸一张牌，若如此做，你须弃置其一张牌 <br><span class="bluetext">伪漫</span>：当你的体力值发生变化时，你可移动场上的一张牌'],
	           ['<span class="bluetext">对弈</span>：出牌阶段限一次，你可以与一名其他角色进行“对弈”：将牌堆顶的七张牌背面朝上展开，你与其轮流翻开展示其中的4张牌，然后未被翻开的牌置回牌堆顶，若翻开的牌中只有一种花色或花色各不相同，你获得这些牌并回复一点体力，否则其受到一点火／雷属性伤害 <br><span class="bluetext">急退</span>：当你成为杀的目标时，你可观看牌堆顶的5张牌并选择其中一张，然后你须补回一张花色或类型或点数与此牌相同的牌（置于最后），再将这些牌置回牌堆顶'],
               ['<span class="bluetext">剑牙</span>：当你受到伤害或杀死一名角色后，你可以选择一种牌的类型，然后随机观看牌堆中该类型的两张牌，然后选择获得其中任意张颜色为黑色的牌 <br><span class="bluetext">雷少</span>：</font><font color=#f00>锁定技</font> 你受到雷属性伤害时，伤害减一；你的黑色草花非装备牌均视为雷杀且无距离和次数限制'],
	           ['<span class="bluetext">俺杀</span>： </font><font color=#f00>锁定技</font> 你的进攻距离-X，回合内使用【杀】的次数上限+X（X为游戏轮数） <br><span class="bluetext">超越</span>：</font><font color=#f00>锁定技</font> 你使用杀造成伤害时，若该角色未受伤或已翻面或已横置，则此伤害+1 <font color=#F0F>可突破</font>'],
	           ['<span class="bluetext">伏击</span>：<font color=#F0F>隐匿技</font> 当你于其他角色的回合登场后，你可与该角色交换装备牌，然后其翻面 <br><span class="bluetext">国战</span>：回合结束时或一名角色阵亡后，你可以从场上除你之外的势力中选择其中一个，直到下次发动【国战】前，该势力的角色受到伤害或回复体力时你摸一张牌，且当你需要打出杀或闪时，你可观看此势力的一名其他角色的手牌，选择打出一张符合情况的手牌'],
	           ['<span class="bluetext">染柒</span>：</font><font color=#f00>锁定技</font> 当你受到伤害后，伤害来源须猜你手牌中的花色数，若其猜对，你回复一点体力，若其猜错，其翻面 <br><span class="bluetext">狼杀</span>：</font><font color=#f00>锁定技</font> 你与已翻面的角色的距离为1，你使用【杀】的次数上限+X（X为场上已翻面的角色数）'],
	           ['<span class="bluetext">生命</span>：</font><font color=#f00>锁定技</font> 游戏开始或你进入游戏时，将牌堆和弃牌堆的所有武器牌置于你的武将牌上，称为“命”，你的手牌上限+X（“命”数）<br><span class="bluetext">残碎</span>：</font><font color=#f00>锁定技</font> ①准备阶段，若你的武将牌上有“命”武器牌，你将其中一张置于一名角色的装备区（可替换原装备）；②一名其他角色对你造成伤害后，其获得你武将上的一张“命”牌。结算①或②后你摸等同与这张武器攻击范围数量的牌'],
	           ['<span class="bluetext">花月</span>：</font><font color=#f00>锁定技</font> 当你使用一张基本牌后，你将其置于武将牌上，称为“星”，然后摸一张牌；当你受到伤害后，若你有“星”，伤害来源获得你武将牌上的一张“星”牌，若该牌为红色，你回复1点体力，若为黑色，你对伤害来源造成1点伤害<br><span class="bluetext">繁星</span>：出牌阶段，若你有“星”，你可以弃置所有的“星”，视为你使用了X张【万箭齐发】（X为你弃置的“星”的数量且至多为7）'],
               ['<span class="bluetext">掷果</span>：</font><font color=#f00>锁定技</font> 场上女性角色摸牌阶段多摸一张牌并交给你一张牌，然后其回复1点体力 <br><span class="bluetext">评芳</span>：准备阶段开始时，你可观看随机六张未登场的女性武将牌并选择一张，然后你可用这张牌替换一名其他角色的武将牌'],
               ['<span class="bluetext">荣耀</span>：当你受到伤害后，你可将牌堆顶X（你已损失的体力值）张牌置于武将牌上，称为“耀”。若你有“耀”，你不能成为黑色牌的目标 <br><span class="bluetext">套鸽</span>：回合结束时，你可选择一项：1、弃置任意张“耀”并令等量的其他角色各摸一张牌，然后你回复一点体力；2、将任意张“耀”交给等量的其他角色，然后该角色须弃置一张与之不同类别的手牌，否则其失去一点体力'],
               ['<span class="bluetext">圣杯</span>：每回合每种情况限一次，当你需要使用或打出一张【杀】/【闪】时，你可以展示你手牌中的一张，然后若其他角色展示一张同名的手牌，视为你使用或打出之。若为使用【杀】则不计入次数 <br><span class="bluetext">辰午</span>：其他角色的弃牌阶段开始时，若其手牌数大于你的手牌数，你可选择展示其一张手牌，若此牌为基本牌或普通锦囊牌，你获得之，然后若为黑色牌，你可立即使用之'],
			   ['<span class="bluetext">统驭</span>：一名角色的回合开始时，你随机获得其一个技能，若为你的回合，你随机获得场上一名其他角色的一个技能，均直到回合结束 <br><span class="bluetext">雷佬</span>：</font><font color=#f00>锁定技</font> 雷属性伤害对你无效。场上其他角色受到雷属性伤害后，你选择一项：回复一点体力；摸一张牌；获得该角色一张牌'],
			   ['<span class="bluetext">前瞻</span>：牌堆顶的牌对你可见。每回合限X次（X为你的体力值），你可以使用或打出牌堆顶的牌（无懈可击除外），你以此法使用的牌无距离限制，若为【杀】则可额外指定一名目标 <font color=#F0F>可突破</font><br><span class="bluetext">转型</span>：当一名角色即将受到【杀】造成的非属性伤害时，你可令该伤害改为雷属性伤害，然后你摸一张牌'],
			   ['<span class="bluetext">落花</span>：</font><font color=#f00>锁定技</font> 准备阶段，你随机将场上其他角色的装备区的牌逐一装备到你的装备区（可替换，每个装备栏只触发一次） <br><span class="bluetext">涌技</span>：每名角色每回合限一次，当一名角色进入频死状态时，其可以选择弃置你的一张装备区的牌，然后回复一点体力'],
	     	   ['<span class="bluetext">奇兵</span>：当你使用【杀】即将造成伤害时，你可选择一项：<li>平西：令一名其他角色也受到一点伤害<li>镇北：令此伤害+1<li>征南：获得该角色的一张牌<li>破东：令该角色摸等同其当前已损失的体力值张牌（至少1张），然后翻面<li>定中：你回复一点体力或摸一张牌'],
	     	   ['<span class="bluetext">藏海</span>：</font><font color=#f00>锁定技</font> 当游戏开始时、你进入游戏时、一名角色进入濒死状态时，若你武将牌上的“海”不足五张，你摸一张牌并将牌堆顶的牌当“海”置于你的武将牌上，直至五张 <br><span class="bluetext">义更</span>：每回合限一次，当一名其他角色使用牌时，你可弃置一张你藏在武将牌上的其中一张与此牌花色相同的“海”，令此角色受到一点雷属性伤害'],
	     	   ['<span class="bluetext">浮慧</span>：每当你使用或打出一张点数的奇偶性与X的奇偶性相同的牌后，你摸一张牌，否则你弃置一张牌，当你因此失去最后一张手牌时，你可选择一项：①对一名其他角色造成1点伤害；②恢复一点体力，将武将牌翻面并令X重置。（X为你发动此技能的次数）<br><span class="bluetext">斗破</span>：</font><font color=#f00>锁定技</font> 当一名角色造成属性伤害后，若此伤害与其上次所造成的伤害属性相同，则你可使用一张牌（不计入次数限制）并重置其本回合内使用杀的次数'],
	     	   ['<span class="bluetext">篡改</span>：每回合限一次，当一名角色受到伤害后，你可选择令伤害来源的一张手牌转变为【毒】，若此伤害来源为你，则可令你的随机一张不为【毒】的手牌转变为【毒】 <br><span class="bluetext">抄袭</span>：</font><font color=#f00>锁定技</font> 其他角色的【毒】因弃置进入弃牌堆时，你获得之。你的【毒】按此规则分别视为：<li>黑桃→【杀】<li>红桃→【桃】<li>梅花→【酒】<li>方片→【闪】 <br><span class="bluetext">毒教</span>：<span class=yellowtext>主公技</span> 每回合限一次，其他【杀】势力的角色可以在其回合内将一张【毒】交给你'],
	     	   //['<span class="bluetext">技能名</span>：技能描述 <br><span class="bluetext">技能名</span>：技能描述'],
	     		
    	
	
			   ];
		lib.game.createview(node,charalist,liblist);
                        }
                    },
                },
            }
        }, {
            translate: '凉茶',
            config: {
	      			wwyj_openmusic: {
                    name: '开启专属音乐',
                    init: true,
                    intro: "开启本模式的专属音乐！",
                    frequent: true,
                    restart: true,
                },
				wwyj_openhelp:{
					name:"文武英杰",
					init:"1",
					frequent:true,					
					item:{"1":"模式介绍","2":"<li>本模式为图鉴模式，仅用于展示《文武英杰》扩展中的角色信息，包括角色介绍、角色技能、角色分析等内容。开启此模式前请先确保已将武将项的总开关已打开"},
				},
            },
            onremove: function () {
                game.clearModeConfig('wenwuyingjiepicture');
            }
        })
        image: ['extension/文武英杰/wenwuyingjiepicture.jpg'];
				
};
},help:{
    "文武英杰":"<li>特别鸣谢：极光、瓦力、短歌、诗笺、一条咸鱼、寰宇星城、无情鸽子<li>界限突破：<li>小苏的【群英】去掉体力差与手牌差的条件限制<li>寰宇星城的【玄侠】改为每两轮限一次<li>短歌的【短歌】改为展示牌堆顶九张牌并选择获得点数连续的牌、美化改为展示牌堆顶四张牌，但开局或进场时体力上限减一<li>可乐加冰、浅觞的【退坑】在体力值变化时摸X张牌（X为你已损失的体力值）<li>极光的【卡战】由随机使用装备牌改为选择使用牌堆或弃牌堆中的一个装备牌<li>fux2的【论破】改为锁定技且合并选项效果<li>薄荷糖的【薄荷】由“你令其摸一张牌”改为“其令你摸一张牌”<li>竹林七贤的【结缘】由交给对方黑色牌改为弃置黑色牌来发动<li>俺杀的【超越】有大改<li>水乎的【创世】由从十个标包武将中选改为从标准包所有的武将里选<li>松岛枫桂花的【概念】改为回合结束阶段发动<li>萌新转型的【前瞻】的牌加强至可选任意名角色<li>花落的【涌技】改为由自己选择发动",
},config:{
    "wwyj_help":{
    "nopointer":true,
	  	"name":"文武英杰",
	  	"init":"1",
	  	"item":{"1":"查看介绍",
	  	      "2":"<li>嗨～"+lib.config.connect_nickname+"！欢迎您前来体验《文武英杰》扩展哦！",
	  	      "3":"<li>本扩展的武将均为无名杀的众多作者与玩家（其性别以其圈内形象为参考），强度相对平衡，AI智商高，包含多种特效与模式",
	          "4":"<li>若武将界面没显示图片或点将找不到本扩展的角色，请先开启武将菜单界面的右上角的总开关，然后重启游戏，即可显示武将插画。关闭本扩展再重启就能删除本扩展",
	          "5":"<li>本扩展几乎零BUG、零弹窗，能在关闭兼容模式情况下流畅运行，若发现BUG可到无名杀官方扩展群：852740627 @凉茶 进行反馈，有技能设计的建议也可联系作者",	  	            
	  	 },
   	},				
	"wwyj_lebusishu":{
        "name":"乐不思蜀",
        "intro":"开启后重启游戏生效。武将被“乐”时会有个贴有“乐”字的门关着",
         init:false,
    },	
    "wwyj_tiesuolianhuan":{
        "name":"铁索连环",
        "intro":"开启后重启游戏生效。武将被横置时会有带锁铁链锁着",
         init:false,
    },		
    "wwyj_chat":{
        "name":"武将聊天",
        "intro":"开启后重启游戏生效。武将偶然会说话",
         init:false,
    },	    
	"wwyj_huanleyinxiao":{
        "name":"欢乐音效",
        "intro":"开启后重启游戏生效。玩家角色的出牌阶段开始时，会有敲门音伴“该你了”的提示音；玩家角色阵亡时会有失败音效；非玩家角色阵亡时，后台会唱两句《凉凉》送给死者",
         init:false,
    },	
    "wwyj_gengminggaixing":{
	    "name":'更名改姓',
        "intro":"开启后重启游戏生效，更改部分角色的姓名。<li>凉茶：玉蝴蝶<li>太上大牛：落影逝尘<li>松岛枫桂花：黑猫<li>短歌：短鸽<li>造孽：冰雪雨柔",
         init:false,
	},
	"wwyj_jiexiantupo":{
        "name":"界限突破",
        "intro":"开启后重启游戏生效。本扩展的部分角色的技能会发生突破性增强或改变，建议根据游戏强度环境而选择是否开启。具体改动的角色技能可详看：其它→帮助",
         init:false,
	},
	"wwyj_yanjinfandu":{
        "name":"严禁贩毒",
        "intro":"开启后重启游戏生效。卡牌【毒】在摸牌阶段摸到后不能交给其他人",
         init:false,
	},	
    "wwyj_changeGroup":{
	    "name":'替换势力',
        "intro":"开启后重启游戏生效，将本扩展中的“杀”势力随机替换为官方“魏、蜀、吴、群、晋”中的一种势力",
         init:false,         
	},		
	"wwyj_kaichangtexiao":{
        "name":"开场特效",
        "intro":"开启后重启游戏生效。游戏的第一轮开始时会播放开场动画、音效",
         init:false,
    },	
	"wwyj_jishatexiao":{
        "name":"击杀特效",
        "intro":"开启后重启游戏生效。场上有人击杀另一名角色后会播放动画（警告：建议不要在极短时间内同时击杀多名角色，容易卡死，原因不明，可稍等一个特效结束后再让其触发）",
         init:false,
    },  
	"wwyj_chakaidingpai":{
        "name":"查看顶牌",
        "intro":"开启后重启游戏生效。游戏时可点击屏幕中的“点击查看牌堆顶首张牌”文字按钮查看牌堆顶的牌",
         init:false,
    },
	"wwyj_hezizhashi":{
        "name":"何子诈尸",
        "intro":"稍改作者包的经典模式，开启后重启游戏生效。<li>效果：</font><font color=#f00>锁定技</font> 当一名角色阵亡后，若场上没有“何子风云”，“何子风云”在该阵亡角色身上复活，并令所有其他角色受到一点伤害，然后当前回合结束后，“何子风云”执行一个额外的回合",
         init:false,
	},
    "wwyj_sjwjp":{
        "name":"随机武将",
        "intro":"开启后重启游戏生效。每轮开始时，所有角色随机替换武将牌",
         init:false,
	},		
	"wwyj_yinglingfuhun":{
        "name":"英灵附魂",
        "intro":"开启后重启游戏生效。所有的角色在游戏开始或进入游戏时，各从五名随机武将中选一名当作“附灵武将”并获得其所有的技能",
         init:false,
	},	
	"wwyj_normalize": {
		"name":"天神降临",
		"intro":"开启后重启游戏生效。本扩展中的BOSS挑战武将能在非“挑战”模式下被选用",
	     init:false,
	},
	"wwyj_renormalize": {
		"name":"诛天灭地",
		"intro":"开启后重启游戏生效。所有武将的技能会被全部清空（慎用！此功能可克制99%的变态角色，比如弹丸杀的神座出流），关闭此开关再重启游戏后会恢复原样",
	     init:false,
	},	
	"wwyj_newtujianicon":{
        "name":"图鉴按钮",
        "intro":"开启后重启游戏生效。游戏开始后屏幕右下方会有个全新图鉴的按钮，点击后会打开全新图鉴",
         init:false,
    },
    "wwyj_updateicon":{
        "name":"日志按钮",
        "intro":"开启后重启游戏生效。游戏开始后屏幕右下方会有个更新日志的按钮，点击后会打开更新日志",
         init:false,
    },	    			    						
	"wwyj_xinname":{
           name:'武将前缀',
           intro:'选择是否显示★武将前缀',
           init:'show',
           item:{               
                 show:'显示',
                 hide:'隐藏',
           },
      },     	   	  		
	"wwyj_music":{
      name:"专属音乐",
      "intro":"专属背景音乐：可随意点播、切换优质动听的背景音乐",
       init:'1',
			item:{
				'1':'默认',				
				'2':'凉茶',				
			},			
		 onclick:function (item){
			switch (item){
			case '1':
			ui.backgroundMusic.pause();
			game.playBackgroundMusic();
			break;
			case '2':
    ui.backgroundMusic.pause();        
    ui.backgroundMusic.src=lib.assetURL+'extension/文武英杰/wwyj_music.mp3';    
    setInterval(function(){
	 	ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/wwyj_music.mp3";
	},85000);		    
 	    ui.backgroundMusic.addEventListener('ended',function(){
 	  
    if(lib.config.background_music=='music_off'){
        ui.backgroundMusic.src='';
    }else{
        ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/"+lib.config.wwyj_music+".mp3";
    };

				/*old:
				ui.backgroundMusic.src= lib.assetURL+"extension/文武英杰/"+lib.config.wwyj_music+".mp3";
				ui.backgroundMusic.play();*/
			});         
			break;	
			}
			}
		},			
	"wwyj_picture":{
           name:"专属图片",
          "intro":"专属背景图片：可随意切换精美的背景图片",
            init:'1',
			item:{
				'1':'默认背景',				
				'2':'花容月貌',
				'3':'文武英杰',
				'4':'明眸皓齿',
			},			
		 onclick:function (item){
			switch (item){
			case '1':		
			game.playwwyj('wwyj_dansha');
			game.broadcastAll()+ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
			break;
			case '2':
			game.playwwyj('wwyj_dansha');
			//game.wwyj_background();			
			var Animation = ui.create.div();
            Animation.setBackgroundImage('extension/文武英杰/wwyj_diaochan.png'); 	   									     	    
     	    Animation.style.left = '54%';   	    	 
            Animation.style.top = 'calc(45% - 90px)';       
            Animation.style.width = '401px';
            Animation.style.height = '450px';           
            Animation.style.backgroundSize = 'cover';       
            Animation.style['z-index']='1';
            ui.window.appendChild(Animation);
            ui.refresh(Animation); 
            break;	
			case '3':
			game.playwwyj('wwyj_dansha');
            ui.background.setBackgroundImage('extension/文武英杰/wenwuyingjie.jpg');			
            break;
			case '4':
			game.playwwyj('wwyj_dansha');			
            ui.background.setBackgroundImage('extension/文武英杰/wwyj_yuhudiebz.jpg');			
			break;
			}
			}
		},				
	/*"wwyjtujian":{
			"name":"<b><p align=center><span style=\"font-size:18px\">-------图鉴模式-------</span>",
			"clear":true,
			"nopointer":true,
 	},*/
	"wwyj_tujian":{
			"name":"图鉴模式",
			"init":"1",	
			item:{
			"1":"模式介绍",
			"2":"<li>点击下方的“打开图鉴”，会重启游戏并进入图鉴模式。本模式仅用于展示《文武英杰》扩展中的角色信息，包括角色介绍、角色技能、角色分析等内容。点击“打开图鉴”前请先确保已将武将项的总开关打开"
			},
	},
	"openwwyj_tujian":{
			"name":"打开图鉴<div>&gt;</div>",
			"clear":true,
			onclick:function(){
				game.playwwyj('wwyj_show');
				lib.config.characters.push('wenwuyingjie');
				game.saveConfig('mode','wenwuyingjiepicture');
				localStorage.setItem(lib.configprefix+'directstart',true);
				game.reload();
			},
	},
	
},package:{
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
        list:[		
		],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
   /* intro:(function(){
		var log = [			
			'当前版本：1.12',
			'更新日期：2024-08-24',
			'长按以下按钮开关可弹出功能介绍',			
		];		
		return '<p style="color:rgb(255,128,204); font-size:13px; line-height:13px; font-family:xingkai; text-shadow: 0 0 2px black;">' + log.join('<br>') + '</p>';
	})(), */
    author:"凉茶<br>本扩展一些扩展功能在无名杀v1.10.5版前有效，但不影响到武将<br>加入<div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5qvkVxl')><span style=\"color: green;text-decoration: underline;font-style: oblique\">无名杀官方扩展群</span></div><span style=\"font-style: oblique\">参与讨论</span>",
    diskURL:"",
    forumURL:"",
    version:"4.3",
},files:{"character":[],"card":[],"skill":[]}}})
