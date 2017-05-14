game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"统率三军",content:function (config,pack){
    _status.mode=get.config('versus_mode');
    if(config.other){
        lib.arenaReady.push(function(){
            lib.translate.heart2='红桃♥'
            lib.translate.diamond2='方块♦'
            lib.translate.club2='梅花♣'
            lib.translate.spade2='黑桃♠'
            
            /*lib.translate.zhu="主公"
            lib.translate.zhong="忠臣"
            lib.translate.mingzhong="忠臣"
            lib.translate.nei="内奸"
            lib.translate.fan="反贼"
            lib.translate.cai="❓"
            
            lib.translate.杯具='杯具❌'   
            lib.translate.洗具='洗具✅'*/
            lib.card.wuzhong.content=function (){				
					if(get.is.versus()&&(lib.config['extension_统率三军_version']!='first'&&lib.config['extension_统率三军_version']!='second')){                        
						if(game.friend.contains(target)){
							if(game.friend.length<game.enemy.length){
								target.draw(3);return;
							}
						}
						else{
							if(game.friend.length>game.enemy.length){
								target.draw(3);return;
							}
						}                       
					}
					target.draw(2);
            }			
            lib.skill.zhuge_skill={
                mod:{
                    cardUsable:function(card,player,num){
                        if(card.name=='sha'){
                            if(get.is.versus()&&(lib.config['extension_统率三军_version']!='first'&&lib.config['extension_统率三军_version']!='second')){                                
								return num+3;                                
							}
							return Infinity;
						}
					}
				},
			}                                               
            lib.skill.qinglong_skill.content=function (){
                    "step 0"
                    if(player.hasSkill('jiu')){
                        game.broadcastAll(function(player){
                            player.removeSkill('jiu');
                        },player);
                        event.jiu=true;
                    }
                    player.chooseToUse(get.prompt('qinglong'),{name:'sha'},trigger.target,-1).logSkill='qinglong_skill';
                    "step 1"
                    if(result.bool/*&&_status.currentPhase==player*/){
                        player.getStat().card.sha--;
                    }
                    else if(event.jiu){
                        player.addSkill('jiu');
                    }
                }
            
        }
                           )
    }
    
    
    if(_status.mode=='three'){
        'step 0'
        lib.arenaReady.push(function(){
            lib.translate.trueZhu='主帅'
		    lib.translate.falseZhu='主帅'
		    lib.translate.trueZhong='前锋'
		    lib.translate.falseZhong='前锋'
            lib.translate.jianchu='猛进'
            
                     
            lib.character.zhangliao[3]=["vs_tuxi"] 
            lib.character.guojia[3]=["ol_yiji","tiandu"]                  
            lib.character.caocao[3]=["jianxiong"]
            lib.character.wenpin[3]=["vs_zhenwei"]
            lib.character.dianwei[3]=["qiangxi"]
            lib.character.re_lidian[3]=["ol_xunxun","ol_wangxi"]            
            lib.character.re_zhangliao[3]=["vs_retuxi"]
            
            
            lib.character.zhangfei[3]=["ol_paoxiao"]
            lib.character.re_zhangfei[3]=["ol_paoxiao",'retishen']
            lib.character.jiangwei[3]=["tiaoxin","vs_zhiji"]
            lib.character.liubei[3]=["rende"]
            lib.skill.rende.prepare='give2'
                       
            lib.character.sunjian[3]=["gzyinghun"]
            lib.character.sunce[3]=["vs_jiang","vs_hunzi"]
            lib.character.xiaoqiao[3]=["tianxiang","hongyan"]
            lib.character.zhugejin[3]=["vs_hongyuan","vs_huanshi","ol_mingzhe"]
            lib.character.sunquan[3]=["zhiheng"] 
            lib.character.lingtong[3]=["ol_xuanfeng"]    
        }
                           )
        'step 1'
        if(lib.config['extension_统率三军_version']=='original'){            	
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'caocao','simayi','zhangliao','guojia','xiahoudun','xiahouyuan','xuhuang','wenpin','zhenji',
                    'liubei','zhugeliang','guanyu','zhangfei','zhaoyun','machao','huangyueying','jiangwei',
                    'sunquan','ganning','huanggai','zhouyu','zhugejin','daqiao','sunshangxiang','sunjian','xiaoqiao','sunce',
                    'huatuo','lvbu','diaochan','jiaxu','pangde','chengong',
                ]
                                
                lib.character.xiahoudun[3]=["vs_ganglie"]
                lib.character.xiahouyuan[3]=["vs_shensu",'vs_suzi']
                               
                lib.character.zhaoyun[3]=["vs_longdan","vs_jiuzhu"]                   
                lib.character.guanyu[3]=["wusheng","vs_zhongyi"]                
                lib.character.machao[3]=["vs_tieqi","mashu"]
                
                
                lib.character.zhouyu[3]=["yingzi","vs_fanjian"]
                lib.character.huanggai[3]=["vs_kurou"]
                
                                         
                
                lib.character.lvbu[3]=["wushuang",'vs_wumou',"vs_shenji","mashu"]
            }
                               )
        }
        if(lib.config['extension_统率三军_version']=='first'){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'caocao','simayi','zhangliao','guojia','zhenji','xiahoudun','xiahouyuan','xuchu','caoren',
                    'liubei','guanyu','zhangfei','zhugeliang','zhaoyun','huangyueying','weiyan','huangzhong',
                    'sunquan','ganning','huanggai','zhouyu','daqiao','sunshangxiang','luxun','xiaoqiao','zhoutai','lvmeng',
                    'huatuo','lvbu','diaochan','sp_zhangjiao',
                ]
                lib.character.caoren[3]=["jushou"]
                lib.character.xiahouyuan[3]=["shensu"]      
                
                lib.character.weiyan[3]=["kuanggu"]
                lib.character.huangzhong[3]=["liegong"]
                         
                lib.character.zhoutai[3]=["gzbuqu"]
                         
                lib.character.sp_zhangjiao[3]=["leiji","guidao"]
                
            }
                               )
        }
        if(lib.config['extension_统率三军_version']=='second'){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'caocao','simayi','zhangliao','guojia','zhenji','xuhuang','xiahouyuan','xuchu',
                    'liubei','guanyu','zhangfei','zhugeliang','zhaoyun','huangyueying','menghuo','huangzhong',
                    'sunquan','ganning','huanggai','zhouyu','daqiao','sunshangxiang','luxun','xiaoqiao','zhoutai','sunjian','zhugejin',
                    'huatuo','lvbu','diaochan',
                ]
                lib.character.xiahouyuan[3]=["shensu"] 
                
                lib.character.huangzhong[3]=["liegong"]
                                
                lib.character.zhoutai[3]=["gzbuqu"]
                
                       
            }
                               )
        }
        if(lib.config['extension_统率三军_version']=='forth'){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'caocao','simayi','zhangliao','guojia','zhenji','xiahoudun','xiahouyuan','xuhuang','wenpin',
                    'liubei','guanyu','zhangfei','zhugeliang','zhaoyun','huangyueying','jiangwei','machao',
                    'sunquan','ganning','huanggai','zhouyu','daqiao','sunshangxiang','sunjian','xiaoqiao','sunce','zhugejin',
                    'huatuo','lvbu','diaochan','pangde','jiaxu',
                ]
                lib.character.xiahoudun[3]=["vs_ganglie"]
                lib.character.xiahouyuan[3]=["shensu"]      
                
                lib.character.zhaoyun[3]=["longdan","vs_jiuzhu"]         
                lib.character.guanyu[3]=["vs_zhongyi","wusheng"]
                                                                         
                lib.character.lvbu[3]=["vs_zhanshen","wushuang"]
                lib.character.pangde[3]=["mashu","mengjin"]
            }
                               )
        }
        if(lib.config['extension_统率三军_version']=='fifth'){
            lib.arenaReady.push(function(){
                                                                                  
                lib.character.re_huanggai[3]=["rekurou","ol_zhaxiang"]
                
            }
                             )
        }
        if(lib.config['extension_统率三军_version']=='seventh'){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'wangyi','re_simayi','re_zhangliao','re_xuchu','re_guojia','wangji','zhenji','dianwei','re_lidian','xunyou','zhongyao','yuejin',
                    're_zhangfei','zhugeliang','re_machao','huangyueying','jiangwei','liuchen','huangzhong','mizhu','madai','xin_fazheng','re_xushu','liyan',
                    'sunquan','re_ganning','re_daqiao','sunshangxiang','sunjian','yufan','lingtong','zhugejin','guyong','sunce','handang','xiaoqiao',
                    'diaochan','caifuren','gongsunyuan','pangde',
                ]
                
                lib.character.wangji[3]=["ol_qizhi",'ol_jinqu']
                               
                lib.character.liyan[3]=["ol_duliang",'ol_fulin']
                                                                
            }
                               )
        }
        'step 2'
        if(lib.config['extension_统率三军_version']!='fifth'&&lib.config['extension_统率三军_version']!='seventh'){
            lib.arenaReady.push(function(){
                lib.cardsThree=[
        ["spade",7,"sha"],
        ["spade",8,"sha"],
        ["spade",8,"sha"],
        ["spade",9,"sha"],
		["spade",9,"sha"],
		["spade",10,"sha"],
		["spade",10,"sha"],
        
		["club",2,"sha"],
		["club",3,"sha"],
		["club",4,"sha"],
		["club",5,"sha"],
		["club",6,"sha"],
		["club",7,"sha"],
		["club",8,"sha"],
		["club",8,"sha"],
		["club",9,"sha"],
		["club",9,"sha"],
		["club",10,"sha"],
		["club",10,"sha"],
		["club",11,"sha"],
		["club",11,"sha"],
		["heart",10,"sha"],
		["heart",10,"sha"],
		["heart",11,"sha"],
		["diamond",6,"sha"],
		["diamond",7,"sha"],
		["diamond",8,"sha"],
		["diamond",9,"sha"],
		["diamond",10,"sha"],
		["diamond",13,"sha"],
		["heart",2,"shan"],
		["heart",2,"shan"],
		["heart",13,"shan"],
		["diamond",2,"shan"],
		["diamond",2,"shan"],
		["diamond",3,"shan"],
		["diamond",4,"shan"],
		["diamond",5,"shan"],
		["diamond",6,"shan"],
		["diamond",7,"shan"],
		["diamond",8,"shan"],
		["diamond",9,"shan"],
		["diamond",10,"shan"],
		["diamond",11,"shan"],
		["diamond",11,"shan"],
		["heart",3,"tao"],
		["heart",4,"tao"],
		["heart",6,"tao"],
		["heart",7,"tao"],
		["heart",8,"tao"],
		["heart",9,"tao"],
		["heart",12,"tao"],
		["diamond",12,"tao"],

		["spade",2,"bagua"],
		["club",2,"bagua"],
		["spade",5,"jueying"],
		["club",5,"dilu"],
		["heart",13,"zhuahuang"],
		["heart",5,"chitu"],
		["spade",13,"dawan"],
		["diamond",13,"zixin"],
		["club",1,"zhuge"],
		["diamond",1,"zhuge"],
        ["spade",2,"cixiong"],
		["spade",6,"qinggang"],
		["spade",5,"qinglong"],
		["spade",12,"zhangba"],
		["diamond",5,"guanshi"],
		["diamond",12,"fangtian"],
		["heart",5,"qilin"],

		["heart",3,"wugu"],
		["heart",4,"wugu"],
		["heart",1,"taoyuan"],
		["spade",7,"nanman"],
		["spade",13,"nanman"],
		["club",7,"nanman"],
		["heart",1,"wanjian"],
		["spade",1,"juedou"],
		["club",1,"juedou"],
		["diamond",1,"juedou"],
		["heart",7,"wuzhong"],
		["heart",8,"wuzhong"],
		["heart",9,"wuzhong"],
		["heart",11,"wuzhong"],
		["spade",3,'shunshou'],
		["spade",4,'shunshou'],
		["spade",11,'shunshou'],
		["diamond",3,'shunshou'],
		["diamond",4,'shunshou'],
		["spade",3,'guohe'],
		["spade",4,'guohe'],
		["spade",12,'guohe'],
		["club",3,'guohe'],
		["club",4,'guohe'],
		["heart",12,'guohe'],
		["club",12,'jiedao'],
		["club",13,'jiedao'],
		["spade",11,'wuxie'],
		["heart",12,'wuxie'],
	    ["diamond",12,'wuxie'],
		["club",13,'wuxie'],
		["spade",6,'lebu'],
		["club",6,'lebu'],
		["heart",6,'lebu'],
		["spade",2,'hanbing'],
		["club",2,'renwang'],

   	    ["spade",1,"bingliang"],
		["club",11,"bingliang"]
                ]
            }
                               )
        }
    }
},precontent:function (){
    
    
},help:{"统率将池":"<ul><li>2011：标准版武将+风包武将（去除于吉）<li>2012：在2011的基础上，【去除】吕蒙、夏侯惇、张角、曹仁、魏延；【加入】孙坚、孟获、徐晃、庞德、诸葛瑾。<li>2014：在2012的基础上，【去除】许褚、黄忠、孟获、周泰、陆逊；【加入】贾诩、姜维、孙策、文聘；【修改】赵云、关羽、吕布、夏侯惇。<li>2015：【魏】界李典、徐晃、荀攸、邓艾、界曹操、界司马懿、【蜀】界刘备、界张飞、诸葛亮、界赵云、界马超、黄月英、姜维、马谡、【吴】孙权、界甘宁、徐盛、界黄盖、界周瑜、界大乔、界陆逊、孙尚香、丁奉、孙坚、孙策、顾雍、诸葛瑾、小乔、凌统、【群】陈宫、界公孙瓒、界华佗、貂蝉、蔡夫人<li>2017：【魏】界张辽、王异、界许褚、界郭嘉、甄姬、典韦、界李典、荀攸、界司马懿、钟繇、王基、乐进、【蜀】界张飞、诸葛亮、界赵云、界马超、黄月英、姜维、刘谌、黄忠、糜竺、马岱、法正、界徐庶、李严、【吴】孙权、界甘宁、界大乔、孙尚香、丁奉、孙坚、孙策、顾雍、诸葛瑾、小乔、虞翻、韩当、【群】貂蝉、蔡夫人、公孙渊、庞德"},config:{"version":{"name":"版本","init":"seventh","item":{"original":"原创","first":"2011","second":"2012","forth":"2014","fifth":"2015","seventh":"2017"},"restart":true},"other":{"name":"其它修正","init":true}},package:{
    character:{
        character:{
            "测试":["male","wei",4,["ol_wushuang"],[]],
        },
        translate:{
            "测试":"测试",
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
            "vs_zhanshen":{
                skillAnimation:true,
                audio:"ext:统率三军:2",
                group:"vs_zhanshen_die",
                derivation:["mashu","vs_shenji"],
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
return player.hp<player.maxHp&&player.storage.vs_zhanshen==true&&!player.storage.vs_zhanshen_die;
},
                forced:true,
                priority:3,
                content:function (){
player.loseMaxHp();
player.discard(player.get('e','1'));
player.addSkill('mashu');
player.addSkill('vs_shenji');
player.awakenSkill('vs_zhanshen');
player.storage.vs_zhanshen_die=true;
player.storage.vs_zhanshen=false;
},
                ai:{
                    effect:{
                        target:function (card,player,target){
                
                if(get.tag(card,'damage')){
                    if(target.hp==target.maxHp&&player.storage.vs_zhanshen==true) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player.storage.vs_zhanshen==true) return [0,0];
            },
                    },
                },
                subSkill:{
                    die:{
                        popup:false,
                        silent:true,
                        trigger:{
                            global:"dieEnd",
                        },
                        filter:function (event,player){
 return event.player.isFriendOf(player)&&player.storage.vs_zhanshen==false; 
},
                        forced:true,
                        init:function (player){
player.storage.vs_zhanshen=false;
},
                        content:function (){
 player.storage.vs_zhanshen=true;
},
                    },
                },
            },
            "vs_jiuzhu":{
                audio:"ext:统率三军:2",
                trigger:{
                    global:"dying",
                },
                priority:6,
                filter:function (event,player){
return event.player!=player&&event.player.hp<=0&&player.num('he')>0&&player.hp>1&&event.player.isFriendOf(player);
},
                check:function (event,player,card){
        if(card.name=='tao'&&player.countCards('h','tao')+event.player.hp>=0) return true;
        if(event.player.identity=='zhu') return true;
        return false;
        
    },
                direct:true,
                content:function (){
"step 0"
var next=player.chooseToDiscard(get.prompt('vs_jiuzhu',trigger.player),'he');
next.logSkill=['vs_jiuzhu',trigger.player];
next.set('ai',function(card){
    if(card.name=='tao') return -10;
if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
var player=_status.event.player;
if(ai.get.attitude(player,_status.event.getTrigger().player)>3){
return 11-ai.get.value(card);
}
return -1;
});
"step 1"
if(result.bool){
player.loseHp();
    game.delay();
trigger.player.recover();
}
},
            },
            "vs_shenji":{
                forced:true,
                audio:"ext:统率三军:2",
                trigger:{
                    player:"useCardBefore",
                },
                filter:function (event,player){
    return event.card&&event.card.name=='sha'&&player.hasSkill('vs_shenji')&&event.targets.length>1;
     },
                content:function (){
        /*player.logSkill('vs_shenji');*/
    
    },
                mod:{
                    selectTarget:function (card,player,range){
            if(range[1]==-1) return;
            if(player.get('e','1')) return;
            if(card.name=='sha') range[1]+=2;
        },
                },
                ai:{
                    threaten:1.5,
                    effect:{
                        target:function (card,player,target,current){
                if(get.subtype(card)=='equip1') return -1;
            },
                    },
                },
            },
            "vs_zhongyi":{
                audio:"ext:统率三军:2",
                unique:true,
                enable:"phaseUse",
                filter:function (event,player){
return player.storage.vs_zhongyi==false&&player.num('he',{color:'red'})>0;
},
                init:function (player){
player.storage.vs_zhongyi=false;
},
                mark:true,
                intro:{
                    content:"cards",
                },
                skillAnimation:"legend",
                animationColor:"metal",
                position:"he",
                filterCard:function (card){
return get.color(card)=='red';
},
                check:function (card){
return 8-ai.get.useful(card);
},
                discard:false,
                content:function (){               
        targets=game.filterPlayer(function(current){
            return current.side==player.side;
                });        
        player.line(targets,'green');
        game.log(player,'将',cards,'置于武将牌上');
        game.log(targets,'获得','vs_zhongyi','效果');
        player.awakenSkill('vs_zhongyi');
        player.storage.vs_zhongyi=cards;
        player.addSkill('vs_zhongyi_sha');
        player.addSkill('vs_zhongyi_lose');        
        player.syncStorage('vs_zhongyi');                    
        player.$give(player.storage.vs_zhongyi,player,false);
        player.lose(cards,ui.special);
        player.markSkill('vs_zhongyi');
        
},
                subSkill:{
                    sha:{
                        popup:false,
                        silent:true,
                        trigger:{
                            global:"damageBegin",
                        },
                        forced:true,
                        priority:10,
                        filter:function (event,player){                            
return event.source!=undefined&&event.source.isFriendOf(player)&&event.card&&event.card.name=='sha'; 
            },
                        check:function (event,player){
return ai.get.attitude(player,event.source)>0&&ai.get.attitude(player,event.player)<0;
},
                        content:function (){
trigger.num++;    
},
                    },
                    lose:{
                        forced:true,
                        trigger:{
                            global:"phaseAfter",
                        },
                        filter:function (event,player){
               for(var i=0;i<game.players.length;i++){
                    if(game.players[i].stat.length<player.stat.length) return false;    
              }
                return true;                
                /*for(var i=0;i<game.players.length;i++){
                    if(!game.players[i].classList.contains('acted')) return false;
               return true;}*/
            },
                        content:function (){
                targets=game.filterPlayer(function(current){
            return current.side==player.side;
                });  
                game.log(player,'将',player.storage.vs_zhongyi,'置入弃牌堆');
                game.log(targets,'失去','vs_zhongyi','效果');
player.$throw(player.storage.vs_zhongyi);           
player.storage.vs_zhongyi=true;      
player.removeSkill('vs_zhongyi_sha');
player.removeSkill('vs_zhongyi_lose'); 
              player.unmarkSkill('vs_zhongyi');
            },
                    },
                },
            },
            "vs_hunzi":{
                skillAnimation:true,
                audio:"hunzi",
                derivation:["yingzi","gzyinghun","reyingzi"],
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.hp==1&&!player.storage.vs_hunzi;
    },
                forced:true,
                priority:3,
                content:function (){
       'step 0'
        player.loseMaxHp();
        
        player.addSkill('gzyinghun');
        player.awakenSkill('vs_hunzi');
        player.storage.vs_hunzi=true;
        game.createTrigger('phaseBegin','gzyinghun',player,trigger);
        'step 1'
        if(lib.config['extension_统率三军_version']=='forth'||lib.config['extension_统率三军_version']=='original'){
             player.addSkill('yingzi');
        }
        else {
            player.addSkill('reyingzi');
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
            "vs_ganglie":{
                audio:"ganglie",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function (){
"step 0"
player.chooseTarget(get.prompt('vs_ganglie'),
                    function(card,player,target){
return target.isEnemyOf(player);
})        
.ai=function(target){
                    return ai.get.damageEffect(target,player,player);
                }

"step 1"
            if(result.bool){
                    player.logSkill('vs_ganglie',result.targets);
                event.target=result.targets[0];
player.judge(function(card){
if(get.suit(card)=='heart') return -2;
return 2;
})
            };
"step 2"
if(result.judge<2){
event.finish();return;
}
event.target.chooseToDiscard(2).set('ai',function(card){
if(card.name=='tao') return -10;
if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
return ai.get.unuseful(card)+2.5*(5-get.owner(card).hp);
});
"step 3"
if(result.bool==false){
event.target.damage();
}
},
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing')) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*2];
                    if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                }
            },
                    },
                },
            },
            "vs_huanshi":{
                audio:"huanshi",
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){            
        if(event.player.isEnemyOf(player)){return false;}
        return player.num('he')>0;
    },
                content:function (){
        "step 0"
  
    
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('vs_huanshi'),'he').set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=ai.get.attitude(player,trigger.player);
            if(attitude==0||result==0) return 0;
            if(attitude>0){
                return result-ai.get.value(card)/2;
            }
            else{
                return -result-ai.get.value(card)/2;
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.bool){
            player.respond(result.cards,'highlight');
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.logSkill('huanshi');
            if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast(function(card){
                    if(card.clone){
                        card.clone.classList.remove('thrownhighlight');
                    }
                },trigger.player.judging[0]);
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
            }
            ui.discardPile.appendChild(trigger.player.judging[0]);
            trigger.player.judging[0]=result.cards[0];
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(result.cards[0]);
            }
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
            game.delay(2);
        }
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "vs_hongyuan":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                audio:"hongyuan",
                content:function (){
        "step 0"
        var check;
        if(!player.hasFriend()){
            check=false;}
        
        else{
        
            player.chooseBool(get.prompt('hongyuan'));
    
            
        }
        
        
        "step 1"
        if(result.bool){
            
            
                targets=game.filterPlayer(function(current){
                    return current!=player&&current.side==player.side;
                });
            
            
            player.logSkill('hongyuan',targets);
            game.asyncDraw(targets);
            trigger.num--;
        }
    },
            },
            "vs_zhenwei":{
                audio:"zhenwei",
                global:"vs_zhenwei_distance",
                group:"vs_zhenwei_die",
                forced:true,
                unique:true,
                skillAnimation:true,
                animationColor:"thunder",
                trigger:{
                    global:"gameDrawAfter",
                },
                intro:{
                    content:"当文聘存活时，对方角色计算与你的距离+1。",
                },
                content:function (){
    
        targets=game.filterPlayer(function(current){
            return current!=player&&current.side==player.side;
                });
        player.line(targets,'green');
        game.log(targets,'获得','zhenwei','效果');
        for(var i=0;i<targets.length;i++){
            targets[i].markSkill('vs_zhenwei');         
        }                                      
    },
                ai:{
                    threaten:1.5,
                },
                subSkill:{
                    die:{
                        popup:false,
                        silent:true,
                        forced:true,
                        trigger:{
                            player:"dieBegin",
                        },
                        content:function (){
    
        targets=game.filterPlayer(function(current){
            return current!=player&&current.side==player.side;
                });       
        game.log(targets,'失去','zhenwei','效果');
        for(var i=0;i<targets.length;i++){
            targets[i].unmarkSkill('vs_zhenwei');         
        }                                      
    },
                    },
                    distance:{
                        mod:{
                            globalTo:function (from,to,distance){
            if(to.isFriendOf(from)) return;
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(players[i].hasSkill('vs_zhenwei')&&
                    players[i].isFriendOf(to)&&players[i]!=to){
                    return distance+1;
                }
            }
        },
                        },
                    },
                },
            },
            "vs_jueji":{
                forced:true,
                trigger:{
                    player:"useCardBefore",
                },
                filter:function (event,player){
    return event.card&&event.card.name=='sha'&&player.hasSkill('vs_jueji')&&event.targets.length>1;
     },
                content:function (){
        game.trySkillAudio('fangtian_skill',player);
        
    
    },
                mod:{
                    selectTarget:function (card,player,range){
            if(player.getEquip(1)) return;
            if(card.name!='sha') return;
            if(range[1]==-1) return;
            var cards=player.getCards('h');
            for(var i=0;i<cards.length;i++){
                if(cards[i].classList.contains('selected')==false)
                    return;
            }
            range[1]+=2;
        },
                },
            },
            "vs_wumou":{
                audio:"wumou",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
                    
return get.type(event.card)=='trick'&&event.card.name!='juedou';
       /* get.type(event.card)=='delay'*/
                
},
                content:function (){
                            "step 0"
                           
                   player.chooseToDiscard('he','无谋：弃置一张牌，或取消并失去一点体力').set('ai',function(card){
                        
                        
                            if(card.name=='tao') return -10;
                        if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                        return get.unuseful(card)+2.5*(5-get.owner(card).hp);
                        
                    });
                    "step 1"
                            if(result.bool==false){
                        
    
                    
               
                        
                        
player.loseHp();
                    
}
                
},
            },
            "vs_fanjian":{
                audio:"fanjian",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;              
    },
                filterCard:true,
                check:function (card){
        return 8-get.value(card);
    },
                discard:false,
                content:function (){
        'step 0'
        event.card=cards;
         player.lose(event.card,ui.special);
        
        var node=player.$throw(event.card);
node.classList.add('infohidden');
node.classList.add('infoflip');
ui.refresh(node);
                event.node=node;
        game.delay(1.5);
        

         
        'step 1'
        
        
        target.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'heart2';
                case 1:case 4:case 5:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
            }
        });
        'step 2'
        game.log(target,'选择了'+get.translation(result.control));
        
        event.choice=result.control;
        target.popup(event.choice);
        /*game.delay();*/
        "step 3"
            node=event.node;
setTimeout(function(){
node.style.transition='all ease-in 0.2s';
node.style.transform='perspective(600px) rotateY(90deg) translateX(52px)';        
var onEnd=function(){
node.classList.remove('infohidden');
node.style.transition='all 0s';
ui.refresh(node);
node.style.transform='perspective(600px) rotateY(-90deg) translateX(52px)';
ui.refresh(node);
node.style.transition='';
ui.refresh(node);
node.style.transform='';
node.removeEventListener('webkitTransitionEnd',onEnd);
}
node.addEventListener('webkitTransitionEnd',onEnd);
},200);
ui.refresh(node);
        game.delay(2);
        'step 4'
        
        
        
        
        if(get.suit(event.card)+'2'!=event.choice){
            target.popup('猜错❌');
            game.delay();
            target.loseHp();
        }
        else {
            target.popup('猜对⭕');
            game.delay();
        }
       
        
        
        "step 5"
        if(target.isAlive()){
            target.gain(event.card,'log');
            target.$gain2(event.card);
        
        }
        
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                var eff=get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.getCards('h');
                for(i=0;i<cards.length;i++){
                    value+=get.value(cards[i]);
                }
                value/=player.countCards('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                },
            },
            "vs_liegong":{
                mod:{
                    targetInRange:function (card,player,target){
            if(card.name=='sha'&&card.number){
                if(get.distance(player,target)<=card.number) return true;
            }
        },
                },
                audio:"liegong",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
                    return get.attitude(player,event.target)<=0;
                },
                logTarget:"target",
                filter:function (event,player){
                    var length=event.target.countCards('h');
                    return (length>=player.hp||length<=player.getAttackRange());
                },
                content:function (){
                    trigger.directHit=true;
                },
            },
            "vs_suzi":{
                audio:"ext:统率三军:2",
                unique:true,
                gainable:true,
                trigger:{
                    global:"dieEnd",
                },
                priority:5,
                filter:function (event,player){
        return event.playerCards&&event.playerCards.length>0&&event.player.isEnemyOf(player)
    },
                check:function (event){
        for(var i=0;i<event.playerCards.length;i++){
            if(event.playerCards[i].name=='du') return false;
        }
        return true;
    },
                content:function (){
        "step 0"
        player.gain(trigger.playerCards);
        player.$draw(trigger.playerCards);
        game.delay();
        "step 1"
        for(var i=0;i<trigger.playerCards.length;i++){
            trigger.cards.remove(trigger.playerCards[i]);
        }
        trigger.playerCards.length=0;
    },
            },
            "vs_shensu":{
                audio:2,
                group:["vs_shensu_1","vs_shensu_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        direct:true,
                        content:function (){
                "step 0"
                var check= player.countCards('h')>2;
                player.chooseTarget(get.prompt('vs_shensu'),function(card,player,target){
                    if(player==target) return false;
                    return player.canUse({name:'sha'},target,false);
                }).set('check',check).set('ai',function(target){
                    if(!_status.event.check) return 0;
                    return get.effect(target,{name:'sha'},_status.event.player);
                });
                "step 1"
                if(result.bool){
                    player.logSkill('vs_shensu',result.targets);
                    player.useCard({name:'sha'},result.targets[0],false);
                    player.skip('phaseJudge');
                    player.skip('phaseDraw');
                }
            },
                    },
                    "2":{
                        trigger:{
                            player:"phaseUseBefore",
                        },
                        direct:true,
                        filter:function (event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                        content:function (){
        "step 0"
        var check=player.needsToDiscard();
        player.chooseCardTarget({
            prompt:get.prompt('vs_shensu'),
            filterCard:function(card,player){
                return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player)
            },
            position:'he',
            filterTarget:function(card,player,target){
                if(player==target) return false;
                return player.canUse({name:'sha'},target,false);
            },
            ai1:function(card){
                if(_status.event.check) return 0;
                return 6-get.value(card);
            },
            ai2:function(target){
                if(_status.event.check) return 0;
                return get.effect(target,{name:'sha'},_status.event.player);
            },
            check:check
        });
        "step 1"
        if(result.bool){
            player.logSkill('vs_shensu',result.targets);
            player.discard(result.cards[0]);
            player.useCard({name:'sha'},result.targets[0]);
            trigger.untrigger();
            trigger.finish();
                    player.skip('phaseDiscard');
        }
    },
                    },
                },
            },
            "vs_zhaxiang":{
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return target!=player;
    },
                init:function (player){
player.storage.vs_zhaxiang=false;
},
                content:function (){
                   "step 0"
           var hs=player.getCards('h');
                            if(hs.length){
        target.viewCards(get.translation(player)+'的手牌',hs);}
                    
                    "step 1"
       
        
        player.loseHp(1);
        player.storage.vs_zhaxiang=target;
        player.addTempSkill('vs_zhaxiang2','phaseAfter');
                    
      
    },
                ai:{
                    threaten:1.3,
                    basic:{
                        order:10,
                    },
                    result:{
                        player:function (player){
                if(player.countCards('h')>=player.hp-1) return -1;
                if(player.hp<3) return -1;
                return 1;
            },
                    },
                },
            },
            "vs_qice":{
                enable:"phaseUse",
                usable:1,
                audio:"qice",
                filter:function (event,player){
        return player.countCards('h')>0
    },
                chooseButton:{
                    dialog:function (){
            var list=['taoyuan','wugu','juedou','jiedao','guohe','shunshou','wuzhong','wanjian','nanman'];
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
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isOut()){
                    if(players[i].hp<players[i].maxHp){
                        if(get.attitude(player,players[i])>0){
                            if(players[i].hp<2){
                                lose--;
                                recover+=0.5;
                            }
                            lose--;
                            recover++;
                        }
                        else if(get.attitude(player,players[i])<0){
                            if(players[i].hp<2){
                                lose++;
                                recover-=0.5;
                            }
                            lose++;
                            recover--;
                        }
                    }
                    else{
                        if(get.attitude(player,players[i])>0){
                            lose--;
                        }
                        else if(get.attitude(player,players[i])<0){
                            lose++;
                        }
                    }
                }
            }
            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
            return (button.link[2]=='wuzhong')?1:-1;
        },
                    backup:function (links,player){
            return {
                filterCard:true,
                selectCard:-1,
                audio:'qice',
                popname:true,
                viewAs:{name:links[0][2]},
            }
        },
                    prompt:function (links,player){
            return '将全部手牌当作'+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                var num=0;
                var cards=player.getCards('h');
                if(cards.length>=3&&player.hp>=3) return 0;
                for(var i=0;i<cards.length;i++){
                    num+=Math.max(0,get.value(cards[i],player,'raw'));
                }
                num/=cards.length;
                num*=Math.min(cards.length,player.hp);
                return 12-num;
            },
                    },
                    threaten:1.6,
                },
            },
            "vs_tuxi":{
                audio:"ext:统率三军:2",
                trigger:{
                    player:"phaseDrawBefore",
                },
                direct:true,
                content:function (){
        "step 0"
        var check;
        var i,num=game.countPlayer(function(current){
            return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
        });
        check=(num>=2);
        player.chooseTarget(get.prompt('tuxi'),[1,2],function(card,player,target){
            return target.countCards('h')>0&&player!=target;
        },function(target){
            if(!_status.event.aicheck) return 0;
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        }).set('aicheck',check);
        "step 1"
        if(result.bool){
            
            player.logSkill('tuxi',result.targets);
            event.targets=result.targets;
            event.targets.sort(lib.sort.seat);
            trigger.untrigger();
            trigger.finish();
            
           /* player.gainPlayerCard(event.targets.all(),'h',true);
                player.gainPlayerCard(event.targets.shift(),'h',true);*/
                 
            
             
        }
        else{
            event.finish();
        }
         'step 2'    
         if(result.bool){
             if(event.targets.length){
            player.gainPlayerCard(event.targets.shift(),'h',true);
                 
            event.redo();
             }
         }
        else{
            event.finish();
        }
         
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            "vs_retuxi":{
                audio:"retuxi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('retuxi'),[1,trigger.num],function(card,player,target){
            return target.countCards('h')>0&&player!=target&&target.countCards('h')>=player.countCards('h');
        },function(target){
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        });
        "step 1"
        if(result.bool){
            player.logSkill('retuxi',result.targets);
            event.targets=result.targets;
            
            trigger.num-=result.targets.length;
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
             if(event.targets.length){
            player.gainPlayerCard(event.targets.shift(),'h',true);
                 
            event.redo();
             }
         }
         "step 3"
        if(trigger.num<=0) game.delay();
    },
                ai:{
                    threaten:1.6,
                    expose:0.2,
                },
            },
            "ol_duliang":{
                audio:"duliang",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                init:function (player){
        for(var i=0;i<game.players.length;i++){
            game.players[i].storage.ol_duliang_delay=0;
        }
    },
                content:function (){
        'step 0'
        
        player.gainPlayerCard(target,'h',true);
        
        'step 1'
        var name=get.translation(target.name);
        player.chooseControl(function(){
            return Math.random()<0.5?'选项一':'选项二';
        }).set('prompt','督粮').set('choiceList',['令'+name+'观看牌堆顶的两张牌，然后获得其中的基本牌','令'+name+'于下个摸牌阶段额外摸一张牌']);
        'step 2'
        if(result.control=='选项一'){
            var cards=get.cards(2);
            target.viewCards('督粮',cards);
            event.cards2=[];
            for(var i=0;i<cards.length;i++){
                if(get.type(cards[i])=='basic'){
                    ui.special.appendChild(cards[i]);
                    event.cards2.push(cards[i]);
                }
                else{
                    ui.discardPile.appendChild(cards[i]);
                }
            }
        }
        else{
            if(!target.hasSkill('ol_duliang_delay')){
            target.addSkill('ol_duliang_delay');
                target.syncStorage('ol_duliang_delay');
                target.markSkill('ol_duliang_delay');
                target.storage.ol_duliang_delay++;
            }
            else if(target.hasSkill('ol_duliang_delay')){
                target.storage.ol_duliang_delay++;
            }
            
            


            event.finish();
        }
        'step 3'
        if(event.cards2&&event.cards2.length){
            target.gain(event.cards2,'draw');
            game.log(target,'获得了'+get.cnNumber(event.cards2.length)+'张牌');
        }
    },
                ai:{
                    order:4,
                    result:{
                        target:-1,
                        player:0.1,
                    },
                },
                subSkill:{
                    delay:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        audio:false,
                        prority:9,
                        intro:{
                            content:function (storage){
                    
                    return '下个摸牌阶段额外摸'+storage+'张牌';
                },
                        },
                        content:function (){
               /* trigger.num++;*/
                 player.unmarkSkill('ol_duliang_delay');
                 trigger.num+=player.storage.ol_duliang_delay;
               /* trigger.num+cnNumber(storage);*/
                player.storage.ol_duliang_delay=0;
                /*player.storage.ol_duliang=1;*/
                
                player.removeSkill('ol_duliang_delay');
                
            },
                    },
                },
            },
            "vs_jiang":{
                group:["vs_jiang_sha","vs_jiang_juedou"],
                audio:"jiang",
                audioname:"sunce",
                ai:{
                    effect:{
                        target:function (card,player,target){
                if((card.name=='sha'&&get.color(card)=='red')||card.name=='juedou') return [1,0.6];
            },
                        player:function (card,player,target){
                if((card.name=='sha'&&get.color(card)=='red')||card.name=='juedou') return [1,1];
            },
                    },
                },
                subSkill:{
                    sha:{
                        audio:"jiang",
                        audioname:"sunce",
                        trigger:{
                            player:"shaBefore",
                            target:"shaBefore",
                        },
                        filter:function (event,player){
        
        return get.color(event.card)=='red';
    },
                        frequent:true,
                        content:function (){
        player.draw();
    },
                    },
                    juedou:{
                        audio:"jiang",
                        audioname:"sunce",
                        trigger:{
                            player:"useCard",
                            target:"useCard",
                        },
                        filter:function (event,player){
        if(event.card.name=='juedou') return true;
        
    },
                        frequent:true,
                        content:function (){
        player.draw();
    },
                    },
                },
            },
            "vs_zhiji":{
                skillAnimation:true,
                audio:"zhiji",
                unique:true,
                priority:-10,
                derivation:"guanxing",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        if(player.storage.zhiji) return false;
        return player.countCards('h')==0;
    },
                content:function (){
        "step 0"
        player.awakenSkill('zhiji');
        player.loseMaxHp();
        if(player.hp>player.maxHp) player.hp=player.maxHp;
        "step 1"
        if (player.hp==player.maxHp){
            player.chooseControl('zhiji_draw',function(event,player){
                return 'zhiji_draw';});
            /*player.draw(2);
            event.goto(3);*/
            
        }
        else {player.chooseControl('zhiji_recover','zhiji_draw',function(event,player){
            if(player.hp>=2) return 'zhiji_draw';
            return 'zhiji_recover';
        });}
        "step 2"
        if(result.control=='zhiji_draw'){
            player.draw(2);
        }
        else{
            player.recover();
        }
        "step 3"
        
        player.storage.zhiji=true;
        
        player.update();
        player.addSkill('guanxing');
        game.createTrigger('phaseBegin','guanxing',player,trigger);
    },
            },
            "vs_longdan":{
                audio:"longdan",
                group:["longdan_sha","longdan_shan","vs_longdan_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
             
                return event.skill=='longdan_sha'||event.skill=='longdan_shan';
            },
                        content:function (){
                player.draw();
            },
                    },
                },
            },
            "vs_jiuzhu1":{
                audio:"ext:统率三军:2",
                trigger:{
                    global:"dying",
                },
                priority:6,
                filter:function (event,player){
return event.player!=player&&event.player.hp<=0&&player.num('he')>0&&player.hp>1&&event.player.isFriendOf(player);
},
                check:function (event,player,card){
        if(card.name=='tao'&&player.countCards('h','tao')+event.player.hp>=0) return 1;
        if(event.player.identity!='zhu') return 10
        return -1;
        
    },
                direct:true,
                content:function (){
"step 0"
var next=player.chooseCard(get.prompt('vs_jiuzhu1',trigger.player),'he');
next.logSkill=['vs_jiuzhu1',trigger.player];
next.set('ai',function(card){
     if(get.position(card)=='e') return -1;
                            if(card.name=='shan') return 1;
                            if(card.name=='tao') return 1.5;
                            return 0;
});
        
"step 1"
if(result.bool){
    player.logSkill('vs_jiuzhu1',trigger.player);
    player.loseHp();
    trigger.player.gain(result.cards,player);
                    player.$give(result.cards,trigger.player);
                    

    game.delay();
trigger.player.recover();
}
},
            },
            "vs_kurou":{
                audio:"kurou",
                audioname:"huanggai",
                group:["vs_kurou_draw","vs_kurou_sha","vs_kurou_damage"],
                enable:"phaseUse",
                content:function (){
        player.loseHp(1);
    },
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        player:function (player){
                if(player.countCards('h')>=player.hp-1) return -1;
                if(player.hp<3) return -1;
                return 1;
            },
                    },
                },
                subSkill:{
                    damage:{
                        popup:false,
                        silent:true,
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){                            
return event.source!=undefined&&(event.source.isFriendOf(player)||event.source==player); 
            },
                        check:function (){return false;},
                        content:function (){
                trigger.untrigger();
                trigger.finish();
                
                trigger.player.loseHp(trigger.num);
            },
                    },
                    draw:{
                        popup:false,
                        silent:true,
                        trigger:{
                            player:"loseHpEnd",
                        },
                        forced:true,
                        init:function (player){
player.storage.vs_kurou=0;
},
                        filter:function (event){
        return (event.num>0)
    },
                        content:function (){        
            if(_status.currentPhase!=player){
                player.draw(2*trigger.num);
                  /* player.addTempSkill('vs_kurou_sha',{player:'phaseAfter'});*/
                  player.logSkill('vs_kurou');
                player.storage.vs_kurou++;
            }
        else {player.draw(2*trigger.num);}
            },
                    },
                    sha:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
                player.storage.vs_kurou=0;
            },
                        mod:{
                            cardUsable:function (card,player,num){
            if(card.name=='sha') return num+player.storage.vs_kurou/*(player.maxHp-player.hp)*/;
        },
                        },
                    },
                },
            },
            "ol_qizhi":{
                audio:"qizhi",
                group:"ol_qizhi_1",
                init:function (player){
        
        player.storage.ol_qizhi=0;
    },
                intro:{
                    content:function (storage){
            
            return '已发动过'+storage+'次奇制';
        },
                },
                trigger:{
                    player:"useCard",
                },
                direct:true,
                filter:function (event,player){
        if(!event.targets) return false;
        if(_status.currentPhase!=player) return false;
        var type=get.type(event.card,'trick');
        if(type!='basic'&&type!='trick') return false;
        if(event.noai) return false;
        return game.hasPlayer(function(target){
            return !event.targets.contains(target)&&target.countCards('he')>0;
        });
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('ol_qizhi'),function(card,player,target){
            return !_status.event.getTrigger().targets.contains(target)&&target.countCards('he')>0;
        }).set('ai',function(target){
            var player=_status.event.player;
            if(target==player) return 2;
            if(get.attitude(player,target)<=0){
                return 1
            }
            return 0.5;
        });
        'step 1'
        if(result.bool){
            player.storage.ol_qizhi++;
            player.markSkill('ol_qizhi');
            if(!event.isMine()&&!_status.connectMode) game.delay();
            player.logSkill('ol_qizhi',result.targets);
            player.discardPlayerCard(result.targets[0],true,'he');
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        'step 2'
        event.target.draw();
    },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseAfter",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
                player.storage.ol_qizhi=0;
                player.unmarkSkill('ol_qizhi');
            },
                    },
                },
            },
            "ol_jinqu":{
                audio:"jinqu",
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        return player.storage.ol_qizhi>=player.countCards('h');
    },
                prompt:function (event,player){
        if(typeof player.storage.ol_qizhi!='number'){
            '进趋：是否摸两张牌并将手牌弃置至'+get.cnNumber(0)+'张？';
        }
        return '进趋：是否摸两张牌并将手牌弃置至'+get.cnNumber(player.storage.ol_qizhi)+'张？';
    },
                content:function (){
        'step 0'
        player.draw(2);
        'step 1'
        if(typeof player.storage.ol_qizhi!='number'){
            player.storage.qizhi=0;
        }
        var dh=player.countCards('h')-player.storage.ol_qizhi;
        if(dh>0){
            player.chooseToDiscard(dh,true);
        }
    },
            },
            "ol_paoxiao":{
                trigger:{
                    player:"shaBegin",
                },
                audio:"paoxiao",
                group:["ol_paoxiao_1","ol_paoxiao_2"],
                forced:true,
                audioname:["zhangfei"],
                filter:function (event,player){
        return player.hasSkill('ol_paoxiao')&&player.storage.paoxiao>=2;
    },
                content:function (){
        

    },
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
        player.storage.paoxiao=0;
    },
                    },
                    "2":{
                        trigger:{
                            player:"shaBegin",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
        player.storage.paoxiao++;
    },
                    },
                },
            },
            "ol_yiji2":{
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
      
        event.num=trigger.num;
        "step 1"
          event.count=2; 
        player.draw(2);
        
       
        "step 2"
        player.chooseCardTarget({
            
            selectCard:[1,1],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
        "step 3"
        if(result.bool){
            event.count--;
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards,result.targets[0]);
            
            
            if(event.count>0) event.goto(2);
        
                
       
       }
                             
       'step 4'
           event.num--;
                    if(event.num>0){
                        
                        event.goto(1);
                    
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing')) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*3];
                    if(target.hp==3) return [1,get.tag(card,'damage')*2];
                    if(target.hp==2) return [1,get.tag(card,'damage')*1];
                }
            },
                    },
                },
            },
            "ol_xuanfeng":{
                audio:"ext:统率三军:2",
                trigger:{
                    player:["loseEnd","phaseDiscardEnd"],
                },
                direct:true,
                filter:function (event,player){
        if(event.name=='phaseDiscard'){
            return event.cards&&event.cards.length>1
        }
        else{
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].original=='e') return true;
            }
        }
        return false;
    },
                content:function (){
        "step 0"
        event.num=2
         "step 1"
       
        
        player.chooseTarget(get.prompt('ol_xuanfeng'),function(card,player,target){
            if(player==target) return false;
            return target.countCards('he');
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 2"
        if(result.bool){
            player.logSkill('ol_xuanfeng',result.targets);
            event.targets=result.targets
            player.discardPlayerCard(event.targets[0],'he',true);
            
        event.num--;
                    if(event.num>0){
                       
                        event.goto(1);
                    }}
        
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                    noe:true,
                },
            },
            "vs_tieqi":{
                audio:"tieji",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                logTarget:"target",
                content:function (){
        "step 0"
        player.judge(function(){return 0});
        if(!trigger.target.hasSkill('fengyin')){
            trigger.target.addTempSkill('fengyin','phaseAfter');
        }
        "step 1"
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
        "step 2"
        if(!result.bool){
            trigger.directHit=true;
        }
    },
            },
            "vs_mengjin":{
                audio:"mengjin",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event){
        return event.target.countCards('he')>0;
    },
                direct:true,
                content:function (){
        'step 0'
        player.discardPlayerCard(trigger.target,get.prompt('vs_mengjin',trigger.target)).set('ai',function(button){
            if(!_status.event.att) return 0;
            if(get.position(button.link)=='e') return get.value(button.link);
            return 1;
        }).set('logSkill',['vs_mengjin',trigger.target]).set('att',get.attitude(player,trigger.target)<=0);
        'step 1'
        if(result.bool&&result.links&&result.links.length){
            if(get.type(result.links[0])=='equip'){
                trigger.directHit=true;
            }
            else if(trigger.cards){
                trigger.target.gain(trigger.cards,'gain2','log');
            }
        }
    },
            },
            "ol_yiji":{
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
         
        event.num=trigger.num;
        "step 1"
        player.draw(2);
        "step 2"
        event.cards=result;
        "step 3"
        player.chooseCardTarget({
            filterCard:function(card){
                return _status.event.getParent().cards.contains(card);
            },
            selectCard:[1,event.cards.length],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
        "step 4"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards.length,result.targets[0]);
            for(var i=0;i<result.cards.length;i++){
                event.cards.remove(result.cards[i]);
            }
            if(event.cards.length) event.goto(3);
        
                
       
       }
                             
       'step 5'
           event.num--;
                    if(event.num>0){
                        
                        event.goto(1);
                    
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing')) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*3];
                    if(target.hp==3) return [1,get.tag(card,'damage')*2];
                    if(target.hp==2) return [1,get.tag(card,'damage')*1];
                }
            },
                    },
                },
            },
            "ol_xunxun":{
                audio:"xunxun",
                trigger:{
                    player:"phaseDrawBegin",
                },
                priority:10,
                check:function (event,player){
        return !player.hasSkill('reyiji2');
    },
                content:function (){
        "step 0"
        event.cards=get.cards(4);
        player.chooseCardButton(event.cards,2,'选择两张牌置于牌堆顶').set('ai',ai.get.buttonValue);
        "step 1"
        if(result.bool){
            var choice=[];
            for(var i=0;i<result.links.length;i++){
                choice.push(result.links[i]);
                cards.remove(result.links[i]);
            }
            for(var i=0;i<cards.length;i++){
                ui.cardPile.appendChild(cards[i]);
            }
            while(choice.length){
                ui.cardPile.insertBefore(choice.pop(),ui.cardPile.firstChild);
            }
        }
    },
            },
            "ol_wangxi":{
                audio:"wangxi",
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                priority:10,
                filter:function (event){
        return event.num&&event.source&&event.player&&
        event.player.isAlive()&&event.source.isAlive()&&event.source!=event.player;
    },
                check:function (event,player){
        if(event.player==player) return get.attitude(player,event.source)>-3;
        return get.attitude(player,event.player)>-3;
    },
                logTarget:function (event,player){
        if(event.player==player) return event.source;
        return event.player;
    },
                content:function (){
        "step 0"
        event.num=trigger.num;
        "step 1"           
        game.asyncDraw([trigger.player,trigger.source],1);
        game.delay();
         
        'step 2'
    
        event.num--;
               if(event.num>0){
                       
                        event.goto(1);
                    }
    
        
        
    },
            },
            "ol_zhaxiang":{
                init:function (player){
    player.storage.ol_zhaxiang=0;
    },
                group:"ol_zhaxiang_reset",
                trigger:{
                    player:"loseHpEnd",
                },
                intro:{
                    content:function (storage){
            
            return '本回合已发动过'+storage+'次诈降';
        },
                },
                forced:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        player.draw(3*trigger.num);
  
        if(_status.currentPhase==player){
             
            player.addTempSkill('ol_zhaxiang_sha',{player:'phaseUseEnd'});
            player.markSkill('ol_zhaxiang');
            player.storage.ol_zhaxiang+=trigger.num;
        }
        else{
            game.trySkillAudio('zhaxiang',player);
        }
    },
                subSkill:{
                    sha:{
                        audio:"zhaxiang",
                        trigger:{
                            player:"shaBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return event.card&&get.color(event.card)=='red';
            },
                        content:function (){
                trigger.directHit=true;  
                
            },
                        mod:{
                            targetInRange:function (card,player,target,now){
                    if(card.name=='sha'&&get.color(card)=='red') return true;
                },
                            cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+player.storage.ol_zhaxiang;
                },
                        },
                    },
                    reset:{
                        trigger:{
                            player:"phaseUseEnd",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
       player.storage.ol_zhaxiang=0;
      player.unmarkSkill('ol_zhaxiang');
           player.update();
           ui.clear();
             },
                    },
                },
            },
            "ol_fulin":{
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                audio:"fulin",
                init:function (player){
      
        cards=player.storage.ol_fulin;
    },
                intro:{
                    content:"cards",
                },
                content:function (){
        player.addTempSkill('ol_fulin_1','phaseDiscardAfter');
    },
                group:["ol_fulin_count","ol_fulin_reset"],
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
                    if(player.storage.ol_fulin&&player.storage.ol_fulin.length){
                        var hs=player.getCards('h');
                        for(var i=0;i<player.storage.ol_fulin.length;i++){
                            if(hs.contains(player.storage.ol_fulin[i])){
                                num++;
                            }
                        }
                        return num;
                    }
                },
                        },
                    },
                    reset:{
                        trigger:{
                            player:["phaseBegin","phaseEnd"],
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        priority:10,
                        content:function (){
                player.unmarkSkill('ol_fulin');
                player.storage.ol_fulin=[];
            },
                    },
                    count:{
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        filter:function (event,player){
                return _status.currentPhase==player;
            },
                        content:function (){
                player.markSkill('ol_fulin');
                if(!player.storage.ol_fulin){
                    player.storage.ol_fulin=[];
                }
                for(var i=0;i<trigger.cards.length;i++){
                    player.storage.ol_fulin.add(trigger.cards[i]);
                }
            },
                    },
                },
            },
            "ol_mingzhe":{
                audio:"ext:统率三军:2",
                trigger:{
                    player:["useCard","respondAfter","discardAfter"],
                },
                frequent:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.color(event.cards[i])=='red'&&
                event.cards[i].original!='j') return true;
            }
        }
        return false;
    },
                content:function (){
        player.draw();
    },
                ai:{
                    threaten:0.7,
                },
            },
            "ol_wushuang":{
                forced:true,
                group:["ol_wushuang_sha","ol_wushuang_juedou"],
                subSkill:{
                    sha:{
                        audio:2,
                        trigger:{
                            player:"shaBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                return !event.directHit;
            },
                        priority:-1,
                        content:function (){
                trigger.target.addSkill('ol_wushuang_shan');
            },
                    },
                    shan:{
                        trigger:{
                            player:"respond",
                        },
                        filter:function (event,player){
                return event.card.name=='shan';
            },
                        direct:true,
                        content:function (){                
                    'step 0'
                var next=player.chooseToRespond({name:'shan'});
                next.autochoose=lib.filter.autoRespondShan;
                next.set('ai',function(card){
                    if(player.countCards('h','shan')>1){
                        return get.unuseful2(card);
                    }
                    return -1;
                });
                "step 1"
                
                if(result.bool==false){
                    trigger.finish();
                    trigger.untrigger();
                }
            
            },
                    },
                    juedou:{
                        audio:2,
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
                var next=trigger.turn.chooseToRespond({name:'sha'});
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
                },
            },
        },
        translate:{
            "vs_zhanshen":"战神",
            "vs_zhanshen_info":"觉醒技，准备阶段开始时，若你已受伤且己方已有其他角色阵亡，你减1点体力上限，然后弃置装备区里的武器牌，获得“马术”和“神戟”。",
            "vs_jiuzhu":"救主",
            "vs_jiuzhu_info":"当一名己方角色处于濒死状态时，若你的体力值大于1，你可弃置一张牌，失去1点体力，然后令其回复1点体力。",
            "vs_shenji":"神戟",
            "vs_shenji_info":"若你的装备区里没有武器牌，你使用【杀】的额外目标数上限+2。",
            "vs_zhongyi":"忠义",
            "vs_zhongyi_info":"限定技，出牌阶段，你可以放置一张♥♦牌于自己武将牌上。当关羽武将牌上有牌时，己方使用【杀】造成的伤害+1。当身份牌重置时，被放置的红牌进入弃牌堆。",
            "vs_hunzi":"魂姿",
            "vs_hunzi_info":"觉醒技，准备阶段，若你的体力为1，你须减1点体力上限，并永久获得技能“英姿”和“英魂”。",
            "vs_ganglie":"刚烈",
            "vs_ganglie_info":"当你受到伤害后，你可以判定，若结果不为♥，你令一名对方角色选择一项：  1、弃置两张手牌。  2、受到你造成的1点伤害。",
            "vs_huanshi":"缓释",
            "vs_huanshi_info":"一名己方角色的判定牌生效前，你可以打出一张牌代替之。",
            "vs_hongyuan":"弘援",
            "vs_hongyuan_info":"摸牌阶段摸牌时，你可以少摸一张牌，然后令其他友方角色各摸一张牌",
            "vs_zhenwei":"镇卫",
            "vs_zhenwei_info":"锁定技，对方角色计算与其他己方角色的距离+1。",
            "vs_jueji":"绝戟",
            "vs_jueji_info":"当你没装备武器时，你获得【方天画戟】的装备技能。",
            "vs_wumou":"无谋",
            "vs_wumou_info":"锁定技,当你使用一张普通锦囊(除决斗外)时,你须选择一项:弃置一张手牌,或流失一点体力",
            "vs_fanjian":"反间",
            "vs_fanjian_info":"阶段技，你选择一张手牌，令一名有手牌的其他角色选择一种花色，展示你的这张手牌，若选择的花色与展示的不同，该角色流失一点体力。结算结束后该角色获得展示的牌。",
            "vs_liegong":"烈弓",
            "vs_liegong_info":"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于等于你的体力值，此【杀】伤害+1",
            "vs_suzi":"肃姿",
            "vs_suzi_info":"一名对方角色死亡后，你可以获得其死亡时弃置的所有牌。",
            "vs_shensu":"神速",
            "vs_shensu_info":"你可以选择至多两项：1.跳过判定阶段和摸牌阶段；2.跳过出牌阶段和弃牌阶段并弃置一张装备牌。你每选择一项，视为你使用一张无距离限制的【杀】。",
            "vs_zhaxiang":"诈降",
            "vs_zhaxiang_info":"阶段技，你可以流失一点体力并指定一名其他角色。然后直到回合结束，你与该角色距离为一；你使用【杀】的次数上限＋X。X为你以已损失体力值。",
            "vs_qice":"奇策",
            "vs_qice_info":"阶段技，你可以将所有的手牌（至少一张）当做任意一张通常性锦囊牌使用。",
            "vs_tuxi":"突袭",
            "vs_tuxi_info":"摸牌阶段，你可以改为从1~2名其他角色各抽取一张手牌",
            "vs_retuxi":"突袭",
            "vs_retuxi_info":"摸牌阶段摸牌时，你可以少摸任意张牌，然后选择等量的手牌数大于或等于你的其他角色，获得这些角色的各一张手牌。",
            "ol_duliang":"督粮",
            "ol_duliang_info":"出牌阶段限一次，你可以获得一名其他角色的一张手牌，然后选择一项：1.令其观看牌堆顶的两张牌，然后获得其中的基本牌；2.令其于下个摸牌阶段额外摸一张牌",
            "vs_jiang":"激昂",
            "vs_jiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
            "vs_zhiji":"志继",
            "vs_zhiji_info":"觉醒技，准备阶段，若你没有手牌，你须减1点体力上限，然后回复1点体力或摸两张牌，并永久获得技能“观星”。",
            "vs_longdan":"龙胆",
            "vs_longdan_info":"你可以将[杀]当[闪]，或[闪]当[杀]使用或打出。你每发动一次‘龙胆’便摸一张牌。",
            "vs_jiuzhu1":"救主",
            "vs_jiuzhu1_info":"当一名己方角色处于濒死状态时，若你的体力值大于1，你可以交给其一张牌，并失去1点体力，然后令其回复1点体力。",
            "vs_kurou":"苦肉",
            "vs_kurou_info":"出牌阶段，你可以自减一点体力。锁定技，你收到的伤害均视为流失体力；你每当你失去一点体力，摸两张牌，/*若此时不为你的回合，则你的下一个出牌阶段使用[杀]的次数上限+1。*/",
            "ol_qizhi":"奇制",
            "ol_qizhi_info":"当你于回合内使用基本牌或锦囊牌指定目标后，你可以弃置不是此牌目标的一名角色的一张牌。若如此做，其摸一张牌",
            "ol_jinqu":"进趋",
            "ol_jinqu_info":"结束阶段开始时，你可以摸两张牌，若如此做，你将手牌弃置至X张（X为你于此回合发动过“奇制”的次数）",
            "ol_paoxiao":"咆哮",
            "ol_paoxiao_info":"锁定技，你使用[杀]无数量限制。",
            "ol_yiji2":"遗计",
            "ol_yiji2_info":"每当你受到一点伤害，你可以摸两张牌，然后依次交给一至两名角色共计两张手牌。",
            "ol_xuanfeng":"旋风",
            "ol_xuanfeng_info":"当你失去装备区里的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
            "vs_tieqi":"铁骑",
            "vs_tieqi_info":"当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            "vs_mengjin":"猛进",
            "vs_mengjin_info":"当你使用【杀】指定一名角色为目标后，你可以弃置其一张牌，若以此法弃置的牌为装备牌，此【杀】不可被【闪】响应，若不为装备牌，该角色获得此【杀】",
            "ol_yiji":"遗计",
            "ol_yiji_info":"每当你受到一点伤害，可以观看牌堆顶的两张牌，并将其交给任意1~2名角色",
            "ol_xunxun":"恂恂",
            "ol_xunxun_info":"摸牌阶段开始时，你可以放弃摸牌，改为观看牌堆顶的四张牌，若如此做，你将其中的两张牌以任意顺序置于牌堆顶，将其余的牌以任意顺序置于牌堆底。",
            "ol_wangxi":"忘隙",
            "ol_wangxi_info":"每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。",
            "ol_zhaxiang":"诈降",
            "ol_zhaxiang_info":"锁定技 每当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则直到回合结束，你使用红色【杀】无距离限制且不能被【闪】响应，你可以额外使用一张【杀】。",
            "ol_fulin":"腹鳞",
            "ol_fulin_info":"锁定技，弃牌阶段内，你于此回合内获得的牌不计入你的手牌数",
            "ol_mingzhe":"明哲",
            "ol_mingzhe_info":"你的回合外，每当你因使用、打出或弃置而失去一张红色牌时，你可以摸一张牌。",
            "ol_wushuang":"无双",
            "ol_wushuang_info":"锁定技，你使用的[杀]或[决斗]需要两张[闪]或[杀]响应",
        },
    },
},files:{"character":["测试.jpg"],"card":[],"skill":[]}}})