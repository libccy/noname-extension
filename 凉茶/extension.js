game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"凉茶",content:function (config,pack){
    if(config.suijihuanwujiangpai){		
    lib.skill._suijihuanwujiangpai={
     trigger:{
                    global:"roundStart",
                },
          forced:true,          
                content:function (){
                    "step 0"                
                    var targets=game.filterPlayer();                   
                    targets.sort(lib.sort.seat);
                    event.targets=targets;                
                    "step 1"
                    event.num=0;          
                    "step 2"
                    if(num<event.targets.length){
                          var list;
        if(_status.connectMode){
           list=get.charactersOL(function(i){
               return lib.character[i][1]!='shen';
           });
        }
        else{        
        list=get.gainableCharacters(function(info){
                return info[1]==['shen','shu','wei','wu','qun'].randomGet();
            });
        }
        var name=list.randomGet();        
        var a=event.targets[num].hp;
        var b=event.targets[num].maxHp;
        event.targets[num].init(name);
        event.targets[num].hp=a; 
        event.targets[num].maxHp=b;
        event.targets[num].update();        
        event.num++;
        event.redo();
        }
        else event.finish();     
                },
    }
    }
	lib.skill._lc_shiji={
        trigger:{global:'gameStart',player:['enterGame','phaseBegin','phaseEnd']},
        forced:true,
        unique:true,
        locked:true,
        priority:Infinity,
        filter:function (event,player){
   return game.hasPlayer(function(current){
			return current.name=='lc_liangcha';
		});
    },
    content:function (){   
				if(player.name!='lc_liangcha'){
			if(player.maxHp>16) player.maxHp=2;      
        player.update();
			player.addSkill('baiban');
			player.clearSkills();
			player.turnOver(true);
		}
     },
     }	 
	 	 
	 lib.skill._lc_fanmian2={
        trigger:{player:'turnOverBegin'},
        forced:true,
        unique:true,
        locked:true,
        priority:2019,
		filter:function (event,player){
			if(player.name=='lc_liangcha') return false;
			return player.isTurnedOver()&&game.hasPlayer(function(current){
			return current.name=='lc_liangcha';
		});     
    },
     content:function (){        		
		trigger.cancel();	
     },
     }
	
	lib.skill._lc_shanghai={
        trigger:{player:'damageBegin'},
        forced:true,
        unique:true,      
        priority:2019,
		filter:function (event,player){
		   return event.source&&event.source.name=='lc_liangcha';
    },
     content:function (){        		
		player.loseMaxHp(trigger.num);	
		trigger.num+=2*trigger.num;
     },
     }
	 
	 lib.skill._lc_mopai={
        trigger:{player:'phaseDrawBegin'},
        forced:true,
        unique:true,
        locked:true,
        priority:2019,       
		filter:function (event,player){
		   return player.name=='lc_liangcha';
    },
     content:function (){     
		var num=game.countPlayer(function(current){
			return current.isDamaged();
		});
		trigger.num+=num;		
     },
     }
	 
	 lib.skill._lc_siwang={
        trigger:{player:['damageEnd','dieBegin','phaseDiscardEnd']},
        forced:true,
        unique:true,
        locked:true,
        priority:Infinity,     
		filter:function (event,player){
		   return player.name=='lc_liangcha';
    },
     content:function (){  
     'step 0' 	  
		trigger.cancel();
		'step 1'
		if(player.maxHp<16){
		player.maxHp=Infinity;
		player.hp=Infinity;
		player.update();
		}
     },
     }
     
	 lib.skill._lc_juli={
        mod:{
        globalTo:function (from,to,distance){
            if(to.name=='lc_liangcha') return distance+Infinity;
        },
		globalFrom:function(from,to,distance){
			if(from.name=='lc_liangcha') return distance-Infinity;
		},
		cardUsable:function(card,player,num){
			if(player.name=='lc_liangcha') return Infinity;
		},
		targetEnabled:function(card,player,target,now){						
				if(target.name=='lc_liangcha'&&player!=target) return false;						
					},
		selectTarget:function(card,player,range){
			var type=get.type(card);
                if(type!='delay'){
			if(card.name!='jiedao'&&card.name!='wuzhong'&&card.name!='wuxie'&&player.name=='lc_liangcha'&&range[1]!=-1) range[1]+=Infinity;
				}
		},			
        },
     }
	 
},precontent:function (){
    
},config:{
	"suijihuanwujiangpai":{
     name:'每轮随机替换武将牌',
    "intro":"开启后重启游戏生效。每轮开始时，所有角色随机替换武将牌",
    init:false
	},		
},help:{},package:{
    character:{
        character:{
         //   "lc_liangcha":["female","shen",Infinity,["lcs_liangcha","lcs_fanghua","lc_meiying"],["boss","bossallowed"]],
            "lc_liangcha":["female","shen",Infinity,["lcs_liangcha","lcs_fanghua","lc_meiying"],[]],
        },
        translate:{
            "lc_liangcha":"凉茶",
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
			"lcs_liangcha":{
		    	trigger:{global:'gameStart'},
        frequent:true,
        unique:true,
        priority:2019,		
     content:function (){     
      //此技能的代码已被隐藏    				
     },               
            },
			"lcs_fanghua":{
        trigger:{player:'phaseBegin'},
        frequent:true,
        unique:true,
        priority:2019,		
     content:function (){    
      //此技能的代码已被隐藏     				
     },               
            },
            "lc_meiying":{
        trigger:{player:'phaseUseBegin'},
        frequent:true,
        unique:true,
        priority:2019,		
     content:function (){       
      //此技能的代码已被隐藏   		
     },                            
            },			
        },
        translate:{
	        "lcs_liangcha":"凉茶",
            "lcs_liangcha_info":"游戏开始或你进入游戏时，所有其他角色失去所有的技能，并且翻面（无法翻回正面的那种），若有角色的体力上限大于16，则其体力上限改为2",
	        "lcs_fanghua":"芳华",
            "lcs_fanghua_info":"锁定技，你造成的伤害时，改为先失去等量的体力上限，再受到等同两倍此伤害值的伤害。摸牌阶段时（每回合限一次）额外摸X张牌（X为场上已受伤的角色数）",
            "lc_meiying":"魅影",
            "lc_meiying_info":"锁定技，你的进攻与防御距离无限、你使用的牌无次数限制、部分合理的牌可指定任意名目标且不能成为其他角色的牌的目标",
        },
    },
    intro:"本扩展没抗性代码",
    author:"凉茶（QQ：764235332）",
    diskURL:"",
    forumURL:"",
    version:"1.1",
},files:{"character":["lc_liangcha.jpg"],"card":[],"skill":[]}}})
