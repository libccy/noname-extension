game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新英魂之刃",content:function (config,pack){
if (config.nyhzrlj){
for (var i in lib.characterPack['nyhzrlj']) {
if (lib.character[i][4].indexOf("forbidai")<0){
lib.character[i][4].push("forbidai");
}
}
};
lib.config.jifen;
if (lib.config.jifen==undefined){
game.saveConfig('jifen',0);
};
lib.arenaReady.push(function(){	
	ui.jifen=ui.create.system('<span>'+lib.config.jifen+'</span><span>积分</span>',null,true);
                lib.setPopped(ui.jifen,function(){
                var uiintro=ui.create.dialog('hidden');
				uiintro.listen(function(e){
					e.stopPropagation();
				});			
                uiintro.add("请输入兑换码");
                var input;
                var node=uiintro.add('<input type="text" value="">');
                node.style.paddingTop=0;
                node.style.marginBottom='16px';
                input=node.firstChild;
                input.style.width='calc(100% - 20px)';
                input.onkeydown=function(e){
                    if(e.keyCode==13&&input.value){
                        var player=game.me;
                        var str=input.value;
						if(str==lib.config.coin.toString(19)+(lib.config.coin+6)*6+1+lib.config.coin.toString(18)){
							game.saveConfig('Pifunyhzr幻卡魔女2',true);
							game.say1('兑换成功');		
							setTimeout(function(){
								game.say1('获得皮肤——雪凝幻彩');
							},1500);							
						};
						if(str!=lib.config.coin.toString(19)+(lib.config.coin+6)*6+1+lib.config.coin.toString(18)){
							game.say1("无效兑换码");
						};
                        input.value='';
                    }
                    e.stopPropagation();
                }
                uiintro._onopen=function(){
                    input.focus();
                    list.scrollTop=list.scrollHeight;
                };		
                uiintro.add(ui.create.div('.placeholder.slim'));
				
			var brdqtkz=ui.create.div();
			brdqtkz.style.height='30px';
			brdqtkz.style.width='150px';
			brdqtkz.setBackgroundImage('extension/新英魂之刃/本人的其他扩展.png');			
			uiintro.add(brdqtkz);
			uiintro.add("<b><p align=center><span style=\"font-size:15px\">点击直接打开下载界面<br>需要更新时须开对应扩展</span></b>");			
			uiintro.add("单机版（原创）");
				

			var APet=ui.create.div(function(){
				var DPet="http://pan.baidu.com/s/1bWnzxc";
				if (lib.config.PetGXJZ1==0){
					if (lib.config.PetGXJZ!=1) window.open(DPet);
					if (lib.config.PetGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(DPet);
				};
				});
			APet.style.height='50px';
			APet.style.width='50px';
			APet.style.borderRadius='8px';
			if (lib.config.PetGXJZ1==0){
				if (lib.config.PetGXJZ!=1) APet.setBackgroundImage('extension/新英魂之刃/New宠物扩展.png');
				if (lib.config.PetGXJZ==1) APet.setBackgroundImage('extension/新英魂之刃/宠物扩展.png');
			}else{
				APet.setBackgroundImage('extension/新英魂之刃/New宠物扩展.png');
			};			
			uiintro.add(APet);			

			
			var Ajbms=ui.create.div(function(){
				var Djbms="http://pan.baidu.com/s/1dF5tikL";
				if (lib.config.jbmsGXJZ1==0){
					if (lib.config.jbmsGXJZ!=1) window.open(Djbms);
					if (lib.config.jbmsGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Djbms);
				};
				});
			Ajbms.style.height='50px';
			Ajbms.style.width='50px';
			Ajbms.style.borderRadius='8px';
			if (lib.config.jbmsGXJZ1==0){
				if (lib.config.jbmsGXJZ!=1) Ajbms.setBackgroundImage('extension/新英魂之刃/New兼并模式.png');
				if (lib.config.jbmsGXJZ==1) Ajbms.setBackgroundImage('extension/新英魂之刃/兼并模式.png'); 
			}else{
				Ajbms.setBackgroundImage('extension/新英魂之刃/New兼并模式.png');
			};			
			uiintro.add(Ajbms);				

			uiintro.add("单机版（修改）");
			
			var Ajsms=ui.create.div(function(){
				var Djsms="http://pan.baidu.com/s/1boJuiYz";
				if (lib.config.jsmsGXJZ1==0){
					if (lib.config.jsmsGXJZ!=1) window.open(Djsms);
					if (lib.config.jsmsGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Djsms);
				};
				});
			Ajsms.style.height='50px';
			Ajsms.style.width='50px';
			Ajsms.style.borderRadius='8px';
			if (lib.config.jsmsGXJZ1==0){
				if (lib.config.jsmsGXJZ!=1) Ajsms.setBackgroundImage('extension/新英魂之刃/New僵尸模式.png');
				if (lib.config.jsmsGXJZ==1) Ajsms.setBackgroundImage('extension/新英魂之刃/僵尸模式.png');
			}else{
				Ajsms.setBackgroundImage('extension/新英魂之刃/New僵尸模式.png');
			};			
			uiintro.add(Ajsms);
			
						
			var Awzzzms=ui.create.div(function(){
				var Dwzzzms="http://pan.baidu.com/s/1nuS3hnb";
				if (lib.config.wzzzmsGXJZ1==0){
					if (lib.config.wzzzmsGXJZ!=1) window.open(Dwzzzms);
					if (lib.config.wzzzmsGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Dwzzzms);
				};
				});
			Awzzzms.style.height='50px';
			Awzzzms.style.width='50px';
			Awzzzms.style.borderRadius='8px';
			if (lib.config.wzzzmsGXJZ1==0){
				if (lib.config.wzzzmsGXJZ!=1) Awzzzms.setBackgroundImage('extension/新英魂之刃/New王者之战模式.png');
				if (lib.config.wzzzmsGXJZ==1) Awzzzms.setBackgroundImage('extension/新英魂之刃/王者之战模式.png'); 
			}else{
				Awzzzms.setBackgroundImage('extension/新英魂之刃/New王者之战模式.png');
			};			
			uiintro.add(Awzzzms);
			
			uiintro.add("联机版（原创）");	

			var Ayys=ui.create.div(function(){
				var Dyys="http://pan.baidu.com/s/1sl8s1TN";
				if (lib.config.yysGXJZ1==0){
					if (lib.config.yysGXJZ!=1) window.open(Dyys);
					if (lib.config.yysGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Dyys);
				};
				});
			Ayys.style.height='50px';
			Ayys.style.width='50px';
			Ayys.style.borderRadius='8px';
			if (lib.config.yysGXJZ1==0){
				if (lib.config.yysGXJZ!=1) Ayys.setBackgroundImage('extension/新英魂之刃/New阴阳杀.png');
				if (lib.config.yysGXJZ==1) Ayys.setBackgroundImage('extension/新英魂之刃/阴阳杀.png'); 
			}else{
				Ayys.setBackgroundImage('extension/新英魂之刃/New阴阳杀.png');
			};			
			uiintro.add(Ayys);

			
			var Amjtz=ui.create.div(function(){
				var Dmjtz="http://pan.baidu.com/s/1mhQ3oXq";
				if (lib.config.mjtzGXJZ1==0){
					if (lib.config.mjtzGXJZ!=1) window.open(Dmjtz);
					if (lib.config.mjtzGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Dmjtz);
				};
				});
			Amjtz.style.height='50px';
			Amjtz.style.width='50px';
			Amjtz.style.borderRadius='8px';
			if (lib.config.mjtzGXJZ1==0){
				if (lib.config.mjtzGXJZ!=1) Amjtz.setBackgroundImage('extension/新英魂之刃/New民间拓展.png');
				if (lib.config.mjtzGXJZ==1) Amjtz.setBackgroundImage('extension/新英魂之刃/民间拓展.png'); 
			}else{
				Amjtz.setBackgroundImage('extension/新英魂之刃/New民间拓展.png');
			};			
			uiintro.add(Amjtz);		
			
			
			var Awsss=ui.create.div(function(){
				var Dwsss="http://pan.baidu.com/s/1jHGybGi";
				if (lib.config.wsssGXJZ1==0){
					if (lib.config.wsssGXJZ!=1) window.open(Dwsss);
					if (lib.config.wsssGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Dwsss);
				};
				});
			Awsss.style.height='50px';
			Awsss.style.width='50px';
			Awsss.style.borderRadius='8px';
			if (lib.config.wsssGXJZ1==0){
				if (lib.config.wsssGXJZ!=1) Awsss.setBackgroundImage('extension/新英魂之刃/New万世神兽.png');
				if (lib.config.wsssGXJZ==1) Awsss.setBackgroundImage('extension/新英魂之刃/万世神兽.png');
			}else{
				Awsss.setBackgroundImage('extension/新英魂之刃/New万世神兽.png');
			};			
			uiintro.add(Awsss);	

			uiintro.add("联机版（修改）");				
			
			var Ajlsg=ui.create.div(function(){
				var Djlsg="http://pan.baidu.com/s/1boX7p4z";
				if (lib.config.jlsgGXJZ1==0){
					if (lib.config.jlsgGXJZ!=1) window.open(Djlsg);
					if (lib.config.jlsgGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Djlsg);
				};
				});
			Ajlsg.style.height='50px';
			Ajlsg.style.width='50px';
			Ajlsg.style.borderRadius='8px';
			if (lib.config.jlsgGXJZ1==0){
				if (lib.config.jlsgGXJZ!=1) Ajlsg.setBackgroundImage('extension/新英魂之刃/New极略三国.png');
				if (lib.config.jlsgGXJZ==1) Ajlsg.setBackgroundImage('extension/新英魂之刃/极略三国.png');
			}else{
				Ajlsg.setBackgroundImage('extension/新英魂之刃/New极略三国.png');;
			};			
			uiintro.add(Ajlsg);			
			

			var Adiywulj=ui.create.div(function(){
				var Ddiywulj="http://pan.baidu.com/s/1miGAniC";
				if (lib.config.diywuljGXJZ1==0){
					if (lib.config.diywuljGXJZ!=1) window.open(Ddiywulj);
					if (lib.config.diywuljGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Ddiywulj);
				};
				});
			Adiywulj.style.height='50px';
			Adiywulj.style.width='50px';
			Adiywulj.style.borderRadius='8px';
			if (lib.config.diywuljGXJZ1==0){
				if (lib.config.diywuljGXJZ!=1) Adiywulj.setBackgroundImage('extension/新英魂之刃/Newdiy武将联机.png');
				if (lib.config.diywuljGXJZ==1) Adiywulj.setBackgroundImage('extension/新英魂之刃/diy武将联机.png');
			}else{
				Adiywulj.setBackgroundImage('extension/新英魂之刃/Newdiy武将联机.png');
			};			
			uiintro.add(Adiywulj);


			var Ahxlj=ui.create.div(function(){
				var Dhxlj="http://pan.baidu.com/s/1boIEndt";
				if (lib.config.hxljGXJZ1==0){
					if (lib.config.hxljGXJZ!=1) window.open(Dhxlj);
					if (lib.config.hxljGXJZ==1) alert("当前已是最新版"); 
				}else{
					window.open(Dhxlj);
				};
				});
			Ahxlj.style.height='50px';
			Ahxlj.style.width='50px';
			Ahxlj.style.borderRadius='8px';
			if (lib.config.hxljGXJZ1==0){
				if (lib.config.hxljGXJZ!=1) Ahxlj.setBackgroundImage('extension/新英魂之刃/New华夏联机.png');
				if (lib.config.hxljGXJZ==1) Ahxlj.setBackgroundImage('extension/新英魂之刃/华夏联机.png');
			}else{
				Ahxlj.setBackgroundImage('extension/新英魂之刃/New华夏联机.png');
			};			
			uiintro.add(Ahxlj);

			uiintro.add("<b><p align=center><span style=\"font-size:15px\">联机版本需要双方都有扩展才能进行游戏，否则客机无法选用武将</span></b>");		
			uiintro.add("<b><p align=center><span style=\"font-size:15px\">修改——在别人的扩展中加入自己的代码或用别人的扩展驱动自己的扩展</span></b>");					
            return uiintro;
        },220);
});	
	if(config.gongchengmoshi){
	game.addCharacterPack({
       character:{
            "蓝方城池":["","",20,["budong","bumo","shenglitiaojian1","shenglitiaojian3","threatencfz"],["forbidai"]],
            "红方城池":["","",20,["budong","bumo","shenglitiaojian2","shenglitiaojian4","threatencfz"],["forbidai"]],	
		},
		skill:{
            budong:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
trigger.untrigger();
trigger.finish();
},
            },
            bumo:{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
player.discard(player.get("hej"),99999);
},
            },
            shenglitiaojian1:{
                trigger:{
                    player:"dying",
                },
                forced:true,
                content:function (){
					if (game.me.side==true){
					game.over(true);
					game.increaseJifen(3);
					} 
					else{
					game.over(false);		
					}
},
            },
            shenglitiaojian2:{
                trigger:{
                    player:"dying",
                },
                forced:true,
                content:function (){
					if (game.me.side==false){
					game.over(true);
					game.increaseJifen(3);
					} 
					else{
					game.over(false);		
					}
},
            },
         shenglitiaojian3:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
        filter:function (event,player){
            return game.players.length==3;
        },
                content:function (){
                for(var i=0;i<game.players.length;i++){
                if (game.players[i].hasSkill('shenglitiaojian4')){    
                if (player.hp>game.players[i].hp&&game.me.side==false){
                game.over(true);    
                }
                else if(player.hp==game.players[i].hp){
                    game.over();        
                    }
                else{
                    game.over(false);        
                    }					
                }
                }
},
            },
            shenglitiaojian4:{

			},						
            threatencfz:{
        ai:{
	threaten:10,
            }
			},			
			
		},	
		translate:{
            "蓝方城池":"蓝方城池",
            "红方城池":"红方城池",						
            budong:"",
            "budong_info":"",
            bumo:"",
            "bumo_info":"",
            shenglitiaojian1:"",
            "shenglitiaojian_info":"",
            shenglitiaojian2:"",
            "shenglitiaojian_info":"",	
            threatencfz:"",
            "threatencfz_info":"",	
            shenglitiaojian3:"",
            "shenglitiaojian3_info":"",	
            shenglitiaojian4:"",
            "shenglitiaojian4_info":"",							
		}	
},'攻城模式');		
	if ( lib.brawl ) {
lib.brawl.gongchengmoshi = {
            name:'攻城模式',
            mode:'chess',			
            intro:"",
showcase:function(init){
gcms=ui.create.div();
gcms.style.height='400px';
gcms.style.width='500px';
gcms.style.left='calc(50% - 250px)';
gcms.style.top='0px';
gcms.setBackgroundImage('extension/新英魂之刃/gcmsjm.png');
this.appendChild(gcms);
},			
			    content:{
                gameStart:function(){
                    for(var w=0;w<game.players.length;w++){					
                        game.players[w].addSkill('chengAddFriend');
                        game.players[w].addSkill('chengAddEnemy');
                    }
					}
                },
			
			
		init:function(){	
		game.saveConfig('chess_obstacle','0','chess');
		game.saveConfig('battle_number','3','chess');
		game.saveConfig('single_control',false,'chess');
		game.saveConfig('seat_order','交替','chess');

		
		lib.skill.chengAddFriend={
				trigger:{player:'gameDrawAfter'},
				forced:true,
				content:function(){	
				var chengFriend=game.addChessPlayer();
				chengFriend.init("红方城池");
				chengFriend.side=true;	
			    chengFriend.setIdentity('城');				
if (game.players.length<4){					
for(var i=0;i<game.players.length;i++){					
var xy=game.players[i].getXY();        
if (xy[0]==7&&xy[1]==4) {
game.swapSeat(game.players[i],chengFriend);
}
}					
} 
if (4<=game.players.length<6){
for(var i=0;i<game.players.length;i++){					
var xy=game.players[i].getXY();        
if (xy[0]==9&&xy[1]==6) {
game.swapSeat(game.players[i],chengFriend);
}
}						
}
if (6<=game.players.length<8){
for(var i=0;i<game.players.length;i++){					
var xy=game.players[i].getXY();        
if (xy[0]==11&&xy[1]==7) {
game.swapSeat(game.players[i],chengFriend);
}
}						
}
if (game.players.length==8){
for(var i=0;i<game.players.length;i++){					
var xy=game.players[i].getXY();        
if (xy[0]==12&&xy[1]==8) {
game.swapSeat(game.players[i],chengFriend);
}
}						
}
			if (game.players.length<4){	
			chengFriend.moveTo(7,4)
			} 
			if (4<=game.players.length<6){
			chengFriend.moveTo(9,6)	
			}
			if (6<=game.players.length<8){
			chengFriend.moveTo(11,7)	
			}		
			if (game.players.length==8){
			chengFriend.moveTo(12,8)	
			}					
}
}

lib.skill._chengBuff={
				trigger:{
					player:'phaseBefore'
					},
				forced:true,
				content:function(){
for(var i=0;i<game.players.length;i++){					
if (game.players[i].hasSkill('bumo')){
if (game.players[i]!==player&&get.distance(player,game.players[i])<=1){
if (player.side==game.players[i].side){
player.recover();	
}		
}	
}
}
}
}

			
		lib.skill.chengAddEnemy={
				trigger:{player:'gameDrawAfter'},
				forced:true,
				content:function(){
				var chengEnemy=game.addChessPlayer();
				chengEnemy.moveTo(0,0);
				chengEnemy.init("蓝方城池");
				chengEnemy.side=false;	
			    chengEnemy.setIdentity('城');					
for(var i=0;i<game.players.length;i++){					
var xy=game.players[i].getXY();        
if (xy[0]==0&&xy[1]==0) {
game.swapSeat(game.players[i],chengEnemy);
}
}					
}
}
}


}
}
};       
		if(config.xyhzr){
game.addCardPack({	
			skill:{          
	  "_KAnyhzr血肉钩索":{
                group:["_KAnyhzr血肉钩索_1","_KAnyhzr血肉钩索_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr血肉钩索'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr血肉钩索==1||player.storage._KAnyhzr血肉钩索!=undefined)    return false;
return player.num('h',{name:'KAnyhzr血肉钩索'})>0;
},
                        content:function (){
player.storage._KAnyhzr血肉钩索=1;
player.addSkill('nyhzr血肉钩索');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr血肉钩索'})<=0&&player.storage._KAnyhzr血肉钩索==1;
},
                        content:function (){
player.storage._KAnyhzr血肉钩索=undefined;
player.removeSkill('nyhzr血肉钩索');
},
                    },
                },
            },            
			"_KAnyhzr腐蚀瘟疫":{
                group:["_KAnyhzr腐蚀瘟疫_1","_KAnyhzr腐蚀瘟疫_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr腐蚀瘟疫'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr腐蚀瘟疫==1||player.storage._KAnyhzr腐蚀瘟疫!=undefined)    return false;
return player.num('h',{name:'KAnyhzr腐蚀瘟疫'})>0;
},
                        content:function (){
player.storage._KAnyhzr腐蚀瘟疫=1;
player.addSkill('nyhzr腐蚀瘟疫');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr腐蚀瘟疫'})<=0&&player.storage._KAnyhzr腐蚀瘟疫==1;
},
                        content:function (){
player.storage._KAnyhzr腐蚀瘟疫=undefined;
player.removeSkill('nyhzr腐蚀瘟疫');
},
                    },
                },
            },            
			"_KAnyhzr腐肉吸噬":{
                group:["_KAnyhzr腐肉吸噬_1","_KAnyhzr腐肉吸噬_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr腐肉吸噬'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr腐肉吸噬==1||player.storage._KAnyhzr腐肉吸噬!=undefined)    return false;
return player.num('h',{name:'KAnyhzr腐肉吸噬'})>0;
},
                        content:function (){
player.storage._KAnyhzr腐肉吸噬=1;
player.addSkill('nyhzr腐肉吸噬');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr腐肉吸噬'})<=0&&player.storage._KAnyhzr腐肉吸噬==1;
},
                        content:function (){
player.storage._KAnyhzr腐肉吸噬=undefined;
player.removeSkill('nyhzr腐肉吸噬');
},
                    },
                },
            },            
			"_KAnyhzr致命啃咬":{
                group:["_KAnyhzr致命啃咬_1","_KAnyhzr致命啃咬_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr致命啃咬'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr致命啃咬==1||player.storage._KAnyhzr致命啃咬!=undefined)    return false;
return player.num('h',{name:'KAnyhzr致命啃咬'})>0;
},
                        content:function (){
player.storage._KAnyhzr致命啃咬=1;
player.addSkill('nyhzr致命啃咬');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr致命啃咬'})<=0&&player.storage._KAnyhzr致命啃咬==1;
},
                        content:function (){
player.storage._KAnyhzr致命啃咬=undefined;
player.removeSkill('nyhzr致命啃咬');
},
                    },
                },
            },            
			"_KAnyhzr仙灵伙伴":{
                group:["_KAnyhzr仙灵伙伴_1","_KAnyhzr仙灵伙伴_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr仙灵伙伴'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr仙灵伙伴==1||player.storage._KAnyhzr仙灵伙伴!=undefined)    return false;
return player.num('h',{name:'KAnyhzr仙灵伙伴'})>0;
},
                        content:function (){
player.storage._KAnyhzr仙灵伙伴=1;
player.addSkill('nyhzr仙灵伙伴');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr仙灵伙伴'})<=0&&player.storage._KAnyhzr仙灵伙伴==1;
},
                        content:function (){
player.storage._KAnyhzr仙灵伙伴=undefined;
player.removeSkill('nyhzr仙灵伙伴');
},
                    },
                },
            },            
			"_KAnyhzr奥妙冲击":{
                group:["_KAnyhzr奥妙冲击_1","_KAnyhzr奥妙冲击_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr奥妙冲击'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr奥妙冲击==1||player.storage._KAnyhzr奥妙冲击!=undefined)    return false;
return player.num('h',{name:'KAnyhzr奥妙冲击'})>0;
},
                        content:function (){
player.storage._KAnyhzr奥妙冲击=1;
player.addSkill('nyhzr奥妙冲击');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr奥妙冲击'})<=0&&player.storage._KAnyhzr奥妙冲击==1;
},
                        content:function (){
player.storage._KAnyhzr奥妙冲击=undefined;
player.removeSkill('nyhzr奥妙冲击');
},
                    },
                },
            },            
			"_KAnyhzr迷藏印记":{
                group:["_KAnyhzr迷藏印记_1","_KAnyhzr迷藏印记_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr迷藏印记'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr迷藏印记==1||player.storage._KAnyhzr迷藏印记!=undefined)    return false;
return player.num('h',{name:'KAnyhzr迷藏印记'})>0;
},
                        content:function (){
player.storage._KAnyhzr迷藏印记=1;
player.addSkill('nyhzr迷藏印记');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr迷藏印记'})<=0&&player.storage._KAnyhzr迷藏印记==1;
},
                        content:function (){
player.storage._KAnyhzr迷藏印记=undefined;
player.removeSkill('nyhzr迷藏印记');
},
                    },
                },
            },            
			"_KAnyhzr闪耀之光":{
                group:["_KAnyhzr闪耀之光_1","_KAnyhzr闪耀之光_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr闪耀之光'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr闪耀之光==1||player.storage._KAnyhzr闪耀之光!=undefined)    return false;
return player.num('h',{name:'KAnyhzr闪耀之光'})>0;
},
                        content:function (){
player.storage._KAnyhzr闪耀之光=1;
player.addSkill('nyhzr闪耀之光');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr闪耀之光'})<=0&&player.storage._KAnyhzr闪耀之光==1;
},
                        content:function (){
player.storage._KAnyhzr闪耀之光=undefined;
player.removeSkill('nyhzr闪耀之光');
},
                    },
                },
            },            
			"_KAnyhzr恶魔冲锋":{
                group:["_KAnyhzr恶魔冲锋_1","_KAnyhzr恶魔冲锋_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr恶魔冲锋'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr恶魔冲锋==1||player.storage._KAnyhzr恶魔冲锋!=undefined)    return false;
return player.num('h',{name:'KAnyhzr恶魔冲锋'})>0;
},
                        content:function (){
player.storage._KAnyhzr恶魔冲锋=1;
player.addSkill('nyhzr恶魔冲锋');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr恶魔冲锋'})<=0&&player.storage._KAnyhzr恶魔冲锋==1;
},
                        content:function (){
player.storage._KAnyhzr恶魔冲锋=undefined;
player.removeSkill('nyhzr恶魔冲锋');
},
                    },
                },
            },            
			"_KAnyhzr恐惧结界":{
                group:["_KAnyhzr恐惧结界_1","_KAnyhzr恐惧结界_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr恐惧结界'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr恐惧结界==1||player.storage._KAnyhzr恐惧结界!=undefined)    return false;
return player.num('h',{name:'KAnyhzr恐惧结界'})>0;
},
                        content:function (){
player.storage._KAnyhzr恐惧结界=1;
player.addSkill('nyhzr恐惧结界');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr恐惧结界'})<=0&&player.storage._KAnyhzr恐惧结界==1;
},
                        content:function (){
player.storage._KAnyhzr恐惧结界=undefined;
player.removeSkill('nyhzr恐惧结界');
},
                    },
                },
            },            
			"_KAnyhzr镰刀挥舞":{
                group:["_KAnyhzr镰刀挥舞_1","_KAnyhzr镰刀挥舞_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr镰刀挥舞'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr镰刀挥舞==1||player.storage._KAnyhzr镰刀挥舞!=undefined)    return false;
return player.num('h',{name:'KAnyhzr镰刀挥舞'})>0;
},
                        content:function (){
player.storage._KAnyhzr镰刀挥舞=1;
player.addSkill('nyhzr镰刀挥舞');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr镰刀挥舞'})<=0&&player.storage._KAnyhzr镰刀挥舞==1;
},
                        content:function (){
player.storage._KAnyhzr镰刀挥舞=undefined;
player.removeSkill('nyhzr镰刀挥舞');
},
                    },
                },
            },            
			"_KAnyhzr恐惧镰刀":{
                group:["_KAnyhzr恐惧镰刀_1","_KAnyhzr恐惧镰刀_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr恐惧镰刀'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr恐惧镰刀==1||player.storage._KAnyhzr恐惧镰刀!=undefined)    return false;
return player.num('h',{name:'KAnyhzr恐惧镰刀'})>0;
},
                        content:function (){
player.storage._KAnyhzr恐惧镰刀=1;
player.addSkill('nyhzr恐惧镰刀');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr恐惧镰刀'})<=0&&player.storage._KAnyhzr恐惧镰刀==1;
},
                        content:function (){
player.storage._KAnyhzr恐惧镰刀=undefined;
player.removeSkill('nyhzr恐惧镰刀');
},
                    },
                },
            },            
			"_KAnyhzr幽影之蜕":{
                group:["_KAnyhzr幽影之蜕_1","_KAnyhzr幽影之蜕_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr幽影之蜕'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr幽影之蜕==1||player.storage._KAnyhzr幽影之蜕!=undefined)    return false;
return player.num('h',{name:'KAnyhzr幽影之蜕'})>0;
},
                        content:function (){
player.storage._KAnyhzr幽影之蜕=1;
player.addSkill('rnyhzr幽影之蜕');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr幽影之蜕'})<=0&&player.storage._KAnyhzr幽影之蜕==1;
},
                        content:function (){
player.storage._KAnyhzr幽影之蜕=undefined;
player.removeSkill('rnyhzr幽影之蜕');
},
                    },
                },
            },            
			"_KAnyhzr暗夜蛛毒":{
                group:["_KAnyhzr暗夜蛛毒_1","_KAnyhzr暗夜蛛毒_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr暗夜蛛毒'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr暗夜蛛毒==1||player.storage._KAnyhzr暗夜蛛毒!=undefined)    return false;
return player.num('h',{name:'KAnyhzr暗夜蛛毒'})>0;
},
                        content:function (){
player.storage._KAnyhzr暗夜蛛毒=1;
player.addSkill('rnyhzr暗夜蛛毒');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr暗夜蛛毒'})<=0&&player.storage._KAnyhzr暗夜蛛毒==1;
},
                        content:function (){
player.storage._KAnyhzr暗夜蛛毒=undefined;
player.removeSkill('rnyhzr暗夜蛛毒');
},
                    },
                },
            },            
			"_KAnyhzr猎物锁定":{
                group:["_KAnyhzr猎物锁定_1","_KAnyhzr猎物锁定_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr猎物锁定'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr猎物锁定==1||player.storage._KAnyhzr猎物锁定!=undefined)    return false;
return player.num('h',{name:'KAnyhzr猎物锁定'})>0;
},
                        content:function (){
player.storage._KAnyhzr猎物锁定=1;
player.addSkill('rnyhzr猎物锁定');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr猎物锁定'})<=0&&player.storage._KAnyhzr猎物锁定==1;
},
                        content:function (){
player.storage._KAnyhzr猎物锁定=undefined;
player.removeSkill('rnyhzr猎物锁定');
},
                    },
                },
            },            
			"_KAnyhzr女皇神威":{
                group:["_KAnyhzr女皇神威_1","_KAnyhzr女皇神威_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr女皇神威'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr女皇神威==1||player.storage._KAnyhzr女皇神威!=undefined)    return false;
return player.num('h',{name:'KAnyhzr女皇神威'})>0;
},
                        content:function (){
player.storage._KAnyhzr女皇神威=1;
player.addSkill('nyhzr女皇神威');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr女皇神威'})<=0&&player.storage._KAnyhzr女皇神威==1;
},
                        content:function (){
player.storage._KAnyhzr女皇神威=undefined;
player.removeSkill('nyhzr女皇神威');
},
                    },
                },
            },            
			"_KAnyhzr超时空战斧":{
                group:["_KAnyhzr超时空战斧_1","_KAnyhzr超时空战斧_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr超时空战斧'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr超时空战斧==1||player.storage._KAnyhzr超时空战斧!=undefined)    return false;
return player.num('h',{name:'KAnyhzr超时空战斧'})>0;
},
                        content:function (){
player.storage._KAnyhzr超时空战斧=1;
player.addSkill('nyhzr超时空战斧');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr超时空战斧'})<=0&&player.storage._KAnyhzr超时空战斧==1;
},
                        content:function (){
player.storage._KAnyhzr超时空战斧=undefined;
player.removeSkill('nyhzr超时空战斧');
},
                    },
                },
            },            
			"_KAnyhzr断裂时空":{
                group:["_KAnyhzr断裂时空_1","_KAnyhzr断裂时空_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr断裂时空'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr断裂时空==1||player.storage._KAnyhzr断裂时空!=undefined)    return false;
return player.num('h',{name:'KAnyhzr断裂时空'})>0;
},
                        content:function (){
player.storage._KAnyhzr断裂时空=1;
player.addSkill('nyhzr断裂时空');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr断裂时空'})<=0&&player.storage._KAnyhzr断裂时空==1;
},
                        content:function (){
player.storage._KAnyhzr断裂时空=undefined;
player.removeSkill('nyhzr断裂时空');
},
                    },
                },
            },            
			"_KAnyhzr时空道标":{
                group:["_KAnyhzr时空道标_1","_KAnyhzr时空道标_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr时空道标'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr时空道标==1||player.storage._KAnyhzr时空道标!=undefined)    return false;
return player.num('h',{name:'KAnyhzr时空道标'})>0;
},
                        content:function (){
player.storage._KAnyhzr时空道标=1;
player.addSkill('nyhzr时空道标');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr时空道标'})<=0&&player.storage._KAnyhzr时空道标==1;
},
                        content:function (){
player.storage._KAnyhzr时空道标=undefined;
player.removeSkill('nyhzr时空道标');
},
                    },
                },
            },            
			"_KAnyhzr逝时若光":{
                group:["_KAnyhzr逝时若光_1","_KAnyhzr逝时若光_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr逝时若光'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr逝时若光==1||player.storage._KAnyhzr逝时若光!=undefined)    return false;
return player.num('h',{name:'KAnyhzr逝时若光'})>0;
},
                        content:function (){
player.storage._KAnyhzr逝时若光=1;
player.addSkill('nyhzr逝时若光');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr逝时若光'})<=0&&player.storage._KAnyhzr逝时若光==1;
},
                        content:function (){
player.storage._KAnyhzr逝时若光=undefined;
player.removeSkill('nyhzr逝时若光');
},
                    },
                },
            },            
			"_KAnyhzr闪电感染":{
                group:["_KAnyhzr闪电感染_1","_KAnyhzr闪电感染_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr闪电感染'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr闪电感染==1||player.storage._KAnyhzr闪电感染!=undefined)    return false;
return player.num('h',{name:'KAnyhzr闪电感染'})>0;
},
                        content:function (){
player.storage._KAnyhzr闪电感染=1;
player.addSkill('nyhzr闪电感染');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr闪电感染'})<=0&&player.storage._KAnyhzr闪电感染==1;
},
                        content:function (){
player.storage._KAnyhzr闪电感染=undefined;
player.removeSkill('nyhzr闪电感染');
},
                    },
                },
            },            
			"_KAnyhzr雷霆之环":{
                group:["_KAnyhzr雷霆之环_1","_KAnyhzr雷霆之环_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr雷霆之环'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr雷霆之环==1||player.storage._KAnyhzr雷霆之环!=undefined)    return false;
return player.num('h',{name:'KAnyhzr雷霆之环'})>0;
},
                        content:function (){
player.storage._KAnyhzr雷霆之环=1;
player.addSkill('nyhzr雷霆之环');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr雷霆之环'})<=0&&player.storage._KAnyhzr雷霆之环==1;
},
                        content:function (){
player.storage._KAnyhzr雷霆之环=undefined;
player.removeSkill('nyhzr雷霆之环');
},
                    },
                },
            },            "_KAnyhzr灾祸匣":{
                group:["_KAnyhzr灾祸匣_1","_KAnyhzr灾祸匣_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr灾祸匣'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr灾祸匣==1||player.storage._KAnyhzr灾祸匣!=undefined)    return false;
return player.num('h',{name:'KAnyhzr灾祸匣'})>0;
},
                        content:function (){
player.storage._KAnyhzr灾祸匣=1;
player.addSkill('nyhzr灾祸匣');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr灾祸匣'})<=0&&player.storage._KAnyhzr灾祸匣==1;
},
                        content:function (){
player.storage._KAnyhzr灾祸匣=undefined;
player.removeSkill('nyhzr灾祸匣');
},
                    },
                },
            },            
			"_KAnyhzr毁灭指针":{
                group:["_KAnyhzr毁灭指针_1","_KAnyhzr毁灭指针_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr毁灭指针'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr毁灭指针==1||player.storage._KAnyhzr毁灭指针!=undefined)    return false;
return player.num('h',{name:'KAnyhzr毁灭指针'})>0;
},
                        content:function (){
player.storage._KAnyhzr毁灭指针=1;
player.addSkill('nyhzr毁灭指针');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr毁灭指针'})<=0&&player.storage._KAnyhzr毁灭指针==1;
},
                        content:function (){
player.storage._KAnyhzr毁灭指针=undefined;
player.removeSkill('nyhzr毁灭指针');
},
                    },
                },
            },            
			"_KAnyhzr炽天使":{
                group:["_KAnyhzr炽天使_1","_KAnyhzr炽天使_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr炽天使'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr炽天使==1||player.storage._KAnyhzr炽天使!=undefined)    return false;
return player.num('h',{name:'KAnyhzr炽天使'})>0;
},
                        content:function (){
player.storage._KAnyhzr炽天使=1;
player.addSkill('nyhzr炽天使');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr炽天使'})<=0&&player.storage._KAnyhzr炽天使==1;
},
                        content:function (){
player.storage._KAnyhzr炽天使=undefined;
player.removeSkill('nyhzr炽天使');
},
                    },
                },
            },            
			"_KAnyhzr圣光惩戒":{
                group:["_KAnyhzr圣光惩戒_1","_KAnyhzr圣光惩戒_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr圣光惩戒'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr圣光惩戒==1||player.storage._KAnyhzr圣光惩戒!=undefined)    return false;
return player.num('h',{name:'KAnyhzr圣光惩戒'})>0;
},
                        content:function (){
player.storage._KAnyhzr圣光惩戒=1;
player.addSkill('nyhzr圣光惩戒');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr圣光惩戒'})<=0&&player.storage._KAnyhzr圣光惩戒==1;
},
                        content:function (){
player.storage._KAnyhzr圣光惩戒=undefined;
player.removeSkill('nyhzr圣光惩戒');
},
                    },
                },
            },            
			"_KAnyhzr光明圣礼":{
                group:["_KAnyhzr光明圣礼_1","_KAnyhzr光明圣礼_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr光明圣礼'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr光明圣礼==1||player.storage._KAnyhzr光明圣礼!=undefined)    return false;
return player.num('h',{name:'KAnyhzr光明圣礼'})>0;
},
                        content:function (){
player.storage._KAnyhzr光明圣礼=1;
player.addSkill('nyhzr光明圣礼');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr光明圣礼'})<=0&&player.storage._KAnyhzr光明圣礼==1;
},
                        content:function (){
player.storage._KAnyhzr光明圣礼=undefined;
player.removeSkill('nyhzr光明圣礼');
},
                    },
                },
            },            
			"_KAnyhzr天之罚":{
                group:["_KAnyhzr天之罚_1","_KAnyhzr天之罚_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr天之罚'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr天之罚==1||player.storage._KAnyhzr天之罚!=undefined)    return false;
return player.num('h',{name:'KAnyhzr天之罚'})>0;
},
                        content:function (){
player.storage._KAnyhzr天之罚=1;
player.addSkill('nyhzr天之罚');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr天之罚'})<=0&&player.storage._KAnyhzr天之罚==1;
},
                        content:function (){
player.storage._KAnyhzr天之罚=undefined;
player.removeSkill('nyhzr天之罚');
},
                    },
                },
            },
            "_KAnyhzr骄阳陨落":{
                group:["_KAnyhzr骄阳陨落_1","_KAnyhzr骄阳陨落_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr骄阳陨落'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr骄阳陨落==1||player.storage._KAnyhzr骄阳陨落!=undefined)    return false;
return player.num('h',{name:'KAnyhzr骄阳陨落'})>0;
},
                        content:function (){
player.storage._KAnyhzr骄阳陨落=1;
player.addSkill('nyhzr骄阳陨落');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr骄阳陨落'})<=0&&player.storage._KAnyhzr骄阳陨落==1;
},
                        content:function (){
player.storage._KAnyhzr骄阳陨落=undefined;
player.removeSkill('nyhzr骄阳陨落');
},
                    },
                },
            },	
            "_KAnyhzr逐阳":{
                group:["_KAnyhzr逐阳_1","_KAnyhzr逐阳_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr逐阳'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr逐阳==1||player.storage._KAnyhzr逐阳!=undefined)    return false;
return player.num('h',{name:'KAnyhzr逐阳'})>0;
},
                        content:function (){
player.storage._KAnyhzr逐阳=1;
player.addSkill('nyhzr逐阳');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr逐阳'})<=0&&player.storage._KAnyhzr逐阳==1;
},
                        content:function (){
player.storage._KAnyhzr逐阳=undefined;
player.removeSkill('nyhzr逐阳');
},
                    },
                },
            },
            "_KAnyhzr燎火之箭":{
                group:["_KAnyhzr燎火之箭_1","_KAnyhzr燎火之箭_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr燎火之箭'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr燎火之箭==1||player.storage._KAnyhzr燎火之箭!=undefined)    return false;
return player.num('h',{name:'KAnyhzr燎火之箭'})>0;
},
                        content:function (){
player.storage._KAnyhzr燎火之箭=1;
player.addSkill('nyhzr燎火之箭');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr燎火之箭'})<=0&&player.storage._KAnyhzr燎火之箭==1;
},
                        content:function (){
player.storage._KAnyhzr燎火之箭=undefined;
player.removeSkill('nyhzr燎火之箭');
},
                    },
                },
            },			
            "_KAnyhzr穿云箭":{
                group:["_KAnyhzr穿云箭_1","_KAnyhzr穿云箭_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr穿云箭'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr穿云箭==1||player.storage._KAnyhzr穿云箭!=undefined)    return false;
return player.num('h',{name:'KAnyhzr穿云箭'})>0;
},
                        content:function (){
player.storage._KAnyhzr穿云箭=1;
player.addSkill('nyhzr穿云箭');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr穿云箭'})<=0&&player.storage._KAnyhzr穿云箭==1;
},
                        content:function (){
player.storage._KAnyhzr穿云箭=undefined;
player.removeSkill('nyhzr穿云箭');
},
                    },
                },
            },				  
            "_KAnyhzr极速冲击":{
                group:["_KAnyhzr极速冲击_1","_KAnyhzr极速冲击_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr极速冲击'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr极速冲击==1||player.storage._KAnyhzr极速冲击!=undefined)    return false;
return player.num('h',{name:'KAnyhzr极速冲击'})>0;
},
                        content:function (){
player.storage._KAnyhzr极速冲击=1;
player.addSkill('nyhzr极速冲击');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr极速冲击'})<=0&&player.storage._KAnyhzr极速冲击==1;
},
                        content:function (){
player.storage._KAnyhzr极速冲击=undefined;
player.removeSkill('nyhzr极速冲击');
},
                    },
                },
            },
            "_KAnyhzr魔卡出击":{
                group:["_KAnyhzr魔卡出击_1","_KAnyhzr魔卡出击_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr魔卡出击'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr魔卡出击==1||player.storage._KAnyhzr魔卡出击!=undefined)    return false;
return player.num('h',{name:'KAnyhzr魔卡出击'})>0;
},
                        content:function (){
player.storage._KAnyhzr魔卡出击=1;
player.addSkill('nyhzr魔卡出击');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr魔卡出击'})<=0&&player.storage._KAnyhzr魔卡出击==1;
},
                        content:function (){
player.storage._KAnyhzr魔卡出击=undefined;
player.removeSkill('nyhzr魔卡出击');
},
                    },
                },
            },
            "_KAnyhzr强效魔卡":{
                group:["_KAnyhzr强效魔卡_1","_KAnyhzr强效魔卡_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr强效魔卡'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr强效魔卡==1||player.storage._KAnyhzr强效魔卡!=undefined)    return false;
return player.num('h',{name:'KAnyhzr强效魔卡'})>0;
},
                        content:function (){
player.storage._KAnyhzr强效魔卡=1;
player.addSkill('nyhzr强效魔卡');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr强效魔卡'})<=0&&player.storage._KAnyhzr强效魔卡==1;
},
                        content:function (){
player.storage._KAnyhzr强效魔卡=undefined;
player.removeSkill('nyhzr强效魔卡');
},
                    },
                },
            },
            "_KAnyhzr三重卡组":{
                group:["_KAnyhzr三重卡组_1","_KAnyhzr三重卡组_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr三重卡组'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr三重卡组==1||player.storage._KAnyhzr三重卡组!=undefined)    return false;
return player.num('h',{name:'KAnyhzr三重卡组'})>0;
},
                        content:function (){
player.storage._KAnyhzr三重卡组=1;
player.addSkill('nyhzr三重卡组');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr三重卡组'})<=0&&player.storage._KAnyhzr三重卡组==1;
},
                        content:function (){
player.storage._KAnyhzr三重卡组=undefined;
player.removeSkill('nyhzr三重卡组');
},
                    },
                },
            },
            "_KAnyhzr嗜血":{
                group:["_KAnyhzr嗜血_1","_KAnyhzr嗜血_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr嗜血'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr嗜血==1||player.storage._KAnyhzr嗜血!=undefined)    return false;
return player.num('h',{name:'KAnyhzr嗜血'})>0;
},
                        content:function (){
player.storage._KAnyhzr嗜血=1;
player.addSkill('nyhzr嗜血');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr嗜血'})<=0&&player.storage._KAnyhzr嗜血==1;
},
                        content:function (){
player.storage._KAnyhzr嗜血=undefined;
player.removeSkill('nyhzr嗜血');
},
                    },
                },
            },
            "_KAnyhzr血蚀之河":{
                group:["_KAnyhzr血蚀之河_1","_KAnyhzr血蚀之河_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr血蚀之河'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr血蚀之河==1||player.storage._KAnyhzr血蚀之河!=undefined)    return false;
return player.num('h',{name:'KAnyhzr血蚀之河'})>0;
},
                        content:function (){
player.storage._KAnyhzr血蚀之河=1;
player.addSkill('nyhzr血蚀之河');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr血蚀之河'})<=0&&player.storage._KAnyhzr血蚀之河==1;
},
                        content:function (){
player.storage._KAnyhzr血蚀之河=undefined;
player.removeSkill('nyhzr血蚀之河');
},
                    },
                },
            },
            "_KAnyhzr血虐暴风":{
                group:["_KAnyhzr血虐暴风_1","_KAnyhzr血虐暴风_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr血虐暴风'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr血虐暴风==1||player.storage._KAnyhzr血虐暴风!=undefined)    return false;
return player.num('h',{name:'KAnyhzr血虐暴风'})>0;
},
                        content:function (){
player.storage._KAnyhzr血虐暴风=1;
player.addSkill('nyhzr血虐暴风');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr血虐暴风'})<=0&&player.storage._KAnyhzr血虐暴风==1;
},
                        content:function (){
player.storage._KAnyhzr血虐暴风=undefined;
player.removeSkill('nyhzr血虐暴风');
},
                    },
                },
            },
            "_KAnyhzr血祭启示录":{
                group:["_KAnyhzr血祭启示录_1","_KAnyhzr血祭启示录_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr血祭启示录'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr血祭启示录==1||player.storage._KAnyhzr血祭启示录!=undefined)    return false;
return player.num('h',{name:'KAnyhzr血祭启示录'})>0;
},
                        content:function (){
player.storage._KAnyhzr血祭启示录=1;
player.addSkill('nyhzr血祭启示录');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr血祭启示录'})<=0&&player.storage._KAnyhzr血祭启示录==1;
},
                        content:function (){
player.storage._KAnyhzr血祭启示录=undefined;
player.removeSkill('nyhzr血祭启示录');
},
                    },
                },
            },
            "_KAnyhzr王牌":{
                group:["_KAnyhzr王牌_1","_KAnyhzr王牌_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr王牌'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr王牌==1||player.storage._KAnyhzr王牌!=undefined)    return false;
return player.num('h',{name:'KAnyhzr王牌'})>0;
},
                        content:function (){
player.storage._KAnyhzr王牌=1;
if (game.players.length+game.dead.length<8){
var pl=game.addPlayer();
pl.side=player.side;
pl.identity=player.identity;
if(pl.identity=='zhu'){
pl.identity='zhong';
};
pl.setIdentity('侍从');
pl.draw(3);
pl.node.identity.dataset.color=pl.identity;
var list=["anyhzr艾迪兰","lnyhzr咯哩咯哩","lnyhzr莉莉姆.提露埃拉","hnyhzr后羿","nnyhzr妮娜","znyhzr贞德","snyhzr萨特","dnyhzr德古拉","knyhzr狂徒","snyhzr时空猎人","lnyhzr龙骑士"]
pl.init(list.randomGet());
pl.addSkill('nyhzr侍从');
pl.maxHp=2;
pl.hp=2;
pl.update();
}
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr王牌'})<=0&&player.storage._KAnyhzr王牌==1;
},
                        content:function (){
player.storage._KAnyhzr王牌=undefined;
for(var i=0;i<game.players.length;i++){
if (game.players[i].hasSkill('nyhzr侍从')){
game.removePlayer(game.players[i]);
}	
}
for (var i=0;i<game.dead.length;i++){
if (game.dead[i].hasSkill('nyhzr侍从')){
game.removePlayer(game.dead[i]);
}	
}
},
                    },
                },
            },
            "_KAnyhzr龙人血脉":{
                group:["_KAnyhzr龙人血脉_1","_KAnyhzr龙人血脉_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr龙人血脉'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr龙人血脉==1||player.storage._KAnyhzr龙人血脉!=undefined)    return false;
return player.num('h',{name:'KAnyhzr龙人血脉'})>0;
},
                        content:function (){
player.storage._KAnyhzr龙人血脉=1;
player.addSkill('nyhzr龙人血脉');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr龙人血脉'})<=0&&player.storage._KAnyhzr龙人血脉==1;
},
                        content:function (){
player.storage._KAnyhzr龙人血脉=undefined;
player.removeSkill('nyhzr龙人血脉');
},
                    },
                },
            },
            "_KAnyhzr真龙形态":{
                group:["_KAnyhzr真龙形态_1","_KAnyhzr真龙形态_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr真龙形态'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr真龙形态==1||player.storage._KAnyhzr真龙形态!=undefined)    return false;
return player.num('h',{name:'KAnyhzr真龙形态'})>0;
},
                        content:function (){
player.storage._KAnyhzr真龙形态=1;
player.addSkill('nyhzr真龙化身');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr真龙形态'})<=0&&player.storage._KAnyhzr真龙形态==1;
},
                        content:function (){
player.storage._KAnyhzr真龙形态=undefined;
player.removeSkill('nyhzr真龙化身');
},
                    },
                },
            },
            "_KAnyhzr龙之咆哮":{
                group:["_KAnyhzr龙之咆哮_1","_KAnyhzr龙之咆哮_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr龙之咆哮'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr龙之咆哮==1||player.storage._KAnyhzr龙之咆哮!=undefined)    return false;
return player.num('h',{name:'KAnyhzr龙之咆哮'})>0;
},
                        content:function (){
player.storage._KAnyhzr龙之咆哮=1;
player.addSkill('nyhzr龙之咆哮');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr龙之咆哮'})<=0&&player.storage._KAnyhzr龙之咆哮==1;
},
                        content:function (){
player.storage._KAnyhzr龙之咆哮=undefined;
player.removeSkill('nyhzr龙之咆哮');
},
                    },
                },
            },
            "_KAnyhzr龙之吐息":{
                group:["_KAnyhzr龙之吐息_1","_KAnyhzr龙之吐息_2"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num+(player.num('h',{name:'KAnyhzr龙之吐息'}));
},
                        },
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if (player.storage._KAnyhzr龙之吐息==1||player.storage._KAnyhzr龙之吐息!=undefined)    return false;
return player.num('h',{name:'KAnyhzr龙之吐息'})>0;
},
                        content:function (){
player.storage._KAnyhzr龙之吐息=1;
player.addSkill('nyhzr龙之吐息');
},
                    },
                    "2":{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.num('h',{name:'KAnyhzr龙之吐息'})<=0&&player.storage._KAnyhzr龙之吐息==1;
},
                        content:function (){
player.storage._KAnyhzr龙之吐息=undefined;
player.removeSkill('nyhzr龙之吐息');
},
                    },
                },
            },
			
			},		
        card:{			
            "KAnyhzr龙人血脉":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:101,
				useful:101,
				},
            },
            "KAnyhzr真龙形态":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:101,
				useful:101,
				},
            },
            "KAnyhzr龙之吐息":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:96,
				useful:96,
				},
            },
            "KAnyhzr龙之咆哮":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:97,
				useful:97,
				},
            },
            "KAnyhzr极速冲击":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:95,
				useful:95,
				},
            },
            "KAnyhzr魔卡出击":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:95,
				useful:95,
				},
            },
            "KAnyhzr强效魔卡":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:95,
				useful:95,
				},
            },
            "KAnyhzr三重卡组":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },            
			"KAnyhzr血祭启示录":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:93,
				useful:93,
				},
            },            
			"KAnyhzr血虐暴风":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:96,
				useful:96,
				},
            },            
			"KAnyhzr血蚀之河":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:98,
				useful:98,
				},
            },            
			"KAnyhzr嗜血":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:93,
				useful:93,
				},
            },           
			"KAnyhzr骄阳陨落":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:93,
				useful:93,
				},
            },           
			"KAnyhzr逐阳":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:97,
				useful:97,
				},
            },           
			"KAnyhzr燎火之箭":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },           
			"KAnyhzr穿云箭":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr血肉钩索":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:96,
				useful:96,
				},
            },          
			"KAnyhzr腐蚀瘟疫":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:98,
				useful:98,
				},
            },          
			"KAnyhzr腐肉吸噬":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:100,
				useful:100,
				},
            },          
			"KAnyhzr致命啃咬":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr仙灵伙伴":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr奥妙冲击":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr迷藏印记":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr闪耀之光":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr恶魔冲锋":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:94,
				useful:94,
				},
            },          
			"KAnyhzr恐惧结界":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:100,
				useful:100,
				},
            },          
			"KAnyhzr镰刀挥舞":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:92,
				useful:92,
				},
            },          
			"KAnyhzr恐惧镰刀":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr幽影之蜕":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr暗夜蛛毒":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:95,
				useful:95,
				},
            },          
			"KAnyhzr猎物锁定":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:92,
				useful:92,
				},
            },          
			"KAnyhzr女皇神威":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:94,
				useful:94,
				},
            },          
			"KAnyhzr超时空战斧":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr断裂时空":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:100,
				useful:100,
				},
            },          
			"KAnyhzr时空道标":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr逝时若光":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr闪电感染":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },          
			"KAnyhzr雷霆之环":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:96,
				useful:96,
				},
            },          
			"KAnyhzr灾祸匣":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:96,
				useful:96,
				},
            },          
			"KAnyhzr毁灭指针":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:92,
				useful:92,
				},
            },          
			"KAnyhzr炽天使":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:93,
				useful:93,
				},
            },          
			"KAnyhzr圣光惩戒":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:93,
				useful:93,
				},
            },          
			"KAnyhzr光明圣礼":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:97,
				useful:97,
				},
            },          
			"KAnyhzr天之罚":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:99,
				useful:99,
				},
            },			
			"KAnyhzr王牌":{
                fullimage:true,
                type:"技能",    
				ai:{
				value:100,
				useful:100,
				},
            },
        }, 
		translate:{
            "KAnyhzr王牌":"王牌",
            "KAnyhzr王牌_info":"此牌不计入手牌区；当你获得此牌时，若游戏人数（含死亡）小于8且你的手牌区中没有【王牌】，你拥有一个体力值为2的英魂之刃侍从；当你失去出牌时，若你手牌区中没有【王牌】，你失去所有英魂之刃侍从",
            "KAnyhzr真龙形态":"真龙形态",
            "KAnyhzr真龙形态_info":"当此牌在你手牌区中，你拥有技能【真龙化身】；此牌不计入手牌区",
            "KAnyhzr龙之吐息":"龙之吐息",
            "KAnyhzr龙之吐息_info":"当此牌在你手牌区中，你拥有技能【龙之吐息】；此牌不计入手牌区",
            "KAnyhzr龙之咆哮":"龙之咆哮",
            "KAnyhzr龙之咆哮_info":"当此牌在你手牌区中，你拥有技能【龙之咆哮】；此牌不计入手牌区",
            "KAnyhzr龙人血脉":"龙人血脉",
            "KAnyhzr龙人血脉_info":"当此牌在你手牌区中，你拥有技能【龙人血脉】；此牌不计入手牌区",            
			"KAnyhzr极速冲击":"极速冲击",
            "KAnyhzr极速冲击_info":"当此牌在你手牌区中，你拥有技能【极速冲击】；此牌不计入手牌区",            
			"KAnyhzr魔卡出击":"魔卡出击",
            "KAnyhzr魔卡出击_info":"当此牌在你手牌区中，你拥有技能【魔卡出击】；此牌不计入手牌区",            
			"KAnyhzr强效魔卡":"强效魔卡",
            "KAnyhzr强效魔卡_info":"当此牌在你手牌区中，你拥有技能【强效魔卡】；此牌不计入手牌区",            
			"KAnyhzr三重卡组":"三重卡组",
            "KAnyhzr三重卡组_info":"当此牌在你手牌区中，你拥有技能【三重卡组】；此牌不计入手牌区",            
			"KAnyhzr血祭启示录":"血祭启示录",
            "KAnyhzr血祭启示录_info":"当此牌在你手牌区中，你拥有技能【血祭启示录】；此牌不计入手牌区",            
			"KAnyhzr血虐暴风":"血虐暴风",
            "KAnyhzr血虐暴风_info":"当此牌在你手牌区中，你拥有技能【血虐暴风】；此牌不计入手牌区",            
			"KAnyhzr血蚀之河":"血蚀之河",
            "KAnyhzr血蚀之河_info":"当此牌在你手牌区中，你拥有技能【血蚀之河】；此牌不计入手牌区",            
			"KAnyhzr嗜血":"嗜血",
            "KAnyhzr嗜血_info":"当此牌在你手牌区中，你拥有技能【嗜血】；此牌不计入手牌区",		            
			"KAnyhzr骄阳陨落":"骄阳陨落",
            "KAnyhzr骄阳陨落_info":"当此牌在你手牌区中，你拥有技能【骄阳陨落】；此牌不计入手牌区",		            
			"KAnyhzr逐阳":"逐阳",
            "KAnyhzr逐阳_info":"当此牌在你手牌区中，你拥有技能【逐阳】；此牌不计入手牌区",		            
			"KAnyhzr燎火之箭":"燎火之箭",
            "KAnyhzr燎火之箭_info":"当此牌在你手牌区中，你拥有技能【燎火之箭】；此牌不计入手牌区",		            
			"KAnyhzr穿云箭":"穿云箭",
            "KAnyhzr穿云箭_info":"当此牌在你手牌区中，你拥有技能【穿云箭】；此牌不计入手牌区",			            
			"KAnyhzr血肉钩索":"血肉钩索",
            "KAnyhzr血肉钩索_info":"当此牌在你手牌区中，你拥有技能【血肉钩索】；此牌不计入手牌区",			            
			"KAnyhzr腐蚀瘟疫":"腐蚀瘟疫",
            "KAnyhzr腐蚀瘟疫_info":"当此牌在你手牌区中，你拥有技能【腐蚀瘟疫】；此牌不计入手牌区",			            
			"KAnyhzr腐肉吸噬":"腐肉吸噬",
            "KAnyhzr腐肉吸噬_info":"当此牌在你手牌区中，你拥有技能【腐肉吸噬】；此牌不计入手牌区",			            
			"KAnyhzr致命啃咬":"致命啃咬",
            "KAnyhzr致命啃咬_info":"当此牌在你手牌区中，你拥有技能【致命啃咬】；此牌不计入手牌区",			            
			"KAnyhzr仙灵伙伴":"仙灵伙伴",
            "KAnyhzr仙灵伙伴_info":"当此牌在你手牌区中，你拥有技能【仙灵伙伴】；此牌不计入手牌区",			            
			"KAnyhzr奥妙冲击":"奥妙冲击",
            "KAnyhzr奥妙冲击_info":"当此牌在你手牌区中，你拥有技能【奥妙冲击】；此牌不计入手牌区",			            
			"KAnyhzr迷藏印记":"迷藏印记",
            "KAnyhzr迷藏印记_info":"当此牌在你手牌区中，你拥有技能【迷藏印记】；此牌不计入手牌区",			            
			"KAnyhzr闪耀之光":"闪耀之光",
            "KAnyhzr闪耀之光_info":"当此牌在你手牌区中，你拥有技能【闪耀之光】；此牌不计入手牌区",			            
			"KAnyhzr恶魔冲锋":"恶魔冲锋",
            "KAnyhzr恶魔冲锋_info":"当此牌在你手牌区中，你拥有技能【恶魔冲锋】；此牌不计入手牌区",			            
			"KAnyhzr恐惧结界":"恐惧结界",
            "KAnyhzr恐惧结界_info":"当此牌在你手牌区中，你拥有技能【恐惧结界】；此牌不计入手牌区",			            
			"KAnyhzr镰刀挥舞":"镰刀挥舞",
            "KAnyhzr镰刀挥舞_info":"当此牌在你手牌区中，你拥有技能【镰刀挥舞】；此牌不计入手牌区",			            
			"KAnyhzr恐惧镰刀":"恐惧镰刀",
            "KAnyhzr恐惧镰刀_info":"当此牌在你手牌区中，你拥有技能【恐惧镰刀】；此牌不计入手牌区",			            
			"KAnyhzr幽影之蜕":"幽影之蜕",
            "KAnyhzr幽影之蜕_info":"当此牌在你手牌区中，你拥有技能【幽影之蜕】；此牌不计入手牌区",			            
			"KAnyhzr暗夜蛛毒":"暗夜蛛毒",
            "KAnyhzr暗夜蛛毒_info":"当此牌在你手牌区中，你拥有技能【暗夜蛛毒】；此牌不计入手牌区",			            
			"KAnyhzr猎物锁定":"猎物锁定",
            "KAnyhzr猎物锁定_info":"当此牌在你手牌区中，你拥有技能【猎物锁定】；此牌不计入手牌区",			            
			"KAnyhzr女皇神威":"女皇神威",
            "KAnyhzr女皇神威_info":"当此牌在你手牌区中，你拥有技能【女皇神威】；此牌不计入手牌区",			            
			"KAnyhzr超时空战斧":"超时空战斧",
            "KAnyhzr超时空战斧_info":"当此牌在你手牌区中，你拥有技能【超时空战斧】；此牌不计入手牌区",			            
			"KAnyhzr断裂时空":"断裂时空",
            "KAnyhzr断裂时空_info":"当此牌在你手牌区中，你拥有技能【断裂时空】；此牌不计入手牌区",			            
			"KAnyhzr时空道标":"时空道标",
            "KAnyhzr时空道标_info":"当此牌在你手牌区中，你拥有技能【时空道标】；此牌不计入手牌区",			            
			"KAnyhzr逝时若光":"逝时若光",
            "KAnyhzr逝时若光_info":"当此牌在你手牌区中，你拥有技能【逝时若光】；此牌不计入手牌区",			            
			"KAnyhzr闪电感染":"闪电感染",
            "KAnyhzr闪电感染_info":"当此牌在你手牌区中，你拥有技能【闪电感染】；此牌不计入手牌区",			            
			"KAnyhzr雷霆之环":"雷霆之环",
            "KAnyhzr雷霆之环_info":"当此牌在你手牌区中，你拥有技能【雷霆之环】；此牌不计入手牌区",			            
			"KAnyhzr灾祸匣":"灾祸匣",
            "KAnyhzr灾祸匣_info":"当此牌在你手牌区中，你拥有技能【灾祸匣】；此牌不计入手牌区",			            
			"KAnyhzr毁灭指针":"毁灭指针",
            "KAnyhzr毁灭指针_info":"当此牌在你手牌区中，你拥有技能【毁灭指针】；此牌不计入手牌区",			            
			"KAnyhzr圣光惩戒":"圣光惩戒",
            "KAnyhzr圣光惩戒_info":"当此牌在你手牌区中，你拥有技能【圣光惩戒】；此牌不计入手牌区",			            
			"KAnyhzr光明圣礼":"光明圣礼",
            "KAnyhzr光明圣礼_info":"当此牌在你手牌区中，你拥有技能【光明圣礼】；此牌不计入手牌区",			            
			"KAnyhzr天之罚":"天之罚",
            "KAnyhzr天之罚_info":"当此牌在你手牌区中，你拥有技能【天之罚】；此牌不计入手牌区",			            
			"KAnyhzr炽天使":"炽天使",
            "KAnyhzr炽天使_info":"当此牌在你手牌区中，你拥有技能【炽天使】；此牌不计入手牌区",				
		},
        list:[],
},'技能卡包');			
	game.addCharacterPack({
       character:{
            "lnyhzr咯哩咯哩":["female","zhi",3,["nyhzr自然之灵","nyhzr仙灵伙伴","nyhzr闪耀之光","nyhzr迷藏印记","nyhzr奥妙冲击","nyhzr咯哩咯哩"],["des:<li>大多数生灵都逃不过时光的流逝，然而咯哩咯哩却不属于此类。作为自然万物之精华，咯哩咯哩拥有着一颗干净纯洁的心、永远不会长大的外形，以及与花草百兽沟通的奇妙能力，而她的名字则来源于她的口头禅：咯哩。<li>在大自然中独自生活许多年后，出于对人类世界的向往和对新朋友的渴望，咯哩咯哩带着她的小伙伴——妖精皮皮，一起来到了人类的城邦。咯哩咯哩带领孩子们玩耍，并用魔法暂时将桌椅变成花朵和动物来增添乐趣。但人们似乎并不领情——出于对魔法和力量的恐惧，大人们很快便让孩子们疏远了咯哩咯哩。<li>伤心的咯哩咯哩离开了这所城邦，重新寻找一个善良美好的新世界。途经决战之谷时，咯哩咯哩和皮皮遇到凶兽饕餮，它正准备吞噬最近的人类城邦。尽管遭到人类的疏远，但为了可爱的孩子们不受伤害，咯哩咯哩毅然与饕餮展开了战斗。然而饕餮实力强大，咯哩咯哩和皮皮陷入了险境。危急关头，一位来自异世界的男人“拳”突然出现，在他的帮助，饕餮终于败退离去。<li>咯哩咯哩对这个胸前有着北斗七星状伤疤的男人产生了浓厚的兴趣。面对这个好奇又天真的小家伙一个又一个的疑问，拳将自己的经历和扫除一切邪恶不公的决心告诉了她。听完拳的叙述，咯哩咯哩从他的身上感受到了巨大的勇气和信念的力量，她意识到，与其寻找一个虚无缥缈的新世界，不如从现在开始，创造并且守护现有的一切。于是，她决定成为拳的伙伴，和他一起踏上未知的冒险之路！<li>我才不会害怕呢！咯哩！<li>——咯哩咯哩"]],
            "lnyhzr莉莉姆.提露埃拉":["female","li",3,["nyhzr魅魔公主","nyhzr恐惧镰刀","nyhzr恐惧结界","nyhzr恶魔冲锋","nyhzr镰刀挥舞","nyhzr莉莉姆.提露埃拉"],["des:<li>恢弘的钟声和吟唱笼罩着整座城市，人们云集在教堂之中，进行着庄严而神圣的宗教仪式。而在教堂的穹顶，象征着神权的巨大十字架上，却坐着一个美丽而妖娆的身影，泛着宝石光芒的瞳仁和背后的翅膀昭示着她令人畏惧的身份——夜之魔女莉莉丝和魔王撒旦的女儿，地狱的公主——莉莉姆.提露埃拉。 <li>同她的姐妹们一样，莉莉姆. 提露埃拉身上永远散发着青春的活力，外表充满魅力却又让人心生畏惧，由血统赋予的强大魔力能让她在地狱和人间穿梭自如，并不断出现在人们的噩梦之中。但和她那些只顾享乐的姐妹们不同，莉莉姆.提露埃拉更加危险且具有野心：她想把所有的人类土地都变成充满滋生魔物的土壤。 <li>就在提露埃拉不断实施着她的邪恶计划之时，其他莉莉姆以及她们手下的魔物们纷纷遭到了猎杀，而所有的线索都指向了一个人：猎魔人露娜。<li>这场关于猎杀的游戏激起了提露埃拉心中的邪恶欲望，她追随着猎魔人的踪迹来到人类的城邦。看着脚下的城市和熙攘的人群，莉莉姆.提露埃拉站起身来，灵活地跳到十字架顶端，朝着面前的城市张开双手，像是要把整座城市收入怀中。<li>“这里，马上就要完全属于我了……到时候要做些什么呢?想想就……”<li>亢奋的情绪突然被她自己打断，注视着整座城市的瞳孔突然将视线锁定在一间普通到再也不能普通的屋顶上，像是发现了宝藏一样，莉莉姆. 提露埃拉眯起了眼睛，嘴角露出了摄人的微笑。<li>“找到你了，要开始享受游戏的乐趣了。”"]],
            "hnyhzr后羿":["male","min",3,["nyhzr射日英雄","nyhzr逐阳","nyhzr穿云箭","nyhzr燎火之箭","nyhzr骄阳陨落","nyhzr后羿"],["des:<li>后羿环顾着四周，目力可及之处，只有龟裂的大地。匍匐在他脚下的老妪已经被灼热的太阳晒脱了水分，恍惚间就像一段焦枯树干。 <li>天空中的太阳们依旧嚣张地散发着全部的热量。<li>是的，太阳们。<li>它们是天帝的儿子，每日有一人化身为太阳穿过天空，撒下光热，哺育世间万物。然而，周而复始的日子令它们觉得厌烦。于是，再一个黎明到来时，它们一起出现在天空中， <li>太阳们散发出的热量烤焦了大地，树木庄稼化为灰烬，人间瞬时化为炼狱…… <li>不能再这样了，总得有个人站出来，帮助大家脱离苦海。<li>后羿回过神来，他按了按腰间的箭囊，那是最后的希望……不能再等待了！他从肩上取下那张红色的弓，抽出了箭矢。 <li>满弓！射出！ <li>奇迹出现了！骄横的太阳纷纷坠落，当第九个太阳落下之时，世界再度恢复了原貌。 <li>人们铭记着他的威能，自此，“神射手”之名名垂千古！"]],
            "nnyhzr妮娜":["female","min",3,["nyhzr狼蛛","rnyhzr幽影之蜕","rnyhzr暗夜蛛毒","rnyhzr猎物锁定","nyhzr女皇神威","nyhzr妮娜"],["des:<li>针对女王妮娜的政变在一个夜晚爆发。那些曾被赦免的贵族们带着士兵冲进王宫，将所见的人统统杀死。<li>“抓住妮娜！”熊熊火焰在王宫中肆虐，照亮一地冰冷的尸体与丑恶背叛。<li>“杀死她，她已不配为王！” <li>目标明确的叛军一路攻入寝宫，妮娜只得带着铁卫逃往王城北面。那里背靠人人恐惧的禁忌森林，叛军决不会在那设防。然而双方实力过于悬殊，当他们来到禁忌森林前，铁卫已悉数战死，只剩走投无路的妮娜一人被包围。 <li>贵族们轻蔑地嘲笑她：“你是要投降，还是逃入死地？” <li>女王的脸因恐惧而苍白，但她仍尊严地抬头走入森林：“以我的灵魂发誓，我会回来的！把你们全部杀死！” <li>叛军骚动地望向漆黑的森林，想要确定女王是否已死。而妮娜身陷密林深处，被冰冷黏丝束缚双脚。纷麻触感由四肢蔓延，骚动的剧毒螯爪遍布全身，一点点收割生命。曾经高傲的冰雪陷入地狱，死亡已如影随形，妮娜绝望地流出眼泪。 <li>“我不能死……”复仇的怒火涌上心头，被背叛的憎恨和被啃食的痛楚让她从灵魂深处发出嘶哑呐喊：“我绝不能死！” <li>“你要向那些背叛你的人复仇么？”甜腻诱惑的声音突然充斥在她耳边。"]], 
            "znyhzr蜘蛛形态":["none","jin",4,[],["forbidai"]],
            "znyhzr贞德":["female","zhi",3,["nyhzr圣女","nyhzr光明圣礼","nyhzr圣光惩戒","nyhzr天之罚","nyhzr炽天使","nyhzr贞德"],["des:<li>堕落的中世纪，人类的灵魂已成为魔鬼的玩物，就连英格兰国王，也成了魔鬼的傀儡。他的爪牙伸向了法兰西，把那片美丽的土地变成了人间炼狱。<li>贞德，是这无尽黑夜的最后希望。她凭借大天使赐予的圣光之力斩开迷雾，带领追随者摧城拔寨，成为战场上一面飞扬不倒的旗帜。人们高呼圣女之名，以此获得勇气，治愈伤痛。 <li>贞德的圣光之力让邪恶势力颤抖。魔鬼们操纵了法兰西国王，调遣大军俘虏贞德，并对她施以火刑。烈焰燃起时，忍受着焚身剧痛的贞德默默吟唱最后的圣歌，从天国召来了愤怒的炽天使。群魔被天使的怒火包围，在哀号中化作灰烬。 <li>黎明的曙光照在贞德焚身之地，美丽的少女已经不在，寄托她坚定信仰和甜美梦想的神圣盾杖，也已不知去向。"]],
            "cnyhzr炽天使":["none","jin",1,[],["forbidai"]],
            "snyhzr萨特":["male","zhi",3,["nyhzr暴君","nyhzr灾祸匣","nyhzr闪电活化","nyhzr雷霆之环","nyhzr毁灭指针","nyhzr萨特"],["des:<li>死亡的诅咒改变了萨特纯正的暗夜血统：灵巧之足变为象征权力与掠夺的重蹄，聆风之耳变为象征冷酷与狡诈的犄角，执梦之手变为象征杀戮与不谐的魔爪。他从灾祸的余烬中重生，还给世界的则是一个象征着混乱与凶杀的恶魔——雷鸣萨特。在开始为新主人——黑暗——效力之前，萨特抵达了他的家乡。 <li>他来完成完全腐化的最后一步——杀死妻儿。这是一根绷紧的弦，拉扯着他，让他无法进入黑暗的深渊。<li>精灵王城的气息有些异样，也许是被他腐化了的缘故，但很快他便看到了原因——示众的尸身。 <li>精灵议会先他一步杀死了他的家人。<li>这种严惩通常只针对那些背叛精灵族投身黑暗的叛徒。萨特心底最后的一根弦终于断了！黑暗瞬间吞噬了他的心灵——属于精灵的一切都与他无关了。萨特开始没有顾忌地杀戮，用族人的鲜血来实现着自己的完全腐化……"]],			
		    "dnyhzr德古拉":["male","zhi",3,["nyhzr吸血鬼伯爵","nyhzr血虐暴风","nyhzr嗜血","nyhzr血蚀之河","nyhzr血祭启示录","nyhzr德古拉"],["des:<li>那座古堡矗立在林中已经很久，崩塌的外墙、腐朽的枯木、夜枭的啼叫，传说中的恶魔……一切令人生惧的元素仿佛都集中在它的身上。 <li>过去的这里并不是如此死气沉沉，令人生畏。德古拉伯爵一家是这片土地的主人。伯爵夫人虽然出身卑微，却颇受伯爵宠爱。浪漫的爱情故事也让无数人羡慕。 <li>平静的日子被教会的传令所打破。他带上家族精锐出发了。战斗几乎没有遭到抵抗，这种单纯的杀戮令伯爵的不满更加浓烈。当伯爵归来之时，迎接他的不是欢呼与鲜花，而是满目疮痍，尸横遍野……他这才明白出征不过是教会的幌子，隐藏在背后的目的是铲除异己。抱着爱人的尸体，德古拉的愤怒如同滔天巨焰，他诅咒神明，诅咒教会，发誓要让他们血债血偿！<li>自那之后，伯爵失去了踪迹。尽管教会四处搜寻，却毫无线索。<li>数月后，曾参与围剿的人皆以怪异的方式死去，死者无一例外被吸干鲜血！教会分支也在熊熊大火中化为灰烬。人们纷纷传言德古拉伯爵回来了，他将灵魂献给魔鬼，以换取复仇的永生之力。<li>他视教廷为永世之敌，仇恨不灭，直至那伪善的光明被彻底摧毁！"]],
		    "knyhzr狂徒":["male","li",4,["nyhzr罪业狂屠","nyhzr腐蚀瘟疫","nyhzr腐肉吸噬","nyhzr血肉钩索","nyhzr致命啃咬","nyhzr狂徒"],["des:<li>在杀手这个行当，有个说法，如果你杀人过千，你的罪业就会在现世降临，报应不爽。大多数杀手都在第999单生意后金盆洗手。不过，并不是所有人都信这个邪。 <li>第一楼的杀手狂徒，就是这个不信邪的，他只相信他的屠刀“罪”和钩索“业”。<li>那一年的除夕夜，狂徒很兴奋。他的“业”钩从黑暗中窜出，如毒蛇般缠住兵马大元帅岳鹏，将他拉扯过来，沾满鲜血的“罪”刀干脆利落斩下头颅。“千人斩了！”狂屠浑身颤抖，“我是最强的……” <li>狂徒喝了很多酒。回到第一楼时，他突然感觉到浓郁如浆的杀气。不知何时，他已被无数黑衣人包围。喝下的酒在腐蚀内脏，狂屠的皮肉开始掉落。<li>他抽出“罪”刀和“业”钩，疯狂地厮杀着…… “第一楼杀手一夜间死绝，皆被刀斩钩戮，惨状骇人。千人斩狂徒化作肉泥，罪刀业钩不知去向。<li>”百晓生如是记载。"]],
		    "snyhzr时空猎人":["male","zhi",3,["nyhzr时空英雄","nyhzr断裂时空","nyhzr超时空战斧","nyhzr时空道标","nyhzr逝时若光","nyhzr时空猎人"],["des:<li>奥古578纪年，诺米达王国的骑兵队摧毁了费沙联邦的民间商队，这成为奥古大陆第六次大战的导火索。一场贼喊捉贼的侵略伎俩，却揭开了长达数十年的战争序幕。 <li>大战进入第十个年头时，奥古大陆几乎已被诺米达国收入囊中，但是一位来去轨迹变幻莫测的战士，身覆咒符，手执战斧，穿梭于诺米达军的行军路线之中，轻松撕裂他们布下的天罗地网。 <li>奥古660纪年，在付出百万生命代价之后，费沙联邦与诺米达国签订永不侵犯条例。这标志着奥古大陆第五次黄金时期到来。 <li>奥古778纪年，第六次奥古大战资料解封。引领战局变化的战士身份终于确认——他来自更加遥远的未来，或是说，另一个时空。 <li>“时空猎人”，人们满怀敬意的称呼这位带来和平与繁荣的勇士，英雄的精神将一直鼓舞着人们，直至未来。"]],
		    "lnyhzr龙骑士":["male","li",3,["nyhzr魔龙化身","nyhzr龙人血脉","nyhzr真龙化身","nyhzr龙之咆哮","nyhzr龙之吐息","nyhzr龙骑士"],["des:<li>边境的小酒馆里，老板略带神秘的说起这样一个传说：<li>好心的领主老爷和他的养子生活在一座美丽的庄园里。<li>然而，魔龙化身的养子本性嗜血又残暴。他魔性大发之后，重伤领主，焚毁庄园。据说他身覆鳞片，口中喷火，甚至还会吃人！ <li>——那段经历对流浪骑士来说就像噩梦一般，如果真是场梦就好了……<li>那一天，从血脉中涌出的能量仿佛要将身体撕成两半，难以忍受的巨大痛楚令他失去了理智。<li>清醒之后，看着血泊中的领主和自己可怕的身躯，他只能惶恐地逃离。 <li>这些年来，骑士独自一人在荒原上流浪，而根植于血脉中的力量也与日俱增。幸运的是，在旅途中磨练出的坚韧和勇气让骑士逐渐学会了如何在狂暴中保持清明。在一次从魔兽群的包围中救下落难的冒险者后，他第一次感到这股力量会是种恩赐。 <li>兴奋的流浪骑士马不停蹄地想要回到家乡，但迎接他的却不是领主慈祥的微笑，而是冲天的火光、村民的哀嚎以及大队的强盗…… <li>那天以后，王国又多了一个传说，关于龙骑士的传说。"]],
			"lnyhzr龙":["none","jin",4,[],["forbidai"]],
			"anyhzr艾迪兰":["female","zhi",3,["nyhzr幻卡魔女","nyhzr三重卡组","nyhzr魔卡出击","nyhzr极速冲击","nyhzr强效魔卡","nyhzr艾迪兰"],["des:<li>聪明可爱的艾迪兰从小就特别向往神秘又强大的魔法。国王疼爱他的女儿，寻找到一位法力高强的女巫，但是艾迪兰太想学魔法了，女巫临走留下卡牌，一去无踪。<li>宫殿外的花开了又落，顽皮的少女也长成了端庄的公主，美名远扬的艾迪兰倾倒了无数人，而邻国一位英俊不凡、谈吐高雅的王子路易斯此时出现在她面前，获得了公主的芳心。<li>但路易斯并不像表面上那么美好，无助的公主被软禁在高塔，只要婚礼成功进行，王国即刻沦陷于野心家的奴役之下。艾迪兰知道如果自己死去，王子的打算就会落空。<li>“如果你真的有灵，请你帮我。“艾迪兰想起了魔女赠她的卡牌，她庄严地许下诺言：请拿走我最宝贵的东西，让我的王国远离浩劫。<li>房门被打开了，一位陌生的魔女出现在了王子眼前，没有人知道那晚发生了什么，只知道王子疯疯癫癫的从塔里跑出来，骑上自己的马，头也不回的冲出城堡，消失在幽暗的森林中。"]],
			"bnyhzr布丁":["female","zhi",3,["nyhzr钻能使","nyhzr钻石能量","nyhzr钻能光球","nyhzr钻能保护","nyhzr钻能射线","nyhzr布丁"],["des:<li>α-蓝钻1号星是蓝钻布丁的家园。天赋出众的蓝钻布丁年纪轻轻就已成为了这个星球上最杰出的生物工程师之一。而与她在一起实验、生活并相互扶持的则是她的丈夫蓝钻布鲁，一位仁慈、可爱且有着超人智慧的空间能量科学家。 <li>蓝钻布丁花费了大约十年的时间，培养一种新型的生命体，被她称为“夏娃的种子”的超强抗氧化生命基因。这种微小的基因可以在充满氧气的环境里存活，并且有着极强的适应力和模仿力。她和他的丈夫把它们当做自己的孩子来对待。<li>然而，在实验接近最后成功时，一场车祸夺去了蓝钻布丁的生命。悲痛的丈夫蓝钻布鲁为了完成妻子的遗言，变卖了所有的家产，准备把实验继续做下去。 <li>蓝钻布丁曾在茫茫宇宙中为新生的基因觅得了一个绝佳的培养场所——被她取名为地球，意思是大地之母——用于之后发展的计划蓝图也存入了丈夫蓝钻布鲁的心脏起搏芯片上。密码则是：蓝钻布丁，吾爱。<li>他在水中放下基因，然后进入地下冬眠。在蓝钻布丁的计算中，大概一亿年后这种基因将演化为真正的具有个体思想的生命体。"]],
			"cnyhzr超能企鹅":["male","min",3,["nyhzr第二人类","nyhzr企鹅导弹","nyhzr镭射光束","nyhzr冰上漫滑","nyhzr毁灭轰击","nyhzr超能企鹅"],["des:<li>宇宙历2157年，对于人类来说是悲剧的一年。核爆危机的阴云笼罩在每个人的头上。<li>造成这种局面的罪魁祸首竟然是一度被视为第二人类的智能机器人。最初的迹象仅是智能系统出现一些看似操作不灵便的故障，谁料到这点“小问题”犹如滚雪球般席卷了全球，智能机器人全面失控！<li>没有人知道向来温顺的智能机器人为何发生如此巨变，它们满怀敌意地将人类视为攻击对象，并不遗余力地动用一切武器启动了人类毁灭计划。 当人类的命运悬于一丝之际，一位英雄挺身而出！没有人知道它的来历，就像没有人知道它到底有多强。它毅然肩负起人类的未来，通过时空逆转转置返回了智能机器人研发之前。在那个时空里，它将查明隐藏在庞大的研究数据背后的真相——这是能阻止未来悲剧的唯一机会。 <li>人类满怀期待，期待着那个正义的化身能彻底扭转局面。超能企鹅，这是人们对它的称呼！<li>人们相信，它将带给地球以真正的安宁！"]],	
			"bnyhzr布鲁":["male","min",3,["nyhzr钻能使","nyhzr钻石能量","nyhzr跃迁轰炸","nyhzr光钻尘雾","nyhzr量能投掷","nyhzr布鲁"],["des:<li>在被《死海古卷》称为圣者之城的遗迹上，贪婪的挖掘正在进行，人类的欲望像火一般燎过大地，留下不可磨灭的、耻辱的伤口。<li>然而，在某个刚刚裂开的伤口上，有人发现了什么，于是整片废墟上的人都如潮水般涌过去——像是黑色的漩涡向着中心聚合。<li>人们都在默念。古卷上的圣者此刻便躺在诸人面前——蓝钻晶能保护着他的身体，急冻冷却获得的长生使他看起来一如往昔。没有人注意到圣者的遗言：我是蓝钻布鲁，来自你们所无法想象的高等文明星球。但这里的高氧环境却非我能承受的。我在地底长眠，等你们找到我，按照我留下的方法使我苏醒。那时，我将把我的星球的高级文明传授给你们。<li>蓝钻布鲁身体致命的弱点被膜拜者忽略了！人们把他置于空气里膜拜，圣者可怜的躯体还未来得及苏醒就已被氧化。<li>混乱中，一名幼童从氧化发黑的蓝钻布鲁尸体中找到了一块闪亮的芯片，那是一块心脏起搏芯片，在背面印刻着一个也曾在《死海古卷》中出现的名字——蓝钻布丁。<li>但在下面，那个究竟是“爱”还是其它什么的字的部分却成为了一个无人可知的谜。"]],			
			"gnyhzr宫本武藏":["female","min",3,["nyhzr黑暗中的剑客","nyhzr勾玉魂刀","nyhzr千叶斩","nyhzr乱刃影舞","nyhzr幻之分身","nyhzr宫本武藏"],["des:<li>黑夜深沉，参天宫殿伫立于阴影之中。传说中拥有巨大力量的天照宝珠就被魔王藏在这里。<li>女剑客静静潜伏在悬崖边上，隐藏在狐面下的冰冷双瞳远远向宫殿凝望。<li>几支巡逻队打着火把如往常一般在宫殿外巡视，她低下身子，轻巧地绕过他们潜入宫殿之中。阴森幽暗的建筑中遍布重重机关，稍一不慎就将死无葬身之地。上下摇摆的抡锤、瞬时淹没的流沙、地底渗出的剧毒、诡异的谜题之门……这些都难不倒这个美艳冷酷的女子。双刀在手，一路过关斩将。<li>暗夜中的潜伏者最终来到了她的终点——某个宫殿深处的密室，悄无声息地划开的机关门后，一片黑暗中的石台上，天照宝珠正在绽放光华。<li>目标就在眼前，她不由加快脚步，但突然觉察到什么又立即停下，双手交错反握刀柄，伏身露出戒备的神情。“真可惜，再往前一步，你就死了。”魔王鼓着掌，从黑暗中露出身形，嘴角扯出一道狰狞的笑。“重重关卡都被你闯过，真是精彩。宫本武藏，你果然不愧传说中的盛名……但你注定拿不到它，因为我会在你拿到之前毁掉它。”<li>“可惜我的目标不是它。”武藏冷冷一笑：“是你！”<li>刀光闪过，天照宝珠仍静静地光华四射，魔王还留存着讶异表情的人头已落地。<li>双刀入鞘，身形一晃，天照宝珠落入腰囊，而武藏，已重新隐入黑暗之中……"]],			
			},
        translate:{
            "anyhzr艾迪兰":"艾迪兰",
            "lnyhzr咯哩咯哩":"咯哩咯哩",
            "lnyhzr莉莉姆.提露埃拉":"莉莉姆·提露埃拉",
            "hnyhzr后羿":"后羿",
            "nnyhzr妮娜":"妮娜",
            "znyhzr蜘蛛形态":"蜘蛛形态",
            "znyhzr贞德":"贞德",
            "cnyhzr炽天使":"炽天使",
            "snyhzr萨特":"萨特",
            "dnyhzr德古拉":"德古拉",	
            "knyhzr狂徒":"狂徒",		
            "snyhzr时空猎人":"时空猎人",		
            "lnyhzr龙骑士":"龙骑士",		
            "lnyhzr龙":"龙",
            "bnyhzr布丁":"布丁",
            "cnyhzr超能企鹅":"超能企鹅",
            "bnyhzr布鲁":"布鲁",
            "gnyhzr宫本武藏":"宫本武藏",			
        }
},'新英魂之刃');
};
        if (config.NoUselessSkill) {
			for (var i in lib.characterPack['mode_extension_新英魂之刃']) {
			if (i=='lnyhzr咯哩咯哩'){	
			lib.character[i][3]=["nyhzr仙灵伙伴","nyhzr闪耀之光","nyhzr迷藏印记","nyhzr奥妙冲击"];
        }
		else if(i=='lnyhzr莉莉姆.提露埃拉'){	
			lib.character[i][3]=["nyhzr恐惧镰刀","nyhzr恐惧结界","nyhzr恶魔冲锋","nyhzr镰刀挥舞"];
        }
		else if(i=='hnyhzr后羿'){	
			lib.character[i][3]=["nyhzr逐阳","nyhzr穿云箭","nyhzr燎火之箭","nyhzr骄阳陨落"];
        }
		else if(i=='nnyhzr妮娜'){	
			lib.character[i][3]=["rnyhzr幽影之蜕","rnyhzr暗夜蛛毒","rnyhzr猎物锁定","nyhzr女皇神威"];
        }
		else if(i=='znyhzr贞德'){	
			lib.character[i][3]=["nyhzr光明圣礼","nyhzr圣光惩戒","nyhzr天之罚","nyhzr炽天使"];
        }
		else if(i=='snyhzr萨特'){	
			lib.character[i][3]=["nyhzr灾祸匣","nyhzr闪电活化","nyhzr雷霆之环","nyhzr毁灭指针"];
        }
		else if(i=='dnyhzr德古拉'){	
			lib.character[i][3]=["nyhzr血虐暴风","nyhzr嗜血","nyhzr血蚀之河","nyhzr血祭启示录"];
        }
		else if(i=='knyhzr狂徒'){	
			lib.character[i][3]=["nyhzr腐蚀瘟疫","nyhzr腐肉吸噬","nyhzr血肉钩索","nyhzr致命啃咬"];
        }
		else if(i=='snyhzr时空猎人'){	
			lib.character[i][3]=["nyhzr断裂时空","nyhzr超时空战斧","nyhzr时空道标","nyhzr逝时若光"];
        }
		else if(i=='lnyhzr龙骑士'){	
			lib.character[i][3]=["nyhzr龙人血脉","nyhzr真龙化身","nyhzr龙之咆哮","nyhzr龙之吐息"];
        }
		else if(i=='anyhzr艾迪兰'){	
			lib.character[i][3]=["nyhzr三重卡组","nyhzr魔卡出击","nyhzr极速冲击","nyhzr强效魔卡"];
        }
		else if(i=='bnyhzr布丁'){	
			lib.character[i][3]=["nyhzr钻石能量","nyhzr钻能光球","nyhzr钻能保护","nyhzr钻能射线"];
        }
		else if(i=='cnyhzr超能企鹅'){	
			lib.character[i][3]=["nyhzr企鹅导弹","nyhzr镭射光束","nyhzr冰上漫滑","nyhzr毁灭轰击"];
        }
		else if(i=='bnyhzr布鲁'){	
			lib.character[i][3]=["nyhzr钻石能量","nyhzr跃迁轰炸","nyhzr光钻尘雾","nyhzr量能投掷"];
        }
		else if(i=='gnyhzr宫本武藏'){	
			lib.character[i][3]=["nyhzr勾玉魂刀","nyhzr千叶斩","nyhzr乱刃影舞","nyhzr幻之分身"];
        }		
		}
		};     
        if (config.UseNew) {
            for (var i in lib.characterPack['mode_extension_新英魂之刃']) {
				if (i=='gnyhzr宫本武藏'||i=='lnyhzr咯哩咯哩'||i=='bnyhzr布丁'||i=='cnyhzr超能企鹅'||i=='bnyhzr布鲁'||i=='lnyhzr莉莉姆.提露埃拉'||i=='hnyhzr后羿'||i=='nnyhzr妮娜'||i=='znyhzr贞德'||i=='snyhzr萨特'||i=='dnyhzr德古拉'||i=='knyhzr狂徒'||i=='snyhzr时空猎人'||i=='lnyhzr龙骑士'||i=='anyhzr艾迪兰')
                for (var j = 0; j < lib.character[i][4].length; j++) {
                    if (lib.character[i][4][j].indexOf('ext:') == 0) {
                        lib.character[i][4][j] = 'ext:新英魂之刃/New' + i + '.jpg'; break;
                    }
                }
            }
        };		
		if(config.Pifu){
	game.addCharacterPack({
       translate:{
            "Pifunyhzr魅魔公主1":"幽梦魔灵",
            "Pifunyhzr魅魔公主2":"祈愿之星",
			"Pifunyhzr魅魔公主":"魅魔公主",
            "Pifunyhzr魅魔公主_info":"",
			"nyhzr祈愿周期":"祈愿周期",
            "nyhzr祈愿周期_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始时，标记【祈愿周期】+1，若标记【祈愿周期】大于12时，标记【祈愿周期】归零；<br>当标记【祈愿周期】:<br>为1时，你拥有技能【猎物锁定】；<br>为2时，你拥有技能【闪电活化】；<br>为3时，你拥有技能【光明圣礼】；<br>为4时，你拥有技能【嗜血】；<br>为5时，你拥有技能【雷霆之环】；<br>为6时，你拥有技能【灾祸匣】；<br>为7时，你拥有技能【天之罚】；<br>为8时，你拥有技能【燎火之箭】；<br>为9时，你拥有技能【女皇神威】；<br>为10时，你拥有技能【逐阳】；<br>为11时，你拥有技能【穿云箭】；<br>为12时，你拥有技能【血虐暴风】",
			"Pifunyhzr魅魔公主2jieshao":"皮肤介绍",
            "Pifunyhzr魅魔公主2jieshao_info":"使用该皮肤，你获得技能【祈愿周期】(祈愿周期：<br>回合开始时，标记【祈愿周期】+1，若标记【祈愿周期】大于12时，标记【祈愿周期】归零；<br>当标记【祈愿周期】:<br>为1时，你拥有技能【猎物锁定】；<br>为2时，你拥有技能【闪电活化】；<br>为3时，你拥有技能【光明圣礼】；<br>为4时，你拥有技能【嗜血】；<br>为5时，你拥有技能【雷霆之环】；<br>为6时，你拥有技能【灾祸匣】；<br>为7时，你拥有技能【天之罚】；<br>为8时，你拥有技能【燎火之箭】；<br>为9时，你拥有技能【女皇神威】；<br>为10时，你拥有技能【逐阳】；<br>为11时，你拥有技能【穿云箭】；<br>为12时，你拥有技能【血虐暴风】)",
			"Pifunyhzr魅魔公主1jieshao":"皮肤介绍",
            "Pifunyhzr魅魔公主1jieshao_info":"使用该皮肤，你每回合末10%概率恢复一点体力",       
			"nyhzr幽梦魔灵Skill":"幽梦魔灵",
            "nyhzr幽梦魔灵Skill_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每回合末，你有10%概率恢复一点体力",
			"Pifunyhzr暴君1":"屠戮魔影",
			"Pifunyhzr暴君2":"炼狱魂印",
			"Pifunyhzr暴君3":"毁灭之翼",
			"Pifunyhzr暴君4":"雷鸣魔君",
			"nyhzr魔君":"魔君",
            "nyhzr魔君_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>若你不为主公，你也拥有【灾祸匣】",
			"Pifunyhzr暴君4jieshao":"皮肤介绍",
            "Pifunyhzr暴君4jieshao_info":"使用该皮肤，若你不为主公，你也拥有【灾祸匣】",	
			"Pifunyhzr暴君2jieshao":"皮肤介绍",
            "Pifunyhzr暴君2jieshao_info":"使用该皮肤，你的最大体力值+1；回合结束后，若游戏人数大于3，你可以令一名选择一名除自己外其他角色，令其混乱，直到你的回合开始",					
			"Pifunyhzr暴君1jieshao":"皮肤介绍",
            "Pifunyhzr暴君1jieshao_info":"使用该皮肤，每造成三次伤害，你恢复一点体力",	
			"Pifunyhzr暴君3jieshao":"皮肤介绍",
            "Pifunyhzr暴君3jieshao_info":"使用该皮肤，当你处于濒死阶段前，你可以对除你以外的所有角色造成一点伤害",	
			"nyhzr魔影屠戮":"魔影屠戮",
            "nyhzr魔影屠戮_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每造成三次伤害，你恢复一点体力",
			"nyhzr灭世":"灭世",
            "nyhzr灭世_info":"当你处于濒死阶段前，你可以对除你以外的所有角色造成一点伤害",
            "Pifunyhzr吸血鬼伯爵1":"血色传说",			
            "Pifunyhzr吸血鬼伯爵2":"安魂血使",			
            "Pifunyhzr吸血鬼伯爵3":"血月会长",	
			"nyhzr永生":"永生",
            "nyhzr永生_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>身份，国战，对决，挑战模式下，每当有其他角色回合开始时，若你已死亡，你复活<li>你的手牌上限为3",
			"nyhzr不朽":"不朽",
            "nyhzr不朽_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>濒死前，若游戏人数等于2，你的体力上限增加2并恢复体力至最大值,使用后删除技能【不朽】【永生】",	
			"nyhzr永生1":"永生",
            "nyhzr永生1_info":"",				
			"nyhzr惧光":"惧光",
            "nyhzr惧光_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>当你受到非转化的火焰伤害前，你被移除游戏",
			"Pifunyhzr吸血鬼伯爵1jieshao":"皮肤介绍",
            "Pifunyhzr吸血鬼伯爵1jieshao_info":"使用该皮肤，你减少2点体力上限，并获得技能【永生】【惧光】【不朽】<li>【永生】：身份，国战，对决，挑战模式下，每当有其他角色回合开始时，若你已死亡，你复活；你的手牌上限为3<li>【不朽】：濒死前，若游戏人数等于2，你的体力上限增加2并恢复体力至最大值,使用后删除技能【不朽】【永生】<li>【惧光】：当你受到火焰伤害前，你被移出游戏",				
			"_Pifunyhzr吸血鬼伯爵3jiesuo":"皮肤解锁",
            "_Pifunyhzr吸血鬼伯爵3jiesuo_info":"",
			"_Pifunyhzr吸血鬼伯爵3jiesuo2":"皮肤解锁",
            "_Pifunyhzr吸血鬼伯爵3jiesuo2_info":"",
			"Pifunyhzr吸血鬼伯爵3jieshao":"皮肤介绍",
            "Pifunyhzr吸血鬼伯爵3jieshao_info":"使用该皮肤，你可以无条件发动技能【嗜血】且每次发动技能【嗜血】时摸一张牌",			
			"nyhzr血月":"血月",
            "nyhzr血月_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>你可以无条件发动技能【嗜血】且每次发动技能【嗜血】时摸一张牌",
			"nyhzr安魂":"安魂",
            "nyhzr安魂_info":"每当你使用或打出一张黑色牌，你可以令此牌失效并令一名其他角色流失一点体力（该技能会触发【嗜血】效果），每回合限一次",	
			"Pifunyhzr吸血鬼伯爵2jieshao":"皮肤介绍",
            "Pifunyhzr吸血鬼伯爵2jieshao_info":"使用该皮肤，每当你使用或打出一张黑色牌，你可以令此牌失效并令一名其他角色流失一点体力（该技能会触发【嗜血】效果），每回合限一次",
            "Pifunyhzr射日英雄1":"强弩神射",
            "Pifunyhzr射日英雄2":"幻影射手",						
            "Pifunyhzr射日英雄3":"银月箭华",						
            "Pifunyhzr射日英雄4":"皎月王侯",						
            "Pifunyhzr射日英雄5":"黄金之翼",	
			"Pifunyhzr射日英雄5jieshao":"皮肤介绍",
            "Pifunyhzr射日英雄5jieshao_info":"使用该皮肤，场上除了对你造成的伤害外的伤害均视为你造成的；你造成伤害后，与被伤害者交换座位",			
			"nyhzr黄金羽翼":"黄金羽翼",
            "nyhzr黄金羽翼_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>场上除了对你造成的伤害外的伤害均视为你造成的<li>你造成伤害后，与被伤害者交换座位",
			"Pifunyhzr射日英雄2jieshao":"皮肤介绍",
            "Pifunyhzr射日英雄2jieshao_info":"使用该皮肤，游戏中，你可以通过提升能力等级来强化自身基本属性",	
			"nyhzr强化":"强化",
            "nyhzr强化_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>游戏中，你可以通过提升能力等级来强化自身基本属性",	
			"Pifunyhzr射日英雄1jieshao":"皮肤介绍",
            "Pifunyhzr射日英雄1jieshao_info":"使用该皮肤，当你的体力大于二时，你造成的伤害+1，你受到的伤害+1",		
			"nyhzr强弩":"强弩",
            "nyhzr强弩_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>当你的体力大于二时，你造成的伤害+1，你受到的伤害+1",	
			"Pifunyhzr射日英雄3jieshao":"皮肤介绍",
            "Pifunyhzr射日英雄3jieshao_info":"使用该皮肤，【燎火之箭】转化伤害属性改为雷属性；每当你造成雷属性伤害时，你可以随机获得受伤者一项技能",		
			"nyhzr银箭":"银箭",
            "nyhzr银箭_info":"<li>每当你造成雷属性伤害时，你可以随机复制受伤者一项技能<li><span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>【燎火之箭】转化伤害属性改为雷属性",		
			"nhyzr皎月之力":"皎月之力",
            "nhyzr皎月之力_info":"每个回合末，你可以流失一点体力进行一个额外的回合（无法连续使用），在额外的回合中，你使用的卡牌没有数量和距离限制",			
			"nhyzr皎月之力1":"皎月之力",
            "nhyzr皎月之力1_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>你使用的卡牌没有数量和距离限制",	
			"Pifunyhzr射日英雄4jieshao":"皮肤介绍",
            "Pifunyhzr射日英雄4jieshao_info":"使用该皮肤，你的最大体力值+1;每个回合末，你可以流失一点体力进行一个额外的回合（无法连续使用），在额外的回合中，你使用的卡牌没有数量和距离限制",
            "nyhzr暗翼骨龙龙":"暗翼骨龙",	
            "nyhzr星河雷爆龙":"星河雷爆",	
            "nyhzr强袭龙魂龙":"强袭龙魂",	
            "Pifunyhzr魔龙化身1":"强袭龙魂",	
            "Pifunyhzr魔龙化身2":"暗翼骨龙",	
            "Pifunyhzr魔龙化身3":"星河雷爆",	
			"Pifunyhzr魔龙化身2jieshao":"皮肤介绍",
            "Pifunyhzr魔龙化身2jieshao_info":"使用该皮肤，你增加125点龙人血脉；当你触发【真龙化身】时，你化身为暗翼骨龙（暗翼骨龙：你的黑色牌造成伤害后，你可以流失一点体力令对方翻面）",	
			"nyhzr暗翼锋芒":"暗翼锋芒",
            "nyhzr暗翼锋芒_info":"你的黑色牌造成伤害后，可以流失一点体力令对方翻面",	
			"Pifunyhzr魔龙化身3jieshao":"皮肤介绍",
            "Pifunyhzr魔龙化身3jieshao_info":"使用该皮肤，出牌阶段，若你的龙人血脉大于或等于30且你未化龙，你可以牺牲自己，引爆自身龙人血脉，对除自己外的所有角色造成伤害（每200点龙人血脉转化为1点伤害，最大转化400点龙人血脉）并令除自己外的所有角色翻面，使用后删除此技能",	
			"nyhzr星河雷爆":"星河雷爆",
            "nyhzr星河雷爆_info":"出牌阶段，若你的龙人血脉大于或等于30且你未化龙，你可以牺牲自己，引爆自身龙人血脉，对除自己外的所有角色造成伤害（每200点龙人血脉转化为1点伤害，最大转化400点龙人血脉）并令除自己外的所有角色翻面，使用后删除此技能",							
			"Pifunyhzr魔龙化身1jieshao":"皮肤介绍",
            "Pifunyhzr魔龙化身1jieshao_info":"使用该皮肤，龙人血脉数量为300时获得的技能改为：回合内你使用的牌没有次数与距离限制",	
            "Pifunyhzr时空英雄1":"逆时者",		
            "Pifunyhzr时空英雄2":"强殖妖斧",	
			"Pifunyhzr时空英雄1jieshao":"皮肤介绍",
            "Pifunyhzr时空英雄1jieshao_info":"使用该皮肤，你获得技能【道标】和【逆时】<li>【道标】：回合开始前，你将所有除你以外的角色的手牌移出游戏；若游戏外有因此法和【逆时】移出游戏的手牌，除你以外的角色获得这些手牌<li>【逆时】：出牌阶段，你可以还原除你以外的角色的因【道标】和此法移出游戏的手牌，每回合限一次；若这些角色在还原前有手牌，这些手牌移出游戏",	
			"nyhzr道标":"道标",
            "nyhzr道标_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>回合开始前，你将所有除你以外的角色的手牌移出游戏；若游戏外有因此法和【逆时】移出游戏的手牌，除你以外的角色获得这些手牌",	
			"nyhzr回溯":"回溯",
            "nyhzr回溯_info":"出牌阶段，你可以还原除你以外的角色的因【道标】和此法移出游戏的手牌，每回合限一次；若这些角色在还原前有手牌，这些手牌移出游戏",	
			"Pifunyhzr时空英雄2jieshao":"皮肤介绍",
            "Pifunyhzr时空英雄2jieshao_info":"使用该皮肤，【超时空巨斧】撕裂时空的特效不会触发，弃牌数-1",		
			"nyhzr妖斧":"妖斧",
            "nyhzr妖斧_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>【超时空巨斧】撕裂时空的特效不会触发，弃牌数-1",			
			"nyhzr强袭":"强袭",
            "nyhzr强袭_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>龙人血脉数量为300时获得的技能改为：回合内你使用的牌没有次数与距离限制",				
			"nyhzr炼狱魂印":"炼狱魂印",
            "nyhzr炼狱魂印_info":"回合结束后，若游戏人数大于3，你可以令一名选择一名除自己外其他角色，令其混乱，直到你的回合开始",						
            "Pifunyhzr自然之灵1":"妙法仙灵",						
            "Pifunyhzr自然之灵2":"暗黑小魔星",
            "Pifunyhzr自然之灵1jieshao":"皮肤介绍",
            "Pifunyhzr自然之灵1jieshao_info":"使用该皮肤，出牌阶段，你可以令妖精皮皮去治疗你选定的目标，每回合限一次",				
			"nyhzr仙灵妙法1":"仙灵妙法",
			"nyhzr仙灵妙法":"仙灵妙法",			
            "nyhzr仙灵妙法_info":"出牌阶段，你可以令妖精皮皮去治疗你选定的目标，每回合限一次",	
            "Pifunyhzr自然之灵2jieshao":"皮肤介绍",
            "Pifunyhzr自然之灵2jieshao_info":"使用该皮肤，所有人于其回合开始前进行一次判定，若判定结果为红色这该角色恢复一点体力并进入幸福童年（回合内无法使用任何牌）；为黑色则进入黑色童年（回合内手牌没有次数限制，回合结束后翻面）",	
            "nyhzr回忆童年":"回忆童年",
            "nyhzr回忆童年_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>所有人于其回合开始前进行一次判定，若判定结果为红色这该角色恢复一点体力并进入幸福童年（回合内无法使用任何牌）；为黑色则进入黑色童年（回合内手牌没有次数限制，回合结束后翻面）",			
			"nyhzr幸福童年":"幸福童年",
            "nyhzr幸福童年_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>回合内无法使用任何牌",				
			"nyhzr黑色童年":"黑色童年",
            "nyhzr黑色童年_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>回合内手牌没有次数限制，回合结束后翻面",
            "Pifunyhzr幻卡魔女1":"花牌魔后",
            "Pifunyhzr幻卡魔女2":"雪凝幻彩",
            "Pifunyhzr幻卡魔女3":"星钻仙后",
            "Pifunyhzr幻卡魔女4":"晶钻星使",
            "Pifunyhzr幻卡魔女5":"冰爽甜心",			
			"Pifunyhzr幻卡魔女1jieshao":"皮肤介绍",
            "Pifunyhzr幻卡魔女1jieshao_info":"使用该皮肤，每当你杀死一名角色，你将该角色移出游戏，然后你获得一张【王牌】",					
			"nyhzr王牌":"王牌",
            "nyhzr王牌_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每当你杀死一名角色，游戏移出该角色，然后你获得一张【王牌】",								
			"nyhzr暗翼":"暗翼",
            "nyhzr暗翼_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>当你触发【真龙化身】时，你化身为暗翼骨龙（暗翼骨龙：你的黑色牌造成伤害后，你可以流失一点体力令对方翻面）",												
			"Pifunyhzr幻卡魔女4jieshao":"皮肤介绍",
            "Pifunyhzr幻卡魔女4jieshao_info":"使用该皮肤，你获得两张【王牌】，你获得技能牌的速度翻倍",
			"nyhzr星钻之力":"星钻之力",
            "nyhzr星钻之力_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>你获得技能牌的速度翻倍",
			"Pifunyhzr幻卡魔女3jieshao":"皮肤介绍",
            "Pifunyhzr幻卡魔女3jieshao_info":"使用该皮肤，你手牌上限+2；出牌阶段，你可以弃置4张牌，然后获得一张【王牌】，每回合限一次",
			"nyhzr四色晶钻":"四色晶钻",
            "nyhzr四色晶钻_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>你的手牌上限+2；出牌阶段，若游戏人数小于8，你可以弃置4张牌，然后获得一张【王牌】，每回合限一次",
			"Pifunyhzr幻卡魔女2jieshao":"皮肤介绍",
            "Pifunyhzr幻卡魔女2jieshao_info":"使用该皮肤，游戏背景变为冰天雪地，除拥有三重卡组的角色外的角色无法适应该环境，无法适应环境的角色于其回合结束阶段须额外弃置一张手牌",
			"nyhzr冰天雪地":"冰天雪地",
			"nyhzr冰天雪地1":"冰天雪地",			
            "nyhzr冰天雪地1_info":"<span class=\"bluetext\" style=\"color:#C0FF3E\">场地：</span><br>在冰天雪地中，除拥有三重卡组的角色外的角色无法适应该环境，无法适应环境的角色于其回合结束阶段须额外弃置一张手牌",			
			"Pifunyhzr幻卡魔女5jieshao":"皮肤介绍",
            "Pifunyhzr幻卡魔女5jieshao_info":"使用该皮肤，游戏背景变为炎炎夏日，除拥有三重卡组的角色外的角色无法适应该环境，无法适应环境的角色于场地开启后的六个回合后的每个回合末流失一点体力",
			"nyhzr炎炎夏日":"炎炎夏日",
			"nyhzr炎炎夏日1":"炎炎夏日",			
            "nyhzr炎炎夏日1_info":"<span class=\"bluetext\" style=\"color:#C0FF3E\">场地：</span><br>在炎炎夏日中，除拥有三重卡组的角色外的角色无法适应该环境，无法适应环境的角色于场地开启后的六个回合后的每个回合末流失一点体力",		
            "Pifunyhzr第二人类1":"伊娃",
            "Pifunyhzr第二人类2":"宝钻大亨",
            "Pifunyhzr第二人类3":"趣海先锋",
			"Pifunyhzr第二人类3jieshao":"皮肤介绍",
            "Pifunyhzr第二人类3jieshao_info":"使用该皮肤，你的游戏界面会创建一个控制超能企鹅释放技能的按钮（电脑版可以拖动，手机版不行），每当你点击此按钮，你可以对一名除你以外的角色造成一点伤害（不会引爆企鹅导弹）<br>冷却：60秒",
            "nyhzr浪击1":"浪击",
            "nyhzr浪击":"浪击",				
			"Pifunyhzr第二人类2jieshao":"皮肤介绍",
            "Pifunyhzr第二人类2jieshao_info":"使用该皮肤，你会获得一颗黄钻石与技能【钻石力量】（出牌阶段，你可以弃置两张牌使你的黄钻石充满能量，持续30秒，若持续时间内【钻石力量】因为企鹅导弹的爆炸而失去，当【钻石力量】回来后，你将永久拥有【钻石力量】<br><span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>当黄钻石充满能量时，你造成的伤害+1）",
			"nyhzr钻石力量0":"钻石力量",	
			"nyhzr钻石力量1":"钻石力量",	
			"nyhzr钻石力量":"钻石力量",				
            "nyhzr钻石力量_info":"出牌阶段，你可以弃置两张牌使你的黄钻石充满能量，持续30秒，若持续时间内【钻石力量】因为企鹅导弹的爆炸而失去，当【钻石力量】回来后，你将永久拥有【钻石力量】<br><span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>当黄钻石充满能量时，你造成的伤害+1",			
			"Pifunyhzr第二人类1jieshao":"皮肤介绍",
            "Pifunyhzr第二人类1jieshao_info":"使用该皮肤，每当你弃牌后，你可以弃置一张手牌，然后在杀，闪，桃中随机选取一张并获得，每回合限一次",
			"nyhzr探索":"探索",
            "nyhzr探索_info":"每当你弃牌后，你可以弃置一张手牌，然后在杀，闪，桃中随机选取一张并获得，每回合限一次",
            "Pifunyhzr狼蛛1":"紫魅毒姬",
			"Pifunyhzr狼蛛1jieshao":"皮肤介绍",
            "Pifunyhzr狼蛛1jieshao_info":"使用该皮肤，每次使用牌时，进行一次判定，若判定结果为黑色，你对目标加一个随机的负面效果",
			"nyhzr紫魅":"紫魅",
            "nyhzr紫魅_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每次使用牌时，进行一次判定，若判定结果为黑色，你对目标加一个随机的负面效果",
			},
       character:{
            "Pifunyhzr魅魔公主1":["female","250金",'未购买',["Pifunyhzr魅魔公主1jieshao"],["forbidai"]],
            "Pifunyhzr魅魔公主2":["female","800金",'未购买',["Pifunyhzr魅魔公主2jieshao"],["forbidai"]],
            "Pifunyhzr暴君1":["male","250金",'未购买',["Pifunyhzr暴君1jieshao"],["forbidai"]],
            "Pifunyhzr暴君2":["male","990金",'未购买',["Pifunyhzr暴君2jieshao"],["forbidai"]],
            "Pifunyhzr暴君3":["male","800金",'未购买',["Pifunyhzr暴君3jieshao"],["forbidai"]],
            "Pifunyhzr暴君4":["male","990金",'未购买',["Pifunyhzr暴君4jieshao"],["forbidai"]],
            "Pifunyhzr吸血鬼伯爵1":["male","500金",'未购买',["Pifunyhzr吸血鬼伯爵1jieshao"],["forbidai"]],
            "Pifunyhzr吸血鬼伯爵2":["male","1200金",'未购买',["Pifunyhzr吸血鬼伯爵2jieshao"],["forbidai"]],
            "Pifunyhzr吸血鬼伯爵3":["male","非卖",'未解锁',["Pifunyhzr吸血鬼伯爵3jieshao"],["forbidai"]],
            "Pifunyhzr射日英雄1":["male","500金",'未购买',["Pifunyhzr射日英雄1jieshao"],["forbidai"]],
            "Pifunyhzr射日英雄2":["male","800金",'未购买',["Pifunyhzr射日英雄2jieshao"],["forbidai"]],
            "Pifunyhzr射日英雄3":["male","990金",'未购买',["Pifunyhzr射日英雄3jieshao"],["forbidai"]],
            "Pifunyhzr射日英雄4":["male","100积分",'未购买',["Pifunyhzr射日英雄4jieshao"],["forbidai"]],
            "Pifunyhzr射日英雄5":["male","50积分",'未购买',["Pifunyhzr射日英雄5jieshao"],["forbidai"]],
            "nyhzr暗翼骨龙龙":["male","jin",'未购买',[],["forbidai"]],
            "nyhzr星河雷爆龙":["male","jin",'未购买',[],["forbidai"]],
            "nyhzr强袭龙魂龙":["male","jin",'未购买',[],["forbidai"]],
            "Pifunyhzr魔龙化身1":["male","990金",'未购买',["Pifunyhzr魔龙化身1jieshao"],["forbidai"]],
            "Pifunyhzr魔龙化身2":["male","1200金",'未购买',["Pifunyhzr魔龙化身2jieshao"],["forbidai"]],
            "Pifunyhzr魔龙化身3":["male","60积分",'未购买',["Pifunyhzr魔龙化身3jieshao"],["forbidai"]],
            "Pifunyhzr时空英雄1":["male","500金",'未购买',["Pifunyhzr时空英雄1jieshao"],["forbidai"]],
            "Pifunyhzr时空英雄2":["male","990金",'未购买',["Pifunyhzr时空英雄2jieshao"],["forbidai"]],
            "Pifunyhzr自然之灵1":["female","250金",'未购买',["Pifunyhzr自然之灵1jieshao"],["forbidai"]],
            "Pifunyhzr自然之灵2":["female","800金",'未购买',["Pifunyhzr自然之灵2jieshao"],["forbidai"]],
            "Pifunyhzr幻卡魔女1":["female","500金",'未购买',["Pifunyhzr幻卡魔女1jieshao"],["forbidai"]],
            "Pifunyhzr幻卡魔女2":["female","非卖",'未解锁',["Pifunyhzr幻卡魔女2jieshao"],["forbidai"]],
            "Pifunyhzr幻卡魔女3":["female","800金",'未购买',["Pifunyhzr幻卡魔女3jieshao"],["forbidai"]],
            "Pifunyhzr幻卡魔女4":["female","990金",'未购买',["Pifunyhzr幻卡魔女4jieshao"],["forbidai"]],
            "Pifunyhzr幻卡魔女5":["female","990金",'未购买',["Pifunyhzr幻卡魔女5jieshao"],["forbidai"]],
            "Pifunyhzr第二人类1":["male","880金",'未购买',["Pifunyhzr第二人类1jieshao"],["forbidai"]],		
            "Pifunyhzr第二人类2":["male","880金",'未购买',["Pifunyhzr第二人类2jieshao"],["forbidai"]],		
            "Pifunyhzr第二人类3":["male","800金",'未购买',["Pifunyhzr第二人类3jieshao"],["forbidai"]],	
            "Pifunyhzr狼蛛1":["female","990金",'未购买',["Pifunyhzr狼蛛1jieshao"],["forbidai"]],				
		},
		skill:{
			"Pifunyhzr狼蛛1jieshao":{
						nobracket:true,				
				 },
			"_Pifunyhzr狼蛛":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('rnyhzr幽影之蜕')&&player.hasSkill('rnyhzr暗夜蛛毒')&&player.hasSkill('rnyhzr猎物锁定')&&player.hasSkill('nyhzr女皇神威')&&player.storage._Pifunyhzr狼蛛==undefined;
                },			
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=990||lib.config.Pifunyhzr狼蛛1==true){
	list.push('Pifunyhzr狼蛛1')	
	}
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr狼蛛1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr狼蛛1!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr狼蛛1',true);
		player.addSkill('nyhzr紫魅');
		game.say1('购买成功');
	}else{
		player.addSkill('nyhzr紫魅');
		}
	}else{
		player.addSkill('nyhzr紫魅');
		}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('nnyhzr妮娜',result.buttons[0].link);
	player.storage._Pifunyhzr狼蛛=0;
    }else{
	player.storage._Pifunyhzr狼蛛=0;		
    }
},
            },
			"nyhzr紫魅":{
nobracket:true,	
trigger:{
player:"useCardToBegin",
},
forced:true,
filter:function (event,player){
return event.target;
},
check:function (event,player){
return player.getEnemies().contains(event.target);
},
content:function (){
"step 0"
player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
"step 1"
if(result.judge>0){}else{trigger.target.getDebuff()};
},																				
						},
			"nyhzr探索":{
				nobracket:true,	
				trigger:{
					player:"discardAfter",
				},
				usable:1,
                filter:function (event,player){
					return player.num('h')>0;
                },					
				content:function (){
					player.chooseToDiscard(1,'h',true);
					player.gain(game.createCard(['sha','shan','tao'].randomGet()));
				},
			},			
			"nyhzr钻石力量":{
nobracket:true,	
enable:"phaseUse",
filterCard:true,	
selectCard:2,
filter:function (event,player){
return !player.hasSkill('nyhzr钻石力量1');
},
content:function (){	
var nyhzr闪亮的黄钻石=ui.create.div();
nyhzr闪亮的黄钻石.style.height='25px';
nyhzr闪亮的黄钻石.style.width='25px';
nyhzr闪亮的黄钻石.style.left='90px';
nyhzr闪亮的黄钻石.style.top='5px';
nyhzr闪亮的黄钻石.setBackgroundImage('extension/新英魂之刃/闪亮的黄钻石.gif');
player.node.avatar.appendChild(nyhzr闪亮的黄钻石);
player.addSkill('nyhzr钻石力量1');
game.log(player,'的黄钻石发光了');
setTimeout(function(){
nyhzr闪亮的黄钻石.remove();
player.removeSkill('nyhzr钻石力量1');
},30000);
},
ai:{
order:21,
result:{
player:function (player){
return player.num('h')-2;
},			
},		
},	
			},
			"nyhzr钻石力量0":{
content:function (){
var nyhzr黄钻石=ui.create.div();
nyhzr黄钻石.style.height='25px';
nyhzr黄钻石.style.width='25px';
nyhzr黄钻石.style.left='90px';
nyhzr黄钻石.style.top='5px';
nyhzr黄钻石.setBackgroundImage('extension/新英魂之刃/黄钻石.png');
player.node.avatar.appendChild(nyhzr黄钻石);
game.log(player,'获得了一颗黄钻石');
}				
			},				
			"nyhzr钻石力量1":{
trigger:{
source:'damageBegin'
},
forced:true,
content:function (){
trigger.num+=1;
}				
			},				
			"nyhzr浪击1":{
nobracket:true,	
content:function (){
"step 0"
player.chooseTarget('是否发动【浪击】？',function(card,player,target){
return target!=player;
}).ai=function(target){
return -ai.get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
event.target.damage();	             
}				
},	
},			
			"nyhzr浪击":{
nobracket:true,	
content:function (){
if(player==game.me){	
ui.nyhzr浪击=ui.create.div(function(){
	if (game.me.storage.nyhzr浪击==undefined||game.me.storage.nyhzr浪击==1){
		game.me.useSkill('nyhzr浪击1');
		game.me.storage.nyhzr浪击=0;		
		nyhzr浪击date1=new Date();
		setTimeout(function(){
		game.me.storage.nyhzr浪击=1;
	},60000);
	}else{
		nyhzr浪击date2=new Date();
		var time=Math.ceil(60-(nyhzr浪击date2.getTime()-nyhzr浪击date1.getTime())/1000);
		game.say1('还剩'+time+'秒');
	};
	});
ui.nyhzr浪击.style.height='55px';
ui.nyhzr浪击.style.width='55px';
ui.nyhzr浪击.setBackgroundImage('extension/新英魂之刃/Pifunyhzr第二人类3AJJN.png');
ui.nyhzr浪击1=ui.create.dialog('hidden');
ui.nyhzr浪击1.add(ui.nyhzr浪击);
ui.window.appendChild(ui.nyhzr浪击1);
ui.nyhzr浪击1.style.height='75px';
ui.nyhzr浪击1.style.width='75px';
ui.nyhzr浪击1.style.left='calc(100% - 250px)';
ui.nyhzr浪击1.style.top='calc(100% - 300px)';						
};			
			},
				},				 
			"Pifunyhzr第二人类1jieshao":{
						nobracket:true,				
				 },
			"Pifunyhzr第二人类2jieshao":{
						nobracket:true,				
				 },							 
			"Pifunyhzr第二人类3jieshao":{
						nobracket:true,				
				 },							 
			"_Pifunyhzr第二人类":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr企鹅导弹')&&player.hasSkill('nyhzr镭射光束')&&player.hasSkill('nyhzr冰上漫滑')&&player.hasSkill('nyhzr毁灭轰击')&&player.storage._Pifunyhzr第二人类==undefined;
                },			
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=880||lib.config.Pifunyhzr第二人类1==true){
	list.push('Pifunyhzr第二人类1')	
	}	
	if (lib.config.coin>=880||lib.config.Pifunyhzr第二人类2==true){
	list.push('Pifunyhzr第二人类2')	
	}
	if (lib.config.coin>=800||lib.config.Pifunyhzr第二人类3==true){
	list.push('Pifunyhzr第二人类3')	
	}	
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr第二人类1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr第二人类1!=true){
		game.changeCoin(-880);
		game.saveConfig('Pifunyhzr第二人类1',true);
		player.addSkill('nyhzr探索');
		game.say1('购买成功');
	}else{
		player.addSkill('nyhzr探索');
		}
	}else{
		player.addSkill('nyhzr探索');
		}
	}
	if (result.buttons[0].link=='Pifunyhzr第二人类2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr第二人类2!=true){
		game.changeCoin(-880);
		game.saveConfig('Pifunyhzr第二人类2',true);
		player.addSkill('nyhzr钻石力量');
		player.useSkill('nyhzr钻石力量0');
		game.say1('购买成功');
	}else{
		player.addSkill('nyhzr钻石力量');
		player.useSkill('nyhzr钻石力量0');
		}
	}else{
		player.addSkill('nyhzr钻石力量');
		player.useSkill('nyhzr钻石力量0');
		}
	}
	if (result.buttons[0].link=='Pifunyhzr第二人类3'){
		if (player==game.me){
		if (lib.config.Pifunyhzr第二人类3!=true){
		game.changeCoin(-800);
		game.saveConfig('Pifunyhzr第二人类3',true);
		player.useSkill('nyhzr浪击');
		game.say1('购买成功');
	}else{
		player.useSkill('nyhzr浪击');
		}
	}else{
		player.useSkill('nyhzr浪击');
		}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('cnyhzr超能企鹅',result.buttons[0].link);
	player.storage._Pifunyhzr第二人类=0;
    }else{
	player.storage._Pifunyhzr第二人类=0;		
    }
},
            },
			"nyhzr炎炎夏日":{
nobracket:true,	
content:function (){
for(var i=0;i<game.players.length;i++){
game.players[i].addSkill("nyhzr炎炎夏日1");
game.players[i].removeSkill("nyhzr冰天雪地1");
}; 
ui.background.setBackgroundImage('extension/新英魂之刃/炎炎夏日.jpg');
game.log(player,'将场地切换为炎炎夏日');  	
}						      						
				 },				
			"nyhzr炎炎夏日1":{
nobracket:true,	
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){	
if(player.hasSkill('nyhzr三重卡组')){
if(player.storage.nyhzr炎炎夏日1==undefined) player.storage.nyhzr炎炎夏日1=0;                
player.storage.nyhzr炎炎夏日1+=1;	
}else{
for(var i=0;i<game.players.length;i++){
if(game.players[i].storage.nyhzr炎炎夏日1>5){
player.loseHp();	
}	
};	
};
}						      						
				 },			
			"nyhzr冰天雪地":{
nobracket:true,	
content:function (){
for(var i=0;i<game.players.length;i++){
game.players[i].addSkill("nyhzr冰天雪地1");
game.players[i].removeSkill("nyhzr炎炎夏日1");
};  
ui.background.setBackgroundImage('extension/新英魂之刃/冰天雪地.jpg');
game.log(player,'将场地切换为冰天雪地'); 	
}						      						
				 },				
			"nyhzr冰天雪地1":{
nobracket:true,	
trigger:{
player:"phaseEnd",
},
forced:true,
filter:function (event,player){
return player.num('h')>0&&!player.hasSkill('nyhzr三重卡组');	
},
content:function (){
player.chooseToDiscard(1,'h',true);
}						      						
				 },				
			"nyhzr四色晶钻":{
nobracket:true,
mod:{
maxHandcard:function (player,num){
return num+2;
},
},	
enable:"phaseUse",
usable:1,
filterCard:true,
selectCard:4,
filter:function (event,player){
return game.players.length<8;
},
content:function (){
player.gain(game.createCard('KAnyhzr王牌'));		
}						
				 },			
			"nyhzr星钻之力":{
						nobracket:true,				
				 },
			"Pifunyhzr幻卡魔女5jieshao":{
						nobracket:true,				
				 },					 
			"Pifunyhzr幻卡魔女4jieshao":{
						nobracket:true,				
				 },				
			"Pifunyhzr幻卡魔女3jieshao":{
						nobracket:true,				
				 },	
			"Pifunyhzr幻卡魔女2jieshao":{
						nobracket:true,				
				 },					 
			"nyhzr暗翼":{
						nobracket:true,				
				 },
			"Pifunyhzr幻卡魔女1jieshao":{
						nobracket:true,				
				 },			
			"nyhzr王牌":{
						nobracket:true,		
				trigger:{source:'dieAfter'},
				forced:true,
				content:function(){
					game.removePlayer(trigger.player);
					player.gain(game.createCard('KAnyhzr王牌'));
				}				
			},			
			"_Pifunyhzr幻卡魔女":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr三重卡组')&&player.hasSkill('nyhzr魔卡出击')&&player.hasSkill('nyhzr极速冲击')&&player.hasSkill('nyhzr强效魔卡')&&player.storage._Pifunyhzr幻卡魔女==undefined;
                },				
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=500||lib.config.Pifunyhzr幻卡魔女1==true){
	list.push('Pifunyhzr幻卡魔女1')	
	}	
	if (lib.config.Pifunyhzr幻卡魔女2==true){
	list.push('Pifunyhzr幻卡魔女2')	
	}		
	if (lib.config.coin>=800||lib.config.Pifunyhzr幻卡魔女3==true){
	list.push('Pifunyhzr幻卡魔女3')	
	}		
	if (lib.config.coin>=990||lib.config.Pifunyhzr幻卡魔女4==true){
	list.push('Pifunyhzr幻卡魔女4')	
	}
	if (lib.config.coin>=990||lib.config.Pifunyhzr幻卡魔女5==true){
	list.push('Pifunyhzr幻卡魔女5')	
	}	
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr幻卡魔女1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr幻卡魔女1!=true){
		game.changeCoin(-500);
		game.saveConfig('Pifunyhzr幻卡魔女1',true);
		player.addSkill('nyhzr王牌');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr王牌');}
	}else{player.addSkill('nyhzr王牌');}
	}
	if (result.buttons[0].link=='Pifunyhzr幻卡魔女2'){
		player.useSkill('nyhzr冰天雪地');
	}
	if (result.buttons[0].link=='Pifunyhzr幻卡魔女3'){
		if (player==game.me){
		if (lib.config.Pifunyhzr幻卡魔女3!=true){
		game.changeCoin(-800);
		game.saveConfig('Pifunyhzr幻卡魔女3',true);
		player.addSkill('nyhzr四色晶钻');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr四色晶钻');}
	}else{player.addSkill('nyhzr四色晶钻');}
	}	
	if (result.buttons[0].link=='Pifunyhzr幻卡魔女4'){
		if (player==game.me){
		if (lib.config.Pifunyhzr幻卡魔女4!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr幻卡魔女4',true);
		player.gain(game.createCard('KAnyhzr王牌'));
		player.gain(game.createCard('KAnyhzr王牌'));
		player.addSkill('nyhzr星钻之力');
		game.say1('购买成功');
	}else{
		player.gain(game.createCard('KAnyhzr王牌'));
		player.gain(game.createCard('KAnyhzr王牌'));
		player.addSkill('nyhzr星钻之力');
		}
	}else{
		player.gain(game.createCard('KAnyhzr王牌'));
		player.gain(game.createCard('KAnyhzr王牌'));
		player.addSkill('nyhzr星钻之力');
		}
	}
	if (result.buttons[0].link=='Pifunyhzr幻卡魔女5'){
		if (player==game.me){
		if (lib.config.Pifunyhzr幻卡魔女5!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr幻卡魔女5',true);
		player.useSkill('nyhzr炎炎夏日');
		game.say1('购买成功');
	}else{
		player.useSkill('nyhzr炎炎夏日');
		}
	}else{
		player.useSkill('nyhzr炎炎夏日');
		}
	}	
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('anyhzr艾迪兰',result.buttons[0].link);
	player.storage._Pifunyhzr幻卡魔女=0;
    }else{
	player.storage._Pifunyhzr幻卡魔女=0;		
	}
},
            },			
			"Pifunyhzr自然之灵2jieshao":{
						nobracket:true,				
				 },				
            "nyhzr幸福童年":{
						nobracket:true,	
		   mod:{
                    cardUsable:function (card){
            if(get.info(card)&&get.info(card).forceUsable) return;
            return 0;
        },
		},
        trigger:{
        player:"phaseEnd",
        },
		forced:true,
		content:function (){
			player.removeSkill('nyhzr幸福童年');
                }
            },            
			"nyhzr黑色童年":{
						nobracket:true,	
		   mod:{
                    cardUsable:function (card){
            if(get.info(card)&&get.info(card).forceUsable) return;
            return Infinity;
        },
		},
        trigger:{
        player:"phaseEnd",
        },
		forced:true,
		content:function (){
			player.turnOver();
			player.removeSkill('nyhzr黑色童年');
                }
            },				
            "nyhzr回忆童年":{
						nobracket:true,	
                global:"nyhzr回忆童年_1",
                subSkill:{
                    1:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        content:function (){
"step 0"
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
        player.recover();
		player.addSkill('nyhzr幸福童年');
		game.log(player,'进入幸福童年');
        }
            else{
		player.addSkill('nyhzr黑色童年');
		game.log(player,'进入黑色童年'); 
        }
},
                    },
                },
            },			
			"Pifunyhzr自然之灵1jieshao":{
						nobracket:true,				
				 },			
            "nyhzr仙灵妙法":{
                nobracket:true,
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.storage.nyhzr仙灵伙伴>=1;
    },
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                content:function (){
player.storage.nyhzr仙灵伙伴-=1;    
player.syncStorage('nyhzr仙灵伙伴'); 
game.log(player,'的妖精皮皮-1');            
target.useSkill('nyhzr仙灵伙伴');                       
target.addSkill('nyhzr仙灵妙法1'); 
game.log(target,'被',player,'的妖精皮皮治愈');    
},
                ai:{
                    order:2,
                    result:{
                        player:function (player){
            return  player.storage.nyhzr仙灵伙伴-1;
             },
                        target:function (player,target){
return ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr仙灵妙法1":{
                marktext:"愈",
                intro:{
                    content:function (storage){
return '每回合恢复一点体力。'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.nyhzr仙灵伙伴1=0;
}
},
                mark:true,
                group:["nyhzr仙灵妙法1_1111","nyhzr仙灵妙法1_2222","nyhzr仙灵妙法1_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.nyhzr仙灵伙伴<=1;
},
                        content:function (){
player.removeSkill('nyhzr仙灵伙伴');
player.removeSkill('nyhzr仙灵妙法1');                
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.nyhzr仙灵伙伴-=1;
player.syncStorage('yhzr仙灵伙伴');
game.log(player,'妖精皮皮-1');        
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.recover();
},
                    },
                },
            },			
			"nyhzr炼狱魂印":{
						nobracket:true,
                group:["nyhzr炼狱魂印_1111","nyhzr炼狱魂印_2222"],
                subSkill:{
                    1111:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        direct:true,
                        filter:function (event,player){
            return game.players.length>3;
        },
                        content:function (){
            "step 0"
            player.chooseTarget(function(card,player,target){
                return target!=player;
            }).ai=function(){
return -ai.get.attitude(player,target);
            }
            "step 1"
            if(result.bool){
                player.logSkill('nyhzr炼狱魂印_1111',result.targets);
                result.targets[0].goMad();
            }
        },
                    },
                    2222:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
            var players=game.players.concat(game.dead);
            for(var i=0;i<players.length;i++){
                if(players[i].isMad()){
                    players[i].unMad();
                }
            }
        },
                    },
                },						
				 },			
			"nyhzr强袭":{
						nobracket:true,				
				 },				
			"nyhzr妖斧":{
						nobracket:true,				
				 },	
			"Pifunyhzr时空英雄1jieshao":{
						nobracket:true,				
				 },					 
				 "Pifunyhzr时空英雄2jieshao":{
						nobracket:true,				
				 },				
			"_Pifunyhzr时空英雄":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr断裂时空')&&player.hasSkill('nyhzr超时空战斧')&&player.hasSkill('nyhzr时空道标')&&player.hasSkill('nyhzr逝时若光')&&player.storage._Pifunyhzr时空英雄==undefined;
                },			
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=500||lib.config.Pifunyhzr时空英雄1==true){
	list.push('Pifunyhzr时空英雄1')	
	}	
	if (lib.config.coin>=990||lib.config.Pifunyhzr时空英雄2==true){
	list.push('Pifunyhzr时空英雄2')	
	}	
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr时空英雄1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr时空英雄1!=true){
		game.changeCoin(-500);
		game.saveConfig('Pifunyhzr时空英雄1',true);
		player.addSkill('nyhzr道标');
		player.addSkill('nyhzr回溯');
		game.say1('购买成功');
	}else{
		player.addSkill('nyhzr道标');
		player.addSkill('nyhzr回溯');
		}
	}else{
		player.addSkill('nyhzr道标');
		player.addSkill('nyhzr回溯');
		}
	}
	if (result.buttons[0].link=='Pifunyhzr时空英雄2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr时空英雄2!=true){
		game.changeCoin(-1200);
		game.saveConfig('Pifunyhzr时空英雄2',true);
		player.addSkill('nyhzr妖斧');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr妖斧');}
	}else{player.addSkill('nyhzr妖斧');}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('snyhzr时空猎人',result.buttons[0].link);
	player.storage._Pifunyhzr时空英雄=0;
    }else{
	player.storage._Pifunyhzr时空英雄=0;		
    }
},
            },			
            "nyhzr道标":{
				nobracket:true,		
                trigger:{
                    player:"phaseBefore",
                },
				forced:true,
                content:function (){
for(var i=0;i<game.players.length;i++){
if (game.players[i]!=player){		
game.players[i].markSkill('nyhzr道标');		
game.players[i].markSkill('nyhzr道标1');
game.players[i].storage.nyhzr道标1=game.players[i].get('h');
game.players[i].lose(game.players[i].get('h'));		
game.players[i].gain(game.players[i].storage.nyhzr道标);
game.players[i].storage.nyhzr道标=game.players[i].storage.nyhzr道标1;
game.players[i].storage.nyhzr道标1=[];	
}
}				
},
                intro:{
                    content:"cardCount",
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.nyhzr道标=[];
}
},
            },	            		
"nyhzr回溯":{
nobracket:true,		
enable:"phaseUse",
usable:1,
content:function (){
for(var i=0;i<game.players.length;i++){
if (game.players[i]!=player){	
game.players[i].markSkill('nyhzr道标1');
game.players[i].storage.nyhzr道标1=game.players[i].get('h');
game.players[i].lose(game.players[i].get('h'));		
game.players[i].gain(game.players[i].storage.nyhzr道标);
game.players[i].storage.nyhzr道标=game.players[i].storage.nyhzr道标1;
game.players[i].storage.nyhzr道标1=[];
}
}
},
                    },				
			"Pifunyhzr魔龙化身3jieshao":{
						nobracket:true,				
				 },				
			"Pifunyhzr魔龙化身1jieshao":{
						nobracket:true,				
				 },				
			"nyhzr星河雷爆":{
						nobracket:true,	
					enable:"phaseUse",
                filter:function (event,player){
        return player.storage.nyhzr龙人血脉>=30;
    },
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player){	
if (player.storage.nyhzr龙人血脉>=200&&player.storage.nyhzr龙人血脉<400){
game.players[i].damage();	
player.storage.nyhzr龙人血脉-=200;
player.syncStorage('nyhzr龙人血脉');	
}
if (player.storage.nyhzr龙人血脉>=400){
game.players[i].damage(2);
player.storage.nyhzr龙人血脉-=400; 
player.syncStorage('nyhzr龙人血脉');  					
}
game.players[i].turnOver();	
}
}	
player.loseHp(player.maxHp);
player.removeSkill('nyhzr星河雷爆');
}	
				 },			
			"Pifunyhzr魔龙化身2jieshao":{
						nobracket:true,				
				 },			
            "nyhzr暗翼锋芒":{
				nobracket:true,	
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        return event.card&&get.color(event.card)=='black'&&
        !event.player.isTurnedOver()&&event.player.isAlive();
    },
                content:function (){
        trigger.player.turnOver();
        player.loseHp();
    },
                ai:{
                    threaten:1.5,
                    effect:{
                        player:function (card,player,target,current){
                if(get.color(card)=='black'&&get.tag(card,'damage')){
                    return [1,0,1,-2];
                }
            },
                    },
                },
            },		
			"nhyzr皎月之力1":{
						nobracket:true,				
		   mod:{
                    cardUsable:function (card){
            if(get.info(card)&&get.info(card).forceUsable) return;
            return Infinity;
        },
                    targetInRange:function (){
            return true;
        },
		},
        trigger:{
        player:"phaseEnd",
        },
		forced:true,
		content:function (){
			player.addSkill('nhyzr皎月之力');
			player.removeSkill('nhyzr皎月之力1');
                }
				 },				   		
			"nhyzr皎月之力":{
				nobracket:true,
                        trigger:{
                            player:"phaseEnd",
                        },
                        content:function (){
                       player.loseHp();
					   player.phase();
					   player.addSkill('nhyzr皎月之力1');
					   player.removeSkill('nhyzr皎月之力');
                       },
                check:function (event,player){      
if(player.num('h')<2) return false;
if(player.hp<2) return false;
return true;
},					   
			},
					"Pifunyhzr射日英雄4jieshao":{
						nobracket:true,
		            },
			"nyhzr银箭":{
						nobracket:true,
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event){
                       return event.nature=='thunder';
                       },
                        content:function (){
                       player.addSkill(trigger.player.skills.randomGet());
                       },				
			},
					"Pifunyhzr射日英雄3jieshao":{
						nobracket:true,
		            },				
            "nyhzr强弩":{
						nobracket:true,
                group:["nyhzr强弩_1","nyhzr强弩_2"],
                subSkill:{
                    1:{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
                        return player.hp>2;
                        },
                        forced:true,
                        content:function (){
                        trigger.num++;
                        },
                    },
                    2:{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                        return player.hp>2;
                        },
                        content:function (){
                        trigger.num++;
                        },
                    },
                },
            },			
					"Pifunyhzr射日英雄1jieshao":{
						nobracket:true,
		            },	
"nyhzr强化":{
	nobracket:true,
    group:["nyhzr强化_攻击等级获得","nyhzr强化_速度等级获得","nyhzr强化_闪避等级获得","nyhzr强化_暴击等级获得","nyhzr强化_防御等级获得","nyhzr强化_攻击等级","nyhzr强化_速度等级","nyhzr强化_闪避等级","nyhzr强化_暴击等级","nyhzr强化_防御等级"],
    subSkill:{
            "攻击等级获得":{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr强化_攻击等级获得==undefined) player.storage.nyhzr强化_攻击等级获得=0;
player.markSkill('nyhzr强化_攻击等级获得'); 							           
},
                marktext:"攻",
                intro:{
                    content:function (storage){
return '<li>当前攻击等级为：'+storage+'级'+'<li>攻击二级=造成伤害+1'+'<li>攻击等级最高6级'+'<li>造成伤害后攻击等级+1'
},
                },
                    },		
            "速度等级获得":{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr强化_速度等级获得==undefined) player.storage.nyhzr强化_速度等级获得=0;
player.markSkill('nyhzr强化_速度等级获得'); 							           
},
                marktext:"速",
                intro:{
                    content:function (storage){
return '<li>当前速度等级为：'+storage+'级'+'<li>速度一级=回合末1%进行一个额外的回合'+'<li>速度等级最高6级'+'<li>回合末速度等级+1'
},
                },
                    },		
            "闪避等级获得":{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr强化_闪避等级获得==undefined) player.storage.nyhzr强化_闪避等级获得=0;
player.markSkill('nyhzr强化_闪避等级获得'); 							           
},
                marktext:"闪",
                intro:{
                    content:function (storage){
return '<li>当前闪避等级为：'+storage+'级'+'<li>闪避一级=受到伤害1%闪避'+'<li>闪避等级最高6级'+'<li>受到伤害闪避等级+1'
},
                },
                    },		
            "暴击等级获得":{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr强化_暴击等级获得==undefined) player.storage.nyhzr强化_暴击等级获得=0;
player.markSkill('nyhzr强化_暴击等级获得'); 							           
},
                marktext:"暴",
                intro:{
                    content:function (storage){
return '<li>当前暴击等级为：'+storage+'级'+'<li>暴击一级=造成伤害后1%+1'+'<li>暴击等级最高6级'+'<li>造成伤害暴击等级+1'
},
                },
                    },		
            "防御等级获得":{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr强化_防御等级获得==undefined) player.storage.nyhzr强化_防御等级获得=0;
player.markSkill('nyhzr强化_防御等级获得'); 							           
},
                marktext:"防",
                intro:{
                    content:function (storage){
return '<li>当前防御等级为：'+storage+'级'+'<li>防御五级=受到伤害-1'+'<li>防御等级最高10级'+'<li>受到伤害防御等级+1'
},
                },
                    },		
            "攻击等级":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
if (player.storage.nyhzr强化_暴击等级获得<=6){		
player.storage.nyhzr强化_暴击等级获得+=1; 
player.syncStorage('nyhzr强化_暴击等级获得');            
}							
if (player.storage.nyhzr强化_攻击等级获得>=2&&player.storage.nyhzr强化_攻击等级获得<4){							
trigger.num+=1;
}
if (player.storage.nyhzr强化_攻击等级获得>=4&&player.storage.nyhzr强化_攻击等级获得<6){							
trigger.num+=2;
}
if (player.storage.nyhzr强化_攻击等级获得>=6){							
trigger.num+=3;
}
if (player.storage.nyhzr强化_攻击等级获得<=6){		
player.storage.nyhzr强化_攻击等级获得+=1; 
player.syncStorage('nyhzr强化_攻击等级获得');            
}
},
                    },
            "速度等级":{
                        trigger:{
                            player:"phaseAfter",
                        },
                        forced:true,
                        content:function (){
if (player.storage.nyhzr强化_速度等级获得<=6){		
player.storage.nyhzr强化_速度等级获得+=1; 
player.syncStorage('nyhzr强化_速度等级获得');            
}
if(Math.random()<=player.storage.nyhzr强化_速度等级获得*0.01){
player.phase();
game.log(player,'的速度快，进行一个额外的回合');                 
}
},
                    },
            "闪避等级":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>player.storage.nyhzr强化_闪避等级获得*0.01) return false;
return true;
},
                        forced:true,
                        content:function (){					
trigger.untrigger();
trigger.finish();
game.log(player,'闪避了对方的攻击');                
},
                    },
            "暴击等级":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
if(Math.random()>player.storage.nyhzr强化_暴击等级获得*0.1) return false;
return true;
},
                        forced:true,
                        content:function (){
trigger.num+=1;
game.log(player,'暴击了');                 
},
                    },
            "防御等级":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
if (player.storage.nyhzr强化_闪避等级获得<=6){		
player.storage.nyhzr强化_闪避等级获得+=1; 
player.syncStorage('nyhzr强化_闪避等级获得');            
}		
if (player.storage.nyhzr强化_防御等级获得<=6){		
player.storage.nyhzr强化_防御等级获得+=1; 
player.syncStorage('nyhzr强化_防御等级获得');            
}
if (player.storage.nyhzr强化_防御等级获得>=5&&player.storage.nyhzr强化_防御等级获得<10){							
trigger.num-=1;
}
if (player.storage.nyhzr强化_防御等级获得>=10){							
trigger.num-=2;
}									             
},
                    },
    },
},			
		            "Pifunyhzr射日英雄2jieshao":{
						nobracket:true,
		            },	
		            "nyhzr黄金羽翼":{
						nobracket:true,
						group:["nyhzr黄金羽翼_1","nyhzr黄金羽翼_2"],
 						subSkill:{
						1:{
                 trigger:{
                    global:"damageBefore",
                },
                forced:true,
                filter:function (event,player){
        return event.source!=player&&event.player!=player;
    },
                content:function (){
        trigger.source=player;
    },
						},
						2:{
trigger:{source:'damageEnd'},
forced:true,
content:function (){
game.swapSeat(trigger.player,player);
}
						},
						}
		            },				
		    "Pifunyhzr射日英雄5jieshao":{
						nobracket:true,
            },				
		    "Pifunyhzr吸血鬼伯爵2jieshao":{
						nobracket:true,
            },				
			"nyhzr安魂":{
				nobracket:true,
				trigger:{
                player:["useCard","respondAfter"],
                },
                direct:true,
                unique:true,
                usable:1,
                filter:function (event){
        return get.color(event.card)=='black';
    },
                content:function (){
        "step 0"
        game.delay(0.5);
        player.chooseTarget('是否发动【安魂】？',function(card,player,target){
            return player!=target;
        }).ai=function(target){
return -ai.get.attitude(player,target);
        }
        "step 1"
        if(result.bool){
            trigger.untrigger();
            trigger.finish();
            result.targets[0].loseHp();
			player.useSkill('nyhzr嗜血')
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
			"nyhzr血月":{
						nobracket:true,
            },	
		    "Pifunyhzr吸血鬼伯爵3jieshao":{
						nobracket:true,
            },				
			"_Pifunyhzr吸血鬼伯爵3jiesuo":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
filter:function (event,player){
return player.hasSkill("nyhzr血祭启示录")&&player==game.me&&lib.config.Pifunyhzr吸血鬼伯爵3!=true;
},				
                content:function (){     
if(player.storage._Pifunyhzr吸血鬼伯爵3jiesuo==undefined) player.storage._Pifunyhzr吸血鬼伯爵3jiesuo=0;
player.markSkill('_Pifunyhzr吸血鬼伯爵3jiesuo');
player.storage._Pifunyhzr吸血鬼伯爵3jiesuo+=1;    
},				
            },
			"_Pifunyhzr吸血鬼伯爵3jiesuo2":{
				trigger:{
				player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
				return player.hasSkill("nyhzr血祭启示录")&&player==game.me&&lib.config.Pifunyhzr吸血鬼伯爵3!=true&&player.storage._Pifunyhzr吸血鬼伯爵3jiesuo>=10;
				},	
				content:function (){	
		game.saveConfig('Pifunyhzr吸血鬼伯爵3',true);
		game.say1('角色解锁皮肤：血月会长');
				}
			},			
			"Pifunyhzr吸血鬼伯爵1jieshao":{
						nobracket:true,
            },
			"nyhzr不朽":{
	            nobracket:true,
                trigger:{
                    player:"dyingBefore",
                },
				filter:function (event,player){
                return game.players.length==2;
                },
                forced:true,
                content:function (){
player.gainMaxHp(2);
player.recover(player.maxHp-player.hp);
player.recover(2);
player.removeSkill('nyhzr永生');
player.removeSkill('nyhzr不朽');
}, 
            },			
			"nyhzr永生":{
                mod:{
                    maxHandcard:function (player,num){
            return 3;
        },
                },			
				mode:["identity","boss","guozhan","versus"],
	            nobracket:true,
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.nyhzr永生=1;
game.players[i].addSkill('nyhzr永生1');
}
        },
            },			
 			"nyhzr惧光":{
	nobracket:true,
    trigger:{
        player:"damageBegin",
    },
    filter:function (event){
        if(event.nature=='fire') return true;
    },
    forced:true,
    content:function (){
game.removePlayer(player);
game.log(player,'被移出游戏了');
if (game.players.length==1){
if (player==game.me){
game.over(false);     
}
else{
game.over(true);	
}
};    
    },
    ai:{
        effect:{
            target:function (card,player,target,current){
                if(card.name=='sha'){
                    if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
                }
                if(get.tag(card,'fireDamage')&&current<0) return 2;
            },
        },
    },
            },           		
			            "nyhzr永生1":{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
for(var i=0;i<game.dead.length;i++){
if(game.dead[i].hasSkill('nyhzr永生')){
game.dead[i].logSkill('nyhzr永生')
game.dead[i].revive(game.dead[i].maxHp);    
}
}
for(var j=0;j<game.players.length;j++){
delete game.players[j].storage.nyhzr永生;
game.players[j].removeSkill('nyhzr永生1');
}
}
},
		            "nyhzr灭世":{
					nobracket:true,
					trigger:{
                    player:"dyingBefore",
                },
                unique:true,
                content:function (){
        "step 0"
        event.players=get.players(player);
        event.players.remove(player);
        "step 1"
        if(event.players.length){
            event.players.shift().damage();
            event.redo();
        }
    },
            },				
		            "Pifunyhzr暴君3jieshao":{
						nobracket:true,
            },							
		            "nyhzr魔影屠戮":{
                nobracket:true,
                group:["nyhzr魔影屠戮_gainMark","nyhzr魔影屠戮_Triggera"],
                subSkill:{
                    gainMark:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr魔影屠戮_gainMark==undefined) player.storage.nyhzr魔影屠戮_gainMark=0;
player.markSkill('nyhzr魔影屠戮_gainMark'); 
player.storage.nyhzr魔影屠戮_gainMark+=1;    
player.syncStorage('nyhzr魔影屠戮_gainMark');                    
},
                    },
                    Triggera:{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
return player.storage.nyhzr魔影屠戮_gainMark>=3;
},
                        forced:true,
                        content:function (){
player.storage.nyhzr魔影屠戮_gainMark=0;    
player.syncStorage('nyhzr魔影屠戮_gainMark');                     
player.recover();
},
                    },
                },
            },						
		            "Pifunyhzr暴君1jieshao":{
						nobracket:true,
            },				
		            "Pifunyhzr暴君2jieshao":{
						nobracket:true,
            },			
		            "Pifunyhzr暴君4jieshao":{
						nobracket:true,
            },				
		            "nyhzr魔君":{
						nobracket:true,						
            },			
		            "Pifunyhzr魅魔公主1jieshao":{
						nobracket:true,
            },		
		            "nyhzr幽梦魔灵Skill":{
nobracket:true,						
trigger:{
player:"phaseEnd",
},
filter:function (event,player){
return Math.random()<=0.1;
},
forced:true,
content:function (){
player.recover();
}
            },					
		            "Pifunyhzr魅魔公主2jieshao":{
						nobracket:true,
            },				
		            "nyhzr祈愿周期":{
                nobracket:true,						
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["rnyhzr猎物锁定","nyhzr闪电活化","nyhzr光明圣礼","nyhzr嗜血","nyhzr雷霆之环","nyhzr灾祸匣","nyhzr天之罚","nyhzr燎火之箭","nyhzr女皇神威","nyhzr逐阳","nyhzr穿云箭","nyhzr血虐暴风"],
                content:function (){
		if(player.storage.nyhzr祈愿周期==undefined) player.storage.nyhzr祈愿周期=0;
		player.markSkill('nyhzr祈愿周期');
		player.storage.nyhzr祈愿周期+=1;    
		player.syncStorage('nyhzr祈愿周期'); 
		game.log(player,'的标记【祈愿周期】+1');
        player.removeAdditionalSkill('nyhzr祈愿周期');
        var list=[];
        if(player.storage.nyhzr祈愿周期==1){
            list.push('rnyhzr猎物锁定');
        }
        if(player.storage.nyhzr祈愿周期==2){
            list.push('nyhzr闪电活化');
        }
        if(player.storage.nyhzr祈愿周期==3){
            list.push('nyhzr光明圣礼');
        }
        if(player.storage.nyhzr祈愿周期==4){
            list.push('nyhzr嗜血');
        }
        if(player.storage.nyhzr祈愿周期==5){
            list.push('nyhzr雷霆之环');
        }
        if(player.storage.nyhzr祈愿周期==6){
            list.push('nyhzr灾祸匣');
        }
        if(player.storage.nyhzr祈愿周期==7){
            list.push('nyhzr天之罚');
        }
        if(player.storage.nyhzr祈愿周期==8){
            list.push('nyhzr燎火之箭');
        }
        if(player.storage.nyhzr祈愿周期==9){
            list.push('nyhzr女皇神威');
        }
        if(player.storage.nyhzr祈愿周期==10){
            list.push('nyhzr逐阳');
        }
        if(player.storage.nyhzr祈愿周期==11){
            list.push('nyhzr穿云箭');
        }
        if(player.storage.nyhzr祈愿周期==12){
            list.push('nyhzr血虐暴风');
        }
        if(player.storage.nyhzr祈愿周期>=13){
            player.storage.nyhzr祈愿周期=0;
        }
        if(list.length){
            player.addAdditionalSkill('nyhzr祈愿周期',list);
        }
    },
	                intro:{
                    content:function (storage){
        if(storage==1) return '当前技能：猎物锁定';
        if(storage==2) return '当前技能：闪电活化';
        if(storage==3) return '当前技能：光明圣礼';      
        if(storage==4) return '当前技能：嗜血';        
        if(storage==5) return '当前技能：雷霆之环';        
        if(storage==6) return '当前技能：灾祸匣';        
        if(storage==7) return '当前技能：天之罚';       
        if(storage==8) return '当前技能：燎火之箭';       
        if(storage==9) return '当前技能：女皇神威';       
        if(storage==10) return '当前技能：逐阳';        
        if(storage==11) return '当前技能：穿云箭';        
        if(storage==12) return '当前技能：血虐暴风';        						
},
                },
            },			
		            "_Pifunyhzr魅魔公主":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr恐惧镰刀')&&player.hasSkill('nyhzr恐惧结界')&&player.hasSkill('nyhzr恶魔冲锋')&&player.hasSkill('nyhzr镰刀挥舞')&&player.storage._Pifunyhzr魅魔公主==undefined;
                },
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=250||lib.config.Pifunyhzr魅魔公主1==true){
	list.push('Pifunyhzr魅魔公主1')	
	}	
	if (lib.config.coin>=800||lib.config.Pifunyhzr魅魔公主2==true){
	list.push('Pifunyhzr魅魔公主2')	
	}
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr魅魔公主1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr魅魔公主1!=true){
		game.changeCoin(-250);
		game.saveConfig('Pifunyhzr魅魔公主1',true);
		player.addSkill('nyhzr幽梦魔灵Skill');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr幽梦魔灵Skill');}
	}else{player.addSkill('nyhzr幽梦魔灵Skill');}
	}
	if (result.buttons[0].link=='Pifunyhzr魅魔公主2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr魅魔公主2!=true){
		game.changeCoin(-800);
		game.saveConfig('Pifunyhzr魅魔公主2',true);
		player.addSkill('nyhzr祈愿周期');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr祈愿周期');}
	}else{player.addSkill('nyhzr祈愿周期');}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('lnyhzr莉莉姆.提露埃拉',result.buttons[0].link);
	player.storage._Pifunyhzr魅魔公主=0;
    }else{
	player.storage._Pifunyhzr魅魔公主=0;
    }
},
            },
		            "_Pifunyhzr暴君":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr灾祸匣')&&player.hasSkill('nyhzr闪电活化')&&player.hasSkill('nyhzr雷霆之环')&&player.hasSkill('nyhzr毁灭指针')&&player.storage._Pifunyhzr暴君==undefined;
                },
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=250||lib.config.Pifunyhzr暴君1==true){
	list.push('Pifunyhzr暴君1')	
	}	
	if (lib.config.coin>=990||lib.config.Pifunyhzr暴君2==true){
	list.push('Pifunyhzr暴君2')	
	}	
	if (lib.config.coin>=800||lib.config.Pifunyhzr暴君3==true){
	list.push('Pifunyhzr暴君3')	
	}	
	if (lib.config.coin>=990||lib.config.Pifunyhzr暴君4==true){
	list.push('Pifunyhzr暴君4')	
	}	
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr暴君1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr暴君1!=true){
		game.changeCoin(-250);
		game.saveConfig('Pifunyhzr暴君1',true);
		player.addSkill('nyhzr魔影屠戮');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr魔影屠戮');}
	}else{player.addSkill('nyhzr魔影屠戮');}
	}
	if (result.buttons[0].link=='Pifunyhzr暴君2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr暴君2!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr暴君2',true);
		player.addSkill('nyhzr炼狱魂印');
		player.gainMaxHp();
		player.recover();
		game.say1('购买成功');
	}else{
		player.addSkill('nyhzr炼狱魂印');
		player.gainMaxHp();
		player.recover();
		}
	}else{
		player.addSkill('nyhzr炼狱魂印');
		player.gainMaxHp();
		player.recover();
		}
	}
	if (result.buttons[0].link=='Pifunyhzr暴君3'){
		if (player==game.me){
		if (lib.config.Pifunyhzr暴君3!=true){
		game.changeCoin(-800);
		game.saveConfig('Pifunyhzr暴君3',true);
		player.addSkill('nyhzr灭世');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr灭世');}
	}else{player.addSkill('nyhzr灭世');}
	}
	if (result.buttons[0].link=='Pifunyhzr暴君4'){
		if (player==game.me){
		if (lib.config.Pifunyhzr暴君4!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr暴君4',true);
		player.addSkill('nyhzr魔君');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr魔君');}
	}else{player.addSkill('nyhzr魔君');}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('snyhzr萨特',result.buttons[0].link);
	player.storage._Pifunyhzr暴君=0;
    }else{
	player.storage._Pifunyhzr暴君=0;
    }
},
            },		            
			"_Pifunyhzr吸血鬼伯爵":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr血虐暴风')&&player.hasSkill('nyhzr嗜血')&&player.hasSkill('nyhzr血蚀之河')&&player.hasSkill('nyhzr血祭启示录')&&player.storage._Pifunyhzr吸血鬼伯爵==undefined;
                },
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=500||lib.config.Pifunyhzr吸血鬼伯爵1==true){
	list.push('Pifunyhzr吸血鬼伯爵1')	
	}	
	if (lib.config.coin>=1200||lib.config.Pifunyhzr吸血鬼伯爵2==true){
	list.push('Pifunyhzr吸血鬼伯爵2')	
	}	
	if (lib.config.Pifunyhzr吸血鬼伯爵3==true){
	list.push('Pifunyhzr吸血鬼伯爵3')	
	}	
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr吸血鬼伯爵1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr吸血鬼伯爵1!=true){
		game.changeCoin(-500);
		game.saveConfig('Pifunyhzr吸血鬼伯爵1',true);
		player.addSkill('nyhzr永生');
		player.addSkill('nyhzr惧光');
		player.addSkill('nyhzr不朽');
		player.gainMaxHp(-2);
		game.say1('购买成功');
	}else{
		player.addSkill('nyhzr永生');
		player.addSkill('nyhzr惧光');
		player.addSkill('nyhzr不朽');
		player.gainMaxHp(-2);
		}
	}else{
		player.addSkill('nyhzr永生');
		player.addSkill('nyhzr惧光');
		player.addSkill('nyhzr不朽');
		player.gainMaxHp(-2);
		}
	}
	if (result.buttons[0].link=='Pifunyhzr吸血鬼伯爵2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr吸血鬼伯爵2!=true){
		game.changeCoin(-1200);
		game.saveConfig('Pifunyhzr吸血鬼伯爵2',true);
		player.addSkill('nyhzr安魂');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr安魂');}
	}else{player.addSkill('nyhzr安魂');}
	}
	if (result.buttons[0].link=='Pifunyhzr吸血鬼伯爵3'){
		player.addSkill('nyhzr血月');
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('dnyhzr德古拉',result.buttons[0].link);
	player.storage._Pifunyhzr吸血鬼伯爵=0;
    }else{
	player.storage._Pifunyhzr吸血鬼伯爵=0;	
    }
},
            },
		            "_Pifunyhzr射日英雄":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr逐阳')&&player.hasSkill('nyhzr穿云箭')&&player.hasSkill('nyhzr燎火之箭')&&player.hasSkill('nyhzr骄阳陨落')&&player.storage._Pifunyhzr射日英雄==undefined;
                },
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=500||lib.config.Pifunyhzr射日英雄1==true){
	list.push('Pifunyhzr射日英雄1')	
	}	
	if (lib.config.coin>=800||lib.config.Pifunyhzr射日英雄2==true){
	list.push('Pifunyhzr射日英雄2')	
	}	
	if (lib.config.coin>=990||lib.config.Pifunyhzr射日英雄3==true){
	list.push('Pifunyhzr射日英雄3')	
	}	
	if (lib.config.jifen>=100||lib.config.Pifunyhzr射日英雄4==true){
	list.push('Pifunyhzr射日英雄4')	
	}		
	if (lib.config.jifen>=50||lib.config.Pifunyhzr射日英雄5==true){
	list.push('Pifunyhzr射日英雄5')	
	}	
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr射日英雄1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr射日英雄1!=true){
		game.changeCoin(-500);
		game.saveConfig('Pifunyhzr射日英雄1',true);
		player.addSkill('nyhzr强弩');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr强弩');}
	}else{player.addSkill('nyhzr强弩');}}
	if (result.buttons[0].link=='Pifunyhzr射日英雄2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr射日英雄2!=true){
		game.changeCoin(-800);
		game.saveConfig('Pifunyhzr射日英雄2',true);
		player.addSkill('nyhzr强化');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr强化');}
	}else{player.addSkill('nyhzr强化');}
	}
	if (result.buttons[0].link=='Pifunyhzr射日英雄3'){
		if (player==game.me){
		if (lib.config.Pifunyhzr射日英雄3!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr射日英雄3',true);
		player.addSkill('nyhzr银箭');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr银箭');}
	}else{player.addSkill('nyhzr银箭');}
	}
	if (result.buttons[0].link=='Pifunyhzr射日英雄4'){
		if (player==game.me){
		if (lib.config.Pifunyhzr射日英雄4!=true){
		game.increaseJifen(-100);
		game.saveConfig('Pifunyhzr射日英雄4',true);
		player.addSkill('nhyzr皎月之力');
		player.gainMaxHp();
		player.recover();
		game.say1('购买成功');
	}else{
		player.addSkill('nhyzr皎月之力');
		player.gainMaxHp();
		player.recover();
		}
	}else{
		player.addSkill('nhyzr皎月之力');
		player.gainMaxHp();
		player.recover();
		}
	}
	if (result.buttons[0].link=='Pifunyhzr射日英雄5'){
		if (player==game.me){
		if (lib.config.Pifunyhzr射日英雄5!=true){
		game.increaseJifen(-50);
		game.saveConfig('Pifunyhzr射日英雄5',true);
		player.addSkill('nyhzr黄金羽翼');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr黄金羽翼');}
	}else{player.addSkill('nyhzr黄金羽翼');}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('hnyhzr后羿',result.buttons[0].link);
	player.storage._Pifunyhzr射日英雄=0;
    }else{
	player.storage._Pifunyhzr射日英雄=0;	
    }
},
            },				
			"_Pifunyhzr魔龙化身":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr龙人血脉')&&player.hasSkill('nyhzr真龙化身')&&player.hasSkill('nyhzr龙之咆哮')&&player.hasSkill('nyhzr龙之吐息')&&player.storage._Pifunyhzr魔龙化身==undefined;
                },	
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=990||lib.config.Pifunyhzr魔龙化身1==true){
	list.push('Pifunyhzr魔龙化身1')	
	}	
	if (lib.config.coin>=1200||lib.config.Pifunyhzr魔龙化身2==true){
	list.push('Pifunyhzr魔龙化身2')	
	}	
	if (lib.config.jifen>=60||lib.config.Pifunyhzr魔龙化身3==true){
	list.push('Pifunyhzr魔龙化身3')	
	}			
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr魔龙化身1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr魔龙化身1!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr魔龙化身1',true);
		player.addSkill('nyhzr强袭');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr强袭');}
	}else{player.addSkill('nyhzr强袭');}
	}
	if (result.buttons[0].link=='Pifunyhzr魔龙化身2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr魔龙化身2!=true){
		game.changeCoin(-1200);
		game.saveConfig('Pifunyhzr魔龙化身2',true);	
		player.storage.nyhzr龙人血脉=125;    
		player.syncStorage('nyhzr龙人血脉');
		player.gainMaxHp(2);
		player.recover(2);
		player.addSkill('nyhzr暗翼');
		game.say1('购买成功');		
	}else{	
		player.storage.nyhzr龙人血脉=125;    
		player.syncStorage('nyhzr龙人血脉');
		player.gainMaxHp(2);
		player.recover(2);
		player.addSkill('nyhzr暗翼');		
		}
	}else{
		player.storage.nyhzr龙人血脉=125;    
		player.syncStorage('nyhzr龙人血脉');
		player.gainMaxHp(2);
		player.recover(2);
		player.addSkill('nyhzr暗翼');		
		}
		}
	if (result.buttons[0].link=='Pifunyhzr魔龙化身3'){
		if (player==game.me){
		if (lib.config.Pifunyhzr魔龙化身3!=true){
		game.increaseJifen(-60);
		game.saveConfig('Pifunyhzr魔龙化身3',true);
		player.addSkill('nyhzr星河雷爆');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr星河雷爆');}
	}else{player.addSkill('nyhzr星河雷爆');}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('lnyhzr龙骑士',result.buttons[0].link);
	player.storage._Pifunyhzr魔龙化身=0;
    }else{
	player.storage._Pifunyhzr魔龙化身=0;	
    }
},
            },
			"_Pifunyhzr自然之灵":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr仙灵伙伴')&&player.hasSkill('nyhzr闪耀之光')&&player.hasSkill('nyhzr迷藏印记')&&player.hasSkill('nyhzr奥妙冲击')&&player.storage._Pifunyhzr自然之灵==undefined;
                },	
                content:function (){        
    'step 0'
    var list=[];
	if (lib.config.coin>=250||lib.config.Pifunyhzr自然之灵1==true){
	list.push('Pifunyhzr自然之灵1')	
	}	
	if (lib.config.coin>=800||lib.config.Pifunyhzr自然之灵2==true){
	list.push('Pifunyhzr自然之灵2')	
	}
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);    
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr自然之灵1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr自然之灵1!=true){
		game.changeCoin(-250);
		game.saveConfig('Pifunyhzr自然之灵1',true);
		player.addSkill('nyhzr仙灵妙法');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr仙灵妙法');}
	}else{player.addSkill('nyhzr仙灵妙法');}}
	if (result.buttons[0].link=='Pifunyhzr自然之灵2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr自然之灵2!=true){
		game.changeCoin(-800);
		game.saveConfig('Pifunyhzr自然之灵2',true);
		player.addSkill('nyhzr回忆童年');
		game.say1('购买成功');
	}else{player.addSkill('nyhzr回忆童年');}
	}else{player.addSkill('nyhzr回忆童年');}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('lnyhzr咯哩咯哩',result.buttons[0].link);
	player.storage._Pifunyhzr自然之灵=0;
    }else{
	player.storage._Pifunyhzr自然之灵=0;		
    }
},
            },			
		},
		
},'技能皮肤');
};
        if (config.UsePifuNew) {
            for (var i in lib.characterPack['mode_extension_技能皮肤']) {
				if (i=='Pifunyhzr第二人类1'||i=='Pifunyhzr第二人类3'||i=='Pifunyhzr魅魔公主1'||i=='Pifunyhzr魅魔公主2'||i=='Pifunyhzr暴君1'||i=='Pifunyhzr暴君2'||i=='Pifunyhzr暴君3'||i=='Pifunyhzr吸血鬼伯爵1'||i=='Pifunyhzr吸血鬼伯爵3'||i=='Pifunyhzr射日英雄1'||i=='Pifunyhzr射日英雄2'||i=='Pifunyhzr射日英雄4'||i=='Pifunyhzr射日英雄5'||i=='Pifunyhzr魔龙化身1'||i=='Pifunyhzr魔龙化身2'||i=='Pifunyhzr魔龙化身3'||i=='Pifunyhzr时空英雄1'||i=='Pifunyhzr时空英雄2'||i=='Pifunyhzr自然之灵1'||i=='Pifunyhzr自然之灵2'||i=='Pifunyhzr幻卡魔女1'||i=='Pifunyhzr幻卡魔女2'||i=='Pifunyhzr幻卡魔女3'||i=='Pifunyhzr幻卡魔女4')
                for (var j = 0; j < lib.character[i][4].length; j++) {
                    if (lib.character[i][4][j].indexOf('ext:') == 0) {
                        lib.character[i][4][j] = 'ext:新英魂之刃/New' + i + '.jpg'; break;
                    }
                }
            }
        };	
//var 武将=['性别','势力',1,["技能"],['db:extension-扩展名:武将.jpg']];
//lib.character.武将=武将;
//lib.characterPack.standard.武将=lib.character.武将;	
        if (lib.config.Pifunyhzr魅魔公主1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr魅魔公主1'){		
			lib.character[i][2]='已购买';
        }
		}
		}; 		        
		if (lib.config.Pifunyhzr魅魔公主2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr魅魔公主2'){		
			lib.character[i][2]='已购买';
        }
		}
        }; 		 		        
		if (lib.config.Pifunyhzr暴君1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr暴君1'){		
			lib.character[i][2]='已购买';
        }
		}
        }; 		 		        
		if (lib.config.Pifunyhzr暴君2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr暴君2'){		
			lib.character[i][2]='已购买';
        }
		}
        }; 		 		        
		if (lib.config.Pifunyhzr暴君3) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr暴君3'){		
			lib.character[i][2]='已购买';
        }
		}
        }; 		 		        
		if (lib.config.Pifunyhzr暴君4) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr暴君4'){		
			lib.character[i][2]='已购买';
        }
		}
        }; 
		if (lib.config.Pifunyhzr吸血鬼伯爵1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr吸血鬼伯爵1'){		
			lib.character[i][2]='已购买';
        }
		}
        };		 
		if (lib.config.Pifunyhzr吸血鬼伯爵2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr吸血鬼伯爵2'){		
			lib.character[i][2]='已购买';
        }
		}
        };		 
		if (lib.config.Pifunyhzr吸血鬼伯爵3) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr吸血鬼伯爵3'){		
			lib.character[i][2]='已解锁';
        }
		}
        };
		if (lib.config.Pifunyhzr射日英雄1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr射日英雄1'){		
			lib.character[i][2]='已购买';
        }
		}
        };		
		if (lib.config.Pifunyhzr射日英雄2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr射日英雄2'){		
			lib.character[i][2]='已购买';
        }
		}
        };		
		if (lib.config.Pifunyhzr射日英雄3) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr射日英雄3'){		
			lib.character[i][2]='已购买';
        }
		}
        };		
		if (lib.config.Pifunyhzr射日英雄4) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr射日英雄4'){		
			lib.character[i][2]='已购买';
        }
		}
        };		
		if (lib.config.Pifunyhzr射日英雄5) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr射日英雄5'){		
			lib.character[i][2]='已购买';
        }
		}
        };		
		if (lib.config.Pifunyhzr魔龙化身1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr魔龙化身1'||i=='nyhzr强袭龙魂龙'){		
			lib.character[i][2]='已购买';
        }
		}
        };				
		if (lib.config.Pifunyhzr魔龙化身2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr魔龙化身2'||i=='nyhzr暗翼骨龙龙'){		
			lib.character[i][2]='已购买';
        }
		}
        };				
		if (lib.config.Pifunyhzr魔龙化身3) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr魔龙化身3'||i=='nyhzr星河雷爆龙'){		
			lib.character[i][2]='已购买';
        }
		}
        };						
		if (lib.config.Pifunyhzr时空英雄1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr时空英雄1'){		
			lib.character[i][2]='已购买';
        }
		}
        };						
		if (lib.config.Pifunyhzr时空英雄2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr时空英雄2'){		
			lib.character[i][2]='已购买';
        }
		}
        };								
		if (lib.config.Pifunyhzr自然之灵1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr自然之灵1'){		
			lib.character[i][2]='已购买';
        }
		}
        };									
		if (lib.config.Pifunyhzr自然之灵2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr自然之灵2'){		
			lib.character[i][2]='已购买';
        }
		}
        };											
		if (lib.config.Pifunyhzr幻卡魔女1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr幻卡魔女1'){		
			lib.character[i][2]='已购买';
        }
		}
        };											
		if (lib.config.Pifunyhzr幻卡魔女2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr幻卡魔女2'){		
			lib.character[i][2]='已解锁';
        }
		}
        };											
		if (lib.config.Pifunyhzr幻卡魔女3) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr幻卡魔女3'){		
			lib.character[i][2]='已购买';
        }
		}
        };											
		if (lib.config.Pifunyhzr幻卡魔女4) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr幻卡魔女4'){		
			lib.character[i][2]='已购买';
        }
		}
        };
		if (lib.config.Pifunyhzr幻卡魔女5) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr幻卡魔女5'){		
			lib.character[i][2]='已购买';
        }
		}
        };	
		if (lib.config.Pifunyhzr第二人类1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr第二人类1'){		
			lib.character[i][2]='已购买';
        }
		}
        };	
		if (lib.config.Pifunyhzr第二人类2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr第二人类2'){		
			lib.character[i][2]='已购买';
        }
		}
        };	
		if (lib.config.Pifunyhzr第二人类3) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr第二人类3'){		
			lib.character[i][2]='已购买';
        }
		}
        };	
		if (lib.config.Pifunyhzr狼蛛1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr狼蛛1'){		
			lib.character[i][2]='已购买';
        }
		}
        };			
		},precontent:function (nyhzrlj){
        if(nyhzrlj.enable){		
            game.import('character',function(){
                var nyhzrlj = {
                    name: 'nyhzrlj',
                    connect:true,				
                    character:{
            "Newlnyhzr咯哩咯哩":["female","zhi",3,["nyhzr仙灵伙伴lj","nyhzr迷藏印记lj"],["des:<li>大多数生灵都逃不过时光的流逝，然而咯哩咯哩却不属于此类。作为自然万物之精华，咯哩咯哩拥有着一颗干净纯洁的心、永远不会长大的外形，以及与花草百兽沟通的奇妙能力，而她的名字则来源于她的口头禅：咯哩。<li>在大自然中独自生活许多年后，出于对人类世界的向往和对新朋友的渴望，咯哩咯哩带着她的小伙伴——妖精皮皮，一起来到了人类的城邦。咯哩咯哩带领孩子们玩耍，并用魔法暂时将桌椅变成花朵和动物来增添乐趣。但人们似乎并不领情——出于对魔法和力量的恐惧，大人们很快便让孩子们疏远了咯哩咯哩。<li>伤心的咯哩咯哩离开了这所城邦，重新寻找一个善良美好的新世界。途经决战之谷时，咯哩咯哩和皮皮遇到凶兽饕餮，它正准备吞噬最近的人类城邦。尽管遭到人类的疏远，但为了可爱的孩子们不受伤害，咯哩咯哩毅然与饕餮展开了战斗。然而饕餮实力强大，咯哩咯哩和皮皮陷入了险境。危急关头，一位来自异世界的男人“拳”突然出现，在他的帮助，饕餮终于败退离去。<li>咯哩咯哩对这个胸前有着北斗七星状伤疤的男人产生了浓厚的兴趣。面对这个好奇又天真的小家伙一个又一个的疑问，拳将自己的经历和扫除一切邪恶不公的决心告诉了她。听完拳的叙述，咯哩咯哩从他的身上感受到了巨大的勇气和信念的力量，她意识到，与其寻找一个虚无缥缈的新世界，不如从现在开始，创造并且守护现有的一切。于是，她决定成为拳的伙伴，和他一起踏上未知的冒险之路！<li>我才不会害怕呢！咯哩！<li>——咯哩咯哩"]],
            "Newlnyhzr莉莉姆.提露埃拉":["female","li",3,["nyhzr恐惧镰刀lj","nyhzr恐惧结界lj"],["des:<li>恢弘的钟声和吟唱笼罩着整座城市，人们云集在教堂之中，进行着庄严而神圣的宗教仪式。而在教堂的穹顶，象征着神权的巨大十字架上，却坐着一个美丽而妖娆的身影，泛着宝石光芒的瞳仁和背后的翅膀昭示着她令人畏惧的身份——夜之魔女莉莉丝和魔王撒旦的女儿，地狱的公主——莉莉姆.提露埃拉。 <li>同她的姐妹们一样，莉莉姆. 提露埃拉身上永远散发着青春的活力，外表充满魅力却又让人心生畏惧，由血统赋予的强大魔力能让她在地狱和人间穿梭自如，并不断出现在人们的噩梦之中。但和她那些只顾享乐的姐妹们不同，莉莉姆.提露埃拉更加危险且具有野心：她想把所有的人类土地都变成充满滋生魔物的土壤。 <li>就在提露埃拉不断实施着她的邪恶计划之时，其他莉莉姆以及她们手下的魔物们纷纷遭到了猎杀，而所有的线索都指向了一个人：猎魔人露娜。<li>这场关于猎杀的游戏激起了提露埃拉心中的邪恶欲望，她追随着猎魔人的踪迹来到人类的城邦。看着脚下的城市和熙攘的人群，莉莉姆.提露埃拉站起身来，灵活地跳到十字架顶端，朝着面前的城市张开双手，像是要把整座城市收入怀中。<li>“这里，马上就要完全属于我了……到时候要做些什么呢?想想就……”<li>亢奋的情绪突然被她自己打断，注视着整座城市的瞳孔突然将视线锁定在一间普通到再也不能普通的屋顶上，像是发现了宝藏一样，莉莉姆. 提露埃拉眯起了眼睛，嘴角露出了摄人的微笑。<li>“找到你了，要开始享受游戏的乐趣了。”"]],
		    "Newlnyhzr龙骑士":["male","li",4,["nyhzr龙人血脉lj"],["des:<li>边境的小酒馆里，老板略带神秘的说起这样一个传说：<li>好心的领主老爷和他的养子生活在一座美丽的庄园里。<li>然而，魔龙化身的养子本性嗜血又残暴。他魔性大发之后，重伤领主，焚毁庄园。据说他身覆鳞片，口中喷火，甚至还会吃人！ <li>——那段经历对流浪骑士来说就像噩梦一般，如果真是场梦就好了……<li>那一天，从血脉中涌出的能量仿佛要将身体撕成两半，难以忍受的巨大痛楚令他失去了理智。<li>清醒之后，看着血泊中的领主和自己可怕的身躯，他只能惶恐地逃离。 <li>这些年来，骑士独自一人在荒原上流浪，而根植于血脉中的力量也与日俱增。幸运的是，在旅途中磨练出的坚韧和勇气让骑士逐渐学会了如何在狂暴中保持清明。在一次从魔兽群的包围中救下落难的冒险者后，他第一次感到这股力量会是种恩赐。 <li>兴奋的流浪骑士马不停蹄地想要回到家乡，但迎接他的却不是领主慈祥的微笑，而是冲天的火光、村民的哀嚎以及大队的强盗…… <li>那天以后，王国又多了一个传说，关于龙骑士的传说。"]],
            "Newnnyhzr妮娜":["female","min",3,["rnyhzr幽影之蜕lj","nyhzr女皇神威lj"],["des:<li>针对女王妮娜的政变在一个夜晚爆发。那些曾被赦免的贵族们带着士兵冲进王宫，将所见的人统统杀死。<li>“抓住妮娜！”熊熊火焰在王宫中肆虐，照亮一地冰冷的尸体与丑恶背叛。<li>“杀死她，她已不配为王！” <li>目标明确的叛军一路攻入寝宫，妮娜只得带着铁卫逃往王城北面。那里背靠人人恐惧的禁忌森林，叛军决不会在那设防。然而双方实力过于悬殊，当他们来到禁忌森林前，铁卫已悉数战死，只剩走投无路的妮娜一人被包围。 <li>贵族们轻蔑地嘲笑她：“你是要投降，还是逃入死地？” <li>女王的脸因恐惧而苍白，但她仍尊严地抬头走入森林：“以我的灵魂发誓，我会回来的！把你们全部杀死！” <li>叛军骚动地望向漆黑的森林，想要确定女王是否已死。而妮娜身陷密林深处，被冰冷黏丝束缚双脚。纷麻触感由四肢蔓延，骚动的剧毒螯爪遍布全身，一点点收割生命。曾经高傲的冰雪陷入地狱，死亡已如影随形，妮娜绝望地流出眼泪。 <li>“我不能死……”复仇的怒火涌上心头，被背叛的憎恨和被啃食的痛楚让她从灵魂深处发出嘶哑呐喊：“我绝不能死！” <li>“你要向那些背叛你的人复仇么？”甜腻诱惑的声音突然充斥在她耳边。"]], 
		    "Newdnyhzr德古拉":["male","zhi",3,["nyhzr血虐暴风lj","nyhzr歃血为神lj"],["des:<li>那座古堡矗立在林中已经很久，崩塌的外墙、腐朽的枯木、夜枭的啼叫，传说中的恶魔……一切令人生惧的元素仿佛都集中在它的身上。 <li>过去的这里并不是如此死气沉沉，令人生畏。德古拉伯爵一家是这片土地的主人。伯爵夫人虽然出身卑微，却颇受伯爵宠爱。浪漫的爱情故事也让无数人羡慕。 <li>平静的日子被教会的传令所打破。他带上家族精锐出发了。战斗几乎没有遭到抵抗，这种单纯的杀戮令伯爵的不满更加浓烈。当伯爵归来之时，迎接他的不是欢呼与鲜花，而是满目疮痍，尸横遍野……他这才明白出征不过是教会的幌子，隐藏在背后的目的是铲除异己。抱着爱人的尸体，德古拉的愤怒如同滔天巨焰，他诅咒神明，诅咒教会，发誓要让他们血债血偿！<li>自那之后，伯爵失去了踪迹。尽管教会四处搜寻，却毫无线索。<li>数月后，曾参与围剿的人皆以怪异的方式死去，死者无一例外被吸干鲜血！教会分支也在熊熊大火中化为灰烬。人们纷纷传言德古拉伯爵回来了，他将灵魂献给魔鬼，以换取复仇的永生之力。<li>他视教廷为永世之敌，仇恨不灭，直至那伪善的光明被彻底摧毁！"]],
            "Newhnyhzr后羿":["male","min",4,["nyhzr逐阳之弓lj"],["des:<li>后羿环顾着四周，目力可及之处，只有龟裂的大地。匍匐在他脚下的老妪已经被灼热的太阳晒脱了水分，恍惚间就像一段焦枯树干。 <li>天空中的太阳们依旧嚣张地散发着全部的热量。<li>是的，太阳们。<li>它们是天帝的儿子，每日有一人化身为太阳穿过天空，撒下光热，哺育世间万物。然而，周而复始的日子令它们觉得厌烦。于是，再一个黎明到来时，它们一起出现在天空中， <li>太阳们散发出的热量烤焦了大地，树木庄稼化为灰烬，人间瞬时化为炼狱…… <li>不能再这样了，总得有个人站出来，帮助大家脱离苦海。<li>后羿回过神来，他按了按腰间的箭囊，那是最后的希望……不能再等待了！他从肩上取下那张红色的弓，抽出了箭矢。 <li>满弓！射出！ <li>奇迹出现了！骄横的太阳纷纷坠落，当第九个太阳落下之时，世界再度恢复了原貌。 <li>人们铭记着他的威能，自此，“神射手”之名名垂千古！"]],
						
					},
                    skill:{
            "nyhzr仙灵伙伴lj":{
                nobracket:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
                    if(player.storage.nyhzr仙灵伙伴lj==undefined) player.storage.nyhzr仙灵伙伴lj=0;
                    player.markSkill('nyhzr仙灵伙伴lj');
                    player.storage.nyhzr仙灵伙伴lj+=1;    
                    player.syncStorage('nyhzr仙灵伙伴lj'); 
                    game.log(player,'召唤一只妖精皮皮');
                    player.marks.nyhzr仙灵伙伴lj.setBackgroundImage('extension/新英魂之刃/'+'nyhzr皮皮'+'.jpg')                   
                },
                intro:{
                    content:function (storage){
                        return '妖精皮皮为你作战！'+'<br>当前有'+storage+'只妖精皮皮'
                    },
                },
            },
            "nyhzr迷藏印记lj":{
                nobracket:true,
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
                    return player.num('h')>=1&&player.storage.nyhzr仙灵伙伴lj>=2;
                },
                content:function (){
                    player.storage.nyhzr仙灵伙伴lj-=2;    
                    player.syncStorage('nyhzr仙灵伙伴lj'); 
                    game.log(player,'躲避了对方的攻击'); 
                    if (game.players.length<4){
                        player.chooseToDiscard(1,'h',true);     
                    };                                 
                    trigger.num--;
                },
            },			
            "nyhzr恐惧镰刀lj":{
                nobracket:true,
                group:["nyhzr恐惧镰刀lj_gainMark","nyhzr恐惧镰刀lj_Triggera"],
                subSkill:{
                    gainMark:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
                            if(player.storage.nyhzr恐惧镰刀lj_gainMark==undefined) player.storage.nyhzr恐惧镰刀lj_gainMark=0;
                            player.markSkill('nyhzr恐惧镰刀lj_gainMark'); 
                            player.storage.nyhzr恐惧镰刀lj_gainMark+=1;    
                            player.syncStorage('nyhzr恐惧镰刀lj_gainMark'); 
                            game.log(player,'造成的伤害为恐惧镰刀充能');                    
                        },
                        intro:{
                            content:function (storage){
                                return '当前有'+storage+'层夜魔之力'
                            },
                        },
                    },
                    Triggera:{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
                            return player.storage.nyhzr恐惧镰刀lj_gainMark>=3;
                        },
                        forced:true,
                        content:function (){
                            player.storage.nyhzr恐惧镰刀lj_gainMark=0;    
                            player.syncStorage('nyhzr恐惧镰刀lj_gainMark');                     
                            trigger.player.turnOver();
                        },
                    },
                },
            },
            "nyhzr恐惧结界lj":{
                nobracket:true,
                unique:true,
                global:"nyhzr恐惧lj",
            },
            "nyhzr恐惧lj":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    if(player.group!='li') return false;
                    if(event.card&&event.card.name!='sha') return false;
                    return game.hasPlayer(function(target){
                        return player!=target&&target.hasSkill('nyhzr恐惧结界',player);
                    });
                },
                direct:true,
                content:function (){
                    'step 0'
                    var list=[];
                    for(var i=0;i<game.players.length;i++){
                    if(game.players[i]!=player&&game.players[i].hasSkill('nyhzr恐惧结界',player)){
                            list.push(game.players[i]);
                        };
                    };
                    event.list=list;
                    'step 1'
                    if(event.list.length){
                        var current=event.list.shift();
                        event.current=current;
                        player.chooseBool('是否对'+get.translation(current)+'发动【恐惧结界】？').set('choice',ai.get.attitude(player,current)>0);
                    }else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.logSkill('nyhzr恐惧结界',event.current);
                        event.current.recover();
                        event.current.draw();
                    }
                    event.goto(1);
                },
                ai:{
                    expose:0.2,
                },
            },
            "nyhzr龙人血脉lj":{
nobracket:true,
intro:{
content:function (storage){
return '已激活血脉数量：'+storage;
},
},
init:function (player){
player.storage.nyhzr龙人血脉lj=0;
},
trigger:{
global:"gameStart"
},
forced:true,
silent:true,
mark:true,
popup:false,
content:function (){
'step 0'
if(player.storage.nyhzr龙人血脉lj==undefined) player.storage.nyhzr龙人血脉lj=0;
setTimeout(function(){
player.useSkill('nyhzr龙人血脉lj');
player.storage.nyhzr龙人血脉lj+=30;
},60000);
'step 2'
if(player.storage.nyhzr龙人血脉lj==30){
player.logSkill('nyhzr龙人血脉lj');
player.gainMaxHp();
player.recover();
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉lj==90){
player.logSkill('nyhzr龙人血脉lj');
player.draw(2);
game.log(player,'血脉觉醒');
}if(player.storage.nyhzr龙人血脉lj==150){
player.logSkill('nyhzr龙人血脉lj');
player.addSkill('nyhzr龙人血脉lj_1');
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉lj==240){
player.logSkill('nyhzr龙人血脉lj');
player.addSkill('nyhzr龙人血脉lj_2');
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉lj==300){
player.logSkill('nyhzr龙人血脉lj');
player.addSkill('nyhzr龙人血脉lj_3');
game.log(player,'血脉觉醒');       
}
},
                subSkill:{
                    "1":{
trigger:{
player:"phaseBefore",
},
forced:true,
content:function (){
player.draw();
},
                    },
                    "2":{
mod:{
cardUsable:function (card){
if(get.info(card)&&get.info(card).forceUsable) return;            
return 2;    
},
targetInRange:function (){
return true;
},
},
                    },
                    "3":{
trigger:{
source:"damageEnd",
},
filter:function (event,player){
return player.num('h')>2;
},
content:function (){
player.discard(player.get("h"));
player.draw();
trigger.player.removeSkill(trigger.player.skills.randomGet());    
},
check:function (event,player){                    
if(player.num('h')>4) return false;                        
if(player.hp<=1) return false;                    
if(player.identity==event.player.identity) return false;
if(event.player.identity=='zhu'&&player.identity=='zhong') return false;
if(player.identity=='zhu'&&event.player.identity=='zhong') return false;   
return true;
},
            },
                },
            },
            "nyhzr女皇神威lj":{
                nobracket:true,
                enable:"phaseUse",
                content:function (){
					game.log(player,'释放神威');
                    player.addTempSkill('nyhzr神威lj',{player:'phaseEnd'}); 
                    player.removeSkill('nyhzr女皇神威lj');    
                },
                ai:{
                    order:100,
                    result:{
                        player:function (player){
                            return  player.num('h','sha')-0;
                        },
                    },
                },
            },
            "nyhzr神威lj":{
                marktext:"神",
                intro:{},
                mark:true,
                trigger:{
                    source:"damageAfter",
                },
                forced:true,
                content:function (){
                    game.log(player,'的神威震慑对手');
                    trigger.player.chooseToDiscard(trigger.player.num('h'),'h',true);    
                },
            },
            "rnyhzr幽影之蜕lj":{
                nobracket:true,
                marktext:"人",
                intro:{},
                mark:true,
                trigger:{
                    player:"damageAfter",
                },
                content:function (){
					game.log(player,'转化蜘蛛形态');
                    player.addSkill('znyhzr幽影之蜕lj');
                    player.addSkill('nyhzr蛛壳硬化lj');               
                    player.removeSkill('rnyhzr幽影之蜕lj');  
                    player.removeSkill('nyhzr女皇神威lj');                              
                },
            },
            "znyhzr幽影之蜕lj":{
                nobracket:true,
                marktext:"蛛",
                intro:{},
                mark:true,
                trigger:{
                    player:"damageAfter",
                },
                content:function (){
					game.log(player,'转化人类形态');
                    player.addSkill('rnyhzr幽影之蜕lj');
                    player.addSkill('nyhzr女皇神威lj');               
                    player.removeSkill('znyhzr幽影之蜕lj');  
                    player.removeSkill('nyhzr蛛壳硬化lj');                              
                },
            },
            "nyhzr蛛壳硬化lj":{
                nobracket:true,
                enable:"phaseUse",
                content:function (){ 
                    game.log(player,'硬化了自己的壳');
                    player.addSkill('nyhzr硬化lj');
                    player.removeSkill('nyhzr蛛壳硬化lj');
                },
                ai:{
                    order:100,
                    result:{
                        player:function (player){
                            return 1;
                        },
                    },
                },
				},
            "nyhzr硬化lj":{
                marktext:"硬",
                intro:{},
                mark:true,
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
                    player.removeSkill('nyhzr硬化lj');
					game.log('硬化的蛛壳使',player,'免疫了攻击');
                    trigger.untrigger();
                    trigger.finish();
                },
            },
            "nyhzr血虐暴风lj":{
                nobracket:true,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){     
                    if (trigger.player.hp==0){
                        player.gainMaxHp();
                    };
                    if (player.hp==0){
                        trigger.player.loseHp();
                    };
                },
            },
            "nyhzr歃血为神lj":{
                nobracket:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    return player.num('h')>0;
                },
                content:function (){
					"step 0"
					player.chooseControl(["弃牌恢复体力","将现有体力转化为护盾值"]);
					"step 1"
					if (result.control=='弃牌恢复体力'){
						player.chooseToDiscard(1,'h',true);      
						player.recover();
						if (player.hp==player.maxHp&&player.hasSkill('nyhzr血虐暴风lj')){
							player.changeHujia();
							player.update();
							game.log(player,'获得1点护甲');
						};
					};
					if (result.control=='将现有体力转化为护盾值'){
						player.changeHujia(player.hp);
						game.log(player,'获得',player.hp,'点护甲');
						player.hp=0;
						player.update();
					};
                },
                check:function (event,player){
                    if(player.hp==player.maxHp) return false;
                    return true;
                },
            },
            "nyhzr燎火之箭lj":{
                nobracket:true,
                trigger:{
                    source:"damageBegin",
                },
				forced:true,
                content:function (){                    
                    trigger.nature='fire';
                    trigger.player.discard(trigger.player.get('e'));
                },
            },
            "nyhzr穿云箭lj":{
                nobracket:true,
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
                        if(arg&&arg.name=='sha') return true;
                        return false;
                    },
                },
			},
            "nyhzr逐阳之弓lj":{
                nobracket:true,
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
				trigger:{
                    player:"useCardBefore",
				},
				filter:function (event,player){
                    return event.card.name=='sha'&&_status.currentPhase==player;
				},
				content:function (){
					"step 0"
					player.chooseControl(["穿云箭","燎火之箭"]);
					"step 1"
					if (result.control=='穿云箭'){
						player.addTempSkill('nyhzr穿云箭lj',{player:'useCardAfter'});
						game.log(player,'将穿云箭上弦');
					};
					if (result.control=='燎火之箭'){
						player.addTempSkill('nyhzr燎火之箭lj',{player:'useCardAfter'});
						game.log(player,'将燎火之箭上弦');
					};
                },
                check:function (event,player){
                    if(player.identity==event.player.identity) return false;
                    if(event.player.identity=='zhu'&&player.identity=='zhong') return false;
                    if(player.identity=='zhu'&&event.player.identity=='zhong') return false;   
                    return true;
                },				
			},






			
					},
                    translate:{
            "Newlnyhzr咯哩咯哩":"◉咯哩咯哩",
            "Newlnyhzr莉莉姆.提露埃拉":"◉莉莉姆·提露埃拉",
            "Newlnyhzr龙骑士":"◉龙骑士 ",
            "Newnnyhzr妮娜":"◉妮娜  ",
            "Newdnyhzr德古拉":"◉德古拉 ",
            "Newhnyhzr后羿":"◉后羿  ",
            "nyhzr仙灵伙伴lj":"仙灵伙伴",
            "nyhzr仙灵伙伴lj_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始阶段，你召唤一只妖精皮皮",
            "nyhzr迷藏印记lj":"迷藏印记",
            "nyhzr迷藏印记lj_info":"每当你受到伤害时，若你有手牌，你可以牺牲两只妖精皮皮使伤害-1，若游戏人数小于4，你需要弃一张牌",	
            "nyhzr恐惧镰刀lj":"恐惧镰刀",
            "nyhzr恐惧镰刀lj_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每次造成伤害时会为自己的噩梦镰刀充能夜魔之力，达到三层时，造成伤害后使对方翻面",
            "nyhzr恐惧结界lj":"恐惧结界",
            "nyhzr恐惧结界lj_info":"当一名其他力量角色使用【杀】造成一次伤害后，该角色可令你摸一张牌并令你恢复一点体力",			
            "nyhzr龙人血脉lj":"龙人血脉",
            "nyhzr龙人血脉lj_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>游戏开始后，每一分钟激活30点血脉<br><br>当血脉数量：<br>为30时，你的体力上限+1并恢复一点体力<br>为90时，你摸两张牌<br>为150时，你获得技能（回合开始前摸一张牌）<br>为240时，你获得技能（回合内有使用次数限制的牌，其限制改为2；你使用的牌无距离限制）<br>为300时，你获得技能（当你造成伤害后，若你的手牌数大于2，你可以弃置所有手牌后摸一张牌，然后随机删除被伤害者一项技能）",
            "nyhzr神威lj":"神威",
            "nyhzr女皇神威lj":"女皇神威",			
            "nyhzr女皇神威lj_info":"出牌阶段，你可以释放自己的女皇神威,使你于本回合内造成伤害后，被伤害者弃置所有手牌，使用后删除此技能",
            "nyhzr硬化lj":"硬化",
            "nyhzr蛛壳硬化lj":"蛛壳硬化",
            "nyhzr蛛壳硬化lj_info":"出牌阶段，你可以硬化自己的壳,使你完全免疫下一次的伤害，使用后删除此技能",
            "rnyhzr幽影之蜕lj":"幽影之蜕",
            "rnyhzr幽影之蜕lj_info":"当你受到伤害后，你可以转化为蜘蛛形态，失去技能【女皇神威】，获得技能【蛛壳硬化】",
            "znyhzr幽影之蜕lj":"幽影之蜕",
            "znyhzr幽影之蜕lj_info":"当你受到伤害后，你可以转化为人类形态，失去技能【蛛壳硬化】，获得技能【女皇神威】",
            "nyhzr血虐暴风lj":"血虐暴风",
            "nyhzr血虐暴风lj_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每当你造成伤害后，若被伤害者体力值为0，你获得一点体力上限；若自身体力值为0，被伤害者流失一点体力<br>技能【嗜血】在自身满血时可以过量恢复，溢出的恢复值转化为护盾值",
            "nyhzr歃血为神lj":"歃血为神",
            "nyhzr歃血为神lj_info":"当你造成伤害后，你可以选择弃一张牌并恢复一点体力或者将将现有体力转化为护盾值",
			"nyhzr歃血为神lj_append":"注：<br>体力值为零时受到任何伤害，会进入濒死阶段",
            "nyhzr逐阳之弓lj":"逐阳之弓",
            "nyhzr逐阳之弓lj_info":"当你使用杀前，你可以选择使用燎火之箭或穿云箭上弦",
			"nyhzr逐阳之弓lj_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>手持弓的你进攻距离+1<br><br>燎火之箭：当你造成伤害时，伤害属性变为火属性并弃置对方装备区内的所有牌<br><br>穿云箭：你使用的杀无视对方防具<br><br>注：<br>燎火之箭不触发藤甲增加伤害效果",			
			},
                };				
                if(lib.device||lib.node){
                    for(var i in nyhzrlj.character){nyhzrlj.character[i][4].push('ext:新英魂之刃/'+i+'.jpg');}
                }else{
                    for(var i in nyhzrlj.character){nyhzrlj.character[i][4].push('db:extension-新英魂之刃:'+i+'.jpg');}
                }
                return nyhzrlj;
            });		
            lib.config.all.characters.push('nyhzrlj');
            if(!lib.config.characters.contains('nyhzrlj')){
                lib.config.characters.push('nyhzrlj');
            }
            lib.translate['nyhzrlj_character_config'] = '<span style=\"font-size:18px;font-weight:600\">英魂之刃联机</span>';			
			lib.group.push('jin');
			lib.translate.jin='×';
			lib.translate.jinColor="#EAEAEA";
			lib.group.push('li');
			lib.translate.li='力';
			lib.translate.liColor="#FF0000";
			lib.group.push('min');
			lib.translate.min='敏';
			lib.translate.minColor="#76EE00";         
			lib.group.push('zhi');
			lib.translate.zhi='智';
			lib.translate.zhiColor="#1874CD";
        };      	

game.say1=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<190){
dialog._mod_height=-16;
}
else{
dialog.content.firstChild.style.textAlign='left';
}
dialog.style.width=(width+16)+'px';
lib.placePoppedDialog(dialog,{
clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
});

if(dialog._mod_height){
dialog.content.firstChild.style.padding=0;
}
dialog.style.left='calc(45%)';
dialog.style.top='calc(30%)';
setTimeout(function(){
dialog.delete();
},1500);
};		
game.increaseJifen=function(num){
if(typeof num=='number'&&ui.jifen){
game.saveConfig('jifen',lib.config.jifen+num);
ui.jifen.innerHTML=lib.config.jifen+'积分';
if (num>0){
game.say1('获得'+num+'点积分');	
}					
}	
};	
game.removeCard2=function(name){
            for(var i=0;i<lib.card.list.length;i++){
                if(lib.card.list[i][2]==name){
                    lib.card.list.splice(i--,1);
                }
            }
            var list=[];
            for(var i=0;i<ui.discardPile.childElementCount;i++){
                if(ui.discardPile.childNodes[i].name==name){
                    list.push(ui.discardPile.childNodes[i]);
                }
            }
            for(var i=0;i<list.length;i++){
                list[i].remove();
            }
};

},help:{"皮肤解锁":"<li>血月会长：用拥有技能【血祭启示录】的武将在一局游戏中造成超过10点伤害（含10点），在此之后经过一个回合结束阶段即可解锁。<li>雪凝幻彩：联机比赛参赛者的奖品"},
config:{	
	"Pifu":{"name":"技能皮肤","init":true,"intro":"拥有技能皮肤的武将有：咯哩咯哩，莉莉姆.提露埃拉，后羿，萨特，德古拉，时空猎人,龙骑士，艾迪兰，超能企鹅"},
	"UseNew":{"name":"新版武将包皮肤","init":true,"intro":"拥有新版皮肤的武将有：咯哩咯哩，莉莉姆.提露埃拉，后羿，贞德，萨特，德古拉，狂徒，时空猎人,龙骑士，艾迪兰，布丁，超能企鹅，布鲁，宫本武藏"},
	"UsePifuNew":{"name":"新版技能皮肤皮肤","init":true,"intro":"拥有新版皮肤的皮肤有：幽梦魔灵，祈愿之星，屠戮魔影，炼狱魂印，毁灭之翼，血色传说，血月会长，强弩神射，幻影射手，皎月王侯，黄金之翼，强袭龙魂，暗翼骨龙，星河雷爆，逆时者，强殖妖斧，妙法仙灵，暗黑小魔星，花牌魔后，雪凝幻彩，星钻仙后，晶钻星使，伊娃，趣海先锋"},
	"NoUselessSkill":{"name":"关闭无用技能","init":true,"intro":"关闭称号技能与死亡配音技能"},
	"gongchengmoshi":{"name":"攻城模式","init":true},
	"xyhzr":{"name":"新英魂之刃与技能卡包","init":true},
	"nyhzrlj":{"name":"<span style=\"font-size:13px;font-weight:600\">将英魂之刃联机武将设为禁用</span>","init":false,"intro":"将英魂之刃联机武将设为禁用"},
	},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{},
    skill:{
        skill:{
            "nyhzr自然之灵":{
                nobracket:true,
            },
            "nyhzr仙灵伙伴":{
                nobracket:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
if (player.storage.nyhzr仙灵伙伴<1||player.storage.nyhzr仙灵伙伴==undefined) return true;
},
                content:function (){
if(player.storage.nyhzr仙灵伙伴==undefined) player.storage.nyhzr仙灵伙伴=0;
player.markSkill('nyhzr仙灵伙伴');
player.storage.nyhzr仙灵伙伴+=1;    
player.syncStorage('nyhzr仙灵伙伴'); 
game.log(player,'的妖精皮皮+1');        
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='nyhzr仙灵伙伴'){
player.node.marks.childNodes[i].setBackgroundImage('extension/新英魂之刃/'+'nyhzr皮皮'+'.jpg');
                     }
                 }           
},
                intro:{
                    content:function (storage){
 return '妖精皮皮为你作战！'+'<br>当前有'+storage+'只妖精皮皮'
},
                },
            },
            "nyhzr闪耀之光":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
                enable:"phaseUse",
                usable:1,
                content:function (){
player.loseHp();    
player.useSkill('nyhzr仙灵伙伴')
},
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                return  player.hp-2;
            },
                    },
                },
            },
            "nyhzr迷藏印记":{
                audio:"ext:新英魂之刃:4",
                nobracket:true,
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
return player.num('h')>=1&&player.storage.nyhzr仙灵伙伴>=1;
},
                content:function (){
player.storage.nyhzr仙灵伙伴-=1;    
player.syncStorage('nyhzr仙灵伙伴'); 
game.log(player,'躲避了对方的攻击'); 
if (game.players.length<4){
player.discardPlayerCard(1,player,true);     
}                                 
trigger.num--;
},
            },
            "nyhzr奥妙冲击":{
                audio:"ext:新英魂之刃:3",
                nobracket:true,
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.storage.nyhzr仙灵伙伴>=1;
    },
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                content:function (){
player.storage.nyhzr仙灵伙伴-=1;    
player.syncStorage('nyhzr仙灵伙伴'); 
game.log(player,'的妖精皮皮-1');            
target.useSkill('nyhzr仙灵伙伴');                       
target.addSkill('nyhzr仙灵伙伴1'); 
game.log(target,'被',player,'的妖精皮皮诅咒了');    
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.storage.nyhzr仙灵伙伴-1;
             },
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr仙灵伙伴1":{
                marktext:"诅",
                intro:{
                    content:function (storage){
return '每回合流失一点体力。'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.nyhzr仙灵伙伴1=0;
}
},
                mark:true,
                group:["nyhzr仙灵伙伴1_1111","nyhzr仙灵伙伴1_2222","nyhzr仙灵伙伴1_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.nyhzr仙灵伙伴<=1;
},
                        content:function (){
player.removeSkill('nyhzr仙灵伙伴');
player.removeSkill('nyhzr仙灵伙伴1');                
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.nyhzr仙灵伙伴-=1;
player.syncStorage('yhzr仙灵伙伴');
game.log(player,'妖精皮皮-1');        
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp();
},
                    },
                },
            },
            "nyhzr魅魔公主":{
                nobracket:true,
            },
            "nyhzr恐惧镰刀":{
                nobracket:true,
                group:["nyhzr恐惧镰刀_gainMark","nyhzr恐惧镰刀_Triggera"],
                subSkill:{
                    gainMark:{
                        audio:"ext:新英魂之刃:2",
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr恐惧镰刀_gainMark==undefined) player.storage.nyhzr恐惧镰刀_gainMark=0;
player.markSkill('nyhzr恐惧镰刀_gainMark'); 
player.storage.nyhzr恐惧镰刀_gainMark+=1;    
player.syncStorage('nyhzr恐惧镰刀_gainMark'); 
game.log(player,'的恐惧镰刀被充能');                    
},
                        intro:{
                            content:function (storage){
 return '当前有'+storage+'层夜魔之力'
},
                        },
                    },
                    Triggera:{
                        audio:"ext:新英魂之刃:2",
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event,player){
return player.storage.nyhzr恐惧镰刀_gainMark>=3;
},
                        forced:true,
                        content:function (){
player.storage.nyhzr恐惧镰刀_gainMark=0;    
player.syncStorage('nyhzr恐惧镰刀_gainMark');                     
trigger.player.turnOver();
},
                    },
                },
            },
            "nyhzr恐惧结界":{
                nobracket:true,
                unique:true,
                global:"nyhzr恐惧",
            },
            "nyhzr恶魔冲锋":{
                nobracket:true,
                audio:"ext:新英魂之刃:3",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                content:function (){          
target.damage(1,'thunder');                       
player.removeSkill('nyhzr恶魔冲锋');    
},
                ai:{
                    order:7,
                    result:{                        
					player:function (player){
					return  10;
					},
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr镰刀挥舞":{
                nobracket:true,
                group:["nyhzr镰刀挥舞_a","nyhzr镰刀挥舞_2","nyhzr镰刀挥舞_3"],
                subSkill:{
                    "2":{
                        audio:"ext:新英魂之刃:1",
                        name:"重铸♣︎",
                        enable:"phaseUse",
                        filter:function (event,player){
                return player.num('h',{suit:'club'})>0;
            },
                        filterCard:function (card){
                return get.suit(card)=='club';
            },
                        check:function (card){
                return 5-ai.get.useful(card);
            },
                        content:function (){
                player.draw();
            },
                        discard:false,
                        prepare:function (cards,player){
                player.$throw(cards);
            },
                        ai:{
                            basic:{
                                order:1,
                            },
                            result:{
                                player:1,
                            },
                        },
                    },
                    "3":{
                        mod:{
                            selectTarget:function (card,player,range){
if(card.name=='tiesuo') range[1]=3;
                },
                        },
                    },
                    a:{
                        audio:"ext:新英魂之刃:1",
                        enable:"phaseUse",
                        filter:function (event,player){
                return player.num('h',{suit:'club'})>0;
            },
                        filterCard:function (card){
                return get.suit(card)=='club';
            },
                        viewAs:{
                            name:"tiesuo",
                            suit:"club",
                            number:2,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"uncheck":[]},"suit":"club","number":2,"name":"bagua","cardid":"8599807241","_transform":"translateX(0px)","_mouseentercreated":false,"clone":{"name":"bagua","suit":"club","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":232},"timeout":222,"original":"h"}],
                        },
                        prompt:"将一张梅花牌当铁锁连环使用",
                        check:function (card){
                return 4-ai.get.value(card)
            },
                        ai:{
                            wuxie:function (){
                    if(Math.random()<0.5) return 0;
                },
                            basic:{
                                useful:4,
                                value:4,
                                order:7,
                            },
                            result:{
                                target:function (player,target){
                        if(target.isLinked()) return 1;
                        if(get.attitude(player,target)>=0) return -1;
                        if(ui.selected.targets.length) return -1;
                        if(game.hasPlayer(function(current){
                            return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
                        })){
                            return -1;
                        }
                        return 0;
                    },
                            },
                            tag:{
                                multitarget:1,
                                multineg:1,
                                norepeat:1,
                            },
                        },
                    },
                },
            },
            "nyhzr恐惧":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
if(player.group!='li') return false;
if(event.card&&event.card.name!='sha') return false;
return game.hasPlayer(function(target){
return player!=target&&target.hasSkill('nyhzr恐惧结界',player);
        });
    },
                direct:true,
                content:function (){
'step 0'
var list=[];
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player&&game.players[i].hasSkill('nyhzr恐惧结界',player)){
list.push(game.players[i]);
            }
        }
event.list=list;
'step 1'
if(event.list.length){
var current=event.list.shift();
event.current=current;
player.chooseBool('是否对'+get.translation(current)+'发动【恐惧结界】？').set('choice',ai.get.attitude(player,current)>0);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.logSkill('nyhzr恐惧结界',event.current);
            event.current.recover();
            event.current.draw();
        }
        event.goto(1);
    },
                ai:{
                    expose:0.2,
                },
            },
            "nyhzr骄阳陨落":{
                nobracket:true,
                audio:"ext:新英魂之刃:2",
                skillAnimation:"epic",
                animationColor:"fire",
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
"step 0"
event.current=player.next;
"step 1"
if(event.current.hasSkill('nyhzr嗜血')||event.current.hasSkill('nyhzr血祭启示录')){
event.current.hp=0;
event.current.update();
};
"step 2"        
if(event.current.next!=player){
event.current=event.current.next;    
event.goto(1);
};            
"step 3"
player.useSkill('nyhzr骄阳');
player.removeSkill('nyhzr骄阳陨落');
},
                check:function (event,player){      
if(game.players.length>=5&&player.next.identity==player.identity) return false;
if(player.next.identity=='zhu'&&player.identity=='zhong') return false;
if(player.identity=='zhu'&&player.next.identity.identity=='zhong') return false; 
return true;
},
            },
            "nyhzr燎火之箭":{
                nobracket:true,
                audio:"ext:新英魂之刃:3",
                trigger:{
                    source:"damageBegin",
                },
                content:function (){                    
if (!player.hasSkill('nyhzr银箭')){
    trigger.nature='fire';
}else{
    trigger.nature='thunder';
}                    
trigger.player.discard(trigger.player.get('e'));
},
                check:function (event,player){
if(player.identity==event.player.identity) return false;
if(event.player.identity=='zhu'&&player.identity=='zhong') return false;
if(player.identity=='zhu'&&event.player.identity=='zhong') return false;   
return true;
},
            },
            "nyhzr穿云箭":{
                nobracket:true,
                audio:"ext:新英魂之刃:6",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
    return player.num('hej')>0;;
    },
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                content:function (){
player.discardPlayerCard(1,player,true);         
player.useCard({name:'sha'},target)
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.num('h')-1;
             },
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr逐阳":{
                nobracket:true,
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "nyhzr射日英雄":{
                nobracket:true,
            },
            "nyhzr狼蛛":{
                nobracket:true,
            },
            "rnyhzr暗夜蛛毒":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                content:function (){
player.loseHp(); 
target.addSkill('nyhzr蛛毒'); 
target.storage.nyhzr蛛毒+=1;
target.syncStorage('nyhzr蛛毒'); 
game.log(target,'中了蛛毒');                   
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-2;
             },
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "znyhzr暗夜蛛毒":{
                nobracket:true,
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                check:function (event,player){
        return ai.get.attitude(player,event.target)<=0;
    },
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.color(card)=='black') return 2;
            return -0.5;
        });
        "step 1"
        if(result.bool){
            player.recover(1);
            player.addSkill('nyhzr蛛毒护体');
        }
    },
            },
            "rnyhzr猎物锁定":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        if (event.target.num('h')<3) return false;            
        return get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.zhu(_status.event.player,'shouyue')){
                if(get.suit(card)!='spade') return 2;
            }
            else{
                if(get.color(card)=='red') return 2;
            }
            return -0.5;
        });
        "step 1"
        if(result.bool){
            trigger.directHit=true;
        }
        else if(!result.bool){
            trigger.untrigger();
            trigger.finish();
        }
    },
            },
            "znyhzr猎物锁定":{
                audio:"ext:新英魂之刃:1",
                nobracket:true,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                content:function (){
target.addSkill('yhzr追猎'); 
game.log(target,'被',player,'锁定');                    
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr女皇神威":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                enable:"phaseUse",
                usable:1,
				nopop:true,
                content:function (){          
player.addSkill('nyhzr神威'); 
player.removeSkill('nyhzr女皇神威');
},
                ai:{
                    order:100,
                    result:{
                        player:function (player){
             return  player.num('h','sha')-0;
             },
                    },
                },
            },
            "rnyhzr幽影之蜕":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"phaseBefore",
                },
                content:function (){
player.addSkill('znyhzr幽影之蜕');
player.addSkill('znyhzr暗夜蛛毒');        
player.addSkill('znyhzr猎物锁定');        
player.removeSkill('rnyhzr幽影之蜕');  
player.removeSkill('rnyhzr暗夜蛛毒');          
player.removeSkill('rnyhzr猎物锁定');          
player.draw();        
player.skip('phaseUse');        
player.setAvatar('nnyhzr妮娜','znyhzr蜘蛛形态');
game.log(player,'转化蜘蛛形态');        
},
                check:function (event,player){
                return player.num('h')<3;
                },
            },
            "znyhzr幽影之蜕":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"phaseBefore",
                },
                content:function (){
player.removeSkill('znyhzr幽影之蜕');
player.removeSkill('znyhzr暗夜蛛毒');        
player.removeSkill('znyhzr猎物锁定');        
player.addSkill('rnyhzr幽影之蜕');  
player.addSkill('rnyhzr暗夜蛛毒');          
player.addSkill('rnyhzr猎物锁定');          
player.draw();        
player.skip('phaseDraw');        
player.setAvatar('nnyhzr妮娜','nnyhzr妮娜');
if(player.hasSkill('nyhzr紫魅')) player.setAvatar('nnyhzr妮娜','Pifunyhzr狼蛛1');
game.log(player,'转化人类形态');        
},
                check:function (event,player){
return player.hp==3;
},
            },
            "nyhzr蛛毒":{
                marktext:"毒",
                intro:{
                    content:function (storage){
return '<li>每回合流失一点体力'+'<li>离蛛毒效果消失还有'+storage+'个回合'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.nyhzr蛛毒=0;
}
},
                mark:true,
                group:["nyhzr蛛毒_1111","nyhzr蛛毒_2222","nyhzr蛛毒_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.nyhzr蛛毒<=0;
},
                        content:function (){
player.removeSkill('nyhzr蛛毒');
                game.log(player,'蛛毒效果消失');
},
                    },
                    "2222":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.nyhzr蛛毒-=1;
player.syncStorage('nyhzr蛛毒');
},
                    },
                    "3333":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.loseHp();
},
                    },
                },
            },
            "nyhzr神威":{
                group:["nyhzr神威_damage","nyhzr神威_removeskill"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
trigger.num++;
player.recover();    
},
                    },
                    removeskill:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.removeSkill('nyhzr神威');
},
                    },
                },
            },
            "nyhzr蛛毒护体":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
player.removeSkill('nyhzr蛛毒护体');
trigger.untrigger();
trigger.finish();
},
            },
            "yhzr追猎":{
                marktext:"猎",
                intro:{
                    content:function (storage){
return '已被追猎！'
},
                },
                init:function (player){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.yhzr追猎=0;
}
},
                mark:true,
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
trigger.num++;
player.removeSkill('yhzr追猎');
},
            },
            "nyhzr妮娜":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('我诅咒你！');    
},
            },
            "nyhzr后羿":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('此乃天意');    
},
            },
            "nyhzr圣女":{
                nobracket:true,
            },
            "nyhzr炽天使":{
                nobracket:true,
                mode:["identity"],
                audio:"ext:新英魂之刃:2",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
if(player.identity!=event.player.identity) return false;    
if(event.player.identity=='zhu') return false;
return true;    
},
                check:function (event,player){          
        return player.hp=3;
    },
                content:function (){
        'step 1'
game.removePlayer(trigger.player);
var player2=game.addPlayer();
player2.init('cnyhzr炽天使')
player2.identity=player.identity;
if(player2.identity=='zhu') player2.identity='zhong';
player2.setIdentity('天使');
player2.node.identity.dataset.color=player2.identity;
player2.identityShown=true;
player2.removeSkill('炽天使');
delete player2.maxHp;
delete player2.hp;
player2.update();
player2.addSkill('nyhzr炽天使_1');
player2.storage.nyhzr炽天使=true;
player.addSkill('nyhzr炽天使_2');
game.delay(1);
    'step 2'
    player.removeSkill('nyhzr炽天使');
    player.removeSkill('nyhzr光明圣礼');
},
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
return num=0;
},
                        },
                    },
                    "2":{
                        trigger:{
                            player:"dieBegin",
                        },
                        forced:true,
                        content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i].storage.nyhzr炽天使) game.players[i].die()._triggered=null;
}
},
                    },
                },
            },
            "nyhzr圣光惩戒":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
if(event.source.name=='cnyhzr炽天使') return false;        
return game.hasPlayer(function(target){
return player!=target&&target.hasSkill('nyhzr炽天使_1',player);
        });
    },
                direct:true,
                content:function (){
'step 0'
var list=[];
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player&&game.players[i].hasSkill('nyhzr炽天使_1',player)){
list.push(game.players[i]);
            }
        }
event.list=list;
'step 1'
if(event.list.length){
var current=event.list.shift();
event.current=current;
player.chooseBool('是否令'+get.translation(current)+'发动【圣光惩戒】？').set('choice',ai.get.attitude(player,current)>0);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.logSkill('nyhzr炽天使_1',event.current);
            event.current.useSkill('nyhzr惩戒');
        }
        event.goto(1);
    },
                check:function (event,player){
if(player.identity=='zhong'&&game.zhu.hp<3)    return false;                
return player.hp>2;
},
            },
            "nyhzr惩戒":{
                content:function (){    
for(var i=0;i<game.players.length;i++){
game.players[i].damage();
} 
},
            },
            "nyhzr光明圣礼":{
                nobracket:true,
                audio:"ext:新英魂之刃:3",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
player.draw();
if(Math.random()<=0.2){player.recover()};    
},
            },
            "nyhzr天之罚":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if (target.num('hej')==0) return false;            
        return player!=target;
    },
                filter:function (event,player){
    return player.hasSkill('nyhzr光明圣礼')&&player.num('h')>=1;
    },
                content:function (){          
player.discardPlayerCard(1,player,true);  
player.discardPlayerCard(1,target,true);          
},
                ai:{
                    order:15,
                    result:{
                        player:function (player){
            return  player.num('h')-1;
             },
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr贞德":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('我的躯体将在不灭的圣火中燃烧');    
},
            },
            "nyhzr灾祸匣":{
                audio:"ext:新英魂之刃:2",
                nobracket:true,
                trigger:{
                    player:"phaseBefore",
                },
                filter:function (event,player){
    return player.identity=='zhu'||player.hasSkill('nyhzr魔君');
    },
                content:function (){
player.skip('phaseDraw');        
if (game.players.length<=4){
player.previous.discardPlayerCard(1,player.previous,true); 
player.next.discardPlayerCard(1,player.next,true);          
}            
if (game.players.length>4){
player.previous.damage(1,'thunder');         
player.next.damage(1,'thunder');        
}            
},
                check:function (event,player){
if(player.num('h')<2) return false;        
if(player.previous.identity=='zhong'&&player.next.identity=='zhong') return false;
return true;
},
            },
            "nyhzr暴君":{
                nobracket:true,
            },
            "nyhzr咯哩咯哩":{
                audio:"ext:新英魂之刃:2",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){   
},
            },
            "nyhzr莉莉姆.提露埃拉":{
                audio:"ext:新英魂之刃:2",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){   
},
            },
            "nyhzr闪电活化":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return game.players.length>3;
},
                content:function (){          
event.target=game.players.randomGet(player);
player.line(event.target,'green');
game.swapSeat(event.target,player);
event.target.draw();        
},
                ai:{
                    order:4,
                    result:{
                        player:function (player){
            return  player.hp-1;
             },
                    },
                },
            },
            "nyhzr毁灭指针":{
                nobracket:true,
                audio:"ext:新英魂之刃:2",
                enable:"phaseUse",
                content:function (){          
player.loseHp();
player.removeSkill('nyhzr闪电活化');
player.removeSkill('nyhzr毁灭指针');
player.addSkill('nyhzr闪电感染');        
},
                ai:{
                    order:3,
                    result:{
                        player:function (player){
            if (player.hp==player.MaxHp) return 2;    
             },
                    },
                },
            },
            "nyhzr闪电感染":{
                nobracket:true,
                audio:"ext:新英魂之刃:3",
                enable:"phaseUse",
                filterTarget:function (card,player,target){           
        return player!=target;
    },
                content:function (){          
game.swapSeat(target,player);
target.damage();
player.loseHp();        
},
                ai:{
                    order:4,
                    result:{
                        player:function (player){
            return  player.hp-2;
             },
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr雷霆之环":{
                audio:"ext:新英魂之刃:3",
                nobracket:true,
                trigger:{
                    player:"dieBegin",
                },
                filter:function (event,player){
                if (player.identity=='zhu') return false;    
                return true;
    },
                content:function (){
game.zhu.addSkill('nyhzr闪电活化');
    },
                check:function (event,player){
if(player.identity=='fan'||player.identity=='nei') return false;
return true;                    
},
            },
            "nyhzr萨特":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('死亡对我只是另一个开始');                    
},
            },
            "nyhzr吸血鬼伯爵":{
                nobracket:true,
            },
            "nyhzr德古拉":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){   
},
            },
            "nyhzr血虐暴风":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){     
if (trigger.player.hp==0){        
player.gainMaxHp();
};
if (player.hp==0){        
player.recover();
trigger.player.loseHp();    
};        
},
            },
            "nyhzr嗜血":{
                nobracket:true,
                audio:"ext:新英魂之刃:3",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
return player.num('h')>=1;
},
                content:function (){
if (player.hasSkill('nyhzr血月')){                
player.draw();
};                       
if (!player.hasSkill('nyhzr血月')){                
player.discardPlayerCard(1,player,true);
};       
player.recover();
if (player.hp==player.maxHp&&player.hasSkill('nyhzr血虐暴风')){
player.changeHujia();
player.update();
game.log(player,'获得一点护甲');    
};        
},
                check:function (event,player){      
if(player.hp==player.maxHp) return false;
return true;
},
            },
            "nyhzr血祭启示录":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
                trigger:{
                    player:"phaseBefore",
                },
                filter:function (event,player){
return player.hp==0;
    },
                content:function (){
"step 0"
player.chooseTarget('是否发动【血祭启示录】？',function(card,player,target){
return target.isEnemyOf(player);
}).ai=function(target){
return -ai.get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
event.target.damage();
player.recover();    
if (game.players.length>2){
game.swapSeat(target,player);
event.target.turnOver();          
}                
}        
    },
            },
            "nyhzr骄阳":{
                content:function (){
"step 0" 
event.current=player.next;
"step 1"
if(!event.current.hasSkill('nyhzr嗜血')||!event.current.hasSkill('nyhzr血祭启示录')){        
event.current.removeSkill(event.current.get('s').randomGets(event.current.skills.length-1));
};  
"step 2"
if (game.players.length<5){
if(event.current.next!=player){
event.current=event.current.next;
event.goto(1);
}
};       
},
            },
            "nyhzr血蚀之河":{
                nobracket:true,
                enable:"phaseUse",
                usable:1,
                content:function (){
player.loseHp();        
player.useSkill('nyhzr血祭启示录')                      
player.removeSkill('nyhzr血蚀之河');    
},
                ai:{
                    order:11,
                    result:{
                        player:function (player){
            if (player.hp<3&&player.hp>1) return 1;
                return 0;
             },
                    },
                },
            },
            "nyhzr腐肉吸噬":{
                audio:"ext:新英魂之刃:3",
                nobracket:true,
                group:["nyhzr腐肉吸噬_1","nyhzr腐肉吸噬_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBefore",
                        },
                        check:function (event,player){
                return player.hp<player.maxHp;
                },
                        filter:function (event,player){
return game.dead.length>0;
    },
                        content:function (){                    
player.recover(game.dead.length);
if(player.storage.nyhzr腐肉吸噬_1==undefined) player.storage.nyhzr腐肉吸噬_1=0;
player.markSkill('nyhzr腐肉吸噬_1');
player.storage.nyhzr腐肉吸噬_1+=game.dead.length;    
player.syncStorage('nyhzr腐肉吸噬_1'); 
for(var i=0;i<game.dead.length;i++){
game.log(player,'吸噬了',game.dead[i].name);    
game.removePlayer(game.dead[i]);
}               
    },
                        intro:{
                            content:function (storage){
 return '下次造成的伤害+'+storage
},
                        },
                    },
                    "2":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
return player.storage.nyhzr腐肉吸噬_1>0;
},
                        forced:true,
                        content:function (){
trigger.num+=player.storage.nyhzr腐肉吸噬_1;
player.storage.nyhzr腐肉吸噬_1=0; 
player.syncStorage('nyhzr腐肉吸噬_1');                
},
                    },
                },
            },
            "nyhzr罪业狂屠":{
                nobracket:true,
            },
            "nyhzr血肉钩索":{
                audio:"ext:新英魂之刃:3",
                nobracket:true,
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return game.players.length>3;
},
                filterTarget:function (card,player,target){           
        return player!=target;
    },
                content:function (){          
game.swapSeat(target,player.next);
if (!target.hasSkill('nyhzr瘟疫')){
if(target.storage.nyhzr腐蚀瘟疫==undefined) target.storage.nyhzr腐蚀瘟疫=0;
target.markSkill('nyhzr腐蚀瘟疫');
target.storage.nyhzr腐蚀瘟疫+=1;    
target.syncStorage('nyhzr腐蚀瘟疫');
}              
},
                ai:{
                    order:10,
                    result:{
                        target:function (player,target){
                if (player.hp>1&&player.next.identity!=player.identity) return 0.5;        
                if (target==player.next) return 0;        
                if (target==player.previous) return 0;            
                if (target.identity!=player.identity) return 1;
                if (player.identity=='zhu'&&target.identity=='fan') return 0;    
                if (game.players.length<=4&&player.identity=='zhu'&&target.identity=='nei') return 0;    
                if (player.identity=='fan'&&target.identity=='zhu') return 2;                
            },
                    },
                },
            },
            "nyhzr腐蚀瘟疫":{
                audio:"ext:新英魂之刃:3",
                nobracket:true,
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
for(var i=0;i<game.players.length;i++){
if (Math.random()<=0.5&&game.players[i]!=player){
if(game.players[i].storage.nyhzr腐蚀瘟疫==undefined) game.players[i].storage.nyhzr腐蚀瘟疫=0;
game.players[i].markSkill('nyhzr腐蚀瘟疫');
game.players[i].storage.nyhzr腐蚀瘟疫+=1;    
game.players[i].syncStorage('nyhzr腐蚀瘟疫');    
}
if (game.players[i].storage.nyhzr腐蚀瘟疫>=3){    
game.players[i].addSkill('nyhzr瘟疫');
game.log('瘟疫在',game.players[i],'的身上爆发');
if(game.players[i].next.storage.nyhzr腐蚀瘟疫==undefined) game.players[i].next.storage.nyhzr腐蚀瘟疫=0;
game.players[i].next.markSkill('nyhzr腐蚀瘟疫');
game.players[i].next.storage.nyhzr腐蚀瘟疫+=1;    
game.players[i].next.syncStorage('nyhzr腐蚀瘟疫');    
if(game.players[i].previous.storage.nyhzr腐蚀瘟疫==undefined) game.players[i].previous.storage.nyhzr腐蚀瘟疫=0;
game.players[i].previous.markSkill('nyhzr腐蚀瘟疫');
game.players[i].previous.storage.nyhzr腐蚀瘟疫+=1;    
game.players[i].previous.syncStorage('nyhzr腐蚀瘟疫');            
}    
}
},
                marktext:"瘟",
                intro:{
                    content:function (storage){
 return '现有瘟疫印记'+storage+'个'
},
                },
            },
            "nyhzr瘟疫":{
                nobracket:true,
                group:["nyhzr瘟疫_1","nyhzr瘟疫_2","nyhzr瘟疫_3"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
return player.storage.nyhzr腐蚀瘟疫<=1;
},
                        content:function (){                                                             
player.removeSkill('nyhzr瘟疫'); 
game.log(player,'的瘟疫效果终止了');         
},
                    },
                    "2":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
player.storage.nyhzr腐蚀瘟疫-=1;
player.syncStorage('nyhzr腐蚀瘟疫');
},
                    },
                    "3":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
if (!player.hasSkill('nyhzr腐蚀瘟疫')){
player.discard(player.getCards('h').randomGet());    
}else{
player.storage.nyhzr腐蚀瘟疫=0;
player.syncStorage('nyhzr腐蚀瘟疫');                                                             
player.removeSkill('nyhzr瘟疫'); 
game.log(player,'的瘟疫效果终止了'); 
player.recover(); 
if(player.storage.nyhzr腐肉吸噬_1==undefined) player.storage.nyhzr腐肉吸噬_1=0;
player.markSkill('nyhzr腐肉吸噬_1');
player.storage.nyhzr腐肉吸噬_1+=1;    
player.syncStorage('nyhzr腐肉吸噬_1');            
}
},
                    },
                },
            },
            "nyhzr致命啃咬":{
                audio:"ext:新英魂之刃:4",
                nobracket:true,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
if (target.storage.nyhzr腐蚀瘟疫<3||target.storage.nyhzr腐蚀瘟疫==undefined) return false;                    
        return player!=target;
    },
                content:function (){          
target.damage();
target.storage.nyhzr腐蚀瘟疫=0;
target.syncStorage('nyhzr腐蚀瘟疫');
target.removeSkill('nyhzr瘟疫');
game.log(target,'的瘟疫效果终止了');       
},
                ai:{
                    order:11,
                    result:{                        
					player:function (player){
					return  10;
					},
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },
            "nyhzr狂徒":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('我要更强');                    
},
            },
            "nyhzr断裂时空":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
                forced:true,
                trigger:{
                    player:"dyingBefore",
                },
                filter:function (event,player){
return player.storage.nyhzr断裂时空==undefined;
},
                content:function (){
player.recover(1-player.hp);                    
    player.storage.nyhzr断裂时空=0;
    player.markSkill('nyhzr断裂时空');
    player.storage.nyhzr断裂时空+=3;    
    player.syncStorage('nyhzr断裂时空');                    
for(var i=0;i<game.players.length;i++){
if (game.players[i]!=player){
game.players[i].out();    
}    
}
game.log(player,'进入不稳定的时空中');
player.addSkill('nyhzr断裂时空_0');
player.addSkill('nyhzr断裂时空_1');
player.addSkill('nyhzr断裂时空_2');
player.addSkill('nyhzr断裂时空_3');
},
                intro:{
                    content:function (storage){
 return '距离离开时空还有'+storage+'个回合'
},
                },
                subSkill:{
                    "0":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr断裂时空>0){
for(var i=0;i<game.players.length;i++){
if (!game.players[i].hasSkill('nyhzr断裂时空')){
game.players[i].in();
game.players[i].addSkill('nyhzr断裂时空_4');    
}    
}
player.out();    
}    
    },
                    },
                    "1":{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        content:function (){
if(player.storage.nyhzr断裂时空>0){
for(var i=0;i<game.players.length;i++){
if (!game.players[i].hasSkill('nyhzr断裂时空')){
game.players[i].out();    
}    
}    
}        
if (player.storage.nyhzr断裂时空<=0){    
player.removeSkill('nyhzr断裂时空_1');        
player.removeSkill('nyhzr断裂时空_2');    
player.removeSkill('nyhzr断裂时空_3');
game.log(player,'离开当前时空，回到濒死前的时空中')    
}    
    },
                    },
                    "2":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:1,
                        forced:true,
                        content:function (){
player.storage.nyhzr断裂时空-=1;
player.syncStorage('nyhzr断裂时空');
},
                    },
                    "3":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:1,
                        forced:true,
                        content:function (){
                    player.recover();    
},
                    },
                    "4":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:-5,
                        forced:true,
                        filter:function (event,player){
for(var i=0;i<game.players.length;i++){
if (game.players[i].hasSkill('nyhzr断裂时空')){
if (player.next!=game.players[i]){
return false;    
}
}    
}
return true;    
},
                        content:function (){
for(var i=0;i<game.players.length;i++){
if (game.players[i].hasSkill('nyhzr断裂时空')){
game.players[i].in();    
}    
}
for(var i=0;i<game.players.length;i++){
if (!game.players[i].hasSkill('nyhzr断裂时空')){
game.players[i].removeSkill('nyhzr断裂时空_4');    
}    
}    
    },
                    },
                },
            },
            "nyhzr时空英雄":{
                nobracket:true,
            },
            "nyhzr时空道标":{
                nobracket:true,
                audio:"ext:新英魂之刃:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){           
        return player!=target;
    },
                content:function (){
target.draw();                    
if(target.storage.nyhzr时空道标==undefined) target.storage.nyhzr时空道标=0;
target.markSkill('nyhzr时空道标');
target.storage.nyhzr时空道标=target.hp;    
target.syncStorage('nyhzr时空道标');                               
            },
                intro:{
                    content:function (storage){
 return '上次被标记时体力为'+storage
},
                },
                ai:{
                    order:13,
                    result:{
                        target:function (player,target){
                if (target.identity==player.identity) return 1;
                if (player.identity=='zhu'&&target.identity=='zhong') return 1;        
                if (player.identity=='zhong'&&target.identity=='zhu') return 2;        
            },
                    },
                },
            },
            "nyhzr逝时若光":{
                nobracket:true,
                audio:"ext:新英魂之刃:2",
                enable:"phaseUse",
                content:function (){
for(var i=0;i<game.players.length;i++){
if (game.players[i].storage.nyhzr时空道标<=5){
game.players[i].loseHp(game.players[i].hp-game.players[i].storage.nyhzr时空道标);
}    
}
player.removeSkill('nyhzr逝时若光');                    
            },
            },
            "nyhzr超时空战斧":{
                nobracket:true,
                audio:"ext:新英魂之刃:3",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
return player.num('h')>=2;
},
                content:function (){
if(!player.hasSkill('nyhzr妖斧')){
player.discardPlayerCard(2,player,true);
trigger.num+=1;    
if (Math.random()<=0.15){
    if(player.storage.nyhzr断裂时空==undefined) player.storage.nyhzr断裂时空=0;                
    player.storage.nyhzr断裂时空=0;
    player.markSkill('nyhzr断裂时空');
    player.storage.nyhzr断裂时空+=1;    
    player.syncStorage('nyhzr断裂时空');                    
for(var i=0;i<game.players.length;i++){
if (game.players[i]!=player){
game.players[i].out();    
}    
}
game.log(player,'进入不稳定的时空中');
player.addSkill('nyhzr断裂时空_0');
player.addSkill('nyhzr断裂时空_1');
player.addSkill('nyhzr断裂时空_2');
player.addSkill('nyhzr断裂时空_3');    
}    
}else{
player.discardPlayerCard(1,player,true);
trigger.num+=1;        
}        
},
            },
            "nyhzr时空猎人":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('离开是暂时的');                    
},
            },
            "_nyhzr积分获得1":{
                trigger:{
                    source:"dieBefore",
                },
                filter:function (event,player){
return player==game.me;
},
                forced:true,
                content:function (){
game.increaseJifen(1);  
},
            },
            "nyhzr龙人血脉":{
                nobracket:true,
                intro:{
                    content:function (storage){
return '已激活血脉数量：'+storage;
},
                },
                init:function (player){
player.storage.nyhzr龙人血脉=0;
},
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                forced:true,
                silent:true,
                mark:true,
                popup:false,
                content:function (){
'step 0'
if(!player.storage.nyhzr龙人血脉1){
player.storage.nyhzr龙人血脉1=get.time();
event.finish();
}
else{
player.storage.nyhzr龙人血脉2=get.time()-player.storage.nyhzr龙人血脉1;
}
'step 1'
if(player.storage.nyhzr龙人血脉2>=2000){
player.storage.nyhzr龙人血脉++;
player.storage.nyhzr龙人血脉1=get.time();
player.syncStorage('nyhzr龙人血脉');
}
else{
event.finish();
}
'step 2'
if(player.storage.nyhzr龙人血脉==30){
player.logSkill('nyhzr龙人血脉');
player.gainMaxHp();
player.recover();
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉==100){
player.logSkill('nyhzr龙人血脉');
player.gainMaxHp();
player.recover();
game.log(player,'血脉觉醒');
}if(player.storage.nyhzr龙人血脉==175){
player.logSkill('nyhzr龙人血脉');
player.draw(2);
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉==200){
player.logSkill('nyhzr龙人血脉');
player.addSkill('nyhzr龙人血脉_1');
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉==300){
player.logSkill('nyhzr龙人血脉');
if (!player.hasSkill('nyhzr强袭')){
player.addSkill('nyhzr龙人血脉_2');
game.log(player,'血脉觉醒');    
}else{
player.addSkill('nyhzr龙人血脉_3');
game.log(player,'血脉觉醒');        
}
}
},
                subSkill:{
                    "1":{
                        audio:"ext:新英魂之刃:1",
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        content:function (){
player.draw();
},
                    },
                    "2":{
                        mod:{
                            cardUsable:function (card){
            if(get.info(card)&&get.info(card).forceUsable) return;            
            return 2;    
        },
                            targetInRange:function (){
            return true;
        },
                        },
                    },
                    "3":{
                        mod:{
                            cardUsable:function (card){
            if(get.info(card)&&get.info(card).forceUsable) return;            
            return Infinity;    
        },
                            targetInRange:function (){
            return true;
        },
                        },
                    },
                },
            },
            "nyhzr真龙化身":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
                forced:true,
                trigger:{
                    player:"dyingBefore",
                },
                filter:function (event,player){
return player.storage.nyhzr龙人血脉>=300||player.storage.nyhzr龙人血脉<30;
},
                content:function (){ 
if (player.hasSkill('nyhzr强袭')){
player.setAvatar('lnyhzr龙骑士','nyhzr强袭龙魂龙');    
}else if (player.hasSkill('nyhzr暗翼')){
player.setAvatar('lnyhzr龙骑士','nyhzr暗翼骨龙龙');
player.addSkill('nyhzr暗翼锋芒');    
}else if (player.hasSkill('nyhzr星河雷爆')){
player.setAvatar('lnyhzr龙骑士','nyhzr星河雷爆龙');    
}else{
player.setAvatar('lnyhzr龙骑士','lnyhzr龙');    
} 				
player.recover(player.maxHp-player.hp);
player.removeSkill('nyhzr龙人血脉');
player.removeSkill('nyhzr真龙化身');
player.removeSkill('nyhzr星河雷爆');
player.removeSkill('nyhzr龙人血脉_1');
player.removeSkill('nyhzr龙人血脉_2');    
player.removeSkill('nyhzr龙人血脉_3');    
player.storage.nyhzr龙人血脉=0;    
player.syncStorage('nyhzr龙人血脉');
player.discard(player.get("hej"));
player.draw(2);
player.addSkill('nhyzr皎月之力');    
player.addSkill('nyhzr烈阳之力');                       
game.log(player,'血脉爆发');
},
            },
            "nyhzr烈阳之力":{
                nobracket:true,
                audio:"ext:新英魂之刃:2",
                trigger:{
                    player:"phaseBefore",
                },
                unique:true,
                content:function (){
        "step 0"
        event.players=get.players(player);
        event.players.remove(player);
        player.draw(1);
        "step 1"
        if(event.players.length){
            event.players.shift().damage('fire');
            event.redo();
            player.removeSkill("nyhzr烈阳之力");
        }
    },
            },
            "nyhzr龙之咆哮":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
return !player.hasSkill('nyhzr真龙化身')&&player.num('h')>2;
},
                content:function (){
                player.discard(player.get("h"));
                player.draw();
                trigger.player.removeSkill(trigger.player.skills.randomGet());    
    },
                check:function (event,player){                    
if(player.num('h')>4) return false;                        
if(player.hp<=1) return false;                    
if(player.identity==event.player.identity) return false;
if(event.player.identity=='zhu'&&player.identity=='zhong') return false;
if(player.identity=='zhu'&&event.player.identity=='zhong') return false;   
return true;
},
            },
            "nyhzr龙之吐息":{
                nobracket:true,
                trigger:{
                    player:"dieBefore",
                },
                filter:function (event,player){
return !player.hasSkill('nyhzr真龙化身');
},
                content:function (){
                    player.useSkill('nyhzr烈阳之力');
    },
            },
            "nyhzr魔龙化身":{
                nobracket:true,
            },
            "nyhzr龙骑士":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('魔龙的力量消失了');                    
},
            },
            "nyhzr三重卡组":{
                nobracket:true,
    group:["nyhzr三重卡组_1","nyhzr三重卡组_2"],
    subSkill:{
        1:{
audio:"ext:新英魂之刃:2",
trigger:{
player:"phaseBefore",
},
forced:true,
content:function (){
var names=["KAnyhzr龙人血脉","KAnyhzr龙之咆哮","KAnyhzr龙之吐息","KAnyhzr真龙形态","KAnyhzr嗜血","KAnyhzr血蚀之河","KAnyhzr血虐暴风","KAnyhzr血祭启示录","KAnyhzr骄阳陨落","KAnyhzr逐阳","KAnyhzr燎火之箭","KAnyhzr穿云箭","KAnyhzr血肉钩索","KAnyhzr腐蚀瘟疫","KAnyhzr腐肉吸噬","KAnyhzr致命啃咬","KAnyhzr仙灵伙伴","KAnyhzr奥妙冲击","KAnyhzr迷藏印记","KAnyhzr闪耀之光","KAnyhzr恶魔冲锋","KAnyhzr恐惧结界","KAnyhzr镰刀挥舞","KAnyhzr恐惧镰刀","KAnyhzr幽影之蜕","KAnyhzr暗夜蛛毒","KAnyhzr猎物锁定","KAnyhzr女皇神威","KAnyhzr超时空战斧","KAnyhzr断裂时空","KAnyhzr时空道标","KAnyhzr逝时若光","KAnyhzr闪电感染","KAnyhzr雷霆之环","KAnyhzr灾祸匣","KAnyhzr毁灭指针","KAnyhzr炽天使","KAnyhzr圣光惩戒","KAnyhzr光明圣礼","KAnyhzr天之罚"];
if (player.num('h',{name:'KAnyhzr龙之吐息'})>0){
names.remove('KAnyhzr龙之吐息');	
}
if (player.num('h',{name:'KAnyhzr龙之咆哮'})>0){
names.remove('KAnyhzr龙之咆哮');	
}
if (player.num('h',{name:'KAnyhzr龙人血脉'})>0){
names.remove('KAnyhzr龙人血脉');	
}
if (player.num('h',{name:'KAnyhzr真龙形态'})>0){
names.remove('KAnyhzr真龙形态');	
}
if (player.num('h',{name:'KAnyhzr嗜血'})>0){
names.remove('KAnyhzr嗜血');	
}
if (player.num('h',{name:'KAnyhzr血蚀之河'})>0){
names.remove('KAnyhzr血蚀之河');	
}
if (player.num('h',{name:'KAnyhzr血虐暴风'})>0){
names.remove('KAnyhzr血虐暴风');	
}
if (player.num('h',{name:'KAnyhzr血祭启示录'})>0){
names.remove('KAnyhzr血祭启示录');	
}
if (player.num('h',{name:'KAnyhzr骄阳陨落'})>0){
names.remove('KAnyhzr骄阳陨落');	
}
if (player.num('h',{name:'KAnyhzr逐阳'})>0){
names.remove('KAnyhzr逐阳');	
}
if (player.num('h',{name:'KAnyhzr燎火之箭'})>0){
names.remove('KAnyhzr燎火之箭');	
}
if (player.num('h',{name:'KAnyhzr穿云箭'})>0){
names.remove('KAnyhzr穿云箭');	
}
if (player.num('h',{name:'KAnyhzr血肉钩索'})>0){
names.remove('KAnyhzr血肉钩索');	
}
if (player.num('h',{name:'KAnyhzr腐蚀瘟疫'})>0){
names.remove('KAnyhzr腐蚀瘟疫');	
}
if (player.num('h',{name:'KAnyhzr腐肉吸噬'})>0){
names.remove('KAnyhzr腐肉吸噬');	
}
if (player.num('h',{name:'KAnyhzr致命啃咬'})>0){
names.remove('KAnyhzr致命啃咬');	
}
if (player.num('h',{name:'KAnyhzr仙灵伙伴'})>0){
names.remove('KAnyhzr仙灵伙伴');	
}
if (player.num('h',{name:'KAnyhzr奥妙冲击'})>0){
names.remove('KAnyhzr奥妙冲击');	
}
if (player.num('h',{name:'KAnyhzr迷藏印记'})>0){
names.remove('KAnyhzr迷藏印记');	
}
if (player.num('h',{name:'KAnyhzr闪耀之光'})>0){
names.remove('KAnyhzr闪耀之光');	
}
if (player.num('h',{name:'KAnyhzr恶魔冲锋'})>0){
names.remove('KAnyhzr恶魔冲锋');	
}
if (player.num('h',{name:'KAnyhzr恐惧结界'})>0){
names.remove('KAnyhzr恐惧结界');	
}
if (player.num('h',{name:'KAnyhzr镰刀挥舞'})>0){
names.remove('KAnyhzr镰刀挥舞');	
}
if (player.num('h',{name:'KAnyhzr恐惧镰刀'})>0){
names.remove('KAnyhzr恐惧镰刀');	
}
if (player.num('h',{name:'KAnyhzr幽影之蜕'})>0){
names.remove('KAnyhzr幽影之蜕');	
}
if (player.num('h',{name:'KAnyhzr暗夜蛛毒'})>0){
names.remove('KAnyhzr暗夜蛛毒');	
}
if (player.num('h',{name:'KAnyhzr猎物锁定'})>0){
names.remove('KAnyhzr猎物锁定');	
}
if (player.num('h',{name:'KAnyhzr女皇神威'})>0){
names.remove('KAnyhzr女皇神威');	
}
if (player.num('h',{name:'KAnyhzr超时空战斧'})>0){
names.remove('KAnyhzr超时空战斧');	
}
if (player.num('h',{name:'KAnyhzr断裂时空'})>0){
names.remove('KAnyhzr断裂时空');	
}
if (player.num('h',{name:'KAnyhzr时空道标'})>0){
names.remove('KAnyhzr时空道标');	
}
if (player.num('h',{name:'KAnyhzr逝时若光'})>0){
names.remove('KAnyhzr逝时若光');	
}
if (player.num('h',{name:'KAnyhzr闪电感染'})>0){
names.remove('KAnyhzr闪电感染');	
}
if (player.num('h',{name:'KAnyhzr雷霆之环'})>0){
names.remove('KAnyhzr雷霆之环');	
}
if (player.num('h',{name:'KAnyhzr灾祸匣'})>0){
names.remove('KAnyhzr灾祸匣');	
}
if (player.num('h',{name:'KAnyhzr毁灭指针'})>0){
names.remove('KAnyhzr毁灭指针');	
}
if (player.num('h',{name:'KAnyhzr炽天使'})>0){
names.remove('KAnyhzr炽天使');	
}
if (player.num('h',{name:'KAnyhzr圣光惩戒'})>0){
names.remove('KAnyhzr圣光惩戒');	
}
if (player.num('h',{name:'KAnyhzr光明圣礼'})>0){
names.remove('KAnyhzr光明圣礼');	
}
if (player.num('h',{name:'KAnyhzr天之罚'})>0){
names.remove('KAnyhzr天之罚');	
}
if (!player.hasSkill('nyhzr星钻之力')){
if (player.storage.nyhzr三重卡组<=0||player.storage.nyhzr三重卡组==undefined){
player.gain(game.createCard(names.randomGet()));
game.log(player,'获得一张技能牌');
player.storage.nyhzr三重卡组=1;	
}else{
player.storage.nyhzr三重卡组-=1;	
}
}else{
player.gain(game.createCard(names.randomGet()));
game.log(player,'获得一张技能牌');	
}

}
        },
        2:{
audio:"ext:新英魂之刃:1",
trigger:{
	player:'phaseEnd'
	},
forced:true,
content:function (){
game.removeCard2('KAnyhzr龙人血脉');	
game.removeCard2('KAnyhzr龙之咆哮');	
game.removeCard2('KAnyhzr龙之吐息');	
game.removeCard2('KAnyhzr真龙形态');	
game.removeCard2('KAnyhzr嗜血');	
game.removeCard2('KAnyhzr血蚀之河');	
game.removeCard2('KAnyhzr血虐暴风');	
game.removeCard2('KAnyhzr血祭启示录');		
game.removeCard2('KAnyhzr骄阳陨落');	
game.removeCard2('KAnyhzr逐阳');	
game.removeCard2('KAnyhzr燎火之箭');	
game.removeCard2('KAnyhzr穿云箭');
game.removeCard2('KAnyhzr血肉钩索');	
game.removeCard2('KAnyhzr腐蚀瘟疫');	
game.removeCard2('KAnyhzr腐肉吸噬');	
game.removeCard2('KAnyhzr致命啃咬');	
game.removeCard2('KAnyhzr仙灵伙伴');	
game.removeCard2('KAnyhzr奥妙冲击');	
game.removeCard2('KAnyhzr迷藏印记');	
game.removeCard2('KAnyhzr闪耀之光');	
game.removeCard2('KAnyhzr恶魔冲锋');	
game.removeCard2('KAnyhzr恐惧结界');	
game.removeCard2('KAnyhzr镰刀挥舞');	
game.removeCard2('KAnyhzr恐惧镰刀');	
game.removeCard2('KAnyhzr幽影之蜕');	
game.removeCard2('KAnyhzr暗夜蛛毒');	
game.removeCard2('KAnyhzr猎物锁定');	
game.removeCard2('KAnyhzr女皇神威');	
game.removeCard2('KAnyhzr超时空战斧');	
game.removeCard2('KAnyhzr断裂时空');	
game.removeCard2('KAnyhzr时空道标');	
game.removeCard2('KAnyhzr逝时若光');	
game.removeCard2('KAnyhzr闪电感染');	
game.removeCard2('KAnyhzr雷霆之环');	
game.removeCard2('KAnyhzr灾祸匣');	
game.removeCard2('KAnyhzr毁灭指针');	
game.removeCard2('KAnyhzr炽天使');	
game.removeCard2('KAnyhzr圣光惩戒');	
game.removeCard2('KAnyhzr光明圣礼');	
game.removeCard2('KAnyhzr天之罚');		
game.removeCard2('KAnyhzr王牌');		
}
       },
    },			
            },
            "nyhzr极速冲击":{
                audio:"ext:新英魂之刃:3",
                nobracket:true,
    enable:"phaseUse",
	usable:1,
    filterCard:true,
    selectCard:1,
    discard:false,
    prepare:"give",
    filterTarget:function (card,player,target){
        return player!=target;
    },
    filterCard:function(card){		
        return get.type(card)=='技能';
    },	
    check:function (card){		
        return 100-get.value(card);
		if(player.hp==player.maxHp){
		return 0;
		};
    },
    content:function (){
        target.gain(cards,player);
		if (player.hasSkill('nyhzr三重卡组')){
		player.recover();	
		}
    },
    ai:{
		order:0,
        result:{
            target:function (player,target){
                if(target.hasJudge('lebu')) return 0;
                var nh=target.countCards('h');
                var np=player.countCards('h');
                if(player.hp==player.maxHp||player.storage.rende<0||player.countCards('h')<=1){
                    if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
                }
                return Math.max(1,5-nh);
            },
        },
        effect:{
            target:function (card,player,target){
                if(player==target&&get.type(card)=='equip'){
                    if(player.countCards('e',{subtype:get.subtype(card)})){
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(players[i]!=player&&get.attitude(player,players[i])>0){
                                return 0;
                            }
                        }
                    }
                }
            },
        },
    },				
            },
            "nyhzr强效魔卡":{
                audio:"ext:新英魂之刃:2",
                nobracket:true,			
    enable:"phaseUse",
	usable:1,
    filterCard:true,
    selectCard:1,
    filterCard:function(card){
        return get.type(card)=='技能';
    },	
    check:function (card){
        return 100-get.value(card);
    },
    content:function (){
    player.changeHujia();
    player.update();
	if(Math.random()<=0.35&&player.hasSkill('nyhzr三重卡组')){
	player.useSkill('nyhzr三重卡组_1');	
	};
    },
                ai:{
                    order:0.5,
                },						
      },           
			"nyhzr魔卡出击":{
                audio:"ext:新英魂之刃:3",
                nobracket:true,				
    enable:"phaseUse",
	usable:1,
    filterCard:true,
    selectCard:2,
    filterTarget:function (card,player,target){
        return player!=target;
    },
    filterCard:function(card){
        return get.type(card)=='技能';
    },	
    check:function (card){
        return 100-get.value(card);
    },
    content:function (){
        target.damage();
		if (player.hasSkill('nyhzr三重卡组')){
		player.draw();	
		}
    },
                ai:{
                    order:1,
                    result:{                        
					player:function (player){
					return  10;
					},
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },		
      }, 			
            "nyhzr侍从":{		
            },                         
			"nyhzr幻卡魔女":{
                nobracket:true,
            },
            "nyhzr艾迪兰":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('再见了，我挚爱的世界');                    
},
            },
            "nyhzr钻能使":{
                nobracket:true,				
			},
            "nyhzr第二人类":{
                nobracket:true,				
			},
            "nyhzr钻石能量":{
                nobracket:true,	
trigger:{
global:"gameStart",
},
filter:function (event,player){     
return game.hasPlayer(function(target){
return player!=target&&target.hasSkill('nyhzr钻石能量')&&player.identity==target.identity;
        });
    },
forced:true,	
content:function (){
player.storage._Pifunyhzr第二人类=0;	
for(var i=0;i<game.players.length;i++){
if (game.players[i].hasSkill('nyhzr钻石能量')){
game.players[i].init(game.players[i].name,'cnyhzr超能企鹅');
game.players[i].addSkill('nyhzr钻石能量1');	
}	
};
game.showIdentity();
}	
			},
            "nyhzr钻石能量1":{	
trigger:{
player:"dyingBegin",
},
filter:function (event,player){     
return game.hasPlayer(function(target){
return player!=target&&target.hasSkill('nyhzr钻石能量')&&player.identity==target.identity;
        });
    },
forced:true,	
content:function (){	
for(var i=0;i<game.players.length;i++){
if (game.players[i].hasSkill('nyhzr钻石能量')){	
game.players[i].init(game.players[i].name,game.players[i].name);
game.players[i].removeSkill('nyhzr钻石能量1');	
}	
};
game.showIdentity();
trigger.untrigger();
trigger.finish();
if (game.players.length+game.dead.length<8){
var pl=game.addPlayer();
pl.side=player.side;
pl.identity=player.identity;
if(pl.identity=='zhu'){
pl.identity='zhong';
};
pl.draw(4);
pl.node.identity.dataset.color=pl.identity;
pl.init('cnyhzr超能企鹅');
pl.maxHp=2;
pl.hp=2;
pl.update();
game.showIdentity();
}
}	
			},			
            "nyhzr钻能光球":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
                trigger:{
                    player:"gainEnd",
                },
				usable:1,
				filter:function (event,player){ 
	    			return player.num('h')>0;
				},				
                check:function(event,player){
                	return player.num('h')>2;
                },	
                content:function (){
                	player.showCards(player.get('h'));					
                	player.chooseToDiscard(1,'h',true);
                	player.draw(1);
                	if(player.storage.nyhzr钻能光球==undefined) player.storage.nyhzr钻能光球=0;
                	player.markSkill('nyhzr钻能光球');
                	player.storage.nyhzr钻能光球+=1;    
                	player.syncStorage('nyhzr钻能光球'); 
                	game.log(player,'获得一个钻能');         
                },
                intro:{
                    content:function (storage){
                    	return '当前有'+storage+'个钻能'
                    },
                },            				
			},	
            "nyhzr钻能保护":{
                nobracket:true,
                audio:"ext:新英魂之刃:4",
trigger:{
player:["damageBegin","discardBegin"],
},
filter:function (event,player){
return player.storage.nyhzr钻能光球>=2;
},
content:function (){
player.storage.nyhzr钻能光球-=2;    
player.syncStorage('nyhzr钻能光球'); 
player.say('钻能保护！');
trigger.untrigger();
trigger.finish();
}				
				},
            "nyhzr钻能射线":{
        nobracket:true,
        audio:"ext:新英魂之刃:3",
        enable:"phaseUse",
        usable:1,
        filterTarget:function (card,player,target){
            return player!=target;
        },
        filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            return game.players[i].num('h')>0&&player.storage.nyhzr钻能光球>=2;
        }
        },
        prompt:"请选择1名角色",
        content:function (){
        "step 0"			
        player.storage.nyhzr钻能光球-=2;    
        player.syncStorage('nyhzr钻能光球'); 		
        "step 1"
        target.chooseControl('basic','equip','trick','delay').ai=function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'equip';
                case 1:case 4:case 5:return 'basic';
                case 2:return 'trick';
                case 3:return 'delay';
            }
        };
        "step 2"
        game.log(target,'选择了'+get.translation(result.control));
        event.choice=result.control;
        target.popup(event.choice);
        var players=[];
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&game.players[i].num('h')){
                players.push(game.players[i]);
            }
        }
        if(!players.length){
            event.finish();
            return;
        }
        var target1=players.randomGet();
        event.card=target.get('h').randomGet();
        target1.showCards(event.card);
        game.delay();
        "step 3"
        if(get.type(event.card)!=event.choice){
            target.damage(1);
            player.recover();
            }else{
                event.finish();    
            }    
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                return -ai.get.attitude(player,target);
            },
                    },
                    expose:0.2,
                },            
				},
            "nyhzr布丁":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('梦里，家园依旧');                    
},
            },	
            "nyhzr跃迁轰炸":{
                nobracket:true,				
    group:["nyhzr跃迁轰炸_1111","nyhzr跃迁轰炸_2222"],
    subSkill:{
        1111:{
                mod:{
                    maxHandcard:function (player,num){
                        if(player.storage.nyhzr跃迁轰炸_1111!=undefined) return num+player.storage.nyhzr跃迁轰炸_1111;
						return num
                    },
                },			
                audio:"ext:新英魂之刃:4",
                trigger:{
                    source:"damageEnd",
                },	
				forced:true,
                content:function (){
if(player.storage.nyhzr跃迁轰炸_1111==undefined) player.storage.nyhzr跃迁轰炸_1111=0;
player.markSkill('nyhzr跃迁轰炸_1111');
player.storage.nyhzr跃迁轰炸_1111+=1;    
player.syncStorage('nyhzr跃迁轰炸_1111'); 
game.log(player,'获得一个钻能');       
},
                marktext:"钻",
                intro:{
                    content:function (storage){
 return '当前有'+storage+'个钻能'
},
                }, 
        },
        2222:{
                trigger:{
                    source:"damageAfter",
                },	
                check:function(event,player){
                	 return false;
                },				
                content:function (){
				player.useSkill('nyhzr光钻尘雾')	
				},      
        },
    },				            				
			},	
            "nyhzr光钻尘雾":{
			nobracket:true,	
			audio:"ext:新英魂之刃:4",		
			enable:"phaseUse",
			usable:1,
			forced:true,
			popup:false,
			silent:true,
			filter:function (event,player){
				return player.storage.nyhzr跃迁轰炸_1111>=1;
			},			
			content:function(){
				player.storage.nyhzr跃迁轰炸_1111-=1;
				player.syncStorage('nyhzr跃迁轰炸_1111'); 
				game.log(player,'的一个钻能化为尘雾，记忆当前游戏');				
				var handcards1,handcards2,judges,equips,viewAs,i,j;
				player.storage.nyhzr光钻尘雾=[];
				player.storage.nyhzr光钻尘雾2=false;
				var table=document.createElement('table');
				var tr,td,str,st;
				for(i=0;i<game.players.length;i++){
					viewAs=[];
					handcards1=[];
					handcards2=[];
					judges=[];
					equips=[];
					for(j=0;j<game.players[i].node.handcards1.childNodes.length;j++)
						handcards1.push(game.players[i].node.handcards1.childNodes[j]);
					for(j=0;j<game.players[i].node.handcards2.childNodes.length;j++)
						handcards2.push(game.players[i].node.handcards2.childNodes[j]);
					for(j=0;j<game.players[i].node.judges.childNodes.length;j++){
						viewAs.push(game.players[i].node.judges.childNodes[j].viewAs);
						judges.push(game.players[i].node.judges.childNodes[j]);
					}

					for(j=0;j<game.players[i].node.equips.childNodes.length;j++)
					equips.push(game.players[i].node.equips.childNodes[j]);
					tr=document.createElement('tr');
					tr.style.verticalAlign='top';
					table.appendChild(tr);
					td=document.createElement('td');
					td.innerHTML=get.translation(game.players[i]);
					tr.appendChild(td);
					td=document.createElement('td');
					td.innerHTML=(handcards1.length+handcards2.length);
					tr.appendChild(td);
					str='';
					if(equips.length+judges.length){
						if(equips.length){
							str+=get.translation(equips);
							if(judges.length){
								str+='、';
							}
						}
						if(judges.length){
							str+=get.translation(judges,'viewAs');
						}
					}
					else{
						str='';
					}
					td=document.createElement('td');
					td.innerHTML=str;
					tr.appendChild(td);
					player.storage.nyhzr光钻尘雾.push({
						player:game.players[i],
						handcards1:handcards1,
						handcards2:handcards2,
						judges:judges,
						equips:equips,
						viewAs:viewAs,
						value:handcards1.length+handcards2.length+equips.length-judges.length
					});
				}
				table.firstChild.firstChild.style.width='85px';
				table.firstChild.childNodes[1].style.width='48px';
				player.storage.nyhzr光钻尘雾3='未发动';
			}		
				
				},	
            "nyhzr量能投掷":{
			nobracket:true,	
			audio:"ext:新英魂之刃:3",			
			video:function(player,data){
				if(data){
					for(var i in data){
						var current=game.playerMap[i];
						current.node.handcards1.innerHTML='';
						current.node.handcards2.innerHTML='';
						current.node.equips.innerHTML='';
						current.node.judges.innerHTML='';
						current.directgain(get.infoCards(data[i].h));
						var es=get.infoCards(data[i].e);
						for(var j=0;j<es.length;j++){
							current.$equip(es[j]);
						}
						var js=get.infoCards(data[i].j);
						for(var j=0;j<js.length;j++){
							player.node.judges.appendChild(js[j]);
						}		
					}
					ui.window.classList.remove('zoomout3');
					ui.window.classList.add('zoomin3');
					document.body.appendChild(ui.window);
					setTimeout(function(){
						ui.window.show();
						ui.window.classList.remove('zoomin3');
						setTimeout(function(){
							ui.window.style.transition='';
						},500);
					},100);
				}
				else{
					ui.window.style.transition='all 0.5s';
					ui.window.classList.add('zoomout3');
					ui.window.delete();
					ui.window.hide();
				}
			},
			intro:{
				content:function(storage,player){
					if(true){
						return player.storage.nyhzr光钻尘雾3;
					}
				}
			},
			skillAnimation:true,
			animationColor:'thunder',		
			trigger:{
			player:'phaseBefore'
			},
			unique:true,
			filter:function(event,player){
				if(player.storage.nyhzr光钻尘雾2) return false;
				if(player.storage.nyhzr光钻尘雾) return true;
				return false;
			},
			check:function(event,player){
				 return false;
			},
			init:function(player){
				player.storage.nyhzr光钻尘雾4=0;
			},			
			content:function(){
				"step 0"
				trigger.untrigger();
				trigger.finish();
				'step 1'
				event.player.storage.nyhzr光钻尘雾4++;
				if(game.dead.length>0){ 
					while(game.dead.length){
						game.dead[0].revive();
					}
				}
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]==player) continue;
					if(game.players[i].hp<game.players[i].maxHp) game.players[i].hp=game.players[i].maxHp;
					game.players[i].update();
				}
				"step 2"
				game.delay(0.5);
				"step 3"
				ui.window.style.transition='all 0.5s';
				ui.window.classList.add('zoomout3');
				ui.window.delete();
				ui.window.hide();
				game.delay(0,500);
				game.addVideo('skill',event.player,'nyhzr光钻尘雾');
				"step 4"
				var storage=event.player.storage.nyhzr光钻尘雾;			
				var player,frag;
				var i,j;				
				for(i=0;i<storage.length;i++){
					if(game.players.contains(storage[i].player)){
						player=storage[i].player;
						while(player.node.handcards1.childNodes.length)
							ui.discardPile.appendChild(player.node.handcards1.firstChild);
						while(player.node.handcards2.childNodes.length)
							ui.discardPile.appendChild(player.node.handcards2.firstChild);
						while(player.node.judges.childNodes.length)
							ui.discardPile.appendChild(player.node.judges.firstChild);
						while(player.node.equips.childNodes.length)
							ui.discardPile.appendChild(player.node.equips.firstChild);
					}
				}
				for(i=0;i<storage.length;i++){
					if(game.players.contains(storage[i].player)){
						player=storage[i].player;
						for(j=0;j<storage[i].handcards1.length;j++){
						if(storage[i].handcards1[j].parentNode==ui.discardPile||
							storage[i].handcards1[j].parentNode==ui.cardPile)
							player.node.handcards1.appendChild(storage[i].handcards1[j]);
						}
						for(j=0;j<storage[i].handcards2.length;j++){
							if(storage[i].handcards2[j].parentNode==ui.discardPile||
							storage[i].handcards2[j].parentNode==ui.cardPile)
							player.node.handcards2.appendChild(storage[i].handcards2[j]);
						}
						for(j=0;j<storage[i].equips.length;j++){
							if(storage[i].equips[j].parentNode==ui.discardPile||
							storage[i].equips[j].parentNode==ui.cardPile)
							player.node.equips.appendChild(storage[i].equips[j]);
						}
						for(j=0;j<storage[i].judges.length;j++){
							if(storage[i].judges[j].parentNode==ui.discardPile||
							storage[i].judges[j].parentNode==ui.cardPile){
								storage[i].judges[j].viewAs=storage[i].viewAs[j];
								player.node.judges.appendChild(storage[i].judges[j]);
							}
						}
						player.update();
					}
				}
				game.delay(0,100);
				ui.window.classList.remove('zoomout3');
				ui.window.classList.add('zoomin3');
				document.body.appendChild(ui.window);
				var data={};
				for(var i=0;i<game.players.length;i++){
					data[game.players[i].dataset.position]={
						h:get.cardsInfo(game.players[i].get('h')),
						e:get.cardsInfo(game.players[i].get('e')),
						j:get.cardsInfo(game.players[i].get('j'))
					}
				}
				game.addVideo('skill',event.player,['nyhzr光钻尘雾',data]);
				"step 5"
				ui.window.show();
				ui.window.classList.remove('zoomin3');
				setTimeout(function(){
					ui.window.style.transition='';
					game.resume();
				},500);
				event.player.storage.nyhzr光钻尘雾3='已发动'+event.player.storage.nyhzr光钻尘雾4+'次';
				game.pause();
				'step 6'
				var player=event.player;
				if(player.hp<player.maxHp) player.hp=player.maxHp;
				player.update();
				ui.control.innerHTML='';
				ui.discardPile.innerHTML='';
			},
				},	
            "nyhzr布鲁":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('晶火熄灭了，我将回归于晨雾');                    
},
            },	
            "nyhzr冰上漫滑":{
                nobracket:true,
                audio:"ext:新英魂之刃:6",
                enable:"phaseUse",
                filterTarget:true,
                createDialog:function (player,target,onlylist){
        var names=[];
        var list=[];
        if(target.name&&!target.isUnseen(0)) names.add(target.name);
        if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
        if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
        var pss=player.getSkills();
        for(var i=0;i<names.length;i++){
            var info=lib.character[names[i]];
            if(info){
                var skills=info[3];
                for(var j=0;j<skills.length;j++){
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                        !pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }
            }
        }
        if(onlylist) return list;
        var dialog=ui.create.dialog('冰上漫滑');
        dialog.add('选择送出一项技能');
        _status.event.list=list;
        var clickItem=function(){
            _status.event._result=this.link;
            game.resume();
        };
        for(i=0;i<list.length;i++){
            if(lib.translate[list[i]+'_info']){
                var translation=get.translation(list[i]);
                if(translation[0]=='新'&&translation.length==3){
                    translation=translation.slice(1,3);
                }
                else{
                    translation=translation.slice(0,2);
                }
                var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">【'+
                translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        return dialog;
    },
                content:function (){
        "step 0"
            event.dialog=lib.skill.nyhzr冰上漫滑.createDialog(target,player);
            event.switchToAuto=function(){
                event._result=event.skillai(event.list);
                game.resume();
            };
            _status.imchoosing=true;
            game.pause();
        "step 1"
        _status.imchoosing=false;
        if(event.dialog){
            event.dialog.close();
        }
        var link=result;		
        target.addTempSkill(result,{player:'phaseEnd'});
        game.log(target,'获得了技能','【'+get.translation(link)+'】');		
        player.addTempSkill('nyhzr企鹅导弹1',{player:'phaseEnd'});
    },          				
				},
            "nyhzr企鹅导弹":{
                nobracket:true,							
				},				
            "nyhzr企鹅导弹1":{
                nobracket:true,
                init:function(player,skill){
                    var skills=player.getSkills(true,false);
                    player.disableSkill(skill,skills);
                },
                onremove:function(player,skill){
                    player.enableSkill(skill);
                },
				locked:true,
                mark:true,
                intro:{
                    content:function(storage,player,skill){
    					var list=[];
                        for(var i in player.disabledSkills){
                            if(player.disabledSkills[i].contains(skill)){
                                list.push(i)
                            }
                        }
    					if(list.length){
    						var str='失效技能：';
    						for(var i=0;i<list.length;i++){
    							if(lib.translate[list[i]+'_info']){
    								str+=get.translation(list[i])+'、';
    							}
    						}
    						return str.slice(0,str.length-1);
    					}
    				}
                }							
				},	 
            "nyhzr镭射光束":{
			nobracket:true,
            audio:"ext:新英魂之刃:2",
			enable:'phaseUse',
			delay:0,
			direct:true,
			unique:true,
			filter:function(event,player){
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]!=player&&game.players[i].num('hej')){
						return true;
					}
				}
				return false;
			},
			content:function(){
				"step 0"
				player.getStat('skill').nyhzr镭射光束--;
				player.chooseTarget(function(card,player,target){
					return player!=target&&target.num('hej');
				},'请选择1名角色').ai=function(target){
					return -ai.get.attitude(player,target);
				};
				"step 1"
				if(result.bool){
					player.getStat('skill').nyhzr镭射光束++;
					event.target=result.targets[0];
					event.goto(2);
				}
				else{
					event.finish();	
				}
				"step 2"
				var target=event.target;
				event.dialog=ui.create.dialog('hidden');
				event.dialog.add('选择'+get.translation(target)+'的一张卡牌使用');
				event.position='hej';
				var position=event.position;
				for(var i=0;i<position.length;i++){
					if(position[i]=='h'&&target.num('h')){
						event.dialog.add('手牌');
						var hs=target.get('h');
						hs.randomSort();
						event.dialog.add(hs);
					}
					else if(position[i]=='e'&&target.num('e')){
						event.dialog.add('装备牌');
						event.dialog.add(target.get('e'));
					}				
					else if(position[i]=='j'&&target.num('j')){
						event.dialog.add('判定牌');
						event.dialog.add(target.get('j'));
					}
				}
				var dialog=event.dialog;
				var trigger=event.parent.parent;
				player.chooseButton(dialog,function(){return 1}).filterButton=function(button){
					return trigger.filterCard(button.link,player,trigger);
				};
				"step 3"
				if(result.bool){
					player.logSkill('nyhzr镭射光束',event.target);
					event.target.lose(result.links);
					event.target.$give(result.links,player);
					lib.skill.nyhzr镭射光束2.viewAs=result.buttons[0].link;
					event.parent.parent.backup('nyhzr镭射光束2');
					event.parent.parent.step=0;
					if(event.isMine()){
						event.parent.parent.openskilldialog='选择'+get.translation(result.buttons[0].link)+'的目标';
					}
				}				
				player.addTempSkill('nyhzr企鹅导弹1',{player:'phaseEnd'});
			},							
				},				
            "nyhzr镭射光束2":{
            nobracket:true,	
			unique:true,
			filterCard:function(){return false},
			selectCard:-1					
				},				
            "nyhzr毁灭轰击":{
                nobracket:true,
                audio:"ext:新英魂之刃:3",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                content:function (){        
player.useCard({name:'sha'},target);
player.addTempSkill('nyhzr企鹅导弹1',{player:'phaseEnd'});
},
                ai:{
                    order:3,
                    result:{
                        player:function (player){
            return  1;
             },
                        target:function (player,target){
return -ai.get.attitude(player,target);
            },
                    },
                },
            },	
            "nyhzr超能企鹅":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('正义，终将胜利');                    
},
            },	
            "nyhzr黑暗中的剑客":{
                nobracket:true,
            },
            "nyhzr千叶斩":{
nobracket:true,
audio:"ext:新英魂之刃:4",
enable:"phaseUse",
filterTarget:function (card,player,target){
return player!=target;
},
filter:function (event,player){
return player.num('h')>player.hp;
},
content:function (){
"step 0"
if(player.hasSkill('nyhzr勾玉魂刀')&&!player.hasSkill('nyhzr勾玉魂刀1')) player.addSkill('nyhzr勾玉魂刀1');
var qyzsha=get.cardPile(function(card){return card.name=='sha'});
if(qyzsha&&player.num('h')>player.hp){
player.gain(qyzsha,'gain2');
player.useCard(qyzsha,target);
player.chooseToDiscard(1,'h',true);
}else{
event.finish();
player.removeSkill('nyhzr勾玉魂刀1');
if(player.hasSkill('nyhzr幻之分身2')){
player.useCard(qyzsha,target);
};
};
"step 1"
event.goto(0);
    },
            },
            "nyhzr勾玉魂刀1":{
nobracket:true,
trigger:{
source:'damageAfter'
},
forced:true,
content:function (){
trigger.player.addTempSkill('fengyin',{player:'phaseAfter'});
player.getBuff();
}
},			
            "nyhzr勾玉魂刀":{
nobracket:true,
},
            "nyhzr乱刃影舞":{
nobracket:true,
audio:"ext:新英魂之刃:4",
unique:true,
trigger:{
player:"dyingBegin",
},
mark:true,
skillAnimation:true,
animationStr:"乱刃影舞",
animationColor:"metal",
init:function (player){
player.storage.nyhzr乱刃影舞=false;
},
filter:function (event,player){
if(player.storage.nyhzr乱刃影舞) return false;
return true;
},	
content:function (){
if(player.hasSkill('nyhzr勾玉魂刀')&&!player.hasSkill('nyhzr勾玉魂刀2')) player.addSkill('nyhzr勾玉魂刀2');
player.awakenSkill('nyhzr乱刃影舞');
player.storage.nyhzr乱刃影舞=true;
player.recover();
for(i=0;i<5;i++){
player.useCard({name:'sha'},game.players.randomGet());
};
    },
    intro:{
        content:"limited",
    },							
                    

},
            "nyhzr勾玉魂刀2":{
nobracket:true,
trigger:{
source:'damageBegin'
},
forced:true,
content:function (){
player.recover(2);
player.removeSkill('nyhzr勾玉魂刀2');
}
},
            "nyhzr幻之分身":{
nobracket:true,
group:["nyhzr幻之分身_1111","nyhzr幻之分身_2222"],
subSkill:{
1111:{
audio:"ext:新英魂之刃:1",
trigger:{
player:"damageBegin",
},
content:function (){
player.loseHp();
trigger.untrigger();
trigger.finish();
}
},
2222:{
audio:"ext:新英魂之刃:1",
enable:"phaseUse",
usable:1,
content:function (){
player.loseHp();
player.addTempSkill('nyhzr幻之分身2',{player:'phaseAfter'});
}
},
},
	},
            "nyhzr幻之分身2":{
nobracket:true,
marktext:"分",
intro:{},
mark:true,
},
            "nyhzr宫本武藏":{
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
player.say('燃烧的枫叶……凋零');
},
            },
			},
        translate:{
            "nyhzr黑暗中的剑客":"称号",
            "nyhzr黑暗中的剑客_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#080808\">——黑暗中的剑客</span></b>",
            "nyhzr勾玉魂刀2":"勾玉魂刀",
            "nyhzr勾玉魂刀1":"勾玉魂刀",
            "nyhzr勾玉魂刀":"勾玉魂刀",
            "nyhzr勾玉魂刀_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你使用【千叶斩】造成伤害后，你封印目标的技能，持续至其回合末，自身获得随机的正面效果<br>当你使用【乱刃影舞】后，下一次造成的伤害时，你会恢复两点体力",
            "nyhzr千叶斩":"千叶斩",
            "nyhzr千叶斩_info":"出牌阶段，若你的手牌数大于你的体力值，你可以在牌堆中获得一张【杀】并使用，此【杀】结算后，你弃置一张手牌。若你弃置手牌后，手牌数依然大于体力值，你再使用一次【千叶斩】",
            "nyhzr乱刃影舞":"乱刃影舞",
            "nyhzr乱刃影舞_info":"限定技，你进入濒死阶段前,你可以恢复一点体力并对五个随机目标使用【杀】",
            "nyhzr幻之分身2":"幻之分身",
            "nyhzr幻之分身":"幻之分身",
            "nyhzr幻之分身_info":"当你受到伤害时，你可以创造分身来完全免疫此次伤害<br>出牌阶段，你可以创造分身，当你使用【千叶斩】时可以无条件地额外使用一张【杀】<br><br>注：<br>创造分身时会消耗一点体力",
            "nyhzr冰上漫滑":"冰上漫滑",
            "nyhzr冰上漫滑_info":"出牌阶段，你可以令一名角色获得你的一项技能,持续至其回合末",
            "nyhzr企鹅导弹1":"企鹅导弹",		
            "nyhzr企鹅导弹":"企鹅导弹",
            "nyhzr企鹅导弹_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每当你于回合内发动超能企鹅的技能时，你引爆自身的导弹，失去所有技能，持续至回合末",			
            "nyhzr镭射光束2":"镭射光束",			
            "nyhzr镭射光束":"镭射光束",
            "nyhzr镭射光束_info":"出牌阶段，你可以观看一名除自己以外的角色的牌，然后你可以选择一张牌并打出该牌",			
            "nyhzr毁灭轰击":"毁灭轰击",
            "nyhzr毁灭轰击_info":"出牌阶段，你可以对一名除自己以外的角色使用一张【杀】",						
            "nyhzr量能投掷":"量能投掷",
            "nyhzr量能投掷_info":"回合开始前，你可以将游戏恢复至上一次记忆时（若记忆在你的回合中，则你跳过你的回合），恢复后所有角色恢复全部体力",			
            "nyhzr光钻尘雾":"光钻尘雾",
            "nyhzr光钻尘雾_info":"出牌阶段，你可以将一个钻能化为尘雾，记忆当前游戏（体力,印记和座位不在标记范围内），每回合限一次",			
            "nyhzr跃迁轰炸":"跃迁轰炸",
            "nyhzr跃迁轰炸_info":"每次你造成伤害后，你可以发动一次无回合数限制的【光钻尘雾】<br><span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每次你造成伤害后，你获得一个钻能（钻能能增加你的手牌上限）",				
            "nyhzr钻能射线":"钻能射线",
            "nyhzr钻能射线_info":"每回合限一次，出牌阶段，你利用两个钻能来指定1名目标然后从1名随机角色的手牌中随机选择1张卡牌让其猜种类，若猜不中，你对其造成一点伤害，你恢复一点体力",		
            "nyhzr钻能保护":"钻能保护",
            "nyhzr钻能保护_info":"每当你受到伤害或弃牌前，你可以利用两个钻能防止之", 	
            "nyhzr钻能光球":"钻能光球",
            "nyhzr钻能光球_info":"每当你获得牌后，你可以展示你的手牌并弃置其中一张，然后摸一张牌并获得一个钻能，每阶段限一次", 				
            "nyhzr钻石能量1":"钻石能量",
            "nyhzr钻石能量":"钻石能量",			
            "nyhzr钻石能量_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>1.游戏开始时，当有另一名与你势力相同钻能使在场时，你可以与超能企鹅组成双将（此时超能企鹅不能使用皮肤），并亮出全场身份<br>2.你濒死阶段前，若你发动了被动一，你恢复所有体力，然后你的副将变为你的主将并召唤一个与你势力相同且体力上限为2的超能企鹅（此时超能企鹅可以使用皮肤；两个钻能使同时发动时只能召唤一只超能企鹅；游戏人数不小于8时不召唤超能企鹅）", 			
            "nyhzr第二人类":"称号",
            "nyhzr第二人类_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#D2691E\">——第二人类</span></b>", 		
            "nyhzr钻能使":"称号",
            "nyhzr钻能使_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#D1EEEE\">——钻能使</span></b>", 		
            "nyhzr幻卡魔女":"称号",
            "nyhzr幻卡魔女_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#FFE1FF\">——幻卡魔女</span></b>",           
            "nyhzr三重卡组":"三重卡组",
            "nyhzr三重卡组_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>每两个回合开始前，你获得一张手牌中没有的技能牌，若你已将所有技能牌获取完，你获得一张牌<li>回合结束后，你移除弃牌堆中的技能牌<li>当你的技能牌用于给予时，你回复一点体力<li>当你的技能牌用于伤害时，你摸一张牌<li>当你的技能牌用于增加护甲时，你有35%触发一次【三重卡组】获得牌效果",	            
            "nyhzr强效魔卡":"强效魔卡",
            "nyhzr强效魔卡_info":"出牌阶段，你可以用一张技能牌来增加一点护甲，每回合限一次",		            
            "nyhzr极速冲击":"极速冲击",
            "nyhzr极速冲击_info":"出牌阶段，你可以将一张技能牌给予任一一名角色，每回合限一次",		
            "nyhzr魔卡出击":"魔卡出击",
            "nyhzr魔卡出击_info":"出牌阶段，你可以用两张技能牌对你指定的目标造成一点伤害，每回合限一次",		
            "nyhzr魔龙化身":"称号",
            "nyhzr魔龙化身_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#8B008B\">——魔龙化身</span></b>",
            "nyhzr龙骑士":"龙骑士",
            "nyhzr龙骑士_info":"",
            "nyhzr龙之吐息":"龙之吐息",
            "nyhzr龙之吐息_info":"你死亡前,你可以触发一次【烈阳之力】",
            "nyhzr龙之咆哮":"龙之咆哮",
            "nyhzr龙之咆哮_info":"造成伤害后，若你没有技能【真龙化身】且你的手牌数大于2，你可以弃置所有手牌后摸一张牌，然后随机删除被伤害者一项技能",
            "nyhzr烈阳之力":"烈阳之力",
            "nyhzr烈阳之力_info":"回合开始前，你可以摸一张并对除你以外的所有角色造成一点火属性伤害",
            "nyhzr真龙化身":"真龙化身",
            "nyhzr真龙化身_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>濒死前,若你的龙人血脉没有激活到30点或血脉技能激活完成，你恢复体力至最大值并移除该技能，技能【龙人血脉】和血脉技能，弃置所有手牌区，装备区，判定区里的牌，然后摸两张牌；若技能皮肤皮肤选项处于开启状态，你获得技能【皎月之力】与【烈阳之力】，否则你只获得技能【烈阳之力】",
            "nyhzr龙人血脉":"龙人血脉",
            "nyhzr龙人血脉_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>游戏开始后，每2秒激活一点血脉，当血脉数量为30或为100时，体力上限+1并恢复一点体力；为175时，你摸两张牌；为200时，玩家获得技能（回合开始前摸一张牌）；为300时，玩家获得技能（回合内有使用次数限制的牌，其限制改为2；你使用的牌无距离限制）",
            "_nyhzr积分获得1":"积分获得",
            "_nyhzr积分获得1_info":"",
            "_nyhzr积分":"积分",
            "_nyhzr积分_info":"",
            "nyhzr自然之灵":"称号",
            "nyhzr自然之灵_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#C0FF3E\">——自然之灵</span></b>",
            "nyhzr仙灵伙伴":"仙灵伙伴",
            "nyhzr仙灵伙伴_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>回合开始阶段，若你没有妖精皮皮，你召唤一只妖精皮皮",
            "nyhzr闪耀之光":"闪耀之光",
            "nyhzr闪耀之光_info":"出牌阶段限一次，你可以流失一点体力并触发一次【仙灵伙伴】",
            "nyhzr迷藏印记":"迷藏印记",
            "nyhzr迷藏印记_info":"每当你受到伤害时，若你有手牌，你可以牺牲一只妖精皮皮使伤害-1，若游戏人数小于4，你需要弃一张牌",
            "nyhzr奥妙冲击":"奥妙冲击",
            "nyhzr奥妙冲击_info":"出牌阶段限一次，你可以令一只妖精皮皮俯身在一名角色身上并诅咒他",
            "nyhzr仙灵伙伴1":"仙灵伙伴",
            "nyhzr仙灵伙伴1_info":"",
            "nyhzr魅魔公主":"称号",
            "nyhzr魅魔公主_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#CD00CD\">——魅魔公主</span></b>",
            "nyhzr恐惧镰刀":"恐惧镰刀",
            "nyhzr恐惧镰刀_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每次造成伤害时会为自己的噩梦镰刀充能夜魔之力，达到三层时，造成伤害后使对方翻面",
            "nyhzr恐惧结界":"恐惧结界",
            "nyhzr恐惧结界_info":"当一名其他力量角色使用【杀】造成一次伤害后，该角色可令你摸一张牌并令你恢复一点体力",
            "nyhzr恶魔冲锋":"恶魔冲锋",
            "nyhzr恶魔冲锋_info":"出牌阶段，你可以对一名角色造成一点雷属性伤害,使用后删除技能",
            "nyhzr镰刀挥舞":"镰刀挥舞",
            "nyhzr镰刀挥舞_info":"你可以将一张♣手牌当【铁索连环】使用或重铸。所有角色使用【铁索连环】的目标数上限+1",
            "nyhzr恐惧":"恐惧",
            "nyhzr恐惧_info":"",
            "nyhzr骄阳陨落":"骄阳陨落",
            "nyhzr骄阳陨落_info":"回合结束阶段，你可以让场上拥有【血祭启示录】或【嗜血】的角色体力值等于0，若游戏人数小于5，所有其他无【血祭启示录】或【嗜血】技能的角色将技能删至剩余一项；若游戏人数大于或等于5且你的下家无【血祭启示录】或【嗜血】技能，你的下家将技能删至剩余一项，使用后删除此技能",
            "nyhzr燎火之箭":"燎火之箭",
            "nyhzr燎火之箭_info":"你造成伤害前，可以令伤害变为火属性伤害，同时弃置受伤角色装备区所有牌",
            "nyhzr穿云箭":"穿云箭",
            "nyhzr穿云箭_info":"出牌阶段限一次，你可以选择一个目标并弃一张牌，视为对目标使用一张杀",
            "nyhzr逐阳":"逐阳",
            "nyhzr逐阳_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>你的进攻距离+1",
            "nyhzr射日英雄":"称号",
            "nyhzr射日英雄_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#FFFF00\">——射日英雄</span></b>",
            "nyhzr狼蛛":"称号",
            "nyhzr狼蛛_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#9ACD32\">——狼蛛</span></b>",
            "rnyhzr暗夜蛛毒":"暗夜蛛毒",
            "rnyhzr暗夜蛛毒_info":"出牌阶段限一次，你可以流失一点体力令任意目标中蛛毒两个回合",
            "znyhzr暗夜蛛毒":"暗夜蛛毒",
            "znyhzr暗夜蛛毒_info":"当你造成伤害后，你可以进行一次判定，若判定牌颜色为黑色，你一点体力并用蛛毒护体，免疫下一次伤害（免疫伤害效果不可叠加）",
            "rnyhzr猎物锁定":"猎物锁定",
            "rnyhzr猎物锁定_info":"当你使用一张【杀】时，可进行一次判定，若为红色则此【杀】不可闪避，否则此【杀】失效",
            "znyhzr猎物锁定":"猎物锁定",
            "znyhzr猎物锁定_info":"出牌阶段限一次，你可以追猎一名角色，使其下一次受到的伤害+1",
            "nyhzr女皇神威":"女皇神威",
            "nyhzr女皇神威_info":"出牌阶段，你可以释放自己的女皇神威,于本回合内造成伤害+1,造成伤害时恢复一点体力,使用后删除此技能",
            "rnyhzr幽影之蜕":"幽影之蜕",
            "rnyhzr幽影之蜕_info":"回合开始阶段，你可以摸一张牌并跳过出牌阶段，然后转化为蜘蛛形态",
            "znyhzr幽影之蜕":"幽影之蜕",
            "znyhzr幽影之蜕_info":"回合开始阶段，你可以摸一张牌并跳过摸牌阶段，然后转化为人类形态",
            "nyhzr蛛毒":"蛛毒",
            "nyhzr蛛毒_info":"",
            "nyhzr神威":"神威",
            "nyhzr神威_info":"",
            "nyhzr蛛毒护体":"蛛毒护体",
            "nyhzr蛛毒护体_info":"",
            "yhzr追猎":"追猎",
            "yhzr追猎_info":"",
            "nyhzr妮娜":"妮娜",
            "nyhzr妮娜_info":"",
            "nyhzr后羿":"后羿",
            "nyhzr后羿_info":"",
            "nyhzr圣女":"称号",
            "nyhzr圣女_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#FFFFFF\">——圣女</span></b>",
            "nyhzr炽天使":"炽天使",
            "nyhzr炽天使_info":"身份模式下，当你造成伤害时，若被伤害者不为主公或势力与你相同，你可以令其变为炽天使为作战（炽天使不会死亡，除非你死亡），使用后删除此技能与【光明圣礼】",
            "nyhzr圣光惩戒":"圣光惩戒",
            "nyhzr圣光惩戒_info":"每当你造成伤害后，你可以令炽天使对除炽天使外的所有角色造成一点伤害",
            "nyhzr惩戒":"惩戒",
            "nyhzr惩戒_info":"",
            "nyhzr光明圣礼":"光明圣礼",
            "nyhzr光明圣礼_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每回合末，你摸一张牌，有20%概率恢复一点体力",
            "nyhzr天之罚":"天之罚",
            "nyhzr天之罚_info":"若你拥有技能【光明圣礼】，出牌阶段，你可以先自弃一张牌后弃置目标一张牌",
            "nyhzr贞德":"贞德",
            "nyhzr贞德_info":"",
            "nyhzr灾祸匣":"灾祸匣",
            "nyhzr灾祸匣_info":"回合开始阶段，若你为主公，你可以利用摸牌阶段来打开灾祸匣，释放灾祸雷球，若游戏人数小于或等于4，你上家和下家自弃一张牌；若人数大于4，灾祸雷球对你的上家的下家各造成一点雷属性伤害",
            "nyhzr暴君":"称号",
            "nyhzr暴君_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#6A5ACD\">——暴君</span></b>",
            "nyhzr咯哩咯哩":"咯哩咯哩",
            "nyhzr咯哩咯哩_info":"",
            "nyhzr莉莉姆.提露埃拉":"莉莉姆.提露埃拉",
            "nyhzr莉莉姆.提露埃拉_info":"",
            "nyhzr闪电活化":"闪电活化",
            "nyhzr闪电活化_info":"出牌阶段，若游戏人数大于3，你可以与一名随机角色交换座位，然后该角色摸一张牌，每回合限一次",
            "nyhzr毁灭指针":"毁灭指针",
            "nyhzr毁灭指针_info":"出牌阶段，你可以流失一点体力，使技能【闪电活化】变为技能【闪电感染】（闪电感染：出牌阶段，你可以与一名指定角色交换座位，然后对该角色造成一点伤害，自己流失一点体力），使用后删除此技能",
            "nyhzr闪电感染":"闪电感染",
            "nyhzr闪电感染_info":"出牌阶段，你可以与一名指定角色交换座位，然后对该角色造成一点伤害，自己流失一点体力",
            "nyhzr雷霆之环":"雷霆之环",
            "nyhzr雷霆之环_info":"当你死亡前，若你不为主公，你可以令主公获得技能【闪电活化】",
            "nyhzr萨特":"萨特",
            "nyhzr萨特_info":"",
            "nyhzr吸血鬼伯爵":"称号",
            "nyhzr吸血鬼伯爵_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#B22222\">——吸血鬼伯爵</span></b>",
            "nyhzr德古拉":"德古拉",
            "nyhzr德古拉_info":"",
            "nyhzr血虐暴风":"血虐暴风",
            "nyhzr血虐暴风_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>每当你造成伤害后，若被伤害者体力值为0，你获得一点体力上限；若自身体力值为0，你回复一点体力并使被伤害者流失一点体力<li>技能【嗜血】在自身满血时可以过量恢复，溢出的恢复值转化为护甲",
            "nyhzr嗜血":"嗜血",
            "nyhzr嗜血_info":"当你造成伤害后，你可以弃一张牌并恢复一点体力",
            "nyhzr血祭启示录":"血祭启示录",
            "nyhzr血祭启示录_info":"回合开始前，若你的体力值为0，你可以恢复一点体力并指定一名角色，对其造成一点伤害，若游戏人数大于2，你还可以与其交换座位并令其翻面",
            "nyhzr骄阳":"骄阳",
            "nyhzr骄阳_info":"",
            "nyhzr血蚀之河":"血蚀之河",
            "nyhzr血蚀之河_info":"出牌阶段，你可以流失一点体力并发动技能【血祭启示录】,使用后删除技能",
            "nyhzr腐肉吸噬":"腐肉吸噬",
            "nyhzr腐肉吸噬_info":"回合开始前，你可以吸噬场上一半的尸体（向上整取），你恢复x点体力并使下次伤害+x（x为吸噬前的尸体数）",
            "nyhzr罪业狂屠":"称号",
            "nyhzr罪业狂屠_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#CD3278\">——罪业狂屠</span></b>",
            "nyhzr血肉钩索":"血肉钩索",
            "nyhzr血肉钩索_info":"出牌阶段，若游戏人数大于3，你可以将一名其他角色拉到你的下家位置,你的钩子会感染（获得1个瘟疫印记）你选定但没有爆发瘟疫的目标",
            "nyhzr腐蚀瘟疫":"腐蚀瘟疫",
            "nyhzr腐蚀瘟疫_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>回合开始前，除你以外的其他角色均有50%概率获得1个瘟疫印记（你的瘟疫印记可以跨时空标记），每当印记数量等于3时，瘟疫爆发(【瘟疫】：每回合末,若你没有技能【腐蚀瘟疫】，你随机弃一张手牌，否则终止瘟疫并视为你吸收了一具尸体)<li>当一名角色爆发瘟疫后，他的下家和下家获得1个瘟疫标记<li>瘟疫持续回合数为角色的瘟疫印记数",
            "nyhzr瘟疫":"瘟疫",
            "nyhzr瘟疫_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每回合末,若你没有技能【腐蚀瘟疫】，你随机弃一张手牌，否则终止瘟疫并视为你吸收了一具尸体",
            "nyhzr致命啃咬":"致命啃咬",
            "nyhzr致命啃咬_info":"出牌阶段，你可以对一名瘟疫印记大于或大于3的角色造成一点伤害，然后终止其瘟疫效果",
            "nyhzr狂徒":"狂徒",
            "nyhzr狂徒_info":"",
            "nyhzr断裂时空":"断裂时空",
            "nyhzr断裂时空_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>濒死前，若你没有进入过不稳定的时空，你可以恢复体力至一点并进入不稳定的时空中疗养（每回合末恢复一点体力），3回合后你离开当前时空，回原时空中（原时空与不稳定的时空交替进行）",
            "nyhzr时空英雄":"称号",
            "nyhzr时空英雄_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#98F5FF\">——时空英雄</span></b>",
            "nyhzr时空道标":"时空道标",
            "nyhzr时空道标_info":"出牌阶段，你可以令一名出自己以外的角色摸一张牌并标记该角色当前的体力值",
            "nyhzr逝时若光":"逝时若光",
            "nyhzr逝时若光_info":"出牌阶段，你可以令场上【时空道标】标记小于或等于5的角色流失体力至这些角色最后一次被标记过的体力值，使用后删除此技能",
            "nyhzr超时空战斧":"超时空战斧",
            "nyhzr超时空战斧_info":"你造成伤害时，若你的牌数大于或等于二，你可以弃两张牌触发超时空战斧效果：85%使伤害+1，否则劈开时空裂缝，进入不稳定的时空一个回合",
            "nyhzr时空猎人":"时空猎人",
            "nyhzr时空猎人_info":"",						
        },
    },
},files:{"character":[],"card":[],"skill":[]}}})
game.import('play',function(lib,game,ui,get,ai,_status){
	return {
		name:'coin',
		init:function(){
			if(lib.config.mode!='chess'||get.config('chess_mode')!='leader'){
				_status.coin=0;
			};

		},
		arenaReady:function(){
	        if(_status.video||_status.connectMode) return;
			if(lib.config.mode!='chess'||get.config('chess_mode')!='leader'){
				var str;
				str='<span>'+lib.config.coin+'</span><span>金</span>'
				if(lib.config.coin_canvas_playpackconfig){
					ui.window.classList.add('canvas_top');
				}
				ui.coin=ui.create.system(str,null,true);
				if(lib.config.snowFall){
					game.haveFun.list.snow.bought=true;
					setTimeout(function(){
						game.haveFun.snow();
					},500);
				}
				lib.setPopped(ui.coin,function(){
					var uiintro=ui.create.dialog('hidden');
					uiintro.classList.add('coin_menu')
					uiintro.add('商店');
					uiintro.listen(function(e){
						e.stopPropagation();
					});
					var clickBuy=function(){
						if(this.innerHTML=='停止'){
							game.haveFun[this.name+'Stop']();
						}
						else if(this.innerHTML=='开始'){
							game.haveFun[this.name]();
						}
						else if(this.innerHTML.indexOf('金')!=-1){
							if(lib.config.coin>=this.content.cost){
								this.content.bought=true;
								game.changeCoin(-this.content.cost);
								game.haveFun[this.name]();
								if(this.content.onbuy){
									this.content.onbuy.call(this);
								}
							}
							else{
								return;
							}
						}
						ui.click.window();
					};
					for(var i in game.haveFun.list){
						var item=game.haveFun.list[i];
						uiintro.add('<div class="coin_buy">'+item.name+'<div class="menubutton">'+item.cost+'金</span></div></div>');
						var buy=uiintro.content.lastChild.lastChild.lastChild;
						if(lib.config.coin<item.cost&&!item.bought){
							buy.classList.add('disabled');
						}
						if(item.bought){
							if(item.running){
								buy.innerHTML='停止';
								if(item.control){
									var node=item.control();
									if(node){
										buy.parentNode.appendChild(node,buy);
									}
								}
							}
							else{
								buy.innerHTML='开始';
							}
						}
						buy.name=i;
						buy.content=item;
						buy.listen(clickBuy);
					}

					if(!game.phaseNumber&&!game.online){
						uiintro.add('下注');
						uiintro.add('<div class="coin_buy">本局获胜<div class="menubutton">20金</span></div></div>');
						var bet=uiintro.content.lastChild.lastChild.lastChild;
						bet.listen(function(){
							if(_status.betWin) return;
							_status.betWin=true;
							game.changeCoin(-20);
							this.innerHTML='已下注';
						});
						if(_status.betWin){
							bet.innerHTML='已下注';
						}
					}
					else if(_status.betWin){
						uiintro.add('下注');
						uiintro.add('<div class="coin_buy">本局获胜<div class="menubutton">已下注</span></div></div>');
					}

					uiintro.classList.add('noleave');

					return uiintro;
				},220,400);				
			}
	    },
		game:{
			changeCoin:function(num){
				if(typeof num=='number'&&ui.coin){
					game.saveConfig('coin',lib.config.coin+num);
					var str;
					if(lib.config.coin_display_playpackconfig=='text'){
						str='<span>'+lib.config.coin+'</span><span>金</span>'
					}
					else{
						str='<span style="position:absolute">㉤</span><span style="margin-left:18px;font-family:xinwei;line-height:10px">'+lib.config.coin+'</span>';
					}
					ui.coin.innerHTML=str;
				}
			},
			haveFun:{
				list:{
					firework:{
						name:'烟花',
						cost:50,
					},
					snow:{
						name:'下雪',
						cost:20,
						size:'large',
						control:function(){
							var size=ui.create.div('.menubutton');
							if(game.haveFun.list.snow.size=='small'){
								size.innerHTML='大雪';
							}
							else{
								size.innerHTML='小雪';
							}
							size.listen(game.haveFun.snowSize);
							return size;
						}
					},
					star:{
						name:'星云',
						cost:10
					},
					blink:{
						name:'闪烁',
						cost:10
					}
				},
				alwaysSnow:function(){
					game.saveConfig('snowFall',!lib.config.snowFall);
					game.reload();
				},
				blink:function(){
					if(game.haveFun.list.blink.running) return;
					game.haveFun.list.blink.running=true;
					if(game.haveFun.blinkLoop){
						game.haveFun.blinkLoop();
					}
					else{
						var canvas = document.createElement("canvas");
						ui.window.appendChild(canvas);
						canvas.classList.add('fun');
						canvas.style.zIndex=20;
						var ctx = canvas.getContext("2d");

						//Make the canvas occupy the full page
						var W = ui.window.offsetWidth, H = ui.window.offsetHeight;
						canvas.width = W;
						canvas.height = H;
						lib.onresize.push(function(){
							var W = ui.window.offsetWidth, H = ui.window.offsetHeight;
							canvas.width = W;
							canvas.height = H;
						});

						var particles = [];
						var mouse = {};

						//Lets create some particles now
						var particle_count = 25;


						//finally some mouse tracking
						ui.window.addEventListener('mousemove', function(e)
						{
							//since the canvas = full page the position of the mouse
							//relative to the document will suffice
							mouse.x = e.pageX/game.documentZoom;
							mouse.y = e.pageY/game.documentZoom;
						});
						ui.window.addEventListener('touchmove',function(e){
							mouse.x = e.touches[0].clientX/game.documentZoom;
							mouse.y = e.touches[0].clientY/game.documentZoom;
						});

						var particle=function()
						{
							//speed, life, location, life, colors
							//speed.x range = -2.5 to 2.5
							//speed.y range = -15 to -5 to make it move upwards
							//lets change the Y speed to make it look like a flame
							this.speed = {x: -2.5+Math.random()*5, y: -5+Math.random()*10};
							this.speed.x/=4;
							this.speed.y/=4;
							//location = mouse coordinates
							//Now the flame follows the mouse coordinates
							if(mouse.x && mouse.y)
							{
								this.location = {x: mouse.x, y: mouse.y};
							}
							else
							{
								this.location = {x: W/2, y: H/2};
							}
							//radius range = 10-30
							this.radius = 10+Math.random()*20;
							//life range = 20-30
							this.radius/=4;
							this.life = 20+Math.random()*10;
							this.life*=4;
							this.remaining_life = this.life;
							//colors
							this.r = Math.round(Math.random()*255);
							this.g = Math.round(Math.random()*255);
							this.b = Math.round(Math.random()*255);
						}
						for(var i = 0; i < particle_count; i++)
						{
							particles.push(new particle());
						}

						var draw=function()
						{
							if(!game.haveFun.list.blink.running){
								canvas.width=W;
								canvas.height=H;
								return;
							}
							ctx.clearRect(0, 0, W, H);
							//Painting the canvas black
							//Time for lighting magic
							//particles are painted with "lighter"
							//In the next frame the background is painted normally without blending to the
							//previous frame
							ctx.globalCompositeOperation = "lighter";

							for(var i = 0; i < particles.length; i++)
							{
								var p = particles[i];
								ctx.beginPath();
								//changing opacity according to the life.
								//opacity goes to 0 at the end of life of a particle
								p.opacity = Math.round(p.remaining_life/p.life*100)/100
								//a gradient instead of white fill
								var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
								gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
								gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
								gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
								ctx.fillStyle = gradient;
								ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
								ctx.fill();

								//lets move the particles
								p.remaining_life--;
								p.radius-=0.2;
								p.location.x += p.speed.x;
								p.location.y += p.speed.y;

								//regenerate particles
								if(p.remaining_life < 0 || p.radius < 0)
								{
									//a brand new particle replacing the dead one
									particles[i] = new particle();
								}
							}
							requestAnimationFrame(draw);
						}

						draw();
						game.haveFun.blinkLoop=draw;
						game.haveFun.blinkStop=function(){
							game.haveFun.list.blink.running=false;
						}
					}
				},
				star:function(){
					if(game.haveFun.list.star.running) return;
					game.haveFun.list.star.running=true;
					if(game.haveFun.starLoop){
						game.haveFun.starLoop();
					}
					else{
						//******************************************************
						// Yet Another Particle Engine
						var cos = Math.cos,
						    sin = Math.sin,
						    sqrt = Math.sqrt,
						    abs = Math.abs,
						    atan2 = Math.atan2,
						    log = Math.log,
						    random = Math.random,
						    PI = Math.PI,
						    sqr = function(v){return v*v;},
						    particles = [],
						    drawScale = 1,
						    emitters = [],
						    forces  = [],
						    collidedMass = 0,
						    maxParticles = 100,
						    emissionRate = 1,
							minParticleSize = 2;

						//-------------------------------------------------------
						// Vectors, and not the kind you put stuff in
						var Vector=function(x, y, z) {
						  this.x = x || 0;
						  this.y = y || 0;
						  this.z = z || 0;
						}
						Vector.prototype = {
						  add : function(vector) {
						    this.x += vector.x;
						    this.y += vector.y;
						    this.z += vector.z;
						    return this;
						  },
						  subtract : function(vector) {
						    this.x -= vector.x;
						    this.y -= vector.y;
						    this.z -= vector.z;
						    return this;
						  },
						  multiply : function(another) {
						    this.x /= another.x;
						    this.y /= another.y;
						    this.z /= another.z;
						    return this;
						  },
						  divide : function(another) {
						    this.x /= another.x;
						    this.y /= another.y;
						    this.z /= another.z;
						    return this;
						  },
						  scale : function(factor) {
						    this.x *= factor;
						    this.y *= factor;
						    this.z *= factor;
						    return this;
						  },
						  magnitude : function () {
						    return sqrt(sqr(this.x + this.y));
						  },
						  distance : function (another) {
						    return abs(sqrt(sqr(this.x - another.x) + sqr(this.y - another.y)));
						  },
						  angle : function (angle, magnitude) {
						    if(angle && magnitude)
						      return Vector.fromAngle(angle, magnitude);
						    return atan2(this.y, this.x);
						  },
						  clone : function() {
						    return new Vector(this.x, this.y, this.z);
						  },
						  equals : function(another) {
						    return this.x === another.x&&
								this.y === another.y&&
								this.z === another.z;
						  },
						  random : function(r) {
						    this.x += (random() * r * 2) - r;
						    this.y += (random() * r * 2) - r;
						    return this;
						  }
						};
						Vector.fromAngle = function (angle, magnitude) {
						  return new Vector(
						    magnitude * cos(angle),
						    magnitude * sin(angle),
						    magnitude * sin(angle));
						};

						//******************************************************
						// A thing with mass, position, and velocity - like your mom
						var Particle=function(pt, vc, ac, mass) {
						  this.pos = pt || new Vector(0, 0);
						  this.vc = vc || new Vector(0, 0);
						  this.ac = ac || new Vector(0, 0);
						  this.mass = mass || 1;
						  this.alive = true;
						}
						Particle.prototype.move = function () {
						  this.vc.add(this.ac);
						  this.pos.add(this.vc);
						};
						Particle.prototype.reactToForces = function (fields) {
						  var totalAccelerationX = 0;
						  var totalAccelerationY = 0;

						  for (var i = 0; i < fields.length; i++) {
						    var field = fields[i];
						    var vectorX = field.pos.x - this.pos.x;
						    var vectorY = field.pos.y - this.pos.y;
						    var distance = this.pos.distance(field.pos);
						    if(distance < 1) field.grow(this);
						    if(distance < 100) this.doubleSize = true;
						    var force = G(this.forceBetween(field, distance));
						    totalAccelerationX += vectorX * force;
						    totalAccelerationY += vectorY * force;
						  }
						  this.ac = new Vector(totalAccelerationX, totalAccelerationY);

						  totalAccelerationX = 0;
						  totalAccelerationY = 0;
						  for (var i = 0; i < particles.length; i++) {
						    var field = particles[i];
						    if(field === this || !field.alive) continue;
						    var vectorX = field.pos.x - this.pos.x;
						    var vectorY = field.pos.y - this.pos.y;
						    var distance = this.pos.distance(field.pos);
						    if(distance < 1) {
						      if(this.mass >= field.mass) {
						        var massRatio = this.mass / field.mass;
						        if(particles.length <= maxParticles && this.mass>40) {
						          this.alive = false;
						          this.nova = true;
						          collidedMass += this.mass;
						        } else this.grow(field);
						      } else this.alive = false;
						    }
						    if(this.alive) {
						      var force = G(this.forceBetween(field, distance));
						      totalAccelerationX += vectorX * G(force);
						      totalAccelerationY += vectorY * G(force);
						    }
						  }

						  var travelDist = this.pos.distance(this.lastPos ? this.lastPos : this.pos);
						  this.velocity = travelDist - (this.lastDistance ? this.lastDistance : travelDist);
						  this.lastDistance = travelDist;
						  this.lastPos = this.pos.clone();

						  this.ac.add(new Vector(totalAccelerationX, totalAccelerationY));
						  this.lastPos = this.pos.clone();
						  // if(this.mass > 20) {
						  //   var chance = 1 / (this.mass - 20);
						  //   if(Math.random()>chance) {
						  //     this.supernova = true;
						  //     this.supernovaDur = 10;
						  //     this.alive = false;
						  //     if(particles.length <= maxParticles) collidedMass += this.mass;
						  //     delete this.size;
						  //   }
						  // }
						};
						Particle.prototype.grow = function (another) {
						  this.mass += another.mass;
						  this.nova = true;
						  another.alive = false;
						  delete this.size;
						};
						Particle.prototype.breakApart = function(minMass, maxParts) {
						  if(!minMass) minMass = 1;
						  if(!maxParts) maxParts = 2;
						  var remainingMass = this.mass;
						  var num = 0;
						  while(remainingMass > 0) {
						    var np = new Particle(this.pos.clone().random(this.mass), new Vector(0,0));
						    np.mass = 1 + Math.random() * (remainingMass - 1);
						    if(num>=maxParts-1) np.mass = remainingMass;
						    np.mass = np.mass < minMass ? minMass : np.mass;
						    remainingMass -= np.mass;
						    num++;
						  }
						  this.nova = true;
						  delete this.size;
						  this.alive = false;
						};
						Particle.prototype.forceBetween = function(another, distance) {
						  var distance = distance? distance : this.pos.distance(another.pos);
						  return (this.mass * another.mass) / sqr(distance);
						};

						//******************************************************
						//This certainly doesn't *sub*mit to particles, that's for sure
						var ParticleEmitter=function(pos, vc, ang) {
						  // to do config options for emitter - random, static, show emitter, emitter color, etc
						  this.pos = pos;
						  this.vc = vc;
						  this.ang = ang || 0.09;
						  this.color = "#999";
						}
						ParticleEmitter.prototype.emit = function() {
						  var angle = this.vc.angle() +
						      this.ang - (Math.random() * this.ang * 2);
						  var magnitude = this.vc.magnitude();
						  var position = this.pos.clone();
						        position.add(
						        new Vector(
						          ~~((Math.random() * 100) - 50) * drawScale,
						          ~~((Math.random() * 100) - 50) * drawScale
						        ));
						  var velocity = Vector.fromAngle(angle, magnitude);
						  return new Particle(position,velocity);
						};

						//******************************************************
						// Use it, Luke
						// to do collapse functionality into particle
						var Force=function(pos, m) {
						  this.pos = pos;
						  this.mass = m || 100;
						}
						Force.prototype.grow = function (another) {
						  this.mass += another.mass;
						  this.burp = true;
						  another.alive = false;
						};



						var G=function(data) {
						  return 0.00674 * data;
						}

						//******************************************************
						var canvas = document.createElement('canvas');
						canvas.classList.add('fun');
						ui.window.appendChild(canvas);
						var ctx = canvas.getContext('2d');
						canvas.width = ui.window.offsetWidth;
						canvas.height = ui.window.offsetHeight;
						var canvasWidth = canvas.width;
						var canvasHeight = canvas.height;
						lib.onresize.push(function() {
							canvas.width = ui.window.offsetWidth;
							canvas.height = ui.window.offsetHeight;
							canvasWidth = canvas.width;
							canvasHeight = canvas.height;
						});

						var renderToCanvas = function (width, height, renderFunction) {
						    var buffer = document.createElement('canvas');
						    buffer.width = width;
						    buffer.height = height;
						    renderFunction(buffer.getContext('2d'));
						    return buffer;
						};

						maxParticles = 500;
						emissionRate = 1;
						drawScale = 1.3;
						minParticleSize = 2;
						emitters = [
						  //br
						  new ParticleEmitter(
						    new Vector(
						      canvasWidth / 2 * drawScale + 400,
						      canvasHeight / 2 * drawScale
						      ),
						    Vector.fromAngle(2, 5),
						    1
						  ),
						  //   // bl
						  //   new ParticleEmitter(
						  //   new Vector(
						  //     canvasWidth / 2 * drawScale - 400,
						  //     canvasHeight / 2 * drawScale + 400
						  //     ),
						  //   Vector.fromAngle(1.5, 1),
						  //   1
						  // ),
						    // tl
						  new ParticleEmitter(
						    new Vector(
						      canvasWidth / 2 * drawScale - 400,
						      canvasHeight / 2 * drawScale
						      ),
						    Vector.fromAngle(5, 5),
						    1
						  ),
						  //   // tr
						  //   new ParticleEmitter(
						  //   new Vector(
						  //     canvasWidth / 2 * drawScale + 400,
						  //     canvasHeight / 2 * drawScale - 400
						  //     ),
						  //   Vector.fromAngle(4.5, 1),
						  //   1
						  // )
						];
						forces  = [
						  new Force(
						    new Vector((canvasWidth / 2 * drawScale) ,
						               (canvasHeight / 2 * drawScale)), 1800)
						];

						var loop=function() {
							if(!game.haveFun.list.star.running){
								canvas.width=ui.window.offsetWidth;
								canvas.height=ui.window.offsetHeight;
								return;
							}
							clear();
							update();
							draw();
							queue();
						}
						game.haveFun.starLoop=loop;
						game.haveFun.starStop=function(){
							game.haveFun.list.star.running=false;
						};


						var clear=function() {
						  ctx.clearRect(0, 0, canvas.width, canvas.height);
						}

						var ctr = 0;
						var c = [
						  'rgba(255,255,255,',
						  'rgba(0,150,255,',
						  'rgba(255,255,128,',
						  'rgba(255,255,255,'
						];
						var rndc=function() {
						  return c[~~(Math.random() * c.length-1)];
						}
						var c2 = 'rgba(255,64,32,';
						var addNewParticles=function() {
						  var _emit = function() {
						    var ret = 0;
						    for (var i = 0; i < emitters.length; i++) {
						      for (var j = 0; j < emissionRate; j++) {
						        var p = emitters[i].emit();
						        p.color = ( ctr % 10 === 0 )?
								  ( Math.random() * 5 <= 1 ? c2 : rndc() )
						          : rndc();
						        p.mass = ~~(Math.random() * 5);
						        particles.push(p);
						        ret += p.mass;
						        ctr++;
						      }
						    }
						    return ret;
						  };
						  if(collidedMass !== 0) {
						    while(collidedMass !== 0) {
						      collidedMass -= _emit();
						      collidedMass = collidedMass<0 ? 0 :collidedMass;
						    }
						  }
						  if (particles.length > maxParticles)
						    return;
						  _emit();
						}

						var CLIPOFFSCREEN = 1,
						    BUFFEROFFSCREEN = 2,
						    LOOPSCREEN = 3;

						var isPositionAliveAndAdjust=function(particle,check) {
						  return true;
						//   var pos = particle.pos;
						//   if(!check) check = BUFFEROFFSCREEN;
						//   if(check === CLIPOFFSCREEN) {
						//     return !(!particle.alive ||
						//              pos.x < 0 ||
						//              (pos.x / drawScale) > boundsX ||
						//              pos.y < 0 ||
						//              (pos.y / drawScale) > boundsY);
						//   } else if(check === BUFFEROFFSCREEN) {
						//     return !(!particle.alive ||
						//              pos.x < -boundsX * drawScale ||
						//              pos.x > 2 * boundsX * drawScale ||
						//              pos.y < -boundsY * drawScale ||
						//              pos.y > 2 * boundsY * drawScale);
						//   } else if(check === LOOPSCREEN) {
						//     if (pos.x < 0) pos.x = boundsX * drawScale;
						//     if ((pos.x / drawScale) > boundsX) pos.x = 0;
						//     if (pos.y < 0) pos.y = boundsY * drawScale;
						//     if ((pos.y / drawScale) > boundsY) pos.y = 0;
						//     return true;
						//   }
						}

						var plotParticles=function(boundsX, boundsY) {
						  var currentParticles = [];
						  for (var i = 0; i < particles.length; i++) {
						    var particle = particles[i];
						    particle.reactToForces(forces);
						    if(!isPositionAliveAndAdjust(particle))
						      continue;
						    particle.move();
						    currentParticles.push(particle);
						  }
						}

						var offscreenCache = {};
						var renderParticle=function(p) {
						    var position = p.pos;
						    if(!p.size) p.size = Math.floor(p.mass / 100);


						    if(!p.opacity) p.opacity = 0.05;
						    if(p.velocity > 0) {
						      if(p.opacity<=0.18)
						        p.opacity += 0.04;
						    }
						      if(p.opacity>0.08)
						        p.opacity -= 0.02;

						    var actualSize = p.size / drawScale;
						    actualSize = actualSize < minParticleSize ? minParticleSize : actualSize;
						    if(p.mass>8) actualSize *= 2;
						    if(p.nova) {
						      actualSize *= 4;
						      p.nova = false;
						    }
						    if(p.doubleSize) {
						      p.doubleSize = false;
						      actualSize *= 2;
						    }
						    // if(p.supernova) {
						    //   actualSize *= 6;
						    //   opacity = 0.15;
						    //   p.supernovaDur = p.supernovaDur - 1;
						    //   if(p.supernovaDur === 0)
						    //     p.supernova = false;
						    // }
						    var cacheKey = actualSize + '_' + p.opacity + '_' + p.color;
						    var cacheValue = offscreenCache[cacheKey];
						    if(!cacheValue) {
						      cacheValue = renderToCanvas(actualSize * 32, actualSize * 32, function(ofsContext) {
						        var opacity = p.opacity;
						        var fills = [
						          {size:actualSize/2,  opacity:1},
						          {size:actualSize,  opacity:opacity},
						          {size:actualSize * 2, opacity:opacity / 2},
						          {size:actualSize * 4, opacity:opacity / 3},
						          {size:actualSize * 8, opacity:opacity / 5},
						          {size:actualSize * 16, opacity:opacity / 16}
						        ];
						        ofsContext.beginPath();
						        for(var f in fills) {
						          f = fills[f];
						          ofsContext.fillStyle = p.color + f.opacity + ')';
						          ofsContext.arc(
						            actualSize * 16,
						            actualSize * 16,
						            f.size , 0, Math.PI*2, true);
						          ofsContext.fill();
						        }
						        ofsContext.closePath();
						      });
						      offscreenCache[cacheKey] = cacheValue;
						    }
						      var posX = p.pos.x / drawScale;
						    var posY = p.pos.y / drawScale;
						    ctx.drawImage(cacheValue, posX, posY);
						}

						var fills = [
						  {size:15,opacity:1  },
						  {size:25,opacity:0.3},
						  {size:50,opacity:0.1} ];

						var renderScene=function(ofsContext) {
						  for (var i = 0; i < forces.length; i++) {
						    var p = forces[i];
						    var position = p.pos;
						    var opacity = 1;

						    ofsContext.beginPath();
						    for(var f in fills) {
						      f = fills[f];
						      var o = p.burp === true ? 1 : f.opacity;
						      p.burp = false;
						      // ofsContext.fillStyle = 'rgba(255,255,255,' + o + ')';
						      // ofsContext.arc(position.x / drawScale,
						      //   position.y / drawScale,
						      //   f.size / drawScale, 0, Math.PI*2, true);
						      // ofsContext.fill();
						    }
						    ofsContext.closePath();
						  }

						  for (var i = 0; i < particles.length; i++) {
						    var p = particles[i];
						    renderParticle(p);
						  }
						}

						var draw=function() {
						  renderScene(ctx);
						}

						var update=function() {
						  addNewParticles();
						  plotParticles(canvas.width, canvas.height);
						}

						var queue=function() {
						  window.requestAnimationFrame(loop);
						}

						loop();

					}
				},
				snow:function(){
					game.haveFun.list.snow.running=true;
					if(game.haveFun.snowStart){
						game.haveFun.snowStart();
					}
					else{
						/*
						* 自由下雪 snowFall
						* author：xuanfeng
						* time: 2014-01-11
						*/
						// 控制下雪
						var canvas;
						var snowFall=function(snow) {
							// 可配置属性
							snow = snow || {};
							this.maxFlake = snow.maxFlake || 200;	//最多片数
							this.flakeSize = snow.flakeSize || 10;	//雪花形状
							this.fallSpeed = snow.fallSpeed || 2;	//坠落速度
							this.status = 0;	//0-初始化、1-开始下雪、2-停止下雪、3-暂停下雪、4-继续下雪
						}

						// 兼容写法
						var requestAnimationFrame = window.requestAnimationFrame ||
												window.mozRequestAnimationFrame ||
												window.webkitRequestAnimationFrame ||
												window.msRequestAnimationFrame ||
												window.oRequestAnimationFrame ||
												function(callback) { setTimeout(callback, 1000 / 60); };
						var cancelAnimationFrame = window.cancelAnimationFrame ||
												window.mozCancelAnimationFrame ||
												window.webkitCancelAnimationFrame ||
												window.msCancelAnimationFrame ||
												window.oCancelAnimationFrame;

						// 开始下雪
						snowFall.prototype.start = function(){
							if(this.status == 1 || this.status == 4){
								// 已经在下雪则不作处理
								return false;
							}
							this.status = 1;

							// 创建画布
							snowCanvas.apply(this);
							// 创建雪花形状
							createFlakes.apply(this);
							// 画雪
							drawSnow.apply(this)
						}

						// 停止下雪
						snowFall.prototype.stop = function(){
							if(this.status == 2 || this.status == 0 || !this.canvas){
								return false;
							}
							// 停止动画循环
							this.pause();
							this.status = 2;
							// 删除画布
							this.canvas.parentNode.removeChild(this.canvas);
							this.canvas = null;
						}

						// 暂停下雪
						snowFall.prototype.pause = function(){
							if(this.status == 3){
								return false;
							}
							this.status = 3;
							cancelAnimationFrame(this.loop)
						};
						// 继续下雪
						snowFall.prototype.resume = function(){
							if(this.status == 3 && this.canvas){
								this.status = 4;
								// 动画的计时控制
								var that=this;
								this.loop = requestAnimationFrame(function() {
									drawSnow.apply(that)
								});
							}
						};

						// 创建画布
						var snowCanvas=function() {
							// 添加Dom结点
							var snowcanvas = document.createElement("canvas");
							snowcanvas.classList.add('fun');
							snowcanvas.id = "snowfall";
							ui.window.appendChild(snowcanvas);
							canvas=snowcanvas;
							this.canvas = snowcanvas;
							this.ctx = snowcanvas.getContext("2d");
							// 窗口大小改变的处理
							lib.onresize.push(function() {
								snowcanvas.width = ui.window.offsetWidth;
								snowcanvas.height = ui.window.offsetHeight
							});
							snowcanvas.width = ui.window.offsetWidth;
							snowcanvas.height = ui.window.offsetHeight;
						}

						// 雪运动对象
						var flakeMove=function(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
							this.x = Math.floor(Math.random() * canvasWidth); 	//x坐标
							this.y = Math.floor(Math.random() * canvasHeight);	//y坐标
							this.size = Math.random() * flakeSize + 2;			//形状
							this.maxSize = flakeSize;							 //最大形状
							this.speed = Math.random() * 1 + fallSpeed;		      //坠落速度
							this.fallSpeed = fallSpeed;						  //坠落速度
							this.velY = this.speed;							  //Y方向速度
							this.velX = 0;									    //X方向速度
							this.stepSize = Math.random() / 30;				    //步长
							this.step = 0 									    //步数
						}

						flakeMove.prototype.update = function() {
							var x = this.x,
							    y = this.y;

							// 左右摆动(余弦)
							this.velX *= 0.98;
							if (this.velY <= this.speed) {
								this.velY = this.speed
							}
							this.velX += Math.cos(this.step += 0.05) * this.stepSize;

							this.y += this.velY;
							this.x += this.velX;
							// 飞出边界的处理
							if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
								this.reset(canvas.width, canvas.height)
							}
						};

						// 飞出边界-放置最顶端继续坠落
						flakeMove.prototype.reset = function(width, height) {
							this.x = Math.floor(Math.random() * width);
							this.y = 0;
							this.size = Math.random() * snow.flakeSize + 2;
							this.speed = Math.random() * 1 + snow.fallSpeed;
							this.velY = this.speed;
							this.velX = 0;
						};

						// 渲染雪花-随机形状
						flakeMove.prototype.render = function(ctx) {
							var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
							snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");
							snowFlake.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
							snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");
							ctx.save();
							ctx.fillStyle = snowFlake;
							ctx.beginPath();
							ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
							ctx.fill();
							ctx.restore();
						};

						// 创建雪花-定义形状
						var createFlakes=function() {
							var maxFlake = this.maxFlake,
								flakes = this.flakes = [],
								canvas = this.canvas;
							for (var i = 0; i < 200; i++) {
								flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed))
							}
						}

						// 画雪
						var drawSnow=function() {
							var maxFlake = this.maxFlake,
								flakes = this.flakes;
							var ctx = this.ctx, canvas = this.canvas, that = this;
							// 清空雪花
							ctx.clearRect(0, 0, canvas.width, canvas.height);
							for (var e = 0; e < maxFlake; e++) {
								flakes[e].update();
								flakes[e].render(ctx);
							}
							// 一帧一帧的画
							this.loop = requestAnimationFrame(function() {
								drawSnow.apply(that);
							});
						}

						// 调用及控制方法
						var snow = new snowFall();
						game.haveFun.snowStart=function(){
							snow.start();
						}
						game.haveFun.snowStop=function(){
							game.haveFun.list.snow.running=false;
							snow.stop();
						}
						game.haveFun.snowSize=function(){
							if(game.haveFun.list.snow.size=='large'){
								game.haveFun.list.snow.size='small';
								snow.maxFlake=80;
								snow.flakeSize=3;
								snow.fallSpeed=1;
								if(this&&this.innerHTML){
									this.innerHTML='大雪';
								}
								game.saveConfig('coinSnowSize',true);
							}
							else{
								game.haveFun.list.snow.size='large';
								snow.maxFlake=200;
								snow.flakeSize=10;
								snow.fallSpeed=2;
								if(this&&this.innerHTML){
									this.innerHTML='小雪';
								}
								game.saveConfig('coinSnowSize',false);
							}
						}
						if(lib.config.coinSnowSize){
							game.haveFun.snowSize();
						}
						snow.start();
					}
				},
				firework:function(){
					if(game.haveFun.list.firework.running) return;
					game.haveFun.list.firework.running=true;
					if(game.haveFun.fireworkLoop){
						game.haveFun.fireworkLoop();
					}
					else{
						// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
						// not supported in all browsers though and sometimes needs a prefix, so we need a shim
						var requestAnimFrame = ( function() {
							return window.requestAnimationFrame ||
										window.webkitRequestAnimationFrame ||
										window.mozRequestAnimationFrame ||
										function( callback ) {
											window.setTimeout( callback, 1000 / 60 );
										};
						})();

						// now we will setup our basic variables for the demo
						var canvas = document.createElement( 'canvas' ),
								ctx = canvas.getContext( '2d' ),
								// full screen dimensions
								cw = ui.window.offsetWidth,
								ch = ui.window.offsetHeight,
								// firework collection
								fireworks = [],
								// particle collection
								particles = [],
								// starting hue
								hue = 120,
								// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
								limiterTotal = 5,
								limiterTick = 0,
								// this will time the auto launches of fireworks, one launch per 80 loop ticks
								timerTotal = 80,
								timerTick = 0,
								mousedown = false,
								// mouse x coordinate,
								mx,
								// mouse y coordinate
								my;

						// set canvas dimensions
						canvas.width = cw;
						canvas.height = ch;
						ui.window.appendChild(canvas);
						canvas.classList.add('fun');
						lib.onresize.push(function(){
							cw=ui.window.offsetWidth;
							ch=ui.window.offsetHeight;
							canvas.width = cw;
							canvas.height = ch;
						});

						// now we are going to setup our function placeholders for the entire demo

						// get a random number within a range
						var random=function( min, max ) {
							return Math.random() * ( max - min ) + min;
						}

						// calculate the distance between two points
						var calculateDistance=function( p1x, p1y, p2x, p2y ) {
							var xDistance = p1x - p2x,
									yDistance = p1y - p2y;
							return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
						}

						// create firework
						var Firework=function( sx, sy, tx, ty ) {
							// actual coordinates
							this.x = sx;
							this.y = sy;
							// starting coordinates
							this.sx = sx;
							this.sy = sy;
							// target coordinates
							this.tx = tx;
							this.ty = ty;
							// distance from starting point to target
							this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
							this.distanceTraveled = 0;
							// track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
							this.coordinates = [];
							this.coordinateCount = 3;
							// populate initial coordinate collection with the current coordinates
							while( this.coordinateCount-- ) {
								this.coordinates.push( [ this.x, this.y ] );
							}
							this.angle = Math.atan2( ty - sy, tx - sx );
							this.speed = 2;
							this.acceleration = 1.05;
							this.brightness = random( 50, 70 );
							// circle target indicator radius
							this.targetRadius = 1;
						}

						// update firework
						Firework.prototype.update = function( index ) {
							// remove last item in coordinates array
							this.coordinates.pop();
							// add current coordinates to the start of the array
							this.coordinates.unshift( [ this.x, this.y ] );

							// cycle the circle target indicator radius
							if( this.targetRadius < 8 ) {
								this.targetRadius += 0.3;
							} else {
								this.targetRadius = 1;
							}

							// speed up the firework
							this.speed *= this.acceleration;

							// get the current velocities based on angle and speed
							var vx = Math.cos( this.angle ) * this.speed,
									vy = Math.sin( this.angle ) * this.speed;
							// how far will the firework have traveled with velocities applied?
							this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );

							// if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
							if( this.distanceTraveled >= this.distanceToTarget ) {
								createParticles( this.tx, this.ty );
								// remove the firework, use the index passed into the update function to determine which to remove
								fireworks.splice( index, 1 );
							} else {
								// target not reached, keep traveling
								this.x += vx;
								this.y += vy;
							}
						}

						// draw firework
						Firework.prototype.draw = function() {
							ctx.beginPath();
							// move to the last tracked coordinate in the set, then draw a line to the current x and y
							ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
							ctx.lineTo( this.x, this.y );
							ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
							ctx.stroke();

							ctx.beginPath();
							// draw the target for this firework with a pulsing circle
							ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
							ctx.stroke();
						}

						// create particle
						var Particle=function( x, y ) {
							this.x = x;
							this.y = y;
							// track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
							this.coordinates = [];
							this.coordinateCount = 5;
							while( this.coordinateCount-- ) {
								this.coordinates.push( [ this.x, this.y ] );
							}
							// set a random angle in all possible directions, in radians
							this.angle = random( 0, Math.PI * 2 );
							this.speed = random( 1, 10 );
							// friction will slow the particle down
							this.friction = 0.95;
							// gravity will be applied and pull the particle down
							this.gravity = 1;
							// set the hue to a random number +-20 of the overall hue variable
							this.hue = random( hue - 20, hue + 20 );
							this.brightness = random( 50, 80 );
							this.alpha = 1;
							// set how fast the particle fades out
							this.decay = random( 0.015, 0.03 );
						}

						// update particle
						Particle.prototype.update = function( index ) {
							// remove last item in coordinates array
							this.coordinates.pop();
							// add current coordinates to the start of the array
							this.coordinates.unshift( [ this.x, this.y ] );
							// slow down the particle
							this.speed *= this.friction;
							// apply velocity
							this.x += Math.cos( this.angle ) * this.speed;
							this.y += Math.sin( this.angle ) * this.speed + this.gravity;
							// fade out the particle
							this.alpha -= this.decay;

							// remove the particle once the alpha is low enough, based on the passed in index
							if( this.alpha <= this.decay ) {
								particles.splice( index, 1 );
							}
						}

						// draw particle
						Particle.prototype.draw = function() {
							ctx. beginPath();
							// move to the last tracked coordinates in the set, then draw a line to the current x and y
							ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
							ctx.lineTo( this.x, this.y );
							ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
							ctx.stroke();
						}

						// create particle group/explosion
						var createParticles=function( x, y ) {
							// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
							var particleCount = 30;
							while( particleCount-- ) {
								particles.push( new Particle( x, y ) );
							}
						}

						// main demo loop
						var loop=function() {
							// if(lib.config.coin_free_playpackconfig&&!_status.imchoosing){
							// 	canvas.style.display='none';
							// }
							// else{
							// 	canvas.style.display='';
							// }
							// this function will run endlessly with requestAnimationFrame
							if(!game.haveFun.list.firework.running){
								canvas.width=cw;
								canvas.height=ch;
								return;
							}
							else{
								requestAnimFrame( loop );
							}

							// increase the hue to get different colored fireworks over time
							hue += 0.5;

							// normally, clearRect() would be used to clear the canvas
							// we want to create a trailing effect though
							// setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
							ctx.globalCompositeOperation = 'destination-out';
							// decrease the alpha property to create more prominent trails
							ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
							ctx.fillRect( 0, 0, cw, ch );
							// change the composite operation back to our main mode
							// lighter creates bright highlight points as the fireworks and particles overlap each other
							ctx.globalCompositeOperation = 'lighter';

							// loop over each firework, draw it, update it
							var i = fireworks.length;
							while( i-- ) {
								fireworks[ i ].draw();
								fireworks[ i ].update( i );
							}

							// loop over each particle, draw it, update it
							var i = particles.length;
							while( i-- ) {
								particles[ i ].draw();
								particles[ i ].update( i );
							}

							// launch fireworks automatically to random coordinates, when the mouse isn't down
							if( timerTick >= timerTotal ) {
								if( !mousedown ) {
									// start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
									fireworks.push( new Firework( cw / 2, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
									timerTick = 0;
								}
							} else {
								timerTick++;
							}

							// limit the rate at which fireworks get launched when mouse is down
							if( limiterTick >= limiterTotal ) {
								if( mousedown ) {
									// start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
									fireworks.push( new Firework( cw / 2, ch, mx, my ) );
									limiterTick = 0;
								}
							} else {
								limiterTick++;
							}
						}


						if(lib.config.touchscreen){
							ui.window.addEventListener( 'touchmove', function( e ) {
								mx = e.touches[0].clientX/game.documentZoom - canvas.offsetLeft;
								my = e.touches[0].clientY/game.documentZoom - canvas.offsetTop;
							});
							ui.window.addEventListener( 'touchstart', function( e ) {
								mousedown = true;
							});
							ui.window.addEventListener( 'touchend', function( e ) {
								mousedown = false;
							});
						}
						else{
							// mouse event bindings
							// update the mouse coordinates on mousemove
							ui.window.addEventListener( 'mousemove', function( e ) {
								mx = e.pageX/game.documentZoom - canvas.offsetLeft;
								my = e.pageY/game.documentZoom - canvas.offsetTop;
							});

							// toggle mousedown state and prevent canvas from being selected
							ui.window.addEventListener( 'mousedown', function( e ) {
								e.preventDefault();
								mousedown = true;
							});

							ui.window.addEventListener( 'mouseup', function( e ) {
								e.preventDefault();
								mousedown = false;
							});
						}

						// once the window loads, we are ready for some fireworks!
						game.haveFun.fireworkLoop=loop;
						game.haveFun.fireworkStop=function(){
							game.haveFun.list.firework.running=false;
						},
						loop();
					}
				}
			}
		},
		help:{
			'富甲天下':'<ul><li>每完成一次对局，可获得一定数量的金币'+
			'<li>战斗胜利可额外获得20金币，每杀死一个敌人可获得10金币（托管无效）'+
			'<li>使用的武将越强，获得的金币数越少'+
			'<li>执行以下操作时，将扣除金币：<ul><li>作弊：20金币<li>换将卡：3金币<li>'+
			'自由选将：10金币<li>手气卡：3金币<li>换人：10金币</ul>'+
			'<li>金币可用于购买烟花等游戏特效（点击右上角的金币按钮）'+
			'<li>修改金币：<br>game.changCoin'+
			'<li>默认下雪：<br>game.haveFun.alwaysSnow'
		}
	};
});
