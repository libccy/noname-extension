game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"金庸群侠传",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "sdxl_yangguo":["male","wei",3,["sdxl_anyan","sdxl_biefu","sdxl_shangli"],["des:杨过，《'神雕侠侣》男主角"]],
            "tlbb_duanyanqing":["male","qun",4,["tlbb_qiangcan","tlbb_liuwang","tlbb_rangquan"],["des:《天龙八部》里的重要角色，段誉的亲生父亲"]],
        },
        translate:{
            "sdxl_yangguo":"杨过",
            "tlbb_duanyanqing":"段延庆",
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
            "sdxl_anyan":{
                audio:"ext:金庸群侠传:2",
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
                            return get.damageEffect(target,player,player);
                                });
                            }
                            else{
                                event.finish();
                            }
                            'step 3'
                            if(result.bool){
                                player.useCard({name:'sha'},result.targets,[event.cards1],false);
                                event.cards.remove(event.cards1);                            
                                event.goto(1);
                            }
                            else{                        
                                event.finish();
                            }
    },
                ai:{
                    threaten:1.3,
                    expose:0.2,
                },
            },
            "sdxl_biefu":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                "step 0"               
                player.chooseBool('是否发动【别赋】？').set('ai',function(){                                
                    if(player.isTurnedOver()) return true;    
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
            /*      "step 3"   
        player.chooseTarget('请选择【别赋】的目标',function(card,player,target){
                                    return target!=player;
                                }).set('ai',function(target){
                            return get.damageEffect(target,player,player);
                                });
                            }                         
        "step 4"
    if(result.bool){
       result.targets[0].recover();
                            }
                            else{
                                event.finish();
                            }      */             
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
            "tlbb_qiangcan":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:["gameStart","dieBegin"],
                    player:"enterGame",
                },
                filter:function (event,player){   
          if(player.hasSkill('tlbb_chusi')) return false;
        return game.findPlayer(function(current){
        return !current.hasSkill('tlbb_chusi');
    });
    },
                forced:true,
                unique:true,
                content:function (){        
        player.addSkill('tlbb_chusi');
        player.markSkill('tlbb_chusi');
        player.update();
    },
                ai:{
                    threaten:0.8,
                },
            },
            "tlbb_chusi":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"damageEnd",
                },
                marktext:"嗣",
                intro:{
                    content:"mark",
                },
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
              trigger.source.chooseToDiscard('he',true); 
              trigger.player.removeSkill('tlbb_chusi');
              trigger.player.unmarkSkill('tlbb_chusi');
              trigger.source.addSkill('tlbb_chusi');
              trigger.source.markSkill('tlbb_chusi');
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
            if(player.hp==player.maxHp) return '失去体力';
            if(player.hp<player.maxHp-1||player.hp<=2) return '弃两张牌';
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
                    threaten:0.5,
                    neg:true,
                },
            },
            "tlbb_rangquan":{
                skillAnimation:true,
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
         player.storage.tlbb_rangquan=true;
         for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('tlbb_chusi')){
            game.players[i].removeSkill('tlbb_chusi');
                      }          
            }              
          'step 1'                
       // player.removeSkill('tlbb_qiangcan');
        player.removeSkill('tlbb_liuwang');
        player.loseMaxHp();
        player.recover(2);
        player.draw(2);      
        player.addSkill('tlbb_chusi');      
        player.unmarkSkill('tlbb_rangquan');
        player.awakenSkill('tlbb_rangquan');
        player.update();                  
    },
            },
        },
        translate:{
            "sdxl_anyan":"黯魂",
            "sdxl_anyan_info":"当你受到伤害时，你可以亮出牌堆顶的五张牌，你可以无视距离地依次对其他角色使用其中的【杀】",
            "sdxl_biefu":"别赋",
            "sdxl_biefu_info":"回合结束阶段，你可以翻面，然后令一名其他角色与你各回复一点体力（若为女性角色，则额外地再摸一张牌）且直到其下回合结束，该角色使用仅指定一名目标的黑色的普通锦囊牌或黑色基本牌时可额外指定多一名目标角色。",
            "sdxl_shangli":"伤离",
            "sdxl_shangli_info":"主公技，当你的武将牌翻面时，你与其他魏势力角色可依次摸一张牌",
            "sdxl_biefu2":"别赋",
            "sdxl_biefu2_info":"undefined",
            "tlbb_qiangcan":"戕残",
            "tlbb_qiangcan_info":" <font color=#f00>锁定技</font> 游戏开始、你进入游戏或【储嗣】阵亡后，你成为【储嗣】。（【储嗣】角色摸牌阶段摸牌时，额外摸两张牌且手牌上限+2）",
            "tlbb_chusi":"储嗣",
            "tlbb_chusi_info":"当你受到伤害后，伤害来源可弃置一张牌来取代【储嗣】成为新的【储嗣】。【储嗣】角色摸牌阶段摸牌时，额外摸两张牌且手牌上限+2",
            "tlbb_chusi2":"遗胄",
            "tlbb_chusi2_info":"<font color=#f00>锁定技</font> 【储嗣】角色摸牌阶段摸牌时，额外摸两张牌且手牌上限+2",
            "tlbb_liuwang":"流亡",
            "tlbb_liuwang_info":"<font color=#f00>锁定技</font> 结束阶段，若你不是【储嗣】角色，你须减1点体力或弃置两张牌",
            "tlbb_rangquan":"攘权",
            "tlbb_rangquan_info":"觉醒技，当你进入濒死状态时，你须减一点体力上限，回复两点体力，并摸两张牌，失去技能【流亡】，然后若你不是【储嗣】，你成为【储嗣】",
        },
    },
    intro:"<li>技能设计：大熊小猫 <li>编写代码：Sukincen",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["tlbb_duanyanqing.jpg"],"card":[],"skill":[]}}})