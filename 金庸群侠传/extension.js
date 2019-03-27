game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"金庸群侠传",content:function (config,pack){
			
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
 
  "tlbb_duanyanqing":["male","qun",4,["tlbb_qiangcan","tlbb_liuwang","tlbb_rangquan"],[]],
  "tlbb_azhu":["female","qun",3,["tlbb_yirong1","tlbb_xiaoti"],[]],
   "tlbb_xuzhu":["male","wu",4,["tlbb_pojie","tlbb_su"],[]],
              
        },
characterIntro:{
	    "tlbb_duanyanqing":"《天龙八部》里的重要角色，段誉的亲生父亲",
				},

characterTitle:{
					 "tlbb_azhu":"落影丶逝尘",
					 "tlbb_xuzhu":"落影丶逝尘",					 
					 "tlbb_duanyanqing":"Sukincen",
									},

skill:{	
"tlbb_beiming":{
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
                audio:"ext:tlbb_xuzhu:2",
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
        player.showCards(player.storage.tlbb_pojie,'tlbb_pojie')
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
            "tlbb_su":{
                skillAnimation:true,
                audio:"ext:tlbb_xuzhu:3",
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
        player.loseMaxHp();
        "step 1"
        if(player.hp<player.maxHp){
			player.recover();
		}
		game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/金庸群侠传/tlbb_xinxuzhu.jpg');
		player.update();
        player.addSkill('tlbb_beiming');
        player.awakenSkill('tlbb_su');
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
                audio:["xinyongsi",2],
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
                        audio:"ext:金庸群侠传:2",
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event){
                if(!event.source.hasSkill('tlbb_yirong1_rong')) return false;
                return event.card&&event.card.name=='sha'&&event.notLink();
            },
                        forced:true,
                        content:function (){
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
        player.logSkill('zhuanshexing',trigger.player);
        trigger.player.recover();
    }
    },
            },
},

translate:{
	"tlbb_xuzhu":"虚竹",
	 "tlbb_beiming":"北冥",
            "tlbb_beiming_info":"每回合限一次，其他角色普通锦囊牌后，你可以弃置一张颜色与该牌颜色相同的“戒”然后你使用该牌。",
            "tlbb_pojie_respond":"破戒_打出",
            "tlbb_pojie_respond_info":"",
            "tlbb_pojie_use":"破戒_使用",
            "tlbb_pojie_use_info":"",
            "tlbb_pojie":"破戒",
            "tlbb_pojie_info":"你使用【酒】后，造成伤害后，或使用普通锦囊牌指定女性角色为唯一目标后，你可以将将牌堆顶的一张牌置于武将牌上，称为“戒”，你可以使用或打出戒",
            "tlbb_su":"还俗",
            "tlbb_su_info":"觉醒技，当你获得第三张“戒”后你需减一体力上限并回复一体力，且你不能再使用或打出“戒”，然后获得【北冥】。",
	 	"tlbb_duanyanqing":"段延庆",
			"tlbb_azhu":"阿朱",
	"tlbb_qiangcan":"戕残",
            "tlbb_qiangcan_info":" <font color=#f00>锁定技</font> 游戏开始、你进入游戏或【储嗣】阵亡后，你成为唯一的【储嗣】（【储嗣】角色摸牌阶段摸牌时，额外摸两张牌且手牌上限+2）",
            "tlbb_chusi":"储嗣",
            "tlbb_chusi_info":"当你受到伤害时，伤害来源可取代你的【储嗣】成为新的【储嗣】",
            "tlbb_chusi2":"遗胄",
            "tlbb_chusi2_info":"<font color=#f00>锁定技</font> 你为【储嗣】角色，摸牌阶段摸牌时，额外摸两张牌且手牌上限+2",
            "tlbb_liuwang":"流亡",
            "tlbb_liuwang_info":"<font color=#f00>锁定技</font> 结束阶段，若你不是【储嗣】角色，你须减1点体力或弃置两张牌",
            "tlbb_rangquan":"攘权",
            "tlbb_rangquan_info":"觉醒技，当你进入濒死状态时，你须减一点体力上限，回复两点体力，并摸两张牌，失去技能【戕残】、【流亡】，然后你永久成为唯一的【储嗣】",
            "tlbb_qiangcan2":"戕残",
            "tlbb_qiangcan2_info":"undefined",
	 "tlbb_yirong1":"易容",
            "tlbb_yirong1_info":"所有人展示武将牌后，你展示8张未加入游戏的武将牌，称为'易容'牌，一名角色回合开始时你可以选择一张'易容'牌，令其获得易容牌上的技能直到回合结束(其本身的技能会在此回合失效)。拥有'易容'牌的角色回合内对你出杀造成的伤害+1",
            "tlbb_yirong":"易容",
            "tlbb_yirong_info":"",
            "tlbb_yirong2":"易容",
            "tlbb_yirong2_info":"",
            "tlbb_xiaoti":"孝悌",
            "tlbb_xiaoti_info":"每名角色的回合限一次，一名角色受到伤害后，你可以弃置一张手牌，若如此做，其回复一体力。",
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
	         "sdxl_yangguo":["male","wei",3,["sdxl_anhun","sdxl_biefu","sdxl_shangli"],[]],          
            "sdxl_xiaolongniv":["female","wei",3,["sdxl_luowang","sdxl_hebi","sdxl_muzong"],[]],
"sdxl_jinlunfawang":["male","shu",4,["sdxl_mizong","sdxl_longxiang"],[]],
  
                },
							
			characterIntro:{	
			"sdxl_yangguo":"杨过，《神雕侠侣》男主角",
					"sdxl_xiaolongniv":"小龙女，《神雕侠侣》女主角",
				},	
				characterTitle:{
					 "sdxl_yangguo":"Sukincen",            
            "sdxl_xiaolongniv":"Sukincen",	
				 "sdxl_jinlunfawang":"落影丶逝尘",
				 
				},
			perfectPair:{
			"sdxl_yangguo":['sdxl_xiaolongniv'],
			
					},
				
skill:{
             
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
                                next.ai=function(button){
                                    if(sgs.isWeak(player)){
                                        return button.link.name=='sha';
                                    }
                                    return 8-ai.get.value(button.link);
                                }
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
                                    return player.canUse({name:'sha'},target,false)&&target!=player;
                                }).set('ai',function(target){
                            return  -get.attitude(player,target);     
                                });
                            }
                            else{
                                event.finish();
                            }
                            'step 3'
                            if(result.bool){
								var chat=['黯然销魂掌','人不犯我，我不犯人。人若犯我，十倍奉还'].randomGet();
            player.say(chat);
                                player.useCard({name:'sha'},result.targets,[event.cards1],false);                              
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
     player.chooseTarget('选择【合壁】的目标',lib.translate.sdxl_hebi_info,true,function(card,player,target){
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
            player.logSkill("sdxl_luowang",result.targets);
            player.useCard({name:'tiesuo'},result.targets,false);          
        }
        else{
            event.finish();
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
                player.draw();
    },
            },
},
         
translate:{
	        "sdxl_jinlunfawang":"金轮法王",
	  "sdxl_mizong":"密宗",
            "sdxl_mizong_info":"你可以将至多X张点数之和为13的牌当【决斗】对至多X名角色使用(X为你以此发选择的牌数)",
            "sdxl_longxiang1":"龙象",
            "sdxl_longxiang1_info":"",
            "sdxl_longxiang2":"龙象",
            "sdxl_longxiang2_info":"",
            "sdxl_longxiang":"龙象",
            "sdxl_longxiang_info":"锁定技，你使用的【杀】或【决斗】需要两张【闪】或【杀】响应",
	"sdxl_yangguo":"杨过",
           "sdxl_luowang":"罗网",
            "sdxl_luowang2":"罗网",
            "sdxl_anhun":"黯魂",
            "sdxl_anhun_info":"当你受到伤害时，你可以亮出牌堆顶的五张牌，你可以无视距离地依次对其他角色使用其中的【杀】",
            "sdxl_biefu":"别赋",
            "sdxl_biefu_info":"回合结束阶段，你可以翻面，然后令一名其他角色与你各回复一点体力（<font color=#F0F>一见杨过误终生</font> 若为女性角色，则额外地再摸一张牌）且直到其下回合结束，该角色使用仅指定一名目标的黑色的普通锦囊牌或黑色基本牌时可额外指定多一名目标角色。",
            "sdxl_shangli":"伤离",
            "sdxl_shangli_info":"<font color=#F0F>神雕大侠</font> 主公技，当你的武将牌翻面时，你与其他魏势力角色可依次摸一张牌",
            "sdxl_biefu2":"别赋",
            "sdxl_biefu2_info":"",
             "sdxl_xiaolongniv":"小龙女",
            "sdxl_luowang_info":"当你受到伤害后，你可以选择至多两名角色，视为对其使用【铁索连环】。每当一名角色横置武将牌后，你便摸一张牌",
            "sdxl_luowang2_info":"每当一名角色横置武将牌后，你便摸一张牌",
            "sdxl_hebi":"合壁",
            "sdxl_hebi_info":"每名角色的回合限一次，当一名角色将武将牌翻至背面朝上时，你可令另一名未翻面的其他角色将武将牌翻面",
            "sdxl_muzong":"墓宗",
            "sdxl_muzong_info":"主公技，其他魏势力角色的回合结束时，其可以选择横置或重置其武将牌",   
                                                                                                                                
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
		 		 "xajh_dongfangbubai":["male","wei",3,["xajh_weizhong","xajh_daoxi"],[]],
 "xajh_ludayou":["male","wei",3,["xajh_digong","xajh_nianjue"],[]],
},        

characterIntro:{
					
				},   
				
				characterTitle:{
					"xajh_dongfangbubai":"落影丶逝尘",	
					"xajh_ludayou":"朱阳光",
				},
				
				perfectPair:{
			//"jyqxz_xajh_genie":['jyqxz_xajh_weizhuang'],
					},
                               
skill:{
  
"xajh_digong":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
        return event.player!=player&&event.player.maxHp>player.maxHp;
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
                checkx:function(event,player){
        var att=get.attitude(player,event.player);
        return att>0;
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
            player.logSkill('zhuanshexing',trigger.player);
            player.line(trigger.player,'green');
            trigger.player.gain(result.cards[0],player);
            player.$give(result.cards.length,trigger.player);
            player.chooseUseTarget(trigger.card);
            game.delay(0.7);
        }
        else{
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
	 "xajh_ludayou":"陆大有",
	  "xajh_digong":"弟恭",
            "xajh_digong_info":"其他角色的出牌阶段，若其内力上限大于你，你可以令其该阶段内使用【出招】的额定次数+1",
            "xajh_nianjue":"念诀",
            "xajh_nianjue_info":"一名已受伤角色准备阶段开始，你可以令其进行一次判定，判定结果为：♥该角色回复1点体力；♣该角色获得判定牌",
           "xajh_dongfangbubai":"东方不败",
	  "xajh_weizhong":"伪忠",
            "xajh_weizhong_info":"其他角色获得你的牌后，若其手牌数大于其体力值，则你可以令其失去一体力",
            "xajh_daoxi":"蹈隙",
            "xajh_daoxi_info":"每回合限一次，其他角色使用基本牌或普通锦囊牌时，若其手牌数比你多，你可交给其一张手牌，然后视为你使用该牌。",
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
			var sdyx={
				name:'sdyx',
				connect:true,
				character:{
					"sdyx_huangyaoshi":["male","wei",3,["sdyx_cihuai","sdyx_qushang"],[]],
            "sdyx_guojing":["male","shu",4,["sdyx_jianchi","sdyx_yuzhong"],[]],            
            "sdyx_xguojing":["male","shu",4,["sdyx_danxin","sdyx_polu","sdyx_longyin"],[]],
"sdyx_zhebie":["male","qun",4,["sdyx_sheqi","sdyx_guifu"],[]],
"sdyx_ouyangfeng":["male","wu",4,["sdyx_shezhang","sdyx_duxi","sdyx_nijing"],[]],
		
},

characterIntro:{
     	
						},
				characterTitle:{
					
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
	"sdyx_shezhang":{
                inherit:"zhuque_skill",
                filter:function (event,player){
        if(player.getEquip(1)) return false;
        if(!lib.skill.zhuque_skill.filter(event,player)) return false;
        if(event.card.name=='sha'&&!event.card.nature) return true;
    },
                mod:{
                    attackFrom:function (from,to,distance){
            if(!from.getEquip(1)) return distance-3;
            return distance;
        },
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player==target&&get.subtype(card)=='equip1'){
                    if(get.equipValue(card)<=2) return 0;
                }
                if(target.getEquip(1)) return;
                return lib.skill.zhuque_skill.ai.effect.target.apply(this,arguments);
            },
                    },
                },
                trigger:{
                    player:"useCardToBefore",
                },
                priority:7,
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
        player.addSkill('zhuque_skill2');
        player.storage.zhuque_skill=trigger.card;
    },
            },
            "sdyx_duxi":{
                trigger:{
                    source:"damageBegin",
                },
				audio:"ext:金庸群侠传:2",
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
                player.loseHp(1);
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
                audio:"ext:金庸群侠传:2",
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
            if(from.group!='shu') return;
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
                trigger:{
                    player:"phaseDiscardBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countUsed('sha')==0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('骑射'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('骑射',result.targets);
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
	 "sdyx_ouyangfeng":"欧阳锋",
            "sdyx_shezhang":"蛇杖",
            "sdyx_shezhang_info":"若你没有装备区里没有武器牌你视为装备了朱雀羽扇",
            "sdyx_duxi":"毒袭",
            "sdyx_duxi_info":"当你造成火焰伤害时，你可以弃一张黑桃牌，令此伤害加一。",
            "sdyx_nijing":"逆筋",
            "sdyx_nijing_info":"你可将你的任意一张雷杀当【酒】使用。",
   "sdyx_xguojing":"郭靖",
            "sdyx_zhebie":"哲别",
            "sdyx_huangyaoshi":"黄药师",
            "sdyx_guojing":"郭靖",
			"sdyx_sheqi":"射骑",
            "sdyx_sheqi_info":"你使用的杀无距离限制，并且无视目标防具;出牌阶段结束时，若你此阶段未使用过杀，你可以令一名其他角色使用其手牌中的一张杀(无距离限制并且无视防具)",
            "sdyx_guifu":"归附",
            "sdyx_guifu_info":"回合结束时，你可以将一张因使用而置入弃牌堆的牌，交给一名其他角色。",
			 "sdyx_danxin":"丹心",
            "sdyx_danxin_info":"其他角色使用【出招】指定目标后，你可以与其拼点，若你赢，此【出招】无效且你获得之;若你未赢且你不是目标，此【出招】的目标改为你。",
            "sdyx_polu":"破虏",
            "sdyx_polu_info":"锁定技，你的攻击范围+X，你使用【出招】的次数上限+X。(X为你已损失的内力值)",
            "sdyx_longyin":"龙吟",
            "sdyx_longyin_info":"盟主技，锁定技，你攻击范围的角色视为在其他宋朝角色的攻击范围内",
            "sdyx_longyin2":"",
			 "sdyx_cihuai":"慈怀",
            "sdyx_cihuai_info":"回合开始时,若你有手牌并且只有一种花色，你可以展示你的手牌，然后亮出牌堆顶的牌，直到出现与你花色相同的牌为止，你获得这些牌。",
            "sdyx_qushang":"曲殇",
            "sdyx_qushang_info":"每当你受到伤害后，你可以弃置任意花色不同的牌并选择一名其他角色，令其弃置与此法弃置花色和数量相同的牌并回复一体力，否则其翻面并获得你弃置的牌。",
            "sdyx_jianchi":"箭驰",
            "sdyx_jianchi_info":"出牌阶段，你使用的杀无距离限制并且可以额外指定X个目标(X为你已损失的体力值)",
            "sdyx_yuzhong":"愚忠",
            "sdyx_yuzhong_info":"当你需要使用打出杀时，你可以流失一体力，视为你使用或打出了此牌，你的回合内只能依此发使用一次杀，且不计入回合内的使用次数",
			 "sdyx_xianglong":"降龙",
            "sdyx_xianglong_info":"当你使用【杀】指定目标后，你可以对目标角色造成1点伤害。若如此做，若此【杀】造成伤害，你须失去一点体力",
                               
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
					 "yttl_zhangsanfeng":["male","wu",3,["yttl_taiji","yttl_chunyan","yttl_taoli"],[]],                       
            "yttl_changbaisanqin":["male","wu",3,["yttl_fendao","yttl_kuiyu"],[]],			
			"yttl_yangxiao":["male","wu",3,["yttl_xingshi","yttl_jieao"],[]],
       
},
characterIntro:{
				"yttl_zhangsanfeng":"《倚天屠龙记》中的角色。",		
					
				},
characterTitle:{
					"yttl_yangxiao":"落影丶逝尘",
			
			"yttl_changbaisanqin":"Sukincen",
           
            "yttl_zhangsanfeng":"Sukincen",
								},
								
skill:{

 
               "yttl_xingshi":{
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
                "step 0"
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
                event.num1=player.storage.yttl_jieao.length;
                player.draw(event.num1);
                "step 1"
                if(event.num1>3) player.turnOver();
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
                filter:function (event,player){        
      return player.countCards('h')<=0;
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
                         if(player.getStat().skill.yttl_chunyan>player.hp) return false;        
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
                        game.playJY(['yttl_chunyan1','yttl_chunyan2'].randomGet());
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
                     if(event.player.group!='shu') return false;               
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
            return 10-ai.get.value(card);            
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
        return target!=player&&target.countCards('e');
    },
                content:function (){
        'step 0'      
            player.chooseCardButton('焚刀',target.getCards('e')).ai=function(button){
                return get.value(button.link)-5;
            }     
        'step 1'
        if(result.bool){
          var chat=['屠龙刀是我们的了，哈哈……','武林至尊，宝刀屠龙。号令天下，莫敢不从'].randomGet();
            player.say(chat);  
            event.card1=result.links[[0]];
            event.cards=get.cards(1);
            player.showCards(event.cards);         
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
            target.gain(result.cards,player);
            player.$giveAuto(result.cards,target);
            target.$giveAuto(event.card,player);
            game.log(player,'获得',target,'一张装备牌');            
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
      "yttl_yangxiao":"杨逍",
		"yttl_xingshi":"兴师",
            "yttl_xingshi_info":"当你使用基本牌或普通锦囊牌时，你可以弃置一张牌，若如此做，你可以为此牌额外指定一个目标。",
            "yttl_jieao":"桀骜",
            "yttl_jieao_info":"锁定技;结束阶段开始时，你摸X张牌(X为你本回合你使用的普通锦囊牌指定除你外的目标数)，若你以此法摸牌数大于3，你翻面。",	
            "yttl_zhangsanfeng":"张三丰",
            "yttl_changbaisanqin":"长白三禽",
			 "yttl_taiji":"太极",
            "yttl_taiji_info":"每当你失去最后一张手牌时，你可以使用一张【无中生有】",
            "yttl_chunyan":"纯阳",
            "yttl_chunyan_info":"每回合限X次，你可以将两张手牌当【杀】使用或打出（X为你的体力值）",
            "yttl_taoli":"桃李",
            "yttl_taoli_info":"主公技，当其他属国角色失去最后一张手牌时，你可以交给其一张手牌",
            "yttl_fendao":"焚刀",
            "yttl_fendao_info":" 出牌阶段限一次，你可以重铸一名其他角色的装备牌，然后展示所重铸的牌，若为红色，该角色回复一点体力，若为黑色，你获得此次重铸的装备牌",
            "yttl_kuiyu":"窥觎",
            "yttl_kuiyu_info":"每当你使用一张装备牌时，你可以摸一张牌",
            
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
						
					"xmeihuakapai":{
            name:'美化卡牌',
           "intro":"美化卡牌：开启后重启游戏生效。将卡牌的点数1、11、12、13分别调整为A、J、Q、K，颜色微调",
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
    intro:"<li>技能设计：大熊小猫 <li>编写代码：<br>★Sukincen <br>★落影丶逝尘（太上大牛） <br>★冷雨 <br>★晒晒（朱阳光）<li>友情配音：<br>★觅阳 <br>★清酒摇舟 <br>★稳得高处 <br>★草莓味少女 <br>★青灯折扇不语 ",
    author:"大熊小猫",
    diskURL:"",
    forumURL:"",
    version:"1.11",
},files:{"character":[],"card":[],"skill":[]}}})
