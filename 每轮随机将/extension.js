game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"每轮随机将",editable:false,content:function (config,pack){
    if(config.suijihuanwujiangpai){		
    lib.skill._suijihuanwujiangpai={
     trigger:{
                    global:"roundStart",
                },
          forced:true,
          frequent:true,
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
},precontent:function (){
    
},config:{
		"suijihuanwujiangpai":{
            name:'随机替换武将牌',
           "intro":"开启后重启游戏生效。每轮开始时所有角色随机替换武将牌",
            init:false
		},							
},help:{},package:{
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
    intro:"",
    author:"凉茶<li>需要代写技能代码的可在扩展交流1、2群找我，平均每个技能5元，简单的技能、下单定做数量多者可优惠，难度偏大的，价格略微上浮。非诚勿扰！",
    diskURL:"",
    forumURL:"",
    version:"1.2",
},files:{"character":[],"card":[],"skill":[]}}})
