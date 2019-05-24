game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新国战",content:function (config,pack){
    if(lib.characterPack.mode_guozhan){
        game.showAozhanInfo=function(){
			var func=function(){
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='calc(100%)';
				dialog.style.width='calc(100%)';
				dialog.style.left='0px';
				dialog.style.top='0px';
				dialog.classList.add('popped');
				dialog.classList.add('static');
				var div=ui.create.div('.menubutton.round','×',function(){
					dialog.delete();
		    	});
				div.style.left='calc(50% - 35px)';
				dialog.add(div);
					dialog.addText("「鏖战模式」的规则：<br>当游戏中仅剩四名或更少角色时（七人以下游戏时改为三名或更少），若此时全场没有超过一名势力相同的角色，则从一个新的回合开始，游戏进入鏖战模式直至游戏结束。<br>在鏖战模式下，【桃】只能当做【杀】或【闪】使用或打出，不能用来回复体力。（使用技能转化出的【桃】和珠联璧合标记的【桃】不受影响）<br>注：进入鏖战模式后，即使之后有两名或者更多势力相同的角色出现，仍然不会取消鏖战模式。",false);
					ui.window.appendChild(dialog);
				};
			ui.noname_xinguozhan_aozhan=ui.create.system('鏖战模式',func,true);
		}
        //避免君主变野的多重保障
        lib.element.player.wontYe=function(){
            if(get.is.jun(this.name1)) return true;
	        var group=lib.character[this.name1][1];
			if(get.zhu(this,null,true)) return true;
			if(_status.yeidentity&&_status.yeidentity.contains(group)) return false;
			return get.totalPopulation(group)+1<=get.population()/2;
		}
        if(config.replacefazheng){
            //替换法正
		    lib.arenaReady.push(function(){
                if(lib.character.gz_fazheng){
                    lib.character.gz_fazheng[3]=["new_gzxuanhuo","gzenyuan"];
               }
            })
        }
        _status.aozhanbgm=config.aozhanbgm;
        //重新定义背景音乐播放函数
        game.playBackgroundMusic=function(){
            if(_status.aozhanbgm!='disabled'&&_status._aozhan==true){
                var oribgm=lib.config.background_music;
                if (oribgm!="music_off"){
                    ui.backgroundMusic.src=lib.assetURL+'extension/新国战/'+_status.aozhanbgm+'.mp3';
                }
            }
            else{
			    if(lib.config.background_music=='music_off'){
				    ui.backgroundMusic.src='';
			    }
			    else{
				    var music=lib.config.background_music;
				    if(music=='music_random'){
					    music=lib.config.all.background_music.randomGet('music_off','music_random',_status.currentMusic);
				    }
				    _status.currentMusic=music;
				    if(music=='music_custom'){
					    if(lib.config.background_music_src){
						    ui.backgroundMusic.src=lib.config.background_music_src;
					    }
				    }
				    else{
					    ui.backgroundMusic.src=lib.assetURL+'audio/background/'+music+'.mp3';
				    }
			    }
            }
		}
        if(config.viewnext==true){
            //观看下家副将
            lib.skill._viewnext={
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                silent:true,
                popup:false,
                forced:true,
                filter:function (){
                    return game.players.length>1;
                },
                content:function (){
                    var target=player.getNext();
                    player.viewCharacter(target,1);
                },
            }
        }
        if(config.aozhan==true){
            //鏖战模式
            lib.skill._aozhan_judge={
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                filter:function (event,player){
                    if(get.mode()!='guozhan') return false;
                    if(_status._aozhan) return false;
                    if(game.players.length>4) return false;
                    if(game.players.length>3&&game.players.length+game.dead.length<=7) return false;
                    for(var i=0;i<lib.group.length;i++){
                        var num=get.population(lib.group[i]);
                        if(num>1) return false;
                    }
                    return true;
                },
                content:function (){
                    ui.aozhan=ui.create.div('.touchinfo.left',ui.window);
                    ui.aozhan.innerHTML='鏖战模式';
                    if(ui.time3) ui.time3.style.display='none';
                    game.showAozhanInfo();
                    var color=get.groupnature(player.group,"raw");
                    if(player.isUnseen()) color='fire';
                    player.$fullscreenpop('鏖战模式',color); 
                    _status._aozhan=true;
                    game.countPlayer(function(current){current.addSkill('aozhan')});
                    if(_status.aozhanbgm!='disabled') game.playBackgroundMusic();
                },
            }
        }
        if(config.marksystem==true){
            //珠联璧合
            lib.element.content.zhulian=function(){
                player.popup('珠联璧合');
                game.log(player,'获得了【珠联璧合】标记');
                player.addSkill('zhulianbihe_skill');
            }
            //半血标记
            lib.element.content.doubleDraw=function(){
                game.log(player,'获得了【阴阳鱼】标记');
                player.addSkill('yinyang_skill');
            }
            //首亮标记与君主变野bug的修复
            lib.element.player.showCharacter=function(num,log){
                if(num==0&&!this.isUnseen(0)){
                    return;
                }
                if(num==1&&!this.isUnseen(1)){
                    return;
                }
                if(!this.isUnseen(2)){
                    return;
                }
                game.addVideo('showCharacter',this,num);
                if(this.identity=='unknown'){
                    this.group=lib.character[this.name1][1];
                    if(get.is.jun(this.name1)&&this.isAlive()){
                        this.identity=this.group;
                        var yelist=[];
                        for(var i=0;i<game.players.length;i++){
                            if(game.players[i].identity=='ye'&&game.players[i]._group==this.group){
                                yelist.push(game.players[i]);
                            }
                        }
                        game.broadcastAll(function(list,group){
                            for(var i=0;i<list.length;i++){
                                list[i].identity=group;
                                list[i].setIdentity();
                            }
                        },yelist,this.group);
                    }
                    else if(this.wontYe()){
                        this.identity=this.group;
                    }
                    else{
                        this.identity='ye';
                    }
                    this.setIdentity(this.identity);
                    this.ai.shown=1;
                    this.node.identity.classList.remove('guessing');
                    if(_status.clickingidentity&&_status.clickingidentity[0]==this){
                        for(var i=0;i<_status.clickingidentity[1].length;i++){
                            _status.clickingidentity[1][i].delete();
                            _status.clickingidentity[1][i].style.transform='';
                        }
                        delete _status.clickingidentity;
                    }
                    game.addVideo('setIdentity',this,this.identity);
                }
                var skills;
                switch(num){
                    case 0:
                    if(log!==false) game.log(this,'展示了主将','#b'+this.name1);
                    this.name=this.name1;
                    skills=lib.character[this.name][3];
                    this.sex=lib.character[this.name][0];
                    this.classList.remove('unseen');
                    break;
                    case 1:
                    if(log!==false) game.log(this,'展示了副将','#b'+this.name2);
                    skills=lib.character[this.name2][3];
                    if(this.sex=='unknown') this.sex=lib.character[this.name2][0];
                    if(this.name.indexOf('unknown')==0) this.name=this.name2;
                    this.classList.remove('unseen2');
                    break;
                    case 2:
                    if(log!==false) game.log(this,'展示了主将','#b'+this.name1,'、副将','#b'+this.name2);
                    this.name=this.name1;
                    skills=lib.character[this.name][3].concat(lib.character[this.name2][3]);
                    this.sex=lib.character[this.name][0];
                    this.classList.remove('unseen');
                    this.classList.remove('unseen2');
                    break;
                }
                game.broadcast(function(player,name,sex,num,identity){
                    player.identityShown=true;
                    player.name=name;
                    player.sex=sex;
                    player.node.identity.classList.remove('guessing');
                    switch(num){
                        case 0:player.classList.remove('unseen');break;
                        case 1:player.classList.remove('unseen2');break;
                        case 2:player.classList.remove('unseen');player.classList.remove('unseen2');break;
                    }
                    player.ai.shown=1;
                    player.identity=identity;
                    player.setIdentity(identity);
                    if(_status.clickingidentity&&_status.clickingidentity[0]==player){
                        for(var i=0;i<_status.clickingidentity[1].length;i++){
                            _status.clickingidentity[1][i].delete();
                            _status.clickingidentity[1][i].style.transform='';
                        }
                        delete _status.clickingidentity;
                    }
                },this,this.name,this.sex,num,this.identity);
                this.identityShown=true;
                for(var i=0;i<skills.length;i++){
                    this.hiddenSkills.remove(skills[i]);
                    this.addSkill(skills[i]);
                }
                this.checkConflict();
                //game.tryResult();
                if(!this.viceChanged){
                    var initdraw=parseInt(get.config('initshow_draw'));
                    if(!_status.initshown&&!_status.overing&&initdraw&&this.isAlive()&&_status.mode!='mingjiang'){
                        this.popup('首亮');
                        game.log(this,'首先明置武将，得到了奖励');
                        game.log(this,'得到了【先驱】标记');
                        this.addSkill('xianqu_skill');
                        _status.initshown=true;
                    }
                    if(!this.isUnseen(2)&&!this._mingzhied){
                        this._mingzhied=true;
                        if(this.singleHp){
                            this.doubleDraw();
                        }
                        if(this.perfectPair()){
                            var next=game.createEvent('guozhanDraw');
                            next.player=this;
                            next.setContent('zhulian');
                        }
                    }
                }
            }
        }
        if(config.yedraw==true){
            //野心家摸牌修改
            lib.element.player.dieAfter=function(source){
                this.showCharacter(2);
                if(get.is.jun(this.name1)){
                    var yelist=[];
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].identity==this.identity){
                            yelist.push(game.players[i]);
                        }
                    }
                game.broadcastAll(function(list){
                        for(var i=0;i<list.length;i++){
                            list[i].identity='ye';
                            list[i].setIdentity();
                        }
                    },yelist);
                    _status.yeidentity.add(this.identity);
                }
                if(source&&source.identity!='unknown'){
                    if(source.identity=='ye') source.draw(3);
                    else if(this.identity=='ye') source.draw(1);
                    else if(this.identity!=source.identity) source.draw(get.population(this.identity)+1);
                    else source.discard(source.getCards('he'));
                }
                game.tryResult();
            }
        }
        if(config.weilose==false){
            //郭嘉荀彧曹丕徐晃魏延
            lib.characterPack.mode_guozhan.gz_guojia=['male','wei',3,['tiandu','new_yiji']]
            lib.characterPack.mode_guozhan.gz_xunyu=['male','wei',3,['quhu','new_jieming']]
            lib.characterPack.mode_guozhan.gz_caopi=['male','wei',3,['xingshang','new_fangzhu']]
            lib.characterPack.mode_guozhan.gz_xuhuang=['male','wei',4,['new_duanliang'],[]]
            lib.characterPack.mode_guozhan.gz_weiyan=['male','shu',4,['xinkuanggu'],[]]
        }
        if(config.mobilecharacter==true){
            //凌操和李丰
            lib.characterPack.mode_guozhan.gz_lingcao=['male','wu',4,['dujin']]
            lib.characterPack.mode_guozhan.gz_lifeng=['male','shu',3,['tunchu','shuliang']]
        }
        if(config.enablehimiko==true){
            //卑弥呼
            lib.characterPack.mode_guozhan.gz_beimihu=["female","qun",3,["hmkguishu","hmkyuanyu"],[]]
        }
        //魏国
        lib.characterPack.mode_guozhan.gz_caoren=['male','wei',4,['new_jushou'],[]]
        //蜀国
        lib.characterPack.mode_guozhan.gz_liubei=['male','shu',4,['rerende']]
        lib.characterPack.mode_guozhan.gz_zhangfei=['male','shu',4,['new_paoxiao'],[]]
        lib.characterPack.mode_guozhan.gz_zhugeliang=['male','shu',3,['guanxing','new_kongcheng']]
        lib.characterPack.mode_guozhan.gz_zhaoyun=['male','shu',4,['new_longdan'],[]]
        lib.characterPack.mode_guozhan.gz_machao=['male','shu',4,['mashu','new_tieji']]
        lib.characterPack.mode_guozhan.gz_ganfuren=['female','shu',3,['new_shushen','shenzhi'],[]]
        //吴国
        lib.characterPack.mode_guozhan.gz_huanggai=['male','wu',4,['new_kurou']]
        lib.characterPack.mode_guozhan.gz_lvmeng=['male','wu',4,['new_keji','new_mouduan']]
        lib.characterPack.mode_guozhan.gz_zhoutai=['male','wu',4,['new_buqu','new_fenji'],[]]
        lib.characterPack.mode_guozhan.gz_zhouyu=['male','wu',3,['reyingzi','refanjian'],[]]
        lib.characterPack.mode_guozhan.gz_xiaoqiao=['female','wu',3,['retianxiang','hongyan'],[]]
        lib.characterPack.mode_guozhan.gz_sunjian=['male','wu',5,['gzyinghun'],[]]
        //群雄
        lib.characterPack.mode_guozhan.gz_pangde=['male','qun',4,['mashu','jianchu'],[]]
        lib.characterPack.mode_guozhan.gz_re_yuanshao=['male','qun',4,['new_luanji'],[]]
        lib.characterPack.mode_guozhan.gz_huatuo=['male','qun',3,['new_chuli','jijiu'],[]]
        lib.characterPack.mode_guozhan.gz_zoushi=['female','qun',3,['new_huoshui','huoshui'],[]]
        //君主
        lib.characterPack.mode_guozhan.gz_jun_liubei=['male','shu',4,['zhangwu','new_jizhao','shouyue','wuhujiangdaqi']]
        lib.characterPack.mode_guozhan.gz_jun_sunquan=['male','wu',4,['new_jiahe','lianzi','jubao','yuanjiangfenghuotu']]
        //孙笨
        lib.characterPack.mode_guozhan.gz_sunce=['male','wu',4,['jiang','yingyang','baka_hunshang']]
        //由于技能名称的调整 需调整存嗣的AI
        lib.skill.gzcunsi.ai={
            order:9,
            result:{
                player:function (player,target){
                    var num=0;
                    if(player.isDamaged()&&target.isFriendOf(player)){
                        num++;
                        if(target.hasSkill('kanpo')) num+=0.5;
                        if(target.hasSkill('liegong')) num+=0.5;
                        if(target.hasSkill('new_tieji')) num+=0.5;
                        if(target.hasSkill('rerende')) num+=1.2;
                        if(target.hasSkill('new_longdan')) num+=1.2;
                        if(target.hasSkill('new_paoxiao')) num+=1.2;
                        if(target.hasSkill('zhangwu')) num+=1.5;
                        if(target!=player) num+=0.5;
                    }
                    return num;
                },
            },
        }
        //修改五虎大将旗描述
        lib.skill.wuhujiangdaqi.intro={
            content:"@<div style=\"margin-top:-5px\"><div class=\"skill\">【武圣】</div><div class=\"skillinfo\">将“红色牌”改为“任意牌”</div><div class=\"skill\">【咆哮】</div><div class=\"skillinfo\">增加描述“你使用的【杀】无视其他角色的防具”</div><div class=\"skill\">【龙胆】</div><div class=\"skillinfo\">增加描述“你每发动一次‘龙胆’便摸一张牌”</div><div class=\"skill\">【烈弓】</div><div class=\"skillinfo\">增加描述“你的攻击范围+1”</div><div class=\"skill\">【铁骑】</div><div class=\"skillinfo\">将“一张明置的武将牌”改为“所有明置的武将牌”</div></div>",
        }
        lib.translate.wuhujiangdaqi_info='存活的蜀势力角色的技能按以下规则改动：<br><strong>武圣</strong>：将“红色牌”改为“任意牌”<br><strong>咆哮</strong>：增加描述“你使用的【杀】无视其他角色的防具”<br><strong>龙胆</strong>：增加描述“你每发动一次‘龙胆’便摸一张牌”<br><strong>烈弓</strong>：增加描述“你的攻击范围+1”<br><strong>铁骑</strong>：将“一张明置的武将牌”改为“所有明置的武将牌”';
        //修复国战勇诀给牌给错人的bug
        lib.skill.gzyongjue.content=function(){
		    var cards=[];
			for(var i=0;i<trigger.cards.length;i++){
				if(get.position(trigger.cards[i])=='d'){
					cards.push(trigger.cards[i]);
		    	}
			}
			trigger.player.gain(cards,'gain2');
		}
    }
},precontent:function (){
    
},help:{},config:{"weilose":{"init":false,"name":"保留OL的未修改武将","intro":"若开启此选项，郭嘉、荀彧、曹丕、徐晃、魏延将不会改为2019新国战实体卡中的版本。"},"viewnext":{"init":false,"name":"启用观看下家副将","intro":"若开启此选项，所有的玩家将在挑选武将后，分发起始手牌之前，分别观看自己下家的副将。"},"marksystem":{"init":true,"name":"启用标记系统","intro":"若开启此选项，首亮奖励，珠联璧合奖励，半血补偿等将改为获得对应的标记。具体的标记规则，请查阅2019新国战的其他相关说明。"},"yedraw":{"init":true,"name":"启用野心家摸牌","intro":"若开启此选项，则当野心家杀死一名角色时，其始终改为摸三张牌。"},"aozhan":{"init":true,"name":"启用鏖战模式","intro":"若开启此选项，则将在游戏中引入“鏖战模式”的规则：<br>当游戏中仅剩四名或更少角色时（七人以下游戏时改为三名或更少），若此时全场没有超过一名势力相同的角色，则从一个新的回合开始，游戏进入鏖战模式直至游戏结束。<br>◇在鏖战模式下，【桃】只能当做【杀】或【闪】使用或打出，不能用来回复体力。<br>注：进入鏖战模式后，即使之后有两名或者更多势力相同的角色出现，仍然不会取消鏖战模式。"},"aozhanbgm":{"init":"default","name":"鏖战模式音乐","item":{"default":"Online","chaoming":"潮鳴り","disabled":"不启用"},"intro":"鏖战模式下的背景音乐"},"mobilecharacter":{"init":false,"name":"引入移动版武将","intro":"若开启此选项，将在国战将池内引入移动版国战的专属武将【凌操】和【李丰】。"},"enablehimiko":{"init":false,"name":"启用卑弥呼","intro":"若开启此选项，将在国战将池内引入日文版的专属武将【卑弥呼】。"},"replacefazheng":{"init":true,"name":"替换法正","intro":"若开启此选项，且同时安装了【权·酱拌面】这一扩展的话，法正的〖眩惑〗中对应的所有技能将会改为新国战中对应的技能。"}},package:{
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
            "xianqu_skill":{
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h')<4;
    },
                usable:1,
                mark:true,
                intro:{
                    content:"◇出牌阶段，你可以弃置此标记，然后将手牌摸至四张并观看一名其他角色的一张武将牌。",
                },
                content:function (){
        "step 0"
        player.draw(4-player.countCards('h'));
        player.chooseTarget('是否观看一名其他角色的一张暗置武将牌？',function(card,player,target){
            return target!=player&&target.isUnseen(2);
        }).set('ai',function(target){
            if(target.isUnseen()){
                var next=_status.event.player.getNext();
                if (target!=next) return 10;
                return 9;
            }              
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            event.target=result.targets[0];
            player.line(event.target,'green');
            var controls=[];
            if(event.target.isUnseen(0)) controls.push('主将');
            if(event.target.isUnseen(1)) controls.push('副将');
            if(controls.length>1){
                player.chooseControl(controls);
            }
            if(controls.length==0) event.finish();
        }
        else{
            player.removeSkill('xianqu_skill');
            event.finish();
        }
        "step 2"
        if(result.control){
            if(result.control=='主将'){
                player.viewCharacter(event.target,0);
            }
            else{
                player.viewCharacter(event.target,1);
            }
        }
        else if(target.isUnseen(0)){
            player.viewCharacter(event.target,0);
        }
        else{
            player.viewCharacter(event.target,1);
        }
        player.removeSkill('xianqu_skill');
    },
                ai:{
                    order:1,
                    result:{
                        player:2,
                    },
                },
            },
            "zhulianbihe_skill":{
                group:["zhulianbihe_skill_draw","zhulianbihe_skill_tao"],
                mark:true,
                intro:{
                    content:"◇出牌阶段，你可以弃置此标记 然后摸两张牌。<br>◇你可以将此标记当做【桃】使用。",
                },
            },
            "yinyang_skill":{
                group:["yinyang_skill_draw","yinyang_skill_add"],
                mark:true,
                intro:{
                    content:"◇出牌阶段，你可以弃置此标记，然后摸一张牌。<br>◇弃牌阶段，你可以弃置此标记，然后本回合手牌上限+2。",
                },
            },
            "zhulianbihe_skill_draw":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        player.draw(2);
        player.removeSkill('zhulianbihe_skill');
    },
                ai:{
                    order:function (item,player){
            var cards=player.getCards('h');
            if(player.hp>=3){
                if(cards.length>=3){
                    for(var i=0;i<cards.length;i++){
                         if(get.tag(cards[i],'recover')>=1) return 7.2;
                    }
                    return 1;
                }
                else return 7.2;
            }
            if(player.hp=2){
                if(cards.length<2){
                    for(var i=0;i<cards.length;i++){
                         if(get.tag(cards[i],'recover')>=1) return 7.2;
                    }
                    return 1;
                }
            }
            return 1;
        },
                    result:{
                        player:2,
                    },
                },
            },
            "zhulianbihe_skill_tao":{
                enable:"chooseToUse",
                viewAs:{
                    name:"tao",
                },
                filterCard:function (){return false},
                selectCard:-1,
                precontent:function (){
        player.removeSkill('zhulianbihe_skill');
    },
                ai:{
                    save:true,
                    respondTao:true,
                    basic:{
                        order:function (card,player){
                if(player.hasSkillTag('pretao')) return 4.9;
                return 1.9;
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
            "yinyang_skill_draw":{
                enable:"phaseUse",
                usable:1,
                content:function (){
        player.draw();
        player.removeSkill('yinyang_skill');
    },
                ai:{
                    order:function (item,player){
            if(player.countCards('h')<player.getHandcardLimit()){
                return 7.2;
            }
            else return 1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h')>player.getHandcardLimit()) return 0;
                return 1;
            },
                    },
                },
            },
            "yinyang_skill_add":{
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
        return player.needsToDiscard();
    },
                prompt:"是否弃置【阴阳鱼】标记，使本回合的手牌上限+2？",
                content:function (){
        player.addTempSkill('yinyang_add','phaseAfter');
        player.removeSkill('yinyang_skill');
    },
            },
            "yinyang_add":{
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
            },
            aozhan:{
                mod:{
                    cardEnabled:function (card,player){
            if(_status.event.skill==undefined&&get.owner(card)!=undefined&&card.name=='tao') return false;
        },
                    cardUsable:function (card,player){
            if(_status.event.skill==undefined&&get.owner(card)!=undefined&&card.name=='tao') return false;
        },
                    cardRespondable:function (card,player){
            if(_status.event.skill==undefined&&get.owner(card)!=undefined&&card.name=='tao') return false;
        },
                    cardSavable:function (card,player){
            if(_status.event.skill==undefined&&get.owner(card)!=undefined&&card.name=='tao') return false;
        },
                },
                group:["aozhan_sha","aozhan_shan"],
                subSkill:{
                    sha:{
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"tao",
                        },
                        viewAs:{
                            name:"sha",
                            suit:"diamond",
                            number:3,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":3,"name":"tao","cardid":"5675154373","_transform":"translateX(448px)","clone":{"name":"tao","suit":"diamond","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3702},"timeout":3689,"original":"h"}],
                        },
                        viewAsFilter:function (player){
                if(!player.countCards('h','tao')) return false;
            },
                        prompt:"将一张桃当杀使用或打出",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','tao')) return false;
                },
                            order:function (){
                    return get.order({name:'sha'})-0.1;
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
                    shan:{
                        enable:["chooseToRespond"],
                        filterCard:{
                            name:"tao",
                        },
                        viewAs:{
                            name:"shan",
                            suit:"diamond",
                            number:2,
                        },
                        prompt:"将一张桃当闪打出",
                        check:function (){return 1},
                        viewAsFilter:function (player){
                if(!player.countCards('h','tao')) return false;
            },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','tao')) return false;
                },
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                            },
                            order:4,
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                        },
                        sub:true,
                    },
                },
            },
            "new_jushou":{
                audio:"jushou",
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
        'step 0'
        event.num=game.countGroup();
        player.draw(event.num);
        if(event.num>2) player.turnOver();
        'step 1'
        player.chooseCard('h',true,'弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之').set('ai',function(card){
            if(get.type(card)=='equip'){
                return 5-get.value(card);
            }
            return -get.value(card);
        }).set('filterCard',lib.filter.cardDiscardable);
        'step 2'
        if(result.bool&&result.cards.length){
            if(get.type(result.cards[0])=='equip'){
                player.$give(result.cards,player);
                player.lose(result.cards,ui.special);
                event.toequip=result.cards[0];
            }
            else{
                player.discard(result.cards[0]);
            }
        }
        'step 3'
        if(event.toequip){
            game.delay();
        }
        'step 4'
        if(event.toequip){
            player.equip(event.toequip);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(card.name=='guiyoujie') return [0,1];
            },
                    },
                },
            },
            "new_duanliang":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                mod:{
                    targetInRange:function (card,player,target){
            if(card.name=='bingliang'){
                return true;
            }
        },
                },
                audio:"duanliang1",
                enable:"chooseToUse",
                filterCard:function (card){
        if(get.type(card)!='basic'&&get.type(card)!='equip') return false;
        return get.color(card)=='black';
    },
                filter:function (event,player){
        if(player.hasSkill('new_duanliang_off')) return false;
        return player.countCards('he',{type:['basic','equip'],color:'black'})
    },
                position:"he",
                viewAs:{
                    name:"bingliang",
                    suit:"spade",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":12,"name":"zhangba","cardid":"9310260344","clone":{"name":"zhangba","suit":"spade","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":2638},"original":"j","_transform":"translateY(0px)","viewAs":"bingliang","timeout":2625}],
                },
                onuse:function (result,player){
        if(get.distance(player,result.targets[0])>2) player.addTempSkill('new_duanliang_off');
    },
                prompt:"将一黑色的基本牌或装备牌当兵粮寸断使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    order:9,
                    basic:{
                        order:1,
                        useful:1,
                        value:4,
                    },
                    result:{
                        target:function (player,target){
                if(target.hasJudge('caomu')) return 0;
                return -1.5/Math.sqrt(target.countCards('h')+1);
            },
                    },
                    tag:{
                        skip:"phaseDraw",
                    },
                },
            },
            "new_shushen":{
                audio:"shushen",
                trigger:{
                    player:"recoverAfter",
                },
                direct:true,
                content:function (){
        'step 0'
        event.num=trigger.num||1;
        "step 1"
        player.chooseTarget(get.prompt2('new_shushen'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        });
        "step 2"
        if(result.bool){
            player.logSkill('new_shushen',result.targets);
            result.targets[0].draw();
            if(event.num>1){
                event.num--;
                event.goto(1);
            }
        }
    },
                ai:{
                    threaten:0.8,
                    expose:0.1,
                },
            },
            "new_fenji":{
                audio:"fenji",
                trigger:{
                    global:"phaseAfter",
                },
                filter:function (event,player){
        if(event.player.countCards('h')==0&&event.player.isAlive()) return true;
        return false;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>2;
    },
                content:function (){
        player.line(trigger.player,'green');
        trigger.player.draw(2);
        player.loseHp();
    },
            },
            "new_luanji":{
                audio:"luanji",
                enable:"phaseUse",
                viewAs:{
                    name:"wanjian",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":12,"name":"tiesuo","cardid":"8628233400","clone":{"name":"tiesuo","suit":"spade","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":4467},"timeout":4363,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":13,"name":"nanman","cardid":"6870636402","clone":{"name":"nanman","suit":"spade","number":13,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":4468},"timeout":4364,"original":"h"}],
                },
                filterCard:function (card,player){
        if(!player.storage.new_luanji) return true;
        return !player.storage.new_luanji.contains(get.suit(card));
    },
                selectCard:2,
                check:function (card){
        var player=_status.event.player;
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
        if(!player.needsToDiscard(-1)){
            if(targets.length>=7){
                if(num<2) return 0;
            }
            else if(targets.length>=5){
                if(num<1.5) return 0;
            }
        }
        return 6-get.value(card);
    },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5,
                    },
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                group:["new_luanji_count","new_luanji_reset","new_luanji_respond"],
                subSkill:{
                    reset:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        silent:true,
                        filter:function (event,player){
                return player.storage.new_luanji?true:false;
            },
                        content:function (){
                delete player.storage.new_luanji;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    count:{
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        filter:function (event){
                return event.skill=='new_luanji';
            },
                        content:function (){
                if(!player.storage.new_luanji){
                    player.storage.new_luanji=[];
                }
                for(var i=0;i<trigger.cards.length;i++){
                    player.storage.new_luanji.add(get.suit(trigger.cards[i]));
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    respond:{
                        trigger:{
                            global:"respond",
                        },
                        silent:true,
                        filter:function (event){
                if(event.player.isUnseen()) return false;
                return event.getParent(2).skill=='new_luanji'&&event.player.sameIdentityAs(_status.currentPhase);
            },
                        content:function (){
                trigger.player.draw();
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "new_huoshui":{
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('he',{color:'black'})&&game.hasPlayer(function(current){
            return current!=player&&!current.isUnseen(2);
        });
    },
                filterCard:{
                    color:"black",
                },
                position:"he",
                filterTarget:function (card,player,target){
        return !target.isUnseen(2);
    },
                check:function (card){
        return 6-get.value(card,_status.event.player);
    },
                content:function (){
        'step 0'
        event.target=target;
        event.done=false;
        'step 1'
        if(get.is.jun(event.target)){
            event._result={control:'副将'};
        }
        else{
            var choice='主将';
            var skills=lib.character[event.target.name2][3];
            for(var i=0;i<skills.length;i++){
                var info=get.info(skills[i]);
                if(info&&info.ai&&info.ai.maixie){
                    choice='副将';break;
                }
            }
            if(event.target.name=='gz_zhoutai'){
                choice='主将';
            }
            else if(event.target.name2=='gz_zhoutai'){
                choice='副将';
            }
            player.chooseControl('主将','副将',function(){
                return _status.event.choice;
            }).set('prompt','暗置'+get.translation(event.target)+'的一张武将牌').set('choice',choice);
        }
        'step 2'
        if(result.control=='主将'){
            event.target.hideCharacter(0);
        }
        else{
            event.target.hideCharacter(1);
        }
        event.target.addTempSkill('qingcheng_ai');
        if(get.type(cards[0])=='equip'&&!event.done){
        player.chooseTarget(function(card,player,target){
            return target!=player&&!target.isUnseen(2);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        }
        else event.finish();
        'step 3'
        if(result.bool&&result.targets&&result.targets.length){
            player.line(result.targets[0],'green');
            event.done=true;
            event.target=result.targets[0];
            event.goto(1);
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(target.hp<=0) return -5;
                if(player.getStat().skill.qingcheng) return 0;
                if(!target.hasSkillTag('maixie')) return 0;
                if(get.attitude(player,target)>=0) return 0;
                if(player.hasCard(function(card){
                    return get.tag(card,'damage')&&player.canUse(card,target,true,true);
                })){
                    if(target.maxHp>3) return -0.5;
                    return -1;
                }
                return 0;
            },
                    },
                },
            },
            "new_kongcheng":{
                init:function (player){
        if(player.storage.new_kongcheng==undefined) player.storage.new_kongcheng=[];
    },
                group:["new_kongcheng_gain","new_kongcheng_got"],
                subSkill:{
                    gain:{
                        audio:"kongcheng",
                        trigger:{
                            player:"gainEnd",
                        },
                        filter:function (event,player){
                return event.source&&event.source!=player&&event.cards.length==player.countCards('h')&&player!=_status.currentPhase;
            },
                        content:function (){
                player.storage.new_kongcheng=player.storage.new_kongcheng.concat(player.getCards('h'));
                player.markSkill('new_kongcheng');
                game.addVideo('storage',player,['new_kongcheng',get.cardsInfo(player.storage.new_kongcheng),'cards']);
                player.lose(player.getCards('h'),ui.special); 
            },
                        sub:true,
                        forced:true,
                    },
                    got:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        filter:function (event,player){
                return player.storage.new_kongcheng.length>0;
            },
                        content:function (){
                player.gain(player.storage.new_kongcheng,'draw');
                player.storage.new_kongcheng=[];
                game.addVideo('storage',player,['new_kongcheng',get.cardsInfo(player.storage.new_kongcheng),'cards']);
                player.unmarkSkill('new_kongcheng');
            },
                        sub:true,
                        forced:true,
                    },
                },
                audio:"kongcheng",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                check:function (event,player){
        return get.effect(event.target,event.card,event.player,player)<0;
    },
                filter:function (event,player){
        return player.countCards('h')==0&&(event.card.name=='sha'||event.card.name=='juedou');
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(target.countCards('h')==0&&(card.name=='sha'||card.name=='juedou')) return 'zeroplayertarget';
            },
                    },
                },
                intro:{
                    mark:function (dialog,content,player){
            if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                    dialog.addAuto(content);
                }
                else{
                    return '共有'+get.cnNumber(content.length)+'张牌';
                }
            }
        },
                    content:function (content,player){
            if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                    return get.translation(content);
                }
                return '共有'+get.cnNumber(content.length)+'张牌';
            }
        },
                },
            },
            "new_keji":{
                group:["new_keji_count","new_keji_reset","new_keji_judge"],
                subSkill:{
                    reset:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:1,
                        silent:true,
                        content:function (){
                    player.storage.keji_type=[];
                    player.storage.keji_color=[];
                    player.storage.keji_suit=[];
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    count:{
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        content:function (){
                if(!player.storage.keji_type){
                    player.storage.keji_type=[];
                }
                if(!player.storage.keji_color){
                    player.storage.keji_color=[];
                }
                if(!player.storage.keji_suit){
                    player.storage.keji_suit=[];
                }
                for(var i=0;i<trigger.cards.length;i++){
                    player.storage.keji_type.add(get.type(trigger.cards[i],'trick'));
                    player.storage.keji_color.add(get.color(trigger.cards[i]));
                    player.storage.keji_suit.add(get.suit(trigger.cards[i]));
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    judge:{
                        audio:"keji",
                        forced:true,
                        trigger:{
                            player:"phaseDiscardBefore",
                        },
                        priority:99999,
                        filter:function (event,player){
        return !player.storage.keji_color||player.storage.keji_color.length<2;
    },
                        content:function (){
        player.addTempSkill('keji_add','phaseAfter');
    },
                        sub:true,
                    },
                },
            },
            "keji_add":{
                mod:{
                    maxHandcard:function (player,num){
            return num+4;
        },
                },
            },
            "new_mouduan":{
                trigger:{
                    player:"phaseEnd",
                },
                priority:2,
                audio:"qinxue",
                filter:function (event,player){
        if(player.storage.keji_suit&&player.storage.keji_suit.length>3) return true;
        if(player.storage.keji_type&&player.storage.keji_type.length>2) return true;
        return false;
    },
                content:function (){
        player.moveCard();
    },
            },
            "new_longdan":{
                group:["new_longdan_sha","new_longdan_shan","new_longdan_draw","new_longdan_shamiss","new_longdan_shanafter"],
                subSkill:{
                    shanafter:{
                        sub:true,
                        audio:"reyajiao",
                        trigger:{
                            player:"respond",
                        },
                        priority:1,
                        filter:function (event,player){
                return event.skill=='new_longdan_shan';
            },
                        direct:true,
                        content:function (){
                "step 0"
                player.chooseTarget("是否发动【龙胆】令一名其他角色回复1点体力？",function(card,player,target){
                    return target!=trigger.source&&target!=player&&target.isDamaged();
                }).set('ai',function(target){
                    return get.attitude(_status.event.player,target);
                });
                "step 1"
                if(result.bool&&result.targets&&result.targets.length){
                    player.line(result.targets[0],'green');
                    result.targets[0].recover();
                }
            },
                    },
                    shamiss:{
                        sub:true,
                        audio:"reyajiao",
                        trigger:{
                            player:"shaMiss",
                        },
                        direct:true,
                        filter:function (event,player){
                return event.skill=='new_longdan_sha';
            },
                        content:function (){
                "step 0"
            player.chooseTarget("是否发动【龙胆】对一名其他角色造成1点伤害？",function(card,player,target){
                return target!=trigger.target&&target!=player;
            }).set('ai',function(target){
                return -get.attitude(_status.event.player,target);
            });
                "step 1"
                if(result.bool&&result.targets&&result.targets.length){
                    player.line(result.targets[0],'green');
                    result.targets[0].damage();
                }
            },
                    },
                    draw:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        priority:2,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(!get.zhu(player,'shouyue')) return false;
                return event.skill=='new_longdan_sha'||event.skill=='new_longdan_shan';
            },
                        content:function (){
                player.draw();
                player.storage.fanghun2++;
            },
                        sub:true,
                    },
                    sha:{
                        audio:"longdan_sha",
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                            suit:"heart",
                            number:11,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":11,"name":"shan","cardid":"4014933310","_transform":"translateX(0px)","clone":{"name":"shan","suit":"heart","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":720},"timeout":702,"original":"h"}],
                        },
                        viewAsFilter:function (player){
                if(!player.countCards('h','shan')) return false;
            },
                        prompt:"将一张闪当杀使用或打出",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','shan')) return false;
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
                    shan:{
                        audio:"longdan_shan",
                        enable:["chooseToRespond"],
                        filterCard:{
                            name:"sha",
                        },
                        viewAs:{
                            name:"shan",
                            suit:"spade",
                            number:5,
                        },
                        prompt:"将一张杀当闪打出",
                        check:function (){return 1},
                        viewAsFilter:function (player){
                if(!player.countCards('h','sha')) return false;
            },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','sha')) return false;
                },
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                            },
                            order:4,
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                        },
                        sub:true,
                    },
                },
            },
            "new_paoxiao":{
                audio:"paoxiao",
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        return event.card.name=='sha'&&(get.cardCount({name:'sha'},player)==2);
    },
                forced:true,
                content:function (){
        player.draw();
    },
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
            "new_kurou":{
                audio:"rekurou",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                check:function (card){
        return 8-get.value(card);
    },
                position:"he",
                content:function (){
        player.loseHp();
        player.draw(3);
        player.addTempSkill('kurou_effect','phaseAfter');
    },
                ai:{
                    order:8,
                    result:{
                        player:function (player){
                if(player.hp<=2) return player.countCards('h')==0?1:0;
                if(player.countCards('h',{name:'sha',color:'red'})) return 1;
                return player.countCards('h')<=player.hp?1:0;
            },
                    },
                    effect:function (card,player,target){
            if(get.tag(card,'damage')){
                if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                return 1.2;
            }
            if(get.tag(card,'loseHp')){
                if(player.hp<=1) return;
                return [0,0];
            }
        },
                },
            },
            "kurou_effect":{
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+1;
        },
                },
            },
            "new_chuli":{
                audio:"chulao",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        for(var i=0;i<ui.selected.targets.length;i++){
            if(ui.selected.targets[i].group==target.group) return false;
        }
        return target.countCards('he')>0;
    },
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                filterCard:true,
                position:"he",
                selectTarget:[1,3],
                check:function (card){
        if(get.suit(card)=='spade') return 8-get.value(card);
        return 5-get.value(card);
    },
                content:function (){
        "step 0"
        if(num==0&&get.suit(cards[0])=='spade') player.draw();
        player.choosePlayerCard(targets[num],'he',true);
        "step 1"
        if(result.bool){
            if(result.links.length) targets[num].discard(result.links[0]);
            if(get.suit(result.links[0])=='spade') targets[num].draw();
        }
    },
                ai:{
                    result:{
                        target:-1,
                    },
                    threaten:1.2,
                    order:3,
                },
            },
            "new_jizhao":{
                derivation:"rerende",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationColor:"fire",
                init:function (player){
        player.storage.jizhao=false;
    },
                filter:function (event,player){
        if(player.storage.jizhao) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        player.awakenSkill('jizhao');
        player.storage.jizhao=true;
        var num=player.maxHp-player.countCards('h');
        if(num>0){
            player.draw(num);
        }
        'step 1'
        if(player.hp<2){
            player.recover(2-player.hp);
        }
        'step 2'
        player.removeSkill('shouyue');
        player.removeSkill('wuhujiangdaqi');
        player.addSkill('rerende');
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.storage.jizhao) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:10,
                    },
                },
                intro:{
                    content:"limited",
                },
            },
            "baka_hunshang":{
                skillAnimation:true,
                audio:"ext:新国战:2",
                derivation:["reyingzi","yinghun"],
                viceSkill:true,
                init:function (player){
        if(player.checkViceSkill('baka_hunshang')&&!player.viceChanged){
            player.removeMaxHp();
        }
    },
                trigger:{
                    player:"phaseBeginStart",
                },
                filter:function (event,player){
        return player.hp==1;
    },
                forced:true,
                priority:3,
                content:function (){
        player.addTempSkill('baka_yingzi','phaseAfter');
        player.addTempSkill('baka_yinghun','phaseAfter');
            if(!player.hasSkill('reyingzi')){
        player.addTempSkill('baka_add','phaseAfter');
    }
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            return 0.5;
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
            "baka_yinghun":{
                inherit:"gzyinghun",
                filter:function (event,player){
        return player.isDamaged();
    },
                priority:2,
                audio:"yinghun",
                audioname:["sunce"],
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('yinghun'),function(card,player,target){
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
            player.logSkill(event.name,result.targets);
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
                    threaten:function (player,target){
            if(target.hp==target.maxHp) return 0.5;
            if(target.hp==1) return 2;
            if(target.hp==2) return 1.5;
            return 0.5;
        },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(target.maxHp<=3) return;
                if(get.tag(card,'damage')){
                    if(target.hp==target.maxHp) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            "baka_yingzi":{
                inherit:"yingzi",
                audio:"ext:新国战:2",
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
            },
            "baka_add":{
                mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },
                },
            },
            "new_jiahe":{
                unique:true,
                forceunique:true,
                derivation:"yuanjiangfenghuotu",
                mark:true,
                global:["new_jiahe_put","new_jiahe_skill"],
                init:function (player){
        player.storage.yuanjiangfenghuotu=[];
    },
                ai:{
                    threaten:2,
                },
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&(event.card.name=='sha'||get.type(event.card,'trick'))&&player.storage.yuanjiangfenghuotu.length>0;
    },
                content:function (){
        'step 0'
        player.chooseCardButton('将一张“烽火”置入弃牌堆',player.storage.yuanjiangfenghuotu,true);
        'step 1'
        if(result.bool){
            player.$throw(result.links);
            var card=result.links[0];
            card.discard();
            player.storage.yuanjiangfenghuotu.remove(card);
            player.syncStorage('yuanjiangfenghuotu');
            player.updateMarks('yuanjiangfenghuotu');
        }
    },
            },
            "new_jiahe_skill":{
                trigger:{
                    player:"phaseBeginStart",
                },
                direct:true,
                filter:function (event,player){
        var zhu=get.zhu(player,'new_jiahe');
        if(zhu&&zhu.storage.yuanjiangfenghuotu&&zhu.storage.yuanjiangfenghuotu.length){
            return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        var zhu=get.zhu(player,'new_jiahe');
        event.num=zhu.storage.yuanjiangfenghuotu.length;
        'step 1'
        var list=[];
        if(event.num>=1&&!player.hasSkill('reyingzi')) list.push('reyingzi');
        if(event.num>=2&&!player.hasSkill('haoshi')) list.push('haoshi');
        if(event.num>=3&&!player.hasSkill('shelie')) list.push('shelie');
        if(event.num>=4&&!player.hasSkill('duoshi')) list.push('duoshi');
        if(!list.length){
            event.finish();
            return;
        }
        var prompt2='你可以获得下列一项技能直到回合结束';
        if(list.length>=5){
            if(event.done){
                prompt2+=' (2/2)';
            }
            else{
                prompt2+=' (1/2)';
            }
        }
        list.push('cancel2');
        player.chooseControl(list).set('prompt',get.translation('yuanjiangfenghuotu')).
        set('prompt2',prompt2).set('centerprompt2',true).set('ai',function(evt,player){
            var controls=_status.event.controls;
            if(controls.contains('haoshi')){
                var nh=player.countCards('h');
                if(player.hasSkill('reyingzi')||(player.hp==1&&player.hasSkill('baka_hunshang'))){
                    if(nh==0) return 'haoshi';
                }
                else{
                    if(nh<=1) return 'haoshi';
                }
            }
            if(controls.contains('shelie')){
                return 'shelie';
            }
            if(controls.contains('reyingzi')&&(player.hp!=1||!player.hasSkill('baka_hunshang'))){
                return 'reyingzi';
            }
            if(controls.contains('duoshi')){
                return 'duoshi';
            }
            return controls.randomGet();
        });
        'step 2'
        if(result.control!='cancel2'){
            player.addTempSkill(result.control);
            if(!event.done) player.logSkill('new_jiahe');
            game.log(player,'获得了技能','【'+get.translation(result.control)+'】');
            if(event.num>=5&&!event.done){
                event.done=true;
                event.goto(1);
            }
        }
    },
            },
            "new_jiahe_put":{
                enable:"phaseUse",
                filter:function (event,player){
        var zhu=get.zhu(player,'new_jiahe');
        if(zhu&&zhu.storage.yuanjiangfenghuotu){
            return player.countCards('he',{type:'equip'})>0;
        }
        return false;
    },
                filterCard:{
                    type:"equip",
                },
                position:"he",
                usable:1,
                check:function (card){
        var player=_status.event.player;
        var zhu=get.zhu(player,'new_jiahe');
        var num=7-get.value(card);
        if(get.position(card)=='h'){
            if(zhu.storage.yuanjiangfenghuotu>=5){
                return num-3;
            }
            return num+3;
        }
        else{
            if(zhu.storage.yuanjiangfenghuotu>=5&&!player.hasSkillTag('noe')){
                return num-5;
            }
        }
        return num;
    },
                discard:false,
                lose:true,
                prepare:function (cards,player){
        var zhu=get.zhu(player,'new_jiahe');
        player.$give(cards,zhu);
        player.line(zhu);
    },
                content:function (){
        var zhu=get.zhu(player,'new_jiahe');
        zhu.storage.yuanjiangfenghuotu.add(cards[0]);
        zhu.syncStorage('yuanjiangfenghuotu');
        zhu.updateMarks('yuanjiangfenghuotu');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "new_yiji":{
                audio:"yiji",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        "step 0"
        event.cards=get.cards(2);
        "step 1"
        if(event.cards.length>1){
            player.chooseCardButton('将“遗计”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
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
            "new_jieming":{
                audio:"jieming",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('new_jieming'),function(card,player,target){
            return target.countCards('h')<Math.min(target.maxHp,5);
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>2){
                return Math.min(5,target.maxHp)-target.countCards('h');
            }
            return att/3;
        });
        "step 1"
        if(result.bool){
            player.logSkill('new_jieming',result.targets);
            for(var i=0;i<result.targets.length;i++){
                result.targets[i].draw(Math.min(5,result.targets[i].maxHp)-result.targets[i].countCards('h'));
            }
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'damage')&&target.hp>1){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    var max=0;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])>0){
                            max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                        }
                    }
                    switch(max){
                        case 0:return 2;
                        case 1:return 1.5;
                        case 2:return [1,2];
                        default:return [0,max];
                    }
                }
                if((card.name=='tao'||card.name=='caoyao')&&
                    target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
            },
                    },
                },
            },
            "new_fangzhu":{
                audio:"fangzhu",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('new_fangzhu'),function(card,player,target){
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
            player.logSkill('new_fangzhu',result.targets);
            event.target=result.targets[0]
            event.target.chooseToDiscard().set('ai',function(card){
                var player=_status.event.player;
                if(player.isTurnedOver()) return -1;
                return (player.hp*player.hp)-get.value(card);
            }).set('dialog',['弃置一张手牌并失去一点体力；或选择不弃置，将武将牌翻面并摸牌。']);
        }
        else event.finish();
        "step 2"
        if(result.bool){
            event.target.loseHp();
        }
        else{
            event.target.draw(player.maxHp-player.hp);
            event.target.turnOver();
        
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
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
            "fengyin_main":{
                init:function (player,skill){
        var skills=lib.character[player.name1][3];
        for(var i=0;i<skills.length;i++){
            if(get.is.locked(skills[i])){
                skills.splice(i--,1);
            }
        }
        player.disableSkill(skill,skills);
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                marktext:"主",
                locked:true,
                mark:true,
                intro:{
                    content:"主武将牌上的全部非锁定技失效",
                },
            },
            "fengyin_vice":{
                init:function (player,skill){
        var skills=lib.character[player.name2][3];
        for(var i=0;i<skills.length;i++){
            if(get.is.locked(skills[i])){
                skills.splice(i--,1);
            }
        }
        player.disableSkill(skill,skills);
    },
                onremove:function (player,skill){
        player.enableSkill(skill);
    },
                locked:true,
                mark:true,
                marktext:"副",
                intro:{
                    content:"副武将牌上的全部非锁定技失效",
                },
            },
            "new_tieji":{
                audio:"retieji",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                logTarget:"target",
                content:function (){
        "step 0" 
        var target=trigger.target;
        var controls=[];
        if(get.zhu(player,'shouyue')){
            if(!target.isUnseen(0)) target.addTempSkill('fengyin_main');
            if(!target.isUnseen(1)) target.addTempSkill('fengyin_vice');
            event.goto(2);
        }
        if(!target.isUnseen(0)&&!target.hasSkill('fengyin_main')) controls.push("主将");
        if(!target.isUnseen(1)&&!target.hasSkill('fengyin_vice')) controls.push("副将");
        if(controls.length>0){
            if(controls.length==1) event._result={control:controls[0]};
            else{
                player.chooseControl(controls).set('ai',function(){
                    var choice='主将';
                    var skills=lib.character[target.name2][3];
                    for(var i=0;i<skills.length;i++){
                        var info=get.info(skills[i]);
                        if(info&&info.ai&&info.ai.maixie){
                            choice='副将';break;
                        }
                    }
                    return choice;
                }).set('prompt','请选择一个武将牌，令'+get.translation(target)+'该武将牌上的非锁定技全部失效。');
            }
        }
        else event.goto(2);
        "step 1"
        if(result.control){
            player.popup(result.control,'fire');
            var target=trigger.target;
            if(result.control=="主将") target.addTempSkill("fengyin_main");
            else target.addTempSkill("fengyin_vice");
        }
        "step 2"
        player.judge(function(){return 0});
        "step 3"
        var suit=get.suit(result.card);
        var target=trigger.target;
        var num=target.countCards('h','shan');
        target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
            return get.suit(card)==_status.event.suit;
        }).set('ai',function(card){
            var num=_status.event.num;
            if(num==0) return 0;
            if(card.name=='shan') return num>1?2:0;
            return 8-get.value(card);
        }).set('num',num).set('suit',suit);
        "step 4"
        if(!result.bool){
            trigger.directHit=true;
        }
    },
            },
            hmkyuanyu:{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.num<=0||!event.source) return false;
        var n1=player.getNext();
        var p1=player.getPrevious();
        if(event.source!=n1&&event.source!=p1) return true;
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return;
                if(player==target.getNext()||player==target.getPrevious()) return;
                var num=get.tag(card,'damage');
                if(num){
                    return 0;
                }
            },
                    },
                },
            },
            hmkguishu:{
                group:["hmkguishu_reset"],
                subSkill:{
                    reset:{
                        sub:true,
                        silent:true,
                        forced:true,
                        popup:false,
                        trigger:{
                            player:"phaseBefore",
                        },
                        content:function (){
                player.storage.hmkguishu=0;
            },
                    },
                },
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h',{suit:'spade'})>0;
    },
                init:function (player){
        player.storage.hmkguishu=0;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=['yuanjiao','zhibi'];
            if(player.storage.hmkguishu==1){
                list.remove('yuanjiao');
            }
            else if(player.storage.hmkguishu==2){
                list.remove('zhibi')
            }
            for(var i=0;i<list.length;i++){
                    list[i]=['锦囊','',list[i]];
            }
            return ui.create.dialog([list,'vcard']);
        },
                    filter:function (button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function (button){
            var player=_status.event.player;
            if(button.link=='yuanjiao'){
                return 3;
            }
            if(button.link=='zhibi'){
                if(player.countCards('h',{suit:'spade'})>2) return 1;
                return 0;
            }
        },
                    backup:function (links,player){
            return {
                filterCard:function (card,player){
                    return get.suit(card)=='spade';
                },
                position:"h",
                selectCard:1,
                popname:true,
                ai:function(card){
                    return 6-ai.get.value(card);
                },
                viewAs:{name:links[0][2]},
                onuse:function(result,player){
                    player.logSkill('hmkguishu');
                    if(result.card.name=='yuanjiao') player.storage.hmkguishu=1;
                    else player.storage.hmkguishu=2;
                },
            }
        },
                    prompt:function (links,player){
            return '将一张手牌当作'+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                return 2;
            },
                    },
                    threaten:1.6,
                },
            },
            "new_buqu":{
                audio:"buqu",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
        "step 0"
        event.card=get.cards()[0];
        if(player.storage.new_buqu==undefined) player.storage.new_buqu=[];
        player.storage.new_buqu.push(event.card);
        player.syncStorage('new_buqu');
        player.showCards(player.storage.new_buqu,'不屈')
        player.markSkill('new_buqu');
        "step 1"
        for(var i=0;i<player.storage.new_buqu.length-1;i++){
            if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.new_buqu[i])) return;
        }
        trigger.cancel();
        if(player.hp<=0){
            player.hp=1;
            player.update();
        }
    },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                delete player.storage.new_buqu;
            }
        },
                },
            },
            "_mingzhisuodingji":{
                mode:["guozhan"],
                enable:"phaseUse",
                filter:function (event,player){
        var bool=false;
        var skillm=lib.character[player.name1][3];
        var skillv=lib.character[player.name2][3];
        if(player.isUnseen(0)){
            for(var i=0;i<skillm.length;i++){
                if(get.is.locked(skillm[i])){
                    bool=true;
                }
            }
        }
        if(player.isUnseen(1)){
            for(var i=0;i<skillv.length;i++){
                if(get.is.locked(skillv[i])){
                    bool=true;
                }
            }
        }
        return bool;
    },
                popup:false,
                content:function (){
        "step 0"
        var choice=["取消"];
        var skillm=lib.character[player.name1][3];
        var skillv=lib.character[player.name2][3];
        if(player.isUnseen(0)){
            for(var i=0;i<skillm.length;i++){
                if(get.is.locked(skillm[i])&&!choice.contains('明置主将')){
                    choice.push("明置主将");
                }
            }
        }
        if(player.isUnseen(1)){
            for(var i=0;i<skillv.length;i++){
                if(get.is.locked(skillv[i])&&!choice.contains('明置副将')){
                    choice.push("明置副将");
                }
            }
        }
        if(choice.length==3) choice.push('全部明置')
        player.chooseControl(choice);
        "step 1"
        if(result.control){
            switch(result.control){
                case "取消":break;
                case "明置主将":player.showCharacter(0);break;
                case "明置副将":player.showCharacter(1);break;
                case "全部明置":player.showCharacter(1);break;
            }
        }
    },
                ai:{
                    order:11,
                    result:{
                        player:-99,
                    },
                },
            },
            "new_gzxuanhuo":{
                global:"new_gzxuanhuo_others",
                derivation:["wusheng","new_paoxiao","new_longdan","new_tieji","liegong","xinkuanggu"],
                ai:{
                    threaten:function (player,target){
            if(game.hasPlayer(function(current){
                return current!=target&&current.isFriendOf(target);
            })) return 2;
            return 0.5;
        },
                },
                subSkill:{
                    others:{
                        enable:"phaseUse",
                        usable:1,
                        prompt:"交给法正两张牌，然后选择并获得下列技能中的一项直到回合结束：“武圣”、“咆哮”、“龙胆”、“铁骑”、“烈弓”、“狂骨”。",
                        filter:function (event,player){
                return (!player.isUnseen()||player.hasTempFriend())&&game.hasPlayer(function(current){
                    return current!=player&&current.hasSkill('new_gzxuanhuo')&&(player.isFriendOf(current)||player.isTempFriendOf(current))&&player.countCards('he');
                })
            },
                        position:"he",
                        filterCard:true,
                        selectCard:2,
                        complexSelect:true,
                        complexCard:true,
                        check:function (card,player,target){
                if(card.name=='sha') return 2-get.value(card);
                if(get.position(card)=='h') return 8-get.value(card);
                return 6-get.value(card);
            },
                        filterTarget:function (card,player,target){return target!=player&&target.hasSkill('new_gzxuanhuo')},
                        discard:false,
                        content:function (){
                'step 0'
                target.gain(cards,player);
                player.$give(2,target);
                'step 1'
                var list=["wusheng","new_paoxiao","new_longdan","new_tieji","liegong","xinkuanggu"];
                for(var i=0;i<list.length;i++){
                    if(player.hasSkill(list[i])) list.remove(list[i--]);
                }
                if(!list.length) event.finish();
                event.skillai=function(){
                    if(list.contains("new_paoxiao")&&player.hasSha()) return "new_paoxiao";
                    else return list.randomGet();
                };
                if(event.isMine()){
                    var dialog=ui.create.dialog('forcebutton');
                    dialog.add('眩惑</br></br><div class="center text">选择并获得一项技能直到回合结束</div>');
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
                }
                else event._result=event.skillai();
                'step 2'
                _status.imchoosing=false;
                player.popup(result);
                player.addTempSkill(result,'phaseEnd');
                game.log(player,'获得了','【'+get.translation(result)+'】');
                game.delay();
            },
                        ai:{
                            order:function (){
                    return get.order({name:'sha'})+0.2;
                },
                            result:{
                                player:1,
                                target:2,
                            },
                        },
                        forceaudio:true,
                        audio:["xuanhuo",2],
                        sub:true,
                    },
                },
                audio:["xuanhuo",2],
            },
        },
        translate:{
            "xianqu_skill":"先驱",
            "xianqu_skill_info":"",
            "zhulianbihe_skill":"珠联璧合",
            "zhulianbihe_skill_info":"",
            "yinyang_skill":"阴阳鱼",
            "yinyang_skill_info":"",
            "zhulianbihe_skill_draw":"珠联•摸牌",
            "zhulianbihe_skill_draw_info":"",
            "zhulianbihe_skill_tao":"珠联•桃",
            "zhulianbihe_skill_tao_info":"",
            "yinyang_skill_draw":"阴阳鱼",
            "yinyang_skill_draw_info":"",
            "yinyang_skill_add":"阴阳鱼",
            "yinyang_skill_add_info":"",
            "yinyang_add":"阴阳鱼",
            "yinyang_add_info":"",
            aozhan:"鏖战",
            "aozhan_info":"◇锁定技，你的【桃】只能当做【杀】或【闪】使用或打出，不能用来回复体力。",
            "new_jushou":"据守",
            "new_jushou_info":"结束阶段，你可以摸X张牌（X为亮明势力数），然后弃置一张手牌，若以此法弃置的是装备牌，则改为你使用之。若X大于2，则你将武将牌叠置。",
            "new_duanliang":"断粮",
            "new_duanliang_info":"出牌阶段，你可以将一张黑色基本牌或黑色装备牌当做一张【兵粮寸断】使用。你使用【兵粮寸断】没有距离限制。若你对距离超过2的角色发动了“断粮”，则本回合不能再发动“断粮”。",
            "new_shushen":"淑慎",
            "new_shushen_info":"当你回复1点体力时，你可令一名其他角色摸一张牌。",
            "new_fenji":"奋激",
            "new_fenji_info":"一名角色的结束阶段，若其没有手牌，则你可以令其摸两张牌，然后你失去1点体力。",
            "new_luanji":"乱击",
            "new_luanji_info":"你可以将两张与你本回合以此法转化的花色均不相同的手牌当【万箭齐发】使用，然后当一名与你势力相同的角色因响应此牌而打出【闪】时，该角色摸一张牌",
            "new_huoshui":"倾城",
            "new_huoshui_info":"出牌阶段，你可以弃置一张黑色牌并选择一名武将牌均明置的其他角色，然后你暗置其一张武将牌。若此牌为装备牌，则你可以再选择一名角色并重复同样的操作。",
            "new_kongcheng":"空城",
            "new_kongcheng_info":"锁定技，若你没有手牌，1.当你成为【杀】或【决斗】的目标时，取消之；2.你的回合外，其他角色交给你的牌置于你的武将牌上，摸牌阶段你获得武将牌上的牌。",
            "new_keji":"克己",
            "new_keji_info":"锁定技，若你没有在出牌阶段内使用过颜色不同的牌，则你本回合手牌上限+4。",
            "keji_add":"克己",
            "keji_add_info":"",
            "new_mouduan":"谋断",
            "new_mouduan_info":"结束阶段，若你于本回合内使用过四种花色或三种类别的牌，则你可以移动场上的一张牌。",
            "new_longdan":"龙胆",
            "new_longdan_info":"你可以将【杀】当【闪】，【闪】当【杀】使用或打出。你发动龙胆时：若你的杀被【闪】抵消，则你可以对另一名角色造成1点伤害；若你的【闪】抵消了【杀】，则你可以令一名其他角色回复1点体力。（不能是【杀】的使用者）",
            "new_paoxiao":"咆哮",
            "new_paoxiao_info":"锁定技，你使用【杀】无数量限制；你在一回合内使用第二张【杀】时，摸一张牌。",
            "new_kurou":"苦肉",
            "new_kurou_info":"出牌阶段限一次，你可以弃置一张牌，然后失去1点体力并摸三张牌，本回合你可以多使用一张【杀】。",
            "kurou_effect":"苦肉效果",
            "kurou_effect_info":"",
            "new_chuli":"除疠",
            "new_chuli_info":"出牌阶段限一次，若你有牌，你可以选择至多三名势力各不相同或未确定势力的其他角色，你弃置你和这些角色的各一张牌。然后以此法弃置黑桃牌的角色各摸一张牌。",
            "new_jizhao":"激诏",
            "new_jizhao_info":"限定技。当你处于濒死状态时，你可以将手牌补至体力上限，体力回复至2点，失去技能“授钺”并获得技能“仁德”",
            "baka_hunshang":"魂殇",
            "baka_hunshang_info":"副将技，此武将牌减少半个阴阳鱼；准备阶段，若你的体力值不大于1，则你本回合获得“英姿”和“英魂”",
            "baka_yinghun":"孙策·英魂",
            "baka_yinghun_info":"准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值）",
            "baka_yingzi":"孙策·英姿",
            "baka_yingzi_info":"锁定技，摸牌阶段摸牌时，你额外摸一张牌；你的手牌上限不会因体力值的减少而减少。",
            "baka_add":"孙策·英姿",
            "baka_add_info":"",
            "new_jiahe":"嘉禾",
            "new_jiahe_info":"君主技，只要此武将牌处于明置状态，你便拥有“缘江烽火图”。",
            "new_jiahe_skill":"嘉禾",
            "new_jiahe_skill_info":"",
            "new_jiahe_put":"嘉禾",
            "new_jiahe_put_info":"出牌阶段限一次，你可以将一张装备牌置于“缘江烽火图”上，称之为“烽火”。",
            "new_yiji":"遗计",
            "new_yiji_info":"当你受到伤害后，你可以观看牌堆顶的两张牌，并将其交给任意角色",
            "new_jieming":"节命",
            "new_jieming_info":"当你受到伤害后，你可以令一名角色将手牌摸至X张（X为其体力上限且最多为5）。",
            "new_fangzhu":"放逐",
            "new_fangzhu_info":"当你受到伤害后，你可以令一名其他角色选择一项：摸X张牌并将武将牌叠置（X为你已损失的体力值）；弃置一张牌并失去1点体力。",
            "fengyin_main":"铁骑[主将]",
            "fengyin_main_info":"",
            "fengyin_vice":"铁骑[副将]",
            "fengyin_vice_info":"",
            "new_tieji":"铁骑",
            "new_tieji_info":"当你使用【杀】指定一个目标后，你可以令其本回合一张明置的武将牌的非锁定技失效，然后你进行判定，除非该角色弃置与结果花色相同的一张牌，否则不能使用【闪】。",
            hmkyuanyu:"远域",
            "hmkyuanyu_info":"锁定技，当你受到伤害时，若伤害来源与你的座次不相邻，防止此伤害。",
            hmkguishu:"鬼术",
            "hmkguishu_info":"出牌阶段，你可以将一张黑桃手牌当作【知己知彼】或【远交近攻】使用。若你本回合内已经发动过了“鬼术”，则你必须选择与上次不同的选项。",
            "new_buqu":"不屈",
            "new_buqu_info":"锁定技，在你死亡前，若你的体力值不大于0，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌的点数与你武将牌上已有的牌点数均不同，则你回复至1体力。",
            "_mingzhisuodingji":"亮将",
            "_mingzhisuodingji_info":"出牌阶段，你可以明置拥有“锁定技”的武将牌。",
            "new_gzxuanhuo":"眩惑",
            "new_gzxuanhuo_info":"与你势力相同的其他角色的出牌阶段限一次，其可以交给你两张牌。若如此做，其选择并获得下列技能中的一项直到回合结束：“武圣”、“咆哮”、“龙胆”、“铁骑”、“烈弓”、“狂骨”。",
        },
    },
    intro:"◇2019版新国战规则与武将改动扩展",
    author:"苏婆玛丽奥",
    diskURL:"",
    forumURL:"",
    version:"3.2",
},files:{"character":[],"card":[],"skill":[]}}})
