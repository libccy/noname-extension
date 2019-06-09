game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"金庸群侠传",content:function (config,pack){	
lib.arenaReady.push(function(){
        lib.skill._wuxie={
            //无懈全局技能修改
            trigger:{
                    player:["useCardToBefore","phaseJudge"],
                },
                priority:5,
                popup:false,
                forced:true,
                filter:function (event,player){
        if(event.card.storage&&event.card.storage.nowuxie) return false;
        if(event.name!='phaseJudge'){
            var info=get.info(event.card);
            if(!event.target){
                if(info.wuxieable) return true;
                return false;
            }
            if(event.player.hasSkillTag('playernowuxie',false,event.card)) return false;
            if(get.type(event.card)!='trick'&&!info.wuxieable) return false;
        }
        return true;
    },
             content:function (){
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
                        if(source.hasSkillTag('guanxing')&&(source!=player||!source.hasSkill('guanxing_fail'))) return 0;
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
                            var aiii=info.ai.wuxie(target,card,source,_status.event.player,state);
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
            if(!isJudge){
                next.set('respondTo',[source,card]);
            }
            if(game.online){
                _status.event._resultid=id;
                game.resume();
            }
            else{
                next.nouse=true;
            }
        };
        event.settle=function(){
            if(!event.state){
                if(event.triggername=='phaseJudge'){
                    event.trigger('wuxieJudge');
                    trigger.untrigger();
                    trigger.cancelled=true;
                }
                 else{
                    //无懈修改抵消触发
                    event.trigger('wuxieCancel');
                    event.trigger(trigger.card.name+'Cancel');
                    trigger.cancel();
                    if(get.mode()=='guozhan'&&get.itemtype(event.statecard)=='card'&&event.statecard.hasTag('guo')){
                        if(trigger.target.identity!='ye'&&trigger.target.identity!='unknown'){
                            trigger.getParent().excluded.addArray(game.filterPlayer(function(current){
                                return current.identity==trigger.target.identity;
                            }));
                        }
                    }
                }
            }
            event.finish();
        };
        'step 1'
        var list=game.filterPlayer(function(current){
            if(event.triggername=='phaseJudge'){
                if(game.checkMod(trigger.card,player,current,'unchanged','wuxieJudgeEnabled',current)==false) return false;
                if(game.checkMod(trigger.card,player,current,'unchanged','wuxieJudgeRespondable',player)==false) return false;
            }
            else{
                if(game.checkMod(trigger.card,player,trigger.target,current,'unchanged','wuxieEnabled',current)==false) return false;
                if(game.checkMod(trigger.card,player,trigger.target,current,'unchanged','wuxieRespondable',player)==false) return false;
            }
            return current.hasWuxie();
        });
                  event.list=list;
        event.id=get.id();
        list.sort(function(a,b){
            return get.distance(event.source,a,'absolute')-get.distance(event.source,b,'absolute');
        });
        'step 2'
        if(event.list.length==0){
            event.settle();
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
            var next=event.wuxieresult.useResult(event.wuxieresult2);
            if(event.triggername!='phaseJudge'){
                next.respondTo=[trigger.player,trigger.card];
            }
        }
        'step 9'
        if(event.wuxieresult){
            if(result=='wuxied'){
                if(!event.statecard){
                    if(event.wuxieresult2&&event.wuxieresult2.used){
                        event.statecard=event.wuxieresult2.used;
                    }
                    else{
                        event.statecard=true;
                    }
                }
                event.state=!event.state;
            }
            event.goto(1);
        }
        else if(event.list.length){
            event.goto(2);
        }
        else{
            event.settle();
        }
                 delete event.resultOL;
        delete event.wuxieresult;
        delete event.wuxieresult2;
    },        
            }
            
          });
    lib.arenaReady.push(function(){
    lib.translate._support='废除的装备栏';
                lib.skill._support={
                 /*   marktext:"废",
						intro:{
							content:function(storage,player,skill){
								var str='';
								for(var i=0;i<player.storage.lose_pos_equip.length;i++){
									str+='、'+get.translation(player.storage.lose_pos_equip[i])+'栏';
								};
								str=str.slice(1,str.length)
								str='已经废除了'+str;
								return str;
							},
						},*/
						mod:{
							cardEnabled:function(card,player){
								if(player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.contains(get.subtype(card))) return false;
							},
						},
						trigger:{
							player:['lose_pos_equipBefore','recover_pos_equipBefore','enterGame'],
							global:'gameStart',
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.storage.lose_pos_equip==undefined;
						},
						content:function(){
							player.storage.lose_pos_equip=[];
						},
                },
                lib.card.feichu_equip1={
                    type:"equip",
                    subtype:"equip1",              
                },
                lib.card.feichu_equip2={
                    type:"equip",
                    subtype:"equip2",              
                },
                lib.card.feichu_equip3={
                    type:"equip",
                    subtype:"equip3",              
                },
                lib.card.feichu_equip4={
                    type:"equip",
                    subtype:"equip4",              
                },
                lib.card.feichu_equip5={
                    type:"equip",
                    subtype:"equip5",              
                },
                lib.translate.feichu_equip1="已废除武器栏";
                lib.translate.feichu_equip1_info="武器栏已废除";
                lib.translate.feichu_equip1_bg="废";
                    
                lib.translate.feichu_equip2="已废除防具栏";
                lib.translate.feichu_equip2_info="防具栏已废除";
                lib.translate.feichu_equip2_bg="废";
                    
                lib.translate.feichu_equip3="已废除防御马栏";
                lib.translate.feichu_equip3_info="防御坐骑栏已废除";
                lib.translate.feichu_equip3_bg="废";
                    
                lib.translate.feichu_equip4="已废除攻击马栏";
                lib.translate.feichu_equip4_info="攻击坐骑栏已废除";
                lib.translate.feichu_equip4_bg="废";
                    
                lib.translate.feichu_equip5="已废除宝物栏";
                lib.translate.feichu_equip5_info="宝物栏已废除";
                lib.translate.feichu_equip5_bg="废";
                
                
                          
    });
	lib.element.content.gain=function(){
					"step 0"
					if(cards){
						var owner=event.source||get.owner(cards[0]);
						if(owner){
							var lose=owner.lose(cards,ui.special);
							lose.set('type','gain');
							lose.type='gain';
						}
					}
					else{
						event.finish();
					}
					"step 1"
					for(var i=0;i<cards.length;i++){
						if(cards[i].destroyed){
							if(player.hasSkill(cards[i].destroyed)){
								delete cards[i].destroyed;
							}
							else{
								cards.splice(i--,1);
							}
						}
					}
					if(cards.length==0){
						event.finish();
						return;
					}
					if(event.source&&event.delay!==false) game.delayx();
					"step 2"
					if(player.getStat().gain==undefined){
						player.getStat().gain=cards.length;
					}
					else{
						player.getStat().gain+=cards.length;
					}
					"step 3"
					var sort;
					var frag1=document.createDocumentFragment();
					var frag2=document.createDocumentFragment();
					var hs=player.getCards('h');
					for(var i=0;i<cards.length;i++){
						if(hs.contains(cards[i])){
							cards.splice(i--,1);
						}
					}
					for(var num=0;num<cards.length;num++){
						sort=lib.config.sort_card(cards[num]);
						if(lib.config.reverse_sort) sort=-sort;
						cards[num].fix();
						cards[num].style.transform='';
						if(_status.discarded){
							_status.discarded.remove(cards[num]);
						}
						// cards[num].vanishtag.length=0;
						for(var num2=0;num2<cards[num].vanishtag.length;num2++){
							if(cards[num].vanishtag[num2][0]!='_'){
								cards[num].vanishtag.splice(num2--,1);
							}
						}
						if(player==game.me){
							cards[num].classList.add('drawinghidden');
						}
						if(get.is.singleHandcard()||sort>1) frag1.appendChild(cards[num]);
						else frag2.appendChild(cards[num]);
					}
					var addv=function(){
						if(player==game.me){
							game.addVideo('gain12',player,[get.cardsInfo(frag1.childNodes),get.cardsInfo(frag2.childNodes)]);
						}
					};
					var broadcast=function(){
						game.broadcast(function(player,cards,num){
							player.directgain(cards);
							_status.cardPileNum=num;
						},player,cards,ui.cardPile.childNodes.length);
					};
					if(event.animate=='draw'){
						player.$draw(cards.length);
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(500,500));
					}
					else if(event.animate=='gain'){
						player.$gain(cards);
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(700,700));
					}
					else if(event.animate=='gain2'||event.animate=='draw2'){
						var gain2t=300;
						if(player.$gain2(cards)&&player==game.me){
							gain2t=500;
						}
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(gain2t,gain2t));
					}
					else if(event.source&&(event.animate=='give'||event.animate=='giveAuto')){
						event.source['$'+event.animate](cards,player);
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(500,500));
					}
					else{
						addv();
						player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
						player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
						player.update();
						if(player==game.me) ui.updatehl();
						broadcast();
						event.finish();
					}
					if(event.log){
						game.log(player,'获得了',cards);
					}
					"step 4"
					game.delayx();
				};
		lib.element.player.$equip=function(card){
			if(this.storage.lose_pos_equip!=undefined&&this.storage.lose_pos_equip.contains(get.subtype(card))){
				this.gain(card,'gain2');
				game.log(this,'装备失败');
			}else{
				game.broadcast(function(player,card){
					player.$equip(card);
				},this,card);
				card.fix();
				card.style.transform='';
				card.classList.remove('drawinghidden');
                if(card.classList.contains('removing')) card.classList.remove('removing');
                var subtype=get.subtype(card);
                if(subtype=='equip1'&&this.hasSkillTag('noEquipSkill')) card.classList.add('removing');
				delete card._transform;
				var player=this;
				var equipNum=get.equipNum(card);
				var equipped=false;
				for(var i=0;i<player.node.equips.childNodes.length;i++){
					if(get.equipNum(player.node.equips.childNodes[i])>=equipNum){
						player.node.equips.insertBefore(card,player.node.equips.childNodes[i]);
						equipped=true;
						break;
					}
				}
				if(!equipped){
					player.node.equips.appendChild(card);
					if(_status.discarded){
						_status.discarded.remove(card);
					}
				}
				var info=get.info(card);
                var subtype=get.subtype(card);
                //配合金毛狮王技能
				if(info.skills){
                    if(subtype=='equip1'){
                        if(!player.hasSkillTag('noEquipSkill')){
                            for(var i=0;i<info.skills.length;i++){
                                player.addSkillTrigger(info.skills[i]);
                            }
                        }               
                    }
                    else if(subtype!='equip1'){
                        for(var i=0;i<info.skills.length;i++){
                            player.addSkillTrigger(info.skills[i]);
                        }
                    }
				}
				return player;
			};
		};
		lib.element.player.lose_pos_equip=function(){
			var next=game.createEvent('lose_pos_equip');
			next.player=this;
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i]=='string'){
					next.skill=arguments[i];
				};
			};
			var event=_status.event;
			next.source=event.player;
			next.setContent(lib.element.event.lose_pos_equip);
			return next;
		};
		lib.element.event.lose_pos_equip=function(){
			event.trigger('lose_pos_equip');
			if(!player.storage.lose_pos_equip.contains(skill)){
				player.storage.lose_pos_equip.push(skill);
				player.markSkill('_support');
				player.syncStorage('_support');
				var str=skill.slice(skill.length-1,skill.length);
				if(player.get('e',str)!=undefined) player.discard(player.get('e',str));
			};
			game.log(player,'废除了',get.translation(skill),'栏');
			player.$lose_pos_equip(skill);
		};
		
		lib.element.player.$lose_pos_equip=function(skill){
				game.broadcast(function(player,skill){
					player.$lose_pos_equip(skill);
				},this,skill);
				var card=game.createCard('feichu_'+skill,'','');
				card.fix();
				card.style.transform='';
				card.classList.remove('drawinghidden');
				card.classList.add('feichu');
				delete card._transform;
				var player=this;
				var equipNum=get.equipNum(card);
				var equipped=false;
				for(var i=0;i<player.node.equips.childNodes.length;i++){
					if(get.equipNum(player.node.equips.childNodes[i])>=equipNum){
						player.node.equips.insertBefore(card,player.node.equips.childNodes[i]);
						equipped=true;
						break;
					}
				}
				if(!equipped){
					player.node.equips.appendChild(card);
					if(_status.discarded){
						_status.discarded.remove(card);
					}
				}
				return player;
		};
		
		
		
		lib.element.player.recover_pos_equip=function(){
			var next=game.createEvent('recover_pos_equip');
			next.player=this;
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i]=='string'){
					next.skill=arguments[i];
				};
			};
			var event=_status.event;
			next.source=event.player;
			next.setContent(lib.element.event.recover_pos_equip);
			return next;
		};
		lib.element.event.recover_pos_equip=function(){
			event.trigger('recover_pos_equip');
			if(player.storage.lose_pos_equip.contains(skill)){
				player.storage.lose_pos_equip.remove(skill);
				player.syncStorage('_support');
				if(player.storage.lose_pos_equip.length==0) player.unmarkSkill('_support');
			};
			game.log(player,'恢复了',get.translation(skill),'栏');
			player.$recover_pos_equip(skill);
		};
    
    lib.element.player.$recover_pos_equip=function(skill){
				game.broadcast(function(player,skill){
					player.$recover_pos_equip(skill);
				},this,skill);
				var player=this;
				for(var i=0;i<player.node.equips.childNodes.length;i++){
					if(player.node.equips.childNodes[i].name=='feichu_'+skill){
						player.node.equips.removeChild(player.node.equips.childNodes[i]);
						equipped=true;
						break;
					}
				}
				return player;
		};
	 lib.element.player.getCards=function(arg1,arg2){
					if(typeof arg1!='string'){
						arg1='h';
					}
					var cards=[],cards1=[];
					var i,j;
					for(i=0;i<arg1.length;i++){
						if(arg1[i]=='h'){
							for(j=0;j<this.node.handcards1.childElementCount;j++){
								if(!this.node.handcards1.childNodes[j].classList.contains('removing')){
									cards.push(this.node.handcards1.childNodes[j]);
								}
							}
							for(j=0;j<this.node.handcards2.childElementCount;j++){
								if(!this.node.handcards2.childNodes[j].classList.contains('removing')){
									cards.push(this.node.handcards2.childNodes[j]);
								}
							}
						}
						else if(arg1[i]=='e'){
							for(j=0;j<this.node.equips.childElementCount;j++){
								if(!this.node.equips.childNodes[j].classList.contains('removing')&&!this.node.equips.childNodes[j].classList.contains('feichu')){
									cards.push(this.node.equips.childNodes[j]);
								}
							}
						}
						else if(arg1[i]=='j'){
							for(j=0;j<this.node.judges.childElementCount;j++){
								if(!this.node.judges.childNodes[j].classList.contains('removing')){
									cards.push(this.node.judges.childNodes[j]);
									if(this.node.judges.childNodes[j].viewAs&&arguments.length>1){
										this.node.judges.childNodes[j].tempJudge=this.node.judges.childNodes[j].name;
										this.node.judges.childNodes[j].name=this.node.judges.childNodes[j].viewAs;
										cards1.push(this.node.judges.childNodes[j]);
									}
								}
							}
						}
					}
					if(arguments.length==1){
						return cards;
					}
					if(arg2){
						if(typeof arg2=='string'){
							for(i=0;i<cards.length;i++){
								if(cards[i].name!=arg2){
									cards.splice(i,1);i--;
								}
							}
						}
						else if(typeof arg2=='object'){
							for(i=0;i<cards.length;i++){
								for(j in arg2){
									var value;
									if(j=='type'||j=='subtype'||j=='color'||j=='suit'||j=='number'){
										value=get[j](cards[i]);
									}
									else{
										value=cards[i][j];
									}
									if((typeof arg2[j]=='string'&&value!=arg2[j])||
										(Array.isArray(arg2[j])&&!arg2[j].contains(value))){
										cards.splice(i--,1);break;
									}
								}
							}
						}
						else if(typeof arg2=='function'){
							for(i=0;i<cards.length;i++){
								if(!arg2(cards[i])){
									cards.splice(i--,1);
								}
							}
						}
					}
					for(i=0;i<cards1.length;i++){
						if(cards1[i].tempJudge){
							cards1[i].name=cards1[i].tempJudge;
							delete cards1[i].tempJudge;
						}
					}
					return cards;
				};
	lib.element.player.canCompare=function(target){
        if(this==target) return false;
        if(!this.countCards('h')||!target.countCards('h')) return false;
        if(this.hasSkillTag('noCompareSource')||target.hasSkillTag('noCompareTarget')) return false;
        return true;
    };
    lib.arenaReady.push(function(){
        lib.skill.tianyi.filterTarget=function(card,player,target){
            return player.canCompare(target);
        };
        lib.skill.zhuikong.filter=function(event,player){
            return player.hp<player.maxHp&&player.canCompare(event.player);
        };
        lib.skill.fenyue.filterTarget=function(card,player,target){
            return player.canCompare(target);
        };
        lib.skill.xianzhen.filterTarget=function(card,player,target){
            return player.canCompare(target);
        };
        lib.skill.qiaoshui.content=function(){
        "step 0"
        player.chooseTarget(get.prompt('qiaoshui'),function(card,player,target){
            return player.canCompare(target);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target)/target.countCards('h');
        });
        "step 1"
        if(result.bool){
            player.logSkill('qiaoshui',result.targets[0]);
            player.chooseToCompare(result.targets[0]);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.addTempSkill('qiaoshui3');
        }
        else{
            player.addTempSkill('qiaoshui2');
        }
    }
    lib.skill.jianshu.filterTarget=function(card,player,target){
        if(ui.selected.targets.length){
            return ui.selected.targets[0].canCompare(target)&&target.distanceTo(ui.selected.targets[0])<=1;
        }
        return true;
    };
    lib.skill.shuangren.content=function(){
        'step 0'
        var goon;
        if(player.needsToDiscard()>1){
            goon=player.hasCard(function(card){
                return card.number>10&&get.value(card)<=5;
            });
        }
        else{
            goon=player.hasCard(function(card){
                return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
            });
        }
        player.chooseTarget(get.prompt('shuangren'),function(card,player,target){
            return player.canCompare(target);
        }).set('ai',function(target){
            var player=_status.event.player;
            if(_status.event.goon&&get.attitude(player,target)<0){
                return get.effect(target,{name:'sha'},player,player);
            }
            return 0;
        }).set('goon',goon);
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            event.target=target;
            player.logSkill('shuangren',target);
            player.chooseToCompare(target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            var target=event.target;
            if(target.identity!='ye'&&target.identity!='unknown'&&game.hasPlayer(function(current){
                if(!player.canUse('sha',current,false)) return false;
                if(target==current) return false;
                if(get.mode()=='guozhan'){
                    return target.identity==current.identity;
                }
                return true;
            })){
                var str='对一名';
                if(get.mode()=='guozhan'){
                    str+=get.translation(target.identity)+'势力的';
                }
                player.chooseTarget(str+'角色使用一张杀',true,function(card,player,target){
                    if(!player.canUse('sha',target,false)) return false;
                    if(get.mode()=='guozhan'){
                        return target.identity==_status.event.identity;
                    }
                    return true;
                }).set('ai',function(target){
                    var player=_status.event.player;
                    return get.effect(target,{name:'sha'},player,player);
                }).set('identity',target.identity);
            }
            else{
                player.useCard({name:'sha'},target,false);
                event.finish();
            }
        }
        else{
            trigger.cancel();
            event.finish();
        }
        'step 3'
        if(result.bool&&result.targets&&result.targets.length){
            player.useCard({name:'sha'},result.targets[0],false);
        }
    };
    lib.skill.mizhao.content=function(){
        "step 0"
        event.target1=targets[0];
        targets[0].gain(cards,player);
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(players[i].countCards('h')&&players[i]!=event.target1&&players[i]!=player){
                break;
            }
        }
        if(i==players.length){
            event.finish();
        }
        "step 1"
        player.chooseTarget(true,'选择拼点目标',function(card,player,target){
            return _status.event.target1.canCompare(target)&&target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            var eff=get.effect(target,{name:'sha'},_status.event.target1,player);
            var att=get.attitude(player,target);
            if(att>0){
                return eff-10;
            }
            return eff;
        }).set('target1',event.target1);
        "step 2"
        if(result.targets.length){
            event.target2=result.targets[0];
            event.target1.line(event.target2);
            event.target1.chooseToCompare(event.target2);
        }
        else{
            event.finish();
        }
        "step 3"
        if(!result.tie){
            if(result.bool){
                event.target1.useCard({name:'sha'},event.target2);
            }
            else{
                event.target2.useCard({name:'sha'},event.target1);
            }
        }
    };
    lib.skill.zhuandui.subSkill.use.filter=function(event,player){
                return player.canCompare(event.target);
            };
     lib.skill.zhuandui.subSkill.respond.filter=function(event,player){
        return player.canCompare(event.player);
    };
    lib.skill.zhiba2.filter=function(event,player){
					if(player.group!='wu'||player.countCards('h')==0) return false;
					return game.hasPlayer(function(target){
						return target.hasZhuSkill('zhiba',player)&&player.canCompare(target);
					});
				};
				lib.skill.zhiba2.filterTarget=function(card,player,target){
					return target.hasZhuSkill('zhiba',player)&&player.canCompare(target);
				};
				lib.skill.shuimeng.content=function (){
        'step 0'
        player.chooseTarget(get.prompt('shuimeng'),function(card,player,target){
            return player.canCompare(target);
        }).set('ai',function(target){
            if(!_status.event.goon) return 0;
            return -get.attitude(_status.event.player,target);
        }).set('goon',player.needsToDiscard()||player.hasCard(function(card){
            var val=get.value(card);
            if(val<0) return true;
            if(val<=5){
                return card.number>=11;
            }
            if(val<=6){
                return card.number>=12;
            }
            return false;
        }));
        'step 1'
        if(result.bool){
            player.logSkill('shuimeng',result.targets);
            event.target=result.targets[0];
            player.chooseToCompare(event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.useCard({name:'wuzhong'},player);
        }
        else{
            event.target.useCard({name:'guohe'},player);
        }
    };
    lib.skill.gushe.filterTarget=function (card,player,target){
        return player.canCompare(target);
    };
    lib.skill.dahe.filterTarget=function (card,player,target){
        return player.canCompare(target);
    };
    lib.skill.tanhu.filterTarget=function (card,player,target){
        return player.canCompare(target);
    };
    lib.skill.zquanji.filter=function (event,player){
        return player.canCompare(event.player);
    };
    lib.skill.lieren.filter=function (event,player){
        if(event._notrigger.contains(event.player)) return false;
        return (event.card&&event.card.name=='sha'&&
            event.player.isAlive()&&
            player.canCompare(event.player));
    };
    lib.skill.quhu.filterTarget=function (card,player,target){
        return target.hp>player.hp&&player.canCompare(target);
    };
    })    

	// ---------------------------------------阵亡配音------------------------------------------//
	if(config.jyzhengwangpeiyin){
	lib.skill._jyzhengwangpeiyin={
				    trigger:{global:'dieBegin',},
							//direct:true,
							priority:2,
							forced:true,
         unique:true,
         frequent:true,       
					   content:function(){					
					   	    game.playAudio('..','extension','金庸群侠传',trigger.player.name);													 						          					        
 					  	},
			   			}		
						}	
		// ---------------------------------------定义背景------------------------------------------//									
		 				if(config._JYBackground){																
							lib.skill._JYBackground={
							trigger:{global:'gameDrawBefore'},
							direct:true,
							priority:20,
							content:function(){
							game.broadcastAll()+ui.background.setBackgroundImage("extension/金庸群侠传/wms_JYBackground.jpg");
   				},
						}
						}						
		 	if(config._JYBackgroundMusic){								 				
							lib.skill._JYBackgroundMusic={
				    trigger:{global:'gameStart'},
							direct:true,
							priority:10,
					   content:function(){
					   ui.backgroundMusic.src=lib.assetURL+'extension/金庸群侠传/wms_JYBackgroundmusic.mp3'; 
 					  	},
			   			}
						}			
			// ---------------------------------------美化卡牌------------------------------------------//		
							if(config.xmeihuakapai){																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				
									lib.element.card.init=function(card){
					if(Array.isArray(card)){
						if(card[2]=='huosha'){
							card[2]='sha';
							card[3]='fire';
						}
						if(card[2]=='leisha'){
							card[2]='sha';
							card[3]='thunder';
						}
						if(card[2]=='bingsha'){
							card[2]='sha';
							card[3]='ice';
						}
						if(card[2]=='guangsha'){
							card[2]='sha';
							card[3]='light';
						}
						if(card[2]=='ansha'){
							card[2]='sha';
							card[3]='dark';
						}
						if(card[2]=='fengsha'){
							card[2]='sha';
							card[3]='wind';
						}
					}
					else if(typeof card=='object'){
						card=[card.suit,card.number,card.name,card.nature];
					}
					if(!lib.card[card[2]]){
						lib.card[card[2]]={};
					}
					var info=lib.card[card[2]];
					if(info.global&&!this.classList.contains('button')){
						if(Array.isArray(info.global)){
							while(info.global.length){
								game.addGlobalSkill(info.global.shift());
							}
						}
						else if(typeof info.global=='string'){
							game.addGlobalSkill(info.global);
						}
						delete info.global;
					}
					if(this.name){
						this.classList.remove('epic');
						this.classList.remove('legend');
						this.classList.remove('gold');
						this.classList.remove('unique');
						this.style.background='';
						var subtype=get.subtype(this);
						if(subtype){
							this.classList.remove(subtype);
						}
					}
					if(info.epic){
						this.classList.add('epic');
					}
					else if(info.legend){
						this.classList.add('legend');
					}
					else if(info.gold){
						this.classList.add('gold');
					}
					else if(info.unique){
						this.classList.add('unique');
					}
					var bg=card[2];
					if(info.cardimage){
						bg=info.cardimage;
					}
					var img=lib.card[bg].image;
					if(img){
						if(img.indexOf('db:')==0){
							img=img.slice(3);
						}
						else if(img.indexOf('ext:')!=0){
							img=null;
						}
					}
					this.classList.remove('fullskin');
					this.classList.remove('fullimage');
					this.classList.remove('fullborder');
					this.dataset.cardName=card[2];
					this.dataset.cardType=info.type||'';
					this.dataset.cardSubype=info.subtype||'';
					this.dataset.cardMultitarget=info.multitarget?'1':'0';
					this.node.name.dataset.nature='';
					this.node.info.classList.remove('red');
					if(!lib.config.hide_card_image&&lib.card[bg].fullskin){
						this.classList.add('fullskin');
						if(img){
							if(img.indexOf('ext:')==0){
								this.node.image.setBackgroundImage(img.replace(/ext:/,'extension/'));
							}
							else{
								this.node.image.setBackgroundDB(img);
							}
						}
						else{
							if(lib.card[bg].modeimage){
								this.node.image.setBackgroundImage('image/mode/'+lib.card[bg].modeimage+'/card/'+bg+'.png');
							}
							else{
								this.node.image.setBackgroundImage('image/card/'+bg+'.png');
							}
						}
					}
					else if(lib.card[bg].image=='background'){
						if(card[3]) this.node.background.setBackground(bg+'_'+card[3],'card');
						else this.node.background.setBackground(bg,'card');
					}
					else if(lib.card[bg].fullimage){
						this.classList.add('fullimage');
						if(img){
							if(img.indexOf('ext:')==0){
								this.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.style.backgroundSize='cover';
							}
							else{
								this.setBackgroundDB(img);
							}
						}
						else if(lib.card[bg].image){
							if(lib.card[bg].image.indexOf('character:')==0){
								this.setBackground(lib.card[bg].image.slice(10),'character');
							}
							else{
								this.setBackground(lib.card[bg].image);
							}
						}
						else{
							var cardPack=lib.cardPack['mode_'+get.mode()];
							if(Array.isArray(cardPack)&&cardPack.contains(bg)){
								this.setBackground('mode/'+get.mode()+'/card/'+bg);
							}
							else{
								this.setBackground('card/'+bg);
							}
						}
					}
					else if(lib.card[bg].fullborder){
						this.classList.add('fullborder');
						if(lib.card[bg].fullborder=='gold'){
							this.node.name.dataset.nature='metalmm';
						}
						else if(lib.card[bg].fullborder=='silver'){
							this.node.name.dataset.nature='watermm';
						}
						if(!this.node.avatar){
							this.node.avatar=ui.create.div('.cardavatar');
							this.insertBefore(this.node.avatar,this.firstChild);
						}
						if(!this.node.framebg){
							this.node.framebg=ui.create.div('.cardframebg');
							this.node.framebg.dataset.auto=lib.card[bg].fullborder;
							this.insertBefore(this.node.framebg,this.firstChild);
						}
						if(img){
							if(img.indexOf('ext:')==0){
								this.node.avatar.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.node.avatar.style.backgroundSize='cover';
							}
							else{
								this.node.avatar.setBackgroundDB(img);
							}
						}
						else if(lib.card[bg].image){
							this.node.avatar.setBackground(lib.card[bg].image);
						}
						else{
							var cardPack=lib.cardPack['mode_'+get.mode()];
							if(Array.isArray(cardPack)&&cardPack.contains(bg)){
								this.node.avatar.setBackground('mode/'+get.mode()+'/card/'+bg);
							}
							else{
								this.node.avatar.setBackground('card/'+bg);
							}
						}
					}
					else if(lib.card[bg].image=='card'){
						if(card[3]) this.setBackground(bg+'_'+card[3],'card');
						else this.setBackground(bg,'card');
					}
					else if(typeof lib.card[bg].image=='string'&&!lib.card[bg].fullskin){
						if(img){
							if(img.indexOf('ext:')==0){
								this.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.style.backgroundSize='cover';
							}
							else{
								this.setBackgroundDB(img);
							}
						}
						else{
							this.setBackground(lib.card[bg].image);
						}
					}
					else{
						this.node.background.innerHTML=lib.translate[bg+'_cbg']||lib.translate[bg+'_bg']||get.translation(bg)[0];
						// this.node.background.style.fontFamily=lib.config.card_font;
						if(this.node.background.innerHTML.length>1) this.node.background.classList.add('tight');
						else this.node.background.classList.remove('tight');
					}
					if(!lib.card[bg].fullborder&&this.node.avatar&&this.node.framebg){
						this.node.avatar.remove();
						this.node.framebg.remove();
						delete this.node.avatar;
						delete this.node.framebg;
					}
					if(info.noname&&!this.classList.contains('button')){
						this.node.name.style.display='none';
					}
					if(info.color){
						this.style.color=info.color;
					}
					if(info.textShadow){
						this.style.textShadow=info.textShadow;
					}
					if(info.opacity){
						this.node.info.style.opacity=info.opacity;
						this.node.name.style.opacity=info.opacity;
					}
					if(info.modinfo){
						this.node.info.innerHTML=info.modinfo;
					}
					else{
				 	var dianshu;
         switch(card[1]){
           case 1:dianshu="A";break;
           case 11:dianshu="J";break;
           case 12:dianshu="Q";break;
           case 13:dianshu="K";break;
           default:dianshu=card[1];
          }
	this.node.info.innerHTML=get.translation(card[0])+'<span> </span>'+dianshu;
					}
					if(info.addinfo){
						if(!this.node.addinfo){
							this.node.addinfo=ui.create.div('.range',this);
						}
						this.node.addinfo.innerHTML=info.addinfo;
					}
					else if(this.node.addinfo){
						this.node.addinfo.remove();
						delete this.node.addinfo;
					}
					if(card[0]=='heart'||card[0]=='diamond'){
						this.node.info.classList.add('red');
					}
					this.node.name.innerHTML='';
					this.node.image.className='image';
					var name=get.translation(card[2]);
					if(card[2]=='sha'){
						if(card[3]=='fire'){
							name='火'+name;
							this.node.image.classList.add('fire');
						}
						else if(card[3]=='thunder'){
							name='雷'+name;
							this.node.image.classList.add('thunder');
						}
						else if(card[3]=='ice'){
							name='冰'+name;
							this.node.image.classList.add('ice');
						}
						else if(card[3]=='light'){
							name='光'+name;
							this.node.image.classList.add('light');
						}
						else if(card[3]=='dark'){
							name='暗'+name;
							this.node.image.classList.add('dark');
						}
						else if(card[3]=='wind'){
							name='风'+name;
							this.node.image.classList.add('wind');
						}
					}
					for(var i=0;i<name.length;i++){
						this.node.name.innerHTML+=name[i]+'<br/>';
					}
					if(name.length>=5){
						this.node.name.classList.add('long');
						if(name.length>=7){
							this.node.name.classList.add('longlong');
						}
					}
				 	var dianshu;
         switch(card[1]){
           case 1:dianshu="A";break;
           case 11:dianshu="J";break;
           case 12:dianshu="Q";break;
           case 13:dianshu="K";break;
           default:dianshu=card[1];
          }
this.node.name2.innerHTML=get.translation(card[0])+dianshu+' '+name;
					this.suit=card[0];
					this.number=parseInt(card[1])||0;
					this.name=card[2];
					this.classList.add('card');
					if(card[3]){
						if(lib.nature.contains(card[3])) this.nature=card[3];
						this.classList.add(card[3]);
					}
					else if(this.nature){
						this.classList.remove(this.nature);
						delete this.nature;
					}
					if(info.subtype) this.classList.add(info.subtype);
					if(this.inits){
						for(var i=0;i<lib.element.card.inits.length;i++){
							lib.element.card.inits[i](this);
						}
					}
					if(typeof info.init=='function') info.init();
					this.node.range.innerHTML='';
					switch(get.subtype(this)){
						case 'equip1':
							var added=false;
							if(lib.card[this.name]&&lib.card[this.name].distance){
								var dist=lib.card[this.name].distance;
								if(dist.attackFrom){
									added=true;
									this.node.range.innerHTML='范围: '+(-dist.attackFrom+1);
								}
							}
							if(!added){
								this.node.range.innerHTML='范围: 1';
							}
							break;
						case 'equip3':
						if(info.distance&&info.distance.globalTo){
							this.node.range.innerHTML='防御: '+info.distance.globalTo;
							this.node.name2.innerHTML+='+';
						}
						break;
						case 'equip4':
						if(info.distance&&info.distance.globalFrom){
							this.node.range.innerHTML='进攻: '+(-info.distance.globalFrom);
							this.node.name2.innerHTML+='-';
						}
						break;
					}
					if(_status.connectMode&&!game.online&&lib.cardOL&&!this.cardid){
						this.cardid=get.id();
						lib.cardOL[this.cardid]=this;
					}
					if(!_status.connectMode&&!_status.video){
						this.cardid=get.id();
					}
					var tags=[];
					if(Array.isArray(card[4])){
						tags.addArray(card[4]);
					}
					if(this.cardid){
						if(!_status.cardtag){
							_status.cardtag={};
						}
						for(var i in _status.cardtag){
							if(_status.cardtag[i].contains(this.cardid)){
								tags.add(i);
							}
						}
						if(tags.length){
							var tagstr=' <span class="cardtag">';
							for(var i=0;i<tags.length;i++){
								var tag=tags[i];
								if(!_status.cardtag[tag]){
									_status.cardtag[tag]=[];
								}
								_status.cardtag[tag].add(this.cardid);
								tagstr+=lib.translate[tag+'_tag'];
							}
							tagstr+='</span>';
							this.node.range.innerHTML+=tagstr;
						}
					}
					return this;
				};
					}	
game.playJY = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '金庸群侠传', fn);
			}
		};					
// ---------------------------------------武将分栏------------------------------------------//		
			
    if(config.tlbb){
		for(var i in lib.characterPack[ 'tlbb']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.sdxl){
		for(var i in lib.characterPack['sdxl']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.xajh){
		for(var i in lib.characterPack['xajh']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	if(config.sdyx){
		for(var i in lib.characterPack['sdyx']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};	
    if(config.yttl){
		for(var i in lib.characterPack['yttl']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
},precontent:function (jyqxz){
     if(jyqxz.enable){
		game.import('character',function(){				
			var tlbb={
				name:'tlbb',
				connect:true,
				character:{
					"tlbb_spduanyu":["male","qun",4,["tlbb_nayuan","tlbb_zhuha"],[]],
 "tlbb_duanyu":["male","qun",4,["tlbb_xiumai","tlbb_qingguan","tlbb_lingbo"],[]],
  "tlbb_duanyanqing":["male","qun",4,["tlbb_qiangcan","tlbb_liuwang","tlbb_rangquan"],[]],
  "tlbb_azhu":["female","qun",3,["tlbb_yirong1","tlbb_xiaoti"],[]],
   "tlbb_xuzhu":["male","wei",4,["tlbb_pojie","tlbb_huansu"],[]],
   "tlbb_wangyuyan":["female","qun",3,["tlbb_dianhua","tlbb_wendian"],[]],
   "tlbb_kangmin":["female","wei",3,["tlbb_shifu","tlbb_buyao","tlbb_siqian"],[]],
    "tlbb_suxinghe":["male","wei",3,["tlbb_xpojie","tlbb_yaotie","tlbb_yayin"],[]],
	"tlbb_yuelaosan":["male","qun",4,["tlbb_yuguan","tlbb_qianjun"],[]],
	"tlbb_zhongling":["female","qun",3,["tlbb_xundiao","tlbb_qiyuan","tlbb_xinwu"],[]],
	 "tlbb_qiaofeng":["male","wei",4,["tlbb_xianglong","tlbb_kanghui","tlbb_zongpan"],['zhu']],
	 "tlbb_ganbaobao":["female","wei",3,["tlbb_chouchang","tlbb_aijie","tlbb_gulian"],[]],
	 "tlbb_spxuzhu":["male","wei",3,["tlbb_luomei","tlbb_jiujie"],[]],
	  "tlbb_liqingluo":["female","wei",3,["tlbb_juanzhi","tlbb_fanrui","tlbb_tongyou"],[]],
	  "tlbb_tianshantonglao":["female","wei",3,["tlbb_zhemei","tlbb_bingfu"],[]],
	  "tlbb_xiaoyuanshan":["male","qun",4,["tlbb_huoyan","tlbb_zheju"],[]],
	  "tlbb_xuanciyeerniang":["male","wei",3,["tlbb_youseng","tlbb_duhui"],[]],
	  "tlbb_yeerniang":["female","wei",3,["tlbb_daoying","tlbb_gouhe"],[]],
	  "tlbb_madayuan":["male","wei",4,["tlbb_suohou","tlbb_zhenmi"],[]],
	  "tlbb_huangmeiseng":["male","qun",3,["tlbb_duanzhi","tlbb_xianji"],[]],
	  "tlbb_xuzhuliqinglu":["male","wei",3,["tlbb_sekong","tlbb_juechen"],[]],
	  "tlbb_baishijing":["male","wei",3,["tlbb_cansi","tlbb_xijie","tlbb_gouxian"],[]],
	  "tlbb_azhi":["female","qun",3,["tlbb_zhonggu","tlbb_zisui","tlbb_gushi"],[]],
              
        },
characterIntro:{
	    "tlbb_duanyanqing":"《天龙八部》里的重要角色，段延庆本为云南大理国太子，因皇朝内乱，被奸臣杨义贞谋国后流亡在外，并受到追杀，面目全毁，双腿残废，仅靠腹语交流。后成为四大恶人之首，致力于夺回皇位，最后争了一辈子的皇权落到了亲生儿子段誉身上，实乃造化弄人。【CV：觅阳】",
		"tlbb_xuzhu":"《天龙八部》男主角之一，少林寺无名小僧，木讷老实，相貌丑陋，但为人忠厚善良。随师父发放名帖下山，误打误撞破解珍珑棋局，成为逍遥派无崖子关门弟子，并得其七十余年内力。后遇三十六洞洞主七十二岛岛主欲加害天山童姥而挺身相救，被其强逼破戒，因此和西夏公主李清露结缘。【CV：林三】",
		"tlbb_azhu":"阿朱为段正淳与情妇阮星竹所生的长女，其母因未婚生女故将其转送。出场时为姑苏慕容氏的二婢之一，居于听香水榭，擅长易容术，易容本领鬼斧神工。阿朱孝顺父母，疼爱妹妹，为阻止乔峰与段正淳残杀，易容为段正淳前往青石桥赴约，被乔峰一掌误杀，死前叮嘱乔峰要好好照顾阿紫。【CV：草莓味少女】",
		"tlbb_duanyu":"大理“镇南王”段正淳唯一的儿子，实为段延庆与刀白凤所生。英俊善良，厌恶杀戮争斗。不慎闯入无量山琅环福地，习得凌波微步。曾在少室山与萧峰、虚竹并肩相战，使用六脉神剑单独击败慕容复。造化弄人，先后心仪的女子木婉清、钟灵均为自己的妹妹。【CV：神齐大叔】",
		"tlbb_spduanyu":"段誉为了解救被人挟持的钟灵，误闯入无量山琅环福地，从洞中一尊玉像（其称为神仙姐姐）处习得逍遥派奇功——北冥神功。后来曾在曼陀山庄以北冥神功吸纳严嬷嬷的内功，乘机救走王语嫣、阿朱和阿碧姐妹。后段誉被无量剑派拘禁期间，意外之下服食了百毒之王莽牯朱蛤，自此百毒不侵。【CV：神齐大叔】",
		"tlbb_kangmin":"伙同白世镜、全冠清等害死丈夫马大元的康敏表面上是个冷若冰霜的孀妇，实则生性放荡，水性杨花，与多人有染。因不满乔峰从不正眼相看，恨意横生的她发布虚假消息害得乔峰间接害死阿朱。恶人有天收，最后自恃美貌的她被阿紫划破脸蛋，更将伤口洒上蜂蜜招引蚁群噬咬，死相可怖。【CV：珂里】",
		"tlbb_suxinghe":"苏星河是逍遥派掌门无崖子首徒，因师弟丁春秋背叛师门，他便遵从师父的命令，装聋作哑，自创聋哑门归隐江湖。他一生都守护着师父布下的珍珑棋局，以期有缘之人能破解此局，加入逍遥派，替本派清理门户。他方发武林帖子，最终虚竹误打误撞解开了棋局。苏星河最终死于含笑逍遥散。【CV：弈声传媒有声工作室】",
		"tlbb_zhongling":"万劫谷谷主钟万仇与甘宝宝之女，生父实为段正淳。活泼机灵，笑靥如花。驯有一貂，以毒虫饲之，性凶残而迅捷。段誉在无量山对无量剑派出言相讥而身陷困境，钟灵路见不平，放出飞貂为其解困，自己却被无量剑派捉拿。段誉拿着她的绣花鞋作为信物到万劫谷邀请她父母相助。【CV：草莓味少女】",
		"tlbb_yuelaosan":"岳老三在四大恶人中排行第三，性格憨直，虽被称为凶神恶煞，却重情重义。与段誉的较量失败后，也显出守信的优点，尊称他为师父。岳老三使用鳄嘴剪和鳄尾鞭横行江湖，武功高强力气大，加上长相凶煞，实为江湖中人所惧，其实为人任性可爱，与老顽童周伯通倒有几分相似。【CV：觅阳】",
		"tlbb_wangyuyan":"李青萝与段正淳的女儿，自小生长在曼陀山庄内，与表哥慕容复青梅竹马，表哥一心光复大燕，为他熟读各派武学秘笈，能看出各家武功招式，是一位武学理论家，却不谙武功。曾在听香水榭用武学知识指点闹事的人们。后来被薄情寡义的表哥弃于枯井，因而对其死心。【CV：草莓味少女】",
        "tlbb_qiaofeng":"带头大哥收到不实信息后误杀乔峰双亲，为表悔意，将其寄养在乔三槐夫妇家里，并委托少林授其功夫。后出任丐帮帮主之位，生性放荡的康敏因诱惑不成，便诬陷他杀死夫君马大元，更在杏子林当众揭发他是契丹人的身世，令其众叛亲离，更是卷入了中原武林和辽国的惊涛骇浪之中。【CV：觅阳】",
		"tlbb_ganbaobao":"甘宝宝在少年时与段正淳相遇而陷入情网，并与之珠胎暗结，后来无奈之下被迫嫁给钟万仇，不久产下钟灵。钟万仇因自惭形秽而对她百般宠爱，但她对段正淳念念不忘，日日想着他们过往的旖旎风情。后来难忍相思，以寻找女儿为借口，重入江湖，最后被慕容复杀死在段正淳身边。【CV：仙女桥】",
        "tlbb_spxuzhu":"虚竹破解苏星河的珍珑棋局后，无意间救了天山缥缈峰灵鷲宫宫主天山童姥一命，为了逃避死对头师妹李秋水的追杀，她命虚竹一起躲藏在西夏皇宫内的冰窖中，并于丧失武功期间传给虚竹天山折梅手和天山六阳掌，以对付李秋水。期间，童姥更是强迫这位执拗善良的少林小僧破除荤、酒、杀、淫四戒。【CV - 林三】",
		"tlbb_xuanciyeerniang":"叶二娘原本是个涉世未深的小姑娘，因玄慈救了她父亲，为了报恩，对玄慈以身相许，并生下虚竹。一个是德高望重的少林方丈，一个是红尘俗世的痴情女子，两人的恋情只能变成遥相守望，长埋地下。多年后两人的恋情被萧远山拆穿，自觉无颜面对少林众僧的玄慈，自绝而死。【CV：青灯折扇不语vs地鼠】",
        "tlbb_liqingluo":"无崖子与李秋水的女儿，段正淳的情人之一，与姑苏慕容家为亲戚，后嫁入姑苏王家，成为曼陀山庄的女主人，育有一女王语嫣。她对段正淳极具独之心，由此因爱转恨。生平喜好花草，常迫害无情无义的男子，将他们的尸体当作花肥。后来被外甥慕容复杀害，死前原谅了段正淳。【CV：蛋黄酱爆炸】",
        "tlbb_tianshantonglao":"天山缥缈峰灵鹫宫主人，因身材如同女童故人称天山童姥，实已九十六岁高龄。善使用暗器生死符控制众人，武功绝学为八荒六合惟我独尊功、天山折梅手、天山六阳掌等，可化尽天下各路武功。因与李秋火共同痴逍遥派师兄无崖子而成为宿敌，在死前得知二人皆空欢喜一场后，冰释前嫌。【CV：仙女桥】",
		"tlbb_xiaoyuanshan":"身为辽国珊军总教头的萧远山，携带妻儿前往岳父家中，途经雁门关时被收到虚假情报的大批中原武士截杀。经过一场血战后，其妻被杀，独子萧峰亦被带头大哥送给汉人乔三槐夫妇抚养。身负血海深仇的萧远山，大肆杀戳当年参与过雁门关事件的中原武士，且30年来潜伏在少林寺，企图将少林武学传入辽国，希望有朝一日能为辽军所用。【CV：】",
		"tlbb_madayuan":"身为丐帮副帮主，马大元为人憨实忠厚，心系丐帮安危，武功绝学为锁喉擒拿功。汪帮主临终前交给他一封密函，此信与乔峰身世相关，并嘱咐他若乔峰起了二心，当立即将此信交给所有长老一同拆阅并合力击杀乔峰。马夫人因恼恨他胸无大志，劝说他揭发乔峰身世无果后，伙同白世镜将他害死并嫁祸给乔峰。【CV：白】",
		"tlbb_yeerniang":"为报答玄慈恩情，叶二娘早年对其以身相许并生下虚竹，却被复仇的萧远山夺走孩儿偷偷寄养在少林寺。痛失幼儿的叶二娘加入了四大恶人的行列成为西夏一品堂的高手，乐此不疲地将别人家的婴儿偷来杀死，要让世人尝尽自己受过的痛苦。后来玄慈“带头大哥”的身份被当众揭底并授受杖刑致死，她选择为之殉情。【CV：仙女桥】",
		"tlbb_huangmeiseng":"黄眉僧师承福建莆田达摩下院，年轻时习得一身高超武功四处锄奸，名震一时。后被慕容博金刚指击败，心灰意冷，来到大理国拈花寺出家。曾受大理保定帝段正明所托前往万劫谷营救段誉，为了能执黑棋占先行之利，竟自剁一趾赢得先手。如此残忍手段连四大恶人之首的段延庆也为之侧目。 【CV：】",
		"tlbb_xuzhuliqinglu":"一心向佛的虚竹，因心地善良，秉承佛法拯救天下苍生的执念，将天山童姥从众多叛徒手里救下后，却被蛮横的童姥强迫破了四戒，再也不能被佛法所容，更可怕的是他对李清露的思念却不是为他人所逼，全是自己意愿。告别少林寺后，他出任灵鹫宫宫主，并迎娶西夏公主李清露，成为一对伉俪夫妻。【CV：】",
		"tlbb_baishijing":"白世镜是丐帮执法长老，乔峰的结拜兄弟。原本铁面无私，其妻仙逝二十余年亦不近女色，奈何却被马夫人所惑，起了加害乔峰之心。他和马夫人合谋杀死马大元关嫁祸给乔峰，害其远走辽国。堂堂执法长老，晚节不保。善恶有报，萧远山假扮马大元的鬼魂捏碎了白世镜的喉骨，当即毙命。【CV：】",
		
		},

characterTitle:{
					 "tlbb_xuzhuliqinglu":"落影丶逝尘",
					 "tlbb_azhi":"落影丶逝尘",
					 "tlbb_baishijing":"落影丶逝尘",
					  "tlbb_madayuan":"落影丶逝尘",
					 "tlbb_huangmeiseng":"落影丶逝尘",
					 "tlbb_yeerniang":"落影丶逝尘",
					 "tlbb_azhu":"落影丶逝尘",
					 "tlbb_xuanciyeerniang":"落影丶逝尘",
					 "tlbb_xiaoyuanshan":"落影丶逝尘",
					 "tlbb_tianshantonglao":"落影丶逝尘",
					 "tlbb_liqingluo":"落影丶逝尘",
					 "tlbb_ganbaobao":"落影丶逝尘",
					 "tlbb_qiaofeng":"落影丶逝尘",
					 "tlbb_zhongling":"落影丶逝尘",
					 "tlbb_yuelaosan":"落影丶逝尘",
					 "tlbb_suxinghe":"落影丶逝尘",
					 "tlbb_wangyuyan":"落影丶逝尘",
					 "tlbb_spduanyu":"落影丶逝尘",
					 "tlbb_xuzhu":"落影丶逝尘",					 
					 "tlbb_duanyanqing":"Sukincen",
					 "tlbb_duanyu":"冰波水微",
					 "tlbb_spxuzhu":"冰波水微",
					 "tlbb_kangmin":"朱阳光",
									},

skill:{
	"tlbb_zhonggu":{
                subSkill:{
                    lose:{
                        trigger:{
                            global:"damageBegin",
                        },
                        priority:-20,
                        forced:true,
                        filter:function (event,player){
                if(event.num<=0) return false;
                return player.storage.tlbb_zhonggu&&player.storage.tlbb_zhonggu==event.player;
            },
                        content:function (){
                player.line(trigger.player,'green');
                trigger.cancel();
                trigger.player.loseHp(trigger.num);
            },
                        sub:true,
                    },
                },
                init:function (player){
        player.storage.tlbb_zhonggu=false;
    },
                animationColor:"fire",
                skillAnimation:true,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        return !player.storage.tlbb_zhonggu;
    },
                intro:{
                    content:"limited",
                },
                mark:true,
                unique:true,
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filterCard:true,
                check:function (card){
        return 9-get.value(card)
    },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        "step 0"
        player.storage.tlbb_zhonggu=target;
        target.damage(1,'fire','nosource');
        "step 1"
        player.gainMaxHp();
        "step 2"
        var num=player.maxHp-player.hp;
        if(num>0) player.recover(num);
        player.addSkill('tlbb_zhonggu_lose');
        player.awakenSkill('tlbb_zhonggu');
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(player.hp>=player.maxHp) return 0;
                if(target.hp==1) return -5;
                return -1;
            },
                    },
                },
            },
            "tlbb_zisui":{
                init:function (player){
        player.storage.tlbb_zisui=[];
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                player.$throw(storage);
                player.storage.tlbb_zisui.length=0;
                game.log(player,'移去了"恃"');
            }
        },
                },
                marktext:"恃",
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"loseHpEnd",
                },
                frequent:true,
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){
        "step 0"
        event.cards=get.cards()[0];
        player.showCards(event.cards,'恣睢');
        "step 1"
        if(get.color(event.cards)=='red'){
            player.gain(event.cards,'gain2');
        }
        else{
            player.storage.tlbb_zisui=player.storage.tlbb_zisui.concat(event.cards);
            player.syncStorage('tlbb_zisui');
            player.markSkill('tlbb_zisui');
            game.log(player,'将',event.cards,'置于武将牌上作为“恃”');
        }
    },
            },
            "tlbb_gushi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                filter:function (event,player){
        if(!player.storage.tlbb_zisui||player.storage.tlbb_zisui.length==0) return false;
        if(event.targets&&event.targets.length>1) return false;
        if(event.player!=player) return true;
    },
                direct:true,
                content:function (){
        "step 0"
        var skr='是否弃置一张"恃"'+get.translation(trigger.cards)+'对你无效';
        player.chooseCardButton(player.storage.tlbb_zisui,1,skr).set('filterButton',function(button){
            return true;
        }).set('ai',function(button){
            if(get.effect(player,trigger.card,player,player)>0) return -1;
            return 1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_gushi');
            var links=result.links;
            for(var i=0;i<links.length;i++){
                player.storage.tlbb_zisui.remove(links[i]);
            }
            player.syncStorage('tlbb_zisui');
            if(!player.storage.tlbb_zisui.length){
                player.unmarkSkill('tlbb_zisui');
            }
            else{
                player.markSkill('tlbb_zisui');
            }
            player.$throw(links);
            game.log(player,'移去了',links);
            for(var i=0;i<links.length;i++){
                links[i].discard();
            }
            trigger.cancel();
        }
    },
            },
	"tlbb_sekongpt":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filter:function (event,player){
        if(player.countCards('h',{type:'delay'})==0) return false;
        var list=[];
        var list2=get.inpile('trick');
        for(var i=0;i<list2.length;i++){
            var info=lib.card[list2[i]];
            if(info.enable&&!player.storage.tlbb_sekong.contains(list2[i])){
                list.push(list2[i])
            }
        }
        if(list.length==0) return false;
        return true;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            var list2=get.inpile('trick');
            for(var i=0;i<list2.length;i++){
                var info=lib.card[list2[i]];
                if(info.enable&&!player.storage.tlbb_sekong.contains(list2[i])){
                    list.push(['锦囊','',list2[i]])
                }
            }
            if(list.length==0){
                return ui.create.dialog('色空已无可用牌');
            }
            return ui.create.dialog([list,'vcard']);
        },
                    filter:function (button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function (button){
            var player=_status.event.player;
            var players=game.filterPlayer();
            if(player.countCards('h',button.link[2])) return 0;
            if(button.link[2]=='wuzhong'){
                if(player.countCards('h')<player.hp){
                    return 3+Math.random();
                }
                return 0;
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
                filterCard:function (card){
                   return get.type(card)=='delay';
                },
                selectCard:1,
                popname:true,
                viewAs:{name:links[0][2]},
                onuse:function(result,player){
                    player.storage.tlbb_sekong.push(result.card.name);
                },
            }
        },
                    prompt:function (links,player){
            return '选择一张延时锦囊牌当'+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                 return 1;
            },
                    },
                    threaten:1,
                },
            },
            "tlbb_sekongys":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filter:function (event,player){
        if(player.countCards('h',{type:'trick'})==0) return false;
        var list=[];
        var list2=get.inpile('delay');
        for(var i=0;i<list2.length;i++){
            var info=lib.card[list2[i]];
            if(info.enable&&!player.storage.tlbb_sekong.contains(list2[i])){
                list.push(list2[i])
            }
        }
        if(list.length==0) return false;
        return true;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            var list2=get.inpile('delay');
            for(var i=0;i<list2.length;i++){
                var info=lib.card[list2[i]];
                if(info.enable&&!player.storage.tlbb_sekong.contains(list2[i])){
                    list.push(['锦囊','',list2[i]])
                }
            }
            if(list.length==0){
                return ui.create.dialog('色空已无可用牌');
            }
            return ui.create.dialog([list,'vcard']);
        },
                    filter:function (button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function (button){
            var player=_status.event.player;
            if(player.countCards('h',button.link[2])) return 0;
            var eff=game.hasPlayer(function(current){
                return get.effect(current,button.link[2],player,player)>0&&player.canUse(button.link[2],current);
            });
            if(eff){
                if(button.link[2]=='bingliang'){
                    var bing=eff.countCards('h')<=1;
                    if(bing) return 2;
                    return 0.7;
                }
                if(button.link[2]=='lebu'){
                    return 1;
                }
                if(button.link[2]=='guiyoujie'){
                    return 0.5;
                }
                if(button.link[2]=='caomu'){
                    return 0.3;
                }
                return 0.2;
            }
            return 0;

        },
                    backup:function (links,player){
            return {
                filterCard:function (card){
                   return get.type(card)=='trick';
                },
                selectCard:1,
                popname:true,
                viewAs:{name:links[0][2]},
                onuse:function(result,player){
                    player.storage.tlbb_sekong.push(result.card.name);
                },
            }
        },
                    prompt:function (links,player){
            return '选择一张普通锦囊牌当'+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                 return 1;
            },
                    },
                    threaten:1,
                },
            },
            "tlbb_sekong":{
				audio:"ext:金庸群侠传:2",
                group:["tlbb_sekongys","tlbb_sekongpt"],
                init:function (player){
        player.storage.tlbb_sekong=[];
    },
            },
            "tlbb_juechen":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCardEnd",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
        if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i])=='d') return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        event.cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.position(trigger.cards[i])=='d'){
                event.cards.push(trigger.cards[i]);
            }
        }
        "step 1"
        if(event.cards.length>0){
            var str='绝尘<br><br>';
            if(event.cards.length==1){
                str+='是否其置于牌堆顶?'
            }
            else if(event.cards.length>1){
                str+='是否将其按顺序置于牌堆顶（先选择的在上）?'
            }
            player.chooseCardButton(event.cards,str,event.cards.length);
        }
        else{
            game.delay(0.7);
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.logSkill('tlbb_juechen');
            var cardss=result.links.slice(0);
            for(var i=cardss.length-1;i>=0;i--){
                ui.cardPile.insertBefore(cardss[i],ui.cardPile.firstChild);
            }
            game.log(player,'将',cardss,'置于牌堆顶');
        }    
    },
                ai:{
                    threaten:0.8,
                },
            },
			"tlbb_cansi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
        if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
        if(!event.targets) return false;
        for(var i=0;i<event.targets.length;i++){
            if(!event.targets[i].isLinked()){
                return true;
            }
        }
        return false;
    },
                content:function (){
        'step 0'
        player.chooseTarget('是否发动【缠丝】?<br>'+lib.translate.tlbb_cansi_info+'',function(card,player,target){
            return trigger.targets.contains(target)&&!target.isLinked();
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            if(att<=0) return 1;
            if(att>0){
                if(player.hasSkill('tlbb_xijie')) return 0.2;
                return -1;        
            }
        });
        'step 1'
        if(result.bool){
            player.logSkill('tlbb_cansi',result.targets);
            result.targets[0].link();
        }
    },
            },
            "tlbb_xijie":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current.isLinked();
        });
    },
                content:function (){
        "step 0"
        event.targets=game.filterPlayer(function(current){
            return current.isLinked();
        });
        event.num=0;
        event.targets.sort(lib.sort.seat);
        "step 1"
        var next=event.targets[event.num].chooseCard(2,'he','是否弃置手牌区和装备区各一张牌并重置武将牌?否则'+get.translation(player)+'摸一张牌。',function(card,player){
            var ca=ui.selected.cards;
            if(ca.length==0) return true;
            if(ca.length==1){
                if(get.position(ca[0])=='e'){
                    if(get.position(card)!='h') return false;
                }
                else if(get.position(ca[0])=='h'){
                    if(get.position(card)!='e') return false;
                }
            }
            return true;
        });
        var att=get.attitude(event.targets[event.num],player)
        next.ai=function(card){
            if(att>=0) return -1;
            if(att<0) return 4-get.value(card);
        };
        "step 2"
        if(result.bool){
            event.targets[event.num].line(player,'green');
            event.targets[event.num].link(false);
            event.num++;
            if(event.num<event.targets.length) event.goto(1);
        }
        else{
            player.draw();
            event.targets[event.num].line(player,'green');
            event.num++;
            if(event.num<event.targets.length) event.goto(1);
        }
    },
            },
            "tlbb_gouxian":{
                trigger:{
                    global:"judgeBegin",
                },
				audio:"ext:金庸群侠传:2",
                check:function (event,player){
        return game.hasPlayer(function(current){
            return current!=player&&get.attitude(player,current)>0;
        });
    },
                content:function (){
        'step 0'
        event.cards=get.cards(1);
        var car=event.cards;
        var content=['牌堆顶的一张牌',car];
        game.log(player,'观看了牌堆顶的一张牌');
        player.chooseControl('ok').set('dialog',content);
        'step 1'
        player.chooseTarget('将'+get.translation(event.cards)+'交给一名角色',true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
        if(target.countCards('h')<=0) return 0;
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
        }).set('enemy',get.value(event.cards[0])<0);
        'step 2'
        if(result.bool){
            event.target=result.targets[0];
            player.line(event.target,'green');
            player.give(event.cards,event.target);
        }
        'step 3'
        var str='';
        if(trigger.card) str=get.translation(trigger.card.viewAs||trigger.card.name);
        else if(trigger.skill) str=get.translation(trigger.skill);
        else str=get.translation(trigger.parent.name);
        event.target.chooseCard('h',str,true).set('ai',function(card){
            var result=trigger.judge(card);
            var attitude=get.attitude(event.target,trigger.player);
            if(attitude==0) return -get.value(card);
            if(attitude>0){
                return (30-get.value(card))*result;
            }
            else{
                return (30-get.value(card))*(-result);
            }
        });
        'step 4'
        if(result.bool){
            event.target.lose(result.cards[0],ui.special);
            event.target.$throw(result.cards[0]);
            game.log(event.target,'将',result.cards[0],'置于牌堆顶');
            ui.cardPile.insertBefore(result.cards[0],ui.cardPile.firstChild);
        }
    },
                ai:{
                    expose:0.1,
                    tag:{
                        rejudge:0.5,
                    },
                },
            },
	"tlbb_duanzhi1":{
                trigger:{
                    player:"useCard",
                },
                direct:true,
                filter:function (event,player){
        if(player.storage.lose_pos_equip==undefined) return false;
        if(player.storage.lose_pos_equip&&player.storage.lose_pos_equip.length==0) return false;
        if(player.storage.lose_pos_equip.length==1){
            if(get.color(event.card)!='black') return false;  
        }
        else if(player.storage.lose_pos_equip.length>1){
            if(get.color(event.card)!='black'&&get.color(event.card)!='red') return false;
        }
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current)&&!event.targets.contains(current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        'step 0'
        var num=player.storage.lose_pos_equip.length;
        var prompt2='额外指定至多'+num+'';
        prompt2+='名'+get.translation(trigger.card)+'的目标'
        player.chooseTarget([1,num],get.prompt('tlbb_duanzhi'),function(card,player,target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            if(trigger.targets.contains(target)) return false;
            return lib.filter.targetEnabled2(trigger.card,player,target)&&lib.filter.targetInRange(trigger.card,player,target);
        }).set('prompt2',prompt2).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        });
        'step 1'
        if(result.bool){
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        'step 2'
        if(event.targets){
            player.logSkill('tlbb_duanzhi',event.targets);
            trigger.targets.addArray(event.targets);
        }
    },
            },
            "tlbb_duanzhi":{
				audio:"ext:金庸群侠传:2",
                group:"tlbb_duanzhi1",
                trigger:{
                    global:"gameStart",
                    player:["enterGame","phaseBefore"],
                },
                direct:true,
                init:function (player){
        player.storage.tlbb_duanzhi=false;
        player.storage.tlbb_duanzhinum=0;
    },
                filter:function (event,player){
        if(player.storage.lose_pos_equip&&player.storage.lose_pos_equip.length>=5) return false;
        return !player.storage.tlbb_duanzhi;
    },
                content:function (){
        "step 0"
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i],get.subtype(list[i]),'栏'));
        }
        var str='<span style="color:#FF0000">断趾:是否废除一个装备栏?</span>';
        player.chooseCardButton(list2,1,str).set('filterButton',function(button){
            var cards=button.link;
            if(player.storage.lose_pos_equip==undefined) return true;
            if(player.storage.lose_pos_equip&&!player.storage.lose_pos_equip.contains(get.subtype(cards))) return true;
            return false;
        }).set('ai',function(button){
            var cards=button.link;
            if(!player.getEquip(cards)) return 1;
            return -1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_duanzhi');
            var card=[];
            for(var i=0;i<result.links.length;i++){
                var cards=result.links[i];
                card.push(cards);
                player.lose_pos_equip(get.subtype(cards));
            }
            player.$throw(card);
            player.storage.tlbb_duanzhinum+=result.links.length;
            if(player.storage.tlbb_duanzhinum>=2){
                player.storage.tlbb_duanzhi=true;
                //player.awakenSkill('tlbb_duanzhi');  
                var info='<li>你使用黑色基本牌或普通锦囊牌时，若你废除的装备栏数至少为1,你可以额外指定X名目标';
                info+='<br><li>你使用红色基本牌或普通锦囊牌时，若你废除的装备栏数至少为2,你可以额外指定X名目标'
                info+='<br><li>X为你废除的装备栏数量。'
                lib.translate.tlbb_duanzhi_info=info
            }
        }
        
    },
            },
            "tlbb_xianji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"roundStart",
                },
                frequent:true,
                filter:function (event,player){
        if(!player.storage.lose_pos_equip||player.storage.lose_pos_equip.length<1) return false;
        return true;
    },
                content:function (){
        'step 0'
        var num=player.maxHp;
        var num2=player.countCards('h');
        var num3=num-num2
        if(num3>0) player.draw(num3);
        'step 1'
        player.phaseUse();        
        'step 2'
        player.getStat().card={};
        player.getStat().skill={};
    },
            },
	"tlbb_suohou":{
				audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.tlbb_suohou=[];
    },
                intro:{
                    content:"characters",
                },
                group:"tlbb_suohou_damage",
                subSkill:{
                    damage:{
                        trigger:{
                            player:"shaDamage",
                        },
                        priority:-1,
                        filter:function (event,player){
                if(player.storage.tlbb_suohou.contains(event.target.name)) return false;
                return true;
            },
                        check:function (event,player){
                return get.attitude(player,event.target)<0;
            },
                        logTarget:"target",
                        content:function (){
                "step 0"
                trigger.target.judge(function(card){
                    if(get.suit(card)=='heart') return 2;
                    return -2;
                });
                "step 1"
                if(result.bool==false){
                    if(!trigger.target.hasSkill('tlbb_suohou_juli')) trigger.target.addSkill('tlbb_suohou_juli');  
                }  
                "step 2"
                 if(!player.storage.tlbb_suohou.contains(trigger.target.name)){
                     player.storage.tlbb_suohou.push(trigger.target.name);
                     player.markSkill('tlbb_suohou');
                     //player.syncStorage('tlbb_suohou');         
                 }
            },
                        sub:true,
                    },
                    juli:{
                        mark:true,
                        marktext:"锁",
                        intro:{
                            content:"其他角色与你的距离为一",
                        },
                        mod:{
                            globalTo:function (from,to,current){
                    return -Infinity;
                },
                        },
                        sub:true,
                    },
                },
            },
            "tlbb_zhenmi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"judgeEnd",
                },
                frequent:true,
                content:function (){
        'step 0'
        event.list=[];
        'step 1'
        event.list.push(ui.cardPile.removeChild(ui.cardPile.lastChild));
        'step 2'
        if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
        player.gain(event.list);
        player.$draw(event.list.length);
        game.log(player,'从牌堆底摸'+get.cnNumber(event.list.length)+'张牌');
    },
            },
	 "tlbb_daoying":{
				audio:"ext:金庸群侠传:2",
                "content_h":function (player){
        "step 0"
        player.chooseTarget([1,2],function(card,player,target){
            return target.countCards('h')>0&&player!=target;
        },function(target){
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        });
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_daoying',result.targets);
            player.gainMultiple(result.targets);
        }
        else{
            event.finish();
        }
        "step 2"
        game.delay();
    },
                "content_e":function (player){
        "step 0"
        event.tar=[];
        event.num=0;
        "step 1"
        player.chooseTarget([1,1],function(card,player,target){
            if(event.tar.contains(target)) return false;
            if(player==target) return false;
            var es=target.getCards('e');
            if(!es) return false;
            for(var i=0;i<es.length;i++){
             //   if(['equip3','equip4'].contains(get.subtype(es[i]))&&player.getEquip('liulongcanjia')) continue;
             //   if(es[i].name=='liulongcanjia'&&player.countCards('e',{subtype:['equip3','equip4']})>1) continue;
                if(!player.getEquip(get.subtype(es[i]))) return true;
            }
            return false;
        },function(target){
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        })
        "step 2"
        if(result.bool){
            player.logSkill('tlbb_daoying',result.targets);
            event.target=result.targets[0];
            player.choosePlayerCard(result.targets[0],true,'e','将一张装备牌移至你的装备区').set('filterButton',function(button){
                return !player.getEquip(button.link);
            });
        }
        else{
            event.finish();
        }    
        "step 3"
        if(result&&result.links&&result.links.length){
            game.delay(2);
            event.tar.push(event.target);
            event.target.$give(result.links[0],player);
            player.equip(result.links[0]);
            player.addExpose(0.2);
            event.num++;
            if(event.num<2) event.goto(1);
        }
    },
                "content_j":function (player){
        "step 0"
        player.chooseTarget([1,2],function(card,player,target){
            return target.countCards('j')>0&&player!=target;
        },function(target){
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att*10;
            return att;
        })
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_daoying',result.targets);
            if(result.targets.length==1){
                player.gainPlayerCard(result.targets[0],'j',true);
            }
            else{
                player.gainPlayerCard(result.targets[0],'j',true);
                player.gainPlayerCard(result.targets[1],'j',true);
            }
        }
        else{
            event.finish();
        }
        "step 2"
        game.delay();
    },
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBefore",
                },
                filter:function (event,player){
        var numhs=game.countPlayer(function(current){
            return current!=player&&current.countCards('h');
        });
        var numes=game.countPlayer(function(current){
            if(current!=player&&current.countCards('e')){
                var es=current.getCards('e');
                if(!es) return false;
                for(var i=0;i<es.length;i++){
                if(!player.getEquip(get.subtype(es[i]))) return true;
            }
            return false; 
            }
        });
        var numjs=game.countPlayer(function(current){
            return current!=player&&current.countCards('j');
        });
        if(numhs>0&&!player.countCards('h')) return true;
        if(numes>0&&!player.countCards('e')) return true;
        if(numjs>0&&!player.countCards('j')) return true;
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        var numh=game.countPlayer(function(current){
            return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
        });
        var numhs=game.countPlayer(function(current){
            return current!=player&&current.countCards('h');
        });
        var nume=game.countPlayer(function(current){
            if(current!=player&&current.countCards('e')&&get.attitude(player,current)<=0){
                var es=current.getCards('e');
                if(!es) return false;
                for(var i=0;i<es.length;i++){
                if(!player.getEquip(get.subtype(es[i]))) return true;
            }
            return false; 
            }
        });
        var numes=game.countPlayer(function(current){
            if(current!=player&&current.countCards('e')){
                var es=current.getCards('e');
                if(!es) return false;
                for(var i=0;i<es.length;i++){
                if(!player.getEquip(get.subtype(es[i]))) return true;
            }
            return false; 
            }
        });
        var numj=game.countPlayer(function(current){
            return current!=player&&current.countCards('j')&&get.attitude(player,current)>0;
        });
        var numjs=game.countPlayer(function(current){
            return current!=player&&current.countCards('j');
        });
        var prompt1='盗婴';
        if(numhs>0&&!player.countCards('h')) prompt1+='<br><br><div class="text">选项一:获得两名其他角色至多两张手牌</div>';
        if(numes>0&&!player.countCards('e')) prompt1+='<br><br><div class="text">选项二:将至多两名其他角色的装备牌置于你的装备区</div>';
        if(numjs>0&&!player.countCards('j')) prompt1+='<br><br><div class="text">选项三:获得两名其他角色至多两张判定牌</div>';
        var control=[];
        if(numhs>0&&!player.countCards('h')){
            control.push('选项一');
        };
        if(numes>0&&!player.countCards('e')){
            control.push('选项二');
        };
        if(numjs>0&&!player.countCards('j')){
            control.push('选项三');
        };
        control.push('取消');
        player.chooseControl(control).set('prompt',prompt1).ai=function(){
            if(numj>1&&control.contains(选项三)) return '选项三';
            if(nume>1&&control.contains(选项二)) return '选项二';
            if(numh>1&&control.contains(选项一)) return '选项一';
            if(numj==1&&control.contains(选项三)) return '选项三';
            if(nume==1&&control.contains(选项二)) return '选项二';
            if(numh==1&&control.contains(选项一)) return '选项一';
            return '取消';
        };     
        "step 1"
        if(result.control&&result.control!='取消'){
            if(result.control=='选项一'){
                event.insert(lib.skill.tlbb_daoying.content_h,{
                    player:player,
                });         
            }
            else if(result.control=='选项二'){
                event.insert(lib.skill.tlbb_daoying.content_e,{
                    player:player,
                });      
            } 
            else if(result.control=='选项三'){
                event.insert(lib.skill.tlbb_daoying.content_j,{
                    player:player,
                });      
            }
        }
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            "tlbb_gouhe":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
        if(player.countCards('he')<2) return false;
        return game.countPlayer(function(current){
            return current.sex=='male'&&current.hp<current.maxHp;
        })>0;
    },
                content:function (){
        "step 0"
        var next=player.chooseCardTarget({
            position:'he',
            filterCard:lib.filter.cardDiscardable,
            selectCard:2,
            filterTarget:function(card,player,target){
                return target.sex=='male'&&target.hp<target.maxHp;
            },
            ai1:function(card){
                return 6-get.value(card);
            },
            ai2:function(target){
                return get.attitude(_status.event.player,target);
            },
            prompt:get.prompt('tlbb_gouhe')
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill('tlbb_gouhe',result.targets);
            result.targets[0].recover();
        }
        else{
            event.finish();
        }
    },
            },		
	"tlbb_youseng":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current.isDamaged();
        });
    },
                filterTarget:function (card,player,target){
        if(target.hp>=target.maxHp) return false;
        return true;
    },
                content:function (){
        target.recover();
        var num=target.countDiscardableCards(player,'he');
        var num1=Math.min(2,num);
        if(num1>0) player.discardPlayerCard(num1,target,true,'he');    
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                var num=target.countDiscardableCards(player,'he');
                var num1=target.countDiscardableCards(player,'h');
                if(num==0) return 2;
                if(num==1) return 1;
                if((num1-target.hp)>2) return 0.5;
                return 0;
            },
                    },
                    threaten:1.2,
                },
            },
            "tlbb_duhui":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('tlbb_duhui'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target,player){
           var att=get.attitude(player,target);
           var card=player.getCards('h');
            var num=0;
            if(card.length>2) return -1;
            for(var i=0;i<card.length;i++){
                if(get.tag(card[i],'recover')>=1) num++;
            }
            if(num==0&&att>0&&target.isTurnedOver()) return 1;
            if(num==0&&att<0&&!target.isTurnedOver()&&player.hp>1) return 0.5;
            return -1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_duhui',result.targets);
            var cards=player.getCards('h');
            player.discard(cards);
            event.target=result.targets[0]
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.target){
            event.target.chooseControl('选项一','选项二').set('prompt','度悔<br><br><div class="text">选项一:自己翻面</div><br><div class="text">选项二:对'+get.translation(player)+'造成一点伤害并令其执行摸牌和出牌阶段</div></br>').ai=function(){
                if(event.target.isTurnedOver()) return '选项一';
                return '选项二';
            };
        }
        "step 3"
        if(result.control){
            if(result.control=='选项一'){
                event.target.turnOver();
            }
            else{
                player.damage(1,event.target);
                player.phaseDraw();
                player.phaseUse();
                player.getStat().card={};
                player.getStat().skill={};
            }
        }
    },
            },
	"tlbb_huoyan":{
                subSkill:{
                    end:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                return player.getStat('damage');
            },
                        forced:true,
                        content:function (){
                var num=player.getStat('damage');
                player.draw(num);
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"useCard",
                },
				audio:"ext:金庸群侠传:2",
                direct:true,
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(player.hasSkill('tlbb_huoyan_end')) return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        'step 0'
        var prompt2='额外指定至多三名'+get.translation(trigger.card)+'的目标并翻面？若如此做回合结束时你可以摸X张牌(X为你本回合造成的伤害数量)'
        player.chooseTarget([1,3],get.prompt('tlbb_huoyan'),function(card,player,target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            if(trigger.targets.contains(target)) return false;
            return lib.filter.targetEnabled2(trigger.card,player,target);
        }).set('prompt2',prompt2).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;          
            if(!get.tag(trigger.card,'damage')) return -1;
            if(trigger.card.name=='huogong'&&player.countCards('h')<6) return -1;
            return get.effect(target,trigger.card,player,player);
        });
        'step 1'
        if(result.bool){
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        'step 2'
        if(event.targets){
            player.logSkill('tlbb_huoyan',event.targets);
            trigger.targets.addArray(event.targets);
            player.addTempSkill('tlbb_huoyan_end','phaseAfter');
            player.turnOver();
        }
    },
            },
            "tlbb_zheju":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                trigger:{
                    global:"useCardAfter",
                },
				audio:"ext:金庸群侠传:2",
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('tlbb_zheju_off')) return false;
        if(!player.isTurnedOver()) return false;
        if(!player.countCards('he')) return false;
        if(event.player==player) return false;
        return true;
    },
                content:function (){
        "step 0"
        var next=player.chooseToDiscard(get.prompt('tlbb_zheju'),1,'he','是否弃置一张与'+get.translation(trigger.card)+'类型相同的牌并摸一张牌？',function(card,player){
            return get.type(card)==get.type(trigger.card);
        });
        next.ai=function(card){
            return 6-get.value(card);
        };
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_zheju');
            player.addTempSkill('tlbb_zheju_off','phaseAfter');
            player.draw();
        }
    },
            },
	"tlbb_zhemei":{
		        audio:"ext:金庸群侠传:2",
                group:["tlbb_zhemei_before","tlbb_zhemei_damage"],
                subSkill:{
                    damage:{
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
                player.chooseTarget(get.prompt('tlbb_zhemei'),function(card,player,target){
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
                    player.logSkill('tlbb_zhemei',result.targets);
                    player.gainPlayerCard('ej',result.targets[0],true);
                    event.num--;
                    if(event.num>0){
                        event.goto(1);
                    }
                }
            },
                        sub:true,
                    },
                    before:{
                        trigger:{
                            player:"gainBefore",
                        },
                        filter:function (event,player){
                if(event.source!=player&&event.player==player){
                    for(var i=0;i<event.cards.length;i++){
                        if(get.suit(event.cards[i])=='club'){
                            if(get.position(event.cards[i])=='j'||get.position(event.cards[i])=='e') return true;
                        }
                    }
                }
                return false;
            },
                        content:function (){
                var num=0;
                if(trigger.source!=player&&trigger.player==player){
                    for(var i=0;i<trigger.cards.length;i++){
                        if(get.suit(trigger.cards[i])=='club'){
                            if(get.position(trigger.cards[i])=='j'||get.position(trigger.cards[i])=='e') num++;
                        }
                    }
                }
                //game.log('梅花牌数量为'+num);
                trigger.gainnum=num;
                trigger.gainclub=true;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                trigger:{
                    player:"gainAfter",
                },
                direct:true,
                filter:function (event,player){
        return event.gainclub==true;
    },
                content:function (){
        "step 0"
        event.num=trigger.gainnum;
        "step 1"
        player.chooseDrawRecover(get.prompt('tlbb_zhemei')).set('logSkill','tlbb_zhemei');
        "step 2"
        if(result.control!='cancel2'){
            event.num--;
            if(event.num>0){
                event.goto(1);
            }
        }
    },
            },
            "tlbb_bingfu":{
				audio:"ext:金庸群侠传:2",
                mark:true,
                marktext:"符",
                skillAnimation:true,
                animationStr:"冰符",
                animationColor:"fire",
                init:function (player){
        player.storage.tlbb_bingfu=false;
    },
                intro:{
                    content:"limited",
                },
                unique:true,
                enable:"phaseUse",
                position:"he",
                filter:function (event,player){
        if(player.storage.tlbb_bingfu) return false;
        var ca=player.getCards('he');
        if(ca.length<2) return false;
        return true;
    },
                filterCard:function (card,player,target){
        return true;
    },
                selectCard:2,
                check:function (card){
        return 5-get.value(card);
    },
                content:function (){
        "step 0"
        event.cardss=cards;
        event.suitss=[];
        for(var i=0;i<event.cardss.length;i++){
            var suit=get.suit(event.cardss[i]);
            if(!event.suitss.contains(suit)){
                event.suitss.push(suit);
            }
        }
        "step 1"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            player.storage.tlbb_bingfu=true;
            player.awakenSkill('tlbb_bingfu');
            event.finish();
        }
        "step 2"
        player.line(event.current,'green');
        var next=event.current.chooseToDiscard(2,'he','是否弃置两张与'+get.translation(event.cards)+'组成花色相同的牌?否则受到'+get.translation(player)+'的两点雷电伤害',function(card,player){
            var suit=get.suit(card);
            if(event.suitss.length==1){
                if(!event.suitss.contains(suit)) return false;
            }
            if(event.suitss.length>1){
                if(!event.suitss.contains(suit)) return false;
                if(ui.selected.cards){
                    for(var i=0;i<ui.selected.cards.length;i++){
                        if(get.suit(ui.selected.cards[i])==suit) return false;
                    }
                }
            }
            return true;
        });
        next.ai=function(card){
            return 8-get.value(card);
        };
        "step 3"
        if(result.bool){
            event.current=event.current.next;
            event.goto(1);
        }
        else{
            event.current.damage(2,'thunder',player);
            event.current=event.current.next;
            event.goto(1);
        }
    },
                ai:{
                    order:11,
                    result:{
                        player:1,
                    },
                },
            },
	"tlbb_juanzhi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
        return game.countPlayer(function(current){
            return get.attitude(player,current)<0&&current!=player&&current.sex=='female';
        })<3;
    },
                content:function (){
        "step 0"
        trigger.num+=2;
        trigger.drawbool=true;
    },
                group:"tlbb_juanzhi_drawbool",
                subSkill:{
                    drawbool:{
                        trigger:{
                            player:"phaseDrawEnd",
                        },
                        filter:function (event,player){
                return event.drawbool==true&&game.hasPlayer(function(current){
                    return current!=player&&current.sex=='female';
                });
            },
                        content:function (){
                "step 0"  
                //player.logSkill('tlbb_juanzhi');
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    event.finish();
                }
                "step 1"
                if(event.current.sex!='female'){
                    event.current=event.current.next;
                    event.goto(0);
                }
                "step 2"
                event.current.chooseToUse({name:'sha'},player,-1,'卷帙：是否对'+get.translation(player)+'使用杀').set('targetRequired',true);
                "step 3"
                event.current=event.current.next;
                event.goto(0);
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "tlbb_tongyou":{
                trigger:{
                    global:"useCard",
                },
				audio:"ext:金庸群侠传:2",
                priority:-1,
                direct:true,
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.card.name!='sha') return false;
        if(!event.targets.contains(player)) return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return current.sex=='male'&&lib.filter.targetEnabled2(event.card,event.player,current)&&!event.targets.contains(current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var next=player.chooseCardTarget({
            position:'h',
            filterCard:lib.filter.cardDiscardable,
            filterTarget:function(card,player,target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                if(trigger.targets.contains(target)) return false;
                if(target.sex!='male') return false;
                return lib.filter.targetEnabled2(trigger.card,trigger.player,target);
            },
            ai1:function(card){
                return get.value(trigger.card)-get.value(card);
            },
            ai2:function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
            },
            prompt:get.prompt('tlbb_tongyou')
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill('tlbb_tongyou',result.targets);
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.targets){
            game.log(event.targets,'额外成为了'+get.translation(trigger.card)+'的目标');
            trigger.targets.addArray(event.targets);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('he')==0) return;
                if(card.name!='sha') return;
                var min=1;
                var friend=get.attitude(player,target)>0;
                var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(player!=players[i]&&players[i].sex=='male'&&
                        get.attitude(target,players[i])<0&&
                        player.canUse(card,players[i],false)){
                        if(!friend) return 0;
                        if(get.effect(players[i],vcard,player,player)>0){
                            if(!player.canUse(card,players[i],false)){
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
            "tlbb_fanrui":{
				audio:"ext:金庸群侠传:2",
                mark:true,
                marktext:"蕊",
                skillAnimation:true,
                animationStr:"繁蕊",
                animationColor:"fire",
                init:function (player){
        player.storage.tlbb_fanrui=false;
    },
                intro:{
                    content:"limited",
                },
                unique:true,
                enable:"phaseUse",
                position:"h",
                filter:function (event,player){
        if(player.storage.tlbb_fanrui) return false;
        var ca=player.getCards('h');
        if(ca.length<3) return false;
        var allnum1=[],allnum2=[],allnum3=[];
        for(var i=0;i<ca.length;i++){
            var num1=get.number(ca[i]);
            var num2=(num1+1),num3=(num1+2);
            if(!allnum1.contains(num1)){
                allnum1.push(num1);   
            }
            if(!allnum2.contains(num2)){
                allnum2.push(num2);   
            }
            if(!allnum3.contains(num3)){
                allnum3.push(num3);   
            }
        }
        for(var i=0;i<allnum1.length;i++){
            if(allnum2.contains(allnum1[i])&&allnum3.contains(allnum1[i])) return true;
        }
        return false;
    },
                filterCard:function (card,player,target){
        var num=get.number(card);
        var ta=ui.selected.cards;
        if(ta.length==1){
            var mumca=get.number(ta[0])
            if((num+1)!=mumca&&(num-1)!=mumca) return false;
        }
        if(ta.length==2){
            var numm1=get.number(ta[0])+get.number(ta[0])-get.number(ta[1]);
            var numm2=get.number(ta[1])+get.number(ta[1])-get.number(ta[0]);
            var numm3=get.number(ta[1])+get.number(ta[0]);
            var numm4=numm3/2;
            if(num!=numm1&&num!=numm2&&num!=numm4) return false;
        }
        return true;
    },
                selectCard:3,
                discard:false,
                check:function (card){
        return 20-get.value(card);
    },
                content:function (){
        "step 0"
        event.cards=cards;
        player.showCards(event.cards,'繁蕊');
        "step 1"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            player.gain(event.cards,'gain2');
            player.storage.tlbb_fanrui=true;
            player.awakenSkill('tlbb_fanrui');
            event.finish();
        }
        "step 2"
        var next=event.current.chooseCard(1,'h','是否选择一张手牌当"蕊"展示并回复一体力？否则流失一体力。',function(card,player){
            var num=get.number(card);
            if(event.cards.length>2){
            var num4=14;
            var num5=14;
            var num6=0;
            var num7=0;
            for(var i=0;i<event.cards.length;i++){
                if(get.number(event.cards[i])<num4){
                    num4=get.number(event.cards[i]);
                }
            }
            for(var i=0;i<event.cards.length;i++){
                if(get.number(event.cards[i])<num5&&get.number(event.cards[i])!=num4){
                    num5=get.number(event.cards[i]);
                }
            }
            for(var i=0;i<event.cards.length;i++){
                if(get.number(event.cards[i])>num6){
                    num6=get.number(event.cards[i]);
                }
            }
            for(var i=0;i<event.cards.length;i++){
                if(get.number(event.cards[i])>num7&&get.number(event.cards[i])!=num6){
                    num7=get.number(event.cards[i]);
                }
            }
            if((num4+num4-num5)!=num&&(num6+num6-num7)!=num) return false;     
        }
        return true;
        });
        var att1=get.attitude(event.current,player);
        next.ai=function(card){
            if(att1>0){
                if(event.current.hp>=event.current.maxHp&&card.name=='tao') return -1;     
                return 1;
            }
            if(card.name=='tao') return -1;
            return 1;
        };
        "step 3"
        if(result.bool){
            event.current.line(player,'green');
            event.current.showCards(result.cards[0],'蕊');
            if(event.current.hp<event.current.maxHp){
                event.current.recover();     
            }
            event.current.$give(result.cards[0],player);
            event.current.lose(result.cards[0],ui.special);
            event.cards.push(result.cards[0]);
            player.showCards(event.cards,'繁蕊');
            game.delay(0.7);
            event.current=event.current.next;
            event.goto(1);
        }
        else{
            event.current.loseHp();   
            event.current=event.current.next;
            event.goto(1);
        }
    },
                ai:{
                    order:11,
                    result:{
                        player:1,
                    },
                },
            },
	"tlbb_luomei":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["discardAfter","respond"],
                },
				group:"tlbb_luomei2",
                filter:function (event,player){
         for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='club'&&get.position(event.cards[i])=='d'){
            if(event.cards[i].original&&event.cards[i].original=='h') return true;
             }
         }
        return false;
    },
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
        if(get.suit(trigger.cards[i])=='club'&&trigger.cards[i].original=='h'){
        cards.push(trigger.cards[i]);
        }
        }
        var card2=cards.length
        player.draw(card2*2);
        "step 2"
        cards=[];
    },
            },
            "tlbb_jiujie":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
				init:function (player){
        player.storage.tlbb_jiujie=0;
        game.addVideo('storage',player,['tlbb_jiujie2',player.storage.tlbb_jiujie]);
        player.syncStorage('tlbb_jiujie');
    },
                intro:{
                    content:"mark",
                },
                mark:true,
				group:"tlbb_jiujie2",
                filter:function (event,player){
        return player.storage.tlbb_jiujie&&player.storage.tlbb_jiujie>0;
    },
                content:function (){
        player.storage.tlbb_jiujie--;
		player.update();
        player.useCard({name:'jiu'},player,false);       
    },
                ai:{
                    order:10,
                    threaten:1.3,
                    result:{
                        player:function (player){
            if(player.countCards('h','sha')==0){
                return 1;
            }
            if((player.countCards('h','guanshi')>0||player.countCards('e','guanshi')>0)&&player.countCards('h','sha')>0&&player.countCards('h')>=3){
                return 10;
            }
            return get.order({name:'sha'})+1;
        },
                    },
                },
            },
            "tlbb_jiujie2":{				
                audio:"金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function (){
       player.storage.tlbb_jiujie++;
       if(player.storage.tlbb_jiujie&&player.storage.tlbb_jiujie>3){
           player.storage.tlbb_jiujie=3;
       }
        game.addVideo('storage',player,['tlbb_jiujie2',player.storage.tlbb_jiujie]);
		player.update();
       },
            },
            "tlbb_luomei2":{
				audio:"金庸群侠传:2",
                trigger:{
                    player:["loseEnd"],
                },
                filter:function (event,player){
         for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].original=='h') return false;
               if(get.suit(event.cards[i])!='club') return false;   
        }   
        return true;
    },
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
        if(get.suit(trigger.cards[i])=='club'&&trigger.cards[i].original!='h'){
        cards.push(trigger.cards[i]);
        }
        }
        var card2=cards.length
        player.draw(card2*2);
        "step 2"
        cards=[];
    },
            },
	"tlbb_chouchang":{
                mod:{
                    wuxieRespondable:function (card,player,target,current){
            if(card.onRES&&card.onRES==true){
                return false;
            }
        },
                },
                ai:{
                    norespond:true,
                    skillTagFilter:function (player,tag,arg,card){
            if(tag=='norespond'&&Array.isArray(arg)){
                if(_status.event.getParent().card.onRES==true) return true;
            }
            return false;
        },
                },
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                priority:-100,
                filter:function (event,card){
        var cardsss=player.getCards('h');
        if(cardsss.length==0) return false;
        if(event.card&&event.card.name=='sha') return true;
        if(event.card&&event.card.name=='juedou') return true;
        if(event.card&&event.card.name=='wanjian') return true;
        if(event.card&&event.card.name=='nanman') return true;
        return false;
    },
                content:function (){
          "step 0"
        var cardsss=player.getCards('h');
        if(cardsss.length==0) event.finish();
        var ca=trigger.card.name;
        if(!trigger.card) event.finish();
        if(ca!='juedou'&&ca!='sha'&&ca!='nanman'&&ca!='wanjian') event.finish();
          "step 1"
          var skr='每当你使用杀、决斗、南蛮入侵、万剑齐发时，你可弃置所有手牌（至少一张），令此牌不能被响应或抵消。然后若此牌造成的伤害大于2点，你受到1点无来源的伤害。'
        player.chooseBool('是否对发动愁肠？'+skr).set('ai',function(){  
            var caa=trigger.card.name;
            if(player.countCards('h','tao')==0&&player.countCards('h')<3&&(caa=='juedou'||caa=='sha')) return true;                     
            return false;
        }); 
        "step 2"
        if(result.bool){
            player.logSkill('tlbb_chouchang');
        }
        else{
            event.finish();
        }     
        "step 3"
        var cards=player.getCards('h');
        player.discard(cards);    
        "step 4"
        trigger.card.onRES=true;
        trigger.damagenum=0;
    },
                group:["tlbb_chouchang_after","tlbb_chouchang_damage"],
                subSkill:{
                    after:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        filter:function (event,player){
                return event.card&&event.card.onRES==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                delete trigger.card.onRES;
                "step 1"
                if(trigger.damagenum>2) player.damage(1,'nosource');
                
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event){
                return event.card&&event.card.onRES==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                  "step 0"
                trigger.getParent(2).damagenum+=trigger.num;
                "step 1"
                game.log(player,'因愁肠造成的伤害总计',trigger.getParent(2).damagenum);
            },
                        sub:true,
                    },
                    begin:{
                        trigger:{
                            player:["shaBegin","nanmanBegin","wanjianBegin","juedouBegin"],
                        },
                        filter:function (event){
                return event.card&&event.card.onRES==true;
            },
                        content:function (){
                //由于万剑南蛮没有event.directHit函数，废弃不用
                trigger.directHit=true;
            
            },
                        sub:true,
                    },
                },
            },
            "tlbb_aijie":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event){
        return (event.num>0)
    },
                direct:true,
                content:function (){
        'step 0'
        event.num1=trigger.num;
        'step 1'
        player.chooseTarget(get.prompt('tlbb_aijie'),function(card,player,target){
            return target!=player&&target.getHandcardLimit()>0;;
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        'step 2'
        if(result.bool){
            player.logSkill('tlbb_aijie',result.targets);
            if(!result.targets[0].hasSkill('tlbb_aijie_hs')){
                result.targets[0].addSkill('tlbb_aijie_hs');
                event.num1--;
            }
            else{
                result.targets[0].storage.tlbb_aijie_hs++;
                result.targets[0].markSkill('tlbb_aijie_hs');
                result.targets[0].syncStorage('tlbb_aijie_hs');
                event.num1--;
            }
            if(event.num1>0) event.goto(1);
        }
        else{
            event.finish();
        }
    },
                subSkill:{
                    hs:{
                        mark:true,
                        marktext:"哀",
                        init:function (player){
                player.storage.tlbb_aijie_hs=1;
                player.markSkill('tlbb_aijie_hs');
                player.syncStorage('tlbb_aijie_hs');
            },
                        intro:{
                            content:function (storage){
                    return '当前手牌上限减'+storage+'';
                },
                        },
                        mod:{
                            maxHandcard:function (player,num){
                    return num-player.storage.tlbb_aijie_hs;
                },
                        },
                        sub:true,
                    },
                },
            },
            "tlbb_gulian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                audio:"ext:tlbb_ganbaobao:true",
                filter:function (event,player){
        if(event.num<=1) return false;
        return !player.countCards('h');
    },
                priority:-10,
                content:function (){
        trigger.num=1;
    },
            },
		"tlbb_xianglong2":{		
                trigger:{
                    player:"enterGame",
					global:"gameStart",
                },               
				frequent:true,
                        forced:true,
                        content:function (){
                game.playJY('tlbb_qiaofengruchang');
            },                        
            },				
	"tlbb_xianglong":{
		audio:"ext:金庸群侠传:4",
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(event.card.name!='sha') return false;
        return true;
    },
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.color(card)=='black') return 1;
            if(get.color(card)=='red'){
                var cansha=game.hasPlayer(function(current){
                    return !trigger.targets.contains(current)&&player.canUse(trigger.card,current,false)&&get.effect(current,trigger.card,player,player)>0;
                });
                var cansha2=game.hasPlayer(function(current){
                    return !trigger.targets.contains(current)&&player.canUse(trigger.card,current,false);
                });
                if(cansha) return 2;
                if(cansha2&&player.hasSkill('tlbb_kanghui')) return 2;
                return -1;
            }
        });
        "step 1"
        if(result.color=='black'){
            trigger.ADDdamage=true;
            event.finish();
        }
        else{
            event.goto(2);
        }
        "step 2"
        player.chooseTarget('选择一名角色额外成为杀的目标',function(card,player,target){
            return !_status.event.source.contains(target)&&player.canUse(trigger.card,target,false);
        }).set('source',trigger.targets).set('ai',function(target){
            var player=_status.event.player;
            var eff=get.effect(target,trigger.card,player,player);
            if(player.hasSkill('tlbb_kanghui')&&eff<=0) return 0.2;
            return eff;
        });
        "step 3"
        if(result.bool){
            if(!event.isMine()&&!_status.connectMode) game.delayx();
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 4"
        player.line(event.target,'green');
        game.log(event.target,'额外成为了'+get.translation(trigger.card)+'的目标');
        trigger.targets.push(event.target);
    },
                group:["tlbb_xianglong_damage","tlbb_xianglong2"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                if(!event.card||event.card.name!='sha'||!event.notLink()) return false;
                return event.getParent(2).ADDdamage==true;
            },
                        forced:true,
                        content:function (){
				game.playJY(['tlbb_xianglong1','tlbb_xianglong2','tlbb_xianglong3','tlbb_xianglong4'].randomGet());			
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                },
            },
            "tlbb_kanghui":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageBegin",
                },
                check:function (event,player){
        return get.damageEffect(event.player,player)>=0;
    },
                content:function (){
        "step 0"
        player.draw(2);
        "step 1"
        trigger.cancel();
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(get.tag(card,'damage')) return [1,20];
            },
                    },
                },
            },
            "tlbb_zongpangp":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
        if(!event.player.hasSkill('tlbb_zongpan')) return false;
        if(event.player==player) return false;
        if(player.group!='wei'||player.countCards('h')==0) return false;
        return true;
    },
                content:function (){
          "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，','h',function(card){
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
			game.playJY(['tlbb_zongpan1','tlbb_zongpan2'].randomGet());
            event.cardssss=result.cards
            trigger.player.chooseControl('拒绝','不拒绝',function(event,player){    
                if(get.attitude(trigger.player,player)<=0) return '拒绝';
                return '不拒绝';
            });
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.control=='拒绝'){
            game.log(trigger.player,'拒绝了',player,'替换判定牌');
            trigger.player.chat('拒绝');
            event.finish();
            return;
        }
        "step 3"
        player.respond(event.cardssss,'highlight');
        "step 4"
        if(event.cardssss){
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            trigger.player.judging[0]=event.cardssss[0];
            if(!get.owner(event.cardssss[0],'judge')){
                trigger.position.appendChild(event.cardssss[0]);
            }
            game.log(trigger.player,'的判定牌改为',event.cardssss[0]);
        }
        "step 5"
        game.delay(2);
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "tlbb_zongpangpin":{
                group:["tlbb_zongpangp"],
                trigger:{
                    global:"compare",
                },
                filter:function (event,player){
        if(event.iwhile) return false;
        if(player.group!='wei'||player.countCards('h')==0) return false;
        if(event.player.hasSkill('tlbb_zongpan')&&event.player!=player) return true;
        if(event.target.hasSkill('tlbb_zongpan')&&event.target!=player) return true;
        return false;
    },
                silent:true,
                content:function (){
        "step 0"
		game.playJY(['tlbb_zongpan1','tlbb_zongpan2'].randomGet());
        if(trigger.player.hasSkill('tlbb_zongpan')&&trigger.player!=player){
            trigger.player.chooseControl('拒绝','不拒绝',function(event,player){
                if(get.attitude(trigger.player,player)<=0) return '拒绝';
                return '不拒绝';
            });
        }
        "step 1"
        if(result.control=='拒绝'){
            game.log(trigger.player,'拒绝了',player,'替换拼点牌');
            trigger.player.chat('拒绝');
            event.finish();
            return;
        }
        "step 2"
        if(trigger.target.hasSkill('tlbb_zongpan')&&trigger.target!=player){
            trigger.target.chooseControl('拒绝','不拒绝',function(event,player){
                if(get.attitude(trigger.target,player)<=0) return '拒绝';
                return '不拒绝';
            });
        }
        "step 3"
        if(result.control=='拒绝'){
            game.log(trigger.target,'拒绝了',player,'替换拼点牌');
            trigger.target.chat('拒绝');
            event.finish();
            return;
        }
        "step 4"
    var next=player.chooseCard(1,'h','是否选择一张牌替换拼点牌？？',function(card,player){
            return true;
        });
    var att=get.attitude(_status.event.player,trigger.player);
    var att1=get.attitude(_status.event.player,trigger.target);
    next.ai=function(card){
        if(att>0&&trigger.player!=player) {
            if(trigger.player.hasSkill('tlbb_zongpan')&&get.value(trigger.card1)-get.value(card)>0){
                return get.number(card);
            }
        }
        if(att<=0&&trigger.player!=player) {
            if(trigger.player.hasSkill('tlbb_zongpan')&&get.value(trigger.card1)-get.value(card)>0){
                return 8-get.number(card);
            }
        }
        if(att1>0&&trigger.target!=player) {
            if(trigger.target.hasSkill('tlbb_zongpan')&&get.value(trigger.card2)-get.value(card)>0){
                return get.number(card);
            }
        }
        if(att1<=0&&trigger.target!=player) {
            if(trigger.target.hasSkill('tlbb_zongpan')&&get.value(trigger.card2)-get.value(card)>0){
                return 8-get.number(card);
            }
        }
        return -1;
    };
    "step 5"
    if(result.bool){
        event.cardss=result.cards[0]; 
        player.respond(event.cardss,'highlight');
    }
    else{
         event.finish();
    }
    "step 6"
    if(event.cardss){
        if(trigger.player.hasSkill('tlbb_zongpan')&&trigger.target.hasSkill('tlbb_zongpan')){
            event.goto(7);
            
        }
        else if(trigger.player.hasSkill('tlbb_zongpan')&&trigger.player!=player){
            player.gain(trigger.card1,'gain2');
            trigger.card1=event.cardss;
            trigger.num1=get.number(event.cardss);
            game.log(trigger.player,'拼点牌改为',event.cardss);  
            game.log(trigger.player,'拼点牌点数改为',trigger.num1);
            event.finish();
        }
        else if(trigger.target.hasSkill('tlbb_zongpan')&&trigger.target!=player){
            player.gain(trigger.card2,'gain2');
            trigger.card2=event.cardss;
            trigger.num2=get.number(event.cardss);
            game.log(trigger.target,'拼点牌改为',event.cardss);
            game.log(trigger.target,'拼点牌点数改为',trigger.num2);
            event.finish();
        }
    }
      "step 7"
           event.str1='替换'+get.translation(trigger.player)+'拼点牌'
           event.str2='替换'+get.translation(trigger.target)+'拼点牌'
        player.chooseControl(event.str1,event.str2,function(event,player){
            return event.str1;
        });
      "step 8"
        if(result.control==event.str1){
            player.gain(trigger.card1,'gain2');
            trigger.card1=event.cardss;
            trigger.num1=get.number(event.cardss);
            game.log(trigger.player,'拼点牌改为',event.cardss);
            game.log(trigger.player,'拼点牌点数改为',trigger.num1);
        }
        else{
            player.gain(trigger.card2,'gain2');
            trigger.card2=event.cardss;
            trigger.num2=get.number(event.cardss);
            game.log(trigger.target,'拼点牌改为',event.cardss);
            game.log(trigger.target,'拼点牌点数改为',trigger.num2);
        }

    },
                forced:true,
                popup:false,
            },
            "tlbb_zongpan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                zhuSkill:true,
                popup:false,
                forced:true,
                unique:true,
                filter:function (event,player){
        return player.identity!='zhu';
    },
                content:function (){
        player.removeSkill('tlbb_zongpan');
    },
                global:"tlbb_zongpangpin",
            },
	"tlbb_xundiao":{
		 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event){
        if(!event.player.isAlive()||!event.source.isAlive()) return false;
        if(player.countCards('h','sha')==0) return false;
        if(!event.source||event.source==player) return false;
        if(!lib.filter.targetEnabled({name:'sha',nature:'fire'},player,event.source)) return false;
        return event.card&&event.card.name=='sha';
    },
                direct:true,
                content:function (){
         "step 0"
         //过滤器又又又抽风了，以下代码是防过滤器抽风的
        if(!trigger.player.isAlive()||!trigger.source.isAlive()) event.finish();
        if(player.countCards('h','sha')==0) event.finish();
        if(!trigger.source||trigger.source==player) event.finish();
        if(!trigger.card||trigger.card.name!='sha') event.finish();
        if(!lib.filter.targetEnabled({name:'sha',nature:'fire'},player,trigger.source)) event.finish();
         "step 1"
        var next=player.chooseCard(1,'h','是否选择一张普通杀当火杀对'+get.translation(trigger.source)+'使用？',function(card,player){
            return card.name=='sha'&&card.nature!='thunder'&&card.nature!='fire';
        });
        var att1=get.attitude(_status.event.player,trigger.player);
        var att2=get.attitude(_status.event.player,trigger.source);
        next.ai=function(card){
            if(att2<=0&&att1>0){
                return 1;
            }
            return -1;
        };
          "step 2"
        if(result.bool){
            player.logSkill('tlbb_xundiao',trigger.source);
            player.line(trigger.source,'green');
            player.storage.tlbb_xundiao=trigger.player;
            player.addTempSkill('tlbb_xundiao_damage',{player:'useCardEnd'});
            var card={name:'sha',nature:'fire'};
            player.useCard(card,trigger.source,result.cards,false);
        }
        else{
            event.finish();
        }
    },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageAfter",
                        },
                        popup:false,
                        forced:true,
                        onremove:function (player){
                delete player.storage.tlbb_xundiao;
            },
                        content:function (){
                if(trigger.getParent(4).skill=='tlbb_xundiao'&&trigger.card.name=='sha'){
                    player.storage.tlbb_xundiao.recover();
                }
            },
                        sub:true,
                    },
                },
            },
            "tlbb_qiyuan":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"shaBefore",
                },
                check:function (event,player){
        //if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                direct:true,
                content:function (){
         "step 0"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        "step 1"
        if(event.current.countCards('h','sha')==0){
            event.current=event.current.next;
            event.goto(0);
          }
         "step 2"
        var next=event.current.chooseCard(1,'h','是否选择一张杀交给'+get.translation(player)+'？',function(card,player){
            return card.name=='sha';
        });
        var att1=get.attitude(event.current,player);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return -1;
        };
        "step 3"
        if(result.bool){
            event.current.line(player,'green');
            event.current.logSkill('tlbb_qiyuan',player);
            player.gain(result.cards[0],event.current);
            event.current.$give(result.cards.length,player);
            game.delay(0.7);
            event.current=event.current.next;
            event.goto(0);
        }
        else{
            event.current=event.current.next;
            event.goto(0);
        }
    },
            },
            "tlbb_xinwu":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"gainEnd",
                },
                filter:function (event,player){
        if(event.source&&event.source!=player){
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].name=='sha') return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        event.cards=trigger.cards.slice(0);
        var next=player.chooseCard(1,'h','是否展示其中一张杀令'+get.translation(trigger.source)+'摸一张牌？',function(card,player){
            return card.name=='sha'&&_status.event.getParent().cards.contains(card);
        });
        var att1=get.attitude(player,trigger.source);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_xundiao',trigger.source);
            player.line(trigger.source,'green');
            player.showCards(result.cards[0])
            trigger.source.draw();
            
        }
        else{
            event.finish();
        }
    },
            },
"tlbb_qianjun2":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"shaMiss",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                filter:function (event,player){
        if(!event.responded||!event.responded.cards||event.responded.cards.length!=1) return false;
        return (event.responded&&get.itemtype(event.responded.cards)=='cards');
    },
                direct:true,
                content:function (){
        "step 0"
        var next=player.chooseToDiscard(1,'h','是否弃置一张与'+get.translation(trigger.responded.cards[0])+'花色相同的牌？若如此做，该杀命中。',function(card,player){
        return get.suit(card)==get.suit(trigger.responded.cards[0]);
    });
    next.ai=function(card){
        var att=get.attitude(player,trigger.target);
        if(att<0){
            return 9-get.value(card);
        }
        return -1;
    };
        "step 1"
        if(result.bool){
            player.logSkill('tlbb_qianjun2',trigger.target);
            trigger.untrigger();
            trigger.trigger('shaHit');
            trigger._result.bool=false;
        }
    },
            },
            "tlbb_yuguan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event){
        if(player.previous==event.player) return false;
        if(player==event.player.next) return false;
        if(!lib.filter.targetEnabled2(event.card,player,event.player.next)) return false;
        if(get.distance(event.player,event.player.next)>1) return false;
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                direct:true,
                content:function (){
         "step 0"
        if(!trigger.card||trigger.card.name!='sha'||!trigger.notLink()) event.finish();
        if(player.previous==trigger.player) event.finish();
        if(player==trigger.player.next) event.finish();
        if(!lib.filter.targetEnabled2(trigger.card,player,trigger.player.next)) event.finish();
        if(get.distance(trigger.player,trigger.player.next)>1) event.finish();
        "step 1"
        player.chooseBool('是否对'+get.translation(trigger.player.next)+'使用'+get.translation(trigger.card)+'？').set('ai',function(){                                
            if(get.effect(trigger.player.next,trigger.card,player,player)>0) return true;                     
            return false;
        }); 
        "step 2"
        if(result.bool){
            player.logSkill('tlbb_yuguan',trigger.player.next);
            player.useCard(trigger.card,trigger.player.next);
        }
        else{
            event.finish();
        }     
    },
            },
            "tlbb_qianjun":{
                group:["tlbb_qianjun_sha","tlbb_qianjun_use","tlbb_qianjun_unbuff"],
                subSkill:{
                    unbuff:{
                        trigger:{
                            player:"useCardAfter",
                            global:"phaseAfter",
                        },
                        priority:2,
                        filter:function (event){
                if(event.name=='useCard') return (event.card&&(event.card.name=='sha'));
                return true;
            },
                        forced:true,
                        popup:false,
                        content:function (){    
                if(player.hasSkill('tlbb_qianjun_buff')) player.removeSkill('tlbb_qianjun_buff');
                if(player.hasSkill('tlbb_qianjun_buffb')) player.removeSkill('tlbb_qianjun_buffb');
            },
                        sub:true,
                    },
                    buff:{
                        mark:true,
                        marktext:"均",
                        intro:{
                            content:"你使用的杀需要两张闪才能闪避",
                        },
                        trigger:{
                            player:"shaBegin",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return !event.directHit;
            },
                        priority:-1,
                        content:function (){
							game.playJY(['tlbb_qianjun1','tlbb_qianjun2'].randomGet());
                if(typeof trigger.shanRequired=='number'){
                    trigger.shanRequired++;
                }
                else{
                    trigger.shanRequired=2;
                }
            },
                        sub:true,
                    },
                    buffb:{
                        mark:true,
                        marktext:"伤",
                        intro:{
                            content:"你使用的杀造成的伤害加一",
                        },
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                return event.card&&event.card.name=='sha'&&event.notLink();
            },
                        popup:false,
                        forced:true,
                        content:function (){
							game.playJY(['tlbb_qianjun1','tlbb_qianjun2'].randomGet());
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                    use:{
                        trigger:{
                            player:["useCard"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.skill=='tlbb_qianjun_sha'&&event.card.name=='sha') return true;
                return false;
            },
                        content:function (){
                player.addTempSkill('tlbb_qianjun_buff','phaseEnd');
                player.addTempSkill('tlbb_qianjun_buffb','phaseEnd');
            },
                        sub:true,
                    },
                    sha:{
                        enable:["chooseToUse"],
                        filterCard:{
                            name:"sha",
                        },
                        selectCard:2,
                        viewAs:{
                            name:"sha",
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":13,"name":"sha","cardid":"4744408281","_transform":"translateX(448px)","clone":{"name":"sha","suit":"diamond","number":13,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":158}}],
                            suit:"club",
                            number:9,
                        },
                        precontent:function (result){
                "step 0"
                var card=event.result.cards;
                event.cards=card;
                player.lose(card);
                player.$throw(card,1000);
                game.log(player,'将',card,'当一张无花色的杀使用');
                event.result.cards.length=0;
            },
                        viewAsFilter:function (player){
                if(player.countCards('h','sha')<2) return false;
            },
                        prompt:"将两张杀当杀使用",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                    if(player.countCards('h','sha')<2) return false;
                },
                            order:function (){
                    return get.order({name:'sha'})+0.1;
                },
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[5,1],
                                value:[5,1],
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
                },
            },
"tlbb_xpojie":{
	 audio:"ext:金庸群侠传:2",
                unique:true,
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
           "step 0"
           event.cardss=[];
           player.chooseTarget([1,2],function(card,player,target){
               return target.countCards('h')>0&&player!=target;
           },function(target){
               var att=get.attitude(_status.event.player,target);
               if(target.hasSkill('tuntian')) return att/10;
               return 1-att;
        });
        "step 1"
        if(result.bool){
            event.targets=result.targets;
            event.numss=result.targets.length
            event.num1=0;
            }
        else{
            event.goto(4);
        }
          "step 2"
          if(event.num1<event.numss){
              event.targets[event.num1].chooseCard(true).ai=function(card){
                  if(_status.event.getRand()<0.5) return Math.random();
                  return get.value(card);
              };
          }
        else{
            event.goto(4);
        }
          "step 3"
        event.card2=result.cards[0];
        game.log(event.targets[event.num1],'展示了',event.card2);
        event.cardss.push(event.card2);
        event.num1++;
        event.goto(2);
        "step 4"
        player.chooseCard(true).ai=function(card){
            if(_status.event.getRand()<0.5) return Math.random();
            return get.value(card);
        }
           "step 5"
        event.card2=result.cards[0];
        game.log(player,'展示了',event.card2);
        event.cardss.push(event.card2);
        "step 6"
        var list=event.cardss;
        player.chooseButton([get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+
            '，'+get.prompt('tlbb_xpojie'),list,'hidden'],function(button){
            var card=button.link;
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            return result*attitude;
        }).set('judging',trigger.player.judging);
        "step 7"
        if(result.bool){
            var card=result.links[0];
               if(player.getCards('h').contains(card)){
               player.respond(card,'highlight');
                   game.delay();
                   player.update();
                }
           if(event.targets[0]&&event.targets[0].getCards('h').contains(card)){
             // event.targets[0].lose(card,event.position);
               event.targets[0].respond(card,'highlight');
                }
            if(event.targets[1]&&event.targets[1].getCards('h').contains(card)){
                //event.targets[1].lose(card,event.position);
                event.targets[1].respond(card,'highlight');
             }
            event.car=card;
            }
           "step 8"
        if(result.bool){
            if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast(function(card){
                    if(card.clone){
                        card.clone.classList.remove('thrownhighlight');
                    }
                },trigger.player.judging[0]);
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
            }
            trigger.player.judging[0].discard();
            trigger.player.judging[0]=event.car;
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(event.car);
            }
            game.log(trigger.player,'的判定牌改为',event.car);
            game.delay(2);
        }
        else{
            for(var i=0;i<event.cardss.length;i++){
                var card2=event.cardss[i];
                if(player.getCards('h').contains(card2)){
               player.discard(card2);
                }
           if(event.targets[0]&&event.targets[0].getCards('h').contains(card2)){
             // event.targets[0].lose(card,event.position);
               event.targets[0].discard(card2);
                }
            if(event.targets[1]&&event.targets[1].getCards('h').contains(card2)){
                //event.targets[1].lose(card,event.position);
                event.targets[1].discard(card2);
                }
            }
        }
    },
                ai:{
                    tag:{
                        rejudge:0.6,
                    },
                },
            },
			"tlbb_yaotie3":{},
            "tlbb_yaotiehc":{
				 audio:"ext:金庸群侠传:2",
                enable:"phaseUse", 
    usable:1, 
    filterTarget:function (card,player,target){ 
        var num=target.countCards('h'); 
        if(ui.selected.targets.length){ 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(num==ui.selected.targets[i].countCards('h')){ 
                    return false; 
                }; 
            } 
        } 
        if(ui.selected.targets.length==2&&ui.selected.targets[0].countCards('h')-num!=num-ui.selected.targets[1].countCards('h')&&num-ui.selected.targets[0].countCards('h')!=ui.selected.targets[0].countCards('h')-ui.selected.targets[1].countCards('h')&&num-ui.selected.targets[1].countCards('h')!=ui.selected.targets[1].countCards('h')-ui.selected.targets[0].countCards('h')){ 
            return false; 
        } 
        if(ui.selected.targets.length>2){ 
            var num2=target.countCards('h'); 
            var num3=target.countCards('h'); 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(ui.selected.targets[i].countCards('h')<num2){ 
                    num2=ui.selected.targets[i].countCards('h'); 
                } 
                if(ui.selected.targets[i].countCards('h')>num3){ 
                    num3=ui.selected.targets[i].countCards('h'); 
                } 
            } 
            if(num2!=target.countCards('h')&&num3!=target.countCards('h')){ 
                return false; 
            } 
            if(target.countCards('h')==num2){ 
                var num4=Infinity; 
                var num5=Infinity; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].countCards('h')<num4){ 
                        num4=ui.selected.targets[i].countCards('h'); 
                    } 
                } 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].countCards('h')<num5&&ui.selected.targets[i].countCards('h')!=num4){ 
                        num5=ui.selected.targets[i].countCards('h'); 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
            else{ 
                var num4=0; 
                var num5=0; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num4<ui.selected.targets[i].countCards('h')){ 
                        num4=ui.selected.targets[i].countCards('h') 
                    } 
                } 
 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num5<ui.selected.targets[i].countCards('h')&&ui.selected.targets[i].countCards('h')!=num4){ 
                        num5=ui.selected.targets[i].countCards('h') 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
        } 
        return !player.hasSkill('tlbb_yaotie3'); 
    }, 
    selectTarget:[3,Infinity], 
    content:function (){ 
        target.draw(); 
		game.playJY(['tlbb_yaotie1','tlbb_yaotie2'].randomGet());
		player.addTempSkill('tlbb_yaotie3','phaseEnd');
    }, 
    ai:{ 
        threaten:1.5, 
        order:20, 
        result:{ 
            target:1, 
        }, 
    }, 

            },
            "tlbb_yaotiehp":{
			 audio:"ext:金庸群侠传:2",	 
                enable:"phaseUse", 
    usable:1, 
    complexSelect:true, 
    filterTarget:function (card,player,target){ 
        var num=target.hp; 
        if(ui.selected.targets.length){ 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(num==ui.selected.targets[i].hp){ 
                    return false; 
                }; 
            } 
        } 
        if(ui.selected.targets.length==2&&ui.selected.targets[0].hp-num!=num-ui.selected.targets[1].hp&&num-ui.selected.targets[0].hp!=ui.selected.targets[0].hp-ui.selected.targets[1].hp&&num-ui.selected.targets[1].hp!=ui.selected.targets[1].hp-ui.selected.targets[0].hp){ 
            return false; 
        } 
        if(ui.selected.targets.length>2){ 
            var num2=target.hp; 
            var num3=target.hp; 
            for(var i=0;i<ui.selected.targets.length;i++){ 
                if(ui.selected.targets[i].hp<num2){ 
                    num2=ui.selected.targets[i].hp; 
                } 
                if(ui.selected.targets[i].hp>num3){ 
                    num3=ui.selected.targets[i].hp; 
                } 
            } 
            if(num2!=target.hp&&num3!=target.hp){ 
                return false; 
            } 
            if(target.hp==num2){ 
                var num4=Infinity; 
                var num5=Infinity; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].hp<num4){ 
                        num4=ui.selected.targets[i].hp; 
                    } 
                } 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(ui.selected.targets[i].hp<num5&&ui.selected.targets[i].hp!=num4){ 
                        num5=ui.selected.targets[i].hp; 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
            else{ 
                var num4=0; 
                var num5=0; 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num4<ui.selected.targets[i].hp){ 
                        num4=ui.selected.targets[i].hp 
                    } 
                } 
 
                for(var i=0;i<ui.selected.targets.length;i++){ 
                    if(num5<ui.selected.targets[i].hp&&ui.selected.targets[i].hp!=num4){ 
                        num5=ui.selected.targets[i].hp 
                    } 
                } 
                if(num4-num!=num5-num4){ 
                    return false; 
                } 
            } 
        } 
        return !player.hasSkill('tlbb_yaotie3'); 
    }, 
    selectTarget:[3,Infinity], 
    content:function (){ 
        target.draw(); 
		game.playJY(['tlbb_yaotie1','tlbb_yaotie2'].randomGet());
		player.addTempSkill('tlbb_yaotie3','phaseEnd');
    }, 
    ai:{ 
        threaten:1.5, 
        order:20, 
        result:{ 
            target:1, 
        }, 
    }, 

            },
            "tlbb_yaotie":{
				usable:1,
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
				 audio:"ext:金庸群侠传:2",
                group:["tlbb_yaotiehp","tlbb_yaotiehc"],
            },
            "tlbb_yayin":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
        if(!event.card) return true;
        if(!event.source)return true;
        return false;
    },
                forced:true,
                content:function (){
        trigger.cancel();
    },
            },
"tlbb_shifu":{
	audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                filter:function (){
                              var num=0;
                              for(var i=0;i<game.players.length;i++){
                                 if(game.players[i].sex=='male'&&game.players[i]!=player) num++
                              }
                              return (num>=1)
      
    },
                content:function (){
        'step 0'
        player.chooseTarget('请选择【弑夫】的目标',lib.translate.tlbb_shifu_info,true,function(card,player,target){
            return target!=player&&target.sex!='female';           
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【弑夫】','的目标');            
            player.addSkill('tlbb_shifu_a');
            player.addSkill('tlbb_shifu_b');
            target.addSkill('tlbb_shifumark');
            
        player.storage.tlbb_shifu=target;
        player.storage.tlbb_shifu2=player;
            }
    },
                subSkill:{
                    a:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        frequent:true,
                        content:function (){
							game.playJY(['tlbb_shifu1','tlbb_shifu2'].randomGet());
            trigger.num+=player.storage.tlbb_shifu.maxHp-player.storage.tlbb_shifu.hp;
                           },
                        ai:{
                            threaten:1.3,
                        },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            global:"dieBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
               if(player.storage.tlbb_shifu==trigger.player) {   
               player.storage.tlbb_shifu=[];          
               }
               if(player.storage.tlbb_shifu2==trigger.player) {    
                target.removeSkill('tlbb_shifumark');
                player.storage.tlbb_shifu=[];
              }                              
            },
                        sub:true,
                    },
                },
                group:["tlbb_shifu2"],
            },
            "tlbb_shifumark":{
                marktext:"散",
                mark:true,
                intro:{
                    content:"已中“软骨散”",
                },
            },
            "tlbb_shifu2":{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                return event.player.hasSkill('tlbb_shifumark');  
                },
                content:function (){
                   "step 0"          
                   player.chooseTarget('请将'+get.translation(trigger.player)+'的「软骨散」转移给另一名男性角色',true,function(card,player,target){
                   return target!=player&&target.sex!='female'&&target!=trigger.player;           
                   }).set('ai',function(target){
                   var player=_status.event.player;
                   return -get.attitude(player,target);
                   });     
                  "step 1"
                  if(result.bool){
                  var target=result.targets[0];
                  player.line(target);
                  trigger.player.removeSkill('tlbb_shifumark');
                  player.storage.tlbb_shifu=[];                                
                  target.addSkill('tlbb_shifumark');
                  player.storage.tlbb_shifu=target;   
                  game.delay();       
                  }                                                               
                },
            },
            "tlbb_buyao":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function(event,player){
                return true;
    },	 
                content:function(){
        "step 0"
       /* player.chooseTarget(get.prompt('tlbb_buyao'),function(card,player,target){
        return player!=target;
                    }).set('ai',function(player,target){
            -get.attitude(player,target);     
       });  */
         player.chooseTarget('选择【布谣】的目标',lib.translate.tlbb_buyao_info,true,function(card,player,target){
             return target!=player;
     }).set('ai',function(target){     
             return -get.attitude(player,target);            
     });                      
        "step 1"               
      if(result.bool){
		  game.log(result.targets[0],'成为了','【布谣】','的目标');
           player.line(result.targets[0]);
             event.target=result.targets[0];			           
            player.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'heart2';
                case 1:case 4:case 5:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
            }
        });  
        }else{
            event.finish();
        };        
        
        "step 2"   
        game.log(player,'选择了'+get.translation(result.control));            
        event.choice=result.control;
        event.target.popup(event.choice);
//        event.card=player.getCards('h').randomGet();
//        event.target.gain(event.card,player);
//        player.$give(event.card,event.target);
//        event.card=get.cards(1);
//      target.showCards(event.card); 
        target.judge();
       "step 3" 
        event.card=result.card;                  
        target.gain(event.card);
//        player.gain(trigger.result.card);
//                      player.$gain2(trigger.result.card);            
        game.log(target,'获得了',event.card); 
        game.delay();                 
                 
        "step 4"                        
        if(get.suit(event.card)+'2'!=event.choice) target.damage('nocard');                                              
    },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                var eff=get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                      },
                    },
                },
            },
            "tlbb_siqian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
               //return event.player.hasSkill('tlbb_shifumark');
                             var num=0;
                             for(var i=0;i<game.players.length;i++){
                                if(game.players[i].hasSkill('tlbb_shifumark')&&game.players[i].hasSkill('tlbb_shifumark').isAlive()) num++
                             }
                            return (num=1)     
              },
                content:function (){     
        "step 0"
        player.chooseTarget(get.prompt('tlbb_siqian'),function(card,player,target){
        return target.hasSkill('tlbb_shifumark');
        });   
                       
        "step 1"         
        if(result.bool){
            target1=result.targets[0];
            player.chooseTarget('转移'+get.translation(target1)+'的「软骨散」标记',true,function(card,player,target){
            return target!=player&&target.sex!='female'&&target!=target1;           
        }).set('ai',function(target){
                var player=_status.event.player;
                return 10+get.attitude(player,target);
            });
        }else{
            event.finish();
        };                
                                     
        "step 2"
        if(result.bool){
            target2=result.targets[0];
             player.logSkill('tlbb_siqian');
            player.line(target2);
            target1.removeSkill('tlbb_shifumark');
            player.storage.tlbb_shifu=[];                                
            target2.addSkill('tlbb_shifumark');
            player.storage.tlbb_shifu=target2;            
            game.delay();
        }
    },
            },
"tlbb_dianhua":{
	audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                priority:Infinity,
                usable:1,
                filter:function (event,player){
        if(event.player==player) return false;
        if(get.type(event.card)=='basic') return false;
        if(get.type(event.card)!='trick') return false;
        if(get.type(event.card)=='delay') return false;
        if(event.card.name=='wuxie') return false;
        if(!event.targets||event.targets.length!=1||event.targets[0]==event.player) return false;
        var list2=['juedou','huogong','jiedao','tiesuo','guohe','shunshou','wanjian','nanman'];
        if(list2.contains(event.card.name)){
            list2.remove(event.card.name);
        }
        for(var i=0;i<list2.length;i++){
            var card=game.createCard(list2[i],event.card.suit,event.card.number,event.card.nature);
            if(event.player.canUse(card,event.targets[0])){
               return true;
            }
        }
        return false;
    },
                check:function (event,player){
        return (get.attitude(player,event.player)<=0);
    },
                content:function (){
        'step 0'
        trigger.cancel();
        'step 1'
        var list=[];
        var list2=['juedou','huogong','jiedao','tiesuo','guohe','shunshou','wanjian','nanman'];
        if(list2.contains(trigger.card.name)){
            list2.remove(trigger.card.name);
        }
        for(var i=0;i<list2.length;i++){
            var card=game.createCard(list2[i],trigger.card.suit,trigger.card.number,trigger.card.nature);
            if(trigger.player.canUse(card,trigger.targets[0])){
               list.push(list2[i]);
            }
        }
        for(var i=0;i<list.length;i++){
            list[i]=['锦囊','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张你要转化的锦囊牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            return get.effect(trigger.targets[0],card,_status.event.player,player)
        });
        'step 2'
        if(result.bool){
            trigger.player.useCard({name:result.buttons[0].link[2]},trigger.targets[0],trigger.cards);
        }
    },
    ai:{
    expose:0.8,
    },
            },
            "tlbb_wendian":{
                global:"tlbb_wendian1",
            },
            "tlbb_wendian1":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(player.hasSkill('tlbb_wendian1_off')) return false;
        return player.countCards('h')>0&&game.hasPlayer(function(current){
            return current.hasSkill('tlbb_wendian')&&current!=player;
        });
    },
               // direct:true,
                delay:0,
                filterCard:true,
                discard:false,
                lose:false,
                position:"h",
                prompt:function (){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('tlbb_wendian');
        });
        var str='将一张手牌交给'+get.translation(list);
        if(list.length>1) str+='中的一人';
        return str;
    },
                check:function (card){
        return 8-get.value(card);
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer(function(current,player){
            return current.hasSkill('tlbb_wendian')&&current!=player;
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>0){
            player.chooseTarget(true,'选择【问典】的目标',function(card,player,target){
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
			game.playJY(['tlbb_wendian1','tlbb_wendian2'].randomGet());
            player.logSkill('tlbb_wendian',event.target);
            player.addTempSkill('tlbb_wendian1_off');
            event.cardss=cards[0];
            player.$give(event.cardss,event.target);
            event.target.gain(event.cardss,player);
        }
        else{
            event.finish();
        }
        "step 3"
        if(event.target){
            event.target.chooseControl('是','否').set('prompt','问典<br><br><div class="text">是否亮出牌堆顶的两张牌令其获得其中的锦囊牌?</div><br><div class="text">').ai=function(){
               var att=get.attitude(event.target,player);
                if(att>=0) return '是';
                if(att<0) return '否';
                return '否';
            };
        }
          "step 4"
        if(result.control=='是'){
            event.cards=get.cards(2);
            event.target.showCards(event.cards,'问典');
        }
        if(result.control=='否'){
            game.log(event.target,'拒绝了展示牌堆顶的牌');
            event.finish();
        }
          "step 5"       
        for(var i=0;i<event.cards.length;i++){
            if(get.type(event.cards[i])!='trick'&&get.type(event.cards[i])!='delay'){
                event.cards[i].discard();
                event.cards.splice(i--,1);
            }
        }
        player.gain(cards,'gain2');    
    },
                ai:{
                    order:2,
                    threaten:1.5,
                    result:{
                        player:function (player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('tlbb_wendian');
                });
                if(target){
                    return get.attitude(player,target);
                }
            },
                    },
                },
            },
"tlbb_nayuan":{
 audio:"ext:金庸群侠传:8",
                trigger:{
                    global:"useCardBegin",
                },
                priority:Infinity,
                direct:true,
                filter:function (event,player){
        if(event.player==player) return true;
        return event.targets.contains(player);
    },
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
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('tlbb_nayuan'),function(card,player,target){
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
            player.logSkill('tlbb_nayuan',event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        event.skillai=function(list){
            return get.max(list,get.skillRank,'item');
        };
        if(event.isMine()){
            event.dialog=lib.skill.tlbb_nayuan.createDialog(player,target);//tianshu
            event.switchToAuto=function(){
                event._result=event.skillai(event.list);
                game.resume();
            };
            _status.imchoosing=true;
            game.pause();
        }
        else{
            event._result=event.skillai(lib.skill.tlbb_nayuan.createDialog(player,target,true));
        }
        'step 3'
        _status.imchoosing=false;
        if(event.dialog){
            event.dialog.close();
        }
        player.addTempSkill(result,'useCardAfter');
        player.popup(result);
        game.log(player,'获得了','【'+get.translation(result)+'】');
    },
            },
            "tlbb_zhuha":{
             audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){
        if(event.nature) return true;
    },
                forced:true,
                content:function (){
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    nothunder:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')) return 'zerotarget';
                if(card.name=='tiesuo'){
                    return [0,0];
                }
            },
                    },
                },
            },
"tlbb_lingbo":{
                audio:"ext:金庸群侠传:5",
                init:function (player){player.storage.tlbb_lingbo=0;player.syncStorage('tlbb_lingbo');},
                group:"tlbb_lingbo2",
                trigger:{
                    global:"useCard",
                },
                forced:true,
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.player!=_status.currentPhase) return false;
        return true;
 },
                content:function (){
 player.storage.tlbb_lingbo++;
 },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+to.storage.tlbb_lingbo;
        },
                },
            },
            "tlbb_qingguan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        "step 0"
    player.chooseControl('回复体力','失去体力',function(){
     				var player=_status.event.player;
						if(player.countCards('h',{type:'trick'})>0&&player.hp%2==1){
							return '回复体力';
						}
						if(player.countCards('h','sha')>0&&player.hp%2==0){
							return '失去体力';
						}				
						return '失去体力';
    }).set('prompt','选择回复体力或失去体力');
    "step 1"
     if(result.control=='回复体力'){ 
         player.recover();
         player.addSkill('tlbb_qingguan_recover');
        }
     if(result.control=='失去体力'){  
        player.loseHp();
        player.addSkill('tlbb_qingguan_loseHp');
            }
    },
            },
            "tlbb_xiumai":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["loseHpEnd","recoverEnd","damageEnd","phaseBegin"],
                },
                forced:true,
                filter:function (event,player){
        return player==_status.currentPhase;
     },
                content:function (){
   if(player.hp%2==0){
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('tlbb_xiumai2')){
                player.line(current,'green');
                current.addTempSkill('tlbb_xiumai2');
                current.removeSkill('tlbb_xiumai3');
            }
        });
   }   
   if(player.hp%2==1){
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('tlbb_xiumai3')){
                player.line(current,'green');
                current.addTempSkill('tlbb_xiumai3');
                current.removeSkill('tlbb_xiumai2');
            }
        });
   }
    },
            },
            "tlbb_lingbo2":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        if(player.storage.tlbb_lingbo<=0) return false;
        return player.storage.tlbb_lingbo>=0;
     },
                content:function (){
      player.storage.tlbb_lingbo=false;
      player.update();
    },
            },
            "tlbb_qingguan_loseHp":{                
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        'Step 0'
		game.playJY(['tlbb_qingguan1','tlbb_qingguan2'].randomGet());
        player.recover();
        'Step 1'
        player.removeSkill('tlbb_qingguan_loseHp');
    },
            },
            "tlbb_qingguan_recover":{                
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function (){
        'Step 0'
		game.playJY(['tlbb_qingguan1','tlbb_qingguan2'].randomGet());
        player.loseHp();
        'Step 1'
        player.removeSkill('tlbb_qingguan_recover');
    },
            },
            "tlbb_xiumai3":{
                mark:true,
                intro:{
                    content:"不能使用或打出方块牌",
                },
                mod:{
                    cardEnabled:function (card){
           if(get.suit(card)=='diamond') return false;
        },
                    cardUsable:function (card){
           if(get.suit(card)=='diamond') return false;
        },
                    cardRespondable:function (card){
           if(get.suit(card)=='diamond') return false;                    
        },
                    cardSavable:function (card){
           if(get.suit(card)=='diamond') return false;
        },
                },
            },
            "tlbb_xiumai2":{
                mark:true,
                intro:{
                    content:"不能使用或打出黑色卡牌",
                },
                mod:{
                    cardEnabled:function (card){
           if(get.color(card)=='black') return false;
        },
                    cardUsable:function (card){
           if(get.color(card)=='black') return false;
        },
                    cardRespondable:function (card){
           if(get.color(card)=='black') return false;                    
        },
                    cardSavable:function (card){
           if(get.color(card)=='black') return false;
        },
                },
            },
"tlbb_beiming":{
	 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCardAfter",
                },
                usable:1,
                direct:true,
                filter:function (event,player){
        if(player.storage.tlbb_pojie.length<1) return false;
       if(!event.cards||event.cards.length!=1) return false;
        if(event.player==player) return false;
     if(get.type(event.card)!='trick') return false;
        var info=get.info(event.card);
       //if(info.allowMultiple==false) return false;
            if(game.hasPlayer(function(current){
                 return player.canUse(event.card,current);
             })){
                return true;
            }
        return false;
    },
                content:function (){
        "step 0"
          player.chooseCardButton(player.storage.tlbb_pojie,[1,1],'是否选择一张颜色相同【戒】视为使用'+get.translation(trigger.card)+'').set('filterButton',function(button){
            return get.color(button.link)==get.color(trigger.cards[0]);
        }).set('ai',function(button){
            return get.value(button.link);
        });
        "step 1"
        if(result.bool){           
            player.logSkill('tlbb_beiming');
            player.storage.tlbb_pojie.remove(result.links);
            for(var i=0;i<result.links.length;i++){
                result.links[i].discard();
            }
            player.chooseUseTarget(trigger.card);
            
            game.delay(0.7);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    threaten:2,
                },
            },
            "tlbb_pojie_respond":{
				 //audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
        if(event.responded) return false;
        if(player.hasSkill('tlbb_beiming')) return false;
        if(!player.storage.tlbb_pojie.length) return false;
        for(var i=0;i<player.storage.tlbb_pojie.length;i++){
            if(event.filterCard(player.storage.tlbb_pojie[i],player,event)) return true;
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseButton(['tlbb_pojie',player.storage.tlbb_pojie]).set('filterButton',function(button){
            var evt=_status.event.getTrigger();
            if(evt&&evt.filterCard){
                return evt.filterCard(button.link,_status.event.player,evt);
            }
            return true;
        }).set('ai',function(button){
            var evt=_status.event.getTrigger();
            if(evt&&evt.ai){
                var tmp=_status.event;
                _status.event=evt;
                var result=evt.ai(button.link,_status.event.player,evt);
                _status.event=tmp;
                return result;
            }
            return 1;
        });
        "step 1"
        if(result.bool){
			game.playJY(['tlbb_pojie1','tlbb_pojie2'].randomGet());
            result.links[0].discard();
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:result.links[0]};
            player.storage.tlbb_pojie.remove(result.links[0]);
            player.syncStorage('youjisgsd');
            if(player.storage.tlbb_pojie.length==0){
                player.unmarkSkill('tlbb_pojie');
            }
            else{
                player.markSkill('tlbb_pojie');
            }
            player.updateMarks();
        }
    },
                ai:{
                    order:4,
                    useful:-1,
                    value:-1,
                },
            },
            "tlbb_pojie_use":{
				 audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filter:function (event,player){
        if(player.hasSkill('tlbb_beiming')) return false;
        return player.storage.tlbb_pojie.length>0;
    },
                chooseButton:{
                    dialog:function (event,player){
            return ui.create.dialog('tlbb_pojie',player.storage.tlbb_pojie,'hidden');
        },
                    filter:function (button,player){
            var evt=_status.event.getParent();
            if(evt&&evt.filterCard){
                return evt.filterCard(button.link,player,evt);
            }
            return true;
        },
                    check:function (button){
            if(button.link.name=='du') return -2;
            var player=_status.event.player;
            if(button.link.name=='xingjiegoutong'&&player.countCards('h')>1) return -2;
            if(get.select(get.info(button.link).selectTarget)[1]==-1){
                if(get.type(button.link)=='delay') return -1;
                if(get.type(button.link)=='equip'){
                    var current=player.getCards('e',{subtype:get.subtype(button.link)})[0];
                    if(current&&get.equipValue(current)>=get.equipValue(button.link)) return -1;
                    return 1;
                }
                if(get.tag(button.link,'multitarget')) return -1;
                if(button.link.name=='huoshaolianying') return -1;
            }
            if(button.link.name=='jiu'){
                if(get.effect(player,{name:'jiu'},player)>0){
                    return 1;
                }
                return -1;
            }
            return 1;
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:links[0],
                onuse:function(result,player){  
				game.playJY(['tlbb_pojie1','tlbb_pojie2'].randomGet());
                    player.storage.tlbb_pojie.remove(result.card);
                    player.syncStorage('tlbb_pojie');      
                    player.updateMarks();
                }
            }
        },
                    prompt:function (links,player){
            return '选择'+get.translation(links)+'的目标';
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                if(_status.event.dying) return get.attitude(player,_status.event.dying);
                return 1;
            },
                    },
                    useful:-1,
                    value:-1,
                },
            },
            "tlbb_pojie":{
                init:function (player){
        player.storage.tlbb_pojie=[];
    },
                group:["tlbb_pojie_use","tlbb_pojie_respond"],
                 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
    if(event.name=='damage') return true;
    if(event.name=='useCard'){
        if(event.card.name=='jiu') return true;
        if(get.type(event.card)!='trick') return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&event.targets.length==1&&event.targets[0].sex=='female'){
            if(event.targets[0]!=player) return true;
        }
    }
    return false;
    },
                content:function (){
        "step 0"
        event.card=get.cards()[0];
        if(player.storage.tlbb_pojie==undefined) player.storage.tlbb_pojie=[];
        player.storage.tlbb_pojie.push(event.card);
        player.syncStorage('tlbb_pojie');
        player.showCards(player.storage.tlbb_pojie,'破戒');
        player.markSkill('tlbb_pojie');
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                delete player.storage.tlbb_pojie;
            }
        },
                },
            },
            "tlbb_huansu":{
                skillAnimation:true,
                 audio:"ext:金庸群侠传:2",
                derivation:["tlbb_beiming"],
                unique:true,
                trigger:{
                    player:"tlbb_pojieAfter",
                },
                forced:true,
                filter:function (event,player){
        return !player.hasSkill('tlbb_beiming')&&player.storage.tlbb_pojie&&player.storage.tlbb_pojie.length>=3;
    },
                content:function (){
        "step 0"
         player.$fullscreenpop('还俗','fire');
        player.loseMaxHp();
        "step 1"
        if(player.hp<player.maxHp){
			player.recover();
		}
		game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/金庸群侠传/tlbb_xinxuzhu.jpg');
		player.update();
        player.addSkill('tlbb_beiming');
        player.awakenSkill('tlbb_huansu');
    },
            },
"tlbb_qiangcan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                group:"tlbb_qiangcan2",
                filter:function (event,player){   
               // for(var i=0;i<game.players.length;i++){      
            //if(game.players[i].hasSkill('tlbb_chusi')) return false;
           // return true;
        //    }
          if(player.hasSkill('tlbb_chusi')) return false;
        return game.findPlayer(function(current){
        return !current.hasSkill('tlbb_chusi');
    });
    },
                unique:true,
                frequent:true,
                content:function (){      
        for(var i=0;i<game.players.length;i++){      
            if(!game.players[i].hasSkill('tlbb_chusi')){                           
            player.addSkill('tlbb_chusi');
            player.markSkill('tlbb_chusi2');
            player.update();        
            }
            else{
                                event.finish();
                            }          
            }                        
    },
                ai:{
                    threaten:0.8,
                },
            },
            "tlbb_qiangcan2":{
                trigger:{
                    global:"dieBegin",
                },
                filter:function (event,player){   
               return event.player.hasSkill('tlbb_chusi');
    },
                frequent:true,
                content:function (){            
               game.playJY(['tlbb_qiangcan1','tlbb_qiangcan2'].randomGet());                                       
            player.addSkill('tlbb_chusi');
            player.markSkill('tlbb_chusi2');
            player.update();                                                           
    },
                ai:{
                    threaten:0.8,
                },
            },
            "tlbb_chusi":{
                trigger:{
                    player:"damage",
                },
                priority:28,
                direct:true,
                filter:function (event,player){   
          if(player.hasSkill('tlbb_chusi')) return true;   
          return false;
    },
                group:"tlbb_chusi2",
                content:function (){
"step 0"
     trigger.source.chooseBool('是否弃置一张牌并废除目标【储嗣】的地位，取而代之？').set('ai',function(){                                
                    if(get.attitude(trigger.player,trigger.source)<=0) return true;    
                    return false;
                    });
        "step 1"
        if(result.bool){
            //  trigger.source.chooseToDiscard('he',true); 
                   game.playJY(['tlbb_qiangcan1','tlbb_qiangcan2'].randomGet());                                                 
              player.removeSkill('tlbb_chusi');
              player.unmarkSkill('tlbb_chusi2');
              trigger.source.addSkill('tlbb_chusi');
              trigger.source.markSkill('tlbb_chusi2');
        }
        else{
              event.finish();
        }
    },
                ai:{
                    threaten:3,
                },
            },
            "tlbb_chusi2":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                marktext:"嗣",
                intro:{
                    content:"mark",
                },
                forced:true,
                content:function (){
        trigger.num+=2;
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
            },
            "tlbb_liuwang":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                check:function (){
        return false;
    },
                filter:function (event,player){   
          if(player.hasSkill('tlbb_chusi')) return false;   
          return true;
    },
                content:function (){
        "step 0"
        player.chooseControl('失去体力','弃两张牌',function(event,player){
            if(player.hp==player.maxHp||player.countCards('h')<3) return '失去体力';
            if(player.hp<player.maxHp-2||player.hp<=1) return '弃两张牌';
            return '失去体力';
        });
        "step 1"
        if(result.control=='失去体力'){
            player.loseHp();
        }
        else{
            player.chooseToDiscard(2,'he',true); 
        }
    },
                ai:{
                    neg:true,
                },
            },
            "tlbb_rangquan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"dying",
                },
                marktext:"权",
                forced:true,
                priority:6,
                filter:function (event,player){
                return player.hp<=0;
    },
                init:function (player){  
            player.markSkill('tlbb_rangquan');
            player.storage.tlbb_rangquan=false;        
    },
                intro:{
                    content:"limited",
                },
                unique:true,
                content:function (){
        'step 0'
        player.$fullscreenpop('我才是皇子','fire');
         player.storage.tlbb_rangquan=true;
         for(var i=0;i<game.players.length;i++){          
            game.players[i].removeSkill('tlbb_chusi');
            game.players[i].removeSkill('tlbb_chusi2');
            game.players[i].unmarkSkill('tlbb_chusi2');                           
            }              
          'step 1'                
        player.removeSkill('tlbb_qiangcan');
        player.removeSkill('tlbb_liuwang');
        player.loseMaxHp();
        player.recover(2);
        player.draw(2);      
        player.addSkill('tlbb_chusi2');     
        player.markSkill('tlbb_chusi2');
        player.unmarkSkill('tlbb_rangquan');
        player.awakenSkill('tlbb_rangquan');
        player.update();                  
    },
            },
			"tlbb_yirong1":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["phaseBegin"],
                },
                filter:function (event,player){
        if(player.storage.tlbb_yirong.length<1) return false;
        return true;
    },
                check:function (event,player){
        return (get.attitude(player,event.player)>2);
    },
                content:function (){
        "step 0"
        if(player.storage.tlbb_yirong){
            var dialog=ui.create.dialog('选择一张武将牌令其易容','hidden');
            dialog.add([player.storage.tlbb_yirong,'character']);
            player.chooseButton(dialog,true).ai=function(button){
                return get.rank(button.link,true);
            };
        }        
        "step 1"
         if(result.links[0]){
             player.popup(result.links[0]);
             //var skills=trigger.player.getSkills();
            // trigger.player.storage.tlbb_yirong_技能=skills;
             var name1=trigger.player.name;
             trigger.player.setAvatar(name1,result.links[0]);//换皮    
             //trigger.player.reinit(name1,name2,false); //替换武将牌
            trigger.player.addTempSkill('tlbb_yirong2',{player:'phaseAfter'});
             game.delay();
             trigger.player.update(); 
             event.name=result.links[0];
         }
          "step 2" 
          var list=[];
          var skills=lib.character[event.name][3];
            for(var j=0;j<skills.length;j++){
                if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                    !lib.skill[skills[j]].unique){
                    list.push(skills[j]);
                }
            }
        trigger.player.addAdditionalSkill('tlbb_yirong2',skills);
        //trigger.player.addAdditionalSkill('tlbb_yirong2',list);
       // trigger.player.addTempSkill(skills,{player:'phaseEnd'});
        game.delay();
       
        player.storage.tlbb_yirong.remove(event.name);
        player.markSkill('tlbb_yirong');
        trigger.player.update();
         "step 3" 
         game.delay();
         trigger.player.addTempSkill('tlbb_yirong1_rong',{player:'phaseEnd'});
    },
                group:["tlbb_yirong1_damage","tlbb_yirong"],
                subSkill:{
                    rong:{
                        onremove:function (player){
                "step 0"
                var name1=player.name;
              //  var name2=player.storage.tlbb_yirong_武将名;
                //player.reinit(name1,name2,false); 
                player.setAvatar(name1,name1);
            },
                        sub:true,
                    },
                    damage:{
                        //audio:"ext:金庸群侠传:2",
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event){
                if(!event.source.hasSkill('tlbb_yirong1_rong')) return false;
                return event.card&&event.card.name=='sha'&&event.notLink();
            },
                        forced:true,
                        content:function (){
							game.playJY(['tlbb_yirong11','tlbb_yirong12'].randomGet());
                trigger.num++;
            },
                        sub:true,
                    },
                },
            },
            "tlbb_yirong":{
                audio:"ext:金庸群侠传:2",
                unique:true,
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                direct:true,
                init:function (player){
        player.storage.tlbb_yirong=[];
    },
                intro:{
                    content:"characters",
                },
                content:function (){
        'step 0'
		game.playJY(['tlbb_yirong11','tlbb_yirong12'].randomGet());
        player.logSkill('tlbb_yirong');//魔改版雄才
        event.numat=8;
        'step 1'
        var list=[];
        var list2=[];
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            list2.add(players[i].name);
            list2.add(players[i].name1);
            list2.add(players[i].name2);
        }
        for(var i in lib.character){
        //    if(lib.character[i][1]!='wei') continue;
            if(lib.character[i][4].contains('boss')) continue;
         //   if(lib.character[i][2]>6) continue;
            if(lib.character[i][3].length==0) continue;
            if(lib.character[i][4].contains('minskin')) continue;
            if(lib.filter.characterDisabled2(i)) continue;
            if(player.storage.tlbb_yirong.contains(i)) continue;
            if(list2.contains(i)) continue;
            var add=false;
            for(var j=0;j<lib.character[i][3].length;j++){
                var info=lib.skill[lib.character[i][3][j]];
                if(!info){
                    continue;
                }
                if(info.gainable||!info.unique){
                    add=true;break;
                }
            }
            if(add){
                list.push(i);       
            }
        }
        var name=list.randomGet();
        player.storage.tlbb_yirong.push(name);
        player.markSkill('tlbb_yirong');
     //   var skills=lib.character[name][3];
     //   for(var i=0;i<skills.length;i++){
      //      player.addSkill(skills[i]);
     //   }
        event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'',[[name],'character']);
        game.delay(2);
        'step 2'
        event.dialog.close();
        'step 3'
        event.numat--;
        if(event.numat>0){
            event.goto(1);
        }
        else{
            game.delay(2);
                
        }
    
    },
            },
            "tlbb_yirong2":{
                init:function (player,skill){
        var skills=player.getSkills(true,false);
        for(var i=0;i<skills.length;i++){
     
        }
        player.disableSkill(skill,skills);
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                mark:"易",
                intro:{
                    content:function (storage,player,skill){
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
        },
                },
            },
            "tlbb_xiaoti":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0&&event.player.isAlive()&&event.player.isDamaged();
    },
                check:function (event,player){
            return get.attitude(player,event.player)>0;
    },
                direct:true,
                content:function (){
    "step 0"
    var next=player.chooseToDiscard(1,'h','是否弃置一张牌令'+get.translation(trigger.player)+'回复一体力？',function(card,player){
        return true;
    });
    var att=get.attitude(_status.event.player,trigger.player);
    next.ai=function(card){
        if(att>2) {
            if(trigger.player.hp<trigger.player.maxHp){
                return 9-get.value(card);
            }
            return -1;
        }
        return -1;
    };
    "step 1"
    if(result.bool){
        player.logSkill('tlbb_xiaoti',trigger.player);
        trigger.player.recover();
    }
    },
            },
},

translate:{
	"tlbb_azhi":"阿紫",
            "tlbb_zhonggu":"纵蛊",
            "tlbb_zhonggu_info":"限定技;出牌阶段，你可以弃置一张手牌令一名角色受到一点伤害无来源的火焰伤害，然后你加一点体力上限并将体力恢复到体力上限。锁定技，【纵蛊】的角色受到的伤害均视为体力流失。",
            "tlbb_zisui":"恣睢",
            "tlbb_zisui_info":"每当一名其他角色流失体力后，你可以展示牌堆顶一张牌，若为红色你获得之，否则你将其置于武将牌上称为\"恃\"。",
            "tlbb_gushi":"怙恃",
            "tlbb_gushi_info":"每当你其他角色使用的牌的唯一目标时，你可以弃置一张\"恃\"，若如此做，此牌对你无效。",
	 "tlbb_baishijing":"白世镜",
            "tlbb_cansi":"缠丝",
            "tlbb_cansi_info":"你使用一张普通锦囊牌或一张基本牌后，你可以横置一名此牌目标的武将牌。",
            "tlbb_xijie":"失节",
            "tlbb_xijie_info":"每当你受到伤害后，你可以令所有横置的武将选择：令你摸一张牌；或弃置手牌区和装备区各一张牌，然后其重置武将牌。",
            "tlbb_gouxian":"构陷",
            "tlbb_gouxian_info":"一名角色进行判定前，你可以观看牌堆顶1张牌。若如此做，你将此牌交给一名其他角色，然后其将一张手牌置于牌堆顶。",
	"tlbb_xuzhuliqinglu":"虚竹李清露",
            "tlbb_sekongpt":"色空",
            "tlbb_sekongpt_info":"",
            "tlbb_sekongys":"色空",
            "tlbb_sekongys_info":"",
            "tlbb_sekong":"色空",
            "tlbb_sekong_info":"出牌阶段，你可以将一张普通锦囊牌当一张由你声明的延时锦囊牌使用；或将一张延时锦囊牌当一张由你声明的普通锦囊牌使用（每种牌名限一次）。",
            "tlbb_juechen":"绝尘",
            "tlbb_juechen_info":"出牌阶段，你使用普通锦囊牌和基本牌后，你可以将此牌置于牌堆顶。",
	  "tlbb_huangmeiseng":"黄眉僧",
            "tlbb_duanzhi1":"断趾",
            "tlbb_duanzhi1_info":"",
            "tlbb_duanzhi":"断趾",
            "tlbb_duanzhi_info":"游戏开始/回合开始前，你可以废除一个装备栏（你最多只能以此法废除两个装备栏）。你使用黑色基本牌或普通锦囊牌时，若你废除的装备栏数至少为1,你可以额外指定X名目标；你使用红色基本牌或普通锦囊牌时，若你废除的装备栏数至少为2,你可以额外指定X名目标（X为你废除的装备栏数量）。",
            "tlbb_xianji":"先机",
            "tlbb_xianji_info":"每轮游戏开始时，若你有废除的装备栏，你执行一个额外的出牌阶段，然后将手牌补至体力上限。",
	"tlbb_yeerniang":"叶二娘",
            "tlbb_daoying":"盗婴",
            "tlbb_daoying_info":"准备阶段开始时，你可以选择一项：1、若你没有手牌，你可以获得至多两名其他角色各一张手牌。2、若你没有装备牌，你可将场上至多两张装备牌移至你的装备区里（不能重复选择同一名角色）。3、若你没有判定牌，你可以获得场上至多两张延时锦囊牌。",
            "tlbb_gouhe":"苟合",
            "tlbb_gouhe_info":"你受到伤害后，你可以弃置两张牌，令一名男性角色回复1点体力。",
	"tlbb_madayuan":"马大元",
            "tlbb_suohou":"锁喉",
            "tlbb_suohou_info":"你使用杀造成伤害后，你可以令目标判定，若结果不为红桃，则其他角色于本局游戏计算与其距离始终为1（对每名角色限一次）。",
            "tlbb_zhenmi":"缄密",
            "tlbb_zhenmi_info":"一名角色判定结束后，你可以从牌堆底摸1张牌。",
	"tlbb_xuanciyeerniang":"玄慈叶二娘",
            "tlbb_youseng":"诱僧",
            "tlbb_youseng_info":"出牌阶段限一次，你可以令一名角色回复1点体力，然后弃置其两张牌（不足则全其，无牌则不弃）。",
            "tlbb_duhui":"度悔",
            "tlbb_duhui_info":"回合结束时，你可以弃置所有手牌（至少一张），然后令一名其他角色选择一项：其翻面；或弃对你造成1点伤害并令你执行一个摸牌阶段和出牌阶段。",
	"tlbb_xiaoyuanshan":"萧远山",
            "tlbb_huoyan":"祸延",
            "tlbb_huoyan_info":"出牌阶段限一次，你使用牌指定目标后，你可以翻面，然后为此牌额外指定至多3名无距离限制的目标。若如此做，回合结束时，你摸X张牌（X为你本回合造成的伤害数）。",
            "tlbb_zheju":"蜇居",
            "tlbb_zheju_info":"每回合限一次，其他角色使用牌后，若你的武将牌背面向上，你可以弃置一张与此牌类型相同的牌，然后摸1张牌。",
	"tlbb_tianshantonglao":"天山童姥",
            "tlbb_zhemei":"折梅",
            "tlbb_zhemei_info":"每当你受到1点伤害后，你可以获得场上一张牌。你获得场上一张梅花牌后，你可以回复1点体力或摸1张牌。",
            "tlbb_bingfu":"冰符",
            "tlbb_bingfu_info":"限定技。出牌阶段，你弃置两张牌，并令其他角色选择：弃置两张花色组成与你以此法弃置的牌相同的牌；或受到你2点雷电伤害。",
	 "tlbb_liqingluo":"李青萝",
            "tlbb_juanzhi":"卷帙",
            "tlbb_juanzhi_info":"摸牌阶段，你可以多摸2张牌，若如此做，其他女性角色可以依次对你使用一张杀。",
            "tlbb_tongyou":"同忧",
            "tlbb_tongyou_info":"当你成为杀的目标时，你可以弃置一张牌，然后选择一名不是此牌目标的男性角色，其也成为此牌的目标。",
            "tlbb_fanrui":"繁蕊",
            "tlbb_fanrui_info":"限定技。出牌阶段，你将3张点数相连的手牌当“蕊”展示，其他角色须依次将一张点数与“蕊”相连的手牌当“蕊”展示并回复1点体力，否则其失去1点体力。然后你将所有“蕊”收入手牌。",
	"tlbb_spxuzhu":"SP虚竹",
            "tlbb_luomei":"落梅",
            "tlbb_luomei_info":"每当你弃置或打出梅花手牌后，或你失去装备区和判定区里的梅花牌后，可摸2X张牌（X为此次失去的梅花牌数）。",
            "tlbb_jiujie":"酒戒",
            "tlbb_jiujie_info":"锁定技。每当你受到伤害后，你获得一枚“酒戒”标记（最多3枚）。出牌阶段开始时，你可以弃置一枚“酒戒”标记，视为你使用了一张“酒”。",
            "tlbb_jiujie2":"酒戒",
            "tlbb_jiujie2_info":"",
            "tlbb_luomei2":"落梅",
            "tlbb_luomei2_info":"",
	"tlbb_ganbaobao":"甘宝宝",
            "tlbb_chouchang":"愁肠",
            "tlbb_chouchang_info":"每当你使用杀、决斗、南蛮入侵、万剑齐发时，你可弃置所有手牌（至少一张），令此牌不能被响应或抵消。然后若此牌造成的伤害大于2点，你受到1点无来源的伤害。",
            "tlbb_aijie":"哀结",
            "tlbb_aijie_info":"每当你受到1点伤害后，你可以选择一名其他角色，令其手牌上限-1。",
            "tlbb_gulian":"顾怜",
            "tlbb_gulian_info":"锁定技。你受到大于1点的伤害时，若你没有手牌，则此次伤害改为1点。",
	"tlbb_qiaofeng":"乔峰",			
            "tlbb_xianglong":"降龙",
            "tlbb_xianglong_info":"当你使用杀时，你可以判定，若为黑色，则此杀造成的伤害+1；若为红色，你可以为此杀额外增加一名无距离限制的目标。",
            "tlbb_kanghui":"亢悔",
            "tlbb_kanghui_info":"当你造成伤害时，你可以防止此伤害，若如此做，你摸2张牌。",
            "tlbb_zongpangp":"改判",
            "tlbb_zongpangp_info":"",
            "tlbb_zongpangpin":"改拼",
            "tlbb_zongpangpin_info":"",
            "tlbb_zongpan":"众判",
            "tlbb_zongpan_info":"主公技。其他魏势力角色可以打出一张手牌替换你的判定牌或拼点牌，且你可以拒绝其替换之。",
	 "tlbb_zhongling":"钟灵",
            "tlbb_xundiao":"驯貂",
            "tlbb_xundiao_info":"其他角色使用杀对目标造成伤害后，你可以将一张普通杀当火杀对其使用，若此杀造成了伤害，则该目标回复1点体力。",
            "tlbb_qiyuan":"乞援",
            "tlbb_qiyuan_info":"每当你成为杀的目标时，其他角色（来源除外）可以交给你一张杀。",
            "tlbb_xinwu":"信物",
            "tlbb_xinwu_info":"你获得其他角色的牌后，你可以展示其中一张杀，若如此做，其摸1张牌。",
	 "tlbb_yuelaosan":"岳老三",
            "tlbb_qianjun2":"千钧",
            "tlbb_qianjun2_info":"当你的杀被闪避后(改闪需为实体牌并且数量为一)，你可以弃置与打出闪花色相同的牌，若如此做，此杀命中。",
            "tlbb_yuguan":"鱼贯",
            "tlbb_yuguan_info":"每当你的杀造成伤害后，若目标计算下家的距离为1并且其下家不为你，你可以令此杀继续对其下家结算",
            "tlbb_qianjun":"千钧",
            "tlbb_qianjun_info":"你可以将两张杀一张无花色的杀使用，以此法使用的杀需要两张闪才能抵消，且造成的伤害+1。",
	 "tlbb_suxinghe":"苏星河",
            "tlbb_xpojie":"破劫",
            "tlbb_xpojie_info":"一名角色的判定牌生效前，若你有手牌，你可以令你与至多两名其他角色各展示一张手牌，然后你选择：将其中一张牌作为判定牌；或弃置这些牌。",
            "tlbb_yaotiehc":"手牌邀帖",
            "tlbb_yaotiehc_info":"",
            "tlbb_yaotiehp":"体力邀帖",
            "tlbb_yaotiehp_info":"",
            "tlbb_yaotie":"邀帖",
            "tlbb_yaotie_info":"出牌阶段限一次，你可以令至少3名手牌数或体力值呈等差数列的角色摸一张牌。",
            "tlbb_yayin":"哑隐",
            "tlbb_yayin_info":"锁定技。防止你受到的无牌源或无来源的伤害。",
	"tlbb_kangmin":"康敏",
            "tlbb_shifu":"弑夫",
            "tlbb_shifu_info":"游戏开始时，你令一名男性角色获得“软骨散”标记。拥有该标记的角色死亡时，你令另一名男性角色获得之。锁定技，摸牌阶段，你多摸X张牌（X为拥有“软骨散”的角色已损失的内力值）。",
            "tlbb_shifumark":"软骨散",
            "tlbb_buyao":"布谣",
            "tlbb_buyao_info":"结束阶段开始时，你可以声明一种花色，令一名角色进行判定，若判定结果与你声明的花色不同，你对其造成一点伤害。",
            "tlbb_siqian":"思迁",
            "tlbb_siqian_info":"当你受到伤害后，你可以将“软骨散”标记移至另一名男性角色侠客牌旁。",
	"tlbb_wangyuyan":"王语嫣",
            "tlbb_dianhua":"点化",
            "tlbb_dianhua_info":"每回合限一次，其他角色使用普通锦囊牌指定唯一目标时，你可以申明另一种合理的锦囊牌牌名，其按声明的牌对目标使用之。",
            "tlbb_wendian":"问典",
            "tlbb_wendian_info":"其他角色出牌阶段限一次，其可以交给你一张牌，若如此做，你可以亮出牌堆顶2张牌，然后其获得其中的锦囊牌。",
            "tlbb_wendian1":"问典",
            "tlbb_wendian1_info":"",
	"tlbb_spduanyu":"SP段誉",
	 "tlbb_nayuan":"纳元",
            "tlbb_nayuan_info":"当你使用牌前，或当你成为其他角色使用牌的目标前，你可以获得一名其他角色一项你没有的除觉醒技、限定技、主公技以外的技能，直到此牌结算完毕。",
            "tlbb_zhuha":"朱蛤",
            "tlbb_zhuha_info":"锁定技。防止你受到的属性伤害。",
	"tlbb_duanyu":"段誉",
            "tlbb_lingbo":"凌波",
            "tlbb_lingbo_info":"锁定技。其他角色在其回合内使用牌后，所有其他角色计算与你的距离+1，直到此回合结束。",
            "tlbb_qingguan":"情关",
            "tlbb_qingguan_info":"出牌阶段开始时，你可以选择：回复1点体力，若如此做，回合内结束时你失去1点体力；或失去1点体力，若如此做，回合结束时你回复1点体力。",
            "tlbb_xiumai":"修脉",
            "tlbb_xiumai_info":"锁定技。你的回合内，若你的体力值为偶数/奇数，其他角色不能使用或打出黑色牌/方片牌。",
            "tlbb_lingbo2":"凌波",
            "tlbb_lingbo2_info":"",
            "tlbb_qingguan_loseHp":"情关",
            "tlbb_qingguan_loseHp_info":"",
            "tlbb_qingguan_recover":"情关",
            "tlbb_qingguan_recover_info":"",
            "tlbb_xiumai3":"修脉",
            "tlbb_xiumai3_info":"",
            "tlbb_xiumai2":"修脉",
            "tlbb_xiumai2_info":"",
	"tlbb_xuzhu":"虚竹",
	 "tlbb_beiming":"北冥",
            "tlbb_beiming_info":"每回合限一次，其他角色使用普通锦囊牌后，你可以弃置一张与此牌颜色相同的“戒”，然后视为你你使用了此牌。",
            "tlbb_pojie_respond":"破戒打出",
            "tlbb_pojie_respond_info":"",
            "tlbb_pojie_use":"破戒使用",
            "tlbb_pojie_use_info":"",
            "tlbb_pojie":"破戒",
            "tlbb_pojie_info":"你使用酒后、造成伤害后、或使用普通锦囊牌指定女性角色为唯一目标后，你可以将将牌堆顶1张牌置于武将牌上，称为“戒”，你可以使用或打出“戒”。",
            "tlbb_huansu":"还俗",
            "tlbb_huansu_info":"觉醒技。当你获得第3张“戒”后，你减1点体力上限并回复1点体力，且你不能再使用或打出“戒”，然后获得【北冥】。",
	 	"tlbb_duanyanqing":"段延庆",
			"tlbb_azhu":"阿朱",
	"tlbb_qiangcan":"戕残",
            "tlbb_qiangcan_info":" 锁定技。游戏开始时，标记你为“储嗣”角色。“储嗣”死亡后，你成为“储嗣”。“储嗣”受到伤害后，来源可以取代其成为“储嗣”。（“储嗣”角色摸牌阶段摸牌多摸两张牌且手牌上限+2）。",
            "tlbb_chusi":"储嗣",
            "tlbb_chusi_info":"当你受到伤害后，伤害来源可取代你的“储嗣”成为新的“储嗣”。",
            "tlbb_chusi2":"遗胄",
            "tlbb_chusi2_info":"锁定技。你为“储嗣”角色，摸牌阶段摸牌额外摸两张牌且手牌上限+2。",
            "tlbb_liuwang":"流亡",
            "tlbb_liuwang_info":"锁定技。结束阶段开始时，若你不是“储嗣”，你减1点体力或弃置2张牌",
            "tlbb_rangquan":"攘权",
            "tlbb_rangquan_info":"觉醒技。当你进入濒死状态时，你减1点体力上限，回复2点体力，并摸2张牌，失去“戕残”、“流亡”，然后若你不是“储嗣”，你成为“储嗣”。",
            "tlbb_qiangcan2":"戕残",
            "tlbb_qiangcan2_info":"undefined",
	 "tlbb_yirong1":"易容",
            "tlbb_yirong1_info":"所有人展示武将牌后，你展示8张未加入游戏的武将牌，称为“易容”牌，一名角色回合开始时，你可以选择一张“易容”牌，令其获得易容牌上的技能直到回合结束（其本身的技能会在此回合失效）。拥有”易容“牌的角色回合内对你使用杀造成的伤害+1。",
            "tlbb_yirong":"易容",
            "tlbb_yirong_info":"",
            "tlbb_yirong2":"易容",
            "tlbb_yirong2_info":"",
            "tlbb_xiaoti":"孝悌",
            "tlbb_xiaoti_info":"每回合限一次，一名角色受到伤害后，你可以弃置一张手牌，然后其回复1点体力。",
        },
			};
if(lib.device||lib.node){
				for(var i in tlbb.character){tlbb.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in tlbb.character){tlbb.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return tlbb;
		});
		lib.config.all.characters.push('tlbb');
		if(!lib.config.characters.contains('tlbb')) lib.config.characters.remove('tlbb');
		lib.translate['tlbb_character_config']='天龙八部';
game.import('character',function(){
			var sdxl={
				name:'sdxl',
				connect:true,
				character:{
	         "sdxl_yangguo":["male","wei",3,["sdxl_anhun","sdxl_biefu","sdxl_shangli"],['zhu']],          
            "sdxl_xiaolongniv":["female","wei",3,["sdxl_luowang","sdxl_hebi","sdxl_muzong"],['zhu']],
"sdxl_jinlunfawang":["male","qun",4,["sdxl_mizong","sdxl_longxiang"],[]],
"sdxl_mengge":["male","qun",4,["sdxl_fasong","sdxl_xiazhi"],[]],
"sdxl_gongsunzhi":["male","wei",4,["sdxl_qinggu","sdxl_wangzheng"],[]],
  
                },
							
			characterIntro:{	
			"sdxl_yangguo":"《神雕侠侣》男主角，杨康与穆念慈之子，因杨康一生犯错，郭靖将其起名为杨过，愿其有过改之。自小与师父小龙女在古墓长大，后来发展出一段惊骇俗的爱情。小龙女在绝情谷身中剧毒而投崖，杨过万念俱灰中悟出黯然销魂掌，之后更结识神雕，习得绝世武功。十六年后终与小龙女重逢，两人助郭家保卫襄阳。【CV：清酒摇舟】",
			"sdxl_xiaolongniv":"《神雕侠侣》女主角，终南山古墓派弟子，一生恪守师父遗言守在古墓，不食人间烟火。清新脱俗，清冷婉约。因孙婆婆临终遗言，被迫收下男徒杨过并与其发展出轰轰烈烈的师徒恋。虽不为世人所容，但历经磨难终成佳眷。在杨过小时候曾教他用天罗地势网练习捕捉麻雀；两人亦曾共同修炼绝学玉女素心剑法。【CV：草莓味少女】",
			"sdxl_jinlunfawang":"《神雕侠侣》第一反派。金轮法王属蒙古密教金刚宗，同时也是蒙古的国师。擅使五轮兵器，内功方面精研龙象般若功，最高练到第十层境界，威力无穷，几乎可与杨过的黯然销魂掌匹敌。后以蒙古国师身分协助由忽必烈统率的蒙古南侵大军攻打南宋，在中原大地上与杨过、小龙女等结下不解之仇，后败于黯然销魂掌。【CV：觅阳】",
			"sdxl_mengge":"孛儿只斤·蒙哥是大蒙古国的大汗，1251年1259年在位，史称蒙哥汗。为元太祖成吉思汗之孙、拖雷长子。《神雕侠侣》中的蒙哥，在率军攻打南宋的期间，为了迫使镇守襄阳城的郭靖投降，命令金轮法王捉拿了郭靖之女郭襄作为人质，将她绑在两军阵前的高台上，扬言要烧死她。后被杨过射死。【CV：蚩宇】",		
				},	
				characterTitle:{
					 "sdxl_yangguo":"Sukincen",            
            "sdxl_xiaolongniv":"Sukincen",	
				 "sdxl_jinlunfawang":"落影丶逝尘",
				 "sdxl_mengge":"落影丶逝尘",
				 "sdxl_gongsunzhi":"落影丶逝尘",
				},
			perfectPair:{
			"sdxl_yangguo":['sdxl_xiaolongniv'],
			
					},
				
skill:{
    "sdxl_qinggu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        if(event.player==player) return false;
        return player.countCards('h',{suit:'heart'})>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var next=player.chooseCard(1,'h','情蛊:是否展示一张红桃手牌<br>并交给<span style="color:#FF0000">【'+get.translation(trigger.player)+'】</span>?<br>若如此做<br><li>若其能使用此牌其立即使用之并且其本回合不能使用非红桃牌同时你摸一张牌<br><li>若其不能使用此牌其受到你一点🔥伤害。',function(card,player){
            return get.suit(card)=='heart';
        });
        var att1=get.attitude(player,trigger.player);
        next.ai=function(card){
            if(att1>0){
                return -1;
            }
            return 6-get.value(card);
        };
        "step 1"
        if(result.bool){
            player.logSkill('sdxl_qinggu',trigger.player);
            player.line(trigger.player,'green');
            player.showCards(result.cards[0],'情蛊');
            trigger.player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.player);
            event.card=result.cards[0];
            event.draw=false;
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.card){
            if(game.hasPlayer(function(current){
                return trigger.player.canUse(event.card,current);
            })){
                event.draw=true;
                trigger.player.chooseUseTarget(event.card);
            }
            else{
                trigger.player.damage(1,'fire',player);
            }
        }
        else{
            event.finish();
        }
        "step 3"
        if(event.draw==true){
            trigger.player.addTempSkill('sdxl_qinggu_noheart');
            player.draw();
        }
    },
                subSkill:{
                    noheart:{
                        mark:true,
                        marktext:"蛊",
                        intro:{
                            content:"不能使用非红桃牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)!='heart') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)!='heart') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)!='heart') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)!='heart') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "sdxl_wangzheng":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"linkAfter",
                },
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('sdxl_wangzheng_off')) return false;
        if(!event.player.isLinked()) return false;
        return game.hasPlayer(function(current){
            return !current.isLinked();
        });
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('sdxl_wangzheng'),lib.translate.sdxl_wangzheng_info,function(card,player,target){
            return !target.isLinked();
        }).set('ai',function(target){
            return get.effect(target,{name:'tiesuo'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('sdxl_wangzheng',result.targets);
            result.targets[0].link();
            player.addTempSkill('sdxl_wangzheng_off');
        }
    },
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
            },
"sdxl_fasong":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-game.countPlayer(function(current){
                    if(current.group=='qun') return 1;
                });
            return distance;
        },
                },
            },
            "sdxl_xiazhi":{
                audio:"ext:金庸群侠传:4",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(game.countPlayer()<3) return false;
        var num=0;
        for(var e=0;e<game.players.length;e++){
            if(game.players[e]!=player){   
                if(get.distance(game.players[e],player,'attack')<=1) num++;
            }
        }
        if(num>0) return true;
        return false;
    },
                filterTarget:function (card,player,target){
        if(get.distance(player,target)>1) return false;
        if(target==player) return false;
        return true;
    },
                content:function (){
        "step 0"
        event.target=targets[0];
        event.num1=0;
        event.num2=0;
        "step 1"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.goto(6);
        }
        "step 2"
        if(event.current==event.target){
            event.current=event.current.next;
            event.goto(1);
        }
        "step 3"
        if(get.distance(event.current,player,'attack')>1){
            event.current=event.current.next;
            event.goto(1);
        }
        "step 4"
        player.line(event.current,'green');
        var skr='是否弃置一张牌保护'+get.translation(event.target)+'？若弃牌角色数不大于未弃牌角色数则'+get.translation(event.target)+'受到一点伤害'
        var next=event.current.chooseToDiscard(1,'he',skr,function(card,player){
            return true;
        });
        var att1=get.attitude(event.current,event.target);
        next.ai=function(card){
            if(att1>0&&event.num1>=event.num2){
                 return 6-get.value(card);
            }
            return -1;
        };
        "step 5"
        if(result.bool){
            event.num1++;
            game.log('已弃牌'+event.num1+'人','没有弃牌'+event.num2+'人');     
            event.current=event.current.next;
            event.goto(1);
        }
        else{
            event.damage=true;
            event.num2++;
            game.log(event.current,'没有弃牌');
            game.log('已弃牌'+event.num1+'人','没有弃牌'+event.num2+'人');   
            event.current=event.current.next;
            event.goto(1);
        }
        "step 6"
        if(event.num2>=event.num1){
            if(event.damage){
                event.target.damage(player);
            }
            else{
                game.log('其他角色攻击范围没有你',event.target,'免受伤害'); 
            }
        }
        else{
            game.log('已弃牌角色数大于没有弃牌角色数',event.target,'免受伤害'); 
        }      
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hp==1) return -5;
                return -2;
            },
                    },
                    threaten:2,
                },
            },         
 "sdxl_mizong":{
                audio:"ext:金庸群侠传:2",
                mod:{
                    selectTarget:function (card,player,range){
            if(ui.selected.cards.length&&_status.event.skill=='sdxl_mizong'){
                if(card.name=='juedou'&&range[1]!=-1) range[1]+=ui.selected.cards.length-1;
            }
        },
                },
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){
        var num=0;
        for(var i=0;i<ui.selected.cards.length;i++){
            num+=get.number(ui.selected.cards[i]);
        }
        return get.number(card)+num<=13;
    },
                complexCard:true,
                selectCard:function (){
        var num=0;
        for(var i=0;i<ui.selected.cards.length;i++){
            num+=get.number(ui.selected.cards[i]);
        }
        if(num==13) return ui.selected.cards.length;
        return ui.selected.cards.length+2;
    },
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        return true;
    },
                viewAs:{
                    name:"juedou",
                },
                ai:{
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
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "sdxl_longxiang1":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return !event.directHit;
    },
                priority:-1,
                content:function (){
                game.playJY(['sdxl_longxiang1','sdxl_longxiang2'].randomGet());
        if(typeof trigger.shanRequired=='number'){
            trigger.shanRequired++;
        }
        else{
            trigger.shanRequired=2;
        }
    },
            },
            "sdxl_longxiang2":{
                audio:"ext:金庸群侠传:2",
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
        game.playJY(['sdxl_longxiang1','sdxl_longxiang2'].randomGet());
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
            },
            "sdxl_longxiang":{
                forced:true,
                locked:true,
				audio:"ext:金庸群侠传:2",
                group:["sdxl_longxiang1","sdxl_longxiang2"],
            },
            
             "sdxl_anhun":{
                audio:"ext:金庸群侠传:4",
                trigger:{
                    player:"damage",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                priority:8,
                prompt:"是否发动技能【黯魂】？",
                content:function (){
              'step 0'                             
                            event.cards=get.cards(5);
                            player.showCards(event.cards);
                            'step 1'
                            event.lose=0;
                            for(var i=0;i<event.cards.length;i++){
                                if(event.cards[i].name=='sha'){
                                    event.lose++;
                                }
                            }
                            if(event.lose>0){
                                var next=player.chooseCardButton('请选择视为【杀】使用的【杀】',event.cards,{name:'sha'});
                                next.filterButton=function(button){
                                    return button.link.name=='sha';
                                }
                            }
                            else{
                            //    player.gain(event.cards,'gain2');
                                event.finish();
                            }
                            'step 2'
                            if(result.bool){
                                event.cards1=result.links[0];
                                player.chooseTarget('请选择【黯魂】的目标',function(card,player,target){
                                    return lib.filter.targetEnabled({name:'sha'},player,target);
                                }).set('ai',function(target){
                            //return  get.effect(target,{name:event.cards1},_status.event.player);     
                            return get.effect(target,event.cards1,player,player);  
                                });
                            }
                            else{
                                event.finish();
                            }
                            'step 3'
                            if(result.bool){
								var chat=['黯然销魂掌','人不犯我，我不犯人。人若犯我，十倍奉还'].randomGet();
            player.say(chat);
                                player.useCard(event.cards1,result.targets,[event.cards1],false);                              
                                event.cards.remove(event.cards1);                            
                                event.goto(1);                                
                            }
                            else{                        
                                event.finish();
                            }                        
           },
                ai:{
                    expose:0.6,
                },
            },
            "sdxl_biefu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                priority:16,
                direct:true,
                content:function (){
                "step 0"               
                player.chooseBool('是否发动【别赋】？').set('ai',function(){                                
                    if(player.isDamaged()) return true;    
                    });
        "step 1"
        if(result.bool){
        player.turnOver();        
        player.chooseTarget('请选择【别赋】的目标',function(card,player,target){
                                    return target!=player;
                                }).set('ai',function(target){
                            return get.recoverEffect(target,player,player);
                                });
                            }
                            else{
                                event.finish();
                            }
        "step 2"
    if(result.bool){
   // player.logSkill('sdxl_biefu');
    game.playJY(['sdxl_biefu1','sdxl_biefu2'].randomGet());
       player.recover();
       result.targets[0].recover();
       result.targets[0].addTempSkill('sdxl_biefu2',{player:'phaseEnd'});    
       if(result.targets[0].sex=='female'){
       result.targets[0].draw();
       }
                           }
                            else{
                                event.finish();
                            }              
    },
                ai:{
                    expose:0.8,
                },
            },
            "sdxl_biefu2":{
                mod:{
                    selectTarget:function (card,player,range){
if(get.type(card)!='delay'&&get.color(card)=='black'&&range[1]==1) range[1]++;
},
                },
            },
            "sdxl_shangli":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"turnOverEnd",
                },
                priority:6,
                zhuSkill:true,
                unique:true,
                filter:function (event,player){   
     if(!player.hasZhuSkill('sdxl_shangli')) return false;
            return game.hasPlayer(function(current){
            return current.group=='wei';
        });
    },
                content:function (){
        'step 0'
        player.draw();
        var targets=game.filterPlayer();     
        event.targets=targets;        
        'step 1'
        if(event.targets.length){
            var current=event.targets.shift();
            if(current.group=='wei'&&current!=player){           
            event.current=current;
            player.line(event.current,'green');  
            event.current.draw();         
               //game.asyncDraw([player,event.current]);                    
            }
            else{
                event.redo();
            }
        }  
       'step 2'                             
        if(event.targets.length){
            event.goto(1);
        } 
    },
            },
           
            "sdxl_muzong":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseEnd",
                },
                priority:6,
                direct:true,
                zhuSkill:true,
                unique:true,
                filter:function (event,player){   
     if(player==event.player) return false;
     if(!player.hasZhuSkill('sdxl_muzong')) return false;
            return game.hasPlayer(function(current){
            return current.group=='wei';
        });
    },
                content:function (){
        'step 0'
         if(trigger.player.group=='wei'){
        trigger.player.chooseBool('是否横置或重置武将牌？').set('ai',function(){                                
                    if(get.attitude(trigger.player,player)>0&&!trigger.player.isLinked()) return true;    
                    if(get.attitude(trigger.player,player)<=0&&!trigger.player.isLinked()) return false;                    
                    return true;
                    }); 
                    }
        'step 1'
        if(result.bool){
        player.logSkill('sdxl_muzong',trigger.player);
           if(trigger.player.isLinked()){
            trigger.player.link(false);     
        //    trigger.player.turnOver(false);   
        }
        else{
        player.logSkill('sdxl_muzong',trigger.player);
            trigger.player.link();                 
        }
       }
            else{
                event.finish();
            }          
    },
            },
            "sdxl_hebi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"turnOverEnd",
                },
                usable:1,
                filter:function (event,player){
             return event.player.isTurnedOver();
    },
                content:function (){
    "step 0"
     player.chooseTarget('选择【合璧】的目标',lib.translate.sdxl_hebi_info,true,function(card,player,target){
             return target!=player&&!target.isTurnedOver();
     }).set('ai',function(target){     
             return -get.attitude(player,target);            
     });        
     "step 1"
     if(result.bool){
             player.line(result.targets[0]);
             result.targets[0].turnOver();
     }
    else {       
            event.finish(); 
    }                     
    },
                ai:{
                    basic:{
                        result:{
                            player:1,
                        },
                        expose:0.8,
                    },
                },
            },
			"sdxl_luowang":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                group:"sdxl_luowang2",
                content:function (){
        "step 0"      
        num=2;  
        player.chooseTarget(get.prompt('sdxl_luowang'),[1,2],function(card,player,target){
            return true;
        },function(target){
            var att=get.attitude(_status.event.player,target);                
            if(att<=0&&target.isLinked()) return 0;        
            if(att>0&&target.isLinked()) return 1;    
            if(att<=0&&!target.isLinked()) return 1;    
            if(att>0&&!target.isLinked()) return 0;    
            return 1-att;
        });
        "step 1"
        if(result.bool){
        event.targets=result.targets;
            player.logSkill("sdxl_luowang",result.targets);
            event.num=0;
           // player.useCard({name:'tiesuo'},result.targets,false);          
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
                    expose:0.3,
                },
            },
            "sdxl_luowang2":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"linkAfter",
                },
                frequent:true,
                filter:function (event,player){
        return event.player.isLinked();
    },
                content:function (){
					//game.playJY(['sdxl_luowang1','sdxl_luowang2'].randomGet());
                player.draw();
    },
            },
},
         
translate:{
	"sdxl_gongsunzhi":"公孙止",
            "sdxl_qinggu":"情蛊",
            "sdxl_qinggu_info":"一名其他角色的出牌阶段开始时，你可以展示并交给其一张红桃手牌<br><li>若其能使用此牌，其立即使用此牌并且其本回合不能使用非红桃牌同时你摸一张牌。<br><li>若其不能使用此牌，其受到你一点🔥伤害。",
            "sdxl_wangzheng":"网阵",
            "sdxl_wangzheng_info":"每回合限一次，当有角色横置武将牌时，你可以横置一名角色的武将牌。",
	"sdxl_mengge":"蒙哥",
            "sdxl_fasong":"伐宋",
            "sdxl_fasong_info":"锁定技。你的攻击范围+X（X为存活的群雄角色数）。",
            "sdxl_xiazhi":"挟制",
            "sdxl_xiazhi_info":"出牌阶段限一次，你可以选择一名距离1以内的其他角色，称为“人质”，并令攻击范围有你的所有其他角色（“人质”除外）选择是否弃置一张牌，然后若选择弃牌的角色数不大于未弃牌的角色数，你对“人质”造成一点伤害。",
	        "sdxl_jinlunfawang":"金轮法王",
	  "sdxl_mizong":"密宗",
            "sdxl_mizong_info":"你可以将任意张点数和为13的牌当“决斗”对至多X名角色使用（X为你以此法使用的牌数）。",
            "sdxl_longxiang1":"龙象",
            "sdxl_longxiang1_info":"",
            "sdxl_longxiang2":"龙象",
            "sdxl_longxiang2_info":"",
            "sdxl_longxiang":"龙象",
            "sdxl_longxiang_info":"锁定技。你使用的杀或决斗需要使用两张闪或杀来响应；其他角色使用决斗指定你为目标后，其每次响应此牌需连续使用两张杀。",
	"sdxl_yangguo":"杨过",
           "sdxl_luowang":"罗网",
            "sdxl_luowang2":"罗网",
            "sdxl_anhun":"黯魂",
            "sdxl_anhun_info":"每当你受到伤害时，你可以亮出牌堆顶5张牌，然后你可以无距离限制地使用其中任意张杀。",
            "sdxl_biefu":"别赋",
            "sdxl_biefu_info":"回合结束时，你可以翻面，然后令一名其他角色与你各回复一点体力（若为女性角色，则其再摸1张牌），且直到其下回合结束，其使用黑色普通锦囊牌或黑色基本牌时可额外指定一名目标。",
            "sdxl_shangli":"伤离",
            "sdxl_shangli_info":"主公技。当你的武将牌翻面时，你可以与其他魏势力角色各摸1张牌。",
            "sdxl_biefu2":"别赋",
            "sdxl_biefu2_info":"",
             "sdxl_xiaolongniv":"小龙女",
            "sdxl_luowang_info":"当你受到伤害后，你可以选择至多两名角色，横置其武将牌。每当一名角色横置武将牌后，你可以摸1张牌。",
            "sdxl_luowang2_info":"每当一名角色横置武将牌后，你可以摸1张牌。",
            "sdxl_hebi":"合璧",
            "sdxl_hebi_info":"每回合限一次，当一名角色将武将牌翻至背面向上时，你可令另一名未翻面的其他角色将武将牌翻面。",
            "sdxl_muzong":"墓宗",
            "sdxl_muzong_info":"主公技。其他魏势力角色的回合结束时，其可以横置或重置其武将牌。",   
                                                                                                                                
},
          };
if(lib.device||lib.node){
				for(var i in sdxl.character){sdxl.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in sdxl.character){sdxl.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return sdxl;
		});
		lib.config.all.characters.push('sdxl');
		if(!lib.config.characters.contains('sdxl')) lib.config.characters.remove('sdxl');
		lib.translate['sdxl_character_config']='神雕侠侣';
		game.import('character',function(){
			var xajh={
				name:'xajh',
				connect:true,
				character:{
		 		 "xajh_dongfangbubai":["[male,female].randomGet()","wei",3,["xajh_weizhong","xajh_daoxi"],[]],
 "xajh_ludayou":["male","shu",3,["xajh_digong","xajh_nianjue"],[]],
 "xajh_renwoxing":["male","shu",4,["xajh_biguan","xajh_xixing","xajh_chushan","xajh_quanbing"],['zhu']],
 "xajh_yanglianting":["male","wei",3,["xajh_yuhe","xajh_shichong"],[]],
  "xajh_yuelingsan":["female","shu",3,["xajh_jianwu","xajh_huizhi","xajh_fanghun"],[]],
  "xajh_yuebuqun":["male","shu",3,["xajh_xiejian","xajh_qiaowei","xajh_yuli"],['zhu']],
  "xajh_linghuchong":["male","shu",4,["xajh_jianhao","xajh_zuixia","xajh_wangyou"],['zhu']],
  "xajh_moda":["male","wei",4,["xajh_chongsu","xajh_qinjian"],[]],
   "xajh_zuolengchan":["male","wei",4,["xajh_linhan","xajh_weijian","xajh_bingpai"],['zhu']],
   "xajh_laodenuo":["male","shu",3,["xajh_qianxing","xajh_anxi"],[]],
   "xajh_linpingzhi":["male","wei",4,["xajh_renru","xajh_qushi"],[]],
   "xajh_zhuqianqiu":["male","wei",3,["xajh_lunjiu","xajh_yaojiu"],[]],
   "xajh_tianboguang":["male","wei",4,["xajh_xunfang","xajh_aotu"],[]],
   "xajh_renyingying":["female","shu",3,["xajh_qugang","xajh_heming"],[]],
   
},        

characterIntro:{
	
	            "xajh_yuelingsan":"岳灵珊是华山派常门人岳不群和女侠宁中则的掌上明珠，和大师兄令狐冲是青梅竹马，自小一起合创冲灵剑法。令狐冲一生痴恋岳灵珊，她却对林平之情有独钟，成亲后即使因林平之自宫而从未有过夫妻之实，却甘心无悔守护在他身边，纵使被狠辣绝情的丈夫刺杀，临终前口里念的还是他。【CV：槐生】",
				"xajh_yuebuqun":"华山派气宗势力的掌门，号称君子剑，实乃伪君子。前期伪装隐忍，后期野心渐露。假意收养林平之，实则为了图获《辟邪剑谱》。在与左冷蝉的暗中较量中，采取按兵不动，趁势而起的手段，坐收渔人之利，实乃高明。为了一统江湖，不惜自宫练剑，导致众叛离亲，后被仪琳误杀。【CV：觅阳】",
                "xajh_dongfangbubai":"东方不败是日月神教的光明左使，本来一副忠厚老实的样子，教主任我行对他极其信任，甚至将武学秘籍《葵花宝典》交由他保管。任我行负伤闭关修炼期间，表面上效忠教主的东方不败发动了叛乱，将任我行囚禁在西湖底，自己成功成为日月神教新教主。后来为了修习神功，不惜挥刀自宫。【CV：青灯折扇不语】",
                "xajh_yanglianting":"杨莲亭原是日月神教里一名职务低微的教众，东方不败发动叛乱、夺得教主之位后，因杨莲亭身材魁梧、雄健威武，自宫后的东方不败阴阳倒乱，开始对他宠幸起来，提拔他做了总管，甚至将一切教务将由他打理，俨然成了东方不败的男宠。后来任我行等夹攻东方不败，东方不败为救杨莲亭，分心被任我行等击亡。【CV：林三】",
				"xajh_ludayou":"陆大有自幼拜入华山派门下，因排行第六，又喜爱猴子，是故人称“六猴儿”，为人活泼诙谐，略带风趣。打小与大师兄令狐冲交好，处处为其着想，视其为榜样。令狐冲受伤后，偷偷将小师妹岳灵珊偷来的《紫霞秘笈》念给令狐冲听，希望他以此疗伤，却被其点穴后离开，被前来盗取秘笈的二师兄劳德诺杀害。【CV：神齐大叔】",
				"xajh_renwoxing":"日月神教教主，有一统江湖的野心，早年在嵩山大会上被左冷禅寒冰真气所伤，于是闭关修炼并将教中事务交给东方不败打理，不料东方不败心存异心夺走教主之位。任我行善使用邪功吸星大法，能迅速吸收敌人内力。后来在向问天、令狐冲的合力协助之下，击败东方不败，夺回教主之位。【CV：冷淘】",
				"xajh_linghuchong":"自小由华山派掌门岳不群抚养长大，为华山派大弟子，后受定闲师太所托，成为恒山派掌门。生性放荡不羁，爽朗豁达，虽不拘小节，却有侠肝义胆。令狐冲嗜酒如命，一壶小酒，一个朋友。于思过崖面壁期间得到剑宗风清扬传授独孤九剑，曾在左冷禅围剿之际，以此招数解救华山派于危难。【CV：稳得高处】",
				"xajh_moda":"莫大先生是衡山派掌门，人称“潇湘夜雨”。莫大身材瘦长脸色枯槁，披著一件青布长衫，洗得青中泛白，形状落魄。他以一曲《潇湘夜雨》名动江湖，如泣如诉，听得人眼泪也会掉下来。琴中藏剑、剑发琴音这八字，是他一生武功的写照。虽然在血雨腥风的江湖中明哲保身，但其亦具有侠者风范，多次相救令狐冲。【CV：林三】",
                "xajh_tianboguang":"田伯光轻功卓越，刀法出众，江湖人称万里独行。但其人又好色成性，故又被武林正派中人称为采花大盗。曾掳劫仪琳，令狐冲为救恒山小师妹而与其斗智斗勇，所谓不打不相识，最后竟结拜成为兄弟。愿赌服输的他也自甘拜小尼仪琳为师，落发为僧，从此与正派人士共同对抗魔教。【CV：】",
				"xajh_renyingying":"日月神教教主任我行独生女，东方不败夺权后被人尊为“圣姑”。容貌绝色，秀丽绝伦。行事果决，颇有心计。任盈盈极擅音律，可以一人琴箫分奏《笑傲江湖曲》。其御下时恩威并施，临敌果断狠辣，颇显圣姑手段。曾教令狐冲练习《清心普善咒》为其疗伤，与其成为知音并相爱归隐。【CV：水烟箩卜】",	
				"xajh_zhuqianqiu":"祖千秋与老头子并称为“黄河老祖”。祖千秋博才多学，对饮酒用杯颇有研究。令狐冲被桃谷六仙重伤期间遇到祖千秋，两人因酒结缘，大论饮酒之道。后祖千秋将老头子耗时多年采用名贵药材炼制来救女儿的续命八丸泡在酒中送给令狐冲饮下，治好令狐冲连平一指也无可奈何的顽疾。【CV：临自灵】",
				"xajh_linpingzhi":"林平之生于富庶商人家庭，自幼被万千宠爱，不识人间险恶，本性善良又至美至孝。因祖传《辟邪剑谱》遭武林中人觊觎而惨被灭门，血海深仇加身，被迫踏入江湖，在颠沛流离中被所谓恩师连番利用，激发人性极端，变得狠辣绝决，为报仇雪恨自宫练习神功，并为靠拢左冷禅而杀妻殉志。【CV：稳得高处】",
				"xajh_laodenuo":"劳德诺带艺投师拜入华山派门下，为人老实木讷，少言寡语而又外貌平平，却实为左冷禅安排在岳不群身边监视他、掌握他一举一动的的卧底。他杀死被点穴的陆大有，盗走《紫霞秘笈》并处心积虑嫁祸给令狐冲。后因陆大有平生爱猴，任盈盈便将两只大马猴拴在他的左右手上，使其生不如死。【CV：】",
				
				},   
				
				characterTitle:{
					"xajh_renyingying":"落影丶逝尘",	
					"xajh_zhuqianqiu":"落影丶逝尘",
					"xajh_tianboguang":"落影丶逝尘",
					"xajh_linpingzhi":"落影丶逝尘",
					"xajh_yuelingsan":"落影丶逝尘",	
					"xajh_laodenuo":"落影丶逝尘",
					"xajh_zuolengchan":"落影丶逝尘",	
					"xajh_moda":"落影丶逝尘",
					"xajh_linghuchong":"落影丶逝尘",
					"xajh_yuebuqun":"落影丶逝尘",	
					"xajh_dongfangbubai":"落影丶逝尘",	
					"xajh_ludayou":"朱阳光",
					"xajh_renwoxing":"朱阳光",
					"xajh_yanglianting":"朱阳光",
				},
				
				perfectPair:{
			//"jyqxz_xajh_genie":['jyqxz_xajh_weizhuang'],
					},
                               
skill:{
	"xajh_qugang":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return target.countCards('h')>0&&target!=player;
    },
                filterCard:function (card,player,target){
        return true;
    },
                selectCard:1,
                selectTarget:[1,1],
                discard:false,
                lose:false,
                content:function (){
        "step 0"
        event.plcard=cards.slice(0);
        event.tar=targets;
        event.tar[0].chooseCard('h',1,'曲高：选择一张手牌展示',true).set('ai',function(card){
            return 1;
        });
        "step 1"
        if(result.bool){
            event.tar[0].showCards(result.cards[0]);
            player.showCards(event.plcard[0]);
            if(get.suit(event.plcard[0])==get.suit(result.cards[0])){
                event.tar[0].draw(2);
            }
            else if(get.suit(event.plcard[0])!=get.suit(result.cards[0])){
                event.butong=true;
            }
        }
        "step 2"
        if(event.butong==true){
            event.tar[0].chooseToDiscard(2,'he','弃置两张牌，或令'+get.translation(player)+'摸两张牌').set('ai',function(card){
            return -1;
            });
        }
        "step 3"
        if(event.butong==true&&result.bool==false) player.draw(2);
    },
                ai:{
                    order:9,
                    result:{
                        target:0.5,
                    },
                },
            },
            "xajh_heming":{
				audio:"ext:金庸群侠传:2",
                "content_use":function (player){
        'step 0'
        var list=[];
        if(game.hasPlayer(function(current){
            return player.canUse('sha',current);
        })){
            list.push(['基本','','sha']);
            list.push(['基本','','sha','fire']);
            list.push(['基本','','sha','thunder']);
        }
        if(player.canUse('tao',player,true,true)){
            list.push(['基本','','tao']);
        }
        if(player.canUse('jiu',player,true,true)){
            list.push(['基本','','jiu']);
        }          
        if(list.length){
            player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
                var player=_status.event.player;
                var card={name:button.link[2],nature:button.link[3]};
                if(card.name=='tao'){
                    if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
                        return 5;
                    }
                    return 1;
                }
                if(card.name=='sha'){
                    if(game.hasPlayer(function(current){
                        return player.canUse(card,current)&&get.effect(current,card,player,player)>0
                    })){
                        if(card.nature=='fire') return 2.95;
                        if(card.nature=='thunder') return 2.92;
                        return 2.9;
                    }
                    return 0;
                }
                if(card.name=='jiu'){
                    return 0.5;
                }
                return 0;
            });
        }
        else{
            event.finish();
        }
        'step 1'
        if(result&&result.bool&&result.links[0]){
            var card={name:result.links[0][2],nature:result.links[0][3]};
            if(card.name=='sha'){
                event.fakecard=card;
                player.chooseTarget(function(card,player,target){
                    return player.canUse(_status.event.fakecard,target,true,true);
                },true,'选择出杀目标').set('ai',function(target){
                    var player=_status.event.player;
                    return get.effect(target,_status.event.fakecard,player,player);
                }).set('fakecard',card);
            }
            else{
                player.useCard(card,player);
                event.finish();
            }
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool&&result.targets&&result.targets.length){
            player.useCard(event.fakecard,result.targets);
        }      
    },
                trigger:{
                    global:"phaseDrawEnd",
                },
                filter:function (event,player){
        if(event.player==player) return false;
        return event.player.countCards('h')>=2;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){
        'step 0'
        event.suitss=[];
        event.num=0;
        'step 1'
        var controls=['heart','diamond','club','spade'];
        var str='请声明一种花色';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        'step 2'
        if(result.control){
            player.popup(result.control);
            player.line(trigger.player,'green');
            game.log(player,'声明了',result.control);
            if(!event.suitss.contains(result.control)){
                event.suitss.push(result.control);
            }
            event.num++;
            if(event.num<2) event.goto(1);
        }
        'step 3'
        //player.line(trigger.player,'green');
        var next=trigger.player.chooseCard(2,'h','是否展示两张手牌组成花色相同的牌?然后视为使用一张基本牌。',function(card,player){
            var suit=get.suit(card);
            if(event.suitss.length==1){
                if(!event.suitss.contains(suit)) return false;
            }
            if(event.suitss.length>1){
                if(!event.suitss.contains(suit)) return false;
                if(ui.selected.cards){
                    for(var i=0;i<ui.selected.cards.length;i++){
                        if(get.suit(ui.selected.cards[i])==suit) return false;
                    }
                }
            }
            return true;
        });
        next.ai=function(card){
            return 1
        };
        'step 4'
        if(result.bool){
            trigger.player.showCards(result.cards);
            event.insert(lib.skill.xajh_heming.content_use,{
            player:trigger.player,
            });         
        }      
    },
            },
			"xajh_xunfang":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                discard:false,
                prepare:"give2",
                filter:function (event,player){
        if(!player.countCards('he',{suit:'heart'})) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.sex=='female';
        });
    },
                filterCard:function (card){
        return get.suit(card)=='heart';
    },
                filterTarget:function (card,player,target){
        if(target.sex!='female') return false;
        if(target.countCards('h')==0) return false;
        return player!=target;
    },
                check:function (card){
        return 5-get.value(card);
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
        // game.delay();
        "step 1"
        player.gainPlayerCard(target,'h',true);
        "step 2"
        event.card=result.links[0];
        player.showCards(event.card,'寻芳')
        if(get.suit(event.card)!='heart') player.draw();
  
        
        
    },
                ai:{
                    result:{
                        target:0.5,
                    },
                    basic:{
                        order:9,
                    },
                },
            },
            "xajh_aotu":{
				audio:"ext:金庸群侠传:2",
                subSkill:{
                    draw:{
                        mark:true,
                        marktext:"傲",
                        intro:{
                            content:"",
                        },
                        forced:true,
                        onremove:function (player){
                delete player.storage.xajh_aotu;
            },
                        trigger:{
                            global:["gainEnd","loseEnd"],
                        },
                        filter:function (event,player){
                if(event.player==player) return false;
                if(event.player!=player.storage.xajh_aotu) return false;
                var num1=event.player.countCards('h');
                var num2=player.countCards('h');
                if(num1==num2&&event.name=='gain') return true;
                if(num1==num2&&event.name=='lose'){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                }
                return false;
            },
                        content:function (){
                player.draw();
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xajh_aotu'),function(card,player,target){
            return target!=player&&player.hp>=target.hp;
        }).set('ai',function(target){
            return 1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('xajh_aotu',result.targets);
            player.storage.xajh_aotu=result.targets[0];
            player.addTempSkill('xajh_aotu_draw',{player:'phaseBefore'});
        }
    },
            },
		 "xajh_lunjiu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["dying","phaseUseBegin"],
                },
                priority:1,
                filter:function (event,player){
        if(!event.player.canUse({name:'jiu'},event.player)) return false;
        if(event.name=='dying'){
            if(!event.player.isDying()) return false;
        }
        return game.hasPlayer(function(current){
            return current.getEquip(1)!=undefined||current.getEquip(2)!=undefined;
        });
    },
                direct:true,
                content:function (){
          'step 0'
        player.chooseTarget(get.prompt('xajh_lunjiu'),function(card,player,target){
            var es=target.getDiscardableCards(player,'e');
            for(var i=0;i<es.length;i++){
                if(get.subtype(es[i])=='equip1'||get.subtype(es[i])=='equip2') return true;
            }
            return false;
        }).set('ai',function(target){
            var att1=get.attitude(player,target);
            var att2=get.attitude(player,trigger.player);
            if(trigger.name=='dying'&&att2>0){
                if(att1<=0) return 1;
                if(att1>0) return 0.5
            }
            else if(att1<0&&att2>0) return 0.2;
            return -1;
        });
        'step 1'
        if(result.bool){   
            event.target=result.targets[0];
            var skr='选择一张武器牌或防具牌弃置之';
            player.discardPlayerCard(event.target,1,'e',true).set('filterButton',function(button){
                if(get.subtype(button.link)!='equip1'&&get.subtype(button.link)!='equip2') return false;
                return true;
            }).set('ai',function(button){
                return 1;
            }); 
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.logSkill('xajh_lunjiu',event.target);
            trigger.player.useCard({name:'jiu'},trigger.player);
        }
    },
            },
            "xajh_yaojiu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCardAfter",
                },
                filter:function (event,player){
        if(event.card.name!='jiu') return false;
        if(event.player.hp>=event.player.maxHp){
            return player.countCards('h',{color:'black'})>0;
        }
        else return player.countCards('h')>0;
        return false;
    },
                direct:true,
                content:function (){
    "step 0"
    var next=player.chooseToDiscard(get.prompt('xajh_yaojiu'),1,'h','是否弃置一张牌?<br><li><span style="color:#FF0000">若为红色'+get.translation(trigger.player)+'回复一体力。</span><br><li><span style="color:#FF00FF">若为黑色'+get.translation(trigger.player)+'流失一体力。</span>',function(card,player){
        if(trigger.player.hp>=trigger.player.maxHp&&get.color(card)=='red') return false;
        return true;
    });
    var att=get.attitude(_status.event.player,trigger.player);
    next.ai=function(card){
        if(att>0) {
            if(get.color(card)=='red'){
                return 6-get.value(card);
            }
            return -1;
        }
        if(att<0) {
            if(get.color(card)=='black'){
                if(trigger.player.hp==1) return 9-get.value(card);
                return 7-get.value(card);
            }
            return -1;
        }
        return -1;
    };
    "step 1"
    if(result.bool){
        player.logSkill('xajh_yaojiu',trigger.player);
        if(get.color(result.cards[0])=='red'){
            trigger.player.recover();  
        }
        else if(get.color(result.cards[0])=='black'){
            trigger.player.loseHp();  
        }
    }
    },
            },	
	 "xajh_renru":{				
                init:function (player){
        player.storage.xajh_renru=[];
    },
                group:["xajh_renru_dist"],
                subSkill:{
                    dist:{
                        mod:{
                            globalTo:function (from,to,current){
                    if(!to.hasSkill('xajh_xuechi')&&to.storage.xajh_renru&&to.storage.xajh_renru.length>0) return current+1;
                },
                        },
                        sub:true,
                    },
                },
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["damageEnd","loseEnd"],
                },
                frequent:true,
                filter:function (event,player){
        if(event.name=='damage'&&event.num>0) return true;
        if(event.name=='lose'){
            if(_status.currentPhase!=player){
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='e') return true;
                }
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var num=0;
        if(trigger.name=='damage'&&trigger.num>0) num+=trigger.num;
        if(trigger.name=='lose'){
            if(_status.currentPhase!=player){
                for(var i=0;i<trigger.cards.length;i++){
                    if(trigger.cards[i].original=='e') num++;
                }
            }
        }
        event.card=get.cards(num);
        if(player.storage.xajh_renru==undefined) player.storage.xajh_renru=[];
        player.storage.xajh_renru=player.storage.xajh_renru.concat(event.card);
        player.syncStorage('xajh_renru');
        game.log(player,'将',event.card,'置于武将牌上作为“辱”');
       // player.showCards(player.storage.xajh_renru,'忍辱');
        player.markSkill('xajh_renru');
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                delete player.storage.xajh_renru;
            }
        },
                },
            },
            "xajh_qushi":{
                //skillAnimation:true,
                audio:"ext:金庸群侠传:2",
                derivation:["xajh_xuechi"],
                unique:true,
                trigger:{
                    player:"xajh_renruAfter",
                },
                forced:true,
                filter:function (event,player){
        return !player.hasSkill('xajh_xuechi')&&player.storage.xajh_renru&&player.storage.xajh_renru.length>=5;
    },
                content:function (){
        "step 0"
        player.$fullscreenpop('去势','fire');
		game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/金庸群侠传/xajh_newlinpingzhi.jpg');
        player.loseMaxHp();
        "step 1"
        if(player.storage.lose_pos_equip==undefined){
            player.lose_pos_equip('equip2');
            player.lose_pos_equip('equip3');
            player.lose_pos_equip('equip4');
        }
        else if(player.storage.lose_pos_equip){
            if(!player.storage.lose_pos_equip.contains('equip2')) player.lose_pos_equip('equip2');
            if(!player.storage.lose_pos_equip.contains('equip3')) player.lose_pos_equip('equip3');
            if(!player.storage.lose_pos_equip.contains('equip4')) player.lose_pos_equip('equip4');
        }
        lib.translate.xajh_renru_info='每当你受到一点伤害或于回合外失去装备区里的牌后，你可以将牌堆顶的一张牌置于武将牌上,称为"辱"。';
        player.update();
        player.addSkill('xajh_xuechi');
        player.awakenSkill('xajh_qushi');
    },
            },
            "xajh_xuechiqichai":{
                audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.subtype(card)=='equip3'||get.subtype(card)=='equip4';
    },
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{subtype:['equip3','equip4']})) return false;
    },
                prompt:"<span style=\"color:#FF0000\">将一张坐骑牌当过河拆桥使用</span>",
                check:function (card){return 9-get.value(card)},
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 3;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            "xajh_xuechiruchai":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filter:function (event,player){
        if(!player.hasSkill('xajh_renru')) return false;
        if(player.storage.xajh_renru==undefined) return false;
        if(player.storage.xajh_renru.length==0) return false;
        for(var i=0;i<player.storage.xajh_renru.length;i++){
            if(get.color(player.storage.xajh_renru[i])=='red'){
                return true;
            }
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            return ui.create.dialog('xajh_xuechi',player.storage.xajh_renru,'hidden');
        },
                    filter:function (button,player){
            return get.color(button.link)=='red';
        },
                    check:function (button){
            return 1;
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{name:'guohe'},
                cards:links,
                onuse:function(result,player){
                    result.cards=lib.skill[result.skill].cards;
                    var card=result.cards[0];
                    player.storage.xajh_renru.remove(card);
                    player.syncStorage('xajh_renru');
                    if(!player.storage.xajh_renru.length){
                        player.unmarkSkill('xajh_renru');
                    }
                    else{
                        player.markSkill('xajh_renru');
                    }
                    player.logSkill('xajh_xuechi',result.targets);
                }
            }
        },
                    prompt:function (links,player){
            return '<span style="color:#FF0000">选择雪耻的目标</span>';
        },
                },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 3;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            "xajh_xuechirujiu":{
                enable:"chooseToUse",
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){ 
        var num=0;
        if(!player.hasSkill('xajh_renru')) return false;
        if(player.storage.xajh_renru==undefined) return false;
        if(player.storage.xajh_renru.length==0) return false;
        for(var i=0;i<player.storage.xajh_renru.length;i++){
            if(get.color(player.storage.xajh_renru[i])=='black'){
                num++
            }
        }
        if(num==0) return false;
        if(event.parent.name=='phaseUse'){                        
            return lib.filter.filterCard({name:'jiu'},player,event);                    
        }                    
        if(event.type!='dying') return false;                    
        if(player!=event.dying) return false;                    
        return true;                
    },
                chooseButton:{
                    dialog:function (event,player){
            return ui.create.dialog('血耻',player.storage.xajh_renru,'hidden');
        },
                    filter:function (button,player){
            return get.color(button.link)=='black';
        },
                    check:function (button){
            return 1;
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{name:'jiu'},
                cards:links,
                onuse:function(result,player){
                    result.cards=lib.skill[result.skill].cards;
                    var card=result.cards[0];
                    player.storage.xajh_renru.remove(card);
                    player.syncStorage('xajh_renru');
                    if(!player.storage.xajh_renru.length){
                        player.unmarkSkill('xajh_renru');
                    }
                    else{
                        player.markSkill('xajh_renru');
                    }
                    player.logSkill('xajh_xuechi',result.targets);
                }
            }
        },
                    prompt:function (links,player){
            return '<span style="color:#FF00FF">选择雪耻的目标</span>';
        },
                },
                ai:{
                    save:true,
                    skillTagFilter:function (player){
            var use=false;
            if(!player.hasSkill('xajh_xuechi')) return false;
            if(player.storage.xajh_renru==undefined) return false;
            if(player.storage.xajh_renru.length==0) return false;
            for(var i=0;i<player.storage.xajh_renru.length;i++){
                if(get.color(player.storage.xajh_renru[i])=='black'){
                    if(use==false) use=true;
                }
            }
            if(use==false) return false;
            return true;    
        },
                    basic:{
                        useful:function (card,i){
                if(_status.event.player.hp>1){
                    if(i==0) return 4;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                        value:function (card,player,i){
                if(player.hp>1){
                    if(i==0) return 5;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                    },
                    order:function (){
            return get.order({name:'sha'})+0.2;
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
                        return (get.attitude(target,current)<0&&
                            target.canUse(card,current,true,true)&&
                            !current.getEquip('baiyin')&&
                            get.effect(current,card,target)>0);
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
            "xajh_xuechifangjiu":{
                audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.subtype(card)=='equip2';
    },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{subtype:'equip2'})) return false;
    },
                prompt:"<span style=\"color:#FF00FF\">将一张防具牌当酒使用</span>",
                check:function (card){
        if(_status.event.type=='dying') return 1;
        return 4-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('h',{subtype:'equip2'})>0&&player.hp<=0;
        },
                    threaten:1.5,
                    save:true,
                    basic:{
                        useful:function (card,i){
                if(_status.event.player.hp>1){
                    if(i==0) return 4;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                        value:function (card,player,i){
                if(player.hp>1){
                    if(i==0) return 5;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                    },
                    order:function (){
            return get.order({name:'sha'})+0.2;
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
                        return (get.attitude(target,current)<0&&
                            target.canUse(card,current,true,true)&&
                            !current.getEquip('baiyin')&&
                            get.effect(current,card,target)>0);
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
            "xajh_xuechi":{
				audio:"ext:金庸群侠传:2",
                group:["xajh_xuechifangjiu","xajh_xuechirujiu","xajh_xuechiruchai","xajh_xuechiqichai"],
            },
	"xajh_qianxing":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,
                filter:function (event,player){
        if(event.responded) return false;
        if(!event.filterCard({name:'shan'})) return false;
        if(event.getParent().name!='sha') return false;
        if(!event.getParent().player.countCards('h')) return false;
        if(!player.countCards('h')) return false;
        return true;
    },
                content:function (){
        'step 0'
        var next=player.chooseCard(1,'h','是否选择一张手牌交给'+get.translation(trigger.getParent().player)+'?然后你获得其一张手牌，若这两张牌类型不同，则视为你打出了闪',function(card,player){
            return true;
        });
        var att1=get.attitude(player,trigger.getParent().player);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return 7-get.value(card);
        };
        "step 1"
        if(result.bool){
            player.line(trigger.getParent().player,'green');
            player.logSkill('xajh_qianxing',trigger.getParent().player);
            trigger.getParent().player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.getParent().player);
            event.carddd=result.cards[0];
            //event.type=get.type(result.cards[0]);
            player.gainPlayerCard(trigger.getParent().player,'h',true);
        }
        else{
            event.finish();
        }   
        "step 2"
        if(result&&result.links&&result.links.length){
            var bool=false;
            event.card=result.links[0];
            player.showCards([event.card,event.carddd],'潜行')
            if(get.type(event.card)!=get.type(event.carddd)) bool=true;
            if(bool){
                player.line(trigger.getParent().player,'green');
                trigger.untrigger();
                trigger.responded=true;
                trigger.result={bool:true,card:{name:'shan'}}
            }
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')){
                    var nh=target.countCards('h');
                    var mh=player.countCards('h');
                    if(!nh||!mh) return;
                    if(nh&&mh) return 0.9;         
                }
            },
                    },
                },
            },
            "xajh_anxi":{
				audio:"ext:金庸群侠传:2",
                group:["xajh_anxi_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageAfter",
                        },
                        check:function (event,player){
                return (get.attitude(player,event.player)<=0);
            },
                        direct:true,
                        filter:function (event,player){
                if(event.player.countGainableCards(player,'e')<=0) false;
                return event.card&&event.card.name&&event.getParent(3).name=='xajh_anxi';
            },
                        content:function (){
                "step 0"
                player.gainPlayerCard('e',trigger.player);
                "step 1"
                if(result.bool){
                    player.logSkill('xajh_anxi',trigger.player);
                }
                else{
                    event.finish();
                }
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"useCardToBefore",
                },
                check:function (event,player){
        return get.effect(event.target,{name:'sha'},player,player)>0;
    },
                filter:function (event,player){
        if(event.target==player) return false;
        if(get.type(event.card)!='delay') return false;
        return lib.filter.targetEnabled({name:'sha'},player,event.target);
    },
                content:function (){
        player.useCard({name:'sha'},trigger.targets,false);
    },
            },
	"xajh_weijian":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:true,
                unique:true,
                init:function (player){
        player.storage.xajh_weijian=false;
    },
                filter:function (event,player){
        if(event.player==player) return false;
        return !player.storage.xajh_weijian;
    },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(att<0){
            var num=0,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i]!=event.player&&get.distance(players[i],event.player,'attack')<=1){
                        num++;
                    }
                }
                if(num>2) return true;
        }
        return false;
    },
                trigger:{
                    global:"phaseBegin",
                },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        player.storage.xajh_weijian=true;
        player.awakenSkill('xajh_weijian');
        event.pl=player;
        event.trp=trigger.player;
        "step 1"
        if(event.current==undefined) event.current=event.trp.next;
        "step 2"
        if(event.current==event.trp){
            event.finish();
        }
        if(!event.trp.isAlive()){
            event.finish();
        }
        "step 3"
        if(get.distance(event.current,event.trp,'attack')>1){
            event.current=event.current.next;
            event.goto(2);
        }
        "step 4"
        player.line(event.current,'green');
        event.on1='视为对'+get.translation(event.trp)+'使用决斗';
        event.on2='受到'+get.translation(event.pl)+'一点伤害';
        event.current.chooseControl(event.on1,event.on2,function(){
            if(get.attitude(event.current,event.trp)<=0) return event.on1;
            return event.on2;
        });
        "step 5"
        if(result.control==event.on1){
            event.current.useCard({name:'juedou'},event.trp,'noai').animate=false;
            event.current=event.current.next;
            event.goto(2);
        }
        else{
            event.current.damage(event.pl);
            event.current=event.current.next;
            event.goto(2);
        }
    },
            },
            "xajh_linhan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dieBefore",
                },
                priority:100,
                direct:true,
                filter:function (event,player){
        if(event.nouseskill==true) return false;
        if(player.countCards('h')==0) return false;
        if(event.player.identity=='zhu') return false;
        return event.source&&event.source.isIn();
    },
                content:function (){
        "step 0"
        var next=player.chooseCardTarget({
            position:'h',
            filterCard:lib.filter.cardDiscardable,
            filterTarget:function(card,player,target){
                return target!=trigger.source&&target!=trigger.player;
            },
            ai1:function(card){
                return 10-get.value(card);
            },
            ai2:function(target,player){
                var fan=false;
                if(trigger.player.identity=='fan') fan=true;
                var att=get.attitude(_status.event.player,target);
                var att1=get.attitude(_status.event.player,trigger.source);
                if(fan==true&&att>0&&att1<0) return att;
                return -1;
            },
            prompt:get.prompt('xajh_linhan')
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill('xajh_linhan',result.targets);
            player.line(result.targets,'green');
            trigger.source=result.targets[0];
            trigger.untrigger();
            trigger.trigger('dieBefore');
            trigger.nouseskill=true
        }
        else{
            event.finish();
        }
    },
            },
            "xajh_bingpai":{
                group:["xajh_bingpai_remove"],
                subSkill:{
                    off:{
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('xajh_bingpai');
            },
                        sub:true,
                    },
                },
                audio:"ext:xajh_zuolengchan:2",
                unique:true,
                zhuSkill:true,
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
        if(player.hasSkill('xajh_bingpai_off')) return false;
        if(!player.hasZhuSkill('xajh_bingpai')) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.group=='wei';
        });
    },
                direct:true,
                content:function (){
        "step 0"
        var type=get.type(trigger.card);
        event.type=type;
        "step 1"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        "step 2"
        if(event.current.group!='wei'){     
            event.current=event.current.next;
            event.goto(1);
        }
        if(event.current.countCards('he')==0){     
            event.current=event.current.next;
            event.goto(1);
        }
        "step 3"
        event.current.chooseToUse({
            filterCard:function(card){
                return get.type(card)==event.type;
              },
            })
        "step 4"
        if(result.bool){
            event.current.logSkill('xajh_bingpai',player);
            player.draw();
            player.addTempSkill('xajh_bingpai_off');
        }
        else{
            event.current=event.current.next;
            event.goto(1);
        }
    },
            },
	"xajh_chongsu":{
				audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.xajh_chongsu=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未记录牌的点数';
            }
            else{
                var str='已记录点数为'+get.cnNumber(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.cnNumber(storage[i]);
                }
                str+='的牌';
                return str;
            }
        },
                },
                group:"xajh_chongsu_cancel",
                subSkill:{
                    cancel:{
                        trigger:{
                            target:"useCardToBefore",
                        },
                        forced:true,
                        priority:15,
                        check:function (event,player){
                return get.effect(event.target,event.card,event.player,player)<0;
            },
                        filter:function (event,player){
                if(event.player==player) return false;
                if(!event.cards||event.cards.length!=1) return false;
                var number=get.number(event.card);
                if(!number) return false;
                if(!player.storage.xajh_chongsu.contains(number)) return false;
                return get.type(event.card,'trick')=='trick';
            },
                        content:function (){
				game.playJY(['xajh_chongsu1','xajh_chongsu2'].randomGet());			
                trigger.cancel();
                var number=get.number(trigger.card);
                game.log(player,'因记录了点数'+get.cnNumber(number)+'取消成为'+get.translation(trigger.card)+'的目标');
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"useCard",
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
        if(!event.cards||event.cards.length!=1) return false;
        var number=get.number(event.card);
        if(!number) return false;
        if(player.storage.xajh_chongsu.contains(number)) return false;
        return get.type(event.card)=='basic';
    },
                content:function (){
        var number=get.number(trigger.card);
        if(!player.storage.xajh_chongsu.contains(number)){
            player.storage.xajh_chongsu.push(number);
            game.log(player,'记录了点数'+get.cnNumber(number)+'');
            player.markSkill('xajh_chongsu');
            player.syncStorage('xajh_chongsu');         
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                var number=get.number(card);
                if(!number) return;
                if(get.type(card)=='basic'&&!target.storage.xajh_chongsu.contains(number)) return [1,0.2];
                if(target.storage.xajh_chongsu.contains(number)&&target!=player&&get.type(card,'trick')=='trick') return 'zeroplayertarget';
            },
                        player:function (card,player,target){
                var number=get.number(card);
                if(!number) return;
                if(get.type(card)=='basic'&&!player.storage.xajh_chongsu.contains(number)) return [1,0.2];
            },
                    },
                },
            },
            "xajh_qinjian":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                position:"h",
                filter:function (event,player){
        return player.countCards('h')>=3;
    },
                filterCard:function (card,player,target){
        var num=get.number(card);
        var ta=ui.selected.cards;
        if(ta.length){
            for(var i=0;i<ta.length;i++){
                if(num==get.number(ta[i])){
                    return false;
                };
            }
        }
        if(ta.length==2){
            var numm1=get.number(ta[0])+get.number(ta[0])-get.number(ta[1]);
            var numm2=get.number(ta[1])+get.number(ta[1])-get.number(ta[0]);
            var numm3=get.number(ta[1])+get.number(ta[0]);
            var numm4=numm3/2;
            if(num!=numm1&&num!=numm2&&num!=numm4) return false;
        }
        if(ta.length>2){
            var num4=14;
            var num5=14;
            var num6=0;
            var num7=0;
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])<num4){
                    num4=get.number(ta[i]);
                }
            }
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])<num5&&get.number(ta[i])!=num4){
                    num5=get.number(ta[i]);
                }
            }
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])>num6){
                    num6=get.number(ta[i]);
                }
            }
            for(var i=0;i<ta.length;i++){
                if(get.number(ta[i])>num7&&get.number(ta[i])!=num6){
                    num7=get.number(ta[i]);
                }
            }
            if((num4+num4-num5)!=num&&(num6+num6-num7)!=num) return false;     
        }
        return true;
    },
                selectCard:3,
                check:function (card){
        return 20-get.value(card);
    },
                filterTarget:function (card,player,target){
        var car=ui.selected.cards;
        var ji=false;
        var ou=false;
        for(var i=0;i<car.length;i++){
            var numm=get.number(car[i]);
            if(numm%2==1&&ji==false){
                ji=true;
            }
            if(numm%2==0&&ou==false){
                ou=true;
            }
        }
        if(ji==true&&ou==true){
            return true;        
        }
        else if(ji==true&&ou==false){
            return true;           
        }
        else if(ji==false&&ou==true){
            if(target.hp>=target.maxHp) return false;      
            return true;      
        }
    },
                selectTarget:function (target,card,player){
        var car=ui.selected.cards;
        var ji=false;
        var ou=false;
        for(var i=0;i<car.length;i++){
            var numm=get.number(car[i]);
            if(numm%2==1&&ji==false){
                ji=true;
            }
            if(numm%2==0&&ou==false){
                ou=true;
            }
        }
        if(ji==true&&ou==true){
            return -1;        
        }
        else if(ji==true&&ou==false){
            return [1,3];           
        }
        else if(ji==false&&ou==true){
            return [1,3];  
        }
    },
                content:function (){
        "step 0"
        var car=cards;
        var ji=false;
        var ou=false;
        for(var i=0;i<car.length;i++){
            var numm=get.number(car[i]);
            if(numm%2==1&&ji==false){
                ji=true;
            }
            if(numm%2==0&&ou==false){
                ou=true;
            }
        }
        if(ji==true&&ou==true){
            target.loseHp();    
        }
        else if(ji==true&&ou==false){
            target.damage(1,player);     
        }
        else if(ji==false&&ou==true){
            target.recover();
        }
    },
                ai:{
                    order:11,
                    result:{
                        target:function (player,target){
                var car=ui.selected.cards;
                var ji=false;
                var ou=false;
                for(var i=0;i<car.length;i++){
                    var numm=get.number(car[i]);
                    if(numm%2==1&&ji==false){
                        ji=true;
                    }
                    if(numm%2==0&&ou==false){
                        ou=true;
                    }
                }
                if(ji==true&&ou==true){
                    return -get.recoverEffect(target,player,player); 
                }
                else if(ji==true&&ou==false){
                    return get.damageEffect(target,player);
                }
                else if(ji==false&&ou==true){
                    return get.recoverEffect(target,player,player); 
                }
            },
                    },
                    threaten:1,
                },
            },
	 "xajh_jianhao":{
		  audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.xajh_jianhao=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未声明过武器牌';
            }
            else{
                var str='已声明过'+get.translation(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.translation(storage[i]);
                }
                str+='。';
                return str;
            }
        },
                },
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(player.getEquip(1)) return false;
        if(event.card.name!='sha') return false;
        var list=get.inpile('equip');
        for(var i=0;i<list.length;i++){
            var card={name:list[i]};
            var info=get.info(card);
            if(info.subtype=='equip1'&&info.skills&&!player.storage.xajh_jianhao.contains(list[i])){
            return true;
            }      
        }
        return false;
    },
                content:function (){
        'step 0'
        var list1=[];
        var list=get.inpile('equip');
        for(var i=0;i<list.length;i++){
            var card={name:list[i]};
            var info=get.info(card);
            if(info.subtype=='equip1'&&info.skills&&!player.storage.xajh_jianhao.contains(list[i])){
            list1.push(list[i]);
            }      
        }
        for(var i=0;i<list1.length;i++){
            list1[i]=['武器','',list1[i]];
        }
        if(list1.length>0){
            var dialog=ui.create.dialog('选择一张武器牌获得该武将的武器特效直到该杀结算完毕',[list1,'vcard'],'hidden');
            player.chooseButton(dialog,true).set('ai',function(button){
                return Math.random();
            });
        }
        else{
            event.finish();
        }
        'step 1'
        if(result.bool){
            var card={name:result.buttons[0].link[2]};
            var name=result.buttons[0].link[2];
            player.storage.xajh_jianhao.push(name);
            game.log(player,'声明了'+get.translation(name));
            player.syncStorage('xajh_jianhao');
            player.markSkill('xajh_jianhao');
            //player.showCards(get.translation(player)+'声明了'+get.translation(name),card);
            var info=get.info(card);
               if(info.skills){
                    player.addAdditionalSkill('xajh_jianhao',info.skills);
                    trigger.gainskill=true;
                    }
                else{
                    player.removeAdditionalSkill('xajh_jianhao');
                }
        }
    },
                group:["xajh_jianhao_skill"],
                subSkill:{
                    skill:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        priority:2,
                        filter:function (event,player){
                if(!event.card||event.card.name!='sha') return false;
                return event.gainskill==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){    
                player.removeAdditionalSkill('xajh_jianhao');
                game.log(player,'失去了武器特效');
            },
                        sub:true,
                    },
                },
            },
            "xajh_zuixia":{
				 audio:"ext:金庸群侠传:2",
                group:["xajh_zuixia_use"],
                subSkill:{
                    use:{
                        trigger:{
                            player:["useCard"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.card.name=='jiu'&&_status.currentPhase==player) return true;
                return false;
            },
                        content:function (){
                player.addTempSkill('xajh_zuixia_buff','phaseEnd');
            },
                        sub:true,
                    },
                    buff:{
                        mark:true,
                        marktext:"醉",
                        intro:{
                            content:"你造成的伤害加一",
                        },
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                return event.notLink();
            },
                        popup:false,
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
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{suit:'club'})) return false;
    },
                prompt:"将一张梅花手牌当酒使用",
                check:function (card){
        if(_status.event.type=='dying') return 1;
        return 4-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('h',{suit:'club'})>0&&player.hp<=0;
        },
                    threaten:1.5,
                    save:true,
                    basic:{
                        useful:function (card,i){
                if(_status.event.player.hp>1){
                    if(i==0) return 4;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                        value:function (card,player,i){
                if(player.hp>1){
                    if(i==0) return 5;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                    },
                    order:function (){
            return get.order({name:'sha'})+0.2;
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
                        return (get.attitude(target,current)<0&&
                            target.canUse(card,current,true,true)&&
                            !current.getEquip('baiyin')&&
                            get.effect(current,card,target)>0);
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
            "xajh_wangyou":{
				audio:"ext:金庸群侠传:2",
                group:["xajh_wangyou_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('xajh_wangyou');
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:["phaseDrawBegin"],
                },
                filter:function (event,player){
       if(event.player==player) return false;
        if(event.player.group!='shu') return false;
        return true;
    },
                direct:true,
                zhuSkill:true,
                content:function (){
        "step 0"
        trigger.player.chooseBool('是否展示牌堆的三张牌令'+get.translation(player)+'获得其中的梅花牌,你获得其余的牌？').set('ai',function(){                                
            if(get.attitude(trigger.player,player)>0) return true; 
            if(get.attitude(trigger.player,player)<0&&trigger.num<2) return true; 
            return false;
        }); 
        "step 1"
        if(result.bool){
            trigger.player.logSkill('xajh_wangyou',player);
            trigger.cancel();
            event.cards=get.cards(3);
            trigger.player.showCards(event.cards,'忘忧');
        }
        else{
            event.finish();
        }  
         "step 2"
         var plgain=[];
         for(var i=0;i<cards.length;i++){
            if(get.suit(cards[i])=='club'){
                plgain.push(cards[i]);
                cards.splice(i--,1);
            }
        }
        if(cards.length){
            trigger.player.gain(cards,'gain2');
         }
        
        if(plgain.length){
            player.gain(plgain,'gain2');
         }
    },
            },
	 "xajh_qiaowei":{
		 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        if(!event.source) return false;
        if(!event.card||event.card.name!='sha') return false;
        if(!event.player.isAlive()||!event.source.isAlive()) return false;
        if(!event.player.countCards('hej')) return false;
        var card=game.createCard('juedou');
        if(event.player.canUse(card,event.source)){
            return true;
        }
        return false;
    },
                check:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        var hs=event.player.countCards('h')-event.source.countCards('h');
        if(att1>0&&att2>0) return false;
        if(att1<0&&att2<0) return true;
        if(att1>0&&att2<0&&hs>0) return true;
        return false;
    },
                content:function (){
         "step 0"
        player.discardPlayerCard('hej',trigger.player,true);
         "step 1"
        trigger.player.useCard({name:'juedou'},trigger.source);
    },
            },
            "xajh_yuli":{
                group:["xajh_yuli_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('xajh_yuli');
            },
                        sub:true,
                    },
                },
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["respond","damageEnd"],
                },
                filter:function (event,player){
        if(event.name=='respond'){
            if(event.getParent(2).name!='juedou') return false;
            if(event.card.name!='sha') return false;
            if(event.player==player) return false;
            if(event.player.group!='shu') return false;
            return true;
        }
        if(event.name=='damage'){
            if(!event.card||event.card.name!='juedou') return false;
            if(event.player.group=='shu'&&event.player!=player) return true;
            if(event.source.group=='shu'&&event.source!=player) return true;
            return true;
        }
        return false;
    },
                frequent:true,
                zhuSkill:true,
                content:function (){
        player.draw();
    },
            },
            "xajh_xiejian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xajh_xiejian'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var pl=_status.event.player;
            var tahs=target.countCards('h');
            var att=get.attitude(pl,target);
            if(att<0){
                var usesha=0;
                var num=0;
                var ca=pl.getCards('h');
                for(var i=0;i<ca.length;i++){
                    if(ca[i].name!='sha'&&get.tag(ca[i],'damage')&&pl.canUse(ca[i],target)){
                        var eff1=get.effect(target,ca[i],pl,pl);
                        if(eff1>0) num++;
                    }
                }
                for(var i=0;i<ca.length;i++){
                    if(ca[i].name=='sha'&&pl.canUse(ca[i],target)){
                        var eff1=get.effect(target,ca[i],pl,pl);
                        if(eff1>0) usesha++;
                    }
                }
                if(usesha>0) num++;
                if(target.hp<=0) return -1;
                if(target.countCards('h')<2) return -1;
                if(num>1) return (num/target.hp)+1;
            }
            if(att>0){
                if(target.countCards('h')==0) return 0.5;
                if(target.countCards('h')>0) return 1/(target.countCards('h')+1);       
            }
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('xajh_xiejian',result.targets);
            result.targets[0].draw();
            result.targets[0].addTempSkill('xajh_xiejian_nouse');
        }
    },
                subSkill:{
                    nouse:{
                        mark:true,
                        intro:{
                            content:"不能使用或打出牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    return false;
                },
                            cardUsable:function (card,player){
                    return false;
                },
                            cardRespondable:function (card,player){
                    return false;
                },
                            cardSavable:function (card,player){
                    return false;
                },
                            targetInRange:function (card){
                    return false;
                },
                        },
                        ai:{
                            threaten:3,
                            effect:{
                                target:function (card,player,target){
                        if(get.tag(card,'damage')) return [1,-1];
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
	 "xajh_chongling":{
		 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"dieBegin",
                },
                silent:true,
                content:function (){
        var pl=player.storage.冲灵角色;
         if(pl.storage.xajh_chonglingzhuanbei){
            //juese.storage.xajh_chonglingzhuanbei.discard();
            pl.$throw(pl.storage.xajh_chonglingzhuanbei);
            pl.unmark(pl.storage.xajh_chonglingzhuanbei,'xajh_chonglingzhuanbei');
            game.addVideo('unmarkId',pl,[get.cardInfo(pl.storage.xajh_chonglingzhuanbei),'冲灵装备']);
            pl.removeAdditionalSkill('xajh_chonglingzhuanbei');
            pl.$throw(pl.storage.xajh_chonglingzhuanbei);
        }
        if(player.storage.xajh_chonglingzhuanbei){
          //  player.storage.xajh_chonglingzhuanbei.discard();
            player.$throw(player.storage.xajh_chonglingzhuanbei);
        }
        pl.removeSkill('xajh_chonglingzhuanbei');
        player.removeSkill('xajh_chonglingzhuanbei');
        pl.unmarkSkill('xajh_jianwu');
        player.unmarkSkill('xajh_jianwu');
    },
                forced:true,
                popup:false,
            },
            "xajh_chonglingzhuanbei":{
                group:"xajh_chongling",
                trigger:{
                    player:["equipEnd","loseEnd"],
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        if(event.name=='equip'&&get.subtype(event.card)=='equip1') return true;
        if(event.name=='lose') {
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].original=='e'&&get.subtype(event.cards[i])=='equip1') return true;
            }
        }
        return false;
    },
                content:function (){
        if(trigger.name=='equip') {
            var card=trigger.card;
            var info=get.info(card);
            var pl=player.storage.冲灵角色;
            if(card){
                if(pl.storage.xajh_chonglingzhuanbei){
                    pl.unmark(pl.storage.xajh_chonglingzhuanbei,'冲灵装备');
                   // pl.discard(pl.storage.xajh_chonglingzhuanbei);
                    game.addVideo('unmarkId',pl,[get.cardInfo(pl.storage.xajh_chonglingzhuanbei),'冲灵装备']);
                }
                if(card.clone){
                    card.clone.moveDelete(pl);
                   game.addVideo('gain2',pl,get.cardsInfo([card.clone]));
                    pl.mark(card,'xajh_chonglingzhuanbei');
                    game.addVideo('markId',pl,[get.cardInfo(card),'xajh_chonglingzhuanbei']);
                    game.log(pl,'获得了装备效果');
                }
               // ui.special.appendChild(card);
                pl.storage.xajh_chonglingzhuanbei=card;
                var info=get.info(card);
                if(info.skills){
                    pl.addAdditionalSkill('xajh_chonglingzhuanbei',info.skills);
                    }
                else{
                    pl.removeAdditionalSkill('xajh_chonglingzhuanbei');
                }
            }
        }
        if(trigger.name=='lose') {
            if(pl.storage.xajh_chonglingzhuanbei){
                pl.unmark(pl.storage.xajh_chonglingzhuanbei,'冲灵装备');
                //pl.discard(pl.storage.xajh_chonglingzhuanbei);
                game.addVideo('unmarkId',pl,[get.cardInfo(pl.storage.xajh_chonglingzhuanbei),'冲灵装备']);
                pl.removeAdditionalSkill('xajh_chonglingzhuanbei');
                game.log(pl,'失去了装备效果');
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
                intro:{
                    content:"card",
                },
            },
        
            "xajh_jianwu":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:true,
                enable:"phaseUse",
                filter:function (event,player){
        return !player.storage.xajh_jianwu;
    },
                filterTarget:function (card,player,target){
        return target.sex=='male'&&target!=player;
    },
                content:function (){
        player.awakenSkill('xajh_jianwu');
        player.addSkill('xajh_chonglingzhuanbei');
        target.addSkill('xajh_chonglingzhuanbei');
        player.storage.冲灵角色=target;
        target.storage.冲灵角色=player;
        player.storage.xajh_jianwu=true;
        target.marks.xajh_jianwu=target.markCharacter(player,{
            name:'xajh_jianwu',
            content:'冲灵状态'
        });
        game.addVideo('markCharacter',target,{
            name:'xajh_jianwu',
            content:'冲灵状态',
            id:'xajh_jianwu',
            target:player.dataset.position
        });


        player.marks.xajh_jianwu=player.markCharacter(target,{
            name:'xajh_jianwu',
            content:'冲灵状态'
        });
        game.addVideo('markCharacter',player,{
            name:'xajh_jianwu',
            content:'冲灵状态',
            id:'xajh_jianwu',
            target:target.dataset.position
        });
    },
                ai:{
                    order:11,
                    result:{
                        target:1,
                    },
                },
            },
            "xajh_huizhi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                filter:function (event){
        return event.card.name=='jiu';
    },
                check:function (event,player){
        return (get.attitude(player,event.player)>0);
    },
                content:function (){
        trigger.player.draw(2);
    },
            },
            "xajh_fanghun":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        if(!event.source.countCards('hej')) return false;
        if(_status.currentPhase!=event.source) return false;
        return event.source.countUsed('jiu')==0;;
    },
                content:function (){
         "step 0"
        player.discardPlayerCard('hej',trigger.source,true);
         "step 1"
        trigger.source.useCard({name:'jiu'},trigger.source);
    },
                ai:{
                    maixie:true,
                },
            },
	"xajh_shichong":{
		audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xajh_shichong'),function(card,player,target){
        return get.distance(trigger.source,target)<=target.getAttackRange()&&target.canUse({name:'sha'},trigger.source)&&trigger.source!=target&&player!=target;
        }).ai=function(target){

            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)==0) return 0;
            if(get.attitude(_status.event.player,trigger.source)<0&&get.attitude(trigger.source,target)>0) return 1;           
            if(get.attitude(_status.event.player,trigger.source)<0&&get.attitude(trigger.source,target)<0) return 1;
            if(get.attitude(_status.event.player,trigger.source)>0&&get.attitude(trigger.source,target)>0) return 2;           
            if(get.attitude(_status.event.player,trigger.source)>0&&get.attitude(trigger.source,target)<0) return 0;

           
        }

         'step 1'
        if(result.bool){
            event.target=result.targets[0];
            event.target.chooseCard('请选择交给'+get.translation(player)+'的牌'+'或对'+get.translation(trigger.source)+'出招','he').set('ai',function(card){
                if(get.attitude(player,event.target)<0&&card.name=='du') return 1;
                if(get.attitude(trigger.source,event.target)<0) return-10;
                return 7-get.value(card);
            });
        }else{
            event.finish();
        };
        'step 2'
        if(result.bool){
            player.line(event.target);
            player.logSkill('xajh_shichong')
            event.target.$give(result.cards[0],player);
            player.gain(result.cards[0],event.target);
        }
        else{
            event.target.useCard({name:'sha'},trigger.source,false);
        
        }
        
        
    },
            },
            "xajh_yuhe":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"gainAfter",
                },
				frequent:true,
                filter:function(event,card,player){                
                     return event.source&&event.source!=player;

    },
                content:function(){
        player.draw();
    },
            },
  "xajh_biguan":{
	  audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseEnd",
                },
                init:function(player){
        player.storage.xajh_biguan=0;
       },
                filter:function(event,player){
        return player.hp<player.maxHp&&player.num('he')>0;
        },
                content:function(){
        player.chooseToDiscard('he','闭关：弃置一张手牌或装备牌，防御距离+1').ai=function(card){
        return 6-get.value(card);
        };
        player.storage.xajh_biguan+=1;     
        player.markSkill('xajh_biguan');
        },
                intro:{
                    content:"防御距离+1",
                },
                group:"xajh_biguan2",
            },
            "xajh_biguan2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function(event,player){
            return player.storage.xajh_biguan>0;

        },
                content:function(){
					game.playJY(['xajh_biguan1','xajh_biguan2'].randomGet());
            player.storage.xajh_biguan=0;
            player.unmarkSkill('xajh_biguan');
        },
                mod:{
                    globalTo:function(from,to,distance){
                   if(typeof to.storage.xajh_biguan=='number'){
                                        return distance+to.storage.xajh_biguan;
            }
                    },
                },
            },
            "xajh_xixing":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                filter:function(event,player){
            if(event.source==player) return true;
            return false;
    },
                content:function(){
                player.gainMaxHp();
                player.recover();
               //player.loseMaxHp();
    },
            },
            "xajh_chushan":{
                audio:"ext:金庸群侠传:2",
                unique:true,
                enable:"phaseUse",
                mark:true,
                skillAnimation:true,
                limited:true,
                init:function(player){
        player.storage.xajh_chushan=false;
    },
                filter:function(event,player){
        if(player.storage.xajh_chushan) return false;
        return game.dead.length>0;     
    },
                content:function(){
           'step 0'  
            player.storage.xajh_chushan=true;            
            var chat=['有人的地方就有江湖，你如何退出？'].randomGet();
            player.say(chat);         
            event.current=player.next;                
         var list=[];
         for(var i=0;i<game.dead.length;i++){
             list.push(game.dead[i].name);
         }                 player.chooseButton(ui.create.dialog('选择1名已阵亡的角色',[list,'character']),function(button){
         for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
             return ai.get.attitude(_status.event.player,game.dead[i]);
         });                
          'step 1'
         if(result.bool){
         for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
             var dead=game.dead[i];   
         event.skills=[];
         var skills=dead.get('s',false,false);
         for(var i=0;i<skills.length;i++){var info=get.info(skills[i])
         if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)) event.skills.push(skills[i]);
         };
         player.chooseControl(event.skills).set('prompt','请选择要获得的技能');
         }
         'step 2'
         player.loseMaxHp();
         player.removeSkill('xajh_biguan');
         player.addSkill(result.control);
         player.awakenSkill('xajh_chushan');
      //   player.logSkill('chushanceshi',dead.name);         
         },
                intro:{
                    content:"limited",
                },
                     ai:{
                    order:2,
                  result:{    
                        player:1,                             
                   },
                    expose:0.8,
                },
            },
            "xajh_quanbing":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dieBefore",
                },
                unique:true,
                zhuSkill:true,
                forced:true,
                filter:function(event,player){
                                 if(event.player==player) return false;
                                 if(!player.hasZhuSkill('xajh_quanbing')) return false;
               return event.source.countCards('h')>0&&event.source&&event.source.isAlive()&&event.source!=player&&event.source.group=='shu';
    },
                content:function(){
        "step 0"
        trigger.source.chooseControl('令'+get.translation(player)+'发动权柄','不发动');                                                   
        "step 1"
        if(result.control=='令'+get.translation(player)+'发动权柄'){
        trigger.source.discard(trigger.source.getCards('h'));
        trigger.source=player;
        } 
        else{
        event.finish();
        }          
      },
                ai:{
                    threaten:1.5,
                    expose:0.1,
                },
            },
"xajh_digong":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
        return event.player!=player&&event.player.maxHp>player.maxHp;
    },
	check:function (event,player){
            return get.attitude(player,event.player)>0;
    },
                content:function(){

  trigger.player.addTempSkill('xajh_digong2')
        
        
        
    },
                ai:{
                    expose:0.3,
                    threaten:1.3,
                },
            },
            "xajh_digong2":{
                unique:true,
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+1;
        },
                },
            },
            "xajh_nianjue":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseBegin",
                },
                filter:function(event,player){
        return event.player.maxHp>event.player.hp;
    },
                check:function (event,player){
            return get.attitude(player,event.player)>0;
    },
                content:function(){

        "step 0"

        trigger.player.judge();
        "step 1"
        switch(get.suit(result.card)){
            case 'heart':trigger.player.recover();break;
          //  case 'diamond':trigger.player.draw(2);break;
            case 'club':trigger.player.gain(result.card);trigger.player.$gain2(result.card);break;
         //   case 'spade':trigger.source.turnOver();break;
        }
    },
                ai:{
                    expose:0.3,
                },
            },
"xajh_weizhong":{
	 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gainEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
        if((event.player.countCards('h')-event.player.hp)<0) return false;
        return event.source==player&&event.player!=player;
    },
                content:function (){
        trigger.player.loseHp();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                var att=get.attitude(player,target);
                if(att>0) return;
                if(card.name=='shunshou'&&player.countCards('h')-player.hp>0) return [-2,0.6];
            },
                    },
                },
            },
            "xajh_daoxi":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                usable:1,
                direct:true,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        if(player.countCards('h')-event.player.countCards('h')>=0) return false;
        if(event.player==player) return false;
        if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
        var info=get.info(event.card);
     //   if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                 return player.canUse(event.card,current);
             })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var next=player.chooseCard(1,'h','是否选择一张牌交给'+get.translation(trigger.player)+'然后视为你使用'+get.translation(trigger.card)+'？',function(card,player){
            return true;
        });
        var att=get.attitude(_status.event.player,trigger.player);
        next.ai=function(card){
            if(att>2) {
                return -1;
            }
            if(att<=0) {
                if(trigger.targets.contains(player)&&trigger.targets.length==1){
                    if(trigger.card.name=='jiu'||trigger.card.name=='tao'||trigger.card.name=='wuzhong') return -2;
                    return 1;
                }
                if(!trigger.targets.contains(player)&&trigger.targets.length==1){
                    var att2=get.attitude(_status.event.player,trigger.targets[0]);
                    if(att2>2) {
                        if(trigger.card.name=='juedou'||trigger.card.name=='sha') return 1;  
                        return -1;
                    }
                    if(att2<0) {
                        if(trigger.card.name=='tao'||trigger.card.name=='wuzhong') return 0.5;  
                        return -1;
                    }
                }
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('xajh_daoxi',trigger.player);
            player.line(trigger.player,'green');
            trigger.player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.player);
            player.chooseUseTarget(trigger.card);
            game.delay(0.7);
        }
        else{
            player.getStat().skill.xajh_daoxi--;
            game.delay(0.7);
            event.finish();
        }
         "step 2"
        trigger.cancel();
        game.delay(0.7);
    },
                ai:{
                    threaten:2,
                },
            },
    

},

 translate:{
	 "xajh_zhuqianqiu":"祖千秋",
            "xajh_lunjiu":"论杯",
            "xajh_lunjiu_info":"<span style=\"color:#FF7F00\">一名角色出牌阶段开始时/进入濒死状态时，你可以弃置场上一张武器牌或防具牌。若如此做，则视为其使用了一张【酒】。</span>",
            "xajh_yaojiu":"酒药",
            "xajh_yaojiu_info":"一名角色使用“酒”后，你可以弃置一张手牌。<br><li><span style=\"color:#FF0000\">若此牌为红色，其回复1点体力。</span><br><li><span style=\"color:#FF00FF\">若此牌为黑色，其流失一体力。</span>",
	 "xajh_renyingying":"任盈盈",
            "xajh_qugang":"曲高",
            "xajh_qugang_info":"出牌阶段限一次，你可以与一名其他角色同时展示一张手牌，若花色相同，其摸2张牌；若花色不同，你令其弃置2张牌或你摸2张牌。",
            "xajh_heming":"和鸣",
            "xajh_heming_info":"其他角色摸牌阶段结束时，你可以依次声明两个花色，然后若其展示与你声明的花色组成相同的两张手牌，其可以视为使用一张基本牌。",
	"xajh_tianboguang":"田伯光",
            "xajh_xunfang":"寻芳",
            "xajh_xunfang_info":"出牌阶段限一次，你可以将一张红桃手牌交给一名女性角色，获得其一张牌，然后你展示获得的牌，若不为红桃，你摸1张牌。",
            "xajh_aotu":"傲徒",
            "xajh_aotu_info":"结束阶段开始时，你可以选择一名体力值不大于你的其他角色，直至你下个回合开始，每当其获得或失去手牌后，若其手牌数量与你相等，你摸1张牌。",		
	 "xajh_linpingzhi":"林平之",
            "xajh_renru":"忍辱",
            "xajh_renru_info":"每当你受到1点伤害后或你于回合外失去装备区里的牌后，你可以将牌堆顶1张牌置于武将牌上，称为“辱”。<br><li><span style=\"color:#FF0000\">锁定技。若你有“辱”，其他角色计算你距离+1。</span>",
            "xajh_qushi":"去势",
            "xajh_qushi_info":"觉醒技。当你获得第5张“辱”后，你减1点体力上限，废除防具栏和坐骑栏，然后<span style=\"color:#FF0000\">删除【忍辱】锁定技部分并获得【雪耻】。</span>",
            "xajh_xuechiqichai":"雪耻-骑拆",
            "xajh_xuechiqichai_info":"<span style=\"color:#FF0000\">你可以将一张坐骑牌当“过河拆桥”使用</span>",
            "xajh_xuechiruchai":"雪耻-辱拆",
            "xajh_xuechiruchai_info":"<span style=\"color:#FF0000\">出牌阶段，你可以将一张红色“辱”当“过河拆桥”使用</span>",
            "xajh_xuechirujiu":"雪耻-辱酒",
            "xajh_xuechirujiu_info":"<span style=\"color:#FF00FF\">你可以把任意一张黑色“辱”当“酒”使用</span>",
            "xajh_xuechifangjiu":"雪耻-防酒",
            "xajh_xuechifangjiu_info":"<span style=\"color:#FF00FF\">你可以将一张防具牌当“酒”使用。</span>",
            "xajh_xuechi":"雪耻",
            "xajh_xuechi_info":"<br><li><span style=\"color:#FF0000\">你可以将坐骑牌或红色的“辱”当“过河拆桥”使用。</span><br><li><span style=\"color:#FF00FF\">你可以将防具牌或黑色“辱”当“酒”使用。</span>",
	 "xajh_laodenuo":"劳德诺",
            "xajh_qianxing":"潜行",
            "xajh_qianxing_info":"其他角色使用“杀”指定你为目标后，你可以交给其一张手牌，然后你获得其一张手牌，若此牌与你交给其的牌类别不同，视为你使用了一张“闪”。",
            "xajh_anxi":"暗袭",
            "xajh_anxi_info":"当其他角色成为延时锦囊的目标时，你可以视为对其使用一张杀，若此杀造成了伤害且其装备区有装备牌，你可以获得其中一张装备牌。",
	 "xajh_zuolengchan":"左冷禅",
            "xajh_weijian":"围歼",
            "xajh_weijian_info":"限定技。其他角色的回合开始时，你可以令攻击范围含有其的所有角色选择一项：视为对其使用“决斗”；或受到你1点伤害。",
            "xajh_linhan":"凛寒",
            "xajh_linhan_info":"每当一名角色杀死角色时，你可以弃置一张手牌并选择一名其他角色，视为其杀死该角色。",
            "xajh_bingpai":"并派",
            "xajh_bingpai_info":"主公技。每回合限一次，每当你使用牌后，其他魏势力角色可以使用一张与此牌类型相同的的牌，然后你摸1张牌。",
	 "xajh_moda":"莫大",
            "xajh_chongsu":"衷诉",
            "xajh_chongsu_info":"当你使用基本牌指定目标后，或你成为基本牌的目标后，若你未记录此牌的点数，你可以记录此牌的点数。锁定技，当你成为其他角色使用的普通锦囊牌的目标后，若你有此牌点数的标记，取消之。",
            "xajh_qinjian":"琴剑",
            "xajh_qinjian_info":"出牌阶段限一次，你可以弃置3张点数呈等差数列的手牌。若这些牌：同为奇数，你对至多三名角色造1点伤害；同为偶数，你令至多三名角色回复1点体力；包含奇数和偶数，你令所有角色失去1点体力。",
	  "xajh_linghuchong":"令狐冲",
            "xajh_jianhao":"剑豪",
            "xajh_jianhao_info":"你使用杀时，若你没有装备武器牌，你可以声明一张你未以此法声明过的武器牌，直到此杀结算完毕，你视为拥有该武器牌的技能。",
            "xajh_zuixia":"醉侠",
            "xajh_zuixia_info":"你可以将梅花手牌当酒使用。锁定技，你于回合内使用酒后，你造成的伤害+1。",
            "xajh_wangyou":"忘忧",
            "xajh_wangyou_info":"主公技。其他蜀国角色摸牌阶段开始时，其可以放弃摸牌，然后展示牌堆3张牌，令你获得其中的梅花牌，其获得其余牌。",
	  "xajh_yuebuqun":"岳不群",
            "xajh_qiaowei":"巧伪",
            "xajh_qiaowei_info":"一名角色受到杀造成的伤害后，若其区域内有牌，你可以弃置其区域内一张牌，若如此做，其视为对来源使用一张“决斗”。",
            "xajh_yuli":"渔利",
            "xajh_yuli_info":"主公技。每当其他蜀势力角色因“决斗”打出杀或因决斗造成或受到伤害后，你可以摸1张牌。",
            "xajh_xiejian":"邪剑",
            "xajh_xiejian_info":"出牌阶段开始时，你可以令一名其他角色摸一张牌，若如此做，其本回合不能使用或打出牌。",
	  "xajh_yuelingsan":"岳灵珊",
            "xajh_chongling":"冲灵",
            "xajh_chongling_info":"",
            "xajh_chonglingzhuanbei":"冲灵装备",
            "xajh_chonglingzhuanbei_info":"",
            "xajh_jianwu":"剑舞",
            "xajh_jianwu_info":"限定技。出牌阶段，你可以与一名男性角色形成“冲灵”状态，你与该角色视为拥有对方的武器效果（不含距离）。",
            "xajh_huizhi":"蕙质",
            "xajh_huizhi_info":"每当一名角色使用酒后，你可以令其摸2张牌。",
            "xajh_fanghun":"芳魂",
            "xajh_fanghun_info":"每当你受到伤害后，若其此回合未使用过酒，你可以弃置其一张牌，然后其视为使用了一张酒。",
	 "xajh_yanglianting":"杨莲亭",
            "xajh_shichong":"恃宠",
            "xajh_shichong_info":"当你受到伤害后，你可以令攻击范围含有来源的角色选择一项：对来源使用一张杀，或交给你一张牌。",
            "xajh_yuhe":"欲壑",
            "xajh_yuhe_info":"当你获得其他角色的牌时，你可以摸1张牌。",
	 "xajh_renwoxing":"任我行",
            "xajh_biguan":"闭关",
            "xajh_biguan_info":"结束阶段开始时，若你已受伤，你可以弃置一张牌，直到你的下个回合开始，其他角色计算与你的距离+1。",
            "xajh_xixing":"吸星",
            "xajh_xixing_info":"锁定技。你每杀死一名角色，你加一点内力上限并回复一点内力。",
            "xajh_chushan":"出山",
            "xajh_chushan_info":"限定技。出牌阶段，你减一点内力上限，失去“闭关”，然后获得一名已死亡的角色一项除盟主技、限定技、觉醒技外的技能。",
            "xajh_quanbing":"权柄",
            "xajh_quanbing_info":"盟主技。其他蜀势力角色杀死一名角色时，其可以弃置所有手牌，然后视为由你杀死该角色。",
	 "xajh_ludayou":"陆大有",
	  "xajh_digong":"弟恭",
            "xajh_digong_info":"其他角色的出牌阶段开始时，若其体力上限大于你，你可以令其此阶段内使用杀的额定次数+1。",
            "xajh_nianjue":"念诀",
            "xajh_nianjue_info":"一名已受伤的角色准备阶段开始，你可以令其进行判定，判定结果为：红桃，该角色回复1点体力；梅花，该角色获得此牌。",
           "xajh_dongfangbubai":"东方不败",
	  "xajh_weizhong":"伪忠",
            "xajh_weizhong_info":"其他角色获得你的牌后，若其手牌数大于其体力值，则你可以令其失去一点体力。",
            "xajh_daoxi":"蹈隙",
            "xajh_daoxi_info":"每回合限一次，其他角色使用基本牌或普通锦囊牌时，若其手牌数比你多，你可以交给其一张手牌，然后你代替其使用此牌。",
            },
};

if(lib.device||lib.node){
				for(var i in xajh.character){xajh.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in xajh.character){xajh.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return xajh;
		});
		lib.config.all.characters.push('xajh');
		if(!lib.config.characters.contains('xajh')) lib.config.characters.remove('xajh');
		lib.translate['xajh_character_config']='笑傲江湖';
		
		game.import('character',function(){
			var qtpz={
				name:'qtpz',
				connect:true,
				character:{
		 		"qtpz_aqing":["female","shu",3,["qtpz_libing","qtpz_shujia"],[]],
				"qtpz_haidafu":["male","shu",3,["qtpz_shidu","qtpz_fenji","qtpz_huashi"],[]],
				 "qtpz_xuedaolaozhu":["male","qun",4,["qtpz_handao","qtpz_hanzhan","qtpz_shuixiang"],[]],
				 "qtpz_wuzixu":["male","qun",3,["qtpz_zhucheng","qtpz_xuezhuang"],[]],
				 "qtpz_aobai":["male","shu",4,["qtpz_shezheng","qtpz_yingshi"],[]],
				 "qtpz_zhuyoujian":["male","wu",4,["qtpz_zuiji","qtpz_youqin","qtpz_gangbi"],['zhu']],
				  "qtpz_chenglingsu":["female","shu",4,["qtpz_zhidu","qtpz_xianghun"],[]],
				   "qtpz_miaorenfeng":["male","shu",4,["qtpz_fengpo","qtpz_yujie"],[]],
				   "qtpz_liyan":["male","qun",3,["qtpz_quanzhen","qtpz_honglve"],[]],
				   "qtpz_yuyutong":["male","shu",4,["qtpz_gaifu","qtpz_wuxian"],[]],
				   "qtpz_ajiu":["female","wu",3,["qtpz_guoshang","qtpz_fuchao"],[]],
				   "qtpz_chengbenzhi":["male","wu",4,["qtpz_yuanbian","qtpz_tongzui"],[]],
				   "qtpz_huatiegan":["male","qun",4,["qtpz_jiaoxie","qtpz_ruxue","qtpz_guming"],[]],
				   "qtpz_kasili":["female","qun",3,["qtpz_daogao","qtpz_shenyu"],[]],
				   "qtpz_tianguinong":["male","shu",3,["qtpz_tudu","qtpz_xingxun","qtpz_xuncai"],[]],
				   "qtpz_xieyanke":["male","wei",3,["qtpz_tieling","qtpz_sunuo","qtpz_jieyou"],[]],
				   "qtpz_yuanchengzhi":["male","wu",4,["qtpz_dangkou","qtpz_jiangmen","qtpz_pozhen"],['zhu']],
				   "qtpz_weixiaobao":["male","shu",4,["qtpz_yabao","qtpz_qiaoshe"],['zhu']],
				   "qtpz_weihutou":["male","shu",3,["qtpz_mengtong","qtpz_fuyin"],[]],
				   "qtpz_xuanye":["male","shu",4,["qtpz_zhengfan","qtpz_fujiang","qtpz_shengshi"],[]],
				   "qtpz_chenjinnan":["male","shu",4,["qtpz_ningxue","qtpz_zhongsu"],[]],
				   "qtpz_hufei":["male","shu",4,["qtpz_anming","qtpz_zangbao","qtpz_shouxian"],[]],
				    "qtpz_jianninggongzhu":["female","shu",3,["qtpz_yunie","qtpz_weizhao"],[]],
					"qtpz_songxiance":["male","qun",3,["qtpz_yaoji","qtpz_fuluan"],[]],
					"qtpz_pingasi":["male","shu",3,["qtpz_duanbi","qtpz_yusi","qtpz_duwu"],[]],
					"qtpz_diyun":["male","qun",4,["qtpz_hengdao","qtpz_sheer","qtpz_kuiyi"],["zhu"]],
					"qtpz_meiniansheng":["male","qun",4,["qtpz_jianshi","qtpz_guazhan","qtpz_yizhen"],[]],
			    	 "qtpz_fengjizhong":["male","shu",4,["qtpz_diebao","qtpz_jibian"],[]],
					 "qtpz_hongniangzi":["female","qun",4,["qtpz_qingying","qtpz_jingguo"],[]],
					 "qtpz_wenqinlai":["male","shu",4,["qtpz_benlei","qtpz_jiahuo","qtpz_yisui"],[]],
					 "qtpz_liyuanzhi":["female","wei",3,["youlian","qtpz_tingxian"],[]],
				 
},        

characterIntro:{
	            "qtpz_liyan": "李岩是李自成起义军的重要将领。原名李信，河南开封府杞县人，天启丁卯年举人，文武双全。其父李精白在魏忠贤逆案中被处罚。李岩生性慷慨豪爽，常常周济穷人，曾作了一首《劝赈歌》，望权贵救援水深火热中的黎民百姓。他在李自成起义中立下汗马功劳，忠心耿耿的他却被牛金星进谗惨被冤杀。【CV：稳得高处】",
				"qtpz_aobai":"《鹿鼎记》中的反派。鳌拜为清初权臣，出身瓜尔佳氏，后金开国五大臣之一费英东之侄，清朝三代元勋，康熙帝早年辅政大臣之一。以战功封公爵。前半生军功赫赫，号称满洲第一勇士，晚年则操握权柄、结党营私。小说《鹿鼎记》中，康熙在韦小宝等大臣的支持下和谋划下，在武英殿擒拿鳌拜。【CV：蚩宇】",	
				"qtpz_aqing":"《越女剑》女主角。阿青是越国一名牧羊女，虽然弱质纤纤，却是金庸小说中武功和实战能力最强的人物之一。她从小与一只会使棒的白猿习武，悟得高超的剑法。范蠡在街上遇见她一人挫败八名吴国剑士，请她去训练越国战士，最后得到三千越甲可吞吴的成就。她爱上范蠡，却在容颜上输给了西施，黯然离去。【CV：珂里】",
				"qtpz_haidafu":"《鹿鼎记》中最早出场的反派。海大富是一名弓腰陀背、病体沉疴但老谋深算的老太监，充满灰暗的霉味，代表皇室中不可告人的丑恶。因练功急于求成而需每日服用毒药续命。善使能瞬间将尸体变成一滩血水的化尸粉。受顺治密令在宫中查找害死董鄂妃的凶手，夜访慈宁宫与冒牌太后当面对峙，出言激烈迫使她露出真面目。【CV：觅阳】",
				"qtpz_zhuyoujian":"出场于《碧血剑》。朱由检是明朝的末代皇帝，虽然在位时勤于政务，但其刚愎自用，生性多疑，不能知人善任，屡屡革杀文臣武将，加上明末动荡的时代背景，亡国已是历史潮流。在位时曾六次发布罪己诏，深刻剖析自己的过失，于煤山自尽前亦写下自诏，要求闯军善待百姓。【CV：觅阳】",
				"qtpz_wuzixu":"《越女剑》中出场。伍子胥本是春秋时期楚国人，因其家人受到谗臣陷害被楚平王杀害，悲愤之下投奔吴国，他在吴中之地相土尝水，象天法地，在太湖东岸的丘陵和平原之间建造了姑苏城。公元前五百零六年，他协同孙武带兵攻入楚都，伍子胥掘开楚平王陵墓，鞭尸三百，以报父兄之仇。【CV：觅阳】",
				"qtpz_xuedaolaozhu":"《连城诀》中的第一反派。青海黑教血刀门第四代掌门人，武林第一邪派高手，门下都作和尚打扮却个个都是十恶不赦的淫僧。擅使用血刀经武功，刀法强悍。他强掳了水岱之女水笙，南四奇一路追杀他到藏边雪谷，与其进行了一场鏖战。其中三位先后战死，血刀老祖便将苟且便生的花铁干说降，令其弃械。【CV：蚩宇】",				
				"qtpz_yuyutong":"红花会十四当家，擅长吹笛，曾考上秀才而被称作金笛秀才。余鱼同英俊潇洒却偏偏痴恋人妻文四嫂而不可自拔，曾几度陷在这不伦之恋中痛不欲生。后来在官家子女李沅芷的死缠烂打下，逐渐解开心结，最终移情于李沅芷。曾为了四嫂骆冰深入龙潭虎穴解救文泰来，宁可自己身陷囹圄；更甘做人肉炸弹解救红花会众兄弟，自己却被炸毁容。【CV：神齐大叔】",
				"qtpz_miaorenfeng":"苗人凤是李自成手下苗防卫的后人，为人顶天立地、不苟言笑，苗家剑法炉火纯青，武功极高，号称打遍天下无敌手，人称金面佛。因受到田归农的挑拨与胡一刀决斗，在田归农的诡计下不慎杀死胡一刀，因而一生郁结难抒。最后终与胡斐化解了胡苗两家的恩怨。【CV：青灯折扇不语】",
				"qtpz_chenglingsu":"程灵素是药王谷无嗔大师的关闭弟子，继承了毒手药王的遗作《药王神篇》，成功培育剧毒七心海棠，下毒功夫和解毒功夫都出神入化。她机智聪敏，料事如神。结识胡斐后，她暗恋胡斐，最后为救胡斐牺牲自己替他啜毒而死。临死前仍精心设计用七心海棠蜡烛杀死师门败类石万嗔等人。【CV：辣鸭】",
				"qtpz_chengbenzhi":"程本直是青竹帮帮主程青竹之兄，布衣出身，因敬重袁崇焕，三次拜谒却不得，便投入袁督师部下，出力办事，终于得蒙督师见重，收为门生。后袁崇焕蒙蒙冤下狱，又遭凌迟毒刑。程本直不顾一切上书为袁公辩冤，只因言辞切直，被崇祯皇帝一同处死，死前要求葬于袁公墓旁，题铭：两条泼胆汉，一对痴心人。【CV：青灯折扇不语】",
				"qtpz_huatiegan":"花铁干在南四奇“落花流水”中排行第二，本是屡行善举的侠士，在南四奇一路追杀血刀老祖到藏边雪谷的过程中，意志逐渐瓦解，内心的丑恶也逐渐暴露。为求自保他弃械投降，并为了在恶劣的雪谷中生存下去，以结义兄弟的尸体为食。回到中原后沽名钓誉，谎骗江湖人士自己诛杀了血刀门的恶贼并被推举为盟主。【CV：临自灵】",
				"qtpz_xieyanke":"谢烟客隐居于摩天崖上，人称“摩天居士”。他曾经发布三枚玄铁令给有恩于自己的三个朋友，承诺他们可以此信物要求他做任何事情。前两枚均已使用，第三枚在巧合之下落到了小乞丐石破天的手中，为避免玄铁令落入坏人之手，他软磨硬泡逼石破天求他，无奈石破天性格高傲，令谢烟客煞为头疼。【CV：白】",
			    "qtpz_weixiaobao":"随母韦春花在扬州青楼丽春院长大，其生性嗜赌，油腔滑调。一次偶然事件，被江洋大盗茅十八带到北京，偶入皇宫，凭借三寸不烂之舌，屡次化险为夷，并在尔虞我诈的皇宫里平步青云，结识康熙帝，擒杀鳌拜，入天地会，奉命在五台山出家，平神龙岛，帮助索菲亚公主夺权，取得七位娇妻。【CV：神齐大叔】",
				"qtpz_ajiu":"阿九本是崇祯次女，封号长平公平，是青竹帮程青竹之徒，武艺高强。大明将亡之际，结识了帮助李自成起义的袁承志，恩怨情仇纵横交织，只恨自己不是平民儿女。大明将覆，国之将亡，崇祯逃亡之际，为使阿九免受义军凌辱，挥剑将她斩下一臂。后来削发为尼，法号九难，曾收陈圆圆之女阿珂、韦小宝为徒。【CV：水烟箩卜】",
				"qtpz_tianguinong":"田归农是李自成手下田姓护卫的后人，为关外天龙门北宗掌门。小有名气但没什么作为，为人阴险毒辣，为得到闯王宝藏的藏宝图，使用离间计令胡苗两家反目成仇并害死胡一刀。后又不折手段多次设计毒害苗人凤，对其严刑拷打。终被苗人凤废去一身武功后自尽。【CV：洛】",
				"qtpz_yuanchengzhi":"《碧血剑》男主角。明末蓟辽督师袁崇焕的遗孤，因崇祯听信谗错杀忠义先父而组建山宗，响应李自成起义。作为金蛇郎君夏雪宜传人，曾用《金蛇秘笈》中的功夫破解温家五老的五行阵。后为闯王立下大功，却不忍见越来越昏庸的闯王成为第二个崇祯，不愿与其同流合污，携众多部下远赴浡泥国海岛，赶走红毛賊后定居于此。【CV：稳得高处】",
				"qtpz_kasili":"《书剑恩仇录》中陈家洛的意中人。喀丝丽是新疆回部首领木卓伦的次女，红花会总舵主陈家洛的恋人，为回部公主。她是金庸笔下的第一美女，全身白衣如雪，宛若仙子下凡，令人不敢亵渎。天真烂漫，善良仁爱，纯洁无暇，是回民心中神圣的女神。她最大愿望是世间没有战火，族人永享太平，为了族人可以牺牲自己的幸福。【CV：桃子玥】",
				"qtpz_weihutou":"韦虎头是韦小宝与阿珂之子，着墨不多。清廷平定三藩之后，康熙论功行赏，以二等通吃伯韦小宝举荐大将，建立殊勋，甚可嘉尚，特晋爵为一等通吃伯，荫长子韦虎头为云骑尉。后韦小宝保荐施琅而立此大功，特此升韦小宝为二等通吃侯，加太子太保衔，长子韦虎头荫一等轻车都尉。【CV：仙女桥】",
				"qtpz_xuanye":"《鹿鼎记》男二号。少年康熙在练功房与假扮成小桂子的韦小宝相识而结为兄弟，对聪明机灵、单纯忠诚的小宝颇为信任和重用。康熙早期的劲敌为尚可喜、耿精忠和吴三桂这三大强藩，企图对当时的清朝分廷而治。知勇双全的康熙招降尚耿二藩之后，给予吴三桂重创；后收复宝岛台湾，创下“康乾盛世”。【CV：青灯折扇不语】",
				"qtpz_chenjinnan":"陈近南以玄天上帝信仰为掩护，成立秘密组织天地会。该会异姓结盟，拜天为父，拜地为母，从事反清复明的行动，成为让清廷头痛不已的秘密社会势力。小说中的陈近南身怀绝技凝血神爪，伤人之后可令人在 三天内血液慢慢凝固而后死去。为人忠厚任恕，即使一直效忠的郑家一直猜忌他甚至想杀了他，仍愚忠到底。【CV：】",
				"qtpz_songxiance":"宋献策，明朝末年永城人。曾为卜者，精于奇门遁甲及图谶等术，李自成信若神灵。后为李自成谋士、军师，曾编造谶言“十八子主神器”，助李自成商定谋略，被封为开国大军师。曾用占卜之术算出大顺政权岌岌可危，大顺政权灭亡之后，此人不知所踪。【CV：】",
				"qtpz_hufei":"胡斐出身武林世家，是李自成四大护卫之一胡姓护卫的后代。因田归农的算计，刚一出世就失去双亲，在店小二平阿四的仗义抚养下长在成人，并将胡家刀法发扬光大，恪守父志看守闯王宝藏。一生虽然没有作出惊天动地的大事，但品德端良，为人豪爽，仗义疏财，曾接应红花会。【CV：】",
				"qtpz_jianninggongzhu":"康熙的妹妹，其实身世可怜，母亲为神龙教潜入宫中卧底成为冒牌皇太后的毛东珠，生父不明。韦小宝的七位夫人之一，刁蛮泼辣、胆大妄为。虽贵为金枝玉叶却心理极为变态，施虐狂兼受虐狂，常常暴打韦小宝一顿转瞬间就跪在地上大叫“桂贝勒”。后康熙欲将其赐婚给吴三桂之子吴应熊，途中却和小宝厮混怀孕。【CV：泥泥】",
				"qtpz_pingasi":"平阿四本是沧州一家酒楼的店小二，因被当地恶霸欺负，胡一刀夫妇仗义疏财相救。后胡一刀和苗人凤在田归农的挑唆下决斗，胡一刀身死，田归农追杀其遗嗣胡斐，平阿四感激胡一刀的大恩而拼死相救，被田归农削下一臂。独自将胡斐养大成人并督促其习武为父报仇，是平民中侠义之士 。【CV：】",
				"qtpz_wenqinlai":"文泰来是反清帮会红经会的四当家，绰号奔雷手，武功极为高强，在红花会中是数一数二的高手，拳法刚猛。因为和于万亭一同探听到乾隆的身世秘密而遭到追捕，身陷牢笼。红花会倾巢相救，三番四次功败垂成。在密室被乾隆亲自审问，作为阶下囚，气势更胜身为九五至尊的乾隆皇帝。【CV：】",
			    "qtpz_hongniangzi":"李岩之妻。【CV：】",
			    "qtpz_diyun":"狄云是金庸小说中命运最悲惨的男主角，被万圭陷害锒铛入狱，被削断右手五指、穿琵琶骨。在狱中结识丁典，并在绝望自杀时得其相救，授其神照经和乌蚕衣。藏边雪谷误杀血刀老祖并获得其宝刀。经历重重磨难的他眼看着众人为抢夺财宝而葬身于江陵城南寺庙内，独自带着师妹女儿离去。【CV：临自灵】",
				"qtpz_fengjizhong":"风际中是《鹿鼎记》中的人物，是天地会青木堂的成员，在会中绝不起眼，给人留不下什么深刻印象。但是老实人要骗人最可怕，此人沉默寡言，一副老实模样，木头木脑的，但谁也不会想到，他竟然是康熙安排在天地会中的卧底，专门收集并通报会中的大小秘密。最后被双儿用火枪击杀。【CV：】",
				"qtpz_meiniansheng":"梅念笙是江南武林名宿，人称铁骨墨萼，绝学为神照功和连城剑法。他淡泊名利、心怀苍生，门下却出了三个叛徒。为了得到牵涉宝藏秘密的连城剑诀，三个叛徒竟密谋弑师，梅念笙心慈手软却被叛徒暗算，最后被丁典所救，梅念笙看丁典品性纯良，便将连城诀和神照经一起交给他。【CV：】",
				},   
				
				characterTitle:{
					"qtpz_liyuanzhi":"落影丶逝尘",
					"qtpz_wenqinlai":"落影丶逝尘",
					"qtpz_hongniangzi":"落影丶逝尘",
					"qtpz_diyun":"落影丶逝尘",
					"qtpz_fengjizhong":"落影丶逝尘",
					"qtpz_meiniansheng":"落影丶逝尘",
					"qtpz_songxiance":"落影丶逝尘",
					"qtpz_pingasi":"落影丶逝尘",
					"qtpz_hufei":"落影丶逝尘",
					"qtpz_jianninggongzhu":"落影丶逝尘",
					"qtpz_xieyanke":"落影丶逝尘",
					"qtpz_chenjinnan":"落影丶逝尘",
					"qtpz_xuanye":"落影丶逝尘",
					"qtpz_weihutou":"落影丶逝尘",
					"qtpz_weixiaobao":"落影丶逝尘",
					"qtpz_yuanchengzhi":"落影丶逝尘",
					"qtpz_yuanchengzhi":"落影丶逝尘",
					"qtpz_tianguinong":"落影丶逝尘",
					"qtpz_aqing":"朱阳光",
					"qtpz_kasili":"落影丶逝尘",
					"qtpz_huatiegan":"落影丶逝尘",
					"qtpz_yuyutong":"落影丶逝尘",
					"qtpz_ajiu":"落影丶逝尘",
					"qtpz_chengbenzhi":"落影丶逝尘",
					"qtpz_chenglingsu":"落影丶逝尘",
					"qtpz_liyan":"落影丶逝尘",
					"qtpz_miaorenfeng":"落影丶逝尘",
					"qtpz_haidafu":"落影丶逝尘",
					"qtpz_zhuyoujian":"落影丶逝尘",
					"qtpz_aobai":"落影丶逝尘",
					"qtpz_wuzixu":"落影丶逝尘",
					"qtpz_xuedaolaozhu":"落影丶逝尘",
				},
				
				perfectPair:{
			//"jyqxz_qtpz_genie":['jyqxz_qtpz_weizhuang'],
					},
                               
skill:{
	youlian:{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                usable:2,
                trigger:{
                    global:"loseEnd",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(player.hp>=player.maxHp){
            if(player.hasSkill('youlian_off')) return false;
        }
        return event.cards&&event.cards.length>1;
    },
                logTarget:function (event,player){
        return event.player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>=0;
    },
                content:function (){
        'step 0'
        trigger.player.draw();
        if(!player.hasSkill('youlian_off')){
            player.addTempSkill('youlian_off');
        }
        'step 1'
        var num=trigger.player.countCards('h');
        if(trigger.player.hp==num||trigger.player.maxHp==num) player.draw();
    },
            },
            "qtpz_tingxian":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
				audio:"ext:金庸群侠传:2",
                usable:2,
                enable:"phaseUse",
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        if(player.hp>=player.maxHp){
            if(player.hasSkill('qtpz_tingxian_off')) return false;
        }
        return true;
    },
                filterCard:true,
                selectCard:-1,
                discard:false,
                prepare:"give",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
        if(!player.hasSkill('qtpz_tingxian_off')){
            player.addTempSkill('qtpz_tingxian_off');
        }
        "step 1"
        target.showHandcards();
        "step 2"
        var suits=[],cardss=[],natures=[];
        var hs=target.getCards('h');
        for(var i=0;i<hs.length;i++){
            if(hs[i].name=='sha'&&player.canUse(hs[i],target,false)){
                if(!suits.contains(get.suit(hs[i]))&&!hs[i].nature){
                    suits.push(get.suit(hs[i]));
                    target.lose(hs[i]);
                    cardss.push(hs[i]);
                }
                else if(hs[i].nature){
                    if(!natures.contains(hs[i].nature)){
                        natures.push(hs[i].nature);
                        target.lose(hs[i]);
                        cardss.push(hs[i])
                    }
                }
            }
        }
        if(cardss.length){
            var content=['可以使用的杀',cardss];
            player.chooseControl('ok').set('dialog',content);
        }
        event.car=cardss;
        event.num=0;
        "step 3"
        if(event.car.length){
            if(player.canUse(event.car[event.num],target,false)){
                //target.$give(event.car[event.num],player);
                player.useCard(event.car[event.num],target);
            }    
        }
        "step 4"
        event.num++;
        if(event.num<event.car.length) event.goto(3);
        
    },
                ai:{
                    order:function (skill,player){
            return 1;
        },
                    result:{
                        target:function (player,target){
                if(player.countCards('h')>2) return 0;                
                return -target.countCards('h');
            },
                    },
                    threaten:0.8,
                },
            },
	"qtpz_hengdao":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"shaBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.getEquip(1);
    },
                content:function (){
                if(trigger.target.countCards('he')>0){
        player.discardPlayerCard(trigger.target,'he',true);
        }
        else{
        event.finish();
        }
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha') return [1,1];
            },
                    },
                },
            },
            qtpz_kuiyi:{
                unique:true,
                global:"qtpz_kuiyi2",
                zhuSkill:true,
            },
            "qtpz_kuiyi2":{
                audio:"ext:金庸群侠传:2",
                forceaudio:true,
                enable:"phaseUse",
                filter:function (event,player){
        if(player.group!='shu') return false;
        return game.hasPlayer(function(target){
            return target!=player&&target.hasZhuSkill('qtpz_kuiyi',player);
        });
    },
                filterTarget:function (card,player,target){
        return target!=player&&target.hasZhuSkill('qtpz_kuiyi',player);
    },
                usable:1,
                content:function (){                
                  event.card=get.cardPile(function(card){
                            return get.type(card)=='equip';
                        });
                        if(event.card){
                            target.equip(event.card,true).set('delay',true);                    
                        }        
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    expose:0.2,
                },
            },
            "qtpz_sheer1":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"loseEnd",
                },
                direct:true,
                filter:function (event,player){
        var playersss=false;
        if(event.getParent().name=='gain'){      
            if(playersss==false||playersss==undefined){
                if(event.getParent().player!=event.player){
                    playersss=event.getParent().player;
                }
            }
        }
        if(event.getParent(2).name=='discardPlayerCard'){
            if(event.getParent(2).player!=event.player){
                if(playersss==false||playersss==undefined) playersss=event.getParent(2).player;
            }  
        }
        if(event.getParent(2).name=='chooseToDiscard'){      
            if(playersss==false||playersss==undefined){
                if(event.getParent(3).player!=event.player){
                    playersss=event.getParent(3).player;
                }
            }
        }
        if(event.getParent().name=='discard'){      
            if(playersss==false||playersss==undefined){
                if(event.getParent(2).player!=event.player){
                    playersss=event.getParent(2).player;
                }
            }
        }
        if(event.getParent(3).name=='useCard'||event.getParent(3).name=='useSkill'){
            if(event.getParent(3).player!=event.player){
                if(playersss==false||playersss==undefined) playersss=event.getParent(3).player;            
            }        
        }
        if(playersss==false||playersss==undefined) return false;
        var subtype=[];
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e'){
                if(!subtype.contains(get.subtype(event.cards[i]))){
                    subtype.push(get.subtype(event.cards[i]));
                }
            }
        }
        for(var i=0;i<subtype.length;i++){
            var subtype2=subtype[i];
            if(player.storage.qtpz_sheer_map[subtype2].contains(event.player)) return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        event.playersss=false;
        if(trigger.getParent().name=='gain'){      
            if(event.playersss==false||event.playersss==undefined){
                if(trigger.getParent().player!=trigger.player){
                    event.playersss=trigger.getParent().player;
                }
            }
        }
        if(trigger.getParent(2).name=='discardPlayerCard'){
            if(trigger.getParent(2).player!=trigger.player){
                if(event.playersss==false||event.playersss==undefined) event.playersss=trigger.getParent(2).player;
            }  
        }
        if(trigger.getParent(2).name=='chooseToDiscard'){      
            if(event.playersss==false||event.playersss==undefined){
                if(trigger.getParent(3).player!=trigger.player){
                    event.playersss=trigger.getParent(3).player;
                }
            }
        }
        if(trigger.getParent().name=='discard'){      
            if(event.playersss==false||event.playersss==undefined){
                if(trigger.getParent(2).player!=trigger.player){
                    event.playersss=trigger.getParent(2).player;
                }
            }
        }
        if(trigger.getParent(3).name=='useCard'||trigger.getParent(3).name=='useSkill'){
            if(trigger.getParent(3).player!=trigger.player){
                if(event.playersss==false||event.playersss==undefined) event.playersss=trigger.getParent(3).player;            
            }        
        }
        event.subtype=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='e'){
                if(!event.subtype.contains(get.subtype(trigger.cards[i]))){
                    event.subtype.push(get.subtype(trigger.cards[i]));
                }
            }
        }
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i],get.subtype(list[i]),'栏'));
        }
        var str='<span style="color:#FF0000">设饵:是否选择一个已经记录【'+get.translation(trigger.player)+'】一个装备栏并且包含其此次触发失去装备的装备栏，然后【'+get.translation(event.playersss)+'】选择弃置两张牌或流失一体力</span>';
        player.chooseCardButton(list2,1,str).set('filterButton',function(button){
            var cards=button.link;
            var subtype=get.subtype(cards);
                if(event.subtype.contains(subtype)){
                    if(player.storage.qtpz_sheer_map[subtype].contains(trigger.player)) return true;
                }
            return false;
        }).set('ai',function(button){
            var cards=button.link;
            return -get.attitude(player,event.playersss);
        });
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_sheer',trigger.player);
            var cards=result.links[0];
            var subtype=get.subtype(cards);
            player.storage.qtpz_sheer_map[subtype].remove(trigger.player);
            game.log(player,'清除了设饵记录的',trigger.player,'的','#y'+get.subtype(cards),'栏');
            player.$throw(cards);
        }
        else{
            event.finish();
        }
        "step 2"
        event.playersss.chooseToDiscard(2).set('ai',function(card){
            if(card.name=='tao') return -10;
            if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
            return get.unuseful(card)+2.5*(5-get.owner(card).hp);
        });
        "step 3"
        if(result.bool==false){
            event.playersss.loseHp(1);
        }     
        
    },
            },
            "qtpz_sheer":{
                group:["qtpz_sheer1"],
                init:function (player,skill){
        if(player.storage.qtpz_sheer_map==undefined){
            player.storage.qtpz_sheer_map={
                equip1:[],
                equip2:[],
                equip3:[],
                equip4:[],
                equip5:[],
            };
        }
    },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filterCard:function (card){
        return true;
    },
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        for(var i=0;i<list.length;i++){
            var subtype=get.subtype(list[i]);
            if(!player.storage.qtpz_sheer_map[subtype].contains(target)) return true;
        }
        return false;
    },
                check:function (card){
        return 6-get.value(card);
    },
                content:function (){
        "step 0"
        event.ta=targets[0];
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i],get.subtype(list[i]),'栏'));
        }
        var str='<span style="color:#FF0000">设饵:选择记录【'+get.translation(event.ta)+'】一个装备栏?</span>';
        player.chooseCardButton(list2,1,str,true).set('filterButton',function(button){
            var cards=button.link;
            var subtype=get.subtype(cards);
            var map=event.ta;
            if(player.storage.qtpz_sheer_map[subtype].contains(map)) return false;
            return true;
        }).set('ai',function(button){
            var cards=button.link;
            if(event.ta.getEquip(cards)) return 1;
            return 0.1;
        });
        "step 1"
        if(result.bool){
            var cards=result.links[0];
            var subtype=get.subtype(cards);
            var map=event.ta;
            player.storage.qtpz_sheer_map[subtype].push(map);
            game.log(player,'记录了',event.ta,'的','#y'+get.subtype(cards),'栏');
            player.$throw(cards);
        }
    },
                ai:{
                    order:function (skill,player){
            return 1;
        },
                    result:{
                        target:function (player,target){
                return 1;
            },
                    },
                    threaten:0.8,
                },
            },
            "qtpz_diyuntishi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"loseEnd",
                },
                content:function (){
        game.log(trigger.getParent().name);
                game.log(trigger.getParent().skill);
                game.log(trigger.getParent().card);
        game.log(trigger.getParent().player);
                game.log('1');
                
                game.log(trigger.getParent(2).name);
                game.log(trigger.getParent(2).skill);
                game.log(trigger.getParent(2).card);
        game.log(trigger.getParent(2).player);
                game.log('2');
                
                game.log(trigger.getParent(3).name);
                game.log(trigger.getParent(3).skill);
                game.log(trigger.getParent(3).card);
        game.log(trigger.getParent(3).player);
                game.log('3');
                
                game.log(trigger.getParent(4).name);
                game.log(trigger.getParent(4).skill);
                game.log(trigger.getParent(4).card);
        game.log(trigger.getParent(4).player);
                game.log('4');
                
                game.log(trigger.getParent(5).name);
                game.log(trigger.getParent(5).skill);
                game.log(trigger.getParent(5).card);
        game.log(trigger.getParent(5).player);
                game.log('5');
                
                game.log(trigger.getParent(6).name);
                game.log(trigger.getParent(6).skill);
                game.log(trigger.getParent(6).card);
        game.log(trigger.getParent(6).player);
                game.log('6');
                
                game.log(trigger.getParent(7).name);
                game.log(trigger.getParent(7).skill);
                game.log(trigger.getParent(7).card);
        game.log(trigger.getParent(7).player);
                game.log('7');
                
                game.log(trigger.getParent(8).name);
                game.log(trigger.getParent(8).skill);
                game.log(trigger.getParent(8).card);
        game.log(trigger.getParent(8).player);
                game.log('8');
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
			"qtpz_jianshi":{
                group:"qtpz_jianshi_unbuff",
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
        if(get.number(trigger.card)%2==0){
            player.draw();         
        }
        else if(get.number(trigger.card)%2==1){
            player.addTempSkill('qtpz_jianshi_ji');           
        }
        else{
            player.draw();
            player.addTempSkill('qtpz_jianshi_ji');          
        }
    },
                subSkill:{
                    unbuff:{
                        trigger:{
                            player:"useCardAfter",
                            global:"phaseAfter",
                        },
                        priority:2,
                        filter:function (event,player){
                if(event.name=='useCard'&&player.hasSkill('qtpz_jianshi_ji')) return event.card&&event.card.name=='sha';
                return player.hasSkill('qtpz_jianshi_ji');
            },
                        forced:true,
                        popup:false,
                        content:function (){    
                player.removeSkill('qtpz_jianshi_ji');
            },
                        sub:true,
                    },
                    ji:{
                        mark:true,
                        marktext:"诗",
                        intro:{
                            content:"",
                        },
                        ai:{
                            unequip:true,
                            skillTagFilter:function (player,tag,arg){
                    if(arg&&arg.name=='sha') return true;
                    return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "qtpz_guazhan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget('是否发动【寡战】?<br>'+lib.translate.qtpz_guazhan_info+'',function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            var cards=_status.event.player.getCards('h');
            if(cards.length>2) return -1;
            for(var i=0;i<cards.length;i++){
                if(get.value(cards[i])>7||get.tag(cards[i],'recover')>=1) return -1;
            }
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_guazhan');
            var cards=player.getCards('h');
            player.discard(cards);
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            "qtpz_yizhen":{
                derivation:["qtpz_shenzhao"],
                audio:"ext:金庸群侠传:2",
                subSkill:{
                    count:{
                        trigger:{
                            player:"recoverBegin",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                if(player.storage.qtpz_yizhen) return false;
                if(!player.isDying()) return false;
                return true;
            },
                        content:function (){
                trigger.bingsi=true;
                if(trigger.source&&trigger.card.name=='tao'){
                    if(!player.storage.qtpz_yizhen_map.contains(trigger.source)){
                        player.storage.qtpz_yizhen_map.push(trigger.source);
                    }
                }
            },
                        sub:true,
                    },
                },
                group:["qtpz_yizhen_count"],
                trigger:{
                    player:"recoverAfter",
                },
                limited:true,
                init:function (player){
        player.storage.qtpz_yizhen=false;
        player.storage.qtpz_yizhen_map=[]; 
    },
                filter:function (event,player){
        if(player.storage.qtpz_yizhen) return false;
        if(player.storage.qtpz_yizhen_map.length==0) return false;
        if(player.isDying()) return false;
        return event.bingsi==true;
    },
                direct:true,
                skillAnimation:true,
                content:function (){
        "step 0"
        player.chooseTarget('是否发动【遗珍】?<br>'+lib.translate.qtpz_yizhen_info+'',function(card,player,target){
            return player.storage.qtpz_yizhen_map.contains(target);
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        "step 1"
        if(result.bool){    
            player.logSkill('qtpz_yizhen',result.targets);
            player.awakenSkill('qtpz_yizhen');
            player.storage.qtpz_yizhen=true;
            result.targets[0].addSkill('qtpz_shenzhao');
        }
        "step 2"
        player.storage.qtpz_yizhen_map=[];
    },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "qtpz_shenzhao":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        var hs=player.countCards('h');
        var hp=player.hp;
        if((hp-hs)>0) return true;
        return false;
    },
                content:function (){
        var hs=player.countCards('h');
        var hp=player.hp;
        if((hp-hs)>0) player.draw(hp-hs);
    },
            },
			"qtpz_diebao":{
				audio:"ext:金庸群侠传:2",
                group:["qtpz_diebao1"],
                trigger:{
                    global:["discardPlayerCardBegin","gainPlayerCardBegin"],
                },
                direct:true,
                filter:function (event,player){
        return event.player!=event.target&&!event.directresult;
    },
                content:function (){
        'step 0'
        var str='谍报:是否选择代替<span style="color:#FF0000">【'+get.translation(trigger.target)+'】</span>失去的牌';
        player.choosePlayerCard(trigger.target,str,trigger.selectButton,trigger.position,'visible').set('ai',function(button){
            var att1=get.attitude(player,trigger.target);
            var att2=get.attitude(player,trigger.player);
            if(trigger.name=='discardPlayerCard'&&att1<0) return get.value(button.link)
            if(trigger.name=='discardPlayerCard'&&att1>0) return -get.value(button.link)
            if(trigger.name=='gainPlayerCard'&&att2>0&&att1<0) return get.value(button.link)
            if(trigger.name=='gainPlayerCard'&&att2<0&&att1>0) return -get.value(button.link)
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('qtpz_diebao',trigger.target);
            trigger.directresult=result.links.slice(0);
            trigger.untrigger();
        }
    },
            },
            "qtpz_diebao1":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"judgeBegin",
                },
                frequent:true,
                filter:function (){
        return ui.cardPile.childNodes.length>1;
    },
                check:function (){
        return false;
    },
                content:function (){
        'step 0'
        var str='';
        if(trigger.card) str=get.translation(trigger.card.viewAs||trigger.card.name);
        else if(trigger.skill) str=get.translation(trigger.skill);
        else str=get.translation(trigger.parent.name);
        var cards=get.cards(2);
        event.cardss=cards;

        var att=get.attitude(player,trigger.player);
        var delta=trigger.judge(event.cardss[1])-trigger.judge(event.cardss[0]);
        player.chooseControl('调换顺序','cancel2',
        ui.create.dialog('谍报：'+get.translation(trigger.player)+'的'+str+'判定',event.cardss,'hidden')).ai=function(){
            if(att*delta>0) return '调换顺序';
            else return 'cancel2';
        };
        'step 1'
        if(result.control=='调换顺序'){
            ui.cardPile.insertBefore(event.cardss[0],ui.cardPile.firstChild);
            ui.cardPile.insertBefore(event.cardss[1],ui.cardPile.firstChild);
            game.log(player,'#y调换了牌堆顶两张牌的顺序');
        }
        else {
            ui.cardPile.insertBefore(event.cardss[1],ui.cardPile.firstChild);
            ui.cardPile.insertBefore(event.cardss[0],ui.cardPile.firstChild);   
            game.log(player,'#y观看牌堆顶两张牌');
        }
    },
                ai:{
                    expose:0.1,
                    tag:{
                        rejudge:0.5,
                    },
                },
            },
            "qtpz_jibian":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCardEnd",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
        if(!event.cards) return false;
        if(!player.countCards('h',{color:'red'})) return false;
        if(event.player==player) return false;
        if(get.color(event.card)!='red') return false;
        if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                 return player.canUse(event.card,current);
             })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var next=player.chooseCard(1,'h','是否选择一张牌红色手牌交给'+get.translation(trigger.player)+'然后你立即使用'+get.translation(trigger.card)+'？',function(card,player){
            return get.color(card)=='red';
        });
        var att=get.attitude(_status.event.player,trigger.player);
        next.ai=function(card){
            var pl=_status.event.player;
            if(att>0) {
                var eff=game.hasPlayer(function(current){
                    return get.effect(current,trigger.card,pl,pl)>0&&pl.canUse(trigger.card,current);
                });
                if(eff) return 1;          
            }
            if(att<=0) {           
                var eff=game.hasPlayer(function(current){
                    return get.effect(current,trigger.card,pl,pl)>0&&pl.canUse(trigger.card,current);
                });
                if(eff) return 3-get.value(card);         
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_jibian',trigger.player);
            player.line(trigger.player,'green');
            trigger.player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.player);
            player.chooseUseTarget(trigger.card);
            game.delay(0.7);
        }
        else{
            game.delay(0.7);
            event.finish();
        }
    },
                ai:{
                    threaten:2,
                },
            },
			"qtpz_qingying":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                priority:-5,
                filter:function (event,player){
        if(event.card.name!='sha') return false;
        if(event.player==player) return false;
        if(_status.currentPhase!=event.player) return false;
        return player.countCards('h')>0;
    },
                check:function (event,player){
            return get.attitude(player,event.player)>0;
    },
                direct:true,
                content:function (){
        "step 0"
        event.usesha=false;
        var translation=get.translation(trigger.player);
        var translation2=get.translation(trigger.card);
        var next=player.chooseToDiscard(1,'h','请缨:是否弃置一张牌？<br><li>若弃置的牌为<span style="color:#FF0000">红色</span>则'+translation+'的'+translation2+'不计入出杀次数。<br><li>若弃置的牌为<span style="color:#FF00FF">黑色</span>则'+translation+'的'+translation2+'可以额外指定一个目标。',function(card,player){
            return true;
        });
        var att=get.attitude(_status.event.player,trigger.player);
        var pl=trigger.player;
        next.ai=function(card){
            if(att>0) {
                if(get.color(card)=='red'){
                    if(pl.getStat().card.sha==1&&pl.hasSha()) return 4-get.value(card);
                }
                if(get.color(card)=='black'){
                    var eff=game.hasPlayer(function(current){
                        return get.effect(current,trigger.card,pl,pl)>0&&pl.canUse(trigger.card,current)&&!trigger.targets.contains(current);
                    });
                    if(eff) return 6-get.value(card);
                }
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_qingying',trigger.player);
            if(get.color(result.cards[0])=='red'){
                if(_status.currentPhase==trigger.player&&trigger.player.getStat().card.sha>0){
                    trigger.player.getStat().card.sha--;
                    game.log(trigger.player,'#y使用的',trigger.card,'不计入出杀次数');
                }
            }
            else if(get.color(result.cards[0])=='black'){
                event.usesha=true;
                game.log(trigger.player,'#y使用的',trigger.card,'可以额外指定一个目标');
            }
        }
        else{
            event.finish();        
        }
        "step 2"
        if(event.usesha==true){
            trigger.player.chooseTarget('请缨:是否为'+get.translation(trigger.card)+'额外指定一个目标?',function(card,player,target){
                return !_status.event.source.contains(target)&&trigger.player.canUse(trigger.card,target);
            }).set('source',trigger.targets).set('ai',function(target){
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
        game.log(event.target,'#y额外成为了'+get.translation(trigger.card)+'的目标');
        trigger.targets.push(event.target);
    },
            },
            "qtpz_jingguo":{
                mod:{
                    maxHandcard:function (player,num){
           if(player.countCards('e')>0) return num+player.countCards('e');        
        },
                },
                group:"qtpz_jingguo_gain",
                subSkill:{
                    gain:{
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                var list=[];
                for(var i=1;i<=5;i++){
                    if(!player.getEquip(i)){
                        var equips=get.cardPile(function(card){
                            return get.subtype(card)=='equip'+i;
                        });
                        if(equips) list.push(equips);
                    }                 
                }
                if(event.getParent().name=='wugu'){
                    return get.type(event.cards[0])!='equip'&&list.length>0;
                }
                return false;
            },
                        content:function (){
                "step 0"
                var list=[];
                for(var i=1;i<=5;i++){
                    if(!player.getEquip(i)){
                        var equips=get.cardPile(function(card){
                            return get.subtype(card)=='equip'+i;
                        });
                        if(equips) list.push(equips);
                    }                
                }
                if(list.length>0){
                    player.equip(list.randomGet(),true).set('delay',true);
                }
                else{             
                    player.popup('无装备牌');
                    game.log('牌堆无装备牌');             
                }
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"useCard",
                },
				audio:"ext:金庸群侠传:2",
                forced:true,
                priority:5,
                filter:function (event,player){
        if(event.card.name!='wugu') return false;
        if(!event.targets.contains(player)) return false;
        if(event.targets[0]==player) return false;
        return true;
    },
                content:function (){
        trigger.targets.remove(player);
        trigger.targets.unshift(player);
    },
            },
			"qtpz_benlei":{
                subSkill:{
                    sha:{
                        trigger:{
                            player:"useCardBegin",
                        },
                        forced:true,
                        filter:function (event){
                if(event.card.name=='sha'){
                    if(!event.cards&&event.card.nature=='thunder') return false;
                    return true;
                }
                return false;
            },
                        content:function (){
                if(trigger.cards){
                    player.lose(trigger.cards);            
                    trigger.cards=[];
                    trigger.cards.length=0
                }
                trigger.card={name:'sha',nature:'thunder'}
            },
                        sub:true,
                    },
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player.canCompare(target);
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){
            player.addTempSkill('qtpz_benlei_sha');
        }
    },
                ai:{
                    order:function (name,player){
            return get.order({name:'sha'})-1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h','sha')>0) return 0.6;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
            },
                        target:function (player,target){
                var num=target.countCards('h');
                if(num==1) return -1;
                if(num==2) return -0.7;
                return -0.5
            },
                    },
                    threaten:1.3,
                },
            },
            "qtpz_jiahuo":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"chooseCardBegin",
                },
                filter:function (event,player){
        if(event.player!=player&&event.player.countCards('h')) return event.type=='compare'&&!event.directresult;
        return false;
    },
                direct:true,
                delay:0,
                content:function (){
        'step 0'
        var str='贾祸:是否选择<span style="color:#FF0000">【'+get.translation(trigger.player)+'】</span>一张手牌作为其拼点牌';
        player.choosePlayerCard(trigger.player,str,1,'h','visible').set('ai',function(button){
            var att2=get.attitude(player,trigger.player);
            if(att2<0&&get.number(button.link)<=7) return get.value(button.link);
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('qtpz_jiahuo',trigger.player);
            trigger.directresult=result.links.slice(0);
            trigger.untrigger();
            event.usesha=true;
        }
        'step 2'
        if(event.usesha){
            trigger.player.chooseToUse({name:'sha'},player,-1,'贾祸：是否对'+get.translation(player)+'使用一张杀').set('targetRequired',true);
        }
    },
            },
            "qtpz_yisui":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"loseHpEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                logTarget:function (event,player){
        return event.player;
    },
                filter:function (event,player){
        return (event.num>0)&&event.player!=player;
    },
                content:function (){
        var num=trigger.num;
        if(num>0){
            trigger.player.draw(num);
            player.draw(num);         
        }
    },
            },
	"qtpz_duanbi":{
                audio:"ext:金庸群侠传:2",
                unique:true,
                trigger:{
                    global:"dying",
                },
                mark:true,
                skillAnimation:true,
                animationStr:"断臂",
                animationColor:"fire",
                init:function (player){
        player.storage.qtpz_duanbi=false;
    },
                prompt:function (event,player){
        return '【断臂】:是否对<span style="color:#FF0000">【'+get.translation(event.player)+'】</span>发动【断臂】?';
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                priority:2,
                filter:function (event,player){
        if(!event.player.isDying()) return false;
        if(player.storage.lose_pos_equip&&player.storage.lose_pos_equip.length>=5) return false;
        return !player.storage.qtpz_duanbi;
    },
                content:function (){
        "step 0"
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i],get.subtype(list[i]),'栏'));
        }
        var str='<span style="color:#FF0000">选择废除至多两个装备栏令【'+get.translation(trigger.player)+'】回复等量体力</span>';
        player.chooseCardButton(list2,[1,2],str,true).set('filterButton',function(button){
            var cards=button.link;
            if(player.storage.lose_pos_equip==undefined) return true;
            if(player.storage.lose_pos_equip&&!player.storage.lose_pos_equip.contains(get.subtype(cards))) return true;
            return false;
        }).set('ai',function(button){
            var cards=button.link;
            if(!player.getEquip(cards)) return 1;
            return -1;
        });
        "step 1"
        if(result.bool){
            var card=[];
            for(var i=0;i<result.links.length;i++){
                var cards=result.links[i];
                card.push(cards);
                player.lose_pos_equip(get.subtype(cards));
            }
            player.$throw(card);
            player.line(trigger.player,'green');
            trigger.player.recover(result.links.length);
            player.storage.qtpz_duanbi=true;
            player.storage.qtpz_yusi=trigger.player;
            player.awakenSkill('qtpz_duanbi');
        }
        
    },
                intro:{
                    content:"limited",
                },
            },
            "qtpz_yusi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseDrawBegin",
                },
                forced:true,
                filter:function (event,player){
        if(!player.storage.lose_pos_equip||player.storage.lose_pos_equip.length<1) return false;
        return player.storage.qtpz_yusi&&player.storage.qtpz_yusi==event.player;
    },
                content:function (){
        player.line(trigger.player,'green');
        trigger.num+=player.storage.lose_pos_equip.length;
    },
            },
            "qtpz_duwu":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                prompt:function (event,player){
        return '【督武】:是否对<span style="color:#FF0000">【'+get.translation(event.player)+'】</span>发动【督武】?';
    },
                filter:function (event,player){
        if(event.player==player) return false;
        return event.player.countUsed('sha')==0;
    },
                content:function (){    
        'step 0'
        trigger.player.draw();
        'step 1'
        var gained=result[0];
        trigger.player.showCards(gained,'督武');
        if(gained.name=='sha'){
            if(game.hasPlayer(function(current){
                return trigger.player.canUse(gained,current);
            })){
                var next=trigger.player.chooseToUse();
                next.filterCard=function(card){
                    return card==gained;
                };
                next.prompt='是否使用'+get.translation(gained)+'？';
            }
        }
        else{
            event.finish();
        }
    },
                ai:{
                    threaten:1,
                },
            },
	"qtpz_yaoji":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
        if(player.storage.qtpz_yaoji.length>0){
            return true;
        }
        return false;       
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseCardButton(get.prompt('qtpz_yaoji'),player.storage.qtpz_yaoji,1,'选择一张因使用而进入弃牌堆的牌置于牌堆顶').set('filterButton',function(button){
            return get.position(button.link)=='d'
        }).set('ai',function(button){
            return get.value(button.link);
        });
        'step 1'
        if(result.bool){
            player.logSkill('qtpz_yaoji');
            ui.cardPile.insertBefore(result.buttons[0].link,ui.cardPile.firstChild);
        }
        player.storage.qtpz_yaoji=[];
    },
                group:["qtpz_yaoji_count"],
                subSkill:{
                    count:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.cards) return true;
                return false;           
            },
                        content:function (){
                for(var i=0;i<trigger.cards.length;i++){
                    if(get.position(trigger.cards[i])=='d'&&!player.storage.qtpz_yaoji.contains(trigger.cards[i])){
                        player.storage.qtpz_yaoji.push(trigger.cards[i]);
                    }
                }
            },
                        sub:true,
                    },
                },
                init:function (player){
        player.storage.qtpz_yaoji=[];
    },
            },
            "qtpz_fuluan":{
                 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBeginStart",
                },
                frequent:true,
                content:function (){
        'step 0'
        var car=get.cards(1);
        event.cards=car;
        event.ca=car.slice(0);  
        player.showCards(event.cards,'扶乩');
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
        player.chooseCardButton('扶乩：选择要移动的牌',event.cards).set('filterButton',function(button){
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
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
        'step 5'
        var use=false;
        var cardss={name:event.ca[0].name};
        var info=get.info(cardss);
        if(get.type(cardss)!='equip'&&!info.notarget&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return player.canUse(cardss,current);;
            })){
                use=true;
            }
        }      
        if(use){
        var next=player.chooseCardTarget({
            position:'h',
            filterCard:function (card){
                if(game.hasPlayer(function(current){
                    var cardax={name:event.ca[0].name,suit:card.suit,number:card.number};
                    return player.canUse(cardax,current);
                })){
                    return true;
                }
                return false;
            },
            selectTarget:function(card,target){
                var cardss={name:event.ca[0].name};
                var info=get.info(cardss);
                return info.selectTarget;
            },
            filterTarget:function(card,player,target){
                var player=_status.event.player;
                var cardaa=ui.selected.cards[0];
                var cardax=game.createCard(event.ca[0].name,cardaa.suit,cardaa.number,event.ca[0].nature);
                return player.canUse(cardax,target);//lib.filter.filterTarget(cardax,player,target);
            },
            ai1:function(card){
                if(event.ca[0].name=='du') return -1;
                return 7-get.value(card);
            },
            ai2:function(target){
                var cardaa=ui.selected.cards[0];
                var cardax=game.createCard(event.ca[0].name,cardaa.suit,cardaa.number,event.ca[0].nature);
                var player=_status.event.player;
                return get.effect(target,cardax,player,player);
            },
            prompt:'是否选择一张手牌当'+get.translation(event.ca[0])+'使用？',
        });
            }
        else{
            event.finish();
        }
        'step 6'
        if(result.bool){
            event.cardssss=result.cards;
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        'step 7'
        if(event.targets){
            var cardss={name:event.ca[0].name,nature:event.ca[0].nature};
            player.useCard(cardss,event.targets,event.cardssss);
            event.finish();
        }
        else{
            event.finish();
        }
    },
                ai:{
                    guanxing:true,
                },
            },
	"qtpz_weizhao":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
        if(event.parent.name=='qtpz_weizhao') return false;
        if(get.type(event.card)!='delay') return false;
        if(!event.targets||event.targets.length!=1) return false;
        var list=get.inpile('delay');
        for(var i=0;i<list.length;i++){
            if(event.card.name!=list[i]&&!event.targets[0].hasJudge(list[i])){
                return true;
            }      
        }
        return false;
    },
                content:function (){
        'step 0'
        var list=[];
        var list2=get.inpile('delay');
        for(var i=0;i<list2.length;i++){
            if(trigger.card.name!=list2[i]&&!trigger.targets[0].hasJudge(list2[i])){
                list.push(list2[i]);
            }      
        }
        for(var i=0;i<list.length;i++){
            list[i]=['锦囊','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张你要转化延时的锦囊牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog).set('ai',function(button){
            var card=game.createCard(button.link[2],trigger.card.suit,trigger.card.number,trigger.card.nature);
            var eff=get.effect(trigger.targets[0],trigger.card,_status.event.player,_status.event.player);
            return get.effect(trigger.targets[0],card,_status.event.player,_status.event.player)-eff;
        });
        'step 1'
        if(result.bool){
            trigger.cancel();
            player.logSkill('qtpz_weizhao',trigger.targets[0]);
            trigger.player.useCard({name:result.buttons[0].link[2]},trigger.targets[0],trigger.cards);
        }
    },
                ai:{
                    expose:0.8,
                },
            },
            "qtpz_yunie":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        var list=get.inpile('trick');
        for(var i=0;i<list.length;i++){
            if(game.hasPlayer(function(current){
                var card={name:list[i]};
                return player.canUse(card,current);
            })){
                return true;
            }
        }
        return false;
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        //if(!target.countCards('hej')) return false;
        return true;
    },
                selectTarget:1,
                content:function (){
        "step 0"
        event.target=targets[0];
        "step 1"
        var list=[];
        var list2=get.inpile('trick');
        for(var i=0;i<list2.length;i++){
            if(game.hasPlayer(function(current){
                var card={name:list2[i]};
                return player.canUse(card,current);
            })){
                list.push(list2[i]);
            }
        }
        for(var i=0;i<list.length;i++){
            list[i]=['锦囊','',list[i]];
        }
        var dialog=ui.create.dialog('请声明一张锦囊牌',[list,'vcard'],'hidden');
        event.target.chooseButton(dialog,true).set('ai',function(button){
            var att=get.attitude(event.target,player);
            var card={name:button.link[2]};
            var value=get.value(card);
            if(att>0) return value;
            if(att<=0) return -value;
        });
        "step 2"
        if(result.bool){
            event.name=result.buttons[0].link[2];
            event.cardf=game.createCard(event.name,get.type(event.name),'');
            event.target.showCards(get.translation(event.target)+'声明了'+get.translation(event.name),event.cardf);
            game.delay(2);
            var next=player.chooseCardTarget({
                position:'h',
                filterCard:function (card,player){
                    if(game.hasPlayer(function(current){
                        var cardax=game.createCard(event.name,card.suit,card.number);
                        return player.canUse(cardax,current);
                    })){
                        return true;
                    }
                    return false;
                },
                selectTarget:function(card,player,target){
                    var carde={name:event.name};
                    var info=get.info(carde);
                    return info.selectTarget;
                },
                filterTarget:function(card,player,target){
                    var player=_status.event.player;
                    var cardaa=ui.selected.cards[0];
                    var cardax=game.createCard(event.name,cardaa.suit,cardaa.number);
                    return player.canUse(cardax,target);//lib.filter.filterTarget(cardax,player,target);
                },
                ai1:function(card){
                    var att=get.attitude(player,event.target);
                    var guohe={name:'guohe'};
                    var eff=get.effect(event.target,guohe,player,player);
                    if(eff>0&&event.target.countDiscardableCards(player,'hej')) return -1;
                    var cardc={name:event.name};
                    if(att>0&&event.target.countDiscardableCards(player,'hej')) return get.value(cardc)-get.value(card)+1;
                    return get.value(cardc)-get.value(card);
                },
                ai2:function(target){
                    var cardaa=ui.selected.cards[0];
                    var cardax=game.createCard(event.name,cardaa.suit,cardaa.number);
                    var player=_status.event.player;
                    return get.effect(target,cardax,player,player);
                },
                prompt:'是否选择一张手牌当'+get.translation(event.cardf)+'使用并令'+get.translation(event.target)+'摸一张牌？否则你弃置'+get.translation(event.target)+'区域里的一张牌。',
            });
        }
        else{
            event.finish();
        }   
        "step 3"
        if(result.bool){
            event.result=result.cards;
            if(!event.isMine()) game.delayx();
            event.targetsss=result.targets;
        }
        else{
            if(event.target.countDiscardableCards(player,'hej')){
                player.discardPlayerCard('hej',event.target,true);
            }
        }
        "step 4"
        if(event.targetsss){
            var cardss={name:event.name};
            player.useCard(cardss,event.targetsss,event.result);
            event.target.draw();
        }
        else{
            event.finish();
        }   
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 3;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                    return 1.6;
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    threaten:1,
                },
            },
	"qtpz_anming":{
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                },
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"equipEnd",
                },
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('qtpz_anming_off')) return false;
        if(get.subtype(event.card)!='equip1') return false;
        return true;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('qtpz_anming'),[1,2],function(card,player,target){
            return get.distance(trigger.player,target,'attack')<=1;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('qtpz_anming',result.targets);
            game.asyncDraw(result.targets);
            if(!player.hasSkill('qtpz_anming_off')){
                player.addTempSkill('qtpz_anming_off','roundStart');
            }
        }
    },
            },
            "qtpz_zangbao":{
                group:["qtpz_zangbao1"],
                init:function (player){
        player.storage.qtpz_zangbao=[];
    },
                intro:{
                    content:"cards",
                },
                trigger:{
                    player:"phaseBefore",
                },
                filter:function (event,player){
        var numej=game.countPlayer(function(current){
            if(current.countCards('ej')){
                var ej=current.getCards('ej');
                for(var i=0;i<ej.length;i++){
                if(get.color(ej[i])=='red') return true;
            }
            return false; 
            }
        });
        if(numej>0) return true;
        return false;
    },
                direct:true,
                content:function (){
          'step 0'
        player.chooseTarget(get.prompt('qtpz_zangbao'),function(card,player,target){
            var ej=target.getCards('ej');
            for(var i=0;i<ej.length;i++){
                if(get.color(ej[i])=='red') return true;
            }
            return false;
        }).set('ai',function(target){
            var att1=get.attitude(player,target);
            var jj=false,ee=false;
            var e=target.getCards('e');
            var j=target.getCards('j');
            for(var i=0;i<j.length;i++){
                if(get.color(j[i])=='red'&&jj==false) jj=true;
            }
            for(var i=0;i<e.length;i++){
                if(get.color(e[i])=='red'&&ee==false) ee=true;
            }
            if(att1>0&&jj==true) return 1.1;
            if(att1<=0&&ee==true) return 1;
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('qtpz_zangbao',result.targets);
            event.target=result.targets[0];
            var skr='选择一张红色牌置于牌堆任意前七张';
            player.choosePlayerCard(event.target,1,'ej',true).set('filterButton',function(button){
                if(get.color(button.link)!='red') return false;
                return true;
            }).set('ai',function(button){
                var att1=get.attitude(player,event.target);               
                if(att1<=0){
                    if(get.position(button.link)=='e') return 1;
                    return 0.01;
                }
                if(att1>0){
                    if(get.position(button.link)=='j') return 1;
                    return 0.01;
                }
                return -1;
            }); 
        }
        else{
            event.finish();
        }
        'step 2'
        if(result&&result.links&&result.links.length){
            game.delay(2);
            event.card=result.links.slice(0);
            event.cardsss=result.links;
            //event.target.lose(result.links[0],ui.special);
            if(!player.storage.qtpz_zangbao.contains(event.card[0])){
                player.storage.qtpz_zangbao.push(event.card[0]);
                player.syncStorage('qtpz_zangbao');
                player.markSkill('qtpz_zangbao');
            }
        }
        else{
            event.finish();
        }
        'step 3'
        var controls=['一','二','三','四','五','六','七'];
        var str='将'+get.translation(event.card)+'置于牌堆第X张(X为你选择的数字)';
        var dialog=ui.create.dialog(str,'hidden');
        dialog.add(event.card);   
        player.chooseControl(controls,dialog).ai=function(){
           return '二';
        };
        'step 4'
        var num;
        switch(result.control){
            case '一':num=1;break;
            case '二':num=2;break;
            case '三':num=3;break;
            case '四':num=4;break;
            case '五':num=5;break;
            case '六':num=6;break;
            case '七':num=7;break;
        }
        event.num1=num-1;
        event.num2=num;
         'step 5'
         event.cards=get.cards(7);
         'step 6'     
        for(var i=event.cards.length-1;i>=0;i--){
            if(i==event.num1){
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                ui.cardPile.insertBefore(event.cardsss[0],ui.cardPile.firstChild);
                player.showCards(event.card[0],'宝藏:<br>置于牌堆顶第'+event.num2+'张');
                game.delay(2);
            }
            else{
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
            }
        }
    },
            },
            "qtpz_zangbao1":{
                trigger:{
                    global:"phaseDrawEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                forced:true,
                filter:function (event,player){
       if(!event.cards||!event.cards.length) return false;
       for(var i=0;i<event.cards.length;i++){
            if(player.storage.qtpz_zangbao.contains(event.cards[i])){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        "step 1"
        for(var i=0;i<trigger.cards.length;i++){
            if(player.storage.qtpz_zangbao.contains(trigger.cards[i])){
                player.storage.qtpz_zangbao.remove(trigger.cards[i]);
                player.syncStorage('qtpz_zangbao');
                player.markSkill('qtpz_zangbao');
                trigger.player.showCards(trigger.cards[i],'宝藏');
                if(get.suit(trigger.cards[i])=='heart'){
                    if(trigger.player.isDamaged()) trigger.player.recover();
                }
                else if(get.suit(trigger.cards[i])=='diamond'){
                    trigger.player.draw(2);
                }
                game.delay(2);
            }
        }
    },
            },
            "qtpz_shouxian":{
                audio:"ext:金庸群侠传:2",
                group:["qtpz_shouxian_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('qtpz_shouxian');
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:["phaseEnd"],
                },
                filter:function (event,player){
       if(event.player==player) return false;
       if(event.player.group!='wei') return false;
       return true;
    },
                direct:true,
                zhuSkill:true,
                content:function (){
        "step 0"
        trigger.player.chooseBool('是否展示牌堆的两张并将其中的装备牌置于'+get.translation(player)+'装备区？然后将其余的牌置于牌堆顶或弃置之').set('ai',function(){                                
            if(get.attitude(trigger.player,player)>0) return true; 
            return false;
        }); 
        "step 1"
        if(result.bool){
            trigger.player.logSkill('qtpz_shouxian',player);
            var carr=get.cards(2);
            event.cards=carr;
            trigger.player.showCards(event.cards,'守险');
        }
        else{
            event.finish();
        }  
        "step 2"
          event.equip=[];
         for(var i=0;i<event.cards.length;i++){
            if(get.type(event.cards[i])=='equip'&&!player.getEquip(get.subtype(event.cards[i]))){
                event.equip.push(event.cards[i]);
                player.equip(event.cards[i]);
            }
        }
        for(var i=0;i<event.equip.length;i++){
            event.cards.remove(event.equip[i]);
        }
        "step 3"
       if(event.cards.length) trigger.player.chooseCardButton(event.cards,'将顺序将牌置于牌堆顶（先选择的在上）或置于弃牌堆',event.cards.length);
        "step 4"
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
    },
            },
	"qtpz_ningxue":{
				audio:"ext:金庸群侠传:2",
                group:["qtpz_ningxue_miss","qtpz_ningxue_damage"],
                subSkill:{
                    miss:{
                        trigger:{
                            player:"shaMiss",
                        },
                        priority:-1,
                        filter:function (event){
                if(!event.target.hasSkill('qtpz_ningxue_basic')) return true;
                return false;
            },
                        check:function (event,player){
                return get.attitude(player,event.target)<0;
            },
                        content:function (){
                if(!trigger.target.hasSkill('qtpz_ningxue_basic')) trigger.target.addTempSkill('qtpz_ningxue_basic',{player:'phaseEnd'});            
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            player:"shaDamage",
                        },
                        priority:-1,
                        filter:function (event){
                if(!event.target.hasSkill('qtpz_ningxue_trick')) return true;
                return false;
            },
                        check:function (event,player){
                return get.attitude(player,event.target)<0;
            },
                        content:function (){
                if(!trigger.target.hasSkill('qtpz_ningxue_trick')) trigger.target.addTempSkill('qtpz_ningxue_trick',{player:'phaseEnd'});            
            },
                        sub:true,
                    },
                    trick:{
                        mark:true,
                        marktext:"锦",
                        intro:{
                            content:"不能使用锦囊牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&(type=='trick'||type=='delay')) return false;                   
                },
                            cardUsable:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&(type=='trick'||type=='delay')) return false;                   
                },
                            cardSavable:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&(type=='trick'||type=='delay')) return false;                   
                },
                            targetInRange:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&(type=='trick'||type=='delay')) return false;                   
                },
                        },
                        sub:true,
                    },
                    basic:{
                        mark:true,
                        marktext:"基",
                        intro:{
                            content:"不能使用基本牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&type=='basic') return false;                   
                },
                            cardUsable:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&type=='basic') return false;                   
                },
                            cardSavable:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&type=='basic') return false;                   
                },
                            targetInRange:function (card,player){
                    var type=get.type(card);
                    if(_status.currentPhase==player&&type=='basic') return false;                   
                },
                        },
                        sub:true,
                    },
                },
            },
            "qtpz_zhongsu":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.source)>0;
    },
                filter:function (event,player){
        if(!event.source) return false;
        return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
    },
                content:function (){
        trigger.source.gain(trigger.cards);
        trigger.source.$gain2(trigger.cards);
        player.draw();
    },
            },
	"qtpz_zhengfan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        if(!player.countCards('he')) return false; 
        if(!event.source||event.source==player) return false;
        if(!event.source.countDiscardableCards(player,'e')) return false;
        return event.card&&event.card.name=='sha';
    },
                direct:true,
                content:function (){
    "step 0"
    var next=player.chooseToDiscard(1,'he','是否弃置一张牌弃置'+get.translation(trigger.source)+'装备区的一张牌？',function(card,player){
        return true;
    });
    var att=get.attitude(_status.event.player,trigger.source);
    next.ai=function(card,player){
        if(att>0) {
            return -1;
        }
        if(player.hasSkill('qtpz_fujiang')) 9-get.value(card);
        return  6-get.value(card);
    };
    "step 1"
    if(result.bool){
        player.logSkill('qtpz_zhengfan',trigger.source);
        player.discardPlayerCard('e',trigger.source,true);
    }
    },
            },
            "qtpz_fujiang":{
				audio:"ext:金庸群侠传:2",
                group:"qtpz_fujiang1",
                init:function (player){
        player.storage.qtpz_fujiang=[];
    },
                ondisable:true,
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                player.$throw(storage);
                player.storage.qtpz_fujiang.length=0;
                game.log(player,'移去了"疆"');
            }
        },
                },               
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(event.parent.name!='discard') return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        event.cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.position(trigger.cards[i])=='d'){
                event.cards.push(trigger.cards[i]);
                ui.special.appendChild(trigger.cards[i]);
            }
        }
        "step 1"
        if(event.cards.length){
            if(player.storage.qtpz_fujiang==undefined) player.storage.qtpz_fujiang=[];
            player.storage.qtpz_fujiang=player.storage.qtpz_fujiang.concat(event.cards);
            player.syncStorage('qtpz_fujiang');
            player.markSkill('qtpz_fujiang');
            game.log(player,'将',event.cards,'置于武将牌上作为“疆”');
        }
        else{
            event.finish();
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'discard')){
                    return [1,0.6];
                }
            },
                    },
                },
            },
            "qtpz_fujiang1":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"loseAfter",
                },
                filter:function (event,player){
        if(!player.storage.qtpz_fujiang||player.storage.qtpz_fujiang.length==0) return false;
        var num=player.getHandcardLimit()-player.countCards('h');
        if(num>0) return true;
        return false;
    },
                content:function (player){
        "step 0"
        if(player.storage.qtpz_fujiang){
            var num=player.getHandcardLimit()-player.countCards('h');
            if(player.storage.qtpz_fujiang.length<=num){
                event.directresult=player.storage.qtpz_fujiang.slice(0);
            }
            else{
                player.chooseCardButton('选择获得'+num+'张“疆”',num,player.storage.qtpz_fujiang,true).set('ai',get.buttonValue);
            }
        }
        else{
            event.finish();
        }
        "step 1"
        if(event.directresult||result.bool){
            //player.logSkill('qtpz_fujiang');
            var links=event.directresult||result.links;
            for(var i=0;i<links.length;i++){
                player.storage.qtpz_fujiang.remove(links[i]);
            }
            player.syncStorage('qtpz_fujiang');
            if(!player.storage.qtpz_fujiang.length){
                player.unmarkSkill('qtpz_fujiang');
            }
            else{
                player.markSkill('qtpz_fujiang');
            }
            //player.$throw(links);
           // game.log(player,'获得了',links);
            player.gain(links,'gain2');
        }
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
            },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
            if(tag=='noh'){
                if(!player.storage.qtpz_fujiang||player.storage.qtpz_fujiang.length==0) return false;
                var num=player.getHandcardLimit()-player.countCards('h');
                if(num!=0) return false;
            }
        },
                },
            },
            "qtpz_shengshi":{
                group:["qtpz_shengshi_remove"],
                subSkill:{
                    off:{
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('qtpz_shengshi');
            },
                        sub:true,
                    },
                },
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"loseEnd",
                },
                unique:true,
                zhuSkill:true,
                filter:function (event,player){
        if(player.hasSkill('qtpz_shengshi_off')) return false;
        if(!player.hasSkill('qtpz_fujiang')) return false;
        if(!player.hasZhuSkill('qtpz_shengshi')) return false;
        if(event.parent.name!='discard') return false;
        if(event.player==player||event.player.group!='wei') return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        event.cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.position(trigger.cards[i])=='d'){
                event.cards.push(trigger.cards[i]);
                ui.special.appendChild(trigger.cards[i]);
            }
        }
        "step 1"
        if(event.cards.length){
            var str='将其中一张'+get.translation(event.cards)+'置于'+get.translation(player)+'的武将牌上称为"疆"？';
            trigger.player.chooseCardButton(get.prompt('qtpz_shengshi'),event.cards,1,str).set('filterButton',function(button){
                return true;
            }).set('ai',function(button){
                var att=get.attitude(trigger.player,player);
                if(att>0){
                    return get.value(button.link);
                }
                else{
                    return -1;
                }             
            });
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            var links=result.links;
            trigger.player.logSkill('qtpz_shengshi',player);
            if(player.storage.qtpz_fujiang==undefined) player.storage.qtpz_fujiang=[];
            player.storage.qtpz_fujiang=player.storage.qtpz_fujiang.concat(links);
            player.syncStorage('qtpz_fujiang');
            player.markSkill('qtpz_fujiang');
            player.addTempSkill('qtpz_shengshi_off');
            game.log(trigger.player,'将',links,'置于'+get.translation(player)+'武将牌上作为“疆”');
            for(var i=0;i<event.cards.length;i++){
                if(!links.contains(event.cards[i])){
                    event.cards[i].discard();
                }
            }
        }
        else{
            for(var i=0;i<event.cards.length;i++){
                event.cards[i].discard();
            }                
        }
    },
            },
	 "qtpz_fuyin":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDrawBefore",
                },
                check:function (event,player){
       if(event.num>3) return false;
        return true;
    },
                content:function (){
        "step 0"
        trigger.cancel();
        "step 1"
        var str='请声明大或小';
        var controls=['大','小'];
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control!='大'){
            event.controlxiao=true;
            game.log(player,'声明了小');
            player.popup(result.control);
        }
        else{
            event.controlda=true;
            game.log(player,'声明了大');
            player.popup(result.control);
        }
        "step 3"
        event.cardss=get.cards(7);
        event.cards=event.cardss.slice(0);
        event.cardsss=event.cardss.slice(0);
        "step 4"
        player.showCards(event.cards);
        "step 5"
         event.num7=false;
         event.dayu7=[];
         event.xiaoyu7=[];
         event.show=event.cardss.slice(0);
         for(var e=0;e<event.cards.length;e++){
             if(event.cards[e].number==7){
                 if(event.num7==false) event.num7=true;
             }
             else if(event.cards[e].number>7){
                 event.dayu7.push(event.cards[e]);
             }
             else if(event.cards[e].number<7){
                 event.xiaoyu7.push(event.cards[e]);
             }
        }
        "step 6"
        event.dialog=ui.create.dialog('hidden');
        event.dialog.add('父荫:展示的牌');
        event.dialog.add(event.show);
        if(event.num7==true){
            event.dialog.add('因"父荫"展示的牌有点数为7能获得的牌');
            event.dialog.add(event.cardsss);
        }
        else if(event.controlda==true&&event.dayu7.length>0){
            event.dialog.add('父荫:因声明大能获得的牌');
            event.dialog.add(event.dayu7);
            if(event.xiaoyu7.length>0){
                event.dialog.add('父荫:置回牌堆顶的牌');      
                event.dialog.add(event.xiaoyu7);                 
            }     
        }
        else if(event.controlxiao==true&&event.xiaoyu7.length>0){
            event.dialog.add('父荫:因声明小能获得的牌');
            event.dialog.add(event.xiaoyu7);     
            if(event.dayu7.length>0){
                event.dialog.add('父荫:置回牌堆顶的牌');        
                event.dialog.add(event.dayu7);       
            }
        }
        else {
            var skr;
            if(event.controlxiao==true) skr='父荫:因声明小没有符合的牌而置回牌堆顶的牌';
            if(event.controlda==true) skr='父荫:因声明大没有符合的牌而置回牌堆顶的牌';
            event.dialog.add(skr);
            event.dialog.add(event.cardsss);
        }
        var dialogs=event.dialog;
        player.chooseControl('ok').set('dialog',dialogs);
        "step 7"
        if(event.num7==true){
            player.gain(event.cards,'gain2');
        }
        else if(event.controlda==true&&event.dayu7.length>0){
            player.gain(event.dayu7,'gain2');
            if(event.xiaoyu7.length>0){
                for(var i=event.cards.length-1;i>=0;i--){
                    if(event.xiaoyu7.contains(event.cards[i])){
                        ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                    }
                }
                game.log(player,'将',event.xiaoyu7,'置回了牌堆顶');
            }     
        }
        else if(event.controlxiao==true&&event.xiaoyu7.length>0){
            player.gain(event.xiaoyu7,'gain2');
            if(event.dayu7.length>0){
                for(var i=event.cards.length-1;i>=0;i--){
                    if(event.dayu7.contains(event.cards[i])){
                        ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                    }
                } 
                game.log(player,'将',event.dayu7,'置回了牌堆顶');
            }     
        }
        else{
            for(var i=event.cards.length-1;i>=0;i--){
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
            }
            game.log(player,'将',event.cards,'置回了牌堆顶');
        }
    },
            },
            "qtpz_mengtong":{
                group:"qtpz_mengtong_after",
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                    after:{
                        trigger:{
                            global:"judgeAfter",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                return player.storage.qtpz_mengtong;
            },
                        content:function (){
               //game.log(player,'还原了',player.storage.qtpz_mengtong); 
               delete player.storage.qtpz_mengtong.蒙童;
               delete player.storage.qtpz_mengtong;      
            },
                        sub:true,
                    },
                    "heart2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='heart') return 'heart';
                },
                        },
                        sub:true,
                    },
                    "diamond2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='diamond') return 'diamond';
                },
                        },
                        sub:true,
                    },
                    "club2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='club') return 'club';
                },
                        },
                        sub:true,
                    },
                    "spade2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.qtpz_mengtong==true&&suit!='spade') return 'spade';
                },
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"judge",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(player.hasSkill('qtpz_mengtong_off')) return false; 
        return true;
    },
                direct:true,
                content:function (){
        "step 0"
        var str=get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('qtpz_mengtong');
        player.chooseControl('heart2','diamond2','club2','spade2','取消').set('prompt',str).set('ai',function(){
            //return '取消';
            var judging=_status.event.judging;
            var cardh={name:judging.name,suit:"heart",number:judging.number};
            var cardd={name:judging.name,suit:"diamond",number:judging.number};
            var cardc={name:judging.name,suit:"club",number:judging.number};
            var cards={name:judging.name,suit:"spade",number:judging.number};
            var resulth=trigger.judge(cardh)-trigger.judge(judging);
            var resultd=trigger.judge(cardd)-trigger.judge(judging);
            var resultc=trigger.judge(cardc)-trigger.judge(judging);
            var results=trigger.judge(cards)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||(resulth==0&&resultd==0&&resultc==0&&results==0)) return '取消';
            if(attitude>0){
                 if(resulth>0){
                     if(resulth>=resultd&&resulth>=resultc&&resulth>=results) return 'heart2';
                 }
                 else if(resultd>0){
                     if(resultd>=resulth&&resultd>=resultc&&resultd>=results) return 'diamond2';    
                 }
                 else if(resultc>0){
                     if(resultc>=resulth&&resultc>=resultd&&resultc>=results) return 'club2';    
                 }
                 else if(results>0){
                     if(results>=resulth&&results>=resultd&&results>=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
            if(attitude<0){
                 if(resulth<0){
                     if(resulth<=resultd&&resulth<=resultc&&resulth<=results) return 'heart2';
                 }
                 else if(resultd<0){
                     if(resultd<=resulth&&resultd<=resultc&&resultd<=results) return 'diamond2';    
                 }
                 else if(resultc<0){
                     if(resultc<=resulth&&resultc<=resultd&&resultc<=results) return 'club2';    
                 }
                 else if(results<0){
                     if(results<=resulth&&results<=resultd&&results<=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.control&&result.control!='取消'){
            if(player.storage.qtpz_mengtong){
                delete player.storage.qtpz_mengtong.蒙童;
                delete player.storage.qtpz_mengtong;         
            }
            if(trigger.player.hasSkill('qtpz_mengtong_heart2')) trigger.player.removeSkill('qtpz_mengtong_heart2');
            if(trigger.player.hasSkill('qtpz_mengtong_diamond2')) trigger.player.removeSkill('qtpz_mengtong_diamond2');
            if(trigger.player.hasSkill('qtpz_mengtong_club2')) trigger.player.removeSkill('qtpz_mengtong_club2');
            if(trigger.player.hasSkill('qtpz_mengtong_spade2')) trigger.player.removeSkill('qtpz_mengtong_spade2');
            trigger.player.judging[0].qtpz_mengtong=true;
            player.logSkill('qtpz_mengtong',trigger.player);
            player.line(trigger.player);
            player.popup(result.control);
            game.log(player,'将判定结果改为了','#y'+result.control);
            if(!trigger.player.hasSkill('qtpz_mengtong_'+result.control)) trigger.player.addTempSkill('qtpz_mengtong_'+result.control,'judgeAfter');
            player.storage.qtpz_mengtong=trigger.player.judging[0];
            if(!player.hasSkill('qtpz_mengtong_off')){
                player.addTempSkill('qtpz_mengtong_off','roundStart');
            }
        }
        else{
            event.finish();
        }
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            /*"测试蒙童":{
                group:"蒙童_after",
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                    after:{
                        trigger:{
                            global:"judgeAfter",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                return player.storage.蒙童;
            },
                        content:function (){
              // game.log(player,'还原了',player.storage.蒙童); 
               delete player.storage.蒙童.蒙童;
               delete player.storage.蒙童;      
            },
                        sub:true,
                    },
                    "heart2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='heart') return 'heart';
                },
                        },
                        sub:true,
                    },
                    "diamond2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='diamond') return 'diamond';
                },
                        },
                        sub:true,
                    },
                    "club2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='club') return 'club';
                },
                        },
                        sub:true,
                    },
                    "spade2":{
                        mod:{
                            suit:function (card,suit){
                    if(card.蒙童==true&&suit!='spade') return 'spade';
                },
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
      //  if(player.hasSkill('蒙童_off')) return false; 
        return true;
    },
                direct:true,
                content:function (){
        "step 0"
        var str=get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('蒙童');
        player.chooseControl('heart2','diamond2','club2','spade2','取消').set('prompt',str).set('ai',function(){
            //return '取消';
            var judging=_status.event.judging;
            var cardh={name:judging.name,suit:"heart",number:judging.number};
            var cardd={name:judging.name,suit:"diamond",number:judging.number};
            var cardc={name:judging.name,suit:"club",number:judging.number};
            var cards={name:judging.name,suit:"spade",number:judging.number};
            var resulth=trigger.judge(cardh)-trigger.judge(judging);
            var resultd=trigger.judge(cardd)-trigger.judge(judging);
            var resultc=trigger.judge(cardc)-trigger.judge(judging);
            var results=trigger.judge(cards)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||(resulth==0&&resultd==0&&resultc==0&&results==0)) return '取消';
            if(attitude>0){
                 if(resulth>0){
                     if(resulth>=resultd&&resulth>=resultc&&resulth>=results) return 'heart2';
                 }
                 else if(resultd>0){
                     if(resultd>=resulth&&resultd>=resultc&&resultd>=results) return 'diamond2';    
                 }
                 else if(resultc>0){
                     if(resultc>=resulth&&resultc>=resultd&&resultc>=results) return 'club2';    
                 }
                 else if(results>0){
                     if(results>=resulth&&results>=resultd&&results>=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
            if(attitude<0){
                 if(resulth<0){
                     if(resulth<=resultd&&resulth<=resultc&&resulth<=results) return 'heart2';
                 }
                 else if(resultd<0){
                     if(resultd<=resulth&&resultd<=resultc&&resultd<=results) return 'diamond2';    
                 }
                 else if(resultc<0){
                     if(resultc<=resulth&&resultc<=resultd&&resultc<=results) return 'club2';    
                 }
                 else if(results<0){
                     if(results<=resulth&&results<=resultd&&results<=resultc) return 'spade2';    
                 }
                 else return '取消';
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.control&&result.control!='取消'){
            if(player.storage.蒙童){
                delete player.storage.蒙童.蒙童;
                delete player.storage.蒙童;         
            }
            if(trigger.player.hasSkill('蒙童_heart2')) trigger.player.removeSkill('蒙童_heart2');
            if(trigger.player.hasSkill('蒙童_diamond2')) trigger.player.removeSkill('蒙童_diamond2');
            if(trigger.player.hasSkill('蒙童_club2')) trigger.player.removeSkill('蒙童_club2');
            if(trigger.player.hasSkill('蒙童_spade2')) trigger.player.removeSkill('蒙童_spade2');
            trigger.player.judging[0].蒙童=true;
            player.logSkill('蒙童',trigger.player);
            player.line(trigger.player);
            player.popup(result.control);
            game.log(player,'将判定结果改为了','#y'+result.control);
            if(!trigger.player.hasSkill('蒙童_'+result.control)) trigger.player.addTempSkill('蒙童_'+result.control,'judgeAfter');
            player.storage.蒙童=trigger.player.judging[0];
            if(!player.hasSkill('蒙童_off')){
                player.addTempSkill('蒙童_off','roundStart');
            }
        }
        else{
            event.finish();
        }
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },*/
	"qtpz_yabao":{
		audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                check:function (card){
        return 8-get.value(card);
    },
                filter:function (event,player){
        return player.countCards('h',{number:[5,6,7,8,9]})>0;
    },
                filterTarget:function (card,player,target){
        return target.countCards('h')>0&&target!=player;
    },
                filterCard:function (card,player,target){
        return card.number>=5&&card.number<=9;
    },
                selectCard:1,
                selectTarget:[1,4],
                multitarget:true,
                discard:false,
                lose:false,
                content:function (){
        "step 0"
        event.plcard=cards.slice(0);
      //  game.log(event.plcard[0].number);
        event.allnumber=[];
        event.tar=targets;
        event.da=[];
        event.xiao=[];
        event.num1=0;
        event.show=[];
        "step 1"
        if(event.num1<event.tar.length){
            event.tar[event.num1].chooseCard('h',1,'押宝：选择一张手牌当"押宝"牌',true).set('ai',function(card){
                return -get.value(card);
            });
        }
        "step 2"
        if(result.bool){
            var care=result.cards.slice(0);
           // event.tar[event.num1].showCards(result.cards[0]);
            event.show.push(care);
          //  game.log(care[0].number);
            if(!event.allnumber.contains(care[0].number)){
                event.allnumber.push(care[0].number);
            } 
            if(event.plcard[0].number<care[0].number){
                event.da.push(care);
            }
            if(event.plcard[0].number>care[0].number){
                event.xiao.push(care);
            }
            event.num1++;
            if(event.num1<event.tar.length) event.goto(1);
        }
        "step 3"
        player.chooseControl('大','小',function(event,player){
            if(event.number>=7) return '小';
            if(event.number<7) return '大';
            return '小';
        });
        "step 4"
        if(result.control!='大'){
            event.controlxiao=true;
            game.log(player,'声明了小');
        }
        else{
            event.controlda=true;
            game.log(player,'声明了大');
        }
        "step 5"
        player.showCards(event.plcard);
        for(var i=0;i<event.tar.length;i++){
            event.tar[i].showCards(event.show[i]);
        }
        "step 6"
        event.dialog=ui.create.dialog('hidden');
        event.dialog.add(get.translation(player)+'的"押宝"牌');
        event.dialog.add(event.plcard);
        event.dialog.add('押宝:其他角色的"押宝"牌');
        for(var i=0;i<event.tar.length;i++){
            event.dialog.add(get.translation(event.tar[i])+'的"押宝"的牌');
            event.dialog.add(event.show[i]);
        }
        if(event.allnumber.contains(event.plcard[0].number)){
            event.dialog.add('因有其他角色"押宝"牌点数等于你的"押宝"牌'+get.translation(event.plcard[0])+'点数能获得的"押宝"牌');
            for(var i=0;i<event.tar.length;i++){
                event.dialog.add(event.show[i]);
            }
        }
        else if(event.controlda==true&&event.da.length>0){
            event.dialog.add('你的"押宝"牌'+get.translation(event.plcard[0])+'因押大能获得的"押宝"牌');
            for(var i=0;i<event.tar.length;i++){
                if(event.da.contains(event.show[i])){
                    event.dialog.add(event.show[i]);
                }
            }     
        }
        else if(event.controlxiao==true&&event.xiao.length>0){
            event.dialog.add('你的"押宝"牌'+get.translation(event.plcard[0])+'因押小能获得的"押宝"牌');
            for(var i=0;i<event.tar.length;i++){
                if(event.xiao.contains(event.show[i])){
                    event.dialog.add(event.show[i]);
                }
            }     
        }
        var dialogs=event.dialog;
        player.chooseControl('ok').set('dialog',dialogs);
        "step 7"
        if(event.allnumber.contains(event.plcard[0].number)){
            for(var i=0;i<event.tar.length;i++){
                player.gain(event.show[i],event.tar[i]);
                event.tar[i].$give(event.show[i],player);
            }
        }
        else if(event.controlda==true&&event.da.length>0){
            for(var i=0;i<event.tar.length;i++){
                if(event.da.contains(event.show[i])){
                    player.gain(event.show[i],event.tar[i]);
                    event.tar[i].$give(event.show[i],player);
                }
            }     
        }
        else if(event.controlxiao==true&&event.xiao.length>0){
            for(var i=0;i<event.tar.length;i++){
                if(event.xiao.contains(event.show[i])){
                    player.gain(event.show[i],event.tar[i]);
                    event.tar[i].$give(event.show[i],player);
                }
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
            "qtpz_qiaoshe1":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                trigger:{
                    global:"dying",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(att>0) return true;
        return false;
    },
                filter:function (event,player){
        if(player.hasSkill('qtpz_qiaoshe1_off')) return false;
        if(!event.player.hasZhuSkill('qtpz_qiaoshe')) return false;
        if(player.group!='wei') return false;
        if(event.player==player) return false;
        return true;
    },
                content:function (){
        'step 0'
		game.playJY(['qtpz_qiaoshe1','qtpz_qiaoshe2'].randomGet());
        player.addTempSkill('qtpz_qiaoshe1_off','dyingAfter');
        event.cards=get.cards(7);
        player.showCards(event.cards,'巧舌');
        'step 1'
        var skr='是否使用其中一张【酒】或【桃】';
        trigger.player.chooseCardButton(event.cards,1,skr).set('filterButton',function(button){
            var cards=button.link;
            return (cards.name=='jiu'||cards.name=='tao')&&trigger.player.canUse(cards,trigger.player);
        }).set('ai',function(button){
            return 1;
        });
        'step 2'
          if(result.bool){
              trigger.player.useCard(result.links[0],trigger.player);
              for(var i=event.cards.length-1;i>=0;i--){
                  if(result.links[0]!=event.cards[i]){
                      ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                  }
              }
          }
          else{
              for(var i=event.cards.length-1;i>=0;i--){
                  ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
              }
          }   
    },
            },
            "qtpz_qiaoshe":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                zhuSkill:true,
                popup:false,
                forced:true,
                unique:true,
                filter:function (event,player){
        return player.identity!='zhu';
    },
                content:function (){
        player.removeSkill('qtpz_qiaoshe');
    },
                global:"qtpz_qiaoshe1",
            },
	/*"破阵":{
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.player.getEquip(2)!=undefined;
    },
                content:function (){
        var cardss=trigger.player.getEquip(2);
        trigger.player.discard(cardss);
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },*/
            "qtpz_dangkou":{
                group:["qtpz_dangkou_use","qtpz_dangkou_damage"],
                subSkill:{
                    off:{
                        sub:true,
                    },
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.card.name=='wuxie') return false;
                if(player.hasSkill('qtpz_dangkou_off')) return false;
                return get.type(event.card)=='trick';
            },
                        content:function (){
                trigger.candiscard=true;
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function (event,player){
                if(player.hasSkill('qtpz_dangkou_off')) return false;
                return event.getParent(2).candiscard==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                trigger.getParent(2).candiscard=false;
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"useCardAfter",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(event.card.name=='wuxie') return false;
        if(player.hasSkill('qtpz_dangkou_off')) return false;
        return event.candiscard==true;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget([1,2],get.prompt('qtpz_dangkou'),function(card,player,target){
            return target.countCards('h')&&trigger.targets.contains(target);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_dangkou',result.targets);
            event.targets=result.targets
            player.addTempSkill('qtpz_dangkou_off');
            if(result.targets.length==1){
                player.discardPlayerCard(event.targets[0],'h',true);
            }
            else{
                player.discardPlayerCard(event.targets[0],'h',true);
                player.discardPlayerCard(event.targets[1],'h',true);
            }
        }
        else{
            event.finish();
        }
   
    },
            },
            "qtpz_jiangmen":{
                group:["qtpz_jiangmen_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
				game.playJY(['qtpz_jiangmen1','qtpz_jiangmen2'].randomGet());			
                player.removeSkill('qtpz_jiangmen');
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"phaseUseBegin",
                },
				audio:"ext:金庸群侠传:2",
                zhuSkill:true,
                filter:function (event,player){
       var num1=event.player.countCards('h',{type:'trick'});
       var num2=event.player.countCards('h',{type:'delay'});
       if(num1+num2==0) return false;
       if(event.player.group!='wu') return false;
       if(event.player==player) return false;
       return true;
    },
                direct:true,
                content:function (){
        "step 0"
        var next=trigger.player.chooseCard(1,'h','是否选择一张锦囊牌交给'+get.translation(player)+'?然后你摸一张牌。',function(card,player){
            return get.type(card)=='trick'||get.type(card)=='delay';
        });
        var att1=get.attitude(trigger.player,player);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return 4-get.value(card);
        };
        "step 1"
        if(result.bool){
            trigger.player.logSkill('qtpz_jiangmen',player);
            trigger.player.line(player,'green');
            player.gain(result.cards[0],trigger.player);
            trigger.player.$give(result.cards.length,player);
            trigger.player.draw();     
        }
    },
            },
            "qtpz_pozhen":{
                init:function (player){
        player.storage.qtpz_pozhen=[];
    },
                trigger:{
                    source:"damageEnd",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.getParent(2).targets.length==1;
    },
                direct:true,
                content:function (){
          'step 0'
          event.pl=player;
          event.tar=trigger.player;
          if(!player.storage.qtpz_pozhen.contains(trigger.player)){
              player.storage.qtpz_pozhen.push(trigger.player);
          }
          'step 1'
          event.tar.chooseTarget(get.prompt('qtpz_pozhen'),function(card,player,target){
            if(event.pl.storage.qtpz_pozhen.contains(target)) return false;
            return lib.filter.targetEnabled2(trigger.card,event.pl,target)&&get.distance(event.pl,target,'attack')<=1;
        }).set('ai',function(target){
              var card=trigger.card;
            return get.effect(target,trigger.card,event.tar,event.tar);
        });
          
          
        'step 2'
        if(result.bool){
            trigger.player.logSkill('qtpz_pozhen',player);
            event.target=result.targets[0];
            trigger.player.line(event.target,'green');
        }
        else{
            player.storage.qtpz_pozhen=[];
            event.finish();
        }
        'step 3'
        if(event.target){
            player.useCard(trigger.card,event.target);
        }
    },
                group:["qtpz_pozhen_miss"],
                subSkill:{
                    miss:{
                        trigger:{
                            player:"shaMiss",
                        },
                        priority:2,
                        filter:function (event,player){
                return player.storage.qtpz_pozhen.length>0;
            },
                        forced:true,
                        popup:false,
                        content:function (){ 
				game.playJY(['qtpz_pozhen1','qtpz_pozhen2'].randomGet());		
                player.storage.qtpz_pozhen=[];
            },
                        sub:true,
                    },
                },
            },
	 "qtpz_tieling":{
                subSkill:{
                    on:{
                        mark:true,
                        marktext:"令",
                        init:function (player){
                player.storage.qtpz_tieling_on=1;
                player.markSkill('qtpz_tieling_on');
                player.syncStorage('qtpz_tieling_on');
            },
                        intro:{
                            content:"玄铁令",
                        },
                        sub:true,
                    },
                },
                init:function (player){
        player.storage.qtpz_tieling=false;
        player.storage.qtpz_tielingnum=0;
    },
                trigger:{
                    global:"phaseUseBegin",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(event.player.hasSkill('qtpz_tieling_on')) return false;
        if(player==event.player) return false;
        return !player.storage.qtpz_tieling;
    },
                direct:true,
                content:function (){
         "step 0"
        trigger.player.chooseBool('是否令'+get.translation(player)+'回复一体力或摸两张牌，然后你获得玄铁令').set('ai',function(){                                
            if(get.attitude(trigger.player,player)>0) return true;                     
            return false;
        }); 
        "step 1"
        if(result.bool){
            trigger.player.line(player,'green');
            trigger.player.logSkill('qtpz_tieling',player);
            player.storage.qtpz_tielingnum++;
            player.syncStorage('qtpz_tieling');
            player.updateMarks('qtpz_tieling');
            if(!trigger.player.hasSkill('qtpz_tieling_on')){
                trigger.player.addSkill('qtpz_tieling_on');
            }
            else{
                trigger.player.storage.qtpz_tieling_on++;
                trigger.player.markSkill('qtpz_tieling_on');
                trigger.player.syncStorage('qtpz_tieling_on');
            }
            if(player.storage.qtpz_tielingnum>=3){
                player.awakenSkill('qtpz_tieling');
                player.storage.qtpz_tieling=true;
                player.unmarkSkill('qtpz_tieling');
            }
        }
        else{
            event.finish();
        } 
        "step 2"
        if(!player.isDamaged()){
            player.draw(2);
            event.finish();
        }
        "step 3"
        player.chooseControl('回血','摸牌',function(event,player){
            return '回血';
        });
        "step 4"
        if(result.control=='回血'){
            player.recover();
        }
        else{
            player.draw(2);
        }
    },
            },
            "qtpz_jieyou":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:5,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
        return event.player.hasSkill('qtpz_tieling_on')&&get.color(event.card)=='black';
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(!player.hasSkill('qtpz_tieling_on')) return;
                if(get.color(card)=='black') return 'zeroplayertarget';
            },
                    },
                },
            },
            "qtpz_sunuo1":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        if(target==player) return false;
        if(!target.hasSkill('qtpz_sunuo')) return false;
        var controls=[];
        if(target.countCards('e')>0&&!target.hasSkill('qtpz_sunuo_yi')){
            controls.push('选项一');
        }
        var numm=0;
        var list2=['wuzhong','wugu','taoyuan','juedou','huogong','tiesuo','guohe','shunshou','wanjian','nanman'];
        for(var i=0;i<list2.length;i++){
            if(game.hasPlayer(function(current){
                var card={name:list2[i]};
                return target.canUse(card,current);
            })){
                numm++
            }
        }
        if(target.countCards('h')>0&&!target.hasSkill('qtpz_sunuo_er')&&numm>0){
            controls.push('选项二');
        }
        if(game.countPlayer()>=3&&!target.hasSkill('qtpz_sunuo_san')){
            controls.push('选项三');
        }
        if(controls.length>0) return true;
        return false;
    },
                filter:function (event,player){
     //   if(player.hasSkill('qtpz_sunuo')) return false;
        if(!player.hasSkill('qtpz_tieling_on')) return false;
        if(player.storage.qtpz_tieling_on<1) return false;
        var list1=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_sunuo')&&current!=player&&game.countPlayer()>=3;
        }).sortBySeat();
        var list2=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_sunuo')&&current!=player&&current.countCards('h')>0;
        }).sortBySeat();
        var list3=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_sunuo')&&current!=player&&current.countCards('e')>0;
        }).sortBySeat();
        if(list1||list2||list3) return true;
        return false;
    },
                content:function (){
        "step 0" 
        event.tar=targets[0];
        "step 1" 
        var controls=[];
        event.on1='<br><br><div class="text">选项一:获得'+get.translation(event.tar)+'装备区里的一张牌</div>';
        event.on2='<br><br><div class="text">选项二:令'+get.translation(event.tar)+'将一张手牌当你声明的牌使用</div>';
        event.on3='<br><br><div class="text">选项三:令'+get.translation(event.tar)+'对你选择的一名其他角色造成一点伤害</div>';
        if(event.tar.countCards('e')>0&&!event.tar.hasSkill('qtpz_sunuo_yi')){
            controls.push('选项一');
        }
        if(event.tar.countCards('h')>0&&!event.tar.hasSkill('qtpz_sunuo_er')){
            controls.push('选项二');
        }
        if(game.countPlayer()>=3&&!event.tar.hasSkill('qtpz_sunuo_san')){
            controls.push('选项三');
        }
        var str='请选择一项'+event.on1+''+event.on2+''+event.on3+'';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control){
            player.popup(result.control);
            player.storage.qtpz_tieling_on--;
            player.markSkill('qtpz_tieling_on');
            player.syncStorage('qtpz_tieling_on');
            game.log(player,'选择了',result.control);
            if(result.control=='选项一'){
                event.tar.addSkill('qtpz_sunuo_yi');
                player.gainPlayerCard(event.tar,true,'e');
                event.finish();
            }
            if(result.control=='选项二'){
                event.tar.addSkill('qtpz_sunuo_er');
                event.goto(3);
            }
            if(result.control=='选项三'){
                event.tar.addSkill('qtpz_sunuo_san');
                event.goto(8);
            }
        }
        "step 3"
        var list2=[];
        var list1=['wuzhong','wugu','taoyuan','juedou','huogong','tiesuo','guohe','shunshou','wanjian','nanman'];
        for(var i=0;i<list1.length;i++){
            if(game.hasPlayer(function(current){
                var card={name:list1[i]};
                return event.tar.canUse(card,current);
            })){
                list2.push(list1[i]);
            }
        }
        for(var i=0;i<list2.length;i++){
            list2[i]=['锦囊','',list2[i]];
        }
        var dialog=ui.create.dialog('选择一张的锦囊牌',[list2,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            return Math.random();
        });
        "step 4"
        if(result.bool){
            event.namename=result.buttons[0].link[2];
            event.cardcard={name:event.namename};
        }
        "step 5"
        var next=event.tar.chooseCardTarget({
            position:'h',
            filterCard:function (card,player){
                return true;
            },
            selectTarget:function(card,player,target){
                var info=get.info(event.cardcard);
                return info.selectTarget;
            },
            filterTarget:function(card,player,target){
                return event.tar.canUse(event.cardcard,target);//lib.filter.filterTarget(cardax,player,target);
            },
            ai1:function(card){
                return 20-get.value(card);
            },
            ai2:function(target){
                return 1;
            },
            forced:true,
            prompt:'选择一张手牌当'+get.translation(event.cardcard)+'使用。',
        });
         "step 6"
        if(result.bool){
            event.cardssss=result.cards;
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        "step 7"
        if(event.targets.length>0){
            var tats=[];
            var cardss=game.createCard(event.namename,event.cardssss.suit,event.cardssss.number);
            for(var i=0;i<event.targets.length;i++){
                var ttaraaa=event.targets[i];
                if(event.tar.canUse(cardss,ttaraaa)){
                    tats.push(ttaraaa);
                }
            }
            if(tats.length>0){
                event.tar.useCard({name:event.namename},tats,event.cardssss);
                event.finish();
            }      
            else{
                event.tar.discard(event.cardssss);
                event.finish();
            }
        }
        else{
            event.tar.discard(event.cardssss);
            event.finish();
        }
        "step 8"
        player.chooseTarget('选择一名其他角色，令'+get.translation(event.tar)+'对其造成一点伤害',true,function(card,player,target){
            return target!=player&&target!=event.tar;
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        "step 9"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].damage(event.tar);
        }
    },
                ai:{
                    order:1,
                    result:{
                        player:function (player,target){
                return 2;
            },
                    },
                },
            },
            "qtpz_sunuo":{
				audio:"ext:金庸群侠传:2",
                subSkill:{
                    yi:{
                        mark:true,
                        marktext:"一",
                        intro:{
                            content:"已完成选项一",
                        },
                        sub:true,
                    },
                    er:{
                        mark:true,
                        marktext:"二",
                        intro:{
                            content:"已完成选项二",
                        },
                        sub:true,
                    },
                    san:{
                        mark:true,
                        marktext:"三",
                        intro:{
                            content:"已完成选项三",
                        },
                        sub:true,
                    },
                },
                global:"qtpz_sunuo1",
            },
	"qtpz_tudu":{
				audio:"ext:金庸群侠传:2",
                marktext:"图",
                init:function (player){
        player.storage.qtpz_tudu=[];
    },
                ondisable:true,
                onremove:function (player){
        if(player.storage.qtpz_tudu.length){
            game.log(player,'弃置了"残图"',player.storage.qtpz_tudu);
            while(player.storage.qtpz_tudu.length){
                player.storage.qtpz_tudu.shift().discard();
            }
            player.unmarkSkill('qtpz_tudu');
        }
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                player.$throw(storage);
                player.storage.qtpz_tudu.length=0;
                game.log(player,'弃置了"残图"');
            }
        },
                },
                trigger:{
                    global:"useCard",
                },
                priority:-10,
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.card.name=='sha'&&!event.card.nature) return true;
    },
                check:function (event,player){
        var att=get.attitude(player,event.targets[0]);
        if(event.targets[0].hasSkillTag('nofire')){
            return att>0;
        }
        return att<=0;
    },
                content:function (){
        trigger.card.nature='fire';
        trigger.naturefired=true;
        player.storage.qtpz_tuducard=trigger.card;
    },
                group:["qtpz_tudu_after","qtpz_tudu_damage"],
                subSkill:{
                    after:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        filter:function (event,player){
                if(event.card.name!='sha') return false;
                return event.naturefired==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                delete player.storage.qtpz_tuducard.nature;
                "step 1"
                delete player.storage.qtpz_tuducard;
                
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function (event){
                return event.getParent(2).naturefired==true;
            },
                        forced:true,
                        content:function (){
                "step 0"
				game.playJY(['qtpz_tudu1','qtpz_tudu2'].randomGet());
                player.draw();
                "step 1"
                if(player.countCards('h')){
                    player.chooseCard('将'+get.cnNumber(1)+'张手牌置于武将牌上作为“残图”',1,true);
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.cards&&result.cards.length){
                    player.lose(result.cards,ui.special);
                    player.storage.qtpz_tudu=player.storage.qtpz_tudu.concat(result.cards);
                    player.syncStorage('qtpz_tudu');
                    player.markSkill('qtpz_tudu');
                    game.log(player,'将',result.cards,'置于武将牌上作为“残图”');
                }
            },
                        sub:true,
                    },
                },
            },
            "qtpz_xingxun":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:true,
                unique:true,
                enable:"phaseUse",
                init:function (player){
        player.storage.qtpz_xingxun=false;
    },
                filter:function (event,player){
        if(!player.hasSkill('qtpz_tudu')) return false;
        if(player.storage.qtpz_xingxun) return false;
        return player.storage.qtpz_tudu&&player.storage.qtpz_tudu.length>0;
    },
                content:function (){
        "step 0"
        event.pl=player;
        player.storage.qtpz_xingxun=true;
        "step 1"
        event.pl.showCards(event.pl.storage.qtpz_tudu,'残图');
        "step 2"
        event.pl.awakenSkill('qtpz_xingxun');
        "step 3"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        "step 4"
        var next=event.current.chooseCard(1,'h','是否选择一张手牌当"残图"置于'+get.translation(event.pl)+'武将牌上?，不能选择"图"已有的花色,否则你受到'+get.translation(event.pl)+'的两点伤害',function(card,player){
            var suit=get.suit(card);
            for(var i=0;i<event.pl.storage.qtpz_tudu.length;i++){
                    if(get.suit(event.pl.storage.qtpz_tudu[i])==suit) return false;
                }
                return true;
        });
        next.ai=function(card){
            return 30-get.value(card);
        };
        "step 5"
        if(result.bool){
            event.current.$give(result.cards[0],event.pl);
            event.current.lose(result.cards[0],ui.special);
            event.pl.storage.qtpz_tudu.push(result.cards[0]);
            event.pl.syncStorage('qtpz_tudu');
            event.pl.showCards(event.pl.storage.qtpz_tudu,'残图');
            event.pl.markSkill('qtpz_tudu');
            event.current=event.current.next;
            event.goto(3);
        }
        else{
            event.current.damage(2,event.pl);
            event.current=event.current.next;
            event.goto(3);
        }
    },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                return 1;
            },
                    },
                },
            },
            "qtpz_xuncai":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filter:function (event,player){
        if(!player.hasSkill('qtpz_tudu')) return false;
        if(!player.storage.qtpz_tudu||player.storage.qtpz_tudu.length<4) return false;
        var suit=[];
        for(var i=0;i<player.storage.qtpz_tudu.length;i++){
            var suits=get.suit(player.storage.qtpz_tudu[i]);
            if(!suit.contains(suits)){
                suit.push(suits);
            }
        }
        return suit.length>=4;
    },
                content:function (){
        "step 0"
        var cardss=get.cards(7);
        event.cardsss=cardss;
        player.showCards(cardss,'徇财');
         "step 1"
         var str='请选择一种花色，你获得展示的牌该花色的牌';
         var dialog=ui.create.dialog(str,'hidden');
         var controls=[];
         var hearts=[],diamonds=[],clubs=[],spades=[];
         for(var i=0;i<event.cardsss.length;i++){
            var suits=get.suit(event.cardsss[i]);
            if(!controls.contains(suits)){
                controls.push(suits);
            }
            if(suits=='heart'){
                hearts.push(event.cardsss[i])    
            }
            else if(suits=='diamond'){
                diamonds.push(event.cardsss[i])    
            }
            else if(suits=='club'){
                clubs.push(event.cardsss[i])    
            }
            else if(suits=='spade'){
                spades.push(event.cardsss[i])    
            }
        }
        if(hearts.length>0){
            dialog.add('红桃牌');
            dialog.add(hearts);     
        }
        if(diamonds.length>0){
            dialog.add('方片牌');
            dialog.add(diamonds);     
        }
        if(clubs.length>0){
            dialog.add('梅花牌');
            dialog.add(clubs);     
        }
        if(spades.length>0){
            dialog.add('黑桃牌');
            dialog.add(spades);     
        }
        player.chooseControl(controls,dialog).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control){
            player.popup(result.control);
            game.log(player,'选择了',result.control);
            event.suit=result.control;
        }
        else{
            event.finish();
        }
        "step 3"
        event.gain=[];
        for(var i=0;i<event.cardsss.length;i++){
            if(get.suit(event.cardsss[i])==event.suit){
                event.gain.push(event.cardsss[i]);
            }
            else{
                event.cardsss[i].discard();
            }
        }
        player.gain(event.gain,'gain2');
         "step 4"
          var cards=player.storage.qtpz_tudu;
          player.showCards(cards,'残图');
        "step 5"
        if(player.storage.qtpz_tudu.length){
            game.log(player,'弃置了"图"',player.storage.qtpz_tudu);
            while(player.storage.qtpz_tudu.length){
                player.storage.qtpz_tudu.shift().discard();
            }
            player.unmarkSkill('qtpz_tudu');
        }
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.countCards('h')>=player.hp) return -1;
                return 1;
            },
                    },
                },
            },
	"qtpz_daogao":{
				audio:"ext:金庸群侠传:2",
                global:"qtpz_daogao1",
                init:function (player){
        player.storage.qtpz_daogao=[];
    },
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        "step 0"
        event.card=get.cards(7);
        if(player.storage.qtpz_daogao==undefined) player.storage.qtpz_daogao=[];
        player.storage.qtpz_daogao=event.card;
        player.syncStorage('qtpz_daogao');
        player.showCards(player.storage.qtpz_daogao,'贺兰石')
        player.markSkill('qtpz_daogao');
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                delete player.storage.qtpz_daogao;
            }
        },
                },
            },
            "qtpz_daogao1":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                enable:"phaseUse",
                usable:1,
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(player.hasSkill('qtpz_daogao1_off')) return false;
        return player.countCards('h')&&game.hasPlayer(function(current){
            return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
        });
    },
                prompt:function (){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
        });
        var str='将一张手牌替换'+get.translation(list);
        if(list.length>1) str+='其中的一人';
        str+='武将牌上的"贺兰石"';
        return str;
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer(function(current,player){
            return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>0){
            player.chooseTarget(true,'选择【祷告】的目标',function(card,player,target){
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
            player.logSkill('qtpz_daogao',event.target);
            player.addTempSkill('qtpz_daogao1_off');
        }
        else{
             event.finish();
        }
        "step 3"
        if(event.target){
            var hs=player.getCards('h');
            if(hs.length){
                var carddd=event.target.storage.qtpz_daogao;
                if(carddd.length){
                    player.chooseCardButton('贺兰石',event.target.storage.qtpz_daogao,true).ai=function(button){ 
                        var val=get.value(button.link);
                        return val;
                    }
                }
                else{
                    event.finish();
                }
            }
            else{
                event.finish();
            }
        }
        else{
            event.finish();
        }
        "step 4"
        if(result.bool){
            event.card=result.links[[0]];
            player.chooseCard('h',true,'用一张手牌替换'+get.translation(event.card)).ai=function(card){
                var value=get.value(card);
                var numbercard=get.number(card);
                var carddd=event.target.storage.qtpz_daogao;
                if(carddd.length){
                    var numberss=[];
                    for(var i=0;i<carddd.length;i++){
                        if(carddd[i]==event.card) continue;
                        var number=get.number(carddd[i]);
                        if(!numberss.contains(number)){
                            numberss.push(number);
                        }         
                    }
                }
                else{
                    event.finish();
                }
                if(!numberss.contains(numbercard)){
                    value-=10;
                }
                return -value;
            };
        }
        else{
            event.finish();
        }
        "step 5"
        if(result.bool){
            event.target.$give(event.card,player);
            player.gain(event.card);
            player.$give(result.cards[0],event.target);
            player.lose(result.cards[0],ui.special);
            event.target.storage.qtpz_daogao.push(result.cards[0]);
            event.target.storage.qtpz_daogao.remove(event.card);
            event.target.syncStorage('qtpz_daogao');
            game.log(player,'用一张手牌与',event.target,'交换了一张贺兰石');
            //event.target.showCards(event.target.storage.qtpz_daogao,'贺兰石');
            var numberkk=get.number(result.cards[0]);
            var carddd=event.target.storage.qtpz_daogao;
            if(carddd.length){
                 var numberss=[];
                 for(var i=0;i<carddd.length;i++){
                     if(carddd[i]==event.card) continue;
                     if(carddd[i]==result.cards[0]) continue;
                     var number=get.number(carddd[i]);
                     if(!numberss.contains(number)){
                         numberss.push(number);
                     }
                 }
            }
            if(!numberss.contains(numberkk)){
                player.draw();
            }
            else{
                player.chooseToDiscard(1,'he',true);
            }
        }
    },
                ai:{
                    order:10,
                    result:{
                        player:function (player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('qtpz_daogao')&&current.storage.qtpz_daogao&&current.storage.qtpz_daogao.length>0;
                });
                if(target){
                    return 1;
                }
            },
                    },
                },
            },
            "qtpz_shenyu":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        if(!player.hasSkill('qtpz_daogao')) return false;
        var daogao=player.storage.qtpz_daogao;
        if(!daogao||daogao.length<1) return false;
        if(daogao){
            var number=[];
            for(var i=0;i<daogao.length;i++){
                var numberss=get.number(daogao[i]);
                if(number.contains(numberss)){
                    return false;
                }
                else{
                    number.push(numberss);
                }
            }
        }
        if(daogao){
            for(var i=0;i<daogao.length;i++){
                var suit=get.suit(daogao[i]);
                if(suit=='heart'){
                    return true;
                }
            }
            return false;
        }
        return false;
    },
                content:function (){
        "step 0"
        var gaincard=[];
        var daogao=player.storage.qtpz_daogao; 
        if(daogao){
            for(var i=0;i<daogao.length;i++){
                var suit=get.suit(daogao[i]);
                if(suit=='heart'){
                    gaincard.push(daogao[i]);
                }
            }
            if(gaincard.length>0){
                for(var i=0;i<gaincard.length;i++){
                    player.storage.qtpz_daogao.remove(gaincard[i]);
                }
            }
            if(gaincard.length>0) player.gain(gaincard,'gain2');
        }
        "step 1"
        var num1=7-player.storage.qtpz_daogao.length; 
        if(num1>0){
            var cardss=get.cards(num1);
            player.storage.qtpz_daogao=player.storage.qtpz_daogao.concat(cardss);
            player.syncStorage('qtpz_daogao');
            player.markSkill('qtpz_daogao');
            game.log(player,'将牌堆顶的'+num1+'张牌',cardss,'置于武将牌上作为“贺兰石”');
        }
        "step 2"
        player.chooseTarget('选择至多其他三名男性角色并弃置其装备区里的一张牌',[1,3],function(card,player,target){
           if(!target.countCards('e')) return false;
            return target!=player&&target.sex=='male';
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        "step 3"
        if(result.bool){
            event.targets=result.targets;
            event.num=0;
        }
        else{
            event.finish();
        }
        "step 4"
        if(event.num<event.targets.length){
            var target=event.targets[event.num];
            player.line(target,'green');
            player.discardPlayerCard('e',target,true);
            event.num++;
            event.redo();
        }
    },
            },
	"qtpz_jiaoxie":{
				audio:"ext:金庸群侠传:2",
                skillAnimation:"epic",
                unique:true,
                trigger:{
                    player:"dying",
                },
                init:function (player){
        player.storage.qtpz_jiaoxie=false;
    },
                mark:true,
                marktext:"缴",
                intro:{
                    content:"limited",
                },
                priority:10,
                filter:function (event,player){
        var es=player.getCards('e');
        if(es.length<1) return false;
        return !player.storage.qtpz_jiaoxie;
    },
                content:function (){
        "step 0"
       // player.loseMaxHp();
        var es=player.getCards('e');
        player.discard(es);
        "step 1"
        var num=Math.min(2,player.maxHp-player.hp);
        if(num>0) player.recover(num);
        "step 2"
        player.storage.qtpz_jiaoxie=true;
        player.awakenSkill('qtpz_jiaoxie');
    },
            },
            "qtpz_ruxue":{
				 audio:"ext:金庸群侠传:2",
                group:["qtpz_ruxue_use","qtpz_ruxue_die"],
                subSkill:{
                    used:{
                        sub:true,
                    },
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.skill!='qtpz_ruxue') return false;
                return true;
            },
                        content:function (){
                player.storage.qtpz_ruxue--;
                player.markSkill('qtpz_ruxue');
                player.syncStorage('qtpz_ruxue');
                if(!player.hasSkill('qtpz_ruxue_used')) player.addSkill('qtpz_ruxue_used');
                if(player.storage.qtpz_ruxue==0) player.unmarkSkill('qtpz_ruxue');
                
            },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            global:"dieAfter",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.player==player) return false;
                return true;
            },
                        content:function (){
                player.storage.qtpz_ruxue++;
                player.markSkill('qtpz_ruxue');
                player.syncStorage('qtpz_ruxue');            
            },
                        sub:true,
                    },
                },
                mark:true,
                marktext:"啖",
                init:function (player){
        player.storage.qtpz_ruxue=0;
        //player.markSkill('qtpz_ruxue');
        //player.syncStorage('qtpz_ruxue');
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'枚"啖尸"标记';
        },
                },
                enable:"chooseToUse",
                filter:function (event,player){
        return player.storage.qtpz_ruxue>0;
    },
                filterCard:function (){return false},
                selectCard:-1,
                viewAs:{
                    name:"tao",
                },
                prompt:"移除一枚'啖尸'标记，视为使用一张桃",
                ai:{
                    skillTagFilter:function (player){
            return player.storage.qtpz_ruxue>0;
        },
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
            },
            "qtpz_guming":{
                skillAnimation:true,
                animationColor:"fire",
                audio:"ext:金庸群侠传:2",
                unique:true,
                forceunique:true,
                derivation:"qtpz_minjiu",
                init:function (player){
        player.storage.qtpz_guming=false;
    },
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        //if(!player.hasSkill('qtpz_ruxue')) return false;
        if(player.storage.qtpz_ruxue!=0) return false;
        if(game.dead.length==0) return false;
        if(!player.hasSkill('qtpz_ruxue_used')) return false;
        return !player.storage.qtpz_guming;
    },
                forced:true,
                content:function (){
        player.storage.qtpz_guming=true;
        player.loseMaxHp();
         player.$fullscreenpop('沽名钓誉','fire');
        if(player.hasSkill('qtpz_ruxue')) player.removeSkill('qtpz_ruxue');
        if(!player.hasSkill('qtpz_minjiu')) player.addSkill('qtpz_minjiu');
        player.awakenSkill('qtpz_guming');
    },
            },
            "qtpz_minjiu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDrawBefore",
                },
                check:function (event,player){
        var num=game.dead.length;
        return num>3;
    },
                prompt:function (event,player){
        var num=game.dead.length;
        return '盟举：是否改为摸'+get.cnNumber(num)+'张牌？';
    },
                content:function (){
        var num=game.dead.length;
        trigger.num=num;
        if(!player.hasSkill('qtpz_minjiu_hand')) player.addTempSkill('qtpz_minjiu_hand');
    },
                subSkill:{
                    hand:{
                        mod:{
                            maxHandcard:function (player,num){
                    return game.dead.length;
                },
                        },
                        sub:true,
                    },
                },
            },
	"qtpz_yuanbian":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                usable:1,
                priority:-2,
                check:function (event,player){
        return get.effect(event.targets[0],event.card,player,player)<0;
    },
                filter:function (event,player){
        if(!event.targets||event.targets.length!=1) return false;
        if(event.player==player) return false;
        if(event.targets.contains(player)) return false;
        if(get.info(event.card).multitarget) return false;
        var type=get.type(event.card);
        if(type!='basic'&&type!='trick') return false;
        return true;
    },
                autodelay:true,
                content:function (){
        "step 0"
        var eff=get.effect(trigger.targets[0],trigger.card,player,player);
        var eff2=get.effect(player,trigger.card,player,player);
        player.judge(function(card){
            if(get.color(card)=='black'){
                if(eff<0) return 2;
                return -1;
            }
            if(get.color(card)=='red'){
                if(eff2>0) return 1;
                return -1;
            }
            return 0;
        });
        "step 1"
        if(result.color=='black'){
            trigger.cancel();
        }
        else if(lib.filter.targetEnabled2(trigger.card,trigger.player,player)){
            trigger.targets.add(player);
            trigger.player.line(player,'green');
        }       
    },
            },
            "qtpz_tongzui":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"useCard",
                },
                priority:-10,
                check:function (event,player){
        var numm=0;
        for(var i=0;i<event.targets.length;i++){
            var juese=event.targets[i];
            var att=get.attitude(player,juese);
            if(att>=0){
                numm++;
            }
            if(att<0){
                numm--;
            }
        }
        if(numm<0) return true;
        return false;
    },
                filter:function (event,player){
        if(!event.targets||event.targets.length<2) return false;
        //if(event.player==player) return false;
        if(!event.targets.contains(player)) return false;
        return true;
    },
                content:function (){
        "step 0"
        for(var i=0;i<trigger.targets.length;i++){
            var juese=trigger.targets[i];
            juese.loseHp(1);
        }
    },
            },
	"qtpz_guoshang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                priority:-1,
                frequent:true,
                filter:function (event,player){
        return get.suit(event.card)&&get.suit(event.card)=='club';
    },
                content:function (){
        player.draw();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(get.suit(card)=='club') return [1,0.6];
            },
                    },
                },
            },
            "qtpz_fuchao":{
                group:["qtpz_fuchao_after","qtpz_fuchao_damage","qtpz_fuchao_use","qtpz_fuchao_isLinkedbegin","qtpz_fuchao_isLinkedafter"],
                subSkill:{
                    after:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        filter:function (event,player){
                return event.ondamage==true&&event.tar.length>0;
            },
                        check:function (event,player){
                var numm=0;
                for(var i=0;i<event.tar.length;i++){
                    var juese=event.tar[i];
                    var att=get.attitude(player,juese);
                    var he=juese.countCards('he');
                    if(att>0&&he>0){
                        numm++;
                    }
                    if(att<=0&&he>0){
                        numm--;
                    }
                }
                if(numm<0) return true;
                return false;
            },
                        content:function (){
               for(var i=0;i<trigger.tar.length;i++){
                   var juese=trigger.tar[i];
                   if(juese.countCards('he')){
                       player.line(juese,'green');
                       juese.chooseToDiscard(1,'he',true);
					   //game.playJY(['qtpz_fuchao1','qtpz_fuchao2','qtpz_fuchao3'].randomGet());
                   }
               }  
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function (event){
                return event.getParent(2).tar.length>0;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                if(trigger.getParent(2).ondamage==false) trigger.getParent(2).ondamage=true;
				game.playJY(['qtpz_fuchao1','qtpz_fuchao2','qtpz_fuchao3'].randomGet());
                "step 1"
                if(trigger.getParent(2).tar.contains(trigger.player)){
                    trigger.getParent(2).tar.remove(trigger.player);
                }
            },
                        sub:true,
                    },
                    use:{
                        trigger:{
                            global:"useCard",
                        },
                        forced:true,
                        popup:false,
                        priority:-100,
                        filter:function (event,card){
                if(!event.targets) return false;
                return true;
            },
                        content:function (){
                trigger.tar=trigger.targets.slice(0);
                trigger.ondamage=false;
            },
                        sub:true,
                    },
                    isLinkedbegin:{
                        trigger:{
                            global:["recoverBegin","damageBegin"],
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                if(!event.player.isLinked()) return false;
                return true;
            },
                        content:function (){
                trigger.isLinkedbegin=true;
            },
                        sub:true,
                    },
                    isLinkedafter:{
                        trigger:{
                            global:["recoverAfter","damageAfter"],
                        },
                        check:function (event,player){
                var nummm=0;
                var tar=game.filterPlayer(function(current){
                    return current.isLinked()&&current!=event.player;
                }).sortBySeat();
                if(tar.length>0){
                    for(var i=0;i<tar.length;i++){
                    var juese=tar[i];
                        if(event.name=='damage'){
                            if(juese.countCards('he')){
                                var att=get.attitude(player,juese);
                                if(att>0) nummm++;
                                if(att<=0) nummm--;
                            }
                        }
                        if(event.name=='recover'){
                        var att=get.attitude(player,juese);
                            if(att>0) nummm++;
                            if(att<=0) nummm--;
                        }
                    }  
                    if(event.name=='damage'&&nummm<0) return true;
                    if(event.name=='recover'&&nummm>0) return true;
                    return false;
                }
                return false;
            },
                        filter:function (event,player){
                if(event.name=='recover'&&event.player.isDying()) return false;
                var tar=game.filterPlayer(function(current){
                    return current.isLinked()&&current!=event.player;
                }).sortBySeat();
                if(tar.length<1) return false;
                return event.isLinkedbegin==true;
            },
                        content:function (){
                "step 0"
				//game.playJY(['qtpz_fuchao1','qtpz_fuchao2','qtpz_fuchao3'].randomGet());
                event.targets=game.filterPlayer(function(current){
                    if(current.isLinked()&&current!=trigger.player){
                        return true;
                    }
                });
                event.num=0;
                event.targets.sort(lib.sort.seat);
                "step 1"
                if(event.num<event.targets.length){
                    var target=event.targets[event.num];
                    player.line(target,'green');
                    if(trigger.name=='damage'&&target.countCards('he')){
                        target.chooseToDiscard(true,'he');
                    }
                    if(trigger.name=='recover') target.draw();
                    event.num++;
                    event.redo();
                }
            },
                        sub:true,
                    },
                },
            },
	"qtpz_gaifu":{
                enable:"phaseUse",
                usable:1,
                audio:"ext:金庸群侠传:2",
                selectTarget:2,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        if(num==0&&player.isLinked()){
            player.loseHp();
            event.goto(3);
        }
        "step 1"
        if(num==0){
            player.chooseControl('流失体力','横置',function(event,player){
                return '横置';
            });
        }
        "step 2"
        if(num==0){
            if(result.control=='流失体力'){
                player.loseHp();
            }
            else{
                player.link();
            }
        }
        "step 3"
        target.link();
    },
                ai:{
                    result:{
                        target:function (target){
                if(!target.isLinked()) return -0.5;
                if(target.isLinked()) return 0.5;
            },
                        player:function (player){
                if(!player.isLinked()) return 0.5;
                return -1;
            },
                    },
                    order:2,
                    expose:0.3,
                },
            },
            "qtpz_wuxian":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        var num=player.maxHp-player.hp;
        if(num==0) return false;
        var cardsss=player.getCards('h');
        if(num>=1&&get.value(cardsss[0])<6&&cardsss.length==1) return true;
        if(num-cardsss.length>1) return true;
        for(var i=0;i<cardsss.length;i++){
            if(get.value(cardsss[i])>7||get.tag(cardsss[i],'recover')>=1) return false;
        }
        return true;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        var cards=player.getCards('h');
        player.discard(cards);
        "step 1"
       var num1=player.maxHp-player.hp;
       if(num1>0) player.draw(num1);
    },
            },
	"qtpz_quanzhen2":{},
	"qtpz_quanzhen":{
		audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gainEnd",
                },
                usable:1,
                //round:1,
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
        return event.player.isMaxHandcard(true)&&!player.hasSkill('qtpz_quanzhen2');
    },
                content:function (){
        'step 0'
        player.line(trigger.player,'green');
        'step 1'
        trigger.player.chooseCard('h',1,'劝赈：将一张手牌当“五谷丰登”使用且你不能成为目标',true).set('ai',function(card){
            return -get.value(card);
        });
        'step 2'
        if(result.bool){
			player.addTempSkill('qtpz_quanzhen2',{player:'phaseBegin'});
            var card=game.createCard('wugu',result.cards[0].suit,result.cards[0].number);
            var list=game.filterPlayer(function(current){
                return trigger.player.canUse(card,current);
            }).sortBySeat();
            if(list.contains(trigger.player)){
                list.remove(trigger.player);
            }
            if(list.length){
                trigger.player.useCard({name:'wugu'},list,result.cards);
            }        
            else{
                trigger.player.discard(result.cards[0]);
            }
        }
    },
     ai:{
    		skillTagFilter:function(player){
						return !player.hasSkill('qtpz_quanzhen2');
						}
						},    
            },
            "qtpz_honglve":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        return (player.countCards('h',{type:'trick'})+player.countCards('h',{type:'delay'}))>0;
    },
                direct:true,
                content:function (){
    "step 0"
    var next=player.chooseCard(1,'h','是否弃置一张锦囊牌?若弃置的牌为红色，你本回合使用桃回复数值加一;若为黑色你使用黑色牌伤害加一。',function(card,player){
            return get.type(card)=='trick'||get.type(card)=='delay';
        });
        next.ai=function(card){
            if(player.countCards('h','tao')>0&&player.canUse({name:'tao'},player)){
                if(player.maxHp-player.hp>1){
                   if(get.color(card)=='red') return 8-get.value(card);
                }
            }
            var blsha=false;
            var blnum=0;
            var ca=player.getCards('h');
            for(var i=0;i<ca.length;i++){
                if(get.color(ca[i])=='black'){
                    var canblack=game.hasPlayer(function(current){
                        return get.tag(ca[i],'damage')&&get.effect(current,ca[i],player,player)>0&&player.canUse(ca[i],current);
                    });
                    if(canblack&&ca[i].name!='sha') blnum++;
                    if(canblack&&ca[i].name=='sha'&&blsha==false) blsha=true;
                }
            }
            if(blsha==true) blnum++;
            if(get.color(card)=='black'&&blnum>=2&&!get.tag(card,'damage')) return 8-get.value(card);
            if(get.color(card)=='black'&&blnum>=3&&get.tag(card,'damage')) return 6-get.value(card);
            return -1;
        };
        "step 1"
        if(result.bool){
            player.discard(result.cards[0]);
            player.logSkill('qtpz_honglve');
            player.addTempSkill('qtpz_honglve_'+get.color(result.cards[0]));
        }
    },
                subSkill:{
                    black:{
                        mark:true,
                        marktext:"略",
                        intro:{
                            content:"你的黑色牌伤害加一",
                        },
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
                return event.card&&event.card.name&&get.color(event.card)=='black'&&event.notLink();
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
                    red:{
                        mark:true,
                        marktext:"鸿",
                        intro:{
                            content:"你的桃回复数值加一",
                        },
                        trigger:{
                            source:"recoverBegin",
                        },
                        filter:function (event){
                return event.card&&event.card.name=='tao';
            },
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                        sub:true,
                    },
                },
            },
	"qtpz_fengpo":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore"],
                },
                filter:function (event,player){
        return player.countCards('h')>0&&event.target.countCards('h')>0;
    },
                direct:true,
                content:function (){
    "step 0"
    var skr='是否弃置一张牌令'+get.translation(trigger.target)+'展示手牌并弃置与你弃置的牌花色相同的牌？'
    var next=player.chooseToDiscard(1,'h',skr,function(card,player){
        return true;
    });
    var att=get.attitude(_status.event.player,trigger.target);
    next.ai=function(card){
        if(att<0) {
            if(trigger.target.countCards('h')>3&&player.countCards('h',{color:'red'})){
                if(get.color(card)=='red'){
                    return 6-get.value(card);
                }
            }
            if(trigger.target.countCards('h')>4&&player.countCards('h',{color:'black'})){
                if(get.color(card)=='black'){
                    return 8-get.value(card);
                }
            }
        }
        return -1;
    };
    "step 1"
    if(result.bool){
        player.logSkill('qtpz_fengpo',trigger.target);
        trigger.target.showHandcards();
        trigger.target.discard(trigger.target.getCards('he',{suit:get.suit(result.cards[0])}))
    }
    },
            },
            "qtpz_yujie":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        if(!event.card||!event.card.name) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i])=='d') return true;
            }
        }
        return false;
    },
                content:function (){
    "step 0"
    player.chooseTarget('是否选择一名角色获得'+get.translation(trigger.card)+'？',function(card,player,target){
        return trigger.getParent(2).targets.contains(target);
    }).set('ai',function(target){
        var num=target.countCards('h')-target.hp;
        if(num>=0){
            return get.attitude(player,target);
        }
        return get.attitude(player,target);
    });
    "step 1"
    if(result.bool){
        player.logSkill('qtpz_yujie',result.targets[0]);
        result.targets[0].gain(trigger.cards);
        result.targets[0].$gain2(trigger.cards);
        event.target=result.targets[0];
    }
          "step 2"
    if(event.target){
        if(event.target.countCards('h')-event.target.hp>0) player.draw();
        }
    },
            },
	"qtpz_zhidu":{
                group:["qtpz_zhidu1"],
                init:function (player){
        player.storage.qtpz_zhidu=[];
    },
                intro:{
                    content:"cards",
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                discard:false,
                filter:function (event,player){
        return player.countCards('he',{color:'black'})>0;
    },
                position:"h",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                check:function (card){
        return 7-get.value(card);
    },
                content:function (){
        "step 0"
        event.cardssss=cards[0];
        "step 1"
        if(!player.storage.qtpz_zhidu.contains(event.cardssss)){
            player.storage.qtpz_zhidu.push(event.cardssss);
            player.syncStorage('qtpz_zhidu');
            player.markSkill('qtpz_zhidu');
        }
        "step 2"
        var controls=['一','二','三','四','五','六','七'];
           var str='将该牌置于牌堆第X张(X为你选择的数字)';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        'step 3'
        var num;
        switch(result.control){
            case '一':num=1;break;
            case '二':num=2;break;
            case '三':num=3;break;
            case '四':num=4;break;
            case '五':num=5;break;
            case '六':num=6;break;
            case '七':num=7;break;
        }
        event.num1=num-1;
        event.num2=num;
         'step 4'
         event.cards=get.cards(7);
         'step 5'     
        for(var i=event.cards.length-1;i>=0;i--){
            if(i==event.num1){
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
                ui.cardPile.insertBefore(event.cardssss,ui.cardPile.firstChild);
                player.showCards(event.cardssss,'七心海棠:<br>置于牌堆顶第'+event.num2+'张');
                game.delay(2);
            }
            else{
                ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
            }
        }
    },
                ai:{
					order:3,
                    result:{
                        player:1,
                    },
                },
            },
            "qtpz_zhidu1":{
                trigger:{
                    global:"phaseDrawEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                forced:true,
                filter:function (event,player){
       if(!event.cards||!event.cards.length) return false;
       for(var i=0;i<event.cards.length;i++){
            if(player.storage.qtpz_zhidu.contains(event.cards[i])){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        "step 1"
        for(var i=0;i<trigger.cards.length;i++){
            if(player.storage.qtpz_zhidu.contains(trigger.cards[i])){
                player.storage.qtpz_zhidu.remove(trigger.cards[i]);
                player.syncStorage('qtpz_zhidu');
                player.markSkill('qtpz_zhidu');
                trigger.player.showCards(trigger.cards[i],'七心海棠');
                trigger.player.damage(1,'fire','nosource');
                game.delay(2);
            }
        }
    },
	ai:{
					order:3,
                    result:{
                        player:1,
                    },
                },
            },
            "qtpz_xianghun":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                filter:function (event,player){
        if(event.nature) return true;
    },
                content:function (){
        trigger.player.draw();
    },
            },
	 "qtpz_zuiji":{
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(player.storage.qtpz_zuiji.length>=4) return false;
        if(player.hasSkill('qtpz_zuiji_off')) return false;
        if(!event.cards) return false;
        return true;
    },
                forced:true,
                popup:false,
                init:function (player){
        player.storage.qtpz_zuiji=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未使用或打出过有花色的牌';
            }
            else{
                var str='已使用过'+get.translation(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.translation(storage[i]);
                }
                str+='牌';
                return str;
            }
        },
                },
                content:function (){
        "step 0"
        for(var i=0;i<trigger.cards.length;i++){
            var suit=get.suit(trigger.cards[i]);
            if(!player.storage.qtpz_zuiji.contains(suit)){
                player.storage.qtpz_zuiji.push(suit);
            }
        }
        player.syncStorage('qtpz_zuiji');
        player.markSkill('qtpz_zuiji');
        "step 1"
        if(player.storage.qtpz_zuiji.length>=4&&!player.hasSkill('qtpz_zuiji_off')){
            player.draw(3);
            player.addTempSkill('qtpz_zuiji_off','phaseEnd');
        }
    },
                group:["qtpz_zuiji_phase","qtpz_zuiji_mopai","qtpz_zuiji_mopaib"],
                subSkill:{
                    off:{
                        mark:true,
                        marktext:"罪",
                        intro:{
                            content:"不能再发动罪己摸牌",
                        },
                        sub:true,
                    },
                    phase:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return player.storage.qtpz_zuiji.length>0;
            },
                        content:function (){
                player.storage.qtpz_zuiji=[];
                player.syncStorage('qtpz_zuiji');
                player.unmarkSkill('qtpz_zuiji');
            },
                        sub:true,
                    },
                    mopai:{
                        trigger:{
                            player:"gainAfter",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                if(_status.currentPhase!=player) return false;
                if(event.parent.parent.name=='phaseDraw') return false;
                return event.cards&&event.cards.length>0
            },
                        content:function (){
                player.addTempSkill('qtpz_zuiji_mopaion','phaseAfter');
            },
                        sub:true,
                    },
                    mopaion:{
                        mark:true,
                        marktext:"摸",
                        intro:{
                            content:"已于回合内摸牌阶段外摸牌",
                        },
                        sub:true,
                    },
                    mopaib:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                return true;
            },
                        content:function (){   
                  "step 0"
                if(player.hasSkill('qtpz_zuiji_mopaion')) event.finish();
                  "step 1"
                player.chooseControl('流失体力','翻面','横置',function(event,player){
                    if(player.isTurnedOver()) return '翻面';
                    if(player.isLinked()) return '横置';
                    return '横置';
                });
                "step 2"
                if(result.control=='流失体力'){
                    player.loseHp();
                }
                if(result.control=='翻面'){
                    player.turnOver();
                }
                if(result.control=='横置'){
                    player.link();
                }
            },
                        sub:true,
                    },
                },
            },
            "qtpz_youqin":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        if(event.player==player) return false;
        return player.countCards('h')&&event.player.countCards('h');
    },
                direct:true,
                content:function (){
        "step 0"
        var next=player.chooseToDiscard(1,'h','是否弃置一张非装备手牌观看'+get.translation(trigger.player)+'至多X张手牌并使用其中一张非装备牌(X为其的体力值)？',function(card,player){
            //if(get.type(card)=='equip') return false;
            return true;
        });
        var att=get.attitude(_status.event.player,trigger.player);
        next.ai=function(card){
            if(att<0) {
                if(trigger.player.hp>2&&trigger.player.countCards('h')>2){
                    return 9-get.value(card);
                }
                return -1;
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('qtpz_youqin',trigger.player);
        }
        else{
            event.finish();
        }     
       "step 2"
        player.line(trigger.player,'green');
        event.hs=trigger.player.getCards('h');
        var num=trigger.player.hp;
        if(num>trigger.player.countCards('h')) num=trigger.player.countCards('h');
        event.hs1=event.hs.randomGets(num);
     //   player.showCards(event.hs1)
         "step 3"
         player.chooseCardButton(event.hs1,[1,1],'选择一张牌并使用之').set('filterButton',function(button){
             //if(get.type(button.link)=='equip') return false;
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 4"
        if(result.bool){
            trigger.player.lose(result.links[0]);
          //  trigger.player.lose(result.links[0],ui.special);
          //  player.$gain2(result.links[0]);
            trigger.player.$give(result.links[0],player);
            player.chooseUseTarget(result.links[0]);
        }
        game.delay();
        trigger.player.update();
    },
            },
            "qtpz_gangbi":{
				 audio:"ext:金庸群侠传:2",
                group:["qtpz_gangbi_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('qtpz_gangbi');
            },
                        sub:true,
                    },
                },
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
       if(event.player.group!='wu') return false;
       if(event.player==player) return false;
        return get.type(event.card)=='trick'||get.type(event.card)=='delay';
    },
                content:function (){
        "step 0"
        player.draw();
        "step 1"
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(player.group!='wu') return;
                if(player==target) return;
                if(get.type(card)=='trick'||get.type(card)=='delay') return 'zeroplayertarget';
            },
                    },
                },
            },
            "qtpz_zuiji":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
        if(!event.cards) return false;
        return true;
    },
                forced:true,
                popup:false,
                init:function (player){
        player.storage.qtpz_zuiji=[];
    },
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未使用或打出过有花色的牌';
            }
            else{
                var str='已使用过'+get.translation(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.translation(storage[i]);
                }
                str+='牌';
                return str;
            }
        },
                },
                content:function (){
        "step 0"
        for(var i=0;i<trigger.cards.length;i++){
            var suit=get.suit(trigger.cards[i]);
            if(!player.storage.qtpz_zuiji.contains(suit)){
                player.storage.qtpz_zuiji.push(suit);
                player.addSkill('qtpz_zuiji_'+suit);
            }
        }
        player.syncStorage('qtpz_zuiji');
        player.markSkill('qtpz_zuiji');
        "step 1"
        if(player.storage.qtpz_zuiji.length>=4){
            player.draw(2);
            player.removeSkill('qtpz_zuiji_heart');
            player.removeSkill('qtpz_zuiji_diamond');
            player.removeSkill('qtpz_zuiji_club');
            player.removeSkill('qtpz_zuiji_spade');
            player.storage.qtpz_zuiji=[];
            player.syncStorage('qtpz_zuiji');
            player.unmarkSkill('qtpz_zuiji');
        }
    },
                group:["qtpz_zuiji_mopai","qtpz_zuiji_mopaib"],
                subSkill:{
                    heart:{
                        mark:true,
                        marktext:"♥️",
                        intro:{
                            content:"已使用或打出♥️牌",
                        },
                        sub:true,
                    },
                    diamond:{
                        mark:true,
                        marktext:"♦️",
                        intro:{
                            content:"已使用或打出♦️牌",
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"已使用或打出♣️牌",
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"已使用或打出♠️牌",
                        },
                        sub:true,
                    },
                    mopai:{
                        trigger:{
                            player:"gainAfter",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                if(event.parent.parent.name=='phaseDraw') return false;
                return event.cards&&event.cards.length>0
            },
                        content:function (){
                player.addTempSkill('qtpz_zuiji_mopaion','phaseAfter');
            },
                        sub:true,
                    },
                    mopaion:{
                        mark:true,
                        marktext:"摸",
                        intro:{
                            content:"已于回合摸牌阶段外摸牌",
                        },
                        sub:true,
                    },
                    mopaib:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:-50,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(player.hasSkill('qtpz_zuiji_mopaion')) return false;
                return true;
            },
                        content:function (){   
                  "step 0"
				  game.playJY(['qtpz_zuiji1','qtpz_zuiji2'].randomGet());
                if(player.hasSkill('qtpz_zuiji_mopaion')) event.finish();
                  "step 1"
                player.chooseControl('流失体力','翻面',function(event,player){
                    if(player.isTurnedOver()) return '翻面';
                    if(!player.isTurnedOver()&&player.previous==trigger.player&&player.hp>=2) return '流失体力';
                    //if(player.isLinked()) return '横置';
                    return '翻面';
                });
                "step 2"
                if(result.control=='流失体力'){
                    player.loseHp();
                }
                if(result.control=='翻面'){
                    player.turnOver();
                }
                //if(result.control=='横置'){
                //    player.link();
                //}
            },
                        sub:true,
                    },
                },
            },
	"qtpz_shezheng":{
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                },
				audio:"ext:金庸群侠传:2",
                trigger:{					
                    global:"discardAfter",
                },
                filter:function (event,player){
        if(player.hasSkill('qtpz_shezheng_off')) return false;
        if(event.player==player) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].name=='sha'&&get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].name=='sha'&&get.position(trigger.cards[i])=='d'){
                cards.push(trigger.cards[i]);
            }
        }
        if(cards.length){
            event.sha=cards;
        }
        "step 2"
        if(event.sha.length){
            player.chooseCardButton(event.sha,1,'请选择一张杀使用之').set('filterButton',function(button){
                return button.link.name='sha'
            });
            }
            else{
                event.finish();
            }  
        "step 3"
        if(result.bool){
            event.usesha=result.links[0];
            event.sha.remove(result.links[0]);
        }
        else{
            event.finish();
        }  
         "step 4"
        player.chooseTarget('是否选择一名角色成为'+get.translation(event.usesha)+'的目标？',function(card,player,target){
           if(target==trigger.player) return false;
            if(target==player) return false;
            return lib.filter.targetEnabled2(event.usesha,player,target)&&get.distance(trigger.player,target,'attack')<=1;
        }).set('ai',function(target){
            return get.effect(target,event.usesha,player,player);
        });
       "step 5"
        if(result.bool){
            player.logSkill('qtpz_shezheng',result.targets[0]);
            player.useCard(event.usesha,result.targets[0]);
            if(!player.hasSkill('qtpz_shezheng_off')){
                player.addTempSkill('qtpz_shezheng_off','roundStart');
            }
            //event.goto(2);
        }
        else{
            //event.goto(2);
        }  
    },
            },
            "qtpz_yingshi":{
				audio:"ext:金庸群侠传:4",
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false; 
        return event.card&&event.card.name=='sha';
    },
                content:function (){
        player.draw();
    },
            },
	 "qtpz_zhucheng":{
                group:["qtpz_zhucheng1"],
                marktext:"城",
                audio:"ext:金庸群侠传:4",
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                init:function (player){
        player.storage.qtpz_zhucheng=[];
    },
                content:function (){
        "step 0"
        player.draw(4);
        "step 1"
        if(player.countCards('he')){
            player.chooseCard('将'+get.cnNumber(4)+'张手牌置于武将牌上作为“城”',4,true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special);
            player.storage.qtpz_zhucheng=player.storage.qtpz_zhucheng.concat(result.cards);
            player.syncStorage('qtpz_zhucheng');
            player.markSkill('qtpz_zhucheng');
            game.log(player,'将',result.cards,'置于武将牌上作为“城”');
        }
    },
                intro:{
                    content:"cards",
                },
            },
            "qtpz_zhucheng1":{               
                trigger:{
                    global:"phaseDrawBegin",
                },
                content:function (){
        "step 0"
		game.playJY(['qtpz_zhucheng1','qtpz_zhucheng2','qtpz_zhucheng3','qtpz_zhucheng4'].randomGet());
        event.cards=get.cards(2);
        var cards=event.cards;
            var content=['牌堆顶的两张牌',cards];
            game.log(player,'观看了牌堆顶的两张牌');
            player.chooseControl('ok').set('dialog',content);
        "step 1"
        player.storage.qtpz_zhucheng=player.storage.qtpz_zhucheng.concat(event.cards);      
        "step 2"
        player.chooseCardButton(player.storage.qtpz_zhucheng,true,'将顺序将牌置于牌堆顶（先选择的在上）',2);
         "step 3"
         player.storage.qtpz_zhucheng.remove(result.links);
         var cardss=result.links.slice(0);
        for(var i=cardss.length-1;i>=0;i--){
            ui.cardPile.insertBefore(cardss[i],ui.cardPile.firstChild);
            }
         "step 4"
          player.syncStorage('qtpz_zhucheng');
          player.markSkill('qtpz_zhucheng');
    },
            },
            "qtpz_xuezhuang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dying",
                },
                frequent:true,
                priority:10,
                content:function (){
       player.draw();
    },
            },
	"qtpz_handao":{
		audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        if(!event.card||event.card.name!='sha'||!event.notLink()) return false;
        if(!event.player.countCards('h'))return true;
        if(!event.player.getEquip(2)) return true;
        if(event.player.hp==1) return true
        return false;
    },
                forced:true,
                content:function (){
        var num2=0;
        if(!trigger.player.countCards('h')) num2++;
        if(!trigger.player.getEquip(2)) num2++;
        if(trigger.player.hp==1) num2++;
        
        trigger.num+=num2;
    },
                ai:{
                    damageBonus:true,
                },
            },
            "qtpz_hanzhan":{
                audio:"ext:金庸群侠传:2",
                usable:1,
                enable:"phaseUse",
                prompt:"失去一点体力或体力上限",
                content:function (){
        "step 0"
        player.chooseControl('流失体力','失去一体力上限',function(event,player){
            if(player.hp==player.maxHp) return '流失体力';
            if(player.hp<player.maxHp-1||player.hp<=2) return '失去一体力上限';
            return '流失体力';
        });
        "step 1"
        if(result.control=='流失体力'){
            player.loseHp();
        }
        else{
            player.loseMaxHp(true);
        }
    },
                group:["qtpz_hanzhan_discard"],
                subSkill:{
                    discard:{
                        trigger:{
                            player:["loseHpEnd","loseMaxHpEnd"],
                        },
                        prompt:"每当你流失一体力或失去一体力上限后你可以令其他角色弃置一张牌。",
                        check:function (event,player){
                var num=0;
               for(var e=0;e<game.players.length;e++){
                    if(game.players[e]!=player){   
                        var att=get.attitude(player,game.players[e]);
                        var hes=game.players[e].countCards('he')
                        if(att>0&&hes>0) num--;
                        if(att<0&&hes>0) num++;
                    }
                }
                if(num>0) return true;
                return false;
            },
                        content:function (){
                for(var e=0;e<game.players.length;e++){
                    if(game.players[e]!=player){   
                        if(game.players[e].countCards('he')){
                            player.line(game.players[e],'green');
                            game.players[e].chooseToDiscard(1,'he',true);
                        }
                    }
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    result:{
                        player:function (player){
                var num=0;
               for(var e=0;e<game.players.length;e++){
                    if(game.players[e]!=player){   
                        var att=get.attitude(player,game.players[e]);
                        var hes=game.players[e].countCards('he')
                        if(att>0&&hes>0) num--;
                        if(att<0&&hes>0) num++;
                    }
                }
               if(num>0) return player.MaxHp-player.hp-1;
               return -1;
            },
                    },
                },
            },
            "qtpz_shuixiang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCardToBefore",
                },
                priority:15,
                check:function (event,player){
        var card={name:'guohe'};
        var num1=get.effect(event.target,card,_status.event.player,player)
        var num2=get.effect(event.target,event.card,_status.event.player,player);
        if(num1>num2) return true;
        return false;
    },
                filter:function (event,player){
        if(event.card.name=='wuxie') return false;
        if(!event.target.countCards('hej')) return false;
        return get.type(event.card)=='trick'||get.type(event.card)=='delay';
    },
                content:function (){
        "step 0"
        trigger.cancel();
        "step 1"
        trigger.target.discardPlayerCard('hej',trigger.target,true);
    },
            },
	"qtpz_fenji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseDrawEnd",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(att>0) return true;
        if(att<=0){
            if(!event.player.canUse({name:'huogong'},player)) return true;
            if(event.player.countCards('h')<4) return true;
        }
        return false;
    },
                filter:function (event,player){
        if(event.player==player) return false;
        return event.player.countCards('h')>=2;
    },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        event.hs=trigger.player.getCards('h');
        event.hs1=event.hs.randomGets(2);
        "step 1"
        player.showCards(event.hs1)
        "step 2"
        if(get.suit(event.hs1[0])!=get.suit(event.hs1[1])){
            if(player.countCards('h')>0&&trigger.player.canUse({name:'huogong'},player)){
                trigger.player.useCard({name:'huogong'},player);
            }
        }
        else{
            player.loseMaxHp();
        }    
    },
                ai:{
                    threaten:1.2,
                },
            },
            "qtpz_huashi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                priority:15,
                check:function (event,player){
        if(event.player.countCards('h')<5) return false;
        if(player.maxHp<3) return false;
        if((player.maxHp-player.hp)<3) return false;
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
       if(event.player==player) return false;
        return true;
    },
                content:function (){
        "step 0"  
        player.loseMaxHp();
        "step 1"  
        var controls=['heart','diamond','club','spade'];
           var str='请声明一种花色，其回合内不能使用打出你声明的花色';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 2"
        if(result.control){
            player.popup(result.control);
            player.line(trigger.player,'green');
            game.log(player,'声明了',result.control);
            //trigger.player.storage.qtpz_huashi=result.control;
            trigger.player.addTempSkill('qtpz_huashi_'+result.control);
        }
    },
                subSkill:{
                    heart:{
                        mark:true,
                        marktext:"♥️",
                        intro:{
                            content:"不能使用或打出♥️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='heart') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='heart') return false;
                },
                        },
                        sub:true,
                    },
                    diamond:{
                        mark:true,
                        marktext:"♦️",
                        intro:{
                            content:"不能使用或打出♦️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='diamond') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='diamond') return false;
                },
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"不能使用或打出♣️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='club') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='club') return false;
                },
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"不能使用或打出♠️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='spade') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "qtpz_shidu":{
                group:["qtpz_shidu_tao"],
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore","huogongBefore"],
                    target:["shaBefore","huogongBefore"],
                },
                filter:function (event,player){
        if(event.card.name=='huogong') return true;
        return event.card.nature=='fire';
    },
                forced:true,
                content:function (){
        player.gainMaxHp();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(card.name=='huogong'||(card.name=='sha'&&card.nature=='fire')) return [1,0.3];
            },
                        player:function (card,player,target){
                if(card.name=='huogong'||(card.name=='sha'&&card.nature=='fire')) return [1,0.5];
            },
                    },
                },
            },
            "qtpz_shidu_tao":{
                audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return card.name=='huogong'||(card.name=='sha'&&card.nature=='fire');
    },
                position:"h",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张【火攻】或【火杀】当桃使用",
                check:function (card){return 15-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            return (player.countCards('h','sha',{nature:'fire'})+player.countCards('h','huogong'))>0;
        },
                    threaten:0.3,
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
            },
"qtpz_libing":{
	audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"equipEnd",
                },
                filter:function(event,card,player){
return get.subtype(event.card)=='equip1';
},
                filterTarget:function(card,player,target){
        
        if(ui.selected.targets.length==1&&get.distance(trigger.player,target)<=trigger.player.getAttackRange()){
        return target.canUse({name:'sha'},ui.selected.targets[0]);
       }
       
        return true;
       },
                content:function(){
                    "step 0"
                    player.chooseTarget(get.prompt('qtpz_libing'),function(card,player,target){
                        if(trigger.player==target) return false;
                        return trigger.player.canUse({name:'sha'},target);
                    }).set('ai',function(target){
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('qtpz_libing',trigger.player);
                        trigger.player.useCard({name:'sha'},result.targets[0],false);
                    }                       
    },
                ai:{
                    threaten:function(player,target){
            return 1.6;
        },
                },
            },
            "qtpz_shujia":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function(event,player){
    return event.player&&event.player.getEquip(2)!=undefined&&event.card.name=='sha';
    },
                priority:5,
                audio:"ext:金庸群侠传:2",
                content:function(){
     trigger.player.$give(trigger.player.getEquip(2),player);
     player.gain(trigger.player.getEquip(2),trigger.player);
     },
            },

},

 translate:{
	 "qtpz_liyuanzhi":"李沅芷",
            youlian:"忧怜",
            "youlian_info":"当一名角色一次性失去至少两张牌后，你可以令其摸一张牌，然后若其手牌数等于其体力值或体力上限，则你摸一张牌(每回合限一次，若你已受伤则限两次)。",
            "qtpz_tingxian":"挺险",
            "qtpz_tingxian_info":"出牌阶段限一次(若你已受伤则限两次)，你可以将所有手牌交给一名其他角色(至少一张)。然后其展示所有手牌，你依次对其使用其中每种花色或属性的【杀】各一张。",
	 "qtpz_wenqinlai":"文泰来",
            "qtpz_benlei":"奔雷",
            "qtpz_benlei_info":"出牌阶段，你可以和一名其他角色拼点，若你赢，你本回合使用的“杀”均视为无颜色、无花色的“雷杀”。",
            "qtpz_jiahuo":"贾祸",
            "qtpz_jiahuo_info":"其他角色拼点时，你可以观看其手牌并选择其一张手牌作为拼点牌。若如此做，其可以对你使用一张“杀”。",
            "qtpz_yisui":"义随",
            "qtpz_yisui_info":"每当其他角色失去1点体力后，你可以与其各摸1张牌。",
	 "qtpz_hongniangzi":"红娘子",
            "qtpz_qingying":"请缨",
            "qtpz_qingying_info":"其他角色于出牌阶段使用“杀”时，你可以弃置一张牌。若弃置的牌为红色，则此“杀”不计入回合内次数；若弃置的牌为黑色，则此“杀”可以额外指定一名目标。",
            "qtpz_jingguo":"巾帼",
            "qtpz_jingguo_info":"当有角色使用“五谷丰登”时，若此牌的目标包含你，你可以成为此牌的第一个目标。若你选择的牌不为装备牌，则你随机随便牌堆中一张装备牌。锁定技，你的手牌上限加X（X为你装备区里的装备数量）。",
	 "qtpz_fengjizhong":"风际中",
            "qtpz_diebao":"谍报",
            "qtpz_diebao_info":"当一名角色被其他角色获得或弃置而失去牌时，你可以观看其手牌并代替其选择失去的牌；一名角色进行判定前，你可以观看牌堆顶2张牌，并可以将其调换此牌的顺序。",
            "qtpz_diebao1":"谍报",
            "qtpz_diebao1_info":"任意一名角色进行判定前，你可以观看牌堆顶的两张牌，并可以将其调换顺序。",
            "qtpz_jibian":"机变",
            "qtpz_jibian_info":"其他角色使用红色普通锦囊牌或基本牌后，你可以交给其一张红色手牌。若如此做，视为你使用了其使用的牌。",
	 "qtpz_meiniansheng":"梅念笙",
            "qtpz_jianshi":"剑诗",
            "qtpz_jianshi_info":"锁定技。你使用的“杀”按点数有以下效果。奇数：无视目标防具；偶数：你使用此牌时，摸1张牌；无点数：无视目标防具，且你使用此牌时摸1张牌。",
            "qtpz_guazhan":"寡战",
            "qtpz_guazhan_info":"结束阶段开始时，你可以弃置所有手牌（至少1张）。若如此做，则视为你使用了一张“杀”。",
            "qtpz_yizhen":"遗珍",
            "qtpz_yizhen_info":"限定技。当你脱离濒死状态后，你令一名此状态对你使用过“桃”的角色获得技能“神照”。",
            "qtpz_shenzhao":"神照",
            "qtpz_shenzhao_info":"回合开始时，你可以将手牌补至体力值。",
	 "qtpz_diyun":"狄云",
			"qtpz_hengdao":"横刀",
            "qtpz_hengdao_info":"当你使用【杀】指定目标时，若你装备区里有武器牌，你可以弃置目标一张牌。",
            "qtpz_kuiyi":"馈遗",
            "qtpz_kuiyi_info":"主公技。每名其他群势力角色限一次，其于出牌阶段可以令你随机使用一张装备牌。",
            "qtpz_kuiyi2":"馈遗",
            "qtpz_kuiyi2_info":"",
            "qtpz_sheer1":"设饵",
            "qtpz_sheer1_info":"",
            "qtpz_sheer":"设饵",
            "qtpz_sheer_info":"出牌阶段，你可以弃置一张手牌并记录一名角色一个未被记录过的装备栏。其他角色令除其以外的角色失去装备栏里的装备牌后，你可以移除一枚记录了此兼备栏的标记，令其选择失去1点体力或弃置2张牌。",
            "qtpz_diyuntishi":"提示",
            "qtpz_diyuntishi_info":"每当你失去一张装备牌，可以摸两张牌",
	  "qtpz_pingasi":"平阿四",
	 "qtpz_duanbi":"断臂",
            "qtpz_duanbi_info":"限定技。一名角色进入濒死状态时，你可以废除你至多两个装备栏并令其回复等量的体力。",
            "qtpz_yusi":"育嗣",
            "qtpz_yusi_info":"锁定技。你“断臂”选择的角色摸牌阶段多摸X张牌（X为你废除的装备栏数量）。",
            "qtpz_duwu":"督武",
            "qtpz_duwu_info":"其他角色回合结束时，若其未于此回合使用过杀。你可以令其摸一张牌并展示之，若此牌为杀，其可以使用之。",
	 "qtpz_songxiance":"宋献策",
            "qtpz_yaoji":"谣谶",
            "qtpz_yaoji_info":"一名角色回合结束阶段开始时，你可以将一张此回合因其使用而进入弃牌堆的牌置于牌堆顶。",
            "qtpz_fuluan":"扶乩",
            "qtpz_fuluan_info":"准备阶段，你可以观看牌堆顶1张牌，并将此牌置于牌堆顶或牌堆底。若如此做，你可以将一张手牌当此牌使用。",
	  "qtpz_jianninggongzhu":"建宁公主",
            "qtpz_weizhao":"违诏",
            "qtpz_weizhao_info":"当一名角色成为延时锦囊牌的目标时，你可以令此牌视为由你声明的另一种延时锦囊牌。",
            "qtpz_yunie":"欲孽",
            "qtpz_yunie_info":"出牌阶段限一次，若你有手牌，你可以选择一名其他角色，令其声明一种普通锦囊牌的牌名，然后你选择：将一张手牌当其声明的牌使用，然后其摸1张牌；或弃置其区域里的一张牌。",
	 "qtpz_hufei":"胡斐",
            "qtpz_anming":"安民",
            "qtpz_anming_info":"每轮限一次，一名角色装备区置入武器牌后，你可以令其攻击范围内的至多两名角色各摸一张牌。",
            "qtpz_zangbao":"葬宝",
            "qtpz_zangbao_info":"准备阶段开始时，你可以将场上一张红色牌正面向上置于牌堆顶前7张任意位置，称为“宝藏”。一名角色于摸牌阶段获得此牌时，若为方片，其摸2张牌；若为红桃，其回复1点体力。",
            "qtpz_zangbao1":"葬宝",
            "qtpz_zangbao1_info":"",
            "qtpz_shouxian":"守险",
            "qtpz_shouxian_info":"主公技。其他蜀势力角色回合结束时，其可以展示牌堆顶2张牌，将其中一张装备牌置入你的装备区（不能替换原装备），然后其将其余的牌以任意顺序置于牌堆顶或置入弃牌堆。",
	 "qtpz_chenjinnan":"陈近南",
            "qtpz_ningxue":"凝血",
            "qtpz_ningxue_info":"你使用杀后，若目标抵消之，你可以令其下个回合不能使用基本牌；若其受到伤害，你可以令其下个回合不能使用锦囊牌。",
            "qtpz_zhongsu":"忠恕",
            "qtpz_zhongsu_info":"你可以立即将对你造成伤害的牌交给伤害来源，若如此做，你摸1张牌。",
	  "qtpz_xuanye":"玄烨",
            "qtpz_zhengfan":"镇藩",
            "qtpz_zhengfan_info":"其他角色使用杀造成伤害后，你可以弃置一张手牌，然后弃置其装备区里一张装备牌。",
            "qtpz_fujiang":"复疆",
            "qtpz_fujiang_info":"当你的牌因弃置而进入弃牌堆时，你可以将这些牌置于武将牌上，称为“疆”。每当你失去手牌后，你可以用任意“疆”将手牌补至手牌上限。",
            "qtpz_fujiang1":"复疆",
            "qtpz_fujiang1_info":"每当你失去手牌后，你可以用任意“疆”将手牌补至手牌上限。",
            "qtpz_shengshi":"盛世",
            "qtpz_shengshi_info":"主公技。每回合限一次，其他蜀势力角色的牌因弃置而进入弃牌堆时，其可以将其中一张牌当“疆”置于你武将牌上。",
	 "qtpz_weihutou":"韦虎头",
            "qtpz_fuyin":"父荫",
            "qtpz_fuyin_info":"锁定技。摸牌阶段开始时，你可以放弃摸牌，然后声明大或小，并亮出牌堆顶7张牌。若你声明大，你获得其中点数大于7的牌；若你声明小，你获得其中点数小于7的牌，若其中至少有一张点数为7的牌，你获得亮出的所有牌。",
            "qtpz_mengtong":"蒙童",
            "qtpz_mengtong_info":"每轮限一次，一名角色的判定牌生效前，你可以任意改变此牌的花色。",
            "测试蒙童":"测试蒙童",
            "测试蒙童_info":"一名角色的判定牌生效前，你可以任意改变此牌的花色。",
	 "qtpz_weixiaobao":"韦小宝",
            "qtpz_yabao":"押宝",
            "qtpz_yabao_info":"出牌阶段限一次，你可以扣置一张点数为5~9的手牌，称为“宝”，然后你令至多四名其他角色各扣置一张手牌，然后你声明大或小，最后你与其他角色展示扣置的牌。若你：声明大，你获得其中点数大于“宝”的牌；声明小，你获得点数小于“宝”的牌。若其中至少有一张与“宝”点数相同，你获得所有其他角色展示的牌。",
            "qtpz_qiaoshe1":"巧舌",
            "qtpz_qiaoshe1_info":"",
            "qtpz_qiaoshe":"巧舌",
            "qtpz_qiaoshe_info":"主公技。当你进入濒死状态时，其他蜀势力角色可以展示牌堆顶7张牌，并令你使用其中的一张酒或桃。",
	 "qtpz_yuanchengzhi":"袁承志",
            "破阵":"破阵",
            "破阵_info":"你使用杀无视目标防具，且造成伤害后你可以弃置目标装备区里的防具牌。",
            "qtpz_dangkou":"荡寇",
            "qtpz_dangkou_info":"每回合限一次，当你使用的普通锦囊牌结算完后，若此牌没有造成伤害，你可以弃置此牌至多两名目标各一张牌。",
            "qtpz_jiangmen":"将门",
            "qtpz_jiangmen_info":"主公技。其他吴势力角色出牌阶段开始时，其可以交给你一张锦囊牌，然后其摸1张牌。",
            "qtpz_pozhen":"破阵",
            "qtpz_pozhen_info":"你使用杀对目标造成伤害后，该目标可以选择你攻击范围内另一名不是此杀目标的角色，然后你对其选择的角色使用此杀。",
	  "qtpz_xieyanke":"谢烟客",
            "qtpz_tieling":"铁令",
            "qtpz_tieling_info":"每名其他角色限一次，其出牌阶段，可令你回复1点体力或摸2张牌，然后其获得一枚“玄铁令”标记。每局限三次。",
            "qtpz_jieyou":"解忧",
            "qtpz_jieyou_info":"锁定技。当你成为获得过“玄铁令”标记的角色使用的黑色牌的目标时，取消之。",
            "qtpz_sunuo1":"夙诺",
            "qtpz_sunuo1_info":"",
            "qtpz_sunuo":"夙诺",
            "qtpz_sunuo_info":"其他角色出牌阶段，其可移除其“玄铁令”标记并选择未被选择过的一项：获得你装备区里的一张牌；令你将一张手牌当其声明的普通锦囊牌使用；令你对其选择的另一名其他角色造成一点伤害。",
	 "qtpz_tianguinong":"田归农",
            "qtpz_tudu":"涂毒",
            "qtpz_tudu_info":"其他角色使用普通杀时，你可以令此牌视为火杀，然后若此杀造成了伤害，你摸一张牌并将一张手牌置于武将牌上，称为“残图”。",
            "qtpz_xingxun":"刑讯",
            "qtpz_xingxun_info":"限定技。出牌阶段，若你的武将牌上有“残图”，你可以令所有其他角色依次将一张手牌当“残图”置于你的武将牌上（须与“残图”已包含的花色均不相同）。否则其受到你的2点伤害。",
            "qtpz_xuncai":"徇财",
            "qtpz_xuncai_info":"出牌阶段，若你的“残图”有四种花色，你可以展示牌堆顶7张牌，然后你选择获得其中某个花色的所有牌，并将其余牌和“残图”置入弃牌堆。",
	  "qtpz_kasili":"喀丝丽",
            "qtpz_daogao":"祷告",
            "qtpz_daogao_info":"游戏开始时，你将牌堆顶7张牌当“贺兰石”正面向上置于你的武将牌上。一名角色出牌阶段限一次，其可以用一张手牌替换一张“贺兰石”牌，然后若其用于替换的牌与其余“贺兰石”牌点数均不同，其摸一张牌，否则其弃置一张牌。",
            "qtpz_daogao1":"祷告",
            "qtpz_daogao1_info":"",
            "qtpz_shenyu":"神谕",
            "qtpz_shenyu_info":"出牌阶段开始时，若“贺兰石”牌点数均不同，你可以获得其中的红桃牌并从牌堆将“贺兰石”牌补至7张，然后你可以弃置至多三名男性角色装备区里的一张牌。",
	 "qtpz_huatiegan":"花铁干",
            "qtpz_jiaoxie":"缴械",
            "qtpz_jiaoxie_info":"限定技。当你进入濒死状态时，你可以弃置你装备区里的所有牌（至少一张），然后回复2点体力。",
            "qtpz_ruxue":"茹血",
            "qtpz_ruxue_info":"锁定技，一名角色死亡后，你获得一枚“啖尸”标记。每当你需要使用桃时，你可以移除一枚“啖尸”标记，视为你使用了此牌。",
            "qtpz_guming":"沽名",
            "qtpz_guming_info":"觉醒技。准备阶段开始时，若场上有已死亡的角色，且你没有“啖尸”标记，你减一点体力上限并失去“茹血”，获得“盟举”。",
            "qtpz_minjiu":"盟举",
            "qtpz_minjiu_info":"摸牌阶段开始时，你可以改为摸x张牌，若如此做，你此回合的手牌上限为x（x为已死亡的角色数）。",
	 "qtpz_chengbenzhi":"程本直",
            "qtpz_yuanbian":"辩冤",
            "qtpz_yuanbian_info":"每回合限一次，其他角色使用基本牌或普通锦囊牌指定其他角色为唯一目标后。你可以判定，若为黑色，则取消之；若为红色，你也成为此牌的目标。",
            "qtpz_tongzui":"同罪",
            "qtpz_tongzui_info":"当一名角色使用牌指定包含你在内的至少两名目标后，你可以令此牌的所有目标失去一点体力。",
	  "qtpz_ajiu":"阿九",
            "qtpz_guoshang":"国殇",
            "qtpz_guoshang_info":"锁定技。当你成为梅花牌的目标时，你摸1张牌。",
            "qtpz_fuchao":"覆巢",
            "qtpz_fuchao_info":"一名角色使用牌的结算结束后，若有目标受到此牌的伤害，则你可以令未受到此牌伤害的目标各弃一张牌。一名横置的角色受到伤害/回复体力后，你可以令其他横置的角色弃置/摸一张牌。",
	 "qtpz_yuyutong":"余鱼同",
            "qtpz_gaifu":"慨赴",
            "qtpz_gaifu_info":"出牌阶段限一次，你可以失去一点体力或横置你的武将牌，选择至多两名其他角色，横置或重置其武将牌。",
            "qtpz_wuxian":"陷误",
            "qtpz_wuxian_info":"回合结束时，你可以弃置所有手牌（至少一张），然后你摸X张牌（X为你已损失的体力值）。",
	  "qtpz_liyan":"李岩",
            "qtpz_quanzhen":"劝赈",
            "qtpz_quanzhen_info":"每轮限一次，一名角色获得牌后，若其手牌数为唯一最多，你可以令其将一张手牌当“五谷丰登”使用，且其不能成为此牌的目标。",
            "qtpz_honglve":"鸿略",
            "qtpz_honglve_info":"出牌阶段开始时，你可以弃置一张锦囊牌。若此牌为红色，本阶段内你使用桃时可额外回复一点体内；若为黑色，你本回合内使用黑色牌造成的伤害+1。",
	 "qtpz_miaorenfeng":"苗人凤",
            "qtpz_fengpo":"凤魄",
            "qtpz_fengpo_info":"你使用杀指定目标后，你可以弃置一张手牌，若如此做，目标须展示手牌并弃置与你弃置的牌花色相同的所有手牌。",
            "qtpz_yujie":"郁结",
            "qtpz_yujie_info":"你使用牌造成伤害后，你可以将此牌交给此牌的一名目标，然后若其手牌大于其体力值，你摸1张牌。",
	  "qtpz_chenglingsu":"程灵素",
            "qtpz_zhidu":"植毒",
            "qtpz_zhidu_info":"出牌阶段限一次，你可以将一张黑色手牌正面向上置于牌堆前7张任意位置，称为“七心海棠”。锁定技，于摸牌阶段获得“七心海棠”牌的角色受到一点无来源的的火焰伤害。",
            "qtpz_zhidu1":"植毒",
            "qtpz_zhidu1_info":"",
            "qtpz_xianghun":"香魂",
            "qtpz_xianghun_info":"一名角色受到属性伤害后，你可以令其摸1张牌。",
	  "qtpz_zhuyoujian":"朱由检",
            "qtpz_zuiji":"罪己",
            "qtpz_zuiji_info":"锁定技。每当你使用或打出第四种花色的牌后，你摸2张牌。回合结束时，若你未于本回合摸牌阶段外获得过牌，你须选择一项：失去1点体力；你翻面。",
            "qtpz_youqin":"忧勤",
            "qtpz_youqin_info":"其他角色出牌阶段开始时，你可以弃置一张手牌，观看其至多X张手牌并使用其中一张牌（X为其体力值）。",
            "qtpz_gangbi":"刚愎",
            "qtpz_gangbi_info":"主公技。锁定技。当你成为其他吴势力角色使用的普通锦囊牌的目标时，取消之并摸1张牌。",
	 "qtpz_aobai":"鳌拜",
            "qtpz_shezheng":"摄政",
            "qtpz_shezheng_info":"每轮限一次，其他角色的杀因弃置而进入弃牌堆后，你可以对其攻击范围内的一名其他角色使用此杀。",
            "qtpz_yingshi":"营私",
            "qtpz_yingshi_info":"锁定技。每当你于回合外使用或打出杀后，你摸1张牌。",
	  "qtpz_wuzixu":"伍子胥",
            "qtpz_zhucheng":"筑城",
            "qtpz_zhucheng_info":"游戏开始前，共发你8张牌，选4张作为手牌，其余的牌置于武将牌上，称为“城”。每当一名角色摸牌阶段开始时，你可以观看牌堆顶2张牌，然后用至多两张“城”，替换其中等量的牌。",
            "qtpz_zhucheng1":"筑城",
            "qtpz_zhucheng1_info":"",
            "qtpz_xuezhuang":"血状",
            "qtpz_xuezhuang_info":"一名角色进入濒死状态时，你可以摸一张牌。",
	  "qtpz_xuedaolaozhu":"血刀老祖",
            "qtpz_handao":"悍刀",
            "qtpz_handao_info":"锁定技。你使用杀造成伤害时，目标每满足以下任意一项，此杀伤害+1：体力值为1；没有手牌；没有装备防具牌。",
            "qtpz_hanzhan":"酣战",
            "qtpz_hanzhan_info":"出牌阶段，你可以失去一点体力或减少一点体力上限。每当你失去一点体力或减少一点体力上限后，你可以令所有其他角色弃置一张牌。",
            "qtpz_shuixiang":"说降",
            "qtpz_shuixiang_info":"每当你使用锦囊牌指定目标后，若其区域内有牌，你可以令其弃置其中一张牌，然后此牌对其无效。",
	 "qtpz_haidafu":"海大富",
	 "qtpz_fenji":"愤激",
            "qtpz_fenji_info":"其他角色摸牌阶段结束时，你可以展示其两张手牌。若花色不同，视为其对你使用一张火攻，否则你减一点体力上限。",
            "qtpz_huashi":"化尸",
            "qtpz_huashi_info":"其他角色出牌阶段开始时，你可以失去一点体力上限，然后声明一种花色，其此回合不能使用或打出该花色的牌。",
            "qtpz_shidu":"嗜毒",
            "qtpz_shidu_info":"锁定技，当你使用火杀或火攻指定目标或成为此牌的目标时，你加一点体力上限。你可以将火杀或火攻当桃使用。",
            "qtpz_shidu_tao":"嗜毒_桃",
            "qtpz_shidu_tao_info":"",
	 "qtpz_aqing":"阿青",
	  "qtpz_libing":"厉兵",
            "qtpz_libing_info":"一名角色的装备区里置入一张兵器牌时，你可以令其视为对其攻击范围内由你选择的另一名角色使用一张杀。其以此法使用的杀不计入回合内次数。",
            "qtpz_shujia":"束甲",
            "qtpz_shujia_info":"每当你使用杀造成伤害后，若其装备区里有防具牌，你可以获得之。",
			},
};

if(lib.device||lib.node){
				for(var i in qtpz.character){qtpz.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in qtpz.character){qtpz.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return qtpz;
		});
		lib.config.all.characters.push('qtpz');
		if(!lib.config.characters.contains('qtpz')) lib.config.characters.remove('qtpz');
		lib.translate['qtpz_character_config']='其他篇章';
		
		
	game.import('character',function(){
			var sdyx={
				name:'sdyx',
				connect:true,
				character:{
					"sdyx_huangyaoshi":["male","wei",3,["sdyx_cihuai","sdyx_qushang"],[]],
            "sdyx_guojing":["male","qun",4,["sdyx_jianchi","sdyx_yuzhong"],[]],            
            "sdyx_xguojing":["male","wei",4,["sdyx_danxin","sdyx_polu","sdyx_longyin"],['zhu']],
"sdyx_zhebie":["male","qun",4,["sdyx_sheqi","sdyx_guifu"],[]],
"sdyx_ouyangfeng":["male","qun",4,["sdyx_shezhang","sdyx_duxi","sdyx_nijing"],[]],
"sdyx_fengheng":["female","wei",6,["sdyx_moshu","sdyx_cuixin"],[]],
	"sdyx_huangrong":["female","wei",3,["sdyx_qingshi","sdyx_qiaoyan","sdyx_qimen"],[]],	
	"sdyx_zhoubotong":["male","wei",3,["sdyx_mingwan","sdyx_shouxun"],[]],
	"sdyx_ouyanke":["male","qun",4,["sdyx_mushe","sdyx_zhijie"],[]],
	"sdyx_hongqigong":["male","wei",3,["sdyx_xiangyan","sdyx_shouming"],[]],
	 "sdyx_qiuqianren":["male","wei",4,["sdyx_tiezhang","sdyx_huolian"],[]],
	 "sdyx_yangkang":["male","wei",3,["sdyx_weifu","sdyx_lisuo"],[]],
	  "sdyx_yinggu":["female","wei",4,["sdyx_xingshang","sdyx_guti"],[]],
	      "sdyx_meichaofeng":["female","wei",3,["sdyx_lizhuao","sdyx_shien","sdyx_guidao"],[]],
		  "sdxy_kezhenge":["male","wei",3,["sdxy_xiadan","sdxy_xiangmo"],[]],
			"sdxy_duantiande":["male","wei",3,["sdxy_ninglu","sdxy_huoyan"],[]],
	
},

characterIntro:{
					"sdyx_huangrong":"桃花岛主黄药师与冯衡的独生女，精通父亲传授的桃花岛武功、五行八卦阵和奇门遁甲术。黄蓉集天地灵气而于一身，冰雪聪明、玲珑剔透、博古通今，精通琴棋书画、厨艺了得。曾凭借聪明才智多次化解危险。与郭靖一生相恋、患难与共，全心全意助旺他，后辅佐夫君保家卫国，竭尽所能。【CV：仙女桥】",
					"sdyx_zhoubotong":"周伯通是王重阳的师弟，全真七子的师叔。天性纯真，爱作弄别人，故有“老顽童”之称。他不拘小节，与晚辈郭靖结拜为兄弟，教他左右互博术和空明拳。王重阳在第一次华山论争中胜出，得到秘籍《九阴真经》，临终前托咐周伯通好好保管，切不练习书中的武功。周伯通虽贪玩，但一生恪守师兄遗训。【CV：神齐大叔】",
					"sdyx_fengheng":"东邪黄药师之妻，黄蓉之母，有过目不忘的本领，曾为黄药师得到《九阴真经》，向周伯通借阅通读一遍，并谎称此书是假的，周伯通盛怒之下撕毁此书，之后冯蘅凭高超的记忆能力一字不漏地默写了一本，并成为孤本。多年后，此书被梅超风盗走，其为重新默写经书，心力交瘁，难产而死。【CV：仙女桥】",
					"sdyx_ouyangfeng":"欧阳锋，西域白驼山庄庄主，武功登峰造极，为“天下五绝”之一。曾用蛇毒暗算试图救自己的洪七公。为在华山论剑中得到天下第一的名号而急功近利，因逆练郭靖乱改的《九阴真经》而疯。后来与洪七公在华山比武，欧阳锋恢复记忆，两人释怀大笑，互相拥抱而逝。【CV：青灯折扇不语】",
				    "sdyx_xguojing":"郭靖在第三次“华山论剑”时，继承师父“北丐”洪七公的北位，成为了“北侠”，与一灯、周伯通、黄药师和杨过合称为“新五绝”。后蒙古军南侵，郭靖夫妇用“二十八宿大阵”大战蒙古军。出任武林盟主后，率领一家人死守襄阳城，最后与妻子黄蓉及小儿子郭破虏一同战死。【CV：青灯折扇不语】",          
                    "sdyx_zhebie":"哲别最初是铁木真的敌人，曾将铁木真从马上射下。兵败后身受重伤的他躲藏到幼年郭靖家中。郭靖敬佩其神勇，宁死也不将其行踪告知铁木真之子术赤。在术赤杀即将死郭靖的一瞬间，哲别将其救下。哲别佩服铁木真雄才伟略而归于旗下。哲别箭术惊人，在铁木真麾下立下不少战功，更推荐郭靖成为铁木真的助手。【CV：觅阳】",
                    "sdyx_huangyaoshi":"桃花岛主黄药师因个性离经叛道、狂傲不羁、性情孤僻、身形飘忽、有如鬼魅，人称“东邪”。其妻冯氏阿蘅因苦忆《九阴真经》殚心而逝，黄药师为表追思之情，终生未得续弦。郭靖和欧阳克上岛提亲，黄岛主连出三道题目对其进行考试，考试题目无一不与音律与亡妻相关，足见其用情之深。【CV：觅阳】",
                    "sdyx_guojing":"郭啸天在临安牛家村遭段天德杀害，遗孀李萍为逃避追杀而隐居蒙古大漠，郭靖随母自幼在蒙古部落长大，机缘巧合救下勇士哲别，遂拜其为师，习得高超的射箭本领，可百步穿杨，曾一箭双雕，技惊四座。与铁木真四子拖雷结拜为安答。曾多次相救铁木真，并助其统一多个蒙古部落。【CV：稳得高处】",					
					"sdyx_qiuqianren":"裘千仞是为铁掌帮帮主，有一双胞胎大哥裘千丈和妹妹裘千尺。成名绝学为铁砂掌，江湖人称铁掌水上漂。为在第一次华山论剑中除掉一个强劲对手，打伤南帝段智兴贵妃瑛姑的儿子，想耗费段智兴的真气使他无法获胜。但这是瑛姑和周伯通的私生子，段智兴因而不救，裘千仞计谋失利。【CV：蚩宇】",
					"sdyx_hongqigong":"洪七公为丐帮帮主，为人正义，生性贪吃，曾经因贪吃误事，自断其右手食指，故人称“九指神丐”。离开桃花岛时，在船上被欧阳锋用蛇毒暗袭所伤，于明霞岛上授位给黄蓉并亲授其打狗棒法，以策万全。曾在黄蓉的死缠烂打、美食引诱下，将独门武学降龙十八掌传授给爱徒郭靖。【CV：林三】",
					"sdyx_ouyanke":"欧阳克是西域白驼山的少主，与欧阳锋叔侄相称，实为其私生子。欧阳克面目俊雅、英气逼人，却生性好色。他受到完颜洪烈聘请到中原盗取《武穆遗书》，擅长牧蛇，常以蛇阵应付敌人。为人狡猾阴险，却被道长一丈的黄蓉在明霞岛上设计弄残了双腿。后因在牛家村曲家酒馆调戏穆念慈，被杨康用铁枪头所杀。【CV：神齐大叔】",
					"sdyx_yinggu":"瑛姑本是南帝段智兴的嫔妃，却与周伯通苟合产子，段智兴欲将其赐给周伯通，却被他抛弃。后来裘千仞夜袭皇宫将瑛姑之子打至重伤，目的是让段智兴出手相救耗费内力而在华山论剑中失利，岂料南帝袖手旁观导致婴儿死亡。从此，瑛姑将南帝和裘千刃视为仇敌，一生为了复仇而算计。【CV：仙女桥】",
					"sdyx_yangkang":"杨康本是忠良之后，因大金六王爷垂涎其母包惜弱美色，设计害得郭杨两家家破人散，并娶包惜弱为贵妃，杨康从此被更名为完颜康，成为王爵世子。后来身世被揭破，他做出了令人失望的选择：表面上认郭靖为义兄，暗地里坏事做尽，难舍眼前的荣华富贵。曾经害死郭靖几位师父并嫁祸给黄药师，令郭靖黄蓉反目。【CV：神齐大叔】",
					"sdyx_meichaofeng":"梅超风和师兄陈玄风盗走师父黄药师的《九阴真经》后，被同门追杀到大漠。其练成九阴白骨爪后，令人闻风丧胆。在和江南七怪的激战中，梅超风被柯镇恶暗算而双目失明。后来在黄药师与欧阳锋的激战中，梅超风舍命为恩师挡住欧阳锋一击而死。黄药师在她临死时，重新收她为徒。【CV：仙女桥】",
					"sdxy_duantiande":"段天德是《射雕英雄 传》的开篇人物，因贪图财物而受大金六王爷完颜洪烈指使，遣兵到临安牛家村，对郭杨两家展开虐杀，致郭啸天惨死、杨啸天亡命天涯。事迹败露之后，被全真丘处机追杀，潜逃到其伯父枯木大师拄持的云栖寺中，妖言惑众向枯木寻求帮助。后害死枯木，独自逃离。【CV：弈声传媒有声工作室】",
					"sdxy_kezhenge":"柯镇恶是江南七侠之首，绰号飞天蝙蝠，绝技是降魔杖法。他是一位侠义英雄，带着弟妹们远赴蒙古大漠寻找梁山忠烈郭啸天的遗孤郭靖，并教他武功和做人的道理。柯镇恶曾这样评价自己：一生正直，数十年来无一事愧对天地。郭靖黄蓉镇守襄阳期间，独居在桃花岛，卒年一百零八岁。【CV：】",
					},
				characterTitle:{
					"sdyx_huangrong":"Sukincen",
					"sdyx_meichaofeng":"Sukincen",
					"sdxy_duantiande":"落影丶逝尘",
					"sdxy_kezhenge":"落影丶逝尘",
					"sdyx_yinggu":"落影丶逝尘",
					"sdyx_yangkang":"落影丶逝尘",
					"sdyx_qiuqianren":"落影丶逝尘",
					"sdyx_hongqigong":"落影丶逝尘",
					"sdyx_ouyanke":"落影丶逝尘",
					"sdyx_zhoubotong":"落影丶逝尘",
					"sdyx_fengheng":"落影丶逝尘",
					"sdyx_ouyangfeng":"落影丶逝尘",
					 "sdyx_xguojing":"朱阳光",          
           "sdyx_zhebie":"落影丶逝尘",
            "sdyx_huangyaoshi":"落影丶逝尘",
            "sdyx_guojing":"落影丶逝尘",	
					
				},
				perfectPair:{
			//"jyqxz_sdyx_tian":['jyqxz_sdyx_shixing'],
					},
								
skill:{	
 "sdxy_ninglu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        if(player.hasSkill('sdxy_ninglu_off')) return false;
        return game.hasPlayer(function(current){
            return current.countGainableCards(player,'hej')>0&&current!=player&&current!=event.player&&get.distance(event.player,current,'attack')<=1;
        });
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget('是否发动【佞禄】?<br>'+lib.translate.sdxy_ninglu_info+'',[1,2],function(card,player,target){
            return target.countGainableCards(player,'hej')>0&&player!=target&&target!=trigger.player&&get.distance(trigger.player,target,'attack')<=1;
        },function(target){
            var att=get.attitude(_status.event.player,target);
            var att2=get.attitude(_status.event.player,trigger.player);
            if(att2>0) return -1;
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        });
        "step 1"
        if(result.bool){
            player.logSkill('sdxy_ninglu',result.targets);
            event.target=result.targets;
            if(trigger.player.storage.sdxy_ninglu==undefined){
                trigger.player.storage.sdxy_ninglu=[];
            }        
            for(var i=0;i<result.targets.length;i++){
                if(!trigger.player.storage.sdxy_ninglu.contains(result.targets[i])){
                    trigger.player.storage.sdxy_ninglu.push(result.targets[i]);
                }
            }           
            if(!player.hasSkill('sdxy_ninglu_off')){
                player.addTempSkill('sdxy_ninglu_off');
            }
            if(!trigger.player.hasSkill('sdxy_ninglu_no')) trigger.player.addTempSkill('sdxy_ninglu_no',{player:'phaseEnd'});   
        }
        else{
            event.finish();
        }
        "step 2"
        for(var i=0;i<event.target.length;i++){
            player.gainPlayerCard('hej',event.target[i],true);
        }
    },
                subSkill:{
                    off:{
                        sub:true,
                    },
                    no:{
                        mark:true,
                        marktext:"佞",
                        intro:{
                            content:"",
                        },
                        onremove:function (player){
                delete player.storage.sdxy_ninglu;
            },
                        mod:{
                            playerEnabled:function (card,player,target){
                    if(_status.currentPhase==player&&player.storage.sdxy_ninglu&&player.storage.sdxy_ninglu.contains(target)) return false;
                },
                        },
                        sub:true,
                    },
                },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            "sdxy_huoyan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                filter:function (event,player){
        if(event.card.name!='sha'&&event.card.name!='wanjian') return false;
        if(player.getEquip(2)) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.getEquip(2);
        });
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget('是否发动【惑言】?<br>'+lib.translate.sdxy_huoyan_info+'',function(card,player,target){
            return target!=player&&target.getEquip(2);
        }).set('ai',function(target){
            return 1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('sdxy_huoyan',result.targets);
            event.tar=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        event.tar.chooseBool('是否令'+get.translation(player)+'视为装备了你的防具牌?否则你弃置你的防具牌。').set('ai',function(){                                
          //  if(get.attitude(event.tar,player)>0) return true;                     
            return true;
        }); 
        "step 3"
        if(result.bool){
            if(event.tar.getEquip(2)!=undefined){
                var car=event.tar.getEquip(2);
                var info=get.info(car);
                if(info.skills){
                    for(var i=0;i<info.skills.length;i++){
                        if(!player.hasSkill(info.skills[i])) player.addTempSkill(info.skills[i],'useCardAfter');
                    }
                }
            }
        }
        else{
            if(event.tar.getEquip(2)!=undefined){
                event.tar.discard(event.tar.getEquip(2));
            }
        }    
    },
            },
			"sdxy_xiadan":{
				audio:"ext:金庸群侠传:2",
                subSkill:{
                    count:{
                        trigger:{
                            global:"damageEnd",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                if(event.source){
                    var map=event.source;
                    if(player.storage.sdxy_xiadan_map[map]==undefined) return true;
                    if(player.storage.sdxy_xiadan_map[map]){
                        if(!player.storage.sdxy_xiadan_map[map].contains(event.player)) return true;
                    }
                }
                return false;
            },
                        content:function (){
                if(trigger.source){
                    var map=trigger.source;
                    if(player.storage.sdxy_xiadan_map[map]==undefined) player.storage.sdxy_xiadan_map[map]=[];
                    if(!player.storage.sdxy_xiadan_map[map].contains(trigger.player)){
                        player.storage.sdxy_xiadan_map[map].push(trigger.player);                          
                    }        
                }
            },
                        sub:true,
                    },
                },
                group:["sdxy_xiadan_count"],
                trigger:{
                    player:"damageAfter",
                },
                init:function (player){
        if(player.storage.sdxy_xiadan_map==undefined){
            player.storage.sdxy_xiadan_map={};
        }
    },
                direct:true,
                filter:function (event,player){
        if(event.source){
            var map=event.source;
            if(player.storage.sdxy_xiadan_map[map]==undefined) return false;
            if(player.storage.sdxy_xiadan_map[map]){
                if(player.storage.sdxy_xiadan_map[map].length>0) return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var map=trigger.source;
        var num=player.storage.sdxy_xiadan_map[map].length;
        player.chooseTarget('是否发动【侠胆】?<br><br>'+lib.translate.sdxy_xiadan_info+'',[1,num],function(card,player,target){
            var map=trigger.source;
            return player.storage.sdxy_xiadan_map[map].contains(target);
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        "step 1"
        if(result.bool){    
            player.logSkill('sdxy_xiadan',result.targets);
            event.logxiadan=true;
            game.asyncDraw(result.targets);
        }
        "step 2"
        var map=trigger.source;
        if(player.storage.sdxy_xiadan_map[map].length==1&&player.storage.sdxy_xiadan_map[map].contains(player)){
            if(!event.logxiadan) player.logSkill('sdxy_xiadan');
            player.draw(2);
            game.log(player,'#y触发了【侠胆】的额外摸牌效果');
        };
    },
            },
            "sdxy_xiangmo":{
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"damageAfter",
                },
				audio:"ext:金庸群侠传:2",
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('sdxy_xiangmo_off')) return false;
        if(event.source&&event.player){
            if(event.player==event.source) return false;
            if(!event.player.isAlive()) return false;
            if(event.player.countCards('h')>=event.source.countCards('h')) return false;
            return true;          
        }
        return false;
    },
                content:function (){
        "step 0"
        event.num=trigger.source.countCards('h')-trigger.player.countCards('h')
        var str1='令'+get.translation(trigger.source)+'弃'+get.cnNumber(event.num,true)+'张牌';
        var str2='令'+get.translation(trigger.player)+'摸'+get.cnNumber(event.num,true)+'张牌';
        player.chooseControl('选项一','选项二','取消').set('prompt','sdxy_xiangmo<br><br><div class="text">选项一:'+str1+'</div><br><div class="text">选项二:'+str2+'</div></br>').ai=function(){
            var att1=get.attitude(player,trigger.player);
            var att2=get.attitude(player,trigger.source);
            if(att1>0) return '选项二';
            if(att2<0) return '选项一';
            return '取消';
        };
        "step 1"
        if(result.control&&result.control!='取消'){
            if(result.control=='选项一'){
                player.logSkill('sdxy_xiangmo');
                player.line(trigger.source,'green');
                trigger.source.chooseToDiscard(event.num,true,'h');
                if(!player.hasSkill('sdxy_xiangmo_off')){
                    player.addTempSkill('sdxy_xiangmo_off','roundStart');
                }
            }
            else if(result.control=='选项二'){
                player.logSkill('sdxy_xiangmo');
                player.line(trigger.player,'green');
                trigger.player.draw(event.num);
                if(!player.hasSkill('sdxy_xiangmo_off')){
                    player.addTempSkill('sdxy_xiangmo_off','roundStart');
                }
            }
        }
    },
            },
            "sdyx_baigu":{
                mark:true,
                locked:true,
                marktext:"骨",
                 init:function (player){
        player.storage.sdyx_baigu=[];
        player.syncStorage('sdyx_baigu');
    },
             intro:{
                    content:"你的下个回合的摸牌阶段摸牌数-1",
                },       
                  trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.isAlive();
            },
                      
                        content:function (){
              trigger.num--;
              player.removeSkill('sdyx_baigu');
              player.addSkill('sdyx_baigu2');             
            },
            },
                                           
                   "sdyx_baigu2":{
                mark:true,
                locked:true,
                marktext:"骨",
                 init:function (player){
            player.storage.sdyx_baigu2=[];
        player.syncStorage('sdyx_baigu2');
    },
             intro:{
                    content:"你的下个回合的弃牌阶段手牌上限-1",
                },                      
                  trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return player.isAlive();
            },             
                         content:function (){
              player.addTempSkill('sdyx_baigu3');      
               player.removeSkill('sdyx_baigu2');
              player.addSkill('sdyx_baigu');          
            },                                                                                                       
            },
            
             "sdyx_baigu3":{                                            
             mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
                },                                                                                      
                    },
            "sdyx_lizhuao":{
                trigger:{
                    source:"damageBegin",
                },
                priority:10,
                 check:function (event,player){
                             return get.attitude(player,event.player)<=0;
                        },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink()&&!event.player.hasSkill('sdyx_baigu')&&!event.player.hasSkill('sdyx_baigu2');
    },
                
                audio:"ext:金庸群侠传:2",
                content:function (){          
  //    if(!trigger.player.hasSkill('sdyx_baigu')&&!trigger.player.hasSkill('sdyx_baigu2')){    
             player.$fullscreenpop('九阴白骨爪','thunder');                         
             trigger.player.addSkill('sdyx_baigu');     
    //  } 
    },
            },
            
            "sdyx_shien":{
                audio:"ext:金庸群侠传:2",                                 
                        trigger:{
                            global:"damageBegin",
                        },
                        priority:15,
                        direct:true,
                        check:function (event,player){                       
                             return get.attitude(player,event.player)>0;
                        },
                        filter:function (event,player){
                return event.source!=player&&event.player!=player;
            },                        
                        content:function (){
                        'step 0'
            player.chooseBool('是否对'+get.translation(trigger.player)+'发动【师恩】代替其承受伤害？').set('ai',function(){     
                    if(player.hp<2) return false;     
                    return get.attitude(player,trigger.player)>0;           
                  //  if(get.attitude(player,trigger.player)>0) return true;    
             });
             'step 1'
             if(result.bool){
             player.logSkill('sdyx_shien',trigger.player);
             trigger.player.draw();
             player.draw();    
             //player.storage.sdyx_shien2=trigger.player;                          
             trigger.player.addSkill('sdyx_shien2'); 
             trigger.player.markSkill('sdyx_shien2');                 
             trigger.player = player;        
             }
             else event.finish();                      
            },                                                       
            },
            "sdyx_shien2":{
               //mark:'character',              
               marktext:"师",
              	init:function (player){
        player.storage.sdyx_shien2=[];
        player.syncStorage('sdyx_shien2');
    },
                intro:{
                    content:"mark",
                },       
            },
            "sdyx_guidao":{
                audio:"ext:金庸群侠传:2",
               trigger:{
        player:"phaseBegin",
    },
        filter:function (event,player){
        		if(!get.is.altered('sdyx_guidao')){
					var num=game.countPlayer(function(current){
					return current.hasSkill('sdyx_shien2');
					});
					return num>=3;			
					}
        return game.hasPlayer(function(current){
            return current.hasSkill('sdyx_shien2');
        });
    }, 
    priority:2019,
    direct:true,
    alter:true,
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
                       // !lib.skill[skills[j]].unique&&
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
    content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('sdyx_guidao'),function(card,player,target){
            if(!target.hasSkill('sdyx_shien2')) return false;
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
                            //!lib.skill[skills[j]].unique&&
                            !pss.contains(skills[j])){
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
            player.logSkill('sdyx_guidao',event.target);        
        }
        else{
            event.finish();
        }
        'step 2'
        event.skillai=function(list){
            return get.max(list,get.skillRank,'item');
        };
        if(event.isMine()){
            event.dialog=lib.skill.sdyx_guidao.createDialog(player,target);//tianshu
            event.switchToAuto=function(){
                event._result=event.skillai(event.list);
                game.resume();
            };
            _status.imchoosing=true;
            game.pause();
        }
        else{
            event._result=event.skillai(lib.skill.sdyx_guidao.createDialog(player,target,true));
        }
        'step 3'
        _status.imchoosing=false;
        if(event.dialog){
            event.dialog.close();
        }
        player.addTempSkill(result);
        
        		if(get.is.altered('sdyx_guidao')){
						player.awakenSkill('sdyx_guidao');  
					}
					else{
						player.awakenSkill('sdyx_shien');    
					}
					       
         //  player.awakenSkill('sdyx_guidao');           
        player.popup(result);
        game.log(player,'获得了','【'+get.translation(result)+'】');
    },
            },
"sdyx_xingshang":{
                mod:{
                    globalFrom:function (from,to,current){
            if(from.storage.sdyx_xingshang&&from.storage.sdyx_xingshang>0) return current-1;
        },
                },
                mark:true,
                init:function (player){
        player.storage.sdyx_xingshang=0;
        player.markSkill('sdyx_xingshang');
        player.syncStorage('sdyx_xingshang');
    },
                trigger:{
                    global:"damageEnd",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(!event.source) return false;
        if(event.source==player||event.player==player) return false;
        return get.distance(player,event.player)<=1&&event.num>0;
    },
                direct:true,
                content:function (){
        player.storage.sdyx_xingshang+=trigger.num;
        player.markSkill('sdyx_xingshang');
        player.syncStorage('sdyx_xingshang');
    },
                intro:{
                    content:"mark",
                },
            },
            "sdyx_guti":{
                init:function (player){
        player.storage.sdyx_guti=false;
    },
                skillAnimation:true,
                audio:"ext:金庸群侠传:2",
                derivation:["sdyx_xuechou"],
                unique:true,
                trigger:{
                    player:"phaseBeginStart",
                },
                filter:function (event,player){
       // if(!player.hasSkill('sdyx_xingshang')) return false;
        if(!player.storage.sdyx_xingshang||player.storage.sdyx_xingshang<3) return false;
        return !player.storage.sdyx_guti;
    },
                forced:true,
                priority:3,
                content:function (){
        player.loseMaxHp();
        player.addSkill('sdyx_xuechou');
        player.awakenSkill('sdyx_guti');
        player.storage.sdyx_guti=true;
    },
            },
            "sdyx_xuechou":{
                group:"sdyx_xuechou_use",
                subSkill:{
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.skill!='sdyx_xuechou') return false;
                return true;
            },
                        content:function (){
                player.storage.sdyx_xingshang--;
                player.markSkill('sdyx_xingshang');
                player.syncStorage('sdyx_xingshang');               
            },
                        sub:true,
                    },
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filterCard:true,
                filter:function (event,player){
       // if(!player.hasSkill('sdyx_xingshang')) return false;
        if(player.countCards('h')<=0) return false;
        if(player.storage.sdyx_xingshang<=0) return false;
        return true;
    },
                position:"h",
                viewAs:{
                    name:"juedou",
                    suit:"club",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":5,"name":"sha","cardid":"3651961258","_transform":"translateX(224px)","clone":{"name":"sha","suit":"club","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":206},"timeout":186,"original":"h"}],
                },
                prompt:"移除一枚'杏殇'标记并将一张手牌当【决斗】使用",
                check:function (card,player){
       // if(player.storage.sdyx_xingshang&&player.storage.sdyx_xingshang==1) return -1;
        return 8-get.value(card)
    },
                ai:{
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
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
			 "sdyx_weifu":{
                init:function (player){
        player.storage.sdyx_weifu=true;
    },
                mark:true,
                marktext:"威",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.sdyx_weifu==true) return '摸:<span style="color:#FF0000">当有角色拼点赢后，你可以令其摸两张牌</span>';
            return '弃:<span style="color:#FF00FF">当有角色拼点没赢后，你可以令其弃置两张牌</span>';
        },
                },
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["chooseToCompareAfter","compareMultipleAfter"],
                },
                filter:function (event,player){
        if(event.preserve) return false;
        if(player.storage.sdyx_weifu==true){
            if(event.card1.number>event.card2.number){
                return true;
            }
            else if(event.card1.number<event.card2.number){
                return true;
            }
        }
        else if(player.storage.sdyx_weifu==false){
            if(event.card1.number<event.card2.number){
                return event.player.countCards('he')>=2;
            }
            else if(event.card1.number>event.card2.number){
                return event.target.countCards('he')>=2;
            }
            else if(event.card1.number==event.card2.number){
                return event.target.countCards('he')>=2||event.player.countCards('he')>=2;
            }
        }
        return false;
    },
                prompt:function (event,player){
        if(player.storage.sdyx_weifu==true){
            if(event.card1.number>event.card2.number){
                return '威福:是否令<span style="color:#FF0000">【'+get.translation(event.player)+'】</span>摸两张牌?';
            }
            else if(event.card1.number<event.card2.number){
                return '威福:是否令<span style="color:#FF0000">【'+get.translation(event.target)+'】</span>摸两张牌?';
            }
        }
        else if(player.storage.sdyx_weifu==false){
            if(event.card1.number<event.card2.number){
                return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.player)+'】</span>弃两张牌?';
            }
            else if(event.card1.number>event.card2.number){
                return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.target)+'】</span>弃两张牌?';
            }
            else if(event.card1.number==event.card2.number){
                var plhe=event.player.countCards('he');
                var tahe=event.target.countCards('he');
                if(plhe>=2&&tahe>=2){
                    return '威福;是否令<span style="color:#FF00FF">【'+get.translation(event.player)+'】</span>和<span style="color:#FF00FF">【'+get.translation(event.target)+'】</span>弃两张牌?';   
                }
                else if(plhe>=2){
                    return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.player)+'】</span>弃两张牌?';            
                }
                else if(tahe>=2){
                    return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.target)+'】</span>弃两张牌?';         
                }
            }
        }
    },
                check:function (event,player){
        if(player.storage.sdyx_weifu==true){
            if(event.card1.number>event.card2.number){
                return (get.attitude(player,event.player)>0);
            }
            else if(event.card1.number<event.card2.number){
                return (get.attitude(player,event.target)>0);;
            }
        }
        else if(player.storage.sdyx_weifu==false){
            if(event.card1.number<event.card2.number){
                return (get.attitude(player,event.player)<0);
            }
            else if(event.card1.number>event.card2.number){
                return (get.attitude(player,event.target)<0);
            }
            else if(event.card1.number==event.card2.number){
                var attpl=get.attitude(player,event.player);
                var attta=get.attitude(player,event.target);
                var plhe=event.player.countCards('he');
                var tahe=event.target.countCards('he');
                if(attpl<0&&attta<0) return true;
                if(attpl<0&&attta>0&&tahe<2) return true;
                if(attpl>0&&attta<0&&plhe<2) return true;
                return false;
            }
        }
    },
                content:function (trigger,player){
        if(player.storage.sdyx_weifu==true){
            if(trigger.card1.number>trigger.card2.number){
                trigger.player.draw(2);
            }
            else if(trigger.card1.number<trigger.card2.number){
                trigger.target.draw(2);
            }
            player.storage.sdyx_weifu=false;
        }
        else if(player.storage.sdyx_weifu==false){
            if(trigger.card1.number<trigger.card2.number){
                trigger.player.chooseToDiscard(2,'he',true);
            }
            else if(trigger.card1.number>trigger.card2.number){
                trigger.target.chooseToDiscard(2,'he',true);
            }
            else if(trigger.card1.number==trigger.card2.number){
                if(trigger.player.countCards('he')>=2) trigger.player.chooseToDiscard(2,'he',true);
                if(trigger.target.countCards('he')>=2) trigger.target.chooseToDiscard(2,'he',true);
            }
            player.storage.sdyx_weifu=true;
        }
    },
            },
            "sdyx_lisuo":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                priority:15,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')>player.countCards('h');
        });
    },
                content:function (){
        'step 0'
        var goon;
        if(player.needsToDiscard()>1){
            goon=player.hasCard(function(card){
                return card.number>10&&get.value(card)<=5;
            });
        }
        else{
            goon=player.hasCard(function(card){
                return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
            });
        }
        player.chooseTarget(get.prompt('sdyx_lisuo'),function(card,player,target){
            return target!=player&&target.countCards('h')>player.countCards('h');
        }).set('ai',function(target){
            var player=_status.event.player;
            if(_status.event.goon&&get.attitude(player,target)<=0){
                return target.countCards('h');
            }
            return 0;
        }).set('goon',goon);
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            event.target=target;
            player.logSkill('sdyx_lisuo',target);
            player.chooseToCompare(target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            var num1=event.target.countCards('h');
            var num2=player.countCards('h');
            if((num1-num2)>0) player.draw((num1-num2));
            
        }
    },
            }, "sdyx_weifu":{
                init:function (player){
        player.storage.sdyx_weifu=true;
    },
                mark:true,
                marktext:"威",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.sdyx_weifu==true) return '摸:<span style="color:#FF0000">当有角色拼点赢后，你可以令其摸两张牌</span>';
            return '弃:<span style="color:#FF00FF">当有角色拼点没赢后，你可以令其弃置两张牌</span>';
        },
                },
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["chooseToCompareAfter","compareMultipleAfter"],
                },
                filter:function (event,player){
        if(event.preserve) return false;
        if(player.storage.sdyx_weifu==true){
            if(event.card1.number>event.card2.number){
                return true;
            }
            else if(event.card1.number<event.card2.number){
                return true;
            }
        }
        else if(player.storage.sdyx_weifu==false){
            if(event.card1.number<event.card2.number){
                return event.player.countCards('he')>=2;
            }
            else if(event.card1.number>event.card2.number){
                return event.target.countCards('he')>=2;
            }
            else if(event.card1.number==event.card2.number){
                return event.target.countCards('he')>=2||event.player.countCards('he')>=2;
            }
        }
        return false;
    },
                prompt:function (event,player){
        if(player.storage.sdyx_weifu==true){
            if(event.card1.number>event.card2.number){
                return '威福:是否令<span style="color:#FF0000">【'+get.translation(event.player)+'】</span>摸两张牌?';
            }
            else if(event.card1.number<event.card2.number){
                return '威福:是否令<span style="color:#FF0000">【'+get.translation(event.target)+'】</span>摸两张牌?';
            }
        }
        else if(player.storage.sdyx_weifu==false){
            if(event.card1.number<event.card2.number){
                return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.player)+'】</span>弃两张牌?';
            }
            else if(event.card1.number>event.card2.number){
                return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.target)+'】</span>弃两张牌?';
            }
            else if(event.card1.number==event.card2.number){
                var plhe=event.player.countCards('he');
                var tahe=event.target.countCards('he');
                if(plhe>=2&&tahe>=2){
                    return '威福;是否令<span style="color:#FF00FF">【'+get.translation(event.player)+'】</span>和<span style="color:#FF00FF">【'+get.translation(event.target)+'】</span>弃两张牌?';   
                }
                else if(plhe>=2){
                    return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.player)+'】</span>弃两张牌?';            
                }
                else if(tahe>=2){
                    return '威福:是否令<span style="color:#FF00FF">【'+get.translation(event.target)+'】</span>弃两张牌?';         
                }
            }
        }
    },
                check:function (event,player){
        if(player.storage.sdyx_weifu==true){
            if(event.card1.number>event.card2.number){
                return (get.attitude(player,event.player)>0);
            }
            else if(event.card1.number<event.card2.number){
                return (get.attitude(player,event.target)>0);;
            }
        }
        else if(player.storage.sdyx_weifu==false){
            if(event.card1.number<event.card2.number){
                return (get.attitude(player,event.player)<0);
            }
            else if(event.card1.number>event.card2.number){
                return (get.attitude(player,event.target)<0);
            }
            else if(event.card1.number==event.card2.number){
                var attpl=get.attitude(player,event.player);
                var attta=get.attitude(player,event.target);
                var plhe=event.player.countCards('he');
                var tahe=event.target.countCards('he');
                if(attpl<0&&attta<0) return true;
                if(attpl<0&&attta>0&&tahe<2) return true;
                if(attpl>0&&attta<0&&plhe<2) return true;
                return false;
            }
        }
    },
                content:function (trigger,player){
        if(player.storage.sdyx_weifu==true){
            if(trigger.card1.number>trigger.card2.number){
                trigger.player.draw(2);
            }
            else if(trigger.card1.number<trigger.card2.number){
                trigger.target.draw(2);
            }
            player.storage.sdyx_weifu=false;
        }
        else if(player.storage.sdyx_weifu==false){
            if(trigger.card1.number<trigger.card2.number){
                trigger.player.chooseToDiscard(2,'he',true);
            }
            else if(trigger.card1.number>trigger.card2.number){
                trigger.target.chooseToDiscard(2,'he',true);
            }
            else if(trigger.card1.number==trigger.card2.number){
                if(trigger.player.countCards('he')>=2) trigger.player.chooseToDiscard(2,'he',true);
                if(trigger.target.countCards('he')>=2) trigger.target.chooseToDiscard(2,'he',true);
            }
            player.storage.sdyx_weifu=true;
        }
    },
            },
            "sdyx_lisuo":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                priority:15,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')>player.countCards('h');
        });
    },
                content:function (){
        'step 0'
        var goon;
        if(player.needsToDiscard()>1){
            goon=player.hasCard(function(card){
                return card.number>10&&get.value(card)<=5;
            });
        }
        else{
            goon=player.hasCard(function(card){
                return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
            });
        }
        player.chooseTarget(get.prompt('sdyx_lisuo'),function(card,player,target){
            return target!=player&&target.countCards('h')>player.countCards('h');
        }).set('ai',function(target){
            var player=_status.event.player;
            if(_status.event.goon&&get.attitude(player,target)<=0){
                return target.countCards('h');
            }
            return 0;
        }).set('goon',goon);
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            event.target=target;
            player.logSkill('sdyx_lisuo',target);
            player.chooseToCompare(target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            var num1=event.target.countCards('h');
            var num2=player.countCards('h');
            if((num1-num2)>0) player.draw((num1-num2));
            
        }
    },
            },
"sdyx_tiezhang":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&get.suit(event.card);
    },
                direct:true,
                content:function (){
          'step 0'
        player.chooseTarget(get.prompt('sdyx_tiezhang'),function(card,player,target){
            var suits=get.suit(trigger.card);
            var ej=target.getDiscardableCards(player,'ej');
            for(var i=0;i<ej.length;i++){
                if(get.suit(ej[i])==suits) return true;
            }
            return false;
        }).set('ai',function(target){
            var att1=get.attitude(player,target);
            if(att1>0&&target.getDiscardableCards(player,'j')) return 1;
            if(att1<0&&target.getDiscardableCards(player,'e')) return 1;
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('sdyx_tiezhang',result.targets);
            event.target=result.targets[0];
            var skr='选择一张与'+get.translation(trigger.card)+'花色相同的牌令其弃置之';
            player.discardPlayerCard(event.target,1,'ej',true).set('filterButton',function(button){
                var suits=get.suit(trigger.card);
                if(get.suit(button.link)!=suits) return false;
                return true;
            }).set('ai',function(button){
                var att1=get.attitude(player,event.target);               
                if(att1<=0){
                    if(get.position(button.link)!='j') return 1;
                    return -1;
                }
                if(att1>0){
                    if(get.position(button.link)=='j') return 1;
                    return -1;
                }
                return -1;
            }); 
        }
        else{
            event.finish();
        }
    },
            },
            "sdyx_huolian":{
                 audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(game.countPlayer()<3) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(ui.selected.targets.length==0){
            //if(target.countCards('he')==0) return false;
            var cardss={name:'sha'};
            return lib.filter.targetEnabled2(cardss,player,target);
        }
        if(ui.selected.targets.length==1){
            return get.distance(ui.selected.targets[0],target,'attack')<=1;
        }
        return true;
    },
                targetprompt:["令其交出牌","获得牌"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        "step 0"
        event.tar1=targets[0];
        event.tar2=targets[1];
        player.line(event.tar1,'green');
        "step 1"
        var next=event.tar1.chooseCard(1,'he','是否选择一张红桃牌给'+get.translation(event.tar2)+'?否则'+get.translation(player)+'视为对你使用一张杀。',function(card,player){
            return get.suit(card)=='heart';
        });
        var att1=get.attitude(event.tar1,event.tar2);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            if(event.tar1.hasShan()){
                return -1;
            }
            return 4-get.value(card);
        };
        "step 2"
        if(result.bool){
            event.tar1.line(event.tar2,'green');
            event.tar2.gain(result.cards[0],event.tar1);
            event.tar1.$give(result.cards.length,event.tar2);
            game.delay(0.7);
        }
        else{
            player.useCard({name:'sha'},event.tar1,false);
        }
    },
                ai:{
                    order:2.9,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return -3;
                }
                else{
                    return 0.5;
                }
            },
                    },
                    expose:0.4,
                    threaten:1.4,
                },
            },
"sdyx_xiangyan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
        return (event.num>0);
    },
                content:function (){
        "step 0"
        event.cards=get.cards(5);
        if(event.isMine()==false){
            event.dialog=ui.create.dialog('飨宴',event.cards);
            game.delay(2);
        }
        "step 1"
        if(event.dialog) event.dialog.close();
        var dialog=ui.create.dialog('飨宴',event.cards);
        player.chooseButton([0,5],dialog,true).set('ai',function(button){
            return get.value(button.link);
        }).filterButton=function(button){
            for(var i=0;i<ui.selected.buttons.length;i++){
                if(get.type(button.link)==get.type(ui.selected.buttons[i].link)) return false;
            }
            return true;
        }
        "step 2"
        var cards2=[];
        for(var i=0;i<result.buttons.length;i++){
            cards2.push(result.buttons[i].link);
            cards.remove(result.buttons[i].link);
        }
        player.gain(cards2,'log');
        if(cards2.length) player.$gain2(cards2);
        for(var i=0;i<cards.length;i++){
            cards[i].discard();
        }
        game.delay(2);
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')) return [1,0.55];
            },
                    },
                },
            },
            "sdyx_shouming":{
				audio:"ext:金庸群侠传:2",
                derivation:["tlbb_xianglong"],
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('sdyx_shouming_off')) return false;
        if(event.player==player) return false;
        if(!player.countCards('he',{type:'equip'})) return false;
        return player.isDamaged();
    },
                content:function (){
        "step 0"
        var next=player.chooseCard(1,'he','是否选择一张装备交给'+get.translation(trigger.player)+'然后其获得【降龙】直到回合结束？',function(card,player){
            return get.type(card)=='equip';
        });
        var att=get.attitude(_status.event.player,trigger.player);
        next.ai=function(card){
            if(att>2&&trigger.player.hasSha()){
                if(get.subtype(card)=='equip1'&&!trigger.player.getEquip(1)) return 1;
                if(get.subtype(card)=='equip2'&&!trigger.player.getEquip(2)) return 1;
                if(get.subtype(card)=='equip3'&&!trigger.player.getEquip(3)) return 1;
                if(get.subtype(card)=='equip4'&&!trigger.player.getEquip(4)) return 1;
                if(get.subtype(card)=='equip5'&&!trigger.player.getEquip(5)) return 1;
                return -1;
            }
            return -1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('sdyx_shouming',trigger.player);
            player.line(trigger.player,'green');
            trigger.player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.player);
            if(!player.hasSkill('sdyx_shouming_off')){
                player.addTempSkill('sdyx_shouming_off','roundStart');
            }
            if(!trigger.player.hasSkill('tlbb_xianglong')){
                trigger.player.addTempSkill('tlbb_xianglong');
            }
        }
        else{
            event.finish();
        }
    },
                ai:{
                    threaten:1,
                },
            },
 "sdyx_shezhang":{
                mod:{
                    attackFrom:function (from,to,distance){
            if(!from.getEquip(1)) return distance-3;
        },
                },
                trigger:{
                    player:"useCardToBefore",
                },
                priority:7,
                filter:function (event,player){
        if(player.getEquip(1)) return false;
        if(event.card.name=='sha'&&!event.card.nature) return true;
    },
                audio:"ext:金庸群侠传:2",
                check:function (event,player){
        var att=get.attitude(player,event.target);
        if(event.target.hasSkillTag('nofire')){
            return att>0;
        }
        return att<=0;
    },
                content:function (){
        trigger.card.nature='fire';
        trigger.naturefire=true;
        player.storage.sdyx_shezhang=trigger.card;
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(target.getEquip(1)) return;
                if(player==target&&get.subtype(card)=='equip1'){
                    var num=2;
                    if(target.hasSkill('sdyx_duxi')) num+=8;
                    if(get.equipValue(card)<=num) return 0;
                }
            },
                    },
                },
                group:["sdyx_shezhang_after"],
                subSkill:{
                    after:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        filter:function (event,player){
                if(event.card.name!='sha') return false;
                return event.naturefire==true;;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                delete player.storage.sdyx_shezhang.nature;
                "step 1"
                delete player.storage.sdyx_shezhang;
                
            },
                        sub:true,
                    },
                },
            },
            "sdyx_duxi":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageBegin",
                },
                direct:true,
                filter:function (event){
        if(!player.countCards('h',{suit:'spade'})) return false;
        return event.nature=='fire';
    },
                content:function (){
        "step 0"
        if(trigger.nature!='fire') event.finish();
        "step 1"
    var next=player.chooseToDiscard(1,'he','是否弃置一张黑桃牌令'+get.translation(trigger.player)+'受到的火焰伤害加一？',function(card,player){
        return get.suit(card)=='spade';
    });
    var att=get.attitude(_status.event.player,trigger.player);
    next.ai=function(card){
        if(att<0) {
            return 9-get.value(card);
        }
        return -1;
    };
    "step 2"
    if(result.bool){
        player.logSkill('sdyx_duxi',trigger.player);
        trigger.num++;
        }
    },
            },
            "sdyx_nijing":{
                audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return card.name=='sha'&&card.nature=='thunder';
    },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h','sha',{nature:'thunder'})) return false;
    },
                prompt:"将一张雷杀当酒使用",
                check:function (card){
        if(_status.event.type=='dying') return 1;
        return 6-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('h','sha',{nature:'thunder'})>0&&player.hp<=0;
        },
                    threaten:1.5,
                    save:true,
                    basic:{
                        useful:function (card,i){
                if(_status.event.player.hp>1){
                    if(i==0) return 4;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                        value:function (card,player,i){
                if(player.hp>1){
                    if(i==0) return 5;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                    },
                    order:function (){
            return get.order({name:'sha'})+0.2;
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
                        return (get.attitude(target,current)<0&&
                            target.canUse(card,current,true,true)&&
                            !current.getEquip('baiyin')&&
                            get.effect(current,card,target)>0);
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
 "sdyx_mushe":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                discard:false,
                prepare:"give2",
                filter:function (event,player){
        return player.countCards('h',{suit:'spade'});
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                filterTarget:function (card,player,target){
        if(target.hasSkill('sdyx_mushe')) return false;
        return player!=target;
    },
                check:function (card){
        return 5-get.value(card);
    },
                content:function (){
        "step 0"
        target.gain(cards,player);
        // game.delay();
        "step 1"
        target.storage.sdyx_mushe=player;
        target.addSkill('sdyx_mushe_end');
        
    },
                ai:{
                    result:{
                        target:-0.5,
                    },
                    basic:{
                        order:9,
                    },
                },
                subSkill:{
                    end:{
                        mark:true,
                        marktext:"牧",
                        intro:{
                            content:"回合结束需要交出两张♠️牌或受到一点雷电伤害",
                        },
                        group:["sdyx_mushe_damage","sdyx_mushe_die"],
                        onremove:function (player){
                delete player.storage.sdyx_mushe;
            },
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                if(!player.storage.sdyx_mushe.isAlive()){
                    player.removeSkill('sdyx_mushe_end');
                    event.finish();
                }
                if(player.countCards('h',{suit:'spade'})<2){
                    player.damage(1,'thunder',player.storage.sdyx_mushe);
                    player.removeSkill('sdyx_mushe_end');
                    event.finish();
                }
                "step 1"
                var next=player.chooseCard(2,'he','是否选择两张黑桃牌交给'+get.translation(player.storage.sdyx_mushe)+'？，否则你受到其1点雷电伤害。',function(card,player){
                    return get.suit(card)=='spade';
                });
                var att1=get.attitude(player,player.storage.sdyx_mushe);
                next.ai=function(card){
                    if(att1>0){
                        return 1;
                    }
                    return 5-get.value(card);
                };
                "step 2"
                if(result.bool){
                    player.line(player.storage.sdyx_mushe,'green');
                    player.storage.sdyx_mushe.gain(result.cards,player);
                    player.$give(result.cards.length,player.storage.sdyx_mushe);
                    game.delay(0.7);
                }
                else{
                    player.damage(1,'thunder',player.storage.sdyx_mushe);
                }
                "step 3"
                player.removeSkill('sdyx_mushe_end');
        
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(_status.currentPhase!=player) return false;
                return event.nature=='thunder';
            },
                        content:function (){
                "step 0"
                if(_status.currentPhase!=player) event.finish();
                if(trigger.nature!='thunder') event.finish();
                "step 1"
                player.removeSkill('sdyx_mushe_end');
            },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            player:"dieBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('sdyx_mushe_end');
            },
                        sub:true,
                    },
                },
            },
            "sdyx_zhijie":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
       if(player.hasSkill('sdyx_zhijie_off')) return false;
       if(event.player==player) return false;
        return true;
    },
                check:function (event,player){
        return (get.attitude(player,event.player)<=0);
    },
                content:function (){
        "step 0"
        player.line(trigger.player,'green');
        if(!trigger.player.countCards('h',{suit:'spade'})){
            trigger.player.addTempSkill('sdyx_zhijie_spade');
            event.finish();
        }
         "step 1"
        var next=trigger.player.chooseCard(1,'he','是否选择一张黑桃牌给'+get.translation(player)+'?否则你不能使用黑桃牌。',function(card,player){
            return get.suit(card)=='spade';
        });
        var att1=get.attitude(trigger.player,player);
        next.ai=function(card){
            if(att1>0){
                return 1;
            }
            return 5-get.value(card);
        };
        "step 2"
        if(result.bool){
            trigger.player.line(player,'green');
            player.gain(result.cards[0],trigger.player);
            trigger.player.$give(result.cards.length,player);
            player.addTempSkill('sdyx_zhijie_off','roundStart');
            game.delay(0.7);
        }
        else{
            trigger.player.addTempSkill('sdyx_zhijie_spade');
        }
    },
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已失效",
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"不能使用或打出♠️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardUsable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            cardSavable:function (card,player){
                    if(get.suit(card)=='spade') return false;
                },
                            targetInRange:function (card){
                    if(get.suit(card)=='spade') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
 "sdyx_mingwan2":{
	  audio:"ext:金庸群侠传:3",
                mark:true,
                marktext:"判",
                intro:{
                    content:"下个回合判定阶段移出牌阶段后",
                },
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                priority:Infinity,
                content:function (){
        'step 0'
        trigger.cancel();
        player.phaseSkipped=false;
        'step 1'
        player.removeSkill('sdyx_mingwan2');
        if(player.skipList.contains('phase')){
            player.skipList.remove('phase');
            event.trigger('phaseSkipped');
            event.finish();
        }
       'step 2'
       event.trigger('phaseBefore');
       game.delay();
        'step 3'
        if((player==_status.roundStart||_status.roundSkipped)&&!trigger.skill){
            delete _status.roundSkipped;
            game.roundNumber++;
            if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
            for(var i=0;i<game.players.length;i++){
                if(game.players[i].isOut()&&game.players[i].outCount>0){
                    game.players[i].outCount--;
                    if(game.players[i].outCount==0&&!game.players[i].outSkills){
                        game.players[i].in();
                    }
                }
            }
            event.trigger('roundStart');
        }
        'step 4'
        player.getStat().card={};
        player.getStat().skill={};
        player.update();
        event.trigger('phaseBegin');
        'step 5'
        player.phaseDraw();
        if(!player.noPhaseDelay){
            if(player==game.me){
                game.delay();
            }
            else{
                game.delayx();
            }
        }
        'step 6'
        player.phaseUse();
        'step 7'
        player.phaseJudge();
         'step 8'
        game.broadcastAll(function(){
            if(ui.tempnowuxie){
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
            }
        });
        player.phaseDiscard()
        if(!player.noPhaseDelay) game.delayx();
        delete player.using;
        delete player._noSkill;
         'step 9'
        event.trigger('phaseEnd');
        event.trigger('phaseAfter');
        game.delay();
    },
            },
            "sdyx_mingwan3":{
				audio:"ext:金庸群侠传:2",
                mark:true,
                marktext:"弃",
                intro:{
                    content:"下个回合弃牌阶段移摸牌阶段后",
                },
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                priority:2019,
                content:function (){
            'step 0'
        trigger.cancel();
        player.phaseSkipped=false;
        'step 1'
        player.removeSkill('sdyx_mingwan3');
        if(player.skipList.contains('phase')){
            player.skipList.remove('phase');
            event.trigger('phaseSkipped');
            event.finish();
        }
       'step 2'
       event.trigger('phaseBefore');
       game.delay();
        'step 3'
        if((player==_status.roundStart||_status.roundSkipped)&&!trigger.skill){
            delete _status.roundSkipped;
            game.roundNumber++;
            if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
            for(var i=0;i<game.players.length;i++){
                if(game.players[i].isOut()&&game.players[i].outCount>0){
                    game.players[i].outCount--;
                    if(game.players[i].outCount==0&&!game.players[i].outSkills){
                        game.players[i].in();
                    }
                }
            }
            event.trigger('roundStart');
        }
        'step 4'
        player.getStat().card={};
        player.getStat().skill={};
        player.update();
        event.trigger('phaseBegin');
        'step 5'
        player.phaseJudge();
      'step 6'
        player.phaseDraw();
        if(!player.noPhaseDelay){
            if(player==game.me){
                game.delay();
            }
            else{
                game.delayx();
            }
        }
        'step 7'
        player.phaseDiscard()
         'step 8'
        player.phaseUse();
      'step 9'
        game.broadcastAll(function(){
            if(ui.tempnowuxie){
                ui.tempnowuxie.close();
                delete ui.tempnowuxie;
            }
        });
       'step 10'
        if(!player.noPhaseDelay) game.delayx();
        delete player.using;
        delete player._noSkill;
        'step 11'
        event.trigger('phaseEnd');
        event.trigger('phaseAfter');
        game.delay();
    },
            },
            "sdyx_mingwan":{
				 audio:"ext:金庸群侠传:3",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('sdyx_mingwan'),function(card,player,target){
            return !target.hasSkill('sdyx_mingwan3')||!target.hasSkill('sdyx_mingwan2');
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            if(att>2) {
                if(target.countCards('j')) return target.countCards('j');
                return -1;
                }
            if(att<0) {
                if(target.countCards('h')) return target.countCards('h')-target.hp+1;
                return 0.1;
                }
            return -1;
        });
        'step 1'
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('sdyx_mingwan',result.targets);
        }
        else{
            event.finish();
            }
          'step 2'
        if(event.target){
            player.chooseControl('选项一','选项二').set('prompt','冥顽<br><br><div class="text">选项一:将其下个回合的判定阶段移至出牌阶段后</div><br><div class="text">选项二:将其下个回合的弃牌阶段移至摸牌阶段后</div></br>').ai=function(){
               var att=get.attitude(player,event.target);
                if(att>2) return '选项一';
                if(att<0) return '选项二';
                return '选项二';
            };
        }
            'step 3'
        if(result.control=='选项一'){
            event.target.addSkill('sdyx_mingwan2');
        }
        if(result.control=='选项二'){
            event.target.addSkill('sdyx_mingwan3');
        }
    },
            },
            "sdyx_shouxun":{
                mod:{
                    canBeDiscarded:function (card){
            if((get.subtype(card)=='equip1'||get.subtype(card)=='equip5')&&get.position(card)=='e') return false;
        },
                    cardDiscardable:function (card){
            if((get.subtype(card)=='equip1'||get.subtype(card)=='equip5')&&get.position(card)=='e') return false;
        },
                    canBeGained:function (card){
            if((get.subtype(card)=='equip1'||get.subtype(card)=='equip5')&&get.position(card)=='e') return false;
        },
                    targetEnabled:function (card,player,target,now){
            if((player.getEquip(1)&&get.subtype(card)=='equip1')||(player.getEquip(5)&&get.subtype(card)=='equip5')) return false;
        },
                },
                trigger:{
                    target:"useCardToBefore",
                },
                popup:false,
                forced:true,
                priority:15,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
        if(player.getEquip(1)) return get.subtype(event.card)=='equip1';
        if(player.getEquip(5)) return get.subtype(event.card)=='equip5';
        return false;
    },
                content:function (){
        game.log(player,'装备'+get.translation(trigger.card)+'失败');
        trigger.cancel();
    },
            },
"sdyx_qiaoyan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"chooseToCompareBegin",
                },
				usable:1,
				direct:true,
                filter:function (event,player){
        return player.isAlive();
    },
                check:function (){return 1},
                content:function (){
        'step 0'
        //get.prompt('sdyx_qiaoyan')
 player.chooseTarget('是否选择一名角色代替【'+get.translation(trigger.player)+'】打出拼点牌？',function(card,player,target){
            return trigger.player!=target&&trigger.target!=target&&target.countCards('h')>0;
        }).ai=function(target){
            return -get.attitude(player,target);
        }
        'step 1'
        if(result.bool){
        player.logSkill('sdyx_qiaoyan');
			trigger.player = result.targets[0];          
        }
       else{
		   event.finish();
	   }
                },
                ai:{
                expose:0.8,
                },
            },
            "sdyx_qingshi":{
  audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                priority:2019,
                direct:true,
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt2('sdyx_qingshi'),function(card,player,target){
            if(target==player||target.countCards('h')<=0||target.hasSkill('sdyx_qingshi2')) return false;
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
                        if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique&&!pss.contains(skills[j])){
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
        if(result.targets){
            var target=result.targets[0];
            event.target=target;
            player.chooseToCompare(target); 
            player.logSkill('sdyx_qingshi',target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(!result.bool){  
            var target=event.target;
            target.addSkill('sdyx_qingshi2');
            player.damage(target);
            event.finish();
        }
        'step 3'
        var target=event.target;
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
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique&&!pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }            
            }
        }    
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('请师</br></br><div class="center text">选择并获得一项技能直到回合结束</div>');
        var clickItem=function(){
            _status.event._result=this.link;
            dialog.close();
            game.resume();
        };
        for(var i=0;i<list.length;i++){
            if(lib.translate[list[i]+'_info']){
                var translation=get.translation(list[i]);
                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        event.switchToAuto=function(){
            event._result=event.skillai();
            dialog.close();
            game.resume();
        };
        _status.imchoosing=true;
        game.pause(); 
        'step 4'
        _status.imchoosing=false;
        player.popup(result);
        player.addTempSkill(result,'phaseEnd');
        game.log(player,'获得了','【'+get.translation(result)+'】');
        game.delay();
    },
                ai:{
                    threaten:2.3,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player,target);
            },
                    },
                    order:9,
                },
            },
			sdyx_qingshi2:{
			mark:true,
				forced:true,
				init:function (player){
					player.markSkill('sdyx_qingshi2');
				},
				marktext:"师",
				intro:{
                    content:"请师",
                },
				content:function (){},
			},
            sdyx_qimen:{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('sdyx_qimen'),function(card,player,target){
            return !target.hasSkill("sdyx_qimen2");
        }).ai=function(target){
            return get.attitude(player,target);
        }
        "step 1"
        if(result.bool){
            player.logSkill('sdyx_qimen',result.targets);
            result.targets[0].addSkill('sdyx_qimen2',{player:'phaseEnd'});            
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                }
            },
                    },
                },
            },
			 "sdyx_qimen2":{
                trigger:{
                    player:"phaseBegin",
                },
				direct:true,
                priority:Infinity,
                content:function (){
        'step 0'       
        player.getStat().card={};
        player.getStat().skill={};
        player.update();
        'step 1'
        event.list=['判定','摸牌'];
        'step 2'
        player.chooseControl(event.list); 
        game.playJY(['sdyx_qimen1','sdyx_qimen2'].randomGet());
        'step 3'
        if(result.control=='判定'){
            player.skip('phaseJudge');   
            event.list.remove('判定');
			event.list.remove('摸牌');
			player.removeSkill('sdyx_qimen2');
        }
        else if(result.control=='摸牌'){
            player.phaseDraw();
            event.list.remove('摸牌');
		    event.list.remove('判定');
			player.removeSkill('sdyx_qimen2');
        }             
    },
            },
 "sdyx_moshu1":{
                init:function (player){
        player.storage.sdyx_moshu1=[];
    },
                trigger:{
                    global:"useCard",
                },
                intro:{
                    content:"cards",
                },
                usable:1,
                filter:function (event,player){
        if(event.player==player) return false;
        if(!event.cards||event.cards.length!=1) return false;
        if(get.type(event.card)!='trick') return false;
        if(event.card.name=='wuxie') return false;
        return event.cards[0]&&event.cards[0]==event.card;
    },
                content:function (){
					game.playJY(['sdyx_moshu1','sdyx_moshu2'].randomGet());
        if(player.storage.sdyx_moshu1==undefined) player.storage.sdyx_moshu1=[];
            player.storage.sdyx_moshu1.push(trigger.card);
            game.log(player,'记录了'+get.translation(trigger.card)+'');
            player.markSkill('sdyx_moshu1');
    },
            },
            "sdyx_moshu":{
				audio:"ext:金庸群侠传:2",
                group:["sdyx_moshu1"],
                enable:"chooseToUse",
                usable:1,
                filter:function (event,player){
        return player.storage.sdyx_moshu1.length>0;
    },
                chooseButton:{
                    dialog:function (event,player){
            return ui.create.dialog('sdyx_moshu1',player.storage.sdyx_moshu1,'hidden');
        },
                    filter:function (button,player){
            var evt=_status.event.getParent();
            if(evt&&evt.filterCard){
                return evt.filterCard(button.link,player,evt);
            }
            return true;
        },
                    check:function (button){
            if(button.link.name=='du') return -2;
            var player=_status.event.player;
            if(button.link.name=='xingjiegoutong'&&player.countCards('h')>1) return -2;
            if(get.select(get.info(button.link).selectTarget)[1]==-1){
                if(get.type(button.link)=='delay') return -1;
                if(get.type(button.link)=='equip'){
                    var current=player.getCards('e',{subtype:get.subtype(button.link)})[0];
                    if(current&&get.equipValue(current)>=get.equipValue(button.link)) return -1;
                    return 1;
                }
                if(get.tag(button.link,'multitarget')) return -1;
                if(button.link.name=='huoshaolianying') return -1;
            }
            if(button.link.name=='jiu'){
                if(get.effect(player,{name:'jiu'},player)>0){
                    return 1;
                }
                return -1;
            }
            return 1;
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return true},
                selectCard:1,
                viewAs:links[0],
                onuse:function(result,player,event){                 
                    player.storage.sdyx_moshu1.remove(result.card);
                    player.syncStorage('sdyx_moshu1');      
                    player.updateMarks();
                    game.delay(2);
                    if(player.hasSkill('sdyx_cuixin')) player.useSkill('sdyx_cuixin');
                    
                },
            }
        },
                    prompt:function (links,player){
            return '请选择一张手牌当'+get.translation({name:links[0].name,nature:links[0].nature})+'使用';
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                if(_status.event.dying) return get.attitude(player,_status.event.dying);
                return 1;
            },
                    },
                    useful:-1,
                    value:-1,
                },
            },
            "sdyx_cuixin":{
				audio:"ext:金庸群侠传:2",
                content:function (){
        "step 0"
        player.chooseControl('流失体力','失去一体力上限',function(event,player){
            if(player.hp==player.maxHp) return '流失体力';
            if(player.hp<player.maxHp-1||player.hp<=2) return '失去一体力上限';
            return '流失体力';
        });
        "step 1"
        if(result.control=='流失体力'){
            player.loseHp();
        }
        else{
            player.loseMaxHp(true);
        }
    },
                ai:{
                    threaten:0.5,
                },
            },
	
	"sdyx_cihuai":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        if(!player.countCards('h')) return false;
        var cards=player.getCards('h');
        for(var i=1;i<cards.length;i++){
            if(get.suit(cards[i])!=get.suit(cards[0])) return false;
        }
        return true;
    },
                content:function (){
        "step 0"
        event.gain=[];
       player.showHandcards();
        var hs=player.getCards('h');
       event.suit=get.suit(hs[0]);
        "step 1"
        event.gained=[];
        "step 2"
        event.cards=get.cards()[0];
        player.showCards(event.cards);
        event.gained.push(event.cards);
        "step 3"
       if(event.suit!=get.suit(event.cards)){
           event.goto(2);
           }
        else{
            player.gain(event.gained,'gain2');
        }
    },
                ai:{
                    order:9,
                    result:{
                        player:2,
                    },
                    threaten:1.2,
                },
            },
            "sdyx_qushang":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                direct:true,
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        "step 0"
        player.chooseCardTarget({
            filterCard:function (card){
            var suit=get.suit(card);
                for(var i=0;i<ui.selected.cards.length;i++){
                    if(get.suit(ui.selected.cards[i])==suit) return false;
                }
                return true;
            },
            selectCard:[1,4],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                return 10-get.value(card);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(att>2){
                    if(target.isTurnedOver()) return 1;
                    return target.hp<target.maxHp&&ui.selected.cards.length==1&&target.countCards('h')>=3;
                }
                if(att<0){
                    if(target.isTurnedOver()) return -1;
                    return (1-att)&&ui.selected.cards.length==2&&target.countCards('h')<3&&target.hp==target.maxHp;
                }
                return -1;
            },
            prompt:'请选择一名其他角色'
        });
        "step 1"
        if(result.bool){
            player.logSkill('sdyx_qushang',result.targets[0]);
            player.discard(result.cards);
            event.cardsss=result.cards;
            var ssuit=[];
            for(var i=0;i<result.cards.length;i++){
                var ssuits=get.suit(result.cards[i]);
                if(!ssuit.contains(ssuits)){
                    ssuit.push(ssuits);
                }
            }
            event.target=result.targets[0];
            var next=event.target.chooseToDiscard('he',result.cards.length,'是否弃置'+result.cards.length+'张牌回复一体力？,否则翻面并获得弃置的牌',function(card,player){
                var suit=get.suit(card);
                if(!ssuit.contains(suit)) return false;
                for(var i=0;i<ui.selected.cards.length;i++){
                    if(get.suit(ui.selected.cards[i])==suit||!ssuit.contains(suit)) return false;
                }
                return true;
            });
            next.ai=function(card){
                if(event.target.isTurnedOver()) return -1;
                if(result.cards.length<=2&&event.target.hp<event.target.maxHp) return 1;
                if(result.cards.length>2) return -1;
                return 9-get.value(card);
            };
        }
        "step 2"
        if(result.bool){
            event.target.recover();
        }
        else{
            event.target.turnOver();
            event.target.$gain2(event.cardsss);
            event.target.gain(event.cardsss);
        }
        
    },
                ai:{
                    threaten:0.6,
                },
            },
			"sdyx_jianchi":{
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha'&&_status.currentPhase==player) return true;
        },
                    selectTarget:function (card,player,range){
            if(player.maxHp-player.hp>0&&_status.currentPhase==player){
                if(card.name=='sha'&&range[1]!=-1) range[1]+=player.maxHp-player.hp;
            }
        },
                },
            },
            "sdyx_yuzhong":{
                group:["sdyx_yuzhong_use","sdyx_yuzhong_sha"],
                subSkill:{
                    use:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.skill!='sdyx_yuzhong_sha') return false;
                return true;
            },
                        content:function (){
							game.playJY(['sdyx_yuzhong1','sdyx_yuzhong2','sdyx_yuzhong3','sdyx_yuzhong4'].randomGet());
                player.loseHp();
                if(_status.currentPhase==player&&trigger.name=='useCard'){
                    player.getStat().card.sha--;
                    player.addTempSkill('sdyx_yuzhong_off','phaseEnd');
                }
            },
                        sub:true,
                    },
                    sha:{
                        enable:["chooseToRespond","chooseToUse"],
                        viewAs:{
                            name:"sha",
                        },
                        filterCard:function (){return false},
                        viewAsFilter:function (player){
                 if(player.hasSkill('sdyx_yuzhong_off')) return false;
            },
                        selectCard:-1,
                        mark:false,
                        prompt:"视为使用或打出一张杀",
                        ai:{
                            order:function (){
                    var player=_status.event.player;
                    if(_status.currentPhase==player&&player.hasSha()&&player.hp>=2){
                        return get.order({name:'sha'})+0.1;
                    }
                    return get.order({name:'sha'})-0.5;
                },
                            skillTagFilter:function (player,tag,arg){
                    if(player.hasSkill('sdyx_yuzhong_off')) return false;
                },
                            respondSha:true,
                            basic:{
                                useful:[5,1],
                                value:[5,1],
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
                    off:{
                        sub:true,
                    },
                },
            },
			 "sdyx_danxin":{
                audio:"ext:金庸群侠传:4",
                trigger:{
                    global:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
        },
                filter:function (event,player){
        return player.countCards('h')>0&&event.player.countCards('h')>0&&event.player!=player;
    },
                logTarget:"player",
                content:function (){
        'step 0'
        player.chooseToCompare(trigger.player);
        'step 1'
        if(result.bool){
            trigger.skipShan=true;
            player.gain(trigger.card);
			trigger.cancel();
        }
        'step 2'
        if(!result.bool&&trigger.target!=player){
                           trigger.target=player;        
                           trigger.untrigger();
                           trigger.trigger('useCardToBefore');
                           trigger.trigger(trigger.card.name+'Before');
                           trigger.player.line(player);
        }
    },
                ai:{                   
    expose:0.8,
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&current<0) return 0.7;
            },
                    },
                },
            },
            "sdyx_polu":{
                unique:true,
                mod:{
                    attackFrom:function (from,to,distance){ 
           return distance-from.maxHp+from.hp;
           },
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+player.maxHp-player.hp;
        },
                },
            },
            "sdyx_longyin":{
                unique:true,
                global:"sdyx_longyin2",
                zhuSkill:true,
            },
            "sdyx_longyin2":{
                mod:{
                    attackTo:function (from,to,distance){
            if(from.group!='wei') return;
            var players=game.filterPlayer();
           
            for(var i=0;i<players.length;i++){
                if(from!=players[i]&&to!=players[i]&&
                    players[i].hasZhuSkill('sdyx_longyin',from)){
                    if(get.distance(players[i],to)<=players[i].getAttackRange()) return distance-Infinity;
                }
            }
        },
                },
            },
			"sdyx_sheqi":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countUsed('sha')==0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('sdyx_sheqi'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('sdyx_sheqi',result.targets);
            event.target=result.targets[0];
           
        }
        "step 2"
        if(event.target){
            event.target.addSkill('sdyx_sheqi_wushi');
            game.delay();
            event.target.chooseToUse({name:'sha'},'是否使用一张杀;此杀无距离限制无视无视防具，').set('targetRequired',true);
        }
        "step 3"
        if(event.target){
            event.target.removeSkill('sdyx_sheqi_wushi');
        }
    },
                group:["sdyx_sheqi_wushi"],
                subSkill:{
                    wushi:{
                        mod:{
                            targetInRange:function (card,player,target,now){
                    if(card.name=='sha') return true;
                },
                        },
                        ai:{
                            unequip:true,
                            skillTagFilter:function (player,tag,arg){
                    if(arg&&arg.name=='sha') return true;
                    return false;
                },
                        },
                        sub:true,
                        popup:false,
                    },
                },
            },
            "sdyx_guifu":{
                init:function (player){
        player.storage.sdyx_guifu=[];
    },
                trigger:{
                    global:"phaseEnd",
                },
				 audio:"ext:金庸群侠传:2",
                forced:true,
                filter:function (event,player){
        return player.storage.sdyx_guifu.length>0;
    },
                intro:{
                    content:"cards",
                },
                content:function (){
        "step 0"
        player.chooseCardButton(player.storage.sdyx_guifu,1,'归附：选择交给一名其他角色的牌').set('ai',get.buttonValue);
        "step 1"
        if(result.bool){
            event.togive=result.links.slice(0);
            player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,'',function(card,player,target){
            return target!=player;
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
        "step 2"
        if(result.targets.length){
            player.logSkill('sdyx_guifu',result.targets[0]);
            result.targets[0].gain(event.togive,'draw');
            player.line(result.targets[0],'green');
            game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
        }
        "step 3"
       player.storage.sdyx_guifu=[];
        "step 4"
       player.unmarkSkill('sdyx_guifu');
        player.syncStorage('sdyx_guifu');
    },
                group:["sdyx_guifu_add"],
                subSkill:{
                    add:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
            },
                        content:function (){
                 "step 0"
                // player.storage.sdyx_guifu.push(trigger.cards);
                  if(_status.currentPhase==player){
					 // game.playJY(['sdyx_guifu1','sdyx_guifu2'].randomGet());
                      if(player.storage.sdyx_guifu==undefined) player.storage.sdyx_guifu=[];
                      game.log(player,'标记了'+get.translation(trigger.card)+'');
                      player.storage.sdyx_guifu=player.storage.sdyx_guifu.concat(trigger.card);
                      player.syncStorage('sdyx_guifu');
                      player.markSkill('sdyx_guifu');
                  }
            },
                        sub:true,
                    },
                },
                ai:{
                    threaten:1,
                },
            },
		
           },

 translate:{
	 "sdxy_kezhenge":"柯镇恶",
            "sdxy_xiadan":"侠胆",
            "sdxy_xiadan_info":"你受到伤害后，你可以可以令受到伤害来源的任意名角色各摸一张牌<br><li>若伤害来源未对除你以外的其他角色造成伤害，则你摸两张牌。",
            "sdxy_xiangmo":"降魔",
            "sdxy_xiangmo_info":"每轮限一次，一名角色对令一名角色造成伤害后，你可以选择一项:①令其弃置X张牌，②令目标摸X张牌。(X为其与目标的手牌数之差且大于零)",
	  "sdxy_duantiande":"段天德",
            "sdxy_ninglu":"佞禄",
            "sdxy_ninglu_info":"每回合限一次，你对目标造成伤害后，你可以获得其攻击范围内的至多两名其他角色，获得这些角色区域里的一张牌，若如此做，其下回合不能使用牌指定这些角色为目标。",
            "sdxy_huoyan":"惑言",
            "sdxy_huoyan_info":"每当你成为杀【杀】或【万箭齐发】的目标时，若你没有装备防具牌，你可以令一名装备了防具牌的角色选择一项，①令你视为装备了其的防具牌，直到此牌结算完毕。②其弃置其的装备牌。",
       "sdyx_meichaofeng":"梅超风",
            "sdyx_baigu":"白骨",
            "sdyx_baigu_info":"你的下个回合的摸牌阶段摸牌数-1",
            "sdyx_baigu2":"白骨",
            "sdyx_baigu_info":"你的下个回合的弃牌阶段手牌上限-1",
            "sdyx_baigu3":"白骨",
            "sdyx_lizhuao":"厉爪",
            "sdyx_lizhuao_info":"<font color=#F0F>九阴白骨爪</font> 当你使用“杀”造成的伤害后，若该角色没有“白骨爪”标记，你可以令其获得之。转换技，拥有“白骨爪”标记的角色每个回合须执行一项：①摸牌阶段摸牌数-1；②手牌上限-1。",
            "sdyx_shien2":"师恩",
             "sdyx_shien":"师恩",
            "sdyx_shien_info":"当其他角色受到来源不为你的伤害时，你可与其各摸一张牌，若如此做，你代替其承受此次伤害。",
            "sdyx_guidao":"归岛",
            "sdyx_guidao_info":"限定技。准备阶段开始时，若你发动“师恩”的目标角色不少于3个，你可以选择失去技能“师恩”并永久拥有技能“归岛”（准备阶段开始时，你可选择一名你对其发动过“师恩”的角色，然后获得其一项除主公技、觉醒技、限定技以外的技能，直到回合结束）。",
            "sdyx_guidao_info_alter":"限定技。准备阶段开始时，你可以选择一名你对其发动过“师恩”的角色，然后获得其一项技能，直到回合结束。",      
	  "sdyx_yangkang":"杨康",
            "sdyx_weifu":"威福",
            "sdyx_weifu_info":"<span style=\"color:#CD7F32\">转换技</span><br><li>①<span style=\"color:#FF0000\">当有角色拼点赢后，你可以令其摸两张牌。</span><br><li>②<span style=\"color:#FF00FF\">当有角色拼点没赢后，你可以令其弃置两张牌。</span>",
            "sdyx_lisuo":"利锁",
            "sdyx_lisuo_info":"<span style=\"color:#FF7F00\">当你受到伤害后，你可以与一名手牌数大于你的角色拼点。若你赢，你将手牌数补至其手牌数向等。</span>",
"sdyx_yinggu":"瑛姑",
            "sdyx_xingshang":"杏殇",
            "sdyx_xingshang_info":"每当其他角色对你距离1以内的其他角色造成1点伤害后，你获得一枚“杏殇”标记。锁定技。若你有“杏殇”标记，你计算其他角色的距离-1。",
            "sdyx_guti":"啼孤",
            "sdyx_guti_info":"觉醒技。准备阶段，若你的“杏殇”标记不小于3，你减1点体力上限，并获得技能“血仇”。",
            "sdyx_xuechou":"血仇",
            "sdyx_xuechou_info":"出牌阶段，你可以移除一枚“杏殇”标记，并将一张手牌当“决斗”使用。",	 
	 "sdyx_qiuqianren":"裘千仞",
            "sdyx_tiezhang":"铁掌",
            "sdyx_tiezhang_info":"你使用杀造成伤害后，你可以弃置场上一张与此杀花色相同装备牌或延时锦囊牌。",
            "sdyx_huolian":"祸连",
            "sdyx_huolian_info":"出牌阶段，你可以令一名其他角色选择是否交给其攻击范围由你选择的另一名其他角色一张红桃牌。若其选择否，视为你对其使用了一张杀。",
	  "sdyx_hongqigong":"洪七公",
            "sdyx_xiangyan":"飨宴",
            "sdyx_xiangyan_info":"你受到伤害后，你可以亮出牌堆顶5张牌，你获得不同类型（注：延时锦囊牌和普通锦囊牌类型不同）的牌各一张，将其余牌置入弃牌堆。",
            "sdyx_shouming":"授命",
            "sdyx_shouming_info":"每轮限一次，其他角色出牌阶段开始时，若你已受伤，你可以交给其一张装备牌，若如此做，其本回合内获得“降龙”。",
	  "sdyx_ouyanke":"欧阳克",
            "sdyx_mushe":"牧蛇",
            "sdyx_mushe_info":"出牌阶段限一次，你可以将一张黑桃手牌交给一名其他角色，其回合结束时，若其未于此回合同造成过雷电伤害，其需交给你两张黑桃牌或受到你的一点雷电伤害。",
            "sdyx_zhijie":"积黠",
            "sdyx_zhijie_info":"其他角色出牌阶段开始时，你可以令其选择：交给你一张黑桃牌；或其不能于此回合内使用黑桃牌。若你以此法获得了牌，此技能失效直到下一轮开始。",
	 "sdyx_zhoubotong":"周伯通",
            "sdyx_mingwan":"冥顽",
            "sdyx_mingwan_info":"每当你受到一点伤害后，你可以选择一名角色，将其下个回合判定阶段移至出牌阶段后，或将其下个回合弃牌阶段移至摸牌阶段后（已有“判”或“弃”标记的角色不能被选择）。",
            "sdyx_shouxun":"守训",
            "sdyx_shouxun_info":"锁定技。你不能失去装备区里的武器牌。",
			"sdyx_mingwan2":"判定移出牌阶段后",
            "sdyx_mingwan2_info":"",
            "sdyx_mingwan3":"弃牌移摸牌阶段后",
            "sdyx_mingwan3_info":"",
	 "sdyx_huangrong":"黄蓉",
            "sdyx_qiaoyan":"巧言",
            "sdyx_qiaoyan_info":"每回合限一次，当一名角色拼点时，你可令另一名未参与此次拼点的角色代替其打出拼点牌。",
            "sdyx_qingshi":"请师",
			"sdyx_qingshi2":"师",
            "sdyx_qingshi_info":"回合开始时，你可与一名其他角色拼点，若你赢，你于此回合内获得其一项除觉醒技、主公技和限定技以外的技能；若你没赢，本局游戏你不能再对该角色发动“请师”且你受到其一点伤害。",
            "sdyx_qimen":"奇门",
		    "sdyx_qimen2":"奇门",
            "sdyx_qimen_info":"当你受到1点伤害后，你可以令一名角色于下个回合额外执行一个摸牌阶段或跳过判定阶段。",
	 "sdyx_fengheng":"冯蘅",
	  "sdyx_moshu1":"默书",
            "sdyx_moshu1_info":"",
            "sdyx_moshu":"默书",
            "sdyx_moshu_info":"每回合限一次，其他角色使用普通锦囊牌后，你可以获得一枚“拓印”标记，并将此牌拓印于此标记上。出牌阶段限一次，你可以移除一枚“拓印”标记，然后将一张手牌当此拓印于标记上的普通锦囊牌使用。",
            "sdyx_cuixin":"瘁心",
            "sdyx_cuixin_info":"锁定技。你每移除一枚“拓印”标记，你须选择一项：失去一点体力；或减一点体力一限。",
	 "sdyx_ouyangfeng":"欧阳锋",
            "sdyx_shezhang":"蛇杖",
            "sdyx_shezhang_info":"锁定技。若你的装备区里没有装备武器牌，你视为装备了朱雀羽扇。",
            "sdyx_duxi":"毒袭",
            "sdyx_duxi_info":"每当你造成火焰伤害时，你可以弃置一张黑桃手牌，令此伤害+1。",
            "sdyx_nijing":"逆筋",
            "sdyx_nijing_info":"你可以将雷杀当酒使用。",
   "sdyx_xguojing":"SP郭靖",
            "sdyx_zhebie":"哲别",
            "sdyx_huangyaoshi":"黄药师",
            "sdyx_guojing":"郭靖",
			"sdyx_sheqi":"射骑",
            "sdyx_sheqi_info":"锁定技，你使用的杀无距离限制，且无视目标的防具。出牌阶段结束时，若你此阶段未使用过杀，你可以令一名其他角色选择是否使用一张无视距离和目标防具的杀。",
            "sdyx_guifu":"归附",
            "sdyx_guifu_info":"回合结束时，你可以将你本回合一张因使用而进入弃牌堆的牌交给一名其他角色。",
			 "sdyx_danxin":"丹心",
            "sdyx_danxin_info":"其他角色使用杀指定目标后，你可以与其拼点，若你赢，此杀无效且你获得之；若你未赢且你不是目标，此杀的目标改为你。",
            "sdyx_polu":"破虏",
            "sdyx_polu_info":"锁定技，你的攻击范围+X，你使用杀的次数+X（X为你已损失的体力值）。",
            "sdyx_longyin":"龙吟",
            "sdyx_longyin_info":"盟主技。锁定技。你攻击范围的角色视为在其他魏势力角色的攻击范围内。",
            "sdyx_longyin2":"",
			 "sdyx_cihuai":"悲怀",
            "sdyx_cihuai_info":"回合开始时，若你的手牌只含一种花色，你可以展示所有手牌，然后依次亮出牌堆顶的牌，直到出现与你手牌花色相同的牌为止，你获得这些牌。",
            "sdyx_qushang":"曲殇",
            "sdyx_qushang_info":"每当你受到伤害后，你可以弃置任意张花色各不同的牌并选择一名其他角色，令其选择一项：弃置与此法弃置花色和数量相同的牌并回复1点体力；或获得你弃置的牌并翻面。",
            "sdyx_jianchi":"箭驰",
            "sdyx_jianchi_info":"锁定技。你使用的杀无距离限制并且可以额外指定X名目标（X为你已损失的体力值）。",
            "sdyx_yuzhong":"愚忠",
            "sdyx_yuzhong_info":"当你需要使用打出杀时，你可以失去一点体力，视为你使用或打出了此牌。你的回合内只能以此发使用一次杀，且不计入回合内次数。",
			 "sdyx_xianglong":"降龙",
            "sdyx_xianglong_info":"当你使用杀指定目标后，你可以对目标角色造成1点伤害。若如此做，若此杀造成伤害，你须失去1点体力。",
                               
        },
};
			if(lib.device||lib.node){
				for(var i in sdyx.character){sdyx.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in sdyx.character){sdyx.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return sdyx;
		});
		lib.config.all.characters.push('sdyx');
		if(!lib.config.characters.contains('sdyx')) lib.config.characters.remove('sdyx');
		lib.translate['sdyx_character_config']='射雕英雄传';
		
game.import('character',function(){
			var yttl={
				name:'yttl',
				connect:true,
				character:{
					 "yttl_zhangsanfeng":["male","wu",3,["yttl_taiji","yttl_chunyan","yttl_taoli"],['zhu']],                       
            "yttl_changbaisanqin":["male","wu",4,["yttl_fendao","yttl_kuiyu"],[]],			
			"yttl_yangxiao":["male","wu",3,["yttl_xingshi","yttl_jieao"],[]],
			"yttl_zhuyuanzhang":["male","wu",3,["yttl_qingce","yttl_yaohui","yttl_yinyuan"],['zhu']],
			 "yttl_due":["male","wu",3,["yttl_jingang","yttl_fumo","yttl_guchan"],[]],
			 "yttl_yinli":["female","wu",4,["yttl_chuxin","yttl_maodu"],[]],
			 "yttl_jinhuapopo":["female","wu",3,["yttl_hanji","yttl_jiedao"],[]],
			 "yttl_changbaoshu":["male","qun",4,["yttl_qizhao","yttl_lingjian"],[]],
			 "yttl_changyuchun":["male","wu",4,["yttl_xiaoyong","yttl_xianfeng"],[]],
			 "yttl_yinliting":["male","wu",4,["yttl_chanru","yttl_tongshou"],[]],
			 "yttl_luhe":["male","wu",4,["yttl_xuanming","yttl_hanyin"],[]],
			  "yttl_miejue":["female","wu",3,["yttl_zhangjian","yttl_huiqiao","yttl_jie"],[]],
			  "yttl_songqingshu":["male","wu",3,["yttl_jixian","yttl_nishi"],[]],
			  "yttl_zhangcuishan":["male","wu",3,["yttl_cstaiji","yttl_yinjiu"],[]],
			  "yttl_zhangwuji":["male","wu",4,["yttl_nijue","yttl_jiuyang","yttl_chuqiao"],['zhu']],
			  "yttl_daiqisi":["female","wu",3,["yttl_miling","yttl_jinhua"],[]],
			  "yttl_spzhouzhiruo":["female","wu",3,["yttl_duanren","yttl_juejue"],[]],
			  "yttl_hanqianye":["male","wu",3,["yttl_gudan","yttl_qiyuan","yttl_yinshi"],[]],
			     "yttl_zhouzhiruo":["female","wu",4,["yttl_yaren","yttl_zhangquan"],[]],
				 "yttl_chenyouliang":["male","wu",3,["yttl_cefan","yttl_tongyi"],[]],
				  "yttl_yangdingtian":["male","wu",3,["yttl_yixing","yttl_qiangmei"],[]],
				   "yttl_yangbuhui":["female","wu",3,["yttl_jiandie","yttl_biyi"],[]],
				   "yttl_yinsusu":["female","wu",3,["yttl_congshan","yttl_tuobiao"],[]],
				   "yttl_yinyewang":["male","wu",4,["yttl_feiding","yttl_yangwei"],[]],
            "yttl_spxuanmingerlao":["male","wu",4,["yttl_xuanyin","yttl_mingjian"],[]],
            "yttl_xiexun":["male","wu",4,["yttl_shikon","yttl_wudao"],[]],
			"yttl_weiyixiao":["male","wu",4,["yttl_binzhang","yttl_xuefu","yttl_zhuiyun"],[]],
			"yttl_xiaozhao":["female","wu",3,["yttl_lianxiang","yttl_yibi"],[]],
				 
       
},
characterIntro:{
				"yttl_zhangsanfeng":"张三丰悟性超然，天赋卓绝，自创武当派，能同少林寺分庭抗礼，是名扬天下的一代宗师，除七个入室弟子外，桃李遍天下。为人正气凛然，颇有仙风道骨之姿，是当世无出其右的武学奇才。出名绝学繁多，其中太极拳法以静制动，以柔克刚；太极剑更是达到无招胜有招的境界。【CV：觅阳】",		
			    "yttl_yangxiao":"杨逍样貌俊雅，风度翩翩，与范遥人称逍遥二仙，是明教光明左使。为人亦正亦邪，孤傲不羁，少年时与峨嵋派男弟子孤鸿子比武，夺剑后掷地而去，气死孤鸿子，从此与峨眉派结怨。六大派围攻明教光明顶时，携教众奋力抵抗，成为对抗六大派的中坚力量，最后在张无忌相助之下取得胜利。【CV：青灯折扇不语】",
				"yttl_yinli":"明教护法殷天正的孙女，因痛恨二娘欺负母亲而杀之，致使父女关系决裂。为练习千蛛万毒手不惜以血饲蛛，因而变得容貌丑陋。后因周芷若嫉妒她是张无忌未婚妻而对其狠下杀手，死里逃生的殷离因毒素流尽而恢复绝美容颜。与张无忌重逢时表明自己爱的是当年在蝴蝶谷相遇的曾阿牛而非现在长大的张无忌。【CV：阿九】",
			    "yttl_zhuyuanzhang":"金庸小说《倚天屠龙记》中的朱元璋，本是明教中的义军元帅，属张无忌的部下。在结尾大破元军之后，朱元璋表现出了超强的权欲野心，因其忌惮张无忌地位稳固，他用计成功挑拨了张无忌和徐达、常遇春的关系，导致其为了明哲保身而退出明教。他拉拢人心，工于心计，终成明朝开国皇帝。【CV：青灯折扇不语】",
		    	"yttl_changbaisanqin":"郭公破虏保卫襄阳战死沙场之后，其屠龙宝刀流落江湖，不知所踪。在小说《倚天屠龙记》中首次出现，是在来自三白山的三大枭雄手中。长白三禽不能悟出宝刀秘密，于是决定使用烈火对其进行焚烧，希望能看透个中蹊跷。随后屠龙宝刀被海沙帮的人劫走，自此，拉开了《倚天屠龙记》故事的序幕。【CV：青灯折扇不语】",
                "yttl_due":"渡厄与渡难、渡劫为当时少林寺辈分最高的高僧，渡厄为三僧之首。三僧共同设金刚伏魔圈看守关押在少林寺的谢逊。张无忌等一众明教高手屡次前来破阵营救谢逊都无法得手，其枯禅功夫更能达到物我两忘的境界。最后渡厄与谢逊化解了一切恩怨并收其为徒，仍赐其法名为“谢逊”。【CV：觅阳】",	
                "yttl_jinhuapopo":"明教紫衫龙王黛绮线和丈夫韩千叶退出江湖之后，以金花银叶的绰号隐居在灵蛇岛。韩千叶因寒疾死后，黛绮丝易容为金花婆婆，行走在江湖中，其暗器金花镖令人闻风丧胆。她命令徒弟小昭潜伏在明教打探乾坤大挪移的心法，并上冰水岛向谢逊求借屠龙刀，以雪当年败给灭绝师太之辱。【CV：遂非】",		   
                "yttl_changyuchun":"常遇春，字伯仁，号燕衡，元末红巾军杰出将领，明朝开国名将。元顺帝至正十五年，归附朱元璋，自请为前锋，力战克敌，尝自言能将十万众，横行天下，枚军中称常十万。曾在汉水边为救少主与四名番僧和七八名蒙古武官打斗被伤，被经过的张三丰搭救，后带小张无忌去蝴蝶谷求助胡青牛为其疗伤，使得张无忌成为胡青牛医术的传人。【CV：蚩宇】",
		    	"yttl_changbaoshu":"波斯明教教主座下十二宝树王之一，在十二宝树王中排名第三，武功最高。常胜宝树王在败于张无忌后，因对方爱才之心未被擒拿，故而常胜王既感激又羞愧。后与大圣、智慧二王一同出使中土，在与中华明教教主张无忌交换礼物后，学得了张无忌所传授的一部分乾坤大挪移和圣火令神功。【CV：蚩宇】",
                "yttl_yinliting":"殷梨亭在武当七侠中排行第六，但七师弟少年老成，他倒显得最为稚嫩文弱。殷梨亭素来情感细腻、悲春伤秋，因少年时期情感失利而终生郁郁寡欢，一颗心已系在纪晓芙身上。奈何人心肉长，在纪晓芙之女杨不悔的努力坚持下，殷梨亭终于被打动，两人总算修成正果，结局圆满。【CV：神齐大叔】",
				"yttl_luhe":"鹿杖客鹤笔翁是同门师兄弟，前者好色，后者好酒，人称玄冥二老。两人武功高强却投身王府以供驱策，成为蒙元朝廷的鹰犬。玄冥二老的武功绝学是玄冥神掌，至阴至寒，闻名江湖。两人曾在万安寺看守六大派期间被酒色迷惑，以至六大派被张无忌等人救走，误了郡主赵敏的大计。【CV：弈声传媒有声工作室】",
				"yttl_miejue":"峨嵋掌门人，性情刚烈，正邪不两立，嫉恶如仇但并非不讲道理，保持宗师风度。凭祖传倚天剑行走江湖，光明顶一役后被赵敏囚于万安寺内，将掌门之位传给周芷若，毅然跳下万安寺，张无忌欲用乾坤大挪移相救，但其绝不受明教恩惠，遂以毕生功力发掌相抗，导致自己摔死于万安寺塔下。【CV：仙女桥】",
				"yttl_songqingshu":"宋青书是武当七侠之首宋远桥之子，本是武当第三代传人中的佼佼者，文武双全出类拔萃，但因心爱的周芷若倾心于张无忌，加上张无忌年纪轻轻便武功卓越，闻名江湖，宋青书对其妒火中烧。宋青书曾被丐帮陈友挑唆加入丐帮，被逼向武当张三丰下毒，但未真正付诸行动。后被张三丰击毙。【CV：神齐大叔】",
				"yttl_zhangwuji":"武当张翠山和天鹰教殷素素之子，自小在冰火岛过着原始生活，踏足中原后便幼失怙恃，回到武当张真人门下。因缘巧合下学会九阳神功和乾坤大挪移，可以对敌人的武功进行牵引挪移，更是治好了缠身多年的玄冥神掌之毒，武艺绝世且又以德服人，被处于危亡中的明教教众推举为第三四十任教主，英雄出少年。【CV：林写】",
				"yttl_zhangcuishan":"张翠山在武当七侠中排行第五，江湖人称铁划银勾。俞岱岩被大力金刚指弄断双腿后，张翠山在追查元凶的过程中与殷素素结识，两人与谢逊一同漂流到冰火岛，在岛上的十余年内相爱，并生下儿子张无忌。回到中原后，得知妻子殷素素便是伤害俞三侠的元凶，侠义包天的他，自刎谢罪而死。【CV：】",
				"yttl_daiqisi":"原为波斯明教三圣女之一，加入中土明教后出任护法紫衫龙王。因代替教主阳顶天接受韩千叶的挑战而被重用，却与韩千叶沉迷爱河叛离明教。韩千叶死后，她易容为金花婆婆，并将女儿小昭当作丫头安插在明教暗中打探乾坤大挪移心法的下落。善于使用金花暗器，江湖人士无不闻风丧胆。【CV：徐安】",
				"yttl_hanqianye":"韩千叶是海外灵蛇岛岛主，因父亲当年与明教教主阳顶天结下仇怨，年纪轻轻便登上光明顶进行挑战。紫衫龙王黛绮丝主动请缨，与他在碧水寒潭一决胜负。韩千叶因寒成疾，黛绮丝主动照顾，病榻之畔，因怜生爱。后两人不顾世俗的反对结成夫妇，并以“金花银叶”的称号隐退江湖。【CV：林三】",
				"yttl_spzhouzhiruo":"周芷若自小丧父，投入峨嵋派门下，深受师父灭绝师太器重，却引来同门师姐妹嫉妒。本来是个无欲无争的弱女子，却因为与张无忌的感情破灭而变得心狠手辣，为达目标不择手段，获得倚天剑中的《九阴真经》练成绝世武功，令众师姐妹无一不服；更与苦恋自己的宋青书成亲，用折磨对方的方式来治疗情伤。【CV：地鼠】",
				"yttl_yinsusu":"明教护法殷天正的女儿，紫薇堂堂主。智计百出，亦正亦邪。为夺得屠龙刀用暗器偷袭俞岱岩后托龙门镖局将他送回武当山，半途俞岱岩被番僧阿三使用大力金刚指重伤致使终身残废，殷素素一怒之下将龙门镖局灭门。后与张翠山被迫远走冰火岛并相爱生子，回到中土真相大白后，张翠山自刎谢罪，殷素素随殉夫。【CV：仙女桥】",
			    "yttl_yangbuhui":"杨不悔是纪晓芙和杨逍之女，在照顾双腿残疾的殷梨亭殷六叔的过程之中，逐渐被他对母亲纪晓芙的深情感动。因母亲生前有负殷梨亭，杨不悔因怜生爱，坚心不移地爱上了殷梨亭。在父亲杨逍的强烈反对下和殷梨亭的多番逃避下，她依然情深不移，殷梨亭最终钢铁心化绕指柔，二人结成正果，甜蜜幸福。【CV：Yinke.吟可】",
			    "yttl_yangdingtian":"阳顶天是中土明教第三十三代教主，执掌明教二十余年，在位期间将中土明教治理得十分兴盛，并拒绝波斯明教总教的降元命令，怀有驱除鞑虏之宏愿。阳顶天武功高强，将明教镇教武学“乾坤大挪移”修炼至第四层，是当时明教乃至武林的绝顶高手。他强娶了师弟成昆的心上人，后撞破其二人的奸情，走火入魔而死。【CV：】",
				"yttl_chenyouliang":"陈友谅是混元霹雳手成昆的徒弟，同时是丐帮八袋长老，生性多疑，行事缜密周全。为人阴险狠毒，善于权谋。曾挑唆宋青书杀死师叔莫声谷。宋青书因嫉妒张无忌年少有为，江湖地位崇高又获得周芷若芳心，于是投靠丐帮。陈友谅利用他的人性弱点和性格软肋，教唆他向武当门人下毒以便谋取明教和武当派。【CV：】",				
				"yttl_yinyewang":"殷野王是明教白眉鹰王殷天正之子，殷素素的哥哥。阳顶天失踪后，明教群龙无首，四分五裂，殷氏父子独自创立了天鹰教。为了令天鹰教名扬江湖，他和殷素素使用暗器偷袭俞三侠，获得了屠龙宝刀，并在王盘山举行扬刀大会进行立威。后来屠龙刀在王盘山被金毛狮王谢逊劫走。【CV：】",
				"yttl_spxuanmingerlao":"玄冥二老是江湖中少有的一流高手，年高却德薄，心甘情愿做蒙元朝廷的走狗，助其攻击中土明教，空有一身高强武艺。凭借其绝学玄冥神掌纵横武林，曾用此掌伤了幼年的张无忌，导致其几番求医都无果，最后张无忌练习了九阳神功，方才化解体内淤积多年的寒毒。【CV：弈声传媒有声工作室】】",
			    "yttl_xiexun":"明教四大抗法之一，因头发金黄，故人称金毛狮王。魁伟雄奇，性烈如火，全家一十三口中被师父成昆所杀，不惜滥杀无辜引出成昆。曾杀少林空见神僧，终生愧疚。以狮子吼震败王盘山群雄，抢夺屠龙刀，在冰火岛独居二十年参悟刀中秘密。后与义子张无忌重逢，其大败成昆后，归于佛门。【CV：】",
				"yttl_zhouzhiruo":"周芷若幼时父亲遭元兵杀害，遇张三丰相救，与少年张无忌在汉水舟中邂逅，后被送至峨嵋派成为灭绝师太器重的弟子，灭绝师太自尽前传其掌门之位并告知其倚天剑的秘密。周芷若时运不济，在登上掌门之位的路上屡受阻拦，更遭同门师姐妹排挤和追杀。后获得倚天剑练成九阴白骨爪，终执掌峨嵋派大权。【CV：Stella薇】",
				"yttl_xiaozhao":"小昭是紫衫龙王黛绮丝和银叶先生韩千叶之女。奉母之命扮作丑陋容貌混入光明顶，盗取乾坤大挪移心法。张无忌处处对她维护有加，使其心生感激并爱上张无忌，一直以丫头的名义侍奉左右。容貌秀丽且性情温和，精通五行八卦术。曾为张无忌翻译圣火令神功，助其击退波斯明教十二宝树王。后代替母亲作为圣女回到波斯。【CV：仙女桥】",
				"yttl_weiyixiao":"韦一笑是金庸笔下轻功第一高手，可谓无人能比。韦一笑是明教四大护法之一，人称青翼蝠王。他在修练至阴至寒的“寒冰绵掌”时走火入魔，经脉中郁积了寒毒，要吸人血才能免去全身血脉凝结成冰。后来得到张无忌九阳神功的治疗，除去了寒毒，摆脱吸血的命运。【CV：】",
				},
characterTitle:{
					"yttl_weiyixiao":"落影丶逝尘",
					"yttl_xiaozhao":"落影丶逝尘",
					"yttl_yinyewang":"落影丶逝尘",
					"yttl_spxuanmingerlao":"落影丶逝尘",
					"yttl_xiexun":"落影丶逝尘",
					"yttl_yinsusu":"落影丶逝尘",
					"yttl_yangbuhui":"落影丶逝尘",
					"yttl_yangdingtian":"落影丶逝尘",
					"yttl_chenyouliang":"落影丶逝尘",
					"yttl_yangxiao":"落影丶逝尘",
					"yttl_hanqianye":"落影丶逝尘",
					"yttl_spzhouzhiruo":"落影丶逝尘",
					"yttl_daiqisi":"落影丶逝尘",
					"yttl_zhangwuji":"落影丶逝尘",
					"yttl_zhangcuishan":"落影丶逝尘",
					"yttl_songqingshu":"落影丶逝尘",
					"yttl_miejue":"落影丶逝尘",
					"yttl_luhe":"落影丶逝尘",
					"yttl_changyuchun":"落影丶逝尘",
					"yttl_changbaoshu":"落影丶逝尘",
					"yttl_yinli":"落影丶逝尘",
			"yttl_zhuyuanzhang":"落影丶逝尘",
			"yttl_changbaisanqin":"Sukincen",
           "yttl_due":"Sukincen&&看破一切",
            "yttl_zhangsanfeng":"Sukincen",
              "yttl_zhouzhiruo":"Sukincen",
			"yttl_yinliting":"Sukincen",
			 "yttl_jinhuapopo":"落影丶逝尘",
								},
								
skill:{
	"yttl_binzhang":{
                init:function (player,skill){
        if(player.storage.yttl_binzhang==undefined) player.storage.yttl_binzhang=[];
        if(player.storage.yttl_binzhang_map==undefined) player.storage.yttl_binzhang_map=[];
        
    },
                mark:true,
                intro:{
                    content:function (storage){
            if(!storage.length){
                return '未发动过冰掌';
            }
            else{
                var str='已发动过'+get.translation(storage[0]);
                for(var i=1;i<storage.length;i++){
                    str+='、'+get.translation(storage[i]);
                }
                str+='冰掌。'
                return str;
            }
        },
                },
                trigger:{
                    player:"shaDamage",
                },
				audio:"ext:金庸群侠传:2",
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                priority:-1,
                filter:function (event,player){
        if(player.storage.yttl_binzhang_map.contains(event.target)) return false;
        if(player.storage.yttl_binzhang.length>=4) return false;
        var list=["heart","diamond","club","spade"];
        for(var i=0;i<list.length;i++){
            var suit=list[i]
           if(!player.storage.yttl_binzhang.contains(suit)&&!event.target.hasSkill('yttl_binzhang_'+suit)) return true;
        }      
        return false;
    },
                content:function (){
        "step 0"
        var list=["heart","diamond","club","spade"];
        var controls=[];
        for(var i=0;i<list.length;i++){
            var suit=list[i]
           if(!player.storage.yttl_binzhang.contains(suit)&&!trigger.target.hasSkill('yttl_binzhang_'+suit)) controls.push(suit);
        }
        var str='<span style="color:#FF0000">冰掌:选择令【'+get.translation(trigger.target)+'】不能使用或打出的一种非装备牌的花色</span>';
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        };
        "step 1"
        if(result.control){
            player.popup(result.control);
            player.line(trigger.player,'green');
            game.log(player,'声明了',result.control);
            player.storage.yttl_binzhang_map.push(trigger.target);
            player.storage.yttl_binzhang.push(result.control);
            trigger.target.addSkill('yttl_binzhang_'+result.control);
            player.syncStorage('yttl_binzhang');
            player.markSkill('yttl_binzhang');
        }
    },
                subSkill:{
                    heart:{
                        mark:true,
                        marktext:"♥️",
                        intro:{
                            content:"不能使用或打出非装备♥️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='heart') return false;
                },
                            cardUsable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='heart') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='heart') return false;
                },
                            cardSavable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='heart') return false;
                },
                            targetInRange:function (card){
                    if(get.type(card)!='equip'&&get.suit(card)=='heart') return false;
                },
                        },
                        sub:true,
                    },
                    diamond:{
                        mark:true,
                        marktext:"♦️",
                        intro:{
                            content:"不能使用或打出非装备♦️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='diamond') return false;
                },
                            cardUsable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='diamond') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='diamond') return false;
                },
                            cardSavable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='diamond') return false;
                },
                            targetInRange:function (card){
                    if(get.type(card)!='equip'&&get.suit(card)=='diamond') return false;
                },
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"不能使用或打出非装备♣️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='club') return false;
                },
                            cardUsable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='club') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='club') return false;
                },
                            cardSavable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='club') return false;
                },
                            targetInRange:function (card){
                    if(get.type(card)!='equip'&&get.suit(card)=='club') return false;
                },
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"不能使用或打出非装备♠️牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='spade') return false;
                },
                            cardUsable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='spade') return false;
                },
                            cardRespondable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='spade') return false;
                },
                            cardSavable:function (card,player){
                    if(get.type(card)!='equip'&&get.suit(card)=='spade') return false;
                },
                            targetInRange:function (card){
                    if(get.type(card)!='equip'&&get.suit(card)=='spade') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "yttl_zhuiyun":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "yttl_xuefu":{
                mod:{
                    maxHandcard:function (player,num){
            if(player.storage.yttl_binzhang&&player.storage.yttl_binzhang.length>0){
                if(player.countUsed('jiu')==0&&player.countUsed('tao')==0&&_status.currentPhase==player){
                    return num-player.storage.yttl_binzhang.length;
                }            
            }
        },
                },
            },
			"yttl_lianxiang":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
        "step 0"
        var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
        trigger.player.chooseToDiscard('he','怜香：弃置一张牌，否则杀对'+get.translation(player)+'无效',function(card){
            return true;
        }).set('ai',function(card){
            if(_status.event.eff>0){
                return 10-get.value(card);
            }
            return 0;
        }).set('eff',eff);
        "step 1"
        if(result.bool==false){
            trigger.cancel();
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&get.attitude(player,target)<0){
                    var bs=player.getCards('h');
                    if(bs.length<2) return 0;
                    if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                    return [1,0,1,-0.5];
                }
            },
                    },
                },
            },
            "yttl_yibi":{
                group:["yttl_yibi1","yttl_yibi1_draw"],
                init:function (player,skill){
        if(player.storage.yttl_yibi_map==undefined){
            player.storage.yttl_yibi_map={};
        }
        if(player.storage.yttl_yibi==undefined){
            player.storage.yttl_yibi=[];
        }
    },
                intro:{
                    content:"cards",
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filterCard:function (card){
        return card.name=='sha';
    },
                filter:function (event,player){
        if(!player.countCards('h',{name:'sha'})) return false;
        return game.countPlayer(function(current){
            return current!=player&&current.sex=='male';
        })>0;
    },
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give",
                filterTarget:function (card,player,target){
        return player!=target&&target.sex=='male';
    },
                check:function (card){
        if(ui.selected.cards.length>1) return 0;
        return 10-get.value(card);
    },
                content:function (){
        var cardss=cards;
        targets[0].gain(cardss,player);
        var map=targets[0];
        if(player.storage.yttl_yibi_map[map]==undefined) player.storage.yttl_yibi_map[map]=[];
        for(var i=0;i<cardss.length;i++){
            if(!player.storage.yttl_yibi_map[map].contains(cardss[i])){
                player.storage.yttl_yibi_map[map].push(cardss[i]);
            }
            if(!player.storage.yttl_yibi.contains(cardss[i])){
                player.storage.yttl_yibi.push(cardss[i]);
            }
        }
        player.syncStorage('yttl_yibi');
        player.markSkill('yttl_yibi');
    },
                ai:{
                    order:function (skill,player){
            return 1;
        },
                    result:{
                        target:function (player,target){
                return 1;
            },
                    },
                    threaten:0.8,
                },
            },
            "yttl_yibi1":{
                subSkill:{
                    draw:{
                        trigger:{
                            global:"damageEnd",
                        },						
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.card.name!='sha'||!event.cards) return false;
                return event.getParent(2).draw==true;
            },
                        content:function (){
                player.draw();
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"useCard",
                },
				audio:"ext:金庸群侠传:2",
                priority:16,
                forced:true,
                popup:false,
                filter:function (event,player){
        if(event.card.name!='sha'||!event.cards) return false;
        var map=event.player;
        if(player.storage.yttl_yibi_map[map]==undefined) return false;
        return player.storage.yttl_yibi_map[map].contains(event.cards[0]);
    },
                content:function (){
        "step 0"
        //trigger.player.line(player,'green');
        trigger.player.showCards(trigger.cards[0],'义婢')
        "step 1"
        var map=trigger.player;
        player.storage.yttl_yibi_map[map].remove(trigger.cards[0]);
        if(player.storage.yttl_yibi.contains(trigger.cards[0])) player.storage.yttl_yibi.remove(trigger.cards[0]);
        player.syncStorage('yttl_yibi');
        player.markSkill('yttl_yibi');
        "step 2"
        if(_status.currentPhase==trigger.player&&trigger.player.getStat().card.sha>0){
            trigger.player.getStat().card.sha--;
            game.log(trigger.player,'使用的',trigger.card,'不计入出杀次数');
        }
        trigger.draw=true;
    },
            },
	"yttl_feiding":{
				audio:"ext:金庸群侠传:2",
                group:["yttl_feiding_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageAfter",
                        },
                        filter:function (event,player){
                if(event.player==player||event.player.getEquip(1)==undefined) return false;
                return event.card&&event.card.name=='sha'&&event.getParent(3).name=='yttl_feiding';
            },
                        popup:false,
                        forced:true,
                        content:function (){
                trigger.player.$give(trigger.player.getEquip(1),player);
                player.gain(trigger.player.getEquip(1),trigger.player);
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.player.getEquip(1)==undefined) return false;
        return event.player.isAlive()&&get.distance(player,event.player,'attack')<=1&&
        lib.filter.targetEnabled({name:'sha'},player,event.player)&&player.hasSha();
    },
                content:function (){
        player.chooseToUse({name:'sha'},'飞钉：是否对'+get.translation(trigger.player)+'使用一张杀？',
            trigger.player,-1).set('logSkill','yttl_feiding');
    },
            },
            "yttl_yangwei":{
				audio:"ext:金庸群侠传:2",
                unique:true,
                enable:"phaseUse",
                mark:true,
                skillAnimation:true,
                animationStr:"扬威",
                animationColor:"fire",
                init:function (player){
        player.storage.yttl_yangwei=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
        if(player.storage.yttl_yangwei) return false;
        if(!player.countCards('he',{subtype:'equip1'})) return false;
        return true;
    },
                filterCard:function (card){
        return get.subtype(card)=='equip1';
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(target.storage.lose_pos_equip==undefined) return true;
        if(target.storage.lose_pos_equip&&!target.storage.lose_pos_equip.contains('equip1')) return true;
        return false;
    },
                content:function (){
        target.lose_pos_equip('equip1');
        player.storage.yttl_yangwei=true;
        player.awakenSkill('yttl_yangwei');
    },
                check:function (card){
        return 10-get.value(card);
    },
                position:"he",
                ai:{
                    order:8.5,
                    result:{
                        target:function (player,target){
                return -1;
            },
                    },
                },
            },
            
            "yttl_shikon":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore"],
                },
                forced:true,
                filter:function (event,player){
        return get.number(event.card);
    },
                content:function (){
        trigger.target.addTempSkill('yttl_shikon_dianshu','shaAfter');
     },
                subSkill:{
                    dianshu:{
                        mark:true,
                        marktext:"吼",
                        intro:{
                            content:"",
                        },
                        mod:{
                            cardRespondable:function (card,player){
                    if(get.number(card)<=get.number(_status.event.parent.cards[0])) return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "yttl_wudao":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        "step 0"
        var list=[];
        for(var i=0;i<lib.inpile.length;i++){
            var name=lib.inpile[i];
            var card={name:name};
            var info=get.info(card);
            var subtype=get.subtype(card);
            if(subtype&&subtype=='equip1'&&info.skills){
                list.push(['武器','',name]);              
            }
        }
        var dialog=ui.create.dialog('选择一张武器牌获得该武器牌的技能',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            if(player.hasSkill('yttl_shikon')&&card.name=='zhuge') value+=10;
            if(player.hasSkill('wusheng')&&card.name=='zhuge') value+=10;
            if(player.hasSkill('yttl_qizhao')&&card.name=='zhuge') value+=10;
            if(player.hasSkill('paoxiao')&&card.name=='zhangba') value+=10;
            return value;
        });
          "step 1"
        if(result.bool){
            var card2={name:result.buttons[0].link[2]};
            var info=get.info(card2);
            if(info.skills){
                for(var i=0;i<info.skills.length;i++){
                    if(!player.hasSkill(info.skills[i])) player.addSkill(info.skills[i]);
                }
            }
            var card=game.createCard(result.buttons[0].link[2],'武器','');
            player.showCards(get.translation(player)+'声明了'+get.translation(result.buttons[0].link[2]),card);
        }
        
    },
                ai:{
                    noEquipSkill:true,
                },
            },
        "yttl_xuanyin":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.player.storage.lose_pos_equip&&event.player.storage.lose_pos_equip.length>=5) return false;
        return true;
    },
                content:function (){
        "step 0"
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i],get.subtype(list[i]),'栏'));
        }
        var str='<span style="color:#FF0000">玄阴:是否废除'+get.translation(trigger.player)+'一个装备栏?</span>';
        player.chooseCardButton(list2,1,str).set('filterButton',function(button){
            var cards=button.link;
            if(trigger.player.storage.lose_pos_equip==undefined) return true;
            if(trigger.player.storage.lose_pos_equip&&!trigger.player.storage.lose_pos_equip.contains(get.subtype(cards))) return true;
            return false;
        }).set('ai',function(button){
            var att=get.attitude(player,trigger.player);
            var cards=button.link;
            if(att>0){
                if(!trigger.player.getEquip(cards)) return 1;  
            }
            if(att<=0){
                if(trigger.player.getEquip(cards)) return 1;  
            }
            return 0.5;
        });
        "step 1"
        if(result.bool){
            player.logSkill('yttl_xuanyin',trigger.player);
            var card=[];
            for(var i=0;i<result.links.length;i++){
                var cards=result.links[i];
                card.push(cards);
                trigger.player.lose_pos_equip(get.subtype(cards));
                if(trigger.player.storage.yttl_xuanyin==undefined) trigger.player.storage.yttl_xuanyin=[];
                trigger.player.storage.yttl_xuanyin.push(get.subtype(cards));
                if(!trigger.player.hasSkill('yttl_xuanyin1')){
                    trigger.player.addSkill('yttl_xuanyin1');
                }
            }
            player.$throw(card);
        }      
    },
            },
            "yttl_xuanyin1":{
				audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.yttl_xuanyin1=[];
    },
                group:"yttl_xuanyin1_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            global:"phaseEnd",
                        },
                        filter:function (event,player){
                return player.storage.yttl_xuanyin1.length>0;
            },
                        silent:true,
                        content:function (){
                player.storage.yttl_xuanyin1=[];
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                trigger:{
                    player:"useCard",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        if(player.storage.yttl_xuanyin.length==0||player.storage.yttl_xuanyin==undefined) return false;
        if(player.storage.lose_pos_equip==undefined) return false;
        if(player.storage.lose_pos_equip&&player.storage.lose_pos_equip.length==0) return false;
        if(player.countUsed(event.card)<3||player.storage.yttl_xuanyin1.contains(event.card.name)) return false;
        for(var i=0;i<player.storage.yttl_xuanyin.length;i++){
            if(player.storage.lose_pos_equip.contains(player.storage.yttl_xuanyin[i])) return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i],get.subtype(list[i]),'栏'));
        }
        var str='玄阴:选择恢复一个装备栏';
        player.chooseCardButton(list2,1,str).set('filterButton',function(button){
            var cards=button.link;
            if(player.storage.yttl_xuanyin.contains(get.subtype(cards))&&player.storage.lose_pos_equip.contains(get.subtype(cards))) return true;
            return false;
        }).set('ai',function(button){
            return 3;
        });
        "step 1"
        if(result.bool){
            player.logSkill('yttl_xuanyin');
            var card=[];
            for(var i=0;i<result.links.length;i++){
                var cards=result.links[i];
                card.push(cards);
                player.recover_pos_equip(get.subtype(cards));
                player.storage.yttl_xuanyin.remove(get.subtype(cards));
            }
            player.$throw(card);
            player.storage.yttl_xuanyin1.push(trigger.card.name);
        }      
    },
            },
            "yttl_mingjian":{
                mod:{
                    playerEnabled:function (card,player,target){
            if(player.storage.yttl_mingjian&&target!=player.storage.yttl_mingjian) return false;
        },
                },
                group:"yttl_mingjian_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                return player.storage.yttl_mingjian;
            },
                        silent:true,
                        content:function (){
                delete player.storage.yttl_mingjian;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(target.storage.lose_pos_equip&&target.storage.lose_pos_equip.length>0) return true;
        return false;
    },
                content:function (){
        "step 0"
        var list=["zhuge","bagua","dilu","chitu","muniu"];
        var list2=[];
        for(var i=0;i<list.length;i++){
            list2.push(game.createCard(list[i],get.subtype(list[i]),'栏'));
        }
        var str='名缰:选择恢复'+get.translation(targets[0])+'一个装备栏';
        player.chooseCardButton(list2,1,str,true).set('filterButton',function(button){
            var cards=button.link;
            if(targets[0].storage.lose_pos_equip.contains(get.subtype(cards))) return true;
            return false;
        }).set('ai',function(button){
            return 3;
        });
        "step 1"
        if(result.bool){
            var card=[];
            for(var i=0;i<result.links.length;i++){
                var cards=result.links[i];
                card.push(cards);
                targets[0].recover_pos_equip(get.subtype(cards));
            }
            player.$throw(card);
            player.draw(2);
            targets[0].chooseTarget(true,function(card,player,target){
                return target!=targets[0];
            }).set('ai',function(target){
                return -get.attitude(targets[0],target);
            });
        }      
        "step 2"
        if(result.bool){
            targets[0].line(result.targets[0],'green');
            game.log(targets[0],'选择了',result.targets[0]);
            player.storage.yttl_mingjian=result.targets[0];
        }
    },
                ai:{
                    order:1,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);
                if(att>0) return 3;
                if(att<=0) return 1;
                return 0;
            },
                    },
                    threaten:1,
                },
            },
			
	   "yttl_cefan":{
                subSkill:{
                    sha:{
                        mark:true,
                        marktext:"策",
                        intro:{
                            content:"不能使用杀",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(card.name=='sha') return false;
                },
                            cardUsable:function (card,player){
                    if(card.name=='sha') return false;
                },
                            targetInRange:function (card){
                    if(card.name=='sha') return false;
                },
                        },
                        sub:true,
                    },
                },
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        if(event.player==player) return false;
        if(game.hasPlayer(function(current){
            return lib.filter.targetEnabled({name:'sha'},event.player,current)&&get.distance(event.player,current,'attack')<=1;
        })){
            return true;
        }
        return false;
    },
                content:function (trigger){
        "step 0"
        player.chooseTarget(get.prompt('yttl_cefan'),function(card,player,target){
            return target!=trigger.player&&lib.filter.targetEnabled({name:'sha'},trigger.player,target)&&get.distance(trigger.player,target,'attack')<=1;
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,trigger.player);
            if(att>0&&!trigger.player.hasSha()) return -1;
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('yttl_cefan',[result.targets[0],trigger.player]);
            player.line(trigger.player,'green');
            event.tar=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        trigger.player.chooseToUse({name:'sha'},event.tar,-1,'策反：对'+get.translation(event.tar)+'使用一张杀不计入次数的杀并摸一张牌，否则你不能使用杀').set('targetRequired',true);
        "step 3"
        if(result.bool){
            trigger.player.draw();
            trigger.player.getStat().card.sha--;
        }
        else{
            trigger.player.addTempSkill('yttl_cefan_sha');
        }
    },
            },
            "yttl_tongyi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    target:"useCardToBefore",
                },
                check:function (event,player){
        if(get.effect(player,event.card,player,player)>0) return false;
        return true;
    },
                filter:function (event,player){
        if(event.player==player) return false;
        return event.card.name=='sha';
    },
                content:function (){
        "step 0"
        var cards=get.cards(1);
        event.cardss=cards;
        player.showCards(event.cardss,'恫疑');
        "step 1"
        if(get.type(event.cardss[0])!='basic'){
            trigger.cancel();
        }
        "step 2"
        for(var i=0;i<event.cardss.length;i++){
            event.cardss[i].discard();
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&get.attitude(player,target)<0){
                    return [1,0,1,-0.5];
                }
            },
                    },
                },
            },
			 "yttl_yixing":{
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"本轮已发动",
                        },
                        sub:true,
                    },
                },
                trigger:{
                    global:"phaseBefore",
                },
				audio:"ext:金庸群侠传:2",
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('yttl_yixing_off')) return false;
        if(!player.countCards('he')) return false;
        return player.canMoveCard();
    },
                content:function (){
        "step 0"
        player.chooseCardTarget({
            position:'he',
            filterCard:lib.filter.cardDiscardable,
            targetprompt:['被移走','移动目标'],
            selectTarget:2,
            selectCard:1,
            filterTarget:function(card,player,target){
                if(ui.selected.targets.length){
                    var from=ui.selected.targets[0];
                    var js=from.getCards('j');
                    for(var i=0;i<js.length;i++){
                        if(!target.hasJudge(js[i])) return true;
                    }
                    if(target.isMin()) return false;
                    var es=from.getCards('e');
                    for(var i=0;i<es.length;i++){
                        if(!target.getEquip(get.subtype(es[i]))) return true;
                    }
                    return false;
                }
                else{
                    return target.countCards('ej')>0;
                }
            },
            ai1:function(card){
                return 6-get.value(card);
            },
            ai2:function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(ui.selected.targets.length==0){
                    if(att>0){
                        if(target.countCards('j')) return 10;
                    }
                    else if(att<0){
                        if(game.hasPlayer(function(current){
                            if(get.attitude(player,current)>0){
                                var es=target.getCards('e');
                                for(var i=0;i<es.length;i++){
                                    if(!current.getEquip(get.subtype(es[i]))) return true;
                                }
                            }
                        })){
                            return -att;
                        }
                    }
                    return 0;
                }
                if(att>0){
                    var es=ui.selected.targets[0].getCards('e');
                    var i;
                    for(i=0;i<es.length;i++){
                        if(!target.getEquip(get.subtype(es[i]))){
                            break;
                        }
                    }
                    if(i==es.length){
                        return 0;
                    }
                }
                return -att*get.attitude(player,ui.selected.targets[0]);
            },
            prompt:'请选择要移动牌的目标'
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill('yttl_yixing',result.targets);
            player.line2(result.targets,'green');
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        "step 2"
        game.delay();
        "step 3"
        if(targets.length==2){
            player.choosePlayerCard('ej',true,function(button){
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
                    return !targets1.hasJudge(button.link);
                }
                else{
                    return !targets1.countCards('e',{subtype:get.subtype(button.link)});
                }
            });
        }
        else{
            event.finish();
        }
        "step 4"
        if(result.bool&&result.links.length){
            var link=result.links[0];
            if(get.position(link)=='e'){
                event.targets[1].equip(link);
            }
            else if(link.viewAs){
                event.targets[1].addJudge({name:link.viewAs},[link]);
            }
            else{
                event.targets[1].addJudge(link);
            }
            event.targets[0].$give(link,event.targets[1])
            game.delay();
            if(!player.hasSkill('yttl_yixing_off')){
                player.addTempSkill('yttl_yixing_off','roundStart');
            }
        }
    },
                ai:{
                    expose:0.3,
                },
            },
            "yttl_qiangmei":{
                group:"yttl_qiangmei_gain",
                subSkill:{
                    bgg:{
                        mark:true,
                        marktext:"媒",
                        intro:{
                            content:"媒",
                        },
                        sub:true,
                    },
                    gain:{
                        trigger:{
                            global:"gainEnd",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(!event.source) return false;
                if(event.player==player||event.source==player) return false;
                if(event.source.sex!='male'||event.player.sex!='female') return false;
                if(!event.player.hasSkill('yttl_qiangmei_bgg')) return false;
                return player.storage.yttl_qiangmei.contains(event.player.name);
            },
                        content:function (){
                "step 0"
                trigger.player.chooseBool('是否对'+get.translation(player)+'造成一点伤害？').set('ai',function(){                                
                    if(get.damageEffect(player,trigger.player,trigger.player)>0) return true;                     
                    return false;
                }); 
                "step 1"
                if(result.bool){
                    trigger.player.logSkill('yttl_qiangmei',player);
                    player.damage(1,trigger.player);
                }
                else{
                    event.finish();
                }    
            },
                        sub:true,
                    },
                },
                init:function (player){
        player.storage.yttl_qiangmei=[];
    },
                intro:{
                    content:"characters",
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current!=player&&current.sex=='female';
        });
    },
                selectTarget:[1,Infinity],
                filterTarget:function (card,player,target){
        if(target.sex!='female') return false;
        if(target.countCards('h')==0) return false;
        return player!=target;
    },
                content:function (){
        "step 0"
        player.gainPlayerCard(target,'h',true);
        game.delay();
        "step 1"
        if(!player.storage.yttl_qiangmei.contains(target.name)){
            player.storage.yttl_qiangmei.push(target.name);
            player.markSkill('yttl_qiangmei');        
        }
        if(!target.hasSkill('yttl_qiangmei_bgg')){
            target.addSkill('yttl_qiangmei_bgg');
        }    
    },
                ai:{
                    result:{
                        target:-0.5,
                    },
                    basic:{
                        order:9,
                    },
                },
            },
			 "yttl_jiandie":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                trigger:{
                    player:"loseEnd",
                },
				audio:"ext:金庸群侠传:2",
                direct:true,
                filter:function (event,player){
        if(player.hasSkill('yttl_jiandie_off')) return false;
        return event.cards;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('yttl_jiandie'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var num1=trigger.cards.length;
            var num2=target.countCards('e');
            var num3=target.countCards('h');
            var num4=target.countCards('he');
            if(get.attitude(player,target)>0&&num4==0) return num1;
            if(get.attitude(player,target)>0&&num2==0) return 1;
            if(get.attitude(player,target)>0&&num3-num1>0) return 0.5;
            return -1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('yttl_jiandie',result.targets);
            if(result.targets[0].countCards('he')) result.targets[0].chooseToDiscard(trigger.cards.length,'he',true);
            result.targets[0].draw(trigger.cards.length);
            if(!player.hasSkill('yttl_jiandie_off')){
                player.addTempSkill('yttl_jiandie_off');
            }
        }
    },
            },
            "yttl_biyi":{
				audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.yttl_biyi=[];
        player.storage.yttl_biyi1=[];
    },
                intro:{
                    content:"characters",
                },
                group:["yttl_biyi_count","yttl_biyi_draw","yttl_biyi_after"],
                subSkill:{
                    count:{
                        trigger:{
                            global:"loseEnd",
                        },
                        filter:function (event,player){
                if(player.storage.yttl_biyi1.contains(event.player)) return false
                return _status.currentPhase==player&&event.cards;
            },
                        forced:true,
                        popup:false,
                        content:function (){               
                var name=trigger.player.name;
                if(!player.storage.yttl_biyi1.contains(trigger.player)){
                    player.storage.yttl_biyi1.push(trigger.player);
                    player.storage.yttl_biyi.push(name);
                }
                player.markSkill('yttl_biyi');
            },
                        sub:true,
                    },
                    draw:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                var targets=[];
                for(var i=0;i<player.storage.yttl_biyi1.length;i++){
                    if(player.storage.yttl_biyi1[i].isAlive()){
                        targets.push(player.storage.yttl_biyi1[i]);
                    }
                }
                return targets.length>0;
            },
                        check:function (event,player){
                var num=0;
                for(var i=0;i<player.storage.yttl_biyi1.length;i++){
                    if(player.storage.yttl_biyi1[i].isAlive()){
                        if(get.attitude(player,player.storage.yttl_biyi1[i])>=0) num++
                        if(get.attitude(player,player.storage.yttl_biyi1[i])<0) num--
                    }
                }
                if(num>0) return true;
            },
                        prompt:function (event,player){
                var targets=[];
                for(var i=0;i<player.storage.yttl_biyi1.length;i++){
                    if(player.storage.yttl_biyi1[i].isAlive()){
                        targets.push(player.storage.yttl_biyi1[i]);
                    }
                }
                return get.prompt('yttl_biyi',targets);
            },
                        content:function (){
                var targets=[];
                for(var i=0;i<player.storage.yttl_biyi1.length;i++){
                    if(player.storage.yttl_biyi1[i].isAlive()){
                        targets.push(player.storage.yttl_biyi1[i]);
                    }
                }
                game.asyncDraw(targets);
            },
                        sub:true,
                    },
                    after:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        filter:function (event,player){
                return player.storage.yttl_biyi1.length>0;
            },
                        silent:true,
                        content:function (){
                player.storage.yttl_biyi1=[];
                player.storage.yttl_biyi=[];
                player.markSkill('yttl_biyi');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
			"yttl_congshan":{
				audio:"ext:金庸群侠传:2",
                init:function (player){
        player.storage.yttl_congshan=true;
    },
                mark:true,
                marktext:"善",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.yttl_congshan==true) return '获:你可以获得一名其他角色的一张手牌';
            return '给:你可以交给一名其他角色一张手牌';
        },
                },
                enable:"phaseUse",
                usable:1,
                discard:false,
                filter:function (event,player){
        if(player.storage.yttl_congshan==true){
            return true;
        }
        else if(player.storage.yttl_congshan==false){
            return player.countCards('h')>0;
        }
        else {
            return true;        
        }
    },
                filterCard:function (card){
        var player=_status.event.player;
        if(player.storage.yttl_congshan==true) return false;
        return true;
    },
                selectCard:function (){
        var player=_status.event.player;
        if(player.storage.yttl_congshan==true){
            return -1;
        }
        else if(player.storage.yttl_congshan==false){
            return [1,1];
        }
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(player.storage.yttl_congshan==true){
            return target.countCards('h')>0;;
        }
        else if(player.storage.yttl_congshan==false){
            return true;
        }
    },
                content:function (){
        "step 0"
        if(cards.length==0){
            player.gainPlayerCard(target,'h',true);
            player.storage.yttl_congshan=false
        }
        else{
            target.gain(cards,player);
            player.$give(cards.length,target);
            player.storage.yttl_congshan=true
        }
    },
                check:function (card){
        if(ui.selected.cards.length>0) return 0;
        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
        if(!ui.selected.cards.length&&card.name=='du') return 20;
        var player=get.owner(card);
        if(player.hp==player.maxHp||player.countCards('h')<=1){
            if(ui.selected.cards.length){
                return -1;
            }
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(players[i].hasSkill('haoshi')&&
                    !players[i].isTurnedOver()&&
                    !players[i].hasJudge('lebu')&&
                    get.attitude(player,players[i])>=3&&
                    get.attitude(players[i],player)>=3){
                    return 11-get.value(card);
                }
            }
            if(player.countCards('h')>player.hp) return 10-get.value(card);
            if(player.countCards('h')>2) return 6-get.value(card);
            return -1;
        }
        return 10-get.value(card);
    },
                position:"h",
                ai:{
                    order:function (skill,player){
            return 1;
        },
                    result:{
                        target:function (player,target){
                if(ui.selected.cards.length==0) return -1;
                if(target.hasSkillTag('nogain')) return 0;
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return -10;
                }
                if(target.hasJudge('lebu')) return 0;
                var nh=target.countCards('h');
                var np=player.countCards('h');
                if(player.countCards('h')<=1){
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
                    threaten:0.8,
                },
            },
            "yttl_tuobiao":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseDiscardEnd",
                },
                filter:function (event,player){
        if(!event.cards) return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        event.cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.position(trigger.cards[i])=='d'){
                event.cards.push(trigger.cards[i]);
            }
        }
        "step 1"
        if(event.cards.length){
            var goon=false;
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].name=='du'){
                    goon=true;break;
                }
            }
            if(!goon){
                goon=game.hasPlayer(function(current){
                    return player!=current&&get.attitude(player,current)<=0;
                });
            }
            player.chooseCardButton(get.prompt('yttl_tuobiao'),event.cards,[1,1]).set('ai',function(button){
                if(!_status.event.goon||ui.selected.buttons.length) return 0;
                if(button.link.name=='du') return 2;
                return 1;
            }).set('goon',goon);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            event.togive=result.links.slice(0);
            player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,function(card,player,target){
                return target!=player&&!target.hasSkill('yttl_tuobiao1');
            }).set('ai',function(target){
                var att=get.attitude(_status.event.player,target);
                if(_status.event.enemy){
                    return -att;
                }
                else{
                    return -att;
                }
            }).set('enemy',get.value(event.togive[0])<0);
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.bool){
            player.logSkill('yttl_tuobiao',result.targets);
            result.targets[0].storage.yttl_tuobiao1=event.togive;
            result.targets[0].storage.yttl_tuobiao2=player;
            result.targets[0].addTempSkill('yttl_tuobiao1',{player:'phaseBegin'});
            result.targets[0].syncStorage('yttl_tuobiao1');
            result.targets[0].markSkill('yttl_tuobiao1');
            game.log(player,'将',event.togive,'作为“镖”交给了',result.targets[0]);
            result.targets[0].gain(event.togive,player);
            result.targets[0].$gain2(event.togive);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    expose:0.1,
                },
            },
            "yttl_tuobiao1":{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.storage.yttl_tuobiao2.isIn();
    },
                marktext:"镖",
                mark:true,
                intro:{
                    content:"cards",
                },
                content:function (){
        'step 0'
        game.delayx();
        'step 1'
        player.line(player.storage.yttl_tuobiao2,'green');
        if(!player.storage.yttl_tuobiao2.countGainableCards(player,'h')){
            player.damage(1,player.storage.yttl_tuobiao2);
            player.storage.yttl_tuobiao2.logSkill('yttl_tuobiao');
            event.finish();
        }
        'step 2'
        player.storage.yttl_tuobiao2.logSkill('yttl_tuobiao');
        player.storage.yttl_tuobiao2.gainPlayerCard(player,'h',true);
        'step 3'
        event.card=result.links[0];
        player.storage.yttl_tuobiao2.showCards(event.card,'托镖')
        if(player.storage.yttl_tuobiao1[0]!=event.card) player.damage(1,player.storage.yttl_tuobiao2);
        
    },
                onremove:function (player){
        delete player.storage.yttl_tuobiao1;
        delete player.storage.yttl_tuobiao2;
    },
            },
            "yttl_yaren":{
                trigger:{
                    global:"respond",
                    player:"wuxieCancel",
                    target:"wuxieCancel",
                },
                direct:true,
                audio:"ext:金庸群侠传:2",
                filter:function (event,player){
     if(event.name=='respond'&&event.player!=player) return event.getParent(2).player==player;
        return true;
    },
                init:function (player){
        player.storage.yttl_yaren=[];
    },
                intro:{
                    content:"cards",
                },
                marktext:"忍",
                mod:{
                    maxHandcard:function (player,num){
            return num+player.storage.yttl_yaren.length;
        },
                },
                content:function (){      
                player.logSkill('yttl_yaren');  
       var cards=get.cards(1);
        player.storage.yttl_yaren=player.storage.yttl_yaren.concat(cards);
        player.$gain2(cards);
        game.log(player,'将'+get.cnNumber(cards.length)+'张牌置于武将牌上');
        player.syncStorage('yttl_yaren');
        player.markSkill('yttl_yaren');         
    },
                ai:{
                    effect:{
                        player:function (card,player,target){
                if(_status.currentPhase!=player) return;
                if(card.name=='sha'&&!player.needsToDiscard()&&
                    !player.storage.yttl_yaren.length&&target.hp>1){
                    return 'zeroplayertarget';
                }
            },
                    },
                    threaten:1.4,
                },
            },
            "yttl_zhangquan":{                
                audio:"ext:金庸群侠传:2",
                unique:true,
                trigger:{
                    player:"yttl_yarenAfter",
                },
                forced:true,
                derivation:["yttl_fayi"],
                filter:function (event,player){
        return !player.hasSkill('yttl_fayi')&&player.storage.yttl_yaren&&player.storage.yttl_yaren.length>=3;
    },
                content:function (){
        "step 0"
        player.loseMaxHp();
        player.draw(2);
        player.update();
        player.$fullscreenpop('九阴白骨爪','thunder'); 
        "step 1"      
        player.addSkill('yttl_fayi');
        player.awakenSkill('yttl_zhangquan');
    },
            },
            "yttl_fayi":{
            audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseBegin",
                },
                check:function (event,player){
                if(event.player.countCards('j')>0) return 0;
        return get.attitude(player,event.player)<0||!event.player.needsToDiscard(2);
    },
                filter:function (event,player){
        return event.player!=player&&player.storage.yttl_yaren.length>0;
    },             
                content:function (){    
            			"step 0"                            
					player.chooseCardButton(get.translation('yttl_yaren'),player.storage.yttl_yaren,true);
					"step 1"
					if(result.bool){						
						player.$throw(result.links);
						player.storage.yttl_yaren.remove(result.links[0]);
						result.links[0].discard();
						player.syncStorage('yttl_yaren');					
						trigger.player.addTempSkill('yttl_fayi2'); 
						if(!player.storage.yttl_yaren.length){
							player.unmarkSkill('yttl_yaren');
						}
						else{
							player.markSkill('yttl_yaren');
						}
					}
				},
				ai:{
					order:6,
					skillTagFilter:function(player){
						return player.storage.yttl_yaren.length>0;
					},				
					result:{
						target:3
					},
					threaten:1.6
				},     
            },
            "yttl_fayi2":{
            trigger:{
            player:"phaseDrawBegin",
            },
            forced:true,
            content:function (){
            trigger.num--;
            },
                mark:true,
                marktext:"异",
                intro:{
                    content:"手牌上限-1",
                },
                mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
                },               
            },

"yttl_gudan":{
                group:["yttl_gudan_after","yttl_gudan_damage"],
                subSkill:{
                    after:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        filter:function (event){
                return event.onShaDamage==true&&event.addSha==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                "step 0"
                var next=player.chooseToDiscard(1,'h','是否弃置一张牌,否则你令此杀其中的一个目标摸一张牌？',function(card,player){
                    return true;
                });
                next.ai=function(card){
                    return -1;
                };
                "step 1"
                if(result.bool){
                    event.finish();
                }
                "step 2"
                player.chooseTarget(true,function(card,player,target){
                    return trigger.targets.contains(target);
                }).set('ai',function(target){
                    return get.attitude(player,target);
                });
                "step 3"
                if(result.bool){
                    result.targets[0].draw();
                }
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event){
                return event.getParent(2).onShaDamage==true&&event.getParent(2).addSha==true;
            },
                        forced:true,
                        popup:false,
                        content:function (){
                trigger.getParent(2).onShaDamage=false;
            },
                        sub:true,
                    },
                },
                trigger:{
                    player:"useCard",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(event.card.name!='sha') return false;
        return game.hasPlayer(function(current){
            return !event.targets.contains(current)&&player.canUse('sha',current);
        });
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('yttl_gudan'),function(card,player,target){
            return !_status.event.source.contains(target)&&player.canUse('sha',target);
        }).set('source',trigger.targets).set('ai',function(target){
            var player=_status.event.player;
            return get.effect(target,{name:'sha'},player,player);
        });
        "step 1"
        if(result.bool){
            if(!event.isMine()&&!_status.connectMode) game.delayx();
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        player.logSkill('yttl_gudan',event.target);
        trigger.targets.push(event.target);
        trigger.onShaDamage=true;
        trigger.addSha=true;      
    },
            },
            "yttl_qiyuan":{
                trigger:{
                    player:"gainEnd",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='club') return true;
        }
        return false;
    },
                direct:true,
                content:function (){
        "step 0"
        event.cards=trigger.cards.slice(0);
        var num=0;
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='club') num++;
        }
        var next=player.chooseCard([1,num],'h','是否展示其中的梅花牌并摸等量的牌？',function(card,player){
            return get.suit(card)=='club'&&_status.event.getParent().cards.contains(card);
        });
        next.ai=function(card){
            return 1;
        };
        "step 1"
        if(result.bool){
            player.logSkill('yttl_qiyuan');
            player.showCards(result.cards,'奇缘')
            player.draw(result.cards.length);
            
        }
        else{
            event.finish();
        }
    },
            },
            "yttl_yinshi":{
                subSkill:{
                    off:{
                        mark:true,
                        intro:{
                            content:"yttl_yinshi",
                        },
                        mod:{
                            playerEnabled:function (card,player,target){
                    if(player.storage.yttl_yinshi&&player.storage.yttl_yinshi.contains(target)) return false;
                },
                        },
                        onremove:function (player){
                delete player.storage.yttl_yinshi;
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"compare",
                },
				audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(event.player!=player&&_status.currentPhase==event.player) return true;
        if(event.player!=player&&_status.currentPhase==event.player) return true;
        return false;
        
    },
                forced:true,
                content:function (){
        if(trigger.player!=player&&_status.currentPhase==trigger.player){
          if(!trigger.player.hasSkill('yttl_yinshi_off')) trigger.player.addTempSkill('yttl_yinshi_off');
            game.log(trigger.player,'本回合不能对',player,'使用牌'); 
            if(!trigger.player.storage.yttl_yinshi){
                trigger.player.storage.yttl_yinshi=[];
            }
            if(!trigger.player.storage.yttl_yinshi.contains(player)){
                trigger.player.storage.yttl_yinshi.push(player)
            }
        }
        if(trigger.target!=player&&_status.currentPhase==trigger.target){
          if(!trigger.target.hasSkill('yttl_yinshi_off')) trigger.target.addTempSkill('yttl_yinshi_off');
            game.log(trigger.target,'本回合不能对',player,'使用牌'); 
            if(!trigger.target.storage.yttl_yinshi){
                trigger.target.storage.yttl_yinshi=[];
            }
            if(!trigger.target.storage.yttl_yinshi.contains(player)){
                trigger.target.storage.yttl_yinshi.push(player)
            }
        }
    },
                ai:{
                    noCompareTarget:true,
                    noCompareSource:true,
                },
            },
	"yttl_juejue":{
                group:"yttl_juejue_end",
                subSkill:{
                    end:{
                        trigger:{
                            global:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                if(event.source&&event.source==player&&event.player!=player) return true;
                if(event.source&&event.source!=player&&event.player==player) return true;
                return false;
            },
                        content:function (){
                trigger.player.discard(trigger.cards);
            },
                        sub:true,
                        popup:false,
                    },
                },
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('e',{type:'equip'})>0;
    },
                filterCard:function (card){
        return get.type(card)=='equip';
    },
                position:"e",
                check:function (card){
        var player=_status.currentPhase;
        var car=target.getEquip(card);
        if(player.hasSkillTag('reverseEquip')) return 1;
        return get.equipValue(car)-get.equipValue(card)+0.1;
    },
                filterTarget:function (card,player,target){
        if(target.isMin()) return false;
        return player!=target&&target.getEquip(card);
    },
                content:function (){
        var car=targets[0].getEquip(cards[0]);
        targets[0].lose(car,ui.special);
        player.lose(car,ui.special);
        targets[0].equip(cards[0]);
        player.equip(car);
    },
                discard:false,
                lose:false,
                prepare:function (cards,player,targets){
        player.$give(cards,targets[0],false);
    },
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        player:function (player,target){
                if(player.hasSkillTag('reverseEquip')) return 1;
                return 0;
            },
                    },
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='shunshou'){
                    return [0,0,1,-0.5];
                }
            },
                        player:function (card,player,target){
                if(card.name=='shunshou') return [1,-0.3];
            },
                    },
                },
            },
            "yttl_duanren":{               
                trigger:{
                    player:"loseEnd",
                },
				audio:"ext:金庸群侠传:2",
                frequent:true,
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        return false;
    },
                content:function (){
        "step 0"
        var renum=0,blnum=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='e'){
                if(get.color(trigger.cards[i])=='red'){
                    renum+=2;
                }
                else if(get.color(trigger.cards[i])=='black'){
                    blnum++;
                }
            }
        }
        if(renum>0) player.draw(renum);
        event.blnum=blnum;
        "step 1"
        if(event.blnum>0){
            player.chooseTarget(get.prompt('yttl_duanren'),function(card,player,target){
                return player!=target;
            }).ai=function(target){
                return get.damageEffect(target,player,player);
            }
        }
        "step 2"
        if(result.bool){
            player.logSkill('yttl_duanren',result.targets);
            result.targets[0].damage(1,player);
            event.blnum--;
            if(event.blnum>0) event.goto(1);          
        }
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
	"yttl_miling":{
                subSkill:{
                    useskill:{
                        mark:true,
                        marktext:"密",
                        intro:{
                            content:"已发动密令",
                        },
                        sub:true,
                    },
                    ondis:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"已使用♣️牌",
                        },
                        sub:true,
                    },
                    cl:{
                        mark:true,
                        marktext:"令",
                        intro:{
                            content:"yttl_miling",
                        },
						audio:"ext:金庸群侠传:2",
                        trigger:{
                            player:"dieBefore",
                        },
                        group:["yttl_miling_use","yttl_miling_dis"],
                        content:function (){
                "step 0"      
                player.storage.yttl_miling.removeSkill('yttl_miling_useskill');
                player.storage.yttl_miling.unmark(player.storage.yttl_miling.storage.yttl_milingname+'_charactermark');
                player.storage.yttl_miling.restoreSkill('yttl_miling');
                player.storage.yttl_miling.checkMarks();
                game.log(player.storage.yttl_miling,'重置了密令')
                "step 1"
                delete player.storage.yttl_miling;
                player.removeSkill('yttl_miling_cl');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    dis:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                if(player.hasSkill('yttl_miling_ondis')) return false;
                return player.countCards('he')>0;
            },
                        content:function (){
                "step 0"
                player.storage.yttl_miling.chooseBool('是否弃置'+get.translation(player)+'一张牌？').set('ai',function(){                                
                    if(get.attitude(player.storage.yttl_miling,player)<0) return true;                     
                    return false;
                }); 
                "step 1"
                if(result.bool){
                    player.storage.yttl_miling.logSkill('yttl_miling',player);
                    player.storage.yttl_miling.discardPlayerCard('he',player,true);
                }
                else{
                    event.finish();
                }     
                
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    use:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        filter:function (event,player){
                if(get.suit(event.card)!='club') return false;
                return true;
            },
                        content:function (){
                "step 0"
                player.storage.yttl_miling.draw();
                if(_status.currentPhase==player&&!player.hasSkill('yttl_miling_ondis')){
                    player.addTempSkill('yttl_miling_ondis','phaseAfter');
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                skillAnimation:"epic",
                unique:true,
                animationStr:"密令",
                animationColor:"fire",
                enable:"phaseUse",
                position:"h",
                audio:"ext:金庸群侠传:2",
                filter:function (event,player){
        if(player.hasSkill('yttl_miling_useskill')) return false;
        return player.countCards('h',{suit:'club'})>0;
    },
                check:function (card){return 9-get.value(card)},
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                filterTarget:function (card,player,target){
        if(target.hasSkill('yttl_miling_cl')) return false;
        if(target==player) return false;
        return true;
    },
                content:function (){
        "step 0"
        player.unmark(player.storage.yttl_milingname+'_charactermark');
        "step 1"
        target.gain(cards,player);
        target.storage.yttl_miling=player;
        player.addSkill('yttl_miling_useskill');
        target.addSkill('yttl_miling_cl');
        "step 2"
        var name=target.name;
        if(name.indexOf('unknown')==0){
            name=target.name2;
        }
        player.markCharacter(name,null,true,true);
        game.addVideo('markCharacter',player,{
            name:'密',
            content:'',
            id:'yttl_miling',
            target:name
        });
        player.storage.yttl_milingname=name;
        player.awakenSkill('yttl_miling');
    },
                discard:false,
                prepare:function (cards,player,targets){
        player.$give(cards,targets[0],false);
    },
                ai:{
                    basic:{
                        order:10.5,
                    },
                    result:{
                        target:function (player,target){
                return -0.5;
            },
                    },
                    threaten:1,
                },
            },
            "yttl_jinhua":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.canMoveCard()&&player.countCards('he',{suit:'club'})>0;
    },
                check:function (card){return 6-get.value(card)},
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                filterTarget:function (card,player,target){
        if(ui.selected.targets.length){
            var from=ui.selected.targets[0];
            var js=from.getCards('j');
            for(var i=0;i<js.length;i++){
                if(!target.hasJudge(js[i])) return true;
            }
            if(target.isMin()) return false;
            var es=from.getCards('e');
            for(var i=0;i<es.length;i++){
                if(!target.getEquip(get.subtype(es[i]))) return true;
            }
            return false;
        }
        else{
            return target.countCards('ej')>0;
        }
    },
                targetprompt:["被移走","移动目标"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        "step 0"
        if(targets.length==2){
            player.choosePlayerCard('ej',true,function(button){
                var player=_status.event.player;
                var targets0=_status.event.targets0
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
                    return !targets1.hasJudge(button.link);
                }
                else{
                    return !targets1.countCards('e',{subtype:get.subtype(button.link)});
                }
            });
        }
        else{
            event.finish();
        }
        "step 1"
        if(result.bool&&result.links.length){
            var link=result.links[0];
            if(get.position(link)=='e'){
                targets[1].equip(link);
            }
            else if(link.viewAs){
                targets[1].addJudge({name:link.viewAs},[link]);
            }
            else{
                targets[1].addJudge(link);
            }
            targets[0].$give(link,targets[1])
            game.delay();
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                if(ui.selected.targets.length==0){
                    if(att>0){
                        if(target.countCards('j')) return 10;
                    }
                    else if(att<0){
                        if(game.hasPlayer(function(current){
                            if(get.attitude(player,current)>0){
                                var es=target.getCards('e');
                                for(var i=0;i<es.length;i++){
                                    if(!current.getEquip(get.subtype(es[i]))) return true;
                                }
                            }
                        })){
                            return -att;
                        }
                    }
                    return 0;
                }
                if(att>0){
                    var es=ui.selected.targets[0].getCards('e');
                    var i;
                    for(i=0;i<es.length;i++){
                        if(!target.getEquip(get.subtype(es[i]))){
                            break;
                        }
                    }
                    if(i==es.length){
                        return 0;
                    }
                }
                return -att*get.attitude(player,ui.selected.targets[0]);
            },
                    },
                    expose:0.4,
                    threaten:1.3,
                },
            },
	"yttl_nijue":{
				audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h',{suit:'spade'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                position:"h",
                prompt:"弃置一张黑桃手牌交换两名角色的装备区里的牌或判定区里的牌",
                check:function (card){
        return 8-get.value(card)
    },
                selectTarget:2,
                filterTarget:function (card,player,target){
        //if(target.isMin()) return false;
        if(ui.selected.targets.length==0) return true;
        if(ui.selected.targets[0].countCards('e')!=0||target.countCards('e')!=0) return true;
        if(ui.selected.targets[0].countCards('j')!=0||target.countCards('j')!=0) return true;
        return false;
    },
                multitarget:true,
                content:function (){
        "step 0"
        var controls=[];
        if(targets[0].countCards('e')!=0||targets[1].countCards('e')!=0){
            controls.push('选项一');
        }
        if(targets[0].countCards('j')!=0||targets[1].countCards('j')!=0){
            controls.push('选项二');
        }
        if(controls.length==0) event.finish();
        event.on1='<br><br><div class="text">选项一:交换'+get.translation(targets[0])+'和'+get.translation(targets[1])+'装备区里的的牌</div>';
        event.on2='<br><br><div class="text">选项二:交换'+get.translation(targets[0])+'和'+get.translation(targets[1])+'判定区里的的牌</div>';
        var str='请选择一项'+event.on1+''+event.on2+'';
        
        player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
            return Math.floor(Math.random()*controls.length);
        }; 
        "step 1"
        if(result.control){
        player.$fullscreenpop('乾坤大挪移','fire'); 
            player.popup(result.control);
            game.log(player,'选择了',result.control);
            if(result.control=='选项一'){
                event.goto(2);
            }
            if(result.control=='选项二'){
                event.goto(4);
            }
        }
        else{
            event.finish();
        }
        "step 2" 
        event.cards=[targets[0].getCards('e'),targets[1].getCards('e')];
        targets[0].lose(event.cards[0],ui.special);
        targets[1].lose(event.cards[1],ui.special);
        if(event.cards[0].length) targets[0].$give(event.cards[0],targets[1]);
        if(event.cards[1].length) targets[1].$give(event.cards[1],targets[0]);
        "step 3"
        for(var i=0;i<event.cards[1].length;i++){
            targets[0].equip(event.cards[1][i]);
        }
        for(var i=0;i<event.cards[0].length;i++){
            targets[1].equip(event.cards[0][i]);
        }
        event.finish();
        "step 4"
        event.cards=[targets[0].getCards('j'),targets[1].getCards('j')];
        targets[0].lose(event.cards[0],ui.special);
        targets[1].lose(event.cards[1],ui.special);
        if(event.cards[0].length) targets[0].$give(event.cards[0],targets[1]);
        if(event.cards[1].length) targets[1].$give(event.cards[1],targets[0]);
        "step 5"
        for(var i=0;i<event.cards[1].length;i++){
            if(event.cards[1][i].viewAs){
                targets[0].addJudge({name:event.cards[1][i].viewAs},[event.cards[1][i]]);
            }
            else{
                targets[0].addJudge(event.cards[1][i]);
            }
        }
        for(var i=0;i<event.cards[0].length;i++){
            if(event.cards[0][i].viewAs){
                targets[1].addJudge({name:event.cards[0][i].viewAs},[event.cards[0][i]]);
            }
            else{
                targets[1].addJudge(event.cards[0][i]);
            }
        }
        event.finish();
    },
                ai:{
                    order:10,
                    threaten:function (player,target){
            return 1;
        },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var es=target.countCards('e');
                var js=target.countCards('j');
                if(ui.selected.targets.length==0){
                    if(att>0&&es==0&&js>0) return js;
                    if(att>0&&es==0&&js==0) return 1;
                }
                else{
                    var tar=ui.selected.targets[0];
                    if(tar.countCards('e')==0&&tar.countCards('j')>0){
                        if(att<=0&&es==0&&js==0) return -1;
                    }
                    if(tar.countCards('e')==0&&tar.countCards('j')==0){
                        if(att<=0&&es>0&&js==0) return -es;
                    }
                }
                return 0;
            },
                    },
                },
            },
            "yttl_jiuyang":{
				audio:"ext:金庸群侠传:2",
                group:"yttl_jiuyang_before",
                subSkill:{
                    before:{
                        trigger:{
                            global:"equipBefore",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(event.player==player) return false;
                if(get.subtype(event.card)=='equip1') return true
                return false;
            },
                        content:function (){
                trigger.attrangeBefore=true;
                trigger.attrangeBeforeNUM=trigger.player.getAttackRange();
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"equipEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.player==player) return false;
        if(!event.attrangeBefore) return false;
        if(get.subtype(event.card)!='equip1') return false;
        if(event.attrangeBeforeNUM<event.player.getAttackRange()) return true;
        return false;
    },
                content:function (){
        "step 0"
        event.num=trigger.player.getAttackRange()-trigger.attrangeBeforeNUM;
        "step 1"
        if(event.num>0){
            player.chooseToUse({name:'sha'},trigger.player,-1,'九阳：是否对'+get.translation(trigger.player)+'使用杀').set('targetRequired',true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool==false){ 
            event.finish();
        }
        else{
            player.logSkill('yttl_jiuyang');
            event.num--;
            event.goto(1);
        }
    },
                ai:{
                    threaten:0.8,
                },
            },
            "yttl_chuqiao":{
				audio:"ext:金庸群侠传:2",
                group:["yttl_chuqiao_remove"],
                subSkill:{
                    remove:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        popup:false,
                        forced:true,
                        filter:function (event,player){
                return player.identity!='zhu';
            },
                        content:function (){
                player.removeSkill('yttl_chuqiao');
            },
                        sub:true,
                    },
                },
                trigger:{
                    global:"shaMiss",
                },
                priority:-8,
                unique:true,
                zhuSkill:true,
                direct:true,
                filter:function (event,player){
        if(!player.hasZhuSkill('yttl_chuqiao')) return false;
        if(event.player.group!='wu') return false;
        if(event.player==player) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i])=='d') return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        event.cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.position(trigger.cards[i])=='d'){
                event.cards.push(trigger.cards[i]);
            }
        }
        "step 1"
        trigger.player.chooseBool('是否令'+get.translation(player)+'获得'+get.translation(event.cards)+'？').set('ai',function(){                                
            if(get.attitude(trigger.player,player)>0) return true;                     
            return false;
        }); 
        "step 2"
        if(result.bool){
            trigger.player.logSkill('yttl_chuqiao',player);
            player.gain(event.cards,'gain2');
        }
        else{
            event.finish();
        }    
    },
            },
	"yttl_cstaiji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h'){
                if(player.canUse({name:'wuzhong'},player)) return true;
            }
        }
        return false;
    },
                content:function (){
        player.useCard({name:'wuzhong'},player);
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
            },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
            if(tag=='noh'){
                if(player.countCards('h')!=1) return false;
            }
        },
                },
            },
            "yttl_yinjiu":{
                init:function (player){
        player.storage.yttl_yinjiu=[];
    },
                intro:{
                    content:"characters",
                },
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function (event,player,name){
        if(!player.countCards('h')) return false;
        return game.hasPlayer(function(current){
            return !player.storage.yttl_yinjiu.contains(current.name)&&current!=player;
        });
    },
                content:function (){
         "step 0"
        player.chooseTarget(get.prompt('yttl_yinjiu'),'是否将全部手牌交给一名你未依此法交过牌的其他角色?，若如此做,当其使用普通锦囊牌对你造成伤害时，取消之',function(card,player,target){
            if(player.storage.yttl_yinjiu.contains(target.name)) return false;
            return target!=player;
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            var hs=player.getCards('h');
            if(att>0&&hs.length>1) return att;
            if(att<=0&&hs.length==1&&get.value(hs[0])<6) return 1;
            return -1;
        });
        "step 1"
        if(result.bool){
            player.logSkill('yttl_yinjiu',result.targets);
            player.line(result.targets[0],'green');
            if(!player.storage.yttl_yinjiu.contains(result.targets[0].name)){
                player.storage.yttl_yinjiu.push(result.targets[0].name);
                player.markSkill('yttl_yinjiu');
                //player.syncStorage('yttl_yinjiu');         
            }
            var hs=player.getCards('h');
            result.targets[0].$gain2(hs);
            result.targets[0].gain(hs,player);
            game.log(result.targets[0],'获得'+hs.length+'张牌');
            event.tar=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        var next=event.tar.chooseCard([1,Infinity],'h','是否交给'+get.translation(player)+'任意张牌？',function(card,player){
            return true;
        });
        var att1=get.attitude(event.tar,player);
        next.ai=function(card){
            if(att1>0){
                if(ui.selected.cards.length>0) return -1;
                return 1;
            }
            return -1;
        };
        "step 3"
        if(result.bool){
            event.tar.line(player,'green');
            player.gain(result.cards,event.tar);
            event.tar.$give(result.cards.length,player);
            game.log(player,'获得'+result.cards.length+'张牌');
            
        }
    },
                group:"yttl_yinjiu_undamage",
                subSkill:{
                    undamage:{
                        trigger:{
                            player:"damageBefore",
                        },
                        filter:function (event,player){
                if(event.source==player) return false;
                if(!player.storage.yttl_yinjiu.contains(event.source.name)) return false;
                return event.card&&get.type(event.card)=='trick';
            },
                        forced:true,
                        content:function (){
				game.playJY(['yttl_yinjiu1','yttl_yinjiu2'].randomGet());			
                trigger.cancel();
            },
                        sub:true,
                    },
                },
                ai:{
                    notrick:true,
                    notricksource:true,
                    effect:{
                        target:function (card,player,target,current){
                if(!target.storage.yttl_yinjiu.contains(player.name)) return;
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
	"yttl_jixian":{
                init:function (player){
        player.storage.yttl_jixian=true;
    },
                mark:true,
                marktext:"嫉",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.yttl_jixian==true) return '摸:一名角色一次性获得至少两张牌后，你可以摸等量的牌';
            return '弃:一名角色一次性失去至少两张牌后，你可以弃置等量的牌';
        },
                },
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["gainEnd","loseEnd"],
                },
                filter:function (event,player,cards){
        if(event.player==player) return false;
        if(event.name=='gain'&&player.storage.yttl_jixian==true&&event.cards&&event.cards.length>1) return true;
        if(event.name=='lose'&&event.cards&&event.cards.length>1&&player.storage.yttl_jixian==false){
            if(player.countCards('he')>=event.cards.length) return true;       
        }
        return false;
    },
                check:function (event,player){
        if(event.name=='gain') return true;
        if(event.name=='lose'&&event.cards.length==2) return true;
        return false; 
    },
                content:function (){
        "step 0"
        var numm=trigger.cards.length;
        if(trigger.name=='gain'){
            player.draw(numm);
            player.storage.yttl_jixian=false;
        }
        if(trigger.name=='lose'){
            player.chooseToDiscard(numm,'he',true);
            player.storage.yttl_jixian=true;
        }
    },
            },
            "yttl_nishi":{
                 audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                position:"he",
                usable:1,
                filter:function (event,player){
        if(player.countCards('h')>=2) return true;
        return player.countCards('he',{type:'equip'})>0;
    },
                selectCard:function (target,card,player){
        var tar=ui.selected.targets
        var ca=ui.selected.cards;
        if(ca.length==0) return 2;
        if(ca.length==1){
            if(get.type(ca[0])=='equip'){
                if(get.position(ca[0])=='e'){
                    return 1;
                }
                else if(get.position(ca[0])=='h'){
                    if(tar.length==0) return [1,2];
                    if(tar.length==1) return 1;
                }
            }
            else if(get.type(ca[0])!='equip'){
                return 2;
            }
        };
        if(ca.length>1) return ca.length;
    },
                filterCard:function (card){
        var ca=ui.selected.cards;
        if(ca.length==0) return true;
        if(ca.length==1){
            if(get.type(ca[0])=='equip'){
                if(get.position(ca[0])=='e'){
                    return false;
                }
                else if(get.position(ca[0])=='h'){
                    if(get.position(card)=='e') return false;
                }
            }
            else if(get.type(ca[0])!='equip'){
                if(get.position(card)=='e') return false;
            }
        }
        if(ca.length>1) return false;
        return true;
    },
                check:function (card){
        var ca=ui.selected.cards;
        if(ca.length==0){
            var player=_status.currentPhase;
            if(player.countCards('he',{subtype:get.subtype(card)})>1){
                return 7-get.equipValue(card);
            }
            return 6-get.value(card);
        }
        if(ca.length>0){
            var player=_status.currentPhase;
            return 8-get.value(card);
        }
    },
                filterTarget:function (card,player,target){
        var ca=ui.selected.cards;
        if(ca.length==0) return false;
        if(ca.length==1){
            if(get.type(ca[0])=='equip'){
                if(get.position(ca[0])=='e'){
                    if(target.isMin()) return false;
                    if(!target.countCards('h')) return false;
                    return player!=target&&!target.getEquip(card);
                }
                else if(get.position(ca[0])=='h'){
                    if(target.isMin()) return false;
                    if(!target.countCards('h')) return false;
                    return player!=target&&!target.getEquip(card);
                }
            }
            else if(get.type(ca[0])!='equip'){
                return false;
            }
        }
        if(ca.length==2){
            if(target==player) return false;
            if(!target.countCards('e')) return false;
        }
        if(ca.length>2) return false;
        return true;
    },
                content:function (){
        "step 0"
        if(cards.length==1){
            target.equip(cards[0]);
            var num=Math.min(2,target.countCards('h'));
            if(num>0) player.gainPlayerCard(num,target,true,'h');    
        }
        else if(cards.length==2){
            target.gain(cards,player);
            var num=target.countCards('e');
            if(num>0) player.gainPlayerCard(1,target,true,'e');    
        }
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
                        target:function (player,target){
                var cas=ui.selected.cards.length;
                var att=get.attitude(player,target);
                var num=target.countCards('h');
                var num1=target.countCards('e');
                if(cas==2&&num1>1) return 1;
                if(cas==2&&num1==1) return -0.5;
                if(cas==1&&num==1&&num1==0) return 1;
                if(cas==1&&num>1&&num1==1) return -0.01;
                return 0.001;
            },
                    },
                    threaten:1,
                },
            },
	"yttl_huiqiao":{
				 audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["loseEnd","discardAfter"],
                },
                filter:function (event,player){
        if(event.player==player) return false;
        if(event.name=='lose'&&event.parent.name!='equip') return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.subtype(event.cards[i])=='equip1'&&get.position(event.cards[i])=='d'){
                return true;
            }
        }
    },
                direct:true,
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.subtype(trigger.cards[i])=='equip1'&&get.position(trigger.cards[i])=='d'){
                cards.push(trigger.cards[i]);
            }
        }
        if(cards.length){
            event.zhuangbei=cards;
        }
        "step 2"
        if(event.zhuangbei.length){
            player.chooseCardButton(event.zhuangbei,1,'请选择一张装备').set('filterButton',function(button){
                return get.subtype(button.link)=='equip1';
            });
        }
        else{
             event.finish();
        }  
        "step 3"
        if(result.bool){
            event.gainzhuangbei=result.links[0];
            event.zhuangbei.remove(result.links[0]);
        }
        else{
            event.finish();
        }  
         "step 4"
        player.chooseTarget('是否选择一名角色装备'+get.translation(event.gainzhuangbei)+'？',function(card,player,target){
           if(target.getEquip(1)) return false;
            return true;
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            if(target==player) att+=10;
            return att;
        });
       "step 5"
        if(result.bool){
            player.logSkill('yttl_huiqiao',result.targets[0]);
            result.targets[0].equip(event.gainzhuangbei,true).set('delay',true);
            event.goto(2);
        }
        else{
            event.goto(2);
        } 
    },
            },
            
            "yttl_jie":{
                trigger:{
                    global:"dying",
                },
                priority:6,
                audio:"ext:金庸群侠传:2",
                check:function (event,player){
        var att1=get.attitude(player,event.parent.source);
        var att2=get.attitude(player,event.player);
        var hs=false;
        var es=false;
        var js=false;
        if(event.parent.source.countDiscardableCards(player,'h')) hs=true;
        if(event.parent.source.countDiscardableCards(player,'e')) es=true;
        if(event.parent.source.countDiscardableCards(player,'j')) js=true;
        if(att1<=0&&att2>0){
            if(hs==true&&es==true&&js==true) return true;
            if(hs==true&&es==true&&js==false) return true;   
            if(hs==true&&es==false&&js==false) return true;
            if(hs==false&&es==true&&js==false) return true;
        }
        if(att1<=0&&att2<=0){
            if(hs==true&&es==true&&js==true) return true;
            if(hs==true&&es==true&&js==false) return true;
            if(hs==false&&es==true&&js==false) return true;
            if(hs==true&&es==false&&js==false) return true;
        }
        if(att1>0&&att2>0){
            if(hs==true&&es==true&&js==true) return true;
            if(hs==false&&es==false&&js==true) return true;
            if(hs==false&&es==true&&js==true) return true;
            if(hs==true&&es==false&&js==true) return true;
        }
        if(att1>0&&att2<=0){
            if(hs==false&&es==false&&js==true) return true;
        }
        return false;
    },
                filter:function (event,player){
        if(event.fadongjineng==true) return false;
        if(!event.parent.source) return false;
        if(!event.parent.source.countDiscardableCards(player,'hej')) return false;
        //if(!event.parent.source.countCards('hej')) return false;
        return event.parent.source.isIn()&&event.player.hp<=0;
    },
                content:function (){
        "step 0"
        trigger.fadongjineng=true;
        var num=0;
        if(trigger.parent.source.countDiscardableCards(player,'h')) num++;
        if(trigger.parent.source.countDiscardableCards(player,'e')) num++;
        if(trigger.parent.source.countDiscardableCards(player,'j')) num++;
        if(num){
            player.discardPlayerCard(trigger.parent.source,num,'hej',true).set('filterButton',function(button){
                for(var i=0;i<ui.selected.buttons.length;i++){
                    if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
                }
                return true;
            }).set('ai',function(button){
                var att1=get.attitude(player,trigger.parent.source);
                var att2=get.attitude(player,trigger.player);
                if(att1>0&&att2>0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)=='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.color(button.link)!=get.color(ui.selected.buttons[0].link)) return 1;
                        return -1;
                    }       
                }
                if(att1>0&&att2<=0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)=='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.color(button.link)==get.color(ui.selected.buttons[0].link)) return 1;
                        return -1;
                    }         
                }
                if(att1<=0&&att2>0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)!='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.position(button.link)!='j'&&get.color(button.link)!=get.color(ui.selected.buttons[0].link)) return 1;
                        if(get.position(button.link)!='j'&&get.color(button.link)==get.color(ui.selected.buttons[0].link)) return 0.5;
                        return -1;
                    }                     
                }
                if(att1<=0&&att2<=0){
                    if(ui.selected.buttons.length==0){
                        if(get.position(button.link)!='j') return 1;
                        return -1;
                    }
                    if(ui.selected.buttons.length>0){
                        if(get.position(button.link)!='j'&&get.color(button.link)==get.color(ui.selected.buttons[0].link)) return 0.5;
                        return -1;
                    }                     
                }
                return -1;
            });
        }
        "step 1"
        if(result.bool){
            var col=[];
            var car=result.links;
            player.showCards(car,'嫉恶');
            for(var i=0;i<car.length;i++){
                var cols=get.color(car[i]);
                if(!col.contains(cols)){
                    col.push(cols);
                }
            } 
            if(col.length>=2) trigger.player.recover();
        }
    },
                ai:{
                    threaten:1.4,
                },
            },
            "yttl_zhangjian":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore"],
                },
                frequent:true,
                filter:function (event,player){
        if(!player.getEquip(1)) return false;
        return true;
    },
                content:function (){
        player.draw();
    },
            },
	"yttl_xuanming":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["shaBefore"],
                },
                forced:true,
                filter:function (event,player){
        return get.number(event.card);
    },
                content:function (){
        if(get.number(trigger.card)%2==0) trigger.target.addTempSkill('yttl_xuanming_ou','shaAfter');
        if(get.number(trigger.card)%2==1) trigger.target.addTempSkill('yttl_xuanming_ji','shaAfter');
     },
                subSkill:{
                    ou:{
                        mark:true,
                        marktext:"偶",
                        intro:{
                            content:"你不能打出点数为奇数的牌",
                        },
                        mod:{
                            cardRespondable:function (card,player){
                    var num1=get.number(card);
                    if(num1%2==1) return false;
                },
                        },
                        sub:true,
                    },
                    ji:{
                        mark:true,
                        marktext:"奇",
                        intro:{
                            content:"你不能打出点数为偶数的牌",
                        },
                        mod:{
                            cardRespondable:function (card,player){
                    var num1=get.number(card);
                    if(num1%2==0) return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "yttl_hanyin":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        'step 0'
        event.cards=get.cards(2);
        player.showCards(event.cards,'酣淫');
        'step 1'
        var skr='是否选择一张黑色牌或无中生有?，若为无中生有你获得之，否则你将此牌当酒使用，若你依此法使用了牌或获得了牌，你此回合不能使用与该牌颜色不同的牌';
        player.chooseCardButton(event.cards,1,skr).set('filterButton',function(button){
            var cards=button.link;
            return get.color(cards)=='black'||cards.name=='wuzhong';
        }).set('ai',function(button){
            var resha=false;
            var blsha=false;
            var blnum=0;
            var renum=0;
            var ca=player.getCards('h');
            for(var i=0;i<ca.length;i++){
                if(get.color(ca[i])=='black'){
                    var canblack=game.hasPlayer(function(current){
                        return get.effect(current,ca[i],player,player)>0&&player.canUse(ca[i],current);
                    });
                    if(canblack&&ca[i].name!='sha') blnum++;
                    if(canblack&&ca[i].name=='sha'&&blsha==false) blsha=true;
                }
                if(get.color(ca[i])=='red'){
                    var canred=game.hasPlayer(function(current){
                        return get.effect(current,ca[i],player,player)>0&&player.canUse(ca[i],current);
                    });
                    if(canred&&ca[i].name!='sha') renum++;
                    if(canred&&ca[i].name=='sha'&&resha==false) resha=true;
                }
            }
            if(resha==true) renum++;
            if(blsha==true) blnum++;
            if(get.color(button.link)=='black'){
                if(blsha==true&&renum<2) return 1;
            }
            if(get.color(button.link)=='red'){
                if(resha==true&&blnum<2) return 1;
                if(resha==false&&blsha==false&&blnum<2) return 1;
            }
            return -1;
        });
          'step 2'
          if(result.bool){
              if(result.links[0].name=='wuzhong'){
                  player.gain(result.links[0],'gain2');
               //   player.useCard(result.links[0],player);
              }
              else{
                  player.useCard({name:'jiu'},player,result.links);
              }
              player.addTempSkill('yttl_hanyin_'+get.color(result.links[0]));
              for(var i=0;i<event.cards.length;i++){
                  if(result.links[0]!=event.cards[i]){
                      event.cards[i].discard();
                  }
              }
          }
          else{
              for(var i=0;i<event.cards.length;i++){
                  event.cards[i].discard();
              }
          }   
    },
                subSkill:{
                    red:{
                        mark:true,
                        marktext:"黑",
                        intro:{
                            content:"不能使用黑色牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.color(card)=='black') return false;
                },
                            cardUsable:function (card,player){
                    if(get.color(card)=='black') return false;
                },
                            cardSavable:function (card,player){
                    if(get.color(card)=='black') return false;
                },
                            targetInRange:function (card){
                    if(get.color(card)=='black') return false;
                },
                        },
                        sub:true,
                    },
                    black:{
                        mark:true,
                        marktext:"红",
                        intro:{
                            content:"不能使用红色牌",
                        },
                        mod:{
                            cardEnabled:function (card,player){
                    if(get.color(card)=='red') return false;
                },
                            cardUsable:function (card,player){
                    if(get.color(card)=='red') return false;
                },
                            cardSavable:function (card,player){
                    if(get.color(card)=='red') return false;
                },
                            targetInRange:function (card){
                    if(get.color(card)=='red') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
	"yttl_lttaiji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"loseEnd",
                },
             		frequent:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
                content:function (){
       player.useCard({name:'wuzhong'},player);
    },
                ai:{
                    order:2,
                    result:{
                        player:function (player)  {     
                return 1;
            },
                    },
                },
            },
            "yttl_chanru":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
        return player.countCards('h')>0&&event.card&&get.color(event.card)=='black'&&event.card.name=='sha';
    },
                content:function (){
        "step 0"
                player.chooseCard('h',true,'交给'+get.translation(trigger.source)+'一张手牌').ai=function(card){
    return 6.5-get.value(card);
          };                
        "step 1"
      if(result.bool){ 
        var card=result.cards[0];
        player.$give(card,trigger.source);
        trigger.source.gain(card,player);
        trigger.num--;
        }    
        else{
            event.finish();
        }  
    },
                ai:{
                    threaten:0.8,
                    order:3,
                },
            },
            "yttl_tongshou":{
                skillAnimation:true,
                audio:"ext:金庸群侠传:2",
                derivation:["yttl_lttaiji"],
                unique:true,
                trigger:{
                    player:"phaseBeginStart",
                },
                filter:function (event,player){
        return player.countCards('h')<=0;
    },
                forced:true,
                priority:3,
                content:function (){
        player.$fullscreenpop('天地同寿','fire');        
        player.loseMaxHp();
        player.addSkill('yttl_lttaiji');        
        player.awakenSkill('yttl_tongshou');       
    },
                ai:{
                    threaten:function (player,target){           
            return 0.5;
        },
                },
            },
	 "yttl_xiaoyong":{
                audio:"ext:金庸群侠传:2",
                enable:["chooseToUse"],
                usable:1,
                filterCard:function (card,player){
        var type=get.type(card);
        if(type=='trick'||type=='delay') return true;
        return false;
    },
                position:"h",
                viewAs:{
                    name:"sha",
                    suit:"spade",
                    number:1,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":1,"name":"shandian","nature":"thunder","cardid":"1865035315","_transform":"translateX(145.5px)","clone":{"name":"shandian","suit":"spade","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":329},"timeout":297,"original":"h"}],
                },
                viewAsFilter:function (player){
        var num1=player.countCards('h',{type:'trick'});
        var num2=player.countCards('h',{type:'delay'});
        if(_status.currentPhase!=player) return false;
        if(num1+num2==0) return false;
    },
                prompt:"将一张锦囊牌当杀使用",
                check:function (card){
        return 6-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            var num1=player.countCards('h',{type:'trick'});
            var num2=player.countCards('h',{type:'delay'});
            if(_status.currentPhase!=player) return false;
            if(num1+num2==0) return false;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            return get.order({name:'sha'})+0.1;
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
                group:["yttl_xiaoyong_use"],
                subSkill:{
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return event.skill=='yttl_xiaoyong'&&event.card.name=='sha'&&_status.currentPhase==player;
            },
                        content:function (){
                player.getStat().card.sha--;
            },
                        sub:true,
                    },
                },
            },
            "yttl_xianfeng":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        'step 0'
        player.phaseUse();
        'step 1'
        player.getStat().card={};
        player.getStat().skill={};
    },
            },
	"yttl_qizhao":{
                 audio:"ext:金庸群侠传:2",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
        if(!player.getEquip(1)) return false;
        var cards=player.getEquip(1);
        return get.color(card)==get.color(cards);
    },
                position:"he",
                viewAs:{
                    name:"sha",
                    suit:"heart",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{"vanish":true},"vanishtag":[],"_uncheck":[],"suit":"heart","number":6,"name":"zhuge","cardid":"8774026622","clone":{"name":"zhuge","suit":"heart","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":274},"timeout":247,"original":"e"}],
                },
                viewAsFilter:function (player){
        if(!player.getEquip(1)) return false;
        var cards=player.getEquip(1);
        var colors=get.color(cards);
        if(!player.countCards('he',{color:colors})) return false;
    },
                prompt:"将一张与你武器牌颜色相同的牌当杀使用或打出",
                check:function (card){
        var value=get.value(card);
        if(get.subtype(card)=='equip1') value+=7;
        if(get.position(card)=='e'&&get.subtype(card)=='equip1') value+=2;
        if(get.position(card)=='e'&&card.name=='zhuge') value+=1;
        if(card.name=='zhuge') value+=1;
        return 20-value
    },
                ai:{
                    skillTagFilter:function (player){
            if(!player.getEquip(1)) return false;
            var cards=player.getEquip(1);
            var colors=get.color(cards);
            if(!player.countCards('he',{color:colors})) return false;
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
            "yttl_lingjian":{
                audio:"ext:金庸群侠传:2",
                unique:true,
                mark:true,
                skillAnimation:true,
                trigger:{
                    player:"phaseBegin",
                },
                init:function (player){
        player.storage.yttl_lingjian=false;
    },
                filter:function (event,player){
        if(event.player.getEquip(1)) return false;
        if(player.storage.yttl_lingjian) return false;
        return true;
    },
                check:function (event,player){
        if(event.player==player) return true;
        return false;
    },
                content:function (){
           "step 0"
        player.awakenSkill('yttl_lingjian');
        trigger.player.draw(2);
        player.storage.yttl_lingjian=true;
        "step 1"
        if(player.countCards('he')>0){ 
            player.chooseToDiscard(1,'he',true);
        }
          "step 2"
          var list=[];
        for(var i=0;i<lib.inpile.length;i++){
            var name=lib.inpile[i];
            var card={name:name};
            var subtype=get.subtype(card);
            if(subtype&&subtype=='equip1'){
                list.push(['武器','',name]);              
            }
        }
        var dialog=ui.create.dialog('选择一张武器牌令其装备之',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            if(trigger.player.hasSkill('wusheng')&&card.name=='zhuge') value+=10;
            if(trigger.player.hasSkill('yttl_qizhao')&&card.name=='zhuge') value+=10;
            if(trigger.player.hasSkill('paoxiao')&&card.name=='zhangba') value+=10;
            return value;
        });
        'step 3'
        if(result.bool){
            var card=game.createCard(result.buttons[0].link[2]);
            trigger.player.equip(card,true).set('delay',true);
            trigger.player.storage.yttl_lingjianwuqi=card;
            trigger.player.addSkill('yttl_lingjian_end');
        }
        
    },
                intro:{
                    content:"limited",
                },
                subSkill:{
                    end:{
                        group:["yttl_lingjian_die"],
                        onremove:function (player){
                var card=player.storage.yttl_lingjianwuqi;
                ui.special.appendChild(card);
                delete player.storage.yttl_lingjianwuqi;
            },
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('yttl_lingjian_end');
            },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            player:"dieBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('yttl_lingjian_end');
            },
                        sub:true,
                    },
                },
            },
	"yttl_hanji":{
                mod:{
                    targetEnabled:function (card,player,target){
            if(player!=target&&card.number<8) return false;
        },
                    playerEnabled:function (card,player,target){
            if(player!=target&&card.number>10) return false;
        },
                },
            },
            "yttl_jiedao2":{
               audio:"ext:金庸群侠传:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                viewAs:{
                    name:"jiedao",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{suit:'club'})) return false;
    },
                prompt:"将一张梅花牌当借刀杀人使用",
                check:function (card){
        return 4-get.value(card);
    },
                ai:{
                    skillTagFilter:function (player){
            return player.countCards('h',{suit:'club'})>0;
        },
                    threaten:0.5,
                    save:true,
                    order:function (){
            return get.order({name:'sha'})+0.2;
        },
                    basic:{
                        order:8,
                        value:2,
                        useful:1,
                    },
                    result:{
                        target:-1.5,
                        player:function (player){
                if(player.getCards('he',{subtype:'equip1'}).length) return 0;
                return 1.5;
            },
                    },
                    tag:{
                        gain:1,
                        use:1,
                        useSha:1,
                        loseCard:1,
                    },
                },
            },
            "yttl_jiedao":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h');
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('yttl_jiedao2'),function(card,player,target){
            return target!=player&&target.countCards('h');
        }).set('ai',function(target){
            if(!_status.event.goon) return 0;
            return -get.attitude(_status.event.player,target);
        }).set('goon',player.needsToDiscard()||player.hasCard(function(card){
            var val=get.value(card);
            if(val<0) return true;
            if(val<=5){
                return card.number>=11;
            }
            if(val<=6){
                return card.number>=12;
            }
            return false;
        }));
        'step 1'
        if(result.bool){
            player.logSkill('yttl_jiedao2',result.targets);
            event.target=result.targets[0];
            player.chooseToCompare(event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.addTempSkill('yttl_jiedao2','phaseEnd');
        }
        else{
            if(player.getEquip(1)!=undefined){
                player.discard(player.getEquip(1));
            }
        }
    },
            },
	"yttl_chuxin":{
	 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:["useCard","respond"],
                },
                priority:-1,
                silent:true,
                filter:function (event,player){
        if(player.hasSkill('yttl_chuxin_heart')) return false;
        if(player.hasSkill('yttl_chuxin_diamond')) return false;
        if(player.hasSkill('yttl_chuxin_club')) return false;
        if(player.hasSkill('yttl_chuxin_spade')) return false;
        if(!event.cards||event.cards.length!=1) return false;
        return true;
    },
                content:function (){
        player.addSkill('yttl_chuxin_'+get.suit(trigger.cards[0]));
    },
                forced:true,
                subSkill:{
                    heart:{
                        mark:true,
                        marktext:"♥️",
                        intro:{
                            content:"你的♥️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='heart') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='heart') return false;
                },
                        },
                        sub:true,
                    },
                    diamond:{
                        mark:true,
                        marktext:"♦️",
                        intro:{
                            content:"你的♦️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='diamond') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='diamond') return false;
                },
                        },
                        sub:true,
                    },
                    club:{
                        mark:true,
                        marktext:"♣️",
                        intro:{
                            content:"你的♣️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='club') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='club') return false;
                },
                        },
                        sub:true,
                    },
                    spade:{
                        mark:true,
                        marktext:"♠️",
                        intro:{
                            content:"你的♠️牌不计入手牌上限",
                        },
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='spade') return true;
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='spade') return false;
                },
                        },
                        sub:true,
                    },
                },
                popup:false,
            },
            "yttl_maodu":{
                 audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                content:function (){
        "step 0"
        player.loseMaxHp(2);
        'step 0'
        player.chooseTarget('是否选择一名体力上限大于你的体力上限的角色流失一体力？，否则你摸四张牌',function(card,player,target){
            return target!=player&&target.maxHp>player.maxHp;
        }).set('ai',function(target){
            if(target.hp==1){
                return -get.attitude(player,target);
            }
            return -1;         
        });
        'step 1'
        if(result.bool){
            result.targets[0].loseHp(1);
        }
        else{
          player.draw(4);
        }  
    },
                subSkill:{
                    damage:{
                        trigger:{
                            player:"damageEnd",
                            source:"damageEnd",
                        },
                        filter:function (event,player){
            if((event.nature)&&(event.num>0)) return true;
        },
                        forced:true,
                        content:function (){
            player.gainMaxHp(trigger.num);
        },
                        sub:true,
                    },
                },
                group:["yttl_maodu_damage"],
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.maxHp-player.hp>=2) return 1;
                return -1;
            },
                    },
                },
            },
"yttl_jingang":{
                 audio:"ext:金庸群侠传:2",
                enable:["chooseToUse","chooseToRespond"],              
                filterCard:function (){return false},
                init:function (player){player.storage.yttl_jingang=[];player.syncStorage('yttl_jingang');},             
                selectCard:-1,
                viewAsFilter:function (player){return player.storage.yttl_jingang<=7;},
                viewAs:{
                    name:"wuxie",
                },
                mark:true,
                		intro:{
                    content:"已发动了#次金刚",
                },
                onuse:function (result,player){
                player.turnOver();
                player.storage.yttl_jingang++;
                player.markSkill('yttl_jingang');
                player.update();
                },
                prompt:"你可以选择翻面，然后你视为使用一张【无懈可击】",
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
            "yttl_fumo":{
                 audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"turnOverEnd",
                },
               frequent:true,
               filter:function (event,player){
             return player.isTurnedOver();
    },
                content:function (){
        "step 0"
        if(typeof event.count!='number'){
            // event.count=trigger.cards.length-1;
            event.count=1;
        } 
        "step 1"
    event.num=0;
   event.players=game.filterPlayer();        
        "step 2"
        if(event.num<event.players.length){
            var target=event.players[event.num];
            if(!target.isLinked()){
                target.link();
            }
            event.num++;
            event.redo();
        }
        "step 3"
        if(event.count>1){
            event.count--;
            event.goto(0);
        }
    },
                ai:{
                    expose:0.1,
                    threaten:2,
                },
            },
            
            
            
            		/*yttl_guchanshunshou:{
						mark:true,
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='shunshou') return false;
					}
				},
			},
			    		yttl_guchanguohe:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='guohe') return false;
					}
				},
			},
            		yttl_guchanwuzhong:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='wuzhong') return false;
					}
				},
			},    
                		yttl_guchannanman:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='nanman') return false;
					}
				},
			},
                		yttl_guchanwanjian:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='wanjian') return false;
					}
				},
			},
             		yttl_guchantaoyuan:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='taoyuan') return false;
					}
				},
			},  
             		yttl_guchanjuedou:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='juedou') return false;
					}
				},
			},   
                		yttl_guchanjiedao:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='jiedao') return false;
					}
				},
			},
           		yttl_guchanwugu:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='wugu') return false;
					}
				},
			},
			        		yttl_guchanshandian:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='shandian') return false;
					}
				},
			},
			    		yttl_guchanlebu:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='lebu') return false;
					}
				},
			},
			         		yttl_guchanbingliang:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='bingliang') return false;
					}
				},
			},
			             		yttl_guchanhuogong:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='huogong') return false;
					}
				},
			}, 
			           		yttl_guchantiesuo:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='tiesuo') return false;
					}
				},
			},
			                    
			                                              

			yttl_guchan:{
					trigger:{
			        	player:["turnOverEnd","linkEnd"],
				},		
			 direct:true,
				popup:false,
				filter:function(event,player){
							if(player.turnedOver()) return false;
				if(player.linked()) return false;
					return player.isAlive();
				},
				content:function(){
					'step 0'
					player.chooseTarget(true,function(card,player,target){
						return player.isAlive();
					},'枯禅<br><br><div class="text center">令一名其他角色本局游戏不能成为这张牌的目标').set('ai',function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0){
							if(get.attitude(target,player)>0){
								return target.countCards('h');
							}
							return -target.countCards('h')/2;
						}
						return 2;
					});
					'step 1'
					if(result.bool){
					player.logSkill('yttl_guchan');
					var target=result.targets[0];		     
					      player.storage.yttl_guchan=target;            					        
         var controls=[];                             
          if (!player.storage.yttl_guchanbingliang) controls.push('兵');        
          if (!player.storage.yttl_guchanlebu) controls.push('乐');   
          if (!player.storage.yttl_guchanshandian) controls.push('电');    
          if (!player.storage.yttl_guchanshunshou) controls.push('顺');   
          if (!player.storage.yttl_guchanguohe) controls.push('拆');  
          if (!player.storage.yttl_guchanwuzhong) controls.push('无中');  
          if (!player.storage.yttl_guchannanman) controls.push('南蛮');   
          if (!player.storage.yttl_guchanwanjian) controls.push('万箭');   
          if (!player.storage.yttl_guchantaoyuan) controls.push('桃园');   
          if (!player.storage.yttl_guchanjuedou) controls.push('决斗');   
          if (!player.storage.yttl_guchanjiedao) controls.push('借刀');         
          if (!player.storage.yttl_guchanwugu) controls.push('五谷');   
          if (!player.storage.yttl_guchanhuogong) controls.push('火攻');   
          if (!player.storage.yttl_guchantiesuo) controls.push('铁索');                                                                                                              
          var str='请选择给'+get.translation(target)+'标记一种牌名';            
          player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                        return Math.floor(Math.random()*controls.length);
                    };                   
       }
       else{
              event.finish();
       }
        "step 2"
        if(result.control){
           var target=player.storage.yttl_guchan;     
            if (result.control=='兵') {
            player.storage.yttl_guchanbingliang=true;
            target.addSkill('yttl_guchanbingliang');                     
            }
           if (result.control=='乐') {
            player.storage.yttl_guchanlebu=true;
            target.addSkill('yttl_guchanlebu');           
            }
                if (result.control=='电') {
            player.storage.yttl_guchanshandian=true;
            target.addSkill('yttl_guchanshandian');
            }    
              if (result.control=='顺') {
            player.storage.yttl_guchanshunshou=true;
            target.addSkill('yttl_guchanshunshou');
            }
              if (result.control=='拆') {
            player.storage.yttl_guchanguohe=true;
            target.addSkill('yttl_guchanguohe');
            }
                if (result.control=='无中') {
            player.storage.yttl_guchanwuzhong=true;
            target.addSkill('yttl_guchanwuzhong');
            controls.remove(result.control);    
            }
              if (result.control=='南蛮') {
            player.storage.yttl_guchannanman=true;
            target.addSkill('yttl_guchannanman');
            }
              if (result.control=='万箭') {
            player.storage.yttl_guchanwanjian=true;
            target.addSkill('yttl_guchanwanjian');
            }
              if (result.control=='桃园') {
            player.storage.yttl_guchantaoyuan=true;
            target.addSkill('yttl_guchantaoyuan');
            }
              if (result.control=='决斗') {
            player.storage.yttl_guchanjuedou=true;
            target.addSkill('yttl_guchanjuedou');
            }
              if (result.control=='借刀') {
            player.storage.yttl_guchanjiedao=true;
            target.addSkill('yttl_guchanjiedao');
            }          
              if (result.control=='五谷') {
            player.storage.yttl_guchanwugu=true;
            target.addSkill('yttl_guchanwugu');
            }
              if (result.control=='火攻') {
            player.storage.yttl_guchanhuogong=true;
            target.addSkill('yttl_guchanhuogong');
            }
              if (result.control=='铁索') {
            player.storage.yttl_guchantiesuo=true;
            target.addSkill('yttl_guchantiesuo');
            }
            }
           else{
                   event.finish();
           }                                                                                                                                                                                                                       
				},
			},*/
yttl_guchan:{
	 audio:"ext:金庸群侠传:6",
                trigger:{
                    player:"turnOverEnd",
                },
                direct:true,
				filter:function(event,player){				
					//return !player.isTurnedOver();
					return player.isAlive();
				},
                content:function (){        
        'step 0'
        player.chooseTarget(function(card,player,target){
            return player.isAlive();
        },'枯禅<br><br><div class="text center">令一名其他角色本局游戏不能成为这张牌的目标').set('ai',function(target){
            var player=_status.event.player;
            if(get.attitude(player,target)>0){
                if(get.attitude(target,player)>0){
                    return target.countCards('h');
                }
                return -target.countCards('h')/2;
            }
            return 2;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];    
            event.target=target;
            target.addSkill('yttl_guchan2'); 
            if(!target.storage.yttl_guchan){
                target.storage.yttl_guchan=[];
            }
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang','shandian'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }
            player.chooseButton(true,[[list,'vcard']]).set('filterButton',function(button){
                if(target.storage.yttl_guchan&&target.storage.yttl_guchan.contains(button.link[2])) return false;
                return true;
            }).set('ai',function(button){
                var rand=_status.event.rand*2;
                switch(button.link[2]){
                    case 'lebu':return 3+rand[3];
                    case 'shunshou':return 3+rand[6];
                    case 'nanman':return 2+rand[7];
                    case 'wanjian':return 2+rand[8];
                    default:return rand[9];
                }
            }).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
        }
        'step 2'
        if(result.bool){
			player.logSkill('yttl_guchan');
            event.target.storage.yttl_guchan.add(result.links[0][2]);
        }
    },
            },
            "yttl_guchan2":{
                mod:{
                    targetEnabled:function (card,player,target){
            if(target.storage.yttl_guchan.contains(card.name)) return false;
        },
                },
            },
  "yttl_qingce":{
	  audio:"ext:金庸群侠传:2",
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
            player.chooseTarget('清侧：是否额外指定你与任意名距离为一的角色成为'+get.translation(trigger.card)+'的目标？',[1,Infinity],function(card,player,target){
                var trigger=_status.event.getTrigger();
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,_status.event.player,target)&&get.distance(player,target)<=1;
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
            player.logSkill('yttl_qingce',event.target);
            game.log(event.target,'额外成为了'+get.translation(trigger.card)+'的目标');
            trigger.targets.addArray(event.target);
        }
        event.finish();
        'step 3'
        player.chooseTarget('清侧：是否取消任意你与距离为一的角色'+get.translation(trigger.card)+'的目标？',[1,Infinity],function(card,player,target){
            return _status.event.getTrigger().targets.contains(target)&&get.distance(player,target)<=1;
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            return -get.effect(target,trigger.card,trigger.player,_status.event.player);
        });
        'step 4'
        if(result.bool){
            event.targets=result.targets;
            if(event.isMine()){
                player.logSkill('yttl_qingce',event.targets);
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
        player.logSkill('yttl_qingce',event.targets);
    },
            },
            "yttl_yinyuan":{
				audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                zhuSkill:true,
                popup:false,
                forced:true,
                unique:true,
                filter:function (event,player){
        return player.identity!='zhu';
    },
                content:function (){
        player.removeSkill('yttl_yinyuan');
    },
                mod:{
                    globalFrom:function (from,to){
            if(from.hasZhuSkill('yttl_yinyuan')&&to.group=='wu') return -Infinity;
        },
                },
            },
            "yttl_yaohui1":{               
                enable:"phaseUse",
                filter:function (event,player){
        if(!player.countCards('h',{type:'equip'})) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.hasSkill('yttl_yaohui');
        });
    },
                position:"he",
                filterCard:function (card){
        return get.type(card)=='equip';
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
        return player!=target&&!target.getEquip(card)&&target.hasSkill('yttl_yaohui');
    },
                content:function (){
					game.playJY(['yttl_yaohui1','yttl_yaohui2'].randomGet());
        target.equip(cards[0]);
        player.draw(2);
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
                        player:1,
                        target:3,
                    },
                },
            },
            "yttl_yaohui":{
				audio:"ext:金庸群侠传:2",
                global:"yttl_yaohui1",
            },
               "yttl_xingshi":{
			    audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"useCard",
                },
                priority:2019327,
                direct:true,
                filter:function (event,player){
        if(get.type(event.card)!='trick'&&get.type(event.card)!='basic') return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        var next=player.chooseCardTarget({
            position:'h',
            filterCard:lib.filter.cardDiscardable,
            filterTarget:function(card,player,target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,player,target);
                return false;
            },
            ai1:function(card){
                if(trigger.card.name=='jiu') return-1;
                return get.value(trigger.card)-get.value(card);
            },
            ai2:function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
            },
            prompt:get.prompt('yttl_xingshi')
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill('yttl_xingshi',result.targets);
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.targets){
            game.log(event.targets,'额外成为了'+get.translation(trigger.card)+'的目标');
            trigger.targets.addArray(event.targets);
        }
    },
                ai:{
                    threaten:2,
                },
            },
            "yttl_jieao":{
                init:function (player){
        player.storage.yttl_jieao=[];
    },
                intro:{
                    content:"characters",
                },
                group:["yttl_jieao_count","yttl_jieao_draw","yttl_jieao_before"],
                subSkill:{
                    count:{
                        trigger:{
                            player:"useCard",
                        },
                        priority:-2019327,
                        filter:function (event,player){
                if(get.type(event.card)!='trick') return false;
                return _status.currentPhase==player;
            },
                        direct:true,
                        silent:true,
                        content:function (){               
//				game.playJY(['yttl_jieao1','yttl_jieao2'].randomGet());
                if(player.storage.yttl_jieao==undefined) player.storage.yttl_jieao=[];
                    for(var i=0;i<trigger.targets.length;i++){
                        if(trigger.targets[i]!=player){ 
                            var juese=trigger.targets[i].name;
                            if(!player.storage.yttl_jieao.contains(juese)){
                                player.storage.yttl_jieao.push(juese);
                            }
                        }
                    }
                player.markSkill('yttl_jieao');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    draw:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                return player.storage.yttl_jieao.length>0;
            },
                        silent:true,
                        content:function (){
                "step 0"
				game.playJY(['yttl_jieao1','yttl_jieao2'].randomGet());
                event.num1=player.storage.yttl_jieao.length;
                player.draw(event.num1);
                "step 1"
                if(event.num1>3){player.turnOver();}
                player.storage.yttl_jieao=[];
                "step 2"
                player.logSkill('yttl_jieao')
                player.markSkill('yttl_jieao');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    before:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        filter:function (event,player){
                return player.storage.yttl_jieao.length>0;
            },
                        silent:true,
                        content:function (){
                player.storage.yttl_jieao=[];
                player.markSkill('yttl_jieao');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
			
          
            "yttl_taiji":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"loseEnd",
                },
             		frequent:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
                content:function (){
       player.useCard({name:'wuzhong'},player);
    },
                ai:{
                    order:2,
                    result:{
                        player:function (player)  {     
                return 1;
            },
                    },
                },
            },
            "yttl_chunyan":{
                audio:"ext:金庸群侠传:2",
                enable:["chooseToUse","chooseToRespond"],
                filter:function (event,player){          
                         if(player.getStat().skill.yttl_chunyan>=player.hp) return false;        
                         return player.countCards('h')>1;
                },
                group:"yttl_chunyan2",
                filterCard:function (card){ 
                        return true; 
                },
                position:"h",
                complexCard:true,
                popname:true,
                selectCard:2,
                viewAs:{
                    name:"sha",
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
            "yttl_chunyan2":{
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){                                            
                    if(!event.filterCard({name:'sha'})) return false;
                    return true;
                },
                direct:true,
                content:function (){
                    "step 0"                        
                    player.chooseCard(get.prompt('yttl_chunyan'),2,'h',function(card){                
                        return 6-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                       // game.playJY(['yttl_chunyan1','yttl_chunyan2'].randomGet());
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'sha'}}    
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);
                        player.logSkill('yttl_chunyan');                            
                    }
                    else{
                        event.finish();
                    }                                    
                },
            },
            "yttl_taoli":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"loseEnd",
                },
                zhuSkill:true,
                direct:true,
                filter:function (event,player){
                     if(player.countCards('h')<=0) return false;
                     if(event.player.countCards('h')>0) return false;
                     if(event.player.group!='wu') return false;               
                     if(event.player==player) return false;
                     if(!player.hasZhuSkill('yttl_taoli')) return false;
                 return true;        
           },
                check:function (event,player){
           return get.attitude(player,event.player)>0;
      },
                content:function (){        
             'step 0' 
        player.chooseCard('是否交给'+get.translation(trigger.player)+'一张手牌？',1).ai=function(card){ 
            return 7-ai.get.value(card);            
        } 
        'step 1' 
        if(result.bool){ 
            player.logSkill('yttl_taoli',trigger.player); 
            trigger.player.gain(result.cards); 
            player.$give(result.cards.length,trigger.player); 
            game.delay(); 
            event.finish(); 
        } 
        else{ 
            event.finish(); 
        } 
    },
                ai:{
                    result:{
                        target:-0.5,
                    },
                    basic:{
                        order:9,
                    },
                },
            },
            
            "yttl_fendao":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.countCards('e')>0;
    },
                content:function (){
        'step 0'      
            player.chooseCardButton('焚刀',target.getCards('e')).ai=function(button){
                return get.value(button.link)-1;
            }     
        'step 1'
        if(result.bool){
          var chat=['屠龙刀是我们的了，哈哈！','武林至尊，宝刀屠龙。号令天下，莫敢不从！'].randomGet();
            player.say(chat);  
            event.card1=result.links[[0]];
            event.cards=get.cards(1);
         //   player.showCards(event.cards);         
        }
        else{
            event.finish();
        }
        'step 2'
        if(get.color(event.cards)=='red'){
        target.discard(event.card1);
        target.gain(event.cards);
          target.recover();
          }
          else{
           target.discard(event.card1);
           target.gain(event.cards);
            player.gain(event.card1,target);
            target.gain(result.cards);
          //  player.$giveAuto(result.cards,target);
            target.$giveAuto(event.card);
          //  game.log(player,'获得',target,'一张装备牌');            
        }
    },
                ai:{
                    threaten:0.3,
                    result:{
                        target:function (player,target){
                return -target.countCards('e');
            },
                    },
                    order:10,
                    expose:0.6,
                },
            },
            "yttl_kuiyu":{
                audio:"ext:金庸群侠传:2",
               trigger:{
        player:"useCard",
    },
    frequent:true,
    filter:function (event){
        var type=get.type(event.card,'trick');
        return (type=='equip')&&event.cards[0]&&event.cards[0]==event.card;
    },                      
                content:function (){   
        player.draw();
    },
                ai:{
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },         
},

 translate:{
	 "yttl_xiaozhao":"小昭",
            "yttl_lianxiang":"怜香",
            "yttl_lianxiang_info":"锁定技，当其他玩家使用【杀】指定你为目标时，需额外弃掉一张牌，否则该【杀】对你无效。",
            "yttl_yibi":"义婢",
            "yttl_yibi_info":"出牌阶段，你可以将任意张【杀】牌送给一名男性角色，其使用的这些【杀】不计入出杀次数，其每使用这些杀造成一次伤害，你摸一张牌。",
            "yttl_yibi1":"义婢",
            "yttl_yibi1_info":"",
 "yttl_weiyixiao":"韦一笑",
            "yttl_binzhang":"冰掌",
            "yttl_binzhang_info":"你使用【杀】造成伤害后，你可以令目标于本局游戏不能使用或打出一种花色的非装备牌(对每名角色限一次，每种花色限一次)。",
            "yttl_zhuiyun":"追云",
            "yttl_zhuiyun_info":"锁定技，你的进攻距离+1",
            "yttl_xuefu":"血蝠",
            "yttl_xuefu_info":"锁定技，若你未于你的回合使用过【桃】或【酒】，则你本回合手牌上限减X(X为你发动【冰掌】的次数)。",
 "yttl_yinyewang":"殷野王",
            "yttl_spxuanmingerlao":"SP玄冥二老",
            "yttl_xiexun":"谢逊",
            "yttl_feiding":"飞钉",
            "yttl_feiding_info":"一名其他角色的结束阶段开始时，若该角色在你的攻击范围内并且装备了武器牌，你使用对其使用一张杀。若其受到伤害，你获得其武器牌。",
            "yttl_yangwei":"扬威",
            "yttl_yangwei_info":"限定技;出牌阶段，你可以弃置一张武器牌，然后废除一名有武器栏的角色的武器栏。",
             "yttl_xuanyin":"玄阴",
            "yttl_xuanyin_info":"你造成伤害后，你可以废除目标的一个装备栏，被你废除装备栏的角色于同一回合内使用第三张同名牌时，其可以回复一个被你废除的装备栏。",
            "yttl_xuanyin1":"玄阴",
            "yttl_xuanyin1_info":"",
            "yttl_mingjian":"名缰",
            "yttl_mingjian_info":"出牌阶段限一次，你可以回复一名角色的一个装备栏并摸两张牌;然后其选择一名其他角色，你本回合使用牌的目标只能选择其选择的角色为目标。",			
            "yttl_shikon":"狮吼",
            "yttl_shikon_info":"锁定技，你使用杀时，目标只能使用<span style=\"color:#FF00FF\">点数</span>大于此【杀】的【闪】来抵消之",
            "yttl_wudao":"悟刀",
            "yttl_wudao_info":"游戏开始时，你需声明一张武器牌的牌名。锁定技，你装备区里的武器牌技能无效且视为你声明的武器牌的技能。",
 "yttl_yinsusu":"殷素素",
            "yttl_congshan":"从善",
            "yttl_congshan_info":"转换技。出牌阶段限一次，①你可以获得一名其他角色一张手牌。②你可以交给一名其他角色一张手牌。",
            "yttl_tuobiao":"托镖",
            "yttl_tuobiao_info":"弃牌阶段结束时，你可以将你弃置的一张牌交给一名其他角色，称为“镖”。若如此做，其下个回合准备阶段，你获得其一张手牌并展示之，若你于此阶段获得“镖”，你对其造成1点伤害。",
            "yttl_tuobiao1":"托镖",
            "yttl_tuobiao1_info":"",
  "yttl_yangbuhui":"杨不悔",
            "yttl_jiandie":"鹣鲽",
            "yttl_jiandie_info":"每回限一次，每当你失去牌时，你可以令一名其他角色弃置等量的牌（不足则全弃，无牌则不弃），然后其摸等量的牌。",
            "yttl_biyi":"比翼",
            "yttl_biyi_info":"你的回合结束时，你可以令本回合失去过牌的角色各摸1张牌。",
 "yttl_yangdingtian":"阳顶天",
            "yttl_yixing":"移形",
            "yttl_yixing_info":"每轮限一次，一名角色回合开始时，你可以弃置一张牌，然后移动场上一张牌。",
            "yttl_qiangmei":"强媒",
            "yttl_qiangmei_info":"出牌阶段限一次，你可以获得任意名女性角色各一张手牌，然后若其没有“媒”标记，其获得一枚此标记。当一名有“媒”的女性角色获得其他男性角色的牌时，其可以对你造成1点伤害。",
 "yttl_chenyouliang":"陈友谅",
            "yttl_cefan":"策反",
            "yttl_cefan_info":"其他角色出牌阶段开始时，你可以令其对其攻击范围内由你选择的一名角色使用一张不计入出杀次数的杀并摸一张牌，否则其本回合不能使用杀。",
            "yttl_tongyi":"恫疑",
            "yttl_tongyi_info":"每当其他玩家使用【杀】指定你为目标时，你可以展示牌堆顶一张牌并置入弃牌堆。若展示的牌不为基本牌，则该【杀】对你无效。",
    "yttl_zhouzhiruo":"周芷若",
            "yttl_yaren":"哑忍",
            "yttl_yaren_info":"<br><li>①当你打出【闪】响应【杀】<br><li>②你使用的【杀】被【闪】响应<br><li>③你使用的非延时锦囊牌被【无懈可击】抵消<br><li>④目标对你使用的非延时锦囊被【无懈可击】抵消<br><br><li><span style=\"color:#FF00FF\">ps:无懈抵消无懈暂时实现不了</span><br><br><span style=\"color:#FF0000\">满足以上条件时则你可以将牌堆顶的一张牌置于你的武将牌上，称为“忍”。你的手牌上限+X（X为你的“忍”的数量）</span>",
            "yttl_zhangquan":"掌权",
            "yttl_zhangquan_info":"觉醒技，当你“忍”的数量不小于3时，你须减少一点体力上限，摸两张牌，获得技能“伐异”",
            "yttl_fayi":"伐异",
            "yttl_fayi_info":"当一名其他角色回合开始时，你可以弃置一张“忍”，令当前回合角色本回合摸牌阶段摸牌数量－1且手牌上限-1",
            "yttl_fayi2":"伐异",
            "yttl_fayi2_info":"本回合你的摸牌阶段摸牌数量－1且手牌上限-1",
 "yttl_hanqianye":"韩千叶",
            "yttl_gudan":"孤胆",
            "yttl_gudan_info":"你使用【杀】可以多选择一名角色为目标，若如此做，若此牌没有造成伤害，你需弃置一张牌或者令此牌的目标摸一张牌。",
            "yttl_qiyuan":"奇缘",
            "yttl_qiyuan_info":"你获得一张梅花牌后，你可以展示之，然后你摸一张牌。",
            "yttl_yinshi":"隐世",
            "yttl_yinshi_info":"锁定技，你不能成为或被指定拼点的目标，每当一名角色于回合内亮出拼点牌后，其本回合不能使用牌指定你为目标。",
 "yttl_spzhouzhiruo":"SP周芷若",
            "yttl_juejue":"决绝",
            "yttl_juejue_info":"出牌阶段限一次，你可以和一名其他角色交换装备区一张同类型的装备牌。锁定技，其他角色/你获得你/其他角色的牌时，弃置该牌。",
            "yttl_duanren":"断刃",
            "yttl_duanren_info":"每当你失去一张装备牌，若此牌为红色你可以摸两张牌，若为黑色你可以对一名其他角色造成一点伤害。",
 "yttl_zhangwuji":"张无忌",
            "yttl_nijue":"逆绝",
            "yttl_nijue_info":"出牌阶段限一次，你可以弃置一张黑桃手牌并选择两名角色，交换其装备区或判定区里的所有的牌。",
            "yttl_jiuyang":"九阳",
            "yttl_jiuyang_info":"其他角色的装备区置入武器牌后，若其攻击范围因此增加，则你可以对其使用至多X张杀（X为其增加的攻击范围数）。",
            "yttl_chuqiao":"楚翘",
            "yttl_chuqiao_info":"主公技。其他吴势力角色使用的杀被抵消后，其可以将此杀交给你。",
 "yttl_zhangcuishan":"张翠山",
            "yttl_cstaiji":"太极",
            "yttl_cstaiji_info":"每当你失去最后的手牌后，你可以视为使用一张“无中生有”。",
            "yttl_yinjiu":"引咎",
            "yttl_yinjiu_info":"回合开始时，你可以将所有手牌交给一名你未以此法选择过的角色，然后其可以交给你任意张牌。锁定技，当你受到普通锦囊牌的伤害时，若你对来源发动过“引咎”，则防止此伤害。",
 "yttl_songqingshu":"宋青书",
            "yttl_jixian":"嫉贤",
            "yttl_jixian_info":"转换技。①一名其他角色获得至少两张牌后，你可以摸等量的牌。②一名其他角色失去至少两张牌后，你可以弃置等量的牌。",
            "yttl_nishi":"逆施",
            "yttl_nishi_info":"出牌阶段，你可以选择一名其他角色，然后选择一项：交给其两张手牌，获得其装备区里的一张牌；或将一张装备牌置于其装备区并获得其两张手牌（不足则全获得）。",
			"yttl_daiqisi":"黛绮丝",
            "yttl_miling":"密令",
            "yttl_miling_info":"限定技。出牌阶段，你可以交给一名其他角色一张梅花手牌，每当其使用或打出梅花牌时，你摸1张牌。若其未于回合内使用或打出过梅花牌，其回合结束时，你可以弃置其一张牌。该角色死亡后，你重置此技能。",
            "yttl_jinhua":"金花",
            "yttl_jinhua_info":"出牌阶段限一次，你可以弃置一张梅花牌，然后移动场上一张牌。",
 "yttl_miejue":"灭绝师太",
            "yttl_huiqiao":"回鞘",
            "yttl_huiqiao_info":"其他角色的武器牌进入弃牌堆时，你可以将此牌置入一名角色的装备区里（不能替换原武器牌）。",           
            "yttl_jie":"嫉恶",
            "yttl_jie_info":"当有角色进入濒死状态时，若有伤害来源，你可以弃置伤害来源所有区域各一张牌，若依此法弃置的牌包含两种颜色，则濒死角色回复1点体力。",
            "yttl_zhangjian":"仗剑",
            "yttl_zhangjian_info":"当你使用杀指定目标后，若你装备区里有武器牌，你可以摸1张牌。",
 "yttl_luhe":"玄冥二老",
            "yttl_xuanming":"玄冥",
            "yttl_xuanming_info":"锁定技。你使用杀时，若此杀有点数，则目标只能用点数为奇/偶数闪响应你点数为奇/偶数杀。",
            "yttl_hanyin":"酣淫",
            "yttl_hanyin_info":"出牌阶段开始时，你可以亮出牌堆顶2张牌，将其中一张黑色牌当酒使用或获得其中一张无中生有（其余牌置入弃牌堆），若你以此法使用了牌或获得了牌，你本回合不能使用与此牌颜色不同的牌。",
  "yttl_yinliting":"殷梨亭",
            "yttl_lttaiji":"太极",
            "yttl_lttaiji_info":"每当你失去最后的手牌时，你可以视为使用一张“无中生有”。",
            "yttl_chanru":"孱懦",
            "yttl_chanru_info":"每当你受到黑色杀造成的伤害时，你可以交给伤害来源一张手牌，然后此伤害-1。",
            "yttl_tongshou":"同寿",
            "yttl_tongshou_info":"觉醒技。准备阶段开始时，若你没有手牌，你须减1点体力上限，并获得“太极”",
"yttl_changyuchun":"常遇春",
            "yttl_xiaoyong":"骁勇",
            "yttl_xiaoyong_info":"出牌阶段限一次，你可以将一张锦囊牌当杀使用，且此杀不计入回合内次数。",
            "yttl_xianfeng":"先锋",
            "yttl_xianfeng_info":"锁定技。准备阶段，你执行一个额外的出牌阶段。", 
 "yttl_changbaoshu":"常胜宝树王",
			"yttl_lingjianwuqi":"令箭武器",
            "yttl_qizhao":"奇招",
            "yttl_qizhao_info":"你可以将一张与你装备区里的武器牌颜色相同牌当杀使用。",
            "yttl_lingjian":"令箭",
            "yttl_lingjian_info":"限定技。一名角色出牌阶段开始时，若其没有装备武器牌，你可以令其摸2张牌，你弃一张牌，然后你声明一张武器牌，令其装备之，其回合结束或死亡时，销毁该武器牌。",
  "yttl_jinhuapopo":"金花婆婆",
            "yttl_hanji":"寒疾",
            "yttl_hanji_info":"锁定技。你不能成为其他角色点数小于7的牌的目标；你不能使用点数大于10的牌指定其他角色为目标",
            "yttl_jiedao2":"借刀",
            "yttl_jiedao2_info":"你可将你的任意一张梅花手牌当”借刀杀人“使用。",
            "yttl_jiedao":"借刀",
            "yttl_jiedao_info":"出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你可以于此回合内将梅花牌当“借刀杀人”使用；若你未赢，你须弃置你装备区里的武器牌。",
  "yttl_yinli":"殷离",
            "yttl_chuxin":"初心",
            "yttl_chuxin_info":"锁定技。与你于本局游戏使用或打出第一张牌花色相同的手牌，不占用你的手牌上限。",
            "yttl_maodu":"蝥毒",
            "yttl_maodu_info":"每当你受到或造成1点属性伤害后，你加1点体力上限。出牌阶段限一次，你可以减2点体力上限，然后选择一项：令一名体力上限大于你的角色失去一点体力；或摸4张牌。",
 "yttl_due":"渡厄",
            "yttl_jingang":"金刚",
            "yttl_jingang_info":"每局限13次，当你需要使用“无懈可击”时，你可以翻面，然后视为你使用了此牌。",
            "yttl_fumo":"伏魔",
            "yttl_fumo_info":"每当你的武将牌翻至背面向上时，你可以横置所有角色的武将牌。",
            "yttl_guchan":"枯禅",
            "yttl_guchan_info":"每当你的武将牌翻面后，你可选择一名角色并声明一种未对该角色声明过的锦囊牌的牌名，其于本局游戏不能成为此牌的目标。",
 "yttl_zhuyuanzhang":"朱元璋",
            "yttl_qingce":"清侧",
            "yttl_qingce_info":"每当你使用普通锦囊牌时，你可以令你距离1以内的任意名角色也成为目标，或取消你距离1以内的任意名角色为目标。",
            "yttl_yinyuan":"夤缘",
            "yttl_yinyuan_info":"主公技。锁定技。你计算其他吴势力角色距离为1。",
            "yttl_yaohui1":"邀赂",
            "yttl_yaohui1_info":"",
            "yttl_yaohui":"邀赂",
            "yttl_yaohui_info":"其他角色出牌阶段，其可以将一张装备牌置于你的装备区里（不得替换原装备），然后其摸2张牌。",
      "yttl_yangxiao":"杨逍",
		"yttl_xingshi":"兴师",
            "yttl_xingshi_info":"当你使用基本牌或普通锦囊牌时，你可以弃置一张牌，若如此做，你可以为此牌额外指定一名目标。",
            "yttl_jieao":"桀骜",
            "yttl_jieao_info":"锁定技。结束阶段开始时，你摸X张牌（X为你本回合你使用的普通锦囊牌指定除你外的目标数），若你以此法摸牌数大于3，你翻面。",	
            "yttl_zhangsanfeng":"张三丰",
            "yttl_changbaisanqin":"长白三禽",
			 "yttl_taiji":"太极",
            "yttl_taiji_info":"每当你失去最后的手牌时，你可以视为使用一张“无中生有”。",
            "yttl_chunyan":"纯阳",
            "yttl_chunyan_info":"每回合限X次，你可以将两张手牌当杀使用或打出（X为你的体力值）",
            "yttl_taoli":"桃李",
            "yttl_taoli_info":"主公技。当其他吴国角色失去最后一张手牌时，你可以交给其一张手牌。",
            "yttl_fendao":"焚刀",
            "yttl_fendao_info":" 出牌阶段限一次，你可以重铸一名其他角色的装备牌，然后展示所重铸的牌，若为红色，其回复1点体力；若为黑色，你获得此次重铸的装备牌。",
            "yttl_kuiyu":"窥觎",
            "yttl_kuiyu_info":"每当你使用一张装备牌时，你可以摸1张牌。",
            
         },
};
if(lib.device||lib.node){
				for(var i in yttl.character){yttl.character[i][4].push('ext:金庸群侠传/'+i+'.jpg');}
			}else{
				for(var i in yttl.character){yttl.character[i][4].push('db:extension-金庸群侠传:'+i+'.jpg');}
			}
			return yttl;
		});
		lib.config.all.characters.push('yttl');
		if(!lib.config.characters.contains('yttl')) lib.config.characters.remove('yttl');
		lib.translate['yttl_character_config']='倚天屠龙记';

		
	
};
},help:{},config:{
					"jyqxzhelp":{
				"name":"金庸群侠传","init":"1","item":{"1":"查看介绍","2":"<li>技能设计：大熊小猫","3":"<li>编写代码：<br>★Sukincen ★冰波水微 <br>★落影丶逝尘（太上大牛）  <br>★冷雨 ★晒晒（朱阳光）","4":"<li>友情配音：<br>觅阳，林三，珂里，仙女桥，清酒摇舟，稳得高处，神齐大叔，草莓味少女，冷沟 阿九哎 青灯折扇不语，蚩宇，伯懿，（此处不一一列举，每名武将资料有介绍）","5":"<li>关闭武将界面扩展小包总开关会隐藏图片且禁用武将，打开重启即可。游戏时最好打开兼容模式"}
					},	
					"jyzhengwangpeiyin":{
            name:'阵亡配音',
           "intro":"阵亡配音：开启后，有阵亡配音的角色在阵亡时会说阵亡台词",
            init:true
		},				
					"xmeihuakapai":{
            name:'美化卡牌',
           "intro":"美化卡牌：开启后重启游戏生效。将卡牌的点数1、11、12、13分别调整为A、J、Q、K，颜色微调",
            init:false
		},			
				"_JYBackground":{
            name:'背景图片',
            "intro":"背景图片：开启后重启游戏生效。开场所有角色摸牌后会切换精美背景图片",
            init:false
		},				
			"_JYBackgroundMusic":{
            name:'背景音乐',
               "intro":"背景音乐：开启后重启游戏生效。游戏开始后会切换优质动听的背景音乐",
            init:false
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
    author:"",
    diskURL:"",
    forumURL:"",
    version:"1.36",
},files:{"character":[],"card":[],"skill":[]}}})
