game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"金庸群侠传",content:function (config,pack){	
	lib.skill._jygaiming={
				    trigger:{global:'gameStart',global:'enterGame'},
							direct:true,
							priority:Infinity,
							forced:true,
         unique:true,
         frequent:true,
       /*  filter:function (event,player){
                  return game.players.length>0;
          },*/
					   content:function(){
						   for(var i=0;i<game.players.length;i++){
							   if(game.players[i].name=='tlbb_spduanyu'){
					   game.players[i].node.name.innerHTML='SP<br>段<br>誉';
						   }
						   if(game.players[i].name=='sdyx_xguojing'){
					   game.players[i].node.name.innerHTML='SP<br>郭<br>靖';
						   }
					   }
 					  	},
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
					"tlbb_spduanyu":["male","wei",4,["tlbb_nayuan","tlbb_zhuha"],[]],
 "tlbb_duanyu":["male","wei",4,["tlbb_xiumai","tlbb_qingguan","tlbb_lingbo"],[]],
  "tlbb_duanyanqing":["male","wei",4,["tlbb_qiangcan","tlbb_liuwang","tlbb_rangquan"],[]],
  "tlbb_azhu":["female","wei",3,["tlbb_yirong1","tlbb_xiaoti"],[]],
   "tlbb_xuzhu":["male","wei",4,["tlbb_pojie","tlbb_huansu"],[]],
   "tlbb_wangyuyan":["female","qun",3,["tlbb_dianhua","tlbb_wendian"],[]],
   "tlbb_kangmin":["female","wei",3,["tlbb_shifu","tlbb_buyao","tlbb_siqian"],[]],
    "tlbb_suxinghe":["male","wei",3,["tlbb_xpojie","tlbb_yaotie","tlbb_yayin"],[]],
              
        },
characterIntro:{
	    "tlbb_duanyanqing":"《天龙八部》里的重要角色，段誉的亲生父亲",
		"tlbb_xuzhutlbb_xuzhu":"《天龙八部》的男主角之一",
				},

characterTitle:{
					 "tlbb_azhu":"落影丶逝尘",
					  "tlbb_suxinghe":"落影丶逝尘",
					 "tlbb_wangyuyan":"落影丶逝尘",
					  "tlbb_spduanyu":"落影丶逝尘",
					 "tlbb_xuzhu":"落影丶逝尘",					 
					 "tlbb_duanyanqing":"Sukincen",
					 "tlbb_duanyu":"冰波水微",
					 "tlbb_kangmin":"朱阳光",
									},

skill:{	
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
        return true; 
    }, 
    selectTarget:[3,Infinity], 
    content:function (){ 
        target.draw(); 
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
        return true; 
    }, 
    selectTarget:[3,Infinity], 
    content:function (){ 
        target.draw(); 
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
                group:["tlbb_yaotiehp","tlbb_yaotiehc"],
            },
            "tlbb_yayin":{
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event){
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
        player.chooseTarget(get.prompt('tlbb_buyao'),function(card,player,target){
        return player!=target;
                    }).set('ai',function(player,target){
            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)>=0) return 0;
            if(get.attitude(_status.event.player,target)<0) return 1;     
       });   
              
        "step 1"
      game.log(result.targets[0],'成为了','【布谣】','的目标');         
      if(result.bool){
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
        if(player.storage.lingbo<=0) return false;
        return player.storage.lingbo;
     },
                content:function (){
      player.storage.lingbo=0;
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
	 "tlbb_suxinghe":"苏星河",
            "tlbb_xpojie":"破劫",
            "tlbb_xpojie_info":"当一张判定牌生效前，若你有手牌，你可以令你与至多两角色各展示一张手牌，然后你选择一张作为判定牌，否则弃置这些牌。",
            "tlbb_yaotiehc":"邀帖♦手牌",
            "tlbb_yaotiehc_info":"",
            "tlbb_yaotiehp":"邀帖♦体力",
            "tlbb_yaotiehp_info":"",
            "tlbb_yaotie":"邀帖",
            "tlbb_yaotie_info":"出牌阶段限一次，你可以令至少三名手牌数或体力值成等差数列的角色摸一张牌(需先从体力值或手牌数最小的选起)。",
            "tlbb_yayin":"哑隐",
            "tlbb_yayin_info":"锁定技;防止你受到的无牌源或无来源的伤害。",
	"tlbb_kangmin":"康敏",
            "tlbb_shifu":"弑夫",
            "tlbb_shifu_info":"游戏开始时你令一名男性角色获得软骨散标记；锁定技，摸牌阶段，你多摸X张牌(X为拥有软骨散的角色已损失的内力值)",
            "tlbb_shifumark":"软骨散",
            "tlbb_buyao":"布谣",
            "tlbb_buyao_info":"结束阶段开始时，你可以声明一种花色，令一名角色展示并获得牌堆顶的一张牌，若选择的花色与展示的不同，该角色受到来自你的一点伤害",
            "tlbb_siqian":"思迁",
            "tlbb_siqian_info":"当你受到伤害后，你可以将软骨散标记移至另一名男性角色侠客牌旁",
	"tlbb_wangyuyan":"王语嫣",
            "tlbb_dianhua":"点化",
            "tlbb_dianhua_info":"每回合限一次，其他角色使用普通锦囊牌指定唯一目标时，你可以申明另一种合理的锦囊牌牌名，其按声明的牌对目标使用之。",
            "tlbb_wendian":"问典",
            "tlbb_wendian_info":"其他角色出牌阶段限一次，其可以交给你一张牌，若如此做，你可以亮出牌堆顶两张牌，然后其获得其中的锦囊牌。",
            "tlbb_wendian1":"问典",
            "tlbb_wendian1_info":"",
	"tlbb_spduanyu":"SP段誉",
	 "tlbb_nayuan":"纳元",
            "tlbb_nayuan_info":"出牌开始前，你使用牌或成为其他角色使用牌的目标，你可以选择一名其他角色，然后获得其一项你没有的非觉醒非限定非主公技能，直到此牌结算完毕。",
            "tlbb_zhuha":"朱蛤",
            "tlbb_zhuha_info":"锁定技，防止你受到的所有属性伤害",
	"tlbb_duanyu":"段誉",
            "tlbb_lingbo":"凌波",
            "tlbb_lingbo_info":"锁定技，其他角色在其回合内使用牌后，所有其他角色计算与你的距离+1，效果持续到此回合结束",
            "tlbb_qingguan":"情关",
            "tlbb_qingguan_info":"出牌阶段开始时，你可以选择：<li>回复体力，若如此做，你在回合内结束失去体力；<li>失去体力，若如此做，你在回合结束回复一点体力",
            "tlbb_xiumai":"修脉",
            "tlbb_xiumai_info":"锁定技，在你的回合内：<li>若你的体力值为偶数，则其他角色不能使用或打出黑色牌；<li>若你的体力值为奇数，则其他角色不能使用或打出方块牌",
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
            "tlbb_beiming_info":"每回合限一次，其他角色普通锦囊牌后，你可以弃置一张颜色与该牌颜色相同的“戒”然后你使用该牌。",
            "tlbb_pojie_respond":"破戒_打出",
            "tlbb_pojie_respond_info":"",
            "tlbb_pojie_use":"破戒_使用",
            "tlbb_pojie_use_info":"",
            "tlbb_pojie":"破戒",
            "tlbb_pojie_info":"你使用【酒】后，造成伤害后，或使用普通锦囊牌指定女性角色为唯一目标后，你可以将将牌堆顶的一张牌置于武将牌上，称为“戒”，你可以使用或打出戒",
            "tlbb_huansu":"还俗",
            "tlbb_huansu_info":"觉醒技，当你获得第三张“戒”后你需减一体力上限并回复一体力，且你不能再使用或打出“戒”，然后获得【北冥】。",
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
	         "sdxl_yangguo":["male","wei",3,["sdxl_anhun","sdxl_biefu","sdxl_shangli"],['zhu']],          
            "sdxl_xiaolongniv":["female","wei",3,["sdxl_luowang","sdxl_hebi","sdxl_muzong"],['zhu']],
"sdxl_jinlunfawang":["male","wei",4,["sdxl_mizong","sdxl_longxiang"],[]],
  
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
					//game.playJY(['sdxl_luowang1','sdxl_luowang2'].randomGet());
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
		 		 "xajh_dongfangbubai":["[male,female].randomGet()","wei",3,["xajh_weizhong","xajh_daoxi"],[]],
 "xajh_ludayou":["male","qun",3,["xajh_digong","xajh_nianjue"],[]],
 "xajh_renwoxing":["male","qun",5,["xajh_biguan","xajh_xixing","xajh_chushan","xajh_quanbing"],['zhu']],
 "xajh_yanglianting":["male","wei",3,["xajh_yuhe","xajh_shichong"],[]],
  "xajh_yuelingsan":["female","wei",3,["xajh_jianwu","xajh_huizhi","xajh_fanghun"],[]],
  "xajh_yuebuqun":["male","shu",3,["xajh_xiejian","xajh_qiaowei","xajh_yuli"],[]],
},        

characterIntro:{
					
				},   
				
				characterTitle:{
					"xajh_yuelingsan":"落影丶逝尘",	
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
            if(event.card.name!='juedou') return false;
            if(event.player.group=='shu'&&event.player!=player) return true;
            if(event.source.group=='shu'&&event.source!=player) return true;
            return false;
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
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('xajh_xiejian',result.targets);
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
                    order:1,
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
        player.storage.renwoxing_biguan=0;
       },
                filter:function(event,player){
        return player.hp<player.maxHp&&player.num('he')>0;
        },
                content:function(){
        player.chooseToDiscard('he','闭关：弃置一张手牌或装备牌，防御距离+1').ai=function(card){
        return 6-get.value(card);
        };
        player.storage.renwoxing_biguan+=1;     
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
            return player.storage.renwoxing_biguan>0;

        },
                content:function(){
					game.playJY(['xajh_biguan1','xajh_biguan2'].randomGet());
            player.storage.renwoxing_biguan=0;
            player.unmarkSkill('xajh_biguan');
        },
                mod:{
                    globalTo:function(from,to,distance){
                   if(typeof to.storage.renwoxing_biguan=='number'){
                                        return distance+to.storage.renwoxing_biguan;
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
               return event.source.countCards('h')>0&&event.source&&event.source.isAlive()&&event.source!=player&&event.source.group=='qun';
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
	  "xajh_yuebuqun":"岳不群",
            "xajh_qiaowei":"巧伪",
            "xajh_qiaowei_info":"一名角色受到杀的伤害后，若其区域有牌;你可以弃置其区域的一张牌，若如此做，其视为对伤害来源使用了一张决斗。",
            "xajh_yuli":"渔利",
            "xajh_yuli_info":"主公技;每当其他蜀势力角色因决斗打出杀或因决斗造成或受到伤害后，你可以摸一张牌。",
            "xajh_xiejian":"邪剑",
            "xajh_xiejian_info":"出牌阶段开始时，你可以令一名其他角色摸一张牌，若如此做，其本回合不能使用或打出牌。",
	  "xajh_yuelingsan":"岳灵珊",
            "xajh_chongling":"冲灵",
            "xajh_chongling_info":"",
            "xajh_chonglingzhuanbei":"冲灵装备",
            "xajh_chonglingzhuanbei_info":"",
            "xajh_jianwu":"剑舞",
            "xajh_jianwu_info":"限定技，准备阶段开始时，你可以与场上一名男性角色形成【冲灵】状态，你与该男性角色视为拥有对方的武器效果（不含距离）。",
            "xajh_huizhi":"惠质",
            "xajh_huizhi_info":"每当一名角色使用酒后，你可以令其摸两张牌",
            "xajh_fanghun":"芳魂",
            "xajh_fanghun_info":"每当你受到伤害后，若其回合内没有使用酒，你可以弃置其一张牌，然后其视为使用了一张酒",
	 "xajh_yanglianting":"杨莲亭",
            "xajh_shichong":"恃宠",
            "xajh_shichong_info":"当你受到伤害后，你可以令攻击范围含有伤害来源的角色选择一项:对伤害来源使用出招，交给你一张牌",
            "xajh_yuhe":"欲壑",
            "xajh_yuhe_info":"当你获得其他角色的牌时，你可以摸一张牌。",
	 "xajh_renwoxing":"任我行",
            "xajh_biguan":"闭关",
            "xajh_biguan_info":"结束阶段，若你已受伤，你可弃置一张牌，直到下个回合开始，其他角色计算与你的距离+1。",
            "xajh_xixing":"吸星",
            "xajh_xixing_info":"锁定技，你每杀死一名角色，你加一点内力上限并回复一点内力。",
            "xajh_chushan":"出山",
            "xajh_chushan_info":"限定技，你减一点内力上限，失去『闭关』,然后获得一名已死亡角色除盟主技、限定技、觉醒技外的技能。",
            "xajh_quanbing":"权柄",
            "xajh_quanbing_info":"盟主技，其他明朝角色杀死一名角色时，其可以弃置所有手牌，然后视为由你杀死该角色。",
	 "xajh_ludayou":"陆大有",
	  "xajh_digong":"弟恭",
            "xajh_digong_info":"其他角色的出牌阶段，若其内力上限大于你，你可以令其该阶段内使用【杀】的额定次数+1",
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
			var qtpz={
				name:'qtpz',
				connect:true,
				character:{
		 		"qtpz_aqing":["female","shu",3,["qtpz_libing","qtpz_shujia"],[]],
				"qtpz_haidafu":["male","shu",3,["qtpz_shidu","qtpz_fenji","qtpz_huashi"],[]],
				 "qtpz_xuedaolaozhu":["male","wei",4,["qtpz_handao","qtpz_hanzhan","qtpz_shuixiang"],[]],
				 "qtpz_wuzixu":["male","qun",3,["qtpz_zhucheng","qtpz_xuezhuang"],[]],
				 "qtpz_aobai":["male","qun",4,["qtpz_shezheng","qtpz_yingshi"],[]],
},        

characterIntro:{
					
				},   
				
				characterTitle:{
					"qtpz_aqing":"朱阳光",
					"qtpz_haidafu":"落影丶逝尘",
					"qtpz_aobai":"落影丶逝尘",
					"qtpz_wuzixu":"落影丶逝尘",
					"qtpz_xuedaolaozhu":"落影丶逝尘",
				},
				
				perfectPair:{
			//"jyqxz_qtpz_genie":['jyqxz_qtpz_weizhuang'],
					},
                               
skill:{
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
                trigger:{
					audio:"ext:金庸群侠传:2",
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
				audio:"ext:金庸群侠传:2",
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
				direct:true,
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
        if(event.player==player) return false;
        return event.player.countCards('h')>=2;
    },
                content:function (){
				"step 0"	
					player.chooseControl('愤激','cancel2').set('ai',function(){         
            if(player.hp>=3) return '愤激';
            return 'cancel2';
        }).set('prompt','愤激：请选择是否发动愤激');    
		"step 1"
        if(result.control=='愤激'){
			player.logSkill('qtpz_fenji');
            event.goto(2);
		}
		else{
			event.cancel();
		}
		"step 2"
        player.line(trigger.player,'green');
        event.hs=trigger.player.getCards('h');
        event.hs1=event.hs.randomGets(2);
        "step 3"
        player.showCards(event.hs1)
        "step 4"
        if(get.suit(event.hs1[0])!=get.suit(event.hs1[1])){
            if(player.countCards('h')>0){
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
	 "qtpz_aobai":"鳌拜",
            "qtpz_shezheng":"摄政",
            "qtpz_shezheng_info":"每轮限一次，其他角色的杀因弃置而进入弃牌堆后，你可以对其攻击范围内的一名其他角色使用此杀",
            "qtpz_yingshi":"营私",
            "qtpz_yingshi_info":"锁定技，每当你与回合外使用或打出杀后，你摸一张牌。",
	  "qtpz_wuzixu":"伍子胥",
            "qtpz_zhucheng":"筑城",
            "qtpz_zhucheng_info":"游戏开始前，共发你8张牌，选4张作为手牌，其余的置于武将牌上，称之为“城”。每当一名角色摸牌阶段开始时，你可以观看牌堆顶的两张牌，然后用至多两张'城'，交换之",
            "qtpz_zhucheng1":"筑城",
            "qtpz_zhucheng1_info":"",
            "qtpz_xuezhuang":"血状",
            "qtpz_xuezhuang_info":"一名角色进入濒死状态时，你可以摸一张牌",
	  "qtpz_xuedaolaozhu":"血刀老祖",
            "qtpz_handao":"悍刀",
            "qtpz_handao_info":"锁定技;你使用杀造成伤害时，目标每满足以下任意一项，此杀伤害加一。1.体力值为一，2.没有手牌，3，没有装备防具牌。",
            "qtpz_hanzhan":"酣战",
            "qtpz_hanzhan_info":"出牌阶段，你可以流失一点体力或失去一体力上限。每当你流失一体力或失去一体力上限后你可以令其他角色弃置一张牌。",
            "qtpz_shuixiang":"说降",
            "qtpz_shuixiang_info":"每当你使用锦囊牌指定目标后，若其区域有牌，你可以令其弃置其中一张，然后该牌对其无效。",
	 "qtpz_haidafu":"海大富",
	 "qtpz_fenji":"愤激",
            "qtpz_fenji_info":"其他角色摸牌阶段结束时，你可以展示其两张牌;若花色不同，视为其对你使用一张火攻，否则你失去一体力上限。",
            "qtpz_huashi":"化尸",
            "qtpz_huashi_info":"其他角色出牌阶段开始时，你可以失去一体力上限，然后声明一种花色，其此回合不能使用或打出该花色的牌。",
            "qtpz_shidu":"嗜毒",
            "qtpz_shidu_info":"锁定技，当你使用火杀或火攻指定目标或成为目标时，你增加一体力上限。你可以将火杀或火攻当桃使用。",
            "qtpz_shidu_tao":"嗜毒_桃",
            "qtpz_shidu_tao_info":"",
	 "qtpz_aqing":"阿青",
	  "qtpz_libing":"厉兵",
            "qtpz_libing_info":"一名角色的装备区里置入一张兵器牌时，你可以令其视为对其攻击范围内由你选择的另一名角色使用一张【杀】;其以此法使用的【杀】不记入回合内使用【杀】的额定次数",
            "qtpz_shujia":"束甲",
            "qtpz_shujia_info":"每当你使用【杀】造成伤害后，若其装备区里有护甲牌，你可以获得之",
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
            "sdyx_guojing":["male","wei",4,["sdyx_jianchi","sdyx_yuzhong"],[]],            
            "sdyx_xguojing":["male","wei",4,["sdyx_danxin","sdyx_polu","sdyx_longyin"],['zhu']],
"sdyx_zhebie":["male","wei",4,["sdyx_sheqi","sdyx_guifu"],[]],
"sdyx_ouyangfeng":["male","wei",4,["sdyx_shezhang","sdyx_duxi","sdyx_nijing"],[]],
"sdyx_fengheng":["female","wei",6,["sdyx_moshu","sdyx_cuixin"],[]],
	"sdyx_huangrong":["female","wei",3,["sdyx_qingshi","sdyx_qiaoyan","sdyx_qimen"],[]],	
	"sdyx_zhoubotong":["male","wei",3,["sdyx_mingwan","sdyx_shouxun"],[]],
},

characterIntro:{
     	
						},
				characterTitle:{
					"sdyx_huangrong":"Sukincen",
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
 player.chooseTarget('是否选择一名角色代替'+get.translation(trigger.player)+'打出拼点牌？',function(card,player,target){
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
  audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseBegin",
                },
                priority:2018,
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
				/*init:function (player){
					player.markSkill('sdyx_qingshi2');
				},*/
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
	"sdyx_shezhang":{
		audio:"ext:金庸群侠传:2",
                inherit:"zhuque_skill",				
                filter:function (event,player){
        if(player.getEquip(1)) return false;
        if(!lib.skill.zhuque_skill.filter(event,player)) return false;
		return true;
        //if(event.card.name=='sha'&&!event.card.nature) return true;
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
                /*trigger:{
                    player:"shaBegin",
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
        trigger.card.nature=='fire';
        player.addSkill('zhuque_skill2');
        player.storage.zhuque_skill=trigger.card;
    },*/
            },
            "sdyx_duxi":{
                trigger:{
                    source:"damageBegin",
                },
				audio:"ext:金庸群侠传:2",
                direct:true,
                filter:function (event){
        if(player.countCards('h',{suit:'spade'})<=0) return false;
        return event.nature=='fire';
    },
                content:function (){
        "step 0"
        if(trigger.nature!='fire'){ event.finish();}
		else{event.goto(1);}
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
	filter:function(event,player){
					return player.countCards('h',{nature:'thunder'})>0;
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
	 "sdyx_zhoubotong":"周伯通",
            "sdyx_mingwan":"冥顽",
            "sdyx_mingwan_info":"每当你受到一点伤害后，你可以选择一名角色，将其下个回合判定阶段移出牌阶段后，或将其下个回合弃牌阶段移出牌阶段后(已有'判'或'弃'标记的角色不能被选择)。",
            "sdyx_shouxun":"守训",
            "sdyx_shouxun_info":"锁定技，你不能失去装备区里的武器牌和锦囊牌",
			"sdyx_mingwan2":"判定移出牌阶段后",
            "sdyx_mingwan2_info":"",
            "sdyx_mingwan3":"弃牌移摸牌阶段后",
            "sdyx_mingwan3_info":"",
	 "sdyx_huangrong":"黄蓉",
            "sdyx_qiaoyan":"巧言",
            "sdyx_qiaoyan_info":"每回合限一次，当一名其他角色拼点时，你可令另一名未参与此次拼点的角色代替其打出拼点牌",
            "sdyx_qingshi":"请师",
            "sdyx_qingshi_info":"回合开始时，你可与一名角色进行拼点，若你赢，你获得其一项除觉醒技、主公技和限定技的技能，直到回合结束；若你没赢，本局游戏你不能对该角色发动【请师】且你受到一点伤害",
            "sdyx_qimen":"奇门",
		    "sdyx_qimen2":"奇门",
            "sdyx_qimen_info":"当你受到一次伤害，你可令一名未以此法获得“奇门”的角色于下个回合额外执行一个摸牌阶段或跳过判定阶段",
	 "sdyx_fengheng":"冯蘅",
	  "sdyx_moshu1":"默书",
            "sdyx_moshu1_info":"",
            "sdyx_moshu":"默书",
            "sdyx_moshu_info":"每回合限一次，其他角色使用非转化的实体锦囊牌后，你可以获得一枚【拓印】标记，并将此牌拓印此标记上，你可以移除一枚【拓印】标记，然后将一张手牌当此拓印标记的普通锦囊牌使用。",
            "sdyx_cuixin":"瘁心",
            "sdyx_cuixin_info":"锁定技，你每移除一枚【拓印】标记，你选择一项:1失去一体力上限，2流失一体力。",
	 "sdyx_ouyangfeng":"欧阳锋",
            "sdyx_shezhang":"蛇杖",
            "sdyx_shezhang_info":"若你没有装备区里没有武器牌你视为装备了朱雀羽扇",
            "sdyx_duxi":"毒袭",
            "sdyx_duxi_info":"当你造成火焰伤害时，你可以弃一张黑桃牌，令此伤害加一。",
            "sdyx_nijing":"逆筋",
            "sdyx_nijing_info":"你可将你的任意一张雷杀当【酒】使用。",
   "sdyx_xguojing":"SP郭靖",
            "sdyx_zhebie":"哲别",
            "sdyx_huangyaoshi":"黄药师",
            "sdyx_guojing":"郭靖",
			"sdyx_sheqi":"射骑",
            "sdyx_sheqi_info":"你使用的杀无距离限制，并且无视目标防具;出牌阶段结束时，若你此阶段未使用过杀，你可以令一名其他角色使用其手牌中的一张杀(无距离限制并且无视防具)",
            "sdyx_guifu":"归附",
            "sdyx_guifu_info":"回合结束时，你可以将一张因使用而置入弃牌堆的牌，交给一名其他角色。",
			 "sdyx_danxin":"丹心",
            "sdyx_danxin_info":"其他角色使用【杀】指定目标后，你可以与其拼点，若你赢，此【杀】无效且你获得之;若你未赢且你不是目标，此【杀】的目标改为你。",
            "sdyx_polu":"破虏",
            "sdyx_polu_info":"锁定技，你的攻击范围+X，你使用【杀】的次数上限+X。(X为你已损失的内力值)",
            "sdyx_longyin":"龙吟",
            "sdyx_longyin_info":"盟主技，锁定技，你攻击范围的角色视为在其他宋朝角色的攻击范围内",
            "sdyx_longyin2":"",
			 "sdyx_cihuai":"悲怀",
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
					 "yttl_zhangsanfeng":["male","wu",3,["yttl_taiji","yttl_chunyan","yttl_taoli"],['zhu']],                       
            "yttl_changbaisanqin":["male","wu",4,["yttl_fendao","yttl_kuiyu"],[]],			
			"yttl_yangxiao":["male","wu",3,["yttl_xingshi","yttl_jieao"],[]],
			"yttl_zhuyuanzhang":["male","wu",3,["yttl_qingce","yttl_youhui","yttl_yinyuan"],[]],
			 "yttl_due":["male","wu",3,["yttl_jingang","yttl_fumo","yttl_guchan"],[]],
			 "yttl_yinli":["female","wei",4,["yttl_chuxin","yttl_maodu"],[]],
       
},
characterIntro:{
				"yttl_zhangsanfeng":"《倚天屠龙记》中的角色。",		
					
				},
characterTitle:{
					"yttl_yangxiao":"落影丶逝尘",
					"yttl_yinli":"落影丶逝尘",
			"yttl_zhuyuanzhang":"落影丶逝尘",
			"yttl_changbaisanqin":"Sukincen",
           "yttl_due":"Sukincen&&看破一切",
            "yttl_zhangsanfeng":"Sukincen",
								},
								
skill:{
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
                viewAsFilter:function (player){return player.storage.yttl_jingang<=12;},
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
	 audio:"ext:金庸群侠传:2",
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
            "yttl_youhui1":{
                audio:"ext:金庸群侠传:2",
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h',{type:'equip'})>0&&!player.hasSkill('yttl_youhui');
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
        return player!=target&&!target.getEquip(card)&&target.hasSkill('yttl_youhui');
    },
                content:function (){
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
            "yttl_youhui":{
                global:"yttl_youhui1",
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
        return target.countCards('e')>0;
    },
                content:function (){
        'step 0'      
            player.chooseCardButton('焚刀',target.getCards('e')).ai=function(button){
                return get.value(button.link)-1;
            }     
        'step 1'
        if(result.bool){
          var chat=['屠龙刀是我们的了，哈哈……','武林至尊，宝刀屠龙。号令天下，莫敢不从'].randomGet();
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
  "yttl_yinli":"殷离",
            "yttl_chuxin":"初心",
            "yttl_chuxin_info":"锁定技;你于本局游戏使用或打出第一张牌花色相同的手牌，不占用你的手牌上限。",
            "yttl_maodu":"蝥毒",
            "yttl_maodu_info":"每当你受到或造成一点属性伤害后，你增加一体力上限。出牌阶段限一次，你可以失去两点体力上限，然后选择一项:1.选择一名体力上限大于你的角色令其流失一体力。2.摸四张牌。",
 "yttl_due":"渡厄",
            "yttl_jingang":"金刚",
            "yttl_jingang_info":"每局限13次，当你需要使用【无懈可击】时，你可以选择翻面，然后视为你使用了一张【无懈可击】",
            "yttl_fumo":"伏魔",
            "yttl_fumo_info":"每当你的武将牌翻至背面朝上时，你可以横置所有角色的武将牌",
            "yttl_guchan":"枯禅",
            "yttl_guchan_info":"每当你的武将牌翻面后，你可选择一名角色并声明一种该角色未以此法声明的锦囊牌的牌名，其于本局游戏中不能再成为此牌的目标",
 "yttl_zhuyuanzhang":"朱元璋",
            "yttl_qingce":"清侧",
            "yttl_qingce_info":"每当你使用普通锦囊牌时，你可以令你距离一以内的任意名角色成为目标，或取消你距离一以内的任意名角色的目标",
            "yttl_yinyuan":"夤缘",
            "yttl_yinyuan_info":"主公技;锁定技，你计算其他魏势力角色距离为1。",
            "yttl_youhui1":"邀贿",
            "yttl_youhui1_info":"",
            "yttl_youhui":"邀贿",
            "yttl_youhui_info":"其他角色出牌阶段，其可以将一张装备牌置于你的装备区里（不得替换原装备），然后其摸张牌。",
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
					"jyqxzhelp":{
				"name":"金庸群侠传","init":"1","item":{"1":"查看介绍","2":"<li>技能设计：大熊小猫","3":"<li>编写代码：<br>★Sukincen ★冰波水微 <br>★落影丶逝尘（太上大牛）  <br>★冷雨 ★晒晒（朱阳光）","4":"<li>友情配音：<br>觅阳 主人 仙女桥<br> 清酒摇舟  稳得高处<br>神齐大叔  草莓味少女<br>冷陶 青灯折扇不语","5":"<li>游戏时最好打开兼容模式"}
					},	
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
    intro:"",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"1.21",
},files:{"character":[],"card":[],"skill":[]}}})
