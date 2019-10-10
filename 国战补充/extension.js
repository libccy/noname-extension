game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"国战补充",content:function(config,pack){
if(lib.characterPack.mode_guozhan){
lib.characterPack.mode_guozhan.gz_yangyi=['male','shu',3,['gzxiace']]

lib.characterPack.mode_guozhan.gz_wangshuang=['male','wei',4,['gzsijix']]

lib.characterPack.mode_guozhan.gz_wuanguo=['male','qun',4,['gzxiandeng']]

lib.characterPack.mode_guozhan.gz_sunhuan=['male','wu',4,['gzyongzhan']]

lib.characterPack.mode_guozhan.gz_zhonghui=['male','wei',4,['gzquanji','gzpaiyi','gzmouzuo']]

lib.characterPack.mode_guozhan.gz_caoang=['male','wei',4,['kaikang']]

lib.characterPack.mode_guozhan.gz_caojie=['female','qun',3,['new_shouxi','zhixi','huimin'],[]]
    lib.characterPack.mode_guozhan.gz_guanyinping=['female','shu',4,['gzhuxiao','xueji'],[]]

lib.characterPack.mode_guozhan.gz_xin_xushu=['male','shu',4,['gzjianyan','gzwuyan','zhuhai'],[]]

lib.characterPack.mode_guozhan.gz_dongyun=['male','shu',3,['bingzheng','sheyan'],[]]
lib.characterPack.mode_guozhan.gz_panzhangmazhong=['male','wu',4,['anjian','duodao'],[]]
lib.characterPack.mode_guozhan.gz_guohuai=['male','wei',4,['jingce'],[]]
lib.characterPack.mode_guozhan.gz_fuwan=['male','qun',4,['moukui'],[]]
    
lib.characterPack.mode_guozhan.gz_wangyi=['female','wei',3,['zhenlie','miji'],[]]
    
lib.characterPack.mode_guozhan.gz_chengong=['male','qun',3,['mingce','gzzhichi']]
lib.characterPack.mode_guozhan.gz_guohuai=['male','wei',4,['jingce']]
lib.characterPack.mode_guozhan.gz_sp_sunshangxiang=['female','shu',4,['gzliangzhu','gzgongji']]
lib.characterPack.mode_guozhan.gz_sunluban=['female','wu',3,['chanhui','jiaojin']]
    lib.characterPack.mode_guozhan.gz_caozhen=['male','wei',5,['xinsidi']]
    lib.characterPack.mode_guozhan.gz_liufeng=['male','shu',4,['xiansi']]    
    lib.characterPack.mode_guozhan.gz_zhugeke=['male','wu',3,['aocai','gzduwu']]
    lib.characterPack.mode_guozhan.gz_yanbaihu=['male','qun',4,['zhidao','jili']]
    lib.characterPack.mode_guozhan.gz_zhangchunhua=['female','wei',3,['jueqing','shangshi']]

lib.characterPack.mode_guozhan.gz_zhugeguo=['female','shu',3,['yuhua','gzqirang']]

lib.characterPack.mode_guozhan.gz_guyong=['male','wu',3,['shenxing','bingyi']]  

lib.characterPack.mode_guozhan.gz_zhugejin=['male','wu',3,['hongyuan','gzhuanshi','gzmingzhe']]  

lib.characterPack.mode_guozhan.gz_heqi=['male','wu',4,['qizhou','shanxi']]  
    
lib.characterPack.mode_guozhan.gz_gaoshun=['male','qun',4,['xianzhen','jinjiu']]

lib.characterPack.mode_guozhan.gz_xin_liru=['male','qun',3,['xinjuece','xinfencheng','gzmieqi','gzmieji']]

lib.perfectPair.zhugeke=['zhugejin']
    lib.perfectPair.lvbu=['gaoshun','chengong']
　　lib.perfectPair.zhugeguo=['zhugeliang','sp_zhugeliang','huangyueying']
    lib.perfectPair.xushu=['zhugeliang','sp_zhugeliang','liubei']
    lib.perfectPair.caoxiu=['caocao','caopi','caozhang','caoang','caozhen']
lib.perfectPair.caoang=['caocao','caopi','caozhang','caoxiu','caozhen']
　　lib.perfectPair.xin_liru=['dongzhuo']
　　lib.perfectPair.sp_sunshangxiang=['liubei']
    lib.perfectPair.yanwen=['re_yuanshao']
    lib.perfectPair.jiangwei=['zhugeliang','sp_zhugeliang']
    lib.perfectPair.huangyueying=['zhegeliang','sp_zhugeliang']
     lib.perfectPair.bulianshi=['sunquan']
     lib.perfectPair.zhangchunhua=['simayi']
lib.translate.gz_yangyi="杨仪";
lib.translate.gz_wangshuang="王双";
lib.translate.gz_wuanguo="武安国";
lib.translate.gz_sunhuan="孙桓";
}
},precontent:function(){
    
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
					"gzyongzhan":{
						group:["gzyongzhan_sha","gzyongzhan_shan","gzyongzhan_tao"],
						subSkill:{
							"sha":{
								name:'杀',
								enable:['chooseToRespond','chooseToUse'],
								position:'e',
								filterCard:true,
								viewAsFilter:function(player){
									return player.countCards('h')==0;
								},
								viewAs:{name:'sha'},
								prompt:'将一张装备区内的牌当【杀】使用或打出',
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('e')) return false;
									},
									respondSha:true,
								},
							},
							"shan":{
								name:'闪',
								enable:['chooseToRespond'],
								position:'e',
								filterCard:true,
								viewAsFilter:function(player){
									return player.countCards('h')==0;
								},
								viewAs:{name:'shan'},
								prompt:'将一张装备区内的牌当【闪】使用或打出',
								ai:{
									respondShan:true,
									skillTagFilter:function(player){
										if(!player.countCards('e')) return false;
									},
									effect:{
										target:function(card,player,target,current){
											if(get.tag(card,'respondShan')&&current<0) return 0.6;
										},
									},
								},
							},
							"tao":{
								name:'桃',
								enable:['phaseUse','chooseToUse','chooseToRespond'],
								position:'e',
								filterCard:true,
								viewAsFilter:function(player){
									return player.countCards('h')==0;
								},
								viewAs:{name:'tao'},
								prompt:'将一张装备区内的牌当【桃】使用或打出',
								ai:{
									skillTagFilter:function(player){
										return player.countCards('e')>0;
									},
									save:true,
									respondTao:true,
								},
							},
						},
					},
					"gzxiandeng":{
						trigger:{
							player:"phaseDrawBefore",
						},
						check:function(event,player){
							return player.countCards('h')>1&&game.players.length>=3;
						},
						content:function (){
							'step 0'
							trigger.cancel();
							event.card=get.cards()[0];
							player.showCards(event.card);
							player.gain(event.card,'gain2');
							if(get.color(event.card)=='black'){
								player.chooseTarget(function(card,player,target){
									return player!=target;
								},'是否弃置获得的牌并视为对一名其他角色使用【杀】？').ai=function(target){
									return -get.attitude(player,target)
								};
							}else{
								player.addTempSkill('gzxiandeng1',{player:'phaseAfter'});
								event.finish();
							};
							'step 1'
							if(result.bool){
								player.discard(event.card);
								player.useCard({name:'sha'},result.targets[0],false);
							};
						},
					},
					"gzxiandeng1":{
						mod:{
							globalFrom:function(from,to,distance){
								return -1;
							},
						},
					},
					"gzsijix":{
						trigger:{
							player:"shaMiss",
						},
						direct:true,
						content:function (){
							'step 0'
							if(player.storage.gzsijix==undefined) player.storage.gzsijix=0;
							'step 1'
							player.chooseCard(get.prompt('gzsijix'),{name:'sha'}).set('ai',function(card){
								return get.attitude(player,trigger.target);
							});
							'step 2'
							if(result.bool){
								event.a=true;
								event.card=result.cards[0];
								event.card.skill='gzsijix';
								player.useCard(event.card,trigger.target);
								player.storage.gzsijix++;
							}else{
								if(player.storage.gzsijix>0&&player.storage.gzsijix1==true){
									trigger.target.chooseCard(1,'h',{type:'basic'}).set('ai',function(card){
										return -get.attitude(player,trigger.target);
									});
								}else{
									delete player.storage.gzsijix;
									delete player.storage.gzsijix1;
									event.finish();
								};
							};
							'step 3'
							if(event.card) delete event.card.skill;
							if(event.a!=true&&result.bool){
								trigger.target.discard(result.cards[0]);
								trigger.target.line(player);
								player.damage().source=trigger.target;
								delete player.storage.gzsijix;
								delete player.storage.gzsijix1;
							};
						},
					},
					"_gzsijix":{
						trigger:{
							source:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.card&&event.card.name=='sha'&&event.card.skill=='gzsijix';
						},
						content:function (){
							player.discardPlayerCard(1,'he',trigger.player);
						},
					},
					"_gzsijix1":{
						trigger:{
							player:"shaMiss",
						},
						forced:true,
						filter:function (event,player){
							return event.card.skill=='gzsijix';
						},
						content:function (){
							if(player.storage.gzsijix1==undefined) player.storage.gzsijix1=true;
						},
					},

					"gzxiace":{
						enable:"phaseUse",
						usable:1,
						filterCard:function(card){
							return get.type(card)=='basic';
						},
						filterTarget:function (card,player,target){
							return target!=player;
						},
						content:function (){
							'step 0'
							var cards=get.cards(3);
							target.chooseCardButton(cards,true,3,'请以任意顺序摆放牌');
							'step 1'
							if(result.bool){
								var cards=result.links;
								var cards1=cards.randomGets(2);
								player.showCards(cards1);
								game.delay();
								if(get.color(cards1[0])==get.color(cards1[1])){
									player.gain(cards1,'gain2');
								}else{
									target.gain(cards1,'gain2');
									target.loseHp();
									cards.remove(cards1[0]);
									cards.remove(cards1[1]);
									player.gain(cards,'gain2');
								};
							}else{
								event.finish();
							};
						},
						ai:{
							order:5,
							result:{
								target:-1,
							},
						},
					},

					"gzzhichi":{
						trigger:{
							player:'phaseDrawBegin'
						},
						check:function(event,player){
							return player.countCards('j')>0
						},
						content:function(){
							trigger.num--;
							player.addTempSkill('gzzhichi1',{player:'phaseAfter'});
						},
					},
					"gzzhichi1":{
						trigger:{
							player:'phaseEnd'
						},
						forced:true,
						popup:false,
						content:function(){
							player.draw();
						},
					},
					"gzduwu":{
						enable:'phaseUse',
						usable:1,
						filterCard:true,
						selectCard:-1,
						viewAs:{name:'sha'},
						viewAsFilter:function(player){
							return player.countCards('h')>0;
						},
						check:function(card){
							var player=get.owner(card);
							if(player.countCards('h')>3||player.maxHp-player.hp==0) return 0;
							return 1;
						},
						onuse:function(result,player){
							player.addTempSkill('gzduwu1',{player:'useCardAfter'});
						},
					},
					"gzduwu1":{
						trigger:{
							source:'damageEnd'
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.maxHp>player.hp;
						},
						content:function(){
							player.draw(player.maxHp-player.hp);
						},
					},
			gzmingzhe:{
				audio:"mingzhe",
				trigger:{player:['useCardAfter','respondAfter']},
				frequent:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					if(event.cards){
						for(var i=0;i<event.cards.length;i++){
							if(get.color(event.cards[i])=='red'&&
							event.cards[i].original!='j') return true;
						}
					}
					return false;
				},
				content:function(){
					player.draw();
				},
				ai:{
					threaten:0.7
				}
			},
					gzmieqi:{
                        audio:"xinmieji",
						mainSkill:true,
						init:function(player){player.checkMainSkill('gzmieqi')},
				trigger:{player:'useCard'},
				direct:true,
				filter:function(event,player){
					return event.targets.length==1&&get.type(event.card)=='trick'&&get.color(event.card)=='black';
				},
				position:'he',
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('mieji'),function(card,player,target){
						var trigger=_status.event.getTrigger();
						return lib.filter.filterTarget(trigger.card,player,target)&&target!=trigger.targets[0];
					}).set('autodelay',true).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					});
					"step 1"
					if(result.bool){
						trigger.targets.push(result.targets[0]);
						player.logSkill('mieji',result.targets);
					}
				}
					},

					gzmieji:{
                        audio:"xinmieji",
						viceSkill:true,
						init:function(player){player.checkViceSkill('gzmieji')},
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h',{type:['trick','delay'],color:'black'});
				},
				filterCard:function(card){
					return get.color(card)=='black'&&get.type(card,'trick')=='trick';
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				discard:false,
				delay:false,
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					'step 0'
					player.showCards(cards);
					'step 1'
					ui.cardPile.insertBefore(cards[0],ui.cardPile.firstChild);
					game.updateRoundNumber();
					var n1=target.getCards('he',function(card){
						if(!lib.filter.cardDiscardable(card,player)) return false;
						return get.type(card,'trick')=='trick';
					});
					var n2=target.getCards('he',function(card){
						if(!lib.filter.cardDiscardable(card,player)) return false;
						return get.type(card,'trick')!='trick';
					});
					if(n1.length>1||n2.length>2||(n1.length==1&&n2.length==2)){
						target.chooseToDiscard('弃置一张锦囊牌，或两张非锦囊牌',true,'he',function(card,player){
							if(!lib.filter.cardDiscardable(card,player)) return false;
							if(!_status.event.nontrick){
								return get.type(card,'trick')=='trick';
							}
							if(ui.selected.cards.length){
								return get.type(card,'trick')!='trick';
							}
							return true;
						}).set('ai',function(card){
							if(get.type(card,'trick')=='trick'){
								return 8-get.value(card);
							}
							return -get.value(card);
						}).set('selectCard',function(){
							if(ui.selected.cards.length==1&&get.type(ui.selected.cards[0],'trick')=='trick'){
								return 1;
							}
							return 2;
						}).set('nontrick',n2.length>=2).set('complexCard',true);
					}
					else{
						if(n1.length){
							target.discard(n1);
						}
						else if(n2.length){
							target.discard(n2);
						}
					}
				},
				ai:{
					order:9,
					result:{
						target:-1
					}
				}
					},
            "gzqirang":{
                trigger:{
                    player:"useCardEnd",
                },
　　　　　　　　audio:"qirang",	
                usable:1,
                forced:true,
                filter:function (event,player){
        return _status.currentPhase==player&&get.type(event.card,'trick')=='trick';
    },
                content:function (){
        var list=get.inpile('equip');
        player.gain(game.createCard(list.randomGet()),'draw')
        
    },
                group:"gzqirang_equip",
                subSkill:{
                    equip:{
                        trigger:{
                            player:"useCardEnd",
                        },
　　　　　　　　　　　　audio:"qirang",	
                        usable:1,
                        forced:true,
                        filter:function (event,player){
        return _status.currentPhase==player&&get.type(event.card,'trick')=='equip';
    },
                        content:function (){
        var list=get.inpile('trick');
        player.gain(game.createCard(list.randomGet()),'draw')
        
    },
                        sub:true,
                    },
                },
            },
					gzhuanshi:{
                        audio:"huanshi",						 trigger:{global:'phaseDiscardEnd'},
						filter:function(event,player){
							return event.player!=player&&player.num('h')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard('是否发动对'+get.translation(trigger.player)+'【缓释】？').ai=function(card){
								if(ai.get.attitude(player,trigger.player)<0&&trigger.player.num('he')) return 6-ai.get.value(card);
								return 0;
							}
							'step 1'
							if(result.bool&&trigger.player.num('he')){
								player.logSkill('gzhuanshi',trigger.player);
								trigger.player.chooseToDiscard('he',true)._triggered=null;;
							}else{
								event.finish();
							}
							'step 2'
							if(get.type(result.cards[0])=='equip'){
								event.card=result.cards[0];
								player.chooseTarget('选择一名目标获得'+get.translation(event.card),function(card,player,target){
									return trigger.player!=target;
								}).ai=function(target){
									return ai.get.attitude(player,target)>0;
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

					gzjianyan:{
                        audio:"jujian",
						mainSkill:true,
						init:function(player){
							if(player.checkMainSkill('gzjianyan')){
								player.removeMaxHp();
							}
						},
				enable:'phaseUse',
				usable:1,
				delay:0,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.sex=='male';
					});
				},
				content:function(){
					"step 0"
					player.chooseControl(['red','black','basic','trick','equip']).set('ai',function(){
						var player=_status.event.player;
						if(!player.hasShan()) return 'basic';
						if(player.countCards('e')<=1) return 'equip';
						if(player.countCards('h')>2) return 'trick';
						return 'red';
					});
					"step 1"
					event.card=get.cardPile(function(card){
						if(get.color(card)==result.control) return true;
						if(get.type(card,'trick')==result.control) return true;
						return false;
					},'cardPile');
					if(!event.card){
						event.finish();
						return;
					}
					player.showCards([event.card]);
					"step 2"
					player.chooseTarget(true,'选择一名男性角色送出'+get.translation(event.card),function(card,player,target){
						return target.sex=='male';
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(_status.event.neg) return -att;
						return att;
					}).set('neg',get.value(event.card,player,'raw')<0);
					"step 3"
					player.line(result.targets,'green');
					result.targets[0].gain(event.card,'gain2');

				},
				ai:{
					order:9,
					result:{
						player:2
					},
					threaten:1.2
				}
					},
				gzwuyan:{
                        audio:"wuyan",
						viceSkill:true,
						init:function(player){player.checkViceSkill('gzwuyan')},
				trigger:{source:'damageBefore',player:'damageBefore'},
				forced:true,
				priority:15,
				check:function(event,player){
					if(player==event.player) return true;
					return false;
				},
				filter:function(event,player){
					return get.type(event.card,'trick')=='trick';
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					notrick:true,
					notricksource:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='trick'&&get.tag(card,'damage')){
								return 'zeroplayertarget';
							}
						},
						player:function(card,player,target,current){
							if(get.type(card)=='trick'&&get.tag(card,'damage')){
								return 'zeroplayertarget';
							}
						}
					}
				}
					},
					gzliangzhu:{
                        audio:"liangzhu",
						mainSkill:true,
						init:function(player){
							if(player.checkMainSkill('gzliangzhu')){
								player.removeMaxHp();
							}
						},
				trigger:{global:'recoverAfter'},
				direct:true,
				filter:function(event,player){
					return _status.currentPhase==event.player;
				},
				content:function(){
					'step 0'
					if(player==trigger.player){
						player.chooseControl('摸一张','摸两张','cancel2',function(){
							return '摸两张';
						}).set('prompt',get.prompt('gzliangzhu'));
						event.single=true;
					}
					else{
						player.chooseTarget(get.prompt('gzliangzhu'),function(card,player,target){
							return target==_status.event.player||target==_status.event.target;
						}).set('target',trigger.player).set('ai',function(target){
							var player=_status.event.player;
							if(player==target) return 1;
							return get.attitude(player,target)-1.5;
						});
					}
					'step 1'
					if(event.single){
						if(result.control!='cancel2'){
							player.logSkill('gzliangzhu',player);
							if(result.control=='摸一张'){
								player.draw();
							}
							else{
								player.draw(2);
								player.storage.gzliangzhu=player;
							}
						}
					}
					else if(result.bool){
						var target=result.targets[0];
						player.logSkill('gzliangzhu',target);
						if(target==player){
							target.draw();
						}
						else{
							target.draw(2);
							if(target.storage.gzliangzhu){
								target.storage.gzliangzhu.add(player);
							}
							else{
								target.storage.gzliangzhu=[player];
							}
						}
					}
				},
				ai:{
					expose:0.1
				}
					},
					gzgongji:{
                        audio:"xiaoji",
						viceSkill:true,
						init:function(player){player.checkViceSkill('gzgongji')},
				trigger:{player:'loseEnd'},
				frequent:true,
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='e') return true;
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].original=='e') num+=2;
					}
					player.draw(num);
				},
				ai:{
					noe:true,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip') return [1,3];
						}
					}
				}
					},
			gzquanji:{
                audio:"quanji",
				trigger:{player:'damageEnd'},
				frequent:true,
				locked:false,
				notemp:true,
				init:function(player){
					player.storage.gzquanji=[];
				},
				filter:function(event){
					return event.num>0;
				},
				content:function(){
					"step 0"
					player.draw(trigger.num);
					"step 1"
					if(player.countCards('he')){
						player.chooseCard('将'+get.cnNumber(trigger.num)+'张手牌置于武将牌上作为“权”',trigger.num,true);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.cards&&result.cards.length){
						player.lose(result.cards,ui.special,'toStorage');
						player.storage.gzquanji=player.storage.gzquanji.concat(result.cards);
						player.syncStorage('gzquanji');
						player.markSkill('gzquanji');
						game.log(player,'将',result.cards,'置于武将牌上作为“权”');
					}
				},
				intro:{
					content:'cards'
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.gzquanji.length;
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:0.8,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
								if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==3) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
							}
						}
					}
				}
			},
					gzpaiyi:{
						mainSkill:true,
                        audio:"paiyi",
						init:function(player){
							if(player.checkMainSkill('gzpaiyi')){
								player.removeMaxHp();
							}
						},
				enable:'phaseUse',
				usable:1,
				audio:2,
				filterTarget:true,
				filter:function(event,player){
					return player.storage.gzquanji.length>0;
				},
				content:function(){
					"step 0"
					player.chooseCardButton(player.storage.gzquanji,true);
					"step 1"
					var card=result.links[0];
					card.discard();
					player.$throw(card);
					player.storage.gzquanji.remove(card);
					if(!player.storage.gzquanji.length){
						player.unmarkSkill('gzquanji');
					}
					else{
						player.markSkill('gzquanji');
					}
					player.syncStorage('gzquanji');
					"step 2"
					target.draw(2);
					"step 3"
					if(target.countCards('h')>player.countCards('h')){
						target.damage();
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(player!=target) return 0;
							if(player.countCards('h')+2<=player.hp+player.storage.gzquanji.length) return 1;
							return 0;
						}
					}
				}
					},
					gzmouzuo:{
						viceSkill:true,
						init:function(player){player.checkViceSkill('gzmouzuo')},
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){return player.storage.gzquanji.length>0},
						chooseButton:{
							dialog:function(event,player){
								return ui.create.dialog('谋佐<div class="center text"></br></br>选择一张要置入弃牌堆的“权”</br></br></div>',player.storage.gzquanji,'hidden');
							},
							backup:function(links,player){return {
								filterCard:function(){return false},
								selectCard:-1,
								cards:links,
								discard:false,
								filterTarget:function(card,player,target){return target!=player},
								content:function(){
									player.draw();
									if(target.countCards('ej')) player.discardPlayerCard('谋佐<div class="center text"></br></br>弃置'+get.translation(target)+'场上一张牌</div>',target,'ej',true);
								},
								onuse:function(result,player){
									result.cards=lib.skill[result.skill].cards;
									var card=result.cards[0];
									player.$throw(card);
									player.storage.gzquanji.remove(card);
									ui.discardPile.appendChild(card);
									player.syncStorage('gzquanji');
									if(!player.storage.gzquanji.length) player.unmarkSkill('gzquanji');
									else player.updateMarks();
								},
								ai:{
									result:{
										target:function(player,target){
											var att=get.attitude(player,target);
											var es=target.getCards('e');
											var js=target.getCards('j');
											var num=0;
											if(att>0){
												if(js.length){
													var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
													if(js.length>1||get.effect(target,jj,target,player)<0) return 2;
													num=-1;
												}
												if(target.getEquip('baiyin')&&target.isDamaged()&&
													get.recoverEffect(target,player,player)>0){
													if(target.hp==1&&!target.hujia) return 1.6;
													if(target.hp==2) return 0.01;
												}
												if(es.length) num=-1;
												return num;
											}
											var noe=(es.length==0||target.hasSkillTag('noe'));
											var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
											if(noe||noe2){
												if(js.length){
													for(var i=0;i<js.length;i++){
														var jj=js[i].viewAs?{name:js[i].viewAs}:js[i];
														if(get.effect(target,jj,target,player)>0){num=2;break;}
														num=-1;
													}
												}
											}
											return num;
										},
										player:function(player){
											if(player.countCards('h')+1>player.hp+Math.ceil(player.storage.gzquanji.length/2-0.5)) return 0;
											return 1;
										}
									},
								}
							}},
							prompt:function(links,player){
								return '谋佐<div class="center text"></br></br>摸一张牌，然后弃置一名其他角色场上一张牌</div>'
							}
						},
						ai:{
							order:6,
							threaten:0.5,
							result:{
								player:function(player){
									if(player.countCards('h')+1>player.hp+Math.ceil(player.storage.gzquanji.length/2-0.5)) return 0;
									return player.tempSkills.gzmouzuo4?0:1;
								}
							},
						}
					},
                     gzshouxi:{
                unique:true,
                forceunique:true,
                audio:["shouxi",2],
                enable:"phaseUse",
                filterCard:{
                    color:"black",
                },
                position:"he",
                check:function(card){
        return 6-get.value(card);
    },
                filter:function(event,player){
        for(var i=0;i<ui.discardPile.childElementCount;i++){
            if(ui.discardPile.childNodes[i].name=='yuxi') return true;
        }
        return game.hasPlayer(function(current){
            return current!=player&&current.countCards('ej','yuxi');
        });
    },
                content:function(){
        var list=[];
        for(var i=0;i<ui.discardPile.childElementCount;i++){
            if(ui.discardPile.childNodes[i].name=='yuxi'){
                list.add(ui.discardPile.childNodes[i]);
            }
        }
        game.countPlayer(function(current){
            if(current!=player){
                var ej=current.getCards('ej','yuxi');
                if(ej.length){
                    list.addArray(ej);
                }
            }
        });
        if(list.length){
            var card=list.randomGet();
            var owner=get.owner(card);
            if(owner){
                player.gain(card,owner);
                owner.$give(card,player);
                player.line(owner,'green');
            }
            else{
                player.gain(card,'log');
                player.$draw(card);
            }
        }
    },
                ai:{
                    order:8.5,
                    result:{
                        player:1,
                    },
                },
            },
            "new_shouxi":{
                audio:"shouxi",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                check:function(event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function(event,player){
return player.countCards('e',function(card){
        return card.name=='yuxi';
    })&&(event.card.name=='shunshou'||event.card.name=='guohe');    },
                content:function(){
        trigger.cancel();
    },
            },
            gzhuxiao:{
                init:function(player){
        if(player.checkViceSkill('gzhuxiao')&&!player.viceChanged){
            player.removeMaxHp();
        }
    },
                viceSkill:true,
                audio:"huxiao",
                trigger:{
                    source:"damageEnd",
                },
                silent:true,
                filter:function(event,player){
        if(event._notrigger.contains(event.player)) return false;
        return event.nature=='fire';
    },
                content:function(){
        if(!player.storage.huxiao){
            player.storage.huxiao=[];
        }
        player.storage.huxiao.add(trigger.player);
    },
                group:["huxiao_draw","huxiao_clear"],
                subSkill:{
                    draw:{
                        trigger:{
                            source:"damageAfter",
                        },
                        priority:-6,
                        filter:function(event,player){
                if(!player.storage.huxiao||!player.storage.huxiao.length) return false;
                for(var i=0;i<player.storage.huxiao.length;i++){
                    if(player.storage.huxiao[i].isIn()) return true;
                }
                return false;
            },
                        check:function(){
                return false;
            },
                        forced:true,
                        content:function(){
                for(var i=0;i<player.storage.huxiao.length;i++){
                    if(!player.storage.huxiao[i].isIn()){
                        player.storage.huxiao.splice(i--,1);
                    }
                }
                game.asyncDraw(player.storage.huxiao);
                if(!player.storage.huxiao3){
                    player.storage.huxiao3=[];
                }
                player.storage.huxiao3.addArray(player.storage.huxiao);
                player.addTempSkill('huxiao3');
            },
                        sub:true,
                    },
                    clear:{
                        trigger:{
                            source:"damageAfter",
                        },
                        priority:-7,
                        silent:true,
                        content:function(){
                delete player.storage.huxiao;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                forced:true,
                popup:false,
            },
            zhixi:{
                inherit:"zhixi",
                content:function(){
        _status.currentPhase.discard(_status.currentPhase.getCards('he')   );
        player.draw(2);
    },
                audio:"ext:国战补充:1",
                trigger:{
                    player:"loseEnd",
                },
                filter:function(event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].name=='yuxi'&&event.cards[i].original=='e') return true;
        }
        return false;
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
        },
        translate:{
					"gzxiace":"狭策",
					"gzxiace_info":"出牌阶段限一次。你可以弃置一张基本牌，令一名其他角色观看牌堆顶三张牌并以任意顺序放回，然后你随机抽取其中两张，若颜色相同则你获得之，否则该角色得到这两张牌并失去一点体力，然后你得到另一张牌",
					"gzsijix":"肆击",
					"gzsijix_info":"每当你使用的【杀】被目标角色闪避后，你可以再对其使用一张【杀】。若你使用的【杀】对目标角色造成了伤害，你可以弃置其一张牌；若你使用的【杀】均被目标角色闪避，其可以弃置一张基本牌对你造成一点伤害",
					"gzxiandeng1":"先登",
					"gzxiandeng":"先登",
					"gzxiandeng_info":"摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶一张牌并获得之，若为黑色，则你可以弃置这张牌并视为对一名其他角色使用一张没有距离限制且不计入回合使用次数的【杀】，若为红色，则该回合内，你与其他所有角色距离皆为1",
					"gzyongzhan":"勇战",
					"gzyongzhan_info":"当你没有手牌时，你可以将装备区里的一张牌当作【杀】、【闪】或【桃】使用或打出",
					"gzzhichi1":"智迟",
					"gzzhichi":"智迟",
					"gzzhichi_info":"摸牌阶段，你可以少摸一张牌，然后回合结束阶段你摸一张牌",

			gzmieji:'灭计',
			gzmieji_info:'副将技，出牌阶段限一次，你可以展示一张黑色锦囊牌并将之置于牌堆顶，然后令有手牌的一名其他角色选择一项：弃置一张锦囊牌；或弃置两张非锦囊牌',
			gzmieqi:'灭寂',
			gzmieqi_info:'主将技，你使用黑色普通锦囊牌仅指定一个目标后，可以额外指定一个目标',
            "gzqirang":"祈禳",
            "gzqirang_info":"锁定技，每当你于回合内首次使用锦囊牌后，你获得一张装备牌；每当你于回合内首次使用装备牌后，你获得一张锦囊牌",
					"gzduwu1":"黩武",
					"gzduwu":"黩武",
					"gzduwu_info":"出牌阶段限一次，你可以将所有手牌（至少一张）当做【杀】使用，若此【杀】造成伤害，你摸X张牌（X为你已损失的体力值）",
			gzmingzhe:'明哲',
			gzmingzhe_info:'你的回合外，每当你因使用、打出一张红色牌时，你可以摸一张牌。',
					gzhuanshi:'缓释',
					gzhuanshi_info:'其他角色的弃牌阶段结束时，你可以弃置一张手牌，令其弃置一张牌，若该角色弃置的牌为装备牌，你将之交给除该角色外的一名角色。',
					gzquanji:'权计',
					gzquanji_info:'当你受到伤害后，你可以摸一张牌，若如此做，你将一张牌置于武将牌上，称为“权”。锁定技，你的手牌上限+X（X为你“权”的数量的一半，向上取整）。',
					gzjianyan:'荐言',
					gzjianyan_info:'主将技，你计算体力值时减少一个单独的阴阳鱼；出牌阶段限一次，你可以声明一种牌的类别或颜色，并亮出牌库中第一张符合你声明的牌，然后你令一名男性角色获得此牌。',
　　　　　　　　　　gzwuyan:'无言',
					gzwuyan_info:'副将技，锁定技，每当锦囊牌造成伤害时，若你为伤害来源，你防止此伤害；锁定技，每当你受到锦囊牌对你造成的伤害时，你防止此伤害。',
					gzliangzhu:'良助',
					gzliangzhu_info:'主将技，你计算体力值时减少一个单独的阴阳鱼；当一名角色于其出牌阶段内回复体力时，你可以选择一项：1、摸一张牌；2、令该角色摸两张牌。',
　　　　　　　　　　gzgongji:'弓姬',
					gzgongji_info:'副将技，每当你失去一张装备牌，可以摸两张牌。',
					gzpaiyi:'排异',
					gzpaiyi_info:'主将技，你计算体力值时减少一个单独的阴阳鱼；出牌阶段限一次，你可以移去一张“权”并选择一名角色，令其摸两张牌，然后若其手牌多于你，你对其造成1伤害。',
　　　　　　　　　　gzmouzuo:'谋佐',
					gzmouzuo_info:'副将技，出牌阶段限一次，你可以将一张“权”置入弃牌堆并选择一名其他角色，若如此做，你摸一张牌，然后弃置其场上一张牌。',
					gzmouzuo_backup:'谋佐',
            gzshouxi:"守玺",
            "gzshouxi_info":"出牌阶段限一次，你可以弃置一张黑色牌，获得弃牌堆里或场上的一张【玉玺】",
            "new_shouxi":"守玺",
            "new_shouxi_info":"锁定技，当你成为顺手牵羊或过河拆桥的目标时，若你装备区有玉玺，则取消之",
            gzhuxiao:"虎啸",
            "gzhuxiao_info":"副将技，锁定技，此武将牌上的单独阴阳鱼数量-1；当你造成火焰伤害后，受到此伤害的角色各摸一张牌，本回合你对这些角色使用牌没有次数限制",
            zhixi:"掷玺",
            "zhixi_info":"当你失去装备区的玉玺后，你可以弃置当前回合角色的所有牌，然后摸两张牌",
        },
    },
    intro: "<li>本扩展在大佬的“国战补充”基础上删掉部分过强武将，削弱部分技能强度，修改部分武将技能，整体强度介于官方变包和权包之间<li>本扩展旨在将部分身份局武将迁移加入国战将池，增加国战可玩度。<li>新增主副将武将：徐庶、钟会（副将技参考自国战权包）、关银屏、sp孙尚香、李儒<li>技能修改：诸葛果祈禳、诸葛瑾缓释、诸葛恪黩武、曹节守玺掷玺、陈宫智迟<li>技能削弱：诸葛瑾明哲<li>武将血量调整：曹真→5<li>扩展武将王双、杨仪、孙桓、武安国（请把相应武将图片放至image/character文件夹下）",
    author:"123&我叫竹小二",
    diskURL:"",
    forumURL:"",
    version:"2019.10.10",
},files:{"character":[],"card":[],"skill":[]}}})
