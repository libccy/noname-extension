game.import('extension',{
    name:'辅助卡牌',
    content:function(config){
game.addCharacterPack({
            skill:{
               "_yr_loseMaxHp":{
                trigger:{
                    player:"loseMaxHpBefore",
                },
                forced:true,
                popup:false,
                silent:true,
                content:function (){
            player.logSkill('yr_loseMaxHp');          
             },
            },
            "yr_loseMaxHp":{
                audio:"ext:辅助卡牌:true",
            },
            "duji88888":{
                mark:true,
                trigger:{
                    player:["phaseEnd"],
                },
                forced:true,
                popup:false,
                marktext:"毒",
                intro:{
                    content:function (storage){
return '回合结束流失一点体力直到回复体力'
},
                },
                content:function (){
                    player.loseHp();
                },
            },
            "_yr_recover":{
                trigger:{
                    player:"recoverBefore",
                },
                forced:true,
                popup:false,
                silent:true,
                content:function (){
            player.logSkill('yr_recover');          
             },
            },
            "yr_recover":{
                audio:"ext:辅助卡牌:true",
            },
            "huixue8888888":{
                mark:true,
                trigger:{
                    player:["phaseBegin"],
                },
                forced:true,
                popup:false,
                marktext:"回",
                intro:{
                    content:function (storage){
return '回合开始回复一点体力直到受到伤害'
},
                },
                content:function (){
                        player.recover();
            },
            },
            "_xr_loseMaxHp":{
                trigger:{
                    player:"loseMaxHpBefore",
                },
                forced:true,
                popup:false,
                silent:true,
                content:function (){
            player.logSkill('xr_loseMaxHp');          
             },
            },
            "xr_loseMaxHp":{
                audio:"ext:辅助卡牌:true",
            },
            "_xr_gainMaxHp":{
                trigger:{
                    player:"gainMaxHpBefore",
                },
                forced:true,
                popup:false,
                silent:true,
                content:function (){
            player.logSkill('xr_gainMaxHp');          
             },
            },
            "xr_gainMaxHp":{
                audio:"ext:辅助卡牌:true",
            },
            },
            translate:{
               "duji88888":"毒剂",
            "huixue8888888":"回血药",
            }
        });



        game.addCard('duji888881',{
             audio:true,
                fullskin:true,
                type:"basic",
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return !target.hasSkill('duji88888');
    },
                content:function (){
                    target.storage.duji88888=card;
                    target.addTempSkill('duji88888',{player:'recoverEnd'});               
},
                ai:{
                    basic:{
                        order:7.1,
                        useful:1.5,
                        value:7,
                    },
                    result:{
                        target:function (player,target){
if(target.maxHp<4) return target.maxHp-5;
return -1;
            },
                    },
                },
        },{
            translate:'毒剂',
            description:'出牌阶段，你可以令一名没有“毒”标记的角色直到其回复体力为止，每个结束阶段流失一点体力',
            number:parseInt(config.duji888881)
        });

        game.addCard('huixue88888881',{
            audio:true,
                type:"basic",
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return !target.hasSkill('huixue8888888');
    },
                content:function (){
                    target.storage.huixue8888888=card;
                    target.addTempSkill('huixue8888888',{player:'damageEnd'});            
},
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                    order:2.2,
                    result:{
                        target:2,
                    },
                    tag:{
                        recover:1,
                    },
                },
                fullskin:true,
        },{
            translate:'回血药',
            description:'出牌阶段，你可以令一名没有“回”标记的角色直到其受到伤害为止，每个开始阶段回复一点体力',
            number:parseInt(config.huixue88888881)
        });
		
		game.addCard('W_miji',{
           type:"trick",
                enable:true,
                selectTarget:-1,
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){        
   var skills=[]; 
   for(var i in lib.character){ 
   for(var j=0;j<lib.character[i][3].length;j++){ 
   var info=lib.skill[lib.character[i][3][j]];
   if(info&&(info.gainable||!info.unique)){
   skills.add(lib.character[i][3][j]); 
                  }
                } 
              }
   var link=skills.randomGet();                   
    player.addSkill(link);
    // player.mark(link,{name:get.translation(link),content:lib.translate[link+'_info']     });
    //               player.logSkill('dunwu');
   game.log(player,'获得技能','【'+get.translation(link)+'】');
     },
                ai:{
                    order:9,
                    result:{
                        target:1,
                    },
                    value:10,
                },
                fullskin:true,
        },{
            translate:'秘籍',
            description:'出牌阶段，对自己使用。你随机获得一个技能。',
            number:parseInt(config.W_miji)
        });
		
		game.addCard('xr_zhan',{
            audio:true,
                fullskin:true,
                type:"basic",
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){                            if(get.distance(player,target,'attack')>1) return false;
        return target!=player;
    },
                modTarget:true,
                content:function (){
        "step 0"
        var next=target.chooseToRespond({name:'shan'});
        next.set('ai',function(card){
            var evt=_status.event.getParent();
            if(ai.get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
                                return 1;
        });    
  next.autochoose=lib.filter.autoRespondShan;
        "step 1"
        if(result.bool==false){
          target.loseMaxHp();
        }
    },
                ai:{
                    basic:{
                        order:7.1,
                        useful:1.5,
                        value:7,
                    },
                    result:{
                        target:function (player,target){
if(target.maxHp<4) return target.maxHp-5;
return -1;
            },
                    },
                },
        },{
            translate:'斩',
            description:'出牌阶段，对攻击范围内的一名角色使用，目标必须使用一张【闪】来抵消，否则扣减一点体力上限',
            number:parseInt(config.xr_zhan)
        });
		
		game.addCard('xr_xiantao',{
            type:"basic",
                vanish:true,
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){
        target.gainMaxHp();
    },
                ai:{
                    order:9,
                    result:{
                        target:1,
                    },
                    value:10,
                },
                fullskin:true,
        },{
            translate:'仙桃',
            description:'出牌阶段，对自己使用，增加一点体力上限',
            number:parseInt(config.xr_xiantao)
        });
    },
	
    image:["duji888881.png","huixue88888881.png","xr_xiantao.png","xr_zhan.png","W_miji.png"],
    config:{
        "duji888881":{
		"name":"毒剂(数量)",
		"init":"3",
		"item":{"0":"不开启","1":"1","3":"3","5":"5","7":"7"}
		},
		"huixue88888881":{
		"name":"回血药(数量)",
		"init":"4",
		"item":{"0":"不开启","2":"2","4":"4","6":"6","8":"8"}
		},
	"xr_zhan":{
		"name":"斩(数量)",
		"init":"4",
		"item":{"0":"不开启","2":"2","4":"4","6":"6","8":"8"}
		},
		"xr_xiantao":{
		"name":"仙桃(数量)",
		"init":"4",
		"item":{"0":"不开启","2":"2","4":"4","6":"6","8":"8"}
		},
	"W_miji":{
		"name":"技能卡牌(数量)",
		"init":"8",
		"item":{"0":"不开启","2":"2","4":"4","6":"6","8":"8"}
		},
    },
});
