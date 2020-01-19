game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"血色衣冠",editable:false,content:function (config,pack){
	  // ---------------------------------------兵种模式------------------------------------------//
	if(['identity','guozhan','versus','boss'].contains(lib.config.mode)&&config.XSbingzhong){
		var skill={
		XSarms:{
			marktext:"兵",
			intro:{
				content:function (content,player){
					var storage=player.storage.XSarms;
					var num=player.storage.XSarms1;
					var str='剩余冷却：<span class="bluetext">'+num+'</span><br>';
					str+=get.translation(storage)+'：'+get.skillInfoTranslation(storage);
					return str;
				},
			},
			group:['XSarms1','XSarms2','XSarms3'],
		},
		XSarms1:{
			trigger:{
				player:["phaseBegin","damageEnd"],
			},
			priority:10,
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.XSarms1>0;
			},
			content:function(){
				player.storage.XSarms1--;
				if(player.storage.XSarms1<0) player.storage.XSarms1=0;
			}
		},
		XSarms2:{
			enable:"phaseUse",
			usable:1,
			filter:function (event,player){
				return player.storage.XSarms1==0;
			},
			filterCard:true,
			selectCard:1,
			position:"h",
			check:function (card){
				return 8-get.value(card);
			},
			content:function (){
				'step 0'
				var armsList=['XSduanqiangbing','XSqingqibing','XSqingjibing','XSqingnubing','XSjinglan',
					'XSchongche','XSlouchuan'];
				armsList.sort(lib.sort.random);
				var num=player.maxHp;
				var list=armsList.splice(0,num);
				if(list.length){
					player.chooseControl(list).set('prompt','选择获得1个兵种');
				}
				'step 1'
				if(result.control) {
					if(!player.storage.XSarms) {
						player.storage.XSarms=result.control;
						player.addSkill(result.control);
					}
					else {
						player.removeSkill(player.storage.XSarms);
						player.storage.XSarms=result.control;
						player.addSkill(result.control);
					}
					game.log(player,'获得兵种','【'+get.translation(result.control)+'】');
					player.storage.XSarms1=Math.min(7,player.maxHp);
					player.addTempSkill('XSarms2_temp',{player:'phaseEnd'});
					player.markSkill('XSarms');
				}
			},
			ai:{
				order:10,
				result:{
		　　		player:function(player){
						if(player.hasSkillTag('extra_arm')) {
							return -1;
						}
						return 2;
					},
				},
			},
			subSkill:{
				temp:{
				},
			},
		},
		XSarms3:{
			enable:"phaseUse",
			usable:1,
			filter:function (event,player){
				return player.storage.XSarms&&!player.hasSkillTag('extra_arm')&&!player.hasSkill('XSarms2_temp');
			},
			filterCard:true,
			selectCard:1,
			position:"h",
			check:function (card){
				return 8-get.value(card);
			},
			content:function (){
				'step 0'
				if(player.hasSkillTag('qiangbing')) {
					var upList=['XSchangqingbing','XSjinweibing'];
				}
				if(player.hasSkillTag('qibing')) {
					var upList=['XSzhongqibing','XSgongqibing'];
				}
				if(player.hasSkillTag('jibing')) {
					var upList=['XSzhongjibing','XSwudoubing'];
				}
				if(player.hasSkillTag('nubing')) {
					var upList=['XSqiangnubing','XSnuche'];
				}
				if(player.hasSkillTag('yuangong')) {
					var upList=['XSjianlou','XStoushiche'];
				}
				if(player.hasSkillTag('jingong')) {
					var upList=['XSmushou','XStieche'];
				}
				if(player.hasSkillTag('jianchuan')) {
					var upList=['XSdoujian','XSmengchong'];
				}
				if(upList.length){
					player.chooseControl(upList).set('prompt','选择升级为何种兵种');
				}
				'step 1'
				if(result.control) {
					player.removeSkill(player.storage.XSarms);
					player.storage.XSarms=result.control;
					player.addSkill(result.control);
					game.log(player,'兵种升级为','【'+get.translation(result.control)+'】');
				}
			},
			ai:{
				order:9,
				result:{
					player:2,
				},
			},
		},
		_XSarms:{
			trigger:{global:'gameStart'},
			forced:true,
			popup:false,
			filter:function(){
				return !_status.connectMode;
			},
			content:function(){
				player.addSkill('XSarms');
				player.storage.XSarms1=0;
			},
		},
		_XSkezhi:{
			trigger:{source:'damageEnd'},
			forced:true,
			popup:false,
			filter:function(event,player){
				if(_status.connectMode) return false;
				if(event.card&&event.card.name=='sha'&&event.notLink()) {
					return event.player.storage.XSarms&&player.storage.XSarms;
				}
			},
			content:function(){
				if(trigger.player.hasSkillTag('qiangbing')) {
					if(player.hasSkillTag('jibing')||player.hasSkillTag('nubing')) player.draw();
				}
				if(trigger.player.hasSkillTag('qibing')) {
					if(player.hasSkillTag('qiangbing')||player.hasSkillTag('nubing')) player.draw();
				}
				if(trigger.player.hasSkillTag('jibing')) {
					if(player.hasSkillTag('qibing')||player.hasSkillTag('nubing')) player.draw();
				}
				if(trigger.player.hasSkillTag('nubing')) {
					if(player.hasSkillTag('qiangbing')||player.hasSkillTag('qibing')||player.hasSkillTag('jibing')) player.draw();
				}
				if(trigger.player.hasSkillTag('yuangong')) {
					if(player.hasSkillTag('jingong')) player.draw();
				}
				if(trigger.player.hasSkillTag('jingong')) {
					if(player.hasSkillTag('jianchuan')) player.draw();
				}
				if(trigger.player.hasSkillTag('jianchuan')) {
					if(player.hasSkillTag('yuangong')) player.draw();
				}
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(card.name=='sha'){
							if(player.hasSkillTag('qiangbing')) {
								if(target.hasSkillTag('qibing')||target.hasSkillTag('nubing')) return [1,0,1,1];
							}
							if(player.hasSkillTag('qibing')) {
								if(target.hasSkillTag('jibing')||target.hasSkillTag('nubing')) return [1,0,1,1];
							}
							if(player.hasSkillTag('jibing')) {
								if(target.hasSkillTag('qiangbing')||target.hasSkillTag('nubing')) return [1,0,1,1];
							}
							if(player.hasSkillTag('nubing')) {
								if(target.hasSkillTag('qiangbing')||target.hasSkillTag('qibing')||target.hasSkillTag('jibing')) return [1,0,1,1];
							}
							if(player.hasSkillTag('yuangong')) {
								if(target.hasSkillTag('jianchuan')) return [1,0,1,1];
							}
							if(player.hasSkillTag('jingong')) {
								if(target.hasSkillTag('yuangong')) return [1,0,1,1];
							}
							if(player.hasSkillTag('jianchuan')) {
								if(target.hasSkillTag('jingong')) return [1,0,1,1];
							}
						}
					}
				}
			}
		},
		XSduanqiangbing:{
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			filter:function (event,player){
				return event.card&&event.card.name=='sha'&&event.num>0;
			},
			content:function (){
				var num=trigger.num;
				if(Math.random()<=num*0.20) {
					trigger.player.addTempSkill('XSduanqiangbing_skip',{player:'phaseEnd'});
				}
			},
			subSkill:{
				skip:{
					trigger:{
						player:["phaseUseBefore"],
					},
					direct:true,
					content:function(){
						trigger.cancel();
					},
					sub:true,
				},
			},
			ai:{
				"qiangbing":true,
			},
		},
		XSchangqingbing:{
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			filter:function (event,player){
				return event.card&&event.card.name=='sha'&&event.num>0;
			},
			content:function (){
				var num=trigger.num;
				if(Math.random()<=num*0.35) {
					trigger.player.addTempSkill('XSduanqiangbing_skip',{player:'phaseEnd'});
				}
			},
			ai:{
				"qiangbing":true,
				"extra_arm":true,
			},
		},
		XSjinweibing:{
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			filter:function (event,player){
				return event.card&&event.card.name=='sha'&&event.num>0;
			},
			content:function (){
				var num=trigger.num;
				if(Math.random()<=num*0.20) {
					trigger.player.addTempSkill('XSduanqiangbing_skip',{player:'phaseEnd'});
				}
			},
			ai:{
				"qiangbing":true,
				"extra_arm":true,
			},
			group:["XSjinweibing_dam"],
			subSkill:{
				dam:{
					trigger:{
						player:"damageEnd",
					},
					priority:-1,
					filter:function (event){
						return event.card&&event.card.name=='sha'&&event.num>0;
					},
					forced:true,
					content:function (){
						var num=trigger.num;
						if(Math.random()<=num*0.20) {
							trigger.source.addTempSkill('XSduanqiangbing_skip',{player:'phaseEnd'});
						}
					},
					sub:true,
				},
			},
		},
		XSqingqibing:{
			mod:{
				cardUsable:function (card,player,num){
					if(card.name=='sha') return num+1;
				},
			},
			ai:{
				"qibing":true,
			},
		},
		XSzhongqibing:{
			mod:{
				cardUsable:function (card,player,num){
					if(card.name=='sha') return num+2;
				},
			},
			ai:{
				"qibing":true,
				"extra_arm":true,
			},
		},
		XSgongqibing:{
			mod:{
				cardUsable:function (card,player,num){
					if(card.name=='sha') return num+1;
				},
				selectTarget:function(card,player,range){
					if(card.name=='sha'&&get.suit(card)=='club') range[1]++;
				},
			},
			ai:{
				"qibing":true,
				"extra_arm":true,
			},
		},
		XSqingjibing:{
			trigger:{
				player:"phaseDiscardBefore",
			},
			forced:true,
			filter:function(event,player){
				return player.countUsed('sha')==0;
			},
			content:function(){
				trigger.cancel();
			},
			ai:{
				"jibing":true,
			},
		},
		XSzhongjibing:{
			trigger:{
				player:"phaseDiscardBefore",
			},
			frequent:true,
			filter:function(event,player){
				var num=player.getStat('damage');
				return !num||num<2;
			},
			content:function(){
				trigger.cancel();
			},
			ai:{
				"jibing":true,
				"extra_arm":true,
			},
		},
		XSwudoubing:{
			trigger:{
				player:"phaseDiscardBefore",
			},
			frequent:true,
			filter:function(event,player){
				return player.countUsed('sha')==0;
			},
			content:function(){
				trigger.cancel();
			},
			ai:{
				"jibing":true,
				"extra_arm":true,
			},
			group:["XSwudoubing_sha"],
			subSkill:{
				sha:{
					trigger:{
						target:"useCardToBefore",
					},
					direct:true,
					priority:-1,
					filter:function (event,player){
						return event.card.name=='sha';
					},
					content:function (){
						player.chooseToUse({name:'sha'},trigger.player,-1,'对'+get.translation(trigger.player)+'使用1张杀').set('targetRequired',false);
					},
					sub:true,
				},
			},
		},
		XSqingnubing:{
			mod:{
				targetInRange:function (card){
					if(card.name=='sha') return true;
				},
			},
			ai:{
				"nubing":true,
				"extra_arm":true,
			},
		},
		XSqiangnubing:{
			mod:{
				targetInRange:function (card){
					if(card.name=='sha') return true;
				},
			},
			trigger:{player:'shaBefore'},
			forced:true,
			priority:10,
			filter:function(event){
				return event.card.name=='sha';
			},
			content:function(){
				player.addTempSkill('unequip','shaAfter');
			},
			ai:{
				"nubing":true,
			},
		},
		XSnuche:{
			mod:{
				targetInRange:function (card){
					if(card.name=='sha') return true;
				},
			},
			trigger:{
				target:"useCardToTargeted",
			},
			filter:function (event,player){
				return event.card.name=='sha'&&!player.hasSkill('XSnuche_temp');
			},
			frequent:true,
			content:function (){
				trigger.getParent().excluded.add(player);
				player.addTempSkill('XSnuche_temp',{player:'phaseBefore'});
			},
			ai:{
				"nubing":true,
				"extra_arm":true,
			},
			subSkill:{
				temp:{
				},
			},
		},
		XSjinglan:{
			enable:['chooseToUse'],
			prompt:function(){
				return '将1张普通杀当作火杀使用';
			},
			position:'he',
			check:function(card,event){
				return 8-get.value(card);
			},
			viewAs:{name:'sha',nature:'fire'},
			filter:function(event,player){
				return player.countCards('h','sha')>0;
			},
			filterCard:function(card){
				return card.name=='sha'&&card.nature==null;
			},
			ai:{
				"yuangong":true,
			},
		},
		XSjianlou:{
			enable:['chooseToUse'],
			prompt:function(){
				return '将1张普通杀当作火杀使用';
			},
			position:'he',
			check:function(card,event){
				return 8-get.value(card);
			},
			viewAs:{name:'sha',nature:'fire'},
			filter:function(event,player){
				return player.countCards('h','sha')>0;
			},
			filterCard:function(card){
				return card.name=='sha'&&card.nature==null;
			},
			ai:{
				"yuangong":true,
				"extra_arm":true,
			},
			group:["XSjianlou_miss"],
			subSkill:{
				miss:{
					trigger:{
						player:"shaMiss",
					},
					direct:true,
					filter:function (event,player){
						if(event.parent.parent.name=='XSjianlou_miss') return false;
						return event.card&&event.card.name=='sha'&&event.card.nature=='fire';
					},
					content:function (){
						"step 0"
						event.list=[];
						if(trigger.target.next!=player){
							event.list.push('下家');
						}
						if(trigger.target.previous!=player){
							event.list.push('上家');
						}
						event.list.push('cancel');
						if(list.length>1){
							player.chooseControl(list).set('prompt','请选择要继续结算的角色').set('ai',function(){
								var event=_status.event;
								var player=_status.event.player;
								var trigger=_status.event.getTrigger();
								var att1=get.attitude(player,trigger.target.next);
								var att2=get.attitude(player,trigger.target.previous);
								if(att1<0&&event.list.contains('下家')) return '下家';
								if(att2<0&&event.list.contains('上家')) return '上家';
								return 'cancel';
							});
						}
						"step 1"
						if(result.control=='下家'){
							player.useCard(trigger.card,trigger.target.next,false);
						}
						else {
							if(result.control=='上家'){
								player.useCard(trigger.card,trigger.target.previous,false);
							}
							else{
								event.finish();
							}
						}
					},
					sub:true,
				},
			},
		},
		XStoushiche:{
			enable:['chooseToUse'],
			prompt:function(){
				return '将1张普通杀当作火杀使用';
			},
			position:'he',
			check:function(card,event){
				return 8-get.value(card);
			},
			viewAs:{name:'sha',nature:'fire'},
			filter:function(event,player){
				return player.countCards('h','sha')>0;
			},
			filterCard:function(card){
				return card.name=='sha'&&card.nature==null;
			},
			ai:{
				"yuangong":true,
				"extra_arm":true,
			},
			group:["XStoushiche_dam"],
			subSkill:{
				dam:{
					trigger:{
						source:"damageBegin",
					},
					filter:function (event,player){
						if(get.distance(player,event.player)<=1) return false;
						return event.card&&event.card.name=='sha'&&event.notLink()&&event.card.nature=='fire';
					},
					forced:true,
					content:function (){
						trigger.num++;
					},
					sub:true,
				},
			},
		},
		XSchongche:{
			trigger:{
				source:"damageEnd",
			},
			check:function (event,player){
				return get.attitude(player,event.player)<0;
			},
			filter:function (event,player){
				return event.player.isAlive()&&event.num>0&&event.player.countCards('h');
			},
			content:function (){
				var card=trigger.player.getCards('h').randomGet();
				player.showCards(card);
				trigger.player.discard(card);
			},
			ai:{
				"jingong":true,
			},
		},
		XSmushou:{
			trigger:{
				source:"damageEnd",
			},
			check:function (event,player){
				return get.attitude(player,event.player)<0;
			},
			filter:function (event,player){
				if(event.parent.name=='XSmushou') return false;
				return event.player.isAlive()&&event.num>0&&event.player.countCards('h');
			},
			content:function (){
				var card=trigger.player.getCards('h').randomGet();
				player.showCards(card);
				if(get.type(card)!='basic') {
					trigger.player.damage('fire');
				}
				trigger.player.discard(card);
			},
			ai:{
				"jingong":true,
				"extra_arm":true,
			},
		},
		XStieche:{
			trigger:{
				source:"damageEnd",
			},
			check:function (event,player){
				return get.attitude(player,event.player)<0;
			},
			filter:function (event,player){
				if(event.parent.name=='XStieche') return false;
				return event.player.isAlive()&&event.num>0&&event.player.countCards('h');
			},
			content:function (){
				var card=trigger.player.getCards('h').randomGet();
				player.showCards(card);
				if(get.type(card)=='basic') {
					trigger.player.$give(card,player);
					player.gain(card,trigger.player);
				}
				else {
					trigger.player.discard(card);
				}
			},
			ai:{
				"jingong":true,
				"extra_arm":true,
			},
		},
		XSlouchuan:{
			trigger:{
				player:"shaMiss",
			},
			usable:1,
			filter:function(event,player){
				return get.itemtype(event.cards)=='cards'||(event.responded&&get.itemtype(event.responded.cards)=='cards');
			},
			frequent:true,
			content:function (){
				var card=trigger.cards.slice(0);
				player.gain(card,'gain2','log');
			},
			ai:{
				"jianchuan":true,
			},
		},
		XSdoujian:{
			trigger:{
				player:"shaMiss",
			},
			usable:1,
			filter:function(event,player){
				return get.itemtype(event.cards)=='cards'||(event.responded&&get.itemtype(event.responded.cards)=='cards');
			},
			frequent:true,
			content:function (){
				var card=trigger.cards.slice(0);
				player.gain(card,'gain2','log');
				player.draw();
			},
			ai:{
				"jianchuan":true,
				"extra_arm":true,
			},
		},
		XSmengchong:{
			trigger:{
				player:"shaMiss",
			},
			usable:1,
			filter:function(event,player){
				return get.itemtype(event.cards)=='cards'||(event.responded&&get.itemtype(event.responded.cards)=='cards');
			},
			frequent:true,
			content:function (){
				"step 0"
				event.card=trigger.cards.slice(0);
				var translation=get.translation(event.card);
				player.chooseTarget("选择1名角色获得"+translation+"并摸1张牌",function(card,player,target){
					var target1=_status.event.getTrigger().target;
					return target!=player&&target!=target1;
				}).set('ai',function(target){
					var player=_status.event.player;
					return get.attitude(player,target);
				});
				"step 1"
				if(result.bool){
					result.targets[0].gain(event.card,'gain2','log');
					result.targets[0].draw();
				}
			},
			ai:{
				"jianchuan":true,
				"extra_arm":true,
			},
		},
	};
	var translate={
		XSarms:'兵种',
		XSarms2:'募兵',
		XSarms3:'强兵',
		XSduanqiangbing:'短枪兵',
		XSduanqiangbing_info:'当你的杀造成伤害后，目标有(20*X)%的概率跳过下1个出牌阶段（X为伤害数值）。类别：枪；克制：骑、弩。',
		XSchangqingbing:'长枪兵',
		XSchangqingbing_info:'当你的杀造成伤害后，目标有(35*X)%的概率跳过下1个出牌阶段（X为伤害数值）。类别：枪；克制：骑、弩。',
		XSjinweibing:'近卫兵',
		XSjinweibing_info:'当你的杀造成伤害后，目标有(20*X)%的概率跳过下1个出牌阶段；当你受到杀的伤害后，来源有(20*X)%的概率跳过下1个出牌阶段（X为伤害数值）。类别：枪；克制：骑、弩。',
		XSqingqibing:'轻骑兵',
		XSqingqibing_info:'每回合使用杀的次数+1。类别：骑；克制：戟、弩。',
		XSzhongqibing:'重骑兵',
		XSzhongqibing_info:'每回合使用杀的次数+2。类别：骑；克制：戟、弩。',
		XSgongqibing:'弓骑兵',
		XSgongqibing_info:'每回合使用杀的次数+1；你的♣杀可以指定2名角色。类别：骑；克制：戟、弩。',
		XSqingjibing:'轻戟兵',
		XSqingjibing_info:'弃牌阶段开始，若你本回合内未使用杀，你跳过弃牌阶段。类别：戟；克制：枪、弩。',
		XSzhongjibing:'重戟兵',
		XSzhongjibing_info:'弃牌阶段开始，若你本回合内造成的伤害不大于1，你可以跳过弃牌阶段。类别：戟；克制：枪、弩。',
		XSwudoubing:'武斗兵',
		XSwudoubing_info:'弃牌阶段开始，若你本回合内未使用杀，你跳过弃牌阶段；当你于回合外被指定为杀的目标时，可以对来源使用1张杀。类别：戟；克制：枪、弩。',
		XSqingnubing:'轻弩兵',
		XSqingnubing_info:'你使用杀无距离限制。类别：弩；克制：枪、骑、戟。',
		XSqiangnubing:'强弩兵',
		XSqiangnubing_info:'你使用杀无距离限制；你使用杀无视防具。类别：弩；克制：枪、骑、戟。',
		XSnuche:'弩车',
		XSnuche_info:'你使用杀无距离限制；每轮限1次，当你被指定为杀的目标时可以取消你为此杀目标。类别：弩；克制：枪、骑、戟。',
		XSjinglan:'井阑',
		XSjinglan_info:'出牌阶段，你可以将你的普通杀当作火杀使用。类别：远攻；克制：舰船。',
		XSjianlou:'箭楼',
		XSjianlou_info:'出牌阶段，你可以将你的普通杀当作火杀使用；当你的火杀被闪抵消后，你可以令此杀对与目标相邻且不为你的1名角色继续结算。类别：远攻；克制：舰船。',
		XStoushiche:'投石车',
		XStoushiche_info:'出牌阶段，你可以将你的普通杀当作火杀使用；当你的火杀对距离你不为1的角色造成伤害时，伤害+1。类别：远攻；克制：舰船。',
		XSchongche:'冲车',
		XSchongche_info:'当你的杀造成伤害后，你可以弃置目标1张手牌。类别：近攻；克制：远攻。',
		XSmushou:'木兽',
		XSmushou_info:'当你的杀造成伤害后，你可以弃置目标1张手牌，若此牌不为基本牌，你对其造成1点火伤害。类别：近攻；克制：远攻。',
		XStieche:'铁车',
		XStieche_info:'当你的杀造成伤害后，你可以弃置目标1张手牌；若此牌为基本牌，你获得之。类别：近攻；克制：远攻。',
		XSlouchuan:'楼船',
		XSlouchuan_info:'每回合限1次，当你的杀被闪抵消时，你可以获得此杀。类别：舰船；克制：近攻。',
		XSdoujian:'斗舰',
		XSdoujian_info:'每回合限1次，当你的杀被闪抵消时，你可以获得此杀并摸1张牌。类别：舰船；克制：近攻。',
		XSmengchong:'艨艟',
		XSmengchong_info:'每回合限1次，当你的杀被闪抵消时，你可以令1名其他角色获得此杀并摸1张牌。类别：舰船；克制：近攻。',
	};
		for(var i in skill){
			lib.skill[i]=skill[i];
		}
		for(var i in translate){
			lib.translate[i]=translate[i];
		}
	}

   lib.element.player.$logSkill=function(){
        var next=game.createEvent('$logSkill');
        next.player=this;
        for(var i=0;i<arguments.length;i++){
            if(get.itemtype(arguments[i])=='players'){
                next.targets=arguments[i];
            }
            else if(get.itemtype(arguments[i])=='player'){
                next.targets=[arguments[i]];
            }
            else if(typeof arguments[i]=='string'){
                next.skill=arguments[i];
            };
        };
        next.setContent(lib.element.event.$logSkill);
        return next;
    };
    lib.element.event.$logSkill=function(){
        event.trigger('$logSkill');
    };


// ---------------------------------------武将分栏------------------------------------------//

	if(config.XSYG){
		for(var i in lib.characterPack[ 'XSYG']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
},precontent:function (XS){
     if(XS.enable){
		game.import('character',function(){
			var XSYG={
				name:'XSYG',
				connect:true,
				character:{
					"XSmuhuali":["male","qun","3/5",["XSbishi","XShengge"],[]],
					"XSbizaiyu":["male","wu",4,["XSxiandeng","XSyongjiang"],[]],
					"XSweiwuji":["male","shu",4,["XSwanwei","XSbiju"],[]],
					"XSchuliji":["male","wei",3,["XSzhinang","XSkanyu"],[]],
					"XSmengke":["male","qun",3,["XSxingshan","XSrenshuo","XSquyi"],[]],
					"XSlanyu":["male","wu",4,["XSjichi","XSjugong"],[]],
					"XSzhangheng":["male","shu",3,["XSjingtian","XSweidi","XSjingsi"],[]],
					"XSyangsu":["male","wei",4,["XSqiaobian","XSbingji"],[]],
					"XShuishi":["male","qun",3,["XStongyi","XSfanlun"],[]],
					"XSlongju":["male","wu",4,["XSmengjin","XSzhuiji"],[]],
					"XSliyiji":["male","shu",3,["XSyoushui","XStongzhan","XSkuangke"],[]],
					"XSliurengui":["male","wei",4,["XShuoji","XSjieyong"],[]],
					"XSnanzi":["female","qun",4,["XShuoluan","XSbeiqi"],[]],
					"XSqinliangyu":["female","wu",4,["XSpingluan","XSnizhan"],[]],
					"XSlvzhi":["female","shu",3,["XSduji","XSlinchao","XSxumou"],[]],
					"XSmibazi":["female","wei",3,["XSdaizheng","XSjiyou","XStuiyin"],[]],
					"XSweiliao":["male","wei",3,["XSxiangmian","XSwujing"],[]],
					"XSmayuan":["male","shu",4,["XSduanshui","XSguoshi"],[]],
					"XSyudayou":["male","wu",4,["XSbaizhan","XSgangrou"],[]],
					"XSgoujian":["male","qun",4,["XSyinren","XSqiying"],[]],
					"XSlicunxu":["male","wei",4,["XSjianshi","XSjingong1"],[]],
					"XSsanghongyang":["male","shu",3,["XSzhengshui","XSxinsuan"],[]],
					"XSwentianxiang":["male","wu","2/4",["XSzhengqi","XSdanxin","XSchuishi"],[]],
					"XSdukang":["male","qun",3,["XSjiusheng","XSchunniang","XSwangyou"],[]],
					"XShanshizhong":["male","wu",4,["XSjiejiang","XSliqi"],[]],
					"XSzhangjuzheng":["male","wu",3,["XSchuangge","XSyibian","XSfuqing"],[]],
					"XSyuqian":["male","wu",4,["XSshuwei","XSlianjian"],[]],
					"XSsimaguang":["male","wu",3,["XSbolan","XStongjian","XSgufa"],[]],
					"XSyuxu":["male","shu",3,["XSzengzao","XSliaodi"],[]],
					"XSyangyouji":["male","qun",4,["XSchuanyang","XStujin"],[]],
					"XSyingbu":["male","wu","6/8",["XSzhanjiang1","XSxingkun"],[]],
					"XSduruhui":["male","wei",3,["XSmouduan","XSguojue","XShongliang"],[]],
					"XSwangshouren":["male","wu","3/5",["XSzhixing"],[]],
					"XSxuewen":["male","qun",3,["XSpincai","XSguangna","XSsanku"],[]],
					"XSbanchao":["male","shu",4,["XSdingyuan","XSpingrong"],[]],
					"XSsulie":["male","wei",4,["XSqinwang","XSzhenyi"],[]],
					"XSyinlihua":["female","shu",3,["XStanli","XSqianjie","XScihou"],[]],
					"XSxiexuan":["male","wu",4,["XSposhi","XSfubing"],[]],
					"XSfanju":["male","wei",3,["XSyazi","XSyuanjiao","XSjingong"],[]],
					"XSchenqingzhi":["male","qun",2,["XSbaipao","XSlizhan"],[]],
					"XSmenggong":["male","wu",4,["XSgongshu","XSqingtian"],[]],
					"XSfankuai":["male","shu",6,["XSyinzhi"],[]],
					"XSliji":["male","wei",4,["XStuishang","XSpingliao"],[]],
					"XSzhanghao":["male","qun",4,["XSyejian","XSpingbu"],[]],
					"XSgengyan":["male","shu",4,["XSqiaozhan","XSshijing"],[]],
					"XSfusu":["male","wei",4,["XSrenhou","XSsisheng"],['zhu']],
					"XSjiangxiaobai":["male","qun",4,["XSshouba","XSchuizhi"],['zhu']],
					"XSfanzeng":["male","wu",3,["XSqudou","XSlaomou"],[]],
					"XSweizhe":["male","shu",3,["XSshicheng","XSshouye","XShuashi"],[]],
					"XSmurongchui":["male","qun",5,["XSyonglue","XSchuben"],[]],
					"XSyelvchucai":["male","qun",3,["XSfubi","XSkuangzuo","XSwoxuan"],[]],
					"XSchangyuchun":["male","wu",4,["XSaozhan","XShengxing"],[]],
					"XSmengtian":["male","wei",4,["XSjihu","XSzhucheng"],[]],
					"XSweizifu":["female","shu",3,["XSyinxian","XSjiezhong","XSdashe"],[]],
					"XSpingyang":["female","wei",4,["XSnvjie","XSmujun"],[]],
					"XSlianghongyu":["female","wu",4,["XSfeizhao","XSzhigu"],[]],
					"XSyuji":["female","wu",3,["XSwujian","XSchuilian","XSjuebie"],[]],
					"XSwangzhaojun":["female","shu",3,["XSchusai","XSheqin","XSjingbing"],[]],
					"XSbaiqi":["male","wei",4,["XSzhanshen","XSgonggao"],[]],
					"XShanxin":["male","shu",4,["XSbingxian","XSdianbing","XSandu"],[]],
					"XSwuqi":["male","wei",3,["XSbingshen","XSxianji","XSwangchou"],[]],
					"XSsunwu":["male","wu",3,["XSbingsheng","XSzhijun","XSbingdian"],[]],
					"XSlianpo":["male","shu",4,["XSjianbi","XSlaoyi"],[]],
					"XSjiangshang":["male","qun",3,["XStiandao","XSyingxu","XSfengshen"],[]],
					"XSzhangji":["male","shu",3,["XSyisheng","XSlizhu"],[]],
					"XSxiangji":["male","wu",5,["XSbawang","XSwuqian"],['zhu']],
					"XSlijing":["male","wei",4,["XSjunshen","XSbenxi"],[]],
					"XSyuefei":["male","wu",4,["XSshenjiang","XSlianbing","XSzhaoxue"],[]],
					"XSqinqiong":["male","wei",4,["XSciqiu","XSfenyong"],[]],
					"XSyingzheng":["male","wei",4,["XSbingtun","XShengzheng"],['zhu']],
					"XSlishimin":["male","wei",4,["XStianming","XSxuhuai"],['zhu']],
					"XSsunbin":["male","qun",3,["XSxushi","XSjianzao","XSbinzu"],[]],
					"XStiandan":["male","qun",4,["XShuoniu","XSfuqi"],[]],
					"XSyueyi":["male","shu",4,["XSpozhu","XSgongxin"],[]],
					"XShuoqubing":["male","shu",4,["XSguanjun","XSchangqu"],[]],
					"XSgongshuban":["male","qun",3,["XSfaming","XSjiqiao"],[]],
					"XSyangzaixing":["male","wu",4,["XSxuezhan","XSxiaoyong"],[]],
					"XSmodi":["male","qun",3,["XSmoshou","XSjianai","XSfeigong"],[]],
					"XSzhuanzhu":["male","wu",3,["XSyuchang","XScuidu","XSsishi"],[]],
					"XSfanli":["male","qun",3,["XSshangcai","XSxiemei","XSzhouyin"],[]],
					"XSzhuyuanzhang":["male","wu",4,["XSweiya","XSyanshi","XSdingdu"],['zhu']],
					"XSshangyang":["male","wei",4,["XSbianfa","XSyizhi","XSlixin"],[]],
					"XSliubang":["male","shu",4,["XSweijia","XSjianyi"],['zhu']],
					"XSkongqiu":["male","qun",3,["XSzhisheng","XSrenli","XSshibiao"],[]],
					"XSlaodan":["male","qun",3,["XSdaozu","XSshangshan","XSchuguan"],[]],
					"XSliguang":["male","shu",4,["XSfeijiang","XSmocu"],[]],
					"XSlimu":["male","shu",4,["XSyoudi","XSlianque"],[]],
					"XSzhangliang":["male","shu",3,["XSmousheng","XSshensuan","XSdushan"],[]],
					"XSlimi":["male","wei",3,["XSguicai","XSfangyuan","XSyinshi"],[]],
					"XSsuqin":["male","qun",3,["XShezong","XSrujian","XSsijian"],[]],
					"XSzhangyi":["male","wei",3,["XSlianheng","XSkuolun","XSxiongbian"],[]],
					"XSlicunxiao":["male","wei",4,["XSmengzhe","XShenglian"],[]],
					"XSliuji":["male","wu",3,["XSbugua","XSxiuli","XSguomu"],[]],
					"XSxiaohe":["male","shu",3,["XShouqin","XSshicai","XSziwu"],[]],
					"XSchenping":["male","shu",3,["XSqicai","XSdiaohu","XSbaoshen"],[]],
					"XSwangjian":["male","wei",4,["XSpoguo","XSsuoci"],[]],
					"XStiemuzhen":["male","qun",4,["XStianjiao","XSyingong"],['zhu']],
					"XSzhaokuangyin":["male","wu",4,["XSrenzheng","XSshiquan"],['zhu']],
					"XSfujian":["male","qun",3,["XSshengxi","XSrenxian","XSchuijiang"],['zhu']],
					"XSxueli":["male","wei",4,["XSshenjian","XSweizhen"],[]],
					"XSouyezi":["male","qun",3,["XSzhujian","XSjujiang","XSjinggong"],[]],
					"XSranmin":["male","wei",5,["XSdoushen","XSyongjue"],[]],
					"XSqijiguang":["male","wu",4,["XSkedi","XSyuanyang"],[]],
					"XSliuxiu":["male","shu",4,["XStianzhao","XSxinglue"],['zhu']],
					"XSguanyiwu":["male","qun",3,["XSkuangshi","XStuba","XSzhijiao"],[]],
					"XSwangxu":["male","qun",3,["XSzongheng","XSbaihe","XSxiushen"],[]],
					"XShanfei":["male","wei",3,["XSfalun","XSshuonan","XSgufen"],[]],
					"XSlishizhen":["male","wu",3,["XSyaosheng","XSbencao","XSquji"],[]],
					"XSlinxiangru":["male","shu",3,["XSlunke","XSwanbi","XSxianghe"],[]],
					"XSxuda":["male","wu",4,["XSzhulu","XSlingzhi"],[]],
					"XSweirui":["male","qun",3,["XSshenhuo","XSwohu","XSxiaocheng"],[]],
					"XSxiean":["male","wu",3,["XSwangmen","XSdongshan","XSjiebing"],[]],
					"XSwangmeng":["male","qun",3,["XSwangzuo","XSjindao","XSyijiao"],[]],
					"XSfangqiao":["male","wei",3,["XSshanmou","XSyunchou","XSjunei"],[]],
					"XSweiqing":["male","shu",4,["XSquzhu","XSyangzhan"],[]],
					"XSyuchigong":["male","wei",4,["XSyongguan","XSduoshuo"],[]],
					"XSsimaqian":["male","shu",3,["XSzhushi","XSbingbi","XSzhishu"],[]],
					"XSxishi":["female","qun",3,["XShuoxin","XSluanmou","XSshuangqi"],[]],
					"XSmengjiangnv":["female","wei",4,["XStongku","XSbengcheng"],[]],
					"XSquping":["male","shu",3,["XSfusao","XStianwen","XSchennian"],[]],
					"XSsubutai":["male","qun",4,["XSgongao","XSbingfeng"],[]],
					"XSyueyun":["male","wu",4,["XSxiaoqi","XScanggong"],[]],
					"XSliuche":["male","shu",4,["XSxiongcai","XSguhuo","XSzuiji"],['zhu']],
					"XSlisi":["male","wei",3,["XSjianzhu","XSduxian","XSfenshu"],[]],
				},
characterSort:{
	XSYG:{
		XS_qslh:["XSlisi","XSyingzheng","XSfusu","XSbaiqi","XSmengtian","XSfanju","XSmengjiangnv","XSwangjian","XSzhangyi","XSshangyang","XSweiliao","XSmibazi","XSchuliji"],
		XS_chzb:["XSliubang","XSzhangliang","XSxiaohe","XShanxin","XSchenping","XSfankuai","XSxiangji","XSyuji","XSfanzeng","XSyingbu","XSlvzhi","XSliyiji","XSlongju"],
		XS_lhfy:["XSliuche","XSweiqing","XShuoqubing","XSsimaqian","XSliguang","XSzhangji","XSweizifu","XSliuxiu","XSyinlihua","XSgengyan","XSwangzhaojun","XSweizhe","XSbanchao","XSyuxu","XSsanghongyang","XSmayuan","XSzhangheng"],
		XS_wbct:["XSlishimin","XSliji","XSlijing","XSfangqiao","XSlicunxiao","XSxueli","XSyuchigong","XSpingyang","XSlimi","XSsulie","XSqinqiong","XSduruhui","XSlicunxu","XSliurengui","XSyangsu"],
		XS_txqs:["XSzhaokuangyin","XSyuefei","XSyueyun","XSyangzaixing","XSlianghongyu","XSmenggong","XSsimaguang","XShanshizhong","XSwentianxiang","XSbizaiyu"],
		XS_dmfh:["XSzhuyuanzhang","XSliuji","XSxuda","XSchangyuchun","XSlishizhen","XSqijiguang","XSwangshouren","XSyuqian","XSzhangjuzheng","XSyudayou","XSqinliangyu","XSlanyu"],
		XS_zzbj:["XSsunwu","XSwuqi","XSkongqiu","XSlaodan","XSmodi","XSwangxu","XSouyezi","XSgongshuban","XSquping","XShanfei","XShuishi","XSmengke"],
		XS_xqwl:["XSlinxiangru","XSlianpo","XSlimu","XSyueyi","XSzhuanzhu","XSjiangxiaobai","XSjiangshang","XSsuqin","XStiandan","XSsunbin","XSguanyiwu","XSfanli","XSxishi","XSxuewen","XSyangyouji","XSdukang","XSgoujian","XSnanzi","XSweiwuji"],
		XS_hxrj:["XSxiean","XSxiexuan","XSfujian","XSmurongchui","XSwangmeng","XStiemuzhen","XSsubutai","XSweirui","XSyelvchucai","XSzhanghao","XSchenqingzhi","XSranmin","XSmuhuali"],
	},
},

characterIntro:{
"XSmuhuali":
"大蒙古国名将、开国功臣。木华黎早年被父亲送给铁木真做“梯己奴隶”。他以沉毅多智、雄勇善战著称，与博尔术最受器重，被铁木真誉为“犹车之有辕，身之有臂。”四十年间追随铁木真，无役不从，辅佐铁木真统一蒙古诸部，战功卓著，与博尔术、博尔忽、赤老温并称“四杰”。成吉思汗元年，封为左翼万户长，为征金大元帅、太师、国王，赐九斿白纛，代成吉思汗施行恩威。经过六年征战，先后征服了金朝大部分国土。成吉思汗十八年，木华黎于凤翔之战结束后的班师途中病逝于闻喜县，时年五十四。",
"XSbizaiyu":
"南宋名将。毕再遇容貌魁伟，武艺超群。初以恩荫补官，隶属侍卫马军司。开禧二年，随军北伐，屡立战功，迁为武功大夫。后因功历任镇江都统制兼权山东、京东招抚司事及骁卫大将军等职。因其勇猛过人，熟知兵略，且善于驾驭兵将，威名远扬。嘉定元年，被任为左骁卫上将军、保康军承宣使。“嘉定和议”签订后，毕再遇屡请回归田里，均不准。嘉定六年，提举太平兴国宫。嘉定十年，以武信军节度使致仕。不久去世。累赠太师，谥号“忠毅”。",
"XSweiwuji":
"即信陵君，魏国公子，与春申君黄歇、孟尝君田文、平原君赵胜并称为“战国四公子”。是战国时期魏国著名的军事家、政治家，魏昭王少子、魏安釐王的异母弟。公元前276年，被封于信陵，所以后世皆称其为信陵君。魏无忌处于魏国走向衰落之时，他效仿孟尝君田文、平原君赵胜的辅政方法，延揽食客，养士数千人，自成势力。魏无忌礼贤下士、急人之困，曾在军事上两度击败秦军，分别挽救了赵国和魏国危局。但屡遭魏安釐王猜忌而未能予以重任。前243年，魏无忌因伤于酒色而死。十八年后，魏国为秦所灭。著有《魏公子兵法》。",
"XSchuliji":
"战国时期秦国宗室将领。能说会道，足智多谋，绰号“智囊”，擅长外交、军事。辅佐秦惠文王，拜为右更，攻取魏国曲沃、赵国蔺邑和楚国汉中，攻城略地，封于蜀郡严道县，号严君。秦武王即位后，驱逐张仪和魏章，任命战功卓著的樗里子为右丞相，精通韬略的甘茂为左丞相。二人相得益彰，推动大规模对外战争，扩张秦国版图，为后来秦国统一中国打下坚实根基。秦昭襄王元年，拜为丞相，主持朝政和宗族事务。七年，去世，葬于渭水南岸章台之东，后世堪舆家尊之为“樗里先师”。著有作品《青鸟经》，传于世。",
"XSmengke":
"战国时期著名哲学家、思想家、政治家、教育家，儒家学派的代表人物之一，地位仅次于孔子，与孔子并称“孔孟”。宣扬“仁政”，最早提出“民贵君轻”的思想。韩愈《原道》将孟子列为先秦儒家继承孔子“道统”的人物，元朝追封孟子为“亚圣公·树宸”，尊称为“亚圣”，《孟子》一书，属语录体散文集，是孟子的言论汇编，由孟子的弟子共同编写完成，倡导“以仁为本”。代表作有《鱼我所欲也》《得道多助，失道寡助》《寡人之于国也》等。",
"XSlanyu":
"明朝开国将领。有胆有谋，勇敢善战，屡立战功。于捕鱼儿海中大破北元，基本摧毁其职官体系而名震天下。洪武十二年封永昌侯，洪武二十年拜征虏大将军。洪武二十一年拜大将军、凉国公。蓝玉为常遇春的妻弟，而常遇春是太子朱标岳父，所以作为太子妃舅父，蓝玉极力维护太子的储君地位，与早已觊觎皇位的燕王交恶。朱元璋给儿子朱标组建当时明朝超一流的武人集团班底，作为儿子继承大统彻底清除北元的预备。然太子死皇孙幼，朱标太子的武人集团班底全部被屠戮干净，最后落了个周亚夫的下场。",
"XSzhangheng":
"中国东汉时期伟大的天文学家、数学家、发明家、地理学家、文学家。张衡在天文学方面著有《灵宪》、《浑仪图注》等，数学著作有《算罔论》，文学作品以《二京赋》、《归田赋》等为代表。《隋书·经籍志》有《张衡集》14卷，久佚。明人张溥编有《张河间集》，收入《汉魏六朝百三家集》。张衡为中国天文学、机械技术、地震学的发展作出了杰出的贡献，发明了浑天仪、地动仪，是东汉中期浑天说的代表人物之一。被后人誉为“木圣”（科圣）。",
"XSyangsu":
"隋朝权臣、诗人、军事家。北魏谏议大夫杨暄之孙、北周骠骑大将军杨敷之子。出身弘农杨氏，不拘小节，胸怀大志。初仕北周，拜车骑将军、仪同三司，参加平定北齐之役，与族兄杨坚深相结纳。隋朝建立后，升御史大夫。开皇八年，以行军元帅身份，率水军东下攻灭陈朝，以功拜荆州总管，封越国公。暗中帮助晋王杨广，夺嫡成为太子。杨广即位后，领兵讨平汉王杨谅叛乱，拜尚书令、太师、司徒，封楚国公。",
"XShuishi":
"战国时期著名的政治家、哲学家，名家思想的开山鼻祖和主要代表人物。惠施是合纵抗秦的最主要的组织人和支持者。他主张魏国、齐国和楚国联合起来对抗秦国，并建议齐、魏互尊为王。魏惠王在位时，惠施因为与张仪不和而被驱逐出魏国，他首先到楚国，后来回到家乡宋国，并在宋国国都商丘与老乡庄子成为朋友。公元前三一九年魏惠王死后，由于东方各国的支持，魏国改用公孙衍为相国，张仪失宠离去，惠施重回魏国。",
"XSlongju":
"秦朝末年将领，西楚霸王项羽手下猛将。自幼跟随项羽，一起长大，情若兄弟。参加项梁起义，联合田荣大破秦军于东阿。在九江王英布背楚归汉之时，龙且率军十万大破之，联合曹咎、周殷同为大司马。在听闻韩信平定河北、吞赵灭齐之后，龙且奉命率兵攻打齐地。公元前203年，参加潍水之战，陷入韩信水淹围城之计，力战汉军诸将，终为汉军骑将丁复所杀。龙且之死，敲响了西楚灭亡的丧钟，项羽大为伤感。",
"XSliyiji":
"中国历史上的著名说客。刘邦攻打陈留时，率众跟随，献计攻克陈留郡和贡献大批军粮，封为广野君，以三寸之舌游说列国，为刘邦建立灭秦抗楚“统一战线”做了重大贡献；出面劝降秦国守将，辅佐刘邦攻破武关，率先攻破咸阳，灭亡秦朝。楚汉相争时期，建议夺取荥阳，占据敖仓，夺取有利据点和粮食补给，为日后逆转形势、反败为胜奠定基础。奉命出使齐国，劝齐王田广以七十余城归顺。汉王四年，大将军韩信攻打齐国，导致郦食其为齐王田广烹杀，时年六十五岁，归葬于雍丘。",
"XSliurengui":
"唐朝宰相、名将，汉章帝刘炟之后。他恭谨好学，博涉文史，直言敢谏。唐太宗时，累官至给事中。唐高宗即位后，历任青州刺史、带方州刺史、同中书门下三品、西京留守、文昌左相等职，封乐城郡公。镇守百济期间，他因救援新罗，并在白江口之战大败倭国、百济联军而名震天下。垂拱元年（685年），刘仁轨逝世，年八十四。册赠开府仪同三司、并州大都督。唐中宗即位，加赠太尉。唐玄宗时，追谥“文献”。天宝六载（747年），配享高宗庙廷。撰有《行年记》、《永徽留本司格后本》等，今已佚。",
"XSnanzi":
"春秋时期女政治家。南子原是宋国公主，后嫁卫灵公为夫人。南子生性淫乱，与宋国公子朝私通。卫灵公不加阻止，反而纵容南子，召公子朝与其在洮地相会。卫灵公的太子蒯聩知道南子私通之事后，非常愤怒，便和家臣戏阳速商量，在朝见南子时趁机刺杀她。结果戏阳速反悔没有行动，被南子所察觉，蒯聩于是逃亡宋国，卫灵公将蒯聩党羽全部赶走。孔子周游列国时，曾访问卫国，南子与孔子隔帐见面。南子叩头还礼时，身上佩饰发出清脆响声，孔子学生子路对此颇为不满。后来孔子认为卫灵公不是爱好德行如爱好美色一样，于是离开卫国。",
"XSqinliangyu":
"明朝末年著名女将。丈夫马千乘是汉伏波将军马援后人，世袭石砫宣慰使（俗称土司），马千乘被害后，因其子马祥麟年幼，秦良玉于是代领夫职。秦良玉率领兄弟秦邦屏、秦民屏先后参加抗击清军、奢崇明之乱、张献忠之乱等战役，战功显赫，被封为二品诰命夫人。崇祯皇帝曾作诗四首赞颂秦良玉。历朝历代修史，女性名人都是被记载到列女传里，而秦良玉是历史上唯一一位作为王朝名将被单独立传记载到正史将相列传里的巾帼英雄。",
"XSlvzhi":
"汉高祖刘邦在位时的皇后，高祖死后，被尊为皇太后，是中国历史上有记载的第一位皇后和皇太后。同时吕雉也是秦始皇统一中国，实行皇帝制度之后，第一个临朝称制的女性，被司马迁列入记录帝王政事的本纪，后来班固作汉书仍然沿用。她开启了汉代外戚专权的先河。吕雉统治期间实行黄老之术与民休息的政策，废除挟书律，下令鼓励民间藏书、献书，恢复旧典。为后来的文景之治打下了很好的基础，司马迁在《史记·吕太后本纪》中对她的评价是“政不出房户，天下晏然；刑罚罕用，罪人是希；民务稼穑，衣食滋殖”，给予吕后施政极大的肯定。",
"XSmibazi":
"战国时期秦国王太后，秦惠文王之妾，秦昭襄王之母。前306年，秦武王因举鼎而死。因秦武王无子，他的弟弟们争夺王位。赵武灵王派代郡郡相赵固将在燕国作为人质的公子稷送回秦国。在宣太后异父弟魏冉的帮助下，公子稷继位，即秦昭襄王。魏冉随后平定了王室内部争夺君位的动乱，诛杀惠文后及公子壮、公子雍，将秦武王后驱逐至魏国，肃清了与秦昭襄王不和的诸公子。因秦昭襄王年幼，由宣太后以太后之位主政，魏冉辅政。秦昭襄王即位之初，宣太后以太后之位主政，执政期间，攻灭义渠国，一举灭亡了秦国的西部大患。死后葬于芷阳骊山。",
"XSweiliao":
"著名的军事家。秦王政十年入秦游说，被任为国尉后，因称尉缭。他所著的《尉缭子》一书，在古代就被列入军事学名著，受到历代兵家推崇，与《孙子》、《吴子》、《司马法》等在宋代并称为《武经七书》。古代多以官名作为姓名，如宗正此姓，源于汉朝刘德，官至宗正，为九卿之一，即主持皇家宫室事务的官员。刘德的支庶子孙有的以祖上官职名命姓，称宗正氏，后来加文而为宗政氏。尉缭之父、爷爷、太爷均在魏国担任国尉职位，而后尉缭又在秦国担任国尉之职，故人多以称之尉缭。",
"XSmayuan":
"西汉末年至东汉初年著名军事家，东汉开国功臣之一。新朝末年，马援投靠陇右军阀隗嚣麾下，甚得其器重。后归顺光武帝刘秀，为刘秀统一天下立下了赫赫战功。统一之后，马援虽已年迈，但仍请缨东征西讨，西破陇羌，南征交趾，北击乌桓，官至伏波将军，封新息侯，世称“马伏波”。其老当益壮、马革裹尸的气概，受到后人的崇敬。建武二十五年，马援在讨伐五溪蛮时身染重病，不幸逝世。死后遭人构陷，被刘秀收回新息侯印绶，直到汉章帝时才获得平反，追谥“忠成”。",
"XSyudayou":
"明代抗倭名将，军事家、武术家、诗人、民族英雄。俞大猷一生与倭寇作战，战功显赫，率领“俞家军”能将敌人吓退，与戚继光并称为“俞龙戚虎”，扫平了为患多年、趁机作乱的伪倭寇。俞大猷战功累累，常被弹劾，遭到免官，被人冒领军功，从不计较。创立兵车营，设计创造用兵车对付骑兵的战术。官授平蛮将军，死后被追谥为武襄。著有《兵法发微》《剑经》《洗海近事》《续武经总要》等军事、武术作品。",
"XSgoujian":
"春秋末年越国国君。公元前496年，越王勾践即位，同年，在檇李大败吴师。越王勾践三年，被吴军败于夫椒，被迫向吴求和。三年后被释放回越国，返国后重用范蠡、文种，卧薪尝胆使越国国力渐渐恢复起来。越王勾践十五年，吴王夫差兴兵参加黄池之会，以彰显武力率精锐而出。越王勾践抓住机会率兵而起，大败吴师。夫差仓卒与晋国定盟而返，与勾践连战惨败，不得已与越议和。越王勾践十九年，勾践再度率军攻打吴国，在笠泽之战三战三捷大败吴军主力。越王勾践二十四年，破吴都，迫使夫差自尽，灭吴称霸。",
"XSlicunxu":
"唐末五代军事家。李存勖骁勇善战，长于谋略，继承王位十五年，南击后梁、北却契丹、东取河北、西并河中，使得晋国逐渐强盛，中兴唐朝霸业。同光元年四月在魏州称帝，定国号为唐，史称后唐，并于同年十二月灭亡后梁，尽取河南、山东等地，定都于洛阳。李存勖在位期间，并岐国，灭前蜀，得凤翔、汉中及两川之地，震动南方割据诸国。但他沉湎于声色，治国乏术，用人无方，纵容皇后干政，重用伶人、宦官，疏忌杀戮功臣，横征暴敛，又吝惜钱财，以致百姓困苦、藩镇怨愤、士卒离心，同光四年四月死于兴教门之变，时年四十二岁。",
"XSsanghongyang":
"西汉时期政治家、理财专家。出身商人家庭，十三岁时以精于心算入侍宫中，自元狩三年起，在汉武帝大力支持下，先后推行算缗、告缗、盐铁官营、均输、平准、币制改革、酒榷等经济政策，同时组织六十万人屯田戍边，防御匈奴。这些措施都在不同程度上取得了成功，大幅度增加了政府的财政收入，为武帝继续推行文治武功事业奠定了雄厚的物质基础。后元二年，汉昭帝即位，桑弘羊迁任御史大夫，与霍光、金日磾等同为辅政大臣。",
"XSwentianxiang":
"南宋末政治家、文学家。宝祐四年进士第一。德祐元年，元军沿长江东下，文天祥罄家财为军资，招勤王兵至5万人，入卫临安。旋为浙西、江东制置使兼知平江府。遣将援常州，因淮将张全见危不救而败，退守余杭。景炎二年五月，再攻江西，终因势孤力单，败退广东。祥兴元年十二月，在五坡岭被俘。次年，元军将其押赴厓山，令招降张世杰。文天祥拒之，书《过零丁洋》诗以明志。后被解至元大都，元世祖忽必烈亲自劝降，许以中书宰相之职。文天祥大义凛然，宁死不屈。元至元十九年十二月初九，于大都就义。终年47岁。",
"XSdukang":
"杜康，《史记》记载他是夏朝的国君，道家。杜康是中国古代传说中的“酿酒始祖”，汉《说文解字》载：“杜康始作秫酒。又名少康，夏朝国君，道家名人。”因杜康善酿酒，后世将杜康尊为酒神，制酒业则奉杜康为祖师爷。后世多以“杜康”借指酒。",
"XShanshizhong":
"南宋名将、词人。韩世忠身材魁伟，勇猛过人。出身贫寒，十八岁时应募从军。他英勇善战，胸怀韬略，在抗击西夏、金国的战争中为宋朝立下汗马功劳，又在平定各地叛乱中作出重大贡献。韩世忠为人耿直，不肯依附权臣秦桧，曾为岳飞遭陷害而鸣不平，史称其“固将帅中社稷臣也”。累迁至镇南、武安、宁国三镇节度使，封爵咸安郡王。晚年杜门谢客，口不谈兵，悠游西湖以自乐。绍兴二十一年，韩世忠逝世，年六十三。追赠太师、通义郡王。",
"XSzhangjuzheng":
"明朝政治家，改革家。嘉靖二十六年进士。隆庆六年代高拱为内阁首辅，晋中极殿大学士，一切军政大事均由张居正主持裁决，实行一系列改革措施。财政上，清仗田地、推行“一条鞭法”，总括赋、役，皆以银缴，“太仓粟可支十年，周寺积金，至四百余万”；军事上，任用戚继光、李成梁等名将镇北边，用凌云翼、殷正茂等平定西南叛乱；吏治上，实行综核名实。万历十年六月病逝，享年五十八岁，赠上柱国，谥文忠。明代唯一生前被授予太傅、太师的文官。死后被明神宗抄家，至明熹宗天启二年恢复名誉。",
"XSyuxu":
"东汉时期名臣。最初被太尉张禹召为郎中，历任朝歌县长、怀县令，平定朝歌叛乱。任武都太守，以增灶计大破羌军，安定一郡，治理武都政绩卓然，深受爱戴。后任司隶校尉、尚书仆射、尚书令等职，为官清正廉明，刚正不阿，多次得罪权贵。一生九次遭到斥责，三次被依法惩处，但他刚正的性格，一直到老都不改变。",
"XSsimaguang":
"北宋政治家、史学家、文学家。宋仁宗宝元元年，进士及第，累迁龙图阁直学士。宋神宗时，反对王安石变法，离开朝廷十五年，主持编纂了中国历史上第一部编年体通史《资治通鉴》。历仕仁宗、英宗、神宗、哲宗四朝，官至尚书左仆射兼门下侍郎。元祐元年，去世，追赠太师、温国公，谥号文正。名列“元祐党人”，配享宋哲宗庙廷，图形昭勋阁；从祀于孔庙，称“先儒司马子”；从祀历代帝王庙。",
"XSyuqian":
"明朝名臣、民族英雄。宣德元年，以御史职随明宣宗平定汉王朱高煦之乱，因严词斥责朱高煦而受宣宗赏识，升为巡按江西，颂声满道。土木之变后，英宗兵败被俘，他力排南迁之议，坚请固守，升任兵部尚书。明代宗即位，整饬兵备，部署要害，亲自督战，率师二十二万，列阵北京九门外，抵御瓦剌大军。瓦剌太师也先挟英宗逼和，他以“社稷为重，君为轻”，不许。也先无隙可乘，被迫释放英宗。天顺元年，英宗复辟，大将石亨等诬陷于谦谋立襄王之子，致使其含冤遇害。他与岳飞、张煌言并称“西湖三杰”。",
"XSyangyouji":
"春秋时期楚国将领，是中国古代著名的神射手。本是养国人，养国被楚国灭亡后，养由基成为楚国大夫。相传养由基能在百步之外射穿作标记的柳叶，并曾一箭射穿七层铠甲。《战国策·西周策》中记载：“楚有养由基者，善射，去柳叶百步而射之，百发百中。”百发百中、百步穿杨都出自这里。此人号“养一箭”，一箭就足以致胜。",
"XSyingbu":
"秦末汉初名将，早年坐罪，受到黥刑，俗称黥布。初随项梁起义，迎娶吴芮之女，拥立楚怀王继位，封为当阳君。项梁阵亡后，成为项羽帐下将领之一，屡破秦军，封为九江王。受到汉朝游说，叛楚归汉，为楚将龙苴所败。辅佐刘邦打败项羽，建立汉朝，封为淮南王，与韩信、彭越并称汉初三大名将。韩彭被杀后，心生畏惧。汉高帝十一年，起兵反叛，兵败被杀。",
"XSduruhui":
"唐朝初年名相。晋阳起兵后，成为秦王李世民幕府谋臣，跟随李世民平定薛仁杲、刘武周、王世充、窦建德叛乱，积极运筹帷幄，为时人所敬服。文学馆建立后，以为从事中郎，为秦王府十八学士之首。玄武门之变时，联合房玄龄参与策划，同居首功。唐太宗即位后，迁尚书右仆射，封蔡国公，配合房玄龄同心辅政，负责选拔人才、制定法度等。房玄龄善于谋划，杜如晦处事果断，并称“房谋杜断”。贞观四年，病逝，时年四十六，追赠司空、莱国公，谥号为成。贞观十七年，图形凌烟阁，位列第三。",
"XSwangshouren":
"明代著名的思想家、哲学家、书法家兼军事家、教育家。弘治十二年进士，历任刑部主事、贵州龙场驿丞、庐陵知县、右佥都御史、南赣巡抚、两广总督等职，晚年官至南京兵部尚书、都察院左都御史。因平定宸濠之乱等军功而封爵新建伯，隆庆时追赠侯爵。王守仁是明代心学集大成者，明代心学发展的基本历程，可以归结为：陈献章开启，湛若水完善，王阳明集大成。王守仁的学说思想王学（阳明学）的直接源头是陈献章与湛若水的“陈湛心学”，阳明心学和与陈献章的学说堪相一致，已是学界的共识。",
"XSxuewen":
"战国时期齐国贵族。因封袭其父爵于薛，又称薛公，号孟尝君。孟尝君依仗父亲留下的丰厚资产，在封地薛邑广招各国人才，门下有食客数千。秦昭王求贤若渴，听说孟尝君的名气，便想将他招揽到秦国来，封为丞相，不久逃归。后为齐湣王相国。曾联合韩、魏击败楚、秦。齐湣王七年因贵族田甲叛乱事，为湣王所疑，谢病归薛，不久出奔至魏，任相国。曾西合秦、赵与燕共伐破齐。齐襄王立，田文遂保持中立，不久复与莫联合相秦。死后诸子争立，领地薛为齐、魏共同攻灭。",
"XSbanchao":
"东汉时期著名军事家、外交家，史学家班彪的幼子，其长兄班固、妹妹班昭也是著名史学家。班超为人有大志，不修细节，但内心孝敬恭谨，审察事理。他口齿辩给，博览群书。不甘于为官府抄写文书，投笔从戎，随窦固出击北匈奴，又奉命出使西域，在三十一年的时间里，收复了西域五十多个国家，为西域回归，做出了巨大贡献。官至西域都护，封定远侯，世称“班定远”。",
"XSsulie":
"唐朝杰出的军事家。苏定方少年时便以骁勇善战及气魄惊人闻名，曾随父征讨叛贼，安定乡里。显庆二年，累功升任行军大总管，开始独当一面，并以其非凡战绩和正直为人深受唐高宗的赏识与信任，多次被委以重任。苏定方征西突厥、平葱岭、夷百济、伐高句丽，“前后灭三国，皆生擒其主”，史无前例地将唐朝的版图向西开拓至中亚咸海，国境直抵波斯，向东延伸至朝鲜半岛南部。此后，苏定方历任左骁卫大将军、左武卫大将军，封邢国公。晚年受命担任安集大使，全面负责对吐蕃的军事防御。",
"XSyinlihua":
"光武帝刘秀元配，东汉第二任皇后。史称阴丽华以美貌著称，刘秀尚未发迹时，就十分仰慕她的美貌，曾感叹道：“娶妻当得阴丽华。”新莽末年，天下大乱，刘秀亦于家乡起兵。昆阳之战后，刘秀于宛城迎娶阴丽华为妻。东汉建立后，阴丽华受封贵人。建武十七年，皇后郭圣通被废，刘秀封阴丽华为皇后。汉明帝即位后，尊阴丽华为皇太后，共在位二十四年。永平七年正月，阴丽华崩逝，年六十。同年二月，与刘秀合葬于原陵，谥号“光烈”。据《后汉书》记载：阴丽华生性仁爱孝顺，怜悯慈爱。性格恭谨俭约，“少嗜玩，不喜笑谑”。有贤后之名。",
"XSxiexuan":
"东晋名将，豫州刺史谢奕之子、太傅谢安之侄。谢玄有经国才略，善于治军。太元二年，为抵御前秦袭扰，谢安荐谢玄为建武将军、兖州刺史，领广陵相，监江北诸军事。他招募北来民众中的骁勇之士，组建训练一支精锐部队，号为“北府兵”。太元四年，率兵击败前秦军的进攻，进号冠军将军，加领徐州刺史。淝水之战中，谢玄任前锋都督，先遣部将刘牢之率部夜袭洛涧，首战告捷。继而抓住战机，计诱前秦军后撤，乘势猛攻，取得以少胜多的巨大战果。太元九年，率兵为前锋，乘胜开拓中原，先后收复了今河南、山东、陕西南部等地区。后因病改任左将军、会稽内史。",
"XSfanju":
"著名政治家、军事谋略家，秦国宰相。他主张将韩、魏作为秦国兼并的主要目标，同时应该与齐国等保持良好关系。范遂被拜为客卿，之后，他又提醒昭王，秦国的王权太弱，需要加强王权。秦昭王遂于前266年废太后，并将国内四大贵族赶出函谷关外，拜范雎为相。范雎为人恩怨分明，掌权后先羞辱魏使须贾，之后又迫使魏齐自尽。又举荐郑安平出任秦国大将，王稽出任河东郡守。前262年，长平之战爆发，两军对垒三年后，范雎以反间计使赵国启用无实战能力的赵括代廉颇为将，使得白起大破赵军。长平战后，范雎妒忌白起的军功，借秦昭王之命迫使白起自杀。",
"XSchenqingzhi":
"南北朝时期南朝梁将领。出身寒门，少为梁武帝萧衍随从，颇受信任。梁普通年间，任武威将军、宣猛将军等职，带兵有方，善抚军士。梁大通二年十月，为飙勇将军，奉命护送降梁的魏北海王元颢北还。次年四月，自铚县至梁国，击败拥兵7万、筑垒9座的魏将丘大千。在考城大败魏将元晖业2万人。五月，连拔荥阳、虎牢二城，长驱直入，护送元颢到洛阳。至此，平三十二城，四十七战，所向无前。陈庆之身体文弱，难开普通弓弩，不善于骑马和射箭，但是却富有胆略，善筹谋，带兵有方，是一位深得众心的儒将。",
"XSmenggong":
"南宋军事家，民族英雄，抗金、抗蒙名将。孟珙出身将门，曾祖孟安、祖父孟林都为岳飞部将。孟珙早年随父抗金，并参与灭金的蔡州之战。宋蒙战争爆发后，孟珙以一人之力统御南宋三分之二战线上的战事，由于其在抵抗蒙古军的杰出表现，被后世军史家称之“机动防御大师”。累官枢密都承旨、京西湖北路安抚制置使，四川宣抚使兼知夔州，封汉东郡开国公。淳祐四年，兼知江陵府。后以宁武军节度使致仕。淳祐六年，孟珙病逝，年五十二。后特赠太师、吉国公，谥号“忠襄”。",
"XSfankuai":
"出身寒微，早年曾以屠狗为业。西汉开国元勋，大将军，左丞相，著名军事统帅。为吕后妹夫，深得汉高祖刘邦和吕后信任。后随刘邦平定臧荼、卢绾、陈豨、韩信等，为刘邦麾下最勇猛的战将。早年以屠宰狗为业，曾在鸿门宴时出面营救汉高祖刘邦。封舞阳侯，谥武侯。四川宣汉县有樊哙镇。",
"XSliji":
"唐朝初年名将，与卫国公李靖并称。李勣早年投身瓦岗军，后随李密降唐。一生历事唐高祖、唐太宗、唐高宗三朝，深得朝廷信任和重任。他随唐太宗李世民平定四方，两击薛延陀，平定碛北。后又大破东突厥、高句丽，成为唐朝开疆拓土的主要战将之一。他出将入相，功勋卓著，被朝廷倚为干城，为凌烟阁二十四功臣之一。历任兵部尚书、同中书门下三品、司空、太子太师等职，累封英国公。总章二年，李勣去世，年七十六。册赠太尉、扬州大都督，谥号“贞武”，陪葬昭陵。",
"XSzhanghao":
"十六国时期前秦将军，与邓羌齐名，并称“万人敌”。张蚝身强力壮又很矫捷，能够拽着牛倒退行走，城墙不论高低，都可翻越而过。初为后赵将领张平的养子，投降前秦之后，先后平定前秦宗室叛乱，攻灭前燕、代国，参与淝水之战。太元九年，迎接长乐公苻丕在晋阳称帝，被任命侍中、司空，上党郡公。太元十年，升任太尉。此后，史料找不到关于张蚝的记载。",
"XSgengyan":
"东汉开国名将、军事家，云台二十八将第四位。耿弇自幼喜好兵事，后劝父投奔刘秀，被任命为偏将军，跟随刘秀平定河北。建武元年，刘秀称帝，封耿弇为建威大将军、好畤侯。此后，耿弇败延岑、平齐鲁、攻陇右，为东汉的统一立下赫赫战功。建武十三年，耿弇辞去大将军职。永平元年，耿弇去世，谥曰愍侯。耿弇将围点打援、声东击西等战术发挥到了极致，受历代军界推崇，并被视为有志者事竟成的典范。",
"XSfusu":
"秦朝宗室大臣，秦始皇长子。刚毅勇武，信人而奋士。为人宽仁，有政治远见。直言劝谏父亲，反对坑杀“犯禁者四百六十余人”一事，触怒秦始皇。受命前往上郡，协助大将蒙恬修筑长城、抵御匈奴。秦始皇37年，秦始皇病逝后，遗诏扶苏治丧即位。中车府令赵高联合丞相李斯，拥立始皇第十八子胡亥登基，矫诏逼令扶苏自尽，葬于上郡。",
"XSjiangxiaobai":
"春秋五霸之首，春秋时齐国第十五位国君，齐桓公是姜太公吕尚的第十二代孙。在齐僖公长子齐襄公和僖公侄子公孙无知相继死于齐国内乱后，公子小白与公子纠争位，成功后即国君位。齐桓公任管仲为相，推行改革，实行军政合一和兵民合一的制度，使齐国逐渐强盛。齐桓公于前681年在北杏同宋、陈、蔡、邾四国诸侯会见，是为平定宋国的动乱。后宋国违背盟约，齐桓公便以周天子的名义率几国诸侯伐宋，迫使宋国求和，此即为“九合诸侯”的第一次。前679年，各诸侯与齐桓公在鄄地盟会，齐桓公从此成为天下诸侯的霸主。此外，齐桓公还灭了谭、遂、鄣等小国。",
"XSfanzeng":
"秦末农民战争中为项羽主要谋士，被项羽尊为“亚父”。公元前206，范增随项羽攻入关中，劝项羽消灭刘邦势力，未被采纳。后在鸿门宴上多次示意项羽杀刘邦，又使项庄舞剑，意欲借机行刺，终未获成功。汉三年，刘邦被困荥阳，用陈平计离间楚君臣关系，被项羽猜忌，范增辞官归里，途中病死。",
"XSweizhe":
"秦汉时道家代表人物，思想家，军事家，别称圯上老人、下邳神人，后被道教纳入神谱。《史记·留侯世家》称其避秦世之乱，隐居东海下邳。其时张良因谋刺秦始皇不果，亡匿下邳。于下邳桥上遇到黄石公。黄石公三试张良后，授与《太公兵法》，临别时有言：“十三年后，在济北谷城山下，黄石公即我矣。”张良后来以黄石公所授兵书助汉高祖刘邦夺得天下，并于十三年后，在济北谷城下找到了黄石，取而葆祠之。后世流传有黄石公《素书》和《黄石公三略》。",
"XSmurongchui":
"后燕开国皇帝、军事家，才兼文武，勇猛多谋。建元二年，讨伐宇文逸豆归，导致宇文部散亡。永和五年，乘着后赵皇帝石虎新丧内乱之机，献策攻打后赵，夺取幽州等地，不杀降卒，收服人心。元玺三年，封为吴王。建熙六年，随同太宰慕容恪合力攻破洛阳，拜征南大将军、荆州牧。建熙十年，打败东晋大司马桓温进攻，威名大振。朝廷内讧之际，西投前秦，深得前秦皇帝苻坚赏识。次年，前秦灭亡前燕，回到邺都，密图兴复。太元七年，力劝苻坚进攻东晋，发动淝水之战，屯据郧城，实力保存。建元二十年，建立后燕，亲率兵马，大败北魏，病卒于还师途中，时年七十一，谥号成武皇帝，庙号世祖。",
"XSyelvchucai":
"蒙古帝国时期的政治家。辽朝东丹王耶律倍八世孙、金朝尚书右丞耶律履之子。在金仕至左右司员外郎。蒙古军攻占金中都时，成吉思汗收耶律楚材为臣。耶律楚材先后辅弼成吉思汗父子三十余年，担任中书令十四年之久。提出以儒家治国之道并制定了各种施政方略，为蒙古帝国的发展和元朝的建立奠定了基础。乃马真后称制时，耶律楚材遭到排挤，渐失信任，他因此抑郁而死。后赠经国议制寅亮佐运功臣、太师、上柱国，追封广宁王，谥号“文正”。",
"XSchangyuchun":
"元末红巾军杰出将领，明朝开国名将。元顺帝至正十五年，归附朱元璋，自请为前锋，力战克敌，尝自言能将十万众，横行天下，军中称常十万，官至中书平章军国重事，兼太子少保，封鄂国公。洪武二年，北伐中原，暴卒军中，年仅四十，用宋太宗丧韩王赵普故事，追赠翊运推诚宣德靖远功臣、开府仪同三司、上柱国、太保、中书右丞相，追封开平王，谥号忠武，配享太庙。",
"XSmengtian":
"秦朝时期名将，上卿蒙骜之孙，内史蒙武之子。出身名将世家，自幼胸怀大志。率军攻破齐国，拜为内史，深得秦始皇宠信。秦统一六国后，率领三十万大军北击匈奴，收复河南之地，威震匈奴，誉为“中华第一勇士”。中国西北最早的开发者，是古代开发宁夏第一人。监修万里长城和九州直道，克服了国内交通闭塞的困境，大大促进了北方各族人民经济、文化的交流和融合。秦始皇去世后，中车令赵高、丞相李斯、公子胡亥暗中谋划政变，导致蒙恬吞药自杀。",
"XSweizifu":
"卫子夫是汉武帝刘彻的第二任皇后，史称孝武卫皇后，也是中国历史上第一位拥有独立谥号的皇后。卫子夫原为平阳公主家歌女。汉武帝刘彻十八岁时去探望平阳公主时，看上了卫子夫，卫子夫因此得以入宫，并于建元三年（前138年）封为夫人，元朔元年立为皇后。最后在征和二年卷入巫蛊之祸中，自杀身亡。谥思后，葬桐柏亭。身驻汉宫凡49年，在皇后位38年，育有一男三女。",
"XSpingyang":
"唐高祖李渊第三女，唐太宗李世民同母姐，母太穆皇后窦氏。祖籍邢州尧山，她是一个真正的巾帼英雄，也是中国古代第一位统领千军万马为自己父亲建立帝业的公主，才识胆略丝毫不逊色于她的兄弟们。中国万里长城的著名关隘娘子关就是因为她所率领的娘子军曾经在此驻守而得名。她是唐朝第一位死后有谥号的公主，是中国封建史上，唯一一个由军队为她举殡的女子，真正的生荣死哀。但她的名字和出生日期在记录其事迹的《旧唐书》和《新唐书》中没有记载。",
"XSlianghongyu":
"宋朝著名抗金女英雄，祖父与父亲都是武将出身，梁红玉自幼随父兄练就了一身功夫。史书中不见其名，只称梁氏。“红玉”是其战死后各类野史和话本中所取的名字，首见于明朝张四维所写传奇《双烈记》：“奴家梁氏，小字红玉。父亡母在，占籍教坊，东京人也。”后结识韩世忠，两人初次见面，是在平定方腊起义后的庆功宴上，梁红玉感其恩义，以身相许，韩赎其为妾，原配白氏死后成为韩世忠的正妻。",
"XSyuji":
"楚汉之争时期西楚霸王项羽的美人，曾在定四面楚歌的困境下一直陪伴在项羽身边，项羽为其作《垓下歌》。相传虞姬容颜倾城，才艺并重，舞姿美艳，并有“虞美人”之称。后人曾根据《垓下歌》，以及相传是虞姬所作的《和垓下歌》，臆想她的结局是公元前202年楚汉战争项羽兵败之际，在楚营内自刎，由此流传了一段关于“霸王别姬”的传说。",
"XSwangzhaojun":
"西汉南郡秭归人，与貂蝉、西施、杨玉环并称中国古代四大美女，是中国古代四大美女之一的“落雁”。成语中「沉鱼落雁」、「画工弃市」记载她的生平典故。竟宁元年正月，南匈奴呼韩邪单于来长安朝觐汉天子，自请为婿。元帝遂将昭君赐给了呼韩邪单于，并改元为竟宁。单于非常高兴，上书表示愿意永保塞上边境。王昭君抵达匈奴后，被称为宁胡阏氏。昭君和呼韩邪单于共同生活了三年，生下一子，取名伊屠智伢师，封为右日逐王。",
"XSbaiqi":
"战国时期杰出的军事家、“兵家”代表人物。熟知兵法，善于用兵，交好秦宣太后和穰侯魏冉的关系很好。辅佐秦昭王，屡立战功。伊阕之战，大破魏韩联军；伐楚之战，攻陷楚都郢城。长平之战，重创赵国主力。担任秦军主将30多年，攻城70余座，为秦国统一六国做出了巨大的贡献，受封为武安君。功高震主，得罪应侯，接连贬官。秦昭襄王五十年，赐死于杜邮。作为中国历史上继孙武、吴起之后又一个杰出的军事家、统帅，白起与廉颇、李牧、王翦并称为战国四大名将，名列武庙十哲。",
"XShanxin":
"西汉开国功臣、军事家、淮阴侯，兵家四圣之一，汉初三杰之一，中国军事思想“兵权谋家”的代表人物，被后人奉为“兵仙”、“神帅”。“韩信点兵，多多益善”是有关于他的典故。秦末，参加反秦斗争，投奔项梁、项羽，未得到任用。转投刘邦，经夏侯婴推荐，拜治粟都尉，经萧何保为大将，为刘邦制定了汉中对策。刘邦兵败于彭城后，韩信先破楚军于京、索之间，后平定魏国。请命北伐拿下代国，刘邦收其精兵后背水一战击败赵国，派人降服燕国。支援刘邦以及清除项羽派往赵国的楚奇兵，平定剩下的赵国城邑。刘邦成皋兵败夺其精兵后，奉命攻打齐国，并于潍水全歼龙且二十万楚军。韩信攻打楚国，项羽与刘邦签订鸿沟协议。刘邦听从张良、陈平计策撕毁鸿沟协议，追击项羽失败。汉五年，带兵会师垓下，围歼楚军。",
"XSwuqi":
"战国初期军事家、政治家、改革家，兵家代表人物。一生历仕鲁、魏、楚三国，通晓兵家、法家、儒家三家思想，在内政军事上都有极高的成就。在楚国时，辅佐楚悼王主持变法。周安王二十一年，因变法得罪守旧贵族，惨遭杀害。著作有《吴子兵法》，传于世，与兵圣孙武并称“孙吴”。唐肃宗时，位列武成王庙内，成为武庙十哲之一。宋徽宗时，追封广宗伯，成为武庙七十二将之一。",
"XSsunwu":
"春秋时期齐国人，出生于军事世家，被吴王阖闾赏识，于是孙武“吴宫教战”，当上了大将军，从此，吴国称霸中原，《史记》上称在孙武为将期间吴国“北威齐晋”“西破强楚”“南服夷越”，“郢都之战\"时，孙武以兵3万打败21万楚国军队，攻破郢都，几近灭亡楚国，直到阖闾薨，夫差继位后，孙武离开了吴国，隐居山林，重新编订《孙子兵法》(又称《吴孙子兵法》，是世界上仅存的最早兵书，被誉为“兵学圣典”，孙武也被誉为“兵学之父”)，因其军事才华，后世之人称其“兵圣”，唐代时，孙武被列入“武庙十哲”，并且为将首。",
"XSlianpo":
"战国末期赵国名将，勇猛果敢，屡立战功，闻名于诸侯。长平之战前期，采固守的方式，成功抵御了秦军进攻，后为赵括所取代，致使长平之战惨败。九年后，击退燕国入侵，斩杀燕军主帅栗腹，进军包围燕都三月，令对方割五城求和，拜为相国，封为信平君。赵悼襄王即位后，郁郁不得志，先后出奔魏国大梁，老死于楚地。",
"XSjiangshang":
"姜姓，吕氏，名尚，一名望，字子牙，或单呼牙，别号飞熊，因其先祖辅佐大禹平水土有功被封于吕，故以吕为氏，也称吕尚。相传姜子牙72岁时在渭水之滨的磻溪垂钓，遇到了求贤若渴的周文王，被封为“太师”（武官名），称“太公望”，俗称太公，被周武王尊为“师尚父”。姜子牙辅佐武王伐纣建立了周朝，是齐国的缔造者，周文王倾商，武王克纣的首席谋主、最高军事统帅与西周的开国元勋，齐文化的创始人，亦是中国古代的一位影响久远的杰出的韬略家、军事家与政治家,为各家所推崇，视为祖先。吕望为《武庙》主祭对象，同《文庙》的孔子相辉映。",
"XSzhangji":
"张仲景，名机，字仲景，东汉南阳涅阳县（今河南省邓州市穰东镇张寨村）人。东汉末年著名医学家，被后人尊称为医圣。张仲景广泛收集医方，写出了传世巨著《伤寒杂病论》。它确立的辨证论治原则，是中医临床的基本原则，是中医的灵魂所在。在方剂学方面，《伤寒杂病论》也做出了巨大贡献，创造了很多剂型，记载了大量有效的方剂。其所确立的六经辨证的治疗原则，受到历代医学家的推崇。",
"XSxiangji":
"秦末农民起义领袖，杰出军事家，楚国名将项燕之孙。勇猛好武，早年跟随叔父项梁在吴中起义反秦。项梁阵亡后，率军渡河援救赵王歇。巨鹿之战，击破章邯和王离领导的秦军主力，领军灭亡秦国。自称西楚霸王，定都于彭城，大封灭秦功臣将领，拥立六国贵族后代为王。汉王刘邦从汉中出兵，掀起历时四年的楚汉之争。项羽在正面战场屡破刘邦。彭越不断后方破坏楚军补给。韩信统一了黄河以北，挥师南下。项羽刚愎自用，猜疑亚父范增，终为刘邦所败。公元前202年，项羽退守垓下，突围乌江。最后霸王别姬，自刎于乌江旁。",
"XSlijing":
"字药师,雍州三原人,唐朝杰出的军事家。李靖仪表魁伟，善于用兵，长于谋略。初仕隋朝，拜马邑郡丞。晋阳起兵后，效力唐朝，从平王世充和窦建德，南平萧铣和辅公祏，北灭东突厥，西破吐谷浑，为唐王朝的建立及发展立下赫赫战功，成为凌烟阁二十四功臣之一。历任检校中书令、兵部尚书，拜尚书右仆射，封卫国公，世称李卫公。贞观二十三年（649年），李靖病逝，终年七十九。册赠司徒、并州都督，谥号“景武”，陪葬昭陵。唐玄宗时配享武成王庙，位列十哲。",
"XSyuefei":
"字鹏举，相州汤阴人。南宋时期抗金名将、军事家、战略家、民族英雄、书法家、诗人，位列南宋“中兴四将”之首。岳飞是南宋杰出的统帅，他重视人民抗金力量，缔结了“联结河朔”之谋，主张黄河以北的民间抗金义军和宋军互相配合，以收复失地；治军赏罚分明，纪律严整，又能体恤部属，以身作则，率领的“岳家军”号称“冻死不拆屋，饿死不打掳”。金军有“撼山易，撼岳家军难”的评语，以示对岳家军的由衷敬佩。",
"XSqinqiong":
"隋末唐初名将。勇武过人，远近闻名。初仕隋朝，跟随来护儿、张须陀、裴仁基帐下任职。后来，投奔瓦岗起义军领袖李密。瓦岗败亡后，投靠郑国王世充。不耻于王世充奸诈，投奔大唐。跟随秦王李世民南征北战，屡立战功，浑身伤病，拜左武卫大将军、翼国公。贞观十二年，病逝，追赠为徐州都督、胡国公，谥号为壮，列入凌烟阁二十四功臣之一。",
"XSyingzheng":
"中国古代政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。秦始皇出生于赵国都城邯郸，后回到秦国。前247年，13岁时即王位。前238年，平定长信侯嫪毐的叛乱，之后又除掉权臣吕不韦，开始亲政。重用李斯、尉缭，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，完成了统一中国大业，建立起一个中央集权的统一的多民族国家——秦朝。秦始皇奠定中国两千余年政治制度基本格局，被明代思想家李贽誉为“千古一帝”。",
"XSlishimin":
"杰出的政治家、战略家、军事家、诗人。生于武功别馆，少年从军，擅长骑射，曾往雁门关解救隋炀帝。首倡晋阳起兵，封为敦煌郡公，善于用兵，为唐朝的建立与统一过程立下赫赫战功。设立文学馆，笼络人才。武德九年，发动“玄武门之变”，杀死太子李建成、齐王李元吉及二人所有儿子，册立为太子。唐高祖李渊退位后，正式即位，年号贞观。在位初期，听取群臣意见，虚心纳谏。对内文治天下，厉行节约，劝课农桑，实现休养生息、国泰民安，开创“贞观之治”。对外开疆拓土，攻灭东突厥与薛延陀，征服高昌、龟兹、吐谷浑，重创高句丽，设立安西四镇，让各民族融洽相处，北方各族共同尊称为“天可汗”，为后来唐朝一百多年的盛世奠定重要基础。",
"XSsunbin":
"本名孙伯灵，是中国战国时期军事家，华夏族，山东鄄城人。出生于阿、鄄之间，是孙武的后代。孙膑曾与庞涓为同窗，因受庞涓迫害遭受膑刑，身体残疾，后在齐国使者的帮助下投奔齐国，被齐威王任命为军师，辅佐齐国大将田忌两次击败庞涓，取得了桂陵之战和马陵之战的胜利，奠定了齐国的霸业。唐德宗时将孙膑等历史上六十四位武功卓著的名将供奉于武成王庙内，被称为武成王庙六十四将。宋徽宗时追尊孙膑为武清伯，位列宋武庙七十二将之一。",
"XStiandan":
"战国时期齐国名将，齐国远房宗室。初任市掾，管理临淄市场秩序。乐毅率领五国军队，攻打齐国。危亡之际，田单坚守即墨，以火牛阵大破燕军，收复失地七十余城，拜为相国，封为安平君。后来，受到齐王猜忌，前往赵国出将入相，封号都平君，死后葬于安平城内。",
"XSyueyi":
"中山灵寿人，战国后期杰出的军事家，魏将乐羊后裔，拜燕上将军，受封昌国君，辅佐燕昭王振兴燕国。公元前284年，他统帅燕国等五国联军攻打齐国，连下70余城，创造了中国古代战争史上以弱胜强的著名战例，报了强齐伐燕之仇。后因受燕惠王猜忌，投奔赵国，被封于观津，号为望诸君。",
"XShuoqubing":
"西汉中期名将、军事家、外戚，是我国历史上著名的民族英雄。官至大司马骠骑将军，封冠军侯。汉武帝皇后卫子夫和大将军卫青的外甥，权臣霍光异母兄。霍去病用兵灵活，注重方略，不拘古法，善于长途奔袭、快速突袭和大迂回、大穿插、歼灭战。17岁为票姚校尉，率领八百骑兵深入大漠，两次功冠全军，封“冠军侯”。19岁指挥两次河西之战，歼灭和招降河西匈奴近10万人，获匈奴祭天金人，直取匈奴圣地祁连山。这是华夏政权第一次占领河西走廊，从此丝绸之路得以开辟。漠北之战消灭匈奴左部主力7万余人，封狼居胥。徙乌桓至匈奴左部故地，以牵制匈奴。",
"XSgongshuban":
"春秋时期鲁国人，姬姓，公输氏，名班，人称公输盘、公输般、班输，尊称公输子，又称鲁盘或者鲁般，惯称“鲁班”。鲁班的名字实际上已经成为古代劳动人民智慧的象征。2400多年来，人们把古代劳动人民的集体创造和发明也都集中到他的身上。因此，有关他的发明和创造的故事，实际上是中国古代劳动人民发明创造的故事。鲁班的名字实际上已经成为古代劳动人民智慧的象征。",
"XSyangzaixing":
"新宁崀山人，南宋抗金名将。原是曹成部将，后降于岳飞，成为岳飞部将，跟随岳飞抗击金军，曾试图单枪匹马冲阵擒获金兀术，失败后仍能单骑而还。绍兴十年（1140年），杨再兴与金人在小商桥相遇，杨再兴寡不敌众，中箭无数，奋战而亡。",
"XSmodi":
"东周春秋末期战国初期宋国人。墨家学派的创始人，也是战国时期著名的思想家、教育家、科学家、军事家。墨子是中国历史上唯一一个农民出身的哲学家，墨子创立了墨家学说，墨家在先秦时期影响很大，与儒家并称“显学”。他提出了“兼爱”、“非攻”、“尚贤”、“尚同”、“天志”、“明鬼”、“非命”、“非乐”、“节葬”、“节用”等观点。以兼爱为核心，以节用、尚贤为支点。墨子在战国时期创立了以几何学、物理学、光学为突出成就的一整套科学理论。在当时的百家争鸣，有“非儒即墨”之称。",
"XSzhuanzhu":
"中国古代“五大刺客”之一，春秋时吴国棠邑（今南京市六合区西北）人，吴公子光（即吴王阖闾）欲杀王僚自立，伍子胥把他推荐给公子光。公元前515年，公子光乘吴内部空虚，与专诸密谋，以宴请吴王僚为名，藏匕首于鱼腹之中进献（鱼肠剑），当场刺杀吴王僚，专诸也被吴王僚的侍卫杀死。公子光自立为王，是为吴王阖闾，乃以专诸之子为卿。鱼肠剑出于专诸刺王僚。",
"XSfanli":
"楚国宛地三户人。春秋末期政治家、军事家、经济学家和道家学者。曾献策扶助越王勾践复国，后隐去。著《范蠡》二篇，今佚。范蠡为中国早期商业理论家，楚学开拓者之一。被后人尊称为“商圣”，\"南阳五圣\"之一。虽出身贫贱，但是博学多才，与楚宛令文种相识、相交甚深。因不满当时楚国政治黑暗、非贵族不得入仕而一起投奔越国，辅佐越国勾践。传说他帮助勾践兴越国，灭吴国，一雪会稽之耻。功成名就之后急流勇退，化名姓为鸱夷子皮，遨游于七十二峰之间。期间三次经商成巨富，三散家财。后定居于宋国陶丘，自号“陶朱公”。",
"XSzhuyuanzhang":
"濠州钟离人，汉族。政治家，军事家，战略家。明朝开国皇帝，年号洪武。朱元璋幼时贫穷，曾为刘德地主放牛。至正四年入皇觉寺，25岁时参加郭子兴领导的红巾军起义反抗元朝，至正十六年攻占集庆路，将其改为应天府。至正二十七年命徐达、常遇春以“驱逐胡虏，恢复中华”为号召，举兵北伐，以推翻元朝统治。洪武元年初，在应天府称帝，国号大明，年号洪武。当年秋攻占大都，结束了元朝在全国的统治。又平定西南、西北、辽东等地，最终统一全国。",
"XSshangyang":
"战国时期政治家、改革家、思想家，法家代表人物，卫国国君后代。商鞅辅佐秦孝公，积极实行变法，使秦国成为富裕强大的国家，史称“商鞅变法”。政治上，改革了秦国户籍、军功爵位、土地制度、行政区划、税收、度量衡以及民风民俗，并制定了严酷的法律；经济上，主张重农抑商、奖励耕战；军事上，统率秦军收复了河西之地，赐予商于十五邑，号为商君，史称为商鞅 。公元前338年，秦孝公逝世后，商鞅被公子虔指为谋反，战败死于彤地，尸身车裂，全族被杀。",
"XSliubang":
"沛郡丰邑中阳里人。杰出的政治家、战略家和军事指挥家，汉朝开国皇帝。出身农家，豁达大度，不事生产。初仕秦朝，授沛县泗水亭长，释放刑徒，亡匿于芒砀山中。陈胜起义之后，集合三千子弟响应，攻占沛县，自称沛公，投奔名将项梁，任砀郡长，受封为武安侯，统领砀郡兵马。率军进驻灞上，接受秦王子婴投降，灭亡秦朝。废除秦朝苛法，约法三章。鸿门宴之后，受封为汉王，统治巴蜀及汉中一带。楚汉战争前期，屡败屡战。能够知人善任，注意虚心纳谏，充分发挥部下的才能，积极整合反对项羽的力量，终于击杀西楚霸王项羽，赢得楚汉之争，统一天下。",
"XSkongqiu":
"春秋末期鲁国陬邑人，祖籍宋国栗邑，中国古代思想家、教育家，儒家学派创始人。孔子开创了私人讲学之风，倡导仁义礼智信。有弟子三千，其中贤人七十二。他曾带领部分弟子周游列国十三年，晚年修订《诗》《书》《礼》《乐》《易》《春秋》六经。孔子是当时社会上最博学者之一，去世后，其弟子及再传弟子把孔子及其弟子的言行语录和思想记录下来，整理编成《论语》。该书被奉为儒家经典。孔子在世时就被尊奉为“天纵之圣”“天之木铎”，更被后世统治者尊为孔圣人、至圣、至圣先师、大成至圣文宣王先师、万世师表。",
"XSlaodan":
"春秋末期人，生卒年不详，大约出生于公元前571年春秋晚期陈国苦县。中国古代思想家、哲学家、文学家和史学家，道家学派创始人和主要代表人物。老子与庄子并称老庄。在道教中，老子被尊为道教始祖，称“太上老君”。在唐朝，老子被追认为李姓始祖。老子思想对中国哲学发展具有深刻影响，其思想核心是朴素的辩证法。在政治上，老子主张无为而治、不言之教。在权术上，老子讲究物极必反之理。在修身方面，老子是道家性命双修的始祖，讲究虚心实腹、不与人争的修持。传世作品《道德经》（又称《老子》）。",
"XSliguang":
"陇西成纪人，中国西汉时期的名将，先祖为秦朝名将李信。汉文帝十四年从军击匈奴因功为中郎。景帝时，先后任北部边域七郡太守。武帝即位，召为未央宫卫尉。元光六年，任骁骑将军，领万余骑出雁门击匈奴，因众寡悬殊负伤被俘。匈奴兵将其置卧于两马间，李广佯死，于途中趁隙跃起，奔马返回。后任右北平郡太守。匈奴畏服，称之为飞将军，数年不敢来犯。元狩四年，漠北之战中，李广任前将军，因迷失道路，未能参战，愤愧自杀。",
"XSlimu":
"战国时期赵国柏仁人，战国时期的赵国名将、军事家。战国末期，李牧是赵国赖以支撑危局的唯一良将，素有“李牧死，赵国亡”之称。李牧生平事迹大致可划分为两个阶段，先是在赵国北部边境，抗击匈奴；后以抵御秦国为主，因在宜安之战重创秦军，得到武安君的封号。公元前229年，赵王迁中了秦国的离间计，听信谗言夺取了李牧的兵权，不久后将李牧杀害。李牧是战国末年东方六国最杰出的将领。深得士兵和人民的爱戴，有着崇高的威望。在一系列的作战中，他屡次重创敌军而未尝败，显示了高超的军事指挥艺术。",
"XSzhangliang":
"秦末韩国人。秦末汉初杰出谋臣，与韩信、萧何并称为“汉初三杰”。张良先辈在韩国首都阳翟，任过五代韩王之国相。力劝刘邦在鸿门宴上卑辞言和，保存实力，并疏通项羽季父项伯，使得刘邦顺利脱身。凭借出色的智谋，协助汉王刘邦赢得楚汉战争，建立大汉王朝，帮助吕后之子刘盈成为皇太子，册封为留侯。精通黄老之道，不恋权位。晚年，跟随赤松子云游四海。张良去世后，谥号文成。《史记·留侯世家》专门记载了张良的生平。汉高祖刘邦在洛阳南宫评价他说：“夫运筹策帷帐之中，决胜于千里之外，吾不如子房。”",
"XSlimi":
"祖籍辽东郡襄平县，生于京兆府。唐朝中期著名政治家、谋臣、学者。自幼聪颖，深得唐玄宗赏识，令其待诏翰林，为东宫属官。后遭宰相杨国忠忌恨，只得归隐名山。安史之乱时，唐肃宗即位于灵武，召李泌参谋军事，宠遇有加。但他又被权宦李辅国等诬陷，再次隐居衡岳。唐代宗即位后，再被召为翰林学士，屡遭宰相元载、常衮排挤，被外放至地方任职。唐德宗时入朝拜相，参预内政、外交、军事、财政等方面的筹划，对内勤修军政、调和将相，对外联结回纥、大食等国遏制吐蕃，达成“贞元之盟”，使边陲安定。累官至中书侍郎、同平章事，封邺县侯，世称“李邺侯”。",
"XSsuqin":
"战国时期著名的纵横家、外交家和谋略家。早年投入鬼谷子门下，学习纵横之术。学成游历多年，潦倒而归。随后，刻苦攻读《阴符》，游说列国，得到燕文公赏识，出使赵国，提出“合纵”六国以抗秦的战略思想，并最终组建合纵联盟，任“从约长”，兼佩六国相印，使秦国十五年不敢出兵函谷关。联盟解散后，齐国攻打燕国，苏秦说齐归还燕国城池。后自燕至齐，从事反间活动，被齐国任为客卿，齐国众大夫因争宠派人刺杀，苏秦死前献策诛杀了刺客。",
"XSzhangyi":
"战国时期魏国安邑人。魏国贵族后裔，战国时期著名的纵横家、外交家和谋略家。早年入于鬼谷子门下，学习纵横之术。出山之后，首创“连横”的外交策略，游说六国入秦。得到秦惠王赏识，封为相国，奉命出使游说各国，以“横”破“纵”，促使各国亲善秦国，受封为武信君。公元前310年，秦惠王死后，秦武王继位。张仪失去宠信，出逃魏国，担任相国，次年去世。",
"XSlicunxiao":
"唐末著名的猛将，武艺非凡，勇猛过人。李存孝是晋王李克用麾下一员骁将，也是李克用众多的“义儿”中的一个，因排行十三，故称为“十三太保”，而且也是十三太保中最出名的。李存孝天生神力，被晋王李克用看中，收为义子。随着李克用南征北战，攻无不克，战无不胜。《旧五代史唐书列传五李存孝传》中记载：“及壮，便骑射，骁勇冠绝，常将骑为先锋，未尝挫败；从武皇救陈、许，逐黄寇，及遇难上源，每战无不克捷。” ",
"XSliuji":
"元末明初军事家、政治家、文学家，明朝开国元勋。洪武三年封诚意伯，故又称刘诚意。武宗正德九年追赠太师，谥号文成，后人称他刘文成、文成公。元至顺年间举进士。博通经史，尤精象纬之学，时人比之诸葛亮。至正十九年，朱元璋闻刘基及宋濂等名，礼聘而至。他上书陈述时务十八策，倍受宠信。参与谋划平定张士诚、陈友谅与北伐中原等军事大计。吴元年为太史令，进《戊申大统历》。奏请立法定制，以止滥杀。他以神机妙算、运筹帷幄著称于世。",
"XSxiaohe":
"西汉初年政治家、宰相，西汉开国功臣之一。沛丰人，早年任秦沛县县吏，秦末辅佐刘邦起义。攻克咸阳后，他接收了秦丞相、御史府所藏的律令、图书，掌握了全国的山川险要、郡县户口，对日后制定政策和取得楚汉战争胜利起了重要作用。楚汉战争时，他留守关中，使关中成为汉军的巩固后方，不断地输送士卒粮饷支援作战，对刘邦战胜项羽，建立汉代起了重要作用。萧何采摭秦六法，重新制定律令制度，作为《九章律》。在法律思想上，主张无为，喜好黄老之术。汉十一年又协助刘邦消灭韩信、英布等异姓诸侯王。惠帝二年七月辛未去世，谥号“文终侯”。",
"XSchenping":
"西汉王朝的开国功臣之一。秦二世元年陈平往事魏王咎。不久受谗亡归项羽，随从入关破秦。刘邦还定三秦时，又间行降汉。拜为都尉，使参乘、典护军。后历任亚将、护军中尉。先后参加楚汉战争和平定异姓王侯叛乱诸役，成为汉高祖刘邦的重要谋士。汉高祖死后，吕后以陈平为郎中令，傅教惠帝。惠帝六年，与王陵并为左、右丞相。王陵免相后陈平擢为右丞相，但因吕后大封诸吕为王，陈平被削夺实权。吕后死，陈平与太尉周勃合谋平定诸吕之乱，迎立代王为文帝。文帝初，陈平让位周勃，徙为左丞相，因明于职守，受到文帝赞赏。不久周勃罢相，陈平专为丞相。 孝文二年死。",
"XSwangjian":
"战国时期秦国名将、杰出的军事家。少时喜欢军事，随侍秦王嬴政。率军攻破赵国都城邯郸，扫平三晋地区。统兵60万大败项燕，消灭楚国。联同儿子王贲，成为秦始皇统一六国、开疆扩土的最大功臣，功绩卓著，拜太师，封为武成侯。急流勇退，没有辅佐秦始皇建立德政，巩固国家根基。和白起比较，可谓“尺有所短，寸有所长”。凭借杰出的军事指挥才能，与白起、李牧、廉颇并称“战国四大名将”。后世尊为琅琊王氏和太原王氏的共同始祖。",
"XStiemuzhen":
"蒙古族乞颜部人。大蒙古国可汗，世界史上杰出的政治家、军事家。绍兴三十二年，生于漠北斡难河上游地区，取名铁木真。淳熙十一年前后，成为蒙古乞颜部可汗，一步步统一蒙古诸部。开禧二年，建立大蒙古国，尊号“成吉思汗”，颁布了《成吉思汗法典》。多次发动对外战争，征服西达中亚、东欧的黑海海滨地区。宝庆三年，兴兵征伐西夏，途中去世，秘密安葬。元世祖至元二年十月，追尊为太祖。至元三年十月，太庙建成后，追谥圣武皇帝。元武宗至大二年，追谥“法天启运圣武皇帝”，庙号太祖。",
"XSzhaokuangyin":
"五代至北宋初年军事家、武术家，宋朝开国皇帝。后周护圣都指挥使赵弘殷次子，母为杜氏。赵匡胤在后汉时投奔枢密使郭威，致身行伍。他受后周世宗柴荣器重，于征伐南唐时屡建战功。柴荣病重时，被任命为殿前都点检，掌管殿前禁军。显德七年，受命抵御北汉及契丹联军。旋即在“陈桥兵变”中被拥立为帝，并回京逼迫后周恭帝禅位。同年，赵匡胤登基为帝，改元建隆，国号“宋”，史称“宋朝”、“北宋”。",
"XSfujian":
"十六国时期前秦政权君主，惠武帝苻洪之孙、丞相苻雄之子。在位前期，励精图治，重用汉人王猛，推行“休养生息，加强生产”政策，实现国力强盛，接着以军事力量消灭北方多个独立政权，成功统一北方，并攻占了东晋的蜀地，与东晋南北对峙。建元十九年，挥师南下，发动淝水之战。意图消灭东晋，一统天下。最终败给东晋谢玄率领的北府兵，导致前秦陷入混乱，各民族纷纷独立。建元二十一年，为秦武昭帝姚苌杀害，终年四十八，谥号宣昭皇帝，庙号世祖。",
"XSxueli":
"唐朝初年名将，北魏河东王薛安都六世孙。薛仁贵出身于河东薛氏南祖房，于贞观末年投军，征战数十年，曾大败九姓铁勒，降服高句丽，击破突厥，功勋卓著，留下了“良策息干戈”、“三箭定天山”、“神勇收辽东”、“仁政高丽国”、“爱民象州城”、“脱帽退万敌”等典故。唐高宗时，薛仁贵累官至瓜州长史、右领军卫将军、检校代州都督，封平阳郡公。永淳二年，薛仁贵去世，年七十。册赠左骁卫大将军、幽州都督。著有《周易新注本义》十四卷，今已佚。",
"XSouyezi":
"春秋末期到战国初期越国人。中国古代铸剑鼻祖，龙泉宝剑创始人。曾为越王允常铸五剑，名湛卢、纯钧、胜邪、鱼肠、巨阙。后因风胡子之邀，与干将夫妇赴楚为楚王铸龙渊、泰阿、工布三剑。欧冶子诞生时，正值东周列国纷争，先是吴国攻破楚国，后吴越先后吞并长江以南45国。少年时代，他从母舅那里学会冶金技术，开始冶铸青铜剑和铁锄、铁斧等生产工具。他肯动脑筋，具有非凡的智慧；他身体强健，能刻苦耐劳。他发现铜和铁性能的不同之处，冶铸出第一把铁剑“龙渊”，开创中国冷兵器之先河。",
"XSranmin":
"冉魏政权开国皇帝，西华侯冉良之子。果断敏锐，以勇猛著称。出仕后赵，授游击将军，封修成侯。数从征伐，屡立战功。石虎死后，拥立石鉴，然后屠胡灭石。永兴元年，即位称帝，建立冉魏。永兴三年，兵败突围不遂，为前燕君主慕容儁所擒，斩于遏陉山，追谥武悼天王。冉闵后人冉华的墓志铭则称冉闵为“平帝”。",
"XSqijiguang":
"明朝抗倭名将，杰出的军事家、书法家、诗人、民族英雄。戚继光在东南沿海抗击倭寇十余年，扫平了多年为虐沿海的倭患，确保了沿海人民的生命财产安全；后又在北方抗击蒙古部族内犯十余年，保卫了北部疆域的安全，促进了蒙汉民族的和平发展，写下了十八卷本《纪效新书》和十四卷本《练兵实纪》等著名兵书，还有《止止堂集》及在各个不同历史时期呈报朝廷的奏疏和修议。同时，戚继光又是一位杰出的兵器专家和军事工程家，他改造、发明了各种火攻武器；他建造的大小战船、战车，使明军水路装备优于敌人。",
"XSliuxiu":
"东汉王朝建立者，汉高祖刘邦九世孙。西汉建平元年，生于陈留郡济阳宫。适逢王莽篡立新朝，倒行逆施，天下大乱。作为汉室宗亲，随兄刘演起兵于南阳郡，号“舂陵军”。更始三年，公开决裂更始政权，即位于河北鄗县南千秋亭，尊奉汉元帝为皇考，光复汉室，定都于洛阳。经过长达12年统一战争，灭亡河北、关东、陇右、西蜀等地的割据势力，结束农民战争、军阀混战与地方割据局面。平定动乱之后，励精图治。政治上，改革官制，整饬官风吏治，精简结构，优待功臣；经济上，休养生息，恢复发展经济；文化上，大兴儒学、推崇气节，开创中国历史上“风化最美、儒学最盛”的“光武中兴”时代。",
"XSguanyiwu":
"春秋时期齐国人，出身贫困，与老母相依为命，性至孝，曾经为老母诈死当了逃兵，被天下人笑话，和鲍叔牙联合经商之时也占他便宜，被视为小人，但鲍叔牙视之为知己。管仲对齐国进行了很大程度的改革，使得齐国大大强盛起来，不仅发动经济战争，而且锄强扶弱，匡扶正义，打击非华夏族的异族，扶持周天子，史称“九合诸侯，一匡天下”。齐国成为天下至霸，齐桓公成为“五霸之首”，因其功勋以及极其非凡的才华，管仲被称为“华夏第一相”，并且被列入“武庙十哲”为后世供奉。",
"XSwangxu":
"鬼谷子王诩，一作王禅，道号玄微子，战国时期显赫人物。相传，其额前四颗肉痣，成鬼宿之象。著名谋略家、道家代表人物、兵法集大成者、纵横家的鼻祖，精通百家学问，因隐居云梦山鬼谷，故自称鬼谷先生。鬼谷子常入山修炼，深谙道法，神妙莫测。“王禅老祖”是后人对鬼谷子的称呼，为老学五派之一。他通天彻地，智慧卓绝，人不能及。一曰数学，日星象纬，在其掌中，占往察来，言无不验；二曰兵学，六韬三略，变化无穷，布阵行兵，鬼神不测；三曰言学，广记多闻，明理审势，出辞吐辩，万口莫当；四曰出世，修真养性，祛病延年，服食导引，平地飞升。 ",
"XShanfei":
"战国末期韩国人。杰出的思想家、哲学家和散文家，法家代表人物，被誉为最得老子思想精髓的两个人之一。韩非将商鞅的，申不害的「术」和慎到的「势」集于一身，并且将老子的辩证法、朴素唯物主义与法融为一体。他的学说一直是中国封建统治阶级运用的基础。其文学功底之深厚，为后世留下了大量名言、名著。",
"XSlishizhen":
"明代著名医药学家。后为楚王府奉祠正、皇家太医院判，去世后明朝廷敕封为“文林郎”。李时珍自1565年起，先后到武当山、庐山、茅山、牛首山及湖广、安徽、河南、河北等地收集药物标本和处方，并拜渔人、樵夫、农民、车夫、药工、捕蛇者为师，参考历代医药等方面书籍925种，考古证今、穷究物理”，记录上千万字札记，弄清许多疑难问题，历经27个寒暑，三易其稿，于明万历十八年完成了192万字的巨著《本草纲目》，此外对脉学及奇经八脉也有研究。著述有《奇经八脉考》《濒湖脉学》等多种。被后世尊为 “药圣”。",
"XSlinxiangru":
"战国时期赵国上卿，赵国著名的政治家、外交家。赵惠文王时，秦昭王写信给赵王，愿以十五个城池换取“和氏璧”。蔺相如奉命带“和氏璧”来到秦国，据理力争，机智周旋，终于完璧归赵。公元前279年，秦王与赵王相会于渑池，他随侍赵惠文王，当面斥责强大的秦国，不辱国体，使赵王没有受到屈辱，因其功，任为上卿，居官于廉颇之上。廉颇居功自恃，不服相如，耻居其下，并扬言要羞辱相如。蔺相如为保持将相和睦，不使外敌有隙可乘，始终回避忍让。蔺相如以国家利益为重、善自谦抑的精神感动了廉颇，于是亲自到蔺相如府上负荆请罪，二人成为刎颈之交。",
"XSxuda":
"明朝开国军事统帅。徐达出身农家。元朝末年，徐达参加了朱元璋领导的起义军，为淮西二十四将之一。至正二十三年，在鄱阳湖之战中大败陈友谅。次年，被任命为左相国。至正二十五年，麾师攻取淮东，并于两年后攻克平江，灭张士诚。旋即出任征虏大将军，与副将常遇春一同挥师北伐，推翻元朝的统治。洪武元年，攻入大都，灭亡元朝。此后连年出兵，打击元朝残余势力，官至太傅、中书右丞相、参军国事兼太子少傅，封魏国公。他为人谨慎，善于治军，戎马一生，为明朝建立了不朽的功勋。",
"XSweirui":
"南北朝时期南梁名将，西汉丞相韦贤之后。韦睿出身三辅大姓，早年任上庸太守。南齐末年，韦睿随萧衍起兵，“多建策，皆见用”。南梁建立后，拜廷尉，封都梁子。天监四年，督军北伐，攻小岘城。继而进军合肥，引肥水灌城，大破魏军，斩俘一万余人。天监五，与曹景宗率军于钟离之战中大破北魏，因功进爵永昌侯。官至侍中、车骑将军。普通元年，韦睿去世，年七十九。获赠车骑将军、开府仪同三司，谥号“严”。元代史学家胡三省称：“梁之将帅，韦睿一人而已。”明人杨慎亦称其为“六朝人才”之冠。",
"XSxiean":
"东晋政治家、名士。谢安少以清谈知名，屡辞辟命，隐居会稽郡山阴县之东山，与王羲之、许询等游山玩水，并教育谢家子弟。后谢氏家族于朝中之人尽数逝去，他才东山再起，历任征西大将军司马、吴兴太守、侍中、吏部尚书、中护军等职。简文帝逝后，谢安与王坦之挫败桓温篡位意图。桓温死后，更与王彪之等共同辅政。在淝水之战中，谢安作为东晋一方的总指挥，以八万兵力打败了号称百万的前秦军队，为东晋赢得数十年的和平。战后因功名太盛而被孝武帝猜忌，被迫前往广陵避祸。太元十年，谢安病逝，年六十六。获赠太傅、庐陵郡公，谥号“文靖”。",
"XSwangmeng":
"十六国时期著名的政治家、军事家。王猛出身贫寒，隐居山中，博学好读兵书，善于谋略和用兵。后与苻坚一见如故，论废兴大事，异常契合。苻坚即位，任中书侍郎，曾在一年中五次擢升，官至丞相、中书监、尚书令，封清河郡侯，成为苻坚主要的谋臣。王猛在前秦任职十八年，综合儒法，选拔廉明。在政治上，抵制氐、羌权贵，整肃吏治，强化中央集权。在京城一带坚持执法行事，数旬间诛不法贵戚豪强二十余人，百官震肃。在军事上，前秦建元六年统兵消灭前燕，都督关东六州军事，为统一北方作出重大贡献。在经济上，劝课农桑，开放山泽，兴修水利，改进耕作，以致田畴开辟，仓库充实。",
"XSfangqiao":
"唐朝初年名相、政治家。善诗能文，博览经史。十八岁，举进士出身，授羽骑尉、隰城县尉。晋阳起兵后，投靠秦王李世民后，积极出谋划策，典管书记，选拔人才，成为秦王府得力谋士之一。武德九年，谋划玄武门之变，随同杜如晦等五人居于首功。唐太宗即位后，拜中书令，封邢国公，负责综理朝政，兼修国史、编纂《晋书》。执政期间，房玄龄善于谋略，杜如晦处事果断，并称“房谋杜断”，成为良相典范。迁尚书左仆射、司空，封梁国公，名列凌烟阁二十四功臣。",
"XSweiqing":
"西汉时期名将、外戚、军事家，汉武帝第二任皇后卫子夫的弟弟，汉武帝在位时官至大司马大将军，封长平侯。卫青的首次出征是奇袭龙城，揭开汉匈战争反败为胜的序幕，曾七战七捷，收复河朔、河套地区，击破单于，为北部疆域的开拓做出重大贡献。卫青善于以战养战，用兵敢于深入，为将号令严明，对将士爱护有恩，对同僚大度有礼，位极人臣而不立私威。元封五年，卫青逝世，起冢如庐山，葬于茂陵东北1000米处，谥号为“烈”。",
"XSyuchigong":
"唐朝开国将领，凌烟阁二十四功臣之一。归顺唐朝后，赐名尉迟恭。大业末年，参与平定高阳暴乱，授朝散大夫。大业十三年，跟随刘武周起兵反隋，担任偏将。武德三年，投降李世民，讨伐王世充、窦建德、刘黑闼、徐圆朗。武德九年，参加玄武门之变，射杀齐王李元吉，拔得头等，拜右武候大将军，封为吴国公。贞观十一年，拜宣州刺史，封为上柱国、鄂国公。贞观十七年，授开府仪同三司，致仕还家，不问政事。图形凌烟阁，位列第七名。贞观十九年，跟随李世民征讨高句丽。",
"XSsimaqian":
"西汉史学家、散文家。任太史令，因替李陵败降之事辩解而受宫刑，后任中书令。发奋继续完成所著史籍，被后世尊称为史迁、太史公、历史之父。司马迁早年受学于孔安国、董仲舒，漫游各地，了解风俗，采集传闻。初任郎中，奉使西南。元封三年任太史令，继承父业，著述历史。他以其“究天人之际，通古今之变，成一家之言”的史识创作了中国第一部纪传体通史《史记》。被公认为是中国史书的典范，该书记载了从上古传说中的黄帝时期，到汉武帝元狩元年，长达3000多年的历史，是“二十五史”之首，被鲁迅誉为“史家之绝唱，无韵之离骚”。",
"XSxishi":
"春秋时期越国美女，春秋末期出生于越国句无苎萝村。出身贫寒，自幼随母浣纱江边，故又称“浣纱女”。她天生丽质、秀媚出众，是美的化身和代名词。越王勾践在对吴国战争中失利后，采纳文种“伐吴九术”之四“遗美女以惑其心，而乱其谋”，于苎萝山下得西施、郑旦二人。并于土城山建美女宫，教以歌舞礼仪，饰以罗，教以容步，习于土城，临于都巷。三年学成，使范蠡献于吴王。吴王夫差大悦，筑姑苏台，建馆娃宫，置二女于椒花之房，沉溺酒色，荒于国政，而宠嬖西施尤甚。勾践灭吴后，西施随范蠡泛五湖而去，不知所终。",
"XSmengjiangnv":
"中国民间传说人物，其人物故事是中国民间四大爱情故事之一，千百年来一直以口头传承的方式在民间广为流传。最早的传说可上溯到《左传》。孟姜女的传说，一直以口头传承的方式在民间广为流传。直到20世纪初，在“五四”精神的推动下，她才被纳入到研究者的视野中。中国著名的历史学家顾颉刚将孟姜女传说的原初形态一直追溯到《左传》上的一个故事。《左传》记述这个故事是想褒扬杞梁妻（也就是后世的孟姜女）在哀痛之际，仍能以礼处事，神志不乱，令人钦佩。",
"XSquping":
"中国战国时期楚国诗人、政治家。出生于楚国丹阳秭归。芈姓，屈氏，名平，字原；又自云名正则，字灵均。楚武王熊通之子屈瑕的后代。少年时受过良好的教育，博闻强识，志向远大。早年受楚怀王信任，任左徒、三闾大夫，兼管内政外交大事。提倡“美政”，主张对内举贤任能，修明法度，对外力主联齐抗秦。因遭贵族排挤诽谤，被先后流放至汉北和沅湘流域。楚国郢都被秦军攻破后，自沉于汨罗江，以身殉国。",
"XSsubutai":
"蒙元帝国名将，成吉思汗的“四獒”之一。早年辅佐成吉思汗统一诸部，常任先锋，以骁勇善战著称。蒙古建国时，封千户长，为十大功臣之一。曾参与第一、第二次西征，令大蒙古国版图扩展至俄罗斯一带。其征战所及东至高丽，西达波兰、匈牙利，北到西伯利亚，南抵开封。是古代世界征战范围最广的将领之一。死后追封为河南王，谥忠定。",
"XSyueyun":
"南宋抗金名将岳飞长子，中国历史上少有的少年将军。历任武翼郎、左武大夫、忠州防御使等职。南宋绍兴十一年除夕，跟父亲岳飞，部将张宪一起惨遭宋高宗赵构和奸臣秦桧诬陷而死，岳云死时年仅23岁，死后葬于杭州栖霞岭。南宋绍兴三十二年，宋孝宗赵昚为岳飞父子平反昭雪，岳云附葬在杭州栖霞岭下。",
"XSliuche":
"西汉第七位皇帝，政治家、文学家。在位期间，在政治上，创设中外朝制、刺史制、察举制，颁行推恩令，加强君主专制与中央集权。在经济上，推行平准、均输、算缗、告缗等措施，铸五铢钱，由官府垄断盐、铁、酒的经营，并抑制富商大贾的势力。文化方面，“罢黜百家，独尊儒术”，并设立太学。对外，汉武帝采扩张政策，除与匈奴长年交战外，还破闽越、南越、卫氏朝鲜、大宛，又凿空西域、开丝绸之路，并开辟西南夷。此外，还有创设年号、颁布太初历等举措。但他崇信方术、自奉奢侈，兼以穷兵黩武，引发统治危机，晚年爆发巫蛊之祸，后因对外扩张受挫而颁《轮台诏》。后元二年，崩于五柞宫。",
"XSlisi":
"秦朝著名政治家、文学家和书法家。李斯早年师从荀子学习帝王之术。学成之后，入秦为官，秦王纳其计谋，遣谋士持金玉游说关东六国，离间各国君臣，以为客卿，在秦灭六国事业中发挥重大作用。秦王政十年，进上《谏逐客书》，阻止驱逐六国客卿，迁为廷尉。秦统一天下后，建议拆除郡县城墙，销毁民间的兵器；反对分封制度，坚持郡县制；主张焚烧民间收藏的《诗》、《书》等诸子学说，禁止私学，以加强思想统治。参与制定法律，统一车轨、文字、度量衡制度。",
},//介绍

		characterTitle:{
			//"XSyingzheng":"始皇帝",

		},//称号

		perfectPair:{
			//"xwj_xhuoying_xiaoying":['xwj_xhuoying_zhuozhu'],

		},//珠联壁合


skill:{	
		"XSbishi":{
	global:"XSbishi_buff",
	subSkill:{
		buff:{
			trigger:{
				player:"phaseDrawBegin",
			},
			filter:function (event,player){
				if(game.countPlayer(function(current){
					var check=current.hasSkill('XSbishi')&&player.countCards('e')==current.countCards('e');
					return check;
				})>0) return true;	
				return false;
			},
			forced:true,
			content:function (){
				trigger.num++;
			},
		},
    },
		},
		"XShengge":{
	ai:{
		threaten:1.2,
	},
	group:["XShengge_gain","XShengge_lose"],
    subSkill:{
        gain:{
			trigger:{
				global:["equipAfter"],
			},
			filter:function (event,player){
				if(!event.player.isAlive()) return false;
				if(event.player==player) return false;
				return player.countCards('e')!=event.player.countCards('e');
			},
			"prompt2":function (event,player){
				if(player.countCards('e')<event.player.countCards('e')){
					return '你可以令'+get.translation(event.player)+'弃置1张牌。';
				}
				else if(player.countCards('e')>event.player.countCards('e')){
					return '你可以令'+get.translation(event.player)+'摸1张牌。';
				}
			},
			check:function (event,player){
				var att=get.attitude(player,event.player);
				if(player.countCards('e')<event.player.countCards('e')) {
					return -att;
				}
				else if(player.countCards('e')>event.player.countCards('e')){
					return att;
				}
				return false;
			},
			logTarget:'player',
			content:function (){
				"step 0"
				if(player.countCards('e')<trigger.player.countCards('e')) {
					trigger.player.chooseToDiscard('he',1,true);
				}
				"step 1"
				if(player.countCards('e')>trigger.player.countCards('e')){
					trigger.player.draw();
				}
			},
			ai:{
				expose:0.3,
			},
            sub:true,
        },
		lose:{
			trigger:{
				global:["loseAfter"],
			},
			filter:function (event,player){
				if(!event.player.isAlive()) return false;
				if(event.player==player) return false;
				if(player.countCards('e')==event.player.countCards('e')) return false;
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='e') return true;
				}
			},
			"prompt2":function (event,player){
				if(player.countCards('e')<event.player.countCards('e')){
					return '你可以令'+get.translation(event.player)+'摸1张牌。';
				}
				else if(player.countCards('e')>event.player.countCards('e')){
					return '你可以令'+get.translation(event.player)+'弃置1张牌。';
				}
			},
			check:function (event,player){
				var att=get.attitude(player,event.player);
				if(player.countCards('e')<event.player.countCards('e')) {
					return att;
				}
				else if(player.countCards('e')>event.player.countCards('e')){
					return -att;
				}
				return false;
			},
			logTarget:'player',
			content:function (){
				"step 0"
				if(player.countCards('e')<trigger.player.countCards('e')) {			
					trigger.player.draw();
				}
				"step 1"
				if(player.countCards('e')>trigger.player.countCards('e')){
					trigger.player.chooseToDiscard('he',1,true);
				}
			},
			ai:{
				expose:0.3,
			},
			sub:true,
		},	
    },
		},
		"XSxiandeng":{
	trigger:{
		player:'phaseUseBefore'
	},
	filter:function(event,player){
		return player.countCards('h')>0;
	},
	priority:20,
	check:function (event,player){
		if(player.isDamaged()&&player.countCards('h','tao')) return false;
		if(player.countCards('h',{name:['shan','wuxie']})>1) return false;
		if(player.countCards('h','sha')<2) return false;
		return true;
	},
	content:function(){
		"step 0"
		player.addTempSkill('XSxiandeng_mark',{player:'phaseUseAfter'});
	},
    subSkill:{
        mark:{
			mod:{
				cardUsable:function(card,player){
					return Infinity;
				},
				targetInRange:function (card,player,target,now){
					return true;
				},
			},
			mark:true,
			marktext:"先",
			intro:{
				content:"你使用牌无距离、次数限制，出牌阶段结束你弃置所有手牌。",
			},
			direct:true,
			onremove:function(player){
				player.discard(player.getCards('h'));
			},
			content:function (){},
			ai:{
			　　effect:{
		　　		player:function(card,player){
						if(get.tag(card,'damage')) return [1,2];
					}
				}
			},
            sub:true,
        },
    },
		},
		"XSyongjiang":{
   audio:2,
	group:["XSyongjiang_1","XSyongjiang_2"],
	subSkill:{
        1:{
			trigger:{
				source:"damageBegin",
			},
			filter:function (event,player){
				if(event.player==player) return false;
				if(event.player.countCards('h')>=player.countCards('h')) return false;
				if(player.hasSkill('XSyongjiang_temp1')) return false;
				return event.num>0;
			},
			priority:17,
			forced:true,
			content:function (){
				"step 0"
				player.draw(2);
				player.addTempSkill('XSyongjiang_temp1',{player:'phaseBefore'});
				"step 1"
				trigger.cancel();
			},
			ai:{
				effect:{
					player:function (card,player,target){
						if(get.tag(card,'damage')) {
							if(player.hasSkill('XSyongjiang_temp1')) return;
							if(target.countCards('h')<player.countCards('h')) return [0,2];
						}
					},
				},
			},
            sub:true,
        },
		2:{
			trigger:{
				player:"damageBegin",
			},
			filter:function (event,player){
				if(!event.source||event.source==player) return false;
				if(event.source.countCards('h')<=player.countCards('h')) return false;
				if(player.hasSkill('XSyongjiang_temp2')) return false;
				return event.num>0;
			},
			priority:17,
			forced:true,
			content:function (){
				"step 0"
				player.recover();
				player.addTempSkill('XSyongjiang_temp2',{player:'phaseBefore'});
				"step 1"
				trigger.cancel();
			},
			ai:{
				effect:{
					target:function (card,player,target){
						if(get.tag(card,'damage')) {
							if(player.hasSkillTag('jueqing')) return;
							if(target.hasSkill('XSyongjiang_temp2')) return;
							if(player.countCards('h')<=target.countCards('h')) return;
							if(!target.hasFriend()) return;
							if(target.isDamaged()) return [0,2];
							else return 0;
						}
					},
				},
			},
            sub:true,
        },
		temp1:{
            sub:true,
        },
		temp2:{
            sub:true,
        },
    },
		},			
		"XSwanwei":{
	   mark:true,
    unique:true,
	limited:true,
    skillAnimation:true,
    animationColor:"fire",
	trigger:{
		player:["damageBegin","loseHpBegin"],
	},
	priority:-1,
	filter:function(event,player){
		if(event.num<1) return false;
		if(player.hp!=1) return false;
		if(player.storage.XSwanwei) return false;
		return true;
	},
	init:function(player){
		player.storage.XSwanwei=false;
	},
	check:function (event,player){
		return event.num>=player.hp||event.num>1;
	},
	content:function(){
		'step 0'
		player.awakenSkill('XSwanwei');
        player.storage.XSwanwei=true;
		'step 1'
		player.hp=player.maxHp;
		player.update();
		player.draw(player.maxHp);
		'step 2'
		trigger.cancel();
	},
	ai:{
        skillTagFilter:function (player){
            if(player.storage.XSwanwei) return false;
            if(player.hp!=1) return false;
        },
        threaten:function (player,target){
            if(!target.storage.XSwanwei&&target.hp==1) return 0.4;
        },
    },
	intro:{
		content:'limited'
	}
		},	
		"XSbiju":{
	   mark:true,
    unique:true,
	limited:true,
    skillAnimation:true,
    animationColor:"fire",
	trigger:{global:"phaseZhunbeiBegin",},
	priority:-1,
	filter:function(event,player){
		if(event.player==player) return false;
		if(player.hp!=1) return false;
		if(player.storage.XSbiju) return false;
		var names=[];
		if(event.player.name&&!event.player.isUnseen(0)) names.add(event.player.name);
		if(event.player.name1&&!event.player.isUnseen(0)) names.add(event.player.name1);
		if(event.player.name2&&!event.player.isUnseen(1)) names.add(event.player.name2);
		var pss=player.getSkills();
		for(var i=0;i<names.length;i++){
			var info=lib.character[names[i]];
			if(info){
				var skills=info[3];
				for(var j=0;j<skills.length;j++){
					if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].zhuSkill&&!pss.contains(skills[j])){
						return true;
					}
				}
			}
			return false;
		}
	},
	init:function(player){
		player.storage.XSbiju=false;
	},
	check:function (event,player){return true;},
	content:function(){
		'step 0'
		player.awakenSkill('XSbiju');
        player.storage.XSbiju=true;
		player.loseMaxHp();
		player.recover();
		event.target=trigger.player;
		'step 1'
		event.skillai=function(list){
			return get.max(list,get.skillRank,'item');
		};
		if(event.isMine()){
			event.dialog=lib.skill.XSzhinang.createDialog(player,target);
			event.switchToAuto=function(){
				event._result=event.skillai(event.list);
				game.resume();
			};
			_status.imchoosing=true;
			game.pause();
		}
		else{
			event._result=event.skillai(lib.skill.XSzhinang.createDialog(player,target,true));
		}
		'step 2'
		_status.imchoosing=false;
		if(event.dialog){
			event.dialog.close();
		}
		player.addSkill(result);
		player.popup(result);
		game.log(player,'获得了','【'+get.translation(result)+'】');
		'step 3'
		var mode=get.mode();
		if(mode=='identity'){
			var gro=event.target.group;
			game.log(player,'势力变更为',get.translation(gro));
			player.group=gro;
			if(player.name) lib.character[player.name][1]=gro;
			if(player.name1) lib.character[player.name1][1]=gro;
			if(player.name2) lib.character[player.name2][1]=gro; 
		}

	},
	ai:{
        skillTagFilter:function (player){
            if(player.storage.XSbiju) return false;
            if(player.hp!=1) return false;
        },
        threaten:function (player,target){
            if(!target.storage.XSbiju&&target.hp==1) return 1.3;
        },
    },
	intro:{
		content:'limited'
	}
		},	
		"XSzhinang":{
    audio:2,
	group:["XSzhinang1","XSzhinang2"],
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
                        !lib.skill[skills[j]].unique&&!lib.skill[skills[j]].zhuSkill&&
                        !pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }
            }
        }
        if(onlylist) return list;
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('选择获得一项技能');
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
                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
                translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        return dialog;
    },	
		},	
		"XSzhinang1":{
    trigger:{
        player:"phaseBefore",
    },
	priority:Infinity,
    direct:true,
	filter:function(event,player){
		return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length<5;
	},
    content:function (){
		'step 0'
		var list=[];
		for(var i=1;i<6;i++){
			if(player.isDisabled(i)) continue;
			list.push('equip'+i);
		}
		if(!list.length) event.finish();
		else{
			list.push('取消');
			event.list=list;
			var next=player.chooseControl(list);
			next.prompt='你可以废弃1个装备栏，并获得场上1名其他角色的1个非觉醒、限定、主公技直到你下个回合开始';
			next.ai=function(){
				if(list.contains('equip2')) return 'equip2';
				if(list.contains('equip3')) return 'equip3';
				if(list.contains('equip5')) return 'equip5';
				if(list.contains('equip4')) return 'equip4';
				return '取消';
			};
		}
		'step 1'
		if(result.control){
			player.disableEquip(result.control);
			player.chooseTarget('选择获得一名角色的一个技能',function(card,player,target){
				var names=[];
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
								!lib.skill[skills[j]].unique&&!lib.skill[skills[j]].zhuSkill&&!pss.contains(skills[j])){
								return true;
							}
						}
					}
					return false;
				}
			}).set('ai',function(target){
				if(get.attitude(_status.event.player,target)>0) return Math.random();
				return 0;
			});
		}
		else event.finish();
		'step 2'
		if(result.bool){
			event.target=result.targets[0];
			player.logSkill('XSzhinang',event.target);
		}
		else{
			event.finish();
		}
		'step 3'
		event.skillai=function(list){
			return get.max(list,get.skillRank,'item');
		};
		if(event.isMine()){
			event.dialog=lib.skill.XSzhinang.createDialog(player,target);
			event.switchToAuto=function(){
				event._result=event.skillai(event.list);
				game.resume();
			};
			_status.imchoosing=true;
			game.pause();
		}
		else{
			event._result=event.skillai(lib.skill.XSzhinang.createDialog(player,target,true));
		}
		'step 4'
		_status.imchoosing=false;
		if(event.dialog){
			event.dialog.close();
		}
		player.addTempSkill(result,{player:'phaseBefore'});
		player.popup(result);
		game.log(player,'获得了','【'+get.translation(result)+'】');
    },
		},	
		"XSzhinang2":{
    trigger:{
        player:"damageEnd",
    },
	priority:Infinity,
    frequent:true,
	filter:function(event,player){
		return player.isAlive()&&event.num>0;
	},
    content:function (){
		'step 0'
		player.chooseTarget('选择获得一名角色的一个技能',function(card,player,target){
			var names=[];
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
							!lib.skill[skills[j]].unique&&!lib.skill[skills[j]].zhuSkill&&!pss.contains(skills[j])){
							return true;
						}
					}
				}
				return false;
			}
		}).set('ai',function(target){
			if(get.attitude(_status.event.player,target)>0) return Math.random();
			return 0;
		});
		'step 1'
		if(result.bool){
			event.target=result.targets[0];
			player.logSkill('XSzhinang',event.target);
		}
		else{
			event.finish();
		}
		'step 2'
		event.skillai=function(list){
			return get.max(list,get.skillRank,'item');
		};
		if(event.isMine()){
			event.dialog=lib.skill.XSzhinang.createDialog(player,target);
			event.switchToAuto=function(){
				event._result=event.skillai(event.list);
				game.resume();
			};
			_status.imchoosing=true;
			game.pause();
		}
		else{
			event._result=event.skillai(lib.skill.XSzhinang.createDialog(player,target,true));
		}
		'step 3'
		_status.imchoosing=false;
		if(event.dialog){
			event.dialog.close();
		}
		player.addTempSkill(result,{player:'phaseBefore'});
		player.popup(result);
		game.log(player,'获得了','【'+get.translation(result)+'】');
    },
		},	
		"XSkanyu":{
	mod:{
		globalFrom:function (from,to,current){
			var num1=0;
			if(from.storage.disableEquip!=undefined) {
				num1+=from.storage.disableEquip.length;
			}
			return current-num1;
		},
	},
    enable:"phaseUse",
    usable:1,
    filter:function (event,player){
		if(player.storage.disableEquip==undefined||player.storage.disableEquip.length<1) return false;
		return game.hasPlayer(function(current){
			return get.distance(player,current,'attack')<=1;
		});
    },
	filterTarget:function (card,player,target){
        return get.distance(player,target,'attack')<=1;
    },
    selectTarget:function (){
        var player=_status.event.player;
		var num=player.storage.disableEquip.length;
        return [1,num];
    },
    multitarget:true,
    multiline:true,
    line:"blue",
    content:function (){
        'step 0'
		for(var i=0;i<targets.length;i++){
			targets[i].chooseToDiscard('he',1,true);
        }
    },
    ai:{
        threaten:1.2,
        order:9,
        result:{
            target:-1,
        },
    },
		},	
		"XSxingshan":{
    audio:2,
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player;
    },
    selectTarget:1,
    content:function (){
        "step 0"
		event.num1=target.hp;
        "step 1"
		target.damage(player);
		"step 2"
		target.recover();
		"step 3"
		if(target.hp>=event.num1) {
			player.viewHandcards(target);
		}
    },
    ai:{
		order:8,
		expose:0.2,
		result:{
			target:function (player,target){
				if(target.hp==1) return -2;
				else {
					if(target.hasSkillTag('maixie')) return 1;
					if(target.hasSkill('XSrenshuo')) return 2;
					else return 0;
				}
            },
		},
    },
		},	
		"XSxingshantemp":{
	audio:2,
	enable:"phaseUse",
	usable:1,
	filterTarget:function (card,player,target){
		return target!=player;
	},
	selectTarget:1,
	content:function (){
		"step 0"
		event.num1=target.hp;
		"step 1"
		target.damage(player);
		"step 2"
		target.recover();
		"step 3"
		if(target.hp>=event.num1) {
			player.viewHandcards(target);
		}
		"step 4"
		player.removeSkill('XSxingshantemp');
	},
	ai:{
		order:8,
		expose:0.2,
		result:{
			target:function (player,target){
				if(target.hp==1) return -2;
				else {
					if(target.hasSkillTag('maixie')) return 1;
					if(target.hasSkill('XSrenshuo')) return 2;
					else return 0;
				}
			},
		},
	},
		},	
		"XSrenshuo":{
     trigger:{
		player:["changeHp"],
    },
    forced:true,
    filter:function (event,player){
		return event.num!=0;
    },
    content:function (){
		"step 0"
		player.chooseTarget("重置1名角色的武将牌或令其摸1张牌",function(card,player,target){
			return true;
		}).ai=function(target){
			var check=1;
			var player=_status.event.player;
			var att=get.attitude(player,target);
			var num=target.countCards('h');
			if(num==0) {num=0.5;}
			if(target.isLinked()||!target.hasSkill('XShenglian')) check+=0.5;
			if(target.isTurnedOver()) check++;
			return att*check/num;
		}
		"step 1"
		if(result.bool) {
			var target=result.targets[0];
			if(target.isLinked()||target.isTurnedOver()) {
				if(target.isLinked()) {
					target.link();
				}
				if(target.isTurnedOver()) {
					target.turnOver();
				}
			}
			else {
				target.draw();
			}
		}
    },
	ai:{
		expose:0.2,
    },
		},	
		"XSquyi":{
    audio:2,
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&target.isDamaged();
    },
    selectTarget:1,
    content:function (){
        "step 0"
		player.loseHp();
		target.recover();
        "step 1"
		if(!target.hasSkill('XSxingshantemp')) {
			target.addSkill('XSxingshantemp');
		}
    },
    ai:{
		order:7,
		expose:0.2,
		result:{
			player:function (player){
				if(player.hp<2) return -10;
				return 2;
            },
			target:function (player,target){
				if(!target.hasSkill('XSxingshatemp')) return 3;
				return 2;
            },
		},
    },
		},	
		"XSjichi":{
   init:function (player){
        player.storage.XSjichi=false;
        player.unmarkSkill("XSjichi1");
        player.markSkill("XSjichi2");
    },
    group:["XSjichi1","XSjichi2","XSjichi_juedou","XSjichi_leisha"],
    subSkill:{
        juedou:{
            trigger:{
                player:"useCardToPlayered",
            },
            forced:true,
            filter:function (event,player){
                return event.card.name=='juedou'&&event.getParent().skill=='XSjichi1';
            },
            content:function (){
                "step 0"
                var suit1=get.suit(trigger.card);
                if(trigger.target.countCards('h',{suit:suit1})) {
                    trigger.target.chooseToDiscard('h','弃置1张'+get.translation(suit1)+'花色的牌，否则'+get.translation(player)+'的'+get.translation(trigger.card)+'将可以指定1个额外的目标',function(card){
                        return get.suit(card)==suit1;
                    }).set('ai',function(card){
                        if(_status.event.res>=0) return 5-get.value(card);
                    });
                }
                else event.goto(2);
                "step 1"
                if(result.bool){
                    event.finish();
                }
                else{
                    event.goto(2);
                }
                "step 2"
                player.chooseTarget('选择1名角色成为'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
                    var trigger=_status.event.getTrigger();
                    return player!=target&&target!=trigger.target;
                }).ai=function(target){
                    var player=_status.event.player;
                    var eff=get.effect(target,{name:'juedou'},player,player);
                    return eff;
                }
                "step 3"
                if(result.bool){
                    player.line(result.targets[0],'green');
					player.useCard(trigger.card,result.targets[0],false);
                    //trigger.targets.push(result.targets[0]);
                }
            },
            sub:true,
        },
        leisha:{
            trigger:{
                player:"useCardToPlayered",
            },
            forced:true,
            filter:function (event,player){
                return event.card.name=='sha'&&event.getParent().skill=='XSjichi2';
            },
            content:function (){
                "step 0"
                var suit1=get.suit(trigger.card);
                if(trigger.target.countCards('h',{suit:suit1})) {
                    trigger.target.chooseToDiscard('h','弃置1张'+get.translation(suit1)+'花色的牌，否则'+get.translation(player)+'的'+get.translation(trigger.card)+'结算结束前你无法使用或打出手牌。',function(card){
                        return get.suit(card)==suit1;
                    }).set('ai',function(card){
                        if(_status.event.res>=0) return 6-get.value(card);
                    });
                }
                else event.goto(2);
                "step 1"
                if(result.bool){
                    event.finish();
                }
                else{
                    event.goto(2);
                }
                "step 2"
                if(!trigger.target.hasSkill('XSjichi_feng')){
                    trigger.target.addTempSkill('XSjichi_feng','shaAfter');
                }   
            },
            sub:true,
        },
        feng:{
            mod:{
                "cardEnabled2":function (card,player){
                    if(get.position(card)=='h') return false;
                },
            },
            sub:true,
        },
    },
		},
		"XSjichi1":{
    marktext:"决",
    intro:{
        content:function (storage,player,skill){
            return '将1张基本牌当作决斗使用，目标需弃置1张同花色手牌，否则你可指定1个额外目标。';
        },
    },
    audio:2,
    enable:["chooseToUse"],
    filterCard:function (card){
        return get.type(card)=='basic';
    },
    position:"h",
    viewAs:{
        name:"juedou",
    },
    viewAsFilter:function (player){
        if(!player.countCards('h',{type:'basic'})) return false;
        if(player.storage.XSjichi!=true) return false;
    },
    onuse:function (result,player){
        player.storage.XSjichi=false;
        player.unmarkSkill("XSjichi1");
        player.markSkill("XSjichi2");
    },
    prompt:"将一张基本牌当作决斗使用",
    check:function (card){return 6-get.value(card)},
    ai:{
		order:9,
		useful:1,
		value:5.5,
        effect:{
            target:function (card,player,target,current){
                if(get.tag(card,'respondSha')&&current<0) return 0.6
            },
        },
        result:{
            target:-2,
            player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -1.5;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -1.5;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -1.5;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -1.5;
                }
                return -0.5;
            },
        },
        tag:{
            respond:2,
            respondSha:2,
            damage:1,
        },
        wuxie:function (target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
    },
		},
		"XSjichi2":{
   marktext:"杀",
    intro:{
        content:function (storage,player,skill){
            return '将1张基本牌当作雷杀使用，目标需弃置1张同花色手牌，否则此杀结算结束前其无法使用或打出手牌。';
        },
    },
    audio:2,
    enable:["chooseToUse"],
    filterCard:function (card){
        return get.type(card)=='basic';
    },
    position:"h",
    viewAs:{
        name:"sha",
        nature:"thunder",
    },
    viewAsFilter:function (player){
        if(!player.countCards('h',{type:'basic'})) return false;
        if(player.storage.XSjichi!=false) return false;
    },
    onuse:function (result,player){
        player.storage.XSjichi=true;
        player.markSkill("XSjichi1");
        player.unmarkSkill("XSjichi2");
    },
    prompt:"将一张基本牌当作雷杀使用",
    check:function (card){return 6-get.value(card)},
    ai:{
        skillTagFilter:function (player){
            if(!player.countCards('h',{type:'basic'})) return false;
        },
        respondSha:true,
        basic:{
            useful:[5,1],
            value:[5,1],
        },
        order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 8;
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
		"XSjugong":{
    mark:true,
    marktext:"拒",
    limited:true,
    skillAnimation:true,
    animationColor:"green",
    unique:true,
    enable:"chooseToUse",
	priority:-10,
    init:function (player){
        player.storage.XSjugong=false;
    },
    intro:{
        content:"limited",
    },
    filter:function (event,player){
        if(player.storage.XSjugong) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
    content:function (){
		"step 0"
        player.awakenSkill('XSjugong');
        player.storage.XSjugong=true;	
		"step 1"
		event.num=5;
		event.num1=0;
		"step 2"
        player.draw();
        "step 3"
        if(Array.isArray(result)&&result.length){
            event.gained=result[0];
            if(lib.filter.cardEnabled(event.gained,target)){
                var next=player.chooseToUse();
                next.filterCard=function(card){
                    return card==event.gained;
                };
                next.prompt='是否使用'+get.translation(event.gained)+'？';
            }
			else event.goto(4);
        }
        else{
			event.goto(4);
        }	
		"step 4"
		if(result.bool==true){
			event.num1++;
		}
		"step 5"	
		event.num--;
        if(event.num>0){
            event.goto(2);
        }
        else{
			if(event.num1>=4) {
				if(player.hp>=1) {
					player.recover();
				}
				else {
					player.hp==1;
					player.update();
				}
			}
        }
    },
	ai:{
        order:0.5,
        skillTagFilter:function (player){
            if(player.storage.XSjugong) return false;
            if(player.hp>1) return false;
        },
        save:true,
        result:{
            player:function (player){
                if(player.hp<=0) return 10;
                return 0;
            },
        },
        threaten:function (player,target){
            if(!target.storage.XSjugong&&target.hp==1) return 0.4;
        },
    },
		},
		"XSjingtian":{
    audio:2,
    trigger:{
        player:["phaseDrawBefore","phaseUseBefore"],
    },
    direct:true,
    content:function (){
        "step 0"
        if(trigger.name=="phaseDraw") {
            var pha='摸牌阶段';
        }
        else {
            var pha='出牌阶段';
        }
        player.chooseTarget("是否跳过"+pha+"视为对攻击范围内的一名其他角色使用一张不计入次数的【杀】？",function(card,player,target){
            if(player==target) return false;
            return player.canUse({name:'sha'},target,false)&&get.distance(player,target,'attack')<=1;
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            if(trigger.name=="phaseDraw") {
                return player.countCards('h')<=2&&get.effect(target,{name:'sha'},player);
            }
            else {
                return !player.needsToDiscard()&&get.effect(target,{name:'sha'},player);
            }
        });
        "step 1"
        if(result.bool){
            player.logSkill('XSjingtian',result.targets);
            player.useCard({name:'sha'},result.targets[0],false);
            trigger.cancel();
        }
    },
		},	
		"XSweidi":{
    audio:2,
    trigger:{
        player:["phaseJudgeBefore","phaseDrawBefore","phaseUseBefore","phaseDiscardBefore"],
    },
    priority:999,
    direct:true,
    content:function (){
        "step 0"
        event.pha='';
        switch(trigger.name){
            case "phaseJudge":event.pha='判定阶段';break;
            case "phaseDraw":event.pha='摸牌阶段';break;
            case "phaseUse":event.pha='出牌阶段';break;
            case "phaseDiscard":event.pha='弃牌阶段';break;
        }
        "step 1"
        event.targets=game.filterPlayer(function(current){
            return current!=player&&current.countCards('h',{suit:'diamond'});
        });
        event.targets.sort(lib.sort.seat);    
        "step 2"
        if(event.targets.length){
            var target=event.targets.shift();
            event.target=target;
            target.chooseCard('是否交给'+get.translation(player)+'一张方片牌，令其跳过'+event.pha,'h',true,function(card){
                return get.suit(card)=='diamond';
            },false).set('ai',function(card){
                var pla=_status.event.player;
                var trigger=_status.event.getTrigger();
                var att=get.attitude(pla,trigger.player);
                if(att>0){
                    if(trigger.name=="phaseJudge"&&trigger.player.countCards('j')) {
                        return 4-get.value(card);
                    }
                    else if(trigger.name=="phaseDiscard"&&trigger.player.needsToDiscard()) {
                        return 5-get.value(card);
                    }
                    return -1;
                }
                else{
                    return -get.value(card);
                }
            });
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.bool){
            player.gain(result.cards[0]);
            event.target.$give(1,player);
            trigger.cancel();
        }
        else{
            event.goto(2);
        }
    },
		},	
		"XSjingsi":{
    audio:2,
    trigger:{
        player:["phaseEnd"],
    },
    filter:function (event,player){
        var num1=player.getHistory('skipped').length;
        return num1>0&&player.countCards('he');
    },
    direct:true,
    content:function (){
        "step 0"
        var list=[];
        var skiplist=player.getHistory('skipped').slice(0);
        var str=''
        for(var i=0;i<skiplist.length;i++) {
            var str='';
            switch(skiplist[i]){
                case "phaseJudge":str='判定阶段';break;
                case "phaseDraw":str='摸牌阶段';break;
                case "phaseUse":str='出牌阶段';break;
                case "phaseDiscard":str='弃牌阶段';break;
            }
            list.push(str);
        }
		if(!list.length) event.finish();
		else {
			list.push('取消');
			player.chooseControl(list).set('ai',function(event){
				if(list.contains('摸牌阶段')) return '摸牌阶段';
				if(list.contains('出牌阶段')&&player.countCards('h')>2) return '出牌阶段';
				return '取消';
			}).set('prompt','选择进行一个阶段');
		}
        "step 1"
        if(result.control&&result.control!='取消'){
            event.control=result.control;
            player.chooseToDiscard('弃置一张牌并并获得一个'+event.control,'he',false).set('ai',function(card){
                return 6-get.value(card);
            });
        }
        else event.finish();
        "step 2"
        if(result.bool){
            player.getStat().card={};
            player.getStat().skill={};
            player.update();    
            game.log(player,'获得了一个',event.control);
            switch(event.control){
                case '判定阶段':
                    player.phaseJudge();
                break;
                case '摸牌阶段':
                    player.phaseDraw();
                break;
                case '出牌阶段':
                    player.phaseUse();
                break;
                case '弃牌阶段':
                    player.phaseDiscard();
                break;
            }
        }
    },
		},	
		"XSqiaobian":{
    audio:2,
    trigger:{
        player:"useCardToBefore",
    },
    priority:16,
    check:function (event,player){
        var eff=get.effect(event.target,{name:'sha'},player,player);
        var eff1=get.effect(event.target,event.card,player,player);
        if(eff1>eff) return false; 
        return true;
    },
    filter:function (event,player){
        if(event.card.name=='wuxie'||event.card.name=='jinchan'||event.card.name=='sha') return false;
        if(event.target==player) return false;
        return true;
    },
    logTarget:function (event,player){
        return event.target;
    },
    content:function (){
        "step 0"
        var num1=player.actionHistory[player.actionHistory.length-1].useCard.length-1;
        player.actionHistory[player.actionHistory.length-1].useCard.splice(num1,1);
        "step 1"
        player.useCard({name:'sha'},trigger.target,false);
        "step 2"
        trigger.cancel();
    },
    ai:{
        threaten:1.2,
        expose:0.3,
    },
		},
		"XSbingji":{
   trigger:{
        source:"damageBegin",
    },
    filter:function (event,player){
        var num1=player.getHistory('useCard').length;
        if(num1!=player.hp) return false;
        return event.card&&get.tag(event.card,'damage')&&event.notLink();
    },
    forced:true,
    init:function (player){
        player.markSkill('XSbingji');
    },
    intro:{
        content:function (content,player){
            var num1=player.getHistory('useCard').length;
            var str='本回合已使用: <span class="bluetext">'+num1+' </span>张牌。';
            return str;
        },
    },
    content:function (){
        trigger.num=trigger.num*2;
    },
    ai:{
        effect:{
            player:function (card,player){
                if(get.tag(card,'damage')) {
                    var num1=player.getHistory('useCard').length;
                    if(num1+1==player.hp) return 2;
                }
            },
        },
    },
		},
		"XStongyi":{
    audio:2,
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&!target.hasSkill('XStongyi_temp');
    },
    selectTarget:1,
    content:function (){
        "step 0"
        target.viewHandcards(player);
        target.addTempSkill('XStongyi_temp');
        "step 1"
        player.viewHandcards(target);
        event.cards=target.getCards('h',function(card){
            return get.type(card)=='basic';
        });
        if(!event.cards.length){
            player.getStat().skill.XStongyi--;
            event.goto(4);
        }
        "step 2"
        player.chooseCardButton('选择一张基本牌弃置之',event.cards,false).ai=function(button){
            return get.value(button.link)-4;
        }
        "step 3"
        if(result.bool){
            target.discard(result.links[0]);
        }
        else {
            player.getStat().skill.XStongyi--;
        }
        "step 4"
        var cardsX=target.getCards('h',function(card){
            return get.type(card)!='basic';
        });
        player.showCards(get.translation(target)+'的非基本牌',cardsX);
    },
    ai:{
        order:9,
        result:{
            target:-1,
        },
    },
    subSkill:{
        temp:{
            sub:true,
        },
    },
		},
		"XSfanlun":{
	trigger:{
		target:"useCardToBefore",
	},
	priority:12,
	check:function (event,player){
		var eff=get.effect(player,event.card,event.player,player);
		var att=get.attitude(player,event.player);
		return (eff<0&&att<=0)||(eff>0&&att>0);
    },
	"prompt2":function (event,player){
		var translation1=get.translation(event.card);
		var translation2=get.translation(event.player);
        return '是否使'+translation2+'的'+translation1+'对你无效，并视为你对'+translation2+'使用'+translation1+'?';
    },
	filter:function (event,player){
		if(event.card.name=='wuxie'||event.card.name=='jinchan') return false;
		if(player.hasSkill('XSfanlun_sha')||player.hasSkill('XSfanlun_trick')||player.hasSkill('XSfanlun_temp')) return false;
		if(get.type(event.card)!='trick'&&event.card.name!='sha') return false;
		return event.player!=player;
	},
	content:function(){
		"step 0"
		if(trigger.card.name=='sha') {
			player.addTempSkill('XSfanlun_trick');
		}
		else {
			player.addTempSkill('XSfanlun_sha');
		}
		player.useCard(trigger.card,trigger.player,false);
		"step 1"
		trigger.cancel();
	},
	ai:{
		effect:{
			target:function (card,player,target){
				var att=get.attitude(player,target);
				if(card.name=='sha'){
					if(!target.hasFriend()) return;
					if(target.hasSkill('XSfanlun_sha')) return 2;
					if(att<0) {
						if(player.canUse({name:'shunshou'},target)&&player.countCards('h','shunshuo')){
							return [0,-0.5];
						}
						return [0,2];
					}
					return [0,0,1,-1];
				}
				else if(get.type(card)=='trick'&&card.name!='wuxie'&&card.name!='jinchan'){
					if(!target.hasFriend()) return;
					if(target.hasSkill('XSfanlun_trick')) return 2;
					if(att<0) {
						if(player.countCards('h','sha')>0&&player.canUse({name:'sha'},target)){
							return [0,-0.5];
						}
						return [0,2];
					}
					return [0,0,1,2];
				}
			},
		},
    },
	group:["XSfanlun_mark"],
	subSkill:{
        mark:{
			trigger:{
				target:"useCardToBefore",
			},
			priority:-1,
			direct:true,
			filter:function (event,player){
				if(event.card.name=='wuxie'||event.card.name=='jinchan') return false;
				if(player.hasSkill('XSfanlun_temp')) return false;
				if(get.type(event.card)!='trick'&&event.card.name!='sha') return false;
				return event.player!=player;
			},
			content:function(){
				player.addTempSkill('XSfanlun_temp');
			},
            sub:true,
        },
		sha:{
			trigger:{
				target:"useCardToBefore",
			},
			priority:9,
			forced:true,
			filter:function (event,player){
				if(event.player==player) return false;
				if(event.getParent(2).name=='XSfanlun_sha') return false;
				return event.card.name=='sha';
			},
			content:function(){
				trigger.player.useCard(trigger.card,player,false);
			},
            sub:true,
        },
		trick:{
			trigger:{
				target:"useCardToBefore",
			},
			priority:9,
			forced:true,
			filter:function (event,player){
				if(event.player==player) return false;
				if(event.getParent(2).name=='XSfanlun_trick') return false;
				return get.type(event.card)=='trick'&&event.card.name!='wuxie'||event.card.name!='jinchan';
			},
			content:function(){
				trigger.player.useCard(trigger.card,player,false);
			},
            sub:true,
        },
		temp:{
            sub:true,
        },
    },
		},
		"XSmengjin":{
    audio:2,
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&player.canUse('sha',target);
    },
    filter:function (event,player){
        return player.countCards('h');
    },
    selectTarget:1,
    position:"h",
    filterCard:true,
    selectCard:[1,Infinity],
    check:function (card){
        return 4-ai.get.value(card);
    },
    content:function (){
        "step 0"
        var basiclist=[];
        basiclist.push(['基本','','sha']);
        basiclist.push(['基本','','sha','fire']);
        basiclist.push(['基本','','sha','thunder']);
        player.chooseButton(['视为对'+get.translation(target)+'使用了1张杀',[basiclist,'vcard']]).set('ai',function(button){
            var eff1=get.effect(target,{name:'sha'},player,player);
            var eff2=get.effect(target,{name:'sha',nature:'fire'},player,player);
            var eff3=get.effect(target,{name:'sha',nature:'thunder'},player,player);
            if(eff1>=eff2&&eff1>=eff3) return 0;
            if(eff3>=eff2&&eff3>=eff1) return 2;
            return 1;
        });
        "step 1"
        if(result&&result.bool&&result.links[0]){
            event.ShanNum=cards.length;
            var card1={name:result.links[0][2],nature:result.links[0][3]};
            player.useCard(card1,target,false);
        }
    },
    ai:{
        order:9,
        result:{
            player:-0.5,
            target:-2,
        },
    },
    group:["XSmengjin_shan"],
    subSkill:{
        shan:{
            trigger:{
                player:"shaBegin",
            },
            forced:true,
            filter:function (event,player){
                return !event.directHit&&event.getParent(2).name=='XSmengjin'&&event.getParent(2).ShanNum>0;
            },
            priority:-1,
            content:function (){
                var num1=trigger.getParent(2).ShanNum-1;
                if(typeof trigger.shanRequired=='number'){
                    trigger.shanRequired+=num1;
                }
                else{
                    trigger.shanRequired=(1+num1);
                }
            },
            sub:true,
        },
    },
		},
		"XSzhuiji":{
    priority:12,
    trigger:{
        player:["shaAfter"],
    },
	init:function (player){
		player.storage.XSzhuiji=0;
	},
    filter:function (event,player){
        if(player.storage.XSzhuiji>99) {
			return false; 
		}
        return event.target.isAlive();
    },
    check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
    "prompt2":function (event,player){
		var num2=player.storage.XSzhuiji;
		if(event.getParent(2).name!='XSzhuiji') {
			num2=0;
		}
		if(event.responded) {
			var num1=get.distance(player,event.target)*5+num2;
			if(num1<0) num1=0;
		}
		else {
			var num1=get.distance(player,event.target)*3+num2;
			if(num1<0) num1=0;
		}
        return '是否进行1次判定，若结果不小于'+num1+'你可令'+get.translation(event.card)+'继续对'+get.translation(event.target)+'结算。';
    },
    content:function (){    
        "step 0"
		if(trigger.getParent(2).name!='XSzhuiji') {
			player.storage.XSzhuiji=0;
		}
		if(trigger.responded) {
			event.num1=get.distance(player,trigger.target)*5+player.storage.XSzhuiji;
		}
		else {
			event.num1=get.distance(player,trigger.target)*3+player.storage.XSzhuiji;
		}
        player.judge(function(card){
            if(get.number(card)>=event.num1) return 3;
            return -3;
        });
        "step 1"
        if(result.bool==true){
            player.useCard(trigger.card,trigger.target,false);
			if(trigger.responded) {
				player.storage.XSzhuiji+=5;
			}
			else {
				player.storage.XSzhuiji+=3;
			}
        }
        else {
            player.storage.XSzhuiji+=100;
        }
    },
    ai:{
        expose:0.2,
    },
	group:["XSzhuiji_clear"],
    subSkill:{
        clear:{
			priority:11,
			trigger:{
				player:["shaAfter"],
			},
			filter:function (event,player){
				return player.storage.XSzhuiji>99; 
			},
			forced:true,
            popup:false,
            silent:true,
			content:function (){    
				player.storage.XSzhuiji=0;
			},
            sub:true,
        },
    },
		},
		"XSyoushui":{
    trigger:{
        player:"damageBegin",
    },
    priority:12,
    check:function (event,player){
        if(get.attitude(player,event.source)>0) return false;
        var hs=player.getCards('h');
        var num=0;
        for(var i=0;i<hs.length;i++){
            if(hs[i].number>=8||get.value(hs[i])<7){
                num++;
            }
        }
        return num>0;
    },
    filter:function (event,player){
        return event.source&&event.source!=player&&player.countCards('h')&&event.source.countCards('h');
    },
    content:function (){
        'step 0'
        player.chooseToCompare(trigger.source);
        'step 1'
        if(result.bool){
            trigger.source.damage(player,trigger.num,trigger.nature);
            player.gain(trigger.cards,"gain2");
        }
    },
    ai:{
        "maixie_defend":true,
        expose:0.3,
    },
		},
		"XStongzhan":{
   trigger:{
        global:"damageBefore",
    },
    priority:15,
    check:function (event,player){
        return get.attitude(player,event.player)>0&&player.hp>=event.player.hp;
    },
    filter:function (event,player){
        return get.distance(player,event.player)>1&&event.source!=event.player;
    },
    content:function (){
        "step 0"
        player.judge(function(card){
            if(get.number(card)>7) return 3;
            return -3;
        });
        "step 1"
        if(result.bool==true){
            trigger.cancel();
        }
        else {
            trigger.player=player;
        }
    },
    ai:{
        threaten:1.3,
        expose:0.3,
		ai:{
		　　effect:{
	　　		player:function(card,player){
					if(get.subtype(card)=='equip4'||get.subtype(card)=='equip6') return [1,-2];
				}
			}
		},
    },
		},
		"XSkuangke":{
		    group:["XSkuangke_compare","XSkuangke_judge"],
    subSkill:{
        compare:{
            trigger:{
                player:"compare",
                target:"compare",
            },
            direct:true,
            filter:function (event,player){
                if(event.iwhile) return false;
                if(event.player==player){
                    return get.color(event.card1)=='black';
                }
                else{
                    return get.color(event.card2)=='black';
                }
            },
            silent:true,
            content:function (){
                var numX=player.maxHp;
                game.log(player,'拼点牌点数增加',numX);
                if(player==trigger.player){
                    trigger.num1+=numX;
                }
                else{
                    trigger.num2+=numX;
                }
            },
            sub:true,
            forced:true,
            popup:false,
        },
        judge:{
            trigger:{
                player:"judge",
            },
            priority:-10,
            filter:function (event,player){
                return get.color(event.player.judging[0])=='red';
            },
            direct:true,
            silent:true,
            content:function (){
                var num1=player.maxHp;
                trigger.player.judging[0].number+=num1;
                game.log(trigger.player,'的判定牌点数增加',num1);
            },
            sub:true,
            forced:true,
            popup:false,
        },
    },
		},
		"XShuoji":{
    trigger:{
        player:"phaseDrawBegin1",
    },
    check:function (event,player){
        return player.countCards('h')>3;
    },
    content:function (){
        trigger.num--;
        player.addTempSkill('XShuoji_card');
    },
    subSkill:{
        card:{
            audio:2,
            enable:"phaseUse",
            filterCard:function (card){return true;},
            viewAs:{
                name:"huogong",
                nature:"fire",
            },
            position:"h",
            viewAsFilter:function (player){
                if(!player.countCards('h')) return false;
            },
            prompt:"将一张手牌当火攻使用",
            check:function (card){
                var player=_status.currentPhase;
                if(player.countCards('h')>player.hp){
                    return 6-get.value(card);
                }
                return 3-get.value(card)
            },
            ai:{
                basic:{
                    order:6,
                    value:[6,1],
                    useful:3,
                },
                wuxie:function (target,card,player,current,state){
                    if(get.attitude(current,player)>=0&&state>0) return false;
                },
                result:{
                    player:function (player){
                        var nh=player.countCards('h');
                        if(nh<=player.hp&&nh<=3&&_status.event.name=='chooseToUse'){
                            if(typeof _status.event.filterCard=='function'&&
                                _status.event.filterCard({name:'huogong'},player,_status.event)){
                                return -10;
                            }
                            if(_status.event.skill){
                                var viewAs=get.info(_status.event.skill).viewAs;
                                if(viewAs=='huogong') return -10;
                                if(viewAs&&viewAs.name=='huogong') return -10;
                            }
                        }
                        return 0;
                    },
                    target:function (player,target){
                        if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                        if(player.countCards('h')<=1) return 0;
                        if(target==player){
                            if(typeof _status.event.filterCard=='function'&&
                                _status.event.filterCard({name:'huogong'},player,_status.event)){
                                return -1.5;
                            }
                            if(_status.event.skill){
                                var viewAs=get.info(_status.event.skill).viewAs;
                                if(viewAs=='huogong') return -1.5;
                                if(viewAs&&viewAs.name=='huogong') return -1.5;
                            }
                            return 0;
                        }
                        return -1.5;
                    },
                },
                tag:{
                    damage:1,
                    fireDamage:1,
                    natureDamage:1,
                    norepeat:1,
                },
            },
            sub:true,
        },
    },
		},
		"XSjieyong":{
    trigger:{
        player:["discardEnd"],
    },
    filter:function (event,player){
        return event.getParent(2).name=='huogong';
    },
    forced:true,
    content:function (){
        "step 0"
        player.judge(function(card){
            var col=get.color(trigger.cards[0]);
            if(get.color(card)==col) return 3;
            return -3;
        });
        "step 1"
        if(result.bool==true){
            event.card1=result.card;
            var translation1=get.translation(event.card1);
            var translation2=get.translation(trigger.cards[0]);
            player.chooseControl().set('choiceList',['获得'+translation1,'获得'+translation2]).set('ai',function(event,player){
                var trigger=_status.event.getTrigger();
                if(get.value(trigger.cards[0])>=get.value(event.card1)-1) return 1;
                return 0;
            });
        }
        else event.finish();
        "step 2"
        if(result.index==0){
            player.gain(event.card1,'log');
            player.$gain2(event.card1);
        }
        else{
            player.gain(trigger.cards[0],'log');
            player.$gain2(trigger.cards[0]);
        }
    },
    group:["XSjieyong_draw","XSjieyong_count"],
    subSkill:{
        count:{
            trigger:{
                source:"damageEnd",
            },
            forced:true,
            popup:false,
            silent:true,
            filter:function (event,player){
                return event.card&&event.card.name=='huogong'&&event.num>0&&event.notLink();
            },
            init:function (player){
                player.storage.XSjieyong_count=0;
            },
            content:function (){
                player.storage.XSjieyong_count+=trigger.num;
            },
            sub:true,
        },
        draw:{
            trigger:{
                player:"phaseUseAfter",
            },
            forced:true,
            filter:function (event,player){
                return player.storage.XSjieyong_count>0;
            },
            content:function (){
                player.draw(player.storage.XSjieyong_count);
                player.storage.XSjieyong_count=0;
            },
            sub:true,
        },
    },
		},
		"XShuoluan":{
   audio:2,
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&!target.isLinked();
    },
    filter:function (event,player){
        return game.hasPlayer(function(current){
            return !current.isLinked();
        });
    },
    selectTarget:function (){
        var player=_status.event.player;
        var num=player.maxHp-player.hp+1;
        return [1,num];
    },
    multitarget:true,
    multiline:true,
    content:function (){
        "step 0"
        player.link(true);
        for(var i=0;i<targets.length;i++) {
            targets[i].link(true);
        }
        "step 1"
        var num1=num=player.maxHp-player.hp+2;
        player.chooseTarget('选择移走至多'+num1+'名角色判定区的牌',[1,num1],function(card,player,target){
            return target.countCards('j')>0;
        },function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) {
                if(target.hasSkill('XSzhisheng')||target.hasSkill('XSxianji')) return -att;
            }
            return att;
        });
        "step 2"
        if(result.bool){
            event.targetsX=result.targets;
            var dran="";
            for(var i=0;i<event.targetsX.length;i++) {
                dran+=get.translation(event.targetsX[i]);
                if(i!=event.targetsX.length-1) {
                    dran+="、";
                }
            }
            player.chooseTarget('将'+dran+'判定区的牌移动至1名其他角色判定区',function(card,player,target){
                for(var i=0;i<event.targetsX.length;i++) {
                    if(target==event.targetsX[i]) return false;
                }
                return true;
            },function(target){
                var att=get.attitude(_status.event.player,target);
                if(att>0) {
                    if(target.hasSkill('XSzhisheng')) return att+10;
                    if(target.hasSkill('XSxianji')) return att+6;
                }
                return -att;
            });
        }
        else event.finish();
        "step 3"
        if(result.bool) {
            var target1=result.targets[0];
            for(var i=0;i<event.targetsX.length;i++) {
                var cards=event.targetsX[i].getCards('j')
                event.targetsX[i].lose(cards,ui.special);
                event.targetsX[i].line(target1);
                for(var j=0;j<cards.length;j++) {
                    if(cards[j].viewAs){
                        target1.addJudge({name:cards[j].viewAs},[cards[j]]);
                    }
                    else{
                        target1.addJudge(cards[j]);
                    }
                }
            }
        }
    },
    ai:{
        order:9,
        result:{
            player:function (player){
                var num1=game.countPlayer(function(current){
                    return get.attitude(player,current)>=0&&current.countCards('j')>0&&!current.hasSkill('XSzhisheng')&&!current.hasSkill('XSxianji');
                });
                var num2=game.countPlayer(function(current){
                    return get.attitude(player,current)<=0&&!current.isLinked();
                });
                if(num1>0) return 1;
                else if(num2>1) return 1;
                return -1;
            },
            target:-1,
        },
    },
		},
		"XSbeiqi":{
   trigger:{
        player:"damageBefore",
    },
    filter:function (event){
        return event.nature&&event.getParent().name!='XSbeiqi';
    },
    content:function (){
        "step 0"
        var num1=player.maxHp-player.hp+1;
        player.chooseTarget('令你和至多'+num1+'名角色横置',[1,num1],function(card,player,target){
            return target!=player&&!target.isLinked();
        },function(target){
            var tri=_status.event.getTrigger();
            var player=_status.event.player;
            var dameff=get.damageEffect(target,trigger.source,player,trigger.nature);
            return dameff;
        });
        "step 1"
        player.link(true);
        for(var i=0;i<result.targets.length;i++) {
            result.targets[i].link(true);
        }
		"step 2"
		if(!trigger.notLink()) {
			player.damage(trigger.nature,trigger.num,trigger.player);
			trigger.cancel();
		}
    },
    ai:{
        effect:{
            target:function (card,player,target){
                if(get.tag(card,'natureDamage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num1=game.countPlayer(function(current){
                        return get.attitude(target,current)<0;
                    });
                    if(target.hp>2) return [1,num1*2];
                    return [1,num1];
                }
            },
        },
    },
		},
		"XSpingluan":{
    mod:{
        globalFrom:function (from,to,current){
            if(to.hasSkill('XSpingluan_mark')) return current-1;
            return current;
        },
        globalTo:function (from,to,current){
            if(from.hasSkill('XSpingluan_mark')) return current+1;
            return current;
        },
    },
    audio:2,
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&!target.hasSkill('XSnizhan_temp');
    },
    filter:function (event,player){
        return game.hasPlayer(function(current){
            return !current.hasSkill('XSnizhan_temp');
        });
    },
    selectTarget:1,
    content:function (){
        player.useCard({name:'sha'},target,false);
        target.addSkill('XSpingluan_mark');
        target.storage.XSpingluan_mark=player;
        target.addTempSkill('XSpingluan_temp');
    },
    ai:{
        order:9,
        result:{
            target:function (target,player){
                var eff=get.effect(target,{name:'sha'},player,target);
                return eff;
            },
        },
    },
    subSkill:{
        mark:{
            marktext:"平",
            charlotte:true,
            intro:{
                content:"$计算与你的距离始终为1。",
            },
            init:function (player){
                player.markSkill('XSpingluan_mark');
            },
            sub:true,
        },
        temp:{
            sub:true,
        },
    },
		},
		"XSnizhan":{
   audio:2,
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&target.hasSkill('XSpingluan_mark')&&!target.hasSkill('XSpingluan_temp');
    },
    filter:function (event,player){
        return game.hasPlayer(function(current){
            return current.hasSkill('XSpingluan_mark')&&!current.hasSkill('XSpingluan_temp');
        });
    },
    selectTarget:1,
    content:function (){
        player.draw();
        player.line(target);
        delete target.storage.XSpingluan_mark;
        target.removeSkill('XSpingluan_mark');
        target.addTempSkill('XSnizhan_mark');
        target.markSkillCharacter('XSnizhan_mark',player,'逆战','你无法使用或打出任何手牌。');
        target.addTempSkill('XSnizhan_temp');
    },
    ai:{
        order:8,
        result:{
            player:1,
            target:-1,
        },
    },
    subSkill:{
        mark:{
            onremove:function (player){
                player.unmarkSkill('XSnizhan_mark');
            },
            mod:{
                "cardEnabled2":function (card,player){
                    if(get.position(card)=='h') return false;
                },
            },
            ai:{
                effect:{
                    target:function (card,player,target){
                        if(get.tag(card,'damage')) return [0,-999999];
                    },
                },
            },
            sub:true,
        },
        temp:{
            sub:true,
        },
    },
		},
		"XSduji":{
    audio:2,
    trigger:{
        player:"useCardToBefore",
    },
    priority:15,
    check:function (event,player){
        var dameff=get.damageEffect(event.target,player,player);
		if(event.target.hp==1) dameff=dameff*1.5;
        var eff=get.effect(event.target,event.card,player,player);
        if(damage>eff) return true;
        return false;
    },
    filter:function (event,player){
		if(get.type(event.card)!='trick') return false;
		if(event.card.name=='wuxie'||event.card.name=='jinchan') return false;
		if(event.targets.contains(player)) return false;
		if(event.target.hasSkill('XSduji_mark')&&event.target.storage.XSduji_mark.contains(event.card.name)) return false;
        return true;
    },
    logTarget:function (event,player){
        return event.target;
    },
    content:function (){
        trigger.setContent(function(){
			var evt=_status.event;
            evt.target.damage(player);
			if(!evt.target.hasSkill('XSduji_mark')) {
				evt.target.addSkill('XSduji_mark');
				evt.target.storage.XSduji_mark=[];
			}
			evt.target.storage.XSduji_mark.push(evt.card.name);
			evt.target.markSkill('XSduji_mark');
        });
    },
	ai:{
		threaten:1.2,
	},
	subSkill:{
        mark:{
			intro:{
                content:function (storage){
                    return '毒计已生效：'+get.translation(storage);
                },
            },
            sub:true,
        },
    },
		},
		"XSlinchao":{
    trigger:{
        player:"phaseDrawBegin1",
    },
    forced:true,
    locked:false,
    content:function (){
        "step 0"
        var cards=get.cards(3);
        game.cardsGotoOrdering(cards);
        player.showCards(cards,'临朝');
        var cardsx=[];
        for(var i=0;i<cards.length;i++){
            if(get.type(cards[i])=='trick'||get.type(cards[i])=='delay'){
                cardsx.push(cards[i]);
            }
        }
        event.cardsx=cardsx;
		if(cardsx.length==0) {
			player.chooseBool("是否放弃摸牌，视为使用1张万箭齐发？").ai=function(event,player){
				var targets=game.filterPlayer(function(current){
					return player.canUse('wanjian',current);
				});
				var num=0;
				for(var i=0;i<targets.length;i++){
					var eff=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player));
					if(targets[i].hp==1){
						eff*=1.5;
					}
					num+=eff;
				}
				if(targets.length>=7&&num>=2){
					return true;
				}
				else if(targets.length>=5&&num>=1.5){
					return true;
				}
				return false;
			};
		}
		else if(cardsx.length==1) {
			player.chooseBool("是否放弃摸牌，改为获得"+get.translation(event.cardsx)+"，并视为使用1张无中生有？").ai=function(event,player){
				return event.cardsx[0].name!='shandian'&&event.cardsx[0].name!='fulei';
			};
		}
		else if(cardsx.length==2) {
			player.chooseBool("是否放弃摸牌，改为获得"+get.translation(event.cardsx)+"，并视对攻击范围内的1名角色造成1点伤害？").ai=function(event,player){
				var num1=0;
				for(var i=0;i<event.cardsx.length;i++) {
					if(event.cardsx[0].name!='shandian'&&event.cardsx[0].name!='fulei')
					num1++;
				}
				return num1=2;
			};
		}
		else {
			player.chooseBool("是否放弃摸牌，改为获得"+get.translation(event.cardsx)+"？").ai=function(event,player){
				var num1=0;
				for(var i=0;i<event.cardsx.length;i++) {
					if(event.cardsx[0].name!='shandian'&&event.cardsx[0].name!='fulei')
					num1++;
				}
				return num1=3;
			};
		}
        "step 1"
        if(result.bool){
            var cards2=[];
            for(var i=0;i<event.cardsx.length;i++){
                if(get.type(event.cardsx[i])=='trick'||get.type(event.cardsx[i])=='delay'){
                    cards2.push(event.cardsx[i]);
                    event.cardsx.splice(i--,1);
                }
            }
            player.gain(cards2,'gain2');
            var num2=cards2.length;
            if(num2==0) {
                player.chooseUseTarget({name:"wanjian"},true);
                event.goto(3);
            }
            else if(num2==1) {
                player.useCard({name:'wuzhong'},player);
                event.goto(3);
            }
            else if(num2==2) {
                player.chooseTarget('对1名攻击范围内的其他角色造成1点伤害',function(card,player,target){
                    return player!=target&&get.distance(player,target,'attack')<=1;
                }).ai=function(target){
                    var dameff=get.damageEffect(target,player,player);
                    return dameff;
                }
            }
            else event.goto(3);
        }
        else event.finish();
        "step 2"
        if(result.bool){
            player.line(result.targets[0]);
            result.targets[0].damage("nocard",player);
            game.delay(0.5);
        }
        "step 3"
        trigger.cancel(null,null,'notrigger');
    },
		},
		"XSxumou":{
    trigger:{
        source:"damageBegin",
    },
    filter:function (event){
        return event.card&&get.type(event.card)=='trick';
    },
    forced:true,
    content:function (){
        trigger._triggered=null
    },
		},
		"XSdaizheng":{
    priority:12,
    trigger:{
        global:["shaAfter"],
    },
    filter:function (event,player){
        if(event.getParent(2).name=='XSdaizheng') return false;
        if(event.targets.length>1) return false;
        return event.targets[0].isAlive()&&player.countCards('h','sha')>0&&event.player!=player;
    },
    check:function (event,player){
        if(get.attitude(player,event.targets[0])>0) return false;
        if(get.effect(event.targets[0],{name:'sha'},event.player,player)>0) return true;
        return false;
    },
    content:function (){
        "step 0"
        player.chooseCard('h','选择并展示一张杀，视为'+get.translation(trigger.player)+'对'+get.translation(trigger.targets[0])+'使用',{name:'sha'},true).ai=function(card){return true;}
        "step 1"
        if(result.bool){
            event.card1=result.cards[0];
        }
        else event.finish();
        "step 2"
		var card=game.createCard(event.card1.name,event.card1.suit,event.card1.number,event.card1.nature);
        trigger.player.line(trigger.targets[0],'white');
        trigger.player.useCard(card,trigger.targets[0],false);
        "step 3"
        player.discard(event.card1);
        game.delay();
    },
    ai:{
        expose:0.2,
		effect:{
　　		player:function(card,player){
				if(card.name=='sha') {
					if(!player.needsToDiscard()) return 0;
				}
			}
		}
    },
		},
		"XSjiyou":{
    trigger:{
        player:["discardEnd"],
    },
    filter:function (event,player){
		if(event.getParent(2).name=='phaseDiscard') return false;
		for(var i=0;i<event.cards.length;i++){
			if(event.cards[i].original=='h') return true;
		}
    },
    check:function (event,player){
        if(event.cards.length==1&&event.cards[0].name=='du') return true;
        if(event.cards.length>1) return player.hasFriend();
        return false;
    },
    content:function (){
        "step 0"
		var cardX=[];
		for(var i=0;i<trigger.cards.length;i++){
			if(trigger.cards[i].original=='h') cardX.push(trigger.cards[i]);
		}
		event.cards1=cardX;
        player.chooseTarget('选择1名其他角色获得'+get.translation(event.cards1),function(card,player,target){
            return player!=target;
        }).ai=function(target){
            var player=_status.event.player;
            var trigger=_status.event.getTrigger();
            var att=get.attitude(player,target);
            var hs=target.countCards('h');
            if(hs<1) hs=1;
            if(trigger.cards.length==1&&trigger.cards[0].name=='du') return -att;
            return att/hs;
        }
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            target.gain(event.cards1);
            target.$gain2(event.cards1);
            game.log(target,'获得了',event.cards1);
            game.delay(0.5);
        }
        else event.finish();
    },
	ai:{
		expose:0.2,
		effect:{
			target:function (card,player,target){
				if(card.name=='guohe'&&target.countCards('ej')==0) return 0.5;
			},
		},
	},
		},
		"XStuiyin":{
    trigger:{
        player:"gainAfter",
    },
    check:function (event,player){
        return player.isDamaged();
    },
    filter:function (event,player){
        if(event.parent.parent.name=='phaseDraw') return false;
        return event.cards&&event.cards.length>1&&!player.hasSkill('XStuiyin_temp');
    },
    content:function (){
        "step 0"
        var num=trigger.cards.length;
        player.chooseToDiscard('弃置'+num+'张牌并回复1点体力',num,false).set('ai',function(card){
            return 8-get.value(card);
        });
        "step 1"
        if(result.bool){
            player.recover();
            player.addTempSkill('XStuiyin_temp',{player:'phaseBefore'});
        }
    },
    subSkill:{
        temp:{
            sub:true,
        },
    },
		},
		"XSxiangmian":{
				audio:2,
	enable:'phaseUse',
	usable:1,
	filterTarget:function(card,player,target){
		return target!=player&&target.countCards('h')>0;
	},
	content:function(){
		'step 0'
		player.showCards('相面',target.getCards('h'));
		target.addSkill('XSxiangmian_mark');
		target.markSkill('XSxiangmian_mark');
		'step 1'
		var suitlist=['heart','spade','diamond','club'];
		var num1=0;
		for(var i=0;i<suitlist.length;i++) {
			if(target.countCards('h',{suit:suitlist[i]})>0) {
				num1++;
			}
		}
		if(num1>0) target.addSkill('XSxiangmian_buff1');
		if(num1>1) target.addSkill('XSxiangmian_buff2');
		if(num1>2) target.recover();
		if(num1>3) target.addSkill('XShengzheng2');
	},
	ai:{
		order:3,
		result:{
			target:function(target,player){
				var hs=target.countCards('h');
				return 1+hs/2;
			},
		},
	},
	group:["XSxiangmian_remove"],
	subSkill:{
		mark:{
            marktext:"相",
            sub:true,
			intro:{
				name:"相面",
				content:"mark",
			},
        },
		buff1:{
			trigger:{
				player:"phaseDrawBegin",
			},
			forced:true,
			content:function (){
				trigger.num++;
			},
            sub:true,
        },
		buff2:{
			mod:{
				maxHandcard:function (player,num){
					return num+2;
				},
			},
            sub:true,
        },
		remove:{
			sub:true,
            trigger:{
                player:["phaseBefore","dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
                for(var i=0;i<game.players.length;i++){
					if(game.players[i].hasSkill('XSxiangmian_mark')){
                        game.players[i].removeSkill('XSxiangmian_mark');
                    }
                    if(game.players[i].hasSkill('XSxiangmian_buff1')){
                        game.players[i].removeSkill('XSxiangmian_buff1');
                    }
					if(game.players[i].hasSkill('XSxiangmian_buff2')){
                        game.players[i].removeSkill('XSxiangmian_buff2');
                    }
					if(game.players[i].hasSkill('XShengzheng2')){
                        game.players[i].removeSkill('XShengzheng2');
                    }
                }
            },
        },
    },
		},
		"XShengzheng2":{
			    trigger:{
        global:"phaseDrawEnd",
    },
    forced:true,
    filter:function (event,player){
        return event.player!=player&&event.player.countCards('h')>=player.countCards('h')&&player.countCards('h')<player.getHandcardLimit();
    },
    content:function (){
        "step 0"
        trigger.player.chooseCard('交给'+get.translation(player)+'一张牌',true).ai=function(card){
			var trigger=_status.event.getTrigger();
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
    },
	ai:{
		threaten:1.5,
    },
		},
		"XSwujing":{
	marktext:"经",
    intro:{
        content:"cards",
    },
	init:function(player){
		player.storage.XSwujing=[];
	},
	trigger:{
		global:"damageEnd",
	},
	filter:function (event,player){
		if(player.storage.XSwujing.length>=7) return false;
		return event.source&&event.source.hasSkill('XSxiangmian_mark')&&event.num>0;
	},
	forced:true,
	content:function(){
		"step 0"
		if(player.storage.XSwujing.length<7) {
			var card=get.cards()[0];
			player.$draw(card);
			game.delay();
			player.storage.XSwujing.push(card);
		}
		else event.goto(2);
		"step 1"
		if(player.storage.XSwujing.length<7) {
			var card=get.cards()[0];
			player.$draw(card);
			game.delay();
			player.storage.XSwujing.push(card);
		}
		else event.goto(2);
		"step 2"
		player.markSkill('XSwujing');
	},
	group:["XSwujing_draw","XSwujing_die"],
    subSkill:{
        draw:{
			audio:2,
			trigger:{
				player:"phaseUseBefore",
			},
			filter:function(event,player){
				return player.storage.XSwujing.length>0;
			},
			check:function (event,player){return true;},
			content:function(){
				"step 0"
				var num1=player.storage.XSwujing.length;
				player.draw(num1);
				"step 1"
				event.cards=player.storage.XSwujing;
				if(event.cards.length) player.chooseCardButton(event.cards,'按顺序将牌置于牌堆顶（先选择的在上）或置于弃牌堆',event.cards.length);
				"step 2"
				if(result.bool){
					var cardss=result.links.slice(0);
					for(var i=cardss.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cardss[i],ui.cardPile.firstChild);
					}
					game.log(trigger.player,'将',cardss,'置于牌堆顶');
				}
				else{
					if(event.cards.length){
						for(var i=0;i<event.cards.length;i++){
							event.cards[i].discard();
						}
					}
					game.log(trigger.player,'将',event.cards,'置于弃牌堆');
				}
				"step 3"
				player.$throw(player.storage.XSwujing,1000);
				player.storage.XSwujing=[];
				player.unmarkSkill('XSwujing');
			},
		},
		die:{
			trigger:{player:'dieBegin'},
			forced:true,
			popup:false,
			content:function(){
				player.$throw(player.storage.XSwujing,1000);
				game.cardsDiscard(player.storage.XSwujing);
				player.storage.XSwujing=[];
			},
        },
    },
		},
		"XSduanshui":{
	audio:2,
	usable:3,
    enable:"phaseUse",
    filter:function (event,player){
        return player.countCards('h',{suit:'spade'})>0;
    },
	position:"he",
    filterCard:{
        suit:"spade",
    },
    viewAs:{
        name:"tiesuo",
    },
    prompt:"将一张黑桃牌当铁锁连环使用",
    check:function (card){return 6-get.value(card)},
    ai:{
        wuxie:function (){
            if(_status.event.getRand()<0.5) return 0;
        },
        basic:{
            useful:4,
            value:4,
            order:7,
        },
        result:{
            target:function (player,target){
                if(target.isLinked()){
                    if(target.hasSkillTag('link')) return 0;
                    var f=target.hasSkillTag('nofire');
                    var t=target.hasSkillTag('nothunder');
                    if(f&&t) return 0;
                    if(f||t) return 0.5;
                    return 2;
                }
                if(get.attitude(player,target)>=0) return -0.9;
                if(ui.selected.targets.length) return -0.9;
                if(game.hasPlayer(function(current){
                    return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
                })){
                    return -0.9;
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
	global:"XSduanshui_debuff",
		},
		"XSduanshui_debuff":{
		trigger:{
		player:"phaseDrawBegin",
	},
	filter:function (event,player){
		if(game.countPlayer(function(current){
			var check1=current.hasSkill('XSduanshui')&&player.isLinked()&&!current.isLinked();
			var check2=current.hasSkill('XSduanshui')&&!player.isLinked()&&current.isLinked();
			return check1||check2;
		})>0) return true;
		return false;
	},
	forced:true,
	content:function (){
		trigger.num--;
	},
		},
		"XSguoshi":{
		trigger:{
		player:"damageBefore",
	},
	check:function (event,player){
		if(player.hp<2) return false;
		if(player.hp=2&&!player.countCards('h','jiu')&&!player.countCards('h','tao')) return false;
		return true;
	},
	filter:function (event,player){
		if(event.nature&&player.isLinked()) return true;
		if(!event.nature&&!player.isLinked()) return true;
		return false;
    },
	content:function (){
		"step 0"
		trigger.num++;
		"step 1"
		var num1=Math.max(0,player.maxHp-player.hp)+4;
		player.draw(num1);
	},
		},
		"XSbaizhan":{
     trigger:{
        global:["equipAfter"],
    },
	check:function (event,player){
		return get.attitude(player,event.player)<=0;
	},
	logTarget:'player',
    filter:function (event,player){
		var sub=get.subtype(event.card);
		return player.countCards('e',{subtype:sub})>0&&event.player!=player;
    },
    content:function (){
        "step 0"
		player.useCard({name:'sha'},trigger.player,false);
		event.mark_player=trigger.player;
		player.line(trigger.player,'black');
		"step 1"
        if(event.dam){
			trigger.player.lose(trigger.card);
			trigger.player.$throw(trigger.card,1000);
			player.equip(trigger.card);
        }
    },
    ai:{
        expose:0.4,
    },
	group:["XSbaizhan_dam","XSbaizhan_get"],
    subSkill:{
        dam:{
            trigger:{
                source:"damageAfter",
            },
            popup:false,
            forced:true,
            filter:function (event,player){
                return event.getParent(3).name=='XSbaizhan'&&event.getParent(3).mark_player&&event.getParent(3).mark_player==event.player;
            },
            content:function (){
                trigger.getParent(3).dam=true;
            },
            sub:true,
        },
		get:{
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
					if(trigger.cards[i].original=='e') num+=1;
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
			},
		},
    },
		},
		"XSgangrou":{
	init:function (player){
        player.storage.XSgangrou=false;
        player.unmarkSkill("XSgangrou_gang");
        player.markSkill("XSgangrou_rou");
    },
	subSkill:{
		gang:{
			marktext:"刚",
			intro:{
				content:function(storage,player,skill){
					return '刚：你造成伤害后，可以弃置2张牌对目标造成1点伤害';
				},
			},
			sub:true,
		},
		rou:{
			intro:{
				content:function(storage,player,skill){
					return '柔：你造成伤害后，可以令目标回复1点体力，然后你摸2张牌';
				},
			},
			marktext:"柔",
			sub:true,
		},
	},
	"prompt2":function (event,player){
        if(player.storage.XSgangrou==true){
			return '是否弃置2张牌对'+get.translation(event.player)+'造成1点伤害';
        }
        else if(player.storage.XSgangrou==false){
			return '是否令'+get.translation(event.player)+'回复1点体力，然后你摸2张牌';
        }
    },
	trigger:{
		source:"damageEnd",
	},
	filter:function (event,player){
		if(event.preserve) return false;
		if(event.getParent().name=='XSgangrou') return false;
		if(!event.player.isAlive()||!event.notLink()) return false;
		if(player.storage.XSgangrou==true) {
			return player.countCards('he')>=2;
		}
		else if(player.storage.XSgangrou==false) {
			return true;
		}
		return false;
	},
	check:function (event,player){
		if(player.storage.XSgangrou==true) {
			return get.attitude(player,event.player)<0&&player.countCards('he')>2;
		}
		else if(player.storage.XSgangrou==false) {
			return get.attitude(player,event.player)>0||event.player>2;
		}
		return false;
	},
	logTarget:'player',
	content:function(){
		"step 0"
		if(player.storage.XSgangrou==true) {
			var next=player.chooseToDiscard(get.prompt('XSgangrou'),2,'he',true);
			next.set('ai',function(card){
				return 7-get.value(card)
			});
		}
		else event.goto(2);
		"step 1"
		if(result.bool){
			trigger.player.damage(player);
			player.storage.XSgangrou=false;
			player.unmarkSkill("XSgangrou_gang");
			player.markSkill("XSgangrou_rou");
			event.finish();
		}
		"step 2"
		if(player.storage.XSgangrou==false) {
			trigger.player.recover();
			player.draw(2);
			player.unmarkSkill("XSgangrou_rou");
			player.markSkill("XSgangrou_gang");
			player.storage.XSgangrou=true;
		}
	},
		},
		"XSyinren":{
		marktext:"忍",
	intro:{
		content:function (storage){
			return '当前有：<span class="bluetext">'+storage+'</span> 枚“忍”';
		},
	},
	trigger:{
		player:"damageBegin",
	},
	init:function (player){
		player.storage.XSyinren=0;
	},
	priority:-1,
	forced:true,
	filter:function (event,player){
		return event.num>0;
	},
	content:function (){
		player.storage.XSyinren+=trigger.num;
		if(player.storage.XSyinren>0) player.markSkill('XSyinren');
		trigger.cancel();
	},
	ai:{
		maixie:true,
		"maixie_hp":true,
		nodamage:true,
		effect:{
			target:function (card,player,target){
				if(get.tag(card,'damage')){
					if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
					if(!target.hasFriend()) return;
					return [0.5,2];
				}
			},
		},
	},
	group:["XSyinren_remove"],
    subSkill:{
        remove:{
            forced:true,
			trigger:{
				player:"phaseZhunbeiBegin",
			},
            filter:function (event,player){
                return player.storage.XSyinren>0;
            },
            content:function (){
				var num1=Math.ceil(player.storage.XSyinren/2);
				player.loseHp(num1);
				player.draw(2*num1);
				player.storage.XSyinren-=num1;
				player.syncStorage('XSyinren');
				if(player.storage.XSyinren==0) {
					player.unmarkSkill('XSyinren');
				}
            },
            sub:true,
        },
    },
		},
		"XSqiying":{
		priority:9,
	trigger:{
		player:["shaBefore"],
	},
	filter:function (event,player){
		return player.countCards('h','sha')>0;
	},
	check:function (event,player){
		if(get.attitude(player,event.targets[0])>0) return false;
		if(event.targets[0].hp<2) return false;
		return true;
	},
	content:function (){
		"step 0"
		player.chooseCard('h',false,[1,Infinity],'选择弃置任意张杀',{name:'sha'}).ai=function(card){
			return 8-get.value(card);
		};
		"step 1"
		if(result.bool){
			var num1=result.cards.length;
			player.discard(result.cards);
			if(num1>=1) trigger.ADDshan=true;
			if(num1>=2) trigger.DRAWtwo=true;
			if(num1>=3) num1++;
			trigger.ADDdamage=num1;
		}
	},
	ai:{
        expose:0.2,
    },
	group:["XSqiying_dam","XSqiying_shan","XSqiying_draw"],
	subSkill:{
		dam:{
			trigger:{
				source:"damageBegin",
			},
			filter:function (event){
                if(!event.card||event.card.name!='sha'||!event.notLink()) return false;
                return (typeof event.getParent().ADDdamage=='number'&&event.getParent().ADDdamage>0);
            },
			forced:true,
			content:function (){
				var num1=trigger.getParent().ADDdamage;
                trigger.num+=num1;
            },
			ai:{
				damageBonus:true,
			},
			sub:true,
		},
		shan:{
			trigger:{
				player:"shaBegin",
			},
			forced:true,
			filter:function (event,player){
				return !event.directHit&&event.ADDshan==true;
			},
			priority:-1,
			content:function (){
				if(typeof trigger.shanRequired=='number'){
					trigger.shanRequired++;
				}
				else{
					trigger.shanRequired=2;
				}
			},
			sub:true,
		},
		draw:{
			trigger:{
				source:"damageBegin",
			},
			forced:true,
			priority:-1,
			filter:function (event,player){
				if(!event.card||event.card.name!='sha'||!event.notLink()) return false;
                return event.getParent().DRAWtwo==true;
			},
			content:function (){
				player.draw(2);
			},
			sub:true,
		},
	},
		},
		"XSjiusheng":{
		mod:{
		cardUsable:function (card,player,num){
			if(card.name=='jiu') return Infinity;
		},
		ignoredHandcard:function (card,player){
            if(card.name=='jiu'){
                return true;
            }
        },
        cardDiscardable:function (card,player,name){
            if(name=='phaseDiscard'&&card.name=='jiu') return false;
        },
	},
		},
		"XSchunniang":{
	   audio:2,
    enable:"phaseUse",
    filterCard:true,
    usable:1,
    filterTarget:function (card,player,target){
        return true;
    },
    check:function (card){
        return 7-get.value(card);
    },
    position:"h",
    filter:function (event,player){
        return player.countCards('h')>0;
    },
    discard:false,
    lose:false,
    prepare:"give",
    content:function (){
        player.lose(cards,ui.special,'toStorage');
        if(target.hasSkill('XSchunniang1')&&target.storage.XSchunniang1){
            target.storage.XSchunniang1.push(cards[0]);
            target.syncStorage('XSchunniang1');
            target.markSkill('XSchunniang1');
        }
        else{
            target.storage.XSchunniang1=cards.slice(0);
            target.syncStorage('XSchunniang1');
            target.addSkill('XSchunniang1');
        }
    },
    ai:{
        order:8,
        result:{
            target:3,
        },
    },
		},
		"XSchunniang1":{
   mark:true,
    marktext:"酿",
    intro:{
        content:"cards",
    },
    group:["XSchunniang1_use"],
    subSkill:{
        use:{
            audio:2,
            enable:"chooseToUse",
			forceDie:true,
            filter:function (event,player){
                if(player.storage.XSchunniang1.length>0) {
					if(event.type=='dying'){
						if(player!=event.dying) return false;
						return true;
					}
					else if(event.parent.name=='phaseUse'){
						return true;
					}
				}
				return false;
            },
            check:function (card){
                var player=_status.event.player;
				if(player.isDying()) return 1;
                return player.countCards('h','sha')>0;
            },
            chooseButton:{
                dialog:function (event,player){
                    var cardX=player.storage.XSchunniang1;
                    return ui.create.dialog('醇酿',[cardX,'vcard']);
                },
                backup:function (links,player){
                    return {
                        filterCard:function (card){
                            return false;
                        },
                        selectCard:-1,
                        viewAs:{name:'jiu'},
                        cards:links,
                        onuse:function(result,player){
                            result.cards=lib.skill[result.skill].cards;
                            var card=result.cards[0];
                            switch(get.suit(card)){
                                case 'heart':
									if(player.isDying()) player.recover(2);
									else player.recover();
									break;
                                case 'diamond':player.draw(2);break;
                                case 'spade':player.addTempSkill('XSchunniang1_buff1','phaseEnd');break;
                                case 'club':
                                    player.addTempSkill('XSchunniang1_buff2',{player:'phaseEnd'});
                                break;
                            }
                            player.storage.XSchunniang1.remove(card);
                            player.syncStorage('XSchunniang1');
                            if(!player.storage.XSchunniang1.length){
                                player.unmarkSkill('XSchunniang1');
                            }
                            else{
                                player.markSkill('XSchunniang1');
                            }
                        }
                    }
                },
                prompt:function (links,player){
                    return '将一张牌当酒使用';
                },
            },
            ai:{
				order:10,
				result:{
					player:function(player){
						if(player.countCards('h','sha')>0) return 2;
						return 0;
					}
				},
				skillTagFilter:function(player){
					if(!player.storage.XSchunniang1.length) return false;
				},
				save:true,
            },
            sub:true,
        },
        "buff1":{
            mark:true,
            marktext:"酿",
            intro:{
                content:"你的下一张杀造成伤害后弃置目标2张牌",
            },
            trigger:{
                source:"damageEnd",
            },
            filter:function (event){
                return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.getCards('he').length>0;
            },
            popup:false,
            forced:true,
            content:function (){
                "step 0"
                if(trigger.player.countDiscardableCards(player,'he')){
                    player.line(trigger.player);
                    player.discardPlayerCard('he',trigger.player,true);
                }
                "step 1"
                if(trigger.player.countDiscardableCards(player,'he')){
                    player.line(trigger.player);
                    player.discardPlayerCard('he',trigger.player,true);
                }
                "step 2"
                player.removeSkill('XSchunniang1_buff1');
            },
            sub:true,
        },
        "buff2":{
            mark:true,
            marktext:"酿",
            intro:{
                content:"你的下一张杀造成的伤害+1",
            },
            trigger:{
                source:"damageBegin",
            },
            filter:function (event){
                return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.getCards('he').length>0;
            },
            popup:false,
            forced:true,
            content:function (){
                "step 0"
                trigger.num++;
                "step 1"
                player.removeSkill('XSchunniang1_buff2');
            },
            ai:{
                damageBonus:true,
            },
            sub:true,
        },
    },
		},
		"XSwangyou":{
   trigger:{
        global:"useCardAfter",
    },
    filter:function (event,player){
        return event.card.name=='jiu'&&player.countCards('h')>0;
    },
    check:function (event,player){
		if(player.countCards('h','du')>0) return true;
        return game.hasPlayer(function(current){
            return get.attitude(player,current)<=0;
        });
    },
    content:function (){
        "step 0"
        player.chooseCardTarget({
            filterCard:function(card){
                return true;
            },
            position:"h",
            selectCard:1,
            selectTarget:[0,2],
            filterTarget:function(card,player,target){
                return player!=target&&target.countCards('h')>0;
            },
            ai1:function(card){
                if(card.name=='du') return 20;
                return 6-get.value(card);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                return -att;
            },
            forced:true,
            prompt:'请选择要展示的牌和展示牌的目标'
        });
        "step 1"
        if(result.bool){
            event.cards1=result.cards.slice(0);;
            player.lose(result.cards,ui.special);
            player.$throw(result.cards,1000,'nobroadcast');
            event.targetss=result.targets.sort(lib.sort.seat);
        }
        else event.finish();
        "step 2"
        if(event.targetss.length){
            var target=event.targetss.shift();
            event.current=target;
        }
        else event.goto(5);
        "step 3"
        if(event.current){
			event.current.chooseCard('展示1张手牌','h',true).set('ai',function(card){
				return 12-get.value(card);
			});
        }
        else event.goto(2);
        "step 4"
        if(result&&result.cards){
            event.current.lose(result.cards,ui.special);
            event.current.$throw(result.cards,1000,'nobroadcast');
            event.cards1.push(result.cards[0]);
            game.delay(1);
        }
        event.goto(2);
        "step 5"
        if(event.cards1.length>0) {
            event.num=event.cards1.length;
            event.chosen=[];
            event.num1=0;
            event.num2=0;
        }
        else event.finish();
        'step 6'
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
        for(pos=0;pos<Math.min(event.cards1.length,js.length+2);pos++){
            var max=getval(event.cards1[pos],pos);
            for(var j=pos+1;j<event.cards1.length;j++){
                var current=getval(event.cards1[j],pos);
                if(current>max){
                    choice=j;
                    max=current;
                }
            }
            if(choice!=-1){
                break;
            }
        }
        player.chooseCardButton('选择要移动的牌',event.cards1).set('filterButton',function(button){
            return !_status.event.chosen.contains(button.link);
        }).set('chosen',event.chosen).set('ai',function(button){
            return button.link==_status.event.choice?1:0;
        }).set('choice',event.cards1[choice]);
        event.pos=pos;
        'step 7'
        if(result.bool){
            var card=result.links[0];
            var index=event.cards1.indexOf(card);
            event.card=card;
            event.chosen.push(card);
            event.cards1.remove(event.card);
            var buttons=event.cards1.slice(0);
            player.chooseControl(function(){
                return _status.event.controlai;
            }).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
        }
        else{
            event.goto(9);
        }
        'step 8'
        if(typeof result.index=='number'){
            if(result.index>event.cards1.length){
                ui.cardPile.appendChild(event.card);
                event.num2++;
            }
            else{
                event.cards1.splice(result.index,0,event.card);
            }
            event.num--;
            if(event.num>0){
                event.goto(6);
            }
        }
        'step 9'
        while(event.cards1.length){
            ui.cardPile.insertBefore(event.cards1.pop(),ui.cardPile.firstChild);
            event.num1++;
        }
        var js=player.getCards('j');
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
    },
		},
		"XSjianshi":{
   enable:"phaseUse",
    usable:1,
    init:function (player){
        player.storage.XSjianshi=0;
    },
	filter:function (event,player){
        return player.storage.XSjianshi<3;
    },
    skillAnimation:true,
    content:function (){
        player.gainMaxHp();
        player.recover();
        player.draw(2);
        player.addTempSkill('XSzhanjiang');
        player.storage.XSjianshi++;
    },
    ai:{
        order:9,
        result:{
            player:3,
        },
    },
		},
		"XSjingong1":{
    skillAnimation:true,
    animationColor:"thunder",
    audio:2,
    trigger:{
        player:"phaseEnd",
    },
    forced:true,
    unique:true,
    juexingji:true,
    filter:function (event,player){
        return player.storage.XSjianshi>=3&&!player.storage.XSjingong1;
    },
    content:function (){
        player.awakenSkill('XSjingong1');
        player.storage.XSjingong1=true;
        player.gainMaxHp();
        player.recover();
        player.removeSkill('XSjianshi');
        player.addSkill('XSqingfu');
    },
		},
		"XSqingfu":{
   trigger:{
        player:"damageEnd",
    },
    filter:function (event,player){
        return event.num>0;
    },
    forced:true,
    content:function (){
        "step 0"
        event.num=trigger.num;
        "step 1"
        player.loseMaxHp();
        player.draw();
        player.chooseTarget('横置1名角色',function(card,player,target){
            return true;
        }).ai=function(target){
            var player=_status.event.player;
            return get.attitude(player,target)<=0;
        }
        "step 2"
        if(result.bool) {
            result.targets[0].link(true);
        }
        "step 3"
        event.num--;
        if(event.num>0){
            event.goto(1);
        }
        else{
            event.finish();
        }
    },
		},
		"XSzhengshui":{
	enable:'phaseUse',
	usable:1,
	filter:function(event,player){
		return game.countPlayer()>2;
	},
	selectCard:1,
	check:function(card){return 7-get.value(card)},
	filterCard:true,
	position:'h',
	filterTarget:function(card,player,target){
		return target.countCards('h')>0;
	},
	targetprompt:['发起方','接受方'],
	selectTarget:2,
	multitarget:true,
	content:function(){
		'step 0'
		targets[0].chooseToCompare(targets[1]);
		'step 1'
		if(result.bool){
			if(targets[1].countCards('h',{color:'red'})) {
				targets[1].chooseCard('选择1张红色手牌',true,function(card,player){
					return get.color(card)=='red';
				}).ai=function(card){
					return 12-get.value(card);
				};
				event.target=targets[1];
			}
			else event.finish();
		}
		else if(!result.tie){
			if(targets[0].countCards('h',{color:'red'})) {
				targets[0].chooseCard('选择1张红色手牌',true,function(card,player){
					return get.color(card)=='red';
				}).ai=function(card){
					return 12-get.value(card);
				};
				event.target=targets[0];
			}
			else event.finish();
		}
		'step 2'
		if(result.bool){
			event.cards1=result.cards[0];
        }
		else event.finish();
		'step 3'
		player.chooseTarget('选择1名其他角色获得'+get.translation(event.cards1),function(card,player,target){
			var target1=event.target;   //event内部不需要额外定义event
			return player!=target&&target1!=target;
		}).ai=function(target){
			var player=_status.event.player;
			return get.attitude(player,target)>0;
		}
		'step 4'
		if(result.bool){
			result.targets[0].gain(event.cards1);
            event.target.$give(1,result.targets[0]);
		}
	},
	ai:{
		order:8,
		result:{
			target:-2,
		},
		expose:0.2,
		threaten:1.2,
	}
		},
		"XSxinsuan":{
   trigger:{
        global:["chooseToCompareAfter"],
    },
    filter:function (event,player){
        if(event.preserve) return false;
        if(player.hasSkill('XSxinsuan_mark')) return false;
        return true;
    },
    frequent:true,
    content:function (){
        'step 0'
        player.chooseControlList(['获得'+get.translation(trigger.card1),'获得'+get.translation(trigger.card2)],false).set('ai',function(event,player){
            var trigger=_status.event.getTrigger();
			if(get.value(trigger.card1)<0&&get.value(trigger.card2)<0) return -1;
            if(get.value(trigger.card1)>get.value(trigger.card2)) return 0;
            return 1;
        });
        "step 1"
        if(result.index==0){
            player.gain(trigger.card1,'gain2');
            player.addTempSkill('XSxinsuan_mark',{player:'phaseZhunbeiBefore'});
            player.storage.XSxinsuan_mark=get.number(trigger.card1)%2;
        }
        else if(result.index==1){
            player.gain(trigger.card2,'gain2');
            player.addTempSkill('XSxinsuan_mark',{player:'phaseZhunbeiBefore'});
            player.storage.XSxinsuan_mark=get.number(trigger.card2)%2;
        }
		else event.finish();
    },
    subSkill:{
        mark:{
            mark:true,
            marktext:"算",
            intro:{
                content:function (storage){
					var translation1;
					if(storage==1) translation1='奇数';
					else translation1='偶数';
                    return '其他角色使用点数不为<span class="bluetext"> '+translation1+' </span> 的牌指定你为目标时，需弃置1张点数为<span class="bluetext"> '+translation1+' </span>的牌，否则对你无效。';
                },
            },
            trigger:{
                target:"useCardToTargeted",
            },
            forced:true,
            filter:function (event,player){
                if(event.player==player) return false;
                var num1=player.storage.XSxinsuan_mark;
                return get.number(event.card)%2!=num1;
            },
            content:function (){
                "step 0"
                var num1=player.storage.XSxinsuan_mark;
				var translation1;
				if(num1==1) translation1='奇数';
				else translation1='偶数';
                var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
                trigger.player.chooseToDiscard('心算：弃置1张点数不为'+translation1+'的牌，否则此牌对'+get.translation(player)+'无效',function(card){
                    return get.number(card)%2==num1;
                }).set('ai',function(card){
                    if(_status.event.eff>0){
                        return 10-get.value(card);
                    }
                    return 0;
                }).set('eff',eff).set('num1',num1);
                "step 1"
                if(result.bool==false){
                    trigger.getParent().excluded.add(player);
                }
            },
			ai:{
				effect:{
					target:function (card,player,target,current){
						if(get.attitude(player,target)<0){
							if(!target.hasSkill('XSxinsuan_mark')) return;
							var num1=target.storage.XSxinsuan_mark;
							var bs=player.getCards('h',function(cardx){
								return get.number(cardx)%2==num1;
							});
							if(bs.length<1) return 0;
							if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
							return [1,0,1,-0.5];
						}
					},
				},
			},
            sub:true,
        },
    },
		},
		"XSchuishi":{
    mod:{
        maxHandcard:function (player,num){
			if(player.storage.XSchuishi) {
				var num1=Math.max(num,player.storage.XSchuishi);
				return num1;
			}
            return num;
        },
    },
	trigger:{
        global:"gameDrawAfter",
    },
    forced:true,
    content:function (){
		player.storage.XSchuishi=player.hp;
    },
		},
		"XSzhengqi":{
    audio:2,
    trigger:{
        global:"useCardToTargeted",
    },
    filter:function (event,player){
        return event.player!=player&&event.card&&get.tag(event.card,'damage')&&!event.player.hasSkill('XSzhengqi_temp');
    },
    logTarget:"target",
    check:function (event,player){
        if(event.getParent().excluded.contains(event.target)) return false;
        if(get.attitude(player,event.target)<=0) return false;
		if(get.attitude(player,_status.currentPhase)>0&&player.hp<2) return false;
		if(player.hp<2&&!player.countCards('h','jiu')&&!player.countCards('h','tao')) return false;
        if(event.target.hp<=player.hp) return true;
        return false;
    },
    content:function (){
        "step 0"
        player.loseHp();
        "step 1"
        trigger.getParent().excluded.add(trigger.target);
		trigger.player.addTempSkill('XSzhengqi_temp');
        game.delay(2);
        "step 2"
        if(player.countCards('h')>0){
            player.chooseCard(false,[1,Infinity],'h','弃置任意张牌并随机获得等量的红色牌').set('ai',function(card){
                return 6-get.value(card);
            });
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.bool) {
            var num1=result.cards.length;
            var num2=player.countCards('h');
            player.discard(result.cards);
            if(num1==num2) num1++;
            var cards1=[];
            for(var i=0;i<ui.cardPile.childElementCount;i++){
                var node=ui.cardPile.childNodes[i];
                if(get.color(node)=='red'){
                    cards1.push(node);
                    if(cards1.length>=num1) break;
                }
            }
            player.gain(cards1,'gain2');
        }
    },
    ai:{
        expose:0.3,
    },
	subSkill:{
        temp:{
            sub:true,
        },
    },
		},
		"XSdanxin":{
    group:["XSdanxin_Begin","XSdanxin_After"],
    subSkill:{
        Begin:{
            trigger:{
                player:["dyingBegin"],
            },
            filter:function (event,player){
                return _status.currentPhase!=player;
            },
            check:function (event,player){
                return get.attitude(player,_status.currentPhase)<=0;
            },
            content:function (){
                _status.currentPhase.damage(player,'fire');
            },
            sub:true,
        },
        After:{
            trigger:{
                player:["dyingAfter"],
            },
            frequent:true,
            content:function (){
                var num1=player.maxHp-player.countCards('h');
                if(num1>0) {
                    var cards=[];
                    for(var i=0;i<ui.cardPile.childElementCount;i++){
                        var node=ui.cardPile.childNodes[i];
                        if(get.color(node)=='red'){
                            cards.push(node);
                            if(cards.length>=num1) break;
                        }
                    }
                    player.gain(cards,'gain2');
                }
            },
            sub:true,
        },
    },
		},
		"XSliqi":{
	mod:{
		canBeDiscarded:function(card,player){
			if(get.position(card)=='e') return false;
		},
	},
    enable:"phaseUse",
    selectTarget:1,
    filterTarget:function (card,player,target){
        var weaponlist=['hanbing','qilin','fangtian','guanshi','zhangba','qinglong','qinggang','zhuge','cixiong','zhuque','guding','zhungangshuo','yinyueqiang','qibaodao'];
        var cards1=target.getCards('e',{subtype:'equip1'});
		if(cards1.length>0) {
			for(var i=0;i<cards1.length;i++) {
				if(weaponlist.contains(cards1[i].name)) return true;
			}
		}
        return false;
    },
    filter:function (event,player){
        if(player.getStat().skill.XSliqi>=1) return false;
        return game.hasPlayer(function(current){
            return current.getEquip(1);
        });
    },
    content:function (){
		"step 0"
		var next=player.chooseButton();
		var equ=target.getCards('e',{subtype:'equip1'});
		next.set('createDialog',['将'+get.translation(target)+'的1张装备牌替换为强化版',equ]);
		next.set('ai',function(button){
			return 8-get.buttonValue(button);
		});
		"step 1"
		if(result.bool){
			var card1=result.links[0];
			var name='';
			var skill1;
			switch(card1.name){
				case 'hanbing':name='强化寒冰剑';skill1='EXhanbing_skill';break;
				case 'qilin':name='强化麒麟弓';skill1='EXqilin_skill';break;
				case 'fangtian':name='强化方天戟';skill1='EXfangtian_skill';break;
				case 'guanshi':name='强化贯石斧';skill1='EXguanshi_skill';break;
				case 'zhangba':name='强化丈八矛';skill1='EXzhangba_skill';break;
				case 'qinglong':name='强化青龙刀';skill1='EXqinglong_skill';break;
				case 'qinggang':name='强化青钢剑';skill1='EXqinggang_skill';break;
				case 'zhuge':name='强化诸葛弩';skill1='zhuge_skill';break;
				case 'cixiong':name='强化双股剑';skill1='EXshuanggu_skill';break;
				case 'zhuque':name='强化朱雀扇';skill1='EXzhuque_skill';break;
				case 'guding':name='强化古锭刀';skill1='EXguding_skill';break;
				case 'zhungangshuo':name='强化衠钢槊';skill1='EXzhungang_skill';break;
				case 'yinyueqiang':name='强化银月枪';skill1='EXyinyue_skill';break;
				case 'qibaodao':name='强化七宝刀';skill1='EXqibao_skill';break;
			}
			if(name!='') {
				var info1=get.info(card1);
				var info={
					enable:true,
					type:'equip',
					subtype:'equip1',
					vanish:true,
					destroy:"XSliqi",
					cardimage:info1.cardimage||card1.name,
					filterTarget:function(card,player,target){
						return target==player;
					},
					selectTarget:-1,
					modTarget:true,
					content:lib.element.content.equipCard,
					legend:true,
					onEquip:[],
					onLose:[],
					skills:[],
					distance:{},
					ai:{
						order:8.9,
						equipValue:9,
						useful:2.5,
						value:function(card,player){
							var value=0;
							var info=get.info(card);
							var current=player.getEquip(info.subtype);
							if(current&&card!=current){
								value=get.value(current,player);
							}
							var equipValue=info.ai.equipValue||info.ai.basic.equipValue;
							if(typeof equipValue=='function') return equipValue(card,player)-value;
							return equipValue-value;
						},
						result:{
							target:function(player,target){
								return get.equipResult(player,target,name);
							}
						}
					}
				}
				if(card1.name=='zhuge') {
					info.distance={attackFrom:-2};
				}
				else {
					for(var i in info1.distance){
						info.distance[i]=info1.distance[i];
					}
				}
				info.skills=info.skills.concat(skill1);
				if(card1.name=='qibaodao') info.skills=info.skills.concat('qibaodao2');
				if(info1.onEquip){
					if(Array.isArray(info1.onEquip)){
						info.onEquip=info.onEquip.concat(info1.onEquip);
					}
					else{
						info.onEquip.push(info1.onEquip);
					}
				}
				if(info1.onLose){
					if(Array.isArray(info1.onLose)){
						info.onLose=info.onLose.concat(info1.onLose);
					}
					else{
						info.onLose.push(info1.onLose);
					}
				}
				if(info.onEquip.length==0) delete info.onEquip;
				if(info.onLose.length==0) delete info.onLose;
				lib.card[name]=info;
				lib.translate[name]=name;
				lib.translate[name+'_info']=get.skillInfoTranslation(skill1);
				try{
					game.addVideo('newcard',null,{
						name:name,
						translate:lib.translate[name],
						info:lib.translate[name+'_info'],
						card:card1.name,
						legend:true,
					});
				}
				catch(e){
					console.log(e);
				}
				target.equip(game.createCard({name:name,suit:card1.suit,number:card1.number}));
			}
			else event.finish();
		}
		else event.finish();
		"step 2"
		if(target==player) {
			player.getStat().skill.XSliqi--;
		}
		else {
			player.draw();
		}
    },
    ai:{
        order:9.5,
        result:{
            player:1,
			target:function(player,target){
				if(target==player) return 2;
				return 1;
			},
        },
    },
		},
		"XSjiejiang":{
    trigger:{
        global:["equipAfter"],
    },
    forced:true,
    filter:function (event,player){
        return !event.player.hasSkill('XSjiejiang_temp')&&_status.currentPhase==event.player&&player.countCards('h');
    },
    content:function (){
        "step 0"
        player.chooseCardTarget({
            filterCard:function(card){
                return true;
            },
            selectCard:1,
            position:"h",
            filterTarget:function(card,player,target){
                var trigger=_status.event.getTrigger();
                return target!=trigger.player;
            },
            ai1:function(card){
                var card1=_status.event.getTrigger().card;
                return get.value(card1)-get.value(card)-1;
            },
            ai2:function(target){
				var trigger=_status.event.getTrigger();
				if(get.attitude(_status.event.player,trigger.player)>0) return -1;
                var att=get.attitude(_status.event.player,target);
                var eq=get.subtype(trigger.card);
                if(att>0&&target.countCards('e',{subtype:eq})==0) return att;
                return -1;
            },
            forced:false,
            prompt:'是否弃置1张手牌令1名角色装备'+get.translation(trigger.card)+'?',
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            trigger.player.line(result.targets[0],'red');
            result.targets[0].equip(trigger.card);
            trigger.player.addTempSkill('XSjiejiang_temp');
            game.delay(0.7);
        }
    },
    ai:{
        expose:0.4,
    },
    subSkill:{
        temp:{
            sub:true,
        },
    },
		},
		"XSchuangge":{
   enable:"phaseUse",
	selectTarget:1,
	filterTarget:function (card,player,target){
        return target!=player;
    },
	filter:function (event,player){
        return player.countCards('e')>0;
    },
	content:function (){
		"step 0"
        var next=player.chooseButton();
        next.set('createDialog',['交给'+get.translation(target)+'1张装备牌',player.getCards('e')]);
        next.set('ai',function(button){
            return get.buttonValue(button);
        });
        "step 1"
        if(result.bool){
            player.logSkill('XSchuangge',target);
			player.give(result.links[0],target);
			player.draw(2);
        }
		else event.finish();
    },
    ai:{
		order:1,
		expose:0.2,
		threaten:1.1,
		result:{
			player:1,
			target:1,
        },
    },
		},
		"XSyibian":{
    usable:1,
    enable:"phaseUse",
    filter:function (event,player){
		if(player.storage.disableEquip!=undefined&&player.storage.disableEquip.length>=5&&player.storage._disableJudge!=true) return false;
        return true;
    },
    content:function (){
        'step 0'
        var list=[];
        for(var i=1;i<6;i++){
            if(player.isDisabled(i)) continue;
            list.push('equip'+i);
        }
        if(player.storage._disableJudge!=true){
            list.push('判定');
        }
        if(!list.length) event.finish();
        else{
            event.list=list;
            var next=player.chooseControl(list);
			var choice='';
			var num2=player.storage.disableEquip.length+1;
			if(player.storage._disableJudge==true) num2++;
			for(var i=1;i<6;i++){5
				if(player.isDisabled(i)) continue;
				var sub='equip'+i;
				var num3=0;
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].countCards('e',{subtype:sub})){
						var att=get.attitude(player,game.players[i]);
						if(att<0) num3++;
					}
				}
				if(num3>=num2) choice=sub;break;
			}
			if(player.storage._disableJudge!=true) {
				if(game.hasPlayer(function(current){
					return get.attitude(player,current)>0&&current.countCards('j');
				})) choice='判定';
			}
            next.prompt='请选择废除1个区域';
            next.ai=function(){
                return choice;
            };
        }
        'step 1'
        if(result.control){
			event.control1=result.control;
			var translation1=get.translation(event.control1);
			var num1=player.storage.disableEquip.length+1;
			if(player.storage._disableJudge==true) num1++;
			player.chooseTarget(get.prompt('XSyibian'),'令至多'+num1+'名角色弃置'+translation1+'区的全部牌',[1,num1],function(card,player,target){
				var control=_status.event.control1;
				if(control=='判定') return player!=target&&target.countCards('j');
				else {
					return player!=target&&target.countCards('e',{subtype:control});
				}
			},function(target){
				var att=get.attitude(_status.event.player,target);
				var control=_status.event.control1;
				if(control=='判定') return att;
				return -att;
			});
        }
        else event.finish();
		'step 2'
		if(result.bool){
			if(event.control1=='判定') {
				player.disableJudge();
				for(var i=0;i<result.targets.length;i++) {
					result.targets[i].discard(result.targets[i].getCards('j'));
					player.line(result.targets[i],'black');
				}
			}
			else {
				player.disableEquip(event.control1);
				for(var i=0;i<result.targets.length;i++){
					player.line(result.targets[i],'black');
					result.targets[i].discard(result.targets[i].getCards('e',{subtype:event.control1}));
				}
			}
		}
		else event.finish();
    },
    ai:{
        order:9,
        result:{
            player:function (player,target){
                var num1=-1;
                if(player.storage._disableJudge!=true) {
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].countCards('j')){
                            var att=get.attitude(player,game.players[i]);
                            if(att>0) num1++;
                        }
                    }
                }
                if(num1>=0) return 1;
                for(var i=1;i<6;i++){
                    if(player.isDisabled(i)) continue;
                    var sub='equip'+i;
                    num1=-1;
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].countCards('e',{subtype:sub})){
                            var att=get.attitude(player,game.players[i]);
                            if(att<0) num1++;
                        }
                    }
                    if(num1>0) return 1;
                }
                return -1;
            },
        },
    },
		},
		"XSfuqing":{
    trigger:{
        global:["damageEnd","loseHpEnd"],
    },
    filter:function (event,player){
        return event.player.hp==1&&!event.player.hasSkill('XSfuqing_temp');
    },
    check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
    logTarget:"player",
    content:function (){
        trigger.player.phase();
        trigger.player.addSkill('XSfuqing_temp');
        trigger.player.addTempSkill('XSfuqing_buff',{player:'phaseAfter'});
    },
    ai:{
        expose:0.3,
    },
    subSkill:{
        buff:{
            trigger:{
                player:"phaseEnd",
            },
            forced:true,
            filter:function (event,player){
                return player.getStat('damage');
            },
            content:function (){
                player.recover();
            },
            sub:true,
        },
        temp:{
            sub:true,
        },
    },
		},
		"XSzengzao":{
    limited:true,
    enable:"phaseUse",
    filterTarget:true,
    content:function (){
        'step 0'
        player.awakenSkill('XSzengzao');
        'step 1'
        player.chooseControl().set('choiceList',['失去1点体力并摸3张牌','弃置1张基本牌并摸3张牌']).set('ai',function(event,player){
            return 1;
        }).set('prompt','令目标：');
        'step 2'
        if(result.index==1&&target.countCards('h',{type:'basic'})){
            target.chooseToDiscard('弃置一张基本牌',function(card){
                return get.type(card)=='basic';
            });
            target.draw(3);
        }
        else{
            target.loseHp();
            target.draw(3);
        }
        'step 3'
        var list=[];
        var skills=target.getOriginalSkills();
        for(var i=0;i<skills.length;i++){
            if(lib.skill[skills[i]].limited&&target.awakenedSkills.contains(skills[i])){
                list.push(skills[i]);
            }
        }
        if(list.length==1){
            target.storage.XSzengzao_store=list[0];
            target.addTempSkill('XSzengzao_store','phaseZhunbeiBegin');
            event.finish();
        }
        else if(list.length>1){
            player.chooseControl(list).set('prompt','选择一个限定技在回合结束后重置之');
        }
        else{
            event.finish();
        }
        'step 4'
        target.storage.XSzengzao_store=result.control;
        target.addTempSkill('XSzengzao_store','phaseZhunbeiBegin');
    },
    subSkill:{
        store:{
            trigger:{
                global:"phaseAfter",
            },
            silent:true,
            content:function (){
                player.restoreSkill(player.storage.XSzengzao_store);
            },
            sub:true,
            forced:true,
            popup:false,
        },
    },
    ai:{
        order:4,
        result:{
            target:function (player,target){
                if(target.hp>1){
                    var skills=target.getOriginalSkills();
                    for(var i=0;i<skills.length;i++){
                        if(lib.skill[skills[i]].limited&&target.awakenedSkills.contains(skills[i])){
                            return 8;
                        }
                    }
                }
                if(target!=player) return 0;
            },
        },
    },
    mark:true,
    intro:{
        content:"limited",
    },
    skillAnimation:true,
    init:function (player,skill){
        player.storage[skill]=false;
    },
		},
		"XSliaodi":{
    marktext:"料",
    intro:{
        content:"cards",
    },
    init:function (player){
        player.storage.XSliaodi=[];
    },
    trigger:{
        player:"phaseDiscardBefore",
    },
    direct:true,
    filter:function (event,player){
        return player.countCards('h')>0;
    },
    content:function (){
        "step 0"
        player.chooseCard('将1张手牌置于武将牌上',false).ai=function(card){
            return 4-get.value(card);
        }
        "step 1"
        if(result.bool){
            var card1=result.cards[0]
            player.lose(card1,ui.special,'toStorage');
            player.storage.XSliaodi.push(card1);
            if(player.storage.XSliaodi.length!=0){
                player.markSkill('XSliaodi');
                player.syncStorage('XSliaodi');
            }
        }
    },
    group:["XSliaodi_shan","XSliaodi_wuxie"],
    subSkill:{
        shan:{
            trigger:{
                player:["chooseToRespondBegin","chooseToUseBegin"],
            },
            filter:function (event,player){
                if(_status.currentPhase==player) return false;
                if(player.storage.XSliaodi.length==0) return false;
                if(event.responded) return false;
                if(!event.filterCard({name:'shan'},player,event)) return false;
                if(event.name=='chooseToRespond'&&!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
                return true;
            },
            prompt:"你可以移除1枚料敌牌，视为使用了1张闪",
            check:function (){return 1},
            content:function (){
                "step 0"
                player.storage.XSliaodi.splice(0,1);
                player.syncStorage('XSliaodi');
                if(!player.storage.XSliaodi.length){
                    player.unmarkSkill('XSliaodi');
                }
                'step 1'
                trigger.untrigger();
                trigger.responded=true;
                trigger.result={bool:true,card:{name:'shan'}}
            },
            ai:{
                respondShan:true,
                effect:{
                    target:function (card,player,target,effect){
                        if(get.tag(card,'respondShan')&&target.storage.XSliaodi.length!=0) return 0.5;
                    },
                },
            },
        },
        wuxie:{
            enable:["chooseToUse","chooseToRespond"],
            filterCard:function (){return false},
            selectCard:-1,
            viewAsFilter:function (player){
                if(_status.currentPhase==player) return false;
                return player.storage.XSliaodi.length>0;
            },
            viewAs:{
                name:"wuxie",
            },
            prompt:"你可以移除1枚料敌牌，视为使用了1张无懈可击",
            onuse:function (result,player){
                player.storage.XSliaodi.splice(0,1);
                player.syncStorage('XSliaodi');
                if(!player.storage.XSliaodi.length){
                    player.unmarkSkill('XSliaodi');
                }
            },
            check:function (){return 1},
            ai:{
                threaten:0.8,
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
    },
		},
		"XSbolan":{
    trigger:{
        global:"useSkillAfter",
    },
    init:function (player){
        player.storage.XSbolan=[];
    },
    forced:true,
    intro:{
        content:function (storage){
            if(!storage.length){
                return '无技能';
            }
            else{
                var str='';
                for(var i=0;i<storage.length;i++){
                    str+='<span class="bluetext">'+get.translation(storage[i])+'</span>';
                    if(get.skillInfoTranslation(storage[i])) {
                        str+='：'+get.skillInfoTranslation(storage[i])+'<br>';
                    }
                    else {
                        str+='<br>';
                    }
                }
                return str;
            }
        },
    },
    filter:function (event,player){
		if(event.skill=='_chongzhu'||event.skill=='muniu_skill') return false;
        var info=get.info(event.skill);
        if(info.limited||info.zhuSkill||info.juexingji) return false;
        return !player.hasSkill(event.skill)&&player.storage.XSbolan&&!player.storage.XSbolan.contains(event.skill)&&_status.currentPhase==event.player;
    },
    content:function (){
        'step 0'
        player.chooseBool('是否获得技能'+get.translation(trigger.skill)+'？').set('ai',function(){
            return true;
        });
        'step 1'
        if(result.bool){
            if(player.storage.XSbolan.length<2) {
                event.goto(3);
            }
            else {
                var skilllist=[];
                skilllist.push(get.translation(player.storage.XSbolan[0]));
                skilllist.push(get.translation(player.storage.XSbolan[1]));
                skilllist.push('cancel2');
                if(skilllist.length) {
                    player.chooseControl(skilllist,function(){
                        return Math.floor(Math.random()*skilllist.length);
                    }).set('prompt','选择替换1个技能');
                }
                else event.finish();
            }
        }
        else event.finish();
        'step 2'
        if(result.control){
            player.storage.XSbolan.remove(player.storage.XSbolan[result.index]);
            game.log(player,'失去了技能','【'+get.translation(player.storage.XSbolan[result.index])+'】');
        }
        else{
            event.finish();
        }
        'step 3'
        player.storage.XSbolan.push(trigger.skill);
        player.addAdditionalSkill('XSbolan',player.storage.XSbolan);
        player.syncStorage('XSbolan');
        player.markSkill('XSbolan');
        player.popup(trigger.skill);
        game.log(player,'获得了技能','【'+get.translation(trigger.skill)+'】');
    },
		},
		"XStongjian":{
   trigger:{
        global:"useSkillBefore",
    },
    forced:true,
    filter:function (event,player){
		if(event.player==player) return false;
        return player.hasSkill(event.skill)&&player.storage.XSbolan&&player.storage.XSbolan.contains(event.skill);
    },
    content:function (){
        'step 0'
        player.chooseBool('是否移除技能'+get.translation(trigger.skill)+'，使其失效？').set('ai',function(){
			var att=get.attitude(player,trigger.player);
			return -att;
        });
        'step 1'
        if(result.bool){
            player.storage.XSbolan.remove(trigger.skill);
            player.addAdditionalSkill('XSbolan',player.storage.XSbolan);
            player.syncStorage('XSbolan');
            player.markSkill('XSbolan');
            game.log(player,'失去了技能','【'+get.translation(trigger.skill)+'】');
        }
        else event.finish();
        'step 2'
        trigger.cancel();
		trigger.player.disableSkill('XStongjian_disbale',trigger.skill,true);
		trigger.player.addTempSkill('XStongjian_mark');
    },
	subSkill:{
        mark:{
			onremove:function (player,skill){
				player.enableSkill('XStongjian_disbale');
			},
			mark:true,
			marktext:"鉴",
			locked:true,
			intro:{
				content:function (storage,player,skill){
					var list=[];
					for(var i in player.disabledSkills){
						if(player.disabledSkills[i].contains('XStongjian_disbale')){
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
				},
			},
			sub:true,
        },
    },
		},
		"XSgufa":{
    trigger:{
        player:"phaseDrawBegin",
    },
    forced:true,
    content:function (){
        var num=Math.max(0,2-player.storage.XSbolan.length);
        trigger.num+=num;
    },
		},
		"XSshuwei":{
    group:["XSshuwei_draw","XSshuwei_use"],
    subSkill:{
        draw:{
            trigger:{
                player:"phaseDrawBefore",
            },
            filter:function (event,player){
                return !player.hasSkill('XSshuwei_temp');
            },
            direct:true,
            content:function (){
                "step 0"
                player.chooseTarget(get.prompt('XSshuwei'),'令至多2名角色获得1个额外的摸牌阶段',[1,2],function(card,player,target){
                    return player!=target;
                },function(target){
                    var att=get.attitude(_status.event.player,target);
                    var hs1=_status.event.player.countCards('h');
                    var hs2=target.countCards('h');
                    if(att>0) return hs1-hs2;
					return -1;
                });
                "step 1"
                if(result.bool){
                    player.addTempSkill('XSshuwei_temp');
                    var len=result.targets.length;
                    if(len==1) {
                        player.addTempSkill('XSxiaocheng_discard');
                    }
                    for(var i=0;i<len;i++) {
                        result.targets[i].phaseDraw();
                    }
                    trigger.cancel();
                }
                else event.finish();
            },
            sub:true,
        },
        use:{
            trigger:{
                player:"phaseUseBefore",
            },
            filter:function (event,player){
                return !player.hasSkill('XSshuwei_temp');
            },
            direct:true,
            content:function (){
                "step 0"
                player.chooseTarget(get.prompt('XSshuwei'),'令至多2名角色获得1个额外的出牌阶段',[1,2],function(card,player,target){
                    return player!=target;
                },function(target){
                    var player=_status.event.player;
                    var att=get.attitude(_status.event.player,target);
                    var hs=target.countCards('h');
                    if(att<0) return -1;
                    if(player.needsToDiscard()) {
                        if(ui.selected.targets.length==1) return -1;
                        return hs-1;
                    }
                    else return hs-2;
                });
                "step 1"
                if(result.bool){
                    player.addTempSkill('XSshuwei_temp');
                    var len=result.targets.length;
                    if(len==1) {
                        player.addTempSkill('XSxiaocheng_discard');
                    }
                    for(var i=0;i<len;i++) {
                        result.targets[i].stat.push({card:{},skill:{}});
                        result.targets[i].phaseUse();
                    }
                    trigger.cancel();
                }
                else event.finish();
            },
            sub:true,
        },
        temp:{
            sub:true,
        },
    },
		},
		"XSlianjian":{
   group:["XSlianjian_discard","XSlianjian_judge"],
    subSkill:{
        discard:{
            trigger:{
                global:"discardAfter",
            },
            filter:function (event,player){
                if(event.player==player) return false;
                for(var i=0;i<event.cards.length;i++){
                    var suit1=get.suit(event.cards[i]);
                    if(get.position(event.cards[i])=='d'&&!player.countCards('h',{suit:suit1})){
                        return true;
                    }
                }
                return false;
            },
            check:function (event,player){
                for(var i=0;i<event.cards.length;i++){
                    if(get.value(event.cards[i])>=4) return true;
                }
            },
            content:function (){
                "step 0"
                if(trigger.delay==false) game.delay();
                "step 1"
                event.cards=[];
                for(var i=0;i<trigger.cards.length;i++){
                    var suit1=get.suit(trigger.cards[i]);
                    if(get.position(trigger.cards[i])=='d'&&!player.countCards('h',{suit:suit1})){
                        event.cards.push(trigger.cards[i]);
                    }
                }
                if(event.cards.length) {
                    player.chooseCardButton('选择1张牌获得之',true,event.cards,1).set('ai',function(button){
                        return get.value(button.link);
                    });
                }
                else event.finish();
                "step 2"
                if(result.bool){
                    player.gain(result.links[0],'log');
                    player.$gain2(result.links[0]);
                }
            },
            sub:true,
        },
        judge:{
            trigger:{
                global:"judgeAfter",
            },
            check:function (event,player){
                return get.value(event.result.card)>=4;
            },
            filter:function (event,player){
                if(event.player==player) return false;
                if(get.position(event.result.card)!='d') return false;
                return !player.countCards('h',{suit:get.suit(event.result.card)});
            },
            content:function (){
                player.gain(trigger.result.card,'log');
                player.$gain2(trigger.result.card);
            },
            sub:true,
        },
    },
		},
		"XSchuanyang":{
    mod:{
        targetInRange:function (card,player,target){
            if(card.name=='sha'&&player.getEquip(1)){
                return true;
            }
        },
    },
    trigger:{
        source:"damageEnd",
    },
    forced:true,
    filter:function (event,player){
        return event.player!=player&&event.card&&event.card.name=='sha'&&event.notLink()&&event.player.isAlive();
    },
    content:function (){
		player.logSkill('XSchuanyang',trigger.player);
        var list=[];
        for(var i=1;i<5;i++){
            if(trigger.player.isDisabled(i)) continue;
            list.push('equip'+i);
        }
        if(!list.length) event.finish();
        else{
            var equ=list.randomGet();
            trigger.player.disableEquip(equ);
        }
    },
    ai:{
        threaten:1.1,
    },
		},
		"XStujin":{
     enable:"phaseUse",
    usable:1,
    content:function (){
        player.addTempSkill('XStujin_buff',{player:'phaseZhunbeiBefore'});
    },
    ai:{
        order:9,
        result:{
            player:function (player){
                if(player.hp>2) return 3;
                else if(!player.countCards('h','shan')) return 2;
                return 0;
            },
        },
    },
    subSkill:{
        buff:{
            marktext:"突",
            init:function (player){
                player.markSkill('XStujin_buff');
            },
            intro:{
                content:function (storage){
                    return '你使用杀的次数+1且可额外指定1个目标';
                },
            },
            mod:{
                cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+1;
                },
                cardname:function (card,player,name){
                    if(card.name=='shan') return 'sha';
                },
                cardnature:function (card,player,name){
                    if(card.name=='shan') return null;
                },
                selectTarget:function (card,player,range){
                    if(card.name=='sha') range[1]+=1;
                },
            },
			trigger:{
				player:"damageEnd",
			},
			filter:function (event,player){
				return event.num>0;
			},
			forced:true,
			popup:false,
            silent:true,
			content:function (){
				player.removeSkill('XStujin_buff');
			},
            ai:{
                effect:{
                    target:function (card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                },
                respondSha:true,
                order:3,
                useful:-1,
                value:-1,
            },
            sub:true,
        },
    },
		},
		"XSzhanjiang1":{
   trigger:{
        source:"damageBegin",
    },
    priority:9,
    forced:true,
    filter:function (event){
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
    },
    content:function (){
        if(trigger.card.number>player.maxHp) {
            trigger.num++;
        }
        else {
            player.discardPlayerCard(trigger.player,'h',true);
        }
    },
		},
		"XSxingkun":{
   trigger:{
        player:"damageEnd",
    },
    filter:function (event,player){
        return event.num>0;
    },
    check:function (event,player){
        return player.maxHp>3;
    },
    content:function (){
        player.loseMaxHp();
        player.draw();
    },
    ai:{
        maixie:true,
        "maixie_hp":true,
        effect:{
            target:function (card,player,target){
                if(get.tag(card,'damage')) {
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    return [1,1.5];
                }
            },
        },
    },
		},
		"XSmouduan":{
    trigger:{
        global:"judge",
    },
    filter:function (event,player){
        return player.countCards('h')>0;
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('XSmouduan'),'h',function(card){
            return true;
        }).set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||result==0) return 0;
            if(attitude>0){
                return result;
            }
            else{
                return -result;
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.bool){
            player.respond(result.cards,'highlight','XSmouduan');
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            trigger.player.judging[0]=result.cards[0];
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(result.cards[0]);
            }
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
        }
        "step 3"
        game.delay(2);
    },
    ai:{
        tag:{
            rejudge:1,
        },
    },
		},
		"XSguojue":{
   trigger:{
        player:"damageEnd",
    },
    filter:function (event,player){
        return event.source!=undefined&&event.num>0;
    },
    frequent:true,
    logTarget:"source",
    content:function (){
        "step 0"
        event.num=trigger.num;
        "step 1"
        player.chooseTarget(get.prompt2('XSguojue'),function(card,player,target){
            return true;
        }).ai=function(target){
            var att=get.attitude(player,target);
            if(target.countCards('j')>0) return -att-2;
            return -att;
        }
        "step 2"
        if(result.bool) {
            var target1=result.targets[0];
            var delayname=['lebu','bingliang','shandian','fulei'].randomGet();
            if(!target1.hasJudge(delayname)) {
                var card=game.createCard(delayname);
                target1.addJudge(card);
                target1.$draw(card);
                game.delay();
            }
        }
        else{
            event.finish();
        }
        "step 3"
        event.num--;
        if(event.num>0){
            player.chooseBool(get.prompt2('XSguojue'));
        }
        else{
            event.finish();
        }
        "step 4"
        if(result.bool){
            player.logSkill('XSguojue');
            event.goto(1);
        }
        else{
            event.finish();
        }
    },
    ai:{
        "maixie_defend":true,
        expose:0.3,
    },
		},
		"XShongliang":{
   trigger:{
        global:"judgeEnd",
    },
    check:function (event,player){
		if(get.value(event.result.card)>=6) return true;
		if(get.suit(event.result.card)=='spade') return true;
        return false;
    },
    filter:function (event,player){
		if(player.hasSkill('XShongliang_temp')) return false;
        return get.position(event.result.card)=='d';
    },
    content:function (){
        "step 0"
		translation1=get.translation(trigger.player);
		translation2=get.translation(trigger.result.card);
		if(trigger.player==player) {
			player.gain(trigger.result.card,'gain2');
			player.addTempSkill('XShongliang_temp',{player:'phaseBefore'});
			event.finish();
		}
		else {
			player.chooseControl().set('choiceList',['令你获得'+translation2,'令'+translation1+'获得'+translation2]).set('ai',function(event,player){
				var trigger=_status.event.getTrigger();
				var att=get.attitude(_status.event.player,trigger.player);
				if(trigger.result.card.name=='du'&&att<=0) return 1;
				return 0;
			});
		}
        "step 1"
        if(result.index==0){
            player.gain(trigger.result.card,'gain2');
        }
        else{
            trigger.player.gain(trigger.result.card,'gain2');
        }
		player.addTempSkill('XShongliang_temp',{player:'phaseBefore'});
    },
	subSkill:{
        temp:{
			sub:true,
        },
    },
		},
		"XSzhixing":{
	trigger:{
		player:"useCardAfter",
	},
	forced:true,
	priority:-10,
	skillAnimation:true,
	derivation:['XSliyan','XSligong','XSlide'],
	init:function (player){
		player.storage.XSzhixing=[0,0];
		player.markSkill('XSzhixing');
	},
	intro:{
		content:function (content,player){
			var num1=player.storage.XSzhixing[0];
			var num2=player.storage.XSzhixing[1];
			var num3=player.storage.XSzhixing_count[0];
			var num4=player.storage.XSzhixing_count[1];
			var str='已使用:<span class="bluetext"> '+num3+'</span> 张基本牌，<span class="bluetext">'+num4+'</span> 张锦囊牌。</br>已获得：<span class="bluetext">'+num1+'</span> 张锦囊牌，<span class="bluetext">'+num2+'</span> 张基本牌。';
			return str;
		},
	},
	filter:function (event,player){
		if(player.storage.XSzhixing[0]==2&&!player.hasSkill('XSliyan')) return true;
		if(player.storage.XSzhixing[1]==2&&!player.hasSkill('XSligong')) return true;
		if(player.storage.XSzhixing[0]>=3&&player.storage.XSzhixing[1]>=3) return true;
		return false;
	},
	content:function (){
		"step 0"
		if(player.storage.XSzhixing[0]==2&&!player.hasSkill('XSliyan')) {
			player.addSkill('XSliyan');
			player.loseMaxHp();
		}
		if(player.storage.XSzhixing[1]==2&&!player.hasSkill('XSligong')) {
			player.addSkill('XSligong');
			player.loseMaxHp();
		}
		"step 1"
		if(player.storage.XSzhixing[0]>=3&&player.storage.XSzhixing[1]>=3) {
			player.addSkill('XSlide');
			player.removeSkill('XSzhixing');
		}
	},
	group:["XSzhixing_count"],
    subSkill:{
        count:{
			trigger:{
				player:"useCardAfter",
			},
			popup:false,
			forced:true,
			silent:true,
			init:function (player){
				player.storage.XSzhixing_count=[0,0];
			},
			filter:function (event,player){
				return get.type(event.cards[0])=='trick'||get.type(event.cards[0])=='basic';
			},
			content:function (){
				"step 0"
				if(get.type(trigger.cards[0])=='basic') {
					player.storage.XSzhixing_count[0]++;
				}
				else {
					player.storage.XSzhixing_count[1]++;
				}
				"step 1"
				if(player.storage.XSzhixing_count[0]>=2) {
					var card=get.cardPile(function(card){
						return get.type(card)=='trick';
					});
					if(card) {
						player.gain(card,'gain2','log');
						player.storage.XSzhixing[0]++;
					}
					player.storage.XSzhixing_count[0]=0;
				}
				if(player.storage.XSzhixing_count[1]>=3) {
					var card=get.cardPile(function(card){
						return get.type(card)=='basic';
					});
					if(card) {
						player.gain(card,'gain2','log');
						player.storage.XSzhixing[1]++;
					}
					player.storage.XSzhixing_count[1]=0;
				}
			},
			sub:true,
        },
    },
		},
		"XSliyan":{
    trigger:{
        player:"phaseEnd",
    },
    frequent:true,
	init:function (player){
		player.storage.XSliyan=[[],[]];
	},
    intro:{
        content:"cards",
    },
    content:function (){
        "step 0"
		var basiclist=[];
		basiclist.push(['基本','','sha']);
		basiclist.push(['基本','','sha','fire']);
		basiclist.push(['基本','','sha','thunder']);
		player.chooseButton(['是否声明1种类型的杀？',[basiclist,'vcard']]).set('ai',function(button){
			var player=_status.event.player;
			var card={name:button.link[2],nature:button.link[3]};
			if(player.getEquip('tengjia')||player.hasSkill('XStiandao_mark2')||player.hasSkill('kuangfeng2')) {
				if(card.nature=='fire') return 3;
			}
			if(player.hasSkill('dawu2')||player.hasSkill('XStiandao_mark1')) {
				if(card.nature=='thunder') return 3;
			}
			else return 1;
		});
        "step 1"
		if(result&&result.bool&&result.links[0]){
			var card1={name:result.links[0][2],nature:result.links[0][3]};
			player.storage.XSliyan[0]=card1;
		}
		game.delay();
		"step 2"
		var tricklist=[];
		for(var i=0;i<lib.inpile.length;i++){
			if(get.type(lib.inpile[i])=='trick') tricklist.push(['锦囊','',lib.inpile[i]]);
		}
		player.chooseButton(['是否声明1种锦囊牌？',[tricklist,'vcard']]).set('ai',function(button){
			var player=_status.event.player;
			var card={name:button.link[2]};
			if(player.getEquip('tengjia')||player.hasSkill('XStiandao_mark2')||player.hasSkill('kuangfeng2')) {
				if(card.name=='huogong') return 3;
				if(card.name=='wanjian'||card.name=='nanman') return -1;
			}
			if(player.hasSkill('dawu2')||player.hasSkill('XStiandao_mark1')) {
				if(card.name=='wanjian'||card.name=='nanman'||card.name=='huogong'||card.name=='juegou') return -1;
			}
			if(card.name=='XSpaozhuanyinyu'||card.name=='zengbin') return -1;
			else return 1;
		});
        "step 3"
		if(result&&result.bool&&result.links[0]){
			var card2={name:result.links[0][2]};
			player.storage.XSliyan[1]=card2;
		}
		game.delay();
		"step 4"
		if(player.storage.XSliyan) player.markSkill('XSliyan');
    },
    group:["XSliyan_un","XSliyan_clear"],
	subSkill:{
		un:{
			mod:{
				targetEnabled:function(card,player,target){
					if(target.storage.XSliyan[0]) {
						var card1=target.storage.XSliyan[0];
						if(card.name==card1.name&&card.nature==card1.nature) return false;
					}
					if(target.storage.XSliyan[1]) {
						var card2=target.storage.XSliyan[1];
						if(card.name==card2.name) return false;
					}
				},
			},
			sub:true,
        },
        clear:{
			trigger:{
				player:"phaseZhunbeiBefore",
			},
			popup:false,
			forced:true,
			silent:true,
			content:function(){
				player.storage.XSliyan=[[],[]];
				player.unmarkSkill('XSliyan');
			},
			sub:true,
        },
    },
		},
		"XSligong":{
	trigger:{player:'useCardToPlayered'},
	direct:true,
	filter:function(event,player){
		return event.card.name=='sha'&&event.target.isAlive()&&event.target.countCards('h')>0;
	},
	content:function(){
		'step 0'
		player.choosePlayerCard(trigger.target,get.prompt2('XSligong'),'h','visible').set('ai',function(button){
			if(button.link.name=='shan') return 3;
			if(button.link.name=='tao') return 2;
			else if(get.color('button.link')=='black') {
				return 1;
			}
			return 0.5;
		});
		'step 1'
		if(result.bool&&result.links.length){
			player.logSkill('XSligong',trigger.target);
			if(trigger.target.storage.XSligong1){
				trigger.target.storage.XSligong1=trigger.target.storage.XSligong1.concat(result.links);
			}
			else{
				trigger.target.storage.XSligong1=result.links;
			}
			trigger.target.addSkill('XSligong1');
			trigger.target.lose(result.links,ui.special,'toStorage');
		}
	},
	ai:{
		expose:0.2
	},
		},
		"XSligong1":{
	trigger:{global:'phaseEnd'},
	forced:true,
	mark:true,
    intro:{
        content:"cards",
    },
	content:function(){
		if(player.storage.XSligong1){
			for(var i=0;i<player.storage.XSligong1.length;i++) {
				if(get.color(player.storage.XSligong1[i])!='black') {
					player.gain(player.storage.XSligong1[i],'fromStorage');
				}
			}
			delete player.storage.XSligong1;
		}
		player.removeSkill('XSligong1');
	},
	group:["XSligong1_die"],
    subSkill:{
        die:{
			trigger:{player:'dieBegin'},
			forced:true,
			popup:false,
			content:function(){
				player.$throw(player.storage.XSligong1,1000);
				game.cardsDiscard(player.storage.XSligong1);
				game.log(player,'弃置了',player.storage.XSligong1);
				delete player.storage.XSligong1;
				player.removeSkill('XSligong1');
			},
			sub:true,
        },
    },
		},
		"XSlide":{
	group:["XSlide_gain","XSlide_lose"],
    subSkill:{
        gain:{
			trigger:{
				player:"gainAfter",
			},
			frequent:true,
			filter:function (event,player){
				return event.cards&&event.cards.length>1;
			},
			content:function (){
				"step 0"
				player.chooseTarget('选择1名其他角色弃置其1张牌',function(card,player,target){
					return target.countCards('hej')&&target!=player;
				}).ai=function(target){
					var player=_status.event.player;
					var att=get.attitude(player,target);
					if(att>0) {
						if(target.countCards('j')>0) return att+6;
						return -1;
					}
					else {
						if(target.countCards('e')>0) return -att+3;
						return -att;
					}
				}
				"step 1"
				if(result.bool) {
					target1=result.targets[0];
					player.discardPlayerCard(target1,'hej',true);
				}
			},
			sub:true,
        },
		lose:{
			trigger:{
				player:["loseAfter"],
			},
			frequent:true,
			filter:function (event,player){
				return event.cards&&event.cards.length>1;
			},
			content:function (){
				player.moveCard();
			},
			sub:true,
        },
    },
		},
		"XSpincai":{
   trigger:{
        global:"phaseUseBegin",
    },
	filter:function (event,player){
        return event.player!=player&&player.countCards('he');
    },
	check:function (event,player){
		var att=get.attitude(player,event.player);
		if(att<=0&&player.countCards('h','du')>0) return true;
		return player.countCards('he')>2&&att>0;
	},
	content:function(){
		"step 0"
		var translation1=get.translation(trigger.player);
		var cards=player.getCards('he');
		player.chooseCardButton('交给'+translation1+'任意张牌',false,cards,[1,cards.length]).set('ai',function(button){
			var trigger=_status.event.getTrigger();
			var player=_status.event.player;
			var att=get.attitude(player,trigger.player);
			if(att<=0) {
				if(ui.selected.buttons.name=='du') return 20;
				return -1;
			}
			else {
				if(ui.selected.buttons.length==0) {
					return 8-get.value(ui.selected.buttons);
				}
				if(ui.selected.buttons.length==1) {
					return 12-get.value(ui.selected.buttons);
				}
				if(ui.selected.buttons.length>1) {
					return -1;
				}
			}

		});
		"step 1"
		if(result.bool){
			var togive=result.links.slice(0);
			trigger.player.gain(togive,'gain2');
			game.log(trigger.player,'获得了'+get.cnNumber(togive.length)+'张牌');
			if(togive.length>=2) {
				player.chooseControl('回复体力','摸1张牌',function(event,player){
					if(player.isDamaged()) return '回复体力';
					return '摸1张牌';
				}).set('prompt','令你回复1点体力或摸1张牌');
			}
		}
		else event.finish();
		"step 2"
		if(result.control=='回复体力'){
			player.recover();
		}
		else{
			player.draw();
		}
	},
	ai:{
		expose:0.3,
	},
		},
		"XSguangna":{
	mod:{
		maxHandcard:function (player,num){
			return player.storage.XSguangna;
		},
	},
	init:function (player){
		player.storage.XSguangna=0;
	},
	trigger:{
		player:"phaseDiscardBefore"
	},
	forced:true,
	content:function(){
		var num=0;
		var suitlist=['heart','diamond','club','spade'];
		var typelist=['basic','trick','delay','equip'];
		var colorlist=['black','red'];
		for(var i=0;i<suitlist.length;i++) {
			if(player.countCards('h',{suit:suitlist[i]}))
			num++;
		}
		for(var i=0;i<typelist.length;i++) {
			if(player.countCards('h',{type:typelist[i]}))
			num++;
		}
		for(var i=0;i<colorlist.length;i++) {
			if(player.countCards('h',{color:colorlist[i]}))
			num++;
		}
		player.storage.XSguangna=num;
	},
		},
		"XSsanku":{
	trigger:{
		player:"damageBefore",
	},
	check:function (event,player){
		if(!player.countCards('h','tao')&&!player.countCards('h','jiu')) return true;
		return false;
    },
	init:function (player){
		player.storage.XSsanku=0;
	},
	priority:99,
	filter:function (event,player){
		return event.num>=player.hp&&player.storage.XSsanku<3;
	},
	content:function (){
		"step 0"
		var list=[];
        if(!player.isDisabled(1)&&!player.isDisabled(4)){
            list.push('武器与攻击马');
        }
		if(!player.isDisabled(2)&&!player.isDisabled(3)){
            list.push('防具与防御马');
        }
		if(!player.isDisabled(2)&&player.storage._disableJudge!=true){
            list.push('宝物与判定区');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择废弃一类并防止此伤害');
        }
		else event.finish();
		"step 1"
		if(result.control=='武器与攻击马'){
			player.disableEquip('equip1');
			player.disableEquip('equip4');
		}
		else if(result.control=='防具与防御马') {
			player.disableEquip('equip2');
			player.disableEquip('equip3');
		}
		else {
			player.disableEquip('equip5');
			player.disableJudge();
		}
		"step 2"
		player.logSkill('XSsanku');
		trigger.cancel();
		player.storage.XSsanku++;
	},
		},
		"XSdingyuan":{
	mod:{
		globalFrom:function (from,to,current){
			return current-from.storage.XSdingyuan;
		},
	},
    trigger:{
        global:["loseEnd"],
    },
    direct:true,
	init:function (player){
        player.storage.XSdingyuan=0;
    },
    filter:function (event,player){
		if(event.player==player) return false;
		var card1=event.cards;
		return card1&&card1.length>1&&event.player.isAlive()&&get.position(card1[0])=='d';
    },
    content:function (){
		"step 0"
        var next=player.chooseButton();
        next.set('createDialog',['选择1张牌',trigger.cards]);
        next.set('ai',function(button){
            return get.buttonValue(button);
        });
        "step 1"
        if(result.bool){
            player.logSkill('XSdingyuan',trigger.player);
			event.card=result.links[0];
			var translation1=get.translation(trigger.player);
			var translation2=get.translation(event.card);
			player.chooseControl().set('choiceList',['令'+translation1+'获得'+translation2,'令你获得'+translation2]).set('ai',function(event,player){
				var trigger=_status.event.getTrigger();
				if(trigger.player.countCards('h')<=player.countCards('h')) return 0;
				return 1;
			});
        }
		else event.finish();
        "step 2"
		if(result.index==0){
			trigger.player.gain(event.card,'gain2','log');
			player.storage.XSdingyuan++;
		}
		else{
			player.gain(event.card,'gain2','log');
		}
    },
	group:["XSdingyuan_clear"],
    subSkill:{
        clear:{
            trigger:{
                player:["phaseEnd"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
				player.storage.XSdingyuan=0;
            },
			sub:true,
        },
    },
		},
		"XSpingrong":{
	trigger:{
		global:"phaseBegin",
	},
	check:function (event,player){
		return get.attitude(player,event.player)<=0;
	},
	filter:function (event,player){
		if(event.player==player) return false;
		return get.distance(player,event.player,'attack')<=1;
	},
	content:function (){
		trigger.player.addTempSkill('XSjirong');
		trigger.player.storage.XSjirong=player;
	},
	ai:{
        expose:0.3,
        threaten:1.2,
    },
		},
		"XSjirong":{
	trigger:{
		player:"useCardAfter",
	},
	forced:true,
	popup:false,
	marktext:"戎",
	init:function (player){
		player.markSkill('XSjirong');
	},
	intro:{
		content:function (content,player){
			var num1=Math.max(2,player.storage.XSjirong.hp);
			var num2=player.storage.XSjirong_count;
			var temp=get.translation(player.storage.XSjirong);
			var str='你每使用<span class="bluetext">'+num1+'</span>张牌，<span class="bluetext">'+temp+'</span>视为对你使用1张杀；你已使用<span class="bluetext">'+num2+'</span>张牌。';
			return str;
		},
	},
	filter:function (event,player){
		return player.storage.XSjirong&&player.storage.XSjirong.isAlive();
    },
	content:function (){
		"step 0"
		player.storage.XSjirong_count+=trigger.cards.length;
		"step 1"
		var num=Math.max(2,player.storage.XSjirong.hp);
		if(player.storage.XSjirong_count>=num) {
			player.storage.XSjirong.useCard({name:'sha'},player,false);
			player.storage.XSjirong_count=0;
		}
		else {
			event.finish();
		}
	},
	group:["XSjirong_count"],
    subSkill:{
        count:{
			init:function (player){
				player.storage.XSjirong_count=0;
			},
			sub:true,
        },
    },
		},
		"XSqinwang":{
	enable:'phaseUse',
	usable:1,
	filter:function (event,player){
		return player.countCards('e');
	},
	content:function(){
		"step 0"
		event.num=player.countCards('e');
		event.num1=0;
		event.num2=0;
		"step 1"
        player.draw();
		event.num2++;
        "step 2"
        if(Array.isArray(result)&&result.length){
            event.gained=result[0];
            if(lib.filter.cardEnabled(event.gained,target)){
                var next=player.chooseToUse();
                next.filterCard=function(card){
                    return card==event.gained;
                };
                next.prompt='是否使用'+get.translation(event.gained)+'？';
            }
            else{
				event.num1++;
				player.discard(event.gained);
            }
        }
        else{
			event.goto(4);
        }
		"step 3"
		if(result.bool==false){
			event.num1++;
			player.discard(event.gained);
		}
		"step 4"
		event.num--;
        if(event.num>0){
            player.chooseBool('是否继续获得并使用下一张牌？');
        }
        else{
			if(event.num1!=0&&event.num2>1) player.loseHp();
            event.finish();
        }
		"step 5"
        if(result.bool){
            player.logSkill('XSqinwang');
            event.goto(1);
        }
		else{
			if(event.num1!=0&&event.num2>1) player.loseHp();
            event.finish();
        }
	},
	ai:{
		order:1,
		result:{
            player:function (player){
				if(player.hp<2) return 0;
                return 2;
            },
		},
	},
		},
		"XSzhenyi":{
    mod:{
		globalTo:function (from,to,current){
			if(to.getEquip(5)) {
				return current+1;
			}
			return current;
		},
		maxHandcard:function (player,num){
			var num1=0;
			if(player.getEquip(3)) num1++;
			if(player.getEquip(4)) num1++;
			if(player.getEquip(6)) num1++;
			return num+num1;
		},
    },
    audio:2,
    trigger:{
        player:["phaseBefore","equipAfter","loseAfter"],
    },
    forced:true,
    popup:false,
    content:function (){
        player.removeAdditionalSkill('XSzhenyi');
        var list=[];
        if(player.getEquip(1)){
            list.push('XSzhenyi_1');
        }
        if(player.getEquip(2)){
            list.push('XSzhenyi_2');
        }
        if(list.length){
            player.addAdditionalSkill('XSzhenyi',list);
        }
    },
	subSkill:{
        1:{
		    mod:{
				canBeGained:function (card,player){
					if(get.position(card)=='e'&&get.subtype(card)!='equip1') return false;
				},
			},
			sub:true,
        },
		2:{
			mod:{
				canBeDiscarded:function(card,player){
					if(get.position(card)=='e'&&get.subtype(card)!='equip2') return false;
				},
			},
			sub:true,
        },
    },
		},
		"XStanli":{
    trigger:{
        global:["damageEnd"],
    },
	init:function(player){
		player.storage.XStanli=0;
	},
    filter:function (event,player){
		var num1=player.maxHp-player.hp;
		if(num1<1) num1=1;
		if(player.storage.XStanli>=num1) return false;
        return event.player.countCards('h');
    },
	check:function (event,player){
		return get.attitude(player,event.player)>0;
	},
    content:function (){
		player.discardPlayerCard(trigger.player,get.prompt2('XStanli'),'h',1,function(button){
			var trigger=_status.event.getTrigger();
			var player=_status.event.player;
			var att=get.attitude(player,trigger.player);
			if(att>0) return 4-get.buttonValue(button);
			else return get.buttonValue(button);
		},'visible',true);
		player.storage.XStanli++;
		trigger.player.recover();
    },
    ai:{
		threaten:1.2,
        expose:0.3,
    },
	group:["XStanli_clear"],
    subSkill:{
		clear:{
            trigger:{
                player:["phaseBefore"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
				player.storage.XStanli=0;
            },
			sub:true,
        },
    },
		},
		"XSqianjie":{
	trigger:{
		target:"useCardToBefore",
	},
	direct:true,
	priority:5,
	filter:function (event,player){
		if(!get.tag(event.card,'damage')) return false;
		if(event.player==player) return false;
		if(event.targets&&event.targets.length>1) return false;
		return game.hasPlayer(function(current){
			return current!=event.player&&current!=player&&current.sex=='male';
		});
	},
	content:function (){
		"step 0"
		player.chooseTarget(get.prompt2('XSqianjie'),function(card,player,target){
			var trigger=_status.event.getTrigger();
			return player!=target&&target!=trigger.player;
		}).ai=function(target){
			var trigger=_status.event.getTrigger();
			var player=_status.event.player;
			var hs=target.countCards('h');
			if(hs<1) hs=1;
			var eff=get.effect(target,trigger.card,trigger.player,player);
			var att=get.attitude(player,target);
			if(eff>0) return att;
			else {
				if(target.hasSkill('XStianzhao')) return att+1;
				if(hs>2) return att;
				return -att;
			}
		}
		"step 1"
		if(result.bool){
			player.logSkill('XSqianjie',result.targets);
			var target1=result.targets[0];
			trigger.targets.add(target1);
			if(!target1.hasSkill('XSqianjie1')) {
				target1.addTempSkill('XSqianjie1',{player:'phaseZhunbeiEnd'});
			}
			target1.storage.XSqianjie1+=2;
			target1.storage.XSqianjie1_damage=trigger.card;
		}
	},
		},
		"XSqianjie1":{
	trigger:{
		player:"phaseZhunbeiBefore",
	},
	forced:true,
	content:function (){
		var num1=player.storage.XSqianjie1;
		player.draw(num1);
	},
	filter:function (event,player){
		return player.storage.XSqianjie1>0;
	},
	init:function(player){
		player.storage.XSqianjie1=0;
	},
	group:["XSqianjie1_damage"],
	subSkill:{
        damage:{
			trigger:{player:'damageEnd'},
			forced:true,
            popup:false,
            silent:true,
			filter:function(event,player){
				return player.storage.XSqianjie1>0&&event.card&&event.card==player.storage.XSqianjie1_damage;
			},
			content:function(){
				player.storage.XSqianjie1-=2;
				if(player.storage.XSqianjie1<0) player.storage.XSqianjie1=0;
			},
			sub:true,
        },
    },
		},
		"XScihou":{
   mark:true,
    marktext:"辞",
    limited:true,
    skillAnimation:true,
    animationColor:"gray",
    unique:true,
    enable:"phaseUse",
	init:function (player){
        player.storage.XScihou=false;
    },
	position:'h',
	filterCard:true,
	complexCard:true,
	selectCard:[0,3],
	check:function(card){
		return 10-get.value(card);
	},
	selectTarget:function (){
		return [1,ui.selected.cards.length];
	},
	filterTarget:true,
	multitarget:true,
	multiline:true,
	content:function(){
		"step 0"
        event.num=targets.length-1;
		player.awakenSkill('XScihou');
        player.storage.XScihou=true;
		"step 1"
		var suitlist=['heart','spade','diamond','club'];
		var cards=[];
		for(var i=0;i<suitlist.length;i++) {
			if(targets[event.num].countCards('h',{suit:suitlist[i]})==0) {
				var card1=get.cardPile(function(card){
					return get.suit(card)==suitlist[i];
				});
				cards.push(card1);
			}
		}
		if(cards.length!=0) {
			targets[event.num].gain(cards,'gain2');
		}
		"step 2"
		event.num--;
		if(event.num>=0){
            event.goto(1);
        }
        else{
            event.finish();
        }
	},
	ai:{
		order:1,
        skillTagFilter:function (player){
            if(player.storage.XScihou) return false;
        },
		result:{
			player:function(player){
				var num=0;
				for(var i=0;i<game.players.length;i++) {
					if(get.attitude(player,game.players[i])&&game.players[i].countCards('h')<3)
					num++;
				}
				var hs=player.countCards('h');
				if(hs<=3&&num>1) return num;
				return 0;
			},
			target:function (player,target){
				var num1=4-target.countCards('h');
				if(num1<0) num1=0;
				return num1;
            },
		}
	}
		},
		"XSposhi":{
    enable:"phaseUse",
    audio:2,
	init:function(player){
		player.storage.XSposhi=0;
	},
    filter:function (event,player){
		var num1=player.storage.XSposhi;
		if(num1<1) num1=1;
		if(player.getStat().skill.XSposhi>=num1) return false;
		return true;
    },
    filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
    content:function (){
        "step 0"
		event.card1=target.getCards('h').randomGet();
		player.gain(event.card1,target);
		target.$giveAuto(event.card1,player);
		"step 1"
		if(lib.filter.cardEnabled(event.card1)){
			var next=player.chooseToUse();
			next.filterCard=function(card){
				return card==event.card1;
			};
			next.prompt='是否使用'+get.translation(event.card1,target)+'？';
		}
		else{
			player.loseHp();
			event.finish();
		}
		"step 2"
		if(result.bool==false){
			player.loseHp();
			event.finish();
		}
    },
    ai:{
        order:1,
		result:{
			player:function(player){
				if(player.hp<2) return -2;
				return 1;
			},
            target:-2,
        },
        expose:0.3,
        threaten:1.2,
    },
	group:["XSposhi_count"],
    subSkill:{
        count:{
            trigger:{
                player:["phaseEnd"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
				var numx=player.getStat('damage');
				if(typeof numx!='number') numx=0;
				player.storage.XSposhi=numx;
            },
			sub:true,
        },
    },
		},
		"XSfubing":{
	trigger:{
		player:["damageEnd"],
	},
	forced:true,
	filter:function (event){
		return event.num>0;
	},
	content:function (){
		player.stat.push({card:{},skill:{}});
		player.addTempSkill('XSfubing_dam');
	},
	group:["XSfubing_lose"],
    subSkill:{
        lose:{
			trigger:{
				player:["loseHpEnd"],
			},
			forced:true,
			filter:function (event){
				return event.num>0;
			},
			content:function (){
				player.stat.push({card:{},skill:{}});
				player.addTempSkill('XSfubing_los');
			},
			sub:true,
        },
		dam:{
			trigger:{
				player:"damageBefore",
			},
			mark:true,
			marktext:"府",
			forced:true,
			content:function (){
				trigger.cancel();
			},
			ai:{
				nodamage:true,
				effect:{
					target:function (card,player,target,current){
						if(get.tag(card,'damage')) return [0,0];
					},
				},
			},
			intro:{
				content:"免受所有伤害",
			},
			sub:true,
        },
		los:{
			trigger:{
				player:"loseHpBefore",
			},
			mark:true,
			marktext:"府",
			forced:true,
			content:function (){
				trigger.cancel();
			},
			intro:{
				content:"免疫体力流失",
			},
			sub:true,
        },
    },
		},
	   "XSyazi":{
    trigger:{
        global:"gameDrawAfter",
    },
    forced:true,
    filter:function (){
		return true;
    },
    content:function (){
        'step 0'
        player.chooseTarget('选择【睚眦】的目标',lib.translate.XSyazi,true,function(card,player,target){
            return target!=player&&!target.hasSkill('XSyazimark');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
			target.addSkill('XSyazimark');
            target.storage.XSyazimark=player;
			player.storage.XSyazi=target;
        }
    },
	group:["XSyazi_tar"],
	subSkill:{
        tar:{
			trigger:{
				target:"useCardToBefore",
			},
			direct:true,
			priority:5,
			filter:function (event,player){
				var tar=player.storage.XSyazi;
				if(!tar) return false;
				if(event.targets.contains(tar)==true) return false;
				if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
				return true;
			},
			content:function (){
				trigger.targets.add(player.storage.XSyazi);
			},
			sub:true,
        },
    },
		},
		"XSyazimark":{
    marktext:"眦",
    intro:{
        content:"当$成为基本牌或普通锦囊牌的目标时，你也成为此牌目标",
    },
	init:function (player){
		player.markSkill('XSyazimark');
	},
		},
	   "XSyuanjiao":{
    enable:"phaseUse",
    usable:1,
    filter:function (event,player){
        return player.countCards('h')>0&&game.hasPlayer(function(current){
			return current!=player&&get.distance(player,current)>1;
		});
    },
    filterCard:true,
    selectCard:1,
	position:"h",
    filterTarget:function (card,player,target){
        return player!=target&&get.distance(player,target)>1;
    },
    discard:false,
	check:function (card){
        return 8-ai.get.value(card);
    },
    content:function (){
		var num1=Math.max(0,player.countCards('h')-target.countCards('h'));
		if(num1>3) num1=3;
		target.draw(num1);
    },
    ai:{
        order:12,
		result:{
			player:-0.5,
            target:function (player,target){
				var num1=player.countCards('h')-target.countCards('h')-1;
				if(num1>0) return num1;
				return 0;
            },
        },
        expose:0.4,
    },
		},
	   "XSjingong":{
   enable:"phaseUse",
    usable:1,
    filter:function (event,player){
        return game.hasPlayer(function(current){
			return current!=player&&get.distance(player,current)<=1;
		});
    },
    filterTarget:function (card,player,target){
        return player!=target&&get.distance(player,target)<=1;
    },
    content:function (){
		'step 0'
		player.draw();
		'step 1'
		var num1=Math.max(0,target.countCards('h')-player.countCards('h'));
		if(num1>3) num1=3;
		if(num1>0) {
			target.chooseToDiscard('h',num1,true);
		}
    },
    ai:{
        order:1,
		result:{
			player:1,
            target:function (player,target){
				var num1=target.countCards('h')-player.countCards('h')-1;
				if(num1>0) return -num1;
				return 0;
            },
        },
        expose:0.2,
    },
		},
	   "XSlizhan":{
    trigger:{
		player:["changeHp"],
    },
    forced:true,
    filter:function (event,player){
		return event.num!=0;
    },
	mod:{
		maxHandcard:function (player,num){
			return num+player.storage.XSlizhan;
		},
	},
    content:function (){
        var num1=Math.abs(trigger.num);
		player.storage.XSlizhan+=num1;
		player.draw(num1*2);
        game.delay();
    },
	init:function(player){
		player.storage.XSlizhan=0;
	},
	group:["XSlizhan_clear","XSlizhan_damage"],
    subSkill:{
        clear:{
            trigger:{
                player:["phaseDiscardAfter"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
				player.storage.XSlizhan=0;
            },
			sub:true,
        },
		damage:{
            trigger:{
                player:"damageBegin",
            },
            forced:true,
            filter:function (event,player){
				return event.num>0;
            },
            priority:-1,
            content:function (){
                trigger.num=1;
            },
			sub:true,
        },
    },
		},
	   "XSbaipao":{
	audio:2,
	enable:'phaseUse',
	skillAnimation:true,
	usable:1,
	content:function(){
		"step 0"
		player.chooseControlList(
			['回复1点体力，令全部其他角色本回合内全部技能失效。',
			'失去1点体力，令全部其他角色本回合无法响应你的牌。'],
			true).set('ai',function(event,player){
			if(player.isDamaged()) return 0;
			return 1;
		});
		"step 1"
        if(result.index==0){
			player.recover();
			game.countPlayer(function(current){
				if(current!=player&&!current.hasSkill('baiban')){
					player.line(current,'white');
					current.addTempSkill('baiban');
				}
			});
        }
		else{
			player.loseHp();
			player.addTempSkill('XSbaipao_nores');
			game.countPlayer(function(current){
				player.line(current,'white');
			});
        }
	},
	ai:{
		order:9,
		result:{
			player:2,
		},
	},
	subSkill:{
        nores:{
			trigger:{
				player:"useCard",
			},
			silent:true,
			filter:function (event,player){
				return true;
			},
			content:function(){
				trigger.nowuxie=true;
				trigger.directHit.addArray(game.players);
			},
			forced:true,
			popup:false,
			sub:true,
        },
    },
		},
	   "XSgongshu":{
     trigger:{
        player:"phaseDrawBegin",
    },
    direct:true,
    priority:-10,
    filter:function (event,player){
        return event.num>0&&game.hasPlayer(function(current){
			return current!=player&&current.countCards('e');
		});
    },
    content:function (){
		"step 0"
		event.num=0;
        player.chooseTarget(get.prompt('XSgongshu'),'获得至多'+get.translation(trigger.num)+'名角色各1张装备牌',[1,trigger.num],function(card,player,target){
            return player!=target&&target.countCards('e');
        },function(target){
            var att=get.attitude(_status.event.player,target);
			if(_status.event.player.getEquip(1)&&_status.event.player.getEquip(2)) return -2;
			if(att>=0) {
				if(target.countCards('e')==1) {
					return att+2;
				}
				return att-2;
			}
			else {
				if(target.countCards('e')==1) {
					return -att+2;
				}
				return -att-2;
			}
        });
        "step 1"
        if(result.bool){
			event.len=result.targets.length;
			event.targets=result.targets;
			trigger.num-=event.len;
        }
		else event.finish();
        "step 2"
		var target1=event.targets[event.num];
		var num1=target1.countCards('e');
		player.logSkill('XSgongshu',target1);
		player.gainPlayerCard('e',target1,true);
		if(num1==1) {
			player.chooseBool('是否令'+get.translation(target1)+'摸2张牌？').set('ai',function(){
				var att=get.attitude(_status.event.player,target1);
				return att>0;
			});
		}
		else {
			event.goto(4);
		}
		"step 3"
		if(result.bool){
			event.targets[event.num].draw(2);
        }
		"step 4"
		event.num++;
		if(event.num>=event.len) {
			event.finish();
		}
		else {
			event.goto(2);
		}
		"step 5"
		game.delay();
    },
    ai:{
        threaten:1.4,
        expose:0.3,
    },
		},
	   "XSqingtian":{
	trigger:{
		source:"damageBefore",
	},
	priority:9,
	filter:function (event,player){
		return event.card&&event.card.name=='sha'&&event.notLink()&&!event.player.countCards('e');
	},
	direct:true,
	content:function (){
		trigger.num++;
	},
	ai:{
		damageBonus:true,
	},
	group:["XSqingtian_last"],
	subSkill:{
        last:{
			trigger:{
				player:"shaBegin",
			},
			forced:true,
			filter:function (event,player){
				return player.countCards('h')==0;
			},
			content:function (){
				trigger.directHit=true;
			},
			sub:true,
        },
    },
		},
	   "XSyinzhi":{
	trigger:{
		source:"damageBefore",
	},
	direct:true,
	filter:function (event,player){
		return player.storage.XSyinzhi>0&&event.notLink();
	},
	marktext:"饮",
	init:function(player){
		player.storage.XSyinzhi=0;
		player.markSkill('XSyinzhi');
		player.syncStorage('XSyinzhi');
	},
	intro:{
		content:function(storage){
			return '当前有 <span class="bluetext">'+storage+'</span> 枚“饮”';
		},
	},
	content:function (){
		'step 0'
		event.num1=Math.ceil(player.storage.XSyinzhi/2);
		player.chooseBool('是否移除'+event.num1+'枚“饮”令对'+get.translation(trigger.player)+'的伤害+'+event.num1+'？').set('ai',function(){
			var num2=Math.ceil(player.storage.XSyinzhi/2);
			if(get.attitude(player,trigger.player)>0) return false;
			return trigger.num+num2<=trigger.player.hp;
		});
		'step 1'
		if(result.bool){
			trigger.num+=event.num1;
			player.storage.XSyinzhi-=event.num1;
			player.syncStorage('XSyinzhi');
		}
	},
	ai:{
		maixie:true,
		"maixie_hp":true,
		effect:{
			target:function (card,player,target){
                if(get.tag(card,'damage')){
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
	group:["XSyinzhi_card","XSyinzhi_hp"],
    subSkill:{
		hp:{
		    trigger:{
				player:["changeHp"],
			},
			forced:true,
			popup:false,
			silent:true,
			priority:7,
			filter:function (event){
				return event.num<0;
			},
			content:function (){
				player.storage.XSyinzhi-=trigger.num;
				player.syncStorage('XSyinzhi');
			},
			sub:true,
        },
		card:{
			trigger:{
				player:["loseEnd"],
			},
			forced:true,
			popup:false,
			silent:true,
			filter:function (event,player){
				var card1=event.cards;
				return card1&&card1.length>1;
			},
			content:function (){
				var num1=trigger.cards.length;
				var num2=Math.floor(num1/2);
				player.storage.XSyinzhi+=num2;
				player.syncStorage('XSyinzhi');
			},
			sub:true,
        },
    },
		},
       "XStuishang":{
	trigger:{
		player:'phaseZhunbeiBefore',
	},
	init:function (player){
        player.storage.XStuishang=0;
    },
	frequent:true,
	content:function(){
		"step 0"
		player.addTempSkill('XStuishang_skip');
		var num=player.storage.XStuishang;
		if(num>3) num=3;
		if(num<1) num=1;
		num+=2;
		event.cards=get.cards(num);
		"step 1"
		if(event.cards.length>1){
			player.chooseCardButton('将牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
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
					if(target.hasSkill('XSxuhuai')) return 2+att/(1+target.countCards('h'));
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
	group:['XStuishang_count'],
	subSkill:{
		count:{
			trigger:{
				player:"gainAfter",
			},
            forced:true,
            popup:false,
            silent:true,
			filter:function (event,player){
				if(_status.currentPhase==player) return false;
				return event.cards&&event.cards.length>0;
			},
			content:function (){
				var num1=trigger.cards.length;
				player.storage.XStuishang+=num1;
			},
			sub:true,
        },
        skip:{
			trigger:{
				player:["phaseDrawBefore"],
			},
            forced:true,
            popup:false,
            silent:true,
			content:function(){
				trigger.cancel();
			},
			sub:true,
        },
		clear:{
			trigger:{
				player:["phaseAfter"],
			},
            forced:true,
            popup:false,
            silent:true,
			content:function(){
				player.storage.XStuishang=0;
			},
			sub:true,
        },
    },
		},
	   "XSpingliao":{
	trigger:{
		player:'useCardToPlayered',
	},
	filter:function(event,player){
		if(!['sha'].contains(event.card.name)) return false;
		if(player.hasSkill('XSpingliao_temp')) return false;
		return player.isPhaseUsing()&&event.target&&event.targets&&event.targets.length==1;
	},
	init:function (player){
        player.storage.XSpingliao=0;
    },
	direct:true,
	content:function(){
		'step 0'
		player.addTempSkill('XSpingliao_temp');
		player.chooseControl('draw_card','加伤害','cancel2').set('prompt',get.prompt2('XSpingliao'));
		'step 1'
		if(result.control&&result.control!='cancel2'){
			player.logSkill('XSpingliao');
			var num1=trigger.target.countCards('h',{type:['trick']});
			if(result.control=='draw_card'){
				player.draw(num1*2);
			}
			else{
				player.storage.XSpingliao=num1;
				player.addTempSkill('XSpingliao_damage',{player:'shaAfter'});
			}
		}
	},
	subSkill:{
		damage:{
			trigger:{source:'damageBegin'},
			forced:true,
			audio:false,
			filter:function(event){
				return event.card&&event.card.name=='sha'&&event.notLink();
			},
			content:function(){
				if(typeof player.storage.XSpingliao=='number'&&player.storage.XSpingliao!=0){
					trigger.num+=player.storage.XSpingliao;
				}
			},
			sub:true,
		},
		temp:{
		},
    },
		},
       "XSyejian":{
	trigger:{
		source:"damageEnd",
	},
	priority:2,
	frequent:true,
	filter:function (event){
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
    },
	content:function (){
		"step 0"
		player.logSkill('XSyejian',trigger.player);
		if(!trigger.player.getEquip(3)&&!trigger.player.getEquip(4)&&!trigger.player.getEquip(6)) {
			event.card=get.cardPile(function(card){
				return get.subtype(card)=='equip3'||get.subtype(card)=='equip4'||get.subtype(card)=='equip6';
			});
			if(event.card){
				player.showCards(event.card);
				event.goto(2);
			}
			else {
				player.draw();
				event.finish();
			}
		}
		else {
			var att=(get.attitude(player,trigger.player)<=0);
			var next=player.chooseButton();
			next.set('att',att);
			next.set('createDialog',['是否获得'+get.translation(trigger.player)+'的1张坐骑牌？',trigger.player.getCards('e',{subtype:['equip3','equip4','equip6']})]);
			next.set('ai',function(button){
				if(_status.event.att) return get.buttonValue(button);
				return 0;
			});
		}
		"step 1"
        if(result.bool){
			event.card=result.links[0];
        }
		else event.finish();
		"step 2"
		player.chooseTarget('令1名角色装备'+get.translation(event.card),function(card,player,target){return true;}).ai=function(target){
			var event=_status.event;
			var att=get.attitude(_status.event.player,target);
			if(target.countCards('e',{subtype:get.subtype(event.card)})) return att-6;
			return att;
		}
		"step 3"
		if(result.bool){
			var target1=result.targets[0];
			target1.equip(event.card);
			game.log(target1,'装备了',event.card);
		}
	},
	ai:{
		threaten:1.1,
	},
		},
       "XSpingbu":{
	mod:{
		globalTo:function (from,to,current){
			var num1=0;
			if(from.getEquip(4)||from.getEquip(6)) {num1++;}
			if(!to.getEquip(3)&&!to.getEquip(6)) {num1++;}
			if(to.getEquip(4)||to.getEquip(6)) {num1++;}
			return current+num1;
		},
		globalFrom:function (from,to,current){
			var num1=0;
			if(to.getEquip(3)||to.getEquip(6)) {num1++;}
			if(!from.getEquip(4)&&!from.getEquip(6)) {num1++;}
			if(from.getEquip(3)||from.getEquip(6)) {num1++;}
			return current-num1;
		},
	},
		},
       "XSqiaozhan":{
 	mod:{
		cardUsable:function (card,player,num){
			if(typeof num=='number'&&game.hasPlayer(function(current){
				return current.hp>=player.hp;
			})) return num+100;
		},
		playerEnabled:function (card,player,target){
			if(game.hasPlayer(function(current){
				return current.hp>=player.hp;
			})&&target.hp<player.hp){
				var num=player.getCardUsable(card)-100;
				if(num<=0) return false;
			}
		},
		targetInRange:function (card,player,target,now){
			if(target.hp<=player.hp) return true;
		},
	},
		},
       "XSshijing":{
     enable:"phaseUse",
    usable:1,
    filter:function (event,player){
        return player.countCards('h')>0;
    },
    filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
    content:function (){
        "step 0"
		event.num=0;
		if(target.countCards('h',{suit:'spade'})) event.num++;
		if(target.countCards('h',{suit:'heart'})) event.num++;
		if(target.countCards('h',{suit:'diamond'})) event.num++;
		if(target.countCards('h',{suit:'club'})) event.num++;
		event.target=target;
		var hs=player.getCards('h');
		var minval=get.value(hs[0]);
		for(var i=1;i<hs.length;i++){
			var val=get.value(hs[i],player,'raw');
			if(val<minval){
				minval=val;
			}
		}
		player.chooseCardButton('交换对方1张手牌',target.getCards('h')).ai=function(button){
			return get.value(button.link,player,'raw')-minval;
		}
		"step 1"
        if(result.bool){
            event.card=result.links[[0]];
            player.chooseCard('h',true,'用一张手牌替换'+get.translation(event.card)).ai=function(card){
				var event=_status.event.getParent();
				if(get.suit(event.card)==get.suit(card)) return 4-get.value(card);
				else return 6-get.value(card);
            };
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            target.gain(result.cards[0],player);
            player.$giveAuto(result.cards[0],target);
			player.gain(event.card,target);
            target.$giveAuto(event.card,player);

        }
		else event.finish();
		"step 3"
		var num1=0;
		if(target.countCards('h',{suit:'spade'})) num1++;
		if(target.countCards('h',{suit:'heart'})) num1++;
		if(target.countCards('h',{suit:'diamond'})) num1++;
		if(target.countCards('h',{suit:'club'})) num1++;
		if(num1==event.num) {
			player.draw();
			target.draw();
		} else if(num1<event.num) {
			player.draw(2);
		}
		else {
			target.draw(2);
		}
		game.log(player,'与',target,'交换了1张手牌');
    },
    ai:{
        order:8,
		result:{
			target:function (player,target){
				var num=target.countCards('h');
				if(num>=4) return 0.5;
				if(num>2) return 1;
				return 2;

            },
        },
        expose:0.3,
        threaten:1.4,
    },
		},
       "XSrenhou":{
	trigger:{
		global:"damageBegin",
	},
	priority:15,
	check:function (event,player){
		 return get.attitude(player,event.player)>0;
	},
	filter:function (event,player){
		return event.source!=player&&event.player!=player;
	},
	logTarget:'player',
	content:function (){
		"step 0"
		player.logSkill('XSrenhou',trigger.player);
        player.chooseCard('是否交给'+get.translation(trigger.player)+trigger.num+'张牌',trigger.num,false).ai=function(card){
			var player=_status.event.player;
			var trigger=_status.event.getTrigger();
			if(trigger.num>=trigger.player.hp) {return -1;}
			else {
				if(trigger.num>=player.countCards('h')){
					return 10-get.value(card);
				}
				return 8-get.value(card);
			}
        }
        "step 1"
        if(result.bool){
            trigger.player.gain(result.cards);
            player.$give(result.cards.length,trigger.player);
			event.finish();
        }
		else {
			player.chooseBool('是否代替'+get.translation(trigger.player)+'承受伤害？').set('ai',function(){
				return get.attitude(player,trigger.player)>0;
			});
		}
		"step 2"
		if(result.bool){
			trigger.player=player;
		}
		else event.finish();
	},
		},
       "XSsisheng":{
    mod:{
        maxHandcard:function (player,num){
			var num1=Math.ceil(player.maxHp/2);
            return Math.max(num1,player.hp);
        },
    },
	trigger:{player:['dyingBegin','dyingAfter']},
	forced:true,
	content:function(){
		player.draw(2);
	},
	group:['XSsisheng_draw'],
	subSkill:{
		draw:{
			sub:true,
			trigger:{player:'loseEnd'},
			forced:true,
			filter:function(event,player){
				if(player.countCards('h')) return false;
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='h') return true;
				}
				return false;
			},
			content:function(){
				player.draw();
			},
			ai:{
				threaten:0.8,
				effect:{
					target:function(card){
						if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
					}
				},
				noh:true,
				skillTagFilter:function(player,tag){
					if(tag=='noh'){
						if(player.countCards('h')!=1) return false;
					}
				}
			}
		},
	}
		},
       "XSshouba":{
	enable:'phaseUse',
	selectTarget:1,
	filterTarget:function (card,player,target){
        return target!=player&&target.countCards('hej');
    },
	filter:function (event,player){
		var num;
		var mode=get.mode();
		if(mode=='identity'){
			if(player.identity=='zhu'||player.identity=='zhong') {num=get.population('fan');}
			else if(player.identity=='fan') {num=get.population('zhong')+1;}
			else {num=Math.min(4,get.population('zhong')+get.population('fan')+1);}
		}
		else if(mode=='versus'){
			num=player.getEnemies().length;
		}
		else{
			num=3;
		}
		if(player.getStat().skill.XSshouba>=num) return false;
		return true;
    },
	content:function(){
		player.discardPlayerCard(target,'hej',true);
		target.draw();
	},
	ai:{
		order:4,
		result:{
			target:function(player,target){
				var att=get.attitude(player,target);
				if(att>0) {
					if(target.countCards('j')>0) return 2;
					return 0.3;
				}
				else {
					if(target.countCards('e')>0) return -1.5;
				}
				return -1;
			}
		},
		expose:0.4,
		threaten:1.3,
	},
		},
       "XSchuizhi":{
	trigger:{
		player:"phaseEnd",
	},
	frequent:true,
	filter:function (event,player){
		return player.getStat().skill.XSshouba>0;
	},
	content:function (){
		"step 0"
		event.num=player.getStat().skill.XSshouba;
		player.chooseTarget(get.prompt2('XSchuizhi'),function(card,player,target){
			return target!=player;
		}).ai=function(target){
			var player=_status.event.player;
			var num=player.getStat().skill.XSshouba;
			var att=get.attitude(player,target);
			if(num==1) {return -att;}
			if(num>=2) {return att;}
			return 0;
		}
		"step 1"
		if(result.bool){
			var target=result.targets[0];
			target.getStat().card={};
			target.getStat().skill={};
			target.update();
			if(event.num>0) {target.phaseZhunbei();}
			if(event.num>1) {target.phaseJudge();}
			if(event.num>2) {target.phaseDraw();}
			if(event.num>3) {target.phaseUse();}
			switch(event.num){
				case 1:target.addTempSkill('XSchuizhi_mark',{player:'phaseZhunbeiEnd'});break;
				case 2:target.addTempSkill('XSchuizhi_mark',{player:'phaseJudgeEnd'});break;
				case 3:target.addTempSkill('XSchuizhi_mark',{player:'phaseDrawEnd'});break;
				case 4:target.addTempSkill('XSchuizhi_mark',{player:'phaseUseEnd'});break;
			}
			target.storage.XSchuizhi_mark=event.num;
		}
		else event.finish();
	},
	group:['XSchuizhi_clear'],
	subSkill:{
		clear:{
			sub:true,
			trigger:{
				player:["phaseBefore"],
			},
			forced:true,
			popup:false,
			silent:true,
			content:function (){
				player.storage.XSchuizhi=0;
			},
		},
		mark:{
			sub:true,
			marktext:"治",
			init:function (player){
                player.markSkill('XSchuizhi_mark');
            },
			intro:{
				content:function (storage){
					var str='你获得了1个额外的<span class="bluetext">准备';
					if(storage>1) str+='、判定';
					if(storage>2) str+='、摸牌';
					if(storage>3) str+='、出牌';
					str+='</span>阶段';
                    return str;
				},
			},
		},
	}
		},
       "XSlaomou":{
    trigger:{
        player:["chooseToRespondBegin","chooseToUseBegin"],
    },
    filter:function (event,player){
		if(player.countCards('h')>0) return false;
        if(event.responded) return false;
		if(!event.filterCard({name:'shan'},player,event)) return false;
		if(event.name=='chooseToRespond'&&!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
        return true;
    },
	frequent:true,
    content:function (){
		player.draw();
		trigger.untrigger();
		trigger.responded=true;
		trigger.result={bool:true,card:{name:'shan'}}
    },
    ai:{
		respondShan:true,
        effect:{
            target:function (card,player,target,effect){
                if(get.tag(card,'respondShan')&&target.countCards('h')==0) return 0.5;
            },
        },
    },
	group:['XSlaomou_wuxie'],
	subSkill:{
		wuxie:{
			sub:true,
			enable:["chooseToUse","chooseToRespond"],
			filterCard:function (){return true},
			selectCard:-1,
			viewAsFilter:function (player){
				return player.countCards('h')>0;
			},
			viewAs:{
				name:"wuxie",
			},
			prompt:"弃置全部手牌然后你视为使用一张【无懈可击】",
			check:function (){
				var player=_status.event.player;
				player.countCards('h')<=2;
			},
			ai:{
				threaten:0.8,
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
	}
		},
       "XSqudou":{
	enable:'phaseUse',
	filter:function(event,player){
		return game.countPlayer(function(current){
			return current!=player;
		})>1;
	},
	selectCard:function (){
        var player=_status.event.player;
		if(player.getStat().skill.XSqudou) {var num=player.getStat().skill.XSqudou+1;}
		else {var num=1;}
		return num;
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
		if(player.getStat().skill.XSqudou!=1) {
			targets[1].useCard({name:'juedou'},'nowuxie',targets[0],'noai').animate=false;
		}
		else {
			targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
		}
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
		threaten:1.6,
	}
		},
       "XSshicheng":{
	enable:"phaseUse",
	usable:1,
	filter:function (event,player){
		if(!game.hasPlayer(function(current){
			return current.hasSkill('XSshicheng_mark');
		})) return false;
		return true;
	},
	filterTarget:function (card,player,target){
		if(target==player) return false;
		if(ui.selected.targets.length==1){
			return true;
		}else{
			return target.hasSkill('XSshicheng_mark');
		}
	},
	targetprompt:["取消","获得"],
	selectTarget:2,
	multitarget:true,
	content:function (){
		targets[0].removeSkill('XSshicheng_mark');
		targets[0].removeSkill('XSshicheng_count');
		targets[1].addSkill('XSshicheng_mark');
		targets[1].addSkill('XSshicheng_count');
		targets[1].storage.XSshicheng_mark=player;
	},
	ai:{
		order:8,
		result:{
			target:function (player,target){
				if(ui.selected.targets.length==0){
					return get.attitude(player,target)<0?-999:-3;
				}
				else{
					return target.countCards('h');
				}
			},
		},
		expose:0.4,
		threaten:1.2,
	},
	group:["XSshicheng_start","XSshicheng_die"],
	subSkill:{
	   count:{
			sub:true,
            init:function (player){
                player.storage.XSshicheng_count=0;
            },
        },
        mark:{
            marktext:"试",
            init:function (player){
                player.markSkill('XSshicheng_mark');
            },
            intro:{
                content:function (content,player){
					var num=player.storage.XSshicheng_count;
					var temp=get.translation(player.storage.XSshicheng_mark);
					var str='你的摸牌、出牌、弃牌阶段开始时，可以交给'+temp+'1张手牌，当前已给出'+num+'张';
                    return str;
                },
            },
            sub:true,
			trigger:{
				player:["phaseDrawBegin","phaseUseBegin","phaseDiscardBegin"],
			},
			direct:true,
			content:function(){
				"step 0"
				player.chooseCard('交给'+get.translation(player.storage.XSshicheng_mark)+'一张牌',false).set('ai',function(card){
					var trigger=_status.event.getTrigger();
					var player=_status.event.player;
					var target1=player.storage.XSshicheng_mark;
					if(player.storage.XSshicheng_count<3&&get.attitude(player,target1)>0) {
						return 8-get.value(card);
					}
					return -1;
				});
				"step 1"
				if(result.bool){
					var target1=player.storage.XSshicheng_mark;
					target1.gain(result.cards[0]);
					player.$give(1,target1);
					player.storage.XSshicheng_count++;
				}
			},
        },
		start:{
			sub:true,
			trigger:{
				global:"gameDrawAfter",
			},
			direct:true,
			filter:function (){
				return game.players.length>1;
			},
			content:function (){
				'step 0'
				player.chooseTarget('选择【试诚】的目标',lib.translate.XSshicheng,true,function(card,player,target){
					return target!=player&&!target.hasSkill('XSshicheng_mark');
				}).set('ai',function(target){
					var att=get.attitude(_status.event.player,target);
					if(att==0) return Math.random();
					return att;
				});
				'step 1'
				if(result.bool){
					result.targets[0].addSkill('XSshicheng_mark');
					result.targets[0].addSkill('XSshicheng_count');
					result.targets[0].storage.XSshicheng_mark=player;
				}
			},
        },
		die:{
			sub:true,
			trigger:{
				global:"dieAfter",
			},
			direct:true,
			silent:true,
			popup:false,
			filter:function (event,player){
				return event.player.hasSkill('XSshicheng_mark');
			},
			content:function (){
				"step 0"
				player.logSkill('XSshicheng');
				player.chooseTarget('请选择新的【试诚】目标',true).set('ai',function(target){
					var player=_status.event.player;
					return 4+get.attitude(player,target);
				});
				"step 1"
				if(result.bool&&result.targets&&result.targets.length){
					var target=result.targets[0];
					player.line(target,'fire');
					target.addSkill('XSshicheng_mark');
					target.addSkill('XSshicheng_count');
					target.storage.XSshicheng_mark=player;
					game.delay();
				}
			},
        },
    },
		},
	   "XSshouye":{
	trigger:{
		global:"phaseAfter",
	},
	priority:99,
	filter:function(event,player){
		return event.player.storage.XSshicheng_count>=3&&event.player.hasSkill('XSshicheng_mark');
	},
	check:function (event,player){
		return get.attitude(player,event.player)>0;
	},
	content:function(){
		'step 0'
		trigger.player.draw(2);
		player.logSkill('XSshouye',trigger.player);
		event.translation=get.translation(trigger.player);
		var list=[];
		var list2=[];
		var players=game.players.concat(game.dead);
		for(var i=0;i<players.length;i++){
			list2.add(players[i].name);
			list2.add(players[i].name1);
			list2.add(players[i].name2);
		}
		for(var i in lib.characterPack['XSYG']){
			if(lib.character[i][4].contains('boss')) continue;
			if(lib.character[i][4].contains('minskin')) continue;
			if(list2.contains(i)) continue;
			list.push(i);
		}
		var name=list.randomGets(3);
		event.dialog=ui.create.dialog('令'+event.translation+'获得1名角色的技能',[[name[0]],'character'],[[name[1]],'character'],[[name[2]],'character']);
		if(!event.isMine()){
			event.dialog.style.display='none';
		}
		player.chooseButton().set('ai',function(button){
            return Math.random();
        });
		'step 1'
		if(result.bool){
			var chara=result.links[0];
			var skills=lib.character[chara][3];
			for(var i=0;i<skills.length;i++){
				if(!lib.skill[skills[i]].unique&&!lib.skill[skills[i]].zhuSkill) {
					trigger.player.addTempSkill(skills[i],{player:'phaseEnd'});
				}
			}
			trigger.player.storage.XSshicheng_count-=3;
			game.log(event.translation,'获得了'+get.translation(chara)+'的全部技能');
		}
	}
		},
       "XShuashi":{
	trigger:{
		global:"dying",
	},
	filter:function(event,player){
		return event.player.hp<=0&&!event.player.isTurnedOver()&&!player.hasSkill('XShuashi_temp');
	},
	check:function (event,player){
		return get.attitude(player,event.player)>0;
	},
	logTarget:'player',
	content:function(){
		trigger.player.recover();
		trigger.player.draw(2);
		trigger.player.turnOver(true);
		player.addTempSkill('XShuashi_temp',{player:'phaseBefore'});
	},
	subSkill:{
	   temp:{
        },
    },
		},
        "XSyonglue":{
 	enable:"phaseUse",
	filter:function (event,player){
		var num=99;
		if(!player.storage.XSjili&&player.storage.XSyonglue.length==3) return false;
		if(player.storage.XSjili&&player.storage.XSyonglue.length==4) return false;
		if(player.storage.XSchuben) num=3;
		if(player.getStat().skill.XSyonglue>=num) return false;
        return player.countCards('e')>0;
    },
    filterTarget:function (card,player,target){
        return player!=target;
    },
	init:function (player){
		player.storage.XSyonglue=[];
	},
	selectTarget:1,
	content:function(){
		"step 0"
        var next=player.chooseButton();
        next.set('createDialog',['选择1张装备牌',player.getCards('e')]);
        next.set('ai',function(button){
            return get.buttonValue(button);
        });
        "step 1"
        if(result.bool){
            player.logSkill('XSyonglue',target);
			event.card=result.links[0];
			if(!player.storage.XSchuben) {
				player.discard(result.links[0]);
				event.goto(3);
			}
			else {
				player.chooseTarget('将'+get.translation(result.links[0])+'交给1名其他角色',function(card,player,target){
					return player!=target;
				}).ai=function(target){
					var event=_status.event;
					var att=get.attitude(_status.event.player,target);
					if(target.countCards('e',{subtype:get.subtype(event.card)})) return att-6;
					return att;
				}
			}
        }
		else event.finish();
		"step 2"
		if(result.bool){
			var target1=result.targets[0];
			player.give(event.card,target1);
		}
		else {
			player.discard(event.card);
		}
		"step 3"
		var list=['sha','guohe','qijia'];
		if(player.storage.XSjili) {list.push('shunshou');}
		for(var i=0;i<list.length;i++) {
			if(player.storage.XSyonglue.contains(list[i])) {list.splice(i--,1);}
		}
		player.chooseControl(list).set('ai',function(){
			var eff=get.effect(target,{name:'sha'},player,player);
			var temp='sha';
			for(var i=0;i<list.length;i++) {
				if(get.effect(target,{name:list[i]},player,player)>eff) {
					eff=get.effect(target,{name:list[i]},player,player);
					temp=list[i];
				}
			}
			return temp;
		}).set('prompt','选择对'+get.translation(target)+'使用1张无距离、次数限制的牌');
		"step 4"
		if(result.control){
			player.storage.XSyonglue.push(result.control);
			player.useCard({name:result.control},target,false);
        }
	},
	ai:{
		order:5,
		expose:0.4,
        threaten:1.5,
		result:{
			target:function(player,target){
				var att=get.attitude(player,target);
				if(att>0&&target.countCards('j')&&!player.storage.XSyonglue.contains('guohe')&&!player.storage.XSyonglue.contains('shunshou')) return 2;
				return -2;
			},
		},
	},
	group:["XSyonglue_clear"],
	subSkill:{
        clear:{
			sub:true,
			trigger:{
				player:"phaseBefore",
			},
			filter:function (event,player){
				return player.storage.XSyonglue!=[];
			},
			direct:true,
			silent:true,
			content:function(){
				player.storage.XSyonglue=[];
			},
        },
    },
		},
		"XSchuben":{
 	derivation:['XSjili'],
	trigger:{global:'dieAfter'},
	skillAnimation:true,
	animationColor:'water',
	unique:true,
	juexingji:true,
	forced:true,
	filter:function(event,player){
		return !player.storage.XSchuben&&player.isAlive();
	},
	content:function(){
		player.awakenSkill('XSchuben');
		player.storage.XSchuben=true;
		player.loseMaxHp();
		player.addSkill('XSjili');
	},
		},
        "XSjili":{
 	derivation:['XSxiongao'],
	trigger:{global:'dieBegin'},
	skillAnimation:true,
	animationColor:'metal',
	unique:true,
	juexingji:true,
	forced:true,
	filter:function(event,player){
		return !player.storage.XSjili&&player.isAlive();
	},
	content:function(){
		player.awakenSkill('XSjili');
		player.storage.XSjili=true;
		player.loseMaxHp();
		player.addSkill('XSxiongao');
	},
		},
		"XSxiongao":{
	audio:2,
	trigger:{player:'equipEnd'},
	forced:true,
	content:function(){
		player.gain(get.cardPile(function(card){
			return get.type(card,'trick')=='trick';
		}),'gain2');
	},
	ai:{
		effect:{
			target:function(card,player,target,current){
				if(get.type(card)=='equip') return [1,3];
			}
		},
		threaten:1.2,
	},
	group:["XSxiongao_lose"],
	subSkill:{
        lose:{
			sub:true,
			trigger:{player:'loseEnd'},
			direct:true,
			filter:function(event,player){
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='e') return true;
				}
				return false;
			},
			content:function(){
				for(var i=0;i<trigger.cards.length;i++){
					if(trigger.cards[i].original=='e') {
						player.gain(get.cardPile(function(card){
							return get.type(card,'basic')=='basic';
						}),'gain2');
					}
				}
			},
			ai:{
				noe:true,
				reverseEquip:true,
			}
        },
    },
		},
         "XSfubi":{
    trigger:{
        global:"gameDrawAfter",
    },
    forced:true,
    filter:function (){
		return true;
    },
    content:function (){
        'step 0'
        player.chooseTarget('选择【辅弼】的目标',lib.translate.XSfubi,true,function(card,player,target){
            return target!=player&&!target.hasSkill('XSfubimark');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.storage.XSfubi=target;
            target.addSkill('XSfubimark');
			target.storage.XSfubimark=player;
        }
    },
	group:["XSfubi_give"],
    subSkill:{
        give:{
			trigger:{
				global:"damageEnd",
			},
			filter:function (event,player){
				if(!player.storage.XSfubi) return false;
				if(event.source!=player.storage.XSfubi) return false;
				return event.card&&event.card.name=='sha'&&event.notLink()&&event.num>0;
			},
			frequent:true,
			content:function(){
				"step 0"
				event.cards=get.cards(2);
				event.translation1=get.translation(player.storage.XSfubi);
				"step 1"
				if(event.cards.length>1){
					player.chooseCardButton('将牌分配给你或'+event.translation1,true,event.cards,[1,event.cards.length]).set('ai',function(button){
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
					var translation1=get.translation(player.storage.XSfubi);
					player.chooseTarget('将任意牌交给你或'+event.translation1,true,function(card,player,target){
						return target==player||target==player.storage.XSfubi;
					}).set('ai',function(target){
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
        },
    },
		},
		 "XSfubimark":{
    marktext:"辅",
    intro:{
        content:"当你使用杀造成伤害后，$可以展示牌堆顶2张牌并任意分配给你或$。",
    },
	init:function (player){
		player.markSkill('XSfubimark');
	},
	charlotte:true,
	onremove:true,
		},
         "XSkuangzuo":{
	audio:2,
	trigger:{
		player:"phaseDrawAfter",
	},
	filter:function(event,player){
		return player.countCards('h')>player.hp;
	},
	check:function (event,player){
		var num=player.countCards('h')-player.hp;
		var check=game.hasPlayer(function(current){
			return get.attitude(player,current)>0&&current.isDamaged();
		});
		if(check||player.isDamaged()) return num>=2;
		return num==1;
	},
	content:function(){
		'step 0'
		var num=player.countCards('h')-player.hp;
		player.chooseCardTarget({
			filterCard:true,
			filterTarget:function(card,player,target){
				return target!=player;
			},
			selectCard:num,
			ai1:function(card){
				if(_status.event.du) return -get.value(card);
				return 8-get.value(card);
			},
			ai2:function(target){
				var att=get.attitude(_status.event.player,target);
				var nh2=target.countCards('h');
				var num=Math.sqrt(1+nh2);
				if(target.isDamaged()) return att;
				return att/num;
			},
			du:player.hasCard(function(card){
				return get.value(card)<0;
			}),
			prompt:'请选择要给出的卡牌'
		});
		'step 1'
		if(result.bool){
			event.target=result.targets[0];
			player.logSkill('XSkuangzuo',result.targets);
			player.give(result.cards,result.targets[0]);
			if(result.cards.length>=2) {
				player.recover();
				event.target.recover();
			}
			else event.finish();
		}
	},
		},
         "XSwoxuan":{
	enable:'phaseUse',
	usable:1,
	changeSeat:true,
	position:'he',
	filterCard:function(){
		if(ui.selected.targets.length==2) return false;
		return true;
	},
	selectCard:[0,Infinity],
	selectTarget:2,
	complexCard:true,
	complexSelect:true,
	check:function(card){
		return 6-get.value(card);
	},
	filterTarget:function(card,player,target){
		if(ui.selected.targets.length==0) return true;
		if(ui.selected.targets[0].next!=target&&ui.selected.targets[0].previous!=target) return false;
		return (Math.abs(ui.selected.targets[0].hp-target.hp)==
			ui.selected.cards.length);
	},
	multitarget:true,
	multiline:true,
	content:function(){
		game.swapSeat(targets[0],targets[1]);
	},
	ai:{
		order:5,
		threaten:1.2,
		expose:0.2,
		result:{
			target:function(player,target){
				if(ui.selected.targets.length==0){
					var att=get.attitude(player,target);
					return att;
				}
				else{
					var att1=get.attitude(player,target);
					var att2=get.attitude(player,ui.selected.targets[0]);
					if(ui.selected.targets[0]!=player) {
						if(att2<0) {
							if(ui.selected.targets[0].next==target) return att1;
							return -att1;
						}
						else {
							if(ui.selected.targets[0].previous==target) return -att1;
							return att1;
						}
					}
					else {
						if(target==player.previous&&att1>0) return att1;
						if(target==player.next&&att1<0) return -att1;
						return 0;
					}
				}
			}
		},
	}
		},
         "XShengxing1":{
	mark:true,
	marktext:"横",
	init:function (player){
		player.markSkill('XShengxing1');
	},
	intro:{
		content:function (storage){
			return '你使用牌无数量、距离限制且无法被响应';
		},
	},
	mod:{
		cardUsable:function(card,player){
			return Infinity;
		},
		targetInRange:function (card,player,target,now){
			return true;
		},
	},
	trigger:{
        player:"phaseUseEnd",
    },
    direct:true,
	filter:function (event,player){
		return player.getStat('damage');
    },
    content:function (){
		var num=Math.min(5,player.getStat('damage'));
		var equlist=['equip1','equip2','equip3','equip4','equip5'];
		equlist.sort(lib.sort.random);
		var list=equlist.splice(0,num);
		if(list.length) {
			for(var i=0;i<list.length;i++) {
				player.disableEquip(list[i]);
			}
		}
		if(num>=3) {
			player.damage();
			player.discard(player.getCards('h'));
		}
    },
	group:["XShengxing1_nores"],
    subSkill:{
        nores:{
			sub:true,
			trigger:{
				player:"useCard",
			},
			silent:true,
			filter:function (event,player){
				return true;
			},
			content:function(){
				trigger.nowuxie=true;
				trigger.directHit.addArray(game.players);
			},
			forced:true,
			popup:false,
        },
    },
		},
         "XShengxing":{
	audio:2,
	unique:true,
	enable:'phaseUse',
	mark:true,
	skillAnimation:true,
	animationColor:'gray',
	limited:true,
	init:function(player){
		player.storage.XShengxing=false;
	},
	filter:function(event,player){
		if(player.storage.XShengxing) return false;
		return true;
	},
	content:function(){
		player.awakenSkill('XShengxing');
		player.storage.XShengxing=true;
		var num=player.maxHp-player.countCards('h');
		player.draw(num);
		player.addTempSkill('XShengxing1');
	},
	ai:{
		order:13,
		result:{
            player:function (player){
				var num=player.maxHp-player.countCards('h');
				if(player.maxHp>=6) {
					if(num>=4||player.countCards('h','sha')>=3) return 2;
				}
				return -0.5;
            },
		},
	},
	intro:{
		content:'limited'
	},
		},
         "XSyuxue":{
	trigger:{player:"damageBefore"},
	filter:function(event,player){
		return player.countCards('h')>0;
	},
	check:function (event,player){
		if(player.countCards('h','tao')||player.countCards('h','jiu')) return false;
		if(player.countCards('h')==1||player.countCards('h')==3) return true;
		if(event.num>=player.hp&&!player.countCards('h','tao')&&!player.countCards('h','jiu')) return true;
		if(player.maxHp>=7&&player.storage.XShengxing==false) return true;
		return false;
	},
	content:function(){
		"step 0"
		var cards=player.getCards('h');
		var num=cards.length;
		player.discard(cards);
		if(num>=3) {
			player.maxHp++;
			player.recover();
		}
		"step 1"
		trigger.cancel();
	},
	ai:{
		threaten:0.8,
	}
		},
         "XSaozhan":{
	derivation:['XSyuxue','XSxianzhen','XSzhulu','XSpozhu'],
	trigger:{
		player:"damageEnd",
	},
	filter:function (event,player){
		return event.num>0&&player.countCards('h')>0;
	},
	forced:true,
	content:function (){
		"step 0"
        player.chooseCard('选择1张手牌弃置，并获得对应技能：♥，浴血；♦，陷阵；♠，逐虏；♣，破竹').ai=function(card){
			if(player.hp<2&&get.suit(card)=='heart') {return 12-get.value(card);}
			if(player.hp>3&&get.suit(card)=='diamond') {return 12-get.value(card);}
			if(player.countCards('h','sha')>1&&get.suit(card)=='club') {return 12-get.value(card);}
			return 8-get.value(card);
        }
        "step 1"
        if(result.bool){
			var translation=get.translation(result.cards[0]);
			var suit=get.suit(result.cards[0]);
			switch(suit){
				case 'heart':player.addTempSkill('XSyuxue',{player:'phaseEnd'});break;
				case 'spade':player.addTempSkill('XSzhulu',{player:'phaseEnd'});break;
				case 'diamond':player.addTempSkill('XSxianzhen',{player:'phaseEnd'});break;
				case 'club':player.addTempSkill('XSpozhu',{player:'phaseEnd'});break;
			}
			player.discard(result.cards);
			game.log(player,'弃置了',translation);
			player.maxHp++;
			player.update();
        }
        else{
			event.finish();
        }
	},
	ai:{
		maixie:true,
		"maixie_hp":true,
		effect:{
			target:function (card,player,target){
				if(get.tag(card,'damage')) {
					if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
					if(!target.hasFriend()) return;
					if(!target.countCards('h')) return;
					if(target.hp>=4) return [1,2];
					if(target.hp==3) return [1,1.5];
					return;
				}
			},
		},
	},
		},
         "XSzhucheng":{
    trigger:{
        player:"phaseBefore",
    },
	forced:true,
    content:function (){
		var num=player.storage.disableEquip.length-1;
		if(num!=0) {
			player.chooseToDiscard(num,'h',true);
		}
		player.storage.XSzhucheng=false;
    },
	filter:function (event,player){
        return player.storage.XSzhucheng==true;
    },
	group:["XSzhucheng_draw"],
    subSkill:{
        draw:{
			trigger:{
				player:"phaseEnd",
			},
			frequent:true,
			filter:function (event,player){
				return player.storage.disableEquip.length>0;
			},
			content:function (){
				var num=player.storage.disableEquip.length;
				player.storage.XSzhucheng=true;
				player.draw(num);
			},
            sub:true,
        },
    },
		},
          "XSjihu":{
	audio:2,
	enable:"phaseUse",
	filter:function(event,player){
		var num=player.storage.XSjihu;
		if(player.getStat().skill.XSjihu>=num) return false;
		return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length<5;
	},
    filterTarget:function (card,player,target){
        return player!=target;
    },
	selectTarget:1,
	content:function(){
		'step 0'
		var list=[];
		for(var i=1;i<6;i++){
			if(player.isDisabled(i)) continue;
			list.push('equip'+i);
		}
		if(!list.length) event.finish();
		else{
			event.list=list;
			var next=player.chooseControl(list);
			next.prompt='请选择废除1个装备栏';
			next.ai=function(){
				if(list.contains('equip2')) return 'equip2';
				if(list.contains('equip3')) return 'equip3';
				if(list.contains('equip5')) return 'equip5';
				if(list.contains('equip4')) return 'equip4';
				return 'equip1';
			};
		}
		'step 1'
		if(result.control){
			player.disableEquip(result.control);
			player.logSkill('XSjihu',target);
			player.useCard({name:'sha'},target,false);
		}
		else event.finish();
	},
	ai:{
		order:1,
		result:{
			target:function (player,target){
				var eff=get.effect(target,{name:'sha'},player,target);
				if(player.storage.disableEquip.length>=4) return 0;
				return eff;
            },
		},
	},
	group:["XSjihu_begin"],
    subSkill:{
        begin:{
			sub:true,
			init:function (player){
				player.storage.XSjihu=0;
			},
			trigger:{
				player:["phaseBegin"],
			},
			forced:true,
			content:function (){
				player.storage.XSjihu+=1;
			},
        },
    },
            },
           "XSdashe":{
    mark:true,
	marktext:"赦",
    unique:true,
	limited:true,
    skillAnimation:true,
    animationStr:"大赦",
    animationColor:"wood",
	trigger:{player:"useCard",},
	priority:5,
	filter:function(event,player){
		if(player.storage.XSjiezhong_count==0||player.storage.XSyinxian==0) return false;
		if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
		if(player.storage.XSdashe) return false;
		return true;
	},
	init:function(player){
		player.storage.XSdashe=false;
	},
	check:function (event,player){
		var num1=game.countPlayer(function(current){
			if(current!=player){
				return get.attitude(player,current)>0;
			}
		});
		var num2=game.countPlayer(function(current){
			if(current!=player){
				return get.attitude(player,current)<=0;
			}
		});
		return player.storage.XSyinxian>=num1-1&&player.storage.XSjiezhong_count>=num2-1;
	},
	content:function(){
		'step 0'
        var goon=false;
        var info=get.info(trigger.card);
        if(trigger.targets&&!info.multitarget){
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                    goon=true;break;
                }
            }
        }
        if(goon){
			var num1=player.storage.XSyinxian;
            player.chooseTarget('是否额外指定至多'+num1+'名其他角色角色成为'+get.translation(trigger.card)+'的目标？',[1,num1],function(card,player,target){
                var trigger=_status.event.getTrigger();
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
            }).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
            });
        }
        else{
            if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
                event.goto(3);
            }
        }
        'step 1'
        if(result.bool){
            if(!event.isMine()) game.delayx();
            event.target=result.targets;
        }
        else{
            event.finish();
        }
        'step 2'
        if(event.target){
			player.awakenSkill('XSdashe');
			player.storage.XSdashe=true;
            player.logSkill('XSdashe',event.target);
            game.log(event.target,'额外成为了'+get.translation(trigger.card)+'的目标');
            trigger.targets.addArray(event.target);
			game.delay();
        }
        event.finish();
        'step 3'
		var num2=player.storage.XSjiezhong_count;
        player.chooseTarget('是否取消至多'+num2+'名角色成为'+get.translation(trigger.card)+'的目标？',[1,num2],function(card,player,target){
            return _status.event.getTrigger().targets.contains(target);
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            return -get.effect(target,trigger.card,trigger.player,_status.event.player);
        });
        'step 4'
        if(result.bool){
            event.targets=result.targets;
            if(event.isMine()){
                player.logSkill('XSdashe',event.targets);
                event.finish();
            }
            for(var i=0;i<result.targets.length;i++){
                trigger.targets.remove(result.targets[i]);
            }
            game.delay();
        }
        else{
            event.finish();
        }
        'step 5'
		player.awakenSkill('XSdashe');
		player.storage.XSdashe=true;
        player.logSkill('XSdashe',event.targets);
		game.delay();
	},
	intro:{
		content:'limited'
	}
            },
           "XSjiezhong":{
	trigger:{
		global:"phaseBegin",
	},
	filter:function (event,player){
		return event.player!=player&&event.player.isAlive();
	},
	check:function (event,player){
		return get.attitude(player,event.player)<0;
	},
	logTarget:'player',
	content:function (){
		"step 0"
		var list=[];
		if(!player.countCards('h',{type:'trick'})) {list.push('trick');}
		if(!player.countCards('h',{type:'basic'})) {list.push('basic');}
		if(!player.countCards('h',{type:'delay'})) {list.push('delay');}
		if(!player.countCards('h',{type:'equip'})) {list.push('equip');}
		player.storage.XSjiezhong=list;
		"step 1"
		player.line(trigger.player,'green');
		trigger.player.addTempSkill('XSjiezhong_un','phaseUseEnd');
		trigger.player.addTempSkill('XSjiezhong_mark','phaseUseEnd');
		trigger.player.storage.XSjiezhong_mark=player;
	},
	ai:{
		threaten:1.4,
		expose:0.2,
	},
	group:["XSjiezhong_count"],
	subSkill:{
		un:{
			sub:true,
			trigger:{
				player:"useCardAfter",
			},
			onremove:function (player,skill){
				delete player.storage.XSjiezhong_un;
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				var type1=get.type(event.cards[0]);
				if(player.storage.XSjiezhong_un&&player.storage.XSjiezhong_un.contains(type1)) {
					return false;
				}
				if(!player.storage.XSjiezhong_mark.storage.XSjiezhong.contains(type1)) {
					return false;
				}
				return true;
			},
			content:function (){
				var type1=get.type(trigger.cards[0]);
				if(!player.storage.XSjiezhong_un) {
					player.storage.XSjiezhong_un=[];
					player.storage.XSjiezhong_un.push(type1);
				}
				else {
					player.storage.XSjiezhong_un.push(type1);
				}
				if(player.storage.XSjiezhong_un.length==1) {
					player.storage.XSjiezhong_mark.draw();
					player.storage.XSjiezhong_mark.storage.XSjiezhong_count++;
				}
				if(player.storage.XSjiezhong_un.length==2) {
					player.loseHp();
				}
				if(player.storage.XSjiezhong_un.length==3) {
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
				}
			},
		},
		mark:{
			sub:true,
            marktext:"戒",
            init:function (player){
                player.markSkill('XSjiezhong_mark');
            },
			intro:{
				content:"当你使用第1种$没有的类型的牌时令其摸2张牌，第2种时你失去1点体力，第3种时你立即结束出牌阶段并翻面。",
			},
        },
		count:{
			sub:true,
            init:function (player){
                player.storage.XSjiezhong_count=0;
            },
        },
	},
            },
           "XSyinxian":{
    enable:"phaseUse",
    filter:function (event,player){
        return player.countCards('h')>0;
    },
    filterCard:true,
    selectCard:1,
	position:"h",
    filterTarget:function (card,player,target){
        return player!=target&&!target.hasSkill('XSyinxian_temp');
    },
	check:function (card){
        return 8-ai.get.value(card);
    },
	init:function (player){
        player.storage.XSyinxian=0;
    },
    content:function (){
        "step 0"
        event.target1=targets[0];
		event.card1=cards[0];
		var translate=get.translation(event.card1);
		player.logSkill('XSyinxian',event.target1);
		event.target1.chooseControlList(
		['获得'+get.translation(player)+'弃置的'+translate+'牌',
		'从牌堆中随机获得1张与'+translate+'同类型的牌'],
		true).set('ai',function(event,player){
			if(ai.get.value(event.card1)>5) return 0;
			return 1;
		});
		"step 1"
        if(result.index==0){
			event.target1.gain(event.card1);
			event.target1.$gain2(event.card1);
        }else{
			var type=get.type(event.card1);
			var card=get.cardPile(function(card){
				return get.type(card)==type;
			});
			if(card){
				event.target1.gain(card,'gain2','log');
			}
        }
		"step 2"
		event.target1.addTempSkill('XSyinxian_temp');
		player.storage.XSyinxian++;
    },
    ai:{
        order:2,
		result:{
            target:function (player,target){
				if(player.needsToDiscard()) return 3;
				if(target.countCards('h')<player.countCards('h')) return 1;
				return 0;
            },
        },
        expose:0.2,
    },
   subSkill:{
		temp:{
        },
    },
            },
            "XSnvjie":{
    trigger:{
        player:"damageEnd",
    },
    filter:function (event,player){
        return player.isAlive()&&event.source;;
    },
    check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
    logTarget:"source",
    content:function (){
		"step 0"
        event.num=trigger.num;
		"step 1"
		if(!trigger.source.countCards('h')) {
			trigger.source.damage(player);
			event.goto(4);
		}
		else {
			var card1=trigger.source.getCards('h').randomGet();
			player.showCards(card1);
			player.gain(card1);
			trigger.source.$give(1,player);
			event.card=card1;
		}
		"step 2"
		if(get.type(event.card)=='trick'){
			if(lib.filter.cardEnabled(event.card,target)) {
				var next=player.chooseToUse();
				next.filterCard=function(card){
					return card==event.card;
				};
				next.prompt='是否使用'+get.translation(event.card)+'？';
			}
			event.goto(4);
		}
		if(get.type(event.card)=='equip'){
			player.recover();
			event.goto(4);
		}
		if(get.type(event.card)=='delay'){
			trigger.source.turnOver(true);
			event.goto(4);
		}
		else {
			if(get.type(event.card)=='basic') {
				player.chooseTarget('是否将'+get.translation(event.card)+'交给1名其他角色?',function(card,player,target){
					var trigger=_status.event.getTrigger();
					return player!=target&&trigger.source!=target;
				}).ai=function(target){
					var player=_status.event.player;
					return get.attitude(player,target);
				}
			}
		}
        "step 3"
		if(result.bool) {
			result.targets[0].gain(event.card);
            player.$give(1,result.targets[0]);
		}
		else {
			player.gain(event.card);
		}
		"step 4"
		event.num--;
        if(event.num>0){
            player.chooseBool(get.prompt2('XSnvjie'));
        }
        else event.finish();
		"step 5"
        if(result.bool){
            player.logSkill('XSnvjie',trigger.source);
            event.goto(1);
        }
		else event.finish();
    },
    ai:{
        "maixie_defend":true,
        expose:0.4,
    },
            },
	"XSmujun":{
	priority:10,
	trigger:{
		global:["shaBefore"],
	},
	filter:function (event,player){
		if(player.isAlive()&&get.distance(event.player,player,'attack')<=1&&!player.hasSkill('XSmujun_temp')) {
			return event.player!=player&&event.targets.contains(player)==false;
		}
		return false;
	},
	check:function (event,player){
		if(get.attitude(player,event.targets[0])>0) {
			if(get.effect(player,{name:'sha'},event.player,player)>=0) return true;
			if(event.targets[0].hp<=2&&player.hp>1) return true;
		}
		return false;
	},
	content:function (){
		"step 0"
		trigger.player.line(player,'green');
		trigger.targets.remove(trigger.target);
		trigger.targets.push(player);
		trigger.target=player;
		player.storage.XSmujun=trigger.card;
		player.addTempSkill('XSmujun_temp',{player:'phaseBefore'});
	},
	ai:{
        expose:0.2,
    },
	group:["XSmujun_miss","XSmujun_clear"],
    subSkill:{
		miss:{
			trigger:{
				target:"shaMiss",
			},
			forced:true,
			filter:function (event,player){
                return player.storage.XSmujun!=[]&&event.card==player.storage.XSmujun;
            },
			content:function (){
				var num=player.maxHp-player.countCards('h');
				player.draw(num);
			},
			sub:true,
		},
		clear:{
			trigger:{
				target:"shaAfter",
			},
			forced:true,
			popup:false,
			silent:true,
			filter:function (event,player){
                return player.storage.XSmujun!=[];
            },
			content:function (){
				player.storage.XSmujun!=[];
			},
			sub:true,
		},
		temp:{
			sub:true,
        },
    },
            },
            "XSfeizhao":{
    trigger:{
        player:"phaseEnd",
    },
    forced:true,
    content:function (){
		"step 0"
		player.chooseTarget(get.prompt2('XSfeizhao'),function(card,player,target){
			return player!=target;
		}).ai=function(target){
			var player=_status.event.player;
			return get.attitude(player,target);
		};
		"step 1"
		if(result.bool) {
			event.target1=result.targets[0];
			if(player.countCards('h','sha')) {
				player.chooseCard('是否交给'+get.translation(event.target1)+'1张杀?',1,function(card){
					return card.name=='sha';
				}).set('ai',function(card){
					var player=_status.event.player;
					if(player.needsToDiscard()) return 1;
					return -1;
				});
			}
			else event.goto(3);
		}
		else event.finish();
		"step 2"
		if(result.bool){
			event.target1.gain(result.cards[0]);
			player.$give(1,event.target1);
		}
		"step 3"
		player.chooseBool('是否将武将牌翻面？').set('ai',function(){
			return true;
		});
        "step 4"
		if(result.bool){
			player.turnOver(true);
			event.target1.addSkill('XSfeizhao_1');
			event.target1.storage.XSfeizhao_1=player;
        }
		else {
			event.target1.addSkill('XSfeizhao_2');
			event.target1.storage.XSfeizhao_2=player;
		}
    },
	ai:{
        threaten:1.1,
    },
	group:["XSfeizhao_remove"],
	subSkill:{
		remove:{
			sub:true,
            trigger:{
                player:["phaseZhunbeiBegin","dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XSfeizhao_1')){
                        game.players[i].removeSkill('XSfeizhao_1');
                    }
					if(game.players[i].hasSkill('XSfeizhao_2')){
                        game.players[i].removeSkill('XSfeizhao_2');
                    }
                }
            },
        },
		1:{
			sub:true,
			marktext:"诏",
			intro:{
				content:"你的杀无距离限制；你的杀造成伤害后，$摸伤害数值的牌",
			},
			init:function (player){
				player.markSkill('XSfeizhao_1');
			},
			mod:{
				targetInRange:function (card){
					if(card.name=='sha') return true;
				},
			},
			trigger:{
				source:"damageEnd",
			},
			priority:2,
			filter:function (event,player){
				return event.card&&event.card.name=='sha'&&event.notLink();
			},
			forced:true,
			content:function (){
				if(player.storage.XSfeizhao_1) player.storage.XSfeizhao_1.draw(trigger.num);
			},
		},
		2:{
			sub:true,
			marktext:"诏",
			intro:{
				content:"你的杀无距离限制；你的杀首次造成伤害后，$摸伤害数值的牌",
			},
			init:function (player){
				player.markSkill('XSfeizhao_1');
			},
			mod:{
				targetInRange:function (card){
					if(card.name=='sha') return true;
				},
			},
			trigger:{
				source:"damageEnd",
			},
			priority:2,
			filter:function (event,player){
				return event.card&&event.card.name=='sha'&&event.notLink()&&player.storage.XSfeizhao_2;
			},
			forced:true,
			content:function (){
				player.storage.XSfeizhao_2.draw(trigger.num);
				delete player.storage.XSfeizhao_2;
			},
		},
	},
            },
            "XSzhigu":{
	trigger:{
		global:"useCard",
	},
	priority:-5,
	filter:function (event,player){
        if(event.card.name!='sha') return false;
        if(_status.currentPhase!=event.player) return false;
        return player.countCards('h')>0;
    },
	direct:true,
	content:function (){
        "step 0"
        event.usesha=false;
		var translation1=get.translation(trigger.card);
		var translation2=get.translation(trigger.player);
        var next=player.chooseToDiscard(1,'h','是否弃置1张手牌，根据花色令'+translation2+'的'+translation1+'：♥︎，伤害+1；♠︎，可以额外指定1个目标；♦︎，需两张闪响应；♣︎，不计入使用次数。',function(card,player){
            return true;
        });
		var att=get.attitude(_status.event.player,trigger.player);
		var pl=trigger.player;
		next.ai=function(card){
			if(att>0) {
				if(get.type(card)=='club'){
					if(pl.getStat().card.sha==1&&pl.hasSha()) return 4-get.value(card);
				}
				if(get.type(card)=='spade'){
					var eff=game.hasPlayer(function(current){
						return get.effect(current,trigger.card,pl,pl)>0&&pl.canUse(trigger.card,current)&&!trigger.targets.contains(current);
					});
					if(eff) return 6-get.value(card);
				}
				if(get.type(card)=='heart'){
					return 5-get.value(card);
				}
				else return 7-get.value(card);
			}
			return -1;
		};
        "step 1"
        if(result.bool){
			var suit=get.suit(result.cards[0]);
            player.logSkill('XSzhigu',trigger.player);
            if(suit=='club'){
                if(_status.currentPhase==trigger.player&&trigger.player.getStat().card.sha>0){
                    trigger.player.getStat().card.sha--;
                }
				event.finish();
            }
			if(suit=='heart'){
                trigger.player.addTempSkill('XSzhigu_damage','shaAfter');
				event.finish();
            }
			if(suit=='diamond'){
                trigger.player.addTempSkill('XSzhigu_shan','shaAfter');
				event.finish();
            }
            if(suit=='spade'){
                event.usesha=true;
            }
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.usesha==true){
            trigger.player.chooseTarget('是否为'+get.translation(trigger.card)+'额外指定1个目标?',function(card,player,target){
				var trigger=_status.event.getTrigger();
                return !trigger.targets.contains(target)&&trigger.player.canUse(trigger.card,target);
            }).set('ai',function(target){
				var trigger=_status.event.getTrigger();
                var pla=trigger.player;
                return get.effect(target,trigger.card,pla,pla);
            });
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.bool){
            if(!event.isMine()&&!_status.connectMode) game.delayx();
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 4"
        trigger.player.line(event.target,'green');
        trigger.targets.push(event.target);
    },
	subSkill:{
		damage:{
			trigger:{
				source:"damageBegin",
			},
			priority:99,
			filter:function (event){
				return event.card&&event.card.name=='sha'&&event.notLink();
			},
			forced:true,
			content:function (){
				trigger.num++;
			},
			sub:true,
		},
		shan:{
			trigger:{
				player:"shaBegin",
			},
			forced:true,
			filter:function (event,player){
				return !event.directHit;
			},
			priority:-1,
			content:function (){
				if(typeof trigger.shanRequired=='number'){
					trigger.shanRequired++;
				}
				else{
					trigger.shanRequired=2;
				}
			},
			sub:true,
		},
	},
            },
            "XSshenjian":{
                mod:{
                    targetInRange:function (card){
            if(card.name=='sha') return true;
        },
                },
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player&&event.notLink();
    },
                content:function (){
        if(!trigger.player.hasSkill('XSshenjian_mark')) {
            trigger.player.addSkill('XSshenjian_mark');
        }
        trigger.player.storage.XSshenjian_mark+=trigger.num;
        if(trigger.player.storage.XSshenjian_mark>3) {
            var num=trigger.player.storage.XSshenjian_mark-3;
            player.draw(num);
            trigger.player.storage.XSshenjian_mark=3;
        }
        trigger.player.syncStorage('XSshenjian_mark');
    },
                ai:{
                    threaten:1.2,
                },
                subSkill:{
                    mark:{
                        marktext:"箭",
                        init:function (player){
                player.storage.XSshenjian_mark=0;
                player.markSkill('XSshenjian_mark');
                player.syncStorage('XSshenjian_mark');
            },
                        intro:{
                            content:function (storage){
                    return '当前值：<span class="bluetext">'+storage+'</span>/3';
                },
                        },
                        sub:true,
                    },
                },
            },
            "XSweizhen":{
                direct:true,
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return !event.directHit&&event.target.storage.XSshenjian_mark>=1;
    },
                priority:-1,
                content:function (){
        if(typeof trigger.shanRequired=='number'){
            trigger.shanRequired++;
        }
        else{
            trigger.shanRequired=2;
        }
    },
                sub:true,
                group:["XSweizhen_jian2","XSweizhen_jian3"],
                subSkill:{
                    "jian2":{
                        locked:true,
                        trigger:{
                            player:"shaBegin",
                        },
                        direct:true,
                        priority:-10,
                        filter:function (event){
                return event.target.countCards('he')>0&&event.target.storage.XSshenjian_mark>=2;
            },
                        content:function (){
                player.discardPlayerCard(trigger.target,'he',true);
            },
                        sub:true,
                    },
                    "jian3":{
                        trigger:{
                            source:"damageBegin",
                        },
                        direct:true,
                        filter:function (event){
                return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.storage.XSshenjian_mark>=3;
            },
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                },
            },
            "XSjiqu":{
                enable:"chooseToUse",
                usable:1,
                filterCard:function (card,player){
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                mod:{
                    targetInRange:function (card){
        if(_status.event.skill=='XSjiqu') return true;
        },
                },
                viewAsFilter:function (player){
        return player.countCards('he',{color:'red'});
    },
                prompt:"将一张红色牌当杀使用",
                check:function (card){
        return 6-get.value(card);
    },
                group:["XSjiqu_use","XSjiqu_usefirst"],
                subSkill:{
                    use:{
                        trigger:{
                            player:"phaseUseBefore",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.storage.XSjiqu_use=true;
            },
                        sub:true,
                    },
                    usefirst:{
                        mod:{
                            targetInRange:function (card,player,target,now){
                    if(player.storage.XSjiqu_use==true) return true;
                },
                        },
                        audio:2,
                        trigger:{
                            player:"useCardBegin",
                        },
                        filter:function (event,player){
                return player.storage.XSjiqu_use==true&&_status.currentPhase==player&&event.card.name=='sha';
            },
                        forced:true,
                        popup:false,
                        content:function (){
                delete player.storage.XSjiqu_use;
                player.addTempSkill('XSzhanjiang');
            },
                        sub:true,
                    },
                },
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
            "XSpoqiu":{
                audio:"ext:血色衣冠:1",
                priority:10,
                trigger:{
                    global:"dieBegin",
                },
                frequent:true,
                content:function (){
        player.draw(3);
    },
                ai:{
                    threaten:1.4,
                },
            },
            "XSfenglang":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
		return player.getStat('damage');
    },
                content:function (){
        var numx=player.getStat('damage');
        if(numx>4) {
            player.draw(4);
        }
        else {
            player.draw(numx);
        }
    },
                ai:{
                    threaten:1.1,
                },
            },
            "XSfaming":{
                mark:true,
                marktext:"匠",
                init:function (player){
        player.storage.XSfaming=2;
    },
                intro:{
                    content:function (storage){
            return '当前值：<span class="bluetext">'+storage+'</span>/8';
        },
                },
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        if(typeof player.storage.XSfaming=='boolean'&&player.storage.XSfaming==true)
            return false;
        if(player.storage.XSfaming>=8)
            return false;
        return true;
    },
                content:function (){
        player.storage.XSfaming+=1;
        if(player.storage.XSfaming>8)
            player.storage.XSfaming=8;
        player.syncStorage('XSfaming');
    },
                group:["XSfaming_equ"],
                subSkill:{
                    equ:{
                        enable:"phaseUse",
                        filter:function (event,player){
                return player.storage.XSfaming>3;
            },
                        content:function (){
                var card=get.cardPile(function(card){
                    return get.type(card)=='equip';
                });
                if(card){
                    player.gain(card,'gain2','log');
                }
                player.storage.XSfaming -=4;
                player.syncStorage('XSfaming');
            },
                        ai:{
                            order:4,
                            result:{
                                player:2,
                            },
                        },
                        sub:true,
                    },
                },
            },
            "XStiandao":{
	init:function (player){
        player.storage.XStiandao=false;
        player.unmarkSkill("XStiandao_yin");
        player.markSkill("XStiandao_yang");
    },
	"prompt2":function (event,player){
        if(player.storage.XSgangrou==true){
			return '出牌阶段限1次，你可以令1名角色直到你下个准备阶段免受雷属性以外的伤害';
        }
        else if(player.storage.XSgangrou==false){
			return '令1名角色直到你下个准备阶段受到火伤害+1，受到雷伤害时弃置2张牌';
        }
    },
	enable:"phaseUse",
	usable:1,
	audio:2,
	position:"h",
    filterTarget:true,
	check:function (card){
        return 10-ai.get.value(card);
    },
	filter:function(event,player){
		return player.countCards('h')>0;
	},
	selectTarget:1,
	content:function(){
		event.target1=targets[0];
		if(player.storage.XStiandao==true){
			player.storage.XStiandao=false;
			player.unmarkSkill("XStiandao_yin");
			player.markSkill("XStiandao_yang");
			event.target1.addSkill('XStiandao_mark1');
		}
		else{
			player.storage.XStiandao=true;
			player.unmarkSkill("XStiandao_yang");
			player.markSkill("XStiandao_yin");
			event.target1.addSkill('XStiandao_mark2');
		};
		player.addSkill('XStiandao_mark3');
	},
	ai:{
		order:5,
		expose:0.4,
        threaten:1.8,
		result:{
			target:function(player){
				if(player.storage.XStiandao==false) return -4;
				return 4;
			},
		},
	},
	group:["XStiandao_remove"],
    subSkill:{
		remove:{
            trigger:{
                player:["phaseBefore","dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XStiandao_mark1')){
                        game.players[i].removeSkill('XStiandao_mark1');
                    }
					if(game.players[i].hasSkill('XStiandao_mark2')){
                        game.players[i].removeSkill('XStiandao_mark2');
                    }
					if(player.hasSkill('XStiandao_mark3')){
                        player.removeSkill('XStiandao_mark3');
                    }
                }
            },
        },
		yang:{
			marktext:"阳",
			intro:{
				content:function(storage,player,skill){
					return '阳：出牌阶段限1次，你可以令1名角色直到你下个准备阶段受到火伤害+1，受到雷伤害时弃置2张牌';
				},
			},
			sub:true,
		},
		yin:{
			marktext:"阴",
			intro:{
				content:function(storage,player,skill){
					return '阴：出牌阶段限1次，你可以令1名角色直到你下个准备阶段免受雷属性以外的伤害';
				},
			},

			sub:true,
		},
    },
            },
            "XSyingxu":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                content:function (){
        'step 0'
        player.viewCards('盈虚',target.getCards('h'));
        var list=[];
        if(player.countCards('h',{suit:'spade'})&&target.countCards('h',{suit:'spade'})) list.push('spade');
        if(player.countCards('h',{suit:'heart'})&&target.countCards('h',{suit:'heart'})) list.push('heart');
        if(player.countCards('h',{suit:'club'})&&target.countCards('h',{suit:'club'})) list.push('club');
        if(player.countCards('h',{suit:'diamond'})&&target.countCards('h',{suit:'diamond'})) list.push('diamond');
        list.push('cancel2');
        if(list.length) {
            player.chooseControl(list,function(){
                return Math.floor(Math.random()*list.length);
            }).set('prompt','选择弃置一种花色的手牌');
        }
        else event.finish();
        "step 1"
        player.popup(get.translation(result.control));
        game.log(player,'选择了'+get.translation(result.control));
        player.storage.XSyingxu=result.control;
        if(result.control=='cancel2') event.finish();
        "step 2"
        var num1=player.countCards('h',{suit:player.storage.XSyingxu});
        var num2=target.countCards('h',{suit:player.storage.XSyingxu});
        player.discard(player.getCards('h',{suit:player.storage.XSyingxu}));
        target.discard(target.getCards('h',{suit:player.storage.XSyingxu}));
        player.storage.XSyingxu=[];
        if(num1==num2) {
            player.recover();
            target.recover();
        }
        else {
            if(num1>num2) {
                player.getStat().skill.XStiandao--;
            }
            else player.addTempSkill('XSyingxu_temp');
        }
    },
                ai:{
                    order:3,
                    result:{
                        target:function (target,player){
                return -1;
            },
                    },
                },
            },
            "XSfengshen":{
                priority:99,
                trigger:{
                    player:"dying",
                },
                direct:true,
                filter:function (event,player){
        return event.player.hp<=0;
    },
                content:function (){
		"step 0"
		player.judge(function(card){
			var check1=get.suit(card)=='heart';
			var check2=get.suit(card)=='spade';
			if(check1||check2) return 3;
			return -3;
		});
		"step 1"
		if(result.bool==true){
			if(get.suit(result.card)=='heart') {
				player.recover();
				event.finish();
			}
			else {
				var target=player.getEnemies().randomGet();
				game.delay(0.5);
				player.line(target);
				target.damage(3,'thunder','nosource');
				event.finish();
			}
		}
    },
                group:["XSfengshen_give"],
                subSkill:{
                    give:{
                        trigger:{
                            player:"dieBegin",
                        },
						frequent:true,
                        content:function (){
                "step 0"
                player.chooseTarget(get.prompt('XSfengshen'),'选择1名其他角色获得你的手牌和技能：封神',function(card,player,target){
                    return player!=target;
                }).ai=function(target){
                    var player=_status.event.player;
                    return get.attitude(player,target);
                };
                "step 1"
                if(result.bool){
                    var cards=player.getCards('h');
                    var target=result.targets[0];
                    player.$give(cards,target);
                    target.gain(cards);
                    target.addSkill('XSfengshen');
                    player.logSkill('XSfengshen',target);
                }
                else event.finish();
            },
                        sub:true,
                    },
                },
            },
            "XSjiqiao":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:["phaseBefore","equipAfter","loseAfter"],
                },
                forced:true,
                popup:false,
                derivation:["XSjiqiao1","XSjiqiao2","XSjiqiao3","XSjiqiao4"],
                content:function (){
        player.removeAdditionalSkill('XSjiqiao');
        var list=[];
        if(player.getEquip(1)){
            list.push('XSjiqiao1');
        }
        if(player.getEquip(2)){
            list.push('XSjiqiao2');
        }
        if(player.getEquip(4)){
            list.push('XSjiqiao3');
        }
        if(player.getEquip(3)){
            list.push('XSjiqiao4');
        }
        if(list.length){
            player.addAdditionalSkill('XSjiqiao',list);
        }
    },
                ai:{
                    threaten:1.2,
                },
            },
            "XSjiqiao1":{
				sub:true,
                trigger:{
                    source:"damageEnd",
                },
                priority:2,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                check:function (event,player){
        if(player.getEquip(1)) {
            return player.countCards('h')<player.maxHp;
        }
        return false;
    },
                content:function (){
        player.discard(player.getEquip(1));
        player.draw(2);
    },
            },
            "XSjiqiao2":{
				sub:true,
                trigger:{
                    player:"damageEnd",
                },
                priority:1,
                filter:function (event){
        if(event.card&&(event.card.name=='sha')) return true;
        return false;
    },
                check:function (event,player){
        if(player.getEquip(2)) {
            return player.countCards('h')<player.maxHp;
        }
        return false;
    },
                content:function (){
        player.discard(player.getEquip(2));
        player.draw(2);
    },
            },
            "XSjiqiao3":{
				sub:true,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.notLink();
    },
                check:function (event,player){
        if(player.getEquip(4)) {
            return event.player!=player&&event.player.hp>1&&get.attitude(player,event.player)<0;
        }
        return false;
    },
                content:function (){
        player.discard(player.getEquip(4));
        trigger.num++;
    },
                ai:{
                    damageBonus:true,
                },
            },
            "XSjiqiao4":{
				sub:true,
                trigger:{
                    player:"damageBegin",
                },
                filter:true,
                check:function (event,player){
        if(player.getEquip(3)) {
            return player.hp<3;
        }
        return false;
    },
                content:function (){
        player.discard(player.getEquip(3));
        trigger.num--;
    },
            },
            "XSxuezhan":{
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
        return player.isDamaged();
    },
                check:function (event,player){
        if(player.needsToDiscard()) return true;
        return false;
    },
                content:function (){
        player.maxHp-=1;
        trigger.cancel();
    },
                group:["XSxuezhan_one"],
                subSkill:{
                    one:{
                        audio:2,
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                if(player.maxHp==1) return true;
                return false;
            },
                        forced:true,
                        content:function (){
                player.draw();
            },
                        sub:true,
                        ai:{
                            threaten:1.2,
                        },
                    },
                },
            },
            "XSxiaoyong":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                forced:true,
                popup:false,
                derivation:["XSjiqu","XSxianzhen","XSshenjiang"],
                content:function (){
        player.removeAdditionalSkill('XSxiaoyong');
        var list=[];
        if(player.hp<=3){
            if(trigger.num!=undefined&&trigger.num<0) player.logSkill('XSxiaoyong');
            list.push('XSjiqu');
        }
        if(player.hp<=2){
            list.push('XSxianzhen');
        }
        if(player.hp<=1){
            list.push('XSshenjiang');
        }
        if(list.length){
            player.addAdditionalSkill('XSxiaoyong',list);
        }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            "XSxianzhen":{
                trigger:{
                    target:"useCardToBefore",
                },
                direct:true,
                priority:-1,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
        'step 0'
        player.chooseControl('draw_card','使用杀','cancel2').set('prompt',get.prompt2('XSxianzhen'));
        'step 1'
        if(result.control&&result.control!='cancel2'){
            if(result.control=='draw_card'){
                player.draw();
            }
            else{
                player.useCard({name:'sha'},trigger.player,false);
            }
        }
    },
            },
            "XSmoshou":{
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h'&&_status.currentPhase!=player&&!player.hasSkill('XSmoshou_temp')) return true;
        }
        return false;
    },
                content:function (){
        player.addTempSkill('XSmoshou_temp',{player:'phaseBefore'});
        player.draw(2);
        player.link();
    },
    ai:{
        threaten:0.8,
		effect:{
			target:function(card){
				if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
			}
		},
		noh:true,
    },
                subSkill:{
                    temp:{
                        sub:true,
                    },
                },
            },
            "XSjianai":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"recoverAfter",
                },
                filter:function (event,player){
        return player.countCards('h',{color:'red'})>0;
    },
                check:function (event,player){
        return game.hasPlayer(function(current){
            return get.attitude(player,current)>0&&current.isDamaged();
        });
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('XSjianai'),'令一名其他角色回复1点体力',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            result.targets[0].recover();
            player.chooseToDiscard(1,'h',{color:'red'});
        }
    },
                ai:{
                    threaten:0.8,
                    expose:0.1,
                },
            },
            "XSfeigong":{
                trigger:{
                    global:"useCard",
                },
                priority:15,
                filter:function (event,player){
        return event.card.name=='sha'&&event.player!=player&&
        player.countCards('h',{color:'black'})>0&&event.targets.contains(player)==false;
    },
                direct:true,
                content:function (){
        "step 0"
        var effect=0;
        for(var i=0;i<trigger.targets.length;i++){
            effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
        }
        var str='弃置一张黑色手牌牌使此杀无效';
        var next=player.chooseToDiscard('h',{color:'black'},get.prompt('XSfeigong'));
        next.prompt2=str;
        next.ai=function(card){
            if(effect<0){
                return 9-get.value(card);
            }
            return -1;
        }
        next.autodelay=true;
        "step 1"
        if(result.bool){
            trigger.cancel();
        }
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            "XSyuchang":{
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){
        return get.type(card)=='equip'||get.type(card)=='trick';
    },
                position:"he",
                filterTarget:function (card,player,target){
        return target!=player;
    },
                check:function (card){
        return 8-get.value(card);
    },
                discard:false,
                prepare:"give",
                content:function (){
        target.gain(cards,player);
    },
                ai:{
                    order:8,
                    expose:0.2,
                    result:{
                        target:function (player,target){
                if(ui.selected.cards.length){
                    if(target.countCards('h')<player.countCards('h')) return -1;
                    return -0.5;
                }
                return -1.2;
            },
                    },
                },
                group:["XSyuchang_mark"],
                subSkill:{
                    mark:{
                        trigger:{
                            global:"gainBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.source==player&&event.player!=player){
                    for(var i=0;i<event.cards.length;i++){
                        if(get.type(event.cards[i])=='equip'||get.type(event.cards[i])=='trick') return true;
                    }
                }
                return false;
            },
                        content:function (){
                trigger.player.addSkill('XSyuchangdamage');
                if(!trigger.player.storage.XSyuchangdamage){
                    trigger.player.storage.XSyuchangdamage=[];
                }
                for(var i=0;i<trigger.cards.length;i++){
                    trigger.player.storage.XSyuchangdamage.add(trigger.cards[i]);
                }
                trigger.player.storage.XSyuchangdamage_lose=player;
            },
                        sub:true,
                    },
                },
            },
            "XScuidu":{
	trigger:{
		source:"damageEnd",
	},
	priority:2,
	filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
	},
	forced:true,
	content:function (){
		"step 0"
		if(player.countCards('h','du')) {
			player.chooseCard('h','交给'+get.translation(trigger.player)+'一张毒',{name:'du'},true).ai=function(card){
				return true;
			}
		}
		else {
			var card=get.cardPile('du');
			if(card){
				trigger.player.gain(card,'gain2');
				game.log(trigger.player,'从牌堆获得了',card);
			}
			else event.finish();
		}
		"step 1"
        if(result.bool){
            trigger.player.gain(result.cards[0]);
            player.$give(1,trigger.player);
        }
	},
	ai:{
		threaten:1.1,
	},
            },
            "XSshangcai":{
                enable:"phaseUse",
                usable:1,
                discard:false,
                prepare:"give2",
                filterCard:true,
                filter:function (event,player){
        return player.countCards('h');
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                check:function (card){
        return 7-get.value(card);
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
		event.target1=target;
        "step 1"
        event.target1.chooseControl().set('choiceList',['交给'+get.translation(player)+'两张牌','令'+get.translation(player)+'摸两张牌','令'+get.translation(player)+'恢复一点体力']).set('ai',function(event,player){
			var att=get.attitude(player,event.target1);
			if(att<=0&&event.target1.countCards('h')>1) return 0;
			if(att>0&&player.hp>1) return 1;
			if(att>0&&player.hp==1) return 2;
			if(att<=0&&!player.isDamaged()) return 2;
            return 1;
        });
         "step 2"
        if(result.index==1){
            player.draw(2);
            event.finish();
        }
        if(result.index==2){
            player.recover();
            event.finish();
        } else {
			event.goto(3);
		}
         "step 3"
        event.target1.chooseCard('请选择两张牌交给对方',2,'he',true).set('ai',function(card){
            return 6-get.value(card);
        });
        "step 4"
        if(result.bool){
            event.target1.$give(result.cards,player);
            player.gain(result.cards,event.target1);
            event.finish();
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                if(att>0) return 1.5;
                return -0.5;
            },
                    },
                    basic:{
                        order:9,
                    },
                },
            },
            "XSxiemei":{
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                filter:function (){
        if(game.players.length>1) {
            return game.hasPlayer(function(current){
                return current.sex=='female';
            });
        }
    },
                audio:"ext:血色衣冠:6",
                content:function (){
        'step 0'
        player.chooseTarget('选择【携美】的目标',lib.translate.XSxiemei,true,function(card,player,target){
            return target!=player&&!target.hasSkill('XSxiemeimark')&&target.sex=='female';
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            target.storage.XSxiemeimark=player;
            target.addSkill('XSxiemeimark');
        }
    },
            },
            "XSxiemeimark":{
                marktext:"携",
                intro:{
                    content:"当你的体力变化时，$摸一张牌。",
                },
                init:function (player){
        player.markSkill('XSxiemeimark');
    },
                nopop:true,
                trigger:{
                    player:["changeHp"],
                },
				charlotte:true,
                forced:true,
                popup:false,
                filter:function (event,player){
        return event.num!=0;
    },
                content:function (){
        var target=player.storage.XSxiemeimark;
        target.draw();
        game.delay();
    },
                onremove:true,
                group:["XSxiemeimark_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"dieAfter",
                        },
                        silent:true,
                        filter:function (event,player){
                return event.player==player.storage.XSxiemeimark;
            },
                        content:function (){
                player.removeSkill('XSxiemeimark');
            },
                        forced:true,
                        popup:false,
                        sub:true,
                    },
                },
            },
            "XSzhouyin":{
                enable:"phaseUse",
                mark:true,
                marktext:"隐",
                unique:true,
                limited:true,
                skillAnimation:true,
                animationStr:"舟隐",
                animationColor:"water",
                init:function (player){
        player.storage.XSzhouyin=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
        if(!player.isDamaged()) return false;
        if(!player.countCards('h')) return false;
        return !player.storage.XSzhouyin;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.line(target);
        var cards=player.getCards('h');
        target.gain(cards,player);
        player.awakenSkill('XSzhouyin');
        player.storage.XSzhouyin=true;
        player.maxHp+=1;
        player.recover(2);
        player.addTempSkill('XSzhouyin_mark',{player:'phaseBefore'});
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function (player){
            var num=player.maxHp-player.hp;
            if(player.storage.XSzhouyin) return false;
            if(num<2) return false;
        },
                    result:{
                        player:function (player){
                var num=player.maxHp-player.hp;
                if(player.hp==1) return 10;
                if(num>=2&&player.countCards('he')<=1) return 10;
                return 0;
            },
                        target:3,
                    },
                },
            },
            "XSzhouyin_mark":{
                trigger:{
                    player:"damageBegin",
                },
                mark:true,
                marktext:"隐",
                forced:true,
                content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                intro:{
                    content:"免受所有伤害",
                },
                ai:{
                    nofire:function (player){
            return true;
        },
                    nothunder:function (player){
            return true;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')==0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')==0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
            },
            "XSweiya":{
    trigger:{
        player:"phaseEnd",
    },
    forced:true,
    content:function (){
        "step 0"
		var suits=[];
		if(!player.countCards('h',{suit:'heart'})) suits.push('heart');
		if(!player.countCards('h',{suit:'diamond'})) suits.push('diamond');
		if(!player.countCards('h',{suit:'club'})) suits.push('club');
		if(!player.countCards('h',{suit:'spade'})) suits.push('spade');
		if(suits.length) {
			player.chooseControl(suits).set('prompt','选择一种花色');
		}
        else event.finish();
        "step 1"
        if(result.control){
            player.storage.XSweiya=result.control;
        }
        else{
            event.finish();
        }
    },
	group:["XSweiya_mopai","XSweiya_dis"],
    subSkill:{
        mopai:{
			sub:true,
			trigger:{
				player:"phaseDrawBegin",
			},
			forced:true,
			content:function (){
				trigger.num++;
			},
        },
		dis:{
			sub:true,
			trigger:{
				global:"phaseEnd",
			},
			forced:true,
			filter:function (event,player){
				if(player.storage.XSweiya) {
					var suit1=player.storage.XSweiya;
					if(event.player!=player&&event.player.countCards('h')>player.countCards('h')) {
						return event.player.countCards('h',{suit:suit1});
					}
					return false;
				}
				return false;
			},
			content:function (){
				var suit1=player.storage.XSweiya;
				var card1=trigger.player.getCards('h',{suit:suit1}).randomGet();
				trigger.player.discard(card1)
			},
			ai:{
				threaten:1.3,
			},
        },
    },
            },
            "XSzhulu":{
    trigger:{
        global:["damageEnd"],
    },
    filter:function (event,player){
		if(!player.countCards('h')) return false;
		if(!event.player.isAlive()) return false;
		if(event.card.name=='sha'||get.type(event.card)=='trick') {
			return event.source&&event.source!=player&&event.player&&event.player!=player&&get.distance(player,event.player,'attack')<=1;
		}
    },
    direct:true,
    check:function (event,player){
        var att=get.attitude(player,event.player);
        return att<=0;
    },
    content:function (){
		"step 0"
		var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
		player.chooseToDiscard('弃置1张非装备牌，视为对'+get.translation(trigger.player)+'使用一张杀',function(card){
			return get.type(card)!='equip';
		}).set('ai',function(card){
			if(_status.event.eff>0){
				return 10-get.value(card);
			}
			return 0;
		}).set('eff',eff);
		"step 1"
		if(result.bool==true){
			if(!trigger.player.hasSkill('baiban')) {
				trigger.player.addTempSkill('baiban');
			}
			player.useCard({name:'sha'},trigger.player,false);
		}
    },
    ai:{
        expose:0.3,
    },
            },
            "XSsishi":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"die",
                },
                direct:true,
                forceDie:true,
                skillAnimation:true,
                animationColor:"fire",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt2('XSsishi'),function(card,player,target){
            return player!=target;
        }).set('forceDie',true).set('ai',function(target){
            var num=get.attitude(_status.event.player,target);
            return -num;
        });
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('XSsishi',target);
            player.line(target,'green');
            target.turnOver(true);
            target.discard(target.getCards('e'));
        }
        else event.finish();
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 0.2;
            return 1.2;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(!target.hasFriend()) return;
                if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
            },
                    },
                },
            },
            "XSshoupai":{
                audio:"ext:血色衣冠:2",
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
            },
            "XSbianfa":{
                enable:"phaseUse",
                complexCard:true,
                multitarget:true,
                multiline:true,
                position:"he",
                selectCard:[1,Infinity],
                filterCard:function (card,player){
        if(ui.selected.cards.length){
            return get.suit(card)==get.suit(ui.selected.cards[0]);
        }
        var cards=player.getCards('he');
        for(var i=0;i<cards.length;i++){
            if(card!=cards[i]){
                if(get.suit(card)==get.suit(cards[i])) return true;
            }
        }
        return true;
    },
                selectTarget:function (card){
        if(ui.selected.targets.length>ui.selected.cards.length){
            game.uncheck('target');
        }
        return [1,ui.selected.cards.length];
    },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                filter:function (event,player){
        if(!player.storage.XSlixin) {
            if(player.getStat().skill.XSbianfa>0) return false;
        }
        else {
            if(player.getStat().skill.XSbianfa>1) return false;
        }
        return player.countCards('he');
    },
                check:function (card){
        return 8-ai.get.value(card);
    },
                prepare:function (cards,player,targets){
        player.line(targets);
    },
                content:function (){
        "step 0"
        player.draw(cards.length);
        game.log(player,'发动了变法');
        game.delay();
        event.targets=targets.slice(0);
        player.storage.XSbianfa=cards[0];
        event.targets.sort(lib.sort.seat);
        "step 1"
        if(event.targets.length){
            var target=event.targets.shift();
            var num=target.countCards('he',{suit:get.suit(player.storage.XSbianfa)});
            target.discard(target.getCards('he',{suit:get.suit(player.storage.XSbianfa)}));
            target.draw(num);
            event.redo();
        }
    },
                ai:{
                    order:8,
                    expose:0.5,
                    result:{
                        target:function (player,target){
               return get.damageEffect(target,player);
            },
                    },
                },
            },
            "XSyizhi":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:["loseEnd"],
                },
                direct:true,
                init:function (player){
        player.storage.XSyizhi=0;
    },
                filter:function (event,player){
        var card1=event.cards;
        if(card1&&card1.length>1) {
            for(var i=1;i<card1.length;i++){
                if(get.suit(card1[0])!=get.suit(card1[i])) return false;
            }
            return true;
        }
		return false;
    },
                content:function (){
        "step 0"
        if(trigger.cards.length>=4) {
            player.storage.XSyizhi++;
        }
        if(get.suit(trigger.cards[0])=='heart'){
            player.recover();
            event.finish();
        }
        if(get.suit(trigger.cards[0])=='spade'){
            player.loseHp();
            player.draw(3);
            event.finish();
        }
        if(get.suit(trigger.cards[0])=='club'){
            var card2=get.cardPile('wuxie');
            if(card2){
                trigger.player.gain(card2,'gain2');
                game.log(trigger.player,'从牌堆获得了',card2);
            }
            player.addTempSkill('XSshoupai');
            event.finish();
        }
        if(get.suit(trigger.cards[0])=='diamond'){
            event.goto(1);
        }
        "step 1"
        var check=true;
        player.chooseTarget(get.prompt("XSyizhi"),"视为对一名其他角色使用一张无距离、次数限制的杀",function(card,player,target){
            return target!=player;
        }).set('check',check).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 2"
        if(result.bool){
            player.logSkill('XSyizhi',result.targets);
            player.useCard({name:'sha'},result.targets[0],false);
            game.delay();
        }
    },
            },
            "XSweijia":{
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player&&event.player.countCards('h')>player.hp;
    },
                content:function (){
        player.gainPlayerCard('h',trigger.player);
    },
                ai:{
                    threaten:function (player,target){
            if(player.hp>=4) return 0.8;
            if(player.hp==3) return 1.1;
            if(player.hp==2) return 1.2;
            return 1.5;
        },
                },
            },
            "XSjianyi":{
                enable:"phaseUse",
                usable:1,
                init:function (player){
        player.storage.XSjianyi=[];
        player.storage.XSjianyi2=[];
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return true;
    },
                content:function (){
	   "step 0"
		player.chooseControl('失去体力','弃牌',function(event,player){
			if(player.hp>2) return '失去体力';
			if(player.countCards('he')>3) return '弃牌';
			return '弃牌';
		}).set('prompt','翦异：失去1点体力或弃置两张牌');
		"step 1"
		if(result.control=='失去体力'||player.countCards('he')<2){
			player.storage.XSjianyi='losehp';
			player.loseHp();
		}
		else{
			player.chooseToDiscard('he',2,true);
			player.storage.XSjianyi='discard';
		}
		"step 2"
		target.chooseControl('失去体力','弃牌',function(event,player){
			if(target.hp>2) return '失去体力';
			if(target.countCards('he')>3) return '弃牌';
			return '弃牌';
		}).set('prompt','翦异：失去1点体力或弃置两张牌');
		"step 3"
		if(result.control=='失去体力'||target.countCards('he')<2){
			player.storage.XSjianyi2='losehp';
			target.loseHp();
		}
		else{
			target.chooseToDiscard('he',2,true);
			player.storage.XSjianyi2='discard';
		}
		"step 4"
		if(player.storage.XSjianyi!=player.storage.XSjianyi2){
			player.useCard({name:'sha'},target,false);
			player.storage.XSjianyi=[];
			player.storage.XSjianyi2=[];
		}
    },
                ai:{
                    order:8,
		result:{
			player:function (player,target){
				if(player.hp>=target.hp) return -0.9;
				if(player.hp<=2) return -10;
				return -2;
			},
			target:function (player,target){
				if(target.hp<2) return -10;
				if(player.hp==2&&target.hp>=2) return -3;
				return -2;
			},
		},
                    threaten:1.3,
                },
            },
            "XSzhisheng":{
    audio:2,
    mod:{
        maxHandcard:function (player,num){
			var num1=player.countCards('j')+1;
            return num+num1;
        },
    },
	trigger:{
		player:["phaseJudgeBefore"],
	},
	direct:true,
	content:function(){
		trigger.cancel();
	},
	ai:{
        effect:{
            target:function (card,player,target,current){
                if(get.type(card)=='delay') return [0,3];
            },
        },
    },
            },
            "XSnosha":{
                mod:{
                    cardEnabled:function (card,player){
            if(card.name=='sha') return false;
        },
                    cardUsable:function (card,player){
            if(card.name=='sha') return false;
        },
                    cardRespondable:function (card,player){
            if(card.name=='sha') return false;
        },
                    cardSavable:function (card,player){
            if(card.name=='sha') return false;
        },
                },
            },
            "XSshibiao":{
 	trigger:{
		player:"compare",
		target:"compare",
	},
	filter:function (event,player){
		if(event.iwhile) return false;
		return true;
	},
	silent:true,
	content:function (){
		"step 0"
		player.draw();
		player.chooseControl('视为1','视为K').set('prompt','使拼点点数视为').ai=function(event){
			var trigger=_status.event.getTrigger();
			var player=_status.event.player;
			if(trigger.parent.name=='CSrenli') {
				if(!player.isDamaged()) return '视为1';
			}
			return '视为K';
		};
		"step 1"
		if(result.control=='视为1'){
			game.log(player,'拼点牌点数视为','#y1');
			if(player==trigger.player){
				trigger.num1=1;
			}
			else{
				trigger.num2=1;
			}
		}
		else{
			game.log(player,'拼点牌点数视为','#y13');
			if(player==trigger.player){
				trigger.num1=13;
			}
			else{
				trigger.num2=13;
			}
		}
	},
	forced:true,
	popup:false,
            },
            "XSrenli":{
    enable:"phaseUse",
    audio:2,
    filter:function (event,player){
		var num=player.countCards('j')+1;
		if(!player.countCards('h')) return false;
		if(player.getStat().skill.XSrenli>=num) return false;
		return true;
    },
    filterTarget:function (card,player,target){
        return player!=target&&!target.hasSkill('XSrenli_temp')&&target.countCards('h');
    },
    content:function (){
        "step 0"
        event.target1=target;
		player.chooseToCompare(event.target1);
		"step 1"
		if(result.bool){
			player.recover();
			event.target1.draw();
			event.target1.addTempSkill('XSrenli_temp');
		}
		else {
			event.target1.recover();
			player.draw();
			event.target1.addTempSkill('XSrenli_temp');
		}
    },
    ai:{
        order:4,
		result:{
			player:function (player){
				if(player.isDamaged()) return 2;
				return 0.5;
			},
            target:function (player,target){
				if(target.isDamaged()) return 2;
				return 0;
            },
        },
        expose:0.4,
        threaten:1.2,
    },
	subSkill:{
        temp:{
        },
    },
            },
            "XSdaozu":{
                trigger:{
                    player:"loseHpEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt2('XSdaozu'),[1,player.getDamagedHp()],function(card,player,target){
            return get.distance(player,target,'attack')<=1;
        },function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('XSdaozu',result.targets);
            event.num=0;
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        "step 2"
        if(num<event.targets.length){
            event.targets[event.num].loseHp();
            event.num++;
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
            "XSshangshan":{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.num>0) return true;
        return false;
    },
                content:function (){
        if(!trigger.nature) {
            player.addSkill('XSshangshan_pu');
        }
        if(trigger.nature=='fire') {
            player.addSkill('XSshangshan_huo');
        }
        if(trigger.nature=='thunder') {
            player.addSkill('XSshangshan_dian');
        }
    },
                group:["XSshangshan_remove","XSshangshan_count"],
                subSkill:{
                    remove:{
                        forced:true,
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        filter:function (event,player){
                if(player.hasSkill('XSshangshan_pu')&&player.hasSkill('XSshangshan_huo')&&player.hasSkill('XSshangshan_dian')) return true;
                return false;
            },
                        content:function (){
                player.removeSkill('XSshangshan_pu');
                player.removeSkill('XSshangshan_huo');
                player.removeSkill('XSshangshan_dian');
                player.draw(2);
            },
                        sub:true,
                    },
                    count:{
                        trigger:{
                            player:["damageEnd","loseHpEnd"],
                        },
                        forced:true,
                        priority:7,
                        init:function (player){
                player.storage.XSshangshan_count=0;
            },
                        filter:function (event){
                return event.num>0;
            },
                        content:function (){
                player.storage.XSshangshan_count+=trigger.num;
            },
                        sub:true,
                    },
                    pu:{
                        mark:true,
                        marktext:"普",
                        intro:{
                            content:"防止你受到的所有非属性伤害",
                        },
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        filter:function (event,player){
                if(!event.nature&&event.num>0) return true;
                return false;
            },
                        content:function (){
                trigger.cancel();
                player.draw(trigger.num);
            },
                        ai:{
                            maixie:true,
                            "maixie_hp":true,
                            nodamage:true,
                            effect:{
                                target:function (card,player,target){
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
                            if(target.countCards('h')<1) return [0,num*2];
                            if(target.countCards('h')<2) return [0,num*1.5];
                            if(target.countCards('h')<3) return [0,num*0.5];
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                    huo:{
                        mark:true,
                        marktext:"火",
                        intro:{
                            content:"防止你受到的所有火属性伤害",
                        },
                        trigger:{
                            player:"damageBefore",
                        },
                        filter:function (event,player){
                    if(event.nature=='fire'&&event.num>0) return true;
                    return false;
                },
                        forced:true,
                        content:function (){
                    trigger.cancel();
                    player.draw(trigger.num);
                },
                        ai:{
                            maixie:true,
                            "maixie_hp":true,
                            nofire:true,
                            effect:{
                                target:function (card,player,target){
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
                                if(target.countCards('h')<1) return [0,num*2];
                                if(target.countCards('h')<2) return [0,num*1.5];
                                if(target.countCards('h')<3) return [0,num*0.5];
                            }
                        },
                            },
                        },
                        sub:true,
                    },
                    dian:{
                        mark:true,
                        marktext:"雷",
                        intro:{
                            content:"防止你受到的所有雷属性伤害",
                        },
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        filter:function (event,player){
                if(event.nature=='thunder'&&event.num>0) return true;
                return false;
            },
                        content:function (){
                trigger.cancel();
                player.draw(trigger.num);
            },
                        ai:{
                            maixie:true,
                            "maixie_hp":true,
                            nothunder:true,
                            effect:{
                                target:function (card,player,target){
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
                            if(target.countCards('h')<1) return [0,num*2];
                            if(target.countCards('h')<2) return [0,num*1.5];
                            if(target.countCards('h')<3) return [0,num*0.5];
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "XShuahu":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                filterCard:true,
                check:function (card){
        return 7-get.value(card);
    },
                content:function (){
        player.viewCards('化胡',target.getCards('h'));
        var cards1=target.getCards('h','jiu');
        var cards2=target.getCards('h','du');
        var num=cards1.length+cards2.length;
        target.discard(cards1);
        target.discard(cards2);
        if(num!=0) {target.draw(num);}
    },
                ai:{
                    order:2,
                    result:{
                        target:function (player,target){
                if(player.needsToDiscard()) {
                    if(target.countCards('h')>=3) return -2;
                    if(target.countCards('h')<3) return -1.5;
                }
                else {
                    if(target.countCards('h')>=3) return -1;
                    if(target.countCards('h')<3) return -0.5;
                    return 0;
                }
            },
                    },
                },
            },
            "XSdingdu":{
                enable:"phaseUse",
                mark:true,
                unique:true,
                skillAnimation:true,
                animationStr:"定都",
                animationColor:"black",
                changeSeat:true,
                init:function (player){
        player.storage.XSdingdu=false;
    },
                filter:function (event,player){
        return player.isMaxHp();
    },
                filterTarget:function (card,player,target){
        return player!=target&&player.next!=target;
    },
                content:function (){
        player.awakenSkill('XSdingdu');
        player.storage.XSdingdu=true;
        game.swapSeat(player,target);
    },
                ai:{
                    order:5,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return -att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return -att-att2;
                return 0;
            },
                    },
                },
                intro:{
                    content:"limited",
                },
            },
            "XSmocu":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        if(get.distance(player,event.target,'attack')<1) return true;
        return false;
    },
                content:function (){
        trigger.directHit=true;
    },
                ai:{
                    threaten:1.1,
                },
                group:["XSmocu_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                return event.card&&event.card.name=='sha'&&event.notLink();
            },
                        forced:true,
                        content:function (){
				"step 0"
				player.judge(function(card){
					if(get.color(card)=='black') return 3;
					return -3;
				});
				"step 1"
				if(result.bool==true){
					trigger.num++;
					event.finish();
				}
				else {
					event.goto(2);
				}
				"step 2"
				var goon=(get.attitude(player,trigger.player)<0);
				var next=player.chooseToDiscard(get.prompt('XSmocu',trigger.player));
				next.set('filterCard',function(card){
					return get.color(card)=='black';
				});
				next.set('prompt2','弃置一张黑色手牌令伤害+1');
				next.set('ai',function(card){
					if(_status.event.goon){
						return 8-get.value(card);
					}
					return 0;
				});
				next.set('goon',goon);
				'step 3'
				if(result.bool){
					trigger.num++;
				}
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                },
            },
            "XSfeijiang":{
                mod:{
                    globalFrom:function (from,to,current){
            return current-1;
        },
                    globalTo:function (from,to,current){
            return current+1;
        },
                },
            },
            "XSyoudi":{
   priority:15,
    trigger:{
        global:["shaBefore"],
    },
    filter:function (event,player){
        return player.isAlive()&&player.countCards('h')>0&&event.player!=player&&event.targets.contains(player)==false;
    },
	logTarget:"player",
	check:function (event,player){
        if(get.attitude(player,event.targets[0])>0) {
			if(player.countCards('h','shan')>0&&player.hp<2) return true;
			if(player.hp>1) return true;
		}
		return false;
    },
    content:function (){
        "step 0"
        var next=player.chooseToDiscard('he',get.prompt2('XSyoudi',trigger.player));
        next.set('ai',function(card){
            return 8-get.value(card);
        });
        "step 1"
		if(result.bool){
			player.logSkill('XSyoudi',trigger.player);
			trigger.player.line(player,'green');
            trigger.targets.remove(trigger.target);
			trigger.targets.push(player);
			trigger.target=player;
        }
		else event.finish();
        "step 2"
		trigger.player.chooseToDiscard('弃置一张杀，否则受到'+get.translation(player)+'1点伤害',function(card){
			return card.name=='sha';
		});
		"step 3"
		if(!result.bool){
            trigger.player.damage(player);
        }
    },
	ai:{
		threaten:1.2,
	},
            },
            "XSlianque":{
                mark:true,
                marktext:"却",
                forced:true,
                priority:-10,
                trigger:{
                    target:"shaBegin",
                },
                intro:{
                    content:"mark",
                },
                init:function (player){
        player.storage.XSlianque=0;
    },
                content:function (){
        player.storage.XSlianque+=1;
    },
                group:["XSlianque_draw"],
                subSkill:{
                    draw:{
                        mod:{
                            maxHandcard:function (player,num){
                    return num+player.storage.XSlianque;
                },
                        },
                        trigger:{
                            player:"phaseBefore",
                        },
                        filter:function (event,player){
                if(player.storage.XSlianque!=0) return true;
                return false;
            },
                        check:function (event,player){
                if(player.hp>=3) return true;
                if(player.hp<3) {
                    if(player.storage.XSlianque>=3) return true;
                }
                return false;
            },
                        content:function (){
                var num=player.storage.XSlianque;
                var num1=Math.floor(num/3);
                player.draw(num);
                if(num1>0) {
                    player.recover(num1);
                }
                player.storage.XSlianque=0;
                player.syncStorage('XSlianque');
            },
                        sub:true,
                    },
                },
            },
            "XSmousheng":{
                mark:true,
                marktext:"谋",
                init:function (player){
        player.storage.XSmousheng=0;
    },
                intro:{
                    content:function (storage){
            return '当前值：<span class="bluetext">'+storage+'</span>/3';
        },
                },
                trigger:{
                    player:["phaseBegin"],
                },
                forced:true,
                filter:function (event,player){
        if(typeof player.storage.XSmousheng=='boolean'&&player.storage.XSmousheng==true)
            return false;
        if(player.storage.XSmousheng>=3)
            return false;
        return true;
    },
                content:function (){
        player.storage.XSmousheng+=1;
        if(player.storage.XSmousheng>3)
            player.storage.XSmousheng=3;
        player.syncStorage('XSmousheng');
    },
                group:["XSmousheng_trick"],
                subSkill:{
                    trick:{
                        enable:"phaseUse",
                        filter:function (event,player){
                return player.countCards('h',{type:'basic'})>0&&player.storage.XSmousheng>0;
            },
                        chooseButton:{
                            dialog:function (player){
                    var list=[];
                    for(var i=0;i<lib.inpile.length;i++){
                        if(get.type(lib.inpile[i])=='trick') list.push(['锦囊','',lib.inpile[i]]);
                    }
                    return ui.create.dialog(get.translation('XSmousheng'),[list,'vcard']);
                },
                            filter:function (button,player){
                    return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                },
                            check:function (button){
                    var player=_status.event.player;
                    var recover=0,lose=1,players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
                            return (button.link[2]=='juedou')?2:-1;
                        }
                        if(!players[i].isOut()){
                            if(players[i].hp<players[i].maxHp){
                                if(get.attitude(player,players[i])>0){
                                    if(players[i].hp<2){
                                        lose--;
                                        recover+=0.5;
                                    }
                                    lose--;
                                    recover++;
                                }
                                else if(get.attitude(player,players[i])<0){
                                    if(players[i].hp<2){
                                        lose++;
                                        recover-=0.5;
                                    }
                                    lose++;
                                    recover--;
                                }
                            }
                            else{
                                if(get.attitude(player,players[i])>0){
                                    lose--;
                                }
                                else if(get.attitude(player,players[i])<0){
                                    lose++;
                                }
                            }
                        }
                    }
                    if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
                    if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                    return (button.link[2]=='wuzhong')?1:-1;
                },
                            backup:function (links,player){
                    return {
                        filterCard:function (card){
                            return get.type(card)=='basic';
                        },
                        selectCard:1,
                        audio:2,
                        popname:true,
                        viewAs:{name:links[0][2]},
                        onuse:function(result,player){
                            player.storage.XSmousheng-=1;
                            player.syncStorage('XSmousheng');
                        },
                    }
                },
                            prompt:function (links,player){
                    return '将1张基本牌当作'+get.translation(links[0][2])+'使用';
                },
                        },
                        ai:{
                            order:1,
                            result:{
                                player:function (player){
                        var num=0;
                        var cards=player.getCards('h',{type:'basic'});
                        for(var i=0;i<cards.length;i++){
                            num+=Math.max(0,get.value(cards[i],player,'raw'));
                        }
                        num/=cards.length;
                        return 12-num;
                    },
                            },
                            threaten:1.6,
                        },
                        sub:true,
                    },
                },
            },
            "XSshensuan":{
                mod:{
                    wuxieRespondable:function (card,player,target,current){
            if(player!=current){
                return false;
            }
        },
                },
                trigger:{
                    target:"useCardToBefore",
                },
                direct:true,
                filter:function (event,player){
        return get.type(event.card)=='trick'&&event.player!=player;
    },
                content:function (){
        player.draw();
    },
            },
            "XSdushan":{
	trigger:{
		player:"useCardBefore",
	},
	usable:1,
	check:function (event,player){
		if(event.card.name=='nanman'||event.card.name=='wanjian'||event.card.name=='zengbin') return true;
    },
	filter:function (event,player){
		if(!event.parent.parent.name=='phaseUse') return false;
		if(!event.cards||event.cards.length!=1) return false;
		if(get.type(event.card)!='trick') return false;
        var info=get.info(event.card);
            if(game.hasPlayer(function(current){
                 return player.canUse(event.card,current);
             })){
                return true;
            }
        return false;
    },
	content:function (){
        "step 0"
		player.chooseTarget(get.prompt2('XSdushan'),function(card,player,target){
            return player!=target;
        }).ai=function(target){
			var player=_status.event.player;
			return get.attitude(player,target);
        }
        "step 1"
        if(result.bool){
            player.logSkill('XSdushan',result.targets[0]);
            result.targets[0].chooseUseTarget(trigger.card);
            game.delay(0.7);
			player.addTempSkill('XSdushan_def',{player:'phaseBefore'});
			trigger.cancel();
        }
        else{
            event.finish();
        }
    },
	subSkill:{
        def:{
			sub:true,
			forced:true,
			marktext:"善",
			intro:{
				content:"你首次受到锦囊牌的伤害时取消之",
			},
			init:function (player){
				player.markSkill('XSdushan_def');
			},
			trigger:{
				player:"damageBefore",
			},
			filter:function (event,player){
				return event.card&&get.type(event.card)=='trick';
			},
			content:function (){
				trigger.cancel();
				player.removeSkill('XSdushan_def');
			},
        },
    },
            },
            "XSguicai":{
    mod:{
        targetInRange:function (card,player,target,now){
            var type=get.type(card);
            if(type=='trick'||type=='delay') {
				if(target.hasSkill('XSguicai_distance')) return true;
			}
        },
    },
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player;
    },
    content:function (){
        target.addTempSkill('XSguicai_distance',{player:'phaseEnd'});
		target.storage.XSguicai_distance=player;
    },
    ai:{
        threaten:1.2,
        result:{
			player:1,
            target:function (player,target){
				var dis=get.distance(player,target);
				if(dis<=1) return -0.5;
				return -1;
            },
        },
        order:10,
        expose:0.4,
    },
	subSkill:{
		distance:{
			sub:true,
			marktext:"鬼",
			intro:{
				content:"$对你使用锦囊牌无距离限制",
			},
			init:function (player){
				player.markSkill('XSguicai_distance');
			},
			trigger:{
				player:"useCardAfter",
			},
			direct:true,
			filter:function (event,player){
				if(player.hasSkill('XSguicai_temp')) return false;
				if(event.targets.length){
					return get.type(event.cards[0])=='trick';
				}
				else return false;
			},
			content:function(){
				var target=player.storage.XSguicai_distance;
				player.addTempSkill('XSguicai_temp');
				target.gain(trigger.cards,'gain2');
			},
		},
		temp:{
		},
    },
            },
            "XSfangyuan":{
                trigger:{
                    player:"useCard",
                },
                direct:true,
                filter:function (event,player){
        var type=get.type(event.card);
        return type=='trick';
    },
                content:function (){
        'step 0'
        var goon=false;
        var info=get.info(trigger.card);
        if(trigger.targets&&!info.multitarget){
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                    goon=true;break;
                }
            }
        }
        if(goon){
            var num1=1+Math.floor((player.maxHp-player.hp)/2);
            player.chooseTarget('是否额外指定至多'+num1+'名其他角色角色成为'+get.translation(trigger.card)+'的目标？',[1,num1],function(card,player,target){
                var trigger=_status.event.getTrigger();
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
            }).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
            });
        }
        else{
            if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
                event.goto(3);
            }
        }
        'step 1'
        if(result.bool){
            if(!event.isMine()) game.delayx();
            event.target=result.targets;
        }
        else{
            event.finish();
        }
        'step 2'
        if(event.target){
            player.logSkill('XSfangyuan',event.target);
            game.log(event.target,'额外成为了'+get.translation(trigger.card)+'的目标');
            trigger.targets.addArray(event.target);
        }
        event.finish();
        'step 3'
        var num2=1+Math.floor((player.maxHp-player.hp)/2);
        player.chooseTarget('是否取消至多'+num2+'名角色成为'+get.translation(trigger.card)+'的目标？',[1,num2],function(card,player,target){
            return _status.event.getTrigger().targets.contains(target);
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            return -get.effect(target,trigger.card,trigger.player,_status.event.player);
        });
        'step 4'
        if(result.bool){
            event.targets=result.targets;
            if(event.isMine()){
                player.logSkill('XSfangyuan',event.targets);
                event.finish();
            }
            for(var i=0;i<result.targets.length;i++){
                trigger.targets.remove(result.targets[i]);
            }
            game.delay();
        }
        else{
            event.finish();
        }
        'step 5'
        player.logSkill('XSfangyuan',event.targets);
    },
            },
            "XSyinshi":{
                trigger:{
                    player:"phaseDiscardBefore",
                },
                check:function (event,player){
        if(player.needsToDiscard()&&player.isDamaged()) return true;
        return false;
    },
                content:function (){
        player.turnOver(true);
        trigger.cancel();
    },
                group:["XSyinshi_turn"],
                subSkill:{
                    turn:{
                        audio:2,
                        trigger:{
                            player:"damageEnd",
                        },
                        direct:true,
                        filter:function (event,player){
                if(player.isTurnedOver()) return true;
                return false;
            },
                        content:function (){
                "step 0"
                player.turnOver(false);
                player.chooseControl().set('choiceList',['回复1点体力','摸两张牌']).set('ai',function(player){
                    if(player.hp<2) return 0;
                    return 1;
                });
                 "step 1"
                if(result.index==0){
                    player.recover();
                    event.finish();
                }
                if(result.index==1){
                    player.draw(2);
                    event.finish();
                }
            },
                        ai:{
                            maixie:true,
                            "maixie_hp":true,
                            result:{
                                effect:{
                                    target:function (card,player,target){
                            if(target.isTurnedOver()&&get.tag(card,'damage')){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                if(!target.hasFriend()) return;
                                var num=1;
                                if(get.attitude(player,target)>0){
                                    if(player.needsToDiscard()){
                                        num=0.8;
                                    }
                                    else{
                                        num=0.5;
                                    }
                                }
                                if(player.hp>=4) return [1,num*2];
                                if(target.hp==3) return [1,num*1.5];
                                if(target.hp==2) return [1,num*0.5];
                            }
                        },
                                },
                                threaten:function (player,target){
                        if(player.isTurnedOver()) return 0.4;
                        return 1.1;
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "XSfusao":{
                enable:"phaseUse",
                usable:1,
	filterCard:function(card){
		return get.type(card)!='trick';
	},
                position:"he",
                viewAs:{
                    name:"wugu",
                },
                prompt:"将一张非锦囊牌当五谷丰登使用",
                check:function (card){
        return 7-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
			var bool=player.countCards('he',{type:'basic'})>0||player.countCards('he',{type:'equip'})>0||player.countCards('he',{type:'delay'})>0;
			return bool;
        },
                    threaten:0.7,
                    order:9,
                    wuxie:function (){
                        if(Math.random()<0.5) return 0;
                    },
                    basic:{
                        order:3,
                        useful:1,
                    },
                    result:{
                        target:function (player,target){
                            if(get.is.versus()){
                                if(target==player) return 1.5;
                                return 1;
                            }
                            if(player.hasUnknown(2)){
                                return 0;
                            }
                            return 2-2*get.distance(player,target,'absolute')/game.countPlayer();
                        },
                    },
                    tag:{
                        draw:1,
                        multitarget:1,
                    },
                },
            },
            "XStianwen":{
                trigger:{
                    global:["phaseZhunbeiBegin"],
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        var effect=0;
        if(player.hasSkill('XSchennian_temp')) effect+=10;
        if(trigger.player!=player&&get.attitude(player,trigger.player)>0) {
            if(trigger.player.countCards('j')>0) effect+=6;
        }
        player.chooseCard('h',get.prompt2('XStianwen',trigger.player)).set('ai',function(card){
            if(_status.event.effect>0){
                var val=get.value(card);
                if(val<0) return 10-val;
                return _status.event.effect-val;
            }
            return 0;
        }).set('effect',effect).set('logSkill',['XStianwen',trigger.player]);
        "step 1"
        if(result.bool&&result.cards){
            event.card=result.cards[0];
        }
        else{
            event.finish();
        }
        if(!event.isMine()) game.delayx();
        "step 2"
        if(event.card){
            player.logSkill('XStianwen',trigger.player);
            player.lose(result.cards,ui.special);
            game.broadcastAll(function(player){
                var cardx=ui.create.card();
                cardx.classList.add('infohidden');
                cardx.classList.add('infoflip');
                player.$throw(cardx,1000,'nobroadcast');
            },player);
        }
        "step 3"
        if(event.card){
            event.card.fix();
            ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
            game.updateRoundNumber();
        }
        'step 4'
        event.num=3;
        event.cards=get.cards(3);
        event.chosen=[];
        event.num1=0;
        event.num2=0;
        'step 5'
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
        player.chooseCardButton('天问：选择要移动的牌',event.cards).set('filterButton',function(button){
            return !_status.event.chosen.contains(button.link);
        }).set('chosen',event.chosen).set('ai',function(button){
            return button.link==_status.event.choice?1:0;
        }).set('choice',event.cards[choice]);
        event.pos=pos;
        'step 6'
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
            event.goto(8);
        }
        'step 7'
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
                event.goto(5);
            }
        }
        'step 8'
        while(event.cards.length){
            ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
            event.num1++;
        }
        var js=player.getCards('j');
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
        'step 9'
        if(player.hasSkill('XSchennian_temp')) {
            player.draw('bottom');
        }
    },
                ai:{
                    guanxing:true,
                    threaten:function (player,target){
            if(player.hasSkill('XSchennian_temp')) return 2;
            return 1.1;
        },
                },
            },
            "XSchennian":{
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                filter:function (event,player){
        return event.source!=undefined;
    },
                content:function (){
        var source=trigger.source
        if(!source.storage.XSchennian_mark){
            source.storage.XSchennian_mark=0;
        }
        source.storage.XSchennian_mark+=trigger.num;
        source.markSkill('XSchennian_mark');
    },
                group:["XSchennian_mark","XSchennian_die"],
                subSkill:{
                    temp:{
                        sub:true,
                    },
                    mark:{
                        marktext:"念",
                        intro:{
                            content:"mark",
                        },
                        sub:true,
                    },
                    die:{
                        skillAnimation:true,
                        trigger:{
                            player:"dying",
                        },
                        priority:10,
                        forced:true,
                        filter:function (event,player){
                return player.hp<=0;
            },
                        content:function (){
                if(!player.hasSkill('XSchennian_temp')){
                    player.addSkill('XSchennian_temp');
                    player.hp=Math.min(3,player.maxHp);
                    player.update();
                }
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i].storage.XSchennian_mark){
                        player.line(players[i],'fire');
                        game.delay(1);
                        var num=players[i].storage.XSchennian_mark;
                        if(players[i].countCards('he')>num) {
                            players[i].chooseToDiscard(num,'he',true);
                        }
                        else {
                            players[i].discard('he');
                            players[i].loseHp();
                        }
                        players[i].storage.XSchennian_mark=0;
                        players[i].unmarkSkill('XSchennian_mark');
                    }
                }
            },
                        ai:{
                            threaten:0.9,
                            effect:{
                                target:function (card,player,target){
                        if(target.maxHp==1) return;
                        var num=0;
                        for(var i=0;i<game.players.length;i++){
                            if(game.players[i].storage.XSchennian_mark&&get.attitude(target,game.players[i])<=-2) num+=game.players[i].storage.XSchennian_mark;
                        }
                        if(get.tag(card,'damage')){
                            if(target.hp==1) return [0,2*num];
                                return [1,0.5];
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "XSchuguan":{
                skillAnimation:true,
                animationColor:"wood",
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                forced:true,
                unique:true,
                juexingji:true,
                filter:function (event,player){
        return player.storage.XSshangshan_count>=player.maxHp&&!player.storage.XSchuguan;
    },
                content:function (){
        player.addSkill('XSshangshan_pu');
        player.addSkill('XSshangshan_huo');
        player.addSkill('XSshangshan_dian');
        player.addSkill('XShuahu');
        player.awakenSkill('XSchuguan');
        player.storage.XSchuguan=true;
    },
            },
            "XSrujian":{
                enable:"phaseUse",
                mark:true,
                unique:true,
                skillAnimation:true,
                animationStr:"入间",
                animationColor:"metal",
                init:function (player){
        player.storage.XSrujian=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
        return game.players.length>1&&!player.storage.XSrujian;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.awakenSkill('XSrujian');
        player.storage.XSrujian=true;
        player.storage.XSsijian=target;
        target.markSkill('XSsijian_mark');
        player.draw(2);
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function (player){
            if(player.storage.XSzhouyin) return false;
        },
                    result:{
                        player:function (player){
                if(player.isDamaged()) return 10;
                return 1;
            },
                        target:function (player,target){
                return -2;
            },
                    },
                },
            },
            "XSsijian":{
                trigger:{
                    player:["phaseEnd"],
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.countCards('h')>0&&player.storage.XSsijian;
    },
                content:function (){
		"step 0"
		var target=player.storage.XSsijian;
		if(target.hp>player.hp) {
			player.recover();
		}
		if(player.countCards('h')>target.countCards('h')) {
			player.chooseCard('交给'+get.translation(target)+'一张手牌',true).ai=function(card){
                return -get.value(card);
			}
		}
		"step 1"
		if(result.bool){
			player.give(result.cards,player.storage.XSsijian);
		}
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                var att=get.attitude(player,target.storage.XSsijian);
                if(att<0) return [1,-1];
                return [0.5,0.3];
            },
                    },
                },
                onremove:true,
                group:["XSsijian_die","XSsijian_remove"],
                subSkill:{
                    mark:{
                        marktext:"间",
                        intro:{
                            content:"mark",
                        },
                        sub:true,
                    },
                    die:{
                        skillAnimation:true,
                        trigger:{
                            player:"dieBegin",
                        },
                        priority:9,
                        forced:true,
						forceDie:true,
                        content:function (){
                "step 0"
                var target=player.storage.XSsijian;
                player.storage.XSsijian.removeSkill('XSsijian_mark');
                event.targets=game.filterPlayer();
                event.targets.remove(player);
                event.targets.remove(target);
                "step 1"
                if(event.targets.length){
                    event.current=event.targets.shift();
                    event.current.chooseControl('失去体力','弃牌',function(event,player){
                        if(get.attitude(player,target)>0&&player.hp>target.hp) return '失去体力';
                        if(!player.countCards('h')) return '失去体力';
                        return '弃牌';
                    }).set('prompt','失去1点体力或弃置1张手牌视为对目标使用1张杀');
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.control=='失去体力'){
                    event.current.loseHp();
                }
                else{
                    event.current.chooseToDiscard('h',1,true);
                    game.delay();
                    event.current.line(player.storage.XSsijian,'green');
                    event.current.useCard({name:'sha'},player.storage.XSsijian,'noai').animate=false;
                }
                event.goto(1);
            },
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            global:"dieAfter",
                        },
                        silent:true,
                        filter:function (event,player){
                return event.player==player.storage.XSsijian;
            },
                        content:function (){
                player.removeSkill('XSsijian');
            },
                        forced:true,
                        popup:false,
                        sub:true,
                    },
                },
            },
            "XShezong":{
                enable:"phaseUse",
                usable:1,
                multitarget:true,
                multiline:true,
                selectTarget:[1,Infinity],
                filterTarget:function (card,player,target){
        return !target.isMaxHandcard();
    },
                content:function (){
        if(targets.length) {
            for(var i=0;i<targets.length;i++){
                targets[i].link(true);
            }
            game.asyncDraw(targets);
        }
    },
                ai:{
                    order:8,
                    expose:0.1,
                    threaten:1.1,
                    result:{
                        target:function (player,target){
                if(target.isLinked()) return 1;
                return -0.5;
            },
                    },
                },
            },
            "XSlianheng":{
                enable:"phaseUse",
                usable:1,
                audio:"ext:血色衣冠:2",
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:1,
                position:"h",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                discard:false,
                check:function (card){
        return 10-ai.get.value(card);
    },
                content:function (){
        "step 0"
        event.target1=targets[0];
        event.target1.link(false);
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(players[i]!=event.target1&&players[i]!=player){
                break;
            }
        }
        if(i==players.length){
            event.finish();
        }
        "step 1"
        player.chooseTarget(true,'选择连横目标',function(card,player,target){
            return _status.event.target1.canUse({name:'juedou'},target)&&target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            var eff=get.effect(target,{name:'juedou'},_status.event.target1,player);
            return eff;
        }).set('target1',event.target1);
        "step 2"
        if(result.targets.length){
            event.target2=result.targets[0];

            event.target1.chooseControlList(
                ['令'+get.translation(player)+'摸2张牌。',
                '视为对'+get.translation(event.target2)+'使用决斗。'],
                true).set('ai',function(event,player){
                    if(get.attitude(event.target1,event.target2)>0) return 0;
                return 1;
            });
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.index==0){
            player.draw(2);
            event.finish();
        }else{
            event.target1.useCard({name:'juedou'},event.target2,'noai').animate=false;
            game.delay(0.5);
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(target.isLinked()) {
                    return 0.5;
                }
                else {
                    return -3;
                }
            },
                    },
                    expose:0.4,
                    threaten:1.4,
                },
            },
            "XSchennian_temp":{
                filterCard:true,
                popname:true,
            },
            "XSkuolun":{
                mod:{
                    targetInRange:function (card,player,target){
            if(target.hasSkill('XSkuolun_lose')){
                return true;
            }
        },
                    cardUsable:function (card,player,num){
            if(typeof num=='number'&&game.hasPlayer(function(current){
                return current.hasSkill('XSkuolun_lose');
            })) return num+100;
        },
                    playerEnabled:function (card,player,target){
            if(target.hasSkill('XSkuolun_win')) return false;
            if(game.hasPlayer(function(current){
                return current.hasSkill('XSkuolun_lose');
            })&&!target.hasSkill('XSkuolun_lose')){
                var num=player.getCardUsable(card)-100;
                if(num<=0) return false;
            }
        },
                },
                audio:"ext:血色衣冠:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player.canCompare(target);
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        'step 0'
        player.chooseToCompare(target);
        'step 1'
        if(result.bool){
            target.addTempSkill('XSkuolun_lose','phaseAfter');
        }
        else {
            target.addTempSkill('XSkuolun_win','phaseAfter');
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return 0;
                return -1;
            },
                    },
                    order:9,
                },
                subSkill:{
                    win:{
                        sub:true,
                    },
                    lose:{
                        sub:true,
                    },
                },
            },
            "XSxiongbian":{
                audio:"ext:血色衣冠:2",
	trigger:{
		player:['chooseToCompareAfter','compareMultipleAfter'],
		target:['chooseToCompareAfter','compareMultipleAfter']
	},
	filter:function(event,player){
		if(event.preserve) return false;
		if(player==event.player){
			if(event.card1.number>event.card2.number){
				return !get.owner(event.card1);
			}
		}
		else{
			if(event.card1.number<event.card2.number){
				return !get.owner(event.card2);
			}
		}
		return false;
	},
	forced:true,
	content:function(){
		player.gain(trigger.card1,'gain2');
		player.gain(trigger.card2,'gain2');
	},
            },
            "XSshoushang":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
                sub:true,
                ai:{
                    effect:{
                        player:function (card,player){
　　            if(card.name=='tao') return [1,3];
            },
                    },
                },
                group:["XSshoushang_mark","XSshoushang_remove"],
                subSkill:{
                    mark:{
                        marktext:"伤",
                        intro:{
                content:function (storage){
                    return '直到回复1点体力前，你无法使用杀，且首次回复体力时失去1点体力';
                },
                        },
                        sub:true,
                    },
                    remove:{
                        forced:true,
                        trigger:{
                            player:"recoverAfter",
                        },
                        content:function (){
                player.loseHp();
                player.unmarkSkill('XSshoushang_mark');
                player.removeSkill('XSshoushang');
            },
                        sub:true,
                    },
                },
            },
            "XSbugua":{
	trigger:{
		player:'phaseDrawBefore'
	},
	direct:true,
    content:function (){
		'step 0'
		player.chooseControl('heart2','diamond2','club2','spade2',function(){
            if(Math.random()<0.3) return 'club2';
            if(Math.random()<0.5&&Math.random()>=0.3) return 'spade2';
			if(Math.random()<0.7&&Math.random()>=0.5) return 'diamond2';
            return 'heart2'
        }).set('prompt','请选择不想要的花色');
		'step 1'
		if(result.control&&result.control.indexOf('2')!=-1){
			player.chooseControl('牌堆顶','牌堆底').ai=function(){
				var player=_status.event.player;
				var att=get.attitude(player,player.next);
				if(att>0) return '牌堆顶';
				return '牌堆底';
			};
			event.suit=result.control.slice(0,result.control.length-1);
        }
        else{
            event.finish();
        }
		'step 2'
		if(result.control=='牌堆顶'){
			var cards1=[];
			event.cards=get.cards(4);

			for(var i=0;i<event.cards.length;i++){
                if(get.suit(event.cards[i])!=event.suit) {
					cards1.push(event.cards[i]);
				}
            }
			event.cards=cards1;
		}
		else{
			if(result.control=='牌堆底') {
			    var list=[];
				for(var i=0;i<4;i++) {
					list.push(ui.cardPile.removeChild(ui.cardPile.lastChild));
				}
				var cards1=[];
				for(var i=0;i<list.length;i++){
					if(get.suit(list[i])!=event.suit) {
						cards1.push(list[i]);
					}
				}
				event.cards=cards1;
			}
			else event.finish();
		}
		"step 3"
		if(event.isMine()==false){
			event.dialog=ui.create.dialog('卜卦',event.cards);
			game.delay(1);
		}
        if(event.cards&&event.cards.length){
			player.gain(event.cards);
			trigger.cancel();
        }
		"step 4"
		if(event.dialog){
			event.dialog.close();
		}
    },
    ai:{
        threaten:1.1,
    },
            },
            "XSxiuli":{
                trigger:{
                    player:["phaseEnd"],
                },
                forced:true,
                filter:function (event,player){
        if(event.player.countUsed()>0) return true;
    },
                content:function (){
        'step 0'
        event.num=Math.min(5,trigger.player.countUsed()+1);
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
        player.chooseCardButton('修历：选择要移动的牌',event.cards).set('filterButton',function(button){
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
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
    },
                ai:{
                    guanxing:true,
                },
            },
            "XSguomu":{
                trigger:{
                    player:"phaseDiscardBefore",
                },
                init:function (player){
       player.storage.XSguomu=[];
    },
                priority:999,
                filter:function (event,player){
        return player.countCards('h');
    },
                check:function (event,player){
        return player.needsToDiscard();
    },
                content:function (){
    "step 0"
        player.chooseControl('heart','diamond','club','spade').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:case 5:return 'heart';
                case 1:case 4:return 'diamond';
                case 2:return 'club';
                case 3:return 'spade';
            }
        });
        "step 1"
        game.log(player,'选择了'+get.translation(result.control));
        event.choice=result.control;
        player.popup(event.choice);
        player.storage.XSguomu=event.choice;
        player.addSkill('XSguomu_keep');
        player.addTempSkill('XSguomu_discard',{player:'phaseUseBegin'});
    },
                subSkill:{
                    discard:{
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(player.storage.XSguomu&&get.suit(card)==player.storage.XSguomu) return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(player.storage.XSguomu&&get.suit(card)==player.storage.XSguomu) return false;
                },
                        },
                        sub:true,
                    },
                    keep:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.countCards('h',{suit:player.storage.XSguomu});
            },
                        content:function (){
                player.chooseToDiscard(1,'he',{suit:player.storage.XSguomu});
                player.storage.XSguomu=[];
                player.removeSkill('XSguomu_keep');
            },
                        sub:true,
                    },
                },
            },
            "XSshicai":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('XSshicai'),function(card,player,target){
            return target!=player;
        }).ai=function(target){
            var player=_status.event.player;
            if(get.attitude(player,target)>0)
            return 1;
            if(get.attitude(player,target)<1&&(target.isTurnedOver()||target.countCards('h')<1))
            return 0.1;
            if(get.attitude(player,target)<1&&target.countCards('h')>0&&target.countCards('j',{name:'lebu'})>0)
            return target.countCards('h')*0.8+target.getHandcardLimit()*0.7+2;
            return 1;
        };
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target);
            target.addSkill('XSshicai_mark');
        };
    },
                ai:{
                    order:10,
                    result:{
                        player:2,
                    },
                },
                group:["XSshicai_remove","XSshicai_clear"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                return player!=event.player&&event.player.hasSkill('XSshicai_mark')&&event.player.isAlive();
            },
                        content:function (){
                'step 0'
                if(trigger.player.countCards('h')>0){
                    trigger.player.chooseCard('he',2,'交给'+get.translation(player)+'2张牌',true).ai=function(card){
                        var trigger=_status.event.getTrigger();
                        if(get.attitude(trigger.player,player)>0){
                            return get.value(card);
                        }
                        else{
                            return -get.value(card);
                        }
                    }
                }
                "step 1"
                if(result.bool){
                    trigger.player.give(result.cards,player);
                    trigger.player.removeSkill('XSshicai_mark');
                }
                else {
                    trigger.player.removeSkill('XSshicai_mark');
                }
            },
                        sub:true,
                    },
							clear:{
			trigger:{
                player:["dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XSshicai_mark')){
                        game.players[i].removeSkill('XSshicai_mark');
                    }
                }
            },
        },
                },
            },
            "XSshicai_mark":{
                mark:true,
                marktext:"识",
                intro:{
                    name:"识才",
                    content:"mark",
                },
                mod:{
                    globalFrom:function (from,to,current){
            return current-1;
        },
                },
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current.hasSkill('XSshicai');
        });
    },
                content:function (){
        trigger.num++;
    },
                ai:{
                    nokeep:true,
                },
            },
            "XShouqin":{
                trigger:{
                    global:"loseEnd",
                },
                audio:"ext:血色衣冠:2",
                locked:true,
                logTarget:"player",
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                filter:function (event,player){
        if(event.player.countCards('h')>=2) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h'&&!event.player.hasSkill('XShouqin_temp')&&event.player.isAlive()) return true;
        }
        return false;
    },
                content:function (){
        trigger.player.addTempSkill('XShouqin_temp',{player:'phaseBefore'});
        trigger.player.draw();
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                    noh:true,
                },
                subSkill:{
                    temp:{
                        sub:true,
                    },
                },
            },
            "XSzhanshen":{
                audio:"ext:血色衣冠:1",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                content:function (){
        trigger.num++;
    },
                ai:{
                    damageBonus:true,
                },
                group:["XSzhanshen_shan"],
                subSkill:{
                    shan:{
                        forced:true,
                        trigger:{
                            player:"shaMiss",
                        },
                        content:function (){
                player.draw();
                if(!player.hasSkill('XSzhanjiang')) {
                    player.addTempSkill('XSzhanjiang');
                }
            },
                        sub:true,
                    },
                },
            },
            "XSziwu":{
                mark:true,
                marktext:"污",
                limited:true,
                skillAnimation:true,
                animationStr:"自污",
                animationColor:"gray",
                unique:true,
                enable:"phaseUse",
                init:function (player){
        player.storage.XSziwu=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
        return !player.storage.XSziwu;
    },
                content:function (){
        player.awakenSkill('XSziwu');
        player.storage.XSziwu=true;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player) {
                player.gainPlayerCard('he',game.players[i]);
            }
        }
        player.turnOver(true);
    },
                ai:{
					skillTagFilter:function (player){
						if(player.storage.XSziwu) return false;
					},
                    order:2,
                    result:{
                        player:function (player){
                if(player.hp==1) return 10;
                if(player.countCards('h')<2) return 1;
                return 0;
            },
                    },
                },
            },
            "XSfuqi":{
                mark:true,
                marktext:"复",
                limited:true,
                skillAnimation:true,
                animationStr:"复齐",
                animationColor:"white",
                unique:true,
                enable:"chooseToUse",
                priority:-10,
                init:function (player){
        player.storage.XSfuqi=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
        if(player.storage.XSfuqi) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
                content:function (){
        player.awakenSkill('XSfuqi');
        player.storage.XSfuqi=true;
        player.discard(player.getCards('e'));
		player.hp=player.maxHp;
		player.update();
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function (player){
            if(player.storage.XSfuqi) return false;
            if(player.hp>1) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                if(player.hp==0) return 10;
                if(player.hp<=1&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.XSfuqi) return 0.6;
        },
                },
            },
            "XSzhanjiang":{
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+1;
        },
                },
            },
            "XShuijian":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:["damageEnd"],
                },
                filter:function (event,player){
        return event.source&&event.source!=player;
    },
                frequent:true,
                priority:100,
                content:function (){
        "step 0"
        trigger.source.draw();
        player.chooseTarget(get.prompt2('XShuijian'),function(card,player,target){
            var trigger=_status.event.getTrigger();
            return player!=target&&trigger.source!=target;
        }).ai=function(target){
            var player=_status.event.player;
            return get.attitude(player,target)<0;
        }
        "step 1"
        if(result.bool){
            event.target1=result.targets[0];
            event.target1.chooseToUse({name:'sha'},trigger.source,-1,'对'+get.translation(trigger.source)+'使用一张杀，或弃置2张牌').set('targetRequired',true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool==false&&event.target1.countCards('he')>0){
            event.target1.chooseToDiscard(2,'he',true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
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
            "XSqicai":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    global:"gameStart",
                    player:["enterGame","turnOverEnd"],
                },
                direct:true,
                priority:2,
                derivation:["kanpo","XShuijian"],
                content:function (){
        player.removeAdditionalSkill('XSqicai');
        var list=[];
        if(player.isTurnedOver()) {
            list.push('kanpo');
        }
        else {
            list.push('XShuijian');
        }
        player.addAdditionalSkill('XSqicai',list);
    },
            },
            "XSdiaohu":{
                mod:{
                    playerEnabled:function (card,player,target){
            if(target.hasSkill('XSdiaohu_temp')) return false;
            return true;
        },
                },
                enable:"phaseUse",
                discard:false,
                prepare:"give2",
                filterCard:true,
                position:"he",
                targetprompt:["给出牌","得到牌"],
                selectTarget:2,
                multitarget:true,
                filter:function (event,player){
        var num=Math.max(1,player.hp-1);
        if(player.getStat().skill.XSdiaohu>=num) return false;
        return player.countCards('he');
    },
                filterTarget:function (card,player,target){
        if(game.countPlayer()==2) return false;
        return player!=target&&!target.hasSkill('XSdiaohu_temp');
    },
                check:function (card){
        var player=get.owner(card);
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(players[i]!=player&&get.attitude(player,players[i])>0) break;
        }
        if(i==players.length) return -1;
        return 7-get.value(card);
    },
                content:function (){
        "step 0"
        targets[0].gain(cards,player);
        "step 1"
        targets[0].chooseCard('交给'+get.translation(targets[1])+'两张牌（不足则全给）',Math.min(2,targets[0].countCards('he')),'he',true).ai=function(card){
            return 6-get.value(card);
        };
        "step 2"
        if(result.bool){
           var cards=result.cards;
           targets[0].$give(cards,targets[1]);
           targets[1].gain(cards,targets[0]);
           targets[0].addTempSkill('XSdiaohu_temp');
           game.log(targets[0],'交给',targets[1],'两张牌');
        }
        else{
            event.finish();
        }
		"step 3"
		game.delay();
    },
	ai:{
		order:8,
		result:{
			target:function(player,target){
				if(ui.selected.targets.length==0){
					return -1;
				}
				else{
					return 2;
				}
			}
		},
		expose:0.4,
		threaten:1.6,
	},
                subSkill:{
                    temp:{
                        sub:true,
                    },
                },
            },
            "XSbaoshen":{
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                direct:true,
                content:function (){
        player.turnOver();
        player.draw();
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(!target.hasFriend()) return;
                var num=1;
                if(get.attitude(player,target)>0){
                    if(target.isTurnedOver()) {
                        if(player.needsToDiscard()){
                            num=1;
                        }
                        else{
                            num=0.7;
                        }
                    }
                    num=0.4
                }
                if(target.hp>=4) return [1,num*2];
                if(target.hp==3) return [1,num*1.5];
                if(target.hp==2) return [1,num*0.5];
            },
                    },
                },
                group:["XSbaoshen_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:["turnOverEnd"],
                        },
                        direct:true,
                        content:function (){
                if(!player.isTurnedOver()) {
                    player.recover();
                }
                if(player.isTurnedOver()) {
                    player.draw();
                }
            },
                        sub:true,
                    },
                },
            },
            "XSmengzhe":{
                trigger:{
                    player:"shaMiss",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he')>2&&event.target.isAlive();
    },
                content:function (){
        "step 0"
        var next=player.chooseToDiscard(get.prompt2('XSmengzhe'),2,'he',true);
        next.logSkill='XSmengzhe';
        next.set('ai',function(card){
            var evt=_status.event.getParent();
            if(get.attitude(evt.player,evt._trigger.target)<0){
                if(evt.player.hasSkill('jiu')||
                evt.player.hasSkill('tianxianjiu')||
                evt._trigger.target.hp==1){
                    return 8-get.value(card)
                }
                return 5-get.value(card)
            }
            return -1;
        });
        "step 1"
        if(result.bool){
            trigger.untrigger();
            trigger.trigger('shaHit');
            trigger._result.bool=false;
            trigger.target.addSkill('XSshoushang');
            trigger.target.markSkill('XSshoushang_mark');
        }
    },
                group:["XSmengzhe_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        priority:2,
                        filter:function (event,player){
                if(player.countCards('he')>2&&event.player.isAlive()&&!event.player.hasSkill('XSshoushang')) {
                    return event.card&&event.card.name=='sha'&&event.notLink();
                }
            },
                        check:function (event,player){
                return player.countCards('he')>player.hp-2;
            },
                        content:function (){
                "step 0"
                var next=player.chooseToDiscard(get.prompt2('XSmengzhe'),1,'he',true);
                next.logSkill='XSmengzhe';
                next.set('ai',function(card){
                    var player=_status.event.player;
                    var trigger=_status.event.getTrigger();
                    if(get.attitude(player,trigger.player)<0){
                        return 6-get.value(card)
                    }
                    return -1;
                });
                "step 1"
                if(result.bool){
                    trigger.player.addSkill('XSshoushang');
                    trigger.player.markSkill('XSshoushang_mark');
                }
            },
                        sub:true,
                    },
                },
            },
            "XShenglian":{
 	trigger:{
		player:"damage",
	},
	forced:true,
	filter:function (event,player){
		return player.isLinked()&&event.notLink()&&event.nature&&event.num>0;
	},
	content:function (){
		player.recover(trigger.num);
	},
	ai:{
		maixie:true,
		"maixie_hp":true,
		result:{
			target:function (player,target){
				if(game.hasPlayer(function(current){
					return current.isLinked()&&get.attitude(player,current)<=0;
				})) {
					if(player.hp>=3) return 3;
					return -1;
				}
			},
		},
		effect:{
			target:function (card,player,target){
                if(get.tag(card,'natureDamage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
					var num=game.countPlayer(function(current){
						if(current!=player&&current!=target){
							return	get.attitude(player,current)<=0&&current.isLinked();
						}
					});
                    return [0,num*2];
                }
            },
		},
	},
	group:["XShenglian_draw","XShenglian_link"],
    subSkill:{
		draw:{
			sub:true,
			trigger:{
				player:"damage",
			},
			forced:true,
			filter:function (event,player){
				return player.isLinked()&&!event.notLink()&&event.nature&&event.num>0;;
			},
			content:function (){
				player.draw(2*trigger.num);
			},
        },
		link:{
			sub:true,
			trigger:{
				global:"gameStart",
				player:["enterGame","linkEnd"],
			},
			forced:true,
			filter:function (event,player){
				return !player.isLinked();
			},
			content:function (){
				player.link(true);
			},
			ai:{
				effect:{
					target:function (card){
						if(card.name=='tiesuo') return 'zeroplayertarget';
					},
				},
			},
        },
    },
            },
            "XSkuangshi":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                filterCard:{
                    color:"black",
                },
                filterTarget:true,
                check:function (card){
        return 7-get.value(card);
    },
                position:"h",
    filter:function (event,player){
		var num=Math.min(3,player.hp);
		if(player.getStat().skill.XSkuangshi>=num) return false;
        return player.countCards('h',{color:'black'})>0;
    },
                discard:false,
                lose:false,
                prepare:"give",
                content:function (){
        player.lose(cards,ui.special,'toStorage');
        if(target.hasSkill('XSkuangshi_mark')&&target.storage.XSkuangshi_mark){
            target.storage.XSkuangshi_mark.push(cards[0]);
            target.syncStorage('XSkuangshi_mark');
            target.markSkill('XSkuangshi_mark');
        }
        else{
            target.storage.XSkuangshi_mark=cards.slice(0);
            target.syncStorage('XSkuangshi_mark');
            target.addSkill('XSkuangshi_mark');
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(target.storage.XSkuangshi_mark&&target.storage.XSkuangshi_mark.length) return 0;
                if(target.countCards('j')&&get.attitude(player,target)>0) return 1;
                return 0;
            },
                    },
                },
            },
            "XSkuangshi_mark":{
                mark:true,
                intro:{
                    content:"cards",
                },
                trigger:{
                    player:"phaseJudgeBegin",
                },
                forced:true,
                content:function (){
        var cards=player.storage.XSkuangshi_mark.concat(player.getCards('j'));
        player.gain(cards,'gain2','log','fromStorage');
        delete player.storage.XSkuangshi_mark;
        player.removeSkill('XSkuangshi_mark');
    },
                ai:{
                    effect:{
                        target:function (card){
                if(get.type(card)=='delay') return [0,0.1];
            },
                    },
                },
            },
            "XStuba":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                filterCard:{
                    color:"red",
                },
                usable:1,
                filterTarget:true,
                check:function (card){
        return 8-get.value(card);
    },
                position:"he",
                filter:function (event,player){
        return player.countCards('he',{color:'red'})>0;
    },
                discard:false,
                lose:false,
                prepare:"give",
                content:function (){
        player.lose(cards,ui.special,'toStorage');
        target.addSkill('XStubamark');
        target.storage.XStubamark=cards.slice(0);
        target.syncStorage('XStubamark');
        target.storage.XStubamark_delete=player;
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                return 10;
            },
                    },
                },
            },
            "XSzhijiao":{
    trigger:{
        player:["chooseToRespondBefore","chooseToUseBefore"],
    },
    filter:function (event,player){
        if(event.responded) return false;
        if(player.storage.XSzhijiaoing) return false;
        if(!player.hasSkill('XSzhijiao')) return false;
		if(!event.filterCard({name:'shan'},player,event)) return false;
        if(_status.currentPhase!=player) {
			return game.hasPlayer(function(current){
				return current!=player&&current.hasSkill('XSkuangshi_mark');
			});
		}
		return false;
    },
    check:function (event,player){
        if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
    content:function (){
        "step 0"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        else if(event.current.hasSkill('XSkuangshi_mark')){
            if((event.current==game.me&&!_status.auto)||(
                get.attitude(event.current,player)>2)||
                event.current.isOnline()){
                player.storage.XSzhijiaoing=true;
                var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张闪？',{name:'shan'});
                next.set('ai',function(){
                    var event=_status.event;
                    return (get.attitude(event.player,event.source)-2);
                });
                next.set('skillwarn','替'+get.translation(player)+'打出一张闪');
                next.autochoose=lib.filter.autoRespondShan;
                next.set('source',player);
            }
        }
        "step 1"
        player.storage.XSzhijiaoing=false;
        if(result.bool){
            event.finish();
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
	ai:{
		respondShan:true,
		skillTagFilter:function(player){
			if(player.storage.XSzhijiaoing) return false;
			if(!player.hasSkill('XSzhijiao')) return false;
			return game.hasPlayer(function(current){
				return current!=player&&current.hasSkill('XSkuangshi_mark');
			});
		},
	},
	group:["XSzhijiao_sha"],
    subSkill:{
        sha:{
			sub:true,
			audio:2,
			trigger:{
				player:'chooseToRespondBegin',
			},
			check:function(event){
				if(event.XSzhijiao_sha) return false;
				return true;
			},
			filter:function(event,player){
				if(event.responded) return false;
				if(player.storage.XSzhijiao_shaing) return false;
				if(!player.hasSkill('XSzhijiao_sha')) return false;
				if(event.filterCard({name:'sha'},player,event)==false) return false;
				if(_status.currentPhase!=player) {
					return game.hasPlayer(function(current){
						return current!=player&&current.hasSkill('XStubamark');
					});
				}
			},
			content:function(){
				"step 0"
				if(event.current==undefined) event.current=player.next;
				if(event.current==player){
					event.finish();
				}
				else if(event.current.hasSkill('XStubamark')){
					player.storage.XSzhijiao_shaing=true;
					var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张杀？',{name:'sha'});
					next.set('ai',function(){
						var event=_status.event;
						return (get.attitude(event.player,event.source)-2);
					});
					next.set('source',player);
					next.set('XSzhijiao_sha',true);
					next.set('skillwarn','替'+get.translation(player)+'打出一张杀');
					next.autochoose=lib.filter.autoRespondSha;
				}
				else{
					event.current=event.current.next;
					event.redo();
				}
				"step 1"
				player.storage.XSzhijiao_shaing=false;
				if(result.bool){
					event.finish();
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
    },
            },
            "XStubamark":{
                mark:true,
                intro:{
                    content:"cards",
                },
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                content:function (){
        trigger.num++;
        player.storage.XStubamark_delete.draw();
    },
                ai:{
                    damageBonus:true,
                },
                group:["XStubamark_delete"],
                subSkill:{
                    delete:{
                        trigger:{
                            player:["phaseEnd"],
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
                var cards=player.storage.XStubamark;
                game.cardsDiscard(cards);
                delete player.storage.XStubamark;
                player.removeSkill('XStubamark');
            },
                        sub:true,
                    },
                },
            },
            "XSlixin":{
                skillAnimation:true,
                animationColor:"wood",
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                unique:true,
                juexingji:true,
                filter:function (event,player){
        return player.storage.XSyizhi>0&&!player.storage.XSlixin;
    },
                content:function (){
        player.awakenSkill('XSlixin');
        player.storage.XSlixin=true;
		player.loseMaxHp();
    },
            },
            "XSweijiu":{
                trigger:{
                    global:"damageBefore",
                },
                priority:20,
                filter:function (event,player){
        return (event.card&&event.card.name=='sha'&&event.source!=player&&event.player!=player&&player.countCards('he')>0);
    },
                check:function (event,player){
        if(get.attitude(player,event.player)>0) {
            if(player.countCards('h')<2&&event.player.hp<=event.num) return true;
            if(player.countCards('h')>=2) return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        var goon=(get.attitude(player,trigger.player)>0);
        var next=player.chooseToDiscard('he',get.prompt2('XSweijiu',trigger.player));
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('goon',goon);
        "step 1"
        if(result.bool){
            event.num1=trigger.num;
            event.target1=trigger.source;
            player.line(event.target1,'green');
            event.target1.chooseControl().set('choiceList',['受到'+get.translation(player)+'的1点伤害','弃置1张牌并令伤害无效']).set('ai',function(event,player){
                return 1;
            });
        }
        else event.finish();
        "step 2"
        if(result.index==0){
            event.target1.damage(player);
        }
        else{
            event.target1.chooseToDiscard(1,'he',true);
            trigger.cancel();
        }
    },
                ai:{
                    threaten:1.2,
                },
            },
            "XSbinzu":{
                skillAnimation:true,
                animationColor:"soil",
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                unique:true,
                juexingji:true,
                filter:function (event,player){
        return player.hp==1&&!player.storage.XSbinzu;
    },
                content:function (){
        player.loseMaxHp();
        player.recover();
        player.disableEquip('equip4');
        player.disableEquip('equip3');
        player.addSkill('XSweijiu');
        game.log(player,'获得了技能','#g【围救】')
        player.awakenSkill('XSbinzu');
        player.storage.XSbinzu=true;
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 1.5;
        },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(!target.hasFriend()) return;
                if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
            },
                    },
                },
            },
            "XSyuchangdamage":{
	trigger:{
		player:["useCard"],
	},
	forced:true,
	filter:function (event,player){
        return event.card&&player.storage.XSyuchangdamage&&player.storage.XSyuchangdamage.contains(event.card);
    },
	content:function (){
		'step 0'
		player.loseHp();
		player.storage.XSyuchangdamage_lose.draw();
         'step 1'
		if(player.storage.XSyuchangdamage){
			for(var i=0;i<player.storage.XSyuchangdamage.length;i++){
				if(trigger.cards.contains(player.storage.XSyuchangdamage[i])){
					player.storage.XSyuchangdamage.splice(i--,1);
				}
			}
		}
		else{
			player.removeSkill('XSyuchangdamage');
		}
	},
	group:["XSyuchangdamage_lose"],
    subSkill:{
        lose:{
			sub:true,
			trigger:{
				player:"loseEnd",
			},
			forced:true,
			forced:true,
			filter:function (event,player){
				if(player.storage.XSyuchangdamage) {
					for(var i=0;i<event.cards.length;i++){
						if(player.storage.XSyuchangdamage.contains(event.cards[i])) return true;
					}
				}
				return false;
			},
			content:function (){
				'step 0'
				for(var i=0;i<trigger.cards.length;i++) {
					if(player.storage.XSyuchangdamage.contains(trigger.cards[i])) {player.loseHp();}
				}
				player.storage.XSyuchangdamage_lose.draw();
				'step 1'
				if(player.storage.XSyuchangdamage){
					for(var i=0;i<player.storage.XSyuchangdamage.length;i++){
						if(trigger.cards.contains(player.storage.XSyuchangdamage[i])){
							player.storage.XSyuchangdamage.splice(i--,1);
						}
					}
				}
				else{
					player.removeSkill('XSyuchangdamage');
				}
			},
        },
    },
            },
            "XSshoupai2":{
                audio:"ext:血色衣冠:2",
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
            },
            "XSbinglun":{
                audio:"ext:血色衣冠:4",
                trigger:{
                    global:["damageEnd","loseHpEnd"],
                },
                filter:function (event,player){
        return event.source&&event.player.classList.contains('dead')==false&&player.countCards('h');
    },
                direct:true,
                checkx:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        return att1>0&&att2<=0;
    },
                content:function (){
        "step 0"
        var next=player.chooseToDiscard('he',get.prompt2('XSbinglun',trigger.player));
        var check=lib.skill.XSbinglun.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.check) return 8-get.value(card);
            return 0;
        });
        next.set('check',check);
        "step 1"
        if(result.bool){
			trigger.player.judge(function(card){
				if(get.color(card)=='red') return 3;
				return -3;
			});
        }
        else{
            event.finish();
        }
        "step 2"
		if(result.bool==true){
			trigger.player.recover();
		}
		else {
			player.storage.XSyisheng+=1;
			player.syncStorage('XSyisheng');
		}
    },
                ai:{
                    expose:0.3,
                },
            },
            "XSyaolue":{
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                enable:"phaseUse",
                filter:function (event,player){
        return player.storage.XSyisheng>2;
    },
                content:function (){
        player.storage.XSyisheng-=3;
        player.syncStorage('XSyisheng');
        var card=get.cardPile('tao');
        if(card){
            player.gain(card,'gain2');
            game.log(player,'从牌堆获得了',card);
        }
        else {
            player.draw();
        }
    },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                if(!player.needsToDiscard()||player.isDamaged()) return 2;
                return 0.5;
            },
                    },
                },
            },
            "XSpoguo":{
                audio:"ext:血色衣冠:1",
    mod:{
        maxHandcard:function (player,num){
			var num1=Math.min(3,player.storage.XSpoguo);
			return num+num1;
        },
    },
	init:function (player){
		player.storage.XSpoguo=0;
    },
    audio:1,
    trigger:{
        global:"die",
    },
	gainable:true,
	priority:5,
	filter:function(event,player){
		return !player.hasSkill('XSpoguo_1')||!player.hasSkill('XSpoguo_2');
	},
    content:function (){
		"step 0"
		player.storage.XSpoguo++;
		event.player1=trigger.player;
		var list=[];
        if(!player.hasSkill('XSpoguo_1')){
            list.push('得所有牌');
        }
        if(!player.hasSkill('XSpoguo_2')){
            list.push('额外回合');
        }
		if(list.length){
            player.chooseControl(list).set('ai',function(event,player){
				if(event.player1.countCards('he')>=3) return '得所有牌';
				return '额外回合';
			});
        }
		"step 1"
        if(result.control=='得所有牌'){
			event.togain=trigger.player.getCards('he');
			player.gain(event.togain,trigger.player,'giveAuto');
			player.addTempSkill('XSpoguo_1');
        }
		else {
			player.insertPhase();
			player.addTempSkill('XSpoguo_2');
        }
    },
    ai:{
        threaten:1.5,
    },
	subSkill:{
        1:{
        },
		2:{
        },
    },
            },
            "XSsuoci":{
	trigger:{
		source:"damageEnd",
	},
	frequent:true,
	filter:function (event,player){
		return event.card&&event.card.name=='sha'&&event.parent.parent.parent.name!='XSsuoci'&&!player.hasSkill('XSsuoci_temp');
	},
	content:function (){
		"step 0"
		player.chooseTarget(get.prompt('XSsuoci'),function(card,player,target){
			var trigger=_status.event.getTrigger();
            return player!=target&&trigger.player!=target&&target.countCards('h');
        }).ai=function(target){
			var player=_status.event.player;
			var att=get.attitude(player,target);
			if(target.countCards('h')>2) return att;
            return -att;
        }
		"step 1"
		if(result.bool) {
			player.addTempSkill('XSsuoci_temp',{player:'phaseBefore'});
			event.target1=result.targets[0];
			event.target1.chooseControl().set('choiceList',['交给'+get.translation(player)+'1张牌，并使其本回合使用杀的次数+1','此杀继续对你结算']).set('ai',function(event,player){
				var att=get.attitude(player,event.target1);
				if(att>0) return 0;
				return 1
			});
		}
		else{
            event.finish();
        }
		"step 2"
		if(result.index==1){
			player.useCard(trigger.card,event.target1,false);
			event.finish();
		}
		else{
			event.target1.chooseCard('交给'+get.translation(player)+'1张牌，并使其本回合使用杀的次数+1','h',false).ai=function(card){
				if(card.name=='sha') return 1;
				return 4-get.value(card);
			}
		}
		"step 3"
		if(result.bool) {
            player.gain(result.cards[0]);
            event.target1.$give(1,player);
			player.getStat().card.sha--;
		}
	},
	subSkill:{
		temp:{
        },
    },
            },
            "XSyingong":{
                audio:"ext:血色衣冠:2",
	enable:"phaseUse",
	usable:1,
    filter:function (event,player){
		if(!player.getEquip('XSshediaogong')&&player.getEquip(1)) return true;
        return player.getEquip('XSshediaogong');
    },
    content:function (){
		if(!player.getEquip('XSshediaogong')&&player.getEquip(1)) {
			player.useCard(game.createCard('XSshediaogong','diamond',1),player);
		}
		else if(player.getEquip('XSshediaogong')) {
			var card=get.cardPile(function(card){
				return card.name=='sha';
			});
			if(card){
				player.gain(card,'gain2','log');
			}
		}
    },
	ai:{
		order:10,
		effect:{
			target:function(card,player,target,current){
				if(!player.getEquip('XSshediaogong')) {
					if(get.subtype(card)=='equip1') return [1,3];
				}
				return;
			}
		},
		result:{
			player:2,
		},
    },
            },
            "XStianjiao":{
	mod:{
		selectTarget:function (card,player,range){
			if(_status.currentPhase==player&&card.name=='sha'&&card.number>=7) range[1]+=1;
		},
	},
    priority:15,
	trigger:{
		player:"shaBegin",
	},
	forced:true,
	filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.targets.length>0;
    },
	content:function (){
		switch(trigger.targets.length){
			case 1:player.addTempSkill('XStianjiao_1',{player:'shaAfter'});break;
			case 2:player.addTempSkill('XStianjiao_2',{player:'shaAfter'});break;
			case 3:player.addTempSkill('XStianjiao_4',{player:'shaAfter'});break;
		}
    },
	ai:{
		threaten:1.2,
	},
	group:["XStianjiao_remove"],
	subSkill:{
		remove:{
			sub:true,
            trigger:{
                player:["phaseZhunbeiBegin","dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XStianjiao_3')){
                        game.players[i].removeSkill('XStianjiao_3');
                    }
                }
            },
        },
        1:{
			sub:true,
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				return event.player.isAlive();
			},
			content:function (){
				trigger.player.addSkill('XStianjiao_3');
			},
        },
		2:{
			sub:true,
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				return event.player.isAlive();
			},
			content:function (){
				trigger.player.chooseToDiscard('he',true);
			},
        },
		3:{
			sub:true,
            marktext:"封",
            init:function (player){
                player.markSkill('XStianjiao_3');
            },
            intro:{
                content:function (storage){
                    return '无法使用普通锦囊牌';
                },
            },
			mod:{
				cardEnabled:function(card){
					if(get.type(card)=='trick') return false
				}
			},
        },
		4:{
			sub:true,
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				return event.num>0;
			},
			content:function (){
				if(Math.random()<=0.5) {
					player.draw();
				}
			},
		},
    },
            },
            "XSshiquan":{
	enable:"phaseUse",
	usable:1,
	filter:function(event,player){
		return game.hasPlayer(function(current){
			return current.countCards('e')>0;
		});
	},
	filterTarget:function(card,player,target){
		return target.countCards('e')>0;
	},
	content:function(){
		"step 0"
		event.target1=target;
		player.logSkill('XSshiquan',event.target1);
		event.target1.chooseControl().set('choiceList',['令'+get.translation(player)+'弃置你装备区的1张牌并摸1张牌','交给'+get.translation(player)+'你装备区的1张牌并对其使用1张杀']).set('ai',function(event,player){
			var att=get.attitude(event.target1,player);
			if(event.target1.canUse('sha',player)&&att<0) return 1;
			return 0;
		});
		"step 1"
		if(result.index==0){
			player.discardPlayerCard(event.target1,true,'e');
			player.draw();
			event.finish();
		}
		else{
			event.target1.chooseCard('交给'+get.translation(player)+'1张装备牌','e',true).ai=function(card){
				return -get.value(card);
			}
		}
		"step 2"
		if(result.bool){
            player.gain(result.cards[0]);
            event.target1.$give(1,player);
			if(event.target1.countCards('h','sha')&&event.target1.canUse('sha',player)) {
				event.target1.chooseToUse({name:'sha'},player,-1,'对'+get.translation(player)+'使用一张杀').set('targetRequired',true);
			}
        }
	},
	ai:{
		order:7,
		result:{
			target:function(player,target){
				if(target.hasSkill('XSlianbing')) return 1;
				return -1;
			}
		}
	},
            },
            "XSrenzheng":{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.draw(trigger.num);
        if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
            player.chooseTarget(get.prompt('XSrenzheng'),'选择1名其他角色获得'+get.translation(trigger.cards),function(card,player,target){
                return player!=target&&trigger.source!=target;
            }).ai=function(target){
                var player=_status.event.player;
                return get.attitude(player,target);
            };
        }
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            target.gain(trigger.cards,"gain2");
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&player!=target) return [1,0.6];
            },
                    },
                },
            },
            "XStianzhao":{
                trigger:{
                    target:"useCardToBefore",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                filter:function (event,player){
        if(event.card&&event.player!=player) {
            return get.tag(event.card,'damage')||event.card.name=='tiesuo';
        }
        return false;
    },
                content:function (){
        'step 0'
        event.cards=get.cards(1);
        player.showCards(get.translation(player)+'对'+get.translation(trigger.player)+'发动了天兆',event.cards);
        'step 1'
        var card=event.cards[0];
        var cards1=player.getCards('h');
        var suits=[];
        for(var i=0;i<cards1.length;i++){
            suits.add(get.suit(cards1[i]));
        }
        if(!suits.contains(get.suit(card))) {
            trigger.player.damage(1,'thunder',player);
        }
    },
                ai:{
                    threaten:0.6,
                },
            },
            "XSshengxi":{
                trigger:{
                    global:"phaseEnd",
                },
                priority:99,
                filter:function (event,player){
        return player.countCards('h')>0&&event.player!=player&&player.storage.XSshengxi<4&&event.player.isAlive();
    },
                init:function (player){
        for(var i=0;i<game.players.length;i++){
            game.players[i].storage.XSshengxi_mark=0;
        }
        player.storage.XSshengxi=0;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseCard('是否对'+get.translation(trigger.player)+'发动【生息】?',1).ai=function(card){
            var trigger=_status.event.getTrigger();
            if(get.attitude(player,trigger.player)>0) return 6-get.value(card);
            return card.name=='du';
        }
        'step 1'
        if(result.bool){
            player.logSkill('XSshengxi',trigger.player);
            trigger.player.gain(result.cards);
            player.$give(result.cards.length,trigger.player);
            trigger.player.storage.XSshengxi_mark++;
            player.storage.XSshengxi++;
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.2,
                },
                group:["XSshengxi_draw","XSshengxi_mark"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:["phaseEnd"],
                        },
                        direct:true,
                        content:function (){
                if(player.storage.XSshengxi!=0) {
                    var num=player.storage.XSshengxi;
                    player.draw(num);
                    player.storage.XSshengxi=0;
                }
            },
                        sub:true,
                    },
                    mark:{
                        marktext:"息",
                        intro:{
                            name:"生息",
                            content:"mark",
                        },
                        sub:true,
                    },
                },
            },
            "XSrenxian":{
                trigger:{
                    global:"phaseEnd",
                },
                priority:-99,
                filter:function (event,player){
        return event.player.storage.XSshengxi_mark>=2;
    },
                direct:true,
                content:function (){
        trigger.player.storage.XSshengxi_mark=0;
        trigger.player.stat.push({card:{},skill:{}});
        trigger.player.phaseUse();
    },
                ai:{
                    threaten:1.4,
                    expose:0.2,
                },
            },
            "XSchuijiang":{
                trigger:{
                    player:"dying",
                },
                priority:10,
                filter:function (event,player){
        if(player.hp<=0) return player.getEquip(3)||player.getEquip(4);
    },
	frequent:true,
                content:function (){
        'step 0'
        var list=[];
        if(player.getEquip(3)){
            list.push('防御马');
        }
        if(player.getEquip(4)){
            list.push('攻击马');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择弃置1匹马回复1点体力。');
        }
        else event.finish();
        'step 1'
        if(result.control=='防御马') {
            player.discard(player.getCards('e',{subtype:'equip3'}));
        }
        if(result.control=='攻击马') {
            player.discard(player.getCards('e',{subtype:'equip4'}));
        }
        player.hp=Math.min(1,player.maxHp);
        player.update();
    },
            },
            "XStianming":{
                audio:"ext:血色衣冠:2",
    trigger:{
        global:"judge",
    },
	priority:3,
	check:function (event,player){
		var res=event.judge(event.player.judging[0]);
		var att=get.attitude(player,event.player);
		//if(att==0||res==0) return 1;
		if(att>0){
			return res<0;
		}
		else{
			return res>=0;
		}
    },
    content:function (){
		"step 0"
		event.cards=get.cards();
		player.showCards(event.cards);
		player.respond(event.cards[0],'highlight');
		if(trigger.player.judging[0].clone){
			trigger.player.judging[0].clone.classList.remove('thrownhighlight');
			game.broadcast(function(card){
				if(card.clone){
					card.clone.classList.remove('thrownhighlight');
				}
			},trigger.player.judging[0]);
			game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
		}
		player.$gain2(trigger.player.judging[0]);
		player.gain(trigger.player.judging[0]);
		trigger.player.judging[0]=event.cards[0];
		if(!get.owner(event.cards[0],'judge')){
			trigger.position.appendChild(event.cards[0]);
		}
		game.log(trigger.player,'的判定牌改为',event.cards[0]);
		game.delay();
		if(player.hasSkill('XStianming_temp')) {
			player.chooseToDiscard(1,'he',true);
		}
		"step 1"
		if(!player.hasSkill('XStianming_temp')) {
			player.addSkill('XStianming_temp');
		}
    },
    ai:{
		threaten:1.2,
		effect:{
　　		player:function(card,player){
				if(card.name=='shandian'||card.name=='fulei') {
					return [1,3];
				}
			}
		},
        tag:{
            rejudge:1,
        },
    },
	group:["XStianming_remove"],
    subSkill:{
		remove:{
			sub:true,
            trigger:{
                player:["phaseBefore"],
            },
			filter:function (event,player){
				return player.hasSkill('XStianming_temp');
			},
            forced:true,
            popup:false,
            silent:true,
            content:function (){
				player.removeSkill('XStianming_temp');
            },
        },
		temp:{
        },
    },

            },
            "XSzhujian":{
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:true,
                selectCard:2,
				derivation:['XStianming','XSweiya','XSrenzheng','XSweijia','XStianjiao'],
                check:function (card){
        return 6-get.value(card);
    },
                init:function (player){
        player.storage.XSzhujian=[];
    },
                content:function (){
        'step 0'
        var num=cards[0].number+cards[1].number;
        if(num<6) {
            player.useCard(game.createCard('XSlongquan','diamond',13),player);
            if(!player.storage.XSzhujian.contains('XSlongquan')) {
                player.storage.XSzhujian.push('XSlongquan');
            }
        }
        if(num>=6&&num<11) {
            player.useCard(game.createCard('XStaie','club',1),player);
            if(!player.storage.XSzhujian.contains('XStaie')) {
                player.storage.XSzhujian.push('XStaie');
            }
        }
        if(num>=11&&num<16) {
            player.useCard(game.createCard('XSzhanlu','heart',1),player);
            if(!player.storage.XSzhujian.contains('XSzhanlu')) {
                player.storage.XSzhujian.push('XSzhanlu');
            }
        }
        if(num>=16&&num<21) {
            player.useCard(game.createCard('XSchunjun','diamond',1),player);
            if(!player.storage.XSzhujian.contains('XSchunjun')) {
                player.storage.XSzhujian.push('XSchunjun');
            }
        }
        if(num>=21) {
            player.useCard(game.createCard('XSgongbu','spade',1),player);
            if(!player.storage.XSzhujian.contains('XSgongbu')) {
                player.storage.XSzhujian.push('XSgongbu');
            }
        }
    },
                ai:{
                    order:6,
                    result:{
			player:function (player){
				if(player.countCards('h')<3) return 0;
				if(player.storage.XSzhujian.length>=3) return 0;
				if(player.getEquip(1)&&player.countCards('h')<4) return 0;
				return 1;
            },
                    },
                    threaten:1.3,
                },
            },
            "XSjujiang":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
        var num=Math.min(3,player.storage.XSzhujian.length);
        if(num!=0) {
            trigger.num+=num;
        }
    },
            },
            "XSyongjue":{
                mod:{
		globalFrom:function (from,to,current){
			var num=from.countCards('e');
			if(from.isDamaged()) return current-num;
			return current;
		},
                },
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                filter:function (event,player){
        return player.isDamaged()&&player.maxHp>1;
    },
                content:function (){
        var num1=player.maxHp-player.hp;
        if(trigger.num<=num1) {
            player.maxHp-=trigger.num;
            trigger.num=0;
        }
        else {
            var num2=trigger.num-num1;
            player.maxHp-=num1;
            trigger.num=num2;
        }
        player.update();
    },
            },
            "XSyuanyang":{
	group:['XSyuanyang_sha','XSyuanyang_shan'],
	subSkill:{
		sha:{
			sub:true,
			enable:["chooseToRespond","chooseToUse"],
			filterCard:function (card,player){
				return get.color(card)=='red';
			},
			filter:function (event,player){
				return _status.currentPhase==player;
			},
			position:"h",
			viewAs:{
				name:"sha",
			},
			viewAsFilter:function (player){
				if(!player.countCards('h',{color:'red'})) return false;
			},
			prompt:"将一张红色手牌当杀使用或打出",
			check:function (card){return 4-get.value(card)},
			ai:{
				skillTagFilter:function (player){
					if(!player.countCards('h',{color:'red'})) return false;
				},
				respondSha:true,
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
		shan:{
			sub:true,
			enable:['chooseToRespond','chooseToUse'],
			filterCard:function(card){
				return get.color(card)=='black';
			},
			filter:function (event,player){
				return _status.currentPhase!=player;
			},
			position:'h',
			viewAs:{name:'shan'},
			viewAsFilter:function(player){
				if(!player.countCards('h',{color:'black'})) return false;
			},
			prompt:'将一张黑色手牌当闪打出',
			check:function(){return 1},
			ai:{
				respondShan:true,
				skillTagFilter:function(player){
					if(!player.countCards('h',{color:'black'})) return false;
				},
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'respondShan')&&current<0) return 0.6
					}
				}
			}
		},
	}
            },
            "XSkedi":{
     trigger:{
        target:"shaMiss",
    },
	forced:true,
    content:function (){
		player.draw();
		if(player.canUse('sha',trigger.player)) {
			player.chooseToUse({name:'sha'},trigger.player,-1,'对'+get.translation(trigger.player)+'使用一张杀');
		}
    },
	ai:{
        effect:{
            target:function (card,player,target){
                if(card.name=='sha'&&player!=target) return [1,1];
            },
        },
	},
	group:["XSkedi_draw"],
    subSkill:{
        draw:{
            trigger:{
                source:"damageAfter",
            },
            forced:true,
            popup:false,
            filter:function (event){
                return event.parent.parent.parent.parent.name=='XSkedi';
            },
            content:function (){
                player.draw();
            },
            sub:true,
        },
    },
            },
            "XSzongheng":{
                group:["XSzongheng1","XSzongheng2"],
                subSkill:{
                    phase:{
                        charlotte:true,
                        sub:true,
                    },
                    off:{
                        charlotte:true,
                        sub:true,
                    },
                },
                audio:"ext:血色衣冠:3",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('XSzongheng_off')) return false;
        return !game.hasPlayer(function(current){
            return current.hasSkill('XShezong2')||current.hasSkill('XSlianheng2');
        });
    },
                content:function (){
        "step 0"
        player.addTempSkill('XSzongheng_phase');
        player.addSkill('XSzongheng_off');
        player.chooseTarget('请将「纵术」交给一名角色',true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return 10+get.attitude(player,target);
        });
        "step 1"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.logSkill('XSzongheng',target);
            player.line(target,'fire');
            target.addSkill('XShezong2');
            game.delay();
        }
        if(game.hasPlayer(function(current){
            return !current.hasSkill('XShezong2')&&current!=player
        })){
        player.chooseTarget('请将「横术」交给一名角色',true,function(card,player,target){
            return target!=player&&!target.hasSkill('XShezong2');
        }).set('ai',function(target){
            var player=_status.event.player;
            return 10+get.attitude(player,target);
        });
        }else event.finish();
        "step 2"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.logSkill('XSzongheng',target);
            player.line(target,'green');
            target.addSkill('XSlianheng2');
            game.delay();
        }
    },
            },
            "XSzongheng1":{
                audio:"ext:血色衣冠:3",
                prompt:"你的第一个准备阶段，你令两名不同的角色分别获得纵术与横术；出牌阶段限一次（你的第一个回合除外），或当拥有纵术、横术的角色死亡时，你可以转移纵术、横术。",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(!game.hasPlayer(function(current){
            return current.hasSkill('XShezong2')||current.hasSkill('XSlianheng2');
        })) return false;
        return !player.hasSkill('XSzongheng_phase');
    },
                filterTarget:function (card,player,target){
        if(ui.selected.targets.length==1){
            return true;
        }else{
            return target.hasSkill('XShezong2')||target.hasSkill('XSlianheng2');
        }
    },
                targetprompt:["移走","得到"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        'step 0'
        if(targets[0].hasSkill('XShezong2')&&targets[0].hasSkill('XSlianheng2')){
            player.chooseControl('纵术','横术').prompt='请选择要移动的术';
        }
        else{
            if(targets[0].hasSkill('XShezong2')) event._result={control:'纵术'};
            else event._result={control:'横术'};
        }
        'step 1'
        if(result.control=='纵术'){
            targets[0].removeSkill('XShezong2');
            targets[1].addSkill('XShezong2');
        }
        else{
            targets[0].removeSkill('XSlianheng2');
            targets[1].addSkill('XSlianheng2');
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return get.attitude(player,target)<0?-999:-3;
                }
                else{
                    return target.countCards('h');
                }
            },
                    },
                    expose:0.4,
                    threaten:2,
                },
            },
            "XSzongheng2":{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                direct:true,
                silent:true,
                popup:false,
                filter:function (event,player){
        return event.player.hasSkill('XShezong2')||event.player.hasSkill('XSlianheng2');
    },
                content:function (){
        "step 0"
        player.logSkill('XSzongheng');
        "step 1"
        if(trigger.player.hasSkill('XShezong2')){
            player.chooseTarget('请将'+get.translation(trigger.player)+'的「纵术」交给一名角色',true).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else event.goto(2);
        "step 2"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'fire');
            target.addSkill('XShezong2');
            game.delay();
        }
        "step 3"
        if(trigger.player.hasSkill('XSlianheng2')){
            player.chooseTarget('请将'+get.translation(trigger.player)+'的「横术」交给一名角色',true).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else event.finish();
        "step 4"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'green');
            target.addSkill('XSlianheng2');
            game.delay();
        }
    },
            },
            "XShezong2":{
                charlotte:true,
                mark:true,
                marktext:"纵",
                intro:{
                    name:"纵术",
                    content:"出牌阶段限1次，你可以指定手牌数不为最多的至多4名角色各摸1张牌，然后这些角色横置。",
                },
                enable:"phaseUse",
                usable:1,
                multitarget:true,
                multiline:true,
                selectTarget:[1,4],
                filterTarget:function (card,player,target){
        return !target.isMaxHandcard();
    },
		prompt:"出牌阶段限1次，你可以指定手牌数不为最多的至多4名角色各摸1张牌，然后这些角色横置。",
                content:function (){
        if(targets.length) {
            for(var i=0;i<targets.length;i++){
                targets[i].link(true);
            }
            game.asyncDraw(targets);
        }
    },
                ai:{
                    order:8,
                    expose:0.1,
                    threaten:1.1,
                    result:{
                        target:function (player,target){
                if(target.isLinked()) return 1;
                return -0.5;
            },
                    },
                },
            },
            "XSlianheng2":{
                charlotte:true,
                mark:true,
                marktext:"横",
                intro:{
                    name:"横术",
                    content:"出牌阶段限1次，你可以弃置1张手牌并指定1名手牌数不为最多的角色，解除其横置状态，令其选择1项：1.视为对你指定的另一名角色使用决斗；2.令你摸两张牌。",
                },
                enable:"phaseUse",
                usable:1,
                audio:"ext:血色衣冠:2",
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:1,
                position:"h",
                filterTarget:function (card,player,target){
        return player!=target&&!target.isMaxHandcard();
    },
                discard:false,
                check:function (card){
        return 10-ai.get.value(card);
    },
		prompt:"出牌阶段限1次，你可以弃置1张手牌并指定1名手牌数不为最多的角色，解除其横置状态，令其选择1项：1.视为对你指定的另一名角色使用决斗；2.令你摸两张牌。",
                content:function (){
        "step 0"
        event.target1=targets[0];
        event.target1.link(false);
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(players[i]!=event.target1&&players[i]!=player){
                break;
            }
        }
        if(i==players.length){
            event.finish();
        }
        "step 1"
        player.chooseTarget(true,'选择横术目标',function(card,player,target){
            return _status.event.target1.canUse({name:'juedou'},target)&&target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            var eff=get.effect(target,{name:'juedou'},_status.event.target1,player);
            return eff;
        }).set('target1',event.target1);
        "step 2"
        if(result.targets.length){
            event.target2=result.targets[0];

            event.target1.chooseControlList(
                ['令'+get.translation(player)+'摸2张牌。',
                '视为对'+get.translation(event.target2)+'使用决斗。'],
                true).set('ai',function(event,player){
                if(get.attitude(event.target1,event.target2)>0) return 0;
                return 1;
            });
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.index==0){
            player.draw(2);
            event.finish();
        }else{
            event.target1.useCard({name:'juedou'},event.target2,'noai').animate=false;
            game.delay(0.5);
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(target.isLinked()) {
                    return 0.5;
                }
                else {
                    return -3;
                }
            },
                    },
                    expose:0.4,
                    threaten:1.5,
                },
            },
            "XSxiushen":{
                forced:true,
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
         return !player.hasSkill('XShezong2')&&!player.hasSkill('XSlianheng2');
    },
                content:function (){
        player.draw(2);
    },
            },
            "XSjinggong":{
                audio:"ext:血色衣冠:2",
                mod:{
                    maxHandcard:function (player,num){
			var num1=0;
            if(player.getEquip(1)||player.getEquip(2)){
                num1++;
            }
            return num+num1;
        },
                },
            },
            "XSbaihe":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        player.link();
    },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                var check1=game.hasPlayer(function(current){
                    return get.attitude(player,current)<0&&current.isLinked();
                });
                var check2=game.hasPlayer(function(current){
                    return get.attitude(player,current)>0&&current.isLinked();
                })
                if(!player.isLinked()) {
                    if(!check1&&!check2) return 3;
                    return -2;
                }
                else {
                    if(!check1&&!check2) return -2;
                    return 3;
                }
            },
                    },
                },
                group:["XSbaihe_end"],
                subSkill:{
                    end:{
                        trigger:{
                            player:"phaseUseAfter",
                        },
                        forced:true,
                        content:function (){
                'step 0'
                player.chooseControl().set('choiceList',['横置角色弃牌','横置角色摸牌','非横置角色弃牌','非横置角色摸牌','取消']).set('ai',function(event,player){
                    var gain1=0,gain2=0,players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(player,players[i])>0) {
                            if(!players[i].isLinked()) {
                                gain1++;
                            }
                            else gain2++;
                        }
                        else {
                            if(!players[i].isLinked()) {
                                gain1--;
                            }
                            else gain2--;
                        }
                    }
                    if(gain1>0) {
                        if(gain1>gain2) return 3;
                        if(gain1<gain2) return 1;
                        return 4;
                    }
                    if(gain1<0) {
                        if(gain1>gain2) return 0;
                        if(gain1<gain2) return 2;
                        return 4;
                    }
                    else {
                        if(gain2>0) return 1;
                        if(gain2<0) return 0;
                        return 4;
                    }
                });
                "step 1"
                if(result.index==0){
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].isLinked()) {
                            game.players[i].chooseToDiscard(1,'he',true);
                        }
                    }
                }
                if(result.index==1){
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].isLinked()) {
                            game.players[i].draw();;
                        }
                    }
                }
                if(result.index==2){
                    for(var i=0;i<game.players.length;i++){
                        if(!game.players[i].isLinked()) {
                            game.players[i].chooseToDiscard(1,'he',true);
                        }
                    }
                }
                else{
                    if(result.index==3) {
                        for(var i=0;i<game.players.length;i++){
                            if(!game.players[i].isLinked()) {
                                game.players[i].draw();
                            }
                        }
                    }
                    event.finish();
                }
            },
                        sub:true,
                    },
                },
            },
            "XSzhifa":{
                selectCard:[1,3],
                filterCard:true,
                charlotte:true,
                mark:true,
                marktext:"法",
                intro:{
                    name:"治法",
                    content:"出牌阶段限1次，你可以弃置至多3张牌，然后摸等量的牌。",
                },
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                usable:1,
                position:"he",
                check:function (card){
        return 6-get.value(card)
    },
                content:function (){
        player.draw(cards.length);
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.2,
                },
            },
            "XSyongshu":{
                charlotte:true,
                mark:true,
                marktext:"术",
                intro:{
                    name:"用术",
                    content:"出牌阶段限1次，你可以观看1名其他角色的手牌，然后弃置其中1张红桃牌。",
                },
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h');
    },
                content:function (){
        'step 0'
        player.viewCards('用术',target.getCards('h'));
        event.cards=target.getCards('h',function(card){
            return get.suit(card)=='heart';
        });
        if(!event.cards.length){
            event.finish();
        }
        'step 1'
        player.chooseCardButton('选择一张红桃牌弃置之',event.cards).ai=function(button){
            return get.value(button.link);
        }
        'step 2'
        if(result.bool){
            target.discard(result.links[0]);
        }
    },
                ai:{
                    threaten:1.2,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            "XSdoushen":{
                trigger:{
                    player:"shaMiss",
                },
                direct:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&player.countCards('h',{name:'sha'});
    },
                content:function (){
        "step 0"
        player.chooseCard('h',false,'选择弃置一张杀，令此杀仍造成伤害',{name:'sha'}).ai=function(card){
            return 8-get.value(card);
        };
        "step 1"
        if(result.bool){
            var card=result.cards[0];
            player.discard(card);
            if(get.color(card)==get.color(trigger.card)){
                player.addTempSkill('XSdoushen_damage',{player:'shaAfter'});
            }
			else {
				player.gainPlayerCard('e',trigger.target);
			}
            trigger.untrigger();
            trigger.trigger('shaHit');
            trigger._result.bool=false;
        }
    },
		ai:{
	　　effect:{
　　		player:function(card,player){
				if(card.name=='sha') {
					var num=player.countCards('h','sha')
					if(num>1) return [1,2];
					return;
				}
			}
		}
	},
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                        sub:true,
                    },
                },
            },
            "XSxinglue":{
                enable:"phaseUse",
                init:function (player){
        player.storage.XSxinglue=[];
    },
                filter:function (event,player){
        var num=Math.max(player.storage.XSxinglue_suit-1);
        if(player.getStat().skill.XSxinglue>=num) return false;
        return player.countCards('h');
    },
                content:function (){
 		"step 0"
		var list=[];
		if(player.countCards('h',{suit:'spade'})) list.push('spade');
		if(player.countCards('h',{suit:'heart'})) list.push('heart');
		if(player.countCards('h',{suit:'club'})) list.push('club');
		if(player.countCards('h',{suit:'diamond'})) list.push('diamond');
		list.push('cancel');
		player.chooseControl(list).set('prompt','选择弃置一种花色的手牌').set('ai',function(event,player){
			var suit1;
			var val=8;
			for(var i=0;i<list.length-1;i++) {
				var cards=player.getCards('h',{suit:list[i]});
				var num=0;
				for(var j=0;j<cards.length;j++){
					var temp=get.value(cards[j],player,'raw');
					if(temp>0)
					num+=get.value(cards[j],player,'raw');
				}
				num/=cards.length;
				if(num<val) {
					suit1=list[i];
					val=num;
				}
			}
			return suit1;
		});
		"step 1"
		if(result.control&&result.control!='cancel'){
			player.popup(get.translation(result.control));
			game.log(player,'选择了'+get.translation(result.control));
			event.choice=result.control;
			player.storage.XSxinglue=event.choice;
        }
		else event.finish();
		"step 2"
		var num=player.countCards('h',{suit:player.storage.XSxinglue});
		player.discard(player.getCards('h',{suit:player.storage.XSxinglue}));
		player.draw(num);
		player.storage.XSxinglue=[];
    },
                ai:{
                    order:1,
                    result:{
                        player:2,
                    },
                },
                group:["XSxinglue_suit","XSxinglue_clear"],
                subSkill:{
                    suit:{
                        trigger:{
                            player:"phaseDrawEnd",
                        },
                        forced:true,
                        popup:false,
                        init:function (player){
               player.storage.XSxinglue_suit=0;
            },
                        filter:function (event,player){
                return player.countCards('h');
            },
                        content:function (){
                var cards=player.getCards('h');
                var suits=[];
                for(i=0;i<cards.length;i++){
                    if(!suits.contains(get.suit(cards[i]))){
                        suits.push(get.suit(cards[i]));
                    }
                }
                player.storage.XSxinglue_suit+=suits.length;
            },
                        sub:true,
                    },
                    clear:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return player.storage.XSxinglue_suit>0;
            },
                        content:function (){
                var cards=player.getCards('h');
                var suits=[];
                for(i=0;i<cards.length;i++){
                    if(!suits.contains(get.suit(cards[i]))){
                        suits.push(get.suit(cards[i]));
                    }
                }
                if(suits.length==player.hp) {
                    player.draw(2);
                }
                player.storage.XSxinglue_suit=0;
            },
                        sub:true,
                    },
                },
            },
            "XSbencao":{
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='tao';
    },
                forced:true,
                content:function (){
        "step 0"
        if(trigger.card.number>=10){
            player.draw(2);
            event.finish();
        }
        else {
            if(trigger.card.number<10&&trigger.card.number>5){
                player.recover();
                event.finish();
            }
            else{
                if(player.countCards('h')>0) {
                    player.chooseTarget(get.prompt2('XSbencao'),function(card,player,target){
                        return target!=player&&target.countCards('h')>0;
                    },function(target){
                        return -get.attitude(player,target);
                    });
                }
            }
        }
        "step 1"
        if(result.bool){
            event.target1=result.targets[0];
            var hs=player.getCards('h');
            if(hs.length){
                var minval=get.value(hs[0]);
                for(var i=1;i<hs.length;i++){
                    var val=get.value(hs[i],player,'raw');
                    if(val<minval){
                        minval=val;
                    }
                }
                player.chooseCardButton('交换对方1张手牌',event.target1.getCards('h')).ai=function(button){
                    var player=_status.event.player;
                    return get.value(button.link,player,'raw')-minval;
                }
            }
            else{
                player.viewHandcards(event.target1);
                event.finish();
            }
        }
        else event.finish();
        'step 2'
        if(result.bool){
            event.card=result.links[[0]];
            player.chooseCard('h',true,'用一张手牌替换'+get.translation(event.card)).ai=function(card){
                return -get.value(card);
            };
        }
        else{
            event.finish();
        }
        'step 3'
        if(result.bool){
            player.gain(event.card,event.target1);
            event.target1.gain(result.cards,player);
            player.$giveAuto(result.cards,event.target1);
            event.target1.$giveAuto(event.card,player);
            game.log(player,'与',event.target1,'交换了一张手牌');
        }
    },
            },
            "XSwanbi":{
                trigger:{
                    target:["shunshouBegin","guoheBegin"],
                },
                filter:function (event,player){
        if(player.storage.XSlunke.length>0) {
            return game.hasPlayer(function(current){
                return get.distance(player,current,'attack')<=1;
            });
        }
        return false;
    },
                content:function (){
        'step 0'
        player.chooseCardButton(get.prompt('XSwanbi',trigger.player),player.storage.XSlunke);
        'step 1'
        if(result.bool){
            player.logSkill('XSwanbi',trigger.player);
            player.storage.XSlunke.remove(result.links[0]);
            player.$throw(result.links);
            game.cardsDiscard(result.links);
            player.syncStorage('XSlunke');
            player.chooseTarget(get.prompt2('XSwanbi'),true,function(card,player,target){
              return target!=player&&target!=trigger.player&&get.distance(player,target,'attack')<=1;
            },function(target){
              return -get.attitude(player,target);
            });
        }
        else event.finish();
        'step 2'
        if(result.bool){
          trigger.target = result.targets[0];
        }
        else event.finish();
    },
            },
            "XSheshi":{
                charlotte:true,
                mark:true,
                marktext:"势",
                intro:{
                    name:"合势",
                    content:"出牌阶段限3次，你可以将1张武器或防具手牌置于1名其他角色装备区里（无法替换原装备），然后摸1张牌。",
                },
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                usable:3,
                filter:function (event,player){
        return player.countCards('h',{subtype:'equip1'})>0||player.countCards('h',{subtype:'equip2'})>0;
    },
                filterCard:function (card){
        return get.subtype(card)=='equip1'||get.subtype(card)=='equip2';
    },
    check:function (card){
		var player=_status.currentPhase;
        if(player.countCards('he',{subtype:get.subtype(card)})>1){
            return 11-get.equipValue(card);
        }
        return 6-get.value(card);
    },
                filterTarget:function (card,player,target){
        if(target.isMin()) return false;
        var type=get.subtype(card);
        return player!=target&&target.isEmpty(type);
    },
                content:function (){
        target.equip(cards[0]);
        player.draw();
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
                    threaten:1.3,
                },
            },
            "XSfalun":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    global:"gameStart",
                    player:["enterGame"],
                },
                forced:true,
                group:["XSfalun1","XSfalun2"],
                content:function (){
        player.addSkill('XSzhifa');
        player.addSkill('XSyongshu');
        player.addSkill('XSheshi');
    },
            },
            "XSfalun1":{
                prompt:"游戏开始你获得法、术、势标记，出牌阶段限一次，或当拥有法、术、势标记的角色死亡时，你可以转移法、术、势。",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(!game.hasPlayer(function(current){
            return current.hasSkill('XSzhifa')||current.hasSkill('XSyongshu')||current.hasSkill('XSheshi');
        })) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        if(ui.selected.targets.length==1){
            return true;
        }else{
            return target.hasSkill('XSzhifa')||target.hasSkill('XSyongshu')||target.hasSkill('XSheshi');
        }
    },
                targetprompt:["移走","得到"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        'step 0'
        var list=[];
        if(targets[0].hasSkill('XSzhifa')){
            list.push('法');
        }
        if(targets[0].hasSkill('XSyongshu')){
            list.push('术');
        }
        if(targets[0].hasSkill('XSheshi')){
            list.push('势');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','请选择要移动的标记');
        }
        'step 1'
        if(result.control=='法'){
            targets[0].removeSkill('XSzhifa');
            targets[1].addSkill('XSzhifa');
        }
        else{
            if(result.control=='术') {
                targets[0].removeSkill('XSyongshu');
                targets[1].addSkill('XSyongshu');
            }
            else {
                targets[0].removeSkill('XSheshi');
                targets[1].addSkill('XSheshi');
            }
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return get.attitude(player,target)<0?-999:-3;
                }
                else{
                    return target.countCards('h');
                }
            },
                    },
                    expose:0.4,
                    threaten:2,
                },
            },
            "XSfalun2":{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                direct:true,
                silent:true,
                popup:false,
                filter:function (event,player){
        return event.player.hasSkill('XSzhifa')||event.player.hasSkill('XSyongshu')||event.player.hasSkill('XSheshi');
    },
                content:function (){
        "step 0"
        player.logSkill('XSfalun');
        "step 1"
        if(trigger.player.hasSkill('XSzhifa')){
            player.chooseTarget('请将'+get.translation(trigger.player)+'的「法」交给一名角色',true).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else event.goto(2);
        "step 2"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'fire');
            target.addSkill('XSzhifa');
            game.delay();
        }
        "step 3"
        if(trigger.player.hasSkill('XSyongshu')){
            player.chooseTarget('请将'+get.translation(trigger.player)+'的「术」交给一名角色',true).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else event.goto(4);
        "step 4"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'water');
            target.addSkill('XSyongshu');
            game.delay();
        }
        "step 5"
        if(trigger.player.hasSkill('XSheshi')){
            player.chooseTarget('请将'+get.translation(trigger.player)+'的「势」交给一名角色',true).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else event.finish();
        "step 6"
        if(result.bool&&result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'green');
            target.addSkill('XSheshi');
            game.delay();
        }
    },
            },
            "XSshuonan":{
                audio:"ext:血色衣冠:2",
                mod:{
                    maxHandcard:function (player,num){
            if(!player.hasSkill('XSzhifa')) return num+1;
            return num;
        },
                    globalTo:function (from,to,current){
            if(!to.hasSkill('XSyongshu')) return current+1;
            return current;
        },
                },
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                filter:function (event,player){
        return !player.hasSkill('XSheshi');
    },
                content:function (){
        trigger.num++;
    },
            },
            "XSgufen":{
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                priority:2,
                check:true,
                filter:function (event,player){
        if(player.hasSkill('XSzhifa')&&player.hasSkill('XSyongshu')&&player.hasSkill('XSheshi')){
            return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        player.draw();
        'step 1'
        if(Array.isArray(result)&&result.length){
            var gained=result[0];
            if(lib.filter.cardEnabled(gained,target)){
                var next=player.chooseToUse();
                next.filterCard=function(card){
                    return card==gained;
                };
                next.prompt='是否使用'+get.translation(gained)+'？';
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
                    threaten:1.3,
                },
            },
            "XSlianbing":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                usable:1,
                content:function (){
        'step 0'
        event.cards=[];
        event.getResultString=function(str){
            switch(str){
                case '武器':return 'equip1';
                case '防具':return 'equip2';
                case '防御马':return 'equip3';
                case '攻击马':return 'equip4';
            }
            return str;
        };
        'step 1'
        player.chooseControl('武器','防具','防御马','攻击马',function(){
            if(Math.random()<0.3) return '武器';
            if(Math.random()<0.6&&Math.random()>=0.3) return '防具';
            if(Math.random()<0.8&&Math.random()>=0.6) return '防御马';
            return '攻击马'
        }).set('prompt','请选择想要获得的装备牌类型');
        'step 2'
        event.control=event.getResultString(result.control);
        var card=get.cardPile(function(card){
            return get.subtype(card)==event.control;
        });
        if(card){
            player.gain(card,'gain2','log');
        }
        else {
            player.draw();
        }
    },
                ai:{
                    order:8,
                    result:{
                        player:3,
                    },
                },
            },
            "XSyaosheng":{
                audio:"ext:血色衣冠:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='heart';
    },
                viewAsFilter:function (player){
        return player.countCards('h',{suit:'heart'})>0;
    },
                viewAs:{
                    name:"tao",
                },
                position:"he",
                prompt:"将一张红桃牌当桃使用",
                check:function (card){return 15-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('he',{color:'red'})>0;
        },
                    threaten:1.3,
                    save:true,
                    respondTao:true,
                    basic:{
                        order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep')) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
                group:["XSyaosheng_du"],
                subSkill:{
                    du:{
                        trigger:{
                            player:"duBegin",
                        },
                        forced:true,
                        content:function (){
                player.draw();
            },
                        ai:{
                            nodu:true,
                            usedu:true,
                        },
                        sub:true,
                    },
                },
            },
            "XSquji":{
    enable:"phaseUse",
	filter:function (event,player){
		return !player.hasSkill('XSquji_temp');
	},
    filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')&&!target.hasSkill('XSquji_mark');
    },
    content:function (){
        'step 0'
		target.addTempSkill('XSquji_mark');
        player.viewCards('祛疾',target.getCards('h'));
        event.cards=target.getCards('h',function(card){
            return card.name=='du';
        });
        if(!event.cards.length){
            event.finish();
        }
        'step 1'
		var num=target.countCards('h','du');
		target.discard(target.getCards('h','du'));
		target.recover(num);
		target.draw(num);
		if(num!=0) {
			player.addTempSkill('XSquji_temp','phaseUseAfter');
		}
    },
	subSkill:{
        mark:{
        },
    },
    ai:{
        result:{
            target:function (player,target){
                return target.countCards('h');
            },
        },
        order:10,
        expose:0.1,
    },
            },
            "XSquji_temp":{
            },
            "XSlunke":{
                init:function (player){
        player.storage.XSlunke=[];
    },
                marktext:"论",
                intro:{
                    content:"cards",
                },
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return player.canCompare(target);
    },
                selectTarget:function (){
        var player=_status.event.player
        return [1,Math.min(3,player.countCards('h'))];
    },
                multitarget:true,
                multiline:true,
                group:["XSlunke_win"],
                content:function (){
        for(i=0;i<targets.length;i++) {
            player.chooseToCompare(targets[i]).callback=lib.skill.XSlunke.callback;
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return -0.5;
                var num=0;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=8&&get.value(hs[i])<7){
                        num++
                    }
                }
                if(num<2) return 0;
                return -1;
            },
                    },
                    order:9,
                },
            },
            "XSlunke_win":{
                trigger:{
                    player:["chooseToCompareAfter","compareMultipleAfter"],
                },
                filter:function (event,player){
        if(event.preserve) return false;
        return event.parent.name=='XSlunke';
    },
                forced:true,
                content:function (){
        if(trigger.card1.number>=trigger.card2.number) {
            player.draw();
        }
        else {
            trigger.target.$give(trigger.card2,player);
            trigger.target.lose(trigger.card2,ui.special,'toStorage');
            player.storage.XSlunke.push(trigger.card2);
            player.markSkill('XSlunke');
            player.syncStorage('XSlunke');
        }
    },
            },
            "XSxianghe":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    global:"phaseDiscardAfter",
                },
                filter:function (event,player){
        if(event.player!=player&&event.player.isIn()&&event.cards&&event.cards.length>0) {
            return player.storage.XSlunke.length>0
        }
        return false;
    },
                frequent:"check",
                check:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].name=='du') return false;
        }
        return event.cards.length>1&&get.attitude(event.player,player)>0;
    },
                content:function (){
        'step 0'
        event.cards=trigger.cards;
        if(trigger.delay==false) game.delay();
        player.chooseCardButton(get.prompt('XSxianghe',trigger.player),player.storage.XSlunke);
        "step 1"
        if(result.bool){
            player.logSkill('XSxianghe',trigger.player);
            player.storage.XSlunke.remove(result.links[0]);
            player.$throw(result.links);
            game.cardsDiscard(result.links);
            player.syncStorage('XSlunke');
            var num=event.cards.length;
            player.gain(trigger.cards,'log');
            player.$gain2(trigger.cards);
            player.chooseCard('he',num,'请选择需要交给'+get.translation(trigger.player)+'的牌').set('ai',function(card){
                var player=_status.event.player;
                var trigger=_status.event.getTrigger();
                if(get.attitude(trigger.player,player)>0){
                    return get.value(card);
                }
                else{
                    return -get.value(card);
                }
            });
        }
        else event.finish();
        "step 2"
        if(result.bool){
            player.$give(result.cards,trigger.player);
            trigger.player.gain(result.cards);
        }
    },
            },
            "XSlingzhi":{
	trigger:{player:'damageBefore'},
	forced:true,
	audio:2,
	priority:999,
	content:function(){
		trigger.cancel();
		player.loseHp(trigger.num);
	},
	group:["XSlingzhi_trick"],
	subSkill:{
        trick:{
			sub:true,
			mod:{
				targetEnabled:function (card,player,target,now){
					if(card.name=='shengdong'||card.name=='jiedao') return false;
				},
			},
			trigger:{
				target:"useCardToBefore",
			},
			forced:true,
			priority:100,
			filter:function (event,player){
				return (event.card.name=='shengdong'||event.card.name=='jiedao');
			},
			content:function (){
				trigger.cancel();
			},
        },
    },
            },
            "XSyanshi":{
                enable:"phaseUse",
                usable:3,
                filter:function (event,player){
        return player.countCards('h')&&!player.hasSkill('XSyanshi_temp');
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')&&get.distance(player,target,'attack')<=1;
    },
                content:function (){
        'step 0'
        event.target1=target;
        player.chooseControl('牌堆顶','牌堆底','cancel').ai=function(event){
            if(Math.random()<0.6) return '牌堆顶';
            return '牌堆底';
        };
        'step 1'
        if(result.control=='牌堆顶'){
            event.cards=get.cards();
            player.showCards(event.cards);
            if(get.type(event.cards[0])!='basic') {
                player.useCard({name:'huogong'},event.target1,false);
            }
            else player.addTempSkill('XSyanshi_temp');
            game.cardsDiscard(event.cards);
        }
        else{
			if(result.control=='牌堆底') {
				event.cards=get.bottomCards()[0];
				player.showCards(event.cards);
				if(get.type(event.cards)!='basic') {
					player.useCard({name:'huogong'},event.target1,false);
				}
				else player.addTempSkill('XSyanshi_temp');
				game.cardsDiscard(event.cards);
			}
			else event.finish();
        }
    },
                ai:{
                    order:4,
                    result:{
                        player:0,
                        target:function (player,target){
                if(get.damageEffect(target,player,player,'fire')>0) return -2;
                return -1;
            },
                    },
                    basic:{
                        order:4,
                        value:[3,1],
                        useful:1,
                    },
                    wuxie:function (target,card,player,current,state){
            if(get.attitude(current,player)>=0&&state>0) return false;
        },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                    },
                },
                subSkill:{
                    temp:{
                        sub:true,
                    },
                },
            },
            "XSshenhuo":{
	trigger:{
		source:"damageBefore",
	},
	filter:function (event,player){
        return !event.nature;
    },
	logTarget:"player",
	priority:-1,
	check:function (event,player){
		if(!event.player.hasSkillTag('nofire')) return true;
    },
	content:function (){
		trigger.nature='fire';
	},
	group:["XSshenhuo_defend"],
    subSkill:{
        defend:{
			sub:true,
			trigger:{
				player:"damageBefore",
			},
			filter:function (event,player){
				return event.nature=='fire';
			},
			priority:99,
			check:function (event,player){
				if(!player.hasSkillTag('nofire')) return true;
			},
			content:function (){
				trigger.cancel();
			},
			ai:{
				nofire:true,
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'fireDamage')) return 0;
					}
				}
			}
        },
    },
            },
            "XSwohu":{
                locked:true,
                trigger:{
                    source:"damageEnd",
                },
                priority:2,
                logTarget:"player",
                filter:function (event,player){
        if(event.nature=='fire'&&player.countCards('h')&&event.player.isAlive()) {
            return event.card&&event.notLink();
        }
        return false;
    },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                content:function (){
        "step 0"
        var num=player.maxHp-player.hp;
        if(_status.currentPhase==player&&num==0&&!player.hasSkill('XSwohu_draw')) {
            player.addTempSkill('XSwohu_draw',{player:'phaseBegin'});
            event.finish();
        }
        else {
            var next=player.chooseToDiscard(get.prompt('XSwohu'),'对'+get.translation(trigger.player)+'造成额外伤害',[1,num],'h',true);
            next.logSkill='XSwohu';
            next.set('ai',function(card){
                var player=_status.event.player;
                var trigger=_status.event.getTrigger();
                if(get.attitude(player,trigger.player)<0){
                    return 10-get.value(card)
                }
                return -1;
            });
        }
        "step 1"
        if(result.bool){
            var num1=result.cards.length;
            trigger.player.damage(num1,'fire',player);
        }
    },
            },
            "XSxiaocheng":{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return !event.nature&&!player.hasSkill('XSxiaocheng_judge');
    },
                check:function (event,player){
        return true;
    },
                frequent:true,
                content:function (){
        player.addTempSkill('XSxiaocheng_judge',{player:'phaseDrawEnd'});
        player.addTempSkill('XSxiaocheng_discard',{player:'phaseEnd'});
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(!get.tag(card,'natureDamage')) return [1,0];
            },
                    },
                },
                subSkill:{
                    judge:{
                        trigger:{
                            player:["phaseJudgeBefore"],
                        },
                        direct:true,
                        content:function (){
                trigger.cancel();
            },
                        sub:true,
                    },
                    discard:{
                        trigger:{
                            player:["phaseDiscardBefore"],
                        },
                        direct:true,
                        content:function (){
                trigger.cancel();
            },
                        sub:true,
                    },
                },
            },
            "XSwohu_draw":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        player.draw()
    },
            },
            "XSbenxi":{
	"prompt2":function (event,player){
        if(player.storage.XSbenxi==true){
			return '是否进行1次判定，若结果不小于7你获得'+get.translation(event.target)+'1张手牌';
        }
        else if(player.storage.XSbenxi==false){
			return '是否进行1次判定，若结果不大于7你对'+get.translation(event.player)+'造成1点伤害';
        }
    },
	trigger:{
		target:"useCardToTargeted",
		player:"useCardToPlayered",
	},
	filter:function (event,player){
		if(!event.card||!event.card.name=='sha') return false;
		if(event.player!=player&&player.storage.XSbenxi==false) return true;
		if(event.player==player&&player.storage.XSbenxi==true) return true;
		return false;
	},
	check:function (event,player){
		if(player.storage.XSbenxi==false) {
			return get.attitude(player,event.player)<0;
		}
		else if(player.storage.XSbenxi==true) {
			return get.attitude(player,event.target)<0;
		}
	},
	content:function(){
		"step 0"
		if(player.storage.XSbenxi==true) {
			player.storage.XSbenxi=false;
			player.unmarkSkill("XSbenxi_gong");
			player.markSkill("XSbenxi_shou");
			player.judge(function(card){
				if(card.number>=7) return 3;
				return -3;
			});
		}
		else event.goto(2);
		"step 1"
		if(result.bool==true){
			player.gainPlayerCard('h',trigger.target);
		}
		event.finish();
		"step 2"
		if(player.storage.XSbenxi==false) {
			player.storage.XSbenxi=true;
			player.unmarkSkill("XSbenxi_shou");
			player.markSkill("XSbenxi_gong");
			player.judge(function(card){
				if(card.number<=7) return 3;
				return -3;
			});
		}
		else event.finish();
		"step 3"
		if(result.bool==true){
			trigger.player.damage(player);
		}
	},
	group:["XSbenxi_gong","XSbenxi_shou","XSbenxi_start"],
	subSkill:{
		gong:{
			marktext:"攻",
			intro:{
				content:function(storage,player,skill){
					return '攻：当你的【杀】指定目标时可以进行1次判定，若结果不小于7你获得其1张手牌';
				},
			},
			sub:true,
		},
		shou:{
			intro:{
				content:function(storage,player,skill){
					return '守：你被指定为【杀】的目标时可以进行1次判定，若结果不大于7你对其造成1点伤害';
				},
			},
			marktext:"守",
			sub:true,
		},
		start:{
			trigger:{
				global:"gameDrawAfter",
			},
			forced:true,
			content:function (){
				'step 0'
				player.chooseControl('攻','守').ai=function(event){
					if(Math.random()<0.6) return '攻';
					return '守';
				};
				'step 1'
				if(result.control=='攻'){
					player.storage.XSbenxi=true;
					player.unmarkSkill("XSbenxi_shou");
					player.markSkill("XSbenxi_gong");
				}
				else{
					player.storage.XSbenxi=false;
					player.unmarkSkill("XSbenxi_gong");
					player.markSkill("XSbenxi_shou");
				}
			},
		},
	},
            },
            "XSwangmen":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                content:function (){
        trigger.num++;
    },
                ai:{
                    threaten:1.3,
                },
                group:["XSwangmen_give"],
                subSkill:{
                    give:{
                        trigger:{
                            player:"phaseDrawEnd",
                        },
                        popup:false,
                        filter:function (event){
                return event.cards&&event.cards.length;
            },
                        check:function (event,player){
                if(player.hasFriend()) return true;
                return false;
            },
                        content:function (){
                "step 0"
                event.cards=trigger.cards.slice(0);
                var num=event.cards.length;
                player.chooseCardTarget({
                    filterCard:function(card){
                        return _status.event.getParent().cards.contains(card);
                    },
                    selectCard:[1,num],
                    filterTarget:function(card,player,target){
                        return player!=target;
                    },
                    ai1:function(card){
                        if(card.name=='du') return 20;
                        return (_status.event.player.countCards('h')-_status.event.player.hp);
                    },
                    ai2:function(target){
                        var att=get.attitude(_status.event.player,target);
                        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                            return 1-att;
                        }
                        return att-4;
                    },
                    forced:true,
                    prompt:'请选择要给出的卡牌'
                });
                "step 1"
                if(result.bool){
                    if(result.cards.length==event.cards.length) {
                        player.addTempSkill('XSwangmen_temp');
                    }
                    player.line(result.targets,'green');
                    result.targets[0].gain(result.cards,player);
                    player.$give(result.cards.length,result.targets[0]);
                    game.delay(0.7);
                }
            },
                        sub:true,
                    },
                },
            },
            "XSwangmen_temp":{
            },
            "XSdongshan":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function (event,player){
        return player.hasSkill('XSwangmen_temp');
    },
                check:function (event,player){
        return player.isDamaged();
    },
                content:function (){
        trigger.cancel();
        var num=player.maxHp-player.hp+3;
        player.draw(num);
        player.addTempSkill('XSdongshan_temp',{player:'phaseUseBefore'});
    },
            },
            "XSdongshan_temp":{
                trigger:{
                    player:["phaseDiscardBefore","phaseJudgeBefore","phaseDrawBefore"],
                },
                direct:true,
                content:function (){
        trigger.cancel();
    },
            },
            "XSyisheng":{
                mark:true,
                marktext:"医",
                init:function (player){
        player.storage.XSyisheng=2;
    },
                intro:{
                    content:function (storage){
            return '当前值：'+storage;
        },
                },
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        if(typeof player.storage.XSyisheng=='boolean'&&player.storage.XSyisheng==true) return false;
        return true;
    },
                content:function (){
        player.storage.XSyisheng+=1;
        player.syncStorage('XSyisheng');
    },
                group:["XSyisheng_tao"],
                subSkill:{
                    tao:{
                        priority:6,
                        trigger:{
                            global:"dying",
                        },
                        filter:function (event,player){
                return event.player.hp<=0&&player.storage.XSyisheng>2;
            },
                        check:function (event,player){
                return get.attitude(player,event.player)>0;
            },
                        content:function (){
                player.storage.XSyisheng -=3;
                player.syncStorage('XSyisheng');
                trigger.player.useCard({name:'tao'},trigger.player);
            },
                        ai:{
                            threaten:1.3,
                            expose:0.2,
                        },
                        sub:true,
                    },
                },
            },
            "XSlizhu":{
                enable:"phaseUse",
                skillAnimation:true,
                animationStr:"立著",
                animationColor:"gray",
				derivation:['XSbinglun','XSyaolue'],
                filter:function (event,player){
        return player.storage.XSyisheng>7;
    },
                content:function (){
        'step 0'
        player.draw(2);
        player.recover();
        player.storage.XSyisheng-=8;
        player.syncStorage('XSyisheng');
        'step 1'
        var list=[];
        if(!player.hasSkill('XSbinglun')){
            list.push('XSbinglun');
        }
        if(!player.hasSkill('XSyaolue')){
            list.push('XSyaolue');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        else {
            player.draw();
            event.finish();
        }
        'step 2'
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    order:3,
                    threaten:1.2,
                    result:{
                        player:function (player){
                var num=player.maxHp-player.hp;
                if(num>=1) return 10;
                return 0;
            },
                    },
                },
            },
            "XStiandao_mark1":{
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event){
        if(event.nature!='thunder') return true;
        return false;
    },
                mark:true,
                marktext:"天",
                forced:true,
                content:function (){
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    nodamage:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'damage')&&!get.tag(card,'thunderDamage')) return [0,0];
            },
                    },
                },
                intro:{
                    content:"免疫除雷属性以外的伤害",
                },
            },
            "XStiandao_mark2":{
                trigger:{
                    player:"damageBegin",
                },
                mark:true,
                marktext:"天",
                intro:{
                    content:"受到火伤害+1，受到雷伤害时弃置2张牌",
                },
                forced:true,
                filter:function (event){
        return event.nature;
    },
                content:function (){
        if(trigger.nature=='fire'){
            trigger.num++;
        }
        if(trigger.nature=='thunder'){
            player.chooseToDiscard(2,true);
        }
    },
                ai:{
                    threaten:3,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'fireDamage')) return 1.5;
                if(get.tag(card,'thunderDamage')) return 1.5;
            },
                    },
                },
            },
            "XSlaoyi":{
                mod:{
                    maxHandcard:function (player,num){
            return Math.ceil(player.hp/2);
        },
                },
            },
            "XSyingxu_temp":{
                mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
                },
            },
            "XStiandao_mark3":{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event){
        return event.num>0;
    },
                forced:true,
                content:function (){
        player.draw(trigger.num);
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            "XSwangchou":{
                audio:"ext:血色衣冠:2",
    trigger:{
        player:"damageEnd",
    },
    filter:function (event,player){
        return (event.source!=undefined&&event.num>0);
    },
    check:function (event,player){
        return (get.attitude(player,event.source)<=0);
    },
    logTarget:"source",
    content:function (){
        "step 0"
        event.num=trigger.num;
        "step 1"
		player.chooseTarget(get.prompt2('XSwangchou'),function(card,player,target){
			var trigger=_status.event.getTrigger();
            return player!=target&&trigger.source!=target;
        }).ai=function(target){
			var player=_status.event.player;
			var att=get.attitude(player,target);
			if(att>0&&target.countCards('j')) return att;
            return -att;
        }
        "step 2"
		if(result.bool) {
			event.target1=result.targets[0];
			event.target1.chooseToUse({name:'sha'},trigger.source,-1,'对'+get.translation(trigger.source)+'使用1张杀，或令'+get.translation(player)+'弃置你区域内的1张牌').set('targetRequired',true);
		}
		else{
            event.finish();
        }
        "step 3"
		if(result.bool==false&&event.target1.countCards('ej')>0){
			player.discardPlayerCard(event.target1,'ej',true);
		}
		"step 4"
		event.num--;
        if(event.num>0){
            player.chooseBool(get.prompt2('XSwangchou'));
        }
        else{
            event.finish();
        }
		"step 5"
        if(result.bool){
            player.logSkill('XSwangchou',trigger.source);
            event.goto(1);
        }
		else{
            event.finish();
        }
    },
    ai:{
        "maixie_defend":true,
        expose:0.4,
    },
            },
            "XSxianji":{
                trigger:{
                    player:"phaseJudgeBegin",
                },
                filter:function (event ,player){
        return player.countCards('j')>0;
    },
                forced:true,
                content:function (){
        var num=player.countCards('j')+1;
        player.discard(player.getCards('j'));
        player.draw(num);
        player.addTempSkill('XSlianji');
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='delay'&&target.countCards('j')==0) return 0.5;
            },
                    },
                },
            },
            "XSjiebing":{
                init:function (player){
        player.storage.XSjiebing=0;
    },
                trigger:{
                    global:"loseEnd",
                },
                audio:"ext:血色衣冠:2",
                locked:true,
                logTarget:"player",
                check:function (event,player){
        return true;
    },
                filter:function (event,player){
        if(player.storage.XSjiebing>=3) return false;
        if(get.distance(player,event.player,'attack')<=1&&_status.currentPhase!=event.player&&player!=event.player) {
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].original=='h'&&event.player.isAlive()&&!event.cards[i].isInPile()) return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        event.player1=trigger.player;
        "step 1"
        event.player1.chooseControl().set('choiceList',['令'+get.translation(player)+'摸1张牌','弃置1张牌']).set('ai',function(event,player){
            var att=get.attitude(event.player1,player);
            if(att<0&&event.player1.countCards('he')>2) return 1;
            return 0;
        });
        "step 2"
        if(result.index==0||event.player1.countCards('he')==0){
            player.draw();
        }
        else{
            event.player1.chooseToDiscard(1,'he',true);
        }
    },
                ai:{
                    threaten:1.1,
                },
                group:["XSjiebing_clear"],
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        direct:true,
                        content:function (){
                player.storage.XSjiebing=0;
            },
                        sub:true,
                    },
                },
            },
            "XSwangzuo":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                filterTarget:true,
                check:function (card){
        return 8-get.value(card);
    },
                position:"h",
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                discard:false,
                lose:false,
                prepare:"give",
                content:function (){
        player.lose(cards,ui.special,'toStorage');
        if(target.hasSkill('XSwangzuo_mark')&&target.storage.XSwangzuo_mark){
            target.storage.XSwangzuo_mark.push(cards[0]);
            target.syncStorage('XSwangzuo_mark');
            target.markSkill('XSwangzuo_mark');
        }
        else{
            target.storage.XSwangzuo_mark=cards.slice(0);
            target.syncStorage('XSwangzuo_mark');
            target.addSkill('XSwangzuo_mark');
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                return 10;
            },
                    },
                },
                group:["XSwangzuo_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            player:["phaseZhunbeiBegin","dieBegin"],
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XSwangzuo_mark')){
                        var cards=game.players[i].storage.XSwangzuo_mark;
                        game.cardsDiscard(cards);
                        delete game.players[i].storage.XSwangzuo_mark;
                        game.players[i].removeSkill('XSwangzuo_mark');
                    }
                }
            },
                        sub:true,
                    },
                },
            },
            "XSwangzuo_mark":{
					mod:{
		ignoredHandcard:function (card,player){
			var col=get.color(player.storage.XSwangzuo_mark);
            if(get.color(card)==col){
                return true;
            }
        },
        cardDiscardable:function (card,player,name){
			var col=get.color(player.storage.XSwangzuo_mark);
            if(name=='phaseDiscard'&&get.color(card)==col) return false;
        },
	},
      mark:true,
	marktext:"佐",
    intro:{
        content:"cards",
    },
    trigger:{
        player:"loseEnd",
    },
    audio:2,
    forced:true,
    filter:function (event,player){
		var col=get.color(player.storage.XSwangzuo_mark);
		if(_status.currentPhase!=player) {
			for(var i=0;i<event.cards.length;i++){
				if((event.cards[i].original=='h'||event.cards[i].original=='e')&&get.color(event.cards[i])==col&&player.isAlive()&&event.cards[i].isInPile()) return true;
			}
		}
        return false;
    },
    content:function (){
		player.draw();
    },
    ai:{
        threaten:0.4,
    },
            },
            "XSjindao":{
                enable:"phaseUse",
                usable:1,
                audio:"ext:血色衣冠:2",
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('e');
    },
                content:function (){
        'step 0'
        event.target1=targets[0];
        player.line(event.target1,'green');
        var next=player.chooseButton();
        next.set('createDialog',['是否发动【金刀】，获得'+get.translation(event.target1)+'的一张装备牌？',event.target1.getCards('e')]);
        next.set('ai',function(button){
            return get.buttonValue(button);
        });
        'step 1'
        if(result.bool){
            player.logSkill('XSjindao',event.target1);
            player.gain(result.links[0],event.target1,'give');
        }
        else event.finish();
        'step 2'
        player.chooseTarget(get.prompt('XSjindao'),'令1名其他角色装备1张装备牌',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            var att=get.attitude(player,target)
            return att;
        });
        'step 3'
        if(result.bool){
            event.target2=result.targets[0];
            player.line(event.target2,'green');
            var next=player.chooseButton();
            next.set('createDialog',['是否发动【金刀】，令'+get.translation(event.target2)+'装备1张装备牌？',player.getCards('he',{type:'equip'})]);
            next.set('ai',function(button){
                return get.buttonValue(button);
            });
        }
        else event.finish();
        'step 4'
        if(result.bool){
            var sub=get.subtype(result.links[0]);
            if(!event.target2.isEmpty(sub)) player.draw();
            event.target2.equip(result.links[0]);
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:-1.5,
                    },
                    expose:0.4,
                    threaten:1.1,
                },
            },
            "XSyijiao":{
                trigger:{
                    player:"dieBegin",
                },
                check:function (card){
        return true;
    },
                frequent:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt2('XSyijiao'),function(card,player,target){
            return player!=target;
        }).ai=function(target){
            var player=_status.event.player;
            return get.attitude(player,target);
        };
        "step 1"
        if(result.bool){
            var num=player.countCards('h');
            var target=result.targets[0];
            target.draw(num);
            target.addSkill('XSwangzuo');
            player.logSkill('XSyijiao',target);
			trigger.player.phase();
        }
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 0.2;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(!target.hasFriend()) return;
            },
                    },
                },
            },
            "XSshanmou":{
                trigger:{
                    player:"useCard",
                },
                check:function (card){
        return true;
    },
                frequent:true,
                priority:3,
                filter:function (event){
        return get.type(event.card)=='trick';
    },
                content:function (){
		"step 0"
		player.judge(function(card){
			var sui=get.suit(trigger.card);
			if(get.suit(card)==sui) return 3;
			return -3;
		});
		"step 1"
		if(result.bool==true){
			player.draw(2);
		}
		else {
			var col=get.color(trigger.card);
			if(get.color(result.card)!=col) {
				player.draw();
			}
		}
    },
                ai:{
                    threaten:1.1,
                    noautowuxie:true,
                },
            },
            "XSyunchou":{
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
        if(event.parent.name=='XSyunchou') return false;
        if(player.storage.XSyunchou>=1) return false;
        if(_status.currentPhase!=player) return false;
        if(event.parent.parent.name!='phaseUse') return false;
        if(!event.targets||!event.card) return false;
        if(get.info(event.card).complexTarget) return false;
        if(!lib.filter.cardEnabled(event.card,player,event.parent)) return false;
        var type=get.type(event.card);
        if(type!='trick') return false;
        var card=game.createCard(event.card.name,event.card.suit,event.card.number,event.card.nature);
        var targets=event._targets||event.targets;
        for(var i=0;i<targets.length;i++){
            if(!targets[i].isIn()) return false;
            if(!player.canUse({name:event.card.name},targets[i],false,false)){
                return false;
            }
        }
        return true;
    },
                check:function (event,player){
        if(get.tag({name:event.card.name},'norepeat')) return false;
        return true;
    },
                content:function (){
        player.storage.XSyunchou++;
        var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
        player.useCard(card,(trigger._targets||trigger.targets).slice(0));
    },
                ai:{
                    threaten:1.3,
                },
                group:["XSyunchou_clear"],
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        silent:true,
                        content:function (){
                player.storage.XSyunchou=0;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "XSjunei":{
                trigger:{
                    player:["damageEnd"],
                },
                check:function (event,player){
        if(player.hp<2&&!player.countCards('h','tao')&&!player.countCards('h','jiu')) return true;
        return false;
    },
                filter:function (event,player){
        return player.countCards('h')>1;
    },
                content:function (){
        'step 0'
        event.cards=player.getCards('h');
        player.chooseCardTarget({
            filterCard:function(card){
                return _status.event.getParent().cards.contains(card);
            },
            selectCard:[2,Infinity],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
				var att=get.attitude(_status.event.player,target);
				if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
					if(target.sex=='female') return 6-att;
					return 1-att;
				}
				if(target.sex=='female') return att;
				return att-4;
            },
            forced:true,
            prompt:'请选择要给出的卡牌',
        });
        "step 1"
        if(result.bool){
            if(result.targets[0].sex=='female') {
                player.draw();
            }
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards.length,result.targets[0]);
            player.addTempSkill('XSjunei_mark',{player:'phaseDrawBefore'})
            game.delay(0.5);
        }
    },
            },
            "XSjunei_mark":{
                mark:true,
                marktext:"惧",
                intro:{
                    content:"任何带有伤害标签的牌无法指定你为目标",
                },
                mod:{
		targetEnabled:function(card,player,target){
			if(get.tag(card,'damage')) return false;
		},
                },
            },
            "XSquzhu":{
                enable:["chooseToRespond","chooseToUse"],
                filter:function (event,player){
        return _status.currentPhase==player;
    },
                filterCard:function (card,player){
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{color:'red'})) return false;
    },
                prompt:"将一张红色牌当杀使用或打出",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            if(!player.countCards('he',{color:'red'})) return false;
        },
                    respondSha:true,
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
                group:["XSquzhu_sha"],
                subSkill:{
                    sha:{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                return event.card&&event.card.name=='sha'&&_status.currentPhase==player;
            },
                        content:function (){
                player.getStat().card.sha--;
            },
                        sub:true,
                    },
                },
            },
            "XSyangzhan":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                content:function (){
        'step 0'
        event.cards=target.getCards('h',function(card){
            return lib.filter.cardEnabled(card,target);
        });
        if(!event.cards.length){
            event.finish();
        }
        'step 1'
        player.chooseCardButton('选择一张牌使用',event.cards).ai=function(button){
            return get.value(button.link);
        }
        'step 2'
        if(result.bool){
            event.gained=result.links[0];
            player.gain(event.gained,target);
            target.$give(1,player);
            var next=player.chooseToUse();
            next.filterCard=function(card){
                return card==event.gained;
            };
            next.prompt='是否使用'+get.translation(event.gained)+'？';
        }
        else {
            event.finish();
        }
        'step 3'
        if(get.position(event.gained)=='h') {
            player.discard(event.gained);
        }
    },
                ai:{
                    order:3,
                    result:{
                        target:function (target,player){
                return -2;
            },
                    },
                },
            },
            "XSyongguan":{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                content:function (){
		"step 0"
		player.judge(function(card){
			if(get.color(card)=='red') return 3;
			return -3;
		});
		"step 1"
		if(result.bool==true){
			player.chooseTarget(get.prompt('XSyongguan'),'令1名角色摸1张牌',function(card,player,target){
				var trigger=_status.event.getTrigger();
				return target!=trigger.player;
			}).set('ai',function(target){
				var player=_status.event.player;
				var att=get.attitude(player,target)
				return att;
			});
		}
		else {
			player.discardPlayerCard('he',trigger.player);
			event.finish();
		}
		"step 2"
		if(result.bool){
			result.targets[0].draw();
		}
    },
                group:["XSyongguan_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                return event.card&&event.card.name=='sha'&&event.source&&event.source!=player;
            },
                        content:function (){
				"step 0"
				player.judge(function(card){
					if(get.color(card)=='red') return 3;
					return -3;
				});
				"step 1"
				if(result.bool==true){
					player.chooseTarget(get.prompt('XSyongguan'),'令1名角色摸1张牌',function(card,player,target){
						var trigger=_status.event.getTrigger();
						return target!=trigger.source;;
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target)
						return att;
					});
				}
				else {
					player.discardPlayerCard('he',trigger.player);
					event.finish();
				}
				"step 2"
				if(result.bool){
					result.targets[0].draw();
				}
            },
                        sub:true,
                    },
                },
            },
            "XSduoshuo":{
                priority:9,
                trigger:{
                    target:["shaBefore"],
                },
                filter:function (event,player){
        return player.isAlive()&&event.player!=player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                content:function (){
        "step 0"
        if(player.hp>=trigger.player.hp) {
            var equ=trigger.player.getEquip(1);
            if(equ) {
                player.gain(equ,trigger.player,'give');
            }
        }
        "step 1"
        if(player.countCards('h')>=trigger.player.countCards('h')) {
            if(player.canUse('sha',trigger.player)||player.countCards('h','sha')) {
                player.chooseToUse({name:'sha'},trigger.player,-1);
            }
        }
        else event.finish();
    },
                ai:{
                    "maixie_defend":true,
                },
            },
            "XSzhushi":{
                audio:"ext:血色衣冠:2",
 	trigger:{player:'loseEnd'},
	direct:true,
	filter:function(event,player){
		if(_status.currentPhase!=player) return false;
		if(player.storage.XSzhushi){
			return false;
		}
		if(event.cards){
			for(var i=0;i<event.cards.length;i++){
				if(event.cards[i].isInPile()&&get.type(event.cards[i])=='trick') return true;
			}
		}
		return false;
	},
	content:function(){
		if(!player.storage.XSzhushi){
			player.storage.XSzhushi=[];
		}
		for(var i=0;i<trigger.cards.length;i++){
			if(trigger.cards[i].isInPile()&&get.type(trigger.cards[i])=='trick') {
				player.storage.XSzhushi.push(trigger.cards[i]);
				break;
			}
		}
	},
	group:["XSzhushi_phaseout","XSzhushi_gain"],
	subSkill:{
		phaseout:{
			trigger:{player:'loseEnd'},
			direct:true,
			filter:function(event,player){
				if(_status.currentPhase==player) return false;
				if(player.storage.XSzhushi){
					return false;
				}
				if(event.cards){
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].isInPile()&&get.type(event.cards[i])=='basic') return true;
					}
				}
				return false;
			},
			content:function(){
				if(!player.storage.XSzhushi){
					player.storage.XSzhushi=[];
				}
				for(var i=0;i<trigger.cards.length;i++){
					if(trigger.cards[i].isInPile()&&get.type(trigger.cards[i])=='basic') {
						player.storage.XSzhushi.push(trigger.cards[i]);
						break;
					}
				}
			},
		},
		gain:{
			trigger:{
				player:["phaseBefore","phaseAfter"],
			},
			filter:function (event,player){
				return player.storage.XSzhushi;
			},
			direct:true,
			content:function(){
				player.logSkill('XSzhushi');
				player.gain(player.storage.XSzhushi,'gain2');
				delete player.storage.XSzhushi;
			},
			sub:true,
		},
	},
            },
            "XSgonggao":{
                forced:true,
                mark:true,
                marktext:"功",
                trigger:{
                    source:"damageEnd",
                },
                init:function (player){
        player.storage.XSgonggao=2;
    },
                intro:{
                    content:function (storage){
            return '当前值：<span class="bluetext">'+storage+'</span>/10';
        },
                },
                filter:function (event,player){
        if(typeof player.storage.XSgonggao=='boolean'&&player.storage.XSgonggao==true)
            return false;
        if(player.storage.XSgonggao>=10)
            return false;
        return event.num>0;
    },
                content:function (){
        player.storage.XSgonggao+=trigger.num;
        if(player.storage.XSgonggao>10)
            player.storage.XSgonggao=10;
        player.syncStorage('XSgonggao');
    },
                group:["XSgonggao_distance","XSgonggao_zhenzhu"],
                subSkill:{
                    distance:{
                        mod:{
                            globalFrom:function (from,to,current){
                    return current-Math.floor(from.storage.XSgonggao/2);
                },
                        },
                        ai:{
                            threaten:0.8,
                        },
                        sub:true,
                    },
                    zhenzhu:{
                        forced:true,
                        priority:6,
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                return player.maxHp>0&&player.storage.XSgonggao>9;
            },
                        content:function (){
                player.storage.XSgonggao=0;
                player.syncStorage('XSgonggao');
                if(player.maxHp>=2) {
                    player.maxHp-=1;
                }
                if(player.hp>player.maxHp) {
                    player.hp-=1;
                }
                player.update();
            },
                        sub:true,
                    },
                },
            },
            "XSbingxian":{
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(card.name=='bingliang'||card.name=='lebu') return false;
        },
                },
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:100,
                filter:function (event,player){
        return (event.card.name=='bingliang'||event.card.name=='jiedao');
    },
                content:function (){
        trigger.cancel();
    },
            },
            "XSdianbing":{
	mod:{
		globalTo:function (from,to,current){
			if(from.storage.XSdianbing_mark) {
				return current+from.storage.XSdianbing_mark;
			}
			return current;
		},
	},
	group:["XSdianbing_damage","XSdianbing_miss","XSdianbing_lose"],
    subSkill:{
		lose:{
			sub:true,
			trigger:{
				player:"loseHpEnd",
			},
			forced:true,
			content:function (){
				var target=player.getEnemies().randomGet();
				player.line(target);
				if(!target.hasSkill('XSdianbing_mark')) {
					target.addSkill('XSdianbing_mark');
				}
				target.storage.XSdianbing_mark +=1;
				target.syncStorage('XSdianbing_mark');
			},
        },
		miss:{
			sub:true,
			trigger:{
				player:"shaMiss",
			},
			check:function (event,player){
				return get.attitude(player,event.target)<0;
			},
			frequent:true,
			content:function (){
				player.line(trigger.target);
				if(!trigger.target.hasSkill('XSdianbing_mark')) {
					trigger.target.addSkill('XSdianbing_mark');
				}
				trigger.target.storage.XSdianbing_mark +=1;
				trigger.target.syncStorage('XSdianbing_mark');
			},
        },
		damage:{
			sub:true,
			trigger:{
				player:"damageEnd",
			},
			filter:function (event,player){
				return event.source&&event.source!=player;
			},
			check:function (event,player){
				return get.attitude(player,event.source)<0;
			},
			frequent:true,
			content:function (){
				player.line(trigger.source);
				if(!trigger.source.hasSkill('XSdianbing_mark')) {
					trigger.source.addSkill('XSdianbing_mark');
				}
				trigger.source.storage.XSdianbing_mark +=trigger.num;
				trigger.source.syncStorage('XSdianbing_mark');
			},
			ai:{
				maixie:true,
				"maixie_hp":true,
				effect:{
					target:function (card,player,target){
						if(get.tag(card,'damage')) {
							if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
							if(!target.hasFriend()) return;
							return [1,0,1,-1];
						}
					},
				},
			},
        },
        mark:{
            marktext:"兵",
			init:function(player){
				player.storage.XSdianbing_mark=0;
				player.markSkill('XSdianbing_mark');
				player.syncStorage('XSdianbing_mark');
			},
			intro:{
				content:function (storage){
					return '当前值：<span class="bluetext">'+storage+'</span>';
				},
			},
            sub:true,
        },
    },
            },
            "XSandu":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (player){
        return game.hasPlayer(function(current){
            return current.storage.XSdianbing_mark>=3;
        });
    },
                content:function (){
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(players[i].storage.XSdianbing_mark>=3){
                var cards=get.cards(players[i].storage.XSdianbing_mark);
                player.showCards(cards);
                game.delay();
                player.line(players[i],'green');
                var num=1;
                var cards2=[];
                for(var j=0;j<cards.length;j++){
                    if(cards[j].name=='sha'){
                        num++;
                        cards2.push(cards[j]);
                        cards.splice(j--,1);
                    }
                }
                game.cardsDiscard(cards2);
                players[i].damage(num);
                players[i].removeSkill('XSdianbing_mark');
                if(cards.length){
                    player.gain(cards);
                    player.$gain2(cards);
                    game.delay(0.5);
                }
            }
        }
    },
                ai:{
                    threaten:1.1,
                },
            },
            "XSjianbi":{
                audio:"ext:血色衣冠:2",
                forced:true,
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
				var num=4;
		if(player.countUsed('sha')==0) {
			num++;
		}
        player.draw(num);
    },
                group:["XSjianbi_tiaoguo"],
                subSkill:{
                    tiaoguo:{
                        trigger:{
                            player:"phaseDrawBefore",
                        },
                        forced:true,
                        content:function (){
                trigger.cancel();
            },
                        sub:true,
                    },
                },
            },
            "XSbingshen":{
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var check;
        if(!player.canMoveCard(true)){
            check=false;
        }
        else {
            check=game.hasPlayer(function(current){
                return get.attitude(player,current)>0&&current.countCards('j');
            });
            if(!check){
                if(player.countCards('h')>player.hp+1){
                    check=false;
                }
                else if(player.countCards('h',{name:['wuzhong']})){
                    check=false;
                }
                else{
                    check=true;
                }
            }
        }    player.chooseToDiscard(get.prompt('XSbingshen'),'弃置一张手牌并跳过出牌阶段，然后可以移动场上的一张牌',lib.filter.cardDiscardable).set('ai',function(card){
            if(!_status.event.check) return 0;
            return 7-get.value(card);
        }).set('check',check);
        "step 1"
        if(result.bool){
            trigger.cancel();
            player.moveCard();
            player.addTempSkill('XSshoupai2');
        }
        else{
            event.finish();
        }
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            "XSbawang":{
    mod:{
        selectTarget:function (card,player,range){
            if(card.name=='juedou') range[1]+=1;
        },
    },
	audio:2,
	trigger:{
		player:"juedou",
		target:"juedou",
	},
	forced:true,
	filter:function (event,player){
		return event.turn!=player;
	},
	priority:-1,
	content:function (){
		"step 0"
		var next=trigger.turn.chooseToRespond({name:'sha'},'请打出一张杀响应决斗');
		next.set('prompt2','（共需打出2张杀）');
		next.autochoose=lib.filter.autoRespondSha;
		next.set('ai',function(card){
			var player=_status.event.player;
			var trigger=_status.event.getTrigger();
			if(get.attitude(trigger.turn,player)<0&&trigger.turn.countCards('h','sha')>1){
				return get.unuseful2(card);
			}
			return -1;
		});
		"step 1"
		if(result.bool==false){
			trigger.directHit=true;
		}
	},
	ai:{
		result:{
			target:function (card,player,target){
				if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
			},
		},
	},
	group:["XSbawang_one"],
    subSkill:{
        one:{
			sub:true,
			trigger:{
				player:"useCardToPlayered",
			},
			forced:true,
			filter:function (event,player){
				return event.card.name=='juedou'&&event.targets.length==1;
			},
			content:function (){
				player.draw();
			},
        },
    },
            },
            "XSwuqian":{
                skillAnimation:true,
                animationColor:"fire",
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                unique:true,
                juexingji:true,
				derivation:['XSpofu'],
                filter:function (event,player){
        return player.isDamaged()&&!player.storage.XSwuqian&&player.countCards('h','tao')>=1;
    },
                content:function (){
        player.maxHp-=1;
        player.addSkill('XSpofu');
        player.awakenSkill('XSwuqian');
        player.storage.XSwuqian=true;
    },
            },
            "XSpofu":{
                mod:{
                    cardEnabled:function (card,player){
            if(_status.event.skill==undefined&&card.name=='tao') return false;
            if(_status.event.skill==undefined&&card.name=='taoyuan') return false;
            if(_status.event.skill==undefined&&card.name=='du') return false;
        },
                    cardUsable:function (card,player){
            if(_status.event.skill==undefined&&card.name=='tao') return false;
            if(_status.event.skill==undefined&&card.name=='taoyuan') return false;
            if(_status.event.skill==undefined&&card.name=='du') return false;
        },
                    cardRespondable:function (card,player){
            if(_status.event.skill==undefined&&card.name=='tao') return false;
            if(_status.event.skill==undefined&&card.name=='taoyuan') return false;
            if(_status.event.skill==undefined&&card.name=='du') return false;
        },
                    cardSavable:function (card,player){
            if(_status.event.skill==undefined&&card.name=='tao') return false;
            if(_status.event.skill==undefined&&card.name=='taoyuan') return false;
            if(_status.event.skill==undefined&&card.name=='du') return false;
        },
                },
                audio:"ext:血色衣冠:2",
                enable:["chooseToUse"],
                filterCard:{
                    name:["tao","taoyuan","du"],
                },
                viewAs:{
                    name:"juedou",
                },
                check:function (){return 1},
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondSha')&&current<0) return 0.6
            },
                    },
                    order:4,
                    useful:-1,
                    value:-1,
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -1;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -1;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -1;
                }
                return -0.2;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
                group:["XSpofu_damage"],
                subSkill:{
                    damage:{
                        audio:2,
                        forced:true,
                        trigger:{
                            player:["damageEnd"],
                        },
                        filter:function (event,player){
                return event.num>0;
            },
                        content:function (){
 				"step 0"
				event.num=trigger.num;
				"step 1"
				player.judge(function(card){
					if(get.color(card)=='red') return 1;
					return -1;
				});
				"step 2"
				if(result.bool==true){
					var card=get.cardPile('tao');
					if(card){
						player.gain(card,'gain2');
						game.log(player,'从牌堆获得了',card);
					}
					else {
						player.draw();
					}
				}
				else if(trigger.source.countCards('he')) {
					player.discardPlayerCard(trigger.source,'he',true);
				}
				"step 3"
				event.num--;
				if(event.num>0){
					player.chooseBool(get.prompt2('XSpofu'));
				}
				else{
					event.finish();
				}
				"step 4"
				if(result.bool){
					player.logSkill('XSpofu',trigger.source);
					event.goto(1);
				}
				else event.finish();
            },
                        sub:true,
                    },
                },
            },
            "XSjunshen":{
                forced:true,
                priority:9,
                trigger:{
                    target:"useCardToBefore",
                    player:"useCardToPlayered",
                },
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
        player.draw();
    },
                ai:{
                    threaten:0.8,
                },
            },
            "XSciqiu":{
                enable:"phaseUse",
                usable:1,
                audio:"ext:血色衣冠:2",
                filterTarget:function (card,player,target){
        return player!=target&&target.hp>=player.hp;
    },
                content:function (){
        player.damage(target);
        target.damage(player);
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(player.hp>2) return -1;
                if(player.hp==1) return 0;
                return -0.5;
            },
                    },
                    expose:0.4,
                },
            },
            "XSshenjiang":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        "step 0"
        player.judge();
        "step 1"
        switch(get.suit(result.card)){
            case 'heart':player.addTempSkill('XSshenjiang1',{player:'phaseBefore'});break;
            case 'spade':player.addTempSkill('XSshenjiang2',{player:'phaseBefore'});break;
            case 'diamond':player.addTempSkill('XSshenjiang3',{player:'phaseBefore'});break;
            case 'club':player.addTempSkill('XSshenjiang4',{player:'phaseBefore'});break;
        }
    },
            },
            "XSzhaoxue":{
                enable:"chooseToUse",
                mark:true,
                unique:true,
                skillAnimation:true,
                animationStr:"昭雪",
                animationColor:"water",
                init:function (player){
        player.storage.XSzhaoxue=false;
    },
                filter:function (event,player){
        if(event.type!='dying') return false;
        if(player!=event.dying) return false;
        if(player.storage.XSzhaoxue) return false;
        return true;
    },
                content:function (){
        'step 0'
        player.hp=Math.min(1,player.maxHp);
        player.update();
        player.awakenSkill('XSzhaoxue');
        player.storage.XSzhaoxue=true;
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
            if(result.cards[0].name=='du') {
                event.current.loseHp();
            }
            player.gain(result.cards[0]);
            event.current.$give(1,player);
        }
        if(event.current.next!=player){
            event.current=event.current.next;
            game.delay(0.5);
            event.goto(1);
        }
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.storage.XSzhaoxue) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:10,
                    },
                    threaten:function (player,target){
            if(!target.storage.XSzhaoxue) return 0.6;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            "XSshenjiang1":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                content:function (){
        trigger.num++;
    },
                sub:true,
                ai:{
                    damageBonus:true,
                },
            },
            "XSshenjiang2":{
                mod:{
                    selectTarget:function (card,player,range){
            if(_status.currentPhase==player&&card.name=='sha') range[1]+=1;
        },
                },
                sub:true,
            },
            "XSshenjiang3":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return !event.directHit;
    },
                priority:-1,
                content:function (){
        if(typeof trigger.shanRequired=='number'){
            trigger.shanRequired++;
        }
        else{
            trigger.shanRequired=2;
        }
    },
                sub:true,
            },
            "XSshenjiang4":{
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+1;
        },
                },
                enable:["chooseToUse"],
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
        if(!player.countCards('he',{suit:'club'})) return false;
    },
                check:function (card){return 6-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            if(!player.countCards('he',{suit:'club'})) return false;
        },
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
                sub:true,
            },
            "XSbingsheng":{
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"damage",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.num>0&&event.source!=player);
    },
                content:function (){
		"step 0"
		player.judge(function(card){
			if(get.color(card)=='red') return 3;
			return -3;
		});
		"step 1"
		if(result.bool==true){
			player.recover(trigger.num);
		}
		else {
			trigger.source.damage(trigger.num,player);
		}
    },
                ai:{
                    "maixie_defend":true,
                },
            },
            "XSbingtun":{
                audio:"ext:血色衣冠:2",
    mod:{
        maxHandcard:function (player,num){
            return Math.max(num,player.maxHp);
        },
    },
    trigger:{
        global:"damageBegin",
    },
    filter:function (event,player){
		if(event.card&&event.card.name=='sha'&&event.notLink()) {
			return event.source&&event.source!=player&&event.source.countCards('h')<=player.countCards('h');
		}
		return false;
    },
    priority:-1,
	check:function (event,player){
		if(event.player.hasSkillTag('maixie')) return false;
		if(event.player.identity=='zhong'&&player.identity=='zhu') return false;
		if(event.source.hasSkill('XSgonggao')) return true;
		if(event.player.hp<=event.num&&event.player.identity=='fan') return true;
 		return false;
	},
    content:function (){
        trigger.source=player;
    },
            },
            "XShengzheng":{
                trigger:{
                    global:"phaseDrawEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player&&event.player.countCards('h')>=player.countCards('h')&&player.countCards('h')<player.getHandcardLimit();
    },
                content:function (){
        "step 0"
        trigger.player.chooseCard('交给'+get.translation(player)+'一张牌',true).ai=function(card){
            var trigger=_status.event.getTrigger();
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
    },
                ai:{
                    threaten:1.5,
                },
            },
            "XSxuhuai":{
	trigger:{
		player:"gainAfter",
	},
	frequent:true,
	filter:function (event,player){
		if(event.parent.name=='XSxuhuai') return false;
		if(event.parent.parent.name=='phaseDraw') return false;
		return event.cards&&event.cards.length>0
	},
	content:function (){
		"step 0"
		var num=trigger.cards.length;
		var suit=[];
		for(var i=0;i<num;i++) {
			suit.push(get.type(trigger.cards[i]));
		}
		var cards=get.cards(num);
		player.showCards(cards);
		game.delay();
		var cards2=[];
		for(var i=0;i<num;i++){
			if(suit.contains(get.type(cards[i]))){
				cards2.push(cards[i]);
			}
		}
		if(cards2.length) {
			event.cards1=cards2;
			player.chooseTarget(get.prompt('XSxuhuai'),'选择1名其他角色获得'+get.translation(cards2),function(card,player,target){
				return target!=player;
			}).set('ai',function(target){
				var att=get.attitude(_status.event.player,target);
				var num=Math.max(0,target.hp-target.countCards('h'));
				if(att>0) {
					return att+num*2;
				}
				return att;
			});
		}
		"step 1"
		if(result.bool){
			player.logSkill('XSxuhuai',target);
			var target=result.targets[0];
			player.line(target,'blue');
			target.gain(event.cards1);
			target.$gain2(event.cards1);
        }
	},
	ai:{
		expose:0.3,
		effect:{
            target:function (card,player,target){
                if(card.name=='zengbin') return [1,3];
            },
        },
	},
            },
            "XSbingdian":{
    trigger:{
        source:"damageEnd",
        player:"damageEnd",
    },
    forced:true,
    mark:true,
    marktext:"典",
	filter:function (event,player){
        if(typeof player.storage.XSbingdian=='boolean'&&player.storage.XSbingdian==true)
            return false;
        return event.num>0;
    },
    init:function (player){
        player.storage.XSbingdian=0;
        player.markSkill('XSbingdian');
        player.syncStorage('XSbingdian');
    },
    content:function (){
        player.storage.XSbingdian+=trigger.num;
        player.syncStorage('XSbingdian');
    },
    intro:{
        content:function (storage){
            return '当前值：<span class="bluetext">'+storage+'</span>';
        },
    },
	group:["XSbingdian_shu"],
    subSkill:{
		shu:{
			sub:true,
			enable:"phaseUse",
			usable:1,
			filter:function (event,player){
				return player.storage.XSbingdian>7;
			},
			content:function (){
				"step 0"
				player.chooseTarget(get.prompt('XSbingdian'),'令1名其他角色获得技能：兵典',function(card,player,target){
					return player!=target&&!target.hasSkill('XSzhijun');
				}).ai=function(target){
					var player=_status.event.player;
					return get.attitude(player,target)>0;
				}
				"step 1"
				if(result.bool){
					var target=result.targets[0];
					target.addSkill('XSzhijun');
					player.storage.XSbingdian-=8;
					player.syncStorage('XSbingdian');
				}
				else event.finish();
			},
			ai:{
				expose:0.4,
				result:{
					target:function (player,target){
						if(target.countCards('h')>=target.hp) return 1.5;
						return 1;
					},
				},
			},
        },
    },
            },
            "XSzhijun":{
                mod:{
                    ignoredHandcard:function (card,player){
            if(get.color(card)=='black'){
                return true;
            }
        },
                    cardDiscardable:function (card,player,name){
            if(name=='phaseDiscard'&&get.color(card)=='black') return false;
        },
                },
            },
            "XSxushi":{
   mod:{
        targetEnabled:function (card,player,target){
            if(get.subtype(card)=='equip2'){
                return false;
            }
        },
    },
    trigger:{
        player:["chooseToRespondBegin","chooseToUseBegin"],
    },
    filter:function (event,player){
        if(event.responded) return false;
		if(!event.filterCard({name:'shan'},player,event)) return false;
		if(event.name=='chooseToRespond'&&!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
        return true;
    },
    check:function (event,player){
        if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
    content:function (){
        "step 0"
        player.judge('XSxushi',function(card){return (get.suit(card)!='diamond')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:{name:'shan'}}
        }
    },
    ai:{
		respondShan:true,
        effect:{
            target:function (card,player,target,effect){
                if(get.tag(card,'respondShan')) return 0.5;
            },
        },
    },
            },
            "XSjianzao":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                priority:-10,
                filter:function (event){
        return event.num>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('XSjianzao'),'对至多'+get.translation(trigger.num)+'名角色各使用一张不计次数、不限距离的杀',[1,trigger.num],function(card,player,target){
            return player!=target;
        },function(target){
			var player=_status.event.player;
			var eff=get.effect(target,{name:'sha'},player,player);
            var att=get.attitude(_status.event.player,target);
			if(att<0) return eff;
            return -1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('XSjianzao',result.targets);
            var len=result.targets.length;
            for(var i=0;i<len;i++) {
                player.useCard({name:'sha'},result.targets[i],false);
            }
            trigger.num-=len;
        }
        else{
            event.finish();
        }
        "step 2"
        if(trigger.num<=0) game.delay();
    },
                ai:{
                    threaten:1.4,
                    expose:0.3,
                },
            },
            "XSlianji":{
                mod:{
                    cardUsable:function (card,player,num){
            if(typeof num=='number'&&card.name=='sha'){
                return Infinity;
            }
        },
                },
            },
            "XShuoniu":{
                enable:"phaseUse",
                usable:1,
                locked:true,
                filter:function (event,player){
        return player.hp>0;
    },
                filterTarget:true,
                selectTarget:function (){
        var player=_status.event.player
        return [1,Math.min(3,player.maxHp-player.hp+1)];
    },
                multitarget:true,
                multiline:true,
                line:"fire",
                content:function (){
        'step 0'
        player.loseHp();
        var num=Math.min(3,player.maxHp-player.hp+1)-1;
        event.delay=false;
        if(targets.length==1){
            player.draw(num);
        }
        event.delay=true;
        'step 1'
        if(event.delay){
            game.delay();
        }
        'step 2'
        for(var i=0;i<targets.length;i++){
            targets[i].damage('fire');
        }
    },
                ai:{
                    damage:true,
                    threaten:1.5,
                    order:7,
                    result:{
                        target:function (player,target){
                var eff=get.damageEffect(target,player,target,'fire');
                if(target.isLinked()){
                    return eff*2;
                }
                else{
                    return eff/2;
                }
            },
                    },
                },
            },
            "XSpozhu":{
                audio:"ext:血色衣冠:2",
                usable:3,
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
        if(!event.cards||event.cards.length!=1) return false;
        if(_status.currentPhase!=player) return false;
        if(!player.storage.XSpozhu) return false;
        return get.color(player.storage.XSpozhu)!=get.color(event.cards[0]);
    },
                content:function (){
        player.draw();
    },
                intro:{
                    content:"card",
                },
                group:["XSpozhu_use","XSpozhu_clear"],
                subSkill:{
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        priority:-1,
                        silent:true,
                        filter:function (event,player){
                if(!event.cards||event.cards.length!=1) return false;
                if(_status.currentPhase!=player) return false;
                return true;
            },
                        content:function (){
                player.storage.XSpozhu=trigger.cards[0];
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    clear:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        silent:true,
                        priority:10,
                        content:function (){
                player.storage.XSpozhu=null;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "XSgongxin":{
                trigger:{
                    player:"shaMiss",
                },
                priority:-1,
                check:function (event,player){
        return get.attitude(player,event.target)<0&&player.countCards('h')<event.target.countCards('h');
    },
                content:function (){
        'step 0'
        player.swapHandcards(trigger.target);
        'step 1'
        if(player.countCards('h')>trigger.target.countCards('h')) {
            player.chooseToDiscard(1,'he');
        }
        if(player.countCards('h')<trigger.target.countCards('h')) {
            trigger.target.chooseToDiscard(1,'he');
        }
    },
            },
            "XSguanjun":{
                mod:{
                    canBeGained:function (card){
            if(get.position(card)=='e') return false;
        },
                },
            },
            "XSchangqu":{
                mod:{
                    globalFrom:function (from,to,current){
            return current-1;
        },
                },
                audio:"ext:血色衣冠:2",
				derivation:['XSjiqu','XSpoqiu','XSfenglang'],
                trigger:{
                    global:"dieAfter",
                },
                frequent:true,
                content:function (){
        'step 0'
        var list=[];
        if(!player.hasSkill('XSjiqu')){
            list.push('XSjiqu');
        }
        if(!player.hasSkill('XSpoqiu')){
            list.push('XSpoqiu');
        }
        if(!player.hasSkill('XSfenglang')){
            list.push('XSfenglang');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    threaten:1.4,
                },
            },
            "XSbingbi":{
                mod:{
                    targetInRange:function (card,player,target){
            if(target.hasSkill('XSbingbi_mark')){
                return true;
            }
        },
                },
                enable:"phaseUse",
                usable:1,
                position:"he",
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                filterCard:function (card){
        var suit=get.suit(card);
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.suit(ui.selected.cards[i])==suit) return false;
        }
        return true;
    },
                complexCard:true,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                check:function (card){
        if(ui.selected.cards.length>1) return 0;
        return 5-get.value(card);
    },
                selectCard:[1,4],
                content:function (){
        var suits=[];
        for(var i=0;i<cards.length;i++){
            suits.push(get.suit(cards[i]));
        }
        var num=0;
        for(var i=0;i<suits.length;i++){
            if(target.countCards('h',{suit:suits[i]})){
                num++;
            }
        }
		player.viewCards('秉笔',target.getCards('h'));
        if(num>=1) {
            target.addSkill('XSbingbi_mark');
            target.markSkill('XSbingbi_mark');
            target.storage.XSbingbi_mark=1;
            player.storage.XSbingbi=target;
        }
        if(num>=2) {
            player.addTempSkill('XSbingbi_1');
            target.storage.XSbingbi_mark++;
        }
        if(num>=3) {
            player.addTempSkill('XSbingbi_2');
            target.storage.XSbingbi_mark++;
        }
        if(num==4) {
            target.chooseToDiscard(4,'he',true);
            target.storage.XSbingbi_mark++;
        }
    },
                group:["XSbingbi_remove"],
                subSkill:{
                    "1":{
                        mod:{
                            cardUsable:function (card,player,num){
                    if(typeof num=='number'&&game.hasPlayer(function(current){
                        return current.hasSkill('XSbingbi_mark');
                    })) return num+100;
                },
                            playerEnabled:function (card,player,target){
                    if(game.hasPlayer(function(current){
                        return current.hasSkill('XSbingbi_mark');
                    })&&!target.hasSkill('XSbingbi_mark')){
                        var num=player.getCardUsable(card)-100;
                        if(num<=0) return false;
                    }
                },
                        },
                        sub:true,
                    },
                    "2":{
                        mod:{
                            wuxieRespondable:function (card,player,target,current){
                    if(player!=current&&current==player.storage.XSbingbi){
                        return false;
                    }
                },
                        },
                        ai:{
                            norespond:true,
                            skillTagFilter:function (player,tag,arg){
                    if(tag=='norespond'&&Array.isArray(arg)){
                        if(arg[1]==player.storage.XSbingbi) return true;
                    }
                    return false;
                },
                        },
                        sub:true,
                    },
                    remove:{
                        trigger:{
							player:["phaseEnd","dieBegin"],
                        },
                        forced:true,
                        filter:function (event,player){
                return player.storage.XSbingbi;
            },
                        content:function (){
                player.storage.XSbingbi.removeSkill('XSbingbi_mark');
                player.storage.XSbingbi.unmarkSkill('XSbingbi_mark');
                delete player.storage.XSbingbi;
            },
                        sub:true,
                    },
                    mark:{
                        marktext:"笔",
                        intro:{
                            name:"秉笔",
                            content:function (storage){
                    return '拥有花色数：<span class="bluetext">'+storage+'</span>';
                },
                        },
                        sub:true,
                    },
                },
                ai:{
                    order:4,
                    result:{
                        target:function (player,target){
                if(!player.countCards('h','sha')) return 0;
                if(target.countCards('h')<=1&&get.distance(player,target,'attack')<=1) return 0;
                var min=[];
                var num=0;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i]!=player&&player.canUse('sha',players[i],false)){
                        var eff=get.effect(players[i],{name:'sha'},player,player);
                        if(eff>num){
                            min.length=0;
                            min.push(players[i]);
                            num=eff;
                        }
                    }
                }
                for(var i=0;i<min.length;i++){
                    if(get.attitude(player,min[i])>0) return 0;
                    if(min[i].countCards('h')<=1&&get.distance(player,min[i],'attack')<=1) return 0;
                }
                if(min.contains(target)) return -2;
                return 0;
            },
                    },
                },
            },
            "XSzhishu":{
                enable:"phaseUse",
                mark:true,
                marktext:"书",
                unique:true,
                limited:true,
                skillAnimation:true,
                animationStr:"直书",
                animationColor:"water",
                init:function (player){
        player.storage.XSzhishu=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
        return player.countCards('he')>3;
    },
                filterCard:function (card){
        var suit=get.suit(card);
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.suit(ui.selected.cards[i])==suit) return false;
        }
        return true;
    },
                complexCard:true,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                selectCard:3,
                content:function (){
        player.awakenSkill('XSzhishu');
        player.storage.XSzhishu=true;
        player.line(target);
        var cards=target.getCards('h');
        var num=target.countCards('h')-target.countCards('h',{type:'basic'});
        target.discard(cards);
        target.loseHp(num);
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function (player){
            if(!player.countCards('he')>2) return false;
            if(player.storage.XSzhouyin) return false;
        },
                    result:{
                        target:function (card,player,target){
				var num=target.countCards('h');
				if(num>=3) return -num*0.3;
				return 0;
            },
                    },
                },
            },
            "XShuoxin":{
	trigger:{
		player:"damageEnd",
	},
	direct:true,
	filter:function (event,player){
		return (event.num>0)&&game.hasPlayer(function(current){
			return current!=player&&current.countGainableCards(player,'ej')>0;
		});
	},
	content:function (){
		"step 0"
		event.num=trigger.num;
		"step 1"
		player.chooseTarget(get.prompt2('XShuoxin'),function(card,player,target){
			return target!=player&&target.countGainableCards(player,'ej')>0;
		}).set('ai',function(target){
			if(target.countGainableCards(player,'j')>0){
				return get.attitude(player,target);
			}
			else if(target.countGainableCards(player,'e')>0){
				return -get.attitude(player,target);
			}
			else return -1;
		});
		"step 2"
		if(result.bool){
			player.logSkill('XShuoxin',result.targets);
			player.gainPlayerCard('ej',result.targets[0],true);
			if(!result.targets[0].hasSkill('XShuoxin_HS')) {
				result.targets[0].addSkill('XShuoxin_HS');
			}
			if(result.targets[0]==trigger.source&&!trigger.source.hasSkill('XShuoxin_temp')) {
				trigger.source.addTempSkill('XShuoxin_temp');
			}
			event.num--;
			if(event.num>0){
				event.goto(1);
			}
		}
	},
	ai:{
        maixie:true,
        "maixie_hp":true,
        effect:{
            target:function (card,player,target){
				if(get.tag(card,'damage')) {
					if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(get.attitude(player,target)>0) {
						return [1,1.5];
					}
					else return [1,0,1,-1];

				}
            },
        },
    },
	group:["XShuoxin_start","XShuoxin_remove"],
	subSkill:{
		remove:{
			sub:true,
            trigger:{
                player:["dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XShuoxin_HS')){
                        game.players[i].removeSkill('XShuoxin_HS');
                    }
                }
            },
        },
        HS:{
            mark:true,
            marktext:"惑",
            init:function (player){
                player.storage.XShuoxin_HS=0;
                player.markSkill('XShuoxin_HS');
                player.syncStorage('XShuoxin_HS');
            },
            intro:{
                content:function (storage){
                    return '当前手牌上限减少 <span class="bluetext">'+storage+'</span> ';
                },
            },
            mod:{
                maxHandcard:function (player,num){
                    return num-player.storage.XShuoxin_HS;
                },
            },
            sub:true,
			trigger:{
				player:"phaseEnd",
			},
			direct:true,
			content:function(){
				player.storage.XShuoxin_HS=0;
                player.syncStorage('XShuoxin_HS');
			},
        },
		start:{
			sub:true,
			trigger:{
				global:"gameDrawAfter",
			},
			direct:true,
			filter:function (){
				if(game.players.length>1) {
					return game.hasPlayer(function(current){
						return current.sex=='male';
					});
				}
			},
			audio:6,
			content:function (){
				'step 0'
				player.chooseTarget('选择获得"惑"的目标',lib.translate.XShuoxin,true,function(card,player,target){
					return target!=player&&!target.hasSkill('XShuoxin_HS')&&target.sex=='male';
				}).set('ai',function(target){
					var att=get.attitude(_status.event.player,target);
					if(att==0) return Math.random();
					return -att;
				});
				'step 1'
				if(result.bool){
					var target=result.targets[0];
					target.addSkill('XShuoxin_HS');
				}
			},
        },
    },
            },
            "XShuoxin_temp":{
                mod:{
                    playerEnabled:function (card,player,target){
            if(target.hasSkill('XShuoxin')&&get.tag(card,'damage')) return false;
            return true;
        },
                },
            },
            "XSluanmou":{
                trigger:{
                    player:"useCardAfter",
                },
                direct:true,
                priority:9,
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(event.targets.length){
            for(var i=0;i<event.targets.length;i++){
                if(event.targets[i]!=player&&event.targets[i].hasSkill('XShuoxin_HS')){
                    return get.type(event.cards[0])=='trick'||get.type(event.cards[0])=='basic';
                }
            }
        }
        else return false;
    },
                content:function (){
        player.logSkill('XSluanmou');
        for(i=0;i<trigger.targets.length;i++) {
            var target=trigger.targets[i];
            if(target.hasSkill('XShuoxin_HS')) {
                target.storage.XShuoxin_HS++;
                target.markSkill('XShuoxin_HS');
                target.syncStorage('XShuoxin_HS');
            }
        }
    },
                ai:{
                    threaten:1.1,
                },
            },
            "XSshuangqi":{
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        if(player.hasFriend()) {
            return true;
        }
        else {
            if(player.countCards('h','du')) return true;
            return false;
        }
    },
                filter:function (event,player){
        return player.isDamaged()&&!player.hasSkill('XSshuangqi_temp');
    },
                content:function (){
        'step 0'
        event.cards=player.getCards('he');
        player.chooseCardTarget({
            filterCard:function(card){
                return _status.event.getParent().cards.contains(card);
            },
            selectCard:1,
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    return 1-att;
                }
                return att-4;
            },
            forced:true,
            prompt:'请选择要给出的卡牌'
        });
        "step 1"
        if(result.bool){
            player.addTempSkill('XSshuangqi_temp');
            player.recover();
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards.length,result.targets[0]);
            game.delay(0.7);
        }
    },
                group:["XSshuangqi_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        check:function (event,player){
                return player.hasFriend()&&player.hp>2;
            },
                        filter:function (event,player){
                return !player.isDamaged()&&!player.hasSkill('XSshuangqi_temp');
            },
			prompt:"结束阶段，若你已受伤，你可以交给1名其他角色1张牌并回复1点体力；若你未受伤，你可以失去1点体力，然后摸2张牌并令1名其他角色摸1张牌。",
                        content:function (){
                'step 0'
                player.chooseTarget('选择1名角色，然后你摸2张牌并失去1点体力，该角色摸1张牌。',function(card,player,target){
                    return player!=target;
                }).ai=function(target){
                    var player=_status.event.player;
                    return get.attitude(player,target)>0;
                }
                "step 1"
                if(result.bool) {
                    player.addTempSkill('XSshuangqi_temp');
                    player.loseHp();
                    var target=result.targets[0];
                    player.draw(2);
                    target.draw();
                }
            },
                        sub:true,
                    },
                    temp:{
                        sub:true,
                    },
                },
            },
            "XSchusai":{
                init:function (player){
        player.storage.XSchusai=0;
    },
                trigger:{
                    global:"gainAfter",
                },
                direct:true,
                filter:function (event,player){
        if(player.storage.XSchusai>=4) return false;
        if(event.parent.parent.name=='phaseDraw') return false;
        if(get.distance(player,event.player,'attack')>1&&event.player!=player) {
            return event.cards&&event.cards.length>0
        }
        return false;
    },
                content:function (){
        player.draw();
        player.storage.XSchusai++;
        player.storage.XSchusai_mark++;
        player.syncStorage('XSchusai_mark');
    },
                ai:{
                    effect:{
                        player:function (card,player){
                if(get.subtype(card)=='equip1'||get.subtype(card)=='equip4') return [1,-2];
            },
                    },
                },
                group:["XSchusai_clear","XSchusai_mark"],
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        direct:true,
                        content:function (){
                player.storage.XSchusai=0;
            },
                        sub:true,
                    },
                    mark:{
                        mark:true,
                        marktext:"彩",
                        intro:{
                            content:function (storage){
                    return '当前有 <span class="bluetext">'+storage+'</span> 枚“彩”';
                },
                        },
                        init:function (player){
                player.storage.XSchusai_mark=0;
                player.markSkill('XSchusai_mark');
            },
                        sub:true,
                    },
                },
            },
            "XSheqin":{
                trigger:{
                    player:"gainAfter",
                },
                check:function (event,player){
        return player.hasFriend();
    },
                filter:function (event,player){
        if(_status.currentPhase==player) return false;
        return event.cards&&event.cards.length>0&&player.storage.XSchusai_mark>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt2('XSheqin'),function(card,player,target){
            return player!=target&&!target.hasSkill('XSheqin_temp');
        }).ai=function(target){
            var player=_status.event.player;
            var att=get.attitude(player,target);
            if(target.countCards('j')) return att+1;
            return att;
        };
        "step 1"
        if(result.bool){
            event.target=result.targets[0];
            player.line(target,'green');
            player.chooseControl().set('choiceList',['令该角色跳过下一个判定阶段','令该角色跳过下一个弃牌阶段','令该角色获得一个额外的出牌阶段']).set('ai',function(event,player){
                if(event.target.countCards('j')) return 0;
                if(event.target.countCards('h')>=event.target.hp) return 1;
                return 2;
            });
        }
        else {
            event.finish();
        }
        "step 2"
        if(result.index==0){
            event.target.addTempSkill('XSxiaocheng_judge',{player:'phaseDrawEnd'});
        }
        else{
            if(result.index==1) {
                event.target.addTempSkill('XSxiaocheng_discard',{player:'phaseEnd'});
            }
            else {
                event.target.stat.push({card:{},skill:{}});
                event.target.phaseUse();
            }
        }
        "step 3"
        event.target.addSkill('XSheqin_temp');
        player.storage.XSchusai_mark-=1;
        player.syncStorage('XSchusai_mark');
    },
                group:["XSheqin_clear"],
                subSkill:{
                    clear:{
                        trigger:{
							player:["phaseBefore","dieBegin"],
                        },
                        silent:true,
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XSheqin_temp')){
                        game.players[i].removeSkill('XSheqin_temp');
                    }
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    temp:{
                        sub:true,
                    },
                },
            },
            "XSjingbing":{
                trigger:{
                    global:"damageBefore",
                },
                audio:"ext:血色衣冠:2",
                priority:-1,
                filter:function (event,player){
        return player.countCards('h')||player.storage.XSchusai_mark>0;
    },
                check:function (event,player){
		if(player.countCards('h')<2&&player.storage.XSchusai_mark==0) return false;
		var att1=get.attitude(player,event.player);
		var att2=get.attitude(player,event.source);
		if(att1>0&&!event.player.hasSkillTag('maixie')) return true;
		if(att2>0) {
			if(event.num>=event.player.hp) return false;
			if(event.player.hasSkillTag('maixie')) return true;
		}
		return false;
    },
                content:function (){
        "step 0"
        var list=[];
        if(player.countCards('h')){
            list.push('弃置牌');
        }
        if(player.storage.XSchusai_mark>0){
            list.push('移除彩');
        }
        if(list.length){
            player.chooseControl(list).set('ai',function(event,player){
                if(player.storage.XSchusai_mark>0) return '移除彩';
                return '弃置牌';
            });
        }
        "step 1"
        if(result.control=='移除彩'){
            player.storage.XSchusai_mark--;
            player.syncStorage('XSchusai_mark');
        }
        else {
            player.chooseToDiscard(1,'he',true);
        }
        "step 2"
        trigger.cancel();
        trigger.player.loseHp(trigger.num);
    },
            },
            "XSjuebie":{
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                filter:function (){
        if(game.players.length>1) {
            return game.hasPlayer(function(current){
                return current.sex=='male';
            });
        }
    },
                audio:"ext:血色衣冠:6",
                content:function (){
        'step 0'
        player.chooseTarget('选择【诀别】的目标',lib.translate.XSjuebie,true,function(card,player,target){
            return target!=player&&!target.hasSkill('XSjuebie_mark')&&target.sex=='male';
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            target.storage.XSjuebie_mark=player;
            target.addSkill('XSjuebie_mark');
            player.storage.XSjuebie_die=target;
            player.addSkill('XSjuebie_die');
        }
    },
                subSkill:{
                    die:{
                        marktext:"别",
                        intro:{
                            content:"当你或$死亡时，获得对方的全部牌。",
                        },
                        init:function (player){
                player.markSkill('XSjuebie_die');
            },
                        trigger:{
                            global:"die",
                        },
						charlotte:true,
                        skillAnimation:true,
                        forced:true,
                        filter:function (event,player){
                if(event.player==player.storage.XSjuebie_die&&event.player.countCards('he')>0) return true;
                return false;
            },
                        content:function (){
                player.recover();
                event.togain=trigger.player.getCards('he');
                player.gain(event.togain,trigger.player,'giveAuto');
                player.removeSkill('XSjuebie_die');
            },
                        onremove:true,
                        sub:true,
                    },
                    mark:{
                        marktext:"别",
                        intro:{
                            content:"当你或$死亡时，获得对方的全部牌。",
                        },
                        init:function (player){
                player.markSkill('XSjuebie_mark');
            },
                        trigger:{
                            global:"die",
                        },
						charlotte:true,
                        skillAnimation:true,
                        forced:true,
                        filter:function (event,player){
                if(event.player==player.storage.XSjuebie_mark&&event.player.countCards('he')>0) return true;
                return false;
            },
                        content:function (){
                player.recover();
                event.togain=trigger.player.getCards('he');
                player.gain(event.togain,trigger.player,'giveAuto');
                player.removeSkill('XSjuebie_mark');
            },
                        onremove:true,
                        sub:true,
                    },
                },
            },
            "XSchuilian":{
	trigger:{
		player:"damageBefore",
	},
	filter:function (event,player){
        return player.countCards('he')>0&&event.num>0;
    },
	content:function (){
        "step 0"
		player.chooseCard('he',1,'垂怜：选择并展示一张牌',true).set('ai',function(card){
            return -get.value(card);;
        });
        "step 1"
        if(result.bool){
			event.cards=result.cards[0];
            player.showCards(event.cards);
			player.logSkill('XSchuilian',trigger.source);
            var suit1=get.suit(event.cards);
			event.target=trigger.source;
			event.cardss=event.target.getCards('h',{suit:suit1});
			if(event.cardss.length==0) {
				event.goto(3);
			}
			else{
				var next=event.target.chooseToDiscard('h',event.cardss.length,'是否弃置全部此花色的牌？否则获得此牌并令伤害无效',function(card,player){
					var suit=get.suit(card);
					if(suit1!=suit) return false;
					return true;
				});
				next.ai=function(card){
					if(event.cardss.length>1) return -1;
					return 9-get.value(card);
				};
			}
        }
		else event.finish();
        "step 2"
        if(result.bool){
			event.finish();
        }
        else{
			event.goto(3);
        }
		"step 3"
		event.target.$gain2(event.cards);
		event.target.gain(event.cards);
		if(!event.target.hasSkill('XSchuilian_debuff')) {
			event.target.addSkill('XSchuilian_debuff');
			event.target.storage.XSchuilian_debuff=player;
		}
		trigger.cancel();
    },
	ai:{
		threaten:0.8,
	},
	subSkill:{
        debuff:{
			sub:true,
			marktext:"怜",
			intro:{
				content:"你对$造成的下一次伤害-1。",
			},
			init:function (player){
				player.markSkill('XSchuilian_debuff');
			},
			trigger:{
				source:"damageBefore",
			},
			priority:9,
			filter:function (event,player){
				if(!player.storage.XSchuilian_debuff) return false;
				return event.player==player.storage.XSchuilian_debuff&&event.num>0;
			},
			direct:true,
			content:function (){
				trigger.num--;
				player.removeSkill('XSchuilian_debuff');
			},
        },
    },
            },
            "XSwujian":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
                check:function (card){
        if(get.color(card)=='black') return 9-get.value(card);
        return 7-get.value(card);
    },
                position:"he",
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                discard:false,
                lose:false,
                prepare:"give",
                content:function (){
        player.lose(cards,ui.special,'toStorage');
        if(target.hasSkill('XSwujian1')&&target.storage.XSwujian1){
            target.storage.XSwujian1.push(cards[0]);
            target.syncStorage('XSwujian1');
            target.markSkill('XSwujian1');
            target.storage.XSwujian1_mark=player;
        }
        else{
            target.storage.XSwujian1=cards.slice(0);
            target.syncStorage('XSwujian1');
            target.addSkill('XSwujian1');
            target.storage.XSwujian1_mark=player;
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:3,
                    },
                },
            },
            "XSwujian1":{
                mark:true,
                marktext:"剑",
                intro:{
                    content:"cards",
                },
                group:["XSwujian1_mark","XSwujian1_red","XSwujian1_black"],
                subSkill:{
                    mark:{
                        sub:true,
                    },
                },
            },
            "XSwujian1_red":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                filter:function (event,player){
        var cardss=player.storage.XSwujian1;
        if(!cardss.length) return false;
        for(i=0;i<cardss.length;i++) {
            if(get.color(cardss[i])=='red') return true;
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            var cardX=player.storage.XSwujian1;
            for(var i=0;i<cardX.length;i++){
                if(get.color(cardX[i])=='red') list.push(cardX[i]);
            }
            return ui.create.dialog('舞剑',[list,'vcard']);
        },
                    backup:function (links,player){
            return {
                filterCard:function (card){
                    return false;
                },
                selectCard:-1,
                viewAs:{name:'sha'},
                cards:links,
                onuse:function(result,player){
                    result.cards=lib.skill[result.skill].cards;
                    var card=result.cards[0];
                    player.storage.XSwujian1.remove(card);
                    player.syncStorage('XSwujian1');
                    if(!player.storage.XSwujian1.length){
                        player.unmarkSkill('XSwujian1');
                    }
                    else{
                        player.markSkill('XSwujian1');
                    }
                    player.logSkill('XSwujian',result.targets);
                    player.storage.XSwujian1_mark.draw();
                }
            }
        },
                    prompt:function (links,player){
            return '选择使用杀的目标';
        },
                },
                ai:{
                    order:8,
                    result:{
                        player:1.5,
                    },
                },
            },
            "XSwujian1_black":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                filter:function (event,player){
        var cardss=player.storage.XSwujian1;
        if(!cardss.length) return false;
        for(i=0;i<cardss.length;i++) {
            if(get.color(cardss[i])=='black') return true;
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            var cardX=player.storage.XSwujian1;
            for(var i=0;i<cardX.length;i++){
                if(get.color(cardX[i])=='black') list.push(cardX[i]);
            }
            return ui.create.dialog('舞剑',[list,'vcard']);
        },
                    backup:function (links,player){
            return {
                filterCard:function (card){
                    return false;
                },
                selectCard:-1,
                viewAs:{name:'juedou'},
                cards:links,
                onuse:function(result,player){
                    result.cards=lib.skill[result.skill].cards;
                    var card=result.cards[0];
                    player.storage.XSwujian1.remove(card);
                    player.syncStorage('XSwujian1');
                    if(!player.storage.XSwujian1.length){
                        player.unmarkSkill('XSwujian1');
                    }
                    else{
                        player.markSkill('XSwujian1');
                    }
                    player.logSkill('XSwujian',result.targets);
                    player.storage.XSwujian1_mark.draw();
                }
            }
        },
                    prompt:function (links,player){
            return '选择使用决斗的目标';
        },
                },
                ai:{
                    order:8,
                    result:{
                        player:1.5,
                    },
                },
            },
            "XStongku":{
                trigger:{
                    global:"gainEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
        return event.source==player&&event.player!=player&&event.player.countCards('h');
    },
                content:function (){
        "step 0"
        event.player1=trigger.player;
        event.player1.chooseToUse({name:'sha'},player,-1,'对'+get.translation(player)+'使用1张杀，并令其获得你1张牌；否则你失去1点体力并弃置1张牌。').set('targetRequired',true);
        "step 1"
        if(result.bool==false&&event.player1.countCards('he')>0){
            event.player1.loseHp();
            event.player1.chooseToDiscard(1,'he',true);
        }
        else{
            player.gainPlayerCard(event.player1,'he');
            event.finish();
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                var att=get.attitude(player,target);
                if(att>0) return;
                if(card.name=='shunshou'&&player.countCards('h')-target.countCards('h')>0) return [-2,0.6];
                if(card.name=='shunshou'&&player.hp-target.hp>0) return [-2,0.6];
            },
                    },
                },
            },
            "XSbengcheng":{
                priority:15,
                trigger:{
                    target:["shaBefore"],
                },
                filter:function (event,player){
        return player.isAlive()&&player.countCards('h')>0&&event.player!=player&&event.targets.contains(player)==true;
    },
                check:function (event,player){
        return game.hasPlayer(function(current){
            return current!=player&&get.distance(event.player,current,'attack')<=1&&get.attitude(player,current)<=0;
        });
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('XSbengcheng'),'选择任意名'+get.translation(trigger.player)+'攻击范围内的角色',[1,Infinity],function(card,player,target){
			var trigger=_status.event.getTrigger();
            return player!=target&&trigger.player!=target&&get.distance(trigger.player,target,'attack')<=1&&target.countCards('h');
        },function(target){
            var att=get.attitude(player,target);
            return -att;
        });
        "step 1"
        if(result.bool) {
            game.log(player,'发动了崩城');
            game.delay();
            event.targets=result.targets;
            event.targets.sort(lib.sort.seat);
            player.chooseCard('h',1,'选择一张手牌',true).set('ai',function(card){
                return 1;
            });
        }
        else event.finish();
        "step 2"
        if(result.bool) {
            event.cards=result.cards[0];
        }
        else event.finish();
        "step 3"
        if(event.targets.length){
            event.target0=event.targets.shift();
            event.target0.chooseCard('h',1,'选择一张手牌',true).set('ai',function(card){
                return 1;
            });
        }
        else event.finish();
        "step 4"
        if(get.number(result.cards[0])!=get.number(event.cards)) {
            trigger.player.line(event.target0,'green');
            trigger.targets.add(event.target0);
        }
        event.goto(3);
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(card.name=='sha'){
                    var num=game.countPlayer(function(current){
                        if(current!=player&&current!=target){
                            return    get.distance(player,current,'attack')<=1&&get.attitude(player,current)>0;
                        }
                    });
                    return [1,num];
                }
            },
                    },
                },
            },
            "XSceshi":{
                audio:"ext:血色衣冠:2",
                enable:"phaseUse",
                content:function (){
        'step 0'
        event.cards=[];
        event.getResultString=function(str){
            switch(str){
                case '武器':return 'equip1';
                case '防具':return 'equip2';
                case '防御马':return 'equip3';
                case '锦囊':return 'jinnang';
                case '宝物':return 'equip5';
            }
            return str;
        };
        'step 1'
        player.chooseControl('武器','防具','防御马','锦囊','宝物',function(){
            if(Math.random()<0.3) return '武器';
            if(Math.random()<0.6&&Math.random()>=0.3) return '防具';
            if(Math.random()<0.6&&Math.random()>=0.7) return '防御马';
            if(Math.random()<0.8&&Math.random()>=0.7) return '锦囊';
            return '宝物'
        }).set('prompt','请选择想要获得的装备牌类型');
        'step 2'
        event.control=event.getResultString(result.control);
        if(event.control!='jinnang') {
            var card=get.cardPile(function(card){
                return get.subtype(card)==event.control;
            });
        }
        else {
            var card=get.cardPile(function(card){
                return card.name=='XShunshui';
            });
        }
        if(card){
            player.gain(card,'gain2','log');
        }
        else {
            player.draw();
        }
    },
                ai:{
                    order:8,
                    result:{
                        player:3,
                    },
                },
            },
            "XSgongao":{
                audio:"ext:血色衣冠:2",
	trigger:{
		global:"loseEnd",
	},
	frequent:true,
	frequent:-1,
	filter:function(event,player){
		if(event.player==player) return false;
		if(get.distance(player,event.player,'attack')<=1||get.distance(event.player,player,'attack')<=1) {
			for(var i=0;i<event.cards.length;i++){
				if(event.cards[i].original=='e'&&get.type(event.cards[i])=='equip'&&get.position(event.cards[i])=='d') return true;
			}
		}
		return false;
	},
	content:function(){
		for(i=0;i<trigger.cards.length;i++) {
			if(trigger.cards[i].original=='e'&&get.type(trigger.cards[i])=='equip') {
				player.gain(trigger.cards[i],'gain2');
			}
		}
	},
            },
            "XSbingfeng":{
                trigger:{
                    player:["loseEnd"],
                },
                filter:function (event,player){
        if(!player.equiping) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e'&&get.subtype(event.cards[i])=='equip1') return true;
        }
        return false;
    },
                direct:true,
                content:function (){
        var card=new Array();
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='e'&&get.subtype(trigger.cards[i])=='equip1'){
                var check=true;
                if(player.storage.XSbingfeng) {
                    var cardsx=player.storage.XSbingfeng;
                    for(var j=0;j<cardsx.length;j++) {
                        if(cardsx[j].name==trigger.cards[i].name) { check=false; }
                    }
                    if(check) {
                        card[0]=trigger.cards[i];
                    }
                }
                else {
                    card[0]=trigger.cards[i];
                }
            }
        }
        if(card[0]){
            if(card[0].clone){
                card[0].clone.moveDelete(player);
            }
            if(!player.storage.XSbingfeng){
                player.storage.XSbingfeng=card.slice(0);
            }
            else {
                player.storage.XSbingfeng.push(card[0]);
            }
            player.markSkill('XSbingfeng');
            player.syncStorage('XSbingfeng');
            var info=get.info(card[0]);
            if(info.skills){
                player.addAdditionalSkill('XSbingfeng',info.skills,true);
            }
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.subtype(card)=='equip1') return [1,3];
            },
                    },
                },
                marktext:"锋",
                intro:{
                    content:"cards",
                },
                group:["XSbingfeng_remove","XSbingfeng_start"],
                subSkill:{
                    remove:{
                        trigger:{
                            player:"dieBegin",
                        },
                        silent:true,
                        filter:function (event,player){
                return player.storage.XSbingfeng?true:false;
            },
                        content:function (){
                if(player.storage.XSbingfeng){
                    player.storage.XSbingfeng.discard();
                    player.$throw(player.storage.XSbingfeng);
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    start:{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        direct:true,
                        content:function (){
                var card=get.cardPile(function(card){
                    return get.subtype(card)=='equip1';
                });
                if(card){
                    player.gain(card,'gain2','log');
                }
            },
                        sub:true,
                    },
                },
            },
            "XSxiaoqi":{
                audio:"ext:血色衣冠:2",
	enable:'phaseUse',
	usable:1,
	filterTarget:function(card,player,target){
		return target!=player&&target.countCards('e')>0;
	},
	content:function(){
		'step 0'
        event.cards=target.getCards('e');
		player.chooseCardButton('获得'+get.translation(target)+'的1张装备牌，并令其摸1张牌。',event.cards).ai=function(button){
			if(get.subtype(button.link)=='equip1') return get.value(button.link)+1;
			return get.value(button.link);
		}
        'step 1'
        if(result.bool){
			var sub=get.subtype(result.links[0]);
			player.gain(result.links[0]);
            target.$give(result.links[0],player);
			target.draw();
			if(sub=='equip1') {
				player.addTempSkill('XSxiaoqi_eq1',{player:'shaAfter'});
			}
			else {
				player.addTempSkill('XSxiaoqi_eq2',{player:'shaAfter'});
			}
        }
	},
	ai:{
		order:9,
		result:{
			target:function(target,player){
				if(target.hasSkill('XSlianbing')||target.hasSkill('XStianjiao')||target.hasSkill('XSgongao')) {
					return 1;
				}
				else return -0.5;
			},
			player:3,
		},
	},
	group:["XSxiaoqi_remove"],
	subSkill:{
	   remove:{
		   sub:true,
             trigger:{
                player:["phaseAfter","dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
				if(player.hasSkill('XSxiaoqi_eq1')){
					player.removeSkill('XSxiaoqi_eq1');
				}
				if(player.hasSkill('XSxiaoqi_eq2')){
					player.removeSkill('XSxiaoqi_eq2');
				}
            },
        },
        eq1:{
			sub:true,
            marktext:"骁",
            init:function (player){
                player.markSkill('XSxiaoqi_eq1');
            },
            intro:{
                content:function (storage){
                    return '你的杀造成的伤害+1';
                },
            },
			trigger:{
				source:"damageBefore",
			},
			priority:9,
			filter:function (event){
				return event.card&&event.card.name=='sha'&&event.notLink();
			},
			direct:true,
			content:function (){
				trigger.num++;
			},
			ai:{
				damageBonus:true,
			},
        },
		eq2:{
			sub:true,
			marktext:"骁",
            init:function (player){
                player.markSkill('XSxiaoqi_eq2');
            },
            intro:{
                content:function (storage){
                    return '你的杀无法被闪抵消';
                },
            },
			trigger:{
				player:"shaBegin",
			},
			direct:true,
			content:function (){
				trigger.directHit=true;
			},
		}
    },
            },
            "XScanggong":{
                trigger:{
                    source:"damageBefore",
                },
                filter:function (event,player){
        return event.player!=player&&event.num>0;
    },
                priority:-1,
                direct:true,
                content:function (){
        'step 0'
        player.chooseBool('是否防止此伤害，令'+get.translation(trigger.player)+'获得伤害数值的标记？').set('ai',function(){
            var player=_status.event.player;
            var trigger=_status.event.getTrigger();
            if(get.attitude(player,trigger.player)>0) return true;
            return trigger.num<trigger.player.hp;
        });
        'step 1'
        if(result.bool){
            trigger.cancel();
            if(!trigger.player.hasSkill('XScanggong_mark')) {
                trigger.player.addSkill('XScanggong_mark');
            }
            trigger.player.storage.XScanggong_mark+=trigger.num;
            trigger.player.syncStorage('XScanggong_mark');
        }
    },
                group:["XScanggong_add"],
                subSkill:{
                    mark:{
                        marktext:"藏",
                        init:function (player){
                player.storage.XScanggong_mark=0;
                player.markSkill('XScanggong_mark');
                player.syncStorage('XScanggong_mark');
            },
                        intro:{
                            content:function (storage){
                    return '当前值：<span class="bluetext">'+storage+'</span> ';
                },
                        },
                        sub:true,
                    },
                    add:{
                        trigger:{
                            source:"damageBefore",
                        },
                        direct:true,
                        check:function (event,player){
                if(get.attitude(player,event.player)>0) return false;
                return event.num+event.player.storage.XScanggong_mark>=event.player.hp;
            },
                        filter:function (event,player){
                return event.player.storage.XScanggong_mark;
            },
                        content:function (){
                'step 0'
                player.chooseBool('是否移除'+get.translation(trigger.player)+'的【藏】造成额外伤害？').set('ai',function(){
                    var player=_status.event.player;
                    var trigger=_status.event.getTrigger();
                    if(get.attitude(player,trigger.player)>0) return false;
                    return trigger.num+trigger.player.storage.XScanggong_mark>=trigger.player.hp;
                });
                'step 1'
                if(result.bool){
                    var num=trigger.player.storage.XScanggong_mark;
                    if(trigger.player.storage.XScanggong_mark>2) {
                        num++;
                    }
                    trigger.player.removeSkill('XScanggong_mark');
                    trigger.num+=num;
                }
            },
                        sub:true,
                    },
                },
            },
            "XSxiongcai":{
                audio:2,
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('h',{color:'red'})>=player.countCards('h',{color:'black'});
    },
                check:function (event,player){
        return player.countCards('h',{color:'black'})>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt2('XSxiongcai'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            if(target.hasJudge('lebu')) return -1;
            if(get.attitude(player,target)>4){
				if(target.hasSkill('XSquzhu'))
				return get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1)+1;
				return get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1);
            }
            return 0;
        });
        "step 1"
        if(result.bool){
            event.target1=result.targets[0];
            player.chooseCard('请选择至少1张红色手交给对方',[1,Infinity],'h',true,function(card){
                return get.color(card)=='red';
            }).set('ai',function(card){
                return 6-get.value(card);
            });

        }
        else event.finish();
        "step 2"
        if(result.bool){
            player.$give(result.cards,event.target1);
            event.target1.gain(result.cards,player);
            player.logSkill('XSxiongcai',event.target1);
            event.target1.insertPhase();
            event.target1.addTempSkill('XSxiongcai_draw',{player:'phaseEnd'});
            event.target1.storage.XSxiongcai_draw=player;
        }
    },
                subSkill:{
                    draw:{
						sub:true,
			marktext:"雄",
			init:function (player){
                player.markSkill('XSxiongcai_draw');
            },
			intro:{
				content:function (storage){
					var str='当你首次杀死角色时，$摸3张牌';
                    return str;
				},
			},
			trigger:{
				source:"dieAfter",
			},
			filter:function(event,player){
				return player.storage.XSxiongcai_draw;
			},
			frequent:true,
			content:function(){
				player.storage.XSxiongcai_draw.draw(3);
				delete player.storage.XSxiongcai_draw;
				player.removeSkill('XSxiongcai_draw');
			},
                    },
                },
            },
            "XSguhuo":{
                enable:"phaseUse",
                usable:1,
                discard:false,
                prepare:"give2",
                filterCard:function (card){
        return get.color(card)=='red';
    },
                filter:function (event,player){
        return player.countCards('h',{color:'red'})>0;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                check:function (card){
        return 7-get.value(card);
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
        event.target1=target;
        "step 1"
        var cardsx=event.target1.getCards('h',{color:'black'});
        if(cardsx) {
            var num=cardsx.length;
            event.target1.$give(cardsx,player);
            player.gain(cardsx,event.target1);
            if(num>2) {
                event.target1.draw();
            }
            if(num<2) {
                player.draw();
            }
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var hs=target.countCards('h');
                if(hs>2) return -1;
                if(hs==2) return -0.5;
                return 0;
            },
                    },
                    basic:{
                        order:9,
                    },
                },
            },
            "XSzuiji":{
	mod:{
		maxHandcard:function (player,num){
			var temp=0;
			if(player.storage.XSzuiji.length) {
				var temp=Math.min(3,player.storage.XSzuiji.length);
			}
			return num+temp;
		},
	},
                audio:"ext:血色衣冠:2",
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h'&&get.color(event.cards[i])=='red') return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.color(card)=='red') return -1;
            return 1;
        },ui.special);
        "step 1"
        var bool1=result.bool;
        var bool2=!get.owner(result.card);
        if(bool1&&bool2){
            event.card=result.card;
            event.node=result.node;
        }
        else{
            if(bool2) game.cardsDiscard(result.card);
            event.finish();
        }
        "step 2"
        event.card.goto(ui.special);
        event.trigger("addCardToStorage");
        player.storage.XSzuiji.push(event.card);
        event.node.moveDelete(player);
        game.broadcast(function(cardid,player){
            var node=lib.cardOL[cardid];
            if(node){
                node.moveDelete(player);
            }
        },event.node.cardid,player);
        player.markSkill('XSzuiji');
    },
                init:function (player){
        if(!player.storage.XSzuiji) player.storage.XSzuiji=[];
    },
                intro:{
                    content:"cards",
                },
                group:["XSzuiji_lose"],
                subSkill:{
                    lose:{
                        enable:"phaseUse",
                        filter:function (event,player){
                return player.storage.XSzuiji.length>=player.maxHp;
            },
                        content:function (){
                "step 0"
                player.showCards(player.getCards('h'));
                var num1=player.storage.XSzuiji.length;
                player.chooseTarget('令至多'+num1+'名角色回复1点体力并摸1张牌',[1,num1],function(card,player,target){
                    return true;
                },function(target){
                    var att=get.attitude(_status.event.player,target);
                    return att;
                });
                "step 1"
                if(result.bool){
                    game.asyncDraw(result.targets);
                    player.logSkill('XSzuiji',result.targets);
                    var len=result.targets.length;

                    for(var i=0;i<len;i++) {
                        result.targets[i].recover();
                    }
                }
                else{
                    event.finish();
                }
                "step 2"
                delete player.storage.XSzuiji;
                player.removeSkill('XSzuiji');
            },
                        ai:{
                            order:2,
                            result:{
                                player:2,
                            },
                        },
                        sub:true,
                    },
                },
            },
            "XSjianzhu":{
                enable:"phaseUse",
                usable:1,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                init:function (player){
        player.storage.XSjianzhu=[];
    },
                content:function (){
        "step 0"
        event.target1=target;
        var suits=[];
        if(!player.storage.XSjianzhu.contains('heart')) {
            suits.push('heart');
        }
        if(!player.storage.XSjianzhu.contains('spade')) {
            suits.push('spade');
        }
        if(!player.storage.XSjianzhu.contains('diamond')) {
            suits.push('diamond');
        }
        if(!player.storage.XSjianzhu.contains('club')) {
            suits.push('club');
        }
        if(suits.length) {
            player.chooseControl(suits).set('prompt','选择一种花色');
        }
        "step 1"
        if(result.control){
            player.storage.XSjianzhu.push(result.control);
            event.target1.addSkill('XSjianzhu_hs');
            event.target1.storage.XSjianzhu_hs=result.control;
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:4,
                    result:{
                        target:2,
                    },
                },
                group:["XSjianzhu_clear"],
                subSkill:{
                    hs:{
                        mod:{
                            maxHandcard:function (player,num){
                    var suit1=player.storage.XSjianzhu_hs;
                    var num1=player.countCards('h',{suit:suit1});
                    return num+num1;
                },
                        },
                        marktext:"谏",
                        intro:{
                            content:function (storage){
                    var suit;
                    switch(storage){
                        case 'heart':suit='红桃';break;
                        case 'spade':suit='黑桃';break;
                        case 'diamond':suit='方块';break;
                        case 'club':suit='梅花';break;
                    }
                    return '当前花色：<span class="bluetext">'+suit+'</span>';
                },
                        },
                        init:function (player){
                player.markSkill('XSjianzhu_hs');
            },
                        sub:true,
                    },
                    clear:{
                        trigger:{
                            player:["phaseZhunbeiBegin","dieBegin"],
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
                player.storage.XSjianzhu=[];
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XSjianzhu_hs')){
                        game.players[i].removeSkill('XSjianzhu_hs');
                    }
                    if(game.players[i].hasSkill('XSduxian_dis')){
                        game.players[i].removeSkill('XSduxian_dis');
                    }
                }
            },
                        sub:true,
                    },
                },
            },
            "XSduxian":{
                enable:"phaseUse",
                usable:1,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        "step 0"
        event.target1=target;
        var suits=[];
        if(!player.storage.XSjianzhu.contains('heart')) {
            suits.push('heart');
        }
        if(!player.storage.XSjianzhu.contains('spade')) {
            suits.push('spade');
        }
        if(!player.storage.XSjianzhu.contains('diamond')) {
            suits.push('diamond');
        }
        if(!player.storage.XSjianzhu.contains('club')) {
            suits.push('club');
        }
        if(suits.length) {
            player.chooseControl(suits).set('ai',function(event){
                switch(Math.floor(Math.random()*6)){
                    case 0:return 'club';
                    case 1:return 'diamond';
                    case 2:return 'spade';
                    case 3:case 4:case 5:case 6:return 'heart';
                }
            }).set('prompt','选择一种花色');
        }
        "step 1"
        if(result.control){
            player.storage.XSjianzhu.push(result.control);
            event.target1.addSkill('XSduxian_dis');
            event.target1.storage.XSduxian_dis=result.control;
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:-3,
                    },
                },
                subSkill:{
                    dis:{
                        marktext:"妒",
                        intro:{
                            content:function (storage){
                    var suit;
                    switch(storage){
                        case 'heart':suit='红桃';break;
                        case 'spade':suit='黑桃';break;
                        case 'diamond':suit='方块';break;
                        case 'club':suit='梅花';break;
                    }
                    return '当前花色：<span class="bluetext">'+suit+'</span>';
                },
                        },
                        init:function (player){
                player.markSkill('XSduxian_dis');
            },
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        filter:function (event,player){
                var suit1=player.storage.XSduxian_dis;
                return get.suit(event.card)==suit1;
            },
                        content:function (){
                player.chooseToDiscard('he',1,true);
            },
                        ai:{
                            effect:{
                                player:function (card,player){
                        var suit1=player.storage.XSduxian_dis;
        　　            if(get.suit(card)==suit1) return [1,-1];
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "XSfenshu":{
                trigger:{
                    global:"useCard",
                },
                priority:-2,
                check:function (event,player){
        if(get.info(event.card).multitarget&&get.tag(event.card,'damage')) return true;
        return get.effect(event.targets[0],event.card,event.player,player)<0;
    },
                filter:function (event,player){
        if(_status.currentPhase==player) return false;
        if(!event.targets) return false;
        if(event.player==player) return false;
        if(event.card) {
            var suit1=get.suit(event.card);
            var type=get.type(event.card);
            if(type!='basic'&&type!='trick') return false;
            if(player.storage.XSjianzhu.contains(suit1)) return false;
            return player.countCards("h",{suit:suit1});
        }
        return false;
    },
                autodelay:true,
                content:function (){
        "step 0"
		event.card1=trigger.card;
		player.chooseCard('选择一张手牌',1,'h',true,function(card){
			var trigger=_status.event.getTrigger();
			return get.suit(card)==get.suit(trigger.card);
		}).set('ai',function(card){
			return 6-val;
		});
        "step 1"
        if(result.bool) {
            player.showCards(result.cards[0]);
            trigger.cancel();
            if(result.cards[0].name!=event.card1.name) {
                player.discard(result.cards[0]);
            }
        }
        else event.finish();
    },
            },
            "XSfenyong":{
                trigger:{
                    player:["damageBegin"],
                },
                direct:true,
                filter:function (event,player){
        return event.source&&event.source!=player;
    },
                content:function (){
        if(trigger.source.hp>player.hp) {
            player.draw(3);
        }
        if(trigger.source.hp==player.hp) {
            if(!player.hasSkill('XSfenyong_damage')) {
                player.addSkill('XSfenyong_damage');
            }
            else {
                player.storage.XSfenyong_damage++;
                player.syncStorage('XSfenyong_damage');
            }
        }
        else {
            if(player.countCards('e')) {
                player.chooseToDiscard(1,'e',true);
            }
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(player.hp<target.hp) return [1,-1];
                    if(player.hp==target.hp) return [1,2];
                    if(player.hp>target.hp) return [1,3];
                }
            },
                    },
                },
                subSkill:{
                    damage:{
                        marktext:"勇",
                        intro:{
                            content:function (storage){
                    return '你造成的下 <span class="bluetext">'+storage+'</span> 次伤害+1';
                },
                        },
                        trigger:{
                            source:"damageBegin",
                        },
                        priority:3,
                        init:function (player){
                player.storage.XSfenyong_damage=1;
                player.markSkill('XSfenyong_damage');
            },
                        filter:function (event){
                return event.notLink();
            },
                        popup:false,
                        forced:true,
                        content:function (){
                "step 0"
                trigger.num++;
                "step 1"
                player.storage.XSfenyong_damage--;
                player.syncStorage('XSfenyong_damage');
                if(player.storage.XSfenyong_damage==0) {
                    player.removeSkill('XSfenyong_damage');
                }
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                },
            },
},//技能

translate:{
	XS_qslh:"秦扫六合",
	XS_wbct:"万邦朝唐",
	XS_chzb:"楚汉争霸",
	XS_lhfy:"两汉风云",
	XS_txqs:"铁血强宋",
	XS_dmfh:"大明风华",
	XS_zzbj:"诸子百家",
	XS_xqwl:"先秦往烈",
	XS_hxrj:"华夏人杰",
	"XSmuhuali":"木华黎",
	"XSbizaiyu":"毕再遇",
	"XSweiwuji":"魏无忌",
	"XSchuliji":"樗里疾",
	"XSmengke":"孟轲",
	"XSlanyu":"蓝玉",
	"XSzhangheng":"张衡",
	"XSyangsu":"杨素",
	"XShuishi":"惠施",
	"XSlongju":"龙且",
	"XSliyiji":"郦食其",
	"XSliurengui":"刘仁轨",
	"XSnanzi":"南子",
	"XSqinliangyu":"秦良玉",
	"XSlvzhi":"吕雉",
	"XSmibazi":"芈八子",
	"XSweiliao":"尉缭",
	"XSmayuan":"马援",
	"XSyudayou":"俞大猷",
	"XSgoujian":"勾践",
	"XSlicunxu":"李存勖",
	"XSsanghongyang":"桑弘羊",
	"XSwentianxiang":"文天祥",
	"XSdukang":"杜康",
	"XShanshizhong":"韩世忠",
	"XSzhangjuzheng":"张居正",
	"XSyuxu":"虞诩",
	"XSsimaguang":"司马光",
	"XSyuqian":"于谦",
	"XSyangyouji":"养由基",
	"XSyingbu":"英布",
	"XSduruhui":"杜如晦",
	"XSwangshouren":"王守仁",
	"XSxuewen":"薛文",
	"XSbanchao":"班超",
	"XSsulie":"苏烈",
	"XSyinlihua":"阴丽华",
	"XSxiexuan":"谢玄",
	"XSfanju":"范雎",
	"XSchenqingzhi":"陈庆之",
	"XSmenggong":"孟珙",
	"XSfankuai":"樊哙",
	"XSliji":"李勣",
	"XSzhanghao":"张蚝",
	"XSgengyan":"耿弇",
	"XSfusu":"扶苏",
	"XSjiangxiaobai":"姜小白",
	"XSfanzeng":"范增",
	"XSweizhe":"魏辙",
	"XSmurongchui":"慕容垂",
	"XSyelvchucai":"耶律楚材",
	"XSchangyuchun":"常遇春",
	"XSmengtian":"蒙恬",
	"XSweizifu":"卫子夫",
	"XSpingyang":"平阳公主",
	"XSlianghongyu":"梁红玉",
	"XSyuji":"虞姬",
	"XSwangzhaojun":"王昭君",
	"XSbaiqi":"白起",
	"XShanxin":"韩信",
	"XSwuqi":"吴起",
	"XSsunwu":"孙武",
	"XSlianpo":"廉颇",
	"XSjiangshang":"姜尚",
	"XSzhangji":"张机",
	"XSxiangji":"项籍",
	"XSlijing":"李靖",
	"XSyuefei":"岳飞",
	"XSqinqiong":"秦琼",
	"XSyingzheng":"嬴政",
	"XSlishimin":"李世民",
	"XSsunbin":"孙膑",
	"XStiandan":"田单",
	"XSyueyi":"乐毅",
	"XShuoqubing":"霍去病",
	"XSgongshuban":"公输般",
	"XSyangzaixing":"杨再兴",
	"XSmodi":"墨翟",
	"XSzhuanzhu":"专诸",
	"XSfanli":"范蠡",
	"XSzhuyuanzhang":"朱元璋",
	"XSshangyang":"商鞅",
	"XSliubang":"刘邦",
	"XSkongqiu":"孔丘",
	"XSlaodan":"老聃",
	"XSliguang":"李广",
	"XSlimu":"李牧",
	"XSzhangliang":"张良",
	"XSlimi":"李泌",
	"XSsuqin":"苏秦",
	"XSzhangyi":"张仪",
	"XSlicunxiao":"李存孝",
	"XSliuji":"刘基",
	"XSxiaohe":"萧何",
	"XSchenping":"陈平",
	"XSwangjian":"王翦",
	"XStiemuzhen":"铁木真",
	"XSzhaokuangyin":"赵匡胤",
	"XSfujian":"苻坚",
	"XSxueli":"薛礼",
	"XSouyezi":"欧冶子",
	"XSranmin":"冉闵",
	"XSqijiguang":"戚继光",
	"XSliuxiu":"刘秀",
	"XSguanyiwu":"管夷吾",
	"XSwangxu":"王诩",
	"XShanfei":"韩非",
	"XSlishizhen":"李时珍",
	"XSlinxiangru":"蔺相如",
	"XSxuda":"徐达",
	"XSweirui":"韦睿",
	"XSxiean":"谢安",
	"XSwangmeng":"王猛",
	"XSfangqiao":"房乔",
	"XSweiqing":"卫青",
	"XSyuchigong":"尉迟恭",
	"XSsimaqian":"司马迁",
	"XSxishi":"西施",
	"XSmengjiangnv":"孟姜女",
	"XSquping":"屈平",
	"XSsubutai":"速不台",
	"XSyueyun":"岳云",
	"XSliuche":"刘彻",
	"XSlisi":"李斯",
	"XSbishi":"臂使",
	"XSbishi_info":"锁定技，装备区牌数等于你的角色摸牌阶段额外摸1张牌。",
	"XShengge":"横戈",
	"XShengge_info":"1名角色获得装备后，若其装备区内牌数多/少于你，你可令其弃置/摸1张牌；1名角色失去装备区的牌后，若其装备区内牌数多/少于你，你可令其摸/弃置1张牌。",
	"XSxiandeng":"先登",
	"XSxiandeng_info":"出牌阶段开始，你可令此回合使用牌无次数、距离限制，若如此，出牌阶段结束你弃置所有手牌。",
	"XSyongjiang":"勇将",
	"XSyongjiang_info":"锁定技，你每轮对手牌数少于你的角色的第一次伤害无效并摸2张牌，受到手牌数多于你的角色的第一次伤害无效并回复1点体力。",
	"XSwanwei":"挽危",
	"XSwanwei_info":"限定技，若你的体力为1，当体力减少时可以防止之，并将体力回复至上限，然后摸体力上限数值的牌。",
	"XSbiju":"避居",
	"XSbiju_info":"限定技，1名角色准备阶段，若你的体力值为1，你可以减少1点体力上限后回复1点体力，并获得该角色的1个非主公技，然后将势力转为与其相同。",
	"XSzhinang":"智囊",
	"XSzhinang_info":"回合开始时你可以废弃1个装备栏，或当你受到伤害后，你可以获得场上1名其他角色的1个非觉醒、限定、主公技直到你下个回合开始。",
	"XSzhinang1":"智囊",
	"XSzhinang1_info":"",
	"XSzhinang2":"智囊",
	"XSzhinang2_info":"",
	"XSkanyu":"堪舆",
	"XSkanyu_info":"出牌阶段限1次，你可以令攻击范围内至多X名其他角色各弃置1张牌。锁定技，你的攻击范围+X，X为你已废弃的装备栏数。",
	"XSxingshan":"性善",
	"XSxingshan_info":"出牌阶段限1次，你可以对1名其他角色造成1点伤害并令其回复1点体力，若其体力未因此减少，你观看其手牌。",
	"XSxingshantemp":"性善",
	"XSxingshantemp_info":"出牌阶段限1次，你可以对1名其他角色造成1点伤害并令其回复1点体力，若其体力未因此减少，你观看其手牌；若如此，你失去此技能。",
	"XSrenshuo":"仁说",
	"XSrenshuo_info":"当你的体力变化时，你可令1名角色重置武将牌或摸1张牌。",
	"XSquyi":"取义",
	"XSquyi_info":"出牌阶段限1次，你可以失去1点体力，令1名已受伤的其他角色回复1点体力，并获得技能：性善直至其发动1次该技能。",
	"XSjichi":"疾驰",
	"XSjichi_info":"转换技，出牌阶段你可将1张基本牌当作：1.决斗使用，目标需弃置1张同花色手牌，否则你可指定1个额外目标；2.雷杀使用，目标需弃置1张同花色手牌，否则此杀结算结束前其无法使用或打出手牌。",
	"XSjichi1":"疾驰",
	"XSjichi1_info":"",
	"XSjichi2":"疾驰",
	"XSjichi2_info":"",
	"XSjugong":"据功",
	"XSjugong_info":"限定技，当你濒死时，可以依次获得牌堆顶5张牌并使用之，若使用的牌不小于4张，你回复至1点体力（若体力不小于1，回复1点体力）。",
	"XSjingtian":"经天",
	"XSjingtian_info":"你可以跳过摸牌或出牌阶段，视为对攻击范围内的1名其他角色使用1张不计入次数的杀。",
	"XSweidi":"纬地",
	"XSweidi_info":"其他角色可以交给你1张方片牌令你跳过1个阶段（判定、摸牌、出牌、弃牌）。",
	"XSjingsi":"精思",
	"XSjingsi_info":"结束阶段，你可以弃置1张牌进行一个你本回合跳过的阶段。",
	"XSqiaobian":"巧变",
	"XSqiaobian_info":"你使用不为杀的牌指定其他角色为目标时，可以使之转化为对目标使用1张无限制的杀。",
	"XSbingji":"并击",
	"XSbingji_info":"锁定技，你于出牌阶段使用的第X张牌造成的伤害翻倍，X为你的体力值。",
	"XStongyi":"同异",
	"XStongyi_info":"出牌阶段限1次，你可以向1名未以此法指定过的其他角色展示你的手牌，并观看该角色手牌；若如此，你可以弃置其中1张基本牌并展示其中的非基本牌，若你未弃置牌，重置此技能使用次数。",
	"XSfanlun":"反论",
	"XSfanlun_info":"1名角色回合内，当你首次被指定为牌的目标时，若为普通锦囊牌/杀，你可以无效之并视为你对来源使用此牌；若如此，接下来你成为杀/普通锦囊牌的目标时，该牌结算2次。",
	"XSmengjin":"猛进",
	"XSmengjin_info":"出牌阶段限1次，你可以弃置任意数量的手牌视为对目标使用了任意1张杀，以此法使用的杀需等量的闪响应且不计入使用次数。",
	"XSzhuiji":"追击",
	"XSzhuiji_info":"当你的杀结算完成后，可以进行一次判定，若结果不小于3X（若此杀被闪响应则为5X），可令此杀再次对目标结算，直至判定失败为止，X为你与目标的距离且每额外结算1次X+1。",
	"XSyoushui":"游说",
	"XSyoushui_info":"当你受到伤害时可与来源拼点，若你赢，你对其造成相同的伤害且你获得造成伤害的牌。",
	"XStongzhan":"统战",
	"XStongzhan_info":"当距离你大于1的角色受到伤害时，你可以进行一次判定，若点数大于7，取消之；否则你承受此伤害。",
	"XSkuangke":"狂客",
	"XSkuangke_info":"锁定技，你的黑色拼点牌点数+X，你的红色判定牌点数+X，X为你的体力上限。",
	"XShuoji":"火计",
	"XShuoji_info":"摸牌阶段，你可以少摸1张牌，若如此本回合你可将1张手牌当作火攻使用。",
	"XSjieyong":"节用",
	"XSjieyong_info":"锁定技，当你因使用火攻而弃置牌时进行1次判定，若判定结果的颜色与此牌相同，你获得该判定牌或弃置的牌；你每使用火攻对目标造成1点伤害，出牌阶段结束摸1张牌。",
	"XShuoluan":"祸乱",
	"XShuoluan_info":"出牌阶段限1次，你可以使你和至多X名其他角色横置，然后将场上至多X+1名角色判定区的牌移动至另1名角色的判定区，X为你已损失的体力+1。",
	"XSbeiqi":"悲泣",
	"XSbeiqi_info":"当你即将受到属性伤害前（包括连环伤害），可以令你和至多X名其他角色横置，X为你已损失的体力+1。",
	"XSpingluan":"平乱",
	"XSpingluan_info":"出牌阶段限1次，你可令1名本回合未移除过标记的角色获得1枚标记视为对其使用1张无限制的杀。锁定技，你对有标记角色的攻击和防御距离+1。",
	"XSnizhan":"逆战",
	"XSnizhan_info":"出牌阶段限1次，你可以移除1名本回合未获得标记的角色的标记并摸1张牌，且本回合该角色无法使用或打出任何手牌。",
	"XSduji":"毒计",
	"XSduji_info":"当你使用普通锦囊牌指定了不包含你的目标时，可以令此牌效果变为：对目标造成1点伤害。",
	"XSlinchao":"临朝",
	"XSlinchao_info":"你可以展示牌堆顶3张牌并放弃摸牌，获得其中的锦囊牌，若获得的牌数为：0，视为你使用1张万箭齐发；1，视为你使用1张无中生有；2，对攻击范围内的1名其他角色造成1点伤害。",
	"XSxumou":"蓄谋",
	"XSxumou_info":"锁定技，你的锦囊牌造成伤害时，不触发任何技能。",
	"XSdaizheng":"代政",
	"XSdaizheng_info":"当指定1名角色的杀结算完成后，你可以弃置1张杀，视为该不为你的来源对其使用此杀，此杀不计入使用次数。",
	"XSjiyou":"计诱",
	"XSjiyou_info":"当你于弃牌阶段以外弃置手牌后，你可以令1名其他角色获得你所弃置的牌。",
	"XStuiyin":"退隐",
	"XStuiyin_info":"每轮限1次，当你于摸牌阶段以外1次获得至少2张牌后，你可以弃置等量的牌并回复1点体力。",
	"XSxiangmian":"相面",
	"XSxiangmian_info":"出牌阶段限1次，你展示1名角色手牌，其根据花色数直至你的下个回合开始获得效果：1，摸牌阶段摸牌数+1；≥2，手牌上限+2；≥3，回复1点体力；4，获得技能横征。",
	"XSwujing":"武经",
	"XSwujing_info":"锁定技，当受到相面效果的角色造成伤害时，你依次将牌堆顶2张牌置于武将牌上，称为经（最多7张）。出牌阶段开始，你可以摸X张牌并将等量的经按任意顺序置于牌堆顶或弃牌堆，X为经的数量。",
	"XSduanshui":"断水",
	"XSduanshui_info":"出牌阶段你可以将1张黑桃牌当作铁锁连环使用。锁定技，与你横置状态不同的角色于摸牌阶段摸牌数-1。",
	"XSduanshui_debuff":"断水",
	"XSduanshui_debuff_info":"",
	"XSguoshi":"裹尸",
	"XSguoshi_info":"当你处于横置/非横置状态时，可令受到的属性/非属性伤害+1并摸4+X张牌（X为你已损失的体力值）。",
	"XSbaizhan":"百战",
	"XSbaizhan_info":"当其他角色获得装备后，若你装备区对应位置有牌，你可以视为对其使用1张杀，若此杀造成伤害，你获得并装备该角色的对应装备。锁定技，当你失去1张装备区的牌后，摸1张牌。",
	"XSgangrou":"刚柔",
	"XSgangrou_info":"转换技，1.刚：你造成伤害后，可以弃置2张牌对目标造成1点伤害；2.柔：你造成伤害后，可以令目标回复1点体力，然后你摸2张牌。",
	"XSyinren":"隐忍",
	"XSyinren_info":"锁定技，当你受到伤害时防止之，并获得等量的标记；你的准备阶段，移除1半的标记（向上取整），每移除1枚标记失去1点体力并摸2张牌。",
	"XSqiying":"奇英",
	"XSqiying_info":"当你使用杀指定目标时，可以弃置额外任意张杀使此伤害增加等量数值，且根据额外弃置的杀的数量：≥1，此杀需2张闪响应；≥2，造成伤害时你摸2张牌；≥3，伤害+1。",
	"XSjiusheng":"酒圣",
	"XSjiusheng_info":"锁定技，你使用酒没有次数限制，你的酒不计入手牌上限。",
	"XSchunniang":"醇酿",
	"XSchunniang_info":"出牌阶段限1次，你可以将1张手牌置于1名角色武将牌上，其可将此牌当作酒使用；当使用以此法转化的酒时，根据花色获得额外效果：♥，回复1点体力；♦，摸2张牌；♠，本回合下一张杀造成伤害后弃置目标2张牌；♣，本回合下一张杀造成伤害+1。",
	"XSchunniang1":"饮酿",
	"XSchunniang1_info":"",
	"XSwangyou":"忘忧",
	"XSwangyou_info":"当1名角色使用酒后，你可以令你和至多2名其他角色展示1张手牌，然后你可将这些牌按任意顺序置于牌堆顶或牌堆底。",
	"XSzhengqi":"正气",
	"XSzhengqi_info":"每个回合限1次，当1名角色成为带有伤害标签的牌的目标时，你可失去1点体力使此牌对其无效，若如此，你可弃置任意张手牌并随机获得等量的红色牌，若因此弃置全部手牌，额外获得1张红色牌。",
	"XSdanxin":"丹心",
	"XSdanxin_info":"当你进入濒死状态时，可以对当前回合角色造成1点火伤害；当你脱离濒死状态时，可以随机获得X张红色牌，X为你的体力上限与当前手牌数之差。",
	"XSchuishi":"垂史",
	"XSchuishi_info":"锁定技，你的手牌上限不会低于你的体力初始值。",
	"XSjianshi":"箭誓",
	"XSjianshi_info":"出牌阶段限1次，你增加1点体力上限并回复1点体力，然后摸2张牌且本回合使用杀的次数+1。",
	"XSjingong1":"矜功",
	"XSjingong1_info":"觉醒技，当你累计发动3次箭誓后，结束阶段你增加1点体力上限并回复1点体力，然后失去箭誓，获得技能倾覆。",
	"XSqingfu":"倾覆",
	"XSqingfu_info":"锁定技，你受到1点伤害后，减少1点体力上限并摸1张牌，然后选择1名角色横置之。",
	"XSzhengshui":"征税",
	"XSzhengshui_info":"出牌阶段限1次，你可以弃置1张手牌并令2名角色拼点，失败方需要将1张红色牌交给你指定的1名其他角色。",
	"XSxinsuan":"心算",
	"XSxinsuan_info":"每回合限1次，当2名角色拼点结束后，你可以获得其中1张拼点牌，且直至你的准备阶段其他角色使用与此牌点数奇偶不同的牌指定你为目标时需弃置1张点数奇偶相同的牌，否则对你无效。",
	"XSjiejiang":"截江",
	"XSjiejiang_info":"当1名角色于回合内获得装备后，你可以弃置1手牌并令1名角色装备此牌，每名角色每回合限1次。",
	"XSliqi":"利器",
	"XSliqi_info":"出牌阶段限1次，你可以强化1名角色装备的武器，若目标为你则不计入技能次数，否则你摸1张牌。锁定技，你装备区的牌无法被弃置。",
	"XSchuangge":"创革",
	"XSchuangge_info":"出牌阶段，你可以选择1名其他角色并交给其装备区的1张牌，若如此你摸2张牌。",
	"XSyibian":"一鞭",
	"XSyibian_info":"出牌阶段限1次，你可以废弃1个装备栏或判定栏，至多X名角色弃置其对应区域的全部牌，X为你已废弃的栏数+1。",
	"XSfuqing":"扶倾",
	"XSfuqing_info":"当1名角色体力首次降至1时，你可以令其立即获得1个额外的回合，若该角色于此回合内造成过伤害，回合结束时其回复1点体力。",
	"XSzengzao":"增灶",
	"XSzengzao_info":"限定技，出牌阶段你可以令1名角色失去1点体力或弃置1张基本牌并摸3张牌，若其有已发动的限定技，你可以令其中1项于当前回合结束后重置。",
	"XSliaodi":"料敌",
	"XSliaodi_info":"弃牌阶段开始，你可以将1张手牌置于武将牌上，在你的回合外，你可以移除1枚料敌牌视为使用了1张闪或无懈可击。",
	"XSbolan":"博览",
	"XSbolan_info":"当1名其他角色于回合内使用主动技时，你可以获得此技能（最多2项）。",
	"XStongjian":"通鉴",
	"XStongjian_info":"当1名其他角色于回合内使用主动技时，若你拥有该技能，可失去此技能并取消之，且该角色于当前回合内此技能失效。",
	"XSgufa":"故法",
	"XSgufa_info":"锁定技，摸牌阶段你额外摸2张牌，你每因通鉴获得1个技能，额外摸牌减少1张。",
	"XSshuwei":"戍卫",
	"XSshuwei_info":"每回合限1次，你可以跳过摸牌或出牌阶段，令至多2名其他角色获得一个额外的对应阶段，若仅选择1了名其他角色，你跳过弃牌阶段。",
	"XSlianjian":"廉俭",
	"XSlianjian_info":"当其他角色的牌因弃置或判定而进入弃牌堆时，你可以获得其中1张你手牌中没有的花色的牌。",
	"XSchuanyang":"穿杨",
	"XSchuanyang_info":"锁定技，若你装备了武器，你使用杀无距离限制；当你使用杀造成1点伤害后，随机废弃目标1个装备栏。",
	"XStujin":"突进",
	"XStujin_info":"出牌阶段限1次，直至下个准备阶段你的闪全部视为杀，你使用杀的次数+1且可额外指定1个目标，当你受到伤害后，移除此效果。",
	"XSzhanjiang1":"战将",
	"XSzhanjiang1_info":"锁定技，你的杀或决斗造成伤害时，若此牌点数大于你的体力上限，此伤害+1；否则，你可以弃置目标1张手牌。",
	"XSxingkun":"刑困",
	"XSxingkun_info":"当你受到伤害后，可以减少1点体力上限并摸1张牌。",
	"XSmouduan":"谋断",
	"XSmouduan_info":"1名角色的判定牌生效前，你可以打出1张手牌替换之。",
	"XSguojue":"果决",
	"XSguojue_info":"你每受到1点伤害，可以将随机1张延时锦囊牌置于1名角色的判定区。",
	"XShongliang":"宏量",
	"XShongliang_info":"每轮限1次，1名角色的判定牌生效后，你可令你或该角色获得此牌。",
	"XSzhixing":"知行",
	"XSzhixing_info":"锁定技，你每使用或打出2/3张基本/锦囊牌，随机获得1张锦囊/基本牌。当累计通过此技能获得2张锦囊/基本牌后，获得[立言]/[立功]，并减少1点体力上限；当通过此技能获得第3张锦囊和基本牌后，获得[立德]并移除此技能。",
	"XSliyan":"立言",
	"XSliyan_info":"你的结束阶段可以声明杀和锦囊牌各1种，直到你的下个准备阶段其他角色不能使用该牌指定你为目标。",
	"XSligong":"立功",
	"XSligong_info":"当你使用杀指定1名其他角色时，你可以观看其手牌并将1张牌置于其武将牌上，当前回合结束若此牌为黑色则弃置之。",
	"XSligong1":"立功",
	"XSligong1_info":"",
	"XSlide":"立德",
	"XSlide_info":"当你一次获得至少2张牌后，你可以弃置1名其他角色1张牌；当你一次至少失去2张牌后，你可以移动场上1张牌。",
	"XSpincai":"聘才",
	"XSpincai_info":"1名其他角色出牌阶段开始时，你可以交给其任意数量的牌，若给出的数量至少为2，你可以回复1点体力或摸1张牌。",
	"XSguangna":"广纳",
	"XSguangna_info":"锁定技，你的手牌上限等于：弃牌阶段开始时，你手牌中的花色数+种类数+颜色数。",
	"XSsanku":"三窟",
	"XSsanku_info":"当你受到不小于你体力值的伤害时，可以废弃：武器与攻击马栏，防具与防御马栏，判定与宝物栏3种之一，令此伤害无效。",
	"XSdingyuan":"定远",
	"XSdingyuan_info":"当其他角色一次弃置至少2张手牌时，你可令你或该角色获得其中1张，若你未因此获得牌，直至你的回合结束你的攻击范围+1。",
	"XSpingrong":"平戎",
	"XSpingrong_info":"处于你攻击范围内的角色回合开始时你可令其本回合拥有击戎（其于回合内每使用X张牌，你视为对其使用1张杀，X为你当前的体力值且至少为2）。",
	"XSjirong":"击戎",
	"XSjirong_info":"",
	"XSqinwang":"擒王",
	"XSqinwang_info":"出牌阶段限1次，你可以依此获得并使用牌堆顶至多X张牌，然后弃置未使用的牌，若展示的牌数大于1且未使用所有牌，你失去1点体力，X为你装备区的牌数。",
	"XSzhenyi":"镇夷",
	"XSzhenyi_info":"若你装备了：武器，装备区的非武器牌无法被获得；防具，装备区的非防具牌无法被弃置；坐骑，每张令手牌上限+1；宝物：防御距离+1。",
	"XStanli":"叹丽",
	"XStanli_info":"每轮限X次，1名角色受到伤害后，你可以观看其手牌并弃置其中1张，若如此，其回复1点体力（X为你已损失体力值且至少为1至多为3）。",
	"XSqianjie":"谦节",
	"XSqianjie_info":"当你成为带有伤害标签的牌的唯一目标时，你可以令1名男性角色也成为此牌的目标，若此牌未对该角色造成伤害，其于下个准备阶段摸2张牌。",
	"XSqianjie1":"谦节",
	"XSqianjie1_info":"",
	"XScihou":"辞后",
	"XScihou_info":"限定技，出牌阶段，你可以弃置至多3张牌并指定等量的角色，这些角色将手牌补充至每种花色至少有1张。",
	"XSposhi":"破势",
	"XSposhi_info":"出牌阶段限X次，你可以随机获得1名其他角色1张手牌并使用之，若未使用，你失去1点体力（X为你上回合造成的伤害值且至少为1）。",
	"XSfubing":"府兵",
	"XSfubing_info":"锁定技，当你受到伤害/流失体力后，重置技能和卡牌的使用次数，且直到当前角色回合结束你免受伤害/体力流失。",
	"XSyazi":"睚眦",
	"XSyazi_info":"游戏开始时你指定1名角色，当你成为普通锦囊牌或基本牌的目标后，若该角色不为此牌目标，其也成为此牌目标。",
	"XSyazimark":"睚眦",
	"XSyazimark_info":"",
	"XSyuanjiao":"远交",
	"XSyuanjiao_info":"出牌阶段限1次，你可以弃置1张手牌令1名与你距离不为1的其他角色将手牌补充至与你相同（至多3张）。",
	"XSjingong":"近攻",
	"XSjingong_info":"出牌阶段限1次，你可以摸1张牌令1名与你距离不大于1的其他角色将手牌弃置至与你相同（至多3张）。",
	"XSbaipao":"白袍",
	"XSbaipao_info":"出牌阶段限1次，你可以选择1项：回复1点体力，令全部其他角色本回合内全部技能失效；失去1点体力，令全部其他角色本回合无法响应你的牌。",
	"XSlizhan":"励战",
	"XSlizhan_info":"锁定技，你受到的伤害最大为1；当你的体力变化时，你摸2X张牌，且本回合手牌上限+X，X为体力变化值。",
	"XSgongshu":"拱戍",
	"XSgongshu_info":"摸牌阶段你可以少摸任意数量的牌并获得至多等量的其他角色各1张装备牌，若角色仅有1件装备，你可令其摸2张牌。",
	"XSqingtian":"擎天",
	"XSqingtian_info":"锁定技，当你的杀造成伤害时，若目标装备区没有任何牌，此伤害+1；若你使用的杀使你最后的手牌，此杀无法被闪响应。",
	"XSyinzhi":"饮卮",
	"XSyinzhi_info":"锁定技，当你1次失去至少2张牌或1点体力时，你获得1枚饮标记。当你造成伤害时，你可以弃置一半的饮（向上取整）使伤害增加相同数值。",
	"XStuishang":"推赏",
	"XStuishang_info":"准备阶段，你可以展示牌堆顶2+X张牌并任意分配给任意角色，若如此你跳过摸牌阶段（X为你上轮于回合外获得的牌数，且至少为1至多为3）。",
	"XSpingliao":"平辽",
	"XSpingliao_info":"当你出牌阶段首次使用杀对1名角色造成伤害时，可以令此伤害+X或摸2X张牌，X为目标手牌中锦囊牌的数量。",
	"XSyejian":"曳犍",
	"XSyejian_info":"当你使用杀或决斗造成伤害后，若目标装备区没有坐骑，你可以从牌堆中随机获得1张坐骑牌并使1名角色装备之；若有，你可以获得其中1张并使1名角色装备之。",
	"XSpingbu":"平步",
	"XSpingbu_info":"锁定技，你无视其他角色的坐骑牌效果；若你未装备攻击马，你的攻击距离+1，否则防御距离+1；若你未装备防御马，你的防御距离+1，否则攻击距离+1。",
	"XSqiaozhan":"巧战",
	"XSqiaozhan_info":"锁定技，你对体力不大于你的角色使用牌时无距离限制；你对体力不小于你的角色使用牌时无次数限制。",
	"XSshijing":"事竟",
	"XSshijing_info":"出牌阶段限1次，你可以观看1名其他角色手牌并用1张手牌替换其中1张，若其手牌花色数因此：增加，其摸2张牌；减少，你摸2张牌；不变，你与该角色各摸1张牌。",
	"XSrenhou":"仁厚",
	"XSrenhou_info":"当1名其他角色受到来源不为你的伤害时，你可以选择1项：代替其承受此伤害；交给其伤害数值的牌。",
	"XSsisheng":"死生",
	"XSsisheng_info":"锁定技，当你进入或脱离濒死状态时摸2张、失去最后的手牌时摸1张牌；你的手牌上限最少为体力上限的一半（向上取整）。",
	"XSshouba":"首霸",
	"XSshouba_info":"出牌阶段限X次，你可以弃置1名其他角色的1张牌并令其摸1张牌，X为存活敌方角色数且最大为4。",
	"XSchuizhi":"垂治",
	"XSchuizhi_info":"你的结束阶段，可以令1名其他角色获得额外1个只有前X个阶段的回合（准备、判定、摸牌、出牌），X为你本回合发动首霸的次数。",
	"XSqudou":"驱斗",
	"XSqudou_info":"出牌阶段，你可以弃置X张牌视为1名其他角色对另1名其他角色使用1张决斗，X为本回合发动此技能次数+1，回合内非首次发动无法被无懈可击响应。",
	"XSlaomou":"老谋",
	"XSlaomou_info":"当你没有手牌时，可以摸1张牌视为使用1张闪；当你有手牌时，可以弃置全部手牌视为使用1张无懈可击。",
	"XSshicheng":"试诚",
	"XSshicheng_info":"游戏开始时你需指定1名其他角色，出牌阶段限1次你可以改变指定的角色；该角色摸牌、出牌、弃牌阶段开始时，可以交给你1张手牌。",
	"XSshouye":"授业",
	"XSshouye_info":"当1名角色通过试诚累计交给你3张牌后，其结束阶段你可以令其摸2张牌，并使其获得随机3名不在场上的角色中1名的全部非觉醒、限定、主公技直到其下个结束阶段（限本扩展）。",
	"XShuashi":"化石",
	"XShuashi_info":"每轮限1次，1名角色濒死时，若其未翻面，你可以将其武将牌翻面，然后其回复1点体力并摸2张牌。",
	"XSyonglue":"勇略",
	"XSyonglue_info":"出牌阶段你可弃置装备区内1张牌，视为对1名其他角色使用1张无限制的杀或过河拆桥或弃兵曳甲（每种每回合限1次）。",
	"XSchuben":"出奔",
	"XSchuben_info":"觉醒技，1名角色死亡后，你减少1点体力上限并获得：寄篱，勇略描述更改：出牌阶段限3次，将装备区的1张牌交给1名其他角色。",
	"XSjili":"寄篱",
	"XSjili_info":"觉醒技，1名角色死亡时，你减少1点体力上限并获得：雄傲，勇略可选择增加：顺手牵羊。",
	"XSxiongao":"雄傲",
	"XSxiongao_info":"锁定技，当有装备牌进入你的装备区时，从牌堆中随机获得1张锦囊牌；当你失去装备区的牌时，从牌堆中随机获得1张基本牌。",
	"XSfubimark":"辅弼",
	"XSfubimark_info":"",
	"XSfubi":"辅弼",
	"XSfubi_info":"游戏开始时你指定1名其他角色，该角色的杀造成伤害后，你与其各摸1张牌。",
	"XSkuangzuo":"匡佐",
	"XSkuangzuo_info":"摸牌阶段结束，若你的手牌数大于体力值，你可以交给1名其他角色X张牌，若X不小于2，你与该角色各回复1点体力（X为你手牌数与体力差）。",
	"XSwoxuan":"斡旋",
	"XSwoxuan_info":"出牌阶段限1次，你可以选择两名角色并弃置X张手牌，然后这两名角色交换位置（X为两名角色体力差）。",
	"XShengxing1":"横行",
	"XShengxing1_info":"",
	"XShengxing":"横行",
	"XShengxing_info":"限定技，出牌阶段你可将手牌补充至体力上限，本回合使用牌无次数、距离限制，且其他角色无法响应；本回合你每造成1点伤害，出牌阶段结束随机废弃1个装备栏，若造成伤害不小于3，你受到1点伤害并弃置所有手牌。",
	"XSyuxue":"浴血",
	"XSyuxue_info":"当你受到伤害时，可以弃置全部手牌（至少1张）并取消之，若因此弃置的牌数不小于3张，你回复1点体力并增加1点体力上限。",
	"XSaozhan":"鏖战",
	"XSaozhan_info":"当你受到伤害后，可弃置1张手牌，若如此你增加1点体力上限并根据弃置的花色直到下个结束阶段获得技能：♥，浴血；♦，陷阵；♠，逐虏；♣，破竹。",
	"XSzhucheng":"筑城",
	"XSzhucheng_info":"结束阶段，你可以摸X张牌，若如此下一个准备阶段你需弃置X-1张手牌（X为你已废弃的装备栏数）。",
	"XSjihu":"击胡",
	"XSjihu_info":"出牌阶段你可以废弃1个装备栏，视为对1名其他角色使用1张无距离、次数限制的杀，每回合限X次，X为你已经过的回合数。",
	"XSdashe":"大赦",
	"XSdashe_info":"限定技，当你使用普通锦囊牌或进本牌时，可以令此牌的目标增加至多X名或减少至多X名（X为你通过引贤弃置的牌数，Y为你通过戒终获得的牌数）。",
	"XSjiezhong":"戒终",
	"XSjiezhong_info":"其他角色回合开始，你可以令其本回合：使用第1种你没有的类型的牌时令你摸1张牌，第2种时失去1点体力，第3种时立即结束出牌阶段。",
	"XSyinxian":"引贤",
	"XSyinxian_info":"出牌阶段你可以弃置1张手牌并选择1名本回合未以此法选择过的其他角色，令其选择1项：获得此牌；从牌堆中随机获得1张与此牌同类型的牌。",
	"XSnvjie":"女杰",
	"XSnvjie_info":"当你受到1点伤害后，若来源没有手牌你可对其造成1点伤害，否则你可获得其中1张并展示之，若此牌的类型为：基本牌，你可将其交给1名其他角色；普通锦囊牌，你可立即使用此牌；装备牌，你回复1点体力；延时锦囊牌，伤害来源翻面。",
	"XSmujun":"募军",
	"XSmujun_info":"每轮限1次，当攻击范围内含有你的角色使用杀时，若你不为此杀的目标你可使目标成为你，若此杀被闪抵消，你将手牌补充至体力上限。",
	"XSfeizhao":"飞诏",
	"XSfeizhao_info":"结束阶段你可以选择1名其他角色并可以交给其1张杀，令其直到你下个准备阶段使用杀无距离限制，然后你可以翻面，若如此其使用杀造成伤害后你摸伤害数值的牌，否则其首次用杀造成伤害后你摸伤害数值的牌。",
	"XSzhigu":"执鼓",
	"XSzhigu_info":"1名角色于出牌阶段使用杀时，你可以弃置1张手牌，根据此牌的花色其获得效果：♥︎，伤害+1；♠︎，可以额外指定1个目标；♦︎，需两张闪响应；♣︎，不计入使用次数。",
	"XSshenjian":"神箭",
	"XSshenjian_info":"每当你对其他角色造成1点伤害，放置一枚“箭”标记在其武将牌上，最多3枚，超出3枚时你摸超出数量的牌；你的杀无距离限制。",
	"XSweizhen":"威震",
	"XSweizhen_info":"锁定技，根据目标拥有的“箭”的数量你的杀：≥1，目标需两张闪响应；≥2，指定其为目标时，弃置其一张牌；≥3，对其造成的伤害+1。",
	"XSjiqu":"疾驱",
	"XSjiqu_info":"出牌阶段限1次，你可以将1张红色牌当作杀使用。锁定技，每回合你使用的第1张杀没有距离、次数限制。",
	"XSpoqiu":"破酋",
	"XSpoqiu_info":"当其他角色死亡时，你可以摸3张牌。",
	"XSfenglang":"封狼",
	"XSfenglang_info":"锁定技，结束阶段，根据你此回合造成的伤害，摸等量的牌，最多4张。",
	"XSfaming":"发明",
	"XSfaming_info":"锁定技，游戏开始时你获得2枚“匠”，使用或打出手牌时获得一枚（最多8枚）。出牌阶段，你可以消耗4枚标记从牌堆中随机获得1张装备牌。",
	"XStiandao":"天道",
	"XStiandao_info":"转换技，出牌阶段限1次，你可令1名角色直到你的下个回合开始：1.免受雷属性以外的伤害；2.受到火伤害+1，受雷伤害时弃置2张牌。若如此，本回合你每受到1点伤害摸1张牌。",
	"XSyingxu":"盈虚",
	"XSyingxu_info":"出牌阶段限1次，你可以观看1名角色的手牌并弃置双方共有的1种花色的全部手牌，若你弃置的牌：多，重置盈虚使用次数；少，本回合手牌上限-1；相同，各回复1点体力。",
	"XSfengshen":"封神",
	"XSfengshen_info":"锁定技，你濒死时进行判定，结果为黑桃，令随机1名敌方角色受到3点雷伤害，为红桃，你回复1点体力；当你死亡时，可以将所有手牌交给1名其他角色，并使其获得技能“封神”。",
	"XSjiqiao":"机巧",
	"XSjiqiao_info":"锁定技，根据你已有的装备类型获得对应的效果。武器：杀造成伤害后，可以弃置武器并摸2张牌；防具：受到杀的伤害后，可以弃置防具并摸2张牌；攻击马：可以弃置攻击马，令造成的伤害+1；防御马：可以弃置防御马，令受到的伤害-1。",
	"XSjiqiao1":"机巧",
	"XSjiqiao1_info":"当你的杀造成伤害后，可以弃置武器并摸2张牌",
	"XSjiqiao2":"机巧",
	"XSjiqiao2_info":"当你受到杀的伤害后，可以弃置防具并摸2张牌",
	"XSjiqiao3":"机巧",
	"XSjiqiao3_info":"你可以弃置装备区中的攻击马，令你造成的伤害+1",
	"XSjiqiao4":"机巧",
	"XSjiqiao4_info":"你可以弃置装备区中的防御马，令你受到的伤害-1",
	"XSxuezhan":"血战",
	"XSxuezhan_info":"若你已受伤，可以减少1点体力上限并跳过弃牌阶段。锁定技，若你的体力上限为1，结束阶段摸1张牌。",
	"XSxiaoyong":"骁勇",
	"XSxiaoyong_info":"锁定技，若你的体力值：<=3，你拥有技能“疾驱”；<=2，你拥有技能“陷阵”；=1，你拥有技能“神将”。",
	"XSxianzhen":"陷阵",
	"XSxianzhen_info":"锁定技，当你被指定为杀的目标时，可以选择1项：1.视为对来源使用1张杀；2.摸1张牌。",
	"XSmoshou":"墨守",
	"XSmoshou_info":"锁定技，当你于回合外首次失去所有手牌时，摸2张牌并改变横置状态。",
	"XSjianai":"兼爱",
	"XSjianai_info":"当你回复体力时，你可以令1名其他角色回复1点体力，若如此做，你需弃置1张红色手牌。",
	"XSfeigong":"非攻",
	"XSfeigong_info":"其他角色使用杀时，若目标不为你，你可以弃置1张黑色手牌使之无效。",
	"XSyuchang":"鱼肠",
	"XSyuchang_info":"出牌阶段限1次，你可将1张装备或锦囊牌交给1名其他角色。锁定技，当其他角色使用、打出或失去从你这里获得的锦囊与装备牌时，失去1点体力，并令你摸1张牌。",
	"XScuidu":"淬毒",
	"XScuidu_info":"锁定技，当你的杀造成伤害后，若你手牌中有毒，你将其中1张交给目标，否则其从牌堆中随机获得1张毒。",
	"XSshangcai":"商才",
	"XSshangcai_info":"出牌阶段限1次，你可以将1张手牌交给1名其他角色，并令其选择1项：交给你2张牌；令你摸2张牌；令你回复1点体力。",
	"XSxiemei":"携美",
	"XSxiemei_info":"游戏开始时，你可以指定一名女性角色，当其体力变化时，你摸一张牌。",
	"XSxiemeimark":"携美",
	"XSxiemeimark_info":"",
	"XSzhouyin":"舟隐",
	"XSzhouyin_info":"限定技，出牌阶段若你已受伤，可以将全部手牌交给1名其他角色，你增加1点体力上限并回复2点体力，你直到下一个准备阶段不会受到任何伤害。",
	"XSzhouyin_mark":"舟隐",
	"XSzhouyin_mark_info":"",
	"XSweiya":"威压",
	"XSweiya_info":"锁定技，摸牌阶段你额外摸1张牌；结束阶段你指定1种你没有的花色，其他角色结束阶段，若其手牌数大于你，其随机弃置1张此花色的手牌。",
	"XSzhulu":"逐虏",
	"XSzhulu_info":"当其他角色受到牌造成的伤害后，若其在你的攻击范围内，你可以弃置1张非装备牌视为对其使用1张杀，若如此其所有技能失效直到当前角色回合结束。",
	"XSsishi":"死士",
	"XSsishi_info":"当你死亡时，你可以指定1名其他角色，弃置其装备区所有牌并翻面。",
	"XSshoupai":"手牌",
	"XSshoupai_info":"",
	"XSbianfa":"变法",
	"XSbianfa_info":"出牌阶段限1次，你可以弃置任意张同花色的牌并摸等量的牌，然后指定至多X名其他角色，其弃置所有该花色的牌并摸等量的牌（X为你弃置的牌数）。",
	"XSyizhi":"易制",
	"XSyizhi_info":"锁定技，当你同时弃置至少2张同花色的牌时，若花色为：♥︎，回复1点体力；♠︎，失去1点体力并摸3张牌；♦︎，视为对1名其他角色使用1张无距离、次数限制的杀；♣︎，将随机1张无懈可击加入手牌，本回合手牌上限+1。",
	"XSweijia":"威加",
	"XSweijia_info":"其他角色结束阶段，若其手牌数大于你的体力值，你可以获得其1张手牌。",
	"XSjianyi":"翦异",
	"XSjianyi_info":"出牌阶段限一次，你可以指定1名角色，你与该角色分别选择弃置2张牌或失去1点体力，若其选择与你不同，你视为对其使用1张不计入次数的杀。",
	"XSzhisheng":"至圣",
	"XSzhisheng_info":"锁定技，你始终跳过判定阶段；你的手牌上限+X，X为你判定区牌的数量+1。",
	"XSnosha":"无杀",
	"XSnosha_info":"",
	"XSshibiao":"师表",
	"XSshibiao_info":"进行拼点时，你摸1张牌，且你可以令你的点数视为1或K。",
	"XSrenli":"仁礼",
	"XSrenli_info":"出牌阶段限X次，你可以选择1名本回合未以此法指定过的角色并与之拼点，胜利方回复1点体力，失败方摸1张牌（X为你判定区牌的数量+1）。",
	"XSdaozu":"道祖",
	"XSdaozu_info":"当你流失体力时，可以指定至多X名处于你攻击范围内的角色各失去1点体力，X为你已损失的体力。",
	"XSshangshan":"上善",
	"XSshangshan_info":"锁定技，当你受到普通、火、雷伤害后，获得1枚对应标记，你不受标记对应的伤害，并摸伤害值的牌；若同时拥有3枚标记，准备阶段弃置所有标记并摸2张牌。",
	"XShuahu":"化胡",
	"XShuahu_info":"出牌阶段限1次，你可以弃置1张手牌并指定1名角色，观看其手牌并弃置其中全部酒和毒，然后令其摸等量的牌。",
	"XSdingdu":"定都",
	"XSdingdu_info":"限定技，出牌阶段，若你的体力为全场最多（或之一），你可以和一名存活的玩家交换位置。",
	"XSmocu":"没簇",
	"XSmocu_info":"锁定技，当你使用杀时，若目标的距离小于你的攻击范围，此杀无法被闪响应；当你的杀造成伤害时，进行1次判定，若为黑色，伤害+1，否则你可以弃置1张黑色手牌令伤害+1。",
	"XSfeijiang":"飞将",
	"XSfeijiang_info":"锁定技，你计算与其他角色的距离-1；其他角色计算与你的距离+1。",
	"XSyoudi":"诱敌",
	"XSyoudi_info":"其他角色使用杀时，若目标不为你，你可以弃置1张手牌使目标变为你，若如此，杀的来源需要弃置1张杀，否则你对其造成1点伤害。",
	"XSlianque":"连却",
	"XSlianque_info":"锁定技，当你被指定为杀的目标时，你获得1枚“却”，每有1枚你的手牌上限+1。你的准备阶段，可移除所有标记并摸等量的牌，每移除3枚标记，回复1点体力。",
	"XSmousheng":"谋圣",
	"XSmousheng_info":"锁定技，回合开始时你获得1枚谋标记，最多3枚。出牌阶段，你可以消耗1枚标记，将1张基本牌当作任意非延时锦囊使用。",
	"XSshensuan":"神算",
	"XSshensuan_info":"锁定技，你使用的锦囊牌不能被其他角色的无懈可击响应；当你成为其他角色锦囊牌的目标时，你摸1张牌。",
	"XSdushan":"独善",
	"XSdushan_info":"出牌阶段限1次，当你使用普通锦囊牌时，你可以指定1名其他角色成为此牌的来源，若如此，直到你的下个准备阶段你首次受到锦囊牌的伤害时取消之。",
	"XSguicai":"鬼才",
	"XSguicai_info":"出牌阶段限1次，你可以指定1名其他角色，直到其下个结束阶段：你对其使用锦囊牌无距离限制，当其于回合内首次使用锦囊牌结算后，你获得此牌。",
	"XSfangyuan":"方圆",
	"XSfangyuan_info":"你可以令你的锦囊牌增加或减少1个目标，当你已损失至少2点体力时，增加或减少的目标数变为至多2个。",
	"XSyinshi":"隐士",
	"XSyinshi_info":"你可以跳过弃牌阶段并翻面。锁定技，当你处于翻面状态，受到伤害后解除翻面状态，然后回复1点体力或摸2张牌。",
	"XSfusao":"赋骚",
	"XSfusao_info":"出牌阶段限1次，你可以将任意1张非锦囊牌当做五谷丰登使用。",
	"XStianwen":"天问",
	"XStianwen_info":"1名角色准备阶段，你可以将1张手牌置于牌堆顶并观看牌堆顶3张牌，然后将其按任意顺序置于牌堆顶或牌堆底。",
	"XSchennian":"沉念",
	"XSchennian_info":"锁定技，每当你受到1点伤害，来源获得1枚标记；当你濒死时，所有角色弃置全部标记和等量的牌，若牌不足，失去1点体力。首次濒死时，你恢复至3点体力，天问增加效果：放置牌结束后你获得牌堆底1张牌。",
	"XSchuguan":"出关",
	"XSchuguan_info":"觉醒技，当你累计受到体力上限数值的伤害后，你的摸牌阶段结束时获得3枚标记，并获得技能：化胡。",
	"XSrujian":"入间",
	"XSrujian_info":"限定技，出牌阶段你可以指定1名角色，放置“间”标记在其武将牌上直到游戏结束，然后摸2张牌。",
	"XSsijian":"死间",
	"XSsijian_info":"锁定技，结束阶段，若你手牌多于有“间”的角色，交给其1张牌，若体力少于该角色，你回复1点体力；当你死亡时，其他角色需依次弃置1张牌视为对其使用1张杀，否则失去1点体力；该角色死亡时，你失去此技能。",
	"XShezong":"合纵",
	"XShezong_info":"出牌阶段限1次，你可以指定手牌数不为最多的任意名角色各摸1张牌，然后这些角色横置。",
	"XSlianheng":"连横",
	"XSlianheng_info":"出牌阶段限1次，你可以弃置1张手牌并指定1名角色，解除其横置状态，令其选择1项：视为对你指定的另1名角色使用决斗；令你摸2张牌。",
	"XSchennian_temp":"沉念",
	"XSchennian_temp_info":"",
	"XSkuolun":"阔论",
	"XSkuolun_info":"出牌阶段限1次，你可以与1名其他角色拼点，若你胜利，本回合你对其使用任何牌无数量和距离限制；若你输，本回合你的任何牌不能指定其为目标。",
	"XSxiongbian":"雄辩",
	"XSxiongbian_info":"锁定技，若你拼点胜利，你获得双方的拼点牌。",
	"XSshoushang":"受伤",
	"XSshoushang_info":"",
	"XSbugua":"卜卦",
	"XSbugua_info":"锁定技，摸牌阶段开始，你指定1种花色，并选择获得牌堆顶或牌堆底4张牌中所有与指定花色不同的牌，然后跳过摸牌阶段。",
	"XSxiuli":"修历",
	"XSxiuli_info":"结束阶段，你可以观看牌堆顶的X张牌（X为你本回合使用的牌数+1且最多为5），然后以任意顺序放回牌堆顶或牌堆底。",
	"XSguomu":"过目",
	"XSguomu_info":"弃牌阶段开始，你可以指定1种花色的牌，使其不计入手牌上限；若如此，下一个准备阶段开始，你须弃置1张该花色的牌。",
	"XSshicai":"识才",
	"XSshicai_info":"出牌阶段限1次，你可以指定1名其他角色获得“识”，其下回合额外摸1张牌且计算与其他角色距离-1，结束阶段移除标记并交给你2张牌。",
	"XSshicai_mark":"识才",
	"XSshicai_mark_info":"",
	"XShouqin":"后勤",
	"XShouqin_info":"锁定技，一名角色手牌数小于2时，你可以令其摸一张牌，每名角色每回合限一次。",
	"XSzhanshen":"战神",
	"XSzhanshen_info":"锁定技，锁定技，你的杀伤害+1，当你的杀被闪抵消时，你摸一张牌；回合内杀第一次被抵消时，使用杀的次数+1。",
	"XSziwu":"自污",
	"XSziwu_info":"限定技，出牌阶段，你可以获得所有其他角色各1张牌，然后翻面。",
	"XSfuqi":"复齐",
	"XSfuqi_info":"限定技，你处于濒死状态时，你可以弃置装备区内的所有牌并减少1点体力上限，将体力回复至上限。",
	"XSzhanjiang":"战将",
	"XSzhanjiang_info":"",
	"XShuijian":"贿间",
	"XShuijian_info":"当你受到伤害后，可以令伤害来源摸1张牌并指定1名其他角色，令其对伤害来源使用1张杀，或弃置2张牌。",
	"XSqicai":"奇才",
	"XSqicai_info":"当你处于翻面状态时，获得技能“看破”；当你处于正面状态时，获得技能“贿间”。",
	"XSdiaohu":"调虎",
	"XSdiaohu_info":"出牌阶段，你可以交给1名其他角色1张牌（每名角色限1次），令其交给你指定的另1名角色2张牌，若如此，本回合你的牌无法指定其为目标。每回合可以发动X次，X为你当前体力值-1，最少为1。",
	"XSbaoshen":"保身",
	"XSbaoshen_info":"锁定技，当你失去体力或受到伤害后，摸1张牌并翻面；当你翻至背面时，摸1张牌，翻至正面时，回复1点体力。",
	"XSmengzhe":"猛者",
	"XSmengzhe_info":"当你的杀被闪抵消时，可以弃置2张牌令此杀依然造成伤害、或当你的杀造成伤害后可以弃置1张牌。若如此，目标直到其回复1次体力前无法使用杀，且首次回复体力时失去1点体力。",
	"XShenglian":"横练",
	"XShenglian_info":"锁定技，你始终处于横置状态；当你受到以你为起点的属性伤害时，回复X点体力；受到不以你为起点的属性伤害时，摸2X张牌（X为伤害数值）。",
	"XSkuangshi":"匡世",
	"XSkuangshi_info":"出牌阶段限X次，你可以将1张黑色手牌置于1名角色的武将牌上，武将牌上有匡世的角色下个判定阶段开始时，获得匡世牌及其判定区里的所有牌（X为你的体力值且最大为3）。",
	"XSkuangshi_mark":"匡世",
	"XSkuangshi_mark_info":"获得判定区所有牌。",
	"XStuba":"图霸",
	"XStuba_info":"出牌阶段限1次，你可以将1张红色牌置于1名角色的武将牌上直至其结束阶段，该角色的杀造成伤害时伤害+1，并令你摸1张牌。",
	"XSzhijiao":"知交",
	"XSzhijiao_info":"你的回合外，拥有“匡世”的角色可以在你需要时替你打出一张闪，拥有“图霸”的角色可以在你需要时替你打出一张杀。",
	"XStubamark":"图霸",
	"XStubamark_info":"",
	"XSlixin":"立信",
	"XSlixin_info":"觉醒技，若你一次性弃置至少4枚同花色手牌，回合结束你减少1点体力上限，“变法”每回合可以发动的次数+1。",
	"XSweijiu":"围救",
	"XSweijiu_info":"其他角色的杀对不为你的目标造成伤害时，你可以弃置一张牌，令其选择1项：受到你造成的1点伤害；弃置1张牌且此杀伤害无效。",
	"XSbinzu":"膑足",
	"XSbinzu_info":"觉醒技，准备阶段若你的体力为1，你减少1点体力上限并回复1点体力，废弃2个坐骑栏，并获得技能“围救”。",
	"XSyuchangdamage":"鱼肠",
	"XSyuchangdamage_info":"",
	"XSshoupai2":"手牌",
	"XSshoupai2_info":"",
	"XSbinglun":"病论",
	"XSbinglun_info":"锁定技，1名角色体力减少后，你可以弃置1张手牌进行一次判定，若为红色，此角色回复1点体力，否则你获得1枚“医”。",
	"XSyaolue":"要略",
	"XSyaolue_info":"锁定技，你的手牌上限+1。出牌阶段，你可以移除3枚“医”，从牌堆中随机获得1张桃。",
	"XSpoguo":"破国",
	"XSpoguo_info":"1名角色死亡后，你可以选择1项：获得该角色的所有牌；当前回合结束后你获得额外1个回合（每项每轮限1次）。锁定技，每有1名角色死亡你的手牌上限+1（最多+3）。",
	"XSsuoci":"索赐",
	"XSsuoci_info":"每回合限1次，当你的杀造成伤害后，你可以指定1名有手牌的其他角色交给你1张牌，并令你本回合使用杀的次数+1；否则此杀对其继续结算。",
	"XSyingong":"引弓",
	"XSyingong_info":"出牌阶段限1次，若你未装备射雕弓，你可以弃置装备区的武器，并装备射雕弓；否则，你随机获得1张杀。",
	"XStianjiao":"天骄",
	"XStianjiao_info":"锁定技，你点数大于6的杀可以指定额外1个目标；当你的杀造成伤害后，根据此杀指定的目标个数：1，目标无法使用锦囊牌直到你的下个准备阶段；2，目标弃置1张牌；3，50%概率摸1张牌。",
	"XSshiquan":"释权",
	"XSshiquan_info":"出牌阶段限1次，你可以指定1名装备区有牌的角色令其选择1项：令你弃置其装备区1张牌并摸1张牌；交给你其装备区的1张牌并可以对你使用1张杀。",
	"XSrenzheng":"仁政",
	"XSrenzheng_info":"锁定技，当你受到伤害后，摸伤害数值的牌，并且可以指定1名其他角色获得造成伤害的牌。",
	"XStianzhao":"天兆",
	"XStianzhao_info":"当你成为其他角色有伤害标签的牌或铁索连环的目标时，可以展示牌堆顶1张牌，若此牌的花色与你的手牌均不同，你对该角色造成1点雷属性伤害。",
	"XSshengxi":"生息",
	"XSshengxi_info":"其他角色结束阶段，你可以交给其1张手牌（每回合最多3次）。锁定技，你的结束阶段摸X张牌（X为上回合发动生息的次数）。",
	"XSrenxian":"任贤",
	"XSrenxian_info":"锁定技，当你通过生息累计交给1名角色2张牌后，该角色立即获得1个额外出牌阶段。",
	"XSchuijiang":"垂缰",
	"XSchuijiang_info":"当你濒死时，你可以弃置装备区的攻击马或防御马，然后回复至1点体力。",
	"XStianming":"天命",
	"XStianming_info":"1名角色的判定牌生效前，你可以展示牌堆顶1张牌，用其代替并获得该判定牌，若非每轮首次发动此技能，你需弃置1张牌。",
	"XSzhujian":"铸剑",
	"XSzhujian_info":"出牌阶段限1次，你可弃置2张手牌根据牌点数和装备武器：1至5，龙泉剑【天命】；6至10，太阿剑【威压】；11至15，湛卢剑【仁政】；16至20，纯钧剑【威加】；21+，工部剑【天骄】。",
	"XSjujiang":"巨匠",
	"XSjujiang_info":"你每通过铸剑装备过1种武器，摸牌阶段你额外摸1张牌（最多3张）。",
	"XSyongjue":"勇绝",
	"XSyongjue_info":"锁定技，若你已受伤，当你受到伤害时减少体力上限代替减少体力；若你未受伤，你计算与其他角色的距离-X，X为你装备区牌的数量。",
	"XSyuanyang":"鸳鸯",
	"XSyuanyang_info":"你可以在回合内将红色手牌当杀、在回合外黑色手牌当闪使用或打出。",
	"XSkedi":"克敌",
	"XSkedi_info":"当你的闪抵消目标的杀时你摸1张牌，若其在你的攻击范围内你可以对其使用1张杀，若因此造成伤害你摸1张牌。",
	"XSzongheng":"纵横",
	"XSzongheng_info":"你的第1个准备阶段，你令2名其他角色分别获得纵术与横术；出牌阶段限1次（第1个回合除外），或当拥有纵术、横术的角色死亡时，你可以转移纵术、横术。",
	"XSzongheng1":"纵横",
	"XSzongheng1_info":"",
	"XSzongheng2":"纵横",
	"XSzongheng2_info":"",
	"XShezong2":"纵术",
	"XShezong2_info":"",
	"XSlianheng2":"横术",
	"XSlianheng2_info":"",
	"XSxiushen":"修身",
	"XSxiushen_info":"结束阶段若你没有纵术和横术，摸2张牌。",
	"XSjinggong":"精工",
	"XSjinggong_info":"锁定技，若你装备了武器或防具，你的手牌上限+1。",
	"XSbaihe":"捭阖",
	"XSbaihe_info":"出牌阶段限1次，你可以改变自己的横置状态；出牌阶段结束，你可以令全部横置或非横置的角色摸1张或弃置1张牌。",
	"XSzhifa":"治法",
	"XSzhifa_info":"",
	"XSyongshu":"用术",
	"XSyongshu_info":"",
	"XSdoushen":"斗神",
	"XSdoushen_info":"当你的杀被闪抵消时，可以弃置1张杀令此杀依然造成伤害，若弃置的杀与原杀颜色相同，则此伤害+1；若不同，你获得目标装备区的1张牌。",
	"XSxinglue":"兴略",
	"XSxinglue_info":"出牌阶段，你可以弃置手牌中1种花色的全部牌，并摸等量的牌，每回合可以发动X次，X为摸牌结束你手牌中的花色数-1且最少为1；结束阶段，若你的手牌花色数等于体力值，你摸2张牌。",
	"XSbencao":"本草",
	"XSbencao_info":"当你使用桃时，根据牌的点数获得不同的效果：1~5点，你可以和1名其他角色交换1张手牌；6~9点，你额外回复1点体力；10~13点，你摸2张牌。",
	"XSwanbi":"完璧",
	"XSwanbi_info":"当你成为顺手牵羊、过河拆桥的目标时，你可以移除1张“论”使目标成为你攻击范围内的1名其他角色。",
	"XSheshi":"合势",
	"XSheshi_info":"",
	"XSfalun":"法论",
	"XSfalun_info":"游戏开始你获得法、术、势标记。出牌阶段限1次，或当拥有法、术、势标记的角色死亡时，你可以转移法、术、势。",
	"XSfalun1":"法论",
	"XSfalun1_info":"",
	"XSfalun2":"法论",
	"XSfalun2_info":"",
	"XSshuonan":"说难",
	"XSshuonan_info":"锁定技，若你没有法，你的手牌上限+1；若你没有术，其他角色计算与你的距离+1；若你没有势，摸牌阶段你额外摸1张牌。",
	"XSgufen":"孤愤",
	"XSgufen_info":"若你同时拥有法、术、势，结束阶段你可以展示牌堆顶1张牌并使用之。",
	"XSlianbing":"练兵",
	"XSlianbing_info":"出牌阶段限1次，你可以指定1种装备牌类型，然后从牌堆中随机获得1张；若牌堆没有该种牌，你摸1张牌。",
	"XSyaosheng":"药圣",
	"XSyaosheng_info":"你可以将1张红桃牌当作桃使用。锁定技，你失去毒时不会失去体力，使用毒时摸1张牌。",
	"XSquji":"祛疾",
	"XSquji_info":"出牌阶段你可以观看1名角色的手牌并弃置其中的毒，每弃置1张，令其回复1点体力并摸1张牌，如果你以此法弃置了毒，本回合不能再发动此技能。",
	"XSquji_temp":"祛疾",
	"XSquji_temp_info":"",
	"XSlunke":"论客",
	"XSlunke_info":"出牌阶段限1次，你可以与至多X名角色拼点（X为你的手牌数且最大为3），若你的点数不小于对方，你摸1张牌，否则你将对方的拼点牌放置在自己的武将牌上，称为“论”。",
	"XSlunke_win":"论客",
	"XSlunke_win_info":"",
	"XSxianghe":"相和",
	"XSxianghe_info":"其他角色弃牌阶段结束，你可以移除1张“论”并获得其于此阶段弃置的全部牌，然后交给该角色等量的牌。",
	"XSlingzhi":"令止",
	"XSlingzhi_info":"锁定技，你受到的伤害都视为体力流失；你无法成为借刀杀人、声东击西的目标。",
	"XSyanshi":"炎势",
	"XSyanshi_info":"出牌阶段你可以指定攻击范围内的1名角色，然后展示并弃置牌堆顶或牌堆底1张牌，若为锦囊牌或装备牌，视为对其使用1张火攻，你可以这样做直到出现基本牌或3次为止。",
	"XSshenhuo":"神火",
	"XSshenhuo_info":"当你造成非属性伤害时，可令其变为火伤害；当你受到火伤害时，你可以防止之。",
	"XSwohu":"卧虎",
	"XSwohu_info":"当你的牌造成火伤害后，你可以弃置至多X张手牌，令目标额外受到X点火伤害，X为你已损失的体力值；若处于你的阶段且X为0，结束阶段你摸1张牌。",
	"XSxiaocheng":"晓城",
	"XSxiaocheng_info":"当你受到非属性伤害后，你可以跳过下一个判定和弃牌阶段。",
	"XSwohu_draw":"卧虎",
	"XSwohu_draw_info":"",
	"XSbenxi":"奔袭",
	"XSbenxi_info":"转换技，1.攻：当你的杀指定目标时可以进行1次判定，若结果不小于7你获得其1张手牌；2.守：你被指定为杀的目标时可以进行1次判定，若结果不大于7你对其造成1点伤害。游戏开始时你需选择奔袭的初始状态。",
	"XSwangmen":"望门",
	"XSwangmen_info":"摸牌阶段你多摸1张牌，然后可以将任意张此阶段获得的牌交给1名其他角色。",
	"XSwangmen_temp":"望门",
	"XSwangmen_temp_info":"",
	"XSdongshan":"东山",
	"XSdongshan_info":"若你于摸牌阶段没有获得任何牌，你可以摸X张牌并跳过出牌阶段、弃牌阶段以及下一个判定阶段和摸牌阶段(X为你已损失体力值+3)。",
	"XSdongshan_temp":"东山",
	"XSdongshan_temp_info":"",
	"XSyisheng":"医圣",
	"XSyisheng_info":"锁定技，游戏开始时你获得2枚“医”标记，使用或打出手牌时获得1枚。当有角色濒死时，可消耗3枚“医”视为其使用1张桃。",
	"XSlizhu":"立著",
	"XSlizhu_info":"出牌阶段，你可以移除8枚“医”，摸2张牌并回复1点体力，然后获得下列技能中的一个：“病论”、“要略”；若你已获得全部技能，额外摸1张牌。",
	"XStiandao_mark1":"天道",
	"XStiandao_mark1_info":"",
	"XStiandao_mark2":"天道",
	"XStiandao_mark2_info":"",
	"XSlaoyi":"老矣",
	"XSlaoyi_info":"锁定技，你的手牌上限等于体力的一半（向上取整）。",
	"XSyingxu_temp":"盈虚",
	"XSyingxu_temp_info":"",
	"XStiandao_mark3":"天道",
	"XStiandao_mark3_info":"",
	"XSwangchou":"亡仇",
	"XSwangchou_info":"每当你受到1点伤害，可以指定1名其他角色对伤害来源使用1张杀，否则你可以弃置其区域内的1张牌。",
	"XSxianji":"先机",
	"XSxianji_info":"锁定技，判定阶段开始若你的判定区内有牌，你弃置其中所有牌，并摸弃置牌数+1张牌，且本回合使用杀无次数限制。",
	"XSjiebing":"皆兵",
	"XSjiebing_info":"当其他角色在回合外不因进入弃牌堆而失去手牌时，若其在你的攻击范围内，你可以令其选择1项：弃置1张牌或令你摸1张牌，每轮最多3次。",
	"XSwangzuo":"王佐",
	"XSwangzuo_info":"出牌阶段限1次，你可以将1张手牌置于1名角色的武将牌上，该角色直到你的下一个准备阶段，与佐颜色相同的牌不计入手牌上限且当其与佐颜色相同的牌于回合外进入弃牌堆时，摸1张牌。",
	"XSwangzuo_mark":"王佐",
	"XSwangzuo_mark_info":"",
	"XSjindao":"金刀",
	"XSjindao_info":"出牌阶段限1次，你可以选择1名其他角色并获得其1张装备牌，然后可以将1张装备牌置于另1名角色对应的区域，若因此替换原装备，你摸1张牌。",
	"XSyijiao":"遗教",
	"XSyijiao_info":"当你死亡时，你可以令1名其他角色摸X张牌，并令其获得技能“王佐”，X为你的手牌数。",
	"XSshanmou":"善谋",
	"XSshanmou_info":"当你使用锦囊牌时可以进行一次判定，若判定结果与锦囊牌颜色不同，你摸1张牌；若花色相同，你摸2张牌。",
	"XSyunchou":"运筹",
	"XSyunchou_info":"出牌阶段限1次，当你使用锦囊牌后可以令该锦囊牌额外结算1次。",
	"XSjunei":"惧内",
	"XSjunei_info":"当你受到伤害后，可以将至少2张手牌交给1名其他角色，若其为女性你摸1张牌，若如此，直到你的下一个摸牌阶段任何带有伤害标签的牌无法指定你为目标。",
	"XSjunei_mark":"惧内",
	"XSjunei_mark_info":"",
	"XSquzhu":"驱逐",
	"XSquzhu_info":"你的回合内，可以将1张红色牌当杀使用或打出，当你的杀造成伤害后，本回合使用杀的次数+1。",
	"XSyangzhan":"养战",
	"XSyangzhan_info":"出牌阶段限1次，你可以获得1名其他角色1张你可以使用的手牌，然后使用或弃置此牌。",
	"XSyongguan":"勇冠",
	"XSyongguan_info":"当你的杀造成或受到杀的伤害后可进行一次判定，若为黑色，弃置目标/伤害来源1张牌，为红色，令你指定的1名角色摸1张牌。",
	"XSduoshuo":"夺槊",
	"XSduoshuo_info":"当你被指定为杀的目标时可以获得以下效果：若你的体力不小于来源，你获得其武器牌，若你的手牌数不小于来源，你可以对其使用1张杀。",
	"XSzhushi":"著史",
	"XSzhushi_info":"锁定技，回合结束，你获得本回合你进入弃牌堆的第1张锦囊牌；回合开始，你获得回合外你进入弃牌堆的第1张基本牌。",
	"XSgonggao":"功高",
	"XSgonggao_info":"锁定技，游戏开始获得2枚“功”，每造成1点伤害获得1枚（最多10枚），每有2枚你计算与其他角色距离时-1。回合结束时如果有10枚，你移除所有标记，并减少1点体力上限。",
	"XSbingxian":"兵仙",
	"XSbingxian_info":"锁定技，你不会受到乐不思蜀、兵粮寸断的影响，也无法被指定为乐不思蜀、兵粮寸断的目标。",
	"XSdianbing":"点兵",
	"XSdianbing_info":"当你的杀被闪抵消、或你受到其他角色的1点伤害时，你可以将1枚兵放置在该角色的武将牌上；当你失去体力时，令随机1名敌人获得1枚兵。锁定技，角色每有1枚兵计算与你的距离+1。",
	"XSandu":"暗渡",
	"XSandu_info":"锁定技，你的结束阶段若有角色的兵达到3，移除其上所有兵，并对其造成1点伤害，然后你展示牌堆顶X张牌，每有1张杀则造成的伤害+1，同时你获得其余的牌，X为此角色兵的数量。",
	"XSjianbi":"坚壁",
	"XSjianbi_info":"锁定技，结束阶段你摸4张牌，你永远跳过摸牌阶段；若你于回合内未使用杀，结束阶段摸牌数+1。",
	"XSbingshen":"兵神",
	"XSbingshen_info":"你可以弃置1张牌并跳过出牌阶段，然后可以移动场上1张牌，且此回合手牌上限+2。",
	"XSbawang":"霸王",
	"XSbawang_info":"锁定技，你的决斗需要两张杀来响应，且可以指定额外1个目标；若你的决斗仅指定了1个目标，你1摸张牌。",
	"XSwuqian":"无前",
	"XSwuqian_info":"觉醒技，回合开始，若你已受伤且手牌中有桃，你减少1点体力上限并获得技能：破釜。",
	"XSpofu":"破釜",
	"XSpofu_info":"锁定技，你的桃、桃园结义、毒视为决斗；你每到受1点伤害进行1次判定，若结果为红，你从牌堆中随机获得1张桃（若没有则摸1张牌），否则你弃置伤害来源1张牌。",
	"XSjunshen":"军神",
	"XSjunshen_info":"锁定技，当你被指定为杀的目标时、或你指定其他角色为杀的目标时，你摸1张牌。",
	"XSciqiu":"刺酋",
	"XSciqiu_info":"出牌阶段限1次，你可以指定1名体力不小于你的角色，你受到其1点伤害并对其造成1点伤害。",
	"XSshenjiang":"神将",
	"XSshenjiang_info":"锁定技，摸牌阶段前你进行判定，根据结果直到下个回合你的杀：♥︎，伤害+1；♠︎，可以额外指定1个目标；♦︎，需两张闪响应；♣︎，使用次数+1，可将1张梅花牌当杀使用。",
	"XSzhaoxue":"昭雪",
	"XSzhaoxue_info":"限定技，当你濒死时，可回复至1点体力，并令所有其他角色选择1项：1.令你摸1张牌；2.交给你1张牌，若给出的是“毒”，其失去1点体力。",
	"XSshenjiang1":"神将",
	"XSshenjiang1_info":"你的杀造成的伤害+1",
	"XSshenjiang2":"神将",
	"XSshenjiang2_info":"你的杀可以额外指定1个目标",
	"XSshenjiang3":"神将",
	"XSshenjiang3_info":"你的杀需2张闪响应",
	"XSshenjiang4":"神将",
	"XSshenjiang4_info":"使用杀的次数+1，可以将1张梅花牌当作杀使用",
	"XSbingsheng":"兵圣",
	"XSbingsheng_info":"锁定技，当你受到伤害时，进行一次判定，若结果为红色，你回复伤害数值的体力，若为黑色，你对伤害来源造成相同数值的伤害。",
	"XSbingtun":"并吞",
	"XSbingtun_info":"其他角色的杀造成伤害时，若其手牌数不多于你，你可以使你成为此伤害的来源。锁定技，你的手牌上限不会因体力减少而降低。",
	"XShengzheng":"横征",
	"XShengzheng_info":"锁定技，其他角色的摸牌阶段结束时，若手牌数不小于你且你的手牌数小于手牌上限，需要交给你1张牌。",
	"XSxuhuai":"虚怀",
	"XSxuhuai_info":"当你于摸牌阶段以外获得牌时，你可以展示牌堆顶等量的牌，然后将其中与你获得的牌类型相同的牌交给1名其他角色。",
	"XSbingdian":"兵典",
	"XSbingdian_info":"锁定技，当你受到1点或造成1点伤害后获得1枚典标记。出牌阶段限1次，你可以消耗8枚标记令1名其他角色获得技能“治军”。",
	"XSzhijun":"治军",
	"XSzhijun_info":"锁定技，弃牌阶段你的黑色手牌不计入手牌上限。",
	"XSxushi":"虚实",
	"XSxushi_info":"锁定技，你无法装备防具。当你需要打出1张闪时可以进行1次判定，判定结果不为方片，视为你打出了1张闪。",
	"XSjianzao":"减灶",
	"XSjianzao_info":"摸牌阶段你可以少摸任意张牌，然后选择等量的角色视为对各其使用1张不计入次数的杀。",
	"XSlianji":"连击",
	"XSlianji_info":"使用杀无次数限制。",
	"XShuoniu":"火牛",
	"XShuoniu_info":"出牌阶段限1次，你可以失去1点体力，对其他至多X名角色各造成1点火伤害；如果只选择了1名角色，你摸(X-1)张牌(X为你已损失的体力值，最多为3)。",
	"XSpozhu":"破竹",
	"XSpozhu_info":"你的回合内，当你使用牌时，若此牌与你于此回合内使用的上一张牌颜色不同，则你可以摸1张牌，每回合最多发动3次。",
	"XSgongxin":"攻心",
	"XSgongxin_info":"当你的杀被闪抵消时，你可以与目标交换手牌，若如此，手牌数多的1方需弃置1张牌。",
	"XSguanjun":"冠军",
	"XSguanjun_info":"锁定技，你的装备无法被其他角色获得。",
	"XSchangqu":"长驱",
	"XSchangqu_info":"锁定技，你计算与其他角色的距离-1。当其他角色死亡后，你可以获得下列技能中的一个：“疾驱”、“破酋”和“封狼”。",
	"XSbingbi":"秉笔",
	"XSbingbi_info":"出牌阶段限1次，你可弃置任意张不同花色的牌并指定1名角色观看其手牌，其手牌中有你弃置的花色的数量为：≥1，你的牌对其无距离限制；≥2，你的牌对其无数量限制；≥3，你的牌其无法响应；4，令其弃置4张牌。",
	"XSzhishu":"直书",
	"XSzhishu_info":"限定技，出牌阶段你可以弃置3张不同花色牌令1名其他角色弃置全部手牌，其中每有1张非基本牌，其失去1点体力。",
	"XShuoxin":"惑心",
	"XShuoxin_info":"游戏开始你令1名男性角色获得惑标记。每当你受到1点伤害，你可以获得1名角色场上的1张牌，并使其获得惑标记；若其为伤害来源，其本回合无法指定你为有伤害标签的牌的目标。",
	"XShuoxin_temp":"惑心",
	"XShuoxin_temp_info":"",
	"XSluanmou":"乱谋",
	"XSluanmou_info":"锁定技，你的回合内当你对有惑的角色使用锦囊牌或基本牌结算后，其本回合手牌上限-1。",
	"XSshuangqi":"双栖",
	"XSshuangqi_info":"结束阶段，若你已受伤，你可以交给1名其他角色1张牌并回复1点体力；若你未受伤，你可以失去1点体力，然后摸2张牌并令1名其他角色摸1张牌。",
	"XSchusai":"出塞",
	"XSchusai_info":"锁定技，当你攻击范围以外的角色在其摸牌阶段以外获得牌时，你摸1张牌并获得1枚“彩”标记，每轮最多4次。",
	"XSheqin":"和亲",
	"XSheqin_info":"当你于回合外获得牌时，你可以移除1枚“彩”并令1名其他角色获得一项效果：跳过下一个判定阶段；跳过下一个弃牌阶段；获得一个额外的出牌阶段（每名角色每回合限1次）。",
	"XSjingbing":"靖兵",
	"XSjingbing_info":"当1名角色即将造成伤害时，你可以移除1枚“彩”或弃置1张牌使此伤害视为体力流失。",
	"XSjuebie":"诀别",
	"XSjuebie_info":"游戏开始时，你可以指定1名男性角色，当你或该角色死亡时，该角色/你获得对方的全部牌并回复1点体力。",
	"XSchuilian":"垂怜",
	"XSchuilian_info":"当你受到伤害时可以展示1张手牌，令伤害来源选择1项：弃置与此牌同花色的全部手牌（至少1张）；获得此牌并令伤害无效，且对你造成的下一次伤害-1。",
	"XSwujian":"舞剑",
	"XSwujian_info":"出牌阶段限1次，你可以将1张牌置于1名其他角色的武将牌上，称为“舞”。此角色出牌阶段，可以将♠︎♣︎的舞当作决斗使用，♥︎♦︎的舞当作杀使用；若如此，你摸1张牌。",
	"XSwujian1":"舞剑",
	"XSwujian1_info":"",
	"XSwujian1_red":"舞剑♥︎♦︎",
	"XSwujian1_red_info":"",
	"XSwujian1_black":"舞剑♠︎♣︎",
	"XSwujian1_black_info":"",
	"XStongku":"恸哭",
	"XStongku_info":"当你的牌被其他角色获得时，你可以令其选择一项：对你使用1张杀并令你获得其1张牌；失去1点体力并弃置1张牌。",
	"XSbengcheng":"崩城",
	"XSbengcheng_info":"当你被指定为杀的目标时，你可以指定杀的来源攻击范围内任意名其他角色，你们同时选择1张手牌，点数与你不同的角色也成为此杀的目标。",
	"XSceshi":"测试",
	"XSceshi_info":"出牌阶段限1次，你可以指定1种牌类型，然后从牌堆中随机获得1张；若牌堆没有该种牌，你摸1张牌。",
	"XSgongao":"功獒",
	"XSgongao_info":"当其他角色装备区的牌进入弃牌堆时，若你在其攻击范围内或其在你的攻击范围内，你可以获得此牌。",
	"XSbingfeng":"兵锋",
	"XSbingfeng_info":"游戏开始时，你从牌堆中随机获得1张武器牌。锁定技，当你失去武器时，你获得此武器的特效。",
	"XSxiaoqi":"骁骑",
	"XSxiaoqi_info":"出牌阶段限1次，你可以获得1名其他角色的1张装备牌并令其摸1张牌，根据你获得的装备类型本回合你的下1张杀：武器，伤害+1；其他：无法被闪响应。",
	"XScanggong":"藏功",
	"XScanggong_info":"当你造成伤害时，可以防止此伤害，并令目标获得伤害数值的标记；你对有标记的角色造成伤害时，可以移除全部标记令伤害增加等量数值，若至少移除3枚，伤害+1。",
	"XSxiongcai":"雄才",
	"XSxiongcai_info":"你的结束阶段，若红色手牌不少于黑色，你可以交给1名其他角色至少1张红色手牌令其获得1个额外回合，当其于此回合内首次杀死角色时，你摸3张牌。",
	"XSguhuo":"蛊祸",
	"XSguhuo_info":"出牌阶段限1次，你可以交给1名其他角色1张红色手牌并获得其全部黑色手牌，若你因此获得的牌数大于2，该角色摸1张牌，若小于2则你摸1张牌。",
	"XSzuiji":"罪己",
	"XSzuiji_info":"锁定技，你失去红色手牌时进行判定，若为黑色则将其置于武将牌上，称为威，每有1张你的手牌上限+1（最多3）。出牌阶段若你的威不小于体力上限，你可以展示手牌并弃置全部威，然后令至多等量的角色各回复1点体力并摸1张牌，若如此，你失去罪己。",
	"XSjianzhu":"谏逐",
	"XSjianzhu_info":"出牌阶段限1次，你可以指定1名其他角色并声明1种本回合未声明过的花色，该角色直至你的下个准备阶段手牌上限+X(X为其手牌中该花色牌的数量)。",
	"XSduxian":"妒贤",
	"XSduxian_info":"出牌阶段限1次，你可以指定1名其他角色并声明1种本回合未声明过的花色，该角色直至你的下个准备阶段使用或打出该花色的牌时需弃置1张牌。",
	"XSfenshu":"焚书",
	"XSfenshu_info":"你的回合外当其他角色使用你本回合内未声明过的花色的基本牌或普通锦囊牌指定目标时，你可以展示手牌中1张同花色的牌并取消之，若你展示的牌与其名称不同，你弃置之。",
	"XSfenyong":"奋勇",
	"XSfenyong_info":"锁定技，当你受到伤害时，若伤害来源体力：大于你，你摸3张牌；等于你，你造成的下1次伤害+1；小于你，你弃置装备区的1张牌。",
	},//翻译
};
if(lib.device||lib.node){
	for(var i in XSYG.character){XSYG.character[i][4].push('ext:血色衣冠/'+i+'.jpg');}
	}else{
		for(var i in XSYG.character){XSYG.character[i][4].push('db:extension-血色衣冠:'+i+'.jpg');}
	}
	return XSYG;
});
lib.config.all.characters.push('XSYG');
if(!lib.config.characters.contains('XSYG')) lib.config.characters.remove('XSYG');
lib.translate['XSYG_character_config']='血色衣冠';

		//(以上从第22行到第74行为一个扩展小包的框架，保留了例子，将整个框架复制到此行下面就可另创单独新扩展小包）

	// ---------------------------------------卡牌------------------------------------------//

game.import('card',function(){
	var XS_card={
	name:'XS_card',
	connect:true,
	card:{	//卡牌
			"XSwuzhui":{
			image:"ext:血色衣冠/XSwuzhui.png",
    fullskin:true,
    type:"equip",
    subtype:"equip4",
    distance:{
        globalFrom:-1,
    },
    enable:true,
    selectTarget:-1,
    filterTarget:function (card,player,target){
        return target==player;
    },
    modTarget:true,
    allowMultiple:false,
    content:function (){
        target.equip(cards[0]);
    },
    toself:true,
	onLose:function(){
		player.chooseUseTarget({name:"juedou"},true,true);
	},
	skills:['XSwuzhui_skill'],
    ai:{
        basic:{
            order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
            useful:3,
            equipValue:5,
            value:function (card,player,index,method){
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
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    return equipValue(card,player)-value;
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                return equipValue-value;
            },
        },
        result:{
            target:function (player,target){
                return get.equipResult(player,target,name);
            },
        },
    },
            },
			"XSsaluzi":{
			image:"ext:血色衣冠/XSsaluzi.png",
   fullskin:true,
    type:"equip",
    subtype:"equip3",
    distance:{
        globalTo:1,
    },
    enable:true,
    selectTarget:-1,
    filterTarget:function (card,player,target){
        return target==player;
    },
    modTarget:true,
    allowMultiple:false,
    content:function (){
        target.equip(cards[0]);
    },
	skills:['XSsaluzi_skill'],
    toself:true,
    ai:{
        basic:{
            order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
            useful:3,
            equipValue:7.5,
            value:function (card,player,index,method){
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
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    return equipValue(card,player)-value;
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                return equipValue-value;
            },
        },
        result:{
            target:function (player,target){
                return get.equipResult(player,target,name);
            },
        },
    },
            },
			"XShufu":{
				image:"ext:血色衣冠/XShufu.png",
   fullskin:true,
    type:"basic",
    toself:true,
    enable:function (event,player){
        return true;
    },
    usable:1,
    selectTarget:-1,
    modTarget:true,
    filterTarget:function (card,player,target){
        return target==player;
    },
    content:function (){
		target.stat.push({card:{},skill:{}});
    },
    ai:{
        basic:{
            useful:3,
            value:8,
        },
        order:0.5,
        result:{
            target:function (player,target){
				var num1=0;
				if(target.getStat().allSkills>0) num1+=target.getStat().allSkills;
				if(target.getStat().card.sha>0) num1++;
				return num1;
            },
        },
    },
            },
		   "XSmantian":{
				image:"ext:血色衣冠/XSmantian.png",
    fullskin:true,
    type:"delay",
    filterTarget:function (card,player,target){
        return (lib.filter.judge(card,player,target));
    },
    judge:function (card){
        if(get.suit(card)!='diamond') return 1;
        return -3;
    },
    effect:function (){
        if(result.bool==true){
			player.addTempSkill('XSmantianskill',{player:'phaseJudgeBefore'})
        }
    },
    ai:{
        basic:{
            order:1,
            useful:1,
            value:8,
        },
        result:{
            target:function (player,target){
                var num1=target.countCards('h');
				var num2=target.hp;
				if(num1==0||num2<2) return 2;
				else return 1;
            },
        },
    },
    selectTarget:1,
    enable:true,
    content:function (){
        target.addJudge(card,cards);
    },
    allowMultiple:false,
            },
            "XSshediaogong":{
				onLose:function(){
					player.draw(2);
				},
				image:"ext:血色衣冠/XSshediaogong.png",
                fullskin:true,
                vanish:true,
                derivation:"XStiemuzhen",
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-4,
                },
                skills:["XSshediao"],
                destroy:"XSyingong",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:5,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
            "XSlongquan":{
				onLose:function(){
					player.unmarkSkill('XSlongquanskill');
				},
				image:"ext:血色衣冠/XSlongquan.png",
                fullskin:true,
                vanish:true,
                derivation:"XSouyezi",
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                skills:["XSlongquanskill","XSpojia"],
                destroy:"XSzhujian",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:5,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
            "XStaie":{
				onLose:function(){
					player.unmarkSkill('XStaieskill');
				},
				image:"ext:血色衣冠/XStaie.png",
                fullskin:true,
                vanish:true,
                derivation:"XSouyezi",
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["XStaieskill","XSpojia"],
                destroy:"XSzhujian",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:5,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
            "XSzhanlu":{
				onLose:function(){
					player.unmarkSkill('XSzhanluskill');
				},
				image:"ext:血色衣冠/XSzhanlu.png",
                fullskin:true,
                vanish:true,
                derivation:"XSouyezi",
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["XSzhanluskill","XSpojia"],
                destroy:"XSzhujian",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:5,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
            "XSchunjun":{
				onLose:function(){
					player.unmarkSkill('XSchunjunskill');
				},
				image:"ext:血色衣冠/XSchunjun.png",
                fullskin:true,
                vanish:true,
                derivation:"XSouyezi",
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["XSchunjunskill","XSpojia"],
                destroy:"XSzhujian",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:5,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
            "XSgongbu":{
				onLose:function(){
					player.unmarkSkill('XSgongbuskill');
				},
				image:"ext:血色衣冠/XSgongbu.png",
                fullskin:true,
                vanish:true,
                derivation:"XSouyezi",
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["XSgongbuskill","XSpojia"],
                destroy:"XSzhujian",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:5,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
            },
            "XSchunqiangshejian":{
				image:"ext:血色衣冠/XSchunqiangshejian.png",
                fullskin:true,
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target).set('preserve','win').clear=false;
        "step 1"
        if(result.bool){
            player.useCard({name:'sha'},target,false);
            result.player.clone.moveDelete(player);
            result.target.clone.moveDelete(player);
        }
        else if(!result.cancelled){
            result.player.clone.delete();
            result.target.clone.delete();
            game.addVideo('deletenode',player,get.cardsInfo([result.player,result.target]));
        }
    },
                ai:{
                    order:4,
                    value:[4,1],
                    result:{
                        target:function (player){
                if(player.countCards('h')<=1) return 0;
                return -1;
            },
                        player:function (player){
                if(player.countCards('h')<=1) return 0;
                return 0.5;
            },
                    },
                    tag:{
                        loseCard:1,
                    },
                },
                selectTarget:1,
            },
            "XSyuxi":{
				onLose:function(){
					player.unmarkSkill('XSyuxiskill_show');
				},
				image:"ext:血色衣冠/XSyuxi.png",
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                nopower:true,
                nomod:true,
                unique:true,
                skills:["XSyuxiskill"],
                ai:{
                    equipValue:9,
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:1,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "XSxuanyuanjian":{
				image:"ext:血色衣冠/XSxuanyuanjian.png",
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                ai:{
                    basic:{
                        equipValue:9,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["XSxuanyuan_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "XSpaozhuanyinyu":{
				image:"ext:血色衣冠/XSpaozhuanyinyu.png",
                fullskin:true,
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        var check1=target.isMinHp()&&target.isDamaged()&&player.hp>0;
        var check2=target.isMinHandcard()&&player.countCards('h')>0;
        return check1||check2;
    },
                content:function (){
        'step 0'
        if(target.isMinHp()&&target.isDamaged()){
            player.chooseBool('是否失去1点体力，令'+get.translation(target)+'回复2点体力？').set('ai',function(){
                var num=target.maxHp-target.hp;
                if(num>1&&player.hp>2) return true;
                return false;
            });
        }
        'step 1'
        if(result.bool){
            player.loseHp();
            target.recover(2);
            event.rec=true;
        }
        'step 2'
        if(!event.rec&&target.isMinHandcard()){
            player.chooseBool('是否弃置1张手牌，令'+get.translation(target)+'摸3张牌？').set('ai',function(){
                if(player.countCards('h')>2) return true;
                return false;
            });
        }
        else event.finish();
        'step 3'
        if(result.bool){
            player.chooseToDiscard('h',1,true);
            target.draw(3);
        }
    },
                ai:{
                    order:1,
                    value:7,
                    result:{
                        target:function (player,target){
                var num=0;
                if(target.isMinHp()&&get.recoverEffect(target)>0){
                    var num1=target.maxHp-target.hp;
                    if(num1>1&&player.hp>2)
                    num=3;
                }
                if(target.isMinHandcard()){
                   if(player.countCards('h')>2)
                   num=3;
                }
                return num;
            },
                    },
                },
                selectTarget:1,
            },
            "XShunshui":{
				image:"ext:血色衣冠/XShunshui.png",
                fullskin:true,
                type:"trick",
                filterTarget:true,
                global:"XShunshuimoyu",
                content:function (){
        if(target.countCards('he')){
            player.gainPlayerCard('he',target,true);
        }
    },
                ai:{
                    order:1,
                    useful:6,
                    value:5,
                    result:{
                        target:-1,
                    },
                    tag:{
                        loseCard:1,
                    },
                },
                selectTarget:1,
            },
            "XSshushang":{
				image:"ext:血色衣冠/XSshushang.png",
                fullskin:true,
                type:"trick",
                enable:true,
                selectTarget:-1,
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                content:function (){
        player.addSkill('XSshushangkaihua')
    },
                ai:{
                    order:7,
                    useful:6,
                    value:8,
					result:{
						target:function (player,target){
							if(!target.hasSkill('XSshushangkaihua')) return 2;
							return 0;
						},
					},
                },
            },
            "XSjiuding":{
				image:"ext:血色衣冠/XSjiuding.png",
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                nopower:true,
                nomod:true,
                unique:true,
                skills:["XSjiudingskill"],
                ai:{
                    equipValue:9,
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:1,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "XSdacao":{
				image:"ext:血色衣冠/XSdacao.png",
                fullskin:true,
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        return target.countCards('h')>0&&target!=player;
    },
                content:function (){
        if(target.countCards('h','sha')){
            target.useCard({name:'sha'},player);
            var hs=target.getCards('h','sha');
            target.discard(hs);
        }
        else{
            if(!player.isUnderControl(true)){
                target.showHandcards();
            }
            else{
                game.log(target,'展示了',target.getCards('h'));
            }
            player.discardPlayerCard(target,'h',true,'visible');
        }
    },
                ai:{
                    order:4,
                    value:[4,1],
                    result:{
                        target:function (player,target){
                if(player.hasShan()) return -1;
                return 0;
            },
                    },
                },
                selectTarget:1,
            },
            "XSjiadao":{
				image:"ext:血色衣冠/XSjiadao.png",
                fullskin:true,
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        return target!=player.next&&player.previous!=target;
    },
                chongzhu:function (){
        return game.countPlayer()<=3;
    },
                content:function (){
        player.addTempSkill('XSjiadaoskill');
        target.addSkill('XSjiadaoskill_mark');
    },
                ai:{
                    order:8,
                    value:[6,1],
                    result:{
                        target:function (player,target){
                var dis=get.distance(player,target,'attack');
                var att=get.attitude(player,player.next);
                if(att<0) {
                    if(dis>1) return -1;
                    return -0.5;
                }
                return 0;
            },
                    },
                },
                selectTarget:1,
            },
            "XSjiuxi":{
				image:"ext:血色衣冠/XSjiuxi.png",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                ai:{
                    basic:{
                        equipValue:9,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["XSjiuxi_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
},//卡牌

skill:{	//卡牌的技能
		"XSwuzhui_skill":{
			equipSkill:true,
			init:function (player){
				player.chooseUseTarget({name:"sha"},true,true);
			},
		},
		"XSsaluzi_skill":{
			equipSkill:true,
			trigger:{
				player:["damageBefore","loseHpBefore"],
			},
			filter:function (event,player){
				return player.getEquip('XSsaluzi');
			},
			check:function (event,player){
				return event.num>=player.hp||event.num>1;
			},
			content:function (){
				player.discard(player.getEquip('XSsaluzi'));
				trigger.cancel();
			},
		},
          "XSmantianskill":{
	marktext:"瞒",
	init:function (player){
		player.markSkill('XSmantianskill');
	},
	intro:{
		content:"你无法被指定为除装备牌、桃以外的目标。",
	},
	mod:{
		targetEnabled:function(card,player,target){
			if(get.type(card)!='equip'&&card.name!='tao') return false;
		},
	},
		},
		  "EXqibao_skill":{
	equipSkill:true,
	trigger:{source:'damageBegin1'},
	forced:true,
	filter:function(event){
		if(event.card&&event.card.name=='sha') {
			return event.player.isHealthy()||event.player.hp==1;
		}
		return false;
	},
	content:function(){
		trigger.num++;
	},
	ai:{
		effect:{
			player:function(card,player,target){
				if(card.name=='sha'&&target.isHealthy()&&get.attitude(player,target)>0){
					return [1,-2];
				}
			}
		}
	},
            },
           "EXqinggang_skill":{
	equipSkill:true,
	audio:"ext:血色衣冠:1",
	trigger:{
		player:"shaBegin",
	},
	forced:true,
	check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
	logTarget:"target",
	content:function (){
		if(!trigger.target.hasSkill('baiban')){
		trigger.target.addTempSkill('baiban','shaAfter');
        }
    },
	filter:function (event,player){
        return true;
    },
	ai:{
		unequip:true,
		skillTagFilter:function (player,tag,arg){
			if(arg&&arg.name=='sha') return true;
            return false;
        },
	},
            },
			"EXzhuque_skill":{
	group:["EXzhuque_skill3"],
	equipSkill:true,
	trigger:{player:'useCard1'},
	filter:function(event,player){
		if(event.card.name=='sha'&&!event.card.nature) return true;
	},
	audio:"ext:血色衣冠:1",
	check:function(event,player){
		var eff=0;
		for(var i=0;i<event.targets.length;i++){
			var target=event.targets[i];
			var eff1=get.damageEffect(target,player,player);
			var eff2=get.damageEffect(target,player,player,'fire');
			eff+=eff2;
			eff-=eff1;
		}
		return eff>=0;
	},
	content:function(){
		trigger.card.nature='fire';
		player.addSkill('EXzhuque_skill2');
		player.storage.EXzhuque_skill=trigger.card;
	},
            },
		   "EXzhuque_skill2":{
	trigger:{player:'useCardAfter'},
	forced:true,
	popup:false,
	content:function(){
		delete player.storage.EXzhuque_skill.nature;
	}
            },
		   "EXzhuque_skill3":{
	trigger:{
		source:"damageBefore",
	},
	forced:true,
	content:function (){
        trigger.nature='fire';
    },
            },
		   "EXqinglong_skill":{
	audio:"ext:血色衣冠:1",
	equipSkill:true,
	trigger:{player:'shaMiss'},
	direct:true,
	filter:function(event,player){
		if(get.mode()=='guozhan') return false;
		return get.itemtype(event.cards)=='cards'&&player.canUse('sha',event.target)&&player.hasSha();
	},
	content:function(){
		"step 0"
		var card=trigger.cards.slice(0);
		if(get.color(card)=='red') {
			player.gain(card,'gain2','log');
		}
		if(player.hasSkill('jiu')){
			game.broadcastAll(function(player){
				player.removeSkill('jiu');
			},player);
			event.jiu=true;
		}
		player.chooseToUse('每当你使用的杀被目标角色使用的闪抵消时，若此杀为红色你获得之，且你可以对其使用1张杀（无距离限制）。',{name:'sha'},trigger.target,-1).set('addCount',false).logSkill='EXqinglong_skill';
		"step 1"
		if(result.bool);
		else if(event.jiu){
			player.addSkill('jiu');
		}
	}
            },
		   "EXzhangba_skill":{
	equipSkill:true,
	enable:['chooseToUse','chooseToRespond'],
	filterCard:true,
	selectCard:function (){
        var player=_status.event.player;
		if(player.countCards('h')==1) return 1;
		return 2;
    },
	position:'he',
	viewAs:{name:'sha'},
	filter:function(event,player){
		return player.countCards('h')>=1;
	},
	audio:"ext:血色衣冠:1",
	prompt:'将2张手牌当杀使用或打出，或将最后1张手牌当作杀使用或打出。',
	check:function(card){
		if(card.name=='sha') return 0;
		return 6-get.useful(card)
	},
	ai:{
		respondSha:true,
		skillTagFilter:function(player){
			return player.countCards('h')>=1;
		},
	}
            },
		   "EXfangtian_skill":{
	audio:"ext:血色衣冠:1",
	equipSkill:true,
	mod:{
		selectTarget:function(card,player,range){
			if(card.name!='sha') return;
			if(get.mode()=='guozhan') return;
			if(range[1]==-1) return;
			var cards=player.getCards('h');
			for(var i=0;i<cards.length;i++){
				if(cards[i].classList.contains('selected')==false)
					return;
			}
			range[1]+=2;
		}
	},
	forced:true,
	trigger:{
		player:"shaMiss",
	},
	content:function (){
		player.draw();
	},
            },
		   "EXqilin_skill":{
	trigger:{player:'useCardToPlayered'},
	direct:true,
	filter:function(event,player){
		return event.card.name=='sha'&&event.target.isAlive()&&event.target.countCards('e')>0;
	},
	equipSkill:true,
	audio:"ext:血色衣冠:1",
	content:function(){
		"step 0"
		var att=(get.attitude(player,trigger.target)<=0);
		var next=player.chooseButton();
		next.set('att',att);
		next.set('createDialog',['是否发动【强化麒麟弓】，弃置'+get.translation(trigger.target)+'的一张装备牌？',trigger.target.getCards('e')]);
		next.set('ai',function(button){
			if(_status.event.att) return get.buttonValue(button);
			return 0;
		});
		"step 1"
		if(result.bool){
			player.logSkill('EXqilin_skill',trigger.target);
			trigger.target.discard(result.links[0]);
		}
	},
            },
		   "EXshuanggu_skill":{
	equipSkill:true,
	trigger:{player:'useCardToPlayered'},
	audio:"ext:血色衣冠:1",
	logTarget:'target',
	filter:function(event,player){
		if(event.card.name!='sha') return false;
		if(player.sex=='male'&&event.target.sex=='female') return true;
		if(player.sex=='female'&&event.target.sex=='male') return true;
		if(player.hp==event.target.hp) return true;
		return false;
	},
	content:function(){
		"step 0"
		trigger.target.chooseToDiscard('弃置一张手牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
			var trigger=_status.event.getTrigger();
			return -get.attitude(trigger.target,trigger.player)-get.value(card);
		});
		"step 1"
		if(result.bool==false) player.draw();
	}
            },
		   "EXhanbing_skill":{
	equipSkill:true,
	audio:"ext:血色衣冠:1",
	trigger:{source:'damageBegin2'},
	filter:function(event){
		return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.getCards('he').length>0;
	},
	check:function(event,player){
		var target=event.player;
		var eff=get.damageEffect(target,player,player);
		if(get.attitude(player,target)>0){
			if(eff>=0) return false;
			return true;
		}
		if(eff<=0) return true;
		if(target.hp==1) return false;
		if(event.num>1||player.hasSkill('tianxianjiu')||
		player.hasSkill('luoyi2')||player.hasSkill('reluoyi2')) return false;
		if(target.countCards('he')<3) return -1;
		var num=0;
		var cards=target.getCards('he');
		for(var i=0;i<cards.length;i++){
			if(get.value(cards[i])>6) num++;
		}
		if(num>=2) return true;
		return false;
	},
	logTarget:"player",
	content:function(){
		"step 0"
		trigger.cancel();
		"step 1"
		if(trigger.player.countDiscardableCards(player,'he')){
			player.line(trigger.player);
			player.discardPlayerCard('he',trigger.player,true);
		}
		"step 2"
		if(trigger.player.countDiscardableCards(player,'he')){
		player.line(trigger.player);
			player.discardPlayerCard('he',trigger.player,true);
		}
		"step 3"
		if(trigger.player.countDiscardableCards(player,'he')){
		player.line(trigger.player);
			player.discardPlayerCard('he',trigger.player,true);
		}
	}
            },
		   "EXguanshi_skill":{
	equipSkill:true,
	audio:"ext:血色衣冠:1",
	trigger:{player:'shaMiss'},
	direct:true,
	filter:function(event,player){
		return player.countCards('he')>1&&event.target.isAlive();
	},
	content:function(){
		"step 0"
		var next=player.chooseToDiscard('弃置1张牌令此杀依然造成伤害',1,'he',function(card){
			return _status.event.player.getCards('e',{subtype:'equip1'}).contains(card)==false;
		});
		next.logSkill='EXguanshi_skill';
		next.set('ai',function(card){
			var evt=_status.event.getParent();
			if(get.attitude(evt.player,evt._trigger.target)<0){
				if(evt.player.hasSkill('jiu')||
				evt.player.hasSkill('tianxianjiu')||
				evt._trigger.target.hp==1){
					return 8-get.value(card)
				}
				return 5-get.value(card)
			}
			return -1;
		});
		"step 1"
		if(result.bool){
			trigger.untrigger();
			trigger.trigger('shaHit');
			trigger._result.bool=false;
		}
	}
            },
		   "EXguding_skill":{
	equipSkill:true,
	audio:"ext:血色衣冠:1",
	trigger:{source:'damageBegin1'},
	filter:function(event){
		if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
		if(event.card&&event.card.name=='sha'){
			if(event.player.countCards('h')==0||(event.player.countCards('e')==0&&event.player.countCards('j')==0)) return true;
		}
		return false;
	},
	forced:true,
	content:function(){
		trigger.num++;
	},
	ai:{
		effect:{
			target:function(card,player,target,current){
				if(card.name=='sha'&&target.countCards('h')==0) return [1,-2];
			}
		}
	}
            },
		   "EXyinyue_skill":{
	equipSkill:true,
	trigger:{player:['useCard','respondAfter']},
	direct:true,
	filter:function(event,player){
		if(_status.currentPhase==player) return false;
		if(!event.cards) return false;
		if(event.cards.length!=1) return false;
		if(lib.filter.autoRespondSha.call({player:player})) return false;
		return true;
	},
	content:function(){
		'step 0'
		var next=player.chooseToUse(get.prompt('EXyinyue_skill'),{name:'sha'});
		next.aidelay=true;
		next.logSkill='EXyinyue_skill';
		next.noButton=true;
		'step 1'
		if(result.bool){
			game.delay();
		}
	}
            },
		   "EXzhungang_skill":{
	equipSkill:true,
	trigger:{player:'useCardToPlayered'},
	logTarget:'target',
	filter:function(event,player){
		return event.card.name=='sha'&&event.player.countCards('h');
	},
	check:function(event,player){
		var target=event.target;
		if(get.attitude(player,target)>=0) return false;
		return true;
	},
	content:function(){
		'step 0'
		game.delayx();
		'step 1'
		player.discardPlayerCard('h',trigger.target,true);
	}
            },
            "XSgongbuskill":{
			mark:true,
	init:function (player){
		player.markSkill('XSgongbuskill');
	},
	intro:{
		content:function (storage){
			return '天骄：锁定技，你点数大于6的杀可以指定额外1个目标；当你的杀造成伤害后，根据此杀指定的目标个数：1，目标无法使用锦囊牌直到你的下个准备阶段；2，目标弃置1张牌；3，50%概率摸1张牌。';
		},
	},
	mod:{
		selectTarget:function (card,player,range){
			if(_status.currentPhase==player&&card.name=='sha'&&card.number>=7) range[1]+=1;
		},
	},
    priority:15,
	trigger:{
		player:"shaBegin",
	},
	forced:true,
	filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.targets.length>0;
    },
	content:function (){
		switch(trigger.targets.length){
			case 1:player.addTempSkill('XSgongbuskill_1',{player:'shaAfter'});break;
			case 2:player.addTempSkill('XSgongbuskill_2',{player:'shaAfter'});break;
			case 3:player.addTempSkill('XSgongbuskill_4',{player:'shaAfter'});break;
		}
    },
	ai:{
		threaten:1.2,
	},
	group:["XSgongbuskill_remove"],
	subSkill:{
		remove:{
            trigger:{
                player:["phaseBegin","dieBegin"],
            },
            forced:true,
            popup:false,
            silent:true,
            content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XSgongbuskill_3')){
                        game.players[i].removeSkill('XSgongbuskill_3');
                    }
                }
            },
        },
        1:{
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				return event.player.isAlive();
			},
			content:function (){
				trigger.player.addSkill('XSgongbuskill_3');
			},
        },
		2:{
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				return event.player.isAlive();
			},
			content:function (){
				trigger.player.chooseToDiscard('he',true);
			},
        },
		3:{
            marktext:"封",
            init:function (player){
                player.markSkill('XSgongbuskill_3');
            },
            intro:{
                content:function (storage){
                    return '无法使用普通锦囊牌';
                },
            },
			mod:{
				cardEnabled:function(card){
					if(get.type(card)=='trick') return false
				}
			},
        },
		4:{
			trigger:{
				source:"damageEnd",
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				return event.num>0;
			},
			content:function (){
				if(Math.random()<=0.5) {
					player.draw();
				}
			},
		},
    },
            },
            "XSchunjunskill":{
			mark:true,
	init:function (player){
		player.markSkill('XSchunjunskill');
	},
	intro:{
		content:function (storage){
			return '威加：锁定技，其他角色结束阶段，若其手牌数大于你的体力值，你获得其1张手牌。';
		},
	},
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player&&event.player.countCards('h')>player.hp;
    },
                content:function (){
        player.gainPlayerCard('h',trigger.player);
    },
                ai:{
                    threaten:function (player,target){
            if(player.hp>=4) return 0.8;
            if(player.hp==3) return 1.1;
            if(player.hp==2) return 1.2;
            return 1.5;
        },
                },
            },
           "XSzhanluskill":{
			   	mark:true,
	init:function (player){
		player.markSkill('XSzhanluskill');
	},
	intro:{
		content:function (storage){
			return '仁政：锁定技，当你受到伤害后，摸伤害数值的牌，并且可以指定1名其他角色获得造成伤害的牌。';
		},
	},
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.draw(trigger.num);
        if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
            player.chooseTarget(get.prompt('XSzhanluskill'),'选择1名其他角色获得'+get.translation(trigger.cards),function(card,player,target){
                return player!=target&&trigger.source!=target;
            }).ai=function(target){
                var player=_status.event.player;
                return get.attitude(player,target);
            };
        }
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            target.gain(trigger.cards,"gain2");
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&player!=target) return [1,0.6];
            },
                    },
                },
            },
           "XStaieskill":{
	mark:true,
	init:function (player){
		player.markSkill('XStaieskill');
	},
	intro:{
		content:function (storage){
			return '威压：锁定技，摸牌阶段你额外摸1张牌；结束阶段你指定1种你没有的花色，其他角色结束阶段，若其手牌数大于你，其随机弃置1张此花色的手牌。';
		},
	},
    trigger:{
        player:"phaseEnd",
    },
    forced:true,
    content:function (){
        "step 0"
		var suits=[];
		if(!player.countCards('h',{suit:'heart'})) suits.push('heart');
		if(!player.countCards('h',{suit:'diamond'})) suits.push('diamond');
		if(!player.countCards('h',{suit:'club'})) suits.push('club');
		if(!player.countCards('h',{suit:'spade'})) suits.push('spade');
        player.chooseControl(suits).set('prompt','选择一种花色');
        "step 1"
        if(result.control){
            player.storage.XStaieskill=result.control;
        }
        else{
            event.finish();
        }
    },
	group:["XStaieskill_mopai","XStaieskill_dis"],
    subSkill:{
        mopai:{
			trigger:{
				player:"phaseDrawBegin",
			},
			forced:true,
			content:function (){
				trigger.num++;
			},
        },
		dis:{
			trigger:{
				global:"phaseEnd",
			},
			forced:true,
			filter:function (event,player){
				if(player.storage.XStaieskill) {
					var suit1=player.storage.XStaieskill;
					if(event.player!=player&&event.player.countCards('h')>player.countCards('h')) {
						return event.player.countCards('h',{suit:suit1});
					}
					return false;
				}
				return false;
			},
			content:function (){
				var suit1=player.storage.XStaieskill;
				var card1=trigger.player.getCards('h',{suit:suit1}).randomGet();
				trigger.player.discard(card1)
			},
			ai:{
				threaten:1.3,
			},
        },
    },
            },
           "XSlongquanskill":{
	mark:true,
	init:function (player){
		player.markSkill('XSlongquanskill');
	},
	intro:{
		content:function (storage){
			return '天命：1名角色的判定牌生效前，你可以展示牌堆顶1张牌，用其代替并获得该判定牌，若非每轮首次发动此技能，你需弃置1张牌。';
		},
	},
    trigger:{
        global:"judge",
    },
	check:function (event,player){
		var res=event.judge(event.player.judging[0]);
		var att=get.attitude(player,event.player);
		if(att==0||res==0) return 0;
		if(att>0){
			return res<0;
		}
		else{
			return res>0;
		}
    },
    content:function (){
		"step 0"
		event.cards=get.cards();
		player.showCards(event.cards);
		player.respond(event.cards[0],'highlight');
		if(trigger.player.judging[0].clone){
			trigger.player.judging[0].clone.classList.remove('thrownhighlight');
			game.broadcast(function(card){
				if(card.clone){
					card.clone.classList.remove('thrownhighlight');
				}
			},trigger.player.judging[0]);
			game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
		}
		player.$gain2(trigger.player.judging[0]);
		player.gain(trigger.player.judging[0]);
		trigger.player.judging[0]=event.cards[0];
		if(!get.owner(event.cards[0],'judge')){
			trigger.position.appendChild(event.cards[0]);
		}
		game.log(trigger.player,'的判定牌改为',event.cards[0]);
		game.delay();
		if(player.hasSkill('XSlongquanskill_temp')) {
			player.chooseToDiscard(1,'he',true);
		}
		"step 1"
		if(!player.hasSkill('XSlongquanskill_temp')) {
			player.addSkill('XSlongquanskill_temp');
		}
    },
    ai:{
		threaten:1.2,
		effect:{
　　		player:function(card,player){
				if(card.name=='shandian'||card.name=='fulei') {
					return [1,3];
				}
			}
		},
        tag:{
            rejudge:1,
        },
    },
	group:["XSlongquanskill_remove"],
    subSkill:{
		remove:{
            trigger:{
                player:["phaseBegin"],
            },
			filter:function (event,player){
				return player.hasSkill('XSlongquanskill_temp');
			},
            forced:true,
            popup:false,
            silent:true,
            content:function (){
				player.removeSkill('XSlongquanskill_temp');
            },
        },
		temp:{
        },
    },
            },
		   "XSpojia":{
	   ai:{
        unequip:true,
        skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
    },
            },
	"XSshediao":{
			mod:{
				selectTarget:function (card,player,range){
		if(_status.currentPhase==player&&card.name=='sha'&&get.color(card)=='red') range[1]+=1;
	},
			},
			sub:true,
			trigger:{
				source:"damageBegin",
			},
			filter:function (event,player){
	return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.getCards('e').length>0
	},
			direct:true,
			audio:"ext:血色衣冠:true",
                content:function (){
        "step 0"
        var att=(get.attitude(player,trigger.player)<=0);
        var next=player.chooseButton();
        next.set('att',att);
        next.set('createDialog',['是否发动【射雕弓】，弃置'+get.translation(trigger.player)+'的一张装备牌？',trigger.player.getCards('e')]);
        next.set('ai',function(button){
            if(_status.event.att) return get.buttonValue(button);
            return 0;
        });
        "step 1"
        if(result.bool){
            player.logSkill('XSshediao',trigger.player);
            trigger.player.discard(result.links[0]);
        }
    },
	},
	"XShunshuimoyu":{
                trigger:{
                    global:"loseEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.player==player) return false;
        if(!event.player.countCards('he')) return false;
        if(!lib.filter.targetEnabled({name:'XShunshui'},player,event.player)) return false;
        if(event._notrigger.contains(event.player)) return false;
        if(event.cards.length<2) return false;
        return player.hasCard('XShunshui');
    },
                content:function (){
        player.chooseToUse(get.prompt('XShunshui',trigger.player).replace(/发动/,'使用'),function(card,player){
            if(card.name!='XShunshui') return false;
            return lib.filter.cardEnabled(card,player,'forceEnable');
        },trigger.player,-1).targetRequired=true;
    },
            },
	"XSshushangkaihua":{
                trigger:{
                    player:"phaseBefore",
                },
                direct:true,
                content:function (){
        var num=Math.min(4,player.maxHp);
        player.chooseToDiscard(num,'h',true);
		player.removeSkill('XSshushangkaihua');
    },
                group:["XSshushangkaihua_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        direct:true,
                        content:function (){
                var num=Math.min(4,player.maxHp);
                player.draw(num);
            },
                        sub:true,
                    },
                },
            },
	"XSjiudingskill":{
                mod:{
                    suit:function (card,suit){
             if(_status.event.player.storage.XSjiudingskill)
             return _status.event.player.storage.XSjiudingskill;
        },
                },
                trigger:{
                    player:"phaseBegin",
                },
                logTarget:"player",
                forced:true,
                content:function (){
        "step 0"
        var suits=['heart2','spade2','diamond2','club2'];
        player.chooseControl(suits).set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'club2';
                case 1:return 'diamond2';
                case 2:return 'spade2';
                case 3:case 4:case 5:case 6:return 'heart2';
            }
        }).set('prompt','选择一种花色');
        "step 1"
        if(result.control){
            var suit;
            switch(result.control){
                case 'heart2':suit='heart';break;
                case 'spade2':suit='spade';break;
                case 'diamond2':suit='diamond';break;
                case 'club2':suit='club';break;
            }
            player.popup(result.control);
            player.storage.XSjiudingskill=suit;
        }
        else{
            event.finish();
        }
    },
                group:["XSjiudingskill_clear"],
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        filter:function (event,player){
                return player.storage.XSjiudingskill;
            },
                        direct:true,
                        silent:true,
                        content:function (){
                delete player.storage.XSjiudingskill;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
	"XSjiadaoskill":{
                mod:{
                    targetInRange:function (card,player,target){
            if(target.hasSkill('XSjiadaoskill_mark')){
                return true;
            }
        },
                },
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        if(!lib.filter.targetEnabled2(event.card,player,player.next)) return false;
        if(!event.player.hasSkill('XSjiadaoskill_mark')) return false;
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseBool('是否对'+get.translation(player.next)+'使用'+get.translation(trigger.card)+'？').set('ai',function(){
            var player=_status.event.player;
            var trigger=_status.event.getTrigger();
            if(get.effect(player.next,trigger.card,player,player)>0) return true;
            return false;
        });
        "step 1"
        if(result.bool){
            player.useCard(trigger.card,player.next);
        }
    },
                group:["XSjiadaoskill_remove"],
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"伐",
                        init:function (player){
                player.markSkill('XSjiadaoskill_mark');
            },
                        intro:{
                            content:function (storage){
                    return '你成为假道伐虢的目标';
                },
                        },
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            player:["phaseDiscardAfter"],
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('XSjiadaoskill_mark')){
                        game.players[i].removeSkill('XSjiadaoskill_mark');
                    }
                }
            },
                        sub:true,
                    },
                },
            },
	"XSxuanyuan_skill":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        if(player.previous==event.player) return false;
        if(player==event.player.next) return false;
        if(!lib.filter.targetEnabled2(event.card,player,event.player.next)) return false;
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseBool('是否对'+get.translation(trigger.player.next)+'使用'+get.translation(trigger.card)+'？').set('ai',function(){
            var player=_status.event.player;
            var trigger=_status.event.getTrigger();
            if(get.effect(trigger.player.next,trigger.card,player,player)>0) return true;
            return false;
        });
        "step 1"
        if(result.bool){
            player.useCard(trigger.card,trigger.player.next,false);
        }
    },
            },
	"XSyuxiskill":{
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
        trigger.num++;
    },
                group:["XSyuxiskill_show"],
                subSkill:{
                    show:{
                        mark:true,
                        init:function (player){
                player.markSkill('XSyuxiskill_show');
            },
                        intro:{
                            mark:function (dialog,content,player){
                var hs=player.getCards('h');
                    if(hs.length){
                        dialog.addSmall(hs)&&dialog.addText('手牌');
                    }
                    else{
                        dialog.addText('无手牌');
                    }
                },
                            content:function (content,player){
                    var hs=player.getCards('h');
                    if(hs.length){
                        return get.translation(hs);
                    }
                    else{
                        return '无手牌';
                    }
                },
                        },
                        sub:true,
                    },
                },
            },
	"XSjiuxi_skill":{
	trigger:{
		target:"useCardToTargeted",
	},
	filter:function (event,player){
		return event.card.name=='sha';
	},
	check:function (event,player){
		return get.attitude(player,event.player)>0;
	},
	content:function (){
        "step 0"
		var translation=get.translation(trigger.card);
		trigger.player.chooseBool('是否使'+translation+'对'+get.translation(player)+'无效？').set('ai',function(){
			var player=_status.event.player;
			var trigger=_status.event.getTrigger();
			return get.attitude(trigger.player,player)>0;
		});
        "step 1"
        if(result.bool){
			trigger.getParent().excluded.add(player);
			trigger.player.chooseControl().set('choiceList',['回复1点体力','摸2张牌']).set('ai',function(event,player){
				var trigger=_status.event.getTrigger();
				if(trigger.player.isDamaged()) return 0;
				return 1;
			});
        }
		else event.finish();
        "step 2"
		if(result.index==0){
			trigger.player.recover();
		}
		else{
			trigger.player.draw(2);
		}
    },
	ai:{
		maixie:true,
		"maixie_hp":true,
		effect:{
			target:function (card,player,target){
				if(card.name=='sha'){
					if(!target.hasFriend()) return;
					if(get.attitude(player,target)>0){
						return [0,0,1,2];
					}
					else return;
				}
			},
		},
	},
            },
},//卡牌的技能

translate:{
	"XSwuzhui":"乌骓",
	"XSwuzhui_info":"当你装备此牌时，视为你使用了1张杀；当你失去此牌时，视为你使用了1张决斗。",
	"XSwuzhui_skill":"乌骓",
	"XSwuzhui_skill_info":"",
	"XSsaluzi":"飒露紫",
	"XSsaluzi_info":"当你体力减少时，可以弃置装备区的此牌防止之。",
	"XSsaluzi_skill":"飒露",
	"XSsaluzi_skill_info":"",
	"XShufu":"虎符",
	"XShufu_info":"重置当前回合卡牌和技能使用次数。",
	"XSmantian":"瞒天过海",
	"XSmantian_info":"出牌阶段，对1名其他角色使用。若判定结果不为方片，其直到下一个准备阶段无法被指定为除装备牌、桃以外的目标。",
	"XSmantianskill":"瞒天",
	"XSmantianskill_info":"",
	"EXqibao_skill":"强化七宝刀",
	"EXqibao_skill_info":"你使用杀无视目标防具，若目标角色未损失体力值或体力值为1，此杀伤害+1。",
	"EXqinggang_skill":"强化青钢剑",
	"EXqinggang_skill_info":"你使用杀无视防具，当你使用杀指定目标时，其武将技能失效直到此杀结束。",
	"EXzhuque_skill":"强化朱雀扇",
	"EXzhuque_skill_info":"你的普通杀可以视为火杀，你造成的所有伤害都视为火伤害。",
	"EXzhuque_skill2":"强化朱雀扇",
	"EXzhuque_skill2_info":"",
	"EXzhuque_skill3":"强化朱雀扇",
	"EXzhuque_skill3_info":"",
	"EXqinglong_skill":"强化青龙刀",
	"EXqinglong_skill_info":"每当你使用的杀被目标角色使用的闪抵消时，若此杀为红色你获得之，且你可以对其使用1张杀（无距离限制）。",
	"EXzhangba_skill":"强化丈八矛",
	"EXzhangba_skill_info":"你可以将2张手牌当杀使用或打出，或将最后1张手牌当作杀使用或打出。",
	"EXfangtian_skill":"强化方天戟",
	"EXfangtian_skill_info":"若你使用的杀是最后的手牌时，你可以额外指定2个目标；当你的杀被闪抵消时，你摸1张牌。",
	"EXqilin_skill":"强化麒麟弓",
	"EXqilin_skill_info":"当你使用杀指定目标时，你可以弃置其1张装备牌。",
	"EXshuanggu_skill":"强化双股剑",
	"EXshuanggu_skill_info":"每当你使用杀指定异性或体力等于你的目标后，你可以令其选择1项：1.弃置1张手牌；2.令你摸1张牌。",
	"EXhanbing_skill":"强化寒冰剑",
	"EXhanbing_skill_info":"当你的杀造成伤害时，你可以取消之并依次弃置其3张牌。",
	"EXguanshi_skill":"强化贯石斧",
	"EXguanshi_skill_info":"当你的杀被闪抵消时，你可以弃置1张牌令此杀依然造成伤害。",
	"EXguding_skill":"强化古锭刀",
	"EXguding_skill_info":"当你使用杀造成伤害时，若目标没有手牌或区域内没有牌，此伤害+1。",
	"EXyinyue_skill":"强化银月枪",
	"EXyinyue_skill_info":"你的回合外，每当你使用或打出了1张手牌（若为使用则在它结算之前），你可以立即对你攻击范围内的任意1名角色使用1杀。",
	"EXzhungang_skill":"强化衠钢槊",
	"EXzhungang_skill_info":"当你使用杀指定目标后，你可以弃置其1张手牌。",
	"XStaieskill":"太阿剑",
	"XSlongquanskill_info":"威压：锁定技，摸牌阶段你额外摸1张牌；结束阶段你指定1种你没有的花色，其他角色结束阶段，若其手牌数大于你，其随机弃置1张此花色的手牌。",
	"XSgongbuskill":"工部剑",
	"XSlongquanskill_info":"天骄：锁定技，你点数大于6的杀可以指定额外1个目标；当你的杀造成伤害后，根据此杀指定的目标个数：1，目标无法使用锦囊牌直到你的下个准备阶段；2，目标弃置1张牌；3，你有50%概率摸1张牌。",
	"XSzhanluskill":"湛卢剑",
	"XSlongquanskill_info":"仁政：锁定技，当你受到伤害后，摸伤害数值的牌，并且可以指定1名其他角色获得造成伤害的牌。",
	"XSchunjunskill":"纯钧剑",
	"XSlongquanskill_info":"威加：锁定技，其他角色结束阶段，若其手牌数大于你的体力值，你获得其1张手牌。",
	"XSlongquanskill":"龙泉剑",
	"XSlongquanskill_info":"天命：1名角色的判定牌生效前，你可以展示牌堆顶1张牌，用其代替并获得该判定牌，若非每轮首次发动此技能，你需弃置1张牌。",
	"XSshediao":"射雕",
	"XSshediao_info":"你的红杀可以额外指定1个目标；当你的杀造成伤害时，可以弃置目标1张装备牌。",
	"XSshediaogong":"射雕弓",
	"XSshediaogong_info":"你的红杀可以额外指定1个目标；当你的杀造成伤害时，可以弃置目标1张装备牌；当你失去此装备时，摸2张牌。",
	"XSlongquan":"龙泉剑",
	"XSlongquan_info":"当你使用杀指定1名角色后，无视其防具；获得技能“天命”。",
	"XStaie":"太阿剑",
	"XStaie_info":"当你使用杀指定1名角色后，无视其防具；获得技能“威压”。",
	"XSzhanlu":"湛卢剑",
	"XSzhanlu_info":"当你使用杀指定1名角色后，无视其防具；获得技能“仁政”。",
	"XSchunjun":"纯钧剑",
	"XSchunjun_info":"当你使用杀指定1名角色后，无视其防具；获得技能“威加”。",
	"XSgongbu":"工部剑",
	"XSgongbu_info":"当你使用杀指定1名角色后，无视其防具；获得技能“天骄”。",
	"XSchunqiangshejian":"唇枪舌剑",
	"XSchunqiangshejian_info":"与1名角色进行拼点，若成功则视为对其使用1张无距离、次数限制的杀。",
	"XSyuxi":"玉玺",
	"XSyuxi_info":"锁定技，你摸牌阶段额外摸1张牌，手牌上限+2；你的手牌对他人始终可见。",
	"XSxuanyuanjian":"轩辕剑",
	"XSxuanyuanjian_info":"当你的杀造成伤害后，若目标的下家不为你，你可以令此杀继续对其下家结算。",
	"XSpaozhuanyinyu":"抛砖引玉",
	"XSpaozhuanyinyu_info":"出牌阶段对1名角色使用，若没有角色体力比其少，你失去1点体力并令其回复2点体力；没有角色手牌比其少，你弃置1张手牌并令其摸3张牌（生效1种，优先体力）。",
	"XShunshui":"浑水摸鱼",
	"XShunshui_info":"任意1名其他一次失去至少2张牌时可对其使用，获得其1张牌。",
	"XSshushang":"树上开花",
	"XSshushang_info":"出牌阶段，对自己使用。本回合结束阶段你摸X张牌，下一个回合开始弃置X张牌（X为你的体力上限且最大为4）。",
	"XSjiuding":"九鼎",
	"XSjiuding_info":"锁定技，回合开始时你声明一种花色，直到下个回合开始你的牌均视为此花色。",
	"XSdacao":"打草惊蛇",
	"XSdacao_info":"出牌阶段对1名有手牌的其他角色使用，若其有杀，其弃置全部的杀并视为对你使用1张无距离、次数限制的杀；否则，你弃置其1张牌。",
	"XSjiadao":"假道伐虢",
	"XSjiadao_info":"出牌阶段对1名与你不相邻的角色使用，本回合你计算与其的距离-1，当你的杀对其造成伤害时，可以令此杀对其上家继续结算。",
	"XSjiuxi":"九锡",
	"XSjiuxi_info":"当你被指定为杀的目标时，你可以令来源选择取消你为此杀目标，若如此其选择1项：回复1点体力；摸2张牌。",
	"XSyuxiskill":"玉玺",
	"XSyuxiskill_info":"锁定技，你摸牌阶段额外摸1张牌，手牌上限+2；你的手牌对他人始终可见。",
	"XSxuanyuan_skill":"轩辕",
	"XSxuanyuan_skill_info":"当你的杀造成伤害后，若目标的下家不为你，你可以令此杀继续对其下家结算（生效1次）。",
	"XShunshuimoyu":"浑水",
	"XShunshuimoyu_info":"",
	"XSshushangkaihua":"树上",
	"XSshushangkaihua_info":"",
	"XSjiudingskill":"九鼎",
	"XSjiudingskill_info":"锁定技，回合开始时你声明一种花色，此回合内你的牌均视为此花色。",
	"XSjiadaoskill":"假道",
	"XSjiadaoskill_info":"",
	"XSjiuxi_skill":"九锡",
	"XSjiuxi_skill_info":"",
},//翻译
				list:[["heart",8,"XSxuanyuanjian"],["diamond",10,"XSyuxi"],["heart",4,"XSshushang"],["heart",7,"XSshushang"],["club",8,"XSchunqiangshejian"],["spade",10,"XSchunqiangshejian"],["diamond",11,"XSpaozhuanyinyu"],["spade",6,"XSpaozhuanyinyu"],["diamond",5,"XShunshui"],["diamond",13,"XShunshui"],["club",13,"XSjiuding"],["heart",7,"XSdacao"],["diamond",8,"XSdacao"],["club",1,"XSjiadao"],["spade",10,"XSjiuxi"],["heart",11,"XSmantian"],["club",4,"XShufu"],["club",5,"XSwuzhui"],["diamond",13,"XSsaluzi"]]//卡牌的花色点数及数量
			};
			return XS_card;
			});
		lib.translate['XS_card_card_config']='血色衣冠';
lib.config.all.cards.push('XS_card');
if(!lib.config.cards.contains('XS_card')) lib.config.cards.remove('XS_card');
};

},help:{"血色衣冠":"<br>&emsp;兵种模式:<ul><li>每名角色出牌阶段限1次，可以弃置1张手牌并选择随机X个兵种中的1个获得之，冷却时间X回合，X为角色体力上限；当受到伤害时，冷却时间-1。<li>角色使用杀对克制兵种造成伤害后，摸1张牌。<li>若角色已有兵种，可以在下1回合弃置1张手牌将兵种升级，每个兵种有2个升级选择，替换兵种不保留等级。<li>枪兵：短枪兵、长枪兵、近卫兵。<br>克制：骑、弩；被克：戟、弩。<li>骑兵：轻骑兵、重骑兵、弓骑兵。<br>克制：戟、弩；被克：枪、弩。<li>戟兵：轻戟兵、重戟兵、武斗兵。<br>克制：枪、弩；被克：骑、弩。<li>弩兵：轻弩兵、强弩兵、弩车。<br>克制：枪、骑、戟；被克：枪、骑、戟。<li>远攻：井阑、箭塔、投石车。<br>克制：舰船；被克：近攻。<li>近攻：冲车、木兽、铁车。克制：远攻；被克：舰船。<li>舰船：楼船、斗舰、艨艟。克制：近攻；被克：远攻。"},config:{
		"XShelp":{
				"name":"血色衣冠","init":"1","item":{"1":"查看介绍","2":"<li>本扩展所涉及的角色为上溯春秋、下迄明末，跨度两千余年间中华大地上出现过的杰出历史人物。","3":"<li>本扩展技能强度与官方接近，略强于SP平均强度，除武将外还包括6张锦囊牌，4张装备牌以及1个特殊模式，可联机。目前暂无配音支持。"}
		},
		"XSupdate":{
				"name":"版本：1.24","init":"1","item":{"1":"查看更新","2":"<li>新增角色：杨素、张衡、蓝玉、孟轲、樗里疾、魏无忌、毕再遇、木华黎","3":"<li>ai修正：韩世忠-截江"}
		},
		"XSbingzhong":{
            name:'兵种模式',
           "intro":"每名角色出牌阶段限1次，可以弃置1张手牌并选择随机X个兵种中的1个获得之（1个角色只能存在1个兵种），冷却时间X回合，X为角色体力上限；当角色受到伤害时，冷却时间-1。拥有兵种的角色使用杀指定拥有克制兵种的角色时，摸1张牌。",
            init:false
		},

},package:{
	//注：以下为游戏自带编辑器的代码编辑区域
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
    intro:"风雨华夏血春秋，今朝把酒意还休。王侯业尽碎竹简，将相功名残土丘。汉唐应悔庭中乱，宋明犹难塞外酋。千年故纸空读尽，恨把衣冠祭九州。",
    author:"<li>作者：Wall•E    （QQ:1687113490）<li>技术支持：凉茶（QQ:764235332）、永远的萌新<li>测试：辉烬贺流年",
    diskURL:"",
    forumURL:"",
    version:"1.24",
},files:{"character":[],"card":[],"skill":[]}}})
