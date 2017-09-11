game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新英魂之刃",content:function (config,pack){
if (config.nyhzrlj){
for (var i in lib.characterPack['nyhzrlj']) {
if (lib.character[i][4].indexOf("forbidai")<0){
lib.character[i][4].push("forbidai");
}
}
};
//lib.extensionMenu['extension_新英魂之刃'].a={
//name:'编辑此扩展',
//clear:true,
//onclick:function(){
//game.say1('禁止编辑');
//};
//};

//			if(lib.boss){
//				lib.boss.nyhzr土龙={
//					chongzheng:5,
//				};
//			};
//			if(lib.characterPack.mode_boss){
//				lib.characterPack.mode_boss.nyhzr土龙=["male","nyhzrlong",12,["lielongtulongjia","lielongmoyan","lielonghuachen","lielongdinu"],['boss']];
//			};
		game.countChoose=function(clear){
            if(_status.imchoosing){
                return;
            }
            _status.imchoosing=true;
			if(game.hasPlayer(function(target){return target.hasSkill('_timeLimit_timeOver')})&&!_status.countDown){
                ui.timer.show();
                var num=_status.timeCount;
                game.countDown(parseInt(num),function(){
					ui.timer.hide();
					delete _status.timeCount;
					game.stopCountChoose();
					var evt=_status.event;
					for(var i=0;i<10;i++){
						if(evt&&evt.getParent){
							evt=evt.getParent();
						}
						if(evt.name=='phaseUse'){
							evt.skipped=true;
							break;
						}
					}
                });
                if(!game.online&&game.me){
                    if(_status.event.getParent().skillHidden){
                        for(var i=0;i<game.players.length;i++){
                            game.players[i].showTimer();
                        }
                        game.me._hide_all_timer=true;
                    }
                    else if(!_status.event._global_waiting){
                        game.me.showTimer();
                    }
                }
            }
            if(_status.connectMode&&!_status.countDown){
                ui.timer.show();
                var num;
                if(_status.connectMode){
                    num=lib.configOL.choose_timeout;
                }
                else{
                    num=get.config('choose_timeout');
                }
                game.countDown(parseInt(num),function(){
                    ui.click.auto();
                    ui.timer.hide();
                });
                if(!game.online&&game.me){
                    if(_status.event.getParent().skillHidden){
                        for(var i=0;i<game.players.length;i++){
                            game.players[i].showTimer();
                        }
                        game.me._hide_all_timer=true;
                    }
                    else if(!_status.event._global_waiting){
                        game.me.showTimer();
                    }
                }
            }
        };
			if(lib.config.火龙龙鳞==undefined) game.saveConfig('火龙龙鳞',0);
			if(lib.config.水龙龙鳞==undefined) game.saveConfig('水龙龙鳞',0);
			if(lib.config.雷龙龙鳞==undefined) game.saveConfig('雷龙龙鳞',0);
			if(lib.config.土龙龙鳞==undefined) game.saveConfig('土龙龙鳞',0);
			if(lib.config.木龙龙鳞==undefined) game.saveConfig('木龙龙鳞',0);
			if(lib.config.风龙龙鳞==undefined) game.saveConfig('风龙龙鳞',0);
			if(lib.config.冰龙龙鳞==undefined) game.saveConfig('冰龙龙鳞',0);
			if(lib.config.尸魂==undefined) game.saveConfig('尸魂',0);
game.saveConfig('wujinmoshiYZR',undefined);
if(config.wujinmoshi){
game.wujinmoshiRE=function(){
game.saveConfig('wujinmoshiP',undefined);
game.saveConfig('wujinmoshiDXB',undefined);
game.saveConfig('wujinmoshiDS',undefined);
game.saveConfig('wujinmoshiDamage',undefined);
game.saveConfig('wujinmoshiMaxHp',undefined);
game.saveConfig('wujinmoshiMaxHandCard',undefined);
game.saveConfig('wujinmoshiDraw',undefined);
game.saveConfig('wujinmoshiRecover',undefined);
game.saveConfig('wujinmoshiESkill',undefined);
game.saveConfig('wujinmoshiDamageI',undefined);
game.saveConfig('wujinmoshiMaxHpI',undefined);
game.saveConfig('wujinmoshiMaxHandCardI',undefined);
game.saveConfig('wujinmoshiDrawI',undefined);
game.saveConfig('wujinmoshiRecoverI',undefined);
game.saveConfig('wujinmoshiESkillE',undefined);
game.reload();
};
if(lib.config.wujinmoshiDXB==undefined) game.saveConfig('wujinmoshiDXB',1);
if(lib.config.wujinmoshiDS==undefined) game.saveConfig('wujinmoshiDS',1);
if(lib.config.wujinmoshiDamage==undefined) game.saveConfig('wujinmoshiDamage',0);
if(lib.config.wujinmoshiMaxHp==undefined) game.saveConfig('wujinmoshiMaxHp',0);
if(lib.config.wujinmoshiMaxHandCard==undefined) game.saveConfig('wujinmoshiMaxHandCard',0);
if(lib.config.wujinmoshiDraw==undefined) game.saveConfig('wujinmoshiDraw',0);
if(lib.config.wujinmoshiRecover==undefined) game.saveConfig('wujinmoshiRecover',0);
if(lib.config.wujinmoshiDamageI==undefined) game.saveConfig('wujinmoshiDamageI',0);
if(lib.config.wujinmoshiMaxHpI==undefined) game.saveConfig('wujinmoshiMaxHpI',0);
if(lib.config.wujinmoshiMaxHandCardI==undefined) game.saveConfig('wujinmoshiMaxHandCardI',0);
if(lib.config.wujinmoshiDrawI==undefined) game.saveConfig('wujinmoshiDrawI',0);
if(lib.config.wujinmoshiRecoverI==undefined) game.saveConfig('wujinmoshiRecoverI',0);
if(lib.config.wujinmoshiMAXLC==undefined) game.saveConfig('wujinmoshiMAXLC',0);
if(lib.config.wujinmoshiMAXLCWJ==undefined) game.saveConfig('wujinmoshiMAXLCWJ','');
if(lib.config.wujinmoshiMAXLC<lib.config.wujinmoshiDXB-1){
game.saveConfig('wujinmoshiMAXLC',lib.config.wujinmoshiDXB-1);
game.saveConfig('wujinmoshiMAXLCWJ','（'+lib.translate[lib.config.wujinmoshiP]+'）');
};
if(lib.config.wujinmoshiHJK==undefined) game.saveConfig('wujinmoshiHJK',0);
if(lib.config.wujinmoshiXRK==undefined) game.saveConfig('wujinmoshiXRK',0);
var wujinmoshiESkillESkills=[];
for(i in lib.character){
for(var j=0;j<lib.character[i][3].length;j++){
wujinmoshiESkillESkills.push(lib.character[i][3][j]);
};
};
if(lib.config.wujinmoshiESkillE==undefined) game.saveConfig('wujinmoshiESkillE',wujinmoshiESkillESkills.randomGet());
			game.WJchangeCharacter=function(){
				var WJchangeCharacter=ui.create.dialog('hidden');
				WJchangeCharacter.style.height='calc(100%)';
				WJchangeCharacter.style.width='calc(100%)';
				WJchangeCharacter.style.left='0px';
				WJchangeCharacter.style.top='0px';
				WJchangeCharacter.classList.add('popped');
				WJchangeCharacter.classList.add('static');
						
						
				var WJchangeCharacterCC=ui.create.div();
              	WJchangeCharacterCC.style.left='50px';
                WJchangeCharacterCC.style.top='30px';
				var character='';
				for(i in lib.character){
					if(!lib.character[i][4].contains('forbidai')) character+='<option value='+i+'>'+lib.translate[i]+'</option>';
				};
				WJchangeCharacterCC.innerHTML='请选择武将<br><select id="chooseCharacter" size="18" style="width:75px">'+character+'</select>';
						
						
				var WJchangeCharacterYES=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
					var country=document.getElementById('chooseCharacter');
					var str=country.options[country.selectedIndex].value;
					if(confirm('是否选择'+lib.translate[str]+'？')){
						WJchangeCharacter.delete();
						game.saveConfig('wujinmoshiP',str);
					};
				});
				WJchangeCharacterYES.style.left='-40.55px';
				WJchangeCharacterYES.style.top='70px';

						
				WJchangeCharacter.add(WJchangeCharacterCC);
				WJchangeCharacter.add(WJchangeCharacterYES);
				ui.window.appendChild(WJchangeCharacter);
			};
if(lib.brawl){
lib.brawl.wujinmoshi={
            name:'无尽模式',
            mode:'identity',
            intro:'曾通过的最高轮次：'+get.cnNumber(lib.config.wujinmoshiMAXLC)+'轮'+lib.config.wujinmoshiMAXLCWJ,
			showcase:function(init){
				if(lib.config.wujinmoshiYZR!=true){
					this.style.width='575px';
					var wujinmoshichooseCharacter1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">选择<br>武将</span>',function(){
						var wujinmoshichooseCharacter=ui.create.dialog('hidden');
						wujinmoshichooseCharacter.style.height='calc(100%)';
						wujinmoshichooseCharacter.style.width='calc(100%)';
						wujinmoshichooseCharacter.style.left='0px';
						wujinmoshichooseCharacter.style.top='0px';
						wujinmoshichooseCharacter.classList.add('popped');
						wujinmoshichooseCharacter.classList.add('static');
						
						
						var wujinmoshiCharacter=ui.create.div();
                		wujinmoshiCharacter.style.left='50px';
                		wujinmoshiCharacter.style.top='30px';
						var character='';
						for(i in lib.character){
							if(!lib.character[i][4].contains('forbidai')) character+='<option value='+i+'>'+lib.translate[i]+'</option>';
						};
						wujinmoshiCharacter.innerHTML='请选择武将<br><select id="chooseCharacter" size="18" style="width:75px">'+character+'</select>';
						
						
						var wujinmoshiYES=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
							var country=document.getElementById('chooseCharacter');
							var str=country.options[country.selectedIndex].value;
							if(confirm('是否选择'+lib.translate[str]+'？')){
								wujinmoshichooseCharacter.delete();
								wujinmoshichooseCharacter1.hide();
								wujinmoshiDXB.show();
								wujinmoshiDS.show();
								wujinmoshiharacter.show();
								wujinmoshiDamage.show();
								wujinmoshiMaxHp.show();
								wujinmoshiMaxHandCard.show();
								wujinmoshiDraw.show();
								wujinmoshiRecover.show();
								wujinmoshiESkill.show();
								wujinmoshiDSDJC.show();
								wujinmoshiDamageE.show();
								wujinmoshiMaxHpE.show();
								wujinmoshiMaxHandCardE.show();
								wujinmoshiDrawE.show();
								wujinmoshiRecoverE.show();
								wujinmoshiESkillE.show();
								game.saveConfig('wujinmoshiP',str);
							};
						});
						wujinmoshiYES.style.left='-40.55px';
						wujinmoshiYES.style.top='70px';

						
						wujinmoshichooseCharacter.add(wujinmoshiCharacter);
						wujinmoshichooseCharacter.add(wujinmoshiYES);
						ui.window.appendChild(wujinmoshichooseCharacter);
					});
					wujinmoshichooseCharacter1.style.left='0px';
					wujinmoshichooseCharacter1.style.top='0px';
					this.appendChild(wujinmoshichooseCharacter1);
					if(lib.config.wujinmoshiP!=undefined) wujinmoshichooseCharacter1.hide();
					
					
					var wujinmoshiDXB=ui.create.div();
					wujinmoshiDXB.style.left='0px';
					wujinmoshiDXB.style.top='0px';
					this.appendChild(wujinmoshiDXB);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB==undefined){
							wujinmoshiDXB.innerHTML='未开始';
						}else{
							wujinmoshiDXB.innerHTML='第'+get.cnNumber(lib.config.wujinmoshiDXB)+'轮';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDXB.hide();
					
					
					var wujinmoshiDS=ui.create.div();
					wujinmoshiDS.style.left='120px';
					wujinmoshiDS.style.top='0px';
					this.appendChild(wujinmoshiDS);
					setInterval(function(){
						if(lib.config.wujinmoshiDS==undefined){
							wujinmoshiDS.innerHTML='拥有点数：0点';
						}else{
							wujinmoshiDS.innerHTML='拥有点数：'+lib.config.wujinmoshiDS+'点';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDS.hide();

					
					var wujinmoshiharacter=ui.create.div();
					wujinmoshiharacter.style.left='0px';
					wujinmoshiharacter.style.top='20px';
					this.appendChild(wujinmoshiharacter);
					setInterval(function(){
						if(lib.config.wujinmoshiP==undefined){
							wujinmoshiharacter.innerHTML='拥有武将：未选择';
						}else{
							wujinmoshiharacter.innerHTML='拥有武将：'+lib.translate[lib.config.wujinmoshiP];
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiharacter.hide();

					
					var wujinmoshiDamage=ui.create.div();
					wujinmoshiDamage.style.left='0px';
					wujinmoshiDamage.style.top='40px';
					this.appendChild(wujinmoshiDamage);
					setInterval(function(){
						if(lib.config.wujinmoshiDamage==undefined){
							wujinmoshiDamage.innerHTML='攻击力加成：0';
						}else{
							wujinmoshiDamage.innerHTML='攻击力加成：'+lib.config.wujinmoshiDamage;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDamage.hide();

					
					var wujinmoshiDamageAdd=ui.create.div(function(){
						if(confirm('消耗'+(5+Math.floor(lib.config.wujinmoshiDamage/3))+'点点数来增加一点攻击力?')){
							game.saveConfig('wujinmoshiDamage',lib.config.wujinmoshiDamage+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-(5+Math.floor(lib.config.wujinmoshiDamage/3)));
						};
					});
					wujinmoshiDamageAdd.style.left='150px';
					wujinmoshiDamageAdd.style.top='40px';
					wujinmoshiDamageAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiDamageAdd);
					wujinmoshiDamageAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=(5+Math.floor(lib.config.wujinmoshiDamage/3))){
							wujinmoshiDamageAdd.show();
						}else{
							wujinmoshiDamageAdd.hide();
						};
					},100);

					
					var wujinmoshiMaxHp=ui.create.div();
					wujinmoshiMaxHp.style.left='0px';
					wujinmoshiMaxHp.style.top='60px';
					this.appendChild(wujinmoshiMaxHp);
					setInterval(function(){
						if(lib.config.wujinmoshiMaxHp==undefined){
							wujinmoshiMaxHp.innerHTML='体力上限加成：0';
						}else{
							wujinmoshiMaxHp.innerHTML='体力上限加成：'+lib.config.wujinmoshiMaxHp;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHp.hide();

					
					var wujinmoshiMaxHpAdd=ui.create.div(function(){
						if(confirm('消耗3点点数来增加一点体力上限?')){
							game.saveConfig('wujinmoshiMaxHp',lib.config.wujinmoshiMaxHp+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-3);
						};
					});
					wujinmoshiMaxHpAdd.style.left='150px';
					wujinmoshiMaxHpAdd.style.top='60px';
					wujinmoshiMaxHpAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiMaxHpAdd);
					wujinmoshiMaxHpAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=3){
							wujinmoshiMaxHpAdd.show();
						}else{
							wujinmoshiMaxHpAdd.hide();
						};
					},100);

					
					var wujinmoshiMaxHandCard=ui.create.div();
					wujinmoshiMaxHandCard.style.left='0px';
					wujinmoshiMaxHandCard.style.top='80px';
					this.appendChild(wujinmoshiMaxHandCard);
					setInterval(function(){
						if(lib.config.wujinmoshiMaxHandCard==undefined){
							wujinmoshiMaxHandCard.innerHTML='手牌上限加成：0';
						}else{
							wujinmoshiMaxHandCard.innerHTML='手牌上限加成：'+lib.config.wujinmoshiMaxHandCard;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHandCard.hide();

					
					var wujinmoshiMaxHandCardAdd=ui.create.div(function(){
						if(confirm('消耗1点点数来增加一点手牌上限?')){
							game.saveConfig('wujinmoshiMaxHandCard',lib.config.wujinmoshiMaxHandCard+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-1);
						};
					});
					wujinmoshiMaxHandCardAdd.style.left='150px';
					wujinmoshiMaxHandCardAdd.style.top='80px';
					wujinmoshiMaxHandCardAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiMaxHandCardAdd);
					wujinmoshiMaxHandCardAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=1&&lib.config.wujinmoshiP!=undefined){
							wujinmoshiMaxHandCardAdd.show();
						}else{
							wujinmoshiMaxHandCardAdd.hide();
						};
					},100);

					
					var wujinmoshiDraw=ui.create.div();
					wujinmoshiDraw.style.left='0px';
					wujinmoshiDraw.style.top='100px';
					this.appendChild(wujinmoshiDraw);
					setInterval(function(){
						if(lib.config.wujinmoshiDraw==undefined){
							wujinmoshiDraw.innerHTML='摸牌数加成：0';
						}else{
							wujinmoshiDraw.innerHTML='摸牌数加成：'+lib.config.wujinmoshiDraw;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDraw.hide();

					
					var wujinmoshiDrawAdd=ui.create.div(function(){
						if(confirm('消耗5点点数来增加一点摸牌数?')){
							game.saveConfig('wujinmoshiDraw',lib.config.wujinmoshiDraw+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-5);
						};
					});
					wujinmoshiDrawAdd.style.left='150px';
					wujinmoshiDrawAdd.style.top='100px';
					wujinmoshiDrawAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiDrawAdd);
					wujinmoshiDrawAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=5&&lib.config.wujinmoshiDraw<3){
							wujinmoshiDrawAdd.show();
						}else{
							wujinmoshiDrawAdd.hide();
						};
					},100);

					
					var wujinmoshiRecover=ui.create.div();
					wujinmoshiRecover.style.left='0px';
					wujinmoshiRecover.style.top='120px';
					this.appendChild(wujinmoshiRecover);
					setInterval(function(){
						if(lib.config.wujinmoshiRecover==undefined){
							wujinmoshiRecover.innerHTML='恢复量加成：0';
						}else{
							wujinmoshiRecover.innerHTML='恢复量加成：'+lib.config.wujinmoshiRecover;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiRecover.hide();

					
					var wujinmoshiRecoverAdd=ui.create.div(function(){
						if(confirm('消耗3点点数来增加一点恢复量?')){
							game.saveConfig('wujinmoshiRecover',lib.config.wujinmoshiRecover+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-3);
						};
					});
					wujinmoshiRecoverAdd.style.left='150px';
					wujinmoshiRecoverAdd.style.top='120px';
					wujinmoshiRecoverAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiRecoverAdd);
					wujinmoshiRecoverAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=3){
							wujinmoshiRecoverAdd.show();
						}else{
							wujinmoshiRecoverAdd.hide();
						};
					},100);

					
					var wujinmoshiESkill=ui.create.div();
					wujinmoshiESkill.style.left='0px';
					wujinmoshiESkill.style.top='140px';
					this.appendChild(wujinmoshiESkill);
					setInterval(function(){
						if(lib.config.wujinmoshiESkill==undefined){
							wujinmoshiESkill.innerHTML='额外技能：未获得（只能拥有一个）';
						}else{
							wujinmoshiESkill.innerHTML='额外技能：'+lib.translate[lib.config.wujinmoshiESkill]+'（只能拥有一个）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiESkill.hide();

					
					var wujinmoshiDSDJC=ui.create.div();
					wujinmoshiDSDJC.style.left='0px';
					wujinmoshiDSDJC.style.top='180px';
					wujinmoshiDSDJC.innerHTML='对手的加成：'
					this.appendChild(wujinmoshiDSDJC);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDSDJC.hide();

					
					var wujinmoshiDamageE=ui.create.div();
					wujinmoshiDamageE.style.left='0px';
					wujinmoshiDamageE.style.top='200px';
					this.appendChild(wujinmoshiDamageE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiDamageE.innerHTML='攻击力加成：'+(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDamageI)+'（每15轮+1）';
						}else{
							wujinmoshiDamageE.innerHTML='攻击力加成：0（每15轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDamageE.hide();

					
					var wujinmoshiMaxHpE=ui.create.div();
					wujinmoshiMaxHpE.style.left='0px';
					wujinmoshiMaxHpE.style.top='220px';
					this.appendChild(wujinmoshiMaxHpE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiMaxHpE.innerHTML='体力上限加成：'+(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI)+'（每8轮+1）';
						}else{
							wujinmoshiMaxHpE.innerHTML='体力上限加成：0（每8轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHpE.hide();

					
					var wujinmoshiMaxHandCardE=ui.create.div();
					wujinmoshiMaxHandCardE.style.left='0px';
					wujinmoshiMaxHandCardE.style.top='240px';
					this.appendChild(wujinmoshiMaxHandCardE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiMaxHandCardE.innerHTML='手牌上限加成：'+(Math.floor(lib.config.wujinmoshiDXB/5)-lib.config.wujinmoshiMaxHandCardI)+'（每5轮+1）';
						}else{
							wujinmoshiMaxHandCardE.innerHTML='手牌上限加成：0（每5轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHandCardE.hide();

					
					var wujinmoshiDrawE=ui.create.div();
					wujinmoshiDrawE.style.left='0px';
					wujinmoshiDrawE.style.top='260px';
					this.appendChild(wujinmoshiDrawE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							if(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI<3){
								wujinmoshiDrawE.innerHTML='摸牌数加成：'+(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI)+'（每15轮+1，上限+3）';
							}else{
								wujinmoshiDrawE.innerHTML='摸牌数加成：3（每15轮+1，上限+3）';
							};
						}else{
							wujinmoshiDrawE.innerHTML='摸牌数加成：0（每15轮+1，上限+5）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDrawE.hide();

					
					var wujinmoshiRecoverE=ui.create.div();
					wujinmoshiRecoverE.style.left='0px';
					wujinmoshiRecoverE.style.top='280px';
					this.appendChild(wujinmoshiRecoverE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiRecoverE.innerHTML='回复量加成：'+(Math.floor(lib.config.wujinmoshiDXB/10)-lib.config.wujinmoshiRecoverI)+'（每10轮+1）';
						}else{
							wujinmoshiRecoverE.innerHTML='回复量加成：0（每10轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiRecoverE.hide();

					
					var wujinmoshiESkillE=ui.create.div();
					wujinmoshiESkillE.style.left='0px';
					wujinmoshiESkillE.style.top='300px';
					this.appendChild(wujinmoshiESkillE);
					setInterval(function(){
						if(lib.config.wujinmoshiESkillE==undefined){
							wujinmoshiESkillE.innerHTML='额外技能：未获得';
						}else{
							wujinmoshiESkillE.innerHTML='额外技能：'+lib.translate[lib.config.wujinmoshiESkillE];
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiESkillE.hide();
					

					var wujinmoshiRE=ui.create.div('.menubutton.large','<span style="cursor:pointer;">重置</span>',function(){
						if(confirm('是否重置?')){
							game.wujinmoshiRE();
						};
					});
					wujinmoshiRE.style.left='500px';
					wujinmoshiRE.style.top='0px';
					this.appendChild(wujinmoshiRE);
					
					
					var wujinmoshiBAGQX1=this;
					var wujinmoshiBAG=ui.create.div('.menubutton.large','<span style="cursor:pointer;">背包</span>',function(){
						wujinmoshiBAG.delete();
						var wujinmoshiBAGQX=ui.create.div('.menubutton.large','<span style="cursor:pointer;">关闭</span>',function(){
							wujinmoshiBAGQX.delete();
							wujinmoshiBAGJM.delete();
							wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
						});
						wujinmoshiBAGQX.style.left='500px';
						wujinmoshiBAGQX.style.top='50px';
						wujinmoshiBAGQX1.appendChild(wujinmoshiBAGQX);
						wujinmoshiBAGJM=ui.create.dialog('hidden');
						wujinmoshiBAGJM.style.height='calc(50%)';
						wujinmoshiBAGJM.style.width='calc(50%)';
						wujinmoshiBAGJM.style.left='calc(25%)';
						wujinmoshiBAGJM.style.top='calc(25%)';
						wujinmoshiBAGJM.classList.add('popped');
						wujinmoshiBAGJM.classList.add('static');
						
						
						var wujinmoshiHJK=ui.create.div('','<span style="cursor:pointer;">换将卡<br>'+lib.config.wujinmoshiHJK+'张</span>',function(){
							if(lib.config.wujinmoshiHJK>0){
								if(lib.config.wujinmoshiP!=undefined){
									if(confirm('是否使用换将卡?')){
										game.saveConfig('wujinmoshiHJK',lib.config.wujinmoshiHJK-1);
										game.WJchangeCharacter();
										wujinmoshiBAGQX.delete();
										wujinmoshiBAGJM.delete();
										wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
									};
								}else{
									alert('游戏未开始，无法使用');
								};
							};
						});
						if(lib.config.wujinmoshiHJK>0) wujinmoshiBAGJM.add(wujinmoshiHJK);
						setInterval(function(){
							if(lib.config.wujinmoshiHJK<=0) wujinmoshiHJK.delete();
						},1000);
						
						
						var wujinmoshiXRK=ui.create.div('','<span style="cursor:pointer;">削弱卡<br>'+lib.config.wujinmoshiXRK+'张</span>',function(){
							if(lib.config.wujinmoshiXRK>0){
								if(lib.config.wujinmoshiP!=undefined){
									if(confirm('是否使用削弱卡?')){
										game.saveConfig('wujinmoshiXRK',lib.config.wujinmoshiXRK-1);
										game.saveConfig('wujinmoshiDamageI',lib.config.wujinmoshiDamageI+1);
										game.saveConfig('wujinmoshiMaxHpI',lib.config.wujinmoshiMaxHpI+1);
										game.saveConfig('wujinmoshiMaxHandCardI',lib.config.wujinmoshiMaxHandCardI+1);
										game.saveConfig('wujinmoshiDrawI',lib.config.wujinmoshiDrawI+1);
										game.saveConfig('wujinmoshiRecoverI',lib.config.wujinmoshiRecoverI+1);
										wujinmoshiBAGQX.delete();
										wujinmoshiBAGJM.delete();
										wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
									};
								}else{
									alert('游戏未开始，无法使用');
								};
							};
						});
						if(lib.config.wujinmoshiXRK>0) wujinmoshiBAGJM.add(wujinmoshiXRK);
						setInterval(function(){
							if(lib.config.wujinmoshiXRK<=0) wujinmoshiXRK.delete();
						},1000);
						
						
						ui.window.appendChild(wujinmoshiBAGJM);
					});
					wujinmoshiBAG.style.left='500px';
					wujinmoshiBAG.style.top='50px';
					this.appendChild(wujinmoshiBAG);
				
				
					var wujinmoshiJS=ui.create.div('.menubutton.large','<span style="cursor:pointer;">规则</span>',function(){
							var wujinmoshiJS1=ui.create.dialog('hidden');
							wujinmoshiJS1.style.height='calc(100%)';
							wujinmoshiJS1.style.width='calc(100%)';
							wujinmoshiJS1.style.left='0px';
							wujinmoshiJS1.style.top='0px';
							wujinmoshiJS1.classList.add('popped');
							wujinmoshiJS1.classList.add('static');
							var wujinmoshiJSQX=ui.create.div('.menubutton.round','×',function(){
								wujinmoshiJS1.delete();
							});
							wujinmoshiJSQX.style.left='50px';
							wujinmoshiJSQX.style.top='50px';
	
							var wujinmoshiJS2=ui.create.div('','');
							wujinmoshiJS2.setBackgroundImage('extension/新英魂之刃/wujinmoshiJS.png');
							wujinmoshiJS2.style.height='400px';
							wujinmoshiJS2.style.width='600px';
							wujinmoshiJS2.style.left='50px';
							wujinmoshiJS2.style.top='50px';
						
							wujinmoshiJS1.add(wujinmoshiJS2);
							wujinmoshiJS1.add(wujinmoshiJSQX);
							ui.window.appendChild(wujinmoshiJS1);
					});
					wujinmoshiJS.style.left='500px';
					wujinmoshiJS.style.top='100px';
					this.appendChild(wujinmoshiJS);
					
					
					game.saveConfig('wujinmoshiYZR',true);
				};
        	},
            content:{
	            gameStart:function(){
					var characterAi=[];
                    for(i in lib.character){
                        if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) characterAi.push(i);
                    };
					game.me.next.init(characterAi.randomGet());
					if(lib.config.wujinmoshiMaxHp>0){
						game.me.gainMaxHp(lib.config.wujinmoshiMaxHp);
						game.me.recover(lib.config.wujinmoshiMaxHp);
					};
					if(-(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI)<game.me.next.maxHp){
						game.me.next.gainMaxHp(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI);
						game.me.next.recover(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI);
					}else{
						game.me.next.maxHp=0;
						game.me.next.update();
						game.me.next.die();
					};
					if(lib.config.wujinmoshiESkillE!=undefined) game.me.next.addSkill(lib.config.wujinmoshiESkillE);
					game.me.storage.wujinmoshiRE=lib.character[game.me.next.name][3];
					if(lib.config.wujinmoshiESkill!=undefined) game.me.addSkill(lib.config.wujinmoshiESkill);
					game.addPlayer=function(all){
						alert('增加角色，违反无尽模式规则，重新载入游戏');
						game.reload();
					};
					game.addFellow=function(all){
						alert('增加角色，违反无尽模式规则，重新载入游戏');
						game.reload();
					};
					game.swapPlayer=function(all){};
					game.swapControl=function(all){};
				},
                chooseCharacter:function(){
	                if(lib.config.wujinmoshiP!=undefined) return [lib.config.wujinmoshiP];
					var characterAi=[];
                    for(i in lib.character){
                        if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) characterAi.push(i);
                    };
					return [characterAi.randomGet()];
                },
                chooseCharacterAi:function(){
                    return ;
                },
			},
            init:function(){
				lib.config.mode_config.identity.free_choose=false;
				lib.config.mode_config.identity.change_choice=false;
				lib.config.mode_config.identity.change_identity=false;
				game.saveConfig('player_number','2','identity');
				lib.skill._wujinmoshiRE={
					trigger:{
						player:'dieBefore'
					},
					forced:true,
					filter:function (event,player){
						return lib.config.wujinmoshiP!=undefined;
					},
					content:function(){
						if(player==game.me){
							alert('进行无尽模式的武将死亡，重置游戏');
							game.wujinmoshiRE();
						}else{
							if(Math.random()<=0.05){
								var DJlist=['wujinmoshiHJK','wujinmoshiXRK'];
								var DJ=DJlist.randomGet();
								game.saveConfig(DJ,lib.config[DJ]+1);
								if(DJ=='wujinmoshiHJK') game.say1('你获得一张换将卡');
								if(DJ=='wujinmoshiXRK') game.say1('你获得一张削弱卡');
							};
							if(Math.random()<=0.05){
								game.saveConfig('wujinmoshiHJK',lib.config.wujinmoshiHJK+1);
								game.say2('你获得一张换将卡');
							};
							if(Math.random()<=0.01){
								game.saveConfig('wujinmoshiXRK',lib.config.wujinmoshiXRK+1);
								game.say2('你获得一张削弱卡');
							};
							game.saveConfig('wujinmoshiESkillE',undefined);
							game.saveConfig('wujinmoshiDXB',lib.config.wujinmoshiDXB+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS+1);
							game.me.useSkill('wujinmoshiRE1');
						};
					},
				};
				lib.skill.wujinmoshiRE1={
					content:function (){
						'step 0'
						game.me.chooseControl('确定','取消',ui.create.dialog('是否从对方身上获得额外技能？','hidden'));
						'step 1'
						if(result.control=='确定') game.me.useSkill('wujinmoshiRE2');
					},
				};
				lib.skill.wujinmoshiRE2={
                	createDialog:function (player,target,onlylist){
						var list=target.storage.wujinmoshiRE;
							if(onlylist) return list;
						var dialog=ui.create.dialog('选择一项作为你的额外技能');
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
									}else{
									translation=translation.slice(0,2);
								}
								var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
								item.firstChild.addEventListener('click',clickItem);
								item.firstChild.link=list[i];
							};
						};
						dialog.add(ui.create.div('placeholder'));
						return dialog;
                	},
                	content:function (){
                    	"step 0"
                    	event.dialog=lib.skill.wujinmoshiRE2.createDialog(target,player);
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
                    	};
						game.saveConfig('wujinmoshiESkill',result);
                	},
				};
				lib.translate.wujinmoshiRE1='获取技能';
				lib.translate.wujinmoshiRE2='获取技能';
				lib.skill._wujinmoshiDamage={
					trigger:{
						source:'damageBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiDamage>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiDamage;
					},
				};
				lib.skill._wujinmoshiDamageE={
					trigger:{
						source:'damageBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDamageI;
					},
				};
            	lib.skill._wujinmoshiMaxHandCard={
					mod:{
    					maxHandcard:function (player,num){
            				if(player==game.me&&lib.config.wujinmoshiMaxHandCard>0) return num+lib.config.wujinmoshiMaxHandCard;
            				return num;
    					},
					},
				};
            	lib.skill._wujinmoshiMaxHandCardE={
					mod:{
    					maxHandcard:function (player,num){
            				if(player!=game.me) return num+Math.floor(lib.config.wujinmoshiDXB/5)-lib.config.wujinmoshiMaxHandCardI;
            				return num;
    					},
					},
				};
            	lib.skill._wujinmoshiDraw={
					trigger:{
						player:'drawBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiDraw>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiDraw;
					},
				};
            	lib.skill._wujinmoshiDrawE={
					trigger:{
						player:'drawBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						if(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI<3){
							trigger.num+=Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI;
						}else{
							trigger.num+=3;
						};
					},
				};
            	lib.skill._wujinmoshiRecover={
					trigger:{
						player:'recoverBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiRecover>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiRecover;
					},
				};
            	lib.skill._wujinmoshiRecoverE={
					trigger:{
						player:'recoverBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=Math.floor(lib.config.wujinmoshiDXB/10)-lib.config.wujinmoshiRecoverI;
					},
				};
				if(lib.config.wujinmoshiP==undefined){
					alert('未选择进行无尽模式的武将，重新载入游戏');
					game.reload();
				};
				if(wujinmoshiBAGJM) wujinmoshiBAGJM.delete();
			},
};
};
};
			var jilueduijueCharacter1=[];
			for(i in lib.character){
				if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) jilueduijueCharacter1.push(i);
			};
			var jilueduijueCharacter=jilueduijueCharacter1.randomGets(25);
		if(lib.config.jilueduijue1==undefined) game.saveConfig('jilueduijue1',jilueduijueCharacter[0]);
		if(lib.config.jilueduijue2==undefined) game.saveConfig('jilueduijue2',jilueduijueCharacter[1]);
		if(lib.config.jilueduijue3==undefined) game.saveConfig('jilueduijue3',jilueduijueCharacter[2]);
		if(lib.config.jilueduijue4==undefined) game.saveConfig('jilueduijue4',jilueduijueCharacter[3]);
		if(lib.config.jilueduijue5==undefined) game.saveConfig('jilueduijue5',jilueduijueCharacter[4]);
		if(lib.config.jilueduijue6==undefined) game.saveConfig('jilueduijue6',jilueduijueCharacter[5]);
		if(lib.config.jilueduijue7==undefined) game.saveConfig('jilueduijue7',jilueduijueCharacter[6]);
		if(lib.config.jilueduijue8==undefined) game.saveConfig('jilueduijue8',jilueduijueCharacter[7]);
		if(lib.config.jilueduijue9==undefined) game.saveConfig('jilueduijue9',jilueduijueCharacter[8]);
		if(lib.config.jilueduijue10==undefined) game.saveConfig('jilueduijue10',jilueduijueCharacter[9]);
		if(lib.config.jilueduijue11==undefined) game.saveConfig('jilueduijue11',jilueduijueCharacter[10]);
		if(lib.config.jilueduijue12==undefined) game.saveConfig('jilueduijue12',jilueduijueCharacter[11]);
		if(lib.config.jilueduijue13==undefined) game.saveConfig('jilueduijue13',jilueduijueCharacter[12]);
		if(lib.config.jilueduijue14==undefined) game.saveConfig('jilueduijue14',jilueduijueCharacter[13]);
		if(lib.config.jilueduijue15==undefined) game.saveConfig('jilueduijue15',jilueduijueCharacter[14]);
		if(lib.config.jilueduijue16==undefined) game.saveConfig('jilueduijue16',jilueduijueCharacter[15]);
		if(lib.config.jilueduijue17==undefined) game.saveConfig('jilueduijue17',jilueduijueCharacter[16]);
		if(lib.config.jilueduijue18==undefined) game.saveConfig('jilueduijue18',jilueduijueCharacter[17]);
		if(lib.config.jilueduijue19==undefined) game.saveConfig('jilueduijue19',jilueduijueCharacter[18]);
		if(lib.config.jilueduijue20==undefined) game.saveConfig('jilueduijue20',jilueduijueCharacter[19]);
		if(lib.config.jilueduijue21==undefined) game.saveConfig('jilueduijue21',jilueduijueCharacter[20]);
		if(lib.config.jilueduijue22==undefined) game.saveConfig('jilueduijue22',jilueduijueCharacter[21]);
		if(lib.config.jilueduijue23==undefined) game.saveConfig('jilueduijue23',jilueduijueCharacter[22]);
		if(lib.config.jilueduijue24==undefined) game.saveConfig('jilueduijue24',jilueduijueCharacter[23]);
		if(lib.config.jilueduijue25==undefined) game.saveConfig('jilueduijue25',jilueduijueCharacter[24]);
		if(lib.config.gameMeHasPlayer1==undefined&&lib.config.gameMeHasPlayerA==undefined){
			game.saveConfig('gameMeHasPlayer1',lib.config.jilueduijue1);
			game.saveConfig('gameMeHasPlayerHp1',lib.character[lib.config.jilueduijue1][2]);
			game.saveConfig('gameMeHasPlayerA',true);
		};
		if(lib.config.jilueduijueDXG==undefined) game.saveConfig('jilueduijueDXG',1);
		game.saveConfig('jilueduijueYZR',undefined);
		if(lib.config.jilueduijueND==undefined) game.saveConfig('jilueduijueND','medium');
		game.saveConfig('bingjingliangzuYZR',undefined);
		if(lib.config.jilueduijueEasy==undefined) game.saveConfig('jilueduijueEasy',0);
		if(lib.config.jilueduijuemedium==undefined) game.saveConfig('jilueduijuemedium',0);
		if(lib.config.jilueduijuehard==undefined) game.saveConfig('jilueduijuehard',0);

	if(config.jilueduijue){
	game.jilueduijueRE=function(){
						game.saveConfig('jilueduijue1',undefined);
						game.saveConfig('jilueduijue2',undefined);
						game.saveConfig('jilueduijue3',undefined);
						game.saveConfig('jilueduijue4',undefined);
						game.saveConfig('jilueduijue5',undefined);
						game.saveConfig('jilueduijue6',undefined);
						game.saveConfig('jilueduijue7',undefined);
						game.saveConfig('jilueduijue8',undefined);
						game.saveConfig('jilueduijue9',undefined);
						game.saveConfig('jilueduijue10',undefined);
						game.saveConfig('jilueduijue11',undefined);
						game.saveConfig('jilueduijue12',undefined);
						game.saveConfig('jilueduijue13',undefined);
						game.saveConfig('jilueduijue14',undefined);
						game.saveConfig('jilueduijue15',undefined);
						game.saveConfig('jilueduijue16',undefined);
						game.saveConfig('jilueduijue17',undefined);
						game.saveConfig('jilueduijue18',undefined);
						game.saveConfig('jilueduijue19',undefined);
						game.saveConfig('jilueduijue20',undefined);
						game.saveConfig('jilueduijue21',undefined);
						game.saveConfig('jilueduijue22',undefined);
						game.saveConfig('jilueduijue23',undefined);
						game.saveConfig('jilueduijue24',undefined);
						game.saveConfig('jilueduijue25',undefined);
						
						
						game.saveConfig('jilueduijueE',undefined);
						game.saveConfig('jilueduijueE1',undefined);
						
						
						game.saveConfig('jilueduijue2a',undefined);
						game.saveConfig('jilueduijue3a',undefined);
						game.saveConfig('jilueduijue4a',undefined);
						game.saveConfig('jilueduijue5a',undefined);
						game.saveConfig('jilueduijue6a',undefined);
						game.saveConfig('jilueduijue7a',undefined);
						game.saveConfig('jilueduijue8a',undefined);
						game.saveConfig('jilueduijue9a',undefined);
						game.saveConfig('jilueduijue10a',undefined);
						game.saveConfig('jilueduijue11a',undefined);
						game.saveConfig('jilueduijue12a',undefined);
						game.saveConfig('jilueduijue13a',undefined);
						game.saveConfig('jilueduijue14a',undefined);
						game.saveConfig('jilueduijue15a',undefined);
						game.saveConfig('jilueduijue16a',undefined);
						game.saveConfig('jilueduijue17a',undefined);
						game.saveConfig('jilueduijue18a',undefined);
						game.saveConfig('jilueduijue19a',undefined);
						game.saveConfig('jilueduijue20a',undefined);
						game.saveConfig('jilueduijue21a',undefined);
						game.saveConfig('jilueduijue22a',undefined);
						game.saveConfig('jilueduijue23a',undefined);
						game.saveConfig('jilueduijue24a',undefined);
						game.saveConfig('jilueduijue25a',undefined);
						
						
						game.saveConfig('gameMeHasPlayer1',undefined);
						game.saveConfig('gameMeHasPlayer2',undefined);
						game.saveConfig('gameMeHasPlayer3',undefined);
						game.saveConfig('gameMeHasPlayer4',undefined);
						game.saveConfig('gameMeHasPlayer5',undefined);
						game.saveConfig('gameMeHasPlayerA',undefined);
						
						
						game.saveConfig('gameMeHasPlayerHp1',undefined);
						game.saveConfig('gameMeHasPlayerHp2',undefined);
						game.saveConfig('gameMeHasPlayerHp3',undefined);
						game.saveConfig('gameMeHasPlayerHp4',undefined);
						game.saveConfig('gameMeHasPlayerHp5',undefined);
						
						
						game.saveConfig('jilueduijueDXG',undefined);
						
						
						game.reload();
					};
	if ( lib.brawl ) {
lib.brawl.jilueduijue = {
            name:'极略对决',
	        mode:'identity',
            intro:'',
            showcase:function(init){
//				window.resizeTo(1000, 650);
//				window.onresize=function(){
//					window.resizeTo(1000, 650);
//				};
				this.style.width='575px';
				if(lib.config.jilueduijueYZR!=true){
				var jilueduijueSM=ui.create.div('');
				if(lib.device){
					jilueduijueSM.innerHTML='单击选择挑战武将，点击取消或确定后弹出武将资料';
				}else{
					jilueduijueSM.innerHTML='单击弹出武将资料，双击选择挑战武将';
				};
				jilueduijueSM.style.left='100px';
				jilueduijueSM.style.top='0px';
				this.appendChild(jilueduijueSM);
				

				var jilueduijueRENDS=ui.create.div('');
				if(lib.config.jilueduijueE==undefined){
					jilueduijueRENDS.innerHTML='未选择对手';
				}else{
					if(lib.config.jilueduijueE1==undefined){
						jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE];
					}else{
						jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE]+'和'+lib.translate[lib.config.jilueduijueE1];
					};
				};
				jilueduijueRENDS.style.left='0px';
				jilueduijueRENDS.style.top='20px';
				this.appendChild(jilueduijueRENDS);
				setInterval(function(){
					if(lib.config.jilueduijueE==undefined){
						jilueduijueRENDS.innerHTML='未选择对手';
					}else{
						if(lib.config.jilueduijueE1==undefined){
							jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE];
						}else{
							jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE]+'和'+lib.translate[lib.config.jilueduijueE1];
						};
					};
				},100);
				
				
				var jilueduijueDXG=ui.create.div('');
				if(lib.config.jilueduijueDXG<=5){
					jilueduijueDXG.innerHTML='第'+get.cnNumber(lib.config.jilueduijueDXG)+'关';
				}else{
					jilueduijueDXG.innerHTML='已通关'
				};
				jilueduijueDXG.style.left='0px';
				jilueduijueDXG.style.top='0px';
				this.appendChild(jilueduijueDXG);
				setInterval(function(){
					if(lib.config.jilueduijueDXG<=5){
						jilueduijueDXG.innerHTML='第'+get.cnNumber(lib.config.jilueduijueDXG)+'关';
					}else{
						jilueduijueDXG.innerHTML='已通关'
					};
				},100);
				
				
				var jilueduijuePlayer=ui.create.div('');
				jilueduijuePlayer.innerHTML='你的阵容：';
				jilueduijuePlayer.style.left='0px';
				jilueduijuePlayer.style.top='40px';
				this.appendChild(jilueduijuePlayer);
				
				
				var jilueduijuePlayer1=ui.create.div('');
				if(lib.config.gameMeHasPlayer1!=undefined){
					jilueduijuePlayer1.innerHTML=lib.translate[lib.config.gameMeHasPlayer1]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp1)+'血';
				}else{
					jilueduijuePlayer1.innerHTML='未拥有'
				};
				jilueduijuePlayer1.style.left='0px';
				jilueduijuePlayer1.style.top='60px';
				this.appendChild(jilueduijuePlayer1);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer1!=undefined){
						jilueduijuePlayer1.innerHTML=lib.translate[lib.config.gameMeHasPlayer1]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp1)+'血';;
					}else{
					jilueduijuePlayer1.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer2=ui.create.div('');
				if(lib.config.gameMeHasPlayer2!=undefined){
					jilueduijuePlayer2.innerHTML=lib.translate[lib.config.gameMeHasPlayer2]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp2)+'血';;
				}else{
					jilueduijuePlayer2.innerHTML='未拥有'
				};
				jilueduijuePlayer2.style.left='0px';
				jilueduijuePlayer2.style.top='80px';
				this.appendChild(jilueduijuePlayer2);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer2!=undefined){
						jilueduijuePlayer2.innerHTML=lib.translate[lib.config.gameMeHasPlayer2]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp2)+'血';;
					}else{
					jilueduijuePlayer2.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer3=ui.create.div('');
				if(lib.config.gameMeHasPlayer3!=undefined){
					jilueduijuePlayer3.innerHTML=lib.translate[lib.config.gameMeHasPlayer3]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp3)+'血';;
				}else{
					jilueduijuePlayer3.innerHTML='未拥有'
				};
				jilueduijuePlayer3.style.left='0px';
				jilueduijuePlayer3.style.top='100px';
				this.appendChild(jilueduijuePlayer3);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer3!=undefined){
						jilueduijuePlayer3.innerHTML=lib.translate[lib.config.gameMeHasPlayer3]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp3)+'血';;
					}else{
					jilueduijuePlayer3.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer4=ui.create.div('');
				if(lib.config.gameMeHasPlayer4!=undefined){
					jilueduijuePlayer4.innerHTML=lib.translate[lib.config.gameMeHasPlayer4]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp4)+'血';;
				}else{
					jilueduijuePlayer4.innerHTML='未拥有'
				};
				jilueduijuePlayer4.style.left='0px';
				jilueduijuePlayer4.style.top='120px';
				this.appendChild(jilueduijuePlayer4);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer4!=undefined){
						jilueduijuePlayer4.innerHTML=lib.translate[lib.config.gameMeHasPlayer4]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp4)+'血';;
					}else{
					jilueduijuePlayer4.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer5=ui.create.div('');
				if(lib.config.gameMeHasPlayer5!=undefined){
					jilueduijuePlayer5.innerHTML=lib.translate[lib.config.gameMeHasPlayer5]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp5)+'血';;
				}else{
					jilueduijuePlayer5.innerHTML='未拥有'
				};
				jilueduijuePlayer5.style.left='0px';
				jilueduijuePlayer5.style.top='140px';
				this.appendChild(jilueduijuePlayer5);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer5!=undefined){
						jilueduijuePlayer5.innerHTML=lib.translate[lib.config.gameMeHasPlayer5]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp5)+'血';;
					}else{
					jilueduijuePlayer5.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijueRE=ui.create.div('.menubutton.large','<span style="cursor:pointer;">重置</span>',function(){
					if(confirm('是否重置?')){
						game.jilueduijueRE();
					};
				});
				jilueduijueRE.style.left='500px';
				jilueduijueRE.style.top='0px';
				this.appendChild(jilueduijueRE);
				
				
				var jilueduijueJS=ui.create.div('.menubutton.large','<span style="cursor:pointer;">规则</span>',function(){
						var jilueduijueJS1=ui.create.dialog('hidden');
						jilueduijueJS1.style.height='calc(100%)';
						jilueduijueJS1.style.width='calc(100%)';
						jilueduijueJS1.style.left='0px';
						jilueduijueJS1.style.top='0px';
						jilueduijueJS1.classList.add('popped');
						jilueduijueJS1.classList.add('static');
						var jilueduijueQX=ui.create.div('.menubutton.round','×',function(){
							jilueduijueJS1.delete();
						});
						jilueduijueQX.style.left='50px';
						jilueduijueQX.style.top='50px';

						var jilueduijueJS2=ui.create.div('','');
						jilueduijueJS2.setBackgroundImage('extension/新英魂之刃/jilueduijueJS.png');
						jilueduijueJS2.style.height='400px';
						jilueduijueJS2.style.width='600px';
						jilueduijueJS2.style.left='50px';
						jilueduijueJS2.style.top='50px';
						
						jilueduijueJS1.add(jilueduijueJS2);
						jilueduijueJS1.add(jilueduijueQX);
						ui.window.appendChild(jilueduijueJS1);
				});
				jilueduijueJS.style.left='500px';
				jilueduijueJS.style.top='50px';
				this.appendChild(jilueduijueJS);
				

				var jilueduijueNDA=ui.create.div('.menubutton.large','<span style="cursor:pointer;">难度</span>',function(){
					if(lib.config.jilueduijueDXG==1&&lib.config.jilueduijueE==undefined){
						if(lib.config.jilueduijueND=='hard'){
							game.saveConfig('jilueduijueND','easy');
							game.say1('设置难度为简单');
						}else if(lib.config.jilueduijueND=='medium'){
							game.saveConfig('jilueduijueND','hard');
							game.say1('设置难度为困难');
						}else if(lib.config.jilueduijueND=='easy'){
							game.saveConfig('jilueduijueND','medium');
							game.say1('设置难度为普通');
						};
					}else{
						alert('对决已经开始，无法设置难度');
					};
				});
				jilueduijueNDA.style.left='500px';
				jilueduijueNDA.style.top='100px';
				this.appendChild(jilueduijueNDA);
				
				
				
				var jilueduijueND=ui.create.div('.menubutton.large','  ');
				jilueduijueND.style.left='500px';
				jilueduijueND.style.top='150px';
				this.appendChild(jilueduijueND);
				setInterval(function(){
					if(lib.config.jilueduijueND=='easy'){
						jilueduijueND.innerHTML='简单';
						jilueduijueND.style.backgroundColor='#04FF00';
					};
					if(lib.config.jilueduijueND=='medium'){
						jilueduijueND.innerHTML='普通';
						jilueduijueND.style.backgroundColor='#FFFB00';
					};
					if(lib.config.jilueduijueND=='hard'){
						jilueduijueND.innerHTML='困难';
						jilueduijueND.style.backgroundColor='red';
					};
				},100);
					
					var jilueduijueJL1=this;
					var jilueduijueJL=ui.create.div('.menubutton.large','<span style="cursor:pointer;">记录</span>',function(){
						jilueduijueJL.delete();
						var jilueduijueJLQX=ui.create.div('.menubutton.large','<span style="cursor:pointer;">关闭</span>',function(){
							jilueduijueJLQX.delete();
							jilueduijueJLJM.delete();
							jilueduijueJL1.appendChild(jilueduijueJL);
						});
						jilueduijueJLQX.style.left='500px';
						jilueduijueJLQX.style.top='200px';
						jilueduijueJL1.appendChild(jilueduijueJLQX);
						jilueduijueJLJM=ui.create.dialog('hidden');
						jilueduijueJLJM.style.height='calc(50%)';
						jilueduijueJLJM.style.width='calc(50%)';
						jilueduijueJLJM.style.left='calc(25%)';
						jilueduijueJLJM.style.top='calc(25%)';
						jilueduijueJLJM.classList.add('popped');
						jilueduijueJLJM.classList.add('static');
						var jilueduijueJLD=ui.create.div('','简单难度通关次数：'+lib.config.jilueduijueEasy+'次<br>普通难度通关次数：'+lib.config.jilueduijuemedium+'次<br>困难难度通关次数：'+lib.config.jilueduijuehard+'次');
						jilueduijueJLJM.add(jilueduijueJLD);
						
						ui.window.appendChild(jilueduijueJLJM);
					});
					jilueduijueJL.style.left='500px';
					jilueduijueJL.style.top='200px';
					this.appendChild(jilueduijueJL);
				
				
				var jilueduijue1=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue1,'');
				});
				jilueduijue1.style.height='55px';
				jilueduijue1.style.width='55px';
				jilueduijue1.style.left='0px';
				jilueduijue1.style.top='155px';
				jilueduijue1.setBackground(lib.config.jilueduijue1,'character');
				this.appendChild(jilueduijue1);
				

				var jilueduijue2=ui.create.div('.card.fullskin');
				jilueduijue2.style.height='55px';
				jilueduijue2.style.width='55px';
				jilueduijue2.style.left='0px';
				jilueduijue2.style.top='122.5px';
				jilueduijue2.setBackground(lib.config.jilueduijue2,'character');
				ondblclickjilueduijue2=false;
				jilueduijue2.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue2]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue2);
						jilueduijue3.hide();
						jilueduijue6.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue3a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue2!=1&&ondblclickjilueduijue2!=2){
							ui.click.charactercard(lib.config.jilueduijue2,'');
						}else{
							if(ondblclickjilueduijue2==2) ondblclickjilueduijue2=false;
							if(ondblclickjilueduijue2==1) ondblclickjilueduijue2=2;
						};
					},500);
				};
				jilueduijue2.ondblclick=function(){
					ondblclickjilueduijue2=1;
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue2]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue2);
						jilueduijue3.hide();
						jilueduijue6.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue3a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue2);


				var jilueduijue3=ui.create.div('.card.fullskin');
				jilueduijue3.style.height='55px';
				jilueduijue3.style.width='55px';
				jilueduijue3.style.left='-62.5px';
				jilueduijue3.style.top='187.5px';
				jilueduijue3.setBackground(lib.config.jilueduijue3,'character');
				ondblclickjilueduijue3=false;
				jilueduijue3.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue3]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue3);
						jilueduijue2.hide();
						jilueduijue4.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						game.saveConfig('jilueduijue2a',true);
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue3!=1&&ondblclickjilueduijue3!=2){
							ui.click.charactercard(lib.config.jilueduijue3,'');
						}else{
							if(ondblclickjilueduijue3==2) ondblclickjilueduijue3=false;
							if(ondblclickjilueduijue3==1) ondblclickjilueduijue3=2;
						};
					},500);
				};
				jilueduijue3.ondblclick=function(){
					ondblclickjilueduijue3=1;
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue3]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue3);
						jilueduijue2.hide();
						jilueduijue4.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						game.saveConfig('jilueduijue2a',true);
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue3);

				
				var jilueduijue4=ui.create.div('.card.fullskin');
				jilueduijue4.style.height='55px';
				jilueduijue4.style.width='55px';
				jilueduijue4.style.left='-62.5px';
				jilueduijue4.style.top='90px';
				jilueduijue4.setBackground(lib.config.jilueduijue4,'character');
				ondblclickjilueduijue4=false;
				jilueduijue4.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue4]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue4);
						jilueduijue5.hide();
						jilueduijue9.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue4!=1&&ondblclickjilueduijue4!=2){
							ui.click.charactercard(lib.config.jilueduijue4,'');
						}else{
							if(ondblclickjilueduijue4==2) ondblclickjilueduijue4=false;
							if(ondblclickjilueduijue4==1) ondblclickjilueduijue4=2;
						};
					},500);
				};
				jilueduijue4.ondblclick=function(){
					ondblclickjilueduijue4=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue4]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue4);
						jilueduijue5.hide();
						jilueduijue9.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue4);


				var jilueduijue5=ui.create.div('.card.fullskin');
				jilueduijue5.style.height='55px';
				jilueduijue5.style.width='55px';
				jilueduijue5.style.left='-125px';
				jilueduijue5.style.top='155px';
				jilueduijue5.setBackground(lib.config.jilueduijue5,'character');
				ondblclickjilueduijue5=false;
				jilueduijue5.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue5]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue5);
						jilueduijue4.hide();
						jilueduijue6.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue5!=1&&ondblclickjilueduijue5!=2){
							ui.click.charactercard(lib.config.jilueduijue5,'');
						}else{
							if(ondblclickjilueduijue5==2) ondblclickjilueduijue5=false;
							if(ondblclickjilueduijue5==1) ondblclickjilueduijue5=2;
						};
					},500);
				};
				jilueduijue5.ondblclick=function(){
					ondblclickjilueduijue5=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue5]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue5);
						jilueduijue4.hide();
						jilueduijue6.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue5);


				var jilueduijue6=ui.create.div('.card.fullskin');
				jilueduijue6.style.height='55px';
				jilueduijue6.style.width='55px';
				jilueduijue6.style.left='-187.5px';
				jilueduijue6.style.top='220px';
				jilueduijue6.setBackground(lib.config.jilueduijue6,'character');
				ondblclickjilueduijue6=false;
				jilueduijue6.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue6]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue6);
						jilueduijue5.hide();
						jilueduijue8.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue6!=1&&ondblclickjilueduijue6!=2){
							ui.click.charactercard(lib.config.jilueduijue6,'');
						}else{
							if(ondblclickjilueduijue6==2) ondblclickjilueduijue6=false;
							if(ondblclickjilueduijue6==1) ondblclickjilueduijue6=2;
						};
					},500);
				};
				jilueduijue6.ondblclick=function(){
					ondblclickjilueduijue6=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue6]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue6);
						jilueduijue5.hide();
						jilueduijue8.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue6);


				var jilueduijue7=ui.create.div('.card.fullskin');
				jilueduijue7.style.height='55px';
				jilueduijue7.style.width='55px';
				jilueduijue7.style.left='-187px';
				jilueduijue7.style.top='57.5px';
				jilueduijue7.setBackground(lib.config.jilueduijue7,'character');
				ondblclickjilueduijue7=false;
				jilueduijue7.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue7]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue7);
						jilueduijue8.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue7!=1&&ondblclickjilueduijue7!=2){
							ui.click.charactercard(lib.config.jilueduijue7,'');
						}else{
							if(ondblclickjilueduijue7==2) ondblclickjilueduijue7=false;
							if(ondblclickjilueduijue7==1) ondblclickjilueduijue7=2;
						};
					},500);
				};
				jilueduijue7.ondblclick=function(){
					ondblclickjilueduijue7=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue7]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue7);
						jilueduijue8.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue7);


				var jilueduijue8=ui.create.div('.card.fullskin');
				jilueduijue8.style.height='55px';
				jilueduijue8.style.width='55px';
				jilueduijue8.style.left='-250px';
				jilueduijue8.style.top='122.5px';
				jilueduijue8.setBackground(lib.config.jilueduijue8,'character');
				ondblclickjilueduijue8=false;
				jilueduijue8.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue8]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue8);
						jilueduijue7.hide();
						jilueduijue9.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue8!=1&&ondblclickjilueduijue8!=2){
							ui.click.charactercard(lib.config.jilueduijue8,'');
						}else{
							if(ondblclickjilueduijue8==2) ondblclickjilueduijue8=false;
							if(ondblclickjilueduijue8==1) ondblclickjilueduijue8=2;
						};
					},500);
				};
				jilueduijue8.ondblclick=function(){
					ondblclickjilueduijue8=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue8]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue8);
						jilueduijue7.hide();
						jilueduijue9.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue8);


				var jilueduijue9=ui.create.div('.card.fullskin');
				jilueduijue9.style.height='55px';
				jilueduijue9.style.width='55px';
				jilueduijue9.style.left='-312.75px';
				jilueduijue9.style.top='187px';
				jilueduijue9.setBackground(lib.config.jilueduijue9,'character');
				ondblclickjilueduijue9=false;
				jilueduijue9.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue9]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue9);
						jilueduijue8.hide();
						jilueduijue10.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue9!=1&&ondblclickjilueduijue9!=2){
							ui.click.charactercard(lib.config.jilueduijue9,'');
						}else{
							if(ondblclickjilueduijue9==2) ondblclickjilueduijue9=false;
							if(ondblclickjilueduijue9==1) ondblclickjilueduijue9=2;
						};
					},500);
				};
				jilueduijue9.ondblclick=function(){
					ondblclickjilueduijue9=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue9]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue9);
						jilueduijue8.hide();
						jilueduijue10.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue9);


				var jilueduijue10=ui.create.div('.card.fullskin');
				jilueduijue10.style.height='55px';
				jilueduijue10.style.width='55px';
				jilueduijue10.style.left='191.5px';
				jilueduijue10.style.top='187px';
				jilueduijue10.setBackground(lib.config.jilueduijue10,'character');
				ondblclickjilueduijue10=false;
				jilueduijue10.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue10]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue10);
						jilueduijue9.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue10!=1&&ondblclickjilueduijue10!=2){
							ui.click.charactercard(lib.config.jilueduijue10,'');
						}else{
							if(ondblclickjilueduijue10==2) ondblclickjilueduijue10=false;
							if(ondblclickjilueduijue10==1) ondblclickjilueduijue10=2;
						};
					},500);
				};
				jilueduijue10.ondblclick=function(){
					ondblclickjilueduijue10=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue10]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue10);
						jilueduijue9.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue10);


				var jilueduijue11=ui.create.div('.card.fullskin');
				jilueduijue11.style.height='55px';
				jilueduijue11.style.width='55px';
				jilueduijue11.style.left='193.5px';
				jilueduijue11.style.top='-40.5px';
				jilueduijue11.setBackground(lib.config.jilueduijue11,'character');
				ondblclickjilueduijue11=false;
				jilueduijue11.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue11]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue11);
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue11!=1&&ondblclickjilueduijue11!=2){
							ui.click.charactercard(lib.config.jilueduijue11,'');
						}else{
							if(ondblclickjilueduijue11==2) ondblclickjilueduijue11=false;
							if(ondblclickjilueduijue11==1) ondblclickjilueduijue11=2;
						};
					},500);
				};
				jilueduijue11.ondblclick=function(){
					ondblclickjilueduijue11=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue11]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue11);
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue11);


				var jilueduijue12=ui.create.div('.card.fullskin');
				jilueduijue12.style.height='55px';
				jilueduijue12.style.width='55px';
				jilueduijue12.style.left='130px';
				jilueduijue12.style.top='24.5px';
				jilueduijue12.setBackground(lib.config.jilueduijue12,'character');
				ondblclickjilueduijue12=false;
				jilueduijue12.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue12]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue12);
						jilueduijue11.hide();
						jilueduijue13.hide();
						jilueduijue16.hide();
						jilueduijue18.hide();
						jilueduijue21.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue12!=1&&ondblclickjilueduijue12!=2){
							ui.click.charactercard(lib.config.jilueduijue12,'');
						}else{
							if(ondblclickjilueduijue12==2) ondblclickjilueduijue12=false;
							if(ondblclickjilueduijue12==1) ondblclickjilueduijue12=2;
						};
					},500);
				};
				jilueduijue12.ondblclick=function(){
					ondblclickjilueduijue12=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue12]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue12);
						jilueduijue11.hide();
						jilueduijue13.hide();
						jilueduijue16.hide();
						jilueduijue18.hide();
						jilueduijue21.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue12);


				var jilueduijue13=ui.create.div('.card.fullskin');
				jilueduijue13.style.height='55px';
				jilueduijue13.style.width='55px';
				jilueduijue13.style.left='67px';
				jilueduijue13.style.top='89.5px';
				jilueduijue13.setBackground(lib.config.jilueduijue13,'character');
				ondblclickjilueduijue13=false;
				jilueduijue13.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue13]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue13);
						jilueduijue12.hide();
						jilueduijue14.hide();
						jilueduijue17.hide();
						jilueduijue19.hide();
						jilueduijue22.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue13!=1&&ondblclickjilueduijue13!=2){
							ui.click.charactercard(lib.config.jilueduijue13,'');
						}else{
							if(ondblclickjilueduijue13==2) ondblclickjilueduijue13=false;
							if(ondblclickjilueduijue13==1) ondblclickjilueduijue13=2;
						};
					},500);
				};
				jilueduijue13.ondblclick=function(){
					ondblclickjilueduijue13=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue13]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue13);
						jilueduijue12.hide();
						jilueduijue14.hide();
						jilueduijue17.hide();
						jilueduijue19.hide();
						jilueduijue22.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue13);


				var jilueduijue14=ui.create.div('.card.fullskin');
				jilueduijue14.style.height='55px';
				jilueduijue14.style.width='55px';
				jilueduijue14.style.left='4.5px';
				jilueduijue14.style.top='154.5px';
				jilueduijue14.setBackground(lib.config.jilueduijue14,'character');
				ondblclickjilueduijue14=false;
				jilueduijue14.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue14]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue14);
						jilueduijue13.hide();
						jilueduijue15.hide();
						jilueduijue18.hide();
						jilueduijue20.hide();
						jilueduijue23.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue23a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue14!=1&&ondblclickjilueduijue14!=2){
							ui.click.charactercard(lib.config.jilueduijue14,'');
						}else{
							if(ondblclickjilueduijue14==2) ondblclickjilueduijue14=false;
							if(ondblclickjilueduijue14==1) ondblclickjilueduijue14=2;
						};
					},500);
				};
				jilueduijue14.ondblclick=function(){
					ondblclickjilueduijue14=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue14]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue14);
						jilueduijue13.hide();
						jilueduijue15.hide();
						jilueduijue18.hide();
						jilueduijue20.hide();
						jilueduijue23.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue23a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue14);


				var jilueduijue15=ui.create.div('.card.fullskin');
				jilueduijue15.style.height='55px';
				jilueduijue15.style.width='55px';
				jilueduijue15.style.left='-58.5px';
				jilueduijue15.style.top='219.5px';
				jilueduijue15.setBackground(lib.config.jilueduijue15,'character');
				ondblclickjilueduijue15=false;
				jilueduijue15.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue15]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue15);
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue15!=1&&ondblclickjilueduijue15!=2){
							ui.click.charactercard(lib.config.jilueduijue15,'');
						}else{
							if(ondblclickjilueduijue15==2) ondblclickjilueduijue15=false;
							if(ondblclickjilueduijue15==1) ondblclickjilueduijue15=2;
						};
					},500);
				};
				jilueduijue15.ondblclick=function(){
					ondblclickjilueduijue15=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue15]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue15);
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue15);


				var jilueduijue16=ui.create.div('.card.fullskin');
				jilueduijue16.style.height='55px';
				jilueduijue16.style.width='55px';
				jilueduijue16.style.left='-40px';
				jilueduijue16.style.top='-40px';
				jilueduijue16.setBackground(lib.config.jilueduijue16,'character');
				ondblclickjilueduijue16=false;
				jilueduijue16.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue16]+'和'+lib.translate[lib.config.jilueduijue21]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue16);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue21);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue16!=1&&ondblclickjilueduijue16!=2){
							ui.click.charactercard(lib.config.jilueduijue16,'');
						}else{
							if(ondblclickjilueduijue16==2) ondblclickjilueduijue16=false;
							if(ondblclickjilueduijue16==1) ondblclickjilueduijue16=2;
						};
					},500);
				};
				jilueduijue16.ondblclick=function(){
					ondblclickjilueduijue16=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue16]+'和'+lib.translate[lib.config.jilueduijue21]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue16);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue21);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue16);


				var jilueduijue17=ui.create.div('.card.fullskin');
				jilueduijue17.style.height='55px';
				jilueduijue17.style.width='55px';
				jilueduijue17.style.left='-102.5px';
				jilueduijue17.style.top='25px';
				jilueduijue17.setBackground(lib.config.jilueduijue17,'character');
				ondblclickjilueduijue17=false;
				jilueduijue17.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue17]+'和'+lib.translate[lib.config.jilueduijue22]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue17);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue22);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue17!=1&&ondblclickjilueduijue17!=2){
							ui.click.charactercard(lib.config.jilueduijue17,'');
						}else{
							if(ondblclickjilueduijue17==2) ondblclickjilueduijue17=false;
							if(ondblclickjilueduijue17==1) ondblclickjilueduijue17=2;
						};
					},500);
				};
				jilueduijue17.ondblclick=function(){
					ondblclickjilueduijue17=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue17]+'和'+lib.translate[lib.config.jilueduijue22]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue17);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue22);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue17);


				var jilueduijue18=ui.create.div('.card.fullskin');
				jilueduijue18.style.height='55px';
				jilueduijue18.style.width='55px';
				jilueduijue18.style.left='-165.5px';
				jilueduijue18.style.top='90px';
				jilueduijue18.setBackground(lib.config.jilueduijue18,'character');
				ondblclickjilueduijue18=false;
				jilueduijue18.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue18]+'和'+lib.translate[lib.config.jilueduijue23]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue18);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue23);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue18!=1&&ondblclickjilueduijue18!=2){
							ui.click.charactercard(lib.config.jilueduijue18,'');
						}else{
							if(ondblclickjilueduijue18==2) ondblclickjilueduijue18=false;
							if(ondblclickjilueduijue18==1) ondblclickjilueduijue18=2;
						};
					},500);
				};
				jilueduijue18.ondblclick=function(){
					ondblclickjilueduijue18=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue18]+'和'+lib.translate[lib.config.jilueduijue23]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue18);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue23);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue18);


				var jilueduijue19=ui.create.div('.card.fullskin');
				jilueduijue19.style.height='55px';
				jilueduijue19.style.width='55px';
				jilueduijue19.style.left='275px';
				jilueduijue19.style.top='89px';
				jilueduijue19.setBackground(lib.config.jilueduijue19,'character');
				ondblclickjilueduijue19=false;
				jilueduijue19.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue19]+'和'+lib.translate[lib.config.jilueduijue24]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue19);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue24);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue19!=1&&ondblclickjilueduijue19!=2){
							ui.click.charactercard(lib.config.jilueduijue19,'');
						}else{
							if(ondblclickjilueduijue19==2) ondblclickjilueduijue19=false;
							if(ondblclickjilueduijue19==1) ondblclickjilueduijue19=2;
						};
					},500);
				};
				jilueduijue19.ondblclick=function(){
					ondblclickjilueduijue19=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue19]+'和'+lib.translate[lib.config.jilueduijue24]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue19);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue24);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue19);


				var jilueduijue20=ui.create.div('.card.fullskin');
				jilueduijue20.style.height='55px';
				jilueduijue20.style.width='55px';
				jilueduijue20.style.left='212.5px';
				jilueduijue20.style.top='154px';
				jilueduijue20.setBackground(lib.config.jilueduijue20,'character');
				ondblclickjilueduijue20=false;
				jilueduijue20.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue20]+'和'+lib.translate[lib.config.jilueduijue25]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue20);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue25);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue20!=1&&ondblclickjilueduijue20!=2){
							ui.click.charactercard(lib.config.jilueduijue20,'');
						}else{
							if(ondblclickjilueduijue20==2) ondblclickjilueduijue20=false;
							if(ondblclickjilueduijue20==1) ondblclickjilueduijue20=2;
						};
					},500);
				};
				jilueduijue20.ondblclick=function(){
					ondblclickjilueduijue20=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue20]+'和'+lib.translate[lib.config.jilueduijue25]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue20);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue25);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue20);


				var jilueduijue21=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue21,'');
				});
				jilueduijue21.style.height='55px';
				jilueduijue21.style.width='55px';
				jilueduijue21.style.left='207.5px';
				jilueduijue21.style.top='-106px';
				jilueduijue21.setBackground(lib.config.jilueduijue21,'character');
				this.appendChild(jilueduijue21);


				var jilueduijue22=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue22,'');
				});
				jilueduijue22.style.height='55px';
				jilueduijue22.style.width='55px';
				jilueduijue22.style.left='146px';
				jilueduijue22.style.top='-41px';
				jilueduijue22.setBackground(lib.config.jilueduijue22,'character');
				this.appendChild(jilueduijue22);


				var jilueduijue23=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue23,'');
				});
				jilueduijue23.style.height='55px';
				jilueduijue23.style.width='55px';
				jilueduijue23.style.left='83px';
				jilueduijue23.style.top='24px';
				jilueduijue23.setBackground(lib.config.jilueduijue23,'character');
				this.appendChild(jilueduijue23);


				var jilueduijue24=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue24,'');
				});
				jilueduijue24.style.height='55px';
				jilueduijue24.style.width='55px';
				jilueduijue24.style.left='20px';
				jilueduijue24.style.top='89px';
				jilueduijue24.setBackground(lib.config.jilueduijue24,'character');
				this.appendChild(jilueduijue24);


				var jilueduijue25=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue25,'');
				});
				jilueduijue25.style.height='55px';
				jilueduijue25.style.width='55px';
				jilueduijue25.style.left='-43px';
				jilueduijue25.style.top='154px';
				jilueduijue25.setBackground(lib.config.jilueduijue25,'character');
				this.appendChild(jilueduijue25);
				
				
				if(lib.config.jilueduijue2a==true) jilueduijue2.hide();
				if(lib.config.jilueduijue3a==true) jilueduijue3.hide();
				if(lib.config.jilueduijue4a==true) jilueduijue4.hide();
				if(lib.config.jilueduijue5a==true) jilueduijue5.hide();
				if(lib.config.jilueduijue6a==true) jilueduijue6.hide();
				if(lib.config.jilueduijue7a==true) jilueduijue7.hide();
				if(lib.config.jilueduijue8a==true) jilueduijue8.hide();
				if(lib.config.jilueduijue9a==true) jilueduijue9.hide();
				if(lib.config.jilueduijue10a==true) jilueduijue10.hide();
				if(lib.config.jilueduijue11a==true) jilueduijue11.hide();
				if(lib.config.jilueduijue12a==true) jilueduijue12.hide();
				if(lib.config.jilueduijue13a==true) jilueduijue13.hide();
				if(lib.config.jilueduijue14a==true) jilueduijue14.hide();
				if(lib.config.jilueduijue15a==true) jilueduijue15.hide();
				if(lib.config.jilueduijue16a==true) jilueduijue16.hide();
				if(lib.config.jilueduijue17a==true) jilueduijue17.hide();
				if(lib.config.jilueduijue18a==true) jilueduijue18.hide();
				if(lib.config.jilueduijue19a==true) jilueduijue19.hide();
				if(lib.config.jilueduijue20a==true) jilueduijue20.hide();
				if(lib.config.jilueduijue21a==true) jilueduijue21.hide();
				if(lib.config.jilueduijue22a==true) jilueduijue22.hide();
				if(lib.config.jilueduijue23a==true) jilueduijue23.hide();
				if(lib.config.jilueduijue24a==true) jilueduijue24.hide();
				if(lib.config.jilueduijue25a==true) jilueduijue25.hide();
				game.saveConfig('jilueduijueYZR',true);
				};
			},
            content:{
	            gameStart:function(){
					if(game.me.name==lib.config.gameMeHasPlayer1&&lib.config.gameMeHasPlayerHp1!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp1;
					if(game.me.name==lib.config.gameMeHasPlayer2&&lib.config.gameMeHasPlayerHp2!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp2;
					if(game.me.name==lib.config.gameMeHasPlayer3&&lib.config.gameMeHasPlayerHp3!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp3;
					if(game.me.name==lib.config.gameMeHasPlayer4&&lib.config.gameMeHasPlayerHp4!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp4;
					if(game.me.name==lib.config.gameMeHasPlayer5&&lib.config.gameMeHasPlayerHp5!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp5;
					game.me.update();
					game.me.next.init(lib.config.jilueduijueE);
					if(lib.config.jilueduijueDXG==5) game.me.previous.init(lib.config.jilueduijueE1);
					if(lib.config.jilueduijueND=='easy'){
						if(game.me!=game.zhu){
							for(var i=0;i<game.players.length;i++){
								game.players[i].draw(2);
							};
							game.me.insertPhase();
						};
						game.me.identity='zhu';
						game.me.next.identity='fan';
						if(lib.config.jilueduijueDXG==5) game.me.previous.identity='fan';
						game.zhu=game.me;
					}else{
						game.me.identity='fan';
						game.me.next.identity='zhu';
						game.zhu=game.me.next;
						if(game.me.next!=game.zhu){
							game.me.next.insertPhase();
						};
						if(lib.config.jilueduijueDXG==5) game.me.previous.identity='zhong';
					};
					if(lib.config.jilueduijueND=='hard'){
						var pl=game.addPlayer();
						pl.init(jilueduijueCharacter1.randomGet());
						if(lib.config.jilueduijueND=='easy'){
							pl.identity='fan';
							pl.setIdentity('fan');
							pl.node.identity.dataset.color=pl.identity;
						}else{
							pl.identity='zhong';
							pl.setIdentity('zhong');
							pl.node.identity.dataset.color=pl.identity;
						};
					};
					game.showIdentity();
					game.addPlayer=function(all){
						alert('增加角色，违反极略对决规则，重新载入游戏');
						game.reload();
					};
					game.addFellow=function(all){
						alert('增加角色，违反极略对决规则，重新载入游戏');
						game.reload();
					};
					game.swapPlayer=function(all){};
					game.swapControl=function(all){};
				},
                chooseCharacter:function(){
	                var gameMeHasPlayer=[];
	                if(lib.config.gameMeHasPlayer1!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer1);
					if(lib.config.gameMeHasPlayer2!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer2);
					if(lib.config.gameMeHasPlayer3!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer3);
					if(lib.config.gameMeHasPlayer4!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer4);
					if(lib.config.gameMeHasPlayer5!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer5);
	                return gameMeHasPlayer;
                },
                chooseCharacterAi:function(player,list,list2,back){
                    return ;
                },
            },
            init:function(){
				if(lib.config.jilueduijueE==undefined){
					alert('未选择挑战武将，重新载入游戏');
					game.reload();
				};
//				ui.commandnode.classList.add('off');
				lib.config.mode_config.identity.free_choose=false;
				lib.config.mode_config.identity.change_choice=false;
				lib.config.mode_config.identity.change_identity=false;
                game.saveConfig('double_character',false,'identity');
                game.saveConfig('identity_mode','normal','identity');
                if(lib.config.jilueduijueDXG!=5){
					game.saveConfig('player_number','2','identity');
				}else{
					game.saveConfig('player_number','3','identity');
				};
			lib.skill._jilueduijueRE={
				trigger:{
					player:'dieBefore'
				},
				forced:true,
				filter:function (event,player){
					return lib.config.jilueduijueE!=undefined;
				},
				content:function(){
					if(player.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayer1',undefined);
					if(player.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayer2',undefined);
					if(player.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayer3',undefined);
					if(player.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayer4',undefined);
					if(player.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayer5',undefined);
					if(player==game.me){
						if(lib.config.jilueduijueND!='easy') player.discard(player.get('hej'));
						if(lib.config.gameMeHasPlayer1==undefined&&lib.config.gameMeHasPlayer2==undefined&&lib.config.gameMeHasPlayer3==undefined&&lib.config.gameMeHasPlayer4==undefined&&lib.config.gameMeHasPlayer5==undefined){
							alert('你的阵容内没有武将，重置极略对决');
							game.jilueduijueRE();
						}else{
							game.me.useSkill('jilueduijueCS');
							trigger.untrigger();
							trigger.finish();
						};
					}else{
						if(game.players.length==2&&lib.config.jilueduijueND!='hard'){
							if(lib.config.jilueduijueDXG==1){
								game.saveConfig('gameMeHasPlayer2',player.name);
								game.saveConfig('gameMeHasPlayerHp2',lib.character[lib.config.gameMeHasPlayer2][2]);
							};
							if(lib.config.jilueduijueDXG==2){
								game.saveConfig('gameMeHasPlayer3',player.name);
								game.saveConfig('gameMeHasPlayerHp3',lib.character[lib.config.gameMeHasPlayer3][2]);
							};
							if(lib.config.jilueduijueDXG==3){
								game.saveConfig('gameMeHasPlayer4',player.name);
								game.saveConfig('gameMeHasPlayerHp4',lib.character[lib.config.gameMeHasPlayer4][2]);
							};
							if(lib.config.jilueduijueDXG==4){
								game.saveConfig('gameMeHasPlayer5',player.name);
								game.saveConfig('gameMeHasPlayerHp5',lib.character[lib.config.gameMeHasPlayer5][2]);
							};
							if(lib.config.jilueduijueND=='easy'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijueEasy',lib.config.jilueduijueEasy+1);
							if(lib.config.jilueduijueND=='medium'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuemedium',lib.config.jilueduijuemedium+1);
							if(game.me.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayerHp1',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayerHp2',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayerHp3',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayerHp4',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayerHp5',game.me.hp);
							game.saveConfig('jilueduijueDXG',lib.config.jilueduijueDXG+1);
							game.saveConfig('jilueduijueE',undefined);
						}else{
							if(player==game.zhu){
								if(lib.config.jilueduijueDXG==1){
									game.saveConfig('gameMeHasPlayer2',player.name);
									game.saveConfig('gameMeHasPlayerHp2',lib.character[lib.config.gameMeHasPlayer2][2]);
								};
								if(lib.config.jilueduijueDXG==2){
									game.saveConfig('gameMeHasPlayer3',player.name);
									game.saveConfig('gameMeHasPlayerHp3',lib.character[lib.config.gameMeHasPlayer3][2]);
								};
								if(lib.config.jilueduijueDXG==3){
									game.saveConfig('gameMeHasPlayer4',player.name);
									game.saveConfig('gameMeHasPlayerHp4',lib.character[lib.config.gameMeHasPlayer4][2]);
								};
								if(lib.config.jilueduijueDXG==4){
									game.saveConfig('gameMeHasPlayer5',player.name);
									game.saveConfig('gameMeHasPlayerHp5',lib.character[lib.config.gameMeHasPlayer5][2]);
								};
								if(lib.config.jilueduijueND=='medium'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuemedium',lib.config.jilueduijuemedium+1);
								if(lib.config.jilueduijueND=='hard'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuehard',lib.config.jilueduijuehard+1);
								if(game.me.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayerHp1',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayerHp2',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayerHp3',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayerHp4',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayerHp5',game.me.hp);
								game.saveConfig('jilueduijueDXG',lib.config.jilueduijueDXG+1);
								game.saveConfig('jilueduijueE',undefined);
							};
						};
					};
				},
			};
			lib.skill.jilueduijueCS={
				content:function(){
					'step 0'
	                var list=[];
					if(lib.config.gameMeHasPlayer1!=undefined) list.push(lib.config.gameMeHasPlayer1);
					if(lib.config.gameMeHasPlayer2!=undefined) list.push(lib.config.gameMeHasPlayer2);
					if(lib.config.gameMeHasPlayer3!=undefined) list.push(lib.config.gameMeHasPlayer3);
					if(lib.config.gameMeHasPlayer4!=undefined) list.push(lib.config.gameMeHasPlayer4);
					if(lib.config.gameMeHasPlayer5!=undefined) list.push(lib.config.gameMeHasPlayer5);
					player.chooseButton(ui.create.dialog('选择上场的武将',[list,'character']),true);
					'step 1'
					if(result.bool){
						player.init(result.buttons[0].link);
						if(game.me.name==lib.config.gameMeHasPlayer1&&lib.config.gameMeHasPlayerHp1!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp1;
						if(game.me.name==lib.config.gameMeHasPlayer2&&lib.config.gameMeHasPlayerHp2!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp2;
						if(game.me.name==lib.config.gameMeHasPlayer3&&lib.config.gameMeHasPlayerHp3!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp3;
						if(game.me.name==lib.config.gameMeHasPlayer4&&lib.config.gameMeHasPlayerHp4!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp4;
						if(game.me.name==lib.config.gameMeHasPlayer5&&lib.config.gameMeHasPlayerHp5!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp5;
						game.me.update();
						player.draw(2);
					};
				},
			};
			lib.translate.jilueduijueCS='换将';
			if(jilueduijueJLJM) jilueduijueJLJM.delete();
            },
};
};
};
	if(config.nyhzrBoss){
	lib.group.push('nyhzrlong');
	lib.translate.nyhzrlong='<span style="color:#FF7E15;font-size:21px">龙</span>';
	game.addCharacterPack({
		character:{
			"nyhzrlielong":["male","",' ',["nyhzrlielong1"],['forbidai','boss','bossallowed','des:不同日子出现不同属性的龙'],'wu'],
			"nyhzr火龙":["male","nyhzrlong",7,["lielonghuolongjia","lielongweiyan","lielongbaoyan","niepan"],['forbidai']],
			"nyhzr水龙":["male","nyhzrlong",6,["lielongshuilongjia","lielongshilan","lielongxuanwo","lielonghaige","lielongjiliu"],['forbidai']],
			"nyhzr雷龙":["male","nyhzrlong",3,["lielongleilongjia","lielongjilei","lielongqianniao","lielongchaofu"],['forbidai']],
			"nyhzr土龙":["male","nyhzrlong",12,["lielongtulongjia","lielongmoyan","lielonghuachen","lielongdinu"],['forbidai']],
			"nyhzr木龙":["male","nyhzrlong",9,["lielongmulongjia","lielonglongxi","lielongduhua","lielongshenggen"],['forbidai']],
			"nyhzr风龙":["male","nyhzrlong",8,["lielongfenglongjia","lielongfengbao","lielongfengdun","lielongfengshi"],['forbidai']],
			"nyhzr冰龙":["male","nyhzrlong",5,["lielongbinglongjia","lielonghanxi","lielonghangu","lielongyondong"],['forbidai']],
			"mnyhzr灭世魔星BOSS":["male","li",'',["nyhzr亡者之碑BOSS","nyhzr小僵尸BOSS"],['ext:新英魂之刃/mnyhzr灭世魔星.jpg','forbidai','boss','bossallowed','des:<li>并不是每一个婴孩的诞生都得到祝福，犼面锁灵想起初见破靡的景象，一念竟觉已千年。<li>是时魔星出世，天象异乱，来自于太虚混沌的上神们急于知寻襁褓下落，围攻走影谷。破靡双亲虽贵为尸王尸后，也难敌神罚，不死之身归于尘土。谷中密道内通洪流，怒江之水直逼外界天地，肤体冥蓝的婴孩安睡于骨床中顺流疾走，周身尸气盘附，水不沾襟。上神们逐密道而出，却看那安胎骨床经过之处水流一退千里，河岸接壤处草被衰败，这刚出世的尸气便要枯了一整条水路，好在方圆几里渺无人畜，上神们及时截下这灭世胎，护天地人间一份安宁。<li>尸者，集天界晦气,取阴界死气,汇人界怨气而生。僵尸与僵尸所诞之子，溶混沌为体肉，赤瞳冥肤，无魄却任可生长，有别于一般走尸，唤为魔星。所幸世上仅会存有一位魔星，破靡不死，便无后者。上神们为绝后患，决定以神力铸成犼面锁缠绕骨床，贴附上古灵文封印魔星尸气，使其不生不长，永为婴孩，隐于落神坡。<li>当犼面锁因神力产生灵识之时，它陪护破靡已有数百年，从锁孔释放幽蓝色魂光，生成双手，小心翼翼地包裹着破靡。怀里的婴孩由于封印已无尸气，柔弱地好似一般胎儿，时而清醒，因双手被缠住有些恼怒，锁灵便偷偷放松链条，让他动个快活，这泼劲差点没把符文给撕扯坏；如若昏睡，锁灵便为他挡雨遮阳，驱虫赶兽，图个安眠。年华见长，符文越发残破，封印渐失，锁链被尸气灼断，本应及时向上神传信的锁灵，却有了心事，看着魔星从牙牙学语到少年模样，一拖再拖。不知是天资过人还是其他，破靡学话极快，缠着锁灵说自己会乖乖的不想再被捆着，心软彻底变为宠溺。<li>锁灵从初见继续想到破靡第一次落地。那时破靡跑到落神坡脚的花田，脚踏处花草枯竭，他开始意识到自己的尸气会给周围带来不幸，一路大跑直入锁灵怀抱哭诉，让尸气烧坏了犼面锁身的其他地方，发现后懊恼的趴在地上捶骂自己，他抬头，瞪着赤红大眼小心翼翼地问，“我以后还能抱你吗。”真是无可奈何，锁灵花了好久的功夫刚把这小东西哄好，破靡立马又被蛇吞兔吸引了注意，一个飞扑上前，用尸气让两者皆幻为走影，赋予永生，他拍拍蛇与兔的头告诫二位要友好往来，完后对锁灵挑着眉毛，“我的尸气有时候还是蛮有用的嘛！”。<li>眼下犼面锁身已千穿百孔，破靡忧心忡忡，碰也不是不碰也不是。锁灵暗暗决定要保护这个少年，哪怕要违逆上神，它也愿意相信自己所看到的纯粹。它对破靡说，“我的身已残败不堪，一旦损毁，上神便会有所感应。你虽有不死之身却盖不住尸气，而我的灵力可助你迷惑上神，无论你逃之何处，我只愿你童心依旧，天真长久。”语罢，魂光移体，那锁不再是锁，在灵气与尸气交融下越长越大，附着于破靡肩背，灵志尽失。<li>待合魂完毕，破靡方才露出一丝邪魅的笑容。对空一声口哨，唤来了尸蛇与兔，蹲下不耐烦地歪着头，听着尸兽的倾吐。末了兴奋地一拍腿，“找到村庄了？好啊，这场戏演了千年，终于可以吃人了。”<li>只见少年走向落神坡脚，信步缓缓，踩蔫了整片花田。'],'wei'],
			"nyhzr小僵尸":["male","li",3,['nyhzr迅猛','nyhzr噬魂'],['forbidai']],
		},
        skill:{
			"nyhzr尸王降世BOSS":{
				nobracket:true,
				enable:"phaseUse",
				usable:1,
				filterCard:function(card){
					return true;
				},
				check:function(card){
					return 6-ai.get.value(card);
				},
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].name!='mnyhzr灭世魔星BOSS'){
							if(game.players[i].name!='nyhzr小僵尸'){
								game.players[i].damage();
							}else{
								game.players[i].recover();
							};
						}else{
							game.players[i].recover();
						};
					};
				},
				ai:{
					order:8,
					result:{
						player:function (player,target){
							return 1;
						},
					},
				},
			},
            "_timeLimit":{
				mode:['boss'],
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,
				filter:function (event,player){
					return player.storage.亡者之碑time!=1&&game.boss.name=='mnyhzr灭世魔星BOSS';
				},
                content:function (){
                    'step 0'
                    _status.timeCount=10;
                    player.addTempSkill('_timeLimit_timeOver','phaseUseAfter');
                },
                subSkill:{
                    timeOver:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        popup:false,
                        forced:true,
                        content:function (){
                            if(_status.timeCount<=0){
                                delete _status.timeCount;
                                game.stopCountChoose();
                                var evt=_status.event;
                                for(var i=0;i<10;i++){
                                    if(evt&&evt.getParent){
                                        evt=evt.getParent();
                                    };
                                    if(evt.name=='phaseUse'){
                                        evt.skipped=true;
                                        break;
                                    };
                                };
                            };
                        },
                    },
                },
            },
			"nyhzr迅猛":{
    nobracket:true,
    mod:{
        cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
    },
    ai:{
        unequip:true,
        skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
    },
    trigger:{
        player:"phaseDrawBegin",
    },
    forecd:true,
    content:function (){
        trigger.num++;
    },
			},
			"nyhzr噬魂":{
                nobracket:true,
				mode:['boss'],
trigger:{
source:"damageAfter",
},
forced:true,
content:function (){
if(亡者之碑time) 亡者之碑time+=4;
},
			},
			"_nyhzr小僵尸minskinEquip":{
			mode:['boss'],
				mod:{
					cardEnabled:function(card,player){
						if(player.name=='nyhzr小僵尸'){
							if(get.type(card)=='equip') return true;
						}
					}
				}
			},
            "_nyhzr小僵尸minskinEquip1":{
			mode:['boss'],
trigger:{
player:"equipBefore",
},
filter:function (event,player){
return player.name=='nyhzr小僵尸';
},
forced:true,
content:function (){
player.classList.remove('minskin');
},
            },
            "_nyhzr小僵尸minskinEquip2":{
			mode:['boss'],
trigger:{
player:"equipAfter",
},
filter:function (event,player){
return player.name=='nyhzr小僵尸';
},
forced:true,
content:function (){
player.classList.add('minskin');
},
            },
            "nyhzr亡者之碑BOSS":{
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card)!='equip'&&player.storage.亡者之碑time!=1) return false;
					},
				},
                nobracket:true,
				trigger:{
					global:"gameStart",
				},
				forced:true,
				content:function (){
					player.die=function(all){},
					player.init=function(all){},
					player.storage.nyhzr小僵尸BOSSadd=0;
					game.bossinfo.chongzheng=0;
					var 亡者之碑=ui.create.player(null,true);
					亡者之碑.node.avatar.style.backgroundSize='cover';
					亡者之碑.node.avatar.setBackgroundImage('extension/新英魂之刃/亡者之碑.png');
					亡者之碑.node.avatar.show();
					亡者之碑.style.left='calc(45% - 75px)';
					亡者之碑.style.top='calc(40%)';
					亡者之碑.node.count.remove();
					亡者之碑.node.hp.remove();
					亡者之碑.classList.add('minskin');
					var nyhzr亡者之碑BOSSD=ui.create.div('','');
					nyhzr亡者之碑BOSSD.innerHTML='<span style="cursor:pointer;">尸魂：'+lib.config.尸魂+'/100</span>';
					nyhzr亡者之碑BOSSD.style.left='8px';
					nyhzr亡者之碑BOSSD.style.top='6px';
					setInterval(function(){
						nyhzr亡者之碑BOSSD.innerHTML='<span style="cursor:pointer;">尸魂：'+lib.config.尸魂+'/100</span>';
						if(lib.config.尸魂>=100){
							if(lib.config.mnyhzr灭世魔星dj!=true){
								game.saveConfig('mnyhzr灭世魔星dj',true);
								game.say2('获得武将——灭世魔星');
							}else{
								game.changeCoin(1000);
								game.say2('获得1000金币');
							};
							game.saveConfig('尸魂',lib.config.尸魂-100);
						};
					},100);
					亡者之碑.appendChild(nyhzr亡者之碑BOSSD);
					ui.window.appendChild(亡者之碑);
					亡者之碑.node.name.innerHTML='<br><br><br>第一阶段';
					亡者之碑.node.name.style.fontFamily='huangcao';
					player.maxHp=Infinity;
					player.hp=Infinity;
					player.update();
					player.node.hp.hide();
					player.addSkill('qianxing');
					player.node.action.classList.add('freecolor');
					player.node.action.style.opacity=1;
					player.node.action.style.letterSpacing='4px';
					player.node.action.style.marginRight=0;
					player.node.action.style.fontFamily='huangcao';
					player.node.action.innerHTML='';
					亡者之碑time=240;
					var interval=setInterval(function(){
						if(_status.over){
							clearInterval(interval);
							return;
						}
						var sec=亡者之碑time%60;
						if(sec<10){
							sec='0'+sec;
						}
						player.node.action.innerHTML=Math.floor(亡者之碑time/60)+':'+sec;
						if(亡者之碑time<=0&&player.storage.亡者之碑time!=1){
							player.removeSkill('qianxing');
							亡者之碑.node.name.innerHTML='<br><br><br>第二阶段';
							player.node.hp.show();
							player.maxHp=10;
							if(4+player.storage.nyhzr小僵尸BOSSadd>10){
								player.hp=10;
								player.changeHujia(player.storage.nyhzr小僵尸BOSSadd-6)
							}else{
								player.hp=4+player.storage.nyhzr小僵尸BOSSadd;
							};
							player.update();
							player.removeSkill('nyhzr小僵尸BOSS');
							player.storage.亡者之碑time=1;
							player.addSkill('nyhzr生命凋零ol');
							player.addSkill('nyhzr尸王降世BOSS');
							for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player&&game.players[i].name!='nyhzr小僵尸'){
									game.players[i].recover(2);
									game.players[i].draw(3);
								};
							};
				player.die=function(){
					if(_status.roundStart==player){
						_status.roundStart=player.next||player.getNext()||game.players[0];
					}
					var unseen=false;
					if(player.classList.contains('unseen')){
						player.classList.remove('unseen');
						unseen=true;
					}
                    var logvid=game.logv(player,'die',source);
					if(unseen){
						player.classList.add('unseen');
					}
					if(source&&source!=player){
						game.log(player,'被',source,'杀害');
						if(source.stat[source.stat.length-1].kill==undefined){
							source.stat[source.stat.length-1].kill=1;
						}
						else{
							source.stat[source.stat.length-1].kill++;
						}
					}
					else{
						game.log(player,'阵亡')
					}
					event.cards=player.getCards('hej');
					event.playerCards=player.getCards('he');
					if(event.cards.length){
						player.$throw(event.cards,1000);
						game.log(player,'弃置了',event.cards,logvid);
					}
					if(!game.reserveDead){
						for(var mark in player.marks){
							player.unmarkSkill(mark);
						}
						while(player.node.marks.childNodes.length>1){
							player.node.marks.lastChild.remove();
						}
                        game.broadcast(function(player){
                            while(player.node.marks.childNodes.length>1){
    							player.node.marks.lastChild.remove();
    						}
                        },player);
					}
					for(var i in player.tempSkills){
                        player.removeSkill(i);
					}
					var skills=player.getSkills();
					for(var i=0;i<skills.length;i++){
						if(lib.skill[skills[i]].temp){
							player.removeSkill(skills[i]);
						}
					}
                    player.removeEquipTrigger();
                    game.broadcastAll(function(player,cards){
                        player.classList.add('dead');
    					player.classList.remove('turnedover');
    					player.classList.remove('out');
    					player.node.count.innerHTML='0';
    					player.node.hp.hide();
    					player.node.equips.hide();
    					player.node.count.hide();
    					player.previous.next=player.next;
    					player.next.previous=player.previous;
    					game.players.remove(player);
    					game.dead.push(player);
						_status.dying.remove(player);

                        for(var i=0;i<cards.length;i++){
							cards[i].goto(ui.discardPile);
						}
                        if(game.online&&player==game.me&&!_status.over&&!game.controlOver&&!ui.exit){
                            if(lib.mode[lib.configOL.mode].config.dierestart){
                                ui.exit=ui.create.control('退出房间',ui.click.exit);
                            }
                        }

                        if(lib.config.background_speak){
    						if(lib.character[player.name]&&lib.character[player.name][4].contains('die_audio')){
    							game.playAudio('die',player.name);
    						}
    						else if(true){
    							game.playAudio('die',player.name,function(){
									game.playAudio('die',player.name.slice(player.name.indexOf('_')+1));
								});
    						}
    					}
                    },player,event.cards);

					if(!_status.connectMode&&player==game.me&&!_status.over&&!game.controlOver){
						ui.control.show();
						if(get.config('revive')&&lib.mode[lib.config.mode].config.revive&&!ui.revive){
							ui.revive=ui.create.control('revive',ui.click.dierevive);
						}
                        if(get.config('continue_game')&&!ui.continue_game&&lib.mode[lib.config.mode].config.continue_game&&!_status.brawl){
            				ui.continue_game=ui.create.control('再战',game.reloadCurrent);
            			}
						if(get.config('dierestart')&&lib.mode[lib.config.mode].config.dierestart&&!ui.restart){
							ui.restart=ui.create.control('restart',game.reload);
						}
					}

					if(!_status.connectMode&&player==game.me&&!game.modeSwapPlayer){
						if(ui.auto){
							ui.auto.hide();
						}
						if(ui.wuxie) ui.wuxie.hide();
					}
					game.addVideo('diex',player);
					if(event.animate!==false){
						player.$die(source);
					}
					if(player.dieAfter) player.dieAfter(source);
					if(typeof _status.coin=='number'&&source&&!_status.auto){
						if(source==game.me||source.isUnderControl()){
							_status.coin+=10;
						}
					}
					if(source&&lib.config.border_style=='auto'&&(lib.config.autoborder_count=='kill'||lib.config.autoborder_count=='mix')){
						switch(source.node.framebg.dataset.auto){
							case 'gold':case 'silver':source.node.framebg.dataset.auto='gold';break;
							case 'bronze':source.node.framebg.dataset.auto='silver';break;
							default:source.node.framebg.dataset.auto=lib.config.autoborder_start||'bronze';
						}
						if(lib.config.autoborder_count=='kill'){
							source.node.framebg.dataset.decoration=source.node.framebg.dataset.auto;
						}
						else{
							var dnum=0;
							for(var j=0;j<source.stat.length;j++){
								if(source.stat[j].damage!=undefined) dnum+=source.stat[j].damage;
							}
							source.node.framebg.dataset.decoration='';
							switch(source.node.framebg.dataset.auto){
								case 'bronze':if(dnum>=4) source.node.framebg.dataset.decoration='bronze';break;
								case 'silver':if(dnum>=8) source.node.framebg.dataset.decoration='silver';break;
								case 'gold':if(dnum>=12) source.node.framebg.dataset.decoration='gold';break;
							}
						}
						source.classList.add('topcount');
					}
				};
						}
						if(player.storage.亡者之碑time==1) player.node.action.innerHTML=''
						亡者之碑time--;
					},1000);
				},
			},
            "nyhzr小僵尸BOSS":{
                nobracket:true,
                trigger:{
                    player:"phaseEnd",
                },
				forced:true,
				filter:function (event,player){
					return player.storage.nyhzr小僵尸BOSS1!=false||player.storage.nyhzr小僵尸BOSS2!=false||player.storage.nyhzr小僵尸BOSS3!=false;
				},
                content:function (){
					if(player.storage.nyhzr小僵尸BOSS1!=false){
						player.storage.nyhzr小僵尸BOSSadd++;
						if(亡者之碑time) 亡者之碑time-=10;
						var fellow=game.addFellow(1,'nyhzr小僵尸');
						fellow.style.left='calc(55% - 75px)';
						fellow.style.top='calc(25%)';
						fellow.classList.add('minskin');
						fellow.side=player.side;
						fellow.identity=player.identity;
						if(fellow.identity=='zhu') fellow.identity='zhong';
						fellow.setIdentity('僵尸');
						fellow.node.identity.dataset.color='zhu';
						fellow.draw(4);
						fellow.storage.nyhzr小僵尸BOSS1=false;
						player.storage.nyhzr小僵尸BOSS1=false;
					};
					if(player.storage.nyhzr小僵尸BOSS2!=false){
						player.storage.nyhzr小僵尸BOSSadd++;
						if(亡者之碑time) 亡者之碑time-=10;
						var fellow=game.addFellow(1,'nyhzr小僵尸');
						fellow.style.left='calc(40% - 75px)';
						fellow.style.top='calc(50%)';
						fellow.classList.add('minskin');
						fellow.side=player.side;
						fellow.identity=player.identity;
						if(fellow.identity=='zhu') fellow.identity='zhong';
						fellow.setIdentity('僵尸');
						fellow.node.identity.dataset.color='zhu';
						fellow.draw(4);
						fellow.storage.nyhzr小僵尸BOSS2=false;
						player.storage.nyhzr小僵尸BOSS2=false;
					};
					if(player.storage.nyhzr小僵尸BOSS3!=false){
						player.storage.nyhzr小僵尸BOSSadd++;
						if(亡者之碑time) 亡者之碑time-=10;
						var fellow=game.addFellow(1,'nyhzr小僵尸');
						fellow.style.left='calc(35% - 75px)';
						fellow.style.top='calc(20%)';
						fellow.classList.add('minskin');
						fellow.side=player.side;
						fellow.identity=player.identity;
						if(fellow.identity=='zhu') fellow.identity='zhong';
						fellow.setIdentity('僵尸');
						fellow.node.identity.dataset.color='zhu';
						fellow.draw(4);
						fellow.storage.nyhzr小僵尸BOSS3=false;
						player.storage.nyhzr小僵尸BOSS3=false;
					};
                },
			},
            "_nyhzr小僵尸BOSS1":{
				mode:['boss'],
				trigger:{
					player:'dieBefore'
				},
				filter:function (event,player){
					return player.name=='nyhzr小僵尸';
				},
				forced:true,
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].name=='mnyhzr灭世魔星BOSS'){
							if(player.storage.nyhzr小僵尸BOSS1==false) game.players[i].storage.nyhzr小僵尸BOSS1=true;
							if(player.storage.nyhzr小僵尸BOSS2==false) game.players[i].storage.nyhzr小僵尸BOSS2=true;
							if(player.storage.nyhzr小僵尸BOSS3==false) game.players[i].storage.nyhzr小僵尸BOSS3=true;
						};
					};
				},
			},
            "nyhzrlielong1":{
                nobracket:true,
			},
            "_nyhzrlielong2":{
				trigger:{
					global:"gameStart",
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('nyhzrlielong1');
				},
				content:function (){
					if(new Date().getDay()==1){
						player.init('nyhzr火龙');
						game.bossinfo.chongzheng=4;
					}
					if(new Date().getDay()==2){
						player.init('nyhzr水龙');
						game.bossinfo.chongzheng=10;
					}
					if(new Date().getDay()==3){
						player.init('nyhzr雷龙');
						game.bossinfo.chongzheng=5;
					}
					if(new Date().getDay()==4){
						player.init('nyhzr土龙');
						game.bossinfo.chongzheng=20;
					}
					if(new Date().getDay()==5){
						player.init('nyhzr木龙');
						game.bossinfo.chongzheng=5;
					}
					if(new Date().getDay()==6){
						player.init('nyhzr风龙');
						game.bossinfo.chongzheng=8;
					}
					if(new Date().getDay()==0){
						player.init('nyhzr冰龙');
						game.bossinfo.chongzheng=4;
					}
					var llhpf=ui.create.div('','<span style="cursor:pointer;">龙鳞换皮肤</span>',function(){
						var llhpfjiemian=ui.create.dialog('hidden');
						llhpfjiemian.style.height='calc(100%)';
						llhpfjiemian.style.width='calc(100%)';
						llhpfjiemian.style.left='0px';
						llhpfjiemian.style.top='0px';
						llhpfjiemian.classList.add('popped');
						llhpfjiemian.classList.add('static');
						var llhpfquxiao=ui.create.div('.menubutton.round','×',function(){
							llhpfjiemian.delete();
						});
						llhpfquxiao.style.left='-50px';
						llhpfquxiao.style.top='-20px';

						var llhpf龙鳞数=ui.create.div('','火龙龙鳞：'+lib.config.火龙龙鳞+'个'+'<br>水龙龙鳞：'+lib.config.水龙龙鳞+'个'+'<br>雷龙龙鳞：'+lib.config.雷龙龙鳞+'个'+'<br>土龙龙鳞：'+lib.config.土龙龙鳞+'个'+'<br>木龙龙鳞：'+lib.config.木龙龙鳞+'个'+'<br>风龙龙鳞：'+lib.config.风龙龙鳞+'个'+'<br>冰龙龙鳞：'+lib.config.冰龙龙鳞+'个'+'<br><br><br>注：已获得的皮肤仍可被抽到');
						llhpf龙鳞数.style.right='160px';
						llhpf龙鳞数.style.top='200px';

						var llhpfduihuan=ui.create.div('.menubutton.large','<span style="cursor:pointer;">七个不同龙鳞兑换随机皮肤</span>',function(){
							if(lib.config.火龙龙鳞<=0||lib.config.水龙龙鳞<=0||lib.config.雷龙龙鳞<=0||lib.config.土龙龙鳞<=0||lib.config.木龙龙鳞<=0||lib.config.风龙龙鳞<=0||lib.config.冰龙龙鳞<=0){
								game.say1('龙鳞不足');
							}else{
								var skillSkin=["Pifunyhzr黑暗中的剑客1","Pifunyhzr黑暗中的剑客2","Pifunyhzr黑暗中的剑客3","Pifunyhzr狼蛛1","Pifunyhzr第二人类1","Pifunyhzr第二人类2","Pifunyhzr第二人类3","Pifunyhzr幻卡魔女1","Pifunyhzr幻卡魔女2","Pifunyhzr幻卡魔女3","Pifunyhzr幻卡魔女4","Pifunyhzr幻卡魔女5","Pifunyhzr自然之灵1","Pifunyhzr自然之灵2","Pifunyhzr时空英雄1","Pifunyhzr时空英雄2","Pifunyhzr魔龙化身1","Pifunyhzr魔龙化身2","Pifunyhzr魔龙化身3","Pifunyhzr射日英雄1","Pifunyhzr射日英雄2","Pifunyhzr射日英雄3","Pifunyhzr射日英雄4","Pifunyhzr射日英雄5","Pifunyhzr暴君1","Pifunyhzr暴君2","Pifunyhzr暴君3","Pifunyhzr暴君4","Pifunyhzr魅魔公主1","Pifunyhzr魅魔公主2","Pifunyhzr吸血鬼伯爵1","Pifunyhzr吸血鬼伯爵2","Pifunyhzr吸血鬼伯爵3"]
								var skillSkin1=skillSkin.randomGet();
								game.saveConfig(skillSkin1,true);
								game.say1('获得皮肤——'+get.translation(skillSkin1));
								game.saveConfig('火龙龙鳞',lib.config.火龙龙鳞-1);
								game.saveConfig('水龙龙鳞',lib.config.水龙龙鳞-1);
								game.saveConfig('雷龙龙鳞',lib.config.雷龙龙鳞-1);
								game.saveConfig('土龙龙鳞',lib.config.土龙龙鳞-1);
								game.saveConfig('木龙龙鳞',lib.config.木龙龙鳞-1);
								game.saveConfig('风龙龙鳞',lib.config.风龙龙鳞-1);
								game.saveConfig('冰龙龙鳞',lib.config.冰龙龙鳞-1);
								llhpfjiemian.delete();
							};
						});
						llhpfduihuan.style.left='150px';
						llhpfduihuan.style.top='300px';

						llhpfjiemian.add(llhpfduihuan);
						llhpfjiemian.add(llhpf龙鳞数);
						llhpfjiemian.add(llhpfquxiao);
						ui.window.appendChild(llhpfjiemian);
					});
					llhpf.style.height='23px';
					llhpf.style.width='10px';
					llhpf.style.right='7.5px';
					llhpf.style.top='calc(55%)';
					ui.window.appendChild(llhpf);
				},
			},
            "lielonghuolongjia":{
    group:["lielonghuolongjia_heart","lielonghuolongjia_diamond"],
    subSkill:{
        heart:{
    trigger:{
        target:"shaBefore",
    },
    forced:true,
    priority:6,
    filter:function (event){
        return event.card&&event.card.name=='sha'&&get.suit(event.card)=='heart'
    },
    content:function (){
        trigger.untrigger();
        trigger.finish();
    },
        },
        diamond:{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.card&&event.card.name=='sha'&&get.suit(event.card)=='diamond'
},
content:function (){
trigger.num-=1;
}
        },
    },
            },
            "lielongweiyan":{
				trigger:{
					global:"gameDrawBefore",
				},
				forced:true,
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player) game.players[i].damage(1,'fire');
					};
				},
			},
            "lielongbaoyan":{
                        enable:"phaseUse",
						usable:1,
                        filterTarget:function (card,player,target){
                            return player!=target;
                        },
                        content:function (){
                            target.damage(3,'fire');
							player.loseHp();
                        },
                        ai:{
							order:5,
							result:{
								player:function (player,target){
									return player.hp-2;
								},
							},
                        },
                    },
            "lielongshuilongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.nature=='fire';
},
content:function (){
trigger.num-=1;
}
        },
            "lielongshilan":{
trigger:{
global:"phaseBefore",
},
forced:true,
filter:function (event,player){
return event.player!=player;
},
content:function (){
'step 0'
var list=['流失一点体力'];
if(trigger.player.num('h')>=1) list.push('弃置一张手牌');
trigger.player.chooseControl(list).set('ai',function(){
if(trigger.player.num('h')>=1) return '弃置一张手牌'
return '流失一点体力'
});
'step 1'
if(result.control=='流失一点体力') trigger.player.loseHp();
if(result.control=='弃置一张手牌') trigger.player.chooseToDiscard(1,'h',true);
}

			},
            "lielongxuanwo":{
    trigger:{
        player:"changeHp",
    },
    direct:true,
    filter:function (event,player){
        return event.num!=0;
    },
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('lielongxuanwo'),function(card,player,target){
            return player!=target
        }).ai=function(target){
            if(target.hasSkillTag('noturn')) return 0;
            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)==0) return 0;
            if(get.attitude(_status.event.player,target)>0){
                if(target.classList.contains('turnedover')) return 1000-target.countCards('h');
                if(player.maxHp-player.hp<3) return -1;
                return 100-target.countCards('h');
            }
            else{
                if(target.classList.contains('turnedover')) return -1;
                if(player.maxHp-player.hp>=3) return -1;
                return 1+target.countCards('h');
            }
        }
        "step 1"
        if(result.bool){
            player.logSkill('lielongxuanwo',result.targets);
            result.targets[0].draw(result.targets[0].maxHp-result.targets[0].hp);
            result.targets[0].turnOver();
        }
    },
    ai:{
        effect:{
            target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(target.hp<=1) return;
                    if(!target.hasFriend()) return;
                    var hastarget=false;
                    var turnfriend=false;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                            hastarget=true;
                        }
                        if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                            hastarget=true;
                            turnfriend=true;
                        }
                    }
                    if(get.attitude(player,target)>0&&!hastarget) return;
                    if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                    if(target.hp>1) return [1,0.5];
                }
            },
        },
    },
            },
            "lielonghaige":{
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){
player.useCard({name:'tao'},player);;
}
			},
            "lielongjiliu":{
init:function (player){
player.storage.lielongjiliu=0;
},
marktext:"激",
intro:{
content:function (storage){
return '当前拥有'+storage+'个激流标记'
},
},
mark:true,
	group:["lielongjiliu_lose","lielongjiliu_use"],
    subSkill:{
        lose:{
trigger:{player:'loseAfter'},
filter:function (event,player){
return _status.currentPhase!=player;
},
forced:true,
content:function (){
player.storage.lielongjiliu++;
player.syncStorage('lielongjiliu');
}
        },
        use:{
enable:"phaseUse",
filterTarget:function (card,player,target){
return target!=player;
},
filter:function (event,player){
return player.storage.lielongjiliu>0;
},
content:function (){
target.damage(player.storage.lielongjiliu);
player.storage.lielongjiliu=0;
player.syncStorage('lielongjiliu');
},
    ai:{
		order:9,
        result:{
            player:function (player){
                return 1;
            },
        },
    },
        },
    },
	},
            "lielongleilongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.card&&get.color(event.card)=='black'
},
content:function (){
trigger.untrigger();
trigger.finish();
}
			},
            "lielongjilei":{
    group:["lielongjilei_Begin","lielongjilei_After"],
    subSkill:{
        Begin:{
    trigger:{
        player:"phaseDrawBegin",
    },
    forced:true,
    content:function (){
        trigger.num+=player.hp;
    },
        },
        After:{
    trigger:{
        player:"phaseDrawAfter",
    },
    forced:true,
	filter:function (event,player){
        return player.num('h')>player.hp*2
	},
    content:function (){
		player.skip('phaseUse');
		player.skip('phaseDiscard');
		for(var i=0;i<game.players.length;i++){
			if(game.players[i]!=player) game.players[i].damage(1,'thunder');
		};
    },
        },
    },
            },
            "lielongqianniao":{
trigger:{
player:"damageAfter",
},
filter:function (event,player){
return event.source&&_status.currentPhase!=player&&player.num('h')>=2;
},
content:function (){
player.chooseToDiscard(2,'h',true);
trigger.source.damage(2,'thunder');
}
			},
            "lielongchaofu":{
trigger:{
player:"phaseBegin",
},
forced:true,
filter:function (event,player){
return player.hp==1;
},
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) player.useCard({name:'sha',nature:'thunder'},game.players[i]);
};
player.recover();
}
			},
            "lielongtulongjia":{
    group:["lielongtulongjia_card","lielongtulongjia_loseHp"],
    subSkill:{
        card:{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.card&&(event.card.name=='nanman'||event.card.name=='wanjian')
},
content:function (){
trigger.untrigger();
trigger.finish();
}
        },
        loseHp:{
trigger:{
player:"loseHpBegin",
},
forced:true,
content:function (){
trigger.num++;
}
        },
    },
},
            "lielongmoyan":{
trigger:{
player:"damageAfter",
},
forced:true,
filter:function (event,player){
return event.nature;
},
content:function (){
if(trigger.nature=='fire') player.chooseToDiscard(2,'h',true);
if(trigger.nature=='thunder') player.draw();
}
			},
            "lielonghuachen":{
    unique:true,
    mark:true,
    skillAnimation:true,
    animationStr:"化尘",
    animationColor:"thunder",
	enable:"phaseUse",
    init:function (player){
        player.storage.lielonghuachen=false;
    },
    filter:function (event,player){
        if(player.storage.lielonghuachen) return false;
        return true;
    },
    filterTarget:function (card,player,target){
         return player!=target;
    },
    content:function (){
        player.awakenSkill('lielonghuachen');
        player.storage.lielonghuachen=true;
		player.loseHp();
		target.discard(target.get("he"));
		target.damage();
    },
    ai:{
		order:13,
		result:{
			player:function (player,target){
				return 1;
			},
		},
    },
    intro:{
        content:"limited",
    },
},
            "lielongdinu":{
trigger:{
player:"phaseBegin",
},
forced:true,
filter:function (event,player){
return player.hp<5;
},
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) player.useCard({name:'nanman'},game.players[i]);
};
player.recover();
}
			},
            "lielongmulongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
content:function (){
if(trigger.nature!='fire'){
trigger.untrigger();
trigger.finish();
}else{
trigger.num++
}
}
            },
            "lielonglongxi":{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
if(player.hp<=5){
player.recover();
}else{
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) game.players[i].loseHp();
};
};
}
			},
            "lielongduhua":{
trigger:{
player:"phaseEnd",
},
content:function (){
"step 0"
player.chooseTarget('选择【毒花】的目标',function(card,player,target){return player!=target}).ai=function(target){return -ai.get.attitude(player,target)};
"step 1"
if(result.bool){
result.targets[0].damage();
player.loseHp();
}else{
event.finish();
}
},
check:function (event,player){
return player.hp>3;
},
            },
            "lielongshenggen":{
    unique:true,
    mark:true,
    skillAnimation:true,
    animationStr:"生根",
	enable:"phaseUse",
    init:function (player){
        player.storage.lielongshenggen=false;
    },
    filter:function (event,player){
        if(player.storage.lielongshenggen) return false;
        return true;
    },
    filterTarget:function (card,player,target){
         return player!=target;
    },
    content:function (){
        player.awakenSkill('lielongshenggen');
        player.storage.lielongshenggen=true;
		target.loseHp();
		player.storage.lielongshenggen1=target.num('h');
		player.discard(player.get('h'));
		player.recover(2);
		player.addSkill('lielongshenggen1');
    },
    ai:{
		order:1,
		result:{
			player:function (player,target){
				if(player.hp<=7) return 1;
				return 0;
			},
		},
    },
    intro:{
        content:"limited",
    },
},
            "lielongshenggen1":{
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){
player.removeSkill("lielongshenggen1");
player.draw(player.storage.lielongshenggen1);
player.storage.lielongshenggen1=0;
}
},
            "lielongfenglongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.nature;
},
content:function (){
player.next.damage(trigger.nature);
player.previous.damage(trigger.nature);
},
            },
            "lielongfengbao":{
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha') return Infinity;
},
},
enable:['chooseToRespond','chooseToUse'],
filterCard:function(card){
return get.color(card)=='black';
},
position:'he',
viewAs:{name:'sha',nature:'thunder'},
prompt:'将一张黑色牌当作雷杀使用或打出',
ai:{
respondSha:true,
}
            },
            "lielongfengdun":{
    mod:{
        globalTo:function (from,to,distance){
            return distance+3;
        },
    },
            },
            "lielongfengshi":{
trigger:{
player:"useCardAfter",
},
filter:function (event,player){
return event.card.name=='wanjian';
},
forced:true,
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) game.players[i].loseHp();
};
},
			},
            "lielongbinglongjia":{
trigger:{
player:"damageBefore",
},
forced:true,
filter:function (event,player){
return event.source;
},
content:function (){
trigger.source.discard(trigger.source.get('h'));
},
            },
            "lielonghanxi":{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
					game.players.randomGet(player).turnOver();
                },
            },
            "lielonghangu":{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                content:function (){
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].isTurnedOver()){
							game.players[i].loseHp();
							game.players[i].discard(game.players[i].get('h'));
							player.recover();
						};
                    };
                },
            },
            "lielongyondong":{
    unique:true,
    mark:true,
    skillAnimation:true,
    animationStr:"永冻",
    animationColor:"thunder",
	enable:"phaseUse",
    init:function (player){
        player.storage.lielongyondong=false;
    },
    filter:function (event,player){
        if(player.storage.lielongyondong) return false;
        return true;
    },
    content:function (){
        player.awakenSkill('lielongyondong');
        player.storage.lielongyondong=true;
        for(var i=0;i<game.players.length;i++){
			if(game.players[i]!=player&&!game.players[i].isTurnedOver()) game.players[i].turnOver();
		};
    },
    ai:{
		order:1,
		result:{
			player:function (player,target){
				return 1;
			},
		},
    },
    intro:{
        content:"limited",
    },
},
            "_Gainlonglin":{
				mode:['boss'],
				trigger:{
					source:'dieBefore'
				},
				filter:function (event,player){
					return (event.player.name=='nyhzr火龙'||event.player.name=='nyhzr水龙'||event.player.name=='nyhzr雷龙'||event.player.name=='nyhzr土龙'||event.player.name=='nyhzr木龙'||event.player.name=='nyhzr风龙'||event.player.name=='nyhzr冰龙')&&player.identity==game.me.identity;
				},
				forced:true,
				content:function(){
					var num=[1,2,3,4,5].randomGet();
					if(trigger.player.name=='nyhzr火龙'){
						game.saveConfig('火龙龙鳞',lib.config.火龙龙鳞+num);
						game.say2('获得'+num+'个火龙龙鳞');
					};
					if(trigger.player.name=='nyhzr水龙'){
						game.saveConfig('水龙龙鳞',lib.config.水龙龙鳞+num);
						game.say2('获得'+num+'个水龙龙鳞');
					};
					if(trigger.player.name=='nyhzr雷龙'){
						game.saveConfig('雷龙龙鳞',lib.config.雷龙龙鳞+num);
						game.say2('获得'+num+'个雷龙龙鳞');
					};
					if(trigger.player.name=='nyhzr土龙'){
						game.saveConfig('土龙龙鳞',lib.config.土龙龙鳞+num);
						game.say2('获得'+num+'个土龙龙鳞');
					};
					if(trigger.player.name=='nyhzr木龙'){
						game.saveConfig('木龙龙鳞',lib.config.木龙龙鳞+num);
						game.say2('获得'+num+'个木龙龙鳞');
					};
					if(trigger.player.name=='nyhzr风龙'){
						game.saveConfig('风龙龙鳞',lib.config.风龙龙鳞+num);
						game.say2('获得'+num+'个风龙龙鳞');
					};
					if(trigger.player.name=='nyhzr冰龙'){
						game.saveConfig('冰龙龙鳞',lib.config.冰龙龙鳞+num);
						game.say2('获得'+num+'个冰龙龙鳞');
					};
				},
			},
            "_Gainshihun":{
				mode:['boss'],
				trigger:{
					source:'dieBefore'
				},
				filter:function (event,player){
					return event.player.name=='nyhzr小僵尸'&&player.identity==game.me.identity;
				},
				forced:true,
				content:function(){
					game.saveConfig('尸魂',lib.config.尸魂+1);
					game.say2('获得1个尸魂');
				},
			},


				},
        translate:{
			"mnyhzr灭世魔星BOSS":"灭世魔星",
			"nyhzr小僵尸":"小僵尸",
            "nyhzr尸王降世BOSS":"尸王降世",
            "nyhzr尸王降世BOSS_info":"出牌阶段，你可以弃置一张手牌并对所有挑战者造成一点伤害，若如此做你与所有小僵尸恢复一点体力",
            "nyhzr亡者之碑BOSS":"亡者之碑",
            "nyhzr亡者之碑BOSS_info":"<span style=\"color:#EE7621\">被动：</span><br>游戏开始时，你放下亡者之碑，亡者之碑释放尸气，所有人无法重整",
            "nyhzr小僵尸BOSS":"小僵尸",
            "nyhzr小僵尸BOSS_info":"<span style=\"color:#EE7621\">被动：</span><br>回合结束阶段，若场上小僵尸数目不足三，你在亡者之碑附近召唤小僵尸至三只，每召唤一只小僵尸，第一阶段时间减少十秒",
            "nyhzr小僵尸BOSS_append":"<b><p align=center><span style=\"font-size:25px\">挑战规则</span></b><br><b><p align=center><span style=\"font-size:20px\">全部阶段</span></b><li>击杀小僵尸获得1个尸魂<li>尸魂达到100时，获得灭世魔星（武将），若已获得灭世魔星，玩家获得1000金币<li>当前拥有"+lib.config.尸魂+"个尸魂<br><b><p align=center><span style=\"font-size:20px\">第一阶段</span></b><li>灭世魔星处于无敌状态<li>灭世魔星处于潜行状态且无法使用除装备牌以外的牌<li>玩家的出牌时间变为10秒<li>第一阶段持续四分钟，挑战者需要在灭世魔星召唤的僵尸群中生存下来<br></b><br><b><p align=center><span style=\"font-size:20px\">第二阶段</span></b><li>灭世魔星失去技能【小僵尸】和【潜行】，获得技能【生命凋零】和【尸王降世】，体力上限变为10，体力变为4+X，X为第一阶段召唤的小僵尸数（体力大于10的部分转化为护甲）<li>所有挑战者恢复两点体力并摸三张牌",
            "nyhzr迅猛":"迅猛",
            "nyhzr迅猛_info":"<span style=\"color:#EE7621\">被动：</span><br>出牌阶段，你使用的【杀】没有数量限制<br>摸牌阶段，你多摸一张牌",
            "nyhzr噬魂":"噬魂",
            "nyhzr噬魂_info":"<span style=\"color:#EE7621\">被动：</span><br>挑战模式下，你每次造成伤害后，第一阶段增加四秒",
			"nyhzr火龙":"火龙",
			"nyhzr水龙":"水龙",
			"nyhzr雷龙":"雷龙",
			"nyhzr土龙":"土龙",
			"nyhzr木龙":"木龙",
			"nyhzr风龙":"风龙",
			"nyhzr冰龙":"冰龙",
            "lielongbinglongjia":"龙甲",
            "lielongbinglongjia_info":"锁定技，当你受到伤害前，伤害来源弃置所有手牌",
            "lielonghanxi":"寒袭",
            "lielonghanxi_info":"锁定技，回合开始前，你随机令一名其他角色翻面",
            "lielonghangu":"寒骨",
            "lielonghangu_info":"锁定技，回合开始结束后，场上所有翻面角色流失一点体力并弃置所有手牌；场上每有一名翻面角色，你恢复一点体力",
            "lielonghangu":"寒骨",
            "lielonghangu_info":"锁定技，回合开始结束后，场上所有翻面角色流失一点体力并弃置所有手牌；场上每有一名翻面角色，你恢复一点体力",
            "lielongyondong":"永冻",
            "lielongyondong_info":"限定技，出牌阶段，你可以令所有其他未翻面的角色翻面",
            "lielongfenglongjia":"龙甲",
            "lielongfenglongjia_info":"锁定技，当你受到属性伤害时，你对你的上家与下家个造成一点属性伤害（属性为你受到的伤害属性）",
            "lielongfengbao":"风暴",
            "lielongfengbao_info":"你可以将一张黑色牌当作雷杀使用或打出<br>锁定技，出牌阶段，你使用的【杀】没有数量限制",
            "lielongfengdun":"风盾",
            "lielongfengdun_info":"锁定技，你的防御距离+3",
            "lielongfengshi":"风矢",
            "lielongfengshi_info":"锁定技，你使用【万箭齐发】后，其他角色流失一点体力",
            "lielongmulongjia":"龙甲",
            "lielongmulongjia_info":"锁定技，你不会受到非火焰伤害，你受到的火焰伤害+1",
            "lielonglongxi":"龙息",
            "lielonglongxi_info":"锁定技，准备阶段，若你的体力值不大于5，你恢复1点体力；若你的体力值大于5，你令其他角色流失一点体力",
            "lielongduhua":"毒花",
            "lielongduhua_info":"结束阶段，你可以对一名角色造成一点伤害，然后你失去一点体力",
            "lielongshenggen":"生根",
            "lielongshenggen1":"生根",
            "lielongshenggen_info":"限定技，出牌阶段，你可以弃置所有手牌并令一名角色流失一点体力，然后你恢复两点体力，若如此做，回合结束阶段，你摸X张牌（X为发动【生根】时，【生根】目标的手牌数，若目标死亡，你无法摸牌）",
            "lielongtulongjia":"龙甲",
            "lielongtulongjia_info":"锁定技，【南蛮入侵】和【万箭齐发】无法对你造成伤害；你流失体力时，流失量+1",
            "lielongmoyan":"魔岩",
            "lielongmoyan_info":"锁定技，当你受到雷属性伤害后，你摸一张牌，当你受到火属性伤害后，你弃置两张手牌",
            "lielonghuachen":"化尘",
            "lielonghuachen_info":"限定技，出牌阶段，你可以弃置一名角色手牌区和装备区内的所有牌，若如此做，你失去一点体力并对其造成一点伤害",
            "lielongdinu":"地怒",
            "lielongdinu_info":"锁定技，准备阶段，若你的体力值小于五，则视为你使用了1张【南蛮入侵】，然后你恢复一点体力",
            "lielonghuolongjia":"龙甲",
            "lielonghuolongjia_info":"锁定技，红桃【杀】对你无效，方片【杀】对你造成的伤害-1",
            "lielongweiyan":"威焰",
            "lielongweiyan_info":"锁定技，游戏开始时，你对所有其他角色造成一点火焰伤害",
            "lielongbaoyan":"爆炎",
            "lielongbaoyan_info":"回合开始阶段，你可以流失一点体力并对一名角色造成三点火焰伤害，每回合限一次",
            "lielongshuilongjia":"龙甲",
            "lielongshuilongjia_info":"锁定技，当你受到火焰伤害时，伤害-1",
            "lielongshilan":"噬浪",
            "lielongshilan_info":"锁定技，其他角色的回合开始前，其须选择一项：<br>1.弃置一张手牌<br>2.流失一点体力",
            "lielongxuanwo":"漩涡",
            "lielongxuanwo_info":"当你改变体力时，你可以将一名角色的武将牌翻面并令其摸X张牌。X为其当前已损失体力值",
            "lielonghaige":"海歌",
            "lielonghaige_info":"锁定技，结束阶段，你视为使用了一张【桃】",
            "lielongjiliu":"激流",
            "lielongjiliu_info":"锁定技，当你于回合外失去手牌后，你获得一个【激流】标记<br>出牌阶段，你可以清空【激流】标记，然后对一名角色造成X点伤害。X为“激流”牌的数量",
            "lielongleilongjia":"龙甲",
            "lielongleilongjia_info":"锁定技，你免疫黑色卡牌造成的伤害（免疫后仍可触发【千鸟】）",
            "lielongjilei":"疾雷",
            "lielongjilei_info":"锁定技，摸牌阶段，你多摸X张牌，若此时你的手牌数大于2X，你可以跳过出牌阶段和弃牌阶段并视为对所有其他角色造成一点雷电伤害。X为你当前体力值",
            "lielongqianniao":"千鸟",
            "lielongqianniao_info":"当你于回合外受到伤害后，你可以弃两张手牌牌并对伤害来源造成两点雷电伤害",
            "lielongchaofu":"超伏",
            "lielongchaofu_info":"锁定技，准备阶段，若你的体力值为一，你视为对所有其他角色使用了一张【雷杀】，然后你恢复一点体力",
			"nyhzrlielong":"猎龙战役",
            "nyhzrlielong1":"规则：",
            "nyhzrlielong1_info":"每天猎杀不同的龙",
            "nyhzrlielong1_append":'若今天是：<li>周一，猎火龙（4）<li>周二，猎水龙（10）<li>周三，猎雷龙（5）<li>周四，猎土龙（20）<li>周五，猎木龙（5）<li>周六，猎风龙（8）<li>周日，猎冰龙（4）<br>重整回合数为X<br>X为龙后面小括号内的数<br><br>猎杀当天的龙或猎龙方全军覆没，游戏结束<br><br>玩家猎龙成功后获得1-5个对应龙的龙鳞<li>龙鳞可用于兑换皮肤<li>兑换界面在猎龙战役内<br><br>当前拥有：'+'<li>火龙龙鳞：'+lib.config.火龙龙鳞+'个'+'<li>水龙龙鳞：'+lib.config.水龙龙鳞+'个'+'<li>雷龙龙鳞：'+lib.config.雷龙龙鳞+'个'+'<li>土龙龙鳞：'+lib.config.土龙龙鳞+'个'+'<li>木龙龙鳞：'+lib.config.木龙龙鳞+'个'+'<li>风龙龙鳞：'+lib.config.风龙龙鳞+'个'+'<li>冰龙龙鳞：'+lib.config.冰龙龙鳞+'个',
		},
},'<span style=\"font-size:17px;font-weight:600\">英魂之刃BOSS</span>');
	};
	if(config.duorenduijue){
	if ( lib.brawl ) {
lib.brawl.duorenduijue = {
            name:'多人对决',
	        mode:'versus',
	        submode:'自由',
            intro:'该模式中可以选择：4v4，5v5，6v6，7v7，8v8',
content:{
submode:'standard',
gameStart:function(){
barenduijue.hide();
shirenduijue.hide();
shierrenduijue.hide();
shishirenduijue.hide();
shiliurenduijue.hide();
duijuetips.hide();
}
},
init:function(){
barenduijue=ui.create.div('.menubutton.large','4v4',function(){
_status.event.dialog.versus_number.link=4;
game.say1('设置4v4成功');
});
barenduijue.style.left='calc(4%)';
barenduijue.style.top='calc(50% - 250px)';
ui.window.appendChild(barenduijue);


shirenduijue=ui.create.div('.menubutton.large','5v5',function(){
_status.event.dialog.versus_number.link=5;
game.say1('设置5v5成功');
});
shirenduijue.style.left='calc(4%)';
shirenduijue.style.top='calc(50% - 200px)';
ui.window.appendChild(shirenduijue);


shierrenduijue=ui.create.div('.menubutton.large','6v6',function(){
_status.event.dialog.versus_number.link=6;
game.say1('设置6v6成功');
});
shierrenduijue.style.left='calc(4%)';
shierrenduijue.style.top='calc(50% - 150px)';
ui.window.appendChild(shierrenduijue);


shishirenduijue=ui.create.div('.menubutton.large','7v7',function(){
_status.event.dialog.versus_number.link=7;
game.say1('设置7v7成功');
});
shishirenduijue.style.left='calc(4%)';
shishirenduijue.style.top='calc(50% - 100px)';
ui.window.appendChild(shishirenduijue);


shiliurenduijue=ui.create.div('.menubutton.large','8v8',function(){
_status.event.dialog.versus_number.link=8;
game.say1('设置8v8成功');
});
shiliurenduijue.style.left='calc(4%)';
shiliurenduijue.style.top='calc(50% - 50px)';
ui.window.appendChild(shiliurenduijue);

duijuetips=ui.create.div('','选择以上选项后,<br>请不要再设置游戏人数。<br>以上选项与这段文字在游戏开始后会自动隐藏。');
duijuetips.style.height='120px';
duijuetips.style.width='120px';
duijuetips.style.left='5px';
duijuetips.style.top='calc(50%)';
ui.window.appendChild(duijuetips);


if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
},
};
};
};
	if(config.bingjingliangzu){
	if ( lib.brawl ) {
lib.brawl.bingjingliangzu = {
            name:'兵精粮足',
            mode:'identity',
            intro:[
			'当前人数：'+config.brawlPlayerNumber+'人（游戏人数在扩展界面设置，前提是增加人数选项为全部增加，否则游戏人数固定为8）',
			'1、游戏开始时，所有人获得一点体力上限并恢复一点体力',
			'2、所有人摸牌阶段多摸一张牌，出牌阶段可以额外使用一张杀',
			],
            showcase:function(init){
				if(lib.config.bingjingliangzuYZR!=true){
                	var bjlz=ui.create.div();
                	bjlz.style.height='267px';
                	bjlz.style.width='500px';
                	bjlz.style.left='calc(50% - 250px)';
                	bjlz.style.top='0px';
                	bjlz.setBackgroundImage('extension/新英魂之刃/bjlz.png');
                	this.appendChild(bjlz);
					game.saveConfig('bingjingliangzuYZR',true);
				};
            },
content:{
gameStart:function(){
for(var i=0;i<game.players.length;i++){
game.players[i].gainMaxHp();
game.players[i].recover();
};
}
},
init:function(){
if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
game.saveConfig('identity_mode','normal','identity');
if(config.IncreasePlayerNumber=='all'){
game.saveConfig('player_number',config.brawlPlayerNumber,'identity');
if(config.brawlPlayerNumber=='9'){
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='10'){
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='11'){
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='12'){
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='13'){
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='14'){
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='15'){
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
}
if(config.brawlPlayerNumber=='16'){
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
}
}else{
game.saveConfig('player_number','8','identity');
};
lib.skill._mopaishuzengjia={
trigger:{
player:"phaseDrawBegin",
},
forced:true,
content:function (){
trigger.num++;
},
};
lib.skill._chushashuzengjia={
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha') return num+1;
},
},
};
},
};
};
};
	if(config.jiangshimoshi){
	if ( lib.brawl ) {
lib.brawl.jiangshimoshi = {
            name:'僵尸模式',
            mode:'identity',
            intro:[
			'当前人数：'+config.brawlPlayerNumber+'人（游戏人数在扩展界面设置，前提是增加人数选项为全部增加，否则游戏人数固定为8）',
			'游戏中无法执行换位和翻面函数。',
			'移植神杀的僵尸模式，规则有改动。<br><span class=\"bluetext\" style=\"color:#EE7621;font-size:20px\"><p align="center">规则介绍</p></span>',
			'1.在此模式中主公、忠臣为人类，反贼、内奸为僵尸。',
			'2.游戏开始时，所有角色的身份变为人类，主公获得退治印记（每回合开始时，退治印记+1）。',
			'3.若主公死亡，则下一名人类玩家成为主公，生命与上限+1，并获取相当于原主公退治标记数-1的退治标记。',
			'4.主公的第二个回合开始时，夜幕降临，此轮中会有X个人变为反贼僵尸（X为存活人数/6（向上整取））。以此法变为反贼僵尸时，体力上限变为5。',
			'5.僵尸杀死人类后，人类与内奸僵尸组成双将。',
			'6.人类死亡后与内奸僵尸组成双将。',
			'7.内奸僵尸杀死人类或内奸僵尸后变为反贼僵尸。<br><span class=\"bluetext\" style=\"color:#EE7621;font-size:20px\"><p align="center">游戏结束条件</p></span>',
			'1.退治成功，所有人类胜利，僵尸以及成为僵尸的人类失败：<br>任何玩家的回合开始时，主公退治印记到达8。<br>击杀所有僵尸。',
			'2.退治失败，所有反贼僵尸胜利，非反贼僵尸以及人类失败：<br>主公阵亡并且场上没有可以代替主公的人类。'
			],
content:{
gameStart:function(){
for(var i=0;i<game.players.length;i++){
game.players[i].turnOver=function(all){};
if(game.players[i]!=game.zhu){
game.players[i].identity='zhong';
};
};
game.zhu.storage.fzjsNumber=0;
game.showIdentity();
game.swapSeat=function(all){};
}
},
init:function(){
if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
game.saveConfig('identity_mode','normal','identity');
if(config.IncreasePlayerNumber=='all'){
game.saveConfig('player_number',config.brawlPlayerNumber,'identity');
if(config.brawlPlayerNumber=='9') lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='10') lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='11') lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='12') lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='13') lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='14') lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='15') lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='16') lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
}else{
game.saveConfig('player_number','8','identity');
};
			lib.skill._jisuangailv={
				trigger:{global:'phaseAfter'},
				forced:true,
				filter:function(event,player){
					return player==game.zhu&&game.zhu.storage._tuizhi==2;
				},
				content:function(){
					if(game.zhu.storage.jisuangailv==undefined) game.zhu.storage.jisuangailv=0;
					game.zhu.storage.jisuangailv++;
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi={
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:10,
				filter:function(event,player){
					return player==game.zhu;
				},
				content:function(){
					if(player.storage._tuizhi==undefined) player.storage._tuizhi=0;
					player.storage._tuizhi++;
					player.markSkill('_tuizhi');
					player.syncStorage('_tuizhi');
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi2={
				skillAnimation:'epic',
				animationStr:'人类胜利',
				animationColor:'metal',
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:5,
				filter:function(event,player){
					return game.zhu.storage._tuizhi>=8;
				},
				content:function(){
					if(game.me.identity=='zhu'||game.me.identity=='zhong'){
						game.over(true);
					}else{
						game.over(false);
					};
				}
			};
			lib.skill._jiangshi={
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return player.identity=='zhong';
				},
				content:function(){
					if(player.storage.fzjs==0){
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						player.uninit;
						player.init(player.name,'jiangshifz');
						player.maxHp=5;
						player.hp=player.maxHp;
						player.identity='fan';
					}else{
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						player.uninit;
						player.init(player.name,'jiangshinj');
						player.hp=player.maxHp;
						player.identity='nei';
					};
					game.showIdentity();
					trigger.untrigger();
					trigger.finish();
				}
			};
			lib.skill._jiangshi2={
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				silent:true,
				priority:15,
				filter:function(event,player){
					if(game.players.length<=6) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>6&&game.players.length<=12) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*2/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>12&&game.players.length<=18) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*3/(game.players.length-1))-game.zhu.storage.fzjsNumber;
				},
				content:function(){
					player.die();
					player.identity='zhong';
					player.storage.fzjs=0;
					game.zhu.storage.fzjsNumber++;
				}
			}
			lib.skill._jiangshi3={
				trigger:{source:'dieBefore'},
				forced:true,
				filter:function(event,player){
					return (event.player.identity=='zhong'||event.player.identity=='nei')&&player.identity=='nei';
				},
				content:function(){
					player.identity='fan';
					player.init(player.name,'jiangshifz');
					game.showIdentity();
				},
			};
			lib.skill._jiangshi4={
				skillAnimation:'epic',
				animationStr:'主公阵亡',
				animationColor:'metal',
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage._tuizhi>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='zhong'){
							event.target=game.players[i];
							break;
						}
					}
					if(event.target){
						game.zhu.line(event.target,'thunder');
						game.log(game.zhu,'死亡',event.target,'成为了新的主公！');
						game.zhu=event.target;
						event.target.identity='zhu';
						event.target.gainMaxHp();
						event.target.recover();
						event.target.storage.fzjsNumber=player.storage.fzjsNumber;
						event.target.storage._tuizhi=player.storage._tuizhi-1;
						event.target.markSkill('_tuizhi');
						event.target.syncStorage('_tuizhi');
						game.showIdentity();
					}
				}
			}
			lib.skill._jiangshiTx={
				skillAnimation:'epic',
				animationStr:'灵魂、献祭',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					return player.identity=='zhong';
				},
				content:function(){
					game.log('灵魂、献祭');
				}
			};
			lib.skill._jiangshiTx2={
				audio:'jiangshidie',
				skillAnimation:'epic',
				animationStr:'僵尸、灭亡',
				animationColor:'thunder',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					return player.identity=='fan'||player.identity=='nei';
				},
				content:function(){
					game.log('僵尸、灭亡');
				}
			};
			lib.skill._jiangshiTx3={
				skillAnimation:'epic',
				animationStr:'暗夜、降临',
				animationColor:'thunder',
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage._tuizhi==2&&player.storage.ayjljs!=0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].storage.ayjljs=0;
					};
					game.log('暗夜、降临');
				}
			}
			lib.skill._huzhu={
				enable:'phaseUse',
				usable:1,
				filterCard:function(card,player){
					return card.name=='tao';
				},
				filter:function(event,player){
					return player.identity=='zhong'||player.identity=='zhu';
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return get.distance(player,target)<=1&&target.isDamaged()&&(target.identity=='zhong'||target.identity=='zhu');
				},
				content:function(){
					player.useCard({name:'tao'},target)
				}
			}
			lib.translate._tuizhi='退治'
			lib.translate._tuizhi2='退治'
			lib.translate._jiangshi='僵尸'
			lib.translate._jiangshi2='僵尸'
			lib.translate._jiangshi3='僵尸'
			lib.translate._jiangshi4='僵尸'
			lib.translate._jiangshiTx='僵尸'
			lib.translate._jiangshiTx2='僵尸'
			lib.translate._jiangshiTx3='僵尸'
			lib.translate._huzhu='互助'
			lib.translate._huzhu_info='出牌阶段限一次，人类玩家可以弃置一张【桃】令距离一的人类玩家恢复一点体力'
},
};
};
};
	if(config.jianbingmoshi){
	if ( lib.brawl ) {
lib.translate.unknown8='九号位';
lib.translate.unknown9='十号位';
lib.translate.unknown10='十一号位';
lib.translate.unknown11='十二号位';
lib.translate.unknown12='十三号位';
lib.translate.unknown13='十四号位';
lib.translate.unknown14='十五号位';
lib.translate.unknown15='十六号位';
lib.translate.chanceIdentity0='自立为国';
lib.translate.chanceIdentity='自立为国';
lib.translate.chanceIdentity1='自立为国';
lib.translate.chanceIdentity2='自立为国';
lib.translate.chanceIdentity3='自立为国';
lib.translate.chanceIdentity4='自立为国';
lib.translate.chanceIdentity5='自立为国';
lib.translate.chanceIdentity6='自立为国';
lib.translate.chanceIdentity7='自立为国';
lib.translate.chanceIdentity8='自立为国';
lib.translate.chanceIdentity9='自立为国';
lib.translate.chanceIdentity10='自立为国';
lib.translate.chanceIdentity11='自立为国';
lib.translate.chanceIdentity12='自立为国';
lib.translate.chanceIdentity13='自立为国';
lib.translate.chanceIdentity14='自立为国';
lib.translate.chanceIdentity15='自立为国';
			lib.group.push('er');
			lib.translate.er='国';
			lib.translate.erColor="#990099"
			lib.group.push('san');
			lib.translate.san='国';
			lib.translate.sanColor="#990099"
			lib.group.push('si');
			lib.translate.si='国';
			lib.translate.siColor="#990099"
			lib.group.push('wu1');
			lib.translate.wu1='国';
			lib.translate.wu1Color="#990099"
			lib.group.push('liu');
			lib.translate.liu='国';
			lib.translate.liuColor="#990099"
			lib.group.push('qi');
			lib.translate.qi='国';
			lib.translate.qiColor="#990099"
			lib.group.push('ba');
			lib.translate.ba='国';
			lib.translate.baColor="#990099"
			lib.group.push('jiu1');
			lib.translate.jiu1='国';
			lib.translate.jiu1Color="#990099"
			lib.group.push('shi');
			lib.translate.shi='国';
			lib.translate.shiColor="#990099"
			lib.group.push('shiyi');
			lib.translate.shiyi='国';
			lib.translate.shiyiColor="#990099"
			lib.group.push('shier');
			lib.translate.shier='国';
			lib.translate.shierColor="#990099"
			lib.group.push('shisan');
			lib.translate.shisan='国';
			lib.translate.shisanColor="#990099"
			lib.group.push('shisi');
			lib.translate.shisi='国';
			lib.translate.shisiColor="#990099"
			lib.group.push('shiwu');
			lib.translate.shiwu='国';
			lib.translate.shiwuColor="#990099"
			lib.group.push('shiliu');
			lib.translate.shiliu='国';
			lib.translate.shiliuColor="#990099"
			lib.group.push('yi');
			lib.translate.yi='国';
			lib.translate.yiColor="#990099"
lib.brawl.jianbingmoshi = {
            name:'兼并模式',
            mode:'guozhan',
            intro:[
			'游戏开始，每个玩家自立为国，各自为战。',
			'每当有一个国家灭亡时，造成其灭亡的国家可以获得灭亡的国家的明置武将技能。',
            ],
content:{
gameStart:function(){
game.me.useSkill('chanceIdentity0');
}
},
init:function(){
game.saveConfig('onlyguozhan',false,'guozhan');
game.saveConfig('guozhanpile',false,'guozhan');
if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
lib.skill.chanceIdentity={
                content:function (){
player.next.group='er';
player.next.identity='er';
player.next._group='er';
player.next.node.identity.firstChild.innerHTML=get.translation('er');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>2){
player.next.useSkill("chanceIdentity2")
}
},
            };
lib.skill.chanceIdentity2={
                content:function (){
player.next.group='san';
player.next.identity='san';
player.next._group='san';
player.next.node.identity.firstChild.innerHTML=get.translation('san');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>3){
player.next.useSkill("chanceIdentity3")
}
},
            };
lib.skill.chanceIdentity3={
                content:function (){
player.next.group='si';
player.next.identity='si';
player.next._group='si';
player.next.node.identity.firstChild.innerHTML=get.translation('si');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>4){
player.next.useSkill("chanceIdentity4")
}
},
            };
lib.skill.chanceIdentity4={
                content:function (){
player.next.group='wu1';
player.next.identity='wu1';
player.next._group='wu1';
player.next.node.identity.firstChild.innerHTML=get.translation('wu1');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>5){
player.next.useSkill("chanceIdentity5")
}
},
            };
lib.skill.chanceIdentity5={
                content:function (){
player.next.group='liu';
player.next.identity='liu';
player.next._group='liu';
player.next.node.identity.firstChild.innerHTML=get.translation('liu');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>6){
player.next.useSkill("chanceIdentity6")
}
},
            };
lib.skill.chanceIdentity6={
                content:function (){
player.next.group='qi';
player.next.identity='qi';
player.next._group='qi';
player.next.node.identity.firstChild.innerHTML=get.translation('qi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>7){
player.next.useSkill("chanceIdentity7")
}
},
            };
lib.skill.chanceIdentity7={
                content:function (){
player.next.group='ba';
player.next.identity='ba';
player.next._group='ba';
player.next.node.identity.firstChild.innerHTML=get.translation('ba');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>8){
player.next.useSkill("chanceIdentity8")
}
},
            };
lib.skill.chanceIdentity8={
                content:function (){
player.next.group='jiu1';
player.next.identity='jiu1';
player.next._group='jiu1';
player.next.node.identity.firstChild.innerHTML=get.translation('jiu1');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>9){
player.next.useSkill("chanceIdentity9")
}
},
            };
lib.skill.chanceIdentity9={
                content:function (){
player.next.group='shi';
player.next.identity='shi';
player.next._group='shi';
player.next.node.identity.firstChild.innerHTML=get.translation('shi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>10){
player.next.useSkill("chanceIdentity10")
}
},
            };
lib.skill.chanceIdentity10={
                content:function (){
player.next.group='shiyi';
player.next.identity='shiyi';
player.next._group='shiyi';
player.next.node.identity.firstChild.innerHTML=get.translation('shiyi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>11){
player.next.useSkill("chanceIdentity11")
}
},
            };
lib.skill.chanceIdentity11={
                content:function (){
player.next.group='shier';
player.next.identity='shier';
player.next._group='shier';
player.next.node.identity.firstChild.innerHTML=get.translation('shier');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>12){
player.next.useSkill("chanceIdentity12")
}
},
            };
lib.skill.chanceIdentity12={
                content:function (){
player.next.group='shisan';
player.next.identity='shisan';
player.next._group='shisan';
player.next.node.identity.firstChild.innerHTML=get.translation('shisan');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>13){
player.next.useSkill("chanceIdentity13")
}
},
            };
lib.skill.chanceIdentity13={
                content:function (){
player.next.group='shisi';
player.next.identity='shisi';
player.next._group='shisi';
player.next.node.identity.firstChild.innerHTML=get.translation('shisi');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>14){
player.next.useSkill("chanceIdentity14")
}
},
            };
lib.skill.chanceIdentity14={
                content:function (){
player.next.group='shiwu';
player.next.identity='shiwu';
player.next._group='shiwu';
player.next.node.identity.firstChild.innerHTML=get.translation('shiwu');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>15){
player.next.useSkill("chanceIdentity15")
}
},
            };
lib.skill.chanceIdentity15={
                content:function (){
player.next.group='shiliu';
player.next.identity='shiliu';
player.next._group='shiliu';
player.next.node.identity.firstChild.innerHTML=get.translation('shiliu');
player.next.node.identity.dataset.color='zhu';
if(game.players.length>16){
player.next.useSkill("chanceIdentity16")
}
},
            };
lib.skill.chanceIdentity0={
                content:function (){
player.next.group='yi';
player.next.identity='yi';
player.next._group='yi';
player.next.node.identity.firstChild.innerHTML=get.translation('yi');
player.next.node.identity.dataset.color='zhu';
player.next.useSkill("chanceIdentity")
},
            };
lib.skill._gainSkill={
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
                    return event.source&&event.source.isIn();
                },
                content:function (){
					game.log(trigger.source,'获得了',player.get('s',false,false));
					trigger.source.addSkill(player.get('s',false,false));
				},
            };
}
}
}
	};
	if(config.nyhzrChessBoss){
	game.addCharacterPack({
		character:{
            "hnyhzr后羿Chessboss":["male","min",11,["nyzhr逐阳Chessboss","nyhzr穿云箭Chessboss","nyhzr燎火之箭"],["ext:新英魂之刃/NewPifunyhzr射日英雄1.jpg","forbidai","chessboss","des:<li>后羿环顾着四周，目力可及之处，只有龟裂的大地。匍匐在他脚下的老妪已经被灼热的太阳晒脱了水分，恍惚间就像一段焦枯树干。 <li>天空中的太阳们依旧嚣张地散发着全部的热量。<li>是的，太阳们。<li>它们是天帝的儿子，每日有一人化身为太阳穿过天空，撒下光热，哺育世间万物。然而，周而复始的日子令它们觉得厌烦。于是，再一个黎明到来时，它们一起出现在天空中， <li>太阳们散发出的热量烤焦了大地，树木庄稼化为灰烬，人间瞬时化为炼狱…… <li>不能再这样了，总得有个人站出来，帮助大家脱离苦海。<li>后羿回过神来，他按了按腰间的箭囊，那是最后的希望……不能再等待了！他从肩上取下那张红色的弓，抽出了箭矢。 <li>满弓！射出！ <li>奇迹出现了！骄横的太阳纷纷坠落，当第九个太阳落下之时，世界再度恢复了原貌。 <li>人们铭记着他的威能，自此，“神射手”之名名垂千古！"]],
            "gnyhzr宫本武藏Chessboss":["female","min",10,["nyhzr剑客横行Chessboss","nyhzr千叶斩Chessboss","nyhzr乱刃影舞"],["ext:新英魂之刃/Newgnyhzr宫本武藏.jpg","forbidai","chessboss","des:<li>黑夜深沉，参天宫殿伫立于阴影之中。传说中拥有巨大力量的天照宝珠就被魔王藏在这里。<li>女剑客静静潜伏在悬崖边上，隐藏在狐面下的冰冷双瞳远远向宫殿凝望。<li>几支巡逻队打着火把如往常一般在宫殿外巡视，她低下身子，轻巧地绕过他们潜入宫殿之中。阴森幽暗的建筑中遍布重重机关，稍一不慎就将死无葬身之地。上下摇摆的抡锤、瞬时淹没的流沙、地底渗出的剧毒、诡异的谜题之门……这些都难不倒这个美艳冷酷的女子。双刀在手，一路过关斩将。<li>暗夜中的潜伏者最终来到了她的终点——某个宫殿深处的密室，悄无声息地划开的机关门后，一片黑暗中的石台上，天照宝珠正在绽放光华。<li>目标就在眼前，她不由加快脚步，但突然觉察到什么又立即停下，双手交错反握刀柄，伏身露出戒备的神情。“真可惜，再往前一步，你就死了。”魔王鼓着掌，从黑暗中露出身形，嘴角扯出一道狰狞的笑。“重重关卡都被你闯过，真是精彩。宫本武藏，你果然不愧传说中的盛名……但你注定拿不到它，因为我会在你拿到之前毁掉它。”<li>“可惜我的目标不是它。”武藏冷冷一笑：“是你！”<li>刀光闪过，天照宝珠仍静静地光华四射，魔王还留存着讶异表情的人头已落地。<li>双刀入鞘，身形一晃，天照宝珠落入腰囊，而武藏，已重新隐入黑暗之中……"]],
		},
        skill:{
            "nyzhr逐阳Chessboss":{
			mode:['chess'],
                nobracket:true,
    			mod:{
    				chessMove:function(player,current){
    					return current+3;
    				},
    			},
    			enable:'phaseUse',
    			usable:1,
    			direct:true,
    			delay:false,
    			preservecancel:true,
    			filter:function(event,player){
    				if(!player.movable(0,1)&&!player.movable(0,-1)&&
    					!player.movable(1,0)&&!player.movable(-1,0)){
    					return false;
    				}
    				var move=2;
    				move=game.checkMod(player,move,'chessMove',player);
    				return move>0;
    			},
    			content:function(){
    				"step 0"
    				var move=2;
    				move=game.checkMod(player,move,'chessMove',player);
    				player.chooseToMove(move).phasing=true;
    				"step 1"
    				if(ui.confirm){
    					ui.confirm.classList.add('removing');
    				}
    				if(!result.bool){
    					var skill=player.getStat().skill;
    					skill._chessmove--;
    					if(typeof skill._chessmovetried=='number'){
    						skill._chessmovetried++;
    					}
    					else{
    						skill._chessmovetried=1;
    					}
    				}
    			},
    			ai:{
    				order:5,
    				result:{
    					playerx:function(player){
    						if(get.mode()=='tafang'&&_status.enemies.contains(player)){
    							return 1;
    						}
    						var nh=player.countCards('h');
    						if(!player.countCards('h','sha')&&
    						!player.countCards('h','shunshou')&&
    						!player.countCards('h','bingliang')){
    							if(nh<=Math.min(3,player.hp)) return Math.random()-0.3;
    							else if(nh<=Math.min(2,player.hp)) return Math.random()-0.4;
    							return Math.random()-0.5;
    						}
    						var neighbour;
    						neighbour=player.getNeighbour(0,1);
    						if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
    							if(get.distance(player,neighbour,'attack')<1) return 1;
    							return 0;
    						}
    						neighbour=player.getNeighbour(0,-1);
    						if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
    							if(get.distance(player,neighbour,'attack')<1) return 1;
    							return 0;
    						}
    						neighbour=player.getNeighbour(1,0);
    						if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
    							if(get.distance(player,neighbour,'attack')<1) return 1;
    							return 0;
    						}
    						neighbour=player.getNeighbour(-1,0);
    						if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
    							if(get.distance(player,neighbour,'attack')<1) return 1;
    							return 0;
    						}
    						return 1;
    					},
    					player:function(player){
    						if(player.getStat().skill._chessmovetried>=10){
    							return 0;
    						}
    						var x=lib.skill._chessmove.ai.result.playerx(player);
    						if(player.isMad()) return -x;
    						return x;
    					}
    				}
    			}
            },
            "nyhzr穿云箭Chessboss":{
			mode:['chess'],
				nobracket:true,
    			enable:'phaseUse',
    			usable:1,
    			filter:function(event,player){
					return player.num('h')>0;
				},
				filterCard:{name:'sha'},
				selectCard:1,
				content:function(){
					'step 0'
					player.chooseControl('上','下','左','右').set('ai',function(){
    					for(var i=0;i<game.players.length;i++){
        					var xy1=player.getXY();
							var xy2=game.players[i].getXY();
        					if (xy1[0]==xy2[0]&&xy1[1]>xy2[1]){
								var aiChooseControl='上';
							};
        					if (xy1[0]==xy2[0]&&xy1[1]<xy2[1]){
								var aiChooseControl='下';
							};
        					if (xy1[0]>xy2[0]&&xy1[1]==xy2[1]){
								var aiChooseControl='左';
							};
        					if (xy1[0]<xy2[0]&&xy1[1]==xy2[1]){
								var aiChooseControl='右';
							};
    					};
						return aiChooseControl;
					})
					'step 1'
					if (result.control=='上'){
						game.log(player,'向上射出穿云箭');
    					for(var i=0;i<game.players.length;i++){
        					var xy1=player.getXY();
							var xy2=game.players[i].getXY();
        					if (xy1[0]==xy2[0]&&xy1[1]>xy2[1]){
            					game.players[i].damage();
								game.players[i].getDebuff();
        					};
    					};
					};
					if (result.control=='下'){
						game.log(player,'向下射出穿云箭');
    					for(var i=0;i<game.players.length;i++){
        					var xy1=player.getXY();
							var xy2=game.players[i].getXY();
        					if (xy1[0]==xy2[0]&&xy1[1]<xy2[1]){
            					game.players[i].damage();
								game.players[i].getDebuff();
        					};
    					};
					};
					if (result.control=='左'){
						game.log(player,'向左射出穿云箭');
    					for(var i=0;i<game.players.length;i++){
        					var xy1=player.getXY();
							var xy2=game.players[i].getXY();
        					if (xy1[0]>xy2[0]&&xy1[1]==xy2[1]){
            					game.players[i].damage();
								game.players[i].getDebuff();
        					};
    					};
					};
					if (result.control=='右'){
						game.log(player,'向右射出穿云箭');
    					for(var i=0;i<game.players.length;i++){
        					var xy1=player.getXY();
							var xy2=game.players[i].getXY();
        					if (xy1[0]<xy2[0]&&xy1[1]==xy2[1]){
            					game.players[i].damage();
								game.players[i].getDebuff();
        					};
    					};
					};
				},
				ai:{
					result:{
    					player:function(player){
    					for(var i=0;i<game.players.length;i++){
        					var xy1=player.getXY();
							var xy2=game.players[i].getXY();
        					if (xy1[0]==xy2[0]&&xy1[1]>xy2[1]){
								var aiChooseControl='上';
							};
        					if (xy1[0]==xy2[0]&&xy1[1]<xy2[1]){
								var aiChooseControl='下';
							};
        					if (xy1[0]>xy2[0]&&xy1[1]==xy2[1]){
								var aiChooseControl='左';
							};
        					if (xy1[0]<xy2[0]&&xy1[1]==xy2[1]){
								var aiChooseControl='右';
							};
    					};
						if(aiChooseControl=='上'||aiChooseControl=='下'||aiChooseControl=='左'||aiChooseControl=='右') return 1;
						return 0;
    					},
					},
					order:4.8,
				},
			},
            "nyhzr剑客横行Chessboss":{
			mode:['chess'],
nobracket:true,
    group:["nyhzr剑客横行Chessboss_1111","nyhzr剑客横行Chessboss_2222"],
    subSkill:{
        1111:{
trigger:{
player:"phaseAfter",
},
forced:true,
content:function (){
if(game.me.hasSkill('nyhzr剑客横行Chessboss')){
nyhzr上=ui.create.div('.menubutton.large','↑',function(){
	if (game.me.storage.nyhzr上==undefined||game.me.storage.nyhzr上==1){
		game.me.storage.nyhzr上=0;
		game.me.moveUp();
		setTimeout(function(){
		game.me.storage.nyhzr上=1;
	},1000);
	};
	});
nyhzr上.style.height='30px';
nyhzr上.style.width='30px';
nyhzr上.style.left='17px';
nyhzr上.style.top='0px';
nyhzr下=ui.create.div('.menubutton.large','↓',function(){
	if (game.me.storage.nyhzr下==undefined||game.me.storage.nyhzr下==1){
		game.me.storage.nyhzr下=0;
		game.me.moveDown();
		setTimeout(function(){
		game.me.storage.nyhzr下=1;
	},1000);
	};
	});
nyhzr下.style.height='30px';
nyhzr下.style.width='30px';
nyhzr下.style.right='39px';
nyhzr下.style.top='90px';
nyhzr左=ui.create.div('.menubutton.large','←',function(){
	if (game.me.storage.nyhzr左==undefined||game.me.storage.nyhzr左==1){
		game.me.storage.nyhzr左=0;
		game.me.moveLeft();
		setTimeout(function(){
		game.me.storage.nyhzr左=1;
	},1000);
	};
	});
nyhzr左.style.height='30px';
nyhzr左.style.width='30px';
nyhzr左.style.right='135px';
nyhzr左.style.top='45px';
nyhzr右=ui.create.div('.menubutton.large','→',function(){
	if (game.me.storage.nyhzr右==undefined||game.me.storage.nyhzr右==1){
		game.me.storage.nyhzr右=0;
		game.me.moveRight();
		setTimeout(function(){
		game.me.storage.nyhzr右=1;
	},1000);
	};
	});
nyhzr右.style.height='30px';
nyhzr右.style.width='30px';
nyhzr右.style.right='-2px';
nyhzr右.style.top='-11px';
ui.nyhzr控制器=ui.create.dialog('hidden');
ui.nyhzr控制器.add(nyhzr上);
ui.nyhzr控制器.add(nyhzr下);
ui.nyhzr控制器.add(nyhzr左);
ui.nyhzr控制器.add(nyhzr右);
ui.window.appendChild(ui.nyhzr控制器);
ui.nyhzr控制器.style.height='200px';
ui.nyhzr控制器.style.width='200px';
ui.nyhzr控制器.style.left='50px';
ui.nyhzr控制器.style.top='calc(100% - 300px)';
}else{
player.storage.nyhzr剑客横行Chessboss=1;
player.useSkill('nyhzr剑客横行Chessboss1');
};
			},
        },
        2222:{
trigger:{
player:"phaseBefore",
},
forced:true,
content:function (){
if(game.me.hasSkill('nyhzr剑客横行Chessboss')&&ui.nyhzr控制器){
ui.nyhzr控制器.remove();
};
player.storage.nyhzr剑客横行Chessboss=0;
			},
        },
    },
	},
            "nyhzr剑客横行Chessboss1":{
			mode:['chess'],
nobracket:true,
content:function (){
if(Math.random()<=0.25){
player.moveUp();
}else if(Math.random()<=0.25){
player.moveDown();
}else if(Math.random()<=0.25){
player.moveRight();
}else{
player.moveLeft();
}
if(player.storage.nyhzr剑客横行Chessboss==1){
setTimeout(function(){
player.useSkill('nyhzr剑客横行Chessboss1');
},1500);
};
},
	},
            "nyhzr千叶斩Chessboss":{
nobracket:true,
enable:"phaseUse",
filterTarget:function (card,player,target){
return player!=target;
},
filter:function (event,player){
return player.num('h')>player.num('e');
},
content:function (){
"step 0"
if(player.hasSkill('nyhzr勾玉魂刀')&&!player.hasSkill('nyhzr勾玉魂刀1')) player.addSkill('nyhzr勾玉魂刀1');
var qyzsha=get.cardPile(function(card){return card.name=='sha'});
if(qyzsha&&player.num('h')>player.num('e')&&target.hp>0){
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
ai:{
result:{
player:1,
},
order:31,
},
            },




		},
        translate:{
            "hnyhzr后羿Chessboss":"♜后羿",
            "gnyhzr宫本武藏Chessboss":"♜宫本武藏",
    		"nyzhr逐阳Chessboss":"逐阳",
    		"nyzhr逐阳Chessboss_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你回合内的移动距离+3<br>出牌阶段，你可以移动两次",
    		"nyhzr穿云箭Chessboss":"穿云箭",
    		"nyhzr穿云箭Chessboss_info":"出牌阶段，你可以弃置一张【杀】并选择穿云箭的释放方向，被穿云箭击中的人会获得一个随机的负面效果，每回合限一次",
    		"nyhzr剑客横行Chessboss1":"剑客横行",
    		"nyhzr剑客横行Chessboss":"剑客横行",
    		"nyhzr剑客横行Chessboss_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合结束后，你可以点击按钮移动（移动冷却：1s）<br>回合开始前，你移除按钮",
            "nyhzr千叶斩Chessboss":"千叶斩",
            "nyhzr千叶斩Chessboss_info":"出牌阶段，若你的手牌数大于装备区内的牌数，你可以在牌堆中获得一张【杀】并使用，此【杀】结算后，你弃置一张手牌。若你弃置手牌后，手牌数依然大于装备区内的牌数，你再使用一次【千叶斩】",
        },
},'<span style=\"font-size:18px;font-weight:600\">英魂之刃战棋</span>');
	};
		if(config.IncreasePlayerNumber=='0'){
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','8','identity');
					game.saveConfig('player_number','8','guozhan');
				};
			});
		};
		if(config.IncreasePlayerNumber=='1'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','9','identity');
					game.saveConfig('player_number','9','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
				}
			});
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='2'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'10':'十人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'10':'十人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','10','identity');
					game.saveConfig('player_number','10','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
				}
			});
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='3'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'11':'十一人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'11':'十一人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','11','identity');
					game.saveConfig('player_number','11','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='4'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'12':'十二人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'12':'十二人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','12','identity');
					game.saveConfig('player_number','12','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='5'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'13':'十三人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'13':'十三人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='14'){
					game.saveConfig('player_number','13','identity');
					game.saveConfig('player_number','13','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='6'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'14':'十四人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'14':'十四人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'){
					game.saveConfig('player_number','14','identity');
					game.saveConfig('player_number','14','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
				}
			});
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='7'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'15':'十五人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'15':'十五人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','15','identity');
					game.saveConfig('player_number','15','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
				}
			});
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='8'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'16':'十六人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'16':'十六人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'||get.config('player_number')=='15'){
					game.saveConfig('player_number','16','identity');
					game.saveConfig('player_number','16','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
					lib.translate.unknown15='十六号位';
				}
			});
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='all'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
				'14':'十四人',
				'15':'十五人',
				'16':'十六人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
				'14':'十四人',
				'15':'十五人',
				'16':'十六人',
			}
			if(get.config('player_number')=='9'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
				}
			});
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='10'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
				}
			});
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='11'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='12'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='13'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='14'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
				}
			});
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='15'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
				}
			});
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='16'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
					lib.translate.unknown15='十六号位';
				}
			});
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			};
lib.mode.chess.config.chess_leader_save.item={
save1:'一',
save2:'二',
save3:'三',
save4:'四',
save5:'五',
save6:'英魂之刃',
};
if(get.config('chess_leader_save')=='save6'&&get.config('chess_mode')=='leader'){
lib.rank.rarity.rare.push('lnyhzr咯哩咯哩');
lib.rank.rarity.rare.push('nnyhzr妮娜');
lib.rank.rarity.rare.push('lnyhzr莉莉姆.提露埃拉');
lib.rank.rarity.rare.push('knyhzr狂徒');
lib.rank.rarity.rare.push('bnyhzr布鲁');
lib.rank.rarity.rare.push('lnyhzr龙骑士ol');
lib.rank.rarity.rare.push('nnyhzr妮娜ol');
lib.rank.rarity.epic.push('hnyhzr后羿');
lib.rank.rarity.epic.push('znyhzr贞德');
lib.rank.rarity.epic.push('snyhzr萨特');
lib.rank.rarity.epic.push('snyhzr时空猎人');
lib.rank.rarity.epic.push('cnyhzr超能企鹅');
lib.rank.rarity.legend.push('dnyhzr德古拉');
lib.rank.rarity.legend.push('anyhzr艾迪兰');
lib.rank.rarity.legend.push('gnyhzr宫本武藏');
lib.arenaReady.push(function(){
//var nskzc=ui.create.control('逆时空战场','nozoom',function(){});
var lqwj=ui.create.system('时空酒馆',null,true);
lib.setPopped(lqwj,function(){
var lqwj1=ui.create.dialog('hidden');
lqwj1.listen(function(e){
e.stopPropagation();
});
lqwj1.add('<span style=\"font-size:15px\">点击图片可以查看武将资料<br>招募成功后会在3秒后刷新游戏</span>');
var lqwjlnyhzr咯哩咯哩=ui.create.div('.card.fullskin',function(){ui.click.charactercard('lnyhzr咯哩咯哩','')});
lqwjlnyhzr咯哩咯哩.style.height='55px';
lqwjlnyhzr咯哩咯哩.style.width='55px';
lqwjlnyhzr咯哩咯哩.setBackground('lnyhzr咯哩咯哩','character');
lqwj1.add(lqwjlnyhzr咯哩咯哩);
var lqwjhnyhzr后羿=ui.create.div('.card.fullskin',function(){ui.click.charactercard('hnyhzr后羿','')});
lqwjhnyhzr后羿.style.height='55px';
lqwjhnyhzr后羿.style.width='55px';
lqwjhnyhzr后羿.setBackground('hnyhzr后羿','character');
lqwj1.add(lqwjhnyhzr后羿);
var lqwjlnyhzr莉莉姆提露埃拉=ui.create.div('.card.fullskin',function(){ui.click.charactercard('lnyhzr莉莉姆.提露埃拉','')});
lqwjlnyhzr莉莉姆提露埃拉.style.height='55px';
lqwjlnyhzr莉莉姆提露埃拉.style.width='55px';
lqwjlnyhzr莉莉姆提露埃拉.setBackground('lnyhzr莉莉姆.提露埃拉','character');
lqwj1.add(lqwjlnyhzr莉莉姆提露埃拉);
var lqwjlnyhzr咯哩咯哩buy=ui.create.div('','2116<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=2116){
game.data.character.push('lnyhzr咯哩咯哩');
game.saveData();
game.changeDust(-2116);
game.say1('你招募了武将——咯哩咯哩');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjlnyhzr咯哩咯哩buy.style.height='10px';
lqwjlnyhzr咯哩咯哩buy.style.width='55px';
lqwj1.add(lqwjlnyhzr咯哩咯哩buy);
var lqwjhnyhzr后羿buy=ui.create.div('','2767<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=2767){
game.data.character.push('hnyhzr后羿');
game.saveData();
game.changeDust(-2767);
game.say1('你招募了武将——后羿');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjhnyhzr后羿buy.style.height='10px';
lqwjhnyhzr后羿buy.style.width='55px';
lqwj1.add(lqwjhnyhzr后羿buy);
var lqwjlnyhzr莉莉姆提露埃拉buy=ui.create.div('','2437<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=2437){
game.data.character.push('lnyhzr莉莉姆.提露埃拉');
game.saveData();
game.changeDust(-2437);
game.say1('你招募了武将——莉莉姆.提露埃拉');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjlnyhzr莉莉姆提露埃拉buy.style.height='10px';
lqwjlnyhzr莉莉姆提露埃拉buy.style.width='55px';
lqwj1.add(lqwjlnyhzr莉莉姆提露埃拉buy);

var lqwjnnyhzr妮娜=ui.create.div('.card.fullskin',function(){ui.click.charactercard('nnyhzr妮娜','')});
lqwjnnyhzr妮娜.style.height='55px';
lqwjnnyhzr妮娜.style.width='55px';
lqwjnnyhzr妮娜.setBackground('nnyhzr妮娜','character');
lqwj1.add(lqwjnnyhzr妮娜);
var lqwjznyhzr贞德=ui.create.div('.card.fullskin',function(){ui.click.charactercard('znyhzr贞德','')});
lqwjznyhzr贞德.style.height='55px';
lqwjznyhzr贞德.style.width='55px';
lqwjznyhzr贞德.setBackground('znyhzr贞德','character');
lqwj1.add(lqwjznyhzr贞德);
var lqwjsnyhzr萨特=ui.create.div('.card.fullskin',function(){ui.click.charactercard('snyhzr萨特','')});
lqwjsnyhzr萨特.style.height='55px';
lqwjsnyhzr萨特.style.width='55px';
lqwjsnyhzr萨特.setBackground('snyhzr萨特','character');
lqwj1.add(lqwjsnyhzr萨特);
var lqwjnnyhzr妮娜buy=ui.create.div('','1865<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1865){
game.data.character.push('nnyhzr妮娜');
game.saveData();
game.changeDust(-1865);
game.say1('你招募了武将——妮娜');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjnnyhzr妮娜buy.style.height='10px';
lqwjnnyhzr妮娜buy.style.width='55px';
lqwj1.add(lqwjnnyhzr妮娜buy);
var lqwjznyhzr贞德buy=ui.create.div('','2663<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=2663){
game.data.character.push('znyhzr贞德');
game.saveData();
game.changeDust(-2663);
game.say1('你招募了武将——贞德');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjznyhzr贞德buy.style.height='10px';
lqwjznyhzr贞德buy.style.width='55px';
lqwj1.add(lqwjznyhzr贞德buy);
var lqwjsnyhzr萨特buy=ui.create.div('','3160<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=3160){
game.data.character.push('snyhzr萨特');
game.saveData();
game.changeDust(-3160);
game.say1('你招募了武将——萨特');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjsnyhzr萨特buy.style.height='10px';
lqwjsnyhzr萨特buy.style.width='55px';
lqwj1.add(lqwjsnyhzr萨特buy);

var lqwjdnyhzr德古拉=ui.create.div('.card.fullskin',function(){ui.click.charactercard('dnyhzr德古拉','')});
lqwjdnyhzr德古拉.style.height='55px';
lqwjdnyhzr德古拉.style.width='55px';
lqwjdnyhzr德古拉.setBackground('dnyhzr德古拉','character');
lqwj1.add(lqwjdnyhzr德古拉);
var lqwjknyhzr狂徒=ui.create.div('.card.fullskin',function(){ui.click.charactercard('knyhzr狂徒','')});
lqwjknyhzr狂徒.style.height='55px';
lqwjknyhzr狂徒.style.width='55px';
lqwjknyhzr狂徒.setBackground('knyhzr狂徒','character');
lqwj1.add(lqwjknyhzr狂徒);
var lqwjsnyhzr时空猎人=ui.create.div('.card.fullskin',function(){ui.click.charactercard('snyhzr时空猎人','')});
lqwjsnyhzr时空猎人.style.height='55px';
lqwjsnyhzr时空猎人.style.width='55px';
lqwjsnyhzr时空猎人.setBackground('snyhzr时空猎人','character');
lqwj1.add(lqwjsnyhzr时空猎人);
var lqwjdnyhzr德古拉buy=ui.create.div('','3567<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=3567){
game.data.character.push('dnyhzr德古拉');
game.saveData();
game.changeDust(-3567);
game.say1('你招募了武将——德古拉');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjdnyhzr德古拉buy.style.height='10px';
lqwjdnyhzr德古拉buy.style.width='55px';
lqwj1.add(lqwjdnyhzr德古拉buy);
var lqwjknyhzr狂徒buy=ui.create.div('','1886<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1886){
game.data.character.push('knyhzr狂徒');
game.saveData();
game.changeDust(-1886);
game.say1('你招募了武将——狂徒');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjknyhzr狂徒buy.style.height='10px';
lqwjknyhzr狂徒buy.style.width='55px';
lqwj1.add(lqwjknyhzr狂徒buy);
var lqwjsnyhzr时空猎人buy=ui.create.div('','3288<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=3288){
game.data.character.push('snyhzr时空猎人');
game.saveData();
game.changeDust(-3288);
game.say1('你招募了武将——时空猎人');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjsnyhzr时空猎人buy.style.height='10px';
lqwjsnyhzr时空猎人buy.style.width='55px';
lqwj1.add(lqwjsnyhzr时空猎人buy);

var lqwjlnyhzr龙骑士=ui.create.div('.card.fullskin',function(){ui.click.charactercard('lnyhzr龙骑士','')});
lqwjlnyhzr龙骑士.style.height='55px';
lqwjlnyhzr龙骑士.style.width='55px';
lqwjlnyhzr龙骑士.setBackground('lnyhzr龙骑士','character');
lqwj1.add(lqwjlnyhzr龙骑士);
var lqwjanyhzr艾迪兰=ui.create.div('.card.fullskin',function(){ui.click.charactercard('anyhzr艾迪兰','')});
lqwjanyhzr艾迪兰.style.height='55px';
lqwjanyhzr艾迪兰.style.width='55px';
lqwjanyhzr艾迪兰.setBackground('anyhzr艾迪兰','character');
lqwj1.add(lqwjanyhzr艾迪兰);
var lqwjbnyhzr布丁=ui.create.div('.card.fullskin',function(){ui.click.charactercard('bnyhzr布丁','')});
lqwjbnyhzr布丁.style.height='55px';
lqwjbnyhzr布丁.style.width='55px';
lqwjbnyhzr布丁.setBackground('bnyhzr布丁','character');
lqwj1.add(lqwjbnyhzr布丁);
var lqwjlnyhzr龙骑士buy=ui.create.div('','1569<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1569){
game.data.character.push('lnyhzr龙骑士');
game.saveData();
game.changeDust(-1569);
game.say1('你招募了武将——龙骑士');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjlnyhzr龙骑士buy.style.height='10px';
lqwjlnyhzr龙骑士buy.style.width='55px';
lqwj1.add(lqwjlnyhzr龙骑士buy);
var lqwjanyhzr艾迪兰buy=ui.create.div('','4325<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=4325){
game.data.character.push('anyhzr艾迪兰');
game.saveData();
game.changeDust(-4325);
game.say1('你招募了武将——艾迪兰');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjanyhzr艾迪兰buy.style.height='10px';
lqwjanyhzr艾迪兰buy.style.width='55px';
lqwj1.add(lqwjanyhzr艾迪兰buy);
var lqwjbnyhzr布丁buy=ui.create.div('','1678<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1678){
game.data.character.push('bnyhzr布丁');
game.saveData();
game.changeDust(-1678);
game.say1('你招募了武将——布丁');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjbnyhzr布丁buy.style.height='10px';
lqwjbnyhzr布丁buy.style.width='55px';
lqwj1.add(lqwjbnyhzr布丁buy);

var lqwjcnyhzr超能企鹅=ui.create.div('.card.fullskin',function(){ui.click.charactercard('cnyhzr超能企鹅','')});
lqwjcnyhzr超能企鹅.style.height='55px';
lqwjcnyhzr超能企鹅.style.width='55px';
lqwjcnyhzr超能企鹅.setBackground('cnyhzr超能企鹅','character');
lqwj1.add(lqwjcnyhzr超能企鹅);
var lqwjbnyhzr布鲁=ui.create.div('.card.fullskin',function(){ui.click.charactercard('bnyhzr布鲁','')});
lqwjbnyhzr布鲁.style.height='55px';
lqwjbnyhzr布鲁.style.width='55px';
lqwjbnyhzr布鲁.setBackground('bnyhzr布鲁','character');
lqwj1.add(lqwjbnyhzr布鲁);
var lqwjgnyhzr宫本武藏=ui.create.div('.card.fullskin',function(){ui.click.charactercard('gnyhzr宫本武藏','')});
lqwjgnyhzr宫本武藏.style.height='55px';
lqwjgnyhzr宫本武藏.style.width='55px';
lqwjgnyhzr宫本武藏.setBackground('gnyhzr宫本武藏','character');
lqwj1.add(lqwjgnyhzr宫本武藏);
var lqwjcnyhzr超能企鹅buy=ui.create.div('','2876<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=2876){
game.data.character.push('cnyhzr超能企鹅');
game.saveData();
game.changeDust(-2876);
game.say1('你招募了武将——超能企鹅');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjcnyhzr超能企鹅buy.style.height='10px';
lqwjcnyhzr超能企鹅buy.style.width='55px';
lqwj1.add(lqwjcnyhzr超能企鹅buy);
var lqwjbnyhzr布鲁buy=ui.create.div('','2235<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=2235){
game.data.character.push('bnyhzr布鲁');
game.saveData();
game.changeDust(-2235);
game.say1('你招募了武将——布鲁');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjbnyhzr布鲁buy.style.height='10px';
lqwjbnyhzr布鲁buy.style.width='55px';
lqwj1.add(lqwjbnyhzr布鲁buy);
var lqwjgnyhzr宫本武藏buy=ui.create.div('','3964<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=3964){
game.data.character.push('gnyhzr宫本武藏');
game.saveData();
game.changeDust(-3964);
game.say1('你招募了武将——宫本武藏');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjgnyhzr宫本武藏buy.style.height='10px';
lqwjgnyhzr宫本武藏buy.style.width='55px';
lqwj1.add(lqwjgnyhzr宫本武藏buy);

var lqwjlnyhzr咯哩咯哩ol=ui.create.div('.card.fullskin',function(){ui.click.charactercard('lnyhzr咯哩咯哩ol','')});
lqwjlnyhzr咯哩咯哩ol.style.height='55px';
lqwjlnyhzr咯哩咯哩ol.style.width='55px';
lqwjlnyhzr咯哩咯哩ol.setBackground('lnyhzr咯哩咯哩ol','character');
lqwj1.add(lqwjlnyhzr咯哩咯哩ol);
var lqwjlnyhzr莉莉姆提露埃拉ol=ui.create.div('.card.fullskin',function(){ui.click.charactercard('lnyhzr莉莉姆.提露埃拉ol','')});
lqwjlnyhzr莉莉姆提露埃拉ol.style.height='55px';
lqwjlnyhzr莉莉姆提露埃拉ol.style.width='55px';
lqwjlnyhzr莉莉姆提露埃拉ol.setBackground('lnyhzr莉莉姆.提露埃拉ol','character');
lqwj1.add(lqwjlnyhzr莉莉姆提露埃拉ol);
var lqwjlnyhzr龙骑士ol=ui.create.div('.card.fullskin',function(){ui.click.charactercard('lnyhzr龙骑士ol','')});
lqwjlnyhzr龙骑士ol.style.height='55px';
lqwjlnyhzr龙骑士ol.style.width='55px';
lqwjlnyhzr龙骑士ol.setBackground('lnyhzr龙骑士ol','character');
lqwj1.add(lqwjlnyhzr龙骑士ol);
var lqwjlnyhzr咯哩咯哩olbuy=ui.create.div('','1547<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1547){
game.data.character.push('lnyhzr咯哩咯哩ol');
game.saveData();
game.changeDust(-1547);
game.say1('你招募了武将——◉咯哩咯哩');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjlnyhzr咯哩咯哩olbuy.style.height='10px';
lqwjlnyhzr咯哩咯哩olbuy.style.width='55px';
lqwj1.add(lqwjlnyhzr咯哩咯哩olbuy);
var lqwjlnyhzr莉莉姆提露埃拉olbuy=ui.create.div('','1124<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1124){
game.data.character.push('lnyhzr莉莉姆.提露埃拉ol');
game.saveData();
game.changeDust(-1124);
game.say1('你招募了武将——◉莉莉姆·提露埃拉');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjlnyhzr莉莉姆提露埃拉olbuy.style.height='10px';
lqwjlnyhzr莉莉姆提露埃拉olbuy.style.width='55px';
lqwj1.add(lqwjlnyhzr莉莉姆提露埃拉olbuy);
var lqwjlnyhzr龙骑士olbuy=ui.create.div('','1964<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1964){
game.data.character.push('lnyhzr龙骑士ol');
game.saveData();
game.changeDust(-1964);
game.say1('你招募了武将——◉龙骑士');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjlnyhzr龙骑士olbuy.style.height='10px';
lqwjlnyhzr龙骑士olbuy.style.width='55px';
lqwj1.add(lqwjlnyhzr龙骑士olbuy);

var lqwjnnyhzr妮娜ol=ui.create.div('.card.fullskin',function(){ui.click.charactercard('nnyhzr妮娜ol','')});
lqwjnnyhzr妮娜ol.style.height='55px';
lqwjnnyhzr妮娜ol.style.width='55px';
lqwjnnyhzr妮娜ol.setBackground('nnyhzr妮娜ol','character');
lqwj1.add(lqwjnnyhzr妮娜ol);
var lqwjdnyhzr德古拉ol=ui.create.div('.card.fullskin',function(){ui.click.charactercard('dnyhzr德古拉ol','')});
lqwjdnyhzr德古拉ol.style.height='55px';
lqwjdnyhzr德古拉ol.style.width='55px';
lqwjdnyhzr德古拉ol.setBackground('dnyhzr德古拉ol','character');
lqwj1.add(lqwjdnyhzr德古拉ol);
var lqwjhnyhzr后羿ol=ui.create.div('.card.fullskin',function(){ui.click.charactercard('hnyhzr后羿ol','')});
lqwjhnyhzr后羿ol.style.height='55px';
lqwjhnyhzr后羿ol.style.width='55px';
lqwjhnyhzr后羿ol.setBackground('hnyhzr后羿ol','character');
lqwj1.add(lqwjhnyhzr后羿ol);
var lqwjnnyhzr妮娜olbuy=ui.create.div('','2364<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=2364){
game.data.character.push('nnyhzr妮娜ol');
game.saveData();
game.changeDust(-2364);
game.say1('你招募了武将——◉妮娜');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjnnyhzr妮娜olbuy.style.height='10px';
lqwjnnyhzr妮娜olbuy.style.width='55px';
lqwj1.add(lqwjnnyhzr妮娜olbuy);
var lqwjdnyhzr德古拉olbuy=ui.create.div('','1124<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1124){
game.data.character.push('dnyhzr德古拉ol');
game.saveData();
game.changeDust(-1124);
game.say1('你招募了武将——◉德古拉');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjdnyhzr德古拉olbuy.style.height='10px';
lqwjdnyhzr德古拉olbuy.style.width='55px';
lqwj1.add(lqwjdnyhzr德古拉olbuy);
var lqwjhnyhzr后羿olbuy=ui.create.div('','1647<span class=\"bluetext\" style=\"color:#98F5FF\">⚑</span><br>招募',function(){
if(game.data.dust>=1647){
game.data.character.push('hnyhzr后羿ol');
game.saveData();
game.changeDust(-1647);
game.say1('你招募了武将——◉后羿');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('招募失败<br>招募令不足')};
});
lqwjhnyhzr后羿olbuy.style.height='10px';
lqwjhnyhzr后羿olbuy.style.width='55px';
lqwj1.add(lqwjhnyhzr后羿olbuy);


var sxwj=ui.create.div('','50<span class=\"bluetext\" style=\"color:#FFD700\">㉤</span>  刷新挑战武将',function(){
if(game.data.money>=50){
game.data.challenge=game.getLeaderList();
game.saveData();
game.changeMoney(-50);
sxwj.remove();
lqwj1.hide();
game.say1('刷新挑战武将成功');
setTimeout(function(){
game.say1('游戏将于3秒后刷新');
setTimeout(function(){
game.say1('游戏将于2秒后刷新');
setTimeout(function(){
game.say1('游戏将于1秒后刷新');
setTimeout(function(){
game.reload();
},1000);
},1000);
},1000);
},1500);
}else{game.say1('刷新失败<br>金币不足')};
});
sxwj.style.height='10px';
sxwj.style.width='200px';
lqwj1.add(sxwj);

return lqwj1;
},220);
});
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

			uiintro.add("单机版（修改）");

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
            intro:[
			'红方城池位于右下角，蓝方城池位于左上角。',
			'当一方的城池体力为零时，游戏结束。',
			'蓝方城池开始时，若游戏人数为三，比较双方城池的体力值，体力值大的一方获胜。',
			'回合开始前，若角色与自方城池距离小于或等于一，玩家恢复一点体力。',
			'我方攻破敌方城池后，你获得三点积分。<br><br><br><br>注：<br>城池是自身技能驱动的，若城池技能被删除，规则也会被破坏。'
            ],
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
		game.saveConfig('chess_mode','combat','chess');


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
				mode:["identity"],
                group:["_KAnyhzr王牌_1","_KAnyhzr王牌_2"],
                subSkill:{
                    "1":{
						mode:["identity"],
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
						mode:["identity"],
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
            "KAnyhzr王牌_info":"此牌不计入手牌区；当你获得此牌前，若游戏模式为模式，游戏人数（含死亡）小于8且你的手牌区中没有【王牌】，你拥有一个体力值为2的英魂之刃侍从；当你失去出牌时，若你手牌区中没有【王牌】，你失去所有英魂之刃侍从",
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
			"Pifunyhzr黑暗中的剑客1":"夜叉胧",
			"Pifunyhzr黑暗中的剑客2":"幕府利刃",
			"Pifunyhzr黑暗中的剑客3":"七海女王",
            "Pifunyhzr狼蛛1":"紫魅毒姬",
            "Pifunyhzr第二人类1":"伊娃",
            "Pifunyhzr第二人类2":"宝钻大亨",
            "Pifunyhzr第二人类3":"趣海先锋",
            "Pifunyhzr幻卡魔女1":"花牌魔后",
            "Pifunyhzr幻卡魔女2":"雪凝幻彩",
            "Pifunyhzr幻卡魔女3":"星钻仙后",
            "Pifunyhzr幻卡魔女4":"晶钻星使",
            "Pifunyhzr幻卡魔女5":"冰爽甜心",
            "Pifunyhzr自然之灵1":"妙法仙灵",
            "Pifunyhzr自然之灵2":"暗黑小魔星",
            "Pifunyhzr时空英雄1":"逆时者",
            "Pifunyhzr时空英雄2":"强殖妖斧",
            "Pifunyhzr魔龙化身1":"强袭龙魂",
            "Pifunyhzr魔龙化身2":"暗翼骨龙",
            "Pifunyhzr魔龙化身3":"星河雷爆",
            "Pifunyhzr射日英雄1":"强弩神射",
            "Pifunyhzr射日英雄2":"幻影射手",
            "Pifunyhzr射日英雄3":"银月箭华",
            "Pifunyhzr射日英雄4":"皎月王侯",
            "Pifunyhzr射日英雄5":"黄金之翼",
			"Pifunyhzr暴君1":"屠戮魔影",
			"Pifunyhzr暴君2":"炼狱魂印",
			"Pifunyhzr暴君3":"毁灭之翼",
			"Pifunyhzr暴君4":"雷鸣魔君",
			"Pifunyhzr魅魔公主1":"幽梦魔灵",
            "Pifunyhzr魅魔公主2":"祈愿之星",
            "Pifunyhzr吸血鬼伯爵1":"血色传说",
            "Pifunyhzr吸血鬼伯爵2":"安魂血使",
            "Pifunyhzr吸血鬼伯爵3":"血月会长",
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
			"Pifunyhzr狼蛛1jieshao":"皮肤介绍",
            "Pifunyhzr狼蛛1jieshao_info":"使用该皮肤，每次使用牌时，进行一次判定，若判定结果为黑色，你对目标加一个随机的负面效果",
			"nyhzr紫魅":"紫魅",
            "nyhzr紫魅_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>每次使用牌时，进行一次判定，若判定结果为黑色，你对目标加一个随机的负面效果",
			"Pifunyhzr黑暗中的剑客1jieshao":"皮肤介绍",
            "Pifunyhzr黑暗中的剑客1jieshao_info":"使用该皮肤，你触发的任何事件都不会显示拖拽线，每当你触发此效果大于或等于三次时，你潜行直至你的回合开始前（特）",
			"nyhzr隐匿":"隐匿",
			"nyhzr隐匿1":"隐匿",
            "nyhzr隐匿1_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动（特）：</span><br>你触发的任何事件都不会显示拖拽线，每当你触发此效果大于或等于三次时，你潜行直至你的回合开始前",
            "Pifunyhzr黑暗中的剑客3jieshao":"皮肤介绍",
            "Pifunyhzr黑暗中的剑客3jieshao_info":"使用该皮肤，每当你流失体力时，视为对自己使用一张【杀】（可响应）；每当你翻面时，若你有手牌，你弃置一张手牌（没有则不弃）并取消之（特）",
			"nyhzr颠覆之海":"颠覆之海",
			"nyhzr颠覆之海1":"颠覆之海",
            "nyhzr颠覆之海1_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动（特）：</span><br>每当你流失体力时，视为对自己使用一张【杀】（可响应）<br>每当你翻面时,你弃置一张手牌（没有则不弃）并取消之（特）",
            "Pifunyhzr黑暗中的剑客2jieshao":"皮肤介绍",
            "Pifunyhzr黑暗中的剑客2jieshao_info":"使用该皮肤，你使用的【杀】，【南蛮入侵】和【万箭齐发】可以指定X个目标（X为回合内使用【杀】的数量）；出牌阶段，你使用的【杀】无数量限制",
			"nyhzr幕府利刃":"幕府利刃",
            "nyhzr幕府利刃_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你使用的【杀】，【南蛮入侵】和【万箭齐发】可以指定X个目标（X为回合内使用【杀】的数量）<br>出牌阶段，你使用的【杀】无数量限制",
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
            "Pifunyhzr黑暗中的剑客1":["female","250金",'未购买',["Pifunyhzr黑暗中的剑客1jieshao"],["forbidai"]],
            "Pifunyhzr黑暗中的剑客2":["female","990金",'未购买',["Pifunyhzr黑暗中的剑客2jieshao"],["forbidai"]],
            "Pifunyhzr黑暗中的剑客3":["female","800金",'未购买',["Pifunyhzr黑暗中的剑客3jieshao"],["forbidai"]],
		},
		skill:{
            "nyhzr幕府利刃":{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					},
                    selectTarget:function (card,player,range){
                        if(card.name=='wanjian'||card.name=='nanman'||card.name=='sha') range[1]=player.countUsed('sha')+1;
                    },
                },
            },
			"Pifunyhzr黑暗中的剑客2jieshao":{
				nobracket:true,
			},
			"Pifunyhzr黑暗中的剑客3jieshao":{
				nobracket:true,
			},
			"nyhzr颠覆之海":{
				content:function (){
					player.addSkill('nyhzr颠覆之海1');
					player.loseHp=function(all){
						player.useCard({name:'sha'},player);
					};
					player.turnOver=function(all){
						if(player.num('h')>0) player.chooseToDiscard(1,'h',true);
					};
				},
			},
			"nyhzr颠覆之海1":{
				nobracket:true,
			},
			"Pifunyhzr黑暗中的剑客1jieshao":{
				nobracket:true,
			},
			"nyhzr隐匿":{
				content:function (){
					player.addSkill('nyhzr隐匿1')
					player.line=function(all){
						if(player.storage.nyhzr隐匿==undefined) player.storage.nyhzr隐匿=0;
						player.storage.nyhzr隐匿+=1;
						if(player.storage.nyhzr隐匿>=3){
							player.addTempSkill('qianxing',{player:'phaseBefore'});
							player.storage.nyhzr隐匿=0;
						};
					};
				},
			},
			"nyhzr隐匿1":{
				nobracket:true,
			},
			"_Pifunyhzr黑暗中的剑客":{
                trigger:{
                    global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
                },
                priority:101,
                direct:true,
                filter:function (event,player){
                return player.hasSkill('nyhzr勾玉魂刀')&&player.hasSkill('nyhzr千叶斩')&&player.hasSkill('nyhzr乱刃影舞')&&player.hasSkill('nyhzr幻之分身')&&player.storage._Pifunyhzr黑暗中的剑客==undefined;
                },
                content:function (){
    'step 0'
    var list=[];
	if (lib.config.coin>=250||lib.config.Pifunyhzr黑暗中的剑客1==true){
	list.push('Pifunyhzr黑暗中的剑客1')
	}
	if (lib.config.coin>=990||lib.config.Pifunyhzr黑暗中的剑客2==true){
	list.push('Pifunyhzr黑暗中的剑客2')
	}
	if (lib.config.coin>=800||lib.config.Pifunyhzr黑暗中的剑客3==true){
	list.push('Pifunyhzr黑暗中的剑客3')
	}
    if(list.length){
    player.chooseButton(ui.create.dialog('选择/购买技能皮肤',[list,'character'],'<li>若未购买皮肤则购买并使用选定的技能皮肤<li>你可以无条件使用已购买或已解锁的技能皮肤<li>若按取消则不使用技能皮肤'),function(button){
        var i=Math.floor(Math.random()*list.length);
        return list[i];
    })}
    'step 1'
    if(result.bool){
	if (result.buttons[0].link=='Pifunyhzr黑暗中的剑客1'){
		if (player==game.me){
		if (lib.config.Pifunyhzr黑暗中的剑客1!=true){
		game.changeCoin(-250);
		game.saveConfig('Pifunyhzr黑暗中的剑客1',true);
		player.useSkill('nyhzr隐匿');
		game.say1('购买成功');
	}else{
		player.useSkill('nyhzr隐匿');
		}
	}else{
		player.useSkill('nyhzr隐匿');
		}
	}
	if (result.buttons[0].link=='Pifunyhzr黑暗中的剑客2'){
		if (player==game.me){
		if (lib.config.Pifunyhzr黑暗中的剑客2!=true){
		game.changeCoin(-990);
		game.saveConfig('Pifunyhzr黑暗中的剑客2',true);
		player.addSkill('nyhzr幕府利刃');
		game.say1('购买成功');
	}else{
		player.addSkill('nyhzr幕府利刃');
		}
	}else{
		player.addSkill('nyhzr幕府利刃');
		}
	}
	if (result.buttons[0].link=='Pifunyhzr黑暗中的剑客3'){
		if (player==game.me){
		if (lib.config.Pifunyhzr黑暗中的剑客3!=true){
		game.changeCoin(-800);
		game.saveConfig('Pifunyhzr黑暗中的剑客3',true);
		player.useSkill('nyhzr颠覆之海');
		game.say1('购买成功');
	}else{
		player.useSkill('nyhzr颠覆之海');
		}
	}else{
		player.useSkill('nyhzr颠覆之海');
		}
	}
	game.log(player,'使用皮肤：',get.translation(result.buttons[0].link));
    player.setAvatar('gnyhzr宫本武藏',result.buttons[0].link);
	player.storage._Pifunyhzr黑暗中的剑客=0;
    }else{
	player.storage._Pifunyhzr黑暗中的剑客=0;
    }
},
            },
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
		if (lib.config.Pifunyhzr黑暗中的剑客1) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr黑暗中的剑客1'){
			lib.character[i][2]='已购买';
        }
		}
        };
		if (lib.config.Pifunyhzr黑暗中的剑客2) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr黑暗中的剑客2'){
			lib.character[i][2]='已购买';
        }
		}
        };
		if (lib.config.Pifunyhzr黑暗中的剑客3) {
			for (var i in lib.characterPack['mode_extension_技能皮肤']) {
			if (i=='Pifunyhzr黑暗中的剑客3'){
			lib.character[i][2]='已购买';
        }
		}
        };
		};
        if (config.UsePifuNew) {
            for (var i in lib.characterPack['mode_extension_技能皮肤']) {
				if (i=='Pifunyhzr第二人类1'||i=='Pifunyhzr第二人类3'||i=='Pifunyhzr魅魔公主1'||i=='Pifunyhzr魅魔公主2'||i=='Pifunyhzr暴君1'||i=='Pifunyhzr暴君2'||i=='Pifunyhzr暴君3'||i=='Pifunyhzr吸血鬼伯爵1'||i=='Pifunyhzr吸血鬼伯爵3'||i=='Pifunyhzr射日英雄1'||i=='Pifunyhzr射日英雄2'||i=='Pifunyhzr射日英雄4'||i=='Pifunyhzr射日英雄5'||i=='Pifunyhzr魔龙化身1'||i=='Pifunyhzr魔龙化身2'||i=='Pifunyhzr魔龙化身3'||i=='Pifunyhzr时空英雄1'||i=='Pifunyhzr时空英雄2'||i=='Pifunyhzr自然之灵1'||i=='Pifunyhzr自然之灵2'||i=='Pifunyhzr幻卡魔女1'||i=='Pifunyhzr幻卡魔女2'||i=='Pifunyhzr幻卡魔女3'||i=='Pifunyhzr幻卡魔女4'||i=='Pifunyhzr黑暗中的剑客1'||i=='Pifunyhzr黑暗中的剑客3')
                for (var j = 0; j < lib.character[i][4].length; j++) {
                    if (lib.character[i][4][j].indexOf('ext:') == 0) {
                        lib.character[i][4][j] = 'ext:新英魂之刃/New' + i + '.jpg'; break;
                    }
                }
            }
        };
		if(config.awakenShow){
			game.saveConfig('awakenShow',true);
		}else{
			game.saveConfig('awakenShow',false);
		};
		if(config.awakenShowRandom=='0.1'){
			game.saveConfig('awakenShowRandom',0.1);
		};
		if(config.awakenShowRandom=='0.25'){
			game.saveConfig('awakenShowRandom',0.25);
		};
		if(config.awakenShowRandom=='0.5'){
			game.saveConfig('awakenShowRandom',0.5);
		};
		if(config.awakenShowRandom=='0.75'){
			game.saveConfig('awakenShowRandom',0.75);
		};
		if(config.awakenShowRandom=='1'){
			game.saveConfig('awakenShowRandom',1);
		};
		if (lib.config.mnyhzr灭世魔星dj) {
			var mnyhzr灭世魔星dj=["male","li",3,['nyhzr小僵尸dj'],["ext:新英魂之刃/mnyhzr灭世魔星.jpg","des:<li>并不是每一个婴孩的诞生都得到祝福，犼面锁灵想起初见破靡的景象，一念竟觉已千年。<li>是时魔星出世，天象异乱，来自于太虚混沌的上神们急于知寻襁褓下落，围攻走影谷。破靡双亲虽贵为尸王尸后，也难敌神罚，不死之身归于尘土。谷中密道内通洪流，怒江之水直逼外界天地，肤体冥蓝的婴孩安睡于骨床中顺流疾走，周身尸气盘附，水不沾襟。上神们逐密道而出，却看那安胎骨床经过之处水流一退千里，河岸接壤处草被衰败，这刚出世的尸气便要枯了一整条水路，好在方圆几里渺无人畜，上神们及时截下这灭世胎，护天地人间一份安宁。<li>尸者，集天界晦气,取阴界死气,汇人界怨气而生。僵尸与僵尸所诞之子，溶混沌为体肉，赤瞳冥肤，无魄却任可生长，有别于一般走尸，唤为魔星。所幸世上仅会存有一位魔星，破靡不死，便无后者。上神们为绝后患，决定以神力铸成犼面锁缠绕骨床，贴附上古灵文封印魔星尸气，使其不生不长，永为婴孩，隐于落神坡。<li>当犼面锁因神力产生灵识之时，它陪护破靡已有数百年，从锁孔释放幽蓝色魂光，生成双手，小心翼翼地包裹着破靡。怀里的婴孩由于封印已无尸气，柔弱地好似一般胎儿，时而清醒，因双手被缠住有些恼怒，锁灵便偷偷放松链条，让他动个快活，这泼劲差点没把符文给撕扯坏；如若昏睡，锁灵便为他挡雨遮阳，驱虫赶兽，图个安眠。年华见长，符文越发残破，封印渐失，锁链被尸气灼断，本应及时向上神传信的锁灵，却有了心事，看着魔星从牙牙学语到少年模样，一拖再拖。不知是天资过人还是其他，破靡学话极快，缠着锁灵说自己会乖乖的不想再被捆着，心软彻底变为宠溺。<li>锁灵从初见继续想到破靡第一次落地。那时破靡跑到落神坡脚的花田，脚踏处花草枯竭，他开始意识到自己的尸气会给周围带来不幸，一路大跑直入锁灵怀抱哭诉，让尸气烧坏了犼面锁身的其他地方，发现后懊恼的趴在地上捶骂自己，他抬头，瞪着赤红大眼小心翼翼地问，“我以后还能抱你吗。”真是无可奈何，锁灵花了好久的功夫刚把这小东西哄好，破靡立马又被蛇吞兔吸引了注意，一个飞扑上前，用尸气让两者皆幻为走影，赋予永生，他拍拍蛇与兔的头告诫二位要友好往来，完后对锁灵挑着眉毛，“我的尸气有时候还是蛮有用的嘛！”。<li>眼下犼面锁身已千穿百孔，破靡忧心忡忡，碰也不是不碰也不是。锁灵暗暗决定要保护这个少年，哪怕要违逆上神，它也愿意相信自己所看到的纯粹。它对破靡说，“我的身已残败不堪，一旦损毁，上神便会有所感应。你虽有不死之身却盖不住尸气，而我的灵力可助你迷惑上神，无论你逃之何处，我只愿你童心依旧，天真长久。”语罢，魂光移体，那锁不再是锁，在灵气与尸气交融下越长越大，附着于破靡肩背，灵志尽失。<li>待合魂完毕，破靡方才露出一丝邪魅的笑容。对空一声口哨，唤来了尸蛇与兔，蹲下不耐烦地歪着头，听着尸兽的倾吐。末了兴奋地一拍腿，“找到村庄了？好啊，这场戏演了千年，终于可以吃人了。”<li>只见少年走向落神坡脚，信步缓缓，踩蔫了整片花田。"]];
			lib.character.mnyhzr灭世魔星dj=mnyhzr灭世魔星dj;
			lib.characterPack.nyhzrlj.mnyhzr灭世魔星dj=lib.character.mnyhzr灭世魔星dj;

		};
		},editable:false,
		precontent:function (nyhzrlj){
		ui.create.connectPlayers=function(ip){
                game.connectPlayers=[];
                for(var i=0;i<13;i++){
                    var player=ui.create.player(ui.window);
					if(i==0){
						player.style.left='calc(2.5%)';
						player.style.top='calc(20%)';
					};
					if(i==1){
						player.style.left='calc(22.5%)';
						player.style.top='calc(20%)';
					};
					if(i==2){
						player.style.left='calc(42.5%)';
						player.style.top='calc(20%)';
					};
					if(i==3){
						player.style.left='calc(62.5%)';
						player.style.top='calc(20%)';
					};
					if(i==4){
						player.style.left='calc(82.5%)';
						player.style.top='calc(20%)';
					};
					if(i==5){
						player.style.left='calc(2.5%)';
						player.style.top='calc(41%)';
					};
					if(i==6){
						player.style.left='calc(22.5%)';
						player.style.top='calc(41%)';
					};
					if(i==7){
						player.style.left='calc(42.5%)';
						player.style.top='calc(41%)';
					};
					if(i==8){
						player.style.left='calc(62.5%)';
						player.style.top='calc(41%)';
					};
					if(i==9){
						player.style.left='calc(82.5%)';
						player.style.top='calc(41%)';
					};
					if(i==10){
						player.style.left='calc(2.5%)';
						player.style.top='calc(62%)';
					};
					if(i==11){
						player.style.left='calc(22.5%)';
						player.style.top='calc(62%)';
					};
					if(i==12){
						player.style.left='calc(42.5%)';
						player.style.top='calc(62%)';
					};
                    player.dataset.position=i;
                    player.classList.add('connect');
                    player.classList.add('minskin');
                    game.connectPlayers.push(player);
                    if(i>=lib.configOL.number){
                        player.classList.add('unselectable2');
                    }
                }

                var bar=ui.create.div(ui.window);
                bar.style.height='20px';
                bar.style.width='80%';
                bar.style.left='10%';
                bar.style.top='calc(200% / 7 - 120px + 5px)';
                bar.style.textAlign='center';
                var ipbar=ui.create.div('.shadowed',ip,bar);
                ipbar.style.padding='4px';
                ipbar.style.borderRadius='2px';
                ipbar.style.position='relative';

                var button=ui.create.div('.menubutton.large.highlight.connectbutton.pointerdiv',game.online?'退出联机':'开始游戏',ui.window,function(){
                    if(button.clicked) return;
                    if(game.online){
                        if(game.onlinezhu){
                            game.send('startGame');
                        }
                        else{
                            game.saveConfig('reconnect_info');
                            game.reload();
                        }
                    }
                    else{
                        game.resume();
                    }
                    button.delete();
                    bar.delete();
                    delete ui.connectStartButton;
                    delete ui.connectStartBar;
                    button.clicked=true;
                });

                ui.connectStartButton=button;
                ui.connectStartBar=bar;
            };
		get.modetrans=function(config,server){
            if(config.mode=='versus'){
                switch(config.versus_mode){
                    case '1v1':return '单人对决';
                    case '2v2':return '欢乐成双';
                    case '3v3':return '血战到底';
                    case '4v4':return '四人对决';
                }
            }
            else if(config.mode=='identity'&&config.identity_mode=='zhong'){
                return '忠胆英杰';
            }
            else if(config.mode=='identity'&&config.identity_mode=='zombie'){
                return '僵尸狂潮';
            }
            else if(config.mode=='identity'&&config.identity_mode=='strong'){
                return '兵精粮足';
            }
            else if(config.mode=='guozhan'&&config.guozhan_mode=='combine'){
                return '一统天下';
            }
            else{
                if(server){
                    return get.translation(config.mode)+'模式';
                }
                else{
                    return get.cnNumber(parseInt(config.number))+'人'+get.translation(config.mode);
                }
            }
        };
		get.groupnature=function(group,method){
			var nature;
			switch(group){
				case 'shen':nature='thunder';break;
				case 'wei':nature='water';break;
				case 'shu':nature='soil';break;
				case 'wu':nature='wood';break;
				case 'qun':nature='metal';break;
				case 'li':nature='soil';break;
				case 'min':nature='thunder';break;
				case 'zhi':nature='water';break;
				default:return '';
			}
			if(method=='raw'){
				return nature;
			}
			return nature+'mm';
		};
		get.verticalStr=function(str,sp){
			if(typeof str!='string') return '';
			str=str.toUpperCase();
			var str2='';
            var nobreak=false;
			for(var i=0;i<str.length;i++){
                if(str[i]=='`'){
                    nobreak=!nobreak;continue;
                }
				str2+=str[i];
                if(nobreak) continue;
				if(sp&&str[i]=='S'&&str[i+1]=='P') continue;
                if(/[0-9]/.test(str[i])&&/[0-9]/.test(str[i+1])) continue;
				if(i<str.length-1){
					str2+='<br>';
				}
			}
			if(str2=='灭<br>世<br>魔<br>星'){
				str2='<span style="color:#7F0A75;font-weight:600;font-family:lishu">尸<br>王<br>之<br>子<br> </span>'
			}
			if(str2=='◉<br>咯<br>哩<br>咯<br>哩'){
				str2='<span style="color:#2DFF22;font-weight:600;font-family:lishu">自<br>然<br>之<br>灵<br> </span>'
			}
			if(str2=='◉<br>莉<br>莉<br>姆<br>·<br>提<br>露<br>埃<br>拉'){
				str2='<span style="color:#FF0BF3;font-weight:600;font-family:lishu">媚<br>魔<br>公<br>主<br> </span>'
			}
			if(str2=='◉<br>龙<br>骑<br>士'){
				str2='<span style="color:#A80E0E;font-weight:600;font-family:lishu">魔<br>龙<br>化<br>身<br> </span>'
			}
			if(str2=='◉<br>妮<br>娜'){
				str2='<span style="color:#0C7A0E;font-weight:600;font-family:lishu">狼<br>蛛<br> <br> <br> </span>'
			}
			if(str2=='◉<br>德<br>古<br>拉'){
				str2='<span style="color:#E80000;font-weight:600;font-family:lishu">吸<br>血<br>鬼<br>伯<br>爵</span>'
			}
			if(str2=='◉<br>后<br>羿'){
				str2='<span style="color:#FCFF2E;font-weight:600;font-family:lishu">射<br>日<br>英<br>雄<br> </span>'
			}
			if(str2=='◉<br>苏<br>尔<br>肯'){
				str2='<span style="color:#B20BFF;font-weight:600;font-family:lishu">死<br>灵<br>法<br>师<br> </span>'
			}
			if(str2=='◉<br>瓦<br>尔<br>基<br>里'){
				str2='<span style="color:#FF520D;font-weight:600;font-family:lishu">女<br>武<br>神<br> <br> </span>'
			}
			if(str2=='◉<br>小<br>乔'){
				str2='<span style="color:#06FBFF;font-weight:600;font-family:lishu">矫<br>情<br>之<br>花<br> </span>'
			}
			if(str2=='◉<br>凯<br>撒'){
				str2='<span style="color:#FBFF03;font-weight:600;font-family:lishu">凯<br>撒<br>大<br>帝<br> </span>'
			}
			if(str2=='◉<br>狄<br>娜'){
				str2='<span style="color:#FF0000;font-weight:600;font-family:lishu">炽<br>焰<br>火<br>女<br> </span>'
			}
			if(str2=='◉<br>司<br>马<br>懿'){
				str2='<span style="color:#272AFF;font-weight:600;font-family:lishu">狼<br>顾<br>之<br>相<br> </span>'
			}
			if(str2=='◉<br>金<br>乌'){
				str2='<span style="color:#F4200D;font-weight:600;font-family:lishu">三<br>足<br>乌<br> <br> </span>'
			}
			if(str2=='◉<br>阿<br>努<br>比<br>斯'){
				str2='<span style="color:#EAFF00;font-weight:600;font-family:lishu">灵<br>魂<br>守<br>护<br>神</span>'
			}
			if(str2=='◉<br>玄<br>武'){
				str2='<span style="color:#F4A26E;font-weight:600;font-family:lishu">四<br>象<br>之<br>北<br> </span>'
			}
			if(str2=='◉<br>甘<br>道<br>夫'){
				str2='<span style="color:#F2F482;font-weight:600;font-family:lishu">白<br>袍<br>巫<br>师<br> </span>'
			}
			if(str2=='◉<br>树<br>精<br>长<br>老'){
				str2='<span style="color:#AFF400;font-weight:600;font-family:lishu">阴<br>阳<br>师<br> <br> </span>'
			}
			if(str2=='◉<br>泰<br>坦'){
				str2='<span style="color:#F4D7A9;font-weight:600;font-family:lishu">巨<br>人<br> <br> <br> </span>'
			}
			if(str2=='◉<br>水<br>元<br>素'){
				str2='<span style="color:#3BEBF4;font-weight:600;font-family:lishu">吞<br>噬<br>之<br>水<br> </span>'
			}
			if(str2=='◉<br>死<br>神'){
				str2='<span style="color:#000000;font-weight:600;font-family:lishu">暗<br>黑<br>收<br>割<br>者</span>'
			}
			if(str2=='◉<br>项<br>羽'){
				str2='<span style="color:#FF6F15;font-weight:600;font-family:lishu">西<br>楚<br>霸<br>王<br> </span>'
			}
			if(str2=='◉<br>八<br>歧<br>大<br>蛇'){
				str2='<span style="color:#0BFF2F;font-weight:600;font-family:lishu">万<br>物<br>意<br>志<br> </span>'
			}
			if(str2=='◉<br>狂<br>徒'){
				str2='<span style="color:#960085;font-weight:600;font-family:lishu">罪<br>业<br>狂<br>屠<br> </span>'
			}
			if(str2=='◉<br>杨<br>戬'){
				str2='<span style="color:#FBFF22;font-weight:600;font-family:lishu">二<br>郎<br>神<br> <br> </span>'
			}
			if(str2=='◉<br>米<br>迦<br>勒'){
				str2='<span style="color:#FCFF66;font-weight:600;font-family:lishu">大<br>天<br>使<br> <br> </span>'
			}
			if(str2=='◉<br>电<br>光<br>侠'){
				str2='<span style="color:#1A98FF;font-weight:600;font-family:lishu">异<br>变<br>的<br>英<br>雄</span>'
			}
			if(str2=='◉<br>兰'){
				str2='<span style="color:#FF2727;font-weight:600;font-family:lishu">火<br>神<br>战<br>姬<br> </span>'
			}
			if(str2=='◉<br>大<br>乔'){
				str2='<span style="color:#06FBFF;font-weight:600;font-family:lishu">国<br>色<br>天<br>香<br> </span>'
			}
			if(str2=='◉<br>雅<br>典<br>娜'){
				str2='<span style="color:#03EAFF;font-weight:600;font-family:lishu">智<br>慧<br>女<br>神<br> </span>'
			}
			if(str2=='◉<br>西<br>莫'){
				str2='<span style="color:#AF07AD;font-weight:600;font-family:lishu">食<br>人<br>魔<br>首<br>领</span>'
			}
			if(str2=='◉<br>丛<br>林<br>之<br>子'){
				str2='<span style="color:#00FF48;font-weight:600;font-family:lishu">丛<br>林<br>之<br>子<br> </span>'
			}
			if(str2=='◉<br>宫<br>本<br>武<br>藏'){
				str2='<span style="color:#000000;font-weight:600;font-family:lishu">黑<br>暗<br>中<br>的<br>剑<br>客</span>'
			}
			if(str2=='◉<br>鲁<br>瓦'){
				str2='<span style="color:#E24529;font-weight:600;font-family:lishu">地<br>狱<br>火<br> <br> </span>'
			}
			if(str2=='◉<br>阿<br>瑞<br>斯'){
				str2='<span style="color:#F3FF06;font-weight:600;font-family:lishu">战<br>神<br> <br> <br> </span>'
			}
			if(str2=='◉<br>席<br>璐<br>达'){
				str2='<span style="color:#A5393A;font-weight:600;font-family:lishu">黑<br>桃<br>皇<br>后<br> </span>'
			}
			if(str2=='◉<br>钟<br>馗'){
				str2='<span style="color:#92A577;font-weight:600;font-family:lishu">判<br>官<br> <br> <br> </span>'
			}
			if(str2=='◉<br>阿<br>波<br>罗'){
				str2='<span style="color:#FCFF5F;font-weight:600;font-family:lishu">太<br>阳<br>之<br>子<br> </span>'
			}
			if(str2=='◉<br>花<br>木<br>兰'){
				str2='<span style="color:#ED0547;font-weight:600;font-family:lishu">代<br>父<br>从<br>军<br> </span>'
			}
			if(str2=='◉<br>西<br>门<br>飞<br>雪'){
				str2='<span style="color:#8CEDDE;font-weight:600;font-family:lishu">风<br>吹<br>雪<br> <br> </span>'
			}
			if(str2=='◉<br>孙<br>悟<br>空'){
				str2='<span style="color:#FBFF22;font-weight:600;font-family:lishu">齐<br>天<br>大<br>圣<br> </span>'
			}
			if(str2=='◉<br>斯<br>巴<br>达'){
				str2='<span style="color:#A83131;font-weight:600;font-family:lishu">英<br>勇<br>无<br>畏<br> </span>'
			}
			if(str2=='◉<br>黛<br>西<br>亚'){
				str2='<span style="color:#C8FF52;font-weight:600;font-family:lishu">圣<br>枪<br>使<br> <br> </span>'
			}
			if(str2=='◉<br>妲<br>己'){
				str2='<span style="color:#E555FF;font-weight:600;font-family:lishu">媚<br>狐<br><br> <br> </span>'
			}
			if(str2=='◉<br>卡<br>柯'){
				str2='<span style="color:#E58005;font-weight:600;font-family:lishu">波<br>斯<br>王<br>子<br> </span>'
			}
			if(str2=='◉<br>艾<br>薇'){
				str2='<span style="color:#092BA5;font-weight:600;font-family:lishu">暗<br>月<br>猎<br>手<br> </span>'
			}
			if(str2=='◉<br>福<br>娃'){
				str2='<span style="color:#FF000D;font-weight:600;font-family:lishu">福<br>娃<br> <br> <br> </span>'
			}
			if(str2=='◉<br>宫<br>本<br>武<br>藏<br> '){
				str2='<span style="color:#40FF00;font-weight:600;font-family:huangcao">夜<br>叉<br>胧<br><br><br></span>'
			}
			if(str2=='◉<br>宫<br>本<br>武<br>藏<br> <br> '){
				str2='<span style="color:#D3099A;font-weight:600;font-family:huangcao">幕<br>府<br>利<br>刃<br><br></span>'
			}
			if(str2=='◉<br>宫<br>本<br>武<br>藏<br> <br> <br> '){
				str2='<span style="color:#00FFF2;font-weight:600;font-family:huangcao">七<br>海<br>女<br>王<br><br></span>'
			}
			if(str2=='◉<br>后<br>羿<br> <br> <br> '){
				str2='<span style="color:#EAEAEA;font-weight:600;font-family:huangcao">银<br>月<br>箭<br>华<br><br></span>'
			}
			if(str2=='◉<br>后<br>羿<br> <br> <br> <br> <br> '){
				str2='<span style="color:#FBFF08;font-weight:600;font-family:huangcao">黄<br>金<br>之<br>翼<br><br></span>'
			}
			return str2;
		};
        if(nyhzrlj.enable){
            game.import('character',function(){
                var nyhzrlj={
                    name:'nyhzrlj',
                    connect:true,
                    character:{
            "lnyhzr咯哩咯哩ol":["female","zhi",3,["nyhzr仙灵伙伴ol","nyhzr迷藏印记ol"],["ext:新英魂之刃/Newlnyhzr咯哩咯哩.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/zrzl/header.jpg' width='380' height='122'><li>大多数生灵都逃不过时光的流逝，然而咯哩咯哩却不属于此类。作为自然万物之精华，咯哩咯哩拥有着一颗干净纯洁的心、永远不会长大的外形，以及与花草百兽沟通的奇妙能力，而她的名字则来源于她的口头禅：咯哩。<li>在大自然中独自生活许多年后，出于对人类世界的向往和对新朋友的渴望，咯哩咯哩带着她的小伙伴——妖精皮皮，一起来到了人类的城邦。咯哩咯哩带领孩子们玩耍，并用魔法暂时将桌椅变成花朵和动物来增添乐趣。但人们似乎并不领情——出于对魔法和力量的恐惧，大人们很快便让孩子们疏远了咯哩咯哩。<li>伤心的咯哩咯哩离开了这所城邦，重新寻找一个善良美好的新世界。途经决战之谷时，咯哩咯哩和皮皮遇到凶兽饕餮，它正准备吞噬最近的人类城邦。尽管遭到人类的疏远，但为了可爱的孩子们不受伤害，咯哩咯哩毅然与饕餮展开了战斗。然而饕餮实力强大，咯哩咯哩和皮皮陷入了险境。危急关头，一位来自异世界的男人“拳”突然出现，在他的帮助，饕餮终于败退离去。<li>咯哩咯哩对这个胸前有着北斗七星状伤疤的男人产生了浓厚的兴趣。面对这个好奇又天真的小家伙一个又一个的疑问，拳将自己的经历和扫除一切邪恶不公的决心告诉了她。听完拳的叙述，咯哩咯哩从他的身上感受到了巨大的勇气和信念的力量，她意识到，与其寻找一个虚无缥缈的新世界，不如从现在开始，创造并且守护现有的一切。于是，她决定成为拳的伙伴，和他一起踏上未知的冒险之路！<li>我才不会害怕呢！咯哩！<li>——咯哩咯哩"]],
            "lnyhzr莉莉姆.提露埃拉ol":["female","li",3,["nyhzr恐惧镰刀ol","nyhzr恐惧结界ol"],["ext:新英魂之刃/Newlnyhzr莉莉姆.提露埃拉.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/mmgz/header.jpg' width='380' height='122'><li>恢弘的钟声和吟唱笼罩着整座城市，人们云集在教堂之中，进行着庄严而神圣的宗教仪式。而在教堂的穹顶，象征着神权的巨大十字架上，却坐着一个美丽而妖娆的身影，泛着宝石光芒的瞳仁和背后的翅膀昭示着她令人畏惧的身份——夜之魔女莉莉丝和魔王撒旦的女儿，地狱的公主——莉莉姆.提露埃拉。 <li>同她的姐妹们一样，莉莉姆. 提露埃拉身上永远散发着青春的活力，外表充满魅力却又让人心生畏惧，由血统赋予的强大魔力能让她在地狱和人间穿梭自如，并不断出现在人们的噩梦之中。但和她那些只顾享乐的姐妹们不同，莉莉姆.提露埃拉更加危险且具有野心：她想把所有的人类土地都变成充满滋生魔物的土壤。 <li>就在提露埃拉不断实施着她的邪恶计划之时，其他莉莉姆以及她们手下的魔物们纷纷遭到了猎杀，而所有的线索都指向了一个人：猎魔人露娜。<li>这场关于猎杀的游戏激起了提露埃拉心中的邪恶欲望，她追随着猎魔人的踪迹来到人类的城邦。看着脚下的城市和熙攘的人群，莉莉姆.提露埃拉站起身来，灵活地跳到十字架顶端，朝着面前的城市张开双手，像是要把整座城市收入怀中。<li>“这里，马上就要完全属于我了……到时候要做些什么呢?想想就……”<li>亢奋的情绪突然被她自己打断，注视着整座城市的瞳孔突然将视线锁定在一间普通到再也不能普通的屋顶上，像是发现了宝藏一样，莉莉姆. 提露埃拉眯起了眼睛，嘴角露出了摄人的微笑。<li>“找到你了，要开始享受游戏的乐趣了。”"]],
		    "lnyhzr龙骑士ol":["male","li",4,["nyhzr龙人血脉ol"],["ext:新英魂之刃/Newlnyhzr龙骑士.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/lqs/header.jpg' width='340' height='180'><li>边境的小酒馆里，老板略带神秘的说起这样一个传说：<li>好心的领主老爷和他的养子生活在一座美丽的庄园里。<li>然而，魔龙化身的养子本性嗜血又残暴。他魔性大发之后，重伤领主，焚毁庄园。据说他身覆鳞片，口中喷火，甚至还会吃人！ <li>——那段经历对流浪骑士来说就像噩梦一般，如果真是场梦就好了……<li>那一天，从血脉中涌出的能量仿佛要将身体撕成两半，难以忍受的巨大痛楚令他失去了理智。<li>清醒之后，看着血泊中的领主和自己可怕的身躯，他只能惶恐地逃离。 <li>这些年来，骑士独自一人在荒原上流浪，而根植于血脉中的力量也与日俱增。幸运的是，在旅途中磨练出的坚韧和勇气让骑士逐渐学会了如何在狂暴中保持清明。在一次从魔兽群的包围中救下落难的冒险者后，他第一次感到这股力量会是种恩赐。 <li>兴奋的流浪骑士马不停蹄地想要回到家乡，但迎接他的却不是领主慈祥的微笑，而是冲天的火光、村民的哀嚎以及大队的强盗…… <li>那天以后，王国又多了一个传说，关于龙骑士的传说。"]],
            "nnyhzr妮娜ol":["female","min",3,["rnyhzr幽影之蜕ol","nyhzr女皇神威ol"],["ext:新英魂之刃/Newnnyhzr妮娜.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/lz/header-v2.jpg' width='380' height='122'><li>针对女王妮娜的政变在一个夜晚爆发。那些曾被赦免的贵族们带着士兵冲进王宫，将所见的人统统杀死。<li>“抓住妮娜！”熊熊火焰在王宫中肆虐，照亮一地冰冷的尸体与丑恶背叛。<li>“杀死她，她已不配为王！” <li>目标明确的叛军一路攻入寝宫，妮娜只得带着铁卫逃往王城北面。那里背靠人人恐惧的禁忌森林，叛军决不会在那设防。然而双方实力过于悬殊，当他们来到禁忌森林前，铁卫已悉数战死，只剩走投无路的妮娜一人被包围。 <li>贵族们轻蔑地嘲笑她：“你是要投降，还是逃入死地？” <li>女王的脸因恐惧而苍白，但她仍尊严地抬头走入森林：“以我的灵魂发誓，我会回来的！把你们全部杀死！” <li>叛军骚动地望向漆黑的森林，想要确定女王是否已死。而妮娜身陷密林深处，被冰冷黏丝束缚双脚。纷麻触感由四肢蔓延，骚动的剧毒螯爪遍布全身，一点点收割生命。曾经高傲的冰雪陷入地狱，死亡已如影随形，妮娜绝望地流出眼泪。 <li>“我不能死……”复仇的怒火涌上心头，被背叛的憎恨和被啃食的痛楚让她从灵魂深处发出嘶哑呐喊：“我绝不能死！” <li>“你要向那些背叛你的人复仇么？”甜腻诱惑的声音突然充斥在她耳边。"]],
		    "dnyhzr德古拉ol":["male","zhi",3,["nyhzr血虐暴风ol","nyhzr歃血为神ol"],["ext:新英魂之刃/Newdnyhzr德古拉.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/dglbj/header.jpg' width='330' height='180'><li>那座古堡矗立在林中已经很久，崩塌的外墙、腐朽的枯木、夜枭的啼叫，传说中的恶魔……一切令人生惧的元素仿佛都集中在它的身上。 <li>过去的这里并不是如此死气沉沉，令人生畏。德古拉伯爵一家是这片土地的主人。伯爵夫人虽然出身卑微，却颇受伯爵宠爱。浪漫的爱情故事也让无数人羡慕。 <li>平静的日子被教会的传令所打破。他带上家族精锐出发了。战斗几乎没有遭到抵抗，这种单纯的杀戮令伯爵的不满更加浓烈。当伯爵归来之时，迎接他的不是欢呼与鲜花，而是满目疮痍，尸横遍野……他这才明白出征不过是教会的幌子，隐藏在背后的目的是铲除异己。抱着爱人的尸体，德古拉的愤怒如同滔天巨焰，他诅咒神明，诅咒教会，发誓要让他们血债血偿！<li>自那之后，伯爵失去了踪迹。尽管教会四处搜寻，却毫无线索。<li>数月后，曾参与围剿的人皆以怪异的方式死去，死者无一例外被吸干鲜血！教会分支也在熊熊大火中化为灰烬。人们纷纷传言德古拉伯爵回来了，他将灵魂献给魔鬼，以换取复仇的永生之力。<li>他视教廷为永世之敌，仇恨不灭，直至那伪善的光明被彻底摧毁！"]],
            "hnyhzr后羿ol":["male","min",4,["nyhzr逐阳之弓ol"],["ext:新英魂之刃/Newhnyhzr后羿.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/hy/header.jpg' width='280' height='150'><li>后羿环顾着四周，目力可及之处，只有龟裂的大地。匍匐在他脚下的老妪已经被灼热的太阳晒脱了水分，恍惚间就像一段焦枯树干。 <li>天空中的太阳们依旧嚣张地散发着全部的热量。<li>是的，太阳们。<li>它们是天帝的儿子，每日有一人化身为太阳穿过天空，撒下光热，哺育世间万物。然而，周而复始的日子令它们觉得厌烦。于是，再一个黎明到来时，它们一起出现在天空中， <li>太阳们散发出的热量烤焦了大地，树木庄稼化为灰烬，人间瞬时化为炼狱…… <li>不能再这样了，总得有个人站出来，帮助大家脱离苦海。<li>后羿回过神来，他按了按腰间的箭囊，那是最后的希望……不能再等待了！他从肩上取下那张红色的弓，抽出了箭矢。 <li>满弓！射出！ <li>奇迹出现了！骄横的太阳纷纷坠落，当第九个太阳落下之时，世界再度恢复了原貌。 <li>人们铭记着他的威能，自此，“神射手”之名名垂千古！"]],
            "snyhzr苏尔肯ol":["male","zhi",3,["nyhzr颠倒灵魂ol"],["ext:新英魂之刃/snyhzr死灵法师.jpg","des:<img src='http://img8.91huo.cn/news.cos/images/buy/slfs/header-bak.jpg' width='340' height='122'><li>自收留苏尔肯之后，普赛克再无来客。<li>有巫师大人为庆典燃放烟花，普赛克村落将迎来最美妙的夜晚！”村长握着白袍的手表示欢迎。人群外，苏尔肯若有所思。<li>普赛克村落不接纳外人，苏尔肯是第一个。那时他身负重伤，因脑中的魔法余震失去记忆，是阿芙洛的照料治愈了他。如今阿芙洛已成为他的妻子，安逸的农耕生活让他并不在意遗失的过去。只是乱世锤炼出的敏锐不断萦绕着他——白袍此行并不单纯。<li>绚烂的烟花让人心生矫情，狂欢后，妻子已沉沉睡去。苏尔肯轻抚爱人的发，门外急促的脚步声显得不合时宜。村长连夜召集了所有青年男子，白袍缓缓开口，“先生们，十年前龙骑士在荒原上剿灭魔族的时候，漏了一个，我追踪至附近成功解决遗患，近日却洞察到魔族部队正往此处进军，想必这里已经暴露，转移为时已晚。”巫师的话就是一颗炸弹，众人如惊弓之鸟，各种声音逼人发狂。苏尔肯低头抚摸婚戒，他只希望阿芙洛安全。脑中上演各种预想后，他决定赌一把，抬头迎上白袍意味深长的视线，“巫师，我能做些什么？”<li>苏尔肯紧紧追随白袍的魔能之球，在指引下找到了独行术士，乞求抵御魔军的力量。<li>“虽然我欠白胡子一个人情，可一切还要按我的心情来。”独行凑近苏尔肯，用两个没有眼球的黑洞“打量”苏尔肯，“你？哈哈哈，变味的臭虫确实能勾起我的兴致！白袍这手好棋，就让我来添添彩吧！”闻言同时，苏尔肯脑中呈现村长与一个村民被黑影绞死的画面。他仿佛知道独行要干什么，嘴上不停地哀求，心中不断地祈祷，直到阿芙洛的血染红被褥，他彻底崩溃。他感受到一股强大的力量开始流入他的身体，肉体被黑影腐蚀，碎骨畸生。苏尔肯听到来自独行的戏谑，“套了羊皮，真以为自己是羊了？”<li>苏尔肯被独行的魔法送回村落。魔军已至，白袍制造出巨大屏障包裹住村民，来不及等苏尔肯理清头绪，白袍吼道，“抓紧时间，要撑不住了。”苏尔肯需要答案，需要慰藉，至少他希望爱妻的死有价值。顷刻间，他的力量直逼而去，黑色迅速蔓延，瓦解了魔军的攻势。每倒下一个尸体，苏尔肯就摄入一丝灵力，他走过的每一寸土壤之中，都保留有亡魂的温度。魔军将领在弥留之际，质问道，“你也来自黑暗，为何要与我们为敌？”还未听到苏尔肯的回应，便化作灵力的祭品。<li>全灭魔军，苏尔肯回身走向屏障，熟悉的面孔唯少了三人。村民根本不在意淹没在黑影里的悲伤，此起彼伏的是对白袍的哀求，“巫师大人，昨日你说苏尔肯就是当年遗漏的魔族，他已不属普赛克，我们全村恳请你不要停止屏障。”<li>苏尔肯闻言颤抖着伸出手骨，啊，果然无法穿过屏障，他突然明白魔军将领和独行说的种种。他一直都是对的，妻子终究难逃厄运。村民怎么看他又有什么所谓？他沉默，走向自己的家。白袍转头打断空气里的恐惧与好奇，“走吧，我们撤离到安全的地方。”<li>从此普赛克村落仅剩下一抹孤独而漆黑的背影。他守着一副尸体，远离活着的人"]],
            "nnyhzr瓦尔基里ol":["female","min",4,["nyhzr困兽之斗ol"],["ext:新英魂之刃/Newnnyhzr女武神.jpg","des:<img src='http://img6.91huo.cn/news.cos/images/buy/nws/header.jpg' width='330' height='180'><li>她是地上国王的女儿，她是被诸神选中的战士。<li>她的长矛由奥丁亲自赐下，神光闪烁。当那点光芒闪烁进敌人的眼眸，那便是向他们宣告死亡的来到。<li>她的容貌犹如初升的太阳，她的身姿轻盈曼妙。在吟游诗人的歌中，那些栖息在世界树的神鸟献出它们的羽毛，装点她的战袍。<li> “奥丁的侍女”，人们带着敬畏称呼着她。她的到来，不仅仅意味着战局的提前结束，也意味着神域的挑选开始。她将在战场上赐与勇敢的战亡者美妙的一吻，并引领他们带往英灵殿。在诸神的黄昏来临之前，需要完成的事情，还有很多。<li>她的名字是瓦尔基里，人们更愿意用另一个名字来形容她——“女武神”！"]],
            "knyhzr凯撒ol":["male","li",4,["nyhzr永恒之斩ol"],["ext:新英魂之刃/Newknyhzr凯撒大帝.jpg","des:<img src='http://img4.91huo.cn/news.cos/images/buy/ksdd/header.jpg' width='280' height='150'><li>以我一生之力，征服我所见的土地；我来，我见，我征服。” 大帝如是说，于是他执起永恒之剑，挥剑所向，万众臣服——这就是凯撒，我们的王！<li>从他降生之时，神明就挥舞霞光为他伴礼。智慧、优雅、勇气、天赋，这是大帝身上永不或缺的荣光！<li>他是神明宠爱的圣子，优雅的白狮圣兽塞乌斯从神山来到吾王的身边。它带来神明的圣谕：惟有大帝，才是这世间真正的王！再长的诗篇也无法叙述大帝的英勇，由他带领的军队，永远没有人能够阻挡。他所立下的决议，带领我们走向辉煌的顶端。<li>他是最强的勇士，他是神明之子。他为神圣的罗马帝国立下了永恒的基石，当一切结束时，他放弃了大帝的尊荣。<li>在神圣的霞光中，他与圣兽塞乌斯悄然离去，神山才是他即将前往的方向。他将是永远以神光笼罩罗马的神明——永恒之王，大帝凯撒，尤利乌斯！"]],
            "xnyhzr小乔ol":["female","zhi",3,["nyhzr仙荷甘露ol","nyhzr凤求凰ol"],["ext:新英魂之刃/Newxnyhzr小乔.jpg","des:<img src='http://img4.91huo.cn/news.cos/images/buy/xq/header.jpg' width='280' height='150'><li>当今大势，天下三分，英雄辈出。但凡英雄辈出之时，便少不了佳人斗艳，惹得祸水潮生。<li>其时，三国之间有江东二乔，美貌绝世。魏都霸主曹孟德曾慨叹：一愿扫平四海，以成帝业；一愿得江东二乔，置之铜雀台，以乐晚年，虽死无恨矣——仅以此言，便可知双姝绝色。<li>妙龄双姝各自嫁得了如意郎君。那小乔，嫁得是东吴美周郎。周郎者，东吴都督周瑜周公瑾是也，其人丰姿隽秀，胸有百万雄才。而小乔闭月羞花，心中亦自有锦绣。<li>二人琴瑟和鸣，夫妻和睦。但在这天下纷乱之时，周郎有天妒之才，岂能拘于小家，而是不顾大局？ 为随夫君左右，小乔褪下红妆换武装，紧随周郎左右，转战千里，坚强之处，不输男儿。<li>无奈相依相伴十一载，却终敌不过生老病死，一代英才周公瑾，年仅三十六而亡，自此独留红颜在人间。<li>只奈何小乔一代红颜，独留人间，终自黯然消色。正所谓红颜薄命，天妒英才也。"]],
            "dnyhzr狄娜ol":["female","zhi",3,["nyhzr火球术ol","nyhzr火之箭矢ol"],["ext:新英魂之刃/Newdnyhzr狄娜.jpg","des:<img src='http://img4.91huo.cn/news.cos/images/buy/zyhn/header.jpg' width='280' height='150'><li>对狄娜来说，幼年的记忆从来都是灰暗无光的。<li>蜷缩在房间的一角，紧紧捂着耳朵，但也不能遮蔽传入耳中的尖叫与咒骂。“嘭”的轻微声音后，狄娜在指尖燃起了一朵小小的火花，明亮而温暖。明明这么漂亮的东西，妈妈为什么不喜欢呢？ 狄娜苦笑了一下，还记得妈妈第一次见到的时候，似乎吓坏了，不然怎么连手上端的汤锅都跌落在地上？之后妈妈还歇斯底里的打翻了好多东西，尖叫着说狄娜是怪物，不应该存在于世，又突然哭着抱住狄娜要求她千万别告诉任何人。<li>如果不是遇到法利亚斯老师，如果不是老师解释了这种与生俱来能力的独特之处，甚至带狄娜前往首都的法师高塔学院学习的话，可能就不会有今天被称为“炽焰火女”的存在了吧？<li>集结的钟声打断了狄娜的思绪。又要出战了吗？看来没空思考人生的意义了呢。<li>指尖的火花熊熊燃烧了起来，那就让他们欣赏这辈子第一次也是最后一次的漫天火雨的盛况吧！"]],
            "snyhzr司马懿ol":["male","zhi",3,["nyhzr液态火ol","nyhzr元素转化ol"],["ext:新英魂之刃/Newsnyhzr司马懿.jpg","des:<img src='http://img2.plures.net/f55a/e5ab/272a/4c8f/05a8/2b9d/ef3c/87ce.jpg' width='280' height='150'><li>他生于乱世，被称为有“狼顾”之相。<li>他善于奇策，多次征伐有功，曾两次率大军成功对抗诸葛亮北伐。 他还曾率领大军征伐辽东公孙渊，采用声东击西之计，出其不意包围辽东主城襄平，一举击破并斩杀辽东公孙渊，平定辽东之乱。数十年来辽东问题终于彻底解决。<li>他能文能武，无论战阵谋略还是领兵打战，都胜人一筹。<li>去世后，依然深得好评，应了那句“少有奇节，聪明多大略，博学治闻，伏膺儒教”。"]],
            "jnyhzr金乌ol":["male","min",3,["nyhzr炎阳胄ol","nyhzr业火ol"],["ext:新英魂之刃/Newjnyhzr金乌.jpg","des:<img src='http://img4.18183.com/uploads/allimg/170208/42-1F20Q14429.jpg@q_80' width='280' height='180'><li>洪荒八年，天命自称弟臣，向他的哥哥，有穷氏的帝王后羿请命。<li>是年，十日并出，流民失所。一夜夜不停的击缶声，自后羿的宫里传出。缶声不停，天命就不眠。<li>七月，流火更炽。射日。<li>疆域。三千里繁华，三千里洪荒。后羿张弓，冰矢裂日，九只金乌堕为烈火。大地的伤口愈合，而天命却突然感到身后剧烈的灼痛。<li>金乌胁持了天命，逼迫后羿弃弓掷箭。天命依稀记得那时他喊，弟臣之命为轻，君请为社稷处。然而回应他的则是，帝王收弓……<li>烈火熏瞎后羿双目的时候，天命流泪了。他的绝痛之泪滴在烈焰上升起水雾，金乌哀嚎，凶日的火焰被天命牺牲自身精血所覆灭。<li>日灭了，天地各处黑暗。唯有天命的精魂还在发光。后羿不得已，只好用其精魂铸日，封其为世上最后的金乌。<li>千万年过去，天命金乌只是寂寞地在天空飞翔，日昼下，那如伤害般烙印在大地的阴影，有的只是那个叫后羿的帝王折箭，收弓的影像。"]],
            "anyhzr阿努比斯ol":["male","zhi",3,["nyhzr善恶天秤ol"],["ext:新英魂之刃/Newanyhzr阿努比斯.jpg","des:<img src='http://img1.91huo.cn/news.cos/images/buy/anbs/header.jpg' width='280' height='150'><li>死去之人的灵魂沉默地排着队，他们正要前往亡者之殿。 <li>巨大的金质天平置于神殿正中，阿努比斯用它来决定灵魂们的去向。<li>审判之秤的一边放置着正义女神玛特的羽毛，另一头则放置着亡者的心脏。如果心脏与羽毛重量相当，那么这个高尚的灵魂便能进入天堂，与众神永生。如果象征正义的羽毛那端承受不了心脏的罪恶而高高翘起，地狱则是恶毒灵魂的最终归宿。卑劣的灵魂将遭到恶魔吞噬，永无转生。<li>阿努比斯见过数之不尽的灵魂，有洁白无垢的善者，也有漆黑如墨的恶人；有充满好奇的少年，也有饱经沧桑的老人；有地位显赫的贵族，也有一贫如洗的乞丐……只是无论哪种灵魂，在他这里都将接受裁决之刻的来临。<li>这里是绝对公平之所。<li>这片寂静的世界便是阿努比斯的国度。"]],
            "xnyhzr玄武ol":["male","li",4,["nyhzr冰裂龟甲ol"],["ext:新英魂之刃/Newxnyhzr玄武.jpg","des:<img src='http://xx.5068.com/uploads/allimg/150601/1-150601161J0.jpg' width='280' height='150'><li>仁慈的圣兽玄武是北方诸民的守护神。在人民遭受南方蛮族与圣兽白虎的攻击时，玄武曾多次挺身而出，力保北地家园不受侵凌。<li>玄武的大义并没有换来北方诸民的满足。他们开始对玄武产生不满，因为玄武从不杀死南蛮人为他们报仇。这种不满逐渐扩大，最终变成了仇恨。<li>为了报复玄武，这些愚民在进献给他的供品中放入了极寒冰珠——那是白虎赠予北地愚民的魔物。<li>玄武并没有产生疑心。它吃下了冰珠，立刻身中剧毒。为了不让冰珠渗出的寒气伤及自己守护的人民，它毫不犹豫地飞上天空，最终摔成无数碎冰。<li>玄武死后，北方诸民被白虎所统治，终年沉溺于杀戮之中。玄武遗骸中唯一完整的龟甲·冰霜河图，也在战乱中遗落。"]],
            "gnyhzr甘道夫ol":["male","zhi",3,["nyhzr时光缓行ol","nyhzr魔能法球ol"],["ext:新英魂之刃/Newgnyhzr甘道夫.jpg","des:<img src='http://img6.91huo.cn/news.cos/images/buy/bpws/header.jpg' width='280' height='150'><li>第三纪元中期，那是个魔法与剑，正义与邪恶交战的年代。被镌刻在石碑上的是一个从黑暗中拯救了帝国的传奇。<li>在吟游诗人的歌谣里，那位传说中的巫师身着灰袍，他帮助矮人们与贪婪的巨龙进行战斗，并夺回了矮人们的家园故土。然而他并非古板的战斗狂人，他也热衷于利用魔法为异族朋友们举办的夏日盛典燃放起灿烂烟花。<li>最为人们津津乐道地便是他一手挑选并组织了那支勇者之队——他们经过漫长的跋涉后，除去了黑暗之王的力量来源。也是在那一次，他得到了众生万物之父的认可，披上了代表巫师之首的白袍。<li>如今，他游历诸国之间，行踪飘忽。但人们相信，只要危险来袭，他会再一次回到人们中间，将正义进行到底！"]],
            "snyhzr树精长老ol":["male","zhi",3,["nyhzr乌龙茶灵ol","nyhzr树灵爆发ol"],["ext:新英魂之刃/Newsnyhzr树精长老.jpg","des:<img src='http://old.3533.com/cache/picture/2017/03/10/20170310144651007.jpg' width='280' height='140'><li>平安时代，倭国国体动荡、人心不安，魔影纵横、怨灵交错，妖魔鬼怪不再藏身深山，而是屏气敛息，与人类同居于京城。<li>为了消除天、地、人、鬼间的矛盾，阴阳师们登上了历史的舞台。<li>道摩法师正是当时最富名望的阴阳师，他热衷茶道，更有恻隐之心，经常助百姓斩妖除魔。<li>某日，道摩法师救下一个东方茶商，获得茶商馈赠的乌龙朱砂壶。令人意想不到的是，乌龙朱砂壶竟然住着一个具有强大灵力的乌龙茶精。<li>得到乌龙茶精奉献的千年自然精华，道摩法师的道行一日千里。他能借助乌龙茶精的灵力从壶口喷出强大的术流击伤妖魔，还能化身为一棵神木治愈自己和朋友。<li>这个宝贝很快引起了“阴阳寮”的觊觎。他们谋划半年，终于集结五百名最精锐的阴阳师对道摩法师发起袭击。愤怒的道摩法师化身为乌龙神木，将“阴阳寮”成员屠戮殆尽。<li>杀戮过重的道摩法师在这一役后道心尽丧，看破世情，带着乌龙朱砂壶隐居海外，从此绝迹。"]],
            "tnyhzr泰坦ol":["male","li",4,["nyhzr大地护盾ol"],["ext:新英魂之刃/Newtnyhzr泰坦.jpg","des:<img src='http://img6.91huo.cn/news.cos/images/buy/ttjr/header.jpg' width='280' height='150'><li>记忆的深处覆盖着一层阴翳，挥之不去。出生之时，预言者吐露了不祥的未来——他与他的兄弟们，将成为弑父之人，恶名加身，以最悲惨的姿态成为众人之敌。<li>这条诅咒如影随形，在他的生命中贯穿始终。父亲毫不掩饰对他们的憎恶，甚至想将他们除之而后快，母亲则以大地之名藏匿了他们。东躲西藏，卑微存活，成为幼 年时的全部记忆。<li>——泰坦挥动手中重锤，似乎想将回忆驱逐出去。他的父亲，强大的天神乌拉诺斯高高在上，睥睨而立。不过，这并非什么值得庆贺的相逢。与其背负着诅咒苟且， 承担着无谓的罪名，不如用自己的手切断这种令人唾弃的关系！<li>血与烽烟成为此刻的全部色彩，力量的悬殊却未能磨灭他的斗志。他与身下的大地一般残破，然而只要还能再次战斗，他依旧不屈不饶！泰坦一次又一次站起，脊柱 始终挺得笔直。除非切下他的头颅，否则他便永远不会被打倒！"]],
            "snyhzr水元素ol":["male","zhi",4,["nyhzr多变之水ol"],["ext:新英魂之刃/Newsnyhzr水元素.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/sys/header.jpg' width='380' height='122'><li>它不知自己是何时诞生，风水火土四元素曾在一团混沌里相融又碰撞了无数年，直到天地初分，水元素随着狂风暴雨坠入深海，就这样在一片黑暗中沉眠。<li>当千万年后，火元素被人类祭司召唤而去，水元素也随之苏醒。水汽的视线无处不在，它望着暴烈的火焰就这样被解放桎梏，大地即将在火海中毁灭；它望着无计可施的祭司们只能再次开启召唤阵，呼唤自己的到来。<li>“帮助我们阻拦火元素吧！否则，人类即将灭亡！” 冰冷的水起初无动于衷。“地上的火焰与我无关。”它继续望着人类，望着他们伏地哀哭，从前只能在海中独自想象的权力的甜美这回真切地愉悦了它。<li>也许，这是一个契机，我可以得到这片大陆。水元素模糊地想，但我当然要做得比那堆毫无脑子的火更聪明……“我可以帮忙。”水元素高傲地发出了声音，“只要让我看到你们的诚意。<li>” 人类争先恐后地向水元素表示忠诚：“帮助我们吧！我愿奉你为主！” 于是海水翻涌，瞬间卷上陆地，将肆虐的烈焰熄灭。<li>水元素的野心终于得以释放，它要瞒骗人类，取代火元素，成为陆地的主宰！<li>狂啸的巨浪就此冲天而起，要在人类的欢呼之下，将那些地上之火全数吞没……"]],
            "snyhzr死神ol":["male","min",3,["nyhzr生命凋零ol","nyhzr无尽恐惧ol"],["ext:新英魂之刃/Newsnyhzr死神.jpg","des:<img src='http://img1.91huo.cn/news.cos/images/buy/ahss/header.jpg' width='280' height='150'><li>他矗立在大地上，举目所及皆为焦土。<li>这儿原本是数座繁华的邦城，人声鼎沸。<li>邦城内建造着华美恢宏的神庙。人们奉上丰盛的祭品，摆出虔诚的样子，手按圣卷，诵读誓言，希望得到神明的眷顾，好满足他们贪婪和渴求。<li>虚伪——这是暗黑死神对这事的评价——人类遮遮掩掩的故作姿态，小心翼翼的掩饰他们的欲望，仿佛这样就能把他们所追求的一切正当化。<li>人类真是太有趣了！他看着人类的厮杀想到。只需要小小的挑拨，便可让他们自相残杀，背弃之前许下的承诺。没有什么比让神明头痛更令人愉快了，暗黑死神舔舐着沾染在镰刀上的灵魂，心满意足地笑了起来……"]],
            "xnyhzr项羽ol":["male","min",4,["nyhzr鬼雄ol"],["ext:新英魂之刃/Newxnyhzr项羽.jpg","des:<img src='http://www.cncrk.com/up/1611/201611041557599760.jpg' width='280' height='150'><li>楚霸王项羽天生神力，使上古神兵“霸王天罡剑”，有万夫莫敌之勇。项羽舞剑杀敌之时，其妻虞姬便在阵后抚琴助威，琴音剑势交融，其势神鬼难敌。项羽巨剑所指，秦阵三军胆寒，不战自溃。<li>灭秦之后，楚汉相争。项羽兵败，被汉军围困垓下，兵少粮尽，四面楚歌，大势已去。虞姬毅然自刎，以断项羽后顾私情。项羽一声悲吼，戾火攻心，筋脉尽绝。然三魂七魄不肯散去，乃化作鬼雄，抱着虞姬尸身，单臂握剑，往汉军大营杀去。<li>不多时，已冲杀至汉王帐下，霸王天罡剑直指刘邦。汉王谋士张良惊骇欲绝，急中生智，拉刘邦跪下曰：“虞姬已死，霸王亦化鬼雄，在此无益，何不去往阴曹地府？”<li>汉王领三军齐拜曰：“恭送霸王！”鬼雄项羽魂躯一震，与虞姬尸身一道化作白烟，随风而散。"]],
            "bnyhzr八歧大蛇ol":["male","li",4,["nyhzr天从云ol"],["ext:新英魂之刃/Newbnyhzr八歧大蛇.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/bqds/header-v2.jpg' width='380' height='122'><li>八岐大蛇由世界的“绝对意志”幻化而成。它秉承万物意志，肩负让世界回归“无”的使命，也就是让世界回复到万年前一切新生、没有人类、没有污染和破坏的最自然的状态。<li>大蛇的意愿和人类的生存欲念毫无悬念地碰撞在一起。<li>出云神国“三神器”的持有者草、尺、乐率领三千阴阳师，于万川河上同大蛇展开激战。大蛇手执“天丛云剑”，以神技“八歧幻身斩”将阴阳师尽数杀死，三神器的持有者也身中剧毒，奄奄一息。<li>眼见大蛇胜利在望，草、尺、乐忽然联手，自爆三神器，撕裂空间造出黑洞，以牺牲整个世界为筹码，逼大蛇就范。<li>看着黑洞一点点吞噬世界，以净化和守护世界为目标的大蛇目眦欲裂。他毫不犹豫地跳入黑洞之中，燃烧自己的一切，将黑洞推离这个世界。<li>灾难过去，天日重现。天丛云剑从空中悠悠落下，掉进万川河的万顷波涛之中。"]],
            "knyhzr狂徒ol":["male","li",4,["nyhzr腐肉吸噬ol"],["ext:新英魂之刃/Newknyhzr狂徒.jpg","des:<img src='http://m1.073img.com/ued2016/yhzr/yxt/33_1.jpg' width='280' height='150'><li>在杀手这个行当，有个说法，如果你杀人过千，你的罪业就会在现世降临，报应不爽。大多数杀手都在第999单生意后金盆洗手。不过，并不是所有人都信这个邪。 <li>第一楼的杀手狂徒，就是这个不信邪的，他只相信他的屠刀“罪”和钩索“业”。<li>那一年的除夕夜，狂徒很兴奋。他的“业”钩从黑暗中窜出，如毒蛇般缠住兵马大元帅岳鹏，将他拉扯过来，沾满鲜血的“罪”刀干脆利落斩下头颅。“千人斩了！”狂屠浑身颤抖，“我是最强的……” <li>狂徒喝了很多酒。回到第一楼时，他突然感觉到浓郁如浆的杀气。不知何时，他已被无数黑衣人包围。喝下的酒在腐蚀内脏，狂屠的皮肉开始掉落。<li>他抽出“罪”刀和“业”钩，疯狂地厮杀着…… “第一楼杀手一夜间死绝，皆被刀斩钩戮，惨状骇人。千人斩狂徒化作肉泥，罪刀业钩不知去向。<li>”百晓生如是记载。"]],
            "ynyhzr杨戬ol":["male","min",3,["nyhzr三尖两刃戟ol","nyhzr通天法眼ol"],["ext:新英魂之刃/Newynyhzr杨戬.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/elsyj/header-v1.jpg' width='380' height='122'><li>不知道神仙为什么喜欢用山压人。那么多山，像座座墓碑，下面压着一个个曾经自由的灵魂。也许诸神以为山是永不崩塌的，但杨戬知道没有永远。沧海桑田，不过一瞬。<li>作为二郎神君、执法天君，杨戬一直戴着冷面具。他手执两刃三尖戟，身负九转玄功和七十三变，化身万千，所向无敌，为天庭和凡人扫荡邪魔妖道。<li>只是，额上的天眼，已经快五百年没睁开过了，或许是不愿看到妹妹杨婵、死党猴子被压在山下的样子，就像当年母亲被压一样。<li>杨戬反抗过，可惜败了。他被毁去肉身，只剩元神，还得继续听从天庭差遣。哮天犬是杨戬仅剩的伙伴了，这家伙总是仰头对着老天咆哮，也就是对着杨戬的舅舅咆哮。<li>灌江口小庙中，杨戬在等，等着猴子出来，一起把天捅个窟窿。"]],
            "mnyhzr米迦勒ol":["male","li",4,["nyhzr神圣审判ol","nyhzr圣光护盾ol"],["ext:新英魂之刃/Newmnyhzr米迦勒.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/dts/header.jpg?' width='280' height='150'><li>在凡人无法触及的高天之上，是属于神的领域，圣洁的天使在此巡弋，维护着尘世的公平与秩序。<li>同为诞生最早的天使，米迦勒和路西法拥有着其他天使无法比拟的勇气和力量，一个是光之君主，一个是拂晓之星，亲如兄弟的他们一同成为了神的左右手。<li>然而此刻，天界却被邪恶的阴影所笼罩，路西法背弃了天父，投入了魔鬼的怀抱，三分之一的天使随之堕落。只要两位最强大的天使联手，神也不是高不可攀……<li>但是，米迦勒拒绝了和路西法一同堕落。性情高傲的他无法原谅背弃了神和自己的路西法。<li>他吹响了天国的号角，战火燃遍广漠无垠的天宇。罪恶必须被无情地否定和毁灭，即使天使犯了罪，也应一视同仁。<li>如同所有歌谣中一样，正义最终战胜了邪恶，堕落者永远无法得到原谅，天上再也没有他们的位置。在神的授意下，米迦勒亲手将路西法投入无底的深渊。<li>光明与黑暗就此决裂，米迦勒成为了最耀眼最强大的天使长。与路西法及其手下的邪灵争战成为米迦勒背负的十字架——只要邪恶还在肆虐，米迦勒的战斗就不会停歇。"]],
            "dnyhzr电光侠ol":["male","min",3,["nyhzr移形换影ol","nyhzr电光火石ol"],["ext:新英魂之刃/Newdnyhzr电光侠.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/dgx/header.jpg' width='280' height='150'><li>23世纪，新纪元带给人们的并非光明。浓稠的黑暗成为世界的主色调。罪恶大行其道，正义瑟瑟发抖。人们祈求有一位英雄挺身而出，与邪恶力量殊死搏斗。<li>救世主就在这种时候出现。他不理会民众的示好，从不驻足停留。也许是神秘感始然，关于新英雄的消息潮水般涌来——街头小报借此狠狠发了笔横财。<li>邪恶力量对从天而降的劲敌束手无策，他们想尽方法试图找到他的弱点，不放过任何一丝细节。<li>渐渐的，英雄开始处于下风。一则流言甚嚣尘上——新英雄是使用药物产生变异的普通人。一旦能力失控，他很有可能成为比邪恶力量更可怕的人类公敌！<li>对英雄的欢呼转瞬变成冷言冷语的利刃。竟连“他是邪恶力量的幕后指使者”的意见也得到了不少认可。<li>邪恶力量再度席卷而来时，英雄并未出现。惶恐不安的人们又拾起敬畏之心，重新呼唤被他们称为“电光侠”的恩人。这次，他们的期望落空了……<li>不过，英雄的出现唤醒了一些人沉睡的正义！对抗邪恶的前线上出现了一群无畏的年轻人。他们视那位英雄为指引前行的明灯，以“电光侠”为名，誓将黑暗斩除，迎接黎明的未来！"]],
            "lnyhzr兰ol":["female","li",3,["nyhzr高速格林炮ol","nyhzr穿刺射击ol"],["ext:新英魂之刃/Newlnyhzr兰.jpg","des:<img src='http://img3.91huo.cn/news.cos/images/buy/hszj/header.jpg' width='380' height='122'><li>血腥味与硝烟味弥漫在空气中，幸存的士兵静默地收拾残局，天空飘落的细雪渐渐掩盖了焦土，好像刚才的激战从未存在。<li>兰依旧手握火神重炮，警惕地环视四周，直至收队的命令响起。不能放松，她对自己说，放松就意味着……生命的消逝。<li>作为队里的特殊战力，兰被称为“火神战姬”。她得到的瞩目与关注是许多战士所梦寐以求。<li>然而，这些不过是毫无用处的东西。如果可以的话，她愿意用现在的一切去交换曾经被她所轻视的生活。<li>自从局部战争开始以来，每天平淡的校园生活变成奢侈。叽叽喳喳的女生凑在一起笑闹的场景，也成为记忆中褪色的画面。每每从噩梦中惊醒，她都想到挚友们最后的样子。那过早凋零的生命时刻提醒着，她为自己的自大付出了怎样的代价。<li>现在，她用枪弹宣泄着心中的怒火和对敌人的恨意。只要生命不止，她将继续战斗下去，为了让其他人安享生活，不再承受这样的痛苦！"]],
            "dnyhzr大乔ol":["female","zhi",3,["nyhzr乱世听凤ol","nyhzr凤羽踏歌ol"],["ext:新英魂之刃/dnyhzr大乔.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/dq//header.jpg' width='340' height='122'><li>东汉建安四年，皖城告破，易主孙吴。春卷庐江郡皖，落英缤纷难掩满城战乱后的萧索。<li>两位将领模样的男子带着一队兵卒至东郊一处寓所，随行抬着八九个满载金银的大箱。箱落地，人入座，领头男子向家主拱手遥作一揖，语含笑意，“闻乔公二女皆为国色，今孙策前来提亲，乔公意下如何？”<li>后院深闺，大乔一边轻抚凤凰琴弦，一边听下人禀报前堂事态。生性娇俏的小乔早已按耐不住，抱着大乔的手臂轻晃，“阿姐，阿姐，难道你我要同侍一夫吗……”<li>“孙策颜姿俊美，却被称江东小霸王，怕是不识雅韵……”<li>“阿姐，这周将军的笛配我们的琴会不会很有意思……”大乔轻拍小乔的手，淡淡道，“你等下随我入堂，不要言语，一切交给阿姐便是。” <li>堂上，孙策直抒来意，乔公知无退路，却又踌躇难断。数十载，乔家为避战祸四处奔波，就是不愿二女卷入其中，奈何姊妹渐露倾城之色，名号传扬开去，终是逃不出离乱命数。看乔公迟迟不应，孙策有些不耐烦，周瑜见状开口，“乔公二女流离，若得吴侯做婿，不足为欢？”“欢不欢都被一语道破，周将军倒是比吴侯更懂我姐妹二人——”有人淡淡地道，声音若玉石，坠入冰潭中，连激起的水花，也是冷的。<li>孙策，周瑜纷纷回头看向厅门，围满前堂的士卒不知不觉散开，两女子一前一后，缓缓向这边走来。语者行于前，微扬着头，云髻高挽，点一枚凤羽盘于发间。她的身材高挑，眼角成匀称的丹凤，走动之际，金色凤羽眉心坠就有韵律地摇晃起来，衣裙飘逸，袖口迤逦自地面，裙尾长长地拖在身后。淡如水却又高贵成凤，像一只浴水凤凰，从天宫一步一步走进人间来，君临天下般俯视着周瑜，“那周将军，你怎么不提亲呢？莫不是因为阶下囚的身份而看不起大乔小乔？”周瑜觉察方才所言有失礼数，准备说些什么，大乔却并不理会，随即转向孙策，轻作揖，“吴侯莫怪，家父为难也是有所顾虑，”大乔把小乔拉到身边，“大小乔素来姐妹情深，但同侍一夫难免心生嫌隙，这是家父也是我二人都不愿看到的。”大乔看孙策若有所思，继续说道，“闻吴侯善待有才之士，与周将军更是情同手足，倒不如你二人双双提亲，两位才俊配两位佳人，兼顾姐妹之情与手足之义，岂不大全？”<li>“哈哈哈，好一个大全。公瑾啊，你今天撞上好运了。那——”孙策饶有兴致地看向大乔，“是你嫁予我呢，还是你妹妹嫁予我？”大乔不禁莞尔，笑入孙策躁动的内心，“吴侯逗乐了，我何时说过自己是阿姐了。小乔以为，这长幼有序，是自古的礼数，吴侯长于周将军，自当吴侯配阿姐，而我与周郎成双了。”<li>说罢，大乔将小乔往孙策身边拢了拢。孙策这下着急了，竟直呼不妥。小乔偷笑着投来目光，大乔只一眼对望，却让小乔感到心安，姐姐会一直保护她。<li>待亲事落定，孙策应了大乔善待乔家全府的请求，这大乔才重新介绍姐妹二人。孙策倒也不气不恼，笑看大乔，觉得这夫人着实看不透。很久以后孙策问大乔，当时若应下了长幼有序的配法，她将如何处之。“这说明夫君是个恪守礼数的人，则大事上言出必行。若辨明真身，我为大，夫君也依然要娶我。只是那时的你，选择了从心而行。”<li>说罢大乔回眸一笑，金色凤羽眉心坠熠熠生辉，宛若坠入人间的凤凰，晃得人眼迷离，晃得孙策好想问她，你的真心又是什么，是不是只为了帮小乔。却迟迟不敢开口。"]],
            "ynyhzr雅典娜ol":["female","zhi",3,["nyhzr战争惧刃ol","nyhzr圣光法球ol"],["ext:新英魂之刃/Newynyhzr雅典娜.jpg","des:<img src='http://img4.91huo.cn/news.cos/images/buy/ydn/header.jpg' width='280' height='150'><li>愤怒的时代结束了，在黎明尽头，诸神以犹疑的目光注视着天地中心的那扇混沌之门，那是异世界的入口，是战争的源头，是混合了信仰、破灭、黑暗、光明、绝望以及希望的所在。女神在那里放下希望信标，天空之风轻轻将历史翻过新的一页。<li>千年之后，上古时代的种种已化为发黄书页中记载的传说。人类在世界各地建立新的国家，繁衍生息。然而，随着时间的推移，原来平和温顺的人类似乎被拖入欲望的迷沼，贪婪、胆怯、卑劣、背诺……信仰缺失的人类犹如置身重重迷雾之中……<li>种种游离的、隐秘不定的迹象，将混沌之门这个早已埋没在历史尘埃中的地点重新提及。一些试图重新找寻本源的人站了出来。据说，他们得到了一位神祗的相助——那名神秘的女神有着传说一般的身世与容貌。人们被阻隔在这层传说之雾外，唯一可知的就是她有一个温柔的名字：雅典娜。"]],
            "xnyhzr西莫ol":["male","zhi",4,["nyhzr欲望灾火ol"],["ext:新英魂之刃/Newxnyhzr西莫.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/stsrm/header_v1.jpg' width='280' height='150'><li>也许是饥荒年代的一次捕食，食人魔这个名字便顽固地流传开来。那异乎寻常的外貌被添油加醋成为了食人的证明。为了清除可能的隐患因素，人类对食人魔族展开了大规模围剿，哪怕他们早已不将人类作为食物。<li>压倒性的战局令大批大批的食人魔沦为帝国的奴隶。要么毫无尊严的成为奴隶，要么成为人类狩猎的活靶。“比起战死而言，成为人类的奴隶只要听话至少衣食无忧”，这个想法一度成为食人魔族的共识。<li>生来便拥有两个脑袋的西莫很明显是个异类，无论是哪个方面。也许是两个脑袋的缘故，他对于自由的渴望比其他食人魔更加炽烈，当然，智慧与勇气也有双份。他巧妙地制造一起起收容所暴动，策划了一场又一场的游击战。人类花费了极大的精力来应付他精妙的战术却均以失败告终。食人魔族开始相信西莫将是带领他们走向光明的天选之子，是他们毕生追随的首领，与信仰。<li>然而西莫知道，为了确保族人能重新和平的生活在这片大地上，不再沦为奴隶，不再饱受战火，他将一直战斗下去，直到生命的最后一刻。"]],
            "cnyhzr丛林之子ol":["male","min",3,["nyhzr毁灭蛊箭ol","nyhzr生存本能ol"],["ext:新英魂之刃/Newcnyhzr丛林之子.jpg","des:<img src='http://img1.91huo.cn/news.cos/images/buy/clzz/header.jpg' width='280' height='150'><li>智慧之光并非只恩赐了文明，文明之外，人类仍可发现其它不同类别的知识。丛林之子便是其中之一，他们被称为“绿野中的守护”，对于自然的暴戾与温柔都有相当了解，他们并不完全依赖自然，而是与自然相融为一。<li>无法确定是否是炼金术师们首先发现了丛林之子，但在人类的历史遗迹中，我们随处可见他们留下的痕迹：海岛上不知名的巨石阵、金字塔下兽型的人面像，甚至还有决战之谷里难解的图腾柱。丛林之子使用来自自然但又超越自然的能量，他们从地母信仰中祈得祝福，为自由谱写誓言之歌。<li>丛林之子为森林带来了祝福。被其净化的不洁，化为可以滋润万物的雨水。也是从那时起，世界上出现了雨林。据说，常在雨林中行走的人可以听到时而传来的丛林之子的笑声……"]],
			"gnyhzr宫本武藏ol":["female","min",3,["nyhzr幻之分身ol","nyhzr千叶斩ol"],["ext:新英魂之刃/Newgnyhzr宫本武藏.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/gbwz/header.jpg' width='380' height='122'><li>黑夜深沉，参天宫殿伫立于阴影之中。传说中拥有巨大力量的天照宝珠就被魔王藏在这里。<li>女剑客静静潜伏在悬崖边上，隐藏在狐面下的冰冷双瞳远远向宫殿凝望。<li>几支巡逻队打着火把如往常一般在宫殿外巡视，她低下身子，轻巧地绕过他们潜入宫殿之中。阴森幽暗的建筑中遍布重重机关，稍一不慎就将死无葬身之地。上下摇摆的抡锤、瞬时淹没的流沙、地底渗出的剧毒、诡异的谜题之门……这些都难不倒这个美艳冷酷的女子。双刀在手，一路过关斩将。<li>暗夜中的潜伏者最终来到了她的终点——某个宫殿深处的密室，悄无声息地划开的机关门后，一片黑暗中的石台上，天照宝珠正在绽放光华。<li>目标就在眼前，她不由加快脚步，但突然觉察到什么又立即停下，双手交错反握刀柄，伏身露出戒备的神情。“真可惜，再往前一步，你就死了。”魔王鼓着掌，从黑暗中露出身形，嘴角扯出一道狰狞的笑。“重重关卡都被你闯过，真是精彩。宫本武藏，你果然不愧传说中的盛名……但你注定拿不到它，因为我会在你拿到之前毁掉它。”<li>“可惜我的目标不是它。”武藏冷冷一笑：“是你！”<li>刀光闪过，天照宝珠仍静静地光华四射，魔王还留存着讶异表情的人头已落地。<li>双刀入鞘，身形一晃，天照宝珠落入腰囊，而武藏，已重新隐入黑暗之中……"]],
			"lnyhzr鲁瓦ol":["male","li",4,["nyhzr地狱之躯ol"],["ext:新英魂之刃/Newlnyhzr鲁瓦.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/dyh/header_1.jpg' width='280' height='150'><li>在源生汤的沸池中，年轻的地狱火鲁瓦被遗忘者弗萨肯唤醒。弗萨肯将被遗忘者的邪力植入鲁瓦体内，使鲁瓦获得了强大的力量。但在最终改造完成前，他们被卷入了部落与联盟的战争。<li>杀戮是战争终结前人们唯一谈论的话题，在日复一日的厮杀中，地狱火鲁瓦小心地保护着他的主人。但鲁瓦的忠诚换来的常是弗萨肯的冷嘲热讽，因为年轻的鲁瓦不受教条的束缚，这对于习惯了经典的被遗忘者来说简直是无法忍受的。<li>战争的胶着持续了许久，久到他们已经习惯开始遗忘和平是什么样子的时候，一支林中响箭改变一切。利箭刺穿了弗萨肯的喉管，鲜血使狂放不羁的鲁瓦第一次尝到了失败与绝望的苦感。<li>他暴走了！地狱之火融化了思加嘉的身体，然而被遗忘者的邪力去穿透烈火包裹住鲁瓦，仿佛多年来一面讥讽一面守护。巨大的邪力使得鲁瓦的火焰变成了绿色。"]],
			"anyhzr阿瑞斯ol":["male","li",4,["nyhzr神圣对决ol"],["ext:新英魂之刃/Newanyhzr阿瑞斯.jpg","des:<img src='http://img3.91huo.cn/news.cos/images/buy/zsars/header_v2.jpg' width='380' height='122'><li>最骁勇悍战的战神阿瑞斯曾伴随鲜花从神后赫拉腹中诞生，他生来便象征着力量与权力，战斗就是他最大的爱好。<li>冥王哈迪斯经常邀请他一同前往人类的战场狩猎，热爱战斗的阿瑞斯欣然应允，于是冥王和战神一同驰骋于战场之上，神灵降临之处只有死亡与恐惧。雅典娜拦住阿瑞斯，向他吐露冥王的阴谋。哈迪斯需要扩充冥国的疆土，而阿瑞斯的战神之力就是他最好的助手，他将冥王看做好友，却不知道哈迪斯的内心只把他作为实现野心的工具与桥梁。阿瑞斯不相信雅典娜，于是女神大声斥责，命他看看人间的惨状。<li>仿佛梦幻泡影一朝破灭，雷电声声，冥王哈迪斯披着黑袍降临战场。而他猝不及防地面临的，正是狂怒的战神阿瑞斯全力一击！"]],
			"xnyhzr席璐达ol":["female","min",3,["nyhzr爆头ol","nyhzr黑桃暗杀ol"],["ext:新英魂之刃/Newxnyhzr席璐达.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/hthh/header-01.jpg' width='380' height='122'><li>黑桃皇后席璐达是疯狂博士最杰出的作品，柔滑似水的肌肤，精密机械构成的五脏六腑，令人胆怯的火炮力量，微型能量心脏——如此完美！不可思议的是，她还能产生自己的人格！<li>经过严酷训练，席璐达加入了“扑克特工组织”。执行任务时，她总是喜欢放一个霹雳焰火，让对手瞬间失明，看着他们像无头苍蝇般乱窜，再用火炮“福音风暴”轰碎他们。<li>然而，席璐达逐渐成型的性格却让她走向了组织的对立面。她无视组织的命令，肆意玩弄着对手，以至于损害到王国的利益。国王命令博士启动自毁程序，销毁这个失败品。<li>自毁程序启动了，席璐达的心脏开始碎裂。她用最后一丝力气引爆了埋在塔尔王宫和特工组织地下的炸弹。在轰鸣的倒塌声中，飞起无数绘着小丑脸的气球。"]],
			"znyhzr钟馗ol":["male","li",4,["nyhzr代天罚恶ol"],["ext:新英魂之刃/Newznyhzr钟馗.jpg","des:<img src='http://statics.juxia.com/uploadfile/content/2013/12/2013122316373646.jpg' width='280' height='200'><li>玄宗年间，鬼门关崩毁，致使鬼物横行阳间，荼毒百姓。<li>书生钟馗因机缘习得仙人法术，能画符捉鬼。钟馗嫉恶如仇，奈何人单力薄，救不了天下人，乃立志考取功名，借朝廷兵马驱除鬼物。<li>众鬼知钟馗赴京赶考，便设伏暗算。在四大鬼王围攻下，钟馗虽然逃出，却也被抓破颜面，变得狰狞丑陋。<li>金銮殿上，玄宗皇帝见钟馗貌丑，甚为不喜，一言斩断他的仕途。可怜钟馗仰天狂笑，以头碰柱，死于殿前。<li>钟馗魂归地府，凭高深道法得阎罗重用，赐地府至宝“朱砂判官笔”，扫荡群邪，判生死，断阴阳，历经三年，人鬼两界终得安宁。然而，钟馗却因功高震主，遭阎罗猜忌暗算，二魂七魄被打入九幽，不得超生。唯第三魂藏于朱砂判官笔中，逃出生天，流落在阴阳两界的夹缝之中。"]],
			"anyhzr阿波罗ol":["male","li",4,["nyhzr太阳之子ol"],["ext:新英魂之刃/Newanyhzr阿波罗.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/abl/header.jpg' width='280' height='150'><li>他是太阳的象征，他是光明的化身。他的战车是黄金打造而成，由四匹全身发出金光的骏马牵引。他的马车从天上飞驰而过时，带给人间以哺育新生的温暖。<li>他的宫殿在遥远的东方，大理石的廊柱装饰着黄金、宝石和象牙制成的浮雕。火神为宫殿的大门和四壁制作了精美绝伦的图画和雕像。时光之神和春夏秋冬四位季节之神环绕在他的周围，共同为人间带去丰收与希望。<li>这位宙斯之子永远精力充沛、不知疲倦、勇猛无双。歌者们弹着齐特拉琴颂扬他的丰功伟绩。传世的诸多英雄故事之中，斩杀巨蟒皮同无疑是流传最广，影响最为深远的。<li>为了寻找最适合的地点建立神示所，阿波罗几经挑选后抵达德尔斐。皮同——盘踞于此的妖蛇——自然不肯乖乖地让出栖息之处。无畏的阿波罗以超凡的实力宣告了自己对这块圣地的所有权。而阿波罗也在这里建立了举世闻名的德尔斐神示所。神庙门柱上镌刻的“认识你自己”历经数百朝代，直至今日也依然指引着人们前进的方向。"]],
			"hnyhzr花木兰ol":["female","li",3,["nyhzr所向披靡ol","nyhzr怒战八方ol"],["ext:新英魂之刃/Newhnyhzr花木兰.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/hml/header.jpg' width='380' height='122'><li>北方的游牧民族侵入边境，前线节节败退，军情紧急。朝廷号令男子尽数充军，花木兰不忍看着年迈的父亲再上战场，便女扮男装，投身军旅。<li>天下男儿无肝胆，何妨？看我红装变武装！<li>在军中，花木兰凭借自己的坚韧和勇气，通过了重重困难考验，成为了一员独当一面的战将。经过十年血战，花木兰和将士们终于将异族侵略者赶出了国土。战争结束后，木兰拒绝了皇帝的封赏，脱下铠甲，收起长枪，回到了暌违多年的故乡，过起了织绣缝裳的生活。<li>日子这样一天天过去，但木兰的心却始终无法彻底平静。因为她知道，战场上那般的烽火与豪情，一旦经历过，就无法忍受这平淡生活余烬一般的黯淡。看着逐渐蒙尘的长枪和铠甲，木兰紧紧握住了拳头……<li>当心中的火焰越烧越烈之时，她做了一个梦，梦到了一座巨大的祭坛在向她发出召唤，而在她眼前，仿佛再度出现了铁马金戈、战阵交锋的画面。<li>是时候了！她毅然拿起自己的长枪和盾牌，怀着满腔的慷慨与勇锐，向着未知的世界进发。<li>“万里赴戎机，关山度若飞。朔气传金柝，寒光照铁衣！”飒爽巾帼，豪气干云。木兰的传说仍在继续……"]],
			"xnyhzr西门飞雪ol":["male","min",4,["nyhzr追魂剑ol"],["ext:新英魂之刃/Newxnyhzr西门飞雪.jpg","des:<img src='http://img6.91huo.cn/news.cos/images/buy/xmcx/header.jpg' width='280' height='150'><li>二月初二，雪。<li>他早早的起床，取净水洁面，叠放整齐的白衣柔软合身。<li>剑已擦拭雪亮，他轻柔地抚摸剑身，犹如抚摸最心爱的女子。<li>桌上的簿子记着：“青州宋义威，擅八卦刀法，所使金环大背刀，刀背镶九金环，重二十三斤。于十一月劫杀定州宁氏，宁府上下四十八口无一幸免。<li>” 二月初四，雪。<li>他已经在雪中站立许久，久到眼睫毛已经沾满雪花。<li>宋义威喘着粗气，问道：“你我素不相识，只因我劫杀宁氏，你要为其报仇。但你并不认识宁氏？” “是的。”他面色宁静的答道，就像取人性命如同简单寒暄一般轻松。<li>“你千里而来杀我，究竟为何？”<li>“应该为之而已。”<li>话音落，风吹雪，宋义威面上还带着惊恐之情，他似乎还有什么话想说，但再也说不来。因为死人，是不会说话的。<li>西门飞雪吹落了剑上的血花。每当了结一件大事时，他就想喝酒。滚烫的，能让人从骨头里烧起来的，驱除寂寞的酒。<li>“世上还有什么事能使心再热起来？血再热起来？”看着手中的剑，西门陷入沉思……"]],
			"snyhzr孙悟空ol":["male","min",4,["nyhzr七十二变ol","nyhzr火眼金睛ol"],["ext:新英魂之刃/Newsnyhzr孙悟空.jpg","des:<img src='http://img4.91huo.cn/news.cos/images/buy/swk/header.jpg' width='280' height='150'><li>梦的尽头是一片水帘，波光粼粼地覆盖着黑暗中的一切。他伸出手想去触碰，但视线所聚合的光影以一种可怕的速度倾塌着，光明被急速地抽离，然后便是毁灭一切的风。他隐约听到一个声音：齐天大圣。<li>没错，那正是他的名字。男人笑了，他的笑有一种嘲弄的神色在里面，彷佛是想起了什么，他随手翻开旁边的书册，第五章：乱蟠桃大圣偷丹，反天宫诸神捉怪。这是一位文人所编撰的故事，在他看来却极其可笑。世人不了解那一战，他们称那是混乱的欢乐，但只有孙悟空明白那一战是雷霆的宣威，是对世人愚昧的挑战。乌云遮蔽了中土几千万年，霹雳一声乌云散了，而人们却称雷霆的制造者为疯子！<li>人是神的子民，但子民不应害怕他们的神，孙悟空微笑着，神应该害怕他们的子民。愚昧所建立的暴政绝非长治久安，子民有选择有尊严地生存下去的权利，而这，正是一切变革的开始！声音不断地自黑暗深处传来，齐天大圣……"]],
			"snyhzr斯巴达ol":["male","li",4,["nyhzr束缚搏击ol","nyhzr战火盾甲ol"],["ext:新英魂之刃/Newsnyhzr斯巴达.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/sbd/header.jpg' width='280' height='150'><li>战斗已经陷入胶着，空气中弥漫着死亡的气息。列奥尼达斯咒骂了一句，手中重剑劈倒一名企图从隘口侧面进攻的波斯士兵。他环顾四周，那些忠诚的勇士已经所剩无几。鲜血模糊了视线，他的身体也已经到达极限……<li>这场悬殊的战斗开始于三天前。最初，易守难攻的温泉关让波斯大军吃尽了苦头。然而一个无耻的奸细让希腊联军的努力化为乌有！背后突然出现的敌人令联军丢掉了所有优势。关键时刻，斯巴达人挺身而出！列奥尼达斯带领着三百名最勇敢的战士冲向波斯大军。<li>联军得以安然撤离，而斯巴达人的战斗才刚拉开序幕！<li>——公元前480年，温泉关战役，斯巴达人带着两万条波斯人的性命，在地狱中开怀畅饮。自此，“斯巴达勇士”之名成为后世每一位战士所追求的最高荣耀！"]],
			"dnyhzr黛西亚ol":["female","min",3,["nyhzr弹药填装ol","nyhzr高距炮弹ol"],["ext:新英魂之刃/dnyhzr黛西亚.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/sqs/header.jpg' width='380' height='122'><li>“黎明的曙光照在贞德焚身之地，美丽的少女已经不在……我们为追逐光明的光明而消弭黑暗的黑暗，求你使所有罪止于天下人间，求你使我们终将领受属天的平安。以上所求是靠你的子，我们的主天主、耶稣基督，他和你及圣神永生永王。阿们。”<li>这又是一次军事修会的行前祷告。<li>在圣女贞德被焚后，魔鬼们因忌惮军事修会势力庞大，继续操纵法兰西王室打压军事修会。不屈的教众们坚信感化不足以救世，几个主要成员行至各地散播武装抵御的种子，隐忍数十、数百年，以大大小小修道院为据点，酬征圣使。他们称听到了主的声音，将圣使奉为驱逐魔物的神职，他们的使命因为善良的意愿得以超越教条，为主所宽恕。<li>即使达蒂瓜尔修道院地处偏僻，也不得不顺从时势，被编入军事修会的行列中。祷告结束后，黛西亚就要着手准备自己第七次圣使任务。<li>回房，掩窗，轻拉纱帘，侧身打开床头摆放的暗纹皮箱，双手捧出金属组件，垫上棉布于桌面一字摆开，逐个擦拭。修道院收养的孤儿在庭院中嬉戏打闹，稚声透过纱帘传来，黛西亚仔细辨认每个声音，脑中同步着窗外的情节，不时莞尔。<li>这一道帘，隔开了两个世界。<li>黛西亚放下组件，拂拭手心的印记，那是她发愿出任圣使的第一个晚上，身体出现了圣痕，军事修会的主教命人,将黛西亚带往修道院地下的军火库。神奇的是，靠近一柄赤黑镶金的榴弹枪的时候，圣痕自愈，主教便把这圣燯配予西亚，口述着来自主的神职。如今圣燯一洗尘封，赤色光泽晃地人眼恍惚，圣痕在黛西亚的身体上却仍保持着铁的颜色，几经不散。<li>“黛西亚姐姐，黛西亚姐姐！”<li>视线重新聚焦，用绸布轻盖住圣燯的组件，黛西亚剥开纱帘，推窗。把头探出的瞬间，只觉得阳光很暖，“怎么啦？”<li>“黛西亚姐姐，昨天真的吃到了棉花糖!”不及窗口高的小男孩杰尔原地雀跃，“还有还有，星期三吃到了草莓蛋糕，星期一是布丁。梅洛、罗格夫他们都说黛西亚姐姐才是天主！”黛西亚伸手揉乱杰尔的发，微笑着说，“是天主让我实现你们的愿望的。”扎着麻花辫的小女孩梅洛闻言跑过来，“那是因为和黛西亚姐姐说想吃的，都能吃得到嘛！”院子里的孩童越聚越多，七嘴八舌地嘟囔甜食名称。黛西亚却一点都不觉得吵，整个人宛若泡在他们闪亮的眸光里接受洗礼，才真正觉得赎了罪。<li>“这次的酬劳么？”<li>“恩。”<li>当晚，黛西亚又一次将写满甜蜜愿望的手书递予主教,便出发了。她收起了往日的平和，眼神凌冽。光明正躲在她身后不谙世事，所以她必须与黑暗久久对峙，来犯者胆敢走近一尺，黛西亚便杀它一丈，容不得放肆。圣燯枪口隐隐喷喘的炎星，与一袭红黑修道服，撕裂了夜的静谧。承主之心，与魔为敌。<li>这是圣使黛西亚所信仰的圣意。"]],
			"dnyhzr妲己ol":["female","zhi",3,["nyhzr九命妖尾ol","nyhzr勾魂大法ol"],["ext:新英魂之刃/Newdnyhzr妲己.jpg","des:<img src='http://img4.91huo.cn/news.cos/images/buy/dj/header.jpg' width='280' height='150'><li>瘟疫。眼眸所注视的除了死亡，还有，饥饿。女娲将一幅充满着诱惑与光辉的画卷朝前展开，小狐女的眼前掠过王国三千里繁华鼎盛的疆土，在鲜花路面的尽头，王在等她。接受命运的安排，她就可以成为世间最强帝王的王妃。<li>十年一晃，十年倾城。当初的狐女业已成为商纣最挚爱的王妃。人们叫她妲己，对她的美貌顶礼膜拜，在王国纵驰的驿道上，随处可见俗人对她的颂扬。<li>但她自己呢？她在帘幕后书空咄咄的那些年，心里一直念叨的难道不是那个叫伯邑考的聪明男子么？但她毕竟还是错过了什么。武王姬发破城的时候，她有一种摇摇欲坠的破败感，像是自己的无极塌了。长生如梦，一切终究抵不过命运的嘲弄。兵火燃尽的时候，妲己醒来。<li>女娲在等弟子的求情，但这一次她看到了不一样的光——妲己向女娲俯身下拜，然后朝着西岐的方向飞去。她不确定如何才叫爱，她只是忽然明白了，连无极都无法洗去的思念，修行又怎么能够呢……"]],
			"knyhzr卡柯ol":["male","min",4,["nyhzr宿敌之剑ol"],["ext:新英魂之刃/Newknyhzr卡柯.jpg","des:<img src='http://n.7k7kimg.cn/2016/0806/1470465667373.jpg' width='280' height='150'><li>他曾是波斯帝国高贵的王子殿下，被称为太阳之子—他那金色的短发就如他的性格一般阳光璀璨。<li>可当权谋的阴影将他笼罩，面对至亲王叔的背叛与毒杀，再璀璨的金色也会染上复仇的暗光。仅仅是一夜之间，他失去了所有的亲人、他的家园、他爱慕的女子……以及一切，而他唯一收获的，就只有仇恨。但失去权势的王子殿下，又能用怎样的手段杀死那个已经坐上至高王座的仇人呢？<li>于是，当冥府之神阿努比斯现身时，他没有丝毫犹豫地签下了代表死亡的契约。冥神的力量在他的体内充斥，他终于彻底沦为复仇的傀儡。当他手持复仇双刃割下王叔的头颅，泪水终于无可抑制的从他的眼角滑落——财富、权势和贪婪，以及最后的仇恨，让他真正的一无所有。<li>对于生命，他还有什么可以贪恋的呢？当他手握王叔的头颅，迎来冥神阿努比斯时，唯一怀念的，就是太阳光辉笼罩下亲人温柔的回望。"]],
			"anyhzr艾薇ol":["female","min",3,["nyhzr追袭ol","nyhzr射月ol"],["ext:新英魂之刃/Newanyhzr艾薇.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/ayls/header.jpg' width='280' height='150'><li>艾薇是暗月森林最美丽的精灵。可是，正是这份美丽，引来了大主祭的垂涎。为了摆脱纠缠，艾薇决定成为法定不得婚嫁的皇室神射手。<li>经过激烈的角逐，她得到精灵女王的认可，成功入选，甚至获得了专属于女性精灵射手的荣耀之名——神箭哲琴。<li>大主祭的美梦成了泡影。恼羞成怒的他决心毁掉这件自己得不到的珍宝。他勾结恶魔军团，在艾薇前往接受封赐的路上设伏偷袭。 艾薇的伙伴们在第一轮箭雨下死伤殆尽。<li>满怀悲愤的艾薇退入密林，用她冰冷的箭矢收割着恶魔的性命。企图逃走的大主祭被远远射来的一只大箭钉在树上，随后被密集的箭岚射成了蜂窝。<li>当援军赶到时，艾薇已经力竭身亡，藤弓流月静静地躺在她的脚边，她的四周是数千恶魔的尸首。"]],
			"fnyhzr福娃ol":["female","zhi",3,["nyhzr连年有余ol","nyhzr定时爆竹ol"],["ext:新英魂之刃/Newfnyhzr福娃.jpg","des:"]],
			"gnyhzr宫本武藏SkinC1ol":["female","min",3,["nyhzr隐匿·胧ol","nyhzr千叶斩ol"],["ext:新英魂之刃/NewPifunyhzr黑暗中的剑客1.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/gbwz/header.jpg' width='380' height='122'><li>黑夜深沉，参天宫殿伫立于阴影之中。传说中拥有巨大力量的天照宝珠就被魔王藏在这里。<li>女剑客静静潜伏在悬崖边上，隐藏在狐面下的冰冷双瞳远远向宫殿凝望。<li>几支巡逻队打着火把如往常一般在宫殿外巡视，她低下身子，轻巧地绕过他们潜入宫殿之中。阴森幽暗的建筑中遍布重重机关，稍一不慎就将死无葬身之地。上下摇摆的抡锤、瞬时淹没的流沙、地底渗出的剧毒、诡异的谜题之门……这些都难不倒这个美艳冷酷的女子。双刀在手，一路过关斩将。<li>暗夜中的潜伏者最终来到了她的终点——某个宫殿深处的密室，悄无声息地划开的机关门后，一片黑暗中的石台上，天照宝珠正在绽放光华。<li>目标就在眼前，她不由加快脚步，但突然觉察到什么又立即停下，双手交错反握刀柄，伏身露出戒备的神情。“真可惜，再往前一步，你就死了。”魔王鼓着掌，从黑暗中露出身形，嘴角扯出一道狰狞的笑。“重重关卡都被你闯过，真是精彩。宫本武藏，你果然不愧传说中的盛名……但你注定拿不到它，因为我会在你拿到之前毁掉它。”<li>“可惜我的目标不是它。”武藏冷冷一笑：“是你！”<li>刀光闪过，天照宝珠仍静静地光华四射，魔王还留存着讶异表情的人头已落地。<li>双刀入鞘，身形一晃，天照宝珠落入腰囊，而武藏，已重新隐入黑暗之中……"]],
			"gnyhzr宫本武藏SkinC2ol":["female","min",4,["nyhzr幕府利刃ol","nyhzr千叶斩ol"],["ext:新英魂之刃/Pifunyhzr黑暗中的剑客2.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/gbwz/header.jpg' width='380' height='122'><li>黑夜深沉，参天宫殿伫立于阴影之中。传说中拥有巨大力量的天照宝珠就被魔王藏在这里。<li>女剑客静静潜伏在悬崖边上，隐藏在狐面下的冰冷双瞳远远向宫殿凝望。<li>几支巡逻队打着火把如往常一般在宫殿外巡视，她低下身子，轻巧地绕过他们潜入宫殿之中。阴森幽暗的建筑中遍布重重机关，稍一不慎就将死无葬身之地。上下摇摆的抡锤、瞬时淹没的流沙、地底渗出的剧毒、诡异的谜题之门……这些都难不倒这个美艳冷酷的女子。双刀在手，一路过关斩将。<li>暗夜中的潜伏者最终来到了她的终点——某个宫殿深处的密室，悄无声息地划开的机关门后，一片黑暗中的石台上，天照宝珠正在绽放光华。<li>目标就在眼前，她不由加快脚步，但突然觉察到什么又立即停下，双手交错反握刀柄，伏身露出戒备的神情。“真可惜，再往前一步，你就死了。”魔王鼓着掌，从黑暗中露出身形，嘴角扯出一道狰狞的笑。“重重关卡都被你闯过，真是精彩。宫本武藏，你果然不愧传说中的盛名……但你注定拿不到它，因为我会在你拿到之前毁掉它。”<li>“可惜我的目标不是它。”武藏冷冷一笑：“是你！”<li>刀光闪过，天照宝珠仍静静地光华四射，魔王还留存着讶异表情的人头已落地。<li>双刀入鞘，身形一晃，天照宝珠落入腰囊，而武藏，已重新隐入黑暗之中……"]],
			"gnyhzr宫本武藏SkinC3ol":["female","min",4,["nyhzr颠覆之海ol","nyhzr千叶斩ol"],["ext:新英魂之刃/NewPifunyhzr黑暗中的剑客3.jpg","des:<img src='http://img2.91huo.cn/news.cos/images/buy/gbwz/header.jpg' width='380' height='122'><li>黑夜深沉，参天宫殿伫立于阴影之中。传说中拥有巨大力量的天照宝珠就被魔王藏在这里。<li>女剑客静静潜伏在悬崖边上，隐藏在狐面下的冰冷双瞳远远向宫殿凝望。<li>几支巡逻队打着火把如往常一般在宫殿外巡视，她低下身子，轻巧地绕过他们潜入宫殿之中。阴森幽暗的建筑中遍布重重机关，稍一不慎就将死无葬身之地。上下摇摆的抡锤、瞬时淹没的流沙、地底渗出的剧毒、诡异的谜题之门……这些都难不倒这个美艳冷酷的女子。双刀在手，一路过关斩将。<li>暗夜中的潜伏者最终来到了她的终点——某个宫殿深处的密室，悄无声息地划开的机关门后，一片黑暗中的石台上，天照宝珠正在绽放光华。<li>目标就在眼前，她不由加快脚步，但突然觉察到什么又立即停下，双手交错反握刀柄，伏身露出戒备的神情。“真可惜，再往前一步，你就死了。”魔王鼓着掌，从黑暗中露出身形，嘴角扯出一道狰狞的笑。“重重关卡都被你闯过，真是精彩。宫本武藏，你果然不愧传说中的盛名……但你注定拿不到它，因为我会在你拿到之前毁掉它。”<li>“可惜我的目标不是它。”武藏冷冷一笑：“是你！”<li>刀光闪过，天照宝珠仍静静地光华四射，魔王还留存着讶异表情的人头已落地。<li>双刀入鞘，身形一晃，天照宝珠落入腰囊，而武藏，已重新隐入黑暗之中……"]],
			"hnyhzr后羿SkinC3ol":["male","min",4,["nyhzr银箭ol","nyhzr逐阳之弓ol"],["ext:新英魂之刃/Pifunyhzr射日英雄3.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/hy/header.jpg' width='280' height='150'><li>后羿环顾着四周，目力可及之处，只有龟裂的大地。匍匐在他脚下的老妪已经被灼热的太阳晒脱了水分，恍惚间就像一段焦枯树干。 <li>天空中的太阳们依旧嚣张地散发着全部的热量。<li>是的，太阳们。<li>它们是天帝的儿子，每日有一人化身为太阳穿过天空，撒下光热，哺育世间万物。然而，周而复始的日子令它们觉得厌烦。于是，再一个黎明到来时，它们一起出现在天空中， <li>太阳们散发出的热量烤焦了大地，树木庄稼化为灰烬，人间瞬时化为炼狱…… <li>不能再这样了，总得有个人站出来，帮助大家脱离苦海。<li>后羿回过神来，他按了按腰间的箭囊，那是最后的希望……不能再等待了！他从肩上取下那张红色的弓，抽出了箭矢。 <li>满弓！射出！ <li>奇迹出现了！骄横的太阳纷纷坠落，当第九个太阳落下之时，世界再度恢复了原貌。 <li>人们铭记着他的威能，自此，“神射手”之名名垂千古！"]],
			"hnyhzr后羿SkinC5ol":["male","min",4,["nyhzr黄金之翼ol","nyhzr逐阳之弓ol1"],["ext:新英魂之刃/NewPifunyhzr射日英雄5.jpg","des:<img src='http://img5.91huo.cn/news.cos/images/buy/hy/header.jpg' width='280' height='150'><li>后羿环顾着四周，目力可及之处，只有龟裂的大地。匍匐在他脚下的老妪已经被灼热的太阳晒脱了水分，恍惚间就像一段焦枯树干。 <li>天空中的太阳们依旧嚣张地散发着全部的热量。<li>是的，太阳们。<li>它们是天帝的儿子，每日有一人化身为太阳穿过天空，撒下光热，哺育世间万物。然而，周而复始的日子令它们觉得厌烦。于是，再一个黎明到来时，它们一起出现在天空中， <li>太阳们散发出的热量烤焦了大地，树木庄稼化为灰烬，人间瞬时化为炼狱…… <li>不能再这样了，总得有个人站出来，帮助大家脱离苦海。<li>后羿回过神来，他按了按腰间的箭囊，那是最后的希望……不能再等待了！他从肩上取下那张红色的弓，抽出了箭矢。 <li>满弓！射出！ <li>奇迹出现了！骄横的太阳纷纷坠落，当第九个太阳落下之时，世界再度恢复了原貌。 <li>人们铭记着他的威能，自此，“神射手”之名名垂千古！"]],
					},
                    skill:{
            "nyhzr仙灵伙伴ol":{
                nobracket:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
                    if(player.storage.nyhzr仙灵伙伴ol==undefined) player.storage.nyhzr仙灵伙伴ol=0;
                    player.markSkill('nyhzr仙灵伙伴ol');
                    game.log(player,'召唤一只妖精皮皮');
					game.broadcastAll(function(player){
						player.marks.nyhzr仙灵伙伴ol.setBackgroundImage('extension/新英魂之刃/nyhzr皮皮.jpg');
						player.storage.nyhzr仙灵伙伴ol+=1;
						player.syncStorage('nyhzr仙灵伙伴ol');
					},player);
                },
                intro:{
                    content:function (storage){
                        return '妖精皮皮为你作战！'+'<br>当前有'+storage+'只妖精皮皮'
                    },
                },
            },
            "nyhzr迷藏印记ol":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
                    return player.num('h')>=1&&player.storage.nyhzr仙灵伙伴ol>=2;
                },
                content:function (){
                    player.storage.nyhzr仙灵伙伴ol-=2;
                    player.syncStorage('nyhzr仙灵伙伴ol');
                    game.log(player,'躲避了对方的攻击');
                    if (game.players.length<4){
                        player.chooseToDiscard(1,'h',true);
                    };
                    trigger.num--;
                },
            },
            "nyhzr恐惧镰刀ol":{
                nobracket:true,
                group:["nyhzr恐惧镰刀ol_gainMark","nyhzr恐惧镰刀ol_Triggera"],
                subSkill:{
                    gainMark:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
                            if(player.storage.nyhzr恐惧镰刀ol_gainMark==undefined) player.storage.nyhzr恐惧镰刀ol_gainMark=0;
                            player.markSkill('nyhzr恐惧镰刀ol_gainMark');
                            player.storage.nyhzr恐惧镰刀ol_gainMark+=1;
                            player.syncStorage('nyhzr恐惧镰刀ol_gainMark');
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
                            return player.storage.nyhzr恐惧镰刀ol_gainMark>=3;
                        },
                        forced:true,
                        content:function (){
                            player.storage.nyhzr恐惧镰刀ol_gainMark=0;
                            player.syncStorage('nyhzr恐惧镰刀ol_gainMark');
                            trigger.player.turnOver();
                        },
                    },
                },
            },
            "nyhzr恐惧结界ol":{
                nobracket:true,
                unique:true,
                global:"nyhzr恐惧ol",
            },
            "nyhzr恐惧ol":{
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
            "nyhzr龙人血脉ol":{
nobracket:true,
audio:"ext:新英魂之刃:1",
intro:{
content:function (storage){
return '已激活血脉数量：'+storage;
},
},
init:function (player){
player.storage.nyhzr龙人血脉ol=0;
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
if(player.storage.nyhzr龙人血脉ol==undefined) player.storage.nyhzr龙人血脉ol=0;
setTimeout(function(){
player.useSkill('nyhzr龙人血脉ol');
player.storage.nyhzr龙人血脉ol+=30;
player.syncStorage('nyhzr龙人血脉ol');
},60000);
'step 2'
if(player.storage.nyhzr龙人血脉ol==30){
player.logSkill('nyhzr龙人血脉ol');
player.gainMaxHp();
player.recover();
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉ol==90){
player.logSkill('nyhzr龙人血脉ol');
player.draw(2);
game.log(player,'血脉觉醒');
}if(player.storage.nyhzr龙人血脉ol==150){
player.logSkill('nyhzr龙人血脉ol');
player.addSkill('nyhzr龙人血脉ol_1');
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉ol==240){
player.logSkill('nyhzr龙人血脉ol');
player.addSkill('nyhzr龙人血脉ol_2');
game.log(player,'血脉觉醒');
}
if(player.storage.nyhzr龙人血脉ol==300){
player.logSkill('nyhzr龙人血脉ol');
player.addSkill('nyhzr龙人血脉ol_3');
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
            "nyhzr女皇神威ol":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                enable:"phaseUse",
                content:function (){
					game.log(player,'释放神威');
                    player.addTempSkill('nyhzr神威ol',{player:'phaseEnd'});
                    player.removeSkill('nyhzr女皇神威ol');
                },
                ai:{
                    order:100,
                    result:{
                        player:function (player){
                            return  player.num('h','sha');
                        },
                    },
                },
            },
            "nyhzr神威ol":{
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
            "rnyhzr幽影之蜕ol":{
                nobracket:true,
                marktext:"人",
                intro:{},
                mark:true,
                trigger:{
                    player:"damageAfter",
                },
                content:function (){
					game.log(player,'转化蜘蛛形态');
                    player.addSkill('znyhzr幽影之蜕ol');
                    player.addSkill('nyhzr蛛壳硬化ol');
                    player.removeSkill('rnyhzr幽影之蜕ol');
                    player.removeSkill('nyhzr女皇神威ol');
                },
            },
            "znyhzr幽影之蜕ol":{
                nobracket:true,
                marktext:"蛛",
                intro:{},
                mark:true,
                trigger:{
                    player:"damageAfter",
                },
                content:function (){
					game.log(player,'转化人类形态');
                    player.addSkill('rnyhzr幽影之蜕ol');
                    player.addSkill('nyhzr女皇神威ol');
                    player.removeSkill('znyhzr幽影之蜕ol');
                    player.removeSkill('nyhzr蛛壳硬化ol');
                },
            },
            "nyhzr蛛壳硬化ol":{
                nobracket:true,
                enable:"phaseUse",
                content:function (){
                    game.log(player,'硬化了自己的壳');
                    player.addSkill('nyhzr硬化ol');
                    player.removeSkill('nyhzr蛛壳硬化ol');
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
            "nyhzr硬化ol":{
                audio:"ext:新英魂之刃:1",
                marktext:"硬",
                intro:{},
                mark:true,
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                content:function (){
                    player.removeSkill('nyhzr硬化ol');
					game.log('硬化的蛛壳使',player,'免疫了攻击');
                    trigger.untrigger();
                    trigger.finish();
                },
            },
            "nyhzr血虐暴风ol":{
                nobracket:true,
                audio:"ext:新英魂之刃:1",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
                    return player.hp==0||event.player.hp==0;
                },
                content:function (){
                    if (trigger.player.hp==0){
                        player.gainMaxHp();
                    };
                    if (player.hp==0){
                        trigger.player.loseHp();
                    };
                },
            },
            "nyhzr歃血为神ol":{
                nobracket:true,
                audio:"ext:新英魂之刃:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    return player.num('h')>0;
                },
                content:function (){
					"step 0"
					player.chooseControl(["弃牌恢复体力","将现有体力转化为护盾值"]).ai=function(){
						if(player.num('h')>1) return '弃牌恢复体力';
					};
					"step 1"
					if (result.control=='弃牌恢复体力'){
						player.chooseToDiscard(1,'h',true);
						player.recover();
						if (player.hp==player.maxHp&&player.hasSkill('nyhzr血虐暴风ol')){
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
            "nyhzr燎火之箭ol":{
                nobracket:true,
                trigger:{
                    source:"damageBegin",
                },
				forced:true,
                content:function (){
					if(player.hasSkill('nyhzr银箭ol')){
						trigger.nature='thunder';
					}else{
                        trigger.nature='fire';
					}
                    trigger.player.discard(trigger.player.get('e'));
                },
            },
            "nyhzr穿云箭ol":{
                nobracket:true,
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
                        if(arg&&arg.name=='sha') return true;
                        return false;
                    },
                },
			},
            "nyhzr逐阳之弓ol":{
                nobracket:true,
                audio:"ext:新英魂之刃:2",
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
				check:function (event,player){
					return ai.get.attitude(player,event.target)<0;
				},
				content:function (){
					"step 0"
					player.chooseControl(["穿云箭","燎火之箭"]).ai=function(){
						if(player.hasSkill('nyhzr银箭ol')) return '燎火之箭';
						return '穿云箭';
					};
					"step 1"
					if (result.control=='穿云箭'){
						player.addTempSkill('nyhzr穿云箭ol',{player:'useCardAfter'});
						game.log(player,'将穿云箭上弦');
					};
					if (result.control=='燎火之箭'){
						player.addTempSkill('nyhzr燎火之箭ol',{player:'useCardAfter'});
						game.log(player,'将燎火之箭上弦');
					};
                },
			},
			"nyhzr颠倒灵魂ol":{
				nobracket:true,
				group:["nyhzr颠倒灵魂ol_draw","nyhzr颠倒灵魂ol_discard"],
				subSkill:{
					draw:{
						trigger:{
							player:"drawBegin",
						},
                        filter:function (event,player){
							return ui.discardPile.childNodes.length>=event.num;
						},
						forced:true,
						content:function (){
							"step 0"
							trigger.untrigger();
							trigger.finish();
							var cards=[];
							for(var i=0;i<ui.discardPile.childNodes.length;i++){
								cards.push(ui.discardPile.childNodes[i]);
							}
							player.chooseCardButton(cards,'选择卡牌获得之',trigger.num,true).ai=function(button){return 1};
							"step 1"
							if(result.bool){
								for(var i=0;i<result.links.length;i++){
									player.gain(result.links[i]);
									player.$gain2(result.links[i]);
									game.log(player,'获得了',result.links[i]);
									if(result.links[i].name=='wuzhong'||result.links[i].name=='zengbin'){
										player.chooseToDiscard(1,'h',true);
									};
								};
							}else{
								player.draw(trigger.num);
							};
						},
					},
					discard:{
						trigger:{
							player:"discardBegin",
						},
						forced:true,
						content:function (){
							trigger.untrigger();
							trigger.finish();
							for(var i=0;i<trigger.cards.length;i++){
								ui.cardPile.insertBefore(game.createCard(trigger.cards[i]),ui.cardPile.firstChild);
								game.log(player,'将',trigger.cards[i],'置于牌堆顶');
							};
							player.lose(trigger.cards,ui.special);
							player.$throw(trigger.cards);
						},
					},
				},
			},
            "nyhzr困兽之斗ol":{
				nobracket:true,
                audio:"ext:新英魂之刃:1",
                trigger:{
                    player:"phaseEnd",
                },
				frequent:true,
                content:function (){
					'step 0'
                    player.storage.nyhzrhorse=0;
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i]!=player){
                            if(game.players[i].get('e','3')){
								player.storage.nyhzrhorse++;
								game.players[i].discard(game.players[i].get('e','3'));
							};
                            if(game.players[i].get('e','4')){
								player.storage.nyhzrhorse++;
								game.players[i].discard(game.players[i].get('e','4'));
							};
                        };
                    };
					if(player.storage.nyhzrhorse>0) player.chooseTarget('选择使用【南蛮入侵】的目标',function(card,player,target){return target!=player;}).ai=function(target){return -ai.get.attitude(player,target)};
					'step 1'
                    if(result.bool){
                        for(var j=0;j<player.storage.nyhzrhorse;j++){
	                        player.useCard({name:'nanman'},result.targets[0]);
                        };
                    }else{
						event.finish();
                    };
                },
                ai:{
                    expose:0.1,
                },
            },
            "nyhzr永恒之斩ol":{
				nobracket:true,
                audio:"ext:新英魂之刃:1",
                init:function (player){
                    for(var i=0;i<game.players.length;i++){
                        game.players[i].storage.nyhzr永恒之斩ol=0;
                    }
                },
				global:"nyhzr永恒之斩ol_1",
                subSkill:{
                    1:{
                        mod:{
                            maxHandcard:function (player,num){
								if(player.storage.nyhzr永恒之斩ol>0) return num-player.storage.nyhzr永恒之斩ol;
                                return num;
                            },
                        },
						trigger:{
							player:'recoverAfter'
						},
						forced:true,
						filter:function (event,player){
							return player.storage.nyhzr永恒之斩ol>0;
						},
						content:function (){
							player.storage.nyhzr永恒之斩ol--;
							game.log(player,'的手牌上限+1');
						},
					},
                },
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function (){
                    if(trigger.player.hp==trigger.player.maxHp){
						trigger.untrigger();
						trigger.finish();
						trigger.player.loseMaxHp();
                    }else{
						trigger.player.storage.nyhzr永恒之斩ol++;
						game.log(trigger.player,'的手牌上限-1');
					};
                },
            },
            "nyhzr仙荷甘露ol":{
				nobracket:true,
                audio:"ext:新英魂之刃:1",
				enable:'phaseUse',
				usable:1,
				filterCard:function(card){
					var type=get.type(card);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.type(ui.selected.cards[i])==type) return false;
					};
					return true;
				},
				complexCard:true,
				selectCard:[1,Infinity],
				selectTarget:-1,
				filterTarget:true,
				line:'thunder',
				check:function(card){
					return 6-ai.get.value(card);
				},
				content:function(){
					target.draw(cards.length);
					if(cards.length>=2&&player.storage.nyhzr凤求凰ol!=0){
						player.storage.nyhzr凤求凰ol=0;
						player.recover();
					};
				},
				ai:{
					order:2,
					result:{
						player:function(player){
							if(player.hp!=player.maxHp&&player.storage.nyhzr凤求凰ol!=0) return 1;
							return 0;
						}
					},
					threaten:0.5
				},
			},
            "nyhzr凤求凰ol":{
				nobracket:true,
                audio:"ext:新英魂之刃:1",
				marktext:"凤",
                intro:{
                    content:function (storage){
                        if(storage==0){
							return '已解除封印'
						}else{
							return '未解除封印'
						};
                    },
                },
				mark:true,
				trigger:{
					player:'chooseToRespondBegin'
				},
				direct:true,
				unique:true,
				filter:function(event,player){
					if(event.responded) return false;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player&&game.players[i].num('h')){
							return player.storage.nyhzr凤求凰ol==0;
						};
					};
					return false;
				},
				content:function(){
					"step 0"
					player.chooseTarget(function(card,player,target){return player!=target&&target.num('h')},'请选择【凤求凰】的目标').ai=function(target){
						var att=ai.get.attitude(player,target)+1;
						if(target.num('h','shan')||target.num('h','sha')){
							att*10;
						};
						return -att;
					};
					"step 1"
					if(result.bool){
						event.target=result.targets[0];
						event.goto(2);
					}else{
						event.finish();
					};
					"step 2"
					var target=event.target;
					var cards=target.get('h');
					player.chooseCardButton('选择'+get.translation(target)+'的一张手牌打出',cards).filterButton=function(button){return trigger.filterCard(button.link)};
					"step 3"
					if(result.bool){
						player.storage.nyhzr凤求凰ol=1;
						event.target.lose(result.links);
						trigger.untrigger();
						trigger.responded=true;
						result.buttons[0].link.remove();
						trigger.result={bool:true,card:result.buttons[0].link}
					};
				},
				ai:{
					effect:{
						target:function(card){
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						}
					}
				},
			},
            "nyhzr火球术ol":{
				nobracket:true,
                trigger:{
                    player:"phaseAfter",
                },
                filter:function (event,player){
                    return player.num('h')>=2;
                },
                content:function (){
					'step 0'
                    player.chooseToDiscard(2,'h',true);
					'step 1'
                    event.target=game.players.randomGet(player);
                    event.target.showHandcards();
					'step 2'
                    var cards=event.target.get('h','sha');
                    if(cards.length>0){
                        player.gain(cards);
						event.target.$give(cards,player);
                    }else{
						event.target.damage('fire');
						event.target.storage.nyhzr火之箭矢ol++;
						game.log(event.target,'的火种+1');
                    };
                },
            },
            "nyhzr火之箭矢ol":{
				nobracket:true,
                group:["nyhzr火之箭矢ol_1111","nyhzr火之箭矢ol_2222"],
                subSkill:{
                    1111:{
                        init:function (player){
                            for(var i=0;i<game.players.length;i++){
								game.players[i].storage.nyhzr火之箭矢ol=0;
                            };
                        },
                        trigger:{
                            player:"phaseBefore",
                        },
                        filter:function (event,player){
                            return player.get('h','sha').length>0;
                        },
						frequent:true,
						content:function (){
							"step 0"
                            player.chooseTarget('选择【火之箭矢】的目标',function(card,player,target){return target!=player}).ai=function(target){return -ai.get.attitude(player,target)};
							"step 1"
							if(result.bool){
								player.chooseToDiscard(1,'h',{name:'sha'},true,'将一张【杀】转化为【火杀】并对目标使用');
								player.useCard({name:'sha',nature:'fire'},result.targets[0]);
								result.targets[0].storage.nyhzr火之箭矢ol++;
								game.log(result.targets[0],'的火种+1');
							}else{
								event.finish();
							};
						},
                    },
                    2222:{
                        trigger:{
                            player:"useCardToBefore",
                        },
						forced:true,
                        filter:function (event,player){
                            return event.target&&event.target!=player&&event.target.storage.nyhzr火之箭矢ol>0&&event.target.num('h')>0;
                        },
						content:function (){
							trigger.target.chooseToDiscard(1,'h',true);
							trigger.target.storage.nyhzr火之箭矢ol--;
							game.log(trigger.target,'的火种被引燃');
						},
                    },
                },
            },
            "nyhzr液态火ol":{
				nobracket:true,
				trigger:{
					source:'damageAfter'
				},
				filter:function (event,player){
					return player.get('e','1');
				},
				forced:true,
				content:function (){
					trigger.player.damage('nosource','fire');
				},
			},
            "nyhzr元素转化ol":{
				nobracket:true,
                trigger:{
                    global:"damageBefore",
                },
                filter:function (event,player){
                    return event.player&&event.num>0;
                },
                content:function (){
                    'step 0'
//					game.awakenShow('Newsnyhzr司马懿','20','red','元素转化');
                    player.chooseControl('火','雷','无属性',ui.create.dialog('请选择转化后的属性','hidden')).ai=function(event,player){if(trigger.player.get('e','2')&&trigger.player.get('e','2').name=='tengjia') return '火'};
                    "step 1"
                    if(result.control=='火'){
                        trigger.nature='fire';
                    };
                    if(result.control=='雷'){
                        trigger.nature='thunder';
                    };
                    if(result.control=='无属性'){
                        trigger.nature='';
                    };
                },
            },
            "nyhzr炎阳胄ol":{
				nobracket:true,
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				content:function (){
					player.turnOver();
				},
            },
            "_nyhzr炎阳胄ol":{
				nobracket:true,
				trigger:{
					global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('nyhzr炎阳胄ol')&&player.storage._nyhzr炎阳胄ol!=0;
				},
				content:function (){
					player.storage._nyhzr炎阳胄ol=0;
					player.turnOver=function(all){
						if(player.name=='jnyhzr金乌ol'){
							if(player.storage.nyhzr炎阳胄ol==undefined||player.storage.nyhzr炎阳胄ol==1){
								game.broadcastAll(function(player){
									player.node.avatar.setBackgroundImage('extension/新英魂之刃/jnyhzr金乌1.jpg');
									player.storage.nyhzr炎阳胄ol=0;
								},player);
								player.addSkill('nyhzr不灭之炎ol');
							}else{
								game.broadcastAll(function(player){
									player.node.avatar.setBackgroundImage('extension/新英魂之刃/Newjnyhzr金乌.jpg');
									player.storage.nyhzr炎阳胄ol=1;
								},player);
								player.removeSkill('nyhzr不灭之炎ol');
							};
						};
						if(player.name2=='jnyhzr金乌ol'){
							if(player.storage.nyhzr炎阳胄ol==undefined||player.storage.nyhzr炎阳胄ol==1){
								game.broadcastAll(function(player){
									player.node.avatar2.setBackgroundImage('extension/新英魂之刃/jnyhzr金乌1.jpg');
									player.storage.nyhzr炎阳胄ol=0;
								},player);
								player.addSkill('nyhzr不灭之炎ol');
							}else{
								game.broadcastAll(function(player){
									player.node.avatar2.setBackgroundImage('extension/新英魂之刃/Newjnyhzr金乌.jpg');
									player.storage.nyhzr炎阳胄ol=1;
								},player);
								player.removeSkill('nyhzr不灭之炎ol');
							};
						};
					};
				},
            },
            "nyhzr业火ol":{
				nobracket:true,
				trigger:{
					player:'shaBegin'
				},
				priority:-1,
				check:function (event,player){
					return ai.get.attitude(player,event.target)<0;
				},
				content:function(){
					'step 0'
					trigger.target.chooseToRespond({name:'sha'},'请打出一张杀响应杀');
					"step 1"
					if(result.bool==false){
						trigger.directHit=true;
					}
				},
			},
            "nyhzr不灭之炎ol":{
				nobracket:true,
				trigger:{
					player:"phaseBefore",
				},
				forced:true,
				content:function (){
					"step 0"
					player.judge(function(card){return (get.color(card)=='red')?1:-1});
					"step 1"
					if(result.judge>0){
						player.recover();
					}else{
						player.draw();
					};
				},
			},
            "nyhzr善恶天秤ol":{
				nobracket:true,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				complexCard:true,
				selectCard:[2,Infinity],
				filterTarget:true,
				selectTarget:1,
				content:function (){
					var redCard=0;
					for(var i=0;i<cards.length;i++){
						if(get.color(cards[i])=='red'){
							redCard++;
						}
					};
					for(var i=0;i<cards.length;i++){
						if(Math.random()<=redCard/cards.length-0.01){
							target.getBuff();
							game.log(target,'的判定结果为善');
						}else{
							target.getDebuff();
							game.log(target,'的判定结果为恶');
						};
					};
				},
				check:function (card){
					if(get.color(card)=='black') return 1;
					if(get.color(card)=='red') return 0;
				},
				ai:{
					order:6,
					result:{
						target:function (player,target){
							return get.damageEffect(target,player);
						},
					},
				},
			},
            "nyhzr冰裂龟甲ol":{
				nobracket:true,
				trigger:{
					global:'useCardToBegin'
				},
				filter:function(event,player){
					return event.target&&event.target==player&&event.player!=player&&event.targets.length==1;
				},
				forced:true,
				content:function(){
					'step 0'
					player.judge(function(card){
						if(get.suit(card)=='club') return 1;
						if(get.suit(card)=='diamond') return 0;
						if(get.suit(card)=='heart') return 0;
						if(get.suit(card)=='spade') return -1;
					});
					'step 1'
					if(get.suit(result.card)=='club'){
						trigger.untrigger();
						trigger.finish();
						game.log(trigger.player,'的卡牌无效了');
					};
					if(get.suit(result.card)=='diamond'){
						for(var i=0;i<game.players.length;i++){
							trigger.targets.push(game.players[i]);
							game.log(game.players[i],'成为',trigger.card,'的额外目标');
						};
					};
					if(get.suit(result.card)=='heart'){
						trigger.targets.push(player.next);
						game.log(player.next,'成为',trigger.card,'的额外目标');
					};
					if(get.suit(result.card)=='spade'){
						player.chooseToDiscard(1,'h',true);
					};
				},
			},
            "nyhzr时光缓行ol":{
				nobracket:true,
    			trigger:{
					player:'damageAfter'
    			},
    			forced:true,
    			content:function(){
					'step 0'
					player.judge(function(card){
						if(get.color(card)=='red') return 1;
						if(get.color(card)=='black') return 0.5;
					});
					'step 1'
					if(get.color(result.card)=='red'){
						player.insertPhase();
					};
					if(get.color(result.card)=='black'&&trigger.source){
						trigger.source.disableSkill('',trigger.source.get('s'));
						trigger.source.addSkill('nyhzr时光缓行ol_1111')
					};
    			},
                subSkill:{
                    1111:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        content:function (){
							player.enableSkill('',player.get('s'));
							player.removeSkill('nyhzr时光缓行ol_1111');
                        },
                    },
                },
    			ai:{
    				threaten:0,
    			},
    		},
            "nyhzr魔能法球ol":{
				nobracket:true,
                enable:"phaseUse",
                usable:1,
                content:function (){
					player.showHandcards();
					var pl=game.players.randomGet();
					pl.showHandcards();
					if(pl.get('h','shan').length>0) player.useCard({name:'sha'},pl,false);
				},
                ai:{
                    result:{
                        player:1,
                    },
                },
			},
            "nyhzr乌龙茶灵ol":{
				nobracket:true,
                trigger:{
                    player:"chooseToRespondBegin",
                },
				forced:true,
                filter:function (event,player){
                    if(event.responded) return false;
                    return event.filterCard({name:'sha'})||event.filterCard({name:'shan'});
                },
                content:function (){
                    "step 0"
                    player.judge(function(card){
						if(get.type(card)!='basic') return 1;
						return 0;
                    });
                    "step 1"
                    if(get.type(result.card)!='basic'){
						trigger.untrigger();
						trigger.responded=true;
						if(trigger.filterCard({name:'sha'})) trigger.result={bool:true,card:{name:'sha'}};
						if(trigger.filterCard({name:'shan'})) trigger.result={bool:true,card:{name:'shan'}};
                    };
                },
            },
            "nyhzr树灵爆发ol":{
				nobracket:true,
                enable:"phaseUse",
                usable:1,
                content:function (){
					if(!player.get('e','2')) player.draw();
					player.useCard({name:'sha'},player,false);
				},
                ai:{
                    result:{
                        player:function(player){
							if(player.get('e','2')) return 0;
							return player.hp-1;
						},
                    },
                },
			},
            "nyhzr大地护盾ol":{
				nobracket:true,
				trigger:{
					global:"damageBegin",
				},
				filter:function (event,player){
					return event.player.hp<=3&&player!=event.player&&event.source;
				},
				content:function (){
					'step 0'
					trigger.untrigger();
					trigger.finish();
					game.log('伤害效果消失了');
					player.loseHp();
					player.chooseTarget('选择【大地护盾】的目标',function(card,player,target){return target!=trigger.source}).ai=function(target){return ai.get.attitude(player,target)};
					'step 1'
					if(result.bool){
						result.targets[0].changeHujia();
						result.targets[0].update();
					}else{
						player.useCard({name:'nanman'},trigger.source);
					};
				},
                check:function (event,player){
					if(event.player.identity=='zhu'&&player.identity=='zhong'&&event.player.hp==1) return true;
					if(player.hp==1) return false;
					if(player.identity==event.player.identity) return true;
					if(player.identity=='zhu'&&event.player.identity=='zhong') return true;
					if(event.player.identity=='zhu'&&player.identity=='zhong') return true;
					return false;
                },
			},
            "nyhzr多变之水ol":{
				nobracket:true,
                group:["nyhzr多变之水ol_add凝水之盾","nyhzr多变之水ol_add泯灭水球"],
                subSkill:{
                    add凝水之盾:{
						trigger:{
							player:'damageAfter'
						},
						forced:true,
						content:function (){
							player.addSkill('nyhzr凝水之盾ol');
							player.removeSkill('nyhzr泯灭水球ol');
						},
                    },
                    add泯灭水球:{
						trigger:{
							source:'damageAfter'
						},
						forced:true,
						content:function (){
							player.addSkill('nyhzr泯灭水球ol');
							player.removeSkill('nyhzr凝水之盾ol');
						},
                    },
                },
			},
            "nyhzr凝水之盾ol":{
                nobracket:true,
                marktext:"凝",
                intro:{},
                mark:true,
				trigger:{
					player:'damageBegin'
				},
				filter:function (event,player){
					return event.source&&event.source.num('h')>0&&player.num('h')>0;
				},
				content:function (){
					'step 0'
					player.chooseCardButton('选择需要展示的手牌',player.get('h'));
					'step 1'
					if(result.bool){
						player.showCards(result.links);
						var sourceShowCard=trigger.source.get('h').randomGet();
						trigger.source.showCards(sourceShowCard);
						if(get.color(result.links)==get.color(sourceShowCard)){
							trigger.untrigger();
							trigger.finish();
							game.log('伤害效果消失了');
						}else{
							player.draw();
						};
					};
				},
            },
            "nyhzr泯灭水球ol":{
                nobracket:true,
                marktext:"泯",
                intro:{},
                mark:true,
				trigger:{
					source:'damageBegin'
				},
				content:function (){
					"step 0"
					trigger.player.chooseControl('heart','diamond','spade','club');
					"step 1"
					game.log(trigger.player,'选择了'+get.translation(result.control));
					trigger.player.popup(result.control);
					var cardPileFirstCard=get.cards(1);
					player.showCards(cardPileFirstCard);
					if(get.suit(cardPileFirstCard)==result.control){
						trigger.num+=1;
					}else{
					player.recover();
					};
				},
            },
            "nyhzr生命凋零ol":{
                nobracket:true,
				trigger:{
					global:["phaseJudgeBefore","phaseDrawBefore","phaseUseBefore","phaseDiscardBefore","damageBefore","recoverBefore","loseHpBefore","discardBefore","loseBefore","drawBefore","gainBefore"],
				},
				forced:true,
				popup:false,
				priority:Infinity,
				content:function (){
					trigger._triggered=null;
				},
			},
            "nyhzr无尽恐惧ol":{
                nobracket:true,
                trigger:{
					global:"dieAfter",
                },
                content:function (){
					"step 0"
					player.recover();
					player.chooseTarget(function(card,player,target){return target!=player}).ai=function(target){return -ai.get.attitude(player,target)};
					"step 1"
					if(result.bool){
						result.targets[0].turnOver();
					}else{
						player.draw();
					};
                },
            },
            "nyhzr鬼雄ol":{
                nobracket:true,
                marktext:"鬼",
                intro:{
                    content:function (storage){
						return '距离进入鬼雄状态还有'+(4-storage)+'个回合'
                    },
                },
                init:function (player){
                    player.storage.nyhzr鬼雄ol=0;
                },
                mark:true,
                group:["nyhzr鬼雄ol_1111","nyhzr鬼雄ol_2222","nyhzr鬼雄ol_3333"],
                subSkill:{
                    "1111":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
							player.storage.nyhzr鬼雄ol++;
							if(player.storage.nyhzr鬼雄ol1==1){
								player.storage.nyhzr鬼雄ol1=0;
							};
							if(player.storage.nyhzr鬼雄ol>=4){
								player.storage.nyhzr鬼雄ol=0;
								player.storage.nyhzr鬼雄ol1=1;
							};
						},
                    },
                    "2222":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
							return player.storage.nyhzr鬼雄ol1==1;
                        },
                        content:function (){
							trigger.untrigger();
							trigger.finish();
							game.log('伤害效果消失了');
						},
                    },
                    "3333":{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
							return player.storage.nyhzr鬼雄ol1!=1&&event.source&&event.source.num('h')>0;
                        },
                        content:function (){
							'step 0'
							var showTwoCard=get.cards(2);
							player.showCards(showTwoCard,'牌顶的两张牌');
							if (get.number(showTwoCard[0])+get.number(showTwoCard[1])>=10){
								player.chooseCardButton('选择'+get.translation(trigger.source)+'的一张手牌弃置',trigger.source.get('h'));
							}else{
								event.finish();
							};
							'step 1'
							if(result.bool){
								trigger.source.discard(result.links);
							};
						},
                    },
                },
			},
            "nyhzr天从云ol":{
                nobracket:true,
                marktext:"手",
                intro:{
                    content:function (storage){
						return '手牌上限+'+storage
                    },
                },
                init:function (player){
                    player.storage.nyhzr天从云ol=0;
                },
                mark:true,
                trigger:{
					source:'damageBegin',
				},
                forced:true,
                content:function (){
					var Random=[]
					for(var i=10;i<=100;i++){
						Random.push(i);
					};
					if(Math.random()<=1-Random.randomGet()*game.players.length/1000){
						trigger.num++
						player.storage.nyhzr天从云ol=0;
					}else{
						player.storage.nyhzr天从云ol++;
						player.syncStorage('nyhzr天从云ol');
					};
				},
				mod:{
    				maxHandcard:function (player,num){
            			if(player.storage.nyhzr天从云ol>0) return num+player.storage.nyhzr天从云ol;
            			return num;
    				},
				},
			},
            "nyhzr腐肉吸噬ol":{
				nobracket:true,
				trigger:{
					player:"phaseAfter",
				},
				filter:function (event,player){
					return player.num('h')<player.hp;
				},
				forced:true,
				content:function (){
					'step 0'
					event.cards=get.cards(player.hp-player.num('h'));
					player.showCards(event.cards);
					'step 1'
					nyhzr腐肉吸噬olNum=0;
					for(var i=0;i<event.cards.length;i++){
						if(get.color(event.cards[i])=='black') nyhzr腐肉吸噬olNum++;
					};
					if(nyhzr腐肉吸噬olNum>0){
						player.chooseControl('摸牌','恢复体力').set('ai',function(){
							if(player.hp==player.maxHp) return '摸牌'
							return '恢复体力'
						});
					}else{
						event.finish();
					};
					'step 2'
					if (result.control=='摸牌'){
						player.draw(nyhzr腐肉吸噬olNum);
						player.addTempSkill('nyhzr腐肉吸噬ol1',{player:'phaseEnd'})
					};
					if (result.control=='恢复体力'){
						player.recover();
					};
                },
			},
            "nyhzr腐肉吸噬ol1":{
				nobracket:true,
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
					return _status.currentPhase==player;
                },
                forced:true,
                content:function (){
					if(player.storage.nyhzr腐肉吸噬ol==undefined){
						player.storage.nyhzr腐肉吸噬ol=get.suit(trigger.card);
					}else{
						player.storage.nyhzr腐肉吸噬ol1=get.suit(trigger.card);
					};
					if(player.storage.nyhzr腐肉吸噬ol1!=undefined&&player.storage.nyhzr腐肉吸噬ol!=undefined&&player.storage.nyhzr腐肉吸噬ol!=player.storage.nyhzr腐肉吸噬ol1){
						player.draw();
						player.storage.nyhzr腐肉吸噬ol=player.storage.nyhzr腐肉吸噬ol1;
					};
                },
			},
            "nyhzr三尖两刃戟ol":{
                nobracket:true,
                mod:{
                    globalFrom:function (from,to,distance){
                        if(from.storage.nyhzr三尖两刃戟ol>0) return distance-from.storage.nyhzr三尖两刃戟ol-1;
						return distance-1;
                    },
                    selectTarget:function (card,player,range){
                        if(card.name=='sha') range[1]=player.storage.nyhzr三尖两刃戟ol+2;
                    },
                },
                init:function (player){
                    player.storage.nyhzr三尖两刃戟ol=0;
                },
                marktext:"戟",
                intro:{
                    content:function (storage){
						return '当前进攻距离：'+(storage+2)+'<br>当前杀可以指定'+(storage+2)+'个目标'
                    },
                },
                mark:true,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
					player.storage.nyhzr三尖两刃戟ol=0;
					player.syncStorage('nyhzr三尖两刃戟ol');
                },
			},
            "nyhzr通天法眼ol":{
                nobracket:true,
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
					'step 0'
					player.storage.nyhzr通天法眼olDiamond=0;
					player.storage.nyhzr通天法眼olHeart=0;
					player.storage.nyhzr通天法眼olClub=0;
					player.storage.nyhzr通天法眼olSpade=0;
					player.chooseTarget(function(card,player,target){return player!=target&&target.num('h')},'请选择一名角色').ai=function(target){return -ai.get.attitude(player,target)};
					'step 1'
					if(result.bool){
						event.target=result.targets[0];
						player.line(event.target,'thunder');
					}else{
						event.finish();
					};
					'step 2'
					player.chooseCardButton(get.translation(event.target)+'的手牌',event.target.get('h'));
					'step 3'
					targetCards=event.target.get('h');
					for(var i=0;i<targetCards.length;i++){
						if(get.suit(targetCards[i])=='diamond'&&player.storage.nyhzr通天法眼olDiamond!=1){
							player.storage.nyhzr三尖两刃戟ol++;
							player.syncStorage('nyhzr三尖两刃戟ol');
							player.storage.nyhzr通天法眼olDiamond=1;
						};
						if(get.suit(targetCards[i])=='heart'&&player.storage.nyhzr通天法眼olHeart!=1){
							player.storage.nyhzr三尖两刃戟ol++;
							player.syncStorage('nyhzr三尖两刃戟ol');
							player.storage.nyhzr通天法眼olHeart=1;
						};
						if(get.suit(targetCards[i])=='club'&&player.storage.nyhzr通天法眼olClub!=1){
							player.storage.nyhzr三尖两刃戟ol++;
							player.syncStorage('nyhzr三尖两刃戟ol');
							player.storage.nyhzr通天法眼olClub=1;
						};
						if(get.suit(targetCards[i])=='spade'&&player.storage.nyhzr通天法眼olSpade!=1){
							player.storage.nyhzr三尖两刃戟ol++;
							player.syncStorage('nyhzr三尖两刃戟ol');
							player.storage.nyhzr通天法眼olSpade=1;
						};
					};
					'step 4'
					var targetDiamondCards=0;
					var targetHeartCards=0;
					var targetClubCards=0;
					var targetSpadeCards=0;
					for(var i=0;i<targetCards.length;i++){
						if(get.suit(targetCards[i])=='diamond') targetDiamondCards++;
						if(get.suit(targetCards[i])=='heart') targetHeartCards++;
						if(get.suit(targetCards[i])=='club') targetClubCards++;
						if(get.suit(targetCards[i])=='spade') targetSpadeCards++;
					};
					if(targetDiamondCards>=2||targetHeartCards>=2||targetClubCards>=2||targetSpadeCards>=2){
						if(targetDiamondCards>=2) player.addTempSkill('qianxing',{player:'phaseBefore'});
						if(targetHeartCards>=2) player.recover();
						if(targetClubCards>=2) event.target.chooseToDiscard(1,'h',true);
						if(targetSpadeCards>=2) event.target.damage();
					}else{
						player.draw();
					};
				},
				ai:{
                    expose:0.5,
				},
			},
            "nyhzr神圣审判ol":{
                nobracket:true,
				mode:['identity'],
                trigger:{
					source:'damageAfter',
				},
                filter:function (event,player){
                    return event.card&&event.card.name=='sha';
                },
                forced:true,
                content:function (){
					'step 0'
					trigger.player.chooseControl('说出身份','流失体力').set('ai',function(){return '说出身份'});
					'step 1'
					if (result.control=='说出身份'){
						game.broadcastAll(function(player){
							player.chat('我是'+get.translation(trigger.player.identity));
							player.setIdentity(player.identity);
							player.node.identity.dataset.color=player.identity;
						},trigger.player);
					};
					if (result.control=='流失体力') trigger.player.loseHp();
				},
			},
            "nyhzr圣光护盾ol":{
                nobracket:true,
                group:["nyhzr圣光护盾ol_1111","nyhzr圣光护盾ol_2222"],
                subSkill:{
                    1111:{
                        enable:"phaseUse",
                        filterCard:true,
                        selectCard:1,
                        check:function(card){
	                        return 6-ai.get.value(card);
                        },
                        filterTarget:function (card,player,target){
                            return player!=target;
                        },
                        filter:function (event,player){
                            return !player.hujia;
                        },
                        content:function (){
                            target.storage.nyhzr圣光护盾ol=0;
							target.addSkill('nyhzr圣光护盾ol1');
							player.changeHujia();
							player.update();
                        },
                        ai:{
							order:5,
							result:{
								target:function (player,target){
    								return ai.get.recoverEffect(target);
								},
							},
                        },
                    },
                    2222:{
                        trigger:{
							global:"shaBegin",
						},
                        filter:function (event,player){
                            return event.target.storage.nyhzr圣光护盾ol==0&&player.hujia&&player.hujia>0&&event.player!=player;
                        },
						forced:true,
                        content:function (){
							game.log(player,'的圣光护盾保护了',trigger.target);
							trigger.untrigger();
							trigger.finish();
							trigger.player.useCard({name:'sha'},player);
						},
                    },
                },
			},
            "nyhzr圣光护盾ol1":{
                nobracket:true,
                marktext:"护",
                intro:{
                    content:function (storage){
						return '已获得米迦勒的庇护'
                    },
                },
                mark:true,
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                content:function (){
					game.log(player,'失去了米迦勒的庇护');
                    player.storage.nyhzr圣光护盾ol=1;
					player.removeSkill('nyhzr圣光护盾ol1');
                },
			},
            "nyhzr移形换影ol":{
                nobracket:true,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
				priority:Infinity,
                content:function (){
					"step 0"
					player.judge(function(card){
						if(get.color(card)=='black') return 1;
						return -1;
					});
					"step 1"
					if(get.color(result.card)=='black'){
						trigger.untrigger;
						trigger.finish();
						var target=[];
						for(var i=0;i<game.players.length;i++){
							if(game.players[i]!=player&&get.distance(player,game.players[i])<=2) target.push(game.players[i]);
						};
						trigger.player.useCard(trigger.card,target.randomGet());
					};
				},
			},
            "nyhzr电光火石ol":{
				nobracket:true,
				enable:"phaseUse",
				filterCard:function (card){
					return card.name=='sha';
				},
				selectCard:2,
				filterTarget:function (card,player,target){
					return player!=target;
				},
                content:function (){
					player.useCard({name:'sha',nature:'thunder'},target,false);
					player.addTempSkill('nyhzr电光火石ol1','shaAfter');
				},
				ai:{
				order:12,
                expose:0.8,
					result:{
						target:function (player,target){
							return get.damageEffect(target,player);
						},
					},
				},
			},
            "nyhzr电光火石ol1":{
				nobracket:true,
				trigger:{
					player:"shaBegin",
				},
				forced:true,
				popup:false,
				content:function (){
				trigger.directHit=true;
				},
			},
            "nyhzr高速格林炮ol":{
				nobracket:true,
				group:["nyhzr高速格林炮ol_first","nyhzr高速格林炮ol_clear"],
				subSkill:{
					first:{
						mod:{
							cardUsable:function (card,player,num){
								if(card.name=='sha') return Infinity;
							},
						},
						trigger:{
							player:"shaAfter",
						},
						priority:-1,
						forced:true,
                        filter:function (event,player){
                            return player.storage.nyhzr高速格林炮ol!=0&&_status.currentPhase==player;
                        },
						content:function (){
							'step 0'
							player.storage.nyhzr高速格林炮ol=0;
							player.storage.nyhzr高速格林炮ol1=0;
							for(var i=0;i<trigger.targets.length;i++){
								player.useCard({name:'sha'},trigger.targets[i]);
								player.useCard({name:'sha'},trigger.targets[i]);
							};
							'step 1'
							player.storage.nyhzr高速格林炮ol1=1;
						},
					},
					clear:{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						popup:false,
						content:function (){
							player.storage.nyhzr高速格林炮ol=1;
						},
					},
				},
			},
            "_nyhzr高速格林炮ol1":{
				nobracket:true,
				trigger:{
					player:"shaBefore",
				},
				popup:false,
				forced:true,
                filter:function (event,player){
                     return player.storage.nyhzr高速格林炮ol1==0;
                },
				content:function (){
					"step 0"
					player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
					"step 1"
					if(result.judge>0){
						player.useCard({name:'sha'});
						trigger.untrigger();
						trigger.finish();
					};
				},
			},
            "nyhzr穿刺射击ol":{
				nobracket:true,
				ai:{
					unequip:true,
					skillTagFilter:function (player,tag,arg){
						if(arg&&arg.name=='sha'&&player.storage.nyhzr高速格林炮ol==0) return true;
						return false;
					},
				},
			},
			"nyhzr乱世听凤ol":{
                nobracket:true,
                enable:"phaseUse",
                createDialog:function (player,target,onlylist){
					var list=target.storage.nyhzr乱世听凤ol;
					if(onlylist) return list;
					var dialog=ui.create.dialog('乱世听凤');
					dialog.add('选择需要恢复的限定技');
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
							}else{
								translation=translation.slice(0,2);
							}
							var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
							item.firstChild.addEventListener('click',clickItem);
							item.firstChild.link=list[i];
						};
					};
					dialog.add(ui.create.div('placeholder'));
					return dialog;
                },
                content:function (){
					"step 0"
					event.dialog=lib.skill.nyhzr乱世听凤ol.createDialog(target,player);
					nyhzr乱世听凤olQX=ui.create.control('取消',function(){
						event.dialog.close();
						nyhzr乱世听凤olQX.delete();
						event.finish();
						game.resume();
					})
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
					nyhzr乱世听凤olQX.delete();
					for(i=0;i<game.players.length;i++){
						if(game.players[i].storage[result]==true) var Target=game.players[i];
					};
					if(Target){
						player.loseHp();
						Target.storage[result]=false;
						Target.markSkill(result);
						Target.enableSkill(result+'_awake');
						Target.syncStorage(result);
						Target.awakenedSkills.remove(result);
						game.log(lib.translate[result]+'恢复了');
					}else{
						game.log(lib.translate[result]+'未发动，无法恢复');
					};
                },
			},
			"_nyhzr乱世听凤ol":{
				trigger:{
					global:'gameStart'
				},
				filter:function (event,player){
					return player.hasSkill('nyhzr乱世听凤ol');
				},
				forced:true,
				content:function (){
					var skill=[];
					for(var i=0;i<game.players.length;i++){
						for(var j=0;j<game.players[i].getSkills().length;j++){
							skill.push(game.players[i].getSkills()[j]);
						};
					};
					player.storage.nyhzr乱世听凤ol=[];
					for(var i=0;i<skill.length;i++){
						if(get.info(skill[i]).intro&&get.info(skill[i]).intro.content=='limited') player.storage.nyhzr乱世听凤ol.push(skill[i]);
					};
				},
			},
			"nyhzr凤羽踏歌ol":{
				nobracket:true,
				unique:true,
				enable:"phaseUse",
				mark:true,
				skillAnimation:true,
				animationStr:"凤羽踏歌",
				animationColor:"fire",
				filterCard:function(card){
					var type=get.type(card);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.type(ui.selected.cards[i])==type) return false;
					};
					return true;
				},
				complexCard:true,
				selectCard:3,
				init:function (player){
					player.storage.nyhzr凤羽踏歌ol=false;
				},
				filter:function (event,player){
					if(player.storage.nyhzr凤羽踏歌ol) return false;
					return game.dead.length>0;
				},
				content:function (){
					player.awakenSkill('nyhzr凤羽踏歌ol');
					player.storage.nyhzr凤羽踏歌ol=true;
					for(var i=0;i<game.dead.length;i++){
						game.dead[i].revive(game.dead[i].maxHp);
					};
					player.recover();
				},
				intro:{
					content:"limited",
				},
			},
			"nyhzr战争惧刃ol":{
				nobracket:true,
                init:function (player){
                    player.storage.nyhzr战争惧刃ol=[];
                },
                marktext:"战",
                intro:{
                    content:function(storage,player,skill){
    					var list=player.storage.nyhzr战争惧刃ol;
    					if(list.length){
    						var str='已记录技能：';
    						for(var i=0;i<list.length;i++){
    							if(lib.translate[list[i]+'_info']){
    								str+=get.translation(list[i])+'、';
    							};
    						};
    						return str.slice(0,str.length-1);
    					};
    				},
                },
                mark:true,
				trigger:{
					player:'phaseBegin',
				},
				forced:true,
				content:function(){
					for(var i=0;i<player.node.marks.childNodes.length;i++){
						if(player.node.marks.childNodes[i].name=='nyhzr战争惧刃ol'){
							game.broadcastAll(function(player){
								player.node.marks.childNodes[i].setBackgroundImage('extension/新英魂之刃/Newynyhzr雅典娜.jpg');
							},player);
						};
					};
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player){
							var skills=game.players[i].get('s',false,false);
							for(var j=0;j<skills.length;j++){
								if(lib.skill[skills[j]]&&lib.translate[skills[j]+'_info']){
									var str=lib.translate[skills[j]+'_info'];
									if(str.indexOf('杀')!=-1){
										game.players[i].removeSkill(skills[j]);
										player.storage.nyhzr战争惧刃ol.push(skills[j]);
										game.log(game.players[i],'的',skills[j],'被记录并删除了');
									};
								};
							};
						};
					};
					if(player.storage.nyhzr战争惧刃ol.length){
						player.addTempSkill(player.storage.nyhzr战争惧刃ol.randomGet(),{player:'phaseBefore'});
					}else{
						player.draw();
					}
				},
			},
            "nyhzr圣光法球ol":{
				nobracket:true,
				trigger:{
					global:"phaseEnd",
				},
				filter:function (event,player){
					return player.num('h')>=1&&player!=event.player;
				},
				direct:true,
				content:function (){
					'step 0'
					player.chooseBool('是否弃置一张手牌并令'+get.translation(trigger.player)+'进行一个额外的摸牌阶段？').ai=function (event,player){return (ai.get.attitude(player,trigger.player)>0&&trigger.player.num('h')<3)};
					'step 1'
					if(result.bool){
						player.chooseToDiscard(1,'h',true)
						trigger.player.phaseDraw();
					}else{
						event.finish();
					};
				},
            },
            "nyhzr欲望灾火ol":{
				nobracket:true,
				enable:'phaseUse',
				usable:1,
				unique:true,
				filterTarget:true,
				multitarget:true,
				selectTarget:2,
				targetprompt:['发起拼点','被拼点'],
				prompt:'选择两名拼点目标',
				content:function(){
					"step 0"
					if(targets[0].num('h')==0) targets[0].draw();
					if(targets[1].num('h')==0) targets[1].draw();
					if(targets[0].group!=targets[1].group) player.draw();
					targets[0].line(targets[1]);
					targets[0].chooseToCompare(targets[1]);
					"step 1"
					if(result.bool){
						targets[0].useCard({name:'sha',nature:'fire'},targets[1],false);
					}else{
						targets[1].useCard({name:'sha',nature:'fire'},targets[0],false);
					};
				},
				ai:{
					order:9,
                    expose:0.3,
					result:{
      				  	target:function(player,target){
							if(ai.get.attitude(player,target)<0) return -target.num('he');
   	  		 			},
   				 	},
				},
			},
            "nyhzr生存本能ol":{
				nobracket:true,
    			mod:{
    				targetEnabled:function(card,player,target){
    					if(player!=target&&target.hp<target.maxHp&&target.num('h')==0) return false;
    				}
    			},
				trigger:{
					player:"damageAfter",
				},
				direct:true,
				filter:function (event,player,card){
					return event.source&&player.hasSha();
				},
				content:function (){
					player.addSkill('nyhzr生存本能ol1');
					player.chooseToUse(get.prompt('是否对伤害来源使用一张【杀】？'),{name:'sha'},trigger.source);
				},
				ai:{
                    expose:0.1,
				},
            },
			"nyhzr生存本能ol1":{
				nobracket:true,
    			trigger:{
					player:'shaBegin'
				},
				popup:false,
				forced:true,
    			content:function(){
    				trigger.directHit=true;
					player.removeSkill('nyhzr生存本能ol1');
    			}
			},
            "nyhzr毁灭蛊箭ol":{
				nobracket:true,
				trigger:{
					player:'shaBegin'
				},
				filter:function(event,player){
					return _status.currentPhase==player;
				},
				forced:true,
				content:function(){
					'step 0'
					player.judge(function(card){
						if(get.color(card)=='black') return 1;
						if(get.color(card)=='red') return 0.5;
					});
					"step 1"
					if(get.color(result.card)=='black'){
						trigger.directHit=true;
					};
					if(get.color(result.card)=='red'){
						if(player.getStat().card.sha>=1){
							player.getStat().card.sha--;
						};
					};
				},
			},
            "nyhzr幻之分身ol":{
				nobracket:true,
				group:["nyhzr幻之分身ol_1111","nyhzr幻之分身ol_2222"],
				subSkill:{
					1111:{
						trigger:{
							player:"damageBegin",
						},
						check:function(event,player){
							if(player.hujia) return false;
							if(event.source==player) return false;
							return true;
						},
						content:function (){
							player.loseHp();
							trigger.untrigger();
							trigger.finish();
						},
					},
					2222:{
						enable:"phaseUse",
						usable:1,
						content:function (){
							player.loseHp();
							player.addTempSkill('nyhzr幻之分身2ol',{player:'phaseAfter'});
						},
					},
				},
			},
            "nyhzr幻之分身2ol":{
				nobracket:true,
				marktext:"分",
				intro:{},
				mark:true,
            },
            "nyhzr千叶斩ol":{
				nobracket:true,
				enable:"phaseUse",
				filterTarget:function (card,player,target){
					return player!=target;
				},
				filter:function (event,player){
					return player.num('h')>player.hp+1;
				},
				content:function (){
					"step 0"
					var qyzsha=get.cardPile(function(card){return card.name=='sha'});
					if(qyzsha&&player.num('h')>player.hp+1&&target.hp>0){
						player.gain(qyzsha,'gain2');
						player.useCard(qyzsha,target,false);
						player.chooseToDiscard(1,'h',true);
					}else{
						event.finish();
						if(player.hasSkill('nyhzr幻之分身2ol')){
							player.useCard(qyzsha,target);
							player.getBuff();
						};
					};
					"step 1"
					event.goto(0);
				},
				check:function (card){
					return 4-get.value(card);
				},
				ai:{
					order:8.5,
                    expose:0.2,
					result:{
						target:function (player,target){
							return get.damageEffect(target,player);
						},
					},
				},
            },
            "nyhzr地狱之躯ol":{
				nobracket:true,
				mod:{
					targetEnabled:function(card,player,target){
						if((card.name=='sha'&&player.get('e','1')&&target.storage.nyhzr地狱之躯ol!=undefined&&!target.storage.nyhzr地狱之躯ol.contains(player))) return false;
					},
				},
				init:function(player){
					player.storage.nyhzr地狱之躯ol=[];
				},
				intro:{
					content:function(storage,player,skill){
    					var list=player.storage.nyhzr地狱之躯ol;
    					if(list.length){
    						var str='已对';
    						for(var i=0;i<list.length;i++){
    							str+=get.translation(list[i])+'、';
    						};
    						return str.slice(0,str.length-1)+'发动';
    					};
					},
				},
				mark:true,
				trigger:{
					global:'equipAfter',
				},
				filter:function(event, player){
					return event.player!=player&&event.card&&get.subtype(event.card)=='equip1'&&player.storage.nyhzr地狱之躯ol&&!player.storage.nyhzr地狱之躯ol.contains(event.player);
				},
				check:function(event,player){
					return false;
				},
				content:function(){
					player.recover();
					player.draw();
					if (!player.storage.nyhzr地狱之躯ol.contains(trigger.player)) player.storage.nyhzr地狱之躯ol.push(trigger.player);
					player.markSkill('nyhzr地狱之躯ol');
					player.syncStorage('nyhzr地狱之躯ol');
				},
				ai:{
                    expose:0.1,
				},
			},
            "nyhzr神圣对决ol":{
				nobracket:true,
				enable:'phaseUse',
				filterTarget:function (card,player,target){
					return player!=target;
				},
				filter:function (event,player){
					return player.storage.nyhzr神圣对决ola!=0;
				},
				content:function(){
					'step 0'
					player.storage.nyhzr神圣对决ola=0;
					player.draw();
					target.draw();
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player&&game.players[i]!=target){
							game.broadcastAll(function(player){
								player.classList.add('out');
							},game.players[i]);
						};
					};
					'step 1'
					player.chooseControl('直至某一方受伤','直至某一方死亡','直至你的回合开始');
					'step 2'
                    if(result.control=='直至某一方受伤'){
                        player.addSkill('nyhzr神圣对决ol1');
                        target.addSkill('nyhzr神圣对决ol1');
						game.log(player,'与',target,'进入对决，直至某一方受伤，其他人不得打扰');
                    };
                    if(result.control=='直至某一方死亡'){
                        player.addSkill('nyhzr神圣对决ol2');
                        target.addSkill('nyhzr神圣对决ol2');
						game.log(player,'与',target,'进入对决，直至某一方死亡，其他人不得打扰');
                    };
                    if(result.control=='直至你的回合开始'){
                        player.addSkill('nyhzr神圣对决ol3');
						game.log(player,'与',target,'进入对决，直至',player,'的回合开始，其他人不得打扰');
                    };
				},
			},
            "nyhzr神圣对决ol1":{
				nobracket:true,
				trigger:{
					player:["damageAfter","dieBefore"],
				},
				forced:true,
				popup:false,
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].storage.nyhzr神圣对决ola==0) game.players[i].storage.nyhzr神圣对决ola=1;
						if(game.players[i].classList.contains('out')){
							if(game.players[i].hasSkill('nyhzr神圣对决ol1')) game.players[i].removeSkill('nyhzr神圣对决ol1');
							game.broadcastAll(function(player){
								game.players[i].classList.remove('out');
							},game.players[i]);
						}else{
							game.log(game.players[i],'退出决斗');
						};
					};
					if(trigger.source){
						trigger.source.addSkill('nyhzr神圣对决ol0');
						trigger.source.storage.nyhzr神圣对决ol0++;
						trigger.source.syncStorage('nyhzr神圣对决ol0');
					};
				},
			},
            "nyhzr神圣对决ol2":{
				nobracket:true,
				trigger:{
					player:"dieBefore",
				},
				forced:true,
				popup:false,
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].storage.nyhzr神圣对决ola==0) game.players[i].storage.nyhzr神圣对决ola=1;
						if(game.players[i].classList.contains('out')){
							if(game.players[i].hasSkill('nyhzr神圣对决ol2')) game.players[i].removeSkill('nyhzr神圣对决ol2');
							game.broadcastAll(function(player){
								game.players[i].classList.remove('out');
							},game.players[i]);
						}else{
							game.log(game.players[i],'退出决斗');
						};
					};
					if(trigger.source){
						trigger.source.addSkill('nyhzr神圣对决ol0');
						trigger.source.storage.nyhzr神圣对决ol0++;
						trigger.source.syncStorage('nyhzr神圣对决ol0');
						trigger.source.changeHujia(2);
						trigger.source.update();
					};
				},
			},
            "nyhzr神圣对决ol3":{
				nobracket:true,
				trigger:{
					player:"phaseBefore",
				},
				forced:true,
				popup:false,
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].storage.nyhzr神圣对决ola==0) game.players[i].storage.nyhzr神圣对决ola=1;
						if(game.players[i].classList.contains('out')){
							if(game.players[i].hasSkill('nyhzr神圣对决ol3')) game.players[i].removeSkill('nyhzr神圣对决ol3');
							game.broadcastAll(function(player){
								game.players[i].classList.remove('out');
							},game.players[i]);
						}else{
							game.players[i].draw();
							game.log(game.players[i],'退出决斗');
						};
					};
				},
			},
            "nyhzr神圣对决ol0":{
				nobracket:true,
				init:function(player){
					player.storage.nyhzr神圣对决ol0=0;
				},
				intro:{
					content:function(storage){
    					return '造成的伤害+'+storage;
					},
				},
				marktext:"神",
				mark:true,
				trigger:{
					source:"damageBefore",
				},
				forced:true,
				popup:false,
				filter:function (event,player){
					return player.storage.nyhzr神圣对决ol0;
				},
				content:function (){
					trigger.num+=player.storage.nyhzr神圣对决ol0;
				},
			},
            "nyhzr爆头ol":{
				nobracket:true,
				trigger:{
					source:"damageAfter",
				},
				forced:true,
				content:function (){
					"step 0"
					event.card=get.cards()[0];
					if(player.storage.nyhzr爆头ol==undefined) player.storage.nyhzr爆头ol=[];
					player.storage.nyhzr爆头ol.push(event.card);
					player.syncStorage('nyhzr爆头ol');
					player.showCards(event.card,'爆头');
					player.markSkill('nyhzr爆头ol');
					"step 1"
					for(var i=0;i<player.storage.nyhzr爆头ol.length-1;i++){
						if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.nyhzr爆头ol[i])&&get.color(event.card)&&get.color(event.card)==get.color(player.storage.nyhzr爆头ol[i])) trigger.player.die();
					};
				},
				intro:{
					content:"cards",
					onunmark:function (storage,player){
						if(storage&&storage.length){
							player.$throw(storage);
							for(var i=0;i<storage.length;i++){
								ui.discardPile.appendChild(storage[i]);
							};
							delete player.storage.nyhzr爆头ol;
						};
					},
				},
            },
            "nyhzr黑桃暗杀ol":{
				nobracket:true,
				unique:true,
				enable:"phaseUse",
				mark:true,
				skillAnimation:true,
				animationStr:"<img src="+lib.assetURL+'extension/新英魂之刃/黑桃皇后animationStr.png'+" width='760' height='244'>",
				init:function (player){
					player.storage.nyhzr黑桃暗杀ol=false;
				},
				filter:function (event,player){
					return !player.storage.nyhzr黑桃暗杀ol;
				},
				content:function (){
					player.awakenSkill('nyhzr黑桃暗杀ol');
					player.storage.nyhzr黑桃暗杀ol=true;
					game.broadcastAll(function(player){
						player.classList.add('out');
					},player);
					for(var i=0;i<player.get('h').length;i++){
						if(player.storage.nyhzr爆头ol==undefined) player.storage.nyhzr爆头ol=[];
						player.storage.nyhzr爆头ol.push(player.get('h')[i]);
						player.syncStorage('nyhzr爆头ol');
						player.markSkill('nyhzr爆头ol');
					};
					setTimeout(function(){
						game.broadcastAll(function(player){
							player.classList.remove('out');
						},player);
						player.useSkill('nyhzr黑桃暗杀ol1');
					},30000);
				},
				intro:{
					content:"limited",
				},
                ai:{
                    order:11,
                    result:{
                        player:function (player){
                            return  1;
                        },
                    },
                },
			},
            "nyhzr黑桃暗杀ol1":{
				content:function (){
					"step 0"
					player.chooseTarget('选择【黑桃暗杀】的目标',function(card,player,target){return target!=player}).ai=function(target){return -ai.get.attitude(player,target)};
					"step 1"
					if(result.bool){
						if(result.targets){
							player.line(result.targets[0]);
							result.targets[0].damage();
						};
					}else{
						event.finish();
					};
				},
				ai:{
                    expose:0.6,
				},
			},
            "nyhzr代天罚恶ol":{
				nobracket:true,
				trigger:{
					player:"phaseEnd",
				},
				direct:true,
				content:function (){
					'step 0'
					player.chooseTarget('选择【代天罚恶】的目标',function(card,player,target){return player!=target}).ai=function(target){return ai.get.attitude(player,target)};
					'step 1'
					if(result.bool){
						event.target=result.targets[0];
						player.line(event.target);
					}else{
						event.finish();
					};
					'step 2'
					player.judge(function(card){
						if(get.color(card)=='black') return 0.2;
						if(get.color(card)=='red') return 1;
					});
					'step 3'
                    if(get.color(result.card)=='black'){
						event.target.gain(result.card,'gain2');
						if(result.card.name=='sha'||result.card.name=='nanman'||result.card.name=='wanjian') event.target.useCard(result.card,player);
					}else{
						player.gain(result.card,'gain2');
						if(result.card.name=='sha'||result.card.name=='nanman'||result.card.name=='wanjian') player.useCard(result.card,event.target);
					};
				},
			},
            "nyhzr太阳之子ol":{
				nobracket:true,
				mod:{
					targetEnabled:function (card,player,target,now){
						if(card.name=='guohe') return false;
					},
				},
				trigger:{
					player:"phaseBefore",
				},
				forced:true,
				popup:false,
				content:function (){
					'step 0'
					player.skip('phaseJudge');
					player.skip('phaseDraw');
					player.skip('phaseUse');
					player.skip('phaseDiscard');
					player.chooseControl('判定阶段','摸牌阶段','出牌阶段','弃牌阶段').set('ai',function(){
						if(player.num('h')<=player.hp){
							return '弃牌阶段';
						}else{
							return '摸牌阶段';
						};
					});
					'step 1'
					if(result.control=='判定阶段'){
						player.phaseJudge();
						player.storage.nyhzr太阳之子olphaseJudge=0;
						player.addTempSkill('nyhzr太阳之子ol1',{player:'phaseJudgeAfter'});
					};
					if(result.control=='摸牌阶段'){
						player.phaseDraw();
						player.storage.nyhzr太阳之子olphaseDraw=0;
						player.addTempSkill('nyhzr太阳之子ol2',{player:'phaseDrawAfter'});
					};
					if(result.control=='出牌阶段'){
						player.phaseUse();
						player.storage.nyhzr太阳之子olphaseUse=0;
						player.addTempSkill('nyhzr太阳之子ol3',{player:'phaseUseAfter'});
					};
					if(result.control=='弃牌阶段'){
						player.phaseDiscard();
						player.storage.nyhzr太阳之子olphaseDiscard=0;
						player.addTempSkill('nyhzr太阳之子ol4',{player:'phaseDiscardAfter'});
					};
				},
			},
            "nyhzr太阳之子ol1":{
				nobracket:true,
				trigger:{
					player:'phaseJudgeEnd',
				},
				forced:true,
				popup:false,
				content:function (){
					'step 0'
					var list=['判定阶段','摸牌阶段','出牌阶段','弃牌阶段'];
					if(player.storage.nyhzr太阳之子olphaseJudge==0) list.remove('判定阶段');
					if(player.storage.nyhzr太阳之子olphaseDraw==0) list.remove('摸牌阶段');
					if(player.storage.nyhzr太阳之子olphaseUse==0) list.remove('出牌阶段');
					if(player.storage.nyhzr太阳之子olphaseDiscard==0) list.remove('弃牌阶段');
					if(list.length){
						player.chooseControl(list).set('ai',function(){
							return '弃牌阶段'
						});
					}else{
						player.storage.nyhzr太阳之子olphaseJudge=1;
						player.storage.nyhzr太阳之子olphaseDraw=1;
						player.storage.nyhzr太阳之子olphaseUse=1;
						player.storage.nyhzr太阳之子olphaseDiscard=1;
						event.finish();
					}
					'step 1'
					if(result.control=='判定阶段'){
						player.phaseJudge();
						player.storage.nyhzr太阳之子olphaseJudge=0;
						player.addTempSkill('nyhzr太阳之子ol1',{player:'phaseJudgeAfter'});
					};
					if(result.control=='摸牌阶段'){
						player.phaseDraw();
						player.storage.nyhzr太阳之子olphaseDraw=0;
						player.addTempSkill('nyhzr太阳之子ol2',{player:'phaseDrawAfter'});
					};
					if(result.control=='出牌阶段'){
						player.phaseUse();
						player.storage.nyhzr太阳之子olphaseUse=0;
						player.addTempSkill('nyhzr太阳之子ol3',{player:'phaseUseAfter'});
					};
					if(result.control=='弃牌阶段'){
						player.phaseDiscard();
						player.storage.nyhzr太阳之子olphaseDiscard=0;
						player.addTempSkill('nyhzr太阳之子ol4',{player:'phaseDiscardAfter'});
					};
				},
            },
            "nyhzr太阳之子ol2":{
				nobracket:true,
				trigger:{
					player:'phaseDrawEnd',
				},
				forced:true,
				popup:false,
				content:function (){
					'step 0'
					var list=['判定阶段','摸牌阶段','出牌阶段','弃牌阶段'];
					if(player.storage.nyhzr太阳之子olphaseJudge==0) list.remove('判定阶段');
					if(player.storage.nyhzr太阳之子olphaseDraw==0) list.remove('摸牌阶段');
					if(player.storage.nyhzr太阳之子olphaseUse==0) list.remove('出牌阶段');
					if(player.storage.nyhzr太阳之子olphaseDiscard==0) list.remove('弃牌阶段');
					if(list.length){
						player.chooseControl(list).set('ai',function(){
							return '出牌阶段';
						});
					}else{
						player.storage.nyhzr太阳之子olphaseJudge=1;
						player.storage.nyhzr太阳之子olphaseDraw=1;
						player.storage.nyhzr太阳之子olphaseUse=1;
						player.storage.nyhzr太阳之子olphaseDiscard=1;
						event.finish();
					}
					'step 1'
					if(result.control=='判定阶段'){
						player.phaseJudge();
						player.storage.nyhzr太阳之子olphaseJudge=0;
						player.addTempSkill('nyhzr太阳之子ol1',{player:'phaseJudgeAfter'});
					};
					if(result.control=='摸牌阶段'){
						player.phaseDraw();
						player.storage.nyhzr太阳之子olphaseDraw=0;
						player.addTempSkill('nyhzr太阳之子ol2',{player:'phaseDrawAfter'});
					};
					if(result.control=='出牌阶段'){
						player.phaseUse();
						player.storage.nyhzr太阳之子olphaseUse=0;
						player.addTempSkill('nyhzr太阳之子ol3',{player:'phaseUseAfter'});
					};
					if(result.control=='弃牌阶段'){
						player.phaseDiscard();
						player.storage.nyhzr太阳之子olphaseDiscard=0;
						player.addTempSkill('nyhzr太阳之子ol4',{player:'phaseDiscardAfter'});
					};
				},
            },
            "nyhzr太阳之子ol3":{
				nobracket:true,
				trigger:{
					player:'phaseUseEnd',
				},
				forced:true,
				popup:false,
				content:function (){
					'step 0'
					var list=['判定阶段','摸牌阶段','出牌阶段','弃牌阶段'];
					if(player.storage.nyhzr太阳之子olphaseJudge==0) list.remove('判定阶段');
					if(player.storage.nyhzr太阳之子olphaseDraw==0) list.remove('摸牌阶段');
					if(player.storage.nyhzr太阳之子olphaseUse==0) list.remove('出牌阶段');
					if(player.storage.nyhzr太阳之子olphaseDiscard==0) list.remove('弃牌阶段');
					if(list.length){
						player.chooseControl(list).set('ai',function(){
							return '判定阶段';
						});
					}else{
						player.storage.nyhzr太阳之子olphaseJudge=1;
						player.storage.nyhzr太阳之子olphaseDraw=1;
						player.storage.nyhzr太阳之子olphaseUse=1;
						player.storage.nyhzr太阳之子olphaseDiscard=1;
						event.finish();
					}
					'step 1'
					if(result.control=='判定阶段'){
						player.phaseJudge();
						player.storage.nyhzr太阳之子olphaseJudge=0;
						player.addTempSkill('nyhzr太阳之子ol1',{player:'phaseJudgeAfter'});
					};
					if(result.control=='摸牌阶段'){
						player.phaseDraw();
						player.storage.nyhzr太阳之子olphaseDraw=0;
						player.addTempSkill('nyhzr太阳之子ol2',{player:'phaseDrawAfter'});
					};
					if(result.control=='出牌阶段'){
						player.phaseUse();
						player.storage.nyhzr太阳之子olphaseUse=0;
						player.addTempSkill('nyhzr太阳之子ol3',{player:'phaseUseAfter'});
					};
					if(result.control=='弃牌阶段'){
						player.phaseDiscard();
						player.storage.nyhzr太阳之子olphaseDiscard=0;
						player.addTempSkill('nyhzr太阳之子ol4',{player:'phaseDiscardAfter'});
					};
				},
            },
            "nyhzr太阳之子ol4":{
				nobracket:true,
				trigger:{
					player:'phaseDiscardEnd',
				},
				forced:true,
				popup:false,
				content:function (){
					'step 0'
					var list=['判定阶段','摸牌阶段','出牌阶段','弃牌阶段'];
					if(player.storage.nyhzr太阳之子olphaseJudge==0) list.remove('判定阶段');
					if(player.storage.nyhzr太阳之子olphaseDraw==0) list.remove('摸牌阶段');
					if(player.storage.nyhzr太阳之子olphaseUse==0) list.remove('出牌阶段');
					if(player.storage.nyhzr太阳之子olphaseDiscard==0) list.remove('弃牌阶段');
					if(list.length){
						player.chooseControl(list).set('ai',function(){
							return '摸牌阶段';
						});
					}else{
						player.storage.nyhzr太阳之子olphaseJudge=1;
						player.storage.nyhzr太阳之子olphaseDraw=1;
						player.storage.nyhzr太阳之子olphaseUse=1;
						player.storage.nyhzr太阳之子olphaseDiscard=1;
						event.finish();
					}
					'step 1'
					if(result.control=='判定阶段'){
						player.phaseJudge();
						player.storage.nyhzr太阳之子olphaseJudge=0;
						player.addTempSkill('nyhzr太阳之子ol1',{player:'phaseJudgeAfter'});
					};
					if(result.control=='摸牌阶段'){
						player.phaseDraw();
						player.storage.nyhzr太阳之子olphaseDraw=0;
						player.addTempSkill('nyhzr太阳之子ol2',{player:'phaseDrawAfter'});
					};
					if(result.control=='出牌阶段'){
						player.phaseUse();
						player.storage.nyhzr太阳之子olphaseUse=0;
						player.addTempSkill('nyhzr太阳之子ol3',{player:'phaseUseAfter'});
					};
					if(result.control=='弃牌阶段'){
						player.phaseDiscard();
						player.storage.nyhzr太阳之子olphaseDiscard=0;
						player.addTempSkill('nyhzr太阳之子ol4',{player:'phaseDiscardAfter'});
					};
				},
            },
            "nyhzr怒战八方ol":{
				nobracket:true,
				trigger:{
					global:'useCard',
				},
				filter:function(event,player){
					if(get.type(event.card)!='basic'&&get.type(event.card)!='trick') return false;
					if(get.suit(event.card)&&player.num('h',{suit:get.suit(event.card)})){
						return event.player&&event.player!=player&&_status.currentPhase!=player;
					};
					return false;
				},
				direct:true,
				check:function (event,player){
					return ai.get.attitude(player,event.player)<0;
				},
				content:function(){
					'step 0'
					player.chooseCard(function(card){return get.suit(card)==get.suit(trigger.card)},'是否弃置花色为'+get.translation(get.suit(trigger.card)+'2')+'的手牌并使'+get.translation(trigger.player)+'打出的牌失效？');
					'step 1'
					if(result.bool){
						player.discard(result.cards);
						trigger.untrigger();
						trigger.finish();
					}else{
						event.finish();
					}
					'step 2'
					if(get.color(trigger.card)=='black'){
						player.draw();
						if(player.hasSkill('nyhzr所向披靡ol')) player.useSkill('nyhzr所向披靡ol');
					}else{
						player.useCard({name:'sha'},trigger.player)
					};
				},
				ai:{
					expose:0.1,
				},
			},
            "nyhzr所向披靡ol":{
				nobracket:true,
				content:function (){
					"step 0"
					var list=["令一名角色摸牌","弃置一名其他角色装备区内的装备牌"];
					player.chooseControl(list);
					'step 1'
					if(result.control=='令一名角色摸牌') player.useSkill('nyhzr所向披靡ol1');
					if(result.control=='弃置一名其他角色装备区内的装备牌') player.useSkill('nyhzr所向披靡ol2');
				},
			},
            "nyhzr所向披靡ol1":{
				content:function (){
					"step 0"
					player.chooseTarget('请选择【所向披靡】的目标',function(card,player,target){return target}).ai=function(target){return ai.get.attitude(player,target)};
					"step 1"
					if(result.bool){
						result.targets[0].draw();
					}else{
						event.finish();
					};
				},
            },
            "nyhzr所向披靡ol2":{
				content:function (){
					"step 0"
					player.chooseTarget('请选择【所向披靡】的目标',function(card,player,target){return target.num('e')>0&&target!=player}).ai=function(target){return -ai.get.attitude(player,target)};
					"step 1"
					if(result.bool){
						player.discardPlayerCard(1,result.targets[0],'e'); 
					}else{
						event.finish();
					};
				},
            },	
            "nyhzr追魂剑ol":{
				nobracket:true,
				trigger:{
					player:"shaHit",
				},
				forced:true,
				content:function (){
                    if(trigger.target.storage.nyhzr追魂剑ol==undefined) trigger.target.storage.nyhzr追魂剑ol=0;
                    trigger.target.markSkill('nyhzr追魂剑ol');
					trigger.target.storage.nyhzr追魂剑ol+=1;
					trigger.target.syncStorage('nyhzr追魂剑ol');
                },
                intro:{
                    content:function (storage){
                        return '当前有'+storage+'个追魂印记'
                    },
                },
			},
            "_nyhzr追魂剑ol1":{
				trigger:{
					player:"recoverBefore",
				},
				priority:Infinity,
				forced:true,
				filter:function (event,player){
					return player.storage.nyhzr追魂剑ol>=1;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();	
				},
			},
            "_nyhzr追魂剑ol2":{
				trigger:{
					player:"damageAfter",
				},
				priority:Infinity,
				forced:true,
				filter:function (event,player){
					return player.storage.nyhzr追魂剑ol>=2;
				},
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].hasSkill('nyhzr追魂剑ol')) game.players[i].draw();
					};
				},
			},
            "_nyhzr追魂剑ol3":{
				trigger:{
					player:"damageAfter",
				},
				priority:Infinity,
				forced:true,
				filter:function (event,player){
					return player.storage.nyhzr追魂剑ol>=3;
				},
				content:function (){
					player.discard(player.get("he"));
				},
			},
            "_nyhzr追魂剑ol4":{
				trigger:{
					player:"damageAfter",
				},
				priority:Infinity,
				forced:true,
				filter:function (event,player){
					return player.storage.nyhzr追魂剑ol>=4;
				},
				content:function (){
					player.die();
				},
			},
            "nyhzr七十二变ol":{
				nobracket:true,
                init:function (player){
                    if(player.storage.nyhzr七十二变ol1!=1) player.storage.nyhzr七十二变ol=2;
					player.storage.nyhzr七十二变ol1=1;
                },
                marktext:"变",
                intro:{},
                mark:true,
				trigger:{
					player:'phaseBegin',
				},
				forced:true,
				content:function(){
					'step 0'
					if(player.storage.nyhzr七十二变ol>0){
						player.chooseControl('摸牌','获得技能').set('ai',function(){return '获得技能'});
					}else{
						event.finish();
					};
					'step 1'
					if(result.control=='摸牌'){
						player.draw();
						player.storage.nyhzr七十二变ol--;
						player.syncStorage('nyhzr七十二变ol');
					};
					if(result.control=='获得技能'){
						var skill=[];
						for(var i=0;i<game.players.length;i++){
							if(game.players[i]!=player){
								for(var j=0;j<game.players[i].get('s',false,false).length;j++){
									if(!player.hasSkill(game.players[i].get('s',false,false)[j])) skill.push(game.players[i].get('s',false,false)[j]);
								};
							};
						};
						player.addSkill(skill.randomGet());
						player.storage.nyhzr七十二变ol--;
						player.syncStorage('nyhzr七十二变ol');
					};
					'step 2'
					if(player.storage.nyhzr七十二变ol>0) event.goto(0);
				},
			},
            "nyhzr火眼金睛ol":{
                nobracket:true,
                trigger:{
                    player:"phaseUseBefore",
                },
				forced:true,
                content:function (){
					'step 0'
					player.chooseTarget(function(card,player,target){return player!=target&&target.num('h')},'请选择一名角色并观看其手牌').ai=function(target){return target.num('h')};
					'step 1'
					if(result.bool){
						event.target=result.targets[0];
						player.line(event.target);
					}else{
						event.finish();
					};
					'step 2'
					player.chooseCardButton(get.translation(event.target)+'的手牌',event.target.get('h'));
					'step 3'
					for(var i=0;i<event.target.get('h').length;i++){
						if(event.target.get('h')[i].name=='sha'){
							player.storage.nyhzr七十二变ol++;
							player.syncStorage('nyhzr七十二变ol');
						};
					};
					if(event.target.get('h','sha').length==0) player.draw();
				},
			},
            "_nyhzr七十二变ol":{
				trigger:{
					player:'phaseBegin',
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('nyhzr七十二变ol');
				},
				content:function(){
					player.clearSkills();
					player.addSkill('nyhzr七十二变ol');
					player.addSkill('nyhzr火眼金睛ol');
				},
			},
            "nyhzr战火盾甲ol":{
				nobracket:true,
				trigger:{
					player:"damageAfter",
				},
				filter:function (event,player){
					return event.source;
				},
				content:function (){
					'step 0'
					if(trigger.source.num('h')>0){
					player.chooseControl('red','black').set('ai',function(){return 'red'});
					}else{
						event.finish();
					};
					'step 1'
					var sourceShowCard=trigger.source.get('h').randomGet();
					player.showCards(sourceShowCard);
					if(get.color(sourceShowCard)==result.control){
						trigger.source.discard(sourceShowCard);
						event.goto(0);
					};
				},
				ai:{
                    expose:0.3,
				},
            },
            "nyhzr束缚搏击ol":{
				nobracket:true,
				enable:'chooseToUse',
				filterCard:function(card){
					return get.type(card)=='trick';
				},
				position:'h',
				viewAs:{name:'juedou'},
				prompt:'将一张非延时性锦囊牌当【决斗】使用',
			},
            "nyhzr弹药填装ol":{
				nobracket:true,
                init:function (player){
                    player.storage.nyhzr弹药填装ol=0;
                },
                marktext:"弹",
                intro:{
                    content:function (storage){
						return '当前拥有'+Math.floor(storage/5)+'个'
                    },
                },
                mark:true,
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				content:function (){
					"step 0"
					var targets=[];
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player) targets.push(game.players[i]);
					};
					nyhzr弹药填装oltarget=targets.randomGet();
					player.draw(2);
					if(nyhzr弹药填装oltarget.num('h')==0) nyhzr弹药填装oltarget.draw();
					nyhzr弹药填装oltarget.line(player);
					nyhzr弹药填装oltarget.chooseToCompare(player);
					"step 1"
					if(result.bool){
						if(ai.get.attitude(nyhzr弹药填装oltarget,player)>0){
							nyhzr弹药填装oltarget.line(player);
							player.storage.nyhzr弹药填装ol+=5;
							player.syncStorage('nyhzr弹药填装ol');
						}else{
							player.line(nyhzr弹药填装oltarget,'fire');
							nyhzr弹药填装oltarget.damage('fire');
						};
					}else{
						player.storage.nyhzr弹药填装ol+=result.num2-result.num1;
						player.syncStorage('nyhzr弹药填装ol');
					};
				},
				ai:{
                    expose:0.05,
				},
			},
            "nyhzr高距炮弹ol":{
				nobracket:true,
				enable:"phaseUse",
				filterTarget:function (card,player,target){
					return player!=target;
				},
				filter:function (event,player){
					return player.storage.nyhzr弹药填装ol>=5;
				},
				content:function (){
					player.storage.nyhzr弹药填装ol-=5;
					player.syncStorage('nyhzr弹药填装ol');
					player.useCard({name:'sha',nature:'fire'},target,false);
				},
				ai:{
					order:8.5,
                    expose:0.8,
					result:{
						target:function (player,target){
							return get.damageEffect(target,player);
						},
					},
				},
            },
            "nyhzr九命妖尾ol":{
				nobracket:true,
				trigger:{
					player:"phaseBefore",
				},
				forced:true,
				filter:function (event,player){
					return player.hp<player.maxHp;
				},
				content:function(){		
					var card=get.cards(1);
					player.showCards(card,'九命妖尾');
					if(get.number(card[0])>=9){
						player.recover();
					}else{
						player.useSkill('nyhzr勾魂大法ol');
					};
				},
			},
            "nyhzr勾魂大法ol":{
				nobracket:true,
				enable:"phaseUse",
				usable:1,
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player&&game.players[i].sex=='male'&&game.players[i].num('h')>0){
							player.gainPlayerCard('h',game.players[i],true);
							player.useSkill('nyhzr勾魂大法ol1');
						};
					};
				},
				ai:{
					order:1,
					result:{
						player:function (player){
							return 1;
						},
					},
				},
			},
            "nyhzr勾魂大法ol1":{
				content:function(){
					"step 0"
					var list=["弃牌","将一张牌复制并交给所有其他角色"];
					player.chooseControl(list)
					"step 1"
					if(result.control=='弃牌'){
						player.chooseToDiscard(1,'h',true);
						event.finish();
					};
					if(result.control=='将一张牌复制并交给所有其他角色'){
						if(player.num('h')>0) player.chooseCard('请选择需要复制并交给所有其他角色的牌',function(card){return true}).ai=function(card){return 4-ai.get.value(card)};
					};
					'step 2'
					if(result.bool){
						for(var i=0;i<game.players.length;i++){
							if(game.players[i]!=player) game.players[i].gain(game.createCard(result.cards[0]),'gain2');
						};
					};
				},	
			},
            "nyhzr宿敌之剑ol":{
				nobracket:true,
				enable:"phaseUse",
				usable:1,
				filter:function (event,player){
					return player.num('h','sha')>0;
				},
				filterCard:function (card){
					return card.name=='sha';
				},
				filterTarget:function (card,player,target){
					return player!=target;
				},
				content:function (){
					"step 0"
					var list=["弃牌或流失体力"];
					if(target.num('h','sha')>0) list.push('弃置一张杀');
					target.chooseControl(list).ai=function(){
						if(target.num('h','sha')>0) return '弃置一张杀';
						return '弃牌或流失体力';
					};
					"step 1"
					if(result.control=='弃牌或流失体力'){
						var list=["流失一点体力"];
						if(target.num('h')>=2) list.push('弃置两张手牌');
						target.chooseControl(list).ai=function(){
							if(target.num('h')>=2) return '弃置两张手牌';
							return '流失一点体力';
						};
					};
					if(result.control=='弃置一张杀'){
						target.chooseToDiscard(function(card){return card.name=='sha'},true);
						player.useCard({name:'juedou'},target);
						if(player.hp<3) player.draw();
						event.finish();
					};
					'step 2'
					if(result.control=='弃置两张手牌'){
						target.chooseToDiscard(2,'h',true);
					};
					if(result.control=='流失一点体力'){
						target.loseHp();
					};
				},
				ai:{
					order:9,
                    expose:0.6,
					result:{
						target:function (player,target){
							return get.damageEffect(target,player);
						},
					},
				},
			},
            "nyhzr追袭ol":{
				nobracket:true,
                mod:{
                    globalFrom:function (from,to,distance){
                        if(from.storage.nyhzr射月ol>0) return distance-(from.maxHp-from.hp)+from.storage.nyhzr射月ol;
						return distance-(from.maxHp-from.hp);
                    },
                },
                trigger:{
                    player:"useCardBefore",
                },
                forced:true,
				popup:false,
                content:function (){
                    player.removeAdditionalSkill('nyhzr追袭ol');
                    var list=[];
                    if(player.getAttackRange()<2) list.push('feiying');
                    if(player.getAttackRange()==2) list.push('guanshi_skill');
                    if(player.getAttackRange()>2) list.push('qinggang_skill');
                    if(list.length) player.addAdditionalSkill('nyhzr追袭ol',list);
				},
			},
            "nyhzr射月ol":{
				nobracket:true,
				enable:"phaseUse",
				filterTarget:function (card,player,target){
					return player!=target&&get.distance(player,target,'attack')<=1;
				},
				content:function (){
					player.useCard({name:'sha'},target,false);
					if(player.storage.nyhzr射月ol==undefined) player.storage.nyhzr射月ol=0;
					player.storage.nyhzr射月ol+=1;
				},
				ai:{
					order:2,
                    expose:0.5,
					result:{
						target:function (player,target){
							return get.damageEffect(target,player);
						},
					},
				},
			},
            "_nyhzr射月ol":{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
				filter:function (event,player){
					return player.hasSkill('nyhzr追袭ol');
				},
                content:function (){
					player.storage.nyhzr射月ol=0;
				},
			},
            "nyhzr连年有余ol":{
				nobracket:true,
    			trigger:{
					player:'discardAfter',
				},
    			direct:true,
    			content:function(){
    				'step 0'
					if(trigger.cards.length>1) player.draw(trigger.cards.length);
					if(player.storage.nyhzr定时爆竹ol!=true&&!_status.connectMode){
    					var list=['equip1','equip2','equip3','equip4','equip5'];
    					for(var i=0;i<list.length;i++){
    						if(player.getEquip(list[i])) list.splice(i--,1);
    					};
    					list.push('cancel2');
    					player.chooseControl(list).prompt='请选择【'+get.translation(trigger.cards[0].name)+'】改变后的装备类型';
					}else{
						player.storage.nyhzr定时爆竹ol=false;
						event.finish();
					};
    				'step 1'
    				if(result.control&&result.control!='cancel2'){
    					var name='nyhzr连年有余ol'+'_'+result.control+'_'+trigger.cards[0].name;
    					lib.card[name]=get.copy(get.info(trigger.cards[0]));
    					lib.card[name].subtype=result.control;
    					lib.card[name].epic=true;
    					lib.card[name].cardimage='wugu';
    					lib.card[name].source=[trigger.cards[0].name];
    					lib.translate[name]=lib.translate[trigger.cards[0].name];
    					lib.translate[name+'_info']=lib.translate[trigger.cards[0].name+'_info'];
    					trigger.cards[0].init([trigger.cards[0].suit,trigger.cards[0].number,name,trigger.cards[0].nature]);
						player.equip(trigger.cards[0])
    				};
    			},
			},
            "_nyhzr连年有余ol":{
    			trigger:{
        			player:"phaseBefore",
    			},
    			forced:true,
				filter:function (event,player){
					return player.hasSkill('nyhzr连年有余ol');
				},
    			content:function (){
        			if(player.getEquip('equip1')) player.gain(player.getEquip('equip1'),'gain2');
        			if(player.getEquip('equip2')) player.gain(player.getEquip('equip2'),'gain2');
        			if(player.getEquip('equip3')) player.gain(player.getEquip('equip3'),'gain2');
        			if(player.getEquip('equip4')) player.gain(player.getEquip('equip4'),'gain2');
        			if(player.getEquip('equip5')) player.gain(player.getEquip('equip5'),'gain2');
    			},
			},
            "nyhzr定时爆竹ol":{
				nobracket:true,
    			trigger:{
					player:'phaseAfter',
				},
				filter:function (event,player){
					if(_status.connectMode) return player.num('h')>0;
					return player.num('e')>0;
				},
				check:function (event,player){
//					return player.num('h','shan')>0;
					return false;
				},
				content:function (){
					if(_status.connectMode){
						player.chooseToDiscard(1,'h',true);
					}else{
						player.chooseToDiscard(1,'e',true);
					};
					player.storage.nyhzr定时爆竹ol=true;
					setTimeout(function(){
						player.useCard({name:'sha',nature:'fire'},game.players,false);
					},10000);
				},
			},			
            "nyhzr隐匿·胧ol":{
				nobracket:true,
                init:function (player){
                    player.storage.nyhzr隐匿·胧ol=0;
                },
                marktext:"胧",
                intro:{
                    content:function (storage){
						return '已触发'+get.cnNumber(storage)+'次隐藏拖拽线效果'
                    },
                },
                mark:true,
			},
            "_nyhzr隐匿·胧ol":{
				trigger:{
					global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('nyhzr隐匿·胧ol')&&player.storage.nyhzr隐匿·胧ol1!=0;
				},
				content:function (){
					player.storage.nyhzr隐匿·胧ol1=0;
					player.line=function(all){
						player.storage.nyhzr隐匿·胧ol+=1;
						if(player.storage.nyhzr隐匿·胧ol>=5){
							player.addTempSkill('qianxing',{player:'phaseBefore'});
							player.storage.nyhzr隐匿·胧ol=0;
							player.syncStorage('nyhzr隐匿·胧ol');
						};
					};
				},
			},
            "nyhzr幕府利刃ol":{
				nobracket:true,
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					},
                    selectTarget:function (card,player,range){
                        if(card.name=='wanjian'||card.name=='nanman'||card.name=='sha') range[1]=player.countUsed('sha')+1;
                    },
                },
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
                    if(_status.currentPhase!=player) return false;
                    return player.countUsed(event.card)>2;
                },
                forced:true,
				usable:3,
                content:function (){
                    player.draw();
                },
            },
            "nyhzr颠覆之海ol":{
				nobracket:true,
			},
            "_nyhzr颠覆之海ol":{
				trigger:{
					global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('nyhzr颠覆之海ol')&&player.storage.nyhzr颠覆之海ol1!=0;
				},
				content:function (){
					player.storage.nyhzr颠覆之海ol1=0;
					player.loseHp=function(all){
						player.useCard({name:'sha'},player);
					};
					player.turnOver=function(all){
						if(player.num('h')>0) player.chooseToDiscard(1,'h',true);
					};
				},
			},
			"nyhzr银箭ol":{
				nobracket:true,
				trigger:{
					source:"damageEnd",
				},
				filter:function (event){
					return event.nature=='thunder';
				},
				forced:true,
				content:function (){
					var skill=trigger.player.get('s',false,false).randomGet();
					game.log(player,'获得了【',lib.translate[skill],'】');
					player.addSkill(skill);
				},
			},
		    "nyhzr黄金之翼ol":{
				nobracket:true,
				group:["nyhzr黄金之翼ol_1","nyhzr黄金之翼ol_2"],
				subSkill:{
					1:{
						trigger:{
							global:"damageBefore",
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return event.source&&event.source!=player&&event.player!=player;
						},
						content:function (){
							trigger.source=player;
							trigger.nature='fire';
						},
					},
					2:{
						trigger:{
							source:'damageBegin'
						},
						forced:true,
						popup:false,
						content:function (){
							game.broadcastAll(function(target,player){
								game.swapSeat(target,player);
							},trigger.player,player)
						},
					},
				},
		    },
            "nyhzr逐阳之弓ol1":{
                nobracket:true,
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-1;
                    },
                },
				trigger:{
                    source:"damageAfter",
				},
				filter:function (event,player){
                    return event.card;
				},
				check:function (event,player){
					return ai.get.attitude(player,event.player)<0;
				},
				content:function (){
					var cards=[];
					for(var i=0;i<trigger.player.get('hej').length;i++){
						if(get.number(trigger.player.get('hej')[i])-get.number(trigger.card)<=2&&get.number(trigger.player.get('hej')[i])-get.number(trigger.card)>=-2) cards.push(trigger.player.get('hej')[i]);
					};
					trigger.player.discard(cards);
				},
			},
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
					},
                    translate:{
            "mnyhzr灭世魔星dj":"灭世魔星",
            "lnyhzr咯哩咯哩ol":"◉咯哩咯哩",
            "lnyhzr莉莉姆.提露埃拉ol":"◉莉莉姆·提露埃拉",
            "lnyhzr龙骑士ol":"◉龙骑士",
            "nnyhzr妮娜ol":"◉妮娜",
            "dnyhzr德古拉ol":"◉德古拉",
            "hnyhzr后羿ol":"◉后羿",
            "snyhzr苏尔肯ol":"◉苏尔肯",
            "nnyhzr瓦尔基里ol":"◉瓦尔基里",
            "xnyhzr小乔ol":"◉小乔",
            "knyhzr凯撒ol":"◉凯撒",
            "dnyhzr狄娜ol":"◉狄娜",
            "snyhzr司马懿ol":"◉司马懿",
            "jnyhzr金乌ol":"◉金乌",
            "anyhzr阿努比斯ol":"◉阿努比斯",
            "xnyhzr玄武ol":"◉玄武",
            "gnyhzr甘道夫ol":"◉甘道夫",
            "snyhzr树精长老ol":"◉树精长老",
            "tnyhzr泰坦ol":"◉泰坦",
            "snyhzr水元素ol":"◉水元素",
            "snyhzr死神ol":"◉死神",
            "xnyhzr项羽ol":"◉项羽",
            "bnyhzr八歧大蛇ol":"◉八歧大蛇",
            "knyhzr狂徒ol":"◉狂徒",
            "ynyhzr杨戬ol":"◉杨戬",
            "mnyhzr米迦勒ol":"◉米迦勒",
            "dnyhzr电光侠ol":"◉电光侠",
            "lnyhzr兰ol":"◉兰",
            "dnyhzr大乔ol":"◉大乔",
            "ynyhzr雅典娜ol":"◉雅典娜",
            "xnyhzr西莫ol":"◉西莫",
            "cnyhzr丛林之子ol":"◉丛林之子",
            "gnyhzr宫本武藏ol":"◉宫本武藏",
            "lnyhzr鲁瓦ol":"◉鲁瓦",
            "anyhzr阿瑞斯ol":"◉阿瑞斯",
            "xnyhzr席璐达ol":"◉席璐达",
            "znyhzr钟馗ol":"◉钟馗",
            "anyhzr阿波罗ol":"◉阿波罗",
            "hnyhzr花木兰ol":"◉花木兰",
            "xnyhzr西门飞雪ol":"◉西门飞雪",
            "snyhzr孙悟空ol":"◉孙悟空",
            "snyhzr斯巴达ol":"◉斯巴达",
            "dnyhzr黛西亚ol":"◉黛西亚",
            "dnyhzr妲己ol":"◉妲己",
            "knyhzr卡柯ol":"◉卡柯",
            "anyhzr艾薇ol":"◉艾薇",
            "fnyhzr福娃ol":"◉福娃",
            "gnyhzr宫本武藏SkinC1ol":"◉宫本武藏 ",
            "gnyhzr宫本武藏SkinC2ol":"◉宫本武藏  ",
            "gnyhzr宫本武藏SkinC3ol":"◉宫本武藏   ",
            "hnyhzr后羿SkinC3ol":"◉后羿   ",
            "hnyhzr后羿SkinC5ol":"◉后羿     ",
            "nyhzr仙灵伙伴ol":"仙灵伙伴",
            "nyhzr仙灵伙伴ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始阶段，你召唤一只妖精皮皮",
            "nyhzr迷藏印记ol":"迷藏印记",
            "nyhzr迷藏印记ol_info":"每当你受到伤害时，若你有手牌，你可以牺牲两只妖精皮皮使伤害-1，若游戏人数小于4，你需要弃一张牌，否则无法减伤",
            "nyhzr恐惧镰刀ol":"恐惧镰刀",
            "nyhzr恐惧镰刀ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每次造成伤害时会为自己的噩梦镰刀充能夜魔之力，达到三层时，造成伤害后使对方翻面",
            "nyhzr恐惧结界ol":"恐惧结界",
            "nyhzr恐惧结界ol_info":"当一名其他力量角色使用【杀】造成一次伤害后，该角色可令你摸一张牌并令你恢复一点体力",
            "nyhzr龙人血脉ol":"龙人血脉",
            "nyhzr龙人血脉ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>游戏开始后，每一分钟激活30点血脉",
			"nyhzr龙人血脉ol_append":"当血脉数量：<li>为30时，你的体力上限+1并恢复一点体力<li>为90时，你摸两张牌<li>为150时，你获得技能（回合开始前摸一张牌）<li>为240时，你获得技能（回合内有使用次数限制的牌，其限制改为2；你使用的牌无距离限制）<li>为300时，你获得技能（当你造成伤害后，若你的手牌数大于2，你可以弃置所有手牌后摸一张牌，然后随机删除被伤害者一项技能）",
            "nyhzr神威ol":"神威",
            "nyhzr女皇神威ol":"女皇神威",
            "nyhzr女皇神威ol_info":"出牌阶段，你可以释放自己的女皇神威,使你于本回合内造成伤害后，目标弃置所有手牌，使用后删除此技能",
            "nyhzr硬化ol":"硬化",
            "nyhzr蛛壳硬化ol":"蛛壳硬化",
            "nyhzr蛛壳硬化ol_info":"出牌阶段，你可以硬化自己的壳,使你完全免疫下一次的伤害，使用后删除此技能",
            "rnyhzr幽影之蜕ol":"幽影之蜕",
            "rnyhzr幽影之蜕ol_info":"当你受到伤害后，你可以转化为蜘蛛形态，失去技能【女皇神威】，获得技能【蛛壳硬化】",
            "znyhzr幽影之蜕ol":"幽影之蜕",
            "znyhzr幽影之蜕ol_info":"当你受到伤害后，你可以转化为人类形态，失去技能【蛛壳硬化】，获得技能【女皇神威】",
            "nyhzr血虐暴风ol":"血虐暴风",
            "nyhzr血虐暴风ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每当你造成伤害后，若被伤害者体力值为0，你获得一点体力上限；若自身体力值为0，被伤害者流失一点体力<br>技能【歃血为神】在自身满血时可以过量恢复，溢出的恢复值转化为护盾值",
            "nyhzr歃血为神ol":"歃血为神",
            "nyhzr歃血为神ol_info":"当你造成伤害后，你可以选择弃一张牌并恢复一点体力或者将将现有体力转化为护盾值",
			"nyhzr歃血为神ol_append":"注：<br>体力值为零时受到任何伤害，会进入濒死阶段",
            "nyhzr逐阳之弓ol":"逐阳之弓",
            "nyhzr逐阳之弓ol_info":"当你使用杀前，你可以选择使用燎火之箭或穿云箭上弦",
			"nyhzr逐阳之弓ol_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>手持弓的你进攻距离+1<br><br>燎火之箭：当你造成伤害时，伤害属性变为火属性并弃置对方装备区内的所有牌<br><br>穿云箭：你使用的杀无视对方防具<br><br>注：<br>燎火之箭不触发藤甲增加伤害效果",
            "nyhzr颠倒灵魂ol":"颠倒灵魂",
            "nyhzr颠倒灵魂ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你摸牌时，若弃牌堆牌数大于或等于摸牌数，你取消之并从弃牌堆中获得等量的牌，若你以此法获得一张【无中生有】或【增兵减灶】，你弃置一张手牌<br>当你弃置牌时，你取消之并将需要弃置的牌置于牌堆顶",
            "nyhzr困兽之斗ol":"困兽之斗",
            "nyhzr困兽之斗ol_info":"回合结束阶段，你可以弃置除你以外的角色装备区内的防御马和进攻马，若你以此法弃置防御马和进攻马，你可以视为对一名目标使用X张【南蛮入侵】（X为你以此法弃置的防御马和进攻马的数目总和）",
            "nyhzr永恒之斩ol":"永恒之斩",
            "nyhzr永恒之斩ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你造成伤害时，若目标体力值等于其体力上限，你取消伤害伤害效果，然后目标失去一点体力上限若目标体力值不等于其体力上限，否则目标手牌上限-1",
			"nyhzr永恒之斩ol_append":"注：<br>若一名角色因【永恒之斩】而造成手牌上限减少，其恢复体力后，手牌上限+1",
            "nyhzr仙荷甘露ol":"仙荷甘露",
            "nyhzr仙荷甘露ol_info":"出牌阶段，你可以弃置不同类型的牌，令所有角色摸X张牌（X为你的弃牌数），若弃牌数大于或等于二且【凤求凰】处于封印状态，你恢复一点体力并解除【凤求凰】的封印",
            "nyhzr凤求凰ol":"凤求凰",
            "nyhzr凤求凰ol_info":"当你需要响应牌前，你可以选择一名角色，将其手牌区中的一张牌视为响应牌打出，使用后封印此技能",
			"nyhzr凤求凰ol_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>【凤求凰】的初始状态为封印状态",
            "nyhzr火球术ol":"火球术",
            "nyhzr火球术ol_info":"回合结束后，若你的手牌数大于或等于二，你弃置两张手牌并随机展示一名角色的手牌，若目标手牌中有【杀】，你获得之，若没有，你对其造成一点火属性伤害并令其获得一个火种",
            "nyhzr火之箭矢ol":"火之箭矢",
            "nyhzr火之箭矢ol_info":"回合开始前，若你手牌中有【杀】，你可以选择一名除自己以外的角色，令其获得一个火种并将一张【杀】转化为【火杀】对其使用",
			"nyhzr火之箭矢ol_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每当你使用牌指定拥有火种的目标时，你引燃目标一个火种，令其弃置一张手牌（若目标没有手牌则不引燃）",
            "nyhzr液态火ol":"液态火",
            "nyhzr液态火ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你造成伤害后，若你装备区内有武器牌，目标受到一次没有伤害来源的火属性伤害",
            "nyhzr元素转化ol":"元素转化",
            "nyhzr元素转化ol_info":"当一名角色受到大于零的伤害前，你可以转化伤害属性为火，雷，无三种属性之一",
            "nyhzr炎阳胄ol":"炎阳胄",
            "nyhzr炎阳胄ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你受到伤害后，你翻面",
            "nyhzr炎阳胄ol_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动（特）：</span><li>你为双面武将，当你翻面时，你转换形态并获得技能【不灭之炎】（回合开始前，你进行一次判定，若为红色，你恢复一点体力，否则你摸一张牌）继续战斗<li>当你变回初始形态时，你失去技能【不灭之炎】（国战模式下，你首次明置金乌时，被动（特）无法发动）",
            "nyhzr业火ol":"业火",
            "nyhzr业火ol_info":"当你使用【杀】时，你可以令目标打出一张额外的【杀】来响应你的【杀】",
            "nyhzr不灭之炎ol":"不灭之炎",
            "nyhzr不灭之炎ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始前，你进行一次判定，若判定结果为红色，你恢复一点体力，否则你摸一张牌",
            "nyhzr善恶天秤ol":"善恶天秤",
            "nyhzr善恶天秤ol_info":"出牌阶段，你可以弃置X张手牌（X不能小于2）并选择一个目标，目标随机被判断X次，若为善，获得祝福，若为恶，获得诅咒，每回合限一次",
			"nyhzr善恶天秤ol_append":"注：<br>弃置的手牌中红色牌越多，判定为善的几率越大;黑牌越多，判定为恶的几率越大",
            "nyhzr冰裂龟甲ol":"冰裂龟甲",
            "nyhzr冰裂龟甲ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你成为卡牌的唯一目标时，你进行一次判定，若判定结果为<span style=\"color:red\">♥︎</span>，你的下家会成为卡牌的额外目标，为<span style=\"color:red\">♦︎</span>,所有人都会成为卡牌的额外目标，为<span style=\"color:black\">♠︎</span>，你弃置一张手牌，为<span style=\"color:black\">♣︎</span>，使对方的卡牌失效",
			"nyhzr冰裂龟甲ol_append":"注：<br>若触发【龟甲】的卡牌为延时性锦囊牌且有额外目标，则只有最后一个额外目标成为目标",
            "nyhzr时光缓行ol":"时光缓行",
            "nyhzr时光缓行ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你受到伤害后，你进行一次判定，若判定结果为红色，伤害来源的回合结束后，你执行一个额外的回合，若为黑色，伤害来源失去所有技能直至其回合开始前",
            "nyhzr魔能法球ol":"魔能法球",
            "nyhzr魔能法球ol_info":"出牌阶段，你可以展示自己的手牌，随机展示一名角色的手牌，若随机目标的手牌中有【闪】，视为你对其使用一张不计入回合次数的【杀】，每回合限一次",
            "nyhzr乌龙茶灵ol":"乌龙茶灵",
            "nyhzr乌龙茶灵ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你需要【杀】或【闪】响应对方时，进行一次判定,若判定结果类型不为基本牌，视为你响应了该卡牌",
            "nyhzr树灵爆发ol":"树灵爆发",
            "nyhzr树灵爆发ol_info":"出牌阶段，若你装备区内没有防具，你可以摸一张牌，视为对自己使用一张不计入回合次数的【杀】，每回合限一次",
            "nyhzr树灵爆发ol_append":"注：<br>当你装备区内有防具时，你也可以使用【树灵爆发】",
            "nyhzr大地护盾ol":"大地护盾",
            "nyhzr大地护盾ol_info":"当一名体力小于或等于3且不为你的角色受到有伤害来源的伤害时，你可以流失一点体力并使伤害效果消失，若此做，你可以令一名非伤害来源的角色获得一点护甲，否则视为对伤害来源使用一张【南蛮入侵】",
            "nyhzr多变之水ol":"多变之水",
            "nyhzr多变之水ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你受到伤害后，你获得技能【凝水之盾】，失去技能【泯灭水球】<br>当你造成伤害后，你获得技能【泯灭水球】，失去技能【凝水之盾】",
			"nyhzr多变之水ol_append":"凝水之盾：当你受到有伤害来源的伤害前，若你与伤害来源都有手牌，你与伤害来源各展示一张手牌（伤害来源随机展示），若展示的手牌的颜色相同，伤害效果消失，否则你摸一张牌<br><br>泯灭水球：当你造成伤害前，你令目标选择一种花色，然后你展示牌顶的一张牌，若目标选择的花色与此牌的花色相同，造成的伤害+1，否则你恢复一点体力",
            "nyhzr凝水之盾ol":"凝水之盾",
            "nyhzr凝水之盾ol_info":"当你受到有伤害来源的伤害前，若你与伤害来源都有手牌，你与伤害来源各展示一张手牌（伤害来源随机展示），若展示的手牌的颜色相同，伤害效果消失，否则你摸一张牌",
            "nyhzr泯灭水球ol":"泯灭水球",
            "nyhzr泯灭水球ol_info":"泯灭水球：当你造成伤害前，你令目标选择一种花色，然后你展示牌顶的一张牌，若目标选择的花色与此牌的花色相同，造成的伤害+1，否则你恢复一点体力",
            "nyhzr生命凋零ol":"生命凋零",
            "nyhzr生命凋零ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>所有角色无法发动时机为<br>“判定阶段”、<br>“摸牌阶段”、<br>“出牌阶段”、<br>“弃牌阶段”、<br>“造成伤害”、<br>“受到伤害”、<br>“恢复体力”、<br>“流失体力”、<br>“弃牌”、<br>“失去牌”、<br>“摸牌”、<br>“获得牌”<br>的触发类技能",
            "nyhzr无尽恐惧ol":"无尽恐惧",
            "nyhzr无尽恐惧ol_info":"当一名角色死亡后，你可以恢复一点体力并选择一名其他角色并令其翻面，若你没有选择其他角色，你摸一张牌",
            "nyhzr鬼雄ol":"鬼雄",
            "nyhzr鬼雄ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>每四个回合开始时，你进入一次鬼雄状态",
            "nyhzr鬼雄ol_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>当你受到伤害时，若你处于鬼雄状态，你使伤害效果消失，若你没有处于鬼雄状态且伤害来源有手牌，你展示牌堆顶的两张牌，若展示的牌的点数之和大于或等于十，你选择伤害来源的一张手牌并弃置之",
            "nyhzr天从云ol":"天从云",
            "nyhzr天从云ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你造成伤害时，伤害概率+1，否则你的手牌上限+1",
            "nyhzr天从云ol_append":"注：<br>概率为：1-(X*Y/1000)<br>X为存活人数<br>Y为10-100内一个随机数",
            "nyhzr腐肉吸噬ol1":"腐肉吸噬",
            "nyhzr腐肉吸噬ol":"腐肉吸噬",
            "nyhzr腐肉吸噬ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合结束后，若你的体力值大于手牌数，你展示X张牌（X为你的体力值与手牌数的差），若其中有黑色牌，你选择恢复一点体力或摸Y张牌（Y为其中的黑牌数），若你选择的选项为摸Y张牌，下个回合的出牌阶段，你使用卡牌时，若与上次使用的卡牌花色不同，你摸一张牌",
            "nyhzr腐肉吸噬ol_append":"注：<br>回合结束后上次使用卡牌的记录不会消失。没有选择摸Y张牌后一个出牌阶段，卡牌不记录",
            "nyhzr三尖两刃戟ol":"三尖两刃戟",
            "nyhzr三尖两刃戟ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你的进攻距离+X，你的【杀】可以额外指定X个目标（X为你的【戟】标记数量+1）<br>结束阶段，你清空【戟】标记",
            "nyhzr通天法眼ol":"通天法眼",
            "nyhzr通天法眼ol_info":"回合开始时，你可以观看一名其他角色的手牌，若其手牌中每有一种花色，你获得一个【戟】标记，若其手牌中方块牌数量大于或等于2，你潜行至下个回合开始前；若其手牌中红桃牌数量大于或等于2，你恢复一点体力；若其手牌中梅花牌数量大于或等于2，其弃置一张手牌；若其手牌中黑桃牌数量大于或等于2，你对其造成一点伤害；若其手牌中没有相同花色的牌，你摸一张牌",
            "nyhzr神圣审判ol":"神圣审判",
            "nyhzr神圣审判ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>身份模式下，当你的杀造成伤害后，你令目标选择：<br>1.说出自己的身份<br>2.流失一点体力",
            "nyhzr圣光护盾ol1":"圣光护盾",
            "nyhzr圣光护盾ol":"圣光护盾",
            "nyhzr圣光护盾ol_info":"出牌阶段，若你没有护甲，你可以弃置一张手牌并选择一名其他角色，该角色获得你的庇护，然后你获得一点护甲<br>当该角色受到伤害后，庇护消失",
			"nyhzr圣光护盾ol_append":"注：<br>当获得你庇护的玩家成为【杀】的目标时，若你有护甲且该【杀】的使用者不为你，【杀】的目标改为你",
            "nyhzr移形换影ol":"移形换影",
            "nyhzr移形换影ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你成为【杀】的目标前，你可以进行一次判定，若判定结果为黑色且有角色与你的距离在二以内，这些角色中的随机一个成为此【杀】的目标；若判定结果为黑色但没有角色与你的距离在二以内，则取消此【杀】的效果",
            "nyhzr电光火石ol1":"电光火石",
            "nyhzr电光火石ol":"电光火石",
            "nyhzr电光火石ol_info":"出牌阶段，你可以将两张【杀】视为一张没有花色且没有使用距离限制的雷属性【杀】打出，若如此做，此【杀】不可闪避且不计入使用次数",
            "nyhzr高速格林炮ol1":"高速格林炮",
            "_nyhzr高速格林炮ol1":"高速格林炮",
            "nyhzr高速格林炮ol":"高速格林炮",
            "nyhzr高速格林炮ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>出牌阶段，你首次使用【杀】后，视为对此次【杀】的目标使用两张额外的【杀】，使用额外的【杀】前，你进行一次判定，若判定结果为黑色，此【杀】失去目标<br>出牌阶段，你使用的【杀】没有数量限制",
            "nyhzr穿刺射击ol":"穿刺射击",
            "nyhzr穿刺射击ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>出牌阶段，若你已经发动技能【高速格林炮】，你使用的【杀】无视目标防具",
            "nyhzr乱世听凤ol":"乱世听凤",
            "nyhzr乱世听凤ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>游戏开始时，你记住场上所有的限定技<br>出牌阶段，你可以选择一项你记住的限定技恢复之，若恢复成功，你流失一点体力",
            "nyhzr乱世听凤ol_append":"注：<br>联机模式下，由主机选择需要恢复的限定技",
            "nyhzr凤羽踏歌ol":"凤羽踏歌",
            "nyhzr凤羽踏歌ol_info":"限定技，出牌阶段，你可以弃置三张不同类型的牌，复活所有已阵亡角色并令其恢复体力至体力上限，若如此做，你恢复一点体力",
            "nyhzr战争惧刃ol":"战争惧刃",
            "nyhzr战争惧刃ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始阶段，你记录并删除其他存活角色技能叙述中含“杀”的技能（不含装备技能）<br>回合开始阶段，你随机获得一项你记录的技能直至你的回合开始前，若你没有记录技能，你摸一张牌",
            "nyhzr圣光法球ol":"圣光法球",
            "nyhzr圣光法球ol_info":"其他角色的回合结束阶段，你可以弃置一张手牌并令其执行一个额外的摸牌阶段",
            "nyhzr欲望灾火ol":"欲望灾火",
            "nyhzr欲望灾火ol_info":"出牌阶段，你可以指定两名角色，若指定的角色没有手牌，其摸一张牌，然后指定的角色进行拼点，获胜的一方视为对失败的一方使用一张不计入使用次数的火属性【杀】，若指定的两名角色势力不同，你摸一张牌，每回合限一次",
            "nyhzr生存本能ol1":"生存本能",
            "nyhzr生存本能ol":"生存本能",
            "nyhzr生存本能ol_info":"当你受到伤害后，你令下一张【杀】不可被闪避，然后你可以对伤害来源使用一张【杀】",
			"nyhzr生存本能ol_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>若你已受伤且没有手牌时，你不能成为卡牌目标",
            "nyhzr毁灭蛊箭ol":"毁灭蛊箭",
            "nyhzr毁灭蛊箭ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>出牌阶段，你使用【杀】前进行一次判定，若判定结果为红色，此【杀】不计入使用次数，若判定结果为黑色，此【杀】不可闪避",
            "nyhzr千叶斩ol":"千叶斩",
            "nyhzr千叶斩ol_info":"出牌阶段，若你的手牌数大于你的体力值+1，你可以在牌堆中获得一张【杀】并使用，此【杀】不计入使用次数，结算后，你弃置一张手牌。若你弃置手牌后，手牌数依然大于体力值+1，你再使用一次【千叶斩】",
            "nyhzr幻之分身2ol":"幻之分身",
            "nyhzr幻之分身ol":"幻之分身",
            "nyhzr幻之分身ol_info":"当你受到伤害时，你可以创造分身来取消伤害效果<br>出牌阶段，你可以创造分身，当你使用【千叶斩】时可以无条件地额外使用一张【杀】，此【杀】结算后，你获得随机的正面效果",
			"nyhzr幻之分身ol_append":"注：<br>创造分身须消耗一点体力",
            "nyhzr地狱之躯ol":"地狱之躯",
            "nyhzr地狱之躯ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你不能成为装备区内有武器的角色的【杀】的目标<br>当其他角色装备武器后，你可以恢复一点体力并摸一张牌，若如此做，其使用【杀】时，无视【地狱之躯】，每个角色限一次",
            "nyhzr神圣对决ol3":"神圣对决",
            "nyhzr神圣对决ol2":"神圣对决",
            "nyhzr神圣对决ol1":"神圣对决",
            "nyhzr神圣对决ol0":"神圣对决",
            "nyhzr神圣对决ol":"神圣对决",
            "nyhzr神圣对决ol_info":"出牌阶段，你可以选择神圣对决的目标与神圣对决的持续时间，若如此做，你与目标各摸一张牌，然后开始神圣对决",
            "nyhzr神圣对决ol_append":"当你处于神圣对决状态下，你无法使用【神圣对决】<br><br>对决奖励：<br>直至某一方受伤：<li>伤害来源造成的伤害+1<br>直至某一方死亡：<li>伤害来源造成的伤害+1<li>伤害来源获得两点护甲<br>直至你的回合开始：<li>参与对决的角色摸一张牌",
            "nyhzr爆头ol":"爆头",
            "nyhzr爆头ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你造成伤害后，你展示牌顶的一张牌，若此牌的颜色和点数与你武将牌上的一张牌一致时，目标死亡，否则将这张牌置于你的武将牌上",
            "nyhzr黑桃暗杀ol1":"黑桃暗杀",
            "nyhzr黑桃暗杀ol":"黑桃暗杀",
            "nyhzr黑桃暗杀ol_info":"限定技，出牌阶段，你可以将手牌的复制牌置于你的武将牌上，在接下来的30秒内，你无法成为其他角色的卡牌与指定性技能的目标，但你没有回合且无法使用或打出任何牌，30秒结束后，你可以对一名角色造成一点伤害",
            "nyhzr代天罚恶ol":"代天罚恶",
            "nyhzr代天罚恶ol_info":"回合结束阶段，你可以指定一名其他角色，然后你进行一次判定，若为红色牌你获得之，反之对方获得之，若判定牌为【杀】或【南蛮入侵】或【万箭齐发】，获得此牌的角色对对方使用此牌",
            "nyhzr太阳之子ol1":"太阳之子",
            "nyhzr太阳之子ol2":"太阳之子",
            "nyhzr太阳之子ol3":"太阳之子",
            "nyhzr太阳之子ol4":"太阳之子",
            "nyhzr太阳之子ol":"太阳之子",
            "nyhzr太阳之子ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你可以调整执行阶段的顺序<br>你不能成为【过河拆桥】的目标",
            "nyhzr太阳之子ol_append":"注：<br>死神在场时，你只能执行一个阶段<br>阶段包括判定阶段、摸牌阶段、出牌阶段和弃牌阶段",
            "nyhzr怒战八方ol":"怒战八方",
            "nyhzr怒战八方ol_info":"你的回合外，当其他角色使用基本牌或非延时性锦囊牌时，你可以弃置一张与此牌花色相同的手牌并使此牌失效，若弃置的牌颜色为黑色，你摸一张牌，否则视为你对此牌的使用者使用一张杀",
            "nyhzr所向披靡ol2":"所向披靡",
            "nyhzr所向披靡ol1":"所向披靡",
			"nyhzr所向披靡ol":"所向披靡",
            "nyhzr所向披靡ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你因【怒战八方】获得牌时，你可以选择一项：<li>令一名角色摸牌<li>弃置一名其他角色装备区内的装备牌",
            "nyhzr追魂剑ol":"追魂剑",
            "nyhzr追魂剑ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你的【杀】命中时，目标获得一个追魂印记",
            "nyhzr追魂剑ol_append":"注：<br>当一名角色的追魂印记：<li>大于或等于一时，该角色无法恢复体力<li>大于或等于二时，受到伤害后，拥有技能【追魂剑】的角色摸一张牌<li>大于或等于三时，受到伤害后，该角色弃置手牌区与装备区内的所有牌<li>大于或等于四时，受到伤害后，该角色死亡",
            "nyhzr七十二变ol":"七十二变",
            "nyhzr七十二变ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始阶段，你可以选择摸一张牌或随机获得场上其他角色的一个技能，选择后，消耗一个【七十二变】印记，若【七十二变】印记大于零，你再次进行选择<br>回合开始阶段前，你还原自身技能",
            "nyhzr七十二变ol_append":"注：<br>【七十二变】印记的初始数量为二，还原后为零",
            "nyhzr火眼金睛ol":"火眼金睛",
            "nyhzr火眼金睛ol_info":"出牌阶段前，你可以观看一名其他角色的手牌，若其手牌中有【杀】，你获得X个【七十二变】印记（X为目标手牌中【杀】的数量），否则你摸一张牌",
            "nyhzr战火盾甲ol":"战火盾甲",
            "nyhzr战火盾甲ol_info":"当你受到伤害后，你可以选择一种颜色，然后展示伤害来源的一张手牌，若该牌与你所选颜色相同，你弃置之并重复此流程，直到展示牌与你所选颜色不同为止",
            "nyhzr束缚搏击ol":"束缚搏击",
            "nyhzr束缚搏击ol_info":"出牌阶段，你可以将一张锦囊牌当【决斗】使用",
            "nyhzr弹药填装ol":"弹药填装",
            "nyhzr弹药填装ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合结束后，你摸两张牌，由随机一名角色与你拼点，若该角色没有手牌，其摸一张牌，若你赢，你获得X个炮弹（X为拼点数差除以五），若你输，检测其对你的态度，若态度好，其给予你一个炮弹，若不好，你对其造成一点火属性伤害",
            "nyhzr高距炮弹ol":"高距炮弹",
            "nyhzr高距炮弹ol_info":"出牌阶段，你可以消耗一个炮弹并选择一个目标，若如此做，视为你对目标使用一张不计入使用次数的火属性【杀】",
            "nyhzr九命妖尾ol":"九命妖尾",
            "nyhzr九命妖尾ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始前，若你已受伤，你展示牌堆顶的一张牌，若展示的牌点数大于或等于九，你恢复一点体力，否则使用技能【勾魂大法】，以此法使用技能【勾魂大法】不计入使用次数",
            "nyhzr勾魂大法ol1":"勾魂大法",
            "nyhzr勾魂大法ol":"勾魂大法",
            "nyhzr勾魂大法ol_info":"出牌阶段，你可以获得场上男性的一张手牌，每次以此法获得牌后，你选择一项：<br>1.弃置一张手牌<br>2.将一张牌复制并交给所有其他角色<br>，每回合限一次",
            "nyhzr宿敌之剑ol":"宿敌之剑",
            "nyhzr宿敌之剑ol_info":"出牌阶段，你可以弃置一张【杀】并指定一名其他角色，该角色弃置一张【杀】，若不弃，该角色选择一项：1.流失一点体力；2.弃置两张手牌，否则，视为你对该角色使用一张【决斗】，以此法进行决斗后，若你的体力值小于三，你摸一张牌，每回合限一次",
            "nyhzr追袭ol":"追袭",
            "nyhzr追袭ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你的进攻距离+X（X为你已损失的生命值）",
            "nyhzr追袭ol_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你使用牌前，若攻击范围：<li>小于二，你获得【飞影】<li>等于二，你获得【贯石】<li>大于二，你获得【青釭】<br>每当你以此法获得技能时，会删除前一个以此法获得的技能",
            "nyhzr射月ol":"射月",
            "nyhzr射月ol_info":"出牌阶段，你可以视为对你攻击范围内的其他角色使用一张不计入使用次数的【杀】，若如此做，本回合内，你的进攻距离-1",
            "nyhzr连年有余ol":"连年有余",
            "nyhzr连年有余ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合开始前，你获得你装备区内的所有牌<br>当你弃牌后，你可以将弃置的第一张牌转化为装备牌并装备之，若弃牌数大于一，你摸X张牌（X为弃牌数）",
            "nyhzr连年有余ol_append":"注：<br>因【连年有余】变为装备牌的仅用于响应的牌无法使用<br>因【连年有余】变为装备牌的【杀】和【酒】不计入使用次数<br>联机模式下，不触发【连年有余】转化类型并装备效果",
            "nyhzr定时爆竹ol":"定时爆竹",
            "nyhzr定时爆竹ol_info":"回合结束后，你可以弃置你装备区内的一张牌，若如此做，10秒后，视为你对所有角色使用一张不计入使用次数的火属性【杀】",
            "nyhzr定时爆竹ol_append":"注：<br>因【定时爆竹】弃置的牌不会触发【连年有余】<br>联机模式下，【定时爆竹】弃置装备区内的一张牌变为弃置手牌区内的一张牌",
			"nyhzr隐匿·胧ol":"隐匿·胧",
            "nyhzr隐匿·胧ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动（特）：</span><br>你触发的任何事件都不会显示拖拽线，每当你触发隐藏拖拽线效果大于或等于五次时，你潜行直至你的回合开始前并清空触发次数",
			"nyhzr幕府利刃ol":"幕府利刃",
            "nyhzr幕府利刃ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你使用的【杀】，【南蛮入侵】和【万箭齐发】可以指定X个目标（X为回合内使用【杀】的数量）<br>出牌阶段，你使用的【杀】无数量限制<br>当你于回合内使用牌后，若该回合内你已经使用与之同名的卡牌达三张或更多时，你摸一张牌，每回合限三次",
            "nyhzr幕府利刃ol_append":"注：<br>因【千叶斩】使用的【杀】不计入【幕府利刃】",
			"nyhzr颠覆之海ol":"颠覆之海",
            "nyhzr颠覆之海ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动（特）：</span><br>当你流失体力时，视为对自己使用一张【杀】并取消流失体力<br>当你翻面时,你弃置一张手牌（没有则不弃）并取消翻面",
			"nyhzr银箭ol":"银箭",
            "nyhzr银箭ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>燎火之箭转化后的属性变为雷属性<br>当你造成雷属性伤害时，你随机复制目标一项技能",
			"nyhzr黄金之翼ol":"黄金之翼",
            "nyhzr黄金之翼ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>其他角色造成的伤害均视为由你造成<br>你造成的伤害均视为火属性伤害<br>当你造成伤害时，你与目标交换座位",
            "nyhzr逐阳之弓ol1":"逐阳之弓",
            "nyhzr逐阳之弓ol1_info":"当你造成伤害后，你可以令目标弃置所有区域内与造成伤害的牌的点数的绝对值不大于二的牌",
			"nyhzr逐阳之弓ol1_append":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>你的进攻距离+1",
			},
                };
                return nyhzrlj;
            });
            lib.config.all.characters.push('nyhzrlj');
            if(!lib.config.characters.contains('nyhzrlj')){
                lib.config.characters.push('nyhzrlj');
            }
            lib.translate['nyhzrlj_character_config'] = '<span style=\"font-size:18px;font-weight:600\">英魂之刃联机</span>';
            game.import('character',function(){
                var zombie={
                    name:'zombie',
                    connect:true,
                    character:{
                        jiangshifz:["male","qun",5,["xunmeng","zaibian","ganran","wansha","paoxiao"],["ext:新英魂之刃/jiangshifz.jpg","forbidai","des:僵尸模式配套武将"]],
                        jiangshinj:["male","qun",3,["baozou","wansha","xueji","shishi","ganran"],["ext:新英魂之刃/jiangshinj.jpg","forbidai","des:僵尸模式配套武将"]],
                    },
                    skill:{
baozou:{
    mod:{
        cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
    },
    ai:{
        unequip:true,
        skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
    },
},
            shishi:{
				trigger:{source:'dieAfter'},
				forced:true,
				content:function(){
					player.gainMaxHp(1);
					player.recover();
				}
			},
            xunmeng:{
				trigger:{source:'damageBegin'},
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
				},
				forced:true,
				content:function(){
					trigger.num++;
					if(player.hp>1) player.loseHp();
				}
			},
            zaibian:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return get.population('zhong')-get.population('fan')-get.population('nei')+2>0;
				},
				forced:true,
				content:function(){
					var num=get.population('zhong')-get.population('fan')-get.population('nei')+2;
					player.draw(num);
				}
			},
			ganran:{
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardRespondable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardSavable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
				},
				enable:['chooseToUse'],
				filterCard:{type:'equip'},
				viewAsFilter:function(player){
					return player.num('h',{type:'equip'})>0;
				},
				viewAs:{name:'tiesuo'},
				check:function(){return 1},
				group:'ganran2',
				ai:{
					order:4,
					useful:-1,
					value:-1
				}
			},
			ganran2:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.num('h',{type:'equip'})>0;
				},
				filterCard:{type:'equip'},
				prepare:function(cards,player){
					player.$throw(cards,1000);
				},
				discard:false,
				delay:0.5,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					for(var i=0;i<cards.length;i++){
						ui.discardPile.appendChild(cards[i]);
					}
				},
				ai:{
					order:3.5,
					result:{
						player:1
					}
				}
			},

		},
                    translate:{
                        jiangshifz:'僵尸',
                        jiangshinj:'僵尸',
                        baozou:'暴走',
                        baozou_info:' 锁定技，出牌阶段，你可以使用任意数量的【杀】。 ',
                        shishi:'噬尸',
                        shishi_info:' 锁定技，当你杀死一名角色后，你获得一点体力上限并回复一点体力。 ',
                        xunmeng:'迅猛',
                        xunmeng_info:' 锁定技，你的杀造成的伤害+1。你的杀造成伤害时，若你体力大于1，你流失1点体力。 ',
                        zaibian:'灾变',
                        zaibian_info:' 锁定技，你的出牌阶段开始时，若人类玩家数-僵尸玩家数+1大于0，则你摸取该数目的牌。 ' ,
                        ganran:'感染',
                        ganran_info:' 锁定技，你的装备牌都视为铁锁连环',
                        ganran2:'感染·重铸',
                    },
                };
                return zombie;
            });
            lib.config.all.characters.push('zombie');
            if(!lib.config.characters.contains('zombie')){
                lib.config.characters.push('zombie');
            }
            lib.translate['zombie_character_config'] ='僵尸';
		};
			lib.group.push('jin');
			lib.translate.jin='×';
			lib.group.push('li');
			lib.translate.li='<span style="color:red;font-size:22px">力</span>';
			lib.group.push('min');
			lib.translate.min='<span style="color:#03E041;font-size:22px">敏</span>';
			lib.group.push('zhi');
			lib.translate.zhi='<span style="color:#69DFFF;font-size:22px">智</span>';
			lib.mode.identity.connect.connect_identity_mode={
				name:'游戏模式',
				init:'normal',
				item:{
					normal:'标准',
					zhong:'明忠',
					zombie:'僵尸',
					strong:'强兵'
				},
				restart:true,
				frequent:true,
				intro:'明忠详见帮助<br>僵尸详见僵尸模式<br>强兵详见兵精粮足'
			};
			lib.skill._zombieSupport={
				trigger:{global:'gameStart'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return true;
				},
				content:function(){
					game.zhu.storage.fzjsNumber=0;
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].turnOver=function(all){};
							if(game.players[i]!=game.zhu){
								game.players[i].identity='zhong';
							};
							game.players[i].setIdentity(game.players[i].identity);
						};
					});
					game.swapSeat=function(all){};
				},
			};
			lib.skill._jisuangailv={
				trigger:{global:'phaseAfter'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player==game.zhu&&game.zhu.storage._tuizhi==2;
				},
				content:function(){
					if(game.zhu.storage.jisuangailv==undefined) game.zhu.storage.jisuangailv=0;
					game.zhu.storage.jisuangailv++;
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi={
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:10,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player==game.zhu;
				},
				content:function(){
					if(player.storage._tuizhi==undefined) player.storage._tuizhi=0;
					player.storage._tuizhi++;
					player.markSkill('_tuizhi');
					player.syncStorage('_tuizhi');
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi2={
				skillAnimation:'epic',
				animationStr:'人类胜利',
				animationColor:'metal',
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:5,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return game.zhu.storage._tuizhi>=8;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='fan'||game.players[i].identity=='nei') game.players[i].die();
					};
				}
			};
			lib.skill._jiangshi={
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='zhong';
				},
				content:function(){
					if(player.storage.fzjs==0){
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						game.broadcastAll(function(player){
							player.uninit;
							player.init(player.name,'jiangshifz');
						},player);
						player.maxHp=5;
						player.hp=player.maxHp;
						game.broadcastAll(function(player){
							player.identity='fan';
						},player);
					}else{
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						game.broadcastAll(function(player){
							player.uninit;
							player.init(player.name,'jiangshinj');
						},player);
						player.hp=player.maxHp;
						game.broadcastAll(function(player){
							player.identity='nei';
						},player);
					};
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].setIdentity(game.players[i].identity);
						};
					});
					trigger.untrigger();
					trigger.finish();
				}
			};
			lib.skill._jiangshi2={
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				silent:true,
				priority:15,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					if(game.players.length<=6) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>6&&game.players.length<=12) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*2/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>12&&game.players.length<=18) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*3/(game.players.length-1))-game.zhu.storage.fzjsNumber;
				},
				content:function(){
					player.die();
					game.broadcastAll(function(player){
						player.identity='zhong';
					},player);
					player.storage.fzjs=0;
					game.zhu.storage.fzjsNumber++;
				}
			}
			lib.skill._jiangshi3={
				trigger:{source:'dieBefore'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return (event.player.identity=='zhong'||event.player.identity=='nei')&&player.identity=='nei';
				},
				content:function(){
					game.broadcastAll(function(player){
						player.identity='fan';
					},player);
					game.broadcastAll(function(player){
						player.init(player.name,'jiangshifz');
					},player);
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].setIdentity(game.players[i].identity);
						};
					});
				},
			};
			lib.skill._jiangshi4={
				skillAnimation:'epic',
				animationStr:'主公阵亡',
				animationColor:'metal',
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.storage._tuizhi>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='zhong'){
							event.target=game.players[i];
							break;
						}
					}
					if(event.target){
						game.zhu.line(event.target,'thunder');
						game.log(game.zhu,'死亡',event.target,'成为了新的主公！');
						game.zhu=event.target;
						game.broadcastAll(function(player){
							player.identity='zhu';
						},event.target);
						event.target.gainMaxHp();
						event.target.recover();
						event.target.storage.fzjsNumber=player.storage.fzjsNumber;
						event.target.storage._tuizhi=player.storage._tuizhi-1;
						event.target.markSkill('_tuizhi');
						event.target.syncStorage('_tuizhi');
						game.broadcastAll(function(){
							for(var i=0;i<game.players.length;i++){
								game.players[i].setIdentity(game.players[i].identity);
							};
						});
					}
				}
			}
			lib.skill._jiangshiTx={
				skillAnimation:'epic',
				animationStr:'灵魂、献祭',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='zhong';
				},
				content:function(){
					game.log('灵魂、献祭');
				}
			};
			lib.skill._jiangshiTx2={
				audio:'jiangshidie',
				skillAnimation:'epic',
				animationStr:'僵尸、灭亡',
				animationColor:'thunder',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='fan'||player.identity=='nei';
				},
				content:function(){
					game.log('僵尸、灭亡');
				}
			};
			lib.skill._jiangshiTx3={
				skillAnimation:'epic',
				animationStr:'暗夜、降临',
				animationColor:'thunder',
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.storage._tuizhi==2&&player.storage.ayjljs!=0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].storage.ayjljs=0;
					};
					game.log('暗夜、降临');
				}
			}
			lib.skill._huzhu={
				enable:'phaseUse',
				usable:1,
				filterCard:function(card,player){
					return card.name=='tao';
				},
				filter:function(event,player){
					if(_status.mode!='zombie') return false;
					return player.identity=='zhong'||player.identity=='zhu';
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return get.distance(player,target)<=1&&target.isDamaged()&&(target.identity=='zhong'||target.identity=='zhu');
				},
				content:function(){
					player.useCard({name:'tao'},target)
				}
			}
			lib.translate._tuizhi='退治'
			lib.translate._tuizhi2='退治'
			lib.translate._jiangshi='僵尸'
			lib.translate._jiangshi2='僵尸'
			lib.translate._jiangshi3='僵尸'
			lib.translate._jiangshi4='僵尸'
			lib.translate._jiangshiTx='僵尸'
			lib.translate._jiangshiTx2='僵尸'
			lib.translate._jiangshiTx3='僵尸'
			lib.translate._huzhu='互助'
			lib.translate._huzhu_info='出牌阶段限一次，人类玩家可以弃置一张【桃】令距离一的人类玩家恢复一点体力'
			lib.skill._mopaishuzengjia={
				trigger:{
					player:"phaseDrawBegin",
				},
				forced:true,
				filter:function(event,player){
					return _status.mode=='strong';
				},
				content:function (){
					trigger.num++;
				},
			};
			lib.skill._chushashuzengjia={
				mod:{
					cardUsable:function (card,player,num){
						if(card.name=='sha'&&_status.mode=='strong') return num+1;
					},
				},
			};
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='9']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='2']{top:calc(100% / 3 - 70px);left:calc(85% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='3']{top:5px;left:calc(75% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='4']{top:0;left:calc(60% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='5']{top:0;left:calc(40% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='6']{top:5px;left:calc(25% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='7']{top:calc(100% / 3 - 70px);left:calc(15% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='8']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='11']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='4']{top:0;left:calc(77% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='5']{top:0;left:calc(59% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='6']{top:0;left:calc(41% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='7']{top:0;left:calc(23% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='8']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='9']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='10']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='12']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='4']{top:0;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='5']{top:0;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='6']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='7']{top:0;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='8']{top:0;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='9']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='10']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='11']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='13']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='4']{top:0;left:calc(83% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='5']{top:0;left:calc(69.8% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='6']{top:0;left:calc(56.6% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='7']{top:0;left:calc(43.4% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='8']{top:0;left:calc(30.2% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='9']{top:0;left:calc(17% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='10']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='11']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='12']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='14']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='5']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='6']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='7']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='8']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='9']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='10']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='11']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='12']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='13']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='15']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='5']{top:30px;left:calc(82.1% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='6']{top:5px;left:calc(69.25% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='7']{top:0;left:calc(56.4% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='8']{top:0;left:calc(43.55% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='9']{top:5px;left:calc(30.7% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='10']{top:30px;left:calc(17.85% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='11']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='12']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='13']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='14']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='16']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='5']{top:30px;left:calc(83.75% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='6']{top:20px;left:calc(72.5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='7']{top:5px;left:calc(61.25% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='8']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='9']{top:5px;left:calc(38.75% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='10']{top:20px;left:calc(27.5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='11']{top:30px;left:calc(16.25% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='12']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='13']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='14']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='15']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='17']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='2']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='3']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='4']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='5']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='6']{top:30px;left:calc(83.75% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='7']{top:20px;left:calc(72.5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='8']{top:5px;left:calc(61.25% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='9']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='10']{top:5px;left:calc(38.75% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='11']{top:20px;left:calc(27.5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='12']{top:30px;left:calc(16.25% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='13']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='14']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='15']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='16']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			lib.mode.identity.connect.connect_player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
			}
			lib.mode.guozhan.connect.connect_player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
			}
			lib.translate.unknown8='九号位';
			lib.translate.unknown9='十号位';
			lib.translate.unknown10='十一号位';
			lib.translate.unknown11='十二号位';
			lib.translate.unknown12='十三号位';
			if(get.mode()=='connect') lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			lib.mode.guozhan.connect.connect_guozhan_mode={
		        name:'游戏模式',
		        init:'normal',
		        item:{
					normal:'标准',
		            combine:'兼并'
		        },
		        frequent:true,
		        restart:true,
				intro:'兼并详见兼并模式'
			};
			lib.skill._combineSupport={
				trigger:{player:'phaseBefore'},
				forced:true,
				filter:function(event,player){
					if(_status.mode!='combine') return false;
					return player.storage.combineSupport!=0;
				},
				content:function(){
					game.broadcastAll(function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].group=get.cnNumber(i+1);
							game.players[i].identity=get.cnNumber(i+1);
							game.players[i]._group=get.cnNumber(i+1);
							game.players[i].storage.combineSupport=0;
							game.players[i].node.identity.firstChild.innerHTML='国';
//							game.players[i].node.identity.dataset.color='zhu';
						};
					});
				},
			};
			lib.skill._combine={
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
					if(_status.mode!='combine') return false;
                    return event.source&&event.source.isIn();
                },
                content:function (){
					game.log(trigger.source,'获得了',player.get('s',false,false));
					trigger.source.addSkill(player.get('s',false,false));
				},
            };
			if(lib.device&&get.mode()=='connect'){
				game.saveConfig('player_height','short');
				game.saveConfig('layout','long');
			};
		lib.arenaReady.push(function(){
			if(lib.device&&_status.connectMode){
				var zoom=function(num){
					var zoom=num;
					game.documentZoom=game.deviceZoom*zoom;
					document.documentElement.style.zoom=game.documentZoom;
				};
				zoom(0.8);
			};
		});
game.say1=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<500){
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
dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
dialog.style.top='calc(50% - 200px)';
setTimeout(function(){
dialog.delete();
},1500);
};
game.say2=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<500){
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
dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
dialog.style.top='calc(50% - 150px)';
setTimeout(function(){
dialog.delete();
},2000);
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
game.awakenShow=function(character,fontSize,colorCode,skillName){
if(lib.config.awakenShow==true&&Math.random()<=lib.config.awakenShowRandom){
game.broadcastAll(function(character,fontSize,colorCode,skillName){
game.pause();
var player=ui.create.player(null,true);
player.node.avatar.style.backgroundSize='cover';
player.node.avatar.setBackgroundImage('extension/新英魂之刃/'+character+'.jpg');
player.node.avatar.show();
player.style.left='calc(50% - 75px)';
player.style.top='175px';
player.node.count.remove();
player.node.hp.remove();
player.node.nameol.innerHTML='<span style=\"font-size:'+fontSize+'px;font-weight:600;color:'+colorCode+'\">'+skillName+'</span>';
player.style.transition='all 0.5s';
ui.window.appendChild(player);
setTimeout(function(){
player.delete();
game.resume();
},3400);
ui.window.showcaseinterval=setInterval(function(){
player.classList.add('zoomin2');
player.show();
setTimeout(function(){
player.hide();
},1500);
},1700);
},character,fontSize,colorCode,skillName)
}else{};
};
},help:{"皮肤解锁":"<li>血月会长：用拥有技能【血祭启示录】的武将在一局游戏中造成超过10点伤害（含10点），在此之后经过一个回合结束阶段即可解锁。<li>雪凝幻彩：联机比赛参赛者的奖品"},
config:{
	"tips1":{"name":"<span style=\"font-size:15.6px;font-weight:600\">增加人数后建议开启军争卡包，避免回合内摸牌过多导致平局出现</span><span style=\"font-size:14px\"><li>如果选项为全部增加，乱斗模式下的非本扩展的身份模式中人数不能大于8，否则无法游戏，选择+X选项可以解决<li>8人局以上，任何卡牌无法指定距离相隔4及以上的角色为目标<li>以下身份选项仅在非联机模式下生效<br></span>","clear":true,"nopointer":true,},
	"IncreasePlayerNumber":{"name":'增加人数',"init":'all',"item":{'0':'不增加','1':'+1','2':'+2','3':'+3','4':'+4','5':'+5','6':'+6','7':'+7','8':'+8','all':'全部增加'}},
	"nineMan":{"name":'九人场身份',"init":'1',"item":{'1':'三忠四反一内','2':'二忠四反二内','3':'四忠四反零内','4':'三忠五反零内'}},
	"tenMan":{"name":'十人场身份',"init":'1',"item":{'1':'三忠四反二内','2':'三忠五反一内','3':'四忠五反零内'}},
	"elevenMan":{"name":'十一人场身份',"init":'1',"item":{'1':'四忠五反一内','2':'三忠五反二内','3':'五忠五反零内','4':'四忠六反零内'}},
	"twelveMan":{"name":'十二人场身份',"init":'1',"item":{'1':'四忠五反二内','2':'四忠六反一内','3':'五忠六反零内'}},
	"thirteenMan":{"name":'十三人场身份',"init":'1',"item":{'1':'五忠六反一内','2':'四忠六反二内','3':'六忠六反零内','4':'五忠七反零内'}},
	"fourteenMan":{"name":'十四人场身份',"init":'1',"item":{'1':'五忠六反二内','2':'五忠七反一内','3':'六忠七反零内'}},
	"fifteenMan":{"name":'十五人场身份',"init":'1',"item":{'1':'六忠七反一内','2':'五忠七反二内','3':'七忠七反零内','4':'六忠八反零内'}},
	"SixteenMan":{"name":'十六人场身份',"init":'1',"item":{'1':'六忠七反二内','2':'六忠八反一内','3':'七忠八反零内'}},
//	"awakenShow":{"name":'特效',"init":true},
//	"awakenShowRandom":{"name":'特效出现概率',"init":'0.25',"item":{'0.1':'10%','0.25':'25%','0.5':'50%','0.75':'75%','1':'100%'},"intro":"拥有特效的技能的角色有◉司马懿"},
//	"tips2":{"name":"<span style=\"font-size:15.6px;font-weight:600\">特效重新设置后需要打开非联机模式来使设置内容被保存</span>","clear":true,"nopointer":true,},
	"Pifu":{"name":"技能皮肤","init":true,"intro":"拥有技能皮肤的武将有：咯哩咯哩，莉莉姆.提露埃拉，后羿，萨特，德古拉，时空猎人,龙骑士，艾迪兰，超能企鹅，宫本武藏"},
	"UseNew":{"name":"新版武将包皮肤","init":true,"intro":"拥有新版皮肤的武将有：咯哩咯哩，莉莉姆.提露埃拉，后羿，贞德，萨特，德古拉，狂徒，时空猎人,龙骑士，艾迪兰，布丁，超能企鹅，布鲁，宫本武藏"},
	"UsePifuNew":{"name":"新版技能皮肤皮肤","init":true,"intro":"拥有新版皮肤的皮肤有：幽梦魔灵，祈愿之星，屠戮魔影，炼狱魂印，毁灭之翼，血色传说，血月会长，强弩神射，幻影射手，皎月王侯，黄金之翼，强袭龙魂，暗翼骨龙，星河雷爆，逆时者，强殖妖斧，妙法仙灵，暗黑小魔星，花牌魔后，雪凝幻彩，星钻仙后，晶钻星使，伊娃，趣海先锋，夜叉胧，七海女王"},
	"NoUselessSkill":{"name":"关闭无用技能","init":true,"intro":"关闭称号技能与死亡配音技能"},
	"gongchengmoshi":{"name":"攻城模式","init":true},
	"jianbingmoshi":{"name":"兼并模式","init":true},
	"jiangshimoshi":{"name":"僵尸模式","init":true},
	"bingjingliangzu":{"name":"兵精粮足","init":true},
	"duorenduijue":{"name":"多人对决","init":true},
	"jilueduijue":{"name":"极略对决","init":true},
	"wujinmoshi":{"name":"无尽模式","init":true},
	"brawlPlayerNumber":{"name":'此扩展乱斗—身份乱斗人数',"init":'16',"item":{'2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','10':'10','11':'11','12':'12','13':'13','14':'14','15':'15','16':'16'}},
	"nyhzrChessBoss":{"name":"英魂之刃战棋","init":true,"intro":"设置英魂之刃战棋包"},
	"nyhzrBoss":{"name":"英魂之刃BOSS","init":true,"intro":"设置英魂之刃BOSS包"},
	"nyhzrlj":{"name":"<span style=\"font-size:13px;font-weight:600\">将英魂之刃联机武将设为禁用</span>","init":false,"intro":"将英魂之刃联机武将设为禁用"},
	"nyhzrbj":{"name":"编辑此扩展","clear":true,"onclick":function(){game.say1('禁止编辑')}},
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
            "nyhzr小僵尸dj":{
                nobracket:true,
                trigger:{
                    player:"phaseAfter",
                },
                filter:function (event,player){
					return player.storage.nyhzr小僵尸!=0;
				},
				forced:true,
                content:function (){
                    var fellow=game.addFellow(1,'nyhzr小僵尸');
                    fellow.style.left='calc(80%)';
                    fellow.style.top='calc(50%)';
                    fellow.classList.add('minskin');
                    fellow.side=player.side;
                    fellow.identity=player.identity;
                    if(fellow.identity=='zhu') fellow.identity='zhong';
                    fellow.setIdentity('小僵尸');
                    fellow.draw(4)
                    fellow.node.identity.dataset.color=fellow.identity;
					player.storage.nyhzr小僵尸=0;
                },
            },
            "_useCardLimit":{
			mode:['identity','guozhan','versus'],
    			mod:{
    				targetEnabled:function(card,player,target){
    					if(game.players.length+game.dead.length>8&&get.distance(player,target)>4) return false;
    				}
    			}
            },
            "_minskinSJ":{
			mode:['identity','guozhan','versus'],
trigger:{
global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
},
filter:function (event,player){
return game.players.length+game.dead.length>=14&&player&&player!=game.me&&!player.isUnseen(1)&&player.name2&&player.storage.STAVA2!=0;
},
forced:true,
content:function (){
player.storage.STAVA2=0;
player.setNickname=function(all){};
var avatar2=ui.create.div(function(){if(player.name2) ui.click.charactercard(player.name2,'')});
avatar2.style.height='40px';
avatar2.style.width='40px';
avatar2.style.borderRadius='40px';
avatar2.style.boxShadow='rgba(0, 0, 0, 0.2) 0 0 0 1px';
avatar2.style.left='-10px';
avatar2.style.top='77px';
avatar2.setBackground(player.name2,'character');
player.node.nameol.appendChild(avatar2);
setInterval(function(){avatar2.setBackground(player.name2,'character')},1000);
},
            },
            "_minskinSJ1":{
			mode:['identity','guozhan','versus'],
trigger:{
player:'dieBefore',
},
filter:function (event,player){
return game.players.length+game.dead.length>=14&&player&&player!=game.me&&player.isUnseen(1)&&player.name2&&player.storage.STAVA2!=0;
},
forced:true,
content:function (){
player.storage.STAVA2=0;
player.setNickname=function(all){};
var avatar2=ui.create.div(function(){if(player.name2) ui.click.charactercard(player.name2,'')});
avatar2.style.height='40px';
avatar2.style.width='40px';
avatar2.style.borderRadius='40px';
avatar2.style.boxShadow='rgba(0, 0, 0, 0.2) 0 0 0 1px';
avatar2.style.left='-10px';
avatar2.style.top='77px';
avatar2.setBackground(player.name2,'character');
player.node.nameol.appendChild(avatar2);
setInterval(function(){avatar2.setBackground(player.name2,'character')},1000);
},
            },
			"_minskinEquip":{
			mode:['identity','guozhan','versus'],
				mod:{
					cardEnabled:function(card,player){
						if(game.players.length+game.dead.length>=14&&player.isMin()&&!player.hasSkill('ganran')){
							if(get.type(card)=='equip') return true;
						}
					}
				}
			},
            "_minskinEquip1":{
			mode:['identity','guozhan','versus'],
trigger:{
player:"equipBefore",
},
filter:function (event,player){
return game.players.length+game.dead.length>=14;
},
forced:true,
content:function (){
if(player&&player!=game.me) player.classList.remove('minskin');
},
            },
            "_minskinEquip2":{
			mode:['identity','guozhan','versus'],
trigger:{
player:"equipAfter",
},
filter:function (event,player){
return game.players.length+game.dead.length>=14;
},
forced:true,
content:function (){
if(player&&player!=game.me) player.classList.add('minskin');
},
            },
            "_useMinskin":{
			mode:['identity','guozhan','versus'],
trigger:{
global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
},
filter:function (event,player){
return game.players.length+game.dead.length>=14&&player&&player!=game.me&&player.name2;
},
forced:true,
content:function (){
if(player) player.node.avatar2.remove();
},
            },
            "_useMinskin1":{
			mode:['identity','guozhan','versus'],
trigger:{
global:["gameStart","useCardAfter","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardAfter","phaseDiscardBegin","useSkillBefore","judgeBefore","judgeAfter"],
},
filter:function (event,player){
return game.players.length+game.dead.length>=14;
},
forced:true,
content:function (){
game.swapPlayer=function(all){};
game.swapControl=function(all){};
if(player&&player!=game.me){
player.classList.add('minskin');
};
},
            },
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
				mode:["identity"],
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
				popup:false,
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
        var list=target.getSkills();
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
        dialog.add(ui.create.div('placeholder'));
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
return player.num('h')>player.hp+1;
},
content:function (){
"step 0"
if(player.hasSkill('nyhzr勾玉魂刀')&&!player.hasSkill('nyhzr勾玉魂刀1')) player.addSkill('nyhzr勾玉魂刀1');
var qyzsha=get.cardPile(function(card){return card.name=='sha'});
if(qyzsha&&player.num('h')>player.hp+1&&target.hp>0){
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
animationColor:"thunder",
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
for(i=0;i<3;i++){
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
check:function(event,player){
if(player.hujia) return false;
if(event.source==player) return false;
return true;
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
            "nyhzr小僵尸dj":"小僵尸",
            "nyhzr小僵尸dj_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合结束阶段，若你没有召唤过小僵尸，你在左下角召唤一只小僵尸，势力与你相同（若你为主公，小僵尸则为忠臣）",
            "nyhzr黑暗中的剑客":"称号",
            "nyhzr黑暗中的剑客_info":"<b><p align=center><span class=\"bluetext\" style=\"color:#080808\">——黑暗中的剑客</span></b>",
            "nyhzr勾玉魂刀2":"勾玉魂刀",
            "nyhzr勾玉魂刀1":"勾玉魂刀",
            "nyhzr勾玉魂刀":"勾玉魂刀",
            "nyhzr勾玉魂刀_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>当你使用【千叶斩】造成伤害后，你封印目标的技能，持续至其回合末，自身获得随机的正面效果<br>当你使用【乱刃影舞】后，下一次造成的伤害时，你会恢复两点体力",
            "nyhzr千叶斩":"千叶斩",
            "nyhzr千叶斩_info":"出牌阶段，若你的手牌数大于你的体力值+1，你可以在牌堆中获得一张【杀】并使用，此【杀】结算后，你弃置一张手牌。若你弃置手牌后，手牌数依然大于体力值+1，你再使用一次【千叶斩】",
            "nyhzr乱刃影舞":"乱刃影舞",
            "nyhzr乱刃影舞_info":"限定技，你进入濒死阶段前,你可以恢复一点体力并对三个随机目标使用【杀】",
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
            "nyhzr雷霆之环_info":"身份模式下，当你死亡前，若你不为主公，你可以令主公获得技能【闪电活化】",
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
			'<li>修改金币：<br>game.changeCoin'+
			'<li>默认下雪：<br>game.haveFun.alwaysSnow'
		}
	};
});
