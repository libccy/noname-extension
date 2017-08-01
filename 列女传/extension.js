game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"列女传",content:function (config,pack){
    
    
    
    lib.config.lnzGXJZ;
game.saveConfig('lnzGXJZ',1);
lib.config.lnzGXJZ1=0;		
                if (config.lnz){
			for (var i in lib.characterPack['lnz']) {	
			if (lib.character[i][4].indexOf("forbidai")<0){
			lib.character[i][4].push("forbidai");
			}			
		}					
				};	    
    
},precontent:function (lnz){
       if(lnz.enable){		
            game.import('character',function(){
                var lnz = {
                    name: 'lnz',
                    connect:true,				
                    
                    character:{
                         "ln_hyy":["female","shu",3,["LX","dc","机巧"],["des:诸葛亮之妻，诸葛瞻之母，有奇才，上通天文，下察地理，精通兵法，近乎诸略无所不晓，善于发明制造，传授诸葛亮很多学识，在诸葛亮病逝之后不久也随之仙逝，死前以“忠孝”勉励其子诸葛瞻；"]],
            "ln_nw":["female","G",4,["SD","SN"],["des:上古传说中的人物，华胥氏之女，人首蛇身，有圣德(五行属土德)，与伏羲兄妹通婚，创造婚姻制度，结束了只知其母不知其父的原始社会，有补天造人、治水平乱等的传说，和伏羲一起治理族人，制造乐器等物品，对后世产生了极大的影响（由于女娲伏羲属于一家人，故而“三皇”中只选取其中一人为代表）；"]],
            "ln_ehny":["female","SW",4,["DX","JF"],["des:娥皇女英，又称皇英。长曰娥皇，次曰女英，是中国古代神话传说中帝尧的两个女儿，姐妹同嫁帝舜为妻。舜父顽，母嚣，弟劣，曾多次欲置舜于死地，终因娥皇女英助之而脱险。舜继尧位，娥皇女英之其妃，后舜至南方巡视，死于苍梧。二妃往寻，得知舜帝已死，埋在九嶷山下，抱竹痛哭，泪染青竹，泪尽而死，因称“潇湘竹”或“湘妃竹”。自秦汉时起，湘江之神湘君与湘夫人的爱情神话，被演变成舜与娥皇、女英的传说。后世因附会称二女为“湘夫人”。"]],
            "ln_tss":["female","SW",4,["HX","启夏"],["des:大禹之妻，传说为狐仙化身，协助大禹，在禹治水之时，将内事管理得条条有理，特别是对于夏启的管教。民间流传许多关于夏禹和涂山氏的美好的爱情故事。"]],
            "ln_fh":["female","SW",4,["LN_JG"],["des:武丁最宠幸的妃子，也是中国历史上最早最杰出的女将，能征善战而且精于政务，文武全才，深得武丁宠爱，死后更是以极其崇高的礼节厚葬；"]],
            "ln_qj":["female","qi",3,["LN_GZ","LN_DY"],["des:齐国奇女子，姜小白堂妹，嫁给晋文公为妻，协助晋文公登上国君之位，素有国姿，善于舞乐等文艺之才，为人又深明大义，称得上一代奇女子，姜奇得知晋文公沉迷于自己的美色之中，便密谋将之送回晋国，并且杀死了可能泄密的婢女，然后想办法将晋文公送回了晋国，晋文公后来成为“五霸之一”；"]],
            "ln_fj":["female","chu",3,["明辨","jinxian"],["des:樊姬，楚庄王的王后。樊姬为了劝阻楚庄王不要因打猎，玩物丧志，就不吃禽兽肉，以此来打动楚庄王。而楚庄王从此改过自新。张说曾说：“楚国所以霸，樊姬有力。”，除此之外，樊姬还有进贤之功、知人之明，孙叔敖可以说是她间接引进的。"]],
            "ln_mm":["female","qi",3,["严母","惟德"],["des:叔敖母，即孙叔敖之母，深知天道。叔敖见蛇，两头岐首，杀而埋之，泣恐不及。母曰阴德，不死必寿。孟母，仉氏，生卒年不可考，孟子的母亲。战国时人，以教子有方著称。孟子三岁丧父，靠母亲教养长大成人，并成为后世儒家追慕向往的亚圣，孟母也留下了“孟母三迁”、“断机教子”等教子佳话。"]],
            "ln_dmsj":["female","chu",3,["预谚","鉴师","识天"],["des:邓曼，曼姓，邓城（今湖北襄阳西北）人，春秋时邓侯之女，楚武王夫人。邓曼为人贤惠聪颖，常对楚武王的某些活动进行劝谋。生子熊赀，后为楚文王。羊舌叔姬，晋国大夫羊舌职之妻，叔向之母，以慧著称，多次准确预言其家人命运。"]],
            "ln_djj":["female","lu",3,["LN_YH","LN_XJ","方绩"],["des:敬姜，齐侯之女，姜姓，谥曰敬，是鲁国大夫公父文伯的母亲。与孔子同时。世称贤母敬姜的《论劳逸》是春秋战国时期家训的代表之作。其事迹散见於《国语》、《列女传》、《韩诗外传》、《礼记·檀弓》。定姜，姜姓，定是跟从丈夫的谥号，春秋时期卫国国君卫定公的夫人，卫献公嫡母。"]],
            "ln_jhwj":["female","lu",3,["秩秩","罪谏","救卫"],["des:姜后，是西周第十一代天子周宣王的王后，齐国君主之女。她因为周宣王早卧晏起，于是在永巷待罪，将发簪耳环脱下，称君王耽色，源罪于自己。周宣王感动，励精图治，才有宣王中兴。齐桓卫姬，忠款诚信。公好淫乐，姬为修身。望色请罪，桓公加焉，厥使治内，立为夫人，曾经阻止齐桓公攻卫，并且颇有谏言。"]],
            "ln_jtxn":["female","SW",4,["LN_SN"],["des:上古传说人物，鸟身人首。传说曾经在黄帝苦战蚩尤不胜之时，传授黄帝兵法，最终黄帝终于打败了蚩尤。"]],
             "ln_xs":["female","chu",3,['LN_LY','LN_XS'],["des:春秋时期美女，为四大美女之一，曾经协助越王勾践，以美人计迷惑夫差，最终导致夫差败亡，吴国被灭，勾践一雪前耻，而且传说西施德才兼备，但最后的归宿不得而知，《墨子》中称其被丢进河中溺水而亡。"]]},
   
                             
                    
                    skill:{
                        LN_XS:{
                            enable:"phaseUse",
    usable:1,
    position:"he",
    filterCard:true,
    selectCard:[2,Infinity],
    prompt:"弃置任意张但不小于二的牌并指定一名男性角色，令之摸取等量的牌",
    check:function (card){
        return 6-get.value(card)
    },
    content:function (){
        'step 0'
        player.chooseTarget(get.prompt('LN_XS'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_XS',result.targets);
            var chat=['为了江山社稷！','一切交给我吧！'].randomGet()
                  player.say(chat)
        
        result.targets[0].draw(cards.length);
        };
        
    },
    ai:{
        order:1,
        result:{
            player:1,
        },
        threaten:1.5,
    },
                            
                        },
                        LN_LY:{
                            trigger:{
player:"phaseDrawBegin",
},
content:function (){
    player.draw();
    var chat=['吾必尽力而行！'].randomGet()
                  player.say(chat)
if(player.maxHp>player.hp)player.draw();    

},
                            mod:{
        maxHandcard:function (player,num){
            return num+=game.countPlayer(function(current){
            return current!=player&&current.sex=='male';
        });
        },
    },
                            
                        },
                             LX:{
                audio:"ext:列女传:2",
                audioname:["jianyong"],
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
        player.draw();
        if(player.num('e')>1)player.draw();
        if(player.num('e')>0)player.addTempSkill('qicai');
        var chat=['不竭如江河，循环如日月——《孙武兵法》'].randomGet()
                  player.say(chat)
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
                mod:{
                    maxHandcard:function (player,num){
    return num+=player.num('e');
        },
                },
            },
            dc:{
                audio:"kanpo1",
                enable:"chooseToUse",
                position:"hej",
                filterCard:function (card){
        return get.color(card)=='black'||get.color(card)=='red';
    },
                viewAsFilter:function (player){
        return player.num('hej',{color:['black','red']})>0;
    },
                viewAs:{
                    name:"wuxie",
                    suit:"club",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":12,"name":"sha","cardid":"6804275322","_transform":"translateX(0px)","clone":{"name":"sha","suit":"club","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":2065},"timeout":1889,"original":"h"}],
                },
                prompt:"将一张牌当无懈可击使用",
                check:function (card){return 8-ai.get.value(card)},
                threaten:1.2,
                ai:{
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
            "机巧":{
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.player!=player&&player.num('e')>0&&player.num('h');
    },
                content:function (){
        'step 0'
        if(player.hp>0){
            if(player.hp>0){
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
        }
        'step 1'
        if(!result.bool){
            event.finish();
            return;
        }
        player.line2(result.targets);
        event.targets=result.targets;
        player.chooseToDiscard('h',true)
        'step 2'
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
        'step 3'
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
            SD:{
                trigger:{
                    player:["phaseEnd","phaseBegin"],
                },
                frequent:true,
                content:function (){        
          var n=[1,2,3,4].randomGet();
            if(n==1) player.turnOver();
            if(n==2) player.damage();
            if(n==3) player.recover(); 
            if(n==4) player.draw(2);
        var chat=['地势坤，君子以厚德载物——《周易》'].randomGet()
                  player.say(chat);
    },
                group:["SD_SD1","SD_SD2","SD_SD3"],
                subSkill:{
                    "SD1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('SD'),function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('SD',result.targets);
            result.targets[0].damage();
            player.draw(player.maxHp-player.hp);
            var chat=['犯吾领地者，定教尔等伤痕累累！'].randomGet()
                  player.say(chat);
            
        };
    
    
    

},
                        sub:true,
                    },
                    "SD2":{
                        trigger:{
                            player:"recoverAfter",
                        },
                        forced:true,
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('SD'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('SD',result.targets);
            result.targets[0].draw(2);
            player.draw();
            var chat=['四海一家！'].randomGet()
                  player.say(chat);
        };        
        
},
                        sub:true,
                    },
                    "SD3":{
                        trigger:{
                            player:"turnOverAfter",
                        },
                        forced:true,
                        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('SD'),function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('SD',result.targets);
            result.targets[0].turnOver();
              
            var chat=['平四极，破八荒！'].randomGet()
                  player.say(chat);
        };
    
    
    
    

},
                        sub:true,
                    },
                },
            },
            DX:{
                trigger:{
                    player:"turnOverBefore",
                },
                forced:true,
                content:function (){
trigger.untrigger();
trigger.finish();
player.draw(2);
var chat=['圣王重德，不为物扰！'].randomGet()
      player.say(chat);},
                ai:{
                    noturnOver:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'turnOver')) return [0,0];
            },
                    },
                },
                group:"DX_DX1",
                subSkill:{
                    "DX1":{
                        trigger:{
                            player:"loseHpBefore",
                        },
                        forced:true,
                        unique:true,
                        content:function (){
        trigger.untrigger();
        trigger.finish();
        player.draw(2);        
    },
                        ai:{
                            effect:{
                                target:function (card){
                if(get.tag(card,'loseHp')){
                    return [0,2];
                }
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            JF:{
                trigger:{
                    global:"damageEnd",
                },
                frequent:true,
                filterTarget:function (card,player,target){
        return target.sex=='male'&&player!=target;
    },
                checkx:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        return att1>0&&att2<=0;
    },
                filter:function (event,player){
        return player.num('hej')>0&&event.player.hp>0;
    },
                content:function (){
         "step 0"
        var next=player.chooseToDiscard('hej',get.prompt('JF'));
        var check=lib.skill.JF.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('logSkill','JF');
        next.set('goon',check);
        "step 1"
        if(result.bool){
            trigger.player.judge();
        }
        else{
            event.finish();
        }
        "step 2"
        switch(get.suit(result.card)){
            case 'heart':trigger.player.changeHujia();trigger.player.draw();break;
            case 'diamond':trigger.player.draw(2);trigger.player.chooseToDiscard('hej',true); break;
            case 'club':player.loseHp();break;
            case 'spade':player.turnOver();break;
        }
    },
                ai:{
                    expose:0.3,
                },
            },
            SN:{
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:"epic",
                init:function (player){
        player.storage.SN=false;
    },
                filter:function (event,player){
        if(event.type!='dying') return false;
        if(player!=event.dying) return false;
        if(player.storage.SN) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        return player!=target;
       
    },
                content:function (){
        "step 0"
        player.awakenSkill('SN');
        player.recover(player.maxHp-player.hp);
        player.storage.SN=true;
        "step 1"
        player.draw(2);
        player.insertPhase();
        "step 2"
        target.damage();
         target.turnOver();
        // if(lib.config.mode=='identity'){
        //     player.node.identity.style.backgroundColor=get.translation('weiColor');
        //     player.group='wei';
        // }
    },
                ai:{
                    skillTagFilter:function (player){
            if(player.storage.SN) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:4,
                        target:function (player,target){
                if(target.hp==target.maxHp) return 2;
                return 4;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.SN) return 0.8;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            HX:{
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
        return _status.currentPhase!=player;
    },
                content:function (){
     player.draw()
    var chat=['本仙暂时放你一马！'].randomGet()
                  player.say(chat)},
                ai:{
                    threaten:1.8,
                },
            },
            "启夏":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('启夏'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('启夏',result.targets);
            result.targets[0].draw(player.hp);
            var chat=['夫君放心，启儿交于我！'].randomGet()
                  player.say(chat);
        };
    

    
    
    
},
            },
            "LN_JG":{
                trigger:{
                    player:"phaseBefore",
                },
                direct:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        "step 0"
        player.chooseControl('①','②','cancel2',function(){
              var player=_status.event.player;
            if(player.countCards('h')>3&&player.countCards('h','sha')>1){
                return '①';
            }
            if(player.countCards('h','sha')>2&&player.countCards('h')>2){
                return '①';
            }
            if(player.hp-player.countCards('h')>1){
                return '②';
            }
            return 'cancel2';
            
            });
          
        "step 1"
        if(result.control=='①'){
            player.loseHp();
            player.addTempSkill('LN_ZF','phaseEnd');
            player.logSkill('LN_JG');
            var chat=['见识见识我大商的力量吧！'].randomGet()
                  player.say(chat);
        }
        else if(result.control=='②'){
            player.recover();
            player.addTempSkill('LN_LZ','phaseEnd');
            player.logSkill('LN_JG');
            var chat=['养民生息，备战待敌！'].randomGet()
                  player.say(chat);
        }
    },
            },
            "LN_ZF":{
                group:["LN_ZF_1","LN_ZF_2"],
                subSkill:{
                    "1":{
                        enable:"phaseUse",
                        usable:1,
                        filterCard:true,
                        position:"h",
                        viewAs:{
                            name:"sha",
                            suit:"diamond",
                            number:7,
                            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":7,"name":"shan","cardid":"4456236267","_transform":"translateX(336px)","clone":{"name":"shan","suit":"diamond","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":622},"timeout":513,"original":"h"}],
                        },
                        ai:{
                            wuxie:function (target,card,player,viewer){
                    if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                        if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                    }
                },
                            basic:{
                                order:9,
                                useful:1,
                                value:5,
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
                            order:function (){
                    if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
                    return 3;
                },
                        },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event){
return event.card&&(event.card.name=='sha')&&
event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
},
                        forced:true,
                        content:function (){
                player.draw();
trigger.num+=1;
                var chat=['臣服于大商的力量之下吧！'].randomGet()
                  player.say(chat);
},
                        sub:true,
                    },
                },
            },
            "LN_LZ":{
                trigger:{
                    player:["phaseUseBefore","phaseUseEnd"],
                },
                content:function (){
    player.draw();
    var chat=['军械武斗，治民在前！'].randomGet()
                  player.say(chat);
    
    

},
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return 0;
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
            "LN_GZ":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.player.sex=='male';
    },
                content:function (){
    trigger.num++
    player.draw();
    var chat=['汝之不义，必反于汝！','窈窕淑女，君子好逑——《诗经》','英雄难过美人关！'].randomGet()
                  player.say(chat);
},
            },
            "LN_DY":{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                filterTarget:function (card,player,target){
        return target.sex=='male'&&player!=target;
    },
                content:function (){
            'step 0'
        player.chooseTarget(get.prompt('LN_DY'),function(card,player,target){
            return target!=player&&target.sex=='male';
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_DY',result.targets);
            result.targets[0].draw();
            result.targets[0].recover();
            player.draw();
            var chat=['大业为重，切勿以我为虑！','夫君，请回晋国吧！'].randomGet()
                  player.say(chat)
        };


},
            },
            "LN_YH":{
                trigger:{
                    global:"shaBegin",
                },
                filter:function (event,player){
        return player.num('hej')>0;
    },
                content:function (){
         'step 0'
        player.chooseTarget(get.prompt('LN_YH'),function(card,player,target){
            return target==trigger.target;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_YH',result.targets);
            result.targets[0].draw();             
            var chat=['虽恶之，不犹于亡乎？——《列女传》',].randomGet()
                  player.say(chat)
        };
    
        
 
    
    
    

},
            },
            "LN_XJ":{
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.source!=player&&event.source.num('hej')>0;
    },
                content:function (){
             'step 0'
        player.chooseTarget(get.prompt('LN_XJ'),function(card,player,target){
            return target==trigger.source;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('LN_XJ',result.targets);            
            result.targets[0].chooseToDiscard(1,'hej',true)
            result.targets[0].draw()
        
            var chat=['画者，所以均不均，服不服也——《列女传》','幅者，所以正曲枉也——《列女传》'].randomGet()
                  player.say(chat)
        };
        
    
},
            },
            "方绩":{
                trigger:{
                    player:"recoverAfter",
                },
                filter:function (event,player){
        return player.num('hej')>player.hp;
    },
                content:function (){
    
         'step 0'
        player.chooseTarget(get.prompt('方绩'),function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('方绩',result.targets);            
            result.targets[0].recover();
            player.draw();
            var chat=['明而动，晦而休——《列女传》'].randomGet()
                  player.say(chat)
        };
},
            },
            "惟德":{
                trigger:{
                    player:"shaBegin",
                    target:"shaBegin",
                },
                check:function (){return 1},
                content:function (){
        var card=get.cardPile(function(card){
            return get.subtype(card)=='equip2';
        });
        if(card){
            player.gain(card,'gain2');
            var chat=['皇天无亲，惟德是辅——《列女传》'].randomGet()
          player.say(chat);
            game.log(player,'从牌堆获得了',card);
        }
    },
                ai:{
                    order:function (){
            return lib.card.sha.ai.order-1;
        },
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
            if(player.num('e')>0) return num+1;
        },
                },
            },
            "严母":{
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function (event,player){
        return player.num('h')>player.hp;
    },
                content:function (){
      'step 0'
        player.chooseTarget(get.prompt('严母'),function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('严母',result.targets);            
            result.targets[0].skip('phaseDraw');            
            var chat=['此非吾子之居所也——《列女传》'].randomGet()
                  player.say(chat)
        };


},
                ai:{
                    expose:0.2,
                },
            },
            "预谚":{
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event,player){
        return event.player!=player&&player.num('h')>0;
    },
                content:function (){
         "step 0"
        var next=player.chooseToDiscard('he',get.prompt('预谚'));
        var check=lib.skill.beige.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('logSkill','预谚');
        next.set('goon',check);
        "step 1"
        if(result.bool){
            trigger.player.judge();
              
            var chat=['有奇福者，必有奇祸——《列女传》','有甚美者，必有甚恶——《列女传》'].randomGet()
                  player.say(chat)
        }
        
        else{
            event.finish();
        }
        "step 2"
        switch(get.suit(result.card)){
            case 'heart':trigger.player.draw();player.draw();break;
            case 'diamond':if(trigger.player.hujia<1)trigger.player.changeHujia();
                if(trigger.player.hujia>0)trigger.player.draw();break;
            case 'club':trigger.player.chooseToDiscard('he',1,true);break;
            case 'spade':if(trigger.player.hujia>0)trigger.player.changeHujia(-1);
                         if(trigger.player.hujia<1)trigger.player.chooseToDiscard(1,'he',true);break;
        }
    },
                ai:{
                    expose:0.3,
                },
            },
            "鉴师":{
                trigger:{
                    player:"phaseBefore",
                },
                filter:function (player){
        var num=0;
        for(var i=0;i<game.players.length;i++){
            num+=game.players[i].hujia;
        }
        if(num>0) return true;
        return false;
    },
                filterTarget:function (card,player,target){
        return target.hujia>0&&player!=target;
    },
                content:function (){
              'step 0'
        player.chooseTarget(get.prompt('鉴师'),[1,2],function(card,player,target){
            return target!=player&&target.hujia>0;
            
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
           
        })
        'step 1'
          if(result.bool){            
            for(var i=0;i<result.targets.length;i++){                                        
            player.logSkill('鉴师',result.targets);
            player.draw(2)
            result.targets[i].changeHujia(-1);
            result.targets[i].draw(2);             
            var chat=['举趾高，心不固也——《列女传》','莫敖必败——《列女传》'].randomGet()
                  player.say(chat)
        };}
        
          
  
                  
              
          

 

    
      
    
},
            },
            "识天":{
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (player){
        var num=0;
        for(var i=0;i<game.players.length;i++){
            num+=game.players[i].hujia;
        }
        if(num>0) return true;
        return false;
    },
                content:function (){
      'step 0'
        player.chooseTarget(get.prompt('识天'),[1,2],function(card,player,target){
            return target!=player&&target.hujia>0;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
            
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                            
           
           player.logSkill('识天',result.targets);            
            result.targets[0].changeHujia(-1);
            result.targets[0].loseHp();
            result.targets[0].chooseToDiscard(2,'h',true)
            if(player.maxHp>player.hp)player.draw(2);
            var chat=['物盛必衰，日中必移——《列女传》','若王薨，国之福也——《列女传》'].randomGet()
                  player.say(chat)
        };};
          
                                
                                                                        
         
    
     
           
        
    
    
    
    
    
    
    
    
    
},
            },
            "秩秩":{
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
     'step 0'
        player.chooseTarget(get.prompt('秩秩'),[1,Infinity],function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('秩秩',result.targets);            
            result.targets[i].draw()            
            var chat=['威仪抑抑，德音秩秩——《诗经》'].randomGet()
                  player.say(chat)
        };};
          
    
    
    
    
    





},
            },
            "罪谏":{
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
     'step 0'
        player.chooseTarget(get.prompt('罪谏'),function(card,player,target){
            return target!=player&&target.num('j')>0;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
          if(result.bool){                                                          
           player.logSkill('识天',result.targets);                       
              result.targets[0].chooseToDiscard(1,'j',true)
              result.targets[0].draw(player.hp);
              result.targets[0].phaseUse();
            var chat=['好奢穷欲，乱之所兴，请妾之罪——《列女传》'].randomGet()
                  player.say(chat)
        };
          
    
    

    
    
    
    
    
    
    
    
    
},
            },
            "救卫":{
                trigger:{
                    global:"dying",
                },
                filter:function (event,player){
        return event.player.hp<=0&&player.num('h')>0;
    },
                content:function (){
        'step 0'
     player.chooseToDiscard(player.num('h'),'h',true)   
     var chat=['卫何罪之有？','若要伐卫，就请先惩治我吧！'].randomGet()
                  player.say(chat);
        'step 1'
        trigger.player.recover();
        trigger.player.changeHujia();
        if(trigger.player!=player)player.changeHujia();
         trigger.finish();

},
                ai:{
                    expose:0.2,
                },
            },
            "明辨":{
                trigger:{
                    global:"drawAfter",
                },
                filter:function (event,player){
        return event.player.sex=='male'&&event.result&&event.result.length==1&&event.player!=player&&_status.currentPhase!=player;
    },
                content:function (){
          "step 0"
        player.chooseControl('①','②',function(){
              
            
            if(player.countCards('h')<3){
                return '②';
            }
            if(player.countCards('h','shan')<1){
                return '②';
            }
            if(player.countCards('he')>3){
                return '①';
            }
            return 'cancel2';
            })                 
        "step 1"
        if(result.control=='①'){
         player.discardPlayerCard('he',trigger.player,true);             
           player.logSkill('明辨');
            var chat=['知贤不进，是不忠——《列女传》'].randomGet()
                  player.say(chat);
        }
        else if(result.control=='②'){          
          player.gainPlayerCard(trigger.player,1,'he',true)
          player.logSkill('明辨');
            var chat=['不知其贤，是不智——《列女传》'].randomGet()
                  player.say(chat);
        }
    
    

        
        
        
        
        
        
        
        
        
        
        
},
            },
            jinxian:{
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        return event.player.sex=='male'&&event.player.hp>0;
    },
                checkx:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        return att1>0&&att2<=0;
    },
                content:function (){
          "step 0"              
        player.chooseControl('①','②','cancel2',function(){ 
            var attitude=get.attitude(player,trigger.player)
            if(trigger.player.countCards('h')<5){
                return '①';
            }
            if(trigger.source.countCards('he')>3){
                return '②';
            }
            if(trigger.player.countCards('h')>0){
                return '①';
            }
            return 'cancel2';
            
            })          
        "step 1"
        if(result.control=='①'){
           trigger.player.draw(); 
            if(trigger.player.num('j')>0)trigger.player.chooseToDiscard(1,'j',true)
           trigger.player.logSkill('jinxian');
            var chat=['虞丘贤则贤矣，未忠也——《列女传》'].randomGet()
                  player.say(chat);
        }
        else if(result.control=='②'){          
            trigger.player.gainPlayerCard(trigger.source,1,'he',true)
           trigger.player.logSkill('jinxian');
            var chat=['堂上兼女，所以观人能也——《列女传》'].randomGet()
                  player.say(chat);
        }
    
    
    
    
    
    
    
    
    
    
    
 
        
        
        
        
        
        


},
                ai:{
                    expose:0.3,
                },
            },
            "LN_SN":{
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
    return player.hp>0;    },
                content:function (){
    'step 0'    
    player.draw();
    player.changeHujia(-99);
        var chat=['吾乃玄女也——《黄帝问玄女兵法》'].randomGet()
                  player.say(chat)
    'step 1'
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
            player.addTempSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】');
           'step 2'
           var skill=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skill.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var links=skill.randomGet();                  
        player.addTempSkill(links);                             
           game.log(player,'获得技能','【'+get.translation(links)+'】');                                                                                                
        
},
                group:"LN_SN_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        content:function (){
    var pl=player
    pl.changeHujia()
    var chat=['万战万胜，万隐万匿——《黄帝问玄女兵法》'].randomGet()
                  player.say(chat)
    
},
                        sub:true,
                    },
                },
            }},
                    translate:{  
                           G:"古",
            GColor:"#000000",
            SW:"王",
            SWColor:"#000000",
            Han:"汉",
            HanColor:"#000000",
            lu:"鲁",
            luColor:"#000000",
            qin:"秦",
            qinColor:"#000000",
            chu:"楚",
            chuColor:"#A67D3D",
            qi:"齐",
            qiColor:"#871F78",
            yan:"燕",
            yanColor:"#007FFF",
            zhao:"赵",
            zhaoColor:"#42426F",
            wei:"魏",
            weiColor:"#FF0000",
            han:"韩",
            hanColor:"#32CD32",
            "ln_hyy":"黄月英",
            "ln_nw":"女娲",
            "ln_ehny":"娥皇女英",
            "ln_tss":"涂山氏",
            "ln_fh":"妇好",
            "ln_qj":"齐姜",
            "ln_fj":"樊姬",
            "ln_mm":"孟母&叔敖母",
            "ln_dmsj":"邓曼&叔姬",
            "ln_djj":"定姜&敬姜",
            "ln_jhwj":"姜后&卫姬",
            "ln_jtxn":"九天玄女",
                        'ln_xs':'西施',
                        'LN_LY':'落雁',
                        'LN_LY_info':'锁定技：场上每有一名男性角色，你的手牌上限便加一。当你的摸牌阶段开始时，你可以摸取一张牌并且若你已受伤，则额外多摸取一张牌。',
                        'LN_XS':'献身',
                        'LN_XS_info':"出牌阶段限一次，你可以弃置任意张牌（至少为二），然后令一名男性角色摸取等量的牌",
                        LX:"灵心",
            "LX_info":"每当你使用一张非转化的普通锦囊牌，可以摸一张牌，且若你的装备区内有牌，你获得技能【奇才】到回合结束，若你装备区内的牌不小于2，额外多摸取一张牌。锁定技：你的手牌上限加x，x为你装备区内的牌。",
            dc:"洞察",
            "dc_info":"在你拥有手牌或者区域内有牌时，你可以将你的任意一张牌当【无懈可击】使用。",
            "机巧":"机巧",
            "机巧_info":"每当一名其他角色的回合结束时，若你的装备区和手中有牌，则你可以选择两名角色，将其中一名的角色区域内的牌移动到另一名的相应区域内，然后你弃置一张手牌。",
            SD:"圣德",
            "SD_info":"<font color=#F0F>被动技能</font> :每当你回合开始或结束时，你随机将你的武将牌翻面或受到一点伤害或恢复一点体力或摸取两张牌。<font color=#F0F>平治</font> ：每当你武将牌翻面后，你可以选择一名其他角色，令之将武将牌翻面。<font color=#F0F>神音</font> :当你恢复体力后，可以选择一名其他角色，令之摸取两张牌然后你摸取一张牌。<font color=#F0F>补天</font> :当你受到伤害后，你摸取等同于已损失体力值的牌并指定一名其他角色，令之受到一点伤害。",
            DX:"德馨",
            "DX_info":"当你的武将牌将要被翻面时，你防止之，并且摸取两张牌。每当你将要体力流失时，你防止之，改为令你摸取两张牌。",
            JF:"鉴夫",
            "JF_info":"每当场上有角色受到伤害后，若你区域里有牌以及其未死亡，那么你可以弃置一张牌，令该名角色进行一次判定，若为♠，你将武将牌翻面，若为♣，你受到一点体力流失，若为♥，目标角色摸取一张牌并且获得一层护甲，若为♦，目标角色摸取两张牌再弃置区域内的一张牌。",
            SN:"圣女",
            "SN_info":"限定技，当你进入濒死状态时，可以指定一名其他角色，令之受到伤害一点以及翻面，然后你上升体力值至上限并摸两张牌，并且在当前游戏回合结束后，你开始一个新的回合。",
            HX:"狐仙",
            "HX_info":"当你于回合外失去牌后，摸取一张牌。",
            "启夏":"启夏",
            "启夏_info":"当你受到伤害后，可以令一名其他角色摸取等同于你当前体力值的牌。",
            "LN_JG":"巾帼",
            "LN_JG_info":"在你的回合开始前，你可以选择一项：①：自损体力一点，获得技能【征伐】到回合结束。②：恢复一点体力，获得技能【理政】到回合结束时。",
            "LN_ZF":"征伐",
            "LN_ZF_info":"出牌阶段限一次，你可以将一张手牌当【杀】使用。你使用的【杀】造成的伤害加一且当你如此造成伤害后，摸取一张牌。",
            "LN_LZ":"理政",
            "LN_LZ_info":"锁定技：出牌阶段，你使用[杀]次数为零。你可以在出牌阶段开始前和结束时各摸取一张牌。",
            "LN_GZ":"国姿",
            "LN_GZ_info":"当一名男性角色受到伤害时，若伤害来源为你，那么该伤害加一，且你摸取一张牌。",
            "LN_DY":"大义",
            "LN_DY_info":"每当你受到伤害后，你可以指定一名其他男性角色，令之回复体力一点以及同你共同摸取一张牌。",
            "LN_YH":"远患",
            "LN_YH_info":"每当场上有角色成为【杀】的目标时，若你有牌，那么你可以令之摸取一张牌。",
            "LN_XJ":"训谏",
            "LN_XJ_info":"每当场上有一名其他角色以【杀】造成伤害时，若其有牌，你可以令之弃置一张牌然后摸取一张牌。",
            "方绩":"方绩",
            "方绩_info":"当你回复体力后，若你当前的体力值小于你的总牌数，可以指定一名其他角色，令之也回复体力一点然后你摸取一张牌。",
            "惟德":"惟德",
            "惟德_info":"每当你使用【杀】或者成为【杀】的目标时，你可以从牌堆或者弃牌堆里随机获得一张【防具牌】。锁定技：当你装备区内有牌时，你的手牌上限加一。",
            "严母":"严母",
            "严母_info":"你的出牌阶段开始前，若你的手牌数大于体力值，那么你可以指定一名其他角色，令之跳过他的下个摸牌阶段。",
            "预谚":"预谚",
            "预谚_info":"每当一名其他角色回合开始时，你可以弃置一张手牌，令之判定一次，根据判定结果获得如下效果：♥：其摸取一张牌，然后你摸取一张牌。♦：若其没有护甲，其获得一层护甲，若其拥有护甲，摸取一张牌，♣：其弃置一张牌，♠：若其有护甲，其失去一层护甲，若没有护甲，弃置一张牌。",
            "鉴师":"鉴师",
            "鉴师_info":"你的回合开始之前，若场上有角色拥有护甲，你先摸取两张牌，然后选择至多两名其他拥有护甲的角色，令之失去护甲一层并摸取两张牌。",
            "识天":"识天",
            "识天_info":"你的回合结束时，你可以指定至多两名其他拥有护甲的角色，令之失去一层护甲，然后流失一点体力，并且其弃置两张手牌,此时，若你已受伤，你摸取两张牌。",
            "秩秩":"秩秩",
            "秩秩_info":"你的回合结束时，可以令任意名其他角色摸取一张牌。",
            "罪谏":"罪谏",
            "罪谏_info":"你的回合开始时，你令一名判定区内有牌的角色弃置一张判定区里的牌，然后其摸取等同于你体力值的牌并且获得一个出牌阶段。",
            "救卫":"救卫",
            "救卫_info":"每当场上有角色进入濒死状态，你可以弃置所有手牌，令之回复一点体力并且获得一层护甲,且若你救的为其他角色，那么你也获得一层护甲。",
            "明辨":"明辨",
            "明辨_info":"每当场上有男性角色摸取一张牌后，你可以选择一项：①：你弃置其一张牌。②：你获得其一张牌。",
            jinxian:"进贤",
            "jinxian_info":"每当场上有男性角色受到伤害后，你可以令之选择一项：①：你令该角色摸取一张牌并且若其判定区内有牌，其弃置其中一张。②：其获得伤害来源一张牌。",
            "LN_SN":"神鸟",
            "LN_SN_info":"你的回合开始时，你先摸取一张牌并且失去所有护甲，然后随机获得两项未加入游戏的非锁定、觉醒、主公技技能到回合结束。你的回合结束时，你获得一层护甲。",
      },
                };				
                if(lib.device||lib.node){
                    for(var i in lnz.character){lnz.character[i][4].push('ext:列女传/'+i+'.jpg');}
                }else{
                    for(var i in lnz.character){lnz.character[i][4].push('db:extensio-列女传:'+i+'.jpg');}
                }
                return lnz;
            });	
              lib.config.all.characters.push('lnz');
            if(!lib.config.characters.contains('lnz')){
                lib.config.characters.push('lnz');
            }
            lib.translate['lnz_character_config'] = '列女传';
        };
     
    
},help:{},config:{"lnz":{"name":"把列女传设为禁用","init":false}},package:{
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
        },
        translate:{
        },
    },
},files:{"character":[],"card":[],"skill":[]}}})