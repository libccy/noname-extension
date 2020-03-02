game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"文武英杰",content:function (config,pack){
 // ---------------------------------------Audio------------------------------------------//
			game.playwwyj = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '文武英杰', fn);
			}
		}
		
// ---------------------------------------Die Audio------------------------------------------//
		lib.skill._Wumingzhwpy={
				    trigger:{global:'dieBegin'},							
							priority:2,
							forced:true,
         unique:true,    
					   content:function(){					
					   	    game.playAudio('..','extension','文武英杰',trigger.player.name);							         					        
 					  	},
			   			}			

// ---------------------------------------New Function------------------------------------------//	
				lib.element.player.replaceFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				this.clearSkills();
				this.init(this.name1,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			}
			lib.element.player.addFujiang=function(name2){
				var hp=this.hp;
				var maxhp=this.maxHp;
				var name=this.name;
				this.uninit();
				this.init(name,name2);
				this.classList.remove('unseen2');
				this.hp=hp;
				this.maxHp=maxhp;
				this.update();
			} 
			
// ---------------------------------------击杀特效------------------------------------------//				   
		  if(config.wwyjjishatexiao){		
		    lib.skill._wwyj_jishatexiao={
                trigger:{
                    source:"die",
                },   
                forceDie:true,  
                forced:true,
                content:function (){ 
                'step 0'
                game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;     					
     			Animation.style.left = '-120px';
         Animation.style.top = 'calc(50% - 90px)';        
         Animation.style.width = '120px';
         Animation.style.height = '150px';
         Animation.style.transform = 'rorate(20deg)';
         Animation.style.transition = 'all 2s';
         Animation.style.backgroundSize = 'cover';
         ui.window.appendChild(Animation);
         ui.refresh(Animation);
         Animation.style.left = '35%';					     
          setTimeout(function(){
	  	   		ui.window.removeChild(Animation);
          Animation.delete();			
       },5000);	  							         						
	     		},player);			
			  'step 1'
			game.broadcastAll(function(player){       	
       	var Animation2 = ui.create.div();
       	Animation2.style.backgroundImage = trigger.player.node.avatar.style.backgroundImage;      						
     			Animation2.style.right = '-120px';
         Animation2.style.top = 'calc(50% - 90px)';        
         Animation2.style.width = '120px';
         Animation2.style.height = '150px';
         Animation2.style.transform = 'rorate(20deg)';
         Animation2.style.transition = 'all 2s';
         Animation2.style.backgroundSize = 'cover';
         ui.window.appendChild(Animation2);
         ui.refresh(Animation2);    
         Animation2.style.right = '35%';   
         setTimeout(function(){	  	  
				  		ui.window.removeChild(Animation2);
          Animation2.delete();
       },5000);	
       		},player);				               										         						
	  				  'step 2'	  	  
       setTimeout(function(){
	  	   			 player.$fullscreenpop('击杀','fire');	
	  	   			 game.playwwyj('wwyjjishatexiao'); 
       },4000);		  				                         		                     	                         		                     
                },
                }
      }          
																																																																																																																				
// ---------------------------------------wujianglang------------------------------------------//		
	
	if(config.wenwuyingjie){
		for(var i in lib.characterPack['wenwuyingjie']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	
},precontent:function (wwyj){     			
     if(wwyj.enable){		 		 
		game.import('character',function(){			
			var wenwuyingjie={
				name:'wenwuyingjie',
				connect:true,
				characterSort:{
	 		wenwuyingjie:{
	 		"wwyj_zhizun":["wwyj_shuihu"],
				"wwyj_zuozhe":["wwyj_yanyumoran","wwyj_wali","wwyj_danwuyunxi","wwyj_jiguangs","wwyj_taishangdaniu","wwyj_maliao","wwyj_shijian","wwyj_huijin","wwyj_chengxuyuan","wwyj_pipi","wwyj_Sukincen","wwyj_liangcha","wwyj_ziyage","wwyj_kanpoyiqie","wwyj_kelejiabing"],
				"wwyj_fensi":["wwyj_feicheng","wwyj_xingyunnvshen","wwyj_lunhuizhong","wwyj_daxiongxiaimao","wwyj_wzszhaoyun"],
			},
		},
				character:{
          	"wwyj_shuihu":["male","shen",3,["wwyj_chuangshi","wwyj_qianfu","wwyj_ancha"],[]],
            "wwyj_chengxuyuan":["male","wu",3,["wwyj_jiedan"],[]],
            "wwyj_pipi":["female","wei",3,["wwyj_xipi","wwyj_baozao"],[]],
            "wwyj_Sukincen":["male","qun",4,["wwyj_fengliu"],[]],
            "wwyj_liangcha":["female","qun",3,["wwyj_caizhi","wwyj_daixue"],[]],
            "wwyj_wzszhaoyun":["male","shu",5,["wwyj_jiaoxiao","wwyj_zuikui"],[]],
            "wwyj_lunhuizhong":["male","wu",3,["wwyj_qiandao","wwyj_yingguai","wwyj_qianzhui"],[]],
            "wwyj_ziyage":["male","wu",4,["wwyj_ciya","wwyj_jinxiu"],[]],
            "wwyj_kanpoyiqie":["male","wu",3,["wwyj_lilun","wwyj_yanguan"],[]],
            "wwyj_daxiongxiaimao":["male","shu",4,["wwyj_chengpiao","wwyj_jipin"],[]],
            "wwyj_kelejiabing":["male","wei",3,["wwyj_jilve","wwyj_tuikeng"],[]],
            "wwyj_huijin":["male","qun",3,["wwyj_chehuo","wwyj_jinzhu","wwyj_kangfu"],[]],
            "wwyj_shijian":["female","wei",3,["wwyj_touliang","wwyj_kangxing"],[]],
            "wwyj_maliao":["male","wei",3,["wwyj_daigeng","wwyj_jiangsha"],[]],
            "wwyj_taishangdaniu":["male","qun",4,["wwyj_yixue","wwyj_qianxu"],[]],
            "wwyj_jiguangs":["female","qun",3,["wwyj_jiguang","wwyj_jiaocheng"],[]],
            "wwyj_danwuyunxi":["male","wu",3,["wwyj_kaiche","wwyj_shengshen"],[]],
            "wwyj_xingyunnvshen":["female","shu",4,["wwyj_guanli"],[]],
            "wwyj_feicheng":["male","wei",3,["wwyj_xiangsi"],[]],
            "wwyj_wali":["male","wei",3,["wwyj_toushi","wwyj_qiuxue"],[]],
            "wwyj_yanyumoran":["female","shu",3,["wwyj_yanyu","wwyj_bingmou"],[]],

},
characterIntro:{
     	"wwyj_shuihu":"无名杀的创作者，据闻是北大的硕士研究生，于2013年底开始，以一己之力制作了一款叫无名杀的游戏，为三国杀爱好者开创了一片广阔的天地。同时还DIY了《炉石传说》、《昆特牌》、《万智牌》、《古剑奇潭》、《仙剑奇侠传》等多个扩展作品",
     	"wwyj_chengxuyuan":"一位付费代写的大神，其实力能与极光、苏婆玛丽奥比肩，代表扩展有《代码搜索器》、《特效扩展》、《吧友列传》、《官渡之战》、《诸侯伐董》、《欢乐斗地主》、《狗年乱斗》、《圣者为王》等等",
					"wwyj_pipi":"一位远古代扩展大神，擅长制作挑战boss类扩展，写过不少花里胡哨、强度高、搞怪、不按常理出牌的扩展，代表扩展有《神话》、《传说》、《暴躁AI》、《闯关模式》、《武林绝学》、《德玛西亚》等等",		
					"wwyj_Sukincen":"一位远古代扩展大神，原ID叫Sukincen，圈内习惯称呼他为“小苏”，无名杀扩展交流群②的首任群主，同时负责游戏内获取扩展的管理。代表扩展有《群英会》，该扩展不但还原了《火影忍者》等作品的人物，还收集了各种类型的技能，有不少技能是独一无二的新颖。同时小苏出过不少教程，后因工作繁忙逐渐隐退了。本作中的设计参照了群英会中其对本人的角色设计",	
					"wwyj_liangcha":"本扩展作者，因技能设计水平低，所以没啥自创的扩展，但代写过近六十个扩展，后期由于忙碌和懒惰，导致较少接单代写了",	
					"wwyj_wzszhaoyun":"摘自一位老玩家的描述：一代嚣张跋扈、自带嘲讽的传奇玩家，曾为水乎钦点的代更者，叫嚣要废除扩展功能、制裁无名杀玩家……据说此人是间接导致水乎停止写新版无名杀的罪魁祸首",	
					"wwyj_lunhuizhong":"全名为：轮回中的消逝者。呲牙哥的首席忠实粉丝，曾对呲牙哥和签到有迷之执着，平时潜水于各大群暗中观察追随呲牙哥的行踪。对无名杀扩展及其作者很了解，会写代码并接替维护呲牙哥的扩展",	
					"wwyj_ziyage":"《秦时明月》、《沧海横流》等扩展的作者，无名杀扩展交流群①的群主，曾对无名杀素材收集总结、游戏推广作出过不少贡献，在圈内有不小的声望，后因进修学习而渐渐消失在玩家的视野中",	
					"wwyj_kanpoyiqie":"一位拥有专业编程技术的扩展的远古代作者，同时对DIY有专业的见解，通常以各种专业理论刷屏唬住众人。曾任无名杀扩展交流群②的群主，对群管理甚严，其扩展特点多为巧妙清奇，代表扩展有《无心之举》、《格林笔记》、《艾克斯》等",	
					"wwyj_daxiongxiaimao":"一位Diyer，设计了《金庸群侠传》扩展，并由太上大牛（落影逝尘）等人写代码制作完成",	
					"wwyj_kelejiabing":"一位元老级别的扩展大神，主要的扩展作品为《极略三国》，同时出过不少教程，后因考研而退坑",	
					"wwyj_huijin":"一位新生代扩展作者，喜欢制作扩展并为此付出不少努力，技术也日益精湛。2019年底不幸遭遇车祸，手术成功后一直卧床，期间仍坚持制作扩展。代表扩展作品有《辉烬贺流年》等",		
					"wwyj_shijian":"一位中生代扩展作者，曾化名过雪碧、透心凉、冰波水微、独者自饮酒，常年活跃于多个无名杀群，传闻是《作者包》的作者神座的徒弟。其爱好钻研艰涩的非常规代码，尤其是创造抗性与破解抗性的代码，最近又迷上特效。代表扩展有《龙族》、《十万个冷笑话》、《军争加强版》、《曹操传》以及第三代作者包《群英荟萃》",
			   "wwyj_maliao":"一位热爱键社的中生代扩展大神，曾写过《新服杂碎》、《键杀》、《文和乱武》等扩展。水乎短暂回坑将无名杀的代更任务交给了他，圈内声望颇高",					
					"wwyj_taishangdaniu":"一位中生代扩展大神，化名过“落影逝尘”，喜欢在群里交流代码技术，曾写过《三国时代》扩展，后来义写《金庸群侠传》扩展中的大部分角色，为人较为谦虚低调，深为大家赞颂",		
					"wwyj_jiguangs":"一位元老级的超级大神，掌握着非常专业、精湛的编程技术，能与橙续缘、苏婆玛丽奥比肩。极光写过非常多的扩展，包括多种多样的模式、武将、功能，同时开发出全新联机框架等，主要作品有《无双杀》、《雷金阴洪石乐》、《阴雷》、《阴阳杀》、《奥拉星S》、《奈何花落》、《万世神兽》、《乱世佳人》等，其大部分的作品已收录在《扩展ol》一个扩展里",
					"wwyj_danwuyunxi":"又名：一心加强老神将，老神将也能一穿七，中生代扩展作者，长驻无名杀扩展交流群①，其作品也主要在此群发布更新，圈内习惯称呼他为“老神将”，因其代表作品《混沌界》（原名《圣神包》），以将普通将重新设计加强成神将为主，总体强度颇高，粉丝也不少。据闻其曾在群里冒死擦边“开车”，得外号“老司机”，个性有点洒脱不羁，但对制作扩展又非常认真，虽然经常因为更新得慢被人说为鸽子，每次更新都会书写一段颇具文采的更新说明",		
					"wwyj_xingyunnvshen":"原ID：骑着二乔上貂蝉，资深老玩家，无名杀贴吧群管理员",	
					"wwyj_feicheng":"无名杀资深老玩家，也是最早玩无名杀的玩家之一，贴吧群的群主，热爱无名杀，对游戏的发展历程很熟悉，最近又自发收集整理皮肤素材",	
			   "wwyj_wali":"瓦力（Wall•E）是集技能设计、历史文学、优秀的编写代码技术等于一身的新生代扩展作者，短期内便学会制作扩展，并写了大量的武将。旷世巨作《血色衣冠》，设计的人物贯穿中华上下五千年，技能构思新颖、巧妙，环环相扣的联动让人玩得爱不释手。本扩展中的瓦力的技能为其亲自设计，本人稍作调整",			
					"wwyj_yanyumoran":"一名中生代扩展作者，有很强的技能设计与编写代码的能力，曾为编写扩展废寝忘食、通宵达旦，非常努力，其代表作品为《上兵伐谋》，将三国杀人物的技能再升华，融合了三国杀各种各样的技能类型，是一个优秀的大型扩展",					
							//	"wwyj_liangcha":"简介模板",										
						     		
												},
characterTitle:{
					"wwyj_Sukincen":"Sukincen",
					"wwyj_shijian":"雪碧",
					"wwyj_taishangdaniu":"落影逝尘",
					"wwyj_jiguangs":"Aurora",
					"wwyj_danwuyunxi":"老神将",
			 		},
skill:{	
         "wwyj_yanyu":{
				audio:"ext:文武英杰:1",
				trigger:{global:'loseEnd'},		
				direct:true,
				filter:function (event,player){      
        if(player==event.player) return false;
        for(var i=0;i<event.cards.length;i++){ 
            if(get.position(event.cards[i],true)=='d'&&get.subtype(event.cards[i])=='equip1') return true; 
           // if(get.position(event.cards[i],true)=='d'&&event.cards[i].original=='e'&&get.subtype(event.cards[i])=='equip1') return true; 
        } 
        return false; 
    },
				content:function(){								 			
           'step 0'    
          player.chooseCardButton('选择其中一张武器牌',trigger.cards,1).set('filterButton',function(button){           
             return get.subtype(button.link)=='equip1';
         }).set('ai',function(button){
             return get.value(button.link);
         });               
            'step 1'
          if(result.bool){   
                player.logSkill('wwyj_yanyu',player);                                
                player.useCard(result.links[0],player);	
          }
          else event.finish();								    
				},
				ai:{		
					reverseEquip:true,
					order:5,
				},
			},
         "wwyj_bingmou":{
         trigger:{
          player:"shaBegin",
     },
     forced:true,
     content:function (){  
        game.playwwyj('wwyj_bingmou'); 
     },
				mod:{			
						globalTo:function (from,to,distance){
            return distance+=to.getAttackRange()-1;
        },
					selectTarget:function(card,player,range){
				   		if(card.name=='sha'&&range[1]!=-1) range[1]+=player.getAttackRange()-1;
					},					
				},
			},
         "wwyj_gaochang":{
								audio:["yingzi",2],
		     		trigger:{player:'phaseDrawBegin'},
	    	   check:function (event,player){   
	    	       if(player.countCards('h')>2||player.storage.wwyj_toushi<2) return 0;     
	    	       if(player.hp<2) return 1;            
              return player.countCards('h');
         },           
	    			filter:function (event,player){
              return player.storage.wwyj_toushi>0;
         },
			    	content:function(){				           
			    		   trigger.num+=player.storage.wwyj_toushi;
			    		   player.storage.wwyj_toushi=0;
		    		},
		    		ai:{
			       		threaten:2.3,
		    		},
		   	},         
            "wwyj_qiuxue":{              
			            audio:["zili",2],
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                derivation:"wwyj_gaochang",
                init:function (player){
                    player.storage.wwyj_qiuxue=false;               
                },    
                filter:function (event,player){
          return player.storage.wwyj_toushi>=3;
      },
                content:function (){
                player.recover();
                player.addSkill('wwyj_gaochang');
                player.storage.wwyj_qiuxue=true;
                player.awakenSkill('wwyj_qiuxue');
    },
            },
            "wwyj_toushi":{
		          		 audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:1,
                position:'he',      
                discard:false,
                prepare:'give',
                init:function (player){
                    player.storage.wwyj_toushi=0;
                    player.unmarkSkill('wwyj_toushi');
                },    
                marktext:"师",
                intro:{
                    name:"偷师",
                    content:"已有#个偷师标记",
                },                       
                filterTarget:function (card,player,target){
        return player!=target&&player.countCards('he');
    },
                filter:function (event,player){    
        return player.isAlive();
    },                              
                content:function (){
        "step 0"
            target.gain(cards,player);                 
        "step 1"            
            player.chooseSkill(target,function(info,skill){
		    	 	    		return true;
					});     					 
      "step 2"
    			if(result.bool){
			    			var skill=result.skill;		    		
		     			player.addTempSkill(skill,{player:'phaseUseBegin'});
		    				player.popup(skill);		 
		    				player.markSkill('wwyj_toushi');
		    				player.storage.wwyj_toushi++;  
		    			 //player.addMark('wwyj_toushi');               
           player.update(); 				 
		     			player.markSkillCharacter('wwyj_toushi',target.name,get.skillTranslation(skill,player),get.skillInfoTranslation(skill));
					}        
					else event.finish();                                        				
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')<3) return 0;   
                  return target.countCards('h');
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
           	
           "wwyj_ersheng":{              
			            audio:["zaiqi",2],
                trigger:{                   
                    player:"dying",
                },                
                forced:true,                
                filter:function (event,player){
          return player.hp<=0&&player.storage.wwyj_xiangsi2>0;
      },
                content:function (){                        
                player.storage.wwyj_xiangsi2--;
                player.recover(2-player.hp);                
                if(player.storage.wwyj_xiangsi2<=0){                    
                    player.unmarkSkill('wwyj_xiangsi2');    
                    player.removeSkill('wwyj_xiangsi2');                              
                }
                player.update();
    },
            },
            "wwyj_xiangsi2":{              			                         
                marktext:"废",
                intro:{
                    name:"向死",
                    content:"已有#个废标记",
                },                      
                forced:true,
                popup:false,
                init:function (player){
                    player.storage.wwyj_xiangsi2=0;
                    player.unmarkSkill('wwyj_xiangsi2');
                },
                },
          	"wwyj_xiangsi":{              
			            audio:["baonu",2],
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },                
                forced:true,            
                derivation:"wwyj_ersheng", 
                filter:function (event,player){
          return event.num>0;
      },
                content:function (){
                'step 0'
                event.num=0;
                'step 1'
                if(!player.hasSkill('wwyj_xiangsi2')){
                    player.addSkill('wwyj_xiangsi2');
                }
               // player.storage.wwyj_xiangsi2++;               
               // player.markSkill('wwyj_xiangsi2');
               player.addMark('wwyj_xiangsi2');
                event.num++;
                player.update();
                if(player.storage.wwyj_xiangsi2>=5){
                    player.addSkill('wwyj_ersheng');
                    player.awakenSkill('wwyj_xiangsi');
                    event.finish();
                }
                'step 2'
                if(event.num<trigger.num){                   
                    event.goto(1);
                }
                else{
                    event.finish();
                }
    },
            },
           "wwyj_guanli":{
		          		 audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,                           
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
          filter:function (event,player){
					      return true;              
				},
                content:function (){
        "step 0"             
        event.card=target.getCards('h').randomGet();
        "step 1"
         target.discard(event.card);
       "step 2"
        if(get.type(event.card)=='basic'){
            player.useCard({name:'sha'},target,false);
        }
        else if(get.type(event.card,'trick')=='trick'){
            player.useCard({name:'juedou'},'nowuxie',target,'noai').animate=false;
        }
        else{
            //player.gain(event.card,'draw');
            player.useCard(event.card,player);
        }
    },
       ai:{
         result:{
            target:function (player,target){         
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
             "wwyj_shengshen":{
                audio:["jijiu",2],
                trigger:{
                    global:"dying",
                },
                round:1,
                filter:function (event,player){
        return true;
    },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){
                'step 0'
                event.cards=get.cards(2);
                player.showCards(event.cards);
                'step 1'           
           if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])=='red'){             
               event.goto(2);
           }
           if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])!='red'){
               event.cards.remove(event.cards[1]);
               event.goto(2);
           }
           if(get.color(event.cards[0])!='red'&&get.color(event.cards[1])=='red'){
               event.cards.remove(event.cards[0]);
               event.goto(2);
           }
           if(get.color(event.cards[0])!='red'&&get.color(event.cards[1])!='red'){
               event.cards.remove(event.cards[0]);
               event.cards.remove(event.cards[1]);
               if(player.countCards('h',{color:'red'})){
                   event.goto(4);
               }
               else event.finish();
           }                        
          'step 2'        
           player.chooseCardButton('选择其中一张红色牌',event.cards,1,true).set('ai',function(button){
                    //    if(get.color(button.link=='black')) return false;
                                return 10-get.value(button.link);
                        });                        
            'step 3'
          if(result.bool){                
                            event.cards.remove(result.links[0]);
                            game.log(player,'弃置了',result.links[0]);
                            player.useCard({name:"tao"},trigger.player,false);
                            event.finish();
                        }
                        else event.finish();
          'step 4'
          player.chooseBool('是否弃置你的所有红色手牌，视为对'+get.translation(trigger.player)+'使用一张【桃】').set('ai',function(){               
               if(player.countCards('h',{color:'red'})<4&&get.attitude(_status.event.player,trigger.player)>0) return true;       
                   return false;
          });
       'step 5'
        if(result.bool){
            player.discard(player.getCards('h',{color:'red'}));
            player.useCard({name:"tao"},trigger.player,false);
        }
    },
                ai:{
                    order:3,
                },
            },
        		"wwyj_kaiche":{
								audio:"ext:文武英杰:1",
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				filter:function (event,player){				
					/*return game.hasPlayer(function(current){
            return current.sex=='female';
         });  */
         return player.isAlive();             
				},			
				mod:{
					maxHandcard:function (player,num){
					return num+game.countPlayer(function(current){
                return current.sex=='female';
            });
					},
				},
				content:function(){
				var num=game.countPlayer(function(current){
            return current.sex=='female';
         });                 
					trigger.num+=Math.max(1,num);
				},
				ai:{
					threaten:1.3,
				},
			},         
			"wwyj_jiaocheng":{              
			         audio:["yuhua",2],
                trigger:{
                    global:"damageAfter",
                },
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },             
                filter:function (event,player){
          return event.player.isAlive()&&event.player.hp<2;
      },
                content:function (){
       event.card=get.cardPile(function(card){
							return get.type(card)=='equip'&&!trigger.player.isDisabled(get.subtype(card));
						});
						if(event.card){
							trigger.player.chooseUseTarget(event.card,'noanimate','nopopup',true);					
						}
						else{
							event.finish();
						}    
    },
            },
            
             "wwyj_jiguang_shan2":{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				filter:function (event,player){
					return event.skill=='wwyj_jiguang_shan'&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                                          
				},
				content:function (){					
         "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_shan2_info,true,function(card,player,target){
            return target.countCards('e',{subtype:['equip2','equip3','equip5']});
        }).set('ai',function(target){
            if(player.hp<=1) return true;
            return -get.attitude(_status.event.player,target);            
        });
         "step 1"
        if(result.bool){         
           event.target=result.targets[0];     
           player.line(event.target,'green');                
           event.cards=event.target.getCards('e',{subtype:['equip2','equip3','equip5']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'的一张装备区的防具牌或防御马或宝物牌',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){
            result.links[0].discard();                   
        }       
        else event.finish();
                                              
				},
			},
			
			"wwyj_jiguang_shan":{				
				prompt:'当你需要使用闪时，可弃置一名其他角色的一张防具牌或防御马或宝物牌，视为使用之',
				enable:'chooseToUse',
				filter:function (event,player){
					//return !_status.dying.length;
					return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     onuse:function (result,player){
         game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet()); 
     },
     viewAsFilter:function (player){
     return game.hasPlayer(function(current){
                    return player!=current&&current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                 
     },	
				viewAs:{name:'shan'},				
				ai:{
				 order:5,
					threaten:1.5,
					respondShan:true,
				}
			},
											"wwyj_jiguang":{
		          		 audio:"ext:文武英杰:2",         
                group:["wwyj_jiguang_sha","wwyj_jiguang_rsha","wwyj_jiguang_rshan","wwyj_jiguang_shan","wwyj_jiguang_shan2"],               
                },
           "wwyj_jiguang_sha":{		          		 
                enable:"phaseUse",
                usable:1,                                 
                filterTarget:function (card,player,target){
        return player.countUsed('sha')==0&&target.countCards('e',{subtype:['equip1','equip4']});
    },
          filter:function (event,player){
					return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']});
         });                                          
				},
                content:function (){
        "step 0"             
        event.cards=target.getCards('e',{subtype:['equip1','equip4']});
        "step 1"
         player.chooseCardButton(event.cards,1,'弃置'+get.translation(target)+'装备区的武器牌或进攻马，视为使用一张杀',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 2"
        if(result.bool){
            game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet()); 
            result.links[0].discard();
            player.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha'},false,false);             
            player.getStat().card.sha++;
        }       
        else event.finish();
    },
       ai:{
         result:{
            target:function (player,target){
             // if(target.countCards('h')<3) return 1;   
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
                    
                "wwyj_jiguang_rshan":{          
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,           
                filter:function (event,player){            
   // if(event.parent.name!='sha') return false;
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                                          
    },
                content:function (){
              "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_rshan_info,function(card,player,target){
            return target.countCards('e',{subtype:['equip2','equip3','equip5']});
        }).set('ai',function(target){
            if(player.hp<=1) return true;
            return -get.attitude(_status.event.player,target);            
        });
                    "step 1"
         if(result.bool){         
           event.target=result.targets[0];      
           player.line(event.target,'green');                   
           event.cards=event.target.getCards('e',{subtype:['equip2','equip3','equip5']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'装备区的一张防具牌或防御马或宝物牌',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){               
           trigger.untrigger();
           result.links[0].discard();
           trigger.responded=true;
           trigger.result={bool:true,card:{name:'shan'}};                                                
           player.logSkill('wwyj_jiguang');     
           game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet());                                
        }       
        else event.finish();                                                               
    },
            },
            "wwyj_jiguang_rsha":{           
                trigger:{
                    player:"chooseToRespondBegin",
                },       
                direct:true,      
                filter:function (event,player){             
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
         return game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip1','equip4']});
         });            
    },
                content:function (){     
                    "step 0"
        player.chooseTarget('极光',1,lib.translate.wwyj_jiguang_rsha_info,function(card,player,target){
            return target.countCards('e',{subtype:['equip1','equip4']});
        }).set('ai',function(target){
            if(player.hp<=1) return true;
            return -get.attitude(_status.event.player,target);            
        });
                    "step 1"
         if(result.bool){         
           event.target=result.targets[0];       
           player.line(event.target,'green');               
           event.cards=event.target.getCards('e',{subtype:['equip1','equip4']});  
           player.chooseCardButton(event.cards,1,'弃置'+get.translation(event.target)+'装备区的一张武器牌或进攻马',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){               
           trigger.untrigger();
           result.links[0].discard();
           trigger.responded=true;
           trigger.result={bool:true,card:{name:'sha'}};                                                
           player.logSkill('wwyj_jiguang');     
           game.playwwyj(['wwyj_jiguang1','wwyj_jiguang2'].randomGet());                 
        }       
        else event.finish();                                 
    },
            },
 
        "key_chengzhi":{
          trigger:{global:'dieBegin'},
          filter:function (event,player){
              return event.player.group!='key';
          },
          content:function (){
              var cards=[];
              var hs=trigger.player.getCards('hej');
           for(var i=0;i<hs.length;i++){
              cards.push(game.createCard(hs[i]))
           }
           if(cards.length) player.gain(cards,'gain2','log');
         	  	var listm=[];
	           	var listv=[];
         		if(trigger.player.name1!=undefined&&lib.character[trigger.player.name1]) listm=lib.character[trigger.player.name1][3];
	         	else if(lib.character[trigger.player.name]) listm=lib.character[trigger.player.name][3];
         		if(trigger.player.name2!=undefined&&lib.character[trigger.player.name2]) listv=lib.character[trigger.player.name2][3];
         		listm=listm.concat(listv);
         		for(var i=0;i<listm.length;i++){
		        	player.addSkill(listm[i]);
	        		var info=get.info(listm[i]);
        			if(info&&info.zhuSkill){
           			 if(!player.storage.zhuSkill_key_chengzhi) player.storage.zhuSkill_key_chengzhi=[];
	           		 player.storage.zhuSkill_key_chengzhi.add(listm[i])
	         		}
          		}
            },
         },
         "wwyj_qianxu":{
         trigger:{
          player:"shaBegin",
     },
     forced:true,
     content:function (){  
        game.playwwyj(['wwyj_qianxu1','wwyj_qianxu2'].randomGet()); 
     },
				mod:{
					targetInRange:function (card,player,target,now){
				 	  if(card.name=='sha'&&get.distance(player,target)<=1) return false;
							if(card.name=='sha') return true;
					},
					targetEnabled:function (card,player,target,now){
						 if(card.name=='sha'&&get.distance(player,target)<=1) return false;
					},
					selectTarget:function (card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]++;
					},					
				},
			},
         "wwyj_yixue":{
              audio:"ext:文武英杰:1",
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,                  
                filter:function (event,player){
          return player.countCards('h')&&event.player!=player&&event.player.isDamaged();
      },
                content:function (){
                "step 0"		
					player.chooseCard('h','是否交给'+get.translation(trigger.player)+'一张手牌？').ai=function(card){
           if(get.attitude(player,trigger.player)>0){
               if(player.countCards('h')>3) return 8-get.value(card);
                   return 6-get.value(card);
                    }
           return 0;         
       };                					
					"step 1"
					if(result.bool){
			     		player.logSkill("wwyj_yixue",trigger.player);
				    		player.lose(result.cards);       
            player.$give(result.cards,trigger.player);
            trigger.player.gain(result.cards,player);         
					}
					else{
				    		event.finish();
					}
					"step 2"
					if(trigger.player.countCards('h')>player.countCards('h')){
              player.draw();
          }
          else{
            event.finish();   
          } 
    },
    	ai:{
					expose:0.2,
					order:6,
       threaten:0.3,
				}
            },
         "wwyj_jiangsha1":{              
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
          return event.card&&event.card.name=='sha';
      },
                content:function (){
        //game.playwwyj('wwyj_jiangsha');
        player.draw();
        player.turnOver(true);        
    },
            },
         "wwyj_jiangsha":{
              audio:"ext:文武英杰:1",
                trigger:{
                    target:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
          return !event.player.isTurnedOver();
      },
                content:function (){
        player.draw(player.maxHp-player.countCards('h'));
        trigger.player.addTempSkill('wwyj_jiangsha1',{player:'shaAfter'});
    },
    ai:{					
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)<0){
									if(player.needsToDiscard()){
										num=0.3;
									}
									else{
										num=0.1;
									}
								}
								if(target.hp>=4) return [1,num*-0.5];
								if(target.hp==3) return [1,num*-1.5];
								if(target.hp<=2) return [1,num*-2.5];
							}
						}
					}
				},
            },
          "wwyj_daigeng":{
              audio:"ext:文武英杰:1",
              round:1,
                trigger:{
                    global:"turnOverEnd",
                },              
                filter:function (event,player){
          return event.player.isTurnedOver();
      },
                content:function (){
        player.insertPhase();
    },
            },
      "wwyj_jipin":{
              audio:"ext:文武英杰:1",
                trigger:{
                    global:"drawBegin",
                },       
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },     
                filter:function (event,player){
          return event.player.countCards('h')<event.player.hp;
      },
                content:function (){
        trigger.num++;
    },
            },
			"wwyj_chengpiao":{
		          		 audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                //filterCard:true,
                //selectCard:1,
               // position:'he',                
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filter:function (event,player){    
        return player.isAlive();
    },              
               /* check:function (card){
        return 6-get.value(card);
    },*/
                content:function (){
        "step 0"
       // target.gain(cards,player);         
        event.cards=target.getCards('h');
        "step 1"
         player.chooseCardButton(event.cards,1,'选择使用'+get.translation(target)+'的一张手牌').set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 2"
        if(result.bool){
            target.lose(result.links[0]);       
            target.$give(result.links[0],player);
            player.chooseUseTarget(result.links[0],true);            
        }       
        else event.finish();
    },
       ai:{
         result:{
            target:function (player,target){
             // if(target.countCards('h')<3) return 1;   
                return -target.countCards('h');
            },
                    },
                    order:8,
                    threaten:0.5,
        },  
            },
         "wwyj_oldkangxing2":{
              audio:"ext:文武英杰:1",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
          return event.source&&!event.nature;
      },
                content:function (){
        player.draw();
        if(trigger.source.countCards('he')){
        player.discardPlayerCard(trigger.source,'he',true);
        }
    },
            },
            "wwyj_oldkangxing":{
               audio:"ext:文武英杰:1",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                group:"wwyj_oldkangxing2",
                filter:function (event,player){
          return event.nature;
      },
                content:function (){
                    trigger.cancel();
                },
            },
      "wwyj_touliang1":{
    	mark:true,
    	marktext:"凉",
				mod:{
					cardEnabled2:function (card){
						if(get.type(card)=='basic') return false;
					},
				},
				intro:{
					content:"不能使用或打出基本牌",
				},
				},
                "wwyj_touliang":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseEnd",
                },                                       
                direct:true,
                filter:function (event,player){            
        return true;
    },
                content:function (){
                'step 0'      
      var cards=player.getCards('h'); 
      var suits=[];   
      for(i=0;i<cards.length;i++){
          if(!suits.contains(get.suit(cards[i]))){
          suits.push(get.suit(cards[i])); 
          }
      }
      event.num=suits.length;   
       'step 1'
       player.chooseTarget('选择发动【透凉】的目标',[1,event.num],lib.translate.wwyj_touliang_info,function(card,player,target){
            return target!=player&&get.distance(player,target,'attack')<=1;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 2'
        if(result.bool){       
            event.num1=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
          'step 3'                            
        if(event.num1<event.targets.length){  
            //event.targets[event.num1].damage();                                           
            game.asyncDraw([event.targets[event.num1],player]);     
            event.targets[event.num1].addTempSkill('wwyj_touliang1',{player:'phaseBegin'});     
            player.logSkill("wwyj_touliang");                              
            event.num1++;
            event.redo();
        }
        else{
            event.finish();      
        } 
    },
            },
              "wwyj_kangxing":{
                audio:"ext:文武英杰:1",
                trigger:{
                    target:"useCardToBefore",
                },
                direct:true,
                priority:8,
                filter:function (event,player){
                if(event.targets.length>1) return false;
           return player!=event.player&&player.countCards('h');   
    },
                content:function (){
    "step 0"               
      player.chooseCard('弃置一张类型相同的手牌，使此牌目标对调','h',function(card){
            return get.type(card)==get.type(trigger.card);
        }).ai=function(card){
            return 12-get.value(card);
        };                
    "step 1"
    if(result.bool){
        player.logSkill('wwyj_kangxing');
        player.discard(result.cards);
        player.line(trigger.player);
        trigger.target=trigger.player;
        trigger.player=player;
        trigger.untrigger();
        trigger.trigger('useCardToBefore');
       }       
       else event.finish();            
    },
            },            
           
         "wwyj_kangfu":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"dyingAfter",
                    source:"dieBegin",
                },
                forced:true,
                 mod:{
                ignoredHandcard:function (card,player){
            if(get.type(card)=='equip'){
                return true;
            }
        },
                    attackFrom:function (from,to,distance){ 
            return distance-1; 
        },
                },               
                filter:function (event,player){
        return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length>0;
    },
                content:function (){  
                player.recover();                            
   player.chooseToEnable();          
    },
            },
        "wwyj_chehuo":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                priority:1,
                forced:true,                               
                content:function (){
                    player.disableEquip(1); 
                    player.disableEquip(2);   
                    player.disableEquip(3);     
                    player.disableEquip(4);     
                    player.disableEquip(5);                            
               },
          },
        "wwyj_jinzhu_shan":{
           audio:["pyzhuren",2],
                trigger:{
                    player:"chooseToRespondBegin",
                },
                direct:true,           
                filter:function (event,player){ 
                if(!player.countCards('he',{type:'equip'})) return false;    
    //if(event.parent.name!='sha') return false;
    if(!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
    if(!event.filterCard({name:'shan'})) return false;
         return true;                                  
    },
                content:function (){
              "step 0"
        player.chooseCard(get.prompt2('wwyj_jinzhu'),'he',function(card){
                        return get.type(card)=='equip';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('he',{type:'equip'})){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
               if(result.bool){                    
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'shan'}};
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);                        
                        player.logSkill('wwyj_jinzhu');   
                       // game.playwwyj('wwyj_jinzhu');                      
                    }                    
        else event.finish();   
    },
            },
            "wwyj_jinzhu_sha":{
            audio:["pyzhuren",2],
                trigger:{
                    player:"chooseToRespondBegin",
                },       
                direct:true,      
                filter:function (event,player){    
               if(!player.countCards('he',{type:'equip'})) return false;   
        if(!event.filterCard({name:'sha'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;                 
         return true;
    },
                content:function (){     
                    "step 0"
        player.chooseCard(get.prompt2('wwyj_jinzhu'),'he',function(card){
                        return get.type(card)=='equip';
                    }).set('ai',function(card){
                        if(!_status.event.player.countCards('he',{type:'equip'})){
                            return 8-get.value(card);
                        }
                        return 6-get.value(card);
                    });
                    "step 1"
                    if(result.bool){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.result={bool:true,card:{name:'sha'}};
                        player.lose(result.cards,ui.special);
                        player.$throw(result.cards);            
                        player.logSkill('wwyj_jinzhu');    
                      //  game.playwwyj('wwyj_jinzhu');                     
                    }                    
        else event.finish();                
    },
            },
            "wwyj_jinzhu":{
                audio:["pyzhuren",2],
                enable:"chooseToUse",             
                group:["wwyj_jinzhu_sha","wwyj_jinzhu_shan"],                
                filter:function (event,player){    
                if(!player.countCards('he',{type:'equip'})) return false;                                            
        if((event.filterCard({name:'sha'},player,event))||
            (event.filterCard({name:'shan'},player,event))||
            (event.filterCard({name:'jiu'},player,event))||
            (event.filterCard({name:'tao'},player,event))){
   return player.isAlive();    
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','fire']);
                list.push(['基本','','sha','thunder']);
            }
                    if(event.filterCard({name:'shan'},player,event)){
                list.push(['基本','','shan']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('烬铸',[list,'vcard'],'hidden');
        },
                    check:function (button){
            var player=_status.event.player;
            var card={name:button.link[2],nature:button.link[3]};
            if(game.hasPlayer(function(current){
                return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
            })){
                switch(button.link[2]){
                    case 'tao':return 5;
                    case 'jiu':return 3.01;
                    case 'shan':return 3.01;
                    case 'sha':
                        if(button.link[3]=='fire') return 2.95;
                        else if(button.link[3]=='fire') return 2.92;
                        else return 2.9;
                }
            }
            return 0;
        },
                    backup:function (links,player){
            return {
                  filterCard:function (card,player){                    
                      return get.type(card)=='equip';
                },
                selectCard:1,
                position:'he',
                viewAsFilter:function (player){return player.isAlive()},
                viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null},                                    
                popname:true,
                ignoreMod:true,
                precontent:function(){                            
                    player.logSkill('wwyj_jinzhu'); 
                },
            }
        },
                    prompt:function (links,player){
            return '视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
        },
                },
                ai:{
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                return 3.1;
            }
            return 2.9;
        },
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    result:{
                        player:1,
                    },
                },
            },
             "wwyj_tuikeng":{                     
                trigger:{
          player:"changeHp",
     },
     forced:true,
     content:function (){  
        game.playwwyj('wwyj_qianfu1'); 
     },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+to.getDamagedHp();
        },                    
                },
            },
            "wwyj_jilve_delete":{
     forced:true,
     trigger:{
     player:"phaseEnd",
     },
     popup:false,
     filter:function(event,player){
					return true;
				},
     content:function (){
     player.storage.wwyj_jilve=[];
     },
     },
  
			"wwyj_jilve":{
			audio:"ext:文武英杰:1",
				enable:'phaseUse',
				filter:function(event,player){
				if(player.getStat().skill.wwyj_jilve>=player.hp) return false; 
					return  player==_status.currentPhase&&event.type!='wuxie';
				},
				group:["wwyj_jilve_delete"],
				init:function(player){
					if(!player.storage.wwyj_jilve) player.storage.wwyj_jilve=[];
				},
				chooseButton:{
					dialog:function(event,player){
					var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(player.storage.wwyj_jilve.contains(name)) continue;
							if(name=='sha'){
								list.push(['基本','','sha']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','thunder']);
							}
							else if(get.type(name)=='trick') list.push(['锦囊','',name]);
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}
						if(list.length==0){
							return ui.create.dialog('极略已无可用牌');
						}
						return ui.create.dialog('极略',[list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var players=game.filterPlayer();
						if(player.countCards('h',button.link)) return 0;
						if(button.link[2]=='wuzhong'){
							if(player.countCards('h')<player.hp){
								return 3+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='tao'){
							return 3+Math.random();
						}
						if(button.link[2]=='sha'){
							return 2+Math.random();
						}
						if(button.link[2]=='juedou'){
							return 2+Math.random();
						}
						if(button.link[2]=='guohe'){
							return 2+Math.random();
						}
						if(button.link[2]=='shunshou'){
							for(var i=0;i<players.length;i++){
								if(player.canUse('shunshou',players[i])&&get.attitude(player,players[i])<0){
									return 2+Math.random();
								}
							}
							return 0;
						}
						if(button.link[2]=='tiesuo'){
							return 1+Math.random();
						}
						if(button.link[2]=='jiu'){
							if(get.effect(player,{name:'jiu'})>0){
								return 1+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='nanman'||button.link[2]=='wanjian'||button.link[2]=='taoyuan'||button.link[2]=='wugu'){
							var eff=0;
							for(var i=0;i<players.length;i++){
								if(players[i]!=player){
									eff+=get.effect(players[i],{name:button.link[2]},player,player);
								}
							}
							if(eff>0){
								return 1+Math.random();
							}
							return 0;
						}
						return Math.random();

					},
					backup:function(links,player){
						return {
						  filterCard:true,
         selectCard:1,
         position:'h',
         viewAsFilter:function (player){return player.countCards('h')},   
							popname:true,
							check:function(card){
								return 6-get.value(card);
							},			
							viewAs:{name:links[0][2],nature:links[0][3]},
							onuse:function(result,player){
		   			 game.playwwyj('wwyj_jilve1'); 
								player.storage.wwyj_jilve.add(result.card.name);
							},
						}
					},
					prompt:function(links,player){
						return '视为使用'+(get.translation(links[0][3])||'')+get.translation(links[0][2]);
					}
				},
				ai:{
					order:4,
					result:{
						player:function(player){
							var allshown=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].ai.shown==0){
									allshown=false;
								}
								if(get.attitude(player,players[i])>0){
									return 1;
								}
							}
							if(allshown) return 1;
							return 0.8;
						}
					},
					threaten:1.9,
				},
            },
                   
         "wwyj_yanguan":{
                audio:"ext:文武英杰:1",
                trigger:{
                    //global:"useCardToTarget",
                    global:"useCard",
                },
                usable:1,     
                direct:true,                   
                filter:function (event,player){
          return event.player!=player&&player.countCards('h')&&event.card&&get.type(event.card)=='trick';
      },
                
                content:function (){              
                  'step 0'   
                 player.chooseToDiscard("是否弃置一张手牌对"+get.translation(trigger.player)+"发动严管？").ai=function(card){
                    if(get.attitude(player,trigger.player)<=0){
                        if(player.countCards('h')>3) return 10-get.value(card);
                        return 6-get.value(card);
                    }
                    return 0;
                };                
             'step 1'   
        if(result.bool){               
            //player.discard(event.cards);     
            player.gain(trigger.card,'gain2');
            var targets=game.filterPlayer();
            trigger.targets.remove(targets);                                                          
            trigger.cancel();     
            player.logSkill('wwyj_yanguan');       
        }       
        else{
            player.getStat().skill.wwyj_yanguan--;
            event.finish();   
        }                         
        },
            },
             "wwyj_lilun":{
             audio:"ext:文武英杰:1",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
          return event.card&&get.type(event.card)=='trick';
      },
                content:function (){
        'step 0'      
        event.cards=get.cards(3);     
        event.num=2;
          'step 1'        
           player.chooseCardButton('选择获得其中一张牌',event.cards,1).set('ai',function(button){                    
                                return 15-get.value(button.link);
                        });                        
            'step 2'
          if(result.bool){                
             event.cards.remove(result.links[0]);
             player.gain(result.links[0],'gain2');
             game.log(player,'获得了',result.links[0]);                            
             event.goto(3);
          }
          else event.finish();
            'step 3'
          player.chooseCardButton('将这'+get.cnNumber(event.num)+'张牌置于牌堆顶',event.cards,true).set('ai',function(button){                    
              return 12-get.value(button.link);
           });                                                
           'step 4'
            if(result.bool){
                event.cards.remove(result.links[0]);                        
                ui.cardPile.insertBefore(result.links[0],ui.cardPile.firstChild);
                game.updateRoundNumber();
             }
             'step 5'                
                event.num--;
                if(event.num>0){
                    event.goto(3);
                }                    
                else event.finish();
        },
            },
                "wwyj_jinxiudraw":{                
                trigger:{
                    player:"phaseEnd",
                },                
                forced:true,
                content:function (){
                game.playwwyj('wwyj_jinxiu'); 
                player.draw(player.storage.wwyj_jinxiu);
                player.storage.wwyj_jinxiu=0;
                player.unmarkSkill('wwyj_jinxiu');
                player.update();
               },
               },           
                 "wwyj_jinxiu":{
              //  audio:"ext:文武英杰:1",
                trigger:{
                    source:"damageEnd",
                },    
                marktext:"修",
                intro:{
                    name:"进修",
                    content:"已有#个修标记",
                },
                group:"wwyj_jinxiudraw",            
                forced:true,
                init:function (player){
                    player.storage.wwyj_jinxiu=0;
                    player.unmarkSkill('wwyj_jinxiu');
                },
                content:function (){
                player.storage.wwyj_jinxiu++;
                player.markSkill('wwyj_jinxiu');
                player.update();
               },
               },   
          
            "wwyj_ciya":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseDrawBegin",
                },                
                filter:function (event,player){
          return true;
      },             
                content:function (){
                'step 0'
                trigger.num--;    
            'step 1'           
             event.num=0;
        event.targets=game.filterPlayer(function(current){
            return current!=player&&get.distance(current,player,'attack')<=1;
        });      
    'step 2' 
        if(event.num<event.targets.length){
            player.useCard({name:'sha'},event.targets[event.num],false);         
            event.num++;
            event.redo();
         }
         else event.finish();
                },
                 ai:{			
              					order:5,
             			},
            },
                "wwyj_yingguai":{
                audio:"ext:文武英杰:1",
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return player.isAlive();
				},				
				direct:true,
				content:function(){
				 "step 0"
				player.chooseTarget(get.prompt2('wwyj_yingguai'),function(card,player,target){
            return target!=player;
        },function(target){
            return -get.attitude(player,target);
        });        
        "step 1"
        if(result.bool){
            player.logSkill('wwyj_yingguai',result.targets[0]);
            var card=game.createCard(['lebu','bingliang','shandian'].randomGet());
			      		result.targets[0].addJudge(card);
			      		result.targets[0].$draw(card);
			      		game.delay();
        }
        else{
            event.finish();
        }        					
				},
				ai:{
					maixie_defend:true,
					order:5,
				}
			},        
            "wwyj_qianzhui":{
            audio:["xingshang",2],
                trigger:{
                    global:"dieEnd",
                },
                filter:function (event,player){
                    return !player.storage.wwyj_qianzhui;   
                },
                forced:true,
                juexingji:true,			
                mark:true,
                init:function (player){
				             	player.storage.wwyj_qianzhui=false;
		           		},
                content:function (){        
                'step 0'
                player.line(trigger.player,'green');   
                player.$fullscreenpop('( •̥́ ㉨ •̀ू )','fire');    
                player.removeSkill('wwyj_qiandao');
                player.removeSkill('wwyj_yingguai');
                'step 1'    
        var name=trigger.player.name;                      
       //方法一：
    /*   var list=[];
       var skills=lib.character[name][3];
       for(var j=0;j<skills.length;j++){
       if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!lib.skill[skills[j]].unique){
       //if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]){
       list.push(skills[j]);
       }
       }
       player.addSkill(list);*/
       //方法二：
       var skills=lib.character[name][3].slice(0);
       player.addSkill(skills);
       player.markCharacter(name,null,true,true);      
       player.storage.wwyj_qianzhui=true;
       player.awakenSkill('wwyj_qianzhui');             
    },
            },
         "wwyj_qiandao":{
                audio:["tuxi",2],
                trigger:{
                    global:"judgeEnd",
                },     
                frequent:true,
                check:function (event,player){
                   // if(get.attitude(player,event.player)>0&&event.card.name=='lebu'&&result.suit!='heart') return true;
                    return get.attitude(player,event.player)<=0;
                },
                filter:function (event,player){
        return player!=event.player&&event.player.countCards('he');
    },
                content:function (){            
                    player.logSkill('wwyj_qiandao',trigger.player);
                    player.gainPlayerCard(trigger.player,'he',true);                                                           
                },
                ai:{			
              					order:5,
             			},
                },
        "wwyj_zuikui":{
                audio:["huoshou1",2],
                trigger:{
                    global:["dieBegin","turnOverAfter"],
                },   
                //forceDie:true,
                forced:true,
                filter:function (event,player,name){                
                if(name=='turnOverAfter') return event.player.isTurnedOver();
        return game.hasPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                   
    },
                content:function (){                
                    'step 0' 
       player.say('我能令老大断更，我开心'); 
       event.num=0;                       
      event.targets=game.filterPlayer(function(current){
           return current!=player&&current.countCards('he');
         });                             
        event.targets.remove(player);
        event.targets.sort(lib.sort.seat);             
            'step 1'   
        if(num<event.targets.length){
        player.line(event.targets[num],'green');
        event.targets[num].chooseToDiscard('he',true);   
        //event.targets[num].discardPlayerCard(event.targets[num],'he',true);      
        event.num++;
        event.redo();           
        }
        else{
            event.finish();
        }                             
                },
                ai:{			
              					threaten:2.5,
             			},
                },
            "wwyj_jiaoxiao":{
                audio:"ext:文武英杰:2",
                trigger:{
                    player:"damageBegin",
                },     
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha';
    },
                content:function (){ 
                     if(trigger.source.countCards('he')){
                         player.gainPlayerCard(trigger.source,'he',true); 
                     }
                     trigger.num++;
                     player.say(['我要将无名杀的扩展功能删了，改成龙魂杀','你们等着，等我回来，绝对给你们一波制裁'].randomGet());
                     trigger.source.say('拜托你了，没啥事就别到处BB啦，现在知道错了吧？');
                },
                ai:{			
              					threaten:2.5,
             			},
                },
                "wwyj_daixue":{
                audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return player.hasSkill('wwyj_caizhi1')||player.hasSkill('wwyj_caizhi2')||player.hasSkill('wwyj_caizhi3')||player.hasSkill('wwyj_caizhi4');
    },
                content:function (){               
                        'step 0'
                       var list=[];
                if(player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
                if(player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
                if(player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
                if(player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');
                player.chooseControl(list,function(){                                       
                    return Math.floor(Math.random()*list.length);
                }).set('prompt','选择一项需要移动的技能');       
                 'step 1'   
                player.popup(get.translation(result.control));        
                player.removeSkill(result.control);       
                player.unmarkSkill(result.control);
                target.addSkill(result.control);       
                target.markSkill(result.control);
                player.update();
                target.update();
    },
                ai:{
                    threaten:0.3,
                    result:{
                        target:function (player,target){
                return get.recoverEffect(target,player,target);
            },
                    },
                    order:9,
                },
            },
            "wwyj_caizhidamage":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,                
                filter:function (event,player){                            
        return player.hasSkill('wwyj_caizhi1')||player.hasSkill('wwyj_caizhi2')||player.hasSkill('wwyj_caizhi3')||player.hasSkill('wwyj_caizhi4');
    },
                content:function (){
         "step 0"                    
        var list=[];
        if(player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
        if(player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
        if(player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
        if(player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');        
        var list2=list.randomGet();
        player.popup(get.translation(list2));        
        player.removeSkill(list2);       
        player.unmarkSkill(list2);
        player.update();
        if(list2=='wwyj_caizhi1'){
            game.playwwyj('wwyj_qingxian'); 
        }       
        if(list2=='wwyj_caizhi2'){
            game.playwwyj('wwyj_kanpo'); 
        }             
        if(list2=='wwyj_caizhi3'){
            game.playwwyj('wwyj_relianying'); 
        }     
        if(list2=='wwyj_caizhi4'){
            game.playwwyj('wwyj_limu'); 
        }                                        
       "step 1"   
        trigger.num--;
    },
            },     
            "wwyj_caizhi":{
                trigger:{                   
                    player:"phaseBegin",
                },
                group:"wwyj_caizhidamage",
                forced:true,
                priority:2020,
                filter:function (event,player){
        return !player.hasSkill('wwyj_caizhi1')||!player.hasSkill('wwyj_caizhi2')||!player.hasSkill('wwyj_caizhi3')||!player.hasSkill('wwyj_caizhi4');
    },
                content:function (){                                 
                var list=[];
                if(!player.hasSkill('wwyj_caizhi1')) list.push('wwyj_caizhi1');
                if(!player.hasSkill('wwyj_caizhi2')) list.push('wwyj_caizhi2');
                if(!player.hasSkill('wwyj_caizhi3')) list.push('wwyj_caizhi3');
                if(!player.hasSkill('wwyj_caizhi4')) list.push('wwyj_caizhi4');
                var list2=list.randomGet();
                player.popup(get.translation(list2));        
                player.addSkill(list2);       
                player.markSkill(list2);
                player.update();      
                if(list2=='wwyj_caizhi1'){
                    game.playwwyj('wwyj_qingxian'); 
                }       
                if(list2=='wwyj_caizhi2'){
                    game.playwwyj('wwyj_kanpo'); 
                }             
                if(list2=='wwyj_caizhi3'){
                    game.playwwyj('wwyj_relianying'); 
                }     
                if(list2=='wwyj_caizhi4'){
                    game.playwwyj('wwyj_limu'); 
                }                                                             
    },
            },           
            "wwyj_caizhi4":{
                marktext:"画",
                forced:true,
                locked:true,
                intro:{
                    name:"画",
                    content:"视为拥有【立牧】",
                },
                group:["xinfu_limu"],
            },
            "wwyj_caizhi3":{
                marktext:"书",
                forced:true,
                locked:true,
                intro:{
                    name:"书",
                    content:"视为拥有界【连营】",
                },
                group:["relianying"],
            },
            "wwyj_caizhi2":{
                forced:true,
                locked:true,
                marktext:"棋",
                intro:{
                    name:"棋",
                    content:"视为拥有【看破】",
                },
                group:["kanpo"],
            },
            "wwyj_caizhi1":{
                forced:true,
                locked:true,
                marktext:"琴",
                intro:{
                    name:"琴",
                    content:"视为拥有【清弦】",
                },
                group:['qingxian_jilie','qingxian_rouhe','qingxian_dying'],
            },
        "wwyj_fengliu1":{},
        "wwyj_fengliu":{
            audio:"ext:文武英杰:1",
                 trigger:{
                    global:"gameStart",
                    player:["phaseBegin","phaseEnd"],
                },    
                frequent:true,
                filter:function (event,player){
        return player.isAlive();
    },
                content:function (){               
         		'step 0'				         	        		
					var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][0]=='female') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][0]!='female';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[0]=='female';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}					
					player.chooseButton(true).set('ai',function(button){
						return get.rank(button.link,true)-lib.character[button.link][2];
					}).set('createDialog',['选美：请选择一名佳丽当你的副将',[list.randomGets(5),'character']]);			
					'step 1'	
					if(lib.config.mode=='guozhan'){
                    player.replaceFujiang(result.links[0]);                  
            }
            else{
                  player.addFujiang(result.links[0]);                         
            }    								
    },
                ai:{                   
                    order:9,
                },
            },
               "wwyj_baozaorecover":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"damageEnd",
                },     
                forced:true,
                content:function (){ 
                     if(player.isDamaged()){
                         player.recover();
                     }
                     else player.draw();
                },
                },
               "wwyj_baozao":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"dyingBegin",
                },     
                priority:2020,
                mark:true,
                limited:true,
			           	init:function (player){
				             	player.storage.wwyj_baozao=false;
		           		},
                check:function (event,player){
                if(!event.source.isEmpty(2)) return 0;
                    return get.attitude(player,event.source)<=0;
                },         
                filter:function (event,player){
                return event.source&&event.source.isAlive();
    },                
                content:function (){   
         "step 0"
         event.current = player.next;
         player.addTempSkill('wwyj_baozaorecover');
         player.storage.wwyj_baozao=true;
         player.awakenSkill('wwyj_baozao');
         "step 1"
        if (trigger.source.isDead()||event.current==player) {
            event.finish();
        } else {
            event.current.useCard({name: 'sha'},trigger.source, false);
        }
         "step 2"     
            event.current=event.current.next;                             
            event.goto(1);
    },
            },
              "wwyj_xipi":{
                audio:"ext:文武英杰:1",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:2020,
                filter:function (event,player){
                if(event.targets.length>1) return false;
                if(event.player==player) return false;
               return game.hasPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                             
    },                
                content:function (){         
        var targets=game.filterPlayer(function(current){
                    return current!=player&&current.countCards('he');
         });                             
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.target=targets.randomGet();
        player.line(event.target,'green');       
        player.gainPlayerCard(event.target,'he',true,'嘻皮');                                              
    },
            },
            "wwyj_jiedan":{
                popup:false,
                audio:"ext:文武英杰:2",
                global:"wwyj_xiadan",
               	ai:{			
              					threaten:2.5,
             			},
            },
            "wwyj_xiadan":{
                enable:"phaseUse",
                filter:function (event,player){
        if(player.hasSkill('wwyj_xiadan1')) return false;
        return player.countCards('he')&&game.hasPlayer(function(current){
            return player!=current&&current.hasSkill('wwyj_jiedan');
        });
    },
                direct:true,
                delay:0,
                popup:false,
                filterCard:true,
                discard:false,
                lose:false,
                position:"he",
                prompt:function (){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
        var str='将一张牌交给'+get.translation(list);
        if(list.length>1) str+='中的一人';
        return str;
    },
                check:function (card){
        if(card.name=='sha') return 5;
        return 8-get.value(card);
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer(function(current){
            return current.hasSkill('wwyj_jiedan');
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>0){
            player.chooseTarget(true,'选择【下单】的目标',function(card,player,target){
                return _status.event.list.contains(target);
            }).set('list',targets).set('ai',function(target){
                var player=_status.event.player;
                return get.attitude(player,target);
            });
        }
        else{
            event.finish();
        }
        "step 1"
        if(result.bool&&result.targets.length){
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.target){
            player.logSkill('wwyj_jiedan',event.target);
            player.addTempSkill('wwyj_xiadan1','phaseUseEnd');
            event.card=cards[0];
            if(event.target!=player){
                player.give(cards,event.target);
                event.target.recover();
                event.target.chooseToUse({name:'sha'},'是否使用一张杀？').logSkill='wwyj_xiadan';
              //  event.target.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha'},false,false);
                event.target.say(['君子爱财，取之有道','受人钱财，替人消灾'].randomGet());
            }
        }
        else{
            event.finish();
        }
        "step 3"        	
					var list1=[],list2=[];
					for(var i=0;i<lib.inpile.length;i++){
						var type=get.type(lib.inpile[i]);
						if(type=='basic'){
							list1.push(['基本','',lib.inpile[i]]);
						}
						else if(type=='trick'){
							list2.push(['锦囊','',lib.inpile[i]]);
						}					
					}
					player.chooseButton([get.prompt('wwyj_xiadan'),[list1.concat(list2),'vcard']]).set('filterButton',function(button){											
						return true;
					}).set('ai',function(button){
		  			//return Math.random();				
				switch(button.link[2]){
				 		case 'du':return 0;
							case 'sha':return 3+9*Math.random();
							case 'tao':return 5.5+9*Math.random();
							case 'jiu':return 3+9*Math.random();
							case 'shan':return 4+9*Math.random();
							case 'wuzhong':return 4.5+9*Math.random();
							case 'shunshou':return 4.5+9*Math.random();
							case 'nanman':return 3+9*Math.random();
							case 'wanjian':return 3+9*Math.random();
							default:return 9*Math.random();
						}							
					}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
				 "step 4"       
					if(result.bool){
					player.gain(get.cardPile(function(card){
						return card.name==result.links[0][2];
					}),'gain2');						
						player.logSkill('wwyj_xiadan');			
						}							
					else{
						event.finish();
					}						
    },
                ai:{
                    order:2,
                    threaten:1.5,
                    result:{
                        player:function (player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('wwyj_jiedan');
                });
                if(target){
                    return get.attitude(player,target);
                }
            },
                    },
                },
            },
            "wwyj_xiadan1":{
            },
            "wwyj_huikeng":{
                audio:"ext:文武英杰:1",
                enable:"phaseUse",
                usable:1,
                selectTarget:-1,
                multitarget:true,
                multiline:true,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){               
       "step 0"         
       event.current=player.next;  
       player.removeSkill('wwyj_huikeng');  
       	game.broadcastAll(function(player){       	
       	var Animation = ui.create.div();
       	//Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;
       	Animation.setBackgroundImage('extension/文武英杰/wwyj_huikeng.gif'); 						
   				Animation.style.backgroundSize='cover';
   				Animation.style.backgroundPosition='center';
						Animation.style["z-index"] = 7;						
						Animation.style.width = (120/715)*document.body.clientHeight + "px";
						Animation.style.height= (120/715)*document.body.clientHeight + "px";						
						if(player==game.me){						
							Animation.style.left= (document.body.clientWidth-120)/2+"px";
							Animation.style.top = "50%";
							ui.window.appendChild(Animation);
						}
						else {
						Animation.style.left= (document.body.clientWidth-120)/2+"px";
							Animation.style.top = "50%";
							ui.window.appendChild(Animation);
							/*Animation.style.left= "15%";
							Animation.style.top = "50%";
							player.appendChild(Animation);*/
						}												         
						setTimeout(function(){
    Animation.delete();
},4500);
			},player);
       "step 1"                                
        event.list=get.gainableCharacters(function(info){
            return info[2]>=0;
        });
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            event.list.remove(players[i].name);
            event.list.remove(players[i].name1);
            event.list.remove(players[i].name2);
        }
        event.list=event.list.randomGets(game.players.length-1);           
         "step 2"    
          event.dialog=ui.create.dialog('选择一张武将牌替换'+get.translation(event.current)+'的武将牌','hidden');
          event.dialog.add([event.list,'character']);   
          if(event.dialog.buttons.length==1){
              player.draw();
              event.current.init(event.dialog.buttons[0].link);
              event.finish();
              }
           else{   
          player.chooseButton(event.dialog,true).ai=function(button){
                   if(get.attitude(player,event.current)>0){
                            return get.rank(button.link,true);
                        }
                        else{
                            return -get.rank(button.link,true);
                        }
        };    
        }
        "step 3"                          
             if(result.bool){
                 player.draw();
                 var a=event.current.hp;
                 var b=event.current.maxHp;
                 event.current.init(result.buttons[0].link); 
                 event.current.maxHp=b;
                 event.current.hp=a;                 
                 event.current.update();                 
                 event.list.remove(result.buttons[0].link);
              /*   var button;  
                 for(var i=0;i<event.dialog.buttons.length;i++){  
                     if(event.dialog.buttons[i].link==result.buttons[0].link){  
                         button=event.dialog.buttons[i];                           
                     }  
                 }   
                 if(button) event.dialog.buttons.remove(button);    */                                       
              }   
              else{
                  event.finish();
              }   
                 "step 4"      
                 if(event.current!=player.previous){
                     event.current=event.current.next;
                     event.goto(2);
                 }
                 else{ 
                     player.removeSkill('wwyj_huikeng');                      
                     event.finish();
                 }
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                    },
                },
            },
             "wwyj_ancha2":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"changeHp",
                },                  
                frequent:true,         
                priority:2020,            
                filter:function (event,player){
        return !player.hasSkill('wwyj_huikeng')&&player.hp<2;
    },
                content:function (){                        
                    player.addSkill('wwyj_huikeng');                           
                },
                },
            "wwyj_ancha":{
                audio:"ext:文武英杰:1",
                trigger:{
                    global:"damageEnd",
                },
                group:"wwyj_ancha2",
                derivation:"wwyj_huikeng",
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                filter:function (event,player){
        return event.source&&player!=event.source&&event.player.isAlive();
    },
                content:function (){    
                "step 0"
                if(trigger.source.countCards('h')){
                    player.viewHandcards(trigger.source);
                }
                "step 1"
                if(player!=trigger.player){
                    trigger.player.draw();
                }
                else{     
                    player.draw();                    
                    player.turnOver(false);                       
                    player.insertPhase();
                }                                 
    },
            },
            "wwyj_qianfu":{
                audio:"ext:文武英杰:1",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
        return !player.isTurnedOver();
    },
                mod:{
                    globalTo:function (from,to,distance){
            if(to.isTurnedOver()) return distance+Infinity;
        },
                },
                content:function (){          
       player.turnOver();    
       player.say(['我先休息一会儿，没什么事就别来烦我','有事启奏，没事退朝'].randomGet()); 
    },
            },
            "wwyj_chuangshi":{
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                audio:"ext:文武英杰:1",
                unique:true,
                forced:true,
                juexingji:true,
                priority:Infinity,
                init:function (player){
				             	player.storage.wwyj_chuangshi=false;
		           		},
                content:function (){               
       "step 0" 
    //   player.$fullscreenpop('无名杀降临','fire'); 
       		
       	game.broadcastAll(function(player){
       	
       	var Animation = ui.create.div();
       	//Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;  
        Animation.setBackgroundImage('extension/文武英杰/wwyj_chuangshi.gif'); 	   									
   				Animation.style.backgroundSize='cover';
   				Animation.style.backgroundPosition='center';
						Animation.style["z-index"] = 7;
						
						Animation.style.width = (360/715)*document.body.clientHeight + "px";
						Animation.style.height= (360/715)*document.body.clientHeight + "px";
						
						if(player==game.me){						
							Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
						}
						else {
						Animation.style.left= (document.body.clientWidth-120)/2.5+"px";
							Animation.style.top = "25%";
							ui.window.appendChild(Animation);
							/*Animation.style.left= "8%";
							Animation.style.top = "25%";
							player.appendChild(Animation);*/
						}
												         
						setTimeout(function(){
						ui.window.removeChild(Animation);
       //Animation.delete();
},7500);

			},player);
					 player.storage.wwyj_chuangshi=true;			
       player.awakenSkill("wwyj_chuangshi");
       game.delay(2);
       event.current=player.next;          
        event.list=[];
        event.list=['guanyu','zhangfei','zhaoyun','machao','mazhong','gongsunzan','huanggai','lvmeng','yujin','xuzhu'];
        "step 1"         
        event.current.chooseButton(ui.create.dialog('请您选择一名武将牌替换你的武将牌',[event.list,'character'],true),function(button){                 
                     return Math.random();
                       // return get.rank(button.link,true);
                 });                  
                "step 2"                    
                 if(result.bool){
                 event.current.init(result.links[0]);  
                 event.list.remove(result.links[0]);                                                    
                  }      
                 "step 3"      
                 if(event.current!=player.previous){
                     event.current=event.current.next;
                     event.goto(1);
                 }
                 else{
                     event.finish();
                 }
    },
                ai:{
                    order:9,
                },
            },
			
},

translate:{
             
             
         	  //"wwyj_moban":"模板",
          //  "wwyj_moban_info":"模板",
            "wwyj_yanyumoran":"烟雨墨染",
            "wwyj_yanyu":"烟雨",
            "wwyj_yanyu_info":"当一名其他角色失去武器牌后，你可选择其中的一张立即使用之",
            "wwyj_bingmou":"兵谋",
            "wwyj_bingmou_info":"锁定技，你的防御距离与你使用的【杀】的目标上限均等于你的攻击范围",
            "wwyj_wali":"瓦力",
            "wwyj_gaochang":"高产",
            "wwyj_gaochang_info":"你的摸牌阶段摸牌时，你可令摸牌数+X（X为偷师标记数），然后偷师标记清零",
            "wwyj_qiuxue":"求学",
            "wwyj_qiuxue_info":"觉醒技，若你已发动至少3次偷师，准备阶段，你回复1点体力并获得技能【高产】",
            "wwyj_toushi":"偷师",
            "wwyj_toushi_info":"出牌阶段限一次，你可以交给一名其他角色一张牌，若如此做，你获得一枚偷师标记，且可选择获得该角色的一项技能（主公技、觉醒技、限定技除外）直到下个出牌阶段开始",
            "wwyj_feicheng":"废城",
            "wwyj_xiangsi":"向死",
            "wwyj_xiangsi_info":"锁定技，每当你造成或受到一点伤害获得一个“废”标记，标记达到五个“废”获得技能【而生】并失去此技能 ",
            "wwyj_ersheng":"而生",
            "wwyj_ersheng_info":"锁定技，每当你进入濒死状态时，弃置一枚“废”标记，回复体力至两点",
            "wwyj_jiaocheng":"教程",
            "wwyj_jiaocheng_info":"当一名角色受到伤害后，若其体力值小于2，你可令其随机使用一张装备牌",
            "wwyj_guanli":"管理",
            "wwyj_guanli_info":"出牌阶段限一次，你可令一名其他角色随机弃置一张手牌，若这张手牌为：基本牌，你视为对其使用一张不计次数限制的杀；锦囊牌，你视为对其使用一张不能被无懈可击的决斗；装备牌，你使用之",
            "wwyj_xingyunnvshen":"幸运女神",
            "wwyj_shengshen":"圣神",
            "wwyj_shengshen_info":"每轮限一次，当一名角色进入濒死状态时，你可以观看牌堆顶的两张牌，然后弃置其中一张红色牌视为对其使用一张[桃]。若其中没有红色牌且你有红色的手牌，你可以弃置你的所有红色手牌，视为对其使用一张[桃]。",            
            "wwyj_kaiche":"开车",
            "wwyj_kaiche_info":"锁定技，摸牌阶段摸牌时，你额外摸X张牌，你的手牌上限加X（X为场上女性角色数且至少为1）",
            "wwyj_jiguang_rsha":"极光",
            "wwyj_jiguang_rsha_info":"当你需要打出杀时，可弃置一名角色的武器牌或进攻马，视为打出之",
            "wwyj_jiguang_rshan":"极光",
            "wwyj_jiguang_rshan_info":"当你需要打出闪时，可弃置一名角色的防具牌或防御马或宝物牌，视为打出之",
            "wwyj_jiguang_shan":"极光",
            "wwyj_jiguang_shan_info":"当你需要使用闪时，可弃置一名角色的防具牌或防御马或宝物牌，视为使用之",
            "wwyj_jiguang_shan2":"极光",
            "wwyj_jiguang_shan2_info":"当你需要使用闪时，可弃置一名角色的防具牌或防御马或宝物牌，视为使用之",
            "wwyj_jiguang_sha":"极光",   
            "wwyj_jiguang_sha_info":"出牌阶段，若你未使用过【杀】，你可弃置一名角色的装备区的武器牌或进攻马，视为使用（计入次数）一张杀",                        
            "wwyj_jiguang":"极光",
            "wwyj_jiguang_info":"你可在合适的时机弃置一名角色的装备区的：<li>武器牌或进攻马，视为使用（未使用过杀且计入次数）或打出一张杀<li>防具牌或防御马或宝物牌，视为使用或打出一张闪",            
            "wwyj_qianxu":"谦虚",
            "wwyj_qianxu_info":"（隔山打牛）锁定技，你不能成为与你距离为1的角色使用的杀的目标，你使用的杀只能指定与你距离大于1的角色为目标，且你使用杀时至多额外指定一名目标",
            "wwyj_yixue":"义写",
            "wwyj_yixue_info":"当一名其他角色的回合结束时，若其已受伤，你可交给其一张手牌，若此时其手牌数比你的多，你可以摸一张牌",
            "wwyj_taishangdaniu":"太上大牛",
            "wwyj_jiangsha1":"键杀",
            "wwyj_jiangsha1_info":"锁定技，当你成为杀的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此杀造成伤害，该角色翻面",
            "wwyj_jiangsha":"键杀",
            "wwyj_jiangsha_info":"锁定技，当你成为杀的目标时，若来源的武将牌正面朝上，你将手牌补至体力上限。若此杀造成伤害，该角色摸一张牌然后翻面",
            "wwyj_daigeng":"代更",
            "wwyj_daigeng_info":"每轮限一次，当一名角色翻面至武将牌背面朝上时，当前回合结束后，你可以执行一个额外的回合",
            "wwyj_touliang1":"凉",
            "wwyj_touliang":"透凉",
            "wwyj_touliang_info":"结束阶段，你可选择攻击范围内的1至X（你的手牌中的花色数）名其他角色，你与其各摸一张牌，令其直到其回合开始时，不能使用或打出基本牌",
            "wwyj_kangxing":"抗性",
            "wwyj_kangxing_info":"当你成为其他角色的牌的唯一目标时，你可弃置一张与该牌同类别的手牌，令该牌的目标对调",
            "wwyj_oldkangxing2":"抗性",
            "wwyj_oldkangxing2_info":"锁定技，你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌",
            "wwyj_oldkangxing":"抗性",
            "wwyj_oldkangxing_info":"锁定技，你免疫受到属性伤害。当你受到非属性伤害后，你摸一张牌且弃置伤害来源一张牌",
            "wwyj_tuikeng":"退坑",
            "wwyj_tuikeng_info":"锁定技，你的防御距离加X（X为你已损失的体力值）",
            "wwyj_shuihu":"水乎",
            "wwyj_chengxuyuan":"橙续缘",
            "wwyj_pipi":"皮皮",
            "wwyj_Sukincen":"小苏",
            "wwyj_liangcha":"凉茶",
            "wwyj_shijian":"诗笺",           
            "wwyj_maliao":"苏婆玛丽奥",   
            "wwyj_jiguangs":"极光",    
            "wwyj_wzszhaoyun":"我只是赵云",
            "wwyj_lunhuizhong":"轮回消逝者",
            "wwyj_ziyage":"呲牙哥",
            "wwyj_kanpoyiqie":"看破一切",
            "wwyj_daxiongxiaimao":"大熊小猫",
            "wwyj_kelejiabing":"可乐加冰",
            "wwyj_huijin":"辉烬贺流年",       
            "wwyj_danwuyunxi":"淡雾云曦",              
            "wwyj_chehuo":"车祸",
            "wwyj_chehuo_info":"锁定技，游戏开始所有角色摸牌后或你进入游戏时，你废除所有的装备栏",
            "wwyj_kangfu":"康复",
            "wwyj_kangfu_info":"锁定技，你的进攻距离+1；你的装备牌不计入手牌上限；当你脱离濒死状态或你击杀一名角色后，你回复一点体力并选择恢复一个装备栏",       
            "wwyj_jinzhu_shan":"烬铸",
            "wwyj_jinzhu_shan_info":"你可以把你的装备牌当做任意基本牌打出或使用",
            "wwyj_jinzhu_sha":"烬铸",
            "wwyj_jinzhu_sha_info":"你可以把你的装备牌当做任意基本牌打出或使用",
            "wwyj_jinzhu":"烬铸",
            "wwyj_jinzhu_info":"你可以把你的装备牌当做任意基本牌打出或使用",            
            //"wwyj_jilve_wuxie":"极略-无懈可击",
            "wwyj_jilve":"极略",
            "wwyj_jilve_info":"​出牌阶段限X次（X为你的体力值），你可以将一张手牌当一张于本回合内未使用过的基本牌或非延时类锦囊牌（除无懈可击外）使用。",
            "wwyj_jipin":"济贫",
            "wwyj_jipin_info":"当一名角色摸牌时，若其手牌数小于其体力值，你可令其额外摸一张牌",
            "wwyj_chengpiao":"诚剽",
            "wwyj_chengpiao_info":"出牌阶段限一次，你可观看一名其他角色的手牌并选择使用其中一张",
            "wwyj_lilun":"理论",
            "wwyj_lilun_info":"每当你使用一张非延时性锦囊牌时，你可以观看牌堆顶的三张牌，获得其中的一张牌，然后将其余两张牌先后置于牌堆顶",
            "wwyj_yanguan":"严管",
            "wwyj_yanguan_info":"每名角色的回合限一次，每当一名其他角色使用非延时性锦囊牌时，你可以弃置一张手牌令其失效，然后你获得此牌",            
            "wwyj_jinxiu":"进修",
            "wwyj_jinxiu_info":"锁定技，结束阶段你摸X张牌（X为你本回合造成的伤害数）",
            "wwyj_ciya":"呲牙",
            "wwyj_ciya_info":"摸牌阶段开始时，你可少摸一张牌，然后视为对攻击范围内包含有你的所有其他角色使用一张杀",
            "wwyj_qianzhui":"潜追",
            "wwyj_qianzhui_info":"觉醒技，当一名其他角色阵亡后，你失去技能【签到】、【嘤怪】，获得其所有的技能",          
            "wwyj_yingguai":"嘤怪",
            "wwyj_yingguai_info":"当你受到伤害后，你可令一名其他角色随机使用一张延时性锦囊牌（闪电、乐不思蜀、兵粮寸断）",
            "wwyj_qiandao":"签到",
            "wwyj_qiandao_info":"当一名其他角色判定牌生效后，你可获得其一张牌",
            "wwyj_zuikui":"罪魁",
            "wwyj_zuikui_info":"锁定技，当一名角色翻面至武将牌背面朝上或死亡时，所有其他的角色依次弃置一张牌",
            "wwyj_jiaoxiao":"叫嚣",
            "wwyj_jiaoxiao_info":"锁定技，当你受到杀造成的伤害时，你获得伤害来源的一张牌，并且此伤害加一",
            "wwyj_daixue":"代写",
            "wwyj_daixue_info":"出牌阶段限一次，若你已获得的【琴棋书画】中的至少一项技能，你可选择其中一项交给一名其他角色",
            "wwyj_caizhi1":"琴",
            "wwyj_caizhi2":"棋",
            "wwyj_caizhi3":"书",
            "wwyj_caizhi4":"画",
            "wwyj_caizhi":"才智",
            "wwyj_caizhi_info":"锁定技，你的回合开始时，你随机从【琴棋书画】中获得一项你未获得的技能。当你受到伤害时，若你已获得的【琴棋书画】中的至少一项，随机移除其中一项，然后伤害减一<li>注：琴：清弦；棋：看破；书：界连营；画：立牧",
            "wwyj_fengliu":"风流",
            "wwyj_fengliu_info":"游戏开始时、你的回合开始、结束时，你可从五名随机的女性中选择一位当作／替换你的副将并获得其所有的技能，直至重新发动此技能",
            "wwyj_baozao":"暴躁",
            "wwyj_baozao_info":"限定技，当你进入濒死状态时，你可令除你外的所有角色依次对伤害来源使用一张【杀】（限杀一轮）。然后本回合内每有一名角色受到伤害后，若你已受伤，你回复一点体力，否则你摸一张牌",
            "wwyj_xipi":"嘻皮",
            "wwyj_xipi_info":"锁定技，当你成为其他角色的牌的唯一目标时，你获得场上随机一名其他角色的一张牌",
            "wwyj_qianfu":"潜伏",
            "wwyj_qianfu_info":"锁定技，回合结束时，若你的武将牌正面朝上，你翻面。当你的武将牌背面朝上，你的防御距离为无限",
            "wwyj_ancha":"暗察",
            "wwyj_ancha2":"暗察",
            "wwyj_ancha_info":"<li>当一名角色受到来源不为你的伤害后，你可观看伤害来源的手牌，然后该受到伤害的角色摸一张牌。若为你受到伤害，你将你的武将牌正面朝上，当前回合结束后，你进行一个额外的回合。<li>当你的体力值小于2时，你获得技能【回坑】，直到你发动之",
            "wwyj_huikeng":"回坑",
            "wwyj_huikeng_info":"出牌阶段限一次，你可随机展示X（其他角色数）张武将牌，然后逐一选择其中一张，然后按次序替换其他角色的武将牌（体力上限与体力不变），每替换一名角色你就摸一张牌",
            "wwyj_chuangshi":"创世",
            "wwyj_chuangshi_info":"觉醒技，游戏开始所有角色摸牌后或你进入游戏时（对决模式），你可令其他角色从十名备选角色（关羽、张飞、赵云、马超、马忠、公孙瓒、黄盖、吕蒙、仁王禁、许禇）中挑选一名并变身成为之",
            "wwyj_xiadan":"下单",
            "wwyj_xiadan_info":"出牌阶段限一次，你可“下单”交给“接单者”一张牌，其回复一点体力且其可使用一张【杀】，然后你选择获得一张基本牌或非延时锦囊牌",
            "wwyj_xiadan1":"单",
            "wwyj_xiadan1_info":"",
            "wwyj_jiedan":"接单",
            "wwyj_jiedan_info":"出牌阶段限一次，其他角色可“下单”交给你一张牌，你回复一点体力且你此时可使用一张【杀】，然后其选择获得一张基本牌或非延时锦囊牌",
            "wwyj_zhizun":"至尊荣耀",	
        			"wwyj_zuozhe":"扩展作者",	
	        		"wwyj_fensi":"粉丝玩家",		
            },
			};
if(lib.device||lib.node){
				for(var i in wenwuyingjie.character){wenwuyingjie.character[i][4].push('ext:文武英杰/'+i+'.jpg');}
			}else{
				for(var i in wenwuyingjie.character){wenwuyingjie.character[i][4].push('db:extension-文武英杰:'+i+'.jpg');}
			}
			return wenwuyingjie;
		});
		lib.config.all.characters.push('wenwuyingjie');		
		if(!lib.config.characters.contains('wenwuyingjie')) lib.config.characters.remove('wenwuyingjie');
		lib.translate['wenwuyingjie_character_config']='<font color=#f00>文武英杰</font>';
		
     
};
},help:{},config:{
"wwyjhelp":{
				"name":"文武英杰","init":"1","item":{"1":"查看介绍","2":"<li>本扩展是第四代作者包，旨在设计一个可玩性强的作者包，纪念无名杀的众多作者与玩家，强度相对平衡，可联机。若武将界面没显示图片，请先开启武将菜单右上角的总开关然后重启游戏","3":"<li>本扩展能在关闭兼容模式情况下流畅运行，若发现BUG可到无名杀扩展交流群②：852740627 反馈，有技能设计的建议也可联系作者"}
					},									
			 "wwyjjishatexiao":{
    "name":"全新击杀特效",
    "intro":"开启后重启游戏生效。场上有人击杀另一名角色后会播放动画",
    "init":false
    },		
},package:{
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
        list:[		
		],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"凉茶",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})
