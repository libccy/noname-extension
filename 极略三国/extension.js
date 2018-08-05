game.import('extension',{
    name:'极略三国',
    content:function(config){
		if(config.simple_name=='hide'){
			get.slimName=function(str){
				var str2=lib.translate[str];
				if(!str2) return '';
				if(str2.indexOf('sp')==0){
					str2=str2.slice(2);
				}
				else if(str2.indexOf('界sp')==0){
					str2=str2.slice(3);
				}
				else if(str2.indexOf('SK')==0){
					str2=str2.slice(2);
				}
				else if(str2.indexOf('SR')==0){
					str2=str2.slice(2);
				}
				return get.verticalStr(str2,true);
			}
		}		
		// ---------------------------------------SR武将------------------------------------------//
		if(config.sgk_sr){
			game.addCharacterPack({
				character:{
					sgksr_zhangliao:['male','wei',4,['sgk_wuwei','sgk_yansha'],['die_audio']],
// 					sgksr_xiahoudun:['male','wei',4,['sgk_zhonghou','sgk_ganglie'],['die_audio']],
					sgksr_zhenji:['female','wei',3,['sgk_liuyun','sgk_lingbo','sgk_qingcheng'],['die_audio']],
					sgksr_xuchu:['male','wei',4,['sgk_aozhan','sgk_huxiao'],['die_audio']],
					sgksr_simayi:['male','wei',3,['sgk_guicai','sgk_langgu','sgk_zhuizun'],['die_audio']],
					sgksr_guojia:['male','wei',3,['sgk_tianshang','sgk_yiji','sgk_huiqu'],['die_audio']],
					sgksr_caocao:['male','wei',4,['sgk_zhaoxiang','sgk_zhishi','sgk_jianxiong'],['zhu','die_audio']],
					sgksr_zhaoyun:['male','shu',4,['sgk_jiuzhu','sgk_tuwei'],['die_audio']],
					sgksr_zhangfei:['male','shu',4,['sgk_xujin','sgk_paoxiao'],['die_audio']],
					sgksr_machao:['male','shu',4,['sgk_benxi','sgk_yaozhan'],['die_audio']],
					sgksr_guanyu:['male','shu',4,['sgk_wenjiu','sgk_shuixi'],['die_audio']],
					sgksr_zhugeliang:['male','shu',3,['sgk_sanfen','sgk_guanxing','sgk_weiwo'],['die_audio']],
					sgksr_huangyueying:['female','shu',3,['sgk_shouji','sgk_hemou','sgk_qicai'],['die_audio']],
					sgksr_liubei:['male','shu',4,['sgk_rende','sgk_chouxi','sgk_yongbing'],['zhu','die_audio']],
					sgksr_sunshangxiang:['female','wu',3,['sgk_yinmeng','sgk_xiwu','sgk_juelie'],['die_audio']],
					sgksr_daqiao:['female','wu',3,['sgk_fangxin','sgk_xiyu','sgk_wanrou'],['die_audio']],
					sgksr_huanggai:['male','wu',4,['sgk_zhouyan','sgk_zhaxiang'],['die_audio']],
					sgksr_lvmeng:['male','wu',4,['sgk_shixue','sgk_guoshi'],['die_audio']],
					sgksr_zhouyu:['male','wu',3,['sgk_yingcai','sgk_weibao','sgk_choulve'],['die_audio']],
					sgksr_ganning:['male','wu',4,['sgk_jiexi','sgk_youxia'],['die_audio']],
					sgksr_luxun:['male','wu',3,['sgk_dailao','sgk_youdi','sgk_ruya'],['die_audio']],
					sgksr_sunquan:['male','wu',4,['sgk_quanheng','sgk_xionglve','sgk_fuzheng'],['zhu','forbidai','die_audio']],
					sgksr_lvbu:['male','qun',4,['sgk_jiwu','sgk_sheji'],['die_audio']],
					sgksr_huatuo:['male','qun',3,['sgk_xingyi','sgk_guagu','sgk_wuqin'],['die_audio']],
					sgksr_diaochan:['female','qun',3,['sgk_lijian','sgk_manwu','sgk_baiyue'],['die_audio']],
				},
				skill:{
					_srChoice:{
						mode:['identity','guozhan','versus','boss','chess','stone','brawl'],
						trigger:{global:['gameStart']},
						forced:true,
						popup:false,
						silent:true,
						filter:function(event,player){
							if(get.itemtype(player)!='player') return false;
							var names=[];
							if(player.name) names.add(player.name);
							if(player.name1) names.add(player.name1);
							if(player.name2) names.add(player.name2);
							for(var i=0;i<names.length;i++){
								if(names[i].indexOf('sgksr_')==0) return true;
							}
							return false;
						},
						createList:function(name){
							var list=[];
							var info=lib.character[name];
							if(info){
								var skills=info[3];
								for(var j=0;j<skills.length;j++){
									if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&lib.skill[skills[j]].srlose){
										list.push(skills[j]);
									}
								}
							}
							return list;
						},
						content:function(){
							'step 0'
							event.names=[];
							if(player.name) event.names.add(player.name);
							if(player.name1) event.names.add(player.name1);
							if(player.name2) event.names.add(player.name2);
							'step 1'
							for(var i=0;i<event.names.length;i++){
								if(event.names[i].indexOf('sgksr_')==0){
									event.deleting=event.names[i];
									event.names.remove(event.deleting);
									var list=lib.skill._srChoice.createList(event.deleting);
									var str='';
									for(i=0;i<list.length;i++){
										str+='<div class="text">『'+get.translation(list[i])+'』'+lib.translate[list[i]+'_info']+'</div><br>';
									}
									player.chooseControl(list,function(event,player){
										return list.randomGet();
									}).prompt='选择'+get.translation(event.deleting)+'禁用技能<br><br>'+str;
									event.goto(2);
								}
							}
							'step 2'
							player.removeSkill(result.control);
							if(get.mode()=='guozhan'){
								lib.character[event.deleting][3].remove(result.control);
								player.hiddenSkills.remove(result.control);
								player.removeSkillTrigger(result.control);
							}
							player.checkMarks();
							'step 3'
							for(var i=0;i<event.names.length;i++){
								if(event.names[i].indexOf('sgksr_')==0){
									event.deleting=event.names[i];
									event.names.remove(event.deleting);
									var list=lib.skill._srChoice.createList(event.deleting);
									var str='';
									for(i=0;i<list.length;i++){
										str+='<div class="text">『'+get.translation(list[i])+'』'+lib.translate[list[i]+'_info']+'</div><br>';
									}
									player.chooseControl(list,function(event,player){
										return list.randomGet();
									}).prompt='选择'+get.translation(event.deleting)+'禁用技能<br><br>'+str;
									event.goto(2);
								}
							}
						},
					},
					sgk_wuwei:{
						audio:true,
						srlose:true,
						trigger:{player:'phaseDrawBegin'},
						check:function(event){
							return event.num<=3;
						},
						prompt:'是否发动技能【无畏】，展示牌中每有一张基本牌便可视为对一名角色使用一张【杀】',
						content:function(){
							'step 0'
							trigger.untrigger();
							trigger.finish();
							event.cards=get.cards(3);
							player.showCards(event.cards);
							'step 1'
							var num=0;
							for(var i=0;i<event.cards.length;i++){
								if(get.type(event.cards[i])=='basic'){
									num++;
								}
							}
							if(num>0){
								var next=player.chooseCardButton('请选择无畏视为【杀】使用的牌',event.cards);
								next.ai=function(button){
									if(game.hasPlayer(function(target){
										return player.canUse('sha',target,false)&&get.effect(target,{name:'sha'},player,player)>0;
									})){
										return 8-get.value(button.link)
									}
									return 0;
								}
								next.filterButton=function(button){
									return get.type(button.link)=='basic';
								}
							}
							else{
								player.gain(event.cards,'gain2');
								event.finish();
							}
							'step 2'
							if(result.bool){
								event.cards1=result.links[0];
								player.chooseTarget('请选择无畏的目标',function(card,player,target){
									return player.canUse('sha',target,false);
								}).set('ai',function(target){
									return get.effect(target,{name:'sha'},player,player);
								});
							}
							else{
								player.gain(event.cards,'gain2');
								event.finish();
							}
							'step 3'
							if(result.bool){
								player.useCard({name:'sha'},result.targets,[event.cards1],false);
								event.cards.remove(event.cards1);
								event.goto(1);
							}
							else{
								player.gain(event.cards,'gain2');
								event.finish();
							}
						},
						ai:{
							threaten:1.3,
							expose:0.2,
						}
					},
					sgk_yansha:{
						audio:true,
						srlose:true,
						trigger:{player:'phaseDrawBefore'},
						check:function(event,player){
							if(player.needsToDiscard()&&player.skipList.contains('phaseUse')&&!player.skipList.contains('phaseDiscard')) return true;
							return (3-player.storage.sgk_yansha2.length)&&player.countCards('h')>1;
						},
						content:function(){
							trigger.num--;
							player.addTempSkill('sgk_yansha_cards','phaseAfter');
						},
						init:function(player){
							player.storage.sgk_yansha2=[];
						},
						group:['sgk_yansha2'],
						subSkill:{
							cards:{
								audio:false,
								trigger:{player:'phaseEnd'},
								filter:function(event,player){
									return player.countCards('h')>0;
								},
								direct:true,
								content:function(){
									'step 0'
									player.chooseCard('选择一张牌置于武将牌上作为『掩』').ai=function(card){
										return 7-get.value(card);
									}
									'step 1'
									if(result.bool){
										player.logSkill('sgk_yansha');
										player.lose(result.cards,ui.special);
										player.$giveAuto(result.cards,player);
										player.storage.sgk_yansha2=player.storage.sgk_yansha2.concat(result.cards);
										player.syncStorage('sgk_yansha2');
										player.markSkill('sgk_yansha2');
									}
								}
							}
						}
					},
					sgk_yansha2:{
						audio:true,
						trigger:{global:'shaBegin'},
						filter:function(event,player){
							return player.storage.sgk_yansha2.length>0;
						},
						check:function(event,player){
							if(event.player.countCards('he')>1&&get.attitude(player,event.player)<0) return 2;
							if(get.attitude(player,event.target)>0){
								if(!event.target.countCards('h')&&event.player.countCards('he')>0) return 1;
							}
							if(get.attitude(player,event.player)<0){
								if(!player.getEquip(1)&&event.player.getEquip(1)) return 1;
								if(!player.getEquip(2)&&event.player.getEquip(2)) return 1;
								if(!player.getEquip(3)&&event.player.getEquip(3)) return 1;
								if(!player.getEquip(4)&&event.player.getEquip(4)) return 1;
								if(!player.getEquip(5)&&event.player.getEquip(5)) return 3;
							}
							return 0;
						},
						content:function(){
							"step 0"
							var att=get.attitude(player,trigger.player);
							player.chooseCardButton('掩杀',player.storage.sgk_yansha2).ai=function(button){
								if(att>0) return 0;
								return 1;
							}
							"step 1"
							if(result.bool){
								var card=result.buttons[0].link;
								player.storage.sgk_yansha2.remove(card);
								player.syncStorage('sgk_yansha2');
								player.discard(card);
								if(!player.storage.sgk_yansha2.length){
									player.unmarkSkill('sgk_yansha2');
								}
								if(trigger.player.countCards('he')){
									player.gainPlayerCard(trigger.player,2,'he',true);
								}
							}				
						},
						intro:{
							content:'cards'
						}
					},
					sgk_liuyun:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filterCard:function(card){
							return get.color(card)=='black';
						},
						position:'he',
						filter:function(event,player){
							return player.countCards('he',{color:'black'})>0&&!player.isLinked();
						},
						check:function(card){
							return 8-get.value(card)
						},
						prompt:'弃置一张黑色牌，令一名角色选择一项：回复一点体力或摸两张牌',
						filterTarget:true,
						content:function(){
							player.link();
							target.chooseDrawRecover(2,true);
						},
						ai:{
							expose:0.2,
							order:9,
							result:{
								player:function(player){
									if(player.countCards('h',function(card){
										return get.color(card)=='black';
									})>player.hp) return 1;
									return -1;
								},
								target:function(player,target){
									var result=2;
									if(target.isTurnedOver()) result+=3;
									if(target.hp==1) result+=3;
									return result;
								}
							},
							threaten:1.5
						}
					},
					sgk_lingbo:{
						audio:true,
						srlose:true,
						trigger:{global:'phaseBegin'},
						check:function(event,player){
							if(get.attitude(player,event.player)>0) return event.player.countCards('j');
							if(get.attitude(player,event.player)<0) return event.player.countCards('e');
							return 0;
						},
						filter:function(event,player){
							return (player.isLinked()||player.isTurnedOver())&&game.hasPlayer(function(target){
								return target.countCards('ej')>0;
							});
						},
						content:function(){
							'step 0'
							if(player.isLinked()) player.link();
							if(player.isTurnedOver()) player.turnOver();
							player.chooseTarget('将场上的一张牌置于牌堆顶',function(card,player,target){
								return target.countCards('ej')>0;
							}).ai=function(target){
								if(get.attitude(player,target)>0) return target.countCards('j');
								if(get.attitude(player,target)<0) return target.countCards('e');
								return 0;
							}
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.choosePlayerCard('将目标的一张牌置于牌堆顶',event.target,'ej',true);
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								event.card=result.links[0];
								event.target.lose(event.card,ui.special);
								game.broadcastAll(function(player){
									var cardx=ui.create.card();
									cardx.classList.add('infohidden');
									cardx.classList.add('infoflip');
									player.$throw(cardx,1000,'nobroadcast');
								},event.target);
								game.log(player,'将',event.target,'的',event.card,'置于牌堆顶');
							}
							else{
								event.card=null;
							}
							'step 3'
							if(event.target==game.me) game.delay(0.5);
							'step 4'
							if(event.card){
								event.card.fix();
								ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
							}
						},
						ai:{
							effect:{
								target:function(card){
									if(card.name=='tiesuo') return 0.5;
								}
							}
						}
					},
					sgk_qingcheng:{
						audio:true,
						srlose:true,
						enable:['chooseToUse','chooseToRespond'],
						filterCard:function(){return false;},
						selectCard:-1,
						viewAs:{name:'sha'},
						viewAsFilter:function(player){
							return !player.isLinked();
						},
						prompt:'横置你的武将牌，视为打出一张杀',
						check:function(){return 1},
						onuse:function(result,player){
							player.link();
						},
						onrespond:function(result,player){
							player.link();
						},
						ai:{
							skillTagFilter:function(player){
								return !player.isLinked();
							},
							respondSha:true,
						},
						group:['sgk_qingcheng2']
					},
					sgk_qingcheng2:{
						audio:true,
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
							player.link();
						},
						ai:{
							skillTagFilter:function(player){
								return player.isLinked();
							},
							respondShan:true,
						}
					},
					sgk_aozhan:{
						audio:true,
						srlose:true,
						marktext:'战',
						frequent:true,
						trigger:{player:'damageEnd',source:'damageEnd'},
						filter:function(event,player){
							if(event.num<=0) return false;
							return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
						},
						init:function(player){
							player.storage.sgk_aozhan=[];
						},
						content:function(){
							var cards=get.cards(trigger.num);
							player.storage.sgk_aozhan=player.storage.sgk_aozhan.concat(cards);
							player.$gain2(cards);
							game.log(player,'将'+get.cnNumber(cards.length)+'张牌置于武将牌上');
							player.syncStorage('sgk_aozhan');
							player.markSkill('sgk_aozhan');
						},
						intro:{
							content:'cards'
						},
						group:['sgk_aozhan2']
					},
					sgk_aozhan2:{
						audio:true,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.storage.sgk_aozhan.length;
						},
						content:function(){
							'step 0'
							player.chooseControl('收入手牌','置入弃牌堆',ui.create.dialog('战',player.storage.sgk_aozhan)).ai=function(event,player){
								var value=0,i;
								var cards=player.storage.sgk_aozhan;
								for(i=0;i<cards.length;i++){
									value+=get.value(cards[i]);
								}
								value/=player.storage.sgk_aozhan.length;
								if(value>=4)  return '收入手牌';
								return '置入弃牌堆';
							}
							'step 1'
							var cards=[];
							while(player.storage.sgk_aozhan.length){
								cards=cards.concat(player.storage.sgk_aozhan.shift());
							}
							if(result.control=='置入弃牌堆'){
								player.discard(cards);
								player.draw(cards.length);
							}
							else{
								game.log(player,'获得了',cards);
								player.gain(cards,'gain2');
							}
							player.syncStorage('sgk_aozhan');
							if(!player.storage.sgk_aozhan.length){
								player.unmarkSkill('sgk_aozhan');
							}
						},
						ai:{
							order:1,
							result:{
								player:function(player){
									if(player.storage.sgk_aozhan.length>=2) return 1;
									if(player.hp+player.countCards('h')<=3) return 0.5;
									return 0;
								}
							}
						}
					},
					sgk_huxiao:{
						audio:true,
						srlose:true,
						trigger:{source:'damageBegin'},
						filter:function(event,player){
							return !player.isTurnedOver()&&_status.currentPhase==player&&event.card&&event.card.name=='sha';
						},
						priority:10,
						check:function(event,player){
							if(get.attitude(player,event.player)>0) return false;
							var e2=event.player.getEquip(2);
							if(e2){
								if(e2.name=='tengjia'){
									if(event.nature=='fire') return 10;
								}
								if(e2.name=='baiyin') return 0;
							}
							if(event.player.hasSkill('kuangfeng2')&&event.nature=='fire') return 10;
							return get.damageEffect(player,event.player,player);
						},
						content:function(){
							trigger.num++;
							player.draw();
							player.addTempSkill('sgk_huxiao2','shaAfter');
						}
					},
					sgk_huxiao2:{
						audio:false,
						trigger:{player:'shaEnd'},
						forced:true,
						popup:false,
						content:function(){
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
							player.turnOver();
							player.skip('phaseDiscard');
						}
					},
					sgk_guicai:{
						audio:true,
						srlose:true,
						trigger:{global:'judge'},
						check:function(event,player){
							var judge=event.judge(event.player.judging[0]);
							if(get.attitude(player,event.player)<0) return judge>0;
							if(get.attitude(player,event.player)>0) return judge<0;
							return 0;
						},
						content:function(){
							"step 0"
							player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
							get.translation(trigger.player.judging[0])+'，打出一张手牌代替之或亮出牌顶的一张牌代替之').set('ai',function(card){
								var trigger=_status.event.getParent()._trigger;
								var player=_status.event.player;
								var judging=_status.event.judging;
								var result=trigger.judge(card)-trigger.judge(judging);
								var attitude=get.attitude(player,trigger.player);
								if(attitude==0||result==0) return 0;
								if(attitude>0){
									return result-get.value(card)/2;
								}
								else{
									return -result-get.value(card)/2;
								}
							}).set('judging',trigger.player.judging[0]);
							"step 1"
							if(result.bool){
								player.respond(result.cards,'highlight');
							}
							else{
								event.cards=get.cards();
								game.log(get.translation(player)+'亮出了牌堆顶的'+get.translation(event.cards));
								player.showCards(event.cards);
								player.respond(event.cards,'highlight');				
							}
							"step 2"
							if(result.bool){
								if(trigger.player.judging[0].clone){
									trigger.player.judging[0].clone.classList.remove('thrownhighlight');
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
							else{
								if(trigger.player.judging[0].clone){
									trigger.player.judging[0].clone.classList.remove('thrownhighlight');
									game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
								}
								ui.discardPile.appendChild(trigger.player.judging[0]);
								trigger.player.judging[0]=event.cards[0];
								if(!get.owner(event.cards[0],'judge')){
									trigger.position.appendChild(event.cards[0]);
								}
								game.log(trigger.player,'的判定牌改为',event.cards[0]);
							}
						},
						ai:{
							tag:{
								rejudge:1,
							}
						}
					},
					sgk_langgu:{
						audio:true,
						srlose:true,
						trigger:{player:'damageEnd'},
						check:function(event,player){
							return get.attitude(player,event.source)<=0;
						},
						filter:function(event,player){
							return event.source!=undefined;
						},
						logTarget:'player',
						content:function(){
							"step 0"
							player.judge(function(card){
								if(get.color(card)=='black') return 2;
								return -2;
							})
							"step 1"
							if(result.bool&&trigger.source.num('he')){
								player.gainPlayerCard(trigger.source,'he');
							}
						},
						ai:{
							expose:0.2,
							effect:{
								target:function(card,player,target){
									if(player.hasSkill('jueqing')) return [1,-1.5];
									if(get.tag(card,'damage')&&Math.random()<0.5){
										if(get.attitude(target,player)<0) return [1,0,0,-1.5];
									}
								}
							}
						},
						group:['sgk_langgu2']
					},
					sgk_langgu2:{
						audio:true,
						trigger:{source:'damageEnd'},
						check:function(event,player){
							return get.attitude(player,event.player)<=0;
						},
						filter:function(event,player){
							return event.player!=undefined;
						},
						logTarget:'player',
						content:function(){
							"step 0"
							player.judge(function(card){
								if(get.color(card)=='black') return 2;
								return -2;
							})
							"step 1"
							if(result.bool&&trigger.player.countCards('he')>0){
								player.gainPlayerCard(trigger.player,'he');
							}
						},
						ai:{
							expose:0.2,
							effect:{
								target:function(card,player,target){
									if(player.hasSkillTag('jueqing')) return [1,-1.5];
									if(get.tag(card,'damage')&&Math.random()<0.5){
										if(get.attitude(target,player)<0) return [1,0,0,-1.5];
									}
								}
							}
						},
					},
					sgk_zhuizun:{
						audio:true,
						srlose:true,
						enable:'chooseToUse',
						mark:true,
						unique:true,
						skillAnimation:true,
						animationStr:'追尊',
						animationColor:'water',
						init:function(player){
							player.storage.sgk_zhuizun=false;
						},
						filter:function(event,player){
							if(event.type!='dying') return false;
							if(player!=event.dying) return false;
							if(player.storage.sgk_zhuizun) return false;
							return true;
						},
						content:function(){
							'step 0'
							player.hp=Math.min(1,player.maxHp);
							player.update();
							player.awakenSkill('sgk_zhuizun');
							player.storage.sgk_zhuizun=true;
							player.addSkill('sgk_zhuizun2');
							'step 1'
							var targets=game.filterPlayer(function(current){
								return current!=player;
							}).sortBySeat();
							event.targets=targets;
							'step 2'
							if(event.targets.length){
								event.target=event.targets.shift();
							}
							else{
								event.finish();
							}
							'step 3'
							if(event.target.countCards('h')){
								event.target.chooseCard('选择一张手牌交给'+get.translation(player),true).ai=function(card){
									return -get.value(card);
								}
							}
							else{
								event.goto(2);
							}
							'step 4'
							if(result.bool){
								player.gain(result.cards[0]);
								target.$give(1,player);
							}
							event.goto(2);
						},
						ai:{
							order:1,
							skillTagFilter:function(player){
								if(player.storage.sgk_zhuizun) return false;
								if(player.hp>0) return false;
							},
							save:true,
							result:{
								player:10
							},
							threaten:function(player,target){
								if(!target.storage.sgk_zhuizun) return 0.6;
							}
						},
						intro:{
							content:'limited'
						}
					},
					sgk_zhuizun2:{
						audio:false,
						trigger:{global:'phaseAfter'},
						forced:true,
						content:function(){
							player.removeSkill('sgk_zhuizun2');
							player.insertPhase('sgk_zhuizun');
						}
					},
					sgk_tianshang:{
						audio:true,
						srlose:true,
						trigger:{player:'dieBegin'},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('sgk_tianshang'),function(card,player,target){
								return player!=target;
							}).ai=function(target){
								var num=get.attitude(player,target);
								if(num>0){
									if(target.isDamaged()) return 2;
									return 1;
								}
								return 0;
							}
							"step 1"
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('sgk_tianshang',target);
								if(player.hasSkill('sgk_yiji')){
									target.addSkill('sgk_yiji');
								}
								else{
									target.addSkill('sgk_huiqu');
								}
								target.gainMaxHp();
								target.recover();
							}
						},
						ai:{
							expose:0.5,
						},
					},
					sgk_yiji:{
						audio:true,
						srlose:true,
						inherit:'yiji'
					},
					sgk_huiqu:{
						audio:true,
						srlose:true,
						trigger:{player:'phaseBegin'},
						direct:true,
						filter:function(event,player){
							return player.countCards('h');
						},
						content:function(){
							'step 0'
							var check=game.hasPlayer(function(current){
								return get.attitude(player,current)>0&&current.countCards('j');
							});
							if(!check){
								if(player.countCards('h')>player.hp+1){
									check=false;
								}
								else{
									check=true;
								}
							}
							player.chooseToDiscard(get.prompt('sgk_huiqu')).ai=function(card){
								if(check){
									if(player.countCards('h')>=player.hp) return 8-get.value(card);
									return 4-get.value(card);
								}
								return false;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_huiqu');
								player.judge(function(card){
									if(get.color(card)=='red') return 1.5;
									return 1;
								});
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.color){
								if(result.color=='red'){
									var check=game.hasPlayer(function(current){
										return get.attitude(player,current)>0&&current.countCards('j');
									});
									var next=player.chooseTarget('请选择目标',2,function(card,player,target){
											if(ui.selected.targets.length){
												var from=ui.selected.targets[0];
												var judges=from.get('j');
												for(var i=0;i<judges.length;i++){
													if(!target.hasJudge(judges[i].viewAs||judges[i].name)) return true;
												}
												if(target.isMin()) return false;
												if((from.get('e','1')&&!target.get('e','1'))||
													(from.get('e','2')&&!target.get('e','2'))||
													(from.get('e','3')&&!target.get('e','3'))||
													(from.get('e','4')&&!target.get('e','4'))||
													(from.get('e','5')&&!target.get('e','5'))) return true;
												return false;
											}
											else{
												return target.num('ej')>0;
											}
										}).set('complexTarget',true);;
									next.ai=function(target){
										if(check) return 0;
										var player=_status.event.player;
										if(ui.selected.targets.length==0){
											if(target.num('j')&&get.attitude(player,target)>0) return 10;
											if(get.attitude(player,target)<0){
												for(var i=0;i<game.players.length;i++){
													if(get.attitude(player,game.players[i])>0){
														if((target.get('e','1')&&!game.players[i].get('e','1'))||
														(target.get('e','2')&&!game.players[i].get('e','2'))||
														(target.get('e','3')&&!game.players[i].get('e','3'))||
														(target.get('e','4')&&!game.players[i].get('e','4'))||
														(target.get('e','5')&&!game.players[i].get('e','5'))) return -get.attitude(player,target);
													}
												}
											}
											return 0;
										}
										return -get.attitude(player,target)*get.attitude(player,ui.selected.targets[0]);
									}
								}
								else{
									player.chooseTarget('选择一名目标对其造成一点伤害，然后其摸一张牌。').ai=function(target){
										return get.damageEffect(target,player,player);
									}
								}
							}
							'step 3'
							if(!result.bool){
								event.finish();
								return;
							}
							player.line2(result.targets);
							event.targets=result.targets;
							'step 4'
							if(targets.length==2){
								player.choosePlayerCard('ej',function(button){
									var player=_status.event.player;
									var targets0=_status.event.targets0;
									var targets1=_status.event.targets1;
									if(get.attitude(player,targets0)>get.attitude(player,targets1)){
										return get.position(button.link)=='j'?10:0;
									}
									else{
										if(get.position(button.link)=='j') return -10;
										return get.equipValue(button.link);
									}
								},targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
									var targets1=_status.event.targets1;
									if(get.position(button.link)=='j'){
										return !targets1.hasJudge(button.link.viewAs||button.link.name);
									}
									else{
										return !targets1.num('e',{subtype:get.subtype(button.link)});
									}
								});
							}
							else{
								targets[0].damage(player);
								targets[0].draw();
								event.finish();
							}
							'step 5'
							if(result.bool){
								var link=result.links[0];
								if(get.position(link)=='e'){
									event.targets[1].equip(link);
								}
								else if(result.buttons[0].link.viewAs){
									event.targets[1].addJudge({name:link.viewAs},[link]);
								}
								else{
									event.targets[1].addJudge(link);
								}
								event.targets[0].$give(link,event.targets[1])
								game.delay();
							}
						},
					},
					sgk_jiwu:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')!=1;
						},
						filterCard:true,
						selectCard:function(){
							return Math.min(1,_status.event.player.countCards('h')-1);
						},
						check:function(card){
							return card.name=='sha';
						},
						discard:false,
						lose:false,
						content:function(){
							'step 0'
							if(cards[0]){
								player.discard(player.getCards('h').remove(cards[0]));
							}
							else{
								player.draw();
							}
							'step 1'
							player.addSkill('sgk_jiwu_buff1');
							player.addSkill('sgk_jiwu_buff2');
							player.addTempSkill('sgk_jiwu_buff3','phaseAfter');
							
						},
						group:'sgk_jiwu2',
						subSkill:{
							buff1:{
								audio:'ext:极略三国:true',
								trigger:{source:'damageBegin'},
								filter:function(event){
									return event.card&&event.card.name=='sha'&&event.notLink();
								},
								forced:true,
								content:function(){
									trigger.num++;
								}
							},
							buff2:{
								audio:false,
								trigger:{player:'useCardAfter',global:'phaseAfter'},
								priority:2,
								filter:function(event){
									if(event.name=='useCard') return (event.card&&(event.card.name=='sha'));
									return true;
								},
								forced:true,
								popup:false,
								content:function(){
									player.removeSkill('sgk_jiwu_buff1');
									player.removeSkill('sgk_jiwu_buff2');
								},
							},
							buff3:{
								mod:{
									attackFrom:function(){
										return -Infinity;
									}
								}
							}
						},
						ai:{
							order:function(){
								return lib.card.sha.ai.order+0.1;
							},
							result:{
								player:function(player,target){
									if(player.countCards('h')==0) return 1;
									if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return 3;
									return 4-player.countCards('h');
								}
							},
							effect:{
								target:function(card,player,target){
									if(get.subtype(card)=='equip1'){
										var num=0;
										for(var i=0;i<game.players.length;i++){
											if(get.attitude(player,game.players[i])<0){
												num++;
												if(num>1) return [0,0,0,0];
											}
										}
									}
								}
							}
						}
					},
					sgk_jiwu2:{
						audio:false,
						trigger:{player:'useCard'},
						filter:function(event,player){
							if(player.countCards('e')>0) return false;
							if(event.card.name!='sha') return false;
							return game.hasPlayer(function(current){
								return !event.targets.contains(current)&&player.canUse('sha',current);
							});
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_jiwu'),function(card,player,target){
								return !_status.event.source.contains(target)&&player.canUse('sha',target);
							},[1,2]).set('source',trigger.targets).set('ai',function(target){
								var player=_status.event.player;
								return get.effect(target,{name:'sha'},player,player);
							});
							'step 1'
							if(result.bool){
								if(!event.isMine()&&!_status.connectMode) game.delay(0.5);
								event.targets=result.targets;
							}
							else{
								event.finish();
							}
							'step 2'
							player.logSkill('sgk_jiwu',event.target);
							for(var i=0;i<event.targets.length;i++){
								trigger.targets.push(event.targets[i]);
							}
							
						},
						ai:{
							effect:{
								player:function(card,player,target){
									if(card.name=='sha'){
										if(player._jiwutmp) return;
										player._jiwutmp=true;
										if(get.effect(target,{name:'sha'},player,player)<=0){
											delete player._jiwutmp;
											return;
										}
										if(game.hasPlayer(function(current){
											return current!=target&&get.distance(player,current)<=1&&
											player.canUse('sha',current)&&get.effect(current,{name:'sha'},player,player)>0;
										})){
											delete player._jiwutmp;
											return [1,1];
										}
										delete player._jiwutmp;
									}
								}
							}
						}
					},
					sgk_sheji:{
						audio:true,
						srlose:true,
						trigger:{global:'damageEnd'},
						filter:function(event,player){
							return player.countCards('he')>0&&event.source&&event.source.getEquip(1)&&event.source!=player;
						},
						check:function(event,player){
							return get.attitude(player,event.source)<=0;
						},
						direct:true,
						content:function(){
							'step 0'
							var next=player.chooseToDiscard('he','是否发动【射戟】？弃置一张牌获得'+get.translation(trigger.source)+'的'+get.translation(trigger.source.getEquip(1))+'?');
							next.logSkill=['sgk_sheji',trigger.source];
							next.ai=function(card){
								if(get.attitude(player,trigger.source)<0){
									return 6-get.value(card);
								}
								return 0;
							}
							'step 1'
							if(result.bool){
								trigger.source.$give(trigger.source.getEquip(1),player);
								player.gain(trigger.source.getEquip(1));
							}
						},
						group:['sgk_sheji2','sgk_sheji_wushuang'],
						subSkill:{
							wushuang:{
								audio:false,
								trigger:{player:'shaBegin'},
								forced:true,
								filter:function(event,player){
									return !event.directHit&&event.parent.skill=='sgk_sheji2';
								},
								content:function(){
									"step 0"
									var next=trigger.target.chooseToRespond({name:'shan'});
									next.autochoose=lib.filter.autoRespondShan;
									next.set('ai',function(card){
										if(_status.event.player.countCards('h','shan')>1){
											return get.unuseful2(card);
										}
										return -1;
									});
									"step 1"
									if(result.bool==false){
										trigger.untrigger();
										trigger.directHit=true;
									}
								}
							}
						}
					},
					sgk_sheji2:{
						audio:true,
						enable:['chooseToUse','chooseToRespond'],
						filterCard:{type:'equip'},
						viewAs:{name:'sha'},
						position:'he',
						prompt:'将一张装备牌当杀使用或打出',
						check:function(card){
							if(get.subtype(card)=='equip1') return 10-get.value(card);
							return 7-get.equipValue(card);
						},
						mod:{
							targetInRange:function(card){
								if(_status.event.skill=='sgk_sheji2') return true;
							}
						},
						ai:{
							order:function(){
								return lib.card.sha.ai.order+0.1;
							},
							respondSha:true,
							skillTagFilter:function(player){
								return player.num('he',{type:'equip'});
							}
						}
					},
					sgk_xingyi:{
						audio:true,
						enable:'phaseUse',
						usable:1,
						srlose:true,
						filterTarget:function(card,player,target){
							return target.countCards('h')&&player!=target;
						},
						content:function(){
							if(target.countCards('he')){
								player.gainPlayerCard(target,true,'h');
							}
							target.recover();
						},
						ai:{
							order:2,
							result:{
								player:1,
								target:function(player,target){
									if(target.isDamaged()) return 1;
									if(target.hasSkillTag('noh')) return 0;
									return -1;
								}
							},
							threaten:2
						}
					},
					sgk_guagu:{
						audio:true,
						srlose:true,
						trigger:{global:'dying'},
						priority:6,
						filter:function(event,player){
							return event.player.hp<=0&&event.player.countCards('h')>0&&player.countCards('h')>0;
						},
						logTarget:'player',
						check:function(event,player){
							var save=event.player.getCards('h',function(card){
								return get.tag(card,'save')
							});
							if(get.attitude(player,event.player)<0){
								if(save) return 1;
								return -1;
							}
							if(get.attitude(player,event.player)>0){
								if(save) return 0;
								if(!save){
									if(event.player.hasSkill('jiushi')&&!event.player.isTurnedOver()) return 0;
									if(player.countCards('h','tao')&&event.player.countCards('h')>=2) return 0;
									
									return 1;
								}
								
							}
							return 0;
						},
						content:function(){
							"step 0"
							var cards=trigger.player.getCards('h');
							event.bool=cards.length>=2;
							trigger.player.discard(cards);
							trigger.player.recover();
							"step 1"
							if(event.bool){
								trigger.player.draw();
							}
						},
						ai:{
							expose:0.2,
							threaten:1.5,
						}
					},
					sgk_wuqin:{
						audio:true,
						srlose:true,
						trigger:{player:'phaseEnd'},
						filter:function(event,player){
							return player.countCards('h',{type:'basic'})>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('sgk_wuqin'),function(card){
								return get.type(card)=='basic';
							}).ai=function(card){
								return 5-get.useful(card);
							}
							'step 1'
							if(result.bool){
								player.chooseBool('摸两张牌，或进行一个额外的出牌阶段。').ai=function(){
									if(player.countCards('h')>2) return false;
									return true;
								}
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								player.draw(2);
							}
							else{
								player.getStat().card={};
								player.getStat().skill={};
								player.phaseUse();
							}
						}
					},
					sgk_lijian:{
						audio:'lijian',
						srlose:true,
						inherit:'lijian'
					},
					sgk_manwu:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						filterTarget:function(card,player,target){
							if(target.sex!='male') return false;
							return target.countCards('h')&&player!=target;
						},
						content:function(){
							var cardx=target.getCards('h').randomGet();
							player.showCards(cardx);
							if(get.suit(cardx)=='diamond'){
								target.addJudge('lebu',cardx);
								target.$giveAuto(cardx,target);
							}
							else{
								player.gain(cardx);
								target.$giveAuto(cardx,player);
							}
						},
						ai:{
							order:9,
							result:{
								player:0.5,
								target:function(target,player){
									return get.effect(target,{name:'lebu'},player,player);
								}
							}
						}
					},
					sgk_baiyue:{
						audio:true,
						srlose:true,
						trigger:{player:'phaseEnd'},
						filter:function(event,player){
							return player.storage.sgk_baiyue.length;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCardButton(get.prompt('sgk_baiyue'),player.storage.sgk_baiyue).ai=function(button){
								return get.value(button.link);
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_baiyue');
								player.storage.sgk_baiyue.remove(result.buttons[0].link);
								player.gain(result.buttons[0].link);
								player.$gain(result.buttons[0].link);
							}
							delete player.storage.sgk_baiyue;
							player.storage.sgk_baiyue=[];
						},
						group:['sgk_baiyue_countGeneral'],
						subSkill:{
							countGeneral:{
								audio:false,
								trigger:{global:['useCardAfter','respondAfter','discardAfter']},
								forced:true,
								popup:false,
								filter:function(event,player){
									if(player!=_status.currentPhase) return false;
									if(event.player==player) return false;
									if(event.cards){
										for(var i=0;i<event.cards.length;i++){
											if(event.cards[i].position!='d') 
												return true;
										}
									}
									return false;
								},
								content:function(){
									for(var i=0;i<trigger.cards.length;i++){
										if(get.position(trigger.cards[i])=='d'){
											player.storage.sgk_baiyue=player.storage.sgk_baiyue.concat(trigger.cards[i]);
										}
									}
								}
							},
							countJudge:{
								audio:false,
								trigger:{global:'judgeAfter'},
								forced:true,
								popup:false,
								filter:function(event,player){
									if(player!=_status.currentPhase) return false;
									if(event.player==player) return false;
									if(event.result.card.parentNode.id!='discardPile') return false;
									return true;
								},
								content:function(){
									player.storage.sgk_baiyue=player.storage.sgk_baiyue.concat(trigger.result.card);
								}
							}
						},
						init:function(player){
							player.storage.sgk_baiyue=[];
						}
					},
					sgk_yinmeng:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h')&&(player.storage.sgk_yinmeng<Math.max(1,player.maxHp-player.hp))
						},
						filterTarget:function(card,player,target){
							return target.sex=='male'&&target.countCards('h')&&player!=target;
						},
						content:function(){
							'step 0'
							player.storage.sgk_yinmeng++;
							'step 1'
							event.card=target.getCards('h').randomGet();
							target.$phaseJudge(event.card);
							player.chooseCard(get.translation(target)+'展示的牌是'+get.translation(event.card)+',请选择你展示的牌',true).ai=function(card){
								if(get.attitude(player,target)>0) return (get.type(event.card,'trick')==get.type(card,'trick'));
								return (get.type(event.card,'trick')!=get.type(card,'trick'));
							}
							'step 2'
							player.showCards(result.cards[0]);
							if(get.type(result.cards[0],'trick')==get.type(event.card,'trick')){
								game.asyncDraw([player,target]);
							}
							else{
								target.discard(event.card);
							}	
						},
						ai:{
							order:4,
							result:{
								player:0.5,
								target:function(player,target){
									var hs=player.get('h');
									var suit=['heart','diamond','club','spade'];
									var num=0;
									for(var i=0;i<hs.length;i++){
										if(suit.contains(get.suit(hs[i]))){
											suit.remove(get.suit(hs[i]));
											num++;
										}
									}
									var m=num/4;
									if(get.attitude(player,target)>0&&Math.random()<m) return 1;
									if(get.attitude(player,target)<0&&Math.random()<m) return -1;
									return 0;
								}
							}
						},
						group:['sgk_yinmeng2']
					},
					sgk_yinmeng2:{
						audio:false,
						trigger:{player:'phaseBefore'},
						forced:true,
						silent:true,
						popup:false,
						priority:10,
						content:function(){
							player.storage.sgk_yinmeng=0;
						}
					},
					sgk_xiwu:{
						audio:true,
						srlose:true,
						trigger:{player:'shaMiss'},
						priority:-1,
						check:function(event,player){
							return get.attitude(player,event.target)<0;
						},
						content:function(){
							player.draw();
							if(trigger.target.countCards('h')){
								player.discardPlayerCard(trigger.target,'h');
							}		
						}
					},
					sgk_juelie:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return target.countCards('h')!=player.countCards('h');
						},
						content:function(){
							'step 0'
							target.chooseControl('调整手牌','对你出杀').ai=function(){
								if(target.countCards('h')>player.countCards('h')&&target.countCards('h','shan')) return '对你出杀';
								if(target.countCards('h')<player.countCards('h')) return '调整手牌';
								if(target.countCards('h')-player.countCards('h')>=2) return '对你出杀';
								if(get.effect(target,{name:'sha'},player,target)>0) return '对你出杀';
								return '调整手牌';
							}
							'step 1'
							if(result.control=='调整手牌'){
								if(target.countCards('h')>player.countCards('h')){
									target.chooseToDiscard(target.countCards('h')-player.countCards('h'));
								}
								else{
									target.draw(player.countCards('h')-target.countCards('h'));
								}
							}
							else{
								player.useCard({name:'sha'},target,false);
							}
						},
						ai:{
							order:12,
							result:{
								target:function(player,target){
									return (player.countCards('h')-target.countCards('h'));
								}
							}
						}
					},
					sgk_fangxin:{
						srlose:true,
						audio:2,
						enable:'chooseToUse',
						position:'he',
						viewAs:{name:'tao'},
						viewAsFilter:function(player){
							return (!player.hasJudge('lebu')&&player.countCards('he',{suit:'diamond'})>0)||(!player.hasJudge('bingliang')&&player.countCards('he',{suit:'suit'})>0);
						},
						precontent:function(){
							var card=event.result.cards[0];
							event.result.cards.length=0;
							player.$give(card,player,false);
							if(get.suit(card)=='diamond'){
								player.addJudge('lebu',card);
							}
							else{
								player.addJudge('bingliang',card);
							}
						},
						filterCard:function(card,player){
							return (!player.hasJudge('lebu')&&get.suit(card)=='diamond')||(!player.hasJudge('bingliang')&&get.suit(card)=='club');
						},
						selectCard:1,
						prompt:'',
						ai:{
							skillTagFilter:function(player){
								return !player.hasJudge('lebu')&&player.countCards('h');
							},
							save:true,
						}
					},
					sgk_xiyu:{
						audio:true,
						srlose:true,
						trigger:{player:'phaseBegin'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget('细语：弃置一名角色的一张牌，然后该角色进行一个额外的出牌阶段',function(card,player,target){
								return target.num('he')>0;
							}).ai=function(target){
								if(target.countCards('h')>=3) return get.attitude(_status.event.player,target);
								if(target.countCards('h')<2) return -get.attitude(_status.event.player,target);
								return -get.attitude(_status.event.player,target);
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_xiyu',result.targets);
								event.targets=result.targets
								if(event.targets[0].num('he')>0){
									player.discardPlayerCard('he',event.targets[0]);
								}
								event.targets[0].getStat().card={};
								event.targets[0].getStat().skill={};
								event.targets[0].phaseUse();
							}
						}
					},
					sgk_wanrou:{
						audio:true,
						srlose:true,
						trigger:{player:['useCardAfter','respondAfter','discardAfter']},
						direct:true,
						filter:function(event,player){
							if(event.cards){
								for(var i=0;i<event.cards.length;i++){
									if(get.suit(event.cards[i])=='diamond'&&
									event.cards[i].original!='j'&&get.position(event.cards[i])=='d') return true;
								}
							}
							return false;
						},
						content:function(){
							'step 0'
							player.chooseTarget('婉柔：选择一名目标令其摸一张牌').ai=function(target){
								return get.attitude(player,target)
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_wanrou',result.targets[0]);
								result.targets[0].draw();
							}
						},
						ai:{
							threaten:0.7
						},
						group:'sgk_wanrou2'
					},
					sgk_wanrou2:{
						audio:false,
						trigger:{player:'loseEnd'},
						filter:function(event,player){
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='j') return true;
							}
							return false;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget('婉柔：选择一名目标令其摸一张牌').ai=function(target){
								return get.attitude(player,target)
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_wanrou',result.targets[0]);
								result.targets[0].draw();
							}
						}
					},
					sgk_zhouyan:{
						audio:true,
						usable:1,
						enable:'phaseUse',
						srlose:true,
						filterTarget:function(card,target,player){
							return player!=target;
						},
						filterCard:function(){return false},
						selectCard:-1,
						viewAs:{name:'huogong',nature:'fire'},
						onuse:function(result,player){
							game.asyncDraw(result.targets);
						},
						prompt:'令一名其他角色摸一张牌视为你对其使用一张火攻',
						group:['sgk_zhouyan_buff'],
						ai:{
							order:4,
							result:{
								player:0,
								target:function(player,target){
									if(get.damageEffect(target,player,player,'fire')>0) return -2;
									if(get.attitude(player,target)>0) return 0.9;
									if(target.hasSkill('huogong2')||target.countCards('h')==0) return 1;
									if(player.countCards('h')<=1) return 0.6;
									return 0.5;
								}
							},
						},
						subSkill:{
							buff:{
								audio:false,
								trigger:{source:'damageAfter'},
								forced:true,
								popup:false,
								filter:function(event){
									return event.card.name=='huogong';
								},
								content:function(){
									'step 0'
									player.draw();
									if(trigger.getParent().skill=='sgk_zhouyan'){
										player.chooseBool(get.prompt('sgk_zhouyan')).ai=function(event,player){
											if(player.countCards('h')==0) return 0;
											return 1;
										};
									}
									else{
										event.finish();
									}
									'step 1'
									if(result.bool){
										var evt=trigger;
										for(var i=0;i<10;i++){
											if(evt&&evt.getParent){
												evt=evt.getParent();
											}
											if(evt.name=='chooseToUse'){
												player.useResult(evt.result,evt);
												break;
											}
										}
									}
								}
							}
						}
					},
					sgk_zhaxiang:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						filterCard:true,
						discard:false,
						filterTarget:function(card,target,player){
							return player!=target;
						},
						complexCard:true,
						prepare:function(cards,player,targets){
							player.$give(cards.length,targets[0]);
						},
						check:function(card){
							return 6-get.value(card);
						},
						content:function(){
							'step 0'
							event.cards1=cards[0];
							event.target=target;
							var cardx=ui.create.card();
							cardx.name='诈降牌';
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.showCards(cardx,'诈降');
							var random=Math.random();
							event.target.chooseCard('交给'+get.translation(player)+'一张牌，或展示并获得此牌。').ai=function(card){
								if(random<0.5) return 5-get.value(card);
								return false;
							}
							'step 1'
							if(result.bool){
								player.gain(result.cards[0]);
								event.target.$give(result.cards[0],player);
								event.target.discard(event.cards1);
							}
							else{
								event.target.showCards(event.cards1);
								event.target.gain(event.cards1);
								event.target.$gain(event.cards1);
								if(event.cards1.name=='sha'){
									player.useCard({name:'sha',nature:'fire'},event.target,false);
								}
							}		
						},
						ai:{
							order:8,
							result:{
								target:function(target,player){
									if(ui.selected.cards[0]&&ui.selected.cards[0].name){
										return get.effect(target,{name:'sha',nature:'fire'},player,player);
									}
									else if(Math.random()<0.5){
										return -1;
									}
									else{
										return 0;
									}
								}
							}
						}
					},
					sgk_shixue:{
						audio:true,
						srlose:true,
						trigger:{player:'shaBegin'},
						frequent:true,
						content:function(){
							player.draw(2);
							player.addTempSkill('sgk_shixue2','shaAfter');
						}
					},
					sgk_shixue2:{
						audio:false,
						trigger:{player:'shaMiss'},
						forced:true,
						popup:false,
						content:function(){
							player.chooseToDiscard(2,true).ai=get.disvalue;
						}
					},
					sgk_guoshi:{
						audio:true,
						srlose:true,
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							return event.player.storage.sgk_guoshi.length>0;
						},
						init:function(){
							for(var i=0;i<game.players.length;i++){
								game.players[i].storage.sgk_guoshi=[];
							}
						},
						direct:true,
						content:function(){
							'step 0'
							var att=get.attitude(player,trigger.player);
							player.chooseCardButton(trigger.player.storage.sgk_guoshi,'是否对'+get.translation(trigger.player)+'发动【国士】？').ai=function(button){
								if(att>0) return 1;
								return 0;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_guoshi',trigger.player);
								trigger.player.gain(result.buttons[0].link);
								trigger.player.$gain(result.buttons[0].link);
							}
							'step 2'
							delete trigger.player.storage.sgk_guoshi;
						},
						group:['sgk_guoshi2'],
						global:['sgk_guoshi_check'],
						subSkill:{
							check:{
								trigger:{player:'phaseBefore'},
								forced:true,
								popup:false,
								content:function(){
									player.storage.sgk_guoshi=[];
									player.addTempSkill('sgk_guoshi_judge','phaseAfter');
									player.addTempSkill('sgk_guoshi_discard','phaseAfter');
									
								}
							},
							judge:{
								audio:2,
								trigger:{global:'judgeAfter'},
								forced:true,
								popup:false,
								filter:function(event,player){
									if(_status.currentPhase!=player) return false;
									if(event.result.card.parentNode.id=='discardPile') 
										return true;
									return false;
								},
								content:function(){
									if(trigger.result.card)
										player.storage.sgk_guoshi=player.storage.sgk_guoshi.concat(trigger.result.card);
								}
							},
							discard:{
								audio:2,
								trigger:{global:'discardAfter'},
								filter:function(event,player){
									if(_status.currentPhase!=player) return false;
									for(var i=0;i<event.cards.length;i++){
										if(get.position(event.cards[i])=='d'){
											return true;
										}
									}
									return false;
								},
								forced:true,
								popup:false,
								content:function(){
									"step 0"
									for(var i=0;i<trigger.cards.length;i++){
										if(get.position(trigger.cards[i])=='d'&&trigger.cards[i]){
											player.storage.sgk_guoshi=player.storage.sgk_guoshi.concat(trigger.cards[i]);
										}
									}
								}
							}
						},
						ai:{
							expose:0.2
						}
					},
					sgk_guoshi2:{
						audio:true,
						trigger:{global:'phaseBegin'},
						prompt:'是否发动【国士】观看牌顶的牌？',
						frequent:true,
						content:function(){
							"step 0"
							if(player.isUnderControl()){
								game.modeSwapPlayer(player);
							}
							var cards=get.cards(2);
							event.cards=cards;
							var switchToAuto=function(){
								_status.imchoosing=false;
								if(event.dialog) event.dialog.close();
								if(event.control) event.control.close();
								var top=[];
								var judges=event.player.node.judges.childNodes;
								var stopped=false;
								if(get.attitude(player,event.player)>0){
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
										return get.value(b,player)-get.value(a,player);
									});
									while(cards.length){
										if(get.value(cards[0],player)<=5) break;
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
							}
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
								});
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
							}
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
						}
					},
					sgk_yingcai:{
						audio:true,
						srlose:true,
						trigger:{player:'phaseDrawBegin'},
						check:function(){return 1;},
						content:function(){
							'step 0'
							trigger.untrigger();
							trigger.finish();
							event.suit=[];
							event.cards=[];
							'step 1'	
							event.cards2=get.cards();
							var card=event.cards2[0];
							if(card.clone){
								card.clone.classList.add('thrownhighlight');
								game.addVideo('highlightnode',player,get.cardInfo(card));
							}				
							event.node=trigger.player.$throwordered(card.copy(),true);
    						event.node.classList.add('thrownhighlight');
    						ui.arena.classList.add('thrownhighlight');
							game.delay(1);
							if(!event.suit.contains(get.suit(event.cards2)))
								event.suit.push(get.suit(event.cards2));
							if(event.suit.length<=2){
								event.cards=event.cards.concat(event.cards2);
								event.redo();
							}
							else{
								event.cards1=event.cards;
								event.cards1=event.cards1.concat(event.cards2[0]);
								// player.showCards(event.cards1);
								ui.discardPile.appendChild(event.cards2[0]);
								game.delay(2);
							}
							'step 2'
							ui.arena.classList.remove('thrownhighlight');
							player.gain(event.cards);
							if(event.cards.length){
								player.$gain2(event.cards);
							}
							ui.clear();
						}
					},
					sgk_weibao:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						filterCard:true,
						check:function(card){
							return 8-get.value(card);
						},
						discard:false,
						content:function(){
							'step 0'
							var cardx=ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.$throw(cardx);
							cards[0].fix();
							ui.cardPile.insertBefore(cards[0],ui.cardPile.firstChild);
							target.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
								switch(Math.floor(Math.random()*6)){
									case 0:return 'heart2';
									case 1:case 4:case 5:return 'diamond2';
									case 2:return 'club2';
									case 3:return 'spade2';
								}
							});
							'step 1'
							game.log(target,'选择了'+get.translation(result.control));
							event.choice=result.control;
							target.popup(event.choice);
							event.cards=get.cards();
							target.showCards(event.cards);
							target.gain(event.cards,'draw');
							'step 2'
							if(get.suit(event.cards)+'2'!=event.choice) target.damage();
						},
						ai:{
							order:1,
							result:{
								target:function(player,target){
									var eff=get.damageEffect(target,player);
									if(eff>=0) return 1+eff;
									var value=0,i;
									var cards=player.get('h');
									for(i=0;i<cards.length;i++){
										value+=get.value(cards[i]);
									}
									value/=player.countCards('h');
									if(target.hp==1) return Math.min(0,value-7);
									return Math.min(0,value-5);
								}
							}
						}
					},
					sgk_choulve:{
						audio:true,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')>1
						},
						check:function(card){
							if(ui.selected.cards.length==0) return get.value(card);
							return 6-get.value(card)&&card.number<ui.selected.cards[0].number;
						},
						filterCard:true,
						selectCard:2,
						filterTarget:function(card,player,target){
							return player!=target;
						},
						prepare:function(cards,player,targets){
							player.$give(1,targets[0]);
							player.$give(1,targets[1]);
						},
						targetprompt:['先拿牌','后拿牌'],
						selectTarget:2,
						discard:false,
						multitarget:true,
						content:function(){
							targets[0].gain(cards[0]);
							targets[1].gain(cards[1]);
							targets[0].showCards(cards[0]);
							targets[1].showCards(cards[1]);
							if(get.number(cards[0])!=get.number(cards[1])){
								if(get.number(cards[0])>get.number(cards[1])){
									targets[0].storage.sgk_choulve=player;
									targets[0].addTempSkill('sgk_choulve_shaHit','shaAfter');
									targets[0].useCard({name:'sha'},targets[1],false);
								}
								else{
									targets[1].storage.sgk_choulve=player;
									targets[1].addTempSkill('sgk_choulve_shaHit','shaAfter');
									targets[1].useCard({name:'sha'},targets[0],false);
								}
							}
						},
						subSkill:{
							shaHit:{
								trigger:{source:'damageAfter'},
								forced:true,
								popup:false,
								filter:function(event,player){
									return event.card.name=='sha'
								},
								content:function(){
									player.storage.sgk_choulve.draw();
								}
							}
						},
						ai:{
							order:4,
							result:{
								player:function(player){
									if(player.countCards('h')>player.hp) return 0.5;
									return -5;
								},
								target:function(player,target){
									var card1=ui.selected.cards[0];
									var card2=ui.selected.cards[1];
									if(card1&&card2&&card1.number==card2.number){
										return 2;
									}
									if(ui.selected.targets.length==0){
										return 1;
									}
									else{
										return get.effect(target,{name:'sha'},ui.selected.targets[0],target);
									}
								}
							}
						}
					},
					sgk_jiexi:{
						audio:true,
						srlose:true,
						usable:1,
						enable:'phaseUse',
						filterTarget:function(card,target,player){
							return player!=target;
						},
						filterCard:function(){return false},
						selectCard:-1,
						viewAs:{name:'guohe'},
						prompt:'你可以与一名其他角色拼点，若你赢，视为对其使用一张【过河拆桥】。你可重复此流程直到你以此法拼点没赢',
						group:'sgk_jiexi_compare',
						subSkill:{
							compare:{
								forced:true,
								popup:false,
								trigger:{player:'guoheBefore'},
								filter:function(event,player){
									return event.skill=='sgk_jiexi';
								},
								content:function(){
									'step 0'
									player.chooseToCompare(trigger.target);
									'step 1'
									if(result.bool){
										player.addSkill('sgk_jiexi_after');
									}
									else{
										trigger.untrigger();
										trigger.finish();
									}
								}
							},
							after:{
								forced:true,
								popup:false,
								trigger:{player:'guoheAfter'},
								filter:function(event,player){
									return event.skill=='sgk_jiexi';
								},
								content:function(){
									'step 0'
									player.removeSkill('sgk_jiexi_after');
									if(trigger.target.countCards('h')&&player.countCards('h')){
										player.chooseBool('是否继续发动【劫袭】？');
									}
									else{
										event.finish();
									}
									'step 1'
									if(result.bool){
										var evt=trigger;
										for(var i=0;i<10;i++){
											if(evt&&evt.getParent){
												evt=evt.getParent();
											}
											if(evt.name=='chooseToUse'){
												player.useResult(evt.result,evt);
												break;
											}
										}
									}
								}
							}
						}
					},
					sgk_youxia:{
						audio:2,
						srlose:true,
						enable:'phaseUse',
						filterTarget:function(card,target,player){
							return player!=target&&target.countCards('hej')>0;
						},
						filter:function(event,player){
							return !player.isTurnedOver();
						},
						selectTarget:[1,2],
						multitarget:true,
						multiline:true,
						content:function(){
							player.turnOver();
							for(var i=0;i<targets.length;i++){
								player.gainPlayerCard('hej',targets[i]);
							}	
						},
						mod:{
							targetEnabled:function(card,player,target,now){
								if(target.isTurnedOver()){
									if(card.name=='sha'||card.name=='juedou') return false;
								}
							}
						},
						ai:{
							order:9,
							result:{
								player:-1,
								target:function(player,target){
									if(get.attitude(player,target)<=0) return (target.num('he')>0)?-1.5:1.5;
									return 0;
								},
							}
						}
						
					},
					sgk_dailao:{
						audio:2,
						usable:1,
						srlose:true,
						enable:'phaseUse',
						filterTarget:function(cards,target,player){
							return player!=target;
						},
						filterCard:true,
						position:'he',
						check:function(card){
							return 6-get.value(card);
						},
						selectCard:[0,1],
						complexCard:true,
						content:function(){
							if(cards.length==0){
								game.asyncDraw([player,target]);
							}
							else{
								target.chooseToDiscard('he',true);
							}
							player.turnOver();
							target.turnOver();
						},
						ai:{
							order:9,
							result:{
								player:function(player){
									if(ui.selected.cards.length>0){
										if(player.isTurnedOver()) return 3;
										if(!player.isTurnedOver()) return -4
									}
									if(ui.selected.cards.length==0){
										if(player.isTurnedOver()) return 4;
										if(!player.isTurnedOver()) return -3;
									}
								},
								target:function(target,player){
									if(ui.selected.cards.length>0){
										if(target.isTurnedOver()) return 3;
										if(!target.isTurnedOver()) return -4
									}
									if(ui.selected.cards.length==0){
										if(target.isTurnedOver()) return 4;
										if(!target.isTurnedOver()) return -3;
									}
								}
							}
						}
					},
					sgk_youdi:{
						audio:1,
						srlose:true,
						enable:'chooseToRespond',
						filterCard:function(){return false;},
						selectCard:-1,
						viewAs:{name:'shan'},
						viewAsFilter:function(player){
							return player.isTurnedOver();
						},
						prompt:'将你的武将牌翻面，视为打出一张闪',
						check:function(){return 1},
						onrespond:function(result,player){
							player.turnOver();
						},
						ai:{
							skillTagFilter:function(player){
								return player.isTurnedOver();
							},
							respondShan:true,
						},
						group:'sgk_youdi2'
					},
					sgk_youdi2:{
						trigger:{global:'shaMiss'},
						filter:function(event,player){
							return event.target==player;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('sgk_youdi',trigger.player),[1,Infinity]).ai=function(card){
								if(get.attitude(player,trigger.player)<=0) return 4-get.value(card);
								return false;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_youdi',trigger.player);
								trigger.player.chooseToDiscard(result.cards.length,'he',true);
							}	
						}
					},
					sgk_ruya:{
						audio:1,
						srlose:true,
						trigger:{player:'loseEnd'},
						frequent:true,
						filter:function(event,player){
							if(player.countCards('h')) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='h') return true;
							}
							return false;
						},
						content:function(){
							player.turnOver();
							player.draw(player.maxHp-player.countCards('h'));
						},
						ai:{
							threaten:0.8,
							effect:{
								target:function(card,player,target){
									if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
									if(target.isTurnedOver()&&target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -10;
								}
							},
							noh:true,
						}
					},
					sgk_quanheng:{
						srlose:true,
						audio:1,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						init:function(player){
							lib.skill._wuxie.content=function(){
								'step 0'
								if(trigger.multitarget){
									event.targets=trigger.targets;
								}
								event.target=trigger.target;
								if(event.triggername=='phaseJudge'){
									event.target=trigger.player;
								}
								event.sourcex=event.targets||event.target;
								if(!event.targets&&trigger.targets&&trigger.targets.length==1){
									event.sourcex2=trigger.player;
								}
								event.source=trigger.player;
								event.state=true;
								event.card=trigger.card;
								event._global_waiting=true;
								event.tempnowuxie=(trigger.targets&&trigger.targets.length>1&&!trigger.multitarget);
								event.filterCard=function(card,player){
									if(card.name!='wuxie') return false;
									return lib.filter.cardEnabled(card,player,'forceEnable');
								};
								event.send=function(player,state,isJudge,card,source,target,targets,id,id2,tempnowuxie,skillState){
									if(skillState){
										player.applySkills(skillState);
									}
									state=state?1:-1;
									var str='';
									if(isJudge){
										str+=get.translation(source)+'的';
									}
									if(isJudge){
										str+=get.translation(card,'viewAs');
									}
									else{
										str+=get.translation(card);
									}
									if((targets||target)&&!isJudge){
										str+='对'+get.translation(targets||target);
									}
									str+='将'+(state>0?'生效':'失效')+'，是否无懈？';

									if(player.isUnderControl(true)&&!_status.auto&&!ui.tempnowuxie&&tempnowuxie){
										var translation=get.translation(card.name);
										if(translation.length>=4){
											translation=lib.translate[card.name+'_ab']||translation.slice(0,2);
										}
										ui.tempnowuxie=ui.create.control('不无懈'+translation,ui.click.tempnowuxie,'stayleft');
										ui.tempnowuxie._origin=id2;
									}
									var next=player.chooseToUse({
										filterCard:function(card,player){
											if(card.name!='wuxie') return false;
											return lib.filter.cardEnabled(card,player,'forceEnable');
										},
										prompt:str,
										type:'wuxie',
										state:state,
										_global_waiting:true,
										ai1:function(){
											if(isJudge){
												var name=card.viewAs||card.name;
												var info=lib.card[name];
												if(info&&info.ai&&info.ai.wuxie){
													var aiii=info.ai.wuxie(source,card,source,_status.event.player,state);
													if(typeof aiii=='number') return aiii;
												}
												if(Math.abs(get.attitude(_status.event.player,source))<3) return 0;
												if(source.hasSkill('guanxing')) return 0;
												if(name!='lebu'&&name!='bingliang'){
													if(source!=_status.event.player){
														return 0;
													}
												}
												var card2;
												if(name!=card.name){
													card2={name:name};
												}
												else{
													card2=card;
												}
												var eff=get.effect(source,card2,source,source);
												if(eff>=0) return 0;
												return state*get.attitude(_status.event.player,source);
											}
											else{
												var triggerevent=_status.event.getTrigger();
												if(triggerevent&&triggerevent.parent&&
													triggerevent.parent.postAi&&
													triggerevent.player.isUnknown(_status.event.player)){
													return 0;
												}
												var info=get.info(card);
												if(info.ai&&info.ai.wuxie){
													var aiii=info.ai.wuxie(target,card,source,_status.event.player,state,event);
													if(typeof aiii=='number') return aiii;
												}
												if(info.multitarget&&targets){
													var eff=0;
													for(var i=0;i<targets.length;i++){
														eff+=get.effect(targets[i],card,source,_status.event.player)
													}
													return -eff*state;
												}
												if(Math.abs(get.attitude(_status.event.player,target))<3) return 0;
												return -get.effect(target,card,source,_status.event.player)*state;
											}
										},
										source:target,
										source2:targets,
										id:id,
										id2:id2
									});
									if(game.online){
										_status.event._resultid=id;
										game.resume();
									}
									else{
										next.nouse=true;
									}
								};
								'step 1'
								var list=game.filterPlayer(function(current){
									return current.hasWuxie();
								});
								event.list=list;
								event.id=get.id();
								list.sort(function(a,b){
									return get.distance(event.source,a,'absolute')-get.distance(event.source,b,'absolute');
								});
								'step 2'
								if(event.list.length==0){
									event.finish();
									if(!event.state){
										event.trigger('wuxieSuccess');
										trigger.untrigger();
										if(event.triggername=='phaseJudge'){
											trigger.cancelled=true;
										}
										else{
											trigger.finish();
										}
									}
								}
								else if(_status.connectMode&&(event.list[0].isOnline()||event.list[0]==game.me)){
									event.goto(4);
								}
								else{
									event.current=event.list.shift();
									event.send(event.current,event.state,event.triggername=='phaseJudge',
									event.card,event.source,event.target,event.targets,event.id,trigger.parent.id,event.tempnowuxie);
								}
								'step 3'
								if(result.bool){
									event.wuxieresult=event.current;
									event.wuxieresult2=result;
									event.goto(8);
								}
								else{
									event.goto(2);
								}
								'step 4'
								var id=event.id;
								var sendback=function(result,player){
									if(result&&result.id==id&&!event.wuxieresult&&result.bool){
										event.wuxieresult=player;
										event.wuxieresult2=result;
										game.broadcast('cancel',id);
										if(_status.event.id==id&&_status.event.name=='chooseToUse'&&_status.paused){
											return (function(){
												event.resultOL=_status.event.resultOL;
												ui.click.cancel();
												if(ui.confirm) ui.confirm.close();
											});
										}
									}
									else{
										if(_status.event.id==id&&_status.event.name=='chooseToUse'&&_status.paused){
											return (function(){
												event.resultOL=_status.event.resultOL;
											});
										}
									}
								};

								var withme=false;
								var withol=false;
								var list=event.list;
								for(var i=0;i<list.length;i++){
									if(list[i].isOnline()){
										withol=true;
										list[i].wait(sendback);
										list[i].send(event.send,list[i],event.state,event.triggername=='phaseJudge',
										event.card,event.source,event.target,event.targets,event.id,trigger.parent.id,event.tempnowuxie,get.skillState(list[i]));
										list.splice(i--,1);
									}
									else if(list[i]==game.me){
										withme=true;
										event.send(list[i],event.state,event.triggername=='phaseJudge',
										event.card,event.source,event.target,event.targets,event.id,trigger.parent.id,event.tempnowuxie);
										list.splice(i--,1);
									}
								}
								if(!withme){
									event.goto(6);
								}
								if(_status.connectMode){
									if(withme||withol){
										for(var i=0;i<game.players.length;i++){
											game.players[i].showTimer();
										}
									}
								}
								event.withol=withol;
								'step 5'
								if(result&&result.bool&&!event.wuxieresult){
									game.broadcast('cancel',event.id);
									event.wuxieresult=game.me;
									event.wuxieresult2=result;
								}
								'step 6'
								if(event.withol&&!event.resultOL){
									game.pause();
								}
								'step 7'
								for(var i=0;i<game.players.length;i++){
									game.players[i].hideTimer();
								}
								'step 8'
								if(event.wuxieresult){
									event.wuxieresult.useResult(event.wuxieresult2);
								}
								'step 9'
								if(event.wuxieresult){
									if(result=='wuxied'){
										event.state=!event.state;
									}
									event.goto(1);
								}
								else if(event.list.length){
									event.goto(2);
								}
								else{
									if(!event.state){
										event.trigger('wuxieSuccess');
										trigger.untrigger();
										if(event.triggername=='phaseJudge'){
											trigger.cancelled=true;
										}
										else{
											trigger.finish();
										}
									}
								}
								delete event.resultOL;
								delete event.wuxieresult;
								delete event.wuxieresult2;
							}
							lib.card.wuzhong.ai.wuxie=function(target,card,player,current,state,evt){
								if(evt&&evt.parent.parent.skill=='sgk_quanheng_backup'){
									if(player.storage.quanhengnum==2) return 0;
									if(get.attitude(current,player)>0){
										if(state>0) return player.storage.quanhengnum-2;
										if(state<0) return 2-player.storage.quanhengnum;
									}
									if(get.attitude(current,player)<0){
										if(state>0) return 2-player.storage.quanhengnum;
										if(state<0) return player.storage.quanhengnum-2;
									}
								}
								
							}
						},
						chooseButton:{
							dialog:function(){
								var list=[['trick','','wuzhong'],['basic','','sha']];
								return ui.create.dialog('权衡',[list,'vcard']);
							},
							filter:function(button,player){
								return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
							},
							check:function(button){
								var player=_status.event.player;
								var shaTarget=game.hasPlayer(function(current){
									return player.canUse('sha',current)&&get.effect(current,{name:'sha'},player)>0;
								});
								if(shaTarget&&!player.countCards('h','sha')) return (button.link[2]=='sha')?1:-1;
								var hs=player.countCards('h',function(card){
									return 5-get.value(card)
								});
								if(hs>0) return (button.link[2]=='wuzhong')?1:-1;
								return 0;
							},
							backup:function(links,player){
								return {
									filterCard:true,
									selectCard:[1,Infinity],
									audio:'ext:极略三国:1',
									popname:true,
									complexCard:true,
									ai1:function(card){
										var player=_status.event.player;
										if(ui.selected.cards.length==1) return 4-get.value(card);
										if(ui.selected.cards.length==2&&player.hasWuxie()) return 7-get.value(card);
										return 5-get.value(card);
									},
									viewAs:{name:links[0][2]},
									onuse:function(result,player){
										player.storage.quanhengnum=result.cards.length;
									}
								}
							},
							prompt:function(links,player){
								return '至少一张手牌当'+get.translation(links[0][2])+'使用';
							},
						},
						group:['sgk_quanheng_shaMiss','sgk_quanheng_wuxied'],
						subSkill:{
							shaMiss:{
								trigger:{player:'shaMiss'},
								forced:true,
								popup:false,
								filter:function(event,player){
									return event.getParent().skill=='sgk_quanheng_backup';
								},
								content:function(){
									player.draw(trigger.cards.length);
								}
							},
							wuxied:{
								trigger:{global:'wuxieSuccess'},
								forced:true,
								popup:false,
								priority:6,
								filter:function(event,player){
									return event.parent.parent.skill=='sgk_quanheng_backup';
								},
								content:function(){
									player.draw(trigger.parent.parent.cards.length);
								}
							}
						},
						ai:{
							order:4,
							result:{
								player:1,
							}
						}
					},
					sgk_xionglve:{
						audio:1,
						srlose:true,
						marktext:'略',
						trigger:{player:'phaseDrawBegin'},
						check:function(event,player){
							if(player.skipList.contains('phaseUse')) return 1;
							return player.storage.sgk_xionglve.length<=3;
						},
						content:function(){
							'step 0'
							trigger.finish();
							trigger.untrigger();
							event.cards=get.cards(2);
							player.chooseCardButton(event.cards,true);
							'step 1'
							if(result.bool){
								player.gain(result.links[0]);
								player.$gain2(result.links[0]);
								event.cards.remove(result.links[0]);
								if(event.cards.length){
									player.lose(event.cards,ui.special);
									player.storage.sgk_xionglve=player.storage.sgk_xionglve.concat(event.cards);
									player.markSkill('sgk_xionglve');
									player.syncStorage('sgk_xionglve');
								}
							}
						},
						init:function(player){
							player.storage.sgk_xionglve=[];
						},
						intro:{
							content:'cards'
						},
						group:['sgk_xionglve2'],
					},
					sgk_xionglve2:{
						audio:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.storage.sgk_xionglve.length>0;
						},
						chooseButton:{
							dialog:function(event,player){
								return ui.create.dialog('雄略',player.storage.sgk_xionglve,'hidden');
							},
							check:function(button){
								var player=_status.event.player;
								var type=get.type(button.link,'trick');
								var recover=0,lose=1;
								for(var i=0;i<game.players.length;i++){
									if(!game.players[i].isOut()){
										if(game.players[i].hp<game.players[i].maxHp){
											if(get.attitude(player,game.players[i])>0){
												if(game.players[i].hp<2){
													lose--;
													recover+=0.5;
												}
												lose--;
												recover++;
											}
											else if(get.attitude(player,game.players[i])<0){
												if(game.players[i].hp<2){
													lose++;
													recover-=0.5;
												}
												lose++;
												recover--;
											}
										}
										else{
											if(get.attitude(player,game.players[i])>0){
												lose--;
											}
											else if(get.attitude(player,game.players[i])<0){
												lose++;
											}
										}
									}
								}
								var equipTarget=false;
								var shaTarget=false;
								var shunTarget=false;
								var chaiTarget=false;
								for(var i=0;i<game.players.length;i++){
									if(get.attitude(player,game.players[i])>0){
										if(player!=game.players[i]&&!game.players[i].get('e',{subtype:get.subtype(button.link)})[0]&&get.attitude(player,game.players[i])>0){
											equipTarget=true;
										}
									}
									if(player.canUse('shunshou',game.players[i])&&get.effect(game.players[i],{name:'shunshou'},player)){
										shunTarget=true;
									}
									if(player.canUse('guohe',game.players[i])&&get.effect(game.players[i],{name:'guohe'},player)>=0){
										chaiTarget=true;
									}
									if(player.canUse('sha',game.players[i])&&get.effect(game.players[i],{name:'sha'},player)>0){
										shaTarget=true;
									}
								}
								if(player.isDamaged()) return (type=='basic')?2:-1;
								if(shaTarget&&player.countCards('h','sha')&&!player.countCards('h','jiu')) return (type=='basic')?1:-1;
								if(lose>recover&&lose>0) return (type=='trick')?1:-1;
								if(lose<recover&&recover>0) return (type=='trick')?1:-1;
								if(equipTarget) return (type=='equip')?1:-1;
								if(shunTarget||chaiTarget) return (type=='trick')?1:-1;
								if(shaTarget&&!player.countCards('h','sha')) return (type=='basic')?1:-1;
								return 0;
							},
							backup:function(links,player){
								if(get.type(links[0],'trick')=='trick'){
									return {
										cards:links,
										chooseButton:{
											dialog:function(){
												var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
												for(var i=0;i<list.length;i++){
													list[i]=['锦囊','',list[i]];
												}
												return ui.create.dialog([list,'vcard']);
											},
											filter:function(button,player){
												return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
											},
											check:function(button){
												var player=_status.event.player;
												var recover=0,lose=1;
												for(var i=0;i<game.players.length;i++){
													if(!game.players[i].isOut()){
														if(game.players[i].hp<game.players[i].maxHp){
															if(get.attitude(player,game.players[i])>0){
																if(game.players[i].hp<2){
																	lose--;
																	recover+=0.5;
																}
																lose--;
																recover++;
															}
															else if(get.attitude(player,game.players[i])<0){
																if(game.players[i].hp<2){
																	lose++;
																	recover-=0.5;
																}
																lose++;
																recover--;
															}
														}
														else{
															if(get.attitude(player,game.players[i])>0){
																lose--;
															}
															else if(get.attitude(player,game.players[i])<0){
																lose++;
															}
														}
													}
												}
												var shunTarget=false;
												var chaiTarget=false;
												for(var i=0;i<game.players.length;i++){
													if(player.canUse('shunshou',game.players[i])&&get.effect(game.players[i],{name:'shunshou'},player)){
														shunTarget=true;
													}
													if(player.canUse('guohe',game.players[i])&&get.effect(game.players[i],{name:'guohe'},player)>=0){
														chaiTarget=true;
													}
												}
												if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
												if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
												if(shunTarget) return (button.link[2]=='shunshou')?1:-1;
												if(chaiTarget) return (button.link[2]=='guohe')?1:-1;
												return (button.link[2]=='wuzhong')?1:-1;
											},
											backup:function(links,player){
												return {
													filterCard:function(){return false},
													selectCard:-1,
													popname:true,
													viewAs:{name:links[0][2]},
													onuse:function(result,player){
														result.cards=lib.skill.sgk_xionglve2_backup.cards;
														var card=result.cards[0];
														player.storage.sgk_xionglve.remove(card);
														player.syncStorage('sgk_xionglve');
														if(!player.storage.sgk_xionglve.length){
															player.unmarkSkill('sgk_xionglve');
														}
														else{
															player.markSkill('sgk_xionglve');
														}
														player.logSkill('sgk_xionglve2',result.targets);
													}
												}
											},
											prompt:function(links,player){
												return '将一张雄略牌当'+get.translation(links[0][2])+'使用';
											}
										}
									}
								}
								else if(get.type(links[0],'trick')=='basic'){
									return {
										cards:links,
										chooseButton:{
											dialog:function(){
												var list=[];
												list.push(['基本','','sha']);
												list.push(['基本','','sha','fire']);
												list.push(['基本','','sha','thunder']);
												list.push(['基本','','tao']);
												list.push(['基本','','jiu']);
												return ui.create.dialog('雄略:请选择想要使用的基本牌',[list,'vcard']);
											},
											filter:function(button,player){
												return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
											},
											check:function(button){
												var player=_status.event.player;
												var shaTarget=false;
												for(var i=0;i<game.players.length;i++){
													if(player.canUse('sha',game.players[i])&&get.effect(game.players[i],{name:'sha'},player)>0){
														shaTarget=true;
													}
												}
												if(player.isDamaged()) return (button.link[2]=='tao')?1:-1;
												if(shaTarget&&player.countCards('h','sha')&&!player.countCards('h','jiu')) return (button.link[2]=='jiu')?1:-1;
												if(shaTarget&&!player.countCards('h','sha')) return (button.link[2]=='sha')?1:-1;
												return (button.link[2]=='sha')?1:-1;
											},
											backup:function(links,player){
												return {
													filterCard:function(){return false},
													selectCard:-1,
													audio:1,
													popname:true,
													viewAs:{name:links[0][2]},
													onuse:function(result,player){
														result.cards=lib.skill.sgk_xionglve2_backup.cards;
														var card=result.cards[0];
														player.storage.sgk_xionglve.remove(card);
														player.syncStorage('sgk_xionglve');
														if(!player.storage.sgk_xionglve.length){
															player.unmarkSkill('sgk_xionglve');
														}
														else{
															player.markSkill('sgk_xionglve');
														}
														player.logSkill('sgk_xionglve2',result.targets);
													}
												}
											},
											prompt:function(links,player){
												return '将一张雄略牌当'+get.translation(links[0][2])+'使用';
											}
										}
									}
								}
								else{
									return {
										direct:true,
										cards:links,
										filterTarget:function(card,player,target){
											var cards=lib.skill.sgk_xionglve2_backup.cards;
											if(target.isMin()) return false;
											return player!=target&&!target.getEquip(cards[0]);
										},
										filterCard:function(){return false},
										selectCard:-1,
										prepare:function(cards,player,targets){
											var cards=lib.skill.sgk_xionglve2_backup.cards;
											player.$give(cards[0],targets[0],false);
										},
										ai2:function(target){
											return get.attitude(_status.event.player,target)+10;
										},
										content:function(){
											var card=lib.skill.sgk_xionglve2_backup.cards[0];
											player.storage.sgk_xionglve.remove(card);
											player.syncStorage('sgk_xionglve');
											if(!player.storage.sgk_xionglve.length){
												player.unmarkSkill('sgk_xionglve');
											}
											else{
												player.markSkill('sgk_xionglve');
											}
											player.logSkill('sgk_xionglve2',target);
											if(get.type(card)=='equip'){
												target.equip(card);
											}
											else{
												player.discard(card);
												target.draw();
											}
										}
									}
								}
							}
						},
						ai:{
							order:6,
							result:{
								player:function(player){
									if(player.hp<=2) return 3;
									return player.storage.sgk_xionglve.length-1;
								},
							}
						}
					},
					sgk_fuzheng:{
						audio:1,
						unique:true,
						zhuSkill:true,
						group:['sgk_fuzheng2'],
					},
					sgk_fuzheng2:{
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							if(!player.hasZhuSkill('sgk_fuzheng')) return false;
							return game.hasPlayer(function(){
								return current!=player&&current.group=='wu';
							});
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget('是否发动【辅政】？',[1,2],function(card,player,target){
								return player!=target&&target.group=='wu';
							}).ai=function(target){
								var att=get.attitude(player,target);
								if(target.countCards('h')) return att;
								return att/10;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_fuzheng',result.targets);
								event.targets=result.targets;
								event.targets.sortBySeat();
							}
							else{
								event.finish();
							}
							'step 2'
							if(event.targets.length){
								var target=event.targets.shift();
								target.draw();
								event.current=target;
							}
							else{
								event.finish();
							}
							'step 3'
							if(event.current&&event.current.countCards('h')){
								event.current.chooseCard('选择一张手牌置于牌堆顶','h',true);
							}
							else{
								event.goto(2);
							}
							'step 4'
							if(result&&result.cards){
								event.card=result.cards[0];
								event.current.lose(result.cards,ui.special);
								var cardx=ui.create.card();
								cardx.classList.add('infohidden');
								cardx.classList.add('infoflip');
								event.current.$throw(cardx,1000);
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
						}
					},
					sgk_jiuzhu:{
						audio:1,
						srlose:true,
						trigger:{global:['respondEnd','discardAfter']},
						filter:function(event,player){
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].name=='shan'&&get.position(event.cards[i])=='d'){
									return true;
								}
							}
							return false;
						},
						direct:true,
						content:function(){
							'step 0'
							event.cards=trigger.cards.slice(0);
							for(var i=0;i<event.cards.length;i++){
								if(get.position(event.cards[i])!='d'||event.cards[i].name!='shan'){
									event.cards.splice(i--,1);
								}
							}
							player.chooseToDiscard('是否发动【救主】替换弃牌堆中的'+get.translation(event.cards)+'?','he',[1,event.cards.length],function(card){
								return card.name!='shan';
							}).ai=function(card){
								if(player.countCards('h','shan')>=2) return false;
								return 6-get.value(card);
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_jiuzhu',trigger.player);
								for(var i=0;i<result.cards.length;i++){
									event.card2=event.cards.randomGet();
									event.cards.remove(event.card2);
									player.gain(event.card2,'gain2');
								}
								if(_status.currentPhase!=player){
									player.chooseBool('是否对'+get.translation(_status.currentPhase)+'使用一张无视防具的杀？').ai=function(){
										return get.attitude(player,trigger.player)<0;
									}
								}
								else{
									event.finish();
								}
							}
							'step 2'
							if(result.bool){
								player.addTempSkill('unequip','shaAfter');
								player.useCard({name:'sha'},_status.currentPhase,false);
							}
						},
						group:'sgk_jiuzhu2'
					},
					sgk_jiuzhu2:{
						audio:1,
						trigger:{global:'judgeAfter'},
						direct:true,
						filter:function(event,player){
							if(event.result.card.parentNode.id!='discardPile') return false;
							return (event.result.card.name=='shan');
						},
						content:function(){
							'step 0'
							player.chooseToDiscard('是否发动【救主】替换弃牌堆中的'+get.translation(trigger.result.card)+'?','he',trigger.result.card.length,function(card){
								return card.name!='shan';
							}).ai=function(card){
								if(player.countCards('h',{name:'shan'})>=2) return false;
								return 6-get.value(card);
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_jiuzhu',trigger.player);
								player.gain(trigger.result.card,'gain2');
								if(_status.currentPhase!=player){
									player.chooseBool('是否对'+get.translation(_status.currentPhase)+'使用一张无视防具的杀？').ai=function(){
										return get.attitude(player,trigger.player)<0;
									}
								}
								else{
									event.finish();
								}
									
							}
							'step 2'
							if(result.bool){
								player.addTempSkill('unequip','shaEnd');
								player.useCard({name:'sha'},_status.currentPhase,false);
							}	
						}
					},
					sgk_tuwei:{
						audio:1,
						srlose:true,
						trigger:{global:'useCardToEnd'},
						filter:function(event,player){
							if(event.player!=player&&event.target!=player) return false
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].name=='sha'&&get.position(event.cards[i])=='d'){
									return true;
								}
							}
							return false;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCardTarget({
								filterCard:function(card){
									return get.tag(card,'damage');
								},
								filterTarget:function(card,player,target){
									return trigger.player==target||trigger.target==target;
								},
								selectTarget:[1,2],
								ai1:function(card){
									return 6-get.value(card);
								},
								ai2:function(target){
									return -get.attitude(player,target);
								},
								prompt:'是否发动【突围】？'
							});
							'step 1'
							if(result.bool){
								player.discard(result.cards);
								player.logSkill('sgk_tuwei',result.targets);
								event.targets=result.targets
								if(result.targets.length==1){
									player.discardPlayerCard(event.targets[0],'he',[1,2],true);
								}
								else{
									player.discardPlayerCard(event.targets[0],'he',true);
								}
							}
							else{
								event.finish();
							}
							'step 2'
							if(targets.length==2){
								player.discardPlayerCard(targets[1],'he',true);
							}
						},
						ai:{
							expose:0.2
						}
					},
					sgk_xujin:{
						audio:1,
						srlose:true,
						trigger:{player:'phaseDrawBefore'},
						content:function(){
							"step 0"
							trigger.untrigger();
							trigger.finish();
							"step 1"
							event.cards=get.cards(5);
							if(event.isMine()==false){
								event.dialog=ui.create.dialog('蓄劲',event.cards);
								game.delay(2);
							}
							"step 2"
							if(event.dialog) event.dialog.close();
							var dialog=ui.create.dialog('蓄劲',event.cards);
							player.chooseButton([1,5],dialog,true).filterButton=function(button){
								if(ui.selected.buttons.length==0) return true;
								for(var i=0;i<ui.selected.buttons.length;i++){
									if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return true;
								}
								return false;
							}
							"step 3"
							player.storage.sgk_xujin2=result.buttons.length;
							player.addTempSkill('sgk_xujin2','phaseAfter');
							event.cards2=[];
							for(var i=0;i<result.buttons.length;i++){
								event.cards2.push(result.buttons[i].link);
								cards.remove(result.buttons[i].link);
							}
							player.chooseTarget('选择获得卡牌的目标',true).ai=function(target){
								return get.attitude(player,target);
							}
							"step 4"
							result.targets[0].gain(event.cards2);
							if(event.cards2.length) result.targets[0].$gain(event.cards2);
							for(var i=0;i<cards.length;i++){
								ui.discardPile.appendChild(cards[i]);
							}
							game.delay(2);
						},
						ai:{
							threaten:1.2
						}
					},
					sgk_xujin2:{
						mark:true,
						intro:{
							content:function(storage,player){
								return '出杀次数+'+storage+',攻击距离:'+storage
							}
						},
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.storage.sgk_xujin2-1;
							},
							attackFrom:function(from,to,distance){
								return distance-from.storage.sgk_xujin2+1
							}
						},
					},
					sgk_paoxiao:{
						audio:1,
						srlose:true,
						trigger:{source:'damageAfter'},
						filter:function(event,player){
							return event.card&&event.card.name=='sha';
						},
						check:function(event,player){
							return get.attitude(player,event.player)<=0&&event.notLink();
						},
						priority:5,
						content:function(){
							'step 0'
							player.draw();
							player.chooseToUse({name:'sha'},function(card,target,player){
								return player.canUse({name:'sha'},target);
							});
							'step 1'
							if(!result.bool){
								trigger.player.discardPlayerCard(player,'he');
							}
						},
					},
					sgk_benxi:{
						audio:1,
						srlose:true,
						trigger:{player:'shaBegin'},
						forced:true,
						content:function(){
							"step 0"
							trigger.target.chooseToDiscard('请弃置一张装备牌，否则不能使用闪抵消此杀','he',function(card){
								return get.type(card)=='equip';
							}).ai=function(card){
								var num=trigger.target.countCards('h','shan');
								if(num==0) return 0;
								return 8-get.value(card);
							}
							"step 1"
							if(!result.bool){
								trigger.directHit=true;
							}
						},
						mod:{
							globalFrom:function(from,to,distance){
								return distance-1;
							}
						}
					},
					sgk_yaozhan:{
						audio:1,
						srlose:true,
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
								player.useCard({name:'sha'},target,false);
							}
							else{
								target.chooseToUse({name:'sha'},player);
							}
						},
						ai:{
							order:function(name,player){
								if(!player.hasSha()) return 1;
								if(player.countCards('h',function(card){
									return card.name!='sha'&&card.number>11&&get.value(card)<7
								})) return 9;
								return lib.card.sha.ai.order-1;
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
					sgk_wenjiu:{
						audio:1,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						marktext:'酒',
						filterCard:function(card){
							return get.color(card)=='black';
						},
						filter:function(event,player){
							return player.countCards('h',{color:'black'})>0;
						},
						check:function(card){return 6-get.value(card)},
						discard:false,
						prepare:function(cards,player){
							player.$give(1,player);
						},
						content:function(){
							player.lose(cards[0],ui.special);
							player.storage.sgk_wenjiu=player.storage.sgk_wenjiu.concat(cards[0]);
							player.syncStorage('sgk_wenjiu');
							player.markSkill('sgk_wenjiu');
						},
						init:function(player){
							player.storage.sgk_wenjiu=[];
						},
						intro:{
							content:'cards'
						},
						group:'sgk_wenjiu2',
						ai:{
							order:function(){
								return lib.card.sha.ai.order+0.2;
							},
							result:{
								player:function(player){
									return 2-player.storage.sgk_wenjiu.length;
								}
							}
						}
					},
					sgk_wenjiu2:{
						audio:1,
						trigger:{player:'shaBegin'},
						filter:function(event,player){
							return player.storage.sgk_wenjiu.length;
						},
						check:function(event,player){
							return get.attitude(player,event.target)<0;
						},
						content:function(){
							'step 0'
							player.chooseCardButton('是否对'+get.translation(trigger.target)+'发动【温酒】?',player.storage.sgk_wenjiu).ai=function(button){
								if(get.attitude(player,trigger.target)<0) return 1;
								return 0;
							}
							'step 1'
							if(result.bool){
								player.$throw(result.links);
								player.storage.sgk_wenjiu.remove(result.links[0]);
								ui.discardPile.appendChild(result.links[0]);
								player.syncStorage('sgk_wenjiu');
								if(!player.storage.sgk_wenjiu.length) player.unmarkSkill('sgk_wenjiu');
								player.addTempSkill('sgk_wenjiu3','shaAfter');
								player.addTempSkill('sgk_wenjiu4','shaAfter');
								
							}
						}
					},
					sgk_wenjiu3:{
						trigger:{source:'damageBegin'},
						filter:function(event){
							return event.card&&event.card.name=='sha'&&event.notLink();
						},
						forced:true,
						popup:false,
						content:function(){
							trigger.num++;
						}
					},
					sgk_wenjiu4:{
						audio:2,
						trigger:{player:'shaMiss'},
						priority:-1,
						forced:true,
						popup:false,
						content:function(){
							player.draw();
						}
					},
					sgk_shuixi:{
						audio:1,
						srlose:true,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.countCards('h')>0
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCardTarget({
								filterCard:true,
								filterTarget:function(card,player,target){
									return player!=target&&target.countCards('h');
								},
								ai1:function(card){
									return get.value(card);
								},
								ai2:function(target){
									return -get.attitude(player,target);
								},
								prompt:'水袭：展示一张手牌并选择一名目标'
							});
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								event.card=result.cards[0];
								player.logSkill('sgk_shuixi',event.target);
								player.showCards(event.card);
								event.target.chooseToDiscard({suit:get.suit(event.card)}).ai=function(card){
										return 10-get.value(card);
								}
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								event.finish()
							}
							else{
								event.target.loseHp();
								player.addTempSkill('sgk_shuixi2','phaseAfter');
							}
							
						}
					},
					sgk_shuixi2:{
						mark:true,
						intro:{
							content:'水袭失败,不能使用杀!'
						},
						mod:{
							cardEnabled:function(card){
								if(card.name=='sha') 
									return false
							}
						}
					},
					sgk_sanfen:{
						audio:1,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							var num=0;
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].sex=='male'&&game.players[i]!=player) num++
							}
							return (num>1)
						},
						filterTarget:function(card,player,target){
							if(player==target) return false;
							if(ui.selected.targets.length==1){
								return ui.selected.targets[0].canUse({name:'sha'},target)&&target.canUse({name:'sha'},player);
							}
							return true;
						},
						complexTarget:true,
						targetprompt:['先出杀','对你出杀'],
						selectTarget:2,
						multitarget:true,
						content:function(){
							'step 0'
							targets[0].chooseToUse({name:'sha'},-1,targets[1]);
							'step 1'
							if(!result.bool){
								player.discardPlayerCard('hej',targets[0]);
							}
							targets[1].chooseToUse({name:'sha'},-1,player);
							'step 2'
							if(!result.bool){
								player.discardPlayerCard('hej',targets[1]);
							}
						},
						ai:{
							order:8,
							result:{
								target:-3
							},
							expose:0.4,
							threaten:3,
						}
					},
					sgk_guanxing:{
						audio:1,
						srlose:true,
						trigger:{player:['phaseBegin','phaseEnd']},
						frequent:true,
						content:function(){
							"step 0"
							if(player.isUnderControl()){
								game.modeSwapPlayer(player);
							}
							var cards=get.cards(Math.min(3,game.players.length));
							event.cards=cards;
							var switchToAuto=function(){
								_status.imchoosing=false;
								if(event.dialog) event.dialog.close();
								if(event.control) event.control.close();
								var top=[];
								if(event.triggername=='phaseBegin'){
									var judges=player.node.judges.childNodes;
									var stopped=false;
									if(!player.countCards('h','wuxie')){
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
								}
								else{
									var judges=player.next.node.judges.childNodes;
									var stopped=false;
									if(get.attitude(player,player.next)>0){
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
								}
								var bottom;
								if(!stopped){
									cards.sort(function(a,b){
										return get.value(b,player)-get.value(a,player);
									});
									while(cards.length){
										if(get.value(cards[0],player)<=5) break;
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
							}
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
							}
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
							threaten:1.2
						}
					},
					sgk_weiwo:{
						audio:1,
						srlose:true,
						trigger:{player:'damageBegin'},
						filter:function(event,player){
							if(event.nature&&player.countCards('h')) return true;
							if(!event.nature&&!player.countCards('h')) return true;
							return false;
						},
						mark:true,
						forced:true,
						content:function(){
							trigger.untrigger();
							trigger.finish();
						},
						ai:{
							nofire:function(player){
								return player.countCards('h')>0;
							},
							nothunder:function(player){
								return player.countCards('h')>0;
							},
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
									if(card.name=='tiesuo'&&target.countCards('h')>0)	return [0,0];
									if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
								}
							},
						},
						intro:{
							content:function(storage,player){
								var str='';
								if(player.countCards('h')){
									str+='防止属性伤害';
								}
								else{
									str+='防止非属性伤害';
								}
								return str;
							}
						}
					},
					sgk_shouji:{
						audio:1,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.num('he');
						},
						check:function(card){return 10-get.value(card)},
						filterCard:true,
						position:'he',
						filterTarget:function(card,player,target){
							var next;
							switch(get.suit(card)){
								case 'heart':next='shunshou';break;
								case 'diamond':next='huogong';break;
								case 'club':next='guohe';break;
								case 'spade':next='juedou';break;
							}
							if(ui.selected.targets.length==1){
								return ui.selected.targets[0].canUse({name:next},target);
							}
							return true;
						},
						complexTarget:true,
						targetprompt:['发起者','承受者'],
						selectTarget:2,
						multitarget:true,
						content:function(){
							var next;
							switch(get.suit(cards[0])){
								case 'heart':next='shunshou';break;
								case 'diamond':next='huogong';break;
								case 'club':next='guohe';break;
								case 'spade':next='juedou';break;
							}
							targets[0].useCard({name:next},targets[1]);
						},
						ai:{
							order:6,
							result:{
								target:function(player,target){
									if(ui.selected.targets.length==0){
										return 3;
									}
									else{
										var next;
										var card=ui.selected.cards[0];
										switch(get.suit(card)){
											case 'heart':next='shunshou';break;
											case 'diamond':next='huogong';break;
											case 'club':next='guohe';break;
											case 'spade':next='juedou';break;
										}
										return get.effect(target,{name:next},ui.selected.targets[0],target);
									}
								}
							},
						}
					},
					sgk_hemou:{
						audio:1,
						srlose:true,
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return event.player!=player&&player.countCards('h')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard('是否对'+get.translation(trigger.player)+'发动【合谋】?').ai=function(card){
								if(get.attitude(player,trigger.player)>0&&!trigger.player.countCards('j','lebu')&&trigger.player.countCards('h')>2) return 4-get.value(card);
								return false;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_hemou',trigger.player);
								trigger.player.gain(result.cards);
								player.$give(1,trigger.player);
								switch(get.suit(result.cards[0])){
									case 'heart':trigger.player.addTempSkill('sgk_hemou_heart','phaseAfter');break;
									case 'diamond':trigger.player.addTempSkill('sgk_hemou_diamond','phaseAfter');break;
									case 'club':trigger.player.addTempSkill('sgk_hemou_club','phaseAfter');break;
									case 'spade':trigger.player.addTempSkill('sgk_hemou_spade','phaseAfter');break;
								}
							}
							else{
								event.finish();
							}
						},
						subSkill:{
							heart:{
								enable:'phaseUse',
								usable:1,
								marktext:'♥︎',
								mark:true,
								filter:function(event,player){
									return player.countCards('h',{suit:'heart'});
								},
								viewAs:{name:'shunshou'},
								viewAsFilter:function(player){
									if(!player.countCards('h',{suit:'heart'})) return false;
								},
								prompt:'将一张♥︎牌当顺手牵羊使用',
								filterCard:function(card,player){
									return get.suit(card)=='heart';
								},
								check:function(card){
									return 6-get.value(card);
								},
								ai:{
									order:7.5,
									threaten:1.5
								},
								intro:{
									name:'合谋·顺手',
									content:'回合限一次,可将一张♥︎牌当顺手牵羊使用.'
								}
							},
							diamond:{
								enable:'chooseToUse',
								usable:1,
								marktext:'♦︎',
								mark:true,
								viewAs:{name:'huogong',nature:'fire'},
								filterCard:function(card,player){
									return get.suit(card)=='diamond';
								},
								viewAsFilter:function(player){
									if(!player.countCards('h',{suit:'diamond'})) return false;
								},
								prompt:'将一张♦︎牌当火攻使用',
								check:function(card){
									var player=_status.currentPhase;
									if(player.countCards('h')>player.hp){
										return 6-get.value(card);
									}
									return 4-get.value(card)
								},
								ai:{
									order:4,
									threaten:1.5
								},
								intro:{
									name:'合谋·火攻',
									content:'回合限一次,可将一张♦︎牌当火攻使用.'
								}
							},
							club:{
								enable:'phaseUse',
								usable:1,
								marktext:'♣︎',
								mark:true,
								viewAs:{name:'jiedao'},
								filterCard:function(card,player){
									return get.suit(card)=='club';
								},
								viewAsFilter:function(player){
									if(!player.countCards('h',{suit:'club'})) return false;
								},
								prompt:'将一张♣︎牌当借刀杀人使用',
								check:function(card){
									return 6-get.value(card);
								},
								ai:{
									order:8
								},
								intro:{
									name:'合谋·借刀',
									content:'回合限一次,可将一张♣︎牌当借刀杀人使用.'
								}
							},
							spade:{
								enable:'phaseUse',
								usable:1,
								marktext:'♠︎',
								mark:true,
								viewAs:{name:'juedou'},
								filterCard:function(card,player){
									return get.suit(card)=='spade';
								},
								check:function(card){
									return 6-get.value(card);
								},
								ai:{
									order:5
								},
								intro:{
									name:'合谋·决斗',
									content:'回合限一次,可将一张♠︎牌当决斗使用.'
								}
							},
						}
					},
					sgk_qicai:{
						audio:1,
						srlose:true,
						trigger:{player:'loseEnd'},
						frequent:true,
						filter:function(event,player){
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='h') return true;
							}
							return false;
						},
						content:function(){
							'step 0'
							player.judge(function(card){
								if(get.color(card)=='red') return 2;
								return -2;
							})
							'step 1'
							if(result.bool){
								player.draw();
							}
						},
						ai:{
							threaten:0.8,
							effect:{
								target:function(card){
									if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.3;
								}
							}
						}
					},
					sgk_rende:{
						audio:1,
						srlose:true,
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard('是否对'+get.translation(trigger.player)+'发动【仁德】?',[1,player.countCards('h')]).ai=function(card){
								if(get.attitude(player,trigger.player)>0) return 4-get.value(card);
								return card.name=='du';
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_rende',trigger.player);
								trigger.player.gain(result.cards);
								player.$give(result.cards.length,trigger.player);
								trigger.player.stat.push({card:{},skill:{}});
								trigger.player.phaseUse();
								// .player.getStat().card={};
							}
							else{
								event.finish();
							}
						},
						ai:{
							expose:0.2
						}
					},
					sgk_chouxi:{
						audio:2,
						usable:1,
						srlose:true,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						check:function(card){
							return 4-get.value(card)
						},
						filterCard:true,
						content:function(){
							'step 0'
							event.cards1=get.cards(2);
							player.showCards(event.cards1);
							event.types=[];
							for(var i=0;i<event.cards1.length;i++){
								event.types.add(get.type(event.cards1[i],'trick'));
							}
							event.dialog=ui.create.dialog('弃置一张与'+get.translation(player)+'弃置的牌类别均不同的牌,然后让'+get.translation(player)+'获得'+get.translation(event.cards1)+'或受到来自'+get.translation(player)+'的一点伤害并获得其中一种类别的牌.','hidden');
							event.dialog.classList.add('noselect');
							event.dialog.add(event.cards1);
							'step 1'
							player.chooseTarget(function(card,player,target){
								return player!=target;
							},true).ai=function(target){
								return get.attitude(player,target)<0;
							}
							'step 2'
							event.target=result.targets[0];
							player.line(event.target);
							event.target.chooseToDiscard(dialog,function(card){
								return !event.types.contains(get.type(card,'trick'));
							}).ai=function(card){
								if(event.target.isTurnedOver()) return -1;
								return 8-get.value(card);
							}
							'step 3'
							if(result.bool){
								player.gain(event.cards1);
								event.finish();
							}
							else{
								event.target.damage();
								var dialog=ui.create.dialog('仇袭：选择一种类别的卡牌获得之',event.cards1);
								event.target.chooseButton([1,2],dialog,true).filterButton=function(button){
									for(var i=0;i<ui.selected.buttons.length;i++){
										if(get.type(button.link)!=get.type(ui.selected.buttons[i].link)) return false;
									}
									return true;
								}
							}
							'step 4'
							var cards2=[];
							for(var i=0;i<result.buttons.length;i++){
								cards2.push(result.buttons[i].link);
								event.cards1.remove(result.buttons[i].link);
							}
							event.target.gain(cards2);
							event.target.$gain(cards2)
							if(event.cards1.length){
								player.gain(event.cards1);
								player.$gain(event.cards1);
							}					
						},
						ai:{
							order:4,
							result:{
								player:1,
							}
						}
					},
					sgk_yongbing:{
						unique:true,
						zhuSkill:true,
						global:'sgk_yongbing2'
					},
					sgk_yongbing2:{
						audio:1,
						forceaudio:true,
						trigger:{source:'damageEnd'},
						filter:function(event,player){
							if(player.group!='shu') return false;
							if(event.card&&event.card.name!='sha') return false;
							return game.hasPlayer(function(target){
								return player!=target&&target.hasZhuSkill('sgk_yongbing',player);
							});
						},
						direct:true,
						content:function(){
							'step 0'
							var list=[];
							for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player&&game.players[i].hasZhuSkill('sgk_yongbing',player)){
									list.push(game.players[i]);
								}
							}
							event.list=list;
							'step 1'
							if(event.list.length){
								var current=event.list.shift();
								event.current=current;
								player.chooseBool('是否对'+get.translation(current)+'发动【拥兵】？').set('choice',get.attitude(player,current)>0);
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								player.logSkill('sgk_yongbing',event.current);
								event.current.draw();
							}
							event.goto(1);
						},
						ai:{
							expose:0.2,
						}
					},
					sgk_zhaoxiang:{
						audio:1,
						srlose:true,
						trigger:{global:'shaBegin'},
						filter:function(event,player){
							return event.player!=player;
						},
						direct:true,
						content:function(){
							'step 0'
							if(get.distance(player,trigger.player,'attack')<=1){
								player.chooseBool(get.prompt('sgk_zhaoxiang',trigger.player)).ai=function(){
									return false;
								};
							}
							else{
								player.chooseToDiscard(get.prompt('sgk_zhaoxiang',trigger.player)).ai=function(card){
									
									return 0;
								};
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_zhaoxiang',trigger.player);
								if(trigger.player.countCards('h')){
									trigger.player.chooseControl('选项一','选项二').set('prompt','招降<br><br><div class="text">选项一：令'+get.translation(player)+'获得你一张手牌</div><br><div class="text">选项二：即将对'+get.translation(trigger.target)+'生效的杀无效</div>').ai=function(){
										if(get.effect(trigger.target,{name:'sha'},trigger.player)<0) return '选项二';
										return '选项一';
									};
								}
								else{
									trigger.untrigger();
									trigger.finish();
									event.finish();
								}
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.control=='选项一'){
								player.gainPlayerCard('h',trigger.player,true);
							}
							else{
								trigger.untrigger();
								trigger.finish();
							}	
						},
						ai:{
							expose:0.5
						}
					},
					sgk_zhishi:{
						audio:2,
						srlose:true,
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return player!=target;
						},
						content:function(){
							'step 0'
							target.chooseToDiscard('弃置一张基本牌，并回复一点体力。或受到一点伤害并回复一点体力。',{type:'basic'}).ai=function(card){
								if(target.hasSkillTag('maixie')) return 0;
								if(get.recoverEffect(target,target,target)>0) return 6-get.value(card);
								return false;
							}
							'step 1'
							if(result.bool){
								target.recover();
							}
							else{
								target.damage(player);
								target.recover();
							}
						},
						ai:{
							order:8,
							result:{
								target:function(player,target){
									if(target.hasSkillTag('maixie')) return 0.5;
									return 0;
								}
							}
						}
					},
					sgk_jianxiong:{
						unique:true,
						global:'sgk_jianxiong2',
						zhuSkill:true,
					},
					sgk_jianxiong2:{
						audio:1,
						forceaudio:true,
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							if(player.group!='wei') return false;
							return game.hasPlayer(function(target){
								return event.source!=target&&target!=player&&target.hasZhuSkill('sgk_jianxiong',player)&&event.source!=target;
							})&&get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d'&&player.countCards('h')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							var list=[];
							for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player&&game.players[i].hasZhuSkill('sgk_jianxiong',player)){
									list.push(game.players[i]);
								}
							}
							event.list=list;
							'step 1'
							if(event.list.length){
								var current=event.list.shift();
								event.current=current;
								player.chooseToDiscard(get.prompt('sgk_jianxiong',current)).set('ai',function(card){
									if(get.attitude(_status.event.player,_status.event.current)>0){
										return 6-get.value(card);
									}
									return 0;
								}).set('logSkill',['sgk_jianxiong',event.current]);
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								event.current.gain(trigger.cards,'gain2');
								game.log(event.current,'获得了',trigger.cards);
							}
							event.goto(1);
						}
					},
					sgk_zhonghou:{
						trigger:{global:['useCardBegin','respondBegin']},
						direct:true,
						srlose:true,
						filter:function(event){
							return event.skill=='sgk_zhonghou_phaseUse_backup'||event.skill=='sgk_zhonghou_sha'||event.skill=='sgk_zhonghou_shan'||event.skill=='sgk_zhonghou_tao';
						},
						content:function(){
							'step 0'
							game.log(trigger.player,'向',player,'请求使用一张',trigger.card);
							player.chooseBool('是否失去一点体力视为'+get.translation(trigger.player)+'使用一张'+get.translation(trigger.card)+'？',function(){
								return false;
							});
							'step 1'
							if(result.bool){
								player.loseHp();
								event.finish();
							}
							else{
								var str='';
								if(Math.random()<0.5){
									str='丑拒'
								}
								else{
									str='蠢拒';
								}
								game.log(player,str+'了',trigger.player);
								if(trigger.name=='respond'){
									if(trigger.parent.result){
										trigger.parent.result.bool=false;
									}
								}
								else{
									trigger.untrigger();
									trigger.finish();
								}
							}
							'step 2'
							if(trigger.player.getStat('skill').sgk_zhonghou_phaseUse==undefined){
								trigger.player.getStat('skill').sgk_zhonghou_phaseUse=0;
							}
							trigger.player.getStat('skill').sgk_zhonghou_phaseUse++;
						},
						global:['sgk_zhonghou_phaseUse','sgk_zhonghou_sha','sgk_zhonghou_shan','sgk_zhonghou_tao'],
						subSkill:{
							phaseUse:{
								audio:2,
								usable:1,
								enable:'phaseUse',
								filter:function(event,player){
									return game.hasPlayer(function(target){
										return get.distance(target,player,'attack')<=1&&target.hasSkill('sgk_zhonghou');
									});
								},
								chooseButton:{
									dialog:function(){
										var list=['sha','shan','tao','jiu'];
										for(var i=0;i<list.length;i++){
											list[i]=['basic','',list[i]];
										}
										return ui.create.dialog('忠侯',[list,'vcard']);
									},
									check:function(button,player){
										var player=_status.event.player;
										var shaTarget=false;
										for(var i=0;i<game.players.length;i++){
											if(player.canUse('sha',game.players[i])&&get.effect(game.players[i],{name:'sha'},player)>1){
												shaTarget=true;
											}
										}
										if(player.hasSkill('zhaxiang')&&player.hp>1) return (button.link[2]=='tao')?1:-1;
										if(shaTarget&&player.countCards('h','sha')&&player.hp>2) return (button.link[2]=='jiu')?1:-1;
										if(shaTarget&&!player.countCards('h','sha')&&player.hp>2) return (button.link[2]=='sha')?1:-1;
										return 0;
									},
									filter:function(button,player){
										return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
									},
									backup:function(links,player){
										return {
											filterCard:function(){return false;},
											selectCard:-1,
											audio:2,
											usable:1,
											viewAs:{name:links[0][2]}
										}
									}
								},
								ai:{
									order:function(){
										return lib.card.sha.ai.order+0.3;
									},
									result:{
										player:1,
									}
								}
							},
							sha:{
								audio:2,
								enable:['chooseToUse','chooseToRespond'],
								filterCard:function(){return false;},
								selectCard:-1,
								viewAs:{name:'sha'},
								filter:function(event,player){
									if(event.parent.name=='phaseUse') return false;
									return game.hasPlayer(function(target){
										return get.distance(target,player,'attack')<=1&&target.hasSkill('sgk_zhonghou');
									});
								},
								ai:{
									respondSha:true
								}
							},
							shan:{
								audio:2,
								enable:['chooseToRespond','chooseToUse'],
								filterCard:function(){return false;},
								selectCard:-1,
								viewAs:{name:'shan'},
								filter:function(event,player){
									if(event.parent.name=='phaseUse') return false;
									return game.hasPlayer(function(target){
										return get.distance(target,player,'attack')<=1&&target.hasSkill('sgk_zhonghou');
									});
								},
								ai:{
									respondShan:true
								}
							},
							tao:{
								audio:2,
								enable:'chooseToUse',
								filter:function(event,player){
									if(event.parent.name=='phaseUse') return false;
									return game.hasPlayer(function(target){
										return get.distance(target,player,'attack')<=1&&target.hasSkill('sgk_zhonghou');
									});
								},
								filterCard:function(){return false;},
								selectCard:-1,
								viewAs:{name:'tao'},
								ai:{
									save:true
								}
							},
						}
					},
					sgk_ganglie:{
						audio:2,
						trigger:{player:'phaseUseBegin'},
						srlose:true,
						check:function(event,player){
							var cards=player.get('h');
							var num=0;
							for(var i=0;i<cards.length;i++){
								if(get.tag(cards[i],'damage')) num++;
							}
							if(num>1) return 1;
							return 0;
						},
						content:function(){
							player.loseHp();
							player.addTempSkill('sgk_ganglie_damage','phaseAfter');
							player.addTempSkill('sgk_ganglie_phaseEnd','phaseAfter');
						},
						subSkill:{
							damage:{
								trigger:{source:'damageBegin'},
								forced:true,
								filter:function(event){
									return event.num>0;
								},
								content:function(){
									trigger.num++;
									player.removeSkill('sgk_ganglie_damage');
								}
							},
							phaseEnd:{
								audio:2,
								trigger:{player:'phaseEnd'},
								forced:true,
								filter:function(event,player){
									return player.getStat('damage')>0;
								},
								content:function(){
									player.draw(player.getStat('damage'));
								}
							}
						}
					},
				},
				translate:{
					sgksr_choice:'抉择',
					sgksr_zhangliao:'SR张辽',
					sgksr_xiahoudun:'SR夏侯惇',
					sgksr_zhenji:'SR甄姬',
					sgksr_xuchu:'SR许褚',
					sgksr_simayi:'SR司马懿',
					sgksr_guojia:'SR郭嘉',
					sgksr_caocao:'SR曹操',
					sgksr_zhaoyun:'SR赵云',
					sgksr_zhangfei:'SR张飞',
					sgksr_machao:'SR马超',
					sgksr_guanyu:'SR关羽',
					sgksr_zhugeliang:'SR诸葛亮',
					sgksr_huangyueying:'SR黄月英',
					sgksr_liubei:'SR刘备',
					sgksr_sunshangxiang:'SR孙尚香',
					sgksr_daqiao:'SR大乔',
					sgksr_huanggai:'SR黄盖',
					sgksr_lvmeng:'SR吕蒙',
					sgksr_zhouyu:'SR周瑜',
					sgksr_ganning:'SR甘宁',
					sgksr_luxun:'SR陆逊',
					sgksr_sunquan:'SR孙权',
					sgksr_lvbu:'SR吕布',
					sgksr_huatuo:'SR华佗',
					sgksr_diaochan:'SR貂蝉',
					sgk_wuwei:'无畏',
					sgk_yansha:'掩杀',
					sgk_yansha2:'掩杀',
					sgk_yansha3:'掩杀',
					sgk_zhonghou:'忠侯',
					sgk_zhonghou_phaseUse:'忠侯',
					sgk_zhonghou_phaseUse_backup:'忠侯',
					sgk_zhonghou_sha:'忠侯',
					sgk_zhonghou_shan:'忠侯',
					sgk_zhonghou_tao:'忠侯',
					sgk_ganglie:'刚烈',
					sgk_liuyun:'流云',
					sgk_lingbo:'凌波',
					sgk_aozhan:'鏖战',
					sgk_aozhan2:'鏖战',
					sgk_huxiao:'虎啸',
					sgk_huxiao2:'虎啸',
					sgk_qingcheng:'倾城',
					sgk_qingcheng2:'倾城',
					sgk_guicai:'鬼才',
					sgk_langgu:'狼顾',
					sgk_langgu2:'狼顾',
					sgk_zhuizun:'追尊',
					sgk_zhuizun2:'追尊',
					sgk_tianshang:'天殇',
					sgk_yiji:'遗计',
					sgk_huiqu:'慧觑',
					sgk_zhaoxiang:'招降',
					sgk_zhishi:'治世',
					sgk_jianxiong:'奸雄',
					sgk_jianxiong2:'奸雄',
					sgk_jiuzhu:'救主',
					sgk_jiuzhu2:'救主',
					sgk_tuwei:'突围',
					sgk_xujin:'蓄劲',
					sgk_xujin2:'蓄劲',
					sgk_paoxiao:'咆哮',
					sgk_benxi:'奔袭',
					sgk_yaozhan:'邀战',
					sgk_wenjiu:'温酒',
					sgk_wenjiu2:'温酒',
					sgk_wenjiu3:'温酒',
					sgk_wenjiu4:'温酒',
					sgk_shuixi:'水袭',
					sgk_shuixi2:'水袭',
					sgk_sanfen:'三分',
					sgk_guanxing:'观星',
					sgk_weiwo:'帷幄',
					sgk_shouji:'授计',
					sgk_hemou:'合谋',
					sgk_qicai:'奇才',
					sgk_rende:'仁德',
					sgk_chouxi:'仇袭',
					sgk_yongbing:'拥兵',
					sgk_yongbing2:'拥兵',
					sgk_yinmeng:'姻盟',
					sgk_xiwu:'习武',
					sgk_juelie:'决裂',
					sgk_fangxin:'芳馨',
					sgk_xiyu:'细语',
					sgk_wanrou:'婉柔',
					sgk_wanrou2:'婉柔',
					sgk_zhouyan:'舟焰',
					sgk_zhaxiang:'诈降',
					sgk_shixue:'誓学',
					sgk_guoshi:'国士',
					sgk_guoshi2:'国士',
					sgk_yingcai:'英才',
					sgk_weibao:'伪报',
					sgk_choulve:'筹略',
					sgk_jiexi:'劫袭',
					sgk_youxia:'游侠',
					sgk_dailao:'待劳',
					sgk_youdi:'诱敌',
					sgk_youdi2:'诱敌',
					sgk_ruya:'儒雅',
					sgk_quanheng:'权衡',
					sgk_quanheng_backup:'权衡',
					sgk_xionglve:'雄略',
					sgk_xionglve2:'雄略',
					sgk_xionglve2_backup:'雄略',
					sgk_fuzheng:'辅政',
					sgk_jiwu:'极武',
					sgk_jiwu2:'极武',
					sgk_jiwu3:'极武',
					sgk_jiwu4:'极武',
					sgk_sheji:'射戟',
					sgk_sheji2:'射戟',
					sgk_xingyi:'行医',
					sgk_guagu:'刮骨',
					sgk_wuqin:'五禽',
					sgk_lijian:'离间',
					sgk_manwu:'曼舞',
					sgk_baiyue:'拜月',
					
					sgk_wuwei_info:'摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶的3张牌，其中每有一张基本牌，你便可视为对一名其他角色使用一张杀(每阶段对每名角色限一次)。然后将这些基本牌置入弃牌堆，其余收入手牌。',
					sgk_yansha_info:'摸牌阶段，你可以少摸一张牌。若若此做，本回合结束时，你可以将一张手牌置于武将牌上，称为『掩』。当一名角色使用杀选择目标后，你可以将一张『掩』置入弃牌堆，然后获得其两张牌。',
					sgk_zhonghou_info:'当你攻击范围内的一名角色需要使用或打出一张基本牌时，该角色可以声明之，然后你可以失去一点体力，视为该角色使用此牌（每名角色的回合限一次）',
					sgk_liuyun_info:'出牌阶段限一次，你可以横置你的武将牌并弃置一张黑色牌，然后令一名角色选择一项：回复1点体力，或摸两张牌。',
					sgk_lingbo_info:'一名角色的回合开始阶段，你可以重置你的武将牌，然后将场上的一张牌置于牌堆顶。',
					sgk_qingcheng_info:'你可以横置你的武将牌，视为你使用或打出一张杀；你可以重置你的武将牌，视为你使用或打出一张闪。',
					sgk_aozhan_info:'每当你因杀或决斗造成或受到一点伤害后，你可将牌堆顶的一张牌置于你的武将牌上，称为『战』。出牌阶段限一次，你可以选择一项：1、将所有『战』收入手牌。2、将所有『战』弃置，然后摸等量的牌。',
					sgk_huxiao_info:'出牌阶段，当你使用杀造成伤害时，若你的武将牌正面向上，你可以令此伤害+1并摸一张牌。若如此做，则此杀结算完毕后，将你的武将牌翻面并结束当前回合。',
					sgk_guicai_info:'在任意角色的判定牌生效前，你可以选择一项：1、打出一张手牌代替之。2、亮出牌堆顶的一张牌代替之。',
					sgk_langgu_info:'每当你造成或受到一次伤害后，你可以进行一次判定，若为黑色，你获得对方一张牌。',
					sgk_zhuizun_info:'限定技，当你进入濒死状态时，你可以恢复体力至1点，令所有其他角色依次交给你一张手牌。然后当前回合结束后，你进行一个额外的回合。',
					sgk_tianshang_info:'你死亡时，可令一名其他角色获得你当前另外一项技能，增加一点体力上限并回复一点体力。',
					sgk_yiji_info:'每当你受到一点伤害，可以观看牌堆顶的两张牌，并将其交给任意1~2名角色',
					sgk_huiqu_info:'回合开始阶段，你可以弃置一张手牌进行一次判定，若结果为红色，你将场上的一张牌移动到一个合理的位置；若结果为黑色，你对一名角色造成一点伤害，然后该角色摸一张牌。',
					sgk_zhaoxiang_info:'当一名其他角色使用杀指定目标后，若其在你攻击范围内，你令其选择一项：1、弃置一张牌。2、令此杀无效。若该角色不在你攻击范围内，你可以弃置一张牌令其做上述选择。',
					sgk_zhishi_info:'出牌阶段限一次，你可以令一名其他角色选择一项：1、弃置一张基本牌，然后回复一点。2、受到你造成的一点伤害，然后回复一点体力。',
					sgk_jianxiong_info:'主公技。每当其他魏势力受到不为你的一次伤害后，该角色可以弃置一张手牌，然后令你获得对其造成伤害的牌。',
					sgk_jiuzhu_info:'每当一张非转化的闪进入弃牌堆时，你可以用一张不为闪的牌替换之。若此时不是你的回合，你可以视为对当前回合角色使用一张无视防具的杀。',
					sgk_tuwei_info:'每当一张非转化的杀进入弃牌堆时，若你是此杀的目标或使用者，你可以弃置一张能造成伤害的牌，然后弃置此牌目标或使用者的共计两张牌。',
					sgk_xujin_info:'摸牌阶段，你可以放弃摸牌，改为展示牌堆顶的五张牌，并令一名角色获得其中一种花色的所有牌，再将其余的牌置入弃牌堆。若如此做，你本回合的攻击范围和可以使用的【杀】数量与以此法被获得的牌的数量相同。',
					sgk_paoxiao_info:'出牌阶段，当你使用【杀】对目标角色造成一次伤害并结算完毕后，你可以摸一张牌，然后选择一项：使用一张【杀】，或令该角色弃置你的一张牌。',
					sgk_benxi_info:'锁定技，你计算与其他角色的距离时始终-1.你使用【杀】指定目标后，目标角色须弃置一张装备牌，否则此【杀】不可被【闪】响应。',
					sgk_yaozhan_info:'出牌阶段限一次，你可以与一名其他角色拼点：若你赢，视为对其使用一张【杀】（此【杀】不计入每回合的使用限制）；若你没赢，该角色可以对你使用一张【杀】。',
					sgk_wenjiu_info:'出牌阶段限一次，你可以将一张黑色手牌置于你的武将牌上，称为[酒]。当你使用【杀】选择目标后，你可以将一张[酒]置入弃牌堆，然后当此【杀】造成伤害时，该伤害+1；当此【杀】被【闪】响应后，你摸一张牌。',
					sgk_shuixi_info:'回合开始阶段开始时，你可以展示一张手牌并选择一名有手牌的其他角色，令其选择一项：弃置一张与之相同花色的手牌，或失去1点体力。若该角色因此法失去体力，则此回合的出牌阶段，你不能使用【杀】。',
					sgk_sanfen_info:'出牌阶段限一次，你可以选择两名其他角色，其中一名你选择的角色须对另一名角色使用一张【杀】，然后另一名角色须对你使用一张【杀】，你弃置不如此做者一张牌。（使用杀有距离限制）',
					sgk_guanxing_info:'回合开始/结束阶段开始时，你可以观看牌堆顶的Ｘ张牌（Ｘ为存活角色的数量，且最多为3），将其中任意数量的牌以任意顺序置于牌堆顶，其余以任意顺序置于牌堆底。',
					sgk_weiwo_info:'锁定技，当你有手牌时，你防止受到的属性伤害；当你没有手牌时，你防止受到的非属性伤害。',
					sgk_shouji_info:'出牌阶段限一次，你可以弃置一张牌并选择两名角色，然后根据你弃置牌的花色，视为其中一名你选择的角色对另一名角色使用一张牌：黑桃【决斗】，梅花【过河拆桥】，红桃【顺手牵羊】，方片【火攻】。',
					sgk_hemou_info:'其他角色的出牌阶段开始时，你可以将一张手牌正面朝上交给该角色，该角色本阶段限一次，可将一张与之相同花色的手牌按下列规则使用：黑桃【决斗】，梅花【借刀杀人】，红桃【顺手牵羊】，方片【火攻】。',
					sgk_qicai_info:'每当你失去一次手牌时，你可以进行判定，若结果为红色，你摸一张牌。',
					sgk_rende_info:'任一角色的回合结束阶段结束时，你可以将任意数量的手牌交给该角色，然后该角色进行一个额外的出牌阶段。',
					sgk_chouxi_info:'出牌阶段限一次，你可以弃置一张手牌并展示牌堆顶的两张牌，然后令一名其他角色选择一项：弃置一张与之均不同类别的牌，然后令你获得这些牌；或受到你造成的1点伤害并获得其中一种类别的牌，然后你获得其余的牌。',
					sgk_yongbing_info:'主公技，当一名其他蜀势力角色使用【杀】造成一次伤害后，该角色可令你摸一张牌。',
					sgk_yinmeng_info:'出牌阶段限X次，若你有手牌，你可以展示一名其他男性角色的一张手牌，然后展示你的一张手牌，若两张牌类型相同，你与其各摸一张牌；若不同，你弃置其展示的牌，X为你所损失的体力且至少为1',
					sgk_xiwu_info:'当你使用的【杀】被目标角色的【闪】响应后，你可以摸一张牌，然后弃置其一张手牌。',
					sgk_juelie_info:'出牌阶段限一次，你可以令一名手牌数与你不同的其他角色选择一项：将手牌数调整至与你相等；或视为你对其使用一张【杀】（不计入出牌阶段的使用限制）。',
					sgk_fangxin_info:'当你需要使用一张【桃】时，你可以将一张梅花牌当【兵粮寸断】或将一张方片牌当【乐不思蜀】对自己使用，若如此做，视为你使用一张【桃】。',
					sgk_xiyu_info:'你的回合开始时，你可以弃置一名角色的一张牌，然后该角色进行一个额外的出牌阶段。',
					sgk_wanrou_info:'你的方片牌或你判定区的牌进入弃牌堆时，你可以令一名角色摸一张牌。',
					sgk_zhouyan_info:'出牌阶段，你可以令一名其它角色摸一张牌，若如此做，视为你对其使用一张【火攻】，你可以重复此流程直到你以此法未造成伤害。每当你使用【火攻】造成一次伤害后，你可以摸一张牌。',
					sgk_zhaxiang_info:'出牌阶段，你可以将一张手牌扣置，然后令一名其它角色选择一项：交给你一张牌并弃置此牌；或展示并获得此牌，若为【杀】，则视为你对其使用一张火属性的【杀】（不计入出牌阶段的使用限制）。',
					sgk_shixue_info:'当你使用【杀】指定目标后，你可以摸两张牌，当此【杀】被【闪】响应后，你须弃置两张牌。',
					sgk_guoshi_info:'任一角色的回合开始阶段开始时，你可以观看牌堆顶的两张牌，然后可将其中任意张牌置于牌堆底；任一角色的回合结束阶段开始时，你可以令其获得本回合因弃置或判定进入弃牌堆的一张牌。',
					sgk_yingcai_info:'摸牌阶段，你可以放弃摸牌，改为展示牌堆顶的一张牌，你重复此流程直到你展示出第三种花色的牌时，将这张牌置入弃牌堆，然后获得其余的牌。',
					sgk_weibao_info:'出牌阶段限一次，你可以将一张手牌置于牌堆顶，然后令一名其他角色选择一种花色后摸一张牌并展示之，若此牌与所选花色不同，你对其造成1点伤害。',
					sgk_choulve_info:'出牌阶段限一次，你可以交给两名其他角色各一张手牌，然后依次展示之，若点数不同，视为点数较大的一方对另一方使用一张【杀】，该【杀】造成伤害后，你摸一张牌。',
					sgk_jiexi_info:'出牌阶段，你可以与一名其他角色拼点，若你赢，视为对其使用一张【过河拆桥】。你可重复此流程直到你以此法拼点没赢。',
					sgk_youxia_info:'出牌阶段，若你的武将牌正面朝上，你可以将你的武将牌翻面，然后从一至两名其他角色处各获得一张牌；锁定技，若你的武将牌背面朝上，你不能成为【杀】和【决斗】的目标。',
					sgk_dailao_info:'出牌阶段限一次，你可以令一名其他角色与你各摸一张牌或各弃置一张牌，然后你与其依次将武将牌翻面。',
					sgk_youdi_info:'若你的武将牌背面朝上，你可以将其翻面来视为你使用一张【闪】。每当你使用【闪】响应一名角色使用的【杀】时，你可以额外弃置任意数量的手牌，然后该角色弃置等量的牌。',
					sgk_ruya_info:'当你失去最后的手牌时，你可以翻面并将手牌补至你体力上限的张数。',
					sgk_quanheng_info:'出牌阶段限一次，你可以将至少一张手牌当一张【无中生有】或【杀】使用，若你以此法使用的牌被【无懈可击】或【闪】响应时，你摸等量的牌。',
					sgk_xionglve_info:'摸牌阶段，你可以放弃摸牌，改为展示牌堆顶的两张牌，你获得其中一张牌，然后将另一张牌置于你的武将牌上，称为[略]。出牌阶段，你可以将一张基本牌或锦囊牌的[略]当与之同类别的任意一张牌（延时类锦囊牌除外）使用，将一张装备牌的[略]置于一名其他角色装备区内的相应位置。',
					sgk_fuzheng_info:'主公技，回合开始阶段开始时，你可以令至多两名其他吴势力角色各摸一张牌，然后这些角色依次将一张手牌置于牌堆顶。',
					sgk_jiwu_info:'出牌阶段限一次，你可以将你的手牌调整至一张，若如此做，本回合你的攻击范围无限，且你下一次使用的【杀】造成的伤害+1。锁定技，若你的装备区没有牌，你使用【杀】可以至多额外指定任意两名其他角色为目标。',
					sgk_sheji_info:'当一名装备区有武器牌的其他角色对另一名角色造成伤害后，你可以弃置一张牌，然后获得该角色的武器牌。你可以将装备牌当无距离限制的【杀】使用或打出，你以此法使用的【杀】须连续使用两张【闪】才能抵消。',
					sgk_xingyi_info:'出牌阶段限一次，你可以获得一名有手牌的其他角色一张手牌，然后令其回复1点体力。',
					sgk_guagu_info:'当一名角色进入濒死状态时，你可以弃置其所有手牌（至少一张），然后该角色回复1点体力。若你以此法弃置其两张或更多的手牌时，该角色摸一张牌。',
					sgk_wuqin_info:'回合结束阶段结束时，你可以弃置一张基本牌，然后选择一项：摸两张牌，或进行一个额外的出牌阶段。',
					sgk_lijian_info:'出牌阶段，你可以弃一张牌并选择两名其他男性角色。若如此做，视为其中一名男性角色对另一名男性角色使用一张【决斗】。◆使用离间时，你决定由哪名角色作为【决斗】的发起者。',
					sgk_manwu_info:'出牌阶段限一次，你可以展示一名男性角色的一张手牌，若此牌为方片，将之置于该角色的判定区内，视为【乐不思蜀】；若不为方片，你获得之。',
					sgk_baiyue_info:'回合结束阶段开始时，你可以获得本回合其他角色进入弃牌堆的一张牌。',
					sgk_ganglie_info:'出牌阶段开始时，你可以失去1点体力，若如此做，你本回合下一次造成的伤害+1。且本回合你每造成1点伤害，回合结束时你便摸一张牌',
				}
			},'SR武将');
		}
		// ---------------------------------------SK武将------------------------------------------//
		if(config.sgk_sk){
			game.addCharacterPack({
				character:{
					sgksk_dengzhi:['male','shu',3,['sgk_hemeng','sgk_sujian'],['die_audio']],
					sgksk_xuyou:['male','wei',3,['sgk_yexi','sgk_kuangyan'],['die_audio']],
					sgksk_zhangbu:['male','wu',3,['sgk_chaochen','sgk_quanzheng'],['die_audio']],
					sgksk_miheng:['male','qun',3,['sgk_shejian','sgk_kuangao'],['die_audio']],
					sgksk_zumao:['male','wu',4,['sgk_yinbing'],['die_audio']],
					sgksk_huaxiong:['male','qun',5,['sgk_fenwei','sgk_shiyong'],['die_audio']],
// 					sgksk_sunce:['male','wu',4,['sgk_angyang','sgk_weifeng','sgk_xieli'],['zhu','die_audio']],
					sgksk_caoren:['male','wei',4,['sgk_jushou'],['die_audio']],
					sgksk_gongsunzan:['male','qun',4,['sgk_yicong','sgk_muma'],['die_audio']],
					sgksk_sunqian:['male','shu',3,['sgk_suiji','sgk_fengyi'],['die_audio']],
					sgksk_maliang:['male','shu',3,['sgk_yalv','sgk_xiemu'],['die_audio']],
					sgksk_buzhi:['male','wu',3,['sgk_zhejie','sgk_fengya'],['die_audio']],
					sgksk_wangping:['male','shu',4,['sgk_yijian','sgk_feijun'],['die_audio']],
					sgksk_huangyueying:['female','shu',3,['sgk_muniu','sgk_liuma'],['die_audio']],
					sgksk_dongzhuo:['male','qun',6,['sgk_baozheng','sgk_lingnu'],['die_audio']],
					sgksk_chendao:['male','shu',4,['sgk_zhongyong'],['die_audio']],
					sgksk_dingfeng:['male','wu',4,['sgk_bozhan','sgk_qingxi'],['die_audio']],
					sgksk_wenchou:['male','qun',4,['sgk_langxing'],['die_audio']],
					sgksk_yanliang:['male','qun',4,['sgk_hubu'],['die_audio']],
					sgksk_zhuran:['male','wu',4,['sgk_danshou','sgk_yonglie'],['die_audio']],
					sgksk_lukang:['male','wu',4,['sgk_hengshi','sgk_zhijiao'],['die_audio']],
					sgksk_lvlingqi:['female','qun',4,['sgk_jiwux'],['die_audio']],
					sgksk_zhoucang:['male','shu',4,['sgk_daoshi'],['die_audio']],
					sgksk_kongrong:['male','qun',3,['sgk_lirang','sgk_xianshi'],['die_audio']],
					sgksk_caochong:['male','wei',3,['sgk_chengxiang','sgk_renxin'],['die_audio']],
// 					sgksk_zhanglu:['male','qun',3,['sgk_midao','sgk_yishe','sgk_pudu'],['die_audio']],
					sgksk_guanlu:['male','wei',3,['sgk_zongqing','sgk_bugua'],['die_audio']],
					sgksk_simazhao:['male','wei',3,['sgk_zhaoxin','sgk_zhihe'],['die_audio']],
					sgksk_yangxiu:['male','wei',3,['sgk_caijie','sgk_jilei'],['die_audio']],
					sgksk_liyan:['male','shu',4,['sgk_yanliang'],['die_audio']],
					sgksk_jiping:['male','qun',3,['sgk_duzhi','sgk_lieyi'],['die_audio']],
					sgksk_sunhao:['male','wu',4,['sgk_baoli'],['die_audio']],
					sgksk_zhugejin:['male','wu',3,['sgk_huanbing','sgk_hongyuan'],['die_audio']],
					sgksk_zhangxiu:['male','qun',4,['sgk_huaqiang','sgk_chaohuang'],['die_audio']],
					sgksk_sunluyu:['female','wu',3,['sgk_huilian','sgk_wenliang'],['die_audio']],
					sgksk_luzhi:['male','qun',3,['sgk_jinglun','sgk_ruzong'],['die_audio']],	
					sgksk_yuji:['male','qun',3,['sgk_guhuo','sgk_fulu'],['die_audio']],
					sgksk_zhangning:['female','qun',3,['sgk_leiji','sgk_shanxi'],['die_audio']],
					sgksk_guonvwang:['female','wei',3,['sgk_gongshen','sgk_jianyue'],['die_audio']],
					sgksk_chengyu:['male','wei',3,['sgk_pengri','sgk_danmou'],['die_audio']],
					sgksk_zhangren:['male','qun',4,['sgk_fushe'],['die_audio']],
					// sgksk_mizhu:['male','shu',3,['sgk_ziguo','sgk_shangdao'],['die_audio']],
					sgksk_zangba:['male','wei',4,['sgk_hengjiang'],['die_audio']],
					// sgksk_hejin:['male','qun',4,['sgk_zhuanshan'],['die_audio']],
					// sgksk_wangyi:['female','wei',3,['sgk_zhenlie','sgk_miji'],['die_audio']],
					// sgksk_zuoci:['male','qun',3,['sgk_qianhuan']],
					sgkstar_guanyu:['male','shu',4,['wusheng','sgk_danji'],['die_audio']],
					sgksk_zhangbao:['male','qun',3,['sgk_zhoufu','sgk_yingbing'],['die_audio']],
				},
				skill:{
					sgk_zhoufu:{
						audio:2,
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return player.countCards('h')>0&&event.player!=player;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('sgk_zhoufu',trigger.player));
							'step 1'
							if(result.bool){
								player.logSkill('sgk_zhoufu',trigger.player);
								trigger.player.judge(function(card){
									if(get.color(card)=='black') return -1;
									return 1;
								});
							}
							else{
								event.finish();
							}
							'step 2'
							if(!result.bool){
								if(result.suit=='spade'){
									var list=[];
									for(var i=0;i<trigger.player.skills.length;i++){
										list.push(trigger.player.skills[i]);
									}
									trigger.player.disableSkill('sgk_zhoufu',list);
									trigger.player.addSkill('sgk_zhoufu2');
								}
								else{
									trigger.player.chooseToDiscard(2,true);
								}
							}
						}
					},
					sgk_zhoufu2:{
						trigger:{global:'phaseAfter'},
						forced:true,
						mark:true,
						name:'咒缚',
						marktext:'缚',
						audio:false,
						popup:false,
						content:function(){
							player.enableSkill('sgk_zhoufu');
							player.removeSkill('sgk_zhoufu2');
						},
						intro:{
							content:function(st,player){
								var storage=player.disabledSkills.sgk_zhoufu;
								if(storage&&storage.length){
									var str='失效技能：';
									for(var i=0;i<storage.length;i++){
										if(lib.translate[storage[i]+'_info']){
											str+=get.translation(storage[i])+'、';
										}
									}
									return str.slice(0,str.length-1);
								}
							}
						}
					},
					sgk_yingbing:{
						audio:2,
						trigger:{global:'judgeEnd'},
						check:function(event,player){
							return get.effect(event.player,{name:'sha'},player,player)>0;
						},
						logTarget:'player',
						filter:function(event,player){
							if(event.nogain&&event.nogain(event.result.card)){
								return false;
							}
							return get.color(event.result.card)=='black';
						},
						content:function(){
							player.useCard({name:'sha'},trigger.player,false);
						}
					},
					sgk_danji:{
						skillAnimation:true,
						trigger:{player:'phaseBegin'},
						forced:true,
						filter:function(event,player){
							return !player.storage.sgk_danji&&player.countCards('h')>player.hp;
						},
						init:function(player){
							player.storage.sgk_danji=false;
						},
						content:function(){
							player.storage.sgk_danji=true;
							player.loseMaxHp();
							player.recover(2);
							player.addSkill('sgk_tuodao');
						}
					},
					sgk_tuodao:{
						audio:2,
						trigger:{target:'shaMiss'},
						filter:function(event,player){
							return get.distance(player,event.player,'attack')<=1;
						},
						direct:true,
						content:function(){
							'step 0'
							player.addSkill('sgk_tuodao_buff');
							'step 1'
							player.chooseToUse({name:'sha'},'拖刀：是否对'+get.translation(trigger.player)+'使用一张杀？',trigger.player,-1).set('logSkill','sgk_tuodao');
							'step 2'
							player.removeSkill('sgk_tuodao_buff');
							
						},
						subSkill:{
							buff:{
								audio:false,
								trigger:{player:'shaBegin'},
								forced:true,
								popup:false,
								content:function(){
									trigger.directHit=true;
								},
								ai:{
									unequip:true
								}
							}
						}
					},
					sgk_hemeng:{
						audio:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h')&&player.storage.sgk_hemeng_usable>0;
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						content:function(){
							'step 0'
							player.storage.sgk_hemeng_usable--;
							target.viewCards('和盟',player.getCards('h'));
							target.gainPlayerCard(player,'visible',true);
							'step 1'
							player.viewCards('和盟',target.getCards('h'));
							player.gainPlayerCard(target,'visible',true,'h').set('ai',function(button){
								var card=button.link;
								return get.value(card);
							});
						},
						init:function(player){
							player.storage.sgk_hemeng_usable=0;
						},
						group:['sgk_hemeng_usable'],
						subSkill:{
							usable:{
								trigger:{player:'phaseUseBegin'},
								popup:false,
								forced:true,
								content:function(){
									player.storage.sgk_hemeng_usable=player.maxHp-player.hp;
								}
							}
						},
						ai:{
							order:6,
							result:{
								player:1,
								target:-0.5,
							}
						}
					},
					sgk_sujian:{
						audio:1,
						trigger:{player:'gainEnd'},
						filter:function(event,player){
							return event.source&&event.source!=player;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget('素检:选择一名其他角色弃置你一张牌,然后你弃置其一张牌',function(card,player,target){
								return player!=target;
							}).ai=function(target){
								if(!player.countCards('he')) return -get.attitude(player,target)&&target.countCards('he');
								if(player.countCards('he')>4) return get.attitude(player,target)&&target.countCards('he');
								return 0;
							}
							'step 1'
							if(result.bool){
								result.targets[0].discardPlayerCard(player,'he',true);
								player.discardPlayerCard(result.targets[0],'he',true);
							}
						}
					},
					sgk_yexi:{
						audio:1,
						trigger:{player:'phaseAfter'},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							var check=(game.hasPlayer(function(current){
								return player!=current&&current.countCards('h')>1&&get.attitude(player,current)>3
							}))&&(player.countCards('h')>1||player.hp>2);
							player.chooseCardTarget({
								ai1:function(card){
									var evt=_status.event;
									if(!evt.check) return 0;
									return 6-get.useful(card);
								},
								ai2:function(target){
									var evt=_status.event;
									if(!evt.check) return 0;
									return get.attitude(evt.player,target);
								},
								filterTarget:function(card,player,target){
									return target!=player;
								},
								filterCard:true,
								prompt:get.prompt('sgk_yexi'),
								check:check,
								target:target
							});
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.logSkill('sgk_yexi',event.target);
								player.discard(result.cards);
								event.target.chooseControl('选项一','选项二',function(){
									return Math.random()<0.5?'选项一':'选项二';
								}).set('prompt','夜袭<br><br><div class="text">1:使用黑色杀时无视防具.</div><br><div class="text">2:使用红色杀时无视距离.</div></br>');
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.control=='选项一'){
								event.target.addSkill('sgk_yexi_getBlack');
							}
							else{
								event.target.addSkill('sgk_yexi_getRed');
							}
						},
						subSkill:{
							getBlack:{
								trigger:{player:'phaseUseBegin'},
								forced:true,
								popup:false,
								content:function(){
									player.addTempSkill('sgk_yexi_black','phaseAfter');
									player.removeSkill('sgk_yexi_getBlack');
								}
							},
							getRed:{
								trigger:{player:'phaseUseBegin'},
								forced:true,
								popup:false,
								content:function(){
									player.addTempSkill('sgk_yexi_red','phaseAfter');
									player.removeSkill('sgk_yexi_getRed');
								}
							},
							black:{
								mark:true,
								marktext:'夜',
								intro:{
									name:'夜袭',
									content:'使用黑色杀时无视防具'
								},
								trigger:{player:'shaBefore'},
								forced:true,
								popup:false,
								filter:function(event,player){
									return event.card&&get.color(event.card)=='black';
								},
								content:function(){
									player.addTempSkill('unequip','shaAfter');
								}
							},
							red:{
								mark:true,
								marktext:'夜',
								intro:{
									name:'夜袭',
									content:'使用红色杀时无视距离'
								},
								mod:{
									targetInRange:function(card,player){
										if(card.name=='sha'&&get.color(card)=='red') return true;
									}
								}
							}
						}
					},
					sgk_kuangyan:{
						audio:2,
						priority:-10,
						trigger:{player:'damageBegin'},
						filter:function(event,player){
							return !event.nature&&event.num==1;
						},
						forced:true,
						content:function(){
							trigger.untrigger();
							trigger.finish();
						},
						group:'sgk_kuangyan2'
					},
					sgk_kuangyan2:{
						audio:2,
						trigger:{player:'damageBegin'},
						filter:function(event,player){
							return event.num>=2;
						},
						priority:-10,
						forced:true,
						content:function(){
							trigger.num++;
						},
					},
					sgk_chaochen:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filterCard:true,
						selectCard:[1,Infinity],
						discard:false,
						prepare:function(cards,player,targets){
							player.$give(cards.length,targets[0]);
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						complexCard:true,
						check:function(card){
							if(ui.selected.cards.length==0) return 4-get.value(card);
							return 0;
						},
						content:function(){
							target.gain(cards);
							target.storage.sgk_chaochen=player;
							target.addTempSkill('sgk_chaochen2',{player:'phaseAfter'});
						},
						ai:{
							order:5,
							result:{
								player:-1,
								target:function(target){
									var th=target.countCards('h');
									if(th+1>target.hp) return -1;
									return 0;
								}
							}
						}
					},
					sgk_chaochen2:{
						audio:2,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.countCards('h')>player.hp;
						},
						direct:true,
						content:function(){
							player.storage.sgk_chaochen.logSkill('sgk_chaochen2',player);
							player.damage(player.storage.sgk_chaochen);
							delete player.storage.sgk_chaochen;
						}
					},
					sgk_quanzheng:{
						audio:true,
						trigger:{target:'useCardToBefore'},
						filter:function(event,player){
							if(event.player==player) return false;
							if(get.type(event.card)!='trick'&&event.card.name!='sha') return false;
							if(event.player.countCards('h')>player.countCards('h')||event.player.countCards('e')>player.countCards('e'))
								return true;
							return false;
						},
						frequent:true,
						content:function(){
							player.draw();
						}
					},
					sgk_shejian:{
						audio:1,
						enable:'phaseUse',
						filter:function(event,player){
							return !player.getEquip(2);
						},
						filterTarget:function(card,player,target){
							return target.countCards('he')&&player!=target&&!target.hasSkill('sgk_shejian2');
						},
						content:function(){
							'step 0'
							target.addTempSkill('sgk_shejian2','phaseAfter');
							player.discardPlayerCard('he',target,true);
							target.chooseBool('是否对'+get.translation(player)+'使用一张【杀】？').ai=function(card,player,target){
								return get.effect(player,{name:'sha'},target,target);
							}
							'step 1'
							if(result.bool){
								target.useCard({name:'sha'},player,false);
							}			
						},
						ai:{
							order:9,
							result:{
								player:function(player,target){
									if(player.hp<=2) return -2;
									if(!player.countCards('h','shan')) return -1;
									return -0.5;
								},
								target:-1,
							}
						}
					},
					sgk_shejian2:{},
					sgk_kuangao:{
						audio:2,
						trigger:{target:'shaAfter'},
						filter:function(event,player){
							return player.countCards('he');
						},
						check:function(event,player){
							var phe=player.countCards('he');
							var the=event.player.countCards('he');
							if(the>phe&&get.attitude(player,event.player)<0) return 1;
							if(event.player.countCards('h')<event.player.maxHp&&get.attitude(player,event.player)>0) return 1;
							return 0;
						},
						content:function(){
							'step 0'
							player.chooseControl('选项一','选项二',function(){
									var phe=player.countCards('he');
									var the=trigger.player.countCards('he');
									if(the>phe&&get.attitude(player,trigger.player)<0) return '选项一';
									if(get.attitude(player,trigger.player)>0) return '选项二';
									return '选项二';
								}).set('prompt','狂傲<br><br><div class="text">1:弃置所有牌(至少一张),然后'+get.translation(trigger.player)+'弃置所有牌.</div><br><div class="text">2:令'+get.translation(trigger.player)+'将手牌补至其体力上限的张数(至多5张).</div></br>');
							'step 1'
							if(result.control=='选项一'){
								player.discard(player.getCards('he'));
								trigger.player.discard(trigger.player.getCards('he'));
							}
							else{
								if(Math.min(5,trigger.player.maxHp)-trigger.player.countCards('h')){
									trigger.player.draw(Math.min(5,trigger.player.maxHp)-trigger.player.countCards('h'));
								}	
							}
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(card.name=='sha'&&get.attitude(player,target)<0) return [1,-target.num('he'),1,-player.num('he')];
									if(get.attitude(player,target)>3&&player.countCards('h')<player.maxHp-2) return [1,0,1,Math.min(5,player.maxHp)-player.countCards('h')];
									return [1,-target.num('he'),1,-player.num('he')];
								}
							}
						}
					},
					sgk_yinbing:{
						audio:true,
						trigger:{global:'shaBegin'},
						filter:function(event,player){
							return player.distanceTo(event.target,'attack')<=1&&event.target!=player&&event.player!=player&&event.target.countCards('e');
						},
						check:function(event,player){
							if(player.countCards('h','shan')&&get.effect(event.target,{name:'sha'},event.player,player)<0){
								return 1;
							}
							if(player.hp==1&&event.player.num('e','guanshi')) return 0; 
							if(get.attitude(player,event.target)>0&&player.hp>=2&&get.effect(event.target,{name:'sha'},event.player,player)<0) return 1;
							return 0;
						},
						content:function(){
							player.gainPlayerCard(trigger.target,'e',true);
							trigger.target=player;
							trigger.untrigger();
							trigger.trigger('useCardToBefore');
							trigger.trigger('shaBefore');
						},
						group:['sgk_yinbing2'],
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(!target.hasFriend()) return;
									if(card.name=='sha'&&target.maxHp-target.hp>1&&target.countCards('h')>1) return [1,target.maxHp-target.hp-1];
									return 1.1;
								}
							}
						}
					},
					sgk_yinbing2:{
						audio:true,
						trigger:{target:'shaBefore'},
						filter:function(event,player){
							return player.countCards('he')>0&&player.maxHp>player.hp;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('sgk_yinbing2'),'he').ai=function(card){
								if(player.maxHp-player.hp>1) return 6-get.value(card);
								if(player.maxHp-player.hp>2) return 10-get.value(card);
								return 4-get.value(card);
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_yinbing2');
								player.draw(player.maxHp-player.hp);
							}
						}
					},
					sgk_fenwei:{
						audio:1,
						trigger:{source:'damageBegin'},
						filter:function(event,player){
							return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.countCards('h');
						},
						forced:true,
						content:function(){
							'step 0'
							event.card=trigger.player.getCards('h').randomGet();
							player.line(trigger.player);
							player.showCards(event.card);
							'step 1'
							if(event.card.name=='tao'||event.card.name=='jiu'){
								player.gain(event.card);
								trigger.player.$give(event.card,player);
							}
							if(get.type(event.card)!='basic'){
								trigger.player.discard(event.card);
								trigger.num++;
							}
						},
					},
					sgk_shiyong:{
						trigger:{player:'damageEnd'},
						audio:2,
						filter:function(event){
							if(event.card&&(event.card.name=='sha')){
								if(get.color(event.card)=='red') return true;
								if(event.source&&event.source.hasSkill('jiu')) return true;
							}
							return false;
						},
						forced:true,
						content:function(){
							player.loseMaxHp();
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(card.name=='sha'&&(get.color(card)=='red')){
										return [1,-2];
									}
								}
							}
						}
					},
					sgk_angyang:{
						audio:1,
						trigger:{player:['shaBefore','juedouBefore']},
						filter:function(event,player){
							if(event.card.name=='juedou') return true;
							return get.color(event.card)=='red';
						},
						frequent:true,
						content:function(){
							if(trigger.target.countCards('j')){
								player.draw(2);
							}
							else{
								player.draw();
							}
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
						group:'sgk_angyang2'
					},
					sgk_angyang2:{
						audio:1,
						trigger:{target:['shaBefore','juedouBefore']},
						filter:function(event,player){
							if(event.card.name=='juedou') return true;
							return get.color(event.card)=='red';
						},
						frequent:true,
						content:function(){
							if(trigger.player.countCards('j')){
								player.draw(2);
							}
							else{
								player.draw();
							}
						}
					},
					sgk_weifeng:{
						audio:1,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.countCards('h')<player.hp&&player.countCards('h')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_weifeng'),function(card,player,target){
								return player!=target&&target.countCards('h');
							}).ai=function(target){
								return -get.attitude(player,target);
							}
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.logSkill('sgk_weifeng',event.target);
								player.chooseToCompare(event.target);
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								player.draw(2);
							}
							else{
								event.target.draw(2);
							}
						}
					},
					sgk_xieli:{
						audio:1,
						zhuSkill:true,
						trigger:{player:'chooseCardBegin'},
						filter:function(event,player){
							if(!player.hasZhuSkill('sgk_xieli')) return false;
							return event.getParent().name=='chooseToCompare';
						},
						check:function(){return 1},
						content:function(){
							'step 0'
							trigger.untrigger();
							trigger.finish();
							var targets=game.filterPlayer(function(current){
								return player!=current&&current.group=='wu';
							});
							event.targetx=targets;
							event.cards=[];
							'step 1'
							if(event.targetx.length){
								var current=event.targetx.shift();
								if(current.countCards('h')){
									current.chooseCard('是否帮'+get.translation(player)+'打出一张拼点牌？').ai=function(card){
										if(get.attitude(current,player)>0) return card.number>8&&7-get.value(card);
										return 0;
									}
									event.current=current;
								}
								else{
									event.redo();
								}
							}
							else{
								event.goto(3);
							}
							'step 2'
							if(result.bool){
								event.cards=event.cards.concat(result.cards[0]);
								event.current.lose(result.cards[0],ui.special);
								event.current.$give(1,player);
							}
							if(event.targetx.length){
								event.goto(1);
							}
							'step 3'
							if(event.cards.length){
								var dialog=ui.create.dialog('协力',event.cards);
								player.chooseButton(dialog,true).ai=function(button){
									return button.link[1];
								}
							}
							else{
								event.finish();
							}
							'step 4'
							trigger.result={
								bool:true,
								cards:[result.buttons[0].link],
							};
							trigger.result.cards[0].classList.add('glow');
							event.cards.remove(result.buttons[0].link);
							player.discard(event.cards);
						},
					},
					sgk_jushou:{
						audio:1,
						trigger:{player:'phaseEnd'},
						check:function(event,player){
							if(player.isTurnedOver()) return true;
							if(game.countPlayer(function(current){
								return get.distance(current,player,'attack')<=1&&current!=player;
							})>2) return 1;
							return 0
						},
						prompt:function(event,player){
							return get.prompt('sgk_jushou')+'可以摸'+get.cnNumber(game.countPlayer(function(current){
								return get.distance(current,player,'attack')<=1&&current!=player;
							})+1)+'张牌';
						},
						content:function(){
							'step 0'
							player.draw(Math.min(5,game.countPlayer(function(current){
								return get.distance(current,player,'attack')<=1&&current!=player;
							})+1));
							player.turnOver();
						}
					},
					sgk_yicong:{
						inherit:'yicong'
					},
					sgk_muma:{
						audio:1,
						trigger:{global:'loseAfter'},
						forced:true,
						filter:function(event,player){
							if(event.player==player) return false;
							if(_status.currentPhase==player) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='e'&&get.position(event.cards[i])=='d') 
									return !player.getEquip(get.subtype(event.cards[i])[5])&&(get.subtype(event.cards[i])=='equip3'||get.subtype(event.cards[i])=='equip4');
							}
							return false;
						},
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].original=='e'&&!player.getEquip(get.subtype(trigger.cards[i])[5])&&(get.subtype(trigger.cards[i])=='equip3'||get.subtype(trigger.cards[i])=='equip4')) 
									player.gain(trigger.cards[i],'gain');
							}
							
						},
					},
					sgk_suiji:{
						audio:2,
						trigger:{global:'phaseDiscardBegin'},
						filter:function(event,player){
							return event.player!=player;
						},
						direct:true,
						content:function(){
							'step 0'
							var next=player.chooseCard(get.prompt('sgk_suiji',trigger.player),[1,Infinity]).ai=function(card){
								if(trigger.player.countCards('h')-trigger.player.hp+1>1&&ui.selected.cards.length==0) return 10-get.value(card);
								if(trigger.player.countCards('h')-trigger.player.hp+1>1&&ui.selected.cards.length==1) return 0;
								if(trigger.player.countCards('h')<2&&get.attitude(player,trigger.player)>3&&player.countCards('h')>3) return 6-get.value(card);
								return 0;
							}
							next.set('complexCard',true);
							'step 1'
							if(result.bool){
								player.logSkill('sgk_suiji',trigger.player);
								trigger.player.gain(result.cards);
								player.$give(result.cards.length,trigger.player);
								game.delay();
							}
							else{
								event.finish();
							}
							'step 2'
							var num=trigger.player.countCards('h')-trigger.player.hp;
							if(num>0){
								trigger.player.chooseCard('交给'+get.translation(player)+get.cnNumber(num)+'张手牌',num,true).ai=function(card){
									return -get.value(card);
								}
							}
							else{
								event.finish();
							}
							'step 3'
							if(result.bool){
								player.gain(result.cards);
								trigger.player.$give(result.cards.length,player);
							}
						}
					},
					sgk_fengyi:{
						audio:2,
						trigger:{target:'useCardToBefore'},
						filter:function(event,player){
							return get.type(event.card)=='trick'&&event.targets.length==1;
						},
						frequent:true,
						content:function(){
							player.draw();
						},
					},
					sgk_yalv:{
						audio:2,
						trigger:{player:['damageEnd','phaseUseBegin']},
						frequent:true,
						content:function(){
							'step 0'
							event.cards=get.cards(2);
							player.chooseCardButton('雅虑:请选择牌堆顶的牌,先选择的在上',2,event.cards,true);
							'step 1'
							for(var i=1;i>=0;i--){
								event.cards.remove(result.buttons[i].link);
								ui.cardPile.insertBefore(result.buttons[i].link,ui.cardPile.firstChild);
							}
							player.chooseBool('是否摸一张牌？').ai=function(){
								return 1;
							}
							'step 2'
							if(result.bool){
								player.draw();
							}			
						}
					},
					sgk_xiemu:{
						audio:2,
						trigger:{global:'phaseBegin'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('sgk_xiemu',trigger.player)).ai=function(card){
								if(get.attitude(player,trigger.player)>0&&trigger.player.hasJudge('lebu')) return get.suit(card)=='heart';
								if(get.attitude(player,trigger.player)>0&&trigger.player.hasJudge('bingliang')) return get.suit(card)=='club';
								if(get.attitude(player,trigger.player)>0&&trigger.player.hasJudge('shandian')) return (get.suit(card)!='spade'||(card.number<2||card.number>9));
								if(get.attitude(player,trigger.player)<0&&trigger.player.hasJudge('lebu')) return get.suit(card)!='heart';
								if(get.attitude(player,trigger.player)<0&&trigger.player.hasJudge('bingliang')) return get.suit(card)!='club';
								if(get.attitude(player,trigger.player)<0&&trigger.player.hasJudge('shandian')) return (get.suit(card)=='spade'&&card.number>=2&&card.number<=9);
								return 0;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_xiemu',trigger.player);
								trigger.player.addSkill('sgk_xiemu3');
								event.card=result.cards[0];
								player.lose(result.cards,ui.special);
								game.broadcastAll(function(player){
									var cardx=ui.create.card();
									cardx.classList.add('infohidden');
									cardx.classList.add('infoflip');
									player.$throw(cardx,1000,'nobroadcast');
								},player);
							}
							else{
								event.finish();
							}
							'step 2'
							if(player==game.me) game.delay(0.5);
							'step 3'
							if(event.card){
								event.card.fix();
								ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
							}
						},
						group:'sgk_xiemu2'
					},
					sgk_xiemu2:{
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							return event.player.hasSkill('sgk_xiemu3');
						},
						popup:false,
						forced:true,
						content:function(){
							'step 0'
							trigger.player.removeSkill('sgk_xiemu3');
							player.chooseBool('是否让'+get.translation(trigger.player)+'摸一张牌？').ai=function(){
								if(get.attitude(player,trigger.player)>0) return 1;
								return 0;
							}
							'step 1'
							if(result.bool){
								trigger.player.draw();
							}
						},
						ai:{
							expose:0.2
						}
					},
					sgk_xiemu3:{},
					sgk_zhejie:{
						audio:2,
						trigger:{global:'phaseDiscardEnd'},
						filter:function(event,player){
							return event.player!=player&&player.countCards('h')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('sgk_zhejie',trigger.player)).ai=function(card){
								if(get.attitude(player,trigger.player)<0&&trigger.player.countCards('he')>0) return 6-get.value(card);
								return 0;
							}
							'step 1'
							if(result.bool&&trigger.player.countCards('he')>0){
								player.logSkill('sgk_zhejie',trigger.player);
								trigger.player.chooseToDiscard('he',true);
							}else{
								event.finish();
							}
							'step 2'
							if(result.cards&&get.type(result.cards[0])=='equip'){
								event.card=result.cards[0];
								player.chooseTarget('选择一名目标获得'+get.translation(event.card),function(card,player,target){
									return trigger.player!=target;
								}).ai=function(target){
									return get.attitude(player,target)>0;
								}
							}
							else{
								event.finish();
							}
							'step 3'
							if(result.bool){
								result.targets[0].gain(event.card);
								result.targets[0].$gain(event.card);
							}
						}
					},
					sgk_fengya:{
						audio:2,
						trigger:{player:'damageBegin'},
						frequent:true,
						filter:function(event){
							return event.source!=undefined;
						},
						content:function(){
							"step 0"
							player.draw();
							trigger.source.chooseBool('是否摸一张牌并令此伤害-1?').ai=function(){
								return get.attitude(trigger.source,player)>0;
							}
							"step 1"
							if(result.bool){
								trigger.source.draw();
								trigger.num--;
							}
						}
					},
					sgk_yijian:{
						audio:1,
						trigger:{player:'phaseUseBefore'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_yijian'),function(card,player,target){
								return player!=target
							}).ai=function(target){
								if(!player.isDamaged()) return 0;
								if(target.countCards('h')+1>=player.countCards('h')&&get.attitude(player,target)>0&&player.isDamaged()) return 1;
								return 0;
							}
							'step 1'
							if(result.bool){
								trigger.untrigger();
								trigger.finish();
								player.logSkill('sgk_yijian',result.targets[0]);
								result.targets[0].draw();
								if(result.targets[0].countCards('h')>=player.countCards('h')){
									player.recover();
								}
							}
						}
					},
					sgk_feijun:{
						audio:1,
						trigger:{player:'phaseUseBegin'},
						forced:true,
						content:function(){
							if(player.countCards('h')>=player.hp){
								player.storage.sgk_feijun=player.hp;
								player.addTempSkill('sgk_feijun_more','phaseAfter');
							}
							else{
								player.addTempSkill('sgk_feijun_less','phaseAfter');
							}
						},
						subSkill:{
							more:{
								mod:{
									attackFrom:function(from,to,distance){
										return distance-from.storage.sgk_feijun;
									},
									cardUsable:function(card,player,num){
										if(card.name=='sha') return num+1;
									}
								}
							},
							less:{
								mod:{
									cardEnabled:function(card){
										if(card.name=='sha') return false
									}
								}
							}
						}
					},
					sgk_muniu:{
						audio:4,
						trigger:{global:'loseAfter'},
						filter:function(event,player){
							if(_status.currentPhase!=player) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='e') return true;
							}
							return false;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_muniu')).ai=function(target){
								if(Math.random()<0.5) return -get.attitude(player,target);
								return get.attitude(player,target);
							}
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.logSkill('sgk_muniu',event.target);
								if(event.target.countCards('h')){
									player.discardPlayerCard(event.target,'h').ai=function(button){
										if(get.attitude(player,event.target)>0) return false;
										return get.value(button.link);
									}
								}
								else{
									event.target.draw();
								}
									
							}
							else{
								event.finish();
							}
							'step 2'
							if(!result.bool){
								event.target.draw();
							}
						},
						group:['sgk_muniu2']
					},
					sgk_muniu2:{
						trigger:{global:'equipAfter'},
						filter:function(event,player){
							if(_status.currentPhase!=player) return false;
							return true;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_muniu')).ai=function(target){
								if(Math.random()<0.5) return -get.attitude(player,target);
								return get.attitude(player,target);
							}
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.logSkill('sgk_muniu',event.target);
								player.discardPlayerCard(event.target,'h').ai=function(button){
									if(get.attitude(player,event.target)>0) return false;
									return get.value(button.link);
								}
							}
							else{
								event.finish();
							}
							'step 2'
							if(!result.bool){
								event.target.draw();
							}
						},
					},
					sgk_liuma:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filterCard:function(card){
							return get.type(card)=='basic';
						},
						filterTarget:function(card,player,target){
							return target!=player&&target.countCards('e')>0;
						},
						selectTarget:[1,2],
						content:function(){
							'step 0'
							if(targets.length){
								event.target=targets.shift();
							}
							else{
								event.finish();
							}
							'step 1'
							event.target.chooseCardTarget({
								prompt:'选择一名角色将你的一张装备牌交给一名其他角色,或令'+get.translation(player)+'获得你一张手牌',
								filterCard:true,
								position:'e',
								filterTarget:function(card,player,target){
									return target!=event.target;
								},
								ai1:function(card){
									return 1;
								},
								ai2:function(target){
									return get.attitude(event.target,target)>0;
								},
							});
							'step 2'
							if(result.bool){
								event.target.line(result.targets,'green');
								result.targets[0].gain(result.cards);
								event.target.$give(result.cards.length,result.targets[0]);
								event.goto(0);
							}
							else{
								player.gainPlayerCard(event.target);
							}
						},
						ai:{
							order:6,
							result:{
								player:1,
								target:-1,
							}
						}
					},
					sgk_lingnu:{
						audio:2,
						trigger:{player:'phaseAfter'},
						forced:true,
						filter:function(event,player){
							return player.storage.sgk_lingnu>=2;
						},
						content:function(){
							"step 0"
							player.loseMaxHp();
							var targets=game.filterPlayer(function(current){
								return current!=player;
							}).sortBySeat();
							event.targets=targets;
							event.num=0;
							"step 1"
							if(num<event.targets.length){
								if(event.targets[num].countCards('hej')){
									player.gainPlayerCard(event.targets[num],'hej',true);
								}
								event.num++;
								event.redo();
							}
						},
						group:['sgk_lingnu_getStat','sgk_lingnu_init'],
						subSkill:{
							getStat:{
								trigger:{player:'damageEnd'},
								forced:true,
								popup:false,
								silent:true,
								content:function(){
									player.storage.sgk_lingnu+=trigger.num;
								}
							},
							init:{
								trigger:{player:'phaseBegin'},
								forced:true,
								popup:false,
								silent:true,
								content:function(){
									player.storage.sgk_lingnu=0;
								}
							}
						}
					},
					sgk_baozheng:{
						audio:2,
						trigger:{player:'phaseEnd'},
						forced:true,
						content:function(){
							"step 0"
							var targets=game.filterPlayer(function(current){
								return current!=player;
							}).sortBySeat();
							event.targets=targets;
							event.num=0;
							"step 1"
							if(event.num<event.targets.length){
								event.target=event.targets[event.num];
								if(event.target.countCards('he')>=2){
									event.target.chooseCard('交给'+get.translation(player)+'一张牌，或弃置两张牌对其造成1点伤害','he').ai=function(card){
										if(get.attitude(event.target,player)>0) return 10-get.value(card);
										if(get.attitude(event.target,player)<0){
											if(player.hasSkillTag('maixie')&&player.hp>player.maxHp/3) return 0;
											if(player.hp<=1&&!player.hasSkill('buqu')) return 0;
										}
										return 0;
									}
								}
								else if(event.target.countCards('he')==1){
									event.target.chooseCard('交给'+get.translation(player)+'一张牌','he',true);
								}
								else{
									event.num++;
									event.redo();
								}
								
							}
							else{
								event.finish();
							}
							"step 2"
							if(result.bool){
								player.gain(result.cards[0]);
								event.target.$give(1,player);
								event.num++;
								event.goto(1);
							}
							else{
								event.target.chooseToDiscard('弃置两张牌对'+get.translation(player)+'造成一点伤害',2,true);
								event.target.line(player,'fire');
								player.damage(event.target);
								event.num++;
								event.goto(1);
							}
						}
					},
					sgk_zhongyong:{
						audio:1,
						trigger:{player:'phaseBegin'},
						check:function(event,player){
							return (!player.hasJudge('lebu')||!player.hasJudge('bingliang'))&&player.hp>2;
						},
						content:function(){
							player.loseHp();
							player.addTempSkill('sgk_zhongyong2','phaseAfter');
						},
						init:function(player){
							player.storage.sgk_zhongyong_discard=[];
						},
					},
					sgk_zhongyong2:{
						group:['sgk_zhongyong2_phaseDrawBegin','sgk_zhongyong2_distance','sgk_zhongyong2_discard','sgk_zhongyong2_giveCard'],
						subSkill:{
							phaseDrawBegin:{
								trigger:{player:'phaseDrawBegin'},
								forced:true,
								popup:false,
								content:function(){
									trigger.num+=player.maxHp-player.hp;
								}
							},
							distance:{
								mod:{
									globalFrom:function(from,to,distance){
										return -Infinity;
									}
								}
							},
							discard:{
								trigger:{player:'discardAfter'},
								forced:true,
								popup:false,
								marktext:'忠',
								priority:-1,
								filter:function(event,player){
									for(var i=0;i<event.cards.length;i++){
										if(get.position(event.cards[i])=='d'){
											return true;
										}
									}
									return false;
								},
								content:function(){
									for(var i=0;i<trigger.cards.length;i++){
										if(get.position(trigger.cards[i])=='d'){
											player.storage.sgk_zhongyong_discard=player.storage.sgk_zhongyong_discard.concat(trigger.cards[i]);
										}
									}
									player.syncStorage('sgk_zhongyong_discard');
									player.markSkill('sgk_zhongyong_discard');
								},
								intro:{
									content:'cards'
								}
							},
							giveCard:{
								trigger:{player:'phaseDiscardAfter'},
								filter:function(event,player){
									return player.storage.sgk_zhongyong_discard.length;
								},
								direct:true,
								content:function(){
									'step 0'
									player.chooseTarget('是否发动【忠勇】让一名角色获得你本回合的弃牌？',function(card,player,target){
										return player!=target;
									}).ai=function(target){
										return get.attitude(player,target)>0;
									}
									'step 1'
									if(result.bool){
										player.logSkill('sgk_zhongyong',result.targets[0]);
										result.targets[0].gain(player.storage.sgk_zhongyong_discard);
										result.targets[0].$gain(player.storage.sgk_zhongyong_discard);
										delete player.storage.sgk_zhongyong_discard;
										player.storage.sgk_zhongyong_discard=[];
										player.unmarkSkill('sgk_zhongyong_discard');
									}
									else{
										delete player.storage.sgk_zhongyong_discard;
										player.storage.sgk_zhongyong_discard=[];
										player.unmarkSkill('sgk_zhongyong_discard');
									}
								}
							}
						}
					},
					sgk_bozhan:{
						audio:1,
						trigger:{player:'shaMiss',target:'shaMiss'},
						forced:true,
						content:function(){
							trigger.target.chooseToUse('是否对'+get.translation(trigger.player)+'使用一张【杀】？',{name:'sha'},-1,trigger.player);
						}
					},
					sgk_qingxi:{
						audio:1,
						trigger:{player:'shaBegin'},
						forced:true,
						filter:function(event,player){
							return player.countCards('e')<event.target.countCards('e');
						},
						content:function(){
							trigger.directHit=true;
						}
					},
					sgk_langxing:{
						audio:1,
						trigger:{player:'phaseDrawBefore'},
						check:function(event,player){
							if(player.countCards('h')>player.hp) return true;
							if(player.countCards('h')>3) return true;
							return false;
						},
						content:function(){
							"step 0"
							player.judge(ui.special);
							"step 1"
							player.gain(result.card);
							player.$gain2(result.card);
							player.addTempSkill('sgk_langxing2','phaseAfter');
							player.storage.sgk_langxing2=get.color(result.card);
							trigger.untrigger();
							trigger.finish();
						}
					},
					sgk_langxing2:{
						audio:true,
						enable:'phaseUse',
						viewAs:{name:'juedou'},
						filterCard:function(card,player){
							return get.color(card)!=player.storage.sgk_langxing2;
						},
						check:function(card){
							return 6-get.value(card);
						},
						ai:{
							basic:{
								order:10
							}
						}
					},
					sgk_hubu:{
						audio:1,
						trigger:{player:'damageEnd',source:'damageEnd'},
						filter:function(event){
							return event.card&&event.card.name=='sha'&&event.notLink();
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_hubu'),function(card,player,target){
								return player!=target&&player.canUse('juedou',target);
							}).ai=function(target){
								if(get.effect(target,{name:'juedou'},player,target)>0) return 1;
								return 0;
							}
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								event.target.judge(function(card){
									if(get.suit(card)!='spade') return 1;
									return -0.5;
								});
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								player.useCard({name:'juedou'},event.target,'sgk_hubu');
							}
							else{
								event.finish();
							}
						},
						ai:{
							playernowuxie:true,
							skillTagFilter:function(player,tag){
								if(tag=='playernowuxie'){
									if(_status.event.getParent().skill=='sgk_hubu') return true;
									return false;
								}
							}
						}
					},
					sgk_danshou:{
						audio:1,
						trigger:{target:'shaBegin'},
						filter:function(event,player){
							return event.player.countCards('h')&&player.countCards('h');
						},
						forced:true,
						content:function(){
							'step 0'
							trigger.player.chooseToCompare(player);
							'step 1'
							if(result.bool){
								trigger.directHit=true;
							}
							else{
								player.draw();
								player.discardPlayerCard(trigger.player,true);
							}
						}
					},
					sgk_yonglie:{
						audio:1,
						trigger:{global:'damageEnd'},
						filter:function(event,player){
							return event.card&&event.card.name=='sha'&&event.notLink()&&get.distance(player,event.player,'attack')<=1&&event.source&&event.source.isAlive();
						},
						check:function(event,player){
							if(player.hp>2) return get.attitude(player,event.source)<0;
							return 0;
						},
						logTarget:'player',
						content:function(){
							player.loseHp();
							player.line(trigger.source);
							trigger.source.damage();
						}
					},
					sgk_hengshi:{
						audio:2,
						trigger:{player:'phaseDiscardBegin'},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						frequent:true,
						check:function(){return 1;},
						content:function(){
							player.draw(player.countCards('h'));
						}
					},
					sgk_zhijiao:{
						audio:2,
						trigger:{player:'phaseEnd'},
						init:function(player){
							player.storage.sgk_zhijiao=false;
							player.storage.sgk_zhijiao2=[];
						},
						filter:function(event,player){
							return !player.storage.sgk_zhijiao&&player.storage.sgk_zhijiao2.length>0;
						},
						mark:true,
						intro:{
							content:'limited'
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_zhijiao'),function(card,player,target){
								return player!=target;
							}).ai=function(target){
								if(player.storage.sgk_zhijiao2.length>4) return get.attitude(player,target);
								return false;
							}
							'step 1'
							if(result.bool){
								player.storage.sgk_zhijiao=true;
								player.awakenSkill('sgk_zhijiao');
								player.logSkill('sgk_zhijiao',result.targets[0]);
								result.targets[0].gain(player.storage.sgk_zhijiao2);
								result.targets[0].$gain(player.storage.sgk_zhijiao2);
								player.unmarkSkill('sgk_zhijiao2');
								delete player.storage.sgk_zhijiao2;
								player.storage.sgk_zhijiao2=[];
							}
							else{
								delete player.storage.sgk_zhijiao2;
								player.storage.sgk_zhijiao2=[];
								player.unmarkSkill('sgk_zhijiao2');
							}
						},
						group:['sgk_zhijiao2']
					},
					sgk_zhijiao2:{
						trigger:{player:'discardAfter'},
						forced:true,
						popup:false,
						priority:-1,
						filter:function(event,player){
							if(player.storage.sgk_zhijiao) return false;
							if(_status.currentPhase!=player) return false;
							for(var i=0;i<event.cards.length;i++){
									if(get.position(event.cards[i])=='d'){
										return true;
									}
								}
							return false;
						},
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								if(get.position(trigger.cards[i])=='d'){
									player.storage.sgk_zhijiao2=player.storage.sgk_zhijiao2.concat(trigger.cards[i]);
								}
							}
							player.syncStorage('sgk_zhijiao2');
							player.markSkill('sgk_zhijiao2');
						},
						intro:{
							content:'cards'
						}
					},
					sgk_jiwux:{
						audio:3,
						trigger:{player:'phaseUseBegin'},
						filter:function(event,player){
							return player.countCards('h','sha')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('sgk_jiwux'),function(card,player,target){
								return card.name=='sha';
							}).ai=function(card){
								var value=0;
								if(card.nature){
									if(card.nature=='fire') value+=0.004;
									if(card.nature=='thunder') value+=0.003;
								}
								switch(get.suit(card)){
									case 'heart':value+=0.004;break;
									case 'diamond':value+=0.003;break;
									case 'spade':value+=0.002;break;
									case 'club':value+=0.001;break;
									default:break;
								}
								value=value+card.number/1000;
								return value;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_jiwux');
								event.card=result.cards[0];
								player.showCards(event.card);
								if(event.card.isJiwu==undefined) event.card.isJiwu=[];
								player.chooseControl('选项一','选项二','选项三',function(){
									return Math.random()<0.5?'选项一':'选项二';
								}).set('prompt','戟舞<br><br><div class="text">1:此【杀】不计入次数限制</div><br><div class="text">2:此【杀】无距离限制,且可以额外指定一个目标</div></br><div class="text">3:此【杀】的伤害值+1。</br>');
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.control=='选项一'){
								event.card.isJiwu.push(1);
								game.log(player,'所展示的',event.card,'不计入次数限制');
							}
							else if(result.control=='选项二'){
								event.card.isJiwu.push(2);
								game.log(player,'所展示的',event.card,'无距离限制，且可以额外指定一个目标');
							}
							else if(result.control=='选项三'){
								event.card.isJiwu.push(3);
								game.log(player,'所展示的',event.card,'伤害值+1');
							}
						},
						group:['sgk_jiwux_one','sgk_jiwux_two','sgk_jiwux_three','sgk_jiwux_clear'],
						subSkill:{
							one:{
								mod:{
									cardUsable:function(card,player){
										if(card.isJiwu&&card.isJiwu.contains(1)){
											return Infinity;
										} 
									}
								},
								trigger:{player:'useCard'},
								filter:function(event,player){
									return event.card&&event.card.isJiwu&&event.card.isJiwu.contains(1);
								},
								forced:true,
								content:function(){
									if(player.stat[player.stat.length-1].card.sha>0){
										player.stat[player.stat.length-1].card.sha--;
									}
								}
							},
							two:{
								mod:{
									targetInRange:function(card,player){
										if(card.isJiwu&&card.isJiwu.contains(2)) return true;
									},
									selectTarget:function(card,player,range){
										if(card.isJiwu&&card.isJiwu.contains(2)&&range[1]!=-1) range[1]++;
									}
								}
							},
							three:{
								trigger:{source:'damageBegin'},
								forced:true,
								filter:function(event,player){
									return event.card&&event.card.name=='sha'&&event.card.isJiwu&&event.card.isJiwu.contains(3)&&event.notLink();
								},
								content:function(){
									trigger.num++;
								}
							},
							clear:{
								trigger:{player:'useCardAfter'},
								filter:function(event,player){
									return event.card&&event.card.isJiwu;
								},
								forced:true,
								popup:false,
								content:function(){
									delete trigger.card.isJiwu;
								}
							}
						}
					},
					sgk_daoshi:{
						audio:2,
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							return event.player.num('e')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							trigger.player.chooseBool('是否发动【刀侍】摸一张牌并将装备区的一张牌交给'+get.translation(player)).ai=function(){
								if(get.attitude(trigger.player,player)>0&&player.num('e')<2)
										return 1;
									return 0;
							}
							'step 1'
							if(result.bool){
								trigger.player.logSkill('sgk_daoshi',player);
								trigger.player.draw();
								if(trigger.player!=player){
									trigger.player.chooseCardButton('选择一张牌交给'+get.translation(player),trigger.player.get('e'),true);
								}
								else{
									event.finish();
								}
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								player.gain(result.links[0]);
								trigger.player.$give(result.links[0],player);
							}
						}
					},
					sgk_lirang:{
						audio:2,
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							if(event.player.countCards('h')==0) return false;
							if(player.storage.sgk_lirang&&player.storage.sgk_lirang.length==0) return true;
							var suit=['heart','diamond','club','spade'];
							for(var i=0;i<player.storage.sgk_lirang.length;i++)
								if(suit.contains(get.suit(player.storage.sgk_lirang[i]))) suit.remove(get.suit(player.storage.sgk_lirang[i]));
							var cards=event.player.get('h');
							for(var i=0;i<cards.length;i++)
								if(suit.contains(get.suit(cards[i]))) return true;
							return false;
						},
						direct:true,
						content:function(){
							'step 0'
							var next=trigger.player.chooseCard(get.prompt('sgk_lirang',player));
							next.filterCard=function(card){
								for(var i=0;i<player.storage.sgk_lirang.length;i++){
									if(get.suit(card)==get.suit(player.storage.sgk_lirang[i])) return false;
								}
								return true;
							}
							next.ai=function(card){
								if(get.attitude(trigger.player,player)>0){
									return 7-get.value(card);
								}
								if(get.attitude(trigger.player,player)<=0){
									return card.name=='du';
								}								
								return false;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_lirang',trigger.player);
								trigger.player.lose(result.cards,ui.special);
								trigger.player.$give(result.cards.length,player);
								player.storage.sgk_lirang=player.storage.sgk_lirang.concat(result.cards);
								player.markSkill('sgk_lirang');
								player.syncStorage('sgk_lirang');
								trigger.player.draw();
							}
							else{
								event.finish();
							}
						},
						init:function(player){
							player.storage.sgk_lirang=[];
						},
						intro:{
							content:'cards'
						},
						group:['sgk_lirang2']
					},
					sgk_lirang2:{
						enable:'chooseToUse',
						direct:true,
						check:function(event,player){
							return get.attitude(player,event.player)>0;
						},
						filter:function(event,player){
							if(player.storage.sgk_lirang.length<2) return false;
							if(event.type=='dying'){
								return event.filterCard({name:'tao'},player);
							}
							if(event.parent.name!='phaseUse') return false;
							if(!lib.filter.filterCard({name:'tao'},player,event)){
								return false;
							}
							return player.hp<player.maxHp;
						},
						filterTarget:function(card,player,target){
							if(_status.event.type=='dying'){
								return target==_status.event.dying;
							}
							return player==target;
						},
						selectTarget:-1,
						chooseButton:{
							dialog:function(event,player){
								return ui.create.dialog('礼让',player.storage.sgk_lirang,'hidden');
							},
							select:2,
							check:function(event,player){
								return 1;
							},
							backup:function(links,player){
								return {
									audio:2,
									filterCard:function(){return false},
									selectCard:-1,
									viewAs:{name:'tao'},
									cards:links,
									onuse:function(result,player){
										result.cards=lib.skill.sgk_lirang2_backup.cards;
										var cards=result.cards;
										player.storage.sgk_lirang.remove(cards);
										player.syncStorage('sgk_lirang');
										if(!player.storage.sgk_lirang.length){
											player.unmarkSkill('sgk_lirang');
										}
										else{
											player.markSkill('sgk_lirang');
										}
									}
								}
							}
						},
						ai:{
							save:true,
							order:9,
							result:{
								target:function(player,target){
									return get.effect(target,{name:'tao'},player,target);
								}
							},
						}
					},
					sgk_xianshi:{
						audio:2,
						trigger:{player:'damageBegin'},
						filter:function(event,player){
							return (event.source!=undefined);
						},
						frequent:true,
						content:function(){
							'step 0'
							trigger.source.chooseToDiscard('弃置一张牌并展示所有手牌，或令此伤害-1').ai=function(card){
								if(get.attitude(trigger.source,player)<0)
									return 7-get.value(card);
								return false;
							}
							'step 1'
							if(result.bool){
								trigger.source.showHandcards();
							}else{
								trigger.num--;
							}
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									var bs=player.getCards('h');
									if(bs.length==0) return 0;
									if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
									return [1,0,1,-0.5];
								}
							}
						}
					},
					sgk_chengxiang:{
						audio:2,
						inherit:'chengxiang'
					},
					sgk_renxin:{
						trigger:{global:'dying'},
						priority:6,
						filter:function(event,player){
							return event.player.hp<=0&&event.player!=player&&player.countCards('h')>0;
						},
						check:function(event,player){
							if(player.isTurnedOver()){
								if(get.attitude(player,event.player)>0){
									return true;
								}
								if(player.countCards('h','du')>2&&get.attitude(player,event.player)<0) return true;
							}
							return false;
						},
						content:function(){
							trigger.player.gain(player.get('h'));
							player.$give(player.get('h'),trigger.player);
							player.turnOver();
							trigger.player.recover();
						},
						ai:{
							expose:0.2
						}
					},
					sgk_midao:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return target.countCards('h')>player.countCards('h')&&player!=target;
						},
						filter:function(event,player){
							return game.hasPlayer(function(current){
								return current.countCards('h')>player.countCards('h');
							});
						},
						selectTarget:-1,
						multitarget:true,
						multiline:true,
						content:function(){
							'step 0'
							if(targets.length){
								event.target=targets.shift();
							}
							else{
								if(player.isMostHandcard(true)){
									player.loseHp();
								}
								event.finish();
							}
							'step 1'
							if(event.target.countCards('h')){
								event.target.chooseCard('选择一张手牌交给'+get.translation(player),true).ai=function(card){
									return -get.value(card);
								}
							}
							else{
								event.goto(0);
							}
							'step 2'
							if(result.bool){
								player.gain(result.cards[0]);
								target.$give(1,player);
							}
							event.goto(0);				
						},
						ai:{
							order:2,
							result:{
								player:function(player){
									var cangain=game.filterPlayer(function(current){
										return current.countCards('h')>player.countCards('h')
									});
									var maxh=player.isMostHandcard(true);
									if(maxh&&cangain>1&&player.hp>2) return 1;
									if(maxh&&player.hp==2) return -2;
									if(maxh&&player.hp==1&&!player.countCards('h','tao')) return -10;
									if(maxh&&cangain<=1) return -1;
									if(!maxh) return cangain;
									return 0;
								},
								target:-1,
							}
						}
					},
					sgk_yishe:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return target.countCards('h')<=player.countCards('h')&&player!=target;
						},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						content:function(){
							 player.swapHandcards(target);
						},
						ai:{
							order:1,
							result:{
								player:function(player,target){
									return target.countCards('h')-player.countCards('h');
								},
								target:function(player,target){
									return player.countCards('h')-target.countCards('h');
								},
							}
						}
					},
					sgk_pudu:{
						audio:1,
						unique:true,
						enable:'phaseUse',
						skillAnimation:true,
						animationStr:'普渡',
						animationColor:'water',
						filterTarget:function(card,player,target){
							return player!=target;
						},
						filter:function(event,player){
							return !player.storage.sgk_pudu;
						},
						init:function(player){
							player.storage.sgk_pudu=false;
						},
						mark:true,
						intro:{
							content:'limited'
						},
						multitarget:true,
						multiline:true,
						selectTarget:-1,
						content:function(){
							'step 0'
							player.storage.sgk_pudu=true;
							player.awakenSkill('sgk_pudu');
							for(var i=0;i<targets.length;i++){
								player.gain(targets[i].getCards('h'));
								targets[i].$give(targets[i].countCards('h'),player);
							}
							event.current=player.next;
							'step 1'
							var maxh=true;
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].countCards('h')>player.countCards('h')){
									maxh=false;
								}
							}
							if(maxh){
								player.chooseCard('选择一张手牌交给'+get.translation(event.current),true).ai=function(card){
									if(get.attitude(player,event.current)>0)
										return get.value(card);
									return -get.value(card);
								}
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								event.current.gain(result.cards[0]);
								player.$give(1,event.current);
								if(event.current.next!=player&&event.current.next.isAlive()){
									event.current=event.current.next;
								}
								else{
									event.current=event.current.next.next;
								}
								event.goto(1);
							}
							
						},
						ai:{
							order:4.5,
							result:{
								player:function(player,target){
									var num=0;
									var list=[];
									var listnum=0;
									for(var i=0;i<game.players.length-1;i++){
										list.push('0');
									}
									for(var i=0;i<game.players.length;i++){
										num+=game.players[i].countCards('h');
									}
									var max=function(){
										for(var i=0;i<list.length;i++){
											if(list[i]>num) return true;
										}
										return false;
									}
									while(!max()){
										num--;
										list[listnum%(game.players.length-1)]++;
										listnum++;
									}
									return num-player.countCards('h');
								},
								target:function(player,target){
									var num=0;
									var list=[];
									var listnum=0;
									for(var i=0;i<game.players.length-1;i++){
										list.push('0');
									}
									for(var i=0;i<game.players.length;i++){
										num+=game.players[i].countCards('h');
									}
									var max=function(){
										for(var i=0;i<list.length;i++){
											if(list[i]>num) return true;
										}
										return false;
									}
									while(!max()){
										num--;
										list[listnum%(game.players.length-1)]++;
										listnum++;
									}
									for(var i=0;i<game.players.length;i++){
										if(target==game.players[i]) var nu=i; 
									}
									return list[nu-1]-target.countCards('h');
								}
							}
						}
					},
					sgk_zongqing:{
						audio:2,
						trigger:{player:'phaseDrawBegin'},
						check:function(event,player){
							if(player.isDamaged()&&player.countCards('h',{color:'red'})) return 2;
							if(player.countCards('h','sha')&&!player.countCards('h','jiu')) return 1;
							return 0;
						},
						content:function(){
							'step 0'
							player.judge(function(card){
								if(get.color(card)=='red'&&player.isDamaged()) return 2;
								if(get.color(card)=='red') return 1;
								if(get.color(card)=='black'&&player.countCards('h','sha')) return 1;
								return 0;
							});
							'step 1'
							player.storage.sgk_zongqing=result.card;
							player.addSkill('sgk_zongqing_show');
						},
						subSkill:{
							show:{
								audio:false,
								trigger:{player:'gainAfter'},
								forced:true,
								popup:false,
								filter:function(event){
									return event.parent.parent.name=='phaseDraw';
								},
								content:function(){
									'step 0'
									event.card=player.storage.sgk_zongqing;
									player.showCards(event.card);
									'step 1'
									var cards=[];
									if(get.color(event.card)=='red'){
										for(var i=0;i<trigger.cards.length;i++){
											if(get.color(trigger.cards[i])=='black'){
												cards.push(trigger.cards[i]);
											}
										}
										if(cards.length){
											if(cards.length==2){
												event.cards=cards;
												player.chooseToDiscard('纵情:选择一张牌弃置',function(card){
													return _status.event.getParent().cards.contains(card);
												},true).ai=get.disvalue;
											}
											else{
												player.discard(cards);
											}
											player.useCard({name:'jiu'},player);
										}	
									}
									else{
										for(var i=0;i<trigger.cards.length;i++){
											if(get.color(trigger.cards[i])=='red'){
												cards.push(trigger.cards[i]);
											}
										}
										if(cards.length){
											if(cards.length==2){
												event.cards=cards;
												player.chooseToDiscard('纵情:选择一张牌弃置',function(card){
													return _status.event.getParent().cards.contains(card);
												},true).ai=get.disvalue;
											}
											else{
												player.discard(cards);
											}
											if(player.isDamaged()){
												player.useCard({name:'tao'},player);
											}
										}
									}
									'step 2'
									player.removeSkill('sgk_zongqing_show');
								}
							}
						}
					},
					sgk_bugua:{
						audio:2,
						trigger:{global:'judgeBefore'},
						content:function(){
							'step 0'
							player.showCards(ui.cardPile.firstChild);
							event.chosed=false;
							'step 1'
							player.chooseCard('是否将一张手牌置于牌堆顶？').set('ai',function(card){
								var trigger=_status.event.getTrigger();
								var player=_status.event.player;
								var judging=ui.cardPile.firstChild;
								var result=trigger.judge(card)-trigger.judge(judging);
								var attitude=get.attitude(player,trigger.player);
								if(attitude==0||result==0) return 0;
								if(attitude>0){
									return result-get.value(card)/2;
								}
								else{
									return -result-get.value(card)/2;
								}
							});
							event.current=player;
							'step 2'
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
								if(trigger.player==player){
									event.finish();
								}
								else if(event.chosed){
									event.finish();
								}
								else{
									trigger.player.chooseCard('将一张手牌置于牌堆顶？',true).set('ai',function(card){
										var trigger=_status.event.getTrigger();
										var player=trigger.player;
										var judging=ui.cardPile.firstChild;
										var result=trigger.judge(card)-trigger.judge(judging);
										var attitude=get.attitude(player,trigger.player);
										if(attitude==0||result==0) return 0;
										if(attitude>0){
											return result-get.value(card)/2;
										}
										else{
											return -result-get.value(card)/2;
										}
										return -get.value(card);
									});
									event.chosed=true;
									event.current=trigger.player;
									event.goto(2);
								}
							}
							'step 3'
							if(event.current==game.me) game.delay(0.5);
							'step 4'
							if(event.card){
								event.card.fix();
								ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
							}
						},
						group:['sgk_bugua2','sgk_bugua3'],
					},
					sgk_bugua2:{
						trigger:{global:'judgeAfter'},
						filter:function(event,player){
							return (get.color(event.result.card)=='red');
						},
						check:function(event,player){
							return get.attitude(player,event.player)>0;
						},
						prompt:function(event,player){
							var str='';
							str+='是否对'+get.translation(event.player)+'发动【卜卦】令其摸一张牌';
							return str;
						},
						content:function(){
							trigger.player.draw();
						}
					},
					sgk_bugua3:{
						trigger:{global:'judgeAfter'},
						filter:function(event,player){
							return (get.color(event.result.card)=='black')&&event.player.num('he');
						},
						check:function(event,player){
							return get.attitude(player,event.player)<0;
						},
						prompt:function(event,player){
							var str='';
							str+='是否对'+get.translation(event.player)+'发动【卜卦】令其弃置一张牌';
							return str;
						},
						content:function(){
							trigger.player.chooseToDiscard(true);
						}
					},
					sgk_zhaoxin:{
						audio:2,
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							var suits=['heart','club','spade','diamond'];
							var cards=player.get('h');
							for(var i=0;i<cards.length;i++){
								if(suits.contains(get.suit(cards[i])))
									suits.remove(get.suit(cards[i]));
							}
							return suits.length>0;
						},
						frequent:true,
						content:function(){
							player.showHandcards();
							var suits=['heart','club','spade','diamond'];
							event.cards=player.get('h');
							for(var i=0;i<event.cards.length;i++){
								if(suits.contains(get.suit(event.cards[i])))
									suits.remove(get.suit(event.cards[i]));
							}
							if(suits.length>0)
								player.draw(suits.length);
						}
					},
					sgk_zhihe:{
						audio:2,
						usable:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						filterCard:function(card,target,player){
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(card)==get.suit(ui.selected.cards[i])) return false;
							}
							return true;
						},
						complexCard:true,
						check:function(){return 1},
						discard:false,
						lose:false,
						prompt:'制合：请选择你想要保留的卡牌',
						selectCard:function(){
							var cards=_status.event.player.get('h');
							var suits=[];
							for(var i=0;i<cards.length;i++){
								if(!suits.contains(get.suit(cards[i])))
									suits.push(get.suit(cards[i]));
							}
							return suits.length;
						},
						content:function(){
							'step 0'
							player.showHandcards();
							var he=[];
							var hs=player.getCards('h');
							he=he.concat(hs);
							for(var i=0;i<cards.length;i++){
								he.remove(cards[i]);
							}
							player.discard(he);
							'step 1'
							player.draw(player.countCards('h'));
							
						},
						ai:{
							order:2,
							result:{
								player:function(player){
									var cards=player.get('h');
									var suits=[];
									for(var i=0;i<cards.length;i++){
										if(!suits.contains(get.suit(cards[i])))
											suits.push(get.suit(cards[i]));
									}
									var canget=(suits.length*2-player.countCards('h'));
									return canget;
								}
							}
						}
					},
					sgk_caijie:{
						audio:1,
						trigger:{global:'phaseBegin'},
						check:function(event,player){
							var cards=player.get('h');
							for(var i=0;i<cards.length;i++){
								if(cards[i].number>11&&get.value(cards[i])<7){
									return get.attitude(player,event.player)<0;
								}
							}
							if(player.countCards('h','shan')&&get.attitude(player,event.player)<0&&player.countCards('h')>2) return 1;
							return 0;
						},
						filter:function(event,player){
							return event.player!=player&&event.player.countCards('h')>=player.countCards('h')&&player.countCards('h')>0;
						},
						prompt:function(event,player){
							var str='';
							str+='是否对'+get.translation(event.player)+'发动【才捷】？';
							return str;
						},
						content:function(){
							'step 0'
							player.chooseToCompare(trigger.player);
							'step 1'
							if(result.bool){
								player.draw(2);
							}
							else{
								trigger.player.useCard({name:'sha'},player,false);
							}
						},	
						ai:{
							expose:0.2
						}
					},
					sgk_jilei:{
						audio:1,
						trigger:{player:'damageEnd'},
						check:function(event,player){
							return get.attitude(player,event.source)<0;
						},
						filter:function(event,player){
							return event.source!=undefined&&event.source.countCards('h')>0;
						},
						content:function(){
							event.cards=trigger.source.get('h');
							var numBasic=0;
							var numEquip=0;
							var numTrick=0;
							for(var i=0;i<event.cards.length;i++){
								switch(get.type(event.cards[i],'trick')){
									case 'basic':numBasic++;break;
									case 'trick':numTrick++;break;
									case 'equip':numEquip++;break;
								}
							}
							trigger.source.showHandcards();
							var num=Math.max(numBasic,numEquip,numTrick);
							event.types=[];
							switch(num){
								case numBasic:event.types.push('basic');
								case numEquip:event.types.push('equip');
								case numTrick:event.types.push('trick');
							}
							trigger.source.chooseToDiscard('请弃置手牌中类别相同且最多的所有牌',num,function(card){
								if(ui.selected.cards.length==0&&event.types.length==2) return (get.type(card,'trick')==event.types[0]||get.type(card,'trick')==event.types[1]);
								if(ui.selected.cards.length==0&&event.types.length==3) return (get.type(card,'trick')==event.types[0]||get.type(card,'trick')==event.types[1]||get.type(card,'trick')==event.types[3]);
								if(ui.selected.cards.length==0) return (get.type(card,'trick')==event.types[0]);
								for(var i=0;i<ui.selected.cards.length;i++){
									if(get.type(card,'trick')==get.type(ui.selected.cards[i],'trick')) return true;
								}
								return false;
							},true).set('complexCard',true);
						},
					},
					sgk_yanliang:{
						audio:1,
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return player.num('he');
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard('是否对'+get.translation(trigger.player)+'发动【延粮】?','he').ai=function(card){
								if(get.attitude(player,trigger.player)>0&&trigger.player.num('j','lebu')) return 8-get.value(card)&&get.color(card)=='black';
								if(get.attitude(player,trigger.player)<0) return 4-get.value(card);
								return 0;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_yanliang',trigger.player);
								if(get.color(result.cards[0])=='red'){
									trigger.player.addSkill('sgk_yanliang_adjust');
									trigger.player.addSkill('sgk_yanliang_red');
								}
								else{
									trigger.player.addSkill('sgk_yanliang_adjust');
									trigger.player.addSkill('sgk_yanliang_black');
								}
							}
						},
						subSkill:{
							adjust:{
								trigger:{player:'phaseDrawBefore'},
								priority:100,
								forced:true,
								popup:false,
								content:function(){
									trigger.untrigger();
									trigger.finish();
									player.removeSkill('sgk_yanliang_adjust');
								}
							},
							red:{
								trigger:{player:'phaseUseAfter'},
								forced:true,
								popup:false,
								content:function(){
									player.phaseDraw();
									player.removeSkill('sgk_yanliang_red');
								}
							},
							black:{
								trigger:{player:'phaseDiscardAfter'},
								forced:true,
								popup:false,
								content:function(){
									player.phaseDraw();
									player.removeSkill('sgk_yanliang_black');
								}
							}
						}
					},
					sgk_duzhi:{
						audio:1,
						trigger:{player:'recoverAfter'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget('是否发动【毒治】？',trigger.num,function(card,target,player){
								return player!=target;
							}).ai=function(target){
								return -get.attitude(player,target);
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_duzhi',result.targets);
								for(var i=0;i<result.targets.length;i++){
									result.targets[i].loseHp();
									result.targets[i].chooseToUse({name:'sha'},player);
								}	
							}
						},
						ai:{
							expose:0.2
						},
						group:'sgk_duzhi2'
					},
					sgk_duzhi2:{
						audio:1,
						trigger:{source:'damageEnd'},
						filter:function(event,player){
							return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget('是否发动【毒治】？',function(card,target,player){
								return player!=target;
							}).ai=function(target){
								return -get.attitude(player,target);
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_duzhi',result.targets);
								for(var i=0;i<result.targets.length;i++){
									result.targets[i].loseHp();
									result.targets[i].chooseToUse({name:'sha'},player);
								}	
							}
						},
						ai:{
							expose:0.2
						}
					},
					sgk_lieyi:{
						mod:{
							cardEnabled:function(card,player){
								if(card.name=='tao'&&_status.event.skill!='sgk_lieyi') return false;
							},
							cardUsable:function(card,player){
								if(card.name=='tao'&&_status.event.skill!='sgk_lieyi') return false;
							},
							cardRespondable:function(card,player){
								if(card.name=='tao'&&_status.event.skill!='sgk_lieyi') return false;
							},
							cardSavable:function(card,player){
								if(card.name=='tao'&&_status.event.skill!='sgk_lieyi') return false;
							},
						},
						audio:1,
						enable:['chooseToUse','chooseToRespond'],
						filter:function(event,player){
							return player.countCards('h','tao')>0;
						},
						filterCard:{name:'tao'},
						viewAs:{name:'sha'},
						viewAsFilter:function(player){
							if(!player.countCards('h','tao')) return false;
						},
						prompt:'锁定技，你的【桃】均视为【杀】。',
						check:function(){return 1},
						ai:{
							skillTagFilter:function(player){
								if(!player.countCards('h','tao')) return false;
							},
							respondSha:true,
							order:4,
							useful:-1,
							value:-1
						},
						group:['sgk_lieyi2']
					},
					sgk_lieyi2:{
						mod:{
							cardEnabled:function(card,player){
								if(card.name=='shan'&&_status.event.skill!='sgk_lieyi2') return false;
							},
							cardUsable:function(card,player){
								if(card.name=='shan'&&_status.event.skill!='sgk_lieyi2') return false;
							},
							cardRespondable:function(card,player){
								if(card.name=='shan'&&_status.event.skill!='sgk_lieyi2') return false;
							},
							cardSavable:function(card,player){
								if(card.name=='shan'&&_status.event.skill!='sgk_lieyi2') return false;
							},
						},
						enable:['chooseToUse','chooseToRespond'],
						filter:function(event,player){
							return player.countCards('h','shan')>0;
						},
						filterCard:{name:'shan'},
						viewAs:{name:'jiu'},
						viewAsFilter:function(player){
							if(!player.countCards('h','shan')) return false;
						},
						prompt:'锁定技，你的【闪】均视为【酒】。',
						check:function(){return 1},
						ai:{
							skillTagFilter:function(player){
								if(!player.countCards('h','shan')) return false;
							},
							save:true,
							order:4,
							useful:-1,
							value:-1
						},
					},
					sgk_baoli:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filterTarget:function(card,player,target){
							return (!target.countCards('e')||target.countCards('j'))&&player!=target;
						},
						content:function(){
							target.damage();
						},
						ai:{
							order:4,
							result:{
								target:-1,
							}
						}
					},
					sgk_huanbing:{
						audio:2,
						trigger:{target:'shaBegin'},
						filter:function(event,player){
							if(get.itemtype(event.card)!='card') return false;
							return event.card&&event.card.name=='sha';
						},
						forced:true,
						init:function(player){
							player.storage.sgk_huanbing=[];
						},
						content:function(){
							'step 0'
							trigger.untrigger();
							trigger.finish();
							player.lose(trigger.card,ui.special);
							player.$gain2(trigger.card);
							player.storage.sgk_huanbing=player.storage.sgk_huanbing.concat(trigger.card);
							player.syncStorage('sgk_huanbing');
							player.markSkill('sgk_huanbing');
						},
						intro:{
							content:'cards'
						},
						ai:{
							effect:{
								target:function(card,player,target){
									if(card.name=='sha') return [1,0.5];
								}
							}
						},
						group:'sgk_huanbing2'
					},
					sgk_huanbing2:{
						audio:2,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.storage.sgk_huanbing.length;
						},
						forced:true,
						content:function(){
							'step 0'
							if(player.storage.sgk_huanbing.length){
								player.$phaseJudge(player.storage.sgk_huanbing[0]);
								player.judge(function(card){
									if(get.color(card)=='red') return 1;
									return -0.5;
								});
							}
							else{
								event.finish();
							}
							'step 1'
							if(result.bool){
								player.draw();
								player.gain(player.storage.sgk_huanbing[0],'gain2');
								player.storage.sgk_huanbing.remove(player.storage.sgk_huanbing[0]);
								player.syncStorage('sgk_huanbing');
								if(!player.storage.sgk_huanbing.length){
									player.unmarkSkill('sgk_huanbing');
								}
								else{
									player.markSkill('sgk_huanbing');
								}
							}
							else{
								player.loseHp();
								player.gain(player.storage.sgk_huanbing[0],'gain2');
								player.storage.sgk_huanbing.remove(player.storage.sgk_huanbing[0]);
								player.syncStorage('sgk_huanbing');
								if(!player.storage.sgk_huanbing.length){
									player.unmarkSkill('sgk_huanbing');
								}
								else{
									player.markSkill('sgk_huanbing');
								}
							}
							event.goto(0);
						}
					},
					sgk_hongyuan:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h')&&player.isDamaged();
						},
						filterCard:true,
						selectCard:function(){
							return [1,_status.event.player.maxHp-_status.event.player.hp];
						},
						check:function(card){
							return 6-get.value(card);
						},
						filterTarget:true,
						content:function(){
							'step 0'
							event.count=cards.length;
							'step 1'
							target.chooseTarget('请选择目标',function(card,player,target2){
								return target2.num('ej');
							}).set('ai',function(target2){
								var target=_status.event.player;
								if(get.attitude(target,target2)>0&&target2.num('j')) return 1;
								return -get.attitude(target,target2);
							});
							'step 2'
							if(result.bool){
								target.gainPlayerCard('请选择想要获得的牌',[1,event.count],'ej',result.targets[0]),true;
							}
							else{
								event.finish();
							}
							'step 3'
							if(result.bool){
								event.count-=result.links.length;
								if(event.count) event.goto(1);
							}
						},
					},
					sgk_huaqiang:{
						audio:2,
						usable:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h')>=player.hp;
						},
						filterCard:function(card){
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(card)==get.suit(ui.selected.cards[i])) return false;
							}
							return true;
						},
						complexCard:true,
						selectCard:function(){
							return Math.min(4,_status.event.player.hp);
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						check:function(card){
							return 6-get.value(card);
						},
						content:function(){
							target.damage();
						},
						ai:{
							order:8,
							expose:0.2,
							result:{
								player:function(player){
									var eff=player.hp/2;
									return -eff;
								},
								target:function(player,target){
									return get.damageEffect(target,player);
								}
							}
						}
					},
					sgk_chaohuang:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filterTarget:function(card,player,target){
							return get.distance(player,target,'attack')<=1&&player.canUse({name:'sha'},target);
						},
						delay:false,
						line:false,
						selectTarget:[1,Infinity],
						multitarget:true,
						content:function(){
							player.loseHp();
							player.useCard({name:'sha'},targets,false);
						},
						ai:{
							order:5,
							result:{
								player:function(player,target){
									if(player.hp>=target.hp) return -0.9;
									if(player.hp<=2) return -10;
									return -2;
								},
								target:function(player,target){
									return get.effect(target,{name:'sha'},player,target);
								}
							}
						}
					},
					sgk_huilian:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filterTarget:function(card,player,target){
							return player!=target;
						},
						content:function(){
							'step 0'
							target.judge(function(card){
								if(target.hp==target.maxHp){
									if(get.suit(card)=='heart') return 1;
								}
								if(get.suit(card)=='heart') return 2;
								return 1;
							});
							'step 1'
							target.gain(result.card,'gain2');
							if(result.suit=='heart'){
								target.recover();
							}
						},
						ai:{
							order:9,
							expose:0.2,
							result:{
								target:function(target){
									if(target.isDamaged()) return 2;
									return 1;
								}
							}
						}
					},
					sgk_wenliang:{
						audio:2,
						trigger:{global:'judgeAfter'},
						frequent:true,
						filter:function(event,player){
							return (get.color(event.result.card)=='red');
						},
						content:function(){
							player.draw();
						}
					},
					// sgk_qianhuan:{},
					sgk_jinglun:{
						audio:1,
						trigger:{player:'useCard'},
						frequent:true,
						nodelay:true,
						filter:function(event,player){
							var type=get.type(event.card);
							return type=='trick'&&event.cards[0]&&event.cards[0]==event.card;
						},
						content:function(){
							'step 0'
							event.card=get.cardPile('wuxie');
							'step 1'
							if(event.card){
								player.gain(event.card,'gain2');
								game.log(player,'从牌堆获得了',event.card);
							}
							else{
								event.card=get.cardPile('wuxie');
								if(event.card){
									var i=parseInt(Math.random()*ui.cardPile.childNodes.length);
									ui.cardPile.insertBefore(event.card,ui.cardPile.childNodes[i]);
									game.log(player,'将',event.card,'随机置于牌堆');
									player.draw();
								}
							}
						}
					},
					sgk_ruzong:{
						srlose:true,
						audio:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h','wuxie')>0;
						},
						chooseButton:{
							dialog:function(){
								var list=[];
								for(var i in lib.card){
									if(!lib.translate[i+'_info']) continue;
									if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
									if(lib.card[i].type=='basic') list.push(['basic','',i]);
								}
								return ui.create.dialog('儒宗:请选择想要使用的基本牌',[list,'vcard']);
							},
							filter:function(button,player){
								return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
							},
							check:function(button){
								var player=_status.event.player;
								var shaTarget=false;
								for(var i=0;i<game.players.length;i++){
									if(player.canUse('sha',game.players[i])&&get.effect(game.players[i],{name:'sha'},player)>0){
										shaTarget=true;
									}
								}
								if(player.isDamaged()) return (button.link[2]=='tao')?1:-1;
								if(shaTarget&&player.countCards('h','sha')&&!player.countCards('h','jiu')) return (button.link[2]=='jiu')?1:-1;
								if(shaTarget&&!player.countCards('h','sha')) return (button.link[2]=='sha')?1:-1;
								return 0;
							},
							backup:function(links,player){
								return {
									filterCard:{name:'wuxie'},
									audio:1,
									popname:true,
									ai1:function(card){
										return 8-get.value(card);
									},
									viewAs:{name:links[0][2]},
								}
							},
							prompt:function(links,player){
								return '将一张无懈可击当'+get.translation(links[0][2])+'使用';
							}
						},
						ai:{
							order:6,
							result:{
								player:function(player){
									if(player.isDamaged()) return 2;
									return player.countCards('h','wuxie')-1;
								}
							}
						},
						group:['sgk_ruzong_sha','sgk_ruzong_shan','sgk_ruzong_tao'],
						subSkill:{
							sha:{
								audio:1,
								enable:['chooseToRespond','chooseToUse'],
								filterCard:{name:'wuxie'},
								viewAs:{name:'sha'},
								filter:function(event,player){
									if(!player.countCards('h',{name:'wuxie'})) return false;
									return event.parent.name!='phaseUse';
								},
								prompt:'将一张无懈可击当【杀】使用或打出',
								check:function(card){
									var player=_status.event.player;
									if(player.countCards('h','sha')) return 6-get.value(card);
									return 7-get.value(card);
								},
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('h',{name:'wuxie'})) return false;
									},
									respondSha:true,
									useful:[10,8],
								}
							},
							shan:{
								audio:1,
								enable:['chooseToRespond','chooseToUse'],
								filterCard:{name:'wuxie'},
								viewAs:{name:'shan'},
								filter:function(event,player){
									if(!player.countCards('h',{name:'wuxie'})) return false;
									return event.parent.name!='phaseUse';
								},
								prompt:'将一张无懈可击当【闪】使用或打出',
								check:function(card){
									var player=_status.event.player;
									if(player.countCards('h','shan')) return 6-get.value(card);
									return 7-get.value(card);
								},
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('h',{name:'wuxie'})) return false;
									},
									respondShan:true,
									useful:[10,8],
								}
							},
							tao:{
								audio:1,
								enable:['chooseToRespond','chooseToUse'],
								filterCard:{name:'wuxie'},
								viewAs:{name:'tao'},
								filter:function(event,player){
									if(!player.countCards('h',{name:'wuxie'})) return false;
									return event.parent.name!='phaseUse';
								},
								prompt:'将一张无懈可击当【桃】使用或打出',
								check:function(card,player){
									var player=_status.event.player;
									if(player.countCards('h','tao')) return 6-get.value(card);
									return 7-get.value(card);
								},
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('h',{name:'wuxie'})) return false;
									},
									save:true,
									useful:[10,8],
								}
							}
						}
					},
					sgk_leiji:{
						audio:1,
						trigger:{global:'respond'},
						filter:function(event){
							return event.card.name=='shan';
						},
						direct:true,
						content:function(){
							'step 0'
							var card=get.cardPile(function(card){
								return card.name=='shandian';
							});
							if(card){
								event.card=card;
								player.chooseTarget(get.prompt('sgk_leiji'),function(card,player,target){
									return lib.filter.targetEnabled({name:'shandian'},target,target);
								}).ai=function(target){
									var now=_status.currentPhase.next;
									for(var i=0;i<10;i++){
										if(get.attitude(player,now)<=0) return target==now;
										else{
											now=now.next;
										}
									}
									return false;
								}
							}
							else{
								event.finish();
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_leiji',result.targets[0]);
								result.targets[0].$gain(event.card);
								player.line(result.targets[0],'thunder');
								result.targets[0].addJudge(event.card);
							}
						}
					},
					sgk_shanxi:{
						audio:1,
						trigger:{global:'judgeEnd'},
						forced:true,
						filter:function(event,player){
							if(event.nogain&&event.nogain(event.result.card)){
								return false;
							}
							return event.card&&event.card.name=='shandian';
						},
						content:function(){
							player.gain(trigger.result.card);
							player.$gain2(trigger.result.card);
							game.log(player,'获得了',trigger.result.card);
						},
						mod:{
							targetEnabled:function(card){
								if(card.name=='shandian') return false;
							}
						}
					},
					sgk_guhuo:{
						audio:1,
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return player!=event.player&&event.player.countCards('h')&&player.countCards('h');
						},
						check:function(event,player){
							if(player.hp<=1) return 0;
							return get.attitude(player,event.player)<0;
						},
						content:function(){
							'step 0'
							player.chooseToCompare(trigger.player);
							'step 1'
							if(result.bool){
								var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
								for(var i=0;i<list.length;i++){
									list[i]=['锦囊','',list[i]];
								}
								var dialog=ui.create.dialog('蛊惑',[list,'vcard'],'hidden');
								var next=player.chooseButton(dialog);
								next.filterButton=function(button,player){
									return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
								}
								next.ai=function(button){
									var player=_status.event.player;
									var recover=0,lose=1;
									for(var i=0;i<game.players.length;i++){
										if(!game.players[i].isOut()){
											if(game.players[i].hp<game.players[i].maxHp){
												if(get.attitude(player,game.players[i])>0){
													if(game.players[i].hp<2){
														lose--;
														recover+=0.5;
													}
													lose--;
													recover++;
												}
												else if(get.attitude(player,game.players[i])<0){
													if(game.players[i].hp<2){
														lose++;
														recover-=0.5;
													}
													lose++;
													recover--;
												}
											}
											else{
												if(get.attitude(player,game.players[i])>0){
													lose--;
												}
												else if(get.attitude(player,game.players[i])<0){
													lose++;
												}
											}
										}
									}
									var shunTarget=false;
									var chaiTarget=false;
									for(var i=0;i<game.players.length;i++){
										if(player.canUse('shunshou',game.players[i])&&get.effect(game.players[i],{name:'shunshou'},player)){
											shunTarget=true;
										}
										if(player.canUse('guohe',game.players[i])&&get.effect(game.players[i],{name:'guohe'},player)>=0){
											chaiTarget=true;
										}
									}
									if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
									if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
									if(shunTarget) return (button.link[2]=='shunshou')?2:-1;
									if(chaiTarget) return (button.link[2]=='guohe')?2:-1;
									return (button.link[2]=='wuzhong')?1:-1;
								}
							}
							else{
								player.damage(trigger.player);
								event.finish();
							}
							'step 2'
							if(result.bool){
								lib.skill.sgk_guhuo2.viewAs={name:result.buttons[0].link[2]};
								var next=player.chooseToUse();
								next.set('openskilldialog','选择'+get.translation(result.buttons[0].link[2])+'的目标');
								next.set('norestore',true);
								next.set('_backupevent','sgk_guhuo2');
								next.backup('sgk_guhuo2');
							}
						},
					},
					sgk_guhuo2:{
						filterCard:function(){return false;},
						selectCard:0,
						popname:true,
					},
					sgk_fulu:{
						audio:1,
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							return player!=event.player;
						},
						logTarget:'player',
						check:function(event,player){
							if(event.player.hasSkill('sgk_fulu2')&&get.attitude(player,event.player)<0) return 1;
							if(!event.player.hasSkill('sgk_fulu2')&&get.attitude(player,event.player)>0) return 1;
							return 0;
						},
						content:function(){
							trigger.player.draw();
							if(trigger.player.hasSkill('sgk_fulu2')){
								trigger.player.addSkill('sgk_chanyuan');
								trigger.player.storage.sgk_chanyuan=player;
							}
						},
						group:['sgk_fulu_damage'],
						subSkill:{
							damage:{
								trigger:{player:'damageEnd'},
								forced:true,
								silent:true,
								popup:false,
								filter:function(event,player){
									return event.source&&event.source!=player&&_status.currentPhase==event.source;
								},
								content:function(){
									trigger.source.addSkill('sgk_fulu2');
								}
							}
						}
					},
					sgk_fulu2:{
						trigger:{global:'phaseAfter'},
						forced:true,
						popup:false,
						content:function(){
							player.removeSkill('sup_guhuo2');
						}
					},
					sgk_chanyuan:{
						trigger:{global:'damage'},
						forced:true,
						filter:function(event,player){
							return event.player==player.storage.sgk_chanyuan;
						},
						content:function(){
							player.loseHp();
							delete player.storage.sgk_chanyuan;
							player.removeSkill('sgk_chanyuan');
						},
						mark:true,
						marktext:'缠',
						intro:{
							content:'已获得缠怨标记'
						},
						group:['sgk_chanyuan_die'],
						subSkill:{
							die:{
								trigger:{player:'dieBegin'},
								forced:true,
								content:function(){
									event.player=player.storage.sgk_chanyuan;
									if(event.player.isAlive()){
										event.player.recover();
									}
									delete player.storage.sgk_chanyuan;
									player.removeSkill('sgk_chanyuan');
								}
							}
						}						
					},
					sgk_gongshen:{
						audio:2,
						enable:'phaseUse',
						filterCard:true,
						selectCard:3,
						position:'he',
						filter:function(event,player){
							return player.countCards('he')>2;
						},
						check:function(card,event){

							return 6-get.value(card);
						},
						content:function(){
							'step 0'
							player.draw();
							'step 1'
							if(player.isDamaged()){
								if(player.isFewestHandcard()){
									player.recover();
								}
							}
							
						},
						ai:{
							order:1,
							result:{
								player:function(player){
									if(!player.isDamaged()) return -2;
									if(player.isFewestHandcard()) return 1;
									return 0;
								}
							}
						}
					},
					sgk_jianyue:{
						audio:2,
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							if(ui.discardPile.hasChildNodes()==false) return false;
							return event.player.isFewestHandcard();
						},
						logTarget:'player',
						check:function(event,player){
							return get.attitude(player,event.player)>0;
						},
						content:function(){
							'step 0'
							var isLess=!(ui.discardPile.hasChildNodes()==false)&&!trigger.player.isFewestHandcard();
							if(isLess){
								var card;
								if(card){
									trigger.player.gain(card,'gain2');
									event.redo();
								}
							}
						},
						ai:{
							expose:0.2
						}
					},
					sgk_zhengyi:{
						audio:2,
						enable:'phaseUse',
						filter:function(event,player){ 
							return player.countCards('h')-1==player.hp;
						},
						chooseButton:{
							dialog:function(event,player){
								var list=['sha','sha','sha','jiu','tao'];
								var list2=[];
								var nature=['','thunder','fire','',''];
								for(var i=0;i<list.length;i++){
									list2.push(['基本','',list[i],nature[i]]);
								}
								return ui.create.dialog('整毅',[list,'vcard']);
							},
							filter:function(button,player){
								return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
							},
							check:function(button){
								var player=_status.event.player;
								var shaTarget=false;
								for(var i=0;i<game.players.length;i++){
									if(player.canUse('sha',game.players[i])&&get.effect(game.players[i],{name:'sha'},player)>0){
										shaTarget=true;
									}
								}
								if(player.isDamaged()) return (button.link[2]=='tao')?1:-1;
								if(shaTarget&&player.countCards('h','sha')&&!player.countCards('h','jiu')) return (button.link[2]=='jiu')?1:-1;
								if(shaTarget&&!player.countCards('h','sha')) return (button.link[2]=='sha')?1:-1;
								return (button.link[2]=='sha')?1:-1;
							},
							backup:function(links,player){
								return {
									filterCard:false,
									selectCard:0,
									popname:true,
									viewAs:{name:links[0][2]},
									onuse:function(result,player){
										player.chooseToDiscard(true);
									}
								}
							},
							prompt:function(links,player){
								return '选择'+get.translation(links[0][2])+'的目标';
							}
						},
						ai:{
							order:6,
							result:{
								player:1,
							},
							threaten:1.3,
						},
						group:['sgk_zhengyi_sha','sgk_zhengyi_shan','sgk_zhengyi_tao','sgk_zhengyi_sha2','sgk_zhengyi_shan2','sgk_zhengyi_tao2'],
						subSkill:{
							sha:{
								enable:['chooseToUse','chooseToRespond'],
								filter:function(event,player){
									if(_status.currentPhase==player) return false;
									return player.countCards('h')+1==player.hp;
								},
								filterCard:function(){return false},
								selectCard:-1,
								check:function(){return 1;},
								viewAs:{name:'sha'},
								onuse:function(result,player){
									player.draw();
								},
								onrespond:function(result,player){
									player.draw();
								},
								ai:{
									skillTagFilter:function(player){
										if(_status.currentPhase==player) return false;
										return player.countCards('h')+1==player.hp;
									},
									respondSha:true
								}
							},
							shan:{
								enable:['chooseToRespond'],
								filter:function(event,player){
									if(_status.currentPhase==player) return false;
									return player.countCards('h')+1==player.hp;
								},
								filterCard:function(){return false},
								selectCard:-1,
								check:function(){return 1;},
								viewAs:{name:'shan'},
								onrespond:function(result,player){
									player.draw();
								},
								ai:{
									skillTagFilter:function(player){
										if(_status.currentPhase==player) return false;
										return player.countCards('h')+1==player.hp;
									},
									respondShan:true
								}
							},
							tao:{
								enable:'chooseToUse',
								filter:function(event,player){
									if(_status.currentPhase==player) return false;
									return player.countCards('h')+1==player.hp;
								},
								filterCard:function(){return false},
								selectCard:-1,
								check:function(){return 1;},
								viewAs:{name:'tao'},
								onuse:function(result,player){
									player.draw();
								},
								onrespond:function(result,player){
									player.draw();
								},
								ai:{
									skillTagFilter:function(player){
										if(_status.currentPhase==player) return false;
										return player.countCards('h')+1==player.hp;
									},
									save:true
								}
							},
							sha2:{
								enable:['chooseToUse','chooseToRespond'],
								filter:function(event,player){
									if(_status.currentPhase!=player) return false;
									return player.countCards('h')-1==player.hp&&event.parent.name!='phaseUse';
								},
								filterCard:function(){return false},
								selectCard:-1,
								check:function(){return 1;},
								viewAs:{name:'sha'},
								onuse:function(result,player){
									player.chooseToDiscard(true);
								},
								onrespond:function(result,player){
									player.chooseToDiscard(true);
								},
								ai:{
									skillTagFilter:function(player){
										if(_status.currentPhase!=player) return false;
										return player.countCards('h')-1==player.hp&&event.parent.name!='phaseUse';
									},
									respondSha:true
								}
							},
							shan2:{
								enable:['chooseToRespond'],
								filter:function(event,player){
									if(_status.currentPhase!=player) return false;
									return player.countCards('h')-1==player.hp&&event.parent.name!='phaseUse';
								},
								filterCard:function(){return false},
								selectCard:-1,
								check:function(){return 1;},
								viewAs:{name:'shan'},
								onrespond:function(result,player){
									player.chooseToDiscard(true);
								},
								ai:{
									skillTagFilter:function(player){
										if(_status.currentPhase!=player) return false;
										return player.countCards('h')-1==player.hp;
									},
									respondShan:true
								}
							},
							tao2:{
								enable:['chooseToUse','chooseToRespond'],
								filter:function(event,player){
									if(_status.currentPhase!=player) return false;
									return player.countCards('h')-1==player.hp&&event.parent.name!='phaseUse';
								},
								filterCard:function(){return false},
								selectCard: 0,
								check:function(){return 1;},
								viewAs:{name:'tao'},
								onuse:function(result,player){
									player.chooseToDiscard(true);
								},
								onrespond:function(result,player){
									player.chooseToDiscard(true);
								},
								ai:{
									skillTagFilter:function(player){
										if(_status.currentPhase!=player) return false;
										return player.countCards('h')-1==player.hp;
									},
									save:true
								}
							}
						}
					},
					sgk_pengri:{
						audio:2,
						enable:'phaseUse',
						selectTarget:-1,
						usable:1,
						line:'fire',
						filter:function(event,player){
							return game.hasPlayer(function(target){
								return get.distance(target,player,'attack')<=1&&player!=target;
							});
						},
						filterTarget:function(card,player,target){
							return get.distance(target,player,'attack')<=1&&player!=target;
						},
						multitarget:true,
						multiline:true,
						content:function(){
							'step 0'
							player.draw(2);
							event.target=target;
							'setp 1'
							event.target.chooseToUse('是否对'+get.translation(player)+'使用一张杀？',{name:'sha'},player,-1);
						},
						ai:{
							order:9,
							result:{
								player:function(player){
									if(player.hasShan()) return 2;
									return 0;
								}
							}
						}
					},
					sgk_danmou:{
						audio:2,
						trigger:{player:'damageAfter'},
						filter:function(event){
							return event.source&&event.player&&event.player.isAlive()&&event.source.isAlive()&&event.source!=event.player;
						},
						check:function(event,player){
							if(get.attitude(player,event.source)>0) return player.countCards('h')-event.source.countCards('h');
							if(get.attitude(player,event.source)<=0) return event.source.countCards('h')-player.countCards('h');
						},
						content:function(){
							'step 0'
							player.swapHandcards(trigger.source);
						}
					},
					sgk_fushe:{
						audio:2,
						trigger:{global:'phaseUseBegin'},
						filter:function(event,player){
							return get.distance(event.player,player,'attack')<=1&&event.player!=player;
						},
						logTarget:'player',
						check:function(event,player){
							return get.attitude(event.player,player)<=0;
						},
						content:function(){
							'step 0'
							player.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
								switch(Math.floor(Math.random()*6)){
									case 0:return 'heart2';
									case 1:case 4:return 'diamond2';
									case 2:case 5:return 'club2';
									case 3:return 'spade2';
								}
							});
							'step 1'
							trigger.player.storage.sgk_fushe=result.control;
							trigger.player.addTempSkill('sgk_fushe_scanning','phaseUseAfter');
							trigger.player.addTempSkill('sgk_fushe_scanning2','phaseUseAfter');
						},
						subSkill:{
							scanning:{
								audio:false,
								popup:false,
								forced:true,
								slient:true,
								trigger:{global:['useCardAfter','respondAfter','discardAfter']},
								filter:function(event,player){
									if(event.cards){
										for(var i=0;i<event.cards.length;i++){
											if(get.position(event.cards[i])=='d'&&get.suit(event.cards[i])+'2'==player.storage.sgk_fushe) 
												return true;
										}
									}
									return false;
								},
								content:function(){
									player.addTempSkill('sgk_fushe_debuff','phaseUseAfter');
								}
							},
							scanning2:{
								audio:false,
								popup:false,
								forced:true,
								slient:true,
								trigger:{global:'judgeAfter'},
								filter:function(event,player){
									if(event.result.card.parentNode.id!='discardPile') return false;
									return (get.suit(event.result.card)+'2'==player.storage.sgk_fushe);
								},
								content:function(){
									player.addTempSkill('sgk_fushe_debuff','phaseUseAfter');
								}
							},
							debuff:{
								trigger:{player:'phaseUseEnd'},
								forced:true,
								popup:false,
								filter:function(event,player){
									var zhangren=game.findPlayer(function(player){
										return player.hasSkill('sgk_fushe');
									});
									return zhangren&&zhangren.isAlive();
								},
								content:function(){
									var zhangren=game.findPlayer(function(player){
										return player.hasSkill('sgk_fushe');
									});
									zhangren.logSkill('sgk_fushe',player);
									player.damage(zhangren);
									zhangren.draw();
								}
							}
						}
					},
					sgk_ziguo:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							if(player.getHandcardLimit()<2) return false;
							return game.findPlayer(function(player){
								return player.isDamaged();
							});
						},
						filterTarget:function(card,player,target){
							return target.isDamaged();
						},
						content:function(){
							target.draw(2);
							player.addTempSkill('sgk_ziguo_debuff','phaseAfter');
						},
						subSkill:{
							debuff:{
								mod:{
									maxHandcard:function(player,num){
										return num-2;
									}
								}
							}
						},
						ai:{
							order:4,
							result:{
								player:function(player,target){
									if(player.countCards('h')-2<=player.getHandcardLimit()) return 0.1;
									return -0.5;
								},
								target:2,
							}
						}	
					},
					sgk_shangdao:{
						audio:2,
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return event.player.countCards('h')>player.countCards('h');
						},
						forced:true,
						content:function(){
							var card=get.cards();
							player.showCards('商道',card);
							player.gain(card,'gain2');
						}
					},
					sgk_hengjiang:{
						audio:2,
						trigger:{player:'phaseDiscardBegin'},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						check:function(event,player){
							if(player.getHandcardLimit()-1>=player.countCards('h')) return false;
							return true;
						},
						content:function(){
							'step 0'
							player.chooseControl('手牌上限+1','手牌上限-1').set('ai',function(event,player){
								return '手牌上限+1';
							});
							'step 1'
							if(result.control=='手牌上限+1'){
								player.addTempSkill('sgk_hengjiang_buff','phaseAfter');
							}
							else{
								player.addTempSkill('sgk_hengjiang_debuff','phaseAfter');
							}
							player.addTempSkill('sgk_hengjiang_effect','phaseAfter');
						},
						subSkill:{
							effect:{
								audio:false,
								trigger:{player:'phaseDiscardEnd'},
								forced:true,
								popup:false,
								filter:function(event){
									return event.cards&&event.cards.length>0;
								},
								content:function(){
									'step 0'
									event.count=trigger.cards.length;
									'step 1'
									if(event.count>0){
										player.chooseTarget(get.prompt('sgk_hengjiang'),function(card,player,target){
											return target.countCards('ej');
										}).set('ai',function(target){
											return 0;
										});
									}
									else{
										event.finish();
									}
									'step 2'
									if(result.targets){
										var att=get.attitude(player,result.targets[0]);
										player.line(result.targets[0],'water');
										player.discardPlayerCard(result.targets[0],'ej',[1,event.count],function(button){
											if(att>0) return get.type(button.link)=='delay';
											return get.buttonValue(button);
										});
									}
									else{
										event.finish();
									}
									'step 3'
									if(result.bool){
										event.count-=result.links.length;
									}
									if(event.count>0) event.goto(1);
									
								}
							},
							buff:{
								mod:{
									maxHandcard:function(player,num){
										return num+1;
									}
								}
							},
							debuff:{
								mod:{
									maxHandcard:function(player,num){
										return num-1;
									}
								}
							},
						},
					},
					sgk_zhuanshan:{
						audio:2,
						trigger:{player:['phaseBegin','phaseEnd']},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_zhuanshan')).ai=function(target){
								if(target==player){
									if(target.num('j')){
										if(target.num('j','shandian')==0){
											if(event.triggername=='phaseBegin'){
												return 5;
											}
											else{
												return -5;
											}
										}
										return 0;							
									}
								}
								else{
									var att=get.attitude(player,target);
									if(att>0&&target.countCards('j')){
										if(event.triggername=='phaseBegin'){
											return 6;
										}
										else{
											
											return -1;
										}
									}
									else{
										if(target.num('e')){
											return 4;
										}
										return -1;
									}
									return -1;
								}
							};
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								event.target.draw();
								player.choosePlayerCard(event.target,'hej',true);
							}
							else{
								event.finish();
							}
							'step 2'
							player.logSkill('sgk_zhuanshan',event.target);
							event.card=result.links[0];
							event.target.lose(event.card,ui.special);
							game.broadcastAll(function(player){
								var cardx=ui.create.card();
								cardx.classList.add('infohidden');
								cardx.classList.add('infoflip');
								player.$throw(cardx,1000,'nobroadcast');
							},event.target);
							'step 3'
							if(event.target==game.me) game.delay(0.5);
							'step 4'
							if(event.card){
								event.card.fix();
								ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
								game.log(player,'将',event.target,'的一张牌置于牌堆顶');
							}
						}
					},
					sgk_zhenlie:{
						audio:2,
						trigger:{target:'useCardToBefore'},
						filter:function(event,player){
							return event.player!=player&&event.card&&(event.card.name=='sha'||get.type(event.card,'trick')=='trick');
						},
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
						content:function(){
							"step 0"
							player.loseHp();
							"step 1"
							trigger.untrigger();
							trigger.finish();
							"step 2"
							if(player.num('he')){
								player.chooseToDiscard('你可以弃置一张牌，令'+get.translation(trigger.player)+'展示所有手牌并弃置与之花色相同的牌，若不如此做，其失去一点体力','he').set('ai',function(card){
									return 6-get.value(card);
								});
							}
							else{
								event.finish();
							}
							"step 3"
							if(result.bool){
								if(trigger.player.countCards('h')>0){
									trigger.player.showHandcards();
									if(trigger.player.countCards('h',{suit:get.suit(result.cards[0])})){
										event.suit1=get.suit(result.cards[0]);
										trigger.player.chooseBool('是否弃置所有'+get.translation(get.suit(result.cards[0]))+'花色的手牌，否则失去一点体力').ai=function(){
											if(trigger.player.countCards('h',{suit:get.suit(result.cards[0])})>1) return false;
											return true;
										};
									}
									else{
										trigger.player.loseHp();
										event.finish();
									}
								}
								else{
									trigger.player.loseHp();
									event.finish();
								}
							}
							"step 4"
							if(!result.bool){
								trigger.player.loseHp();
							}
							else{
								trigger.player.discard(trigger.player.get('h',{suit:event.suit1}));
							}
						},
						ai:{
							expose:0.3,
							effect:{
								target:function(card,player,target){
									if(player.countCards('h')<2) return;
									if(card.name=='sha'||get.type(card,'trick')=='trick') return [1,0,0,-1.5];
								}
							}
						}
					},
					sgk_miji:{
						audio:2,
						trigger:{player:['phaseBegin','phaseEnd']},
						filter:function(event,player,name){
							if(name=='phaseBegin'){
								return player.isDamaged();
							}
							if(name=='phaseEnd'){
								return !game.hasPlayer(function(target){
									return target.hp<player.hp;
								});
							}
						},
						frequent:true,
						content:function(){
							'step 0'
							player.chooseControl('basic','equip','trick').set('ai',function(){
								var basic=player.num('he','basic');
								var equip=player.num('he','equip');
								var trick=player.num('he','trick');
								var theLess=Math.min(basic,equip,trick);
								switch(theLess){
									case basic:return 'basic';
									case equip:return 'equip';
									case trick:return 'trick';
									default:{
										if(Math.random()<0.5) return 'basic';
										if(Math.random()<0.5) return 'equip';
										if(Math.random()<2/3) return 'trick';
										return 'basic';
									};
								}
							});
							'step 1'
							var card;
							if(card){
								event.card1=card;
								player.showCards('秘计',event.card1);
								player.chooseTarget('将'+get.translation(card)+'交给一名角色').set('ai',function(target){
									var att=get.attitude(_status.event.player,target);
									if(_status.event.du) return -att;
									return att;
								},true).set('du',card.name=='du');
							}
							else{
								game.log('没有找到该类型卡牌，请重新选择');
								event.cantSelect=result.control;
								event.goto(0);
							}
							'step 2'
							result.targets[0].gain(event.card1,'gain');
						}
					}
				},
				translate:{
					sgksk_dengzhi:'SK邓芝',
					sgksk_xuyou:'SK许攸',
					sgksk_zhangbu:'SK张布',
					sgksk_miheng:'SK祢衡',
					sgksk_zumao:'SK祖茂',
					sgksk_huaxiong:'SK华雄',
					sgksk_sunce:'SK孙策',
					sgksk_caoren:'SK曹仁',
					sgksk_gongsunzan:'SK公孙瓒',
					sgksk_sunqian:'SK孙乾',
					sgksk_maliang:'SK马良',
					sgksk_buzhi:'SK步骘',
					sgksk_wangping:'SK王平',
					sgksk_huangyueying:'SK黄月英',
					sgksk_dongzhuo:'SK董卓',
					sgksk_chendao:'SK陈到',
					sgksk_dingfeng:'SK丁奉',
					sgksk_wenchou:'SK文丑',
					sgksk_yanliang:'SK颜良',
					sgksk_zhuran:'SK朱然',
					sgksk_lukang:'SK陆抗',
					sgksk_lvlingqi:'SK吕玲绮',
					sgksk_zhoucang:'SK周仓',
					sgksk_kongrong:'SK孔融',
					sgksk_caochong:'SK曹冲',	
					sgksk_zhanglu:'SK张鲁',	
					sgksk_guanlu:'管辂',
					sgksk_simazhao:'SK司马昭',	
					sgksk_yangxiu:'SK杨修',	
					sgksk_liyan:'SK李严',	
					sgksk_jiping:'SK吉平',
					sgksk_sunhao:'SK孙皓',	
					sgksk_zhugejin:'SK诸葛瑾',	
					sgksk_zhangxiu:'SK张绣',	
					sgksk_sunluyu:'SK孙鲁育',
					sgksk_zuoci:'SK左慈',
					sgksk_luzhi:'SK卢植',
					sgksk_zhangning:'SK张宁',
					sgksk_yuji:'SK于吉',
					sgksk_guonvwang:'SK郭女王',
					sgksk_yujin:'SK于禁',
					sgksk_chengyu:'SK程昱',
					sgksk_zhangren:'SK张任',
					sgksk_mizhu:'SK糜竺',
					sgksk_zangba:'SK臧霸',
					sgksk_hejin:'SK何进',
					sgksk_wangyi:'SK王异',
					sgksk_zhangbao:'SK张宝',
					
					sgk_zhoufu:'咒缚',
					sgk_yingbing:'影兵',
					sgk_hemeng:'和盟',
					sgk_sujian:'素检',
					sgk_yexi:'夜袭',
					sgk_kuangyan:'狂言',
					sgk_kuangyan2:'狂言',
					sgk_chaochen:'朝臣',
					sgk_chaochen2:'朝臣',
					sgk_quanzheng:'全政',
					sgk_shejian:'舌剑',
					sgk_kuangao:'狂傲',
					sgk_yinbing:'引兵',
					sgk_yinbing2:'引兵',
					sgk_fenwei:'奋威',
					sgk_shiyong:'恃勇',
					sgk_angyang:'昂扬',
					sgk_weifeng:'威风',
					sgk_xieli:'协力',
					sgk_jushou:'据守',
					sgk_yicong:'义从',
					sgk_muma:'募马',
					sgk_suiji:'随骥',
					sgk_fengyi:'风仪',
					sgk_yalv:'雅虑',
					sgk_xiemu:'协穆',
					sgk_zhejie:'折节',
					sgk_fengya:'风雅',
					sgk_yijian:'义谏',
					sgk_feijun:'飞军',
					sgk_muniu:'木牛',
					sgk_muniu2:'木牛',
					sgk_liuma:'流马',
					sgk_baozheng:'暴征',
					sgk_lingnu:'凌怒',
					sgk_zhongyong:'忠勇',
					sgk_bozhan:'搏战',
					sgk_qingxi:'轻袭',
					sgk_langxing:'狼行',
					sgk_langxing2:'狼行',
					sgk_hubu:'虎步',
					sgk_danshou:'胆守',
					sgk_yonglie:'勇烈',
					sgk_hengshi:'衡势',
					sgk_zhijiao:'至交',
					sgk_zhijiao2:'至交',
					sgk_jiwux:'戟舞',
					sgk_daoshi:'刀侍',
					sgk_lirang:'礼让',
					sgk_lirang2:'礼让',
					sgk_lirang2_backup:'礼让',
					sgk_xianshi:'贤士',
					sgk_chengxiang:'称象',
					sgk_renxin:'仁心',
					sgk_midao:'米道',
					sgk_yishe:'义舍',
					sgk_pudu:'普渡',
					sgk_zongqing:'纵情',
					sgk_bugua:'卜卦',
					sgk_zhaoxin:'昭心',
					sgk_zhihe:'制合',
					sgk_caijie:'才捷',
					sgk_jilei:'鸡肋',
					sgk_yanliang:'延粮',
					sgk_duzhi:'毒治',
					sgk_duzhi2:'毒治',
					sgk_lieyi:'烈杀',
					sgk_lieyi2:'烈酒',
					sgk_baoli:'暴戾',
					sgk_huanbing:'缓兵',
					sgk_huanbing2:'缓兵',
					sgk_hongyuan:'弘援',
					sgk_huaqiang:'花枪',
					sgk_chaohuang:'朝凰',
					sgk_huilian:'慧敛',
					sgk_wenliang:'温良',
					// sgk_qianhuan:'千幻',
					sgk_jinglun:'经纶',
					sgk_ruzong:'儒宗',
					sgk_leiji:'雷祭',
					sgk_shanxi:'闪戏',
					sgk_guhuo:'蛊惑',
					sgk_fulu:'符箓',
					sgk_chanyuan:'缠怨',
					sgk_gongshen:'恭慎',
					sgk_jianyue:'俭约',
					sgk_zhengyi:'整毅',
					sgk_pengri:'捧日',
					sgk_danmou:'胆谋',
					sgk_fushe:'伏射',
					sgk_ziguo:'资国',
					sgk_shangdao:'商道',
					sgk_hengjiang:'横江',
					sgk_zhuanshan:'专擅',
					sgk_zhenlie:'贞烈',
					sgk_miji:'秘计',
					sgkstar_guanyu:'☆关羽',
					sgk_danji:'单骑',
					sgk_tuodao:'拖刀',
					
					sgk_zhoufu_info:'其他角色的回合开始时，你可以弃置一张手牌令其判定，若结果为黑桃，其于本回合失去所有技能。若结果为梅花，其弃置两张牌。',
					sgk_yingbing_info:'当一名角色的黑色判定牌生效后，你可以视为对其使用一张【杀】。',
					sgk_tuodao_info:'每当你用【闪】抵消了一次【杀】的效果时，若使用者在你的攻击范围内，你可以立刻对其使用一张【杀】，此【杀】无视防具且不可被【闪】响应',
					sgk_danji_info:'觉醒技，回合开始阶段，若你的手牌数大于你的体力值，你须自减一点体力上限，回复2点体力，并永久获得技能“拖刀”（每当你用【闪】抵消了一次【杀】的效果时，若使用者在你的攻击范围内，你可以立刻对其使用一张【杀】，此【杀】无视防具且不可被【闪】响应）。',
					sgk_zhenlie_info:'当你成为其他角色使用的【杀】或非延时锦囊牌的目标时，你可以失去一点体力，令此牌对你无效，然后你可以弃置一张牌，令该角色展示所有手牌并弃置与之花色相同的牌，若不如此做，其失去一点体力。',
					sgk_miji_info:'回合开始阶段开始时，若你已受伤，你可以声明一种牌的类别，然后从牌堆随机亮出一张此类别的牌，将之交给一名角色。回合结束阶段开始时，若你的体力为全场最少（或之一），你亦可以如此做。',
					sgk_pengri_info:'出牌阶段限一次，你可以摸两张牌，然后攻击范围内含有你的其他角色可依次对你使用一张【杀】',
					sgk_danmou_info:'当你受到伤害后，你可以与伤害来源交换手牌。',
					sgk_fushe_info:'其他角色的出牌阶段开始时，若其在你的攻击范围内，你可以选择一种花色。若如此做，此阶段结束时，若其有此花色的牌进入弃牌堆，你对其造成1点伤害，然后摸一张牌。',
					sgk_ziguo_info:'出牌阶段限一次，你可以令一名已受伤的角色摸两张牌，若如此做，本回合你的手牌上限-2。',
					sgk_shangdao_info:'锁定技，一名角色的准备阶段开始时，若其手牌数大于你，你展示牌堆顶牌并获得之。',
					sgk_hengjiang_info:'弃牌阶段开始时，你可以令你的手牌上限+1或-1，若如此做，此阶段结束时，你可以弃置场上的至多X张牌（X为此阶段你弃置的牌数）。',
					sgk_zhuanshan_info:'回合开始/结束阶段开始时，你可以令一名角色摸一张牌，然后将该角色的一张牌置于牌堆顶。',
					sgk_hemeng_info:'出牌阶段，若你有手牌，可令一名其他角色观看你的手牌并获得其中一张，然后你观看该角色的手牌并获得其一张牌。每阶段限（X+1）次，X为你此阶段开始时已损失的体力值。',
					sgk_sujian_info:'每当你从其他角色处获得一次牌时，可令一名其他角色弃置你一张牌，然后你弃置其一张牌。',
					sgk_yexi_info:'回合结束阶段，你可以多弃一张手牌， 然后指定你以外的一个角色选择:1.使用黑色杀时无视防具。2.使用红色杀时无视距离。该角色将在他的下个出牌阶段得到上述效果中的一个。',
					sgk_kuangyan_info:'锁定技，你受到1点无属性伤害时，该伤害对你无效，你受到两点或两点以上伤害时，该伤害+1。',
					sgk_chaochen_info:'出牌阶段限一次，你可以将至少一张手牌交给一名其他角色，若如此做，该角色的回合开始阶段开始时，若其手牌数大于其体力值，你对其造成1点伤害。',
					sgk_quanzheng_info:'当你成为其他角色使用的【杀】或非延时类锦囊牌的目标后，若其手牌或装备区的牌数大于你对应的区域，你可以摸一张牌。',
					sgk_shejian_info:'出牌阶段对每名其他角色限一次，若你未装备防具，你可以弃置一名其他角色的一张牌，然后该角色可以视为对你使用一张【杀】。',
					sgk_kuangao_info:'当一张对你使用的【杀】结算后，你可以选择一项：弃置所有牌（至少一张），然后该【杀】的使用者弃置所有牌；或令该【杀】的使用者将手牌补至其体力上限的张数（至多5张）。',
					sgk_yinbing_info:'你攻击范围内的一名其他角色成为【杀】的目标时，你可以获得其装备区的一张牌，然后将该【杀】转移给你（你不得是此【杀】的使用者）；当你成为【杀】的目标时，你可以弃置一张牌，然后摸X张牌（X为你已损失的体力值）。',
					sgk_fenwei_info:'当你使用【杀】对目标角色造成伤害时，你可以展示该角色的一张手牌：若为【桃】或【酒】，则你获得之；若不为基本牌，则你弃掉该牌并令该伤害+1。',
					sgk_shiyong_info:'锁定技，你每受到一次红色【杀】或【酒】【杀】造成的伤害后，减少1点体力上限。',
					sgk_angyang_info:'每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌，若对方判定区内有牌，你可以摸两张牌。',
					sgk_weifeng_info:'回合开始阶段，若你的手牌数小于你的体力值，你可以与一名角色拼点，若你赢，你从牌堆摸两张牌，若你没赢，该角色从牌堆摸两张牌。',
					sgk_xieli_info:'主公技，当你需要打出一张拼点牌时，你可请场上吴将帮你出，所有吴将给出牌后，你必须从中挑选一张作为拼点牌并弃掉其余。',
					sgk_jushou_info:'回合结束阶段，你可以摸(X+1)张牌，最多5张。若如此做，将你的武将牌翻面。X为仅计算攻击范围和距离时，场上可以攻击到你的人数。',
					sgk_yicong_info:'锁定技，只要你的体力值大于2点，你计算与其他角色的距离时，始终-1；只要你的体力值为2点或更低，其他角色计算与你的距离时，始终+1。',
					sgk_muma_info:'锁定技，你的回合外，若你没有装备+1/-1马，则其他角色的+1/-1马从装备区失去时，你可以获得之。',
					sgk_suiji_info:'其他角色的弃牌阶段开始时，你可以交给其至少一张手牌，然后其将超出其体力值数量的手牌交给你。',
					sgk_fengyi_info:'当你成为非延时类锦囊牌的唯一目标后，你可以摸一张牌。',
					sgk_yalv_info:'当你受到伤害后，或出牌阶段开始时，你可以观看牌堆顶两张牌并以任意顺序置于牌堆顶，然后你可以摸一张牌。',
					sgk_xiemu_info:'一名角色的回合开始阶段开始时，你可以将一张牌置于牌堆顶，若如此做，该角色回合结束阶段开始时，你可以令其摸一张牌。',
					sgk_zhejie_info:'其他角色的弃牌阶段结束时，你可以弃置一张手牌，令其弃置一张牌，若该角色弃置的牌为装备牌，你将之交给除该角色外的一名角色。',
					sgk_fengya_info:'每当你受到一次伤害时，你可以摸一张牌，然后伤害来源可以摸一张牌并令此伤害-1。',
					sgk_yijian_info:'你可以跳过你的出牌阶段并令一名其他角色摸一张牌，然后若该角色的手牌数不小于你的手牌数，你回复1点体力。',
					sgk_feijun_info:'锁定技，出牌阶段开始时，若你的手牌数不小于你的体力值，本阶段你的攻击范围+X且可以额外使用一张【杀】（X为你当前体力值）；若你的手牌数小于你的体力值，你不能使用【杀】直到回合结束。',
					sgk_muniu_info:'你的回合内，当任意角色装备区的牌发生一次变动时，你可以选择一名角色并选择一项： 弃置其一张手牌，或令其摸一张牌。',
					sgk_liuma_info:'出牌阶段限一次，你可以弃置一张基本牌，然后令至多两名至少一名装备区有牌的其他角色依次选择一项：将其装备区的一张牌交给一名其他角色，或你获得其一张手牌。',
					sgk_baozheng_info:'锁定技，回合结束阶段开始时，你令其他角色依次选择一项：交给你一张牌；或弃置两张牌，然后对你造成1点伤害。',
					sgk_lingnu_info:'锁定技，回合结束时，若你于此回合受到2点或更多的伤害，你减1点体力上限，然后从其他角色处依次获得一张牌。',
					sgk_zhongyong_info:'回合开始阶段开始时，你可以失去1点体力，若如此做，本回合的摸牌阶段，你可以额外摸x张牌（x为你已损失的体力值）；本回合的出牌阶段，你与其他角色的距离为1；本回合的弃牌阶段结束时，你可以令一名其他角色获得你本阶段弃置的牌。',
					sgk_bozhan_info:'当你使用或被使用一张【杀】并完成结算后，若此【杀】未造成伤害，则此【杀】的目标或你可以对你或此【杀】的使用者使用一张【杀】(无距离限制）。',
					sgk_qingxi_info:'锁定技，当你使用【杀】指定一个目标后，若你装备区的牌数少于该角色，则其不能使用【闪】响应此【杀】。',
					sgk_langxing_info:'摸牌阶段开始时，你可以选择放弃摸牌并进行一次判定；你获得此判定牌并且此回合可以将任意一张与该判定牌不同颜色的手牌当【决斗】使用。',
					sgk_hubu_info:'你每使用【杀】造成一次伤害后或受到一次其他角色使用【杀】造成的伤害后，可以令除你外的任意角色进行一次判定；若结果不为黑桃，则视为你对其使用一张【决斗】（此【决斗】不能被【无懈可击】响应）。',
					sgk_danshou_info:'锁定技，当一名角色使用【杀】指定你为目标后，若你与其均有手牌，该角色须与你拼点，若你赢，你摸一张牌，然后弃置其一张牌；若你没赢，此【杀】不可被【闪】响应。',
					sgk_yonglie_info:'当你攻击范围内的一名角色受到【杀】造成的一次伤害后，你可以失去1点体力，然后对伤害来源造成1点伤害。',
					sgk_hengshi_info:'弃牌阶段开始时，你可以摸等同于手牌数的牌。',
					sgk_zhijiao_info:'限定技，回合结束阶段开始时，你可以令一名其他角色获得本回合你因弃置而进入弃牌堆的牌。',
					sgk_jiwux_info:'出牌阶段开始时，你可以展示一张【杀】，令其获得以下效果之一（进入牌堆后失效）：1、此【杀】不计入次数限制；2、此【杀】无距离限制，且可以额外指定一个目标；3、此【杀】的伤害值+1。',
					sgk_daoshi_info:'一名角色的回合结束阶段开始时，若其装备区有牌，其可以摸一张牌，然后将其装备区的一张牌交给你。',
					sgk_lirang_info:'一名角色的回合开始阶段结束时，其可以将一张与所有“礼”花色均不同的手牌置于你的武将牌上，成为“礼”，然后摸一张牌。你可以将两张“礼”当【桃】使用。',
					sgk_xianshi_info:'每当你受到一次伤害时，你可以令伤害来源选择一项：展示所有手牌并弃置其中一张；或令此伤害-1.',
					sgk_chengxiang_info:'每当你受到伤害后，你可以亮出牌顶堆的四张牌，然后获得其中的至少一张点数和不大于13的牌，将其余的牌置入弃牌堆。',
					sgk_renxin_info:'每当一名其他角色处于濒死状态时，你可以翻面并将所有手牌交给该角色，令其回复1点体力。',
					sgk_midao_info:'出牌阶段限一次，你可以令手牌数大于你的其他角色依次交给你一张牌，然后若你的手牌数为全场最多，你失去1点体力。',
					sgk_yishe_info:'出牌阶段限一次，你可以与一名手牌数不大于你的其他角色交换手牌。',
					sgk_pudu_info:'限定技，出牌阶段，你可以获得所有其他角色的手牌，然后依次交给其他角色一张牌，直到你的手牌数不为全场最多。',
					sgk_zongqing_info:'摸牌阶段开始时，你可以进行一次判定，若如此做，此阶段摸牌后你须展示之，然后弃置其中与该判定牌颜色不同的牌。若以此法弃置的牌为黑色，视为你使用一张【酒】；若以此法弃置的牌为红色，视为你使用一张【桃】。',
					sgk_bugua_info:'每当一名角色将要进行判定时，你可以展示牌堆顶牌，然后可以选择一项：将一张手牌置于牌堆顶，或令其将一张手牌置于牌堆顶。当一名角色的判定牌为红色且生效后，你可以令其摸一张牌；当一名角色的判定牌为黑色且生效后，你可以令其弃置一张牌。',
					sgk_zhaoxin_info:'当你受到伤害后，你可以展示所有手牌，然后摸X张牌（X为缺少的花色数）。',
					sgk_zhihe_info:'出牌阶段限一次，你可以展示所有手牌，并将其中每种花色的牌弃置至一张，然后将手牌数翻倍。',
					sgk_caijie_info:'其他角色的回合开始阶段开始时，若其手牌数不小于你，你可以与其拼点，若你赢，你摸两张牌；若你没赢，视为其对你使用一张【杀】。',
					sgk_jilei_info:'当你受到伤害后，你可以令伤害来源展示所有手牌并弃置其中类别相同且最多（或之一）的所有牌。',
					sgk_yanliang_info:'一名角色的回合开始阶段开始时，你可以弃置一张红色牌，令其本回合的摸牌阶段于出牌阶段后进行；或弃置一张黑色牌，令其本回合的摸牌阶段于弃牌阶段后进行。',
					sgk_duzhi_info:'每当你回复1点体力或使用红色【杀】造成一次伤害后，你可以令一名其他角色失去1点体力，然后该角色可以对你使用一张【杀】',
					sgk_lieyi_info:'锁定技，你的【桃】均视为【杀】；你的【闪】均视为【酒】。',
					sgk_baoli_info:'出牌阶段限一次，你可以对一名装备区没有牌或判定区有牌的其他角色造成1点伤害。',
					sgk_huanbing_info:'锁定技，当你成为【杀】的目标时，终止此【杀】的结算，改为将之置于你的武将牌上。回合开始阶段开始时，你须为你武将牌上的每一张【杀】进行一次判定：若结果为红色，你摸一张牌；若结果为黑色，你须失去一点体力。然后将【杀】收入手牌。',
					sgk_hongyuan_info:'出牌阶段限一次，你可以弃置至多X张手牌，然后选择一名角色获得场上的X张牌，X为你已损失的体力值。',
					sgk_huaqiang_info:'出牌阶段限一次，你可以弃置X种不同花色的手牌，然后对一名其他角色造成1点伤害（X为你的体力值且至多为4）。',
					sgk_chaohuang_info:'出牌阶段限一次，你可以失去1点体力，然后视为对你攻击范围内的任意名角色依次使用一张【杀】（不计入出牌阶段的使用限制）。',
					sgk_huilian_info:'出牌阶段限一次，你可以令一名其他角色进行一次判定并获得生效后的判定牌。若结果为红桃，该角色回复1点体力。',
					sgk_wenliang_info:'一名角色的红色判定牌生效后，你可以摸一张牌。',
					// sgk_qianhuan_info:'锁定技，你的每个回合开始时，随机展示三张未上场且你拥有的武将，你获得其中的两个技能（限定技、觉醒技除外）直到你的下个回合开始。若该局游戏为双将模式，则移除你的另一名武将，将“两个”改为“四个”。',
					sgk_jinglun_info:'当你使用非延时类锦囊牌时，若牌堆有【无懈可击】，你可以随机获得一张；若没有，你可以将一张【无懈可击】从弃牌堆随机置入牌堆，然后摸一张牌。',
					sgk_ruzong_info:'你可以将【无懈可击】当任意基本牌使用。',
					sgk_leiji_info:'当其他角色使用【闪】时，你可以将牌堆或弃牌堆里的一张【闪电】置入一名角色的判定区。',
					sgk_shanxi_info:'锁定技，你不能成为【闪电】的目标，【闪电】的判定牌生效后，你获得之。',
					sgk_guhuo_info:'其他角色的回合开始时，你可以与其拼点：若你赢，视为你使用一张任意非延时类锦囊牌；若你没赢，该角色对你造成1点伤害。',
					sgk_fulu_info:'其他角色的回合结束时，你可以令其摸一张牌，然后若此回合内该角色对你造成过伤害，你令其获得”缠怨“（锁定技，当你死亡时，你令于吉回复1点体力；当于吉受到伤害时，你失去1点体力并失去”缠怨“）。',
					sgk_chanyuan_info:'锁定技，当你死亡时，你令于吉回复1点体力；当于吉受到伤害时，你失去1点体力并失去”缠怨“',
					sgk_gongshen_info:'出牌阶段，你可以弃置三张牌，然后摸一张牌，若此时你的手牌数为最少（或之一），你回复1点体力。',
					sgk_jianyue_info:'一名角色的回合结束阶段开始时，若该角色的手牌数为最少（或之一），你可以令其从弃牌堆随机获得牌直到其手牌数不为最少（或之一）。',
					// sgk_zhengyi_info:'你的回合内，你可以弃置一张牌令你的手牌数等于体力值，然后视为使用一张基本牌。你的回合外，你可以摸一张牌令你的手牌数等于体力值，然后视为使用一张基本牌。',
				}
			},'SK武将');
		}
		// ---------------------------------------魂烈包------------------------------------------//
		if(config.sgk_soul){
			game.addCharacterPack({
				character:{
					sgksoul_ganning:['male','wu',4,['sgk_lvezhen','sgk_youlong'],['die_audio']],
					sgksoul_simahui:['male','qun',3,['sgk_zhitian','sgk_yinshi'],['die_audio']],
					sgksoul_zhangfei:['male','shu',4,['sgk_shayi','sgk_zhenhun'],['die_audio']],
// 					sgksoul_sunquan:['male','wu',4,['sgk_huju'],['die_audio']],
					sgksoul_jiaxu:['male','qun',3,['sgk_yanmie','sgk_shunshi'],['die_audio']],
					sgksoul_liubei:['male','shu',4,['sgk_junwang','sgk_jizhao'],['die_audio']],
					sgksoul_zhugeliang:['male','shu',3,['sgk_qixing','sgk_kuangfeng','sgk_dawu'],['die_audio']],
					sgksoul_simayi:['male','wei',3,['sgk_jilve','sgk_tongtian'],['die_audio']],
					sgksoul_luxun:['male','wu',3,['sgk_jieyan','sgk_fenying'],['die_audio']],
					sgksoul_lvbu:['male','qun',5,['sgk_kuangbao','sgk_wumou','sgk_wuqian','sgk_shenfen']],
					sgksoul_guanyu:['male','shu',5,['sgk_wushen','sgk_suohun'],['die_audio']],
					sgksoul_zhaoyun:['male','shu',2,['sgk_juejing','sgk_longhun'],['die_audio']],
					sgksoul_zhangliao:['male','wei',5,['sgk_nizhan','sgk_cuifeng','sgk_weizhen']],
					sgksoul_huangyueying:['female','shu',3,['sgk_zhiming','sgk_suyin'],['die_audio']],
					sgksoul_zhangjiao:['male','qun',3,['sgk_dianjie','sgk_shendao','sgk_leihun'],['die_audio']],
					sgksoul_lvmeng:['male','wu',3,['sgk_shelie','sgk_gongxin'],['die_audio']],
// 					sgksoul_guojia:['male','wei',3,['sgk_tianqi','sgk_tianji'],['die_audio']],
					sgksoul_diaochan:['female','qun',3,['sgk_tianzi','sgk_meixin'],['die_audio']],
					sgksoul_sunshangxiang:['female','wu',3,['sgk_xianzhu','sgk_liangyuan'],['die_audio']],
					sgksoul_xiahoudun:['male','wei',5,['sgk_danjing','sgk_zhonghun'],['die_audio']],
					sgksoul_dianwei:['male','wei',6,['sgk_zhiji'],['die_audio']],
					sgksoul_huatuo:['male','qun',3,['sgk_jishi','sgk_xuanxin'],['die_audio']],
// 					sgksoul_zhouyu:['male','wu',4,['sgk_qinyin','sgk_yeyan'],['die_audio']],
				},
 				skill:{
					sgk_huju:{
						audio:1,		
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return event.player!=player;
						},
						forced:true,
						content:function(){
							player.draw();
						},
						group:['sgk_huju2'],
					},
					sgk_huju2:{
						audio:1,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.isMostHandcard();
						},
						forced:true,
						content:function(){
							"step 0"
							player.chooseControl('选项一','选项二',function(){
									if(player.hp==1&&!player.countCards('h',function(card){
										return get.tag(card,'recover');
									})) return '选项二';
									return '选项一';
								}).set('prompt','虎踞<br><br><div class="text">1:失去1点体力.</div><br><div class="text">2:减1点体力上限,失去“虎踞”，获得“制衡”和“虎缚”.</div></br>');
							"step 1"
							if(result.control=='选项一'){
								player.loseHp();
							}
							else{
								player.loseMaxHp();
								player.removeSkill('sgk_huju');
								player.addSkill('zhiheng');
								player.addSkill('sgk_hufu');
								lib.skill.zhiheng.audioname=['sgksoul_sunquan'];
								
							}
						},
					},
					sgk_hufu:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filter:function(){
							return game.hasPlayer(function(current){
								return current!=player&&current.countCards('e');
							});
						},
						filterTarget:function(card,player,target){
							return player!=target&&target.countCards('e');
						},
						content:function(){
							target.chooseToDiscard(target.countCards('e'),true,'he');
						},
						ai:{
							expose:0.3,
							order:10,
							result:{
								target:function(player,target){
									return -target.num('e');
								}
							}
						}
					},
					sgk_yanmie:{
						audio:2,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('he',{suit:'spade'})>0;
						},
						check:function(card){
							return 6-get.value(card)
						},
						filterCard:function(card){
							return get.suit(card)=='spade';
						},
						position:'he',
						filterTarget:function(card,player,target){
							return player!=target&&target.countCards('h');
						},
						content:function(){
							"step 0"
							var num=target.countCards('h');
							target.discard(target.get('h'));
							target.draw(num);
							target.showHandcards();
							"step 1"
							var num=target.countCards('h',function(card){
								return get.type(card)!='basic';
							});
							target.discard(target.getCards('h',function(card){
								return get.type(card)!='basic';
							}));
							if(num) target.damage(num);				
						},
						ai:{
							order:5,
							expose:0.3,
							threaten:1.8,
							result:{
								target:function(player,target){
									return -target.countCards('h')-1;
								}
							}
						}
					},
					sgk_shunshi:{
						audio:2,		
						trigger:{target:['shaBegin','taoBegin']},
						filter:function(event,player){
							return event.player!=player;
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('sgk_shunshi'),[1,Infinity],function(card,player,target){
								return player!=target&&trigger.player!=target;
							}).ai=function(target){
								if(trigger.card.name=='sha'){
									if(target.getEquip(2)&&target.getEquip(2)!='baiyin') return 0;
									return -get.attitude(player,target);
								}
								if(trigger.card.name=='tao'){
									if(!target.isDamaged()) return 0;
									return get.attitude(player,target);
								}
							}
							"step 1"
							if(result.bool){
								player.logSkill('sgk_shunshi',result.targets);
								game.asyncDraw(result.targets.concat(player));
								for(var i=0;i<result.targets.length;i++){
									trigger.targets.push(result.targets[i]);
									game.log(result.targets[i],'成为了额外目标');
								}
							}
						}
					},
					sgk_junwang:{
						audio:2,
						trigger:{global:'drawAfter'},
						forced:true,
						filter:function(event,player){
							return event.player!=player&&event.player.countCards('h')>=player.countCards('h');
						},
						content:function(){
							"step 0"
							trigger.player.chooseCard('交给'+get.translation(player)+'一张手牌',true).ai=function(card){
								if(get.attitude(trigger.player,player)>0){
									return get.value(card);
								}
								else{
									return -get.value(card);
								}
							}
							"step 1"
							if(result.bool){
								player.gain(result.cards[0]);
								trigger.player.$give(1,player);
							}
						}
					},
					sgk_jizhao:{
						audio:2,
						enable:'phaseUse',
						filterCard:true,
						selectCard:[1,Infinity],
						filter:function(event,player){
							return player.countCards('h')&&game.hasPlayer(function(current){
								return !current.storage.sgk_jizhao&&player!=current;
							});
						},
						discard:false,
						prepare:function(cards,player,targets){
							player.$give(cards.length,targets[0]);
						},
						filterTarget:function(card,player,target){
							return !target.storage.jizhao&&player!=target;
						},
						content:function(){
							target.gain(cards);
							target.addTempSkill('sgk_jizhao_zhao',{player:'phaseAfter'});
							target.storage.jizhao=true;
							target.storage.jizhao2=player;
						},
						subSkill:{
							zhao:{
								audio:false,
								trigger:{player:'phaseEnd'},
								mark:true,
								marktext:'诏',
								forced:true,
								popup:false,
								content:function(){
									'step 0'
									player.storage.jizhao=false;
									if(!player.getStat('damage')){
										player.storage.jizhao2.logSkill('sgk_jizhao',player);
										player.damage(player.storage.jizhao2);
									}
									'step 1'
									delete player.storage.jizhao2;
								},
								intro:{
									content:'mark'
								}
							}
						}
					},
					sgk_qixing:{
						audio:2,
						unique:true,
						trigger:{global:'gameDrawAfter',player:'phaseBegin'},
						forced:true,
						check:function(event,player){
							return player.hp<=1;
						},
						marktext:'星',
						filter:function(event,player){
							return !player.storage.sgk_qixing;
						},
						content:function(){
							"step 0"
							player.gain(get.cards(7))._triggered=null;
							"step 1"
							if(player==game.me){
								game.addVideo('delay',null);
							}
							player.chooseCard('选择七张牌作为星',7,true).ai=function(card){
								return get.value(card);
							};
							"step 2"
							player.lose(result.cards,ui.special)._triggered=null;
							player.storage.sgk_qixing=result.cards;
							player.syncStorage('sgk_qixing');
						},
						mark:true,
						intro:{
							mark:function(dialog,content,player){
								if(content&&content.length){
									if(player==game.me||player.isUnderControl()){
										dialog.add(content);
									}
									else{
										return '共有'+get.cnNumber(content.length)+'张星';
									}
								}
							},
							content:function(content,player){
								if(content&&content.length){
									if(player==game.me||player.isUnderControl()){
										return get.translation(content);
									}
									return '共有'+get.cnNumber(content.length)+'张星';
								}
							}
						},
						group:['sgk_qixing2'],
					},
					sgk_qixing2:{
						trigger:{player:'phaseDrawAfter'},
						direct:true,
						filter:function(event,player){
							return player.storage.sgk_qixing&&player.storage.sgk_qixing.length;
						},
						content:function(){
							"step 0"
							player.chooseCard(get.prompt('sgk_qixing'),[1,player.countCards('h')]).ai=function(card){
								return 1;
							};
							"step 1"
							if(result.bool){
								player.logSkill('sgk_qixing');
								player.lose(result.cards,ui.special)._triggered=null;
								player.storage.sgk_qixing=player.storage.sgk_qixing.concat(result.cards);
								player.syncStorage('sgk_qixing');
								event.num=result.cards.length;
							}
							else{
								event.finish();
							}
							"step 2"
							player.chooseCardButton(player.storage.sgk_qixing,'选择'+event.num+'张牌作为手牌',event.num,true).ai=function(button){
								if(player.skipList.contains('phaseUse')&&button.link!='du'){
									return -get.value(button.link);
								}
								return get.value(button.link);
							}
							if(player==game.me&&_status.auto){
								game.delay(0.5);
							}
							"step 3"
							player.gain(result.links)._triggered=null;
							for(var i=0;i<result.links.length;i++){
								player.storage.sgk_qixing.remove(result.links[i]);
							}
							player.syncStorage('sgk_qixing');
							if(player==game.me&&_status.auto){
								game.delay(0.5);
							}
						}
					},
					sgk_kuangfeng:{
						unique:true,
						audio:2,
						trigger:{player:'phaseBegin'},
						direct:true,
						filter:function(event,player){
							return player.storage.sgk_qixing&&player.storage.sgk_qixing.length;
						},
						content:function(){
							"step 0"
							var clearKuangfeng=game.findPlayer(function(current){
								return current.hasSkill('sgk_kuangfeng2');
							});
							if(clearKuangfeng){
								clearKuangfeng.removeSkill('sgk_kuangfeng2');
								clearKuangfeng.popup('sgk_kuangfeng2');
							}
							player.chooseTarget('选择一名角色获得狂风标记').ai=function(target){
								if(player.storage.sgk_qixing.length>3) return get.attitude(player,target)<0&&3-target.hp;
								return -1;
							}
							"step 1"
							if(result.bool){
								result.targets[0].addSkill('sgk_kuangfeng2');
								result.targets[0].popup('sgk_kuangfeng');
								player.logSkill('sgk_kuangfeng',result.targets,'fire');
								player.chooseCardButton('弃置一枚星',player.storage.sgk_qixing,true);
							}
							else{
								event.finish();
							}
							"step 2"
							player.storage.sgk_qixing.remove(result.links[0]);
							player.syncStorage('sgk_qixing');
							if(player.storage.sgk_qixing.length==0){
								player.unmarkSkill('sgk_qixing');
							}
							player.discard(result.links);
						},
					},
					sgk_kuangfeng2:{
						unique:true,
						trigger:{player:'damageBegin'},
						mark:true,
						marktext:'风',
						intro:{
							content:'已获得[风]标记'
						},
						forced:true,
						content:function(){
							var sgk_zhugeliang=game.findPlayer(function(current){
								return current.hasSkill('sgk_kuangfeng');
							})
							if(sgk_zhugeliang){
								if(trigger.nature){
									if(trigger.nature=='fire'){
										sgk_zhugeliang.line(player,'fire');
										trigger.num++;
									}
									if(trigger.nature=='thunder'){
										sgk_zhugeliang.line(player,'thunder');
										player.chooseToDiscard(2,true);
									}
								}
								else{
									if(sgk_zhugeliang&&sgk_zhugeliang.storage.sgk_qixing){
										sgk_zhugeliang.line(player,'water');
										var card=get.cards();
										sgk_zhugeliang.$draw(1);
										sgk_zhugeliang.lose(card,ui.special)._triggered=null;
										sgk_zhugeliang.storage.sgk_qixing=sgk_zhugeliang.storage.sgk_qixing.concat(card);
										sgk_zhugeliang.markSkill('sgk_qixing');
										sgk_zhugeliang.syncStorage('sgk_qixing');
										game.log(sgk_zhugeliang,'将牌堆顶得一张牌置入[星]');
									}
								}
							}
						},
						ai:{
							threaten:3,
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'fireDamage')) return 1.5;
									if(get.tag(card,'thunderDamage')) return 1.5;
								}
							}
						}
					},
					sgk_dawu:{
						unique:true,
						trigger:{player:'phaseEnd'},
						priority:1,
						direct:true,
						filter:function(event,player){
							return player.storage.sgk_qixing&&player.storage.sgk_qixing.length;
						},
						audio:2,
						content:function(){
							"step 0"
							player.chooseTarget('选择角色获得大雾标记',
							[1,Math.min(game.players.length,player.storage.sgk_qixing.length)]).ai=function(target){
								if(target.isMin()) return 0;
								if(target.hasSkill('biantian2')) return 0;
								var att=get.attitude(player,target);
								if(att>=4){
									if(target.hp==1&&target.maxHp>2) return att;
									if(target.hp==2&&target.maxHp>3&&target.num('he')==0) return att*0.7;
									return 0;
								}
								return -1;
							}
							"step 1"
							if(result.bool){
								var length=result.targets.length;
								for(var i=0;i<length;i++){
									result.targets[i].addSkill('sgk_dawu2');
									result.targets[i].popup('sgk_dawu');
								}
								player.logSkill('sgk_dawu',result.targets,'thunder');
								player.chooseCardButton('弃置'+get.cnNumber(length)+'枚星',length,player.storage.sgk_qixing,true);
							}
							else{
								event.finish();
							}
							"step 2"
							for(var i=0;i<result.links.length;i++){
								player.storage.sgk_qixing.remove(result.links[i]);
							}
							if(player.storage.sgk_qixing.length==0){
								player.unmarkSkill('sgk_qixing');
							}
							player.syncStorage('sgk_qixing');
							player.discard(result.links);
						},
						group:['sgk_dawu_remove'],
						subSkill:{
							remove:{
								trigger:{player:['phaseBegin','dieBegin']},
								forced:true,
								popup:false,
								silent:true,
								content:function(){
									for(var i=0;i<game.players.length;i++){
										if(game.players[i].hasSkill('sgk_dawu2')){
											game.players[i].removeSkill('sgk_dawu2');
											game.players[i].popup('sgk_dawu');
										}
										if(game.players[i].hasSkill('sgk_kuangfeng2')){
											game.players[i].removeSkill('sgk_kuangfeng2');
											game.players[i].popup('sgk_kuangfeng2');
										}
									}
								}
							}
						}
					},
					sgk_dawu2:{
						trigger:{player:'damageBefore'},
						filter:function(event){
							if(event.nature!='thunder') return true;
							return false;
						},
						marktext:'雾',
						mark:true,
						forced:true,
						content:function(){
							trigger.untrigger();
							trigger.finish();
						},
						ai:{
							nofire:true,
							nodamage:true,
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'damage')&&!get.tag(card,'thunderDamage')) return [0,0];
								}
							},
						},
						intro:{
							content:'已获得大雾标记'
						}
					},
					sgk_jilve:{
						audio:3,
						enable:'phaseUse',
						filter:function(event,player){
							return !player.hasSkill('sgk_jilve2');
						},
						content:function(){
							"step 0"
							player.draw();
							player.chooseToUse().filterCard=function(card,player){
								return (lib.filter.cardEnabled(card,player,event.parent.parent)&&lib.filter.cardUsable(card,player,event.parent.parent));
							}
							"step 1"
							if(!result.bool){
								player.chooseToDiscard('he',true);
								player.addTempSkill('sgk_jilve2','phaseAfter');
							}
						},
						ai:{
							threaten:4,
							order:15,
							result:{
								player:1
							},
							effect:{
								player:function(card,player){
									if(get.type(card)!='basic') return [1,3];
								}
							},
						}
					},
					sgk_jilve2:{},
					sgk_tongtian:{
						audio:1,
						enable:'phaseUse',
						unique:true,
						skillAnimation:true,
						position:'he',
						mark:true,
						filter:function(event,player){
							return !player.storage.sgk_tongtian;
						},
						complexCard:true,
						filterCard:function(card){
							var suit=get.suit(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(ui.selected.cards[i])==suit) return false;
							}
							return true;
						},
						selectCard:[1,4],
						check:function(card){
							return 10-get.value(card)
						},
						init:function(player){
							player.storage.sgk_tongtian=false;
						},
						content:function(){
							"step 0"
							player.awakenSkill('sgk_tongtian');
							player.storage.sgk_tongtian=true;
							for(var i=0;i<cards.length;i++){
								if(get.suit(cards[i])=='heart'){
									player.addSkill('guanxing');
									lib.skill.guanxing.audioname=['sgksoul_simayi'];
								}
								if(get.suit(cards[i])=='diamond'){
									player.addSkill('zhiheng');
									lib.skill.zhiheng.audioname=['sgksoul_simayi'];
								}
								if(get.suit(cards[i])=='club'){
									player.addSkill('wansha');
									lib.skill.wansha.audioname=['sgksoul_simayi'];
								}
								if(get.suit(cards[i])=='spade'){
									player.addSkill('fankui');
									lib.skill.fankui.audioname=['sgksoul_simayi'];
								}
							}
						},
						ai:{
							order:6,
							result:{
								player:function(player){
									var cards=player.get('he');
									var suits=[];
									for(var i=0;i<cards.length;i++){
										if(!suits.contains(get.suit(cards[i]))){
											suits.push(get.suit(cards[i]));
										}
									}
									if(suits.length<3) return -1;
									return suits.length;
								}
							}
						},
						intro:{
							content:'limited'
						}
					},
					sgk_jieyan:{
						audio:1,
						trigger:{global:'useCardToBefore'},
						direct:true,
						filter:function(event,player){
							return player.countCards('h')>0&&(get.type(event.card)=='trick'||event.card.name=='sha')&&get.color(event.card)=='red'&&event.targets.length==1;
						},
						content:function(){
							"step 0"
							player.chooseToDiscard('是否对'+get.translation(trigger.target)+'发动【劫焰】？','h').ai=function(card){
								if(get.attitude(player,trigger.target)<=0&&get.damageEffect(target,player,player,'fire')>0) return 4-get.value(card);
								return -1;				
							}
							"step 1"
							if(result.bool){
								player.logSkill('sgk_jieyan',trigger.target);
								trigger.untrigger();
								trigger.finish();
								trigger.target.damage('fire');
							}
						},
						ai:{
							expose:0.2,
						}
					},
					sgk_fenying:{
						audio:1,
						trigger:{global:"damageAfter"},
						direct:true,
						filter:function(event,player){
							return event.nature=='fire'&&player.countCards('h')<=player.maxHp&&player.countCards('he',{color:'red'})>0;
						},
						content:function (){
							"step 0"
							player.chooseCardTarget({
								filterCard:function(card){
									return get.color(card)=='red';
								},
								filterTarget:function(card,player,target){
									return get.distance(trigger.player,target)<=1;
								},
								ai1:function(card){
									return 6-get.value(card);
								},
								ai2:function(target){
									return get.damageEffect(target,player,player,'fire');
								},
								position:'he',
								prompt:'焚营：弃置一张红色牌对目标或与其相距最近的其他目标造成等量火焰伤害'
							});
							"step 1"
							if(result.bool){
								player.logSkill('sgk_fenying',result.targets[0],'fire');
								player.discard(result.cards[0]);
								result.targets[0].damage('fire',trigger.num);
							}
						}
					},
					sgk_kuangbao:{
						trigger:{source:'damageEnd',player:'damageEnd'},
						forced:true,
						mark:true,
						marktext:'暴',
						audio:2,
						filter:function(event){
							return event.num>0;
						},
						init:function(player){
							player.storage.sgk_kuangbao=2;
							player.markSkill('sgk_kuangbao');
							player.syncStorage('sgk_kuangbao');
						},
						content:function(){
							player.storage.sgk_kuangbao+=trigger.num;
							player.markSkill('sgk_kuangbao');
							player.syncStorage('sgk_kuangbao');
						},
						intro:{
							content:'mark'
						}
					},
					sgk_wumou:{
						audio:2,
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event){
							return (get.type(event.card,'trick')=='trick'&&event.cards[0]&&event.cards[0]==event.card);
						},
						content:function(){
							'step 0'
							if(player.storage.sgk_kuangbao>0){
								player.chooseControl('选项一','选项二').set('prompt','无谋<br><br><div class="text">1:弃置一枚[暴]标记</div><br><div class="text">2:受到一点伤害</div></br>').ai=function(){
									if(player.storage.sgk_kuangbao>6) return '选项一';
									if(player.hp+player.countCards('h','tao')>3) return '选项二';
									return '选项一';
								};
							}
							else{
								player.damage('nosource');
								event.finish();
							}
							'step 1'
							if(result.control=='选项一'){
								player.storage.sgk_kuangbao--;
								player.syncStorage('sgk_kuangbao');
							}
							else{
								player.damage('nosource');
							}
						},
					},
					sgk_wuqian:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.storage.sgk_kuangbao>1;
						},
						content:function(){
							'step 0'
							player.storage.sgk_kuangbao-=2;
							player.syncStorage('sgk_kuangbao');
							'step 1'
							player.addTempSkill('wushuang','phaseAfter');
							player.addTempSkill('sgk_wuqian_buff','phaseAfter');
						},
						subSkill:{
							buff:{
								trigger:{source:'damageEnd'},
								forced:true,
								popup:false,
								audio:false,
								filter:function(event){
									return event.num>0;
								},
								content:function(){
									player.storage.sgk_kuangbao++;
									player.syncStorage('sgk_kuangbao');
								}
							}
						},
						ai:{
							order:10,
							result:{
								player:function(player){
									if(player.countCards('h','sha')>0&&!player.hasSkill('wushuang')){
										return 2;
									}
									var ph=player.getCards('h');
									var num=0;
									for(var i=0;i<ph.length;i++){
										if(get.tag(ph[i],'damage')) num++;
									}
									if(num>1) return num;
									return 0;
								}
							}
						}
					},
					sgk_shenfen:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.storage.sgk_kuangbao>=6;
						},
						skillAnimation:true,
						animationColor:'metal',
						mark:true,
						content:function(){
							"step 0"
							player.storage.sgk_kuangbao-=6;
							player.syncStorage('sgk_kuangbao');
							event.targets=game.filterPlayer(function(current){
								return player!=current;
							}).sortBySeat();
							event.targets2=event.targets.slice(0);
							"step 1"
							if(event.targets.length){
								event.targets.shift().damage();
								event.redo();
							}
							"step 2"
							if(event.targets2.length){
								var cur=event.targets2.shift();
								if(cur&&cur.countCards('he')){
									cur.discard(cur.get('he'));
								}
								event.redo();
							}
							"step 3"
							player.turnOver();
						},
						ai:{
							order:9,
							result:{
								player:function(player){
									var num=0;
									for(var i=0;i<game.players.length;i++){
										if(game.players[i]!=player){
											if(game.players[i].ai.shown==0) return 0;
											num+=get.damageEffect(game.players[i],player,player)>0?1:-1;
										}
									}
									return num;
								}
							}
						}
					},
					sgk_wushen:{
						mod:{
							cardEnabled:function(card,player){
								if(card.name=='sha'||card.name=='tao') return false;
							},
							cardUsable:function(card,player){
								if(card.name=='sha'||card.name=='tao') return false;
							},
							cardRespondable:function(card,player){
								if(card.name=='sha'||card.name=='tao') return false;
							},
							cardSavable:function(card,player){
								if(card.name=='sha'||card.name=='tao') return false;
							},
						},
						audio:1,
						enable:'chooseToUse',
						filter:function(event,player){
							return player.countCards('h',{name:['sha','tao']})>0;
						},
						filterCard:{name:['sha','tao']},
						viewAs:{name:'juedou'},
						check:function(){return 1},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondSha')&&current<0) return 0.6
								}
							},
							order:4,
							useful:-1,
							value:-1
						}
					},
					sgk_suohun:{
						audio:1,
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							return event.source&&event.source!=player;
						},
						forced:true,
						init:function(player){
							for(var i=0;i<game.players.length;i++){
								game.players[i].storage.sgk_suohun_mark=0;
							}
						},
						content:function(){
							trigger.source.storage.sgk_suohun_mark+=trigger.num;
							trigger.source.syncStorage('sgk_suohun_mark');
							trigger.source.markSkill('sgk_suohun_mark');
						},
						global:['sgk_suohun_mark'],
						subSkill:{
							mark:{
								marktext:'魂',
								intro:{
									content:'mark'
								}
							}
						},
						group:['sgk_suohun2'],
					},
					sgk_suohun2:{
						skillAnimation:true,
						audio:1,
						trigger:{player:'dying'},
						priority:10,
						forced:true,
						filter:function(event,player){
							return player.hp<=0;
						},
						content:function(){
							"step 0"
							if(player.maxHp>1){
								player.maxHp=Math.ceil(player.maxHp/2);
								player.recover(player.maxHp-player.hp);
								player.update();
							}
							else{
								player.loseMaxHp();
								player.update();
							}
							"step 1"
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].storage.sgk_suohun_mark){
									player.line(game.players[i],'fire');
									game.delay(1.5);
									game.players[i].damage(game.players[i].storage.sgk_suohun_mark);
									game.players[i].storage.sgk_suohun_mark=0;
									game.players[i].unmarkSkill('sgk_suohun_mark');
								}
							}
						},
						ai:{
							threaten:0.9,
							effect:{
								target:function(card,player,target){
									if(target.maxHp==1) return;
									var num=0;
									for(var i=0;i<game.players.length;i++){
										if(game.players[i].storage.sgk_suohun_mark&&get.attitude(target,game.players[i])<=-2) num+=game.players[i].storage.sgk_suohun_mark;
									}
									if(get.tag(card,'damage')){
										if(target.hp==1) return [0,2*num];
											return [1,0.5];
									}
								}
							}
						}
					},
					sgk_juejing:{
						audio:2,
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							return player.hp>=1;
						},
						forced:true,
						content:function(){
							if(player.hp==1){
								player.draw();
							}
							else{
								player.loseHp();
								player.draw(2);
							}
						}
					},
					sgk_longhun:{
						group:['longhun1','longhun2','longhun3','longhun4'],
						ai:{
							skillTagFilter:function(player,tag){
								switch(tag){
									case 'respondSha':{
										if(player.num('he',{suit:'diamond'})<Math.max(1,player.hp)) return false;
										break;
									}
									case 'respondShan':{
										if(player.num('he',{suit:'club'})<Math.max(1,player.hp)) return false;
										break;
									}
									case 'save':{
										if(player.num('he',{suit:'heart'})<Math.max(1,player.hp)) return false;
										break;
									}
								}
							},
							save:true,
							respondSha:true,
							respondShan:true,
							threaten:function(player,target){
								if(target.hp==1) return 2;
								return 0.5;
							},
						}
					},
					sgk_nizhan:{
						audio:1,					
						trigger:{global:'damageEnd'},
						filter:function(event){
							return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();				
						},
						init:function(player){
							for(var i=0;i<game.players.length;i++){
								game.players[i].storage.sgk_nizhan_mark=0;
							}
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('sgk_nizhan'),function(card,player,target){
								return (trigger.source==target||trigger.player==target)&&player!=target;
							}).ai=function(target){
								return -get.attitude(player,target);
							}
							"step 1"
							if(result.bool){
								player.logSkill('sgk_nizhan',result.targets[0]);
								result.targets[0].storage.sgk_nizhan_mark+=1;
								result.targets[0].markSkill('sgk_nizhan_mark');
								result.targets[0].syncStorage('sgk_nizhan_mark');
							}
						},
						subSkill:{
							mark:{
								marktext:'袭',
								intro:{
									content:'mark'
								}
							}
						}
					},
					sgk_cuifeng:{
						audio:1,
						trigger:{player:'phaseEnd'},
						forced:true,
						filter:function(player){
							var num=0;
							for(var i=0;i<game.players.length;i++){
								num+=game.players[i].storage.sgk_nizhan_mark;
							}
							if(num>=4) return true;
							return false;
						},
						content:function(){
							'step 0'
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].storage.sgk_nizhan_mark){
									player.line(game.players[i],'fire');
									if(game.players[i].countCards('h')>=game.players[i].storage.sgk_nizhan_mark){
										player.gainPlayerCard(game.players[i].storage.sgk_nizhan_mark,game.players[i],'h',true);
									}
									else{
										player.gain(game.players[i].getCards('h'));
										game.players[i].$give(game.players[i].countCards('h'),player);
										game.players[i].damage();
									}
									game.delay(1);
								}
							}
							'step 1'
							for(var i=0;i<game.players.length;i++){
								game.players[i].unmarkSkill('sgk_nizhan_mark');
								game.players[i].storage.sgk_nizhan_mark=0;
							}
						}
					},
					sgk_weizhen:{
						audio:1,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							var num=0;
							for(var i=0;i<game.players.length;i++){
								num+=game.players[i].storage.sgk_nizhan_mark;
							}
							if(num>0) return true;
							return false;
						},
						prompt:function(event,player){
							var str='';
							var num=0;
							for(var i=0;i<game.players.length;i++){
								num+=game.players[i].storage.sgk_nizhan_mark;
							}
							str+='移除场上全部的【袭】标记，然后摸'+num+'张牌。';
							return str;
						},
						check:function(event,player){
							if(player.countCards('h')==0||player.hp==1) return 1;
							return 0;
						},
						content:function(){
							var num=0;
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].storage.sgk_nizhan_mark){
									player.line(game.players[i],'water');
								}
								num+=game.players[i].storage.sgk_nizhan_mark;
								game.players[i].unmarkSkill('sgk_nizhan_mark');	
								game.players[i].storage.sgk_nizhan_mark=0;
							}
							game.delay();	
							player.draw(num);
						}
					},
					sgk_zhiming:{
						audio:1,		
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return event.player!=player&&event.player.countCards('h')>0&&player.countCards('h')>0;
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseToDiscard('h','知命:你可以弃置一张手牌，然后弃置其一张手牌，若两张牌颜色相同，你令其跳过此回合的摸牌阶段或出牌阶段').ai=function(card){
								if(get.attitude(player,trigger.player)<-3)
									return 10-get.value(card);
								return 0;
							}
							'step 1'
							if(result.bool){
								player.logSkill('sgk_zhiming',trigger.player);
								event.color=get.color(result.cards[0]);
								event.card=trigger.player.getCards('h').randomGet();
								trigger.player.discard(event.card);	
							}
							else{
								event.finish();
							}
							'step 2'
							if(event.color==get.color(event.card)){
								player.chooseControl('跳过摸牌','跳过出牌').ai=function(){
									if(trigger.player.countCards('h')>trigger.player.hp) return '跳过出牌';
									return '跳过摸牌';
								}
							}
							else{
								event.finish();
							}
							"step 3"
							if(result.control=='跳过摸牌'){
								trigger.player.skip('phaseDraw');
								game.log(trigger.player,'跳过了摸牌阶段');
							}
							if(result.control=='跳过出牌'){
								trigger.player.skip('phaseUse');
								game.log(trigger.player,'跳过了出牌阶段');
							}
						},
						ai:{
							expose:0.4
						}
					},
					sgk_suyin:{
						audio:1,
						trigger:{player:'loseEnd'},
						direct:true,
						filter:function(event,player){
							if(player.countCards('h')) return false;
								for(var i=0;i<event.cards.length;i++){
									if(event.cards[i].original=='h'&&_status.currentPhase!=player) return true;
								}
							return false;
						},
						content:function(){
							"step 0"
							player.chooseTarget('【夙隐】：选择一名角色将其翻面',function(card,player,target){
								return player!=target;
							}).ai=function(target){
								if(target.isTurnedOver()&&get.attitude(player,target)>0) return 10;
								if(!target.isTurnedOver()&&get.attitude(player,target)<0) return target.countCards('h');
								return 0;
							}
							"step 1"
							if(result.bool){
								player.logSkill('sgk_suyin',result.targets);
								result.targets[0].turnOver();
							}
						},
						ai:{
							expose:0.3
						}
					},
					sgk_dianjie:{
						audio:2,
						trigger:{player:['phaseDrawBefore','phaseUseBefore']},
						prompt:function(event,player){
							if(event.name=='phaseDraw'){
								return '是否发动电界跳过摸牌阶段？';
							}
							return '是否发动电界跳过出牌阶段？';
						},
						check:function(event,player){
							if(event.name=='phaseDraw'){
								if(player.countCards('h')<=1||player.hp==1) return -1;
							}
							else{
								if(player.countCards('h',function(card){
									return get.value(card)>=8;
								})) return -1;
								if(player.countCards('h')-player.hp>=3) return -1;
							}
							return 1;
						},
						content:function(){
							"step 0"
							trigger.finish();
							trigger.untrigger();
							player.judge(function(card){
								return get.color(card)=='black'?1:-1;
							})
							"step 1"
							if(result.bool){
								player.chooseTarget('选择一个目标对其造成一点雷电伤害').ai=function(target){
									if(player.hp==1) return target==player?1:-1;
									return get.damageEffect(target,player,player,'thunder');
								}
							}
							else{
								player.chooseTarget('选择一至两个目标将其横置',[1,2],function(card,player,target){
									return !target.isLinked();
								}).ai=function(target){
									return -get.attitude(player,target);
								}
								event.goto(3);
							}
							'step 2'
							if(result.bool){
								player.line(result.targets[0],'thunder');
								result.targets[0].damage('thunder');
								event.finish();
							}
							else{
								event.finish();
							}
							'step 3'
							if(result.bool){
								player.line(result.targets,'thunder');
								for(var i=0;i<result.targets.length;i++){
									result.targets[i].link();
								}
							}
						}
					},
					sgk_shendao:{
						audio:1,
						trigger:{global:'judge'},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
							get.translation(trigger.player.judging[0])+'，是否发动【神道】？',function(card,player,target){
								if(target==player) return target.countCards('hej');
								return target.countCards('ej');
							}).ai=function(target){
								return player==target;
							}
							"step 1"
							if(result.bool){
								event.target=result.targets[0];
								if(result.targets[0]==player){
									player.chooseCard('请选择改判牌','hej').set('ai',function(card){
										var trigger=_status.event.getTrigger();
										var player=_status.event.player;
										var judging=_status.event.judging;
										var result=trigger.judge(card)-trigger.judge(judging);
										var attitude=get.attitude(player,trigger.player);
										if(attitude==0||result==0) return 0;
										if(attitude>0){
											return result-get.value(card)/2;
										}
										else{
											return -result-get.value(card)/2;
										}
									}).set('judging',trigger.player.judging[0]);
								}
								else{
									player.choosePlayerCard('请选择改判牌',result.targets[0],'ej').set('ai',function(button){
										var trigger=_status.event.getTrigger();
										var player=_status.event.player;
										var judging=_status.event.judging;
										var result=trigger.judge(button)-trigger.judge(judging);
										var attitude=get.attitude(player,trigger.player);
										if(attitude==0||result==0) return 0;
										if(attitude>0){
											return result-get.value(button)/2;
										}
										else{
											return -result-get.value(button)/2;
										}
									}).set('judging',trigger.player.judging[0]);
								}
							}
							"step 2"
							if(result.bool){
								event.cardx=result.cards[0]||result.links[0];
								player.respond(event.cardx,'highlight');
							}
							else{
								event.finish();
							}
							"step 3"
							if(result.bool){
								player.logSkill('sgk_shendao',event.target);
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
								trigger.player.judging[0]=event.cardx;
								if(!get.owner(event.cardx,'judge')){
									trigger.position.appendChild(event.cardx);
								}
								game.log(trigger.player,'的判定牌改为',event.cardx);
								game.delay(2);
							}
						},
						ai:{
							tag:{
								rejudge:1,
							}
						}
					},
					sgk_leihun:{
						audio:1,			
						trigger:{player:'damageBegin'},
						forced:true,
						filter:function(event){
							if(event.nature=='thunder') return true;
						},
						content:function(){
							trigger.untrigger();
							trigger.finish();
							player.recover(trigger.num);
						},
						ai:{
							nothunder:true,
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'thunderDamage')) return [0,2];
								}
							}
						}
					},
					sgk_shelie:{
						audio:1,
						trigger:{player:'phaseDrawBegin'},
						forced:true,
						content:function(){
							'step 0'
							trigger.untrigger();
							trigger.finish();
							event.cards=[];
							event.num=1;
							event.getResultString=function(str){
								switch(str){
									case '基本牌':return 'basic';
									case '锦囊牌':return 'trick';
									case '装备牌':return 'equip';
								}
								return str;
							};
							'step 1'
							player.chooseControl('基本牌','锦囊牌','装备牌',function(){
								if(Math.random()<0.4) return '锦囊牌';
								if(Math.random()<0.8&&Math.random()>=0.4) return '基本牌';
								return '装备牌'
							}).set('prompt','请选择想要获得的第'+get.cnNumber(event.num,true)+'张牌的类型');
							'step 2'
							event.control=event.getResultString(result.control);
							var card=get.cardPile(function(card){
								return get.type(card)==event.control;
							});
							if(card){
								ui.cardPile.removeChild(card);
								event.cards.push(card);
								if(event.cards.length<4){
									event.num++;
									event.goto(1);
								}
								else{
									player.gain(event.cards,'gain2','log');
								}
							}
						}
					},
					sgk_gongxin:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return target!=player&&target.countCards('h');
						},
						content:function(){
							'step 0'
							player.viewCards('攻心',target.getCards('h'));
							event.cards=target.getCards('h',function(card){
								return get.suit(card)=='heart';
							});
							if(event.cards.length){
								target.showCards(event.cards);
							}
							else{
								event.finish();
							}
							'step 1'
							if(event.cards.length==1){
								target.discard(event.cards);
								target.damage();
								event.finish();
							}
							else{
								player.chooseCardButton('选择一张获得之',event.cards).ai=function(button){
									return get.value(button.link);
								}
							}
							'step 2'
							if(result.bool){
								player.gain(result.links[0]);
								target.$give(result.links[0],player);
							}
							
						},
						ai:{
							threaten:1.5,
							result:{
								target:function(player,target){
									return -target.countCards('h');
								}
							},
							order:10,
							expose:0.4,
						}
					},
					sgk_tianqi:{
						usable:1,
						audio:1,
						enable:'phaseUse',
						chooseButton:{
							dialog:function(){
								var list=['sha','shan','tao','jiu'];
								for(var i=0;i<list.length;i++){
									list[i]=['basic','',list[i]];
								}
								var list2=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
								for(var i=0;i<list2.length;i++){
									list2[i]=['trick','',list2[i]];
								}
								var dialog=ui.create.dialog();
								dialog.add('基本牌');
								dialog.add([list,'vcard']);
								dialog.add('锦囊牌');
								dialog.add([list2,'vcard']);
								return dialog;
							},
							filter:function(button,player){
								return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
							},
							check:function(button,player){
								var player=_status.event.player;
								var recover=0,lose=1;
								for(var i=0;i<game.players.length;i++){
									if(!game.players[i].isOut()){
										if(game.players[i].hp<game.players[i].maxHp){
											if(get.attitude(player,game.players[i])>0){
												if(game.players[i].hp<2){
													lose--;
													recover+=0.5;
												}
												lose--;
												recover++;
											}
											else if(get.attitude(player,game.players[i])<0){
												if(game.players[i].hp<2){
													lose++;
													recover-=0.5;
												}
												lose++;
												recover--;
											}
										}
										else{
											if(get.attitude(player,game.players[i])>0){
												lose--;
											}
											else if(get.attitude(player,game.players[i])<0){
												lose++;
											}
										}
									}
								}
								if(lose>recover&&lose>0&&player.storage.sgk_tianji_top=='trick') return (button.link[2]=='wanjian')?1:-1;
								if(lose<recover&&recover>0&&player.storage.sgk_tianji_top=='trick') return (button.link[2]=='taoyuan')?1:-1;
								if(player.storage.sgk_tianji_top=='basic'&&player.isDamaged()) return (button.link[2]=='tao')?1:-1;
								if(player.storage.sgk_tianji_top=='basic'&&player.countCards('h','sha')) return (button.link[2]=='jiu')?1:-1;
								if(player.storage.sgk_tianji_top=='basic'&&!player.countCards('h','sha')) return (button.link[2]=='sha')?1:-1;
								if(player.storage.sgk_tianji_top=='trick')	return (button.link[2]=='wuzhong')?1:-1;
								if(game.players.length<4&&player.storage.sgk_tianji_top=='trick') return (button.link[2]=='shunshou')?1:-1;
								return (button.link[2]=='guohe')?1:-1;
							},
							backup:function(links,player){
								return {
									filterCard:function(){return false},
									selectCard:-1,
									popname:true,
									viewAs:{name:links[0][2]},
									onuse:function(result,player){
										player.logSkill('sgk_tianqi');
										game.log(player,'声明了'+get.translation(links[0][0])+'牌');
										var cards=get.cards();
										player.showCards(cards);
										result.cards=cards;
										if(get.type(cards[0],'trick')!=links[0][0]){
											player.loseHp();
										}
										delete player.storage.sgk_tianji_top;
									}
								}
							},
							prompt:function(links,player){
								return '亮出牌堆顶的一张牌，并将此牌当'+get.translation(links[0][2])+'使用。若亮出的牌不为'+get.translation(links[0][0])+'牌，你须先失去1点体力。(你的出牌阶段限一次。)';
							}
						},
						group:['sgk_tianqi2','sgk_tianqi3','sgk_tianqi4','sgk_tianqi5'],
						ai:{
							order:10,
							result:{
								player:function(player){
									if(player.storage.sgk_tianji_top!=undefined) return 1;
									return -1;
								},
							},
							threaten:4,
						}
					},
					sgk_tianqi2:{
						enable:'chooseToUse',
						audio:1,
						filter:function(event,player){
							if(event.type=='dying'){
								if(player==event.dying) return false;
							}
							return event.parent.name!='phaseUse';
						},
						filterCard:function(){return false},
						selectCard:-1,
						viewAs:{name:'tao'},
						check:function(card,event){
							var player=_status.event.player;
							if(player.storage.sgk_tianji_top=='basic') return 1;
							if(player.countCards('h','tao')) return 0;	
							return player.hp-1;	
						},
						onuse:function(result,player){
							var cards=get.cards();
							player.showCards(cards);
							result.cards=cards;
							if(get.type(cards[0],'trick')!='basic'){
								player.loseHp();
							}
							delete player.storage.sgk_tianji_top;
						},
						ai:{
							result:{
								player:function(player){
									if(player.storage.sgk_tianji_top!='basic') return -1;
									return -0.5;
								},
								target:function(player,target){
									return get.effect(target,{name:'tao'},player,player);
								},
							},
							skillTagFilter:function(player){
								return _status.dying!=player;
							},
							threaten:1.5,
							save:true
						}
					},
					sgk_tianqi3:{
						enable:['chooseToUse','chooseToRespond'],
						audio:1,
						filter:function(event,player){
							if(event.type=='dying'){
								if(player==event.dying) return false;
							}
							return event.parent.name!='phaseUse';
						},
						filterCard:function(){return false},
						selectCard:-1,
						check:function(card,event){
							var player=_status.event.player;
							if(player.storage.sgk_tianji_top=='basic') return 1;
							if(player.countCards('h','sha')) return 0;	
							return 1;	
						},
						viewAs:{name:'sha'},
						onuse:function(result,player){
							var cards=get.cards();
							player.showCards(cards);
							result.cards=cards;
							if(get.type(cards[0],'trick')!='basic'){
								player.loseHp();
							}
							delete player.storage.sgk_tianji_top;
						},
						onrespond:function(result,player){
							var cards=get.cards();
							player.showCards(cards);
							result.cards=cards;
							if(get.type(cards[0],'trick')!='basic'){
								player.loseHp();
							}
							delete player.storage.sgk_tianji_top;
						},
						ai:{
							skillTagFilter:function(player){
								return _status.dying!=player;
							},
							respondSha:true
						}
					},
					sgk_tianqi4:{
						enable:'chooseToUse',
						audio:1,
						filter:function(event,player){
							if(event.type=='dying'){
								if(player==event.dying) return false;
							}
							return event.parent.name!='phaseUse';
						},
						filterCard:function(){return false},
						ai2:function(target){
							var player=_status.event.player;
							if(player.storage.sgk_tianji_top=='trick') return 1;
							if(player.hp==1&&player.storage.sgk_tianji_top!='trick') return 0;
							if(get.attitude(player,_status.currentPhase)>=2){
								if(_status.currentPhase.hasJudge('lebu')||_status.currentPhase.hasJudge('bingliang')){
									return 10;
								}
								return 0;
							}
							if(player.hp<=2&&!player.countCards('h','tao')) return 0;
							return 1;
						},
						selectCard:-1,
						viewAs:{name:'wuxie'},
						viewAsFilter:function(player){
							return _status.dying!=player;
						},
						onuse:function(result,player){
							var cards=get.cards();
							player.showCards(cards);
							result.cards=cards;
							if(get.type(cards[0],'trick')!='trick'){
								player.loseHp();
							}
							delete player.storage.sgk_tianji_top;
						}
					},
					sgk_tianqi5:{
						enable:'chooseToRespond',
						audio:1,
						filter:function(event,player){
							if(event.type=='dying'){
								if(player==event.dying) return false;
							}
							return event.parent.name!='phaseUse';
						},
						filterCard:function(){return false},
						selectCard:-1,
						check:function(card,event){
							var player=_status.event.player;
							if(player.storage.sgk_tianji_top=='basic') return 1;
							if(player.countCards('h','shan')) return 0;	
							return 1;	
						},
						viewAs:{name:'shan'},
						onrespond:function(result,player){
							var cards=get.cards();
							player.showCards(cards);
							result.cards=cards;
							if(get.type(cards[0],'trick')!='basic'){
								player.loseHp();
							}
							delete player.storage.sgk_tianji_top;
						},
						ai:{
							skillTagFilter:function(player){
								return _status.dying!=player;
							},
							respondShan:true
						}
					},
					sgk_tianji:{
						audio:1,
						trigger:{global:'phaseUseBegin'},
						frequent:true,
						filter:function(event,player){
							if(ui.cardPile.hasChildNodes()==false) return false;
							return true;
						},
						content:function(){
							'step 0'
							event.top=[];
							event.top=event.top.concat(ui.cardPile.firstChild);
							event.dialog=ui.create.dialog('天机',event.top);
							var controls=[];
							if(game.hasPlayer(function(target){
								return player.countCards('h')<=target.countCards('h')&&target!=player;
							})){
								controls.push('获得');
							}
							controls.push('替换');
							player.chooseControl(controls,'cancel',event.dialog).ai=function(){
								if(event.top[0].name=='du') return 'cancel';
								return 0;
							};
							'step 1'
							if(result.control=='获得'){
								player.draw();
								event.finish();
							}
							else if(result.control=='替换'){
								player.chooseCard('选择一张牌置于牌堆顶','h',true).ai=function(card){
									if(_status.currentPhase==player){
										if(player.hp<=player.maxHp/2&&player.countCards('h',{type:'basic'})){
											return get.type(card)=='basic';
										}					
										if(player.hp>player.maxHp/2&&player.countCards('h',{type:'trick'})){
											return get.type(card)=='trick';
										}
									}
									else{
										return 15-get.value(card);
									}
								}
							}
							else{
								event.finish();
							}
							'step 2'
							event.card=result.cards[0];
							player.storage.sgk_tianji_top=get.type(event.card,'trick');
							player.lose(event.card,ui.special);
							player.draw();
							var cardx=ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.$throw(cardx,1000);
							'step 3'
							if(player==game.me) game.delay(0.5);
							'step 4'
							if(event.card){
								event.card.fix();
								ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
							}
						},
					},
					sgk_xianzhu:{
						audio:2,
						trigger:{global:'recoverAfter'},
						check:function(event,player){
							return get.attitude(player,event.player)>0;
						},
						logTarget:'player',
						content:function(){
							trigger.player.draw(2);
						},
						group:'sgk_xianzhu2'
					},
					sgk_xianzhu2:{
						audio:2,
						trigger:{global:'loseEnd'},
						check:function(event,player){
							return get.attitude(player,event.player)>=0;
						},
						filter:function(event,player){
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='e') return true;
							}
							return false;
						},
						logTarget:'player',
						content:function(){
							var num=0;
							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].original=='e') num+=2;
							}
							trigger.player.draw(num);
						},
					},
					sgk_liangyuan:{
						audio:2,
						enable:'phaseUse',
						skillAnimation:true,
						unique:true,
						animationColor:'fire',
						init:function(player){
							player.storage.sgk_liangyuan=false;
						},
						filter:function(event,player){
							return !player.storage.sgk_liangyuan;
						},
						filterTarget:function(card,player,target){
							return player!=target&&target.sex=='male';
						},
						content:function(){
							player.storage.sgk_liangyuan=true;
							target.addSkill('sgk_liangyuan2');
						},
						ai:{
							order:6,
							result:{
								target:3,
							},
							threaten:function(player,target){
								if(game.hasPlayer(function(target1){
									return target.hasSkill('sgk_liangyuan2');
								})) return 3;
							}
						}
					},
					sgk_liangyuan2:{
						mark:true,
						intro:{
							content:'mark'
						},
						marktext:'缘',
						trigger:{global:'phaseEnd'},
						filter:function(event,player){
							return event.player.hasSkill('sgk_liangyuan');
						},
						forced:true,
						content:function(){
							player.insertPhase('sgk_liangyuan');
						}
					},
					sgk_tianzi:{
						audio:true,
						trigger:{player:'phaseDrawBefore'},
						check:function(event,player){
							if(game.players.length<3) return 0;
						},
						content:function(){
							"step 0"
							trigger.finish();
							trigger.untrigger();
							event.current=player.next;
							"step 1"
							event.current.chooseCard('交给'+get.translation(player)+'一张手牌或令其摸一张牌').ai=function(card){
								if(get.attitude(event.current,player)>0){
									return -1;
								}
								else{
									return 3-get.value(card);
								}
							}
							"step 2"
							if(result.bool==false){
								event.current.line(player,'green');
								game.log(event.current,'让',player,'摸了一张牌');
								player.draw();
							}
							else{
								player.gain(result.cards[0]);
								event.current.$give(1,player);
							}
							if(event.current.next!=player){
								event.current=event.current.next;
								game.delay(0.5);
								event.goto(1);
							}
						}
					},
					sgk_meixin:{
						audio:4,
						enable:'phaseUse',
						usable:1,
						position:'he',
						filterTarget:function(card,player,target){
							return target.sex=='male'&&player!=target;
						},
						check:function(card){
							return 6-get.value(card);
						},
						content:function(){
							target.markSkillCharacter('sgk_meixin',player,'魅心','本阶段当'+get.translation(player)+'使用一张基本牌后，该目标弃置一张牌；当'+get.translation(player)+'使用一张锦囊牌后，'+get.translation(player)+'获得该目标一张牌；当'+get.translation(player)+'使用一张装备牌后，对该目标造成1点伤害。');
							player.storage.sgk_meixin=target;
							player.addTempSkill('sgk_meixin2','phaseAfter');
							player.addTempSkill('sgk_meixin3','phaseAfter');
						},
						ai:{
							threaten:3,
							order:15,
							expose:0.3,
							result:{
								target:function(player,target){
									return -target.countCards('h')-1;
								}
							}
						}
					},
					sgk_meixin2:{
						trigger:{player:'useCardAfter'},
						audio:false,
						filter:function(event,player){
							return player.storage.sgk_meixin&&player.storage.sgk_meixin.isAlive();
						},
						forced:true,
						popup:false,
						content:function(){
							var target=player.storage.sgk_meixin;
							switch(get.type(trigger.card,'trick')){
								case 'basic':{
									if(target.countCards('he')>0){
										player.logSkill('sgk_meixin',target);
										target.chooseToDiscard('he',true);
									}
									break;
								}
								case 'trick':{
									if(target.countCards('he')>0){
										player.logSkill('sgk_meixin',target);
										player.gainPlayerCard('he',target,true);
									}
									break;
								}
								case 'equip':{
									player.logSkill('sgk_meixin',target);
									target.damage();
									break;
								}
							}
						}
					},
					sgk_meixin3:{
						trigger:{player:'phaseEnd'},
						audio:false,
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.storage.sgk_meixin&&player.storage.sgk_meixin.isAlive();
						},
						content:function(){
							var target=player.storage.sgk_meixin;
							target.unmarkSkill('sgk_meixin');
							delete player.storage.sgk_meixin;
						}
					},
					sgk_shayi:{
						audio:true,
						trigger:{player:'phaseUseBegin'},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						forced:true,
						content:function(){
							'step 0'
							player.showHandcards();
							'step 1'
							if(!player.countCards('h','sha')){
								player.addTempSkill('sgk_shayi_buff','phaseAfter');
							}
							else{
								player.draw(2);
							}
						},
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return Infinity;
							},
							targetInRange:function(card){
								if(card.name=='sha') return true;
							}
						},
						subSkill:{
							buff:{
								audio:'ext:极略三国:true',
								enable:['chooseToRespond','chooseToUse'],
								filterCard:function(card){
									return get.color(card)=='black';
								},
								position:'he',
								viewAs:{name:'sha'},
								viewAsFilter:function(player){
									if(!player.countCards('he',{color:'black'})) return false;
								},
								prompt:'将一张黑色牌当杀使用或打出',
								check:function(card){return 4-get.value(card)},
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('he',{color:'black'})) return false;
									},
									respondSha:true,
								}
							}
						}
					},
					sgk_zhenhun:{
						audio:4,
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return player!=target;
						},
						filer:function(event,player){
							return player.countCards('he')>0;
						},
						filterCard:true,
						check:function(card){
							return 4-get.value(card);
						},
						selectTarget:-1,
						content:function(){
							target.addTempSkill('fengyin','phaseAfter');
						},
						ai:{
							order:10,
							result:{
								player:function(player){
									if(player.countCards('h')>2) return 1;
									return -1;
								},
								target:function(target){
									var num=0;
									for(var i=0;i<target.skills.length;i++){
										if(!get.is.locked(target.skills[i])){
											if(target.skills[i].enable&&target.skills[i].enable=='phaseUse'){
												continue;
											}
											else{
												num++;
											}
										}
									}
									if(num>0) return -num;
									return 0;
								},
							},
							threaten:1.3
						}
					},
					sgk_yinshi:{
						audio:2,			
						trigger:{player:'damageBegin'},
						filter:function(event){
							return event.num>0;
						},
						forced:true,
						content:function(){
							trigger.untrigger();
							trigger.finish();
							player.draw(trigger.num);
						},
						ai:{
							nofire:true,
							nothunder:true,
							nodamage:true,
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'damage')) return [0,0];
								}
							},
						}
					},
					sgk_zhitian:{
						audio:true,
						trigger:{player:'phaseBegin'},
						forced:true,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						content:function(){
							"step 0"
							player.chooseTarget('知天：将所有手牌交给一名角色',true).ai=function(target){
								return get.attitude(player,target);
							}
							"step 1"
							if(result.bool){
								player.$giveAuto(player.getCards('h').length,result.targets[0]);
								var cards=player.getCards('h');
								player.lose(cards,ui.special);
								result.targets[0].gain(cards);
								var skills=[]; 
								for(var i in lib.character){ 
									for(var j=0;j<lib.character[i][3].length;j++){ 
										var info=lib.skill[lib.character[i][3][j]];
										if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
											skills.add(lib.character[i][3][j]); 
										}
									} 
								}
								var link=skills.randomGet();
								player.line(result.targets[0],'green');
								result.targets[0].addSkill(link);
								result.targets[0].mark(link,{
									name:get.translation(link),
									content:lib.translate[link+'_info']
								});
								game.log(result.targets[0],'获得技能','【'+get.translation(link)+'】');
								player.loseHp();
							}
						}
					},
					sgk_zhiji:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.num('he',{subtype:'equip1'});
						},
						filterCard:function(card){
							return get.subtype(card)=='equip1';
						},
						position:'he',
						selectCard:[1,Infinity],
						filterTarget:function(card,player,target){
							return player!=target;
						},
						check:function(card){
							8-get.value(card);
						},
						content:function(){
							target.damage(cards.length);
						},
						group:['sgk_zhiji_damage'],
						subSkill:{
							damage:{
								audio:'ext:极略三国:1',
								trigger:{player:'damageEnd'},
								check:function(){return 1},
								content:function(){
									var card=get.cardPile(function(card){
										return get.subtype(card)=='equip1';
									});
									if(card){
										player.gain(card,'gain2');
										game.log(player,'从牌堆获得了',card);
									}
								}
							}
						},
						ai:{
							order:function(){
								return lib.card.sha.ai.order-1;
							},
							result:{
								target:function(player,target){
									return get.damageEffect(target,player);
								}
							}
						}
					},
					sgk_jishi:{
						audio:1,
						usable:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.num('he',{suit:'heart'})>0;
						},
						check:function(card){
							return 6-get.value(card)
						},
						filterCard:function(card){
							return get.suit(card)=='heart';
						},
						filterTarget:function(card,player,target){
							return target.countCards('h')>0;
						},
						position:'he',
						content:function(){
							'step 0'
							if(target.countCards('h')){
								target.draw(target.discard(target.getCards('h')).cards.length);
								target.showHandcards();
							}
							else{
								event.finish();
							}
							'step 1'
							var num=target.countCards('h',function(card){
								return get.type(card)!='basic';
							});
							if(num==0){
								event.finish();
							}
							else{
								var recover=target.maxHp-target.hp;
								if(num>0&&num<=recover){
									target.recover(num);
								}
								else{
									if(recover>0) target.recover(recover);
									target.draw(num-recover);
								}
							}
							
						},
						ai:{
							order:9,
							result:{
								target:function(player,target){
									var recover=target.maxHp-target.hp;
									var nh=target.countCards('h');
									if(player==target&&nh==1) return 0;
									if(recover>=2) return nh+recover;
									return nh;
								}
							},
							threaten:2
						}
					},
					sgk_xuanxin:{
						audio:1,
						trigger:{global:'damage'},
						check:function(){return 1},
						logTarget:'player',
						content:function(){
							'step 0'
							var card=get.cardPile(function(car){
								return get.suit(car)=='heart';
							});
							if(card){
								player.gain(card,'gain2');
								game.log(player,'从牌堆获得了',card);
								if(trigger.player&&trigger.player!=player){
									player.chooseCard('是否交给'+get.translation(trigger.player)+'一张牌？').ai=function(card){
										if(get.attitude(player,trigger.player)<=0) return card.name=='du'
										if(get.attitude(player,trigger.player)>0) return 6-get.value(card);									
										return 0;
									}
								}
							}
							else{
								event.finish();
							}
							'step 1'
							if(result.bool){
								trigger.player.gain(result.cards[0]);
								player.$give(1,trigger.player);
							}
						}
					},
					sgk_lvezhen:{
						audio:2,
						trigger:{player:'shaBegin'},
						filter:function(event,player){
							return event.target.countCards('he');
						},
						check:function(event,player){
							return get.attitude(player,event.target)<0;
						},
						content:function(){
							'step 0'
							event.cards=get.cards(3);
							player.showCards(event.cards);
							'step 1'
							event.numx=0;
							for(var i=0;i<event.cards.length;i++){
								if(get.type(event.cards[i])!='basic') event.numx++;
								ui.discardPile.appendChild(event.cards[i]);
							}
							player.$throw(event.cards);
							if(event.numx){
								player.discardPlayerCard('请选择想要弃置的牌',trigger.target,[1,event.numx],'he');
							}
						}
					},
					sgk_youlong:{
						enable:'phaseUse',
						filterCard:function(card){
							return get.color(card)=='black';
						},
						filter:function(event,player){
							return ui.discardPile.childNodes.length>ui.cardPile.childNodes.length;
						},
						viewAs:{name:'shunshou'},
						viewAsFilter:function(player){
							if(!player.countCards('h',{color:'black'})) return false;
						},
						prompt:'将一张黑色手牌当顺手牵羊使用',
						check:function(card){
							return 7-get.value(card);
						},
						ai:{
							order:9.5,
						}
					},
					sgk_danjing:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return player!=target;
						},
						content:function(){
							'step 0'
							player.loseHp();
							player.chooseControl('摸三张牌','弃三张牌').ai=function(){
								if(get.attitude(player,target)>0) return '摸三张牌';
								return '弃三张牌';
							};
							'step 1'
							if(result.control=='摸三张牌'){
								target.draw(3);
							}
							else{
								target.chooseToDiscard(3,'he',true);
							}	
						},
						ai:{
							order:5,
							result:{
								player:function(player){
									if(player.isZhu){
										if(player.hp<=2) return -5;
										return -1;
									}
									return -1;
								},
								target:function(player,target){
									if(get.attitude(player,target)>0) return 3;
									if(get.attitude(player,target)<0){
										if(target.num('he')<3) return 0;
										return -3;
									}
									return 0;
								}
							}
						}
					},
					sgk_zhonghun:{
						audio:2,
						trigger:{player:'dieBegin'},
						filter:function(event,player){
							return game.hasPlayer(function(current){
								return player!=current;
							});
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('sgk_zhonghun'),function(card,player,target){
								return player!=target;
							}).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.logSkill('sgk_zhonghun',result.targets);
								for(var i=0;i<player.skills.length;i++){
									if(!result.targets[0].hasSkill(player.skills[i]))
										result.targets[0].addSkill(player.skills[i]);
								}
							}
						}
					},
					sgk_qinyin:{
						audio:true,
						trigger:{player:'phaseDiscardBegin'},
						filter:function(event,player){
							return player.countCards('h')>1;
						},
						check:function(){
							return Math.random()<0.5;
						},
						content:function(){
							'step 0'
							player.chooseControl('选项一','选项二').set('prompt','琴音<br><br><div class="text">1:摸两张牌，然后令所有角色合失去一点体力。</div><br><div class="text">2:弃两张牌，然后令所有角色各回复一点体力。</div></br>').set('ai',function(event,player){
								var friends=game.filterPlayer(function(current){
									return get.attitude(player,current,player)>0;
								});
								var enemies=game.filterPlayer(function(current){
									return get.attitude(player,current,player)<0;
								});
								var lose=0,recover=0;
								for(var i=0;i<friends.length;i++){
									if(friends[i].hp+friends[i].countCards('he')<4){
										if(friends[i].isZhu) recover++;
										recover++;
									}
								}
								for(var i=0;i<enemies.length;i++){
									if(enemies[i].hp+enemies[i].countCards('he')<4){
										if(enemies[i].isZhu) lose++;
										lose++;
									}
								}
								if(recover<lose){
									return '选项一';
								}
								else{
									return '选项二';
								}
							});
							'step 1'
							if(result.control=='选项一'){
								player.draw(2);
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									players[i].loseHp();
									game.delay();
								}
							}
							else{
								player.chooseToDiscard(2,true);
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									players.recover();
									game.delay();
								}
							}
						}
					},
					sgk_yeyan:{
						unique:true,
						enable:'phaseUse',
						audio:2,
						animationColor:'fire',
						skillAnimation:'legend',
						filter:function(event,player){
							return !player.storage.sgk_yeyan;
						},
						init:function(player){
							player.storage.sgk_yeyan=false;
						},
						filterTarget:true,
						filterCard:function(card){
							var suit=get.suit(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(ui.selected.cards[i])==suit) return false;
							}
							return true;
						},
						complexCard:true,
						mark:true,
						selectCard:[1,4],
						line:'fire',
						check:function(){return -1},
						selectTarget:[1,2],
						content:function(){
							'step 0'
							player.awakenSkill('sgk_yeyan');
							player.storage.sgk_yeyan=true;
							if(cards.length>=3){
								player.loseHp(3);
							}
							'step 1'
							for(var i=0;i<targets.length;i++){
								targets[i].damage('fire',cards.length);
							}
						},
						intro:{
							content:'limited'
						},
						ai:{
							order:1,
							result:{
								target:function(player,target){
									if(target.hasSkillTag('nofire')) return 0;
									if(lib.config.mode=='versus') return -1;
									if(player.hasUnknown()) return 0;
									return get.damageEffect(target,player);
								}
							}
						}
					},
				},
				translate:{
					sgksoul_sunquan:'神孙权',
					sgksoul_jiaxu:'神贾诩',
					sgksoul_liubei:'神刘备',
					sgksoul_zhugeliang:'神诸葛亮',
					sgksoul_simayi:'神司马懿',
					sgksoul_luxun:'神陆逊',
					sgksoul_lvbu:'神吕布',
					sgksoul_guanyu:'神关羽',
					sgksoul_zhaoyun:'神赵云',
					sgksoul_zhangliao:'神张辽',
					sgksoul_huangyueying:'神月英',
					sgksoul_zhangjiao:'神张角',
					sgksoul_lvmeng:'神吕蒙',
					sgksoul_guojia:'神郭嘉',
					sgksoul_sunshangxiang:'神香香',
					sgksoul_diaochan:'神貂蝉',
					sgksoul_zhangfei:'神张飞',
					sgksoul_simahui:'神司马徽',
					sgksoul_dianwei:'神典韦',
					sgksoul_huatuo:'神华佗',
					sgksoul_ganning:'神甘宁',
					sgksoul_xiahoudun:'神夏侯惇',
					sgksoul_zhouyu:'神周瑜',
					
					sgk_qinyin:'琴音',
					sgk_yeyan:'业炎',
					sgk_huju:'虎踞',
					sgk_huju2:'虎踞',
					sgk_hufu:'虎缚',
					sgk_yanmie:'湮灭',
					sgk_shunshi:'顺世',
					sgk_junwang:'君望',
					sgk_jizhao:'激诏',
					sgk_qixing:'七星',
					sgk_kuangfeng:'狂风',
					sgk_kuangfeng2:'狂风',
					sgk_dawu:'大雾',
					sgk_dawu2:'大雾',
					sgk_tongtian:'通天',
					sgk_jilve:'极略',
					sgk_jieyan:'劫焰',
					sgk_fenying:'焚营',
					sgk_kuangbao:'狂暴',
					sgk_wumou:'无谋',
					sgk_wuqian:'无前',
					sgk_shenfen:'神愤',
					sgk_wushen:'武神',
					sgk_suohun:'索魂',
					sgk_suohun2:'索魂',
					sgk_juejing:'绝境',
					sgk_longhun:'龙魂',
					sgk_nizhan:'逆战',
					sgk_cuifeng:'摧锋',
					sgk_weizhen:'威震',
					sgk_zhiming:'知命',
					sgk_suyin:'夙隐',
					sgk_dianjie:'电界',
					sgk_shendao:'神道',
					sgk_leihun:'雷魂',
					sgk_shelie:'涉猎',
					sgk_gongxin:'攻心',
					sgk_tianqi:'天启',
					sgk_tianqi2:'天启',
					sgk_tianqi3:'天启',
					sgk_tianqi4:'天启',
					sgk_tianqi5:'天启',
					sgk_tianji:'天机',
					sgk_xianzhu:'贤助',
					sgk_xianzhu2:'贤助',
					sgk_liangyuan:'良缘',
					sgk_liangyuan2:'良缘',
					sgk_tianzi:'天姿',
					sgk_meixin:'魅心',
					sgk_shayi:'杀意',
					sgk_zhenhun:'震魂',
					sgk_yinshi:'隐世',
					sgk_zhitian:'知天',
					sgk_zhiji:'掷戟',
					sgk_jishi:'济世',
					sgk_xuanxin:'悬心',	
					sgk_lvezhen:'掠阵',
					sgk_youlong:'游龙',
					sgk_danjing:'啖睛',
					sgk_zhonghun:'忠魂',
					
					sgk_qinyin_info:'弃牌阶段开始时，你可以选择一项:1.摸两张牌，然后令所有角色各失去一点体力；2.弃两张牌，然后令所有角色各回复一点体力。',
					sgk_yeyan_info:'限定技:出牌阶段，你可以弃置至少一种花色不同的手牌，然后对一至两名角色各造成等量的火属性伤害，若你以此法弃置的手牌花色数不少于三，你须先失去三点体力。',
					sgk_huju_info:'锁定技，其他角色的回合开始时，你摸一张牌。你的回合开始时，若你的手牌数为最多（或之一），你选择一项：1、失去1点体力；2、减1点体力上限，失去“虎踞”，获得“制衡”和“虎缚。',
					sgk_hufu_info:'出牌阶段限一次，你可以令一名其他角色弃置X张牌（X为其装备区的牌数）。',
					sgk_yanmie_info:'出牌阶段，你可以弃置一张黑桃牌，令一名其他角色先弃置所有手牌再摸等量的牌并展示之，然后你可以弃置其中所有非基本牌，并对其造成等量的伤害。',
					sgk_shunshi_info:'当你成为其他角色使用【杀】、【桃】或【梅】的目标后，你可以令你与至少一名除该角色外的其他角色各摸一张牌，然后这些角色也成为此牌的目标。',
					sgk_junwang_info:'锁定技，其他角色摸牌结束时，若其手牌数不小于你，其须交给你一张手牌。',
					sgk_jizhao_info:'出牌阶段对每名其他角色限一次，你可以交给其至少一张手牌，并令其获得一个“诏”标记。拥有“诏”标记的角色回合结束时，若其本回合内未造成过伤害，其受到你造成的1点伤害并失去“诏”标记。',
					sgk_qixing_info:'分发起始手牌时，你将获得起始手牌改为观看牌堆顶十一张牌并获得其中四张手牌，然后将其余七张牌扣置于武将牌上，称为[星]，摸牌阶段结束时，你可以用至少一张手牌替换等量的[星]',
					sgk_kuangfeng_info:'回合开始阶段开始时，你可以将一张[星]置入弃牌堆，然后选择一名角色获得一枚[风]标记，若如此做，当其于你的下回合开始前受到火焰伤害时，该伤害加一；雷电伤害时，你令其弃置两张牌；普通伤害时，你将牌堆顶一张牌置入[星]',
					sgk_dawu_info:'回合结束阶段开始时，你可以弃掉至少一张[星]，然后选择等量的角色获得[雾]标记，若如此做，当其于你的下回合开始前受到非雷电伤害时，你防止之。',
					sgk_tongtian_info:'限定技，出牌阶段你可以弃置任意花色不同的牌，然后根据以下技能获得相应技能:黑桃·鬼才。 红桃·观星。梅花·完杀。方片·制衡。',
					sgk_jilve_info:'出牌阶段，你可以摸一张牌，然后选择一项：使用一张牌，或弃置一张牌。若你以此法弃置牌，则本回合此技能失效。',
					sgk_jieyan_info:'当一张红色【杀】或红色非延时锦囊牌仅指定一名角色为目标后，你可以弃置一张手牌令其无效，然后对目标角色造成1点火焰伤害。',
					sgk_fenying_info:'当一名角色受到火焰伤害后，若你的手牌数不大于体力上限，你可以弃置一张红色牌，然后对该角色或与其距离最近的一名角色造成等量的火焰伤害。',
					sgk_kuangbao_info:'锁定技:游戏开始时，你获得两枚[暴]标记。每当你造成或受到伤害时，你获得等量的[暴]标记。',
					sgk_wumou_info:'锁定技:当你使用非延时锦囊牌时，你须选择一项:1，弃置一枚[暴]标记；2，受到一点伤害。',
					sgk_wuqian_info:'出牌阶段：你可以弃置两枚[暴]标记，若如此做，本回合内你视为拥有技能【无双】且你造成伤害后额外获得一枚[暴]标记。',
					sgk_shenfen_info:'出牌阶段，弃6个暴怒标记，你对每名其他角色各造成一点伤害，其他角色弃掉所有牌，然后将你的武将牌翻面，每回合限一次。',
					sgk_wushen_info:'锁定技，你的【杀】和【桃】均视为【决斗】。',
					sgk_suohun_info:'锁定技，每当你受到1点伤害后，伤害来源(除你以外)获得一个“魂”标记。当你进入濒死状态时，减一半(向上取整)的体力上限并回复体力至体力上限，拥有“魂”标记的角色依次弃置所有的“魂”标记，然后受到与弃置的“魂”标记数量相同的伤害。',
					sgk_juejing_info:'锁定技，一名角色的回合开始时，若你的体力值：为1，你摸一张牌；大于1，你失去1点体力，然后摸两张牌。',
					sgk_longhun_info:'你可以将同花色的X张牌按下列规则使用（或打出）：红桃当【桃】；方块当火属性的【杀】；梅花当【闪】；黑桃当【无懈可击】。（X为你当前的体力值且至少为1）。',
					sgk_nizhan_info:'每当一名角色受到【杀】或【决斗】造成的一次伤害时，你可以将一枚[袭]标记放置在该角色或伤害来源(不为你)的武将牌上。',
					sgk_cuifeng_info:'锁定技，回合结束阶段，若场上的[袭]标记总数不小于4，你须依次从每名被标记的角色处获得等同于其[袭]标记数量的手牌。若该角色手牌不足，则你获得其全部手牌，然后该角色受到你对其造成的1点伤害。最后移除场上全部的[袭]标记。',
					sgk_weizhen_info:'回合开始阶段，你可以移除场上全部的[袭]标记，然后摸等同于[袭]标记数量的牌。',
					sgk_zhiming_info:'其他角色的回合开始阶段开始时，若其有手牌，你可以弃置一张手牌，然后弃置其一张手牌，若两张牌颜色相同，你令其跳过此回合的摸牌阶段或出牌阶段。',
					sgk_suyin_info:'你的回合外，当你失去最后的手牌时，可令一名其他角色将其武将牌翻面。',
					sgk_dianjie_info:'你可以跳过你的摸牌阶段或出牌阶段，然后判定：若结果为黑色，你对一名角色造成1点雷电伤害；若结果为红色，你令至多两名武将牌未横置的角色将其武将牌横置。',
					sgk_shendao_info:'一名角色的判定牌生效前，你可以用一张手牌或场上的牌代替之。',
					sgk_leihun_info:'锁定技，你受到的雷电伤害均视为体力回复。',
					sgk_shelie_info:'锁定技，摸牌阶段，你摸四张牌，你须依次指定以此法获得牌的类别，然后从牌堆随机获得之。',
					sgk_gongxin_info:'出牌阶段限一次，你可以观看一次任意一名角色的手牌并展示其中所有的红桃牌，然后若展示的牌数：为1，你弃置之并对其造成1点伤害；大于1，你获得其中一张。',
					sgk_tianqi_info:'你的濒死状态除外，每当你需要使用或打出一张基本牌或非延时锦囊牌时，你可以声明之，然后亮出牌堆顶的一张牌，并将此牌当你所述之牌使用或打出，若其与你所述之牌不为同一类别，你须先失去1点体力。（你的出牌阶段限一次。）',
					sgk_tianji_info:'任一角色的出牌阶段开始时，你可以观看牌堆顶的一张牌，然后你可以选择一项：用一张手牌替换之；若你的手牌数不是全场最多的(或之一)，你可以获得之。',
					sgk_xianzhu_info:'当一名角色回复体力后，或失去装备区里的牌后，你可以令其摸两张牌。',
					sgk_liangyuan_info:'限定技，出牌阶段，你可以选择一名其他男性角色，则于本局游戏中，你的自然回合结束时，该角色进行一个额外的回合。',
					sgk_tianzi_info:'摸牌阶段，你可以放弃摸牌，然后令所有其他角色依次选择一项：1、交给你一张牌；2、令你摸一张牌。',
					sgk_meixin_info:'出牌阶段限一次，你可以选择一名其他男性角色，若如此做，本阶段当你使用一张基本牌后，你令其弃置一张牌；当你使用一张锦囊牌后，你获得其一张牌；当你使用一张装备牌后，你对其造成1点伤害。',
					sgk_shayi_info:'锁定技，出牌阶段开始时，你展示所有手牌，若有【杀】，你摸两张牌；若没有【杀】，你于本阶段可以将一张黑色牌当【杀】使用。你使用【杀】无距离限制、无次数限制。',
					sgk_zhenhun_info:'出牌阶段限一次，你可以弃置一张牌令所有其他角色的非锁定技于本阶段内无效。',
					sgk_zhitian_info:'锁定技，回合开始时，你须将所有手牌交给一名角色，并令其随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外），然后你失去1点体力。',
					sgk_yinshi_info:'锁定技，当你受到伤害时，你防止之，改为摸此伤害值数量的牌。',
					sgk_zhiji_info:'出牌阶段限一次，你可以弃置至少一张武器牌，然后对一名其他角色造成等量的伤害。当你受到伤害后，你可以从弃牌堆或牌堆随机获得一张武器牌。',
					sgk_jishi_info:'出牌阶段限一次，你可以弃置一张红桃牌，然后令一名角色先弃置所有手牌再摸等量的牌并展示，其中每有一张非基本牌，你令其回复1点体力，以此法回复的过量体力效果改为令其摸等量的牌。',
					sgk_xuanxin_info:'当一名角色受到伤害时，你可以从弃牌堆获得一张红桃牌，然后可以交给其一张牌。',
					sgk_lvezhen_info:'当你使用【杀】指定目标后，你可以将牌堆顶的三张牌置入弃牌堆，其中每有一张非基本牌，你弃置目标角色一张牌。',
					sgk_youlong_info:'出牌阶段，若弃牌堆的牌数多于牌堆，你可以将黑色手牌当【顺手牵羊】使用。',
					sgk_danjing_info:'出牌阶段限一次，你可以失去1点体力，然后令一名其他角色摸三张牌或弃置三张牌。',
					sgk_zhonghun_info:'当你死亡时，你可以令一名其他角色获得你当前的所有技能。',
					
				}
			},'魂烈包');
		}
		// ---------------------------------------武将补全------------------------------------------//
		if(config.supply){
			game.addCharacterPack({
				character:{
					re_madai:['male','shu',4,['re_qianxi','mashu'],['die_audio']],
					dengshizai:['male','wei',3,['zhenggong','toudu'],['die_audio']],
					sup_yuji:['male','qun',3,['sup_guhuo'],['die_audio']],
					sup_miheng:['male','qun',3,['sup_kuangcai','sup_shejian'],['die_audio']],
					nos_guanzhang:['male','shu',4,['nos_fuhun'],['die_audio']],
					//nos_yuji:['male','qun',3,['nos_guhuo'],['die_audio']],
				},
				skill:{
					sup_kuangcai:{
						audio:3,
						trigger:{
							player:"phaseUseBegin",
						},
						check:function(event,player){
							return true;
						},
						content:function (){
							'step 0'
							player.storage.sup_kuangcai_countChoose=game.countChoose;
							game.countChoose=function(clear){
								if(_status.imchoosing){
									return;
								}
								_status.imchoosing=true;
								if(!_status.countDown){
									ui.timer.show();
									var num=_status.MihengCount;
									game.countDown(parseInt(num),function(){
										ui.timer.hide();
										delete _status.MihengCount;
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
							}
							'step 1'
							_status.MihengCount=5;
							player.addTempSkill('sup_kuangcai_buff','phaseUseAfter');
						},
						subSkill:{
							buff:{
								mod:{
									cardUsable:function (card,player,num){
										return Infinity;
									},
									targetInRange:function (card,player,target,now){
										return true;
									},
								},
								trigger:{
									player:"useCardAfter",
								},
								popup:false,
								forced:true,
								content:function (){
									'step 0'
									player.draw();
									_status.MihengCount--;
									'step 1'
									if(_status.MihengCount<=0){
										delete _status.MihengCount;
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
										game.countChoose=player.storage.sup_kuangcai_countChoose;
										delete player.storage.sup_kuangcai_countChoose;
									}
								},
							}
						}
					},
					sup_shejian:{
						audio:2,
						trigger:{
							player:"phaseDiscardEnd",
						},
						direct:true,
						filter:function (event,player){
							if(!event.cards) return false;
							var suits=[];
							for(var i=0;i<event.cards.length;i++){
								if(suits.contains(get.suit(event.cards[i]))){
									return false;
								}
								else{
									suits.push(get.suit(event.cards[i]));
								}
								
							}
							if(suits.length==event.cards.length) return true;
							return false;
						},
						content:function (){
							"step 0"
							player.chooseTarget(get.prompt('sup_shejian'),function(card,player,target){
								return target.num('hej')&&player!=target;
							}).ai=function(target){
								return -get.attitude(player,target);
							}
							"step 1"
							if(result.bool){
								player.logSkill('sup_shejian',result.targets);
								player.discardPlayerCard(result.targets[0],true,'he');
							}
						},
					},
					sup_guhuo:{
						audio:2,
						enable:'phaseUse',
						filter:function(event,player){
							return player.countCards('h')>0&&!player.hasSkill('sup_guhuo2');
						},
						chooseButton:{
							dialog:function (){
								var list=['sha','shan','tao','jiu'];
								for(var i=0;i<list.length;i++){
									list[i]=['basic','',list[i]];
								}
								var list2=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
								for(var i=0;i<list2.length;i++){
									list2[i]=['trick','',list2[i]];
								}
								var dialog=ui.create.dialog();
								dialog.addText('蛊惑·基本牌');
								dialog.add([list,'vcard']);
								dialog.addText('蛊惑·锦囊牌');
								dialog.add([list2,'vcard']);
								return dialog;
							},
							filter:function (button,player){
								return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
							},
							check:function (button){
								var player=_status.event.player;
								if(Math.random()<0.5){
									var hcard=player.get('h',function(card){
										return get.suit(card)=='heart';
									});
									for(var i=0;i<hcard.length;i++){
										if(lib.filter.filterCard(hcard[i])) return button.link[2]==hcard[i].name?1:0;
									}
									return button.link[2]=='sha'?3:0;
								}
								else{
									var rate=Math.random();
									if(player.countCards('h','sha')&&rate<0.6){
										return button.link[2]=='sha'?1:0;
									}
									if(player.hp<player.maxHp){
										if(player.countCards('h','tao')&&rate<0.6) return button.link[2]=='tao'?2:0;
									}
									if(player.countCards('h','jiu')&&rate<0.4){
										return button.link[2]=='jiu'?3:0;
									}
									if(player.countCards('h','taoyuan')&&rate<0.8){
										return button.link[2]=='taoyuan'?9:0;
									}
									if(player.countCards('h','wugu')&&rate<0.8){
										return button.link[2]=='wugu'?3:0;
									}
									if(player.countCards('h','juedou')&&rate<0.4){
										return button.link[2]=='juedou'?5:0;
									}
									if(player.countCards('h','huogong')&&rate<0.8){
										return button.link[2]=='huogong'?1:0;
									}
									if(player.countCards('h','jiedao')&&rate<0.3){
										return button.link[2]=='jiedao'?8:0;
									}
									if(player.countCards('h','tiesuo')&&rate<0.2){
										return button.link[2]=='tiesuo'?7:0;
									}
									if(player.countCards('h','guohe')&&rate<0.4){
										return button.link[2]=='guohe'?7.6:0;
									}
									if(player.countCards('h','shunshou')&&rate<0.4){
										return button.link[2]=='shunshou'?7.5:0;
									}
									if(player.countCards('h','wuzhong')&&rate<0.8){
										return button.link[2]=='wuzhong'?7.2:0;
									}
									if(player.countCards('h','wanjian')&&rate<0.5){
										return button.link[2]=='wanjian'?9:0;
									}
									if(player.countCards('h','nanman')&&rate<0.2){
										return button.link[2]=='nanman'?9:0;
									}
									return button.link[2]=='sha'?1:0;
								}
							},
							backup:function (links,player){
								return {
									filterCard:true,
									selectCard:1,
									audio:false,
									popname:true,
									popup:false,
									direct:true,
									ai1:function(card){
										if(Math.random()<0.7) return card.name==links[0][2];
										return 4-get.value(card);
									},
									viewAs:{name:links[0][2]},
									onuse:function(result,player){
										player.addSkill('sup_guhuo2');
										var next=game.createEvent('preGuhuo');
										next.player=player;
										next.card=result.cards[0];
										next.guhuo=links[0][2];
										next.setContent(lib.skill.sup_guhuo.preGuhuo);
									}
								}
							},
							prompt:function (links,player){
								return '将一张手牌当'+get.translation(links[0][2])+'使用';
							},
						},
						preGuhuo:function(){
							'step 0'
							player.lose(card,ui.special);
							var node=player.$throw(card);
							node.classList.add('infohidden');
							node.classList.add('infoflip');
							ui.refresh(node);
							player.logSkill('sup_guhuo');
							game.log(player,'声称这张牌是'+'<span class="yellowtext">'+get.translation(event.guhuo)+'</span>');
							event.node=node;
							event.targets=game.filterPlayer(function(current){
								return current!=player;
							}).sortBySeat();
							'step 1'
							if(event.targets.length){
								var target=event.targets.shift();
								event.target=target;
								if(event.target.hasSkill('sup_chanyuan')){
									event.target.popup('不能质疑!');
									game.log(event.target,'被缠怨无法质疑');
									event.redo();
								}
								event.target.chooseBool('蛊惑:'+get.translation(player)+'声称这张牌是'+get.translation(event.guhuo)+',是否质疑?').ai=function(){
									var pec=Math.random();
									if(get.attitude(event.target,player)>0){
										if(event.target.hp<=2&&pec<0.9) return false;
										if(get.value(game.createCard(event.guhuo),event.target,'raw')>6) return false;
										if(pec<0.3){
											if(card.name==event.guhuo) return false;
											return true;
										}
										return false;
									}
									else{
										if(event.target.hp<=2) return false;
										if(get.value(game.createCard(event.guhuo),event.target,'raw')>6) return true;
										if(pec<0.7) return true;
										if(pec<0.15){
											if(card.name==event.guhuo) return false;
											return true;
										}
										return false;
									}
									return false;
								};
							}
							else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								event.target.popup('质疑!');
								game.log(event.target,'质疑');
								game.delay(1);
							}
							else{
								event.target.popup('不质疑!');
								game.log(event.target,'不质疑');
								game.delay(1);
								event.goto(1);
							}
							'step 3'
							node=event.node;
							setTimeout(function(){
								node.style.transition='all ease-in 0.2s';
								node.style.transform='perspective(600px) rotateY(90deg) translateX(52px)';
								var onEnd=function(){
									node.classList.remove('infohidden');
									node.style.transition='all 0s';
									ui.refresh(node);
									node.style.transform='perspective(600px) rotateY(-90deg) translateX(52px)';
									ui.refresh(node);
									node.style.transition='';
									ui.refresh(node);
									node.style.transform='';
									node.removeEventListener('webkitTransitionEnd',onEnd);
								}
								node.addEventListener('webkitTransitionEnd',onEnd);
							},200);
							ui.refresh(node);
							game.delay();
							if(card.name==event.guhuo){
								player.line(event.target,'thunder');
								event.target.addSkill('sup_chanyuan');
								game.log(event.target,'被缠怨!');
								event.finish();
							}
							else{
								event.target.line(player,'fire');
								game.log(event.target,'质疑成功,卡牌失效,',player,'的卡牌是',card);
								ui.discardPile.appendChild(card);
								player.storage.sup_guhuo=true;
							}
						},
						ai:{
							order:10,
							result:{
								player:1,
							},
							threaten:1.5,
						},
						group:['sup_guhuo_begin','sup_guhuo_sha','sup_guhuo_save','sup_guhuo_wuxie','sup_guhuo_respond'],
						subSkill:{
							begin:{
								trigger:{player:"useCardBegin"},
								popup:false,
								forced:true,
								filter:function (event){
									return event.skill=='sup_guhuo_backup'||event.skill=='sup_guhuo_sha'||event.skill=='sup_guhuo_save'||event.skill=='sup_guhuo_wuxie';
								},
								content:function (){
									if(player.storage.sup_guhuo){
										trigger.untrigger();
										trigger.finish();
										ui.clear();
										player.storage.sup_guhuo=false;
									}
									else{
										trigger.animate=false;
										var card=trigger.card;
										var event=_status.event;
										var targets=trigger.targets;
										if(card.name=='wuxie'&&event.getParent().source){
											var lining=event.getParent().sourcex||event.getParent().source2||event.getParent().source;
											if(lining==player&&event.getParent().sourcex2){
												lining=event.getParent().sourcex2;
											}
											if(Array.isArray(lining)&&event.getTrigger().name=='jiedao'){
												player.line(lining[0],'green');
											}
											else{
												player.line(lining,'green');
											}
										}
										else{
											var config={};
											if(card.nature=='fire'||
												(card.classList&&card.classList.contains('fire'))){
												config.color='fire';
											}
											else if(card.nature=='thunder'||
												(card.classList&&card.classList.contains('thunder'))){
												config.color='thunder';
											}
											if(get.info(card).multitarget&&targets.length>1&&!get.info(card).multiline){
												player.line2(targets,config);
											}
											else{
												player.line(targets,config);
											}
										}
									}
								}
							},
							sha:{
								audio:1,
								enable:'chooseToUse',
								filter:function(event,player){
									return event.parent.name!='phaseUse'&&player.countCards('h')&&!player.hasSkill('sup_guhuo2');
								},
								filterCard:true,
								selectCard:1,
								check:function(card){
									var player=_status.event.player;
									if(player.countCards('h','sha')){
										if(card.name=='sha'){
											if(get.suit(card)=='sha') return 8;
											if(Math.random()<0.8) return 1;
											return 0;
										}
									}
									if(Math.random()<0.6) return 4-get.value(card);
									return 0;	
								},
								viewAs:{name:'sha'},
								onuse:function(result,player){
									player.addSkill('sup_guhuo2');
									var next=game.createEvent('guhuoing');
									next.player=player;
									next.card=result.cards[0];
									next.guhuo='sha';
									next.setContent(lib.skill.sup_guhuo.preGuhuo);
								}
							},
							save:{
								enable:'chooseToUse',
								audio:1,
								filter:function(event,player){
									return event.parent.name!='phaseUse'&&player.countCards('h')>0&&!player.hasSkill('sup_guhuo2');
								},
								filterCard:true,
								selectCard:1,
								viewAs:{name:'tao'},
								check:function(card,event){
									var player=_status.event.player;
									if(player.countCards('h','tao')){
										if(card.name=='tao'){
											if(get.suit(card)=='heart') return 8;
											if(Math.random()<0.6) return 1;
											return 0;
										}
									}
									if(Math.random()<0.6) return 4-get.value(card);
									return 0;
								},
								onuse:function(result,player){
									player.addSkill('sup_guhuo2');
									var next=game.createEvent('guhuoing');
									next.player=player;
									next.card=result.cards[0];
									next.guhuo='tao';
									next.setContent(lib.skill.sup_guhuo.preGuhuo);
								},
								ai:{
									skillTagFilter:function(player){
										return player.countCards('h')>0;
									},
									save:true
								}
							},
							wuxie:{
								enable:'chooseToUse',
								audio:1,
								filter:function(event,player){
									return event.parent.name!='phaseUse'&&player.countCards('h')&&!player.hasSkill('sup_guhuo2');
								},
								filterCard:true,
								selectCard:1,
								check:function(card,event){
									var player=_status.event.player;
									if(player.countCards('h','wuxie')){
										if(card.name=='wuxie'){
											if(get.suit(card)=='heart') return 8;
											if(Math.random()<0.6) return 1;
											return 0;
										}
									}
									if(Math.random()<0.6) return 4-get.value(card);
									return 0;
								},
								viewAs:{name:'wuxie'},
								viewAsFilter:function(player){
									return player.countCards('h')>0&&!player.hasSkill('sup_guhuo2');
								},
								onuse:function(result,player){
									player.addSkill('sup_guhuo2');
									var next=game.createEvent('guhuoing');
									next.player=player;
									next.card=result.cards[0];
									next.guhuo='wuxie';
									next.setContent(lib.skill.sup_guhuo.preGuhuo);
								}
							},
							respond:{
								audio:false,
								trigger:{player:'chooseToRespondBegin'},
								filter:function(event,player){
									if(event.responded) return false;
									return player.countCards('h')&&!player.hasSkill('sup_guhuo2');
								},
								direct:true,
								content:function(){
									'step 0'
									if(trigger.filterCard({name:'sha'})) event.guhuoname='sha';
									else event.guhuoname='shan';
									player.chooseCard('需要打出一张'+get.translation(event.guhuoname)+','+get.prompt('nos_guhuo')).ai=function(card){
										if(player.countCards('h',event.guhuoname)){
											if(card.name==event.guhuoname){
												if(get.suit(card)=='sha') return 8;
												if(Math.random()<0.8) return 1;
												return 0;
											}
										}
										if(Math.random()<0.6) return 4-get.value(card);
										return 0;
									};
									'step 1'
									if(result.bool){
										player.logSkill('nos_guhuo');
										player.addSkill('sup_guhuo2');
										game.log(player,'声称打出的牌是'+get.translation(event.guhuoname));
										var card=result.cards[0];
										player.lose(card,ui.special);
										var node1=player.$throw(card);
										node1.classList.add('infohidden');
										node1.classList.add('infoflip');
										ui.refresh(node1);
										event.node1=node1;
										event.targets=game.players.slice(0);
										event.targets.remove(player);
										event.targets.sort(lib.sort.seat);
										event.guhuocard=card;
									}
									else{
										event.finish();
									}
									'step 2'
									if(event.targets.length){
										var target=event.targets.shift();
										event.target=target;
										if(event.target.hasSkill('sup_chanyuan')){
											event.target.popup('不能质疑!');
											game.log(event.target,'被缠怨无法质疑');
											event.redo();
										}
										event.target.chooseBool('蛊惑:'+get.translation(player)+'声称这张牌是'+get.translation(event.guhuoname)+',是否质疑?').ai=function(){
											var pec=Math.random();
											if(get.attitude(event.target,player)>0){
												if(event.target.hp<=2&&pec<0.9) return false;
												if(get.value(game.createCard(event.guhuo),event.target,'raw')>6) return false;
												if(pec<0.3){
													if(card.name==event.guhuo) return false;
													return true;
												}
												return false;
											}
											else{
												if(event.target.hp<=2) return false;
												if(get.value(game.createCard(event.guhuo),event.target,'raw')>6) return true;
												if(pec<0.7) return true;
												if(pec<0.15){
													if(card.name==event.guhuo) return false;
													return true;
												}
												return false;
											}
											return false;
										};
									}
									else{
										event.finish();
									}
									'step 3'
									if(result.bool){
										event.target.popup('质疑!');
										game.log(event.target,'质疑');
										game.delay(1);
									}
									else{
										event.target.popup('不质疑!');
										game.log(event.target,'不质疑');
										game.delay(1);
										event.goto(2);
									}
									'step 4'
									node1=event.node1;
									setTimeout(function(){
										node1.style.transition='all ease-in 0.2s';
										node1.style.transform='perspective(600px) rotateY(90deg) translateX(52px)';
										var onEnd=function(){
											node1.classList.remove('infohidden');
											node1.style.transition='all 0s';
											ui.refresh(node1);
											node1.style.transform='perspective(600px) rotateY(-90deg) translateX(52px)';
											ui.refresh(node1);
											node1.style.transition='';
											ui.refresh(node1);
											node1.style.transform='';
											node1.removeEventListener('webkitTransitionEnd',onEnd);
										}
										node1.addEventListener('webkitTransitionEnd',onEnd);
									},200);
									ui.refresh(node1);
									game.delay();
									if(trigger.filterCard({name:event.guhuocard.name})){
										player.line(event.target,'thunder');
										event.target.addSkill('sup_chanyuan');
										game.log(event.target,'被缠怨!');
										game.delay(1);
										trigger.untrigger();
										trigger.responded=true;
										trigger.animate=false;
										trigger.result={
											bool:true,
											card:{name:event.guhuoname},
											cards:[event.guhuocard],
										};
									}
									else{
										game.log(event.target,'质疑成功,',player,'的卡牌失效');
										trigger.untrigger();
										trigger.trigger('chooseToRespondBegin');
									}
								}
							}
						}
					},
					sup_guhuo2:{
						trigger:{global:'phaseAfter'},
						forced:true,
						popup:false,
						content:function(){
							player.removeSkill('sup_guhuo2');
						}
					},
					sup_chanyuan:{
						trigger:{player:['phaseBefore','changeHp']},
						forced:true,
						popup:false,
						unique:true,
						content:function(){
							var list=player.get('s');
							list.remove('sup_chanyuan');
							if(player.hp==1){
								player.disableSkill('sup_chanyuan',list);
								player.markSkill('sup_chanyuan');
							}
							else{
								player.enableSkill('sup_chanyuan');
								player.unmarkSkill('sup_chanyuan');
							}
						},
						init2:function(player){
							if(player.hp==1){
								var list=player.skills.remove('sup_chanyuan');
								player.disableSkill('sup_chanyuan',list);
								player.markSkill('sup_chanyuan');
							}
						},
						marktext:'缠',
						mark:true,
						intro:{
							 content:function(storage,player,skill){
								var storage=player.disabledSkills.sup_chanyuan;
								if(storage&&storage.length){
									var str='失效技能：';
									for(var i=0;i<storage.length;i++){
										if(lib.translate[storage[i]+'_info']){
											str+=get.translation(storage[i])+'、';
										}
									}
									return str.slice(0,str.length-1);
								}
							}
						}
					},
					zhenggong:{
						audio:true,
						trigger:{global:'phaseBefore'},
						filter:function(event,player){
							return event.player!=player&&!player.isTurnedOver();
						},
						check:function(event,player){
							if(game.roundNumber<=1&&!game.hasPlayer(function(current){
								return get.attitude(player,current)<0
							})) return false;
							return true;
						},
						content:function(){
							'step 0'
							player.phase('zhenggong');
							'step 1'
							player.turnOver();
						},
						ai:{
							expose:0.2,
						}
					},
					toudu:{
						audio:true,
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							return player.isTurnedOver();
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCardTarget({
								prompt:get.prompt('toudu'),
								ai1:function(card){
									return 6-get.value(card);
								},
								ai2:function(target){
									return get.effect(target,{name:'sha'},player);
								},
								filterTarget:function(card,player,target){
									return lib.filter.targetEnabled({name:'sha'},player,target);
								},
							});
							'step 1'
							if(result.bool){
								player.logSkill('toudu');
								player.discard(result.cards);
								player.turnOver();
								player.useCard({name:'sha'},result.targets,false);
							}
						}
					},
					re_qianxi:{
						audio:2,
						trigger:{player:'phaseBegin'},
						check:function(){
							return 1;
						},
						content:function(){
							"step 0"
							player.draw();
							player.chooseToDiscard(true,'he');
							"step 1"
							event.color=get.color(result.cards[0]);
							player.chooseTarget(function(card,player,target){
								return player!=target&&get.distance(player,target)<=1;
							},true).ai=function(target){
								return -get.attitude(player,target);
							};
							"step 2"
							if(result.bool&&result.targets.length){
								result.targets[0].storage.re_qianxi2=event.color;
								result.targets[0].addSkill('re_qianxi2');
								player.line(result.targets,'green');
								game.addVideo('storage',result.targets[0],['re_qianxi2',event.color]);
							}
						}
					},
					re_qianxi2:{
						trigger:{global:'phaseAfter'},
						forced:true,
						mark:true,
						audio:false,
						content:function(){
							player.removeSkill('re_qianxi2');
							delete player.storage.re_qianxi2;
						},
						mod:{
							cardEnabled:function(card,player){
								if(get.color(card)==player.storage.re_qianxi2) return false;
							},
							cardUsable:function(card,player){
								if(get.color(card)==player.storage.re_qianxi2) return false;
							},
							cardRespondable:function(card,player){
								if(get.color(card)==player.storage.re_qianxi2) return false;
							},
							cardSavable:function(card,player){
								if(get.color(card)==player.storage.re_qianxi2) return false;
							}
						},
						intro:{
							content:function(color){
								return '不能使用或打出'+get.translation(color)+'的手牌';
							}
						}
					},
					nos_guhuo:{
						enable:'phaseUse',
						audio:false,
						filter:function(event,player){
							return player.countCards('h')>0
						},
						chooseButton:{
							dialog:function (){
								var list=['sha','shan','tao','jiu'];
								for(var i=0;i<list.length;i++){
									list[i]=['basic','',list[i]];
								}
								var list2=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
								for(var i=0;i<list2.length;i++){
									list2[i]=['trick','',list2[i]];
								}
								var dialog=ui.create.dialog();
								dialog.addText('蛊惑·基本牌');
								dialog.add([list,'vcard']);
								dialog.addText('蛊惑·锦囊牌');
								dialog.add([list2,'vcard']);
								return dialog;
							},
							filter:function (button,player){
								return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
							},
							check:function (button){
								var player=_status.event.player;
								if(Math.random()<0.5){
									var hcard=player.get('h',function(card){
										return get.suit(card)=='heart';
									});
									for(var i=0;i<hcard.length;i++){
										if(lib.filter.filterCard(hcard[i])) return button.link[2]==hcard[i].name?1:0;
									}
									return button.link[2]=='sha'?3:0;
								}
								else{
									var rate=Math.random();
									if(player.countCards('h','sha')&&rate<0.6){
										return button.link[2]=='sha'?1:0;
									}
									if(player.hp<player.maxHp){
										if(player.countCards('h','tao')&&rate<0.6) return button.link[2]=='tao'?2:0;
									}
									if(player.countCards('h','jiu')&&rate<0.4){
										return button.link[2]=='jiu'?3:0;
									}
									if(player.countCards('h','taoyuan')&&rate<0.8){
										return button.link[2]=='taoyuan'?9:0;
									}
									if(player.countCards('h','wugu')&&rate<0.8){
										return button.link[2]=='wugu'?3:0;
									}
									if(player.countCards('h','juedou')&&rate<0.4){
										return button.link[2]=='juedou'?5:0;
									}
									if(player.countCards('h','huogong')&&rate<0.8){
										return button.link[2]=='huogong'?1:0;
									}
									if(player.countCards('h','jiedao')&&rate<0.3){
										return button.link[2]=='jiedao'?8:0;
									}
									if(player.countCards('h','tiesuo')&&rate<0.2){
										return button.link[2]=='tiesuo'?7:0;
									}
									if(player.countCards('h','guohe')&&rate<0.4){
										return button.link[2]=='guohe'?7.6:0;
									}
									if(player.countCards('h','shunshou')&&rate<0.4){
										return button.link[2]=='shunshou'?7.5:0;
									}
									if(player.countCards('h','wuzhong')&&rate<0.8){
										return button.link[2]=='wuzhong'?7.2:0;
									}
									if(player.countCards('h','wanjian')&&rate<0.5){
										return button.link[2]=='wanjian'?9:0;
									}
									if(player.countCards('h','nanman')&&rate<0.2){
										return button.link[2]=='nanman'?9:0;
									}
									return button.link[2]=='sha'?1:0;
								}
							},
							backup:function (links,player){
								return {
									filterCard:true,
									selectCard:1,
									audio:'ext:AI再起:2',
									popname:true,
									ai1:function(card){
										if(Math.random()<0.7) return card.name==links[0][2];
										return 4-get.value(card);
									},
									viewAs:{name:links[0][2]},
									onuse:function(result,player){
										var card=result.cards[0];
										player.storage.nos_guhuo=card.copy();
										card.name='nos_guhuo';
										card.suit=null;
										card.number=null;
									}
								}
							},
							prompt:function (links,player){
								return '将一张手牌当'+get.translation(links[0][2])+'使用';
							},
						},
						ai:{
							order:10,
							result:{
								player:1,
							},
							threaten:1.5,
						},
						group:['nos_guhuo_begin','nos_guhuo_ing','nos_guhuo_end','nos_guhuo_sha','nos_guhuo_save','nos_guhuo_wuxie','nos_guhuo_respond'],
						subSkill:{
							begin:{
								trigger:{player:"useCardBegin"},
								popup:false,
								forced:true,
								filter:function (event){
									return event.skill=='nos_guhuo_backup'||event.skill=='nos_guhuo_sha'||event.skill=='nos_guhuo_save'||event.skill=='nos_guhuo_wuxie';
								},
								content:function (){
									trigger.animate=false;
									var card=trigger.card;
									var event=_status.event;
									var targets=trigger.targets;
									if(card.name=='wuxie'&&event.getParent().source){
										var lining=event.getParent().sourcex||event.getParent().source2||event.getParent().source;
										if(lining==player&&event.getParent().sourcex2){
											lining=event.getParent().sourcex2;
										}
										if(Array.isArray(lining)&&event.getTrigger().name=='jiedao'){
											player.line(lining[0],'green');
										}
										else{
											player.line(lining,'green');
										}
									}
									else{
										var config={};
										if(card.nature=='fire'||
											(card.classList&&card.classList.contains('fire'))){
											config.color='fire';
										}
										else if(card.nature=='thunder'||
											(card.classList&&card.classList.contains('thunder'))){
											config.color='thunder';
										}
										if(get.info(card).multitarget&&targets.length>1&&!get.info(card).multiline){
											player.line2(targets,config);
										}
										else{
											player.line(targets,config);
										}
									}
								},
							},
							ing:{
								trigger:{player:"useCard"},
								filter:function (event){
									return event.skill=='nos_guhuo_backup'||event.skill=='nos_guhuo_sha'||event.skill=='nos_guhuo_save'||event.skill=='nos_guhuo_wuxie';
								},
								popup:false,
								forced:true,
								content:function (){
									'step 0'
									var cardx=player.storage.nos_guhuo;
									var card=game.createCard(cardx.name,cardx.suit,cardx.number);
									var node1=player.$throw(card);
									node1.classList.add('infohidden');
									node1.classList.add('infoflip');
									ui.refresh(node1);
									event.node1=node1;
									event.targets=game.players.slice(0);
									event.targets.remove(player);
									event.targets.sort(lib.sort.seat);
									event.check=false;
									event.guhuocard=card;
									event.nobelieve=[];
									'step 1'
									if(event.targets.length){
										var target=event.targets.shift();
										event.target=target;
										event.target.chooseBool('蛊惑:'+get.translation(player)+'声称这张牌是'+get.translation(trigger.card.name)+',是否质疑?').ai=function(){
								
											return false;
										};
									}
									else{
										event.goto(3);
									}
									'step 2'
									if(result.bool){
										event.check=true;
										event.target.popup('质疑!');
										game.log(event.target,'质疑');
										event.nobelieve=event.nobelieve.concat(event.target);
									}
									else{
										event.target.popup('不质疑!');
										game.log(event.target,'不质疑');
									}
									game.delay(1);
									event.goto(1);
									'step 3'
									if(event.check){
										node1=event.node1;
										setTimeout(function(){
											node1.style.transition='all ease-in 0.2s';
											node1.style.transform='perspective(600px) rotateY(90deg) translateX(52px)';
											var onEnd=function(){
												node1.classList.remove('infohidden');
												node1.style.transition='all 0s';
												ui.refresh(node1);
												node1.style.transform='perspective(600px) rotateY(-90deg) translateX(52px)';
												ui.refresh(node1);
												node1.style.transition='';
												ui.refresh(node1);
												node1.style.transform='';
												node1.removeEventListener('webkitTransitionEnd',onEnd);
											}
											node1.addEventListener('webkitTransitionEnd',onEnd);
										},200);
										ui.refresh(node1);
										game.delay();
										if(trigger.card.name==event.guhuocard.name){
											event.check=true;
											if(get.suit(event.guhuocard)!='heart'){
												trigger.untrigger();
												trigger.finish();
												player.stat[player.stat.length-1].card[trigger.card.name]--;
											}	
										}
										else{
											event.check=false;
											trigger.untrigger();
											trigger.finish();
											player.stat[player.stat.length-1].card[trigger.card.name]--;
										}
									}
									else{
										event.finish();
									}
									'setp 4'
									if(event.nobelieve&&event.nobelieve.length){
										if(event.check){
											for(var i=0;i<event.nobelieve.length;i++){
												event.nobelieve[i].loseHp();
											}
										}
										else{
											for(var i=0;i<event.nobelieve.length;i++){
												event.nobelieve[i].draw();
											}
										}
									}
								},
							},
							end:{
								trigger:{
									player:'useCardEnd',
								},
								priority:-1,
								popup:false,
								forced:true,
								filter:function (event){
									return event.skill=='nos_guhuo_backup'||event.skill=='nos_guhuo_sha'||event.skill=='nos_guhuo_shan'||event.skill=='nos_guhuo_save'||event.skill=='nos_guhuo_wuxie';
								},
								content:function (){
									if(trigger.skill=='nos_guhuo_backup') ui.clear();
									var cardx=player.storage.nos_guhuo;
									trigger.card=game.createCard(cardx.name,cardx.suit,cardx.number);
								},
							},
							sha:{
								enable:['chooseToUse'],
								audio:1,
								filter:function(event,player){
									return event.parent.name!='phaseUse'&&player.countCards('h');
								},
								filterCard:true,
								selectCard:1,
								check:function(card){
									var player=_status.event.player;
									if(player.countCards('h','sha')){
										if(card.name=='sha'){
											if(get.suit(card)=='sha') return 8;
											if(Math.random()<0.8) return 1;
											return 0;
										}
									}
									if(Math.random()<0.6) return 4-get.value(card);
									return 0;	
								},
								viewAs:{name:'sha'},
								onuse:function(result,player){
									var card=result.cards[0];
									player.storage.nos_guhuo=card.copy();
									card.name='nos_guhuo';
									card.suit=null;
									card.number=null;
								}
							},
							save:{
								enable:'chooseToUse',
								audio:1,
								filter:function(event,player){
									return event.parent.name!='phaseUse'&&player.countCards('h')>0;
								},
								filterCard:true,
								selectCard:1,
								viewAs:{name:'tao'},
								check:function(card,event){
									var player=_status.event.player;
									if(player.countCards('h','tao')){
										if(card.name=='tao'){
											if(get.suit(card)=='heart') return 8;
											if(Math.random()<0.6) return 1;
											return 0;
										}
									}
									if(Math.random()<0.6) return 4-get.value(card);
									return 0;
								},
								onuse:function(result,player){
									var card=result.cards[0];
									player.storage.nos_guhuo=card.copy();
									card.name='nos_guhuo';
									card.suit=null;
									card.number=null;
								},
								ai:{
									skillTagFilter:function(player){
										return player.countCards('h')>0;
									},
									save:true
								}
							},
							wuxie:{
								enable:'chooseToUse',
								audio:1,
								filter:function(event,player){
									return event.parent.name!='phaseUse'&&player.countCards('h');
								},
								filterCard:true,
								selectCard:1,
								check:function(card,event){
									var player=_status.event.player;
									if(player.countCards('h','wuxie')){
										if(card.name=='wuxie'){
											if(get.suit(card)=='heart') return 8;
											if(Math.random()<0.6) return 1;
											return 0;
										}
									}
									if(Math.random()<0.6) return 4-get.value(card);
									return 0;
								},
								viewAs:{name:'wuxie'},
								viewAsFilter:function(player){
									return player.countCards('h')>0;
								},
								onuse:function(result,player){
									var card=result.cards[0];
									player.storage.nos_guhuo=card.copy();
									card.name='nos_guhuo';
									card.suit=null;
									card.number=null;
								}
							},
							respond:{
								trigger:{player:'chooseToRespondBegin'},
								filter:function(event,player){
									if(event.responded) return false;
									return player.countCards('h');
								},
								direct:true,
								content:function(){
									'step 0'
									if(trigger.filterCard({name:'sha'})) event.guhuoname='sha';
									else event.guhuoname='shan';
									player.chooseCard('需要打出一张'+get.translation(event.guhuoname)+','+get.prompt('nos_guhuo')).ai=function(card){
										if(player.countCards('h',event.guhuoname)){
											if(card.name==event.guhuoname){
												if(get.suit(card)=='sha') return 8;
												if(Math.random()<0.8) return 1;
												return 0;
											}
										}
										if(Math.random()<0.6) return 4-get.value(card);
										return 0;
									};
									'step 1'
									if(result.bool){
										player.logSkill('nos_guhuo');
										game.log(player,'声称打出的牌是'+get.translation(event.guhuoname));
										var card=result.cards[0];
										player.lose(card,ui.special);
										var node1=player.$throw(card);
										node1.classList.add('infohidden');
										node1.classList.add('infoflip');
										ui.refresh(node1);
										event.node1=node1;
										event.targets=game.players.slice(0);
										event.targets.remove(player);
										event.targets.sort(lib.sort.seat);
										event.check=false;
										event.guhuocard=card;
										event.nobelieve=[];
									}
									else{
										event.finish();
									}
									'step 2'
									if(event.targets.length){
										var target=event.targets.shift();
										event.target=target;
										event.target.chooseBool('蛊惑:'+get.translation(player)+'声称这张牌是'+get.translation(trigger.name)+',是否质疑?').ai=function(){
											
											return false;
										};
									}
									else{
										event.goto(4);
									}
									'step 3'
									if(result.bool){
										event.check=true;
										event.target.popup('质疑!');
										game.log(event.target,'质疑');
										event.nobelieve=event.nobelieve.concat(event.target);
									}
									else{
										event.target.popup('不质疑!');
										game.log(event.target,'不质疑');
									}
									game.delay(1);
									event.goto(2);
									'step 4'
									if(event.check){
										node1=event.node1;
										setTimeout(function(){
											node1.style.transition='all ease-in 0.2s';
											node1.style.transform='perspective(600px) rotateY(90deg) translateX(52px)';
											var onEnd=function(){
												node1.classList.remove('infohidden');
												node1.style.transition='all 0s';
												ui.refresh(node1);
												node1.style.transform='perspective(600px) rotateY(-90deg) translateX(52px)';
												ui.refresh(node1);
												node1.style.transition='';
												ui.refresh(node1);
												node1.style.transform='';
												node1.removeEventListener('webkitTransitionEnd',onEnd);
											}
											node1.addEventListener('webkitTransitionEnd',onEnd);
										},200);
										ui.refresh(node1);
										game.delay();
										if(trigger.filterCard({name:event.guhuocard.name})){
											event.check=true;
											if(get.suit(event.guhuocard)=='heart'){
												trigger.untrigger();
												trigger.responded=true;
												trigger.animate=false;
												trigger.result={
													bool:true,
													card:{name:event.guhuoname},
													cards:[event.guhuocard],
												};
												event.checkreal=true;
											}
											else{
												trigger.untrigger();
											}
											
										}
										else{
											event.check=false;
											trigger.untrigger();
										}
									}
									else{
										game.log('无人质疑,蛊惑成功');
										trigger.untrigger();
										trigger.responded=true;
										trigger.animate=false;
										trigger.result={
											bool:true,
											card:{name:event.guhuoname},
											cards:[event.guhuocard],
										};
										event.finish();
									}
									'step 5'
									if(event.nobelieve&&event.nobelieve.length){
										if(event.check){
											game.log('有人质疑,蛊惑成功');
											for(var i=0;i<event.nobelieve.length;i++){
												event.nobelieve[i].loseHp();
											}
										}
										else{
											game.log('有人质疑,蛊惑失败');
											for(var i=0;i<event.nobelieve.length;i++){
												event.nobelieve[i].draw();
											}
										}
									}
									'step 6'
									if(!event.checkreal) trigger.trigger('chooseToRespondBegin');
								},
							},
						},					
					},
					nos_xiongyi:{
						unique:true,
						enable:'phaseUse',
						audio:2,
						mark:true,
						filter:function(event,player){
							return !player.storage.xiongyi;
						},
						init:function(player){
							player.storage.nos_xiongyi=false;
						},
						filterTarget:function(card,player,target){
							return player.group==target.group&&target!=player;
						},
						multitarget:true,
						multiline:true,
						selectTarget:-1,
						content:function(){
							"step 0"
							player.storage.xiongyi=true;
							game.asyncDraw([player].concat(targets),3);
							"step 1"
							var wei=get.population('wei'),shu=get.population('shu'),wu=get.population('wu'),qun=get.population('qun');
							var min=Math.min(wei,shu,wu,qun);
							if(get.population(player.group)==min){
								player.recover();
							}
						},
						intro:{
							content:'limited'
						},
						ai:{
							order:1,
							result:{
								target:function(player){
									var num=player.countCards('h');
									if(player.hp==1) return 1;
									if(player.hp==2&&num<=1) return 1;
									if(player.hp==3&&num==0) return 1;
									if(player.hp>=3&&num>=3) return 0;
									var mode=get.mode();
									if(mode=='identity'||mode=='guozhan'){
										for(var i=0;i<game.players.length;i++){
											if(game.players[i].ai.shown<=0) return 0;
										}
									}
									if(game.phaseNumber<game.players.length*2) return 0;
									return 1;
								},
							}
						}
					},
					nos_shuangren:{
						audio:2,
						trigger:{player:'phaseUseBegin'},
						direct:true,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						content:function(){
							"step 0"
							player.chooseTarget('是否发动【双刃】？',function(card,player,target){
								return player!=target&&target.countCards('h')>0;
							}).ai=function(target){
								return get.attitude(player,target)<0;
							}
							"step 1"
							if(result.bool){
								player.logSkill('nos_shuangren',result.targets[0]);
								event.target=result.targets[0];
								player.chooseToCompare(event.target);
							}
							else{
								event.finish();
							}
							"step 2"
							if(result.bool){
								player.chooseTarget('视为对'+get.translation(event.target)+'或一名与其势力相同的其他角色使用一张杀',function(card,player,target){
									return target.group==event.target.group&&lib.filter.targetEnabled({name:'sha'},player,target);;
								}).ai=function(target){
									return get.effect(target,{name:'sha'},player);
								}
							}
							else{
								game.log(player,'跳过了出牌阶段');
								trigger.untrigger();
								trigger.finish();
							}
							"step 3"
							if(result.bool){
								player.useCard({name:'sha'},result.targets,false);
							}
						},
					},
					nos_fuhun:{
						audio:2,
						trigger:{player:'phaseDrawBegin'},
						check:function(){return 1;},
						content:function(){
							'step 0'
							trigger.finish();
							trigger.untrigger();
							event.cards=get.cards(2);
							player.showCards(event.cards);
							'step 1'
							if(get.color(event.cards[0])!=get.color(event.cards[1])){
								player.addTempSkill('wusheng','phaseAfter');
								player.addTempSkill('paoxiao','phaseAfter');
							}
							player.gain(event.cards);
						}
					}
				},
				translate:{
					re_madai:'RE马岱',
					dengshizai:'邓士载',
					sup_yuji:'于吉',
					sup_miheng:'祢衡',
					nos_guanzhang:'关兴张苞',
					nos_yuji:'于吉',
					
					re_qianxi:'潜袭',
					re_qianxi2:'潜袭',
					zhenggong:'争功',
					toudu:'偷渡',
					sup_guhuo:'蛊惑',
					sup_guhuo_backup:'蛊惑',
					sup_chanyuan:'缠怨',
					sup_kuangcai:'狂才',
					sup_shejian:'舌剑',
					nos_fuhun:'父魂',
					nos_guhuo:'蛊惑',
					nos_guhuo_backup:'蛊惑',
					
					nos_danshou_info:'每当你造成伤害后，你可摸一张牌，然后终止一切结算，结束当前回合。',
					nos_guhuo_info:"你可以说出任何一种基本牌或非延时类锦囊牌，并正面朝下使用或打出一张手牌。体力值不为0的其他角色依次选择是否质疑。若无人质疑，则该牌按你所述之牌结算。若有人质疑则亮出验明：若为真，质疑者各失去1点体力；若为假，质疑者各摸一张牌。无论真假，弃置被质疑的牌。仅当被质疑的牌为红桃花色且为真时，该牌仍然可以进行结算。",
					nos_fuhun_info:'摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶的两张牌并获得之，若亮出的牌颜色不同，你获得技能“武圣”、“咆哮”，直到回合结束。',
					
					sup_kuangcai_info:"出牌阶段开始时，你可以令你此阶段内的出牌时间变为5秒，若如此做，你使用牌没有距离和次数限制，且每当你与此阶段内使用牌时，你摸一张牌并且出牌时间-1秒。",
					sup_shejian_info:"弃牌阶段结束时，若你于此阶段弃置的所有牌花色均不同，你可以弃置一名其他角色的一张牌。",
					sup_guhuo_info:'每名角色的回合限一次，你可以扣置一张手牌当一张基本牌或非延时类锦囊牌使用或打出。其他角色依次选择是否质疑。一旦有其他角色质疑则翻开此牌：若为假则此牌作废，若为真，则质疑角色获得技能“缠怨”（锁定技，你不能质疑于吉，只要你的体力值为1，你失去所有其他技能）。',
					sup_chanyuan_info:'锁定技，你不能质疑于吉，只要你的体力值为1，你失去所有其他技能',
					zhenggong_info:'其他角色的回合开始前，若你的武将牌正面朝上，你可以获得一个额外的回合，此回合结束后，你将武将牌翻面。 ',
					toudu_info:' 每当你受到一次伤害后，若你的武将牌背面朝上，你可以弃置一张手牌，将你的武将牌翻面，然后视为使用一张【杀】。',
					re_qianxi_info:'准备阶段开始时，你可以摸一张牌然后弃置一张牌。若如此做，你选择距离为1的一名其他角色，然后直到回合结束，该角色不能使用或打出与你以此法弃置的牌颜色相同的手牌。',
				}
			},'武将补全')
		}
	},
    config:{
        sgk_sr:{
            name:'SR武将',
            init:true,
        },
		sgk_sk:{
            name:'SK武将',
            init:true,
        },
		sgk_soul:{
            name:'魂烈包',
            init:true,
        },
		supply:{
			name:'武将补全',
			init:true,
		},
		simple_name:{
			name:'武将前缀',
			intro:'选择是否显示SK、SR武将前缀',
			init:'hide',
			item:{
				hide:'隐藏',
				show:'显示',
			}
		},
    },
	package:{
		character:{character:{},translate:{}},
		card:{card:{},translate:{},list:[]},
		skill:{skill:{},translate:{}}
	},
	files:{"character":[],"card":[],"skill":[]}
,editable:false})
