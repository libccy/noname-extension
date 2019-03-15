game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"金庸群侠传",editable:false,content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "sdxl_yangguo":["male","wei",3,["sdxl_anhun","sdxl_simou","sdxl_yingxia"],["des:杨过，《'神雕侠侣》男主角"]],
            "tlbb_duanyanqing":["male","qun",4,["tlbb_qiangcan","tlbb_liuwang","tlbb_rangquan"],["des:《天龙八部》里的重要角色，段誉的亲生父亲"]],
            "sdxl_xiaolongniv":["female","wei",3,["sdxl_luowang","sdxl_hebi","sdxl_muzong"],["des:《神雕侠侣》女主角"]],
        },
        translate:{
            "sdxl_yangguo":"杨过",
            "tlbb_duanyanqing":"段延庆",
            "sdxl_xiaolongniv":"小龙女",
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
            "sdxl_anhun":{
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
                    expose:0.6,
                },
            },
            "sdxl_simou":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                "step 0"               
                player.chooseBool('是否发动【伺谋】？').set('ai',function(){                                
                    if(player.isTurnedOver()) return true;    
                    });
        "step 1"
        if(result.bool){
        player.turnOver();        
        player.chooseTarget('请选择【伺谋】的目标',function(card,player,target){
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
       result.targets[0].addTempSkill('sdxl_simou2',{player:'phaseEnd'});    
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
            "sdxl_simou2":{
                mod:{
                    selectTarget:function (card,player,range){
if(get.type(card)!='delay'&&get.color(card)=='black'&&range[1]==1) range[1]++;
},
                },
            },
            "sdxl_yingxia":{
                audio:"ext:金庸群侠传:2",
                trigger:{
                    player:"turnOverEnd",
                },
                priority:6,
                zhuSkill:true,
                unique:true,
                filter:function (event,player){   
     if(!player.hasZhuSkill('sdxl_yingxia')) return false;
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
                audio:"ext:金庸群侠传:2",
                trigger:{
                    global:"dieBegin",
                },
                filter:function (event,player){   
               return event.player.hasSkill('tlbb_chusi');
    },
                frequent:true,
                content:function (){                            
            player.addSkill('tlbb_chusi');
            player.markSkill('tlbb_chusi2');
            player.update();                                                           
    },
                ai:{
                    threaten:0.8,
                },
            },
            "tlbb_chusi":{
                audio:"ext:金庸群侠传:2",
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
        trigger.player.chooseBool('是否横置或重置武将牌？').set('ai',function(){                                
                    if(get.attitude(trigger.player,player)>0&&!trigger.player.isLinked()) return true;    
                    if(get.attitude(trigger.player,player)<=0&&!trigger.player.isLinked()) return false;                    
                    return true;
                    }); 
        'step 1'
        if(result.bool){
           if(trigger.player.isLinked()){
            trigger.player.link(false);     
            trigger.player.turnOver(false);   
        }
        else{
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
             return -attitude(_status.event.player,target);            
     });        
     "step 1"
     if(result.bool){
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
        },
        translate:{
            "sdxl_luowang":"罗网",
            "sdxl_luowang2":"罗网",
            "sdxl_anhun":"黯魂",
            "sdxl_anhun_info":"当你受到伤害时，你可以亮出牌堆顶的五张牌，你可以无视距离地依次对其他角色使用其中的【杀】",
            "sdxl_simou":"伺谋",
            "sdxl_simou_info":"回合结束阶段，你可以翻面，然后令一名其他角色与你各回复一点体力（<font color=#F0F>一见杨过误终生</font> 若为女性角色，则额外地再摸一张牌）且直到其下回合结束，该角色使用仅指定一名目标的黑色的普通锦囊牌或黑色基本牌时可额外指定多一名目标角色。",
            "sdxl_yingxia":"英侠",
            "sdxl_yingxia_info":"<font color=#F0F>神雕大侠</font> 主公技，当你的武将牌翻面时，你与其他魏势力角色可依次摸一张牌",
            "sdxl_simou2":"伺谋",
            "sdxl_simou2_info":"",
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
            "sdxl_luowang_info":"当你受到伤害后，你可以选择至多两名角色，视为对其使用【铁索连环】。每当一名角色横置武将牌后，你便摸一张牌",
            "sdxl_luowang2_info":"每当一名角色横置武将牌后，你便摸一张牌",
            "sdxl_hebi":"合壁",
            "sdxl_hebi_info":"每名角色的回合限一次，当一名角色将武将牌翻至背面朝上时，你可令另一名未翻面的其他角色将武将牌翻面",
            "sdxl_muzong":"墓宗",
            "sdxl_muzong_info":"主公技，其他魏势力角色的回合结束时，其可以选择横置或重置其武将牌",
        },
    },
    intro:"<li>技能设计：大熊小猫 <li>编写代码：Sukincen",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"1.1",
},files:{"character":["sdxl_xiaolongniv.jpg"],"card":[],"skill":[]}}})
