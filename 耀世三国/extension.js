game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"耀世三国",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "YSSG_xiahoudun":["male","wei",4,["YSSG_danjing"],[]],
            "YSSG_caoren":["male","wei",4,["YSSG_jushou"],[]],
            "YSSG_xunyu":["male","wei",3,["YSSG_zhuoren","YSSG_shouzheng"],[]],
            "YSSG_xiahouyuan":["male","wei",4,["YSSG_jifu"],[]],
            "YSSG_xunyou":["male","wei",3,["qice","YSSG_houlve"],[]],
            "YSSG_guojia":["male","wei",3,["YSSG_tiandu","YSSG_yiji"],[]],
            "YSSG_zhanghe":["male","wei",4,["YSSG_qiaobian"],[]],
            "YSSG_jiaxu":["male","wei",3,["YSSG_zhenji","YSSG_qianlve","luanwu"],[]],
            "YSSG_yujin":["male","wei",4,["YSSG_yizhong"],[]],
            "YSSG_xuhuang":["male","wei",4,["YSSG_jiezi","YSSG_changqu"],[]],
            "YSSG_yuejin":["male","wei",4,["YSSG_xiaoguo"],[]],
            "YSSG_simayi":["male","wei",3,["YSSG_yingshi","YSSG_langgu"],[]],
            "YSSG_dianwei":["male","wei",4,["YSSG_zhengji"],[]],
            "YSSG_caoxiu":["male","wei",4,["YSSG_qingxi"],[]],
            "YSSG_xuzhu":["male","wei",4,["YSSG_luoyi"],[]],
            "YSSG_caozhi":["male","wei",3,["YSSG_zuifu","YSSG_luoying"],[]],
            "YSSG_wangshuang":["male","wei",4,["YSSG_jizui"],[]],
            "YSSG_caocao":["male","wei",4,["YSSG_jianxiong"],[]],
            "YSSG_lidian":["male","wei",4,["YSSG_xiezheng"],[]],
            "YSSG_guohuai":["male","wei",4,["YSSG_jingce"],[]],
            "YSSG_liubei":["male","shu",4,["YSSG_rende"],[]],
            "YSSG_wangling":["male","wei",3,["YSSG_zhengzhou","YSSG_xingbian"],[]],
            "YSSG_caozheng":["male","wei",4,["YSSG_sidi"],[]],
            "YSSG_wenxin":["male","wei",4,["YSSG_yongxian"],[]],
            "YSSG_guanyu":["male","shu",4,["YSSG_zhaowu"],[]],
            "YSSG_zhugeliang":["male","shu",3,["YSSG_zhijue","YSSG_shilve"],[]],
            "YSSG_zhaoyun":["male","shu",4,["YSSG_longdan"],[]],
            "YSSG_pangtong":["male","shu",3,["YSSG_lianhuan","YSSG_qiwu"],[]],
            "YSSG_fazheng":["male","shu",3,["YSSG_xuanhuo","YSSG_yirong"],[]],
            "YSSG_machao":["male","shu",4,["YSSG_xiaoxi","YSSG_chiqu"],[]],
            "YSSG_huangzhong":["male","shu",4,["YSSG_shengong"],[]],
        },
        translate:{
            "YSSG_xiahoudun":"夏侯惇",
            "YSSG_caoren":"曹仁",
            "YSSG_xunyu":"荀彧",
            "YSSG_xiahouyuan":"夏侯渊",
            "YSSG_xunyou":"荀攸",
            "YSSG_guojia":"郭嘉",
            "YSSG_zhanghe":"张郃",
            "YSSG_jiaxu":"贾诩",
            "YSSG_yujin":"于禁",
            "YSSG_xuhuang":"徐晃",
            "YSSG_yuejin":"乐进",
            "YSSG_simayi":"司马懿",
            "YSSG_dianwei":"典韦",
            "YSSG_caoxiu":"曹休",
            "YSSG_xuzhu":"许褚",
            "YSSG_caozhi":"曹植",
            "YSSG_wangshuang":"王双",
            "YSSG_caocao":"曹操",
            "YSSG_lidian":"李典",
            "YSSG_guohuai":"郭淮",
            "YSSG_liubei":"刘备",
            "YSSG_wangling":"王凌",
            "YSSG_caozheng":"曹真",
            "YSSG_wenxin":"文钦",
            "YSSG_guanyu":"关羽",
            "YSSG_zhugeliang":"诸葛亮",
            "YSSG_zhaoyun":"赵云",
            "YSSG_pangtong":"庞统",
            "YSSG_fazheng":"法正",
            "YSSG_machao":"马超",
            "YSSG_huangzhong":"黄忠",
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
            "YSSG_jifu":{
                audio:["shensu",2],
                group:["YSSG_jifu1","YSSG_jifu2","YSSG_jifu3","YSSG_jifu4"],
                ai:{
                    threaten:1,
                },
            },
            "YSSG_jifu1":{
                audio:["shensu",2],
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0;
    },
                direct:true,
                content:function (){
            "step 0"
          player.chooseBool('是否发动【疾赴】跳过判定阶段？').set('ai',function(){                    
            if(player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0) return true;     
            });
"step 1"
if(result.bool){
event.goto(2);     
}
else{
    event.finish();
}
            "step 2"
             var controls=[];                             
           if (player.countCards('h')>0) controls.push('手牌区');        
           if (player.countCards('e')>0)  controls.push('装备区');
           if (player.countCards('j')>0) controls.push('判定区');                
  var str='请选择一个区域';            
  player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                return Math.floor(Math.random()*controls.length);
            };                      
              "step 3"
              if(result.control){
    if (result.control=='手牌区') {
    player.discard(player.getCards('h')); 
    }
    if (result.control=='装备区') {
    player.discard(player.getCards('e')); 
    }
    if (result.control=='判定区') {
    player.discard(player.getCards('j')); 
    }
}                                                   
else {       
 event.finish(); 
}                     
              "step 4"                                    
            player.chooseTarget('选择【疾赴】的目标',lib.translate.YSSG_jifu_info,true,function(card,player,target){
    return player.canUse({name:'sha'},target,false)&&target!=player;
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});        
"step 5"
if(result.bool){
    var target=result.targets[0];                                                           
    player.useCard({name:'sha'},target,false);    
    player.skip('phaseJudge');   
}
else {       
 event.finish(); 
}                     
    },
            },
            "YSSG_jifu2":{
                audio:["shensu",2],
                trigger:{
                    player:"phaseDrawBefore",
                },
                filter:function (event,player){
        return player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0;
    },
                direct:true,
                content:function (){
            "step 0"
          player.chooseBool('是否发动【疾赴】跳过摸牌阶段？').set('ai',function(){                    
            if(player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0) return true;     
            });
"step 1"
if(result.bool){
event.goto(2);    
}
else{
    event.finish();
}
            "step 2"
             var controls=[];                             
           if (player.countCards('h')>0) controls.push('手牌区');        
           if (player.countCards('e')>0)  controls.push('装备区');
           if (player.countCards('j')>0) controls.push('判定区');                
  var str='请选择一个区域';            
  player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                return Math.floor(Math.random()*controls.length);
            };                      
              "step 3"
              if(result.control){
    if (result.control=='手牌区') {
    player.discard(player.getCards('h')); 
    }
    if (result.control=='装备区') {
    player.discard(player.getCards('e')); 
    }
    if (result.control=='判定区') {
    player.discard(player.getCards('j')); 
    }
}                                                   
else {       
 event.finish(); 
}                     
              "step 4"                                    
            player.chooseTarget('选择【疾赴】的目标',lib.translate.YSSG_jifu_info,true,function(card,player,target){
    return player.canUse({name:'sha'},target,false)&&target!=player;
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});        
"step 5"
if(result.bool){
    var target=result.targets[0];                                                           
    player.useCard({name:'sha'},target,false);     
    trigger.cancel(); 
}
else {       
 event.finish(); 
}                     
    },
            },
            "YSSG_jifu3":{
                audio:["shensu",2],
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function (event,player){
        return player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0;
    },
                direct:true,
                content:function (){
            "step 0"
          player.chooseBool('是否发动【疾赴】跳过出牌阶段？').set('ai',function(){                    
            if(player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0) return true;     
            });
"step 1"
if(result.bool){
event.goto(2);    
}
else{
    event.finish();
}
            "step 2"
             var controls=[];                             
           if (player.countCards('h')>0) controls.push('手牌区');        
           if (player.countCards('e')>0)  controls.push('装备区');
           if (player.countCards('j')>0) controls.push('判定区');                
  var str='请选择一个区域';            
  player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                return Math.floor(Math.random()*controls.length);
            };                      
              "step 3"
              if(result.control){
    if (result.control=='手牌区') {
    player.discard(player.getCards('h')); 
    }
    if (result.control=='装备区') {
    player.discard(player.getCards('e')); 
    }
    if (result.control=='判定区') {
    player.discard(player.getCards('j')); 
    }
}                                                   
else {       
 event.finish(); 
}                     
              "step 4"                                    
            player.chooseTarget('选择【疾赴】的目标',lib.translate.YSSG_jifu_info,true,function(card,player,target){
    return player.canUse({name:'sha'},target,false)&&target!=player;
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});        
"step 5"
if(result.bool){
    var target=result.targets[0];                                                           
    player.useCard({name:'sha'},target,false);       
    trigger.cancel(); 
}
else {       
 event.finish(); 
}                     
    },
            },
            "YSSG_jifu4":{
                audio:["shensu",2],
                trigger:{
                    player:"phaseDiscardBefore",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0;
    },
                content:function (){
            "step 0"
          player.chooseBool('是否发动【疾赴】跳过弃牌阶段？').set('ai',function(){                    
            if(player.countCards('h')>0||player.countCards('e')>0||player.countCards('j')>0) return true;     
            });
"step 1"
if(result.bool){
event.goto(2);
}
else{
    event.finish();
}
            "step 2"
             var controls=[];                             
           if (player.countCards('h')>0) controls.push('手牌区');        
           if (player.countCards('e')>0)  controls.push('装备区');
           if (player.countCards('j')>0) controls.push('判定区');                
  var str='请选择一个区域';            
  player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                return Math.floor(Math.random()*controls.length);
            };                      
              "step 3"
              if(result.control){
    if (result.control=='手牌区') {
    player.discard(player.getCards('h')); 
    }
    if (result.control=='装备区') {
    player.discard(player.getCards('e')); 
    }
    if (result.control=='判定区') {
    player.discard(player.getCards('j')); 
    }
}                                                   
else {       
 event.finish(); 
}                     
              "step 4"                                    
            player.chooseTarget('选择【疾赴】的目标',lib.translate.YSSG_jifu_info,true,function(card,player,target){
    return player.canUse({name:'sha'},target,false)&&target!=player;
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});        
"step 5"
if(result.bool){
    var target=result.targets[0];                                                           
    player.useCard({name:'sha'},target,false);       
    trigger.cancel(); 
}
else {       
 event.finish(); 
}                     
    },
            },
            "YSSG_danjing":{
                audio:["ganglie",2],
                trigger:{
                    player:"damageEnd",
                },
                priority:15,
                filter:function (event, player,target){
        return player.isAlive();
    },
                content:function (){
        "step 0"      
        player.chooseTarget('选择【啖睛】的目标',lib.translate.YSSG_danjing_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -attitude(_status.event.player,target);            
        });        
        "step 1"
        if(result.bool){
            player.logSkill('YSSG_danjing');
            var target=result.targets[0];                                                           
            target.damage();   
        }         
        else{
            event.finish();
        }      
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
            "YSSG_jushou":{
                audio:["jushou",2],
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseControl('当前体力','损失体力','cancel2',function(){
            var player=_status.event.player;
            if(player.hp>3){
                return '当前体力';
            }
            if(player.hp<4){
                return '损失体力';
            }           
            return 'cancel2';
        });
        "step 1"
        if(result.control=='当前体力'){
            player.turnOver();
            player.draw(player.hp);
            player.logSkill('YSSG_jushou');
            event.finish();
        }
        else if(result.control=='损失体力'){
           event.goto(2);
        }
        "step 2"
        player.turnOver();
        player.draw(player.maxHp-player.hp);
        player.chooseBool('是否发动【据守】？').set('ai',function(){                    
                    if(player.isTurnedOver()) return true;     
                    });
        "step 3"
        if(result.bool){
        player.turnOver();
        player.logSkill('YSSG_jushou');      
        }
        else{
            event.finish();
        }
    },
            },
            "YSSG_zhuoren":{
                audio:["jieming",2],
                trigger:{
                    player:"loseEnd",
                },
                filter:function (event,player){
        if(_status.currentPhase!=player) return true;
        return false;
    },
                content:function (){
       "step 0"
       player.chooseTarget('选择【擢任】的目标',lib.translate.YSSG_zhuoren_info,true,function(card,player,target){
            return target.isMinHandcard();
        }).set('ai',function(target){
            return attitude(_status.event.player,target);            
        });        
        "step 1"
        if(result.bool){
            var target=result.targets[0];                                                           
            target.draw(2);  
        }
      else{
       event.finish();
   }     
     
    },
            },
            "YSSG_shouzheng":{
                audio:["quhu",2],
                trigger:{
                    player:"gainAfter",
                },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        return true;
    },
                content:function (){
       "step 0"
       player.chooseTarget('选择【守正】的目标',lib.translate.YSSG_shouzheng_info,true,function(card,player,target){
            return target.isMaxHandcard()&&player!=target;
        }).set('ai',function(target){
            return -attitude(_status.event.player,target);            
        });        
        "step 1"
           if(result.bool){
            var target=result.targets[0];                                                           
            target.chooseToDiscard(2,'he',true);
        } 
        else{
       event.finish();
   }     
     
    },
            },
            "YSSG_tiandu":{
                audio:["tiandu",2],
                trigger:{
                    player:"phaseJudgeBefore",
                },
                forced:true,
                filter:function (event,player){
    if(player.getCards('j')<1) return true;       
    },
                content:function (){
    'step 0'
    player.judge();
    'step 1'
    if(result.card.suit=='spade'){
             player.loseHp();
    }        
    },
                group:"YSSG_tiandu2",
            },
            "YSSG_tiandu2":{
                audio:["tiandu",2],
                trigger:{
                    player:"judgeEnd",
                },
                forced:true,
                filter:function (event,player){
        if(get.owner(event.result.card)){
            return false;
        }
        if(event.nogain&&event.nogain(event.result.card)){
            return false;
        }
        return true;
    },
                content:function (){        
        player.gain(trigger.result.card);
        player.$gain2(trigger.result.card);
    },
                audioname:["guojia","re_guojia"],
            },
            "YSSG_yiji":{
                audio:["yiji",2],
                trigger:{
                    player:["loseHpEnd","damageEnd"],
                },
                frequent:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        "step 0"
        event.cards=get.cards(2*trigger.num);
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
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'loseHp')){
                    if(player.hasSkillTag('jueqing',true,target)) return [1,2];
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
            "YSSG_zhenji":{
                audio:["weimu",2],
                trigger:{
                    target:"useCardToBefore",
                },
                frequent:true,
                filter:function (event,player){ 
        return get.type(event.card,'trick')=='trick'; 
    },
                content:function (){
      player.draw();       
    },
                ai:{
                    threaten:1.1,
                },
            },
            "YSSG_qianlve":{
                audio:["wansha",2],
                trigger:{
                    player:"useCardToBefore",
                },
                filter:function (event,player){
        return event.card&&get.type(event.card,'trick')=='trick';
    },
                content:function (){
      "step 0"
       player.chooseTarget('选择【箝略】的目标',lib.translate.YSSG_qianlve_info,true,function(card,player,target){
            return player!=target&&target.getCards('he')>0;
        }).set('ai',function(target){
            return -attitude(_status.event.player,target);            
        });        
        "step 1"
           if(result.bool){
          result.targets[0].chooseToDiscard(1,'he',true);                                                      
    //      player.discardPlayerCard(result.targets[0],'he',1,true);
        }
       else{
       event.finish();
   }     
     
    },
                ai:{
                    threaten:1.1,
                },
            },
            "YSSG_qiaobian2":{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                audio:["qiaobian1",2],
                direct:true,
                frequent:true,
                content:function (){
       "step 0"
        var check;
        if(!player.canMoveCard(true)){
            check=false;
        }
        else{
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
        }                    
        "step 1"                                    
            player.moveCard();                                       
    },
                ai:{
                    expose:0.2,
                },
            },
            "YSSG_qiaobian":{
                audio:["qiaobian1",2],
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                group:"YSSG_qiaobian2",
                content:function (){
    "step 0"                
        var check;
        if(!player.canMoveCard(true)){
            check=false;
        }
        else{
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
        }                   
        "step 1"                               
            player.moveCard();          
            player.skip('phaseJudge');   
            player.skip('phaseDraw');          
    },
                ai:{
                    expose:0.2,
                },
            },
            "YSSG_yizhong":{
                audio:["jieyue",2],
                trigger:{
                    target:"shaBegin",
                },
                usable:1,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
        "step 0"
      trigger.cancel();
        "step 1"
       trigger.parent._yizhonged=true;
       trigger.player.getStat().card.sha--;
    },
                ai:{
                    threaten:1.1,
                },
            },
            "YSSG_changqu":{
                mod:{
                    globalFrom:function (from,to,distance){
            if(to.countCards('e')>0){ 
                return -Infinity;  
            }
        },
                },
            },
            "YSSG_jiezi":{
                audio:["duanliang1",2],
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){ 
        if(player.canUse({name:'bingliang'},target,false)&&get.color(event.card)=='black') return true;
        return false;
    },
                logTarget:"target",
                content:function (){
        'step 0'
   //     var card=event.card;
   //   player.useCard({name:'bingliang'},card,target);              
      var card=game.createCard('bingliang');
      trigger.target.addJudge('card');
      trigger.target.$draw(card);
        'step 1'    
        trigger.cancel();
    },
            },
            "YSSG_xiaoguo":{
                audio:["xiaoguo",2],
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        return player!=event.player&&event.player.countCards('he')>1;
    },
                complexCard:true,
                content:function (){
        'step 0'
        trigger.player.chooseCard('he',2,'选择两张牌视为对'+get.translation(player)+'使用一张【杀】',true).set('ai',function(card){            
            return -get.value(card);
        });
        'step 1'
        if(result.bool){      
            trigger.player.discard(result.cards);  
              if(get.color(result.cards[0])==get.color(result.cards[1])){               
            player.addTempSkill('YSSG_xiaoguo2','shaAfter');
            }            
            trigger.player.useCard({name:'sha'},player);                          
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:7,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                    threaten:1.4,
                },
            },
            "YSSG_xiaoguo2":{
                trigger:{
                    target:"shaBegin",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
        trigger.directHit=true;
    },
            },
            "YSSG_zhengji":{
                audio:["qiangxi",2],
                enable:"phaseUse",
                usable:1,
                check:function (event,player){
        var cards=player.getCards('h');
        if(cards.length<=2){
            for(var i=0;i<cards.length;i++){
                if(cards[i].name=='shan'||cards[i].name=='tao') return false;
            }
        }
        return true;
    },
                content:function (){
        "step 0"
        player.chooseToDiscard(2,true,'he');        
        "step 1"       
         player.chooseTarget('选择【掷戟】的目标',lib.translate.YSSG_zhengji_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -attitude(_status.event.player,target);            
        });                
        "step 2"       
        if(result.bool){
            var target=result.targets[0];                                                           
            target.damage(); 
        }
    },
                ai:{
                    result:{
                        player:function (player,target){
                return player.countCards('h')>2;
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            "YSSG_qingxi":{
                audio:["qingxi",2],
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('e')>0;
    },
                content:function (){
               'step 0'
              player.gain(player.getCards('e'),'gain2');     
        'step 1'
                player.chooseTarget('选择发动【倾袭】的目标',lib.translate.YSSG_qingxi_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 2'
        if(result.bool){
          var target=result.targets[0];                                                           
            player.useCard({name:'sha'},target,false);  
            }       
 else{
            event.finish();
        }
    },
                ai:{
                    order:7,
                    expose:0.2,
                },
            },
            "YSSG_yingshi":{
                audio:["guicai",2],
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        "step 0"
           player.chooseControl('替换','打出','cancel2',function(){
            var player=_status.event.player;
            if(player.hp>1){
                return '替换';
            }
            if(player.hp<2){
                return '打出';
            }           
            return 'cancel2';
        });
        "step 1"
        if(result.control=='替换'){
             event.goto(5);
        }
        else if(result.control=='打出'){
           event.goto(2);
        }               
        "step 2"        
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('YSSG_yingshi'),'he').set('ai',function(card){
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
        "step 3"
        if(result.bool){
            player.respond(result.cards,'highlight');
        }
        else{
            event.finish();
        }
        "step 4"
        if(result.bool){
            player.logSkill('YSSG_yingshi');
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
            trigger.player.judging[0]=result.cards[0];
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(result.cards[0]);
            }
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
            game.delay(2);
            event.finish();  
        }         
        "step 5"
           player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('YSSG_yingshi'),'he',function(card){
            return player.countCards('he')>0;
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
        "step 6"
        if(result.bool){
            player.respond(result.cards,'highlight');
        }
        else{
            event.finish();
        }
        "step 7"
        if(result.bool){
            player.logSkill('YSSG_guicai');
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            trigger.player.judging[0]=result.cards[0];
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(result.cards[0]);
            }
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
        }
        "step 8"
        game.delay(2);
        player.damage(trigger.player);
        event.finish();
     },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "YSSG_langgu":{
                audio:["fankui",2],
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source.countGainableCards(player,'he')&&event.num>0&&event.source!=player);
    },
                content:function (){
        "step 0"
player.chooseControl('获得','弃置','cancel2',function(){
        var player=_status.event.player;
        if(player.countCards('h')<3){
            return '获得';
        }
        if(player.countCards('h')>=3){
            return '弃置';
        }           
        return 'cancel2';
    });
    "step 1"
    if(result.control=='获得'){
        player.logSkill('YSSG_langgu');
        player.gainPlayerCard([1,trigger.num],get.prompt('YSSG_langgu',trigger.source),trigger.source,get.buttonValue,'he').set('logSkill',['YSSG_langgu',trigger.source]);
}
    else if(result.control=='弃置'){
      player.logSkill('YSSG_langgu');
       player.discardPlayerCard(trigger.source,'he',1,true);
        player.draw();
    }
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.countCards('he')>1&&get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(get.attitude(target,player)<0) return [1,1];
                }
            },
                    },
                },
            },
            "YSSG_houlve":{
                audio:["zhiyu",2],
                enable:"chooseToUse",
                usable:1,
                filterCard:function (){return false},
                selectCard:-1,
                viewAsFilter:function (player){return !player.countCards('h')},
                viewAs:{
                    name:"wuxie",
                },
                onuse:function (result,player){player.draw()},
                prompt:"摸一张牌，然后你视为使用一张【无懈可击】",
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
            "YSSG_luoyi":{
                audio:["luoyi",2],
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        'step 0'
        player.showCards(player.getCards('h'));
        'step 1'
        player.chooseTarget('选择【裸衣】的目标',lib.translate.YSSG_luoyi_info,true,function(card,player,target){
    return player.canUse({name:'juedou'},target,false)&&target!=player;
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});        
'step 2'
if(result.bool){
    var target=result.targets[0];                                                           
    player.useCard({name:'juedou'},target,false);        
    }
        
   else{
       event.finish();
   }     
    },
            },
            "YSSG_luoying":{
                audio:["luoying_discard",2],
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){        
        if(player==_status.currentPhase) return false;        
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='club'&&event.cards[i].original=='he') return true;
        }
        return false;
    },
                content:function (){    
    var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(get.suit(trigger.cards[i])=='club'&&trigger.cards[i].original=='he') num+=1;
        }
        player.draw(num);
    },
            },
            "YSSG_zuifu":{
                audio:["jiushi1",2],
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.isAlive();
    },
                frequent:true,
                content:function (){  
    'step 0'
    player.gain(get.cardPile(function(card){
        return get.type(card,'trick')=='trick';
    }),'gain2');
  'step 1'          
     player.chooseBool('是否重铸一张牌？').set('ai',function(){                    
                if(-get.value(card)) return true;     
                });        
   'step 2'
    if(result.bool){
    player.chooseToDiscard('he','请选择要重铸的牌').ai=function(card){
                return -get.value(card);
            };
    player.draw();
    player.logSkill('YSSG_zuifu');      
    }
    else{
        event.finish();
    }
      },
                ai:{
                    order:6,
                    maixie:true,
                    threaten:1.3,
                },
            },
            "YSSG_jizui":{
                audio:"ext:耀世三国:2",
                trigger:{
                    player:"shaBegin",
                },
                priority:15,
                filter:function (event, player,target){
        return player.isAlive();
    },
                filterTarget:function (card,player,target){ 
               return target==trigger.target;
    },
                content:function (){
        "step 0" 
        player.addTempSkill('YSSG_jizui2','shaAfter');
        "step 1"
        player.logSkill('YSSG_jizui');                                                          
        trigger.target.damage();   
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
            "YSSG_jizui2":{
                audio:"ext:耀世三国:1",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                content:function (){
        player.loseHp();    
    },
            },
            "YSSG_jianxiong":{
                audio:["rejianxiong",2],
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        "step 0"        
            player.logSkill('YSSG_jianxiong');
            player.gain(trigger.cards);
            player.$gain2(trigger.cards);
        "step 1"
            player.draw(2);
        "step 2"
       player.chooseToDiscard('he','请弃置一张牌').ai=function(card){
                return 6-get.value(card);
            };
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
            "YSSG_rende":{
                audio:["rerende",2],
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                check:function (card){
        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
        if(!ui.selected.cards.length&&card.name=='du') return 20;
        var player=get.owner(card);
        if(ui.selected.cards.length>=Math.max(1,player.countCards('h')-player.hp)) return 0;
        if(player.hp==player.maxHp||player.countCards('h')<=1){
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
                content:function (){
        'step 0'
               var list=[];
                if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))){
                    if(game.hasPlayer(function(current){
                        return player.canUse('sha',current);
                    })){
                        list.push(['基本','','sha']);
                        list.push(['基本','','sha','fire']);
                        list.push(['基本','','sha','thunder']);
                    }
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
                ai:{
                    order:function (skill,player){
            if(player.hp<player.maxHp&&player.countCards('h')>1){
                return 10;
            }
            return 4;
        },
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return -10;
                }
                if(target.hasJudge('lebu')) return 0;
                var nh=target.countCards('h');
                var np=player.countCards('h');
                if(player.hp==player.maxHp||player.storage.rerende<0||player.countCards('h')<=1){
                    if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
                }
                return Math.max(1,5-nh);
            },
                    },
                    effect:{
                        target:function (card,player,target){
                if(player==target&&get.type(card)=='equip'){
                    if(player.countCards('e',{subtype:get.subtype(card)})){
                        if(game.hasPlayer(function(current){
                            return current!=player&&get.attitude(player,current)>0;
                        })){
                            return 0;
                        }
                    }
                }
            },
                    },
                    threaten:0.8,
                },
            },
            "YSSG_xiezheng":{
                audio:["xunxun",2],
                trigger:{
                    player:"shaBefore",
                    target:"shaBefore",
                },
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                group:"YSSG_xiezheng_again",
                subSkill:{
                    again:{
                        audio:["wangxi",2],
                        trigger:{
                            player:"shaAfter",
                            target:"shaAfter",
                        },
                        filter:function (event,player){             
              //  if(player.getStat('damage')>=1||target.getStat('damage')>=1) return false;
              //  return true;   
                return player.isAlive();
            },
                        content:function (){
                'step 0'
        player.chooseTarget('选择一名其他角色也如此操作',lib.translate.YSSG_xiezheng_info,true,function(card,player,target){
              return target!=player;
          }).set('ai',function(target){
              return attitude(_status.event.player,target);            
          });   
        'step 1'
        if(result.bool){  
           var  target=result.targets[0];
           player.storage.YSSG_xiezheng_again=target;
           target.chooseCard('he',1,'用一张牌替换牌堆顶的一张牌',true).set('ai',function(card){
                return -get.value(card);
            }); 
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
        var target=player.storage.YSSG_xiezheng_again;
            target.lose(result.cards,ui.special);
            target.$throw(result.cards);
            event.card=result.cards[0];
            target.draw();
        }  
        else{
            event.finish();
        }      
           'step 3'    
        if(event.card){
            ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
        }          
          },
                        sub:true,
                    },
                },
                content:function (){
        'step 0'              
     player.chooseCard('he',1,'用一张牌替换牌堆顶的一张牌',true).set('ai',function(card){
                return -get.value(card);
            });             
        'step 1'
        if(result.bool){
            player.lose(result.cards,ui.special);
            player.$throw(result.cards);
            event.card=result.cards[0];
            player.draw();
        }  
        else{
            event.finish();
        } 
         'step 2'
        if(player==game.me&&event.card){
            game.delay();
        }
        'step 3'
        if(event.card){
            ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
        }                       
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(card.name=='sha') return [1,0.6];
            },
                        player:function (card,player,target){
                if(card.name=='sha') return [1,1];
            },
                    },
                },
            },
            "YSSG_jingce":{
                audio:["jingce",2],
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseControl('一张','两张','cancel2',function(){
            var player=_status.event.player;
            if(player.countCards('h')>4){
                return '一张';
            }
            if(player.countCards('h')<5){
                return '两张';
            }           
            return 'cancel2';
        });
        "step 1"
        if(result.control=='一张'){         
            player.draw();
            player.logSkill('YSSG_jingce');
            event.finish();
        }
        else if(result.control=='两张'){
           player.draw(2);
            player.logSkill('YSSG_jingce');
            event.finish();
        }    
    },
                group:"YSSG_jingce2",
            },
            "YSSG_jingce2":{
                audio:["jingce",2],
                trigger:{
                    player:"phaseDiscard",
                },
                forced:true,
                content:function (){
        if(trigger.num>0){
            player.loseHp();
        }
    },
            },
            "YSSG_zhengzhou":{
                audio:"ext:耀世三国:2",
                trigger:{
                    global:"loseEnd",
                },
                filter:function (event,player){
        if(event.player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){
        var num=trigger.player.countCards('e');
        trigger.player.discard(trigger.player.getCards('e'));
        trigger.player.draw(num);
        trigger.player.draw(2);
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
            "YSSG_xingbian":{
                audio:"ext:耀世三国:2",
                trigger:{
                    global:"judgeAfter",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        'step 0'
         player.chooseCard('he',[1,Infinity],'星变：弃置任意张牌',true).set('ai',function(card){
            return -get.value(card);
        });
        'step 1'
        if(result.bool){
            player.lose(result.cards,ui.special);
            player.removeSkill('YSSG_zhengzhou');
            player.addSkill('YSSG_zhengzhou2');
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
            "YSSG_rezhengzhou":{
                audio:"ext:耀世三国:2",
                trigger:{
                    global:"loseEnd",
                },
                filter:function (event,player){
        if(event.player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){
        'step 0'
         player.chooseControl('摸X张牌','摸两张牌','cancel2',function(){
            var player=_status.event.player;
            if(trigger.player.countCards('e')>2){
                return '摸X张牌';
            }
            if(trigger.player.countCards('e')<3){
                return '摸两张牌';
            }           
            return 'cancel2';
        });
        'step 1'
        var num=trigger.player.countCards('e');
        if(result.control=='摸X张牌'){
        trigger.player.discard(trigger.player.getCards('e'));
        trigger.player.draw(num);
        player.logSkill('YSSG_rezhengzhou');
        event.finish();
        }
        else if(result.control=='摸两张牌'){
        trigger.player.discard(trigger.player.getCards('e'));
        trigger.player.draw(2);
        player.logSkill('YSSG_rezhengzhou');
        event.finish();
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
                if(player.countCards('h')!=1) return false;
            }
        },
                },
            },
            "YSSG_zhijue":{
                audio:["bazheng",2],
                trigger:{
                    player:"useCardToBegin",
                },
                direct:true,
                alter:true,
                filter:function (event){
        return (get.type(event.card,'trick')=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
        'step 0'             
            player.chooseBool('是否令'+get.translation(_status.currentPhase.player)+'摸一张牌？').set('ai',function(evt,player){
                return player.isAlive();
            }).set('value',get.attitude(_status.currentPhase.player,player));
       
        'step 2'
        if(result.bool){
            _status.currentPhase.draw();            
        }
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            "YSSG_sidi":{
                audio:["sidi",2],
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){ 
               return target!=player&&target.countCards('he')>0;
    },
                check:function (event,player){
        return ai.get.attitude(player,target)<=0;
    },
                content:function (){
        "step 0"
         target.chooseToDiscard([1,target.countCards('he')],true,'he','请弃置任意张牌').ai=function(card){
                return 6-get.value(card);
            }; 
            "step 1" 
        if(result.bool){  
         event.num=result.cards.length; 
         event.goto(2);
        }
        else{
            event.finish();
        }
        "step 2"
        player.chooseBool('是否发动【司敌】？').set('ai',function(){                    
                    if(player.countCards('h',{name:'sha'})>0) return true;     
                    });                  
        "step 3"
        if(result.bool){
           event.goto(4);
        }
        else{
            event.finish();
        }
        "step 4"
            player.chooseToDiscard(event.num,true,'h','弃置等量的基本牌').set('ai',function(card){             
            return get.type(card)=='basic'; 
        });          
          "step 5"
          player.useCard({name:'juedou'},target,false);            
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                },
            },
            "YSSG_yongxian":{
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){
       'step 0' 
       player.chooseBool('是否发动【勇陷】摸一张牌？').set('ai',function(){                    
                    if(player.hp>1) return true;     
                    });
        'step 1'
        if(result.bool){
        player.draw();
        player.storage.YSSG_yongxian++;
        player.logSkill('YSSG_yongxian');      
        }
        else{
            event.finish();
        } 
         'step 2' 
       trigger.target.chooseBool('是否令文钦摸一张牌？').set('ai',function(){                    
                    if(trigger.player.hp<3) return true;     
                    });
        'step 3'
        if(result.bool){
        player.draw();
        player.storage.YSSG_yongxian++;   
        }
        else{
            event.finish();
        } 
        'step 4'
        if(player.storage.YSSG_yongxian==2){
            player.loseHp();
        }
        if(player.storage.YSSG_yongxian==1){
            trigger.directHit=true;
        }          
    },
            },
            "YSSG_zhaowu1":{
                audio:["wusheng",2],
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
        if(get.zhu(player,'shouyue')) return true;
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"sha",
                    suit:"heart",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":12,"name":"shan","cardid":"8920389315","_transform":"translateX(336px)","clone":{"name":"shan","suit":"heart","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":523},"timeout":501,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('he')) return false;
        }
        else{
            if(!player.countCards('he',{color:'red'})) return false;
        }
    },
                prompt:"将一张红色牌当杀使用或打出",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('he')) return false;
            }
            else{
                if(!player.countCards('he',{color:'red'})) return false;
            }
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
                audioname:["guanyu","gz_guanyu","re_guanyu","guanzhang","jsp_guanyu","guansuo"],
            },
            "YSSG_zhaowu2":{
                audio:["wusheng",2],
                enable:"chooseToUse",
                filterCard:function (card,player){
        if(get.zhu(player,'shouyue')) return true;
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"juedou",
                    suit:"heart",
                    number:9,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":9,"name":"tao","cardid":"6561523346","_transform":"translateX(0px)","clone":{"name":"tao","suit":"heart","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":636},"timeout":616,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('he')) return false;
        }
        else{
            if(!player.countCards('he',{color:'red'})) return false;
        }
    },
                prompt:"将一张红色牌当决斗使用",
                check:function (card){return 7-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('he')) return false;
            }
            else{
                if(!player.countCards('he',{color:'red'})) return false;
            }
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                        order:5,
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
                        respond:2,
                        respondSha:2,
                    },
                },
                audioname:["guanyu","gz_guanyu","re_guanyu","guanzhang","jsp_guanyu","guansuo"],
            },
            "YSSG_zhaowu":{
                locked:true,
                group:["YSSG_zhaowu1","YSSG_zhaowu2"],
                audio:["wusheng",2],
            },
            "YSSG_shilve1":{
                audio:["kanpo",2],
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAsFilter:function (player){
        return player.countCards('h',{color:'black'})>0;
    },
                viewAs:{
                    name:"wuxie",
                },
                prompt:"将一张黑色手牌当无懈可击使用",
                check:function (card){return 8-get.value(card)},
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
            "YSSG_shilve2":{
                audio:["kanpo",2],
                enable:"chooseToRespond",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAsFilter:function (player){
        return player.countCards('h',{color:'black'})>0;
    },
                viewAs:{
                    name:"shan",
                },
                prompt:"将一张黑色手牌当[闪]打出",
                check:function (card){return 8-get.value(card)},
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
            "YSSG_shilve":{
                locked:true,
                group:["YSSG_shilve1","YSSG_shilve2"],
            },
            "YSSG_duanke1":{
                audio:["paoxiao",2],
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        if(event.responded) return false;
        if(!event.filterCard({name:'shan'})) return false;
        return true;
    },
                content:function (){
        'step 0'
    trigger.target.chooseCardTarget({
    filterTarget:function(card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
     filterCard:function(card){
        return target.countCards('h',{name:'sha'})>0;
    },                    
        });
        'step 1'
        if(result.bool){
            event.target=result.targets[0];
            event.card=result.cards[0];
            event.target.useCard(event.card,event.target);
        }
        else{
            event.finish();
        }
        
    'step 2'
        if(result.bool){
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:{name:'shan'}}
        }
        else{
            event.finish();
        }          
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')&&current<0){
                    var nh=player.countCards('h');
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].countCards('h')>nh) return 0.4;
                    }
                }
            },
                    },
                },
            },
            "YSSG_duanke2":{
                audio:"ext:耀世三国:2",
                trigger:{
                    target:"shaBegin",
                },
                filter:function (event,player){
        if(event.responded) return false;
        if(!event.filterCard({name:'shan'})) return false;
        return player.countCards('h',{name:'sha'})>0;
    },
                check:function (event,player){
        if(get.attitude(player,_status.currentPhase)>0) return true;
        var nh=_status.currentPhase.countCards('h')+1;
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(players[i].countCards('h')>nh){
                if(!player.hasShan()||get.attitude(player,players[i])<=0) return true;
            }
        }
        return false;
    },
                content:function (){
        'step 0'
    player.chooseTarget('选择一个目标',lib.translate.YSSG_duanke_info,true,function(card,player,target){
    return player.canUse({name:'sha'},target,false)&&target!=player;
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});            
   'step 2'
if(result.bool){
    event.goto(3);
}
  else{
            event.finish();
        }        
   'step 3'     
    var target=result.targets[0];   
    player.chooseToUse({name:'sha'},target,-1,'对'+get.translation(target)+'使用一张杀').set('targetRequired',true);

    'step 4'
        if(result.bool){
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:{name:'shan'}}
        }
        else{
            event.finish();
        }        
      
   
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')&&current<0){
                    var nh=player.countCards('h');
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].countCards('h')>nh) return 0.4;
                    }
                }
            },
                    },
                },
            },
            "YSSG_duanke":{
                locked:true,
                group:["YSSG_duanke1","YSSG_duanke2"],
            },
            "YSSG_longdan":{
                audio:["longdan",2],
                trigger:{
                    player:["respond","useCard"],
                },
                direct:true,
                alter:true,
                filter:function (event){
return get.type(event.card)=='basic'&&event.card;
    },
                content:function (){
        'step 0'        
        player.chooseTarget('选择摸牌的角色',lib.translate.YSSG_longdan_info,true,function(card,player,target){
            return target!=_status.currentPhase;
        }).set('ai',function(target){
            return attitude(_status.event.player,target);            
        });        
        'step 1'
        if(result.bool){
            player.logSkill('YSSG_longdan');
            var target=result.targets[0];          
            target.draw();
        }
        else{
            event.finish();
        }
   },
                ai:{
                    effect:{
                        target:function (card,player){
                if(get.tag(card,'respond')&&player.countCards('h')>1) return [1,0.2];
            },
                    },
                },
            },
            "YSSG_lianhuan1":{
                audio:["lianhuan",2],
                trigger:{
                    global:"useCardToBegin",
                },
                priority:5,
                filter:function (event,player,target){
        return player==event.target&&player!=event.player;
    },
                content:function (){
        "step 0"
        if(!player.isLinked()){
            player.link(); 
            event.goto(1);
        }
        else{
            player.link(false);
            player.turnOver(false);
            event.goto(5);
        }
        "step 1"
     player.chooseBool('是否发动【连环】？').set('ai',function(){                    
                    if(player.isLinked()) return true;     
                    });
        "step 2"
        if(result.bool){
            event.goto(3);
        }
        else{
            event.finish();
        }
      "step 3"  
    player.chooseTarget('选择【连环】的目标',lib.translate.YSSG_lianhuan_info,true,function(card,player,target){
    return !target.isLinked();
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});        
"step 4"
if(result.bool){
    var target=result.targets[0];    
    target.link();
    event.finish();
}
        else{
            event.finish();
        }
        
        "step 5"
         player.chooseBool('是否发动【连环】？').set('ai',function(){                    
                    if(!player.isLinked()||!player.isTurnedOver()) return true;     
                    });
        "step 6"
        if(result.bool){
            event.goto(7);
        }
        else{
            event.finish();
        }
        "step 7"
         player.chooseTarget('选择重置的目标',lib.translate.YSSG_lianhuan_info,true,function(card,player,target){
    return target.isLinked()||target.isTurnedOver();
}).set('ai',function(target){
    return attitude(_status.event.player,target);            
});        
"step 8"
if(result.bool){
    var target=result.targets[0];    
    target.link(false);
    target.turnOver(false);
    event.finish();
}
        else{
            event.finish();
        }
    },
                ai:{
                    result:{
                        target:-1,
                        player:function (player){
                return player.isLinked()?0:-0.8;
            },
                    },
                    order:2,
                    expose:0.3,
                    effect:{
                        target:function (card){
                if(card.name=='tiesuo'){
                    return 0.5;
                }
            },
                    },
                },
            },
            "YSSG_lianhuan2":{
                audio:["lianhuan",2],
                trigger:{
                    player:"phaseBegin",
                },
                priority:5,
                filter:function (event,player){
        return player.isAlive();  
    },
                content:function (){
          "step 0"
        if(!player.isLinked()){
            player.link(); 
            event.goto(1);
        }
        else{
            player.link(false);
            player.turnOver(false);
            event.goto(5);
        }
        "step 1"
     player.chooseBool('是否发动【连环】？').set('ai',function(){                    
                    if(player.isLinked()) return true;     
                    });
        "step 2"
        if(result.bool){
            event.goto(3);
        }
        else{
            event.finish();
        }
      "step 3"  
    player.chooseTarget('选择【连环】的目标',lib.translate.YSSG_lianhuan_info,true,function(card,player,target){
    return !target.isLinked();
}).set('ai',function(target){
    return -attitude(_status.event.player,target);            
});        
"step 4"
if(result.bool){
    var target=result.targets[0];    
    target.link();
    event.finish();
}
        else{
            event.finish();
        }
        
        "step 5"
         player.chooseBool('是否发动【连环】？').set('ai',function(){                    
                    if(!player.isLinked()||!player.isTurnedOver()) return true;     
                    });
        "step 6"
        if(result.bool){
            event.goto(7);
        }
        else{
            event.finish();
        }
        "step 7"
         player.chooseTarget('选择重置的目标',lib.translate.YSSG_lianhuan_info,true,function(card,player,target){
    return target.isLinked()||target.isTurnedOver();
}).set('ai',function(target){
    return attitude(_status.event.player,target);            
});        
"step 8"
if(result.bool){
    var target=result.targets[0];    
    target.link(false);
    target.turnOver(false);
    event.finish();
}
        else{
            event.finish();
        }
    },
                ai:{
                    result:{
                        target:-1,
                        player:function (player){
                return player.isLinked()?0:-0.8;
            },
                    },
                    order:2,
                    expose:0.3,
                    effect:{
                        target:function (card){
                if(card.name=='tiesuo'){
                    return 0.5;
                }
            },
                    },
                },
            },
            "YSSG_lianhuan":{
                locked:true,
                group:["YSSG_lianhuan1","YSSG_lianhuan2"],
            },
            "YSSG_qiwu":{
                audio:["niepan",2],
                trigger:{
                    player:["turnOverAfter","linkAfter"],
                },
                frequent:true,
                filter:function (event,player){
        return !player.isTurnedOver()&&!player.isLink();
    },
                content:function (){
       player.draw();
    },
            },
            "YSSG_yirong":{
                audio:["enyuan",2],
                trigger:{
                    target:["shaAfter","taoAfter"],
                },
                check:function (event,player){
    if(event.card.name=='sha') return get.attitude(player,event.player)<0;
    if(event.card.name=='tao') return get.attitude(player,event.player)>0;
    },
                filter:function (event, player) {
         if(event.addedTargets) return false;
         return event.targets.length==1&&event.player != player&&event.card && (event.card.name == 'sha'|| event.card.name=='tao');
    },
                content:function () {
      if(trigger.card.name=='sha'){
      player.useCard({name:'sha'},trigger.player,false);    
      }
      if(trigger.card.name=='tao'){
      trigger.player.recover() ;
      }    
     },
                ai:{
                    expose:0.2,
                },
            },
            "YSSG_xuanhuo":{
                audio:["xuanhuo",2],
                enable:"phaseUse",
                usable:1,
                discard:false,
                prepare:"give2",
                filter:function (event,player){
        return player.countCards('he');
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('he');
    },
                content:function (){
        "step 0"
    player.chooseCard('he',true,'选择一张牌交给该角色').ai=function(card){
    return 5-get.value(card);
          };     
      "step 1"
    if(result.bool){ 
        var card=result.cards[0];
        player.$give(card,target);
        target.gain(card,player);
        player.gainPlayerCard(target,'he',true);      
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
            "YSSG_xiaoxi":{
                audio:["retieji",2],
                trigger:{
                    player:"shaBegin",
                },
                priority:6,
                filter:function (event,player){
        return event.target.countCards('h')>0;
    },
                direct:true,
                content:function (){
        "step 0"      
        player.choosePlayerCard(trigger.target,get.prompt('YSSG_xiaoxi',trigger.player),'h').set('ai',function(button){
                  return 10-get.value(button.link);
           });
        "step 1"
        if(result.bool){
            player.logSkill('YSSG_xiaoxi',trigger.player);
            event.card=result.links[0];
            player.showCards([event.card],get.translation(player)+'展示的手牌');
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.color(event.card)==get.color(trigger.card)){
            trigger.directHit=true;            
        }
        else{
        trigger.player.discard(event.card);
        }
    },
                ai:{
                    threaten:1.4,
                },
            },
            "YSSG_chiqu":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "YSSG_shengong":{
                audio:["liegong",2],
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                priority:6,
                filter:function (event,player){
        return event.target.countCards('he')>0;
    },
                direct:true,
                content:function (){
   //     var suit=get.suit(trigger.card);         
        if(trigger.target.countCards('he',{suit:get.suit(trigger.card)})){
            player.logSkill('YSSG_shengong');
            trigger.directHit=true;            
        }
     },
                ai:{
                    threaten:1.4,
                },
            },
        },
        translate:{
            "YSSG_danjing":"啖睛",
            "YSSG_danjing_info":"当你受到伤害后，你可令一名其他角色受到一点伤害 ",
            "YSSG_jushou":"据守",
            "YSSG_jushou_info":"结束阶段，你可以选择一项：当前体力：你翻面并摸等同当前体力数张牌；损失体力，你翻面并摸等同损失的体力值张牌，然后你可选择是否翻面",
            "YSSG_zhuoren":"擢任",
            "YSSG_zhuoren_info":"回合外，当你失去牌时，你可令一名手牌数最少之一的角色摸两张牌",
            "YSSG_shouzheng":"守正",
            "YSSG_shouzheng_info":"回合内，当你获得牌时，你可令一名手牌数最多之一的其他角色弃置两张牌",
            "YSSG_jifu":"疾赴",
            "YSSG_jifu_info":"你可以跳过一个主要阶段并弃置一个任意区的所有牌（至少一张），然后视为你对一名其他角色使用一张【杀】。",
            "YSSG_jifu1":"疾赴",
            "YSSG_jifu1_info":"undefined",
            "YSSG_jifu2":"疾赴",
            "YSSG_jifu2_info":"undefined",
            "YSSG_jifu3":"疾赴",
            "YSSG_jifu3_info":"undefined",
            "YSSG_jifu4":"疾赴",
            "YSSG_jifu4_info":"undefined",
            "YSSG_tiandu":"天妒",
            "YSSG_tiandu_info":"锁定技，判定阶段，若你延时区里没有牌，你进行判定。若为黑桃，你流失1点体力；当你的判定牌生效后，你获得之",
            "YSSG_yiji":"遗计",
            "YSSG_yiji_info":"当你每失去一点体力或受到伤害后，你可以摸两张牌，然后可以交给其他角色至多两张牌。",
            "YSSG_zhenji":"缜机",
            "YSSG_zhenji_info":"当你成为锦囊牌的目标后，你可以摸一张牌",
            "YSSG_qianlve":"箝略",
            "YSSG_qianlve_info":"当你使用锦囊牌指定目标后，你可以令一名目标角色弃置一张牌。",
            "YSSG_qiaobian":"巧变",
            "YSSG_qiaobian_info":"你可以跳过判定阶段和摸牌阶段，或当你受到伤害后，你可以将一名角色任意区的一张牌移至另一名角色相同区里",
            "YSSG_yizhong":"毅重",
            "YSSG_yizhong_info":"当你每回合首次成为【杀】的目标后，你可以令此【杀】不计入使用次数，然后取消之。",
            "xYSSG_houlve":"新后略",
            "YSSG_qiaobian2":"巧变",
            "YSSG_qiaobian2_info":"你可以跳过判定阶段和摸牌阶段，或当你受到伤害后，你可以将一名角色任意区的一张牌移至另一名角色相同区里",
            "YSSG_changqu":"长驱",
            "YSSG_changqu_info":"锁定技，你计算与装备区里有牌的角色的距离为1",
            "YSSG_tiandu2":"天妒",
            "YSSG_tiandu2_info":"undefined",
            "YSSG_jiezi":"截辎",
            "YSSG_jiezi_info":"当你使用黑色【杀】指定目标后，你可以将抵消方式改为视为对其使用一张【兵粮寸断】",
            "YSSG_xiaoguo":"骁果",
            "YSSG_xiaoguo_info":"其他角色的出牌阶段开始时，你可以令其将两张牌当【杀】对你使用。若为相同花色，此【杀】不可被响应。",
            "YSSG_xiaoguo2":"骁果",
            "YSSG_xiaoguo2_info":"",
            "YSSG_zhengji":"掷戟",
            "YSSG_zhengji_info":"出牌阶段限一次，你可以弃置两张手牌（不足全弃），然后对一名其他角色造成1点伤害",
            "YSSG_qingxi":"倾袭",
            "YSSG_qingxi_info":"结束阶段，你可以将装备区的所有牌收入手牌，然后视为你对一名其他角色使用一张【杀】。",
            "YSSG_yingshi":"鹰视",
            "YSSG_yingshi_info":"当一名角色的判定牌生效前，你可以打出一张牌代替或替换之。若为替换，当前回合角色对你造成1点伤害",
            "YSSG_langgu":"狼顾",
            "YSSG_langgu_info":"当你受到1点伤害后，你可以获得或弃置伤害来源一张牌。若为弃置，你摸一张牌。",
            "YSSG_houlve":"后略",
            "YSSG_houlve_info":"若你没有手牌，你可以摸一张牌，然后视为你使用一张【无懈可击】",
            "YSSG_luoyi":"裸衣",
            "YSSG_luoyi_info":"出牌阶段限一次，你可以展示所有手牌（至少一张），然后视为你使用一张【决斗】",
            "YSSG_luoying":"落英",
            "YSSG_luoying_info":"回合外，当你失去梅花牌后，你可以摸一张牌。",
            "YSSG_zuifu":"醉赋",
            "YSSG_zuifu_info":"当你受到伤害后，你可以获得牌堆的一张锦囊牌，然后你可以重铸一张牌",
            "YSSG_jizui":"击坠",
            "YSSG_jizui_info":"当你使用【杀】指定目标后，你可以对目标角色造成1点伤害。若如此做，若此【杀】造成伤害，你须失去一点体力",
            "YSSG_jizui2":"击坠",
            "YSSG_jizui2_info":"",
            "YSSG_jianxiong":"奸雄",
            "YSSG_jianxiong_info":"每当你受到伤害后，你可以获得对你造成伤害的牌，并且摸两张牌，然后须弃置一张牌",
            "YSSG_rende":"仁德",
            "YSSG_rende_info":"牌阶段限一次，你可以将至少一张手牌交给其他角色，然后视为你使用一张基本牌。",
            "YSSG_xiezheng":"协正",
            "YSSG_xiezheng_info":"当你使用【杀】指定目标后，或当你成为【杀】的目标时，你可以将一张牌替换牌堆顶的一张牌。此【杀】结算后，你可以令一名其他角色也如此做。",
            "YSSG_jingce":"精策",
            "YSSG_jingce_info":"出牌阶段开始时，你可以摸至多两张牌。弃牌阶段，若你弃置手牌，你失去一点体力",
            "YSSG_jingce2":"精策",
            "YSSG_jingce2_info":"",
            "YSSG_zhengzhou":"整州",
            "YSSG_zhengzhou_info":"当一名角色失去最后的手牌后，你可以令其重铸所有牌并摸两张牌。",
            "YSSG_xingbian":"星变",
            "YSSG_xingbian_info":"当一名角色的判定牌生效后，你可以弃置任意张牌。当你下次发动“整州”时，你将描述中“并”改为“或”。",
            "YSSG_rezhengzhou":"整州",
            "YSSG_rezhengzhou_info":"当一名角色失去最后的手牌后，你可以令其重铸所有牌或摸两张牌。",
            "YSSG_zhijue":"智绝",
            "YSSG_zhijue_info":"当你使用锦囊牌时，你可以令当前回合角色摸一张牌。",
            "YSSG_sidi":"司敌",
            "YSSG_sidi_info":"出牌阶段限一次，你可以令一名其他角色弃置至少一张牌，若如此做，你可以弃置等量张基本牌，然后视为你对其使用一张【决斗】。",
            "YSSG_yongxian":"勇陷",
            "YSSG_yongxian_info":"当你使用【杀】指定目标后，你与目标角色各可以令你摸一张牌。若以此法获得两张牌，你流失1点体力。若以此法获得一张牌，此【杀】不可被响应。",
            "YSSG_zhaowu1":"武圣",
            "YSSG_zhaowu1_info":"你可以将一张红色牌当[杀]使用",
            "YSSG_zhaowu2":"昭武",
            "YSSG_zhaowu2_info":"你可以将一张红色牌当[决斗]使用",
            "YSSG_zhaowu":"昭武",
            "YSSG_zhaowu_info":"你可以将一张红色牌当【杀】或【决斗】使用或打出",
            "YSSG_shilve1":"识略",
            "YSSG_shilve1_info":"你可以将你的任意一张♠或♣手牌当【无懈可击】使用。",
            "YSSG_shilve2":"识略",
            "YSSG_shilve2_info":"你可以将你的任意一张♠或♣手牌当【闪】打出。",
            "YSSG_shilve":"识略",
            "YSSG_shilve_info":"你可以将一张黑色手牌当【闪】打出或当【无懈可击】使用",
            "YSSG_duanke1":"断喝",
            "YSSG_duanke1_info":"",
            "YSSG_duanke2":"断喝",
            "YSSG_duanke2_info":"",
            "YSSG_duanke":"断喝",
            "YSSG_duanke_info":"当你使用【杀】指定目标后，或当你成为【杀】的目标后，你可以将抵消方式改为使用一张【杀】",
            "YSSG_longdan":"龙胆",
            "YSSG_longdan_info":"当你使用或打出基本牌时，你可以令一名非当前回合角色摸一张牌",
            "YSSG_lianhuan1":"连环",
            "YSSG_lianhuan1_info":"准备阶段，或当你成为其他角色使用的牌的目标后，你可以横置或重置你的武将牌，然后可以令一名角色如此做。",
            "YSSG_lianhuan2":"连环",
            "YSSG_lianhuan2_info":"准备阶段，或当你成为牌的目标后，你可以横置或重置武将牌，然后可以令一名角色如此做。",
            "YSSG_lianhuan":"连环",
            "YSSG_lianhuan_info":"准备阶段，或当你成为牌的目标后，你可以横置或重置武将牌，然后可以令一名角色如此做。",
            "YSSG_qiwu":"栖梧",
            "YSSG_qiwu_info":"当你重置武将牌后，你可以摸一张牌。",
            "YSSG_yirong":"逸翮",
            "YSSG_yirong_info":"当其他角色对你使用的【杀】或【桃】结算后，你可以视为对其使用之",
            "YSSG_xuanhuo":"眩惑",
            "YSSG_xuanhuo_info":"出牌阶段限一次，你可以交给一名其他角色一张牌，然后获得其一张牌。",
            "YSSG_xiaoxi":"骁袭",
            "YSSG_xiaoxi_info":"当你使用【杀】指定目标后，你可以展示目标角色一张手牌。若该牌与此【杀】为相同颜色，此【杀】不可被响应，否则弃置之。",
            "YSSG_chiqu":"驰驱",
            "YSSG_chiqu_info":"锁定技，你的进攻距离+1",
            "YSSG_shengong":"神弓",
            "YSSG_shengong_info":"锁定技，当你使用【杀】指定目标后，若目标角色有与此【杀】相同花色的牌，此【杀】不可被响应。",
        },
    },
    intro:"<li>代码：咫尺天涯",
    author:"<li>技能设计：丫奶",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["YSSG_zhangfei.jpg"],"card":[],"skill":[]}}})