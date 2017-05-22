game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"统率三军",content:function (config,pack){
    _status.mode=get.config('versus_mode');
    _status.version=lib.config['extension_统率三军_version'];
    lib.arenaReady.push(function(){
        lib.skill._gameStart={
            trigger:{global:'gameStart'},    			
            forced:true,	
            popup:false,					
            silent:true,	
            filter:function (event,player){      
                 
              return game.me==player;
            },
            content:function(){
                'step 0'
                game.trySkillAudio('gameStart'); 
    			'step 1'
                if(_status.mode=='three'&&lib.config['extension_统率三军_actdraw']==true){                     
                    if(_status.color){ game.friendZhu.gain(get.cards());}
                    else{game.enemyZhu.gain(get.cards());}                    
                }                                               
            }
        }    
        lib.skill.gameStart={audio:"ext:统率三军:2",}  
       /*lib.card.lebu.filter=function(event,player){
					if(player.stat.length==1&&event.cards[0]&&event.cards[0]==event.card) return false;
            return true;
				}*/
    }
                       )
    if(config.card){
        lib.arenaReady.push(function(){
            lib.skill.zhuge_skill={
                mod:{
                    cardUsable:function(card,player,num){
                        if(card.name=='sha'){
                            if(_status.mode=='three'&&_status.version!='2011'&&_status.version!='2012'){                                
								return num+3;                                
							}
							return Infinity;
						}
					}
				},
			}              
            
            lib.card.wuzhong.content=function (){				
					if(_status.mode=='three'&&_status.version!="2011"&&_status.version!="2012"){                        
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
                    if(result.bool){
                        player.getStat().card.sha--;
                    }
                    else if(event.jiu){
                        player.addSkill('jiu');
                    }
                }
            
        }
                           )
    }
     if(config.character){
         lib.character.zhangliao[3]=["vs_tuxi"] 
         lib.character.guojia[3]=["ol_yiji","tiandu"] 
         lib.character.re_lidian[3]=["ol_xunxun","ol_wangxi"]            
         lib.character.re_zhangliao[3]=["vs_retuxi"]
         lib.character.re_xuzhu[3]=["ol_reluoyi"]
         lib.character.wangji[3]=["ol_qizhi",'ol_jinqu']
         lib.character.wangyi[3]=["zhenlie",'vs_miji']
         lib.character.liyan[3]=["ol_duliang",'ol_fulin']
         lib.character.zhangfei[3]=["ol_paoxiao"]
         lib.character.re_zhangfei[3]=["ol_paoxiao",'retishen']
         lib.character.jiangwei[3]=["tiaoxin","vs_zhiji"]
         lib.character.lingtong[3]=["ol_xuanfeng"]
         lib.character.re_huanggai[3]=["rekurou","ol_zhaxiang"]  
         
         
     }
        
    if(_status.mode=='three'){        
        'step 0'
        lib.arenaReady.push(function(){           
            lib.translate.trueZhu='主帅'
		    lib.translate.falseZhu='主帅'
		    lib.translate.trueZhong='前锋'
	        lib.translate.falseZhong='前锋'            
                                                                         
            lib.character.caocao[3]=["jianxiong"]
            lib.character.wenpin[3]=["vs_zhenwei"]
            lib.character.dianwei[3]=["qiangxi"]            
                                    
            lib.character.liubei[3]=["rende"]
            lib.skill.rende.prepare='give2'
                       
            lib.character.sunjian[3]=["gzyinghun"]
            lib.character.sunce[3]=["ol_jiang","vs_hunzi"]
            lib.character.xiaoqiao[3]=["tianxiang","hongyan"]
            lib.character.zhugejin[3]=["vs_hongyuan","vs_huanshi","ol_mingzhe"]
            lib.character.sunquan[3]=["zhiheng"] 
            
                                      
        }
                           )
        'step 1'       
        if(_status.version=="2011"){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'caocao','simayi','zhangliao','guojia','zhenji','xiahoudun','xiahouyuan','xuzhu','caoren',
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
        if(_status.version=="2012"){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'caocao','simayi','zhangliao','guojia','zhenji','xuhuang','xiahouyuan','xuzhu',
                    'liubei','guanyu','zhangfei','zhugeliang','zhaoyun','huangyueying','menghuo','huangzhong',
                    'sunquan','ganning','huanggai','zhouyu','daqiao','sunshangxiang','luxun','xiaoqiao','zhoutai','sunjian','zhugejin',
                    'huatuo','lvbu','diaochan','pangde',
                ]
                lib.character.xiahouyuan[3]=["shensu"]                 
                lib.character.huangzhong[3]=["liegong"]                                
                lib.character.zhoutai[3]=["gzbuqu"]                                
                lib.character.pangde[3]=["mashu","mengjin"]                                                                      
            }
                               )
        }
        if(_status.version=="2014"){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'caocao','simayi','zhangliao','guojia','zhenji','xiahoudun','xiahouyuan','xuhuang','wenpin',
                    'liubei','guanyu','zhangfei','zhugeliang','zhaoyun','huangyueying','jiangwei','machao',
                    'sunquan','ganning','huanggai','zhouyu','daqiao','sunshangxiang','sunjian','xiaoqiao','sunce','zhugejin',
                    'huatuo','lvbu','diaochan','pangde','jiaxu',
                ]
                lib.translate.zhuge='连弩'
                lib.character.xiahoudun[3]=["vs_ganglie"]
                lib.character.xiahouyuan[3]=["shensu"]                     
                lib.character.zhaoyun[3]=["longdan","vs_jiuzhu"]         
                lib.character.guanyu[3]=["vs_zhongyi","wusheng"]  
                lib.character.zhouyu[3]=["yingzi","ol_fanjian"]
                lib.character.lvbu[3]=["vs_zhanshen","wushuang"]
                lib.character.pangde[3]=["mashu","mengjin"]                                              
            }
                               )
        }        
        if(_status.version=="2017"){
            lib.arenaReady.push(function(){
                lib.choiceThree=[
                    'wangyi','re_simayi','re_zhangliao','re_xuzhu','re_guojia','wangji','zhenji','dianwei','re_lidian','xunyou','zhongyao','yuejin',
                    're_zhangfei','zhugeliang','re_machao','huangyueying','jiangwei','liuchen','huangzhong','mizhu','madai','xin_fazheng','re_xushu','liyan',
                    'sunquan','re_ganning','re_daqiao','sunshangxiang','sunjian','yufan','lingtong','zhugejin','guyong','sunce','handang','xiaoqiao',
                    'diaochan','caifuren','gongsunyuan','pangde',
                ]                
                   
                
            }
                               )
        }
        'step 2'                
        if(_status.version=="2016"||_status.version=="2017"){            
            lib.arenaReady.push(function(){
                lib.translate.zhuge='连弩'
                
                lib.rank.s.push('re_huanggai');
                lib.rank.s.push('re_huatuo');
                lib.rank.s.push('re_liubei');
                lib.rank.s.push('zhongyao');                
                lib.rank.s.push('re_luxun');
                lib.rank.s.push('chengong');
                
                lib.rank.ap.push('wangji'); 
                lib.rank.ap.push('huangzhong');
                lib.rank.ap.push('zhugejin');                 
                lib.rank.ap.push('diaochan');
                lib.rank.ap.push('re_guojia');
                lib.rank.ap.push('xin_fazhen');
                lib.rank.ap.push('mizhu'); 
                
                lib.rank.a.push('wangyi');                               
                lib.rank.a.push('re_daqiao');                              
                lib.rank.a.push('zhugeliang');
                lib.rank.a.push('xunyou');
                                
                lib.rank.am.push('re_lidian');
                lib.rank.am.push('sunquan');  
                lib.rank.am.push('liuchen');  
                lib.rank.am.push('lingtong'); 
                                          
                lib.rank.bp.push('re_zhangfei');                
                lib.rank.bp.push('re_ganning');                           
                lib.rank.bp.push('guyong');                                            
                lib.rank.bp.push('dengai');
                lib.rank.bp.push('liyan'); 
                lib.rank.bp.push('gongsunyuan'); 
                lib.rank.bp.push('re_zhangliao');
               
                lib.rank.b.push('re_machao');
                lib.rank.b.push('madai'); 
                lib.rank.b.push('re_zhangliao'); 
                lib.rank.b.push('re_xuzhu');         
                lib.rank.b.push('yufan')
                lib.rank.b.push('re_zhouyu');    
                
                lib.rank.bm.push('jiangwei');     
                lib.rank.bm.push('zhenji');                 
                lib.rank.bm.push('caifuren');
                lib.rank.bm.push('sunshangxiang');            
                lib.rank.bm.push('xuhuang');
                lib.rank.bm.push('sunjian');
                lib.rank.bm.push('yuejin');               
                
                lib.rank.c.push('sunce');                                                                          
                lib.rank.c.push('xiaoqiao');                                                                                     
                lib.rank.c.push('huangyueying');                               
                lib.rank.c.push('re_xushu');     
                lib.rank.c.push('handang')
                lib.rank.c.push('pangde')
                
                lib.rank.c.push('dianwei');                                           
                lib.rank.d.push('xin_masu');
                lib.rank.d.push('xusheng');      
                lib.rank.d.push('dingfeng');               
                lib.rank.d.push('re_simayi');
                lib.rank.d.push('re_caocao');                                                           
                lib.rank.d.push('re_gongsunzan');
                lib.rank.d.push('re_zhaoyun');            
            }
                               )
        }
        if(_status.version!="2016"&&_status.version!="2017"){
            lib.arenaReady.push(function(){
               
                lib.rank.s.push('liubei');
                lib.rank.s.push('zhangliao');
                lib.rank.s.push('guojia');              
                lib.rank.s.push('zhugeliang');                
                
                lib.rank.ap.push('zhugejin');                           
                lib.rank.ap.push('diaochan');
                lib.rank.ap.push('huanggai');   
                                                                             
                lib.rank.a.push('sunquan');
                lib.rank.a.push('huangyueying');              
                lib.rank.a.push('wenpin');                
                lib.rank.a.push('huatuo');
                
                lib.rank.bp.push('sp_zhangjiao');
                lib.rank.bp.push('guanyu');
                lib.rank.bp.push('jiaxu');
                lib.rank.bp.push('jiangwei'); 
                lib.rank.bp.push('daqiao');               
                lib.rank.bp.push('sunshangxiang');
                lib.rank.bp.push('zhenji');
                
                lib.rank.b.push('ganning');
                lib.rank.b.push('zhangfei'); 
                lib.rank.b.push('zhouyu');              
                lib.rank.b.push('zhaoyun');       
                                                      
                lib.rank.bm.push('xiaoqiao');                
                lib.rank.bm.push('xuhuang');               
                lib.rank.bm.push('machao');
                lib.rank.bm.push('sunce');  
                lib.rank.bm.push('sunjian');
                
                lib.rank.c.push('lvbu');
                lib.rank.c.push('simayi');                                             
                lib.rank.c.push('xiahoudun');                                                                         
                lib.rank.c.push('caocao')        
                lib.rank.c.push('xiahouyuan');                                                         
                lib.rank.c.push('pangde');
                
                lib.rank.d.push('weiyan');
                lib.rank.d.push('zhoutai');
                lib.rank.d.push('huangzhong');
                lib.rank.d.push('menghuo');
                lib.rank.d.push('lvmeng');
                lib.rank.d.push('luxun');
                lib.rank.d.push('caoren');
                
            
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
    
    
},help:{"统率将池":"<ul><li>2011：标准版武将+风包武将（去除于吉）<li>2012：在2011的基础上，【去除】吕蒙、夏侯惇、张角、曹仁、魏延；【加入】孙坚、孟获、徐晃、庞德、诸葛瑾。<li>2014：在2012的基础上，【去除】许褚、黄忠、孟获、周泰、陆逊；【加入】贾诩、姜维、孙策、文聘；【修改】赵云、关羽、吕布、夏侯惇。<li>2016：【魏】界李典、徐晃、荀攸、邓艾、界曹操、界司马懿、【蜀】界刘备、界张飞、诸葛亮、界赵云、界马超、黄月英、姜维、马谡、【吴】孙权、界甘宁、徐盛、界黄盖、界周瑜、界大乔、界陆逊、孙尚香、丁奉、孙坚、孙策、顾雍、诸葛瑾、小乔、凌统、【群】陈宫、界公孙瓒、界华佗、貂蝉、蔡夫人<li>2017：【魏】界张辽、王异、界许褚、界郭嘉、甄姬、典韦、界李典、荀攸、界司马懿、钟繇、王基、乐进、【蜀】界张飞、诸葛亮、界赵云、界马超、黄月英、姜维、刘谌、黄忠、糜竺、马岱、法正、界徐庶、李严、【吴】孙权、界甘宁、界大乔、孙尚香、丁奉、孙坚、孙策、顾雍、诸葛瑾、小乔、虞翻、韩当、【群】貂蝉、蔡夫人、公孙渊、庞德"},config:{"version":{"name":"版本","init":"2014","intro":"查看将池：其它-帮助-统率将池","item":{"2011":"2011","2012":"2012","2014":"2014","2016":"2016","2017":"2017"},"restart":true},"card":{"name":"卡牌还原","init":true,"intro":"青龙刀、无中、连弩","restart":true},"character":{"name":"武将还原","init":true,"intro":"ol版本：恂恂、秘计、旋风；标记提示：腹鳞、裸衣、奇制、诈降","restart":true},"actdraw":{"name":"暖主保护","init":true,"intro":"暖主起始手牌+1","restart":true}},package:{
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
            "vs_zhanshen":{
                skillAnimation:true,
                audio:"ext:统率三军:2",
                derivation:["mashu","vs_shenji"],
                unique:true,
                group:"vs_zhanshen_die",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){      
        return player.storage.vs_zhanshen==true&&player.hp<player.maxHp;
    },
                forced:true,
                priority:3,
                content:function (){                           
        player.loseMaxHp();
        if(player.hp>player.maxHp) player.hp=player.maxHp;
        player.discard(player.get('e','1'));    
        player.addSkill('mashu');
        player.addSkill('vs_shenji');
        player.awakenSkill('vs_zhanshen');      
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
                game.trySkillAudio('baonu',player);
                player.popup('怒');
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
                delay:false,
                filter:function (event,player){
return event.player!=player&&event.player.hp<=0&&player.num('he')>0&&player.hp>1&&event.player.isFriendOf(player);
},
                check:function (event,player,card){
        if(event.player==game.friendZhu||event.player==game.enemyZhu) return true;
        if(card.name=='tao'&&player.countCards('h','tao')+event.player.hp<0) return false;
        return true;
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
    game.delay(1);
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
                check:function (card){
return 8-ai.get.useful(card);
       
        
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
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        player:function (player,card){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].stat.length<player.stat.length&&game.players[i].isFriendOf(player)) return 1;    
              }
        if(player.countCards('h','sha')||player.countCards('h',{color:'red'})>1)   return 1;
           return -5;
            },
                    },
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
                    if(!game.players[i].classList.contains('acted')) return false;
               }
               return true;
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
        if(_status.version=="2014"){
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
            "vs_tuxi":{
                audio:"tuxi",
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
            }
                target.syncStorage('ol_duliang_delay');
                target.storage.ol_duliang_delay++;
                target.markSkill('ol_duliang_delay');
                
            
            
            
            


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
            "ol_jiang":{
                group:["ol_jiang_sha","ol_jiang_juedou"],
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
                        priority:-5,
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
                            player:"useCardToBefore",
                            target:"useCardToBefore",
                        },
                        priority:15,
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
            player.chooseControl('draw_card',function(event,player){
                return 'draw_card';});
            /*player.draw(2);
            event.goto(3);*/
            
        }
        else {player.chooseControl('recover_hp','draw_card',function(event,player){
            if(player.hp>=2) return 'draw_card';
            return 'recover_hp';
        });}
        "step 2"
        if(result.control=='draw_card'){
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
            "ol_qizhi":{
                audio:"qizhi",
                group:["ol_qizhi_reset"],
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
                    reset:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function (){
                
                player.unmarkSkill('ol_qizhi');
              player.storage.ol_qizhi=0;
            },
                    },
                },
            },
            "ol_jinqu":{
                audio:"jinqu",
                trigger:{
                    player:"phaseEnd",
                },
                priority:15,
                filter:function (event,player){
    return player.storage.ol_qizhi!=0},
                check:function (event,player){
        return player.storage.ol_qizhi>=player.countCards('h');
    },
                prompt:function (event,player){
        
        return '进趋：是否摸两张牌并将手牌弃置至'+get.cnNumber(player.storage.ol_qizhi)+'张？';
    },
                content:function (){
        'step 0'
        player.draw(2);
        'step 1'
        
        var dh=player.countCards('h')-player.storage.ol_qizhi;
        if(dh>0){
            player.chooseToDiscard(dh,true);
        }
    },
            },
            "ol_paoxiao":{
                trigger:{
                    player:"useCard",
                },
                audio:"paoxiao",
                forced:true,
                audioname:["zhangfei","re_zhangfei"],
                filter:function (event,player){
        if (event.skill=='qinglong_skill') return false;
        return (event.card.name=='sha'&&player.hasSkill('ol_paoxiao')&&player.getStat().card.sha>1);
    },
                content:function (){
        

    },
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
            },
            "ol_xuanfeng":{
                audio:"xuanfeng",
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
                   if(lib.config.autoskilllist.contains('ol_yiji')){
                            player.chooseBool(get.prompt('ol_yiji'));
                        }
                        else{
                            event._result={bool:true};
                        }                
                   if(result.bool){                       
                        event.goto(1);}
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
                priority:-10,
                frequent:true,
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
                   player.chooseBool('是否再次发动忘隙？');
                           if(result.bool){
                               game.delay();
                       
                        event.goto(1);
                           }
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
                marktext:"降",
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
                
                if(!player.storage.ol_fulin){
                    player.storage.ol_fulin=[];
                    
                }
                    
                
                for(var i=0;i<trigger.cards.length;i++){
                    player.storage.ol_fulin.add(trigger.cards[i]);
                    
                }
                player.markSkill('ol_fulin');
            },
                    },
                },
            },
            "ol_mingzhe":{
                audio:"mingzhe",
                trigger:{
                    player:["useCard","respond","discardAfter"],
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
            "ol_reluoyi":{
                audio:"reluoyi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                content:function (){
        "step 0"
        player.addTempSkill('ol_reluoyi_1',{player:'phaseBefore'});
        trigger.untrigger();
        trigger.finish();
        "step 1"
        event.cards=get.cards(3);
        player.showCards(event.cards,'裸衣');
        "step 2"
        for(var i=0;i<cards.length;i++){
            if(get.type(cards[i])!='basic'&&cards[i].name!='juedou'&&
                (get.type(cards[i])!='equip'||get.subtype(cards[i])!='equip1')){
                ui.discardPile.appendChild(cards[i]);
                cards.splice(i--,1);
            }
        }
        player.gain(cards,'gain2');
    },
                subSkill:{
                    "1":{
                        audio:false,
                        trigger:{
                            source:"damageBegin",
                        },
                        mark:true,
                        intro:{
                            content:"直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
                        },
                        filter:function (event){
                return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
            },
                        forced:true,
                        content:function (){
                trigger.num++;
            },
                    },
                },
            },
            "vs_miji":{
                audio:"miji",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                content:function (){
        "step 0"
        event.count=player.maxHp-player.hp;
        player.draw(event.count);   
         "step 1"      
        player.chooseCardTarget({
            selectCard:[1,event.count],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                var player=_status.event.player;
                if(player.maxHp-player.hp==1&&card.name=='du') return 30;
                var check=_status.event.check;
                if(check<1) return 0;
                if(player.hp>1&&check<2) return 0;
                return get.unuseful(card)+9;
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length==1&&ui.selected.cards[0].name=='du') return 1-att;
                return att-2;
            },
            prompt:'将至多'+event.count+'张手牌交给其他角色',
        });
        "step 2"
        if(result.bool){            
            event.count=(event.count-result.cards.length);            
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards.length,result.targets[0]);
            player.line(result.targets,'green');                       
            if(event.count>0) event.goto(1);
        }              
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 3;
            if(target.hp==2) return 1.5;
            return 0.5;
        },
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            "ol_fanjian":{
                audio:"fanjian",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        target.chooseControl('heart','diamond','club','spade').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'heart';
                case 1:case 4:case 5:return 'diamond';
                case 2:return 'club';
                case 3:return 'spade';
            }
        });
        "step 1"
        game.log(target,'选择了'+get.translation(result.control));
        event.choice=result.control;
        target.popup(event.choice+'2');        
        event.card=target.gainPlayerCard(player,'h',true);   
        target.showCards(event.card,'反间');               
        game.delay();
        "step 2"        
        if(get.suit(event.card)!=event.choice) {
            target.damage('nocard');                    
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
        },
        translate:{
            "vs_zhanshen":"战神",
            "vs_zhanshen_info":"觉醒技，准备阶段开始时，若你已受伤且己方已有其他角色阵亡，你减1点体力上限，然后弃置装备区里的武器牌，获得“马术”和“神戟”。",
            "vs_jiuzhu":"救主",
            "vs_jiuzhu_info":"当己方一名其他角色濒死时，若你的体力值大于1，你可弃置一张牌并失去1点体力，然后令其回复1点体力。",
            "vs_shenji":"神戟",
            "vs_shenji_info":"若你的装备区里没有武器牌，你使用【杀】的额外目标数上限+2。",
            "vs_zhongyi":"忠义",
            "vs_zhongyi_info":"限定技，出牌阶段，你可以放置一张♥♦牌于武将牌上。当关羽有“忠义”牌时，己方使用【杀】造成的伤害+1。重整时，弃置“忠义”牌。",
            "vs_hunzi":"魂姿",
            "vs_hunzi_info":"觉醒技，准备阶段，若你的体力为1，你须减1点体力上限，并永久获得技能“英姿”和“英魂”。",
            "vs_ganglie":"刚烈",
            "vs_ganglie_info":"当你受到伤害后，可以判定，若结果不为♥，你令一名对方角色选择一项：1、弃置两张手牌。  2、受到你造成的1点伤害。",
            "vs_huanshi":"缓释",
            "vs_huanshi_info":"一名己方角色的判定牌生效前，你可以打出一张牌代替之。",
            "vs_hongyuan":"弘援",
            "vs_hongyuan_info":"摸牌阶段摸牌时，你可以少摸一张牌，然后令其他友方角色各摸一张牌",
            "vs_zhenwei":"镇卫",
            "vs_zhenwei_info":"锁定技，对方角色计算与其他己方角色的距离+1。",
            "vs_tuxi":"突袭",
            "vs_tuxi_info":"摸牌阶段，你可以改为从1~2名其他角色各抽取一张手牌",
            "vs_retuxi":"突袭",
            "vs_retuxi_info":"摸牌阶段摸牌时，你可以少摸任意张牌，然后选择等量的手牌数大于或等于你的其他角色，获得这些角色的各一张手牌。",
            "ol_duliang":"督粮",
            "ol_duliang_info":"出牌阶段限一次，你可以获得一名其他角色的一张手牌，然后选择一项：1.令其观看牌堆顶的两张牌，然后获得其中的基本牌；2.令其于下个摸牌阶段额外摸一张牌",
            "ol_jiang":"激昂",
            "ol_jiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
            "vs_zhiji":"志继",
            "vs_zhiji_info":"觉醒技，准备阶段，若你没有手牌，你须减1点体力上限，然后回复1点体力或摸两张牌，获得技能“观星”。",
            "ol_qizhi":"奇制",
            "ol_qizhi_info":"当你于回合内使用基本牌或锦囊牌指定目标后，你可以弃置不是此牌目标的一名角色的一张牌。若如此做，其摸一张牌",
            "ol_jinqu":"进趋",
            "ol_jinqu_info":"结束阶段开始时，你可以摸两张牌，若如此做，你将手牌弃置至X张（X为你于此回合发动过“奇制”的次数）",
            "ol_paoxiao":"咆哮",
            "ol_paoxiao_info":"锁定技，出牌阶段，你使用【杀】无数量限制。",
            "ol_xuanfeng":"旋风",
            "ol_xuanfeng_info":"当你失去装备区里的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
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
            "ol_mingzhe_info":"你的回合外，每当你使用、打出或弃置一张♥♦牌时，你可以摸一张牌。",
            "ol_reluoyi":"裸衣",
            "ol_reluoyi_info":"你可以跳过摸牌阶段，然后展示牌堆顶的三张牌，获得其中的基本牌、武器牌和【决斗】，若如此做，直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
            "vs_miji":"秘计",
            "vs_miji_info":"结束阶段，若你已受伤，可以摸X张牌，然后将至多X张手牌交给其他角色，X为你已损失的体力值",
            "ol_fanjian":"反间",
            "ol_fanjian_info":"阶段技，你可以令一名其他角色选择一种花色后获得你的一张手牌并展示之，若此牌的花色与其所选的不同，你对其造成1点伤害。",
        },
    },
},files:{"character":[],"card":[],"skill":[]}}})
